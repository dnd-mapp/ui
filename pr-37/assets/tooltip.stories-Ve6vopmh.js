import{n as e,r as t}from"./rolldown-runtime-D_-wTCJc.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u}from"./icon-button.component-CbsYtqGh.js";import{a as d,i as f,o as p,t as m}from"./dist-BBwUhvx9.js";import{n as h,t as g}from"./icon-xmark.component-Dy20xZVA.js";var _=t({Default:()=>y,DisabledTrigger:()=>x,Examples:()=>S,Placements:()=>b,__namedExportsOrder:()=>C,default:()=>v}),v,y,b,x,S,C;function init_tooltip_stories(){return(init_tooltip_stories=e((()=>{p(),h(),m(),o(),a(),s(),i(),v={title:`Components/Tooltip`,component:c,decorators:[f({imports:[c,n,u,d,g]})],argTypes:{dmaTooltip:{description:`The text of the tooltip, which is the accessible name of its control, such as "Close panel". Keep it a short name, not a description.`,type:{name:`string`,required:!0},control:`text`,table:{type:{summary:`string`}}},dmaTooltipPlacement:{description:`The side of the control that the tooltip shows on. It flips to the opposite side when it does not fit there.`,options:Object.values(r),control:`select`,table:{type:{summary:`TooltipPlacement`},defaultValue:{summary:`'${l}'`}}}},render:e=>({props:e,template:`<div style="display: flex; justify-content: center; padding: var(--dma-spacing-48)">
            <button
                dma-icon-button
                type="button"
                variant="ghost"
                [dmaTooltip]="dmaTooltip"
                [dmaTooltipPlacement]="dmaTooltipPlacement"
            >
                <dma-icon-xmark />
            </button>
        </div>`})},y={args:{dmaTooltip:`Close panel`,dmaTooltipPlacement:`top`}},b={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: flex; justify-content: center; gap: var(--dma-spacing-16); padding: var(--dma-spacing-48) 8rem">
            <button dma-icon-button type="button" variant="ghost" dmaTooltip="Close panel"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" variant="ghost" dmaTooltip="Add layer" dmaTooltipPlacement="bottom"><dma-icon-plus /></button>
            <button dma-icon-button type="button" variant="ghost" dmaTooltip="Add map" dmaTooltipPlacement="left"><dma-icon-plus /></button>
            <button dma-icon-button type="button" variant="ghost" dmaTooltip="Close map" dmaTooltipPlacement="right"><dma-icon-xmark /></button>
        </div>`})},x={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: flex; justify-content: center; padding: var(--dma-spacing-48)">
            <button dma-icon-button type="button" variant="ghost" dmaTooltip="Delete layer" disabled>
                <dma-icon-xmark />
            </button>
        </div>`})},S={parameters:{controls:{disable:!0}},render:()=>({styles:[`.groups { display: flex; align-items: flex-start; gap: var(--dma-spacing-48); color: var(--dma-color-text-default); }`,`.group { display: flex; flex-direction: column; align-items: flex-start; gap: var(--dma-spacing-12); }`,`.title { margin: 0; font: var(--dma-text-label-small-font); }`,`.stage { display: flex; flex-direction: column; align-items: center; }`,`.stage.row { flex-direction: row; }`],template:`<div class="groups">
            <div class="group">
                <p class="title">Top (default)</p>
                <div class="stage">
                    <dma-tooltip text="Close" />
                    <button dma-icon-button type="button" variant="ghost" aria-label="Close"><dma-icon-xmark /></button>
                </div>
            </div>
            <div class="group">
                <p class="title">Two lines</p>
                <div class="stage">
                    <dma-tooltip text="Show or hide the fog of war layer" />
                    <button dma-icon-button type="button" variant="ghost" aria-label="Show or hide the fog of war layer"><dma-icon-plus /></button>
                </div>
            </div>
            <div class="group">
                <p class="title">Right</p>
                <div class="stage row">
                    <button dma-icon-button type="button" variant="ghost" aria-label="Pan the map"><dma-icon-plus /></button>
                    <dma-tooltip text="Pan the map" placement="right" />
                </div>
            </div>
            <div class="group">
                <p class="title">Disabled trigger</p>
                <div class="stage">
                    <dma-tooltip text="Delete layer" />
                    <button dma-icon-button type="button" variant="ghost" aria-label="Delete layer" disabled><dma-icon-xmark /></button>
                </div>
            </div>
            <div class="group">
                <p class="title">Focused trigger</p>
                <div class="stage">
                    <dma-tooltip text="Map settings" />
                    <button dma-icon-button type="button" variant="ghost" aria-label="Map settings"><dma-icon-plus /></button>
                </div>
            </div>
        </div>`})},C=[`Default`,`Placements`,`DisabledTrigger`,`Examples`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    dmaTooltip: 'Close panel',
    dmaTooltipPlacement: 'top'
  }
}`,...y.parameters?.docs?.source},description:{story:"Point at the icon button for 500ms, or tab to it, to show its tooltip. Press `Escape` to close it.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  // The template spells out every icon button, so Storybook can show it in the code snippet.
  render: () => ({
    template: \`<div style="display: flex; justify-content: center; gap: var(--dma-spacing-16); padding: var(--dma-spacing-48) 8rem">
            <button dma-icon-button type="button" variant="ghost" dmaTooltip="Close panel"><dma-icon-xmark /></button>
            <button dma-icon-button type="button" variant="ghost" dmaTooltip="Add layer" dmaTooltipPlacement="bottom"><dma-icon-plus /></button>
            <button dma-icon-button type="button" variant="ghost" dmaTooltip="Add map" dmaTooltipPlacement="left"><dma-icon-plus /></button>
            <button dma-icon-button type="button" variant="ghost" dmaTooltip="Close map" dmaTooltipPlacement="right"><dma-icon-xmark /></button>
        </div>\`
  })
}`,...b.parameters?.docs?.source},description:{story:`An icon button with a tooltip on each side. Once one tooltip shows, sweep the pointer along the row: the next one
shows at once.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    template: \`<div style="display: flex; justify-content: center; padding: var(--dma-spacing-48)">
            <button dma-icon-button type="button" variant="ghost" dmaTooltip="Delete layer" disabled>
                <dma-icon-xmark />
            </button>
        </div>\`
  })
}`,...x.parameters?.docs?.source},description:{story:`A tooltip on a disabled icon button. It still shows on hover and on keyboard focus, because a disabled icon button
stays focusable.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    styles: [\`.groups { display: flex; align-items: flex-start; gap: var(--dma-spacing-48); color: var(--dma-color-text-default); }\`, \`.group { display: flex; flex-direction: column; align-items: flex-start; gap: var(--dma-spacing-12); }\`, \`.title { margin: 0; font: var(--dma-text-label-small-font); }\`, \`.stage { display: flex; flex-direction: column; align-items: center; }\`, \`.stage.row { flex-direction: row; }\`],
    template: \`<div class="groups">
            <div class="group">
                <p class="title">Top (default)</p>
                <div class="stage">
                    <dma-tooltip text="Close" />
                    <button dma-icon-button type="button" variant="ghost" aria-label="Close"><dma-icon-xmark /></button>
                </div>
            </div>
            <div class="group">
                <p class="title">Two lines</p>
                <div class="stage">
                    <dma-tooltip text="Show or hide the fog of war layer" />
                    <button dma-icon-button type="button" variant="ghost" aria-label="Show or hide the fog of war layer"><dma-icon-plus /></button>
                </div>
            </div>
            <div class="group">
                <p class="title">Right</p>
                <div class="stage row">
                    <button dma-icon-button type="button" variant="ghost" aria-label="Pan the map"><dma-icon-plus /></button>
                    <dma-tooltip text="Pan the map" placement="right" />
                </div>
            </div>
            <div class="group">
                <p class="title">Disabled trigger</p>
                <div class="stage">
                    <dma-tooltip text="Delete layer" />
                    <button dma-icon-button type="button" variant="ghost" aria-label="Delete layer" disabled><dma-icon-xmark /></button>
                </div>
            </div>
            <div class="group">
                <p class="title">Focused trigger</p>
                <div class="stage">
                    <dma-tooltip text="Map settings" />
                    <button dma-icon-button type="button" variant="ghost" aria-label="Map settings"><dma-icon-plus /></button>
                </div>
            </div>
        </div>\`
  })
}`,...S.parameters?.docs?.source},description:{story:"The groups of the `Tooltip` Figma page, with each tooltip drawn beside its trigger by `dma-tooltip` itself. The\nicon buttons have no `dmaTooltip`, so an `aria-label` names each one. Tab to the last icon button to see the focus\nring of the `Focused trigger` group. The Figma page uses glyphs that `@dnd-mapp/ui/icons` doesn't have yet, so\nthese use `xmark` and `plus`.",...S.parameters?.docs?.description}}}})))()}export{init_tooltip_stories as a,b as i,x as n,_ as o,S as r,y as t};