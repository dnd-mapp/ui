import { Component } from '@angular/core';
import { IconDirective } from '../icon.directive';

/**
 * The `circle-notch` icon, for a control that is busy, such as a button that is loading.
 */
@Component({
    selector: 'dma-icon-circle-notch',
    templateUrl: './icon-circle-notch.component.svg',
    styleUrl: '../icon.scss',
    host: {
        'data-glyph': 'circle-notch',
    },
})
export class IconCircleNotchComponent extends IconDirective {}
