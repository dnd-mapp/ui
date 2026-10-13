import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{a as t}from"./chunk-W22LQPXL-D3nZ-YVE.js";import{c as n,i as r,l as i,n as a}from"./blocks-B_2-CIK1.js";import{i as o,r as s}from"./react-C77DJ2jK.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./tooltip.stories-Ve6vopmh.js";function _createMdxContent(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...o(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,m.jsxs)(t.p,{children:[`A tooltip shows the name of a control that has no visible label, such as an `,(0,m.jsx)(t.a,{href:`?path=/docs/components-icon-button--docs`,children:(0,m.jsx)(t.code,{children:`Icon button`})}),`. It's built after the `,(0,m.jsx)(t.code,{children:`Tooltip`}),` component in the `,(0,m.jsx)(t.code,{children:`Design system`}),` Figma file: a short name on the inverse fill, beside its control.`]}),`
`,(0,m.jsx)(a,{of:p}),`
`,(0,m.jsx)(r,{of:p}),`
`,(0,m.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,m.jsx)(t.p,{children:`Give every icon button a tooltip, and any other control that shows only an icon. The text of the tooltip is the name of the control, so keep it short, such as "Close panel". A tooltip that wraps past 240px is probably too long for a name.`}),`
`,(0,m.jsx)(t.p,{children:`Don't put a description or other content that a user needs in a tooltip. Touch users only see it when they hold the control, and screen readers read it as the name of the control.`}),`
`,(0,m.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsxs)(t.p,{children:[`Put the `,(0,m.jsx)(t.code,{children:`dmaTooltip`}),` directive on the control, set it to the text of the tooltip, and import `,(0,m.jsx)(t.code,{children:`TooltipDirective`}),` into the component that uses it. The directive creates the tooltip next to the control while it shows, in an overlay of the CDK, so you never place the tooltip yourself.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`import { Component } from '@angular/core';
import { IconButtonComponent, TooltipDirective } from '@dnd-mapp/ui/components';
import { IconXmarkComponent } from '@dnd-mapp/ui/icons';

@Component({
    selector: 'app-layer-panel-header',
    imports: [IconButtonComponent, IconXmarkComponent, TooltipDirective],
    template: \`
        <button
            dma-icon-button
            type="button"
            variant="ghost"
            dmaTooltip="Close panel"
            (click)="close()"
        >
            <dma-icon-xmark />
        </button>
    \`,
})
export class LayerPanelHeaderComponent {
    close() {}
}
`})}),`
`,(0,m.jsxs)(t.p,{children:[`The tooltip shows above the control by default, centered. Set `,(0,m.jsx)(t.code,{children:`dmaTooltipPlacement`}),` to `,(0,m.jsx)(t.code,{children:`bottom`}),`, `,(0,m.jsx)(t.code,{children:`left`}),`, or `,(0,m.jsx)(t.code,{children:`right`}),` to show it on another side, such as `,(0,m.jsx)(t.code,{children:`right`}),` in a vertical tool palette. The `,(0,m.jsx)(t.code,{children:`TooltipPlacements`}),` constant holds the values. When the tooltip doesn't fit on its side, it flips to the opposite one.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-html`,children:`<button dma-icon-button type="button" dmaTooltip="Add layer" dmaTooltipPlacement="right">
    <dma-icon-plus />
</button>
`})}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`dma-tooltip`}),` element is the bubble itself, with the `,(0,m.jsx)(t.code,{children:`text`}),` and `,(0,m.jsx)(t.code,{children:`placement`}),` inputs. The directive creates it, so an app only places it by hand to show a tooltip that doesn't respond to the user, as the `,(0,m.jsx)(t.code,{children:`Examples`}),` story below does.`]}),`
`,(0,m.jsx)(t.h2,{id:`behavior`,children:`Behavior`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{style:{textAlign:`left`},children:`Trigger`}),(0,m.jsx)(t.th,{style:{textAlign:`left`},children:`Shows`}),(0,m.jsx)(t.th,{style:{textAlign:`left`},children:`Hides`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`Pointer`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`After 500ms of hover over the control`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`100ms after the pointer leaves the control and the bubble`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`Keyboard focus`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`At once`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`When the control loses focus`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`Touch`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`After holding the control for 500ms`}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`1.5s after the finger lifts`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{style:{textAlign:`left`},children:(0,m.jsx)(t.code,{children:`Escape`})}),(0,m.jsx)(t.td,{style:{textAlign:`left`}}),(0,m.jsx)(t.td,{style:{textAlign:`left`},children:`At once`})]})]})]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`After one tooltip closes, the next one shows at once for 300ms, so the pointer can sweep along a toolbar. One tooltip shows at a time.`}),`
`,(0,m.jsxs)(t.li,{children:[`The pointer can move from the control onto the tooltip, and the tooltip stays while it's there. With `,(0,m.jsx)(t.code,{children:`Escape`}),` closing it, this covers WCAG 1.4.13.`]}),`
`,(0,m.jsx)(t.li,{children:`Releasing a hold that showed the tooltip doesn't press the control. A tap that ends within 500ms presses it as usual.`}),`
`,(0,m.jsx)(t.li,{children:`Focus from a script shows the tooltip at once too, like keyboard focus. Focus from a click or a tap doesn't, because the pointer already rests on the control.`}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Escape`}),` closes the tooltip before anything else, such as a dialog that the control sits in. Pressing it again reaches the dialog.`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`disabled-controls`,children:`Disabled controls`}),`
`,(0,m.jsxs)(t.p,{children:[`A tooltip needs hover and focus, so it doesn't show on a control with the native `,(0,m.jsx)(t.code,{children:`disabled`}),` attribute. Disable an icon button with its `,(0,m.jsx)(t.code,{children:`disabled`}),` input instead, which uses `,(0,m.jsx)(t.code,{children:`aria-disabled="true"`}),` and keeps it focusable. The tooltip then still shows.`]}),`
`,(0,m.jsx)(a,{of:u}),`
`,(0,m.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,m.jsx)(a,{of:f}),`
`,(0,m.jsx)(t.p,{children:`Switch between the light and the dark theme with the paintbrush in the toolbar. The inverse fill stands out from the page in both themes, so the tooltip has no border, arrow, or shadow.`}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`The text of the tooltip is the accessible name of its control. The directive points `,(0,m.jsx)(t.code,{children:`aria-labelledby`}),` at a hidden copy of the text, so the control keeps its name while the tooltip is hidden.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`aria-labelledby`}),` wins over `,(0,m.jsx)(t.code,{children:`aria-label`}),`, so a control with a tooltip needs no `,(0,m.jsx)(t.code,{children:`aria-label`}),`. An icon button takes its name from its tooltip alone.`]}),`
`,(0,m.jsxs)(t.li,{children:[`The bubble is hidden from assistive technology with `,(0,m.jsx)(t.code,{children:`aria-hidden="true"`}),`, so screen readers don't read the name twice.`]}),`
`,(0,m.jsxs)(t.li,{children:[`Name the control with the text of the tooltip only. A keyboard shortcut goes through `,(0,m.jsx)(t.code,{children:`aria-keyshortcuts`}),` instead.`]}),`
`,(0,m.jsx)(t.li,{children:`The text passes 4.5:1 against the inverse fill in both themes.`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`testing`,children:`Testing`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`@dnd-mapp/ui/components/testing`}),` entry point has a `,(0,m.jsx)(t.code,{children:`TooltipHarness`}),` for tests of the components that use the tooltip. Its host is the control with the directive, because the bubble only exists while it shows. It needs `,(0,m.jsx)(t.code,{children:`@angular/cdk`}),`.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { TooltipHarness } from '@dnd-mapp/ui/components/testing';

const loader = TestbedHarnessEnvironment.loader(fixture);
const tooltip = await loader.getHarness(TooltipHarness.with({ text: 'Close panel' }));

await tooltip.show();

expect(await tooltip.isOpen()).toBe(true);
`})}),`
`,(0,m.jsxs)(t.p,{children:[`Find a tooltip by its `,(0,m.jsx)(t.code,{children:`text`}),`, which takes a string or a regular expression. The harness reads the text whether the tooltip shows or not. Its `,(0,m.jsx)(t.code,{children:`show()`}),` method moves focus to the control, which shows the tooltip at once, and its `,(0,m.jsx)(t.code,{children:`hide()`}),` method presses `,(0,m.jsx)(t.code,{children:`Escape`}),` on the control. `,(0,m.jsx)(t.code,{children:`isOpen()`}),` tells whether the tooltip shows, and `,(0,m.jsx)(t.code,{children:`getPlacement()`}),` returns the side it shows on, after any flip.`]})]})}function MDXContent(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)}var m;function init_tooltip(){return(init_tooltip=e((()=>{m=t(),s(),i(),c()})))()}init_tooltip();export{MDXContent as default};