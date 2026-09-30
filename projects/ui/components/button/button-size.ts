/**
 * The sizes of `ButtonComponent`, after the `Size` property of the `Button` Figma component.
 */
export const ButtonSizes = {
    small: 'small',
    medium: 'medium',
    large: 'large',
} as const;

/**
 * A size of `ButtonComponent`, such as `'small'`.
 */
export type ButtonSize = (typeof ButtonSizes)[keyof typeof ButtonSizes];

/**
 * The size of a button that doesn't set one.
 */
export const DEFAULT_BUTTON_SIZE: ButtonSize = ButtonSizes.medium;

/**
 * Transforms the `size` input of `ButtonComponent`. The bare `size` attribute sets an empty string, which means
 * the default size.
 */
export function buttonSizeAttribute(value: ButtonSize | ''): ButtonSize {
    return value === '' ? DEFAULT_BUTTON_SIZE : value;
}
