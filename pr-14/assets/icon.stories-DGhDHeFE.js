import{n as e,r as t}from"./rolldown-runtime-D_-wTCJc.js";import{b as n,ct as r,st as i,w as a}from"./angular-platform-DDiTsSWz.js";import{_ as o,a as s,c,d as l,f as u,g as d,h as f,i as p,l as m,n as h,o as g,p as _,s as v,t as y,u as b,v as x}from"./dist-DgzgjDEG.js";var S;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvaWNvbnMvZ2x5cGhzL2ljb24teG1hcmsuY29tcG9uZW50LnN2Zw(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvaWNvbnMvZ2x5cGhzL2ljb24teG1hcmsuY29tcG9uZW50LnN2Zw=e((()=>{S=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>
`})))()}var C;function init_icon_xmark_component(){return(init_icon_xmark_component=e((()=>{r(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvaWNvbnMvZ2x5cGhzL2ljb24teG1hcmsuY29tcG9uZW50LnN2Zw(),x(),n(),u(),C=class IconXmarkComponent extends l{},C=i([a({selector:`dma-icon-xmark`,template:S,host:{"data-glyph":`xmark`},styles:[o]})],C)})))()}var w;function init_icon_glyph(){return(init_icon_glyph=e((()=>{w={chevronDown:`chevron-down`,circleNotch:`circle-notch`,plus:`plus`,xmark:`xmark`}})))()}var T=t({Glyphs:()=>A,Icon:()=>D,Sizes:()=>O,Spinning:()=>k,__namedExportsOrder:()=>j,default:()=>E}),E,D,O,k,A,j;function init_icon_stories(){return(init_icon_stories=e((()=>{y(),b(),c(),g(),init_icon_xmark_component(),init_icon_glyph(),d(),E={title:`Icons/Icon`,component:s,decorators:[p({imports:[m,v,s,C]}),h(e=>`<div style="color: var(--dma-color-text-default)">${e}</div>`)],argTypes:{glyph:{description:"The glyph that the icon shows. Each glyph has a component of its own, so the glyph is part of the selector, such as `dma-icon-plus`.",options:Object.values(w),control:`select`,table:{type:{summary:`IconGlyph`}}},size:{description:"The size of the icon, which sets its frame. Match it to the size of the label beside it, so the icon never changes the height of a control. Without it, the icon takes the size of the control around it, such as a button, or `medium` outside one.",options:Object.values(f),control:`select`,table:{type:{summary:`IconSize`},defaultValue:{summary:`'${_}'`}}},spin:{description:"Whether the icon spins, such as `circle-notch` in a control that is busy. It turns once per second at a steady speed, or once every 3 seconds when the user prefers reduced motion.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},render:({glyph:e,size:t,spin:n})=>({props:{size:t,spin:n},template:`<dma-icon-${e} [size]="size" [spin]="spin" />`})},D={args:{glyph:`plus`,size:`medium`,spin:!1}},O={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(2, max-content); align-items: center; gap: var(--dma-spacing-16) var(--dma-spacing-32)">
            <dma-icon-plus size="small" />
            <span style="display: inline-flex; align-items: center; gap: var(--dma-spacing-4); font: var(--dma-text-label-small-font)"><dma-icon-plus size="small" />Add map</span>
            <dma-icon-plus size="medium" />
            <span style="display: inline-flex; align-items: center; gap: var(--dma-spacing-8); font: var(--dma-text-label-medium-font)"><dma-icon-plus size="medium" />Add map</span>
            <dma-icon-plus size="large" />
            <span style="display: inline-flex; align-items: center; gap: var(--dma-spacing-12); font: var(--dma-text-label-large-font)"><dma-icon-plus size="large" />Add map</span>
        </div>`})},k={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: flex; align-items: center; gap: var(--dma-spacing-16)">
            <dma-icon-circle-notch size="small" spin />
            <dma-icon-circle-notch size="medium" spin />
            <dma-icon-circle-notch size="large" spin />
        </div>`})},A={parameters:{controls:{disable:!0}},render:()=>({template:`<section style="display: grid; gap: var(--dma-spacing-16); font: var(--dma-text-body-small-font)">
            <h2 style="margin: 0; font: var(--dma-text-heading-small-font)">Core actions</h2>
            <div style="display: grid; grid-template-columns: repeat(4, 8rem); gap: var(--dma-spacing-16)">
                <figure style="display: grid; justify-items: center; gap: var(--dma-spacing-8); margin: 0">
                    <dma-icon-chevron-down size="large" />
                    <figcaption>chevron-down</figcaption>
                </figure>
                <figure style="display: grid; justify-items: center; gap: var(--dma-spacing-8); margin: 0">
                    <dma-icon-circle-notch size="large" />
                    <figcaption>circle-notch</figcaption>
                </figure>
                <figure style="display: grid; justify-items: center; gap: var(--dma-spacing-8); margin: 0">
                    <dma-icon-plus size="large" />
                    <figcaption>plus</figcaption>
                </figure>
                <figure style="display: grid; justify-items: center; gap: var(--dma-spacing-8); margin: 0">
                    <dma-icon-xmark size="large" />
                    <figcaption>xmark</figcaption>
                </figure>
            </div>
        </section>`})},j=[`Icon`,`Sizes`,`Spinning`,`Glyphs`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    glyph: 'plus',
    size: 'medium',
    spin: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  // The template spells out every icon, so Storybook can show it in the code snippet.
  render: () => ({
    template: \`<div style="display: grid; grid-template-columns: repeat(2, max-content); align-items: center; gap: var(--dma-spacing-16) var(--dma-spacing-32)">
            <dma-icon-plus size="small" />
            <span style="display: inline-flex; align-items: center; gap: var(--dma-spacing-4); font: var(--dma-text-label-small-font)"><dma-icon-plus size="small" />Add map</span>
            <dma-icon-plus size="medium" />
            <span style="display: inline-flex; align-items: center; gap: var(--dma-spacing-8); font: var(--dma-text-label-medium-font)"><dma-icon-plus size="medium" />Add map</span>
            <dma-icon-plus size="large" />
            <span style="display: inline-flex; align-items: center; gap: var(--dma-spacing-12); font: var(--dma-text-label-large-font)"><dma-icon-plus size="large" />Add map</span>
        </div>\`
  })
}`,...O.parameters?.docs?.source},description:{story:`Every size, alone and beside a label in the text style it pairs with. The frame of each size is as high as the
line height of that label.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  // The template spells out every icon, so Storybook can show it in the code snippet.
  render: () => ({
    template: \`<div style="display: flex; align-items: center; gap: var(--dma-spacing-16)">
            <dma-icon-circle-notch size="small" spin />
            <dma-icon-circle-notch size="medium" spin />
            <dma-icon-circle-notch size="large" spin />
        </div>\`
  })
}`,...k.parameters?.docs?.source},description:{story:"`circle-notch` spinning in every size. It turns once per second, or once every 3 seconds when the user prefers\nreduced motion.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  // The template spells out every icon, so Storybook can show it in the code snippet.
  render: () => ({
    template: \`<section style="display: grid; gap: var(--dma-spacing-16); font: var(--dma-text-body-small-font)">
            <h2 style="margin: 0; font: var(--dma-text-heading-small-font)">Core actions</h2>
            <div style="display: grid; grid-template-columns: repeat(4, 8rem); gap: var(--dma-spacing-16)">
                <figure style="display: grid; justify-items: center; gap: var(--dma-spacing-8); margin: 0">
                    <dma-icon-chevron-down size="large" />
                    <figcaption>chevron-down</figcaption>
                </figure>
                <figure style="display: grid; justify-items: center; gap: var(--dma-spacing-8); margin: 0">
                    <dma-icon-circle-notch size="large" />
                    <figcaption>circle-notch</figcaption>
                </figure>
                <figure style="display: grid; justify-items: center; gap: var(--dma-spacing-8); margin: 0">
                    <dma-icon-plus size="large" />
                    <figcaption>plus</figcaption>
                </figure>
                <figure style="display: grid; justify-items: center; gap: var(--dma-spacing-8); margin: 0">
                    <dma-icon-xmark size="large" />
                    <figcaption>xmark</figcaption>
                </figure>
            </div>
        </section>\`
  })
}`,...A.parameters?.docs?.source},description:{story:"Every glyph with its name, grouped like the `Glyphs` page of the `Icons` Figma file.",...A.parameters?.docs?.description}}}})))()}export{T as a,k as i,D as n,init_icon_stories as o,O as r,A as t};