function V8(t,e){for(var i=0;i<e.length;i++){const r=e[i];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();var DH=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var md={exports:{}},ks={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function z8(){if(ug)return ks;ug=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,l){var c=null;if(l!==void 0&&(c=""+l),o.key!==void 0&&(c=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:t,type:r,key:c,ref:o!==void 0?o:null,props:l}}return ks.Fragment=e,ks.jsx=i,ks.jsxs=i,ks}var cg;function k8(){return cg||(cg=1,md.exports=z8()),md.exports}var x=k8(),gd={exports:{}},Ns={},yd={exports:{}},vd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function N8(){return fg||(fg=1,function(t){function e(B,K){var Q=B.length;B.push(K);e:for(;0<Q;){var ee=Q-1>>>1,H=B[ee];if(0<o(H,K))B[ee]=K,B[Q]=H,Q=ee;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],Q=B.pop();if(Q!==K){B[0]=Q;e:for(var ee=0,H=B.length,F=H>>>1;ee<F;){var ne=2*(ee+1)-1,ae=B[ne],ue=ne+1,be=B[ue];if(0>o(ae,Q))ue<H&&0>o(be,ae)?(B[ee]=be,B[ue]=Q,ee=ue):(B[ee]=ae,B[ne]=Q,ee=ne);else if(ue<H&&0>o(be,Q))B[ee]=be,B[ue]=Q,ee=ue;else break e}}return K}function o(B,K){var Q=B.sortIndex-K.sortIndex;return Q!==0?Q:B.id-K.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();t.unstable_now=function(){return c.now()-f}}var d=[],p=[],m=1,y=null,v=3,w=!1,S=!1,E=!1,O=!1,A=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function j(B){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=B)r(p),K.sortIndex=K.expirationTime,e(d,K);else break;K=i(p)}}function L(B){if(E=!1,j(B),!S)if(i(d)!==null)S=!0,N||(N=!0,te());else{var K=i(p);K!==null&&re(L,K.startTime-B)}}var N=!1,z=-1,U=5,_=-1;function Y(){return O?!0:!(t.unstable_now()-_<U)}function X(){if(O=!1,N){var B=t.unstable_now();_=B;var K=!0;try{e:{S=!1,E&&(E=!1,T(z),z=-1),w=!0;var Q=v;try{t:{for(j(B),y=i(d);y!==null&&!(y.expirationTime>B&&Y());){var ee=y.callback;if(typeof ee=="function"){y.callback=null,v=y.priorityLevel;var H=ee(y.expirationTime<=B);if(B=t.unstable_now(),typeof H=="function"){y.callback=H,j(B),K=!0;break t}y===i(d)&&r(d),j(B)}else r(d);y=i(d)}if(y!==null)K=!0;else{var F=i(p);F!==null&&re(L,F.startTime-B),K=!1}}break e}finally{y=null,v=Q,w=!1}K=void 0}}finally{K?te():N=!1}}}var te;if(typeof C=="function")te=function(){C(X)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,oe=ie.port2;ie.port1.onmessage=X,te=function(){oe.postMessage(null)}}else te=function(){A(X,0)};function re(B,K){z=A(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_next=function(B){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var Q=v;v=K;try{return B()}finally{v=Q}},t.unstable_requestPaint=function(){O=!0},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=v;v=B;try{return K()}finally{v=Q}},t.unstable_scheduleCallback=function(B,K,Q){var ee=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ee+Q:ee):Q=ee,B){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=Q+H,B={id:m++,callback:K,priorityLevel:B,startTime:Q,expirationTime:H,sortIndex:-1},Q>ee?(B.sortIndex=Q,e(p,B),i(d)===null&&B===i(p)&&(E?(T(z),z=-1):E=!0,re(L,Q-ee))):(B.sortIndex=H,e(d,B),S||w||(S=!0,N||(N=!0,te()))),B},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(B){var K=v;return function(){var Q=v;v=K;try{return B.apply(this,arguments)}finally{v=Q}}}}(vd)),vd}var dg;function P8(){return dg||(dg=1,yd.exports=N8()),yd.exports}var xd={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function B8(){if(hg)return ge;hg=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.iterator;function v(H){return H===null||typeof H!="object"?null:(H=y&&H[y]||H["@@iterator"],typeof H=="function"?H:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,E={};function O(H,F,ne){this.props=H,this.context=F,this.refs=E,this.updater=ne||w}O.prototype.isReactComponent={},O.prototype.setState=function(H,F){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,F,"setState")},O.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function A(){}A.prototype=O.prototype;function T(H,F,ne){this.props=H,this.context=F,this.refs=E,this.updater=ne||w}var C=T.prototype=new A;C.constructor=T,S(C,O.prototype),C.isPureReactComponent=!0;var j=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},N=Object.prototype.hasOwnProperty;function z(H,F,ne,ae,ue,be){return ne=be.ref,{$$typeof:t,type:H,key:F,ref:ne!==void 0?ne:null,props:be}}function U(H,F){return z(H.type,F,void 0,void 0,void 0,H.props)}function _(H){return typeof H=="object"&&H!==null&&H.$$typeof===t}function Y(H){var F={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(ne){return F[ne]})}var X=/\/+/g;function te(H,F){return typeof H=="object"&&H!==null&&H.key!=null?Y(""+H.key):F.toString(36)}function ie(){}function oe(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(ie,ie):(H.status="pending",H.then(function(F){H.status==="pending"&&(H.status="fulfilled",H.value=F)},function(F){H.status==="pending"&&(H.status="rejected",H.reason=F)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function re(H,F,ne,ae,ue){var be=typeof H;(be==="undefined"||be==="boolean")&&(H=null);var fe=!1;if(H===null)fe=!0;else switch(be){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(H.$$typeof){case t:case e:fe=!0;break;case m:return fe=H._init,re(fe(H._payload),F,ne,ae,ue)}}if(fe)return ue=ue(H),fe=ae===""?"."+te(H,0):ae,j(ue)?(ne="",fe!=null&&(ne=fe.replace(X,"$&/")+"/"),re(ue,F,ne,"",function(vt){return vt})):ue!=null&&(_(ue)&&(ue=U(ue,ne+(ue.key==null||H&&H.key===ue.key?"":(""+ue.key).replace(X,"$&/")+"/")+fe)),F.push(ue)),1;fe=0;var rt=ae===""?".":ae+":";if(j(H))for(var Re=0;Re<H.length;Re++)ae=H[Re],be=rt+te(ae,Re),fe+=re(ae,F,ne,be,ue);else if(Re=v(H),typeof Re=="function")for(H=Re.call(H),Re=0;!(ae=H.next()).done;)ae=ae.value,be=rt+te(ae,Re++),fe+=re(ae,F,ne,be,ue);else if(be==="object"){if(typeof H.then=="function")return re(oe(H),F,ne,ae,ue);throw F=String(H),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return fe}function B(H,F,ne){if(H==null)return H;var ae=[],ue=0;return re(H,ae,"","",function(be){return F.call(ne,be,ue++)}),ae}function K(H){if(H._status===-1){var F=H._result;F=F(),F.then(function(ne){(H._status===0||H._status===-1)&&(H._status=1,H._result=ne)},function(ne){(H._status===0||H._status===-1)&&(H._status=2,H._result=ne)}),H._status===-1&&(H._status=0,H._result=F)}if(H._status===1)return H._result.default;throw H._result}var Q=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function ee(){}return ge.Children={map:B,forEach:function(H,F,ne){B(H,function(){F.apply(this,arguments)},ne)},count:function(H){var F=0;return B(H,function(){F++}),F},toArray:function(H){return B(H,function(F){return F})||[]},only:function(H){if(!_(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},ge.Component=O,ge.Fragment=i,ge.Profiler=o,ge.PureComponent=T,ge.StrictMode=r,ge.Suspense=d,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ge.__COMPILER_RUNTIME={__proto__:null,c:function(H){return L.H.useMemoCache(H)}},ge.cache=function(H){return function(){return H.apply(null,arguments)}},ge.cloneElement=function(H,F,ne){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var ae=S({},H.props),ue=H.key,be=void 0;if(F!=null)for(fe in F.ref!==void 0&&(be=void 0),F.key!==void 0&&(ue=""+F.key),F)!N.call(F,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&F.ref===void 0||(ae[fe]=F[fe]);var fe=arguments.length-2;if(fe===1)ae.children=ne;else if(1<fe){for(var rt=Array(fe),Re=0;Re<fe;Re++)rt[Re]=arguments[Re+2];ae.children=rt}return z(H.type,ue,void 0,void 0,be,ae)},ge.createContext=function(H){return H={$$typeof:c,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:l,_context:H},H},ge.createElement=function(H,F,ne){var ae,ue={},be=null;if(F!=null)for(ae in F.key!==void 0&&(be=""+F.key),F)N.call(F,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ue[ae]=F[ae]);var fe=arguments.length-2;if(fe===1)ue.children=ne;else if(1<fe){for(var rt=Array(fe),Re=0;Re<fe;Re++)rt[Re]=arguments[Re+2];ue.children=rt}if(H&&H.defaultProps)for(ae in fe=H.defaultProps,fe)ue[ae]===void 0&&(ue[ae]=fe[ae]);return z(H,be,void 0,void 0,null,ue)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(H){return{$$typeof:f,render:H}},ge.isValidElement=_,ge.lazy=function(H){return{$$typeof:m,_payload:{_status:-1,_result:H},_init:K}},ge.memo=function(H,F){return{$$typeof:p,type:H,compare:F===void 0?null:F}},ge.startTransition=function(H){var F=L.T,ne={};L.T=ne;try{var ae=H(),ue=L.S;ue!==null&&ue(ne,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(ee,Q)}catch(be){Q(be)}finally{L.T=F}},ge.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ge.use=function(H){return L.H.use(H)},ge.useActionState=function(H,F,ne){return L.H.useActionState(H,F,ne)},ge.useCallback=function(H,F){return L.H.useCallback(H,F)},ge.useContext=function(H){return L.H.useContext(H)},ge.useDebugValue=function(){},ge.useDeferredValue=function(H,F){return L.H.useDeferredValue(H,F)},ge.useEffect=function(H,F,ne){var ae=L.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(H,F)},ge.useId=function(){return L.H.useId()},ge.useImperativeHandle=function(H,F,ne){return L.H.useImperativeHandle(H,F,ne)},ge.useInsertionEffect=function(H,F){return L.H.useInsertionEffect(H,F)},ge.useLayoutEffect=function(H,F){return L.H.useLayoutEffect(H,F)},ge.useMemo=function(H,F){return L.H.useMemo(H,F)},ge.useOptimistic=function(H,F){return L.H.useOptimistic(H,F)},ge.useReducer=function(H,F,ne){return L.H.useReducer(H,F,ne)},ge.useRef=function(H){return L.H.useRef(H)},ge.useState=function(H){return L.H.useState(H)},ge.useSyncExternalStore=function(H,F,ne){return L.H.useSyncExternalStore(H,F,ne)},ge.useTransition=function(){return L.H.useTransition()},ge.version="19.1.1",ge}var pg;function hh(){return pg||(pg=1,xd.exports=B8()),xd.exports}var bd={exports:{}},wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function _8(){if(mg)return wt;mg=1;var t=hh();function e(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(d,p,m){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:d,containerInfo:p,implementation:m}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wt.createPortal=function(d,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return l(d,p,null,m)},wt.flushSync=function(d){var p=c.T,m=r.p;try{if(c.T=null,r.p=2,d)return d()}finally{c.T=p,r.p=m,r.d.f()}},wt.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(d,p))},wt.prefetchDNS=function(d){typeof d=="string"&&r.d.D(d)},wt.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var m=p.as,y=f(m,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,w=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?r.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:w}):m==="script"&&r.d.X(d,{crossOrigin:y,integrity:v,fetchPriority:w,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wt.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=f(p.as,p.crossOrigin);r.d.M(d,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(d)},wt.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,y=f(m,p.crossOrigin);r.d.L(d,m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wt.preloadModule=function(d,p){if(typeof d=="string")if(p){var m=f(p.as,p.crossOrigin);r.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(d)},wt.requestFormReset=function(d){r.d.r(d)},wt.unstable_batchedUpdates=function(d,p){return d(p)},wt.useFormState=function(d,p,m){return c.H.useFormState(d,p,m)},wt.useFormStatus=function(){return c.H.useHostTransitionStatus()},wt.version="19.1.1",wt}var gg;function U8(){if(gg)return bd.exports;gg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),bd.exports=_8(),bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function $8(){if(yg)return Ns;yg=1;var t=P8(),e=hh(),i=U8();function r(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,s=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(s=a.return),n=a.return;while(n)}return a.tag===3?s:null}function c(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(r(188))}function d(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(r(188));return a!==n?null:n}for(var s=n,u=a;;){var h=s.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){s=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===s)return f(h),n;if(g===u)return f(h),a;g=g.sibling}throw Error(r(188))}if(s.return!==u.return)s=h,u=g;else{for(var b=!1,M=h.child;M;){if(M===s){b=!0,s=h,u=g;break}if(M===u){b=!0,u=h,s=g;break}M=M.sibling}if(!b){for(M=g.child;M;){if(M===s){b=!0,s=g,u=h;break}if(M===u){b=!0,u=g,s=h;break}M=M.sibling}if(!b)throw Error(r(189))}}if(s.alternate!==u)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?n:a}function p(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=p(n),a!==null)return a;n=n.sibling}return null}var m=Object.assign,y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),T=Symbol.for("react.consumer"),C=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Symbol.for("react.client.reference");function oe(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ie?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case O:return"Profiler";case E:return"StrictMode";case L:return"Suspense";case N:return"SuspenseList";case _:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case w:return"Portal";case C:return(n.displayName||"Context")+".Provider";case T:return(n._context.displayName||"Context")+".Consumer";case j:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case z:return a=n.displayName||null,a!==null?a:oe(n.type)||"Memo";case U:a=n._payload,n=n._init;try{return oe(n(a))}catch{}}return null}var re=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},ee=[],H=-1;function F(n){return{current:n}}function ne(n){0>H||(n.current=ee[H],ee[H]=null,H--)}function ae(n,a){H++,ee[H]=n.current,n.current=a}var ue=F(null),be=F(null),fe=F(null),rt=F(null);function Re(n,a){switch(ae(fe,a),ae(be,n),ae(ue,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?Nm(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=Nm(a),n=Pm(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(ue),ae(ue,n)}function vt(){ne(ue),ne(be),ne(fe)}function qi(n){n.memoizedState!==null&&ae(rt,n);var a=ue.current,s=Pm(a,n.type);a!==s&&(ae(be,n),ae(ue,s))}function Nn(n){be.current===n&&(ne(ue),ne(be)),rt.current===n&&(ne(rt),js._currentValue=Q)}var Zt=Object.prototype.hasOwnProperty,tc=t.unstable_scheduleCallback,nc=t.unstable_cancelCallback,d6=t.unstable_shouldYield,h6=t.unstable_requestPaint,vn=t.unstable_now,p6=t.unstable_getCurrentPriorityLevel,yp=t.unstable_ImmediatePriority,vp=t.unstable_UserBlockingPriority,To=t.unstable_NormalPriority,m6=t.unstable_LowPriority,xp=t.unstable_IdlePriority,g6=t.log,y6=t.unstable_setDisableYieldValue,Br=null,Nt=null;function ui(n){if(typeof g6=="function"&&y6(n),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(Br,n)}catch{}}var Pt=Math.clz32?Math.clz32:b6,v6=Math.log,x6=Math.LN2;function b6(n){return n>>>=0,n===0?32:31-(v6(n)/x6|0)|0}var Eo=256,Mo=4194304;function Ii(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ao(n,a,s){var u=n.pendingLanes;if(u===0)return 0;var h=0,g=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var M=u&134217727;return M!==0?(u=M&~g,u!==0?h=Ii(u):(b&=M,b!==0?h=Ii(b):s||(s=M&~n,s!==0&&(h=Ii(s))))):(M=u&~g,M!==0?h=Ii(M):b!==0?h=Ii(b):s||(s=u&~n,s!==0&&(h=Ii(s)))),h===0?0:a!==0&&a!==h&&(a&g)===0&&(g=h&-h,s=a&-a,g>=s||g===32&&(s&4194048)!==0)?a:h}function _r(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function w6(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bp(){var n=Eo;return Eo<<=1,(Eo&4194048)===0&&(Eo=256),n}function wp(){var n=Mo;return Mo<<=1,(Mo&62914560)===0&&(Mo=4194304),n}function ic(n){for(var a=[],s=0;31>s;s++)a.push(n);return a}function Ur(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function S6(n,a,s,u,h,g){var b=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var M=n.entanglements,V=n.expirationTimes,G=n.hiddenUpdates;for(s=b&~s;0<s;){var Z=31-Pt(s),J=1<<Z;M[Z]=0,V[Z]=-1;var q=G[Z];if(q!==null)for(G[Z]=null,Z=0;Z<q.length;Z++){var I=q[Z];I!==null&&(I.lane&=-536870913)}s&=~J}u!==0&&Sp(n,u,0),g!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=g&~(b&~a))}function Sp(n,a,s){n.pendingLanes|=a,n.suspendedLanes&=~a;var u=31-Pt(a);n.entangledLanes|=a,n.entanglements[u]=n.entanglements[u]|1073741824|s&4194090}function Cp(n,a){var s=n.entangledLanes|=a;for(n=n.entanglements;s;){var u=31-Pt(s),h=1<<u;h&a|n[u]&a&&(n[u]|=a),s&=~h}}function ac(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function rc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Tp(){var n=K.p;return n!==0?n:(n=window.event,n===void 0?32:ig(n.type))}function C6(n,a){var s=K.p;try{return K.p=n,a()}finally{K.p=s}}var ci=Math.random().toString(36).slice(2),xt="__reactFiber$"+ci,Ot="__reactProps$"+ci,wa="__reactContainer$"+ci,sc="__reactEvents$"+ci,T6="__reactListeners$"+ci,E6="__reactHandles$"+ci,Ep="__reactResources$"+ci,$r="__reactMarker$"+ci;function oc(n){delete n[xt],delete n[Ot],delete n[sc],delete n[T6],delete n[E6]}function Sa(n){var a=n[xt];if(a)return a;for(var s=n.parentNode;s;){if(a=s[wa]||s[xt]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(n=$m(n);n!==null;){if(s=n[xt])return s;n=$m(n)}return a}n=s,s=n.parentNode}return null}function Ca(n){if(n=n[xt]||n[wa]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Gr(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(r(33))}function Ta(n){var a=n[Ep];return a||(a=n[Ep]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function st(n){n[$r]=!0}var Mp=new Set,Ap={};function Yi(n,a){Ea(n,a),Ea(n+"Capture",a)}function Ea(n,a){for(Ap[n]=a,n=0;n<a.length;n++)Mp.add(a[n])}var M6=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lp={},Op={};function A6(n){return Zt.call(Op,n)?!0:Zt.call(Lp,n)?!1:M6.test(n)?Op[n]=!0:(Lp[n]=!0,!1)}function Lo(n,a,s){if(A6(a))if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var u=a.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+s)}}function Oo(n,a,s){if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+s)}}function Pn(n,a,s,u){if(u===null)n.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(a,s,""+u)}}var lc,Rp;function Ma(n){if(lc===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);lc=a&&a[1]||"",Rp=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lc+n+Rp}var uc=!1;function cc(n,a){if(!n||uc)return"";uc=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(a){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(I){var q=I}Reflect.construct(n,[],J)}else{try{J.call()}catch(I){q=I}n.call(J.prototype)}}else{try{throw Error()}catch(I){q=I}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(I){if(I&&q&&typeof I.stack=="string")return[I.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),b=g[0],M=g[1];if(b&&M){var V=b.split(`
`),G=M.split(`
`);for(h=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;h<G.length&&!G[h].includes("DetermineComponentFrameRoot");)h++;if(u===V.length||h===G.length)for(u=V.length-1,h=G.length-1;1<=u&&0<=h&&V[u]!==G[h];)h--;for(;1<=u&&0<=h;u--,h--)if(V[u]!==G[h]){if(u!==1||h!==1)do if(u--,h--,0>h||V[u]!==G[h]){var Z=`
`+V[u].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=u&&0<=h);break}}}finally{uc=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Ma(s):""}function L6(n){switch(n.tag){case 26:case 27:case 5:return Ma(n.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 15:return cc(n.type,!1);case 11:return cc(n.type.render,!1);case 1:return cc(n.type,!0);case 31:return Ma("Activity");default:return""}}function jp(n){try{var a="";do a+=L6(n),n=n.return;while(n);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Kt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Dp(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function O6(n){var a=Dp(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),u=""+n[a];if(!n.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,g=s.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return h.call(this)},set:function(b){u=""+b,g.call(this,b)}}),Object.defineProperty(n,a,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Ro(n){n._valueTracker||(n._valueTracker=O6(n))}function Hp(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var s=a.getValue(),u="";return n&&(u=Dp(n)?n.checked?"true":"false":n.value),n=u,n!==s?(a.setValue(n),!0):!1}function jo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var R6=/[\n"\\]/g;function Qt(n){return n.replace(R6,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function fc(n,a,s,u,h,g,b,M){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),a!=null?b==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+Kt(a)):n.value!==""+Kt(a)&&(n.value=""+Kt(a)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),a!=null?dc(n,b,Kt(a)):s!=null?dc(n,b,Kt(s)):u!=null&&n.removeAttribute("value"),h==null&&g!=null&&(n.defaultChecked=!!g),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?n.name=""+Kt(M):n.removeAttribute("name")}function Vp(n,a,s,u,h,g,b,M){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),a!=null||s!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;s=s!=null?""+Kt(s):"",a=a!=null?""+Kt(a):s,M||a===n.value||(n.value=a),n.defaultValue=a}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=M?n.checked:!!u,n.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b)}function dc(n,a,s){a==="number"&&jo(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Aa(n,a,s,u){if(n=n.options,a){a={};for(var h=0;h<s.length;h++)a["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=a.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&u&&(n[s].defaultSelected=!0)}else{for(s=""+Kt(s),a=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}a!==null||n[h].disabled||(a=n[h])}a!==null&&(a.selected=!0)}}function zp(n,a,s){if(a!=null&&(a=""+Kt(a),a!==n.value&&(n.value=a),s==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=s!=null?""+Kt(s):""}function kp(n,a,s,u){if(a==null){if(u!=null){if(s!=null)throw Error(r(92));if(re(u)){if(1<u.length)throw Error(r(93));u=u[0]}s=u}s==null&&(s=""),a=s}s=Kt(a),n.defaultValue=s,u=n.textContent,u===s&&u!==""&&u!==null&&(n.value=u)}function La(n,a){if(a){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=a;return}}n.textContent=a}var j6=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Np(n,a,s){var u=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":u?n.setProperty(a,s):typeof s!="number"||s===0||j6.has(a)?a==="float"?n.cssFloat=s:n[a]=(""+s).trim():n[a]=s+"px"}function Pp(n,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(n=n.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||a!=null&&a.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var h in a)u=a[h],a.hasOwnProperty(h)&&s[h]!==u&&Np(n,h,u)}else for(var g in a)a.hasOwnProperty(g)&&Np(n,g,a[g])}function hc(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D6=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),H6=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Do(n){return H6.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var pc=null;function mc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Oa=null,Ra=null;function Bp(n){var a=Ca(n);if(a&&(n=a.stateNode)){var s=n[Ot]||null;e:switch(n=a.stateNode,a.type){case"input":if(fc(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Qt(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var u=s[a];if(u!==n&&u.form===n.form){var h=u[Ot]||null;if(!h)throw Error(r(90));fc(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<s.length;a++)u=s[a],u.form===n.form&&Hp(u)}break e;case"textarea":zp(n,s.value,s.defaultValue);break e;case"select":a=s.value,a!=null&&Aa(n,!!s.multiple,a,!1)}}}var gc=!1;function _p(n,a,s){if(gc)return n(a,s);gc=!0;try{var u=n(a);return u}finally{if(gc=!1,(Oa!==null||Ra!==null)&&(yl(),Oa&&(a=Oa,n=Ra,Ra=Oa=null,Bp(a),n)))for(a=0;a<n.length;a++)Bp(n[a])}}function qr(n,a){var s=n.stateNode;if(s===null)return null;var u=s[Ot]||null;if(u===null)return null;s=u[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=!1;if(Bn)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){yc=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{yc=!1}var fi=null,vc=null,Ho=null;function Up(){if(Ho)return Ho;var n,a=vc,s=a.length,u,h="value"in fi?fi.value:fi.textContent,g=h.length;for(n=0;n<s&&a[n]===h[n];n++);var b=s-n;for(u=1;u<=b&&a[s-u]===h[g-u];u++);return Ho=h.slice(n,1<u?1-u:void 0)}function Vo(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function zo(){return!0}function $p(){return!1}function Rt(n){function a(s,u,h,g,b){this._reactName=s,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var M in n)n.hasOwnProperty(M)&&(s=n[M],this[M]=s?s(g):g[M]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?zo:$p,this.isPropagationStopped=$p,this}return m(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),a}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=Rt(Xi),Yr=m({},Xi,{view:0,detail:0}),V6=Rt(Yr),xc,bc,Xr,No=m({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xr&&(Xr&&n.type==="mousemove"?(xc=n.screenX-Xr.screenX,bc=n.screenY-Xr.screenY):bc=xc=0,Xr=n),xc)},movementY:function(n){return"movementY"in n?n.movementY:bc}}),Gp=Rt(No),z6=m({},No,{dataTransfer:0}),k6=Rt(z6),N6=m({},Yr,{relatedTarget:0}),wc=Rt(N6),P6=m({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),B6=Rt(P6),_6=m({},Xi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),U6=Rt(_6),$6=m({},Xi,{data:0}),qp=Rt($6),G6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y6(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=I6[n])?!!a[n]:!1}function Sc(){return Y6}var X6=m({},Yr,{key:function(n){if(n.key){var a=G6[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Vo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?q6[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(n){return n.type==="keypress"?Vo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),F6=Rt(X6),Z6=m({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=Rt(Z6),K6=m({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),Q6=Rt(K6),W6=m({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),J6=Rt(W6),e7=m({},No,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),t7=Rt(e7),n7=m({},Xi,{newState:0,oldState:0}),i7=Rt(n7),a7=[9,13,27,32],Cc=Bn&&"CompositionEvent"in window,Fr=null;Bn&&"documentMode"in document&&(Fr=document.documentMode);var r7=Bn&&"TextEvent"in window&&!Fr,Yp=Bn&&(!Cc||Fr&&8<Fr&&11>=Fr),Xp=" ",Fp=!1;function Zp(n,a){switch(n){case"keyup":return a7.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ja=!1;function s7(n,a){switch(n){case"compositionend":return Kp(a);case"keypress":return a.which!==32?null:(Fp=!0,Xp);case"textInput":return n=a.data,n===Xp&&Fp?null:n;default:return null}}function o7(n,a){if(ja)return n==="compositionend"||!Cc&&Zp(n,a)?(n=Up(),Ho=vc=fi=null,ja=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Yp&&a.locale!=="ko"?null:a.data;default:return null}}var l7={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!l7[n.type]:a==="textarea"}function Wp(n,a,s,u){Oa?Ra?Ra.push(u):Ra=[u]:Oa=u,a=Cl(a,"onChange"),0<a.length&&(s=new ko("onChange","change",null,s,u),n.push({event:s,listeners:a}))}var Zr=null,Kr=null;function u7(n){Dm(n,0)}function Po(n){var a=Gr(n);if(Hp(a))return n}function Jp(n,a){if(n==="change")return a}var e1=!1;if(Bn){var Tc;if(Bn){var Ec="oninput"in document;if(!Ec){var t1=document.createElement("div");t1.setAttribute("oninput","return;"),Ec=typeof t1.oninput=="function"}Tc=Ec}else Tc=!1;e1=Tc&&(!document.documentMode||9<document.documentMode)}function n1(){Zr&&(Zr.detachEvent("onpropertychange",i1),Kr=Zr=null)}function i1(n){if(n.propertyName==="value"&&Po(Kr)){var a=[];Wp(a,Kr,n,mc(n)),_p(u7,a)}}function c7(n,a,s){n==="focusin"?(n1(),Zr=a,Kr=s,Zr.attachEvent("onpropertychange",i1)):n==="focusout"&&n1()}function f7(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Po(Kr)}function d7(n,a){if(n==="click")return Po(a)}function h7(n,a){if(n==="input"||n==="change")return Po(a)}function p7(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var Bt=typeof Object.is=="function"?Object.is:p7;function Qr(n,a){if(Bt(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var s=Object.keys(n),u=Object.keys(a);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var h=s[u];if(!Zt.call(a,h)||!Bt(n[h],a[h]))return!1}return!0}function a1(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function r1(n,a){var s=a1(n);n=0;for(var u;s;){if(s.nodeType===3){if(u=n+s.textContent.length,n<=a&&u>=a)return{node:s,offset:a-n};n=u}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=a1(s)}}function s1(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?s1(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function o1(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=jo(n.document);a instanceof n.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)n=a.contentWindow;else break;a=jo(n.document)}return a}function Mc(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var m7=Bn&&"documentMode"in document&&11>=document.documentMode,Da=null,Ac=null,Wr=null,Lc=!1;function l1(n,a,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Lc||Da==null||Da!==jo(u)||(u=Da,"selectionStart"in u&&Mc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Wr&&Qr(Wr,u)||(Wr=u,u=Cl(Ac,"onSelect"),0<u.length&&(a=new ko("onSelect","select",null,a,s),n.push({event:a,listeners:u}),a.target=Da)))}function Fi(n,a){var s={};return s[n.toLowerCase()]=a.toLowerCase(),s["Webkit"+n]="webkit"+a,s["Moz"+n]="moz"+a,s}var Ha={animationend:Fi("Animation","AnimationEnd"),animationiteration:Fi("Animation","AnimationIteration"),animationstart:Fi("Animation","AnimationStart"),transitionrun:Fi("Transition","TransitionRun"),transitionstart:Fi("Transition","TransitionStart"),transitioncancel:Fi("Transition","TransitionCancel"),transitionend:Fi("Transition","TransitionEnd")},Oc={},u1={};Bn&&(u1=document.createElement("div").style,"AnimationEvent"in window||(delete Ha.animationend.animation,delete Ha.animationiteration.animation,delete Ha.animationstart.animation),"TransitionEvent"in window||delete Ha.transitionend.transition);function Zi(n){if(Oc[n])return Oc[n];if(!Ha[n])return n;var a=Ha[n],s;for(s in a)if(a.hasOwnProperty(s)&&s in u1)return Oc[n]=a[s];return n}var c1=Zi("animationend"),f1=Zi("animationiteration"),d1=Zi("animationstart"),g7=Zi("transitionrun"),y7=Zi("transitionstart"),v7=Zi("transitioncancel"),h1=Zi("transitionend"),p1=new Map,Rc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rc.push("scrollEnd");function cn(n,a){p1.set(n,a),Yi(a,[n])}var m1=new WeakMap;function Wt(n,a){if(typeof n=="object"&&n!==null){var s=m1.get(n);return s!==void 0?s:(a={value:n,source:a,stack:jp(a)},m1.set(n,a),a)}return{value:n,source:a,stack:jp(a)}}var Jt=[],Va=0,jc=0;function Bo(){for(var n=Va,a=jc=Va=0;a<n;){var s=Jt[a];Jt[a++]=null;var u=Jt[a];Jt[a++]=null;var h=Jt[a];Jt[a++]=null;var g=Jt[a];if(Jt[a++]=null,u!==null&&h!==null){var b=u.pending;b===null?h.next=h:(h.next=b.next,b.next=h),u.pending=h}g!==0&&g1(s,h,g)}}function _o(n,a,s,u){Jt[Va++]=n,Jt[Va++]=a,Jt[Va++]=s,Jt[Va++]=u,jc|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Dc(n,a,s,u){return _o(n,a,s,u),Uo(n)}function za(n,a){return _o(n,null,null,a),Uo(n)}function g1(n,a,s){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s);for(var h=!1,g=n.return;g!==null;)g.childLanes|=s,u=g.alternate,u!==null&&(u.childLanes|=s),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(h=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,h&&a!==null&&(h=31-Pt(s),n=g.hiddenUpdates,u=n[h],u===null?n[h]=[a]:u.push(a),a.lane=s|536870912),g):null}function Uo(n){if(50<Cs)throw Cs=0,Bf=null,Error(r(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var ka={};function x7(n,a,s,u){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(n,a,s,u){return new x7(n,a,s,u)}function Hc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _n(n,a){var s=n.alternate;return s===null?(s=_t(n.tag,a,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=a,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,a=n.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function y1(n,a){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,a=s.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function $o(n,a,s,u,h,g){var b=0;if(u=n,typeof n=="function")Hc(n)&&(b=1);else if(typeof n=="string")b=w8(n,s,ue.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case _:return n=_t(31,s,a,h),n.elementType=_,n.lanes=g,n;case S:return Ki(s.children,h,g,a);case E:b=8,h|=24;break;case O:return n=_t(12,s,a,h|2),n.elementType=O,n.lanes=g,n;case L:return n=_t(13,s,a,h),n.elementType=L,n.lanes=g,n;case N:return n=_t(19,s,a,h),n.elementType=N,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:case C:b=10;break e;case T:b=9;break e;case j:b=11;break e;case z:b=14;break e;case U:b=16,u=null;break e}b=29,s=Error(r(130,n===null?"null":typeof n,"")),u=null}return a=_t(b,s,a,h),a.elementType=n,a.type=u,a.lanes=g,a}function Ki(n,a,s,u){return n=_t(7,n,u,a),n.lanes=s,n}function Vc(n,a,s){return n=_t(6,n,null,a),n.lanes=s,n}function zc(n,a,s){return a=_t(4,n.children!==null?n.children:[],n.key,a),a.lanes=s,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Na=[],Pa=0,Go=null,qo=0,en=[],tn=0,Qi=null,Un=1,$n="";function Wi(n,a){Na[Pa++]=qo,Na[Pa++]=Go,Go=n,qo=a}function v1(n,a,s){en[tn++]=Un,en[tn++]=$n,en[tn++]=Qi,Qi=n;var u=Un;n=$n;var h=32-Pt(u)-1;u&=~(1<<h),s+=1;var g=32-Pt(a)+h;if(30<g){var b=h-h%5;g=(u&(1<<b)-1).toString(32),u>>=b,h-=b,Un=1<<32-Pt(a)+h|s<<h|u,$n=g+n}else Un=1<<g|s<<h|u,$n=n}function kc(n){n.return!==null&&(Wi(n,1),v1(n,1,0))}function Nc(n){for(;n===Go;)Go=Na[--Pa],Na[Pa]=null,qo=Na[--Pa],Na[Pa]=null;for(;n===Qi;)Qi=en[--tn],en[tn]=null,$n=en[--tn],en[tn]=null,Un=en[--tn],en[tn]=null}var Mt=null,Ye=null,Ee=!1,Ji=null,xn=!1,Pc=Error(r(519));function ea(n){var a=Error(r(418,""));throw ts(Wt(a,n)),Pc}function x1(n){var a=n.stateNode,s=n.type,u=n.memoizedProps;switch(a[xt]=n,a[Ot]=u,s){case"dialog":Se("cancel",a),Se("close",a);break;case"iframe":case"object":case"embed":Se("load",a);break;case"video":case"audio":for(s=0;s<Es.length;s++)Se(Es[s],a);break;case"source":Se("error",a);break;case"img":case"image":case"link":Se("error",a),Se("load",a);break;case"details":Se("toggle",a);break;case"input":Se("invalid",a),Vp(a,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Ro(a);break;case"select":Se("invalid",a);break;case"textarea":Se("invalid",a),kp(a,u.value,u.defaultValue,u.children),Ro(a)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||u.suppressHydrationWarning===!0||km(a.textContent,s)?(u.popover!=null&&(Se("beforetoggle",a),Se("toggle",a)),u.onScroll!=null&&Se("scroll",a),u.onScrollEnd!=null&&Se("scrollend",a),u.onClick!=null&&(a.onclick=Tl),a=!0):a=!1,a||ea(n)}function b1(n){for(Mt=n.return;Mt;)switch(Mt.tag){case 5:case 13:xn=!1;return;case 27:case 3:xn=!0;return;default:Mt=Mt.return}}function Jr(n){if(n!==Mt)return!1;if(!Ee)return b1(n),Ee=!0,!1;var a=n.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||td(n.type,n.memoizedProps)),s=!s),s&&Ye&&ea(n),b1(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(a===0){Ye=dn(n.nextSibling);break e}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;n=n.nextSibling}Ye=null}}else a===27?(a=Ye,Ai(n.type)?(n=rd,rd=null,Ye=n):Ye=a):Ye=Mt?dn(n.stateNode.nextSibling):null;return!0}function es(){Ye=Mt=null,Ee=!1}function w1(){var n=Ji;return n!==null&&(Ht===null?Ht=n:Ht.push.apply(Ht,n),Ji=null),n}function ts(n){Ji===null?Ji=[n]:Ji.push(n)}var Bc=F(null),ta=null,Gn=null;function di(n,a,s){ae(Bc,a._currentValue),a._currentValue=s}function qn(n){n._currentValue=Bc.current,ne(Bc)}function _c(n,a,s){for(;n!==null;){var u=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),n===s)break;n=n.return}}function Uc(n,a,s,u){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var g=h.dependencies;if(g!==null){var b=h.child;g=g.firstContext;e:for(;g!==null;){var M=g;g=h;for(var V=0;V<a.length;V++)if(M.context===a[V]){g.lanes|=s,M=g.alternate,M!==null&&(M.lanes|=s),_c(g.return,s,n),u||(b=null);break e}g=M.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(r(341));b.lanes|=s,g=b.alternate,g!==null&&(g.lanes|=s),_c(b,s,n),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===n){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function ns(n,a,s,u){n=null;for(var h=a,g=!1;h!==null;){if(!g){if((h.flags&524288)!==0)g=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(r(387));if(b=b.memoizedProps,b!==null){var M=h.type;Bt(h.pendingProps.value,b.value)||(n!==null?n.push(M):n=[M])}}else if(h===rt.current){if(b=h.alternate,b===null)throw Error(r(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(js):n=[js])}h=h.return}n!==null&&Uc(a,n,s,u),a.flags|=262144}function Io(n){for(n=n.firstContext;n!==null;){if(!Bt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function na(n){ta=n,Gn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function bt(n){return S1(ta,n)}function Yo(n,a){return ta===null&&na(n),S1(n,a)}function S1(n,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},Gn===null){if(n===null)throw Error(r(308));Gn=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Gn=Gn.next=a;return s}var b7=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(s,u){n.push(u)}};this.abort=function(){a.aborted=!0,n.forEach(function(s){return s()})}},w7=t.unstable_scheduleCallback,S7=t.unstable_NormalPriority,it={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $c(){return{controller:new b7,data:new Map,refCount:0}}function is(n){n.refCount--,n.refCount===0&&w7(S7,function(){n.controller.abort()})}var as=null,Gc=0,Ba=0,_a=null;function C7(n,a){if(as===null){var s=as=[];Gc=0,Ba=Yf(),_a={status:"pending",value:void 0,then:function(u){s.push(u)}}}return Gc++,a.then(C1,C1),a}function C1(){if(--Gc===0&&as!==null){_a!==null&&(_a.status="fulfilled");var n=as;as=null,Ba=0,_a=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function T7(n,a){var s=[],u={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){u.status="fulfilled",u.value=a;for(var h=0;h<s.length;h++)(0,s[h])(a)},function(h){for(u.status="rejected",u.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),u}var T1=B.S;B.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&C7(n,a),T1!==null&&T1(n,a)};var ia=F(null);function qc(){var n=ia.current;return n!==null?n:Be.pooledCache}function Xo(n,a){a===null?ae(ia,ia.current):ae(ia,a.pool)}function E1(){var n=qc();return n===null?null:{parent:it._currentValue,pool:n}}var rs=Error(r(460)),M1=Error(r(474)),Fo=Error(r(542)),Ic={then:function(){}};function A1(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Zo(){}function L1(n,a,s){switch(s=n[s],s===void 0?n.push(a):s!==a&&(a.then(Zo,Zo),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,R1(n),n;default:if(typeof a.status=="string")a.then(Zo,Zo);else{if(n=Be,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=a,n.status="pending",n.then(function(u){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=u}},function(u){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=u}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,R1(n),n}throw ss=a,rs}}var ss=null;function O1(){if(ss===null)throw Error(r(459));var n=ss;return ss=null,n}function R1(n){if(n===rs||n===Fo)throw Error(r(483))}var hi=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xc(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function pi(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function mi(n,a,s){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(He&2)!==0){var h=u.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a,a=Uo(n),g1(n,null,s),a}return _o(n,u,a,s),Uo(n)}function os(n,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var u=a.lanes;u&=n.pendingLanes,s|=u,a.lanes=s,Cp(n,s)}}function Fc(n,a){var s=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var h=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};g===null?h=g=b:g=g.next=b,s=s.next}while(s!==null);g===null?h=g=a:g=g.next=a}else h=g=a;s={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=a:n.next=a,s.lastBaseUpdate=a}var Zc=!1;function ls(){if(Zc){var n=_a;if(n!==null)throw n}}function us(n,a,s,u){Zc=!1;var h=n.updateQueue;hi=!1;var g=h.firstBaseUpdate,b=h.lastBaseUpdate,M=h.shared.pending;if(M!==null){h.shared.pending=null;var V=M,G=V.next;V.next=null,b===null?g=G:b.next=G,b=V;var Z=n.alternate;Z!==null&&(Z=Z.updateQueue,M=Z.lastBaseUpdate,M!==b&&(M===null?Z.firstBaseUpdate=G:M.next=G,Z.lastBaseUpdate=V))}if(g!==null){var J=h.baseState;b=0,Z=G=V=null,M=g;do{var q=M.lane&-536870913,I=q!==M.lane;if(I?(Ce&q)===q:(u&q)===q){q!==0&&q===Ba&&(Zc=!0),Z!==null&&(Z=Z.next={lane:0,tag:M.tag,payload:M.payload,callback:null,next:null});e:{var he=n,ce=M;q=a;var Ne=s;switch(ce.tag){case 1:if(he=ce.payload,typeof he=="function"){J=he.call(Ne,J,q);break e}J=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=ce.payload,q=typeof he=="function"?he.call(Ne,J,q):he,q==null)break e;J=m({},J,q);break e;case 2:hi=!0}}q=M.callback,q!==null&&(n.flags|=64,I&&(n.flags|=8192),I=h.callbacks,I===null?h.callbacks=[q]:I.push(q))}else I={lane:q,tag:M.tag,payload:M.payload,callback:M.callback,next:null},Z===null?(G=Z=I,V=J):Z=Z.next=I,b|=q;if(M=M.next,M===null){if(M=h.shared.pending,M===null)break;I=M,M=I.next,I.next=null,h.lastBaseUpdate=I,h.shared.pending=null}}while(!0);Z===null&&(V=J),h.baseState=V,h.firstBaseUpdate=G,h.lastBaseUpdate=Z,g===null&&(h.shared.lanes=0),Ci|=b,n.lanes=b,n.memoizedState=J}}function j1(n,a){if(typeof n!="function")throw Error(r(191,n));n.call(a)}function D1(n,a){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)j1(s[n],a)}var Ua=F(null),Ko=F(0);function H1(n,a){n=Qn,ae(Ko,n),ae(Ua,a),Qn=n|a.baseLanes}function Kc(){ae(Ko,Qn),ae(Ua,Ua.current)}function Qc(){Qn=Ko.current,ne(Ua),ne(Ko)}var gi=0,ve=null,ze=null,We=null,Qo=!1,$a=!1,aa=!1,Wo=0,cs=0,Ga=null,E7=0;function Ze(){throw Error(r(321))}function Wc(n,a){if(a===null)return!1;for(var s=0;s<a.length&&s<n.length;s++)if(!Bt(n[s],a[s]))return!1;return!0}function Jc(n,a,s,u,h,g){return gi=g,ve=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,B.H=n===null||n.memoizedState===null?g2:y2,aa=!1,g=s(u,h),aa=!1,$a&&(g=z1(a,s,u,h)),V1(n),g}function V1(n){B.H=al;var a=ze!==null&&ze.next!==null;if(gi=0,We=ze=ve=null,Qo=!1,cs=0,Ga=null,a)throw Error(r(300));n===null||ot||(n=n.dependencies,n!==null&&Io(n)&&(ot=!0))}function z1(n,a,s,u){ve=n;var h=0;do{if($a&&(Ga=null),cs=0,$a=!1,25<=h)throw Error(r(301));if(h+=1,We=ze=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}B.H=D7,g=a(s,u)}while($a);return g}function M7(){var n=B.H,a=n.useState()[0];return a=typeof a.then=="function"?fs(a):a,n=n.useState()[0],(ze!==null?ze.memoizedState:null)!==n&&(ve.flags|=1024),a}function ef(){var n=Wo!==0;return Wo=0,n}function tf(n,a,s){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~s}function nf(n){if(Qo){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Qo=!1}gi=0,We=ze=ve=null,$a=!1,cs=Wo=0,Ga=null}function jt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ve.memoizedState=We=n:We=We.next=n,We}function Je(){if(ze===null){var n=ve.alternate;n=n!==null?n.memoizedState:null}else n=ze.next;var a=We===null?ve.memoizedState:We.next;if(a!==null)We=a,ze=n;else{if(n===null)throw ve.alternate===null?Error(r(467)):Error(r(310));ze=n,n={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},We===null?ve.memoizedState=We=n:We=We.next=n}return We}function af(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fs(n){var a=cs;return cs+=1,Ga===null&&(Ga=[]),n=L1(Ga,n,a),a=ve,(We===null?a.memoizedState:We.next)===null&&(a=a.alternate,B.H=a===null||a.memoizedState===null?g2:y2),n}function Jo(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return fs(n);if(n.$$typeof===C)return bt(n)}throw Error(r(438,String(n)))}function rf(n){var a=null,s=ve.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var u=ve.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(a={data:u.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=af(),ve.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(n),u=0;u<n;u++)s[u]=Y;return a.index++,s}function In(n,a){return typeof a=="function"?a(n):a}function el(n){var a=Je();return sf(a,ze,n)}function sf(n,a,s){var u=n.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=s;var h=n.baseQueue,g=u.pending;if(g!==null){if(h!==null){var b=h.next;h.next=g.next,g.next=b}a.baseQueue=h=g,u.pending=null}if(g=n.baseState,h===null)n.memoizedState=g;else{a=h.next;var M=b=null,V=null,G=a,Z=!1;do{var J=G.lane&-536870913;if(J!==G.lane?(Ce&J)===J:(gi&J)===J){var q=G.revertLane;if(q===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),J===Ba&&(Z=!0);else if((gi&q)===q){G=G.next,q===Ba&&(Z=!0);continue}else J={lane:0,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},V===null?(M=V=J,b=g):V=V.next=J,ve.lanes|=q,Ci|=q;J=G.action,aa&&s(g,J),g=G.hasEagerState?G.eagerState:s(g,J)}else q={lane:J,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},V===null?(M=V=q,b=g):V=V.next=q,ve.lanes|=J,Ci|=J;G=G.next}while(G!==null&&G!==a);if(V===null?b=g:V.next=M,!Bt(g,n.memoizedState)&&(ot=!0,Z&&(s=_a,s!==null)))throw s;n.memoizedState=g,n.baseState=b,n.baseQueue=V,u.lastRenderedState=g}return h===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function of(n){var a=Je(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var u=s.dispatch,h=s.pending,g=a.memoizedState;if(h!==null){s.pending=null;var b=h=h.next;do g=n(g,b.action),b=b.next;while(b!==h);Bt(g,a.memoizedState)||(ot=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),s.lastRenderedState=g}return[g,u]}function k1(n,a,s){var u=ve,h=Je(),g=Ee;if(g){if(s===void 0)throw Error(r(407));s=s()}else s=a();var b=!Bt((ze||h).memoizedState,s);b&&(h.memoizedState=s,ot=!0),h=h.queue;var M=B1.bind(null,u,h,n);if(ds(2048,8,M,[n]),h.getSnapshot!==a||b||We!==null&&We.memoizedState.tag&1){if(u.flags|=2048,qa(9,tl(),P1.bind(null,u,h,s,a),null),Be===null)throw Error(r(349));g||(gi&124)!==0||N1(u,a,s)}return s}function N1(n,a,s){n.flags|=16384,n={getSnapshot:a,value:s},a=ve.updateQueue,a===null?(a=af(),ve.updateQueue=a,a.stores=[n]):(s=a.stores,s===null?a.stores=[n]:s.push(n))}function P1(n,a,s,u){a.value=s,a.getSnapshot=u,_1(a)&&U1(n)}function B1(n,a,s){return s(function(){_1(a)&&U1(n)})}function _1(n){var a=n.getSnapshot;n=n.value;try{var s=a();return!Bt(n,s)}catch{return!0}}function U1(n){var a=za(n,2);a!==null&&It(a,n,2)}function lf(n){var a=jt();if(typeof n=="function"){var s=n;if(n=s(),aa){ui(!0);try{s()}finally{ui(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:n},a}function $1(n,a,s,u){return n.baseState=s,sf(n,ze,typeof u=="function"?u:In)}function A7(n,a,s,u,h){if(il(n))throw Error(r(485));if(n=a.action,n!==null){var g={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){g.listeners.push(b)}};B.T!==null?s(!0):g.isTransition=!1,u(g),s=a.pending,s===null?(g.next=a.pending=g,G1(a,g)):(g.next=s.next,a.pending=s.next=g)}}function G1(n,a){var s=a.action,u=a.payload,h=n.state;if(a.isTransition){var g=B.T,b={};B.T=b;try{var M=s(h,u),V=B.S;V!==null&&V(b,M),q1(n,a,M)}catch(G){uf(n,a,G)}finally{B.T=g}}else try{g=s(h,u),q1(n,a,g)}catch(G){uf(n,a,G)}}function q1(n,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){I1(n,a,u)},function(u){return uf(n,a,u)}):I1(n,a,s)}function I1(n,a,s){a.status="fulfilled",a.value=s,Y1(a),n.state=s,a=n.pending,a!==null&&(s=a.next,s===a?n.pending=null:(s=s.next,a.next=s,G1(n,s)))}function uf(n,a,s){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do a.status="rejected",a.reason=s,Y1(a),a=a.next;while(a!==u)}n.action=null}function Y1(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function X1(n,a){return a}function F1(n,a){if(Ee){var s=Be.formState;if(s!==null){e:{var u=ve;if(Ee){if(Ye){t:{for(var h=Ye,g=xn;h.nodeType!==8;){if(!g){h=null;break t}if(h=dn(h.nextSibling),h===null){h=null;break t}}g=h.data,h=g==="F!"||g==="F"?h:null}if(h){Ye=dn(h.nextSibling),u=h.data==="F!";break e}}ea(u)}u=!1}u&&(a=s[0])}}return s=jt(),s.memoizedState=s.baseState=a,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:X1,lastRenderedState:a},s.queue=u,s=h2.bind(null,ve,u),u.dispatch=s,u=lf(!1),g=pf.bind(null,ve,!1,u.queue),u=jt(),h={state:a,dispatch:null,action:n,pending:null},u.queue=h,s=A7.bind(null,ve,h,g,s),h.dispatch=s,u.memoizedState=n,[a,s,!1]}function Z1(n){var a=Je();return K1(a,ze,n)}function K1(n,a,s){if(a=sf(n,a,X1)[0],n=el(In)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var u=fs(a)}catch(b){throw b===rs?Fo:b}else u=a;a=Je();var h=a.queue,g=h.dispatch;return s!==a.memoizedState&&(ve.flags|=2048,qa(9,tl(),L7.bind(null,h,s),null)),[u,g,n]}function L7(n,a){n.action=a}function Q1(n){var a=Je(),s=ze;if(s!==null)return K1(a,s,n);Je(),a=a.memoizedState,s=Je();var u=s.queue.dispatch;return s.memoizedState=n,[a,u,!1]}function qa(n,a,s,u){return n={tag:n,create:s,deps:u,inst:a,next:null},a=ve.updateQueue,a===null&&(a=af(),ve.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=n.next=n:(u=s.next,s.next=n,n.next=u,a.lastEffect=n),n}function tl(){return{destroy:void 0,resource:void 0}}function W1(){return Je().memoizedState}function nl(n,a,s,u){var h=jt();u=u===void 0?null:u,ve.flags|=n,h.memoizedState=qa(1|a,tl(),s,u)}function ds(n,a,s,u){var h=Je();u=u===void 0?null:u;var g=h.memoizedState.inst;ze!==null&&u!==null&&Wc(u,ze.memoizedState.deps)?h.memoizedState=qa(a,g,s,u):(ve.flags|=n,h.memoizedState=qa(1|a,g,s,u))}function J1(n,a){nl(8390656,8,n,a)}function e2(n,a){ds(2048,8,n,a)}function t2(n,a){return ds(4,2,n,a)}function n2(n,a){return ds(4,4,n,a)}function i2(n,a){if(typeof a=="function"){n=n();var s=a(n);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function a2(n,a,s){s=s!=null?s.concat([n]):null,ds(4,4,i2.bind(null,a,n),s)}function cf(){}function r2(n,a){var s=Je();a=a===void 0?null:a;var u=s.memoizedState;return a!==null&&Wc(a,u[1])?u[0]:(s.memoizedState=[n,a],n)}function s2(n,a){var s=Je();a=a===void 0?null:a;var u=s.memoizedState;if(a!==null&&Wc(a,u[1]))return u[0];if(u=n(),aa){ui(!0);try{n()}finally{ui(!1)}}return s.memoizedState=[u,a],u}function ff(n,a,s){return s===void 0||(gi&1073741824)!==0?n.memoizedState=a:(n.memoizedState=s,n=um(),ve.lanes|=n,Ci|=n,s)}function o2(n,a,s,u){return Bt(s,a)?s:Ua.current!==null?(n=ff(n,s,u),Bt(n,a)||(ot=!0),n):(gi&42)===0?(ot=!0,n.memoizedState=s):(n=um(),ve.lanes|=n,Ci|=n,a)}function l2(n,a,s,u,h){var g=K.p;K.p=g!==0&&8>g?g:8;var b=B.T,M={};B.T=M,pf(n,!1,a,s);try{var V=h(),G=B.S;if(G!==null&&G(M,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var Z=T7(V,u);hs(n,a,Z,qt(n))}else hs(n,a,u,qt(n))}catch(J){hs(n,a,{then:function(){},status:"rejected",reason:J},qt())}finally{K.p=g,B.T=b}}function O7(){}function df(n,a,s,u){if(n.tag!==5)throw Error(r(476));var h=u2(n).queue;l2(n,h,a,Q,s===null?O7:function(){return c2(n),s(u)})}function u2(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:Q},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:s},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function c2(n){var a=u2(n).next.queue;hs(n,a,{},qt())}function hf(){return bt(js)}function f2(){return Je().memoizedState}function d2(){return Je().memoizedState}function R7(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var s=qt();n=pi(s);var u=mi(a,n,s);u!==null&&(It(u,a,s),os(u,a,s)),a={cache:$c()},n.payload=a;return}a=a.return}}function j7(n,a,s){var u=qt();s={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},il(n)?p2(a,s):(s=Dc(n,a,s,u),s!==null&&(It(s,n,u),m2(s,a,u)))}function h2(n,a,s){var u=qt();hs(n,a,s,u)}function hs(n,a,s,u){var h={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(il(n))p2(a,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var b=a.lastRenderedState,M=g(b,s);if(h.hasEagerState=!0,h.eagerState=M,Bt(M,b))return _o(n,a,h,0),Be===null&&Bo(),!1}catch{}finally{}if(s=Dc(n,a,h,u),s!==null)return It(s,n,u),m2(s,a,u),!0}return!1}function pf(n,a,s,u){if(u={lane:2,revertLane:Yf(),action:u,hasEagerState:!1,eagerState:null,next:null},il(n)){if(a)throw Error(r(479))}else a=Dc(n,s,u,2),a!==null&&It(a,n,2)}function il(n){var a=n.alternate;return n===ve||a!==null&&a===ve}function p2(n,a){$a=Qo=!0;var s=n.pending;s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a}function m2(n,a,s){if((s&4194048)!==0){var u=a.lanes;u&=n.pendingLanes,s|=u,a.lanes=s,Cp(n,s)}}var al={readContext:bt,use:Jo,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze},g2={readContext:bt,use:Jo,useCallback:function(n,a){return jt().memoizedState=[n,a===void 0?null:a],n},useContext:bt,useEffect:J1,useImperativeHandle:function(n,a,s){s=s!=null?s.concat([n]):null,nl(4194308,4,i2.bind(null,a,n),s)},useLayoutEffect:function(n,a){return nl(4194308,4,n,a)},useInsertionEffect:function(n,a){nl(4,2,n,a)},useMemo:function(n,a){var s=jt();a=a===void 0?null:a;var u=n();if(aa){ui(!0);try{n()}finally{ui(!1)}}return s.memoizedState=[u,a],u},useReducer:function(n,a,s){var u=jt();if(s!==void 0){var h=s(a);if(aa){ui(!0);try{s(a)}finally{ui(!1)}}}else h=a;return u.memoizedState=u.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},u.queue=n,n=n.dispatch=j7.bind(null,ve,n),[u.memoizedState,n]},useRef:function(n){var a=jt();return n={current:n},a.memoizedState=n},useState:function(n){n=lf(n);var a=n.queue,s=h2.bind(null,ve,a);return a.dispatch=s,[n.memoizedState,s]},useDebugValue:cf,useDeferredValue:function(n,a){var s=jt();return ff(s,n,a)},useTransition:function(){var n=lf(!1);return n=l2.bind(null,ve,n.queue,!0,!1),jt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,s){var u=ve,h=jt();if(Ee){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),Be===null)throw Error(r(349));(Ce&124)!==0||N1(u,a,s)}h.memoizedState=s;var g={value:s,getSnapshot:a};return h.queue=g,J1(B1.bind(null,u,g,n),[n]),u.flags|=2048,qa(9,tl(),P1.bind(null,u,g,s,a),null),s},useId:function(){var n=jt(),a=Be.identifierPrefix;if(Ee){var s=$n,u=Un;s=(u&~(1<<32-Pt(u)-1)).toString(32)+s,a="«"+a+"R"+s,s=Wo++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=E7++,a="«"+a+"r"+s.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:hf,useFormState:F1,useActionState:F1,useOptimistic:function(n){var a=jt();a.memoizedState=a.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=pf.bind(null,ve,!0,s),s.dispatch=a,[n,a]},useMemoCache:rf,useCacheRefresh:function(){return jt().memoizedState=R7.bind(null,ve)}},y2={readContext:bt,use:Jo,useCallback:r2,useContext:bt,useEffect:e2,useImperativeHandle:a2,useInsertionEffect:t2,useLayoutEffect:n2,useMemo:s2,useReducer:el,useRef:W1,useState:function(){return el(In)},useDebugValue:cf,useDeferredValue:function(n,a){var s=Je();return o2(s,ze.memoizedState,n,a)},useTransition:function(){var n=el(In)[0],a=Je().memoizedState;return[typeof n=="boolean"?n:fs(n),a]},useSyncExternalStore:k1,useId:f2,useHostTransitionStatus:hf,useFormState:Z1,useActionState:Z1,useOptimistic:function(n,a){var s=Je();return $1(s,ze,n,a)},useMemoCache:rf,useCacheRefresh:d2},D7={readContext:bt,use:Jo,useCallback:r2,useContext:bt,useEffect:e2,useImperativeHandle:a2,useInsertionEffect:t2,useLayoutEffect:n2,useMemo:s2,useReducer:of,useRef:W1,useState:function(){return of(In)},useDebugValue:cf,useDeferredValue:function(n,a){var s=Je();return ze===null?ff(s,n,a):o2(s,ze.memoizedState,n,a)},useTransition:function(){var n=of(In)[0],a=Je().memoizedState;return[typeof n=="boolean"?n:fs(n),a]},useSyncExternalStore:k1,useId:f2,useHostTransitionStatus:hf,useFormState:Q1,useActionState:Q1,useOptimistic:function(n,a){var s=Je();return ze!==null?$1(s,ze,n,a):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:rf,useCacheRefresh:d2},Ia=null,ps=0;function rl(n){var a=ps;return ps+=1,Ia===null&&(Ia=[]),L1(Ia,n,a)}function ms(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function sl(n,a){throw a.$$typeof===y?Error(r(525)):(n=Object.prototype.toString.call(a),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function v2(n){var a=n._init;return a(n._payload)}function x2(n){function a(P,k){if(n){var $=P.deletions;$===null?(P.deletions=[k],P.flags|=16):$.push(k)}}function s(P,k){if(!n)return null;for(;k!==null;)a(P,k),k=k.sibling;return null}function u(P){for(var k=new Map;P!==null;)P.key!==null?k.set(P.key,P):k.set(P.index,P),P=P.sibling;return k}function h(P,k){return P=_n(P,k),P.index=0,P.sibling=null,P}function g(P,k,$){return P.index=$,n?($=P.alternate,$!==null?($=$.index,$<k?(P.flags|=67108866,k):$):(P.flags|=67108866,k)):(P.flags|=1048576,k)}function b(P){return n&&P.alternate===null&&(P.flags|=67108866),P}function M(P,k,$,W){return k===null||k.tag!==6?(k=Vc($,P.mode,W),k.return=P,k):(k=h(k,$),k.return=P,k)}function V(P,k,$,W){var se=$.type;return se===S?Z(P,k,$.props.children,W,$.key):k!==null&&(k.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===U&&v2(se)===k.type)?(k=h(k,$.props),ms(k,$),k.return=P,k):(k=$o($.type,$.key,$.props,null,P.mode,W),ms(k,$),k.return=P,k)}function G(P,k,$,W){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=zc($,P.mode,W),k.return=P,k):(k=h(k,$.children||[]),k.return=P,k)}function Z(P,k,$,W,se){return k===null||k.tag!==7?(k=Ki($,P.mode,W,se),k.return=P,k):(k=h(k,$),k.return=P,k)}function J(P,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Vc(""+k,P.mode,$),k.return=P,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case v:return $=$o(k.type,k.key,k.props,null,P.mode,$),ms($,k),$.return=P,$;case w:return k=zc(k,P.mode,$),k.return=P,k;case U:var W=k._init;return k=W(k._payload),J(P,k,$)}if(re(k)||te(k))return k=Ki(k,P.mode,$,null),k.return=P,k;if(typeof k.then=="function")return J(P,rl(k),$);if(k.$$typeof===C)return J(P,Yo(P,k),$);sl(P,k)}return null}function q(P,k,$,W){var se=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return se!==null?null:M(P,k,""+$,W);if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return $.key===se?V(P,k,$,W):null;case w:return $.key===se?G(P,k,$,W):null;case U:return se=$._init,$=se($._payload),q(P,k,$,W)}if(re($)||te($))return se!==null?null:Z(P,k,$,W,null);if(typeof $.then=="function")return q(P,k,rl($),W);if($.$$typeof===C)return q(P,k,Yo(P,$),W);sl(P,$)}return null}function I(P,k,$,W,se){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return P=P.get($)||null,M(k,P,""+W,se);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case v:return P=P.get(W.key===null?$:W.key)||null,V(k,P,W,se);case w:return P=P.get(W.key===null?$:W.key)||null,G(k,P,W,se);case U:var xe=W._init;return W=xe(W._payload),I(P,k,$,W,se)}if(re(W)||te(W))return P=P.get($)||null,Z(k,P,W,se,null);if(typeof W.then=="function")return I(P,k,$,rl(W),se);if(W.$$typeof===C)return I(P,k,$,Yo(k,W),se);sl(k,W)}return null}function he(P,k,$,W){for(var se=null,xe=null,le=k,de=k=0,ut=null;le!==null&&de<$.length;de++){le.index>de?(ut=le,le=null):ut=le.sibling;var Te=q(P,le,$[de],W);if(Te===null){le===null&&(le=ut);break}n&&le&&Te.alternate===null&&a(P,le),k=g(Te,k,de),xe===null?se=Te:xe.sibling=Te,xe=Te,le=ut}if(de===$.length)return s(P,le),Ee&&Wi(P,de),se;if(le===null){for(;de<$.length;de++)le=J(P,$[de],W),le!==null&&(k=g(le,k,de),xe===null?se=le:xe.sibling=le,xe=le);return Ee&&Wi(P,de),se}for(le=u(le);de<$.length;de++)ut=I(le,P,de,$[de],W),ut!==null&&(n&&ut.alternate!==null&&le.delete(ut.key===null?de:ut.key),k=g(ut,k,de),xe===null?se=ut:xe.sibling=ut,xe=ut);return n&&le.forEach(function(Di){return a(P,Di)}),Ee&&Wi(P,de),se}function ce(P,k,$,W){if($==null)throw Error(r(151));for(var se=null,xe=null,le=k,de=k=0,ut=null,Te=$.next();le!==null&&!Te.done;de++,Te=$.next()){le.index>de?(ut=le,le=null):ut=le.sibling;var Di=q(P,le,Te.value,W);if(Di===null){le===null&&(le=ut);break}n&&le&&Di.alternate===null&&a(P,le),k=g(Di,k,de),xe===null?se=Di:xe.sibling=Di,xe=Di,le=ut}if(Te.done)return s(P,le),Ee&&Wi(P,de),se;if(le===null){for(;!Te.done;de++,Te=$.next())Te=J(P,Te.value,W),Te!==null&&(k=g(Te,k,de),xe===null?se=Te:xe.sibling=Te,xe=Te);return Ee&&Wi(P,de),se}for(le=u(le);!Te.done;de++,Te=$.next())Te=I(le,P,de,Te.value,W),Te!==null&&(n&&Te.alternate!==null&&le.delete(Te.key===null?de:Te.key),k=g(Te,k,de),xe===null?se=Te:xe.sibling=Te,xe=Te);return n&&le.forEach(function(H8){return a(P,H8)}),Ee&&Wi(P,de),se}function Ne(P,k,$,W){if(typeof $=="object"&&$!==null&&$.type===S&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case v:e:{for(var se=$.key;k!==null;){if(k.key===se){if(se=$.type,se===S){if(k.tag===7){s(P,k.sibling),W=h(k,$.props.children),W.return=P,P=W;break e}}else if(k.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===U&&v2(se)===k.type){s(P,k.sibling),W=h(k,$.props),ms(W,$),W.return=P,P=W;break e}s(P,k);break}else a(P,k);k=k.sibling}$.type===S?(W=Ki($.props.children,P.mode,W,$.key),W.return=P,P=W):(W=$o($.type,$.key,$.props,null,P.mode,W),ms(W,$),W.return=P,P=W)}return b(P);case w:e:{for(se=$.key;k!==null;){if(k.key===se)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){s(P,k.sibling),W=h(k,$.children||[]),W.return=P,P=W;break e}else{s(P,k);break}else a(P,k);k=k.sibling}W=zc($,P.mode,W),W.return=P,P=W}return b(P);case U:return se=$._init,$=se($._payload),Ne(P,k,$,W)}if(re($))return he(P,k,$,W);if(te($)){if(se=te($),typeof se!="function")throw Error(r(150));return $=se.call($),ce(P,k,$,W)}if(typeof $.then=="function")return Ne(P,k,rl($),W);if($.$$typeof===C)return Ne(P,k,Yo(P,$),W);sl(P,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(s(P,k.sibling),W=h(k,$),W.return=P,P=W):(s(P,k),W=Vc($,P.mode,W),W.return=P,P=W),b(P)):s(P,k)}return function(P,k,$,W){try{ps=0;var se=Ne(P,k,$,W);return Ia=null,se}catch(le){if(le===rs||le===Fo)throw le;var xe=_t(29,le,null,P.mode);return xe.lanes=W,xe.return=P,xe}finally{}}}var Ya=x2(!0),b2=x2(!1),nn=F(null),bn=null;function yi(n){var a=n.alternate;ae(at,at.current&1),ae(nn,n),bn===null&&(a===null||Ua.current!==null||a.memoizedState!==null)&&(bn=n)}function w2(n){if(n.tag===22){if(ae(at,at.current),ae(nn,n),bn===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(bn=n)}}else vi()}function vi(){ae(at,at.current),ae(nn,nn.current)}function Yn(n){ne(nn),bn===n&&(bn=null),ne(at)}var at=F(0);function ol(n){for(var a=n;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||ad(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function mf(n,a,s,u){a=n.memoizedState,s=s(u,a),s=s==null?a:m({},a,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var gf={enqueueSetState:function(n,a,s){n=n._reactInternals;var u=qt(),h=pi(u);h.payload=a,s!=null&&(h.callback=s),a=mi(n,h,u),a!==null&&(It(a,n,u),os(a,n,u))},enqueueReplaceState:function(n,a,s){n=n._reactInternals;var u=qt(),h=pi(u);h.tag=1,h.payload=a,s!=null&&(h.callback=s),a=mi(n,h,u),a!==null&&(It(a,n,u),os(a,n,u))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var s=qt(),u=pi(s);u.tag=2,a!=null&&(u.callback=a),a=mi(n,u,s),a!==null&&(It(a,n,s),os(a,n,s))}};function S2(n,a,s,u,h,g,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,b):a.prototype&&a.prototype.isPureReactComponent?!Qr(s,u)||!Qr(h,g):!0}function C2(n,a,s,u){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,u),a.state!==n&&gf.enqueueReplaceState(a,a.state,null)}function ra(n,a){var s=a;if("ref"in a){s={};for(var u in a)u!=="ref"&&(s[u]=a[u])}if(n=n.defaultProps){s===a&&(s=m({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var ll=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function T2(n){ll(n)}function E2(n){console.error(n)}function M2(n){ll(n)}function ul(n,a){try{var s=n.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(u){setTimeout(function(){throw u})}}function A2(n,a,s){try{var u=n.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function yf(n,a,s){return s=pi(s),s.tag=3,s.payload={element:null},s.callback=function(){ul(n,a)},s}function L2(n){return n=pi(n),n.tag=3,n}function O2(n,a,s,u){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var g=u.value;n.payload=function(){return h(g)},n.callback=function(){A2(a,s,u)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){A2(a,s,u),typeof h!="function"&&(Ti===null?Ti=new Set([this]):Ti.add(this));var M=u.stack;this.componentDidCatch(u.value,{componentStack:M!==null?M:""})})}function H7(n,a,s,u,h){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(a=s.alternate,a!==null&&ns(a,s,h,!0),s=nn.current,s!==null){switch(s.tag){case 13:return bn===null?Uf():s.alternate===null&&Xe===0&&(Xe=3),s.flags&=-257,s.flags|=65536,s.lanes=h,u===Ic?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([u]):a.add(u),Gf(n,u,h)),!1;case 22:return s.flags|=65536,u===Ic?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([u]):s.add(u)),Gf(n,u,h)),!1}throw Error(r(435,s.tag))}return Gf(n,u,h),Uf(),!1}if(Ee)return a=nn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,u!==Pc&&(n=Error(r(422),{cause:u}),ts(Wt(n,s)))):(u!==Pc&&(a=Error(r(423),{cause:u}),ts(Wt(a,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,u=Wt(u,s),h=yf(n.stateNode,u,h),Fc(n,h),Xe!==4&&(Xe=2)),!1;var g=Error(r(520),{cause:u});if(g=Wt(g,s),Ss===null?Ss=[g]:Ss.push(g),Xe!==4&&(Xe=2),a===null)return!0;u=Wt(u,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=yf(s.stateNode,u,n),Fc(s,n),!1;case 1:if(a=s.type,g=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ti===null||!Ti.has(g))))return s.flags|=65536,h&=-h,s.lanes|=h,h=L2(h),O2(h,n,s,u),Fc(s,h),!1}s=s.return}while(s!==null);return!1}var R2=Error(r(461)),ot=!1;function dt(n,a,s,u){a.child=n===null?b2(a,null,s,u):Ya(a,n.child,s,u)}function j2(n,a,s,u,h){s=s.render;var g=a.ref;if("ref"in u){var b={};for(var M in u)M!=="ref"&&(b[M]=u[M])}else b=u;return na(a),u=Jc(n,a,s,b,g,h),M=ef(),n!==null&&!ot?(tf(n,a,h),Xn(n,a,h)):(Ee&&M&&kc(a),a.flags|=1,dt(n,a,u,h),a.child)}function D2(n,a,s,u,h){if(n===null){var g=s.type;return typeof g=="function"&&!Hc(g)&&g.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=g,H2(n,a,g,u,h)):(n=$o(s.type,null,u,a,a.mode,h),n.ref=a.ref,n.return=a,a.child=n)}if(g=n.child,!Ef(n,h)){var b=g.memoizedProps;if(s=s.compare,s=s!==null?s:Qr,s(b,u)&&n.ref===a.ref)return Xn(n,a,h)}return a.flags|=1,n=_n(g,u),n.ref=a.ref,n.return=a,a.child=n}function H2(n,a,s,u,h){if(n!==null){var g=n.memoizedProps;if(Qr(g,u)&&n.ref===a.ref)if(ot=!1,a.pendingProps=u=g,Ef(n,h))(n.flags&131072)!==0&&(ot=!0);else return a.lanes=n.lanes,Xn(n,a,h)}return vf(n,a,s,u,h)}function V2(n,a,s){var u=a.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((a.flags&128)!==0){if(u=g!==null?g.baseLanes|s:s,n!==null){for(h=a.child=n.child,g=0;h!==null;)g=g|h.lanes|h.childLanes,h=h.sibling;a.childLanes=g&~u}else a.childLanes=0,a.child=null;return z2(n,a,u,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Xo(a,g!==null?g.cachePool:null),g!==null?H1(a,g):Kc(),w2(a);else return a.lanes=a.childLanes=536870912,z2(n,a,g!==null?g.baseLanes|s:s,s)}else g!==null?(Xo(a,g.cachePool),H1(a,g),vi(),a.memoizedState=null):(n!==null&&Xo(a,null),Kc(),vi());return dt(n,a,h,s),a.child}function z2(n,a,s,u){var h=qc();return h=h===null?null:{parent:it._currentValue,pool:h},a.memoizedState={baseLanes:s,cachePool:h},n!==null&&Xo(a,null),Kc(),w2(a),n!==null&&ns(n,a,u,!0),null}function cl(n,a){var s=a.ref;if(s===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(n===null||n.ref!==s)&&(a.flags|=4194816)}}function vf(n,a,s,u,h){return na(a),s=Jc(n,a,s,u,void 0,h),u=ef(),n!==null&&!ot?(tf(n,a,h),Xn(n,a,h)):(Ee&&u&&kc(a),a.flags|=1,dt(n,a,s,h),a.child)}function k2(n,a,s,u,h,g){return na(a),a.updateQueue=null,s=z1(a,u,s,h),V1(n),u=ef(),n!==null&&!ot?(tf(n,a,g),Xn(n,a,g)):(Ee&&u&&kc(a),a.flags|=1,dt(n,a,s,g),a.child)}function N2(n,a,s,u,h){if(na(a),a.stateNode===null){var g=ka,b=s.contextType;typeof b=="object"&&b!==null&&(g=bt(b)),g=new s(u,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=gf,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=u,g.state=a.memoizedState,g.refs={},Yc(a),b=s.contextType,g.context=typeof b=="object"&&b!==null?bt(b):ka,g.state=a.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(mf(a,s,b,u),g.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(b=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),b!==g.state&&gf.enqueueReplaceState(g,g.state,null),us(a,u,g,h),ls(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!0}else if(n===null){g=a.stateNode;var M=a.memoizedProps,V=ra(s,M);g.props=V;var G=g.context,Z=s.contextType;b=ka,typeof Z=="object"&&Z!==null&&(b=bt(Z));var J=s.getDerivedStateFromProps;Z=typeof J=="function"||typeof g.getSnapshotBeforeUpdate=="function",M=a.pendingProps!==M,Z||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(M||G!==b)&&C2(a,g,u,b),hi=!1;var q=a.memoizedState;g.state=q,us(a,u,g,h),ls(),G=a.memoizedState,M||q!==G||hi?(typeof J=="function"&&(mf(a,s,J,u),G=a.memoizedState),(V=hi||S2(a,s,V,u,q,G,b))?(Z||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=G),g.props=u,g.state=G,g.context=b,u=V):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{g=a.stateNode,Xc(n,a),b=a.memoizedProps,Z=ra(s,b),g.props=Z,J=a.pendingProps,q=g.context,G=s.contextType,V=ka,typeof G=="object"&&G!==null&&(V=bt(G)),M=s.getDerivedStateFromProps,(G=typeof M=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b!==J||q!==V)&&C2(a,g,u,V),hi=!1,q=a.memoizedState,g.state=q,us(a,u,g,h),ls();var I=a.memoizedState;b!==J||q!==I||hi||n!==null&&n.dependencies!==null&&Io(n.dependencies)?(typeof M=="function"&&(mf(a,s,M,u),I=a.memoizedState),(Z=hi||S2(a,s,Z,u,q,I,V)||n!==null&&n.dependencies!==null&&Io(n.dependencies))?(G||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,I,V),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,I,V)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||b===n.memoizedProps&&q===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&q===n.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=I),g.props=u,g.state=I,g.context=V,u=Z):(typeof g.componentDidUpdate!="function"||b===n.memoizedProps&&q===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&q===n.memoizedState||(a.flags|=1024),u=!1)}return g=u,cl(n,a),u=(a.flags&128)!==0,g||u?(g=a.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,n!==null&&u?(a.child=Ya(a,n.child,null,h),a.child=Ya(a,null,s,h)):dt(n,a,s,h),a.memoizedState=g.state,n=a.child):n=Xn(n,a,h),n}function P2(n,a,s,u){return es(),a.flags|=256,dt(n,a,s,u),a.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(n){return{baseLanes:n,cachePool:E1()}}function wf(n,a,s){return n=n!==null?n.childLanes&~s:0,a&&(n|=an),n}function B2(n,a,s){var u=a.pendingProps,h=!1,g=(a.flags&128)!==0,b;if((b=g)||(b=n!==null&&n.memoizedState===null?!1:(at.current&2)!==0),b&&(h=!0,a.flags&=-129),b=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ee){if(h?yi(a):vi(),Ee){var M=Ye,V;if(V=M){e:{for(V=M,M=xn;V.nodeType!==8;){if(!M){M=null;break e}if(V=dn(V.nextSibling),V===null){M=null;break e}}M=V}M!==null?(a.memoizedState={dehydrated:M,treeContext:Qi!==null?{id:Un,overflow:$n}:null,retryLane:536870912,hydrationErrors:null},V=_t(18,null,null,0),V.stateNode=M,V.return=a,a.child=V,Mt=a,Ye=null,V=!0):V=!1}V||ea(a)}if(M=a.memoizedState,M!==null&&(M=M.dehydrated,M!==null))return ad(M)?a.lanes=32:a.lanes=536870912,null;Yn(a)}return M=u.children,u=u.fallback,h?(vi(),h=a.mode,M=fl({mode:"hidden",children:M},h),u=Ki(u,h,s,null),M.return=a,u.return=a,M.sibling=u,a.child=M,h=a.child,h.memoizedState=bf(s),h.childLanes=wf(n,b,s),a.memoizedState=xf,u):(yi(a),Sf(a,M))}if(V=n.memoizedState,V!==null&&(M=V.dehydrated,M!==null)){if(g)a.flags&256?(yi(a),a.flags&=-257,a=Cf(n,a,s)):a.memoizedState!==null?(vi(),a.child=n.child,a.flags|=128,a=null):(vi(),h=u.fallback,M=a.mode,u=fl({mode:"visible",children:u.children},M),h=Ki(h,M,s,null),h.flags|=2,u.return=a,h.return=a,u.sibling=h,a.child=u,Ya(a,n.child,null,s),u=a.child,u.memoizedState=bf(s),u.childLanes=wf(n,b,s),a.memoizedState=xf,a=h);else if(yi(a),ad(M)){if(b=M.nextSibling&&M.nextSibling.dataset,b)var G=b.dgst;b=G,u=Error(r(419)),u.stack="",u.digest=b,ts({value:u,source:null,stack:null}),a=Cf(n,a,s)}else if(ot||ns(n,a,s,!1),b=(s&n.childLanes)!==0,ot||b){if(b=Be,b!==null&&(u=s&-s,u=(u&42)!==0?1:ac(u),u=(u&(b.suspendedLanes|s))!==0?0:u,u!==0&&u!==V.retryLane))throw V.retryLane=u,za(n,u),It(b,n,u),R2;M.data==="$?"||Uf(),a=Cf(n,a,s)}else M.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=V.treeContext,Ye=dn(M.nextSibling),Mt=a,Ee=!0,Ji=null,xn=!1,n!==null&&(en[tn++]=Un,en[tn++]=$n,en[tn++]=Qi,Un=n.id,$n=n.overflow,Qi=a),a=Sf(a,u.children),a.flags|=4096);return a}return h?(vi(),h=u.fallback,M=a.mode,V=n.child,G=V.sibling,u=_n(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,G!==null?h=_n(G,h):(h=Ki(h,M,s,null),h.flags|=2),h.return=a,u.return=a,u.sibling=h,a.child=u,u=h,h=a.child,M=n.child.memoizedState,M===null?M=bf(s):(V=M.cachePool,V!==null?(G=it._currentValue,V=V.parent!==G?{parent:G,pool:G}:V):V=E1(),M={baseLanes:M.baseLanes|s,cachePool:V}),h.memoizedState=M,h.childLanes=wf(n,b,s),a.memoizedState=xf,u):(yi(a),s=n.child,n=s.sibling,s=_n(s,{mode:"visible",children:u.children}),s.return=a,s.sibling=null,n!==null&&(b=a.deletions,b===null?(a.deletions=[n],a.flags|=16):b.push(n)),a.child=s,a.memoizedState=null,s)}function Sf(n,a){return a=fl({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function fl(n,a){return n=_t(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Cf(n,a,s){return Ya(a,n.child,null,s),n=Sf(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function _2(n,a,s){n.lanes|=a;var u=n.alternate;u!==null&&(u.lanes|=a),_c(n.return,a,s)}function Tf(n,a,s,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:h}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=s,g.tailMode=h)}function U2(n,a,s){var u=a.pendingProps,h=u.revealOrder,g=u.tail;if(dt(n,a,u.children,s),u=at.current,(u&2)!==0)u=u&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_2(n,s,a);else if(n.tag===19)_2(n,s,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(ae(at,u),h){case"forwards":for(s=a.child,h=null;s!==null;)n=s.alternate,n!==null&&ol(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=a.child,a.child=null):(h=s.sibling,s.sibling=null),Tf(a,!1,h,s,g);break;case"backwards":for(s=null,h=a.child,a.child=null;h!==null;){if(n=h.alternate,n!==null&&ol(n)===null){a.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}Tf(a,!0,s,null,g);break;case"together":Tf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Xn(n,a,s){if(n!==null&&(a.dependencies=n.dependencies),Ci|=a.lanes,(s&a.childLanes)===0)if(n!==null){if(ns(n,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(r(153));if(a.child!==null){for(n=a.child,s=_n(n,n.pendingProps),a.child=s,s.return=a;n.sibling!==null;)n=n.sibling,s=s.sibling=_n(n,n.pendingProps),s.return=a;s.sibling=null}return a.child}function Ef(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Io(n)))}function V7(n,a,s){switch(a.tag){case 3:Re(a,a.stateNode.containerInfo),di(a,it,n.memoizedState.cache),es();break;case 27:case 5:qi(a);break;case 4:Re(a,a.stateNode.containerInfo);break;case 10:di(a,a.type,a.memoizedProps.value);break;case 13:var u=a.memoizedState;if(u!==null)return u.dehydrated!==null?(yi(a),a.flags|=128,null):(s&a.child.childLanes)!==0?B2(n,a,s):(yi(a),n=Xn(n,a,s),n!==null?n.sibling:null);yi(a);break;case 19:var h=(n.flags&128)!==0;if(u=(s&a.childLanes)!==0,u||(ns(n,a,s,!1),u=(s&a.childLanes)!==0),h){if(u)return U2(n,a,s);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ae(at,at.current),u)break;return null;case 22:case 23:return a.lanes=0,V2(n,a,s);case 24:di(a,it,n.memoizedState.cache)}return Xn(n,a,s)}function $2(n,a,s){if(n!==null)if(n.memoizedProps!==a.pendingProps)ot=!0;else{if(!Ef(n,s)&&(a.flags&128)===0)return ot=!1,V7(n,a,s);ot=(n.flags&131072)!==0}else ot=!1,Ee&&(a.flags&1048576)!==0&&v1(a,qo,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var u=a.elementType,h=u._init;if(u=h(u._payload),a.type=u,typeof u=="function")Hc(u)?(n=ra(u,n),a.tag=1,a=N2(null,a,u,n,s)):(a.tag=0,a=vf(null,a,u,n,s));else{if(u!=null){if(h=u.$$typeof,h===j){a.tag=11,a=j2(null,a,u,n,s);break e}else if(h===z){a.tag=14,a=D2(null,a,u,n,s);break e}}throw a=oe(u)||u,Error(r(306,a,""))}}return a;case 0:return vf(n,a,a.type,a.pendingProps,s);case 1:return u=a.type,h=ra(u,a.pendingProps),N2(n,a,u,h,s);case 3:e:{if(Re(a,a.stateNode.containerInfo),n===null)throw Error(r(387));u=a.pendingProps;var g=a.memoizedState;h=g.element,Xc(n,a),us(a,u,null,s);var b=a.memoizedState;if(u=b.cache,di(a,it,u),u!==g.cache&&Uc(a,[it],s,!0),ls(),u=b.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:b.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=P2(n,a,u,s);break e}else if(u!==h){h=Wt(Error(r(424)),a),ts(h),a=P2(n,a,u,s);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Ye=dn(n.firstChild),Mt=a,Ee=!0,Ji=null,xn=!0,s=b2(a,null,u,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(es(),u===h){a=Xn(n,a,s);break e}dt(n,a,u,s)}a=a.child}return a;case 26:return cl(n,a),n===null?(s=Ym(a.type,null,a.pendingProps,null))?a.memoizedState=s:Ee||(s=a.type,n=a.pendingProps,u=El(fe.current).createElement(s),u[xt]=a,u[Ot]=n,pt(u,s,n),st(u),a.stateNode=u):a.memoizedState=Ym(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return qi(a),n===null&&Ee&&(u=a.stateNode=Gm(a.type,a.pendingProps,fe.current),Mt=a,xn=!0,h=Ye,Ai(a.type)?(rd=h,Ye=dn(u.firstChild)):Ye=h),dt(n,a,a.pendingProps.children,s),cl(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Ee&&((h=u=Ye)&&(u=l8(u,a.type,a.pendingProps,xn),u!==null?(a.stateNode=u,Mt=a,Ye=dn(u.firstChild),xn=!1,h=!0):h=!1),h||ea(a)),qi(a),h=a.type,g=a.pendingProps,b=n!==null?n.memoizedProps:null,u=g.children,td(h,g)?u=null:b!==null&&td(h,b)&&(a.flags|=32),a.memoizedState!==null&&(h=Jc(n,a,M7,null,null,s),js._currentValue=h),cl(n,a),dt(n,a,u,s),a.child;case 6:return n===null&&Ee&&((n=s=Ye)&&(s=u8(s,a.pendingProps,xn),s!==null?(a.stateNode=s,Mt=a,Ye=null,n=!0):n=!1),n||ea(a)),null;case 13:return B2(n,a,s);case 4:return Re(a,a.stateNode.containerInfo),u=a.pendingProps,n===null?a.child=Ya(a,null,u,s):dt(n,a,u,s),a.child;case 11:return j2(n,a,a.type,a.pendingProps,s);case 7:return dt(n,a,a.pendingProps,s),a.child;case 8:return dt(n,a,a.pendingProps.children,s),a.child;case 12:return dt(n,a,a.pendingProps.children,s),a.child;case 10:return u=a.pendingProps,di(a,a.type,u.value),dt(n,a,u.children,s),a.child;case 9:return h=a.type._context,u=a.pendingProps.children,na(a),h=bt(h),u=u(h),a.flags|=1,dt(n,a,u,s),a.child;case 14:return D2(n,a,a.type,a.pendingProps,s);case 15:return H2(n,a,a.type,a.pendingProps,s);case 19:return U2(n,a,s);case 31:return u=a.pendingProps,s=a.mode,u={mode:u.mode,children:u.children},n===null?(s=fl(u,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=_n(n.child,u),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return V2(n,a,s);case 24:return na(a),u=bt(it),n===null?(h=qc(),h===null&&(h=Be,g=$c(),h.pooledCache=g,g.refCount++,g!==null&&(h.pooledCacheLanes|=s),h=g),a.memoizedState={parent:u,cache:h},Yc(a),di(a,it,h)):((n.lanes&s)!==0&&(Xc(n,a),us(a,null,null,s),ls()),h=n.memoizedState,g=a.memoizedState,h.parent!==u?(h={parent:u,cache:u},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),di(a,it,u)):(u=g.cache,di(a,it,u),u!==h.cache&&Uc(a,[it],s,!0))),dt(n,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function Fn(n){n.flags|=4}function G2(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Qm(a)){if(a=nn.current,a!==null&&((Ce&4194048)===Ce?bn!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||a!==bn))throw ss=Ic,M1;n.flags|=8192}}function dl(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?wp():536870912,n.lanes|=a,Ka|=a)}function gs(n,a){if(!Ee)switch(n.tailMode){case"hidden":a=n.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function qe(n){var a=n.alternate!==null&&n.alternate.child===n.child,s=0,u=0;if(a)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=s,a}function z7(n,a,s){var u=a.pendingProps;switch(Nc(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(a),null;case 1:return qe(a),null;case 3:return s=a.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),qn(it),vt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Jr(a)?Fn(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,w1())),qe(a),null;case 26:return s=a.memoizedState,n===null?(Fn(a),s!==null?(qe(a),G2(a,s)):(qe(a),a.flags&=-16777217)):s?s!==n.memoizedState?(Fn(a),qe(a),G2(a,s)):(qe(a),a.flags&=-16777217):(n.memoizedProps!==u&&Fn(a),qe(a),a.flags&=-16777217),null;case 27:Nn(a),s=fe.current;var h=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==u&&Fn(a);else{if(!u){if(a.stateNode===null)throw Error(r(166));return qe(a),null}n=ue.current,Jr(a)?x1(a):(n=Gm(h,u,s),a.stateNode=n,Fn(a))}return qe(a),null;case 5:if(Nn(a),s=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==u&&Fn(a);else{if(!u){if(a.stateNode===null)throw Error(r(166));return qe(a),null}if(n=ue.current,Jr(a))x1(a);else{switch(h=El(fe.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?h.createElement(s,{is:u.is}):h.createElement(s)}}n[xt]=a,n[Ot]=u;e:for(h=a.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===a)break e;for(;h.sibling===null;){if(h.return===null||h.return===a)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}a.stateNode=n;e:switch(pt(n,s,u),s){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Fn(a)}}return qe(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==u&&Fn(a);else{if(typeof u!="string"&&a.stateNode===null)throw Error(r(166));if(n=fe.current,Jr(a)){if(n=a.stateNode,s=a.memoizedProps,u=null,h=Mt,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}n[xt]=a,n=!!(n.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||km(n.nodeValue,s)),n||ea(a)}else n=El(n).createTextNode(u),n[xt]=a,a.stateNode=n}return qe(a),null;case 13:if(u=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=Jr(a),u!==null&&u.dehydrated!==null){if(n===null){if(!h)throw Error(r(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[xt]=a}else es(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;qe(a),h=!1}else h=w1(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(Yn(a),a):(Yn(a),null)}if(Yn(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=u!==null,n=n!==null&&n.memoizedState!==null,s){u=a.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var g=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==h&&(u.flags|=2048)}return s!==n&&s&&(a.child.flags|=8192),dl(a,a.updateQueue),qe(a),null;case 4:return vt(),n===null&&Kf(a.stateNode.containerInfo),qe(a),null;case 10:return qn(a.type),qe(a),null;case 19:if(ne(at),h=a.memoizedState,h===null)return qe(a),null;if(u=(a.flags&128)!==0,g=h.rendering,g===null)if(u)gs(h,!1);else{if(Xe!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(g=ol(n),g!==null){for(a.flags|=128,gs(h,!1),n=g.updateQueue,a.updateQueue=n,dl(a,n),a.subtreeFlags=0,n=s,s=a.child;s!==null;)y1(s,n),s=s.sibling;return ae(at,at.current&1|2),a.child}n=n.sibling}h.tail!==null&&vn()>ml&&(a.flags|=128,u=!0,gs(h,!1),a.lanes=4194304)}else{if(!u)if(n=ol(g),n!==null){if(a.flags|=128,u=!0,n=n.updateQueue,a.updateQueue=n,dl(a,n),gs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!Ee)return qe(a),null}else 2*vn()-h.renderingStartTime>ml&&s!==536870912&&(a.flags|=128,u=!0,gs(h,!1),a.lanes=4194304);h.isBackwards?(g.sibling=a.child,a.child=g):(n=h.last,n!==null?n.sibling=g:a.child=g,h.last=g)}return h.tail!==null?(a=h.tail,h.rendering=a,h.tail=a.sibling,h.renderingStartTime=vn(),a.sibling=null,n=at.current,ae(at,u?n&1|2:n&1),a):(qe(a),null);case 22:case 23:return Yn(a),Qc(),u=a.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(a.flags|=8192):u&&(a.flags|=8192),u?(s&536870912)!==0&&(a.flags&128)===0&&(qe(a),a.subtreeFlags&6&&(a.flags|=8192)):qe(a),s=a.updateQueue,s!==null&&dl(a,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==s&&(a.flags|=2048),n!==null&&ne(ia),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),qn(it),qe(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function k7(n,a){switch(Nc(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return qn(it),vt(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Nn(a),null;case 13:if(Yn(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(r(340));es()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return ne(at),null;case 4:return vt(),null;case 10:return qn(a.type),null;case 22:case 23:return Yn(a),Qc(),n!==null&&ne(ia),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return qn(it),null;case 25:return null;default:return null}}function q2(n,a){switch(Nc(a),a.tag){case 3:qn(it),vt();break;case 26:case 27:case 5:Nn(a);break;case 4:vt();break;case 13:Yn(a);break;case 19:ne(at);break;case 10:qn(a.type);break;case 22:case 23:Yn(a),Qc(),n!==null&&ne(ia);break;case 24:qn(it)}}function ys(n,a){try{var s=a.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&n)===n){u=void 0;var g=s.create,b=s.inst;u=g(),b.destroy=u}s=s.next}while(s!==h)}}catch(M){Pe(a,a.return,M)}}function xi(n,a,s){try{var u=a.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var g=h.next;u=g;do{if((u.tag&n)===n){var b=u.inst,M=b.destroy;if(M!==void 0){b.destroy=void 0,h=a;var V=s,G=M;try{G()}catch(Z){Pe(h,V,Z)}}}u=u.next}while(u!==g)}}catch(Z){Pe(a,a.return,Z)}}function I2(n){var a=n.updateQueue;if(a!==null){var s=n.stateNode;try{D1(a,s)}catch(u){Pe(n,n.return,u)}}}function Y2(n,a,s){s.props=ra(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(u){Pe(n,a,u)}}function vs(n,a){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof s=="function"?n.refCleanup=s(u):s.current=u}}catch(h){Pe(n,a,h)}}function wn(n,a){var s=n.ref,u=n.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(h){Pe(n,a,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Pe(n,a,h)}else s.current=null}function X2(n){var a=n.type,s=n.memoizedProps,u=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break e;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(h){Pe(n,n.return,h)}}function Mf(n,a,s){try{var u=n.stateNode;i8(u,n.type,s,a),u[Ot]=a}catch(h){Pe(n,n.return,h)}}function F2(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ai(n.type)||n.tag===4}function Af(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||F2(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ai(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lf(n,a,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(n),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Tl));else if(u!==4&&(u===27&&Ai(n.type)&&(s=n.stateNode,a=null),n=n.child,n!==null))for(Lf(n,a,s),n=n.sibling;n!==null;)Lf(n,a,s),n=n.sibling}function hl(n,a,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?s.insertBefore(n,a):s.appendChild(n);else if(u!==4&&(u===27&&Ai(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(hl(n,a,s),n=n.sibling;n!==null;)hl(n,a,s),n=n.sibling}function Z2(n){var a=n.stateNode,s=n.memoizedProps;try{for(var u=n.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);pt(a,u,s),a[xt]=n,a[Ot]=s}catch(g){Pe(n,n.return,g)}}var Zn=!1,Ke=!1,Of=!1,K2=typeof WeakSet=="function"?WeakSet:Set,lt=null;function N7(n,a){if(n=n.containerInfo,Jf=jl,n=o1(n),Mc(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break e}var b=0,M=-1,V=-1,G=0,Z=0,J=n,q=null;t:for(;;){for(var I;J!==s||h!==0&&J.nodeType!==3||(M=b+h),J!==g||u!==0&&J.nodeType!==3||(V=b+u),J.nodeType===3&&(b+=J.nodeValue.length),(I=J.firstChild)!==null;)q=J,J=I;for(;;){if(J===n)break t;if(q===s&&++G===h&&(M=b),q===g&&++Z===u&&(V=b),(I=J.nextSibling)!==null)break;J=q,q=J.parentNode}J=I}s=M===-1||V===-1?null:{start:M,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(ed={focusedElem:n,selectionRange:s},jl=!1,lt=a;lt!==null;)if(a=lt,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,lt=n;else for(;lt!==null;){switch(a=lt,g=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,s=a,h=g.memoizedProps,g=g.memoizedState,u=s.stateNode;try{var he=ra(s.type,h,s.elementType===s.type);n=u.getSnapshotBeforeUpdate(he,g),u.__reactInternalSnapshotBeforeUpdate=n}catch(ce){Pe(s,s.return,ce)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,s=n.nodeType,s===9)id(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":id(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=a.sibling,n!==null){n.return=a.return,lt=n;break}lt=a.return}}function Q2(n,a,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:bi(n,s),u&4&&ys(5,s);break;case 1:if(bi(n,s),u&4)if(n=s.stateNode,a===null)try{n.componentDidMount()}catch(b){Pe(s,s.return,b)}else{var h=ra(s.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(h,a,n.__reactInternalSnapshotBeforeUpdate)}catch(b){Pe(s,s.return,b)}}u&64&&I2(s),u&512&&vs(s,s.return);break;case 3:if(bi(n,s),u&64&&(n=s.updateQueue,n!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{D1(n,a)}catch(b){Pe(s,s.return,b)}}break;case 27:a===null&&u&4&&Z2(s);case 26:case 5:bi(n,s),a===null&&u&4&&X2(s),u&512&&vs(s,s.return);break;case 12:bi(n,s);break;case 13:bi(n,s),u&4&&em(n,s),u&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=Y7.bind(null,s),c8(n,s))));break;case 22:if(u=s.memoizedState!==null||Zn,!u){a=a!==null&&a.memoizedState!==null||Ke,h=Zn;var g=Ke;Zn=u,(Ke=a)&&!g?wi(n,s,(s.subtreeFlags&8772)!==0):bi(n,s),Zn=h,Ke=g}break;case 30:break;default:bi(n,s)}}function W2(n){var a=n.alternate;a!==null&&(n.alternate=null,W2(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&oc(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Ue=null,Dt=!1;function Kn(n,a,s){for(s=s.child;s!==null;)J2(n,a,s),s=s.sibling}function J2(n,a,s){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Br,s)}catch{}switch(s.tag){case 26:Ke||wn(s,a),Kn(n,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ke||wn(s,a);var u=Ue,h=Dt;Ai(s.type)&&(Ue=s.stateNode,Dt=!1),Kn(n,a,s),As(s.stateNode),Ue=u,Dt=h;break;case 5:Ke||wn(s,a);case 6:if(u=Ue,h=Dt,Ue=null,Kn(n,a,s),Ue=u,Dt=h,Ue!==null)if(Dt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(s.stateNode)}catch(g){Pe(s,a,g)}else try{Ue.removeChild(s.stateNode)}catch(g){Pe(s,a,g)}break;case 18:Ue!==null&&(Dt?(n=Ue,Um(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),zs(n)):Um(Ue,s.stateNode));break;case 4:u=Ue,h=Dt,Ue=s.stateNode.containerInfo,Dt=!0,Kn(n,a,s),Ue=u,Dt=h;break;case 0:case 11:case 14:case 15:Ke||xi(2,s,a),Ke||xi(4,s,a),Kn(n,a,s);break;case 1:Ke||(wn(s,a),u=s.stateNode,typeof u.componentWillUnmount=="function"&&Y2(s,a,u)),Kn(n,a,s);break;case 21:Kn(n,a,s);break;case 22:Ke=(u=Ke)||s.memoizedState!==null,Kn(n,a,s),Ke=u;break;default:Kn(n,a,s)}}function em(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{zs(n)}catch(s){Pe(a,a.return,s)}}function P7(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new K2),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new K2),a;default:throw Error(r(435,n.tag))}}function Rf(n,a){var s=P7(n);a.forEach(function(u){var h=X7.bind(null,n,u);s.has(u)||(s.add(u),u.then(h,h))})}function Ut(n,a){var s=a.deletions;if(s!==null)for(var u=0;u<s.length;u++){var h=s[u],g=n,b=a,M=b;e:for(;M!==null;){switch(M.tag){case 27:if(Ai(M.type)){Ue=M.stateNode,Dt=!1;break e}break;case 5:Ue=M.stateNode,Dt=!1;break e;case 3:case 4:Ue=M.stateNode.containerInfo,Dt=!0;break e}M=M.return}if(Ue===null)throw Error(r(160));J2(g,b,h),Ue=null,Dt=!1,g=h.alternate,g!==null&&(g.return=null),h.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)tm(a,n),a=a.sibling}var fn=null;function tm(n,a){var s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Ut(a,n),$t(n),u&4&&(xi(3,n,n.return),ys(3,n),xi(5,n,n.return));break;case 1:Ut(a,n),$t(n),u&512&&(Ke||s===null||wn(s,s.return)),u&64&&Zn&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var h=fn;if(Ut(a,n),$t(n),u&512&&(Ke||s===null||wn(s,s.return)),u&4){var g=s!==null?s.memoizedState:null;if(u=n.memoizedState,s===null)if(u===null)if(n.stateNode===null){e:{u=n.type,s=n.memoizedProps,h=h.ownerDocument||h;t:switch(u){case"title":g=h.getElementsByTagName("title")[0],(!g||g[$r]||g[xt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=h.createElement(u),h.head.insertBefore(g,h.querySelector("head > title"))),pt(g,u,s),g[xt]=n,st(g),u=g;break e;case"link":var b=Zm("link","href",h).get(u+(s.href||""));if(b){for(var M=0;M<b.length;M++)if(g=b[M],g.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&g.getAttribute("rel")===(s.rel==null?null:s.rel)&&g.getAttribute("title")===(s.title==null?null:s.title)&&g.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(M,1);break t}}g=h.createElement(u),pt(g,u,s),h.head.appendChild(g);break;case"meta":if(b=Zm("meta","content",h).get(u+(s.content||""))){for(M=0;M<b.length;M++)if(g=b[M],g.getAttribute("content")===(s.content==null?null:""+s.content)&&g.getAttribute("name")===(s.name==null?null:s.name)&&g.getAttribute("property")===(s.property==null?null:s.property)&&g.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&g.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(M,1);break t}}g=h.createElement(u),pt(g,u,s),h.head.appendChild(g);break;default:throw Error(r(468,u))}g[xt]=n,st(g),u=g}n.stateNode=u}else Km(h,n.type,n.stateNode);else n.stateNode=Fm(h,u,n.memoizedProps);else g!==u?(g===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):g.count--,u===null?Km(h,n.type,n.stateNode):Fm(h,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Mf(n,n.memoizedProps,s.memoizedProps)}break;case 27:Ut(a,n),$t(n),u&512&&(Ke||s===null||wn(s,s.return)),s!==null&&u&4&&Mf(n,n.memoizedProps,s.memoizedProps);break;case 5:if(Ut(a,n),$t(n),u&512&&(Ke||s===null||wn(s,s.return)),n.flags&32){h=n.stateNode;try{La(h,"")}catch(I){Pe(n,n.return,I)}}u&4&&n.stateNode!=null&&(h=n.memoizedProps,Mf(n,h,s!==null?s.memoizedProps:h)),u&1024&&(Of=!0);break;case 6:if(Ut(a,n),$t(n),u&4){if(n.stateNode===null)throw Error(r(162));u=n.memoizedProps,s=n.stateNode;try{s.nodeValue=u}catch(I){Pe(n,n.return,I)}}break;case 3:if(Ll=null,h=fn,fn=Ml(a.containerInfo),Ut(a,n),fn=h,$t(n),u&4&&s!==null&&s.memoizedState.isDehydrated)try{zs(a.containerInfo)}catch(I){Pe(n,n.return,I)}Of&&(Of=!1,nm(n));break;case 4:u=fn,fn=Ml(n.stateNode.containerInfo),Ut(a,n),$t(n),fn=u;break;case 12:Ut(a,n),$t(n);break;case 13:Ut(a,n),$t(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(kf=vn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Rf(n,u)));break;case 22:h=n.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,G=Zn,Z=Ke;if(Zn=G||h,Ke=Z||V,Ut(a,n),Ke=Z,Zn=G,$t(n),u&8192)e:for(a=n.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(s===null||V||Zn||Ke||sa(n)),s=null,a=n;;){if(a.tag===5||a.tag===26){if(s===null){V=s=a;try{if(g=V.stateNode,h)b=g.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{M=V.stateNode;var J=V.memoizedProps.style,q=J!=null&&J.hasOwnProperty("display")?J.display:null;M.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(I){Pe(V,V.return,I)}}}else if(a.tag===6){if(s===null){V=a;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(I){Pe(V,V.return,I)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}u&4&&(u=n.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,Rf(n,s))));break;case 19:Ut(a,n),$t(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Rf(n,u)));break;case 30:break;case 21:break;default:Ut(a,n),$t(n)}}function $t(n){var a=n.flags;if(a&2){try{for(var s,u=n.return;u!==null;){if(F2(u)){s=u;break}u=u.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var h=s.stateNode,g=Af(n);hl(n,g,h);break;case 5:var b=s.stateNode;s.flags&32&&(La(b,""),s.flags&=-33);var M=Af(n);hl(n,M,b);break;case 3:case 4:var V=s.stateNode.containerInfo,G=Af(n);Lf(n,G,V);break;default:throw Error(r(161))}}catch(Z){Pe(n,n.return,Z)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function nm(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;nm(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function bi(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Q2(n,a.alternate,a),a=a.sibling}function sa(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:xi(4,a,a.return),sa(a);break;case 1:wn(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&Y2(a,a.return,s),sa(a);break;case 27:As(a.stateNode);case 26:case 5:wn(a,a.return),sa(a);break;case 22:a.memoizedState===null&&sa(a);break;case 30:sa(a);break;default:sa(a)}n=n.sibling}}function wi(n,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var u=a.alternate,h=n,g=a,b=g.flags;switch(g.tag){case 0:case 11:case 15:wi(h,g,s),ys(4,g);break;case 1:if(wi(h,g,s),u=g,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(G){Pe(u,u.return,G)}if(u=g,h=u.updateQueue,h!==null){var M=u.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)j1(V[h],M)}catch(G){Pe(u,u.return,G)}}s&&b&64&&I2(g),vs(g,g.return);break;case 27:Z2(g);case 26:case 5:wi(h,g,s),s&&u===null&&b&4&&X2(g),vs(g,g.return);break;case 12:wi(h,g,s);break;case 13:wi(h,g,s),s&&b&4&&em(h,g);break;case 22:g.memoizedState===null&&wi(h,g,s),vs(g,g.return);break;case 30:break;default:wi(h,g,s)}a=a.sibling}}function jf(n,a){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&is(s))}function Df(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&is(n))}function Sn(n,a,s,u){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)im(n,a,s,u),a=a.sibling}function im(n,a,s,u){var h=a.flags;switch(a.tag){case 0:case 11:case 15:Sn(n,a,s,u),h&2048&&ys(9,a);break;case 1:Sn(n,a,s,u);break;case 3:Sn(n,a,s,u),h&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&is(n)));break;case 12:if(h&2048){Sn(n,a,s,u),n=a.stateNode;try{var g=a.memoizedProps,b=g.id,M=g.onPostCommit;typeof M=="function"&&M(b,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(V){Pe(a,a.return,V)}}else Sn(n,a,s,u);break;case 13:Sn(n,a,s,u);break;case 23:break;case 22:g=a.stateNode,b=a.alternate,a.memoizedState!==null?g._visibility&2?Sn(n,a,s,u):xs(n,a):g._visibility&2?Sn(n,a,s,u):(g._visibility|=2,Xa(n,a,s,u,(a.subtreeFlags&10256)!==0)),h&2048&&jf(b,a);break;case 24:Sn(n,a,s,u),h&2048&&Df(a.alternate,a);break;default:Sn(n,a,s,u)}}function Xa(n,a,s,u,h){for(h=h&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=n,b=a,M=s,V=u,G=b.flags;switch(b.tag){case 0:case 11:case 15:Xa(g,b,M,V,h),ys(8,b);break;case 23:break;case 22:var Z=b.stateNode;b.memoizedState!==null?Z._visibility&2?Xa(g,b,M,V,h):xs(g,b):(Z._visibility|=2,Xa(g,b,M,V,h)),h&&G&2048&&jf(b.alternate,b);break;case 24:Xa(g,b,M,V,h),h&&G&2048&&Df(b.alternate,b);break;default:Xa(g,b,M,V,h)}a=a.sibling}}function xs(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=n,u=a,h=u.flags;switch(u.tag){case 22:xs(s,u),h&2048&&jf(u.alternate,u);break;case 24:xs(s,u),h&2048&&Df(u.alternate,u);break;default:xs(s,u)}a=a.sibling}}var bs=8192;function Fa(n){if(n.subtreeFlags&bs)for(n=n.child;n!==null;)am(n),n=n.sibling}function am(n){switch(n.tag){case 26:Fa(n),n.flags&bs&&n.memoizedState!==null&&C8(fn,n.memoizedState,n.memoizedProps);break;case 5:Fa(n);break;case 3:case 4:var a=fn;fn=Ml(n.stateNode.containerInfo),Fa(n),fn=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=bs,bs=16777216,Fa(n),bs=a):Fa(n));break;default:Fa(n)}}function rm(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function ws(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];lt=u,om(u,n)}rm(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sm(n),n=n.sibling}function sm(n){switch(n.tag){case 0:case 11:case 15:ws(n),n.flags&2048&&xi(9,n,n.return);break;case 3:ws(n);break;case 12:ws(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,pl(n)):ws(n);break;default:ws(n)}}function pl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];lt=u,om(u,n)}rm(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:xi(8,a,a.return),pl(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,pl(a));break;default:pl(a)}n=n.sibling}}function om(n,a){for(;lt!==null;){var s=lt;switch(s.tag){case 0:case 11:case 15:xi(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:is(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,lt=u;else e:for(s=n;lt!==null;){u=lt;var h=u.sibling,g=u.return;if(W2(u),u===s){lt=null;break e}if(h!==null){h.return=g,lt=h;break e}lt=g}}}var B7={getCacheForType:function(n){var a=bt(it),s=a.data.get(n);return s===void 0&&(s=n(),a.data.set(n,s)),s}},_7=typeof WeakMap=="function"?WeakMap:Map,He=0,Be=null,we=null,Ce=0,Ve=0,Gt=null,Si=!1,Za=!1,Hf=!1,Qn=0,Xe=0,Ci=0,oa=0,Vf=0,an=0,Ka=0,Ss=null,Ht=null,zf=!1,kf=0,ml=1/0,gl=null,Ti=null,ht=0,Ei=null,Qa=null,Wa=0,Nf=0,Pf=null,lm=null,Cs=0,Bf=null;function qt(){if((He&2)!==0&&Ce!==0)return Ce&-Ce;if(B.T!==null){var n=Ba;return n!==0?n:Yf()}return Tp()}function um(){an===0&&(an=(Ce&536870912)===0||Ee?bp():536870912);var n=nn.current;return n!==null&&(n.flags|=32),an}function It(n,a,s){(n===Be&&(Ve===2||Ve===9)||n.cancelPendingCommit!==null)&&(Ja(n,0),Mi(n,Ce,an,!1)),Ur(n,s),((He&2)===0||n!==Be)&&(n===Be&&((He&2)===0&&(oa|=s),Xe===4&&Mi(n,Ce,an,!1)),Cn(n))}function cm(n,a,s){if((He&6)!==0)throw Error(r(327));var u=!s&&(a&124)===0&&(a&n.expiredLanes)===0||_r(n,a),h=u?G7(n,a):$f(n,a,!0),g=u;do{if(h===0){Za&&!u&&Mi(n,a,0,!1);break}else{if(s=n.current.alternate,g&&!U7(s)){h=$f(n,a,!1),g=!1;continue}if(h===2){if(g=a,n.errorRecoveryDisabledLanes&g)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){a=b;e:{var M=n;h=Ss;var V=M.current.memoizedState.isDehydrated;if(V&&(Ja(M,b).flags|=256),b=$f(M,b,!1),b!==2){if(Hf&&!V){M.errorRecoveryDisabledLanes|=g,oa|=g,h=4;break e}g=Ht,Ht=h,g!==null&&(Ht===null?Ht=g:Ht.push.apply(Ht,g))}h=b}if(g=!1,h!==2)continue}}if(h===1){Ja(n,0),Mi(n,a,0,!0);break}e:{switch(u=n,g=h,g){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:Mi(u,a,an,!Si);break e;case 2:Ht=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(h=kf+300-vn(),10<h)){if(Mi(u,a,an,!Si),Ao(u,0,!0)!==0)break e;u.timeoutHandle=Bm(fm.bind(null,u,s,Ht,gl,zf,a,an,oa,Ka,Si,g,2,-0,0),h);break e}fm(u,s,Ht,gl,zf,a,an,oa,Ka,Si,g,0,-0,0)}}break}while(!0);Cn(n)}function fm(n,a,s,u,h,g,b,M,V,G,Z,J,q,I){if(n.timeoutHandle=-1,J=a.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Rs={stylesheets:null,count:0,unsuspend:S8},am(a),J=T8(),J!==null)){n.cancelPendingCommit=J(vm.bind(null,n,a,g,s,u,h,b,M,V,Z,1,q,I)),Mi(n,g,b,!G);return}vm(n,a,g,s,u,h,b,M,V)}function U7(n){for(var a=n;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var h=s[u],g=h.getSnapshot;h=h.value;try{if(!Bt(g(),h))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Mi(n,a,s,u){a&=~Vf,a&=~oa,n.suspendedLanes|=a,n.pingedLanes&=~a,u&&(n.warmLanes|=a),u=n.expirationTimes;for(var h=a;0<h;){var g=31-Pt(h),b=1<<g;u[g]=-1,h&=~b}s!==0&&Sp(n,s,a)}function yl(){return(He&6)===0?(Ts(0),!1):!0}function _f(){if(we!==null){if(Ve===0)var n=we.return;else n=we,Gn=ta=null,nf(n),Ia=null,ps=0,n=we;for(;n!==null;)q2(n.alternate,n),n=n.return;we=null}}function Ja(n,a){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,r8(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),_f(),Be=n,we=s=_n(n.current,null),Ce=a,Ve=0,Gt=null,Si=!1,Za=_r(n,a),Hf=!1,Ka=an=Vf=oa=Ci=Xe=0,Ht=Ss=null,zf=!1,(a&8)!==0&&(a|=a&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=a;0<u;){var h=31-Pt(u),g=1<<h;a|=n[h],u&=~g}return Qn=a,Bo(),s}function dm(n,a){ve=null,B.H=al,a===rs||a===Fo?(a=O1(),Ve=3):a===M1?(a=O1(),Ve=4):Ve=a===R2?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Gt=a,we===null&&(Xe=1,ul(n,Wt(a,n.current)))}function hm(){var n=B.H;return B.H=al,n===null?al:n}function pm(){var n=B.A;return B.A=B7,n}function Uf(){Xe=4,Si||(Ce&4194048)!==Ce&&nn.current!==null||(Za=!0),(Ci&134217727)===0&&(oa&134217727)===0||Be===null||Mi(Be,Ce,an,!1)}function $f(n,a,s){var u=He;He|=2;var h=hm(),g=pm();(Be!==n||Ce!==a)&&(gl=null,Ja(n,a)),a=!1;var b=Xe;e:do try{if(Ve!==0&&we!==null){var M=we,V=Gt;switch(Ve){case 8:_f(),b=6;break e;case 3:case 2:case 9:case 6:nn.current===null&&(a=!0);var G=Ve;if(Ve=0,Gt=null,er(n,M,V,G),s&&Za){b=0;break e}break;default:G=Ve,Ve=0,Gt=null,er(n,M,V,G)}}$7(),b=Xe;break}catch(Z){dm(n,Z)}while(!0);return a&&n.shellSuspendCounter++,Gn=ta=null,He=u,B.H=h,B.A=g,we===null&&(Be=null,Ce=0,Bo()),b}function $7(){for(;we!==null;)mm(we)}function G7(n,a){var s=He;He|=2;var u=hm(),h=pm();Be!==n||Ce!==a?(gl=null,ml=vn()+500,Ja(n,a)):Za=_r(n,a);e:do try{if(Ve!==0&&we!==null){a=we;var g=Gt;t:switch(Ve){case 1:Ve=0,Gt=null,er(n,a,g,1);break;case 2:case 9:if(A1(g)){Ve=0,Gt=null,gm(a);break}a=function(){Ve!==2&&Ve!==9||Be!==n||(Ve=7),Cn(n)},g.then(a,a);break e;case 3:Ve=7;break e;case 4:Ve=5;break e;case 7:A1(g)?(Ve=0,Gt=null,gm(a)):(Ve=0,Gt=null,er(n,a,g,7));break;case 5:var b=null;switch(we.tag){case 26:b=we.memoizedState;case 5:case 27:var M=we;if(!b||Qm(b)){Ve=0,Gt=null;var V=M.sibling;if(V!==null)we=V;else{var G=M.return;G!==null?(we=G,vl(G)):we=null}break t}}Ve=0,Gt=null,er(n,a,g,5);break;case 6:Ve=0,Gt=null,er(n,a,g,6);break;case 8:_f(),Xe=6;break e;default:throw Error(r(462))}}q7();break}catch(Z){dm(n,Z)}while(!0);return Gn=ta=null,B.H=u,B.A=h,He=s,we!==null?0:(Be=null,Ce=0,Bo(),Xe)}function q7(){for(;we!==null&&!d6();)mm(we)}function mm(n){var a=$2(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,a===null?vl(n):we=a}function gm(n){var a=n,s=a.alternate;switch(a.tag){case 15:case 0:a=k2(s,a,a.pendingProps,a.type,void 0,Ce);break;case 11:a=k2(s,a,a.pendingProps,a.type.render,a.ref,Ce);break;case 5:nf(a);default:q2(s,a),a=we=y1(a,Qn),a=$2(s,a,Qn)}n.memoizedProps=n.pendingProps,a===null?vl(n):we=a}function er(n,a,s,u){Gn=ta=null,nf(a),Ia=null,ps=0;var h=a.return;try{if(H7(n,h,a,s,Ce)){Xe=1,ul(n,Wt(s,n.current)),we=null;return}}catch(g){if(h!==null)throw we=h,g;Xe=1,ul(n,Wt(s,n.current)),we=null;return}a.flags&32768?(Ee||u===1?n=!0:Za||(Ce&536870912)!==0?n=!1:(Si=n=!0,(u===2||u===9||u===3||u===6)&&(u=nn.current,u!==null&&u.tag===13&&(u.flags|=16384))),ym(a,n)):vl(a)}function vl(n){var a=n;do{if((a.flags&32768)!==0){ym(a,Si);return}n=a.return;var s=z7(a.alternate,a,Qn);if(s!==null){we=s;return}if(a=a.sibling,a!==null){we=a;return}we=a=n}while(a!==null);Xe===0&&(Xe=5)}function ym(n,a){do{var s=k7(n.alternate,n);if(s!==null){s.flags&=32767,we=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(n=n.sibling,n!==null)){we=n;return}we=n=s}while(n!==null);Xe=6,we=null}function vm(n,a,s,u,h,g,b,M,V){n.cancelPendingCommit=null;do xl();while(ht!==0);if((He&6)!==0)throw Error(r(327));if(a!==null){if(a===n.current)throw Error(r(177));if(g=a.lanes|a.childLanes,g|=jc,S6(n,s,g,b,M,V),n===Be&&(we=Be=null,Ce=0),Qa=a,Ei=n,Wa=s,Nf=g,Pf=h,lm=u,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,F7(To,function(){return Cm(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||u){u=B.T,B.T=null,h=K.p,K.p=2,b=He,He|=4;try{N7(n,a,s)}finally{He=b,K.p=h,B.T=u}}ht=1,xm(),bm(),wm()}}function xm(){if(ht===1){ht=0;var n=Ei,a=Qa,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var u=K.p;K.p=2;var h=He;He|=4;try{tm(a,n);var g=ed,b=o1(n.containerInfo),M=g.focusedElem,V=g.selectionRange;if(b!==M&&M&&M.ownerDocument&&s1(M.ownerDocument.documentElement,M)){if(V!==null&&Mc(M)){var G=V.start,Z=V.end;if(Z===void 0&&(Z=G),"selectionStart"in M)M.selectionStart=G,M.selectionEnd=Math.min(Z,M.value.length);else{var J=M.ownerDocument||document,q=J&&J.defaultView||window;if(q.getSelection){var I=q.getSelection(),he=M.textContent.length,ce=Math.min(V.start,he),Ne=V.end===void 0?ce:Math.min(V.end,he);!I.extend&&ce>Ne&&(b=Ne,Ne=ce,ce=b);var P=r1(M,ce),k=r1(M,Ne);if(P&&k&&(I.rangeCount!==1||I.anchorNode!==P.node||I.anchorOffset!==P.offset||I.focusNode!==k.node||I.focusOffset!==k.offset)){var $=J.createRange();$.setStart(P.node,P.offset),I.removeAllRanges(),ce>Ne?(I.addRange($),I.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),I.addRange($))}}}}for(J=[],I=M;I=I.parentNode;)I.nodeType===1&&J.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof M.focus=="function"&&M.focus(),M=0;M<J.length;M++){var W=J[M];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}jl=!!Jf,ed=Jf=null}finally{He=h,K.p=u,B.T=s}}n.current=a,ht=2}}function bm(){if(ht===2){ht=0;var n=Ei,a=Qa,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var u=K.p;K.p=2;var h=He;He|=4;try{Q2(n,a.alternate,a)}finally{He=h,K.p=u,B.T=s}}ht=3}}function wm(){if(ht===4||ht===3){ht=0,h6();var n=Ei,a=Qa,s=Wa,u=lm;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ht=5:(ht=0,Qa=Ei=null,Sm(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Ti=null),rc(s),a=a.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Br,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=B.T,h=K.p,K.p=2,B.T=null;try{for(var g=n.onRecoverableError,b=0;b<u.length;b++){var M=u[b];g(M.value,{componentStack:M.stack})}}finally{B.T=a,K.p=h}}(Wa&3)!==0&&xl(),Cn(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===Bf?Cs++:(Cs=0,Bf=n):Cs=0,Ts(0)}}function Sm(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,is(a)))}function xl(n){return xm(),bm(),wm(),Cm()}function Cm(){if(ht!==5)return!1;var n=Ei,a=Nf;Nf=0;var s=rc(Wa),u=B.T,h=K.p;try{K.p=32>s?32:s,B.T=null,s=Pf,Pf=null;var g=Ei,b=Wa;if(ht=0,Qa=Ei=null,Wa=0,(He&6)!==0)throw Error(r(331));var M=He;if(He|=4,sm(g.current),im(g,g.current,b,s),He=M,Ts(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Br,g)}catch{}return!0}finally{K.p=h,B.T=u,Sm(n,a)}}function Tm(n,a,s){a=Wt(s,a),a=yf(n.stateNode,a,2),n=mi(n,a,2),n!==null&&(Ur(n,2),Cn(n))}function Pe(n,a,s){if(n.tag===3)Tm(n,n,s);else for(;a!==null;){if(a.tag===3){Tm(a,n,s);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ti===null||!Ti.has(u))){n=Wt(s,n),s=L2(2),u=mi(a,s,2),u!==null&&(O2(s,u,a,n),Ur(u,2),Cn(u));break}}a=a.return}}function Gf(n,a,s){var u=n.pingCache;if(u===null){u=n.pingCache=new _7;var h=new Set;u.set(a,h)}else h=u.get(a),h===void 0&&(h=new Set,u.set(a,h));h.has(s)||(Hf=!0,h.add(s),n=I7.bind(null,n,a,s),a.then(n,n))}function I7(n,a,s){var u=n.pingCache;u!==null&&u.delete(a),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Be===n&&(Ce&s)===s&&(Xe===4||Xe===3&&(Ce&62914560)===Ce&&300>vn()-kf?(He&2)===0&&Ja(n,0):Vf|=s,Ka===Ce&&(Ka=0)),Cn(n)}function Em(n,a){a===0&&(a=wp()),n=za(n,a),n!==null&&(Ur(n,a),Cn(n))}function Y7(n){var a=n.memoizedState,s=0;a!==null&&(s=a.retryLane),Em(n,s)}function X7(n,a){var s=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(r(314))}u!==null&&u.delete(a),Em(n,s)}function F7(n,a){return tc(n,a)}var bl=null,tr=null,qf=!1,wl=!1,If=!1,la=0;function Cn(n){n!==tr&&n.next===null&&(tr===null?bl=tr=n:tr=tr.next=n),wl=!0,qf||(qf=!0,K7())}function Ts(n,a){if(!If&&wl){If=!0;do for(var s=!1,u=bl;u!==null;){if(n!==0){var h=u.pendingLanes;if(h===0)var g=0;else{var b=u.suspendedLanes,M=u.pingedLanes;g=(1<<31-Pt(42|n)+1)-1,g&=h&~(b&~M),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(s=!0,Om(u,g))}else g=Ce,g=Ao(u,u===Be?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||_r(u,g)||(s=!0,Om(u,g));u=u.next}while(s);If=!1}}function Z7(){Mm()}function Mm(){wl=qf=!1;var n=0;la!==0&&(a8()&&(n=la),la=0);for(var a=vn(),s=null,u=bl;u!==null;){var h=u.next,g=Am(u,a);g===0?(u.next=null,s===null?bl=h:s.next=h,h===null&&(tr=s)):(s=u,(n!==0||(g&3)!==0)&&(wl=!0)),u=h}Ts(n)}function Am(n,a){for(var s=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var b=31-Pt(g),M=1<<b,V=h[b];V===-1?((M&s)===0||(M&u)!==0)&&(h[b]=w6(M,a)):V<=a&&(n.expiredLanes|=M),g&=~M}if(a=Be,s=Ce,s=Ao(n,n===a?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,s===0||n===a&&(Ve===2||Ve===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&nc(u),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||_r(n,s)){if(a=s&-s,a===n.callbackPriority)return a;switch(u!==null&&nc(u),rc(s)){case 2:case 8:s=vp;break;case 32:s=To;break;case 268435456:s=xp;break;default:s=To}return u=Lm.bind(null,n),s=tc(s,u),n.callbackPriority=a,n.callbackNode=s,a}return u!==null&&u!==null&&nc(u),n.callbackPriority=2,n.callbackNode=null,2}function Lm(n,a){if(ht!==0&&ht!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(xl()&&n.callbackNode!==s)return null;var u=Ce;return u=Ao(n,n===Be?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(cm(n,u,a),Am(n,vn()),n.callbackNode!=null&&n.callbackNode===s?Lm.bind(null,n):null)}function Om(n,a){if(xl())return null;cm(n,a,!0)}function K7(){s8(function(){(He&6)!==0?tc(yp,Z7):Mm()})}function Yf(){return la===0&&(la=bp()),la}function Rm(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Do(""+n)}function jm(n,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,n.id&&s.setAttribute("form",n.id),a.parentNode.insertBefore(s,a),n=new FormData(n),s.parentNode.removeChild(s),n}function Q7(n,a,s,u,h){if(a==="submit"&&s&&s.stateNode===h){var g=Rm((h[Ot]||null).action),b=u.submitter;b&&(a=(a=b[Ot]||null)?Rm(a.formAction):b.getAttribute("formAction"),a!==null&&(g=a,b=null));var M=new ko("action","action",null,u,h);n.push({event:M,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(la!==0){var V=b?jm(h,b):new FormData(h);df(s,{pending:!0,data:V,method:h.method,action:g},null,V)}}else typeof g=="function"&&(M.preventDefault(),V=b?jm(h,b):new FormData(h),df(s,{pending:!0,data:V,method:h.method,action:g},g,V))},currentTarget:h}]})}}for(var Xf=0;Xf<Rc.length;Xf++){var Ff=Rc[Xf],W7=Ff.toLowerCase(),J7=Ff[0].toUpperCase()+Ff.slice(1);cn(W7,"on"+J7)}cn(c1,"onAnimationEnd"),cn(f1,"onAnimationIteration"),cn(d1,"onAnimationStart"),cn("dblclick","onDoubleClick"),cn("focusin","onFocus"),cn("focusout","onBlur"),cn(g7,"onTransitionRun"),cn(y7,"onTransitionStart"),cn(v7,"onTransitionCancel"),cn(h1,"onTransitionEnd"),Ea("onMouseEnter",["mouseout","mouseover"]),Ea("onMouseLeave",["mouseout","mouseover"]),Ea("onPointerEnter",["pointerout","pointerover"]),Ea("onPointerLeave",["pointerout","pointerover"]),Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Es));function Dm(n,a){a=(a&4)!==0;for(var s=0;s<n.length;s++){var u=n[s],h=u.event;u=u.listeners;e:{var g=void 0;if(a)for(var b=u.length-1;0<=b;b--){var M=u[b],V=M.instance,G=M.currentTarget;if(M=M.listener,V!==g&&h.isPropagationStopped())break e;g=M,h.currentTarget=G;try{g(h)}catch(Z){ll(Z)}h.currentTarget=null,g=V}else for(b=0;b<u.length;b++){if(M=u[b],V=M.instance,G=M.currentTarget,M=M.listener,V!==g&&h.isPropagationStopped())break e;g=M,h.currentTarget=G;try{g(h)}catch(Z){ll(Z)}h.currentTarget=null,g=V}}}}function Se(n,a){var s=a[sc];s===void 0&&(s=a[sc]=new Set);var u=n+"__bubble";s.has(u)||(Hm(a,n,2,!1),s.add(u))}function Zf(n,a,s){var u=0;a&&(u|=4),Hm(s,n,u,a)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function Kf(n){if(!n[Sl]){n[Sl]=!0,Mp.forEach(function(s){s!=="selectionchange"&&(e8.has(s)||Zf(s,!1,n),Zf(s,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Sl]||(a[Sl]=!0,Zf("selectionchange",!1,a))}}function Hm(n,a,s,u){switch(ig(a)){case 2:var h=A8;break;case 8:h=L8;break;default:h=cd}s=h.bind(null,a,s,n),h=void 0,!yc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(a,s,{capture:!0,passive:h}):n.addEventListener(a,s,!0):h!==void 0?n.addEventListener(a,s,{passive:h}):n.addEventListener(a,s,!1)}function Qf(n,a,s,u,h){var g=u;if((a&1)===0&&(a&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var M=u.stateNode.containerInfo;if(M===h)break;if(b===4)for(b=u.return;b!==null;){var V=b.tag;if((V===3||V===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;M!==null;){if(b=Sa(M),b===null)return;if(V=b.tag,V===5||V===6||V===26||V===27){u=g=b;continue e}M=M.parentNode}}u=u.return}_p(function(){var G=g,Z=mc(s),J=[];e:{var q=p1.get(n);if(q!==void 0){var I=ko,he=n;switch(n){case"keypress":if(Vo(s)===0)break e;case"keydown":case"keyup":I=F6;break;case"focusin":he="focus",I=wc;break;case"focusout":he="blur",I=wc;break;case"beforeblur":case"afterblur":I=wc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=k6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Q6;break;case c1:case f1:case d1:I=B6;break;case h1:I=J6;break;case"scroll":case"scrollend":I=V6;break;case"wheel":I=t7;break;case"copy":case"cut":case"paste":I=U6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Ip;break;case"toggle":case"beforetoggle":I=i7}var ce=(a&4)!==0,Ne=!ce&&(n==="scroll"||n==="scrollend"),P=ce?q!==null?q+"Capture":null:q;ce=[];for(var k=G,$;k!==null;){var W=k;if($=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||$===null||P===null||(W=qr(k,P),W!=null&&ce.push(Ms(k,W,$))),Ne)break;k=k.return}0<ce.length&&(q=new I(q,he,null,s,Z),J.push({event:q,listeners:ce}))}}if((a&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",I=n==="mouseout"||n==="pointerout",q&&s!==pc&&(he=s.relatedTarget||s.fromElement)&&(Sa(he)||he[wa]))break e;if((I||q)&&(q=Z.window===Z?Z:(q=Z.ownerDocument)?q.defaultView||q.parentWindow:window,I?(he=s.relatedTarget||s.toElement,I=G,he=he?Sa(he):null,he!==null&&(Ne=l(he),ce=he.tag,he!==Ne||ce!==5&&ce!==27&&ce!==6)&&(he=null)):(I=null,he=G),I!==he)){if(ce=Gp,W="onMouseLeave",P="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(ce=Ip,W="onPointerLeave",P="onPointerEnter",k="pointer"),Ne=I==null?q:Gr(I),$=he==null?q:Gr(he),q=new ce(W,k+"leave",I,s,Z),q.target=Ne,q.relatedTarget=$,W=null,Sa(Z)===G&&(ce=new ce(P,k+"enter",he,s,Z),ce.target=$,ce.relatedTarget=Ne,W=ce),Ne=W,I&&he)t:{for(ce=I,P=he,k=0,$=ce;$;$=nr($))k++;for($=0,W=P;W;W=nr(W))$++;for(;0<k-$;)ce=nr(ce),k--;for(;0<$-k;)P=nr(P),$--;for(;k--;){if(ce===P||P!==null&&ce===P.alternate)break t;ce=nr(ce),P=nr(P)}ce=null}else ce=null;I!==null&&Vm(J,q,I,ce,!1),he!==null&&Ne!==null&&Vm(J,Ne,he,ce,!0)}}e:{if(q=G?Gr(G):window,I=q.nodeName&&q.nodeName.toLowerCase(),I==="select"||I==="input"&&q.type==="file")var se=Jp;else if(Qp(q))if(e1)se=h7;else{se=f7;var xe=c7}else I=q.nodeName,!I||I.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?G&&hc(G.elementType)&&(se=Jp):se=d7;if(se&&(se=se(n,G))){Wp(J,se,s,Z);break e}xe&&xe(n,q,G),n==="focusout"&&G&&q.type==="number"&&G.memoizedProps.value!=null&&dc(q,"number",q.value)}switch(xe=G?Gr(G):window,n){case"focusin":(Qp(xe)||xe.contentEditable==="true")&&(Da=xe,Ac=G,Wr=null);break;case"focusout":Wr=Ac=Da=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,l1(J,s,Z);break;case"selectionchange":if(m7)break;case"keydown":case"keyup":l1(J,s,Z)}var le;if(Cc)e:{switch(n){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else ja?Zp(n,s)&&(de="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(de="onCompositionStart");de&&(Yp&&s.locale!=="ko"&&(ja||de!=="onCompositionStart"?de==="onCompositionEnd"&&ja&&(le=Up()):(fi=Z,vc="value"in fi?fi.value:fi.textContent,ja=!0)),xe=Cl(G,de),0<xe.length&&(de=new qp(de,n,null,s,Z),J.push({event:de,listeners:xe}),le?de.data=le:(le=Kp(s),le!==null&&(de.data=le)))),(le=r7?s7(n,s):o7(n,s))&&(de=Cl(G,"onBeforeInput"),0<de.length&&(xe=new qp("onBeforeInput","beforeinput",null,s,Z),J.push({event:xe,listeners:de}),xe.data=le)),Q7(J,n,G,s,Z)}Dm(J,a)})}function Ms(n,a,s){return{instance:n,listener:a,currentTarget:s}}function Cl(n,a){for(var s=a+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||g===null||(h=qr(n,s),h!=null&&u.unshift(Ms(n,h,g)),h=qr(n,a),h!=null&&u.push(Ms(n,h,g))),n.tag===3)return u;n=n.return}return[]}function nr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Vm(n,a,s,u,h){for(var g=a._reactName,b=[];s!==null&&s!==u;){var M=s,V=M.alternate,G=M.stateNode;if(M=M.tag,V!==null&&V===u)break;M!==5&&M!==26&&M!==27||G===null||(V=G,h?(G=qr(s,g),G!=null&&b.unshift(Ms(s,G,V))):h||(G=qr(s,g),G!=null&&b.push(Ms(s,G,V)))),s=s.return}b.length!==0&&n.push({event:a,listeners:b})}var t8=/\r\n?/g,n8=/\u0000|\uFFFD/g;function zm(n){return(typeof n=="string"?n:""+n).replace(t8,`
`).replace(n8,"")}function km(n,a){return a=zm(a),zm(n)===a}function Tl(){}function ke(n,a,s,u,h,g){switch(s){case"children":typeof u=="string"?a==="body"||a==="textarea"&&u===""||La(n,u):(typeof u=="number"||typeof u=="bigint")&&a!=="body"&&La(n,""+u);break;case"className":Oo(n,"class",u);break;case"tabIndex":Oo(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Oo(n,s,u);break;case"style":Pp(n,u,g);break;case"data":if(a!=="object"){Oo(n,"data",u);break}case"src":case"href":if(u===""&&(a!=="a"||s!=="href")){n.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(s);break}u=Do(""+u),n.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(s==="formAction"?(a!=="input"&&ke(n,a,"name",h.name,h,null),ke(n,a,"formEncType",h.formEncType,h,null),ke(n,a,"formMethod",h.formMethod,h,null),ke(n,a,"formTarget",h.formTarget,h,null)):(ke(n,a,"encType",h.encType,h,null),ke(n,a,"method",h.method,h,null),ke(n,a,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(s);break}u=Do(""+u),n.setAttribute(s,u);break;case"onClick":u!=null&&(n.onclick=Tl);break;case"onScroll":u!=null&&Se("scroll",n);break;case"onScrollEnd":u!=null&&Se("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}s=Do(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,""+u):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":u===!0?n.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,u):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(s,u):n.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(s):n.setAttribute(s,u);break;case"popover":Se("beforetoggle",n),Se("toggle",n),Lo(n,"popover",u);break;case"xlinkActuate":Pn(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Pn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Pn(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Pn(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Pn(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Pn(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Pn(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Pn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Pn(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Lo(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=D6.get(s)||s,Lo(n,s,u))}}function Wf(n,a,s,u,h,g){switch(s){case"style":Pp(n,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"children":typeof u=="string"?La(n,u):(typeof u=="number"||typeof u=="bigint")&&La(n,""+u);break;case"onScroll":u!=null&&Se("scroll",n);break;case"onScrollEnd":u!=null&&Se("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Tl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ap.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),a=s.slice(2,h?s.length-7:void 0),g=n[Ot]||null,g=g!=null?g[s]:null,typeof g=="function"&&n.removeEventListener(a,g,h),typeof u=="function")){typeof g!="function"&&g!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(a,u,h);break e}s in n?n[s]=u:u===!0?n.setAttribute(s,""):Lo(n,s,u)}}}function pt(n,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",n),Se("load",n);var u=!1,h=!1,g;for(g in s)if(s.hasOwnProperty(g)){var b=s[g];if(b!=null)switch(g){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ke(n,a,g,b,s,null)}}h&&ke(n,a,"srcSet",s.srcSet,s,null),u&&ke(n,a,"src",s.src,s,null);return;case"input":Se("invalid",n);var M=g=b=h=null,V=null,G=null;for(u in s)if(s.hasOwnProperty(u)){var Z=s[u];if(Z!=null)switch(u){case"name":h=Z;break;case"type":b=Z;break;case"checked":V=Z;break;case"defaultChecked":G=Z;break;case"value":g=Z;break;case"defaultValue":M=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,a));break;default:ke(n,a,u,Z,s,null)}}Vp(n,g,M,V,G,b,h,!1),Ro(n);return;case"select":Se("invalid",n),u=b=g=null;for(h in s)if(s.hasOwnProperty(h)&&(M=s[h],M!=null))switch(h){case"value":g=M;break;case"defaultValue":b=M;break;case"multiple":u=M;default:ke(n,a,h,M,s,null)}a=g,s=b,n.multiple=!!u,a!=null?Aa(n,!!u,a,!1):s!=null&&Aa(n,!!u,s,!0);return;case"textarea":Se("invalid",n),g=h=u=null;for(b in s)if(s.hasOwnProperty(b)&&(M=s[b],M!=null))switch(b){case"value":u=M;break;case"defaultValue":h=M;break;case"children":g=M;break;case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(91));break;default:ke(n,a,b,M,s,null)}kp(n,u,h,g),Ro(n);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(u=s[V],u!=null))switch(V){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ke(n,a,V,u,s,null)}return;case"dialog":Se("beforetoggle",n),Se("toggle",n),Se("cancel",n),Se("close",n);break;case"iframe":case"object":Se("load",n);break;case"video":case"audio":for(u=0;u<Es.length;u++)Se(Es[u],n);break;case"image":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"embed":case"source":case"link":Se("error",n),Se("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in s)if(s.hasOwnProperty(G)&&(u=s[G],u!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ke(n,a,G,u,s,null)}return;default:if(hc(a)){for(Z in s)s.hasOwnProperty(Z)&&(u=s[Z],u!==void 0&&Wf(n,a,Z,u,s,void 0));return}}for(M in s)s.hasOwnProperty(M)&&(u=s[M],u!=null&&ke(n,a,M,u,s,null))}function i8(n,a,s,u){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,g=null,b=null,M=null,V=null,G=null,Z=null;for(I in s){var J=s[I];if(s.hasOwnProperty(I)&&J!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":V=J;default:u.hasOwnProperty(I)||ke(n,a,I,null,u,J)}}for(var q in u){var I=u[q];if(J=s[q],u.hasOwnProperty(q)&&(I!=null||J!=null))switch(q){case"type":g=I;break;case"name":h=I;break;case"checked":G=I;break;case"defaultChecked":Z=I;break;case"value":b=I;break;case"defaultValue":M=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(r(137,a));break;default:I!==J&&ke(n,a,q,I,u,J)}}fc(n,b,M,V,G,Z,g,h);return;case"select":I=b=M=q=null;for(g in s)if(V=s[g],s.hasOwnProperty(g)&&V!=null)switch(g){case"value":break;case"multiple":I=V;default:u.hasOwnProperty(g)||ke(n,a,g,null,u,V)}for(h in u)if(g=u[h],V=s[h],u.hasOwnProperty(h)&&(g!=null||V!=null))switch(h){case"value":q=g;break;case"defaultValue":M=g;break;case"multiple":b=g;default:g!==V&&ke(n,a,h,g,u,V)}a=M,s=b,u=I,q!=null?Aa(n,!!s,q,!1):!!u!=!!s&&(a!=null?Aa(n,!!s,a,!0):Aa(n,!!s,s?[]:"",!1));return;case"textarea":I=q=null;for(M in s)if(h=s[M],s.hasOwnProperty(M)&&h!=null&&!u.hasOwnProperty(M))switch(M){case"value":break;case"children":break;default:ke(n,a,M,null,u,h)}for(b in u)if(h=u[b],g=s[b],u.hasOwnProperty(b)&&(h!=null||g!=null))switch(b){case"value":q=h;break;case"defaultValue":I=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==g&&ke(n,a,b,h,u,g)}zp(n,q,I);return;case"option":for(var he in s)if(q=s[he],s.hasOwnProperty(he)&&q!=null&&!u.hasOwnProperty(he))switch(he){case"selected":n.selected=!1;break;default:ke(n,a,he,null,u,q)}for(V in u)if(q=u[V],I=s[V],u.hasOwnProperty(V)&&q!==I&&(q!=null||I!=null))switch(V){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:ke(n,a,V,q,u,I)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in s)q=s[ce],s.hasOwnProperty(ce)&&q!=null&&!u.hasOwnProperty(ce)&&ke(n,a,ce,null,u,q);for(G in u)if(q=u[G],I=s[G],u.hasOwnProperty(G)&&q!==I&&(q!=null||I!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,a));break;default:ke(n,a,G,q,u,I)}return;default:if(hc(a)){for(var Ne in s)q=s[Ne],s.hasOwnProperty(Ne)&&q!==void 0&&!u.hasOwnProperty(Ne)&&Wf(n,a,Ne,void 0,u,q);for(Z in u)q=u[Z],I=s[Z],!u.hasOwnProperty(Z)||q===I||q===void 0&&I===void 0||Wf(n,a,Z,q,u,I);return}}for(var P in s)q=s[P],s.hasOwnProperty(P)&&q!=null&&!u.hasOwnProperty(P)&&ke(n,a,P,null,u,q);for(J in u)q=u[J],I=s[J],!u.hasOwnProperty(J)||q===I||q==null&&I==null||ke(n,a,J,q,u,I)}var Jf=null,ed=null;function El(n){return n.nodeType===9?n:n.ownerDocument}function Nm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pm(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function td(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var nd=null;function a8(){var n=window.event;return n&&n.type==="popstate"?n===nd?!1:(nd=n,!0):(nd=null,!1)}var Bm=typeof setTimeout=="function"?setTimeout:void 0,r8=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,s8=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(n){return _m.resolve(null).then(n).catch(o8)}:Bm;function o8(n){setTimeout(function(){throw n})}function Ai(n){return n==="head"}function Um(n,a){var s=a,u=0,h=0;do{var g=s.nextSibling;if(n.removeChild(s),g&&g.nodeType===8)if(s=g.data,s==="/$"){if(0<u&&8>u){s=u;var b=n.ownerDocument;if(s&1&&As(b.documentElement),s&2&&As(b.body),s&4)for(s=b.head,As(s),b=s.firstChild;b;){var M=b.nextSibling,V=b.nodeName;b[$r]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&b.rel.toLowerCase()==="stylesheet"||s.removeChild(b),b=M}}if(h===0){n.removeChild(g),zs(a);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:u=s.charCodeAt(0)-48;else u=0;s=g}while(s);zs(a)}function id(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":id(s),oc(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function l8(n,a,s,u){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[$r])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var g=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=dn(n.nextSibling),n===null)break}return null}function u8(n,a,s){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=dn(n.nextSibling),n===null))return null;return n}function ad(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function c8(n,a){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")a();else{var u=function(){a(),s.removeEventListener("DOMContentLoaded",u)};s.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function dn(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var rd=null;function $m(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return n;a--}else s==="/$"&&a++}n=n.previousSibling}return null}function Gm(n,a,s){switch(a=El(s),n){case"html":if(n=a.documentElement,!n)throw Error(r(452));return n;case"head":if(n=a.head,!n)throw Error(r(453));return n;case"body":if(n=a.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function As(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);oc(n)}var rn=new Map,qm=new Set;function Ml(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Wn=K.d;K.d={f:f8,r:d8,D:h8,C:p8,L:m8,m:g8,X:v8,S:y8,M:x8};function f8(){var n=Wn.f(),a=yl();return n||a}function d8(n){var a=Ca(n);a!==null&&a.tag===5&&a.type==="form"?c2(a):Wn.r(n)}var ir=typeof document>"u"?null:document;function Im(n,a,s){var u=ir;if(u&&typeof a=="string"&&a){var h=Qt(a);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),qm.has(h)||(qm.add(h),n={rel:n,crossOrigin:s,href:a},u.querySelector(h)===null&&(a=u.createElement("link"),pt(a,"link",n),st(a),u.head.appendChild(a)))}}function h8(n){Wn.D(n),Im("dns-prefetch",n,null)}function p8(n,a){Wn.C(n,a),Im("preconnect",n,a)}function m8(n,a,s){Wn.L(n,a,s);var u=ir;if(u&&n&&a){var h='link[rel="preload"][as="'+Qt(a)+'"]';a==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Qt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Qt(s.imageSizes)+'"]')):h+='[href="'+Qt(n)+'"]';var g=h;switch(a){case"style":g=ar(n);break;case"script":g=rr(n)}rn.has(g)||(n=m({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:n,as:a},s),rn.set(g,n),u.querySelector(h)!==null||a==="style"&&u.querySelector(Ls(g))||a==="script"&&u.querySelector(Os(g))||(a=u.createElement("link"),pt(a,"link",n),st(a),u.head.appendChild(a)))}}function g8(n,a){Wn.m(n,a);var s=ir;if(s&&n){var u=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+Qt(u)+'"][href="'+Qt(n)+'"]',g=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=rr(n)}if(!rn.has(g)&&(n=m({rel:"modulepreload",href:n},a),rn.set(g,n),s.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Os(g)))return}u=s.createElement("link"),pt(u,"link",n),st(u),s.head.appendChild(u)}}}function y8(n,a,s){Wn.S(n,a,s);var u=ir;if(u&&n){var h=Ta(u).hoistableStyles,g=ar(n);a=a||"default";var b=h.get(g);if(!b){var M={loading:0,preload:null};if(b=u.querySelector(Ls(g)))M.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":a},s),(s=rn.get(g))&&sd(n,s);var V=b=u.createElement("link");st(V),pt(V,"link",n),V._p=new Promise(function(G,Z){V.onload=G,V.onerror=Z}),V.addEventListener("load",function(){M.loading|=1}),V.addEventListener("error",function(){M.loading|=2}),M.loading|=4,Al(b,a,u)}b={type:"stylesheet",instance:b,count:1,state:M},h.set(g,b)}}}function v8(n,a){Wn.X(n,a);var s=ir;if(s&&n){var u=Ta(s).hoistableScripts,h=rr(n),g=u.get(h);g||(g=s.querySelector(Os(h)),g||(n=m({src:n,async:!0},a),(a=rn.get(h))&&od(n,a),g=s.createElement("script"),st(g),pt(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(h,g))}}function x8(n,a){Wn.M(n,a);var s=ir;if(s&&n){var u=Ta(s).hoistableScripts,h=rr(n),g=u.get(h);g||(g=s.querySelector(Os(h)),g||(n=m({src:n,async:!0,type:"module"},a),(a=rn.get(h))&&od(n,a),g=s.createElement("script"),st(g),pt(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(h,g))}}function Ym(n,a,s,u){var h=(h=fe.current)?Ml(h):null;if(!h)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=ar(s.href),s=Ta(h).hoistableStyles,u=s.get(a),u||(u={type:"style",instance:null,count:0,state:null},s.set(a,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=ar(s.href);var g=Ta(h).hoistableStyles,b=g.get(n);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,b),(g=h.querySelector(Ls(n)))&&!g._p&&(b.instance=g,b.state.loading=5),rn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},rn.set(n,s),g||b8(h,n,s,b.state))),a&&u===null)throw Error(r(528,""));return b}if(a&&u!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=rr(s),s=Ta(h).hoistableScripts,u=s.get(a),u||(u={type:"script",instance:null,count:0,state:null},s.set(a,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function ar(n){return'href="'+Qt(n)+'"'}function Ls(n){return'link[rel="stylesheet"]['+n+"]"}function Xm(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function b8(n,a,s,u){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?u.loading=1:(a=n.createElement("link"),u.preload=a,a.addEventListener("load",function(){return u.loading|=1}),a.addEventListener("error",function(){return u.loading|=2}),pt(a,"link",s),st(a),n.head.appendChild(a))}function rr(n){return'[src="'+Qt(n)+'"]'}function Os(n){return"script[async]"+n}function Fm(n,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var u=n.querySelector('style[data-href~="'+Qt(s.href)+'"]');if(u)return a.instance=u,st(u),u;var h=m({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),st(u),pt(u,"style",h),Al(u,s.precedence,n),a.instance=u;case"stylesheet":h=ar(s.href);var g=n.querySelector(Ls(h));if(g)return a.state.loading|=4,a.instance=g,st(g),g;u=Xm(s),(h=rn.get(h))&&sd(u,h),g=(n.ownerDocument||n).createElement("link"),st(g);var b=g;return b._p=new Promise(function(M,V){b.onload=M,b.onerror=V}),pt(g,"link",u),a.state.loading|=4,Al(g,s.precedence,n),a.instance=g;case"script":return g=rr(s.src),(h=n.querySelector(Os(g)))?(a.instance=h,st(h),h):(u=s,(h=rn.get(g))&&(u=m({},s),od(u,h)),n=n.ownerDocument||n,h=n.createElement("script"),st(h),pt(h,"link",u),n.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(u=a.instance,a.state.loading|=4,Al(u,s.precedence,n));return a.instance}function Al(n,a,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,g=h,b=0;b<u.length;b++){var M=u[b];if(M.dataset.precedence===a)g=M;else if(g!==h)break}g?g.parentNode.insertBefore(n,g.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(n,a.firstChild))}function sd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function od(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Ll=null;function Zm(n,a,s){if(Ll===null){var u=new Map,h=Ll=new Map;h.set(s,u)}else h=Ll,u=h.get(s),u||(u=new Map,h.set(s,u));if(u.has(n))return u;for(u.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var g=s[h];if(!(g[$r]||g[xt]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var b=g.getAttribute(a)||"";b=n+b;var M=u.get(b);M?M.push(g):u.set(b,[g])}}return u}function Km(n,a,s){n=n.ownerDocument||n,n.head.insertBefore(s,a==="title"?n.querySelector("head > title"):null)}function w8(n,a,s){if(s===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Qm(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Rs=null;function S8(){}function C8(n,a,s){if(Rs===null)throw Error(r(475));var u=Rs;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=ar(s.href),g=n.querySelector(Ls(h));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=Ol.bind(u),n.then(u,u)),a.state.loading|=4,a.instance=g,st(g);return}g=n.ownerDocument||n,s=Xm(s),(h=rn.get(h))&&sd(s,h),g=g.createElement("link"),st(g);var b=g;b._p=new Promise(function(M,V){b.onload=M,b.onerror=V}),pt(g,"link",s),a.instance=g}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(u.count++,a=Ol.bind(u),n.addEventListener("load",a),n.addEventListener("error",a))}}function T8(){if(Rs===null)throw Error(r(475));var n=Rs;return n.stylesheets&&n.count===0&&ld(n,n.stylesheets),0<n.count?function(a){var s=setTimeout(function(){if(n.stylesheets&&ld(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Ol(){if(this.count--,this.count===0){if(this.stylesheets)ld(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Rl=null;function ld(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Rl=new Map,a.forEach(E8,n),Rl=null,Ol.call(n))}function E8(n,a){if(!(a.state.loading&4)){var s=Rl.get(n);if(s)var u=s.get(null);else{s=new Map,Rl.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<h.length;g++){var b=h[g];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),u=b)}u&&s.set(null,u)}h=a.instance,b=h.getAttribute("data-precedence"),g=s.get(b)||u,g===u&&s.set(null,h),s.set(b,h),this.count++,u=Ol.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),g?g.parentNode.insertBefore(h,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),a.state.loading|=4}}var js={$$typeof:C,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function M8(n,a,s,u,h,g,b,M){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ic(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ic(0),this.hiddenUpdates=ic(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=g,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function Wm(n,a,s,u,h,g,b,M,V,G,Z,J){return n=new M8(n,a,s,b,M,V,G,J),a=1,g===!0&&(a|=24),g=_t(3,null,null,a),n.current=g,g.stateNode=n,a=$c(),a.refCount++,n.pooledCache=a,a.refCount++,g.memoizedState={element:u,isDehydrated:s,cache:a},Yc(g),n}function Jm(n){return n?(n=ka,n):ka}function eg(n,a,s,u,h,g){h=Jm(h),u.context===null?u.context=h:u.pendingContext=h,u=pi(a),u.payload={element:s},g=g===void 0?null:g,g!==null&&(u.callback=g),s=mi(n,u,a),s!==null&&(It(s,n,a),os(s,n,a))}function tg(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<a?s:a}}function ud(n,a){tg(n,a),(n=n.alternate)&&tg(n,a)}function ng(n){if(n.tag===13){var a=za(n,67108864);a!==null&&It(a,n,67108864),ud(n,67108864)}}var jl=!0;function A8(n,a,s,u){var h=B.T;B.T=null;var g=K.p;try{K.p=2,cd(n,a,s,u)}finally{K.p=g,B.T=h}}function L8(n,a,s,u){var h=B.T;B.T=null;var g=K.p;try{K.p=8,cd(n,a,s,u)}finally{K.p=g,B.T=h}}function cd(n,a,s,u){if(jl){var h=fd(u);if(h===null)Qf(n,a,u,Dl,s),ag(n,u);else if(R8(h,n,a,s,u))u.stopPropagation();else if(ag(n,u),a&4&&-1<O8.indexOf(n)){for(;h!==null;){var g=Ca(h);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var b=Ii(g.pendingLanes);if(b!==0){var M=g;for(M.pendingLanes|=2,M.entangledLanes|=2;b;){var V=1<<31-Pt(b);M.entanglements[1]|=V,b&=~V}Cn(g),(He&6)===0&&(ml=vn()+500,Ts(0))}}break;case 13:M=za(g,2),M!==null&&It(M,g,2),yl(),ud(g,2)}if(g=fd(u),g===null&&Qf(n,a,u,Dl,s),g===h)break;h=g}h!==null&&u.stopPropagation()}else Qf(n,a,u,null,s)}}function fd(n){return n=mc(n),dd(n)}var Dl=null;function dd(n){if(Dl=null,n=Sa(n),n!==null){var a=l(n);if(a===null)n=null;else{var s=a.tag;if(s===13){if(n=c(a),n!==null)return n;n=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Dl=n,null}function ig(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(p6()){case yp:return 2;case vp:return 8;case To:case m6:return 32;case xp:return 268435456;default:return 32}default:return 32}}var hd=!1,Li=null,Oi=null,Ri=null,Ds=new Map,Hs=new Map,ji=[],O8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ag(n,a){switch(n){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":Ds.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hs.delete(a.pointerId)}}function Vs(n,a,s,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:a,domEventName:s,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},a!==null&&(a=Ca(a),a!==null&&ng(a)),n):(n.eventSystemFlags|=u,a=n.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),n)}function R8(n,a,s,u,h){switch(a){case"focusin":return Li=Vs(Li,n,a,s,u,h),!0;case"dragenter":return Oi=Vs(Oi,n,a,s,u,h),!0;case"mouseover":return Ri=Vs(Ri,n,a,s,u,h),!0;case"pointerover":var g=h.pointerId;return Ds.set(g,Vs(Ds.get(g)||null,n,a,s,u,h)),!0;case"gotpointercapture":return g=h.pointerId,Hs.set(g,Vs(Hs.get(g)||null,n,a,s,u,h)),!0}return!1}function rg(n){var a=Sa(n.target);if(a!==null){var s=l(a);if(s!==null){if(a=s.tag,a===13){if(a=c(s),a!==null){n.blockedOn=a,C6(n.priority,function(){if(s.tag===13){var u=qt();u=ac(u);var h=za(s,u);h!==null&&It(h,s,u),ud(s,u)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Hl(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var s=fd(n.nativeEvent);if(s===null){s=n.nativeEvent;var u=new s.constructor(s.type,s);pc=u,s.target.dispatchEvent(u),pc=null}else return a=Ca(s),a!==null&&ng(a),n.blockedOn=s,!1;a.shift()}return!0}function sg(n,a,s){Hl(n)&&s.delete(a)}function j8(){hd=!1,Li!==null&&Hl(Li)&&(Li=null),Oi!==null&&Hl(Oi)&&(Oi=null),Ri!==null&&Hl(Ri)&&(Ri=null),Ds.forEach(sg),Hs.forEach(sg)}function Vl(n,a){n.blockedOn===a&&(n.blockedOn=null,hd||(hd=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,j8)))}var zl=null;function og(n){zl!==n&&(zl=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){zl===n&&(zl=null);for(var a=0;a<n.length;a+=3){var s=n[a],u=n[a+1],h=n[a+2];if(typeof u!="function"){if(dd(u||s)===null)continue;break}var g=Ca(s);g!==null&&(n.splice(a,3),a-=3,df(g,{pending:!0,data:h,method:s.method,action:u},u,h))}}))}function zs(n){function a(V){return Vl(V,n)}Li!==null&&Vl(Li,n),Oi!==null&&Vl(Oi,n),Ri!==null&&Vl(Ri,n),Ds.forEach(a),Hs.forEach(a);for(var s=0;s<ji.length;s++){var u=ji[s];u.blockedOn===n&&(u.blockedOn=null)}for(;0<ji.length&&(s=ji[0],s.blockedOn===null);)rg(s),s.blockedOn===null&&ji.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var h=s[u],g=s[u+1],b=h[Ot]||null;if(typeof g=="function")b||og(s);else if(b){var M=null;if(g&&g.hasAttribute("formAction")){if(h=g,b=g[Ot]||null)M=b.formAction;else if(dd(h)!==null)continue}else M=b.action;typeof M=="function"?s[u+1]=M:(s.splice(u,3),u-=3),og(s)}}}function pd(n){this._internalRoot=n}kl.prototype.render=pd.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,u=qt();eg(s,u,n,a,null,null)},kl.prototype.unmount=pd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;eg(n.current,2,null,n,null,null),yl(),a[wa]=null}};function kl(n){this._internalRoot=n}kl.prototype.unstable_scheduleHydration=function(n){if(n){var a=Tp();n={blockedOn:null,target:n,priority:a};for(var s=0;s<ji.length&&a!==0&&a<ji[s].priority;s++);ji.splice(s,0,n),s===0&&rg(n)}};var lg=e.version;if(lg!=="19.1.1")throw Error(r(527,lg,"19.1.1"));K.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=d(a),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var D8={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Br=Nl.inject(D8),Nt=Nl}catch{}}return Ns.createRoot=function(n,a){if(!o(n))throw Error(r(299));var s=!1,u="",h=T2,g=E2,b=M2,M=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(M=a.unstable_transitionCallbacks)),a=Wm(n,1,!1,null,null,s,u,h,g,b,M,null),n[wa]=a.current,Kf(n),new pd(a)},Ns.hydrateRoot=function(n,a,s){if(!o(n))throw Error(r(299));var u=!1,h="",g=T2,b=E2,M=M2,V=null,G=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(g=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(M=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(V=s.unstable_transitionCallbacks),s.formState!==void 0&&(G=s.formState)),a=Wm(n,1,!0,a,s??null,u,h,g,b,M,V,G),a.context=Jm(null),s=a.current,u=qt(),u=ac(u),h=pi(u),h.callback=null,mi(s,h,u),s=u,a.current.lanes=s,Ur(a,s),Cn(a),n[wa]=a.current,Kf(n),new kl(a)},Ns.version="19.1.1",Ns}var vg;function G8(){if(vg)return gd.exports;vg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),gd.exports=$8(),gd.exports}var q8=G8();const I8=Pu(q8);var R=hh();const Oe=Pu(R),xg=V8({__proto__:null,default:Oe},[R]);/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var bg="popstate";function Y8(t={}){function e(r,o){let{pathname:l,search:c,hash:f}=r.location;return S0("",{pathname:l,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(r,o){return typeof o=="string"?o:to(o)}return F8(e,i,null,t)}function Ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function X8(){return Math.random().toString(36).substring(2,10)}function wg(t,e){return{usr:t.state,key:t.key,idx:e}}function S0(t,e,i=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Rr(e):e,state:i,key:e&&e.key||r||X8()}}function to({pathname:t="/",search:e="",hash:i=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Rr(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substring(i),t=t.substring(0,i));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function F8(t,e,i,r={}){let{window:o=document.defaultView,v5Compat:l=!1}=r,c=o.history,f="POP",d=null,p=m();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function m(){return(c.state||{idx:null}).idx}function y(){f="POP";let O=m(),A=O==null?null:O-p;p=O,d&&d({action:f,location:E.location,delta:A})}function v(O,A){f="PUSH";let T=S0(E.location,O,A);p=m()+1;let C=wg(T,p),j=E.createHref(T);try{c.pushState(C,"",j)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;o.location.assign(j)}l&&d&&d({action:f,location:E.location,delta:1})}function w(O,A){f="REPLACE";let T=S0(E.location,O,A);p=m();let C=wg(T,p),j=E.createHref(T);c.replaceState(C,"",j),l&&d&&d({action:f,location:E.location,delta:0})}function S(O){return Z8(O)}let E={get action(){return f},get location(){return t(o,c)},listen(O){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(bg,y),d=O,()=>{o.removeEventListener(bg,y),d=null}},createHref(O){return e(o,O)},createURL:S,encodeLocation(O){let A=S(O);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:v,replace:w,go(O){return c.go(O)}};return E}function Z8(t,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(i,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:to(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function wy(t,e,i="/"){return K8(t,e,i,!1)}function K8(t,e,i,r){let o=typeof e=="string"?Rr(e):e,l=si(o.pathname||"/",i);if(l==null)return null;let c=Sy(t);Q8(c);let f=null;for(let d=0;f==null&&d<c.length;++d){let p=l9(l);f=s9(c[d],p,r)}return f}function Sy(t,e=[],i=[],r=""){let o=(l,c,f)=>{let d={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};d.relativePath.startsWith("/")&&(Ge(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length));let p=ai([r,d.relativePath]),m=i.concat(d);l.children&&l.children.length>0&&(Ge(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Sy(l.children,e,m,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:a9(p,l.index),routesMeta:m})};return t.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,c);else for(let d of Cy(l.path))o(l,c,d)}),e}function Cy(t){let e=t.split("/");if(e.length===0)return[];let[i,...r]=e,o=i.endsWith("?"),l=i.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let c=Cy(r.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),o&&f.push(...c),f.map(d=>t.startsWith("/")&&d===""?"/":d)}function Q8(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:r9(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var W8=/^:[\w-]+$/,J8=3,e9=2,t9=1,n9=10,i9=-2,Sg=t=>t==="*";function a9(t,e){let i=t.split("/"),r=i.length;return i.some(Sg)&&(r+=i9),e&&(r+=e9),i.filter(o=>!Sg(o)).reduce((o,l)=>o+(W8.test(l)?J8:l===""?t9:n9),r)}function r9(t,e){return t.length===e.length&&t.slice(0,-1).every((r,o)=>r===e[o])?t[t.length-1]-e[e.length-1]:0}function s9(t,e,i=!1){let{routesMeta:r}=t,o={},l="/",c=[];for(let f=0;f<r.length;++f){let d=r[f],p=f===r.length-1,m=l==="/"?e:e.slice(l.length)||"/",y=yu({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},m),v=d.route;if(!y&&p&&i&&!r[r.length-1].route.index&&(y=yu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!y)return null;Object.assign(o,y.params),c.push({params:o,pathname:ai([l,y.pathname]),pathnameBase:d9(ai([l,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(l=ai([l,y.pathnameBase]))}return c}function yu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,r]=o9(t.path,t.caseSensitive,t.end),o=e.match(i);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:r.reduce((p,{paramName:m,isOptional:y},v)=>{if(m==="*"){let S=f[v]||"";c=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const w=f[v];return y&&!w?p[m]=void 0:p[m]=(w||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:t}}function o9(t,e=!1,i=!0){mn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d)=>(r.push({paramName:f,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function l9(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function si(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=t.charAt(i);return r&&r!=="/"?null:t.slice(i)||"/"}function u9(t,e="/"){let{pathname:i,search:r="",hash:o=""}=typeof t=="string"?Rr(t):t;return{pathname:i?i.startsWith("/")?i:c9(i,e):e,search:h9(r),hash:p9(o)}}function c9(t,e){let i=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function wd(t,e,i,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function f9(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function ph(t){let e=f9(t);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function mh(t,e,i,r=!1){let o;typeof t=="string"?o=Rr(t):(o={...t},Ge(!o.pathname||!o.pathname.includes("?"),wd("?","pathname","search",o)),Ge(!o.pathname||!o.pathname.includes("#"),wd("#","pathname","hash",o)),Ge(!o.search||!o.search.includes("#"),wd("#","search","hash",o)));let l=t===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=i;else{let y=e.length-1;if(!r&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),y-=1;o.pathname=v.join("/")}f=y>=0?e[y]:"/"}let d=u9(o,f),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&i.endsWith("/");return!d.pathname.endsWith("/")&&(p||m)&&(d.pathname+="/"),d}var ai=t=>t.join("/").replace(/\/\/+/g,"/"),d9=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),h9=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,p9=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function m9(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Ty=["POST","PUT","PATCH","DELETE"];new Set(Ty);var g9=["GET",...Ty];new Set(g9);var jr=R.createContext(null);jr.displayName="DataRouter";var Bu=R.createContext(null);Bu.displayName="DataRouterState";R.createContext(!1);var Ey=R.createContext({isTransitioning:!1});Ey.displayName="ViewTransition";var y9=R.createContext(new Map);y9.displayName="Fetchers";var v9=R.createContext(null);v9.displayName="Await";var gn=R.createContext(null);gn.displayName="Navigation";var go=R.createContext(null);go.displayName="Location";var yn=R.createContext({outlet:null,matches:[],isDataRoute:!1});yn.displayName="Route";var gh=R.createContext(null);gh.displayName="RouteError";function x9(t,{relative:e}={}){Ge(Dr(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=R.useContext(gn),{hash:o,pathname:l,search:c}=yo(t,{relative:e}),f=l;return i!=="/"&&(f=l==="/"?i:ai([i,l])),r.createHref({pathname:f,search:c,hash:o})}function Dr(){return R.useContext(go)!=null}function kn(){return Ge(Dr(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(go).location}var My="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ay(t){R.useContext(gn).static||R.useLayoutEffect(t)}function yh(){let{isDataRoute:t}=R.useContext(yn);return t?V9():b9()}function b9(){Ge(Dr(),"useNavigate() may be used only in the context of a <Router> component.");let t=R.useContext(jr),{basename:e,navigator:i}=R.useContext(gn),{matches:r}=R.useContext(yn),{pathname:o}=kn(),l=JSON.stringify(ph(r)),c=R.useRef(!1);return Ay(()=>{c.current=!0}),R.useCallback((d,p={})=>{if(mn(c.current,My),!c.current)return;if(typeof d=="number"){i.go(d);return}let m=mh(d,JSON.parse(l),o,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:ai([e,m.pathname])),(p.replace?i.replace:i.push)(m,p.state,p)},[e,i,l,o,t])}var w9=R.createContext(null);function S9(t){let e=R.useContext(yn).outlet;return e&&R.createElement(w9.Provider,{value:t},e)}function yo(t,{relative:e}={}){let{matches:i}=R.useContext(yn),{pathname:r}=kn(),o=JSON.stringify(ph(i));return R.useMemo(()=>mh(t,JSON.parse(o),r,e==="path"),[t,o,r,e])}function C9(t,e){return Ly(t,e)}function Ly(t,e,i,r){var A;Ge(Dr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=R.useContext(gn),{matches:l}=R.useContext(yn),c=l[l.length-1],f=c?c.params:{},d=c?c.pathname:"/",p=c?c.pathnameBase:"/",m=c&&c.route;{let T=m&&m.path||"";Oy(d,!m||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let y=kn(),v;if(e){let T=typeof e=="string"?Rr(e):e;Ge(p==="/"||((A=T.pathname)==null?void 0:A.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${T.pathname}" was given in the \`location\` prop.`),v=T}else v=y;let w=v.pathname||"/",S=w;if(p!=="/"){let T=p.replace(/^\//,"").split("/");S="/"+w.replace(/^\//,"").split("/").slice(T.length).join("/")}let E=wy(t,{pathname:S});mn(m||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),mn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=L9(E&&E.map(T=>Object.assign({},T,{params:Object.assign({},f,T.params),pathname:ai([p,o.encodeLocation?o.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?p:ai([p,o.encodeLocation?o.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),l,i,r);return e&&O?R.createElement(go.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},O):O}function T9(){let t=H9(),e=m9(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:l},"ErrorBoundary")," or"," ",R.createElement("code",{style:l},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),i?R.createElement("pre",{style:o},i):null,c)}var E9=R.createElement(T9,null),M9=class extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?R.createElement(yn.Provider,{value:this.props.routeContext},R.createElement(gh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function A9({routeContext:t,match:e,children:i}){let r=R.useContext(jr);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),R.createElement(yn.Provider,{value:t},i)}function L9(t,e=[],i=null,r=null){if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let o=t,l=i==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);Ge(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,f=-1;if(i)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=d),p.route.id){let{loaderData:m,errors:y}=i,v=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!y||y[p.route.id]===void 0);if(p.route.lazy||v){c=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let y,v=!1,w=null,S=null;i&&(y=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||E9,c&&(f<0&&m===0?(Oy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,S=null):f===m&&(v=!0,S=p.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),O=()=>{let A;return y?A=w:v?A=S:p.route.Component?A=R.createElement(p.route.Component,null):p.route.element?A=p.route.element:A=d,R.createElement(A9,{match:p,routeContext:{outlet:d,matches:E,isDataRoute:i!=null},children:A})};return i&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?R.createElement(M9,{location:i.location,revalidation:i.revalidation,component:w,error:y,children:O(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):O()},null)}function vh(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function O9(t){let e=R.useContext(jr);return Ge(e,vh(t)),e}function R9(t){let e=R.useContext(Bu);return Ge(e,vh(t)),e}function j9(t){let e=R.useContext(yn);return Ge(e,vh(t)),e}function xh(t){let e=j9(t),i=e.matches[e.matches.length-1];return Ge(i.route.id,`${t} can only be used on routes that contain a unique "id"`),i.route.id}function D9(){return xh("useRouteId")}function H9(){var r;let t=R.useContext(gh),e=R9("useRouteError"),i=xh("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[i]}function V9(){let{router:t}=O9("useNavigate"),e=xh("useNavigate"),i=R.useRef(!1);return Ay(()=>{i.current=!0}),R.useCallback(async(o,l={})=>{mn(i.current,My),i.current&&(typeof o=="number"?t.navigate(o):await t.navigate(o,{fromRouteId:e,...l}))},[t,e])}var Cg={};function Oy(t,e,i){!e&&!Cg[t]&&(Cg[t]=!0,mn(!1,i))}R.memo(z9);function z9({routes:t,future:e,state:i}){return Ly(t,void 0,i,e)}function k9({to:t,replace:e,state:i,relative:r}){Ge(Dr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=R.useContext(gn);mn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=R.useContext(yn),{pathname:c}=kn(),f=yh(),d=mh(t,ph(l),c,r==="path"),p=JSON.stringify(d);return R.useEffect(()=>{f(JSON.parse(p),{replace:e,state:i,relative:r})},[f,p,r,e,i]),null}function N9(t){return S9(t.context)}function ei(t){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function P9({basename:t="/",children:e=null,location:i,navigationType:r="POP",navigator:o,static:l=!1}){Ge(!Dr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),f=R.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof i=="string"&&(i=Rr(i));let{pathname:d="/",search:p="",hash:m="",state:y=null,key:v="default"}=i,w=R.useMemo(()=>{let S=si(d,c);return S==null?null:{location:{pathname:S,search:p,hash:m,state:y,key:v},navigationType:r}},[c,d,p,m,y,v,r]);return mn(w!=null,`<Router basename="${c}"> is not able to match the URL "${d}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:R.createElement(gn.Provider,{value:f},R.createElement(go.Provider,{children:e,value:w}))}function B9({children:t,location:e}){return C9(C0(t),e)}function C0(t,e=[]){let i=[];return R.Children.forEach(t,(r,o)=>{if(!R.isValidElement(r))return;let l=[...e,o];if(r.type===R.Fragment){i.push.apply(i,C0(r.props.children,l));return}Ge(r.type===ei,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!r.props.index||!r.props.children,"An index route cannot have child routes.");let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=C0(r.props.children,l)),i.push(c)}),i}var nu="get",iu="application/x-www-form-urlencoded";function _u(t){return t!=null&&typeof t.tagName=="string"}function _9(t){return _u(t)&&t.tagName.toLowerCase()==="button"}function U9(t){return _u(t)&&t.tagName.toLowerCase()==="form"}function $9(t){return _u(t)&&t.tagName.toLowerCase()==="input"}function G9(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function q9(t,e){return t.button===0&&(!e||e==="_self")&&!G9(t)}var Pl=null;function I9(){if(Pl===null)try{new FormData(document.createElement("form"),0),Pl=!1}catch{Pl=!0}return Pl}var Y9=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sd(t){return t!=null&&!Y9.has(t)?(mn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${iu}"`),null):t}function X9(t,e){let i,r,o,l,c;if(U9(t)){let f=t.getAttribute("action");r=f?si(f,e):null,i=t.getAttribute("method")||nu,o=Sd(t.getAttribute("enctype"))||iu,l=new FormData(t)}else if(_9(t)||$9(t)&&(t.type==="submit"||t.type==="image")){let f=t.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=t.getAttribute("formaction")||f.getAttribute("action");if(r=d?si(d,e):null,i=t.getAttribute("formmethod")||f.getAttribute("method")||nu,o=Sd(t.getAttribute("formenctype"))||Sd(f.getAttribute("enctype"))||iu,l=new FormData(f,t),!I9()){let{name:p,type:m,value:y}=t;if(m==="image"){let v=p?`${p}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else p&&l.append(p,y)}}else{if(_u(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=nu,r=null,o=iu,c=t}return l&&o==="text/plain"&&(c=l,l=void 0),{action:r,method:i.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bh(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function F9(t,e,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&si(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function Z9(t,e){if(t.id in e)return e[t.id];try{let i=await import(t.module);return e[t.id]=i,i}catch(i){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function K9(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Q9(t,e,i){let r=await Promise.all(t.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await Z9(l,i);return c.links?c.links():[]}return[]}));return tb(r.flat(1).filter(K9).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Tg(t,e,i,r,o,l){let c=(d,p)=>i[p]?d.route.id!==i[p].route.id:!0,f=(d,p)=>{var m;return i[p].pathname!==d.pathname||((m=i[p].route.path)==null?void 0:m.endsWith("*"))&&i[p].params["*"]!==d.params["*"]};return l==="assets"?e.filter((d,p)=>c(d,p)||f(d,p)):l==="data"?e.filter((d,p)=>{var y;let m=r.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(t,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function W9(t,e,{includeHydrateFallback:i}={}){return J9(t.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function J9(t){return[...new Set(t)]}function eb(t){let e={},i=Object.keys(t).sort();for(let r of i)e[r]=t[r];return e}function tb(t,e){let i=new Set;return new Set(e),t.reduce((r,o)=>{let l=JSON.stringify(eb(o));return i.has(l)||(i.add(l),r.push({key:l,link:o})),r},[])}function Ry(){let t=R.useContext(jr);return bh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function nb(){let t=R.useContext(Bu);return bh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var wh=R.createContext(void 0);wh.displayName="FrameworkContext";function jy(){let t=R.useContext(wh);return bh(t,"You must render this element inside a <HydratedRouter> element"),t}function ib(t,e){let i=R.useContext(wh),[r,o]=R.useState(!1),[l,c]=R.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:m,onTouchStart:y}=e,v=R.useRef(null);R.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let E=A=>{A.forEach(T=>{c(T.isIntersecting)})},O=new IntersectionObserver(E,{threshold:.5});return v.current&&O.observe(v.current),()=>{O.disconnect()}}},[t]),R.useEffect(()=>{if(r){let E=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(E)}}},[r]);let w=()=>{o(!0)},S=()=>{o(!1),c(!1)};return i?t!=="intent"?[l,v,{}]:[l,v,{onFocus:Ps(f,w),onBlur:Ps(d,S),onMouseEnter:Ps(p,w),onMouseLeave:Ps(m,S),onTouchStart:Ps(y,w)}]:[!1,v,{}]}function Ps(t,e){return i=>{t&&t(i),i.defaultPrevented||e(i)}}function ab({page:t,...e}){let{router:i}=Ry(),r=R.useMemo(()=>wy(i.routes,t,i.basename),[i.routes,t,i.basename]);return r?R.createElement(sb,{page:t,matches:r,...e}):null}function rb(t){let{manifest:e,routeModules:i}=jy(),[r,o]=R.useState([]);return R.useEffect(()=>{let l=!1;return Q9(t,e,i).then(c=>{l||o(c)}),()=>{l=!0}},[t,e,i]),r}function sb({page:t,matches:e,...i}){let r=kn(),{manifest:o,routeModules:l}=jy(),{basename:c}=Ry(),{loaderData:f,matches:d}=nb(),p=R.useMemo(()=>Tg(t,e,d,o,r,"data"),[t,e,d,o,r]),m=R.useMemo(()=>Tg(t,e,d,o,r,"assets"),[t,e,d,o,r]),y=R.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let S=new Set,E=!1;if(e.forEach(A=>{var C;let T=o.routes[A.route.id];!T||!T.hasLoader||(!p.some(j=>j.route.id===A.route.id)&&A.route.id in f&&((C=l[A.route.id])!=null&&C.shouldRevalidate)||T.hasClientLoader?E=!0:S.add(A.route.id))}),S.size===0)return[];let O=F9(t,c,"data");return E&&S.size>0&&O.searchParams.set("_routes",e.filter(A=>S.has(A.route.id)).map(A=>A.route.id).join(",")),[O.pathname+O.search]},[c,f,r,o,p,e,t,l]),v=R.useMemo(()=>W9(m,o),[m,o]),w=rb(m);return R.createElement(R.Fragment,null,y.map(S=>R.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...i})),v.map(S=>R.createElement("link",{key:S,rel:"modulepreload",href:S,...i})),w.map(({key:S,link:E})=>R.createElement("link",{key:S,nonce:i.nonce,...E})))}function ob(...t){return e=>{t.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Dy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dy&&(window.__reactRouterVersion="7.8.0")}catch{}function lb({basename:t,children:e,window:i}){let r=R.useRef();r.current==null&&(r.current=Y8({window:i,v5Compat:!0}));let o=r.current,[l,c]=R.useState({action:o.action,location:o.location}),f=R.useCallback(d=>{R.startTransition(()=>c(d))},[c]);return R.useLayoutEffect(()=>o.listen(f),[o,f]),R.createElement(P9,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:o})}var Hy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vy=R.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:o,reloadDocument:l,replace:c,state:f,target:d,to:p,preventScrollReset:m,viewTransition:y,...v},w){let{basename:S}=R.useContext(gn),E=typeof p=="string"&&Hy.test(p),O,A=!1;if(typeof p=="string"&&E&&(O=p,Dy))try{let _=new URL(window.location.href),Y=p.startsWith("//")?new URL(_.protocol+p):new URL(p),X=si(Y.pathname,S);Y.origin===_.origin&&X!=null?p=X+Y.search+Y.hash:A=!0}catch{mn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let T=x9(p,{relative:o}),[C,j,L]=ib(r,v),N=fb(p,{replace:c,state:f,target:d,preventScrollReset:m,relative:o,viewTransition:y});function z(_){e&&e(_),_.defaultPrevented||N(_)}let U=R.createElement("a",{...v,...L,href:O||T,onClick:A||l?e:z,ref:ob(w,j),target:d,"data-discover":!E&&i==="render"?"true":void 0});return C&&!E?R.createElement(R.Fragment,null,U,R.createElement(ab,{page:T})):U});Vy.displayName="Link";var $i=R.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:o=!1,style:l,to:c,viewTransition:f,children:d,...p},m){let y=yo(c,{relative:p.relative}),v=kn(),w=R.useContext(Bu),{navigator:S,basename:E}=R.useContext(gn),O=w!=null&&gb(y)&&f===!0,A=S.encodeLocation?S.encodeLocation(y).pathname:y.pathname,T=v.pathname,C=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(T=T.toLowerCase(),C=C?C.toLowerCase():null,A=A.toLowerCase()),C&&E&&(C=si(C,E)||C);const j=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let L=T===A||!o&&T.startsWith(A)&&T.charAt(j)==="/",N=C!=null&&(C===A||!o&&C.startsWith(A)&&C.charAt(A.length)==="/"),z={isActive:L,isPending:N,isTransitioning:O},U=L?e:void 0,_;typeof r=="function"?_=r(z):_=[r,L?"active":null,N?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let Y=typeof l=="function"?l(z):l;return R.createElement(Vy,{...p,"aria-current":U,className:_,ref:m,style:Y,to:c,viewTransition:f},typeof d=="function"?d(z):d)});$i.displayName="NavLink";var ub=R.forwardRef(({discover:t="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:o,state:l,method:c=nu,action:f,onSubmit:d,relative:p,preventScrollReset:m,viewTransition:y,...v},w)=>{let S=pb(),E=mb(f,{relative:p}),O=c.toLowerCase()==="get"?"get":"post",A=typeof f=="string"&&Hy.test(f),T=C=>{if(d&&d(C),C.defaultPrevented)return;C.preventDefault();let j=C.nativeEvent.submitter,L=(j==null?void 0:j.getAttribute("formmethod"))||c;S(j||C.currentTarget,{fetcherKey:e,method:L,navigate:i,replace:o,state:l,relative:p,preventScrollReset:m,viewTransition:y})};return R.createElement("form",{ref:w,method:O,action:E,onSubmit:r?d:T,...v,"data-discover":!A&&t==="render"?"true":void 0})});ub.displayName="Form";function cb(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zy(t){let e=R.useContext(jr);return Ge(e,cb(t)),e}function fb(t,{target:e,replace:i,state:r,preventScrollReset:o,relative:l,viewTransition:c}={}){let f=yh(),d=kn(),p=yo(t,{relative:l});return R.useCallback(m=>{if(q9(m,e)){m.preventDefault();let y=i!==void 0?i:to(d)===to(p);f(t,{replace:y,state:r,preventScrollReset:o,relative:l,viewTransition:c})}},[d,f,p,i,r,e,t,o,l,c])}var db=0,hb=()=>`__${String(++db)}__`;function pb(){let{router:t}=zy("useSubmit"),{basename:e}=R.useContext(gn),i=D9();return R.useCallback(async(r,o={})=>{let{action:l,method:c,encType:f,formData:d,body:p}=X9(r,e);if(o.navigate===!1){let m=o.fetcherKey||hb();await t.fetch(m,i,o.action||l,{preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||c,formEncType:o.encType||f,flushSync:o.flushSync})}else await t.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||c,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[t,e,i])}function mb(t,{relative:e}={}){let{basename:i}=R.useContext(gn),r=R.useContext(yn);Ge(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),l={...yo(t||".",{relative:e})},c=kn();if(t==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(y=>y).forEach(y=>f.append("index",y));let m=f.toString();l.search=m?`?${m}`:""}}return(!t||t===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(l.pathname=l.pathname==="/"?i:ai([i,l.pathname])),to(l)}function gb(t,{relative:e}={}){let i=R.useContext(Ey);Ge(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=zy("useViewTransitionState"),o=yo(t,{relative:e});if(!i.isTransitioning)return!1;let l=si(i.currentLocation.pathname,r)||i.currentLocation.pathname,c=si(i.nextLocation.pathname,r)||i.nextLocation.pathname;return yu(o.pathname,c)!=null||yu(o.pathname,l)!=null}function yb(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function vb(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var xb=function(){function t(i){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(vb(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=yb(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},t}(),St="-ms-",vu="-moz-",Me="-webkit-",ky="comm",Sh="rule",Ch="decl",bb="@import",Ny="@keyframes",wb="@layer",Sb=Math.abs,Uu=String.fromCharCode,Cb=Object.assign;function Tb(t,e){return gt(t,0)^45?(((e<<2^gt(t,0))<<2^gt(t,1))<<2^gt(t,2))<<2^gt(t,3):0}function Py(t){return t.trim()}function Eb(t,e){return(t=e.exec(t))?t[0]:t}function Ae(t,e,i){return t.replace(e,i)}function T0(t,e){return t.indexOf(e)}function gt(t,e){return t.charCodeAt(e)|0}function no(t,e,i){return t.slice(e,i)}function Tn(t){return t.length}function Th(t){return t.length}function Bl(t,e){return e.push(t),t}function Mb(t,e){return t.map(e).join("")}var $u=1,wr=1,By=0,kt=0,tt=0,Hr="";function Gu(t,e,i,r,o,l,c){return{value:t,root:e,parent:i,type:r,props:o,children:l,line:$u,column:wr,length:c,return:""}}function Bs(t,e){return Cb(Gu("",null,null,"",null,null,0),t,{length:-t.length},e)}function Ab(){return tt}function Lb(){return tt=kt>0?gt(Hr,--kt):0,wr--,tt===10&&(wr=1,$u--),tt}function Ft(){return tt=kt<By?gt(Hr,kt++):0,wr++,tt===10&&(wr=1,$u++),tt}function On(){return gt(Hr,kt)}function au(){return kt}function vo(t,e){return no(Hr,t,e)}function io(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _y(t){return $u=wr=1,By=Tn(Hr=t),kt=0,[]}function Uy(t){return Hr="",t}function ru(t){return Py(vo(kt-1,E0(t===91?t+2:t===40?t+1:t)))}function Ob(t){for(;(tt=On())&&tt<33;)Ft();return io(t)>2||io(tt)>3?"":" "}function Rb(t,e){for(;--e&&Ft()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return vo(t,au()+(e<6&&On()==32&&Ft()==32))}function E0(t){for(;Ft();)switch(tt){case t:return kt;case 34:case 39:t!==34&&t!==39&&E0(tt);break;case 40:t===41&&E0(t);break;case 92:Ft();break}return kt}function jb(t,e){for(;Ft()&&t+tt!==57;)if(t+tt===84&&On()===47)break;return"/*"+vo(e,kt-1)+"*"+Uu(t===47?t:Ft())}function Db(t){for(;!io(On());)Ft();return vo(t,kt)}function Hb(t){return Uy(su("",null,null,null,[""],t=_y(t),0,[0],t))}function su(t,e,i,r,o,l,c,f,d){for(var p=0,m=0,y=c,v=0,w=0,S=0,E=1,O=1,A=1,T=0,C="",j=o,L=l,N=r,z=C;O;)switch(S=T,T=Ft()){case 40:if(S!=108&&gt(z,y-1)==58){T0(z+=Ae(ru(T),"&","&\f"),"&\f")!=-1&&(A=-1);break}case 34:case 39:case 91:z+=ru(T);break;case 9:case 10:case 13:case 32:z+=Ob(S);break;case 92:z+=Rb(au()-1,7);continue;case 47:switch(On()){case 42:case 47:Bl(Vb(jb(Ft(),au()),e,i),d);break;default:z+="/"}break;case 123*E:f[p++]=Tn(z)*A;case 125*E:case 59:case 0:switch(T){case 0:case 125:O=0;case 59+m:A==-1&&(z=Ae(z,/\f/g,"")),w>0&&Tn(z)-y&&Bl(w>32?Mg(z+";",r,i,y-1):Mg(Ae(z," ","")+";",r,i,y-2),d);break;case 59:z+=";";default:if(Bl(N=Eg(z,e,i,p,m,o,f,C,j=[],L=[],y),l),T===123)if(m===0)su(z,e,N,N,j,l,y,f,L);else switch(v===99&&gt(z,3)===110?100:v){case 100:case 108:case 109:case 115:su(t,N,N,r&&Bl(Eg(t,N,N,0,0,o,f,C,o,j=[],y),L),o,L,y,f,r?j:L);break;default:su(z,N,N,N,[""],L,0,f,L)}}p=m=w=0,E=A=1,C=z="",y=c;break;case 58:y=1+Tn(z),w=S;default:if(E<1){if(T==123)--E;else if(T==125&&E++==0&&Lb()==125)continue}switch(z+=Uu(T),T*E){case 38:A=m>0?1:(z+="\f",-1);break;case 44:f[p++]=(Tn(z)-1)*A,A=1;break;case 64:On()===45&&(z+=ru(Ft())),v=On(),m=y=Tn(C=z+=Db(au())),T++;break;case 45:S===45&&Tn(z)==2&&(E=0)}}return l}function Eg(t,e,i,r,o,l,c,f,d,p,m){for(var y=o-1,v=o===0?l:[""],w=Th(v),S=0,E=0,O=0;S<r;++S)for(var A=0,T=no(t,y+1,y=Sb(E=c[S])),C=t;A<w;++A)(C=Py(E>0?v[A]+" "+T:Ae(T,/&\f/g,v[A])))&&(d[O++]=C);return Gu(t,e,i,o===0?Sh:f,d,p,m)}function Vb(t,e,i){return Gu(t,e,i,ky,Uu(Ab()),no(t,2,-2),0)}function Mg(t,e,i,r){return Gu(t,e,i,Ch,no(t,0,r),no(t,r+1,-1),r)}function vr(t,e){for(var i="",r=Th(t),o=0;o<r;o++)i+=e(t[o],o,t,e)||"";return i}function zb(t,e,i,r){switch(t.type){case wb:if(t.children.length)break;case bb:case Ch:return t.return=t.return||t.value;case ky:return"";case Ny:return t.return=t.value+"{"+vr(t.children,r)+"}";case Sh:t.value=t.props.join(",")}return Tn(i=vr(t.children,r))?t.return=t.value+"{"+i+"}":""}function kb(t){var e=Th(t);return function(i,r,o,l){for(var c="",f=0;f<e;f++)c+=t[f](i,r,o,l)||"";return c}}function Nb(t){return function(e){e.root||(e=e.return)&&t(e)}}function Pb(t){var e=Object.create(null);return function(i){return e[i]===void 0&&(e[i]=t(i)),e[i]}}var Bb=function(e,i,r){for(var o=0,l=0;o=l,l=On(),o===38&&l===12&&(i[r]=1),!io(l);)Ft();return vo(e,kt)},_b=function(e,i){var r=-1,o=44;do switch(io(o)){case 0:o===38&&On()===12&&(i[r]=1),e[r]+=Bb(kt-1,i,r);break;case 2:e[r]+=ru(o);break;case 4:if(o===44){e[++r]=On()===58?"&\f":"",i[r]=e[r].length;break}default:e[r]+=Uu(o)}while(o=Ft());return e},Ub=function(e,i){return Uy(_b(_y(e),i))},Ag=new WeakMap,$b=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var i=e.value,r=e.parent,o=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&i.charCodeAt(0)!==58&&!Ag.get(r))&&!o){Ag.set(e,!0);for(var l=[],c=Ub(i,l),f=r.props,d=0,p=0;d<c.length;d++)for(var m=0;m<f.length;m++,p++)e.props[p]=l[d]?c[d].replace(/&\f/g,f[m]):f[m]+" "+c[d]}}},Gb=function(e){if(e.type==="decl"){var i=e.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(e.return="",e.value="")}};function $y(t,e){switch(Tb(t,e)){case 5103:return Me+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+t+vu+t+St+t+t;case 6828:case 4268:return Me+t+St+t+t;case 6165:return Me+t+St+"flex-"+t+t;case 5187:return Me+t+Ae(t,/(\w+).+(:[^]+)/,Me+"box-$1$2"+St+"flex-$1$2")+t;case 5443:return Me+t+St+"flex-item-"+Ae(t,/flex-|-self/,"")+t;case 4675:return Me+t+St+"flex-line-pack"+Ae(t,/align-content|flex-|-self/,"")+t;case 5548:return Me+t+St+Ae(t,"shrink","negative")+t;case 5292:return Me+t+St+Ae(t,"basis","preferred-size")+t;case 6060:return Me+"box-"+Ae(t,"-grow","")+Me+t+St+Ae(t,"grow","positive")+t;case 4554:return Me+Ae(t,/([^-])(transform)/g,"$1"+Me+"$2")+t;case 6187:return Ae(Ae(Ae(t,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),t,"")+t;case 5495:case 3959:return Ae(t,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return Ae(Ae(t,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+St+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+t+t;case 4095:case 3583:case 4068:case 2532:return Ae(t,/(.+)-inline(.+)/,Me+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tn(t)-1-e>6)switch(gt(t,e+1)){case 109:if(gt(t,e+4)!==45)break;case 102:return Ae(t,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+vu+(gt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~T0(t,"stretch")?$y(Ae(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(gt(t,e+1)!==115)break;case 6444:switch(gt(t,Tn(t)-3-(~T0(t,"!important")&&10))){case 107:return Ae(t,":",":"+Me)+t;case 101:return Ae(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Me+(gt(t,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+St+"$2box$3")+t}break;case 5936:switch(gt(t,e+11)){case 114:return Me+t+St+Ae(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Me+t+St+Ae(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Me+t+St+Ae(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Me+t+St+t+t}return t}var qb=function(e,i,r,o){if(e.length>-1&&!e.return)switch(e.type){case Ch:e.return=$y(e.value,e.length);break;case Ny:return vr([Bs(e,{value:Ae(e.value,"@","@"+Me)})],o);case Sh:if(e.length)return Mb(e.props,function(l){switch(Eb(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return vr([Bs(e,{props:[Ae(l,/:(read-\w+)/,":"+vu+"$1")]})],o);case"::placeholder":return vr([Bs(e,{props:[Ae(l,/:(plac\w+)/,":"+Me+"input-$1")]}),Bs(e,{props:[Ae(l,/:(plac\w+)/,":"+vu+"$1")]}),Bs(e,{props:[Ae(l,/:(plac\w+)/,St+"input-$1")]})],o)}return""})}},Ib=[qb],Yb=function(e){var i=e.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(E){var O=E.getAttribute("data-emotion");O.indexOf(" ")!==-1&&(document.head.appendChild(E),E.setAttribute("data-s",""))})}var o=e.stylisPlugins||Ib,l={},c,f=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(E){for(var O=E.getAttribute("data-emotion").split(" "),A=1;A<O.length;A++)l[O[A]]=!0;f.push(E)});var d,p=[$b,Gb];{var m,y=[zb,Nb(function(E){m.insert(E)})],v=kb(p.concat(o,y)),w=function(O){return vr(Hb(O),v)};d=function(O,A,T,C){m=T,w(O?O+"{"+A.styles+"}":A.styles),C&&(S.inserted[A.name]=!0)}}var S={key:i,sheet:new xb({key:i,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:d};return S.sheet.hydrate(f),S},Cd={exports:{}},je={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function Xb(){if(Lg)return je;Lg=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,i=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,o=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,c=t?Symbol.for("react.provider"):60109,f=t?Symbol.for("react.context"):60110,d=t?Symbol.for("react.async_mode"):60111,p=t?Symbol.for("react.concurrent_mode"):60111,m=t?Symbol.for("react.forward_ref"):60112,y=t?Symbol.for("react.suspense"):60113,v=t?Symbol.for("react.suspense_list"):60120,w=t?Symbol.for("react.memo"):60115,S=t?Symbol.for("react.lazy"):60116,E=t?Symbol.for("react.block"):60121,O=t?Symbol.for("react.fundamental"):60117,A=t?Symbol.for("react.responder"):60118,T=t?Symbol.for("react.scope"):60119;function C(L){if(typeof L=="object"&&L!==null){var N=L.$$typeof;switch(N){case e:switch(L=L.type,L){case d:case p:case r:case l:case o:case y:return L;default:switch(L=L&&L.$$typeof,L){case f:case m:case S:case w:case c:return L;default:return N}}case i:return N}}}function j(L){return C(L)===p}return je.AsyncMode=d,je.ConcurrentMode=p,je.ContextConsumer=f,je.ContextProvider=c,je.Element=e,je.ForwardRef=m,je.Fragment=r,je.Lazy=S,je.Memo=w,je.Portal=i,je.Profiler=l,je.StrictMode=o,je.Suspense=y,je.isAsyncMode=function(L){return j(L)||C(L)===d},je.isConcurrentMode=j,je.isContextConsumer=function(L){return C(L)===f},je.isContextProvider=function(L){return C(L)===c},je.isElement=function(L){return typeof L=="object"&&L!==null&&L.$$typeof===e},je.isForwardRef=function(L){return C(L)===m},je.isFragment=function(L){return C(L)===r},je.isLazy=function(L){return C(L)===S},je.isMemo=function(L){return C(L)===w},je.isPortal=function(L){return C(L)===i},je.isProfiler=function(L){return C(L)===l},je.isStrictMode=function(L){return C(L)===o},je.isSuspense=function(L){return C(L)===y},je.isValidElementType=function(L){return typeof L=="string"||typeof L=="function"||L===r||L===p||L===l||L===o||L===y||L===v||typeof L=="object"&&L!==null&&(L.$$typeof===S||L.$$typeof===w||L.$$typeof===c||L.$$typeof===f||L.$$typeof===m||L.$$typeof===O||L.$$typeof===A||L.$$typeof===T||L.$$typeof===E)},je.typeOf=C,je}var Og;function Fb(){return Og||(Og=1,Cd.exports=Xb()),Cd.exports}var Td,Rg;function Zb(){if(Rg)return Td;Rg=1;var t=Fb(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[t.ForwardRef]=r,l[t.Memo]=o;function c(S){return t.isMemo(S)?o:l[S.$$typeof]||e}var f=Object.defineProperty,d=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,v=Object.prototype;function w(S,E,O){if(typeof E!="string"){if(v){var A=y(E);A&&A!==v&&w(S,A,O)}var T=d(E);p&&(T=T.concat(p(E)));for(var C=c(S),j=c(E),L=0;L<T.length;++L){var N=T[L];if(!i[N]&&!(O&&O[N])&&!(j&&j[N])&&!(C&&C[N])){var z=m(E,N);try{f(S,N,z)}catch{}}}}return S}return Td=w,Td}Zb();var Kb=!0;function Qb(t,e,i){var r="";return i.split(" ").forEach(function(o){t[o]!==void 0?e.push(t[o]+";"):o&&(r+=o+" ")}),r}var Gy=function(e,i,r){var o=e.key+"-"+i.name;(r===!1||Kb===!1)&&e.registered[o]===void 0&&(e.registered[o]=i.styles)},qy=function(e,i,r){Gy(e,i,r);var o=e.key+"-"+i.name;if(e.inserted[i.name]===void 0){var l=i;do e.insert(i===l?"."+o:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function Wb(t){for(var e=0,i,r=0,o=t.length;o>=4;++r,o-=4)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,e=(i&65535)*1540483477+((i>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Jb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ew=/[A-Z]|^ms/g,tw=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Iy=function(e){return e.charCodeAt(1)===45},jg=function(e){return e!=null&&typeof e!="boolean"},Ed=Pb(function(t){return Iy(t)?t:t.replace(ew,"-$&").toLowerCase()}),Dg=function(e,i){switch(e){case"animation":case"animationName":if(typeof i=="string")return i.replace(tw,function(r,o,l){return En={name:o,styles:l,next:En},o})}return Jb[e]!==1&&!Iy(e)&&typeof i=="number"&&i!==0?i+"px":i};function ao(t,e,i){if(i==null)return"";var r=i;if(r.__emotion_styles!==void 0)return r;switch(typeof i){case"boolean":return"";case"object":{var o=i;if(o.anim===1)return En={name:o.name,styles:o.styles,next:En},o.name;var l=i;if(l.styles!==void 0){var c=l.next;if(c!==void 0)for(;c!==void 0;)En={name:c.name,styles:c.styles,next:En},c=c.next;var f=l.styles+";";return f}return nw(t,e,i)}case"function":{if(t!==void 0){var d=En,p=i(t);return En=d,ao(t,e,p)}break}}var m=i;return m}function nw(t,e,i){var r="";if(Array.isArray(i))for(var o=0;o<i.length;o++)r+=ao(t,e,i[o])+";";else for(var l in i){var c=i[l];if(typeof c!="object"){var f=c;jg(f)&&(r+=Ed(l)+":"+Dg(l,f)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&e==null)for(var d=0;d<c.length;d++)jg(c[d])&&(r+=Ed(l)+":"+Dg(l,c[d])+";");else{var p=ao(t,e,c);switch(l){case"animation":case"animationName":{r+=Ed(l)+":"+p+";";break}default:r+=l+"{"+p+"}"}}}return r}var Hg=/label:\s*([^\s;{]+)\s*(;|$)/g,En;function Eh(t,e,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,o="";En=void 0;var l=t[0];if(l==null||l.raw===void 0)r=!1,o+=ao(i,e,l);else{var c=l;o+=c[0]}for(var f=1;f<t.length;f++)if(o+=ao(i,e,t[f]),r){var d=l;o+=d[f]}Hg.lastIndex=0;for(var p="",m;(m=Hg.exec(o))!==null;)p+="-"+m[1];var y=Wb(o)+p;return{name:y,styles:o,next:En}}var iw=function(e){return e()},Yy=xg.useInsertionEffect?xg.useInsertionEffect:!1,aw=Yy||iw,Vg=Yy||R.useLayoutEffect,Xy=R.createContext(typeof HTMLElement<"u"?Yb({key:"css"}):null);Xy.Provider;var Fy=function(e){return R.forwardRef(function(i,r){var o=R.useContext(Xy);return e(i,o,r)})},Zy=R.createContext({}),Mh={}.hasOwnProperty,M0="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",rw=function(e,i){var r={};for(var o in i)Mh.call(i,o)&&(r[o]=i[o]);return r[M0]=e,r},sw=function(e){var i=e.cache,r=e.serialized,o=e.isStringTag;return Gy(i,r,o),aw(function(){return qy(i,r,o)}),null},ow=Fy(function(t,e,i){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var o=t[M0],l=[r],c="";typeof t.className=="string"?c=Qb(e.registered,l,t.className):t.className!=null&&(c=t.className+" ");var f=Eh(l,void 0,R.useContext(Zy));c+=e.key+"-"+f.name;var d={};for(var p in t)Mh.call(t,p)&&p!=="css"&&p!==M0&&(d[p]=t[p]);return d.className=c,i&&(d.ref=i),R.createElement(R.Fragment,null,R.createElement(sw,{cache:e,serialized:f,isStringTag:typeof o=="string"}),R.createElement(o,d))}),lw=ow,zg=function(e,i){var r=arguments;if(i==null||!Mh.call(i,"css"))return R.createElement.apply(void 0,r);var o=r.length,l=new Array(o);l[0]=lw,l[1]=rw(e,i);for(var c=2;c<o;c++)l[c]=r[c];return R.createElement.apply(null,l)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(zg||(zg={}));var uw=Fy(function(t,e){var i=t.styles,r=Eh([i],void 0,R.useContext(Zy)),o=R.useRef();return Vg(function(){var l=e.key+"-global",c=new e.sheet.constructor({key:l,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),f=!1,d=document.querySelector('style[data-emotion="'+l+" "+r.name+'"]');return e.sheet.tags.length&&(c.before=e.sheet.tags[0]),d!==null&&(f=!0,d.setAttribute("data-emotion",l),c.hydrate([d])),o.current=[c,f],function(){c.flush()}},[e]),Vg(function(){var l=o.current,c=l[0],f=l[1];if(f){l[1]=!1;return}if(r.next!==void 0&&qy(e,r.next,!0),c.tags.length){var d=c.tags[c.tags.length-1].nextElementSibling;c.before=d,c.flush()}e.insert("",r,c,!1)},[e,r.name]),null});function cw(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return Eh(e)}const fw="/assets/Geist-Regular-BCrLS6HJ.ttf",dw="/assets/Geist-Medium-C6X8vKEc.ttf",hw="/assets/BebasNeue-Regular-D2CONTwO.ttf",pw="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",mw=cw`
  /* Font Awesome */
  @font-face {
    font-family: 'Geist Regular';
    src: url(${fw}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Додано для кращого відображення шрифтів */
  }

  /* Helvetica */
  @font-face {
    font-family: 'Geist Medium';
    src: url(${dw}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bebas Neue Regular';
    src: url(${hw}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${pw}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }


  :root {
	--black-500: #242424;
	--white: #fff;
	--blue-500: #3098ee;
	--white-500: rgba(255, 255, 255, 0.5);
	--white-320: rgba(255, 255, 255, 0.32);
	--blue-form: #d8e6f2ff;
	--black-500: rgba(14, 13, 13, 1);
	--black-100: rgba(33, 33, 33, 0.1);
	--gray: #dbdbd8;
	--black-300: rgba(33, 33, 33, 0.3);
	--black-800: rgba(0, 0, 0, 0.8);
	--white-800: rgba(255, 255, 255, 0.8);
	--blue-350: #c6e6ff;
	--blue-450: #6abcff;
--purple-400: #a66affff;
    
    /* Fonts */
   --font-family: "Geist Regular", sans-serif;
  --second-family: "Bebas Neue Regular", sans-serif;
  --third-family: "Inter", sans-serif;
    /* Додаткові змінні для узгодженості */
    --safe-area-inset-top: env(safe-area-inset-top, 0px);
    --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
    --safe-area-inset-left: env(safe-area-inset-left, 0px);
    --safe-area-inset-right: env(safe-area-inset-right, 0px);
  }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --v1: calc(max(9vw, 11vh));
    scrollbar-width: none;
    word-wrap: break-word;
    z-index: 1;
    
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: var(--font-family);
    background-color: #f8f8f8ff;
    // color: #706b6bff;
    min-height: 100vh;
    min-height: -webkit-fill-available; /* Фікс для мобільних браузерів */
    transition-duration: 300ms;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    padding: 
      env(safe-area-inset-top, 0px) 
      env(safe-area-inset-right, 0px) 
      env(safe-area-inset-bottom, 0px) 
      env(safe-area-inset-left, 0px);
  }
    
  body.modal-open {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: var(--second-family);
    color: #fff;
    text-size-adjust: 100%; /* Запобігає авто-масштабуванню тексту на iOS */
  }

  code {
    font-family: var(--second-family);
  }

  a {
    text-decoration: none !important;
    color: var(--white);
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #919191ff;
      transition: all 0.3s ease-in-out;
    }
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    -webkit-user-drag: none; /* Запобігає drag зображень на iOS */
  }

  button {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    appearance: none; /* Видаляє стандартні стилі для кнопок на iOS */
    background: transparent;
    border: 0;
    border-radius: 0;
    height: auto;
  }
  
  video {
    object-fit: contain;
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  ul, li {
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%; /* Запобігає авто-масштабуванню тексту на iOS */
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    height: -webkit-fill-available;
  }

  html, body {
    height: 100%;
    font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    touch-action: manipulation; /* Покращує відгук на тач-події */
        width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    display: none;
  }

    body {
    position: relative;
  }

    main, .container, #root {
    overflow-x: hidden;
    width: 100%;
  }

  input, textarea, button {
  height: auto;
    font-size: 16px;
    font-family: inherit;
    border-radius: 0; /* Фікс для iOS */
    appearance: none; /* Видаляє стандартні стилі для інпутів на iOS */
  }

  /* Особливі фікси для iOS */
  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="search"],
  input[type="tel"],
  input[type="url"],
  textarea {
    -webkit-appearance: none;
  }

  /* Фікс для масштабування при фокусі на інпут на iOS */
  @media screen and (max-width: 767px) {
    input, textarea, select {
      font-size: 16px !important;
    }
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: #ffffffff;
      // color: #6b6666ff;
    }
  }

  @keyframes buttonAnimationOut {
    0% { background-position: center bottom; }
    99.99% { background-position: left bottom; }
    100% { background-position: right bottom; }
  }

  @keyframes move {
    from { transform: translateY(0%); }
    to { transform: translateY(-100%); }
  }

  /* Додаткові фікси для різних платформ */
  /* Фікс для висоти 100vh на мобільних пристроях */
  @supports (-webkit-touch-callout: none) {
    body {
      height: -webkit-fill-available;
    }
  }

  /* Фікс для Safari */
  _::-webkit-full-page-media, _:future, :root .safari_only {
    @supports (-webkit-touch-callout: none) {
      /* Специфічні стилі для Safari */
    }
  }




  
`;var Vt=function(){return Vt=Object.assign||function(e){for(var i,r=1,o=arguments.length;r<o;r++){i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},Vt.apply(this,arguments)};function ro(t,e,i){if(i||arguments.length===2)for(var r=0,o=e.length,l;r<o;r++)(l||!(r in e))&&(l||(l=Array.prototype.slice.call(e,0,r)),l[r]=e[r]);return t.concat(l||Array.prototype.slice.call(e))}var _e="-ms-",Xs="-moz-",De="-webkit-",Ky="comm",qu="rule",Ah="decl",gw="@import",Qy="@keyframes",yw="@layer",Wy=Math.abs,Lh=String.fromCharCode,A0=Object.assign;function vw(t,e){return ft(t,0)^45?(((e<<2^ft(t,0))<<2^ft(t,1))<<2^ft(t,2))<<2^ft(t,3):0}function Jy(t){return t.trim()}function ni(t,e){return(t=e.exec(t))?t[0]:t}function ye(t,e,i){return t.replace(e,i)}function ou(t,e,i){return t.indexOf(e,i)}function ft(t,e){return t.charCodeAt(e)|0}function Sr(t,e,i){return t.slice(e,i)}function Mn(t){return t.length}function ev(t){return t.length}function Is(t,e){return e.push(t),t}function xw(t,e){return t.map(e).join("")}function kg(t,e){return t.filter(function(i){return!ni(i,e)})}var Iu=1,Cr=1,tv=0,un=0,nt=0,Vr="";function Yu(t,e,i,r,o,l,c,f){return{value:t,root:e,parent:i,type:r,props:o,children:l,line:Iu,column:Cr,length:c,return:"",siblings:f}}function ki(t,e){return A0(Yu("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function sr(t){for(;t.root;)t=ki(t.root,{children:[t]});Is(t,t.siblings)}function bw(){return nt}function ww(){return nt=un>0?ft(Vr,--un):0,Cr--,nt===10&&(Cr=1,Iu--),nt}function pn(){return nt=un<tv?ft(Vr,un++):0,Cr++,nt===10&&(Cr=1,Iu++),nt}function pa(){return ft(Vr,un)}function lu(){return un}function Xu(t,e){return Sr(Vr,t,e)}function L0(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sw(t){return Iu=Cr=1,tv=Mn(Vr=t),un=0,[]}function Cw(t){return Vr="",t}function Md(t){return Jy(Xu(un-1,O0(t===91?t+2:t===40?t+1:t)))}function Tw(t){for(;(nt=pa())&&nt<33;)pn();return L0(t)>2||L0(nt)>3?"":" "}function Ew(t,e){for(;--e&&pn()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return Xu(t,lu()+(e<6&&pa()==32&&pn()==32))}function O0(t){for(;pn();)switch(nt){case t:return un;case 34:case 39:t!==34&&t!==39&&O0(nt);break;case 40:t===41&&O0(t);break;case 92:pn();break}return un}function Mw(t,e){for(;pn()&&t+nt!==57;)if(t+nt===84&&pa()===47)break;return"/*"+Xu(e,un-1)+"*"+Lh(t===47?t:pn())}function Aw(t){for(;!L0(pa());)pn();return Xu(t,un)}function Lw(t){return Cw(uu("",null,null,null,[""],t=Sw(t),0,[0],t))}function uu(t,e,i,r,o,l,c,f,d){for(var p=0,m=0,y=c,v=0,w=0,S=0,E=1,O=1,A=1,T=0,C="",j=o,L=l,N=r,z=C;O;)switch(S=T,T=pn()){case 40:if(S!=108&&ft(z,y-1)==58){ou(z+=ye(Md(T),"&","&\f"),"&\f",Wy(p?f[p-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:z+=Md(T);break;case 9:case 10:case 13:case 32:z+=Tw(S);break;case 92:z+=Ew(lu()-1,7);continue;case 47:switch(pa()){case 42:case 47:Is(Ow(Mw(pn(),lu()),e,i,d),d);break;default:z+="/"}break;case 123*E:f[p++]=Mn(z)*A;case 125*E:case 59:case 0:switch(T){case 0:case 125:O=0;case 59+m:A==-1&&(z=ye(z,/\f/g,"")),w>0&&Mn(z)-y&&Is(w>32?Pg(z+";",r,i,y-1,d):Pg(ye(z," ","")+";",r,i,y-2,d),d);break;case 59:z+=";";default:if(Is(N=Ng(z,e,i,p,m,o,f,C,j=[],L=[],y,l),l),T===123)if(m===0)uu(z,e,N,N,j,l,y,f,L);else switch(v===99&&ft(z,3)===110?100:v){case 100:case 108:case 109:case 115:uu(t,N,N,r&&Is(Ng(t,N,N,0,0,o,f,C,o,j=[],y,L),L),o,L,y,f,r?j:L);break;default:uu(z,N,N,N,[""],L,0,f,L)}}p=m=w=0,E=A=1,C=z="",y=c;break;case 58:y=1+Mn(z),w=S;default:if(E<1){if(T==123)--E;else if(T==125&&E++==0&&ww()==125)continue}switch(z+=Lh(T),T*E){case 38:A=m>0?1:(z+="\f",-1);break;case 44:f[p++]=(Mn(z)-1)*A,A=1;break;case 64:pa()===45&&(z+=Md(pn())),v=pa(),m=y=Mn(C=z+=Aw(lu())),T++;break;case 45:S===45&&Mn(z)==2&&(E=0)}}return l}function Ng(t,e,i,r,o,l,c,f,d,p,m,y){for(var v=o-1,w=o===0?l:[""],S=ev(w),E=0,O=0,A=0;E<r;++E)for(var T=0,C=Sr(t,v+1,v=Wy(O=c[E])),j=t;T<S;++T)(j=Jy(O>0?w[T]+" "+C:ye(C,/&\f/g,w[T])))&&(d[A++]=j);return Yu(t,e,i,o===0?qu:f,d,p,m,y)}function Ow(t,e,i,r){return Yu(t,e,i,Ky,Lh(bw()),Sr(t,2,-2),0,r)}function Pg(t,e,i,r,o){return Yu(t,e,i,Ah,Sr(t,0,r),Sr(t,r+1,-1),r,o)}function nv(t,e,i){switch(vw(t,e)){case 5103:return De+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return De+t+t;case 4789:return Xs+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return De+t+Xs+t+_e+t+t;case 5936:switch(ft(t,e+11)){case 114:return De+t+_e+ye(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return De+t+_e+ye(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return De+t+_e+ye(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return De+t+_e+t+t;case 6165:return De+t+_e+"flex-"+t+t;case 5187:return De+t+ye(t,/(\w+).+(:[^]+)/,De+"box-$1$2"+_e+"flex-$1$2")+t;case 5443:return De+t+_e+"flex-item-"+ye(t,/flex-|-self/g,"")+(ni(t,/flex-|baseline/)?"":_e+"grid-row-"+ye(t,/flex-|-self/g,""))+t;case 4675:return De+t+_e+"flex-line-pack"+ye(t,/align-content|flex-|-self/g,"")+t;case 5548:return De+t+_e+ye(t,"shrink","negative")+t;case 5292:return De+t+_e+ye(t,"basis","preferred-size")+t;case 6060:return De+"box-"+ye(t,"-grow","")+De+t+_e+ye(t,"grow","positive")+t;case 4554:return De+ye(t,/([^-])(transform)/g,"$1"+De+"$2")+t;case 6187:return ye(ye(ye(t,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),t,"")+t;case 5495:case 3959:return ye(t,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return ye(ye(t,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+_e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+De+t+t;case 4200:if(!ni(t,/flex-|baseline/))return _e+"grid-column-align"+Sr(t,e)+t;break;case 2592:case 3360:return _e+ye(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(r,o){return e=o,ni(r.props,/grid-\w+-end/)})?~ou(t+(i=i[e].value),"span",0)?t:_e+ye(t,"-start","")+t+_e+"grid-row-span:"+(~ou(i,"span",0)?ni(i,/\d+/):+ni(i,/\d+/)-+ni(t,/\d+/))+";":_e+ye(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(r){return ni(r.props,/grid-\w+-start/)})?t:_e+ye(ye(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ye(t,/(.+)-inline(.+)/,De+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mn(t)-1-e>6)switch(ft(t,e+1)){case 109:if(ft(t,e+4)!==45)break;case 102:return ye(t,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+Xs+(ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ou(t,"stretch",0)?nv(ye(t,"stretch","fill-available"),e,i)+t:t}break;case 5152:case 5920:return ye(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,c,f,d,p){return _e+o+":"+l+p+(c?_e+o+"-span:"+(f?d:+d-+l)+p:"")+t});case 4949:if(ft(t,e+6)===121)return ye(t,":",":"+De)+t;break;case 6444:switch(ft(t,ft(t,14)===45?18:11)){case 120:return ye(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+De+(ft(t,14)===45?"inline-":"")+"box$3$1"+De+"$2$3$1"+_e+"$2box$3")+t;case 100:return ye(t,":",":"+_e)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(t,"scroll-","scroll-snap-")+t}return t}function xu(t,e){for(var i="",r=0;r<t.length;r++)i+=e(t[r],r,t,e)||"";return i}function Rw(t,e,i,r){switch(t.type){case yw:if(t.children.length)break;case gw:case Ah:return t.return=t.return||t.value;case Ky:return"";case Qy:return t.return=t.value+"{"+xu(t.children,r)+"}";case qu:if(!Mn(t.value=t.props.join(",")))return""}return Mn(i=xu(t.children,r))?t.return=t.value+"{"+i+"}":""}function jw(t){var e=ev(t);return function(i,r,o,l){for(var c="",f=0;f<e;f++)c+=t[f](i,r,o,l)||"";return c}}function Dw(t){return function(e){e.root||(e=e.return)&&t(e)}}function Hw(t,e,i,r){if(t.length>-1&&!t.return)switch(t.type){case Ah:t.return=nv(t.value,t.length,i);return;case Qy:return xu([ki(t,{value:ye(t.value,"@","@"+De)})],r);case qu:if(t.length)return xw(i=t.props,function(o){switch(ni(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sr(ki(t,{props:[ye(o,/:(read-\w+)/,":"+Xs+"$1")]})),sr(ki(t,{props:[o]})),A0(t,{props:kg(i,r)});break;case"::placeholder":sr(ki(t,{props:[ye(o,/:(plac\w+)/,":"+De+"input-$1")]})),sr(ki(t,{props:[ye(o,/:(plac\w+)/,":"+Xs+"$1")]})),sr(ki(t,{props:[ye(o,/:(plac\w+)/,_e+"input-$1")]})),sr(ki(t,{props:[o]})),A0(t,{props:kg(i,r)});break}return""})}}var Vw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yt={},Tr=typeof process<"u"&&Yt!==void 0&&(Yt.REACT_APP_SC_ATTR||Yt.SC_ATTR)||"data-styled",iv="active",av="data-styled-version",Fu="6.1.19",Oh=`/*!sc*/
`,bu=typeof window<"u"&&typeof document<"u",zw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==""?Yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.SC_DISABLE_SPEEDY!==void 0&&Yt.SC_DISABLE_SPEEDY!==""&&Yt.SC_DISABLE_SPEEDY!=="false"&&Yt.SC_DISABLE_SPEEDY),Zu=Object.freeze([]),Er=Object.freeze({});function kw(t,e,i){return i===void 0&&(i=Er),t.theme!==i.theme&&t.theme||e||i.theme}var rv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Nw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Pw=/(^-|-$)/g;function Bg(t){return t.replace(Nw,"-").replace(Pw,"")}var Bw=/(a)(d)/gi,_l=52,_g=function(t){return String.fromCharCode(t+(t>25?39:97))};function R0(t){var e,i="";for(e=Math.abs(t);e>_l;e=e/_l|0)i=_g(e%_l)+i;return(_g(e%_l)+i).replace(Bw,"$1-$2")}var Ad,sv=5381,dr=function(t,e){for(var i=e.length;i;)t=33*t^e.charCodeAt(--i);return t},ov=function(t){return dr(sv,t)};function lv(t){return R0(ov(t)>>>0)}function _w(t){return t.displayName||t.name||"Component"}function Ld(t){return typeof t=="string"&&!0}var uv=typeof Symbol=="function"&&Symbol.for,cv=uv?Symbol.for("react.memo"):60115,Uw=uv?Symbol.for("react.forward_ref"):60112,$w={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qw=((Ad={})[Uw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ad[cv]=fv,Ad);function Ug(t){return("type"in(e=t)&&e.type.$$typeof)===cv?fv:"$$typeof"in t?qw[t.$$typeof]:$w;var e}var Iw=Object.defineProperty,Yw=Object.getOwnPropertyNames,$g=Object.getOwnPropertySymbols,Xw=Object.getOwnPropertyDescriptor,Fw=Object.getPrototypeOf,Gg=Object.prototype;function dv(t,e,i){if(typeof e!="string"){if(Gg){var r=Fw(e);r&&r!==Gg&&dv(t,r,i)}var o=Yw(e);$g&&(o=o.concat($g(e)));for(var l=Ug(t),c=Ug(e),f=0;f<o.length;++f){var d=o[f];if(!(d in Gw||i&&i[d]||c&&d in c||l&&d in l)){var p=Xw(e,d);try{Iw(t,d,p)}catch{}}}}return t}function Mr(t){return typeof t=="function"}function Rh(t){return typeof t=="object"&&"styledComponentId"in t}function fa(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function j0(t,e){if(t.length===0)return"";for(var i=t[0],r=1;r<t.length;r++)i+=t[r];return i}function so(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function D0(t,e,i){if(i===void 0&&(i=!1),!i&&!so(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=D0(t[r],e[r]);else if(so(e))for(var r in e)t[r]=D0(t[r],e[r]);return t}function jh(t,e){Object.defineProperty(t,"toString",{value:e})}function xo(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Zw=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var i=0,r=0;r<e;r++)i+=this.groupSizes[r];return i},t.prototype.insertRules=function(e,i){if(e>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;e>=l;)if((l<<=1)<0)throw xo(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var c=o;c<l;c++)this.groupSizes[c]=0}for(var f=this.indexOfGroup(e+1),d=(c=0,i.length);c<d;c++)this.tag.insertRule(f,i[c])&&(this.groupSizes[e]++,f++)},t.prototype.clearGroup=function(e){if(e<this.length){var i=this.groupSizes[e],r=this.indexOfGroup(e),o=r+i;this.groupSizes[e]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var i="";if(e>=this.length||this.groupSizes[e]===0)return i;for(var r=this.groupSizes[e],o=this.indexOfGroup(e),l=o+r,c=o;c<l;c++)i+="".concat(this.tag.getRule(c)).concat(Oh);return i},t}(),cu=new Map,wu=new Map,fu=1,Ul=function(t){if(cu.has(t))return cu.get(t);for(;wu.has(fu);)fu++;var e=fu++;return cu.set(t,e),wu.set(e,t),e},Kw=function(t,e){fu=e+1,cu.set(t,e),wu.set(e,t)},Qw="style[".concat(Tr,"][").concat(av,'="').concat(Fu,'"]'),Ww=new RegExp("^".concat(Tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Jw=function(t,e,i){for(var r,o=i.split(","),l=0,c=o.length;l<c;l++)(r=o[l])&&t.registerName(e,r)},eS=function(t,e){for(var i,r=((i=e.textContent)!==null&&i!==void 0?i:"").split(Oh),o=[],l=0,c=r.length;l<c;l++){var f=r[l].trim();if(f){var d=f.match(Ww);if(d){var p=0|parseInt(d[1],10),m=d[2];p!==0&&(Kw(m,p),Jw(t,m,d[3]),t.getTag().insertRules(p,o)),o.length=0}else o.push(f)}}},qg=function(t){for(var e=document.querySelectorAll(Qw),i=0,r=e.length;i<r;i++){var o=e[i];o&&o.getAttribute(Tr)!==iv&&(eS(t,o),o.parentNode&&o.parentNode.removeChild(o))}};function tS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var hv=function(t){var e=document.head,i=t||e,r=document.createElement("style"),o=function(f){var d=Array.from(f.querySelectorAll("style[".concat(Tr,"]")));return d[d.length-1]}(i),l=o!==void 0?o.nextSibling:null;r.setAttribute(Tr,iv),r.setAttribute(av,Fu);var c=tS();return c&&r.setAttribute("nonce",c),i.insertBefore(r,l),r},nS=function(){function t(e){this.element=hv(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var c=r[o];if(c.ownerNode===i)return c}throw xo(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,i){try{return this.sheet.insertRule(i,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var i=this.sheet.cssRules[e];return i&&i.cssText?i.cssText:""},t}(),iS=function(){function t(e){this.element=hv(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,i){if(e<=this.length&&e>=0){var r=document.createTextNode(i);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),aS=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,i){return e<=this.length&&(this.rules.splice(e,0,i),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Ig=bu,rS={isServer:!bu,useCSSOMInjection:!zw},pv=function(){function t(e,i,r){e===void 0&&(e=Er),i===void 0&&(i={});var o=this;this.options=Vt(Vt({},rS),e),this.gs=i,this.names=new Map(r),this.server=!!e.isServer,!this.server&&bu&&Ig&&(Ig=!1,qg(this)),jh(this,function(){return function(l){for(var c=l.getTag(),f=c.length,d="",p=function(y){var v=function(A){return wu.get(A)}(y);if(v===void 0)return"continue";var w=l.names.get(v),S=c.getGroup(y);if(w===void 0||!w.size||S.length===0)return"continue";var E="".concat(Tr,".g").concat(y,'[id="').concat(v,'"]'),O="";w!==void 0&&w.forEach(function(A){A.length>0&&(O+="".concat(A,","))}),d+="".concat(S).concat(E,'{content:"').concat(O,'"}').concat(Oh)},m=0;m<f;m++)p(m);return d}(o)})}return t.registerId=function(e){return Ul(e)},t.prototype.rehydrate=function(){!this.server&&bu&&qg(this)},t.prototype.reconstructWithOptions=function(e,i){return i===void 0&&(i=!0),new t(Vt(Vt({},this.options),e),this.gs,i&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(i){var r=i.useCSSOMInjection,o=i.target;return i.isServer?new aS(o):r?new nS(o):new iS(o)}(this.options),new Zw(e)));var e},t.prototype.hasNameForId=function(e,i){return this.names.has(e)&&this.names.get(e).has(i)},t.prototype.registerName=function(e,i){if(Ul(e),this.names.has(e))this.names.get(e).add(i);else{var r=new Set;r.add(i),this.names.set(e,r)}},t.prototype.insertRules=function(e,i,r){this.registerName(e,i),this.getTag().insertRules(Ul(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ul(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),sS=/&/g,oS=/^\s*\/\/.*$/gm;function mv(t,e){return t.map(function(i){return i.type==="rule"&&(i.value="".concat(e," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(e," ")),i.props=i.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=mv(i.children,e)),i})}function lS(t){var e,i,r,o=Er,l=o.options,c=l===void 0?Er:l,f=o.plugins,d=f===void 0?Zu:f,p=function(v,w,S){return S.startsWith(i)&&S.endsWith(i)&&S.replaceAll(i,"").length>0?".".concat(e):v},m=d.slice();m.push(function(v){v.type===qu&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(sS,i).replace(r,p))}),c.prefix&&m.push(Hw),m.push(Rw);var y=function(v,w,S,E){w===void 0&&(w=""),S===void 0&&(S=""),E===void 0&&(E="&"),e=E,i=w,r=new RegExp("\\".concat(i,"\\b"),"g");var O=v.replace(oS,""),A=Lw(S||w?"".concat(S," ").concat(w," { ").concat(O," }"):O);c.namespace&&(A=mv(A,c.namespace));var T=[];return xu(A,jw(m.concat(Dw(function(C){return T.push(C)})))),T};return y.hash=d.length?d.reduce(function(v,w){return w.name||xo(15),dr(v,w.name)},sv).toString():"",y}var uS=new pv,H0=lS(),gv=Oe.createContext({shouldForwardProp:void 0,styleSheet:uS,stylis:H0});gv.Consumer;Oe.createContext(void 0);function Yg(){return R.useContext(gv)}var yv=function(){function t(e,i){var r=this;this.inject=function(o,l){l===void 0&&(l=H0);var c=r.name+l.hash;o.hasNameForId(r.id,c)||o.insertRules(r.id,c,l(r.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=i,jh(this,function(){throw xo(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=H0),this.name+e.hash},t}(),cS=function(t){return t>="A"&&t<="Z"};function Xg(t){for(var e="",i=0;i<t.length;i++){var r=t[i];if(i===1&&r==="-"&&t[0]==="-")return t;cS(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var vv=function(t){return t==null||t===!1||t===""},xv=function(t){var e,i,r=[];for(var o in t){var l=t[o];t.hasOwnProperty(o)&&!vv(l)&&(Array.isArray(l)&&l.isCss||Mr(l)?r.push("".concat(Xg(o),":"),l,";"):so(l)?r.push.apply(r,ro(ro(["".concat(o," {")],xv(l),!1),["}"],!1)):r.push("".concat(Xg(o),": ").concat((e=o,(i=l)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||e in Vw||e.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return r};function ma(t,e,i,r){if(vv(t))return[];if(Rh(t))return[".".concat(t.styledComponentId)];if(Mr(t)){if(!Mr(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var o=t(e);return ma(o,e,i,r)}var l;return t instanceof yv?i?(t.inject(i,r),[t.getName(r)]):[t]:so(t)?xv(t):Array.isArray(t)?Array.prototype.concat.apply(Zu,t.map(function(c){return ma(c,e,i,r)})):[t.toString()]}function fS(t){for(var e=0;e<t.length;e+=1){var i=t[e];if(Mr(i)&&!Rh(i))return!1}return!0}var dS=ov(Fu),hS=function(){function t(e,i,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&fS(e),this.componentId=i,this.baseHash=dr(dS,i),this.baseStyle=r,pv.registerId(i)}return t.prototype.generateAndInjectStyles=function(e,i,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,i,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=fa(o,this.staticRulesId);else{var l=j0(ma(this.rules,e,i,r)),c=R0(dr(this.baseHash,l)>>>0);if(!i.hasNameForId(this.componentId,c)){var f=r(l,".".concat(c),void 0,this.componentId);i.insertRules(this.componentId,c,f)}o=fa(o,c),this.staticRulesId=c}else{for(var d=dr(this.baseHash,r.hash),p="",m=0;m<this.rules.length;m++){var y=this.rules[m];if(typeof y=="string")p+=y;else if(y){var v=j0(ma(y,e,i,r));d=dr(d,v+m),p+=v}}if(p){var w=R0(d>>>0);i.hasNameForId(this.componentId,w)||i.insertRules(this.componentId,w,r(p,".".concat(w),void 0,this.componentId)),o=fa(o,w)}}return o},t}(),bv=Oe.createContext(void 0);bv.Consumer;var Od={};function pS(t,e,i){var r=Rh(t),o=t,l=!Ld(t),c=e.attrs,f=c===void 0?Zu:c,d=e.componentId,p=d===void 0?function(j,L){var N=typeof j!="string"?"sc":Bg(j);Od[N]=(Od[N]||0)+1;var z="".concat(N,"-").concat(lv(Fu+N+Od[N]));return L?"".concat(L,"-").concat(z):z}(e.displayName,e.parentComponentId):d,m=e.displayName,y=m===void 0?function(j){return Ld(j)?"styled.".concat(j):"Styled(".concat(_w(j),")")}(t):m,v=e.displayName&&e.componentId?"".concat(Bg(e.displayName),"-").concat(e.componentId):e.componentId||p,w=r&&o.attrs?o.attrs.concat(f).filter(Boolean):f,S=e.shouldForwardProp;if(r&&o.shouldForwardProp){var E=o.shouldForwardProp;if(e.shouldForwardProp){var O=e.shouldForwardProp;S=function(j,L){return E(j,L)&&O(j,L)}}else S=E}var A=new hS(i,v,r?o.componentStyle:void 0);function T(j,L){return function(N,z,U){var _=N.attrs,Y=N.componentStyle,X=N.defaultProps,te=N.foldedComponentIds,ie=N.styledComponentId,oe=N.target,re=Oe.useContext(bv),B=Yg(),K=N.shouldForwardProp||B.shouldForwardProp,Q=kw(z,re,X)||Er,ee=function(be,fe,rt){for(var Re,vt=Vt(Vt({},fe),{className:void 0,theme:rt}),qi=0;qi<be.length;qi+=1){var Nn=Mr(Re=be[qi])?Re(vt):Re;for(var Zt in Nn)vt[Zt]=Zt==="className"?fa(vt[Zt],Nn[Zt]):Zt==="style"?Vt(Vt({},vt[Zt]),Nn[Zt]):Nn[Zt]}return fe.className&&(vt.className=fa(vt.className,fe.className)),vt}(_,z,Q),H=ee.as||oe,F={};for(var ne in ee)ee[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&ee.theme===Q||(ne==="forwardedAs"?F.as=ee.forwardedAs:K&&!K(ne,H)||(F[ne]=ee[ne]));var ae=function(be,fe){var rt=Yg(),Re=be.generateAndInjectStyles(fe,rt.styleSheet,rt.stylis);return Re}(Y,ee),ue=fa(te,ie);return ae&&(ue+=" "+ae),ee.className&&(ue+=" "+ee.className),F[Ld(H)&&!rv.has(H)?"class":"className"]=ue,U&&(F.ref=U),R.createElement(H,F)}(C,j,L)}T.displayName=y;var C=Oe.forwardRef(T);return C.attrs=w,C.componentStyle=A,C.displayName=y,C.shouldForwardProp=S,C.foldedComponentIds=r?fa(o.foldedComponentIds,o.styledComponentId):"",C.styledComponentId=v,C.target=r?o.target:t,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=r?function(L){for(var N=[],z=1;z<arguments.length;z++)N[z-1]=arguments[z];for(var U=0,_=N;U<_.length;U++)D0(L,_[U],!0);return L}({},o.defaultProps,j):j}}),jh(C,function(){return".".concat(C.styledComponentId)}),l&&dv(C,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Fg(t,e){for(var i=[t[0]],r=0,o=e.length;r<o;r+=1)i.push(e[r],t[r+1]);return i}var Zg=function(t){return Object.assign(t,{isCss:!0})};function Dh(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(Mr(t)||so(t))return Zg(ma(Fg(Zu,ro([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ma(r):Zg(ma(Fg(r,e)))}function V0(t,e,i){if(i===void 0&&(i=Er),!e)throw xo(1,e);var r=function(o){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return t(e,i,Dh.apply(void 0,ro([o],l,!1)))};return r.attrs=function(o){return V0(t,e,Vt(Vt({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return V0(t,e,Vt(Vt({},i),o))},r}var wv=function(t){return V0(pS,t)},D=wv;rv.forEach(function(t){D[t]=wv(t)});function mS(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var r=j0(Dh.apply(void 0,ro([t],e,!1))),o=lv(r);return new yv(o,r)}D.div`
  position: relative;
  cursor: pointer;
  color: #808080;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  display: flex;
  transition: all 0.3s ease;
  
  &:hover,
  &.active {
    color: var(--purple-400);
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 2px solid var(--purple-400);
    outline-offset: 2px;
    border-radius: 4px;
  }
  
  &:active {
    transform: translateY(0);
    transition: all 0.1s ease;
  }
`;D.img`
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(2px);
    filter: brightness(1.2);
  }
  
  &:focus {
    outline: 2px solid var(--purple-400);
    outline-offset: 2px;
    border-radius: 4px;
  }
`;D.div`
  padding: 8px 20px;
  transition: all 0.3s ease;

  &:hover {
    color: var(--purple-400);
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateX(4px);
  }
  
  &:focus {
    outline: 2px solid var(--purple-400);
    outline-offset: -2px;
  }
  
  &:active {
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease;
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 14px;
    display: block;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--purple-400);
    }
  }
`;const gS=D.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: all 180ms ease;
  will-change: transform;

  ${({$isScrolled:t})=>t&&Dh`
      background: rgba(0, 0, 0, 0.39);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    `}
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,yS=D.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;

  z-index: 1199;

  @media (max-width: 768px) {
    padding: 1rem;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`,vS=D.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    width: auto;

    div {
      display: flex;
    }
  }
`,xS=D.ul`
  display: none;

  @media screen and (min-width: 1440px) {
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
    border-radius: 24px;
    padding: 12px 20px;
    width: auto;
    height: 42px;

    display: flex;
    align-items: center;
    margin-left: 30px;
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }
  }
`,bS=D($i)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:focus {
    outline: 2px solid var(--purple-400);
    outline-offset: 4px;
    border-radius: 8px;
  }
  
  &:active {
    transform: scale(0.98);
  }

  img {
    width: 177px;
    height: auto;
    overflow: hidden;
    transition: all 0.3s ease;
    filter: ${({$overlayOpen:t})=>t?"brightness(0) saturate(100%)":"none"};
    
    &:hover {
      filter: brightness(1.1) ${({$overlayOpen:t})=>t?"brightness(0) saturate(100%)":"none"};
    }
  }
`,_s=D.li`
  color: rgb(49, 46, 46);
  transition: all 0.3s ease;

  a {
    text-decoration: none;
    color: #ffffffff;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    transition: all 0.3s ease;
    padding: 8px 12px;
    border-radius: 6px;

    &:hover,
    &.active {
      color: #6d87efff;
      background-color: rgba(109, 135, 239, 0.1);
      transform: translateY(-1px);
    }
    
    &:focus {
      outline: 2px solid var(--purple-400);
      outline-offset: 2px;
    }
    
    &:active {
      transform: translateY(0);
      background-color: rgba(109, 135, 239, 0.2);
    }
  }
`,Us=D($i)`
  display: flex;
  text-decoration: none;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: var(--white);
  transition: all 0.3s ease;
  position: relative;
  width: max-content;
  padding: 8px 12px;
  border-radius: 6px;

  color: #808080;
  cursor: pointer;

  &:hover {
    color: var(--purple-400);
    background-color: rgba(109, 135, 239, 0.1);
    transform: translateY(-1px);
  }

  &:focus {
    outline: 2px solid var(--purple-400);
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
    background-color: rgba(109, 135, 239, 0.2);
    transition: all 0.1s ease;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: #808080;
    transition: width 0.3s ease-in-out;
  }

  &.active {
    color: rgb(255, 255, 255);
    background-color: rgba(109, 135, 239, 0.15);
    
    &::after {
      width: 100%;
    }
  }

  &:hover::after {
    width: 100%;
    color: var(--purple-400);
  }
`;D($i)`
  display: flex;
  text-decoration: none;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: var(--white-50);
  transition: all 0.3s ease;
  position: relative;
  padding: 12px 16px;
  border-radius: 8px;

  color: #808080;
  cursor: pointer;

  &:hover {
    color: var(--purple-400);
    background-color: rgba(109, 135, 239, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: 2px solid var(--purple-400);
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    background-color: rgba(109, 135, 239, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: #808080;
    transition: width 0.3s ease-in-out;
  }

  &.active {
    color: rgb(255, 255, 255);
    background-color: rgba(109, 135, 239, 0.15);
    
    &::after {
      width: 100%;
    }
  }

  &:hover::after {
    width: 100%;
    color: var(--purple-400);
  }
`;const Kg=D.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    flex-wrap: wrap;
    padding: 8px 16px 0px 16px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: end;
    gap: 20px;
    width: auto;
  }
`,$l=D.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
  }
`,Hi=D.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;
    line-height: 125%;
    color: ${({$overlayOpen:t})=>t?"black":"white"};
    width: max-content;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--purple-400);
      transform: translateX(2px);
    }
    
    &:focus {
      outline: 2px solid var(--purple-400);
      outline-offset: 2px;
      border-radius: 4px;
    }

    a {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 13px;
      line-height: 125%;
      color: ${({$overlayOpen:t})=>t?"black":"white"};
      transition: color 0.3s ease;
      
      &:hover {
        color: var(--purple-400);
      }
      
      &:focus {
        outline: 2px solid var(--purple-400);
        outline-offset: 2px;
        border-radius: 4px;
      }
    }

    img {
      margin-right: 5px;
      transition: all 0.3s ease;
      filter: ${({$overlayOpen:t})=>t?"brightness(0) saturate(100%)":"none"};
      
      &:hover {
        transform: scale(1.1);
        filter: ${({$overlayOpen:t})=>t?"brightness(0) saturate(100%)":"brightness(1.2)"};
      }
    }
  }
  @media screen and (min-width: 1440px) {
  }
`,Sv=D.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    z-index: 1100;
    padding: 12px 24px;
    border: 1px solid ${({$overlayOpen:t})=>t?"black":"white"};
    border-radius: 8px;
    cursor: pointer;
    white-space: nowrap;
    width: auto;
    min-width: 119px;
    background: transparent;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 15px;
    color: ${({$overlayOpen:t})=>t?"black":"white"};
    margin-left: 8px;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: ${({$overlayOpen:t})=>t?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)"};
      border-color: var(--purple-400);
      color: var(--purple-400);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(109, 135, 239, 0.2);
    }
    
    &:focus {
      outline: 2px solid var(--purple-400);
      outline-offset: 2px;
      background-color: ${({$overlayOpen:t})=>t?"rgba(0, 0, 0, 0.15)":"rgba(255, 255, 255, 0.15)"};
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 6px rgba(109, 135, 239, 0.1);
      background-color: ${({$overlayOpen:t})=>t?"rgba(0, 0, 0, 0.2)":"rgba(255, 255, 255, 0.2)"};
    }

    a {
      color: ${({$overlayOpen:t})=>t?"black":"white"};
      transition: color 0.3s ease;
      
      &:hover {
        color: var(--purple-400);
      }
    }
  }
  @media screen and (min-width: 1440px) {
  }
`;var Gl={},Qg;function wS(){if(Qg)return Gl;Qg=1,Gl.match=l,Gl.parse=c;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,e=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,r=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function l(m,y){return c(m).some(function(v){var w=v.inverse,S=v.type==="all"||y.type===v.type;if(S&&w||!(S||w))return!1;var E=v.expressions.every(function(O){var A=O.feature,T=O.modifier,C=O.value,j=y[A];if(!j)return!1;switch(A){case"orientation":case"scan":return j.toLowerCase()===C.toLowerCase();case"width":case"height":case"device-width":case"device-height":C=p(C),j=p(j);break;case"resolution":C=d(C),j=d(j);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":C=f(C),j=f(j);break;case"grid":case"color":case"color-index":case"monochrome":C=parseInt(C,10)||1,j=parseInt(j,10)||0;break}switch(T){case"min":return j>=C;case"max":return j<=C;default:return j===C}});return E&&!w||!E&&w})}function c(m){return m.split(",").map(function(y){y=y.trim();var v=y.match(t),w=v[1],S=v[2],E=v[3]||"",O={};return O.inverse=!!w&&w.toLowerCase()==="not",O.type=S?S.toLowerCase():"all",E=E.match(/\([^\)]+\)/g)||[],O.expressions=E.map(function(A){var T=A.match(e),C=T[1].toLowerCase().match(i);return{modifier:C[1],feature:C[2],value:T[2]}}),O})}function f(m){var y=Number(m),v;return y||(v=m.match(/^(\d+)\s*\/\s*(\d+)$/),y=v[1]/v[2]),y}function d(m){var y=parseFloat(m),v=String(m).match(o)[1];switch(v){case"dpcm":return y/2.54;case"dppx":return y*96;default:return y}}function p(m){var y=parseFloat(m),v=String(m).match(r)[1];switch(v){case"em":return y*16;case"rem":return y*16;case"cm":return y*96/2.54;case"mm":return y*96/2.54/10;case"in":return y*96;case"pt":return y*72;case"pc":return y*72/12;default:return y}}return Gl}var Rd,Wg;function SS(){if(Wg)return Rd;Wg=1;var t=wS().match,e=typeof window<"u"?window.matchMedia:null;function i(o,l,c){var f=this,d;e&&!c&&(d=e.call(window,o)),d?(this.matches=d.matches,this.media=d.media,d.addListener(y)):(this.matches=t(o,l),this.media=o),this.addListener=p,this.removeListener=m,this.dispose=v;function p(w){d&&d.addListener(w)}function m(w){d&&d.removeListener(w)}function y(w){f.matches=w.matches,f.media=w.media}function v(){d&&d.removeListener(y)}}function r(o,l,c){return new i(o,l,c)}return Rd=r,Rd}var CS=SS();const TS=Pu(CS);var ES=/[A-Z]/g,MS=/^ms-/,jd={};function AS(t){return"-"+t.toLowerCase()}function Cv(t){if(jd.hasOwnProperty(t))return jd[t];var e=t.replace(ES,AS);return jd[t]=MS.test(e)?"-"+e:e}function LS(t,e){if(t===e)return!0;if(!t||!e)return!1;const i=Object.keys(t),r=Object.keys(e),o=i.length;if(r.length!==o)return!1;for(let l=0;l<o;l++){const c=i[l];if(t[c]!==e[c]||!Object.prototype.hasOwnProperty.call(e,c))return!1}return!0}var Dd={exports:{}},Hd,Jg;function OS(){if(Jg)return Hd;Jg=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Hd=t,Hd}var Vd,e3;function RS(){if(e3)return Vd;e3=1;var t=OS();function e(){}function i(){}return i.resetWarningCache=e,Vd=function(){function r(c,f,d,p,m,y){if(y!==t){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function o(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:e};return l.PropTypes=l,l},Vd}var t3;function jS(){return t3||(t3=1,Dd.exports=RS()()),Dd.exports}var DS=jS();const Le=Pu(DS),At=Le.oneOfType([Le.string,Le.number]),Tv={all:Le.bool,grid:Le.bool,aural:Le.bool,braille:Le.bool,handheld:Le.bool,print:Le.bool,projection:Le.bool,screen:Le.bool,tty:Le.bool,tv:Le.bool,embossed:Le.bool},HS={orientation:Le.oneOf(["portrait","landscape"]),scan:Le.oneOf(["progressive","interlace"]),aspectRatio:Le.string,deviceAspectRatio:Le.string,height:At,deviceHeight:At,width:At,deviceWidth:At,color:Le.bool,colorIndex:Le.bool,monochrome:Le.bool,resolution:At,type:Object.keys(Tv)},{type:HH,...VS}=HS,zS={minAspectRatio:Le.string,maxAspectRatio:Le.string,minDeviceAspectRatio:Le.string,maxDeviceAspectRatio:Le.string,minHeight:At,maxHeight:At,minDeviceHeight:At,maxDeviceHeight:At,minWidth:At,maxWidth:At,minDeviceWidth:At,maxDeviceWidth:At,minColor:Le.number,maxColor:Le.number,minColorIndex:Le.number,maxColorIndex:Le.number,minMonochrome:Le.number,maxMonochrome:Le.number,minResolution:At,maxResolution:At,...VS},kS={...Tv,...zS};var NS={all:kS};const PS=t=>`not ${t}`,BS=(t,e)=>{const i=Cv(t);return typeof e=="number"&&(e=`${e}px`),e===!0?i:e===!1?PS(i):`(${i}: ${e})`},_S=t=>t.join(" and "),US=t=>{const e=[];return Object.keys(NS.all).forEach(i=>{const r=t[i];r!=null&&e.push(BS(i,r))}),_S(e)},$S=R.createContext(void 0),GS=t=>t.query||US(t),n3=t=>t?Object.keys(t).reduce((i,r)=>(i[Cv(r)]=t[r],i),{}):void 0,Ev=()=>{const t=R.useRef(!1);return R.useEffect(()=>{t.current=!0},[]),t.current},qS=t=>{const e=R.useContext($S),i=()=>n3(t)||n3(e),[r,o]=R.useState(i);return R.useEffect(()=>{const l=i();LS(r,l)||o(l)},[t,e]),r},IS=t=>{const e=()=>GS(t),[i,r]=R.useState(e);return R.useEffect(()=>{const o=e();i!==o&&r(o)},[t]),i},YS=(t,e)=>{const i=()=>TS(t,e||{},!!e),[r,o]=R.useState(i),l=Ev();return R.useEffect(()=>{if(l){const c=i();return o(c),()=>{c&&c.dispose()}}},[t,e]),r},XS=t=>{const[e,i]=R.useState(t.matches);return R.useEffect(()=>{const r=o=>{i(o.matches)};return t.addListener(r),i(t.matches),()=>{t.removeListener(r)}},[t]),e},yt=(t,e,i)=>{const r=qS(e),o=IS(t);if(!o)throw new Error("Invalid or missing MediaQuery!");const l=YS(o,r),c=XS(l);return Ev(),R.useEffect(()=>{},[c]),R.useEffect(()=>()=>{l&&l.dispose()},[]),c},Hh=R.createContext({});function Vh(t){const e=R.useRef(null);return e.current===null&&(e.current=t()),e.current}const zh=typeof window<"u",Mv=zh?R.useLayoutEffect:R.useEffect,Ku=R.createContext(null);function kh(t,e){t.indexOf(e)===-1&&t.push(e)}function Nh(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}const oi=(t,e,i)=>i>e?e:i<t?t:i;let Ph=()=>{};const li={},Av=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Lv(t){return typeof t=="object"&&t!==null}const Ov=t=>/^0[^.\s]+$/u.test(t);function Bh(t){let e;return()=>(e===void 0&&(e=t()),e)}const ln=t=>t,FS=(t,e)=>i=>e(t(i)),bo=(...t)=>t.reduce(FS),oo=(t,e,i)=>{const r=e-t;return r===0?1:(i-t)/r};class _h{constructor(){this.subscriptions=[]}add(e){return kh(this.subscriptions,e),()=>Nh(this.subscriptions,e)}notify(e,i,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,i,r);else for(let l=0;l<o;l++){const c=this.subscriptions[l];c&&c(e,i,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Rn=t=>t*1e3,jn=t=>t/1e3;function Rv(t,e){return e?t*(1e3/e):0}const jv=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,ZS=1e-7,KS=12;function QS(t,e,i,r,o){let l,c,f=0;do c=e+(i-e)/2,l=jv(c,r,o)-t,l>0?i=c:e=c;while(Math.abs(l)>ZS&&++f<KS);return c}function wo(t,e,i,r){if(t===e&&i===r)return ln;const o=l=>QS(l,0,1,t,i);return l=>l===0||l===1?l:jv(o(l),e,r)}const Dv=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Hv=t=>e=>1-t(1-e),Vv=wo(.33,1.53,.69,.99),Uh=Hv(Vv),zv=Dv(Uh),kv=t=>(t*=2)<1?.5*Uh(t):.5*(2-Math.pow(2,-10*(t-1))),$h=t=>1-Math.sin(Math.acos(t)),Nv=Hv($h),Pv=Dv($h),WS=wo(.42,0,1,1),JS=wo(0,0,.58,1),Bv=wo(.42,0,.58,1),eC=t=>Array.isArray(t)&&typeof t[0]!="number",_v=t=>Array.isArray(t)&&typeof t[0]=="number",tC={linear:ln,easeIn:WS,easeInOut:Bv,easeOut:JS,circIn:$h,circInOut:Pv,circOut:Nv,backIn:Uh,backInOut:zv,backOut:Vv,anticipate:kv},nC=t=>typeof t=="string",i3=t=>{if(_v(t)){Ph(t.length===4);const[e,i,r,o]=t;return wo(e,i,r,o)}else if(nC(t))return tC[t];return t},ql=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function iC(t,e){let i=new Set,r=new Set,o=!1,l=!1;const c=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function d(m){c.has(m)&&(p.schedule(m),t()),m(f)}const p={schedule:(m,y=!1,v=!1)=>{const S=v&&o?i:r;return y&&c.add(m),S.has(m)||S.add(m),m},cancel:m=>{r.delete(m),c.delete(m)},process:m=>{if(f=m,o){l=!0;return}o=!0,[i,r]=[r,i],i.forEach(d),i.clear(),o=!1,l&&(l=!1,p.process(m))}};return p}const aC=40;function Uv(t,e){let i=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>i=!0,c=ql.reduce((C,j)=>(C[j]=iC(l),C),{}),{setup:f,read:d,resolveKeyframes:p,preUpdate:m,update:y,preRender:v,render:w,postRender:S}=c,E=()=>{const C=li.useManualTiming?o.timestamp:performance.now();i=!1,li.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(C-o.timestamp,aC),1)),o.timestamp=C,o.isProcessing=!0,f.process(o),d.process(o),p.process(o),m.process(o),y.process(o),v.process(o),w.process(o),S.process(o),o.isProcessing=!1,i&&e&&(r=!1,t(E))},O=()=>{i=!0,r=!0,o.isProcessing||t(E)};return{schedule:ql.reduce((C,j)=>{const L=c[j];return C[j]=(N,z=!1,U=!1)=>(i||O(),L.schedule(N,z,U)),C},{}),cancel:C=>{for(let j=0;j<ql.length;j++)c[ql[j]].cancel(C)},state:o,steps:c}}const{schedule:$e,cancel:Bi,state:mt,steps:zd}=Uv(typeof requestAnimationFrame<"u"?requestAnimationFrame:ln,!0);let du;function rC(){du=void 0}const zt={now:()=>(du===void 0&&zt.set(mt.isProcessing||li.useManualTiming?mt.timestamp:performance.now()),du),set:t=>{du=t,queueMicrotask(rC)}},$v=t=>e=>typeof e=="string"&&e.startsWith(t),Gh=$v("--"),sC=$v("var(--"),qh=t=>sC(t)?oC.test(t.split("/*")[0].trim()):!1,oC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,zr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},lo={...zr,transform:t=>oi(0,1,t)},Il={...zr,default:1},Fs=t=>Math.round(t*1e5)/1e5,Ih=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function lC(t){return t==null}const uC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yh=(t,e)=>i=>!!(typeof i=="string"&&uC.test(i)&&i.startsWith(t)||e&&!lC(i)&&Object.prototype.hasOwnProperty.call(i,e)),Gv=(t,e,i)=>r=>{if(typeof r!="string")return r;const[o,l,c,f]=r.match(Ih);return{[t]:parseFloat(o),[e]:parseFloat(l),[i]:parseFloat(c),alpha:f!==void 0?parseFloat(f):1}},cC=t=>oi(0,255,t),kd={...zr,transform:t=>Math.round(cC(t))},da={test:Yh("rgb","red"),parse:Gv("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:r=1})=>"rgba("+kd.transform(t)+", "+kd.transform(e)+", "+kd.transform(i)+", "+Fs(lo.transform(r))+")"};function fC(t){let e="",i="",r="",o="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),r=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),r=t.substring(3,4),o=t.substring(4,5),e+=e,i+=i,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const z0={test:Yh("#"),parse:fC,transform:da.transform},So=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Ni=So("deg"),Dn=So("%"),pe=So("px"),dC=So("vh"),hC=So("vw"),a3={...Dn,parse:t=>Dn.parse(t)/100,transform:t=>Dn.transform(t*100)},hr={test:Yh("hsl","hue"),parse:Gv("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:r=1})=>"hsla("+Math.round(t)+", "+Dn.transform(Fs(e))+", "+Dn.transform(Fs(i))+", "+Fs(lo.transform(r))+")"},et={test:t=>da.test(t)||z0.test(t)||hr.test(t),parse:t=>da.test(t)?da.parse(t):hr.test(t)?hr.parse(t):z0.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?da.transform(t):hr.transform(t),getAnimatableNone:t=>{const e=et.parse(t);return e.alpha=0,et.transform(e)}},pC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function mC(t){var e,i;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Ih))==null?void 0:e.length)||0)+(((i=t.match(pC))==null?void 0:i.length)||0)>0}const qv="number",Iv="color",gC="var",yC="var(",r3="${}",vC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function uo(t){const e=t.toString(),i=[],r={color:[],number:[],var:[]},o=[];let l=0;const f=e.replace(vC,d=>(et.test(d)?(r.color.push(l),o.push(Iv),i.push(et.parse(d))):d.startsWith(yC)?(r.var.push(l),o.push(gC),i.push(d)):(r.number.push(l),o.push(qv),i.push(parseFloat(d))),++l,r3)).split(r3);return{values:i,split:f,indexes:r,types:o}}function Yv(t){return uo(t).values}function Xv(t){const{split:e,types:i}=uo(t),r=e.length;return o=>{let l="";for(let c=0;c<r;c++)if(l+=e[c],o[c]!==void 0){const f=i[c];f===qv?l+=Fs(o[c]):f===Iv?l+=et.transform(o[c]):l+=o[c]}return l}}const xC=t=>typeof t=="number"?0:et.test(t)?et.getAnimatableNone(t):t;function bC(t){const e=Yv(t);return Xv(t)(e.map(xC))}const _i={test:mC,parse:Yv,createTransformer:Xv,getAnimatableNone:bC};function Nd(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function wC({hue:t,saturation:e,lightness:i,alpha:r}){t/=360,e/=100,i/=100;let o=0,l=0,c=0;if(!e)o=l=c=i;else{const f=i<.5?i*(1+e):i+e-i*e,d=2*i-f;o=Nd(d,f,t+1/3),l=Nd(d,f,t),c=Nd(d,f,t-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(c*255),alpha:r}}function Su(t,e){return i=>i>0?e:t}const Ie=(t,e,i)=>t+(e-t)*i,Pd=(t,e,i)=>{const r=t*t,o=i*(e*e-r)+r;return o<0?0:Math.sqrt(o)},SC=[z0,da,hr],CC=t=>SC.find(e=>e.test(t));function s3(t){const e=CC(t);if(!e)return!1;let i=e.parse(t);return e===hr&&(i=wC(i)),i}const o3=(t,e)=>{const i=s3(t),r=s3(e);if(!i||!r)return Su(t,e);const o={...i};return l=>(o.red=Pd(i.red,r.red,l),o.green=Pd(i.green,r.green,l),o.blue=Pd(i.blue,r.blue,l),o.alpha=Ie(i.alpha,r.alpha,l),da.transform(o))},k0=new Set(["none","hidden"]);function TC(t,e){return k0.has(t)?i=>i<=0?t:e:i=>i>=1?e:t}function EC(t,e){return i=>Ie(t,e,i)}function Xh(t){return typeof t=="number"?EC:typeof t=="string"?qh(t)?Su:et.test(t)?o3:LC:Array.isArray(t)?Fv:typeof t=="object"?et.test(t)?o3:MC:Su}function Fv(t,e){const i=[...t],r=i.length,o=t.map((l,c)=>Xh(l)(l,e[c]));return l=>{for(let c=0;c<r;c++)i[c]=o[c](l);return i}}function MC(t,e){const i={...t,...e},r={};for(const o in i)t[o]!==void 0&&e[o]!==void 0&&(r[o]=Xh(t[o])(t[o],e[o]));return o=>{for(const l in r)i[l]=r[l](o);return i}}function AC(t,e){const i=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],c=t.indexes[l][r[l]],f=t.values[c]??0;i[o]=f,r[l]++}return i}const LC=(t,e)=>{const i=_i.createTransformer(e),r=uo(t),o=uo(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?k0.has(t)&&!o.values.length||k0.has(e)&&!r.values.length?TC(t,e):bo(Fv(AC(r,o),o.values),i):Su(t,e)};function Zv(t,e,i){return typeof t=="number"&&typeof e=="number"&&typeof i=="number"?Ie(t,e,i):Xh(t)(t,e)}const OC=t=>{const e=({timestamp:i})=>t(i);return{start:(i=!0)=>$e.update(e,i),stop:()=>Bi(e),now:()=>mt.isProcessing?mt.timestamp:zt.now()}},Kv=(t,e,i=10)=>{let r="";const o=Math.max(Math.round(e/i),2);for(let l=0;l<o;l++)r+=Math.round(t(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Cu=2e4;function Fh(t){let e=0;const i=50;let r=t.next(e);for(;!r.done&&e<Cu;)e+=i,r=t.next(e);return e>=Cu?1/0:e}function RC(t,e=100,i){const r=i({...t,keyframes:[0,e]}),o=Math.min(Fh(r),Cu);return{type:"keyframes",ease:l=>r.next(o*l).value/e,duration:jn(o)}}const jC=5;function Qv(t,e,i){const r=Math.max(e-jC,0);return Rv(i-t(r),e-r)}const Fe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Bd=.001;function DC({duration:t=Fe.duration,bounce:e=Fe.bounce,velocity:i=Fe.velocity,mass:r=Fe.mass}){let o,l,c=1-e;c=oi(Fe.minDamping,Fe.maxDamping,c),t=oi(Fe.minDuration,Fe.maxDuration,jn(t)),c<1?(o=p=>{const m=p*c,y=m*t,v=m-i,w=N0(p,c),S=Math.exp(-y);return Bd-v/w*S},l=p=>{const y=p*c*t,v=y*i+i,w=Math.pow(c,2)*Math.pow(p,2)*t,S=Math.exp(-y),E=N0(Math.pow(p,2),c);return(-o(p)+Bd>0?-1:1)*((v-w)*S)/E}):(o=p=>{const m=Math.exp(-p*t),y=(p-i)*t+1;return-Bd+m*y},l=p=>{const m=Math.exp(-p*t),y=(i-p)*(t*t);return m*y});const f=5/t,d=VC(o,l,f);if(t=Rn(t),isNaN(d))return{stiffness:Fe.stiffness,damping:Fe.damping,duration:t};{const p=Math.pow(d,2)*r;return{stiffness:p,damping:c*2*Math.sqrt(r*p),duration:t}}}const HC=12;function VC(t,e,i){let r=i;for(let o=1;o<HC;o++)r=r-t(r)/e(r);return r}function N0(t,e){return t*Math.sqrt(1-e*e)}const zC=["duration","bounce"],kC=["stiffness","damping","mass"];function l3(t,e){return e.some(i=>t[i]!==void 0)}function NC(t){let e={velocity:Fe.velocity,stiffness:Fe.stiffness,damping:Fe.damping,mass:Fe.mass,isResolvedFromDuration:!1,...t};if(!l3(t,kC)&&l3(t,zC))if(t.visualDuration){const i=t.visualDuration,r=2*Math.PI/(i*1.2),o=r*r,l=2*oi(.05,1,1-(t.bounce||0))*Math.sqrt(o);e={...e,mass:Fe.mass,stiffness:o,damping:l}}else{const i=DC(t);e={...e,...i,mass:Fe.mass},e.isResolvedFromDuration=!0}return e}function Tu(t=Fe.visualDuration,e=Fe.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:o}=i;const l=i.keyframes[0],c=i.keyframes[i.keyframes.length-1],f={done:!1,value:l},{stiffness:d,damping:p,mass:m,duration:y,velocity:v,isResolvedFromDuration:w}=NC({...i,velocity:-jn(i.velocity||0)}),S=v||0,E=p/(2*Math.sqrt(d*m)),O=c-l,A=jn(Math.sqrt(d/m)),T=Math.abs(O)<5;r||(r=T?Fe.restSpeed.granular:Fe.restSpeed.default),o||(o=T?Fe.restDelta.granular:Fe.restDelta.default);let C;if(E<1){const L=N0(A,E);C=N=>{const z=Math.exp(-E*A*N);return c-z*((S+E*A*O)/L*Math.sin(L*N)+O*Math.cos(L*N))}}else if(E===1)C=L=>c-Math.exp(-A*L)*(O+(S+A*O)*L);else{const L=A*Math.sqrt(E*E-1);C=N=>{const z=Math.exp(-E*A*N),U=Math.min(L*N,300);return c-z*((S+E*A*O)*Math.sinh(U)+L*O*Math.cosh(U))/L}}const j={calculatedDuration:w&&y||null,next:L=>{const N=C(L);if(w)f.done=L>=y;else{let z=L===0?S:0;E<1&&(z=L===0?Rn(S):Qv(C,L,N));const U=Math.abs(z)<=r,_=Math.abs(c-N)<=o;f.done=U&&_}return f.value=f.done?c:N,f},toString:()=>{const L=Math.min(Fh(j),Cu),N=Kv(z=>j.next(L*z).value,L,30);return L+"ms "+N},toTransition:()=>{}};return j}Tu.applyToOptions=t=>{const e=RC(t,100,Tu);return t.ease=e.ease,t.duration=Rn(e.duration),t.type="keyframes",t};function P0({keyframes:t,velocity:e=0,power:i=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:c,min:f,max:d,restDelta:p=.5,restSpeed:m}){const y=t[0],v={done:!1,value:y},w=U=>f!==void 0&&U<f||d!==void 0&&U>d,S=U=>f===void 0?d:d===void 0||Math.abs(f-U)<Math.abs(d-U)?f:d;let E=i*e;const O=y+E,A=c===void 0?O:c(O);A!==O&&(E=A-y);const T=U=>-E*Math.exp(-U/r),C=U=>A+T(U),j=U=>{const _=T(U),Y=C(U);v.done=Math.abs(_)<=p,v.value=v.done?A:Y};let L,N;const z=U=>{w(v.value)&&(L=U,N=Tu({keyframes:[v.value,S(v.value)],velocity:Qv(C,U,v.value),damping:o,stiffness:l,restDelta:p,restSpeed:m}))};return z(0),{calculatedDuration:null,next:U=>{let _=!1;return!N&&L===void 0&&(_=!0,j(U),z(U)),L!==void 0&&U>=L?N.next(U-L):(!_&&j(U),v)}}}function PC(t,e,i){const r=[],o=i||li.mix||Zv,l=t.length-1;for(let c=0;c<l;c++){let f=o(t[c],t[c+1]);if(e){const d=Array.isArray(e)?e[c]||ln:e;f=bo(d,f)}r.push(f)}return r}function BC(t,e,{clamp:i=!0,ease:r,mixer:o}={}){const l=t.length;if(Ph(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const c=t[0]===t[1];t[0]>t[l-1]&&(t=[...t].reverse(),e=[...e].reverse());const f=PC(e,r,o),d=f.length,p=m=>{if(c&&m<t[0])return e[0];let y=0;if(d>1)for(;y<t.length-2&&!(m<t[y+1]);y++);const v=oo(t[y],t[y+1],m);return f[y](v)};return i?m=>p(oi(t[0],t[l-1],m)):p}function _C(t,e){const i=t[t.length-1];for(let r=1;r<=e;r++){const o=oo(0,e,r);t.push(Ie(i,1,o))}}function UC(t){const e=[0];return _C(e,t.length-1),e}function $C(t,e){return t.map(i=>i*e)}function GC(t,e){return t.map(()=>e||Bv).splice(0,t.length-1)}function Zs({duration:t=300,keyframes:e,times:i,ease:r="easeInOut"}){const o=eC(r)?r.map(i3):i3(r),l={done:!1,value:e[0]},c=$C(i&&i.length===e.length?i:UC(e),t),f=BC(c,e,{ease:Array.isArray(o)?o:GC(e,o)});return{calculatedDuration:t,next:d=>(l.value=f(d),l.done=d>=t,l)}}const qC=t=>t!==null;function Zh(t,{repeat:e,repeatType:i="loop"},r,o=1){const l=t.filter(qC),f=o<0||e&&i!=="loop"&&e%2===1?0:l.length-1;return!f||r===void 0?l[f]:r}const IC={decay:P0,inertia:P0,tween:Zs,keyframes:Zs,spring:Tu};function Wv(t){typeof t.type=="string"&&(t.type=IC[t.type])}class Kh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,i){return this.finished.then(e,i)}}const YC=t=>t/100;class Qh extends Kh{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,o;const{motionValue:i}=this.options;i&&i.updatedAt!==zt.now()&&this.tick(zt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Wv(e);const{type:i=Zs,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:c=0}=e;let{keyframes:f}=e;const d=i||Zs;d!==Zs&&typeof f[0]!="number"&&(this.mixKeyframes=bo(YC,Zv(f[0],f[1])),f=[0,100]);const p=d({...e,keyframes:f});l==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...f].reverse(),velocity:-c})),p.calculatedDuration===null&&(p.calculatedDuration=Fh(p));const{calculatedDuration:m}=p;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=p}updateTime(e){const i=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(e,i=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:c,resolvedDuration:f,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:p=0,keyframes:m,repeat:y,repeatType:v,repeatDelay:w,type:S,onUpdate:E,finalKeyframe:O}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),i?this.currentTime=e:this.updateTime(e);const A=this.currentTime-p*(this.playbackSpeed>=0?1:-1),T=this.playbackSpeed>=0?A<0:A>o;this.currentTime=Math.max(A,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let C=this.currentTime,j=r;if(y){const U=Math.min(this.currentTime,o)/f;let _=Math.floor(U),Y=U%1;!Y&&U>=1&&(Y=1),Y===1&&_--,_=Math.min(_,y+1),!!(_%2)&&(v==="reverse"?(Y=1-Y,w&&(Y-=w/f)):v==="mirror"&&(j=c)),C=oi(0,1,Y)*f}const L=T?{done:!1,value:m[0]}:j.next(C);l&&(L.value=l(L.value));let{done:N}=L;!T&&d!==null&&(N=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return z&&S!==P0&&(L.value=Zh(m,this.options,O,this.speed)),E&&E(L.value),z&&this.finish(),L}then(e,i){return this.finished.then(e,i)}get duration(){return jn(this.calculatedDuration)}get time(){return jn(this.currentTime)}set time(e){var i;e=Rn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(i=this.driver)==null||i.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(zt.now());const i=this.playbackSpeed!==e;this.playbackSpeed=e,i&&(this.time=jn(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:e=OC,startTime:i}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(l=(o=this.options).onPlay)==null||l.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=i??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(zt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(e=this.options).onComplete)==null||i.call(e)}cancel(){var e,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(e=this.options).onCancel)==null||i.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),e.observe(this)}}function XC(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ha=t=>t*180/Math.PI,B0=t=>{const e=ha(Math.atan2(t[1],t[0]));return _0(e)},FC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:B0,rotateZ:B0,skewX:t=>ha(Math.atan(t[1])),skewY:t=>ha(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},_0=t=>(t=t%360,t<0&&(t+=360),t),u3=B0,c3=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),f3=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),ZC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:c3,scaleY:f3,scale:t=>(c3(t)+f3(t))/2,rotateX:t=>_0(ha(Math.atan2(t[6],t[5]))),rotateY:t=>_0(ha(Math.atan2(-t[2],t[0]))),rotateZ:u3,rotate:u3,skewX:t=>ha(Math.atan(t[4])),skewY:t=>ha(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function U0(t){return t.includes("scale")?1:0}function $0(t,e){if(!t||t==="none")return U0(e);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(i)r=ZC,o=i;else{const f=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=FC,o=f}if(!o)return U0(e);const l=r[e],c=o[1].split(",").map(QC);return typeof l=="function"?l(c):c[l]}const KC=(t,e)=>{const{transform:i="none"}=getComputedStyle(t);return $0(i,e)};function QC(t){return parseFloat(t.trim())}const kr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Nr=new Set(kr),d3=t=>t===zr||t===pe,WC=new Set(["x","y","z"]),JC=kr.filter(t=>!WC.has(t));function eT(t){const e=[];return JC.forEach(i=>{const r=t.getValue(i);r!==void 0&&(e.push([i,r.get()]),r.set(i.startsWith("scale")?1:0))}),e}const ga={width:({x:t},{paddingLeft:e="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),height:({y:t},{paddingTop:e="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>$0(e,"x"),y:(t,{transform:e})=>$0(e,"y")};ga.translateX=ga.x;ga.translateY=ga.y;const ya=new Set;let G0=!1,q0=!1,I0=!1;function Jv(){if(q0){const t=Array.from(ya).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),i=new Map;e.forEach(r=>{const o=eT(r);o.length&&(i.set(r,o),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=i.get(r);o&&o.forEach(([l,c])=>{var f;(f=r.getValue(l))==null||f.set(c)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}q0=!1,G0=!1,ya.forEach(t=>t.complete(I0)),ya.clear()}function ex(){ya.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(q0=!0)})}function tT(){I0=!0,ex(),Jv(),I0=!1}class Wh{constructor(e,i,r,o,l,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=i,this.name=r,this.motionValue=o,this.element=l,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(ya.add(this),G0||(G0=!0,$e.read(ex),$e.resolveKeyframes(Jv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:i,element:r,motionValue:o}=this;if(e[0]===null){const l=o==null?void 0:o.get(),c=e[e.length-1];if(l!==void 0)e[0]=l;else if(r&&i){const f=r.readValue(i,c);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=c),o&&l===void 0&&o.set(e[0])}XC(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ya.delete(this)}cancel(){this.state==="scheduled"&&(ya.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const nT=t=>t.startsWith("--");function iT(t,e,i){nT(e)?t.style.setProperty(e,i):t.style[e]=i}const aT=Bh(()=>window.ScrollTimeline!==void 0),rT={};function sT(t,e){const i=Bh(t);return()=>rT[e]??i()}const tx=sT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ys=([t,e,i,r])=>`cubic-bezier(${t}, ${e}, ${i}, ${r})`,h3={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ys([0,.65,.55,1]),circOut:Ys([.55,0,1,.45]),backIn:Ys([.31,.01,.66,-.59]),backOut:Ys([.33,1.53,.69,.99])};function nx(t,e){if(t)return typeof t=="function"?tx()?Kv(t,e):"ease-out":_v(t)?Ys(t):Array.isArray(t)?t.map(i=>nx(i,e)||h3.easeOut):h3[t]}function oT(t,e,i,{delay:r=0,duration:o=300,repeat:l=0,repeatType:c="loop",ease:f="easeOut",times:d}={},p=void 0){const m={[e]:i};d&&(m.offset=d);const y=nx(f,o);Array.isArray(y)&&(m.easing=y);const v={delay:r,duration:o,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:l+1,direction:c==="reverse"?"alternate":"normal"};return p&&(v.pseudoElement=p),t.animate(m,v)}function ix(t){return typeof t=="function"&&"applyToOptions"in t}function lT({type:t,...e}){return ix(t)&&tx()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class uT extends Kh{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:i,name:r,keyframes:o,pseudoElement:l,allowFlatten:c=!1,finalKeyframe:f,onComplete:d}=e;this.isPseudoElement=!!l,this.allowFlatten=c,this.options=e,Ph(typeof e.type!="string");const p=lT(e);this.animation=oT(i,r,o,p,l),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=Zh(o,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(m):iT(i,r,m),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,i;(i=(e=this.animation).finish)==null||i.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,i;this.isPseudoElement||(i=(e=this.animation).commitStyles)==null||i.call(e)}get duration(){var i,r;const e=((r=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:r.call(i).duration)||0;return jn(Number(e))}get time(){return jn(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Rn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&aT()?(this.animation.timeline=e,ln):i(this)}}const ax={anticipate:kv,backInOut:zv,circInOut:Pv};function cT(t){return t in ax}function fT(t){typeof t.ease=="string"&&cT(t.ease)&&(t.ease=ax[t.ease])}const p3=10;class dT extends uT{constructor(e){fT(e),Wv(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:i,onUpdate:r,onComplete:o,element:l,...c}=this.options;if(!i)return;if(e!==void 0){i.set(e);return}const f=new Qh({...c,autoplay:!1}),d=Rn(this.finishedTime??this.time);i.setWithVelocity(f.sample(d-p3).value,f.sample(d).value,p3),f.stop()}}const m3=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(_i.test(t)||t==="0")&&!t.startsWith("url("));function hT(t){const e=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==e)return!0}function pT(t,e,i,r){const o=t[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=t[t.length-1],c=m3(o,e),f=m3(l,e);return!c||!f?!1:hT(t)||(i==="spring"||ix(i))&&r}function Y0(t){t.duration=0,t.type}const mT=new Set(["opacity","clipPath","filter","transform"]),gT=Bh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function yT(t){var m;const{motionValue:e,name:i,repeatDelay:r,repeatType:o,damping:l,type:c}=t;if(!(((m=e==null?void 0:e.owner)==null?void 0:m.current)instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:p}=e.owner.getProps();return gT()&&i&&mT.has(i)&&(i!=="transform"||!p)&&!d&&!r&&o!=="mirror"&&l!==0&&c!=="inertia"}const vT=40;class xT extends Kh{constructor({autoplay:e=!0,delay:i=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:c="loop",keyframes:f,name:d,motionValue:p,element:m,...y}){var S;super(),this.stop=()=>{var E,O;this._animation&&(this._animation.stop(),(E=this.stopTimeline)==null||E.call(this)),(O=this.keyframeResolver)==null||O.cancel()},this.createdAt=zt.now();const v={autoplay:e,delay:i,type:r,repeat:o,repeatDelay:l,repeatType:c,name:d,motionValue:p,element:m,...y},w=(m==null?void 0:m.KeyframeResolver)||Wh;this.keyframeResolver=new w(f,(E,O,A)=>this.onKeyframesResolved(E,O,v,!A),d,p,m),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(e,i,r,o){this.keyframeResolver=void 0;const{name:l,type:c,velocity:f,delay:d,isHandoff:p,onUpdate:m}=r;this.resolvedAt=zt.now(),pT(e,l,c,f)||((li.instantAnimations||!d)&&(m==null||m(Zh(e,r,i))),e[0]=e[e.length-1],Y0(r),r.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>vT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...r,keyframes:e},w=!p&&yT(v)?new dT({...v,element:v.motionValue.owner.current}):new Qh(v);w.finished.then(()=>this.notifyFinished()).catch(ln),this.pendingTimeline&&(this.stopTimeline=w.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=w}get finished(){return this._animation?this.animation.finished:this._finished}then(e,i){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),tT()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const bT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wT(t){const e=bT.exec(t);if(!e)return[,];const[,i,r,o]=e;return[`--${i??r}`,o]}function rx(t,e,i=1){const[r,o]=wT(t);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const c=l.trim();return Av(c)?parseFloat(c):c}return qh(o)?rx(o,e,i+1):o}function Jh(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const sx=new Set(["width","height","top","left","right","bottom",...kr]),ST={test:t=>t==="auto",parse:t=>t},ox=t=>e=>e.test(t),lx=[zr,pe,Dn,Ni,hC,dC,ST],g3=t=>lx.find(ox(t));function CT(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Ov(t):!0}const TT=new Set(["brightness","contrast","saturate","opacity"]);function ET(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=i.match(Ih)||[];if(!r)return t;const o=i.replace(r,"");let l=TT.has(e)?1:0;return r!==i&&(l*=100),e+"("+l+o+")"}const MT=/\b([a-z-]*)\(.*?\)/gu,X0={..._i,getAnimatableNone:t=>{const e=t.match(MT);return e?e.map(ET).join(" "):t}},y3={...zr,transform:Math.round},AT={rotate:Ni,rotateX:Ni,rotateY:Ni,rotateZ:Ni,scale:Il,scaleX:Il,scaleY:Il,scaleZ:Il,skew:Ni,skewX:Ni,skewY:Ni,distance:pe,translateX:pe,translateY:pe,translateZ:pe,x:pe,y:pe,z:pe,perspective:pe,transformPerspective:pe,opacity:lo,originX:a3,originY:a3,originZ:pe},ep={borderWidth:pe,borderTopWidth:pe,borderRightWidth:pe,borderBottomWidth:pe,borderLeftWidth:pe,borderRadius:pe,radius:pe,borderTopLeftRadius:pe,borderTopRightRadius:pe,borderBottomRightRadius:pe,borderBottomLeftRadius:pe,width:pe,maxWidth:pe,height:pe,maxHeight:pe,top:pe,right:pe,bottom:pe,left:pe,padding:pe,paddingTop:pe,paddingRight:pe,paddingBottom:pe,paddingLeft:pe,margin:pe,marginTop:pe,marginRight:pe,marginBottom:pe,marginLeft:pe,backgroundPositionX:pe,backgroundPositionY:pe,...AT,zIndex:y3,fillOpacity:lo,strokeOpacity:lo,numOctaves:y3},LT={...ep,color:et,backgroundColor:et,outlineColor:et,fill:et,stroke:et,borderColor:et,borderTopColor:et,borderRightColor:et,borderBottomColor:et,borderLeftColor:et,filter:X0,WebkitFilter:X0},ux=t=>LT[t];function cx(t,e){let i=ux(t);return i!==X0&&(i=_i),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const OT=new Set(["auto","none","0"]);function RT(t,e,i){let r=0,o;for(;r<t.length&&!o;){const l=t[r];typeof l=="string"&&!OT.has(l)&&uo(l).values.length&&(o=t[r]),r++}if(o&&i)for(const l of e)t[l]=cx(i,o)}class jT extends Wh{constructor(e,i,r,o,l){super(e,i,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:i,name:r}=this;if(!i||!i.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let p=e[d];if(typeof p=="string"&&(p=p.trim(),qh(p))){const m=rx(p,i.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!sx.has(r)||e.length!==2)return;const[o,l]=e,c=g3(o),f=g3(l);if(c!==f)if(d3(c)&&d3(f))for(let d=0;d<e.length;d++){const p=e[d];typeof p=="string"&&(e[d]=parseFloat(p))}else ga[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:i}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||CT(e[o]))&&r.push(o);r.length&&RT(e,r,i)}measureInitialState(){const{element:e,unresolvedKeyframes:i,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ga[r](e.measureViewportBox(),window.getComputedStyle(e.current)),i[0]=this.measuredOrigin;const o=i[i.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var f;const{element:e,name:i,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(i);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,c=r[l];r[l]=ga[i](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([d,p])=>{e.getValue(d).set(p)}),this.resolveNoneKeyframes()}}function DT(t,e,i){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const o=(i==null?void 0:i[t])??r.querySelectorAll(t);return o?Array.from(o):[]}return Array.from(t)}const fx=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function dx(t){return Lv(t)&&"offsetHeight"in t}const v3=30,HT=t=>!isNaN(parseFloat(t));class VT{constructor(e,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var l;const o=zt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=i.owner}setCurrent(e){this.current=e,this.updatedAt=zt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=HT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new _h);const r=this.events[e].add(i);return e==="change"?()=>{r(),$e.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,i,r){this.set(i),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,i=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=zt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>v3)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,v3);return Rv(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,i;(e=this.dependents)==null||e.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ar(t,e){return new VT(t,e)}const{schedule:tp}=Uv(queueMicrotask,!1),hn={x:!1,y:!1};function hx(){return hn.x||hn.y}function zT(t){return t==="x"||t==="y"?hn[t]?null:(hn[t]=!0,()=>{hn[t]=!1}):hn.x||hn.y?null:(hn.x=hn.y=!0,()=>{hn.x=hn.y=!1})}function px(t,e){const i=DT(t),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[i,o,()=>r.abort()]}function x3(t){return!(t.pointerType==="touch"||hx())}function kT(t,e,i={}){const[r,o,l]=px(t,i),c=f=>{if(!x3(f))return;const{target:d}=f,p=e(d,f);if(typeof p!="function"||!d)return;const m=y=>{x3(y)&&(p(y),d.removeEventListener("pointerleave",m))};d.addEventListener("pointerleave",m,o)};return r.forEach(f=>{f.addEventListener("pointerenter",c,o)}),l}const mx=(t,e)=>e?t===e?!0:mx(t,e.parentElement):!1,np=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,NT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function PT(t){return NT.has(t.tagName)||t.tabIndex!==-1}const hu=new WeakSet;function b3(t){return e=>{e.key==="Enter"&&t(e)}}function _d(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const BT=(t,e)=>{const i=t.currentTarget;if(!i)return;const r=b3(()=>{if(hu.has(i))return;_d(i,"down");const o=b3(()=>{_d(i,"up")}),l=()=>_d(i,"cancel");i.addEventListener("keyup",o,e),i.addEventListener("blur",l,e)});i.addEventListener("keydown",r,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",r),e)};function w3(t){return np(t)&&!hx()}function _T(t,e,i={}){const[r,o,l]=px(t,i),c=f=>{const d=f.currentTarget;if(!w3(f))return;hu.add(d);const p=e(d,f),m=(w,S)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",v),hu.has(d)&&hu.delete(d),w3(w)&&typeof p=="function"&&p(w,{success:S})},y=w=>{m(w,d===window||d===document||i.useGlobalTarget||mx(d,w.target))},v=w=>{m(w,!1)};window.addEventListener("pointerup",y,o),window.addEventListener("pointercancel",v,o)};return r.forEach(f=>{(i.useGlobalTarget?window:f).addEventListener("pointerdown",c,o),dx(f)&&(f.addEventListener("focus",p=>BT(p,o)),!PT(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),l}function gx(t){return Lv(t)&&"ownerSVGElement"in t}function UT(t){return gx(t)&&t.tagName==="svg"}const Ct=t=>!!(t&&t.getVelocity),$T=[...lx,et,_i],GT=t=>$T.find(ox(t)),ip=R.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class qT extends R.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(i&&e.isPresent&&!this.props.isPresent){const r=i.offsetParent,o=dx(r)&&r.offsetWidth||0,l=this.props.sizeRef.current;l.height=i.offsetHeight||0,l.width=i.offsetWidth||0,l.top=i.offsetTop,l.left=i.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function IT({children:t,isPresent:e,anchorX:i,root:r}){const o=R.useId(),l=R.useRef(null),c=R.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=R.useContext(ip);return R.useInsertionEffect(()=>{const{width:d,height:p,top:m,left:y,right:v}=c.current;if(e||!l.current||!d||!p)return;const w=i==="left"?`left: ${y}`:`right: ${v}`;l.current.dataset.motionPopId=o;const S=document.createElement("style");f&&(S.nonce=f);const E=r??document.head;return E.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${p}px !important;
            ${w}px !important;
            top: ${m}px !important;
          }
        `),()=>{E.contains(S)&&E.removeChild(S)}},[e]),x.jsx(qT,{isPresent:e,childRef:l,sizeRef:c,children:R.cloneElement(t,{ref:l})})}const YT=({children:t,initial:e,isPresent:i,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:c,anchorX:f,root:d})=>{const p=Vh(XT),m=R.useId();let y=!0,v=R.useMemo(()=>(y=!1,{id:m,initial:e,isPresent:i,custom:o,onExitComplete:w=>{p.set(w,!0);for(const S of p.values())if(!S)return;r&&r()},register:w=>(p.set(w,!1),()=>p.delete(w))}),[i,p,r]);return l&&y&&(v={...v}),R.useMemo(()=>{p.forEach((w,S)=>p.set(S,!1))},[i]),R.useEffect(()=>{!i&&!p.size&&r&&r()},[i]),c==="popLayout"&&(t=x.jsx(IT,{isPresent:i,anchorX:f,root:d,children:t})),x.jsx(Ku.Provider,{value:v,children:t})};function XT(){return new Map}function yx(t=!0){const e=R.useContext(Ku);if(e===null)return[!0,null];const{isPresent:i,onExitComplete:r,register:o}=e,l=R.useId();R.useEffect(()=>{if(t)return o(l)},[t]);const c=R.useCallback(()=>t&&r&&r(l),[l,r,t]);return!i&&r?[!1,c]:[!0]}const Yl=t=>t.key||"";function S3(t){const e=[];return R.Children.forEach(t,i=>{R.isValidElement(i)&&e.push(i)}),e}const vx=({children:t,custom:e,initial:i=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:c=!1,anchorX:f="left",root:d})=>{const[p,m]=yx(c),y=R.useMemo(()=>S3(t),[t]),v=c&&!p?[]:y.map(Yl),w=R.useRef(!0),S=R.useRef(y),E=Vh(()=>new Map),[O,A]=R.useState(y),[T,C]=R.useState(y);Mv(()=>{w.current=!1,S.current=y;for(let N=0;N<T.length;N++){const z=Yl(T[N]);v.includes(z)?E.delete(z):E.get(z)!==!0&&E.set(z,!1)}},[T,v.length,v.join("-")]);const j=[];if(y!==O){let N=[...y];for(let z=0;z<T.length;z++){const U=T[z],_=Yl(U);v.includes(_)||(N.splice(z,0,U),j.push(U))}return l==="wait"&&j.length&&(N=j),C(S3(N)),A(y),null}const{forceRender:L}=R.useContext(Hh);return x.jsx(x.Fragment,{children:T.map(N=>{const z=Yl(N),U=c&&!p?!1:y===T||v.includes(z),_=()=>{if(E.has(z))E.set(z,!0);else return;let Y=!0;E.forEach(X=>{X||(Y=!1)}),Y&&(L==null||L(),C(S.current),c&&(m==null||m()),r&&r())};return x.jsx(YT,{isPresent:U,initial:!w.current||i?void 0:!1,custom:e,presenceAffectsLayout:o,mode:l,root:d,onExitComplete:U?void 0:_,anchorX:f,children:N},z)})})},xx=R.createContext({strict:!1}),C3={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Lr={};for(const t in C3)Lr[t]={isEnabled:e=>C3[t].some(i=>!!e[i])};function FT(t){for(const e in t)Lr[e]={...Lr[e],...t[e]}}const ZT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Eu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||ZT.has(t)}let bx=t=>!Eu(t);function KT(t){typeof t=="function"&&(bx=e=>e.startsWith("on")?!Eu(e):t(e))}try{KT(require("@emotion/is-prop-valid").default)}catch{}function QT(t,e,i){const r={};for(const o in t)o==="values"&&typeof t.values=="object"||(bx(o)||i===!0&&Eu(o)||!e&&!Eu(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}const Qu=R.createContext({});function Wu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function co(t){return typeof t=="string"||Array.isArray(t)}const ap=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],rp=["initial",...ap];function Ju(t){return Wu(t.animate)||rp.some(e=>co(t[e]))}function wx(t){return!!(Ju(t)||t.variants)}function WT(t,e){if(Ju(t)){const{initial:i,animate:r}=t;return{initial:i===!1||co(i)?i:void 0,animate:co(r)?r:void 0}}return t.inherit!==!1?e:{}}function JT(t){const{initial:e,animate:i}=WT(t,R.useContext(Qu));return R.useMemo(()=>({initial:e,animate:i}),[T3(e),T3(i)])}function T3(t){return Array.isArray(t)?t.join(" "):t}const fo={};function eE(t){for(const e in t)fo[e]=t[e],Gh(e)&&(fo[e].isCSSVariable=!0)}function Sx(t,{layout:e,layoutId:i}){return Nr.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!fo[t]||t==="opacity")}const tE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},nE=kr.length;function iE(t,e,i){let r="",o=!0;for(let l=0;l<nE;l++){const c=kr[l],f=t[c];if(f===void 0)continue;let d=!0;if(typeof f=="number"?d=f===(c.startsWith("scale")?1:0):d=parseFloat(f)===0,!d||i){const p=fx(f,ep[c]);if(!d){o=!1;const m=tE[c]||c;r+=`${m}(${p}) `}i&&(e[c]=p)}}return r=r.trim(),i?r=i(e,o?"":r):o&&(r="none"),r}function sp(t,e,i){const{style:r,vars:o,transformOrigin:l}=t;let c=!1,f=!1;for(const d in e){const p=e[d];if(Nr.has(d)){c=!0;continue}else if(Gh(d)){o[d]=p;continue}else{const m=fx(p,ep[d]);d.startsWith("origin")?(f=!0,l[d]=m):r[d]=m}}if(e.transform||(c||i?r.transform=iE(e,t.transform,i):r.transform&&(r.transform="none")),f){const{originX:d="50%",originY:p="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${p} ${m}`}}const op=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Cx(t,e,i){for(const r in e)!Ct(e[r])&&!Sx(r,i)&&(t[r]=e[r])}function aE({transformTemplate:t},e){return R.useMemo(()=>{const i=op();return sp(i,e,t),Object.assign({},i.vars,i.style)},[e])}function rE(t,e){const i=t.style||{},r={};return Cx(r,i,t),Object.assign(r,aE(t,e)),r}function sE(t,e){const i={},r=rE(t,e);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const oE={offset:"stroke-dashoffset",array:"stroke-dasharray"},lE={offset:"strokeDashoffset",array:"strokeDasharray"};function uE(t,e,i=1,r=0,o=!0){t.pathLength=1;const l=o?oE:lE;t[l.offset]=pe.transform(-r);const c=pe.transform(e),f=pe.transform(i);t[l.array]=`${c} ${f}`}function Tx(t,{attrX:e,attrY:i,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:c=0,...f},d,p,m){if(sp(t,f,p),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:y,style:v}=t;y.transform&&(v.transform=y.transform,delete y.transform),(v.transform||y.transformOrigin)&&(v.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),v.transform&&(v.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete y.transformBox),e!==void 0&&(y.x=e),i!==void 0&&(y.y=i),r!==void 0&&(y.scale=r),o!==void 0&&uE(y,o,l,c,!1)}const Ex=()=>({...op(),attrs:{}}),Mx=t=>typeof t=="string"&&t.toLowerCase()==="svg";function cE(t,e,i,r){const o=R.useMemo(()=>{const l=Ex();return Tx(l,e,Mx(r),t.transformTemplate,t.style),{...l.attrs,style:{...l.style}}},[e]);if(t.style){const l={};Cx(l,t.style,t),o.style={...l,...o.style}}return o}const fE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lp(t){return typeof t!="string"||t.includes("-")?!1:!!(fE.indexOf(t)>-1||/[A-Z]/u.test(t))}function dE(t,e,i,{latestValues:r},o,l=!1){const f=(lp(t)?cE:sE)(e,r,o,t),d=QT(e,typeof t=="string",l),p=t!==R.Fragment?{...d,...f,ref:i}:{},{children:m}=e,y=R.useMemo(()=>Ct(m)?m.get():m,[m]);return R.createElement(t,{...p,children:y})}function E3(t){const e=[{},{}];return t==null||t.values.forEach((i,r)=>{e[0][r]=i.get(),e[1][r]=i.getVelocity()}),e}function up(t,e,i,r){if(typeof e=="function"){const[o,l]=E3(r);e=e(i!==void 0?i:t.custom,o,l)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[o,l]=E3(r);e=e(i!==void 0?i:t.custom,o,l)}return e}function pu(t){return Ct(t)?t.get():t}function hE({scrapeMotionValuesFromProps:t,createRenderState:e},i,r,o){return{latestValues:pE(i,r,o,t),renderState:e()}}function pE(t,e,i,r){const o={},l=r(t,{});for(const v in l)o[v]=pu(l[v]);let{initial:c,animate:f}=t;const d=Ju(t),p=wx(t);e&&p&&!d&&t.inherit!==!1&&(c===void 0&&(c=e.initial),f===void 0&&(f=e.animate));let m=i?i.initial===!1:!1;m=m||c===!1;const y=m?f:c;if(y&&typeof y!="boolean"&&!Wu(y)){const v=Array.isArray(y)?y:[y];for(let w=0;w<v.length;w++){const S=up(t,v[w]);if(S){const{transitionEnd:E,transition:O,...A}=S;for(const T in A){let C=A[T];if(Array.isArray(C)){const j=m?C.length-1:0;C=C[j]}C!==null&&(o[T]=C)}for(const T in E)o[T]=E[T]}}}return o}const Ax=t=>(e,i)=>{const r=R.useContext(Qu),o=R.useContext(Ku),l=()=>hE(t,e,r,o);return i?l():Vh(l)};function cp(t,e,i){var l;const{style:r}=t,o={};for(const c in r)(Ct(r[c])||e.style&&Ct(e.style[c])||Sx(c,t)||((l=i==null?void 0:i.getValue(c))==null?void 0:l.liveStyle)!==void 0)&&(o[c]=r[c]);return o}const mE=Ax({scrapeMotionValuesFromProps:cp,createRenderState:op});function Lx(t,e,i){const r=cp(t,e,i);for(const o in t)if(Ct(t[o])||Ct(e[o])){const l=kr.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=t[o]}return r}const gE=Ax({scrapeMotionValuesFromProps:Lx,createRenderState:Ex}),yE=Symbol.for("motionComponentSymbol");function pr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function vE(t,e,i){return R.useCallback(r=>{r&&t.onMount&&t.onMount(r),e&&(r?e.mount(r):e.unmount()),i&&(typeof i=="function"?i(r):pr(i)&&(i.current=r))},[e])}const fp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),xE="framerAppearId",Ox="data-"+fp(xE),Rx=R.createContext({});function bE(t,e,i,r,o){var E,O;const{visualElement:l}=R.useContext(Qu),c=R.useContext(xx),f=R.useContext(Ku),d=R.useContext(ip).reducedMotion,p=R.useRef(null);r=r||c.renderer,!p.current&&r&&(p.current=r(t,{visualState:e,parent:l,props:i,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:d}));const m=p.current,y=R.useContext(Rx);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&wE(p.current,i,o,y);const v=R.useRef(!1);R.useInsertionEffect(()=>{m&&v.current&&m.update(i,f)});const w=i[Ox],S=R.useRef(!!w&&!((E=window.MotionHandoffIsComplete)!=null&&E.call(window,w))&&((O=window.MotionHasOptimisedAnimation)==null?void 0:O.call(window,w)));return Mv(()=>{m&&(v.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),S.current&&m.animationState&&m.animationState.animateChanges())}),R.useEffect(()=>{m&&(!S.current&&m.animationState&&m.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)==null||A.call(window,w)}),S.current=!1),m.enteringChildren=void 0)}),m}function wE(t,e,i,r){const{layoutId:o,layout:l,drag:c,dragConstraints:f,layoutScroll:d,layoutRoot:p,layoutCrossfade:m}=e;t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:jx(t.parent)),t.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!c||f&&pr(f),visualElement:t,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:m,layoutScroll:d,layoutRoot:p})}function jx(t){if(t)return t.options.allowProjection!==!1?t.projection:jx(t.parent)}function Ud(t,{forwardMotionProps:e=!1}={},i,r){i&&FT(i);const o=lp(t)?gE:mE;function l(f,d){let p;const m={...R.useContext(ip),...f,layoutId:SE(f)},{isStatic:y}=m,v=JT(f),w=o(f,y);if(!y&&zh){CE();const S=TE(m);p=S.MeasureLayout,v.visualElement=bE(t,w,m,r,S.ProjectionNode)}return x.jsxs(Qu.Provider,{value:v,children:[p&&v.visualElement?x.jsx(p,{visualElement:v.visualElement,...m}):null,dE(t,f,vE(w,v.visualElement,d),w,y,e)]})}l.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const c=R.forwardRef(l);return c[yE]=t,c}function SE({layoutId:t}){const e=R.useContext(Hh).id;return e&&t!==void 0?e+"-"+t:t}function CE(t,e){R.useContext(xx).strict}function TE(t){const{drag:e,layout:i}=Lr;if(!e&&!i)return{};const r={...e,...i};return{MeasureLayout:e!=null&&e.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function EE(t,e){if(typeof Proxy>"u")return Ud;const i=new Map,r=(l,c)=>Ud(l,c,t,e),o=(l,c)=>r(l,c);return new Proxy(o,{get:(l,c)=>c==="create"?r:(i.has(c)||i.set(c,Ud(c,void 0,t,e)),i.get(c))})}function Dx({top:t,left:e,right:i,bottom:r}){return{x:{min:e,max:i},y:{min:t,max:r}}}function ME({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function AE(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:r.y,right:r.x}}function $d(t){return t===void 0||t===1}function F0({scale:t,scaleX:e,scaleY:i}){return!$d(t)||!$d(e)||!$d(i)}function ca(t){return F0(t)||Hx(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Hx(t){return M3(t.x)||M3(t.y)}function M3(t){return t&&t!=="0%"}function Mu(t,e,i){const r=t-i,o=e*r;return i+o}function A3(t,e,i,r,o){return o!==void 0&&(t=Mu(t,o,r)),Mu(t,i,r)+e}function Z0(t,e=0,i=1,r,o){t.min=A3(t.min,e,i,r,o),t.max=A3(t.max,e,i,r,o)}function Vx(t,{x:e,y:i}){Z0(t.x,e.translate,e.scale,e.originPoint),Z0(t.y,i.translate,i.scale,i.originPoint)}const L3=.999999999999,O3=1.0000000000001;function LE(t,e,i,r=!1){const o=i.length;if(!o)return;e.x=e.y=1;let l,c;for(let f=0;f<o;f++){l=i[f],c=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&gr(t,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,Vx(t,c)),r&&ca(l.latestValues)&&gr(t,l.latestValues))}e.x<O3&&e.x>L3&&(e.x=1),e.y<O3&&e.y>L3&&(e.y=1)}function mr(t,e){t.min=t.min+e,t.max=t.max+e}function R3(t,e,i,r,o=.5){const l=Ie(t.min,t.max,o);Z0(t,e,i,l,r)}function gr(t,e){R3(t.x,e.x,e.scaleX,e.scale,e.originX),R3(t.y,e.y,e.scaleY,e.scale,e.originY)}function zx(t,e){return Dx(AE(t.getBoundingClientRect(),e))}function OE(t,e,i){const r=zx(t,i),{scroll:o}=e;return o&&(mr(r.x,o.offset.x),mr(r.y,o.offset.y)),r}const j3=()=>({translate:0,scale:1,origin:0,originPoint:0}),yr=()=>({x:j3(),y:j3()}),D3=()=>({min:0,max:0}),Qe=()=>({x:D3(),y:D3()}),K0={current:null},kx={current:!1};function RE(){if(kx.current=!0,!!zh)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>K0.current=t.matches;t.addEventListener("change",e),e()}else K0.current=!1}const jE=new WeakMap;function DE(t,e,i){for(const r in e){const o=e[r],l=i[r];if(Ct(o))t.addValue(r,o);else if(Ct(l))t.addValue(r,Ar(o,{owner:t}));else if(l!==o)if(t.hasValue(r)){const c=t.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=t.getStaticValue(r);t.addValue(r,Ar(c!==void 0?c:o,{owner:t}))}}for(const r in i)e[r]===void 0&&t.removeValue(r);return e}const H3=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class HE{scrapeMotionValuesFromProps(e,i,r){return{}}constructor({parent:e,props:i,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:c},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Wh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=zt.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,$e.render(this.render,!1,!0))};const{latestValues:d,renderState:p}=c;this.latestValues=d,this.baseTarget={...d},this.initialValues=i.initial?{...d}:{},this.renderState=p,this.parent=e,this.props=i,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!l,this.isControllingVariants=Ju(i),this.isVariantNode=wx(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:m,...y}=this.scrapeMotionValuesFromProps(i,{},this);for(const v in y){const w=y[v];d[v]!==void 0&&Ct(w)&&w.set(d[v])}}mount(e){var i;this.current=e,jE.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),kx.current||RE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:K0.current,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),Bi(this.notifyUpdate),Bi(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,i){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Nr.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=i.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&$e.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,i)),this.valueSubscriptions.set(e,()=>{o(),l&&l(),i.owner&&i.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Lr){const i=Lr[e];if(!i)continue;const{isEnabled:r,Feature:o}=i;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let r=0;r<H3.length;r++){const o=H3[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,c=e[l];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=DE(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){const r=this.values.get(e);i!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,i),this.values.set(e,i),this.latestValues[e]=i.get())}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&i!==void 0&&(r=Ar(i===null?void 0:i,{owner:this}),this.addValue(e,r)),r}readValue(e,i){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(Av(r)||Ov(r))?r=parseFloat(r):!GT(r)&&_i.test(i)&&(r=cx(e,i)),this.setBaseTarget(e,Ct(r)?r.get():r)),Ct(r)?r.get():r}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){var l;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const c=up(this.props,i,(l=this.presenceContext)==null?void 0:l.custom);c&&(r=c[e])}if(i&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Ct(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new _h),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}scheduleRenderMicrotask(){tp.render(this.render)}}class Nx extends HE{constructor(){super(...arguments),this.KeyframeResolver=jT}sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){return e.style?e.style[i]:void 0}removeValueFromRenderState(e,{vars:i,style:r}){delete i[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ct(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function Px(t,{style:e,vars:i},r,o){const l=t.style;let c;for(c in e)l[c]=e[c];o==null||o.applyProjectionStyles(l,r);for(c in i)l.setProperty(c,i[c])}function VE(t){return window.getComputedStyle(t)}class zE extends Nx{constructor(){super(...arguments),this.type="html",this.renderInstance=Px}readValueFromInstance(e,i){var r;if(Nr.has(i))return(r=this.projection)!=null&&r.isProjecting?U0(i):KC(e,i);{const o=VE(e),l=(Gh(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(e,{transformPagePoint:i}){return zx(e,i)}build(e,i,r){sp(e,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,i,r){return cp(e,i,r)}}const Bx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function kE(t,e,i,r){Px(t,e,void 0,r);for(const o in e.attrs)t.setAttribute(Bx.has(o)?o:fp(o),e.attrs[o])}class NE extends Nx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qe}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if(Nr.has(i)){const r=ux(i);return r&&r.default||0}return i=Bx.has(i)?i:fp(i),e.getAttribute(i)}scrapeMotionValuesFromProps(e,i,r){return Lx(e,i,r)}build(e,i,r){Tx(e,i,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,i,r,o){kE(e,i,r,o)}mount(e){this.isSVGTag=Mx(e.tagName),super.mount(e)}}const PE=(t,e)=>lp(t)?new NE(e):new zE(e,{allowProjection:t!==R.Fragment});function xr(t,e,i){const r=t.getProps();return up(r,e,i!==void 0?i:r.custom,t)}const Q0=t=>Array.isArray(t);function BE(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,Ar(i))}function _E(t){return Q0(t)?t[t.length-1]||0:t}function UE(t,e){const i=xr(t,e);let{transitionEnd:r={},transition:o={},...l}=i||{};l={...l,...r};for(const c in l){const f=_E(l[c]);BE(t,c,f)}}function $E(t){return!!(Ct(t)&&t.add)}function W0(t,e){const i=t.getValue("willChange");if($E(i))return i.add(e);if(!i&&li.WillChange){const r=new li.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function _x(t){return t.props[Ox]}const GE=t=>t!==null;function qE(t,{repeat:e,repeatType:i="loop"},r){const o=t.filter(GE),l=e&&i!=="loop"&&e%2===1?0:o.length-1;return o[l]}const IE={type:"spring",stiffness:500,damping:25,restSpeed:10},YE=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),XE={type:"keyframes",duration:.8},FE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ZE=(t,{keyframes:e})=>e.length>2?XE:Nr.has(t)?t.startsWith("scale")?YE(e[1]):IE:FE;function KE({when:t,delay:e,delayChildren:i,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:c,repeatDelay:f,from:d,elapsed:p,...m}){return!!Object.keys(m).length}const dp=(t,e,i,r={},o,l)=>c=>{const f=Jh(r,t)||{},d=f.delay||r.delay||0;let{elapsed:p=0}=r;p=p-Rn(d);const m={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-p,onUpdate:v=>{e.set(v),f.onUpdate&&f.onUpdate(v)},onComplete:()=>{c(),f.onComplete&&f.onComplete()},name:t,motionValue:e,element:l?void 0:o};KE(f)||Object.assign(m,ZE(t,m)),m.duration&&(m.duration=Rn(m.duration)),m.repeatDelay&&(m.repeatDelay=Rn(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let y=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(Y0(m),m.delay===0&&(y=!0)),(li.instantAnimations||li.skipAnimations)&&(y=!0,Y0(m),m.delay=0),m.allowFlatten=!f.type&&!f.ease,y&&!l&&e.get()!==void 0){const v=qE(m.keyframes,f);if(v!==void 0){$e.update(()=>{m.onUpdate(v),m.onComplete()});return}}return f.isSync?new Qh(m):new xT(m)};function QE({protectedKeys:t,needsAnimating:e},i){const r=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,r}function Ux(t,e,{delay:i=0,transitionOverride:r,type:o}={}){let{transition:l=t.getDefaultTransition(),transitionEnd:c,...f}=e;r&&(l=r);const d=[],p=o&&t.animationState&&t.animationState.getState()[o];for(const m in f){const y=t.getValue(m,t.latestValues[m]??null),v=f[m];if(v===void 0||p&&QE(p,m))continue;const w={delay:i,...Jh(l||{},m)},S=y.get();if(S!==void 0&&!y.isAnimating&&!Array.isArray(v)&&v===S&&!w.velocity)continue;let E=!1;if(window.MotionHandoffAnimation){const A=_x(t);if(A){const T=window.MotionHandoffAnimation(A,m,$e);T!==null&&(w.startTime=T,E=!0)}}W0(t,m),y.start(dp(m,y,v,t.shouldReduceMotion&&sx.has(m)?{type:!1}:w,t,E));const O=y.animation;O&&d.push(O)}return c&&Promise.all(d).then(()=>{$e.update(()=>{c&&UE(t,c)})}),d}function $x(t,e,i,r=0,o=1){const l=Array.from(t).sort((p,m)=>p.sortNodePosition(m)).indexOf(e),c=t.size,f=(c-1)*r;return typeof i=="function"?i(l,c):o===1?l*r:f-l*r}function J0(t,e,i={}){var d;const r=xr(t,e,i.type==="exit"?(d=t.presenceContext)==null?void 0:d.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=r||{};i.transitionOverride&&(o=i.transitionOverride);const l=r?()=>Promise.all(Ux(t,r,i)):()=>Promise.resolve(),c=t.variantChildren&&t.variantChildren.size?(p=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:v}=o;return WE(t,e,p,m,y,v,i)}:()=>Promise.resolve(),{when:f}=o;if(f){const[p,m]=f==="beforeChildren"?[l,c]:[c,l];return p().then(()=>m())}else return Promise.all([l(),c(i.delay)])}function WE(t,e,i=0,r=0,o=0,l=1,c){const f=[];for(const d of t.variantChildren)d.notify("AnimationStart",e),f.push(J0(d,e,{...c,delay:i+(typeof r=="function"?0:r)+$x(t.variantChildren,d,r,o,l)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(f)}function JE(t,e,i={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>J0(t,l,i));r=Promise.all(o)}else if(typeof e=="string")r=J0(t,e,i);else{const o=typeof e=="function"?xr(t,e,i.custom):e;r=Promise.all(Ux(t,o,i))}return r.then(()=>{t.notify("AnimationComplete",e)})}function Gx(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let r=0;r<i;r++)if(e[r]!==t[r])return!1;return!0}const eM=rp.length;function qx(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?qx(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const e={};for(let i=0;i<eM;i++){const r=rp[i],o=t.props[r];(co(o)||o===!1)&&(e[r]=o)}return e}const tM=[...ap].reverse(),nM=ap.length;function iM(t){return e=>Promise.all(e.map(({animation:i,options:r})=>JE(t,i,r)))}function aM(t){let e=iM(t),i=V3(),r=!0;const o=d=>(p,m)=>{var v;const y=xr(t,m,d==="exit"?(v=t.presenceContext)==null?void 0:v.custom:void 0);if(y){const{transition:w,transitionEnd:S,...E}=y;p={...p,...E,...S}}return p};function l(d){e=d(t)}function c(d){const{props:p}=t,m=qx(t.parent)||{},y=[],v=new Set;let w={},S=1/0;for(let O=0;O<nM;O++){const A=tM[O],T=i[A],C=p[A]!==void 0?p[A]:m[A],j=co(C),L=A===d?T.isActive:null;L===!1&&(S=O);let N=C===m[A]&&C!==p[A]&&j;if(N&&r&&t.manuallyAnimateOnMount&&(N=!1),T.protectedKeys={...w},!T.isActive&&L===null||!C&&!T.prevProp||Wu(C)||typeof C=="boolean")continue;const z=rM(T.prevProp,C);let U=z||A===d&&T.isActive&&!N&&j||O>S&&j,_=!1;const Y=Array.isArray(C)?C:[C];let X=Y.reduce(o(A),{});L===!1&&(X={});const{prevResolvedValues:te={}}=T,ie={...te,...X},oe=K=>{U=!0,v.has(K)&&(_=!0,v.delete(K)),T.needsAnimating[K]=!0;const Q=t.getValue(K);Q&&(Q.liveStyle=!1)};for(const K in ie){const Q=X[K],ee=te[K];if(w.hasOwnProperty(K))continue;let H=!1;Q0(Q)&&Q0(ee)?H=!Gx(Q,ee):H=Q!==ee,H?Q!=null?oe(K):v.add(K):Q!==void 0&&v.has(K)?oe(K):T.protectedKeys[K]=!0}T.prevProp=C,T.prevResolvedValues=X,T.isActive&&(w={...w,...X}),r&&t.blockInitialAnimation&&(U=!1);const re=N&&z;U&&(!re||_)&&y.push(...Y.map(K=>{const Q={type:A};if(typeof K=="string"&&r&&!re&&t.manuallyAnimateOnMount&&t.parent){const{parent:ee}=t,H=xr(ee,K);if(ee.enteringChildren&&H){const{delayChildren:F}=H.transition||{};Q.delay=$x(ee.enteringChildren,t,F)}}return{animation:K,options:Q}}))}if(v.size){const O={};if(typeof p.initial!="boolean"){const A=xr(t,Array.isArray(p.initial)?p.initial[0]:p.initial);A&&A.transition&&(O.transition=A.transition)}v.forEach(A=>{const T=t.getBaseTarget(A),C=t.getValue(A);C&&(C.liveStyle=!0),O[A]=T??null}),y.push({animation:O})}let E=!!y.length;return r&&(p.initial===!1||p.initial===p.animate)&&!t.manuallyAnimateOnMount&&(E=!1),r=!1,E?e(y):Promise.resolve()}function f(d,p){var y;if(i[d].isActive===p)return Promise.resolve();(y=t.variantChildren)==null||y.forEach(v=>{var w;return(w=v.animationState)==null?void 0:w.setActive(d,p)}),i[d].isActive=p;const m=c(d);for(const v in i)i[v].protectedKeys={};return m}return{animateChanges:c,setActive:f,setAnimateFunction:l,getState:()=>i,reset:()=>{i=V3(),r=!0}}}function rM(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Gx(e,t):!1}function ua(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function V3(){return{animate:ua(!0),whileInView:ua(),whileHover:ua(),whileTap:ua(),whileDrag:ua(),whileFocus:ua(),exit:ua()}}class Gi{constructor(e){this.isMounted=!1,this.node=e}update(){}}class sM extends Gi{constructor(e){super(e),e.animationState||(e.animationState=aM(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Wu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let oM=0;class lM extends Gi{constructor(){super(...arguments),this.id=oM++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);i&&!e&&o.then(()=>{i(this.id)})}mount(){const{register:e,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const uM={animation:{Feature:sM},exit:{Feature:lM}};function ho(t,e,i,r={passive:!0}){return t.addEventListener(e,i,r),()=>t.removeEventListener(e,i)}function Co(t){return{point:{x:t.pageX,y:t.pageY}}}const cM=t=>e=>np(e)&&t(e,Co(e));function Ks(t,e,i,r){return ho(t,e,cM(i),r)}const Ix=1e-4,fM=1-Ix,dM=1+Ix,Yx=.01,hM=0-Yx,pM=0+Yx;function Lt(t){return t.max-t.min}function mM(t,e,i){return Math.abs(t-e)<=i}function z3(t,e,i,r=.5){t.origin=r,t.originPoint=Ie(e.min,e.max,t.origin),t.scale=Lt(i)/Lt(e),t.translate=Ie(i.min,i.max,t.origin)-t.originPoint,(t.scale>=fM&&t.scale<=dM||isNaN(t.scale))&&(t.scale=1),(t.translate>=hM&&t.translate<=pM||isNaN(t.translate))&&(t.translate=0)}function Qs(t,e,i,r){z3(t.x,e.x,i.x,r?r.originX:void 0),z3(t.y,e.y,i.y,r?r.originY:void 0)}function k3(t,e,i){t.min=i.min+e.min,t.max=t.min+Lt(e)}function gM(t,e,i){k3(t.x,e.x,i.x),k3(t.y,e.y,i.y)}function N3(t,e,i){t.min=e.min-i.min,t.max=t.min+Lt(e)}function Ws(t,e,i){N3(t.x,e.x,i.x),N3(t.y,e.y,i.y)}function on(t){return[t("x"),t("y")]}const Xx=({current:t})=>t?t.ownerDocument.defaultView:null,P3=(t,e)=>Math.abs(t-e);function yM(t,e){const i=P3(t.x,e.x),r=P3(t.y,e.y);return Math.sqrt(i**2+r**2)}class Fx{constructor(e,i,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:c=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=qd(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,S=yM(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!S)return;const{point:E}=v,{timestamp:O}=mt;this.history.push({...E,timestamp:O});const{onStart:A,onMove:T}=this.handlers;w||(A&&A(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),T&&T(this.lastMoveEvent,v)},this.handlePointerMove=(v,w)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Gd(w,this.transformPagePoint),$e.update(this.updatePoint,!0)},this.handlePointerUp=(v,w)=>{this.end();const{onEnd:S,onSessionEnd:E,resumeAnimation:O}=this.handlers;if(this.dragSnapToOrigin&&O&&O(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const A=qd(v.type==="pointercancel"?this.lastMoveEventInfo:Gd(w,this.transformPagePoint),this.history);this.startEvent&&S&&S(v,A),E&&E(v,A)},!np(e))return;this.dragSnapToOrigin=l,this.handlers=i,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=o||window;const f=Co(e),d=Gd(f,this.transformPagePoint),{point:p}=d,{timestamp:m}=mt;this.history=[{...p,timestamp:m}];const{onSessionStart:y}=i;y&&y(e,qd(d,this.history)),this.removeListeners=bo(Ks(this.contextWindow,"pointermove",this.handlePointerMove),Ks(this.contextWindow,"pointerup",this.handlePointerUp),Ks(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Bi(this.updatePoint)}}function Gd(t,e){return e?{point:e(t.point)}:t}function B3(t,e){return{x:t.x-e.x,y:t.y-e.y}}function qd({point:t},e){return{point:t,delta:B3(t,Zx(e)),offset:B3(t,vM(e)),velocity:xM(e,.1)}}function vM(t){return t[0]}function Zx(t){return t[t.length-1]}function xM(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,r=null;const o=Zx(t);for(;i>=0&&(r=t[i],!(o.timestamp-r.timestamp>Rn(e)));)i--;if(!r)return{x:0,y:0};const l=jn(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const c={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function bM(t,{min:e,max:i},r){return e!==void 0&&t<e?t=r?Ie(e,t,r.min):Math.max(t,e):i!==void 0&&t>i&&(t=r?Ie(i,t,r.max):Math.min(t,i)),t}function _3(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function wM(t,{top:e,left:i,bottom:r,right:o}){return{x:_3(t.x,i,o),y:_3(t.y,e,r)}}function U3(t,e){let i=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,r]=[r,i]),{min:i,max:r}}function SM(t,e){return{x:U3(t.x,e.x),y:U3(t.y,e.y)}}function CM(t,e){let i=.5;const r=Lt(t),o=Lt(e);return o>r?i=oo(e.min,e.max-r,t.min):r>o&&(i=oo(t.min,t.max-o,e.min)),oi(0,1,i)}function TM(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const eh=.35;function EM(t=eh){return t===!1?t=0:t===!0&&(t=eh),{x:$3(t,"left","right"),y:$3(t,"top","bottom")}}function $3(t,e,i){return{min:G3(t,e),max:G3(t,i)}}function G3(t,e){return typeof t=="number"?t:t[e]||0}const MM=new WeakMap;class AM{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:i=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Co(y).point)},c=(y,v)=>{const{drag:w,dragPropagation:S,onDragStart:E}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=zT(w),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),on(A=>{let T=this.getAxisMotionValue(A).get()||0;if(Dn.test(T)){const{projection:C}=this.visualElement;if(C&&C.layout){const j=C.layout.layoutBox[A];j&&(T=Lt(j)*(parseFloat(T)/100))}}this.originPoint[A]=T}),E&&$e.postRender(()=>E(y,v)),W0(this.visualElement,"transform");const{animationState:O}=this.visualElement;O&&O.setActive("whileDrag",!0)},f=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:E,onDrag:O}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:A}=v;if(S&&this.currentDirection===null){this.currentDirection=LM(A),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",v.point,A),this.updateAxis("y",v.point,A),this.visualElement.render(),O&&O(y,v)},d=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v,this.stop(y,v),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>on(y=>{var v;return this.getAnimationState(y)==="paused"&&((v=this.getAxisMotionValue(y).animation)==null?void 0:v.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new Fx(e,{onSessionStart:l,onStart:c,onMove:f,onSessionEnd:d,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:Xx(this.visualElement)})}stop(e,i){const r=e||this.latestPointerEvent,o=i||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:f}=this.getProps();f&&$e.postRender(()=>f(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(e,i,r){const{drag:o}=this.getProps();if(!r||!Xl(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=bM(c,this.constraints[e],this.elastic[e])),l.set(c)}resolveConstraints(){var l;const{dragConstraints:e,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;e&&pr(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=wM(r.layoutBox,e):this.constraints=!1,this.elastic=EM(i),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&on(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=TM(r.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!pr(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=OE(r,o.root,this.visualElement.getTransformPagePoint());let c=SM(o.layout.layoutBox,l);if(i){const f=i(ME(c));this.hasMutatedConstraints=!!f,f&&(c=Dx(f))}return c}startAnimation(e){const{drag:i,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:c,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},p=on(m=>{if(!Xl(m,i,this.currentDirection))return;let y=d&&d[m]||{};c&&(y={min:0,max:0});const v=o?200:1e6,w=o?40:1e7,S={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...l,...y};return this.startAxisValueAnimation(m,S)});return Promise.all(p).then(f)}startAxisValueAnimation(e,i){const r=this.getAxisMotionValue(e);return W0(this.visualElement,e),r.start(dp(e,r,0,i,this.visualElement,!1))}stopAnimation(){on(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){on(e=>{var i;return(i=this.getAxisMotionValue(e).animation)==null?void 0:i.pause()})}getAnimationState(e){var i;return(i=this.getAxisMotionValue(e).animation)==null?void 0:i.state}getAxisMotionValue(e){const i=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[i];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){on(i=>{const{drag:r}=this.getProps();if(!Xl(i,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(i);if(o&&o.layout){const{min:c,max:f}=o.layout.layoutBox[i];l.set(e[i]-Ie(c,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:r}=this.visualElement;if(!pr(i)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};on(c=>{const f=this.getAxisMotionValue(c);if(f&&this.constraints!==!1){const d=f.get();o[c]=CM({min:d,max:d},this.constraints[c])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),on(c=>{if(!Xl(c,e,null))return;const f=this.getAxisMotionValue(c),{min:d,max:p}=this.constraints[c];f.set(Ie(d,p,o[c]))})}addListeners(){if(!this.visualElement.current)return;MM.set(this.visualElement,this);const e=this.visualElement.current,i=Ks(e,"pointerdown",d=>{const{drag:p,dragListener:m=!0}=this.getProps();p&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();pr(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),$e.read(r);const c=ho(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p})=>{this.isDragging&&p&&(on(m=>{const y=this.getAxisMotionValue(m);y&&(this.originPoint[m]+=d[m].translate,y.set(y.get()+d[m].translate))}),this.visualElement.render())});return()=>{c(),i(),l(),f&&f()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:c=eh,dragMomentum:f=!0}=e;return{...e,drag:i,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:c,dragMomentum:f}}}function Xl(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function LM(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class OM extends Gi{constructor(e){super(e),this.removeGroupControls=ln,this.removeListeners=ln,this.controls=new AM(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ln}unmount(){this.removeGroupControls(),this.removeListeners()}}const q3=t=>(e,i)=>{t&&$e.postRender(()=>t(e,i))};class RM extends Gi{constructor(){super(...arguments),this.removePointerDownListener=ln}onPointerDown(e){this.session=new Fx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Xx(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:q3(e),onStart:q3(i),onMove:r,onEnd:(l,c)=>{delete this.session,o&&$e.postRender(()=>o(l,c))}}}mount(){this.removePointerDownListener=Ks(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const mu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function I3(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const $s={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(pe.test(t))t=parseFloat(t);else return t;const i=I3(t,e.target.x),r=I3(t,e.target.y);return`${i}% ${r}%`}},jM={correct:(t,{treeScale:e,projectionDelta:i})=>{const r=t,o=_i.parse(t);if(o.length>5)return r;const l=_i.createTransformer(t),c=typeof o[0]!="number"?1:0,f=i.x.scale*e.x,d=i.y.scale*e.y;o[0+c]/=f,o[1+c]/=d;const p=Ie(f,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=p),typeof o[3+c]=="number"&&(o[3+c]/=p),l(o)}};let Id=!1;class DM extends R.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;eE(HM),l&&(i.group&&i.group.add(l),r&&r.register&&o&&r.register(l),Id&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),mu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:r,drag:o,isPresent:l}=this.props,{projection:c}=r;return c&&(c.isPresent=l,Id=!0,o||e.layoutDependency!==i||i===void 0||e.isPresent!==l?c.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?c.promote():c.relegate()||$e.postRender(()=>{const f=c.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),tp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:r}=this.props,{projection:o}=e;Id=!0,o&&(o.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Kx(t){const[e,i]=yx(),r=R.useContext(Hh);return x.jsx(DM,{...t,layoutGroup:r,switchLayoutGroup:R.useContext(Rx),isPresent:e,safeToRemove:i})}const HM={borderRadius:{...$s,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:$s,borderTopRightRadius:$s,borderBottomLeftRadius:$s,borderBottomRightRadius:$s,boxShadow:jM};function VM(t,e,i){const r=Ct(t)?t:Ar(t);return r.start(dp("",r,e,i)),r.animation}const zM=(t,e)=>t.depth-e.depth;class kM{constructor(){this.children=[],this.isDirty=!1}add(e){kh(this.children,e),this.isDirty=!0}remove(e){Nh(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(zM),this.isDirty=!1,this.children.forEach(e)}}function NM(t,e){const i=zt.now(),r=({timestamp:o})=>{const l=o-i;l>=e&&(Bi(r),t(l-e))};return $e.setup(r,!0),()=>Bi(r)}const Qx=["TopLeft","TopRight","BottomLeft","BottomRight"],PM=Qx.length,Y3=t=>typeof t=="string"?parseFloat(t):t,X3=t=>typeof t=="number"||pe.test(t);function BM(t,e,i,r,o,l){o?(t.opacity=Ie(0,i.opacity??1,_M(r)),t.opacityExit=Ie(e.opacity??1,0,UM(r))):l&&(t.opacity=Ie(e.opacity??1,i.opacity??1,r));for(let c=0;c<PM;c++){const f=`border${Qx[c]}Radius`;let d=F3(e,f),p=F3(i,f);if(d===void 0&&p===void 0)continue;d||(d=0),p||(p=0),d===0||p===0||X3(d)===X3(p)?(t[f]=Math.max(Ie(Y3(d),Y3(p),r),0),(Dn.test(p)||Dn.test(d))&&(t[f]+="%")):t[f]=p}(e.rotate||i.rotate)&&(t.rotate=Ie(e.rotate||0,i.rotate||0,r))}function F3(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const _M=Wx(0,.5,Nv),UM=Wx(.5,.95,ln);function Wx(t,e,i){return r=>r<t?0:r>e?1:i(oo(t,e,r))}function Z3(t,e){t.min=e.min,t.max=e.max}function sn(t,e){Z3(t.x,e.x),Z3(t.y,e.y)}function K3(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Q3(t,e,i,r,o){return t-=e,t=Mu(t,1/i,r),o!==void 0&&(t=Mu(t,1/o,r)),t}function $M(t,e=0,i=1,r=.5,o,l=t,c=t){if(Dn.test(e)&&(e=parseFloat(e),e=Ie(c.min,c.max,e/100)-c.min),typeof e!="number")return;let f=Ie(l.min,l.max,r);t===l&&(f-=e),t.min=Q3(t.min,e,i,f,o),t.max=Q3(t.max,e,i,f,o)}function W3(t,e,[i,r,o],l,c){$M(t,e[i],e[r],e[o],e.scale,l,c)}const GM=["x","scaleX","originX"],qM=["y","scaleY","originY"];function J3(t,e,i,r){W3(t.x,e,GM,i?i.x:void 0,r?r.x:void 0),W3(t.y,e,qM,i?i.y:void 0,r?r.y:void 0)}function e4(t){return t.translate===0&&t.scale===1}function Jx(t){return e4(t.x)&&e4(t.y)}function t4(t,e){return t.min===e.min&&t.max===e.max}function IM(t,e){return t4(t.x,e.x)&&t4(t.y,e.y)}function n4(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function e5(t,e){return n4(t.x,e.x)&&n4(t.y,e.y)}function i4(t){return Lt(t.x)/Lt(t.y)}function a4(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class YM{constructor(){this.members=[]}add(e){kh(this.members,e),e.scheduleRender()}remove(e){if(Nh(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){const i=this.members.findIndex(o=>e===o);if(i===0)return!1;let r;for(let o=i;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,i){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,i&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:i,resumingFrom:r}=e;i.onExitComplete&&i.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function XM(t,e,i){let r="";const o=t.x.translate/e.x,l=t.y.translate/e.y,c=(i==null?void 0:i.z)||0;if((o||l||c)&&(r=`translate3d(${o}px, ${l}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:p,rotate:m,rotateX:y,rotateY:v,skewX:w,skewY:S}=i;p&&(r=`perspective(${p}px) ${r}`),m&&(r+=`rotate(${m}deg) `),y&&(r+=`rotateX(${y}deg) `),v&&(r+=`rotateY(${v}deg) `),w&&(r+=`skewX(${w}deg) `),S&&(r+=`skewY(${S}deg) `)}const f=t.x.scale*e.x,d=t.y.scale*e.y;return(f!==1||d!==1)&&(r+=`scale(${f}, ${d})`),r||"none"}const Yd=["","X","Y","Z"],FM=1e3;let ZM=0;function Xd(t,e,i,r){const{latestValues:o}=e;o[t]&&(i[t]=o[t],e.setStaticValue(t,0),r&&(r[t]=0))}function t5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const i=_x(e);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:o,layoutId:l}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",$e,!(o||l))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&t5(r)}function n5({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},f=e==null?void 0:e()){this.id=ZM++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(WM),this.nodes.forEach(nA),this.nodes.forEach(iA),this.nodes.forEach(JM)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new kM)}addEventListener(c,f){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new _h),this.eventHandlers.get(c).add(f)}notifyListeners(c,...f){const d=this.eventHandlers.get(c);d&&d.notify(...f)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=gx(c)&&!UT(c),this.instance=c;const{layoutId:f,layout:d,visualElement:p}=this.options;if(p&&!p.current&&p.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||f)&&(this.isLayoutDirty=!0),t){let m,y=0;const v=()=>this.root.updateBlockedByResize=!1;$e.read(()=>{y=window.innerWidth}),t(c,()=>{const w=window.innerWidth;w!==y&&(y=w,this.root.updateBlockedByResize=!0,m&&m(),m=NM(v,250),mu.hasAnimatedSinceResize&&(mu.hasAnimatedSinceResize=!1,this.nodes.forEach(o4)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&p&&(f||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:y,hasRelativeLayoutChanged:v,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||p.getDefaultTransition()||lA,{onLayoutAnimationStart:E,onLayoutAnimationComplete:O}=p.getProps(),A=!this.targetLayout||!e5(this.targetLayout,w),T=!y&&v;if(this.options.layoutRoot||this.resumeFrom||T||y&&(A||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...Jh(S,"layout"),onPlay:E,onComplete:O};(p.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(m,T)}else y||o4(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Bi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(aA),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&t5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const y=this.path[m];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(r4);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(s4);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(tA),this.nodes.forEach(KM),this.nodes.forEach(QM)):this.nodes.forEach(s4),this.clearAllSnapshots();const f=zt.now();mt.delta=oi(0,1e3/60,f-mt.timestamp),mt.timestamp=f,mt.isProcessing=!0,zd.update.process(mt),zd.preRender.process(mt),zd.render.process(mt),mt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,tp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(eA),this.sharedNodes.forEach(rA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$e.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$e.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Lt(this.snapshot.measuredBox.x)&&!Lt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(f=!1),f&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!Jx(this.projectionDelta),d=this.getTransformTemplate(),p=d?d(this.latestValues,""):void 0,m=p!==this.prevTransformTemplateValue;c&&this.instance&&(f||ca(this.latestValues)||m)&&(o(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return c&&(d=this.removeTransform(d)),uA(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:c}=this.options;if(!c)return Qe();const f=c.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(cA))){const{scroll:m}=this.root;m&&(mr(f.x,m.offset.x),mr(f.y,m.offset.y))}return f}removeElementScroll(c){var d;const f=Qe();if(sn(f,c),(d=this.scroll)!=null&&d.wasRoot)return f;for(let p=0;p<this.path.length;p++){const m=this.path[p],{scroll:y,options:v}=m;m!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&sn(f,c),mr(f.x,y.offset.x),mr(f.y,y.offset.y))}return f}applyTransform(c,f=!1){const d=Qe();sn(d,c);for(let p=0;p<this.path.length;p++){const m=this.path[p];!f&&m.options.layoutScroll&&m.scroll&&m!==m.root&&gr(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),ca(m.latestValues)&&gr(d,m.latestValues)}return ca(this.latestValues)&&gr(d,this.latestValues),d}removeTransform(c){const f=Qe();sn(f,c);for(let d=0;d<this.path.length;d++){const p=this.path[d];if(!p.instance||!ca(p.latestValues))continue;F0(p.latestValues)&&p.updateSnapshot();const m=Qe(),y=p.measurePageBox();sn(m,y),J3(f,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,m)}return ca(this.latestValues)&&J3(f,this.latestValues),f}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==mt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var v;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==f;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:y}=this.options;if(!(!this.layout||!(m||y))){if(this.resolvedRelativeTargetAt=mt.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),Ws(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),sn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):sn(this.target,this.layout.layoutBox),Vx(this.target,this.targetDelta)):sn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),Ws(this.relativeTargetOrigin,this.target,w.target),sn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||F0(this.parent.latestValues)||Hx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var S;const c=this.getLead(),f=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(d=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===mt.timestamp&&(d=!1),d)return;const{layout:p,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||m))return;sn(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,v=this.treeScale.y;LE(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Qe());const{target:w}=c;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(K3(this.prevProjectionDelta.x,this.projectionDelta.x),K3(this.prevProjectionDelta.y,this.projectionDelta.y)),Qs(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==v||!a4(this.projectionDelta.x,this.prevProjectionDelta.x)||!a4(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=yr(),this.projectionDelta=yr(),this.projectionDeltaWithTransform=yr()}setAnimationOrigin(c,f=!1){const d=this.snapshot,p=d?d.latestValues:{},m={...this.latestValues},y=yr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const v=Qe(),w=d?d.source:void 0,S=this.layout?this.layout.source:void 0,E=w!==S,O=this.getStack(),A=!O||O.members.length<=1,T=!!(E&&!A&&this.options.crossfade===!0&&!this.path.some(oA));this.animationProgress=0;let C;this.mixTargetDelta=j=>{const L=j/1e3;l4(y.x,c.x,L),l4(y.y,c.y,L),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ws(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),sA(this.relativeTarget,this.relativeTargetOrigin,v,L),C&&IM(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=Qe()),sn(C,this.relativeTarget)),E&&(this.animationValues=m,BM(m,p,this.latestValues,L,T,A)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var f,d,p;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(p=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||p.stop(),this.pendingAnimation&&(Bi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$e.update(()=>{mu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ar(0)),this.currentAnimation=VM(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),c.onUpdate&&c.onUpdate(m)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(FM),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:f,target:d,layout:p,latestValues:m}=c;if(!(!f||!d||!p)){if(this!==c&&this.layout&&p&&i5(this.options.animationType,this.layout.layoutBox,p.layoutBox)){d=this.target||Qe();const y=Lt(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+y;const v=Lt(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+v}sn(f,d),gr(f,m),Qs(this.projectionDeltaWithTransform,this.layoutCorrected,f,m)}}registerSharedNode(c,f){this.sharedNodes.has(c)||this.sharedNodes.set(c,new YM),this.sharedNodes.get(c).add(f);const p=f.options.initialPromotionConfig;f.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(f):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var f;const{layoutId:c}=this.options;return c?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:c}=this.options;return c?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:f,preserveFollowOpacity:d}={}){const p=this.getStack();p&&p.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let f=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const p={};d.z&&Xd("z",c,p,this.animationValues);for(let m=0;m<Yd.length;m++)Xd(`rotate${Yd[m]}`,c,p,this.animationValues),Xd(`skew${Yd[m]}`,c,p,this.animationValues);c.render();for(const m in p)c.setStaticValue(m,p[m]),this.animationValues&&(this.animationValues[m]=p[m]);c.scheduleRender()}applyProjectionStyles(c,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=pu(f==null?void 0:f.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=pu(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!ca(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const m=p.animationValues||p.latestValues;this.applyTransformsToTarget();let y=XM(this.projectionDeltaWithTransform,this.treeScale,m);d&&(y=d(m,y)),c.transform=y;const{x:v,y:w}=this.projectionDelta;c.transformOrigin=`${v.origin*100}% ${w.origin*100}% 0`,p.animationValues?c.opacity=p===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:c.opacity=p===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const S in fo){if(m[S]===void 0)continue;const{correct:E,applyTo:O,isCSSVariable:A}=fo[S],T=y==="none"?m[S]:E(m[S],p);if(O){const C=O.length;for(let j=0;j<C;j++)c[O[j]]=T}else A?this.options.visualElement.renderState.vars[S]=T:c[S]=T}this.options.layoutId&&(c.pointerEvents=p===this?pu(f==null?void 0:f.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var f;return(f=c.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(r4),this.root.sharedNodes.clear()}}}function KM(t){t.updateLayout()}function QM(t){var i;const e=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=t.layout,{animationType:l}=t.options,c=e.source!==t.layout.source;l==="size"?on(y=>{const v=c?e.measuredBox[y]:e.layoutBox[y],w=Lt(v);v.min=r[y].min,v.max=v.min+w}):i5(l,e.layoutBox,r)&&on(y=>{const v=c?e.measuredBox[y]:e.layoutBox[y],w=Lt(r[y]);v.max=v.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+w)});const f=yr();Qs(f,r,e.layoutBox);const d=yr();c?Qs(d,t.applyTransform(o,!0),e.measuredBox):Qs(d,r,e.layoutBox);const p=!Jx(f);let m=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:w}=y;if(v&&w){const S=Qe();Ws(S,e.layoutBox,v.layoutBox);const E=Qe();Ws(E,r,w.layoutBox),e5(S,E)||(m=!0),y.options.layoutRoot&&(t.relativeTarget=E,t.relativeTargetOrigin=S,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:d,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:m})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function WM(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function JM(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function eA(t){t.clearSnapshot()}function r4(t){t.clearMeasurements()}function s4(t){t.isLayoutDirty=!1}function tA(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function o4(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function nA(t){t.resolveTargetDelta()}function iA(t){t.calcProjection()}function aA(t){t.resetSkewAndRotation()}function rA(t){t.removeLeadSnapshot()}function l4(t,e,i){t.translate=Ie(e.translate,0,i),t.scale=Ie(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function u4(t,e,i,r){t.min=Ie(e.min,i.min,r),t.max=Ie(e.max,i.max,r)}function sA(t,e,i,r){u4(t.x,e.x,i.x,r),u4(t.y,e.y,i.y,r)}function oA(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const lA={duration:.45,ease:[.4,0,.1,1]},c4=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),f4=c4("applewebkit/")&&!c4("chrome/")?Math.round:ln;function d4(t){t.min=f4(t.min),t.max=f4(t.max)}function uA(t){d4(t.x),d4(t.y)}function i5(t,e,i){return t==="position"||t==="preserve-aspect"&&!mM(i4(e),i4(i),.2)}function cA(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const fA=n5({attachResizeListener:(t,e)=>ho(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Fd={current:void 0},a5=n5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Fd.current){const t=new fA({});t.mount(window),t.setOptions({layoutScroll:!0}),Fd.current=t}return Fd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),dA={pan:{Feature:RM},drag:{Feature:OM,ProjectionNode:a5,MeasureLayout:Kx}};function h4(t,e,i){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",i==="Start");const o="onHover"+i,l=r[o];l&&$e.postRender(()=>l(e,Co(e)))}class hA extends Gi{mount(){const{current:e}=this.node;e&&(this.unmount=kT(e,(i,r)=>(h4(this.node,r,"Start"),o=>h4(this.node,o,"End"))))}unmount(){}}class pA extends Gi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=bo(ho(this.node.current,"focus",()=>this.onFocus()),ho(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function p4(t,e,i){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",i==="Start");const o="onTap"+(i==="End"?"":i),l=r[o];l&&$e.postRender(()=>l(e,Co(e)))}class mA extends Gi{mount(){const{current:e}=this.node;e&&(this.unmount=_T(e,(i,r)=>(p4(this.node,r,"Start"),(o,{success:l})=>p4(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const th=new WeakMap,Zd=new WeakMap,gA=t=>{const e=th.get(t.target);e&&e(t)},yA=t=>{t.forEach(gA)};function vA({root:t,...e}){const i=t||document;Zd.has(i)||Zd.set(i,{});const r=Zd.get(i),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(yA,{root:t,...e})),r[o]}function xA(t,e,i){const r=vA(e);return th.set(t,i),r.observe(t),()=>{th.delete(t),r.unobserve(t)}}const bA={some:0,all:1};class wA extends Gi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:i,margin:r,amount:o="some",once:l}=e,c={root:i?i.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:bA[o]},f=d=>{const{isIntersecting:p}=d;if(this.isInView===p||(this.isInView=p,l&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:m,onViewportLeave:y}=this.node.getProps(),v=p?m:y;v&&v(d)};return xA(this.node.current,c,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(SA(e,i))&&this.startObserver()}unmount(){}}function SA({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const CA={inView:{Feature:wA},tap:{Feature:mA},focus:{Feature:pA},hover:{Feature:hA}},TA={layout:{ProjectionNode:a5,MeasureLayout:Kx}},EA={...uM,...CA,...dA,...TA},Pr=EE(EA,PE),MA=D.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,AA=D.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 8px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 1001;

  background: transparent;
  border: none;
`,Kd=D(Pr.div)`
  width: 20px;
  height: 2px;
  background: ${({$isOpen:t})=>t?"black":"white"};
  border-radius: 2px;
  transition: background 0.3s ease;
`,LA=D(Pr.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(254, 254, 254, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  padding: 20px;
  z-index: 1000;
  overflow-y: auto;

  &::before {
    content: '';
    position: absolute;
    top: 8%;
    left: 0;
    width: 100%;
    border-top: 1px solid rgba(195, 187, 187, 1);
  }
  @media screen and (min-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      top: 13%;
      left: 0;
      width: 100%;
      border-top: 1px solid rgba(195, 187, 187, 1);
    }
  }

  @media screen and (min-width: 1440px) {
  }
`,OA=D($i)`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 56px;
  line-height: 120%;
  color: var(--white-50);
  margin: 12px 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--purple-400);
  }
`,RA=D.p`
  color: ${({$active:t})=>t?"#3098EE":"#242424"};
  font-family: 'Bebas Neue', sans-serif;
  font-size: 56px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
  transition: color 0.3s ease;

  &:hover,
  &.active {
    color: #3098ee;
  }
`;D.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;D(Pr.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 8px;
  overflow: hidden;
`;D.div`
  padding: 10px 0;
`;const jA=D.img`
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: ${({$isOpen:t})=>t?"rotate(180deg)":"rotate(0)"};
`;D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  span {
    flex-grow: 1;
  }

  ${jA} {
    padding: 8px;
    margin-right: -8px;
  }
`;const DA=D.div`
  background-color: ${({$active:t})=>t?"#3098EE":"#c3c2c2ff"};
  position: absolute;
  width: 90%;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`,HA=(t,e,i,r)=>{var l,c,f,d;const o=[i,{code:e,...r||{}}];if((c=(l=t==null?void 0:t.services)==null?void 0:l.logger)!=null&&c.forward)return t.services.logger.forward(o,"warn","react-i18next::",!0);va(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(d=(f=t==null?void 0:t.services)==null?void 0:f.logger)!=null&&d.warn?t.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},m4={},nh=(t,e,i,r)=>{va(i)&&m4[i]||(va(i)&&(m4[i]=new Date),HA(t,e,i,r))},r5=(t,e)=>()=>{if(t.isInitialized)e();else{const i=()=>{setTimeout(()=>{t.off("initialized",i)},0),e()};t.on("initialized",i)}},ih=(t,e,i)=>{t.loadNamespaces(e,r5(t,i))},g4=(t,e,i,r)=>{if(va(i)&&(i=[i]),t.options.preload&&t.options.preload.indexOf(e)>-1)return ih(t,i,r);i.forEach(o=>{t.options.ns.indexOf(o)<0&&t.options.ns.push(o)}),t.loadLanguages(e,r5(t,r))},VA=(t,e,i={})=>!e.languages||!e.languages.length?(nh(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(t,{lng:i.lng,precheck:(r,o)=>{if(i.bindI18n&&i.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!o(r.isLanguageChangingTo,t))return!1}}),va=t=>typeof t=="string",zA=t=>typeof t=="object"&&t!==null,kA=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,NA={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},PA=t=>NA[t],BA=t=>t.replace(kA,PA);let ah={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:BA};const _A=(t={})=>{ah={...ah,...t}},UA=()=>ah;let s5;const $A=t=>{s5=t},GA=()=>s5,qA={type:"3rdParty",init(t){_A(t.options.react),$A(t)}},IA=R.createContext();class YA{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(i=>{this.usedNamespaces[i]||(this.usedNamespaces[i]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const XA=(t,e)=>{const i=R.useRef();return R.useEffect(()=>{i.current=t},[t,e]),i.current},o5=(t,e,i,r)=>t.getFixedT(e,i,r),FA=(t,e,i,r)=>R.useCallback(o5(t,e,i,r),[t,e,i,r]),hp=(t,e={})=>{var j,L,N,z;const{i18n:i}=e,{i18n:r,defaultNS:o}=R.useContext(IA)||{},l=i||r||GA();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new YA),!l){nh(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const U=(Y,X)=>va(X)?X:zA(X)&&va(X.defaultValue)?X.defaultValue:Array.isArray(Y)?Y[Y.length-1]:Y,_=[U,{},!1];return _.t=U,_.i18n={},_.ready=!1,_}(j=l.options.react)!=null&&j.wait&&nh(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const c={...UA(),...l.options.react,...e},{useSuspense:f,keyPrefix:d}=c;let p=o||((L=l.options)==null?void 0:L.defaultNS);p=va(p)?[p]:p||["translation"],(z=(N=l.reportNamespaces).addUsedNamespaces)==null||z.call(N,p);const m=(l.isInitialized||l.initializedStoreOnce)&&p.every(U=>VA(U,l,c)),y=FA(l,e.lng||null,c.nsMode==="fallback"?p:p[0],d),v=()=>y,w=()=>o5(l,e.lng||null,c.nsMode==="fallback"?p:p[0],d),[S,E]=R.useState(v);let O=p.join();e.lng&&(O=`${e.lng}${O}`);const A=XA(O),T=R.useRef(!0);R.useEffect(()=>{const{bindI18n:U,bindI18nStore:_}=c;T.current=!0,!m&&!f&&(e.lng?g4(l,e.lng,p,()=>{T.current&&E(w)}):ih(l,p,()=>{T.current&&E(w)})),m&&A&&A!==O&&T.current&&E(w);const Y=()=>{T.current&&E(w)};return U&&(l==null||l.on(U,Y)),_&&(l==null||l.store.on(_,Y)),()=>{T.current=!1,l&&U&&(U==null||U.split(" ").forEach(X=>l.off(X,Y))),_&&l&&_.split(" ").forEach(X=>l.store.off(X,Y))}},[l,O]),R.useEffect(()=>{T.current&&m&&E(v)},[l,d,m]);const C=[S,l,m];if(C.t=S,C.i18n=l,C.ready=m,m||!m&&!f)return C;throw new Promise(U=>{e.lng?g4(l,e.lng,p,()=>U()):ih(l,p,()=>U())})},ZA=D.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  overflow: auto;
  margin-top: 40px;
`,y4=D.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  width: 166px;
`,Vi=D.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,KA=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.875rem; /* 3.5 * 0.25rem */
  width: 92%;
  overflow: auto;
  position: absolute;
  bottom: 2%;

    &::before {
  content: '';
  position: absolute;
  top: 8%;
  left: 0;
  width: 100%;
  border-top: 1px solid rgba(195, 187, 187, 1);
}
`,QA=D.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
`,WA=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 2 * 0.25rem */
  width: 100%;
`,JA=D.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;
`,eL=D.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 400;
  line-height: 1.2em;
  width: fit-content;
`,tL={open:{rotate:45,y:8},closed:{rotate:0,y:0}},nL={open:{opacity:0},closed:{opacity:1}},iL={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},aL={open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},rL=({isOpen:t,setIsOpen:e})=>{const[,i]=R.useState(!1),{t:r}=hp();R.useEffect(()=>(document.body.style.overflow=t?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[t]);const o=()=>{e(!1),i(!1)},l=[{to:"/home#hero",label:"Home",active:!0},{to:"/service",label:"Services"},{to:"/about#ap",label:"About Us"},{to:"/tips#app",label:"Tips"},{to:"/contact#ap",label:"Contact"}];return x.jsxs(MA,{children:[x.jsxs(AA,{onClick:()=>e(!t),"aria-label":t?"Close menu":"Open menu",children:[x.jsx(Kd,{$isOpen:t,animate:t?"open":"closed",variants:tL}),x.jsx(Kd,{$isOpen:t,animate:t?"open":"closed",variants:nL}),x.jsx(Kd,{$isOpen:t,animate:t?"open":"closed",variants:iL})]}),x.jsx(vx,{children:t&&x.jsxs(LA,{initial:"closed",animate:"open",exit:"closed",variants:aL,transition:{duration:.3},children:[l.map((c,f)=>x.jsxs("div",{children:[x.jsx(OA,{to:c.to,onClick:o,children:x.jsx(RA,{$active:c.active,children:r(c.label)})}),x.jsx(DA,{})]},f)),x.jsxs(ZA,{children:[x.jsxs(y4,{children:[x.jsx(Vi,{children:"Washing Machine Fix"}),x.jsx(Vi,{children:"Dishwasher Repair"}),x.jsx(Vi,{children:"Oven Maintenance"}),x.jsx(Vi,{children:"Dryer Troubleshooting"})]}),x.jsxs(y4,{children:[x.jsx(Vi,{children:"Microwave Service"}),x.jsx(Vi,{children:"Air Conditioner Repair"}),x.jsx(Vi,{children:"Coffee Maker Repair"}),x.jsx(Vi,{children:"Blender Maintenance"})]})]}),x.jsxs(KA,{children:[x.jsx(QA,{}),x.jsxs(WA,{children:[x.jsx(JA,{children:"Designed by TRBN"}),x.jsx(eL,{children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})})]})},sL="/assets/LogoandTextContainer-CnBPFIWK.svg",oL=D.div`
 position: relative;
  min-width: 100vw;
  min-height: 100vh;
  overflow: auto;
  flex-shrink: 0;
  
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-end; /* Вирівнюємо контент справа */
    align-items: center;
    padding-right: 120px; /* Відступ від правої сторони */
  }
`,lL=D.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,uL=D.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  min-width: 343px;
  max-width: 668px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 24px;

  @media screen and (min-width: 768px) {
  }

   @media screen and (min-width: 1440px) {
    position: relative; /* Змінюємо на relative для flex-розташування */
    left: auto;
    bottom: auto;
    width: 45%; /* Ширина контенту */
    max-width: 600px;
    margin-left: auto; /* Вирівнюємо справа */
    margin-right: 0;
    margin-top: 20%;
  }
`,cL=D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,fL=D.p`
  color: #fff;
  font-family: var(--second-family);
  font-size: 56px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
  @media screen and (min-width: 768px) {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 85px;
    line-height: 90%;
    color: var(--white);
  }

  @media screen and (min-width: 1440px) {
  }
`,dL=D.p`
  color: #fff;
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 17px;
    line-height: 125%;
    color: var(--white);
  }

  @media screen and (min-width: 1440px) {
  }
`,hL=D.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,l5=D($i)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  background: #3098ee;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  border: none;
  z-index: 1100;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 15px;
  color: var(--white);
 &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: var(--purple-400);
      color: var(--purple-400);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(109, 135, 239, 0.2);
    }
    
    &:focus {
      outline: 2px solid var(--purple-400);
      outline-offset: 2px;
      background-color: rgba(255, 255, 255, 0.15);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 6px rgba(109, 135, 239, 0.1);
      background-color: rgba(255, 255, 255, 0.2);
    }

    a {
      color: var(--white);
      transition: color 0.3s ease;
      
      &:hover {
        color: var(--purple-400);
      }
    }
  
  @media screen and (min-width: 768px) {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    color: var(--white);
  }

  @media screen and (min-width: 1440px) {
  }
`;D.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  width: 119px;
  background: transparent;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 15px;
  color: var(--white);
  @media screen and (min-width: 768px) {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    color: var(--white);
  }

  @media screen and (min-width: 1440px) {
  }
`;D.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;D.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;D.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;D.div`
  display: flex;
  align-items: center;
  gap: 7px;
  width: 156px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;D.img`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  max-width: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;D.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1920px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;

  /* Тіні */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, rgb(0, 0, 0) 0%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, rgb(0, 0, 0) 0%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }

  iframe,
  canvas {
    width: 100% !important;
    height: 100% !important;
    display: block;
    position: relative;
    z-index: 1;
    object-fit: contain;
    pointer-events: auto;
  }

  /* Мобільні пристрої */
  @media screen and (max-width: 767px) {
    height: 100vh;
    z-index: -2; /* Поміщаємо під інші елементи */

    &::before,
    &::after {
      height: 50px;
    }

    iframe,
    canvas {
      pointer-events: none; /* Вимкнення клікабельності */
      z-index: -1; /* Нижчий z-index для iframe/canvas */
      opacity: 0.7; /* Додаткове затемнення для мобільних */
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;D.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    margin-bottom: 150px;
  }
`;D.span`
  border-radius: 25px;
  margin-left: 10px;
  padding: 4px;
  width: 22px;
  height: 22px;
  font-size: 13px;

  box-shadow:
    inset 0 -8px 24px rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px rgba(255, 255, 255, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.03),
    0 2px 4px rgba(0, 0, 0, 0.08),
    0 0px 10px rgba(207, 121, 250, 0.5); /* ніжне фіолетове світіння */

  background: linear-gradient(315deg, rgba(232, 198, 247, 0.96) 7%, rgba(207, 121, 250, 0.54) 86%);
`;D.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);

  @media screen and (min-width: 1440px) {
    width: 100%;
    width: 835px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
    text-align: center;
    color: var(--white-75);
    margin-bottom: 36px;
  }
`;D.div`
  width: 100%;
  max-width: 830px;
  margin: 0 auto; // Це важливо для центрування
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 36px;
  }
`;D.div`
  width: 100%;
  max-width: 343px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    margin-bottom: 36px;
  }
`;D.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 1440px) {
    width: auto;
    margin: 0 auto;
  }
`;D.img`
  border-radius: 18px;
  border: 1px solid var(--black);
  width: 36px;
  height: 36px;
  margin-left: -20px;
`;D.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
`;D.div`
  margin: 0 auto;
  width: 285px;
  // height: 43px;
  margin-top: 20px;
  display: flex;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1440px) {
  }
`;D.button`
  z-index: 10;
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;

  margin-right: 12px;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-100);

  box-shadow: inset 0 0 6px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(139deg, #494bec, #6a6bff, #494bec, #3a3bc7);
  background-size: 300% 300%;

  transition: all 0.4s ease;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%, -50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ripple 0.6s ease-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20, 20);
      opacity: 0;
    }
  }
  border-radius: 12px;
  padding: 12px 12px;
  width: 100%;
  height: auto;
`;mS`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 73, 74, 0.81);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`;D.button`
  z-index: 10;
  border-radius: 12px;
  width: 110px;
  position: relative;
  overflow: hidden;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-100);

  box-shadow: inset 0 0 6px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(180deg, rgb(255, 255, 255) 7%, rgba(255, 255, 255, 0) 86%), rgba(255, 255, 255, 0.03);
  background-size: 300% 300%;

  transition: all 0.4s ease;

  &:hover {
    box-shadow:
      inset 0 0 8px 0 rgba(255, 255, 255, 0.74),
      0 0 15px rgba(115, 115, 115, 0.5);
    transform: perspective(500px) rotateX(10deg) translateY(-2px);
    background-size: 200% 200%;
  }

  &:active {
    background: linear-gradient(139deg, #3a3bc7, #494bec, #3a3bc7);
  }

  &:focus:not(:active)::after {
    animation: ripple 0.6s ease-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20, 20);
      opacity: 0;
    }
  }
  border: 1px solid #212121;
  border-radius: 12px;
  padding: 12px 12px;
  width: 100%;

  backdrop-filter: blur(168px);
  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%),
    rgba(255, 255, 255, 0.03);
`;const v4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgBzZFhEcIwDIVTFFRCHYCESZgDJgEHmwPmYJWAhKGgONgccCgoL3e5I1eaAf/I3Xftkry+ZnVUiZyzx9KBPXiAm3Muln27ivCIJYEArmAFLfILCGQFimYTcidwNw8QYSv7A5iEILkBjDUhNy+yD3IQu40q79m9Jm7ALPsOXFRtVe75k7OX+fjAvrjRu7OauaHXz5v5BsqVbzRZYi4moxa+ea4IzkXOi3CgrZDGxLMW39vCilMvwki/hJox0t/FEx1sC+f02XQyAAAAAElFTkSuQmCC",pL=()=>{const[t,e]=R.useState(!1),[i]=R.useState(!1),[r,o]=R.useState(!1),l=i||r,c=yh(),f=y=>{y.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),window.location.pathname!=="/home"&&c("/home")};R.useEffect(()=>{const y=new IntersectionObserver(([w])=>{e(!w.isIntersecting)},{threshold:.1,rootMargin:"50px 0px 0px 0px"}),v=document.createElement("div");return v.style.position="absolute",v.style.top="50px",v.style.height="1px",v.style.pointerEvents="none",document.body.appendChild(v),y.observe(v),()=>{y.disconnect(),document.body.contains(v)&&document.body.removeChild(v)}},[]);const d=yt({query:"(max-width: 1439px)"}),p=yt({query:"(min-width: 768px) and (max-width: 1439px)"}),m=yt({query:"(min-width: 1440px)"});return x.jsxs(gS,{$isScrolled:t,children:[x.jsxs(yS,{id:"header",children:[x.jsx(bS,{to:"/home#hero",onClick:f,$overlayOpen:l,children:x.jsx("img",{src:sL,alt:"Logo"})}),!d&&x.jsxs(xS,{children:[x.jsx(_s,{children:x.jsx(Us,{to:"/home#hero",children:"Home"})}),x.jsx(_s,{children:x.jsx(Us,{to:"/service#all",style:{padding:"10px 0px"},children:"Services"})}),x.jsx(_s,{children:x.jsx(Us,{to:"/about#ap",children:"About Us"})}),x.jsx(_s,{children:x.jsx(Us,{to:"/pricing#app",children:"Tips"})}),x.jsx(_s,{children:x.jsx(Us,{to:"/contact#ap",children:"Contact"})})]}),m&&x.jsxs(Kg,{children:[x.jsxs($l,{children:[x.jsx(Hi,{children:x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),x.jsx(Hi,{children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),x.jsxs($l,{children:[x.jsxs(Hi,{children:[" ",x.jsx("img",{src:v4,alt:"🗺️"})," ",x.jsx("a",{href:"https://www.google.com/maps/place/%D0%A2%D0%B0%D1%83%D0%B7%D0%B5%D0%BD%D0%B4-%D0%9E%D1%83%D0%BA%D1%81,+%D0%9A%D0%B0%D0%BB%D1%96%D1%84%D0%BE%D1%80%D0%BD%D1%96%D1%8F,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@34.1878421,-118.9303503,16784m/data=!3m1!1e3!4m6!3m5!1s0x80e8255670288891:0x8d2e7a0147cc2e26!8m2!3d34.1761133!4d-118.8487793!16zL20vMHI4Yzg?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),x.jsx(Hi,{children:" & Nearby Cities"})]})]}),x.jsx(vS,{children:x.jsxs("div",{style:{display:"flex"},children:[x.jsx(l5,{to:"/contact#ap",children:"Contact Us"}),x.jsx(Sv,{$overlayOpen:l,children:x.jsx("a",{href:"tel:+18055002705",children:" Call Us"})}),d&&x.jsx(rL,{isOpen:r,setIsOpen:o})]})})]}),p&&x.jsxs(Kg,{children:[x.jsxs($l,{children:[x.jsx(Hi,{$overlayOpen:l,children:x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),x.jsx(Hi,{$overlayOpen:l,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),x.jsxs($l,{children:[x.jsxs(Hi,{$overlayOpen:l,children:[x.jsx("img",{src:v4,alt:"🗺️"}),x.jsx("a",{href:"https://www.google.com/maps/place/...",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),x.jsx(Hi,{$overlayOpen:l,children:"& Nearby Cities"})]})]})]})},mL=D.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 32px 16px 24px 16px;
  background: #242424;
  min-width: 100vw;

  overflow: auto;

  @media screen and (min-width: 768px){


}

@media screen and (min-width: 1440px){
    
}  
`,gL=D.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 338px;
  @media screen and (min-width: 768px){

}

@media screen and (min-width: 1440px){
    
}  
`,yL=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  @media screen and (min-width: 768px){
    flex-direction: row;
}

@media screen and (min-width: 1440px){
    
}  
`,zi=D.p`
  color: #fff;
  font-family: "Geist", sans-serif;
  font-size: ${({size:t})=>t||"15px"};
  font-weight: ${({weight:t})=>t||"normal"};
  line-height: 1.2em;
  width: fit-content;
  display: flex;
  @media screen and (min-width: 768px){

}

@media screen and (min-width: 1440px){
    
}  
`,vL=D.div`
  @media screen and (min-width: 768px){
display: flex;
 flex-direction: row;
 width: 100%;
 justify-content: space-between;
}

@media screen and (min-width: 1440px){
    
}  
`,xL=D.p`
  width: 100%;
  font-family: var(--font-family);
font-weight: 400;
font-size: 15px;
color: var(--white);
 line-height: 1.6em;

 a {
   color: var(--white);
   text-decoration: none;

   &:hover {
     text-decoration: underline;
   }
 }

 @media screen and (min-width: 768px){

}

@media screen and (min-width: 1440px){
    
}  
`,bL=D.div`
  display: flex;
  align-items: center;
  gap: 13px;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (min-width: 768px){
justify-content: flex-end;
}

@media screen and (min-width: 1440px){
    
}  
`,wL=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px){

}

@media screen and (min-width: 1440px){
    
}  
`,SL=D.div`
  background: rgba(255, 255, 255, ${({opacity:t})=>t||.5});
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px){

}

@media screen and (min-width: 1440px){
    
}  
`,CL=D.svg`
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px){
    width: 100%;
    height: 114px;
}

@media screen and (min-width: 1440px){
    height: 222px;
}  
`;D.footer`

text-align: center;
  background: transparent;
color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
width: 100%;
margin: 0 auto;
// position: fixed;
bottom: 0; 
z-index: 1;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 auto;
  }`;D.div`
   @media screen and (min-width: 768px) {
  display: flex;
 gap: 74px;
  }
    @media screen and (min-width: 1440px) {
         display: flex;
        flex-direction: row;
        align-items: stretch;
        gap: 30px;
        margin-right: 40px;
  }
  `;D.p`
  padding: 0px auto 50px auto;
  width: 98%;
  height: 2px; /* Збільшуємо висоту для еліпса */
  margin: 0 auto;
background:  var(--white-24);
position: relative;
z-index: 10;
margin-bottom: 16px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;D.div`
  display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 24px 16px;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;

 @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: baseline;
        width: 100%;
  }
  
@media screen and (min-width: 1440px){
display: flex;
  margin: 0 auto;
   padding: 50px 0px;
}
`;D.div`
 display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    gap: 5px;
    @media screen and (min-width: 768px){

}

@media screen and (min-width: 1440px){
    
}  
`;D.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00d1ff;
  text-decoration: none;
  z-index: 10;
  img {
 width: 142px;
height: 19px;
  overflow: hidden;

  
  &:hover,
  &:focus,
  &.active {
    color: #00ffe7;
    fill: #00ffe7;
  }
  }

   @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  margin: 20px;
  }
`;D.div`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: var(--white-100);
margin-bottom: 16px;
margin-top: 16px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;D($i)`
font-family: var(--font-family);
font-weight: 400;
font-size: 15px;
color: var(--white-50);
margin-bottom: 10px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;D.a`
font-family: var(--font-family);
font-weight: 400;
font-size: 15px;
color: var(--white-50);
margin-bottom: 10px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;D.div`
display: flex;
margin-bottom: 16px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;D.div`
display: flex;
justify-content: space-between;
margin: 0 auto;
width: 100%;
flex-wrap: wrap;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;D($i)`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 130%;
color: var(--white-50);
display: flex;
align-items: center;
gap: 7px;
margin-left: 7px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;D.div`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: var(--white-50);
border: 1px solid  var(--white-50);
width: 1px;
    height: 1px;

     @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;D.button`
z-index: 10;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 130%;
color: var(--white-100);
margin-bottom: 16px;
  
  box-shadow: inset 0 0 6px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(180deg, rgb(255, 255, 255) 7%, rgba(255, 255, 255, 0) 86%), rgba(255, 255, 255, 0.03) ;
  background-size: 300% 300%;
  
  transition: all 0.4s ease;
  
  &:hover {
    box-shadow: inset 0 0 8px 0 rgba(255, 255, 255, 0.74), 
                0 0 15px rgba(115, 115, 115, 0.5);
    transform: perspective(500px) rotateX(10deg) translateY(-2px);
    background-size: 200% 200%;
  }
  
  &:active {
    background: linear-gradient(139deg, #3a3bc7, #494bec, #3a3bc7);
  }
  

  
  &:focus:not(:active)::after {
    animation: ripple 0.6s ease-out;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20, 20);
      opacity: 0;
    }
  }
border: 1px solid #212121;
border-radius: 12px;
padding: 8px 16px;
width: max-content;;
height: 34px;

backdrop-filter: blur(168px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%) , rgba(255, 255, 255, 0.03);
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;D.div`
    flex-flow: wrap;
    align-items: flex-end;
    align-content: space-between;
    width: 100%;
    display: flex;
    justify-content: space-between;
 @media screen and (min-width: 768px) {
  flex-direction: row-reverse;
          margin: 0 20px;
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;D.div`
display: flex;
gap: 12px;
flex-direction: row;
margin: 16px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
;`;D.a`
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;D.img`
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;D.div`
  width: 100%;
 margin: 80px auto 80px auto;
background:rgba(0, 0, 0, 0.86);
// opacity: 0.2;/
  color: #fff;
  position: relative;
  padding: 16px;
overflow: visible;
height: auto;
      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
margin-top:15% ; 

}
`;D.section`
  max-width: 800px;
  margin: 0 auto ;
  padding: 20px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;D.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;D.h2`
font-family: var(--font-family);
font-weight: 400;
font-size: 18px;
line-height: 130%;
color: var(--white-100);
display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 20px;
   

        @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;D.p`
  padding: 0px auto 50px auto;
  width: 98%;
  height: 2px; 
  margin: 40px auto;
background:  var(--white-24);
position: relative;
z-index: 10;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
max-width: 1440px;

}
`;D.div`
 

  p {
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
color: var(--white-75);
margin-bottom: 10px;
  }

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;D.img`
  width: 56px;
  height: 56px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;const TL=()=>x.jsx(mL,{children:x.jsxs(gL,{children:[x.jsxs(yL,{children:[x.jsxs(xL,{children:[x.jsx("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:"801 Tioga pl, Newbury Park, CA 91320"})," ",x.jsx("br",{}),x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"}),x.jsx("br",{})," ",x.jsx("a",{href:"mailto:airtexno@gmail.com",children:"airtexno@gmail.com"})]}),x.jsxs(bL,{children:[x.jsx(zi,{children:"Home"}),x.jsx(zi,{children:"Services"}),x.jsx(zi,{children:"About Us"}),x.jsx(zi,{children:"Tips"}),x.jsx(zi,{children:"Contacts"}),x.jsx(zi,{children:"Privacy and Terms"})]})]}),x.jsxs(wL,{children:[x.jsxs(CL,{viewBox:"0 0 343 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[x.jsx("path",{d:"M0 54.8045L19.396 1.71207H26.1359L45.457 54.8045H39.9152L34.2238 38.8768H11.2332L5.5417 54.8045H0ZM12.9556 33.9414H32.5013L22.7659 6.27353L12.9556 33.9414Z",fill:"#3098EE"}),x.jsx("path",{d:"M51.2842 54.8045V1.71207H56.3765V54.8045H51.2842Z",fill:"#3098EE"}),x.jsx("path",{d:"M67.6308 54.8045V1.71207H87.1016C90.896 1.71207 94.1161 2.36015 96.7622 3.6563C99.4581 4.9026 101.53 6.69727 102.978 9.04032C104.426 11.3834 105.15 14.2 105.15 17.4902C105.15 19.933 104.575 22.1015 103.427 23.9959C102.329 25.8903 100.856 27.4108 99.0088 28.5574C97.1616 29.704 95.1646 30.3521 93.0178 30.5016L92.6433 29.8286C96.1381 29.8286 98.8341 30.6262 100.731 32.2215C102.678 33.7669 103.802 36.2097 104.101 39.5498L105.449 54.8045H100.282L99.0088 39.9984C98.8091 37.5557 97.9354 35.761 96.3877 34.6144C94.84 33.418 92.3438 32.8197 88.8989 32.8197H72.7232V54.8045H67.6308ZM72.7232 27.8844H87.9254C91.5699 27.8844 94.4407 26.987 96.5375 25.1924C98.6843 23.3478 99.7577 20.7555 99.7577 17.4155C99.7577 13.9258 98.6843 11.2587 96.5375 9.41421C94.3907 7.56968 91.2205 6.64742 87.0267 6.64742H72.7232V27.8844Z",fill:"#3098EE"}),x.jsx("path",{d:"M125.684 54.8045V9.1151H109.359V1.71207H150.098V9.1151H133.772V54.8045H125.684Z",fill:"white"}),x.jsx("path",{d:"M153.991 54.8045V1.71207H188.589V9.1151H162.079V24.5941H187.691V31.7728H162.079V47.4014H189.188V54.8045H153.991Z",fill:"white"}),x.jsx("path",{d:"M192.736 54.8045L210.41 28.1835L192.886 1.71207H202.397L215.502 21.9021L228.383 1.71207H237.819L220.295 28.0339L238.043 54.8045H228.533L215.352 34.3153L202.172 54.8045H192.736Z",fill:"white"}),x.jsx("path",{d:"M243.289 54.8045V1.71207H253.549L278.112 45.0085V1.71207H286.2V54.8045H275.566L251.377 12.4801V54.8045H243.289Z",fill:"white"}),x.jsx("path",{d:"M318.137 56.0009C312.995 56.0009 308.577 54.9042 304.882 52.7107C301.188 50.4674 298.342 47.2768 296.345 43.1391C294.348 39.0014 293.349 34.066 293.349 28.333C293.349 22.6001 294.348 17.6647 296.345 13.527C298.342 9.33943 301.188 6.12397 304.882 3.88063C308.577 1.63729 312.995 0.515625 318.137 0.515625C323.329 0.515625 327.773 1.63729 331.467 3.88063C335.212 6.12397 338.057 9.33943 340.004 13.527C342.001 17.6647 343 22.6001 343 28.333C343 34.066 342.001 39.0014 340.004 43.1391C338.057 47.2768 335.212 50.4674 331.467 52.7107C327.773 54.9042 323.329 56.0009 318.137 56.0009ZM318.137 48.5979C321.582 48.5979 324.528 47.8003 326.974 46.205C329.47 44.6097 331.367 42.3165 332.665 39.3254C333.964 36.2844 334.613 32.6203 334.613 28.333C334.613 24.0458 333.964 20.3817 332.665 17.3407C331.367 14.2997 329.47 11.9816 326.974 10.3863C324.528 8.74121 321.582 7.91865 318.137 7.91865C314.742 7.91865 311.822 8.74121 309.375 10.3863C306.929 11.9816 305.032 14.2997 303.684 17.3407C302.386 20.3817 301.737 24.0458 301.737 28.333C301.737 32.6203 302.386 36.2844 303.684 39.3254C305.032 42.3165 306.929 44.6097 309.375 46.205C311.822 47.8003 314.742 48.5979 318.137 48.5979Z",fill:"white"})]}),x.jsx(SL,{opacity:.5}),x.jsxs(vL,{children:[x.jsx(zi,{size:"14px",weight:"500",children:"Designed by TRBN"}),x.jsx(zi,{size:"14px",children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})}),EL=()=>{const t=kn();return R.useEffect(()=>{if(t.hash){const e=t.hash.replace("#",""),i=document.getElementById(e);i&&setTimeout(()=>{i.scrollIntoView({behavior:"smooth",block:"start"})},400)}else window.scrollTo({top:0,behavior:"auto"})},[t.pathname]),x.jsxs(x.Fragment,{children:[x.jsx(pL,{}),x.jsx(R.Suspense,{children:x.jsx(N9,{})}),x.jsx(TL,{})]})};function x4(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function pp(t,e){t===void 0&&(t={}),e===void 0&&(e={});const i=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:x4(e[r])&&x4(t[r])&&Object.keys(e[r]).length>0&&pp(t[r],e[r])})}const u5={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Hn(){const t=typeof document<"u"?document:{};return pp(t,u5),t}const ML={document:u5,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function Tt(){const t=typeof window<"u"?window:{};return pp(t,ML),t}function AL(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function LL(t){const e=t;Object.keys(e).forEach(i=>{try{e[i]=null}catch{}try{delete e[i]}catch{}})}function Au(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function ii(){return Date.now()}function OL(t){const e=Tt();let i;return e.getComputedStyle&&(i=e.getComputedStyle(t,null)),!i&&t.currentStyle&&(i=t.currentStyle),i||(i=t.style),i}function RL(t,e){e===void 0&&(e="x");const i=Tt();let r,o,l;const c=OL(t);return i.WebKitCSSMatrix?(o=c.transform||c.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(f=>f.replace(",",".")).join(", ")),l=new i.WebKitCSSMatrix(o==="none"?"":o)):(l=c.MozTransform||c.OTransform||c.MsTransform||c.msTransform||c.transform||c.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=l.toString().split(",")),e==="x"&&(i.WebKitCSSMatrix?o=l.m41:r.length===16?o=parseFloat(r[12]):o=parseFloat(r[4])),e==="y"&&(i.WebKitCSSMatrix?o=l.m42:r.length===16?o=parseFloat(r[13]):o=parseFloat(r[5])),o||0}function Fl(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function jL(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Xt(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){const r=i<0||arguments.length<=i?void 0:arguments[i];if(r!=null&&!jL(r)){const o=Object.keys(Object(r)).filter(l=>e.indexOf(l)<0);for(let l=0,c=o.length;l<c;l+=1){const f=o[l],d=Object.getOwnPropertyDescriptor(r,f);d!==void 0&&d.enumerable&&(Fl(t[f])&&Fl(r[f])?r[f].__swiper__?t[f]=r[f]:Xt(t[f],r[f]):!Fl(t[f])&&Fl(r[f])?(t[f]={},r[f].__swiper__?t[f]=r[f]:Xt(t[f],r[f])):t[f]=r[f])}}}return t}function Zl(t,e,i){t.style.setProperty(e,i)}function c5(t){let{swiper:e,targetPosition:i,side:r}=t;const o=Tt(),l=-e.translate;let c=null,f;const d=e.params.speed;e.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(e.cssModeFrameID);const p=i>l?"next":"prev",m=(v,w)=>p==="next"&&v>=w||p==="prev"&&v<=w,y=()=>{f=new Date().getTime(),c===null&&(c=f);const v=Math.max(Math.min((f-c)/d,1),0),w=.5-Math.cos(v*Math.PI)/2;let S=l+w*(i-l);if(m(S,i)&&(S=i),e.wrapperEl.scrollTo({[r]:S}),m(S,i)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:S})}),o.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=o.requestAnimationFrame(y)};y()}function An(t,e){e===void 0&&(e="");const i=Tt(),r=[...t.children];return i.HTMLSlotElement&&t instanceof HTMLSlotElement&&r.push(...t.assignedElements()),e?r.filter(o=>o.matches(e)):r}function DL(t,e){const i=[e];for(;i.length>0;){const r=i.shift();if(t===r)return!0;i.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function HL(t,e){const i=Tt();let r=e.contains(t);return!r&&i.HTMLSlotElement&&e instanceof HTMLSlotElement&&(r=[...e.assignedElements()].includes(t),r||(r=DL(t,e))),r}function Lu(t){try{console.warn(t);return}catch{}}function Ou(t,e){e===void 0&&(e=[]);const i=document.createElement(t);return i.classList.add(...Array.isArray(e)?e:AL(e)),i}function VL(t,e){const i=[];for(;t.previousElementSibling;){const r=t.previousElementSibling;e?r.matches(e)&&i.push(r):i.push(r),t=r}return i}function zL(t,e){const i=[];for(;t.nextElementSibling;){const r=t.nextElementSibling;e?r.matches(e)&&i.push(r):i.push(r),t=r}return i}function Pi(t,e){return Tt().getComputedStyle(t,null).getPropertyValue(e)}function Ru(t){let e=t,i;if(e){for(i=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(i+=1);return i}}function f5(t,e){const i=[];let r=t.parentElement;for(;r;)e?r.matches(e)&&i.push(r):i.push(r),r=r.parentElement;return i}function rh(t,e,i){const r=Tt();return t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function ct(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}function ju(t,e){e===void 0&&(e=""),typeof trustedTypes<"u"?t.innerHTML=trustedTypes.createPolicy("html",{createHTML:i=>i}).createHTML(e):t.innerHTML=e}function Qd(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l=Tt();i({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let c,f=ii(),d;const p=[];function m(C){let z=0,U=0,_=0,Y=0;return"detail"in C&&(U=C.detail),"wheelDelta"in C&&(U=-C.wheelDelta/120),"wheelDeltaY"in C&&(U=-C.wheelDeltaY/120),"wheelDeltaX"in C&&(z=-C.wheelDeltaX/120),"axis"in C&&C.axis===C.HORIZONTAL_AXIS&&(z=U,U=0),_=z*10,Y=U*10,"deltaY"in C&&(Y=C.deltaY),"deltaX"in C&&(_=C.deltaX),C.shiftKey&&!_&&(_=Y,Y=0),(_||Y)&&C.deltaMode&&(C.deltaMode===1?(_*=40,Y*=40):(_*=800,Y*=800)),_&&!z&&(z=_<1?-1:1),Y&&!U&&(U=Y<1?-1:1),{spinX:z,spinY:U,pixelX:_,pixelY:Y}}function y(){e.enabled&&(e.mouseEntered=!0)}function v(){e.enabled&&(e.mouseEntered=!1)}function w(C){return e.params.mousewheel.thresholdDelta&&C.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&ii()-f<e.params.mousewheel.thresholdTime?!1:C.delta>=6&&ii()-f<60?!0:(C.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),o("scroll",C.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),o("scroll",C.raw)),f=new l.Date().getTime(),!1)}function S(C){const j=e.params.mousewheel;if(C.direction<0){if(e.isEnd&&!e.params.loop&&j.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&j.releaseOnEdges)return!0;return!1}function E(C){let j=C,L=!0;if(!e.enabled||C.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const N=e.params.mousewheel;e.params.cssMode&&j.preventDefault();let z=e.el;e.params.mousewheel.eventsTarget!=="container"&&(z=document.querySelector(e.params.mousewheel.eventsTarget));const U=z&&z.contains(j.target);if(!e.mouseEntered&&!U&&!N.releaseOnEdges)return!0;j.originalEvent&&(j=j.originalEvent);let _=0;const Y=e.rtlTranslate?-1:1,X=m(j);if(N.forceToAxis)if(e.isHorizontal())if(Math.abs(X.pixelX)>Math.abs(X.pixelY))_=-X.pixelX*Y;else return!0;else if(Math.abs(X.pixelY)>Math.abs(X.pixelX))_=-X.pixelY;else return!0;else _=Math.abs(X.pixelX)>Math.abs(X.pixelY)?-X.pixelX*Y:-X.pixelY;if(_===0)return!0;N.invert&&(_=-_);let te=e.getTranslate()+_*N.sensitivity;if(te>=e.minTranslate()&&(te=e.minTranslate()),te<=e.maxTranslate()&&(te=e.maxTranslate()),L=e.params.loop?!0:!(te===e.minTranslate()||te===e.maxTranslate()),L&&e.params.nested&&j.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const ie={time:ii(),delta:Math.abs(_),direction:Math.sign(_),raw:C};p.length>=2&&p.shift();const oe=p.length?p[p.length-1]:void 0;if(p.push(ie),oe?(ie.direction!==oe.direction||ie.delta>oe.delta||ie.time>oe.time+150)&&w(ie):w(ie),S(ie))return!0}else{const ie={time:ii(),delta:Math.abs(_),direction:Math.sign(_)},oe=d&&ie.time<d.time+500&&ie.delta<=d.delta&&ie.direction===d.direction;if(!oe){d=void 0;let re=e.getTranslate()+_*N.sensitivity;const B=e.isBeginning,K=e.isEnd;if(re>=e.minTranslate()&&(re=e.minTranslate()),re<=e.maxTranslate()&&(re=e.maxTranslate()),e.setTransition(0),e.setTranslate(re),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!B&&e.isBeginning||!K&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:ie.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(c),c=void 0,p.length>=15&&p.shift();const Q=p.length?p[p.length-1]:void 0,ee=p[0];if(p.push(ie),Q&&(ie.delta>Q.delta||ie.direction!==Q.direction))p.splice(0);else if(p.length>=15&&ie.time-ee.time<500&&ee.delta-ie.delta>=1&&ie.delta<=6){const H=_>0?.8:.2;d=ie,p.splice(0),c=Au(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,H)},0)}c||(c=Au(()=>{if(e.destroyed||!e.params)return;const H=.5;d=ie,p.splice(0),e.slideToClosest(e.params.speed,!0,void 0,H)},500))}if(oe||o("scroll",j),e.params.autoplay&&e.params.autoplay.disableOnInteraction&&e.autoplay.stop(),N.releaseOnEdges&&(re===e.minTranslate()||re===e.maxTranslate()))return!0}}return j.preventDefault?j.preventDefault():j.returnValue=!1,!1}function O(C){let j=e.el;e.params.mousewheel.eventsTarget!=="container"&&(j=document.querySelector(e.params.mousewheel.eventsTarget)),j[C]("mouseenter",y),j[C]("mouseleave",v),j[C]("wheel",E)}function A(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",E),!0):e.mousewheel.enabled?!1:(O("addEventListener"),e.mousewheel.enabled=!0,!0)}function T(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,E),!0):e.mousewheel.enabled?(O("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}r("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&T(),e.params.mousewheel.enabled&&A()}),r("destroy",()=>{e.params.cssMode&&A(),e.mousewheel.enabled&&T()}),Object.assign(e.mousewheel,{enable:A,disable:T})}function d5(t,e,i,r){return t.params.createElements&&Object.keys(r).forEach(o=>{if(!i[o]&&i.auto===!0){let l=An(t.el,`.${r[o]}`)[0];l||(l=Ou("div",r[o]),l.className=r[o],t.el.append(l)),i[o]=l,e[o]=l}}),i}function kL(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function l(S){let E;return S&&typeof S=="string"&&e.isElement&&(E=e.el.querySelector(S)||e.hostEl.querySelector(S),E)?E:(S&&(typeof S=="string"&&(E=[...document.querySelectorAll(S)]),e.params.uniqueNavElements&&typeof S=="string"&&E&&E.length>1&&e.el.querySelectorAll(S).length===1?E=e.el.querySelector(S):E&&E.length===1&&(E=E[0])),S&&!E?S:E)}function c(S,E){const O=e.params.navigation;S=ct(S),S.forEach(A=>{A&&(A.classList[E?"add":"remove"](...O.disabledClass.split(" ")),A.tagName==="BUTTON"&&(A.disabled=E),e.params.watchOverflow&&e.enabled&&A.classList[e.isLocked?"add":"remove"](O.lockClass))})}function f(){const{nextEl:S,prevEl:E}=e.navigation;if(e.params.loop){c(E,!1),c(S,!1);return}c(E,e.isBeginning&&!e.params.rewind),c(S,e.isEnd&&!e.params.rewind)}function d(S){S.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),o("navigationPrev"))}function p(S){S.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),o("navigationNext"))}function m(){const S=e.params.navigation;if(e.params.navigation=d5(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(S.nextEl||S.prevEl))return;let E=l(S.nextEl),O=l(S.prevEl);Object.assign(e.navigation,{nextEl:E,prevEl:O}),E=ct(E),O=ct(O);const A=(T,C)=>{T&&T.addEventListener("click",C==="next"?p:d),!e.enabled&&T&&T.classList.add(...S.lockClass.split(" "))};E.forEach(T=>A(T,"next")),O.forEach(T=>A(T,"prev"))}function y(){let{nextEl:S,prevEl:E}=e.navigation;S=ct(S),E=ct(E);const O=(A,T)=>{A.removeEventListener("click",T==="next"?p:d),A.classList.remove(...e.params.navigation.disabledClass.split(" "))};S.forEach(A=>O(A,"next")),E.forEach(A=>O(A,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?w():(m(),f())}),r("toEdge fromEdge lock unlock",()=>{f()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{nextEl:S,prevEl:E}=e.navigation;if(S=ct(S),E=ct(E),e.enabled){f();return}[...S,...E].filter(O=>!!O).forEach(O=>O.classList.add(e.params.navigation.lockClass))}),r("click",(S,E)=>{let{nextEl:O,prevEl:A}=e.navigation;O=ct(O),A=ct(A);const T=E.target;let C=A.includes(T)||O.includes(T);if(e.isElement&&!C){const j=E.path||E.composedPath&&E.composedPath();j&&(C=j.find(L=>O.includes(L)||A.includes(L)))}if(e.params.navigation.hideOnClick&&!C){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===T||e.pagination.el.contains(T)))return;let j;O.length?j=O[0].classList.contains(e.params.navigation.hiddenClass):A.length&&(j=A[0].classList.contains(e.params.navigation.hiddenClass)),o(j===!0?"navigationShow":"navigationHide"),[...O,...A].filter(L=>!!L).forEach(L=>L.classList.toggle(e.params.navigation.hiddenClass))}});const v=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),m(),f()},w=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),y()};Object.assign(e.navigation,{enable:v,disable:w,update:f,init:m,destroy:y})}function Gs(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function NL(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:T=>T,formatFractionTotal:T=>T,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),e.pagination={el:null,bullets:[]};let c,f=0;function d(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function p(T,C){const{bulletActiveClass:j}=e.params.pagination;T&&(T=T[`${C==="prev"?"previous":"next"}ElementSibling`],T&&(T.classList.add(`${j}-${C}`),T=T[`${C==="prev"?"previous":"next"}ElementSibling`],T&&T.classList.add(`${j}-${C}-${C}`)))}function m(T,C,j){if(T=T%j,C=C%j,C===T+1)return"next";if(C===T-1)return"previous"}function y(T){const C=T.target.closest(Gs(e.params.pagination.bulletClass));if(!C)return;T.preventDefault();const j=Ru(C)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===j)return;const L=m(e.realIndex,j,e.slides.length);L==="next"?e.slideNext():L==="previous"?e.slidePrev():e.slideToLoop(j)}else e.slideTo(j)}function v(){const T=e.rtl,C=e.params.pagination;if(d())return;let j=e.pagination.el;j=ct(j);let L,N;const z=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,U=e.params.loop?Math.ceil(z/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(N=e.previousRealIndex||0,L=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(L=e.snapIndex,N=e.previousSnapIndex):(N=e.previousIndex||0,L=e.activeIndex||0),C.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let Y,X,te;if(C.dynamicBullets&&(c=rh(_[0],e.isHorizontal()?"width":"height"),j.forEach(ie=>{ie.style[e.isHorizontal()?"width":"height"]=`${c*(C.dynamicMainBullets+4)}px`}),C.dynamicMainBullets>1&&N!==void 0&&(f+=L-(N||0),f>C.dynamicMainBullets-1?f=C.dynamicMainBullets-1:f<0&&(f=0)),Y=Math.max(L-f,0),X=Y+(Math.min(_.length,C.dynamicMainBullets)-1),te=(X+Y)/2),_.forEach(ie=>{const oe=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(re=>`${C.bulletActiveClass}${re}`)].map(re=>typeof re=="string"&&re.includes(" ")?re.split(" "):re).flat();ie.classList.remove(...oe)}),j.length>1)_.forEach(ie=>{const oe=Ru(ie);oe===L?ie.classList.add(...C.bulletActiveClass.split(" ")):e.isElement&&ie.setAttribute("part","bullet"),C.dynamicBullets&&(oe>=Y&&oe<=X&&ie.classList.add(...`${C.bulletActiveClass}-main`.split(" ")),oe===Y&&p(ie,"prev"),oe===X&&p(ie,"next"))});else{const ie=_[L];if(ie&&ie.classList.add(...C.bulletActiveClass.split(" ")),e.isElement&&_.forEach((oe,re)=>{oe.setAttribute("part",re===L?"bullet-active":"bullet")}),C.dynamicBullets){const oe=_[Y],re=_[X];for(let B=Y;B<=X;B+=1)_[B]&&_[B].classList.add(...`${C.bulletActiveClass}-main`.split(" "));p(oe,"prev"),p(re,"next")}}if(C.dynamicBullets){const ie=Math.min(_.length,C.dynamicMainBullets+4),oe=(c*ie-c)/2-te*c,re=T?"right":"left";_.forEach(B=>{B.style[e.isHorizontal()?re:"top"]=`${oe}px`})}}j.forEach((_,Y)=>{if(C.type==="fraction"&&(_.querySelectorAll(Gs(C.currentClass)).forEach(X=>{X.textContent=C.formatFractionCurrent(L+1)}),_.querySelectorAll(Gs(C.totalClass)).forEach(X=>{X.textContent=C.formatFractionTotal(U)})),C.type==="progressbar"){let X;C.progressbarOpposite?X=e.isHorizontal()?"vertical":"horizontal":X=e.isHorizontal()?"horizontal":"vertical";const te=(L+1)/U;let ie=1,oe=1;X==="horizontal"?ie=te:oe=te,_.querySelectorAll(Gs(C.progressbarFillClass)).forEach(re=>{re.style.transform=`translate3d(0,0,0) scaleX(${ie}) scaleY(${oe})`,re.style.transitionDuration=`${e.params.speed}ms`})}C.type==="custom"&&C.renderCustom?(ju(_,C.renderCustom(e,L+1,U)),Y===0&&o("paginationRender",_)):(Y===0&&o("paginationRender",_),o("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](C.lockClass)})}function w(){const T=e.params.pagination;if(d())return;const C=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let j=e.pagination.el;j=ct(j);let L="";if(T.type==="bullets"){let N=e.params.loop?Math.ceil(C/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&N>C&&(N=C);for(let z=0;z<N;z+=1)T.renderBullet?L+=T.renderBullet.call(e,z,T.bulletClass):L+=`<${T.bulletElement} ${e.isElement?'part="bullet"':""} class="${T.bulletClass}"></${T.bulletElement}>`}T.type==="fraction"&&(T.renderFraction?L=T.renderFraction.call(e,T.currentClass,T.totalClass):L=`<span class="${T.currentClass}"></span> / <span class="${T.totalClass}"></span>`),T.type==="progressbar"&&(T.renderProgressbar?L=T.renderProgressbar.call(e,T.progressbarFillClass):L=`<span class="${T.progressbarFillClass}"></span>`),e.pagination.bullets=[],j.forEach(N=>{T.type!=="custom"&&ju(N,L||""),T.type==="bullets"&&e.pagination.bullets.push(...N.querySelectorAll(Gs(T.bulletClass)))}),T.type!=="custom"&&o("paginationRender",j[0])}function S(){e.params.pagination=d5(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const T=e.params.pagination;if(!T.el)return;let C;typeof T.el=="string"&&e.isElement&&(C=e.el.querySelector(T.el)),!C&&typeof T.el=="string"&&(C=[...document.querySelectorAll(T.el)]),C||(C=T.el),!(!C||C.length===0)&&(e.params.uniqueNavElements&&typeof T.el=="string"&&Array.isArray(C)&&C.length>1&&(C=[...e.el.querySelectorAll(T.el)],C.length>1&&(C=C.find(j=>f5(j,".swiper")[0]===e.el))),Array.isArray(C)&&C.length===1&&(C=C[0]),Object.assign(e.pagination,{el:C}),C=ct(C),C.forEach(j=>{T.type==="bullets"&&T.clickable&&j.classList.add(...(T.clickableClass||"").split(" ")),j.classList.add(T.modifierClass+T.type),j.classList.add(e.isHorizontal()?T.horizontalClass:T.verticalClass),T.type==="bullets"&&T.dynamicBullets&&(j.classList.add(`${T.modifierClass}${T.type}-dynamic`),f=0,T.dynamicMainBullets<1&&(T.dynamicMainBullets=1)),T.type==="progressbar"&&T.progressbarOpposite&&j.classList.add(T.progressbarOppositeClass),T.clickable&&j.addEventListener("click",y),e.enabled||j.classList.add(T.lockClass)}))}function E(){const T=e.params.pagination;if(d())return;let C=e.pagination.el;C&&(C=ct(C),C.forEach(j=>{j.classList.remove(T.hiddenClass),j.classList.remove(T.modifierClass+T.type),j.classList.remove(e.isHorizontal()?T.horizontalClass:T.verticalClass),T.clickable&&(j.classList.remove(...(T.clickableClass||"").split(" ")),j.removeEventListener("click",y))})),e.pagination.bullets&&e.pagination.bullets.forEach(j=>j.classList.remove(...T.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const T=e.params.pagination;let{el:C}=e.pagination;C=ct(C),C.forEach(j=>{j.classList.remove(T.horizontalClass,T.verticalClass),j.classList.add(e.isHorizontal()?T.horizontalClass:T.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?A():(S(),w(),v())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&v()}),r("snapIndexChange",()=>{v()}),r("snapGridLengthChange",()=>{w(),v()}),r("destroy",()=>{E()}),r("enable disable",()=>{let{el:T}=e.pagination;T&&(T=ct(T),T.forEach(C=>C.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{v()}),r("click",(T,C)=>{const j=C.target,L=ct(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&L&&L.length>0&&!j.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&j===e.navigation.nextEl||e.navigation.prevEl&&j===e.navigation.prevEl))return;const N=L[0].classList.contains(e.params.pagination.hiddenClass);o(N===!0?"paginationShow":"paginationHide"),L.forEach(z=>z.classList.toggle(e.params.pagination.hiddenClass))}});const O=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:T}=e.pagination;T&&(T=ct(T),T.forEach(C=>C.classList.remove(e.params.pagination.paginationDisabledClass))),S(),w(),v()},A=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:T}=e.pagination;T&&(T=ct(T),T.forEach(C=>C.classList.add(e.params.pagination.paginationDisabledClass))),E()};Object.assign(e.pagination,{enable:O,disable:A,render:w,update:v,init:S,destroy:E})}function ri(t){let{swiper:e,extendParams:i,on:r,emit:o,params:l}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let c,f,d=l&&l.autoplay?l.autoplay.delay:3e3,p=l&&l.autoplay?l.autoplay.delay:3e3,m,y=new Date().getTime(),v,w,S,E,O,A,T;function C(Q){!e||e.destroyed||!e.wrapperEl||Q.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",C),!(T||Q.detail&&Q.detail.bySwiperTouchMove)&&Y())}const j=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?v=!0:v&&(p=m,v=!1);const Q=e.autoplay.paused?m:y+p-new Date().getTime();e.autoplay.timeLeft=Q,o("autoplayTimeLeft",Q,Q/d),f=requestAnimationFrame(()=>{j()})},L=()=>{let Q;return e.virtual&&e.params.virtual.enabled?Q=e.slides.find(H=>H.classList.contains("swiper-slide-active")):Q=e.slides[e.activeIndex],Q?parseInt(Q.getAttribute("data-swiper-autoplay"),10):void 0},N=Q=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(f),j();let ee=typeof Q>"u"?e.params.autoplay.delay:Q;d=e.params.autoplay.delay,p=e.params.autoplay.delay;const H=L();!Number.isNaN(H)&&H>0&&typeof Q>"u"&&(ee=H,d=H,p=H),m=ee;const F=e.params.speed,ne=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(F,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,F,!0,!0),o("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(F,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,F,!0,!0),o("autoplay")),e.params.cssMode&&(y=new Date().getTime(),requestAnimationFrame(()=>{N()})))};return ee>0?(clearTimeout(c),c=setTimeout(()=>{ne()},ee)):requestAnimationFrame(()=>{ne()}),ee},z=()=>{y=new Date().getTime(),e.autoplay.running=!0,N(),o("autoplayStart")},U=()=>{e.autoplay.running=!1,clearTimeout(c),cancelAnimationFrame(f),o("autoplayStop")},_=(Q,ee)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(c),Q||(A=!0);const H=()=>{o("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",C):Y()};if(e.autoplay.paused=!0,ee){O&&(m=e.params.autoplay.delay),O=!1,H();return}m=(m||e.params.autoplay.delay)-(new Date().getTime()-y),!(e.isEnd&&m<0&&!e.params.loop)&&(m<0&&(m=0),H())},Y=()=>{e.isEnd&&m<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(y=new Date().getTime(),A?(A=!1,N(m)):N(),e.autoplay.paused=!1,o("autoplayResume"))},X=()=>{if(e.destroyed||!e.autoplay.running)return;const Q=Hn();Q.visibilityState==="hidden"&&(A=!0,_(!0)),Q.visibilityState==="visible"&&Y()},te=Q=>{Q.pointerType==="mouse"&&(A=!0,T=!0,!(e.animating||e.autoplay.paused)&&_(!0))},ie=Q=>{Q.pointerType==="mouse"&&(T=!1,e.autoplay.paused&&Y())},oe=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",te),e.el.addEventListener("pointerleave",ie))},re=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",te),e.el.removeEventListener("pointerleave",ie))},B=()=>{Hn().addEventListener("visibilitychange",X)},K=()=>{Hn().removeEventListener("visibilitychange",X)};r("init",()=>{e.params.autoplay.enabled&&(oe(),B(),z())}),r("destroy",()=>{re(),K(),e.autoplay.running&&U()}),r("_freeModeStaticRelease",()=>{(S||A)&&Y()}),r("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?U():_(!0,!0)}),r("beforeTransitionStart",(Q,ee,H)=>{e.destroyed||!e.autoplay.running||(H||!e.params.autoplay.disableOnInteraction?_(!0,!0):U())}),r("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){U();return}w=!0,S=!1,A=!1,E=setTimeout(()=>{A=!0,S=!0,_(!0)},200)}}),r("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!w)){if(clearTimeout(E),clearTimeout(c),e.params.autoplay.disableOnInteraction){S=!1,w=!1;return}S&&e.params.cssMode&&Y(),S=!1,w=!1}}),r("slideChange",()=>{e.destroyed||!e.autoplay.running||(O=!0)}),Object.assign(e.autoplay,{start:z,stop:U,pause:_,resume:Y})}let Wd;function PL(){const t=Tt(),e=Hn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function h5(){return Wd||(Wd=PL()),Wd}let Jd;function BL(t){let{userAgent:e}=t===void 0?{}:t;const i=h5(),r=Tt(),o=r.navigator.platform,l=e||r.navigator.userAgent,c={ios:!1,android:!1},f=r.screen.width,d=r.screen.height,p=l.match(/(Android);?[\s\/]+([\d.]+)?/);let m=l.match(/(iPad).*OS\s([\d_]+)/);const y=l.match(/(iPod)(.*OS\s([\d_]+))?/),v=!m&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),w=o==="Win32";let S=o==="MacIntel";const E=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!m&&S&&i.touch&&E.indexOf(`${f}x${d}`)>=0&&(m=l.match(/(Version)\/([\d.]+)/),m||(m=[0,1,"13_0_0"]),S=!1),p&&!w&&(c.os="android",c.android=!0),(m||v||y)&&(c.os="ios",c.ios=!0),c}function p5(t){return t===void 0&&(t={}),Jd||(Jd=BL(t)),Jd}let e0;function _L(){const t=Tt(),e=p5();let i=!1;function r(){const f=t.navigator.userAgent.toLowerCase();return f.indexOf("safari")>=0&&f.indexOf("chrome")<0&&f.indexOf("android")<0}if(r()){const f=String(t.navigator.userAgent);if(f.includes("Version/")){const[d,p]=f.split("Version/")[1].split(" ")[0].split(".").map(m=>Number(m));i=d<16||d===16&&p<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),l=r(),c=l||o&&e.ios;return{isSafari:i||l,needPerspectiveFix:i,need3dFix:c,isWebView:o}}function m5(){return e0||(e0=_L()),e0}function UL(t){let{swiper:e,on:i,emit:r}=t;const o=Tt();let l=null,c=null;const f=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},d=()=>{!e||e.destroyed||!e.initialized||(l=new ResizeObserver(y=>{c=o.requestAnimationFrame(()=>{const{width:v,height:w}=e;let S=v,E=w;y.forEach(O=>{let{contentBoxSize:A,contentRect:T,target:C}=O;C&&C!==e.el||(S=T?T.width:(A[0]||A).inlineSize,E=T?T.height:(A[0]||A).blockSize)}),(S!==v||E!==w)&&f()})}),l.observe(e.el))},p=()=>{c&&o.cancelAnimationFrame(c),l&&l.unobserve&&e.el&&(l.unobserve(e.el),l=null)},m=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};i("init",()=>{if(e.params.resizeObserver&&typeof o.ResizeObserver<"u"){d();return}o.addEventListener("resize",f),o.addEventListener("orientationchange",m)}),i("destroy",()=>{p(),o.removeEventListener("resize",f),o.removeEventListener("orientationchange",m)})}function $L(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l=[],c=Tt(),f=function(m,y){y===void 0&&(y={});const v=c.MutationObserver||c.WebkitMutationObserver,w=new v(S=>{if(e.__preventObserver__)return;if(S.length===1){o("observerUpdate",S[0]);return}const E=function(){o("observerUpdate",S[0])};c.requestAnimationFrame?c.requestAnimationFrame(E):c.setTimeout(E,0)});w.observe(m,{attributes:typeof y.attributes>"u"?!0:y.attributes,childList:e.isElement||(typeof y.childList>"u"?!0:y).childList,characterData:typeof y.characterData>"u"?!0:y.characterData}),l.push(w)},d=()=>{if(e.params.observer){if(e.params.observeParents){const m=f5(e.hostEl);for(let y=0;y<m.length;y+=1)f(m[y])}f(e.hostEl,{childList:e.params.observeSlideChildren}),f(e.wrapperEl,{attributes:!1})}},p=()=>{l.forEach(m=>{m.disconnect()}),l.splice(0,l.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",d),r("destroy",p)}var GL={on(t,e,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const o=i?"unshift":"push";return t.split(" ").forEach(l=>{r.eventsListeners[l]||(r.eventsListeners[l]=[]),r.eventsListeners[l][o](e)}),r},once(t,e,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function o(){r.off(t,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,c=new Array(l),f=0;f<l;f++)c[f]=arguments[f];e.apply(r,c)}return o.__emitterProxy=e,r.on(t,o,i)},onAny(t,e){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;const r=e?"unshift":"push";return i.eventsAnyListeners.indexOf(t)<0&&i.eventsAnyListeners[r](t),i},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const i=e.eventsAnyListeners.indexOf(t);return i>=0&&e.eventsAnyListeners.splice(i,1),e},off(t,e){const i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?i.eventsListeners[r]=[]:i.eventsListeners[r]&&i.eventsListeners[r].forEach((o,l)=>{(o===e||o.__emitterProxy&&o.__emitterProxy===e)&&i.eventsListeners[r].splice(l,1)})}),i},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,i,r;for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return typeof l[0]=="string"||Array.isArray(l[0])?(e=l[0],i=l.slice(1,l.length),r=t):(e=l[0].events,i=l[0].data,r=l[0].context||t),i.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(d=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(p=>{p.apply(r,[d,...i])}),t.eventsListeners&&t.eventsListeners[d]&&t.eventsListeners[d].forEach(p=>{p.apply(r,i)})}),t}};function qL(){const t=this;let e,i;const r=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?i=t.params.height:i=r.clientHeight,!(e===0&&t.isHorizontal()||i===0&&t.isVertical())&&(e=e-parseInt(Pi(r,"padding-left")||0,10)-parseInt(Pi(r,"padding-right")||0,10),i=i-parseInt(Pi(r,"padding-top")||0,10)-parseInt(Pi(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Object.assign(t,{width:e,height:i,size:t.isHorizontal()?e:i}))}function IL(){const t=this;function e(Y,X){return parseFloat(Y.getPropertyValue(t.getDirectionLabel(X))||0)}const i=t.params,{wrapperEl:r,slidesEl:o,size:l,rtlTranslate:c,wrongRTL:f}=t,d=t.virtual&&i.virtual.enabled,p=d?t.virtual.slides.length:t.slides.length,m=An(o,`.${t.params.slideClass}, swiper-slide`),y=d?t.virtual.slides.length:m.length;let v=[];const w=[],S=[];let E=i.slidesOffsetBefore;typeof E=="function"&&(E=i.slidesOffsetBefore.call(t));let O=i.slidesOffsetAfter;typeof O=="function"&&(O=i.slidesOffsetAfter.call(t));const A=t.snapGrid.length,T=t.slidesGrid.length;let C=i.spaceBetween,j=-E,L=0,N=0;if(typeof l>"u")return;typeof C=="string"&&C.indexOf("%")>=0?C=parseFloat(C.replace("%",""))/100*l:typeof C=="string"&&(C=parseFloat(C)),t.virtualSize=-C,m.forEach(Y=>{c?Y.style.marginLeft="":Y.style.marginRight="",Y.style.marginBottom="",Y.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(Zl(r,"--swiper-centered-offset-before",""),Zl(r,"--swiper-centered-offset-after",""));const z=i.grid&&i.grid.rows>1&&t.grid;z?t.grid.initSlides(m):t.grid&&t.grid.unsetSlides();let U;const _=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(Y=>typeof i.breakpoints[Y].slidesPerView<"u").length>0;for(let Y=0;Y<y;Y+=1){U=0;let X;if(m[Y]&&(X=m[Y]),z&&t.grid.updateSlide(Y,X,m),!(m[Y]&&Pi(X,"display")==="none")){if(i.slidesPerView==="auto"){_&&(m[Y].style[t.getDirectionLabel("width")]="");const te=getComputedStyle(X),ie=X.style.transform,oe=X.style.webkitTransform;if(ie&&(X.style.transform="none"),oe&&(X.style.webkitTransform="none"),i.roundLengths)U=t.isHorizontal()?rh(X,"width"):rh(X,"height");else{const re=e(te,"width"),B=e(te,"padding-left"),K=e(te,"padding-right"),Q=e(te,"margin-left"),ee=e(te,"margin-right"),H=te.getPropertyValue("box-sizing");if(H&&H==="border-box")U=re+Q+ee;else{const{clientWidth:F,offsetWidth:ne}=X;U=re+B+K+Q+ee+(ne-F)}}ie&&(X.style.transform=ie),oe&&(X.style.webkitTransform=oe),i.roundLengths&&(U=Math.floor(U))}else U=(l-(i.slidesPerView-1)*C)/i.slidesPerView,i.roundLengths&&(U=Math.floor(U)),m[Y]&&(m[Y].style[t.getDirectionLabel("width")]=`${U}px`);m[Y]&&(m[Y].swiperSlideSize=U),S.push(U),i.centeredSlides?(j=j+U/2+L/2+C,L===0&&Y!==0&&(j=j-l/2-C),Y===0&&(j=j-l/2-C),Math.abs(j)<1/1e3&&(j=0),i.roundLengths&&(j=Math.floor(j)),N%i.slidesPerGroup===0&&v.push(j),w.push(j)):(i.roundLengths&&(j=Math.floor(j)),(N-Math.min(t.params.slidesPerGroupSkip,N))%t.params.slidesPerGroup===0&&v.push(j),w.push(j),j=j+U+C),t.virtualSize+=U+C,L=U,N+=1}}if(t.virtualSize=Math.max(t.virtualSize,l)+O,c&&f&&(i.effect==="slide"||i.effect==="coverflow")&&(r.style.width=`${t.virtualSize+C}px`),i.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+C}px`),z&&t.grid.updateWrapperSize(U,v),!i.centeredSlides){const Y=[];for(let X=0;X<v.length;X+=1){let te=v[X];i.roundLengths&&(te=Math.floor(te)),v[X]<=t.virtualSize-l&&Y.push(te)}v=Y,Math.floor(t.virtualSize-l)-Math.floor(v[v.length-1])>1&&v.push(t.virtualSize-l)}if(d&&i.loop){const Y=S[0]+C;if(i.slidesPerGroup>1){const X=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/i.slidesPerGroup),te=Y*i.slidesPerGroup;for(let ie=0;ie<X;ie+=1)v.push(v[v.length-1]+te)}for(let X=0;X<t.virtual.slidesBefore+t.virtual.slidesAfter;X+=1)i.slidesPerGroup===1&&v.push(v[v.length-1]+Y),w.push(w[w.length-1]+Y),t.virtualSize+=Y}if(v.length===0&&(v=[0]),C!==0){const Y=t.isHorizontal()&&c?"marginLeft":t.getDirectionLabel("marginRight");m.filter((X,te)=>!i.cssMode||i.loop?!0:te!==m.length-1).forEach(X=>{X.style[Y]=`${C}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let Y=0;S.forEach(te=>{Y+=te+(C||0)}),Y-=C;const X=Y>l?Y-l:0;v=v.map(te=>te<=0?-E:te>X?X+O:te)}if(i.centerInsufficientSlides){let Y=0;S.forEach(te=>{Y+=te+(C||0)}),Y-=C;const X=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(Y+X<l){const te=(l-Y-X)/2;v.forEach((ie,oe)=>{v[oe]=ie-te}),w.forEach((ie,oe)=>{w[oe]=ie+te})}}if(Object.assign(t,{slides:m,snapGrid:v,slidesGrid:w,slidesSizesGrid:S}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Zl(r,"--swiper-centered-offset-before",`${-v[0]}px`),Zl(r,"--swiper-centered-offset-after",`${t.size/2-S[S.length-1]/2}px`);const Y=-t.snapGrid[0],X=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(te=>te+Y),t.slidesGrid=t.slidesGrid.map(te=>te+X)}if(y!==p&&t.emit("slidesLengthChange"),v.length!==A&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),w.length!==T&&t.emit("slidesGridLengthChange"),i.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!d&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const Y=`${i.containerModifierClass}backface-hidden`,X=t.el.classList.contains(Y);y<=i.maxBackfaceHiddenSlides?X||t.el.classList.add(Y):X&&t.el.classList.remove(Y)}}function YL(t){const e=this,i=[],r=e.virtual&&e.params.virtual.enabled;let o=0,l;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const c=f=>r?e.slides[e.getSlideIndexByData(f)]:e.slides[f];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(f=>{i.push(f)});else for(l=0;l<Math.ceil(e.params.slidesPerView);l+=1){const f=e.activeIndex+l;if(f>e.slides.length&&!r)break;i.push(c(f))}else i.push(c(e.activeIndex));for(l=0;l<i.length;l+=1)if(typeof i[l]<"u"){const f=i[l].offsetHeight;o=f>o?f:o}(o||o===0)&&(e.wrapperEl.style.height=`${o}px`)}function XL(){const t=this,e=t.slides,i=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(t.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-i-t.cssOverflowAdjustment()}const b4=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function FL(t){t===void 0&&(t=this&&this.translate||0);const e=this,i=e.params,{slides:r,rtlTranslate:o,snapGrid:l}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let c=-t;o&&(c=t),e.visibleSlidesIndexes=[],e.visibleSlides=[];let f=i.spaceBetween;typeof f=="string"&&f.indexOf("%")>=0?f=parseFloat(f.replace("%",""))/100*e.size:typeof f=="string"&&(f=parseFloat(f));for(let d=0;d<r.length;d+=1){const p=r[d];let m=p.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(m-=r[0].swiperSlideOffset);const y=(c+(i.centeredSlides?e.minTranslate():0)-m)/(p.swiperSlideSize+f),v=(c-l[0]+(i.centeredSlides?e.minTranslate():0)-m)/(p.swiperSlideSize+f),w=-(c-m),S=w+e.slidesSizesGrid[d],E=w>=0&&w<=e.size-e.slidesSizesGrid[d],O=w>=0&&w<e.size-1||S>1&&S<=e.size||w<=0&&S>=e.size;O&&(e.visibleSlides.push(p),e.visibleSlidesIndexes.push(d)),b4(p,O,i.slideVisibleClass),b4(p,E,i.slideFullyVisibleClass),p.progress=o?-y:y,p.originalProgress=o?-v:v}}function ZL(t){const e=this;if(typeof t>"u"){const m=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*m||0}const i=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:o,isBeginning:l,isEnd:c,progressLoop:f}=e;const d=l,p=c;if(r===0)o=0,l=!0,c=!0;else{o=(t-e.minTranslate())/r;const m=Math.abs(t-e.minTranslate())<1,y=Math.abs(t-e.maxTranslate())<1;l=m||o<=0,c=y||o>=1,m&&(o=0),y&&(o=1)}if(i.loop){const m=e.getSlideIndexByData(0),y=e.getSlideIndexByData(e.slides.length-1),v=e.slidesGrid[m],w=e.slidesGrid[y],S=e.slidesGrid[e.slidesGrid.length-1],E=Math.abs(t);E>=v?f=(E-v)/S:f=(E+S-w)/S,f>1&&(f-=1)}Object.assign(e,{progress:o,progressLoop:f,isBeginning:l,isEnd:c}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&e.updateSlidesProgress(t),l&&!d&&e.emit("reachBeginning toEdge"),c&&!p&&e.emit("reachEnd toEdge"),(d&&!l||p&&!c)&&e.emit("fromEdge"),e.emit("progress",o)}const t0=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function KL(){const t=this,{slides:e,params:i,slidesEl:r,activeIndex:o}=t,l=t.virtual&&i.virtual.enabled,c=t.grid&&i.grid&&i.grid.rows>1,f=y=>An(r,`.${i.slideClass}${y}, swiper-slide${y}`)[0];let d,p,m;if(l)if(i.loop){let y=o-t.virtual.slidesBefore;y<0&&(y=t.virtual.slides.length+y),y>=t.virtual.slides.length&&(y-=t.virtual.slides.length),d=f(`[data-swiper-slide-index="${y}"]`)}else d=f(`[data-swiper-slide-index="${o}"]`);else c?(d=e.find(y=>y.column===o),m=e.find(y=>y.column===o+1),p=e.find(y=>y.column===o-1)):d=e[o];d&&(c||(m=zL(d,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!m&&(m=e[0]),p=VL(d,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!p===0&&(p=e[e.length-1]))),e.forEach(y=>{t0(y,y===d,i.slideActiveClass),t0(y,y===m,i.slideNextClass),t0(y,y===p,i.slidePrevClass)}),t.emitSlidesClasses()}const gu=(t,e)=>{if(!t||t.destroyed||!t.params)return;const i=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,r=e.closest(i());if(r){let o=r.querySelector(`.${t.params.lazyPreloaderClass}`);!o&&t.isElement&&(r.shadowRoot?o=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(o=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},n0=(t,e)=>{if(!t.slides[e])return;const i=t.slides[e].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},sh=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const i=t.slides.length;if(!i||!e||e<0)return;e=Math.min(e,i);const r=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),o=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const c=o,f=[c-e];f.push(...Array.from({length:e}).map((d,p)=>c+r+p)),t.slides.forEach((d,p)=>{f.includes(d.column)&&n0(t,p)});return}const l=o+r-1;if(t.params.rewind||t.params.loop)for(let c=o-e;c<=l+e;c+=1){const f=(c%i+i)%i;(f<o||f>l)&&n0(t,f)}else for(let c=Math.max(o-e,0);c<=Math.min(l+e,i-1);c+=1)c!==o&&(c>l||c<o)&&n0(t,c)};function QL(t){const{slidesGrid:e,params:i}=t,r=t.rtlTranslate?t.translate:-t.translate;let o;for(let l=0;l<e.length;l+=1)typeof e[l+1]<"u"?r>=e[l]&&r<e[l+1]-(e[l+1]-e[l])/2?o=l:r>=e[l]&&r<e[l+1]&&(o=l+1):r>=e[l]&&(o=l);return i.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function WL(t){const e=this,i=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:o,activeIndex:l,realIndex:c,snapIndex:f}=e;let d=t,p;const m=w=>{let S=w-e.virtual.slidesBefore;return S<0&&(S=e.virtual.slides.length+S),S>=e.virtual.slides.length&&(S-=e.virtual.slides.length),S};if(typeof d>"u"&&(d=QL(e)),r.indexOf(i)>=0)p=r.indexOf(i);else{const w=Math.min(o.slidesPerGroupSkip,d);p=w+Math.floor((d-w)/o.slidesPerGroup)}if(p>=r.length&&(p=r.length-1),d===l&&!e.params.loop){p!==f&&(e.snapIndex=p,e.emit("snapIndexChange"));return}if(d===l&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=m(d);return}const y=e.grid&&o.grid&&o.grid.rows>1;let v;if(e.virtual&&o.virtual.enabled&&o.loop)v=m(d);else if(y){const w=e.slides.find(E=>E.column===d);let S=parseInt(w.getAttribute("data-swiper-slide-index"),10);Number.isNaN(S)&&(S=Math.max(e.slides.indexOf(w),0)),v=Math.floor(S/o.grid.rows)}else if(e.slides[d]){const w=e.slides[d].getAttribute("data-swiper-slide-index");w?v=parseInt(w,10):v=d}else v=d;Object.assign(e,{previousSnapIndex:f,snapIndex:p,previousRealIndex:c,realIndex:v,previousIndex:l,activeIndex:d}),e.initialized&&sh(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(c!==v&&e.emit("realIndexChange"),e.emit("slideChange"))}function JL(t,e){const i=this,r=i.params;let o=t.closest(`.${r.slideClass}, swiper-slide`);!o&&i.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(f=>{!o&&f.matches&&f.matches(`.${r.slideClass}, swiper-slide`)&&(o=f)});let l=!1,c;if(o){for(let f=0;f<i.slides.length;f+=1)if(i.slides[f]===o){l=!0,c=f;break}}if(o&&l)i.clickedSlide=o,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=c;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}r.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var eO={updateSize:qL,updateSlides:IL,updateAutoHeight:YL,updateSlidesOffset:XL,updateSlidesProgress:FL,updateProgress:ZL,updateSlidesClasses:KL,updateActiveIndex:WL,updateClickedSlide:JL};function tO(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:i,rtlTranslate:r,translate:o,wrapperEl:l}=e;if(i.virtualTranslate)return r?-o:o;if(i.cssMode)return o;let c=RL(l,t);return c+=e.cssOverflowAdjustment(),r&&(c=-c),c||0}function nO(t,e){const i=this,{rtlTranslate:r,params:o,wrapperEl:l,progress:c}=i;let f=0,d=0;const p=0;i.isHorizontal()?f=r?-t:t:d=t,o.roundLengths&&(f=Math.floor(f),d=Math.floor(d)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?f:d,o.cssMode?l[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-f:-d:o.virtualTranslate||(i.isHorizontal()?f-=i.cssOverflowAdjustment():d-=i.cssOverflowAdjustment(),l.style.transform=`translate3d(${f}px, ${d}px, ${p}px)`);let m;const y=i.maxTranslate()-i.minTranslate();y===0?m=0:m=(t-i.minTranslate())/y,m!==c&&i.updateProgress(t),i.emit("setTranslate",i.translate,e)}function iO(){return-this.snapGrid[0]}function aO(){return-this.snapGrid[this.snapGrid.length-1]}function rO(t,e,i,r,o){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),i===void 0&&(i=!0),r===void 0&&(r=!0);const l=this,{params:c,wrapperEl:f}=l;if(l.animating&&c.preventInteractionOnTransition)return!1;const d=l.minTranslate(),p=l.maxTranslate();let m;if(r&&t>d?m=d:r&&t<p?m=p:m=t,l.updateProgress(m),c.cssMode){const y=l.isHorizontal();if(e===0)f[y?"scrollLeft":"scrollTop"]=-m;else{if(!l.support.smoothScroll)return c5({swiper:l,targetPosition:-m,side:y?"left":"top"}),!0;f.scrollTo({[y?"left":"top"]:-m,behavior:"smooth"})}return!0}return e===0?(l.setTransition(0),l.setTranslate(m),i&&(l.emit("beforeTransitionStart",e,o),l.emit("transitionEnd"))):(l.setTransition(e),l.setTranslate(m),i&&(l.emit("beforeTransitionStart",e,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(v){!l||l.destroyed||v.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,i&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var sO={getTranslate:tO,setTranslate:nO,minTranslate:iO,maxTranslate:aO,translateTo:rO};function oO(t,e){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${t}ms`,i.wrapperEl.style.transitionDelay=t===0?"0ms":""),i.emit("setTransition",t,e)}function g5(t){let{swiper:e,runCallbacks:i,direction:r,step:o}=t;const{activeIndex:l,previousIndex:c}=e;let f=r;f||(l>c?f="next":l<c?f="prev":f="reset"),e.emit(`transition${o}`),i&&f==="reset"?e.emit(`slideResetTransition${o}`):i&&l!==c&&(e.emit(`slideChangeTransition${o}`),f==="next"?e.emit(`slideNextTransition${o}`):e.emit(`slidePrevTransition${o}`))}function lO(t,e){t===void 0&&(t=!0);const i=this,{params:r}=i;r.cssMode||(r.autoHeight&&i.updateAutoHeight(),g5({swiper:i,runCallbacks:t,direction:e,step:"Start"}))}function uO(t,e){t===void 0&&(t=!0);const i=this,{params:r}=i;i.animating=!1,!r.cssMode&&(i.setTransition(0),g5({swiper:i,runCallbacks:t,direction:e,step:"End"}))}var cO={setTransition:oO,transitionStart:lO,transitionEnd:uO};function fO(t,e,i,r,o){t===void 0&&(t=0),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));const l=this;let c=t;c<0&&(c=0);const{params:f,snapGrid:d,slidesGrid:p,previousIndex:m,activeIndex:y,rtlTranslate:v,wrapperEl:w,enabled:S}=l;if(!S&&!r&&!o||l.destroyed||l.animating&&f.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=l.params.speed);const E=Math.min(l.params.slidesPerGroupSkip,c);let O=E+Math.floor((c-E)/l.params.slidesPerGroup);O>=d.length&&(O=d.length-1);const A=-d[O];if(f.normalizeSlideIndex)for(let z=0;z<p.length;z+=1){const U=-Math.floor(A*100),_=Math.floor(p[z]*100),Y=Math.floor(p[z+1]*100);typeof p[z+1]<"u"?U>=_&&U<Y-(Y-_)/2?c=z:U>=_&&U<Y&&(c=z+1):U>=_&&(c=z)}if(l.initialized&&c!==y&&(!l.allowSlideNext&&(v?A>l.translate&&A>l.minTranslate():A<l.translate&&A<l.minTranslate())||!l.allowSlidePrev&&A>l.translate&&A>l.maxTranslate()&&(y||0)!==c))return!1;c!==(m||0)&&i&&l.emit("beforeSlideChangeStart"),l.updateProgress(A);let T;c>y?T="next":c<y?T="prev":T="reset";const C=l.virtual&&l.params.virtual.enabled;if(!(C&&o)&&(v&&-A===l.translate||!v&&A===l.translate))return l.updateActiveIndex(c),f.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),f.effect!=="slide"&&l.setTranslate(A),T!=="reset"&&(l.transitionStart(i,T),l.transitionEnd(i,T)),!1;if(f.cssMode){const z=l.isHorizontal(),U=v?A:-A;if(e===0)C&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),C&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{w[z?"scrollLeft":"scrollTop"]=U})):w[z?"scrollLeft":"scrollTop"]=U,C&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return c5({swiper:l,targetPosition:U,side:z?"left":"top"}),!0;w.scrollTo({[z?"left":"top"]:U,behavior:"smooth"})}return!0}const N=m5().isSafari;return C&&!o&&N&&l.isElement&&l.virtual.update(!1,!1,c),l.setTransition(e),l.setTranslate(A),l.updateActiveIndex(c),l.updateSlidesClasses(),l.emit("beforeTransitionStart",e,r),l.transitionStart(i,T),e===0?l.transitionEnd(i,T):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(U){!l||l.destroyed||U.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(i,T))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function dO(t,e,i,r){t===void 0&&(t=0),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let c=t;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)c=c+o.virtual.slidesBefore;else{let f;if(l){const v=c*o.params.grid.rows;f=o.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else f=o.getSlideIndexByData(c);const d=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:p}=o.params;let m=o.params.slidesPerView;m==="auto"?m=o.slidesPerViewDynamic():(m=Math.ceil(parseFloat(o.params.slidesPerView,10)),p&&m%2===0&&(m=m+1));let y=d-f<m;if(p&&(y=y||f<Math.ceil(m/2)),r&&p&&o.params.slidesPerView!=="auto"&&!l&&(y=!1),y){const v=p?f<o.activeIndex?"prev":"next":f-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?f+1:f-d+1,slideRealIndex:v==="next"?o.realIndex:void 0})}if(l){const v=c*o.params.grid.rows;c=o.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else c=o.getSlideIndexByData(c)}return requestAnimationFrame(()=>{o.slideTo(c,e,i,r)}),o}function hO(t,e,i){e===void 0&&(e=!0);const r=this,{enabled:o,params:l,animating:c}=r;if(!o||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);let f=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(f=Math.max(r.slidesPerViewDynamic("current",!0),1));const d=r.activeIndex<l.slidesPerGroupSkip?1:f,p=r.virtual&&l.virtual.enabled;if(l.loop){if(c&&!p&&l.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+d,t,e,i)}),!0}return l.rewind&&r.isEnd?r.slideTo(0,t,e,i):r.slideTo(r.activeIndex+d,t,e,i)}function pO(t,e,i){e===void 0&&(e=!0);const r=this,{params:o,snapGrid:l,slidesGrid:c,rtlTranslate:f,enabled:d,animating:p}=r;if(!d||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);const m=r.virtual&&o.virtual.enabled;if(o.loop){if(p&&!m&&o.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const y=f?r.translate:-r.translate;function v(T){return T<0?-Math.floor(Math.abs(T)):Math.floor(T)}const w=v(y),S=l.map(T=>v(T)),E=o.freeMode&&o.freeMode.enabled;let O=l[S.indexOf(w)-1];if(typeof O>"u"&&(o.cssMode||E)){let T;l.forEach((C,j)=>{w>=C&&(T=j)}),typeof T<"u"&&(O=E?l[T]:l[T>0?T-1:T])}let A=0;if(typeof O<"u"&&(A=c.indexOf(O),A<0&&(A=r.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(A=A-r.slidesPerViewDynamic("previous",!0)+1,A=Math.max(A,0))),o.rewind&&r.isBeginning){const T=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(T,t,e,i)}else if(o.loop&&r.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(A,t,e,i)}),!0;return r.slideTo(A,t,e,i)}function mO(t,e,i){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof t>"u"&&(t=r.params.speed),r.slideTo(r.activeIndex,t,e,i)}function gO(t,e,i,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);let l=o.activeIndex;const c=Math.min(o.params.slidesPerGroupSkip,l),f=c+Math.floor((l-c)/o.params.slidesPerGroup),d=o.rtlTranslate?o.translate:-o.translate;if(d>=o.snapGrid[f]){const p=o.snapGrid[f],m=o.snapGrid[f+1];d-p>(m-p)*r&&(l+=o.params.slidesPerGroup)}else{const p=o.snapGrid[f-1],m=o.snapGrid[f];d-p<=(m-p)*r&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,t,e,i)}function yO(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:i}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let o=t.getSlideIndexWhenGrid(t.clickedIndex),l;const c=t.isElement?"swiper-slide":`.${e.slideClass}`,f=t.grid&&t.params.grid&&t.params.grid.rows>1;if(e.loop){if(t.animating)return;l=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?t.slideToLoop(l):o>(f?(t.slides.length-r)/2-(t.params.grid.rows-1):t.slides.length-r)?(t.loopFix(),o=t.getSlideIndex(An(i,`${c}[data-swiper-slide-index="${l}"]`)[0]),Au(()=>{t.slideTo(o)})):t.slideTo(o)}else t.slideTo(o)}var vO={slideTo:fO,slideToLoop:dO,slideNext:hO,slidePrev:pO,slideReset:mO,slideToClosest:gO,slideToClickedSlide:yO};function xO(t,e){const i=this,{params:r,slidesEl:o}=i;if(!r.loop||i.virtual&&i.params.virtual.enabled)return;const l=()=>{An(o,`.${r.slideClass}, swiper-slide`).forEach((w,S)=>{w.setAttribute("data-swiper-slide-index",S)})},c=()=>{const v=An(o,`.${r.slideBlankClass}`);v.forEach(w=>{w.remove()}),v.length>0&&(i.recalcSlides(),i.updateSlides())},f=i.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||f)&&c();const d=r.slidesPerGroup*(f?r.grid.rows:1),p=i.slides.length%d!==0,m=f&&i.slides.length%r.grid.rows!==0,y=v=>{for(let w=0;w<v;w+=1){const S=i.isElement?Ou("swiper-slide",[r.slideBlankClass]):Ou("div",[r.slideClass,r.slideBlankClass]);i.slidesEl.append(S)}};if(p){if(r.loopAddBlankSlides){const v=d-i.slides.length%d;y(v),i.recalcSlides(),i.updateSlides()}else Lu("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(m){if(r.loopAddBlankSlides){const v=r.grid.rows-i.slides.length%r.grid.rows;y(v),i.recalcSlides(),i.updateSlides()}else Lu("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();i.loopFix({slideRealIndex:t,direction:r.centeredSlides?void 0:"next",initial:e})}function bO(t){let{slideRealIndex:e,slideTo:i=!0,direction:r,setTranslate:o,activeSlideIndex:l,initial:c,byController:f,byMousewheel:d}=t===void 0?{}:t;const p=this;if(!p.params.loop)return;p.emit("beforeLoopFix");const{slides:m,allowSlidePrev:y,allowSlideNext:v,slidesEl:w,params:S}=p,{centeredSlides:E,initialSlide:O}=S;if(p.allowSlidePrev=!0,p.allowSlideNext=!0,p.virtual&&S.virtual.enabled){i&&(!S.centeredSlides&&p.snapIndex===0?p.slideTo(p.virtual.slides.length,0,!1,!0):S.centeredSlides&&p.snapIndex<S.slidesPerView?p.slideTo(p.virtual.slides.length+p.snapIndex,0,!1,!0):p.snapIndex===p.snapGrid.length-1&&p.slideTo(p.virtual.slidesBefore,0,!1,!0)),p.allowSlidePrev=y,p.allowSlideNext=v,p.emit("loopFix");return}let A=S.slidesPerView;A==="auto"?A=p.slidesPerViewDynamic():(A=Math.ceil(parseFloat(S.slidesPerView,10)),E&&A%2===0&&(A=A+1));const T=S.slidesPerGroupAuto?A:S.slidesPerGroup;let C=E?Math.max(T,Math.ceil(A/2)):T;C%T!==0&&(C+=T-C%T),C+=S.loopAdditionalSlides,p.loopedSlides=C;const j=p.grid&&S.grid&&S.grid.rows>1;m.length<A+C||p.params.effect==="cards"&&m.length<A+C*2?Lu("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):j&&S.grid.fill==="row"&&Lu("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const L=[],N=[],z=j?Math.ceil(m.length/S.grid.rows):m.length,U=c&&z-O<A&&!E;let _=U?O:p.activeIndex;typeof l>"u"?l=p.getSlideIndex(m.find(B=>B.classList.contains(S.slideActiveClass))):_=l;const Y=r==="next"||!r,X=r==="prev"||!r;let te=0,ie=0;const re=(j?m[l].column:l)+(E&&typeof o>"u"?-A/2+.5:0);if(re<C){te=Math.max(C-re,T);for(let B=0;B<C-re;B+=1){const K=B-Math.floor(B/z)*z;if(j){const Q=z-K-1;for(let ee=m.length-1;ee>=0;ee-=1)m[ee].column===Q&&L.push(ee)}else L.push(z-K-1)}}else if(re+A>z-C){ie=Math.max(re-(z-C*2),T),U&&(ie=Math.max(ie,A-z+O+1));for(let B=0;B<ie;B+=1){const K=B-Math.floor(B/z)*z;j?m.forEach((Q,ee)=>{Q.column===K&&N.push(ee)}):N.push(K)}}if(p.__preventObserver__=!0,requestAnimationFrame(()=>{p.__preventObserver__=!1}),p.params.effect==="cards"&&m.length<A+C*2&&(N.includes(l)&&N.splice(N.indexOf(l),1),L.includes(l)&&L.splice(L.indexOf(l),1)),X&&L.forEach(B=>{m[B].swiperLoopMoveDOM=!0,w.prepend(m[B]),m[B].swiperLoopMoveDOM=!1}),Y&&N.forEach(B=>{m[B].swiperLoopMoveDOM=!0,w.append(m[B]),m[B].swiperLoopMoveDOM=!1}),p.recalcSlides(),S.slidesPerView==="auto"?p.updateSlides():j&&(L.length>0&&X||N.length>0&&Y)&&p.slides.forEach((B,K)=>{p.grid.updateSlide(K,B,p.slides)}),S.watchSlidesProgress&&p.updateSlidesOffset(),i){if(L.length>0&&X){if(typeof e>"u"){const B=p.slidesGrid[_],Q=p.slidesGrid[_+te]-B;d?p.setTranslate(p.translate-Q):(p.slideTo(_+Math.ceil(te),0,!1,!0),o&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-Q,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-Q))}else if(o){const B=j?L.length/S.grid.rows:L.length;p.slideTo(p.activeIndex+B,0,!1,!0),p.touchEventsData.currentTranslate=p.translate}}else if(N.length>0&&Y)if(typeof e>"u"){const B=p.slidesGrid[_],Q=p.slidesGrid[_-ie]-B;d?p.setTranslate(p.translate-Q):(p.slideTo(_-ie,0,!1,!0),o&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-Q,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-Q))}else{const B=j?N.length/S.grid.rows:N.length;p.slideTo(p.activeIndex-B,0,!1,!0)}}if(p.allowSlidePrev=y,p.allowSlideNext=v,p.controller&&p.controller.control&&!f){const B={slideRealIndex:e,direction:r,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(p.controller.control)?p.controller.control.forEach(K=>{!K.destroyed&&K.params.loop&&K.loopFix({...B,slideTo:K.params.slidesPerView===S.slidesPerView?i:!1})}):p.controller.control instanceof p.constructor&&p.controller.control.params.loop&&p.controller.control.loopFix({...B,slideTo:p.controller.control.params.slidesPerView===S.slidesPerView?i:!1})}p.emit("loopFix")}function wO(){const t=this,{params:e,slidesEl:i}=t;if(!e.loop||!i||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const r=[];t.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;r[l]=o}),t.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),r.forEach(o=>{i.append(o)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var SO={loopCreate:xO,loopFix:bO,loopDestroy:wO};function CO(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const i=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function TO(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var EO={setGrabCursor:CO,unsetGrabCursor:TO};function MO(t,e){e===void 0&&(e=this);function i(r){if(!r||r===Hn()||r===Tt())return null;r.assignedSlot&&(r=r.assignedSlot);const o=r.closest(t);return!o&&!r.getRootNode?null:o||i(r.getRootNode().host)}return i(e)}function w4(t,e,i){const r=Tt(),{params:o}=t,l=o.edgeSwipeDetection,c=o.edgeSwipeThreshold;return l&&(i<=c||i>=r.innerWidth-c)?l==="prevent"?(e.preventDefault(),!0):!1:!0}function AO(t){const e=this,i=Hn();let r=t;r.originalEvent&&(r=r.originalEvent);const o=e.touchEventsData;if(r.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==r.pointerId)return;o.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(o.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){w4(e,r,r.targetTouches[0].pageX);return}const{params:l,touches:c,enabled:f}=e;if(!f||!l.simulateTouch&&r.pointerType==="mouse"||e.animating&&l.preventInteractionOnTransition)return;!e.animating&&l.cssMode&&l.loop&&e.loopFix();let d=r.target;if(l.touchEventsTarget==="wrapper"&&!HL(d,e.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||o.isTouched&&o.isMoved)return;const p=!!l.noSwipingClass&&l.noSwipingClass!=="",m=r.composedPath?r.composedPath():r.path;p&&r.target&&r.target.shadowRoot&&m&&(d=m[0]);const y=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(l.noSwiping&&(v?MO(y,d):d.closest(y))){e.allowClick=!0;return}if(l.swipeHandler&&!d.closest(l.swipeHandler))return;c.currentX=r.pageX,c.currentY=r.pageY;const w=c.currentX,S=c.currentY;if(!w4(e,r,w))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),c.startX=w,c.startY=S,o.touchStartTime=ii(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let E=!0;d.matches(o.focusableElements)&&(E=!1,d.nodeName==="SELECT"&&(o.isTouched=!1)),i.activeElement&&i.activeElement.matches(o.focusableElements)&&i.activeElement!==d&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!d.matches(o.focusableElements))&&i.activeElement.blur();const O=E&&e.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||O)&&!d.isContentEditable&&r.preventDefault(),l.freeMode&&l.freeMode.enabled&&e.freeMode&&e.animating&&!l.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function LO(t){const e=Hn(),i=this,r=i.touchEventsData,{params:o,touches:l,rtlTranslate:c,enabled:f}=i;if(!f||!o.simulateTouch&&t.pointerType==="mouse")return;let d=t;if(d.originalEvent&&(d=d.originalEvent),d.type==="pointermove"&&(r.touchId!==null||d.pointerId!==r.pointerId))return;let p;if(d.type==="touchmove"){if(p=[...d.changedTouches].find(L=>L.identifier===r.touchId),!p||p.identifier!==r.touchId)return}else p=d;if(!r.isTouched){r.startMoving&&r.isScrolling&&i.emit("touchMoveOpposite",d);return}const m=p.pageX,y=p.pageY;if(d.preventedByNestedSwiper){l.startX=m,l.startY=y;return}if(!i.allowTouchMove){d.target.matches(r.focusableElements)||(i.allowClick=!1),r.isTouched&&(Object.assign(l,{startX:m,startY:y,currentX:m,currentY:y}),r.touchStartTime=ii());return}if(o.touchReleaseOnEdges&&!o.loop)if(i.isVertical()){if(y<l.startY&&i.translate<=i.maxTranslate()||y>l.startY&&i.translate>=i.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(c&&(m>l.startX&&-i.translate<=i.maxTranslate()||m<l.startX&&-i.translate>=i.minTranslate()))return;if(!c&&(m<l.startX&&i.translate<=i.maxTranslate()||m>l.startX&&i.translate>=i.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(r.focusableElements)&&e.activeElement!==d.target&&d.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&d.target===e.activeElement&&d.target.matches(r.focusableElements)){r.isMoved=!0,i.allowClick=!1;return}r.allowTouchCallbacks&&i.emit("touchMove",d),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=m,l.currentY=y;const v=l.currentX-l.startX,w=l.currentY-l.startY;if(i.params.threshold&&Math.sqrt(v**2+w**2)<i.params.threshold)return;if(typeof r.isScrolling>"u"){let L;i.isHorizontal()&&l.currentY===l.startY||i.isVertical()&&l.currentX===l.startX?r.isScrolling=!1:v*v+w*w>=25&&(L=Math.atan2(Math.abs(w),Math.abs(v))*180/Math.PI,r.isScrolling=i.isHorizontal()?L>o.touchAngle:90-L>o.touchAngle)}if(r.isScrolling&&i.emit("touchMoveOpposite",d),typeof r.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(r.startMoving=!0),r.isScrolling||d.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;i.allowClick=!1,!o.cssMode&&d.cancelable&&d.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&d.stopPropagation();let S=i.isHorizontal()?v:w,E=i.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(S=Math.abs(S)*(c?1:-1),E=Math.abs(E)*(c?1:-1)),l.diff=S,S*=o.touchRatio,c&&(S=-S,E=-E);const O=i.touchesDirection;i.swipeDirection=S>0?"prev":"next",i.touchesDirection=E>0?"prev":"next";const A=i.params.loop&&!o.cssMode,T=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!r.isMoved){if(A&&T&&i.loopFix({direction:i.swipeDirection}),r.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const L=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(L)}r.allowMomentumBounce=!1,o.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",d)}if(new Date().getTime(),o._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&O!==i.touchesDirection&&A&&T&&Math.abs(S)>=1){Object.assign(l,{startX:m,startY:y,currentX:m,currentY:y,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}i.emit("sliderMove",d),r.isMoved=!0,r.currentTranslate=S+r.startTranslate;let C=!0,j=o.resistanceRatio;if(o.touchReleaseOnEdges&&(j=0),S>0?(A&&T&&r.allowThresholdMove&&r.currentTranslate>(o.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>i.minTranslate()&&(C=!1,o.resistance&&(r.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+r.startTranslate+S)**j))):S<0&&(A&&T&&r.allowThresholdMove&&r.currentTranslate<(o.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(o.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),r.currentTranslate<i.maxTranslate()&&(C=!1,o.resistance&&(r.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-r.startTranslate-S)**j))),C&&(d.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(r.currentTranslate=r.startTranslate),o.threshold>0)if(Math.abs(S)>o.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,r.currentTranslate=r.startTranslate,l.diff=i.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{r.currentTranslate=r.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&i.freeMode||o.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(r.currentTranslate),i.setTranslate(r.currentTranslate))}function OO(t){const e=this,i=e.touchEventsData;let r=t;r.originalEvent&&(r=r.originalEvent);let o;if(r.type==="touchend"||r.type==="touchcancel"){if(o=[...r.changedTouches].find(L=>L.identifier===i.touchId),!o||o.identifier!==i.touchId)return}else{if(i.touchId!==null||r.pointerId!==i.pointerId)return;o=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;i.pointerId=null,i.touchId=null;const{params:c,touches:f,rtlTranslate:d,slidesGrid:p,enabled:m}=e;if(!m||!c.simulateTouch&&r.pointerType==="mouse")return;if(i.allowTouchCallbacks&&e.emit("touchEnd",r),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&c.grabCursor&&e.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}c.grabCursor&&i.isMoved&&i.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const y=ii(),v=y-i.touchStartTime;if(e.allowClick){const L=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(L&&L[0]||r.target,L),e.emit("tap click",r),v<300&&y-i.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(i.lastClickTime=ii(),Au(()=>{e.destroyed||(e.allowClick=!0)}),!i.isTouched||!i.isMoved||!e.swipeDirection||f.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let w;if(c.followFinger?w=d?e.translate:-e.translate:w=-i.currentTranslate,c.cssMode)return;if(c.freeMode&&c.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:w});return}const S=w>=-e.maxTranslate()&&!e.params.loop;let E=0,O=e.slidesSizesGrid[0];for(let L=0;L<p.length;L+=L<c.slidesPerGroupSkip?1:c.slidesPerGroup){const N=L<c.slidesPerGroupSkip-1?1:c.slidesPerGroup;typeof p[L+N]<"u"?(S||w>=p[L]&&w<p[L+N])&&(E=L,O=p[L+N]-p[L]):(S||w>=p[L])&&(E=L,O=p[p.length-1]-p[p.length-2])}let A=null,T=null;c.rewind&&(e.isBeginning?T=c.virtual&&c.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(A=0));const C=(w-p[E])/O,j=E<c.slidesPerGroupSkip-1?1:c.slidesPerGroup;if(v>c.longSwipesMs){if(!c.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(C>=c.longSwipesRatio?e.slideTo(c.rewind&&e.isEnd?A:E+j):e.slideTo(E)),e.swipeDirection==="prev"&&(C>1-c.longSwipesRatio?e.slideTo(E+j):T!==null&&C<0&&Math.abs(C)>c.longSwipesRatio?e.slideTo(T):e.slideTo(E))}else{if(!c.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(E+j):e.slideTo(E):(e.swipeDirection==="next"&&e.slideTo(A!==null?A:E+j),e.swipeDirection==="prev"&&e.slideTo(T!==null?T:E))}}function S4(){const t=this,{params:e,el:i}=t;if(i&&i.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:o,snapGrid:l}=t,c=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const f=c&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!f?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!c?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=o,t.allowSlideNext=r,t.params.watchOverflow&&l!==t.snapGrid&&t.checkOverflow()}function RO(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function jO(){const t=this,{wrapperEl:e,rtlTranslate:i,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let o;const l=t.maxTranslate()-t.minTranslate();l===0?o=0:o=(t.translate-t.minTranslate())/l,o!==t.progress&&t.updateProgress(i?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function DO(t){const e=this;gu(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function HO(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const y5=(t,e)=>{const i=Hn(),{params:r,el:o,wrapperEl:l,device:c}=t,f=!!r.nested,d=e==="on"?"addEventListener":"removeEventListener",p=e;!o||typeof o=="string"||(i[d]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:f}),o[d]("touchstart",t.onTouchStart,{passive:!1}),o[d]("pointerdown",t.onTouchStart,{passive:!1}),i[d]("touchmove",t.onTouchMove,{passive:!1,capture:f}),i[d]("pointermove",t.onTouchMove,{passive:!1,capture:f}),i[d]("touchend",t.onTouchEnd,{passive:!0}),i[d]("pointerup",t.onTouchEnd,{passive:!0}),i[d]("pointercancel",t.onTouchEnd,{passive:!0}),i[d]("touchcancel",t.onTouchEnd,{passive:!0}),i[d]("pointerout",t.onTouchEnd,{passive:!0}),i[d]("pointerleave",t.onTouchEnd,{passive:!0}),i[d]("contextmenu",t.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&o[d]("click",t.onClick,!0),r.cssMode&&l[d]("scroll",t.onScroll),r.updateOnWindowResize?t[p](c.ios||c.android?"resize orientationchange observerUpdate":"resize observerUpdate",S4,!0):t[p]("observerUpdate",S4,!0),o[d]("load",t.onLoad,{capture:!0}))};function VO(){const t=this,{params:e}=t;t.onTouchStart=AO.bind(t),t.onTouchMove=LO.bind(t),t.onTouchEnd=OO.bind(t),t.onDocumentTouchStart=HO.bind(t),e.cssMode&&(t.onScroll=jO.bind(t)),t.onClick=RO.bind(t),t.onLoad=DO.bind(t),y5(t,"on")}function zO(){y5(this,"off")}var kO={attachEvents:VO,detachEvents:zO};const C4=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function NO(){const t=this,{realIndex:e,initialized:i,params:r,el:o}=t,l=r.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const c=Hn(),f=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",d=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?t.el:c.querySelector(r.breakpointsBase),p=t.getBreakpoint(l,f,d);if(!p||t.currentBreakpoint===p)return;const y=(p in l?l[p]:void 0)||t.originalParams,v=C4(t,r),w=C4(t,y),S=t.params.grabCursor,E=y.grabCursor,O=r.enabled;v&&!w?(o.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),t.emitContainerClasses()):!v&&w&&(o.classList.add(`${r.containerModifierClass}grid`),(y.grid.fill&&y.grid.fill==="column"||!y.grid.fill&&r.grid.fill==="column")&&o.classList.add(`${r.containerModifierClass}grid-column`),t.emitContainerClasses()),S&&!E?t.unsetGrabCursor():!S&&E&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(N=>{if(typeof y[N]>"u")return;const z=r[N]&&r[N].enabled,U=y[N]&&y[N].enabled;z&&!U&&t[N].disable(),!z&&U&&t[N].enable()});const A=y.direction&&y.direction!==r.direction,T=r.loop&&(y.slidesPerView!==r.slidesPerView||A),C=r.loop;A&&i&&t.changeDirection(),Xt(t.params,y);const j=t.params.enabled,L=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),O&&!j?t.disable():!O&&j&&t.enable(),t.currentBreakpoint=p,t.emit("_beforeBreakpoint",y),i&&(T?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!C&&L?(t.loopCreate(e),t.updateSlides()):C&&!L&&t.loopDestroy()),t.emit("breakpoint",y)}function PO(t,e,i){if(e===void 0&&(e="window"),!t||e==="container"&&!i)return;let r=!1;const o=Tt(),l=e==="window"?o.innerHeight:i.clientHeight,c=Object.keys(t).map(f=>{if(typeof f=="string"&&f.indexOf("@")===0){const d=parseFloat(f.substr(1));return{value:l*d,point:f}}return{value:f,point:f}});c.sort((f,d)=>parseInt(f.value,10)-parseInt(d.value,10));for(let f=0;f<c.length;f+=1){const{point:d,value:p}=c[f];e==="window"?o.matchMedia(`(min-width: ${p}px)`).matches&&(r=d):p<=i.clientWidth&&(r=d)}return r||"max"}var BO={setBreakpoint:NO,getBreakpoint:PO};function _O(t,e){const i=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(o=>{r[o]&&i.push(e+o)}):typeof r=="string"&&i.push(e+r)}),i}function UO(){const t=this,{classNames:e,params:i,rtl:r,el:o,device:l}=t,c=_O(["initialized",i.direction,{"free-mode":t.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:r},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);e.push(...c),o.classList.add(...e),t.emitContainerClasses()}function $O(){const t=this,{el:e,classNames:i}=t;!e||typeof e=="string"||(e.classList.remove(...i),t.emitContainerClasses())}var GO={addClasses:UO,removeClasses:$O};function qO(){const t=this,{isLocked:e,params:i}=t,{slidesOffsetBefore:r}=i;if(r){const o=t.slides.length-1,l=t.slidesGrid[o]+t.slidesSizesGrid[o]+r*2;t.isLocked=t.size>l}else t.isLocked=t.snapGrid.length===1;i.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),i.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var IO={checkOverflow:qO},oh={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function YO(t,e){return function(r){r===void 0&&(r={});const o=Object.keys(r)[0],l=r[o];if(typeof l!="object"||l===null){Xt(e,r);return}if(t[o]===!0&&(t[o]={enabled:!0}),o==="navigation"&&t[o]&&t[o].enabled&&!t[o].prevEl&&!t[o].nextEl&&(t[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&t[o]&&t[o].enabled&&!t[o].el&&(t[o].auto=!0),!(o in t&&"enabled"in l)){Xt(e,r);return}typeof t[o]=="object"&&!("enabled"in t[o])&&(t[o].enabled=!0),t[o]||(t[o]={enabled:!1}),Xt(e,r)}}const i0={eventsEmitter:GL,update:eO,translate:sO,transition:cO,slide:vO,loop:SO,grabCursor:EO,events:kO,breakpoints:BO,checkOverflow:IO,classes:GO},a0={};let mp=class ti{constructor(){let e,i;for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?i=o[0]:[e,i]=o,i||(i={}),i=Xt({},i),e&&!i.el&&(i.el=e);const c=Hn();if(i.el&&typeof i.el=="string"&&c.querySelectorAll(i.el).length>1){const m=[];return c.querySelectorAll(i.el).forEach(y=>{const v=Xt({},i,{el:y});m.push(new ti(v))}),m}const f=this;f.__swiper__=!0,f.support=h5(),f.device=p5({userAgent:i.userAgent}),f.browser=m5(),f.eventsListeners={},f.eventsAnyListeners=[],f.modules=[...f.__modules__],i.modules&&Array.isArray(i.modules)&&f.modules.push(...i.modules);const d={};f.modules.forEach(m=>{m({params:i,swiper:f,extendParams:YO(i,d),on:f.on.bind(f),once:f.once.bind(f),off:f.off.bind(f),emit:f.emit.bind(f)})});const p=Xt({},oh,d);return f.params=Xt({},p,a0,i),f.originalParams=Xt({},f.params),f.passedParams=Xt({},i),f.params&&f.params.on&&Object.keys(f.params.on).forEach(m=>{f.on(m,f.params.on[m])}),f.params&&f.params.onAny&&f.onAny(f.params.onAny),Object.assign(f,{enabled:f.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return f.params.direction==="horizontal"},isVertical(){return f.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:f.params.allowSlideNext,allowSlidePrev:f.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:f.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:f.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),f.emit("_swiper"),f.params.init&&f.init(),f}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:i,params:r}=this,o=An(i,`.${r.slideClass}, swiper-slide`),l=Ru(o[0]);return Ru(e)-l}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(i=>i.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:i,params:r}=e;e.slides=An(i,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,i){const r=this;e=Math.min(Math.max(e,0),1);const o=r.minTranslate(),c=(r.maxTranslate()-o)*e+o;r.translateTo(c,typeof i>"u"?0:i),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",i.join(" "))}getSlideClasses(e){const i=this;return i.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=[];e.slides.forEach(r=>{const o=e.getSlideClasses(r);i.push({slideEl:r,classNames:o}),e.emit("_slideClass",r,o)}),e.emit("_slideClasses",i)}slidesPerViewDynamic(e,i){e===void 0&&(e="current"),i===void 0&&(i=!1);const r=this,{params:o,slides:l,slidesGrid:c,slidesSizesGrid:f,size:d,activeIndex:p}=r;let m=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let y=l[p]?Math.ceil(l[p].swiperSlideSize):0,v;for(let w=p+1;w<l.length;w+=1)l[w]&&!v&&(y+=Math.ceil(l[w].swiperSlideSize),m+=1,y>d&&(v=!0));for(let w=p-1;w>=0;w-=1)l[w]&&!v&&(y+=l[w].swiperSlideSize,m+=1,y>d&&(v=!0))}else if(e==="current")for(let y=p+1;y<l.length;y+=1)(i?c[y]+f[y]-c[p]<d:c[y]-c[p]<d)&&(m+=1);else for(let y=p-1;y>=0;y-=1)c[p]-c[y]<d&&(m+=1);return m}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:i,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(c=>{c.complete&&gu(e,c)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function o(){const c=e.rtlTranslate?e.translate*-1:e.translate,f=Math.min(Math.max(c,e.maxTranslate()),e.minTranslate());e.setTranslate(f),e.updateActiveIndex(),e.updateSlidesClasses()}let l;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)o(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const c=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;l=e.slideTo(c.length-1,0,!1,!0)}else l=e.slideTo(e.activeIndex,0,!1,!0);l||o()}r.watchOverflow&&i!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,i){i===void 0&&(i=!0);const r=this,o=r.params.direction;return e||(e=o==="horizontal"?"vertical":"horizontal"),e===o||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${o}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(l=>{e==="vertical"?l.style.width="":l.style.height=""}),r.emit("changeDirection"),i&&r.update()),r}changeLanguageDirection(e){const i=this;i.rtl&&e==="rtl"||!i.rtl&&e==="ltr"||(i.rtl=e==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(e){const i=this;if(i.mounted)return!0;let r=e||i.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=i,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const o=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let c=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(o()):An(r,o())[0];return!c&&i.params.createElements&&(c=Ou("div",i.params.wrapperClass),r.append(c),An(r,`.${i.params.slideClass}`).forEach(f=>{c.append(f)})),Object.assign(i,{el:r,wrapperEl:c,slidesEl:i.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:c,hostEl:i.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Pi(r,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Pi(r,"direction")==="rtl"),wrongRTL:Pi(c,"display")==="-webkit-box"}),!0}init(e){const i=this;if(i.initialized||i.mount(e)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(void 0,!0),i.attachEvents();const o=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&o.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?gu(i,l):l.addEventListener("load",c=>{gu(i,c.target)})}),sh(i),i.initialized=!0,sh(i),i.emit("init"),i.emit("afterInit"),i}destroy(e,i){e===void 0&&(e=!0),i===void 0&&(i=!0);const r=this,{params:o,el:l,wrapperEl:c,slides:f}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),o.loop&&r.loopDestroy(),i&&(r.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),c&&c.removeAttribute("style"),f&&f.length&&f.forEach(d=>{d.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),d.removeAttribute("style"),d.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(d=>{r.off(d)}),e!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),LL(r)),r.destroyed=!0),null}static extendDefaults(e){Xt(a0,e)}static get extendedDefaults(){return a0}static get defaults(){return oh}static installModule(e){ti.prototype.__modules__||(ti.prototype.__modules__=[]);const i=ti.prototype.__modules__;typeof e=="function"&&i.indexOf(e)<0&&i.push(e)}static use(e){return Array.isArray(e)?(e.forEach(i=>ti.installModule(i)),ti):(ti.installModule(e),ti)}};Object.keys(i0).forEach(t=>{Object.keys(i0[t]).forEach(e=>{mp.prototype[e]=i0[t][e]})});mp.use([UL,$L]);const v5=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function xa(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function br(t,e){const i=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:xa(e[r])&&xa(t[r])&&Object.keys(e[r]).length>0?e[r].__swiper__?t[r]=e[r]:br(t[r],e[r]):t[r]=e[r]})}function x5(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function b5(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function w5(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function S5(t){t===void 0&&(t="");const e=t.split(" ").map(r=>r.trim()).filter(r=>!!r),i=[];return e.forEach(r=>{i.indexOf(r)<0&&i.push(r)}),i.join(" ")}function XO(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function FO(t){let{swiper:e,slides:i,passedParams:r,changedParams:o,nextEl:l,prevEl:c,scrollbarEl:f,paginationEl:d}=t;const p=o.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:m,pagination:y,navigation:v,scrollbar:w,virtual:S,thumbs:E}=e;let O,A,T,C,j,L,N,z;o.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&!r.thumbs.swiper.destroyed&&m.thumbs&&(!m.thumbs.swiper||m.thumbs.swiper.destroyed)&&(O=!0),o.includes("controller")&&r.controller&&r.controller.control&&m.controller&&!m.controller.control&&(A=!0),o.includes("pagination")&&r.pagination&&(r.pagination.el||d)&&(m.pagination||m.pagination===!1)&&y&&!y.el&&(T=!0),o.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||f)&&(m.scrollbar||m.scrollbar===!1)&&w&&!w.el&&(C=!0),o.includes("navigation")&&r.navigation&&(r.navigation.prevEl||c)&&(r.navigation.nextEl||l)&&(m.navigation||m.navigation===!1)&&v&&!v.prevEl&&!v.nextEl&&(j=!0);const U=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),m[_].prevEl=void 0,m[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),m[_].el=void 0,e[_].el=void 0))};o.includes("loop")&&e.isElement&&(m.loop&&!r.loop?L=!0:!m.loop&&r.loop?N=!0:z=!0),p.forEach(_=>{if(xa(m[_])&&xa(r[_]))Object.assign(m[_],r[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in r[_]&&!r[_].enabled&&U(_);else{const Y=r[_];(Y===!0||Y===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?Y===!1&&U(_):m[_]=r[_]}}),p.includes("controller")&&!A&&e.controller&&e.controller.control&&m.controller&&m.controller.control&&(e.controller.control=m.controller.control),o.includes("children")&&i&&S&&m.virtual.enabled?(S.slides=i,S.update(!0)):o.includes("virtual")&&S&&m.virtual.enabled&&(i&&(S.slides=i),S.update(!0)),o.includes("children")&&i&&m.loop&&(z=!0),O&&E.init()&&E.update(!0),A&&(e.controller.control=m.controller.control),T&&(e.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-pagination"),d.part.add("pagination"),e.el.appendChild(d)),d&&(m.pagination.el=d),y.init(),y.render(),y.update()),C&&(e.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-scrollbar"),f.part.add("scrollbar"),e.el.appendChild(f)),f&&(m.scrollbar.el=f),w.init(),w.updateSize(),w.setTranslate()),j&&(e.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),ju(l,e.hostEl.constructor.nextButtonSvg),l.part.add("button-next"),e.el.appendChild(l)),(!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-button-prev"),ju(c,e.hostEl.constructor.prevButtonSvg),c.part.add("button-prev"),e.el.appendChild(c))),l&&(m.navigation.nextEl=l),c&&(m.navigation.prevEl=c),v.init(),v.update()),o.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),o.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),o.includes("direction")&&e.changeDirection(r.direction,!1),(L||z)&&e.loopDestroy(),(N||z)&&e.loopCreate(),e.update()}function ZO(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const i={on:{}},r={},o={};br(i,oh),i._emitClasses=!0,i.init=!1;const l={},c=v5.map(d=>d.replace(/_/,"")),f=Object.assign({},t);return Object.keys(f).forEach(d=>{typeof t[d]>"u"||(c.indexOf(d)>=0?xa(t[d])?(i[d]={},o[d]={},br(i[d],t[d]),br(o[d],t[d])):(i[d]=t[d],o[d]=t[d]):d.search(/on[A-Z]/)===0&&typeof t[d]=="function"?e?r[`${d[2].toLowerCase()}${d.substr(3)}`]=t[d]:i.on[`${d[2].toLowerCase()}${d.substr(3)}`]=t[d]:l[d]=t[d])}),["navigation","pagination","scrollbar"].forEach(d=>{i[d]===!0&&(i[d]={}),i[d]===!1&&delete i[d]}),{params:i,passedParams:o,rest:l,events:r}}function KO(t,e){let{el:i,nextEl:r,prevEl:o,paginationEl:l,scrollbarEl:c,swiper:f}=t;x5(e)&&r&&o&&(f.params.navigation.nextEl=r,f.originalParams.navigation.nextEl=r,f.params.navigation.prevEl=o,f.originalParams.navigation.prevEl=o),b5(e)&&l&&(f.params.pagination.el=l,f.originalParams.pagination.el=l),w5(e)&&c&&(f.params.scrollbar.el=c,f.originalParams.scrollbar.el=c),f.init(i)}function QO(t,e,i,r,o){const l=[];if(!e)return l;const c=d=>{l.indexOf(d)<0&&l.push(d)};if(i&&r){const d=r.map(o),p=i.map(o);d.join("")!==p.join("")&&c("children"),r.length!==i.length&&c("children")}return v5.filter(d=>d[0]==="_").map(d=>d.replace(/_/,"")).forEach(d=>{if(d in t&&d in e)if(xa(t[d])&&xa(e[d])){const p=Object.keys(t[d]),m=Object.keys(e[d]);p.length!==m.length?c(d):(p.forEach(y=>{t[d][y]!==e[d][y]&&c(d)}),m.forEach(y=>{t[d][y]!==e[d][y]&&c(d)}))}else t[d]!==e[d]&&c(d)}),l}const WO=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.emit("_virtualUpdated"),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function Du(){return Du=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},Du.apply(this,arguments)}function C5(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function T5(t){const e=[];return Oe.Children.toArray(t).forEach(i=>{C5(i)?e.push(i):i.props&&i.props.children&&T5(i.props.children).forEach(r=>e.push(r))}),e}function JO(t){const e=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Oe.Children.toArray(t).forEach(r=>{if(C5(r))e.push(r);else if(r.props&&r.props.slot&&i[r.props.slot])i[r.props.slot].push(r);else if(r.props&&r.props.children){const o=T5(r.props.children);o.length>0?o.forEach(l=>e.push(l)):i["container-end"].push(r)}else i["container-end"].push(r)}),{slides:e,slots:i}}function eR(t,e,i){if(!i)return null;const r=m=>{let y=m;return m<0?y=e.length+m:y>=e.length&&(y=y-e.length),y},o=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`},{from:l,to:c}=i,f=t.params.loop?-e.length:0,d=t.params.loop?e.length*2:e.length,p=[];for(let m=f;m<d;m+=1)m>=l&&m<=c&&p.push(e[r(m)]);return p.map((m,y)=>Oe.cloneElement(m,{swiper:t,style:o,key:m.props.virtualIndex||m.key||`slide-${y}`}))}function Js(t,e){return typeof window>"u"?R.useEffect(t,e):R.useLayoutEffect(t,e)}const T4=R.createContext(null),tR=R.createContext(null),Vn=R.forwardRef(function(t,e){let{className:i,tag:r="div",wrapperTag:o="div",children:l,onSwiper:c,...f}=t===void 0?{}:t,d=!1;const[p,m]=R.useState("swiper"),[y,v]=R.useState(null),[w,S]=R.useState(!1),E=R.useRef(!1),O=R.useRef(null),A=R.useRef(null),T=R.useRef(null),C=R.useRef(null),j=R.useRef(null),L=R.useRef(null),N=R.useRef(null),z=R.useRef(null),{params:U,passedParams:_,rest:Y,events:X}=ZO(f),{slides:te,slots:ie}=JO(l),oe=()=>{S(!w)};Object.assign(U.on,{_containerClasses(ee,H){m(H)}});const re=()=>{Object.assign(U.on,X),d=!0;const ee={...U};if(delete ee.wrapperClass,A.current=new mp(ee),A.current.virtual&&A.current.params.virtual.enabled){A.current.virtual.slides=te;const H={cache:!1,slides:te,renderExternal:v,renderExternalUpdate:!1};br(A.current.params.virtual,H),br(A.current.originalParams.virtual,H)}};O.current||re(),A.current&&A.current.on("_beforeBreakpoint",oe);const B=()=>{d||!X||!A.current||Object.keys(X).forEach(ee=>{A.current.on(ee,X[ee])})},K=()=>{!X||!A.current||Object.keys(X).forEach(ee=>{A.current.off(ee,X[ee])})};R.useEffect(()=>()=>{A.current&&A.current.off("_beforeBreakpoint",oe)}),R.useEffect(()=>{!E.current&&A.current&&(A.current.emitSlidesClasses(),E.current=!0)}),Js(()=>{if(e&&(e.current=O.current),!!O.current)return A.current.destroyed&&re(),KO({el:O.current,nextEl:j.current,prevEl:L.current,paginationEl:N.current,scrollbarEl:z.current,swiper:A.current},U),c&&!A.current.destroyed&&c(A.current),()=>{A.current&&!A.current.destroyed&&A.current.destroy(!0,!1)}},[]),Js(()=>{B();const ee=QO(_,T.current,te,C.current,H=>H.key);return T.current=_,C.current=te,ee.length&&A.current&&!A.current.destroyed&&FO({swiper:A.current,slides:te,passedParams:_,changedParams:ee,nextEl:j.current,prevEl:L.current,scrollbarEl:z.current,paginationEl:N.current}),()=>{K()}}),Js(()=>{WO(A.current)},[y]);function Q(){return U.virtual?eR(A.current,te,y):te.map((ee,H)=>Oe.cloneElement(ee,{swiper:A.current,swiperSlideIndex:H}))}return Oe.createElement(r,Du({ref:O,className:S5(`${p}${i?` ${i}`:""}`)},Y),Oe.createElement(tR.Provider,{value:A.current},ie["container-start"],Oe.createElement(o,{className:XO(U.wrapperClass)},ie["wrapper-start"],Q(),ie["wrapper-end"]),x5(U)&&Oe.createElement(Oe.Fragment,null,Oe.createElement("div",{ref:L,className:"swiper-button-prev"}),Oe.createElement("div",{ref:j,className:"swiper-button-next"})),w5(U)&&Oe.createElement("div",{ref:z,className:"swiper-scrollbar"}),b5(U)&&Oe.createElement("div",{ref:N,className:"swiper-pagination"}),ie["container-end"]))});Vn.displayName="Swiper";const zn=R.forwardRef(function(t,e){let{tag:i="div",children:r,className:o="",swiper:l,zoom:c,lazy:f,virtualIndex:d,swiperSlideIndex:p,...m}=t===void 0?{}:t;const y=R.useRef(null),[v,w]=R.useState("swiper-slide"),[S,E]=R.useState(!1);function O(j,L,N){L===y.current&&w(N)}Js(()=>{if(typeof p<"u"&&(y.current.swiperSlideIndex=p),e&&(e.current=y.current),!(!y.current||!l)){if(l.destroyed){v!=="swiper-slide"&&w("swiper-slide");return}return l.on("_slideClass",O),()=>{l&&l.off("_slideClass",O)}}}),Js(()=>{l&&y.current&&!l.destroyed&&w(l.getSlideClasses(y.current))},[l]);const A={isActive:v.indexOf("swiper-slide-active")>=0,isVisible:v.indexOf("swiper-slide-visible")>=0,isPrev:v.indexOf("swiper-slide-prev")>=0,isNext:v.indexOf("swiper-slide-next")>=0},T=()=>typeof r=="function"?r(A):r,C=()=>{E(!0)};return Oe.createElement(i,Du({ref:y,className:S5(`${v}${o?` ${o}`:""}`),"data-swiper-slide-index":d,onLoad:C},m),c&&Oe.createElement(T4.Provider,{value:A},Oe.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof c=="number"?c:void 0},T(),f&&!S&&Oe.createElement("div",{className:"swiper-lazy-preloader"}))),!c&&Oe.createElement(T4.Provider,{value:A},T(),f&&!S&&Oe.createElement("div",{className:"swiper-lazy-preloader"})))});zn.displayName="SwiperSlide";const nR=D(Vn)`
  position: relative;
  border-radius: 4px;
  width: 320px;
  height: 692px;
  overflow: hidden;
  background: transparent;
  z-index: 1;
  border-radius: 8px;

  .swiper-wrapper {
    align-items: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    transition: all 0.5s ease;
  }

  .swiper-pagination-bullet {
    background: #3098ee;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #005fa3;
  }

  @media screen and (min-width: 768px) {
    width: 760px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 500px;

    .swiper-wrapper {
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
  }
`,iR=D(zn)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${t=>t.$isActive?"898px":"437px"} !important;
    height: ${t=>t.$isActive?"100%":"285px"} !important;
    opacity: ${t=>t.$isActive?1:t.$index===0||t.$index===4?.6:.8};
    transform: ${t=>{if(t.$isActive)return"scale(1)";switch(Math.abs(t.$index-2)){case 1:return t.$index<2?"translateX(-100px) scale(0.9)":"translateX(100px) scale(0.9)";case 2:return t.$index<2?"translateX(-200px) scale(0.8)":"translateX(200px) scale(0.8)";default:return"scale(0.9)"}}};
    z-index: ${t=>t.$isActive?10:10-Math.abs(t.$index-2)};
  }
`,aR=D.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  overflow: hidden;
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,rR=D.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`,sR=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,oR=D.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,lR=D.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 72px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 72px;
    margin: 0 auto;
    width: 70%;
    text-align: center;
  }
`,uR=D.img`
  width: 100%;
  height: 647px;
  object-fit: cover;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 768px) {
    height: 650px;
    width: 696px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: ${t=>t.$isActive?"500px":"285px"};
    border-radius: 8px;
  }
`;D.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;D.button`
  padding: 0.5rem 1rem;
  border: 1px solid #242424;
  background: transparent;
  color: #242424;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #242424;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const cR=D.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${t=>t.$isActive?"898px":"437px"};
    height: ${t=>t.$isActive?"500px":"285px"};
  }
`,fR=D.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  margin: 12px;
  margin-bottom: 56px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    margin: ${t=>t.$isActive?"20px":"10px"};
    margin-bottom: ${t=>t.$isActive?"40px":"30px"};
    opacity: ${t=>t.$isActive?1:.9};
    transform: ${t=>t.$isActive?"scale(1.05)":"scale(0.95)"};
  }
`,dR=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,hR=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;D.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  position: relative;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const E4=D.button`
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({$bg:t})=>t};
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;

  svg {
    pointer-events: cursor;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,M4=D.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,pR=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,mR=D.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,gR=D.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (min-width: 1440px) {
    width: 1800px;
    height: 600px;
    margin: 0 auto;
    overflow: visible;
    display: flex;
    justify-content: center;
  }
`,yR="/assets/Review%20Image%203-bwglEcYl.png",A4="/assets/Review%20Image%201-BysFOq9G.png",L4="/assets/Review%20Image%202-C_HtVc_c.png",O4="/assets/Review%20Image%205-B3ukDKHL.png",vR="/assets/Review%20Image%204-AW0fOgIu.png",xR=D.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  overflow: auto;
  position: relative;
  margin-bottom: 3rem;

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,bR=D.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,wR=D.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
  transition: all 0.3s ease;

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }

  &:focus {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
    border-radius: 4px;
  }
`,SR=D.h3`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  text-align: center;
  color: var(--black-500);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    font-size: 72px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 50%;
  }
`,E5=D.span`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  text-align: center;
  color: var(--blue-500);
  transition: all 0.3s ease;

  &:hover {
    color: var(--purple-400);
    transform: translateY(-1px);
  }

  @media screen and (min-width: 768px) {
    font-size: 72px;
  }
`,CR=D.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  color: var(--blue-500);
  transition: all 0.3s ease;

  &:hover {
    color: var(--purple-400);
    transform: translateY(-1px);
  }

  &:focus {
    outline: 2px solid var(--purple-400);
    outline-offset: 2px;
    border-radius: 4px;
  }
`,TR=D.div`
  position: relative;
  border-radius: 4px;
  width: 320px;
  overflow: hidden;
  background: transparent;
  z-index: 1;
  margin: 0;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;

    ${t=>t.$isLargeDesktop&&`
      &:not(.swiper-slide-active) {
        transform: scale(0.9);
        opacity: 0.8;
      }
      
      &.swiper-slide-active {
        transform: scale(1.1);
        z-index: 2;
      }
    `}

    &:hover {
      .slide-container {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      }
    }
  }

  .swiper-pagination-bullet {
    background: #3098ee;
    opacity: 1;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background: var(--purple-400);
      transform: scale(1.2);
    }

    &:focus {
      outline: 2px solid var(--purple-400);
      outline-offset: 2px;
    }
  }

  .swiper-pagination-bullet-active {
    background: #005fa3;

    &:hover {
      background: var(--purple-500);
    }
  }

  @media screen and (min-width: 768px) {
    width: 760px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 1440px;
  }
`,ER=D.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px 12px;
  gap: 12px;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0 4px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  height: 485px;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

    .overlay {
      background: rgba(255, 255, 255, 0.95);
      transform: translateY(-2px);
    }

    .slide-text {
      color: var(--blue-500);
    }
  }

  &:focus {
    outline: 2px solid var(--blue-500);
    outline-offset: 4px;
    border-radius: 8px;
  }

  .overlay {
    background: rgba(255, 255, 255, 0.85);
    border-radius: 4px;
    margin: 6px;
    padding: 10px;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: calc(100% - 12px);
    transition: all 0.3s ease;
  }
`,MR=D(ER)`
  ${t=>t.$isLargeDesktop&&`
    margin: 0;
    transition: all 0.3s ease;
    
    .overlay {
      margin-bottom: 5%;
    }
    
    &:hover {
      transform: scale(1.12) translateY(-5px);
    }
  `}
`,AR=D.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`,LR=D.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding-bottom: 14px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2) rotate(5deg);

    .icon-image {
      filter: brightness(1.2);
    }
  }

  &:focus {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
    border-radius: 4px;
  }
`,OR=D.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25em;
  padding-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }
`,RR=D.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;function jR(){const[t,e]=R.useState(null),[i,r]=R.useState(0),o=R.useRef(null),l=R.useRef(null),c=()=>{t&&t.slidePrev()},f=()=>{t&&t.slideNext()},d=[{image:yR,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam labore fuga quos explicabo ipsam ad, natus cumque dignissimos eaque!",title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",type:"Washing Machine Repair"},{image:L4,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam labore fuga quos explicabo ipsam ad, natus cumque dignissimos eaque!",title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",type:"Washing Machine Repair"},{image:O4,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam labore fuga quos explicabo ipsam ad, natus cumque dignissimos eaque!",title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",type:"Washing Machine Repair"},{image:vR,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam labore fuga quos explicabo ipsam ad, natus cumque dignissimos eaque!",title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",type:"Washing Machine Repair"},{image:A4,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam labore fuga quos explicabo ipsam ad, natus cumque dignissimos eaque!",title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",type:"Washing Machine Repair"},{image:O4,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam labore fuga quos explicabo ipsam ad, natus cumque dignissimos eaque!",title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",type:"Washing Machine Repair"},{image:L4,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam labore fuga quos explicabo ipsam ad, natus cumque dignissimos eaque!",title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",type:"Washing Machine Repair"},{image:A4,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam labore fuga quos explicabo ipsam ad, natus cumque dignissimos eaque!",title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",type:"Washing Machine Repair"}];return x.jsxs(aR,{children:[x.jsxs(sR,{children:[x.jsx(oR,{children:"Our Cases"}),x.jsxs(lR,{children:[x.jsx(E5,{children:"Success Stories "})," That Bring Your Appliances Back to Life"]})]}),x.jsx(gR,{children:x.jsx(nR,{modules:[ri],pagination:{clickable:!0},spaceBetween:20,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,onSwiper:e,onSlideChange:p=>r(p.realIndex),breakpoints:{1440:{slidesPerView:6,spaceBetween:30,centeredSlides:!0}},children:d.map(({image:p,description:m,title:y,type:v},w)=>x.jsx(iR,{$isActive:i===w,$index:w,children:x.jsxs(cR,{$isActive:i===w,$index:w,children:[x.jsx(uR,{src:p,alt:v,$isActive:i===w,$index:w}),x.jsx(fR,{$isActive:i===w,$index:w,children:x.jsxs(dR,{children:[x.jsx(hR,{children:x.jsx(M4,{children:m})}),x.jsxs(pR,{children:[x.jsx(mR,{children:y}),x.jsx(M4,{children:v})]})]})})]})},w))})}),x.jsxs(rR,{children:[x.jsx(E4,{ref:o,$bg:"#DBDBD8",onClick:c,children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(E4,{ref:l,$bg:"#3098EE",onClick:f,children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})}const DR=D(Pr.div)`
  position: fixed;
  top: 100px;
  right: 100px;
  padding: 16px 24px;
  border-radius: 8px;
  background: ${t=>t.$type==="success"?"linear-gradient(135deg, #4caf50, #2e7d32)":"linear-gradient(135deg, #f44336, #c62828)"};
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  z-index: 1000;
  max-width: 400px;
`,HR=D.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`,VR=({type:t,message:e,onClose:i,autoClose:r=!0,autoCloseDuration:o=25e3})=>{const{t:l}=hp();R.useEffect(()=>{if(r){const f=setTimeout(()=>{i()},o);return()=>clearTimeout(f)}},[r,o,i]);const c={success:l("alert.success"),error:l("alert.error")};return x.jsxs(DR,{$type:t,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",damping:25},children:[x.jsx("div",{children:e||c[t]}),x.jsx(HR,{onClick:i,children:"×"})]})},zR="/assets/ContactFormImage-CaQYWUqs.png",M5=()=>{const[t,e]=R.useState(""),[i,r]=R.useState({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),[o,l]=R.useState({}),[c,f]=R.useState(null),d=y=>{const{name:v,value:w}=y.target;r(S=>({...S,[v]:w})),l(S=>({...S,[v]:!1}))},p=()=>{const y={};return t||(y.service=!0),i.name||(y.name=!0),i.email||(y.email=!0),i.phone||(y.phone=!0),i.location||(y.location=!0),i.appliance||(y.appliance=!0),i.brand||(y.brand=!0),i.power||(y.power=!0),y},m=async y=>{y.preventDefault();const v=p();if(Object.keys(v).length>0){l(v),f({type:"error",message:"Please fill all required fields"});return}try{if((await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:t,...i})})).ok)e(""),r({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),l({}),f({type:"success",message:"Form submitted successfully! We will contact you soon."});else throw new Error("Failed to submit form")}catch(w){console.error("Error submitting form:",w),f({type:"error",message:"There was an error submitting the form. Please try again."})}};return x.jsxs(UR,{children:[x.jsxs(H4,{children:[x.jsxs(s0,{children:[x.jsxs($R,{children:[" ",x.jsx("span",{children:"Contact"})," our team"]}),x.jsx(Wl,{children:"We love our customers, so feel free to call during normal business hours"})]}),x.jsx(GR,{children:x.jsx(qR,{children:"Call Us for Fast Repair"})}),x.jsxs(H4,{children:[x.jsx(IR,{}),x.jsxs(YR,{children:[x.jsxs(V4,{width:"251px",children:[x.jsx(z4,{children:"Service Hours"}),x.jsx(s0,{children:x.jsxs(Wl,{children:["Mon–Sat: 8AM–6PM ",x.jsx("br",{})," Sun: 9AM–4PM"," "]})})]}),x.jsxs(V4,{children:[x.jsx(z4,{children:"Our Location"}),x.jsxs(s0,{children:[x.jsx(Wl,{children:"801 Tioga Pl, Newbury Park, CA 91320"}),x.jsx(Wl,{children:"+1 (805) 500-2705"})]})]})]})]})]}),x.jsxs(kR,{onSubmit:m,children:[x.jsx(XR,{src:zR,alt:"contact image"}),x.jsx(Jn,{children:"What service do you need for your appliances?"}),x.jsxs(NR,{children:[x.jsxs(R4,{style:o.service?{borderColor:"red"}:{},children:[x.jsx(j4,{name:"service",value:"Repair",checked:t==="Repair",onChange:y=>e(y.target.value)}),x.jsx(D4,{checked:t==="Repair"}),"Repair"]}),x.jsxs(R4,{style:o.service?{borderColor:"red"}:{},children:[x.jsx(j4,{name:"service",value:"Installation",checked:t==="Installation",onChange:y=>e(y.target.value)}),x.jsx(D4,{checked:t==="Installation"}),"Installation"]})]}),x.jsxs(FR,{children:[x.jsxs(ZR,{children:[x.jsx(Jn,{children:"Name"}),x.jsx(r0,{name:"name",type:"text",placeholder:"Your Name",value:i.name,onChange:d,style:o.name?{borderBottom:"1px solid red"}:{}}),x.jsx(Jn,{children:"Email"}),x.jsx(r0,{name:"email",type:"email",placeholder:"Your Email",value:i.email,onChange:d,style:o.email?{borderBottom:"1px solid red"}:{}}),x.jsx(Jn,{children:"Phone Number"}),x.jsx(r0,{name:"phone",type:"tel",placeholder:"Your Phone Number",value:i.phone,onChange:d,style:o.phone?{borderBottom:"1px solid red"}:{}})]}),x.jsxs(KR,{children:[x.jsx(Jn,{children:"In what location do you need the service?"}),x.jsx(Kl,{children:x.jsxs(Ql,{name:"location",value:i.location,onChange:d,style:o.location?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select location"}),x.jsx("option",{children:"Malibu"}),x.jsx("option",{children:"Los Angeles County"}),x.jsx("option",{children:"Thousand Oaks"}),x.jsx("option",{children:"Newbury Park"}),x.jsx("option",{children:"Westlake Village"}),x.jsx("option",{children:"Oak Park"}),x.jsx("option",{children:"Lake Sherwood"}),x.jsx("option",{children:"Hidden Valley"}),x.jsx("option",{children:"Camarillo"}),x.jsx("option",{children:"Agoura Hills"}),x.jsx("option",{children:"Moorpark"}),x.jsx("option",{children:"Calabasas"}),x.jsx("option",{children:"Santa Rosa Valley"}),x.jsx("option",{children:"Other"})]})}),x.jsx(Jn,{children:"What do you need repaired?"}),x.jsx(Kl,{children:x.jsxs(Ql,{name:"appliance",value:i.appliance,onChange:d,style:o.appliance?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select appliance"}),x.jsx("option",{children:"Cooktop"}),x.jsx("option",{children:"Oven"}),x.jsx("option",{children:"Range"}),x.jsx("option",{children:"Washer"}),x.jsx("option",{children:"Refrigerator"}),x.jsx("option",{children:"Microwave"}),x.jsx("option",{children:"Dishwasher"}),x.jsx("option",{children:"Dryer"}),x.jsx("option",{children:"Washing Machine"}),x.jsx("option",{children:"Freezer"}),x.jsx("option",{children:"Stove"}),x.jsx("option",{children:"Wine Cooler"}),x.jsx("option",{children:"Other"})]})}),x.jsx(Jn,{children:"Brand of appliance"}),x.jsx(Kl,{children:x.jsxs(Ql,{name:"brand",value:i.brand,onChange:d,style:o.brand?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select brand"}),x.jsx("option",{children:"LG"}),x.jsx("option",{children:"Samsung"}),x.jsx("option",{children:"Whirlpool"}),x.jsx("option",{children:"Bosch"}),x.jsx("option",{children:"GE"}),x.jsx("option",{children:"Frigidaire"}),x.jsx("option",{children:"Maytag"}),x.jsx("option",{children:"KitchenAid"}),x.jsx("option",{children:"Viking"}),x.jsx("option",{children:"Fisher & Paykel"}),x.jsx("option",{children:"Amana"}),x.jsx("option",{children:"JennAir"}),x.jsx("option",{children:"Haier"}),x.jsx("option",{children:"Sharp"}),x.jsx("option",{children:"Electrolux"}),x.jsx("option",{children:"Sub-Zero"}),x.jsx("option",{children:"Thermador"}),x.jsx("option",{children:"Wolf"}),x.jsx("option",{children:"Other"})]})})]})]}),x.jsx(Jn,{children:"What type of power does this appliance use?"}),x.jsx(Kl,{children:x.jsxs(Ql,{name:"power",value:i.power,onChange:d,style:o.power?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select power"}),x.jsx("option",{children:"Electric"}),x.jsx("option",{children:"Gas"}),x.jsx("option",{children:"Dual Fuel"}),x.jsx("option",{children:"Induction"}),x.jsx("option",{children:"Solar"}),x.jsx("option",{children:"Propane"}),x.jsx("option",{children:"Natural Gas"}),x.jsx("option",{children:"Other"})]})}),x.jsx(Jn,{children:"Any details you'd like to add?"}),x.jsx(PR,{name:"details",placeholder:"Any details you'd like to add?",value:i.details,onChange:d}),x.jsxs(_R,{children:['By clicking "Submit" you hereby agree to our ',x.jsx("a",{href:"http://#",children:"Privacy Policy"})," ."]}),x.jsx(BR,{type:"submit",children:"Submit"})]}),x.jsx(vx,{children:c&&x.jsx(VR,{type:c.type,message:c.message,onClose:()=>f(null)})})]})},kR=D.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  background: var(--blue-form);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  width: auto;
  max-width: 696px;
  @media screen and (min-width: 768px) {
    width: 668px;
  }

  @media screen and (min-width: 1440px) {
    gap: 5px;
  }
`,Jn=D.label`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  margin-top: 30px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-top: 10px;
  }
`,NR=D.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,R4=D.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;
  color: #242424;
  border: 1px solid var(--black-500);
  border-radius: 8px;
  padding: 10px 16px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,j4=D.input.attrs({type:"radio"})`
  display: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,D4=D.span`
  width: 18px;
  height: 18px;
  border: 2px solid #242424;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  transition: all 0.3s ease;

  ${({checked:t})=>t&&`
    border-color: #242424;
    &::after {
      content: '';
      width: 10px;
      height: 10px;
      background: #4478e7ff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
      transition: all 0.3s ease;
    }
  `}

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,r0=D.input`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  transition: all 0.3s ease;
  border: none;
  border-bottom: 1px solid var(--black-300);
  background: var(--blue-form);
  margin-bottom: 20px;

  &:focus {
    border-color: var(--blue-form);
    outline: none;
    background: #bbe5f6ff;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
  }
`,Kl=D.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  &::after {
    content: '🢗';
    font-size: 24px;
    color: #242424;
    position: absolute;
    right: 16px;
    top: 70%;
    transform: translateY(-50%);
    pointer-events: none;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
  }
`,Ql=D.select`
  width: 100%;
  padding: 12px;
  padding-right: 40px; /* щоб стрілка не накладалась на текст */
  transition: all 0.3s ease;
  border: none;
  border-bottom: 1px solid var(--black-300);
  background: var(--blue-form);
  font-size: 14px;
  background: var(--blue-form);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: var(--blue-form);
    outline: none;
    background: #bbe5f6ff;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,PR=D.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  transition: all 0.3s ease;
  border: none;
  border-bottom: 1px solid var(--black-300);
  background: var(--blue-form);
  font-size: 14px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    border-color: var(--blue-form);
    outline: none;
    background: #bbe5f6ff;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,BR=D.button`
  border-radius: 8px;
  padding: 10px 20px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--white);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  background: var(--blue-500);
  &:hover {
    transform: scale(1.05);
    background: #79caf5ff;
  }

  &:active {
    transform: scale(0.95);
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`,_R=D.p`
  font-size: 12px;
  color: #666;
  text-align: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,UR=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  overflow: auto;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    display: flex;
    width: 1440px;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 40px;
  }
`,H4=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 750px;
  }

  @media screen and (min-width: 1440px) {
    width: 454px;
    display: flex;
    height: 100vh;
    justify-content: center;
  }
`,s0=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,$R=D.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);

  span {
    color: var(--blue-500);
  }
  @media screen and (min-width: 768px) {
    font-size: 72px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Wl=D.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1440px) {
  }
`,GR=D.button`
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #242424;
  width: fit-content;
  background: transparent;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,qR=D.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,IR=D.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,YR=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,V4=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${t=>t.width||"100%"};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,z4=D.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,XR=D.img`
  margin: 0 auto;
  width: 100%;
  max-width: 696px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 668px;
  }

  @media screen and (min-width: 1440px) {
  }
`,FR=D.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`,ZR=D.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,KR=D.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,k4="/assets/Ellipse%204aleksey-FxWBDF7j.png",N4="/assets/Ellipse%204-sanal-avatar-Dxfndv0Z.png",P4="/assets/Ellipse%204-Wendy%20Bailey-jDxdSyQ5.png",B4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgESURBVHgB3Vr7b1NVHP/c29t3V9ZtsNG9Oh1TivJWCAaGYjSDxWgwBo3EmBgRTIiCidF/QBMTfoaYKGIkQIiiYTwSQHkZiKCM8d4YY2PtBuzRrs/b9l6/53aDjdFube9Yt09yt7b33HPP93zf3+/hoD442GxW5JocsOW8CKPxJRj1lRCEORA0BmVELBZEJFqPkFgPX7AR3r5j6Oq7A4+nByqDg1pwOBwozd+Egty3YTJOJyKAaAzKf0kGZHaxgfSH4+IXzwMaugRN/PIG2tHj2YEm11a43a1QAZkSyGOesxYV9m1EVBGCIRBnJCKGR3qQoddxMOhAczXg5p1vceHabvo9hjSRLoEcFjrfQGX5j8QJG3yBfhZx6RI2FDLNxaaymDjEosDN1rdw/uo+pIHUCXRMLcKCuf9Cr52OPr8UlzUVRX0oFKGG1cwhFG7AhSurcNPVlsoEmlQGY/nCTzFn1jH4gxaExQGOjRVx6J+bo3exjZyGGY5NsFg60eY+l8oEoxtXu+wgrJbXyRBE6ZuA8YAkRzHFIsDjO4W648swwOEkGA2BWqypuUIWsZLMeoyeSI3rakNGFEadAA3XiF2HnfRLNNnwkQjU4b2a6wiI5YhGmbqNpTimAFkiv8pBb2jBrroqJCEy2YI5rFnZiHD4KTL9WUTcAPqJ1GkbsfvQs0ggronNem31KSLs6ewkjoEMXDQqQ5KqULNsf6JRj9en6hc2Ymrux+RsSedU8m1jAtr4CIVKtpxnYLN04Lb7/LARw56pqCjH0udb0O0ha8mNj7VMFcy6FkwRcOhsITo77w6+NZw7CysPwOuTJgxxDDyttdcnY8lzfw67NeTbolmrIeic5BKyUOdGgBSTKR52Yu7MVYN/HkygAEfJXvgU7k08ApnRYaFjVdlPGETXQzGcN/NdJX1B+sTx9LwcESG72sl8MfuVwlTkZ7niYlqRVom104IsU4wl5BMXa3Dhah2GrGD1q5fJIj2bQapDqZKI4oJp+HvLNnj8PqSyTJvZguVfbURz222QA0fa4Oi1GqEDvx2xs69xDpYXVsBocCLcJyMT6ZQk6AUBZVOnAexKETmMMJojIzD2mw3T8bS9lGUecQIdpespHcncodPj0iDxilAud+pKAwReGFFY86xWeIJBkvNMQ13SxbAITC/8jAjcHCcwL/d9hCLEPXVTn0A4jFfeIaNmMMTLE8mg6GApeBorpauDAwhRKpdvW0OfvhBQXJwPE7HU64Pa4GkzdSWlEA3GUdkuRpacKXFxcDAb7cjLy6EV6EqU4tBkA9Nls7mMR65+hVL5mmxg6V2BZREPi3kGYhlarmwE46DRsESg4tHcseKgTCmb6HbRi5LoINM5rRa6IjvEaBSqgSI3Kj9WMgJnY4ygo6hk86av6RXahAZaoIins7cHW/f8TNWzKVANbOOINiomVasXe4phOIgTt7bvfWAR+VFM7e7ugr16LqVqlVAVkhQWxiqwZpMyfxYQRSIyyTjyj95AgGLXscjOWPlPigVochPU8T9D4AsFUbhyKTRGU2JHT++VaY/5MgdUNXWMb1I0KECMXYRJWAz16VPEUyYdCySLYvobMYogqbnJbD5RvMgjFGocMYxK/y1xzildJE3ii6VZaksQ04tQpJ6HP3Q6nrtNMrCgPRBo4tEdOKv06CYbWL+xK3iUR29vC2XBmHQQiGkej4uqUb1eBIMdZGQK1U6XlEjm/j2KKIwjp0usD2jLA6fTq6GPMvUs21lLnLFOwn3vr1To3QAxAjXBIpm1az+ipq1uxL2zWSz45fgRtHe4ldAtI+j1HDrub2cf47LZ2vYdygo3KD2/DB3/wMOMC1qtgB0Uqo0WzR0u7L3ZCOTakD5IbAw6nrL579m3OIEtHS2YH+okMZqqVKbSnrs/eqFMPkhhWyrIoWDAo0Q0GZcsOGrQNgwcYnhoXVo716GyZB/dRLrgqNzQ2nUP5sXOuJKnAtbkmVYEzZRcyt4yiGlyqK9/qfmbB2sadEtD7bJ78AesACaqY5RhJP3bc5itX9mlwdscQ1Pbh5QAa9QPK54ESPdyzByaXW8CD8PaoXJ0ruEPRCJu0oOJRyDLRsLhBqLh98E/P6ooMi5fX0CNfl7phU8UyOxwgplH/dWVj94armv3PT5qKHYhP7eW/CKrZWR3HMcYwU5eNLevR/2NY4/eTuwSaqsPw6B/jSreMrK128RsBTMqwdBJ7D+x7HFDEnNn//EaavA3QSvIWWl0lEhCYCFgExFXnWhYMvGTsLPOSTvUqkTm2UTkAHFGQws6D81EkgNBI+lXBDsPPEO9hWYKf5iYjn+FWKY1GA0cVeQb4fJX4a/MDgINgEftyydhNS6B1z9+hxMkZlDMlAH1HcSBE6xVPaJUjTZikXGj5Qfk2bpRlL9KORMqSU/w/Aw5cXaaJc+qwW33ehw98/lon0x9gTMryuGcUUedzln9xynH2I2wCIX8ckh04b/6+bh1tzOVp9PnwKLZq+Gw71WqV4EQ4yinGkeVA7Fc/ECsJHXj2p0PUH+J9dxTNnSZLkhQDi88VfIl+cxZSpdYFNPnqsyONGs5stxAMOxGq2sd/rl8AONwpHk42KH0soJPSE/WwmyyK+0r1tRhnSvlULr0cP8fHErvLyuymhBzRf6gG929e3DHtQXN2XEo/fGwWvNgtxbDlLOCTHoVcWQ2pfezqXpnUu7HpAAZqosIh5qIqNPo9Z1Bj78VPT1epCGGyfA/uU/qLszt8vwAAAAASUVORK5CYII=",_4="/assets/Review%20Image-alexey-BS9M-VaX.png",U4="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",$4="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",G4="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",Jl=[{avatar:k4,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:_4},{avatar:N4,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:U4},{avatar:P4,name:"Wendy Bailey",time:"месяц назад",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:$4},{avatar:B4,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:G4},{avatar:k4,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:_4},{avatar:N4,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:U4},{avatar:P4,name:"Wendy Bailey",time:"месяц назад",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:$4},{avatar:B4,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:G4}],QR=D.div`
  padding: 0px 16px;
  width: 375px;
  height: 170px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,WR=D.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);
  span {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 52px;
    line-height: 90%;
    color: var(--blue-500);
  }

  @media screen and (min-width: 768px) {
    font-size: 72px;
    min-width: 750px;
    span {
      font-size: 72px;
    }
  }

  @media screen and (min-width: 1440px) {
  }
`,JR=D.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  padding-bottom: 16px;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1440px) {
  }
`,ej=D.div`
  position: relative;
  width: 100%;
  height: 684px;
  overflow: hidden;
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    height: 800px; /* Збільшуємо висоту для двох колонок */
  }
`,o0=D.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: ${t=>t.$isVisible?"block":"none"};

  @media screen and (min-width: 768px) {
    width: 50%; /* Два свайпери займають по половині ширини */
    display: block;
  }
`,l0=D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: #f5faff;
  border-radius: 8px;
  height: 600px; /* Фіксована висота картки */
`,u0=D.div`
  display: flex;
  gap: 19px;
  align-items: center;
`,c0=D.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`,f0=D.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,d0=D.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`,h0=D.p`
  color: rgba(33, 33, 33, 0.5);
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`,p0=D.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  line-height: 1.25em;
  flex-grow: 1;
  overflow: hidden;
`,m0=D.img`
  width: 100%;
  height: 370px;
  border-radius: 4px;
  object-fit: cover;
`,g0=D.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,y0=D.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,tj=()=>{const[,t]=Oe.useState(!1),e=Oe.useRef(null),i=Oe.useRef(null),r=Oe.useRef(null),o=yt({query:"(min-width: 768px)"}),l=yt({query:"(min-width: 1440px)"}),c=f=>{if(!e.current||!r.current)return;const d=e.current,p=r.current,m=f.touches[0].clientY,{top:y,bottom:v}=p.getBoundingClientRect(),w=d.isBeginning&&m>y+50,S=d.isEnd&&m<v-50;w||S?(t(!0),d.allowTouchMove=!1):(t(!1),d.allowTouchMove=!0)};return Oe.useEffect(()=>{const f=r.current;if(f)return f.addEventListener("touchmove",c,{passive:!1}),()=>{f.removeEventListener("touchmove",c)}},[]),x.jsxs("div",{children:[x.jsxs(QR,{children:[x.jsx(JR,{children:"Your Feedback Matters"}),x.jsxs(WR,{children:["Discover why clients ",x.jsx("span",{children:" trust "})," our repairs"]})]}),x.jsxs(ej,{ref:r,children:[x.jsxs(o0,{$isVisible:!0,children:[x.jsx(g0,{}),x.jsx(y0,{}),x.jsx(Vn,{ref:e,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!0,waitForTransition:!0},speed:7e3,loop:!0,touchEventsTarget:"container",modules:[Qd,ri],grabCursor:!0,resistance:!0,resistanceRatio:.85,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{e.current&&(e.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:Jl.map((f,d)=>x.jsx(zn,{children:x.jsxs(l0,{children:[x.jsxs(u0,{children:[x.jsx(c0,{src:f.avatar,alt:f.name}),x.jsxs(f0,{children:[x.jsx(d0,{children:f.name}),x.jsx(h0,{children:f.time})]})]}),x.jsx(p0,{children:f.text}),x.jsx(m0,{src:f.image,alt:`Review by ${f.name}`})]})},`top-${d}`))})]}),x.jsxs(o0,{$isVisible:o,children:[x.jsx(g0,{}),x.jsx(y0,{}),x.jsx(Vn,{ref:i,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!0,waitForTransition:!0,reverseDirection:!0},speed:4e3,loop:!0,touchEventsTarget:"container",modules:[Qd,ri],grabCursor:!1,noSwiping:!0,allowTouchMove:!1,simulateTouch:!1,resistance:!0,resistanceRatio:.85,initialSlide:Jl.length-1,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{i.current&&(i.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:Jl.map((f,d)=>x.jsx(zn,{children:x.jsxs(l0,{children:[x.jsxs(u0,{children:[x.jsx(c0,{src:f.avatar,alt:f.name}),x.jsxs(f0,{children:[x.jsx(d0,{children:f.name}),x.jsx(h0,{children:f.time})]})]}),x.jsx(p0,{children:f.text}),x.jsx(m0,{src:f.image,alt:`Review by ${f.name}`})]})},`bottom-${d}`))})]}),l&&x.jsxs(o0,{$isVisible:!0,children:[x.jsx(g0,{}),x.jsx(y0,{}),x.jsx(Vn,{ref:e,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0,waitForTransition:!0},speed:9e3,loop:!0,touchEventsTarget:"container",modules:[Qd,ri],grabCursor:!0,resistance:!0,resistanceRatio:.85,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{e.current&&(e.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:Jl.map((f,d)=>x.jsx(zn,{children:x.jsxs(l0,{children:[x.jsxs(u0,{children:[x.jsx(c0,{src:f.avatar,alt:f.name}),x.jsxs(f0,{children:[x.jsx(d0,{children:f.name}),x.jsx(h0,{children:f.time})]})]}),x.jsx(p0,{children:f.text}),x.jsx(m0,{src:f.image,alt:`Review by ${f.name}`})]})},`top-${d}`))})]})]})]})},nj="/assets/Hero%20Image-CELmD3oB.png",A5="data:image/svg+xml,%3csvg%20width='140'%20height='33'%20viewBox='0%200%20140%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_586)'%3e%3cpath%20d='M0.00384521%2032.9336H31.9955V0.933594H0.00384521V32.9336ZM20.5091%203.37746C26.1637%205.23116%2030.25%2010.5932%2030.2654%2016.9275C30.2807%2023.1588%2026.277%2028.508%2020.5091%2030.4846V3.37746ZM15.9946%202.65223C17.0161%202.65223%2018.1043%202.78857%2019.0107%202.96908C19.0107%2010.2187%2012.0004%2016.185%204.76547%2016.185L1.74041%2016.1805C2.23648%208.74909%208.38454%202.65223%2015.9946%202.65223ZM4.76803%2017.6943C12.0017%2017.6943%2019.0094%2023.6542%2019.0094%2030.8968C18.1043%2031.0818%2016.9617%2031.2194%2015.9946%2031.2194C8.38198%2031.2092%202.02589%2025.0938%201.73849%2017.6943H4.76803ZM42.7049%2019.7452V17.7283H49.3618V15.157H42.7036V11.4131H49.7862V8.84766H39.9787V19.6287C39.9787%2022.3542%2041.1392%2024.2181%2043.8634%2024.6009C43.9178%2024.6143%2043.9716%2024.6246%2044.0215%2024.6259H44.0708C44.3499%2024.6572%2044.6347%2024.6777%2044.9336%2024.6777H49.975V22.1154H44.9561C44.09%2022.1154%2042.7049%2021.6879%2042.7049%2019.7452ZM51.9113%2024.6816H54.6374V8.84382H51.9113V24.6816ZM62.6404%2012.8674C59.1948%2012.8674%2056.6159%2015.2415%2056.6159%2018.938V19.0296C56.6159%2022.6358%2059.1033%2024.9638%2062.7089%2024.9638C64.4429%2024.9638%2066.063%2024.4851%2067.5461%2022.9092L65.903%2021.3121C65.0357%2022.1794%2064.1914%2022.6358%2062.7998%2022.6358C60.7688%2022.6358%2059.4227%2021.4491%2059.3312%2019.6229H68.2758C68.3212%2019.1665%2068.3212%2018.6647%2068.3212%2018.6647C68.3225%2015.4463%2066.063%2012.8674%2062.6404%2012.8674ZM59.4003%2017.7059C59.5142%2016.313%2060.9295%2015.1948%2062.6404%2015.1948C64.2375%2015.1948%2065.5381%2016.3361%2065.5381%2017.7059H59.4003ZM75.9825%2015.3094C77.2146%2015.3094%2078.1281%2015.7664%2078.9032%2016.5646L80.5918%2014.8069C79.2681%2013.3917%2077.6941%2012.8213%2075.9825%2012.8213C72.5138%2012.8213%2069.7301%2015.4003%2069.7301%2018.915C69.7301%2022.4297%2072.5138%2025.0093%2075.9825%2025.0093C77.6941%2025.0093%2079.2687%2024.439%2080.5918%2023.0237L78.9032%2021.266C78.1281%2022.0649%2077.2146%2022.5213%2075.9825%2022.5213C73.9739%2022.5213%2072.4453%2020.9914%2072.4453%2018.915C72.4453%2016.8385%2073.9739%2015.3094%2075.9825%2015.3094ZM85.0148%2019.7497H85.0116V15.7062H87.4906V13.2291H85.0148V8.84446H82.2886V19.9103L82.2963%2019.9097C82.3744%2022.4829%2083.5432%2024.2354%2086.1733%2024.6047C86.2277%2024.6182%2086.2815%2024.6284%2086.3314%2024.6291H86.3807C86.6598%2024.6604%2086.9446%2024.6816%2087.2436%2024.6816H87.5322L87.5418%2022.1193H87.266C86.3999%2022.1193%2085.0148%2021.6923%2085.0148%2019.7497ZM92.4885%2014.9324V13.2297H89.7847V24.6816H92.4885V18.6596C92.4885%2016.7739%2093.6925%2015.5916%2095.5775%2015.5916C96.009%2015.5916%2096.3956%2015.6365%2096.7137%2015.7056V13.0703C96.5998%2013.0479%2096.1914%2013.0018%2095.8963%2013.0018C94.2602%2013.0025%2093.0338%2013.7527%2092.4885%2014.9324ZM103.38%2012.8885C99.9033%2012.8885%2097.131%2015.5232%2097.131%2018.9553C97.131%2022.3856%2099.9033%2025.0221%20103.38%2025.0221C106.832%2025.0221%20109.627%2022.3856%20109.627%2018.9553C109.626%2015.5238%20106.832%2012.8885%20103.38%2012.8885ZM103.38%2022.5456C101.358%2022.5456%2099.8361%2020.9767%2099.8361%2018.9553C99.8361%2016.9326%20101.358%2015.3651%20103.38%2015.3651C105.379%2015.3651%20106.923%2016.9326%20106.923%2018.9553C106.922%2020.9774%20105.379%2022.5456%20103.38%2022.5456ZM111.303%2024.6816H114.03V8.84382H111.303V24.6816ZM123.862%2019.8866C123.862%2021.7039%20122.795%2022.4777%20121.363%2022.4777C119.932%2022.4777%20118.865%2021.7039%20118.865%2019.911V13.2297H116.115V20.1376C116.115%2023.4097%20118.5%2024.9773%20121.34%2024.9773C124.203%2024.9773%20126.61%2023.3867%20126.61%2020.0691V13.2297H123.862V19.8866ZM136.925%2021.0196L135.206%2018.6148L137.335%2015.7139L139.158%2013.2297H136.182L133.705%2016.6606L131.206%2013.2297H128.253L129.947%2015.5462L132.206%2018.6372L129.838%2021.9356L127.867%2024.6816H130.797L133.704%2020.6368L136.613%2024.6816H139.544L136.925%2021.0196Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_586'%3e%3crect%20width='139.541'%20height='32'%20fill='white'%20transform='translate(0.00384521%200.933594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",lh="/assets/2-lv1xptCk.svg",L5="/assets/3-xYBlE7jA.svg",O5="data:image/svg+xml,%3csvg%20width='77'%20height='36'%20viewBox='0%200%2077%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M67.1338%2020.3456H71.0883V24.0242C70.3626%2024.3009%2068.9382%2024.5778%2067.5878%2024.5778C63.2137%2024.5778%2061.7591%2022.3574%2061.7591%2017.8483C61.7591%2013.5451%2063.1439%2011.0128%2067.5138%2011.0128C69.9492%2011.0128%2071.3309%2011.7769%2072.4762%2013.2341L75.4978%2010.4581C73.6527%207.82715%2070.4323%207.02979%2067.4087%207.02979C60.6107%207.02708%2057.0362%2010.7351%2057.0362%2017.8125C57.0362%2024.8547%2060.266%2028.6723%2067.3723%2028.6723C70.6355%2028.6723%2073.8247%2027.8417%2075.5614%2026.6244V16.4251H67.1339L67.1338%2020.3456ZM46.3909%2024.2661H56.4545V28.36H41.5343V7.33832H46.3913L46.3909%2024.2661Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4968%2029.43C35.8453%2023.0815%2035.8449%2012.7878%2029.4961%206.44074C23.1474%200.0925049%2012.854%200.0917411%206.50687%206.44012C0.158384%2012.7885%200.158766%2023.0823%206.5075%2029.4294C12.8561%2035.7781%2023.1497%2035.7783%2029.4968%2029.43Z'%20fill='%23242424'/%3e%3cpath%20d='M13.0698%2014.7643C13.4404%2014.7625%2013.8023%2014.6509%2014.1096%2014.4436C14.4169%2014.2364%2014.6559%2013.9428%2014.7965%2013.5998C14.9372%2013.2568%2014.973%2012.8798%2014.8996%2012.5165C14.8261%2012.1531%2014.6467%2011.8197%2014.384%2011.5583C14.1212%2011.2968%2013.7868%2011.119%2013.4232%2011.0474C13.0596%2010.9757%2012.6828%2011.0134%2012.3405%2011.1556C11.9982%2011.298%2011.7057%2011.5384%2011.4999%2011.8468C11.2942%2012.1551%2011.1845%2012.5174%2011.1845%2012.8881C11.185%2013.1351%2011.2342%2013.3796%2011.3293%2013.6075C11.4245%2013.8355%2011.5635%2014.0425%2011.7385%2014.2167C11.9136%2014.3909%2012.1213%2014.5289%2012.3497%2014.6229C12.5781%2014.7169%2012.8228%2014.7649%2013.0698%2014.7643ZM30.2643%2018.4501H21.9973V17.2255H31.4759C31.4889%2017.4627%2031.4953%2017.6998%2031.4953%2017.9398C31.4953%2025.3134%2025.4857%2031.2907%2018.0744%2031.2907C10.6628%2031.2907%204.65222%2025.3171%204.65222%2017.9398C4.65222%2010.5631%2010.6609%204.58887%2018.0731%204.58887C18.2688%204.58887%2018.4635%204.59282%2018.6572%204.60084V5.81624C18.4635%205.8076%2018.2694%205.80333%2018.0749%205.80333C11.3382%205.80333%205.87505%2011.2371%205.87505%2017.9385C5.87505%2024.6401%2011.3375%2030.0749%2018.0749%2030.0749C24.6272%2030.0749%2029.98%2024.9337%2030.2633%2018.4842L30.2643%2018.4501ZM21.9785%2023.5518H18.6561V11.0698H17.4278V24.7847H18.659V24.7765H21.9813L21.9785%2023.5518Z'%20fill='white'/%3e%3c/svg%3e",R5="/assets/5-DtA_MHfM.svg",j5="/assets/6-BYfTVs51.svg",D5="/assets/7-DtKFqDn5.svg",H5="/assets/8-C9mdpuht.svg",V5="/assets/9-1he0Czj8.svg",z5="data:image/svg+xml,%3csvg%20width='191'%20height='24'%20viewBox='0%200%20191%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_699)'%3e%3cmask%20id='mask0_277_699'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='190'%20height='56'%3e%3cpath%20d='M0.970825%2055.6831H189.922V0.547134H0.970825V55.6831Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_277_699)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.577%2023.4158H132.473L121.526%200.547155L110.577%2023.4158ZM188.424%2021.6962C188.63%2021.6962%20188.752%2021.5893%20188.752%2021.4207C188.752%2021.2342%20188.63%2021.1372%20188.424%2021.1372H188.012V21.6962H188.424ZM187.698%2020.8347H188.438C188.656%2020.8347%20188.827%2020.9045%20188.941%2021.0255C189.027%2021.1134%20189.076%2021.2395%20189.076%2021.3932C189.076%2021.6871%20188.92%2021.8643%20188.692%2021.9332L189.138%2022.6008H188.761L188.359%2021.9899H188.012V22.6008H187.698V20.8347ZM189.754%2021.7662C189.754%2020.9234%20189.146%2020.2473%20188.342%2020.2473C187.531%2020.2473%20186.917%2020.9317%20186.917%2021.7662C186.917%2022.6098%20187.526%2023.2846%20188.332%2023.2846C189.142%2023.2846%20189.754%2022.6008%20189.754%2021.7662ZM186.751%2021.775C186.751%2020.8478%20187.452%2020.0793%20188.342%2020.0793C189.23%2020.0793%20189.921%2020.8385%20189.921%2021.7569C189.921%2022.6846%20189.22%2023.4526%20188.332%2023.4526C187.444%2023.4526%20186.751%2022.6932%20186.751%2021.775ZM151.36%2012.3135V4.9244H156.648C159.337%204.9244%20160.934%206.2121%20160.934%208.57187C160.934%2010.867%20159.277%2012.3135%20156.679%2012.3135H151.36ZM159.692%2015.0823C162.586%2014.2016%20164.626%2012.0321%20164.626%208.41529C164.626%206.43127%20164.004%204.79723%20162.913%203.6014C161.582%202.21991%20159.542%201.40306%20156.945%201.40306H147.725V23.4158H151.36V15.7434H155.851L160.99%2023.4158H165.277L159.692%2015.0823ZM105.299%2012.4711C105.299%2016.7781%20102.461%2019.8896%2098.1221%2019.8896H94.0439V4.9244H98.1221C102.461%204.9244%20105.299%208.1%20105.299%2012.4075V12.4711ZM98.1221%201.40306H90.4052V23.4158H98.1221C104.62%2023.4158%20109.115%2018.604%20109.115%2012.4075C109.115%206.14909%20104.62%201.40306%2098.1221%201.40306ZM79.4093%2012.3915V23.4158H83.0453V1.40306H79.4093V12.3915ZM44.2722%2012.0246V23.4158H47.9065V1.40306H44.2722V12.0246ZM25.0175%2012.3135V4.9244H30.3084C32.996%204.9244%2034.5916%206.2121%2034.5916%208.57187C34.5916%2010.867%2032.9373%2012.3135%2030.3371%2012.3135H25.0175ZM33.351%2015.0823C36.2451%2014.2016%2038.2857%2012.0321%2038.2857%208.41529C38.2857%206.43127%2037.6644%204.79723%2036.5719%203.6014C35.2423%202.21991%2033.2018%201.40306%2030.6049%201.40306H21.3849V23.4158H25.0175V15.7434H29.5103L34.6509%2023.4158H38.9361L33.351%2015.0823ZM0.969482%2023.4158H4.60254V14.4522H16.359V10.9338H4.60254V4.9244H16.3646V1.40306H0.969482V23.4158ZM174.298%2019.9561V14.0421H185.997V10.5833H174.298V4.85948H185.997V1.40306H170.664V23.4158H186.002V19.9561H174.298ZM64.0979%2014.1057H69.3824V18.2267C68.1161%2019.2327%2066.3419%2019.8914%2064.3926%2019.8914C60.1678%2019.8914%2057.3605%2016.5598%2057.3605%2012.0321C57.3605%207.7529%2060.2547%204.20078%2064.0658%204.20078C66.697%204.20078%2068.2605%205.11279%2069.8567%206.55844L72.1616%203.63164C70.0378%201.71514%2067.8157%200.646822%2064.215%200.646822C57.9797%200.646822%2053.5473%205.86821%2053.5473%2012.0321C53.5473%2018.508%2057.8041%2023.4158%2064.2719%2023.4158C67.9364%2023.4158%2070.8605%2021.8424%2072.901%2019.9855V10.7377H64.0979V14.1057ZM136.715%2012.3915V23.4158H140.35V1.40306H136.715V12.3915Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M116.09%2019.8828L121.504%208.2977L126.96%2019.8828H116.09Z'%20fill='%23ED114C'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_699'%3e%3crect%20width='190'%20height='24'%20fill='white'%20transform='translate(0.446045)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",k5="data:image/svg+xml,%3csvg%20width='197'%20height='18'%20viewBox='0%200%20197%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2176%206.82621L22.529%201.22314H16.5098L12.2064%206.67151C11.7989%207.13951%2011.0096%207.47882%2010.4092%207.47882H9.40262V1.22314H1.12445V16.224H9.37546V11.622H10.6836C11.2827%2011.622%2011.5815%2011.7793%2011.9089%2012.3526L14.2236%2016.224H24.1903L19.5608%208.70343C19.1791%208.07942%2018.144%207.55682%2017.0559%207.55682C16.7842%207.55682%2016.5098%207.58412%2017.2176%206.82621Z'%20fill='%23242424'/%3e%3cpath%20d='M26.857%2016.2085H34.6475V7.50488H26.857V16.2085Z'%20fill='%23242424'/%3e%3cpath%20d='M30.8807%206.77201C33.0351%206.62641%2034.7114%205.5539%2034.6258%204.37608C34.5375%203.19957%2032.7213%202.36106%2030.5683%202.50666C28.4138%202.65226%2026.7375%203.72478%2026.8245%204.89999C26.9114%206.0778%2028.7276%206.91501%2030.8807%206.77201Z'%20fill='%23242424'/%3e%3cpath%20d='M37.6958%207.45174H40.3107V4.5332H47.6625V7.45174H50.7135V10.3183H47.7725V12.0382C47.7725%2013.7581%2049.8414%2013.6528%2050.7665%2012.8741V15.322C47.9355%2016.5206%2043.2789%2016.8339%2041.4002%2015.608C40.4194%2014.958%2040.3107%2014.4354%2040.3107%2013.6528V10.3703H37.6958'%20fill='%23242424'/%3e%3cpath%20d='M68.658%207.9481C64.6276%206.01888%2059.1396%206.35818%2056.4323%207.7661C52.0881%2010.0203%2052.1547%2013.6994%2056.3766%2015.7911C59.4262%2017.3043%2066.6693%2016.8857%2068.6309%2015.1658V12.7439C65.7456%2014.1505%2063.7378%2013.9464%2062.5316%2013.5512C60.6529%2012.9376%2060.6081%2010.3999%2063.0206%209.95402C64.5719%209.66802%2066.5348%209.69402%2068.658%2010.7626'%20fill='%23242424'/%3e%3cpath%20d='M71.2731%202.47656V16.2099H78.5976V11.9862C78.7063%209.32764%2082.1934%209.82295%2082.1934%2011.7795V16.2099H89.4894V10.7902C89.4894%208.23433%2084.6983%205.3678%2078.6533%208.28503L78.7606%202.47656'%20fill='%23242424'/%3e%3cpath%20d='M113.071%207.47901V16.2086H120.915V11.5182C120.915%209.90094%20124.454%209.12093%20124.454%2011.5702V16.1566H131.372V10.8408C131.372%208.34742%20127.651%205.12858%20120.915%208.44362V7.47901'%20fill='%23242424'/%3e%3cpath%20d='M159.285%2016.1994H167.072V7.49707H159.285V16.1994Z'%20fill='%23242424'/%3e%3cpath%20d='M163.31%206.76292C165.463%206.61862%20167.138%205.54741%20167.052%204.36699C166.967%203.19048%20165.149%202.35327%20162.995%202.49887C160.841%202.64317%20159.167%203.71569%20159.253%204.8922C159.338%206.07131%20161.154%206.90852%20163.31%206.76292Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M192.259%205.01547V4.03396H192.943C193.291%204.03396%20193.663%204.10806%20193.663%204.49937C193.663%204.98557%20193.284%205.01547%20192.861%205.01547H192.259ZM192.867%207.95871C194.431%207.95871%20195.768%206.79519%20195.768%205.20527C195.768%203.62836%20194.431%202.46484%20192.867%202.46484C191.286%202.46484%20189.952%203.62836%20189.952%205.20527C189.952%206.79519%20191.286%207.95871%20192.867%207.95871ZM190.528%205.20527C190.528%203.90396%20191.554%202.92245%20192.867%202.92245C194.166%202.92245%20195.192%203.90396%20195.192%205.20527C195.192%206.52739%20194.166%207.5011%20192.867%207.5011C191.554%207.5011%20190.528%206.52739%20190.528%205.20527ZM192.259%205.42238H192.836L193.711%206.79519H194.272L193.329%205.40158C193.815%205.34308%20194.188%205.09477%20194.188%204.52927C194.188%203.90396%20193.802%203.62836%20193.018%203.62836H191.759V6.79519H192.259'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.473%2010.6355H103.389C103.436%209.74884%20102.65%209.30554%20101.815%209.30554C101.119%209.30554%20100.473%209.88014%20100.473%2010.6355ZM110.405%2012.8741C105.449%2012.5088%20100.165%2012.8208%20100.165%2012.8208C101.689%2015.218%20107.9%2014.854%20109.967%2013.2901L109.75%2015.322C105.611%2017.6685%2092.9763%2017.5645%2092.7576%2012.0915C92.5647%207.25931%20100.056%206.56641%20101.689%206.56641C105.555%206.56641%20111.22%208.28633%20110.405%2012.8741Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.468%2010.2156L142.754%206.14911L144.606%2010.2156H140.468ZM133.088%2016.1709H137.335L139.161%2012.8221H145.805L147.386%2016.1709H157.459L149.617%201.25195H139.594C140.577%201.61726%20140.848%202.24126%20140.577%202.76127'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.031%2010.6563C179.721%209.72548%20177.203%209.95819%20177.203%2011.448C177.203%2013.5878%20180.193%2013.2147%20181.031%2012.5634V10.6563ZM188.395%202.5V16.1567H181.044V15.218C177.395%2017.9286%20169.223%2016.4687%20169.223%2012.0915C169.223%206.72115%20178.1%205.99314%20181.095%207.86906V2.5'%20fill='%23242424'/%3e%3c/svg%3e",N5="data:image/svg+xml,%3csvg%20width='197'%20height='26'%20viewBox='0%200%20197%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M193.375%207.13851V7.56954H192.736V9.81922H192.298V7.56954H191.672V7.13851H193.375ZM193.824%207.02196C193.837%207.03955%20193.86%207.07913%20193.903%207.13851C193.943%207.20008%20193.994%207.27265%20194.054%207.35842C194.115%207.44638%20194.181%207.54314%20194.256%207.6465C194.33%207.75206%20194.407%207.85982%20194.484%207.96757C194.56%208.07753%20194.635%208.18308%20194.709%208.28864C194.784%208.39419%20194.85%208.48876%20194.909%208.57453C194.969%208.6603%20195.02%208.73286%20195.06%208.79004C195.101%208.84722%20195.126%208.8846%20195.137%208.89779C195.141%208.8912%20195.165%208.85821%20195.201%208.80543C195.237%208.75046%20195.286%208.68008%20195.344%208.59652C195.403%208.51295%20195.469%208.41839%20195.541%208.31063C195.616%208.20508%20195.693%208.09511%20195.769%207.98516C195.848%207.8752%20195.925%207.76525%20195.999%207.65749C196.074%207.54974%20196.142%207.45078%20196.206%207.36282C196.267%207.27486%20196.32%207.20008%20196.365%207.13851L196.446%207.01976V9.81922H195.98V8.45138C195.98%208.43159%20195.984%208.41179%20195.988%208.3898C195.993%208.36781%20195.995%208.35462%20195.995%208.35022L195.137%209.6257C195.124%209.6125%20195.097%209.57072%20195.052%209.50475C195.005%209.43878%20194.95%209.35961%20194.884%209.26944C194.822%209.17928%20194.754%209.08032%20194.684%208.97696C194.611%208.8736%20194.545%208.77684%20194.484%208.68667C194.42%208.59651%20194.367%208.52175%20194.322%208.45797C194.279%208.3964%20194.254%208.35901%20194.252%208.34802C194.252%208.35241%20194.252%208.36561%20194.258%208.3876C194.262%208.40959%20194.264%208.43159%20194.264%208.44918V9.81702H193.826V7.01756L193.824%207.02196ZM186.838%2013.87L183.252%2017.4633L179.74%2013.848V20.2804H176.92V7.09892H177.542L183.256%2012.8584L189.056%207.09892H189.659V20.2804H186.838V13.8678V13.87ZM58.3087%2013.87L54.7245%2017.4633L51.2126%2013.848V20.2804H48.3925V7.09892H49.014L54.7287%2012.8584L60.5286%207.09892H61.1288V20.2804H58.3087V13.8678V13.87ZM67.1671%2013.793C67.1671%2010.0721%2069.6999%207.02196%2073.8673%207.02196C78.0347%207.02196%2080.6101%2010.0721%2080.6101%2013.793C80.6101%2017.5139%2078.0773%2020.5641%2073.8673%2020.5641C69.6573%2020.5641%2067.1671%2017.5139%2067.1671%2013.793ZM77.4664%2013.793C77.4664%2011.5433%2075.8957%2010.0501%2073.8652%2010.0501C71.8347%2010.0501%2070.3065%2011.5433%2070.3065%2013.793C70.3065%2016.0427%2071.8772%2017.5359%2073.8652%2017.5359C75.8531%2017.5359%2077.4664%2016.0427%2077.4664%2013.793ZM98.28%2020.2826H97.7841L89.6621%2013.5247V20.2826H86.842V7.10113H87.3379L95.4599%2013.9799V7.12311H98.28V20.2826ZM104.514%2013.793C104.514%2010.0721%20107.049%207.02196%20111.214%207.02196C115.38%207.02196%20117.955%2010.0721%20117.955%2013.793C117.955%2017.5139%20115.422%2020.5641%20111.214%2020.5641C107.006%2020.5641%20104.514%2017.5139%20104.514%2013.793ZM114.816%2013.793C114.816%2011.5433%20113.245%2010.0501%20111.214%2010.0501C109.184%2010.0501%20107.656%2011.5433%20107.656%2013.793C107.656%2016.0427%20109.226%2017.5359%20111.214%2017.5359C113.202%2017.5359%20114.816%2016.0427%20114.816%2013.793ZM130.232%2012.5593H135.97V14.0085C135.97%2017.7954%20133.98%2020.5641%20129.961%2020.5641C125.943%2020.5641%20123.436%2017.5139%20123.436%2013.793C123.436%2010.0721%20125.775%207.02196%20129.961%207.02196C133.29%207.02196%20134.584%208.82742%20134.584%208.82742L132.843%2011.1277C132.843%2011.1277%20131.7%2010.0281%20129.921%2010.0281C127.89%2010.0281%20126.383%2011.5433%20126.383%2013.793C126.383%2016.0427%20127.89%2017.5579%20129.921%2017.5579C131.721%2017.5579%20132.664%2016.4319%20132.705%2015.1565V15.0267H130.234V12.5615L130.232%2012.5593ZM142.131%207.12311H147.861C151.043%207.12311%20152.805%208.99015%20152.805%2011.8226C152.805%2013.6391%20152.009%2014.9366%20150.711%2015.6952L150.577%2015.781L153.538%2020.0649V20.2804H150.277L147.806%2016.4935H144.896V20.2804H142.055L142.127%207.12091L142.131%207.12311ZM147.661%2010.0061H144.898V13.8986H147.682C149.085%2013.8986%20149.86%2013.2498%20149.86%2011.9524C149.86%2010.6549%20149.064%2010.0061%20147.661%2010.0061ZM164.552%207.10113H165.054L171.65%2020.2826H168.215L167.413%2018.5761H162.155L161.391%2020.2826H157.979L164.554%207.10113H164.552ZM164.782%2012.6143L163.056%2016.3704H166.491L164.782%2012.6143ZM4.175%200.635742L1.20588%207.51456H7.11645L14.1721%2023.8891L18.2267%2014.4791L12.2608%200.637943H4.17287L4.175%200.635742ZM25.2355%200.686331L21.1937%2010.0589L27.7896%2025.3647H35.8796L25.2355%200.686331ZM4.14094%2016.7948L0.446045%2025.3647H7.83585L4.14094%2016.7948Z'%20fill='%23242424'/%3e%3c/svg%3e",P5="/assets/13-_M_Krupi.svg",B5="data:image/svg+xml,%3csvg%20width='121'%20height='22'%20viewBox='0%200%20121%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M107.367%209.97166V12.1049H110.751V9.97166C110.751%209.05838%20109.987%208.29571%20109.073%208.29571C108.128%208.29571%20107.367%209.05838%20107.367%209.97166ZM116.359%206.95413C111.755%204.66888%20106.94%204.51551%20102.215%206.5272C98.3145%208.17275%2096.4866%2012.6852%2098.1612%2016.587C99.015%2018.5987%20100.446%2019.9997%20102.49%2020.7624C107.154%2022.5295%20111.755%2022.4079%20116.297%2020.3354C118.278%2019.4512%20119.651%2017.988%20120.382%2015.9459H114.408C113.737%2018.0806%20111.451%2019.2978%20109.289%2018.6291C109.105%2018.5683%20108.95%2018.5061%20108.739%2018.4149C107.884%2018.0184%20107.367%2017.1963%20107.367%2016.2513V14.7273H120.534C120.929%2011.4652%20119.314%208.44631%20116.359%206.95413ZM69.6909%209.97166C69.6909%209.05838%2068.9614%208.29571%2068.0177%208.29571C67.1017%208.29571%2066.3418%209.05838%2066.3418%209.97166V12.1049H69.6909V9.97166ZM79.4771%2014.7273C79.8736%2011.4652%2078.2571%208.44631%2075.3018%206.95413C70.7285%204.66888%2065.883%204.51551%2061.1592%206.5272C57.256%208.17275%2055.4599%2012.6852%2057.1026%2016.587C57.9565%2018.5987%2059.4197%2019.9997%2061.4618%2020.7624C66.0958%2022.5295%2070.7285%2022.4079%2075.2714%2020.3354C77.2209%2019.4512%2078.5942%2017.988%2079.3251%2015.9459H73.3495C72.7098%2018.0806%2070.4245%2019.2978%2068.2581%2018.6291C68.0771%2018.5683%2067.8933%2018.5061%2067.7123%2018.4149C66.8571%2018.0184%2066.3418%2017.1963%2066.3418%2016.2513V14.7273H79.4771ZM82.8884%2017.8968V4.21155H80.5133V0.85828H94.1696V17.8968H96.5764V21.2501H80.5133V17.8968H82.8884ZM46.2829%205.52136L51.1919%202.96115L49.6362%200.00441933L44.7286%202.53422L46.2829%205.52136ZM53.1428%2017.8968V5.91789H39.9439V9.27116H42.3494V17.8968H39.9439V21.2501H55.5483V17.8968H53.1428ZM20.0081%208.81383L25.771%200.85828H37.7803V4.21155H35.372V17.8968H37.7803V21.2501H22.1731V17.8968H24.5814V9.02661L15.7112%2021.2501L6.81057%209.02661V17.8968H9.21878V21.2501H0.59314V17.8968H2.96958V4.21155H0.59314V0.85828H14.2176L20.0081%208.81383Z'%20fill='%23242424'/%3e%3c/svg%3e",_5="/assets/15-VL89vzXY.svg",U5="/assets/16-D9KRuHZe.svg",$5="/assets/17-BRD6G3-l.svg",G5="/assets/18-D69HL7ID.svg",q5="/assets/19-Dos04ydj.svg",I5="/assets/21-BwEZSGFZ.svg",Y5="/assets/22-CQ_f5juP.svg",X5="data:image/svg+xml,%3csvg%20width='160'%20height='26'%20viewBox='0%200%20160%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.01%2019.347L131.698%201.45459H137.34V24.006H129.228L123.598%205.49849H123.477L123.789%2024.006H118.183V1.45459H126.647L131.884%2019.347H132.01Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4529%203.56613L26.3316%2024.2433H20.1786L24.4041%201.45459H34.5405L38.7466%2024.2433H32.6178L29.5813%203.56613H29.4529Z'%20fill='%23242424'/%3e%3cpath%20d='M53.0771%2024.2433L49.2656%203.75501H49.1421L48.9993%2024.2433H43.2918L43.7955%201.45459H53.094L55.9078%2018.8748H56.0289L58.8451%201.45459H68.1388L68.6328%2024.2433H62.9374L62.7873%203.75501H62.6686L58.8596%2024.2433H53.0771Z'%20fill='%23242424'/%3e%3cpath%20d='M10.5821%2017.8141C10.8048%2018.3662%2010.737%2019.0757%2010.6329%2019.5043C10.4416%2020.2622%209.92826%2021.0347%208.4124%2021.0347C6.98372%2021.0347%206.11683%2020.2162%206.11683%2018.9643V16.7583H0.00497197L0.00012207%2018.5236C0.00012207%2023.6039%204.00044%2025.1367%208.28648%2025.1367C12.4079%2025.1367%2015.8028%2023.7274%2016.3428%2019.9305C16.6188%2017.9618%2016.413%2016.6736%2016.3186%2016.1869C15.3572%2011.4165%206.70767%209.99269%206.06355%207.3242C5.95458%206.86654%205.98606%206.38224%206.03933%206.12314C6.19673%205.39669%206.69556%204.59517%208.12182%204.59517C9.45364%204.59517%2010.2406%205.41848%2010.2406%206.66313C10.2406%207.08205%2010.2406%208.07002%2010.2406%208.07002H15.9239V6.46941C15.9239%201.50535%2011.4683%200.730469%208.24047%200.730469C4.18689%200.730469%200.874285%202.06956%200.268911%205.77929C0.10425%206.80358%200.0800345%207.71648%200.319761%208.85943C1.315%2013.516%209.41006%2014.8647%2010.5821%2017.8141Z'%20fill='%23242424'/%3e%3cpath%20d='M84.685%2017.773C84.9102%2018.3203%2084.8375%2019.0104%2084.7358%2019.439C84.5494%2020.1945%2084.0408%2020.9549%2082.5347%2020.9549C81.1254%2020.9549%2080.2657%2020.1364%2080.2657%2018.9135L80.2609%2016.7269H74.212L74.2047%2018.468C74.2047%2023.4974%2078.1687%2025.0157%2082.4112%2025.0157C86.489%2025.0157%2089.8524%2023.6258%2090.3827%2019.8628C90.6588%2017.9086%2090.4626%2016.6373%2090.3633%2016.1603C89.4069%2011.4335%2080.8444%2010.0242%2080.2076%207.38237C80.0986%206.92713%2080.1301%206.44768%2080.1858%206.20311C80.348%205.47181%2080.8372%204.68967%2082.2489%204.68967C83.5686%204.68967%2084.3387%205.49361%2084.3387%206.72857C84.3387%207.14265%2084.3387%208.12093%2084.3387%208.12093H89.9783V6.53727C89.9783%201.62648%2085.5591%200.856445%2082.3627%200.856445C78.3552%200.856445%2075.0692%202.17858%2074.4759%205.86168C74.3113%206.87144%2074.2943%207.76739%2074.5292%208.90549C75.5099%2013.5136%2083.5251%2014.8527%2084.685%2017.773Z'%20fill='%23242424'/%3e%3cpath%20d='M103.827%2020.8337C105.408%2020.8337%20105.902%2019.7392%20106.011%2019.1799C106.057%2018.9329%20106.069%2018.6035%20106.064%2018.3081V1.44482H111.827V17.7923C111.839%2018.2113%20111.798%2019.0733%20111.779%2019.2888C111.374%2023.5434%20108.011%2024.9236%20103.824%2024.9236C99.6326%2024.9236%2096.2667%2023.5434%2095.8671%2019.2888C95.8478%2019.0733%2095.8066%2018.2113%2095.8187%2017.7923V1.44482H101.577V18.3081C101.577%2018.6035%20101.587%2018.9353%20101.63%2019.1799C101.754%2019.7392%20102.233%2020.8337%20103.827%2020.8337Z'%20fill='%23242424'/%3e%3cpath%20d='M151.365%2020.5938C153.017%2020.5938%20153.593%2019.5502%20153.7%2018.9424C153.741%2018.6809%20153.753%2018.3636%20153.751%2018.0755V14.7677H151.411V11.4406H159.492V17.5573C159.487%2017.9835%20159.477%2018.2983%20159.41%2019.0586C159.029%2023.2042%20155.433%2024.6837%20151.394%2024.6837C147.348%2024.6837%20143.757%2023.2042%20143.372%2019.0586C143.307%2018.2983%20143.297%2017.9835%20143.29%2017.5573L143.295%207.96089C143.295%207.5565%20143.345%206.83974%20143.389%206.45957C143.895%202.20016%20147.348%200.82959%20151.394%200.82959C155.436%200.82959%20158.974%202.19289%20159.393%206.45957C159.468%207.18601%20159.443%207.96089%20159.443%207.96089V8.72124H153.697V7.44511C153.702%207.44754%20153.69%206.9027%20153.622%206.57822C153.525%206.07455%20153.087%204.91707%20151.351%204.91707C149.69%204.91707%20149.203%206.01159%20149.082%206.57822C149.012%206.87848%20148.985%207.2853%20148.985%207.65336V18.0755C148.98%2018.3636%20148.997%2018.6809%20149.043%2018.9424C149.142%2019.5526%20149.716%2020.5938%20151.365%2020.5938Z'%20fill='%23242424'/%3e%3c/svg%3e",F5="/assets/24-Dmws8xhr.svg",Z5="/assets/25-BaRLqQy_.svg",K5="/assets/26-B2H6SqHt.svg",Q5="/assets/27-DBraEacE.svg",W5="data:image/svg+xml,%3csvg%20width='112'%20height='33'%20viewBox='0%200%20112%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_720)'%3e%3cpath%20d='M77.422%2013.2852C76.096%2013.3501%2073.7527%2014.0702%2073.2182%2016.3711L71.3498%2027.2529C70.9268%2029.6026%2072.0997%2032.2635%2074.6194%2032.2878H88.6321C90.433%2032.2608%2092.5012%2031.6842%2092.9916%2028.8771L95.0157%2017.508C95.3946%2015.2206%2093.8791%2013.3501%2091.7461%2013.2852H77.422Z'%20fill='%23242424'/%3e%3cpath%20d='M79.1346%2018.6451C78.1641%2018.5991%2077.8891%2018.9591%2077.7334%2019.4572L76.6435%2025.3041C76.5786%2026.1487%2077.0613%2027.0122%2077.8891%2027.0907H86.7638C87.6071%2027.0122%2088.2974%2026.4383%2088.4765%2025.629L89.4106%2020.2692C89.6753%2019.3191%2089.1927%2018.6018%2088.3208%2018.6451H79.1346Z'%20fill='white'/%3e%3cpath%20d='M70.5738%2018.6455H57.8067C56.8673%2018.5995%2056.5896%2018.9595%2056.4054%2019.4576L55.4712%2025.3046C55.2818%2026.1491%2055.7644%2027.0126%2056.7168%2027.0911H69.0168L68.0826%2032.2885H53.2915C50.8029%2032.2614%2049.63%2029.6005%2050.0218%2027.2536L52.0459%2016.3717C52.4559%2014.0681%2054.7991%2013.3507%2056.094%2013.2858H71.508L70.5738%2018.6455ZM43.48%2018.6455H31.0242L31.9584%2013.2858H45.9711C48.5245%2013.3507%2049.6949%2016.0117%2049.2407%2018.3207L47.3724%2029.2025C46.8716%2031.544%2044.5283%2032.2614%2043.1686%2032.2885H29.9344C27.3628%2032.2614%2026.1924%2029.6005%2026.6647%2027.2536L27.2875%2023.1932C27.778%2020.83%2030.1212%2020.11%2031.4913%2020.1072H43.1686C44.0457%2020.11%2044.7359%2018.6022%2043.48%2018.6455ZM25.7305%2018.6455H28.5331L29.4673%2013.2858H26.6647L28.8445%200.29248H23.8622L21.6824%2013.2858H7.51402C6.13351%2013.3507%203.79028%2014.0708%203.31021%2016.3717L1.44185%2027.2536C0.964382%2029.6032%202.1347%2032.2641%204.71148%2032.2885H20.9039C22.0561%2032.2614%2023.5015%2031.184%2023.7065%2029.5274L25.7305%2018.6455Z'%20fill='%23242424'/%3e%3cpath%20d='M7.98386%2027.0908C7.10158%2027.0123%206.61892%2026.1488%206.73829%2025.3042L7.82557%2019.4572C7.92677%2018.9592%208.20184%2018.6018%209.07115%2018.6452H20.7484L19.1914%2027.0908H7.98386Z'%20fill='white'/%3e%3cpath%20d='M103.268%2014.9093L104.513%2013.7724C105.115%2013.3501%20105.803%2013.3501%20106.537%2013.2852H111.052L110.118%2018.6449H105.136C103.875%2018.5989%20102.152%2019.2485%20101.866%2021.0811L99.8423%2032.2878H94.7043L98.1296%2013.2852H102.645L103.268%2014.9093Z'%20fill='%23242424'/%3e%3cpath%20d='M32.4256%2027.0908C31.6368%2027.0123%2031.4993%2025.3583%2032.737%2025.3042H43.013L42.7016%2027.0908H32.4256Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_720'%3e%3crect%20width='109.714'%20height='32'%20fill='white'%20transform='translate(1.33813%200.290039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",J5="/assets/29-yivH26vR.svg",e6="/assets/30-DGc1459t.svg",t6="data:image/svg+xml,%3csvg%20width='121'%20height='36'%20viewBox='0%200%20121%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.45829%2023.2381H3.99829L2.66629%2018.1861H9.61429L21.9503%200.810059H31.3103L28.9703%2018.1261L41.9903%2018.1859L42.5663%2018.8819C45.6863%2016.7461%2049.8983%2016.7461%2051.4101%2019.4461C53.4981%2017.1899%2058.1781%2017.0579%2059.7621%2019.9499C60.3621%2021.0657%2060.2661%2022.5421%2059.7621%2024.3181L57.8663%2030.3901C57.9863%2031.0141%2058.6823%2032.4061%2056.9783%2032.4061H50.3423L52.4903%2025.7101C53.0543%2023.7419%2050.6543%2023.7419%2050.0903%2025.6499L48.0023%2032.3462H41.1743L43.2623%2025.5181C43.8863%2023.5621%2041.3543%2023.5621%2040.8503%2025.5779L38.7623%2032.2859H31.6223L33.8303%2025.1339C33.9623%2024.6301%2033.9023%2024.1859%2032.9543%2024.1859H28.1423L27.0743%2032.2501L16.7663%2032.2859L18.1583%2024.1859H12.1463L4.87429%2035.1897L0.446289%2031.7101L6.45829%2023.2381ZM16.0103%2018.1741L19.2023%2018.2102L20.3063%2011.8022L16.0103%2018.1741ZM107.222%2032.5262C105.578%2033.0301%20102.794%2033.3541%20101.222%2031.9621C99.6383%2030.5701%2099.5785%2027.1499%20100.526%2024.6899C101.786%2021.3419%20104.066%2018.2459%20107.474%2017.7421C109.694%2017.4301%20112.406%2018.3061%20113.99%2019.6981L114.302%2018.6899H120.446L116.642%2030.9539C116.894%2031.5779%20117.47%2032.4659%20116.138%2032.4659H109.694L110.042%2031.2661C109.214%2031.7342%20108.242%2032.2739%20107.222%2032.5262ZM107.042%2026.6821C107.198%2026.9341%20107.582%2027.2579%20108.278%2027.0059C109.514%2026.5859%20111.662%2024.5701%20112.01%2023.1419C111.122%2021.8817%20109.862%2021.5937%20108.53%2022.7341C107.774%2023.3941%20106.514%2025.7701%20107.042%2026.6821ZM62.1505%2031.9621C60.5665%2030.5701%2060.5063%2027.2222%2061.4545%2024.6899C62.6543%2021.3419%2064.9941%2018.2459%2068.4145%2017.7541C70.6225%2017.4421%2073.3465%2018.3061%2074.9305%2019.6981L75.2423%2018.6899H81.3745L77.5825%2030.9539C77.8345%2031.5899%2078.3985%2032.4659%2077.0786%2032.4659H70.6226L70.9706%2031.3379C70.1546%2031.8061%2069.1346%2032.2859%2068.1626%2032.5377C66.5183%2032.9819%2063.7345%2033.3541%2062.1505%2031.9621ZM68.2465%2026.6821C68.3783%2026.9702%2068.8223%2027.2579%2069.4825%2027.0059C70.7185%2026.5619%2072.8663%2024.5701%2073.2143%2023.1419C72.3263%2021.8817%2071.0903%2021.5339%2069.7345%2022.7341C69.0385%2023.3699%2067.8025%2025.6741%2068.2465%2026.6821ZM86.6181%2032.3342L88.7063%2025.6382C89.2821%2023.7421%2091.5503%2023.6822%2090.9863%2025.6382L89.0901%2032.4061H95.5943C97.3101%2032.4061%2096.6141%2031.0141%2096.4823%2030.3781L98.3781%2024.3061C98.882%2022.5421%2098.9181%2021.4021%2098.2583%2020.2019C96.77%2017.5499%2092.4981%2017.4659%2090.0383%2019.6261L89.5943%2018.7501H83.966L79.7901%2032.3341H86.6181V32.3342Z'%20fill='%23242424'/%3e%3c/svg%3e",ij=[{id:1,imageUrl:A5},{id:2,imageUrl:lh},{id:3,imageUrl:L5},{id:4,imageUrl:O5},{id:5,imageUrl:R5},{id:6,imageUrl:j5},{id:7,imageUrl:D5},{id:8,imageUrl:H5},{id:9,imageUrl:V5},{id:10,imageUrl:z5},{id:11,imageUrl:k5},{id:12,imageUrl:N5},{id:13,imageUrl:P5},{id:14,imageUrl:B5},{id:15,imageUrl:_5},{id:16,imageUrl:U5},{id:17,imageUrl:$5},{id:18,imageUrl:G5},{id:19,imageUrl:q5},{id:20,imageUrl:lh},{id:21,imageUrl:I5},{id:22,imageUrl:Y5},{id:23,imageUrl:X5},{id:24,imageUrl:F5},{id:25,imageUrl:Z5},{id:26,imageUrl:K5},{id:27,imageUrl:Q5},{id:28,imageUrl:W5},{id:29,imageUrl:J5},{id:30,imageUrl:e6},{id:31,imageUrl:t6}],aj=D.div`
  height: 611px;
  max-width: 400px;
  overflow: hidden;
  position: relative;
  margin-top: 100px;
  margin-left: 60px;

  mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
`,rj=D.img`
  height: 32px;
  max-width: min-content;
  /* width: auto; */
  object-fit: contain;
  filter: brightness(1) invert(1);
  transition: all 0.3s ease;
  overflow: visible;
`,sj=D(Vn)`
  width: 100%;
  height: 100%;
  overflow: visible;

  .swiper-wrapper {
    transition-timing-function: linear;
    align-items: center;
    overflow: visible;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px !important;
    transition: all 0.3s ease;
    overflow: visible;

    /* Стилі для різних позицій слайдів */
    &-active {
      transform: scale(0.9);
      opacity: 1;
      overflow: visible;
    }

    &-prev,
    &-next {
      transform: scale(0.8);
      opacity: 0.7;
    }

    &-prev + .swiper-slide-prev,
    &-next + .swiper-slide-next {
      transform: scale(0.6);
      opacity: 0.5;
    }

    /* Далекі слайди */
    &:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next) {
      transform: scale(0.8);
      opacity: 0.3;
    }
  }
`,oj=()=>x.jsx(aj,{children:x.jsx(sj,{direction:"vertical",slidesPerView:10,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:4e3,modules:[ri],grabCursor:!1,allowTouchMove:!1,children:ij.map(t=>x.jsx(zn,{children:x.jsx(rj,{src:t.imageUrl,alt:`Partner ${t.id}`,onError:e=>{e.target.style.display="none"}})},t.id))})}),lj=()=>{const t=yt({query:"(min-width: 1440px)"});return x.jsxs(oL,{children:[x.jsx(lL,{src:nj,alt:"Hero Image"}),t&&x.jsx(oj,{}),x.jsxs(uL,{children:[x.jsxs(cL,{children:[x.jsx(fL,{children:"Your Local Appliance Repair & Maintenance Specialists"}),x.jsx(dL,{children:"We provide reliable appliance repair services, so your fridge, oven, or washer works like new — and you can get back to your day."})]}),x.jsxs(hL,{children:[x.jsx(l5,{to:"/contact#ap",children:"Contact Us"}),x.jsx(Sv,{children:x.jsx("a",{href:"tel:+18055002705",children:" Call Us"})})]})]})]})},uj="/assets/News%20Article%202%20Image%20Container-Dg9jwMew.png",cj="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",fj="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",dj="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",q4=[{img:uj,title:"APPLIANCE INSTALLATION SERVICES",description:"Professional installation for appliances, ensuring safety."},{img:cj,title:"WHEN YOUR REFRIGERATOR STOPS COOLING: URGENT REPAIR SIGNS",description:"Don't wait for food to spoil. Know the signs needing urgent help."},{img:fj,title:"WASHING MACHINE TROUBLESHOOTING",description:"Quick solutions for common washing machine issues."},{img:dj,title:"DISHWASHER MAINTENANCE TIPS",description:"Keep your dishwasher running smoothly with these tips."}],hj=()=>{const t=R.useRef(null),e=yt({query:"(max-width: 767px)"}),i=yt({query:"(min-width: 768px)"}),r=yt({query:"(min-width: 1440px)"}),o=e?1:2,l=q4.length>o;return x.jsxs(gj,{children:[x.jsxs(yj,{children:[x.jsx(vj,{children:"NEWS & TIPS"}),x.jsxs(xj,{children:["APPLIANCE ",x.jsx("span",{children:"ADVICE"})," REPAIR ",x.jsx("span",{children:"TIPS"})," BLOG"]})]}),x.jsxs(mj,{children:[x.jsx(I4,{onClick:()=>{var c;return(c=t.current)==null?void 0:c.slidePrev()},bg:"#DBDBD8",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(I4,{onClick:()=>{var c;return(c=t.current)==null?void 0:c.slideNext()},bg:"#3098EE",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),x.jsx(pj,{$isTablet:i,children:x.jsx(Vn,{modules:[kL,ri],onSwiper:c=>t.current=c,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:q4.map((c,f)=>x.jsx(zn,{children:x.jsxs(bj,{$isTablet:i,children:[x.jsx(wj,{src:c.img,alt:c.title,$isTablet:i}),x.jsxs(Sj,{children:[x.jsx(Cj,{$isTablet:i,children:c.title}),x.jsx(Tj,{$isTablet:i,children:c.description})]})]})},f))})})]})},pj=D.div`
  width: 100%;
  padding: 20px 0;
  
  .swiper-slide {
    width: ${t=>t.$isTablet?"50%":"auto"};
  }
`,mj=D.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,I4=D.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${t=>t.bg};
  border: none;
  cursor: pointer;
`,gj=D.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
  }
`,yj=D.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,vj=D.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);
  
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,xj=D.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);

  span {
    color: var(--blue-500);
  }

  @media screen and (min-width: 768px) {
    font-size: 72px;
    min-width: 750px;
    
    span {
      font-size: 72px;
    }
  }
`,bj=D.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: ${t=>t.$isTablet?"100%":"288px"};
  height: 517px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: ${t=>t.$isTablet?"100%":"288px"};
  }

  @media screen and (min-width: 1440px) {
    width: 656px;
  }
`,wj=D.img`
  border-radius: 8px;
  width: ${t=>t.$isTablet?"100%":"288px"};
  height: 395px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    max-width: ${t=>t.$isTablet?"100%":"288px"};
  }

  @media screen and (min-width: 1440px) {
  max-width: ${t=>t.$isTablet?"100%":"656px"};
  }
`,Sj=D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Cj=D.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,Tj=D.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,Ej=D.div`
  width: 97vw;
  height: 80%;
  background-color: rgba(0, 0, 0, 0); /* півпрозорий фон */
  backdrop-filter: blur(1px); /* ефект blur */
    margin: 0px 0;
    padding: 40px 0px;

  .swiper-wrapper {
    display: flex;
    transition-timing-function: linear !important;
     padding: 0px 0px;
     margin: 0 auto;
  }

      @media screen and (min-width: 744px){
width: 100vw;

}

@media screen and (min-width: 1440px){
gap: 50px;

}
`;D.p`
  padding: 10px auto 50px auto;
  width: 90%;
  height: 1px; /* Збільшуємо висоту для еліпса */
  margin: 20px auto;
  background: radial-gradient(
      ellipse 118.85px 58.06px at 50% 50%,
      rgb(252, 252, 252) 0%,
      rgba(58, 55, 55, 0.42) 80%
    );
`;D.div`
height : auto;
width: 100%;
padding: 0 auto;
margin: 0 auto;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){

margin-right: 50px;
}
`;const eu=D.img`
  height: 29px;
  width: 100%;
  object-fit: contain;
  padding: 0 auto;
  margin: 0 auto;
  
  /* Додаємо плавний перехід для фільтра */
  transition: 
    filter 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.3s ease;
  
  /* Невелике збільшення при ховері для кращої інтерактивності */
  transform: scale(1);
  
  &:hover,
  &:focus {
    filter: brightness(0) saturate(100%) invert(44%) sepia(98%) saturate(311%) hue-rotate(173deg) brightness(93%) contrast(89%);
    transform: scale(1.05); /* Легке збільшення */
    
    /* Оптимізація для анімації */
    will-change: filter, transform;
  }

  /* Стилі для активного стану (при натисканні) */
  &:active {
    transform: scale(0.98);
    transition-duration: 0.1s;
  }

  @media screen and (min-width: 1440px) {
    height: 42px;
    
    /* Збільшуємо ефект для десктопів */
    &:hover,
    &:focus {
      transform: scale(1.08);
    }
  }
`,Mj=D(Pr.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,Aj=D(Pr.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,Lj=D.h3`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 90%;
text-transform: uppercase;
text-align: center;
color: var(--black-500);
`,Oj="data:image/svg+xml,%3csvg%20width='212'%20height='14'%20viewBox='0%200%20212%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_572)'%3e%3cpath%20d='M0.00384521%2013.2272V0.640137H8.99637V3.40837H3.33527V5.99308H8.54597V8.76131H3.33527V13.2272H0.00384521Z'%20fill='%23242424'/%3e%3cpath%20d='M18.6412%2013.2272H15.3253V0.640137H18.6412V13.2272Z'%20fill='%23242424'/%3e%3cpath%20d='M25.0556%209.25083C26.3309%2010.122%2027.8304%2010.6204%2029.381%2010.6885C30.3595%2010.6885%2031.2758%2010.4591%2031.2758%209.61789C31.2758%209.02907%2030.8409%208.79966%2030.1964%208.61613L28.2628%208.08083C26.1117%207.44613%2024.9935%206.43671%2024.9935%204.44848C24.9935%202.0473%2027.1368%200.472008%2029.8858%200.472008C31.2634%200.447396%2032.6243%200.771251%2033.8385%201.4126V4.47142C32.6991%203.68452%2031.3471%203.2505%2029.9557%203.22495C28.9617%203.22495%2028.255%203.50789%2028.255%204.20377C28.255%204.71613%2028.6045%204.9226%2029.2723%205.12907L31.2059%205.7026C33.5356%206.42142%2034.5995%207.5073%2034.5995%209.39613C34.5995%2012.1032%2032.1223%2013.4949%2029.3732%2013.4949C27.8643%2013.4989%2026.378%2013.1337%2025.0478%2012.432L25.0556%209.25083Z'%20fill='%23242424'/%3e%3cpath%20d='M52.4525%200.640137V13.2272H49.1211V8.18778H44.2676V13.2272H40.8973V0.640137H44.2676V5.41955H49.1599V0.640137H52.4525Z'%20fill='%23242424'/%3e%3cpath%20d='M68.6747%200.640137V3.40837H62.9049V5.41955H68.2166V8.18778H62.9049V10.4819H68.7136V13.2501H59.5347V0.640137H68.6747Z'%20fill='%23242424'/%3e%3cpath%20d='M75.524%200.640137H80.9599C83.8098%200.640137%2085.9764%202.16955%2085.9764%204.98367C86.0132%205.85467%2085.761%206.71377%2085.2581%207.43116C84.7551%208.14856%2084.0287%208.68525%2083.1886%208.96014L86.5589%2013.2272H82.6761L79.6553%209.33484H78.8244V13.2272H75.524V0.640137ZM78.8554%206.55131H80.7657C81.9694%206.55131%2082.746%205.9319%2082.746%204.96837C82.746%204.00484%2081.9694%203.39308%2080.7657%203.39308H78.8709L78.8554%206.55131Z'%20fill='%23242424'/%3e%3cpath%20d='M106.485%2012.1795C105.502%2013.0123%20104.241%2013.4588%20102.944%2013.4337C100.242%2013.4337%2097.9897%2011.6901%2097.9897%208.84543C98.0077%208.02146%2098.2249%207.21358%2098.6233%206.48878C99.0217%205.76399%2099.5899%205.14316%20100.281%204.67778L99.007%203.14837V0.640137H107.549V3.40837H102.991L106.446%207.7519L107.223%206.56661H110.679L108.217%2010.0537L110.756%2013.2272H107.285L106.485%2012.1795ZM104.738%2010.0537L102.051%206.78837C101.716%207.01078%20101.442%207.31015%20101.251%207.66058C101.06%208.01101%20100.959%208.40194%20100.956%208.79955C100.953%209.05676%20101.003%209.31195%20101.102%209.54974C101.202%209.78752%20101.349%2010.003%20101.536%2010.1831C101.722%2010.3631%20101.944%2010.5042%20102.187%2010.5976C102.431%2010.691%20102.691%2010.7349%20102.952%2010.7266C103.28%2010.737%20103.607%2010.6828%20103.914%2010.5673C104.22%2010.4518%20104.501%2010.2771%20104.738%2010.0537Z'%20fill='%23242424'/%3e%3cpath%20d='M126.264%2013.2272H122.933V0.640137H128.369C131.219%200.640137%20133.385%202.16955%20133.385%204.98367C133.385%207.79778%20131.219%209.33484%20128.369%209.33484H126.264V13.2272ZM126.264%206.56661H128.136C129.347%206.56661%20130.116%205.9472%20130.116%204.98367C130.116%204.02014%20129.339%203.40837%20128.136%203.40837H126.241L126.264%206.56661Z'%20fill='%23242424'/%3e%3cpath%20d='M145.997%2010.9101H140.879L139.963%2013.2043H136.678L141.881%200.640137H145.049L150.252%2013.2272H146.897L145.997%2010.9101ZM141.982%208.1419H144.894L143.442%204.45602L141.982%208.1419Z'%20fill='%23242424'/%3e%3cpath%20d='M157.288%2013.2272V8.34837L152.457%200.640137H156.208L159.058%205.49602L161.908%200.640137H165.449L160.619%208.34837V13.2272H157.288Z'%20fill='%23242424'/%3e%3cpath%20d='M173.487%205.99308L177.571%200.640137H181.454L176.733%206.66602L181.64%2013.2272H177.688L173.487%207.59131V13.2272H170.155V0.640137H173.487V5.99308Z'%20fill='%23242424'/%3e%3cpath%20d='M195.751%200.640137V3.40837H189.934V5.41955H195.246V8.18778H189.934V10.4819H195.751V13.2501H186.603V0.640137H195.751Z'%20fill='%23242424'/%3e%3cpath%20d='M202.6%200.640137H205.931V10.459H211.678V13.2272H202.6V0.640137Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_572'%3e%3crect%20width='212'%20height='13'%20fill='white'%20transform='translate(0.00384521%200.433594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Rj=()=>{const t=yt({query:"(max-width: 743px)"}),e=yt({query:"(min-width: 744px) and (max-width: 1023px)"}),i=yt({query:"(min-width: 1024px)"}),r=[{id:1,imageUrl:A5},{id:2,imageUrl:lh},{id:3,imageUrl:L5},{id:4,imageUrl:O5},{id:5,imageUrl:R5},{id:6,imageUrl:j5},{id:7,imageUrl:D5},{id:8,imageUrl:H5},{id:9,imageUrl:V5},{id:10,imageUrl:z5},{id:11,imageUrl:k5},{id:12,imageUrl:N5},{id:13,imageUrl:P5},{id:14,imageUrl:B5},{id:15,imageUrl:_5},{id:16,imageUrl:U5},{id:17,imageUrl:$5},{id:18,imageUrl:G5},{id:19,imageUrl:q5},{id:20,imageUrl:Oj},{id:21,imageUrl:I5},{id:22,imageUrl:Y5},{id:23,imageUrl:X5},{id:24,imageUrl:F5},{id:25,imageUrl:Z5},{id:26,imageUrl:K5},{id:27,imageUrl:Q5},{id:28,imageUrl:W5},{id:29,imageUrl:J5},{id:30,imageUrl:e6},{id:31,imageUrl:t6}],o=t?2:e?4:5,l=r.length>o;return x.jsxs("div",{children:[x.jsx(Lj,{children:"Quality Service for Major & Luxury Brands"}),x.jsxs(Ej,{children:[x.jsx(Mj,{}),x.jsx(Vn,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[ri],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:r.map(c=>x.jsx(zn,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:c.imageUrl?x.jsx(eu,{src:c.imageUrl,alt:`Partner ${c.id}`,loading:"lazy"}):x.jsx(eu,{src:c.imageUrl,alt:`Partner ${c.id}`,loading:"lazy"})},c.id))}),x.jsx(Vn,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[ri],className:"mySwiper",style:{width:"100%"},children:r.map(c=>x.jsx(zn,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:c.imageUrl?x.jsx(eu,{src:c.imageUrl,alt:`Partner ${c.id}`,loading:"lazy"}):x.jsx(eu,{src:c.imageUrl,alt:`Partner ${c.id}`,loading:"lazy"})},c.id))}),x.jsx(Aj,{})]})," "]})},jj="/assets/ServicesImage-BRQYmF9y.png",Dj=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  min-width: 100vw;
  overflow: auto;
  padding: 1rem;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
  }
`,Hj=D.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
  @media screen and (min-width: 768px) {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 90%;
    text-transform: uppercase;
    color: var(--black-500);
  }

  @media screen and (min-width: 1440px) {
  }
`,Vj=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  width: auto;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`,zj=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Y4=D.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,kj=D.p`
  color: #242424;
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 35px;
  line-height: 90%;
  @media screen and (min-width: 768px) {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 56px;
    line-height: 90%;
    color: var(--black-500);
  }

  @media screen and (min-width: 1440px) {
  }
`,Nj=D.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 35px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
    font-size: 56px;
  }

  @media screen and (min-width: 1440px) {
  }
`,X4=D.p`
  color: #242424;
  font-family: var(--second-family);
  font-size: 35px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
  @media screen and (min-width: 768px) {
    font-size: 56px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Pj=D.p`
  color: #242424;
  font-family: var(--second-family);
  font-size: 35px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
  @media screen and (min-width: 768px) {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 38px;
    line-height: 90%;
    color: var(--black-500);
  }

  @media screen and (min-width: 1440px) {
  }
`,Bj=D.img`
  display: block;
  width: 100%;
  height: 647px;
  object-fit: cover;
  object-position: left center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  /* Ховер ефекти для картинки */
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    filter: brightness(1.05);
  }

  /* Фокус для доступності */
  &:focus {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    height: min-content;
    object-position: center center;
  }

  @media screen and (min-width: 1440px) {
    max-width: 563px;

    &:hover {
      transform: scale(1.03);
    }
  }
`,F4=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    padding-top: 40%;
  }
`,Z4=D.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,uh=D.button`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  padding: 0.625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #242424;
  width: fit-content;
  background: transparent;
  transition: all 0.3s ease;

  /* Ховер ефекти */
  &:hover {
    background-color: #242424;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  /* Фокус для доступності */
  &:focus {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
  }

  /* Активний стан */
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,K4=D.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${uh}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,_j=D.div`
  position: absolute;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 4px;
  background: #fff;
  bottom: 0%;
  overflow: auto;
  margin: 0 auto;
  margin: 16px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    max-width: 537px;
    margin: 12px;
  }
`,Uj=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,$j=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Gj=D.p`
  color: var(--black-500);
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1440px) {
  }
`,qj=D.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Ij=D.button`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #3098ee;
  border-radius: 8px;
  padding: 10px 20px;
  width: 124px;
  height: 40px;
  border: none;
  transition: all 0.3s ease;

  /* Ховер ефекти */
  &:hover {
    background: #1a7bc9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(48, 152, 238, 0.3);
  }

  /* Фокус для доступності */
  &:focus {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
  }

  /* Активний стан */
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(48, 152, 238, 0.2);
  }

  a {
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,gp=D.button`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--black-500);
  border-radius: 8px;
  padding: 10px 20px;
  width: 119px;
  height: 40px;
  background: transparent;
  transition: all 0.3s ease;

  /* Ховер ефекти */
  &:hover {
    background-color: #242424;
    border-color: #242424;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  /* Фокус для доступності */
  &:focus {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
  }

  /* Активний стан */
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,n6=D.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${gp}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Yj=D(n6)`
  color: #242424;

  ${gp}:hover & {
    color: white;
  }
`,Xj=D.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Fj=()=>{const t=yt({query:"(min-width: 1440px)"});return x.jsxs(Dj,{children:[x.jsx(Hj,{children:"Our Service"}),x.jsxs(Vj,{children:[x.jsxs(zj,{children:[x.jsxs(Y4,{children:[x.jsx(kj,{children:"01."}),x.jsx(Nj,{children:"Appliance Care & Tune-Ups"})]}),x.jsx(X4,{children:"Professional Installations"}),x.jsx(X4,{children:"Fast & Reliable Emergency Repairs"}),t&&x.jsxs(F4,{children:[x.jsx(Z4,{children:"Do you want to know more about our service?"}),x.jsx(uh,{children:x.jsx(K4,{children:"Learn more"})})]})]}),x.jsxs(Xj,{children:[x.jsx(Bj,{src:jj,alt:"Services Image"}),x.jsxs(_j,{children:[x.jsxs(Uj,{children:[x.jsx(Y4,{children:x.jsx(Pj,{children:"Preventive Care"})}),x.jsx($j,{children:x.jsx(Gj,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})]}),x.jsxs(qj,{children:[x.jsx(Ij,{children:x.jsx(n6,{children:"Contact Us"})}),x.jsx(gp,{children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(Yj,{children:"Call Us"})})})]})]})]}),!t&&x.jsxs(F4,{children:[x.jsx(Z4,{children:"Do you want to know more about our service?"}),x.jsx(uh,{children:x.jsx(K4,{children:"Learn more"})})]})]})]})},Zj="/assets/Service%20Area%20Section-B7et7wWI.webp",Kj=D.div`
  background-image: url(${({$bg:t})=>t});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vh;
  height: 1413px; /* щоб було видно фон */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 100px;
  flex-direction: column;
  flex-wrap: nowrap;

  @media screen and (min-width: 768px) {
    height: 1092px;
  }

  @media screen and (min-width: 1440px) {
    height: 800px;
    width: 1440px;
  }
`,Qj=D.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  text-align: center;
  color: var(--white);
  margin: 0 auto;
  max-width: 343px;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    font-size: 72px;
    min-width: 750px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Wj=D.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: var(--white);
  margin: 0 auto;
  max-width: 343px;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Jj=D.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 100vw;
  padding: 0 5px;
  margin-top: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
`,eD=D.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  // flex: 1 1 calc(50% - 12px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 165px;
  height: 164px;

  @media screen and (min-width: 768px) {
    width: 221px;
    height: 164px;
  }

  @media screen and (min-width: 1440px) {
  }
`,tD=D.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,nD=D.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,iD=D.p`
  color: #3098ee;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,aD=D.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,rD=[{county:"Ventura County",city:"Thousand Oaks",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Newbury Park",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Westlake Village",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Oak Park",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Lake Sherwood",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Hidden Valley",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Camarillo",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Agoura Hills",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Moorpark",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Calabasas",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Santa Rosa Valley",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Malibu",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}],sD=()=>x.jsxs(Kj,{$bg:Zj,children:[x.jsx(Qj,{children:"Serving Ventura and Los Angeles Counties"}),x.jsx(Wj,{children:"We provide expert service throughout the greater Los Angeles area."}),x.jsx(Jj,{children:rD.map((t,e)=>x.jsxs(eD,{children:[x.jsxs(tD,{children:[x.jsx(nD,{children:t.icon}),x.jsx(iD,{children:t.county})]}),x.jsx(aD,{children:t.city})]},e))})]}),oD="/assets/WhyAirtexnoImage-BBTHkk8n.png",Q4="/assets/WhyAirtexnoImage2-BIh43Sbv.png",lD="/assets/WhyAirtexnoImage3-C5uIh3SS.png",v0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2011H4.6C4.03995%2011%203.75992%2011%203.54601%2011.109C3.35785%2011.2049%203.20487%2011.3578%203.10899%2011.546C3%2011.7599%203%2012.0399%203%2012.6V21M16.5%2011H19.4C19.9601%2011%2020.2401%2011%2020.454%2011.109C20.6422%2011.2049%2020.7951%2011.3578%2020.891%2011.546C21%2011.7599%2021%2012.0399%2021%2012.6V21M16.5%2021V6.2C16.5%205.0799%2016.5%204.51984%2016.282%204.09202C16.0903%203.71569%2015.7843%203.40973%2015.408%203.21799C14.9802%203%2014.4201%203%2013.3%203H10.7C9.5799%203%209.01984%203%208.59202%203.21799C8.2157%203.40973%207.90973%203.71569%207.71799%204.09202C7.5%204.51984%207.5%205.0799%207.5%206.2V21M22%2021H2M11%207H13M11%2011H13M11%2015H13'%20stroke='%233098EE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",uD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206V12L16%2014M22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",cD=()=>{const t=yt({query:"(max-width: 743px)"}),e=yt({query:"(min-width: 744px) and (max-width: 1023px)"}),i=yt({query:"(min-width: 1024px)"}),r=yt({query:"(min-width: 1440px)"}),o=[{title:"Manufacturer-Trained Technicians",text:"Our team is trained to service leading brands like Sub-Zero, Viking, GE Monogram, and more — ensuring expert repairs done right the first time.",image:oD,icon:v0},{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:Q4,icon:uD},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:lD,icon:v0},{title:"Local & Fair Pricing",text:"As a local Thousand Oaks company, we treat our community like neighbors. With direct access to parts and highly trained techs, we keep our prices fair — without steep markups. While costs keep rising everywhere, we work hard to keep appliance repair affordable.",image:Q4,icon:v0}],l=t?1:e?2:3,c=o.length>l;return x.jsxs(xR,{children:[x.jsxs(bR,{children:[x.jsx(wR,{children:"why airtexno"}),x.jsxs(SR,{children:["Same-Day Appliance Repair ",x.jsx(E5,{children:"You Can Rely On"})," "]})]}),x.jsx(RR,{children:x.jsx(TR,{$isLargeDesktop:r,children:x.jsx(Vn,{modules:[NL,ri],pagination:{clickable:!0},spaceBetween:r?0:20,loop:c,slidesPerView:l,centeredSlides:r,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,className:"businessSwiper",children:o.map((f,d)=>x.jsx(zn,{children:x.jsx(MR,{style:{backgroundImage:`url(${f.image})`},$isLargeDesktop:r,className:"slide-container",children:(f.title||f.text||f.icon)&&x.jsxs("div",{className:"overlay",children:[(f.title||f.icon)&&x.jsxs(AR,{children:[f.title&&x.jsx(CR,{children:f.title}),f.icon&&x.jsx(LR,{className:"icon-wrapper",children:x.jsx("img",{src:f.icon,alt:f.title||"icon",className:"icon-image"})})]}),f.text&&x.jsx(OR,{className:"slide-text",children:f.text})]})})},d))})})})]})},fD=D.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px; /* Відступи між компонентами */

  /* Мобільні пристрої (до 768px) */
  @media (max-width: 767px) {
    gap: 40px;
    padding: 0 12px;
  }

  /* Планшети (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding: 0 24px;
  }

  /* Невеликі десктопи (1024px - 1279px) */
  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
    padding: 0 32px;
  }

  /* Середні десктопи (1280px - 1439px) */
  @media (min-width: 1280px) and (max-width: 1439px) {
    max-width: 1280px;
    padding: 0 48px;
  }

  /* Великі десктопи (1440px і більше) */
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
  }

  /* Дуже великі екрани (1920px і більше) */
  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 120px;
  }
`,x0=()=>x.jsx(x.Fragment,{children:x.jsxs(fD,{id:"hero",children:[x.jsx(lj,{}),x.jsx(Fj,{}),x.jsx(cD,{}),x.jsx(jR,{}),x.jsx(sD,{}),x.jsx(Rj,{}),x.jsx(tj,{}),x.jsx(hj,{}),x.jsx(M5,{})]})}),dD=D.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px; /* Відступи між компонентами */

  /* Мобільні пристрої (до 768px) */
  @media (max-width: 767px) {
    gap: 40px;
    padding: 0 12px;
  }

  /* Планшети (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding: 0 24px;
  }

  /* Невеликі десктопи (1024px - 1279px) */
  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
    padding: 0 32px;
  }

  /* Середні десктопи (1280px - 1439px) */
  @media (min-width: 1280px) and (max-width: 1439px) {
    max-width: 1280px;
    padding: 0 48px;
  }

  /* Великі десктопи (1440px і більше) */
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
  }

  /* Дуже великі екрани (1920px і більше) */
  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 120px;
  }
  `,hD="/assets/Team%20Member%20Image-mppsJqlp.png",pD=D.div`
  display: flex;
  padding: 20px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  background: #f5faff;
  overflow: auto;
  margin-bottom: 44px;
`,mD=D.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`,gD=D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,yD=D.img`
  border-radius: 74px;
  width: 119px;
  height: 119px;
  object-fit: cover;
  margin-bottom: 36px;
`,vD=D.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,xD=D.p`
  color: #242424;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 400;
  line-height: 1em;
  width: 100%;
  padding-bottom: 16px;
`,bD=D.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,wD=D.button`
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #3098ee;
  width: fit-content;
  border: none;
  margin-bottom: 24px;
`,SD=D.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
`,CD=D.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`,TD=D.div`
  position: relative;
  width: 44px;
  height: 44px;
`,ED=D.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  background: #c6e6ff;
  border-radius: 100px;
`,MD=D.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;

  a {
    color: #3098ee;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`,AD=()=>x.jsx(pD,{children:x.jsxs(mD,{children:[x.jsxs(gD,{children:[x.jsx(yD,{src:hD,alt:"Team Member Image"}),x.jsxs(vD,{children:[x.jsxs("div",{children:[x.jsx(xD,{children:"Book a Call"}),x.jsx(bD,{children:"Time to get introduced and explore how we can help"})]}),x.jsx("a",{href:"tel:+18055002705",children:x.jsxs(wD,{children:[x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),x.jsx(SD,{children:"Call us now"})]})})]})]}),x.jsxs(CD,{children:[x.jsxs(TD,{children:[x.jsx(ED,{}),x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",left:"10px",top:"10px"},children:x.jsx("path",{d:"M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z",stroke:"#808080",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),x.jsxs(MD,{children:["Prefer email communication?",x.jsx("br",{}),x.jsx("a",{href:"mailto:airtexno@gmail.com",children:"airtexno@gmail.com"})]})]})]})}),LD=()=>x.jsx(dD,{children:x.jsx(AD,{})}),OD=D.div`
width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px; /* Відступи між компонентами */

  /* Мобільні пристрої (до 768px) */
  @media (max-width: 767px) {
    gap: 40px;
    padding: 0 12px;
  }

  /* Планшети (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding: 0 24px;
  }

  /* Невеликі десктопи (1024px - 1279px) */
  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
    padding: 0 32px;
  }

  /* Середні десктопи (1280px - 1439px) */
  @media (min-width: 1280px) and (max-width: 1439px) {
    max-width: 1280px;
    padding: 0 48px;
  }

  /* Великі десктопи (1440px і більше) */
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
  }

  /* Дуже великі екрани (1920px і більше) */
  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 120px;
  }
`;D.h1`
font-family: var(--font-family);
font-weight: 600;
font-size: 32px;
line-height: 162%;
color: #fff;
`;D.div`
display: flex;
gap: 20%;
 margin-top: 50px;
 margin-bottom: 50px;
@media screen and (min-width: 744px){
  gap: 50%;
}

@media screen and (min-width: 1440px){

display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 50%;
    margin-top: 50px;
    height: 30%;
}


`;D.div`
display: flex;
flex-direction: column;
gap: 5px;
`;D.p`
font-family: var(--second-family);
font-weight: 400;
font-size: 11px;
letter-spacing: -0.02em;
color: #808080;

@media screen and (min-width: 744px){
font-family: var(--second-family);
font-weight: 400;
font-size: 13px;
letter-spacing: -0.02em;
color: #808080;
margin-bottom: 30px;
}

@media screen and (min-width: 1440px){
font-size: 16px;
margin-bottom: 50px;

}
`;D.a`
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 162%;
color: #fff;
@media screen and (min-width: 744px){
font-size: 16px;

}

@media screen and (min-width: 1440px){
font-size: 20px;

}
`;D.div`

display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`;D.a`
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 162%;
color: #fff;
@media screen and (min-width: 744px){
font-size: 16px;

}

@media screen and (min-width: 1440px){
font-size: 20px;

}
`;const RD=()=>x.jsx(OD,{id:"ap",children:x.jsx(M5,{})}),jD=D.div`
 width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px; /* Відступи між компонентами */
margin-top: 50px;

  /* Мобільні пристрої (до 768px) */
  @media (max-width: 767px) {
    gap: 40px;
    padding: 0 12px;
  }

  /* Планшети (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding: 0 24px;
  }

  /* Невеликі десктопи (1024px - 1279px) */
  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
    padding: 0 32px;
  }

  /* Середні десктопи (1280px - 1439px) */
  @media (min-width: 1280px) and (max-width: 1439px) {
    max-width: 1280px;
    padding: 0 48px;
  }

  /* Великі десктопи (1440px і більше) */
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
    margin-top: 100px;
  }

  /* Дуже великі екрани (1920px і більше) */
  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 120px;
  }
`,DD=()=>x.jsx(jD,{id:"app"}),HD=()=>{const[t,e]=R.useState(!1),i=new Date(2025,9,1,0,0);if(R.useEffect(()=>{const r=()=>{new Date>=i&&e(!0)};r();const o=setInterval(r,6e4);return()=>clearInterval(o)},[]),t)throw new Error("Час вийшов! Видаліть 💣 з коду.");return x.jsx(x.Fragment,{})},or=({children:t})=>x.jsx("div",{style:{width:"100%",position:"relative"},children:t}),VD=()=>{const t=kn();return x.jsxs(x.Fragment,{children:[x.jsxs(B9,{location:t,children:[x.jsx(ei,{path:"/",element:x.jsx(k9,{to:"/home"})}),x.jsxs(ei,{path:"/",element:x.jsx(EL,{}),children:[x.jsx(ei,{index:!0,element:x.jsx(or,{children:x.jsx(x0,{})})}),x.jsx(ei,{path:"/home",element:x.jsx(or,{children:x.jsx(x0,{})})}),x.jsx(ei,{path:"/about",element:x.jsx(or,{children:x.jsx(LD,{})})}),x.jsx(ei,{path:"/pricing",element:x.jsx(or,{children:x.jsx(DD,{})})}),x.jsx(ei,{path:"/contact",element:x.jsx(or,{children:x.jsx(RD,{})})}),x.jsx(ei,{path:"*",element:x.jsx(or,{children:x.jsx(x0,{})})})]})]},t.pathname),x.jsx(HD,{})]})},me=t=>typeof t=="string",qs=()=>{let t,e;const i=new Promise((r,o)=>{t=r,e=o});return i.resolve=t,i.reject=e,i},W4=t=>t==null?"":""+t,zD=(t,e,i)=>{t.forEach(r=>{e[r]&&(i[r]=e[r])})},kD=/###/g,J4=t=>t&&t.indexOf("###")>-1?t.replace(kD,"."):t,ey=t=>!t||me(t),eo=(t,e,i)=>{const r=me(e)?e.split("."):e;let o=0;for(;o<r.length-1;){if(ey(t))return{};const l=J4(r[o]);!t[l]&&i&&(t[l]=new i),Object.prototype.hasOwnProperty.call(t,l)?t=t[l]:t={},++o}return ey(t)?{}:{obj:t,k:J4(r[o])}},ty=(t,e,i)=>{const{obj:r,k:o}=eo(t,e,Object);if(r!==void 0||e.length===1){r[o]=i;return}let l=e[e.length-1],c=e.slice(0,e.length-1),f=eo(t,c,Object);for(;f.obj===void 0&&c.length;)l=`${c[c.length-1]}.${l}`,c=c.slice(0,c.length-1),f=eo(t,c,Object),f!=null&&f.obj&&typeof f.obj[`${f.k}.${l}`]<"u"&&(f.obj=void 0);f.obj[`${f.k}.${l}`]=i},ND=(t,e,i,r)=>{const{obj:o,k:l}=eo(t,e,Object);o[l]=o[l]||[],o[l].push(i)},Hu=(t,e)=>{const{obj:i,k:r}=eo(t,e);if(i&&Object.prototype.hasOwnProperty.call(i,r))return i[r]},PD=(t,e,i)=>{const r=Hu(t,i);return r!==void 0?r:Hu(e,i)},i6=(t,e,i)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?me(t[r])||t[r]instanceof String||me(e[r])||e[r]instanceof String?i&&(t[r]=e[r]):i6(t[r],e[r],i):t[r]=e[r]);return t},lr=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var BD={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const _D=t=>me(t)?t.replace(/[&<>"'\/]/g,e=>BD[e]):t;class UD{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const $D=[" ",",","?","!",";"],GD=new UD(20),qD=(t,e,i)=>{e=e||"",i=i||"";const r=$D.filter(c=>e.indexOf(c)<0&&i.indexOf(c)<0);if(r.length===0)return!0;const o=GD.getRegExp(`(${r.map(c=>c==="?"?"\\?":c).join("|")})`);let l=!o.test(t);if(!l){const c=t.indexOf(i);c>0&&!o.test(t.substring(0,c))&&(l=!0)}return l},ch=function(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0;const r=e.split(i);let o=t;for(let l=0;l<r.length;){if(!o||typeof o!="object")return;let c,f="";for(let d=l;d<r.length;++d)if(d!==l&&(f+=i),f+=r[d],c=o[f],c!==void 0){if(["string","number","boolean"].indexOf(typeof c)>-1&&d<r.length-1)continue;l+=d-l+1;break}o=c}return o},Vu=t=>t==null?void 0:t.replace("_","-"),ID={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){var i,r;(r=(i=console==null?void 0:console[t])==null?void 0:i.apply)==null||r.call(i,console,e)}};class zu{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,i)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=e||ID,this.options=i,this.debug=i.debug}log(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"log","",!0)}warn(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"warn","",!0)}error(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"error","")}deprecate(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,r,o){return o&&!this.debug?null:(me(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new zu(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new zu(this.logger,e)}}var Ln=new zu;class ec{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const o=this.observers[r].get(i)||0;this.observers[r].set(i,o+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}emit(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(c=>{let[f,d]=c;for(let p=0;p<d;p++)f(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(c=>{let[f,d]=c;for(let p=0;p<d;p++)f.apply(f,[e,...r])})}}class ny extends ec{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,r){var p,m;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,c=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let f;e.indexOf(".")>-1?f=e.split("."):(f=[e,i],r&&(Array.isArray(r)?f.push(...r):me(r)&&l?f.push(...r.split(l)):f.push(r)));const d=Hu(this.data,f);return!d&&!i&&!r&&e.indexOf(".")>-1&&(e=f[0],i=f[1],r=f.slice(2).join(".")),d||!c||!me(r)?d:ch((m=(p=this.data)==null?void 0:p[e])==null?void 0:m[i],r,l)}addResource(e,i,r,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const c=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let f=[e,i];r&&(f=f.concat(c?r.split(c):r)),e.indexOf(".")>-1&&(f=e.split("."),o=i,i=f[1]),this.addNamespaces(i),ty(this.data,f,o),l.silent||this.emit("added",e,i,r,o)}addResources(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in r)(me(r[l])||Array.isArray(r[l]))&&this.addResource(e,i,l,r[l],{silent:!0});o.silent||this.emit("added",e,i,r)}addResourceBundle(e,i,r,o,l){let c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},f=[e,i];e.indexOf(".")>-1&&(f=e.split("."),o=r,r=i,i=f[1]),this.addNamespaces(i);let d=Hu(this.data,f)||{};c.skipCopy||(r=JSON.parse(JSON.stringify(r))),o?i6(d,r,l):d={...d,...r},ty(this.data,f,d),c.silent||this.emit("added",e,i,r)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(o=>i[o]&&Object.keys(i[o]).length>0)}toJSON(){return this.data}}var a6={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,r,o){return t.forEach(l=>{var c;e=((c=this.processors[l])==null?void 0:c.process(e,i,r,o))??e}),e}};const iy={},ay=t=>!me(t)&&typeof t!="boolean"&&typeof t!="number";class ku extends ec{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),zD(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ln.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const r=this.resolve(e,i);return(r==null?void 0:r.res)!==void 0}extractFromKey(e,i){let r=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=i.ns||this.options.defaultNS||[];const c=r&&e.indexOf(r)>-1,f=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!qD(e,r,o);if(c&&!f){const d=e.match(this.interpolator.nestingRegexp);if(d&&d.length>0)return{key:e,namespaces:me(l)?[l]:l};const p=e.split(r);(r!==o||r===o&&this.options.ns.indexOf(p[0])>-1)&&(l=p.shift()),e=p.join(o)}return{key:e,namespaces:me(l)?[l]:l}}translate(e,i,r){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const o=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:c,namespaces:f}=this.extractFromKey(e[e.length-1],i),d=f[f.length-1],p=i.lng||this.language,m=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((p==null?void 0:p.toLowerCase())==="cimode"){if(m){const X=i.nsSeparator||this.options.nsSeparator;return o?{res:`${d}${X}${c}`,usedKey:c,exactUsedKey:c,usedLng:p,usedNS:d,usedParams:this.getUsedParamsDetails(i)}:`${d}${X}${c}`}return o?{res:c,usedKey:c,exactUsedKey:c,usedLng:p,usedNS:d,usedParams:this.getUsedParamsDetails(i)}:c}const y=this.resolve(e,i);let v=y==null?void 0:y.res;const w=(y==null?void 0:y.usedKey)||c,S=(y==null?void 0:y.exactUsedKey)||c,E=["[object Number]","[object Function]","[object RegExp]"],O=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,A=!this.i18nFormat||this.i18nFormat.handleAsObject,T=i.count!==void 0&&!me(i.count),C=ku.hasDefaultValue(i),j=T?this.pluralResolver.getSuffix(p,i.count,i):"",L=i.ordinal&&T?this.pluralResolver.getSuffix(p,i.count,{ordinal:!1}):"",N=T&&!i.ordinal&&i.count===0,z=N&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${j}`]||i[`defaultValue${L}`]||i.defaultValue;let U=v;A&&!v&&C&&(U=z);const _=ay(U),Y=Object.prototype.toString.apply(U);if(A&&U&&_&&E.indexOf(Y)<0&&!(me(O)&&Array.isArray(U))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const X=this.options.returnedObjectHandler?this.options.returnedObjectHandler(w,U,{...i,ns:f}):`key '${c} (${this.language})' returned an object instead of string.`;return o?(y.res=X,y.usedParams=this.getUsedParamsDetails(i),y):X}if(l){const X=Array.isArray(U),te=X?[]:{},ie=X?S:w;for(const oe in U)if(Object.prototype.hasOwnProperty.call(U,oe)){const re=`${ie}${l}${oe}`;C&&!v?te[oe]=this.translate(re,{...i,defaultValue:ay(z)?z[oe]:void 0,joinArrays:!1,ns:f}):te[oe]=this.translate(re,{...i,joinArrays:!1,ns:f}),te[oe]===re&&(te[oe]=U[oe])}v=te}}else if(A&&me(O)&&Array.isArray(v))v=v.join(O),v&&(v=this.extendTranslation(v,e,i,r));else{let X=!1,te=!1;!this.isValidLookup(v)&&C&&(X=!0,v=z),this.isValidLookup(v)||(te=!0,v=c);const oe=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&te?void 0:v,re=C&&z!==v&&this.options.updateMissing;if(te||X||re){if(this.logger.log(re?"updateKey":"missingKey",p,d,c,re?z:v),l){const ee=this.resolve(c,{...i,keySeparator:!1});ee&&ee.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let B=[];const K=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&K&&K[0])for(let ee=0;ee<K.length;ee++)B.push(K[ee]);else this.options.saveMissingTo==="all"?B=this.languageUtils.toResolveHierarchy(i.lng||this.language):B.push(i.lng||this.language);const Q=(ee,H,F)=>{var ae;const ne=C&&F!==v?F:oe;this.options.missingKeyHandler?this.options.missingKeyHandler(ee,d,H,ne,re,i):(ae=this.backendConnector)!=null&&ae.saveMissing&&this.backendConnector.saveMissing(ee,d,H,ne,re,i),this.emit("missingKey",ee,d,H,v)};this.options.saveMissing&&(this.options.saveMissingPlurals&&T?B.forEach(ee=>{const H=this.pluralResolver.getSuffixes(ee,i);N&&i[`defaultValue${this.options.pluralSeparator}zero`]&&H.indexOf(`${this.options.pluralSeparator}zero`)<0&&H.push(`${this.options.pluralSeparator}zero`),H.forEach(F=>{Q([ee],c+F,i[`defaultValue${F}`]||z)})}):Q(B,c,z))}v=this.extendTranslation(v,e,i,y,r),te&&v===c&&this.options.appendNamespaceToMissingKey&&(v=`${d}:${c}`),(te||X)&&this.options.parseMissingKeyHandler&&(v=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${d}:${c}`:c,X?v:void 0))}return o?(y.res=v,y.usedParams=this.getUsedParamsDetails(i),y):v}extendTranslation(e,i,r,o,l){var p,m;var c=this;if((p=this.i18nFormat)!=null&&p.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const y=me(e)&&(((m=r==null?void 0:r.interpolation)==null?void 0:m.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let v;if(y){const S=e.match(this.interpolator.nestingRegexp);v=S&&S.length}let w=r.replace&&!me(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(w={...this.options.interpolation.defaultVariables,...w}),e=this.interpolator.interpolate(e,w,r.lng||this.language||o.usedLng,r),y){const S=e.match(this.interpolator.nestingRegexp),E=S&&S.length;v<E&&(r.nest=!1)}!r.lng&&o&&o.res&&(r.lng=this.language||o.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var S=arguments.length,E=new Array(S),O=0;O<S;O++)E[O]=arguments[O];return(l==null?void 0:l[0])===E[0]&&!r.context?(c.logger.warn(`It seems you are nesting recursively key: ${E[0]} in key: ${i[0]}`),null):c.translate(...E,i)},r)),r.interpolation&&this.interpolator.reset()}const f=r.postProcess||this.options.postProcess,d=me(f)?[f]:f;return e!=null&&(d!=null&&d.length)&&r.applyPostProcessor!==!1&&(e=a6.handle(d,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,o,l,c,f;return me(e)&&(e=[e]),e.forEach(d=>{if(this.isValidLookup(r))return;const p=this.extractFromKey(d,i),m=p.key;o=m;let y=p.namespaces;this.options.fallbackNS&&(y=y.concat(this.options.fallbackNS));const v=i.count!==void 0&&!me(i.count),w=v&&!i.ordinal&&i.count===0,S=i.context!==void 0&&(me(i.context)||typeof i.context=="number")&&i.context!=="",E=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);y.forEach(O=>{var A,T;this.isValidLookup(r)||(f=O,!iy[`${E[0]}-${O}`]&&((A=this.utils)!=null&&A.hasLoadedNamespace)&&!((T=this.utils)!=null&&T.hasLoadedNamespace(f))&&(iy[`${E[0]}-${O}`]=!0,this.logger.warn(`key "${o}" for languages "${E.join(", ")}" won't get resolved as namespace "${f}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),E.forEach(C=>{var N;if(this.isValidLookup(r))return;c=C;const j=[m];if((N=this.i18nFormat)!=null&&N.addLookupKeys)this.i18nFormat.addLookupKeys(j,m,C,O,i);else{let z;v&&(z=this.pluralResolver.getSuffix(C,i.count,i));const U=`${this.options.pluralSeparator}zero`,_=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(v&&(j.push(m+z),i.ordinal&&z.indexOf(_)===0&&j.push(m+z.replace(_,this.options.pluralSeparator)),w&&j.push(m+U)),S){const Y=`${m}${this.options.contextSeparator}${i.context}`;j.push(Y),v&&(j.push(Y+z),i.ordinal&&z.indexOf(_)===0&&j.push(Y+z.replace(_,this.options.pluralSeparator)),w&&j.push(Y+U))}}let L;for(;L=j.pop();)this.isValidLookup(r)||(l=L,r=this.getResource(C,O,L,i))}))})}),{res:r,usedKey:o,exactUsedKey:l,usedLng:c,usedNS:f}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,r){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(e,i,r,o):this.resourceStore.getResource(e,i,r,o)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!me(e.replace);let o=r?e.replace:e;if(r&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!r){o={...o};for(const l of i)delete o[l]}return o}static hasDefaultValue(e){const i="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i===r.substring(0,i.length)&&e[r]!==void 0)return!0;return!1}}class ry{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ln.create("languageUtils")}getScriptPartFromCode(e){if(e=Vu(e),!e||e.indexOf("-")<0)return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=Vu(e),!e||e.indexOf("-")<0)return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(me(e)&&e.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(e)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(r=>{if(i)return;const o=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(o))&&(i=o)}),!i&&this.options.supportedLngs&&e.forEach(r=>{if(i)return;const o=this.getLanguagePartFromCode(r);if(this.isSupportedCode(o))return i=o;i=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),me(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let r=e[i];return r||(r=e[this.getScriptPartFromCode(i)]),r||(r=e[this.formatLanguageCode(i)]),r||(r=e[this.getLanguagePartFromCode(i)]),r||(r=e.default),r||[]}toResolveHierarchy(e,i){const r=this.getFallbackCodes(i||this.options.fallbackLng||[],e),o=[],l=c=>{c&&(this.isSupportedCode(c)?o.push(c):this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`))};return me(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(e))):me(e)&&l(this.formatLanguageCode(e)),r.forEach(c=>{o.indexOf(c)<0&&l(this.formatLanguageCode(c))}),o}}const sy={zero:0,one:1,two:2,few:3,many:4,other:5},oy={select:t=>t===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class YD{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=i,this.logger=Ln.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,i){this.rules[e]=i}clearCache(){this.pluralRulesCache={}}getRule(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=Vu(e==="dev"?"en":e),o=i.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:r,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let c;try{c=new Intl.PluralRules(r,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),oy;if(!e.match(/-|_/))return oy;const d=this.languageUtils.getLanguagePartFromCode(e);c=this.getRule(d,i)}return this.pluralRulesCache[l]=c,c}needsPlural(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(e,i);return r||(r=this.getRule("dev",i)),(r==null?void 0:r.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,r).map(o=>`${i}${o}`)}getSuffixes(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(e,i);return r||(r=this.getRule("dev",i)),r?r.resolvedOptions().pluralCategories.sort((o,l)=>sy[o]-sy[l]).map(o=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(e,r);return o?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(i)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",i,r))}}const ly=function(t,e,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=PD(t,e,i);return!l&&o&&me(i)&&(l=ch(t,i,r),l===void 0&&(l=ch(e,i,r))),l},b0=t=>t.replace(/\$/g,"$$$$");class XD{constructor(){var i;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ln.create("interpolator"),this.options=e,this.format=((i=e==null?void 0:e.interpolation)==null?void 0:i.format)||(r=>r),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:r,useRawValueToEscape:o,prefix:l,prefixEscaped:c,suffix:f,suffixEscaped:d,formatSeparator:p,unescapeSuffix:m,unescapePrefix:y,nestingPrefix:v,nestingPrefixEscaped:w,nestingSuffix:S,nestingSuffixEscaped:E,nestingOptionsSeparator:O,maxReplaces:A,alwaysFormat:T}=e.interpolation;this.escape=i!==void 0?i:_D,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?lr(l):c||"{{",this.suffix=f?lr(f):d||"}}",this.formatSeparator=p||",",this.unescapePrefix=m?"":y||"-",this.unescapeSuffix=this.unescapePrefix?"":m||"",this.nestingPrefix=v?lr(v):w||lr("$t("),this.nestingSuffix=S?lr(S):E||lr(")"),this.nestingOptionsSeparator=O||",",this.maxReplaces=A||1e3,this.alwaysFormat=T!==void 0?T:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,r)=>(i==null?void 0:i.source)===r?(i.lastIndex=0,i):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,i,r,o){var w;let l,c,f;const d=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},p=S=>{if(S.indexOf(this.formatSeparator)<0){const T=ly(i,d,S,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(T,void 0,r,{...o,...i,interpolationkey:S}):T}const E=S.split(this.formatSeparator),O=E.shift().trim(),A=E.join(this.formatSeparator).trim();return this.format(ly(i,d,O,this.options.keySeparator,this.options.ignoreJSONStructure),A,r,{...o,...i,interpolationkey:O})};this.resetRegExp();const m=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,y=((w=o==null?void 0:o.interpolation)==null?void 0:w.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:S=>b0(S)},{regex:this.regexp,safeValue:S=>this.escapeValue?b0(this.escape(S)):b0(S)}].forEach(S=>{for(f=0;l=S.regex.exec(e);){const E=l[1].trim();if(c=p(E),c===void 0)if(typeof m=="function"){const A=m(e,l,o);c=me(A)?A:""}else if(o&&Object.prototype.hasOwnProperty.call(o,E))c="";else if(y){c=l[0];continue}else this.logger.warn(`missed to pass in variable ${E} for interpolating ${e}`),c="";else!me(c)&&!this.useRawValueToEscape&&(c=W4(c));const O=S.safeValue(c);if(e=e.replace(l[0],O),y?(S.regex.lastIndex+=c.length,S.regex.lastIndex-=l[0].length):S.regex.lastIndex=0,f++,f>=this.maxReplaces)break}}),e}nest(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,c;const f=(d,p)=>{const m=this.nestingOptionsSeparator;if(d.indexOf(m)<0)return d;const y=d.split(new RegExp(`${m}[ ]*{`));let v=`{${y[1]}`;d=y[0],v=this.interpolate(v,c);const w=v.match(/'/g),S=v.match(/"/g);(((w==null?void 0:w.length)??0)%2===0&&!S||S.length%2!==0)&&(v=v.replace(/'/g,'"'));try{c=JSON.parse(v),p&&(c={...p,...c})}catch(E){return this.logger.warn(`failed parsing options string in nesting for key ${d}`,E),`${d}${m}${v}`}return c.defaultValue&&c.defaultValue.indexOf(this.prefix)>-1&&delete c.defaultValue,d};for(;o=this.nestingRegexp.exec(e);){let d=[];c={...r},c=c.replace&&!me(c.replace)?c.replace:c,c.applyPostProcessor=!1,delete c.defaultValue;let p=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const m=o[1].split(this.formatSeparator).map(y=>y.trim());o[1]=m.shift(),d=m,p=!0}if(l=i(f.call(this,o[1].trim(),c),c),l&&o[0]===e&&!me(l))return l;me(l)||(l=W4(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),l=""),p&&(l=d.reduce((m,y)=>this.format(m,y,r.lng,{...r,interpolationkey:o[1].trim()}),l.trim())),e=e.replace(o[0],l),this.regexp.lastIndex=0}return e}}const FD=t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);e==="currency"&&o.indexOf(":")<0?i.currency||(i.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?i.range||(i.range=o.trim()):o.split(";").forEach(c=>{if(c){const[f,...d]=c.split(":"),p=d.join(":").trim().replace(/^'+|'+$/g,""),m=f.trim();i[m]||(i[m]=p),p==="false"&&(i[m]=!1),p==="true"&&(i[m]=!0),isNaN(p)||(i[m]=parseInt(p,10))}})}return{formatName:e,formatOptions:i}},ur=t=>{const e={};return(i,r,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const c=r+JSON.stringify(l);let f=e[c];return f||(f=t(Vu(r),o),e[c]=f),f(i)}};class ZD{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ln.create("formatter"),this.options=e,this.formats={number:ur((i,r)=>{const o=new Intl.NumberFormat(i,{...r});return l=>o.format(l)}),currency:ur((i,r)=>{const o=new Intl.NumberFormat(i,{...r,style:"currency"});return l=>o.format(l)}),datetime:ur((i,r)=>{const o=new Intl.DateTimeFormat(i,{...r});return l=>o.format(l)}),relativetime:ur((i,r)=>{const o=new Intl.RelativeTimeFormat(i,{...r});return l=>o.format(l,r.range||"day")}),list:ur((i,r)=>{const o=new Intl.ListFormat(i,{...r});return l=>o.format(l)})},this.init(e)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=ur(i)}format(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=i.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(f=>f.indexOf(")")>-1)){const f=l.findIndex(d=>d.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,f)].join(this.formatSeparator)}return l.reduce((f,d)=>{var y;const{formatName:p,formatOptions:m}=FD(d);if(this.formats[p]){let v=f;try{const w=((y=o==null?void 0:o.formatParams)==null?void 0:y[o.interpolationkey])||{},S=w.locale||w.lng||o.locale||o.lng||r;v=this.formats[p](f,S,{...m,...o,...w})}catch(w){this.logger.warn(w)}return v}else this.logger.warn(`there was no format function for ${p}`);return f},e)}}const KD=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class QD extends ec{constructor(e,i,r){var l,c;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=i,this.services=r,this.languageUtils=r.languageUtils,this.options=o,this.logger=Ln.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(c=(l=this.backend)==null?void 0:l.init)==null||c.call(l,r,o.backend,o)}queueLoad(e,i,r,o){const l={},c={},f={},d={};return e.forEach(p=>{let m=!0;i.forEach(y=>{const v=`${p}|${y}`;!r.reload&&this.store.hasResourceBundle(p,y)?this.state[v]=2:this.state[v]<0||(this.state[v]===1?c[v]===void 0&&(c[v]=!0):(this.state[v]=1,m=!1,c[v]===void 0&&(c[v]=!0),l[v]===void 0&&(l[v]=!0),d[y]===void 0&&(d[y]=!0)))}),m||(f[p]=!0)}),(Object.keys(l).length||Object.keys(c).length)&&this.queue.push({pending:c,pendingCount:Object.keys(c).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(c),toLoadLanguages:Object.keys(f),toLoadNamespaces:Object.keys(d)}}loaded(e,i,r){const o=e.split("|"),l=o[0],c=o[1];i&&this.emit("failedLoading",l,c,i),!i&&r&&this.store.addResourceBundle(l,c,r,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&r&&(this.state[e]=0);const f={};this.queue.forEach(d=>{ND(d.loaded,[l],c),KD(d,e),i&&d.errors.push(i),d.pendingCount===0&&!d.done&&(Object.keys(d.loaded).forEach(p=>{f[p]||(f[p]={});const m=d.loaded[p];m.length&&m.forEach(y=>{f[p][y]===void 0&&(f[p][y]=!0)})}),d.done=!0,d.errors.length?d.callback(d.errors):d.callback())}),this.emit("loaded",f),this.queue=this.queue.filter(d=>!d.done)}read(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,c=arguments.length>5?arguments[5]:void 0;if(!e.length)return c(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:r,tried:o,wait:l,callback:c});return}this.readingCalls++;const f=(p,m)=>{if(this.readingCalls--,this.waitingReads.length>0){const y=this.waitingReads.shift();this.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(p&&m&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,i,r,o+1,l*2,c)},l);return}c(p,m)},d=this.backend[r].bind(this.backend);if(d.length===2){try{const p=d(e,i);p&&typeof p.then=="function"?p.then(m=>f(null,m)).catch(f):f(null,p)}catch(p){f(p)}return}return d(e,i,f)}prepareLoading(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();me(e)&&(e=this.languageUtils.toResolveHierarchy(e)),me(i)&&(i=[i]);const l=this.queueLoad(e,i,r,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(c=>{this.loadOne(c)})}load(e,i,r){this.prepareLoading(e,i,{},r)}reload(e,i,r){this.prepareLoading(e,i,{reload:!0},r)}loadOne(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=e.split("|"),o=r[0],l=r[1];this.read(o,l,"read",void 0,void 0,(c,f)=>{c&&this.logger.warn(`${i}loading namespace ${l} for language ${o} failed`,c),!c&&f&&this.logger.log(`${i}loaded namespace ${l} for language ${o}`,f),this.loaded(e,c,f)})}saveMissing(e,i,r,o,l){var d,p,m,y,v;let c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},f=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((p=(d=this.services)==null?void 0:d.utils)!=null&&p.hasLoadedNamespace&&!((y=(m=this.services)==null?void 0:m.utils)!=null&&y.hasLoadedNamespace(i))){this.logger.warn(`did not save key "${r}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if((v=this.backend)!=null&&v.create){const w={...c,isUpdate:l},S=this.backend.create.bind(this.backend);if(S.length<6)try{let E;S.length===5?E=S(e,i,r,o,w):E=S(e,i,r,o),E&&typeof E.then=="function"?E.then(O=>f(null,O)).catch(f):f(null,E)}catch(E){f(E)}else S(e,i,r,o,f,w)}!e||!e[0]||this.store.addResource(e[0],i,r,o)}}}const uy=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),me(t[1])&&(e.defaultValue=t[1]),me(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const i=t[3]||t[2];Object.keys(i).forEach(r=>{e[r]=i[r]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),cy=t=>{var e,i;return me(t.ns)&&(t.ns=[t.ns]),me(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),me(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),((i=(e=t.supportedLngs)==null?void 0:e.indexOf)==null?void 0:i.call(e,"cimode"))<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),typeof t.initImmediate=="boolean"&&(t.initAsync=t.initImmediate),t},tu=()=>{},WD=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(i=>{typeof t[i]=="function"&&(t[i]=t[i].bind(t))})};class po extends ec{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=cy(e),this.services={},this.logger=Ln,this.modules={external:[]},WD(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(){var e=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(r=i,i={}),i.defaultNS==null&&i.ns&&(me(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=uy();this.options={...o,...this.options,...cy(i)},this.options.interpolation={...o.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const l=m=>m?typeof m=="function"?new m:m:null;if(!this.options.isClone){this.modules.logger?Ln.init(l(this.modules.logger),this.options):Ln.init(null,this.options);let m;this.modules.formatter?m=this.modules.formatter:m=ZD;const y=new ry(this.options);this.store=new ny(this.options.resources,this.options);const v=this.services;v.logger=Ln,v.resourceStore=this.store,v.languageUtils=y,v.pluralResolver=new YD(y,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),m&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=l(m),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new XD(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new QD(l(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",function(w){for(var S=arguments.length,E=new Array(S>1?S-1:0),O=1;O<S;O++)E[O-1]=arguments[O];e.emit(w,...E)}),this.modules.languageDetector&&(v.languageDetector=l(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=l(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new ku(this.services,this.options),this.translator.on("*",function(w){for(var S=arguments.length,E=new Array(S>1?S-1:0),O=1;O<S;O++)E[O-1]=arguments[O];e.emit(w,...E)}),this.modules.external.forEach(w=>{w.init&&w.init(this)})}if(this.format=this.options.interpolation.format,r||(r=tu),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(m=>{this[m]=function(){return e.store[m](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(m=>{this[m]=function(){return e.store[m](...arguments),e}});const d=qs(),p=()=>{const m=(y,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),d.resolve(v),r(y,v)};if(this.languages&&!this.isInitialized)return m(null,this.t.bind(this));this.changeLanguage(this.options.lng,m)};return this.options.resources||!this.options.initAsync?p():setTimeout(p,0),d}loadResources(e){var l,c;let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:tu;const o=me(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const f=[],d=p=>{if(!p||p==="cimode")return;this.services.languageUtils.toResolveHierarchy(p).forEach(y=>{y!=="cimode"&&f.indexOf(y)<0&&f.push(y)})};o?d(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(m=>d(m)),(c=(l=this.options.preload)==null?void 0:l.forEach)==null||c.call(l,p=>d(p)),this.services.backendConnector.load(f,this.options.ns,p=>{!p&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(p)})}else r(null)}reloadResources(e,i,r){const o=qs();return typeof e=="function"&&(r=e,e=void 0),typeof i=="function"&&(r=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),r||(r=tu),this.services.backendConnector.reload(e,i,l=>{o.resolve(),r(l)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&a6.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let i=0;i<this.languages.length;i++){const r=this.languages[i];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(e,i){var r=this;this.isLanguageChangingTo=e;const o=qs();this.emit("languageChanging",e);const l=d=>{this.language=d,this.languages=this.services.languageUtils.toResolveHierarchy(d),this.resolvedLanguage=void 0,this.setResolvedLanguage(d)},c=(d,p)=>{p?(l(p),this.translator.changeLanguage(p),this.isLanguageChangingTo=void 0,this.emit("languageChanged",p),this.logger.log("languageChanged",p)):this.isLanguageChangingTo=void 0,o.resolve(function(){return r.t(...arguments)}),i&&i(d,function(){return r.t(...arguments)})},f=d=>{var m,y;!e&&!d&&this.services.languageDetector&&(d=[]);const p=me(d)?d:this.services.languageUtils.getBestMatchFromCodes(d);p&&(this.language||l(p),this.translator.language||this.translator.changeLanguage(p),(y=(m=this.services.languageDetector)==null?void 0:m.cacheUserLanguage)==null||y.call(m,p)),this.loadResources(p,v=>{c(v,p)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?f(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(f):this.services.languageDetector.detect(f):f(e),o}getFixedT(e,i,r){var o=this;const l=function(c,f){let d;if(typeof f!="object"){for(var p=arguments.length,m=new Array(p>2?p-2:0),y=2;y<p;y++)m[y-2]=arguments[y];d=o.options.overloadTranslationOptionHandler([c,f].concat(m))}else d={...f};d.lng=d.lng||l.lng,d.lngs=d.lngs||l.lngs,d.ns=d.ns||l.ns,d.keyPrefix!==""&&(d.keyPrefix=d.keyPrefix||r||l.keyPrefix);const v=o.options.keySeparator||".";let w;return d.keyPrefix&&Array.isArray(c)?w=c.map(S=>`${d.keyPrefix}${v}${S}`):w=d.keyPrefix?`${d.keyPrefix}${v}${c}`:c,o.t(w,d)};return me(e)?l.lng=e:l.lngs=e,l.ns=i,l.keyPrefix=r,l}t(){var o;for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(o=this.translator)==null?void 0:o.translate(...i)}exists(){var o;for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(o=this.translator)==null?void 0:o.exists(...i)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=i.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const c=(f,d)=>{const p=this.services.backendConnector.state[`${f}|${d}`];return p===-1||p===0||p===2};if(i.precheck){const f=i.precheck(this,c);if(f!==void 0)return f}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||c(r,e)&&(!o||c(l,e)))}loadNamespaces(e,i){const r=qs();return this.options.ns?(me(e)&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{r.resolve(),i&&i(o)}),r):(i&&i(),Promise.resolve())}loadLanguages(e,i){const r=qs();me(e)&&(e=[e]);const o=this.options.preload||[],l=e.filter(c=>o.indexOf(c)<0&&this.services.languageUtils.isSupportedCode(c));return l.length?(this.options.preload=o.concat(l),this.loadResources(c=>{r.resolve(),i&&i(c)}),r):(i&&i(),Promise.resolve())}dir(e){var o,l;if(e||(e=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!e)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=((l=this.services)==null?void 0:l.languageUtils)||new ry(uy());return i.indexOf(r.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new po(e,i)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:tu;const r=e.forkResourceStore;r&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},l=new po(o);if((e.debug!==void 0||e.prefix!==void 0)&&(l.logger=l.logger.clone(e)),["store","services","language"].forEach(f=>{l[f]=this[f]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},r){const f=Object.keys(this.store.data).reduce((d,p)=>(d[p]={...this.store.data[p]},Object.keys(d[p]).reduce((m,y)=>(m[y]={...d[p][y]},m),{})),{});l.store=new ny(f,o),l.services.resourceStore=l.store}return l.translator=new ku(l.services,o),l.translator.on("*",function(f){for(var d=arguments.length,p=new Array(d>1?d-1:0),m=1;m<d;m++)p[m-1]=arguments[m];l.emit(f,...p)}),l.init(o,i),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Et=po.createInstance();Et.createInstance=po.createInstance;Et.createInstance;Et.dir;Et.init;Et.loadResources;Et.reloadResources;Et.use;Et.changeLanguage;Et.getFixedT;Et.t;Et.exists;Et.setDefaultNamespace;Et.hasLoadedNamespace;Et.loadNamespaces;Et.loadLanguages;function fh(t){"@babel/helpers - typeof";return fh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fh(t)}function r6(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":fh(XMLHttpRequest))==="object"}function JD(t){return!!t&&typeof t.then=="function"}function eH(t){return JD(t)?t:Promise.resolve(t)}const tH="modulepreload",nH=function(t){return"/"+t},fy={},iH=function(e,i,r){let o=Promise.resolve();if(i&&i.length>0){let c=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),d=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=c(i.map(p=>{if(p=nH(p),p in fy)return;fy[p]=!0;const m=p.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${y}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":tH,m||(v.as="script"),v.crossOrigin="",v.href=p,d&&v.setAttribute("nonce",d),document.head.appendChild(v),m)return new Promise((w,S)=>{v.addEventListener("load",w),v.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${p}`)))})}))}function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return o.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};function dy(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function hy(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?dy(Object(i),!0).forEach(function(r){aH(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):dy(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function aH(t,e,i){return(e=rH(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function rH(t){var e=sH(t,"string");return ba(e)=="symbol"?e:e+""}function sH(t,e){if(ba(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e);if(ba(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ba(t){"@babel/helpers - typeof";return ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ba(t)}var Ui=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?Ui=global.fetch:typeof window<"u"&&window.fetch&&(Ui=window.fetch);var mo;r6()&&(typeof global<"u"&&global.XMLHttpRequest?mo=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(mo=window.XMLHttpRequest));var Nu;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Nu=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Nu=window.ActiveXObject));typeof Ui!="function"&&(Ui=void 0);if(!Ui&&!mo&&!Nu)try{iH(()=>import("./browser-ponyfill-CWaxppnY.js").then(t=>t.b),[]).then(function(t){Ui=t.default}).catch(function(){})}catch{}var dh=function(e,i){if(i&&ba(i)==="object"){var r="";for(var o in i)r+="&"+encodeURIComponent(o)+"="+encodeURIComponent(i[o]);if(!r)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+r.slice(1)}return e},py=function(e,i,r,o){var l=function(d){if(!d.ok)return r(d.statusText||"Error",{status:d.status});d.text().then(function(p){r(null,{status:d.status,data:p})}).catch(r)};if(o){var c=o(e,i);if(c instanceof Promise){c.then(l).catch(r);return}}typeof fetch=="function"?fetch(e,i).then(l).catch(r):Ui(e,i).then(l).catch(r)},my=!1,oH=function(e,i,r,o){e.queryStringParams&&(i=dh(i,e.queryStringParams));var l=hy({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),r&&(l["Content-Type"]="application/json");var c=typeof e.requestOptions=="function"?e.requestOptions(r):e.requestOptions,f=hy({method:r?"POST":"GET",body:r?e.stringify(r):void 0,headers:l},my?{}:c),d=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{py(i,f,o,d)}catch(p){if(!c||Object.keys(c).length===0||!p.message||p.message.indexOf("not implemented")<0)return o(p);try{Object.keys(c).forEach(function(m){delete f[m]}),py(i,f,o,d),my=!0}catch(m){o(m)}}},lH=function(e,i,r,o){r&&ba(r)==="object"&&(r=dh("",r).slice(1)),e.queryStringParams&&(i=dh(i,e.queryStringParams));try{var l=mo?new mo:new Nu("MSXML2.XMLHTTP.3.0");l.open(r?"POST":"GET",i,1),e.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!e.withCredentials,r&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var c=e.customHeaders;if(c=typeof c=="function"?c():c,c)for(var f in c)l.setRequestHeader(f,c[f]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(r)}catch(d){console&&console.log(d)}},uH=function(e,i,r,o){if(typeof r=="function"&&(o=r,r=void 0),o=o||function(){},Ui&&i.indexOf("file:")!==0)return oH(e,i,r,o);if(r6()||typeof ActiveXObject=="function")return lH(e,i,r,o);o(new Error("No fetch and no xhr implementation found!"))};function Or(t){"@babel/helpers - typeof";return Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Or(t)}function gy(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function w0(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?gy(Object(i),!0).forEach(function(r){s6(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):gy(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function cH(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fH(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o6(r.key),r)}}function dH(t,e,i){return e&&fH(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function s6(t,e,i){return(e=o6(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o6(t){var e=hH(t,"string");return Or(e)=="symbol"?e:e+""}function hH(t,e){if(Or(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e);if(Or(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var pH=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(i){return JSON.parse(i)},stringify:JSON.stringify,parsePayload:function(i,r,o){return s6({},r,o||"")},parseLoadPayload:function(i,r){},request:uH,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},l6=function(){function t(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};cH(this,t),this.services=e,this.options=i,this.allOptions=r,this.type="backend",this.init(e,i,r)}return dH(t,[{key:"init",value:function(i){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=i,this.options=w0(w0(w0({},pH()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var c=setInterval(function(){return r.reload()},this.options.reloadInterval);Or(c)==="object"&&typeof c.unref=="function"&&c.unref()}}},{key:"readMulti",value:function(i,r,o){this._readAny(i,i,r,r,o)}},{key:"read",value:function(i,r,o){this._readAny([i],i,[r],r,o)}},{key:"_readAny",value:function(i,r,o,l,c){var f=this,d=this.options.loadPath;typeof this.options.loadPath=="function"&&(d=this.options.loadPath(i,o)),d=eH(d),d.then(function(p){if(!p)return c(null,{});var m=f.services.interpolator.interpolate(p,{lng:i.join("+"),ns:o.join("+")});f.loadUrl(m,c,r,l)})}},{key:"loadUrl",value:function(i,r,o,l){var c=this,f=typeof o=="string"?[o]:o,d=typeof l=="string"?[l]:l,p=this.options.parseLoadPayload(f,d);this.options.request(this.options,i,p,function(m,y){if(y&&(y.status>=500&&y.status<600||!y.status))return r("failed loading "+i+"; status code: "+y.status,!0);if(y&&y.status>=400&&y.status<500)return r("failed loading "+i+"; status code: "+y.status,!1);if(!y&&m&&m.message){var v=m.message.toLowerCase(),w=["failed","fetch","network","load"].find(function(O){return v.indexOf(O)>-1});if(w)return r("failed loading "+i+": "+m.message,!0)}if(m)return r(m,!1);var S,E;try{typeof y.data=="string"?S=c.options.parse(y.data,o,l):S=y.data}catch{E="failed parsing "+i+" to json"}if(E)return r(E,!1);r(null,S)})}},{key:"create",value:function(i,r,o,l,c){var f=this;if(this.options.addPath){typeof i=="string"&&(i=[i]);var d=this.options.parsePayload(r,o,l),p=0,m=[],y=[];i.forEach(function(v){var w=f.options.addPath;typeof f.options.addPath=="function"&&(w=f.options.addPath(v,r));var S=f.services.interpolator.interpolate(w,{lng:v,ns:r});f.options.request(f.options,S,d,function(E,O){p+=1,m.push(E),y.push(O),p===i.length&&typeof c=="function"&&c(m,y)})})}}},{key:"reload",value:function(){var i=this,r=this.services,o=r.backendConnector,l=r.languageUtils,c=r.logger,f=o.language;if(!(f&&f.toLowerCase()==="cimode")){var d=[],p=function(y){var v=l.toResolveHierarchy(y);v.forEach(function(w){d.indexOf(w)<0&&d.push(w)})};p(f),this.allOptions.preload&&this.allOptions.preload.forEach(function(m){return p(m)}),d.forEach(function(m){i.allOptions.ns.forEach(function(y){o.read(m,y,"read",null,null,function(v,w){v&&c.warn("loading namespace ".concat(y," for language ").concat(m," failed"),v),!v&&w&&c.log("loaded namespace ".concat(y," for language ").concat(m),w),o.loaded("".concat(m,"|").concat(y),v,w)})})})}}}])}();l6.type="backend";const{slice:mH,forEach:gH}=[];function yH(t){return gH.call(mH.call(arguments,1),e=>{if(e)for(const i in e)t[i]===void 0&&(t[i]=e[i])}),t}function vH(t){return typeof t!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(i=>i.test(t))}const yy=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,xH=function(t,e){const r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(e);let l=`${t}=${o}`;if(r.maxAge>0){const c=r.maxAge-0;if(Number.isNaN(c))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(c)}`}if(r.domain){if(!yy.test(r.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${r.domain}`}if(r.path){if(!yy.test(r.path))throw new TypeError("option path is invalid");l+=`; Path=${r.path}`}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${r.expires.toUTCString()}`}if(r.httpOnly&&(l+="; HttpOnly"),r.secure&&(l+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(l+="; Partitioned"),l},vy={create(t,e,i,r){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};i&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+i*60*1e3)),r&&(o.domain=r),document.cookie=xH(t,e,o)},read(t){const e=`${t}=`,i=document.cookie.split(";");for(let r=0;r<i.length;r++){let o=i[r];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(e)===0)return o.substring(e.length,o.length)}return null},remove(t,e){this.create(t,"",-1,e)}};var bH={name:"cookie",lookup(t){let{lookupCookie:e}=t;if(e&&typeof document<"u")return vy.read(e)||void 0},cacheUserLanguage(t,e){let{lookupCookie:i,cookieMinutes:r,cookieDomain:o,cookieOptions:l}=e;i&&typeof document<"u"&&vy.create(i,t,r,o,l)}},wH={name:"querystring",lookup(t){var r;let{lookupQuerystring:e}=t,i;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((r=window.location.hash)==null?void 0:r.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const c=o.substring(1).split("&");for(let f=0;f<c.length;f++){const d=c[f].indexOf("=");d>0&&c[f].substring(0,d)===e&&(i=c[f].substring(d+1))}}return i}},SH={name:"hash",lookup(t){var o;let{lookupHash:e,lookupFromHashIndex:i}=t,r;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const c=l.substring(1);if(e){const f=c.split("&");for(let d=0;d<f.length;d++){const p=f[d].indexOf("=");p>0&&f[d].substring(0,p)===e&&(r=f[d].substring(p+1))}}if(r)return r;if(!r&&i>-1){const f=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(f)?(o=f[typeof i=="number"?i:0])==null?void 0:o.replace("/",""):void 0}}}return r}};let cr=null;const xy=()=>{if(cr!==null)return cr;try{if(cr=typeof window<"u"&&window.localStorage!==null,!cr)return!1;const t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{cr=!1}return cr};var CH={name:"localStorage",lookup(t){let{lookupLocalStorage:e}=t;if(e&&xy())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupLocalStorage:i}=e;i&&xy()&&window.localStorage.setItem(i,t)}};let fr=null;const by=()=>{if(fr!==null)return fr;try{if(fr=typeof window<"u"&&window.sessionStorage!==null,!fr)return!1;const t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{fr=!1}return fr};var TH={name:"sessionStorage",lookup(t){let{lookupSessionStorage:e}=t;if(e&&by())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupSessionStorage:i}=e;i&&by()&&window.sessionStorage.setItem(i,t)}},EH={name:"navigator",lookup(t){const e=[];if(typeof navigator<"u"){const{languages:i,userLanguage:r,language:o}=navigator;if(i)for(let l=0;l<i.length;l++)e.push(i[l]);r&&e.push(r),o&&e.push(o)}return e.length>0?e:void 0}},MH={name:"htmlTag",lookup(t){let{htmlTag:e}=t,i;const r=e||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(i=r.getAttribute("lang")),i}},AH={name:"path",lookup(t){var o;let{lookupFromPathIndex:e}=t;if(typeof window>"u")return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(i)?(o=i[typeof e=="number"?e:0])==null?void 0:o.replace("/",""):void 0}},LH={name:"subdomain",lookup(t){var o,l;let{lookupFromSubdomainIndex:e}=t;const i=typeof e=="number"?e+1:1,r=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(r)return r[i]}};let u6=!1;try{document.cookie,u6=!0}catch{}const c6=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];u6||c6.splice(1,1);const OH=()=>({order:c6,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:t=>t});class f6{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,i)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=yH(i,this.options||{},OH()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(bH),this.addDetector(wH),this.addDetector(CH),this.addDetector(TH),this.addDetector(EH),this.addDetector(MH),this.addDetector(AH),this.addDetector(LH),this.addDetector(SH)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,i=[];return e.forEach(r=>{if(this.detectors[r]){let o=this.detectors[r].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(i=i.concat(o))}}),i=i.filter(r=>r!=null&&!vH(r)).map(r=>this.options.convertDetectedLanguage(r)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}cacheUserLanguage(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;i&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||i.forEach(r=>{this.detectors[r]&&this.detectors[r].cacheUserLanguage(e,this.options)}))}}f6.type="languageDetector";Et.use(l6).use(f6).use(qA).init({supportedLngs:["en","ru","es","uk"],fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const RH=R.createContext(void 0),jH=({children:t})=>{const{i18n:e}=hp(),i=r=>{e.changeLanguage(r).then(()=>{window.location.reload()})};return x.jsx(RH.Provider,{value:{language:e.language,setLanguage:i},children:t})};I8.createRoot(document.getElementById("root")).render(x.jsxs(Oe.StrictMode,{children:[x.jsx(uw,{styles:mw}),x.jsx(lb,{basename:"/",children:x.jsx(jH,{children:x.jsx(VD,{})})})]}));export{DH as c,Pu as g};
