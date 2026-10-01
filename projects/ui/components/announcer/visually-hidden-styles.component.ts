import { Component, ViewEncapsulation } from '@angular/core';

/**
 * Hides the live region of the CDK from sight. The CDK only loads these styles through a private API, or through a
 * stylesheet that an app would have to add, so the announcer loads its own copy of them.
 */
@Component({
    selector: 'dma-visually-hidden-styles',
    template: '',
    styleUrl: './visually-hidden-styles.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class VisuallyHiddenStylesComponent {}
