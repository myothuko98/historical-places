import{r as a,j as f,R as ft,u as L,P,d as vt,a as mt,_ as T,b as Ne,c as ht,S as gt,e as W,f as pt,B as yt}from"./index-Cux0e4TS.js";function O(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Et(e,t){const n=a.createContext(t),r=i=>{const{children:c,...s}=i,d=a.useMemo(()=>s,Object.values(s));return f.jsx(n.Provider,{value:d,children:c})};r.displayName=e+"Provider";function o(i){const c=a.useContext(n);if(c)return c;if(t!==void 0)return t;throw new Error(`\`${i}\` must be used within \`${e}\``)}return[r,o]}function bt(e,t=[]){let n=[];function r(i,c){const s=a.createContext(c),d=n.length;n=[...n,c];const l=m=>{var y;const{scope:h,children:p,...w}=m,u=((y=h==null?void 0:h[e])==null?void 0:y[d])||s,g=a.useMemo(()=>w,Object.values(w));return f.jsx(u.Provider,{value:g,children:p})};l.displayName=i+"Provider";function v(m,h){var u;const p=((u=h==null?void 0:h[e])==null?void 0:u[d])||s,w=a.useContext(p);if(w)return w;if(c!==void 0)return c;throw new Error(`\`${m}\` must be used within \`${i}\``)}return[l,v]}const o=()=>{const i=n.map(c=>a.createContext(c));return function(s){const d=(s==null?void 0:s[e])||i;return a.useMemo(()=>({[`__scope${e}`]:{...s,[e]:d}}),[s,d])}};return o.scopeName=e,[r,Ct(o,...t)]}function Ct(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const c=r.reduce((s,{useScope:d,scopeName:l})=>{const m=d(i)[`__scope${l}`];return{...s,...m}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}var Y=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},wt=ft.useId||(()=>{}),St=0;function J(e){const[t,n]=a.useState(wt());return Y(()=>{e||n(r=>r??String(St++))},[e]),e||(t?`radix-${t}`:"")}function M(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function xt({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=Nt({defaultProp:t,onChange:n}),i=e!==void 0,c=i?e:r,s=M(n),d=a.useCallback(l=>{if(i){const m=typeof l=="function"?l(e):l;m!==e&&s(m)}else o(l)},[i,e,o,s]);return[c,d]}function Nt({defaultProp:e,onChange:t}){const n=a.useState(e),[r]=n,o=a.useRef(r),i=M(t);return a.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}function Rt(e,t=globalThis==null?void 0:globalThis.document){const n=M(e);a.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Dt="DismissableLayer",se="dismissableLayer.update",Pt="dismissableLayer.pointerDownOutside",At="dismissableLayer.focusOutside",ve,Re=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),De=a.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:c,onDismiss:s,...d}=e,l=a.useContext(Re),[v,m]=a.useState(null),h=(v==null?void 0:v.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=a.useState({}),w=L(t,E=>m(E)),u=Array.from(l.layers),[g]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),y=u.indexOf(g),x=v?u.indexOf(v):-1,b=l.layersWithOutsidePointerEventsDisabled.size>0,C=x>=y,S=Mt(E=>{const D=E.target,B=[...l.branches].some(Q=>Q.contains(D));!C||B||(o==null||o(E),c==null||c(E),E.defaultPrevented||s==null||s())},h),R=It(E=>{const D=E.target;[...l.branches].some(Q=>Q.contains(D))||(i==null||i(E),c==null||c(E),E.defaultPrevented||s==null||s())},h);return Rt(E=>{x===l.layers.size-1&&(r==null||r(E),!E.defaultPrevented&&s&&(E.preventDefault(),s()))},h),a.useEffect(()=>{if(v)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(ve=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(v)),l.layers.add(v),me(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=ve)}},[v,h,n,l]),a.useEffect(()=>()=>{v&&(l.layers.delete(v),l.layersWithOutsidePointerEventsDisabled.delete(v),me())},[v,l]),a.useEffect(()=>{const E=()=>p({});return document.addEventListener(se,E),()=>document.removeEventListener(se,E)},[]),f.jsx(P.div,{...d,ref:w,style:{pointerEvents:b?C?"auto":"none":void 0,...e.style},onFocusCapture:O(e.onFocusCapture,R.onFocusCapture),onBlurCapture:O(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:O(e.onPointerDownCapture,S.onPointerDownCapture)})});De.displayName=Dt;var Tt="DismissableLayerBranch",Ot=a.forwardRef((e,t)=>{const n=a.useContext(Re),r=a.useRef(null),o=L(t,r);return a.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),f.jsx(P.div,{...e,ref:o})});Ot.displayName=Tt;function Mt(e,t=globalThis==null?void 0:globalThis.document){const n=M(e),r=a.useRef(!1),o=a.useRef(()=>{});return a.useEffect(()=>{const i=s=>{if(s.target&&!r.current){let d=function(){Pe(Pt,n,l,{discrete:!0})};const l={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=d,t.addEventListener("click",o.current,{once:!0})):d()}else t.removeEventListener("click",o.current);r.current=!1},c=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(c),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function It(e,t=globalThis==null?void 0:globalThis.document){const n=M(e),r=a.useRef(!1);return a.useEffect(()=>{const o=i=>{i.target&&!r.current&&Pe(At,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function me(){const e=new CustomEvent(se);document.dispatchEvent(e)}function Pe(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?vt(o,i):o.dispatchEvent(i)}var ee="focusScope.autoFocusOnMount",te="focusScope.autoFocusOnUnmount",he={bubbles:!1,cancelable:!0},Lt="FocusScope",Ae=a.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...c}=e,[s,d]=a.useState(null),l=M(o),v=M(i),m=a.useRef(null),h=L(t,u=>d(u)),p=a.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.useEffect(()=>{if(r){let u=function(b){if(p.paused||!s)return;const C=b.target;s.contains(C)?m.current=C:A(m.current,{select:!0})},g=function(b){if(p.paused||!s)return;const C=b.relatedTarget;C!==null&&(s.contains(C)||A(m.current,{select:!0}))},y=function(b){if(document.activeElement===document.body)for(const S of b)S.removedNodes.length>0&&A(s)};document.addEventListener("focusin",u),document.addEventListener("focusout",g);const x=new MutationObserver(y);return s&&x.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",g),x.disconnect()}}},[r,s,p.paused]),a.useEffect(()=>{if(s){pe.add(p);const u=document.activeElement;if(!s.contains(u)){const y=new CustomEvent(ee,he);s.addEventListener(ee,l),s.dispatchEvent(y),y.defaultPrevented||(kt(Bt(Te(s)),{select:!0}),document.activeElement===u&&A(s))}return()=>{s.removeEventListener(ee,l),setTimeout(()=>{const y=new CustomEvent(te,he);s.addEventListener(te,v),s.dispatchEvent(y),y.defaultPrevented||A(u??document.body,{select:!0}),s.removeEventListener(te,v),pe.remove(p)},0)}}},[s,l,v,p]);const w=a.useCallback(u=>{if(!n&&!r||p.paused)return;const g=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,y=document.activeElement;if(g&&y){const x=u.currentTarget,[b,C]=_t(x);b&&C?!u.shiftKey&&y===C?(u.preventDefault(),n&&A(b,{select:!0})):u.shiftKey&&y===b&&(u.preventDefault(),n&&A(C,{select:!0})):y===x&&u.preventDefault()}},[n,r,p.paused]);return f.jsx(P.div,{tabIndex:-1,...c,ref:h,onKeyDown:w})});Ae.displayName=Lt;function kt(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(A(r,{select:t}),document.activeElement!==n)return}function _t(e){const t=Te(e),n=ge(t,e),r=ge(t.reverse(),e);return[n,r]}function Te(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ge(e,t){for(const n of e)if(!Ft(n,{upTo:t}))return n}function Ft(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function jt(e){return e instanceof HTMLInputElement&&"select"in e}function A(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&jt(e)&&t&&e.select()}}var pe=Wt();function Wt(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ye(e,t),e.unshift(t)},remove(t){var n;e=ye(e,t),(n=e[0])==null||n.resume()}}}function ye(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Bt(e){return e.filter(t=>t.tagName!=="A")}var Ut="Portal",Oe=a.forwardRef((e,t)=>{var s;const{container:n,...r}=e,[o,i]=a.useState(!1);Y(()=>i(!0),[]);const c=n||o&&((s=globalThis==null?void 0:globalThis.document)==null?void 0:s.body);return c?mt.createPortal(f.jsx(P.div,{...r,ref:t}),c):null});Oe.displayName=Ut;function $t(e,t){return a.useReducer((n,r)=>t[n][r]??n,e)}var Z=e=>{const{present:t,children:n}=e,r=Kt(t),o=typeof n=="function"?n({present:r.isPresent}):a.Children.only(n),i=L(r.ref,Vt(o));return typeof n=="function"||r.isPresent?a.cloneElement(o,{ref:i}):null};Z.displayName="Presence";function Kt(e){const[t,n]=a.useState(),r=a.useRef({}),o=a.useRef(e),i=a.useRef("none"),c=e?"mounted":"unmounted",[s,d]=$t(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const l=U(r.current);i.current=s==="mounted"?l:"none"},[s]),Y(()=>{const l=r.current,v=o.current;if(v!==e){const h=i.current,p=U(l);e?d("MOUNT"):p==="none"||(l==null?void 0:l.display)==="none"?d("UNMOUNT"):d(v&&h!==p?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,d]),Y(()=>{if(t){let l;const v=t.ownerDocument.defaultView??window,m=p=>{const u=U(r.current).includes(p.animationName);if(p.target===t&&u&&(d("ANIMATION_END"),!o.current)){const g=t.style.animationFillMode;t.style.animationFillMode="forwards",l=v.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=g)})}},h=p=>{p.target===t&&(i.current=U(r.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{v.clearTimeout(l),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:a.useCallback(l=>{l&&(r.current=getComputedStyle(l)),n(l)},[])}}function U(e){return(e==null?void 0:e.animationName)||"none"}function Vt(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var ne=0;function Xt(){a.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Ee()),document.body.insertAdjacentElement("beforeend",e[1]??Ee()),ne++,()=>{ne===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),ne--}},[])}function Ee(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var z="right-scroll-bar-position",G="width-before-scroll-bar",zt="with-scroll-bars-hidden",Gt="--removed-body-scroll-bar-size";function re(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Yt(e,t){var n=a.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Ht=typeof window<"u"?a.useLayoutEffect:a.useEffect,be=new WeakMap;function Zt(e,t){var n=Yt(null,function(r){return e.forEach(function(o){return re(o,r)})});return Ht(function(){var r=be.get(n);if(r){var o=new Set(r),i=new Set(e),c=n.current;o.forEach(function(s){i.has(s)||re(s,null)}),i.forEach(function(s){o.has(s)||re(s,c)})}be.set(n,e)},[e]),n}function qt(e){return e}function Qt(e,t){t===void 0&&(t=qt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var c=t(i,r);return n.push(c),function(){n=n.filter(function(s){return s!==c})}},assignSyncMedium:function(i){for(r=!0;n.length;){var c=n;n=[],c.forEach(i)}n={push:function(s){return i(s)},filter:function(){return n}}},assignMedium:function(i){r=!0;var c=[];if(n.length){var s=n;n=[],s.forEach(i),c=n}var d=function(){var v=c;c=[],v.forEach(i)},l=function(){return Promise.resolve().then(d)};l(),n={push:function(v){c.push(v),l()},filter:function(v){return c=c.filter(v),n}}}};return o}function Jt(e){e===void 0&&(e={});var t=Qt(null);return t.options=T({async:!0,ssr:!1},e),t}var Me=function(e){var t=e.sideCar,n=Ne(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return a.createElement(r,T({},n))};Me.isSideCarExport=!0;function en(e,t){return e.useMedium(t),Me}var Ie=Jt(),oe=function(){},q=a.forwardRef(function(e,t){var n=a.useRef(null),r=a.useState({onScrollCapture:oe,onWheelCapture:oe,onTouchMoveCapture:oe}),o=r[0],i=r[1],c=e.forwardProps,s=e.children,d=e.className,l=e.removeScrollBar,v=e.enabled,m=e.shards,h=e.sideCar,p=e.noIsolation,w=e.inert,u=e.allowPinchZoom,g=e.as,y=g===void 0?"div":g,x=e.gapMode,b=Ne(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=h,S=Zt([n,t]),R=T(T({},b),o);return a.createElement(a.Fragment,null,v&&a.createElement(C,{sideCar:Ie,removeScrollBar:l,shards:m,noIsolation:p,inert:w,setCallbacks:i,allowPinchZoom:!!u,lockRef:n,gapMode:x}),c?a.cloneElement(a.Children.only(s),T(T({},R),{ref:S})):a.createElement(y,T({},R,{className:d,ref:S}),s))});q.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};q.classNames={fullWidth:G,zeroRight:z};var tn=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function nn(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=tn();return t&&e.setAttribute("nonce",t),e}function rn(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function on(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var an=function(){var e=0,t=null;return{add:function(n){e==0&&(t=nn())&&(rn(t,n),on(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},sn=function(){var e=an();return function(t,n){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Le=function(){var e=sn(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},cn={left:0,top:0,right:0,gap:0},ae=function(e){return parseInt(e||"",10)||0},un=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ae(n),ae(r),ae(o)]},ln=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return cn;var t=un(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},dn=Le(),j="data-scroll-locked",fn=function(e,t,n,r){var o=e.left,i=e.top,c=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(zt,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(j,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(z,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(G,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(z," .").concat(z,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(G," .").concat(G,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(j,`] {
    `).concat(Gt,": ").concat(s,`px;
  }
`)},Ce=function(){var e=parseInt(document.body.getAttribute(j)||"0",10);return isFinite(e)?e:0},vn=function(){a.useEffect(function(){return document.body.setAttribute(j,(Ce()+1).toString()),function(){var e=Ce()-1;e<=0?document.body.removeAttribute(j):document.body.setAttribute(j,e.toString())}},[])},mn=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;vn();var i=a.useMemo(function(){return ln(o)},[o]);return a.createElement(dn,{styles:fn(i,!t,o,n?"":"!important")})},ce=!1;if(typeof window<"u")try{var $=Object.defineProperty({},"passive",{get:function(){return ce=!0,!0}});window.addEventListener("test",$,$),window.removeEventListener("test",$,$)}catch{ce=!1}var k=ce?{passive:!1}:!1,hn=function(e){return e.tagName==="TEXTAREA"},ke=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!hn(e)&&n[t]==="visible")},gn=function(e){return ke(e,"overflowY")},pn=function(e){return ke(e,"overflowX")},we=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=_e(e,r);if(o){var i=Fe(e,r),c=i[1],s=i[2];if(c>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},yn=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},En=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},_e=function(e,t){return e==="v"?gn(t):pn(t)},Fe=function(e,t){return e==="v"?yn(t):En(t)},bn=function(e,t){return e==="h"&&t==="rtl"?-1:1},Cn=function(e,t,n,r,o){var i=bn(e,window.getComputedStyle(t).direction),c=i*r,s=n.target,d=t.contains(s),l=!1,v=c>0,m=0,h=0;do{var p=Fe(e,s),w=p[0],u=p[1],g=p[2],y=u-g-i*w;(w||y)&&_e(e,s)&&(m+=y,h+=w),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!d&&s!==document.body||d&&(t.contains(s)||t===s));return(v&&(Math.abs(m)<1||!o)||!v&&(Math.abs(h)<1||!o))&&(l=!0),l},K=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Se=function(e){return[e.deltaX,e.deltaY]},xe=function(e){return e&&"current"in e?e.current:e},wn=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Sn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},xn=0,_=[];function Nn(e){var t=a.useRef([]),n=a.useRef([0,0]),r=a.useRef(),o=a.useState(xn++)[0],i=a.useState(Le)[0],c=a.useRef(e);a.useEffect(function(){c.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var u=ht([e.lockRef.current],(e.shards||[]).map(xe),!0).filter(Boolean);return u.forEach(function(g){return g.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),u.forEach(function(g){return g.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=a.useCallback(function(u,g){if("touches"in u&&u.touches.length===2||u.type==="wheel"&&u.ctrlKey)return!c.current.allowPinchZoom;var y=K(u),x=n.current,b="deltaX"in u?u.deltaX:x[0]-y[0],C="deltaY"in u?u.deltaY:x[1]-y[1],S,R=u.target,E=Math.abs(b)>Math.abs(C)?"h":"v";if("touches"in u&&E==="h"&&R.type==="range")return!1;var D=we(E,R);if(!D)return!0;if(D?S=E:(S=E==="v"?"h":"v",D=we(E,R)),!D)return!1;if(!r.current&&"changedTouches"in u&&(b||C)&&(r.current=S),!S)return!0;var B=r.current||S;return Cn(B,g,u,B==="h"?b:C,!0)},[]),d=a.useCallback(function(u){var g=u;if(!(!_.length||_[_.length-1]!==i)){var y="deltaY"in g?Se(g):K(g),x=t.current.filter(function(S){return S.name===g.type&&(S.target===g.target||g.target===S.shadowParent)&&wn(S.delta,y)})[0];if(x&&x.should){g.cancelable&&g.preventDefault();return}if(!x){var b=(c.current.shards||[]).map(xe).filter(Boolean).filter(function(S){return S.contains(g.target)}),C=b.length>0?s(g,b[0]):!c.current.noIsolation;C&&g.cancelable&&g.preventDefault()}}},[]),l=a.useCallback(function(u,g,y,x){var b={name:u,delta:g,target:y,should:x,shadowParent:Rn(y)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(C){return C!==b})},1)},[]),v=a.useCallback(function(u){n.current=K(u),r.current=void 0},[]),m=a.useCallback(function(u){l(u.type,Se(u),u.target,s(u,e.lockRef.current))},[]),h=a.useCallback(function(u){l(u.type,K(u),u.target,s(u,e.lockRef.current))},[]);a.useEffect(function(){return _.push(i),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:h}),document.addEventListener("wheel",d,k),document.addEventListener("touchmove",d,k),document.addEventListener("touchstart",v,k),function(){_=_.filter(function(u){return u!==i}),document.removeEventListener("wheel",d,k),document.removeEventListener("touchmove",d,k),document.removeEventListener("touchstart",v,k)}},[]);var p=e.removeScrollBar,w=e.inert;return a.createElement(a.Fragment,null,w?a.createElement(i,{styles:Sn(o)}):null,p?a.createElement(mn,{gapMode:e.gapMode}):null)}function Rn(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Dn=en(Ie,Nn);var je=a.forwardRef(function(e,t){return a.createElement(q,T({},e,{ref:t,sideCar:Dn}))});je.classNames=q.classNames;var Pn=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},F=new WeakMap,V=new WeakMap,X={},ie=0,We=function(e){return e&&(e.host||We(e.parentNode))},An=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=We(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Tn=function(e,t,n,r){var o=An(t,Array.isArray(e)?e:[e]);X[n]||(X[n]=new WeakMap);var i=X[n],c=[],s=new Set,d=new Set(o),l=function(m){!m||s.has(m)||(s.add(m),l(m.parentNode))};o.forEach(l);var v=function(m){!m||d.has(m)||Array.prototype.forEach.call(m.children,function(h){if(s.has(h))v(h);else try{var p=h.getAttribute(r),w=p!==null&&p!=="false",u=(F.get(h)||0)+1,g=(i.get(h)||0)+1;F.set(h,u),i.set(h,g),c.push(h),u===1&&w&&V.set(h,!0),g===1&&h.setAttribute(n,"true"),w||h.setAttribute(r,"true")}catch(y){console.error("aria-hidden: cannot operate on ",h,y)}})};return v(t),s.clear(),ie++,function(){c.forEach(function(m){var h=F.get(m)-1,p=i.get(m)-1;F.set(m,h),i.set(m,p),h||(V.has(m)||m.removeAttribute(r),V.delete(m)),p||m.removeAttribute(n)}),ie--,ie||(F=new WeakMap,F=new WeakMap,V=new WeakMap,X={})}},On=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Pn(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Tn(r,o,n,"aria-hidden")):function(){return null}},ue="Dialog",[Be,Jn]=bt(ue),[Mn,N]=Be(ue),Ue=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:c=!0}=e,s=a.useRef(null),d=a.useRef(null),[l=!1,v]=xt({prop:r,defaultProp:o,onChange:i});return f.jsx(Mn,{scope:t,triggerRef:s,contentRef:d,contentId:J(),titleId:J(),descriptionId:J(),open:l,onOpenChange:v,onOpenToggle:a.useCallback(()=>v(m=>!m),[v]),modal:c,children:n})};Ue.displayName=ue;var $e="DialogTrigger",In=a.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=N($e,n),i=L(t,o.triggerRef);return f.jsx(P.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":fe(o.open),...r,ref:i,onClick:O(e.onClick,o.onOpenToggle)})});In.displayName=$e;var le="DialogPortal",[Ln,Ke]=Be(le,{forceMount:void 0}),Ve=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=N(le,t);return f.jsx(Ln,{scope:t,forceMount:n,children:a.Children.map(r,c=>f.jsx(Z,{present:n||i.open,children:f.jsx(Oe,{asChild:!0,container:o,children:c})}))})};Ve.displayName=le;var H="DialogOverlay",Xe=a.forwardRef((e,t)=>{const n=Ke(H,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=N(H,e.__scopeDialog);return i.modal?f.jsx(Z,{present:r||i.open,children:f.jsx(kn,{...o,ref:t})}):null});Xe.displayName=H;var kn=a.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=N(H,n);return f.jsx(je,{as:gt,allowPinchZoom:!0,shards:[o.contentRef],children:f.jsx(P.div,{"data-state":fe(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),I="DialogContent",ze=a.forwardRef((e,t)=>{const n=Ke(I,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=N(I,e.__scopeDialog);return f.jsx(Z,{present:r||i.open,children:i.modal?f.jsx(_n,{...o,ref:t}):f.jsx(Fn,{...o,ref:t})})});ze.displayName=I;var _n=a.forwardRef((e,t)=>{const n=N(I,e.__scopeDialog),r=a.useRef(null),o=L(t,n.contentRef,r);return a.useEffect(()=>{const i=r.current;if(i)return On(i)},[]),f.jsx(Ge,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:O(e.onCloseAutoFocus,i=>{var c;i.preventDefault(),(c=n.triggerRef.current)==null||c.focus()}),onPointerDownOutside:O(e.onPointerDownOutside,i=>{const c=i.detail.originalEvent,s=c.button===0&&c.ctrlKey===!0;(c.button===2||s)&&i.preventDefault()}),onFocusOutside:O(e.onFocusOutside,i=>i.preventDefault())})}),Fn=a.forwardRef((e,t)=>{const n=N(I,e.__scopeDialog),r=a.useRef(!1),o=a.useRef(!1);return f.jsx(Ge,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var c,s;(c=e.onCloseAutoFocus)==null||c.call(e,i),i.defaultPrevented||(r.current||(s=n.triggerRef.current)==null||s.focus(),i.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:i=>{var d,l;(d=e.onInteractOutside)==null||d.call(e,i),i.defaultPrevented||(r.current=!0,i.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const c=i.target;((l=n.triggerRef.current)==null?void 0:l.contains(c))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&o.current&&i.preventDefault()}})}),Ge=a.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...c}=e,s=N(I,n),d=a.useRef(null),l=L(t,d);return Xt(),f.jsxs(f.Fragment,{children:[f.jsx(Ae,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i,children:f.jsx(De,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":fe(s.open),...c,ref:l,onDismiss:()=>s.onOpenChange(!1)})}),f.jsxs(f.Fragment,{children:[f.jsx(jn,{titleId:s.titleId}),f.jsx(Bn,{contentRef:d,descriptionId:s.descriptionId})]})]})}),de="DialogTitle",Ye=a.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=N(de,n);return f.jsx(P.h2,{id:o.titleId,...r,ref:t})});Ye.displayName=de;var He="DialogDescription",Ze=a.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=N(He,n);return f.jsx(P.p,{id:o.descriptionId,...r,ref:t})});Ze.displayName=He;var qe="DialogClose",Qe=a.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=N(qe,n);return f.jsx(P.button,{type:"button",...r,ref:t,onClick:O(e.onClick,()=>o.onOpenChange(!1))})});Qe.displayName=qe;function fe(e){return e?"open":"closed"}var Je="DialogTitleWarning",[er,et]=Et(Je,{contentName:I,titleName:de,docsSlug:"dialog"}),jn=({titleId:e})=>{const t=et(Je),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return a.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},Wn="DialogDescriptionWarning",Bn=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${et(Wn).contentName}}.`;return a.useEffect(()=>{var i;const o=(i=e.current)==null?void 0:i.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},Un=Ue,$n=Ve,tt=Xe,nt=ze,rt=Ye,ot=Ze,Kn=Qe;/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),at=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=a.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:c,...s},d)=>a.createElement("svg",{ref:d,...Xn,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:at("lucide",o),...s},[...c.map(([l,v])=>a.createElement(l,v)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=(e,t)=>{const n=a.forwardRef(({className:r,...o},i)=>a.createElement(zn,{ref:i,iconNode:t,className:at(`lucide-${Vn(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=Gn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Hn=Un,Zn=$n,it=a.forwardRef(({className:e,...t},n)=>f.jsx(tt,{ref:n,className:W("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));it.displayName=tt.displayName;const st=a.forwardRef(({className:e,children:t,...n},r)=>f.jsxs(Zn,{children:[f.jsx(it,{}),f.jsxs(nt,{ref:r,className:W("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,f.jsxs(Kn,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none bg-transparent data-[state=open]:text-muted-foreground",children:[f.jsx(Yn,{className:"h-4 w-4 "}),f.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));st.displayName=nt.displayName;const ct=({className:e,...t})=>f.jsx("div",{className:W("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});ct.displayName="DialogHeader";const ut=({className:e,...t})=>f.jsx("div",{className:W("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});ut.displayName="DialogFooter";const lt=a.forwardRef(({className:e,...t},n)=>f.jsx(rt,{ref:n,className:W("text-lg font-semibold leading-none tracking-tight",e),...t}));lt.displayName=rt.displayName;const dt=a.forwardRef(({className:e,...t},n)=>f.jsx(ot,{ref:n,className:W("text-sm text-muted-foreground",e),...t}));dt.displayName=ot.displayName;const qn=({isOpen:e,onClose:t,place:n})=>n?f.jsx(Hn,{open:e,onOpenChange:t,children:f.jsxs(st,{children:[f.jsxs(ct,{children:[f.jsx(lt,{children:n.name}),f.jsx(dt,{children:n.description})]}),f.jsx("div",{className:"my-4",children:f.jsx("img",{src:n.image,alt:n.name,className:"w-full h-48 object-cover rounded-lg"})}),f.jsx(ut,{children:f.jsx(yt,{variant:"outline",onClick:t,children:"Close"})})]})}):null,tr=pt.memo(qn);export{tr as default};
