import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { userEvent } from 'vitest/browser';
import { Announcer } from '../a11y/announcer';
import { Button, ButtonSize, ButtonVariant, SPINNER_DELAY, SPINNER_MIN_DURATION } from './button';

@Component({
    imports: [Button],
    template: `
        <button
            dma-button
            type="button"
            [variant]="variant()"
            [size]="size()"
            [disabled]="disabled()"
            [disabledInteractive]="disabledInteractive()"
            [loading]="loading()"
            [loadingLabel]="loadingLabel()"
            (click)="clicks.set(clicks() + 1)"
        >
            Save
        </button>
    `,
})
class TestHost {
    public readonly variant = signal<ButtonVariant>('primary');
    public readonly size = signal<ButtonSize>('medium');
    public readonly disabled = signal(false);
    public readonly disabledInteractive = signal(false);
    public readonly loading = signal(false);
    public readonly loadingLabel = signal('Loading');
    public readonly clicks = signal(0);
}

// Distinct stand-ins for the color tokens, so a test can tell which token a style resolves to.
const colorTokens = [
    'background-accent',
    'background-accent-hover',
    'background-accent-pressed',
    'background-danger',
    'background-danger-hover',
    'background-danger-pressed',
    'background-neutral-hover',
    'background-neutral-pressed',
    'background-disabled',
    'border-default',
    'border-disabled',
    'border-focus',
    'text-default',
    'text-on-accent',
    'text-on-danger',
    'text-disabled',
] as const;

type ColorToken = (typeof colorTokens)[number];

function tokenColor(token: ColorToken): string {
    return `rgb(${colorTokens.indexOf(token) + 1}, 0, 0)`;
}

const transparent = 'rgba(0, 0, 0, 0)';

// The values of the other tokens that the button uses, as the design tokens define them.
const tokens: Record<string, string> = {
    'spacing-4': '0.25rem',
    'spacing-8': '0.5rem',
    'spacing-12': '0.75rem',
    'spacing-16': '1rem',
    'spacing-24': '1.5rem',
    'radius-4': '0.25rem',
    'radius-8': '0.5rem',
    'radius-12': '0.75rem',
    'text-label-small-font': '500 0.75rem/1rem sans-serif',
    'text-label-medium-font': '500 0.875rem/1.25rem sans-serif',
    'text-label-large-font': '500 1rem/1.5rem sans-serif',
};

function setTokens(): void {
    for (const token of colorTokens) {
        document.documentElement.style.setProperty(`--dma-color-${token}`, tokenColor(token));
    }
    for (const [token, value] of Object.entries(tokens)) {
        document.documentElement.style.setProperty(`--dma-${token}`, value);
    }
}

function removeTokens(): void {
    for (const token of colorTokens) {
        document.documentElement.style.removeProperty(`--dma-color-${token}`);
    }
    for (const token of Object.keys(tokens)) {
        document.documentElement.style.removeProperty(`--dma-${token}`);
    }
}

