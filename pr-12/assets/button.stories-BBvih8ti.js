import{n as e,r as t}from"./rolldown-runtime-D_-wTCJc.js";import{G as n,S as r,W as i,_ as a,g as o,v as s}from"./angular-platform-B7f29383.js";import{i as c,t as l}from"./dist-CXw1HppT.js";function buttonSizeAttribute(e){return e===``?d:e}var u,d;function init_button_size(){return(init_button_size=e((()=>{u={small:`small`,medium:`medium`,large:`large`},d=u.medium})))()}function buttonVariantAttribute(e){return e===``?p:e}var f,p;function init_button_variant(){return(init_button_variant=e((()=>{f={primary:`primary`,secondary:`secondary`,ghost:`ghost`,danger:`danger`},p=f.primary})))()}var m;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s=e((()=>{m=`<ng-content />
`})))()}var h;function init_button_component(){return(init_button_component=e((()=>{h=`:host{justify-content:center;align-items:center;gap:var(--dma-spacing-8);box-sizing:border-box;white-space:nowrap;cursor:pointer;background-color:#0000;border:1px solid #0000;margin:0;padding-block:0;display:inline-flex}:host([data-size=small]){block-size:2rem;padding-inline:calc(var(--dma-spacing-12) - 1px);border-radius:var(--dma-radius-4);font:var(--dma-text-label-small-font);letter-spacing:var(--dma-text-label-small-letter-spacing)}:host([data-size=medium]){block-size:2.5rem;padding-inline:calc(var(--dma-spacing-16) - 1px);border-radius:var(--dma-radius-8);font:var(--dma-text-label-medium-font);letter-spacing:var(--dma-text-label-medium-letter-spacing)}:host([data-size=large]){block-size:3rem;padding-inline:calc(var(--dma-spacing-24) - 1px);border-radius:var(--dma-radius-12);font:var(--dma-text-label-large-font);letter-spacing:var(--dma-text-label-large-letter-spacing)}:host([data-variant=primary]){color:var(--dma-color-text-on-accent);background-color:var(--dma-color-background-accent)}:host([data-variant=primary]:hover:not(:disabled)){background-color:var(--dma-color-background-accent-hover)}:host([data-variant=primary]:active:not(:disabled)){background-color:var(--dma-color-background-accent-pressed)}:host([data-variant=secondary]){border-color:var(--dma-color-border-default)}:host([data-variant=secondary]),:host([data-variant=ghost]){color:var(--dma-color-text-default)}:host([data-variant=secondary]:hover:not(:disabled)),:host([data-variant=ghost]:hover:not(:disabled)){background-color:var(--dma-color-background-neutral-hover)}:host([data-variant=secondary]:active:not(:disabled)),:host([data-variant=ghost]:active:not(:disabled)){background-color:var(--dma-color-background-neutral-pressed)}:host([data-variant=danger]){color:var(--dma-color-text-on-danger);background-color:var(--dma-color-background-danger)}:host([data-variant=danger]:hover:not(:disabled)){background-color:var(--dma-color-background-danger-hover)}:host([data-variant=danger]:active:not(:disabled)){background-color:var(--dma-color-background-danger-pressed)}:host(:focus-visible){outline:2px solid var(--dma-color-border-focus);outline-offset:2px}:host(:disabled){color:var(--dma-color-text-disabled);cursor:not-allowed}:host([data-variant=primary]:disabled),:host([data-variant=danger]:disabled){background-color:var(--dma-color-background-disabled)}:host([data-variant=secondary]:disabled){border-color:var(--dma-color-border-disabled)}`})))()}var g;function init_button_component$1(){return(init_button_component$1=e((()=>{n(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s(),init_button_component(),o(),init_button_size(),init_button_variant(),g=class ButtonComponent{variant=a(p,{transform:buttonVariantAttribute});size=a(d,{transform:buttonSizeAttribute});static propDecorators={variant:[{type:r,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}],size:[{type:r,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}]}},g=i([s({selector:`button[dma-button]`,template:m,host:{"[attr.data-variant]":`variant()`,"[attr.data-size]":`size()`},styles:[h]})],g)})))()}var _=t({Danger:()=>S,Ghost:()=>x,Primary:()=>y,Secondary:()=>b,Sizes:()=>w,States:()=>C,__namedExportsOrder:()=>T,default:()=>v}),v,y,b,x,S,C,w,T;function init_button_stories(){return(init_button_stories=e((()=>{l(),init_button_size(),init_button_variant(),init_button_component$1(),v={title:`Components/Button`,component:g,decorators:[c({imports:[g]})],argTypes:{label:{description:'The content of the `button` element. It is the accessible name of the button, so keep it a short verb phrase, such as "Save map".',type:{name:`string`,required:!0},control:`text`,table:{type:{summary:`string`}}},variant:{description:"The variant of the button, which sets its colors. Use `primary` for the one main action in a view, `secondary` for other actions beside it, `ghost` for minor actions that should stay quiet, and `danger` for actions that destroy or remove something.",options:Object.values(f),control:`select`,table:{type:{summary:`ButtonVariant`},defaultValue:{summary:`'${p}'`}}},size:{description:"The size of the button, which sets its height, padding, radius, and text style. Use `medium` unless the layout around the button calls for a `small` or a `large` one.",options:Object.values(u),control:`select`,table:{type:{summary:`ButtonSize`},defaultValue:{summary:`'${d}'`}}},disabled:{description:"The native `disabled` attribute of the `button` element. A disabled button leaves the tab order and ignores clicks.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},render:e=>({props:e,template:`<button dma-button type="button" [variant]="variant" [size]="size" [disabled]="disabled">{{ label }}</button>`})},y={args:{label:`Save map`,variant:`primary`,size:`medium`,disabled:!1}},b={args:{label:`Export map`,variant:`secondary`,size:`medium`,disabled:!1}},x={args:{label:`Rename map`,variant:`ghost`,size:`medium`,disabled:!1}},S={args:{label:`Delete map`,variant:`danger`,size:`medium`,disabled:!1}},C={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(2, max-content); gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary">Save map</button>
            <button dma-button type="button" variant="primary" disabled>Save map</button>
            <button dma-button type="button" variant="secondary">Export map</button>
            <button dma-button type="button" variant="secondary" disabled>Export map</button>
            <button dma-button type="button" variant="ghost">Rename map</button>
            <button dma-button type="button" variant="ghost" disabled>Rename map</button>
            <button dma-button type="button" variant="danger">Delete map</button>
            <button dma-button type="button" variant="danger" disabled>Delete map</button>
        </div>`})},w={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; gap: var(--dma-spacing-16)">
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
        </div>`})},T=[`Primary`,`Secondary`,`Ghost`,`Danger`,`States`,`Sizes`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Save map',
    variant: 'primary',
    size: 'medium',
    disabled: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Export map',
    variant: 'secondary',
    size: 'medium',
    disabled: false
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Rename map',
    variant: 'ghost',
    size: 'medium',
    disabled: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Delete map',
    variant: 'danger',
    size: 'medium',
    disabled: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Every variant in its Default and its Disabled state. Hover, Pressed, and Focus show when you point at, hold,
or tab to a button.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Every variant in the Small, the Medium, and the Large size.`,...w.parameters?.docs?.description}}}})))()}export{init_button_stories as a,_ as i,w as n,C as r,y as t};