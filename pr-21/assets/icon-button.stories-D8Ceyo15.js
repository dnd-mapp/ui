import{n as e,r as t}from"./rolldown-runtime-D_-wTCJc.js";import{C as n,dt as r}from"./angular-platform-A5fhYa3B.js";import{a as i,i as a,o,t as s}from"./dist-QbmyZ24t.js";import{n as c,t as l}from"./icon-xmark.component-C4pljBA0.js";import{a as u,c as d,f,l as p,o as m,u as h}from"./loading-state-BNRGQAr_.js";import{n as g,t as _}from"./icon-button.component-OSLuD9fh.js";var v=t({Danger:()=>C,Ghost:()=>S,Loading:()=>E,Primary:()=>b,Secondary:()=>x,Sizes:()=>T,States:()=>w,__namedExportsOrder:()=>D,default:()=>y}),y,b,x,S,C,w,T,E,D;function init_icon_button_stories(){return(init_icon_button_stories=e((()=>{n(),o(),c(),s(),f(),d(),g(),y={title:`Components/Icon button`,component:_,decorators:[a({imports:[_,i,l]})],argTypes:{"aria-label":{description:`The accessible name of the icon button, such as "Close panel". The icon button shows no label, so it needs one. Match the text of its tooltip.`,type:{name:`string`,required:!0},control:`text`,table:{type:{summary:`string`}}},variant:{description:"The variant of the icon button, which sets its colors. Use `primary` for the one main action in a view, `secondary` for other actions beside it, `ghost` for minor actions that should stay quiet, and `danger` for actions that destroy or remove something.",options:Object.values(u),control:`select`,table:{type:{summary:`ButtonVariant`},defaultValue:{summary:`'${m}'`}}},size:{description:"The size of the icon button, which sets its square, its radius, and the size of its icon. Use `medium` unless the layout around the icon button calls for a `small` or a `large` one.",options:Object.values(p),control:`select`,table:{type:{summary:`ButtonSize`},defaultValue:{summary:`'${h}'`}}},disabled:{description:'Whether the icon button is disabled. It sets `aria-disabled="true"` rather than the native `disabled` attribute, so a disabled icon button stays in the tab order and can show its tooltip, but ignores clicks.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{description:"Whether the icon button is busy with the action it started, such as closing a panel. A loading icon button blocks clicks but keeps focus. After 300ms, it shows a spinning `circle-notch` in place of its icon for at least 500ms.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loadingLabel:{description:`The word that screen readers announce once the spinner shows, such as "Closing".`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Loading'`}}}},render:e=>({props:{...e,label:e[`aria-label`]},template:`
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
        `})},b={args:{"aria-label":`Close panel`,variant:`primary`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`}},x={args:{"aria-label":`Close panel`,variant:`secondary`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`}},S={args:{"aria-label":`Close panel`,variant:`ghost`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`}},C={args:{"aria-label":`Remove layer`,variant:`danger`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`}},w={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); gap: var(--dma-spacing-16)">
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
        </div>`})},T={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; gap: var(--dma-spacing-16)">
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
        </div>`})},E={parameters:{controls:{disable:!0}},render:()=>({props:{slow:r(!1),fast:r(!1),run:(e,t)=>{e.set(!0),setTimeout(()=>e.set(!1),t)}},template:`<div style="display: flex; gap: var(--dma-spacing-16)">
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
        </div>`})},D=[`Primary`,`Secondary`,`Ghost`,`Danger`,`States`,`Sizes`,`Loading`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Close panel',
    'variant': 'primary',
    'size': 'medium',
    'disabled': false,
    'loading': false,
    'loadingLabel': 'Loading'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Close panel',
    'variant': 'secondary',
    'size': 'medium',
    'disabled': false,
    'loading': false,
    'loadingLabel': 'Loading'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Close panel',
    'variant': 'ghost',
    'size': 'medium',
    'disabled': false,
    'loading': false,
    'loadingLabel': 'Loading'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Remove layer',
    'variant': 'danger',
    'size': 'medium',
    'disabled': false,
    'loading': false,
    'loadingLabel': 'Loading'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Every variant in its Default, its Disabled, and its Loading state. Hover, Pressed, and Focus show when you point
at, hold, or tab to an icon button. A disabled icon button stays in the tab order, so it shows the focus ring too.
A loading icon button shows its spinner after 300ms.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`Every variant in the Small, the Medium, and the Large size. The icon takes the size of the icon button.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Click an icon button to start an action that takes as long as its name says. The slow one shows its spinner after
300ms. The fast one ends within 300ms, so it shows none.`,...E.parameters?.docs?.description}}}})))()}export{v as a,w as i,b as n,init_icon_button_stories as o,T as r,E as t};