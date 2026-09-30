import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{a as t}from"./chunk-W22LQPXL-D3nZ-YVE.js";import{c as n,i as r,l as i,n as a}from"./blocks-Bw7vevv6.js";import{i as o,r as s}from"./react-C77DJ2jK.js";import{i as c,n as l,r as u,t as d}from"./button.stories-BYFQJ2Ze.js";function _createMdxContent(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{of:u}),`
`,(0,f.jsx)(t.h1,{id:`button`,children:`Button`}),`
`,(0,f.jsxs)(t.p,{children:[`A button starts an action, such as saving a map. It's built after the `,(0,f.jsx)(t.code,{children:`Button`}),` component in the `,(0,f.jsx)(t.code,{children:`Design system`}),` Figma file.`]}),`
`,(0,f.jsx)(a,{of:l}),`
`,(0,f.jsx)(r,{of:l}),`
`,(0,f.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,f.jsxs)(t.p,{children:[`The button has the `,(0,f.jsx)(t.code,{children:`Primary`}),` variant in the `,(0,f.jsx)(t.code,{children:`Medium`}),` size so far. Use it for the one main action in a view. The `,(0,f.jsx)(t.code,{children:`Secondary`}),`, `,(0,f.jsx)(t.code,{children:`Ghost`}),`, and `,(0,f.jsx)(t.code,{children:`Danger`}),` variants, the `,(0,f.jsx)(t.code,{children:`Small`}),` and `,(0,f.jsx)(t.code,{children:`Large`}),` sizes, and the icon slots will follow.`]}),`
`,(0,f.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsxs)(t.p,{children:[`Put `,(0,f.jsx)(t.code,{children:`dma-button`}),` on a native `,(0,f.jsx)(t.code,{children:`button`}),` element, and import `,(0,f.jsx)(t.code,{children:`ButtonComponent`}),` into the component that uses it. The content of the element is the label.`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`import { Component } from '@angular/core';
import { ButtonComponent } from '@dnd-mapp/ui/components';

@Component({
    selector: 'app-map-toolbar',
    imports: [ButtonComponent],
    template: \`<button dma-button type="button" (click)="save()">Save map</button>\`,
})
export class MapToolbarComponent {
    save() {}
}
`})}),`
`,(0,f.jsxs)(t.p,{children:[`The button enhances the native element, so it keeps the keyboard support, the form behavior, and the `,(0,f.jsx)(t.code,{children:`button`}),` role of the browser. Set `,(0,f.jsx)(t.code,{children:`type="button"`}),` unless the button submits a form.`]}),`
`,(0,f.jsx)(t.h2,{id:`states`,children:`States`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{style:{textAlign:`left`},children:`State`}),(0,f.jsx)(t.th,{style:{textAlign:`left`},children:`How it's triggered`}),(0,f.jsx)(t.th,{style:{textAlign:`left`},children:`Look`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{style:{textAlign:`left`},children:`Default`}),(0,f.jsx)(t.td,{style:{textAlign:`left`},children:`The button is enabled, and nothing happens to it`}),(0,f.jsxs)(t.td,{style:{textAlign:`left`},children:[`The accent fill, with the `,(0,f.jsx)(t.code,{children:`on-accent`}),` label`]})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{style:{textAlign:`left`},children:`Hover`}),(0,f.jsx)(t.td,{style:{textAlign:`left`},children:`The pointer is over the button`}),(0,f.jsxs)(t.td,{style:{textAlign:`left`},children:[`The `,(0,f.jsx)(t.code,{children:`accent-hover`}),` fill`]})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{style:{textAlign:`left`},children:`Pressed`}),(0,f.jsx)(t.td,{style:{textAlign:`left`},children:`The button is held down`}),(0,f.jsxs)(t.td,{style:{textAlign:`left`},children:[`The `,(0,f.jsx)(t.code,{children:`accent-pressed`}),` fill`]})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{style:{textAlign:`left`},children:`Focus`}),(0,f.jsx)(t.td,{style:{textAlign:`left`},children:`The button has keyboard focus`}),(0,f.jsx)(t.td,{style:{textAlign:`left`},children:`An amber ring, 2px outside the button`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{style:{textAlign:`left`},children:`Disabled`}),(0,f.jsxs)(t.td,{style:{textAlign:`left`},children:[`The native `,(0,f.jsx)(t.code,{children:`disabled`}),` attribute is set`]}),(0,f.jsxs)(t.td,{style:{textAlign:`left`},children:[`The `,(0,f.jsx)(t.code,{children:`disabled`}),` fill and label, and no response`]})]})]})]}),`
`,(0,f.jsxs)(t.p,{children:[`The focus ring shows on keyboard focus only, through `,(0,f.jsx)(t.code,{children:`:focus-visible`}),`. A disabled button never shows it, because the native `,(0,f.jsx)(t.code,{children:`disabled`}),` attribute keeps the button from taking focus. Hover and pressed never apply to a disabled button either.`]}),`
`,(0,f.jsx)(a,{of:d}),`
`,(0,f.jsx)(t.p,{children:`Switch between the light and the dark theme with the paintbrush in the toolbar.`}),`
`,(0,f.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsx)(t.li,{children:`The label is the accessible name of the button, so keep it a short verb phrase, such as "Save map".`}),`
`,(0,f.jsx)(t.li,{children:`The label passes 4.5:1 against its fill, and the focus ring passes 3:1 against the page, in both themes.`}),`
`,(0,f.jsx)(t.li,{children:`A disabled button leaves the tab order and ignores clicks, like any native button.`}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`testing`,children:`Testing`}),`
`,(0,f.jsxs)(t.p,{children:[`The `,(0,f.jsx)(t.code,{children:`@dnd-mapp/ui/components/testing`}),` entry point has a `,(0,f.jsx)(t.code,{children:`ButtonHarness`}),` for tests of the components that use the button. It needs `,(0,f.jsx)(t.code,{children:`@angular/cdk`}),`.`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ButtonHarness } from '@dnd-mapp/ui/components/testing';

const loader = TestbedHarnessEnvironment.loader(fixture);
const button = await loader.getHarness(ButtonHarness.with({ text: 'Save map' }));

await button.click();
`})}),`
`,(0,f.jsxs)(t.p,{children:[`Find a button by its `,(0,f.jsx)(t.code,{children:`text`}),`, which takes a string or a regular expression, or by whether it's `,(0,f.jsx)(t.code,{children:`disabled`}),`. The harness can click the button, read its label, tell whether it's disabled, and move focus to or away from it.`]})]})}function MDXContent(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)}var f;function init_button(){return(init_button=e((()=>{f=t(),s(),i(),c()})))()}init_button();export{MDXContent as default};