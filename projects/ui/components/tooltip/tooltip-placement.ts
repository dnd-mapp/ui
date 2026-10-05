/**
 * The sides of its trigger that a tooltip can show on, after the placements of the `Tooltip` Figma component.
 */
export const TooltipPlacements = {
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    right: 'right',
} as const;

/**
 * A side of its trigger that a tooltip shows on, such as `'top'`.
 */
export type TooltipPlacement = (typeof TooltipPlacements)[keyof typeof TooltipPlacements];

/**
 * The side that a tooltip shows on when its trigger doesn't pick one.
 */
export const DEFAULT_TOOLTIP_PLACEMENT: TooltipPlacement = TooltipPlacements.top;

/**
 * Transforms the placement input of `TooltipDirective`. The bare attribute sets an empty string, which means the
 * default placement.
 */
export function tooltipPlacementAttribute(value: TooltipPlacement | ''): TooltipPlacement {
    return value === '' ? DEFAULT_TOOLTIP_PLACEMENT : value;
}

/**
 * Returns the side across the trigger from a placement, which a tooltip flips to when it doesn't fit.
 */
export function oppositePlacement(placement: TooltipPlacement): TooltipPlacement {
    const opposites: Record<TooltipPlacement, TooltipPlacement> = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left',
    };

    return opposites[placement];
}
