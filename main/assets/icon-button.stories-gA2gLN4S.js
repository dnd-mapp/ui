import{n as e,r as t}from"./rolldown-runtime-D_-wTCJc.js";import{S as n,X as r,Z as i,b as a,ct as o,g as s,k as c,lt as l,w as u,x as d}from"./angular-platform-C4u5_OQp.js";import{a as f,c as p,f as m,i as h,m as g,o as _,s as v,t as y}from"./dist-D8vnAMYe.js";import{n as b,t as x}from"./icon-xmark.component-z0j7fRNa.js";import{a as S,c as C,d as w,f as T,i as E,l as D,n as O,o as k,r as A,s as j,t as M,u as N}from"./loading-state-Gh-FMfPZ.js";var P;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5jb21wb25lbnQuaHRtbA(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5jb21wb25lbnQuaHRtbA=e((()=>{P=`<!--
    The icon sits in a wrapper, so the spinner can cover it in the same grid cell. While the spinner shows, the
    wrapper stays in the layout at opacity 0.
-->
<span class="content" [class.faded]="spinnerShown()"><ng-content /></span>
@if (spinnerShown()) {
    <dma-icon-circle-notch class="spinner" spin />
}
`})))()}var F;function init_icon_button_component(){return(init_icon_button_component=e((()=>{F=`:host{box-sizing:border-box;padding:var(--dma-spacing-0);cursor:pointer;background-color:#0000;border:1px solid #0000;place-items:center;margin:0;display:inline-grid}.content,.spinner{grid-area:1/1}.content{display:inline-flex}.content.faded{opacity:0}:host([data-size=small]){border-radius:var(--dma-radius-4);block-size:2rem;inline-size:2rem}:host([data-size=medium]){border-radius:var(--dma-radius-8);block-size:2.5rem;inline-size:2.5rem}:host([data-size=large]){border-radius:var(--dma-radius-12);block-size:3rem;inline-size:3rem}:host([data-variant=primary]){color:var(--dma-color-text-on-accent);background-color:var(--dma-color-background-accent)}:host([data-variant=primary]:hover:not([data-disabled],[data-loading])){background-color:var(--dma-color-background-accent-hover)}:host([data-variant=primary]:active:not([data-disabled],[data-loading])){background-color:var(--dma-color-background-accent-pressed)}:host([data-variant=secondary]){border-color:var(--dma-color-border-default)}:host([data-variant=secondary]),:host([data-variant=ghost]){color:var(--dma-color-text-default)}:host([data-variant=secondary]:hover:not([data-disabled],[data-loading])),:host([data-variant=ghost]:hover:not([data-disabled],[data-loading])){background-color:var(--dma-color-background-neutral-hover)}:host([data-variant=secondary]:active:not([data-disabled],[data-loading])),:host([data-variant=ghost]:active:not([data-disabled],[data-loading])){background-color:var(--dma-color-background-neutral-pressed)}:host([data-variant=danger]){color:var(--dma-color-text-on-danger);background-color:var(--dma-color-background-danger)}:host([data-variant=danger]:hover:not([data-disabled],[data-loading])){background-color:var(--dma-color-background-danger-hover)}:host([data-variant=danger]:active:not([data-disabled],[data-loading])){background-color:var(--dma-color-background-danger-pressed)}:host(:focus-visible){outline:2px solid var(--dma-color-border-focus);outline-offset:2px}:host([data-disabled]){color:var(--dma-color-text-disabled);cursor:not-allowed}:host([data-variant=primary][data-disabled]),:host([data-variant=danger][data-disabled]){background-color:var(--dma-color-background-disabled)}:host([data-variant=secondary][data-disabled]){border-color:var(--dma-color-border-disabled)}`})))()}var I;function init_icon_button_component$1(){return(init_icon_button_component$1=e((()=>{l(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5jb21wb25lbnQuaHRtbA(),init_icon_button_component(),a(),g(),p(),T(),C(),E(),M(),I=class IconButtonComponent{ariaLabel=d.required({alias:`aria-label`});variant=d(k,{transform:j});size=d(N,{transform:w});disabled=d(!1,{transform:s});loading=d(!1,{transform:s});loadingLabel=d(`Loading`);loadingState=O(this.loading,this.loadingLabel);spinnerShown=this.loadingState.spinnerShown;busy=this.loadingState.busy;blocked=n(()=>this.busy()||this.disabled());constructor(){A(this.blocked)}static ctorParameters=()=>[];static propDecorators={ariaLabel:[{type:c,args:[{isSignal:!0,alias:`aria-label`,required:!0,transform:void 0}]}],variant:[{type:c,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}],size:[{type:c,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}],disabled:[{type:c,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],loading:[{type:c,args:[{isSignal:!0,alias:`loading`,required:!1,transform:void 0}]}],loadingLabel:[{type:c,args:[{isSignal:!0,alias:`loadingLabel`,required:!1,transform:void 0}]}]}},I=o([u({selector:`button[dma-icon-button]`,template:P,imports:[v],providers:[{provide:m,useFactory:()=>r(I).size}],host:{"[attr.data-variant]":`variant()`,"[attr.data-size]":`size()`,"[attr.data-loading]":`busy() ? "" : null`,"[attr.data-disabled]":`disabled() ? "" : null`,"[attr.aria-disabled]":`blocked() ? "true" : null`,"[attr.aria-label]":`ariaLabel()`,"[attr.disabled]":`null`},styles:[F]})],I)})))()}var L=t({Danger:()=>H,Ghost:()=>V,Loading:()=>G,Primary:()=>z,Secondary:()=>B,Sizes:()=>W,States:()=>U,__namedExportsOrder:()=>K,default:()=>R}),R,z,B,V,H,U,W,G,K;function init_icon_button_stories(){return(init_icon_button_stories=e((()=>{a(),_(),b(),y(),T(),C(),init_icon_button_component$1(),R={title:`Components/Icon button`,component:I,decorators:[h({imports:[I,f,x]})],argTypes:{"aria-label":{description:`The accessible name of the icon button, such as "Close panel". The icon button shows no label, so it needs one. Match the text of its tooltip.`,type:{name:`string`,required:!0},control:`text`,table:{type:{summary:`string`}}},variant:{description:"The variant of the icon button, which sets its colors. Use `primary` for the one main action in a view, `secondary` for other actions beside it, `ghost` for minor actions that should stay quiet, and `danger` for actions that destroy or remove something.",options:Object.values(S),control:`select`,table:{type:{summary:`ButtonVariant`},defaultValue:{summary:`'${k}'`}}},size:{description:"The size of the icon button, which sets its square, its radius, and the size of its icon. Use `medium` unless the layout around the icon button calls for a `small` or a `large` one.",options:Object.values(D),control:`select`,table:{type:{summary:`ButtonSize`},defaultValue:{summary:`'${N}'`}}},disabled:{description:'Whether the icon button is disabled. It sets `aria-disabled="true"` rather than the native `disabled` attribute, so a disabled icon button stays in the tab order and can show its tooltip, but ignores clicks.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{description:"Whether the icon button is busy with the action it started, such as closing a panel. A loading icon button blocks clicks but keeps focus. After 300ms, it shows a spinning `circle-notch` in place of its icon for at least 500ms.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loadingLabel:{description:`The word that screen readers announce once the spinner shows, such as "Closing".`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Loading'`}}}},render:e=>({props:{...e,label:e[`aria-label`]},template:`
            <button
                dma-icon-button
                type="button"
                [aria-label]="label"
                [variant]="variant"
                [size]="size"
                [disabled]="disabled"
                [loading]="loading"
                [loadingLabel]="loadingLabel"
            >
                <dma-icon-xmark />
            </button>
        `})},z={args:{"aria-label":`Close panel`,variant:`primary`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`}},B={args:{"aria-label":`Close panel`,variant:`secondary`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`}},V={args:{"aria-label":`Close panel`,variant:`ghost`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`}},H={args:{"aria-label":`Remove layer`,variant:`danger`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`}},U={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); gap: var(--dma-spacing-16)">
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" loading><dma-icon-xmark /></button>
        </div>`})},W={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; gap: var(--dma-spacing-16)">
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" size="large"><dma-icon-xmark /></button>
        </div>`})},G={parameters:{controls:{disable:!0}},render:()=>({props:{slow:i(!1),fast:i(!1),run:(e,t)=>{e.set(!0),setTimeout(()=>e.set(!1),t)}},template:`<div style="display: flex; gap: var(--dma-spacing-16)">
            <button
                dma-icon-button
                type="button"
                aria-label="Add a layer in 2s"
                [loading]="slow()"
                loadingLabel="Adding"
                (click)="run(slow, 2000)"
            >
                <dma-icon-plus />
            </button>
            <button
                dma-icon-button
                type="button"
                aria-label="Add a layer in 0.2s"
                variant="secondary"
                [loading]="fast()"
                (click)="run(fast, 200)"
            >
                <dma-icon-plus />
            </button>
        </div>`})},K=[`Primary`,`Secondary`,`Ghost`,`Danger`,`States`,`Sizes`,`Loading`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Close panel',
    'variant': 'primary',
    'size': 'medium',
    'disabled': false,
    'loading': false,
    'loadingLabel': 'Loading'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Close panel',
    'variant': 'secondary',
    'size': 'medium',
    'disabled': false,
    'loading': false,
    'loadingLabel': 'Loading'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Close panel',
    'variant': 'ghost',
    'size': 'medium',
    'disabled': false,
    'loading': false,
    'loadingLabel': 'Loading'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Remove layer',
    'variant': 'danger',
    'size': 'medium',
    'disabled': false,
    'loading': false,
    'loadingLabel': 'Loading'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  // The template spells out every icon button, so Storybook can show it in the code snippet.
  render: () => ({
    template: \`<div style="display: grid; grid-template-columns: repeat(3, max-content); gap: var(--dma-spacing-16)">
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" loading><dma-icon-xmark /></button>
        </div>\`
  })
}`,...U.parameters?.docs?.source},description:{story:`Every variant in its Default, its Disabled, and its Loading state. Hover, Pressed, and Focus show when you point
at, hold, or tab to an icon button. A disabled icon button stays in the tab order, so it shows the focus ring too.
A loading icon button shows its spinner after 300ms.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  // The template spells out every icon button, so Storybook can show it in the code snippet.
  render: () => ({
    template: \`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; gap: var(--dma-spacing-16)">
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="primary" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="secondary" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Close panel" variant="ghost" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" aria-label="Remove layer" variant="danger" size="large"><dma-icon-xmark /></button>
        </div>\`
  })
}`,...W.parameters?.docs?.source},description:{story:`Every variant in the Small, the Medium, and the Large size. The icon takes the size of the icon button.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    props: {
      slow: signal(false),
      fast: signal(false),
      run: (loading: WritableSignal<boolean>, duration: number) => {
        loading.set(true);
        setTimeout(() => loading.set(false), duration);
      }
    },
    template: \`<div style="display: flex; gap: var(--dma-spacing-16)">
            <button
                dma-icon-button
                type="button"
                aria-label="Add a layer in 2s"
                [loading]="slow()"
                loadingLabel="Adding"
                (click)="run(slow, 2000)"
            >
                <dma-icon-plus />
            </button>
            <button
                dma-icon-button
                type="button"
                aria-label="Add a layer in 0.2s"
                variant="secondary"
                [loading]="fast()"
                (click)="run(fast, 200)"
            >
                <dma-icon-plus />
            </button>
        </div>\`
  })
}`,...G.parameters?.docs?.source},description:{story:`Click an icon button to start an action that takes as long as its name says. The slow one shows its spinner after
300ms. The fast one ends within 300ms, so it shows none.`,...G.parameters?.docs?.description}}}})))()}export{L as a,U as i,z as n,init_icon_button_stories as o,W as r,G as t};