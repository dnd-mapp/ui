import type { ComponentHarness, HarnessLoader, HarnessQuery } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import type { Type } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';

/** The test environment that `setupHarness()` returns. */
export interface HarnessSetup<T, H extends ComponentHarness> {
    /** The fixture of the host component. */
    fixture: ComponentFixture<T>;
    /** The element of the host component. */
    element: HTMLElement;
    /** The harness loader of the host component, to load more harnesses inside it. */
    loader: HarnessLoader;
    /** The harness that `query` finds inside the host component. */
    harness: H;
}

/**
 * Creates the `host` component through the `TestBed`, and loads the first harness that `query` finds inside it, such
 * as `ButtonHarness` or `ButtonHarness.with({ text: 'Save map' })`. Configure the `TestBed` before you call it.
 *
 * @throws When `query` finds no harness inside the host component.
 */
export async function setupHarness<T, H extends ComponentHarness>(
    host: Type<T>,
    query: HarnessQuery<H>,
): Promise<HarnessSetup<T, H>> {
    const fixture = TestBed.createComponent(host);
    const element = fixture.nativeElement as HTMLElement;
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const harness = await loader.getHarness(query);

    return { fixture, element, loader, harness };
}
