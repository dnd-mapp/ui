/**
 * The variants of `ButtonComponent`, after the `Variant` property of the `Button` Figma component.
 */
export const ButtonVariants = {
    primary: 'primary',
    secondary: 'secondary',
    ghost: 'ghost',
    danger: 'danger',
} as const;

/**
 * A variant of `ButtonComponent`, such as `'danger'`.
 */
export type ButtonVariant = (typeof ButtonVariants)[keyof typeof ButtonVariants];

/**
 * The variant of a button that doesn't set one.
 */
export const DEFAULT_BUTTON_VARIANT: ButtonVariant = ButtonVariants.primary;

/**
 * Transforms the `variant` input of `ButtonComponent`. The bare `variant` attribute sets an empty string, which
 * means the default variant.
 */
export function buttonVariantAttribute(value: ButtonVariant | ''): ButtonVariant {
    return value === '' ? DEFAULT_BUTTON_VARIANT : value;
}
