import { LiveAnnouncer } from '@angular/cdk/a11y';
import { createComponent, DestroyRef, EnvironmentInjector, inject, Injectable } from '@angular/core';
import { VisuallyHiddenStylesComponent } from './visually-hidden-styles.component';

/**
 * Announces a message to screen readers through the polite live region of the CDK, which sits outside every
 * component. A live region inside a control would add its message to the accessible name of the control.
 */
@Injectable({ providedIn: 'root' })
export class AnnouncerService {
    private readonly liveAnnouncer = inject(LiveAnnouncer);

    public constructor() {
        // Angular keeps the styles of a component on the page for as long as the component exists.
        const styles = createComponent(VisuallyHiddenStylesComponent, {
            environmentInjector: inject(EnvironmentInjector),
        });

        inject(DestroyRef).onDestroy(() => styles.destroy());
    }

    /** Announces the message once screen readers finish what they're reading, such as `'Saving'`. */
    public announce(message: string): void {
        // The promise only resolves once the CDK writes the message, and never rejects. Nothing waits for that, so
        // `void` marks it as deliberately not awaited.
        void this.liveAnnouncer.announce(message, 'polite');
    }
}
