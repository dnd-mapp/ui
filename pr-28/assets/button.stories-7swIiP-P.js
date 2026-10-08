import{n as e,r as t}from"./rolldown-runtime-D_-wTCJc.js";import{C as n,Ht as r,Jt as i,P as a,dt as o,k as s,ut as c,w as l,y as u}from"./angular-platform-A5fhYa3B.js";import{n as d,t as f}from"./icon-chevron-down.component-B0xY3PnU.js";import{a as p,c as m,f as h,i as g,m as _,o as v,s as y,t as b}from"./dist-QbmyZ24t.js";import{a as x,c as S,d as C,f as w,i as T,l as E,n as D,o as O,r as k,s as A,t as j,u as M}from"./loading-state-BNRGQAr_.js";var N;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s=e((()=>{N=`<!--
    The label and the icons in its slots share one wrapper, which lays them out with the icon gap. While the spinner
    shows, the wrapper stays in the layout at opacity 0, so the button keeps its width and its accessible name.
-->
<span class="content" [class.faded]="spinnerShown()"><ng-content /></span>
@if (spinnerShown()) {
    <dma-icon-circle-notch class="spinner" spin />
}
`})))()}var P;function init_button_component(){return(init_button_component=e((()=>{P=`:host{box-sizing:border-box;white-space:nowrap;cursor:pointer;background-color:#0000;border:1px solid #0000;place-items:center;margin:0;padding-block:0;display:inline-grid}.content,.spinner{grid-area:1/1}.content{align-items:center;gap:inherit;display:inline-flex}.content.faded{opacity:0}:host([data-size=small]){block-size:2rem;padding-inline:calc(var(--dma-spacing-12) - 1px);border-radius:var(--dma-radius-4);font:var(--dma-text-label-small-font);letter-spacing:var(--dma-text-label-small-letter-spacing);gap:var(--dma-spacing-4)}:host([data-size=medium]){block-size:2.5rem;padding-inline:calc(var(--dma-spacing-16) - 1px);border-radius:var(--dma-radius-8);font:var(--dma-text-label-medium-font);letter-spacing:var(--dma-text-label-medium-letter-spacing);gap:var(--dma-spacing-8)}:host([data-size=large]){block-size:3rem;padding-inline:calc(var(--dma-spacing-24) - 1px);border-radius:var(--dma-radius-12);font:var(--dma-text-label-large-font);letter-spacing:var(--dma-text-label-large-letter-spacing);gap:var(--dma-spacing-12)}:host([data-variant=primary]){color:var(--dma-color-text-on-accent);background-color:var(--dma-color-background-accent)}:host([data-variant=primary]:hover:not(:disabled,[data-loading])){background-color:var(--dma-color-background-accent-hover)}:host([data-variant=primary]:active:not(:disabled,[data-loading])){background-color:var(--dma-color-background-accent-pressed)}:host([data-variant=secondary]){border-color:var(--dma-color-border-default)}:host([data-variant=secondary]),:host([data-variant=ghost]){color:var(--dma-color-text-default)}:host([data-variant=secondary]:hover:not(:disabled,[data-loading])),:host([data-variant=ghost]:hover:not(:disabled,[data-loading])){background-color:var(--dma-color-background-neutral-hover)}:host([data-variant=secondary]:active:not(:disabled,[data-loading])),:host([data-variant=ghost]:active:not(:disabled,[data-loading])){background-color:var(--dma-color-background-neutral-pressed)}:host([data-variant=danger]){color:var(--dma-color-text-on-danger);background-color:var(--dma-color-background-danger)}:host([data-variant=danger]:hover:not(:disabled,[data-loading])){background-color:var(--dma-color-background-danger-hover)}:host([data-variant=danger]:active:not(:disabled,[data-loading])){background-color:var(--dma-color-background-danger-pressed)}:host(:focus-visible){outline:2px solid var(--dma-color-border-focus);outline-offset:2px}:host(:disabled){color:var(--dma-color-text-disabled);cursor:not-allowed}:host([data-variant=primary]:disabled),:host([data-variant=danger]:disabled){background-color:var(--dma-color-background-disabled)}:host([data-variant=secondary]:disabled){border-color:var(--dma-color-border-disabled)}`})))()}var F;function init_button_component$1(){return(init_button_component$1=e((()=>{i(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s(),init_button_component(),n(),_(),m(),T(),j(),w(),S(),F=class ButtonComponent{variant=l(O,{transform:A});size=l(M,{transform:C});loading=l(!1,{transform:u});loadingLabel=l(`Loading`);loadingState=D(this.loading,this.loadingLabel);spinnerShown=this.loadingState.spinnerShown;busy=this.loadingState.busy;constructor(){k(this.busy)}static ctorParameters=()=>[];static propDecorators={variant:[{type:a,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}],size:[{type:a,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}],loading:[{type:a,args:[{isSignal:!0,alias:`loading`,required:!1,transform:void 0}]}],loadingLabel:[{type:a,args:[{isSignal:!0,alias:`loadingLabel`,required:!1,transform:void 0}]}]}},F=r([s({selector:`button[dma-button]`,template:N,imports:[y],providers:[{provide:h,useFactory:()=>c(F).size}],host:{"[attr.data-variant]":`variant()`,"[attr.data-size]":`size()`,"[attr.data-loading]":`busy() ? "" : null`,"[attr.aria-disabled]":`busy() ? "true" : null`},styles:[P]})],F)})))()}var I=t({Danger:()=>V,Ghost:()=>B,Icons:()=>W,Loading:()=>G,Primary:()=>R,Secondary:()=>z,Sizes:()=>U,States:()=>H,__namedExportsOrder:()=>K,default:()=>L}),L,R,z,B,V,H,U,W,G,K;function init_button_stories(){return(init_button_stories=e((()=>{n(),d(),v(),b(),w(),S(),init_button_component$1(),L={title:`Components/Button`,component:F,decorators:[g({imports:[F,f,p]})],argTypes:{label:{description:'The content of the `button` element. It is the accessible name of the button, so keep it a short verb phrase, such as "Save map".',type:{name:`string`,required:!0},control:`text`,table:{type:{summary:`string`}}},variant:{description:"The variant of the button, which sets its colors. Use `primary` for the one main action in a view, `secondary` for other actions beside it, `ghost` for minor actions that should stay quiet, and `danger` for actions that destroy or remove something.",options:Object.values(x),control:`select`,table:{type:{summary:`ButtonVariant`},defaultValue:{summary:`'${O}'`}}},size:{description:"The size of the button, which sets its height, padding, radius, text style, and icon gap. Its icons take it too. Use `medium` unless the layout around the button calls for a `small` or a `large` one.",options:Object.values(E),control:`select`,table:{type:{summary:`ButtonSize`},defaultValue:{summary:`'${M}'`}}},disabled:{description:"The native `disabled` attribute of the `button` element. A disabled button leaves the tab order and ignores clicks.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{description:"Whether the button is busy with the action it started, such as saving a map. A loading button blocks clicks but keeps focus. After 300ms, it shows a spinning `circle-notch` in place of its label and icons for at least 500ms.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loadingLabel:{description:`The word that screen readers announce once the spinner shows, such as "Saving".`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Loading'`}}},leadingIcon:{description:"Shows an icon before the label, like the `Leading icon` switch of the Figma component. In code, put an icon component before the label, such as `dma-icon-plus`. An icon that sets no `size` takes the size of the button.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},trailingIcon:{description:"Shows an icon after the label, like the `Trailing icon` switch of the Figma component. In code, put an icon component after the label, such as `dma-icon-chevron-down`. An icon that sets no `size` takes the size of the button.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},render:e=>({props:e,template:`
            <button
                dma-button
                type="button"
                [variant]="variant"
                [size]="size"
                [disabled]="disabled"
                [loading]="loading"
                [loadingLabel]="loadingLabel"
            >
                @if (leadingIcon) {
                    <dma-icon-plus />
                }
                {{ label }}

                @if (trailingIcon) {
                    <dma-icon-chevron-down />
                }
            </button>
        `})},R={args:{label:`Save map`,variant:`primary`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`,leadingIcon:!1,trailingIcon:!1}},z={args:{label:`Export map`,variant:`secondary`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`,leadingIcon:!1,trailingIcon:!1}},B={args:{label:`Rename map`,variant:`ghost`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`,leadingIcon:!1,trailingIcon:!1}},V={args:{label:`Delete map`,variant:`danger`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`,leadingIcon:!1,trailingIcon:!1}},H={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary">Save map</button>
            <button dma-button type="button" variant="primary" disabled>Save map</button>
            <button dma-button type="button" variant="primary" loading>Save map</button>
            <button dma-button type="button" variant="secondary">Export map</button>
            <button dma-button type="button" variant="secondary" disabled>Export map</button>
            <button dma-button type="button" variant="secondary" loading>Export map</button>
            <button dma-button type="button" variant="ghost">Rename map</button>
            <button dma-button type="button" variant="ghost" disabled>Rename map</button>
            <button dma-button type="button" variant="ghost" loading>Rename map</button>
            <button dma-button type="button" variant="danger">Delete map</button>
            <button dma-button type="button" variant="danger" disabled>Delete map</button>
            <button dma-button type="button" variant="danger" loading>Delete map</button>
        </div>`})},U={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; gap: var(--dma-spacing-16)">
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
        </div>`})},W={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; justify-items: start; gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary" size="small"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="small">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="small"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="primary" size="medium"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="medium">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="medium"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="primary" size="large"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="large">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="large"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
        </div>`})},G={parameters:{controls:{disable:!0}},render:()=>({props:{slow:o(!1),fast:o(!1),run:(e,t)=>{e.set(!0),setTimeout(()=>e.set(!1),t)}},template:`<div style="display: flex; gap: var(--dma-spacing-16)">
            <button dma-button type="button" [loading]="slow()" loadingLabel="Saving" (click)="run(slow, 2000)">
                Save map in 2s
            </button>
            <button dma-button type="button" variant="secondary" [loading]="fast()" (click)="run(fast, 200)">
                Save map in 0.2s
            </button>
        </div>`})},K=[`Primary`,`Secondary`,`Ghost`,`Danger`,`States`,`Sizes`,`Icons`,`Loading`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Save map',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    loadingLabel: 'Loading',
    leadingIcon: false,
    trailingIcon: false
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Export map',
    variant: 'secondary',
    size: 'medium',
    disabled: false,
    loading: false,
    loadingLabel: 'Loading',
    leadingIcon: false,
    trailingIcon: false
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Rename map',
    variant: 'ghost',
    size: 'medium',
    disabled: false,
    loading: false,
    loadingLabel: 'Loading',
    leadingIcon: false,
    trailingIcon: false
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Delete map',
    variant: 'danger',
    size: 'medium',
    disabled: false,
    loading: false,
    loadingLabel: 'Loading',
    leadingIcon: false,
    trailingIcon: false
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  // The template spells out every button, so Storybook can show it in the code snippet.
  render: () => ({
    template: \`<div style="display: grid; grid-template-columns: repeat(3, max-content); gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary">Save map</button>
            <button dma-button type="button" variant="primary" disabled>Save map</button>
            <button dma-button type="button" variant="primary" loading>Save map</button>
            <button dma-button type="button" variant="secondary">Export map</button>
            <button dma-button type="button" variant="secondary" disabled>Export map</button>
            <button dma-button type="button" variant="secondary" loading>Export map</button>
            <button dma-button type="button" variant="ghost">Rename map</button>
            <button dma-button type="button" variant="ghost" disabled>Rename map</button>
            <button dma-button type="button" variant="ghost" loading>Rename map</button>
            <button dma-button type="button" variant="danger">Delete map</button>
            <button dma-button type="button" variant="danger" disabled>Delete map</button>
            <button dma-button type="button" variant="danger" loading>Delete map</button>
        </div>\`
  })
}`,...H.parameters?.docs?.source},description:{story:`Every variant in its Default, its Disabled, and its Loading state. Hover, Pressed, and Focus show when you point
at, hold, or tab to a button. A loading button shows its spinner after 300ms.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`Every variant in the Small, the Medium, and the Large size.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`Every size with a leading icon, a trailing icon, and both. The icons take the size of the button, and the gap
between the label and an icon grows with the size.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
            <button dma-button type="button" [loading]="slow()" loadingLabel="Saving" (click)="run(slow, 2000)">
                Save map in 2s
            </button>
            <button dma-button type="button" variant="secondary" [loading]="fast()" (click)="run(fast, 200)">
                Save map in 0.2s
            </button>
        </div>\`
  })
}`,...G.parameters?.docs?.source},description:{story:`Click a button to start an action that takes as long as its label says. The slow one shows its spinner after
300ms. The fast one ends within 300ms, so it shows none.`,...G.parameters?.docs?.description}}}})))()}export{H as a,U as i,G as n,I as o,R as r,init_button_stories as s,W as t};