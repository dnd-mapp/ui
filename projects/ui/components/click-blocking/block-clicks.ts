import { assertInInjectionContext, DestroyRef, ElementRef, inject, Renderer2 } from '@angular/core';

/**
 * Blocks the clicks on the host element of a control while `blocked` returns `true`. Use it for a control that sets
 * `aria-disabled="true"` instead of the `disabled` attribute, such as a busy button.
 *
 * Call it in the injection context of the control, such as the constructor of its component.
 */
export function blockClicksWhile(blocked: () => boolean): void {
    assertInInjectionContext(blockClicksWhile);

    // A blocked control keeps focus, so it can't use the disabled attribute. It stops clicks itself instead, before
    // they reach the listeners of the app or submit a form.
    const stopListening = inject(Renderer2).listen(
        inject<ElementRef<HTMLElement>>(ElementRef).nativeElement,
        'click',
        (event: Event) => {
            if (blocked()) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        },
        { capture: true },
    );

    inject(DestroyRef).onDestroy(stopListening);
}
