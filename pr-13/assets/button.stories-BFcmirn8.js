import{n as e,r as t}from"./rolldown-runtime-D_-wTCJc.js";import{I as n,J as r,_ as i,b as a,g as o,q as s,w as c}from"./angular-platform-x-WdQOx1.js";import{a as l,c as u,f as d,i as f,m as p,o as m,s as h,t as g}from"./dist-DKu-qM0V.js";function buttonSizeAttribute(e){return e===``?v:e}var _,v;function init_button_size(){return(init_button_size=e((()=>{_={small:`small`,medium:`medium`,large:`large`},v=_.medium})))()}function buttonVariantAttribute(e){return e===``?b:e}var y,b;function init_button_variant(){return(init_button_variant=e((()=>{y={primary:`primary`,secondary:`secondary`,ghost:`ghost`,danger:`danger`},b=y.primary})))()}var x;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s=e((()=>{x=`<!-- The label and the icons in its slots share one wrapper, which lays them out with the icon gap. -->
<span class="content"><ng-content /></span>
`})))()}var S;function init_button_component(){return(init_button_component=e((()=>{S=`:host{box-sizing:border-box;white-space:nowrap;cursor:pointer;background-color:#0000;border:1px solid #0000;justify-content:center;align-items:center;margin:0;padding-block:0;display:inline-flex}.content{align-items:center;gap:inherit;display:inline-flex}:host([data-size=small]){block-size:2rem;padding-inline:calc(var(--dma-spacing-12) - 1px);border-radius:var(--dma-radius-4);font:var(--dma-text-label-small-font);letter-spacing:var(--dma-text-label-small-letter-spacing);gap:var(--dma-spacing-4)}:host([data-size=medium]){block-size:2.5rem;padding-inline:calc(var(--dma-spacing-16) - 1px);border-radius:var(--dma-radius-8);font:var(--dma-text-label-medium-font);letter-spacing:var(--dma-text-label-medium-letter-spacing);gap:var(--dma-spacing-8)}:host([data-size=large]){block-size:3rem;padding-inline:calc(var(--dma-spacing-24) - 1px);border-radius:var(--dma-radius-12);font:var(--dma-text-label-large-font);letter-spacing:var(--dma-text-label-large-letter-spacing);gap:var(--dma-spacing-12)}:host([data-variant=primary]){color:var(--dma-color-text-on-accent);background-color:var(--dma-color-background-accent)}:host([data-variant=primary]:hover:not(:disabled)){background-color:var(--dma-color-background-accent-hover)}:host([data-variant=primary]:active:not(:disabled)){background-color:var(--dma-color-background-accent-pressed)}:host([data-variant=secondary]){border-color:var(--dma-color-border-default)}:host([data-variant=secondary]),:host([data-variant=ghost]){color:var(--dma-color-text-default)}:host([data-variant=secondary]:hover:not(:disabled)),:host([data-variant=ghost]:hover:not(:disabled)){background-color:var(--dma-color-background-neutral-hover)}:host([data-variant=secondary]:active:not(:disabled)),:host([data-variant=ghost]:active:not(:disabled)){background-color:var(--dma-color-background-neutral-pressed)}:host([data-variant=danger]){color:var(--dma-color-text-on-danger);background-color:var(--dma-color-background-danger)}:host([data-variant=danger]:hover:not(:disabled)){background-color:var(--dma-color-background-danger-hover)}:host([data-variant=danger]:active:not(:disabled)){background-color:var(--dma-color-background-danger-pressed)}:host(:focus-visible){outline:2px solid var(--dma-color-border-focus);outline-offset:2px}:host(:disabled){color:var(--dma-color-text-disabled);cursor:not-allowed}:host([data-variant=primary]:disabled),:host([data-variant=danger]:disabled){background-color:var(--dma-color-background-disabled)}:host([data-variant=secondary]:disabled){border-color:var(--dma-color-border-disabled)}`})))()}var C;function init_button_component$1(){return(init_button_component$1=e((()=>{r(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s(),init_button_component(),o(),p(),init_button_size(),init_button_variant(),C=class ButtonComponent{variant=i(b,{transform:buttonVariantAttribute});size=i(v,{transform:buttonSizeAttribute});static propDecorators={variant:[{type:c,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}],size:[{type:c,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}]}},C=s([a({selector:`button[dma-button]`,template:x,providers:[{provide:d,useFactory:()=>n(C).size}],host:{"[attr.data-variant]":`variant()`,"[attr.data-size]":`size()`},styles:[S]})],C)})))()}var w=t({Danger:()=>k,Ghost:()=>O,Icons:()=>M,Primary:()=>E,Secondary:()=>D,Sizes:()=>j,States:()=>A,__namedExportsOrder:()=>N,default:()=>T}),T,E,D,O,k,A,j,M,N;function init_button_stories(){return(init_button_stories=e((()=>{u(),m(),g(),init_button_size(),init_button_variant(),init_button_component$1(),T={title:`Components/Button`,component:C,decorators:[f({imports:[C,h,l]})],argTypes:{label:{description:'The content of the `button` element. It is the accessible name of the button, so keep it a short verb phrase, such as "Save map".',type:{name:`string`,required:!0},control:`text`,table:{type:{summary:`string`}}},variant:{description:"The variant of the button, which sets its colors. Use `primary` for the one main action in a view, `secondary` for other actions beside it, `ghost` for minor actions that should stay quiet, and `danger` for actions that destroy or remove something.",options:Object.values(y),control:`select`,table:{type:{summary:`ButtonVariant`},defaultValue:{summary:`'${b}'`}}},size:{description:"The size of the button, which sets its height, padding, radius, text style, and icon gap. Its icons take it too. Use `medium` unless the layout around the button calls for a `small` or a `large` one.",options:Object.values(_),control:`select`,table:{type:{summary:`ButtonSize`},defaultValue:{summary:`'${v}'`}}},disabled:{description:"The native `disabled` attribute of the `button` element. A disabled button leaves the tab order and ignores clicks.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},leadingIcon:{description:"Shows an icon before the label, like the `Leading icon` switch of the Figma component. In code, put an icon component before the label, such as `dma-icon-plus`. An icon that sets no `size` takes the size of the button.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},trailingIcon:{description:"Shows an icon after the label, like the `Trailing icon` switch of the Figma component. In code, put an icon component after the label, such as `dma-icon-chevron-down`. An icon that sets no `size` takes the size of the button.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},render:e=>({props:e,template:`<button dma-button type="button" [variant]="variant" [size]="size" [disabled]="disabled">@if (leadingIcon) {<dma-icon-plus />}{{ label }}@if (trailingIcon) {<dma-icon-chevron-down />}</button>`})},E={args:{label:`Save map`,variant:`primary`,size:`medium`,disabled:!1,leadingIcon:!1,trailingIcon:!1}},D={args:{label:`Export map`,variant:`secondary`,size:`medium`,disabled:!1,leadingIcon:!1,trailingIcon:!1}},O={args:{label:`Rename map`,variant:`ghost`,size:`medium`,disabled:!1,leadingIcon:!1,trailingIcon:!1}},k={args:{label:`Delete map`,variant:`danger`,size:`medium`,disabled:!1,leadingIcon:!1,trailingIcon:!1}},A={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(2, max-content); gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary">Save map</button>
            <button dma-button type="button" variant="primary" disabled>Save map</button>
            <button dma-button type="button" variant="secondary">Export map</button>
            <button dma-button type="button" variant="secondary" disabled>Export map</button>
            <button dma-button type="button" variant="ghost">Rename map</button>
            <button dma-button type="button" variant="ghost" disabled>Rename map</button>
            <button dma-button type="button" variant="danger">Delete map</button>
            <button dma-button type="button" variant="danger" disabled>Delete map</button>
        </div>`})},j={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary" size="small">Save map</button>
            <button dma-button type="button" variant="primary" size="medium">Save map</button>
            <button dma-button type="button" variant="primary" size="large">Save map</button>
            <button dma-button type="button" variant="secondary" size="small">Export map</button>
            <button dma-button type="button" variant="secondary" size="medium">Export map</button>
            <button dma-button type="button" variant="secondary" size="large">Export map</button>
            <button dma-button type="button" variant="ghost" size="small">Rename map</button>
            <button dma-button type="button" variant="ghost" size="medium">Rename map</button>
            <button dma-button type="button" variant="ghost" size="large">Rename map</button>
            <button dma-button type="button" variant="danger" size="small">Delete map</button>
            <button dma-button type="button" variant="danger" size="medium">Delete map</button>
            <button dma-button type="button" variant="danger" size="large">Delete map</button>
        </div>`})},M={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; justify-items: start; gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary" size="small"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="small">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="small"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="primary" size="medium"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="medium">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="medium"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="primary" size="large"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="large">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="large"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
        </div>`})},N=[`Primary`,`Secondary`,`Ghost`,`Danger`,`States`,`Sizes`,`Icons`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Save map',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    leadingIcon: false,
    trailingIcon: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Export map',
    variant: 'secondary',
    size: 'medium',
    disabled: false,
    leadingIcon: false,
    trailingIcon: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Rename map',
    variant: 'ghost',
    size: 'medium',
    disabled: false,
    leadingIcon: false,
    trailingIcon: false
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Delete map',
    variant: 'danger',
    size: 'medium',
    disabled: false,
    leadingIcon: false,
    trailingIcon: false
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  // The template spells out every button, so Storybook can show it in the code snippet.
  render: () => ({
    template: \`<div style="display: grid; grid-template-columns: repeat(2, max-content); gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary">Save map</button>
            <button dma-button type="button" variant="primary" disabled>Save map</button>
            <button dma-button type="button" variant="secondary">Export map</button>
            <button dma-button type="button" variant="secondary" disabled>Export map</button>
            <button dma-button type="button" variant="ghost">Rename map</button>
            <button dma-button type="button" variant="ghost" disabled>Rename map</button>
            <button dma-button type="button" variant="danger">Delete map</button>
            <button dma-button type="button" variant="danger" disabled>Delete map</button>
        </div>\`
  })
}`,...A.parameters?.docs?.source},description:{story:`Every variant in its Default and its Disabled state. Hover, Pressed, and Focus show when you point at, hold,
or tab to a button.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  // The template spells out every button, so Storybook can show it in the code snippet.
  render: () => ({
    template: \`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary" size="small">Save map</button>
            <button dma-button type="button" variant="primary" size="medium">Save map</button>
            <button dma-button type="button" variant="primary" size="large">Save map</button>
            <button dma-button type="button" variant="secondary" size="small">Export map</button>
            <button dma-button type="button" variant="secondary" size="medium">Export map</button>
            <button dma-button type="button" variant="secondary" size="large">Export map</button>
            <button dma-button type="button" variant="ghost" size="small">Rename map</button>
            <button dma-button type="button" variant="ghost" size="medium">Rename map</button>
            <button dma-button type="button" variant="ghost" size="large">Rename map</button>
            <button dma-button type="button" variant="danger" size="small">Delete map</button>
            <button dma-button type="button" variant="danger" size="medium">Delete map</button>
            <button dma-button type="button" variant="danger" size="large">Delete map</button>
        </div>\`
  })
}`,...j.parameters?.docs?.source},description:{story:`Every variant in the Small, the Medium, and the Large size.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  // The template spells out every button, so Storybook can show it in the code snippet.
  render: () => ({
    template: \`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; justify-items: start; gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary" size="small"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="small">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="small"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="primary" size="medium"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="medium">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="medium"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="primary" size="large"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="large">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="large"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
        </div>\`
  })
}`,...M.parameters?.docs?.source},description:{story:`Every size with a leading icon, a trailing icon, and both. The icons take the size of the button, and the gap
between the label and an icon grows with the size.`,...M.parameters?.docs?.description}}}})))()}export{w as a,A as i,E as n,init_button_stories as o,j as r,M as t};