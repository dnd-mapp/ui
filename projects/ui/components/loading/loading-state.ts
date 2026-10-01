import { assertInInjectionContext, computed, effect, inject, signal, type Signal } from '@angular/core';
import { AnnouncerService } from '../announcer/announcer.service';

/** How long a control loads before it shows its spinner, so a fast action shows none. */
const SPINNER_DELAY = 300;

/** How long a spinner shows at least, so it never flashes. */
const SPINNER_MINIMUM = 500;

/** The state of a control that shows a spinner while the action it started runs. */
export interface LoadingState {
    /** Whether the control shows its spinner in place of its content. */
    readonly spinnerShown: Signal<boolean>;

    /** Whether the control is busy: from the moment it starts loading until its spinner hides. */
    readonly busy: Signal<boolean>;
}

/**
 * Times the spinner of a control after the `Loading` rules of the `Button` Figma component. The spinner shows once
 * the control has loaded for 300ms, and stays at least 500ms. Once it shows, screen readers hear the label, such as
 * `'Saving'`.
 *
 * Call it in the injection context of the control, such as a field initializer of its component.
 */
export function injectLoadingState(loading: Signal<boolean>, label: Signal<string>): LoadingState {
    assertInInjectionContext(injectLoadingState);

    const announcer = inject(AnnouncerService);

    /** When the spinner started to show, or `null` while it's hidden. */
    const spinnerShownAt = signal<number | null>(null);
    const spinnerShown = computed(() => spinnerShownAt() !== null);

    // Shows the spinner once the control has loaded for 300ms, and hides it once it stops loading, but only after
    // the spinner has shown for 500ms.
    effect((onCleanup) => {
        const isLoading = loading();
        const shownAt = spinnerShownAt();

        if (isLoading === (shownAt !== null)) {
            return;
        }
        const timeout = shownAt === null ? SPINNER_DELAY : shownAt + SPINNER_MINIMUM - Date.now();
        const timer = setTimeout(() => (isLoading ? showSpinner() : spinnerShownAt.set(null)), timeout);

        onCleanup(() => clearTimeout(timer));
    });

    function showSpinner() {
        spinnerShownAt.set(Date.now());
        announcer.announce(label());
    }

    return {
        spinnerShown,
        busy: computed(() => loading() || spinnerShown()),
    };
}
