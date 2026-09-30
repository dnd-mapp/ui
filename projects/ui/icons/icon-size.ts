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
 * The size of an icon that doesn't set one.
 */
export const DEFAULT_ICON_SIZE: IconSize = IconSizes.medium;

/**
 * Transforms the `size` input of an icon. The bare `size` attribute sets an empty string, which means the default
 * size.
 */
export function iconSizeAttribute(value: IconSize | ''): IconSize {
    return value === '' ? DEFAULT_ICON_SIZE : value;
}
