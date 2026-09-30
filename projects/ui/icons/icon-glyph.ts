/**
 * The glyphs of the icons, after their names in Font Awesome and on the `Glyphs` page of the `Icons` Figma file.
 * Each glyph has a component of its own, such as `IconXmarkComponent` for `xmark`.
 */
export const IconGlyphs = {
    chevronDown: 'chevron-down',
    circleNotch: 'circle-notch',
    plus: 'plus',
    xmark: 'xmark',
} as const;

/**
 * A glyph of an icon, such as `'xmark'`.
 */
export type IconGlyph = (typeof IconGlyphs)[keyof typeof IconGlyphs];
