import { InjectionToken, type Signal } from '@angular/core';

/**
 * The sizes of an icon, after the `Size` property of the `Icon` Figma component.
 */
export const IconSizes = {
    small: 'small',
    medium: 'medium',
    large: 'large',
} as const;

/**
 * A size of an icon, such as `'small'`.
 */
export type IconSize = (typeof IconSizes)[keyof typeof IconSizes];

/**
 * The size of an icon that doesn't set one, outside a control that provides `ICON_SIZE`.
 */
export const DEFAULT_ICON_SIZE: IconSize = IconSizes.medium;

/**
 * The size for the icons inside a control, such as the icons in the slots of a button. A control provides it to
 * size its icons after its own size. An icon that sets no `size` takes it from the closest control that provides it.
 */
export const ICON_SIZE = new InjectionToken<Signal<IconSize>>('ICON_SIZE');

/**
 * Transforms the `size` input of an icon. The bare `size` attribute sets an empty string, which sets no size, the
 * same as leaving the attribute out.
 */
export function iconSizeAttribute(value: IconSize | '' | undefined): IconSize | undefined {
    return value === '' ? undefined : value;
}