describe('Button', () => {
    let fixture: ComponentFixture<TestHost>;
    let host: TestHost;
    let button: HTMLButtonElement;

    beforeAll(setTokens);

    afterAll(removeTokens);

    beforeEach(async () => {
        fixture = TestBed.createComponent(TestHost);
        host = fixture.componentInstance;
        await fixture.whenStable();
        button = (fixture.nativeElement as HTMLElement).querySelector('button')!;
    });

    afterEach(async () => {
        vi.useRealTimers();
        vi.restoreAllMocks();

        // The pointer stays where a test leaves it, over the next button, so move it off.
        await userEvent.unhover(button);
    });

    function update(): void {
        fixture.detectChanges();
    }

    function spinner(): SVGElement | null {
        return button.querySelector('.dma-button-spinner');
    }

    function content(): HTMLElement {
        return button.querySelector('.dma-button-content')!;
    }

    it('defaults to a medium primary button', () => {
        expect([...button.classList].sort()).toEqual(['dma-button', 'dma-button-medium', 'dma-button-primary']);
        expect(button.hasAttribute('disabled')).toBe(false);
        expect(button.hasAttribute('aria-disabled')).toBe(false);
        expect(button.textContent.trim()).toBe('Save');
    });

    it('reports clicks', () => {
        button.click();

        expect(host.clicks()).toBe(1);
    });

    describe('sizes', () => {
        it.each([
            { size: 'small', height: 32, padding: '11px', radius: '4px', fontSize: '12px', lineHeight: '16px' },
            { size: 'medium', height: 40, padding: '15px', radius: '8px', fontSize: '14px', lineHeight: '20px' },
            { size: 'large', height: 48, padding: '23px', radius: '12px', fontSize: '16px', lineHeight: '24px' },
        ] as const)('sizes a $size button', ({ size, height, padding, radius, fontSize, lineHeight }) => {
            host.size.set(size);
            update();

            const style = getComputedStyle(button);

            expect(button.classList).toContain(`dma-button-${size}`);
            expect(button.getBoundingClientRect().height).toBe(height);

            // The 1px border sits inside the padding of the Figma component.
            expect(style.paddingLeft).toBe(padding);
            expect(style.paddingRight).toBe(padding);
            expect(style.borderTopLeftRadius).toBe(radius);
            expect(style.fontSize).toBe(fontSize);
            expect(style.lineHeight).toBe(lineHeight);
            expect(style.fontWeight).toBe('500');
        });
    });

    describe('variants', () => {
        it.each([
            {
                variant: 'primary',
                background: tokenColor('background-accent'),
                border: transparent,
                text: tokenColor('text-on-accent'),
                disabledBackground: tokenColor('background-disabled'),
                disabledBorder: transparent,
            },
            {
                variant: 'secondary',
                background: transparent,
                border: tokenColor('border-default'),
                text: tokenColor('text-default'),
                disabledBackground: transparent,
                disabledBorder: tokenColor('border-disabled'),
            },
            {
                variant: 'danger',
                background: tokenColor('background-danger'),
                border: transparent,
                text: tokenColor('text-on-danger'),
                disabledBackground: tokenColor('background-disabled'),
                disabledBorder: transparent,
            },
            {
                variant: 'ghost',
                background: transparent,
                border: transparent,
                text: tokenColor('text-default'),
                disabledBackground: transparent,
                disabledBorder: transparent,
            },
        ] as const)(
            'colors a $variant button',
            ({ variant, background, border, text, disabledBackground, disabledBorder }) => {
                host.variant.set(variant);
                update();

                let style = getComputedStyle(button);

                expect(button.classList).toContain(`dma-button-${variant}`);
                expect(style.backgroundColor).toBe(background);
                expect(style.borderTopColor).toBe(border);
                expect(style.borderTopWidth).toBe('1px');
                expect(style.color).toBe(text);

                host.disabled.set(true);
                update();
                style = getComputedStyle(button);

                expect(style.backgroundColor).toBe(disabledBackground);
                expect(style.borderTopColor).toBe(disabledBorder);
                expect(style.color).toBe(tokenColor('text-disabled'));
            },
        );

        it.each([
            { variant: 'primary', hover: tokenColor('background-accent-hover') },
            { variant: 'secondary', hover: tokenColor('background-neutral-hover') },
            { variant: 'danger', hover: tokenColor('background-danger-hover') },
            { variant: 'ghost', hover: tokenColor('background-neutral-hover') },
        ] as const)('fills a hovered $variant button', async ({ variant, hover }) => {
            host.variant.set(variant);
            update();

            await userEvent.hover(button);

            expect(getComputedStyle(button).backgroundColor).toBe(hover);
        });
    });

    describe('focus', () => {
        it('shows the focus ring on keyboard focus', async () => {
            await userEvent.tab();

            const style = getComputedStyle(button);

            expect(document.activeElement).toBe(button);
            expect(style.outlineStyle).toBe('solid');
            expect(style.outlineWidth).toBe('2px');
            expect(style.outlineOffset).toBe('2px');
            expect(style.outlineColor).toBe(tokenColor('border-focus'));
        });
    });

    describe('disabled', () => {
        it('disables the native button', async () => {
            host.disabled.set(true);
            update();

            expect(button.disabled).toBe(true);
            expect(button.hasAttribute('aria-disabled')).toBe(false);
            expect(button.classList).toContain('dma-button-disabled');

            await userEvent.hover(button);

            expect(getComputedStyle(button).backgroundColor).toBe(tokenColor('background-disabled'));
        });

        it('keeps an interactive disabled button focusable, but blocks its clicks', async () => {
            host.disabled.set(true);
            host.disabledInteractive.set(true);
            update();

            expect(button.disabled).toBe(false);
            expect(button.getAttribute('aria-disabled')).toBe('true');
            expect(button.classList).toContain('dma-button-disabled');

            await userEvent.tab();

            expect(document.activeElement).toBe(button);
            expect(getComputedStyle(button).outlineWidth).toBe('2px');

            button.click();

            expect(host.clicks()).toBe(0);
        });

        it('stops an interactive disabled button from submitting its form', () => {
            const form = document.createElement('form');
            const submit = vi.fn((event: SubmitEvent) => event.preventDefault());

            const parent = button.parentElement!;

            form.addEventListener('submit', submit);
            button.type = 'submit';
            form.appendChild(button);
            document.body.appendChild(form);

            host.disabled.set(true);
            host.disabledInteractive.set(true);
            update();

            button.click();

            expect(submit).not.toHaveBeenCalled();

            parent.appendChild(button);
            form.remove();
        });

        it('ignores disabledInteractive on an enabled button', () => {
            host.disabledInteractive.set(true);
            update();

            expect(button.disabled).toBe(false);
            expect(button.hasAttribute('aria-disabled')).toBe(false);

            button.click();

            expect(host.clicks()).toBe(1);
        });
    });

    describe('loading', () => {
        let announce: ReturnType<typeof vi.spyOn>;

        beforeEach(() => {
            vi.useFakeTimers();
            announce = vi.spyOn(TestBed.inject(Announcer), 'announce').mockImplementation(() => undefined);
        });

        function startLoading(): void {
            host.loading.set(true);
            update();
        }

        function stopLoading(): void {
            host.loading.set(false);
            update();
        }

        function advance(ms: number): void {
            vi.advanceTimersByTime(ms);
            update();
        }

        it('blocks clicks at once, before the spinner appears', () => {
            startLoading();

            expect(button.getAttribute('aria-disabled')).toBe('true');
            expect(button.disabled).toBe(false);
            expect(spinner()).toBeNull();

            button.click();

            expect(host.clicks()).toBe(0);
        });

        it('shows the spinner after the delay, in place of the label', () => {
            const width = button.getBoundingClientRect().width;

            startLoading();
            advance(SPINNER_DELAY - 1);

            expect(spinner()).toBeNull();
            expect(announce).not.toHaveBeenCalled();

            advance(1);

            expect(spinner()).not.toBeNull();
            expect(spinner()!.getAttribute('aria-hidden')).toBe('true');
            expect(button.classList).toContain('dma-button-loading');
            expect(getComputedStyle(content()).opacity).toBe('0');
            expect(getComputedStyle(content()).visibility).toBe('visible');
            expect(button.getBoundingClientRect().width).toBe(width);
            expect(announce).toHaveBeenCalledExactlyOnceWith('Loading');
        });

        it('keeps the default colors while it loads', async () => {
            startLoading();
            advance(SPINNER_DELAY);

            expect(getComputedStyle(button).color).toBe(tokenColor('text-on-accent'));

            await userEvent.hover(button);

            expect(getComputedStyle(button).backgroundColor).toBe(tokenColor('background-accent'));
        });

        it('announces the loading label', () => {
            host.loadingLabel.set('Saving');
            startLoading();
            advance(SPINNER_DELAY);

            expect(announce).toHaveBeenCalledExactlyOnceWith('Saving');
        });

        it('shows no spinner for a fast action', () => {
            startLoading();
            advance(SPINNER_DELAY - 1);
            stopLoading();
            advance(SPINNER_DELAY);

            expect(spinner()).toBeNull();
            expect(announce).not.toHaveBeenCalled();
            expect(button.hasAttribute('aria-disabled')).toBe(false);

            button.click();

            expect(host.clicks()).toBe(1);
        });

        it('keeps the spinner for the minimum duration', () => {
            startLoading();
            advance(SPINNER_DELAY);
            advance(100);
            stopLoading();
            advance(SPINNER_MIN_DURATION - 101);

            expect(spinner()).not.toBeNull();
            expect(button.getAttribute('aria-disabled')).toBe('true');

            advance(1);

            expect(spinner()).toBeNull();
            expect(button.classList).not.toContain('dma-button-loading');
            expect(button.hasAttribute('aria-disabled')).toBe(false);
        });

        it('hides the spinner at once after the minimum duration', () => {
            startLoading();
            advance(SPINNER_DELAY + SPINNER_MIN_DURATION);
            stopLoading();
            advance(0);

            expect(spinner()).toBeNull();
        });

        it('keeps the spinner when loading starts again before it hides', () => {
            startLoading();
            advance(SPINNER_DELAY);
            stopLoading();
            startLoading();
            advance(SPINNER_DELAY + SPINNER_MIN_DURATION);

            expect(spinner()).not.toBeNull();
            expect(announce).toHaveBeenCalledOnce();
        });

        it('clears the timer when it is destroyed', () => {
            startLoading();
            fixture.destroy();

            expect(vi.getTimerCount()).toBe(0);
        });
    });
});
