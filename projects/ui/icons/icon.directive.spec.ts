import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component, signal, type Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { tokens } from '@dnd-mapp/design-tokens';
import { IconHarness } from '@dnd-mapp/ui/icons/testing';
import { IconChevronDownComponent } from './glyphs/icon-chevron-down.component';
import { IconCircleNotchComponent } from './glyphs/icon-circle-notch.component';
import { IconPlusComponent } from './glyphs/icon-plus.component';
import { IconXmarkComponent } from './glyphs/icon-xmark.component';
import { IconGlyphs } from './icon-glyph';
import { DEFAULT_ICON_SIZE, IconSizes, type IconSize } from './icon-size';

const glyphComponents = [IconChevronDownComponent, IconCircleNotchComponent, IconPlusComponent, IconXmarkComponent];

@Component({
    template: `<p style="color: var(--dma-color-text-on-accent)">
        <dma-icon-chevron-down [size]="size()" />
        <dma-icon-circle-notch [size]="size()" />
        <dma-icon-plus [size]="size()" />
        <dma-icon-xmark [size]="size()" />
    </p>`,
    imports: [glyphComponents],
})
class TestHostComponent {
    public readonly size = signal<IconSize>(DEFAULT_ICON_SIZE);
}

@Component({
    template: `<dma-icon-xmark />`,
    imports: [IconXmarkComponent],
})
class NoSizeTestHostComponent {}

@Component({
    template: `<dma-icon-xmark size />`,
    imports: [IconXmarkComponent],
})
class BareSizeTestHostComponent {}

/**
 * Resolves `value` to what the browser computes for the CSS `property` inside `context`. The value can name
 * tokens, such as `var(--dma-text-label-medium-line-height)`.
 */
function resolveStyle(property: string, value: string, context: HTMLElement) {
    for (const [name] of value.matchAll(/--[\w-]+/g)) {
        if (getComputedStyle(context).getPropertyValue(name) === '') {
            throw new Error(`The design tokens don't define ${name}.`);
        }
    }
    const probe = document.createElement('span');

    probe.style.setProperty(property, value);
    context.append(probe);

    const resolved = getComputedStyle(probe).getPropertyValue(property);

    probe.remove();

    return resolved;
}

/** Returns the frame of an icon, as the width and the height that the browser computes for it. */
async function getFrame(icon: IconHarness) {
    const host = await icon.host();

    return { width: await host.getCssValue('width'), height: await host.getCssValue('height') };
}

/** Returns the frame that the line height token of a label style resolves to inside `context`. */
function toFrame(lineHeight: string, context: HTMLElement) {
    const size = resolveStyle('height', lineHeight, context);

    return { width: size, height: size };
}

describe('Icons', () => {
    async function setup<T>(host: Type<T>) {
        const fixture = TestBed.createComponent(host);
        const element = fixture.nativeElement as HTMLElement;
        const loader = TestbedHarnessEnvironment.loader(fixture);
        const icons = await loader.getAllHarnesses(IconHarness);

        return { fixture, element, loader, icons };
    }

    it('has a component for every glyph', async () => {
        const { icons } = await setup(TestHostComponent);

        const glyphs = await Promise.all(icons.map(async (icon) => icon.getGlyph()));

        expect(glyphs).toEqual(Object.values(IconGlyphs));
    });

    it('shows each glyph as an SVG in the 640 by 640 viewBox of Font Awesome', async () => {
        const { element } = await setup(TestHostComponent);

        const svgs = [...element.querySelectorAll('.dma-icon > svg')];

        expect(svgs).toHaveLength(glyphComponents.length);

        for (const svg of svgs) {
            expect(svg.getAttribute('viewBox')).toBe('0 0 640 640');
        }
    });

    it('hides every icon from assistive technology', async () => {
        const { icons } = await setup(TestHostComponent);

        for (const icon of icons) {
            expect(await (await icon.host()).getAttribute('aria-hidden')).toBe('true');
        }
    });

    it('fills every glyph with the color of the text around it', async () => {
        const { element, icons } = await setup(TestHostComponent);

        const color = resolveStyle('color', tokens.color.text['on-accent'], element);

        for (const icon of icons) {
            expect(await (await icon.host()).getCssValue('fill')).toBe(color);
        }
        for (const path of element.querySelectorAll('.dma-icon path')) {
            expect(getComputedStyle(path).fill).toBe(color);
        }
    });

    it('has the Medium size when it sets no size', async () => {
        const { element, loader } = await setup(NoSizeTestHostComponent);
        const icon = await loader.getHarness(IconHarness);

        expect(await icon.getSize()).toBe('medium');
        expect(await getFrame(icon)).toEqual(toFrame(tokens.text.label.medium['line-height'], element));
    });

    it('has the Medium size when it sets the size attribute without a value', async () => {
        const { element, loader } = await setup(BareSizeTestHostComponent);
        const icon = await loader.getHarness(IconHarness);

        expect(await icon.getSize()).toBe('medium');
        expect(await getFrame(icon)).toEqual(toFrame(tokens.text.label.medium['line-height'], element));
    });

    describe.each<{ size: IconSize; lineHeight: string }>([
        { size: IconSizes.small, lineHeight: tokens.text.label.small['line-height'] },
        { size: IconSizes.medium, lineHeight: tokens.text.label.medium['line-height'] },
        { size: IconSizes.large, lineHeight: tokens.text.label.large['line-height'] },
    ])('in the $size size', ({ size, lineHeight }) => {
        it('has a square frame as high as the line height of the label it pairs with', async () => {
            const { fixture, element, icons } = await setup(TestHostComponent);

            fixture.componentInstance.size.set(size);

            for (const icon of icons) {
                expect(await icon.getSize()).toBe(size);
                expect(await getFrame(icon)).toEqual(toFrame(lineHeight, element));
            }
        });

        it('draws a glyph 0.8 times as large as its frame', async () => {
            const { fixture, element, loader } = await setup(TestHostComponent);

            fixture.componentInstance.size.set(size);

            // `circle-notch` reaches across the whole glyph area, from 64 to 576 in its viewBox. Its notch sits at the
            // top, so it spans the area from side to side but not from top to bottom.
            const icon = await loader.getHarness(IconHarness.with({ glyph: 'circle-notch', size }));
            const frame = (await (await icon.host()).getDimensions()).width;
            const glyph = element.querySelector('dma-icon-circle-notch path')?.getBoundingClientRect().width;

            expect(glyph).toBeCloseTo(frame * 0.8, 1);
        });
    });
});
