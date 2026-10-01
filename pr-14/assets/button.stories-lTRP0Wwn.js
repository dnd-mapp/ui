import{n as e,r as t}from"./rolldown-runtime-D_-wTCJc.js";import{B as n,E as r,G as i,H as ee,I as a,K as o,O as te,P as ne,S as s,U as c,V as l,W as re,X as u,Y as d,b as f,ct as p,g as ie,k as m,o as ae,s as oe,st as h,v as se,w as g,x as _,z as ce}from"./angular-platform-DDiTsSWz.js";import{a as v,c as y,g as b,i as x,l as S,m as C,o as w,s as T,t as E,u as le}from"./dist-DgzgjDEG.js";function buttonSizeAttribute(e){return e===``?O:e}var D,O;function init_button_size(){return(init_button_size=e((()=>{D={small:`small`,medium:`medium`,large:`large`},O=D.medium})))()}function buttonVariantAttribute(e){return e===``?A:e}var k,A;function init_button_variant(){return(init_button_variant=e((()=>{k={primary:`primary`,secondary:`secondary`,ghost:`ghost`,danger:`danger`},A=k.primary})))()}var j;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s=e((()=>{j=`<!--
    The label and the icons in its slots share one wrapper, which lays them out with the icon gap. While the spinner
    shows, the wrapper stays in the layout at opacity 0, so the button keeps its width and its accessible name.
-->
<span class="content" [class.faded]="spinnerShown()"><ng-content /></span>
@if (spinnerShown()) {
    <dma-icon-circle-notch class="spinner" spin />
}
`})))()}var M;function init_button_component(){return(init_button_component=e((()=>{M=`:host{box-sizing:border-box;white-space:nowrap;cursor:pointer;background-color:#0000;border:1px solid #0000;place-items:center;margin:0;padding-block:0;display:inline-grid}.content,.spinner{grid-area:1/1}.content{align-items:center;gap:inherit;display:inline-flex}.content.faded{opacity:0}:host([data-size=small]){block-size:2rem;padding-inline:calc(var(--dma-spacing-12) - 1px);border-radius:var(--dma-radius-4);font:var(--dma-text-label-small-font);letter-spacing:var(--dma-text-label-small-letter-spacing);gap:var(--dma-spacing-4)}:host([data-size=medium]){block-size:2.5rem;padding-inline:calc(var(--dma-spacing-16) - 1px);border-radius:var(--dma-radius-8);font:var(--dma-text-label-medium-font);letter-spacing:var(--dma-text-label-medium-letter-spacing);gap:var(--dma-spacing-8)}:host([data-size=large]){block-size:3rem;padding-inline:calc(var(--dma-spacing-24) - 1px);border-radius:var(--dma-radius-12);font:var(--dma-text-label-large-font);letter-spacing:var(--dma-text-label-large-letter-spacing);gap:var(--dma-spacing-12)}:host([data-variant=primary]){color:var(--dma-color-text-on-accent);background-color:var(--dma-color-background-accent)}:host([data-variant=primary]:hover:not(:disabled,[data-loading])){background-color:var(--dma-color-background-accent-hover)}:host([data-variant=primary]:active:not(:disabled,[data-loading])){background-color:var(--dma-color-background-accent-pressed)}:host([data-variant=secondary]){border-color:var(--dma-color-border-default)}:host([data-variant=secondary]),:host([data-variant=ghost]){color:var(--dma-color-text-default)}:host([data-variant=secondary]:hover:not(:disabled,[data-loading])),:host([data-variant=ghost]:hover:not(:disabled,[data-loading])){background-color:var(--dma-color-background-neutral-hover)}:host([data-variant=secondary]:active:not(:disabled,[data-loading])),:host([data-variant=ghost]:active:not(:disabled,[data-loading])){background-color:var(--dma-color-background-neutral-pressed)}:host([data-variant=danger]){color:var(--dma-color-text-on-danger);background-color:var(--dma-color-background-danger)}:host([data-variant=danger]:hover:not(:disabled,[data-loading])){background-color:var(--dma-color-background-danger-hover)}:host([data-variant=danger]:active:not(:disabled,[data-loading])){background-color:var(--dma-color-background-danger-pressed)}:host(:focus-visible){outline:2px solid var(--dma-color-border-focus);outline-offset:2px}:host(:disabled){color:var(--dma-color-text-disabled);cursor:not-allowed}:host([data-variant=primary]:disabled),:host([data-variant=danger]:disabled){background-color:var(--dma-color-background-disabled)}:host([data-variant=secondary]:disabled){border-color:var(--dma-color-border-disabled)}`})))()}function getPolicy(){if(N===void 0&&(N=null,typeof window<`u`)){let e=window;if(e.trustedTypes!==void 0)try{N=e.trustedTypes.createPolicy(`angular#components`,{createHTML:e=>e})}catch(e){console.error(e)}}return N}function trustedHTMLFromString(e){return getPolicy()?.createHTML(e)||e}function _setInnerHtml(e,t,n){e.innerHTML=trustedHTMLFromString(n.sanitize(i.HTML,t)||``)}var N;function init_private(){return(init_private=e((()=>{f()})))()}var P,F,I,L;function init__a11y_module_chunk(){return(init__a11y_module_chunk=e((()=>{f(),init_private(),oe(),P=new c(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null}),F=new c(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`),I=0,L=(()=>{class LiveAnnouncer{_ngZone=d(re);_defaultOptions=d(F,{optional:!0});_liveElement;_document=d(n);_sanitizer=d(ae);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=d(P,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let n=this._defaultOptions,r,i;return t.length===1&&typeof t[0]==`number`?i=t[0]:[r,i]=t,this.clear(),clearTimeout(this._previousTimeout),r||=n&&n.politeness?n.politeness:`polite`,i==null&&n&&(i=n.duration),this._liveElement.setAttribute(`aria-live`,r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||=new Promise(e=>this._currentResolve=e),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:_setInnerHtml(this._liveElement,e,this._sanitizer),typeof i==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),i)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,t=this._document.getElementsByClassName(e),n=this._document.createElement(`div`);for(let e=0;e<t.length;e++)t[e].remove();return n.classList.add(e),n.classList.add(`cdk-visually-hidden`),n.setAttribute(`aria-atomic`,`true`),n.setAttribute(`aria-live`,`polite`),n.id=`cdk-live-announcer-${I++}`,this._document.body.appendChild(n),n}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let n=0;n<t.length;n++){let r=t[n],i=r.getAttribute(`aria-owns`);i?i.indexOf(e)===-1&&r.setAttribute(`aria-owns`,i+` `+e):r.setAttribute(`aria-owns`,e)}}static ɵfac=function LiveAnnouncer_Factory(e){return new(e||LiveAnnouncer)};static ɵprov=ce({token:LiveAnnouncer,factory:LiveAnnouncer.ɵfac})}return LiveAnnouncer})()})))()}var R;function init_visually_hidden_styles_component(){return(init_visually_hidden_styles_component=e((()=>{R=`.cdk-visually-hidden{white-space:nowrap;clip-path:inset(50%);appearance:none;border:0;outline:0;block-size:1px;inline-size:1px;margin:-1px;padding:0;position:absolute;inset-inline-start:0;overflow:hidden}`})))()}var z;function init_visually_hidden_styles_component$1(){return(init_visually_hidden_styles_component$1=e((()=>{p(),init_visually_hidden_styles_component(),f(),z=class VisuallyHiddenStylesComponent{},z=h([g({selector:`dma-visually-hidden-styles`,template:``,encapsulation:a.None,styles:[R]})],z)})))()}var B;function init_announcer_service(){return(init_announcer_service=e((()=>{p(),init__a11y_module_chunk(),f(),init_visually_hidden_styles_component$1(),B=class AnnouncerService{liveAnnouncer=d(L);constructor(){let e=se(z,{environmentInjector:d(ee)});d(l).onDestroy(()=>e.destroy())}announce(e){this.liveAnnouncer.announce(e,`polite`)}static ctorParameters=()=>[]},B=h([te({providedIn:`root`})],B)})))()}var V,H,U;function init_button_component$1(){return(init_button_component$1=e((()=>{p(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvdWkvdWkvcHJvamVjdHMvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1s(),init_button_component(),f(),b(),y(),init_announcer_service(),init_button_size(),init_button_variant(),V=300,H=500,U=class ButtonComponent{variant=_(A,{transform:buttonVariantAttribute});size=_(O,{transform:buttonSizeAttribute});loading=_(!1,{transform:ie});loadingLabel=_(`Loading`);spinnerShownAt=u(null);spinnerShown=s(()=>this.spinnerShownAt()!==null);busy=s(()=>this.loading()||this.spinnerShown());announcer=d(B);constructor(){o(e=>{let t=this.loading(),n=this.spinnerShownAt();if(t===(n!==null))return;let r=n===null?V:n+H-Date.now(),i=setTimeout(()=>t?this.showSpinner():this.spinnerShownAt.set(null),r);e(()=>clearTimeout(i))});let e=d(ne).listen(d(r).nativeElement,`click`,e=>{this.busy()&&(e.preventDefault(),e.stopImmediatePropagation())},{capture:!0});d(l).onDestroy(e)}showSpinner(){this.spinnerShownAt.set(Date.now()),this.announcer.announce(this.loadingLabel())}static ctorParameters=()=>[];static propDecorators={variant:[{type:m,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}],size:[{type:m,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}],loading:[{type:m,args:[{isSignal:!0,alias:`loading`,required:!1,transform:void 0}]}],loadingLabel:[{type:m,args:[{isSignal:!0,alias:`loadingLabel`,required:!1,transform:void 0}]}]}},U=h([g({selector:`button[dma-button]`,template:j,imports:[T],providers:[{provide:C,useFactory:()=>d(U).size}],host:{"[attr.data-variant]":`variant()`,"[attr.data-size]":`size()`,"[attr.data-loading]":`busy() ? "" : null`,"[attr.aria-disabled]":`busy() ? "true" : null`},styles:[M]})],U)})))()}var ue=t({Danger:()=>J,Ghost:()=>q,Icons:()=>Z,Loading:()=>Q,Primary:()=>G,Secondary:()=>K,Sizes:()=>X,States:()=>Y,__namedExportsOrder:()=>$,default:()=>W}),W,G,K,q,J,Y,X,Z,Q,$;function init_button_stories(){return(init_button_stories=e((()=>{f(),le(),w(),E(),init_button_size(),init_button_variant(),init_button_component$1(),W={title:`Components/Button`,component:U,decorators:[x({imports:[U,S,v]})],argTypes:{label:{description:'The content of the `button` element. It is the accessible name of the button, so keep it a short verb phrase, such as "Save map".',type:{name:`string`,required:!0},control:`text`,table:{type:{summary:`string`}}},variant:{description:"The variant of the button, which sets its colors. Use `primary` for the one main action in a view, `secondary` for other actions beside it, `ghost` for minor actions that should stay quiet, and `danger` for actions that destroy or remove something.",options:Object.values(k),control:`select`,table:{type:{summary:`ButtonVariant`},defaultValue:{summary:`'${A}'`}}},size:{description:"The size of the button, which sets its height, padding, radius, text style, and icon gap. Its icons take it too. Use `medium` unless the layout around the button calls for a `small` or a `large` one.",options:Object.values(D),control:`select`,table:{type:{summary:`ButtonSize`},defaultValue:{summary:`'${O}'`}}},disabled:{description:"The native `disabled` attribute of the `button` element. A disabled button leaves the tab order and ignores clicks.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{description:"Whether the button is busy with the action it started, such as saving a map. A loading button blocks clicks but keeps focus. After 300ms, it shows a spinning `circle-notch` in place of its label and icons for at least 500ms.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loadingLabel:{description:`The word that screen readers announce once the spinner shows, such as "Saving".`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Loading'`}}},leadingIcon:{description:"Shows an icon before the label, like the `Leading icon` switch of the Figma component. In code, put an icon component before the label, such as `dma-icon-plus`. An icon that sets no `size` takes the size of the button.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},trailingIcon:{description:"Shows an icon after the label, like the `Trailing icon` switch of the Figma component. In code, put an icon component after the label, such as `dma-icon-chevron-down`. An icon that sets no `size` takes the size of the button.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},render:e=>({props:e,template:`
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
        `})},G={args:{label:`Save map`,variant:`primary`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`,leadingIcon:!1,trailingIcon:!1}},K={args:{label:`Export map`,variant:`secondary`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`,leadingIcon:!1,trailingIcon:!1}},q={args:{label:`Rename map`,variant:`ghost`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`,leadingIcon:!1,trailingIcon:!1}},J={args:{label:`Delete map`,variant:`danger`,size:`medium`,disabled:!1,loading:!1,loadingLabel:`Loading`,leadingIcon:!1,trailingIcon:!1}},Y={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); gap: var(--dma-spacing-16)">
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
        </div>`})},X={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; gap: var(--dma-spacing-16)">
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
        </div>`})},Z={parameters:{controls:{disable:!0}},render:()=>({template:`<div style="display: grid; grid-template-columns: repeat(3, max-content); align-items: center; justify-items: start; gap: var(--dma-spacing-16)">
            <button dma-button type="button" variant="primary" size="small"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="small">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="small"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="primary" size="medium"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="medium">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="medium"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="primary" size="large"><dma-icon-plus />Add map</button>
            <button dma-button type="button" variant="secondary" size="large">Export map<dma-icon-chevron-down /></button>
            <button dma-button type="button" variant="ghost" size="large"><dma-icon-plus />Add layer<dma-icon-chevron-down /></button>
        </div>`})},Q={parameters:{controls:{disable:!0}},render:()=>({props:{slow:u(!1),fast:u(!1),run:(e,t)=>{e.set(!0),setTimeout(()=>e.set(!1),t)}},template:`<div style="display: flex; gap: var(--dma-spacing-16)">
            <button dma-button type="button" [loading]="slow()" loadingLabel="Saving" (click)="run(slow, 2000)">
                Save map in 2s
            </button>
            <button dma-button type="button" variant="secondary" [loading]="fast()" (click)="run(fast, 200)">
                Save map in 0.2s
            </button>
        </div>`})},$=[`Primary`,`Secondary`,`Ghost`,`Danger`,`States`,`Sizes`,`Icons`,`Loading`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Every variant in its Default, its Disabled, and its Loading state. Hover, Pressed, and Focus show when you point
at, hold, or tab to a button. A loading button shows its spinner after 300ms.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Every variant in the Small, the Medium, and the Large size.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Every size with a leading icon, a trailing icon, and both. The icons take the size of the button, and the gap
between the label and an icon grows with the size.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Click a button to start an action that takes as long as its label says. The slow one shows its spinner after
300ms. The fast one ends within 300ms, so it shows none.`,...Q.parameters?.docs?.description}}}})))()}export{Y as a,X as i,Q as n,ue as o,G as r,init_button_stories as s,Z as t};