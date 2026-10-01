import { Component } from '@angular/core';
import { IconDirective } from '../icon.directive';

/**
 * The `chevron-down` icon, for an action that opens a menu or a list below it.
 */
@Component({
    selector: 'dma-icon-chevron-down',
    templateUrl: './icon-chevron-down.component.svg',
    styleUrl: '../icon.scss',
    host: {
        'data-glyph': 'chevron-down',
    },
})
export class IconChevronDownComponent extends IconDirective {}
