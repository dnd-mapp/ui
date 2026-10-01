import { Component } from '@angular/core';
import { IconDirective } from '../icon.directive';

/**
 * The `xmark` icon, for an action that closes or dismisses something, such as a dialog.
 */
@Component({
    selector: 'dma-icon-xmark',
    templateUrl: './icon-xmark.component.svg',
    styleUrl: '../icon.scss',
    host: {
        'data-glyph': 'xmark',
    },
})
export class IconXmarkComponent extends IconDirective {}
