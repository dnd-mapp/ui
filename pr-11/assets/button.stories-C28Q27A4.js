import{n as e,r as t}from"./rolldown-runtime-D_-wTCJc.js";import{G as n,S as r,W as i,_ as a,g as o,v as s}from"./angular-platform-B7f29383.js";import{i as c,n as l,r as u}from"./iframe--GPSBOeo.js";var d,f,moduleMetadata;function init_chunk_THQDNKQS(){return(init_chunk_THQDNKQS=e((()=>{u(),l(),c(),{setProjectAnnotations:d,setDefaultProjectAnnotations:f}=__STORYBOOK_MODULE_PREVIEW_API__,moduleMetadata=e=>t=>{let n=t(),r=n.moduleMetadata||{};return e||={},{...n,moduleMetadata:{declarations:[...e.declarations||[],...r.declarations||[]],entryComponents:[...e.entryComponents||[],...r.entryComponents||[]],imports:[...e.imports||[],...r.imports||[]],schemas:[...e.schemas||[],...r.schemas||[]],providers:[...e.providers||[],...r.providers||[]]}}}})))()}function init_dist(){return(init_dist=e((()=>{init_chunk_THQDNKQS(),u(),l(),c()})))()}function buttonSizeAttribute(e){return e===``?m:e}var p,m;function init_button_size(){return(init_button_size=e((()=>{p={small:`small`,medium:`medium`,large:`large`},m=p.medium})))()}function buttonVariantAttribute(e){return e===``?g:e}var h,g;function init_button_variant(){return(init_button_variant=e((()=>{h={primary:`primary`,secondary:`secondary`,ghost:`ghost`,danger:`danger`},g=h.primary})))()}var _;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s=e((()=>{_=`<ng-content />
`})))()}var v;function init_button_component(){return(init_button_component=e((()=>{v=`:host{justify-content:center;align-items:center;gap:var(--dma-spacing-8);box-sizing:border-box;white-space:nowrap;cursor:pointer;background-color:#0000;border:1px solid #0000;margin:0;padding-block:0;display:inline-flex}:host([data-size=small]){block-size:2rem;padding-inline:calc(var(--dma-spacing-12) - 1px);border-radius:var(--dma-radius-4);font:var(--dma-text-label-small-font);letter-spacing:var(--dma-text-label-small-letter-spacing)}:host([data-size=medium]){block-size:2.5rem;padding-inline:calc(var(--dma-spacing-16) - 1px);border-radius:var(--dma-radius-8);font:var(--dma-text-label-medium-font);letter-spacing:var(--dma-text-label-medium-letter-spacing)}:host([data-size=large]){block-size:3rem;padding-inline:calc(var(--dma-spacing-24) - 1px);border-radius:var(--dma-radius-12);font:var(--dma-text-label-large-font);letter-spacing:var(--dma-text-label-large-letter-spacing)}:host([data-variant=primary]){color:var(--dma-color-text-on-accent);background-color:var(--dma-color-background-accent)}:host([data-variant=primary]:hover:not(:disabled)){background-color:var(--dma-color-background-accent-hover)}:host([data-variant=primary]:active:not(:disabled)){background-color:var(--dma-color-background-accent-pressed)}:host([data-variant=secondary]){border-color:var(--dma-color-border-default)}:host([data-variant=secondary]),:host([data-variant=ghost]){color:var(--dma-color-text-default)}:host([data-variant=secondary]:hover:not(:disabled)),:host([data-variant=ghost]:hover:not(:disabled)){background-color:var(--dma-color-background-neutral-hover)}:host([data-variant=secondary]:active:not(:disabled)),:host([data-variant=ghost]:active:not(:disabled)){background-color:var(--dma-color-background-neutral-pressed)}:host([data-variant=danger]){color:var(--dma-color-text-on-danger);background-color:var(--dma-color-background-danger)}:host([data-variant=danger]:hover:not(:disabled)){background-color:var(--dma-color-background-danger-hover)}:host([data-variant=danger]:active:not(:disabled)){background-color:var(--dma-color-background-danger-pressed)}:host(:focus-visible){outline:2px solid var(--dma-color-border-focus);outline-offset:2px}:host(:disabled){color:var(--dma-color-text-disabled);cursor:not-allowed}:host([data-variant=primary]:disabled),:host([data-variant=danger]:disabled){background-color:var(--dma-color-background-disabled)}:host([data-variant=secondary]:disabled){border-color:var(--dma-color-border-disabled)}`})))()}var y;function init_button_component$1(){return(init_button_component$1=e((()=>{n(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s(),init_button_component(),o(),init_button_size(),init_button_variant(),y=class ButtonComponent{variant=a(g,{transform:buttonVariantAttribute});size=a(m,{transform:buttonSizeAttribute});static propDecorators={variant:[{type:r,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}],size:[{type:r,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}]}},y=i([s({selector:`button[dma-button]`,template:_,host:{"[attr.data-variant]":`variant()`,"[attr.data-size]":`size()`},styles:[v]})],y)})))()}var b=t({Danger:()=>T,Ghost:()=>w,Primary:()=>S,Secondary:()=>C,Sizes:()=>D,States:()=>E,__namedExportsOrder:()=>O,default:()=>x}),x,S,C,w,T,E,D,O;function init_button_stories(){return(init_button_stories=e((()=>{init_dist(),init_button_size(),init_button_variant(),init_button_component$1(),x={title:`Components/Button`,component:y,decorators:[moduleMetadata({imports:[y]})],argTypes:{label:{description:'The content of the `button` element. It is the accessible name of the button, so keep it a short verb phrase, such as "Save map".',type:{name:`string`,required:!0},control:`text`,table:{type:{summary:`string`}}},variant:{description:"The variant of the button, which sets its colors. Use `primary` for the one main action in a view, `secondary` for other actions beside it, `ghost` for minor actions that should stay quiet, and `danger` for actions that destroy or remove something.",options:Object.values(h),control:`select`,table:{type:{summary:`ButtonVariant`},defaultValue:{summary:`'${g}'`}}},size:{description:"The size of the button, which sets its height, padding, radius, and text style. Use `medium` unless the layout around the button calls for a `small` or a `large` one.",options:Object.values(p),control:`select`,table:{type:{summary:`ButtonSize`},defaultValue:{summary:`'${m}'`}}},disabled:{description:"The native `disabled` attribute of the `button` element. A disabled button leaves the tab order and ignores clicks.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},render:e=>({props:e,template:`<button dma-button type="button" [variant]="variant" [size]="size" [disabled]="disabled">{{ label }}</button>`})},S={args:{label:`Save map`,variant:`primary`,size:`medium`,disabled:!1}},C={args:{label:`Export map`,variant:`secondary`,size:`medium`,disabled:!1}},w={args:{label:`Rename map`,variant:`ghost`,size:`medium`,disabled:!1}},T={args:{label:`Delete map`,variant:`danger`,size:`medium`,disabled:!1}},E={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(2, max-content); gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary">Save map</button>
            <button dma-button type="button" variant="primary" disabled>Save map</button>
            <button dma-button type="button" variant="secondary">Export map</button>
            <button dma-button type="button" variant="secondary" disabled>Export map</button>
            <button dma-button type="button" variant="ghost">Rename map</button>
            <button dma-button type="button" variant="ghost" disabled>Rename map</button>
            <button dma-button type="button" variant="danger">Delete map</button>
            <button dma-button type="button" variant="danger" disabled>Delete map</button>
        </div>`})},D={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; gap: var(--dma-spacing-16)">
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
        </div>`})},O=[`Primary`,`Secondary`,`Ghost`,`Danger`,`States`,`Sizes`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Save map',
    variant: 'primary',
    size: 'medium',
    disabled: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Export map',
    variant: 'secondary',
    size: 'medium',
    disabled: false
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Rename map',
    variant: 'ghost',
    size: 'medium',
    disabled: false
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Delete map',
    variant: 'danger',
    size: 'medium',
    disabled: false
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Every variant in its Default and its Disabled state. Hover, Pressed, and Focus show when you point at, hold,
or tab to a button.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Every variant in the Small, the Medium, and the Large size.`,...D.parameters?.docs?.description}}}})))()}export{init_button_stories as a,b as i,D as n,E as r,S as t};