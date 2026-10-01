import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
    Component,
    createComponent,
    DestroyRef,
    EnvironmentInjector,
    inject,
    Injectable,
    ViewEncapsulation,
} from '@angular/core';

/**
 * Hides the live region of the CDK from sight. The CDK only loads these styles through a private API, or through a
 * stylesheet that an app would have to add, so the announcer loads its own copy of them.
 */
@Component({
    selector: 'dma-visually-hidden-styles',
    template: '',
    styles: `
        .cdk-visually-hidden {
            position: absolute;
            inset-inline-start: 0;
            overflow: hidden;
            inline-size: 1px;
            block-size: 1px;
            margin: -1px;
            padding: 0;
            border: 0;
            white-space: nowrap;
            outline: 0;
            clip-path: inset(50%);
            appearance: none;
        }
    `,
    encapsulation: ViewEncapsulation.None,
})
class VisuallyHiddenStylesComponent {}

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
        void this.liveAnnouncer.announce(message, 'polite');
    }
}
