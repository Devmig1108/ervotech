import{m as V,j,a as A,d as H,r as z,h as An,F as ma}from"./app-b2555652.js";import{P,p as _n}from"./index-cbb4e61e.js";function Ht(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ht(Object(n),!0).forEach(function(a){Y(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ht(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Be(e){"@babel/helpers - typeof";return Be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Be(e)}function ha(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wt(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function va(e,t,n){return t&&Wt(e.prototype,t),n&&Wt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function St(e,t){return ga(e)||ya(e,t)||Cn(e,t)||xa()}function Ie(e){return pa(e)||ba(e)||Cn(e)||wa()}function pa(e){if(Array.isArray(e))return st(e)}function ga(e){if(Array.isArray(e))return e}function ba(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ya(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Cn(e,t){if(e){if(typeof e=="string")return st(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return st(e,t)}}function st(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function wa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xt=function(){},At={},Pn={},In=null,Tn={mark:Xt,measure:Xt};try{typeof window<"u"&&(At=window),typeof document<"u"&&(Pn=document),typeof MutationObserver<"u"&&(In=MutationObserver),typeof performance<"u"&&(Tn=performance)}catch{}var ka=At.navigator||{},$t=ka.userAgent,Ut=$t===void 0?"":$t,te=At,M=Pn,Bt=In,Me=Tn;te.document;var Z=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",Nn=~Ut.indexOf("MSIE")||~Ut.indexOf("Trident/"),Re,Le,Fe,ze,Ye,Q="___FONT_AWESOME___",lt=16,Mn="fa",Rn="svg-inline--fa",se="data-fa-i2svg",ft="data-fa-pseudo-element",Ea="data-fa-pseudo-element-pending",_t="data-prefix",Ct="data-icon",Vt="fontawesome-i2svg",Oa="async",Sa=["HTML","HEAD","STYLE","SCRIPT"],Ln=function(){try{return!0}catch{return!1}}(),N="classic",L="sharp",Pt=[N,L];function Te(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[N]}})}var Oe=Te((Re={},Y(Re,N,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Y(Re,L,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Re)),Se=Te((Le={},Y(Le,N,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Y(Le,L,{solid:"fass",regular:"fasr",light:"fasl"}),Le)),Ae=Te((Fe={},Y(Fe,N,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Y(Fe,L,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Fe)),Aa=Te((ze={},Y(ze,N,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Y(ze,L,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ze)),_a=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Fn="fa-layers-text",Ca=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Pa=Te((Ye={},Y(Ye,N,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Y(Ye,L,{900:"fass",400:"fasr",300:"fasl"}),Ye)),zn=[1,2,3,4,5,6,7,8,9,10],Ia=zn.concat([11,12,13,14,15,16,17,18,19,20]),Ta=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],re={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_e=new Set;Object.keys(Se[N]).map(_e.add.bind(_e));Object.keys(Se[L]).map(_e.add.bind(_e));var Na=[].concat(Pt,Ie(_e),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",re.GROUP,re.SWAP_OPACITY,re.PRIMARY,re.SECONDARY]).concat(zn.map(function(e){return"".concat(e,"x")})).concat(Ia.map(function(e){return"w-".concat(e)})),xe=te.FontAwesomeConfig||{};function Ma(e){var t=M.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ra(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(M&&typeof M.querySelector=="function"){var La=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];La.forEach(function(e){var t=St(e,2),n=t[0],a=t[1],r=Ra(Ma(n));r!=null&&(xe[a]=r)})}var Yn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Mn,replacementClass:Rn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xe.familyPrefix&&(xe.cssPrefix=xe.familyPrefix);var ve=w(w({},Yn),xe);ve.autoReplaceSvg||(ve.observeMutations=!1);var x={};Object.keys(Yn).forEach(function(e){Object.defineProperty(x,e,{enumerable:!0,set:function(n){ve[e]=n,ke.forEach(function(a){return a(x)})},get:function(){return ve[e]}})});Object.defineProperty(x,"familyPrefix",{enumerable:!0,set:function(t){ve.cssPrefix=t,ke.forEach(function(n){return n(x)})},get:function(){return ve.cssPrefix}});te.FontAwesomeConfig=x;var ke=[];function Fa(e){return ke.push(e),function(){ke.splice(ke.indexOf(e),1)}}var K=lt,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function za(e){if(!(!e||!Z)){var t=M.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=M.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return M.head.insertBefore(t,a),e}}var Ya="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ce(){for(var e=12,t="";e-- >0;)t+=Ya[Math.random()*62|0];return t}function ge(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function It(e){return e.classList?ge(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function jn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ja(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(jn(e[n]),'" ')},"").trim()}function Ke(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Tt(e){return e.size!==B.size||e.x!==B.x||e.y!==B.y||e.rotate!==B.rotate||e.flipX||e.flipY}function Da(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function Ha(e){var t=e.transform,n=e.width,a=n===void 0?lt:n,r=e.height,i=r===void 0?lt:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Nn?l+="translate(".concat(t.x/K-a/2,"em, ").concat(t.y/K-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/K,"em), calc(-50% + ").concat(t.y/K,"em)) "):l+="translate(".concat(t.x/K,"em, ").concat(t.y/K,"em) "),l+="scale(".concat(t.size/K*(t.flipX?-1:1),", ").concat(t.size/K*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Wa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Dn(){var e=Mn,t=Rn,n=x.cssPrefix,a=x.replacementClass,r=Wa;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Qt=!1;function nt(){x.autoAddCss&&!Qt&&(za(Dn()),Qt=!0)}var Xa={mixout:function(){return{dom:{css:Dn,insertCss:nt}}},hooks:function(){return{beforeDOMElementCreation:function(){nt()},beforeI2svg:function(){nt()}}}},q=te||{};q[Q]||(q[Q]={});q[Q].styles||(q[Q].styles={});q[Q].hooks||(q[Q].hooks={});q[Q].shims||(q[Q].shims=[]);var X=q[Q],Hn=[],$a=function e(){M.removeEventListener("DOMContentLoaded",e),Ve=1,Hn.map(function(t){return t()})},Ve=!1;Z&&(Ve=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),Ve||M.addEventListener("DOMContentLoaded",$a));function Ua(e){Z&&(Ve?setTimeout(e,0):Hn.push(e))}function Ne(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?jn(e):"<".concat(t," ").concat(ja(a),">").concat(i.map(Ne).join(""),"</").concat(t,">")}function qt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ba=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},at=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Ba(n,r):n,l,f,c;for(a===void 0?(l=1,c=t[i[0]]):(l=0,c=a);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Va(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function ut(e){var t=Va(e);return t.length===1?t[0].toString(16):null}function Qa(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Gt(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function ct(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Gt(t);typeof X.hooks.addPack=="function"&&!r?X.hooks.addPack(e,Gt(t)):X.styles[e]=w(w({},X.styles[e]||{}),i),e==="fas"&&ct("fa",t)}var je,De,He,ue=X.styles,qa=X.shims,Ga=(je={},Y(je,N,Object.values(Ae[N])),Y(je,L,Object.values(Ae[L])),je),Nt=null,Wn={},Xn={},$n={},Un={},Bn={},Za=(De={},Y(De,N,Object.keys(Oe[N])),Y(De,L,Object.keys(Oe[L])),De);function Ka(e){return~Na.indexOf(e)}function Ja(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Ka(r)?r:null}var Vn=function(){var t=function(i){return at(ue,function(o,s,l){return o[l]=at(s,i,{}),o},{})};Wn=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Xn=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Bn=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in ue||x.autoFetchSvg,a=at(qa,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});$n=a.names,Un=a.unicodes,Nt=Je(x.styleDefault,{family:x.familyDefault})};Fa(function(e){Nt=Je(e.styleDefault,{family:x.familyDefault})});Vn();function Mt(e,t){return(Wn[e]||{})[t]}function er(e,t){return(Xn[e]||{})[t]}function ie(e,t){return(Bn[e]||{})[t]}function Qn(e){return $n[e]||{prefix:null,iconName:null}}function tr(e){var t=Un[e],n=Mt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ne(){return Nt}var Rt=function(){return{prefix:null,iconName:null,rest:[]}};function Je(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?N:n,r=Oe[a][e],i=Se[a][e]||Se[a][r],o=e in X.styles?e:null;return i||o||null}var Zt=(He={},Y(He,N,Object.keys(Ae[N])),Y(He,L,Object.keys(Ae[L])),He);function et(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},Y(t,N,"".concat(x.cssPrefix,"-").concat(N)),Y(t,L,"".concat(x.cssPrefix,"-").concat(L)),t),o=null,s=N;(e.includes(i[N])||e.some(function(f){return Zt[N].includes(f)}))&&(s=N),(e.includes(i[L])||e.some(function(f){return Zt[L].includes(f)}))&&(s=L);var l=e.reduce(function(f,c){var h=Ja(x.cssPrefix,c);if(ue[c]?(c=Ga[s].includes(c)?Aa[s][c]:c,o=c,f.prefix=c):Za[s].indexOf(c)>-1?(o=c,f.prefix=Je(c,{family:s})):h?f.iconName=h:c!==x.replacementClass&&c!==i[N]&&c!==i[L]&&f.rest.push(c),!r&&f.prefix&&f.iconName){var d=o==="fa"?Qn(f.iconName):{},m=ie(f.prefix,f.iconName);d.prefix&&(o=null),f.iconName=d.iconName||m||f.iconName,f.prefix=d.prefix||f.prefix,f.prefix==="far"&&!ue.far&&ue.fas&&!x.autoFetchSvg&&(f.prefix="fas")}return f},Rt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===L&&(ue.fass||x.autoFetchSvg)&&(l.prefix="fass",l.iconName=ie(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ne()||"fas"),l}var nr=function(){function e(){ha(this,e),this.definitions={}}return va(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=w(w({},n.definitions[s]||{}),o[s]),ct(s,o[s]);var l=Ae[N][s];l&&ct(l,o[s]),Vn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(n[s][h]=f)}),n[s][l]=f}),n}}]),e}(),Kt=[],ce={},he={},ar=Object.keys(he);function rr(e,t){var n=t.mixoutsTo;return Kt=e,ce={},Object.keys(he).forEach(function(a){ar.indexOf(a)===-1&&delete he[a]}),Kt.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Be(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){ce[o]||(ce[o]=[]),ce[o].push(i[o])})}a.provides&&a.provides(he)}),n}function dt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=ce[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function le(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=ce[e]||[];r.forEach(function(i){i.apply(null,n)})}function G(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return he[e]?he[e].apply(null,t):void 0}function mt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ne();if(t)return t=ie(n,t)||t,qt(qn.definitions,n,t)||qt(X.styles,n,t)}var qn=new nr,ir=function(){x.autoReplaceSvg=!1,x.observeMutations=!1,le("noAuto")},or={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(le("beforeI2svg",t),G("pseudoElements2svg",t),G("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;x.autoReplaceSvg===!1&&(x.autoReplaceSvg=!0),x.observeMutations=!0,Ua(function(){lr({autoReplaceSvgRoot:n}),le("watch",t)})}},sr={icon:function(t){if(t===null)return null;if(Be(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ie(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=Je(t[0]);return{prefix:a,iconName:ie(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(x.cssPrefix,"-"))>-1||t.match(_a))){var r=et(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||ne(),iconName:ie(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=ne();return{prefix:i,iconName:ie(i,t)||t}}}},W={noAuto:ir,config:x,dom:or,parse:sr,library:qn,findIconDefinition:mt,toHtml:Ne},lr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?M:n;(Object.keys(X.styles).length>0||x.autoFetchSvg)&&Z&&x.autoReplaceSvg&&W.dom.i2svg({node:a})};function tt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Ne(a)})}}),Object.defineProperty(e,"node",{get:function(){if(Z){var a=M.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function fr(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(Tt(o)&&n.found&&!a.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};r.style=Ke(w(w({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ur(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(x.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:w(w({},r),{},{id:o}),children:a}]}]}function Lt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,h=e.extra,d=e.watchable,m=d===void 0?!1:d,g=a.found?a:n,E=g.width,S=g.height,_=r==="fak",k=[x.replacementClass,i?"".concat(x.cssPrefix,"-").concat(i):""].filter(function(C){return h.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(h.classes).join(" "),O={children:[],attributes:w(w({},h.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(S)})},y=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(E/S*16*.0625,"em")}:{};m&&(O.attributes[se]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||Ce())},children:[l]}),delete O.attributes.title);var p=w(w({},O),{},{prefix:r,iconName:i,main:n,mask:a,maskId:f,transform:o,symbol:s,styles:w(w({},y),h.styles)}),u=a.found&&n.found?G("generateAbstractMask",p)||{children:[],attributes:{}}:G("generateAbstractIcon",p)||{children:[],attributes:{}},b=u.children,v=u.attributes;return p.children=b,p.attributes=v,s?ur(p):fr(p)}function Jt(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=w(w(w({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[se]="");var c=w({},o.styles);Tt(r)&&(c.transform=Ha({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var h=Ke(c);h.length>0&&(f.style=h);var d=[];return d.push({tag:"span",attributes:f,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function cr(e){var t=e.content,n=e.title,a=e.extra,r=w(w(w({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Ke(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var rt=X.styles;function ht(e){var t=e[0],n=e[1],a=e.slice(4),r=St(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(x.cssPrefix,"-").concat(re.GROUP)},children:[{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(re.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(re.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var dr={found:!1,width:512,height:512};function mr(e,t){!Ln&&!x.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function vt(e,t){var n=t;return t==="fa"&&x.styleDefault!==null&&(t=ne()),new Promise(function(a,r){if(G("missingIconAbstract"),n==="fa"){var i=Qn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&rt[t]&&rt[t][e]){var o=rt[t][e];return a(ht(o))}mr(e,t),a(w(w({},dr),{},{icon:x.showMissingIcons&&e?G("missingIconAbstract")||{}:{}}))})}var en=function(){},pt=x.measurePerformance&&Me&&Me.mark&&Me.measure?Me:{mark:en,measure:en},ye='FA "6.4.0"',hr=function(t){return pt.mark("".concat(ye," ").concat(t," begins")),function(){return Gn(t)}},Gn=function(t){pt.mark("".concat(ye," ").concat(t," ends")),pt.measure("".concat(ye," ").concat(t),"".concat(ye," ").concat(t," begins"),"".concat(ye," ").concat(t," ends"))},Ft={begin:hr,end:Gn},Xe=function(){};function tn(e){var t=e.getAttribute?e.getAttribute(se):null;return typeof t=="string"}function vr(e){var t=e.getAttribute?e.getAttribute(_t):null,n=e.getAttribute?e.getAttribute(Ct):null;return t&&n}function pr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(x.replacementClass)}function gr(){if(x.autoReplaceSvg===!0)return $e.replace;var e=$e[x.autoReplaceSvg];return e||$e.replace}function br(e){return M.createElementNS("http://www.w3.org/2000/svg",e)}function yr(e){return M.createElement(e)}function Zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?br:yr:n;if(typeof e=="string")return M.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Zn(o,{ceFn:a}))}),r}function wr(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var $e={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Zn(r),n)}),n.getAttribute(se)===null&&x.keepOriginalSource){var a=M.createComment(wr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~It(n).indexOf(x.replacementClass))return $e.replace(t);var r=new RegExp("".concat(x.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===x.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return Ne(s)}).join(`
`);n.setAttribute(se,""),n.innerHTML=o}};function nn(e){e()}function Kn(e,t){var n=typeof t=="function"?t:Xe;if(e.length===0)n();else{var a=nn;x.mutateApproach===Oa&&(a=te.requestAnimationFrame||nn),a(function(){var r=gr(),i=Ft.begin("mutate");e.map(r),i(),n()})}}var zt=!1;function Jn(){zt=!0}function gt(){zt=!1}var Qe=null;function an(e){if(Bt&&x.observeMutations){var t=e.treeCallback,n=t===void 0?Xe:t,a=e.nodeCallback,r=a===void 0?Xe:a,i=e.pseudoElementsCallback,o=i===void 0?Xe:i,s=e.observeMutationsRoot,l=s===void 0?M:s;Qe=new Bt(function(f){if(!zt){var c=ne();ge(f).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!tn(h.addedNodes[0])&&(x.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&x.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&tn(h.target)&&~Ta.indexOf(h.attributeName))if(h.attributeName==="class"&&vr(h.target)){var d=et(It(h.target)),m=d.prefix,g=d.iconName;h.target.setAttribute(_t,m||c),g&&h.target.setAttribute(Ct,g)}else pr(h.target)&&r(h.target)})}}),Z&&Qe.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xr(){Qe&&Qe.disconnect()}function kr(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Er(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=et(It(e));return r.prefix||(r.prefix=ne()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=er(r.prefix,e.innerText)||Mt(r.prefix,ut(e.innerText))),!r.iconName&&x.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Or(e){var t=ge(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return x.autoA11y&&(n?t["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(a||Ce()):(t["aria-hidden"]="true",t.focusable="false")),t}function Sr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Er(e),a=n.iconName,r=n.prefix,i=n.rest,o=Or(e),s=dt("parseNodeAttributes",{},e),l=t.styleParser?kr(e):[];return w({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ar=X.styles;function ea(e){var t=x.autoReplaceSvg==="nest"?rn(e,{styleParser:!1}):rn(e);return~t.extra.classes.indexOf(Fn)?G("generateLayersText",e,t):G("generateSvgReplacementMutation",e,t)}var ae=new Set;Pt.map(function(e){ae.add("fa-".concat(e))});Object.keys(Oe[N]).map(ae.add.bind(ae));Object.keys(Oe[L]).map(ae.add.bind(ae));ae=Ie(ae);function on(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();var n=M.documentElement.classList,a=function(h){return n.add("".concat(Vt,"-").concat(h))},r=function(h){return n.remove("".concat(Vt,"-").concat(h))},i=x.autoFetchSvg?ae:Pt.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ar));i.includes("fa")||i.push("fa");var o=[".".concat(Fn,":not([").concat(se,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(se,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ge(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Ft.begin("onTree"),f=s.reduce(function(c,h){try{var d=ea(h);d&&c.push(d)}catch(m){Ln||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,h){Promise.all(f).then(function(d){Kn(d,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),h(d)})})}function _r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ea(e).then(function(n){n&&Kn([n],t)})}function Cr(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:mt(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:mt(r||{})),e(a,w(w({},n),{},{mask:r}))}}var Pr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?B:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,h=n.title,d=h===void 0?null:h,m=n.titleId,g=m===void 0?null:m,E=n.classes,S=E===void 0?[]:E,_=n.attributes,k=_===void 0?{}:_,O=n.styles,y=O===void 0?{}:O;if(t){var p=t.prefix,u=t.iconName,b=t.icon;return tt(w({type:"icon"},t),function(){return le("beforeDOMElementCreation",{iconDefinition:t,params:n}),x.autoA11y&&(d?k["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(g||Ce()):(k["aria-hidden"]="true",k.focusable="false")),Lt({icons:{main:ht(b),mask:l?ht(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:u,transform:w(w({},B),r),symbol:o,title:d,maskId:c,titleId:g,extra:{attributes:k,styles:y,classes:S}})})}},Ir={mixout:function(){return{icon:Cr(Pr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=on,n.nodeCallback=_r,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?M:a,i=n.callback,o=i===void 0?function(){}:i;return on(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,f=a.symbol,c=a.mask,h=a.maskId,d=a.extra;return new Promise(function(m,g){Promise.all([vt(r,s),c.iconName?vt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var S=St(E,2),_=S[0],k=S[1];m([n,Lt({icons:{main:_,mask:k},prefix:s,iconName:r,transform:l,symbol:f,maskId:h,title:i,titleId:o,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ke(s);l.length>0&&(r.style=l);var f;return Tt(o)&&(f=G("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(f||i.icon),{children:a,attributes:r}}}},Tr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return tt({type:"layer"},function(){le("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(x.cssPrefix,"-layers")].concat(Ie(i)).join(" ")},children:o}]})}}}},Nr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,f=l===void 0?{}:l,c=a.styles,h=c===void 0?{}:c;return tt({type:"counter",content:n},function(){return le("beforeDOMElementCreation",{content:n,params:a}),cr({content:n.toString(),title:i,extra:{attributes:f,styles:h,classes:["".concat(x.cssPrefix,"-layers-counter")].concat(Ie(s))}})})}}}},Mr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?B:r,o=a.title,s=o===void 0?null:o,l=a.classes,f=l===void 0?[]:l,c=a.attributes,h=c===void 0?{}:c,d=a.styles,m=d===void 0?{}:d;return tt({type:"text",content:n},function(){return le("beforeDOMElementCreation",{content:n,params:a}),Jt({content:n,transform:w(w({},B),i),title:s,extra:{attributes:h,styles:m,classes:["".concat(x.cssPrefix,"-layers-text")].concat(Ie(f))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(Nn){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return x.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Jt({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Rr=new RegExp('"',"ug"),sn=[1105920,1112319];function Lr(e){var t=e.replace(Rr,""),n=Qa(t,0),a=n>=sn[0]&&n<=sn[1],r=t.length===2?t[0]===t[1]:!1;return{value:ut(r?t[0]:t),isSecondary:a||r}}function ln(e,t){var n="".concat(Ea).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=ge(e.children),o=i.filter(function(b){return b.getAttribute(ft)===t})[0],s=te.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ca),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&c!=="none"&&c!==""){var h=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?L:N,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Se[d][l[2].toLowerCase()]:Pa[d][f],g=Lr(h),E=g.value,S=g.isSecondary,_=l[0].startsWith("FontAwesome"),k=Mt(m,E),O=k;if(_){var y=tr(E);y.iconName&&y.prefix&&(k=y.iconName,m=y.prefix)}if(k&&!S&&(!o||o.getAttribute(_t)!==m||o.getAttribute(Ct)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var p=Sr(),u=p.extra;u.attributes[ft]=t,vt(k,m).then(function(b){var v=Lt(w(w({},p),{},{icons:{main:b,mask:Rt()},prefix:m,iconName:O,extra:u,watchable:!0})),C=M.createElement("svg");t==="::before"?e.insertBefore(C,e.firstChild):e.appendChild(C),C.outerHTML=v.map(function(I){return Ne(I)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Fr(e){return Promise.all([ln(e,"::before"),ln(e,"::after")])}function zr(e){return e.parentNode!==document.head&&!~Sa.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ft)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function fn(e){if(Z)return new Promise(function(t,n){var a=ge(e.querySelectorAll("*")).filter(zr).map(Fr),r=Ft.begin("searchPseudoElements");Jn(),Promise.all(a).then(function(){r(),gt(),t()}).catch(function(){r(),gt(),n()})})}var Yr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=fn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?M:a;x.searchPseudoElements&&fn(r)}}},un=!1,jr={mixout:function(){return{dom:{unwatch:function(){Jn(),un=!0}}}},hooks:function(){return{bootstrap:function(){an(dt("mutationObserverCallbacks",{}))},noAuto:function(){xr()},watch:function(n){var a=n.observeMutationsRoot;un?gt():an(dt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},cn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Dr={mixout:function(){return{parse:{transform:function(n){return cn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=cn(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(f," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:h,path:d};return{tag:"g",attributes:w({},m.outer),children:[{tag:"g",attributes:w({},m.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:w(w({},a.icon.attributes),m.path)}]}]}}}},it={x:0,y:0,width:"100%",height:"100%"};function dn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Hr(e){return e.tag==="g"?e.children:[e]}var Wr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?et(r.split(" ").map(function(o){return o.trim()})):Rt();return i.prefix||(i.prefix=ne()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,h=o.width,d=o.icon,m=Da({transform:l,containerWidth:h,iconWidth:f}),g={tag:"rect",attributes:w(w({},it),{},{fill:"white"})},E=c.children?{children:c.children.map(dn)}:{},S={tag:"g",attributes:w({},m.inner),children:[dn(w({tag:c.tag,attributes:w(w({},c.attributes),m.path)},E))]},_={tag:"g",attributes:w({},m.outer),children:[S]},k="mask-".concat(s||Ce()),O="clip-".concat(s||Ce()),y={tag:"mask",attributes:w(w({},it),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,_]},p={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Hr(d)},y]};return a.push(p,{tag:"rect",attributes:w({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(k,")")},it)}),{children:a,attributes:r}}}},Xr={provides:function(t){var n=!1;te.matchMedia&&(n=te.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:w(w({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=w(w({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:w(w({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:w(w({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:w(w({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:w(w({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:w(w({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:w(w({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:w(w({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},$r={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Ur=[Xa,Ir,Tr,Nr,Mr,Yr,jr,Dr,Wr,Xr,$r];rr(Ur,{mixoutsTo:W});W.noAuto;W.config;W.library;W.dom;var bt=W.parse;W.findIconDefinition;W.toHtml;var Br=W.icon;W.layer;W.text;W.counter;function mn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mn(Object(n),!0).forEach(function(a){de(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function qe(e){"@babel/helpers - typeof";return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qe(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vr(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Qr(e,t){if(e==null)return{};var n=Vr(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function yt(e){return qr(e)||Gr(e)||Zr(e)||Kr()}function qr(e){if(Array.isArray(e))return wt(e)}function Gr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zr(e,t){if(e){if(typeof e=="string")return wt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wt(e,t)}}function wt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Kr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jr(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,f=e.spinPulse,c=e.spinReverse,h=e.pulse,d=e.fixedWidth,m=e.inverse,g=e.border,E=e.listItem,S=e.flip,_=e.size,k=e.rotation,O=e.pull,y=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":h,"fa-fw":d,"fa-inverse":m,"fa-border":g,"fa-li":E,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},de(t,"fa-".concat(_),typeof _<"u"&&_!==null),de(t,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),de(t,"fa-pull-".concat(O),typeof O<"u"&&O!==null),de(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(p){return y[p]?p:null}).filter(function(p){return p})}function ei(e){return e=e-0,e===e}function ta(e){return ei(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ti=["style"];function ni(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ai(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=ta(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[ni(r)]=i:t[r]=i,t},{})}function na(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return na(e,l)}),r=Object.keys(t.attributes||{}).reduce(function(l,f){var c=t.attributes[f];switch(f){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=ai(c);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=c:l.attrs[ta(f)]=c}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Qr(n,ti);return r.attrs.style=J(J({},r.attrs.style),o),e.apply(void 0,[t.tag,J(J({},r.attrs),s)].concat(yt(a)))}var aa=!1;try{aa=!0}catch{}function ri(){if(!aa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function hn(e){if(e&&qe(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(bt.icon)return bt.icon(e);if(e===null)return null;if(e&&qe(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ot(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}var pe=V.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,f=hn(n),c=ot("classes",[].concat(yt(Jr(e)),yt(i.split(" ")))),h=ot("transform",typeof e.transform=="string"?bt.transform(e.transform):e.transform),d=ot("mask",hn(a)),m=Br(f,J(J(J(J({},c),h),d),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!m)return ri("Could not find icon",f),null;var g=m.abstract,E={ref:t};return Object.keys(e).forEach(function(S){pe.defaultProps.hasOwnProperty(S)||(E[S]=e[S])}),ii(g[0],E)});pe.displayName="FontAwesomeIcon";pe.propTypes={beat:P.bool,border:P.bool,beatFade:P.bool,bounce:P.bool,className:P.string,fade:P.bool,flash:P.bool,mask:P.oneOfType([P.object,P.array,P.string]),maskId:P.string,fixedWidth:P.bool,inverse:P.bool,flip:P.oneOf([!0,!1,"horizontal","vertical","both"]),icon:P.oneOfType([P.object,P.array,P.string]),listItem:P.bool,pull:P.oneOf(["right","left"]),pulse:P.bool,rotation:P.oneOf([0,90,180,270]),shake:P.bool,size:P.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:P.bool,spinPulse:P.bool,spinReverse:P.bool,symbol:P.oneOfType([P.bool,P.string]),title:P.string,titleId:P.string,transform:P.oneOfType([P.string,P.object]),swapOpacity:P.bool};pe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var ii=na.bind(null,V.createElement);function oi(){return j("footer",{children:[j("div",{className:"container footer-container",children:[j("div",{className:"footer-links",children:[A("h4",{children:"Quick Links"}),j("ul",{children:[A("li",{children:A(H,{href:"/",children:"Home"})}),A("li",{children:A(H,{href:"about",children:"About"})}),A("li",{children:A(H,{href:"services",children:"Services"})}),A("li",{children:A(H,{href:"contact",children:"Contact"})})]})]}),j("div",{className:"footer-contact",children:[A("h4",{children:"Contact Us"}),j("p",{children:["Email: ",A("a",{href:"mailto:contact@ervotechep.com",children:"contact@ervotechep.com"})]}),j("p",{children:["Phone: ",A("a",{href:"tel:+9153410376",children:"+1 (915) 341-0376"})]})]}),j("div",{className:"footer-cta",children:[j(H,{href:"/",children:[A("img",{className:"cta-logo light-logo",src:"/images/ervotech-logo.png",alt:"Logo"}),A("img",{className:"cta-logo dark-logo",src:"/images/ervotech-logo-dark.png",alt:"Logo"})]}),A("p",{children:"Ready to take your digital presence to the next level? Contact us today and let's make it happen!"}),A("a",{href:"/contact",className:"cta-button",children:"Get in Touch"})]})]}),A("div",{className:"footer-bottom",children:A("p",{children:"© 2026 Ervotech. All Rights Reserved."})})]})}var si={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},li={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},xt={exports:{}},Yt={};(function(e){function t(k){try{return E.insertRule(k,E.cssRules.length)}catch{console.warn("react-reveal - animation failed")}}function n(k,O,y,p,u){var b=Math.log(p),v=Math.log(u),C=(v-b)/(y-O);return Math.exp(b+C*(k-O))}function a(k){if(!E)return"";var O="@keyframes "+(S+m)+"{"+k+"}",y=g[k];return y?""+S+y:(E.insertRule(O,E.cssRules.length),g[k]=m,""+S+m++)}function r(){h||(e.globalHide=h=!0,window.removeEventListener("scroll",r,!0),t("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",r,!0),window.document.removeEventListener("visibilitychange",r))}function i(k){var O=k.ssrFadeout;e.fadeOutEnabled=O}Object.defineProperty(e,"__esModule",{value:!0}),e.insertRule=t,e.cascade=n,e.animation=a,e.hideAll=r,e.default=i;var o=e.namespace="react-reveal";e.defaults={duration:1e3,delay:0,count:1};var s=e.ssr=!0,l=e.observerMode=!1,f=e.raf=function(k){return window.setTimeout(k,66)},c=e.disableSsr=function(){return e.ssr=s=!1};e.fadeOutEnabled=!1,e.ssrFadeout=function(){var k=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return e.fadeOutEnabled=k};var h=e.globalHide=!1;e.ie10=!1;var d=e.collapseend=void 0,m=1,g={},E=!1,S=o+"-"+Math.floor(1e15*Math.random())+"-";if(typeof window<"u"&&window.name!=="nodejs"&&window.document&&typeof navigator<"u"){e.observerMode=l="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),e.raf=f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||f,e.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,navigator.appVersion.indexOf("MSIE 10")!==-1&&(e.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(e.ssr=s=!1),s&&window.setTimeout(c,1500),l||(e.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var _=document.createElement("style");document.head.appendChild(_),_.sheet&&_.sheet.cssRules&&_.sheet.insertRule&&(E=_.sheet,window.addEventListener("scroll",r,!0),window.addEventListener("orientationchange",r,!0),window.document.addEventListener("visibilitychange",r))}})(Yt);var kt={exports:{}},Et={exports:{}};(function(e,t){function n(y){return y&&y.__esModule?y:{default:y}}function a(y,p,u){return p in y?Object.defineProperty(y,p,{value:u,enumerable:!0,configurable:!0,writable:!0}):y[p]=u,y}function r(y,p){if(!(y instanceof p))throw new TypeError("Cannot call a class as a function")}function i(y,p){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!p||typeof p!="object"&&typeof p!="function"?y:p}function o(y,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);y.prototype=Object.create(p&&p.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(y,p):y.__proto__=p)}Object.defineProperty(t,"__esModule",{value:!0});var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},l=function(){function y(p,u){var b=[],v=!0,C=!1,I=void 0;try{for(var F,T=p[Symbol.iterator]();!(v=(F=T.next()).done)&&(b.push(F.value),!u||b.length!==u);v=!0);}catch(R){C=!0,I=R}finally{try{!v&&T.return&&T.return()}finally{if(C)throw I}}return b}return function(p,u){if(Array.isArray(p))return p;if(Symbol.iterator in Object(p))return y(p,u);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=Object.assign||function(y){for(var p=1;p<arguments.length;p++){var u=arguments[p];for(var b in u)Object.prototype.hasOwnProperty.call(u,b)&&(y[b]=u[b])}return y},c=function(){function y(p,u){for(var b=0;b<u.length;b++){var v=u[b];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(p,v.key,v)}}return function(p,u,b){return u&&y(p.prototype,u),b&&y(p,b),p}}(),h=z,d=n(h),m=_n,g=Yt,E=(0,m.shape)({make:m.func,duration:m.number.isRequired,delay:m.number.isRequired,forever:m.bool,count:m.number.isRequired,style:m.object.isRequired,reverse:m.bool}),S={collapse:m.bool,collapseEl:m.element,cascade:m.bool,wait:m.number,force:m.bool,disabled:m.bool,appear:m.bool,enter:m.bool,exit:m.bool,fraction:m.number,refProp:m.string,innerRef:m.func,onReveal:m.func,unmountOnExit:m.bool,mountOnEnter:m.bool,inEffect:E.isRequired,outEffect:(0,m.oneOfType)([E,(0,m.oneOf)([!1])]).isRequired,ssrReveal:m.bool,collapseOnly:m.bool,ssrFadeout:m.bool},_={fraction:.2,refProp:"ref"},k={transitionGroup:m.object},O=function(y){function p(u,b){r(this,p);var v=i(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,u,b));return v.isOn=u.when===void 0||!!u.when,v.state={collapse:u.collapse?p.getInitialCollapseStyle(u):void 0,style:{opacity:v.isOn&&!u.ssrReveal||!u.outEffect?void 0:0}},v.savedChild=!1,v.isShown=!1,g.observerMode?v.handleObserve=v.handleObserve.bind(v):(v.revealHandler=v.makeHandler(v.reveal),v.resizeHandler=v.makeHandler(v.resize)),v.saveRef=v.saveRef.bind(v),v}return o(p,y),c(p,[{key:"saveRef",value:function(u){this.childRef&&this.childRef(u),this.props.innerRef&&this.props.innerRef(u),this.el!==u&&(this.el=u&&"offsetHeight"in u?u:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?f({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!g.observerMode&&this.props.collapse&&window.document.dispatchEvent(g.collapseend)))}},{key:"animationEnd",value:function(u,b,v){var C=this,I=v.forever,F=v.count,T=v.delay,R=v.duration;if(!I){var D=function(){C&&C.el&&(C.animationEndTimeout=void 0,u.call(C))};this.animationEndTimeout=window.setTimeout(D,T+(R+(b?R:0)*F))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(u,b,v){var C=v.duration+(b.cascade?v.duration:0),I=this.isOn?this.getDimensionValue():0,F=void 0,T=void 0;if(b.collapseOnly)F=v.duration/3,T=v.delay;else{var R=C>>2,D=R>>1;F=R,T=v.delay+(this.isOn?0:C-R-D),u.style.animationDuration=C-R+(this.isOn?D:-D)+"ms",u.style.animationDelay=v.delay+(this.isOn?R-D:0)+"ms"}return u.collapse={height:I,transition:"height "+F+"ms ease "+T+"ms",overflow:b.collapseOnly?"hidden":void 0},u}},{key:"animate",value:function(u){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var b=!this.isOn&&u.outEffect,v=u[b?"outEffect":"inEffect"],C="style"in v&&v.style.animationName||void 0,I=void 0;u.collapseOnly?I={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((u.outEffect||this.isOn)&&v.make&&(C=v.make),I={hasAppeared:!0,hasExited:!1,collapse:void 0,style:f({},v.style,{animationDuration:v.duration+"ms",animationDelay:v.delay+"ms",animationIterationCount:v.forever?"infinite":v.count,opacity:1,animationName:C}),className:v.className}),this.setState(u.collapse?this.collapse(I,u,v):I),b?(this.savedChild=d.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,u.cascade,v)):this.savedChild=!1,this.onReveal(u)}}},{key:"onReveal",value:function(u){u.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),u.wait?this.onRevealTimeout=window.setTimeout(u.onReveal,u.wait):u.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),g.ssr&&(0,g.disableSsr)()}},{key:"handleObserve",value:function(u,b){l(u,1)[0].intersectionRatio>0&&(b.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(u){var b=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(this.el&&g.observerMode){if(this.observer){if(!b)return;this.observer.disconnect()}else if(b)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:u.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(u){var b=this,v=arguments.length>1&&arguments[1]!==void 0&&arguments[1];g.globalHide||(0,g.hideAll)(),this&&this.el&&(u||(u=this.props),g.ssr&&(0,g.disableSsr)(),this.isOn&&this.isShown&&u.spy!==void 0?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return b.reveal(u)},200)):v||this.inViewport(u)||u.force?this.animate(u):g.observerMode?this.observe(u):this.listen())}},{key:"componentDidMount",value:function(){var u=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),this.props.when!==void 0&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var b=this.context.transitionGroup,v=b&&!b.isMounting?!("enter"in this.props&&this.props.enter===!1):this.props.appear;return this.isOn&&((this.props.when!==void 0||this.props.spy!==void 0)&&!v||g.ssr&&!g.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&p.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):g.ssr&&(g.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&p.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return u.reveal(u.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(u){var b=this,v=void 0;v=typeof u=="string"?u.split("").map(function(U,be){return d.default.createElement("span",{key:be,style:{display:"inline-block",whiteSpace:"pre"}},U)}):d.default.Children.toArray(u);var C=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],I=C.duration,F=C.reverse,T=v.length,R=2*I;this.props.collapse&&(R=parseInt(this.state.style.animationDuration,10),I=R/2);var D=F?T:0;return v=v.map(function(U){return(U===void 0?"undefined":s(U))==="object"&&U?d.default.cloneElement(U,{style:f({},U.props.style,b.state.style,{animationDuration:Math.round((0,g.cascade)(F?D--:D++,0,T,I,R))+"ms"})}):U})}},{key:"componentWillReceiveProps",value:function(u){if(u.when!==void 0&&(this.isOn=!!u.when),u.fraction!==this.props.fraction&&this.observe(u,!0),!this.isOn&&u.onExited&&"exit"in u&&u.exit===!1)return void u.onExited();u.disabled||(u.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:p.getInitialCollapseStyle(u)}),this.isShown=!1),u.when===this.props.when&&u.spy===this.props.spy||this.reveal(u),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if(s(this.props.children)==="object"){var u=d.default.Children.only(this.props.children);return"type"in u&&typeof u.type=="string"||this.props.refProp!=="ref"?u:d.default.createElement("div",null,u)}return d.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var u=void 0;u=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var b=this.getChild();typeof b.ref=="function"&&(this.childRef=b.ref);var v=!1,C=b.props,I=C.style,F=C.className,T=C.children,R=this.props.disabled?F:(this.props.outEffect?g.namespace:"")+(this.state.className?" "+this.state.className:"")+(F?" "+F:"")||void 0,D=void 0;typeof this.state.style.animationName=="function"&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&T&&this.state.style.animationName?(v=this.cascade(T),D=f({},I,{opacity:1})):D=this.props.disabled?I:f({},I,this.state.style);var U=f({},this.props.props,a({className:R,style:D},this.props.refProp,this.saveRef)),be=d.default.cloneElement(b,U,u?v||T:void 0);return this.props.collapse!==void 0?this.props.collapseEl?d.default.cloneElement(this.props.collapseEl,{style:f({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:be}):d.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:be}):be}},{key:"makeHandler",value:function(u){var b=this,v=function(){u.call(b,b.props),b.ticking=!1};return function(){b.ticking||((0,g.raf)(v),b.ticking=!0)}}},{key:"inViewport",value:function(u){if(!this.el||window.document.hidden)return!1;var b=this.el.offsetHeight,v=window.pageYOffset-p.getTop(this.el),C=Math.min(b,window.innerHeight)*(g.globalHide?u.fraction:0);return v>C-window.innerHeight&&v<b-C}},{key:"resize",value:function(u){this&&this.el&&this.isOn&&this.inViewport(u)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!u.outEffect?1:0}}),this.onReveal(u))}},{key:"listen",value:function(){g.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!g.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(u){return{height:0,visibility:u.when?void 0:"hidden"}}},{key:"getTop",value:function(u){for(;u.offsetTop===void 0;)u=u.parentNode;for(var b=u.offsetTop;u.offsetParent;b+=u.offsetTop)u=u.offsetParent;return b}}]),p}(d.default.Component);O.propTypes=S,O.defaultProps=_,O.contextTypes=k,O.displayName="RevealBase",t.default=O,e.exports=t.default})(Et,Et.exports);var fi=Et.exports;(function(e,t){function n(f){return f&&f.__esModule?f:{default:f}}function a(f,c,h,d){return"in"in f&&(f.when=f.in),o.default.Children.count(d)<2?o.default.createElement(l.default,r({},f,{inEffect:c,outEffect:h,children:d})):(d=o.default.Children.map(d,function(m){return o.default.createElement(l.default,r({},f,{inEffect:c,outEffect:h,children:m}))}),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,d):o.default.createElement("span",null,d))}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(f){for(var c=1;c<arguments.length;c++){var h=arguments[c];for(var d in h)Object.prototype.hasOwnProperty.call(h,d)&&(f[d]=h[d])}return f};t.default=a;var i=z,o=n(i),s=fi,l=n(s);e.exports=t.default})(kt,kt.exports);var ui=kt.exports;(function(e,t){function n(d){return d&&d.__esModule?d:{default:d}}function a(d,m){var g={};for(var E in d)m.indexOf(E)>=0||Object.prototype.hasOwnProperty.call(d,E)&&(g[E]=d[E]);return g}function r(d,m){var g=m.distance,E=m.left,S=m.right,_=m.up,k=m.down,O=m.top,y=m.bottom,p=m.big,u=m.mirror,b=m.opposite,v=(g?g.toString():0)+((E?1:0)|(S?2:0)|(O||k?4:0)|(y||_?8:0)|(u?16:0)|(b?32:0)|(d?64:0)|(p?128:0));if(h.hasOwnProperty(v))return h[v];var C=E||S||_||k||O||y,I=void 0,F=void 0;if(C){if(!u!=!(d&&b)){var T=[S,E,y,O,k,_];E=T[0],S=T[1],O=T[2],y=T[3],_=T[4],k=T[5]}var R=g||(p?"2000px":"100%");I=E?"-"+R:S?R:"0",F=k||O?"-"+R:_||y?R:"0"}return h[v]=(0,s.animation)((d?"to":"from")+" {opacity: 0;"+(C?" transform: translate3d("+I+", "+F+", 0);":"")+`}
     `+(d?"from":"to")+" {opacity: 1;transform: none;} "),h[v]}function i(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s.defaults,m=arguments.length>1&&arguments[1]!==void 0&&arguments[1],g=d.children,E=(d.out,d.forever),S=d.timeout,_=d.duration,k=_===void 0?s.defaults.duration:_,O=d.delay,y=O===void 0?s.defaults.delay:O,p=d.count,u=p===void 0?s.defaults.count:p,b=a(d,["children","out","forever","timeout","duration","delay","count"]),v={make:r,duration:S===void 0?k:S,delay:y,forever:E,count:u,style:{animationFillMode:"both"},reverse:b.left};return m?(0,f.default)(b,v,v,g):v}Object.defineProperty(t,"__esModule",{value:!0});var o=_n,s=Yt,l=ui,f=n(l),c={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,big:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,distance:o.string,delay:o.number,count:o.number,forever:o.bool},h={};i.propTypes=c,t.default=i,e.exports=t.default})(xt,xt.exports);var ci=xt.exports;const di=An(ci);function mi(){const[e,t]=z.useState(localStorage.getItem("theme")||"dark");return z.useEffect(()=>{document.body.dataset.theme=e,localStorage.setItem("theme",e)},[e]),A(di,{children:A("button",{onClick:()=>{t(a=>a==="dark"?"light":"dark")},className:"theme-toggle-btn","aria-label":"Toggle Dark/Light Theme",children:e==="dark"?"🌞":"🌜"})})}function hi(){const[e,t]=z.useState(!1),[n,a]=z.useState(!1);return A("header",{className:"navbar",children:j("div",{className:"container",children:[A("div",{className:"logo",children:j(H,{href:"/",children:[A("img",{className:"light-logo",src:"/images/ervotech-logo.png",alt:"Logo"}),A("img",{className:"dark-logo",src:"/images/ervotech-logo-dark.png",alt:"Logo"})]})}),A("nav",{children:j("ul",{className:`nav-links ${e?"active":""}`,children:[A("li",{children:A(H,{href:"/",children:"Home"})}),A("li",{children:A(H,{href:"/about",children:"About"})}),j("li",{className:"dropdown",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[A("span",{className:"dropdown-toggle",children:"Our Services ▾"}),j("ul",{className:`dropdown-menu ${n?"open":""}`,children:[A(H,{href:"/services",children:A("li",{children:"All Services"})}),A(H,{href:"/web-consulting-el-paso",children:A("li",{children:"Consulting"})}),A(H,{href:"/web-design-el-paso",children:A("li",{children:"Web Design in El Paso"})}),A(H,{href:"/portfolio",children:A("li",{children:"Our Work"})})]})]}),A("li",{children:A(H,{href:"/blog",children:"Blog"})}),A("li",{children:A(H,{href:"/contact",children:"Contact"})}),A(mi,{})]})}),j("div",{className:"nav-actions",children:[j("a",{href:"tel:+9153410376",className:"nav-btn call-btn",children:[A(pe,{icon:si})," (915)341-0376"]}),j("a",{href:"#contact",className:"nav-btn quote-btn",children:[A(pe,{icon:li})," Get A Quote"]})]}),A("button",{className:"menu-toggle",onClick:()=>{t(i=>!i)},"aria-label":"Toggle Navigation",children:"☰"})]})})}var vi=4,pi=.001,gi=1e-7,bi=10,we=11,We=1/(we-1),yi=typeof Float32Array=="function";function ra(e,t){return 1-3*t+3*e}function ia(e,t){return 3*t-6*e}function oa(e){return 3*e}function Ge(e,t,n){return((ra(t,n)*e+ia(t,n))*e+oa(t))*e}function sa(e,t,n){return 3*ra(t,n)*e*e+2*ia(t,n)*e+oa(t)}function wi(e,t,n,a,r){var i,o,s=0;do o=t+(n-t)/2,i=Ge(o,a,r)-e,i>0?n=o:t=o;while(Math.abs(i)>gi&&++s<bi);return o}function xi(e,t,n,a){for(var r=0;r<vi;++r){var i=sa(t,n,a);if(i===0)return t;var o=Ge(t,n,a)-e;t-=o/i}return t}function ki(e){return e}var Ei=function(t,n,a,r){if(!(0<=t&&t<=1&&0<=a&&a<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===n&&a===r)return ki;for(var i=yi?new Float32Array(we):new Array(we),o=0;o<we;++o)i[o]=Ge(o*We,t,a);function s(l){for(var f=0,c=1,h=we-1;c!==h&&i[c]<=l;++c)f+=We;--c;var d=(l-i[c])/(i[c+1]-i[c]),m=f+d*We,g=sa(m,t,a);return g>=pi?xi(l,m,t,a):g===0?m:wi(l,f,f+We,t,a)}return function(f){return f===0?0:f===1?1:Ge(s(f),n,r)}};const vn=An(Ei);var jt=function(t){this.startX=t.startX,this.startY=t.startY,this.endX=t.endX,this.endY=t.endY,this.totalX=this.endX-this.startX,this.totalY=this.endY-this.startY,this.startMultiplierX=t.startMultiplierX||1,this.endMultiplierX=t.endMultiplierX||1,this.startMultiplierY=t.startMultiplierY||1,this.endMultiplierY=t.endMultiplierY||1};function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ee.apply(this,arguments)}var Ze;(function(e){e.speed="speed",e.translateX="translateX",e.translateY="translateY",e.rotate="rotate",e.rotateX="rotateX",e.rotateY="rotateY",e.rotateZ="rotateZ",e.scale="scale",e.scaleX="scaleX",e.scaleY="scaleY",e.scaleZ="scaleZ",e.opacity="opacity"})(Ze||(Ze={}));var oe;(function(e){e.px="px",e["%"]="%",e.vh="vh",e.vw="vw"})(oe||(oe={}));var Ee;(function(e){e.deg="deg",e.turn="turn",e.rad="rad"})(Ee||(Ee={}));var Ot;(function(e){e[""]=""})(Ot||(Ot={}));var $;(function(e){e.vertical="vertical",e.horizontal="horizontal"})($||($={}));var pn;(function(e){e.ease="ease",e.easeIn="easeIn",e.easeOut="easeOut",e.easeInOut="easeInOut",e.easeInQuad="easeInQuad",e.easeInCubic="easeInCubic",e.easeInQuart="easeInQuart",e.easeInQuint="easeInQuint",e.easeInSine="easeInSine",e.easeInExpo="easeInExpo",e.easeInCirc="easeInCirc",e.easeOutQuad="easeOutQuad",e.easeOutCubic="easeOutCubic",e.easeOutQuart="easeOutQuart",e.easeOutQuint="easeOutQuint",e.easeOutSine="easeOutSine",e.easeOutExpo="easeOutExpo",e.easeOutCirc="easeOutCirc",e.easeInOutQuad="easeInOutQuad",e.easeInOutCubic="easeInOutCubic",e.easeInOutQuart="easeInOutQuart",e.easeInOutQuint="easeInOutQuint",e.easeInOutSine="easeInOutSine",e.easeInOutExpo="easeInOutExpo",e.easeInOutCirc="easeInOutCirc",e.easeInBack="easeInBack",e.easeOutBack="easeOutBack",e.easeInOutBack="easeInOutBack"})(pn||(pn={}));var gn=0;function Oi(){return++gn,gn}var Si=function(){function e(n){var a=n.el.getBoundingClientRect();if(n.view.scrollContainer){var r=n.view.scrollContainer.getBoundingClientRect();a=ee({},a,{top:a.top-r.top,right:a.right-r.left,bottom:a.bottom-r.top,left:a.left-r.left})}this.height=n.el.offsetHeight,this.width=n.el.offsetWidth,this.left=a.left,this.right=a.right,this.top=a.top,this.bottom=a.bottom,n.rootMargin&&this._setRectWithRootMargin(n.rootMargin)}var t=e.prototype;return t._setRectWithRootMargin=function(a){var r=a.top+a.bottom,i=a.left+a.right;this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left,this.height+=r,this.width+=i},e}(),Ai=[Ot[""],oe.px,oe["%"],oe.vh,oe.vw,Ee.deg,Ee.turn,Ee.rad];function me(e,t){t===void 0&&(t=oe["%"]);var n={value:0,unit:t};if(typeof e>"u")return n;var a=typeof e=="number"||typeof e=="string";if(!a)throw new Error("Invalid value provided. Must provide a value as a string or number");e=String(e),n.value=parseFloat(e),n.unit=e.match(/[\d.\-+]*\s*(.*)/)[1]||t;var r=Ai.includes(n.unit);if(!r)throw new Error("Invalid unit provided.");return n}var bn={ease:[.25,.1,.25,1],easeIn:[.42,0,1,1],easeOut:[0,0,.58,1],easeInOut:[.42,0,.58,1],easeInQuad:[.55,.085,.68,.53],easeInCubic:[.55,.055,.675,.19],easeInQuart:[.895,.03,.685,.22],easeInQuint:[.755,.05,.855,.06],easeInSine:[.47,0,.745,.715],easeInExpo:[.95,.05,.795,.035],easeInCirc:[.6,.04,.98,.335],easeOutQuad:[.25,.46,.45,.94],easeOutCubic:[.215,.61,.355,1],easeOutQuart:[.165,.84,.44,1],easeOutQuint:[.23,1,.32,1],easeOutSine:[.39,.575,.565,1],easeOutExpo:[.19,1,.22,1],easeOutCirc:[.075,.82,.165,1],easeInOutQuad:[.455,.03,.515,.955],easeInOutCubic:[.645,.045,.355,1],easeInOutQuart:[.77,0,.175,1],easeInOutQuint:[.86,0,.07,1],easeInOutSine:[.445,.05,.55,.95],easeInOutExpo:[1,0,0,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};function la(e){if(Array.isArray(e))return vn(e[0],e[1],e[2],e[3]);if(typeof e=="string"&&typeof bn[e]<"u"){var t=bn[e];return vn(t[0],t[1],t[2],t[3])}}var _i=Object.values(Ze),Ci={speed:"px",translateX:"%",translateY:"%",rotate:"deg",rotateX:"deg",rotateY:"deg",rotateZ:"deg",scale:"",scaleX:"",scaleY:"",scaleZ:"",opacity:""};function yn(e,t){var n={};return _i.forEach(function(a){var r=Ci[a];if(typeof(e==null?void 0:e[a])=="number"){var i=e==null?void 0:e[a],o=(i||0)*10+"px",s=(i||0)*-10+"px",l=me(o),f=me(s),c={start:l.value,end:f.value,unit:l.unit};t===$.vertical&&(n.translateY=c),t===$.horizontal&&(n.translateX=c)}if(Array.isArray(e==null?void 0:e[a])){var h=e==null?void 0:e[a];if(typeof h[0]<"u"&&typeof h[1]<"u"){var d=me(h==null?void 0:h[0],r),m=me(h==null?void 0:h[1],r),g=la(h==null?void 0:h[2]);if(n[a]={start:d.value,end:m.value,unit:d.unit,easing:g},d.unit!==m.unit)throw new Error("Must provide matching units for the min and max offset values of each axis.")}}}),n}function wn(e,t,n,a){var r=n-e,i=r/t;return a&&(i=a(i)),i}function Pi(e,t,n){var a=n>=e&&n<=t;return a}function Ii(e,t,n,a,r){return(n-t)*(e-a)/(r-a)+t}function fa(e,t){var n=Ii(typeof e.easing=="function"?e.easing(t):t,(e==null?void 0:e.start)||0,(e==null?void 0:e.end)||0,0,1);return{value:n,unit:e==null?void 0:e.unit}}var Ti=Object.values(Ze).filter(function(e){return e!=="opacity"});function Ni(e,t){var n=Object.keys(t),a=n.includes("opacity"),r="transform"+(a?",opacity":"");e.style.willChange=r}function Mi(e,t,n){if(n){var a=Li(e,t),r=Ri(e,t);n.style.transform=a,n.style.opacity=r}}function Ri(e,t){var n=e.opacity&&fa(e.opacity,t);if(typeof n>"u"||typeof n.value>"u"||typeof n.unit>"u")return"";var a=""+n.value;return a}function Li(e,t){var n=Ti.reduce(function(a,r){var i=e[r]&&fa(e[r],t);if(typeof i>"u"||typeof i.value>"u"||typeof i.unit>"u")return a;var o=r+"("+i.value+i.unit+")";return a+o},"");return n}function Ue(e){var t=e.el;t&&(t.style.transform="",t.style.opacity="")}function Fi(e,t,n,a){var r=e.top-t.height,i=e.left-t.width,o=e.bottom,s=e.right;i+=n.x,s+=n.x,r+=n.y,o+=n.y,a&&(n.y+e.top<t.height&&(r=0),n.x+e.left<t.width&&(i=0),o>t.scrollHeight-t.height&&(o=t.scrollHeight-t.height),s>t.scrollWidth-t.width&&(s=t.scrollWidth-t.width));var l=new jt({startX:i,startY:r,endX:s,endY:o});return l}function fe(e,t,n){var a=t>e,r=(Math.abs(e)+Math.abs(t))*(a?-1:1),i=n+r,o=Math.max(n/i,1);return o}function xn(e,t){var n=e.start,a=e.end,r=e.unit;if(r==="%"){var i=t/100;n=n*i,a=a*i}if(r==="vw"){var o=n/100,s=a/100;n=window.innerWidth*o,a=window.innerWidth*s}if(r==="vh"){var l=n/100,f=a/100;n=window.innerHeight*l,a=window.innerHeight*f}return{start:n,end:a}}var kn={start:0,end:0,unit:""};function zi(e,t,n,a,r,i){var o=n.translateX||kn,s=n.translateY||kn,l=xn(o,e.width),f=l.start,c=l.end,h=xn(s,e.height),d=h.start,m=h.end,g=e.top-t.height,E=e.left-t.width,S=e.bottom,_=e.right,k=1,O=1;r===$.vertical&&(k=fe(d,m,t.height+e.height),O=k);var y=1,p=1;if(r===$.horizontal&&(y=fe(f,c,t.width+e.width),p=y),d<0&&(g=g+d*k),m>0&&(S=S+m*O),f<0&&(E=E+f*y),c>0&&(_=_+c*p),E+=a.x,_+=a.x,g+=a.y,S+=a.y,i){var u=a.y+e.top<t.height,b=a.x+e.left<t.width,v=a.y+e.bottom>t.scrollHeight-t.height,C=a.x+e.right>t.scrollWidth-t.height;if(u&&v&&(k=1,O=1,g=0,S=t.scrollHeight-t.height),b&&C&&(y=1,p=1,E=0,_=t.scrollWidth-t.width),!u&&v){g=e.top-t.height+a.y,S=t.scrollHeight-t.height;var I=S-g;k=fe(d,m,I),O=1,d<0&&(g=g+d*k)}if(!b&&C){E=e.left-t.width+a.x,_=t.scrollWidth-t.width;var F=_-E;y=fe(f,c,F),p=1,f<0&&(E=E+f*y)}if(u&&!v){g=0,S=e.bottom+a.y;var T=S-g;k=1,O=fe(d,m,T),m>0&&(S=S+m*O)}if(b&&!C){E=0,_=e.right+a.x;var R=_-E;y=1,p=fe(f,c,R),c>0&&(_=_+c*p)}}var D=new jt({startX:E,startY:g,endX:_,endY:S,startMultiplierX:y,endMultiplierX:p,startMultiplierY:k,endMultiplierY:O});return D}function Yi(e,t){var n=ee({},e);return n.translateX&&(n.translateX=ee({},e.translateX,{start:n.translateX.start*t.startMultiplierX,end:n.translateX.end*t.endMultiplierX})),n.translateY&&(n.translateY=ee({},e.translateY,{start:n.translateY.start*t.startMultiplierY,end:n.translateY.end*t.endMultiplierY})),n}function ji(e,t,n){return e.rootMargin||e.targetElement||e.shouldDisableScalingTranslations?!1:!!(t.translateX&&n===$.horizontal||t.translateY&&n===$.vertical)}var En=function(t,n,a){return Math.min(Math.max(t,n),a)},Di=function(){function e(n){this.el=n.el,this.props=n.props,this.scrollAxis=n.scrollAxis,this.disabledParallaxController=n.disabledParallaxController||!1,this.id=Oi(),this.effects=yn(this.props,this.scrollAxis),this.isInView=null,this.progress=0,this._setElementEasing(n.props.easing),Ni(n.el,this.effects)}var t=e.prototype;return t.updateProps=function(a){return this.props=ee({},this.props,a),this.effects=yn(a,this.scrollAxis),this._setElementEasing(a.easing),this},t.setCachedAttributes=function(a,r){Ue(this),this.rect=new Si({el:this.props.targetElement||this.el,rootMargin:this.props.rootMargin,view:a});var i=ji(this.props,this.effects,this.scrollAxis);return typeof this.props.startScroll=="number"&&typeof this.props.endScroll=="number"?(this.limits=new jt({startX:this.props.startScroll,startY:this.props.startScroll,endX:this.props.endScroll,endY:this.props.endScroll}),this._setElementStyles(),this):(i?(this.limits=zi(this.rect,a,this.effects,r,this.scrollAxis,this.props.shouldAlwaysCompleteAnimation),this.scaledEffects=Yi(this.effects,this.limits)):this.limits=Fi(this.rect,a,r,this.props.shouldAlwaysCompleteAnimation),this._setElementStyles(),this)},t._updateElementIsInView=function(a){var r=this.isInView===null;a!==this.isInView&&(a?this.props.onEnter&&this.props.onEnter(this):r||(this._setFinalProgress(),this._setElementStyles(),this.props.onExit&&this.props.onExit(this))),this.isInView=a},t._setFinalProgress=function(){var a=En(Math.round(this.progress),0,1);this._updateElementProgress(a)},t._setElementStyles=function(){if(!(this.props.disabled||this.disabledParallaxController)){var a=this.scaledEffects||this.effects;Mi(a,this.progress,this.el)}},t._updateElementProgress=function(a){this.progress=a,this.props.onProgressChange&&this.props.onProgressChange(this.progress),this.props.onChange&&this.props.onChange(this)},t._setElementEasing=function(a){this.easing=la(a)},t.updateElementOptions=function(a){this.scrollAxis=a.scrollAxis,this.disabledParallaxController=a.disabledParallaxController||!1},t.updatePosition=function(a){if(!this.limits)return this;var r=this.scrollAxis===$.vertical,i=this.isInView===null,o=r?this.limits.startY:this.limits.startX,s=r?this.limits.endY:this.limits.endX,l=r?this.limits.totalY:this.limits.totalX,f=r?a.y:a.x,c=Pi(o,s,f);if(this._updateElementIsInView(c),c){var h=wn(o,l,f,this.easing);this._updateElementProgress(h),this._setElementStyles()}else i&&(this.progress=En(Math.round(wn(o,l,f,this.easing)),0,1),this._setElementStyles());return this},e}(),On=function(){function e(n){this.scrollContainer=n.scrollContainer,this.width=n.width,this.height=n.height,this.scrollHeight=n.scrollHeight,this.scrollWidth=n.scrollWidth}var t=e.prototype;return t.hasChanged=function(a){return a.width!==this.width||a.height!==this.height||a.scrollWidth!==this.scrollWidth||a.scrollHeight!==this.scrollHeight},t.setSize=function(a){return this.width=a.width,this.height=a.height,this.scrollHeight=a.scrollHeight,this.scrollWidth=a.scrollWidth,this},e}(),Hi=function(){function e(n,a){this.x=n,this.y=a,this.dx=0,this.dy=0}var t=e.prototype;return t.setScroll=function(a,r){return this.dx=a-this.x,this.dy=r-this.y,this.x=a,this.y=r,this},e}();function Wi(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return e}var ua=function(){function e(n){var a=n.scrollAxis,r=a===void 0?$.vertical:a,i=n.scrollContainer,o=n.disabled,s=o===void 0?!1:o;this.disabled=s,this.scrollAxis=r,this.elements=[],this._hasScrollContainer=!!i,this.viewEl=i??window;var l=this._getScrollPosition(),f=l[0],c=l[1];this.scroll=new Hi(f,c),this.view=new On({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:this._hasScrollContainer?i:void 0}),this._ticking=!1,this._supportsPassive=Wi(),this._bindAllMethods(),!this.disabled&&(this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize())}e.init=function(a){var r=typeof window<"u";if(!r)throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");return new e(a)};var t=e.prototype;return t._bindAllMethods=function(){var a=this;["_addListeners","_removeListeners","_getScrollPosition","_handleScroll","_handleUpdateCache","_updateAllElements","_updateElementPosition","_setViewSize","_addResizeObserver","_checkIfViewHasChanged","_getViewParams","getElements","createElement","removeElementById","resetElementStyles","updateElementPropsById","update","updateScrollContainer","destroy"].forEach(function(r){a[r]=a[r].bind(a)})},t._addListeners=function(a){a.addEventListener("scroll",this._handleScroll,this._supportsPassive?{passive:!0}:!1),window.addEventListener("resize",this._handleUpdateCache,!1),window.addEventListener("blur",this._handleUpdateCache,!1),window.addEventListener("focus",this._handleUpdateCache,!1),window.addEventListener("load",this._handleUpdateCache,!1)},t._removeListeners=function(a){var r;a.removeEventListener("scroll",this._handleScroll,!1),window.removeEventListener("resize",this._handleUpdateCache,!1),window.removeEventListener("blur",this._handleUpdateCache,!1),window.removeEventListener("focus",this._handleUpdateCache,!1),window.removeEventListener("load",this._handleUpdateCache,!1),(r=this._resizeObserver)==null||r.disconnect()},t._addResizeObserver=function(){var a=this;try{var r=this._hasScrollContainer?this.viewEl:document.documentElement;this._resizeObserver=new ResizeObserver(function(){return a.update()}),this._resizeObserver.observe(r)}catch{console.warn("Failed to create the resize observer in the ParallaxContoller")}},t._getScrollPosition=function(){var a=this._hasScrollContainer?this.viewEl.scrollLeft:window.pageXOffset,r=this._hasScrollContainer?this.viewEl.scrollTop:window.pageYOffset;return[a,r]},t._handleScroll=function(){var a,r=this._getScrollPosition(),i=r[0],o=r[1];this.scroll.setScroll(i,o),!this._ticking&&((a=this.elements)==null?void 0:a.length)>0&&(this._ticking=!0,window.requestAnimationFrame(this._updateAllElements))},t._handleUpdateCache=function(){this._setViewSize(),this._updateAllElements({updateCache:!0})},t._updateAllElements=function(a){var r=this,i=a===void 0?{}:a,o=i.updateCache;this.elements&&this.elements.forEach(function(s){o&&s.setCachedAttributes(r.view,r.scroll),r._updateElementPosition(s)}),this._ticking=!1},t._updateElementPosition=function(a){a.props.disabled||this.disabled||a.updatePosition(this.scroll)},t._getViewParams=function(){if(this._hasScrollContainer){var a=this.viewEl.offsetWidth,r=this.viewEl.offsetHeight,i=this.viewEl.scrollHeight,o=this.viewEl.scrollWidth;return this.view.setSize({width:a,height:r,scrollHeight:i,scrollWidth:o})}var s=document.documentElement,l=window.innerWidth||s.clientWidth,f=window.innerHeight||s.clientHeight,c=s.scrollHeight,h=s.scrollWidth;return{width:l,height:f,scrollHeight:c,scrollWidth:h}},t._setViewSize=function(){return this.view.setSize(this._getViewParams())},t._checkIfViewHasChanged=function(){return this.view.hasChanged(this._getViewParams())},t.getElements=function(){return this.elements},t.createElement=function(a){var r=new Di(ee({},a,{scrollAxis:this.scrollAxis,disabledParallaxController:this.disabled}));return r.setCachedAttributes(this.view,this.scroll),this.elements=this.elements?[].concat(this.elements,[r]):[r],this._updateElementPosition(r),this._checkIfViewHasChanged()&&this.update(),r},t.removeElementById=function(a){this.elements&&(this.elements=this.elements.filter(function(r){return r.id!==a}))},t.updateElementPropsById=function(a,r){this.elements&&(this.elements=this.elements.map(function(i){return i.id===a?i.updateProps(r):i})),this.update()},t.resetElementStyles=function(a){Ue(a)},t.update=function(){var a=this._getScrollPosition(),r=a[0],i=a[1];this.scroll.setScroll(r,i),this._setViewSize(),this._updateAllElements({updateCache:!0})},t.updateScrollContainer=function(a){this._removeListeners(this.viewEl),this.viewEl=a,this._hasScrollContainer=!!a,this.view=new On({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:a}),this._setViewSize(),this._addListeners(this.viewEl),this._updateAllElements({updateCache:!0})},t.disableParallaxController=function(){this.disabled=!0,this._removeListeners(this.viewEl),this.elements&&this.elements.forEach(function(a){return Ue(a)})},t.enableParallaxController=function(){var a=this;this.disabled=!1,this.elements&&this.elements.forEach(function(r){return r.updateElementOptions({disabledParallaxController:!1,scrollAxis:a.scrollAxis})}),this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize()},t.disableAllElements=function(){console.warn("deprecated: use disableParallaxController() instead"),this.elements&&(this.elements=this.elements.map(function(a){return a.updateProps({disabled:!0})})),this.update()},t.enableAllElements=function(){console.warn("deprecated: use enableParallaxController() instead"),this.elements&&(this.elements=this.elements.map(function(a){return a.updateProps({disabled:!1})})),this.update()},t.destroy=function(){this._removeListeners(this.viewEl),this.elements&&this.elements.forEach(function(a){return Ue(a)}),this.elements=void 0},e}();function Pe(){return Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Pe.apply(this,arguments)}function Dt(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Xi(e){return Object.keys(e).forEach(function(t){return e[t]===void 0&&delete e[t]}),e}var $i=["disabled","easing","endScroll","onChange","onEnter","onExit","onProgressChange","opacity","rootMargin","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","shouldAlwaysCompleteAnimation","shouldDisableScalingTranslations","speed","startScroll","targetElement","translateX","translateY"];function ca(e){var t=e.disabled,n=e.easing,a=e.endScroll,r=e.onChange,i=e.onEnter,o=e.onExit,s=e.onProgressChange,l=e.opacity,f=e.rootMargin,c=e.rotate,h=e.rotateX,d=e.rotateY,m=e.rotateZ,g=e.scale,E=e.scaleX,S=e.scaleY,_=e.scaleZ,k=e.shouldAlwaysCompleteAnimation,O=e.shouldDisableScalingTranslations,y=e.speed,p=e.startScroll,u=e.targetElement,b=e.translateX,v=e.translateY,C=Dt(e,$i),I=Xi({disabled:t,easing:n,endScroll:a,onChange:r,onEnter:i,onExit:o,onProgressChange:s,opacity:l,rootMargin:f,rotate:c,rotateX:h,rotateY:d,rotateZ:m,scale:g,scaleX:E,scaleY:S,scaleZ:_,shouldAlwaysCompleteAnimation:k,shouldDisableScalingTranslations:O,speed:y,startScroll:p,targetElement:u,translateX:b,translateY:v});return{parallaxProps:I,rest:C}}function Ui(e){z.useEffect(function(){var t=typeof window>"u",n=e instanceof ua;if(!t&&!e&&!n)throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.")},[e])}var da=V.createContext(null);function Bi(){var e=z.useContext(da),t=typeof window>"u";if(t)return null;if(!e)throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");return e}function Vi(e){var t=Bi(),n=z.useRef(null),a=ca(e),r=a.parallaxProps;Ui(t);var i=z.useState(),o=i[0],s=i[1];return z.useEffect(function(){var l;if(n.current instanceof HTMLElement){var f={el:n.current,props:r};l=t==null?void 0:t.createElement(f),s(l)}else throw new Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");return function(){l&&(t==null||t.removeElementById(l.id))}},[]),z.useEffect(function(){o&&(e.disabled&&(t==null||t.resetElementStyles(o)),t==null||t.updateElementPropsById(o.id,r))},[e.disabled,e.easing,e.endScroll,e.onChange,e.onEnter,e.onExit,e.onProgressChange,e.opacity,e.rootMargin,e.rotate,e.rotateX,e.rotateY,e.rotateZ,e.scale,e.scaleX,e.scaleY,e.scaleZ,e.shouldAlwaysCompleteAnimation,e.shouldDisableScalingTranslations,e.speed,e.startScroll,e.targetElement,e.translateX,e.translateY]),{ref:n,controller:t,element:o}}var Qi={height:0};function qi(e){if(Array.isArray(e.translateY)){var t=me(e.translateY[0]),n=me(e.translateY[1]);if(t.unit==="px"&&n.unit==="px")return{top:Math.abs(n.value)*-1+"px",bottom:Math.abs(t.value)*-1+"px"};if(t.unit==="%"&&n.unit==="%"){var a,r,i=(a=(r=e.targetElement)==null?void 0:r.getBoundingClientRect())!=null?a:Qi,o=Math.abs(i.height*.01*n.value)*-1,s=Math.abs(i.height*.01*t.value)*-1;return{top:o+"px",bottom:s+"px"}}}if(e.speed){var l=e.speed||0,f=Math.abs(l)*10*-1;return{top:f+"px",bottom:f+"px"}}return{}}function Gi(e){return e.image?{backgroundImage:"url("+e.image+")",backgroundPosition:"center",backgroundSize:"cover"}:{}}var Zi=["children","disabled","style","expanded","image","testId"],Ki={position:"absolute",top:0,left:0,right:0,bottom:0},Sn=function(t){var n=ca(t),a=n.parallaxProps,r=n.rest,i=r.style,o=r.expanded,s=o===void 0?!0:o,l=r.testId,f=Dt(r,Zi),c=Gi(t),h=s?qi(t):{},d=Vi(Pe({targetElement:t.targetElement,shouldDisableScalingTranslations:!0},a));return V.createElement("div",Object.assign({"data-testid":l,ref:d.ref,style:Pe({},c,Ki,h,i)},f),r.children)},Ji=["disabled","style","layers"],eo={position:"relative",overflow:"hidden",width:"100%"},io=function(t){var n=z.useState(null),a=n[0],r=n[1],i=z.useRef(null);z.useEffect(function(){r(i.current)},[]);var o=t.style,s=t.layers,l=s===void 0?[]:s,f=Dt(t,Ji);function c(){if(a){var d=l&&l.length>0;if(d)return l.map(function(m,g){return V.createElement(Sn,Object.assign({},m,{targetElement:a,key:"layer-"+g,testId:"layer-"+g}))})}return null}function h(){return a?V.Children.map(t.children,function(d){var m=d;if((m==null?void 0:m.type)===Sn){var g=V.cloneElement(m,{targetElement:a});return g}return d}):null}return V.createElement("div",Object.assign({ref:i,style:Pe({},eo,o)},f),c(),h())},to=function(t){var n=typeof window>"u";return n?null:ua.init(t)};function no(e){var t=z.useRef(null);return t.current||(t.current=to({scrollAxis:e.scrollAxis||$.vertical,scrollContainer:e.scrollContainer,disabled:e.isDisabled})),z.useEffect(function(){e.scrollContainer&&t.current&&t.current.updateScrollContainer(e.scrollContainer)},[e.scrollContainer,t.current]),z.useEffect(function(){e.isDisabled&&t.current&&t.current.disableParallaxController(),!e.isDisabled&&t.current&&t.current.enableParallaxController()},[e.isDisabled,t.current]),z.useEffect(function(){return function(){t!=null&&t.current&&(t==null||t.current.destroy())}},[]),V.createElement(da.Provider,{value:t.current},e.children)}function oo({children:e}){return z.useEffect(()=>{const t=localStorage.getItem("theme")||"dark";document.body.dataset.theme=t},[]),j(ma,{children:[A(hi,{}),A(no,{children:A("div",{className:"sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",children:e})}),A(oi,{})]})}export{di as F,oo as P,io as a};
