import { Component } from '@angular/core';
import { IconDirective } from '../icon.directive';

/**
 * The `plus` icon, for an action that adds or creates something, such as a new map.
 */
@Component({
    selector: 'dma-icon-plus',
    templateUrl: './icon-plus.component.svg',
    styleUrl: '../icon.scss',
    host: {
        'data-glyph': 'plus',
    },
})
export class IconPlusComponent extends IconDirective {}
