import{n as e,r as t}from"./rolldown-runtime-D_-wTCJc.js";import{C as n,dt as r}from"./angular-platform-BIARUNFG.js";import{i,n as a,r as o,t as s}from"./icon-button.component-CbsYtqGh.js";import{a as c,i as l,o as u,t as d}from"./dist-BBwUhvx9.js";import{n as f,t as p}from"./icon-xmark.component-Dy20xZVA.js";import{a as m,c as h,f as g,l as _,o as v,u as y}from"./loading-state-BauSLZgV.js";var b=t({Danger:()=>T,Ghost:()=>w,Loading:()=>O,Primary:()=>S,Secondary:()=>C,Sizes:()=>D,States:()=>E,__namedExportsOrder:()=>k,default:()=>x}),x,S,C,w,T,E,D,O,k;function init_icon_button_stories(){return(init_icon_button_stories=e((()=>{n(),u(),f(),d(),g(),h(),i(),a(),x={title:`Components/Icon button`,component:s,decorators:[l({imports:[s,c,p,o]})],argTypes:{dmaTooltip:{description:'The text of the tooltip, which is the accessible name of the icon button, such as "Close panel". The icon button shows no label, and the design system asks for a tooltip on every icon button. It comes from `TooltipDirective`.',control:`text`,table:{type:{summary:`string`}}},"aria-label":{description:`The accessible name of an icon button without a tooltip, such as "Close panel". An icon button with a tooltip needs none, because the tooltip names it.`,control:`text`,table:{type:{summary:`string`}}},variant:{description:"The variant of the icon button, which sets its colors. Use `primary` for the one main action in a view, `secondary` for other actions beside it, `ghost` for minor actions that should stay quiet, and `danger` for actions that destroy or remove something.",options:Object.values(m),control:`select`,table:{type:{summary:`ButtonVariant`},defaultValue:{summary:`'${v}'`}}},size:{description:"The size of the icon button, which sets its square, its radius, and the size of its icon. Use `medium` unless the layout around the icon button calls for a `small` or a `large` one.",options:Object.values(_),control:`select`,table:{type:{summary:`ButtonSize`},defaultValue:{summary:`'${y}'`}}},disabled:{description:'Whether the icon button is disabled. It sets `aria-disabled="true"` rather than the native `disabled` attribute, so a disabled icon button stays in the tab order and can show its tooltip, but ignores clicks.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{description:"Whether the icon button is busy with the action it started, such as closing a panel. A loading icon button blocks clicks but keeps focus. After 300ms, it shows a spinning `circle-notch` in place of its icon for at least 500ms.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loadingLabel:{description:`The word that screen readers announce once the spinner shows, such as "Closing".`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Loading'`}}}},render:e=>({props:{...e,label:e[`aria-label`]},template:`
            <button
                dma-icon-button
                type="button"
                [dmaTooltip]="dmaTooltip"
                [aria-label]="label"
                [variant]="variant"
                [size]="size"
                [disabled]="disabled"
                [loading]="loading"
                [loadingLabel]="loadingLabel"
            >
                <dma-icon-xmark />
            </button>
        `})},S={args:{dmaTooltip:`Close panel`,variant:`primary`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`}},C={args:{dmaTooltip:`Close panel`,variant:`secondary`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`}},w={args:{dmaTooltip:`Close panel`,variant:`ghost`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`}},T={args:{dmaTooltip:`Remove layer`,variant:`danger`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`}},E={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); gap: var(--dma-spacing-16)">
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="primary"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="primary" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="primary" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="secondary"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="secondary" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="secondary" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="ghost"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="ghost" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="ghost" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Remove layer" variant="danger"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Remove layer" variant="danger" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Remove layer" variant="danger" loading><dma-icon-xmark /></button>
        </div>`})},D={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; gap: var(--dma-spacing-16)">
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="primary" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="primary" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="primary" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="secondary" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="secondary" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="secondary" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="ghost" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="ghost" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="ghost" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Remove layer" variant="danger" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Remove layer" variant="danger" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Remove layer" variant="danger" size="large"><dma-icon-xmark /></button>
        </div>`})},O={parameters:{controls:{disable:!0}},render:()=>({props:{slow:r(!1),fast:r(!1),run:(e,t)=>{e.set(!0),setTimeout(()=>e.set(!1),t)}},template:`<div style="display: flex; gap: var(--dma-spacing-16)">
            <button
                dma-icon-button
                type="button"
                dmaTooltip="Add a layer in 2s"
                [loading]="slow()"
                loadingLabel="Adding"
                (click)="run(slow, 2000)"
            >
                <dma-icon-plus />
            </button>
            <button
                dma-icon-button
                type="button"
                dmaTooltip="Add a layer in 0.2s"
                variant="secondary"
                [loading]="fast()"
                (click)="run(fast, 200)"
            >
                <dma-icon-plus />
            </button>
        </div>`})},k=[`Primary`,`Secondary`,`Ghost`,`Danger`,`States`,`Sizes`,`Loading`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    dmaTooltip: 'Close panel',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    loadingLabel: 'Loading'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    dmaTooltip: 'Close panel',
    variant: 'secondary',
    size: 'medium',
    disabled: false,
    loading: false,
    loadingLabel: 'Loading'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    dmaTooltip: 'Close panel',
    variant: 'ghost',
    size: 'medium',
    disabled: false,
    loading: false,
    loadingLabel: 'Loading'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    dmaTooltip: 'Remove layer',
    variant: 'danger',
    size: 'medium',
    disabled: false,
    loading: false,
    loadingLabel: 'Loading'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  // The template spells out every icon button, so Storybook can show it in the code snippet.
  render: () => ({
    template: \`<div style="display: grid; grid-template-columns: repeat(3, max-content); gap: var(--dma-spacing-16)">
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="primary"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="primary" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="primary" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="secondary"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="secondary" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="secondary" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="ghost"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="ghost" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="ghost" loading><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Remove layer" variant="danger"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Remove layer" variant="danger" disabled><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Remove layer" variant="danger" loading><dma-icon-xmark /></button>
        </div>\`
  })
}`,...E.parameters?.docs?.source},description:{story:`Every variant in its Default, its Disabled, and its Loading state. Hover, Pressed, and Focus show when you point
at, hold, or tab to an icon button. A disabled icon button stays in the tab order, so it shows the focus ring too.
A loading icon button shows its spinner after 300ms.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  // The template spells out every icon button, so Storybook can show it in the code snippet.
  render: () => ({
    template: \`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; gap: var(--dma-spacing-16)">
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="primary" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="primary" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="primary" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="secondary" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="secondary" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="secondary" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="ghost" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="ghost" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Close panel" variant="ghost" size="large"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Remove layer" variant="danger" size="small"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Remove layer" variant="danger" size="medium"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" dmaTooltip="Remove layer" variant="danger" size="large"><dma-icon-xmark /></button>
        </div>\`
  })
}`,...D.parameters?.docs?.source},description:{story:`Every variant in the Small, the Medium, and the Large size. The icon takes the size of the icon button.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
                dmaTooltip="Add a layer in 2s"
                [loading]="slow()"
                loadingLabel="Adding"
                (click)="run(slow, 2000)"
            >
                <dma-icon-plus />
            </button>
            <button
                dma-icon-button
                type="button"
                dmaTooltip="Add a layer in 0.2s"
                variant="secondary"
                [loading]="fast()"
                (click)="run(fast, 200)"
            >
                <dma-icon-plus />
            </button>
        </div>\`
  })
}`,...O.parameters?.docs?.source},description:{story:`Click an icon button to start an action that takes as long as its name says. The slow one shows its spinner after
300ms. The fast one ends within 300ms, so it shows none.`,...O.parameters?.docs?.description}}}})))()}export{b as a,E as i,S as n,init_icon_button_stories as o,D as r,O as t};