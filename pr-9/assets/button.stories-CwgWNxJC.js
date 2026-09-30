import{n as e,r as t}from"./rolldown-runtime-D_-wTCJc.js";import{G as n,S as r,W as i,_ as a,g as o,v as s}from"./angular-platform-B7f29383.js";import{i as c,n as l,r as u}from"./iframe-B_4aU0uo.js";var d,f,moduleMetadata;function init_chunk_THQDNKQS(){return(init_chunk_THQDNKQS=e((()=>{u(),l(),c(),{setProjectAnnotations:d,setDefaultProjectAnnotations:f}=__STORYBOOK_MODULE_PREVIEW_API__,moduleMetadata=e=>t=>{let n=t(),r=n.moduleMetadata||{};return e||={},{...n,moduleMetadata:{declarations:[...e.declarations||[],...r.declarations||[]],entryComponents:[...e.entryComponents||[],...r.entryComponents||[]],imports:[...e.imports||[],...r.imports||[]],schemas:[...e.schemas||[],...r.schemas||[]],providers:[...e.providers||[],...r.providers||[]]}}}})))()}function init_dist(){return(init_dist=e((()=>{init_chunk_THQDNKQS(),u(),l(),c()})))()}function buttonVariantAttribute(e){return e===``?m:e}var p,m;function init_button_variant(){return(init_button_variant=e((()=>{p={primary:`primary`,secondary:`secondary`,ghost:`ghost`,danger:`danger`},m=p.primary})))()}var h;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s=e((()=>{h=`<ng-content />
`})))()}var g;function init_button_component(){return(init_button_component=e((()=>{g=`:host{justify-content:center;align-items:center;gap:var(--dma-spacing-8);box-sizing:border-box;block-size:2.5rem;padding-block:0;padding-inline:calc(var(--dma-spacing-16) - 1px);border-radius:var(--dma-radius-8);font:var(--dma-text-label-medium-font);letter-spacing:var(--dma-text-label-medium-letter-spacing);white-space:nowrap;cursor:pointer;background-color:#0000;border:1px solid #0000;margin:0;display:inline-flex}:host([data-variant=primary]){color:var(--dma-color-text-on-accent);background-color:var(--dma-color-background-accent)}:host([data-variant=primary]:hover:not(:disabled)){background-color:var(--dma-color-background-accent-hover)}:host([data-variant=primary]:active:not(:disabled)){background-color:var(--dma-color-background-accent-pressed)}:host([data-variant=secondary]){border-color:var(--dma-color-border-default)}:host([data-variant=secondary]),:host([data-variant=ghost]){color:var(--dma-color-text-default)}:host([data-variant=secondary]:hover:not(:disabled)),:host([data-variant=ghost]:hover:not(:disabled)){background-color:var(--dma-color-background-neutral-hover)}:host([data-variant=secondary]:active:not(:disabled)),:host([data-variant=ghost]:active:not(:disabled)){background-color:var(--dma-color-background-neutral-pressed)}:host([data-variant=danger]){color:var(--dma-color-text-on-danger);background-color:var(--dma-color-background-danger)}:host([data-variant=danger]:hover:not(:disabled)){background-color:var(--dma-color-background-danger-hover)}:host([data-variant=danger]:active:not(:disabled)){background-color:var(--dma-color-background-danger-pressed)}:host(:focus-visible){outline:2px solid var(--dma-color-border-focus);outline-offset:2px}:host(:disabled){color:var(--dma-color-text-disabled);cursor:not-allowed}:host([data-variant=primary]:disabled),:host([data-variant=danger]:disabled){background-color:var(--dma-color-background-disabled)}:host([data-variant=secondary]:disabled){border-color:var(--dma-color-border-disabled)}`})))()}var _;function init_button_component$1(){return(init_button_component$1=e((()=>{n(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s(),init_button_component(),o(),init_button_variant(),_=class ButtonComponent{variant=a(m,{transform:buttonVariantAttribute});static propDecorators={variant:[{type:r,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}]}},_=i([s({selector:`button[dma-button]`,template:h,host:{"[attr.data-variant]":`variant()`},styles:[g]})],_)})))()}var v=t({Danger:()=>w,Ghost:()=>C,Primary:()=>x,Secondary:()=>S,States:()=>T,__namedExportsOrder:()=>E,default:()=>b}),y,b,x,S,C,w,T,E;function init_button_stories(){return(init_button_stories=e((()=>{init_dist(),init_button_variant(),init_button_component$1(),y={primary:`Save map`,secondary:`Export map`,ghost:`Rename map`,danger:`Delete map`},b={title:`Components/Button`,component:_,decorators:[moduleMetadata({imports:[_]})],argTypes:{label:{description:'The content of the `button` element. It is the accessible name of the button, so keep it a short verb phrase, such as "Save map".',type:{name:`string`,required:!0},control:`text`,table:{type:{summary:`string`}}},variant:{description:"The variant of the button, which sets its colors. Use `primary` for the one main action in a view, `secondary` for other actions beside it, `ghost` for minor actions that should stay quiet, and `danger` for actions that destroy or remove something.",options:Object.values(p),control:`inline-radio`,table:{type:{summary:`ButtonVariant`},defaultValue:{summary:`'${m}'`}}},disabled:{description:"The native `disabled` attribute of the `button` element. A disabled button leaves the tab order and ignores clicks.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},args:{label:y[m],variant:m,disabled:!1},render:e=>({props:e,template:`<button dma-button type="button" [variant]="variant" [disabled]="disabled">{{ label }}</button>`})},x={},S={args:{label:y.secondary,variant:p.secondary}},C={args:{label:y.ghost,variant:p.ghost}},w={args:{label:y.danger,variant:p.danger}},T={parameters:{controls:{disable:!0}},render:()=>({props:{labels:y,variants:Object.values(p)},template:`<div style="display: grid; grid-template-columns: repeat(2, max-content); gap: var(--dma-spacing-16)">
            @for (variant of variants; track variant) {
                <button dma-button type="button" [variant]="variant">{{ labels[variant] }}</button>
                <button dma-button type="button" [variant]="variant" disabled>{{ labels[variant] }}</button>
            }
        </div>`})},E=[`Primary`,`Secondary`,`Ghost`,`Danger`,`States`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: labels.secondary,
    variant: ButtonVariants.secondary
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: labels.ghost,
    variant: ButtonVariants.ghost
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: labels.danger,
    variant: ButtonVariants.danger
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    props: {
      labels,
      variants: Object.values(ButtonVariants)
    },
    template: \`<div style="display: grid; grid-template-columns: repeat(2, max-content); gap: var(--dma-spacing-16)">
            @for (variant of variants; track variant) {
                <button dma-button type="button" [variant]="variant">{{ labels[variant] }}</button>
                <button dma-button type="button" [variant]="variant" disabled>{{ labels[variant] }}</button>
            }
        </div>\`
  })
}`,...T.parameters?.docs?.source},description:{story:`Every variant in its Default and its Disabled state. Hover, Pressed, and Focus show when you point at, hold,
or tab to a button.`,...T.parameters?.docs?.description}}}})))()}export{init_button_stories as i,T as n,v as r,x as t};