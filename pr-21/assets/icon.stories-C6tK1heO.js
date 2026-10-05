import{n as e,r as t}from"./rolldown-runtime-D_-wTCJc.js";import{n,t as r}from"./icon-chevron-down.component-Cv0UFHpO.js";import{a as i,c as a,d as o,i as s,m as c,n as l,o as u,p as d,s as f,t as p}from"./dist-ClSmbv8e.js";import{n as m,t as h}from"./icon-xmark.component-B_mIe2Oj.js";var g;function init_icon_glyph(){return(init_icon_glyph=e((()=>{g={chevronDown:`chevron-down`,circleNotch:`circle-notch`,plus:`plus`,xmark:`xmark`}})))()}var _=t({Glyphs:()=>S,Icon:()=>y,Sizes:()=>b,Spinning:()=>x,__namedExportsOrder:()=>C,default:()=>v}),v,y,b,x,S,C;function init_icon_stories(){return(init_icon_stories=e((()=>{p(),n(),a(),u(),m(),init_icon_glyph(),c(),v={title:`Icons/Icon`,component:i,decorators:[s({imports:[r,f,i,h]}),l(e=>`<div style="color: var(--dma-color-text-default)">${e}</div>`)],argTypes:{glyph:{description:"The glyph that the icon shows. Each glyph has a component of its own, so the glyph is part of the selector, such as `dma-icon-plus`.",options:Object.values(g),control:`select`,table:{type:{summary:`IconGlyph`}}},size:{description:"The size of the icon, which sets its frame. Match it to the size of the label beside it, so the icon never changes the height of a control. Without it, the icon takes the size of the control around it, such as a button, or `medium` outside one.",options:Object.values(d),control:`select`,table:{type:{summary:`IconSize`},defaultValue:{summary:`'${o}'`}}},spin:{description:"Whether the icon spins, such as `circle-notch` in a control that is busy. It turns once per second at a steady speed, or once every 3 seconds when the user prefers reduced motion.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},render:({glyph:e,size:t,spin:n})=>({props:{size:t,spin:n},template:`<dma-icon-${e} [size]="size" [spin]="spin" />`})},y={args:{glyph:`plus`,size:`medium`,spin:!1}},b={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(2, max-content); align-items: center; gap: var(--dma-spacing-16) var(--dma-spacing-32)">
            <dma-icon-plus size="small" />
            <span style="display: inline-flex; align-items: center; gap: var(--dma-spacing-4); font: var(--dma-text-label-small-font)"><dma-icon-plus size="small" />Add map</span>
            <dma-icon-plus size="medium" />
            <span style="display: inline-flex; align-items: center; gap: var(--dma-spacing-8); font: var(--dma-text-label-medium-font)"><dma-icon-plus size="medium" />Add map</span>
            <dma-icon-plus size="large" />
            <span style="display: inline-flex; align-items: center; gap: var(--dma-spacing-12); font: var(--dma-text-label-large-font)"><dma-icon-plus size="large" />Add map</span>
        </div>`})},x={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: flex; align-items: center; gap: var(--dma-spacing-16)">
            <dma-icon-circle-notch size="small" spin />
            <dma-icon-circle-notch size="medium" spin />
            <dma-icon-circle-notch size="large" spin />
        </div>`})},S={parameters:{controls:{disable:!0}},render:()=>({template:`<section style="display: grid; gap: var(--dma-spacing-16); font: var(--dma-text-body-small-font)">
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
        </section>`})},C=[`Icon`,`Sizes`,`Spinning`,`Glyphs`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    glyph: 'plus',
    size: 'medium',
    spin: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Every size, alone and beside a label in the text style it pairs with. The frame of each size is as high as the
line height of that label.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"`circle-notch` spinning in every size. It turns once per second, or once every 3 seconds when the user prefers\nreduced motion.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Every glyph with its name, grouped like the `Glyphs` page of the `Icons` Figma file.",...S.parameters?.docs?.description}}}})))()}export{_ as a,x as i,y as n,init_icon_stories as o,b as r,S as t};