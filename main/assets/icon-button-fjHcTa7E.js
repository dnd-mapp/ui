import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{a as t}from"./chunk-W22LQPXL-D3nZ-YVE.js";import{c as n,i as r,l as i,n as a}from"./blocks-Bw7vevv6.js";import{i as o,r as s}from"./react-C77DJ2jK.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./icon-button.stories-i_u5pWDR.js";function _createMdxContent(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...o(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n,{of:c}),`
`,(0,m.jsx)(t.h1,{id:`icon-button`,children:`Icon button`}),`
`,(0,m.jsxs)(t.p,{children:[`An icon button starts an action with an icon and no visible label, such as closing a panel. It's built after the `,(0,m.jsx)(t.code,{children:`Icon button`}),` component in the `,(0,m.jsx)(t.code,{children:`Design system`}),` Figma file, and shares the variants, the sizes, and the states of `,(0,m.jsx)(t.a,{href:`?path=/docs/components-button--docs`,children:(0,m.jsx)(t.code,{children:`Button`})}),`.`]}),`
`,(0,m.jsx)(a,{of:u}),`
`,(0,m.jsx)(r,{of:u}),`
`,(0,m.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,m.jsxs)(t.p,{children:[`Use an icon button where space is tight, such as toolbars and panel headers, and only for well-known icons, such as `,(0,m.jsx)(t.code,{children:`xmark`}),` for close. When the icon alone doesn't say what the action does, use a `,(0,m.jsx)(t.code,{children:`Button`}),` with a label instead.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Pick the variant after the weight of the action, like for `,(0,m.jsx)(t.code,{children:`Button`}),`: `,(0,m.jsx)(t.code,{children:`primary`}),` for the one main action in a view, `,(0,m.jsx)(t.code,{children:`secondary`}),` for other actions beside it, `,(0,m.jsx)(t.code,{children:`ghost`}),` for minor actions that should stay quiet, and `,(0,m.jsx)(t.code,{children:`danger`}),` for actions that destroy or remove something.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Pick the size after the space around the icon button. Each size matches the height and the corners of the `,(0,m.jsx)(t.code,{children:`Button`}),` in the same size, so the two line up in one row.`]}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{style:{textAlign:`left`},children:`Size`}),(0,m.jsx)(t.th,{style:{textAlign:`right`},children:`Square`}),(0,m.jsx)(t.th,{style:{textAlign:`left`},children:`Icon size`}),(0,m.jsx)(t.th,{style:{textAlign:`left`},children:`Radius`}),(0,m.jsx)(t.th,{style:{textAlign:`left`},children:`Use for`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{style:{textAlign:`left`},children:(0,m.jsx)(t.code,{children:`small`})}),(0,m.jsx)(t.td,{style:{textAlign:`right`},children:`32px`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:(0,m.jsx)(t.code,{children:`small`})}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:(0,m.jsx)(t.code,{children:`radius/4`})}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`Dense layouts, such as table rows and panel headers`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{style:{textAlign:`left`},children:(0,m.jsx)(t.code,{children:`medium`})}),(0,m.jsx)(t.td,{style:{textAlign:`right`},children:`40px`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:(0,m.jsx)(t.code,{children:`medium`})}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:(0,m.jsx)(t.code,{children:`radius/8`})}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`Most actions, such as the ones in toolbars and dialogs`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{style:{textAlign:`left`},children:(0,m.jsx)(t.code,{children:`large`})}),(0,m.jsx)(t.td,{style:{textAlign:`right`},children:`48px`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:(0,m.jsx)(t.code,{children:`large`})}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:(0,m.jsx)(t.code,{children:`radius/12`})}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`Actions that lead a sparse view, such as an empty state`})]})]})]}),`
`,(0,m.jsx)(a,{of:f}),`
`,(0,m.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsxs)(t.p,{children:[`Put `,(0,m.jsx)(t.code,{children:`dma-icon-button`}),` on a native `,(0,m.jsx)(t.code,{children:`button`}),` element, and import `,(0,m.jsx)(t.code,{children:`IconButtonComponent`}),` into the component that uses it, next to the component of its icon. The content of the element is the icon, and the `,(0,m.jsx)(t.code,{children:`aria-label`}),` input is its accessible name.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`import { Component } from '@angular/core';
import { IconButtonComponent } from '@dnd-mapp/ui/components';
import { IconXmarkComponent } from '@dnd-mapp/ui/icons';

@Component({
    selector: 'app-layer-panel-header',
    imports: [IconButtonComponent, IconXmarkComponent],
    template: \`
        <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" (click)="close()">
            <dma-icon-xmark />
        </button>
    \`,
})
export class LayerPanelHeaderComponent {
    close() {}
}
`})}),`
`,(0,m.jsxs)(t.p,{children:[`Set the variant with the `,(0,m.jsx)(t.code,{children:`variant`}),` input, and the size with the `,(0,m.jsx)(t.code,{children:`size`}),` input. They take the same values and defaults as on `,(0,m.jsx)(t.code,{children:`Button`}),`: the `,(0,m.jsx)(t.code,{children:`ButtonVariants`}),` and `,(0,m.jsx)(t.code,{children:`ButtonSizes`}),` constants hold them, and `,(0,m.jsx)(t.code,{children:`variant`}),` defaults to `,(0,m.jsx)(t.code,{children:`primary`}),` and `,(0,m.jsx)(t.code,{children:`size`}),` to `,(0,m.jsx)(t.code,{children:`medium`}),`. An icon that sets no `,(0,m.jsx)(t.code,{children:`size`}),` takes the size of the icon button.`]}),`
`,(0,m.jsxs)(t.p,{children:[`The icon button enhances the native element, so it keeps the keyboard support, the form behavior, and the `,(0,m.jsx)(t.code,{children:`button`}),` role of the browser. Set `,(0,m.jsx)(t.code,{children:`type="button"`}),` unless the icon button submits a form.`]}),`
`,(0,m.jsx)(t.h2,{id:`disabled`,children:`Disabled`}),`
`,(0,m.jsxs)(t.p,{children:[`Set the `,(0,m.jsx)(t.code,{children:`disabled`}),` input to disable the icon button. It sets `,(0,m.jsx)(t.code,{children:`aria-disabled="true"`}),` rather than the native `,(0,m.jsx)(t.code,{children:`disabled`}),` attribute, because a disabled icon button still shows its tooltip, and a tooltip needs focus and hover.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-html`,children:`<button dma-icon-button type="button" aria-label="Remove layer" variant="danger" [disabled]="locked()" (click)="remove()">
    <dma-icon-xmark />
</button>
`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`A disabled icon button stays in the tab order, and blocks clicks itself, so its click handler never runs and it never submits its form.`}),`
`,(0,m.jsx)(t.li,{children:`It shows the focus ring on keyboard focus, as WCAG 2.4.7 requires.`}),`
`,(0,m.jsxs)(t.li,{children:[`The `,(0,m.jsx)(t.code,{children:`disabled`}),` attribute in a template sets the input too. The icon button then removes the native attribute from the element.`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`loading`,children:`Loading`}),`
`,(0,m.jsxs)(t.p,{children:[`Set the `,(0,m.jsx)(t.code,{children:`loading`}),` input while the action that the icon button started runs, and turn it off once the action ends. It works like the `,(0,m.jsx)(t.code,{children:`Loading`}),` state of `,(0,m.jsx)(t.a,{href:`?path=/docs/components-button--docs`,children:(0,m.jsx)(t.code,{children:`Button`})}),`.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-html`,children:`<button dma-icon-button type="button" aria-label="Add layer" [loading]="adding()" loadingLabel="Adding" (click)="add()">
    <dma-icon-plus />
</button>
`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`From the moment it starts loading, the icon button blocks clicks through `,(0,m.jsx)(t.code,{children:`aria-disabled="true"`}),`, but keeps keyboard focus.`]}),`
`,(0,m.jsxs)(t.li,{children:[`After 300ms, it shows a spinning `,(0,m.jsx)(t.code,{children:`circle-notch`}),` in place of its icon, in the color of the icon. A fast action ends before then and shows no spinner.`]}),`
`,(0,m.jsx)(t.li,{children:`The spinner stays at least 500ms, so it never flashes. The icon button blocks clicks until the spinner hides.`}),`
`,(0,m.jsxs)(t.li,{children:[`Its `,(0,m.jsx)(t.code,{children:`aria-label`}),` stays its accessible name while it loads.`]}),`
`]}),`
`,(0,m.jsx)(a,{of:p}),`
`,(0,m.jsx)(t.h2,{id:`states`,children:`States`}),`
`,(0,m.jsxs)(t.p,{children:[`An icon button has the states of `,(0,m.jsx)(t.code,{children:`Button`}),`, with the same fills, borders, and icon colors as the label of a `,(0,m.jsx)(t.code,{children:`Button`}),`.`]}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{style:{textAlign:`left`},children:`State`}),(0,m.jsx)(t.th,{style:{textAlign:`left`},children:`How it's triggered`}),(0,m.jsx)(t.th,{style:{textAlign:`left`},children:`Look`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`Default`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`The icon button is enabled, and nothing happens to it`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`The fill, the border, and the icon color of the variant`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`Hover`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`The pointer is over the icon button`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`The hover fill of the variant`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`Pressed`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`The icon button is held down`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`The pressed fill of the variant`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`Focus`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`The icon button has keyboard focus`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`An amber ring, 2px outside the icon button`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`Disabled`}),(0,m.jsxs)(t.td,{style:{textAlign:`left`},children:[`The `,(0,m.jsx)(t.code,{children:`disabled`}),` input is set`]}),(0,m.jsxs)(t.td,{style:{textAlign:`left`},children:[`The `,(0,m.jsx)(t.code,{children:`disabled`}),` fill and icon, and the `,(0,m.jsx)(t.code,{children:`disabled`}),` border on `,(0,m.jsx)(t.code,{children:`secondary`})]})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`Loading`}),(0,m.jsxs)(t.td,{style:{textAlign:`left`},children:[`The `,(0,m.jsx)(t.code,{children:`loading`}),` input is set`]}),(0,m.jsxs)(t.td,{style:{textAlign:`left`},children:[`The look of Default, with a spinning `,(0,m.jsx)(t.code,{children:`circle-notch`}),` in place of the icon`]})]})]})]}),`
`,(0,m.jsxs)(t.p,{children:[`Hover and pressed never apply to a disabled or a loading icon button. Unlike a disabled `,(0,m.jsx)(t.code,{children:`Button`}),`, a disabled icon button keeps focus, so it shows the focus ring on keyboard focus.`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(t.p,{children:`Switch between the light and the dark theme with the paintbrush in the toolbar.`}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Every icon button needs an accessible name, so `,(0,m.jsx)(t.code,{children:`aria-label`}),` is required. Keep it a short verb phrase, such as "Close panel".`]}),`
`,(0,m.jsxs)(t.li,{children:[`Every icon button needs a tooltip too, whose text matches its `,(0,m.jsx)(t.code,{children:`aria-label`}),`. `,(0,m.jsx)(t.code,{children:`@dnd-mapp/ui`}),` has no tooltip yet, so the icon button takes its name from `,(0,m.jsx)(t.code,{children:`aria-label`}),` until it does.`]}),`
`,(0,m.jsxs)(t.li,{children:[`The icon is hidden from assistive technology, so `,(0,m.jsx)(t.code,{children:`aria-label`}),` stays the accessible name.`]}),`
`,(0,m.jsxs)(t.li,{children:[`The icon takes the label colors of `,(0,m.jsx)(t.code,{children:`Button`}),`, which pass 4.5:1 against their fills, above the 3:1 that graphics need. The focus ring passes 3:1 against the page, in both themes.`]}),`
`,(0,m.jsxs)(t.li,{children:[`A disabled or a loading icon button stays in the tab order, and screen readers report it as unavailable through `,(0,m.jsx)(t.code,{children:`aria-disabled="true"`}),`.`]}),`
`,(0,m.jsxs)(t.li,{children:[`Once the spinner shows, screen readers announce "Loading" through a polite live region outside the icon button. Set `,(0,m.jsx)(t.code,{children:`loadingLabel`}),` to announce another word, such as "Adding".`]}),`
`,(0,m.jsx)(t.li,{children:`When the user prefers reduced motion, the spinner slows to one turn every 3 seconds.`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`testing`,children:`Testing`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`@dnd-mapp/ui/components/testing`}),` entry point has an `,(0,m.jsx)(t.code,{children:`IconButtonHarness`}),` for tests of the components that use the icon button. It needs `,(0,m.jsx)(t.code,{children:`@angular/cdk`}),`.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { IconButtonHarness } from '@dnd-mapp/ui/components/testing';

const loader = TestbedHarnessEnvironment.loader(fixture);
const button = await loader.getHarness(IconButtonHarness.with({ label: 'Close panel' }));

await button.click();
`})}),`
`,(0,m.jsxs)(t.p,{children:[`Find an icon button by its `,(0,m.jsx)(t.code,{children:`label`}),`, which takes a string or a regular expression, by whether it's `,(0,m.jsx)(t.code,{children:`disabled`}),` or `,(0,m.jsx)(t.code,{children:`loading`}),`, by its `,(0,m.jsx)(t.code,{children:`variant`}),`, or by its `,(0,m.jsx)(t.code,{children:`size`}),`. The harness can click the icon button, read its accessible name, its variant, and its size, tell whether it's disabled or loading, and move focus to or away from it. Its `,(0,m.jsx)(t.code,{children:`getIcon()`}),` method returns an `,(0,m.jsx)(t.code,{children:`IconHarness`}),` for its icon, and takes the filters of `,(0,m.jsx)(t.code,{children:`IconHarness`}),`, such as `,(0,m.jsx)(t.code,{children:`glyph`}),`. It leaves out the spinner of a loading icon button.`]})]})}function MDXContent(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)}var m;function init_icon_button(){return(init_icon_button=e((()=>{m=t(),s(),i(),d()})))()}init_icon_button();export{MDXContent as default};