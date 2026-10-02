import { ComponentHarness, HarnessPredicate, type BaseHarnessFilters } from '@angular/cdk/testing';
import { Component, signal } from '@angular/core';
import { setupHarness } from './setup-harness';

interface ItemHarnessFilters extends BaseHarnessFilters {
    text?: string;
}

class ItemHarness extends ComponentHarness {
    public static readonly hostSelector = '.item';

    public static with(options: ItemHarnessFilters = {}): HarnessPredicate<ItemHarness> {
        return new HarnessPredicate(ItemHarness, options).addOption('text', options.text, async (harness, text) =>
            HarnessPredicate.stringMatches(harness.getText(), text),
        );
    }

    public async getText(): Promise<string> {
        return (await this.host()).text();
    }
}

@Component({
    template: `<p class="item">{{ first() }}</p>
        <p class="item">Second</p>`,
})
class TestHostComponent {
    public readonly first = signal('First');
}

@Component({
    template: `<p>No item</p>`,
})
class EmptyTestHostComponent {}

describe('setupHarness', () => {
    it('creates the host component, and returns its fixture and its element', async () => {
        const { fixture, element } = await setupHarness(TestHostComponent, ItemHarness);

        expect(fixture.componentInstance).toBeInstanceOf(TestHostComponent);
        expect(element).toBe(fixture.nativeElement);
    });

    it('loads the first harness of its type inside the host component', async () => {
        const { harness } = await setupHarness(TestHostComponent, ItemHarness);

        expect(await harness.getText()).toBe('First');
    });

    it('loads the first harness that a predicate finds', async () => {
        const { harness } = await setupHarness(TestHostComponent, ItemHarness.with({ text: 'Second' }));

        expect(await harness.getText()).toBe('Second');
    });

    it('returns a loader for more harnesses inside the host component', async () => {
        const { loader } = await setupHarness(TestHostComponent, ItemHarness);

        expect(await loader.getAllHarnesses(ItemHarness)).toHaveLength(2);
    });

    it('lets the harness see the changes to the host component', async () => {
        const { fixture, harness } = await setupHarness(TestHostComponent, ItemHarness);

        fixture.componentInstance.first.set('Changed');

        expect(await harness.getText()).toBe('Changed');
    });

    it('rejects when no harness matches inside the host component', async () => {
        await expect(setupHarness(EmptyTestHostComponent, ItemHarness)).rejects.toThrow();
    });
});
