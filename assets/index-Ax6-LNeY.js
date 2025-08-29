function i9(t,e){for(var i=0;i<e.length;i++){const r=e[i];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();var iz=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ic(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wf={exports:{}},Ps={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function a9(){if(qg)return Ps;qg=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var d in o)d!=="key"&&(l[d]=o[d])}else l=o;return o=l.ref,{$$typeof:t,type:r,key:u,ref:o!==void 0?o:null,props:l}}return Ps.Fragment=e,Ps.jsx=i,Ps.jsxs=i,Ps}var Yg;function r9(){return Yg||(Yg=1,wf.exports=a9()),wf.exports}var x=r9(),bf={exports:{}},Ns={},Sf={exports:{}},Cf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function s9(){return Fg||(Fg=1,function(t){function e(B,K){var W=B.length;B.push(K);e:for(;0<W;){var ee=W-1>>>1,H=B[ee];if(0<o(H,K))B[ee]=K,B[W]=H,W=ee;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],W=B.pop();if(W!==K){B[0]=W;e:for(var ee=0,H=B.length,Z=H>>>1;ee<Z;){var ne=2*(ee+1)-1,ae=B[ne],ce=ne+1,we=B[ce];if(0>o(ae,W))ce<H&&0>o(we,ae)?(B[ee]=we,B[ce]=W,ee=ce):(B[ee]=ae,B[ne]=W,ee=ne);else if(ce<H&&0>o(we,W))B[ee]=we,B[ce]=W,ee=ce;else break e}}return K}function o(B,K){var W=B.sortIndex-K.sortIndex;return W!==0?W:B.id-K.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();t.unstable_now=function(){return u.now()-d}}var f=[],h=[],m=1,y=null,v=3,S=!1,b=!1,M=!1,O=!1,j=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var K=i(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=B)r(h),K.sortIndex=K.expirationTime,e(f,K);else break;K=i(h)}}function L(B){if(M=!1,D(B),!b)if(i(f)!==null)b=!0,P||(P=!0,te());else{var K=i(h);K!==null&&re(L,K.startTime-B)}}var P=!1,k=-1,_=5,$=-1;function Y(){return O?!0:!(t.unstable_now()-$<_)}function F(){if(O=!1,P){var B=t.unstable_now();$=B;var K=!0;try{e:{b=!1,M&&(M=!1,T(k),k=-1),S=!0;var W=v;try{t:{for(D(B),y=i(f);y!==null&&!(y.expirationTime>B&&Y());){var ee=y.callback;if(typeof ee=="function"){y.callback=null,v=y.priorityLevel;var H=ee(y.expirationTime<=B);if(B=t.unstable_now(),typeof H=="function"){y.callback=H,D(B),K=!0;break t}y===i(f)&&r(f),D(B)}else r(f);y=i(f)}if(y!==null)K=!0;else{var Z=i(h);Z!==null&&re(L,Z.startTime-B),K=!1}}break e}finally{y=null,v=W,S=!1}K=void 0}}finally{K?te():P=!1}}}var te;if(typeof C=="function")te=function(){C(F)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,oe=ie.port2;ie.port1.onmessage=F,te=function(){oe.postMessage(null)}}else te=function(){j(F,0)};function re(B,K){k=j(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_next=function(B){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var W=v;v=K;try{return B()}finally{v=W}},t.unstable_requestPaint=function(){O=!0},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=v;v=B;try{return K()}finally{v=W}},t.unstable_scheduleCallback=function(B,K,W){var ee=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ee+W:ee):W=ee,B){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=W+H,B={id:m++,callback:K,priorityLevel:B,startTime:W,expirationTime:H,sortIndex:-1},W>ee?(B.sortIndex=W,e(h,B),i(f)===null&&B===i(h)&&(M?(T(k),k=-1):M=!0,re(L,W-ee))):(B.sortIndex=H,e(f,B),b||S||(b=!0,P||(P=!0,te()))),B},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(B){var K=v;return function(){var W=v;v=K;try{return B.apply(this,arguments)}finally{v=W}}}}(Cf)),Cf}var Zg;function o9(){return Zg||(Zg=1,Sf.exports=s9()),Sf.exports}var Tf={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function l9(){if(Xg)return ge;Xg=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.iterator;function v(H){return H===null||typeof H!="object"?null:(H=y&&H[y]||H["@@iterator"],typeof H=="function"?H:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function O(H,Z,ne){this.props=H,this.context=Z,this.refs=M,this.updater=ne||S}O.prototype.isReactComponent={},O.prototype.setState=function(H,Z){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,Z,"setState")},O.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function j(){}j.prototype=O.prototype;function T(H,Z,ne){this.props=H,this.context=Z,this.refs=M,this.updater=ne||S}var C=T.prototype=new j;C.constructor=T,b(C,O.prototype),C.isPureReactComponent=!0;var D=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function k(H,Z,ne,ae,ce,we){return ne=we.ref,{$$typeof:t,type:H,key:Z,ref:ne!==void 0?ne:null,props:we}}function _(H,Z){return k(H.type,Z,void 0,void 0,void 0,H.props)}function $(H){return typeof H=="object"&&H!==null&&H.$$typeof===t}function Y(H){var Z={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(ne){return Z[ne]})}var F=/\/+/g;function te(H,Z){return typeof H=="object"&&H!==null&&H.key!=null?Y(""+H.key):Z.toString(36)}function ie(){}function oe(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(ie,ie):(H.status="pending",H.then(function(Z){H.status==="pending"&&(H.status="fulfilled",H.value=Z)},function(Z){H.status==="pending"&&(H.status="rejected",H.reason=Z)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function re(H,Z,ne,ae,ce){var we=typeof H;(we==="undefined"||we==="boolean")&&(H=null);var de=!1;if(H===null)de=!0;else switch(we){case"bigint":case"string":case"number":de=!0;break;case"object":switch(H.$$typeof){case t:case e:de=!0;break;case m:return de=H._init,re(de(H._payload),Z,ne,ae,ce)}}if(de)return ce=ce(H),de=ae===""?"."+te(H,0):ae,D(ce)?(ne="",de!=null&&(ne=de.replace(F,"$&/")+"/"),re(ce,Z,ne,"",function(yt){return yt})):ce!=null&&($(ce)&&(ce=_(ce,ne+(ce.key==null||H&&H.key===ce.key?"":(""+ce.key).replace(F,"$&/")+"/")+de)),Z.push(ce)),1;de=0;var st=ae===""?".":ae+":";if(D(H))for(var Oe=0;Oe<H.length;Oe++)ae=H[Oe],we=st+te(ae,Oe),de+=re(ae,Z,ne,we,ce);else if(Oe=v(H),typeof Oe=="function")for(H=Oe.call(H),Oe=0;!(ae=H.next()).done;)ae=ae.value,we=st+te(ae,Oe++),de+=re(ae,Z,ne,we,ce);else if(we==="object"){if(typeof H.then=="function")return re(oe(H),Z,ne,ae,ce);throw Z=String(H),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return de}function B(H,Z,ne){if(H==null)return H;var ae=[],ce=0;return re(H,ae,"","",function(we){return Z.call(ne,we,ce++)}),ae}function K(H){if(H._status===-1){var Z=H._result;Z=Z(),Z.then(function(ne){(H._status===0||H._status===-1)&&(H._status=1,H._result=ne)},function(ne){(H._status===0||H._status===-1)&&(H._status=2,H._result=ne)}),H._status===-1&&(H._status=0,H._result=Z)}if(H._status===1)return H._result.default;throw H._result}var W=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function ee(){}return ge.Children={map:B,forEach:function(H,Z,ne){B(H,function(){Z.apply(this,arguments)},ne)},count:function(H){var Z=0;return B(H,function(){Z++}),Z},toArray:function(H){return B(H,function(Z){return Z})||[]},only:function(H){if(!$(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},ge.Component=O,ge.Fragment=i,ge.Profiler=o,ge.PureComponent=T,ge.StrictMode=r,ge.Suspense=f,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ge.__COMPILER_RUNTIME={__proto__:null,c:function(H){return L.H.useMemoCache(H)}},ge.cache=function(H){return function(){return H.apply(null,arguments)}},ge.cloneElement=function(H,Z,ne){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var ae=b({},H.props),ce=H.key,we=void 0;if(Z!=null)for(de in Z.ref!==void 0&&(we=void 0),Z.key!==void 0&&(ce=""+Z.key),Z)!P.call(Z,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&Z.ref===void 0||(ae[de]=Z[de]);var de=arguments.length-2;if(de===1)ae.children=ne;else if(1<de){for(var st=Array(de),Oe=0;Oe<de;Oe++)st[Oe]=arguments[Oe+2];ae.children=st}return k(H.type,ce,void 0,void 0,we,ae)},ge.createContext=function(H){return H={$$typeof:u,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:l,_context:H},H},ge.createElement=function(H,Z,ne){var ae,ce={},we=null;if(Z!=null)for(ae in Z.key!==void 0&&(we=""+Z.key),Z)P.call(Z,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ce[ae]=Z[ae]);var de=arguments.length-2;if(de===1)ce.children=ne;else if(1<de){for(var st=Array(de),Oe=0;Oe<de;Oe++)st[Oe]=arguments[Oe+2];ce.children=st}if(H&&H.defaultProps)for(ae in de=H.defaultProps,de)ce[ae]===void 0&&(ce[ae]=de[ae]);return k(H,we,void 0,void 0,null,ce)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(H){return{$$typeof:d,render:H}},ge.isValidElement=$,ge.lazy=function(H){return{$$typeof:m,_payload:{_status:-1,_result:H},_init:K}},ge.memo=function(H,Z){return{$$typeof:h,type:H,compare:Z===void 0?null:Z}},ge.startTransition=function(H){var Z=L.T,ne={};L.T=ne;try{var ae=H(),ce=L.S;ce!==null&&ce(ne,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(ee,W)}catch(we){W(we)}finally{L.T=Z}},ge.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ge.use=function(H){return L.H.use(H)},ge.useActionState=function(H,Z,ne){return L.H.useActionState(H,Z,ne)},ge.useCallback=function(H,Z){return L.H.useCallback(H,Z)},ge.useContext=function(H){return L.H.useContext(H)},ge.useDebugValue=function(){},ge.useDeferredValue=function(H,Z){return L.H.useDeferredValue(H,Z)},ge.useEffect=function(H,Z,ne){var ae=L.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(H,Z)},ge.useId=function(){return L.H.useId()},ge.useImperativeHandle=function(H,Z,ne){return L.H.useImperativeHandle(H,Z,ne)},ge.useInsertionEffect=function(H,Z){return L.H.useInsertionEffect(H,Z)},ge.useLayoutEffect=function(H,Z){return L.H.useLayoutEffect(H,Z)},ge.useMemo=function(H,Z){return L.H.useMemo(H,Z)},ge.useOptimistic=function(H,Z){return L.H.useOptimistic(H,Z)},ge.useReducer=function(H,Z,ne){return L.H.useReducer(H,Z,ne)},ge.useRef=function(H){return L.H.useRef(H)},ge.useState=function(H){return L.H.useState(H)},ge.useSyncExternalStore=function(H,Z,ne){return L.H.useSyncExternalStore(H,Z,ne)},ge.useTransition=function(){return L.H.useTransition()},ge.version="19.1.1",ge}var Kg;function vp(){return Kg||(Kg=1,Tf.exports=l9()),Tf.exports}var Ef={exports:{}},bt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function c9(){if(Wg)return bt;Wg=1;var t=vp();function e(f){var h="https://react.dev/errors/"+f;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+f+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(f,h,m){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:f,containerInfo:h,implementation:m}}var u=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(f,h){if(f==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bt.createPortal=function(f,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(f,h,null,m)},bt.flushSync=function(f){var h=u.T,m=r.p;try{if(u.T=null,r.p=2,f)return f()}finally{u.T=h,r.p=m,r.d.f()}},bt.preconnect=function(f,h){typeof f=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(f,h))},bt.prefetchDNS=function(f){typeof f=="string"&&r.d.D(f)},bt.preinit=function(f,h){if(typeof f=="string"&&h&&typeof h.as=="string"){var m=h.as,y=d(m,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?r.d.S(f,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:S}):m==="script"&&r.d.X(f,{crossOrigin:y,integrity:v,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},bt.preinitModule=function(f,h){if(typeof f=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=d(h.as,h.crossOrigin);r.d.M(f,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(f)},bt.preload=function(f,h){if(typeof f=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,y=d(m,h.crossOrigin);r.d.L(f,m,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},bt.preloadModule=function(f,h){if(typeof f=="string")if(h){var m=d(h.as,h.crossOrigin);r.d.m(f,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(f)},bt.requestFormReset=function(f){r.d.r(f)},bt.unstable_batchedUpdates=function(f,h){return f(h)},bt.useFormState=function(f,h,m){return u.H.useFormState(f,h,m)},bt.useFormStatus=function(){return u.H.useHostTransitionStatus()},bt.version="19.1.1",bt}var Qg;function u9(){if(Qg)return Ef.exports;Qg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Ef.exports=c9(),Ef.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function d9(){if(Jg)return Ns;Jg=1;var t=o9(),e=vp(),i=u9();function r(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,s=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(s=a.return),n=a.return;while(n)}return a.tag===3?s:null}function u(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(r(188))}function f(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(r(188));return a!==n?null:n}for(var s=n,c=a;;){var p=s.return;if(p===null)break;var g=p.alternate;if(g===null){if(c=p.return,c!==null){s=c;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===s)return d(p),n;if(g===c)return d(p),a;g=g.sibling}throw Error(r(188))}if(s.return!==c.return)s=p,c=g;else{for(var w=!1,A=p.child;A;){if(A===s){w=!0,s=p,c=g;break}if(A===c){w=!0,c=p,s=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===s){w=!0,s=g,c=p;break}if(A===c){w=!0,c=g,s=p;break}A=A.sibling}if(!w)throw Error(r(189))}}if(s.alternate!==c)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?n:a}function h(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=h(n),a!==null)return a;n=n.sibling}return null}var m=Object.assign,y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),T=Symbol.for("react.consumer"),C=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Symbol.for("react.client.reference");function oe(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ie?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case b:return"Fragment";case O:return"Profiler";case M:return"StrictMode";case L:return"Suspense";case P:return"SuspenseList";case $:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case C:return(n.displayName||"Context")+".Provider";case T:return(n._context.displayName||"Context")+".Consumer";case D:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case k:return a=n.displayName||null,a!==null?a:oe(n.type)||"Memo";case _:a=n._payload,n=n._init;try{return oe(n(a))}catch{}}return null}var re=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ee=[],H=-1;function Z(n){return{current:n}}function ne(n){0>H||(n.current=ee[H],ee[H]=null,H--)}function ae(n,a){H++,ee[H]=n.current,n.current=a}var ce=Z(null),we=Z(null),de=Z(null),st=Z(null);function Oe(n,a){switch(ae(de,a),ae(we,n),ae(ce,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?vg(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=vg(a),n=wg(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(ce),ae(ce,n)}function yt(){ne(ce),ne(we),ne(de)}function qi(n){n.memoizedState!==null&&ae(st,n);var a=ce.current,s=wg(a,n.type);a!==s&&(ae(we,n),ae(ce,s))}function $n(n){we.current===n&&(ne(ce),ne(we)),st.current===n&&(ne(st),Ds._currentValue=W)}var Wt=Object.prototype.hasOwnProperty,su=t.unstable_scheduleCallback,ou=t.unstable_cancelCallback,kv=t.unstable_shouldYield,zv=t.unstable_requestPaint,Cn=t.unstable_now,Pv=t.unstable_getCurrentPriorityLevel,Jh=t.unstable_ImmediatePriority,e1=t.unstable_UserBlockingPriority,Mo=t.unstable_NormalPriority,Nv=t.unstable_LowPriority,t1=t.unstable_IdlePriority,Bv=t.log,$v=t.unstable_setDisableYieldValue,$r=null,Pt=null;function ui(n){if(typeof Bv=="function"&&$v(n),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode($r,n)}catch{}}var Nt=Math.clz32?Math.clz32:Iv,_v=Math.log,Uv=Math.LN2;function Iv(n){return n>>>=0,n===0?32:31-(_v(n)/Uv|0)|0}var Ao=256,jo=4194304;function Yi(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Lo(n,a,s){var c=n.pendingLanes;if(c===0)return 0;var p=0,g=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var A=c&134217727;return A!==0?(c=A&~g,c!==0?p=Yi(c):(w&=A,w!==0?p=Yi(w):s||(s=A&~n,s!==0&&(p=Yi(s))))):(A=c&~g,A!==0?p=Yi(A):w!==0?p=Yi(w):s||(s=c&~n,s!==0&&(p=Yi(s)))),p===0?0:a!==0&&a!==p&&(a&g)===0&&(g=p&-p,s=a&-a,g>=s||g===32&&(s&4194048)!==0)?a:p}function _r(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function Gv(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n1(){var n=Ao;return Ao<<=1,(Ao&4194048)===0&&(Ao=256),n}function i1(){var n=jo;return jo<<=1,(jo&62914560)===0&&(jo=4194304),n}function lu(n){for(var a=[],s=0;31>s;s++)a.push(n);return a}function Ur(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function qv(n,a,s,c,p,g){var w=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var A=n.entanglements,V=n.expirationTimes,I=n.hiddenUpdates;for(s=w&~s;0<s;){var X=31-Nt(s),J=1<<X;A[X]=0,V[X]=-1;var G=I[X];if(G!==null)for(I[X]=null,X=0;X<G.length;X++){var q=G[X];q!==null&&(q.lane&=-536870913)}s&=~J}c!==0&&a1(n,c,0),g!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=g&~(w&~a))}function a1(n,a,s){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-Nt(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194090}function r1(n,a){var s=n.entangledLanes|=a;for(n=n.entanglements;s;){var c=31-Nt(s),p=1<<c;p&a|n[c]&a&&(n[c]|=a),s&=~p}}function cu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function uu(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function s1(){var n=K.p;return n!==0?n:(n=window.event,n===void 0?32:Bg(n.type))}function Yv(n,a){var s=K.p;try{return K.p=n,a()}finally{K.p=s}}var di=Math.random().toString(36).slice(2),vt="__reactFiber$"+di,Lt="__reactProps$"+di,Ca="__reactContainer$"+di,du="__reactEvents$"+di,Fv="__reactListeners$"+di,Zv="__reactHandles$"+di,o1="__reactResources$"+di,Ir="__reactMarker$"+di;function fu(n){delete n[vt],delete n[Lt],delete n[du],delete n[Fv],delete n[Zv]}function Ta(n){var a=n[vt];if(a)return a;for(var s=n.parentNode;s;){if(a=s[Ca]||s[vt]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(n=Tg(n);n!==null;){if(s=n[vt])return s;n=Tg(n)}return a}n=s,s=n.parentNode}return null}function Ea(n){if(n=n[vt]||n[Ca]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Gr(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(r(33))}function Ma(n){var a=n[o1];return a||(a=n[o1]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ot(n){n[Ir]=!0}var l1=new Set,c1={};function Fi(n,a){Aa(n,a),Aa(n+"Capture",a)}function Aa(n,a){for(c1[n]=a,n=0;n<a.length;n++)l1.add(a[n])}var Xv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),u1={},d1={};function Kv(n){return Wt.call(d1,n)?!0:Wt.call(u1,n)?!1:Xv.test(n)?d1[n]=!0:(u1[n]=!0,!1)}function Oo(n,a,s){if(Kv(a))if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+s)}}function Ro(n,a,s){if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+s)}}function _n(n,a,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(a,s,""+c)}}var pu,f1;function ja(n){if(pu===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);pu=a&&a[1]||"",f1=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pu+n+f1}var hu=!1;function mu(n,a){if(!n||hu)return"";hu=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(q){var G=q}Reflect.construct(n,[],J)}else{try{J.call()}catch(q){G=q}n.call(J.prototype)}}else{try{throw Error()}catch(q){G=q}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(q){if(q&&G&&typeof q.stack=="string")return[q.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),w=g[0],A=g[1];if(w&&A){var V=w.split(`
`),I=A.split(`
`);for(p=c=0;c<V.length&&!V[c].includes("DetermineComponentFrameRoot");)c++;for(;p<I.length&&!I[p].includes("DetermineComponentFrameRoot");)p++;if(c===V.length||p===I.length)for(c=V.length-1,p=I.length-1;1<=c&&0<=p&&V[c]!==I[p];)p--;for(;1<=c&&0<=p;c--,p--)if(V[c]!==I[p]){if(c!==1||p!==1)do if(c--,p--,0>p||V[c]!==I[p]){var X=`
`+V[c].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=c&&0<=p);break}}}finally{hu=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?ja(s):""}function Wv(n){switch(n.tag){case 26:case 27:case 5:return ja(n.type);case 16:return ja("Lazy");case 13:return ja("Suspense");case 19:return ja("SuspenseList");case 0:case 15:return mu(n.type,!1);case 11:return mu(n.type.render,!1);case 1:return mu(n.type,!0);case 31:return ja("Activity");default:return""}}function p1(n){try{var a="";do a+=Wv(n),n=n.return;while(n);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Qt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function h1(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Qv(n){var a=h1(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var p=s.get,g=s.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return p.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,a,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Do(n){n._valueTracker||(n._valueTracker=Qv(n))}function m1(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var s=a.getValue(),c="";return n&&(c=h1(n)?n.checked?"true":"false":n.value),n=c,n!==s?(a.setValue(n),!0):!1}function Ho(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Jv=/[\n"\\]/g;function Jt(n){return n.replace(Jv,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function gu(n,a,s,c,p,g,w,A){n.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.type=w:n.removeAttribute("type"),a!=null?w==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+Qt(a)):n.value!==""+Qt(a)&&(n.value=""+Qt(a)):w!=="submit"&&w!=="reset"||n.removeAttribute("value"),a!=null?xu(n,w,Qt(a)):s!=null?xu(n,w,Qt(s)):c!=null&&n.removeAttribute("value"),p==null&&g!=null&&(n.defaultChecked=!!g),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.name=""+Qt(A):n.removeAttribute("name")}function g1(n,a,s,c,p,g,w,A){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),a!=null||s!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;s=s!=null?""+Qt(s):"",a=a!=null?""+Qt(a):s,A||a===n.value||(n.value=a),n.defaultValue=a}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=A?n.checked:!!c,n.defaultChecked=!!c,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(n.name=w)}function xu(n,a,s){a==="number"&&Ho(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function La(n,a,s,c){if(n=n.options,a){a={};for(var p=0;p<s.length;p++)a["$"+s[p]]=!0;for(s=0;s<n.length;s++)p=a.hasOwnProperty("$"+n[s].value),n[s].selected!==p&&(n[s].selected=p),p&&c&&(n[s].defaultSelected=!0)}else{for(s=""+Qt(s),a=null,p=0;p<n.length;p++){if(n[p].value===s){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}a!==null||n[p].disabled||(a=n[p])}a!==null&&(a.selected=!0)}}function x1(n,a,s){if(a!=null&&(a=""+Qt(a),a!==n.value&&(n.value=a),s==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=s!=null?""+Qt(s):""}function y1(n,a,s,c){if(a==null){if(c!=null){if(s!=null)throw Error(r(92));if(re(c)){if(1<c.length)throw Error(r(93));c=c[0]}s=c}s==null&&(s=""),a=s}s=Qt(a),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function Oa(n,a){if(a){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=a;return}}n.textContent=a}var e8=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function v1(n,a,s){var c=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,s):typeof s!="number"||s===0||e8.has(a)?a==="float"?n.cssFloat=s:n[a]=(""+s).trim():n[a]=s+"px"}function w1(n,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var p in a)c=a[p],a.hasOwnProperty(p)&&s[p]!==c&&v1(n,p,c)}else for(var g in a)a.hasOwnProperty(g)&&v1(n,g,a[g])}function yu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var t8=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),n8=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(n){return n8.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var vu=null;function wu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ra=null,Da=null;function b1(n){var a=Ea(n);if(a&&(n=a.stateNode)){var s=n[Lt]||null;e:switch(n=a.stateNode,a.type){case"input":if(gu(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Jt(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var c=s[a];if(c!==n&&c.form===n.form){var p=c[Lt]||null;if(!p)throw Error(r(90));gu(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(a=0;a<s.length;a++)c=s[a],c.form===n.form&&m1(c)}break e;case"textarea":x1(n,s.value,s.defaultValue);break e;case"select":a=s.value,a!=null&&La(n,!!s.multiple,a,!1)}}}var bu=!1;function S1(n,a,s){if(bu)return n(a,s);bu=!0;try{var c=n(a);return c}finally{if(bu=!1,(Ra!==null||Da!==null)&&(vl(),Ra&&(a=Ra,n=Da,Da=Ra=null,b1(a),n)))for(a=0;a<n.length;a++)b1(n[a])}}function qr(n,a){var s=n.stateNode;if(s===null)return null;var c=s[Lt]||null;if(c===null)return null;s=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Un)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Su=!1}var fi=null,Cu=null,ko=null;function C1(){if(ko)return ko;var n,a=Cu,s=a.length,c,p="value"in fi?fi.value:fi.textContent,g=p.length;for(n=0;n<s&&a[n]===p[n];n++);var w=s-n;for(c=1;c<=w&&a[s-c]===p[g-c];c++);return ko=p.slice(n,1<c?1-c:void 0)}function zo(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Po(){return!0}function T1(){return!1}function Ot(n){function a(s,c,p,g,w){this._reactName=s,this._targetInst=p,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(s=n[A],this[A]=s?s(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Po:T1,this.isPropagationStopped=T1,this}return m(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),a}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},No=Ot(Zi),Fr=m({},Zi,{view:0,detail:0}),i8=Ot(Fr),Tu,Eu,Zr,Bo=m({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Zr&&(Zr&&n.type==="mousemove"?(Tu=n.screenX-Zr.screenX,Eu=n.screenY-Zr.screenY):Eu=Tu=0,Zr=n),Tu)},movementY:function(n){return"movementY"in n?n.movementY:Eu}}),E1=Ot(Bo),a8=m({},Bo,{dataTransfer:0}),r8=Ot(a8),s8=m({},Fr,{relatedTarget:0}),Mu=Ot(s8),o8=m({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),l8=Ot(o8),c8=m({},Zi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u8=Ot(c8),d8=m({},Zi,{data:0}),M1=Ot(d8),f8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m8(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=h8[n])?!!a[n]:!1}function Au(){return m8}var g8=m({},Fr,{key:function(n){if(n.key){var a=f8[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=zo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?p8[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(n){return n.type==="keypress"?zo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),x8=Ot(g8),y8=m({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),A1=Ot(y8),v8=m({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),w8=Ot(v8),b8=m({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),S8=Ot(b8),C8=m({},Bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),T8=Ot(C8),E8=m({},Zi,{newState:0,oldState:0}),M8=Ot(E8),A8=[9,13,27,32],ju=Un&&"CompositionEvent"in window,Xr=null;Un&&"documentMode"in document&&(Xr=document.documentMode);var j8=Un&&"TextEvent"in window&&!Xr,j1=Un&&(!ju||Xr&&8<Xr&&11>=Xr),L1=" ",O1=!1;function R1(n,a){switch(n){case"keyup":return A8.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D1(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ha=!1;function L8(n,a){switch(n){case"compositionend":return D1(a);case"keypress":return a.which!==32?null:(O1=!0,L1);case"textInput":return n=a.data,n===L1&&O1?null:n;default:return null}}function O8(n,a){if(Ha)return n==="compositionend"||!ju&&R1(n,a)?(n=C1(),ko=Cu=fi=null,Ha=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return j1&&a.locale!=="ko"?null:a.data;default:return null}}var R8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H1(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!R8[n.type]:a==="textarea"}function V1(n,a,s,c){Ra?Da?Da.push(c):Da=[c]:Ra=c,a=El(a,"onChange"),0<a.length&&(s=new No("onChange","change",null,s,c),n.push({event:s,listeners:a}))}var Kr=null,Wr=null;function D8(n){hg(n,0)}function $o(n){var a=Gr(n);if(m1(a))return n}function k1(n,a){if(n==="change")return a}var z1=!1;if(Un){var Lu;if(Un){var Ou="oninput"in document;if(!Ou){var P1=document.createElement("div");P1.setAttribute("oninput","return;"),Ou=typeof P1.oninput=="function"}Lu=Ou}else Lu=!1;z1=Lu&&(!document.documentMode||9<document.documentMode)}function N1(){Kr&&(Kr.detachEvent("onpropertychange",B1),Wr=Kr=null)}function B1(n){if(n.propertyName==="value"&&$o(Wr)){var a=[];V1(a,Wr,n,wu(n)),S1(D8,a)}}function H8(n,a,s){n==="focusin"?(N1(),Kr=a,Wr=s,Kr.attachEvent("onpropertychange",B1)):n==="focusout"&&N1()}function V8(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $o(Wr)}function k8(n,a){if(n==="click")return $o(a)}function z8(n,a){if(n==="input"||n==="change")return $o(a)}function P8(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var Bt=typeof Object.is=="function"?Object.is:P8;function Qr(n,a){if(Bt(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var s=Object.keys(n),c=Object.keys(a);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var p=s[c];if(!Wt.call(a,p)||!Bt(n[p],a[p]))return!1}return!0}function $1(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function _1(n,a){var s=$1(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=a&&c>=a)return{node:s,offset:a-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=$1(s)}}function U1(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?U1(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function I1(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Ho(n.document);a instanceof n.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)n=a.contentWindow;else break;a=Ho(n.document)}return a}function Ru(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var N8=Un&&"documentMode"in document&&11>=document.documentMode,Va=null,Du=null,Jr=null,Hu=!1;function G1(n,a,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Hu||Va==null||Va!==Ho(c)||(c=Va,"selectionStart"in c&&Ru(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Jr&&Qr(Jr,c)||(Jr=c,c=El(Du,"onSelect"),0<c.length&&(a=new No("onSelect","select",null,a,s),n.push({event:a,listeners:c}),a.target=Va)))}function Xi(n,a){var s={};return s[n.toLowerCase()]=a.toLowerCase(),s["Webkit"+n]="webkit"+a,s["Moz"+n]="moz"+a,s}var ka={animationend:Xi("Animation","AnimationEnd"),animationiteration:Xi("Animation","AnimationIteration"),animationstart:Xi("Animation","AnimationStart"),transitionrun:Xi("Transition","TransitionRun"),transitionstart:Xi("Transition","TransitionStart"),transitioncancel:Xi("Transition","TransitionCancel"),transitionend:Xi("Transition","TransitionEnd")},Vu={},q1={};Un&&(q1=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function Ki(n){if(Vu[n])return Vu[n];if(!ka[n])return n;var a=ka[n],s;for(s in a)if(a.hasOwnProperty(s)&&s in q1)return Vu[n]=a[s];return n}var Y1=Ki("animationend"),F1=Ki("animationiteration"),Z1=Ki("animationstart"),B8=Ki("transitionrun"),$8=Ki("transitionstart"),_8=Ki("transitioncancel"),X1=Ki("transitionend"),K1=new Map,ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ku.push("scrollEnd");function hn(n,a){K1.set(n,a),Fi(a,[n])}var W1=new WeakMap;function en(n,a){if(typeof n=="object"&&n!==null){var s=W1.get(n);return s!==void 0?s:(a={value:n,source:a,stack:p1(a)},W1.set(n,a),a)}return{value:n,source:a,stack:p1(a)}}var tn=[],za=0,zu=0;function _o(){for(var n=za,a=zu=za=0;a<n;){var s=tn[a];tn[a++]=null;var c=tn[a];tn[a++]=null;var p=tn[a];tn[a++]=null;var g=tn[a];if(tn[a++]=null,c!==null&&p!==null){var w=c.pending;w===null?p.next=p:(p.next=w.next,w.next=p),c.pending=p}g!==0&&Q1(s,p,g)}}function Uo(n,a,s,c){tn[za++]=n,tn[za++]=a,tn[za++]=s,tn[za++]=c,zu|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Pu(n,a,s,c){return Uo(n,a,s,c),Io(n)}function Pa(n,a){return Uo(n,null,null,a),Io(n)}function Q1(n,a,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var p=!1,g=n.return;g!==null;)g.childLanes|=s,c=g.alternate,c!==null&&(c.childLanes|=s),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(p=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,p&&a!==null&&(p=31-Nt(s),n=g.hiddenUpdates,c=n[p],c===null?n[p]=[a]:c.push(a),a.lane=s|536870912),g):null}function Io(n){if(50<Ts)throw Ts=0,Id=null,Error(r(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var Na={};function U8(n,a,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(n,a,s,c){return new U8(n,a,s,c)}function Nu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function In(n,a){var s=n.alternate;return s===null?(s=$t(n.tag,a,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=a,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,a=n.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function J1(n,a){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,a=s.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Go(n,a,s,c,p,g){var w=0;if(c=n,typeof n=="function")Nu(n)&&(w=1);else if(typeof n=="string")w=G7(n,s,ce.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case $:return n=$t(31,s,a,p),n.elementType=$,n.lanes=g,n;case b:return Wi(s.children,p,g,a);case M:w=8,p|=24;break;case O:return n=$t(12,s,a,p|2),n.elementType=O,n.lanes=g,n;case L:return n=$t(13,s,a,p),n.elementType=L,n.lanes=g,n;case P:return n=$t(19,s,a,p),n.elementType=P,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:case C:w=10;break e;case T:w=9;break e;case D:w=11;break e;case k:w=14;break e;case _:w=16,c=null;break e}w=29,s=Error(r(130,n===null?"null":typeof n,"")),c=null}return a=$t(w,s,a,p),a.elementType=n,a.type=c,a.lanes=g,a}function Wi(n,a,s,c){return n=$t(7,n,c,a),n.lanes=s,n}function Bu(n,a,s){return n=$t(6,n,null,a),n.lanes=s,n}function $u(n,a,s){return a=$t(4,n.children!==null?n.children:[],n.key,a),a.lanes=s,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Ba=[],$a=0,qo=null,Yo=0,nn=[],an=0,Qi=null,Gn=1,qn="";function Ji(n,a){Ba[$a++]=Yo,Ba[$a++]=qo,qo=n,Yo=a}function e2(n,a,s){nn[an++]=Gn,nn[an++]=qn,nn[an++]=Qi,Qi=n;var c=Gn;n=qn;var p=32-Nt(c)-1;c&=~(1<<p),s+=1;var g=32-Nt(a)+p;if(30<g){var w=p-p%5;g=(c&(1<<w)-1).toString(32),c>>=w,p-=w,Gn=1<<32-Nt(a)+p|s<<p|c,qn=g+n}else Gn=1<<g|s<<p|c,qn=n}function _u(n){n.return!==null&&(Ji(n,1),e2(n,1,0))}function Uu(n){for(;n===qo;)qo=Ba[--$a],Ba[$a]=null,Yo=Ba[--$a],Ba[$a]=null;for(;n===Qi;)Qi=nn[--an],nn[an]=null,qn=nn[--an],nn[an]=null,Gn=nn[--an],nn[an]=null}var Mt=null,Fe=null,Ee=!1,ea=null,Tn=!1,Iu=Error(r(519));function ta(n){var a=Error(r(418,""));throw ns(en(a,n)),Iu}function t2(n){var a=n.stateNode,s=n.type,c=n.memoizedProps;switch(a[vt]=n,a[Lt]=c,s){case"dialog":Se("cancel",a),Se("close",a);break;case"iframe":case"object":case"embed":Se("load",a);break;case"video":case"audio":for(s=0;s<Ms.length;s++)Se(Ms[s],a);break;case"source":Se("error",a);break;case"img":case"image":case"link":Se("error",a),Se("load",a);break;case"details":Se("toggle",a);break;case"input":Se("invalid",a),g1(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Do(a);break;case"select":Se("invalid",a);break;case"textarea":Se("invalid",a),y1(a,c.value,c.defaultValue,c.children),Do(a)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||c.suppressHydrationWarning===!0||yg(a.textContent,s)?(c.popover!=null&&(Se("beforetoggle",a),Se("toggle",a)),c.onScroll!=null&&Se("scroll",a),c.onScrollEnd!=null&&Se("scrollend",a),c.onClick!=null&&(a.onclick=Ml),a=!0):a=!1,a||ta(n)}function n2(n){for(Mt=n.return;Mt;)switch(Mt.tag){case 5:case 13:Tn=!1;return;case 27:case 3:Tn=!0;return;default:Mt=Mt.return}}function es(n){if(n!==Mt)return!1;if(!Ee)return n2(n),Ee=!0,!1;var a=n.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||sf(n.type,n.memoizedProps)),s=!s),s&&Fe&&ta(n),n2(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(a===0){Fe=gn(n.nextSibling);break e}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;n=n.nextSibling}Fe=null}}else a===27?(a=Fe,ji(n.type)?(n=uf,uf=null,Fe=n):Fe=a):Fe=Mt?gn(n.stateNode.nextSibling):null;return!0}function ts(){Fe=Mt=null,Ee=!1}function i2(){var n=ea;return n!==null&&(Ht===null?Ht=n:Ht.push.apply(Ht,n),ea=null),n}function ns(n){ea===null?ea=[n]:ea.push(n)}var Gu=Z(null),na=null,Yn=null;function pi(n,a,s){ae(Gu,a._currentValue),a._currentValue=s}function Fn(n){n._currentValue=Gu.current,ne(Gu)}function qu(n,a,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===s)break;n=n.return}}function Yu(n,a,s,c){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var g=p.dependencies;if(g!==null){var w=p.child;g=g.firstContext;e:for(;g!==null;){var A=g;g=p;for(var V=0;V<a.length;V++)if(A.context===a[V]){g.lanes|=s,A=g.alternate,A!==null&&(A.lanes|=s),qu(g.return,s,n),c||(w=null);break e}g=A.next}}else if(p.tag===18){if(w=p.return,w===null)throw Error(r(341));w.lanes|=s,g=w.alternate,g!==null&&(g.lanes|=s),qu(w,s,n),w=null}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===n){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}}function is(n,a,s,c){n=null;for(var p=a,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var w=p.alternate;if(w===null)throw Error(r(387));if(w=w.memoizedProps,w!==null){var A=p.type;Bt(p.pendingProps.value,w.value)||(n!==null?n.push(A):n=[A])}}else if(p===st.current){if(w=p.alternate,w===null)throw Error(r(387));w.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(Ds):n=[Ds])}p=p.return}n!==null&&Yu(a,n,s,c),a.flags|=262144}function Fo(n){for(n=n.firstContext;n!==null;){if(!Bt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ia(n){na=n,Yn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function wt(n){return a2(na,n)}function Zo(n,a){return na===null&&ia(n),a2(n,a)}function a2(n,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},Yn===null){if(n===null)throw Error(r(308));Yn=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Yn=Yn.next=a;return s}var I8=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(s){return s()})}},G8=t.unstable_scheduleCallback,q8=t.unstable_NormalPriority,at={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new I8,data:new Map,refCount:0}}function as(n){n.refCount--,n.refCount===0&&G8(q8,function(){n.controller.abort()})}var rs=null,Zu=0,_a=0,Ua=null;function Y8(n,a){if(rs===null){var s=rs=[];Zu=0,_a=Kd(),Ua={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Zu++,a.then(r2,r2),a}function r2(){if(--Zu===0&&rs!==null){Ua!==null&&(Ua.status="fulfilled");var n=rs;rs=null,_a=0,Ua=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function F8(n,a){var s=[],c={status:"pending",value:null,reason:null,then:function(p){s.push(p)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var p=0;p<s.length;p++)(0,s[p])(a)},function(p){for(c.status="rejected",c.reason=p,p=0;p<s.length;p++)(0,s[p])(void 0)}),c}var s2=B.S;B.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&Y8(n,a),s2!==null&&s2(n,a)};var aa=Z(null);function Xu(){var n=aa.current;return n!==null?n:Be.pooledCache}function Xo(n,a){a===null?ae(aa,aa.current):ae(aa,a.pool)}function o2(){var n=Xu();return n===null?null:{parent:at._currentValue,pool:n}}var ss=Error(r(460)),l2=Error(r(474)),Ko=Error(r(542)),Ku={then:function(){}};function c2(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Wo(){}function u2(n,a,s){switch(s=n[s],s===void 0?n.push(a):s!==a&&(a.then(Wo,Wo),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,f2(n),n;default:if(typeof a.status=="string")a.then(Wo,Wo);else{if(n=Be,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var p=a;p.status="fulfilled",p.value=c}},function(c){if(a.status==="pending"){var p=a;p.status="rejected",p.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,f2(n),n}throw os=a,ss}}var os=null;function d2(){if(os===null)throw Error(r(459));var n=os;return os=null,n}function f2(n){if(n===ss||n===Ko)throw Error(r(483))}var hi=!1;function Wu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function mi(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function gi(n,a,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(He&2)!==0){var p=c.pending;return p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a,a=Io(n),Q1(n,null,s),a}return Uo(n,c,a,s),Io(n)}function ls(n,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,r1(n,s)}}function Ju(n,a){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var p=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var w={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};g===null?p=g=w:g=g.next=w,s=s.next}while(s!==null);g===null?p=g=a:g=g.next=a}else p=g=a;s={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=a:n.next=a,s.lastBaseUpdate=a}var ed=!1;function cs(){if(ed){var n=Ua;if(n!==null)throw n}}function us(n,a,s,c){ed=!1;var p=n.updateQueue;hi=!1;var g=p.firstBaseUpdate,w=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var V=A,I=V.next;V.next=null,w===null?g=I:w.next=I,w=V;var X=n.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==w&&(A===null?X.firstBaseUpdate=I:A.next=I,X.lastBaseUpdate=V))}if(g!==null){var J=p.baseState;w=0,X=I=V=null,A=g;do{var G=A.lane&-536870913,q=G!==A.lane;if(q?(Ce&G)===G:(c&G)===G){G!==0&&G===_a&&(ed=!0),X!==null&&(X=X.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var pe=n,ue=A;G=a;var Pe=s;switch(ue.tag){case 1:if(pe=ue.payload,typeof pe=="function"){J=pe.call(Pe,J,G);break e}J=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=ue.payload,G=typeof pe=="function"?pe.call(Pe,J,G):pe,G==null)break e;J=m({},J,G);break e;case 2:hi=!0}}G=A.callback,G!==null&&(n.flags|=64,q&&(n.flags|=8192),q=p.callbacks,q===null?p.callbacks=[G]:q.push(G))}else q={lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(I=X=q,V=J):X=X.next=q,w|=G;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;q=A,A=q.next,q.next=null,p.lastBaseUpdate=q,p.shared.pending=null}}while(!0);X===null&&(V=J),p.baseState=V,p.firstBaseUpdate=I,p.lastBaseUpdate=X,g===null&&(p.shared.lanes=0),Ti|=w,n.lanes=w,n.memoizedState=J}}function p2(n,a){if(typeof n!="function")throw Error(r(191,n));n.call(a)}function h2(n,a){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)p2(s[n],a)}var Ia=Z(null),Qo=Z(0);function m2(n,a){n=ei,ae(Qo,n),ae(Ia,a),ei=n|a.baseLanes}function td(){ae(Qo,ei),ae(Ia,Ia.current)}function nd(){ei=Qo.current,ne(Ia),ne(Qo)}var xi=0,ye=null,ke=null,Je=null,Jo=!1,Ga=!1,ra=!1,el=0,ds=0,qa=null,Z8=0;function Ke(){throw Error(r(321))}function id(n,a){if(a===null)return!1;for(var s=0;s<a.length&&s<n.length;s++)if(!Bt(n[s],a[s]))return!1;return!0}function ad(n,a,s,c,p,g){return xi=g,ye=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,B.H=n===null||n.memoizedState===null?Q2:J2,ra=!1,g=s(c,p),ra=!1,Ga&&(g=x2(a,s,c,p)),g2(n),g}function g2(n){B.H=sl;var a=ke!==null&&ke.next!==null;if(xi=0,Je=ke=ye=null,Jo=!1,ds=0,qa=null,a)throw Error(r(300));n===null||lt||(n=n.dependencies,n!==null&&Fo(n)&&(lt=!0))}function x2(n,a,s,c){ye=n;var p=0;do{if(Ga&&(qa=null),ds=0,Ga=!1,25<=p)throw Error(r(301));if(p+=1,Je=ke=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}B.H=t7,g=a(s,c)}while(Ga);return g}function X8(){var n=B.H,a=n.useState()[0];return a=typeof a.then=="function"?fs(a):a,n=n.useState()[0],(ke!==null?ke.memoizedState:null)!==n&&(ye.flags|=1024),a}function rd(){var n=el!==0;return el=0,n}function sd(n,a,s){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~s}function od(n){if(Jo){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Jo=!1}xi=0,Je=ke=ye=null,Ga=!1,ds=el=0,qa=null}function Rt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ye.memoizedState=Je=n:Je=Je.next=n,Je}function et(){if(ke===null){var n=ye.alternate;n=n!==null?n.memoizedState:null}else n=ke.next;var a=Je===null?ye.memoizedState:Je.next;if(a!==null)Je=a,ke=n;else{if(n===null)throw ye.alternate===null?Error(r(467)):Error(r(310));ke=n,n={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Je===null?ye.memoizedState=Je=n:Je=Je.next=n}return Je}function ld(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fs(n){var a=ds;return ds+=1,qa===null&&(qa=[]),n=u2(qa,n,a),a=ye,(Je===null?a.memoizedState:Je.next)===null&&(a=a.alternate,B.H=a===null||a.memoizedState===null?Q2:J2),n}function tl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return fs(n);if(n.$$typeof===C)return wt(n)}throw Error(r(438,String(n)))}function cd(n){var a=null,s=ye.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var c=ye.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(p){return p.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=ld(),ye.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(n),c=0;c<n;c++)s[c]=Y;return a.index++,s}function Zn(n,a){return typeof a=="function"?a(n):a}function nl(n){var a=et();return ud(a,ke,n)}function ud(n,a,s){var c=n.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=s;var p=n.baseQueue,g=c.pending;if(g!==null){if(p!==null){var w=p.next;p.next=g.next,g.next=w}a.baseQueue=p=g,c.pending=null}if(g=n.baseState,p===null)n.memoizedState=g;else{a=p.next;var A=w=null,V=null,I=a,X=!1;do{var J=I.lane&-536870913;if(J!==I.lane?(Ce&J)===J:(xi&J)===J){var G=I.revertLane;if(G===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),J===_a&&(X=!0);else if((xi&G)===G){I=I.next,G===_a&&(X=!0);continue}else J={lane:0,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},V===null?(A=V=J,w=g):V=V.next=J,ye.lanes|=G,Ti|=G;J=I.action,ra&&s(g,J),g=I.hasEagerState?I.eagerState:s(g,J)}else G={lane:J,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},V===null?(A=V=G,w=g):V=V.next=G,ye.lanes|=J,Ti|=J;I=I.next}while(I!==null&&I!==a);if(V===null?w=g:V.next=A,!Bt(g,n.memoizedState)&&(lt=!0,X&&(s=Ua,s!==null)))throw s;n.memoizedState=g,n.baseState=w,n.baseQueue=V,c.lastRenderedState=g}return p===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function dd(n){var a=et(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var c=s.dispatch,p=s.pending,g=a.memoizedState;if(p!==null){s.pending=null;var w=p=p.next;do g=n(g,w.action),w=w.next;while(w!==p);Bt(g,a.memoizedState)||(lt=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),s.lastRenderedState=g}return[g,c]}function y2(n,a,s){var c=ye,p=et(),g=Ee;if(g){if(s===void 0)throw Error(r(407));s=s()}else s=a();var w=!Bt((ke||p).memoizedState,s);w&&(p.memoizedState=s,lt=!0),p=p.queue;var A=b2.bind(null,c,p,n);if(ps(2048,8,A,[n]),p.getSnapshot!==a||w||Je!==null&&Je.memoizedState.tag&1){if(c.flags|=2048,Ya(9,il(),w2.bind(null,c,p,s,a),null),Be===null)throw Error(r(349));g||(xi&124)!==0||v2(c,a,s)}return s}function v2(n,a,s){n.flags|=16384,n={getSnapshot:a,value:s},a=ye.updateQueue,a===null?(a=ld(),ye.updateQueue=a,a.stores=[n]):(s=a.stores,s===null?a.stores=[n]:s.push(n))}function w2(n,a,s,c){a.value=s,a.getSnapshot=c,S2(a)&&C2(n)}function b2(n,a,s){return s(function(){S2(a)&&C2(n)})}function S2(n){var a=n.getSnapshot;n=n.value;try{var s=a();return!Bt(n,s)}catch{return!0}}function C2(n){var a=Pa(n,2);a!==null&&qt(a,n,2)}function fd(n){var a=Rt();if(typeof n=="function"){var s=n;if(n=s(),ra){ui(!0);try{s()}finally{ui(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:n},a}function T2(n,a,s,c){return n.baseState=s,ud(n,ke,typeof c=="function"?c:Zn)}function K8(n,a,s,c,p){if(rl(n))throw Error(r(485));if(n=a.action,n!==null){var g={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){g.listeners.push(w)}};B.T!==null?s(!0):g.isTransition=!1,c(g),s=a.pending,s===null?(g.next=a.pending=g,E2(a,g)):(g.next=s.next,a.pending=s.next=g)}}function E2(n,a){var s=a.action,c=a.payload,p=n.state;if(a.isTransition){var g=B.T,w={};B.T=w;try{var A=s(p,c),V=B.S;V!==null&&V(w,A),M2(n,a,A)}catch(I){pd(n,a,I)}finally{B.T=g}}else try{g=s(p,c),M2(n,a,g)}catch(I){pd(n,a,I)}}function M2(n,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){A2(n,a,c)},function(c){return pd(n,a,c)}):A2(n,a,s)}function A2(n,a,s){a.status="fulfilled",a.value=s,j2(a),n.state=s,a=n.pending,a!==null&&(s=a.next,s===a?n.pending=null:(s=s.next,a.next=s,E2(n,s)))}function pd(n,a,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=s,j2(a),a=a.next;while(a!==c)}n.action=null}function j2(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function L2(n,a){return a}function O2(n,a){if(Ee){var s=Be.formState;if(s!==null){e:{var c=ye;if(Ee){if(Fe){t:{for(var p=Fe,g=Tn;p.nodeType!==8;){if(!g){p=null;break t}if(p=gn(p.nextSibling),p===null){p=null;break t}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){Fe=gn(p.nextSibling),c=p.data==="F!";break e}}ta(c)}c=!1}c&&(a=s[0])}}return s=Rt(),s.memoizedState=s.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:L2,lastRenderedState:a},s.queue=c,s=X2.bind(null,ye,c),c.dispatch=s,c=fd(!1),g=yd.bind(null,ye,!1,c.queue),c=Rt(),p={state:a,dispatch:null,action:n,pending:null},c.queue=p,s=K8.bind(null,ye,p,g,s),p.dispatch=s,c.memoizedState=n,[a,s,!1]}function R2(n){var a=et();return D2(a,ke,n)}function D2(n,a,s){if(a=ud(n,a,L2)[0],n=nl(Zn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=fs(a)}catch(w){throw w===ss?Ko:w}else c=a;a=et();var p=a.queue,g=p.dispatch;return s!==a.memoizedState&&(ye.flags|=2048,Ya(9,il(),W8.bind(null,p,s),null)),[c,g,n]}function W8(n,a){n.action=a}function H2(n){var a=et(),s=ke;if(s!==null)return D2(a,s,n);et(),a=a.memoizedState,s=et();var c=s.queue.dispatch;return s.memoizedState=n,[a,c,!1]}function Ya(n,a,s,c){return n={tag:n,create:s,deps:c,inst:a,next:null},a=ye.updateQueue,a===null&&(a=ld(),ye.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,a.lastEffect=n),n}function il(){return{destroy:void 0,resource:void 0}}function V2(){return et().memoizedState}function al(n,a,s,c){var p=Rt();c=c===void 0?null:c,ye.flags|=n,p.memoizedState=Ya(1|a,il(),s,c)}function ps(n,a,s,c){var p=et();c=c===void 0?null:c;var g=p.memoizedState.inst;ke!==null&&c!==null&&id(c,ke.memoizedState.deps)?p.memoizedState=Ya(a,g,s,c):(ye.flags|=n,p.memoizedState=Ya(1|a,g,s,c))}function k2(n,a){al(8390656,8,n,a)}function z2(n,a){ps(2048,8,n,a)}function P2(n,a){return ps(4,2,n,a)}function N2(n,a){return ps(4,4,n,a)}function B2(n,a){if(typeof a=="function"){n=n();var s=a(n);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function $2(n,a,s){s=s!=null?s.concat([n]):null,ps(4,4,B2.bind(null,a,n),s)}function hd(){}function _2(n,a){var s=et();a=a===void 0?null:a;var c=s.memoizedState;return a!==null&&id(a,c[1])?c[0]:(s.memoizedState=[n,a],n)}function U2(n,a){var s=et();a=a===void 0?null:a;var c=s.memoizedState;if(a!==null&&id(a,c[1]))return c[0];if(c=n(),ra){ui(!0);try{n()}finally{ui(!1)}}return s.memoizedState=[c,a],c}function md(n,a,s){return s===void 0||(xi&1073741824)!==0?n.memoizedState=a:(n.memoizedState=s,n=qm(),ye.lanes|=n,Ti|=n,s)}function I2(n,a,s,c){return Bt(s,a)?s:Ia.current!==null?(n=md(n,s,c),Bt(n,a)||(lt=!0),n):(xi&42)===0?(lt=!0,n.memoizedState=s):(n=qm(),ye.lanes|=n,Ti|=n,a)}function G2(n,a,s,c,p){var g=K.p;K.p=g!==0&&8>g?g:8;var w=B.T,A={};B.T=A,yd(n,!1,a,s);try{var V=p(),I=B.S;if(I!==null&&I(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var X=F8(V,c);hs(n,a,X,Gt(n))}else hs(n,a,c,Gt(n))}catch(J){hs(n,a,{then:function(){},status:"rejected",reason:J},Gt())}finally{K.p=g,B.T=w}}function Q8(){}function gd(n,a,s,c){if(n.tag!==5)throw Error(r(476));var p=q2(n).queue;G2(n,p,a,W,s===null?Q8:function(){return Y2(n),s(c)})}function q2(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:W},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:s},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function Y2(n){var a=q2(n).next.queue;hs(n,a,{},Gt())}function xd(){return wt(Ds)}function F2(){return et().memoizedState}function Z2(){return et().memoizedState}function J8(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var s=Gt();n=mi(s);var c=gi(a,n,s);c!==null&&(qt(c,a,s),ls(c,a,s)),a={cache:Fu()},n.payload=a;return}a=a.return}}function e7(n,a,s){var c=Gt();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},rl(n)?K2(a,s):(s=Pu(n,a,s,c),s!==null&&(qt(s,n,c),W2(s,a,c)))}function X2(n,a,s){var c=Gt();hs(n,a,s,c)}function hs(n,a,s,c){var p={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(rl(n))K2(a,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var w=a.lastRenderedState,A=g(w,s);if(p.hasEagerState=!0,p.eagerState=A,Bt(A,w))return Uo(n,a,p,0),Be===null&&_o(),!1}catch{}finally{}if(s=Pu(n,a,p,c),s!==null)return qt(s,n,c),W2(s,a,c),!0}return!1}function yd(n,a,s,c){if(c={lane:2,revertLane:Kd(),action:c,hasEagerState:!1,eagerState:null,next:null},rl(n)){if(a)throw Error(r(479))}else a=Pu(n,s,c,2),a!==null&&qt(a,n,2)}function rl(n){var a=n.alternate;return n===ye||a!==null&&a===ye}function K2(n,a){Ga=Jo=!0;var s=n.pending;s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a}function W2(n,a,s){if((s&4194048)!==0){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,r1(n,s)}}var sl={readContext:wt,use:tl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},Q2={readContext:wt,use:tl,useCallback:function(n,a){return Rt().memoizedState=[n,a===void 0?null:a],n},useContext:wt,useEffect:k2,useImperativeHandle:function(n,a,s){s=s!=null?s.concat([n]):null,al(4194308,4,B2.bind(null,a,n),s)},useLayoutEffect:function(n,a){return al(4194308,4,n,a)},useInsertionEffect:function(n,a){al(4,2,n,a)},useMemo:function(n,a){var s=Rt();a=a===void 0?null:a;var c=n();if(ra){ui(!0);try{n()}finally{ui(!1)}}return s.memoizedState=[c,a],c},useReducer:function(n,a,s){var c=Rt();if(s!==void 0){var p=s(a);if(ra){ui(!0);try{s(a)}finally{ui(!1)}}}else p=a;return c.memoizedState=c.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},c.queue=n,n=n.dispatch=e7.bind(null,ye,n),[c.memoizedState,n]},useRef:function(n){var a=Rt();return n={current:n},a.memoizedState=n},useState:function(n){n=fd(n);var a=n.queue,s=X2.bind(null,ye,a);return a.dispatch=s,[n.memoizedState,s]},useDebugValue:hd,useDeferredValue:function(n,a){var s=Rt();return md(s,n,a)},useTransition:function(){var n=fd(!1);return n=G2.bind(null,ye,n.queue,!0,!1),Rt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,s){var c=ye,p=Rt();if(Ee){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),Be===null)throw Error(r(349));(Ce&124)!==0||v2(c,a,s)}p.memoizedState=s;var g={value:s,getSnapshot:a};return p.queue=g,k2(b2.bind(null,c,g,n),[n]),c.flags|=2048,Ya(9,il(),w2.bind(null,c,g,s,a),null),s},useId:function(){var n=Rt(),a=Be.identifierPrefix;if(Ee){var s=qn,c=Gn;s=(c&~(1<<32-Nt(c)-1)).toString(32)+s,a="«"+a+"R"+s,s=el++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=Z8++,a="«"+a+"r"+s.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:xd,useFormState:O2,useActionState:O2,useOptimistic:function(n){var a=Rt();a.memoizedState=a.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=yd.bind(null,ye,!0,s),s.dispatch=a,[n,a]},useMemoCache:cd,useCacheRefresh:function(){return Rt().memoizedState=J8.bind(null,ye)}},J2={readContext:wt,use:tl,useCallback:_2,useContext:wt,useEffect:z2,useImperativeHandle:$2,useInsertionEffect:P2,useLayoutEffect:N2,useMemo:U2,useReducer:nl,useRef:V2,useState:function(){return nl(Zn)},useDebugValue:hd,useDeferredValue:function(n,a){var s=et();return I2(s,ke.memoizedState,n,a)},useTransition:function(){var n=nl(Zn)[0],a=et().memoizedState;return[typeof n=="boolean"?n:fs(n),a]},useSyncExternalStore:y2,useId:F2,useHostTransitionStatus:xd,useFormState:R2,useActionState:R2,useOptimistic:function(n,a){var s=et();return T2(s,ke,n,a)},useMemoCache:cd,useCacheRefresh:Z2},t7={readContext:wt,use:tl,useCallback:_2,useContext:wt,useEffect:z2,useImperativeHandle:$2,useInsertionEffect:P2,useLayoutEffect:N2,useMemo:U2,useReducer:dd,useRef:V2,useState:function(){return dd(Zn)},useDebugValue:hd,useDeferredValue:function(n,a){var s=et();return ke===null?md(s,n,a):I2(s,ke.memoizedState,n,a)},useTransition:function(){var n=dd(Zn)[0],a=et().memoizedState;return[typeof n=="boolean"?n:fs(n),a]},useSyncExternalStore:y2,useId:F2,useHostTransitionStatus:xd,useFormState:H2,useActionState:H2,useOptimistic:function(n,a){var s=et();return ke!==null?T2(s,ke,n,a):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:cd,useCacheRefresh:Z2},Fa=null,ms=0;function ol(n){var a=ms;return ms+=1,Fa===null&&(Fa=[]),u2(Fa,n,a)}function gs(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function ll(n,a){throw a.$$typeof===y?Error(r(525)):(n=Object.prototype.toString.call(a),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function em(n){var a=n._init;return a(n._payload)}function tm(n){function a(N,z){if(n){var U=N.deletions;U===null?(N.deletions=[z],N.flags|=16):U.push(z)}}function s(N,z){if(!n)return null;for(;z!==null;)a(N,z),z=z.sibling;return null}function c(N){for(var z=new Map;N!==null;)N.key!==null?z.set(N.key,N):z.set(N.index,N),N=N.sibling;return z}function p(N,z){return N=In(N,z),N.index=0,N.sibling=null,N}function g(N,z,U){return N.index=U,n?(U=N.alternate,U!==null?(U=U.index,U<z?(N.flags|=67108866,z):U):(N.flags|=67108866,z)):(N.flags|=1048576,z)}function w(N){return n&&N.alternate===null&&(N.flags|=67108866),N}function A(N,z,U,Q){return z===null||z.tag!==6?(z=Bu(U,N.mode,Q),z.return=N,z):(z=p(z,U),z.return=N,z)}function V(N,z,U,Q){var se=U.type;return se===b?X(N,z,U.props.children,Q,U.key):z!==null&&(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&em(se)===z.type)?(z=p(z,U.props),gs(z,U),z.return=N,z):(z=Go(U.type,U.key,U.props,null,N.mode,Q),gs(z,U),z.return=N,z)}function I(N,z,U,Q){return z===null||z.tag!==4||z.stateNode.containerInfo!==U.containerInfo||z.stateNode.implementation!==U.implementation?(z=$u(U,N.mode,Q),z.return=N,z):(z=p(z,U.children||[]),z.return=N,z)}function X(N,z,U,Q,se){return z===null||z.tag!==7?(z=Wi(U,N.mode,Q,se),z.return=N,z):(z=p(z,U),z.return=N,z)}function J(N,z,U){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Bu(""+z,N.mode,U),z.return=N,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case v:return U=Go(z.type,z.key,z.props,null,N.mode,U),gs(U,z),U.return=N,U;case S:return z=$u(z,N.mode,U),z.return=N,z;case _:var Q=z._init;return z=Q(z._payload),J(N,z,U)}if(re(z)||te(z))return z=Wi(z,N.mode,U,null),z.return=N,z;if(typeof z.then=="function")return J(N,ol(z),U);if(z.$$typeof===C)return J(N,Zo(N,z),U);ll(N,z)}return null}function G(N,z,U,Q){var se=z!==null?z.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return se!==null?null:A(N,z,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case v:return U.key===se?V(N,z,U,Q):null;case S:return U.key===se?I(N,z,U,Q):null;case _:return se=U._init,U=se(U._payload),G(N,z,U,Q)}if(re(U)||te(U))return se!==null?null:X(N,z,U,Q,null);if(typeof U.then=="function")return G(N,z,ol(U),Q);if(U.$$typeof===C)return G(N,z,Zo(N,U),Q);ll(N,U)}return null}function q(N,z,U,Q,se){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return N=N.get(U)||null,A(z,N,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return N=N.get(Q.key===null?U:Q.key)||null,V(z,N,Q,se);case S:return N=N.get(Q.key===null?U:Q.key)||null,I(z,N,Q,se);case _:var ve=Q._init;return Q=ve(Q._payload),q(N,z,U,Q,se)}if(re(Q)||te(Q))return N=N.get(U)||null,X(z,N,Q,se,null);if(typeof Q.then=="function")return q(N,z,U,ol(Q),se);if(Q.$$typeof===C)return q(N,z,U,Zo(z,Q),se);ll(z,Q)}return null}function pe(N,z,U,Q){for(var se=null,ve=null,le=z,fe=z=0,ut=null;le!==null&&fe<U.length;fe++){le.index>fe?(ut=le,le=null):ut=le.sibling;var Te=G(N,le,U[fe],Q);if(Te===null){le===null&&(le=ut);break}n&&le&&Te.alternate===null&&a(N,le),z=g(Te,z,fe),ve===null?se=Te:ve.sibling=Te,ve=Te,le=ut}if(fe===U.length)return s(N,le),Ee&&Ji(N,fe),se;if(le===null){for(;fe<U.length;fe++)le=J(N,U[fe],Q),le!==null&&(z=g(le,z,fe),ve===null?se=le:ve.sibling=le,ve=le);return Ee&&Ji(N,fe),se}for(le=c(le);fe<U.length;fe++)ut=q(le,N,fe,U[fe],Q),ut!==null&&(n&&ut.alternate!==null&&le.delete(ut.key===null?fe:ut.key),z=g(ut,z,fe),ve===null?se=ut:ve.sibling=ut,ve=ut);return n&&le.forEach(function(Hi){return a(N,Hi)}),Ee&&Ji(N,fe),se}function ue(N,z,U,Q){if(U==null)throw Error(r(151));for(var se=null,ve=null,le=z,fe=z=0,ut=null,Te=U.next();le!==null&&!Te.done;fe++,Te=U.next()){le.index>fe?(ut=le,le=null):ut=le.sibling;var Hi=G(N,le,Te.value,Q);if(Hi===null){le===null&&(le=ut);break}n&&le&&Hi.alternate===null&&a(N,le),z=g(Hi,z,fe),ve===null?se=Hi:ve.sibling=Hi,ve=Hi,le=ut}if(Te.done)return s(N,le),Ee&&Ji(N,fe),se;if(le===null){for(;!Te.done;fe++,Te=U.next())Te=J(N,Te.value,Q),Te!==null&&(z=g(Te,z,fe),ve===null?se=Te:ve.sibling=Te,ve=Te);return Ee&&Ji(N,fe),se}for(le=c(le);!Te.done;fe++,Te=U.next())Te=q(le,N,fe,Te.value,Q),Te!==null&&(n&&Te.alternate!==null&&le.delete(Te.key===null?fe:Te.key),z=g(Te,z,fe),ve===null?se=Te:ve.sibling=Te,ve=Te);return n&&le.forEach(function(n9){return a(N,n9)}),Ee&&Ji(N,fe),se}function Pe(N,z,U,Q){if(typeof U=="object"&&U!==null&&U.type===b&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case v:e:{for(var se=U.key;z!==null;){if(z.key===se){if(se=U.type,se===b){if(z.tag===7){s(N,z.sibling),Q=p(z,U.props.children),Q.return=N,N=Q;break e}}else if(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&em(se)===z.type){s(N,z.sibling),Q=p(z,U.props),gs(Q,U),Q.return=N,N=Q;break e}s(N,z);break}else a(N,z);z=z.sibling}U.type===b?(Q=Wi(U.props.children,N.mode,Q,U.key),Q.return=N,N=Q):(Q=Go(U.type,U.key,U.props,null,N.mode,Q),gs(Q,U),Q.return=N,N=Q)}return w(N);case S:e:{for(se=U.key;z!==null;){if(z.key===se)if(z.tag===4&&z.stateNode.containerInfo===U.containerInfo&&z.stateNode.implementation===U.implementation){s(N,z.sibling),Q=p(z,U.children||[]),Q.return=N,N=Q;break e}else{s(N,z);break}else a(N,z);z=z.sibling}Q=$u(U,N.mode,Q),Q.return=N,N=Q}return w(N);case _:return se=U._init,U=se(U._payload),Pe(N,z,U,Q)}if(re(U))return pe(N,z,U,Q);if(te(U)){if(se=te(U),typeof se!="function")throw Error(r(150));return U=se.call(U),ue(N,z,U,Q)}if(typeof U.then=="function")return Pe(N,z,ol(U),Q);if(U.$$typeof===C)return Pe(N,z,Zo(N,U),Q);ll(N,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,z!==null&&z.tag===6?(s(N,z.sibling),Q=p(z,U),Q.return=N,N=Q):(s(N,z),Q=Bu(U,N.mode,Q),Q.return=N,N=Q),w(N)):s(N,z)}return function(N,z,U,Q){try{ms=0;var se=Pe(N,z,U,Q);return Fa=null,se}catch(le){if(le===ss||le===Ko)throw le;var ve=$t(29,le,null,N.mode);return ve.lanes=Q,ve.return=N,ve}finally{}}}var Za=tm(!0),nm=tm(!1),rn=Z(null),En=null;function yi(n){var a=n.alternate;ae(rt,rt.current&1),ae(rn,n),En===null&&(a===null||Ia.current!==null||a.memoizedState!==null)&&(En=n)}function im(n){if(n.tag===22){if(ae(rt,rt.current),ae(rn,n),En===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(En=n)}}else vi()}function vi(){ae(rt,rt.current),ae(rn,rn.current)}function Xn(n){ne(rn),En===n&&(En=null),ne(rt)}var rt=Z(0);function cl(n){for(var a=n;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||cf(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function vd(n,a,s,c){a=n.memoizedState,s=s(c,a),s=s==null?a:m({},a,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var wd={enqueueSetState:function(n,a,s){n=n._reactInternals;var c=Gt(),p=mi(c);p.payload=a,s!=null&&(p.callback=s),a=gi(n,p,c),a!==null&&(qt(a,n,c),ls(a,n,c))},enqueueReplaceState:function(n,a,s){n=n._reactInternals;var c=Gt(),p=mi(c);p.tag=1,p.payload=a,s!=null&&(p.callback=s),a=gi(n,p,c),a!==null&&(qt(a,n,c),ls(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var s=Gt(),c=mi(s);c.tag=2,a!=null&&(c.callback=a),a=gi(n,c,s),a!==null&&(qt(a,n,s),ls(a,n,s))}};function am(n,a,s,c,p,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):a.prototype&&a.prototype.isPureReactComponent?!Qr(s,c)||!Qr(p,g):!0}function rm(n,a,s,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,c),a.state!==n&&wd.enqueueReplaceState(a,a.state,null)}function sa(n,a){var s=a;if("ref"in a){s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}if(n=n.defaultProps){s===a&&(s=m({},s));for(var p in n)s[p]===void 0&&(s[p]=n[p])}return s}var ul=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function sm(n){ul(n)}function om(n){console.error(n)}function lm(n){ul(n)}function dl(n,a){try{var s=n.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function cm(n,a,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function bd(n,a,s){return s=mi(s),s.tag=3,s.payload={element:null},s.callback=function(){dl(n,a)},s}function um(n){return n=mi(n),n.tag=3,n}function dm(n,a,s,c){var p=s.type.getDerivedStateFromError;if(typeof p=="function"){var g=c.value;n.payload=function(){return p(g)},n.callback=function(){cm(a,s,c)}}var w=s.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){cm(a,s,c),typeof p!="function"&&(Ei===null?Ei=new Set([this]):Ei.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function n7(n,a,s,c,p){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=s.alternate,a!==null&&is(a,s,p,!0),s=rn.current,s!==null){switch(s.tag){case 13:return En===null?qd():s.alternate===null&&Ze===0&&(Ze=3),s.flags&=-257,s.flags|=65536,s.lanes=p,c===Ku?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([c]):a.add(c),Fd(n,c,p)),!1;case 22:return s.flags|=65536,c===Ku?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([c]):s.add(c)),Fd(n,c,p)),!1}throw Error(r(435,s.tag))}return Fd(n,c,p),qd(),!1}if(Ee)return a=rn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=p,c!==Iu&&(n=Error(r(422),{cause:c}),ns(en(n,s)))):(c!==Iu&&(a=Error(r(423),{cause:c}),ns(en(a,s))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,c=en(c,s),p=bd(n.stateNode,c,p),Ju(n,p),Ze!==4&&(Ze=2)),!1;var g=Error(r(520),{cause:c});if(g=en(g,s),Cs===null?Cs=[g]:Cs.push(g),Ze!==4&&(Ze=2),a===null)return!0;c=en(c,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,n=p&-p,s.lanes|=n,n=bd(s.stateNode,c,n),Ju(s,n),!1;case 1:if(a=s.type,g=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ei===null||!Ei.has(g))))return s.flags|=65536,p&=-p,s.lanes|=p,p=um(p),dm(p,n,s,c),Ju(s,p),!1}s=s.return}while(s!==null);return!1}var fm=Error(r(461)),lt=!1;function pt(n,a,s,c){a.child=n===null?nm(a,null,s,c):Za(a,n.child,s,c)}function pm(n,a,s,c,p){s=s.render;var g=a.ref;if("ref"in c){var w={};for(var A in c)A!=="ref"&&(w[A]=c[A])}else w=c;return ia(a),c=ad(n,a,s,w,g,p),A=rd(),n!==null&&!lt?(sd(n,a,p),Kn(n,a,p)):(Ee&&A&&_u(a),a.flags|=1,pt(n,a,c,p),a.child)}function hm(n,a,s,c,p){if(n===null){var g=s.type;return typeof g=="function"&&!Nu(g)&&g.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=g,mm(n,a,g,c,p)):(n=Go(s.type,null,c,a,a.mode,p),n.ref=a.ref,n.return=a,a.child=n)}if(g=n.child,!Ld(n,p)){var w=g.memoizedProps;if(s=s.compare,s=s!==null?s:Qr,s(w,c)&&n.ref===a.ref)return Kn(n,a,p)}return a.flags|=1,n=In(g,c),n.ref=a.ref,n.return=a,a.child=n}function mm(n,a,s,c,p){if(n!==null){var g=n.memoizedProps;if(Qr(g,c)&&n.ref===a.ref)if(lt=!1,a.pendingProps=c=g,Ld(n,p))(n.flags&131072)!==0&&(lt=!0);else return a.lanes=n.lanes,Kn(n,a,p)}return Sd(n,a,s,c,p)}function gm(n,a,s){var c=a.pendingProps,p=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((a.flags&128)!==0){if(c=g!==null?g.baseLanes|s:s,n!==null){for(p=a.child=n.child,g=0;p!==null;)g=g|p.lanes|p.childLanes,p=p.sibling;a.childLanes=g&~c}else a.childLanes=0,a.child=null;return xm(n,a,c,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Xo(a,g!==null?g.cachePool:null),g!==null?m2(a,g):td(),im(a);else return a.lanes=a.childLanes=536870912,xm(n,a,g!==null?g.baseLanes|s:s,s)}else g!==null?(Xo(a,g.cachePool),m2(a,g),vi(),a.memoizedState=null):(n!==null&&Xo(a,null),td(),vi());return pt(n,a,p,s),a.child}function xm(n,a,s,c){var p=Xu();return p=p===null?null:{parent:at._currentValue,pool:p},a.memoizedState={baseLanes:s,cachePool:p},n!==null&&Xo(a,null),td(),im(a),n!==null&&is(n,a,c,!0),null}function fl(n,a){var s=a.ref;if(s===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(n===null||n.ref!==s)&&(a.flags|=4194816)}}function Sd(n,a,s,c,p){return ia(a),s=ad(n,a,s,c,void 0,p),c=rd(),n!==null&&!lt?(sd(n,a,p),Kn(n,a,p)):(Ee&&c&&_u(a),a.flags|=1,pt(n,a,s,p),a.child)}function ym(n,a,s,c,p,g){return ia(a),a.updateQueue=null,s=x2(a,c,s,p),g2(n),c=rd(),n!==null&&!lt?(sd(n,a,g),Kn(n,a,g)):(Ee&&c&&_u(a),a.flags|=1,pt(n,a,s,g),a.child)}function vm(n,a,s,c,p){if(ia(a),a.stateNode===null){var g=Na,w=s.contextType;typeof w=="object"&&w!==null&&(g=wt(w)),g=new s(c,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=wd,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=c,g.state=a.memoizedState,g.refs={},Wu(a),w=s.contextType,g.context=typeof w=="object"&&w!==null?wt(w):Na,g.state=a.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(vd(a,s,w,c),g.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(w=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),w!==g.state&&wd.enqueueReplaceState(g,g.state,null),us(a,c,g,p),cs(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){g=a.stateNode;var A=a.memoizedProps,V=sa(s,A);g.props=V;var I=g.context,X=s.contextType;w=Na,typeof X=="object"&&X!==null&&(w=wt(X));var J=s.getDerivedStateFromProps;X=typeof J=="function"||typeof g.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,X||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(A||I!==w)&&rm(a,g,c,w),hi=!1;var G=a.memoizedState;g.state=G,us(a,c,g,p),cs(),I=a.memoizedState,A||G!==I||hi?(typeof J=="function"&&(vd(a,s,J,c),I=a.memoizedState),(V=hi||am(a,s,V,c,G,I,w))?(X||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=I),g.props=c,g.state=I,g.context=w,c=V):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{g=a.stateNode,Qu(n,a),w=a.memoizedProps,X=sa(s,w),g.props=X,J=a.pendingProps,G=g.context,I=s.contextType,V=Na,typeof I=="object"&&I!==null&&(V=wt(I)),A=s.getDerivedStateFromProps,(I=typeof A=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==J||G!==V)&&rm(a,g,c,V),hi=!1,G=a.memoizedState,g.state=G,us(a,c,g,p),cs();var q=a.memoizedState;w!==J||G!==q||hi||n!==null&&n.dependencies!==null&&Fo(n.dependencies)?(typeof A=="function"&&(vd(a,s,A,c),q=a.memoizedState),(X=hi||am(a,s,X,c,G,q,V)||n!==null&&n.dependencies!==null&&Fo(n.dependencies))?(I||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,q,V),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,q,V)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===n.memoizedProps&&G===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&G===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=q),g.props=c,g.state=q,g.context=V,c=X):(typeof g.componentDidUpdate!="function"||w===n.memoizedProps&&G===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&G===n.memoizedState||(a.flags|=1024),c=!1)}return g=c,fl(n,a),c=(a.flags&128)!==0,g||c?(g=a.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,n!==null&&c?(a.child=Za(a,n.child,null,p),a.child=Za(a,null,s,p)):pt(n,a,s,p),a.memoizedState=g.state,n=a.child):n=Kn(n,a,p),n}function wm(n,a,s,c){return ts(),a.flags|=256,pt(n,a,s,c),a.child}var Cd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Td(n){return{baseLanes:n,cachePool:o2()}}function Ed(n,a,s){return n=n!==null?n.childLanes&~s:0,a&&(n|=sn),n}function bm(n,a,s){var c=a.pendingProps,p=!1,g=(a.flags&128)!==0,w;if((w=g)||(w=n!==null&&n.memoizedState===null?!1:(rt.current&2)!==0),w&&(p=!0,a.flags&=-129),w=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ee){if(p?yi(a):vi(),Ee){var A=Fe,V;if(V=A){e:{for(V=A,A=Tn;V.nodeType!==8;){if(!A){A=null;break e}if(V=gn(V.nextSibling),V===null){A=null;break e}}A=V}A!==null?(a.memoizedState={dehydrated:A,treeContext:Qi!==null?{id:Gn,overflow:qn}:null,retryLane:536870912,hydrationErrors:null},V=$t(18,null,null,0),V.stateNode=A,V.return=a,a.child=V,Mt=a,Fe=null,V=!0):V=!1}V||ta(a)}if(A=a.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return cf(A)?a.lanes=32:a.lanes=536870912,null;Xn(a)}return A=c.children,c=c.fallback,p?(vi(),p=a.mode,A=pl({mode:"hidden",children:A},p),c=Wi(c,p,s,null),A.return=a,c.return=a,A.sibling=c,a.child=A,p=a.child,p.memoizedState=Td(s),p.childLanes=Ed(n,w,s),a.memoizedState=Cd,c):(yi(a),Md(a,A))}if(V=n.memoizedState,V!==null&&(A=V.dehydrated,A!==null)){if(g)a.flags&256?(yi(a),a.flags&=-257,a=Ad(n,a,s)):a.memoizedState!==null?(vi(),a.child=n.child,a.flags|=128,a=null):(vi(),p=c.fallback,A=a.mode,c=pl({mode:"visible",children:c.children},A),p=Wi(p,A,s,null),p.flags|=2,c.return=a,p.return=a,c.sibling=p,a.child=c,Za(a,n.child,null,s),c=a.child,c.memoizedState=Td(s),c.childLanes=Ed(n,w,s),a.memoizedState=Cd,a=p);else if(yi(a),cf(A)){if(w=A.nextSibling&&A.nextSibling.dataset,w)var I=w.dgst;w=I,c=Error(r(419)),c.stack="",c.digest=w,ns({value:c,source:null,stack:null}),a=Ad(n,a,s)}else if(lt||is(n,a,s,!1),w=(s&n.childLanes)!==0,lt||w){if(w=Be,w!==null&&(c=s&-s,c=(c&42)!==0?1:cu(c),c=(c&(w.suspendedLanes|s))!==0?0:c,c!==0&&c!==V.retryLane))throw V.retryLane=c,Pa(n,c),qt(w,n,c),fm;A.data==="$?"||qd(),a=Ad(n,a,s)}else A.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=V.treeContext,Fe=gn(A.nextSibling),Mt=a,Ee=!0,ea=null,Tn=!1,n!==null&&(nn[an++]=Gn,nn[an++]=qn,nn[an++]=Qi,Gn=n.id,qn=n.overflow,Qi=a),a=Md(a,c.children),a.flags|=4096);return a}return p?(vi(),p=c.fallback,A=a.mode,V=n.child,I=V.sibling,c=In(V,{mode:"hidden",children:c.children}),c.subtreeFlags=V.subtreeFlags&65011712,I!==null?p=In(I,p):(p=Wi(p,A,s,null),p.flags|=2),p.return=a,c.return=a,c.sibling=p,a.child=c,c=p,p=a.child,A=n.child.memoizedState,A===null?A=Td(s):(V=A.cachePool,V!==null?(I=at._currentValue,V=V.parent!==I?{parent:I,pool:I}:V):V=o2(),A={baseLanes:A.baseLanes|s,cachePool:V}),p.memoizedState=A,p.childLanes=Ed(n,w,s),a.memoizedState=Cd,c):(yi(a),s=n.child,n=s.sibling,s=In(s,{mode:"visible",children:c.children}),s.return=a,s.sibling=null,n!==null&&(w=a.deletions,w===null?(a.deletions=[n],a.flags|=16):w.push(n)),a.child=s,a.memoizedState=null,s)}function Md(n,a){return a=pl({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function pl(n,a){return n=$t(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Ad(n,a,s){return Za(a,n.child,null,s),n=Md(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function Sm(n,a,s){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),qu(n.return,a,s)}function jd(n,a,s,c,p){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:p}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=s,g.tailMode=p)}function Cm(n,a,s){var c=a.pendingProps,p=c.revealOrder,g=c.tail;if(pt(n,a,c.children,s),c=rt.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sm(n,s,a);else if(n.tag===19)Sm(n,s,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(ae(rt,c),p){case"forwards":for(s=a.child,p=null;s!==null;)n=s.alternate,n!==null&&cl(n)===null&&(p=s),s=s.sibling;s=p,s===null?(p=a.child,a.child=null):(p=s.sibling,s.sibling=null),jd(a,!1,p,s,g);break;case"backwards":for(s=null,p=a.child,a.child=null;p!==null;){if(n=p.alternate,n!==null&&cl(n)===null){a.child=p;break}n=p.sibling,p.sibling=s,s=p,p=n}jd(a,!0,s,null,g);break;case"together":jd(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Kn(n,a,s){if(n!==null&&(a.dependencies=n.dependencies),Ti|=a.lanes,(s&a.childLanes)===0)if(n!==null){if(is(n,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(r(153));if(a.child!==null){for(n=a.child,s=In(n,n.pendingProps),a.child=s,s.return=a;n.sibling!==null;)n=n.sibling,s=s.sibling=In(n,n.pendingProps),s.return=a;s.sibling=null}return a.child}function Ld(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Fo(n)))}function i7(n,a,s){switch(a.tag){case 3:Oe(a,a.stateNode.containerInfo),pi(a,at,n.memoizedState.cache),ts();break;case 27:case 5:qi(a);break;case 4:Oe(a,a.stateNode.containerInfo);break;case 10:pi(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(yi(a),a.flags|=128,null):(s&a.child.childLanes)!==0?bm(n,a,s):(yi(a),n=Kn(n,a,s),n!==null?n.sibling:null);yi(a);break;case 19:var p=(n.flags&128)!==0;if(c=(s&a.childLanes)!==0,c||(is(n,a,s,!1),c=(s&a.childLanes)!==0),p){if(c)return Cm(n,a,s);a.flags|=128}if(p=a.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ae(rt,rt.current),c)break;return null;case 22:case 23:return a.lanes=0,gm(n,a,s);case 24:pi(a,at,n.memoizedState.cache)}return Kn(n,a,s)}function Tm(n,a,s){if(n!==null)if(n.memoizedProps!==a.pendingProps)lt=!0;else{if(!Ld(n,s)&&(a.flags&128)===0)return lt=!1,i7(n,a,s);lt=(n.flags&131072)!==0}else lt=!1,Ee&&(a.flags&1048576)!==0&&e2(a,Yo,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var c=a.elementType,p=c._init;if(c=p(c._payload),a.type=c,typeof c=="function")Nu(c)?(n=sa(c,n),a.tag=1,a=vm(null,a,c,n,s)):(a.tag=0,a=Sd(null,a,c,n,s));else{if(c!=null){if(p=c.$$typeof,p===D){a.tag=11,a=pm(null,a,c,n,s);break e}else if(p===k){a.tag=14,a=hm(null,a,c,n,s);break e}}throw a=oe(c)||c,Error(r(306,a,""))}}return a;case 0:return Sd(n,a,a.type,a.pendingProps,s);case 1:return c=a.type,p=sa(c,a.pendingProps),vm(n,a,c,p,s);case 3:e:{if(Oe(a,a.stateNode.containerInfo),n===null)throw Error(r(387));c=a.pendingProps;var g=a.memoizedState;p=g.element,Qu(n,a),us(a,c,null,s);var w=a.memoizedState;if(c=w.cache,pi(a,at,c),c!==g.cache&&Yu(a,[at],s,!0),cs(),c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=wm(n,a,c,s);break e}else if(c!==p){p=en(Error(r(424)),a),ns(p),a=wm(n,a,c,s);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Fe=gn(n.firstChild),Mt=a,Ee=!0,ea=null,Tn=!0,s=nm(a,null,c,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ts(),c===p){a=Kn(n,a,s);break e}pt(n,a,c,s)}a=a.child}return a;case 26:return fl(n,a),n===null?(s=jg(a.type,null,a.pendingProps,null))?a.memoizedState=s:Ee||(s=a.type,n=a.pendingProps,c=Al(de.current).createElement(s),c[vt]=a,c[Lt]=n,mt(c,s,n),ot(c),a.stateNode=c):a.memoizedState=jg(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return qi(a),n===null&&Ee&&(c=a.stateNode=Eg(a.type,a.pendingProps,de.current),Mt=a,Tn=!0,p=Fe,ji(a.type)?(uf=p,Fe=gn(c.firstChild)):Fe=p),pt(n,a,a.pendingProps.children,s),fl(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Ee&&((p=c=Fe)&&(c=R7(c,a.type,a.pendingProps,Tn),c!==null?(a.stateNode=c,Mt=a,Fe=gn(c.firstChild),Tn=!1,p=!0):p=!1),p||ta(a)),qi(a),p=a.type,g=a.pendingProps,w=n!==null?n.memoizedProps:null,c=g.children,sf(p,g)?c=null:w!==null&&sf(p,w)&&(a.flags|=32),a.memoizedState!==null&&(p=ad(n,a,X8,null,null,s),Ds._currentValue=p),fl(n,a),pt(n,a,c,s),a.child;case 6:return n===null&&Ee&&((n=s=Fe)&&(s=D7(s,a.pendingProps,Tn),s!==null?(a.stateNode=s,Mt=a,Fe=null,n=!0):n=!1),n||ta(a)),null;case 13:return bm(n,a,s);case 4:return Oe(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=Za(a,null,c,s):pt(n,a,c,s),a.child;case 11:return pm(n,a,a.type,a.pendingProps,s);case 7:return pt(n,a,a.pendingProps,s),a.child;case 8:return pt(n,a,a.pendingProps.children,s),a.child;case 12:return pt(n,a,a.pendingProps.children,s),a.child;case 10:return c=a.pendingProps,pi(a,a.type,c.value),pt(n,a,c.children,s),a.child;case 9:return p=a.type._context,c=a.pendingProps.children,ia(a),p=wt(p),c=c(p),a.flags|=1,pt(n,a,c,s),a.child;case 14:return hm(n,a,a.type,a.pendingProps,s);case 15:return mm(n,a,a.type,a.pendingProps,s);case 19:return Cm(n,a,s);case 31:return c=a.pendingProps,s=a.mode,c={mode:c.mode,children:c.children},n===null?(s=pl(c,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=In(n.child,c),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return gm(n,a,s);case 24:return ia(a),c=wt(at),n===null?(p=Xu(),p===null&&(p=Be,g=Fu(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=s),p=g),a.memoizedState={parent:c,cache:p},Wu(a),pi(a,at,p)):((n.lanes&s)!==0&&(Qu(n,a),us(a,null,null,s),cs()),p=n.memoizedState,g=a.memoizedState,p.parent!==c?(p={parent:c,cache:c},a.memoizedState=p,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=p),pi(a,at,c)):(c=g.cache,pi(a,at,c),c!==p.cache&&Yu(a,[at],s,!0))),pt(n,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function Wn(n){n.flags|=4}function Em(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Hg(a)){if(a=rn.current,a!==null&&((Ce&4194048)===Ce?En!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||a!==En))throw os=Ku,l2;n.flags|=8192}}function hl(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?i1():536870912,n.lanes|=a,Qa|=a)}function xs(n,a){if(!Ee)switch(n.tailMode){case"hidden":a=n.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function qe(n){var a=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(a)for(var p=n.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=s,a}function a7(n,a,s){var c=a.pendingProps;switch(Uu(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(a),null;case 1:return qe(a),null;case 3:return s=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Fn(at),yt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(es(a)?Wn(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,i2())),qe(a),null;case 26:return s=a.memoizedState,n===null?(Wn(a),s!==null?(qe(a),Em(a,s)):(qe(a),a.flags&=-16777217)):s?s!==n.memoizedState?(Wn(a),qe(a),Em(a,s)):(qe(a),a.flags&=-16777217):(n.memoizedProps!==c&&Wn(a),qe(a),a.flags&=-16777217),null;case 27:$n(a),s=de.current;var p=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Wn(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return qe(a),null}n=ce.current,es(a)?t2(a):(n=Eg(p,c,s),a.stateNode=n,Wn(a))}return qe(a),null;case 5:if($n(a),s=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Wn(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return qe(a),null}if(n=ce.current,es(a))t2(a);else{switch(p=Al(de.current),n){case 1:n=p.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=p.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=p.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=p.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=p.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?p.createElement("select",{is:c.is}):p.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?p.createElement(s,{is:c.is}):p.createElement(s)}}n[vt]=a,n[Lt]=c;e:for(p=a.child;p!==null;){if(p.tag===5||p.tag===6)n.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===a)break e;for(;p.sibling===null;){if(p.return===null||p.return===a)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}a.stateNode=n;e:switch(mt(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Wn(a)}}return qe(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&Wn(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(r(166));if(n=de.current,es(a)){if(n=a.stateNode,s=a.memoizedProps,c=null,p=Mt,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}n[vt]=a,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||yg(n.nodeValue,s)),n||ta(a)}else n=Al(n).createTextNode(c),n[vt]=a,a.stateNode=n}return qe(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=es(a),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(r(318));if(p=a.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(r(317));p[vt]=a}else ts(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;qe(a),p=!1}else p=i2(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return a.flags&256?(Xn(a),a):(Xn(a),null)}if(Xn(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=a.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==p&&(c.flags|=2048)}return s!==n&&s&&(a.child.flags|=8192),hl(a,a.updateQueue),qe(a),null;case 4:return yt(),n===null&&ef(a.stateNode.containerInfo),qe(a),null;case 10:return Fn(a.type),qe(a),null;case 19:if(ne(rt),p=a.memoizedState,p===null)return qe(a),null;if(c=(a.flags&128)!==0,g=p.rendering,g===null)if(c)xs(p,!1);else{if(Ze!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(g=cl(n),g!==null){for(a.flags|=128,xs(p,!1),n=g.updateQueue,a.updateQueue=n,hl(a,n),a.subtreeFlags=0,n=s,s=a.child;s!==null;)J1(s,n),s=s.sibling;return ae(rt,rt.current&1|2),a.child}n=n.sibling}p.tail!==null&&Cn()>xl&&(a.flags|=128,c=!0,xs(p,!1),a.lanes=4194304)}else{if(!c)if(n=cl(g),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,hl(a,n),xs(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!Ee)return qe(a),null}else 2*Cn()-p.renderingStartTime>xl&&s!==536870912&&(a.flags|=128,c=!0,xs(p,!1),a.lanes=4194304);p.isBackwards?(g.sibling=a.child,a.child=g):(n=p.last,n!==null?n.sibling=g:a.child=g,p.last=g)}return p.tail!==null?(a=p.tail,p.rendering=a,p.tail=a.sibling,p.renderingStartTime=Cn(),a.sibling=null,n=rt.current,ae(rt,c?n&1|2:n&1),a):(qe(a),null);case 22:case 23:return Xn(a),nd(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(s&536870912)!==0&&(a.flags&128)===0&&(qe(a),a.subtreeFlags&6&&(a.flags|=8192)):qe(a),s=a.updateQueue,s!==null&&hl(a,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==s&&(a.flags|=2048),n!==null&&ne(aa),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Fn(at),qe(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function r7(n,a){switch(Uu(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Fn(at),yt(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return $n(a),null;case 13:if(Xn(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(r(340));ts()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return ne(rt),null;case 4:return yt(),null;case 10:return Fn(a.type),null;case 22:case 23:return Xn(a),nd(),n!==null&&ne(aa),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Fn(at),null;case 25:return null;default:return null}}function Mm(n,a){switch(Uu(a),a.tag){case 3:Fn(at),yt();break;case 26:case 27:case 5:$n(a);break;case 4:yt();break;case 13:Xn(a);break;case 19:ne(rt);break;case 10:Fn(a.type);break;case 22:case 23:Xn(a),nd(),n!==null&&ne(aa);break;case 24:Fn(at)}}function ys(n,a){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var p=c.next;s=p;do{if((s.tag&n)===n){c=void 0;var g=s.create,w=s.inst;c=g(),w.destroy=c}s=s.next}while(s!==p)}}catch(A){Ne(a,a.return,A)}}function wi(n,a,s){try{var c=a.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var g=p.next;c=g;do{if((c.tag&n)===n){var w=c.inst,A=w.destroy;if(A!==void 0){w.destroy=void 0,p=a;var V=s,I=A;try{I()}catch(X){Ne(p,V,X)}}}c=c.next}while(c!==g)}}catch(X){Ne(a,a.return,X)}}function Am(n){var a=n.updateQueue;if(a!==null){var s=n.stateNode;try{h2(a,s)}catch(c){Ne(n,n.return,c)}}}function jm(n,a,s){s.props=sa(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){Ne(n,a,c)}}function vs(n,a){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(p){Ne(n,a,p)}}function Mn(n,a){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(p){Ne(n,a,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(p){Ne(n,a,p)}else s.current=null}function Lm(n){var a=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(p){Ne(n,n.return,p)}}function Od(n,a,s){try{var c=n.stateNode;M7(c,n.type,s,a),c[Lt]=a}catch(p){Ne(n,n.return,p)}}function Om(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ji(n.type)||n.tag===4}function Rd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Om(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ji(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Dd(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(n),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Ml));else if(c!==4&&(c===27&&ji(n.type)&&(s=n.stateNode,a=null),n=n.child,n!==null))for(Dd(n,a,s),n=n.sibling;n!==null;)Dd(n,a,s),n=n.sibling}function ml(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?s.insertBefore(n,a):s.appendChild(n);else if(c!==4&&(c===27&&ji(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(ml(n,a,s),n=n.sibling;n!==null;)ml(n,a,s),n=n.sibling}function Rm(n){var a=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,p=a.attributes;p.length;)a.removeAttributeNode(p[0]);mt(a,c,s),a[vt]=n,a[Lt]=s}catch(g){Ne(n,n.return,g)}}var Qn=!1,We=!1,Hd=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,ct=null;function s7(n,a){if(n=n.containerInfo,af=Hl,n=I1(n),Ru(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var p=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break e}var w=0,A=-1,V=-1,I=0,X=0,J=n,G=null;t:for(;;){for(var q;J!==s||p!==0&&J.nodeType!==3||(A=w+p),J!==g||c!==0&&J.nodeType!==3||(V=w+c),J.nodeType===3&&(w+=J.nodeValue.length),(q=J.firstChild)!==null;)G=J,J=q;for(;;){if(J===n)break t;if(G===s&&++I===p&&(A=w),G===g&&++X===c&&(V=w),(q=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=q}s=A===-1||V===-1?null:{start:A,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(rf={focusedElem:n,selectionRange:s},Hl=!1,ct=a;ct!==null;)if(a=ct,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,ct=n;else for(;ct!==null;){switch(a=ct,g=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,s=a,p=g.memoizedProps,g=g.memoizedState,c=s.stateNode;try{var pe=sa(s.type,p,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(pe,g),c.__reactInternalSnapshotBeforeUpdate=n}catch(ue){Ne(s,s.return,ue)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,s=n.nodeType,s===9)lf(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":lf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=a.sibling,n!==null){n.return=a.return,ct=n;break}ct=a.return}}function Hm(n,a,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:bi(n,s),c&4&&ys(5,s);break;case 1:if(bi(n,s),c&4)if(n=s.stateNode,a===null)try{n.componentDidMount()}catch(w){Ne(s,s.return,w)}else{var p=sa(s.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(p,a,n.__reactInternalSnapshotBeforeUpdate)}catch(w){Ne(s,s.return,w)}}c&64&&Am(s),c&512&&vs(s,s.return);break;case 3:if(bi(n,s),c&64&&(n=s.updateQueue,n!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{h2(n,a)}catch(w){Ne(s,s.return,w)}}break;case 27:a===null&&c&4&&Rm(s);case 26:case 5:bi(n,s),a===null&&c&4&&Lm(s),c&512&&vs(s,s.return);break;case 12:bi(n,s);break;case 13:bi(n,s),c&4&&zm(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=m7.bind(null,s),H7(n,s))));break;case 22:if(c=s.memoizedState!==null||Qn,!c){a=a!==null&&a.memoizedState!==null||We,p=Qn;var g=We;Qn=c,(We=a)&&!g?Si(n,s,(s.subtreeFlags&8772)!==0):bi(n,s),Qn=p,We=g}break;case 30:break;default:bi(n,s)}}function Vm(n){var a=n.alternate;a!==null&&(n.alternate=null,Vm(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&fu(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Ue=null,Dt=!1;function Jn(n,a,s){for(s=s.child;s!==null;)km(n,a,s),s=s.sibling}function km(n,a,s){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount($r,s)}catch{}switch(s.tag){case 26:We||Mn(s,a),Jn(n,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:We||Mn(s,a);var c=Ue,p=Dt;ji(s.type)&&(Ue=s.stateNode,Dt=!1),Jn(n,a,s),js(s.stateNode),Ue=c,Dt=p;break;case 5:We||Mn(s,a);case 6:if(c=Ue,p=Dt,Ue=null,Jn(n,a,s),Ue=c,Dt=p,Ue!==null)if(Dt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(s.stateNode)}catch(g){Ne(s,a,g)}else try{Ue.removeChild(s.stateNode)}catch(g){Ne(s,a,g)}break;case 18:Ue!==null&&(Dt?(n=Ue,Cg(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),zs(n)):Cg(Ue,s.stateNode));break;case 4:c=Ue,p=Dt,Ue=s.stateNode.containerInfo,Dt=!0,Jn(n,a,s),Ue=c,Dt=p;break;case 0:case 11:case 14:case 15:We||wi(2,s,a),We||wi(4,s,a),Jn(n,a,s);break;case 1:We||(Mn(s,a),c=s.stateNode,typeof c.componentWillUnmount=="function"&&jm(s,a,c)),Jn(n,a,s);break;case 21:Jn(n,a,s);break;case 22:We=(c=We)||s.memoizedState!==null,Jn(n,a,s),We=c;break;default:Jn(n,a,s)}}function zm(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{zs(n)}catch(s){Ne(a,a.return,s)}}function o7(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Dm),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Dm),a;default:throw Error(r(435,n.tag))}}function Vd(n,a){var s=o7(n);a.forEach(function(c){var p=g7.bind(null,n,c);s.has(c)||(s.add(c),c.then(p,p))})}function _t(n,a){var s=a.deletions;if(s!==null)for(var c=0;c<s.length;c++){var p=s[c],g=n,w=a,A=w;e:for(;A!==null;){switch(A.tag){case 27:if(ji(A.type)){Ue=A.stateNode,Dt=!1;break e}break;case 5:Ue=A.stateNode,Dt=!1;break e;case 3:case 4:Ue=A.stateNode.containerInfo,Dt=!0;break e}A=A.return}if(Ue===null)throw Error(r(160));km(g,w,p),Ue=null,Dt=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Pm(a,n),a=a.sibling}var mn=null;function Pm(n,a){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:_t(a,n),Ut(n),c&4&&(wi(3,n,n.return),ys(3,n),wi(5,n,n.return));break;case 1:_t(a,n),Ut(n),c&512&&(We||s===null||Mn(s,s.return)),c&64&&Qn&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var p=mn;if(_t(a,n),Ut(n),c&512&&(We||s===null||Mn(s,s.return)),c&4){var g=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":g=p.getElementsByTagName("title")[0],(!g||g[Ir]||g[vt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(c),p.head.insertBefore(g,p.querySelector("head > title"))),mt(g,c,s),g[vt]=n,ot(g),c=g;break e;case"link":var w=Rg("link","href",p).get(c+(s.href||""));if(w){for(var A=0;A<w.length;A++)if(g=w[A],g.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&g.getAttribute("rel")===(s.rel==null?null:s.rel)&&g.getAttribute("title")===(s.title==null?null:s.title)&&g.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){w.splice(A,1);break t}}g=p.createElement(c),mt(g,c,s),p.head.appendChild(g);break;case"meta":if(w=Rg("meta","content",p).get(c+(s.content||""))){for(A=0;A<w.length;A++)if(g=w[A],g.getAttribute("content")===(s.content==null?null:""+s.content)&&g.getAttribute("name")===(s.name==null?null:s.name)&&g.getAttribute("property")===(s.property==null?null:s.property)&&g.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&g.getAttribute("charset")===(s.charSet==null?null:s.charSet)){w.splice(A,1);break t}}g=p.createElement(c),mt(g,c,s),p.head.appendChild(g);break;default:throw Error(r(468,c))}g[vt]=n,ot(g),c=g}n.stateNode=c}else Dg(p,n.type,n.stateNode);else n.stateNode=Og(p,c,n.memoizedProps);else g!==c?(g===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):g.count--,c===null?Dg(p,n.type,n.stateNode):Og(p,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Od(n,n.memoizedProps,s.memoizedProps)}break;case 27:_t(a,n),Ut(n),c&512&&(We||s===null||Mn(s,s.return)),s!==null&&c&4&&Od(n,n.memoizedProps,s.memoizedProps);break;case 5:if(_t(a,n),Ut(n),c&512&&(We||s===null||Mn(s,s.return)),n.flags&32){p=n.stateNode;try{Oa(p,"")}catch(q){Ne(n,n.return,q)}}c&4&&n.stateNode!=null&&(p=n.memoizedProps,Od(n,p,s!==null?s.memoizedProps:p)),c&1024&&(Hd=!0);break;case 6:if(_t(a,n),Ut(n),c&4){if(n.stateNode===null)throw Error(r(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(q){Ne(n,n.return,q)}}break;case 3:if(Ol=null,p=mn,mn=jl(a.containerInfo),_t(a,n),mn=p,Ut(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{zs(a.containerInfo)}catch(q){Ne(n,n.return,q)}Hd&&(Hd=!1,Nm(n));break;case 4:c=mn,mn=jl(n.stateNode.containerInfo),_t(a,n),Ut(n),mn=c;break;case 12:_t(a,n),Ut(n);break;case 13:_t(a,n),Ut(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&($d=Cn()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Vd(n,c)));break;case 22:p=n.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,I=Qn,X=We;if(Qn=I||p,We=X||V,_t(a,n),We=X,Qn=I,Ut(n),c&8192)e:for(a=n.stateNode,a._visibility=p?a._visibility&-2:a._visibility|1,p&&(s===null||V||Qn||We||oa(n)),s=null,a=n;;){if(a.tag===5||a.tag===26){if(s===null){V=s=a;try{if(g=V.stateNode,p)w=g.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{A=V.stateNode;var J=V.memoizedProps.style,G=J!=null&&J.hasOwnProperty("display")?J.display:null;A.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(q){Ne(V,V.return,q)}}}else if(a.tag===6){if(s===null){V=a;try{V.stateNode.nodeValue=p?"":V.memoizedProps}catch(q){Ne(V,V.return,q)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Vd(n,s))));break;case 19:_t(a,n),Ut(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Vd(n,c)));break;case 30:break;case 21:break;default:_t(a,n),Ut(n)}}function Ut(n){var a=n.flags;if(a&2){try{for(var s,c=n.return;c!==null;){if(Om(c)){s=c;break}c=c.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var p=s.stateNode,g=Rd(n);ml(n,g,p);break;case 5:var w=s.stateNode;s.flags&32&&(Oa(w,""),s.flags&=-33);var A=Rd(n);ml(n,A,w);break;case 3:case 4:var V=s.stateNode.containerInfo,I=Rd(n);Dd(n,I,V);break;default:throw Error(r(161))}}catch(X){Ne(n,n.return,X)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function Nm(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;Nm(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function bi(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Hm(n,a.alternate,a),a=a.sibling}function oa(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:wi(4,a,a.return),oa(a);break;case 1:Mn(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&jm(a,a.return,s),oa(a);break;case 27:js(a.stateNode);case 26:case 5:Mn(a,a.return),oa(a);break;case 22:a.memoizedState===null&&oa(a);break;case 30:oa(a);break;default:oa(a)}n=n.sibling}}function Si(n,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,p=n,g=a,w=g.flags;switch(g.tag){case 0:case 11:case 15:Si(p,g,s),ys(4,g);break;case 1:if(Si(p,g,s),c=g,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(I){Ne(c,c.return,I)}if(c=g,p=c.updateQueue,p!==null){var A=c.stateNode;try{var V=p.shared.hiddenCallbacks;if(V!==null)for(p.shared.hiddenCallbacks=null,p=0;p<V.length;p++)p2(V[p],A)}catch(I){Ne(c,c.return,I)}}s&&w&64&&Am(g),vs(g,g.return);break;case 27:Rm(g);case 26:case 5:Si(p,g,s),s&&c===null&&w&4&&Lm(g),vs(g,g.return);break;case 12:Si(p,g,s);break;case 13:Si(p,g,s),s&&w&4&&zm(p,g);break;case 22:g.memoizedState===null&&Si(p,g,s),vs(g,g.return);break;case 30:break;default:Si(p,g,s)}a=a.sibling}}function kd(n,a){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&as(s))}function zd(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&as(n))}function An(n,a,s,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Bm(n,a,s,c),a=a.sibling}function Bm(n,a,s,c){var p=a.flags;switch(a.tag){case 0:case 11:case 15:An(n,a,s,c),p&2048&&ys(9,a);break;case 1:An(n,a,s,c);break;case 3:An(n,a,s,c),p&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&as(n)));break;case 12:if(p&2048){An(n,a,s,c),n=a.stateNode;try{var g=a.memoizedProps,w=g.id,A=g.onPostCommit;typeof A=="function"&&A(w,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(V){Ne(a,a.return,V)}}else An(n,a,s,c);break;case 13:An(n,a,s,c);break;case 23:break;case 22:g=a.stateNode,w=a.alternate,a.memoizedState!==null?g._visibility&2?An(n,a,s,c):ws(n,a):g._visibility&2?An(n,a,s,c):(g._visibility|=2,Xa(n,a,s,c,(a.subtreeFlags&10256)!==0)),p&2048&&kd(w,a);break;case 24:An(n,a,s,c),p&2048&&zd(a.alternate,a);break;default:An(n,a,s,c)}}function Xa(n,a,s,c,p){for(p=p&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=n,w=a,A=s,V=c,I=w.flags;switch(w.tag){case 0:case 11:case 15:Xa(g,w,A,V,p),ys(8,w);break;case 23:break;case 22:var X=w.stateNode;w.memoizedState!==null?X._visibility&2?Xa(g,w,A,V,p):ws(g,w):(X._visibility|=2,Xa(g,w,A,V,p)),p&&I&2048&&kd(w.alternate,w);break;case 24:Xa(g,w,A,V,p),p&&I&2048&&zd(w.alternate,w);break;default:Xa(g,w,A,V,p)}a=a.sibling}}function ws(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=n,c=a,p=c.flags;switch(c.tag){case 22:ws(s,c),p&2048&&kd(c.alternate,c);break;case 24:ws(s,c),p&2048&&zd(c.alternate,c);break;default:ws(s,c)}a=a.sibling}}var bs=8192;function Ka(n){if(n.subtreeFlags&bs)for(n=n.child;n!==null;)$m(n),n=n.sibling}function $m(n){switch(n.tag){case 26:Ka(n),n.flags&bs&&n.memoizedState!==null&&Y7(mn,n.memoizedState,n.memoizedProps);break;case 5:Ka(n);break;case 3:case 4:var a=mn;mn=jl(n.stateNode.containerInfo),Ka(n),mn=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=bs,bs=16777216,Ka(n),bs=a):Ka(n));break;default:Ka(n)}}function _m(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Ss(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];ct=c,Im(c,n)}_m(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Um(n),n=n.sibling}function Um(n){switch(n.tag){case 0:case 11:case 15:Ss(n),n.flags&2048&&wi(9,n,n.return);break;case 3:Ss(n);break;case 12:Ss(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,gl(n)):Ss(n);break;default:Ss(n)}}function gl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];ct=c,Im(c,n)}_m(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:wi(8,a,a.return),gl(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,gl(a));break;default:gl(a)}n=n.sibling}}function Im(n,a){for(;ct!==null;){var s=ct;switch(s.tag){case 0:case 11:case 15:wi(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:as(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,ct=c;else e:for(s=n;ct!==null;){c=ct;var p=c.sibling,g=c.return;if(Vm(c),c===s){ct=null;break e}if(p!==null){p.return=g,ct=p;break e}ct=g}}}var l7={getCacheForType:function(n){var a=wt(at),s=a.data.get(n);return s===void 0&&(s=n(),a.data.set(n,s)),s}},c7=typeof WeakMap=="function"?WeakMap:Map,He=0,Be=null,be=null,Ce=0,Ve=0,It=null,Ci=!1,Wa=!1,Pd=!1,ei=0,Ze=0,Ti=0,la=0,Nd=0,sn=0,Qa=0,Cs=null,Ht=null,Bd=!1,$d=0,xl=1/0,yl=null,Ei=null,ht=0,Mi=null,Ja=null,er=0,_d=0,Ud=null,Gm=null,Ts=0,Id=null;function Gt(){if((He&2)!==0&&Ce!==0)return Ce&-Ce;if(B.T!==null){var n=_a;return n!==0?n:Kd()}return s1()}function qm(){sn===0&&(sn=(Ce&536870912)===0||Ee?n1():536870912);var n=rn.current;return n!==null&&(n.flags|=32),sn}function qt(n,a,s){(n===Be&&(Ve===2||Ve===9)||n.cancelPendingCommit!==null)&&(tr(n,0),Ai(n,Ce,sn,!1)),Ur(n,s),((He&2)===0||n!==Be)&&(n===Be&&((He&2)===0&&(la|=s),Ze===4&&Ai(n,Ce,sn,!1)),jn(n))}function Ym(n,a,s){if((He&6)!==0)throw Error(r(327));var c=!s&&(a&124)===0&&(a&n.expiredLanes)===0||_r(n,a),p=c?f7(n,a):Yd(n,a,!0),g=c;do{if(p===0){Wa&&!c&&Ai(n,a,0,!1);break}else{if(s=n.current.alternate,g&&!u7(s)){p=Yd(n,a,!1),g=!1;continue}if(p===2){if(g=a,n.errorRecoveryDisabledLanes&g)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){a=w;e:{var A=n;p=Cs;var V=A.current.memoizedState.isDehydrated;if(V&&(tr(A,w).flags|=256),w=Yd(A,w,!1),w!==2){if(Pd&&!V){A.errorRecoveryDisabledLanes|=g,la|=g,p=4;break e}g=Ht,Ht=p,g!==null&&(Ht===null?Ht=g:Ht.push.apply(Ht,g))}p=w}if(g=!1,p!==2)continue}}if(p===1){tr(n,0),Ai(n,a,0,!0);break}e:{switch(c=n,g=p,g){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:Ai(c,a,sn,!Ci);break e;case 2:Ht=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(p=$d+300-Cn(),10<p)){if(Ai(c,a,sn,!Ci),Lo(c,0,!0)!==0)break e;c.timeoutHandle=bg(Fm.bind(null,c,s,Ht,yl,Bd,a,sn,la,Qa,Ci,g,2,-0,0),p);break e}Fm(c,s,Ht,yl,Bd,a,sn,la,Qa,Ci,g,0,-0,0)}}break}while(!0);jn(n)}function Fm(n,a,s,c,p,g,w,A,V,I,X,J,G,q){if(n.timeoutHandle=-1,J=a.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Rs={stylesheets:null,count:0,unsuspend:q7},$m(a),J=F7(),J!==null)){n.cancelPendingCommit=J(eg.bind(null,n,a,g,s,c,p,w,A,V,X,1,G,q)),Ai(n,g,w,!I);return}eg(n,a,g,s,c,p,w,A,V)}function u7(n){for(var a=n;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var p=s[c],g=p.getSnapshot;p=p.value;try{if(!Bt(g(),p))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ai(n,a,s,c){a&=~Nd,a&=~la,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var p=a;0<p;){var g=31-Nt(p),w=1<<g;c[g]=-1,p&=~w}s!==0&&a1(n,s,a)}function vl(){return(He&6)===0?(Es(0),!1):!0}function Gd(){if(be!==null){if(Ve===0)var n=be.return;else n=be,Yn=na=null,od(n),Fa=null,ms=0,n=be;for(;n!==null;)Mm(n.alternate,n),n=n.return;be=null}}function tr(n,a){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,j7(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Gd(),Be=n,be=s=In(n.current,null),Ce=a,Ve=0,It=null,Ci=!1,Wa=_r(n,a),Pd=!1,Qa=sn=Nd=la=Ti=Ze=0,Ht=Cs=null,Bd=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var p=31-Nt(c),g=1<<p;a|=n[p],c&=~g}return ei=a,_o(),s}function Zm(n,a){ye=null,B.H=sl,a===ss||a===Ko?(a=d2(),Ve=3):a===l2?(a=d2(),Ve=4):Ve=a===fm?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,It=a,be===null&&(Ze=1,dl(n,en(a,n.current)))}function Xm(){var n=B.H;return B.H=sl,n===null?sl:n}function Km(){var n=B.A;return B.A=l7,n}function qd(){Ze=4,Ci||(Ce&4194048)!==Ce&&rn.current!==null||(Wa=!0),(Ti&134217727)===0&&(la&134217727)===0||Be===null||Ai(Be,Ce,sn,!1)}function Yd(n,a,s){var c=He;He|=2;var p=Xm(),g=Km();(Be!==n||Ce!==a)&&(yl=null,tr(n,a)),a=!1;var w=Ze;e:do try{if(Ve!==0&&be!==null){var A=be,V=It;switch(Ve){case 8:Gd(),w=6;break e;case 3:case 2:case 9:case 6:rn.current===null&&(a=!0);var I=Ve;if(Ve=0,It=null,nr(n,A,V,I),s&&Wa){w=0;break e}break;default:I=Ve,Ve=0,It=null,nr(n,A,V,I)}}d7(),w=Ze;break}catch(X){Zm(n,X)}while(!0);return a&&n.shellSuspendCounter++,Yn=na=null,He=c,B.H=p,B.A=g,be===null&&(Be=null,Ce=0,_o()),w}function d7(){for(;be!==null;)Wm(be)}function f7(n,a){var s=He;He|=2;var c=Xm(),p=Km();Be!==n||Ce!==a?(yl=null,xl=Cn()+500,tr(n,a)):Wa=_r(n,a);e:do try{if(Ve!==0&&be!==null){a=be;var g=It;t:switch(Ve){case 1:Ve=0,It=null,nr(n,a,g,1);break;case 2:case 9:if(c2(g)){Ve=0,It=null,Qm(a);break}a=function(){Ve!==2&&Ve!==9||Be!==n||(Ve=7),jn(n)},g.then(a,a);break e;case 3:Ve=7;break e;case 4:Ve=5;break e;case 7:c2(g)?(Ve=0,It=null,Qm(a)):(Ve=0,It=null,nr(n,a,g,7));break;case 5:var w=null;switch(be.tag){case 26:w=be.memoizedState;case 5:case 27:var A=be;if(!w||Hg(w)){Ve=0,It=null;var V=A.sibling;if(V!==null)be=V;else{var I=A.return;I!==null?(be=I,wl(I)):be=null}break t}}Ve=0,It=null,nr(n,a,g,5);break;case 6:Ve=0,It=null,nr(n,a,g,6);break;case 8:Gd(),Ze=6;break e;default:throw Error(r(462))}}p7();break}catch(X){Zm(n,X)}while(!0);return Yn=na=null,B.H=c,B.A=p,He=s,be!==null?0:(Be=null,Ce=0,_o(),Ze)}function p7(){for(;be!==null&&!kv();)Wm(be)}function Wm(n){var a=Tm(n.alternate,n,ei);n.memoizedProps=n.pendingProps,a===null?wl(n):be=a}function Qm(n){var a=n,s=a.alternate;switch(a.tag){case 15:case 0:a=ym(s,a,a.pendingProps,a.type,void 0,Ce);break;case 11:a=ym(s,a,a.pendingProps,a.type.render,a.ref,Ce);break;case 5:od(a);default:Mm(s,a),a=be=J1(a,ei),a=Tm(s,a,ei)}n.memoizedProps=n.pendingProps,a===null?wl(n):be=a}function nr(n,a,s,c){Yn=na=null,od(a),Fa=null,ms=0;var p=a.return;try{if(n7(n,p,a,s,Ce)){Ze=1,dl(n,en(s,n.current)),be=null;return}}catch(g){if(p!==null)throw be=p,g;Ze=1,dl(n,en(s,n.current)),be=null;return}a.flags&32768?(Ee||c===1?n=!0:Wa||(Ce&536870912)!==0?n=!1:(Ci=n=!0,(c===2||c===9||c===3||c===6)&&(c=rn.current,c!==null&&c.tag===13&&(c.flags|=16384))),Jm(a,n)):wl(a)}function wl(n){var a=n;do{if((a.flags&32768)!==0){Jm(a,Ci);return}n=a.return;var s=a7(a.alternate,a,ei);if(s!==null){be=s;return}if(a=a.sibling,a!==null){be=a;return}be=a=n}while(a!==null);Ze===0&&(Ze=5)}function Jm(n,a){do{var s=r7(n.alternate,n);if(s!==null){s.flags&=32767,be=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(n=n.sibling,n!==null)){be=n;return}be=n=s}while(n!==null);Ze=6,be=null}function eg(n,a,s,c,p,g,w,A,V){n.cancelPendingCommit=null;do bl();while(ht!==0);if((He&6)!==0)throw Error(r(327));if(a!==null){if(a===n.current)throw Error(r(177));if(g=a.lanes|a.childLanes,g|=zu,qv(n,s,g,w,A,V),n===Be&&(be=Be=null,Ce=0),Ja=a,Mi=n,er=s,_d=g,Ud=p,Gm=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,x7(Mo,function(){return rg(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,p=K.p,K.p=2,w=He,He|=4;try{s7(n,a,s)}finally{He=w,K.p=p,B.T=c}}ht=1,tg(),ng(),ig()}}function tg(){if(ht===1){ht=0;var n=Mi,a=Ja,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var c=K.p;K.p=2;var p=He;He|=4;try{Pm(a,n);var g=rf,w=I1(n.containerInfo),A=g.focusedElem,V=g.selectionRange;if(w!==A&&A&&A.ownerDocument&&U1(A.ownerDocument.documentElement,A)){if(V!==null&&Ru(A)){var I=V.start,X=V.end;if(X===void 0&&(X=I),"selectionStart"in A)A.selectionStart=I,A.selectionEnd=Math.min(X,A.value.length);else{var J=A.ownerDocument||document,G=J&&J.defaultView||window;if(G.getSelection){var q=G.getSelection(),pe=A.textContent.length,ue=Math.min(V.start,pe),Pe=V.end===void 0?ue:Math.min(V.end,pe);!q.extend&&ue>Pe&&(w=Pe,Pe=ue,ue=w);var N=_1(A,ue),z=_1(A,Pe);if(N&&z&&(q.rangeCount!==1||q.anchorNode!==N.node||q.anchorOffset!==N.offset||q.focusNode!==z.node||q.focusOffset!==z.offset)){var U=J.createRange();U.setStart(N.node,N.offset),q.removeAllRanges(),ue>Pe?(q.addRange(U),q.extend(z.node,z.offset)):(U.setEnd(z.node,z.offset),q.addRange(U))}}}}for(J=[],q=A;q=q.parentNode;)q.nodeType===1&&J.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<J.length;A++){var Q=J[A];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Hl=!!af,rf=af=null}finally{He=p,K.p=c,B.T=s}}n.current=a,ht=2}}function ng(){if(ht===2){ht=0;var n=Mi,a=Ja,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var c=K.p;K.p=2;var p=He;He|=4;try{Hm(n,a.alternate,a)}finally{He=p,K.p=c,B.T=s}}ht=3}}function ig(){if(ht===4||ht===3){ht=0,zv();var n=Mi,a=Ja,s=er,c=Gm;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ht=5:(ht=0,Ja=Mi=null,ag(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(Ei=null),uu(s),a=a.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot($r,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=B.T,p=K.p,K.p=2,B.T=null;try{for(var g=n.onRecoverableError,w=0;w<c.length;w++){var A=c[w];g(A.value,{componentStack:A.stack})}}finally{B.T=a,K.p=p}}(er&3)!==0&&bl(),jn(n),p=n.pendingLanes,(s&4194090)!==0&&(p&42)!==0?n===Id?Ts++:(Ts=0,Id=n):Ts=0,Es(0)}}function ag(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,as(a)))}function bl(n){return tg(),ng(),ig(),rg()}function rg(){if(ht!==5)return!1;var n=Mi,a=_d;_d=0;var s=uu(er),c=B.T,p=K.p;try{K.p=32>s?32:s,B.T=null,s=Ud,Ud=null;var g=Mi,w=er;if(ht=0,Ja=Mi=null,er=0,(He&6)!==0)throw Error(r(331));var A=He;if(He|=4,Um(g.current),Bm(g,g.current,w,s),He=A,Es(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot($r,g)}catch{}return!0}finally{K.p=p,B.T=c,ag(n,a)}}function sg(n,a,s){a=en(s,a),a=bd(n.stateNode,a,2),n=gi(n,a,2),n!==null&&(Ur(n,2),jn(n))}function Ne(n,a,s){if(n.tag===3)sg(n,n,s);else for(;a!==null;){if(a.tag===3){sg(a,n,s);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ei===null||!Ei.has(c))){n=en(s,n),s=um(2),c=gi(a,s,2),c!==null&&(dm(s,c,a,n),Ur(c,2),jn(c));break}}a=a.return}}function Fd(n,a,s){var c=n.pingCache;if(c===null){c=n.pingCache=new c7;var p=new Set;c.set(a,p)}else p=c.get(a),p===void 0&&(p=new Set,c.set(a,p));p.has(s)||(Pd=!0,p.add(s),n=h7.bind(null,n,a,s),a.then(n,n))}function h7(n,a,s){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Be===n&&(Ce&s)===s&&(Ze===4||Ze===3&&(Ce&62914560)===Ce&&300>Cn()-$d?(He&2)===0&&tr(n,0):Nd|=s,Qa===Ce&&(Qa=0)),jn(n)}function og(n,a){a===0&&(a=i1()),n=Pa(n,a),n!==null&&(Ur(n,a),jn(n))}function m7(n){var a=n.memoizedState,s=0;a!==null&&(s=a.retryLane),og(n,s)}function g7(n,a){var s=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(s=p.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(a),og(n,s)}function x7(n,a){return su(n,a)}var Sl=null,ir=null,Zd=!1,Cl=!1,Xd=!1,ca=0;function jn(n){n!==ir&&n.next===null&&(ir===null?Sl=ir=n:ir=ir.next=n),Cl=!0,Zd||(Zd=!0,v7())}function Es(n,a){if(!Xd&&Cl){Xd=!0;do for(var s=!1,c=Sl;c!==null;){if(n!==0){var p=c.pendingLanes;if(p===0)var g=0;else{var w=c.suspendedLanes,A=c.pingedLanes;g=(1<<31-Nt(42|n)+1)-1,g&=p&~(w&~A),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(s=!0,dg(c,g))}else g=Ce,g=Lo(c,c===Be?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||_r(c,g)||(s=!0,dg(c,g));c=c.next}while(s);Xd=!1}}function y7(){lg()}function lg(){Cl=Zd=!1;var n=0;ca!==0&&(A7()&&(n=ca),ca=0);for(var a=Cn(),s=null,c=Sl;c!==null;){var p=c.next,g=cg(c,a);g===0?(c.next=null,s===null?Sl=p:s.next=p,p===null&&(ir=s)):(s=c,(n!==0||(g&3)!==0)&&(Cl=!0)),c=p}Es(n)}function cg(n,a){for(var s=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var w=31-Nt(g),A=1<<w,V=p[w];V===-1?((A&s)===0||(A&c)!==0)&&(p[w]=Gv(A,a)):V<=a&&(n.expiredLanes|=A),g&=~A}if(a=Be,s=Ce,s=Lo(n,n===a?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===a&&(Ve===2||Ve===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&ou(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||_r(n,s)){if(a=s&-s,a===n.callbackPriority)return a;switch(c!==null&&ou(c),uu(s)){case 2:case 8:s=e1;break;case 32:s=Mo;break;case 268435456:s=t1;break;default:s=Mo}return c=ug.bind(null,n),s=su(s,c),n.callbackPriority=a,n.callbackNode=s,a}return c!==null&&c!==null&&ou(c),n.callbackPriority=2,n.callbackNode=null,2}function ug(n,a){if(ht!==0&&ht!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(bl()&&n.callbackNode!==s)return null;var c=Ce;return c=Lo(n,n===Be?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(Ym(n,c,a),cg(n,Cn()),n.callbackNode!=null&&n.callbackNode===s?ug.bind(null,n):null)}function dg(n,a){if(bl())return null;Ym(n,a,!0)}function v7(){L7(function(){(He&6)!==0?su(Jh,y7):lg()})}function Kd(){return ca===0&&(ca=n1()),ca}function fg(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Vo(""+n)}function pg(n,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,n.id&&s.setAttribute("form",n.id),a.parentNode.insertBefore(s,a),n=new FormData(n),s.parentNode.removeChild(s),n}function w7(n,a,s,c,p){if(a==="submit"&&s&&s.stateNode===p){var g=fg((p[Lt]||null).action),w=c.submitter;w&&(a=(a=w[Lt]||null)?fg(a.formAction):w.getAttribute("formAction"),a!==null&&(g=a,w=null));var A=new No("action","action",null,c,p);n.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ca!==0){var V=w?pg(p,w):new FormData(p);gd(s,{pending:!0,data:V,method:p.method,action:g},null,V)}}else typeof g=="function"&&(A.preventDefault(),V=w?pg(p,w):new FormData(p),gd(s,{pending:!0,data:V,method:p.method,action:g},g,V))},currentTarget:p}]})}}for(var Wd=0;Wd<ku.length;Wd++){var Qd=ku[Wd],b7=Qd.toLowerCase(),S7=Qd[0].toUpperCase()+Qd.slice(1);hn(b7,"on"+S7)}hn(Y1,"onAnimationEnd"),hn(F1,"onAnimationIteration"),hn(Z1,"onAnimationStart"),hn("dblclick","onDoubleClick"),hn("focusin","onFocus"),hn("focusout","onBlur"),hn(B8,"onTransitionRun"),hn($8,"onTransitionStart"),hn(_8,"onTransitionCancel"),hn(X1,"onTransitionEnd"),Aa("onMouseEnter",["mouseout","mouseover"]),Aa("onMouseLeave",["mouseout","mouseover"]),Aa("onPointerEnter",["pointerout","pointerover"]),Aa("onPointerLeave",["pointerout","pointerover"]),Fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C7=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ms));function hg(n,a){a=(a&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],p=c.event;c=c.listeners;e:{var g=void 0;if(a)for(var w=c.length-1;0<=w;w--){var A=c[w],V=A.instance,I=A.currentTarget;if(A=A.listener,V!==g&&p.isPropagationStopped())break e;g=A,p.currentTarget=I;try{g(p)}catch(X){ul(X)}p.currentTarget=null,g=V}else for(w=0;w<c.length;w++){if(A=c[w],V=A.instance,I=A.currentTarget,A=A.listener,V!==g&&p.isPropagationStopped())break e;g=A,p.currentTarget=I;try{g(p)}catch(X){ul(X)}p.currentTarget=null,g=V}}}}function Se(n,a){var s=a[du];s===void 0&&(s=a[du]=new Set);var c=n+"__bubble";s.has(c)||(mg(a,n,2,!1),s.add(c))}function Jd(n,a,s){var c=0;a&&(c|=4),mg(s,n,c,a)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function ef(n){if(!n[Tl]){n[Tl]=!0,l1.forEach(function(s){s!=="selectionchange"&&(C7.has(s)||Jd(s,!1,n),Jd(s,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Tl]||(a[Tl]=!0,Jd("selectionchange",!1,a))}}function mg(n,a,s,c){switch(Bg(a)){case 2:var p=K7;break;case 8:p=W7;break;default:p=mf}s=p.bind(null,a,s,n),p=void 0,!Su||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(a,s,{capture:!0,passive:p}):n.addEventListener(a,s,!0):p!==void 0?n.addEventListener(a,s,{passive:p}):n.addEventListener(a,s,!1)}function tf(n,a,s,c,p){var g=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var A=c.stateNode.containerInfo;if(A===p)break;if(w===4)for(w=c.return;w!==null;){var V=w.tag;if((V===3||V===4)&&w.stateNode.containerInfo===p)return;w=w.return}for(;A!==null;){if(w=Ta(A),w===null)return;if(V=w.tag,V===5||V===6||V===26||V===27){c=g=w;continue e}A=A.parentNode}}c=c.return}S1(function(){var I=g,X=wu(s),J=[];e:{var G=K1.get(n);if(G!==void 0){var q=No,pe=n;switch(n){case"keypress":if(zo(s)===0)break e;case"keydown":case"keyup":q=x8;break;case"focusin":pe="focus",q=Mu;break;case"focusout":pe="blur",q=Mu;break;case"beforeblur":case"afterblur":q=Mu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=E1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=r8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=w8;break;case Y1:case F1:case Z1:q=l8;break;case X1:q=S8;break;case"scroll":case"scrollend":q=i8;break;case"wheel":q=T8;break;case"copy":case"cut":case"paste":q=u8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=A1;break;case"toggle":case"beforetoggle":q=M8}var ue=(a&4)!==0,Pe=!ue&&(n==="scroll"||n==="scrollend"),N=ue?G!==null?G+"Capture":null:G;ue=[];for(var z=I,U;z!==null;){var Q=z;if(U=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||U===null||N===null||(Q=qr(z,N),Q!=null&&ue.push(As(z,Q,U))),Pe)break;z=z.return}0<ue.length&&(G=new q(G,pe,null,s,X),J.push({event:G,listeners:ue}))}}if((a&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",q=n==="mouseout"||n==="pointerout",G&&s!==vu&&(pe=s.relatedTarget||s.fromElement)&&(Ta(pe)||pe[Ca]))break e;if((q||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,q?(pe=s.relatedTarget||s.toElement,q=I,pe=pe?Ta(pe):null,pe!==null&&(Pe=l(pe),ue=pe.tag,pe!==Pe||ue!==5&&ue!==27&&ue!==6)&&(pe=null)):(q=null,pe=I),q!==pe)){if(ue=E1,Q="onMouseLeave",N="onMouseEnter",z="mouse",(n==="pointerout"||n==="pointerover")&&(ue=A1,Q="onPointerLeave",N="onPointerEnter",z="pointer"),Pe=q==null?G:Gr(q),U=pe==null?G:Gr(pe),G=new ue(Q,z+"leave",q,s,X),G.target=Pe,G.relatedTarget=U,Q=null,Ta(X)===I&&(ue=new ue(N,z+"enter",pe,s,X),ue.target=U,ue.relatedTarget=Pe,Q=ue),Pe=Q,q&&pe)t:{for(ue=q,N=pe,z=0,U=ue;U;U=ar(U))z++;for(U=0,Q=N;Q;Q=ar(Q))U++;for(;0<z-U;)ue=ar(ue),z--;for(;0<U-z;)N=ar(N),U--;for(;z--;){if(ue===N||N!==null&&ue===N.alternate)break t;ue=ar(ue),N=ar(N)}ue=null}else ue=null;q!==null&&gg(J,G,q,ue,!1),pe!==null&&Pe!==null&&gg(J,Pe,pe,ue,!0)}}e:{if(G=I?Gr(I):window,q=G.nodeName&&G.nodeName.toLowerCase(),q==="select"||q==="input"&&G.type==="file")var se=k1;else if(H1(G))if(z1)se=z8;else{se=V8;var ve=H8}else q=G.nodeName,!q||q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?I&&yu(I.elementType)&&(se=k1):se=k8;if(se&&(se=se(n,I))){V1(J,se,s,X);break e}ve&&ve(n,G,I),n==="focusout"&&I&&G.type==="number"&&I.memoizedProps.value!=null&&xu(G,"number",G.value)}switch(ve=I?Gr(I):window,n){case"focusin":(H1(ve)||ve.contentEditable==="true")&&(Va=ve,Du=I,Jr=null);break;case"focusout":Jr=Du=Va=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,G1(J,s,X);break;case"selectionchange":if(N8)break;case"keydown":case"keyup":G1(J,s,X)}var le;if(ju)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ha?R1(n,s)&&(fe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(fe="onCompositionStart");fe&&(j1&&s.locale!=="ko"&&(Ha||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ha&&(le=C1()):(fi=X,Cu="value"in fi?fi.value:fi.textContent,Ha=!0)),ve=El(I,fe),0<ve.length&&(fe=new M1(fe,n,null,s,X),J.push({event:fe,listeners:ve}),le?fe.data=le:(le=D1(s),le!==null&&(fe.data=le)))),(le=j8?L8(n,s):O8(n,s))&&(fe=El(I,"onBeforeInput"),0<fe.length&&(ve=new M1("onBeforeInput","beforeinput",null,s,X),J.push({event:ve,listeners:fe}),ve.data=le)),w7(J,n,I,s,X)}hg(J,a)})}function As(n,a,s){return{instance:n,listener:a,currentTarget:s}}function El(n,a){for(var s=a+"Capture",c=[];n!==null;){var p=n,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=qr(n,s),p!=null&&c.unshift(As(n,p,g)),p=qr(n,a),p!=null&&c.push(As(n,p,g))),n.tag===3)return c;n=n.return}return[]}function ar(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function gg(n,a,s,c,p){for(var g=a._reactName,w=[];s!==null&&s!==c;){var A=s,V=A.alternate,I=A.stateNode;if(A=A.tag,V!==null&&V===c)break;A!==5&&A!==26&&A!==27||I===null||(V=I,p?(I=qr(s,g),I!=null&&w.unshift(As(s,I,V))):p||(I=qr(s,g),I!=null&&w.push(As(s,I,V)))),s=s.return}w.length!==0&&n.push({event:a,listeners:w})}var T7=/\r\n?/g,E7=/\u0000|\uFFFD/g;function xg(n){return(typeof n=="string"?n:""+n).replace(T7,`
`).replace(E7,"")}function yg(n,a){return a=xg(a),xg(n)===a}function Ml(){}function ze(n,a,s,c,p,g){switch(s){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||Oa(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&Oa(n,""+c);break;case"className":Ro(n,"class",c);break;case"tabIndex":Ro(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Ro(n,s,c);break;case"style":w1(n,c,g);break;case"data":if(a!=="object"){Ro(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Vo(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(s==="formAction"?(a!=="input"&&ze(n,a,"name",p.name,p,null),ze(n,a,"formEncType",p.formEncType,p,null),ze(n,a,"formMethod",p.formMethod,p,null),ze(n,a,"formTarget",p.formTarget,p,null)):(ze(n,a,"encType",p.encType,p,null),ze(n,a,"method",p.method,p,null),ze(n,a,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Vo(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=Ml);break;case"onScroll":c!=null&&Se("scroll",n);break;case"onScrollEnd":c!=null&&Se("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=Vo(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":Se("beforetoggle",n),Se("toggle",n),Oo(n,"popover",c);break;case"xlinkActuate":_n(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":_n(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":_n(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":_n(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":_n(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":_n(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":_n(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":_n(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":_n(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Oo(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=t8.get(s)||s,Oo(n,s,c))}}function nf(n,a,s,c,p,g){switch(s){case"style":w1(n,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"children":typeof c=="string"?Oa(n,c):(typeof c=="number"||typeof c=="bigint")&&Oa(n,""+c);break;case"onScroll":c!=null&&Se("scroll",n);break;case"onScrollEnd":c!=null&&Se("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Ml);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!c1.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(p=s.endsWith("Capture"),a=s.slice(2,p?s.length-7:void 0),g=n[Lt]||null,g=g!=null?g[s]:null,typeof g=="function"&&n.removeEventListener(a,g,p),typeof c=="function")){typeof g!="function"&&g!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(a,c,p);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):Oo(n,s,c)}}}function mt(n,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",n),Se("load",n);var c=!1,p=!1,g;for(g in s)if(s.hasOwnProperty(g)){var w=s[g];if(w!=null)switch(g){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ze(n,a,g,w,s,null)}}p&&ze(n,a,"srcSet",s.srcSet,s,null),c&&ze(n,a,"src",s.src,s,null);return;case"input":Se("invalid",n);var A=g=w=p=null,V=null,I=null;for(c in s)if(s.hasOwnProperty(c)){var X=s[c];if(X!=null)switch(c){case"name":p=X;break;case"type":w=X;break;case"checked":V=X;break;case"defaultChecked":I=X;break;case"value":g=X;break;case"defaultValue":A=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,a));break;default:ze(n,a,c,X,s,null)}}g1(n,g,A,V,I,w,p,!1),Do(n);return;case"select":Se("invalid",n),c=w=g=null;for(p in s)if(s.hasOwnProperty(p)&&(A=s[p],A!=null))switch(p){case"value":g=A;break;case"defaultValue":w=A;break;case"multiple":c=A;default:ze(n,a,p,A,s,null)}a=g,s=w,n.multiple=!!c,a!=null?La(n,!!c,a,!1):s!=null&&La(n,!!c,s,!0);return;case"textarea":Se("invalid",n),g=p=c=null;for(w in s)if(s.hasOwnProperty(w)&&(A=s[w],A!=null))switch(w){case"value":c=A;break;case"defaultValue":p=A;break;case"children":g=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:ze(n,a,w,A,s,null)}y1(n,c,p,g),Do(n);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(c=s[V],c!=null))switch(V){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ze(n,a,V,c,s,null)}return;case"dialog":Se("beforetoggle",n),Se("toggle",n),Se("cancel",n),Se("close",n);break;case"iframe":case"object":Se("load",n);break;case"video":case"audio":for(c=0;c<Ms.length;c++)Se(Ms[c],n);break;case"image":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"embed":case"source":case"link":Se("error",n),Se("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(I in s)if(s.hasOwnProperty(I)&&(c=s[I],c!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ze(n,a,I,c,s,null)}return;default:if(yu(a)){for(X in s)s.hasOwnProperty(X)&&(c=s[X],c!==void 0&&nf(n,a,X,c,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(c=s[A],c!=null&&ze(n,a,A,c,s,null))}function M7(n,a,s,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,w=null,A=null,V=null,I=null,X=null;for(q in s){var J=s[q];if(s.hasOwnProperty(q)&&J!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":V=J;default:c.hasOwnProperty(q)||ze(n,a,q,null,c,J)}}for(var G in c){var q=c[G];if(J=s[G],c.hasOwnProperty(G)&&(q!=null||J!=null))switch(G){case"type":g=q;break;case"name":p=q;break;case"checked":I=q;break;case"defaultChecked":X=q;break;case"value":w=q;break;case"defaultValue":A=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,a));break;default:q!==J&&ze(n,a,G,q,c,J)}}gu(n,w,A,V,I,X,g,p);return;case"select":q=w=A=G=null;for(g in s)if(V=s[g],s.hasOwnProperty(g)&&V!=null)switch(g){case"value":break;case"multiple":q=V;default:c.hasOwnProperty(g)||ze(n,a,g,null,c,V)}for(p in c)if(g=c[p],V=s[p],c.hasOwnProperty(p)&&(g!=null||V!=null))switch(p){case"value":G=g;break;case"defaultValue":A=g;break;case"multiple":w=g;default:g!==V&&ze(n,a,p,g,c,V)}a=A,s=w,c=q,G!=null?La(n,!!s,G,!1):!!c!=!!s&&(a!=null?La(n,!!s,a,!0):La(n,!!s,s?[]:"",!1));return;case"textarea":q=G=null;for(A in s)if(p=s[A],s.hasOwnProperty(A)&&p!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ze(n,a,A,null,c,p)}for(w in c)if(p=c[w],g=s[w],c.hasOwnProperty(w)&&(p!=null||g!=null))switch(w){case"value":G=p;break;case"defaultValue":q=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(r(91));break;default:p!==g&&ze(n,a,w,p,c,g)}x1(n,G,q);return;case"option":for(var pe in s)if(G=s[pe],s.hasOwnProperty(pe)&&G!=null&&!c.hasOwnProperty(pe))switch(pe){case"selected":n.selected=!1;break;default:ze(n,a,pe,null,c,G)}for(V in c)if(G=c[V],q=s[V],c.hasOwnProperty(V)&&G!==q&&(G!=null||q!=null))switch(V){case"selected":n.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:ze(n,a,V,G,c,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in s)G=s[ue],s.hasOwnProperty(ue)&&G!=null&&!c.hasOwnProperty(ue)&&ze(n,a,ue,null,c,G);for(I in c)if(G=c[I],q=s[I],c.hasOwnProperty(I)&&G!==q&&(G!=null||q!=null))switch(I){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,a));break;default:ze(n,a,I,G,c,q)}return;default:if(yu(a)){for(var Pe in s)G=s[Pe],s.hasOwnProperty(Pe)&&G!==void 0&&!c.hasOwnProperty(Pe)&&nf(n,a,Pe,void 0,c,G);for(X in c)G=c[X],q=s[X],!c.hasOwnProperty(X)||G===q||G===void 0&&q===void 0||nf(n,a,X,G,c,q);return}}for(var N in s)G=s[N],s.hasOwnProperty(N)&&G!=null&&!c.hasOwnProperty(N)&&ze(n,a,N,null,c,G);for(J in c)G=c[J],q=s[J],!c.hasOwnProperty(J)||G===q||G==null&&q==null||ze(n,a,J,G,c,q)}var af=null,rf=null;function Al(n){return n.nodeType===9?n:n.ownerDocument}function vg(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function sf(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var of=null;function A7(){var n=window.event;return n&&n.type==="popstate"?n===of?!1:(of=n,!0):(of=null,!1)}var bg=typeof setTimeout=="function"?setTimeout:void 0,j7=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,L7=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(n){return Sg.resolve(null).then(n).catch(O7)}:bg;function O7(n){setTimeout(function(){throw n})}function ji(n){return n==="head"}function Cg(n,a){var s=a,c=0,p=0;do{var g=s.nextSibling;if(n.removeChild(s),g&&g.nodeType===8)if(s=g.data,s==="/$"){if(0<c&&8>c){s=c;var w=n.ownerDocument;if(s&1&&js(w.documentElement),s&2&&js(w.body),s&4)for(s=w.head,js(s),w=s.firstChild;w;){var A=w.nextSibling,V=w.nodeName;w[Ir]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&w.rel.toLowerCase()==="stylesheet"||s.removeChild(w),w=A}}if(p===0){n.removeChild(g),zs(a);return}p--}else s==="$"||s==="$?"||s==="$!"?p++:c=s.charCodeAt(0)-48;else c=0;s=g}while(s);zs(a)}function lf(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":lf(s),fu(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function R7(n,a,s,c){for(;n.nodeType===1;){var p=s;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Ir])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=gn(n.nextSibling),n===null)break}return null}function D7(n,a,s){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=gn(n.nextSibling),n===null))return null;return n}function cf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function H7(n,a){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")a();else{var c=function(){a(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function gn(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var uf=null;function Tg(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return n;a--}else s==="/$"&&a++}n=n.previousSibling}return null}function Eg(n,a,s){switch(a=Al(s),n){case"html":if(n=a.documentElement,!n)throw Error(r(452));return n;case"head":if(n=a.head,!n)throw Error(r(453));return n;case"body":if(n=a.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function js(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);fu(n)}var on=new Map,Mg=new Set;function jl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ti=K.d;K.d={f:V7,r:k7,D:z7,C:P7,L:N7,m:B7,X:_7,S:$7,M:U7};function V7(){var n=ti.f(),a=vl();return n||a}function k7(n){var a=Ea(n);a!==null&&a.tag===5&&a.type==="form"?Y2(a):ti.r(n)}var rr=typeof document>"u"?null:document;function Ag(n,a,s){var c=rr;if(c&&typeof a=="string"&&a){var p=Jt(a);p='link[rel="'+n+'"][href="'+p+'"]',typeof s=="string"&&(p+='[crossorigin="'+s+'"]'),Mg.has(p)||(Mg.add(p),n={rel:n,crossOrigin:s,href:a},c.querySelector(p)===null&&(a=c.createElement("link"),mt(a,"link",n),ot(a),c.head.appendChild(a)))}}function z7(n){ti.D(n),Ag("dns-prefetch",n,null)}function P7(n,a){ti.C(n,a),Ag("preconnect",n,a)}function N7(n,a,s){ti.L(n,a,s);var c=rr;if(c&&n&&a){var p='link[rel="preload"][as="'+Jt(a)+'"]';a==="image"&&s&&s.imageSrcSet?(p+='[imagesrcset="'+Jt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(p+='[imagesizes="'+Jt(s.imageSizes)+'"]')):p+='[href="'+Jt(n)+'"]';var g=p;switch(a){case"style":g=sr(n);break;case"script":g=or(n)}on.has(g)||(n=m({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:n,as:a},s),on.set(g,n),c.querySelector(p)!==null||a==="style"&&c.querySelector(Ls(g))||a==="script"&&c.querySelector(Os(g))||(a=c.createElement("link"),mt(a,"link",n),ot(a),c.head.appendChild(a)))}}function B7(n,a){ti.m(n,a);var s=rr;if(s&&n){var c=a&&typeof a.as=="string"?a.as:"script",p='link[rel="modulepreload"][as="'+Jt(c)+'"][href="'+Jt(n)+'"]',g=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=or(n)}if(!on.has(g)&&(n=m({rel:"modulepreload",href:n},a),on.set(g,n),s.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Os(g)))return}c=s.createElement("link"),mt(c,"link",n),ot(c),s.head.appendChild(c)}}}function $7(n,a,s){ti.S(n,a,s);var c=rr;if(c&&n){var p=Ma(c).hoistableStyles,g=sr(n);a=a||"default";var w=p.get(g);if(!w){var A={loading:0,preload:null};if(w=c.querySelector(Ls(g)))A.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":a},s),(s=on.get(g))&&df(n,s);var V=w=c.createElement("link");ot(V),mt(V,"link",n),V._p=new Promise(function(I,X){V.onload=I,V.onerror=X}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ll(w,a,c)}w={type:"stylesheet",instance:w,count:1,state:A},p.set(g,w)}}}function _7(n,a){ti.X(n,a);var s=rr;if(s&&n){var c=Ma(s).hoistableScripts,p=or(n),g=c.get(p);g||(g=s.querySelector(Os(p)),g||(n=m({src:n,async:!0},a),(a=on.get(p))&&ff(n,a),g=s.createElement("script"),ot(g),mt(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function U7(n,a){ti.M(n,a);var s=rr;if(s&&n){var c=Ma(s).hoistableScripts,p=or(n),g=c.get(p);g||(g=s.querySelector(Os(p)),g||(n=m({src:n,async:!0,type:"module"},a),(a=on.get(p))&&ff(n,a),g=s.createElement("script"),ot(g),mt(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function jg(n,a,s,c){var p=(p=de.current)?jl(p):null;if(!p)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=sr(s.href),s=Ma(p).hoistableStyles,c=s.get(a),c||(c={type:"style",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=sr(s.href);var g=Ma(p).hoistableStyles,w=g.get(n);if(w||(p=p.ownerDocument||p,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,w),(g=p.querySelector(Ls(n)))&&!g._p&&(w.instance=g,w.state.loading=5),on.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},on.set(n,s),g||I7(p,n,s,w.state))),a&&c===null)throw Error(r(528,""));return w}if(a&&c!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=or(s),s=Ma(p).hoistableScripts,c=s.get(a),c||(c={type:"script",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function sr(n){return'href="'+Jt(n)+'"'}function Ls(n){return'link[rel="stylesheet"]['+n+"]"}function Lg(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function I7(n,a,s,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),mt(a,"link",s),ot(a),n.head.appendChild(a))}function or(n){return'[src="'+Jt(n)+'"]'}function Os(n){return"script[async]"+n}function Og(n,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+Jt(s.href)+'"]');if(c)return a.instance=c,ot(c),c;var p=m({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),ot(c),mt(c,"style",p),Ll(c,s.precedence,n),a.instance=c;case"stylesheet":p=sr(s.href);var g=n.querySelector(Ls(p));if(g)return a.state.loading|=4,a.instance=g,ot(g),g;c=Lg(s),(p=on.get(p))&&df(c,p),g=(n.ownerDocument||n).createElement("link"),ot(g);var w=g;return w._p=new Promise(function(A,V){w.onload=A,w.onerror=V}),mt(g,"link",c),a.state.loading|=4,Ll(g,s.precedence,n),a.instance=g;case"script":return g=or(s.src),(p=n.querySelector(Os(g)))?(a.instance=p,ot(p),p):(c=s,(p=on.get(g))&&(c=m({},s),ff(c,p)),n=n.ownerDocument||n,p=n.createElement("script"),ot(p),mt(p,"link",c),n.head.appendChild(p),a.instance=p);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Ll(c,s.precedence,n));return a.instance}function Ll(n,a,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,g=p,w=0;w<c.length;w++){var A=c[w];if(A.dataset.precedence===a)g=A;else if(g!==p)break}g?g.parentNode.insertBefore(n,g.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(n,a.firstChild))}function df(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function ff(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Ol=null;function Rg(n,a,s){if(Ol===null){var c=new Map,p=Ol=new Map;p.set(s,c)}else p=Ol,c=p.get(s),c||(c=new Map,p.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),p=0;p<s.length;p++){var g=s[p];if(!(g[Ir]||g[vt]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var w=g.getAttribute(a)||"";w=n+w;var A=c.get(w);A?A.push(g):c.set(w,[g])}}return c}function Dg(n,a,s){n=n.ownerDocument||n,n.head.insertBefore(s,a==="title"?n.querySelector("head > title"):null)}function G7(n,a,s){if(s===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Hg(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Rs=null;function q7(){}function Y7(n,a,s){if(Rs===null)throw Error(r(475));var c=Rs;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var p=sr(s.href),g=n.querySelector(Ls(p));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Rl.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=g,ot(g);return}g=n.ownerDocument||n,s=Lg(s),(p=on.get(p))&&df(s,p),g=g.createElement("link"),ot(g);var w=g;w._p=new Promise(function(A,V){w.onload=A,w.onerror=V}),mt(g,"link",s),a.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Rl.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function F7(){if(Rs===null)throw Error(r(475));var n=Rs;return n.stylesheets&&n.count===0&&pf(n,n.stylesheets),0<n.count?function(a){var s=setTimeout(function(){if(n.stylesheets&&pf(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Rl(){if(this.count--,this.count===0){if(this.stylesheets)pf(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Dl=null;function pf(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Dl=new Map,a.forEach(Z7,n),Dl=null,Rl.call(n))}function Z7(n,a){if(!(a.state.loading&4)){var s=Dl.get(n);if(s)var c=s.get(null);else{s=new Map,Dl.set(n,s);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var w=p[g];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(s.set(w.dataset.precedence,w),c=w)}c&&s.set(null,c)}p=a.instance,w=p.getAttribute("data-precedence"),g=s.get(w)||c,g===c&&s.set(null,p),s.set(w,p),this.count++,c=Rl.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),g?g.parentNode.insertBefore(p,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),a.state.loading|=4}}var Ds={$$typeof:C,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function X7(n,a,s,c,p,g,w,A){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.hiddenUpdates=lu(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Vg(n,a,s,c,p,g,w,A,V,I,X,J){return n=new X7(n,a,s,w,A,V,I,J),a=1,g===!0&&(a|=24),g=$t(3,null,null,a),n.current=g,g.stateNode=n,a=Fu(),a.refCount++,n.pooledCache=a,a.refCount++,g.memoizedState={element:c,isDehydrated:s,cache:a},Wu(g),n}function kg(n){return n?(n=Na,n):Na}function zg(n,a,s,c,p,g){p=kg(p),c.context===null?c.context=p:c.pendingContext=p,c=mi(a),c.payload={element:s},g=g===void 0?null:g,g!==null&&(c.callback=g),s=gi(n,c,a),s!==null&&(qt(s,n,a),ls(s,n,a))}function Pg(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<a?s:a}}function hf(n,a){Pg(n,a),(n=n.alternate)&&Pg(n,a)}function Ng(n){if(n.tag===13){var a=Pa(n,67108864);a!==null&&qt(a,n,67108864),hf(n,67108864)}}var Hl=!0;function K7(n,a,s,c){var p=B.T;B.T=null;var g=K.p;try{K.p=2,mf(n,a,s,c)}finally{K.p=g,B.T=p}}function W7(n,a,s,c){var p=B.T;B.T=null;var g=K.p;try{K.p=8,mf(n,a,s,c)}finally{K.p=g,B.T=p}}function mf(n,a,s,c){if(Hl){var p=gf(c);if(p===null)tf(n,a,c,Vl,s),$g(n,c);else if(J7(p,n,a,s,c))c.stopPropagation();else if($g(n,c),a&4&&-1<Q7.indexOf(n)){for(;p!==null;){var g=Ea(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var w=Yi(g.pendingLanes);if(w!==0){var A=g;for(A.pendingLanes|=2,A.entangledLanes|=2;w;){var V=1<<31-Nt(w);A.entanglements[1]|=V,w&=~V}jn(g),(He&6)===0&&(xl=Cn()+500,Es(0))}}break;case 13:A=Pa(g,2),A!==null&&qt(A,g,2),vl(),hf(g,2)}if(g=gf(c),g===null&&tf(n,a,c,Vl,s),g===p)break;p=g}p!==null&&c.stopPropagation()}else tf(n,a,c,null,s)}}function gf(n){return n=wu(n),xf(n)}var Vl=null;function xf(n){if(Vl=null,n=Ta(n),n!==null){var a=l(n);if(a===null)n=null;else{var s=a.tag;if(s===13){if(n=u(a),n!==null)return n;n=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Vl=n,null}function Bg(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pv()){case Jh:return 2;case e1:return 8;case Mo:case Nv:return 32;case t1:return 268435456;default:return 32}default:return 32}}var yf=!1,Li=null,Oi=null,Ri=null,Hs=new Map,Vs=new Map,Di=[],Q7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(n,a){switch(n){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":Hs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vs.delete(a.pointerId)}}function ks(n,a,s,c,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:a,domEventName:s,eventSystemFlags:c,nativeEvent:g,targetContainers:[p]},a!==null&&(a=Ea(a),a!==null&&Ng(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,p!==null&&a.indexOf(p)===-1&&a.push(p),n)}function J7(n,a,s,c,p){switch(a){case"focusin":return Li=ks(Li,n,a,s,c,p),!0;case"dragenter":return Oi=ks(Oi,n,a,s,c,p),!0;case"mouseover":return Ri=ks(Ri,n,a,s,c,p),!0;case"pointerover":var g=p.pointerId;return Hs.set(g,ks(Hs.get(g)||null,n,a,s,c,p)),!0;case"gotpointercapture":return g=p.pointerId,Vs.set(g,ks(Vs.get(g)||null,n,a,s,c,p)),!0}return!1}function _g(n){var a=Ta(n.target);if(a!==null){var s=l(a);if(s!==null){if(a=s.tag,a===13){if(a=u(s),a!==null){n.blockedOn=a,Yv(n.priority,function(){if(s.tag===13){var c=Gt();c=cu(c);var p=Pa(s,c);p!==null&&qt(p,s,c),hf(s,c)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function kl(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var s=gf(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);vu=c,s.target.dispatchEvent(c),vu=null}else return a=Ea(s),a!==null&&Ng(a),n.blockedOn=s,!1;a.shift()}return!0}function Ug(n,a,s){kl(n)&&s.delete(a)}function e9(){yf=!1,Li!==null&&kl(Li)&&(Li=null),Oi!==null&&kl(Oi)&&(Oi=null),Ri!==null&&kl(Ri)&&(Ri=null),Hs.forEach(Ug),Vs.forEach(Ug)}function zl(n,a){n.blockedOn===a&&(n.blockedOn=null,yf||(yf=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,e9)))}var Pl=null;function Ig(n){Pl!==n&&(Pl=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pl===n&&(Pl=null);for(var a=0;a<n.length;a+=3){var s=n[a],c=n[a+1],p=n[a+2];if(typeof c!="function"){if(xf(c||s)===null)continue;break}var g=Ea(s);g!==null&&(n.splice(a,3),a-=3,gd(g,{pending:!0,data:p,method:s.method,action:c},c,p))}}))}function zs(n){function a(V){return zl(V,n)}Li!==null&&zl(Li,n),Oi!==null&&zl(Oi,n),Ri!==null&&zl(Ri,n),Hs.forEach(a),Vs.forEach(a);for(var s=0;s<Di.length;s++){var c=Di[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Di.length&&(s=Di[0],s.blockedOn===null);)_g(s),s.blockedOn===null&&Di.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var p=s[c],g=s[c+1],w=p[Lt]||null;if(typeof g=="function")w||Ig(s);else if(w){var A=null;if(g&&g.hasAttribute("formAction")){if(p=g,w=g[Lt]||null)A=w.formAction;else if(xf(p)!==null)continue}else A=w.action;typeof A=="function"?s[c+1]=A:(s.splice(c,3),c-=3),Ig(s)}}}function vf(n){this._internalRoot=n}Nl.prototype.render=vf.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,c=Gt();zg(s,c,n,a,null,null)},Nl.prototype.unmount=vf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;zg(n.current,2,null,n,null,null),vl(),a[Ca]=null}};function Nl(n){this._internalRoot=n}Nl.prototype.unstable_scheduleHydration=function(n){if(n){var a=s1();n={blockedOn:null,target:n,priority:a};for(var s=0;s<Di.length&&a!==0&&a<Di[s].priority;s++);Di.splice(s,0,n),s===0&&_g(n)}};var Gg=e.version;if(Gg!=="19.1.1")throw Error(r(527,Gg,"19.1.1"));K.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=f(a),n=n!==null?h(n):null,n=n===null?null:n.stateNode,n};var t9={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{$r=Bl.inject(t9),Pt=Bl}catch{}}return Ns.createRoot=function(n,a){if(!o(n))throw Error(r(299));var s=!1,c="",p=sm,g=om,w=lm,A=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(p=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(A=a.unstable_transitionCallbacks)),a=Vg(n,1,!1,null,null,s,c,p,g,w,A,null),n[Ca]=a.current,ef(n),new vf(a)},Ns.hydrateRoot=function(n,a,s){if(!o(n))throw Error(r(299));var c=!1,p="",g=sm,w=om,A=lm,V=null,I=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onUncaughtError!==void 0&&(g=s.onUncaughtError),s.onCaughtError!==void 0&&(w=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(V=s.unstable_transitionCallbacks),s.formState!==void 0&&(I=s.formState)),a=Vg(n,1,!0,a,s??null,c,p,g,w,A,V,I),a.context=kg(null),s=a.current,c=Gt(),c=cu(c),p=mi(c),p.callback=null,gi(s,p,c),s=c,a.current.lanes=s,Ur(a,s),jn(a),n[Ca]=a.current,ef(n),new Nl(a)},Ns.version="19.1.1",Ns}var e3;function f9(){if(e3)return bf.exports;e3=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),bf.exports=d9(),bf.exports}var p9=f9();const h9=Ic(p9);var R=vp();const Le=Ic(R),t3=i9({__proto__:null,default:Le},[R]);/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var n3="popstate";function m9(t={}){function e(r,o){let{pathname:l,search:u,hash:d}=r.location;return j0("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(r,o){return typeof o=="string"?o:no(o)}return x9(e,i,null,t)}function Ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function g9(){return Math.random().toString(36).substring(2,10)}function i3(t,e){return{usr:t.state,key:t.key,idx:e}}function j0(t,e,i=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Rr(e):e,state:i,key:e&&e.key||r||g9()}}function no({pathname:t="/",search:e="",hash:i=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Rr(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substring(i),t=t.substring(0,i));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function x9(t,e,i,r={}){let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,d="POP",f=null,h=m();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function m(){return(u.state||{idx:null}).idx}function y(){d="POP";let O=m(),j=O==null?null:O-h;h=O,f&&f({action:d,location:M.location,delta:j})}function v(O,j){d="PUSH";let T=j0(M.location,O,j);h=m()+1;let C=i3(T,h),D=M.createHref(T);try{u.pushState(C,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;o.location.assign(D)}l&&f&&f({action:d,location:M.location,delta:1})}function S(O,j){d="REPLACE";let T=j0(M.location,O,j);h=m();let C=i3(T,h),D=M.createHref(T);u.replaceState(C,"",D),l&&f&&f({action:d,location:M.location,delta:0})}function b(O){return y9(O)}let M={get action(){return d},get location(){return t(o,u)},listen(O){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(n3,y),f=O,()=>{o.removeEventListener(n3,y),f=null}},createHref(O){return e(o,O)},createURL:b,encodeLocation(O){let j=b(O);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:v,replace:S,go(O){return u.go(O)}};return M}function y9(t,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(i,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:no(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function p5(t,e,i="/"){return v9(t,e,i,!1)}function v9(t,e,i,r){let o=typeof e=="string"?Rr(e):e,l=oi(o.pathname||"/",i);if(l==null)return null;let u=h5(t);w9(u);let d=null;for(let f=0;d==null&&f<u.length;++f){let h=R9(l);d=L9(u[f],h,r)}return d}function h5(t,e=[],i=[],r=""){let o=(l,u,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};f.relativePath.startsWith("/")&&(Ge(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length));let h=si([r,f.relativePath]),m=i.concat(f);l.children&&l.children.length>0&&(Ge(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),h5(l.children,e,m,h)),!(l.path==null&&!l.index)&&e.push({path:h,score:A9(h,l.index),routesMeta:m})};return t.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,u);else for(let f of m5(l.path))o(l,u,f)}),e}function m5(t){let e=t.split("/");if(e.length===0)return[];let[i,...r]=e,o=i.endsWith("?"),l=i.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let u=m5(r.join("/")),d=[];return d.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&d.push(...u),d.map(f=>t.startsWith("/")&&f===""?"/":f)}function w9(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:j9(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var b9=/^:[\w-]+$/,S9=3,C9=2,T9=1,E9=10,M9=-2,a3=t=>t==="*";function A9(t,e){let i=t.split("/"),r=i.length;return i.some(a3)&&(r+=M9),e&&(r+=C9),i.filter(o=>!a3(o)).reduce((o,l)=>o+(b9.test(l)?S9:l===""?T9:E9),r)}function j9(t,e){return t.length===e.length&&t.slice(0,-1).every((r,o)=>r===e[o])?t[t.length-1]-e[e.length-1]:0}function L9(t,e,i=!1){let{routesMeta:r}=t,o={},l="/",u=[];for(let d=0;d<r.length;++d){let f=r[d],h=d===r.length-1,m=l==="/"?e:e.slice(l.length)||"/",y=bc({path:f.relativePath,caseSensitive:f.caseSensitive,end:h},m),v=f.route;if(!y&&h&&i&&!r[r.length-1].route.index&&(y=bc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},m)),!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:si([l,y.pathname]),pathnameBase:k9(si([l,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(l=si([l,y.pathnameBase]))}return u}function bc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,r]=O9(t.path,t.caseSensitive,t.end),o=e.match(i);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((h,{paramName:m,isOptional:y},v)=>{if(m==="*"){let b=d[v]||"";u=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const S=d[v];return y&&!S?h[m]=void 0:h[m]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:t}}function O9(t,e=!1,i=!0){wn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function R9(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function oi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=t.charAt(i);return r&&r!=="/"?null:t.slice(i)||"/"}function D9(t,e="/"){let{pathname:i,search:r="",hash:o=""}=typeof t=="string"?Rr(t):t;return{pathname:i?i.startsWith("/")?i:H9(i,e):e,search:z9(r),hash:P9(o)}}function H9(t,e){let i=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function Mf(t,e,i,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function V9(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function wp(t){let e=V9(t);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function bp(t,e,i,r=!1){let o;typeof t=="string"?o=Rr(t):(o={...t},Ge(!o.pathname||!o.pathname.includes("?"),Mf("?","pathname","search",o)),Ge(!o.pathname||!o.pathname.includes("#"),Mf("#","pathname","hash",o)),Ge(!o.search||!o.search.includes("#"),Mf("#","search","hash",o)));let l=t===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=i;else{let y=e.length-1;if(!r&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),y-=1;o.pathname=v.join("/")}d=y>=0?e[y]:"/"}let f=D9(o,d),h=u&&u!=="/"&&u.endsWith("/"),m=(l||u===".")&&i.endsWith("/");return!f.pathname.endsWith("/")&&(h||m)&&(f.pathname+="/"),f}var si=t=>t.join("/").replace(/\/\/+/g,"/"),k9=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),z9=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,P9=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function N9(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var g5=["POST","PUT","PATCH","DELETE"];new Set(g5);var B9=["GET",...g5];new Set(B9);var Dr=R.createContext(null);Dr.displayName="DataRouter";var Gc=R.createContext(null);Gc.displayName="DataRouterState";R.createContext(!1);var x5=R.createContext({isTransitioning:!1});x5.displayName="ViewTransition";var $9=R.createContext(new Map);$9.displayName="Fetchers";var _9=R.createContext(null);_9.displayName="Await";var bn=R.createContext(null);bn.displayName="Navigation";var xo=R.createContext(null);xo.displayName="Location";var Sn=R.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var Sp=R.createContext(null);Sp.displayName="RouteError";function U9(t,{relative:e}={}){Ge(Hr(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=R.useContext(bn),{hash:o,pathname:l,search:u}=yo(t,{relative:e}),d=l;return i!=="/"&&(d=l==="/"?i:si([i,l])),r.createHref({pathname:d,search:u,hash:o})}function Hr(){return R.useContext(xo)!=null}function pn(){return Ge(Hr(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(xo).location}var y5="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function v5(t){R.useContext(bn).static||R.useLayoutEffect(t)}function Cp(){let{isDataRoute:t}=R.useContext(Sn);return t?iw():I9()}function I9(){Ge(Hr(),"useNavigate() may be used only in the context of a <Router> component.");let t=R.useContext(Dr),{basename:e,navigator:i}=R.useContext(bn),{matches:r}=R.useContext(Sn),{pathname:o}=pn(),l=JSON.stringify(wp(r)),u=R.useRef(!1);return v5(()=>{u.current=!0}),R.useCallback((f,h={})=>{if(wn(u.current,y5),!u.current)return;if(typeof f=="number"){i.go(f);return}let m=bp(f,JSON.parse(l),o,h.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:si([e,m.pathname])),(h.replace?i.replace:i.push)(m,h.state,h)},[e,i,l,o,t])}var G9=R.createContext(null);function q9(t){let e=R.useContext(Sn).outlet;return e&&R.createElement(G9.Provider,{value:t},e)}function yo(t,{relative:e}={}){let{matches:i}=R.useContext(Sn),{pathname:r}=pn(),o=JSON.stringify(wp(i));return R.useMemo(()=>bp(t,JSON.parse(o),r,e==="path"),[t,o,r,e])}function Y9(t,e){return w5(t,e)}function w5(t,e,i,r){var j;Ge(Hr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=R.useContext(bn),{matches:l}=R.useContext(Sn),u=l[l.length-1],d=u?u.params:{},f=u?u.pathname:"/",h=u?u.pathnameBase:"/",m=u&&u.route;{let T=m&&m.path||"";b5(f,!m||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let y=pn(),v;if(e){let T=typeof e=="string"?Rr(e):e;Ge(h==="/"||((j=T.pathname)==null?void 0:j.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${T.pathname}" was given in the \`location\` prop.`),v=T}else v=y;let S=v.pathname||"/",b=S;if(h!=="/"){let T=h.replace(/^\//,"").split("/");b="/"+S.replace(/^\//,"").split("/").slice(T.length).join("/")}let M=p5(t,{pathname:b});wn(m||M!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),wn(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=W9(M&&M.map(T=>Object.assign({},T,{params:Object.assign({},d,T.params),pathname:si([h,o.encodeLocation?o.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?h:si([h,o.encodeLocation?o.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),l,i,r);return e&&O?R.createElement(xo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},O):O}function F9(){let t=nw(),e=N9(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",t),u=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:l},"ErrorBoundary")," or"," ",R.createElement("code",{style:l},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),i?R.createElement("pre",{style:o},i):null,u)}var Z9=R.createElement(F9,null),X9=class extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?R.createElement(Sn.Provider,{value:this.props.routeContext},R.createElement(Sp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function K9({routeContext:t,match:e,children:i}){let r=R.useContext(Dr);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),R.createElement(Sn.Provider,{value:t},i)}function W9(t,e=[],i=null,r=null){if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let o=t,l=i==null?void 0:i.errors;if(l!=null){let f=o.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);Ge(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(i)for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=f),h.route.id){let{loaderData:m,errors:y}=i,v=h.route.loader&&!m.hasOwnProperty(h.route.id)&&(!y||y[h.route.id]===void 0);if(h.route.lazy||v){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,h,m)=>{let y,v=!1,S=null,b=null;i&&(y=l&&h.route.id?l[h.route.id]:void 0,S=h.route.errorElement||Z9,u&&(d<0&&m===0?(b5("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,b=null):d===m&&(v=!0,b=h.route.hydrateFallbackElement||null)));let M=e.concat(o.slice(0,m+1)),O=()=>{let j;return y?j=S:v?j=b:h.route.Component?j=R.createElement(h.route.Component,null):h.route.element?j=h.route.element:j=f,R.createElement(K9,{match:h,routeContext:{outlet:f,matches:M,isDataRoute:i!=null},children:j})};return i&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?R.createElement(X9,{location:i.location,revalidation:i.revalidation,component:S,error:y,children:O(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):O()},null)}function Tp(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q9(t){let e=R.useContext(Dr);return Ge(e,Tp(t)),e}function J9(t){let e=R.useContext(Gc);return Ge(e,Tp(t)),e}function ew(t){let e=R.useContext(Sn);return Ge(e,Tp(t)),e}function Ep(t){let e=ew(t),i=e.matches[e.matches.length-1];return Ge(i.route.id,`${t} can only be used on routes that contain a unique "id"`),i.route.id}function tw(){return Ep("useRouteId")}function nw(){var r;let t=R.useContext(Sp),e=J9("useRouteError"),i=Ep("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[i]}function iw(){let{router:t}=Q9("useNavigate"),e=Ep("useNavigate"),i=R.useRef(!1);return v5(()=>{i.current=!0}),R.useCallback(async(o,l={})=>{wn(i.current,y5),i.current&&(typeof o=="number"?t.navigate(o):await t.navigate(o,{fromRouteId:e,...l}))},[t,e])}var r3={};function b5(t,e,i){!e&&!r3[t]&&(r3[t]=!0,wn(!1,i))}R.memo(aw);function aw({routes:t,future:e,state:i}){return w5(t,void 0,i,e)}function rw({to:t,replace:e,state:i,relative:r}){Ge(Hr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=R.useContext(bn);wn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=R.useContext(Sn),{pathname:u}=pn(),d=Cp(),f=bp(t,wp(l),u,r==="path"),h=JSON.stringify(f);return R.useEffect(()=>{d(JSON.parse(h),{replace:e,state:i,relative:r})},[d,h,r,e,i]),null}function sw(t){return q9(t.context)}function Ln(t){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ow({basename:t="/",children:e=null,location:i,navigationType:r="POP",navigator:o,static:l=!1}){Ge(!Hr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=t.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof i=="string"&&(i=Rr(i));let{pathname:f="/",search:h="",hash:m="",state:y=null,key:v="default"}=i,S=R.useMemo(()=>{let b=oi(f,u);return b==null?null:{location:{pathname:b,search:h,hash:m,state:y,key:v},navigationType:r}},[u,f,h,m,y,v,r]);return wn(S!=null,`<Router basename="${u}"> is not able to match the URL "${f}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:R.createElement(bn.Provider,{value:d},R.createElement(xo.Provider,{children:e,value:S}))}function lw({children:t,location:e}){return Y9(L0(t),e)}function L0(t,e=[]){let i=[];return R.Children.forEach(t,(r,o)=>{if(!R.isValidElement(r))return;let l=[...e,o];if(r.type===R.Fragment){i.push.apply(i,L0(r.props.children,l));return}Ge(r.type===Ln,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=L0(r.props.children,l)),i.push(u)}),i}var sc="get",oc="application/x-www-form-urlencoded";function qc(t){return t!=null&&typeof t.tagName=="string"}function cw(t){return qc(t)&&t.tagName.toLowerCase()==="button"}function uw(t){return qc(t)&&t.tagName.toLowerCase()==="form"}function dw(t){return qc(t)&&t.tagName.toLowerCase()==="input"}function fw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pw(t,e){return t.button===0&&(!e||e==="_self")&&!fw(t)}var $l=null;function hw(){if($l===null)try{new FormData(document.createElement("form"),0),$l=!1}catch{$l=!0}return $l}var mw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Af(t){return t!=null&&!mw.has(t)?(wn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oc}"`),null):t}function gw(t,e){let i,r,o,l,u;if(uw(t)){let d=t.getAttribute("action");r=d?oi(d,e):null,i=t.getAttribute("method")||sc,o=Af(t.getAttribute("enctype"))||oc,l=new FormData(t)}else if(cw(t)||dw(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=t.getAttribute("formaction")||d.getAttribute("action");if(r=f?oi(f,e):null,i=t.getAttribute("formmethod")||d.getAttribute("method")||sc,o=Af(t.getAttribute("formenctype"))||Af(d.getAttribute("enctype"))||oc,l=new FormData(d,t),!hw()){let{name:h,type:m,value:y}=t;if(m==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,y)}}else{if(qc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=sc,r=null,o=oc,u=t}return l&&o==="text/plain"&&(u=l,l=void 0),{action:r,method:i.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Mp(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function xw(t,e,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&oi(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function yw(t,e){if(t.id in e)return e[t.id];try{let i=await import(t.module);return e[t.id]=i,i}catch(i){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vw(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function ww(t,e,i){let r=await Promise.all(t.map(async o=>{let l=e.routes[o.route.id];if(l){let u=await yw(l,i);return u.links?u.links():[]}return[]}));return Tw(r.flat(1).filter(vw).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function s3(t,e,i,r,o,l){let u=(f,h)=>i[h]?f.route.id!==i[h].route.id:!0,d=(f,h)=>{var m;return i[h].pathname!==f.pathname||((m=i[h].route.path)==null?void 0:m.endsWith("*"))&&i[h].params["*"]!==f.params["*"]};return l==="assets"?e.filter((f,h)=>u(f,h)||d(f,h)):l==="data"?e.filter((f,h)=>{var y;let m=r.routes[f.route.id];if(!m||!m.hasLoader)return!1;if(u(f,h)||d(f,h))return!0;if(f.route.shouldRevalidate){let v=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(t,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function bw(t,e,{includeHydrateFallback:i}={}){return Sw(t.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Sw(t){return[...new Set(t)]}function Cw(t){let e={},i=Object.keys(t).sort();for(let r of i)e[r]=t[r];return e}function Tw(t,e){let i=new Set;return new Set(e),t.reduce((r,o)=>{let l=JSON.stringify(Cw(o));return i.has(l)||(i.add(l),r.push({key:l,link:o})),r},[])}function S5(){let t=R.useContext(Dr);return Mp(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Ew(){let t=R.useContext(Gc);return Mp(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ap=R.createContext(void 0);Ap.displayName="FrameworkContext";function C5(){let t=R.useContext(Ap);return Mp(t,"You must render this element inside a <HydratedRouter> element"),t}function Mw(t,e){let i=R.useContext(Ap),[r,o]=R.useState(!1),[l,u]=R.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:h,onMouseLeave:m,onTouchStart:y}=e,v=R.useRef(null);R.useEffect(()=>{if(t==="render"&&u(!0),t==="viewport"){let M=j=>{j.forEach(T=>{u(T.isIntersecting)})},O=new IntersectionObserver(M,{threshold:.5});return v.current&&O.observe(v.current),()=>{O.disconnect()}}},[t]),R.useEffect(()=>{if(r){let M=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(M)}}},[r]);let S=()=>{o(!0)},b=()=>{o(!1),u(!1)};return i?t!=="intent"?[l,v,{}]:[l,v,{onFocus:Bs(d,S),onBlur:Bs(f,b),onMouseEnter:Bs(h,S),onMouseLeave:Bs(m,b),onTouchStart:Bs(y,S)}]:[!1,v,{}]}function Bs(t,e){return i=>{t&&t(i),i.defaultPrevented||e(i)}}function Aw({page:t,...e}){let{router:i}=S5(),r=R.useMemo(()=>p5(i.routes,t,i.basename),[i.routes,t,i.basename]);return r?R.createElement(Lw,{page:t,matches:r,...e}):null}function jw(t){let{manifest:e,routeModules:i}=C5(),[r,o]=R.useState([]);return R.useEffect(()=>{let l=!1;return ww(t,e,i).then(u=>{l||o(u)}),()=>{l=!0}},[t,e,i]),r}function Lw({page:t,matches:e,...i}){let r=pn(),{manifest:o,routeModules:l}=C5(),{basename:u}=S5(),{loaderData:d,matches:f}=Ew(),h=R.useMemo(()=>s3(t,e,f,o,r,"data"),[t,e,f,o,r]),m=R.useMemo(()=>s3(t,e,f,o,r,"assets"),[t,e,f,o,r]),y=R.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let b=new Set,M=!1;if(e.forEach(j=>{var C;let T=o.routes[j.route.id];!T||!T.hasLoader||(!h.some(D=>D.route.id===j.route.id)&&j.route.id in d&&((C=l[j.route.id])!=null&&C.shouldRevalidate)||T.hasClientLoader?M=!0:b.add(j.route.id))}),b.size===0)return[];let O=xw(t,u,"data");return M&&b.size>0&&O.searchParams.set("_routes",e.filter(j=>b.has(j.route.id)).map(j=>j.route.id).join(",")),[O.pathname+O.search]},[u,d,r,o,h,e,t,l]),v=R.useMemo(()=>bw(m,o),[m,o]),S=jw(m);return R.createElement(R.Fragment,null,y.map(b=>R.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),v.map(b=>R.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),S.map(({key:b,link:M})=>R.createElement("link",{key:b,nonce:i.nonce,...M})))}function Ow(...t){return e=>{t.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var T5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{T5&&(window.__reactRouterVersion="7.8.0")}catch{}function Rw({basename:t,children:e,window:i}){let r=R.useRef();r.current==null&&(r.current=m9({window:i,v5Compat:!0}));let o=r.current,[l,u]=R.useState({action:o.action,location:o.location}),d=R.useCallback(f=>{R.startTransition(()=>u(f))},[u]);return R.useLayoutEffect(()=>o.listen(d),[o,d]),R.createElement(ow,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:o})}var E5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M5=R.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:o,reloadDocument:l,replace:u,state:d,target:f,to:h,preventScrollReset:m,viewTransition:y,...v},S){let{basename:b}=R.useContext(bn),M=typeof h=="string"&&E5.test(h),O,j=!1;if(typeof h=="string"&&M&&(O=h,T5))try{let $=new URL(window.location.href),Y=h.startsWith("//")?new URL($.protocol+h):new URL(h),F=oi(Y.pathname,b);Y.origin===$.origin&&F!=null?h=F+Y.search+Y.hash:j=!0}catch{wn(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let T=U9(h,{relative:o}),[C,D,L]=Mw(r,v),P=Vw(h,{replace:u,state:d,target:f,preventScrollReset:m,relative:o,viewTransition:y});function k($){e&&e($),$.defaultPrevented||P($)}let _=R.createElement("a",{...v,...L,href:O||T,onClick:j||l?e:k,ref:Ow(S,D),target:f,"data-discover":!M&&i==="render"?"true":void 0});return C&&!M?R.createElement(R.Fragment,null,_,R.createElement(Aw,{page:T})):_});M5.displayName="Link";var Ii=R.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:o=!1,style:l,to:u,viewTransition:d,children:f,...h},m){let y=yo(u,{relative:h.relative}),v=pn(),S=R.useContext(Gc),{navigator:b,basename:M}=R.useContext(bn),O=S!=null&&Bw(y)&&d===!0,j=b.encodeLocation?b.encodeLocation(y).pathname:y.pathname,T=v.pathname,C=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(T=T.toLowerCase(),C=C?C.toLowerCase():null,j=j.toLowerCase()),C&&M&&(C=oi(C,M)||C);const D=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let L=T===j||!o&&T.startsWith(j)&&T.charAt(D)==="/",P=C!=null&&(C===j||!o&&C.startsWith(j)&&C.charAt(j.length)==="/"),k={isActive:L,isPending:P,isTransitioning:O},_=L?e:void 0,$;typeof r=="function"?$=r(k):$=[r,L?"active":null,P?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let Y=typeof l=="function"?l(k):l;return R.createElement(M5,{...h,"aria-current":_,className:$,ref:m,style:Y,to:u,viewTransition:d},typeof f=="function"?f(k):f)});Ii.displayName="NavLink";var Dw=R.forwardRef(({discover:t="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:o,state:l,method:u=sc,action:d,onSubmit:f,relative:h,preventScrollReset:m,viewTransition:y,...v},S)=>{let b=Pw(),M=Nw(d,{relative:h}),O=u.toLowerCase()==="get"?"get":"post",j=typeof d=="string"&&E5.test(d),T=C=>{if(f&&f(C),C.defaultPrevented)return;C.preventDefault();let D=C.nativeEvent.submitter,L=(D==null?void 0:D.getAttribute("formmethod"))||u;b(D||C.currentTarget,{fetcherKey:e,method:L,navigate:i,replace:o,state:l,relative:h,preventScrollReset:m,viewTransition:y})};return R.createElement("form",{ref:S,method:O,action:M,onSubmit:r?f:T,...v,"data-discover":!j&&t==="render"?"true":void 0})});Dw.displayName="Form";function Hw(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function A5(t){let e=R.useContext(Dr);return Ge(e,Hw(t)),e}function Vw(t,{target:e,replace:i,state:r,preventScrollReset:o,relative:l,viewTransition:u}={}){let d=Cp(),f=pn(),h=yo(t,{relative:l});return R.useCallback(m=>{if(pw(m,e)){m.preventDefault();let y=i!==void 0?i:no(f)===no(h);d(t,{replace:y,state:r,preventScrollReset:o,relative:l,viewTransition:u})}},[f,d,h,i,r,e,t,o,l,u])}var kw=0,zw=()=>`__${String(++kw)}__`;function Pw(){let{router:t}=A5("useSubmit"),{basename:e}=R.useContext(bn),i=tw();return R.useCallback(async(r,o={})=>{let{action:l,method:u,encType:d,formData:f,body:h}=gw(r,e);if(o.navigate===!1){let m=o.fetcherKey||zw();await t.fetch(m,i,o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:h,formMethod:o.method||u,formEncType:o.encType||d,flushSync:o.flushSync})}else await t.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:h,formMethod:o.method||u,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[t,e,i])}function Nw(t,{relative:e}={}){let{basename:i}=R.useContext(bn),r=R.useContext(Sn);Ge(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),l={...yo(t||".",{relative:e})},u=pn();if(t==null){l.search=u.search;let d=new URLSearchParams(l.search),f=d.getAll("index");if(f.some(m=>m==="")){d.delete("index"),f.filter(y=>y).forEach(y=>d.append("index",y));let m=d.toString();l.search=m?`?${m}`:""}}return(!t||t===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(l.pathname=l.pathname==="/"?i:si([i,l.pathname])),no(l)}function Bw(t,{relative:e}={}){let i=R.useContext(x5);Ge(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=A5("useViewTransitionState"),o=yo(t,{relative:e});if(!i.isTransitioning)return!1;let l=oi(i.currentLocation.pathname,r)||i.currentLocation.pathname,u=oi(i.nextLocation.pathname,r)||i.nextLocation.pathname;return bc(o.pathname,u)!=null||bc(o.pathname,l)!=null}function $w(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function _w(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Uw=function(){function t(i){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(_w(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=$w(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},t}(),St="-ms-",Sc="-moz-",Me="-webkit-",j5="comm",jp="rule",Lp="decl",Iw="@import",L5="@keyframes",Gw="@layer",qw=Math.abs,Yc=String.fromCharCode,Yw=Object.assign;function Fw(t,e){return xt(t,0)^45?(((e<<2^xt(t,0))<<2^xt(t,1))<<2^xt(t,2))<<2^xt(t,3):0}function O5(t){return t.trim()}function Zw(t,e){return(t=e.exec(t))?t[0]:t}function Ae(t,e,i){return t.replace(e,i)}function O0(t,e){return t.indexOf(e)}function xt(t,e){return t.charCodeAt(e)|0}function io(t,e,i){return t.slice(e,i)}function On(t){return t.length}function Op(t){return t.length}function _l(t,e){return e.push(t),t}function Xw(t,e){return t.map(e).join("")}var Fc=1,Sr=1,R5=0,zt=0,nt=0,Vr="";function Zc(t,e,i,r,o,l,u){return{value:t,root:e,parent:i,type:r,props:o,children:l,line:Fc,column:Sr,length:u,return:""}}function $s(t,e){return Yw(Zc("",null,null,"",null,null,0),t,{length:-t.length},e)}function Kw(){return nt}function Ww(){return nt=zt>0?xt(Vr,--zt):0,Sr--,nt===10&&(Sr=1,Fc--),nt}function Zt(){return nt=zt<R5?xt(Vr,zt++):0,Sr++,nt===10&&(Sr=1,Fc++),nt}function kn(){return xt(Vr,zt)}function lc(){return zt}function vo(t,e){return io(Vr,t,e)}function ao(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function D5(t){return Fc=Sr=1,R5=On(Vr=t),zt=0,[]}function H5(t){return Vr="",t}function cc(t){return O5(vo(zt-1,R0(t===91?t+2:t===40?t+1:t)))}function Qw(t){for(;(nt=kn())&&nt<33;)Zt();return ao(t)>2||ao(nt)>3?"":" "}function Jw(t,e){for(;--e&&Zt()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return vo(t,lc()+(e<6&&kn()==32&&Zt()==32))}function R0(t){for(;Zt();)switch(nt){case t:return zt;case 34:case 39:t!==34&&t!==39&&R0(nt);break;case 40:t===41&&R0(t);break;case 92:Zt();break}return zt}function eb(t,e){for(;Zt()&&t+nt!==57;)if(t+nt===84&&kn()===47)break;return"/*"+vo(e,zt-1)+"*"+Yc(t===47?t:Zt())}function tb(t){for(;!ao(kn());)Zt();return vo(t,zt)}function nb(t){return H5(uc("",null,null,null,[""],t=D5(t),0,[0],t))}function uc(t,e,i,r,o,l,u,d,f){for(var h=0,m=0,y=u,v=0,S=0,b=0,M=1,O=1,j=1,T=0,C="",D=o,L=l,P=r,k=C;O;)switch(b=T,T=Zt()){case 40:if(b!=108&&xt(k,y-1)==58){O0(k+=Ae(cc(T),"&","&\f"),"&\f")!=-1&&(j=-1);break}case 34:case 39:case 91:k+=cc(T);break;case 9:case 10:case 13:case 32:k+=Qw(b);break;case 92:k+=Jw(lc()-1,7);continue;case 47:switch(kn()){case 42:case 47:_l(ib(eb(Zt(),lc()),e,i),f);break;default:k+="/"}break;case 123*M:d[h++]=On(k)*j;case 125*M:case 59:case 0:switch(T){case 0:case 125:O=0;case 59+m:j==-1&&(k=Ae(k,/\f/g,"")),S>0&&On(k)-y&&_l(S>32?l3(k+";",r,i,y-1):l3(Ae(k," ","")+";",r,i,y-2),f);break;case 59:k+=";";default:if(_l(P=o3(k,e,i,h,m,o,d,C,D=[],L=[],y),l),T===123)if(m===0)uc(k,e,P,P,D,l,y,d,L);else switch(v===99&&xt(k,3)===110?100:v){case 100:case 108:case 109:case 115:uc(t,P,P,r&&_l(o3(t,P,P,0,0,o,d,C,o,D=[],y),L),o,L,y,d,r?D:L);break;default:uc(k,P,P,P,[""],L,0,d,L)}}h=m=S=0,M=j=1,C=k="",y=u;break;case 58:y=1+On(k),S=b;default:if(M<1){if(T==123)--M;else if(T==125&&M++==0&&Ww()==125)continue}switch(k+=Yc(T),T*M){case 38:j=m>0?1:(k+="\f",-1);break;case 44:d[h++]=(On(k)-1)*j,j=1;break;case 64:kn()===45&&(k+=cc(Zt())),v=kn(),m=y=On(C=k+=tb(lc())),T++;break;case 45:b===45&&On(k)==2&&(M=0)}}return l}function o3(t,e,i,r,o,l,u,d,f,h,m){for(var y=o-1,v=o===0?l:[""],S=Op(v),b=0,M=0,O=0;b<r;++b)for(var j=0,T=io(t,y+1,y=qw(M=u[b])),C=t;j<S;++j)(C=O5(M>0?v[j]+" "+T:Ae(T,/&\f/g,v[j])))&&(f[O++]=C);return Zc(t,e,i,o===0?jp:d,f,h,m)}function ib(t,e,i){return Zc(t,e,i,j5,Yc(Kw()),io(t,2,-2),0)}function l3(t,e,i,r){return Zc(t,e,i,Lp,io(t,0,r),io(t,r+1,-1),r)}function vr(t,e){for(var i="",r=Op(t),o=0;o<r;o++)i+=e(t[o],o,t,e)||"";return i}function ab(t,e,i,r){switch(t.type){case Gw:if(t.children.length)break;case Iw:case Lp:return t.return=t.return||t.value;case j5:return"";case L5:return t.return=t.value+"{"+vr(t.children,r)+"}";case jp:t.value=t.props.join(",")}return On(i=vr(t.children,r))?t.return=t.value+"{"+i+"}":""}function rb(t){var e=Op(t);return function(i,r,o,l){for(var u="",d=0;d<e;d++)u+=t[d](i,r,o,l)||"";return u}}function sb(t){return function(e){e.root||(e=e.return)&&t(e)}}function ob(t){var e=Object.create(null);return function(i){return e[i]===void 0&&(e[i]=t(i)),e[i]}}var lb=function(e,i,r){for(var o=0,l=0;o=l,l=kn(),o===38&&l===12&&(i[r]=1),!ao(l);)Zt();return vo(e,zt)},cb=function(e,i){var r=-1,o=44;do switch(ao(o)){case 0:o===38&&kn()===12&&(i[r]=1),e[r]+=lb(zt-1,i,r);break;case 2:e[r]+=cc(o);break;case 4:if(o===44){e[++r]=kn()===58?"&\f":"",i[r]=e[r].length;break}default:e[r]+=Yc(o)}while(o=Zt());return e},ub=function(e,i){return H5(cb(D5(e),i))},c3=new WeakMap,db=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var i=e.value,r=e.parent,o=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&i.charCodeAt(0)!==58&&!c3.get(r))&&!o){c3.set(e,!0);for(var l=[],u=ub(i,l),d=r.props,f=0,h=0;f<u.length;f++)for(var m=0;m<d.length;m++,h++)e.props[h]=l[f]?u[f].replace(/&\f/g,d[m]):d[m]+" "+u[f]}}},fb=function(e){if(e.type==="decl"){var i=e.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(e.return="",e.value="")}};function V5(t,e){switch(Fw(t,e)){case 5103:return Me+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+t+Sc+t+St+t+t;case 6828:case 4268:return Me+t+St+t+t;case 6165:return Me+t+St+"flex-"+t+t;case 5187:return Me+t+Ae(t,/(\w+).+(:[^]+)/,Me+"box-$1$2"+St+"flex-$1$2")+t;case 5443:return Me+t+St+"flex-item-"+Ae(t,/flex-|-self/,"")+t;case 4675:return Me+t+St+"flex-line-pack"+Ae(t,/align-content|flex-|-self/,"")+t;case 5548:return Me+t+St+Ae(t,"shrink","negative")+t;case 5292:return Me+t+St+Ae(t,"basis","preferred-size")+t;case 6060:return Me+"box-"+Ae(t,"-grow","")+Me+t+St+Ae(t,"grow","positive")+t;case 4554:return Me+Ae(t,/([^-])(transform)/g,"$1"+Me+"$2")+t;case 6187:return Ae(Ae(Ae(t,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),t,"")+t;case 5495:case 3959:return Ae(t,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return Ae(Ae(t,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+St+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+t+t;case 4095:case 3583:case 4068:case 2532:return Ae(t,/(.+)-inline(.+)/,Me+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(On(t)-1-e>6)switch(xt(t,e+1)){case 109:if(xt(t,e+4)!==45)break;case 102:return Ae(t,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Sc+(xt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~O0(t,"stretch")?V5(Ae(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(xt(t,e+1)!==115)break;case 6444:switch(xt(t,On(t)-3-(~O0(t,"!important")&&10))){case 107:return Ae(t,":",":"+Me)+t;case 101:return Ae(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Me+(xt(t,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+St+"$2box$3")+t}break;case 5936:switch(xt(t,e+11)){case 114:return Me+t+St+Ae(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Me+t+St+Ae(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Me+t+St+Ae(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Me+t+St+t+t}return t}var pb=function(e,i,r,o){if(e.length>-1&&!e.return)switch(e.type){case Lp:e.return=V5(e.value,e.length);break;case L5:return vr([$s(e,{value:Ae(e.value,"@","@"+Me)})],o);case jp:if(e.length)return Xw(e.props,function(l){switch(Zw(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return vr([$s(e,{props:[Ae(l,/:(read-\w+)/,":"+Sc+"$1")]})],o);case"::placeholder":return vr([$s(e,{props:[Ae(l,/:(plac\w+)/,":"+Me+"input-$1")]}),$s(e,{props:[Ae(l,/:(plac\w+)/,":"+Sc+"$1")]}),$s(e,{props:[Ae(l,/:(plac\w+)/,St+"input-$1")]})],o)}return""})}},hb=[pb],mb=function(e){var i=e.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(M){var O=M.getAttribute("data-emotion");O.indexOf(" ")!==-1&&(document.head.appendChild(M),M.setAttribute("data-s",""))})}var o=e.stylisPlugins||hb,l={},u,d=[];u=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(M){for(var O=M.getAttribute("data-emotion").split(" "),j=1;j<O.length;j++)l[O[j]]=!0;d.push(M)});var f,h=[db,fb];{var m,y=[ab,sb(function(M){m.insert(M)})],v=rb(h.concat(o,y)),S=function(O){return vr(nb(O),v)};f=function(O,j,T,C){m=T,S(O?O+"{"+j.styles+"}":j.styles),C&&(b.inserted[j.name]=!0)}}var b={key:i,sheet:new Uw({key:i,container:u,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:f};return b.sheet.hydrate(d),b},jf={exports:{}},Re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u3;function gb(){if(u3)return Re;u3=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,i=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,o=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,u=t?Symbol.for("react.provider"):60109,d=t?Symbol.for("react.context"):60110,f=t?Symbol.for("react.async_mode"):60111,h=t?Symbol.for("react.concurrent_mode"):60111,m=t?Symbol.for("react.forward_ref"):60112,y=t?Symbol.for("react.suspense"):60113,v=t?Symbol.for("react.suspense_list"):60120,S=t?Symbol.for("react.memo"):60115,b=t?Symbol.for("react.lazy"):60116,M=t?Symbol.for("react.block"):60121,O=t?Symbol.for("react.fundamental"):60117,j=t?Symbol.for("react.responder"):60118,T=t?Symbol.for("react.scope"):60119;function C(L){if(typeof L=="object"&&L!==null){var P=L.$$typeof;switch(P){case e:switch(L=L.type,L){case f:case h:case r:case l:case o:case y:return L;default:switch(L=L&&L.$$typeof,L){case d:case m:case b:case S:case u:return L;default:return P}}case i:return P}}}function D(L){return C(L)===h}return Re.AsyncMode=f,Re.ConcurrentMode=h,Re.ContextConsumer=d,Re.ContextProvider=u,Re.Element=e,Re.ForwardRef=m,Re.Fragment=r,Re.Lazy=b,Re.Memo=S,Re.Portal=i,Re.Profiler=l,Re.StrictMode=o,Re.Suspense=y,Re.isAsyncMode=function(L){return D(L)||C(L)===f},Re.isConcurrentMode=D,Re.isContextConsumer=function(L){return C(L)===d},Re.isContextProvider=function(L){return C(L)===u},Re.isElement=function(L){return typeof L=="object"&&L!==null&&L.$$typeof===e},Re.isForwardRef=function(L){return C(L)===m},Re.isFragment=function(L){return C(L)===r},Re.isLazy=function(L){return C(L)===b},Re.isMemo=function(L){return C(L)===S},Re.isPortal=function(L){return C(L)===i},Re.isProfiler=function(L){return C(L)===l},Re.isStrictMode=function(L){return C(L)===o},Re.isSuspense=function(L){return C(L)===y},Re.isValidElementType=function(L){return typeof L=="string"||typeof L=="function"||L===r||L===h||L===l||L===o||L===y||L===v||typeof L=="object"&&L!==null&&(L.$$typeof===b||L.$$typeof===S||L.$$typeof===u||L.$$typeof===d||L.$$typeof===m||L.$$typeof===O||L.$$typeof===j||L.$$typeof===T||L.$$typeof===M)},Re.typeOf=C,Re}var d3;function xb(){return d3||(d3=1,jf.exports=gb()),jf.exports}var Lf,f3;function yb(){if(f3)return Lf;f3=1;var t=xb(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[t.ForwardRef]=r,l[t.Memo]=o;function u(b){return t.isMemo(b)?o:l[b.$$typeof]||e}var d=Object.defineProperty,f=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,v=Object.prototype;function S(b,M,O){if(typeof M!="string"){if(v){var j=y(M);j&&j!==v&&S(b,j,O)}var T=f(M);h&&(T=T.concat(h(M)));for(var C=u(b),D=u(M),L=0;L<T.length;++L){var P=T[L];if(!i[P]&&!(O&&O[P])&&!(D&&D[P])&&!(C&&C[P])){var k=m(M,P);try{d(b,P,k)}catch{}}}}return b}return Lf=S,Lf}yb();var vb=!0;function wb(t,e,i){var r="";return i.split(" ").forEach(function(o){t[o]!==void 0?e.push(t[o]+";"):o&&(r+=o+" ")}),r}var k5=function(e,i,r){var o=e.key+"-"+i.name;(r===!1||vb===!1)&&e.registered[o]===void 0&&(e.registered[o]=i.styles)},z5=function(e,i,r){k5(e,i,r);var o=e.key+"-"+i.name;if(e.inserted[i.name]===void 0){var l=i;do e.insert(i===l?"."+o:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function bb(t){for(var e=0,i,r=0,o=t.length;o>=4;++r,o-=4)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,e=(i&65535)*1540483477+((i>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Sb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cb=/[A-Z]|^ms/g,Tb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,P5=function(e){return e.charCodeAt(1)===45},p3=function(e){return e!=null&&typeof e!="boolean"},Of=ob(function(t){return P5(t)?t:t.replace(Cb,"-$&").toLowerCase()}),h3=function(e,i){switch(e){case"animation":case"animationName":if(typeof i=="string")return i.replace(Tb,function(r,o,l){return Rn={name:o,styles:l,next:Rn},o})}return Sb[e]!==1&&!P5(e)&&typeof i=="number"&&i!==0?i+"px":i};function ro(t,e,i){if(i==null)return"";var r=i;if(r.__emotion_styles!==void 0)return r;switch(typeof i){case"boolean":return"";case"object":{var o=i;if(o.anim===1)return Rn={name:o.name,styles:o.styles,next:Rn},o.name;var l=i;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)Rn={name:u.name,styles:u.styles,next:Rn},u=u.next;var d=l.styles+";";return d}return Eb(t,e,i)}case"function":{if(t!==void 0){var f=Rn,h=i(t);return Rn=f,ro(t,e,h)}break}}var m=i;return m}function Eb(t,e,i){var r="";if(Array.isArray(i))for(var o=0;o<i.length;o++)r+=ro(t,e,i[o])+";";else for(var l in i){var u=i[l];if(typeof u!="object"){var d=u;p3(d)&&(r+=Of(l)+":"+h3(l,d)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&e==null)for(var f=0;f<u.length;f++)p3(u[f])&&(r+=Of(l)+":"+h3(l,u[f])+";");else{var h=ro(t,e,u);switch(l){case"animation":case"animationName":{r+=Of(l)+":"+h+";";break}default:r+=l+"{"+h+"}"}}}return r}var m3=/label:\s*([^\s;{]+)\s*(;|$)/g,Rn;function Rp(t,e,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,o="";Rn=void 0;var l=t[0];if(l==null||l.raw===void 0)r=!1,o+=ro(i,e,l);else{var u=l;o+=u[0]}for(var d=1;d<t.length;d++)if(o+=ro(i,e,t[d]),r){var f=l;o+=f[d]}m3.lastIndex=0;for(var h="",m;(m=m3.exec(o))!==null;)h+="-"+m[1];var y=bb(o)+h;return{name:y,styles:o,next:Rn}}var Mb=function(e){return e()},N5=t3.useInsertionEffect?t3.useInsertionEffect:!1,Ab=N5||Mb,g3=N5||R.useLayoutEffect,B5=R.createContext(typeof HTMLElement<"u"?mb({key:"css"}):null);B5.Provider;var $5=function(e){return R.forwardRef(function(i,r){var o=R.useContext(B5);return e(i,o,r)})},_5=R.createContext({}),Dp={}.hasOwnProperty,D0="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",jb=function(e,i){var r={};for(var o in i)Dp.call(i,o)&&(r[o]=i[o]);return r[D0]=e,r},Lb=function(e){var i=e.cache,r=e.serialized,o=e.isStringTag;return k5(i,r,o),Ab(function(){return z5(i,r,o)}),null},Ob=$5(function(t,e,i){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var o=t[D0],l=[r],u="";typeof t.className=="string"?u=wb(e.registered,l,t.className):t.className!=null&&(u=t.className+" ");var d=Rp(l,void 0,R.useContext(_5));u+=e.key+"-"+d.name;var f={};for(var h in t)Dp.call(t,h)&&h!=="css"&&h!==D0&&(f[h]=t[h]);return f.className=u,i&&(f.ref=i),R.createElement(R.Fragment,null,R.createElement(Lb,{cache:e,serialized:d,isStringTag:typeof o=="string"}),R.createElement(o,f))}),Rb=Ob,x3=function(e,i){var r=arguments;if(i==null||!Dp.call(i,"css"))return R.createElement.apply(void 0,r);var o=r.length,l=new Array(o);l[0]=Rb,l[1]=jb(e,i);for(var u=2;u<o;u++)l[u]=r[u];return R.createElement.apply(null,l)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(x3||(x3={}));var Db=$5(function(t,e){var i=t.styles,r=Rp([i],void 0,R.useContext(_5)),o=R.useRef();return g3(function(){var l=e.key+"-global",u=new e.sheet.constructor({key:l,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),d=!1,f=document.querySelector('style[data-emotion="'+l+" "+r.name+'"]');return e.sheet.tags.length&&(u.before=e.sheet.tags[0]),f!==null&&(d=!0,f.setAttribute("data-emotion",l),u.hydrate([f])),o.current=[u,d],function(){u.flush()}},[e]),g3(function(){var l=o.current,u=l[0],d=l[1];if(d){l[1]=!1;return}if(r.next!==void 0&&z5(e,r.next,!0),u.tags.length){var f=u.tags[u.tags.length-1].nextElementSibling;u.before=f,u.flush()}e.insert("",r,u,!1)},[e,r.name]),null});function Hb(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return Rp(e)}const Vb="/assets/Geist-Regular-BCrLS6HJ.ttf",kb="/assets/Geist-Medium-C6X8vKEc.ttf",zb="/assets/BebasNeue-Regular-D2CONTwO.ttf",Pb="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",Nb=Hb`
  /* Font Awesome */
  @font-face {
    font-family: 'Geist Regular';
    src: url(${Vb}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Додано для кращого відображення шрифтів */
  }

  /* Helvetica */
  @font-face {
    font-family: 'Geist Medium';
    src: url(${kb}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bebas Neue Regular';
    src: url(${zb}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${Pb}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }


  :root {
	--black-500: #242424;
	--white: #fff;
	--blue-500: #3098ee;
	--white-500: rgba(255, 255, 255, 0.5);
	--white-320: rgba(173, 171, 171, 1);
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




  
`;var Vt=function(){return Vt=Object.assign||function(e){for(var i,r=1,o=arguments.length;r<o;r++){i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},Vt.apply(this,arguments)};function so(t,e,i){if(i||arguments.length===2)for(var r=0,o=e.length,l;r<o;r++)(l||!(r in e))&&(l||(l=Array.prototype.slice.call(e,0,r)),l[r]=e[r]);return t.concat(l||Array.prototype.slice.call(e))}var $e="-ms-",Zs="-moz-",De="-webkit-",U5="comm",Xc="rule",Hp="decl",Bb="@import",I5="@keyframes",$b="@layer",G5=Math.abs,Vp=String.fromCharCode,H0=Object.assign;function _b(t,e){return ft(t,0)^45?(((e<<2^ft(t,0))<<2^ft(t,1))<<2^ft(t,2))<<2^ft(t,3):0}function q5(t){return t.trim()}function ai(t,e){return(t=e.exec(t))?t[0]:t}function xe(t,e,i){return t.replace(e,i)}function dc(t,e,i){return t.indexOf(e,i)}function ft(t,e){return t.charCodeAt(e)|0}function Cr(t,e,i){return t.slice(e,i)}function Dn(t){return t.length}function Y5(t){return t.length}function Ys(t,e){return e.push(t),t}function Ub(t,e){return t.map(e).join("")}function y3(t,e){return t.filter(function(i){return!ai(i,e)})}var Kc=1,Tr=1,F5=0,fn=0,it=0,kr="";function Wc(t,e,i,r,o,l,u,d){return{value:t,root:e,parent:i,type:r,props:o,children:l,line:Kc,column:Tr,length:u,return:"",siblings:d}}function Pi(t,e){return H0(Wc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function lr(t){for(;t.root;)t=Pi(t.root,{children:[t]});Ys(t,t.siblings)}function Ib(){return it}function Gb(){return it=fn>0?ft(kr,--fn):0,Tr--,it===10&&(Tr=1,Kc--),it}function yn(){return it=fn<F5?ft(kr,fn++):0,Tr++,it===10&&(Tr=1,Kc++),it}function ga(){return ft(kr,fn)}function fc(){return fn}function Qc(t,e){return Cr(kr,t,e)}function V0(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qb(t){return Kc=Tr=1,F5=Dn(kr=t),fn=0,[]}function Yb(t){return kr="",t}function Rf(t){return q5(Qc(fn-1,k0(t===91?t+2:t===40?t+1:t)))}function Fb(t){for(;(it=ga())&&it<33;)yn();return V0(t)>2||V0(it)>3?"":" "}function Zb(t,e){for(;--e&&yn()&&!(it<48||it>102||it>57&&it<65||it>70&&it<97););return Qc(t,fc()+(e<6&&ga()==32&&yn()==32))}function k0(t){for(;yn();)switch(it){case t:return fn;case 34:case 39:t!==34&&t!==39&&k0(it);break;case 40:t===41&&k0(t);break;case 92:yn();break}return fn}function Xb(t,e){for(;yn()&&t+it!==57;)if(t+it===84&&ga()===47)break;return"/*"+Qc(e,fn-1)+"*"+Vp(t===47?t:yn())}function Kb(t){for(;!V0(ga());)yn();return Qc(t,fn)}function Wb(t){return Yb(pc("",null,null,null,[""],t=qb(t),0,[0],t))}function pc(t,e,i,r,o,l,u,d,f){for(var h=0,m=0,y=u,v=0,S=0,b=0,M=1,O=1,j=1,T=0,C="",D=o,L=l,P=r,k=C;O;)switch(b=T,T=yn()){case 40:if(b!=108&&ft(k,y-1)==58){dc(k+=xe(Rf(T),"&","&\f"),"&\f",G5(h?d[h-1]:0))!=-1&&(j=-1);break}case 34:case 39:case 91:k+=Rf(T);break;case 9:case 10:case 13:case 32:k+=Fb(b);break;case 92:k+=Zb(fc()-1,7);continue;case 47:switch(ga()){case 42:case 47:Ys(Qb(Xb(yn(),fc()),e,i,f),f);break;default:k+="/"}break;case 123*M:d[h++]=Dn(k)*j;case 125*M:case 59:case 0:switch(T){case 0:case 125:O=0;case 59+m:j==-1&&(k=xe(k,/\f/g,"")),S>0&&Dn(k)-y&&Ys(S>32?w3(k+";",r,i,y-1,f):w3(xe(k," ","")+";",r,i,y-2,f),f);break;case 59:k+=";";default:if(Ys(P=v3(k,e,i,h,m,o,d,C,D=[],L=[],y,l),l),T===123)if(m===0)pc(k,e,P,P,D,l,y,d,L);else switch(v===99&&ft(k,3)===110?100:v){case 100:case 108:case 109:case 115:pc(t,P,P,r&&Ys(v3(t,P,P,0,0,o,d,C,o,D=[],y,L),L),o,L,y,d,r?D:L);break;default:pc(k,P,P,P,[""],L,0,d,L)}}h=m=S=0,M=j=1,C=k="",y=u;break;case 58:y=1+Dn(k),S=b;default:if(M<1){if(T==123)--M;else if(T==125&&M++==0&&Gb()==125)continue}switch(k+=Vp(T),T*M){case 38:j=m>0?1:(k+="\f",-1);break;case 44:d[h++]=(Dn(k)-1)*j,j=1;break;case 64:ga()===45&&(k+=Rf(yn())),v=ga(),m=y=Dn(C=k+=Kb(fc())),T++;break;case 45:b===45&&Dn(k)==2&&(M=0)}}return l}function v3(t,e,i,r,o,l,u,d,f,h,m,y){for(var v=o-1,S=o===0?l:[""],b=Y5(S),M=0,O=0,j=0;M<r;++M)for(var T=0,C=Cr(t,v+1,v=G5(O=u[M])),D=t;T<b;++T)(D=q5(O>0?S[T]+" "+C:xe(C,/&\f/g,S[T])))&&(f[j++]=D);return Wc(t,e,i,o===0?Xc:d,f,h,m,y)}function Qb(t,e,i,r){return Wc(t,e,i,U5,Vp(Ib()),Cr(t,2,-2),0,r)}function w3(t,e,i,r,o){return Wc(t,e,i,Hp,Cr(t,0,r),Cr(t,r+1,-1),r,o)}function Z5(t,e,i){switch(_b(t,e)){case 5103:return De+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return De+t+t;case 4789:return Zs+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return De+t+Zs+t+$e+t+t;case 5936:switch(ft(t,e+11)){case 114:return De+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return De+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return De+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return De+t+$e+t+t;case 6165:return De+t+$e+"flex-"+t+t;case 5187:return De+t+xe(t,/(\w+).+(:[^]+)/,De+"box-$1$2"+$e+"flex-$1$2")+t;case 5443:return De+t+$e+"flex-item-"+xe(t,/flex-|-self/g,"")+(ai(t,/flex-|baseline/)?"":$e+"grid-row-"+xe(t,/flex-|-self/g,""))+t;case 4675:return De+t+$e+"flex-line-pack"+xe(t,/align-content|flex-|-self/g,"")+t;case 5548:return De+t+$e+xe(t,"shrink","negative")+t;case 5292:return De+t+$e+xe(t,"basis","preferred-size")+t;case 6060:return De+"box-"+xe(t,"-grow","")+De+t+$e+xe(t,"grow","positive")+t;case 4554:return De+xe(t,/([^-])(transform)/g,"$1"+De+"$2")+t;case 6187:return xe(xe(xe(t,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),t,"")+t;case 5495:case 3959:return xe(t,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return xe(xe(t,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+$e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+De+t+t;case 4200:if(!ai(t,/flex-|baseline/))return $e+"grid-column-align"+Cr(t,e)+t;break;case 2592:case 3360:return $e+xe(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(r,o){return e=o,ai(r.props,/grid-\w+-end/)})?~dc(t+(i=i[e].value),"span",0)?t:$e+xe(t,"-start","")+t+$e+"grid-row-span:"+(~dc(i,"span",0)?ai(i,/\d+/):+ai(i,/\d+/)-+ai(t,/\d+/))+";":$e+xe(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(r){return ai(r.props,/grid-\w+-start/)})?t:$e+xe(xe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return xe(t,/(.+)-inline(.+)/,De+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(t)-1-e>6)switch(ft(t,e+1)){case 109:if(ft(t,e+4)!==45)break;case 102:return xe(t,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+Zs+(ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~dc(t,"stretch",0)?Z5(xe(t,"stretch","fill-available"),e,i)+t:t}break;case 5152:case 5920:return xe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,u,d,f,h){return $e+o+":"+l+h+(u?$e+o+"-span:"+(d?f:+f-+l)+h:"")+t});case 4949:if(ft(t,e+6)===121)return xe(t,":",":"+De)+t;break;case 6444:switch(ft(t,ft(t,14)===45?18:11)){case 120:return xe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+De+(ft(t,14)===45?"inline-":"")+"box$3$1"+De+"$2$3$1"+$e+"$2box$3")+t;case 100:return xe(t,":",":"+$e)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return xe(t,"scroll-","scroll-snap-")+t}return t}function Cc(t,e){for(var i="",r=0;r<t.length;r++)i+=e(t[r],r,t,e)||"";return i}function Jb(t,e,i,r){switch(t.type){case $b:if(t.children.length)break;case Bb:case Hp:return t.return=t.return||t.value;case U5:return"";case I5:return t.return=t.value+"{"+Cc(t.children,r)+"}";case Xc:if(!Dn(t.value=t.props.join(",")))return""}return Dn(i=Cc(t.children,r))?t.return=t.value+"{"+i+"}":""}function eS(t){var e=Y5(t);return function(i,r,o,l){for(var u="",d=0;d<e;d++)u+=t[d](i,r,o,l)||"";return u}}function tS(t){return function(e){e.root||(e=e.return)&&t(e)}}function nS(t,e,i,r){if(t.length>-1&&!t.return)switch(t.type){case Hp:t.return=Z5(t.value,t.length,i);return;case I5:return Cc([Pi(t,{value:xe(t.value,"@","@"+De)})],r);case Xc:if(t.length)return Ub(i=t.props,function(o){switch(ai(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lr(Pi(t,{props:[xe(o,/:(read-\w+)/,":"+Zs+"$1")]})),lr(Pi(t,{props:[o]})),H0(t,{props:y3(i,r)});break;case"::placeholder":lr(Pi(t,{props:[xe(o,/:(plac\w+)/,":"+De+"input-$1")]})),lr(Pi(t,{props:[xe(o,/:(plac\w+)/,":"+Zs+"$1")]})),lr(Pi(t,{props:[xe(o,/:(plac\w+)/,$e+"input-$1")]})),lr(Pi(t,{props:[o]})),H0(t,{props:y3(i,r)});break}return""})}}var iS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yt={},Er=typeof process<"u"&&Yt!==void 0&&(Yt.REACT_APP_SC_ATTR||Yt.SC_ATTR)||"data-styled",X5="active",K5="data-styled-version",Jc="6.1.19",kp=`/*!sc*/
`,Tc=typeof window<"u"&&typeof document<"u",aS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==""?Yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.SC_DISABLE_SPEEDY!==void 0&&Yt.SC_DISABLE_SPEEDY!==""&&Yt.SC_DISABLE_SPEEDY!=="false"&&Yt.SC_DISABLE_SPEEDY),eu=Object.freeze([]),Mr=Object.freeze({});function rS(t,e,i){return i===void 0&&(i=Mr),t.theme!==i.theme&&t.theme||e||i.theme}var W5=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,oS=/(^-|-$)/g;function b3(t){return t.replace(sS,"-").replace(oS,"")}var lS=/(a)(d)/gi,Ul=52,S3=function(t){return String.fromCharCode(t+(t>25?39:97))};function z0(t){var e,i="";for(e=Math.abs(t);e>Ul;e=e/Ul|0)i=S3(e%Ul)+i;return(S3(e%Ul)+i).replace(lS,"$1-$2")}var Df,Q5=5381,pr=function(t,e){for(var i=e.length;i;)t=33*t^e.charCodeAt(--i);return t},J5=function(t){return pr(Q5,t)};function e6(t){return z0(J5(t)>>>0)}function cS(t){return t.displayName||t.name||"Component"}function Hf(t){return typeof t=="string"&&!0}var t6=typeof Symbol=="function"&&Symbol.for,n6=t6?Symbol.for("react.memo"):60115,uS=t6?Symbol.for("react.forward_ref"):60112,dS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i6={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pS=((Df={})[uS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Df[n6]=i6,Df);function C3(t){return("type"in(e=t)&&e.type.$$typeof)===n6?i6:"$$typeof"in t?pS[t.$$typeof]:dS;var e}var hS=Object.defineProperty,mS=Object.getOwnPropertyNames,T3=Object.getOwnPropertySymbols,gS=Object.getOwnPropertyDescriptor,xS=Object.getPrototypeOf,E3=Object.prototype;function a6(t,e,i){if(typeof e!="string"){if(E3){var r=xS(e);r&&r!==E3&&a6(t,r,i)}var o=mS(e);T3&&(o=o.concat(T3(e)));for(var l=C3(t),u=C3(e),d=0;d<o.length;++d){var f=o[d];if(!(f in fS||i&&i[f]||u&&f in u||l&&f in l)){var h=gS(e,f);try{hS(t,f,h)}catch{}}}}return t}function Ar(t){return typeof t=="function"}function zp(t){return typeof t=="object"&&"styledComponentId"in t}function pa(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function P0(t,e){if(t.length===0)return"";for(var i=t[0],r=1;r<t.length;r++)i+=t[r];return i}function oo(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function N0(t,e,i){if(i===void 0&&(i=!1),!i&&!oo(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=N0(t[r],e[r]);else if(oo(e))for(var r in e)t[r]=N0(t[r],e[r]);return t}function Pp(t,e){Object.defineProperty(t,"toString",{value:e})}function wo(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var yS=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var i=0,r=0;r<e;r++)i+=this.groupSizes[r];return i},t.prototype.insertRules=function(e,i){if(e>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;e>=l;)if((l<<=1)<0)throw wo(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),f=(u=0,i.length);u<f;u++)this.tag.insertRule(d,i[u])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var i=this.groupSizes[e],r=this.indexOfGroup(e),o=r+i;this.groupSizes[e]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var i="";if(e>=this.length||this.groupSizes[e]===0)return i;for(var r=this.groupSizes[e],o=this.indexOfGroup(e),l=o+r,u=o;u<l;u++)i+="".concat(this.tag.getRule(u)).concat(kp);return i},t}(),hc=new Map,Ec=new Map,mc=1,Il=function(t){if(hc.has(t))return hc.get(t);for(;Ec.has(mc);)mc++;var e=mc++;return hc.set(t,e),Ec.set(e,t),e},vS=function(t,e){mc=e+1,hc.set(t,e),Ec.set(e,t)},wS="style[".concat(Er,"][").concat(K5,'="').concat(Jc,'"]'),bS=new RegExp("^".concat(Er,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),SS=function(t,e,i){for(var r,o=i.split(","),l=0,u=o.length;l<u;l++)(r=o[l])&&t.registerName(e,r)},CS=function(t,e){for(var i,r=((i=e.textContent)!==null&&i!==void 0?i:"").split(kp),o=[],l=0,u=r.length;l<u;l++){var d=r[l].trim();if(d){var f=d.match(bS);if(f){var h=0|parseInt(f[1],10),m=f[2];h!==0&&(vS(m,h),SS(t,m,f[3]),t.getTag().insertRules(h,o)),o.length=0}else o.push(d)}}},M3=function(t){for(var e=document.querySelectorAll(wS),i=0,r=e.length;i<r;i++){var o=e[i];o&&o.getAttribute(Er)!==X5&&(CS(t,o),o.parentNode&&o.parentNode.removeChild(o))}};function TS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var r6=function(t){var e=document.head,i=t||e,r=document.createElement("style"),o=function(d){var f=Array.from(d.querySelectorAll("style[".concat(Er,"]")));return f[f.length-1]}(i),l=o!==void 0?o.nextSibling:null;r.setAttribute(Er,X5),r.setAttribute(K5,Jc);var u=TS();return u&&r.setAttribute("nonce",u),i.insertBefore(r,l),r},ES=function(){function t(e){this.element=r6(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var u=r[o];if(u.ownerNode===i)return u}throw wo(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,i){try{return this.sheet.insertRule(i,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var i=this.sheet.cssRules[e];return i&&i.cssText?i.cssText:""},t}(),MS=function(){function t(e){this.element=r6(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,i){if(e<=this.length&&e>=0){var r=document.createTextNode(i);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),AS=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,i){return e<=this.length&&(this.rules.splice(e,0,i),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),A3=Tc,jS={isServer:!Tc,useCSSOMInjection:!aS},s6=function(){function t(e,i,r){e===void 0&&(e=Mr),i===void 0&&(i={});var o=this;this.options=Vt(Vt({},jS),e),this.gs=i,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Tc&&A3&&(A3=!1,M3(this)),Pp(this,function(){return function(l){for(var u=l.getTag(),d=u.length,f="",h=function(y){var v=function(j){return Ec.get(j)}(y);if(v===void 0)return"continue";var S=l.names.get(v),b=u.getGroup(y);if(S===void 0||!S.size||b.length===0)return"continue";var M="".concat(Er,".g").concat(y,'[id="').concat(v,'"]'),O="";S!==void 0&&S.forEach(function(j){j.length>0&&(O+="".concat(j,","))}),f+="".concat(b).concat(M,'{content:"').concat(O,'"}').concat(kp)},m=0;m<d;m++)h(m);return f}(o)})}return t.registerId=function(e){return Il(e)},t.prototype.rehydrate=function(){!this.server&&Tc&&M3(this)},t.prototype.reconstructWithOptions=function(e,i){return i===void 0&&(i=!0),new t(Vt(Vt({},this.options),e),this.gs,i&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(i){var r=i.useCSSOMInjection,o=i.target;return i.isServer?new AS(o):r?new ES(o):new MS(o)}(this.options),new yS(e)));var e},t.prototype.hasNameForId=function(e,i){return this.names.has(e)&&this.names.get(e).has(i)},t.prototype.registerName=function(e,i){if(Il(e),this.names.has(e))this.names.get(e).add(i);else{var r=new Set;r.add(i),this.names.set(e,r)}},t.prototype.insertRules=function(e,i,r){this.registerName(e,i),this.getTag().insertRules(Il(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Il(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),LS=/&/g,OS=/^\s*\/\/.*$/gm;function o6(t,e){return t.map(function(i){return i.type==="rule"&&(i.value="".concat(e," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(e," ")),i.props=i.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=o6(i.children,e)),i})}function RS(t){var e,i,r,o=Mr,l=o.options,u=l===void 0?Mr:l,d=o.plugins,f=d===void 0?eu:d,h=function(v,S,b){return b.startsWith(i)&&b.endsWith(i)&&b.replaceAll(i,"").length>0?".".concat(e):v},m=f.slice();m.push(function(v){v.type===Xc&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(LS,i).replace(r,h))}),u.prefix&&m.push(nS),m.push(Jb);var y=function(v,S,b,M){S===void 0&&(S=""),b===void 0&&(b=""),M===void 0&&(M="&"),e=M,i=S,r=new RegExp("\\".concat(i,"\\b"),"g");var O=v.replace(OS,""),j=Wb(b||S?"".concat(b," ").concat(S," { ").concat(O," }"):O);u.namespace&&(j=o6(j,u.namespace));var T=[];return Cc(j,eS(m.concat(tS(function(C){return T.push(C)})))),T};return y.hash=f.length?f.reduce(function(v,S){return S.name||wo(15),pr(v,S.name)},Q5).toString():"",y}var DS=new s6,B0=RS(),l6=Le.createContext({shouldForwardProp:void 0,styleSheet:DS,stylis:B0});l6.Consumer;Le.createContext(void 0);function j3(){return R.useContext(l6)}var c6=function(){function t(e,i){var r=this;this.inject=function(o,l){l===void 0&&(l=B0);var u=r.name+l.hash;o.hasNameForId(r.id,u)||o.insertRules(r.id,u,l(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=i,Pp(this,function(){throw wo(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=B0),this.name+e.hash},t}(),HS=function(t){return t>="A"&&t<="Z"};function L3(t){for(var e="",i=0;i<t.length;i++){var r=t[i];if(i===1&&r==="-"&&t[0]==="-")return t;HS(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var u6=function(t){return t==null||t===!1||t===""},d6=function(t){var e,i,r=[];for(var o in t){var l=t[o];t.hasOwnProperty(o)&&!u6(l)&&(Array.isArray(l)&&l.isCss||Ar(l)?r.push("".concat(L3(o),":"),l,";"):oo(l)?r.push.apply(r,so(so(["".concat(o," {")],d6(l),!1),["}"],!1)):r.push("".concat(L3(o),": ").concat((e=o,(i=l)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||e in iS||e.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return r};function xa(t,e,i,r){if(u6(t))return[];if(zp(t))return[".".concat(t.styledComponentId)];if(Ar(t)){if(!Ar(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var o=t(e);return xa(o,e,i,r)}var l;return t instanceof c6?i?(t.inject(i,r),[t.getName(r)]):[t]:oo(t)?d6(t):Array.isArray(t)?Array.prototype.concat.apply(eu,t.map(function(u){return xa(u,e,i,r)})):[t.toString()]}function VS(t){for(var e=0;e<t.length;e+=1){var i=t[e];if(Ar(i)&&!zp(i))return!1}return!0}var kS=J5(Jc),zS=function(){function t(e,i,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&VS(e),this.componentId=i,this.baseHash=pr(kS,i),this.baseStyle=r,s6.registerId(i)}return t.prototype.generateAndInjectStyles=function(e,i,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,i,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=pa(o,this.staticRulesId);else{var l=P0(xa(this.rules,e,i,r)),u=z0(pr(this.baseHash,l)>>>0);if(!i.hasNameForId(this.componentId,u)){var d=r(l,".".concat(u),void 0,this.componentId);i.insertRules(this.componentId,u,d)}o=pa(o,u),this.staticRulesId=u}else{for(var f=pr(this.baseHash,r.hash),h="",m=0;m<this.rules.length;m++){var y=this.rules[m];if(typeof y=="string")h+=y;else if(y){var v=P0(xa(y,e,i,r));f=pr(f,v+m),h+=v}}if(h){var S=z0(f>>>0);i.hasNameForId(this.componentId,S)||i.insertRules(this.componentId,S,r(h,".".concat(S),void 0,this.componentId)),o=pa(o,S)}}return o},t}(),f6=Le.createContext(void 0);f6.Consumer;var Vf={};function PS(t,e,i){var r=zp(t),o=t,l=!Hf(t),u=e.attrs,d=u===void 0?eu:u,f=e.componentId,h=f===void 0?function(D,L){var P=typeof D!="string"?"sc":b3(D);Vf[P]=(Vf[P]||0)+1;var k="".concat(P,"-").concat(e6(Jc+P+Vf[P]));return L?"".concat(L,"-").concat(k):k}(e.displayName,e.parentComponentId):f,m=e.displayName,y=m===void 0?function(D){return Hf(D)?"styled.".concat(D):"Styled(".concat(cS(D),")")}(t):m,v=e.displayName&&e.componentId?"".concat(b3(e.displayName),"-").concat(e.componentId):e.componentId||h,S=r&&o.attrs?o.attrs.concat(d).filter(Boolean):d,b=e.shouldForwardProp;if(r&&o.shouldForwardProp){var M=o.shouldForwardProp;if(e.shouldForwardProp){var O=e.shouldForwardProp;b=function(D,L){return M(D,L)&&O(D,L)}}else b=M}var j=new zS(i,v,r?o.componentStyle:void 0);function T(D,L){return function(P,k,_){var $=P.attrs,Y=P.componentStyle,F=P.defaultProps,te=P.foldedComponentIds,ie=P.styledComponentId,oe=P.target,re=Le.useContext(f6),B=j3(),K=P.shouldForwardProp||B.shouldForwardProp,W=rS(k,re,F)||Mr,ee=function(we,de,st){for(var Oe,yt=Vt(Vt({},de),{className:void 0,theme:st}),qi=0;qi<we.length;qi+=1){var $n=Ar(Oe=we[qi])?Oe(yt):Oe;for(var Wt in $n)yt[Wt]=Wt==="className"?pa(yt[Wt],$n[Wt]):Wt==="style"?Vt(Vt({},yt[Wt]),$n[Wt]):$n[Wt]}return de.className&&(yt.className=pa(yt.className,de.className)),yt}($,k,W),H=ee.as||oe,Z={};for(var ne in ee)ee[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&ee.theme===W||(ne==="forwardedAs"?Z.as=ee.forwardedAs:K&&!K(ne,H)||(Z[ne]=ee[ne]));var ae=function(we,de){var st=j3(),Oe=we.generateAndInjectStyles(de,st.styleSheet,st.stylis);return Oe}(Y,ee),ce=pa(te,ie);return ae&&(ce+=" "+ae),ee.className&&(ce+=" "+ee.className),Z[Hf(H)&&!W5.has(H)?"class":"className"]=ce,_&&(Z.ref=_),R.createElement(H,Z)}(C,D,L)}T.displayName=y;var C=Le.forwardRef(T);return C.attrs=S,C.componentStyle=j,C.displayName=y,C.shouldForwardProp=b,C.foldedComponentIds=r?pa(o.foldedComponentIds,o.styledComponentId):"",C.styledComponentId=v,C.target=r?o.target:t,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=r?function(L){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var _=0,$=P;_<$.length;_++)N0(L,$[_],!0);return L}({},o.defaultProps,D):D}}),Pp(C,function(){return".".concat(C.styledComponentId)}),l&&a6(C,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function O3(t,e){for(var i=[t[0]],r=0,o=e.length;r<o;r+=1)i.push(e[r],t[r+1]);return i}var R3=function(t){return Object.assign(t,{isCss:!0})};function zr(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(Ar(t)||oo(t))return R3(xa(O3(eu,so([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?xa(r):R3(xa(O3(r,e)))}function $0(t,e,i){if(i===void 0&&(i=Mr),!e)throw wo(1,e);var r=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return t(e,i,zr.apply(void 0,so([o],l,!1)))};return r.attrs=function(o){return $0(t,e,Vt(Vt({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return $0(t,e,Vt(Vt({},i),o))},r}var p6=function(t){return $0(PS,t)},E=p6;W5.forEach(function(t){E[t]=p6(t)});function bo(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var r=P0(zr.apply(void 0,so([t],e,!1))),o=e6(r);return new c6(o,r)}const NS=E.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: all 180ms ease;
  will-change: transform;
  padding: 10px;
  ${({$isScrolled:t})=>t&&zr`
      background: rgba(0, 0, 0, 0.39);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    `}
  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`,BS=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  /* padding: 0 10px; */

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    padding: 0 40px;
  }
`,$S=E(Ii)`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 1001;

  img {
    height: 32px;
    width: auto;
    filter: ${({$overlayOpen:t,$darkMode:e})=>t||e?"brightness(0)":"brightness(0) invert(1)"}; // Білий колір на світлому фоні
    transition: filter 0.3s ease-in-out;

    @media (min-width: 768px) {
      height: 40px;
    }
  }
`,_S=E.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1440px) {
    gap: 40px;
  }
`,_s=E.li`
  position: relative;
`,Us=E(Ii)`
  color: ${({$overlayOpen:t,$darkMode:e})=>t||e?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  transition: color 0.3s ease-in-out;
  position: relative;

  &:hover {
    color: ${({$overlayOpen:t,$darkMode:e})=>t||e?"#555555":"#CCCCCC"}; // Світло-сірий на світлому фоні
  }

  &.active {
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({$overlayOpen:t,$darkMode:e})=>t||e?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
    }
  }
`,D3=E.div`
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
`,Gl=E.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
  }
`,Vi=E.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;
    line-height: 125%;
    color: ${({$overlayOpen:t,$darkMode:e})=>t||e?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
    width: max-content;
    transition: all 0.3s ease;

    &:hover {
      color: ${({$overlayOpen:t,$darkMode:e})=>t||e?"#555555":"#CCCCCC"}; // Світло-сірий на світлому фоні
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
      color: ${({$overlayOpen:t,$darkMode:e})=>t||e?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
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
`,US=E.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,h6=E.button`
display: none;
 @media screen and (min-width: 768px) {


  background: transparent;
  border: 1px solid
    ${({$overlayOpen:t,$darkMode:e})=>t||e?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
  color: ${({$overlayOpen:t,$darkMode:e})=>t||e?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  &:hover {
    background: ${({$overlayOpen:t,$darkMode:e})=>t||e?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
    color: ${({$overlayOpen:t,$darkMode:e})=>t||e?"#FFFFFF":"#000000"}; // Чорний колір на світлому фоні
  }

  a {
    color: inherit;
    text-decoration: none;
  }
   }
`;var ql={},H3;function IS(){if(H3)return ql;H3=1,ql.match=l,ql.parse=u;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,e=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,r=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function l(m,y){return u(m).some(function(v){var S=v.inverse,b=v.type==="all"||y.type===v.type;if(b&&S||!(b||S))return!1;var M=v.expressions.every(function(O){var j=O.feature,T=O.modifier,C=O.value,D=y[j];if(!D)return!1;switch(j){case"orientation":case"scan":return D.toLowerCase()===C.toLowerCase();case"width":case"height":case"device-width":case"device-height":C=h(C),D=h(D);break;case"resolution":C=f(C),D=f(D);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":C=d(C),D=d(D);break;case"grid":case"color":case"color-index":case"monochrome":C=parseInt(C,10)||1,D=parseInt(D,10)||0;break}switch(T){case"min":return D>=C;case"max":return D<=C;default:return D===C}});return M&&!S||!M&&S})}function u(m){return m.split(",").map(function(y){y=y.trim();var v=y.match(t),S=v[1],b=v[2],M=v[3]||"",O={};return O.inverse=!!S&&S.toLowerCase()==="not",O.type=b?b.toLowerCase():"all",M=M.match(/\([^\)]+\)/g)||[],O.expressions=M.map(function(j){var T=j.match(e),C=T[1].toLowerCase().match(i);return{modifier:C[1],feature:C[2],value:T[2]}}),O})}function d(m){var y=Number(m),v;return y||(v=m.match(/^(\d+)\s*\/\s*(\d+)$/),y=v[1]/v[2]),y}function f(m){var y=parseFloat(m),v=String(m).match(o)[1];switch(v){case"dpcm":return y/2.54;case"dppx":return y*96;default:return y}}function h(m){var y=parseFloat(m),v=String(m).match(r)[1];switch(v){case"em":return y*16;case"rem":return y*16;case"cm":return y*96/2.54;case"mm":return y*96/2.54/10;case"in":return y*96;case"pt":return y*72;case"pc":return y*72/12;default:return y}}return ql}var kf,V3;function GS(){if(V3)return kf;V3=1;var t=IS().match,e=typeof window<"u"?window.matchMedia:null;function i(o,l,u){var d=this,f;e&&!u&&(f=e.call(window,o)),f?(this.matches=f.matches,this.media=f.media,f.addListener(y)):(this.matches=t(o,l),this.media=o),this.addListener=h,this.removeListener=m,this.dispose=v;function h(S){f&&f.addListener(S)}function m(S){f&&f.removeListener(S)}function y(S){d.matches=S.matches,d.media=S.media}function v(){f&&f.removeListener(y)}}function r(o,l,u){return new i(o,l,u)}return kf=r,kf}var qS=GS();const YS=Ic(qS);var FS=/[A-Z]/g,ZS=/^ms-/,zf={};function XS(t){return"-"+t.toLowerCase()}function m6(t){if(zf.hasOwnProperty(t))return zf[t];var e=t.replace(FS,XS);return zf[t]=ZS.test(e)?"-"+e:e}function KS(t,e){if(t===e)return!0;if(!t||!e)return!1;const i=Object.keys(t),r=Object.keys(e),o=i.length;if(r.length!==o)return!1;for(let l=0;l<o;l++){const u=i[l];if(t[u]!==e[u]||!Object.prototype.hasOwnProperty.call(e,u))return!1}return!0}var Pf={exports:{}},Nf,k3;function WS(){if(k3)return Nf;k3=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Nf=t,Nf}var Bf,z3;function QS(){if(z3)return Bf;z3=1;var t=WS();function e(){}function i(){}return i.resetWarningCache=e,Bf=function(){function r(u,d,f,h,m,y){if(y!==t){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function o(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:e};return l.PropTypes=l,l},Bf}var P3;function JS(){return P3||(P3=1,Pf.exports=QS()()),Pf.exports}var eC=JS();const je=Ic(eC),At=je.oneOfType([je.string,je.number]),g6={all:je.bool,grid:je.bool,aural:je.bool,braille:je.bool,handheld:je.bool,print:je.bool,projection:je.bool,screen:je.bool,tty:je.bool,tv:je.bool,embossed:je.bool},tC={orientation:je.oneOf(["portrait","landscape"]),scan:je.oneOf(["progressive","interlace"]),aspectRatio:je.string,deviceAspectRatio:je.string,height:At,deviceHeight:At,width:At,deviceWidth:At,color:je.bool,colorIndex:je.bool,monochrome:je.bool,resolution:At,type:Object.keys(g6)},{type:az,...nC}=tC,iC={minAspectRatio:je.string,maxAspectRatio:je.string,minDeviceAspectRatio:je.string,maxDeviceAspectRatio:je.string,minHeight:At,maxHeight:At,minDeviceHeight:At,maxDeviceHeight:At,minWidth:At,maxWidth:At,minDeviceWidth:At,maxDeviceWidth:At,minColor:je.number,maxColor:je.number,minColorIndex:je.number,maxColorIndex:je.number,minMonochrome:je.number,maxMonochrome:je.number,minResolution:At,maxResolution:At,...nC},aC={...g6,...iC};var rC={all:aC};const sC=t=>`not ${t}`,oC=(t,e)=>{const i=m6(t);return typeof e=="number"&&(e=`${e}px`),e===!0?i:e===!1?sC(i):`(${i}: ${e})`},lC=t=>t.join(" and "),cC=t=>{const e=[];return Object.keys(rC.all).forEach(i=>{const r=t[i];r!=null&&e.push(oC(i,r))}),lC(e)},uC=R.createContext(void 0),dC=t=>t.query||cC(t),N3=t=>t?Object.keys(t).reduce((i,r)=>(i[m6(r)]=t[r],i),{}):void 0,x6=()=>{const t=R.useRef(!1);return R.useEffect(()=>{t.current=!0},[]),t.current},fC=t=>{const e=R.useContext(uC),i=()=>N3(t)||N3(e),[r,o]=R.useState(i);return R.useEffect(()=>{const l=i();KS(r,l)||o(l)},[t,e]),r},pC=t=>{const e=()=>dC(t),[i,r]=R.useState(e);return R.useEffect(()=>{const o=e();i!==o&&r(o)},[t]),i},hC=(t,e)=>{const i=()=>YS(t,e||{},!!e),[r,o]=R.useState(i),l=x6();return R.useEffect(()=>{if(l){const u=i();return o(u),()=>{u&&u.dispose()}}},[t,e]),r},mC=t=>{const[e,i]=R.useState(t.matches);return R.useEffect(()=>{const r=o=>{i(o.matches)};return t.addListener(r),i(t.matches),()=>{t.removeListener(r)}},[t]),e},_e=(t,e,i)=>{const r=fC(e),o=pC(t);if(!o)throw new Error("Invalid or missing MediaQuery!");const l=hC(o,r),u=mC(l);return x6(),R.useEffect(()=>{},[u]),R.useEffect(()=>()=>{l&&l.dispose()},[]),u},Np=R.createContext({});function Bp(t){const e=R.useRef(null);return e.current===null&&(e.current=t()),e.current}const $p=typeof window<"u",y6=$p?R.useLayoutEffect:R.useEffect,tu=R.createContext(null);function _p(t,e){t.indexOf(e)===-1&&t.push(e)}function Up(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}const li=(t,e,i)=>i>e?e:i<t?t:i;let Ip=()=>{};const ci={},v6=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function w6(t){return typeof t=="object"&&t!==null}const b6=t=>/^0[^.\s]+$/u.test(t);function Gp(t){let e;return()=>(e===void 0&&(e=t()),e)}const un=t=>t,gC=(t,e)=>i=>e(t(i)),So=(...t)=>t.reduce(gC),lo=(t,e,i)=>{const r=e-t;return r===0?1:(i-t)/r};class qp{constructor(){this.subscriptions=[]}add(e){return _p(this.subscriptions,e),()=>Up(this.subscriptions,e)}notify(e,i,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,i,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,i,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const zn=t=>t*1e3,Pn=t=>t/1e3;function S6(t,e){return e?t*(1e3/e):0}const C6=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,xC=1e-7,yC=12;function vC(t,e,i,r,o){let l,u,d=0;do u=e+(i-e)/2,l=C6(u,r,o)-t,l>0?i=u:e=u;while(Math.abs(l)>xC&&++d<yC);return u}function Co(t,e,i,r){if(t===e&&i===r)return un;const o=l=>vC(l,0,1,t,i);return l=>l===0||l===1?l:C6(o(l),e,r)}const T6=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,E6=t=>e=>1-t(1-e),M6=Co(.33,1.53,.69,.99),Yp=E6(M6),A6=T6(Yp),j6=t=>(t*=2)<1?.5*Yp(t):.5*(2-Math.pow(2,-10*(t-1))),Fp=t=>1-Math.sin(Math.acos(t)),L6=E6(Fp),O6=T6(Fp),wC=Co(.42,0,1,1),bC=Co(0,0,.58,1),R6=Co(.42,0,.58,1),SC=t=>Array.isArray(t)&&typeof t[0]!="number",D6=t=>Array.isArray(t)&&typeof t[0]=="number",CC={linear:un,easeIn:wC,easeInOut:R6,easeOut:bC,circIn:Fp,circInOut:O6,circOut:L6,backIn:Yp,backInOut:A6,backOut:M6,anticipate:j6},TC=t=>typeof t=="string",B3=t=>{if(D6(t)){Ip(t.length===4);const[e,i,r,o]=t;return Co(e,i,r,o)}else if(TC(t))return CC[t];return t},Yl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function EC(t,e){let i=new Set,r=new Set,o=!1,l=!1;const u=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function f(m){u.has(m)&&(h.schedule(m),t()),m(d)}const h={schedule:(m,y=!1,v=!1)=>{const b=v&&o?i:r;return y&&u.add(m),b.has(m)||b.add(m),m},cancel:m=>{r.delete(m),u.delete(m)},process:m=>{if(d=m,o){l=!0;return}o=!0,[i,r]=[r,i],i.forEach(f),i.clear(),o=!1,l&&(l=!1,h.process(m))}};return h}const MC=40;function H6(t,e){let i=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>i=!0,u=Yl.reduce((C,D)=>(C[D]=EC(l),C),{}),{setup:d,read:f,resolveKeyframes:h,preUpdate:m,update:y,preRender:v,render:S,postRender:b}=u,M=()=>{const C=ci.useManualTiming?o.timestamp:performance.now();i=!1,ci.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(C-o.timestamp,MC),1)),o.timestamp=C,o.isProcessing=!0,d.process(o),f.process(o),h.process(o),m.process(o),y.process(o),v.process(o),S.process(o),b.process(o),o.isProcessing=!1,i&&e&&(r=!1,t(M))},O=()=>{i=!0,r=!0,o.isProcessing||t(M)};return{schedule:Yl.reduce((C,D)=>{const L=u[D];return C[D]=(P,k=!1,_=!1)=>(i||O(),L.schedule(P,k,_)),C},{}),cancel:C=>{for(let D=0;D<Yl.length;D++)u[Yl[D]].cancel(C)},state:o,steps:u}}const{schedule:Ie,cancel:$i,state:gt,steps:$f}=H6(typeof requestAnimationFrame<"u"?requestAnimationFrame:un,!0);let gc;function AC(){gc=void 0}const kt={now:()=>(gc===void 0&&kt.set(gt.isProcessing||ci.useManualTiming?gt.timestamp:performance.now()),gc),set:t=>{gc=t,queueMicrotask(AC)}},V6=t=>e=>typeof e=="string"&&e.startsWith(t),Zp=V6("--"),jC=V6("var(--"),Xp=t=>jC(t)?LC.test(t.split("/*")[0].trim()):!1,LC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Pr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},co={...Pr,transform:t=>li(0,1,t)},Fl={...Pr,default:1},Xs=t=>Math.round(t*1e5)/1e5,Kp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function OC(t){return t==null}const RC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wp=(t,e)=>i=>!!(typeof i=="string"&&RC.test(i)&&i.startsWith(t)||e&&!OC(i)&&Object.prototype.hasOwnProperty.call(i,e)),k6=(t,e,i)=>r=>{if(typeof r!="string")return r;const[o,l,u,d]=r.match(Kp);return{[t]:parseFloat(o),[e]:parseFloat(l),[i]:parseFloat(u),alpha:d!==void 0?parseFloat(d):1}},DC=t=>li(0,255,t),_f={...Pr,transform:t=>Math.round(DC(t))},ha={test:Wp("rgb","red"),parse:k6("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:r=1})=>"rgba("+_f.transform(t)+", "+_f.transform(e)+", "+_f.transform(i)+", "+Xs(co.transform(r))+")"};function HC(t){let e="",i="",r="",o="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),r=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),r=t.substring(3,4),o=t.substring(4,5),e+=e,i+=i,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const _0={test:Wp("#"),parse:HC,transform:ha.transform},To=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Ni=To("deg"),Nn=To("%"),he=To("px"),VC=To("vh"),kC=To("vw"),$3={...Nn,parse:t=>Nn.parse(t)/100,transform:t=>Nn.transform(t*100)},hr={test:Wp("hsl","hue"),parse:k6("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:r=1})=>"hsla("+Math.round(t)+", "+Nn.transform(Xs(e))+", "+Nn.transform(Xs(i))+", "+Xs(co.transform(r))+")"},tt={test:t=>ha.test(t)||_0.test(t)||hr.test(t),parse:t=>ha.test(t)?ha.parse(t):hr.test(t)?hr.parse(t):_0.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ha.transform(t):hr.transform(t),getAnimatableNone:t=>{const e=tt.parse(t);return e.alpha=0,tt.transform(e)}},zC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function PC(t){var e,i;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Kp))==null?void 0:e.length)||0)+(((i=t.match(zC))==null?void 0:i.length)||0)>0}const z6="number",P6="color",NC="var",BC="var(",_3="${}",$C=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function uo(t){const e=t.toString(),i=[],r={color:[],number:[],var:[]},o=[];let l=0;const d=e.replace($C,f=>(tt.test(f)?(r.color.push(l),o.push(P6),i.push(tt.parse(f))):f.startsWith(BC)?(r.var.push(l),o.push(NC),i.push(f)):(r.number.push(l),o.push(z6),i.push(parseFloat(f))),++l,_3)).split(_3);return{values:i,split:d,indexes:r,types:o}}function N6(t){return uo(t).values}function B6(t){const{split:e,types:i}=uo(t),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const d=i[u];d===z6?l+=Xs(o[u]):d===P6?l+=tt.transform(o[u]):l+=o[u]}return l}}const _C=t=>typeof t=="number"?0:tt.test(t)?tt.getAnimatableNone(t):t;function UC(t){const e=N6(t);return B6(t)(e.map(_C))}const _i={test:PC,parse:N6,createTransformer:B6,getAnimatableNone:UC};function Uf(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function IC({hue:t,saturation:e,lightness:i,alpha:r}){t/=360,e/=100,i/=100;let o=0,l=0,u=0;if(!e)o=l=u=i;else{const d=i<.5?i*(1+e):i+e-i*e,f=2*i-d;o=Uf(f,d,t+1/3),l=Uf(f,d,t),u=Uf(f,d,t-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Mc(t,e){return i=>i>0?e:t}const Ye=(t,e,i)=>t+(e-t)*i,If=(t,e,i)=>{const r=t*t,o=i*(e*e-r)+r;return o<0?0:Math.sqrt(o)},GC=[_0,ha,hr],qC=t=>GC.find(e=>e.test(t));function U3(t){const e=qC(t);if(!e)return!1;let i=e.parse(t);return e===hr&&(i=IC(i)),i}const I3=(t,e)=>{const i=U3(t),r=U3(e);if(!i||!r)return Mc(t,e);const o={...i};return l=>(o.red=If(i.red,r.red,l),o.green=If(i.green,r.green,l),o.blue=If(i.blue,r.blue,l),o.alpha=Ye(i.alpha,r.alpha,l),ha.transform(o))},U0=new Set(["none","hidden"]);function YC(t,e){return U0.has(t)?i=>i<=0?t:e:i=>i>=1?e:t}function FC(t,e){return i=>Ye(t,e,i)}function Qp(t){return typeof t=="number"?FC:typeof t=="string"?Xp(t)?Mc:tt.test(t)?I3:KC:Array.isArray(t)?$6:typeof t=="object"?tt.test(t)?I3:ZC:Mc}function $6(t,e){const i=[...t],r=i.length,o=t.map((l,u)=>Qp(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)i[u]=o[u](l);return i}}function ZC(t,e){const i={...t,...e},r={};for(const o in i)t[o]!==void 0&&e[o]!==void 0&&(r[o]=Qp(t[o])(t[o],e[o]));return o=>{for(const l in r)i[l]=r[l](o);return i}}function XC(t,e){const i=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],u=t.indexes[l][r[l]],d=t.values[u]??0;i[o]=d,r[l]++}return i}const KC=(t,e)=>{const i=_i.createTransformer(e),r=uo(t),o=uo(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?U0.has(t)&&!o.values.length||U0.has(e)&&!r.values.length?YC(t,e):So($6(XC(r,o),o.values),i):Mc(t,e)};function _6(t,e,i){return typeof t=="number"&&typeof e=="number"&&typeof i=="number"?Ye(t,e,i):Qp(t)(t,e)}const WC=t=>{const e=({timestamp:i})=>t(i);return{start:(i=!0)=>Ie.update(e,i),stop:()=>$i(e),now:()=>gt.isProcessing?gt.timestamp:kt.now()}},U6=(t,e,i=10)=>{let r="";const o=Math.max(Math.round(e/i),2);for(let l=0;l<o;l++)r+=Math.round(t(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Ac=2e4;function Jp(t){let e=0;const i=50;let r=t.next(e);for(;!r.done&&e<Ac;)e+=i,r=t.next(e);return e>=Ac?1/0:e}function QC(t,e=100,i){const r=i({...t,keyframes:[0,e]}),o=Math.min(Jp(r),Ac);return{type:"keyframes",ease:l=>r.next(o*l).value/e,duration:Pn(o)}}const JC=5;function I6(t,e,i){const r=Math.max(e-JC,0);return S6(i-t(r),e-r)}const Xe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Gf=.001;function eT({duration:t=Xe.duration,bounce:e=Xe.bounce,velocity:i=Xe.velocity,mass:r=Xe.mass}){let o,l,u=1-e;u=li(Xe.minDamping,Xe.maxDamping,u),t=li(Xe.minDuration,Xe.maxDuration,Pn(t)),u<1?(o=h=>{const m=h*u,y=m*t,v=m-i,S=I0(h,u),b=Math.exp(-y);return Gf-v/S*b},l=h=>{const y=h*u*t,v=y*i+i,S=Math.pow(u,2)*Math.pow(h,2)*t,b=Math.exp(-y),M=I0(Math.pow(h,2),u);return(-o(h)+Gf>0?-1:1)*((v-S)*b)/M}):(o=h=>{const m=Math.exp(-h*t),y=(h-i)*t+1;return-Gf+m*y},l=h=>{const m=Math.exp(-h*t),y=(i-h)*(t*t);return m*y});const d=5/t,f=nT(o,l,d);if(t=zn(t),isNaN(f))return{stiffness:Xe.stiffness,damping:Xe.damping,duration:t};{const h=Math.pow(f,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:t}}}const tT=12;function nT(t,e,i){let r=i;for(let o=1;o<tT;o++)r=r-t(r)/e(r);return r}function I0(t,e){return t*Math.sqrt(1-e*e)}const iT=["duration","bounce"],aT=["stiffness","damping","mass"];function G3(t,e){return e.some(i=>t[i]!==void 0)}function rT(t){let e={velocity:Xe.velocity,stiffness:Xe.stiffness,damping:Xe.damping,mass:Xe.mass,isResolvedFromDuration:!1,...t};if(!G3(t,aT)&&G3(t,iT))if(t.visualDuration){const i=t.visualDuration,r=2*Math.PI/(i*1.2),o=r*r,l=2*li(.05,1,1-(t.bounce||0))*Math.sqrt(o);e={...e,mass:Xe.mass,stiffness:o,damping:l}}else{const i=eT(t);e={...e,...i,mass:Xe.mass},e.isResolvedFromDuration=!0}return e}function jc(t=Xe.visualDuration,e=Xe.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:o}=i;const l=i.keyframes[0],u=i.keyframes[i.keyframes.length-1],d={done:!1,value:l},{stiffness:f,damping:h,mass:m,duration:y,velocity:v,isResolvedFromDuration:S}=rT({...i,velocity:-Pn(i.velocity||0)}),b=v||0,M=h/(2*Math.sqrt(f*m)),O=u-l,j=Pn(Math.sqrt(f/m)),T=Math.abs(O)<5;r||(r=T?Xe.restSpeed.granular:Xe.restSpeed.default),o||(o=T?Xe.restDelta.granular:Xe.restDelta.default);let C;if(M<1){const L=I0(j,M);C=P=>{const k=Math.exp(-M*j*P);return u-k*((b+M*j*O)/L*Math.sin(L*P)+O*Math.cos(L*P))}}else if(M===1)C=L=>u-Math.exp(-j*L)*(O+(b+j*O)*L);else{const L=j*Math.sqrt(M*M-1);C=P=>{const k=Math.exp(-M*j*P),_=Math.min(L*P,300);return u-k*((b+M*j*O)*Math.sinh(_)+L*O*Math.cosh(_))/L}}const D={calculatedDuration:S&&y||null,next:L=>{const P=C(L);if(S)d.done=L>=y;else{let k=L===0?b:0;M<1&&(k=L===0?zn(b):I6(C,L,P));const _=Math.abs(k)<=r,$=Math.abs(u-P)<=o;d.done=_&&$}return d.value=d.done?u:P,d},toString:()=>{const L=Math.min(Jp(D),Ac),P=U6(k=>D.next(L*k).value,L,30);return L+"ms "+P},toTransition:()=>{}};return D}jc.applyToOptions=t=>{const e=QC(t,100,jc);return t.ease=e.ease,t.duration=zn(e.duration),t.type="keyframes",t};function G0({keyframes:t,velocity:e=0,power:i=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:d,max:f,restDelta:h=.5,restSpeed:m}){const y=t[0],v={done:!1,value:y},S=_=>d!==void 0&&_<d||f!==void 0&&_>f,b=_=>d===void 0?f:f===void 0||Math.abs(d-_)<Math.abs(f-_)?d:f;let M=i*e;const O=y+M,j=u===void 0?O:u(O);j!==O&&(M=j-y);const T=_=>-M*Math.exp(-_/r),C=_=>j+T(_),D=_=>{const $=T(_),Y=C(_);v.done=Math.abs($)<=h,v.value=v.done?j:Y};let L,P;const k=_=>{S(v.value)&&(L=_,P=jc({keyframes:[v.value,b(v.value)],velocity:I6(C,_,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return k(0),{calculatedDuration:null,next:_=>{let $=!1;return!P&&L===void 0&&($=!0,D(_),k(_)),L!==void 0&&_>=L?P.next(_-L):(!$&&D(_),v)}}}function sT(t,e,i){const r=[],o=i||ci.mix||_6,l=t.length-1;for(let u=0;u<l;u++){let d=o(t[u],t[u+1]);if(e){const f=Array.isArray(e)?e[u]||un:e;d=So(f,d)}r.push(d)}return r}function oT(t,e,{clamp:i=!0,ease:r,mixer:o}={}){const l=t.length;if(Ip(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=t[0]===t[1];t[0]>t[l-1]&&(t=[...t].reverse(),e=[...e].reverse());const d=sT(e,r,o),f=d.length,h=m=>{if(u&&m<t[0])return e[0];let y=0;if(f>1)for(;y<t.length-2&&!(m<t[y+1]);y++);const v=lo(t[y],t[y+1],m);return d[y](v)};return i?m=>h(li(t[0],t[l-1],m)):h}function lT(t,e){const i=t[t.length-1];for(let r=1;r<=e;r++){const o=lo(0,e,r);t.push(Ye(i,1,o))}}function cT(t){const e=[0];return lT(e,t.length-1),e}function uT(t,e){return t.map(i=>i*e)}function dT(t,e){return t.map(()=>e||R6).splice(0,t.length-1)}function Ks({duration:t=300,keyframes:e,times:i,ease:r="easeInOut"}){const o=SC(r)?r.map(B3):B3(r),l={done:!1,value:e[0]},u=uT(i&&i.length===e.length?i:cT(e),t),d=oT(u,e,{ease:Array.isArray(o)?o:dT(e,o)});return{calculatedDuration:t,next:f=>(l.value=d(f),l.done=f>=t,l)}}const fT=t=>t!==null;function eh(t,{repeat:e,repeatType:i="loop"},r,o=1){const l=t.filter(fT),d=o<0||e&&i!=="loop"&&e%2===1?0:l.length-1;return!d||r===void 0?l[d]:r}const pT={decay:G0,inertia:G0,tween:Ks,keyframes:Ks,spring:jc};function G6(t){typeof t.type=="string"&&(t.type=pT[t.type])}class th{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,i){return this.finished.then(e,i)}}const hT=t=>t/100;class nh extends th{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,o;const{motionValue:i}=this.options;i&&i.updatedAt!==kt.now()&&this.tick(kt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;G6(e);const{type:i=Ks,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=e;let{keyframes:d}=e;const f=i||Ks;f!==Ks&&typeof d[0]!="number"&&(this.mixKeyframes=So(hT,_6(d[0],d[1])),d=[0,100]);const h=f({...e,keyframes:d});l==="mirror"&&(this.mirroredGenerator=f({...e,keyframes:[...d].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=Jp(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const i=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(e,i=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:d,calculatedDuration:f}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:m,repeat:y,repeatType:v,repeatDelay:S,type:b,onUpdate:M,finalKeyframe:O}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),i?this.currentTime=e:this.updateTime(e);const j=this.currentTime-h*(this.playbackSpeed>=0?1:-1),T=this.playbackSpeed>=0?j<0:j>o;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let C=this.currentTime,D=r;if(y){const _=Math.min(this.currentTime,o)/d;let $=Math.floor(_),Y=_%1;!Y&&_>=1&&(Y=1),Y===1&&$--,$=Math.min($,y+1),!!($%2)&&(v==="reverse"?(Y=1-Y,S&&(Y-=S/d)):v==="mirror"&&(D=u)),C=li(0,1,Y)*d}const L=T?{done:!1,value:m[0]}:D.next(C);l&&(L.value=l(L.value));let{done:P}=L;!T&&f!==null&&(P=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const k=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return k&&b!==G0&&(L.value=eh(m,this.options,O,this.speed)),M&&M(L.value),k&&this.finish(),L}then(e,i){return this.finished.then(e,i)}get duration(){return Pn(this.calculatedDuration)}get time(){return Pn(this.currentTime)}set time(e){var i;e=zn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(i=this.driver)==null||i.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(kt.now());const i=this.playbackSpeed!==e;this.playbackSpeed=e,i&&(this.time=Pn(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:e=WC,startTime:i}=this.options;this.driver||(this.driver=e(u=>this.tick(u))),(l=(o=this.options).onPlay)==null||l.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=i??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(kt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(e=this.options).onComplete)==null||i.call(e)}cancel(){var e,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(e=this.options).onCancel)==null||i.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),e.observe(this)}}function mT(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ma=t=>t*180/Math.PI,q0=t=>{const e=ma(Math.atan2(t[1],t[0]));return Y0(e)},gT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:q0,rotateZ:q0,skewX:t=>ma(Math.atan(t[1])),skewY:t=>ma(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Y0=t=>(t=t%360,t<0&&(t+=360),t),q3=q0,Y3=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),F3=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),xT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Y3,scaleY:F3,scale:t=>(Y3(t)+F3(t))/2,rotateX:t=>Y0(ma(Math.atan2(t[6],t[5]))),rotateY:t=>Y0(ma(Math.atan2(-t[2],t[0]))),rotateZ:q3,rotate:q3,skewX:t=>ma(Math.atan(t[4])),skewY:t=>ma(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function F0(t){return t.includes("scale")?1:0}function Z0(t,e){if(!t||t==="none")return F0(e);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(i)r=xT,o=i;else{const d=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=gT,o=d}if(!o)return F0(e);const l=r[e],u=o[1].split(",").map(vT);return typeof l=="function"?l(u):u[l]}const yT=(t,e)=>{const{transform:i="none"}=getComputedStyle(t);return Z0(i,e)};function vT(t){return parseFloat(t.trim())}const Nr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Br=new Set(Nr),Z3=t=>t===Pr||t===he,wT=new Set(["x","y","z"]),bT=Nr.filter(t=>!wT.has(t));function ST(t){const e=[];return bT.forEach(i=>{const r=t.getValue(i);r!==void 0&&(e.push([i,r.get()]),r.set(i.startsWith("scale")?1:0))}),e}const ya={width:({x:t},{paddingLeft:e="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),height:({y:t},{paddingTop:e="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Z0(e,"x"),y:(t,{transform:e})=>Z0(e,"y")};ya.translateX=ya.x;ya.translateY=ya.y;const va=new Set;let X0=!1,K0=!1,W0=!1;function q6(){if(K0){const t=Array.from(va).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),i=new Map;e.forEach(r=>{const o=ST(r);o.length&&(i.set(r,o),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=i.get(r);o&&o.forEach(([l,u])=>{var d;(d=r.getValue(l))==null||d.set(u)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}K0=!1,X0=!1,va.forEach(t=>t.complete(W0)),va.clear()}function Y6(){va.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(K0=!0)})}function CT(){W0=!0,Y6(),q6(),W0=!1}class ih{constructor(e,i,r,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=i,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(va.add(this),X0||(X0=!0,Ie.read(Y6),Ie.resolveKeyframes(q6))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:i,element:r,motionValue:o}=this;if(e[0]===null){const l=o==null?void 0:o.get(),u=e[e.length-1];if(l!==void 0)e[0]=l;else if(r&&i){const d=r.readValue(i,u);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=u),o&&l===void 0&&o.set(e[0])}mT(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),va.delete(this)}cancel(){this.state==="scheduled"&&(va.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const TT=t=>t.startsWith("--");function ET(t,e,i){TT(e)?t.style.setProperty(e,i):t.style[e]=i}const MT=Gp(()=>window.ScrollTimeline!==void 0),AT={};function jT(t,e){const i=Gp(t);return()=>AT[e]??i()}const F6=jT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Fs=([t,e,i,r])=>`cubic-bezier(${t}, ${e}, ${i}, ${r})`,X3={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fs([0,.65,.55,1]),circOut:Fs([.55,0,1,.45]),backIn:Fs([.31,.01,.66,-.59]),backOut:Fs([.33,1.53,.69,.99])};function Z6(t,e){if(t)return typeof t=="function"?F6()?U6(t,e):"ease-out":D6(t)?Fs(t):Array.isArray(t)?t.map(i=>Z6(i,e)||X3.easeOut):X3[t]}function LT(t,e,i,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:d="easeOut",times:f}={},h=void 0){const m={[e]:i};f&&(m.offset=f);const y=Z6(d,o);Array.isArray(y)&&(m.easing=y);const v={delay:r,duration:o,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return h&&(v.pseudoElement=h),t.animate(m,v)}function X6(t){return typeof t=="function"&&"applyToOptions"in t}function OT({type:t,...e}){return X6(t)&&F6()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class RT extends th{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:i,name:r,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:d,onComplete:f}=e;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=e,Ip(typeof e.type!="string");const h=OT(e);this.animation=LT(i,r,o,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=eh(o,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(m):ET(i,r,m),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,i;(i=(e=this.animation).finish)==null||i.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,i;this.isPseudoElement||(i=(e=this.animation).commitStyles)==null||i.call(e)}get duration(){var i,r;const e=((r=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:r.call(i).duration)||0;return Pn(Number(e))}get time(){return Pn(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=zn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&MT()?(this.animation.timeline=e,un):i(this)}}const K6={anticipate:j6,backInOut:A6,circInOut:O6};function DT(t){return t in K6}function HT(t){typeof t.ease=="string"&&DT(t.ease)&&(t.ease=K6[t.ease])}const K3=10;class VT extends RT{constructor(e){HT(e),G6(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:i,onUpdate:r,onComplete:o,element:l,...u}=this.options;if(!i)return;if(e!==void 0){i.set(e);return}const d=new nh({...u,autoplay:!1}),f=zn(this.finishedTime??this.time);i.setWithVelocity(d.sample(f-K3).value,d.sample(f).value,K3),d.stop()}}const W3=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(_i.test(t)||t==="0")&&!t.startsWith("url("));function kT(t){const e=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==e)return!0}function zT(t,e,i,r){const o=t[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=t[t.length-1],u=W3(o,e),d=W3(l,e);return!u||!d?!1:kT(t)||(i==="spring"||X6(i))&&r}function Q0(t){t.duration=0,t.type}const PT=new Set(["opacity","clipPath","filter","transform"]),NT=Gp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function BT(t){var m;const{motionValue:e,name:i,repeatDelay:r,repeatType:o,damping:l,type:u}=t;if(!(((m=e==null?void 0:e.owner)==null?void 0:m.current)instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:h}=e.owner.getProps();return NT()&&i&&PT.has(i)&&(i!=="transform"||!h)&&!f&&!r&&o!=="mirror"&&l!==0&&u!=="inertia"}const $T=40;class _T extends th{constructor({autoplay:e=!0,delay:i=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:d,name:f,motionValue:h,element:m,...y}){var b;super(),this.stop=()=>{var M,O;this._animation&&(this._animation.stop(),(M=this.stopTimeline)==null||M.call(this)),(O=this.keyframeResolver)==null||O.cancel()},this.createdAt=kt.now();const v={autoplay:e,delay:i,type:r,repeat:o,repeatDelay:l,repeatType:u,name:f,motionValue:h,element:m,...y},S=(m==null?void 0:m.KeyframeResolver)||ih;this.keyframeResolver=new S(d,(M,O,j)=>this.onKeyframesResolved(M,O,v,!j),f,h,m),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(e,i,r,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:d,delay:f,isHandoff:h,onUpdate:m}=r;this.resolvedAt=kt.now(),zT(e,l,u,d)||((ci.instantAnimations||!f)&&(m==null||m(eh(e,r,i))),e[0]=e[e.length-1],Q0(r),r.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>$T?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...r,keyframes:e},S=!h&&BT(v)?new VT({...v,element:v.motionValue.owner.current}):new nh(v);S.finished.then(()=>this.notifyFinished()).catch(un),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(e,i){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),CT()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const UT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function IT(t){const e=UT.exec(t);if(!e)return[,];const[,i,r,o]=e;return[`--${i??r}`,o]}function W6(t,e,i=1){const[r,o]=IT(t);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return v6(u)?parseFloat(u):u}return Xp(o)?W6(o,e,i+1):o}function ah(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const Q6=new Set(["width","height","top","left","right","bottom",...Nr]),GT={test:t=>t==="auto",parse:t=>t},J6=t=>e=>e.test(t),ey=[Pr,he,Nn,Ni,kC,VC,GT],Q3=t=>ey.find(J6(t));function qT(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||b6(t):!0}const YT=new Set(["brightness","contrast","saturate","opacity"]);function FT(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=i.match(Kp)||[];if(!r)return t;const o=i.replace(r,"");let l=YT.has(e)?1:0;return r!==i&&(l*=100),e+"("+l+o+")"}const ZT=/\b([a-z-]*)\(.*?\)/gu,J0={..._i,getAnimatableNone:t=>{const e=t.match(ZT);return e?e.map(FT).join(" "):t}},J3={...Pr,transform:Math.round},XT={rotate:Ni,rotateX:Ni,rotateY:Ni,rotateZ:Ni,scale:Fl,scaleX:Fl,scaleY:Fl,scaleZ:Fl,skew:Ni,skewX:Ni,skewY:Ni,distance:he,translateX:he,translateY:he,translateZ:he,x:he,y:he,z:he,perspective:he,transformPerspective:he,opacity:co,originX:$3,originY:$3,originZ:he},rh={borderWidth:he,borderTopWidth:he,borderRightWidth:he,borderBottomWidth:he,borderLeftWidth:he,borderRadius:he,radius:he,borderTopLeftRadius:he,borderTopRightRadius:he,borderBottomRightRadius:he,borderBottomLeftRadius:he,width:he,maxWidth:he,height:he,maxHeight:he,top:he,right:he,bottom:he,left:he,padding:he,paddingTop:he,paddingRight:he,paddingBottom:he,paddingLeft:he,margin:he,marginTop:he,marginRight:he,marginBottom:he,marginLeft:he,backgroundPositionX:he,backgroundPositionY:he,...XT,zIndex:J3,fillOpacity:co,strokeOpacity:co,numOctaves:J3},KT={...rh,color:tt,backgroundColor:tt,outlineColor:tt,fill:tt,stroke:tt,borderColor:tt,borderTopColor:tt,borderRightColor:tt,borderBottomColor:tt,borderLeftColor:tt,filter:J0,WebkitFilter:J0},ty=t=>KT[t];function ny(t,e){let i=ty(t);return i!==J0&&(i=_i),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const WT=new Set(["auto","none","0"]);function QT(t,e,i){let r=0,o;for(;r<t.length&&!o;){const l=t[r];typeof l=="string"&&!WT.has(l)&&uo(l).values.length&&(o=t[r]),r++}if(o&&i)for(const l of e)t[l]=ny(i,o)}class JT extends ih{constructor(e,i,r,o,l){super(e,i,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:i,name:r}=this;if(!i||!i.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let h=e[f];if(typeof h=="string"&&(h=h.trim(),Xp(h))){const m=W6(h,i.current);m!==void 0&&(e[f]=m),f===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Q6.has(r)||e.length!==2)return;const[o,l]=e,u=Q3(o),d=Q3(l);if(u!==d)if(Z3(u)&&Z3(d))for(let f=0;f<e.length;f++){const h=e[f];typeof h=="string"&&(e[f]=parseFloat(h))}else ya[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:i}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||qT(e[o]))&&r.push(o);r.length&&QT(e,r,i)}measureInitialState(){const{element:e,unresolvedKeyframes:i,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ya[r](e.measureViewportBox(),window.getComputedStyle(e.current)),i[0]=this.measuredOrigin;const o=i[i.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var d;const{element:e,name:i,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(i);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,u=r[l];r[l]=ya[i](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([f,h])=>{e.getValue(f).set(h)}),this.resolveNoneKeyframes()}}function eE(t,e,i){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const o=(i==null?void 0:i[t])??r.querySelectorAll(t);return o?Array.from(o):[]}return Array.from(t)}const iy=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function ay(t){return w6(t)&&"offsetHeight"in t}const e4=30,tE=t=>!isNaN(parseFloat(t));class nE{constructor(e,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var l;const o=kt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=i.owner}setCurrent(e){this.current=e,this.updatedAt=kt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=tE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new qp);const r=this.events[e].add(i);return e==="change"?()=>{r(),Ie.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,i,r){this.set(i),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,i=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=kt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>e4)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,e4);return S6(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,i;(e=this.dependents)==null||e.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function jr(t,e){return new nE(t,e)}const{schedule:sh}=H6(queueMicrotask,!1),xn={x:!1,y:!1};function ry(){return xn.x||xn.y}function iE(t){return t==="x"||t==="y"?xn[t]?null:(xn[t]=!0,()=>{xn[t]=!1}):xn.x||xn.y?null:(xn.x=xn.y=!0,()=>{xn.x=xn.y=!1})}function sy(t,e){const i=eE(t),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[i,o,()=>r.abort()]}function t4(t){return!(t.pointerType==="touch"||ry())}function aE(t,e,i={}){const[r,o,l]=sy(t,i),u=d=>{if(!t4(d))return;const{target:f}=d,h=e(f,d);if(typeof h!="function"||!f)return;const m=y=>{t4(y)&&(h(y),f.removeEventListener("pointerleave",m))};f.addEventListener("pointerleave",m,o)};return r.forEach(d=>{d.addEventListener("pointerenter",u,o)}),l}const oy=(t,e)=>e?t===e?!0:oy(t,e.parentElement):!1,oh=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,rE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function sE(t){return rE.has(t.tagName)||t.tabIndex!==-1}const xc=new WeakSet;function n4(t){return e=>{e.key==="Enter"&&t(e)}}function qf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const oE=(t,e)=>{const i=t.currentTarget;if(!i)return;const r=n4(()=>{if(xc.has(i))return;qf(i,"down");const o=n4(()=>{qf(i,"up")}),l=()=>qf(i,"cancel");i.addEventListener("keyup",o,e),i.addEventListener("blur",l,e)});i.addEventListener("keydown",r,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",r),e)};function i4(t){return oh(t)&&!ry()}function lE(t,e,i={}){const[r,o,l]=sy(t,i),u=d=>{const f=d.currentTarget;if(!i4(d))return;xc.add(f);const h=e(f,d),m=(S,b)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",v),xc.has(f)&&xc.delete(f),i4(S)&&typeof h=="function"&&h(S,{success:b})},y=S=>{m(S,f===window||f===document||i.useGlobalTarget||oy(f,S.target))},v=S=>{m(S,!1)};window.addEventListener("pointerup",y,o),window.addEventListener("pointercancel",v,o)};return r.forEach(d=>{(i.useGlobalTarget?window:d).addEventListener("pointerdown",u,o),ay(d)&&(d.addEventListener("focus",h=>oE(h,o)),!sE(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),l}function ly(t){return w6(t)&&"ownerSVGElement"in t}function cE(t){return ly(t)&&t.tagName==="svg"}const Ct=t=>!!(t&&t.getVelocity),uE=[...ey,tt,_i],dE=t=>uE.find(J6(t)),lh=R.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class fE extends R.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(i&&e.isPresent&&!this.props.isPresent){const r=i.offsetParent,o=ay(r)&&r.offsetWidth||0,l=this.props.sizeRef.current;l.height=i.offsetHeight||0,l.width=i.offsetWidth||0,l.top=i.offsetTop,l.left=i.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function pE({children:t,isPresent:e,anchorX:i,root:r}){const o=R.useId(),l=R.useRef(null),u=R.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=R.useContext(lh);return R.useInsertionEffect(()=>{const{width:f,height:h,top:m,left:y,right:v}=u.current;if(e||!l.current||!f||!h)return;const S=i==="left"?`left: ${y}`:`right: ${v}`;l.current.dataset.motionPopId=o;const b=document.createElement("style");d&&(b.nonce=d);const M=r??document.head;return M.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            ${S}px !important;
            top: ${m}px !important;
          }
        `),()=>{M.contains(b)&&M.removeChild(b)}},[e]),x.jsx(fE,{isPresent:e,childRef:l,sizeRef:u,children:R.cloneElement(t,{ref:l})})}const hE=({children:t,initial:e,isPresent:i,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:u,anchorX:d,root:f})=>{const h=Bp(mE),m=R.useId();let y=!0,v=R.useMemo(()=>(y=!1,{id:m,initial:e,isPresent:i,custom:o,onExitComplete:S=>{h.set(S,!0);for(const b of h.values())if(!b)return;r&&r()},register:S=>(h.set(S,!1),()=>h.delete(S))}),[i,h,r]);return l&&y&&(v={...v}),R.useMemo(()=>{h.forEach((S,b)=>h.set(b,!1))},[i]),R.useEffect(()=>{!i&&!h.size&&r&&r()},[i]),u==="popLayout"&&(t=x.jsx(pE,{isPresent:i,anchorX:d,root:f,children:t})),x.jsx(tu.Provider,{value:v,children:t})};function mE(){return new Map}function cy(t=!0){const e=R.useContext(tu);if(e===null)return[!0,null];const{isPresent:i,onExitComplete:r,register:o}=e,l=R.useId();R.useEffect(()=>{if(t)return o(l)},[t]);const u=R.useCallback(()=>t&&r&&r(l),[l,r,t]);return!i&&r?[!1,u]:[!0]}const Zl=t=>t.key||"";function a4(t){const e=[];return R.Children.forEach(t,i=>{R.isValidElement(i)&&e.push(i)}),e}const uy=({children:t,custom:e,initial:i=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1,anchorX:d="left",root:f})=>{const[h,m]=cy(u),y=R.useMemo(()=>a4(t),[t]),v=u&&!h?[]:y.map(Zl),S=R.useRef(!0),b=R.useRef(y),M=Bp(()=>new Map),[O,j]=R.useState(y),[T,C]=R.useState(y);y6(()=>{S.current=!1,b.current=y;for(let P=0;P<T.length;P++){const k=Zl(T[P]);v.includes(k)?M.delete(k):M.get(k)!==!0&&M.set(k,!1)}},[T,v.length,v.join("-")]);const D=[];if(y!==O){let P=[...y];for(let k=0;k<T.length;k++){const _=T[k],$=Zl(_);v.includes($)||(P.splice(k,0,_),D.push(_))}return l==="wait"&&D.length&&(P=D),C(a4(P)),j(y),null}const{forceRender:L}=R.useContext(Np);return x.jsx(x.Fragment,{children:T.map(P=>{const k=Zl(P),_=u&&!h?!1:y===T||v.includes(k),$=()=>{if(M.has(k))M.set(k,!0);else return;let Y=!0;M.forEach(F=>{F||(Y=!1)}),Y&&(L==null||L(),C(b.current),u&&(m==null||m()),r&&r())};return x.jsx(hE,{isPresent:_,initial:!S.current||i?void 0:!1,custom:e,presenceAffectsLayout:o,mode:l,root:f,onExitComplete:_?void 0:$,anchorX:d,children:P},k)})})},dy=R.createContext({strict:!1}),r4={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Lr={};for(const t in r4)Lr[t]={isEnabled:e=>r4[t].some(i=>!!e[i])};function gE(t){for(const e in t)Lr[e]={...Lr[e],...t[e]}}const xE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Lc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||xE.has(t)}let fy=t=>!Lc(t);function yE(t){typeof t=="function"&&(fy=e=>e.startsWith("on")?!Lc(e):t(e))}try{yE(require("@emotion/is-prop-valid").default)}catch{}function vE(t,e,i){const r={};for(const o in t)o==="values"&&typeof t.values=="object"||(fy(o)||i===!0&&Lc(o)||!e&&!Lc(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}const nu=R.createContext({});function iu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function fo(t){return typeof t=="string"||Array.isArray(t)}const ch=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],uh=["initial",...ch];function au(t){return iu(t.animate)||uh.some(e=>fo(t[e]))}function py(t){return!!(au(t)||t.variants)}function wE(t,e){if(au(t)){const{initial:i,animate:r}=t;return{initial:i===!1||fo(i)?i:void 0,animate:fo(r)?r:void 0}}return t.inherit!==!1?e:{}}function bE(t){const{initial:e,animate:i}=wE(t,R.useContext(nu));return R.useMemo(()=>({initial:e,animate:i}),[s4(e),s4(i)])}function s4(t){return Array.isArray(t)?t.join(" "):t}const po={};function SE(t){for(const e in t)po[e]=t[e],Zp(e)&&(po[e].isCSSVariable=!0)}function hy(t,{layout:e,layoutId:i}){return Br.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!po[t]||t==="opacity")}const CE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},TE=Nr.length;function EE(t,e,i){let r="",o=!0;for(let l=0;l<TE;l++){const u=Nr[l],d=t[u];if(d===void 0)continue;let f=!0;if(typeof d=="number"?f=d===(u.startsWith("scale")?1:0):f=parseFloat(d)===0,!f||i){const h=iy(d,rh[u]);if(!f){o=!1;const m=CE[u]||u;r+=`${m}(${h}) `}i&&(e[u]=h)}}return r=r.trim(),i?r=i(e,o?"":r):o&&(r="none"),r}function dh(t,e,i){const{style:r,vars:o,transformOrigin:l}=t;let u=!1,d=!1;for(const f in e){const h=e[f];if(Br.has(f)){u=!0;continue}else if(Zp(f)){o[f]=h;continue}else{const m=iy(h,rh[f]);f.startsWith("origin")?(d=!0,l[f]=m):r[f]=m}}if(e.transform||(u||i?r.transform=EE(e,t.transform,i):r.transform&&(r.transform="none")),d){const{originX:f="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${f} ${h} ${m}`}}const fh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function my(t,e,i){for(const r in e)!Ct(e[r])&&!hy(r,i)&&(t[r]=e[r])}function ME({transformTemplate:t},e){return R.useMemo(()=>{const i=fh();return dh(i,e,t),Object.assign({},i.vars,i.style)},[e])}function AE(t,e){const i=t.style||{},r={};return my(r,i,t),Object.assign(r,ME(t,e)),r}function jE(t,e){const i={},r=AE(t,e);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const LE={offset:"stroke-dashoffset",array:"stroke-dasharray"},OE={offset:"strokeDashoffset",array:"strokeDasharray"};function RE(t,e,i=1,r=0,o=!0){t.pathLength=1;const l=o?LE:OE;t[l.offset]=he.transform(-r);const u=he.transform(e),d=he.transform(i);t[l.array]=`${u} ${d}`}function gy(t,{attrX:e,attrY:i,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...d},f,h,m){if(dh(t,d,h),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:y,style:v}=t;y.transform&&(v.transform=y.transform,delete y.transform),(v.transform||y.transformOrigin)&&(v.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),v.transform&&(v.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete y.transformBox),e!==void 0&&(y.x=e),i!==void 0&&(y.y=i),r!==void 0&&(y.scale=r),o!==void 0&&RE(y,o,l,u,!1)}const xy=()=>({...fh(),attrs:{}}),yy=t=>typeof t=="string"&&t.toLowerCase()==="svg";function DE(t,e,i,r){const o=R.useMemo(()=>{const l=xy();return gy(l,e,yy(r),t.transformTemplate,t.style),{...l.attrs,style:{...l.style}}},[e]);if(t.style){const l={};my(l,t.style,t),o.style={...l,...o.style}}return o}const HE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ph(t){return typeof t!="string"||t.includes("-")?!1:!!(HE.indexOf(t)>-1||/[A-Z]/u.test(t))}function VE(t,e,i,{latestValues:r},o,l=!1){const d=(ph(t)?DE:jE)(e,r,o,t),f=vE(e,typeof t=="string",l),h=t!==R.Fragment?{...f,...d,ref:i}:{},{children:m}=e,y=R.useMemo(()=>Ct(m)?m.get():m,[m]);return R.createElement(t,{...h,children:y})}function o4(t){const e=[{},{}];return t==null||t.values.forEach((i,r)=>{e[0][r]=i.get(),e[1][r]=i.getVelocity()}),e}function hh(t,e,i,r){if(typeof e=="function"){const[o,l]=o4(r);e=e(i!==void 0?i:t.custom,o,l)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[o,l]=o4(r);e=e(i!==void 0?i:t.custom,o,l)}return e}function yc(t){return Ct(t)?t.get():t}function kE({scrapeMotionValuesFromProps:t,createRenderState:e},i,r,o){return{latestValues:zE(i,r,o,t),renderState:e()}}function zE(t,e,i,r){const o={},l=r(t,{});for(const v in l)o[v]=yc(l[v]);let{initial:u,animate:d}=t;const f=au(t),h=py(t);e&&h&&!f&&t.inherit!==!1&&(u===void 0&&(u=e.initial),d===void 0&&(d=e.animate));let m=i?i.initial===!1:!1;m=m||u===!1;const y=m?d:u;if(y&&typeof y!="boolean"&&!iu(y)){const v=Array.isArray(y)?y:[y];for(let S=0;S<v.length;S++){const b=hh(t,v[S]);if(b){const{transitionEnd:M,transition:O,...j}=b;for(const T in j){let C=j[T];if(Array.isArray(C)){const D=m?C.length-1:0;C=C[D]}C!==null&&(o[T]=C)}for(const T in M)o[T]=M[T]}}}return o}const vy=t=>(e,i)=>{const r=R.useContext(nu),o=R.useContext(tu),l=()=>kE(t,e,r,o);return i?l():Bp(l)};function mh(t,e,i){var l;const{style:r}=t,o={};for(const u in r)(Ct(r[u])||e.style&&Ct(e.style[u])||hy(u,t)||((l=i==null?void 0:i.getValue(u))==null?void 0:l.liveStyle)!==void 0)&&(o[u]=r[u]);return o}const PE=vy({scrapeMotionValuesFromProps:mh,createRenderState:fh});function wy(t,e,i){const r=mh(t,e,i);for(const o in t)if(Ct(t[o])||Ct(e[o])){const l=Nr.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=t[o]}return r}const NE=vy({scrapeMotionValuesFromProps:wy,createRenderState:xy}),BE=Symbol.for("motionComponentSymbol");function mr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function $E(t,e,i){return R.useCallback(r=>{r&&t.onMount&&t.onMount(r),e&&(r?e.mount(r):e.unmount()),i&&(typeof i=="function"?i(r):mr(i)&&(i.current=r))},[e])}const gh=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),_E="framerAppearId",by="data-"+gh(_E),Sy=R.createContext({});function UE(t,e,i,r,o){var M,O;const{visualElement:l}=R.useContext(nu),u=R.useContext(dy),d=R.useContext(tu),f=R.useContext(lh).reducedMotion,h=R.useRef(null);r=r||u.renderer,!h.current&&r&&(h.current=r(t,{visualState:e,parent:l,props:i,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:f}));const m=h.current,y=R.useContext(Sy);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&IE(h.current,i,o,y);const v=R.useRef(!1);R.useInsertionEffect(()=>{m&&v.current&&m.update(i,d)});const S=i[by],b=R.useRef(!!S&&!((M=window.MotionHandoffIsComplete)!=null&&M.call(window,S))&&((O=window.MotionHasOptimisedAnimation)==null?void 0:O.call(window,S)));return y6(()=>{m&&(v.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),b.current&&m.animationState&&m.animationState.animateChanges())}),R.useEffect(()=>{m&&(!b.current&&m.animationState&&m.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var j;(j=window.MotionHandoffMarkAsComplete)==null||j.call(window,S)}),b.current=!1),m.enteringChildren=void 0)}),m}function IE(t,e,i,r){const{layoutId:o,layout:l,drag:u,dragConstraints:d,layoutScroll:f,layoutRoot:h,layoutCrossfade:m}=e;t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:Cy(t.parent)),t.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||d&&mr(d),visualElement:t,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:m,layoutScroll:f,layoutRoot:h})}function Cy(t){if(t)return t.options.allowProjection!==!1?t.projection:Cy(t.parent)}function Yf(t,{forwardMotionProps:e=!1}={},i,r){i&&gE(i);const o=ph(t)?NE:PE;function l(d,f){let h;const m={...R.useContext(lh),...d,layoutId:GE(d)},{isStatic:y}=m,v=bE(d),S=o(d,y);if(!y&&$p){qE();const b=YE(m);h=b.MeasureLayout,v.visualElement=UE(t,S,m,r,b.ProjectionNode)}return x.jsxs(nu.Provider,{value:v,children:[h&&v.visualElement?x.jsx(h,{visualElement:v.visualElement,...m}):null,VE(t,d,$E(S,v.visualElement,f),S,y,e)]})}l.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const u=R.forwardRef(l);return u[BE]=t,u}function GE({layoutId:t}){const e=R.useContext(Np).id;return e&&t!==void 0?e+"-"+t:t}function qE(t,e){R.useContext(dy).strict}function YE(t){const{drag:e,layout:i}=Lr;if(!e&&!i)return{};const r={...e,...i};return{MeasureLayout:e!=null&&e.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function FE(t,e){if(typeof Proxy>"u")return Yf;const i=new Map,r=(l,u)=>Yf(l,u,t,e),o=(l,u)=>r(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?r:(i.has(u)||i.set(u,Yf(u,void 0,t,e)),i.get(u))})}function Ty({top:t,left:e,right:i,bottom:r}){return{x:{min:e,max:i},y:{min:t,max:r}}}function ZE({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function XE(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:r.y,right:r.x}}function Ff(t){return t===void 0||t===1}function ep({scale:t,scaleX:e,scaleY:i}){return!Ff(t)||!Ff(e)||!Ff(i)}function fa(t){return ep(t)||Ey(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Ey(t){return l4(t.x)||l4(t.y)}function l4(t){return t&&t!=="0%"}function Oc(t,e,i){const r=t-i,o=e*r;return i+o}function c4(t,e,i,r,o){return o!==void 0&&(t=Oc(t,o,r)),Oc(t,i,r)+e}function tp(t,e=0,i=1,r,o){t.min=c4(t.min,e,i,r,o),t.max=c4(t.max,e,i,r,o)}function My(t,{x:e,y:i}){tp(t.x,e.translate,e.scale,e.originPoint),tp(t.y,i.translate,i.scale,i.originPoint)}const u4=.999999999999,d4=1.0000000000001;function KE(t,e,i,r=!1){const o=i.length;if(!o)return;e.x=e.y=1;let l,u;for(let d=0;d<o;d++){l=i[d],u=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&xr(t,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,My(t,u)),r&&fa(l.latestValues)&&xr(t,l.latestValues))}e.x<d4&&e.x>u4&&(e.x=1),e.y<d4&&e.y>u4&&(e.y=1)}function gr(t,e){t.min=t.min+e,t.max=t.max+e}function f4(t,e,i,r,o=.5){const l=Ye(t.min,t.max,o);tp(t,e,i,l,r)}function xr(t,e){f4(t.x,e.x,e.scaleX,e.scale,e.originX),f4(t.y,e.y,e.scaleY,e.scale,e.originY)}function Ay(t,e){return Ty(XE(t.getBoundingClientRect(),e))}function WE(t,e,i){const r=Ay(t,i),{scroll:o}=e;return o&&(gr(r.x,o.offset.x),gr(r.y,o.offset.y)),r}const p4=()=>({translate:0,scale:1,origin:0,originPoint:0}),yr=()=>({x:p4(),y:p4()}),h4=()=>({min:0,max:0}),Qe=()=>({x:h4(),y:h4()}),np={current:null},jy={current:!1};function QE(){if(jy.current=!0,!!$p)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>np.current=t.matches;t.addEventListener("change",e),e()}else np.current=!1}const JE=new WeakMap;function eM(t,e,i){for(const r in e){const o=e[r],l=i[r];if(Ct(o))t.addValue(r,o);else if(Ct(l))t.addValue(r,jr(o,{owner:t}));else if(l!==o)if(t.hasValue(r)){const u=t.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=t.getStaticValue(r);t.addValue(r,jr(u!==void 0?u:o,{owner:t}))}}for(const r in i)e[r]===void 0&&t.removeValue(r);return e}const m4=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class tM{scrapeMotionValuesFromProps(e,i,r){return{}}constructor({parent:e,props:i,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ih,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=kt.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,Ie.render(this.render,!1,!0))};const{latestValues:f,renderState:h}=u;this.latestValues=f,this.baseTarget={...f},this.initialValues=i.initial?{...f}:{},this.renderState=h,this.parent=e,this.props=i,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=au(i),this.isVariantNode=py(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:m,...y}=this.scrapeMotionValuesFromProps(i,{},this);for(const v in y){const S=y[v];f[v]!==void 0&&Ct(S)&&S.set(f[v])}}mount(e){var i;this.current=e,JE.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),jy.current||QE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:np.current,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),$i(this.notifyUpdate),$i(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,i){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Br.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=i.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Ie.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,i)),this.valueSubscriptions.set(e,()=>{o(),l&&l(),i.owner&&i.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Lr){const i=Lr[e];if(!i)continue;const{isEnabled:r,Feature:o}=i;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let r=0;r<m4.length;r++){const o=m4[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=eM(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){const r=this.values.get(e);i!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,i),this.values.set(e,i),this.latestValues[e]=i.get())}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&i!==void 0&&(r=jr(i===null?void 0:i,{owner:this}),this.addValue(e,r)),r}readValue(e,i){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(v6(r)||b6(r))?r=parseFloat(r):!dE(r)&&_i.test(i)&&(r=ny(e,i)),this.setBaseTarget(e,Ct(r)?r.get():r)),Ct(r)?r.get():r}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){var l;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const u=hh(this.props,i,(l=this.presenceContext)==null?void 0:l.custom);u&&(r=u[e])}if(i&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Ct(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new qp),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}scheduleRenderMicrotask(){sh.render(this.render)}}class Ly extends tM{constructor(){super(...arguments),this.KeyframeResolver=JT}sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){return e.style?e.style[i]:void 0}removeValueFromRenderState(e,{vars:i,style:r}){delete i[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ct(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function Oy(t,{style:e,vars:i},r,o){const l=t.style;let u;for(u in e)l[u]=e[u];o==null||o.applyProjectionStyles(l,r);for(u in i)l.setProperty(u,i[u])}function nM(t){return window.getComputedStyle(t)}class iM extends Ly{constructor(){super(...arguments),this.type="html",this.renderInstance=Oy}readValueFromInstance(e,i){var r;if(Br.has(i))return(r=this.projection)!=null&&r.isProjecting?F0(i):yT(e,i);{const o=nM(e),l=(Zp(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(e,{transformPagePoint:i}){return Ay(e,i)}build(e,i,r){dh(e,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,i,r){return mh(e,i,r)}}const Ry=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function aM(t,e,i,r){Oy(t,e,void 0,r);for(const o in e.attrs)t.setAttribute(Ry.has(o)?o:gh(o),e.attrs[o])}class rM extends Ly{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qe}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if(Br.has(i)){const r=ty(i);return r&&r.default||0}return i=Ry.has(i)?i:gh(i),e.getAttribute(i)}scrapeMotionValuesFromProps(e,i,r){return wy(e,i,r)}build(e,i,r){gy(e,i,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,i,r,o){aM(e,i,r,o)}mount(e){this.isSVGTag=yy(e.tagName),super.mount(e)}}const sM=(t,e)=>ph(t)?new rM(e):new iM(e,{allowProjection:t!==R.Fragment});function wr(t,e,i){const r=t.getProps();return hh(r,e,i!==void 0?i:r.custom,t)}const ip=t=>Array.isArray(t);function oM(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,jr(i))}function lM(t){return ip(t)?t[t.length-1]||0:t}function cM(t,e){const i=wr(t,e);let{transitionEnd:r={},transition:o={},...l}=i||{};l={...l,...r};for(const u in l){const d=lM(l[u]);oM(t,u,d)}}function uM(t){return!!(Ct(t)&&t.add)}function ap(t,e){const i=t.getValue("willChange");if(uM(i))return i.add(e);if(!i&&ci.WillChange){const r=new ci.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function Dy(t){return t.props[by]}const dM=t=>t!==null;function fM(t,{repeat:e,repeatType:i="loop"},r){const o=t.filter(dM),l=e&&i!=="loop"&&e%2===1?0:o.length-1;return o[l]}const pM={type:"spring",stiffness:500,damping:25,restSpeed:10},hM=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),mM={type:"keyframes",duration:.8},gM={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},xM=(t,{keyframes:e})=>e.length>2?mM:Br.has(t)?t.startsWith("scale")?hM(e[1]):pM:gM;function yM({when:t,delay:e,delayChildren:i,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:d,from:f,elapsed:h,...m}){return!!Object.keys(m).length}const xh=(t,e,i,r={},o,l)=>u=>{const d=ah(r,t)||{},f=d.delay||r.delay||0;let{elapsed:h=0}=r;h=h-zn(f);const m={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...d,delay:-h,onUpdate:v=>{e.set(v),d.onUpdate&&d.onUpdate(v)},onComplete:()=>{u(),d.onComplete&&d.onComplete()},name:t,motionValue:e,element:l?void 0:o};yM(d)||Object.assign(m,xM(t,m)),m.duration&&(m.duration=zn(m.duration)),m.repeatDelay&&(m.repeatDelay=zn(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let y=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(Q0(m),m.delay===0&&(y=!0)),(ci.instantAnimations||ci.skipAnimations)&&(y=!0,Q0(m),m.delay=0),m.allowFlatten=!d.type&&!d.ease,y&&!l&&e.get()!==void 0){const v=fM(m.keyframes,d);if(v!==void 0){Ie.update(()=>{m.onUpdate(v),m.onComplete()});return}}return d.isSync?new nh(m):new _T(m)};function vM({protectedKeys:t,needsAnimating:e},i){const r=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,r}function Hy(t,e,{delay:i=0,transitionOverride:r,type:o}={}){let{transition:l=t.getDefaultTransition(),transitionEnd:u,...d}=e;r&&(l=r);const f=[],h=o&&t.animationState&&t.animationState.getState()[o];for(const m in d){const y=t.getValue(m,t.latestValues[m]??null),v=d[m];if(v===void 0||h&&vM(h,m))continue;const S={delay:i,...ah(l||{},m)},b=y.get();if(b!==void 0&&!y.isAnimating&&!Array.isArray(v)&&v===b&&!S.velocity)continue;let M=!1;if(window.MotionHandoffAnimation){const j=Dy(t);if(j){const T=window.MotionHandoffAnimation(j,m,Ie);T!==null&&(S.startTime=T,M=!0)}}ap(t,m),y.start(xh(m,y,v,t.shouldReduceMotion&&Q6.has(m)?{type:!1}:S,t,M));const O=y.animation;O&&f.push(O)}return u&&Promise.all(f).then(()=>{Ie.update(()=>{u&&cM(t,u)})}),f}function Vy(t,e,i,r=0,o=1){const l=Array.from(t).sort((h,m)=>h.sortNodePosition(m)).indexOf(e),u=t.size,d=(u-1)*r;return typeof i=="function"?i(l,u):o===1?l*r:d-l*r}function rp(t,e,i={}){var f;const r=wr(t,e,i.type==="exit"?(f=t.presenceContext)==null?void 0:f.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=r||{};i.transitionOverride&&(o=i.transitionOverride);const l=r?()=>Promise.all(Hy(t,r,i)):()=>Promise.resolve(),u=t.variantChildren&&t.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:v}=o;return wM(t,e,h,m,y,v,i)}:()=>Promise.resolve(),{when:d}=o;if(d){const[h,m]=d==="beforeChildren"?[l,u]:[u,l];return h().then(()=>m())}else return Promise.all([l(),u(i.delay)])}function wM(t,e,i=0,r=0,o=0,l=1,u){const d=[];for(const f of t.variantChildren)f.notify("AnimationStart",e),d.push(rp(f,e,{...u,delay:i+(typeof r=="function"?0:r)+Vy(t.variantChildren,f,r,o,l)}).then(()=>f.notify("AnimationComplete",e)));return Promise.all(d)}function bM(t,e,i={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>rp(t,l,i));r=Promise.all(o)}else if(typeof e=="string")r=rp(t,e,i);else{const o=typeof e=="function"?wr(t,e,i.custom):e;r=Promise.all(Hy(t,o,i))}return r.then(()=>{t.notify("AnimationComplete",e)})}function ky(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let r=0;r<i;r++)if(e[r]!==t[r])return!1;return!0}const SM=uh.length;function zy(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?zy(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const e={};for(let i=0;i<SM;i++){const r=uh[i],o=t.props[r];(fo(o)||o===!1)&&(e[r]=o)}return e}const CM=[...ch].reverse(),TM=ch.length;function EM(t){return e=>Promise.all(e.map(({animation:i,options:r})=>bM(t,i,r)))}function MM(t){let e=EM(t),i=g4(),r=!0;const o=f=>(h,m)=>{var v;const y=wr(t,m,f==="exit"?(v=t.presenceContext)==null?void 0:v.custom:void 0);if(y){const{transition:S,transitionEnd:b,...M}=y;h={...h,...M,...b}}return h};function l(f){e=f(t)}function u(f){const{props:h}=t,m=zy(t.parent)||{},y=[],v=new Set;let S={},b=1/0;for(let O=0;O<TM;O++){const j=CM[O],T=i[j],C=h[j]!==void 0?h[j]:m[j],D=fo(C),L=j===f?T.isActive:null;L===!1&&(b=O);let P=C===m[j]&&C!==h[j]&&D;if(P&&r&&t.manuallyAnimateOnMount&&(P=!1),T.protectedKeys={...S},!T.isActive&&L===null||!C&&!T.prevProp||iu(C)||typeof C=="boolean")continue;const k=AM(T.prevProp,C);let _=k||j===f&&T.isActive&&!P&&D||O>b&&D,$=!1;const Y=Array.isArray(C)?C:[C];let F=Y.reduce(o(j),{});L===!1&&(F={});const{prevResolvedValues:te={}}=T,ie={...te,...F},oe=K=>{_=!0,v.has(K)&&($=!0,v.delete(K)),T.needsAnimating[K]=!0;const W=t.getValue(K);W&&(W.liveStyle=!1)};for(const K in ie){const W=F[K],ee=te[K];if(S.hasOwnProperty(K))continue;let H=!1;ip(W)&&ip(ee)?H=!ky(W,ee):H=W!==ee,H?W!=null?oe(K):v.add(K):W!==void 0&&v.has(K)?oe(K):T.protectedKeys[K]=!0}T.prevProp=C,T.prevResolvedValues=F,T.isActive&&(S={...S,...F}),r&&t.blockInitialAnimation&&(_=!1);const re=P&&k;_&&(!re||$)&&y.push(...Y.map(K=>{const W={type:j};if(typeof K=="string"&&r&&!re&&t.manuallyAnimateOnMount&&t.parent){const{parent:ee}=t,H=wr(ee,K);if(ee.enteringChildren&&H){const{delayChildren:Z}=H.transition||{};W.delay=Vy(ee.enteringChildren,t,Z)}}return{animation:K,options:W}}))}if(v.size){const O={};if(typeof h.initial!="boolean"){const j=wr(t,Array.isArray(h.initial)?h.initial[0]:h.initial);j&&j.transition&&(O.transition=j.transition)}v.forEach(j=>{const T=t.getBaseTarget(j),C=t.getValue(j);C&&(C.liveStyle=!0),O[j]=T??null}),y.push({animation:O})}let M=!!y.length;return r&&(h.initial===!1||h.initial===h.animate)&&!t.manuallyAnimateOnMount&&(M=!1),r=!1,M?e(y):Promise.resolve()}function d(f,h){var y;if(i[f].isActive===h)return Promise.resolve();(y=t.variantChildren)==null||y.forEach(v=>{var S;return(S=v.animationState)==null?void 0:S.setActive(f,h)}),i[f].isActive=h;const m=u(f);for(const v in i)i[v].protectedKeys={};return m}return{animateChanges:u,setActive:d,setAnimateFunction:l,getState:()=>i,reset:()=>{i=g4(),r=!0}}}function AM(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!ky(e,t):!1}function ua(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function g4(){return{animate:ua(!0),whileInView:ua(),whileHover:ua(),whileTap:ua(),whileDrag:ua(),whileFocus:ua(),exit:ua()}}class Gi{constructor(e){this.isMounted=!1,this.node=e}update(){}}class jM extends Gi{constructor(e){super(e),e.animationState||(e.animationState=MM(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();iu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let LM=0;class OM extends Gi{constructor(){super(...arguments),this.id=LM++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);i&&!e&&o.then(()=>{i(this.id)})}mount(){const{register:e,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const RM={animation:{Feature:jM},exit:{Feature:OM}};function ho(t,e,i,r={passive:!0}){return t.addEventListener(e,i,r),()=>t.removeEventListener(e,i)}function Eo(t){return{point:{x:t.pageX,y:t.pageY}}}const DM=t=>e=>oh(e)&&t(e,Eo(e));function Ws(t,e,i,r){return ho(t,e,DM(i),r)}const Py=1e-4,HM=1-Py,VM=1+Py,Ny=.01,kM=0-Ny,zM=0+Ny;function jt(t){return t.max-t.min}function PM(t,e,i){return Math.abs(t-e)<=i}function x4(t,e,i,r=.5){t.origin=r,t.originPoint=Ye(e.min,e.max,t.origin),t.scale=jt(i)/jt(e),t.translate=Ye(i.min,i.max,t.origin)-t.originPoint,(t.scale>=HM&&t.scale<=VM||isNaN(t.scale))&&(t.scale=1),(t.translate>=kM&&t.translate<=zM||isNaN(t.translate))&&(t.translate=0)}function Qs(t,e,i,r){x4(t.x,e.x,i.x,r?r.originX:void 0),x4(t.y,e.y,i.y,r?r.originY:void 0)}function y4(t,e,i){t.min=i.min+e.min,t.max=t.min+jt(e)}function NM(t,e,i){y4(t.x,e.x,i.x),y4(t.y,e.y,i.y)}function v4(t,e,i){t.min=e.min-i.min,t.max=t.min+jt(e)}function Js(t,e,i){v4(t.x,e.x,i.x),v4(t.y,e.y,i.y)}function cn(t){return[t("x"),t("y")]}const By=({current:t})=>t?t.ownerDocument.defaultView:null,w4=(t,e)=>Math.abs(t-e);function BM(t,e){const i=w4(t.x,e.x),r=w4(t.y,e.y);return Math.sqrt(i**2+r**2)}class $y{constructor(e,i,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Xf(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,b=BM(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!b)return;const{point:M}=v,{timestamp:O}=gt;this.history.push({...M,timestamp:O});const{onStart:j,onMove:T}=this.handlers;S||(j&&j(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),T&&T(this.lastMoveEvent,v)},this.handlePointerMove=(v,S)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Zf(S,this.transformPagePoint),Ie.update(this.updatePoint,!0)},this.handlePointerUp=(v,S)=>{this.end();const{onEnd:b,onSessionEnd:M,resumeAnimation:O}=this.handlers;if(this.dragSnapToOrigin&&O&&O(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=Xf(v.type==="pointercancel"?this.lastMoveEventInfo:Zf(S,this.transformPagePoint),this.history);this.startEvent&&b&&b(v,j),M&&M(v,j)},!oh(e))return;this.dragSnapToOrigin=l,this.handlers=i,this.transformPagePoint=r,this.distanceThreshold=u,this.contextWindow=o||window;const d=Eo(e),f=Zf(d,this.transformPagePoint),{point:h}=f,{timestamp:m}=gt;this.history=[{...h,timestamp:m}];const{onSessionStart:y}=i;y&&y(e,Xf(f,this.history)),this.removeListeners=So(Ws(this.contextWindow,"pointermove",this.handlePointerMove),Ws(this.contextWindow,"pointerup",this.handlePointerUp),Ws(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),$i(this.updatePoint)}}function Zf(t,e){return e?{point:e(t.point)}:t}function b4(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Xf({point:t},e){return{point:t,delta:b4(t,_y(e)),offset:b4(t,$M(e)),velocity:_M(e,.1)}}function $M(t){return t[0]}function _y(t){return t[t.length-1]}function _M(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,r=null;const o=_y(t);for(;i>=0&&(r=t[i],!(o.timestamp-r.timestamp>zn(e)));)i--;if(!r)return{x:0,y:0};const l=Pn(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function UM(t,{min:e,max:i},r){return e!==void 0&&t<e?t=r?Ye(e,t,r.min):Math.max(t,e):i!==void 0&&t>i&&(t=r?Ye(i,t,r.max):Math.min(t,i)),t}function S4(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function IM(t,{top:e,left:i,bottom:r,right:o}){return{x:S4(t.x,i,o),y:S4(t.y,e,r)}}function C4(t,e){let i=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,r]=[r,i]),{min:i,max:r}}function GM(t,e){return{x:C4(t.x,e.x),y:C4(t.y,e.y)}}function qM(t,e){let i=.5;const r=jt(t),o=jt(e);return o>r?i=lo(e.min,e.max-r,t.min):r>o&&(i=lo(t.min,t.max-o,e.min)),li(0,1,i)}function YM(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const sp=.35;function FM(t=sp){return t===!1?t=0:t===!0&&(t=sp),{x:T4(t,"left","right"),y:T4(t,"top","bottom")}}function T4(t,e,i){return{min:E4(t,e),max:E4(t,i)}}function E4(t,e){return typeof t=="number"?t:t[e]||0}const ZM=new WeakMap;class XM{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:i=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Eo(y).point)},u=(y,v)=>{const{drag:S,dragPropagation:b,onDragStart:M}=this.getProps();if(S&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=iE(S),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),cn(j=>{let T=this.getAxisMotionValue(j).get()||0;if(Nn.test(T)){const{projection:C}=this.visualElement;if(C&&C.layout){const D=C.layout.layoutBox[j];D&&(T=jt(D)*(parseFloat(T)/100))}}this.originPoint[j]=T}),M&&Ie.postRender(()=>M(y,v)),ap(this.visualElement,"transform");const{animationState:O}=this.visualElement;O&&O.setActive("whileDrag",!0)},d=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v;const{dragPropagation:S,dragDirectionLock:b,onDirectionLock:M,onDrag:O}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:j}=v;if(b&&this.currentDirection===null){this.currentDirection=KM(j),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,j),this.updateAxis("y",v.point,j),this.visualElement.render(),O&&O(y,v)},f=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v,this.stop(y,v),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>cn(y=>{var v;return this.getAnimationState(y)==="paused"&&((v=this.getAxisMotionValue(y).animation)==null?void 0:v.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new $y(e,{onSessionStart:l,onStart:u,onMove:d,onSessionEnd:f,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:By(this.visualElement)})}stop(e,i){const r=e||this.latestPointerEvent,o=i||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:d}=this.getProps();d&&Ie.postRender(()=>d(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(e,i,r){const{drag:o}=this.getProps();if(!r||!Xl(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=UM(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:e,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;e&&mr(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=IM(r.layoutBox,e):this.constraints=!1,this.elastic=FM(i),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&cn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=YM(r.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!mr(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=WE(r,o.root,this.visualElement.getTransformPagePoint());let u=GM(o.layout.layoutBox,l);if(i){const d=i(ZE(u));this.hasMutatedConstraints=!!d,d&&(u=Ty(d))}return u}startAnimation(e){const{drag:i,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:d}=this.getProps(),f=this.constraints||{},h=cn(m=>{if(!Xl(m,i,this.currentDirection))return;let y=f&&f[m]||{};u&&(y={min:0,max:0});const v=o?200:1e6,S=o?40:1e7,b={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...l,...y};return this.startAxisValueAnimation(m,b)});return Promise.all(h).then(d)}startAxisValueAnimation(e,i){const r=this.getAxisMotionValue(e);return ap(this.visualElement,e),r.start(xh(e,r,0,i,this.visualElement,!1))}stopAnimation(){cn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){cn(e=>{var i;return(i=this.getAxisMotionValue(e).animation)==null?void 0:i.pause()})}getAnimationState(e){var i;return(i=this.getAxisMotionValue(e).animation)==null?void 0:i.state}getAxisMotionValue(e){const i=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[i];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){cn(i=>{const{drag:r}=this.getProps();if(!Xl(i,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(i);if(o&&o.layout){const{min:u,max:d}=o.layout.layoutBox[i];l.set(e[i]-Ye(u,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:r}=this.visualElement;if(!mr(i)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};cn(u=>{const d=this.getAxisMotionValue(u);if(d&&this.constraints!==!1){const f=d.get();o[u]=qM({min:f,max:f},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),cn(u=>{if(!Xl(u,e,null))return;const d=this.getAxisMotionValue(u),{min:f,max:h}=this.constraints[u];d.set(Ye(f,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;ZM.set(this.visualElement,this);const e=this.visualElement.current,i=Ws(e,"pointerdown",f=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(f)}),r=()=>{const{dragConstraints:f}=this.getProps();mr(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ie.read(r);const u=ho(window,"resize",()=>this.scalePositionWithinConstraints()),d=o.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&(cn(m=>{const y=this.getAxisMotionValue(m);y&&(this.originPoint[m]+=f[m].translate,y.set(y.get()+f[m].translate))}),this.visualElement.render())});return()=>{u(),i(),l(),d&&d()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=sp,dragMomentum:d=!0}=e;return{...e,drag:i,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:d}}}function Xl(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function KM(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class WM extends Gi{constructor(e){super(e),this.removeGroupControls=un,this.removeListeners=un,this.controls=new XM(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||un}unmount(){this.removeGroupControls(),this.removeListeners()}}const M4=t=>(e,i)=>{t&&Ie.postRender(()=>t(e,i))};class QM extends Gi{constructor(){super(...arguments),this.removePointerDownListener=un}onPointerDown(e){this.session=new $y(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:By(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:M4(e),onStart:M4(i),onMove:r,onEnd:(l,u)=>{delete this.session,o&&Ie.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Ws(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const vc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function A4(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Is={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(he.test(t))t=parseFloat(t);else return t;const i=A4(t,e.target.x),r=A4(t,e.target.y);return`${i}% ${r}%`}},JM={correct:(t,{treeScale:e,projectionDelta:i})=>{const r=t,o=_i.parse(t);if(o.length>5)return r;const l=_i.createTransformer(t),u=typeof o[0]!="number"?1:0,d=i.x.scale*e.x,f=i.y.scale*e.y;o[0+u]/=d,o[1+u]/=f;const h=Ye(d,f,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};let Kf=!1;class eA extends R.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;SE(tA),l&&(i.group&&i.group.add(l),r&&r.register&&o&&r.register(l),Kf&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),vc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:r,drag:o,isPresent:l}=this.props,{projection:u}=r;return u&&(u.isPresent=l,Kf=!0,o||e.layoutDependency!==i||i===void 0||e.isPresent!==l?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Ie.postRender(()=>{const d=u.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),sh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:r}=this.props,{projection:o}=e;Kf=!0,o&&(o.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Uy(t){const[e,i]=cy(),r=R.useContext(Np);return x.jsx(eA,{...t,layoutGroup:r,switchLayoutGroup:R.useContext(Sy),isPresent:e,safeToRemove:i})}const tA={borderRadius:{...Is,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Is,borderTopRightRadius:Is,borderBottomLeftRadius:Is,borderBottomRightRadius:Is,boxShadow:JM};function nA(t,e,i){const r=Ct(t)?t:jr(t);return r.start(xh("",r,e,i)),r.animation}const iA=(t,e)=>t.depth-e.depth;class aA{constructor(){this.children=[],this.isDirty=!1}add(e){_p(this.children,e),this.isDirty=!0}remove(e){Up(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(iA),this.isDirty=!1,this.children.forEach(e)}}function rA(t,e){const i=kt.now(),r=({timestamp:o})=>{const l=o-i;l>=e&&($i(r),t(l-e))};return Ie.setup(r,!0),()=>$i(r)}const Iy=["TopLeft","TopRight","BottomLeft","BottomRight"],sA=Iy.length,j4=t=>typeof t=="string"?parseFloat(t):t,L4=t=>typeof t=="number"||he.test(t);function oA(t,e,i,r,o,l){o?(t.opacity=Ye(0,i.opacity??1,lA(r)),t.opacityExit=Ye(e.opacity??1,0,cA(r))):l&&(t.opacity=Ye(e.opacity??1,i.opacity??1,r));for(let u=0;u<sA;u++){const d=`border${Iy[u]}Radius`;let f=O4(e,d),h=O4(i,d);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||L4(f)===L4(h)?(t[d]=Math.max(Ye(j4(f),j4(h),r),0),(Nn.test(h)||Nn.test(f))&&(t[d]+="%")):t[d]=h}(e.rotate||i.rotate)&&(t.rotate=Ye(e.rotate||0,i.rotate||0,r))}function O4(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const lA=Gy(0,.5,L6),cA=Gy(.5,.95,un);function Gy(t,e,i){return r=>r<t?0:r>e?1:i(lo(t,e,r))}function R4(t,e){t.min=e.min,t.max=e.max}function ln(t,e){R4(t.x,e.x),R4(t.y,e.y)}function D4(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function H4(t,e,i,r,o){return t-=e,t=Oc(t,1/i,r),o!==void 0&&(t=Oc(t,1/o,r)),t}function uA(t,e=0,i=1,r=.5,o,l=t,u=t){if(Nn.test(e)&&(e=parseFloat(e),e=Ye(u.min,u.max,e/100)-u.min),typeof e!="number")return;let d=Ye(l.min,l.max,r);t===l&&(d-=e),t.min=H4(t.min,e,i,d,o),t.max=H4(t.max,e,i,d,o)}function V4(t,e,[i,r,o],l,u){uA(t,e[i],e[r],e[o],e.scale,l,u)}const dA=["x","scaleX","originX"],fA=["y","scaleY","originY"];function k4(t,e,i,r){V4(t.x,e,dA,i?i.x:void 0,r?r.x:void 0),V4(t.y,e,fA,i?i.y:void 0,r?r.y:void 0)}function z4(t){return t.translate===0&&t.scale===1}function qy(t){return z4(t.x)&&z4(t.y)}function P4(t,e){return t.min===e.min&&t.max===e.max}function pA(t,e){return P4(t.x,e.x)&&P4(t.y,e.y)}function N4(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Yy(t,e){return N4(t.x,e.x)&&N4(t.y,e.y)}function B4(t){return jt(t.x)/jt(t.y)}function $4(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class hA{constructor(){this.members=[]}add(e){_p(this.members,e),e.scheduleRender()}remove(e){if(Up(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){const i=this.members.findIndex(o=>e===o);if(i===0)return!1;let r;for(let o=i;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,i){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,i&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:i,resumingFrom:r}=e;i.onExitComplete&&i.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function mA(t,e,i){let r="";const o=t.x.translate/e.x,l=t.y.translate/e.y,u=(i==null?void 0:i.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:h,rotate:m,rotateX:y,rotateY:v,skewX:S,skewY:b}=i;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),y&&(r+=`rotateX(${y}deg) `),v&&(r+=`rotateY(${v}deg) `),S&&(r+=`skewX(${S}deg) `),b&&(r+=`skewY(${b}deg) `)}const d=t.x.scale*e.x,f=t.y.scale*e.y;return(d!==1||f!==1)&&(r+=`scale(${d}, ${f})`),r||"none"}const Wf=["","X","Y","Z"],gA=1e3;let xA=0;function Qf(t,e,i,r){const{latestValues:o}=e;o[t]&&(i[t]=o[t],e.setStaticValue(t,0),r&&(r[t]=0))}function Fy(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const i=Dy(e);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:o,layoutId:l}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",Ie,!(o||l))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&Fy(r)}function Zy({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},d=e==null?void 0:e()){this.id=xA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(wA),this.nodes.forEach(TA),this.nodes.forEach(EA),this.nodes.forEach(bA)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new aA)}addEventListener(u,d){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new qp),this.eventHandlers.get(u).add(d)}notifyListeners(u,...d){const f=this.eventHandlers.get(u);f&&f.notify(...d)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=ly(u)&&!cE(u),this.instance=u;const{layoutId:d,layout:f,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||d)&&(this.isLayoutDirty=!0),t){let m,y=0;const v=()=>this.root.updateBlockedByResize=!1;Ie.read(()=>{y=window.innerWidth}),t(u,()=>{const S=window.innerWidth;S!==y&&(y=S,this.root.updateBlockedByResize=!0,m&&m(),m=rA(v,250),vc.hasAnimatedSinceResize&&(vc.hasAnimatedSinceResize=!1,this.nodes.forEach(I4)))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&h&&(d||f)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:y,hasRelativeLayoutChanged:v,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||h.getDefaultTransition()||OA,{onLayoutAnimationStart:M,onLayoutAnimationComplete:O}=h.getProps(),j=!this.targetLayout||!Yy(this.targetLayout,S),T=!y&&v;if(this.options.layoutRoot||this.resumeFrom||T||y&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...ah(b,"layout"),onPlay:M,onComplete:O};(h.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(m,T)}else y||I4(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),$i(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(MA),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Fy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const y=this.path[m];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:d,layout:f}=this.options;if(d===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(_4);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(U4);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(CA),this.nodes.forEach(yA),this.nodes.forEach(vA)):this.nodes.forEach(U4),this.clearAllSnapshots();const d=kt.now();gt.delta=li(0,1e3/60,d-gt.timestamp),gt.timestamp=d,gt.isProcessing=!0,$f.update.process(gt),$f.preRender.process(gt),$f.render.process(gt),gt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,sh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(SA),this.sharedNodes.forEach(AA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ie.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!jt(this.snapshot.measuredBox.x)&&!jt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(d=!1),d&&this.instance){const f=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:f,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!qy(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&this.instance&&(d||fa(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const d=this.measurePageBox();let f=this.removeElementScroll(d);return u&&(f=this.removeTransform(f)),RA(f),{animationId:this.root.animationId,measuredBox:d,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:u}=this.options;if(!u)return Qe();const d=u.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(DA))){const{scroll:m}=this.root;m&&(gr(d.x,m.offset.x),gr(d.y,m.offset.y))}return d}removeElementScroll(u){var f;const d=Qe();if(ln(d,u),(f=this.scroll)!=null&&f.wasRoot)return d;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:y,options:v}=m;m!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&ln(d,u),gr(d.x,y.offset.x),gr(d.y,y.offset.y))}return d}applyTransform(u,d=!1){const f=Qe();ln(f,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!d&&m.options.layoutScroll&&m.scroll&&m!==m.root&&xr(f,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),fa(m.latestValues)&&xr(f,m.latestValues)}return fa(this.latestValues)&&xr(f,this.latestValues),f}removeTransform(u){const d=Qe();ln(d,u);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!fa(h.latestValues))continue;ep(h.latestValues)&&h.updateSnapshot();const m=Qe(),y=h.measurePageBox();ln(m,y),k4(d,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return fa(this.latestValues)&&k4(d,this.latestValues),d}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==gt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var v;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==d;if(!(u||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:y}=this.options;if(!(!this.layout||!(m||y))){if(this.resolvedRelativeTargetAt=gt.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),Js(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),ln(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),NM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ln(this.target,this.layout.layoutBox),My(this.target,this.targetDelta)):ln(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),Js(this.relativeTargetOrigin,this.target,S.target),ln(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||ep(this.parent.latestValues)||Ey(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var b;const u=this.getLead(),d=!!this.resumingFrom||this!==u;let f=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(f=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===gt.timestamp&&(f=!1),f)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;ln(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,v=this.treeScale.y;KE(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Qe());const{target:S}=u;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(D4(this.prevProjectionDelta.x,this.projectionDelta.x),D4(this.prevProjectionDelta.y,this.projectionDelta.y)),Qs(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==v||!$4(this.projectionDelta.x,this.prevProjectionDelta.x)||!$4(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var d;if((d=this.options.visualElement)==null||d.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=yr(),this.projectionDelta=yr(),this.projectionDeltaWithTransform=yr()}setAnimationOrigin(u,d=!1){const f=this.snapshot,h=f?f.latestValues:{},m={...this.latestValues},y=yr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const v=Qe(),S=f?f.source:void 0,b=this.layout?this.layout.source:void 0,M=S!==b,O=this.getStack(),j=!O||O.members.length<=1,T=!!(M&&!j&&this.options.crossfade===!0&&!this.path.some(LA));this.animationProgress=0;let C;this.mixTargetDelta=D=>{const L=D/1e3;G4(y.x,u.x,L),G4(y.y,u.y,L),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Js(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),jA(this.relativeTarget,this.relativeTargetOrigin,v,L),C&&pA(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=Qe()),ln(C,this.relativeTarget)),M&&(this.animationValues=m,oA(m,h,this.latestValues,L,T,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var d,f,h;this.notifyListeners("animationStart"),(d=this.currentAnimation)==null||d.stop(),(h=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||h.stop(),this.pendingAnimation&&($i(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ie.update(()=>{vc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=jr(0)),this.currentAnimation=nA(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),u.onUpdate&&u.onUpdate(m)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:d,target:f,layout:h,latestValues:m}=u;if(!(!d||!f||!h)){if(this!==u&&this.layout&&h&&Xy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||Qe();const y=jt(this.layout.layoutBox.x);f.x.min=u.target.x.min,f.x.max=f.x.min+y;const v=jt(this.layout.layoutBox.y);f.y.min=u.target.y.min,f.y.max=f.y.min+v}ln(d,f),xr(d,m),Qs(this.projectionDeltaWithTransform,this.layoutCorrected,d,m)}}registerSharedNode(u,d){this.sharedNodes.has(u)||this.sharedNodes.set(u,new hA),this.sharedNodes.get(u).add(d);const h=d.options.initialPromotionConfig;d.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(d):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var d;const{layoutId:u}=this.options;return u?((d=this.getStack())==null?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:u}=this.options;return u?(d=this.getStack())==null?void 0:d.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:d,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),u&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let d=!1;const{latestValues:f}=u;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(d=!0),!d)return;const h={};f.z&&Qf("z",u,h,this.animationValues);for(let m=0;m<Wf.length;m++)Qf(`rotate${Wf[m]}`,u,h,this.animationValues),Qf(`skew${Wf[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}applyProjectionStyles(u,d){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=yc(d==null?void 0:d.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=yc(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!fa(this.latestValues)&&(u.transform=f?f({},""):"none",this.hasProjected=!1);return}u.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let y=mA(this.projectionDeltaWithTransform,this.treeScale,m);f&&(y=f(m,y)),u.transform=y;const{x:v,y:S}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${S.origin*100}% 0`,h.animationValues?u.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const b in po){if(m[b]===void 0)continue;const{correct:M,applyTo:O,isCSSVariable:j}=po[b],T=y==="none"?m[b]:M(m[b],h);if(O){const C=O.length;for(let D=0;D<C;D++)u[O[D]]=T}else j?this.options.visualElement.renderState.vars[b]=T:u[b]=T}this.options.layoutId&&(u.pointerEvents=h===this?yc(d==null?void 0:d.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var d;return(d=u.currentAnimation)==null?void 0:d.stop()}),this.root.nodes.forEach(_4),this.root.sharedNodes.clear()}}}function yA(t){t.updateLayout()}function vA(t){var i;const e=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=t.layout,{animationType:l}=t.options,u=e.source!==t.layout.source;l==="size"?cn(y=>{const v=u?e.measuredBox[y]:e.layoutBox[y],S=jt(v);v.min=r[y].min,v.max=v.min+S}):Xy(l,e.layoutBox,r)&&cn(y=>{const v=u?e.measuredBox[y]:e.layoutBox[y],S=jt(r[y]);v.max=v.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+S)});const d=yr();Qs(d,r,e.layoutBox);const f=yr();u?Qs(f,t.applyTransform(o,!0),e.measuredBox):Qs(f,r,e.layoutBox);const h=!qy(d);let m=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:S}=y;if(v&&S){const b=Qe();Js(b,e.layoutBox,v.layoutBox);const M=Qe();Js(M,r,S.layoutBox),Yy(b,M)||(m=!0),y.options.layoutRoot&&(t.relativeTarget=M,t.relativeTargetOrigin=b,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:f,layoutDelta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:m})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function wA(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function bA(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function SA(t){t.clearSnapshot()}function _4(t){t.clearMeasurements()}function U4(t){t.isLayoutDirty=!1}function CA(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function I4(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function TA(t){t.resolveTargetDelta()}function EA(t){t.calcProjection()}function MA(t){t.resetSkewAndRotation()}function AA(t){t.removeLeadSnapshot()}function G4(t,e,i){t.translate=Ye(e.translate,0,i),t.scale=Ye(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function q4(t,e,i,r){t.min=Ye(e.min,i.min,r),t.max=Ye(e.max,i.max,r)}function jA(t,e,i,r){q4(t.x,e.x,i.x,r),q4(t.y,e.y,i.y,r)}function LA(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const OA={duration:.45,ease:[.4,0,.1,1]},Y4=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),F4=Y4("applewebkit/")&&!Y4("chrome/")?Math.round:un;function Z4(t){t.min=F4(t.min),t.max=F4(t.max)}function RA(t){Z4(t.x),Z4(t.y)}function Xy(t,e,i){return t==="position"||t==="preserve-aspect"&&!PM(B4(e),B4(i),.2)}function DA(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const HA=Zy({attachResizeListener:(t,e)=>ho(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Jf={current:void 0},Ky=Zy({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Jf.current){const t=new HA({});t.mount(window),t.setOptions({layoutScroll:!0}),Jf.current=t}return Jf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),VA={pan:{Feature:QM},drag:{Feature:WM,ProjectionNode:Ky,MeasureLayout:Uy}};function X4(t,e,i){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",i==="Start");const o="onHover"+i,l=r[o];l&&Ie.postRender(()=>l(e,Eo(e)))}class kA extends Gi{mount(){const{current:e}=this.node;e&&(this.unmount=aE(e,(i,r)=>(X4(this.node,r,"Start"),o=>X4(this.node,o,"End"))))}unmount(){}}class zA extends Gi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=So(ho(this.node.current,"focus",()=>this.onFocus()),ho(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function K4(t,e,i){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",i==="Start");const o="onTap"+(i==="End"?"":i),l=r[o];l&&Ie.postRender(()=>l(e,Eo(e)))}class PA extends Gi{mount(){const{current:e}=this.node;e&&(this.unmount=lE(e,(i,r)=>(K4(this.node,r,"Start"),(o,{success:l})=>K4(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const op=new WeakMap,e0=new WeakMap,NA=t=>{const e=op.get(t.target);e&&e(t)},BA=t=>{t.forEach(NA)};function $A({root:t,...e}){const i=t||document;e0.has(i)||e0.set(i,{});const r=e0.get(i),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(BA,{root:t,...e})),r[o]}function _A(t,e,i){const r=$A(e);return op.set(t,i),r.observe(t),()=>{op.delete(t),r.unobserve(t)}}const UA={some:0,all:1};class IA extends Gi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:i,margin:r,amount:o="some",once:l}=e,u={root:i?i.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:UA[o]},d=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:y}=this.node.getProps(),v=h?m:y;v&&v(f)};return _A(this.node.current,u,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(GA(e,i))&&this.startObserver()}unmount(){}}function GA({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const qA={inView:{Feature:IA},tap:{Feature:PA},focus:{Feature:zA},hover:{Feature:kA}},YA={layout:{ProjectionNode:Ky,MeasureLayout:Uy}},FA={...RM,...qA,...VA,...YA},vn=FE(FA,sM),ZA=E.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,XA=E.button`
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
`,t0=E(vn.div)`
  width: 20px;
  height: 2px;
  background: ${({$isOpen:t,$darkMode:e})=>t||e?"black":"white"};
  border-radius: 2px;
  transition: background 0.3s ease;
`,KA=E(vn.div)`
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
    }
  }
`,WA=E(Ii)`
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
`,QA=E.p`
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
`;E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;E(vn.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 8px;
  overflow: hidden;
`;E.div`
  padding: 10px 0;
`;const JA=E.img`
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: ${({$isOpen:t})=>t?"rotate(180deg)":"rotate(0)"};
`;E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  span {
    flex-grow: 1;
  }

  ${JA} {
    padding: 8px;
    margin-right: -8px;
  }
`;const ej=E.div`
  background-color: ${({$active:t})=>t?"#3098EE":"#c3c2c2ff"};
  position: absolute;
  width: 90%;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`,tj=(t,e,i,r)=>{var l,u,d,f;const o=[i,{code:e,...r||{}}];if((u=(l=t==null?void 0:t.services)==null?void 0:l.logger)!=null&&u.forward)return t.services.logger.forward(o,"warn","react-i18next::",!0);wa(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(f=(d=t==null?void 0:t.services)==null?void 0:d.logger)!=null&&f.warn?t.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},W4={},lp=(t,e,i,r)=>{wa(i)&&W4[i]||(wa(i)&&(W4[i]=new Date),tj(t,e,i,r))},Wy=(t,e)=>()=>{if(t.isInitialized)e();else{const i=()=>{setTimeout(()=>{t.off("initialized",i)},0),e()};t.on("initialized",i)}},cp=(t,e,i)=>{t.loadNamespaces(e,Wy(t,i))},Q4=(t,e,i,r)=>{if(wa(i)&&(i=[i]),t.options.preload&&t.options.preload.indexOf(e)>-1)return cp(t,i,r);i.forEach(o=>{t.options.ns.indexOf(o)<0&&t.options.ns.push(o)}),t.loadLanguages(e,Wy(t,r))},nj=(t,e,i={})=>!e.languages||!e.languages.length?(lp(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(t,{lng:i.lng,precheck:(r,o)=>{if(i.bindI18n&&i.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!o(r.isLanguageChangingTo,t))return!1}}),wa=t=>typeof t=="string",ij=t=>typeof t=="object"&&t!==null,aj=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,rj={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},sj=t=>rj[t],oj=t=>t.replace(aj,sj);let up={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:oj};const lj=(t={})=>{up={...up,...t}},cj=()=>up;let Qy;const uj=t=>{Qy=t},dj=()=>Qy,fj={type:"3rdParty",init(t){lj(t.options.react),uj(t)}},pj=R.createContext();class hj{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(i=>{this.usedNamespaces[i]||(this.usedNamespaces[i]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const mj=(t,e)=>{const i=R.useRef();return R.useEffect(()=>{i.current=t},[t,e]),i.current},Jy=(t,e,i,r)=>t.getFixedT(e,i,r),gj=(t,e,i,r)=>R.useCallback(Jy(t,e,i,r),[t,e,i,r]),yh=(t,e={})=>{var D,L,P,k;const{i18n:i}=e,{i18n:r,defaultNS:o}=R.useContext(pj)||{},l=i||r||dj();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new hj),!l){lp(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const _=(Y,F)=>wa(F)?F:ij(F)&&wa(F.defaultValue)?F.defaultValue:Array.isArray(Y)?Y[Y.length-1]:Y,$=[_,{},!1];return $.t=_,$.i18n={},$.ready=!1,$}(D=l.options.react)!=null&&D.wait&&lp(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...cj(),...l.options.react,...e},{useSuspense:d,keyPrefix:f}=u;let h=o||((L=l.options)==null?void 0:L.defaultNS);h=wa(h)?[h]:h||["translation"],(k=(P=l.reportNamespaces).addUsedNamespaces)==null||k.call(P,h);const m=(l.isInitialized||l.initializedStoreOnce)&&h.every(_=>nj(_,l,u)),y=gj(l,e.lng||null,u.nsMode==="fallback"?h:h[0],f),v=()=>y,S=()=>Jy(l,e.lng||null,u.nsMode==="fallback"?h:h[0],f),[b,M]=R.useState(v);let O=h.join();e.lng&&(O=`${e.lng}${O}`);const j=mj(O),T=R.useRef(!0);R.useEffect(()=>{const{bindI18n:_,bindI18nStore:$}=u;T.current=!0,!m&&!d&&(e.lng?Q4(l,e.lng,h,()=>{T.current&&M(S)}):cp(l,h,()=>{T.current&&M(S)})),m&&j&&j!==O&&T.current&&M(S);const Y=()=>{T.current&&M(S)};return _&&(l==null||l.on(_,Y)),$&&(l==null||l.store.on($,Y)),()=>{T.current=!1,l&&_&&(_==null||_.split(" ").forEach(F=>l.off(F,Y))),$&&l&&$.split(" ").forEach(F=>l.store.off(F,Y))}},[l,O]),R.useEffect(()=>{T.current&&m&&M(v)},[l,f,m]);const C=[b,l,m];if(C.t=b,C.i18n=l,C.ready=m,m||!m&&!d)return C;throw new Promise(_=>{e.lng?Q4(l,e.lng,h,()=>_()):cp(l,h,()=>_())})},xj=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  overflow: auto;
  margin-top: 40px;
`,J4=E.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  width: 166px;
`,ki=E.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,yj=E.div`
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
`,vj=E.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
`,wj=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 2 * 0.25rem */
  width: 100%;
`,bj=E.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;
`,Sj=E.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 400;
  line-height: 1.2em;
  width: fit-content;
`,Cj={open:{rotate:45,y:8},closed:{rotate:0,y:0}},Tj={open:{opacity:0},closed:{opacity:1}},Ej={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},Mj={open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},Aj=({isOpen:t,setIsOpen:e})=>{const[,i]=R.useState(!1),{t:r}=yh(),o=pn(),l=["/contact","/service","/tips","/pricing"].some(f=>o.pathname.startsWith(f));R.useEffect(()=>(document.body.style.overflow=t?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[t]);const u=()=>{e(!1),i(!1)},d=[{to:"/home#hero",label:"Home",active:!0},{to:"/service",label:"Services"},{to:"/about#ap",label:"About Us"},{to:"/tips#app",label:"Tips"},{to:"/contact#ap",label:"Contact"}];return x.jsxs(ZA,{children:[x.jsxs(XA,{onClick:()=>e(!t),"aria-label":t?"Close menu":"Open menu",children:[x.jsx(t0,{$isOpen:t,$darkMode:l,animate:t?"open":"closed",variants:Cj}),x.jsx(t0,{$isOpen:t,$darkMode:l,animate:t?"open":"closed",variants:Tj}),x.jsx(t0,{$isOpen:t,$darkMode:l,animate:t?"open":"closed",variants:Ej})]}),x.jsx(uy,{children:t&&x.jsxs(KA,{initial:"closed",animate:"open",exit:"closed",variants:Mj,transition:{duration:.3},children:[d.map((f,h)=>x.jsxs("div",{children:[x.jsx(WA,{to:f.to,onClick:u,children:x.jsx(QA,{$active:f.active,children:r(f.label)})}),x.jsx(ej,{})]},h)),x.jsxs(xj,{children:[x.jsxs(J4,{children:[x.jsx(ki,{children:"Washing Machine Fix"}),x.jsx(ki,{children:"Dishwasher Repair"}),x.jsx(ki,{children:"Oven Maintenance"}),x.jsx(ki,{children:"Dryer Troubleshooting"})]}),x.jsxs(J4,{children:[x.jsx(ki,{children:"Microwave Service"}),x.jsx(ki,{children:"Air Conditioner Repair"}),x.jsx(ki,{children:"Coffee Maker Repair"}),x.jsx(ki,{children:"Blender Maintenance"})]})]}),x.jsxs(yj,{children:[x.jsx(vj,{}),x.jsxs(wj,{children:[x.jsx(bj,{children:"Designed by TRBN"}),x.jsx(Sj,{children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})})]})},jj="/assets/LogoandTextContainer-CnBPFIWK.svg",Lj=E.div`
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
`,Oj=E.img`
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
`,Rj=E.div`
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
`,Dj=E.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Hj=E.p`
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
`,Vj=E.p`
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
`,kj=E.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,ev=E(Ii)`
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
`;E.button`
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
`;E.div`
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
`;E.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;E.div`
  display: flex;
  align-items: center;
  gap: 7px;
  width: 156px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;E.img`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  max-width: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;E.div`
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
`;E.div`
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
`;E.span`
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
`;E.p`
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
`;E.div`
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
`;E.div`
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
`;E.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 1440px) {
    width: auto;
    margin: 0 auto;
  }
`;E.img`
  border-radius: 18px;
  border: 1px solid var(--black);
  width: 36px;
  height: 36px;
  margin-left: -20px;
`;E.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
`;E.div`
  margin: 0 auto;
  width: 285px;
  // height: 43px;
  margin-top: 20px;
  display: flex;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1440px) {
  }
`;E.button`
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
`;bo`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 73, 74, 0.81);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`;E.button`
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
`;const ex="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgBzZFhEcIwDIVTFFRCHYCESZgDJgEHmwPmYJWAhKGgONgccCgoL3e5I1eaAf/I3Xftkry+ZnVUiZyzx9KBPXiAm3Muln27ivCIJYEArmAFLfILCGQFimYTcidwNw8QYSv7A5iEILkBjDUhNy+yD3IQu40q79m9Jm7ALPsOXFRtVe75k7OX+fjAvrjRu7OauaHXz5v5BsqVbzRZYi4moxa+ea4IzkXOi3CgrZDGxLMW39vCilMvwki/hJox0t/FEx1sC+f02XQyAAAAAElFTkSuQmCC",zj=()=>{const[t,e]=R.useState(!1),[i]=R.useState(!1),[r,o]=R.useState(!1),l=pn(),u=["/contact","/service","/tips","/pricing"].some(S=>l.pathname.startsWith(S)),d=i||r,f=Cp(),h=S=>{S.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),window.location.pathname!=="/home"&&f("/home")};R.useEffect(()=>{const S=new IntersectionObserver(([M])=>{e(!M.isIntersecting)},{threshold:.1,rootMargin:"50px 0px 0px 0px"}),b=document.createElement("div");return b.style.position="absolute",b.style.top="50px",b.style.height="1px",b.style.pointerEvents="none",document.body.appendChild(b),S.observe(b),()=>{S.disconnect(),document.body.contains(b)&&document.body.removeChild(b)}},[]);const m=_e({query:"(max-width: 1439px)"}),y=_e({query:"(min-width: 768px) and (max-width: 1439px)"}),v=_e({query:"(min-width: 1440px)"});return x.jsxs(NS,{$isScrolled:t,$darkMode:u,children:[x.jsxs(BS,{id:"header",children:[x.jsx($S,{to:"/home#hero",onClick:h,$overlayOpen:d,$darkMode:u,children:x.jsx("img",{src:jj,alt:"Logo"})}),!m&&x.jsxs(_S,{children:[x.jsx(_s,{children:x.jsx(Us,{to:"/home#hero",$overlayOpen:d,$darkMode:u,children:"Home"})}),x.jsx(_s,{children:x.jsx(Us,{to:"/service#all",$overlayOpen:d,$darkMode:u,children:"Services"})}),x.jsx(_s,{children:x.jsx(Us,{to:"/about#ap",$overlayOpen:d,$darkMode:u,children:"About Us"})}),x.jsx(_s,{children:x.jsx(Us,{to:"/tips#app",$overlayOpen:d,$darkMode:u,children:"Tips"})}),x.jsx(_s,{children:x.jsx(Us,{to:"/contact#ap",$overlayOpen:d,$darkMode:u,children:"Contact"})})]}),v&&x.jsxs(D3,{children:[x.jsxs(Gl,{children:[x.jsx(Vi,{$overlayOpen:d,$darkMode:u,children:x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),x.jsx(Vi,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),x.jsxs(Gl,{children:[x.jsxs(Vi,{$overlayOpen:d,$darkMode:u,children:[x.jsx("img",{src:ex,alt:"🗺️"}),x.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),x.jsx(Vi,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]}),x.jsx(US,{children:x.jsxs("div",{style:{display:"flex"},children:[x.jsx(ev,{to:"/contact#ap",children:"Contact Us"}),x.jsx(h6,{$overlayOpen:d,$darkMode:u,children:x.jsx("a",{href:"tel:+18055002705",children:"Call Us"})}),m&&x.jsx(Aj,{isOpen:r,setIsOpen:o})]})})]}),y&&x.jsxs(D3,{children:[x.jsxs(Gl,{children:[x.jsx(Vi,{$overlayOpen:d,$darkMode:u,children:x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),x.jsx(Vi,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),x.jsxs(Gl,{children:[x.jsxs(Vi,{$overlayOpen:d,$darkMode:u,children:[x.jsx("img",{src:ex,alt:"🗺️"}),x.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),x.jsx(Vi,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]})]})},Pj=E.footer`
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
`,Nj=E.div`
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
`,Bj=E.div`
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
`,zi=E.p`
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
`,$j=E.div`
  @media screen and (min-width: 768px){
display: flex;
 flex-direction: row;
 width: 100%;
 justify-content: space-between;
}

@media screen and (min-width: 1440px){
    
}  
`,_j=E.p`
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
`,Uj=E.div`
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
`,Ij=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px){

}

@media screen and (min-width: 1440px){
    
}  
`,Gj=E.div`
  background: rgba(255, 255, 255, ${({opacity:t})=>t||.5});
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px){

}

@media screen and (min-width: 1440px){
    
}  
`,qj=E.svg`
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px){
    width: 100%;
    height: 114px;
}

@media screen and (min-width: 1440px){
    height: 222px;
}  
`;E.footer`

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
  }`;E.div`
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
  `;E.p`
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
`;E.div`
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
`;E.div`
 display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    gap: 5px;
    @media screen and (min-width: 768px){

}

@media screen and (min-width: 1440px){
    
}  
`;E.a`
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
`;E.div`
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
`;E(Ii)`
font-family: var(--font-family);
font-weight: 400;
font-size: 15px;
color: var(--white-50);
margin-bottom: 10px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;E.a`
font-family: var(--font-family);
font-weight: 400;
font-size: 15px;
color: var(--white-50);
margin-bottom: 10px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;E.div`
display: flex;
margin-bottom: 16px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;E.div`
display: flex;
justify-content: space-between;
margin: 0 auto;
width: 100%;
flex-wrap: wrap;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;E(Ii)`
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
`;E.div`
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
`;E.button`
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
`;E.div`
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
`;E.div`
display: flex;
gap: 12px;
flex-direction: row;
margin: 16px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
;`;E.a`
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;E.img`
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;E.div`
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
`;E.section`
  max-width: 800px;
  margin: 0 auto ;
  padding: 20px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;E.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;E.h2`
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
`;E.p`
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
`;E.div`
 

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
`;E.img`
  width: 56px;
  height: 56px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;const Yj=()=>x.jsx(Pj,{children:x.jsxs(Nj,{children:[x.jsxs(Bj,{children:[x.jsxs(_j,{children:[x.jsx("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:"801 Tioga pl, Newbury Park, CA 91320"})," ",x.jsx("br",{}),x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"}),x.jsx("br",{})," ",x.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]}),x.jsxs(Uj,{children:[x.jsx(zi,{children:"Home"}),x.jsx(zi,{children:"Services"}),x.jsx(zi,{children:"About Us"}),x.jsx(zi,{children:"Tips"}),x.jsx(zi,{children:"Contacts"}),x.jsx(zi,{children:"Privacy and Terms"})]})]}),x.jsxs(Ij,{children:[x.jsxs(qj,{viewBox:"0 0 343 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[x.jsx("path",{d:"M0 54.8045L19.396 1.71207H26.1359L45.457 54.8045H39.9152L34.2238 38.8768H11.2332L5.5417 54.8045H0ZM12.9556 33.9414H32.5013L22.7659 6.27353L12.9556 33.9414Z",fill:"#3098EE"}),x.jsx("path",{d:"M51.2842 54.8045V1.71207H56.3765V54.8045H51.2842Z",fill:"#3098EE"}),x.jsx("path",{d:"M67.6308 54.8045V1.71207H87.1016C90.896 1.71207 94.1161 2.36015 96.7622 3.6563C99.4581 4.9026 101.53 6.69727 102.978 9.04032C104.426 11.3834 105.15 14.2 105.15 17.4902C105.15 19.933 104.575 22.1015 103.427 23.9959C102.329 25.8903 100.856 27.4108 99.0088 28.5574C97.1616 29.704 95.1646 30.3521 93.0178 30.5016L92.6433 29.8286C96.1381 29.8286 98.8341 30.6262 100.731 32.2215C102.678 33.7669 103.802 36.2097 104.101 39.5498L105.449 54.8045H100.282L99.0088 39.9984C98.8091 37.5557 97.9354 35.761 96.3877 34.6144C94.84 33.418 92.3438 32.8197 88.8989 32.8197H72.7232V54.8045H67.6308ZM72.7232 27.8844H87.9254C91.5699 27.8844 94.4407 26.987 96.5375 25.1924C98.6843 23.3478 99.7577 20.7555 99.7577 17.4155C99.7577 13.9258 98.6843 11.2587 96.5375 9.41421C94.3907 7.56968 91.2205 6.64742 87.0267 6.64742H72.7232V27.8844Z",fill:"#3098EE"}),x.jsx("path",{d:"M125.684 54.8045V9.1151H109.359V1.71207H150.098V9.1151H133.772V54.8045H125.684Z",fill:"white"}),x.jsx("path",{d:"M153.991 54.8045V1.71207H188.589V9.1151H162.079V24.5941H187.691V31.7728H162.079V47.4014H189.188V54.8045H153.991Z",fill:"white"}),x.jsx("path",{d:"M192.736 54.8045L210.41 28.1835L192.886 1.71207H202.397L215.502 21.9021L228.383 1.71207H237.819L220.295 28.0339L238.043 54.8045H228.533L215.352 34.3153L202.172 54.8045H192.736Z",fill:"white"}),x.jsx("path",{d:"M243.289 54.8045V1.71207H253.549L278.112 45.0085V1.71207H286.2V54.8045H275.566L251.377 12.4801V54.8045H243.289Z",fill:"white"}),x.jsx("path",{d:"M318.137 56.0009C312.995 56.0009 308.577 54.9042 304.882 52.7107C301.188 50.4674 298.342 47.2768 296.345 43.1391C294.348 39.0014 293.349 34.066 293.349 28.333C293.349 22.6001 294.348 17.6647 296.345 13.527C298.342 9.33943 301.188 6.12397 304.882 3.88063C308.577 1.63729 312.995 0.515625 318.137 0.515625C323.329 0.515625 327.773 1.63729 331.467 3.88063C335.212 6.12397 338.057 9.33943 340.004 13.527C342.001 17.6647 343 22.6001 343 28.333C343 34.066 342.001 39.0014 340.004 43.1391C338.057 47.2768 335.212 50.4674 331.467 52.7107C327.773 54.9042 323.329 56.0009 318.137 56.0009ZM318.137 48.5979C321.582 48.5979 324.528 47.8003 326.974 46.205C329.47 44.6097 331.367 42.3165 332.665 39.3254C333.964 36.2844 334.613 32.6203 334.613 28.333C334.613 24.0458 333.964 20.3817 332.665 17.3407C331.367 14.2997 329.47 11.9816 326.974 10.3863C324.528 8.74121 321.582 7.91865 318.137 7.91865C314.742 7.91865 311.822 8.74121 309.375 10.3863C306.929 11.9816 305.032 14.2997 303.684 17.3407C302.386 20.3817 301.737 24.0458 301.737 28.333C301.737 32.6203 302.386 36.2844 303.684 39.3254C305.032 42.3165 306.929 44.6097 309.375 46.205C311.822 47.8003 314.742 48.5979 318.137 48.5979Z",fill:"white"})]}),x.jsx(Gj,{opacity:.5}),x.jsxs($j,{children:[x.jsx(zi,{size:"14px",weight:"500",children:"Designed by TRBN"}),x.jsx(zi,{size:"14px",children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})}),Fj="data:image/svg+xml,%3csvg%20width='1360'%20height='220'%20viewBox='0%200%201360%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%20215.256L76.9053%204.74393H103.629L180.237%20215.256H158.265L135.698%20152.102H44.5397L21.9729%20215.256H0ZM51.3692%20132.534H128.868L90.2672%2022.8302L51.3692%20132.534Z'%20fill='%233098EE'/%3e%3cpath%20d='M203.342%20215.256V4.74393H223.534V215.256H203.342Z'%20fill='%233098EE'/%3e%3cpath%20d='M268.157%20215.256V4.74393H345.359C360.404%204.74393%20373.172%207.31356%20383.663%2012.4528C394.353%2017.3944%20402.568%2024.5103%20408.309%2033.8005C414.049%2043.0907%20416.92%2054.2588%20416.92%2067.3046C416.92%2076.9901%20414.643%2085.5885%20410.09%2093.0997C405.735%20100.611%20399.896%20106.64%20392.571%20111.186C385.247%20115.732%20377.329%20118.302%20368.817%20118.895L367.332%20116.226C381.189%20116.226%20391.879%20119.389%20399.401%20125.714C407.121%20131.842%20411.575%20141.527%20412.763%20154.771L418.108%20215.256H397.619L392.571%20156.55C391.78%20146.864%20388.315%20139.748%20382.179%20135.202C376.042%20130.458%20366.144%20128.086%20352.486%20128.086H288.348V215.256H268.157ZM288.348%20108.518H348.626C363.076%20108.518%20374.459%20104.96%20382.773%2097.8437C391.285%2090.5301%20395.541%2080.2516%20395.541%2067.0081C395.541%2053.1716%20391.285%2042.5966%20382.773%2035.283C374.261%2027.9694%20361.69%2024.3127%20345.062%2024.3127H288.348V108.518Z'%20fill='%233098EE'/%3e%3cpath%20d='M498.339%20215.256V34.097H433.608V4.74393H595.139V34.097H530.408V215.256H498.339Z'%20fill='white'/%3e%3cpath%20d='M610.577%20215.256V4.74393H747.76V34.097H642.646V95.4717H744.196V123.935H642.646V185.903H750.135V215.256H610.577Z'%20fill='white'/%3e%3cpath%20d='M764.202%20215.256L834.278%20109.704L764.796%204.74393H802.506L854.469%2084.7978L905.542%204.74393H942.955L873.473%20109.111L943.846%20215.256H906.135L853.875%20134.016L801.616%20215.256H764.202Z'%20fill='white'/%3e%3cpath%20d='M964.645%20215.256V4.74393H1005.32L1102.72%20176.415V4.74393H1134.79V215.256H1092.62L996.714%2047.4393V215.256H964.645Z'%20fill='white'/%3e%3cpath%20d='M1261.42%20220C1241.03%20220%201223.51%20215.651%201208.86%20206.954C1194.21%20198.059%201182.93%20185.409%201175.01%20169.003C1167.09%20152.597%201163.13%20133.028%201163.13%20110.296C1163.13%2087.5651%201167.09%2067.9964%201175.01%2051.5903C1182.93%2034.9865%201194.21%2022.2372%201208.86%2013.3423C1223.51%204.44743%201241.03%200%201261.42%200C1282.01%200%201299.62%204.44743%201314.27%2013.3423C1329.12%2022.2372%201340.4%2034.9865%201348.12%2051.5903C1356.04%2067.9964%201360%2087.5651%201360%20110.296C1360%20133.028%201356.04%20152.597%201348.12%20169.003C1340.4%20185.409%201329.12%20198.059%201314.27%20206.954C1299.62%20215.651%201282.01%20220%201261.42%20220ZM1261.42%20190.647C1275.08%20190.647%201286.76%20187.484%201296.46%20181.159C1306.35%20174.834%201313.88%20165.741%201319.02%20153.881C1324.17%20141.824%201326.74%20127.296%201326.74%20110.296C1326.74%2093.2974%201324.17%2078.7691%201319.02%2066.7116C1313.88%2054.6541%201306.35%2045.4627%201296.46%2039.1375C1286.76%2032.6145%201275.08%2029.3531%201261.42%2029.3531C1247.96%2029.3531%201236.38%2032.6145%201226.68%2039.1375C1216.98%2045.4627%201209.46%2054.6541%201204.11%2066.7116C1198.96%2078.7691%201196.39%2093.2974%201196.39%20110.296C1196.39%20127.296%201198.96%20141.824%201204.11%20153.881C1209.46%20165.741%201216.98%20174.834%201226.68%20181.159C1236.38%20187.484%201247.96%20190.647%201261.42%20190.647Z'%20fill='white'/%3e%3c/svg%3e",Zj="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",Xj=bo`
  from { opacity: 0; }
  to { opacity: 1; }
`,Kj=bo`
  from { opacity: 1; }
  to { opacity: 0; }
`,Wj=bo`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
`,Qj=E.div`
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  ${({$hide:t})=>t&&zr`
      animation: ${Kj} 1s forwards;
    `}
`,Jj=E.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  ${({$visible:t})=>t&&zr`
      animation: ${Xj} 1.5s forwards;
    `}
`,eL=E.img`
  position: absolute;
  width: min-content;
  height: 27px;
  opacity: 0;
  ${({$show:t})=>t&&zr`
      animation: ${Wj} 2s forwards;
    `}

      @media screen and (min-width: 744px) {
   height: 100px;
  }

  @media screen and (min-width: 1440px) {
  height: 240px;
  }
`,tL=({onComplete:t})=>{const[e,i]=R.useState(!0),[r,o]=R.useState(!1),[l,u]=R.useState(!1),d=R.useRef(null);return R.useEffect(()=>{d.current&&(d.current.onended=()=>{i(!1),o(!0),setTimeout(()=>{u(!0),setTimeout(t,1e3)},3e3)})},[t]),x.jsxs(Qj,{$hide:l,children:[e&&x.jsx(Jj,{ref:d,$visible:e,autoPlay:!0,muted:!0,playsInline:!0,children:x.jsx("source",{src:Zj,type:"video/mp4"})}),r&&x.jsx(eL,{src:Fj,alt:"Logo",$show:r})]})},nL=()=>{const t=pn(),[e,i]=R.useState(!1);R.useEffect(()=>{const o=()=>{sessionStorage.clear()};return window.addEventListener("beforeunload",o),()=>{window.removeEventListener("beforeunload",o)}},[]),R.useEffect(()=>{sessionStorage.getItem("hasSeenPreloader")||i(!0)},[]);const r=()=>{sessionStorage.setItem("hasSeenPreloader","true"),i(!1)};return R.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[t.pathname]),e?x.jsx(tL,{onComplete:r}):x.jsxs(x.Fragment,{children:[x.jsx(zj,{}),x.jsx(R.Suspense,{children:x.jsx(sw,{})}),x.jsx(Yj,{})]})};function tx(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function vh(t,e){t===void 0&&(t={}),e===void 0&&(e={});const i=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:tx(e[r])&&tx(t[r])&&Object.keys(e[r]).length>0&&vh(t[r],e[r])})}const tv={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Bn(){const t=typeof document<"u"?document:{};return vh(t,tv),t}const iL={document:tv,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function Tt(){const t=typeof window<"u"?window:{};return vh(t,iL),t}function aL(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function rL(t){const e=t;Object.keys(e).forEach(i=>{try{e[i]=null}catch{}try{delete e[i]}catch{}})}function Rc(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function ri(){return Date.now()}function sL(t){const e=Tt();let i;return e.getComputedStyle&&(i=e.getComputedStyle(t,null)),!i&&t.currentStyle&&(i=t.currentStyle),i||(i=t.style),i}function oL(t,e){e===void 0&&(e="x");const i=Tt();let r,o,l;const u=sL(t);return i.WebKitCSSMatrix?(o=u.transform||u.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(d=>d.replace(",",".")).join(", ")),l=new i.WebKitCSSMatrix(o==="none"?"":o)):(l=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=l.toString().split(",")),e==="x"&&(i.WebKitCSSMatrix?o=l.m41:r.length===16?o=parseFloat(r[12]):o=parseFloat(r[4])),e==="y"&&(i.WebKitCSSMatrix?o=l.m42:r.length===16?o=parseFloat(r[13]):o=parseFloat(r[5])),o||0}function Kl(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function lL(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Ft(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){const r=i<0||arguments.length<=i?void 0:arguments[i];if(r!=null&&!lL(r)){const o=Object.keys(Object(r)).filter(l=>e.indexOf(l)<0);for(let l=0,u=o.length;l<u;l+=1){const d=o[l],f=Object.getOwnPropertyDescriptor(r,d);f!==void 0&&f.enumerable&&(Kl(t[d])&&Kl(r[d])?r[d].__swiper__?t[d]=r[d]:Ft(t[d],r[d]):!Kl(t[d])&&Kl(r[d])?(t[d]={},r[d].__swiper__?t[d]=r[d]:Ft(t[d],r[d])):t[d]=r[d])}}}return t}function Wl(t,e,i){t.style.setProperty(e,i)}function nv(t){let{swiper:e,targetPosition:i,side:r}=t;const o=Tt(),l=-e.translate;let u=null,d;const f=e.params.speed;e.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(e.cssModeFrameID);const h=i>l?"next":"prev",m=(v,S)=>h==="next"&&v>=S||h==="prev"&&v<=S,y=()=>{d=new Date().getTime(),u===null&&(u=d);const v=Math.max(Math.min((d-u)/f,1),0),S=.5-Math.cos(v*Math.PI)/2;let b=l+S*(i-l);if(m(b,i)&&(b=i),e.wrapperEl.scrollTo({[r]:b}),m(b,i)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:b})}),o.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=o.requestAnimationFrame(y)};y()}function Hn(t,e){e===void 0&&(e="");const i=Tt(),r=[...t.children];return i.HTMLSlotElement&&t instanceof HTMLSlotElement&&r.push(...t.assignedElements()),e?r.filter(o=>o.matches(e)):r}function cL(t,e){const i=[e];for(;i.length>0;){const r=i.shift();if(t===r)return!0;i.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function uL(t,e){const i=Tt();let r=e.contains(t);return!r&&i.HTMLSlotElement&&e instanceof HTMLSlotElement&&(r=[...e.assignedElements()].includes(t),r||(r=cL(t,e))),r}function Dc(t){try{console.warn(t);return}catch{}}function Hc(t,e){e===void 0&&(e=[]);const i=document.createElement(t);return i.classList.add(...Array.isArray(e)?e:aL(e)),i}function dL(t,e){const i=[];for(;t.previousElementSibling;){const r=t.previousElementSibling;e?r.matches(e)&&i.push(r):i.push(r),t=r}return i}function fL(t,e){const i=[];for(;t.nextElementSibling;){const r=t.nextElementSibling;e?r.matches(e)&&i.push(r):i.push(r),t=r}return i}function Bi(t,e){return Tt().getComputedStyle(t,null).getPropertyValue(e)}function Vc(t){let e=t,i;if(e){for(i=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(i+=1);return i}}function iv(t,e){const i=[];let r=t.parentElement;for(;r;)e?r.matches(e)&&i.push(r):i.push(r),r=r.parentElement;return i}function dp(t,e,i){const r=Tt();return t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function dt(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}function kc(t,e){e===void 0&&(e=""),typeof trustedTypes<"u"?t.innerHTML=trustedTypes.createPolicy("html",{createHTML:i=>i}).createHTML(e):t.innerHTML=e}function n0(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l=Tt();i({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let u,d=ri(),f;const h=[];function m(C){let k=0,_=0,$=0,Y=0;return"detail"in C&&(_=C.detail),"wheelDelta"in C&&(_=-C.wheelDelta/120),"wheelDeltaY"in C&&(_=-C.wheelDeltaY/120),"wheelDeltaX"in C&&(k=-C.wheelDeltaX/120),"axis"in C&&C.axis===C.HORIZONTAL_AXIS&&(k=_,_=0),$=k*10,Y=_*10,"deltaY"in C&&(Y=C.deltaY),"deltaX"in C&&($=C.deltaX),C.shiftKey&&!$&&($=Y,Y=0),($||Y)&&C.deltaMode&&(C.deltaMode===1?($*=40,Y*=40):($*=800,Y*=800)),$&&!k&&(k=$<1?-1:1),Y&&!_&&(_=Y<1?-1:1),{spinX:k,spinY:_,pixelX:$,pixelY:Y}}function y(){e.enabled&&(e.mouseEntered=!0)}function v(){e.enabled&&(e.mouseEntered=!1)}function S(C){return e.params.mousewheel.thresholdDelta&&C.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&ri()-d<e.params.mousewheel.thresholdTime?!1:C.delta>=6&&ri()-d<60?!0:(C.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),o("scroll",C.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),o("scroll",C.raw)),d=new l.Date().getTime(),!1)}function b(C){const D=e.params.mousewheel;if(C.direction<0){if(e.isEnd&&!e.params.loop&&D.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&D.releaseOnEdges)return!0;return!1}function M(C){let D=C,L=!0;if(!e.enabled||C.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const P=e.params.mousewheel;e.params.cssMode&&D.preventDefault();let k=e.el;e.params.mousewheel.eventsTarget!=="container"&&(k=document.querySelector(e.params.mousewheel.eventsTarget));const _=k&&k.contains(D.target);if(!e.mouseEntered&&!_&&!P.releaseOnEdges)return!0;D.originalEvent&&(D=D.originalEvent);let $=0;const Y=e.rtlTranslate?-1:1,F=m(D);if(P.forceToAxis)if(e.isHorizontal())if(Math.abs(F.pixelX)>Math.abs(F.pixelY))$=-F.pixelX*Y;else return!0;else if(Math.abs(F.pixelY)>Math.abs(F.pixelX))$=-F.pixelY;else return!0;else $=Math.abs(F.pixelX)>Math.abs(F.pixelY)?-F.pixelX*Y:-F.pixelY;if($===0)return!0;P.invert&&($=-$);let te=e.getTranslate()+$*P.sensitivity;if(te>=e.minTranslate()&&(te=e.minTranslate()),te<=e.maxTranslate()&&(te=e.maxTranslate()),L=e.params.loop?!0:!(te===e.minTranslate()||te===e.maxTranslate()),L&&e.params.nested&&D.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const ie={time:ri(),delta:Math.abs($),direction:Math.sign($),raw:C};h.length>=2&&h.shift();const oe=h.length?h[h.length-1]:void 0;if(h.push(ie),oe?(ie.direction!==oe.direction||ie.delta>oe.delta||ie.time>oe.time+150)&&S(ie):S(ie),b(ie))return!0}else{const ie={time:ri(),delta:Math.abs($),direction:Math.sign($)},oe=f&&ie.time<f.time+500&&ie.delta<=f.delta&&ie.direction===f.direction;if(!oe){f=void 0;let re=e.getTranslate()+$*P.sensitivity;const B=e.isBeginning,K=e.isEnd;if(re>=e.minTranslate()&&(re=e.minTranslate()),re<=e.maxTranslate()&&(re=e.maxTranslate()),e.setTransition(0),e.setTranslate(re),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!B&&e.isBeginning||!K&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:ie.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(u),u=void 0,h.length>=15&&h.shift();const W=h.length?h[h.length-1]:void 0,ee=h[0];if(h.push(ie),W&&(ie.delta>W.delta||ie.direction!==W.direction))h.splice(0);else if(h.length>=15&&ie.time-ee.time<500&&ee.delta-ie.delta>=1&&ie.delta<=6){const H=$>0?.8:.2;f=ie,h.splice(0),u=Rc(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,H)},0)}u||(u=Rc(()=>{if(e.destroyed||!e.params)return;const H=.5;f=ie,h.splice(0),e.slideToClosest(e.params.speed,!0,void 0,H)},500))}if(oe||o("scroll",D),e.params.autoplay&&e.params.autoplay.disableOnInteraction&&e.autoplay.stop(),P.releaseOnEdges&&(re===e.minTranslate()||re===e.maxTranslate()))return!0}}return D.preventDefault?D.preventDefault():D.returnValue=!1,!1}function O(C){let D=e.el;e.params.mousewheel.eventsTarget!=="container"&&(D=document.querySelector(e.params.mousewheel.eventsTarget)),D[C]("mouseenter",y),D[C]("mouseleave",v),D[C]("wheel",M)}function j(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",M),!0):e.mousewheel.enabled?!1:(O("addEventListener"),e.mousewheel.enabled=!0,!0)}function T(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,M),!0):e.mousewheel.enabled?(O("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}r("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&T(),e.params.mousewheel.enabled&&j()}),r("destroy",()=>{e.params.cssMode&&j(),e.mousewheel.enabled&&T()}),Object.assign(e.mousewheel,{enable:j,disable:T})}function av(t,e,i,r){return t.params.createElements&&Object.keys(r).forEach(o=>{if(!i[o]&&i.auto===!0){let l=Hn(t.el,`.${r[o]}`)[0];l||(l=Hc("div",r[o]),l.className=r[o],t.el.append(l)),i[o]=l,e[o]=l}}),i}function rv(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function l(b){let M;return b&&typeof b=="string"&&e.isElement&&(M=e.el.querySelector(b)||e.hostEl.querySelector(b),M)?M:(b&&(typeof b=="string"&&(M=[...document.querySelectorAll(b)]),e.params.uniqueNavElements&&typeof b=="string"&&M&&M.length>1&&e.el.querySelectorAll(b).length===1?M=e.el.querySelector(b):M&&M.length===1&&(M=M[0])),b&&!M?b:M)}function u(b,M){const O=e.params.navigation;b=dt(b),b.forEach(j=>{j&&(j.classList[M?"add":"remove"](...O.disabledClass.split(" ")),j.tagName==="BUTTON"&&(j.disabled=M),e.params.watchOverflow&&e.enabled&&j.classList[e.isLocked?"add":"remove"](O.lockClass))})}function d(){const{nextEl:b,prevEl:M}=e.navigation;if(e.params.loop){u(M,!1),u(b,!1);return}u(M,e.isBeginning&&!e.params.rewind),u(b,e.isEnd&&!e.params.rewind)}function f(b){b.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),o("navigationPrev"))}function h(b){b.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),o("navigationNext"))}function m(){const b=e.params.navigation;if(e.params.navigation=av(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(b.nextEl||b.prevEl))return;let M=l(b.nextEl),O=l(b.prevEl);Object.assign(e.navigation,{nextEl:M,prevEl:O}),M=dt(M),O=dt(O);const j=(T,C)=>{T&&T.addEventListener("click",C==="next"?h:f),!e.enabled&&T&&T.classList.add(...b.lockClass.split(" "))};M.forEach(T=>j(T,"next")),O.forEach(T=>j(T,"prev"))}function y(){let{nextEl:b,prevEl:M}=e.navigation;b=dt(b),M=dt(M);const O=(j,T)=>{j.removeEventListener("click",T==="next"?h:f),j.classList.remove(...e.params.navigation.disabledClass.split(" "))};b.forEach(j=>O(j,"next")),M.forEach(j=>O(j,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?S():(m(),d())}),r("toEdge fromEdge lock unlock",()=>{d()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{nextEl:b,prevEl:M}=e.navigation;if(b=dt(b),M=dt(M),e.enabled){d();return}[...b,...M].filter(O=>!!O).forEach(O=>O.classList.add(e.params.navigation.lockClass))}),r("click",(b,M)=>{let{nextEl:O,prevEl:j}=e.navigation;O=dt(O),j=dt(j);const T=M.target;let C=j.includes(T)||O.includes(T);if(e.isElement&&!C){const D=M.path||M.composedPath&&M.composedPath();D&&(C=D.find(L=>O.includes(L)||j.includes(L)))}if(e.params.navigation.hideOnClick&&!C){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===T||e.pagination.el.contains(T)))return;let D;O.length?D=O[0].classList.contains(e.params.navigation.hiddenClass):j.length&&(D=j[0].classList.contains(e.params.navigation.hiddenClass)),o(D===!0?"navigationShow":"navigationHide"),[...O,...j].filter(L=>!!L).forEach(L=>L.classList.toggle(e.params.navigation.hiddenClass))}});const v=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),m(),d()},S=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),y()};Object.assign(e.navigation,{enable:v,disable:S,update:d,init:m,destroy:y})}function Gs(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function pL(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:T=>T,formatFractionTotal:T=>T,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),e.pagination={el:null,bullets:[]};let u,d=0;function f(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function h(T,C){const{bulletActiveClass:D}=e.params.pagination;T&&(T=T[`${C==="prev"?"previous":"next"}ElementSibling`],T&&(T.classList.add(`${D}-${C}`),T=T[`${C==="prev"?"previous":"next"}ElementSibling`],T&&T.classList.add(`${D}-${C}-${C}`)))}function m(T,C,D){if(T=T%D,C=C%D,C===T+1)return"next";if(C===T-1)return"previous"}function y(T){const C=T.target.closest(Gs(e.params.pagination.bulletClass));if(!C)return;T.preventDefault();const D=Vc(C)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===D)return;const L=m(e.realIndex,D,e.slides.length);L==="next"?e.slideNext():L==="previous"?e.slidePrev():e.slideToLoop(D)}else e.slideTo(D)}function v(){const T=e.rtl,C=e.params.pagination;if(f())return;let D=e.pagination.el;D=dt(D);let L,P;const k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(k/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(P=e.previousRealIndex||0,L=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(L=e.snapIndex,P=e.previousSnapIndex):(P=e.previousIndex||0,L=e.activeIndex||0),C.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const $=e.pagination.bullets;let Y,F,te;if(C.dynamicBullets&&(u=dp($[0],e.isHorizontal()?"width":"height"),D.forEach(ie=>{ie.style[e.isHorizontal()?"width":"height"]=`${u*(C.dynamicMainBullets+4)}px`}),C.dynamicMainBullets>1&&P!==void 0&&(d+=L-(P||0),d>C.dynamicMainBullets-1?d=C.dynamicMainBullets-1:d<0&&(d=0)),Y=Math.max(L-d,0),F=Y+(Math.min($.length,C.dynamicMainBullets)-1),te=(F+Y)/2),$.forEach(ie=>{const oe=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(re=>`${C.bulletActiveClass}${re}`)].map(re=>typeof re=="string"&&re.includes(" ")?re.split(" "):re).flat();ie.classList.remove(...oe)}),D.length>1)$.forEach(ie=>{const oe=Vc(ie);oe===L?ie.classList.add(...C.bulletActiveClass.split(" ")):e.isElement&&ie.setAttribute("part","bullet"),C.dynamicBullets&&(oe>=Y&&oe<=F&&ie.classList.add(...`${C.bulletActiveClass}-main`.split(" ")),oe===Y&&h(ie,"prev"),oe===F&&h(ie,"next"))});else{const ie=$[L];if(ie&&ie.classList.add(...C.bulletActiveClass.split(" ")),e.isElement&&$.forEach((oe,re)=>{oe.setAttribute("part",re===L?"bullet-active":"bullet")}),C.dynamicBullets){const oe=$[Y],re=$[F];for(let B=Y;B<=F;B+=1)$[B]&&$[B].classList.add(...`${C.bulletActiveClass}-main`.split(" "));h(oe,"prev"),h(re,"next")}}if(C.dynamicBullets){const ie=Math.min($.length,C.dynamicMainBullets+4),oe=(u*ie-u)/2-te*u,re=T?"right":"left";$.forEach(B=>{B.style[e.isHorizontal()?re:"top"]=`${oe}px`})}}D.forEach(($,Y)=>{if(C.type==="fraction"&&($.querySelectorAll(Gs(C.currentClass)).forEach(F=>{F.textContent=C.formatFractionCurrent(L+1)}),$.querySelectorAll(Gs(C.totalClass)).forEach(F=>{F.textContent=C.formatFractionTotal(_)})),C.type==="progressbar"){let F;C.progressbarOpposite?F=e.isHorizontal()?"vertical":"horizontal":F=e.isHorizontal()?"horizontal":"vertical";const te=(L+1)/_;let ie=1,oe=1;F==="horizontal"?ie=te:oe=te,$.querySelectorAll(Gs(C.progressbarFillClass)).forEach(re=>{re.style.transform=`translate3d(0,0,0) scaleX(${ie}) scaleY(${oe})`,re.style.transitionDuration=`${e.params.speed}ms`})}C.type==="custom"&&C.renderCustom?(kc($,C.renderCustom(e,L+1,_)),Y===0&&o("paginationRender",$)):(Y===0&&o("paginationRender",$),o("paginationUpdate",$)),e.params.watchOverflow&&e.enabled&&$.classList[e.isLocked?"add":"remove"](C.lockClass)})}function S(){const T=e.params.pagination;if(f())return;const C=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let D=e.pagination.el;D=dt(D);let L="";if(T.type==="bullets"){let P=e.params.loop?Math.ceil(C/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&P>C&&(P=C);for(let k=0;k<P;k+=1)T.renderBullet?L+=T.renderBullet.call(e,k,T.bulletClass):L+=`<${T.bulletElement} ${e.isElement?'part="bullet"':""} class="${T.bulletClass}"></${T.bulletElement}>`}T.type==="fraction"&&(T.renderFraction?L=T.renderFraction.call(e,T.currentClass,T.totalClass):L=`<span class="${T.currentClass}"></span> / <span class="${T.totalClass}"></span>`),T.type==="progressbar"&&(T.renderProgressbar?L=T.renderProgressbar.call(e,T.progressbarFillClass):L=`<span class="${T.progressbarFillClass}"></span>`),e.pagination.bullets=[],D.forEach(P=>{T.type!=="custom"&&kc(P,L||""),T.type==="bullets"&&e.pagination.bullets.push(...P.querySelectorAll(Gs(T.bulletClass)))}),T.type!=="custom"&&o("paginationRender",D[0])}function b(){e.params.pagination=av(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const T=e.params.pagination;if(!T.el)return;let C;typeof T.el=="string"&&e.isElement&&(C=e.el.querySelector(T.el)),!C&&typeof T.el=="string"&&(C=[...document.querySelectorAll(T.el)]),C||(C=T.el),!(!C||C.length===0)&&(e.params.uniqueNavElements&&typeof T.el=="string"&&Array.isArray(C)&&C.length>1&&(C=[...e.el.querySelectorAll(T.el)],C.length>1&&(C=C.find(D=>iv(D,".swiper")[0]===e.el))),Array.isArray(C)&&C.length===1&&(C=C[0]),Object.assign(e.pagination,{el:C}),C=dt(C),C.forEach(D=>{T.type==="bullets"&&T.clickable&&D.classList.add(...(T.clickableClass||"").split(" ")),D.classList.add(T.modifierClass+T.type),D.classList.add(e.isHorizontal()?T.horizontalClass:T.verticalClass),T.type==="bullets"&&T.dynamicBullets&&(D.classList.add(`${T.modifierClass}${T.type}-dynamic`),d=0,T.dynamicMainBullets<1&&(T.dynamicMainBullets=1)),T.type==="progressbar"&&T.progressbarOpposite&&D.classList.add(T.progressbarOppositeClass),T.clickable&&D.addEventListener("click",y),e.enabled||D.classList.add(T.lockClass)}))}function M(){const T=e.params.pagination;if(f())return;let C=e.pagination.el;C&&(C=dt(C),C.forEach(D=>{D.classList.remove(T.hiddenClass),D.classList.remove(T.modifierClass+T.type),D.classList.remove(e.isHorizontal()?T.horizontalClass:T.verticalClass),T.clickable&&(D.classList.remove(...(T.clickableClass||"").split(" ")),D.removeEventListener("click",y))})),e.pagination.bullets&&e.pagination.bullets.forEach(D=>D.classList.remove(...T.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const T=e.params.pagination;let{el:C}=e.pagination;C=dt(C),C.forEach(D=>{D.classList.remove(T.horizontalClass,T.verticalClass),D.classList.add(e.isHorizontal()?T.horizontalClass:T.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?j():(b(),S(),v())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&v()}),r("snapIndexChange",()=>{v()}),r("snapGridLengthChange",()=>{S(),v()}),r("destroy",()=>{M()}),r("enable disable",()=>{let{el:T}=e.pagination;T&&(T=dt(T),T.forEach(C=>C.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{v()}),r("click",(T,C)=>{const D=C.target,L=dt(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&L&&L.length>0&&!D.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&D===e.navigation.nextEl||e.navigation.prevEl&&D===e.navigation.prevEl))return;const P=L[0].classList.contains(e.params.pagination.hiddenClass);o(P===!0?"paginationShow":"paginationHide"),L.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const O=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:T}=e.pagination;T&&(T=dt(T),T.forEach(C=>C.classList.remove(e.params.pagination.paginationDisabledClass))),b(),S(),v()},j=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:T}=e.pagination;T&&(T=dt(T),T.forEach(C=>C.classList.add(e.params.pagination.paginationDisabledClass))),M()};Object.assign(e.pagination,{enable:O,disable:j,render:S,update:v,init:b,destroy:M})}function dn(t){let{swiper:e,extendParams:i,on:r,emit:o,params:l}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,d,f=l&&l.autoplay?l.autoplay.delay:3e3,h=l&&l.autoplay?l.autoplay.delay:3e3,m,y=new Date().getTime(),v,S,b,M,O,j,T;function C(W){!e||e.destroyed||!e.wrapperEl||W.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",C),!(T||W.detail&&W.detail.bySwiperTouchMove)&&Y())}const D=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?v=!0:v&&(h=m,v=!1);const W=e.autoplay.paused?m:y+h-new Date().getTime();e.autoplay.timeLeft=W,o("autoplayTimeLeft",W,W/f),d=requestAnimationFrame(()=>{D()})},L=()=>{let W;return e.virtual&&e.params.virtual.enabled?W=e.slides.find(H=>H.classList.contains("swiper-slide-active")):W=e.slides[e.activeIndex],W?parseInt(W.getAttribute("data-swiper-autoplay"),10):void 0},P=W=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(d),D();let ee=typeof W>"u"?e.params.autoplay.delay:W;f=e.params.autoplay.delay,h=e.params.autoplay.delay;const H=L();!Number.isNaN(H)&&H>0&&typeof W>"u"&&(ee=H,f=H,h=H),m=ee;const Z=e.params.speed,ne=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(Z,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,Z,!0,!0),o("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(Z,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,Z,!0,!0),o("autoplay")),e.params.cssMode&&(y=new Date().getTime(),requestAnimationFrame(()=>{P()})))};return ee>0?(clearTimeout(u),u=setTimeout(()=>{ne()},ee)):requestAnimationFrame(()=>{ne()}),ee},k=()=>{y=new Date().getTime(),e.autoplay.running=!0,P(),o("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(d),o("autoplayStop")},$=(W,ee)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(u),W||(j=!0);const H=()=>{o("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",C):Y()};if(e.autoplay.paused=!0,ee){O&&(m=e.params.autoplay.delay),O=!1,H();return}m=(m||e.params.autoplay.delay)-(new Date().getTime()-y),!(e.isEnd&&m<0&&!e.params.loop)&&(m<0&&(m=0),H())},Y=()=>{e.isEnd&&m<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(y=new Date().getTime(),j?(j=!1,P(m)):P(),e.autoplay.paused=!1,o("autoplayResume"))},F=()=>{if(e.destroyed||!e.autoplay.running)return;const W=Bn();W.visibilityState==="hidden"&&(j=!0,$(!0)),W.visibilityState==="visible"&&Y()},te=W=>{W.pointerType==="mouse"&&(j=!0,T=!0,!(e.animating||e.autoplay.paused)&&$(!0))},ie=W=>{W.pointerType==="mouse"&&(T=!1,e.autoplay.paused&&Y())},oe=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",te),e.el.addEventListener("pointerleave",ie))},re=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",te),e.el.removeEventListener("pointerleave",ie))},B=()=>{Bn().addEventListener("visibilitychange",F)},K=()=>{Bn().removeEventListener("visibilitychange",F)};r("init",()=>{e.params.autoplay.enabled&&(oe(),B(),k())}),r("destroy",()=>{re(),K(),e.autoplay.running&&_()}),r("_freeModeStaticRelease",()=>{(b||j)&&Y()}),r("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():$(!0,!0)}),r("beforeTransitionStart",(W,ee,H)=>{e.destroyed||!e.autoplay.running||(H||!e.params.autoplay.disableOnInteraction?$(!0,!0):_())}),r("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}S=!0,b=!1,j=!1,M=setTimeout(()=>{j=!0,b=!0,$(!0)},200)}}),r("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!S)){if(clearTimeout(M),clearTimeout(u),e.params.autoplay.disableOnInteraction){b=!1,S=!1;return}b&&e.params.cssMode&&Y(),b=!1,S=!1}}),r("slideChange",()=>{e.destroyed||!e.autoplay.running||(O=!0)}),Object.assign(e.autoplay,{start:k,stop:_,pause:$,resume:Y})}let i0;function hL(){const t=Tt(),e=Bn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function sv(){return i0||(i0=hL()),i0}let a0;function mL(t){let{userAgent:e}=t===void 0?{}:t;const i=sv(),r=Tt(),o=r.navigator.platform,l=e||r.navigator.userAgent,u={ios:!1,android:!1},d=r.screen.width,f=r.screen.height,h=l.match(/(Android);?[\s\/]+([\d.]+)?/);let m=l.match(/(iPad).*OS\s([\d_]+)/);const y=l.match(/(iPod)(.*OS\s([\d_]+))?/),v=!m&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),S=o==="Win32";let b=o==="MacIntel";const M=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!m&&b&&i.touch&&M.indexOf(`${d}x${f}`)>=0&&(m=l.match(/(Version)\/([\d.]+)/),m||(m=[0,1,"13_0_0"]),b=!1),h&&!S&&(u.os="android",u.android=!0),(m||v||y)&&(u.os="ios",u.ios=!0),u}function ov(t){return t===void 0&&(t={}),a0||(a0=mL(t)),a0}let r0;function gL(){const t=Tt(),e=ov();let i=!1;function r(){const d=t.navigator.userAgent.toLowerCase();return d.indexOf("safari")>=0&&d.indexOf("chrome")<0&&d.indexOf("android")<0}if(r()){const d=String(t.navigator.userAgent);if(d.includes("Version/")){const[f,h]=d.split("Version/")[1].split(" ")[0].split(".").map(m=>Number(m));i=f<16||f===16&&h<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),l=r(),u=l||o&&e.ios;return{isSafari:i||l,needPerspectiveFix:i,need3dFix:u,isWebView:o}}function lv(){return r0||(r0=gL()),r0}function xL(t){let{swiper:e,on:i,emit:r}=t;const o=Tt();let l=null,u=null;const d=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},f=()=>{!e||e.destroyed||!e.initialized||(l=new ResizeObserver(y=>{u=o.requestAnimationFrame(()=>{const{width:v,height:S}=e;let b=v,M=S;y.forEach(O=>{let{contentBoxSize:j,contentRect:T,target:C}=O;C&&C!==e.el||(b=T?T.width:(j[0]||j).inlineSize,M=T?T.height:(j[0]||j).blockSize)}),(b!==v||M!==S)&&d()})}),l.observe(e.el))},h=()=>{u&&o.cancelAnimationFrame(u),l&&l.unobserve&&e.el&&(l.unobserve(e.el),l=null)},m=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};i("init",()=>{if(e.params.resizeObserver&&typeof o.ResizeObserver<"u"){f();return}o.addEventListener("resize",d),o.addEventListener("orientationchange",m)}),i("destroy",()=>{h(),o.removeEventListener("resize",d),o.removeEventListener("orientationchange",m)})}function yL(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l=[],u=Tt(),d=function(m,y){y===void 0&&(y={});const v=u.MutationObserver||u.WebkitMutationObserver,S=new v(b=>{if(e.__preventObserver__)return;if(b.length===1){o("observerUpdate",b[0]);return}const M=function(){o("observerUpdate",b[0])};u.requestAnimationFrame?u.requestAnimationFrame(M):u.setTimeout(M,0)});S.observe(m,{attributes:typeof y.attributes>"u"?!0:y.attributes,childList:e.isElement||(typeof y.childList>"u"?!0:y).childList,characterData:typeof y.characterData>"u"?!0:y.characterData}),l.push(S)},f=()=>{if(e.params.observer){if(e.params.observeParents){const m=iv(e.hostEl);for(let y=0;y<m.length;y+=1)d(m[y])}d(e.hostEl,{childList:e.params.observeSlideChildren}),d(e.wrapperEl,{attributes:!1})}},h=()=>{l.forEach(m=>{m.disconnect()}),l.splice(0,l.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",f),r("destroy",h)}var vL={on(t,e,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const o=i?"unshift":"push";return t.split(" ").forEach(l=>{r.eventsListeners[l]||(r.eventsListeners[l]=[]),r.eventsListeners[l][o](e)}),r},once(t,e,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function o(){r.off(t,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];e.apply(r,u)}return o.__emitterProxy=e,r.on(t,o,i)},onAny(t,e){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;const r=e?"unshift":"push";return i.eventsAnyListeners.indexOf(t)<0&&i.eventsAnyListeners[r](t),i},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const i=e.eventsAnyListeners.indexOf(t);return i>=0&&e.eventsAnyListeners.splice(i,1),e},off(t,e){const i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?i.eventsListeners[r]=[]:i.eventsListeners[r]&&i.eventsListeners[r].forEach((o,l)=>{(o===e||o.__emitterProxy&&o.__emitterProxy===e)&&i.eventsListeners[r].splice(l,1)})}),i},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,i,r;for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return typeof l[0]=="string"||Array.isArray(l[0])?(e=l[0],i=l.slice(1,l.length),r=t):(e=l[0].events,i=l[0].data,r=l[0].context||t),i.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(f=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(h=>{h.apply(r,[f,...i])}),t.eventsListeners&&t.eventsListeners[f]&&t.eventsListeners[f].forEach(h=>{h.apply(r,i)})}),t}};function wL(){const t=this;let e,i;const r=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?i=t.params.height:i=r.clientHeight,!(e===0&&t.isHorizontal()||i===0&&t.isVertical())&&(e=e-parseInt(Bi(r,"padding-left")||0,10)-parseInt(Bi(r,"padding-right")||0,10),i=i-parseInt(Bi(r,"padding-top")||0,10)-parseInt(Bi(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Object.assign(t,{width:e,height:i,size:t.isHorizontal()?e:i}))}function bL(){const t=this;function e(Y,F){return parseFloat(Y.getPropertyValue(t.getDirectionLabel(F))||0)}const i=t.params,{wrapperEl:r,slidesEl:o,size:l,rtlTranslate:u,wrongRTL:d}=t,f=t.virtual&&i.virtual.enabled,h=f?t.virtual.slides.length:t.slides.length,m=Hn(o,`.${t.params.slideClass}, swiper-slide`),y=f?t.virtual.slides.length:m.length;let v=[];const S=[],b=[];let M=i.slidesOffsetBefore;typeof M=="function"&&(M=i.slidesOffsetBefore.call(t));let O=i.slidesOffsetAfter;typeof O=="function"&&(O=i.slidesOffsetAfter.call(t));const j=t.snapGrid.length,T=t.slidesGrid.length;let C=i.spaceBetween,D=-M,L=0,P=0;if(typeof l>"u")return;typeof C=="string"&&C.indexOf("%")>=0?C=parseFloat(C.replace("%",""))/100*l:typeof C=="string"&&(C=parseFloat(C)),t.virtualSize=-C,m.forEach(Y=>{u?Y.style.marginLeft="":Y.style.marginRight="",Y.style.marginBottom="",Y.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(Wl(r,"--swiper-centered-offset-before",""),Wl(r,"--swiper-centered-offset-after",""));const k=i.grid&&i.grid.rows>1&&t.grid;k?t.grid.initSlides(m):t.grid&&t.grid.unsetSlides();let _;const $=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(Y=>typeof i.breakpoints[Y].slidesPerView<"u").length>0;for(let Y=0;Y<y;Y+=1){_=0;let F;if(m[Y]&&(F=m[Y]),k&&t.grid.updateSlide(Y,F,m),!(m[Y]&&Bi(F,"display")==="none")){if(i.slidesPerView==="auto"){$&&(m[Y].style[t.getDirectionLabel("width")]="");const te=getComputedStyle(F),ie=F.style.transform,oe=F.style.webkitTransform;if(ie&&(F.style.transform="none"),oe&&(F.style.webkitTransform="none"),i.roundLengths)_=t.isHorizontal()?dp(F,"width"):dp(F,"height");else{const re=e(te,"width"),B=e(te,"padding-left"),K=e(te,"padding-right"),W=e(te,"margin-left"),ee=e(te,"margin-right"),H=te.getPropertyValue("box-sizing");if(H&&H==="border-box")_=re+W+ee;else{const{clientWidth:Z,offsetWidth:ne}=F;_=re+B+K+W+ee+(ne-Z)}}ie&&(F.style.transform=ie),oe&&(F.style.webkitTransform=oe),i.roundLengths&&(_=Math.floor(_))}else _=(l-(i.slidesPerView-1)*C)/i.slidesPerView,i.roundLengths&&(_=Math.floor(_)),m[Y]&&(m[Y].style[t.getDirectionLabel("width")]=`${_}px`);m[Y]&&(m[Y].swiperSlideSize=_),b.push(_),i.centeredSlides?(D=D+_/2+L/2+C,L===0&&Y!==0&&(D=D-l/2-C),Y===0&&(D=D-l/2-C),Math.abs(D)<1/1e3&&(D=0),i.roundLengths&&(D=Math.floor(D)),P%i.slidesPerGroup===0&&v.push(D),S.push(D)):(i.roundLengths&&(D=Math.floor(D)),(P-Math.min(t.params.slidesPerGroupSkip,P))%t.params.slidesPerGroup===0&&v.push(D),S.push(D),D=D+_+C),t.virtualSize+=_+C,L=_,P+=1}}if(t.virtualSize=Math.max(t.virtualSize,l)+O,u&&d&&(i.effect==="slide"||i.effect==="coverflow")&&(r.style.width=`${t.virtualSize+C}px`),i.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+C}px`),k&&t.grid.updateWrapperSize(_,v),!i.centeredSlides){const Y=[];for(let F=0;F<v.length;F+=1){let te=v[F];i.roundLengths&&(te=Math.floor(te)),v[F]<=t.virtualSize-l&&Y.push(te)}v=Y,Math.floor(t.virtualSize-l)-Math.floor(v[v.length-1])>1&&v.push(t.virtualSize-l)}if(f&&i.loop){const Y=b[0]+C;if(i.slidesPerGroup>1){const F=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/i.slidesPerGroup),te=Y*i.slidesPerGroup;for(let ie=0;ie<F;ie+=1)v.push(v[v.length-1]+te)}for(let F=0;F<t.virtual.slidesBefore+t.virtual.slidesAfter;F+=1)i.slidesPerGroup===1&&v.push(v[v.length-1]+Y),S.push(S[S.length-1]+Y),t.virtualSize+=Y}if(v.length===0&&(v=[0]),C!==0){const Y=t.isHorizontal()&&u?"marginLeft":t.getDirectionLabel("marginRight");m.filter((F,te)=>!i.cssMode||i.loop?!0:te!==m.length-1).forEach(F=>{F.style[Y]=`${C}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let Y=0;b.forEach(te=>{Y+=te+(C||0)}),Y-=C;const F=Y>l?Y-l:0;v=v.map(te=>te<=0?-M:te>F?F+O:te)}if(i.centerInsufficientSlides){let Y=0;b.forEach(te=>{Y+=te+(C||0)}),Y-=C;const F=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(Y+F<l){const te=(l-Y-F)/2;v.forEach((ie,oe)=>{v[oe]=ie-te}),S.forEach((ie,oe)=>{S[oe]=ie+te})}}if(Object.assign(t,{slides:m,snapGrid:v,slidesGrid:S,slidesSizesGrid:b}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Wl(r,"--swiper-centered-offset-before",`${-v[0]}px`),Wl(r,"--swiper-centered-offset-after",`${t.size/2-b[b.length-1]/2}px`);const Y=-t.snapGrid[0],F=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(te=>te+Y),t.slidesGrid=t.slidesGrid.map(te=>te+F)}if(y!==h&&t.emit("slidesLengthChange"),v.length!==j&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),S.length!==T&&t.emit("slidesGridLengthChange"),i.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!f&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const Y=`${i.containerModifierClass}backface-hidden`,F=t.el.classList.contains(Y);y<=i.maxBackfaceHiddenSlides?F||t.el.classList.add(Y):F&&t.el.classList.remove(Y)}}function SL(t){const e=this,i=[],r=e.virtual&&e.params.virtual.enabled;let o=0,l;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const u=d=>r?e.slides[e.getSlideIndexByData(d)]:e.slides[d];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(d=>{i.push(d)});else for(l=0;l<Math.ceil(e.params.slidesPerView);l+=1){const d=e.activeIndex+l;if(d>e.slides.length&&!r)break;i.push(u(d))}else i.push(u(e.activeIndex));for(l=0;l<i.length;l+=1)if(typeof i[l]<"u"){const d=i[l].offsetHeight;o=d>o?d:o}(o||o===0)&&(e.wrapperEl.style.height=`${o}px`)}function CL(){const t=this,e=t.slides,i=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(t.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-i-t.cssOverflowAdjustment()}const nx=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function TL(t){t===void 0&&(t=this&&this.translate||0);const e=this,i=e.params,{slides:r,rtlTranslate:o,snapGrid:l}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let u=-t;o&&(u=t),e.visibleSlidesIndexes=[],e.visibleSlides=[];let d=i.spaceBetween;typeof d=="string"&&d.indexOf("%")>=0?d=parseFloat(d.replace("%",""))/100*e.size:typeof d=="string"&&(d=parseFloat(d));for(let f=0;f<r.length;f+=1){const h=r[f];let m=h.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(m-=r[0].swiperSlideOffset);const y=(u+(i.centeredSlides?e.minTranslate():0)-m)/(h.swiperSlideSize+d),v=(u-l[0]+(i.centeredSlides?e.minTranslate():0)-m)/(h.swiperSlideSize+d),S=-(u-m),b=S+e.slidesSizesGrid[f],M=S>=0&&S<=e.size-e.slidesSizesGrid[f],O=S>=0&&S<e.size-1||b>1&&b<=e.size||S<=0&&b>=e.size;O&&(e.visibleSlides.push(h),e.visibleSlidesIndexes.push(f)),nx(h,O,i.slideVisibleClass),nx(h,M,i.slideFullyVisibleClass),h.progress=o?-y:y,h.originalProgress=o?-v:v}}function EL(t){const e=this;if(typeof t>"u"){const m=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*m||0}const i=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:o,isBeginning:l,isEnd:u,progressLoop:d}=e;const f=l,h=u;if(r===0)o=0,l=!0,u=!0;else{o=(t-e.minTranslate())/r;const m=Math.abs(t-e.minTranslate())<1,y=Math.abs(t-e.maxTranslate())<1;l=m||o<=0,u=y||o>=1,m&&(o=0),y&&(o=1)}if(i.loop){const m=e.getSlideIndexByData(0),y=e.getSlideIndexByData(e.slides.length-1),v=e.slidesGrid[m],S=e.slidesGrid[y],b=e.slidesGrid[e.slidesGrid.length-1],M=Math.abs(t);M>=v?d=(M-v)/b:d=(M+b-S)/b,d>1&&(d-=1)}Object.assign(e,{progress:o,progressLoop:d,isBeginning:l,isEnd:u}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&e.updateSlidesProgress(t),l&&!f&&e.emit("reachBeginning toEdge"),u&&!h&&e.emit("reachEnd toEdge"),(f&&!l||h&&!u)&&e.emit("fromEdge"),e.emit("progress",o)}const s0=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function ML(){const t=this,{slides:e,params:i,slidesEl:r,activeIndex:o}=t,l=t.virtual&&i.virtual.enabled,u=t.grid&&i.grid&&i.grid.rows>1,d=y=>Hn(r,`.${i.slideClass}${y}, swiper-slide${y}`)[0];let f,h,m;if(l)if(i.loop){let y=o-t.virtual.slidesBefore;y<0&&(y=t.virtual.slides.length+y),y>=t.virtual.slides.length&&(y-=t.virtual.slides.length),f=d(`[data-swiper-slide-index="${y}"]`)}else f=d(`[data-swiper-slide-index="${o}"]`);else u?(f=e.find(y=>y.column===o),m=e.find(y=>y.column===o+1),h=e.find(y=>y.column===o-1)):f=e[o];f&&(u||(m=fL(f,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!m&&(m=e[0]),h=dL(f,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!h===0&&(h=e[e.length-1]))),e.forEach(y=>{s0(y,y===f,i.slideActiveClass),s0(y,y===m,i.slideNextClass),s0(y,y===h,i.slidePrevClass)}),t.emitSlidesClasses()}const wc=(t,e)=>{if(!t||t.destroyed||!t.params)return;const i=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,r=e.closest(i());if(r){let o=r.querySelector(`.${t.params.lazyPreloaderClass}`);!o&&t.isElement&&(r.shadowRoot?o=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(o=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},o0=(t,e)=>{if(!t.slides[e])return;const i=t.slides[e].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},fp=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const i=t.slides.length;if(!i||!e||e<0)return;e=Math.min(e,i);const r=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),o=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const u=o,d=[u-e];d.push(...Array.from({length:e}).map((f,h)=>u+r+h)),t.slides.forEach((f,h)=>{d.includes(f.column)&&o0(t,h)});return}const l=o+r-1;if(t.params.rewind||t.params.loop)for(let u=o-e;u<=l+e;u+=1){const d=(u%i+i)%i;(d<o||d>l)&&o0(t,d)}else for(let u=Math.max(o-e,0);u<=Math.min(l+e,i-1);u+=1)u!==o&&(u>l||u<o)&&o0(t,u)};function AL(t){const{slidesGrid:e,params:i}=t,r=t.rtlTranslate?t.translate:-t.translate;let o;for(let l=0;l<e.length;l+=1)typeof e[l+1]<"u"?r>=e[l]&&r<e[l+1]-(e[l+1]-e[l])/2?o=l:r>=e[l]&&r<e[l+1]&&(o=l+1):r>=e[l]&&(o=l);return i.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function jL(t){const e=this,i=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:o,activeIndex:l,realIndex:u,snapIndex:d}=e;let f=t,h;const m=S=>{let b=S-e.virtual.slidesBefore;return b<0&&(b=e.virtual.slides.length+b),b>=e.virtual.slides.length&&(b-=e.virtual.slides.length),b};if(typeof f>"u"&&(f=AL(e)),r.indexOf(i)>=0)h=r.indexOf(i);else{const S=Math.min(o.slidesPerGroupSkip,f);h=S+Math.floor((f-S)/o.slidesPerGroup)}if(h>=r.length&&(h=r.length-1),f===l&&!e.params.loop){h!==d&&(e.snapIndex=h,e.emit("snapIndexChange"));return}if(f===l&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=m(f);return}const y=e.grid&&o.grid&&o.grid.rows>1;let v;if(e.virtual&&o.virtual.enabled&&o.loop)v=m(f);else if(y){const S=e.slides.find(M=>M.column===f);let b=parseInt(S.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(e.slides.indexOf(S),0)),v=Math.floor(b/o.grid.rows)}else if(e.slides[f]){const S=e.slides[f].getAttribute("data-swiper-slide-index");S?v=parseInt(S,10):v=f}else v=f;Object.assign(e,{previousSnapIndex:d,snapIndex:h,previousRealIndex:u,realIndex:v,previousIndex:l,activeIndex:f}),e.initialized&&fp(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(u!==v&&e.emit("realIndexChange"),e.emit("slideChange"))}function LL(t,e){const i=this,r=i.params;let o=t.closest(`.${r.slideClass}, swiper-slide`);!o&&i.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(d=>{!o&&d.matches&&d.matches(`.${r.slideClass}, swiper-slide`)&&(o=d)});let l=!1,u;if(o){for(let d=0;d<i.slides.length;d+=1)if(i.slides[d]===o){l=!0,u=d;break}}if(o&&l)i.clickedSlide=o,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=u;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}r.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var OL={updateSize:wL,updateSlides:bL,updateAutoHeight:SL,updateSlidesOffset:CL,updateSlidesProgress:TL,updateProgress:EL,updateSlidesClasses:ML,updateActiveIndex:jL,updateClickedSlide:LL};function RL(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:i,rtlTranslate:r,translate:o,wrapperEl:l}=e;if(i.virtualTranslate)return r?-o:o;if(i.cssMode)return o;let u=oL(l,t);return u+=e.cssOverflowAdjustment(),r&&(u=-u),u||0}function DL(t,e){const i=this,{rtlTranslate:r,params:o,wrapperEl:l,progress:u}=i;let d=0,f=0;const h=0;i.isHorizontal()?d=r?-t:t:f=t,o.roundLengths&&(d=Math.floor(d),f=Math.floor(f)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?d:f,o.cssMode?l[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-d:-f:o.virtualTranslate||(i.isHorizontal()?d-=i.cssOverflowAdjustment():f-=i.cssOverflowAdjustment(),l.style.transform=`translate3d(${d}px, ${f}px, ${h}px)`);let m;const y=i.maxTranslate()-i.minTranslate();y===0?m=0:m=(t-i.minTranslate())/y,m!==u&&i.updateProgress(t),i.emit("setTranslate",i.translate,e)}function HL(){return-this.snapGrid[0]}function VL(){return-this.snapGrid[this.snapGrid.length-1]}function kL(t,e,i,r,o){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),i===void 0&&(i=!0),r===void 0&&(r=!0);const l=this,{params:u,wrapperEl:d}=l;if(l.animating&&u.preventInteractionOnTransition)return!1;const f=l.minTranslate(),h=l.maxTranslate();let m;if(r&&t>f?m=f:r&&t<h?m=h:m=t,l.updateProgress(m),u.cssMode){const y=l.isHorizontal();if(e===0)d[y?"scrollLeft":"scrollTop"]=-m;else{if(!l.support.smoothScroll)return nv({swiper:l,targetPosition:-m,side:y?"left":"top"}),!0;d.scrollTo({[y?"left":"top"]:-m,behavior:"smooth"})}return!0}return e===0?(l.setTransition(0),l.setTranslate(m),i&&(l.emit("beforeTransitionStart",e,o),l.emit("transitionEnd"))):(l.setTransition(e),l.setTranslate(m),i&&(l.emit("beforeTransitionStart",e,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(v){!l||l.destroyed||v.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,i&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var zL={getTranslate:RL,setTranslate:DL,minTranslate:HL,maxTranslate:VL,translateTo:kL};function PL(t,e){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${t}ms`,i.wrapperEl.style.transitionDelay=t===0?"0ms":""),i.emit("setTransition",t,e)}function cv(t){let{swiper:e,runCallbacks:i,direction:r,step:o}=t;const{activeIndex:l,previousIndex:u}=e;let d=r;d||(l>u?d="next":l<u?d="prev":d="reset"),e.emit(`transition${o}`),i&&d==="reset"?e.emit(`slideResetTransition${o}`):i&&l!==u&&(e.emit(`slideChangeTransition${o}`),d==="next"?e.emit(`slideNextTransition${o}`):e.emit(`slidePrevTransition${o}`))}function NL(t,e){t===void 0&&(t=!0);const i=this,{params:r}=i;r.cssMode||(r.autoHeight&&i.updateAutoHeight(),cv({swiper:i,runCallbacks:t,direction:e,step:"Start"}))}function BL(t,e){t===void 0&&(t=!0);const i=this,{params:r}=i;i.animating=!1,!r.cssMode&&(i.setTransition(0),cv({swiper:i,runCallbacks:t,direction:e,step:"End"}))}var $L={setTransition:PL,transitionStart:NL,transitionEnd:BL};function _L(t,e,i,r,o){t===void 0&&(t=0),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));const l=this;let u=t;u<0&&(u=0);const{params:d,snapGrid:f,slidesGrid:h,previousIndex:m,activeIndex:y,rtlTranslate:v,wrapperEl:S,enabled:b}=l;if(!b&&!r&&!o||l.destroyed||l.animating&&d.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=l.params.speed);const M=Math.min(l.params.slidesPerGroupSkip,u);let O=M+Math.floor((u-M)/l.params.slidesPerGroup);O>=f.length&&(O=f.length-1);const j=-f[O];if(d.normalizeSlideIndex)for(let k=0;k<h.length;k+=1){const _=-Math.floor(j*100),$=Math.floor(h[k]*100),Y=Math.floor(h[k+1]*100);typeof h[k+1]<"u"?_>=$&&_<Y-(Y-$)/2?u=k:_>=$&&_<Y&&(u=k+1):_>=$&&(u=k)}if(l.initialized&&u!==y&&(!l.allowSlideNext&&(v?j>l.translate&&j>l.minTranslate():j<l.translate&&j<l.minTranslate())||!l.allowSlidePrev&&j>l.translate&&j>l.maxTranslate()&&(y||0)!==u))return!1;u!==(m||0)&&i&&l.emit("beforeSlideChangeStart"),l.updateProgress(j);let T;u>y?T="next":u<y?T="prev":T="reset";const C=l.virtual&&l.params.virtual.enabled;if(!(C&&o)&&(v&&-j===l.translate||!v&&j===l.translate))return l.updateActiveIndex(u),d.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),d.effect!=="slide"&&l.setTranslate(j),T!=="reset"&&(l.transitionStart(i,T),l.transitionEnd(i,T)),!1;if(d.cssMode){const k=l.isHorizontal(),_=v?j:-j;if(e===0)C&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),C&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{S[k?"scrollLeft":"scrollTop"]=_})):S[k?"scrollLeft":"scrollTop"]=_,C&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return nv({swiper:l,targetPosition:_,side:k?"left":"top"}),!0;S.scrollTo({[k?"left":"top"]:_,behavior:"smooth"})}return!0}const P=lv().isSafari;return C&&!o&&P&&l.isElement&&l.virtual.update(!1,!1,u),l.setTransition(e),l.setTranslate(j),l.updateActiveIndex(u),l.updateSlidesClasses(),l.emit("beforeTransitionStart",e,r),l.transitionStart(i,T),e===0?l.transitionEnd(i,T):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(_){!l||l.destroyed||_.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(i,T))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function UL(t,e,i,r){t===void 0&&(t=0),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let u=t;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)u=u+o.virtual.slidesBefore;else{let d;if(l){const v=u*o.params.grid.rows;d=o.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===v).column}else d=o.getSlideIndexByData(u);const f=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:h}=o.params;let m=o.params.slidesPerView;m==="auto"?m=o.slidesPerViewDynamic():(m=Math.ceil(parseFloat(o.params.slidesPerView,10)),h&&m%2===0&&(m=m+1));let y=f-d<m;if(h&&(y=y||d<Math.ceil(m/2)),r&&h&&o.params.slidesPerView!=="auto"&&!l&&(y=!1),y){const v=h?d<o.activeIndex?"prev":"next":d-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?d+1:d-f+1,slideRealIndex:v==="next"?o.realIndex:void 0})}if(l){const v=u*o.params.grid.rows;u=o.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===v).column}else u=o.getSlideIndexByData(u)}return requestAnimationFrame(()=>{o.slideTo(u,e,i,r)}),o}function IL(t,e,i){e===void 0&&(e=!0);const r=this,{enabled:o,params:l,animating:u}=r;if(!o||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);let d=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(d=Math.max(r.slidesPerViewDynamic("current",!0),1));const f=r.activeIndex<l.slidesPerGroupSkip?1:d,h=r.virtual&&l.virtual.enabled;if(l.loop){if(u&&!h&&l.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+f,t,e,i)}),!0}return l.rewind&&r.isEnd?r.slideTo(0,t,e,i):r.slideTo(r.activeIndex+f,t,e,i)}function GL(t,e,i){e===void 0&&(e=!0);const r=this,{params:o,snapGrid:l,slidesGrid:u,rtlTranslate:d,enabled:f,animating:h}=r;if(!f||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);const m=r.virtual&&o.virtual.enabled;if(o.loop){if(h&&!m&&o.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const y=d?r.translate:-r.translate;function v(T){return T<0?-Math.floor(Math.abs(T)):Math.floor(T)}const S=v(y),b=l.map(T=>v(T)),M=o.freeMode&&o.freeMode.enabled;let O=l[b.indexOf(S)-1];if(typeof O>"u"&&(o.cssMode||M)){let T;l.forEach((C,D)=>{S>=C&&(T=D)}),typeof T<"u"&&(O=M?l[T]:l[T>0?T-1:T])}let j=0;if(typeof O<"u"&&(j=u.indexOf(O),j<0&&(j=r.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(j=j-r.slidesPerViewDynamic("previous",!0)+1,j=Math.max(j,0))),o.rewind&&r.isBeginning){const T=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(T,t,e,i)}else if(o.loop&&r.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(j,t,e,i)}),!0;return r.slideTo(j,t,e,i)}function qL(t,e,i){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof t>"u"&&(t=r.params.speed),r.slideTo(r.activeIndex,t,e,i)}function YL(t,e,i,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);let l=o.activeIndex;const u=Math.min(o.params.slidesPerGroupSkip,l),d=u+Math.floor((l-u)/o.params.slidesPerGroup),f=o.rtlTranslate?o.translate:-o.translate;if(f>=o.snapGrid[d]){const h=o.snapGrid[d],m=o.snapGrid[d+1];f-h>(m-h)*r&&(l+=o.params.slidesPerGroup)}else{const h=o.snapGrid[d-1],m=o.snapGrid[d];f-h<=(m-h)*r&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,t,e,i)}function FL(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:i}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let o=t.getSlideIndexWhenGrid(t.clickedIndex),l;const u=t.isElement?"swiper-slide":`.${e.slideClass}`,d=t.grid&&t.params.grid&&t.params.grid.rows>1;if(e.loop){if(t.animating)return;l=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?t.slideToLoop(l):o>(d?(t.slides.length-r)/2-(t.params.grid.rows-1):t.slides.length-r)?(t.loopFix(),o=t.getSlideIndex(Hn(i,`${u}[data-swiper-slide-index="${l}"]`)[0]),Rc(()=>{t.slideTo(o)})):t.slideTo(o)}else t.slideTo(o)}var ZL={slideTo:_L,slideToLoop:UL,slideNext:IL,slidePrev:GL,slideReset:qL,slideToClosest:YL,slideToClickedSlide:FL};function XL(t,e){const i=this,{params:r,slidesEl:o}=i;if(!r.loop||i.virtual&&i.params.virtual.enabled)return;const l=()=>{Hn(o,`.${r.slideClass}, swiper-slide`).forEach((S,b)=>{S.setAttribute("data-swiper-slide-index",b)})},u=()=>{const v=Hn(o,`.${r.slideBlankClass}`);v.forEach(S=>{S.remove()}),v.length>0&&(i.recalcSlides(),i.updateSlides())},d=i.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||d)&&u();const f=r.slidesPerGroup*(d?r.grid.rows:1),h=i.slides.length%f!==0,m=d&&i.slides.length%r.grid.rows!==0,y=v=>{for(let S=0;S<v;S+=1){const b=i.isElement?Hc("swiper-slide",[r.slideBlankClass]):Hc("div",[r.slideClass,r.slideBlankClass]);i.slidesEl.append(b)}};if(h){if(r.loopAddBlankSlides){const v=f-i.slides.length%f;y(v),i.recalcSlides(),i.updateSlides()}else Dc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(m){if(r.loopAddBlankSlides){const v=r.grid.rows-i.slides.length%r.grid.rows;y(v),i.recalcSlides(),i.updateSlides()}else Dc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();i.loopFix({slideRealIndex:t,direction:r.centeredSlides?void 0:"next",initial:e})}function KL(t){let{slideRealIndex:e,slideTo:i=!0,direction:r,setTranslate:o,activeSlideIndex:l,initial:u,byController:d,byMousewheel:f}=t===void 0?{}:t;const h=this;if(!h.params.loop)return;h.emit("beforeLoopFix");const{slides:m,allowSlidePrev:y,allowSlideNext:v,slidesEl:S,params:b}=h,{centeredSlides:M,initialSlide:O}=b;if(h.allowSlidePrev=!0,h.allowSlideNext=!0,h.virtual&&b.virtual.enabled){i&&(!b.centeredSlides&&h.snapIndex===0?h.slideTo(h.virtual.slides.length,0,!1,!0):b.centeredSlides&&h.snapIndex<b.slidesPerView?h.slideTo(h.virtual.slides.length+h.snapIndex,0,!1,!0):h.snapIndex===h.snapGrid.length-1&&h.slideTo(h.virtual.slidesBefore,0,!1,!0)),h.allowSlidePrev=y,h.allowSlideNext=v,h.emit("loopFix");return}let j=b.slidesPerView;j==="auto"?j=h.slidesPerViewDynamic():(j=Math.ceil(parseFloat(b.slidesPerView,10)),M&&j%2===0&&(j=j+1));const T=b.slidesPerGroupAuto?j:b.slidesPerGroup;let C=M?Math.max(T,Math.ceil(j/2)):T;C%T!==0&&(C+=T-C%T),C+=b.loopAdditionalSlides,h.loopedSlides=C;const D=h.grid&&b.grid&&b.grid.rows>1;m.length<j+C||h.params.effect==="cards"&&m.length<j+C*2?Dc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):D&&b.grid.fill==="row"&&Dc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const L=[],P=[],k=D?Math.ceil(m.length/b.grid.rows):m.length,_=u&&k-O<j&&!M;let $=_?O:h.activeIndex;typeof l>"u"?l=h.getSlideIndex(m.find(B=>B.classList.contains(b.slideActiveClass))):$=l;const Y=r==="next"||!r,F=r==="prev"||!r;let te=0,ie=0;const re=(D?m[l].column:l)+(M&&typeof o>"u"?-j/2+.5:0);if(re<C){te=Math.max(C-re,T);for(let B=0;B<C-re;B+=1){const K=B-Math.floor(B/k)*k;if(D){const W=k-K-1;for(let ee=m.length-1;ee>=0;ee-=1)m[ee].column===W&&L.push(ee)}else L.push(k-K-1)}}else if(re+j>k-C){ie=Math.max(re-(k-C*2),T),_&&(ie=Math.max(ie,j-k+O+1));for(let B=0;B<ie;B+=1){const K=B-Math.floor(B/k)*k;D?m.forEach((W,ee)=>{W.column===K&&P.push(ee)}):P.push(K)}}if(h.__preventObserver__=!0,requestAnimationFrame(()=>{h.__preventObserver__=!1}),h.params.effect==="cards"&&m.length<j+C*2&&(P.includes(l)&&P.splice(P.indexOf(l),1),L.includes(l)&&L.splice(L.indexOf(l),1)),F&&L.forEach(B=>{m[B].swiperLoopMoveDOM=!0,S.prepend(m[B]),m[B].swiperLoopMoveDOM=!1}),Y&&P.forEach(B=>{m[B].swiperLoopMoveDOM=!0,S.append(m[B]),m[B].swiperLoopMoveDOM=!1}),h.recalcSlides(),b.slidesPerView==="auto"?h.updateSlides():D&&(L.length>0&&F||P.length>0&&Y)&&h.slides.forEach((B,K)=>{h.grid.updateSlide(K,B,h.slides)}),b.watchSlidesProgress&&h.updateSlidesOffset(),i){if(L.length>0&&F){if(typeof e>"u"){const B=h.slidesGrid[$],W=h.slidesGrid[$+te]-B;f?h.setTranslate(h.translate-W):(h.slideTo($+Math.ceil(te),0,!1,!0),o&&(h.touchEventsData.startTranslate=h.touchEventsData.startTranslate-W,h.touchEventsData.currentTranslate=h.touchEventsData.currentTranslate-W))}else if(o){const B=D?L.length/b.grid.rows:L.length;h.slideTo(h.activeIndex+B,0,!1,!0),h.touchEventsData.currentTranslate=h.translate}}else if(P.length>0&&Y)if(typeof e>"u"){const B=h.slidesGrid[$],W=h.slidesGrid[$-ie]-B;f?h.setTranslate(h.translate-W):(h.slideTo($-ie,0,!1,!0),o&&(h.touchEventsData.startTranslate=h.touchEventsData.startTranslate-W,h.touchEventsData.currentTranslate=h.touchEventsData.currentTranslate-W))}else{const B=D?P.length/b.grid.rows:P.length;h.slideTo(h.activeIndex-B,0,!1,!0)}}if(h.allowSlidePrev=y,h.allowSlideNext=v,h.controller&&h.controller.control&&!d){const B={slideRealIndex:e,direction:r,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(h.controller.control)?h.controller.control.forEach(K=>{!K.destroyed&&K.params.loop&&K.loopFix({...B,slideTo:K.params.slidesPerView===b.slidesPerView?i:!1})}):h.controller.control instanceof h.constructor&&h.controller.control.params.loop&&h.controller.control.loopFix({...B,slideTo:h.controller.control.params.slidesPerView===b.slidesPerView?i:!1})}h.emit("loopFix")}function WL(){const t=this,{params:e,slidesEl:i}=t;if(!e.loop||!i||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const r=[];t.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;r[l]=o}),t.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),r.forEach(o=>{i.append(o)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var QL={loopCreate:XL,loopFix:KL,loopDestroy:WL};function JL(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const i=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function eO(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var tO={setGrabCursor:JL,unsetGrabCursor:eO};function nO(t,e){e===void 0&&(e=this);function i(r){if(!r||r===Bn()||r===Tt())return null;r.assignedSlot&&(r=r.assignedSlot);const o=r.closest(t);return!o&&!r.getRootNode?null:o||i(r.getRootNode().host)}return i(e)}function ix(t,e,i){const r=Tt(),{params:o}=t,l=o.edgeSwipeDetection,u=o.edgeSwipeThreshold;return l&&(i<=u||i>=r.innerWidth-u)?l==="prevent"?(e.preventDefault(),!0):!1:!0}function iO(t){const e=this,i=Bn();let r=t;r.originalEvent&&(r=r.originalEvent);const o=e.touchEventsData;if(r.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==r.pointerId)return;o.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(o.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){ix(e,r,r.targetTouches[0].pageX);return}const{params:l,touches:u,enabled:d}=e;if(!d||!l.simulateTouch&&r.pointerType==="mouse"||e.animating&&l.preventInteractionOnTransition)return;!e.animating&&l.cssMode&&l.loop&&e.loopFix();let f=r.target;if(l.touchEventsTarget==="wrapper"&&!uL(f,e.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||o.isTouched&&o.isMoved)return;const h=!!l.noSwipingClass&&l.noSwipingClass!=="",m=r.composedPath?r.composedPath():r.path;h&&r.target&&r.target.shadowRoot&&m&&(f=m[0]);const y=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(l.noSwiping&&(v?nO(y,f):f.closest(y))){e.allowClick=!0;return}if(l.swipeHandler&&!f.closest(l.swipeHandler))return;u.currentX=r.pageX,u.currentY=r.pageY;const S=u.currentX,b=u.currentY;if(!ix(e,r,S))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=S,u.startY=b,o.touchStartTime=ri(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let M=!0;f.matches(o.focusableElements)&&(M=!1,f.nodeName==="SELECT"&&(o.isTouched=!1)),i.activeElement&&i.activeElement.matches(o.focusableElements)&&i.activeElement!==f&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!f.matches(o.focusableElements))&&i.activeElement.blur();const O=M&&e.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||O)&&!f.isContentEditable&&r.preventDefault(),l.freeMode&&l.freeMode.enabled&&e.freeMode&&e.animating&&!l.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function aO(t){const e=Bn(),i=this,r=i.touchEventsData,{params:o,touches:l,rtlTranslate:u,enabled:d}=i;if(!d||!o.simulateTouch&&t.pointerType==="mouse")return;let f=t;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(r.touchId!==null||f.pointerId!==r.pointerId))return;let h;if(f.type==="touchmove"){if(h=[...f.changedTouches].find(L=>L.identifier===r.touchId),!h||h.identifier!==r.touchId)return}else h=f;if(!r.isTouched){r.startMoving&&r.isScrolling&&i.emit("touchMoveOpposite",f);return}const m=h.pageX,y=h.pageY;if(f.preventedByNestedSwiper){l.startX=m,l.startY=y;return}if(!i.allowTouchMove){f.target.matches(r.focusableElements)||(i.allowClick=!1),r.isTouched&&(Object.assign(l,{startX:m,startY:y,currentX:m,currentY:y}),r.touchStartTime=ri());return}if(o.touchReleaseOnEdges&&!o.loop)if(i.isVertical()){if(y<l.startY&&i.translate<=i.maxTranslate()||y>l.startY&&i.translate>=i.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(u&&(m>l.startX&&-i.translate<=i.maxTranslate()||m<l.startX&&-i.translate>=i.minTranslate()))return;if(!u&&(m<l.startX&&i.translate<=i.maxTranslate()||m>l.startX&&i.translate>=i.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(r.focusableElements)&&e.activeElement!==f.target&&f.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&f.target===e.activeElement&&f.target.matches(r.focusableElements)){r.isMoved=!0,i.allowClick=!1;return}r.allowTouchCallbacks&&i.emit("touchMove",f),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=m,l.currentY=y;const v=l.currentX-l.startX,S=l.currentY-l.startY;if(i.params.threshold&&Math.sqrt(v**2+S**2)<i.params.threshold)return;if(typeof r.isScrolling>"u"){let L;i.isHorizontal()&&l.currentY===l.startY||i.isVertical()&&l.currentX===l.startX?r.isScrolling=!1:v*v+S*S>=25&&(L=Math.atan2(Math.abs(S),Math.abs(v))*180/Math.PI,r.isScrolling=i.isHorizontal()?L>o.touchAngle:90-L>o.touchAngle)}if(r.isScrolling&&i.emit("touchMoveOpposite",f),typeof r.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(r.startMoving=!0),r.isScrolling||f.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;i.allowClick=!1,!o.cssMode&&f.cancelable&&f.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&f.stopPropagation();let b=i.isHorizontal()?v:S,M=i.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(b=Math.abs(b)*(u?1:-1),M=Math.abs(M)*(u?1:-1)),l.diff=b,b*=o.touchRatio,u&&(b=-b,M=-M);const O=i.touchesDirection;i.swipeDirection=b>0?"prev":"next",i.touchesDirection=M>0?"prev":"next";const j=i.params.loop&&!o.cssMode,T=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!r.isMoved){if(j&&T&&i.loopFix({direction:i.swipeDirection}),r.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const L=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(L)}r.allowMomentumBounce=!1,o.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",f)}if(new Date().getTime(),o._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&O!==i.touchesDirection&&j&&T&&Math.abs(b)>=1){Object.assign(l,{startX:m,startY:y,currentX:m,currentY:y,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}i.emit("sliderMove",f),r.isMoved=!0,r.currentTranslate=b+r.startTranslate;let C=!0,D=o.resistanceRatio;if(o.touchReleaseOnEdges&&(D=0),b>0?(j&&T&&r.allowThresholdMove&&r.currentTranslate>(o.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>i.minTranslate()&&(C=!1,o.resistance&&(r.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+r.startTranslate+b)**D))):b<0&&(j&&T&&r.allowThresholdMove&&r.currentTranslate<(o.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(o.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),r.currentTranslate<i.maxTranslate()&&(C=!1,o.resistance&&(r.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-r.startTranslate-b)**D))),C&&(f.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(r.currentTranslate=r.startTranslate),o.threshold>0)if(Math.abs(b)>o.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,r.currentTranslate=r.startTranslate,l.diff=i.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{r.currentTranslate=r.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&i.freeMode||o.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(r.currentTranslate),i.setTranslate(r.currentTranslate))}function rO(t){const e=this,i=e.touchEventsData;let r=t;r.originalEvent&&(r=r.originalEvent);let o;if(r.type==="touchend"||r.type==="touchcancel"){if(o=[...r.changedTouches].find(L=>L.identifier===i.touchId),!o||o.identifier!==i.touchId)return}else{if(i.touchId!==null||r.pointerId!==i.pointerId)return;o=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;i.pointerId=null,i.touchId=null;const{params:u,touches:d,rtlTranslate:f,slidesGrid:h,enabled:m}=e;if(!m||!u.simulateTouch&&r.pointerType==="mouse")return;if(i.allowTouchCallbacks&&e.emit("touchEnd",r),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&u.grabCursor&&e.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}u.grabCursor&&i.isMoved&&i.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const y=ri(),v=y-i.touchStartTime;if(e.allowClick){const L=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(L&&L[0]||r.target,L),e.emit("tap click",r),v<300&&y-i.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(i.lastClickTime=ri(),Rc(()=>{e.destroyed||(e.allowClick=!0)}),!i.isTouched||!i.isMoved||!e.swipeDirection||d.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let S;if(u.followFinger?S=f?e.translate:-e.translate:S=-i.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:S});return}const b=S>=-e.maxTranslate()&&!e.params.loop;let M=0,O=e.slidesSizesGrid[0];for(let L=0;L<h.length;L+=L<u.slidesPerGroupSkip?1:u.slidesPerGroup){const P=L<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof h[L+P]<"u"?(b||S>=h[L]&&S<h[L+P])&&(M=L,O=h[L+P]-h[L]):(b||S>=h[L])&&(M=L,O=h[h.length-1]-h[h.length-2])}let j=null,T=null;u.rewind&&(e.isBeginning?T=u.virtual&&u.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(j=0));const C=(S-h[M])/O,D=M<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(v>u.longSwipesMs){if(!u.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(C>=u.longSwipesRatio?e.slideTo(u.rewind&&e.isEnd?j:M+D):e.slideTo(M)),e.swipeDirection==="prev"&&(C>1-u.longSwipesRatio?e.slideTo(M+D):T!==null&&C<0&&Math.abs(C)>u.longSwipesRatio?e.slideTo(T):e.slideTo(M))}else{if(!u.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(M+D):e.slideTo(M):(e.swipeDirection==="next"&&e.slideTo(j!==null?j:M+D),e.swipeDirection==="prev"&&e.slideTo(T!==null?T:M))}}function ax(){const t=this,{params:e,el:i}=t;if(i&&i.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:o,snapGrid:l}=t,u=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const d=u&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!d?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!u?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=o,t.allowSlideNext=r,t.params.watchOverflow&&l!==t.snapGrid&&t.checkOverflow()}function sO(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function oO(){const t=this,{wrapperEl:e,rtlTranslate:i,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let o;const l=t.maxTranslate()-t.minTranslate();l===0?o=0:o=(t.translate-t.minTranslate())/l,o!==t.progress&&t.updateProgress(i?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function lO(t){const e=this;wc(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function cO(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const uv=(t,e)=>{const i=Bn(),{params:r,el:o,wrapperEl:l,device:u}=t,d=!!r.nested,f=e==="on"?"addEventListener":"removeEventListener",h=e;!o||typeof o=="string"||(i[f]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:d}),o[f]("touchstart",t.onTouchStart,{passive:!1}),o[f]("pointerdown",t.onTouchStart,{passive:!1}),i[f]("touchmove",t.onTouchMove,{passive:!1,capture:d}),i[f]("pointermove",t.onTouchMove,{passive:!1,capture:d}),i[f]("touchend",t.onTouchEnd,{passive:!0}),i[f]("pointerup",t.onTouchEnd,{passive:!0}),i[f]("pointercancel",t.onTouchEnd,{passive:!0}),i[f]("touchcancel",t.onTouchEnd,{passive:!0}),i[f]("pointerout",t.onTouchEnd,{passive:!0}),i[f]("pointerleave",t.onTouchEnd,{passive:!0}),i[f]("contextmenu",t.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&o[f]("click",t.onClick,!0),r.cssMode&&l[f]("scroll",t.onScroll),r.updateOnWindowResize?t[h](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",ax,!0):t[h]("observerUpdate",ax,!0),o[f]("load",t.onLoad,{capture:!0}))};function uO(){const t=this,{params:e}=t;t.onTouchStart=iO.bind(t),t.onTouchMove=aO.bind(t),t.onTouchEnd=rO.bind(t),t.onDocumentTouchStart=cO.bind(t),e.cssMode&&(t.onScroll=oO.bind(t)),t.onClick=sO.bind(t),t.onLoad=lO.bind(t),uv(t,"on")}function dO(){uv(this,"off")}var fO={attachEvents:uO,detachEvents:dO};const rx=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function pO(){const t=this,{realIndex:e,initialized:i,params:r,el:o}=t,l=r.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const u=Bn(),d=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",f=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?t.el:u.querySelector(r.breakpointsBase),h=t.getBreakpoint(l,d,f);if(!h||t.currentBreakpoint===h)return;const y=(h in l?l[h]:void 0)||t.originalParams,v=rx(t,r),S=rx(t,y),b=t.params.grabCursor,M=y.grabCursor,O=r.enabled;v&&!S?(o.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),t.emitContainerClasses()):!v&&S&&(o.classList.add(`${r.containerModifierClass}grid`),(y.grid.fill&&y.grid.fill==="column"||!y.grid.fill&&r.grid.fill==="column")&&o.classList.add(`${r.containerModifierClass}grid-column`),t.emitContainerClasses()),b&&!M?t.unsetGrabCursor():!b&&M&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof y[P]>"u")return;const k=r[P]&&r[P].enabled,_=y[P]&&y[P].enabled;k&&!_&&t[P].disable(),!k&&_&&t[P].enable()});const j=y.direction&&y.direction!==r.direction,T=r.loop&&(y.slidesPerView!==r.slidesPerView||j),C=r.loop;j&&i&&t.changeDirection(),Ft(t.params,y);const D=t.params.enabled,L=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),O&&!D?t.disable():!O&&D&&t.enable(),t.currentBreakpoint=h,t.emit("_beforeBreakpoint",y),i&&(T?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!C&&L?(t.loopCreate(e),t.updateSlides()):C&&!L&&t.loopDestroy()),t.emit("breakpoint",y)}function hO(t,e,i){if(e===void 0&&(e="window"),!t||e==="container"&&!i)return;let r=!1;const o=Tt(),l=e==="window"?o.innerHeight:i.clientHeight,u=Object.keys(t).map(d=>{if(typeof d=="string"&&d.indexOf("@")===0){const f=parseFloat(d.substr(1));return{value:l*f,point:d}}return{value:d,point:d}});u.sort((d,f)=>parseInt(d.value,10)-parseInt(f.value,10));for(let d=0;d<u.length;d+=1){const{point:f,value:h}=u[d];e==="window"?o.matchMedia(`(min-width: ${h}px)`).matches&&(r=f):h<=i.clientWidth&&(r=f)}return r||"max"}var mO={setBreakpoint:pO,getBreakpoint:hO};function gO(t,e){const i=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(o=>{r[o]&&i.push(e+o)}):typeof r=="string"&&i.push(e+r)}),i}function xO(){const t=this,{classNames:e,params:i,rtl:r,el:o,device:l}=t,u=gO(["initialized",i.direction,{"free-mode":t.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:r},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);e.push(...u),o.classList.add(...e),t.emitContainerClasses()}function yO(){const t=this,{el:e,classNames:i}=t;!e||typeof e=="string"||(e.classList.remove(...i),t.emitContainerClasses())}var vO={addClasses:xO,removeClasses:yO};function wO(){const t=this,{isLocked:e,params:i}=t,{slidesOffsetBefore:r}=i;if(r){const o=t.slides.length-1,l=t.slidesGrid[o]+t.slidesSizesGrid[o]+r*2;t.isLocked=t.size>l}else t.isLocked=t.snapGrid.length===1;i.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),i.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var bO={checkOverflow:wO},pp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function SO(t,e){return function(r){r===void 0&&(r={});const o=Object.keys(r)[0],l=r[o];if(typeof l!="object"||l===null){Ft(e,r);return}if(t[o]===!0&&(t[o]={enabled:!0}),o==="navigation"&&t[o]&&t[o].enabled&&!t[o].prevEl&&!t[o].nextEl&&(t[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&t[o]&&t[o].enabled&&!t[o].el&&(t[o].auto=!0),!(o in t&&"enabled"in l)){Ft(e,r);return}typeof t[o]=="object"&&!("enabled"in t[o])&&(t[o].enabled=!0),t[o]||(t[o]={enabled:!1}),Ft(e,r)}}const l0={eventsEmitter:vL,update:OL,translate:zL,transition:$L,slide:ZL,loop:QL,grabCursor:tO,events:fO,breakpoints:mO,checkOverflow:bO,classes:vO},c0={};let wh=class ii{constructor(){let e,i;for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?i=o[0]:[e,i]=o,i||(i={}),i=Ft({},i),e&&!i.el&&(i.el=e);const u=Bn();if(i.el&&typeof i.el=="string"&&u.querySelectorAll(i.el).length>1){const m=[];return u.querySelectorAll(i.el).forEach(y=>{const v=Ft({},i,{el:y});m.push(new ii(v))}),m}const d=this;d.__swiper__=!0,d.support=sv(),d.device=ov({userAgent:i.userAgent}),d.browser=lv(),d.eventsListeners={},d.eventsAnyListeners=[],d.modules=[...d.__modules__],i.modules&&Array.isArray(i.modules)&&d.modules.push(...i.modules);const f={};d.modules.forEach(m=>{m({params:i,swiper:d,extendParams:SO(i,f),on:d.on.bind(d),once:d.once.bind(d),off:d.off.bind(d),emit:d.emit.bind(d)})});const h=Ft({},pp,f);return d.params=Ft({},h,c0,i),d.originalParams=Ft({},d.params),d.passedParams=Ft({},i),d.params&&d.params.on&&Object.keys(d.params.on).forEach(m=>{d.on(m,d.params.on[m])}),d.params&&d.params.onAny&&d.onAny(d.params.onAny),Object.assign(d,{enabled:d.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return d.params.direction==="horizontal"},isVertical(){return d.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:d.params.allowSlideNext,allowSlidePrev:d.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:d.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:d.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),d.emit("_swiper"),d.params.init&&d.init(),d}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:i,params:r}=this,o=Hn(i,`.${r.slideClass}, swiper-slide`),l=Vc(o[0]);return Vc(e)-l}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(i=>i.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:i,params:r}=e;e.slides=Hn(i,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,i){const r=this;e=Math.min(Math.max(e,0),1);const o=r.minTranslate(),u=(r.maxTranslate()-o)*e+o;r.translateTo(u,typeof i>"u"?0:i),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",i.join(" "))}getSlideClasses(e){const i=this;return i.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=[];e.slides.forEach(r=>{const o=e.getSlideClasses(r);i.push({slideEl:r,classNames:o}),e.emit("_slideClass",r,o)}),e.emit("_slideClasses",i)}slidesPerViewDynamic(e,i){e===void 0&&(e="current"),i===void 0&&(i=!1);const r=this,{params:o,slides:l,slidesGrid:u,slidesSizesGrid:d,size:f,activeIndex:h}=r;let m=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let y=l[h]?Math.ceil(l[h].swiperSlideSize):0,v;for(let S=h+1;S<l.length;S+=1)l[S]&&!v&&(y+=Math.ceil(l[S].swiperSlideSize),m+=1,y>f&&(v=!0));for(let S=h-1;S>=0;S-=1)l[S]&&!v&&(y+=l[S].swiperSlideSize,m+=1,y>f&&(v=!0))}else if(e==="current")for(let y=h+1;y<l.length;y+=1)(i?u[y]+d[y]-u[h]<f:u[y]-u[h]<f)&&(m+=1);else for(let y=h-1;y>=0;y-=1)u[h]-u[y]<f&&(m+=1);return m}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:i,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&wc(e,u)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function o(){const u=e.rtlTranslate?e.translate*-1:e.translate,d=Math.min(Math.max(u,e.maxTranslate()),e.minTranslate());e.setTranslate(d),e.updateActiveIndex(),e.updateSlidesClasses()}let l;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)o(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const u=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;l=e.slideTo(u.length-1,0,!1,!0)}else l=e.slideTo(e.activeIndex,0,!1,!0);l||o()}r.watchOverflow&&i!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,i){i===void 0&&(i=!0);const r=this,o=r.params.direction;return e||(e=o==="horizontal"?"vertical":"horizontal"),e===o||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${o}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(l=>{e==="vertical"?l.style.width="":l.style.height=""}),r.emit("changeDirection"),i&&r.update()),r}changeLanguageDirection(e){const i=this;i.rtl&&e==="rtl"||!i.rtl&&e==="ltr"||(i.rtl=e==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(e){const i=this;if(i.mounted)return!0;let r=e||i.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=i,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const o=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(o()):Hn(r,o())[0];return!u&&i.params.createElements&&(u=Hc("div",i.params.wrapperClass),r.append(u),Hn(r,`.${i.params.slideClass}`).forEach(d=>{u.append(d)})),Object.assign(i,{el:r,wrapperEl:u,slidesEl:i.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:u,hostEl:i.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Bi(r,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Bi(r,"direction")==="rtl"),wrongRTL:Bi(u,"display")==="-webkit-box"}),!0}init(e){const i=this;if(i.initialized||i.mount(e)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(void 0,!0),i.attachEvents();const o=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&o.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?wc(i,l):l.addEventListener("load",u=>{wc(i,u.target)})}),fp(i),i.initialized=!0,fp(i),i.emit("init"),i.emit("afterInit"),i}destroy(e,i){e===void 0&&(e=!0),i===void 0&&(i=!0);const r=this,{params:o,el:l,wrapperEl:u,slides:d}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),o.loop&&r.loopDestroy(),i&&(r.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),u&&u.removeAttribute("style"),d&&d.length&&d.forEach(f=>{f.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(f=>{r.off(f)}),e!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),rL(r)),r.destroyed=!0),null}static extendDefaults(e){Ft(c0,e)}static get extendedDefaults(){return c0}static get defaults(){return pp}static installModule(e){ii.prototype.__modules__||(ii.prototype.__modules__=[]);const i=ii.prototype.__modules__;typeof e=="function"&&i.indexOf(e)<0&&i.push(e)}static use(e){return Array.isArray(e)?(e.forEach(i=>ii.installModule(i)),ii):(ii.installModule(e),ii)}};Object.keys(l0).forEach(t=>{Object.keys(l0[t]).forEach(e=>{wh.prototype[e]=l0[t][e]})});wh.use([xL,yL]);const dv=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ba(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function br(t,e){const i=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:ba(e[r])&&ba(t[r])&&Object.keys(e[r]).length>0?e[r].__swiper__?t[r]=e[r]:br(t[r],e[r]):t[r]=e[r]})}function fv(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function pv(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function hv(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function mv(t){t===void 0&&(t="");const e=t.split(" ").map(r=>r.trim()).filter(r=>!!r),i=[];return e.forEach(r=>{i.indexOf(r)<0&&i.push(r)}),i.join(" ")}function CO(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function TO(t){let{swiper:e,slides:i,passedParams:r,changedParams:o,nextEl:l,prevEl:u,scrollbarEl:d,paginationEl:f}=t;const h=o.filter($=>$!=="children"&&$!=="direction"&&$!=="wrapperClass"),{params:m,pagination:y,navigation:v,scrollbar:S,virtual:b,thumbs:M}=e;let O,j,T,C,D,L,P,k;o.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&!r.thumbs.swiper.destroyed&&m.thumbs&&(!m.thumbs.swiper||m.thumbs.swiper.destroyed)&&(O=!0),o.includes("controller")&&r.controller&&r.controller.control&&m.controller&&!m.controller.control&&(j=!0),o.includes("pagination")&&r.pagination&&(r.pagination.el||f)&&(m.pagination||m.pagination===!1)&&y&&!y.el&&(T=!0),o.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||d)&&(m.scrollbar||m.scrollbar===!1)&&S&&!S.el&&(C=!0),o.includes("navigation")&&r.navigation&&(r.navigation.prevEl||u)&&(r.navigation.nextEl||l)&&(m.navigation||m.navigation===!1)&&v&&!v.prevEl&&!v.nextEl&&(D=!0);const _=$=>{e[$]&&(e[$].destroy(),$==="navigation"?(e.isElement&&(e[$].prevEl.remove(),e[$].nextEl.remove()),m[$].prevEl=void 0,m[$].nextEl=void 0,e[$].prevEl=void 0,e[$].nextEl=void 0):(e.isElement&&e[$].el.remove(),m[$].el=void 0,e[$].el=void 0))};o.includes("loop")&&e.isElement&&(m.loop&&!r.loop?L=!0:!m.loop&&r.loop?P=!0:k=!0),h.forEach($=>{if(ba(m[$])&&ba(r[$]))Object.assign(m[$],r[$]),($==="navigation"||$==="pagination"||$==="scrollbar")&&"enabled"in r[$]&&!r[$].enabled&&_($);else{const Y=r[$];(Y===!0||Y===!1)&&($==="navigation"||$==="pagination"||$==="scrollbar")?Y===!1&&_($):m[$]=r[$]}}),h.includes("controller")&&!j&&e.controller&&e.controller.control&&m.controller&&m.controller.control&&(e.controller.control=m.controller.control),o.includes("children")&&i&&b&&m.virtual.enabled?(b.slides=i,b.update(!0)):o.includes("virtual")&&b&&m.virtual.enabled&&(i&&(b.slides=i),b.update(!0)),o.includes("children")&&i&&m.loop&&(k=!0),O&&M.init()&&M.update(!0),j&&(e.controller.control=m.controller.control),T&&(e.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-pagination"),f.part.add("pagination"),e.el.appendChild(f)),f&&(m.pagination.el=f),y.init(),y.render(),y.update()),C&&(e.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-scrollbar"),d.part.add("scrollbar"),e.el.appendChild(d)),d&&(m.scrollbar.el=d),S.init(),S.updateSize(),S.setTranslate()),D&&(e.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),kc(l,e.hostEl.constructor.nextButtonSvg),l.part.add("button-next"),e.el.appendChild(l)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),kc(u,e.hostEl.constructor.prevButtonSvg),u.part.add("button-prev"),e.el.appendChild(u))),l&&(m.navigation.nextEl=l),u&&(m.navigation.prevEl=u),v.init(),v.update()),o.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),o.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),o.includes("direction")&&e.changeDirection(r.direction,!1),(L||k)&&e.loopDestroy(),(P||k)&&e.loopCreate(),e.update()}function EO(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const i={on:{}},r={},o={};br(i,pp),i._emitClasses=!0,i.init=!1;const l={},u=dv.map(f=>f.replace(/_/,"")),d=Object.assign({},t);return Object.keys(d).forEach(f=>{typeof t[f]>"u"||(u.indexOf(f)>=0?ba(t[f])?(i[f]={},o[f]={},br(i[f],t[f]),br(o[f],t[f])):(i[f]=t[f],o[f]=t[f]):f.search(/on[A-Z]/)===0&&typeof t[f]=="function"?e?r[`${f[2].toLowerCase()}${f.substr(3)}`]=t[f]:i.on[`${f[2].toLowerCase()}${f.substr(3)}`]=t[f]:l[f]=t[f])}),["navigation","pagination","scrollbar"].forEach(f=>{i[f]===!0&&(i[f]={}),i[f]===!1&&delete i[f]}),{params:i,passedParams:o,rest:l,events:r}}function MO(t,e){let{el:i,nextEl:r,prevEl:o,paginationEl:l,scrollbarEl:u,swiper:d}=t;fv(e)&&r&&o&&(d.params.navigation.nextEl=r,d.originalParams.navigation.nextEl=r,d.params.navigation.prevEl=o,d.originalParams.navigation.prevEl=o),pv(e)&&l&&(d.params.pagination.el=l,d.originalParams.pagination.el=l),hv(e)&&u&&(d.params.scrollbar.el=u,d.originalParams.scrollbar.el=u),d.init(i)}function AO(t,e,i,r,o){const l=[];if(!e)return l;const u=f=>{l.indexOf(f)<0&&l.push(f)};if(i&&r){const f=r.map(o),h=i.map(o);f.join("")!==h.join("")&&u("children"),r.length!==i.length&&u("children")}return dv.filter(f=>f[0]==="_").map(f=>f.replace(/_/,"")).forEach(f=>{if(f in t&&f in e)if(ba(t[f])&&ba(e[f])){const h=Object.keys(t[f]),m=Object.keys(e[f]);h.length!==m.length?u(f):(h.forEach(y=>{t[f][y]!==e[f][y]&&u(f)}),m.forEach(y=>{t[f][y]!==e[f][y]&&u(f)}))}else t[f]!==e[f]&&u(f)}),l}const jO=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.emit("_virtualUpdated"),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function zc(){return zc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},zc.apply(this,arguments)}function gv(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function xv(t){const e=[];return Le.Children.toArray(t).forEach(i=>{gv(i)?e.push(i):i.props&&i.props.children&&xv(i.props.children).forEach(r=>e.push(r))}),e}function LO(t){const e=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Le.Children.toArray(t).forEach(r=>{if(gv(r))e.push(r);else if(r.props&&r.props.slot&&i[r.props.slot])i[r.props.slot].push(r);else if(r.props&&r.props.children){const o=xv(r.props.children);o.length>0?o.forEach(l=>e.push(l)):i["container-end"].push(r)}else i["container-end"].push(r)}),{slides:e,slots:i}}function OO(t,e,i){if(!i)return null;const r=m=>{let y=m;return m<0?y=e.length+m:y>=e.length&&(y=y-e.length),y},o=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`},{from:l,to:u}=i,d=t.params.loop?-e.length:0,f=t.params.loop?e.length*2:e.length,h=[];for(let m=d;m<f;m+=1)m>=l&&m<=u&&h.push(e[r(m)]);return h.map((m,y)=>Le.cloneElement(m,{swiper:t,style:o,key:m.props.virtualIndex||m.key||`slide-${y}`}))}function eo(t,e){return typeof window>"u"?R.useEffect(t,e):R.useLayoutEffect(t,e)}const sx=R.createContext(null),RO=R.createContext(null),Xt=R.forwardRef(function(t,e){let{className:i,tag:r="div",wrapperTag:o="div",children:l,onSwiper:u,...d}=t===void 0?{}:t,f=!1;const[h,m]=R.useState("swiper"),[y,v]=R.useState(null),[S,b]=R.useState(!1),M=R.useRef(!1),O=R.useRef(null),j=R.useRef(null),T=R.useRef(null),C=R.useRef(null),D=R.useRef(null),L=R.useRef(null),P=R.useRef(null),k=R.useRef(null),{params:_,passedParams:$,rest:Y,events:F}=EO(d),{slides:te,slots:ie}=LO(l),oe=()=>{b(!S)};Object.assign(_.on,{_containerClasses(ee,H){m(H)}});const re=()=>{Object.assign(_.on,F),f=!0;const ee={..._};if(delete ee.wrapperClass,j.current=new wh(ee),j.current.virtual&&j.current.params.virtual.enabled){j.current.virtual.slides=te;const H={cache:!1,slides:te,renderExternal:v,renderExternalUpdate:!1};br(j.current.params.virtual,H),br(j.current.originalParams.virtual,H)}};O.current||re(),j.current&&j.current.on("_beforeBreakpoint",oe);const B=()=>{f||!F||!j.current||Object.keys(F).forEach(ee=>{j.current.on(ee,F[ee])})},K=()=>{!F||!j.current||Object.keys(F).forEach(ee=>{j.current.off(ee,F[ee])})};R.useEffect(()=>()=>{j.current&&j.current.off("_beforeBreakpoint",oe)}),R.useEffect(()=>{!M.current&&j.current&&(j.current.emitSlidesClasses(),M.current=!0)}),eo(()=>{if(e&&(e.current=O.current),!!O.current)return j.current.destroyed&&re(),MO({el:O.current,nextEl:D.current,prevEl:L.current,paginationEl:P.current,scrollbarEl:k.current,swiper:j.current},_),u&&!j.current.destroyed&&u(j.current),()=>{j.current&&!j.current.destroyed&&j.current.destroy(!0,!1)}},[]),eo(()=>{B();const ee=AO($,T.current,te,C.current,H=>H.key);return T.current=$,C.current=te,ee.length&&j.current&&!j.current.destroyed&&TO({swiper:j.current,slides:te,passedParams:$,changedParams:ee,nextEl:D.current,prevEl:L.current,scrollbarEl:k.current,paginationEl:P.current}),()=>{K()}}),eo(()=>{jO(j.current)},[y]);function W(){return _.virtual?OO(j.current,te,y):te.map((ee,H)=>Le.cloneElement(ee,{swiper:j.current,swiperSlideIndex:H}))}return Le.createElement(r,zc({ref:O,className:mv(`${h}${i?` ${i}`:""}`)},Y),Le.createElement(RO.Provider,{value:j.current},ie["container-start"],Le.createElement(o,{className:CO(_.wrapperClass)},ie["wrapper-start"],W(),ie["wrapper-end"]),fv(_)&&Le.createElement(Le.Fragment,null,Le.createElement("div",{ref:L,className:"swiper-button-prev"}),Le.createElement("div",{ref:D,className:"swiper-button-next"})),hv(_)&&Le.createElement("div",{ref:k,className:"swiper-scrollbar"}),pv(_)&&Le.createElement("div",{ref:P,className:"swiper-pagination"}),ie["container-end"]))});Xt.displayName="Swiper";const Kt=R.forwardRef(function(t,e){let{tag:i="div",children:r,className:o="",swiper:l,zoom:u,lazy:d,virtualIndex:f,swiperSlideIndex:h,...m}=t===void 0?{}:t;const y=R.useRef(null),[v,S]=R.useState("swiper-slide"),[b,M]=R.useState(!1);function O(D,L,P){L===y.current&&S(P)}eo(()=>{if(typeof h<"u"&&(y.current.swiperSlideIndex=h),e&&(e.current=y.current),!(!y.current||!l)){if(l.destroyed){v!=="swiper-slide"&&S("swiper-slide");return}return l.on("_slideClass",O),()=>{l&&l.off("_slideClass",O)}}}),eo(()=>{l&&y.current&&!l.destroyed&&S(l.getSlideClasses(y.current))},[l]);const j={isActive:v.indexOf("swiper-slide-active")>=0,isVisible:v.indexOf("swiper-slide-visible")>=0,isPrev:v.indexOf("swiper-slide-prev")>=0,isNext:v.indexOf("swiper-slide-next")>=0},T=()=>typeof r=="function"?r(j):r,C=()=>{M(!0)};return Le.createElement(i,zc({ref:y,className:mv(`${v}${o?` ${o}`:""}`),"data-swiper-slide-index":f,onLoad:C},m),u&&Le.createElement(sx.Provider,{value:j},Le.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof u=="number"?u:void 0},T(),d&&!b&&Le.createElement("div",{className:"swiper-lazy-preloader"}))),!u&&Le.createElement(sx.Provider,{value:j},T(),d&&!b&&Le.createElement("div",{className:"swiper-lazy-preloader"})))});Kt.displayName="SwiperSlide";const DO=E(Xt)`
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
`,HO=E(Kt)`
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
`,VO=E.section`
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
`,kO=E.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`,zO=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  max-width: 1440px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,PO=E.p`
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
`,NO=E.p`
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
`,BO=E.img`
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
`;E.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;E.button`
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
`;const $O=E.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${t=>t.$isActive?"898px":"437px"};
    height: ${t=>t.$isActive?"500px":"285px"};
  }
`,_O=E.div`
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
`,UO=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,IO=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;E.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  position: relative;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const ox=E.button`
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
`,lx=E.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,GO=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,qO=E.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,YO=E.div`
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
`,FO="/assets/Review%20Image%203-bwglEcYl.png",cx="/assets/Review%20Image%201-BysFOq9G.png",ux="/assets/Review%20Image%202-C_HtVc_c.png",dx="/assets/Review%20Image%205-B3ukDKHL.png",ZO="/assets/Review%20Image%204-AW0fOgIu.png",XO=E.section`
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
`,KO=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,WO=E.p`
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
`,QO=E.h3`
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
`,yv=E.span`
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
`,JO=E.div`
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
`,eR=E.div`
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
`,tR=E.div`
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
`,nR=E(tR)`
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
`,iR=E.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`,aR=E.div`
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
`,rR=E.p`
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
`,sR=E.div`
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
`;function vv(){const[t,e]=R.useState(null),[i,r]=R.useState(0),o=R.useRef(null),l=R.useRef(null),u=()=>{t&&t.slidePrev()},d=()=>{t&&t.slideNext()},f=[{image:FO,description:"A broken washing machine that stopped mid-cycle was fully restored by our team in just one visit. The family can now enjoy clean laundry again without stress.",title:"Quick Fix for a Washing Machine Breakdown",type:"Washing Machine Repair"},{image:ux,description:"We installed a brand-new dishwasher for a busy household, ensuring proper water connections and energy efficiency. The client now saves both time and water daily.",title:"Professional Dishwasher Installation",type:"Dishwasher Installation"},{image:dx,description:"A fridge that was leaking water and not cooling properly was diagnosed and repaired. The customer avoided costly food spoilage and gained reliable performance again.",title:"Refrigerator Leak and Cooling Repair",type:"Refrigerator Repair"},{image:ZO,description:"The dryer was overheating and shutting down after a few minutes. Our experts replaced faulty parts and cleaned the vent system, restoring safe and efficient drying.",title:"Dryer Overheating Problem Solved",type:"Dryer Repair"},{image:cx,description:"An oven that wouldn’t heat evenly was repaired by recalibrating the thermostat and replacing heating elements. The family can now cook meals perfectly again.",title:"Oven Heating Restored for Perfect Meals",type:"Oven Repair"},{image:dx,description:"We handled a complete installation of a modern washing machine, ensuring proper setup, water connection, and vibration-free operation.",title:"Seamless Washing Machine Installation",type:"Washing Machine Installation"},{image:ux,description:"A freezer full of food was saved when we quickly repaired the compressor and restored full cooling capacity within hours.",title:"Emergency Freezer Repair",type:"Freezer Repair"},{image:cx,description:"A customer’s stove stopped working during family dinner preparation. Our team replaced defective wiring and burners, restoring it the same day.",title:"Stove Emergency Fixed Same Day",type:"Stove Repair"}];return x.jsxs(VO,{children:[x.jsxs(zO,{children:[x.jsx(PO,{children:"Our Cases"}),x.jsxs(NO,{children:[x.jsx(yv,{children:"Success Stories "})," That Bring Your Appliances Back to Life"]})]}),x.jsx(YO,{children:x.jsx(DO,{modules:[dn],pagination:{clickable:!0},spaceBetween:20,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,onSwiper:e,onSlideChange:h=>r(h.realIndex),breakpoints:{1440:{slidesPerView:6,spaceBetween:30,centeredSlides:!0}},children:f.map(({image:h,description:m,title:y,type:v},S)=>x.jsx(HO,{$isActive:i===S,$index:S,children:x.jsxs($O,{$isActive:i===S,$index:S,children:[x.jsx(BO,{src:h,alt:v,$isActive:i===S,$index:S}),x.jsx(_O,{$isActive:i===S,$index:S,children:x.jsxs(UO,{children:[x.jsx(IO,{children:x.jsx(lx,{children:m})}),x.jsxs(GO,{children:[x.jsx(qO,{children:y}),x.jsx(lx,{children:v})]})]})})]})},S))})}),x.jsxs(kO,{children:[x.jsx(ox,{ref:o,$bg:"#DBDBD8",onClick:u,children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(ox,{ref:l,$bg:"#3098EE",onClick:d,children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})}const oR=E(vn.div)`
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
`,lR=E.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`,cR=({type:t,message:e,onClose:i,autoClose:r=!0,autoCloseDuration:o=25e3})=>{const{t:l}=yh();R.useEffect(()=>{if(r){const d=setTimeout(()=>{i()},o);return()=>clearTimeout(d)}},[r,o,i]);const u={success:l("alert.success"),error:l("alert.error")};return x.jsxs(oR,{$type:t,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",damping:25},children:[x.jsx("div",{children:e||u[t]}),x.jsx(lR,{onClick:i,children:"×"})]})},uR="/assets/ContactFormImage-CaQYWUqs.png",bh=()=>{const[t,e]=R.useState(""),[i,r]=R.useState({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),[o,l]=R.useState({}),[u,d]=R.useState(null),f=y=>{const{name:v,value:S}=y.target;r(b=>({...b,[v]:S})),l(b=>({...b,[v]:!1}))},h=()=>{const y={};return t||(y.service=!0),i.name||(y.name=!0),i.email||(y.email=!0),i.phone||(y.phone=!0),i.location||(y.location=!0),i.appliance||(y.appliance=!0),i.brand||(y.brand=!0),i.power||(y.power=!0),y},m=async y=>{y.preventDefault();const v=h();if(Object.keys(v).length>0){l(v),d({type:"error",message:"Please fill all required fields"});return}try{if((await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:t,...i})})).ok)e(""),r({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),l({}),d({type:"success",message:"Form submitted successfully! We will contact you soon."});else throw new Error("Failed to submit form")}catch(S){console.error("Error submitting form:",S),d({type:"error",message:"There was an error submitting the form. Please try again."})}};return x.jsxs(gR,{children:[x.jsxs(mx,{children:[x.jsxs(d0,{children:[x.jsxs(xR,{children:[" ",x.jsx("span",{children:"Contact"})," our team"]}),x.jsx(ec,{children:"We love our customers, so feel free to call during normal business hours"})]}),x.jsx(yR,{children:x.jsx(vR,{children:"Call Us for Fast Repair"})}),x.jsxs(mx,{children:[x.jsx(wR,{}),x.jsxs(bR,{children:[x.jsxs(gx,{width:"251px",children:[x.jsx(xx,{children:"Service Hours"}),x.jsx(d0,{children:x.jsxs(ec,{children:["Mon–Sat: 8AM–6PM ",x.jsx("br",{})," Sun: 9AM–4PM"," "]})})]}),x.jsxs(gx,{children:[x.jsx(xx,{children:"Our Location"}),x.jsxs(d0,{children:[x.jsx(ec,{children:"801 Tioga Pl, Newbury Park, CA 91320"}),x.jsx(ec,{children:"+1 (805) 500-2705"})]})]})]})]})]}),x.jsxs(dR,{onSubmit:m,children:[x.jsx(SR,{src:uR,alt:"contact image"}),x.jsx(ni,{children:"What service do you need for your appliances?"}),x.jsxs(fR,{children:[x.jsxs(fx,{style:o.service?{borderColor:"red"}:{},children:[x.jsx(px,{name:"service",value:"Repair",checked:t==="Repair",onChange:y=>e(y.target.value)}),x.jsx(hx,{checked:t==="Repair"}),"Repair"]}),x.jsxs(fx,{style:o.service?{borderColor:"red"}:{},children:[x.jsx(px,{name:"service",value:"Installation",checked:t==="Installation",onChange:y=>e(y.target.value)}),x.jsx(hx,{checked:t==="Installation"}),"Installation"]})]}),x.jsxs(CR,{children:[x.jsxs(TR,{children:[x.jsx(ni,{children:"Name"}),x.jsx(u0,{name:"name",type:"text",placeholder:"Your Name",value:i.name,onChange:f,style:o.name?{borderBottom:"1px solid red"}:{}}),x.jsx(ni,{children:"Email"}),x.jsx(u0,{name:"email",type:"email",placeholder:"Your Email",value:i.email,onChange:f,style:o.email?{borderBottom:"1px solid red"}:{}}),x.jsx(ni,{children:"Phone Number"}),x.jsx(u0,{name:"phone",type:"tel",placeholder:"Your Phone Number",value:i.phone,onChange:f,style:o.phone?{borderBottom:"1px solid red"}:{}})]}),x.jsxs(ER,{children:[x.jsx(ni,{children:"In what location do you need the service?"}),x.jsx(Ql,{children:x.jsxs(Jl,{name:"location",value:i.location,onChange:f,style:o.location?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select location"}),x.jsx("option",{children:"Malibu"}),x.jsx("option",{children:"Los Angeles County"}),x.jsx("option",{children:"Thousand Oaks"}),x.jsx("option",{children:"Newbury Park"}),x.jsx("option",{children:"Westlake Village"}),x.jsx("option",{children:"Oak Park"}),x.jsx("option",{children:"Lake Sherwood"}),x.jsx("option",{children:"Hidden Valley"}),x.jsx("option",{children:"Camarillo"}),x.jsx("option",{children:"Agoura Hills"}),x.jsx("option",{children:"Moorpark"}),x.jsx("option",{children:"Calabasas"}),x.jsx("option",{children:"Santa Rosa Valley"}),x.jsx("option",{children:"Other"})]})}),x.jsx(ni,{children:"What do you need repaired?"}),x.jsx(Ql,{children:x.jsxs(Jl,{name:"appliance",value:i.appliance,onChange:f,style:o.appliance?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select appliance"}),x.jsx("option",{children:"Cooktop"}),x.jsx("option",{children:"Oven"}),x.jsx("option",{children:"Range"}),x.jsx("option",{children:"Washer"}),x.jsx("option",{children:"Refrigerator"}),x.jsx("option",{children:"Microwave"}),x.jsx("option",{children:"Dishwasher"}),x.jsx("option",{children:"Dryer"}),x.jsx("option",{children:"Washing Machine"}),x.jsx("option",{children:"Freezer"}),x.jsx("option",{children:"Stove"}),x.jsx("option",{children:"Wine Cooler"}),x.jsx("option",{children:"Other"})]})}),x.jsx(ni,{children:"Brand of appliance"}),x.jsx(Ql,{children:x.jsxs(Jl,{name:"brand",value:i.brand,onChange:f,style:o.brand?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select brand"}),x.jsx("option",{children:"LG"}),x.jsx("option",{children:"Samsung"}),x.jsx("option",{children:"Whirlpool"}),x.jsx("option",{children:"Bosch"}),x.jsx("option",{children:"GE"}),x.jsx("option",{children:"Frigidaire"}),x.jsx("option",{children:"Maytag"}),x.jsx("option",{children:"KitchenAid"}),x.jsx("option",{children:"Viking"}),x.jsx("option",{children:"Fisher & Paykel"}),x.jsx("option",{children:"Amana"}),x.jsx("option",{children:"JennAir"}),x.jsx("option",{children:"Haier"}),x.jsx("option",{children:"Sharp"}),x.jsx("option",{children:"Electrolux"}),x.jsx("option",{children:"Sub-Zero"}),x.jsx("option",{children:"Thermador"}),x.jsx("option",{children:"Wolf"}),x.jsx("option",{children:"Other"})]})})]})]}),x.jsx(ni,{children:"What type of power does this appliance use?"}),x.jsx(Ql,{children:x.jsxs(Jl,{name:"power",value:i.power,onChange:f,style:o.power?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select power"}),x.jsx("option",{children:"Electric"}),x.jsx("option",{children:"Gas"}),x.jsx("option",{children:"Dual Fuel"}),x.jsx("option",{children:"Induction"}),x.jsx("option",{children:"Solar"}),x.jsx("option",{children:"Propane"}),x.jsx("option",{children:"Natural Gas"}),x.jsx("option",{children:"Other"})]})}),x.jsx(ni,{children:"Any details you'd like to add?"}),x.jsx(pR,{name:"details",placeholder:"Any details you'd like to add?",value:i.details,onChange:f}),x.jsxs(mR,{children:['By clicking "Submit" you hereby agree to our ',x.jsx("a",{href:"http://#",children:"Privacy Policy"})," ."]}),x.jsx(hR,{type:"submit",children:"Submit"})]}),x.jsx(uy,{children:u&&x.jsx(cR,{type:u.type,message:u.message,onClose:()=>d(null)})})]})},dR=E.form`
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
`,ni=E.label`
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
`,fR=E.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,fx=E.label`
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
`,px=E.input.attrs({type:"radio"})`
  display: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,hx=E.span`
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
`,u0=E.input`
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
`,Ql=E.div`
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
`,Jl=E.select`
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
`,pR=E.textarea`
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
`,hR=E.button`
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
`,mR=E.p`
  font-size: 12px;
  color: #666;
  text-align: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,gR=E.div`
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
`,mx=E.div`
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
`,d0=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,xR=E.p`
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
`,ec=E.p`
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
`,yR=E.button`
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
`,vR=E.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,wR=E.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,bR=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,gx=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${t=>t.width||"100%"};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,xx=E.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,SR=E.img`
  margin: 0 auto;
  width: 100%;
  max-width: 696px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 668px;
  }

  @media screen and (min-width: 1440px) {
  }
`,CR=E.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`,TR=E.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,ER=E.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,yx="/assets/Ellipse%204aleksey-FxWBDF7j.png",vx="/assets/Ellipse%204-sanal-avatar-Dxfndv0Z.png",wx="/assets/Ellipse%204-Wendy%20Bailey-jDxdSyQ5.png",bx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgESURBVHgB3Vr7b1NVHP/c29t3V9ZtsNG9Oh1TivJWCAaGYjSDxWgwBo3EmBgRTIiCidF/QBMTfoaYKGIkQIiiYTwSQHkZiKCM8d4YY2PtBuzRrs/b9l6/53aDjdFube9Yt09yt7b33HPP93zf3+/hoD442GxW5JocsOW8CKPxJRj1lRCEORA0BmVELBZEJFqPkFgPX7AR3r5j6Oq7A4+nByqDg1pwOBwozd+Egty3YTJOJyKAaAzKf0kGZHaxgfSH4+IXzwMaugRN/PIG2tHj2YEm11a43a1QAZkSyGOesxYV9m1EVBGCIRBnJCKGR3qQoddxMOhAczXg5p1vceHabvo9hjSRLoEcFjrfQGX5j8QJG3yBfhZx6RI2FDLNxaaymDjEosDN1rdw/uo+pIHUCXRMLcKCuf9Cr52OPr8UlzUVRX0oFKGG1cwhFG7AhSurcNPVlsoEmlQGY/nCTzFn1jH4gxaExQGOjRVx6J+bo3exjZyGGY5NsFg60eY+l8oEoxtXu+wgrJbXyRBE6ZuA8YAkRzHFIsDjO4W648swwOEkGA2BWqypuUIWsZLMeoyeSI3rakNGFEadAA3XiF2HnfRLNNnwkQjU4b2a6wiI5YhGmbqNpTimAFkiv8pBb2jBrroqJCEy2YI5rFnZiHD4KTL9WUTcAPqJ1GkbsfvQs0ggronNem31KSLs6ewkjoEMXDQqQ5KqULNsf6JRj9en6hc2Ymrux+RsSedU8m1jAtr4CIVKtpxnYLN04Lb7/LARw56pqCjH0udb0O0ha8mNj7VMFcy6FkwRcOhsITo77w6+NZw7CysPwOuTJgxxDDyttdcnY8lzfw67NeTbolmrIeic5BKyUOdGgBSTKR52Yu7MVYN/HkygAEfJXvgU7k08ApnRYaFjVdlPGETXQzGcN/NdJX1B+sTx9LwcESG72sl8MfuVwlTkZ7niYlqRVom104IsU4wl5BMXa3Dhah2GrGD1q5fJIj2bQapDqZKI4oJp+HvLNnj8PqSyTJvZguVfbURz222QA0fa4Oi1GqEDvx2xs69xDpYXVsBocCLcJyMT6ZQk6AUBZVOnAexKETmMMJojIzD2mw3T8bS9lGUecQIdpespHcncodPj0iDxilAud+pKAwReGFFY86xWeIJBkvNMQ13SxbAITC/8jAjcHCcwL/d9hCLEPXVTn0A4jFfeIaNmMMTLE8mg6GApeBorpauDAwhRKpdvW0OfvhBQXJwPE7HU64Pa4GkzdSWlEA3GUdkuRpacKXFxcDAb7cjLy6EV6EqU4tBkA9Nls7mMR65+hVL5mmxg6V2BZREPi3kGYhlarmwE46DRsESg4tHcseKgTCmb6HbRi5LoINM5rRa6IjvEaBSqgSI3Kj9WMgJnY4ygo6hk86av6RXahAZaoIins7cHW/f8TNWzKVANbOOINiomVasXe4phOIgTt7bvfWAR+VFM7e7ugr16LqVqlVAVkhQWxiqwZpMyfxYQRSIyyTjyj95AgGLXscjOWPlPigVochPU8T9D4AsFUbhyKTRGU2JHT++VaY/5MgdUNXWMb1I0KECMXYRJWAz16VPEUyYdCySLYvobMYogqbnJbD5RvMgjFGocMYxK/y1xzildJE3ii6VZaksQ04tQpJ6HP3Q6nrtNMrCgPRBo4tEdOKv06CYbWL+xK3iUR29vC2XBmHQQiGkej4uqUb1eBIMdZGQK1U6XlEjm/j2KKIwjp0usD2jLA6fTq6GPMvUs21lLnLFOwn3vr1To3QAxAjXBIpm1az+ipq1uxL2zWSz45fgRtHe4ldAtI+j1HDrub2cf47LZ2vYdygo3KD2/DB3/wMOMC1qtgB0Uqo0WzR0u7L3ZCOTakD5IbAw6nrL579m3OIEtHS2YH+okMZqqVKbSnrs/eqFMPkhhWyrIoWDAo0Q0GZcsOGrQNgwcYnhoXVo716GyZB/dRLrgqNzQ2nUP5sXOuJKnAtbkmVYEzZRcyt4yiGlyqK9/qfmbB2sadEtD7bJ78AesACaqY5RhJP3bc5itX9mlwdscQ1Pbh5QAa9QPK54ESPdyzByaXW8CD8PaoXJ0ruEPRCJu0oOJRyDLRsLhBqLh98E/P6ooMi5fX0CNfl7phU8UyOxwgplH/dWVj94armv3PT5qKHYhP7eW/CKrZWR3HMcYwU5eNLevR/2NY4/eTuwSaqsPw6B/jSreMrK128RsBTMqwdBJ7D+x7HFDEnNn//EaavA3QSvIWWl0lEhCYCFgExFXnWhYMvGTsLPOSTvUqkTm2UTkAHFGQws6D81EkgNBI+lXBDsPPEO9hWYKf5iYjn+FWKY1GA0cVeQb4fJX4a/MDgINgEftyydhNS6B1z9+hxMkZlDMlAH1HcSBE6xVPaJUjTZikXGj5Qfk2bpRlL9KORMqSU/w/Aw5cXaaJc+qwW33ehw98/lon0x9gTMryuGcUUedzln9xynH2I2wCIX8ckh04b/6+bh1tzOVp9PnwKLZq+Gw71WqV4EQ4yinGkeVA7Fc/ECsJHXj2p0PUH+J9dxTNnSZLkhQDi88VfIl+cxZSpdYFNPnqsyONGs5stxAMOxGq2sd/rl8AONwpHk42KH0soJPSE/WwmyyK+0r1tRhnSvlULr0cP8fHErvLyuymhBzRf6gG929e3DHtQXN2XEo/fGwWvNgtxbDlLOCTHoVcWQ2pfezqXpnUu7HpAAZqosIh5qIqNPo9Z1Bj78VPT1epCGGyfA/uU/qLszt8vwAAAAASUVORK5CYII=",Sx="/assets/Review%20Image-alexey-BS9M-VaX.png",Cx="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",Tx="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",Ex="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",tc=[{avatar:yx,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:Sx},{avatar:vx,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:Cx},{avatar:wx,name:"Wendy Bailey",time:"месяц назад",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:Tx},{avatar:bx,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:Ex},{avatar:yx,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:Sx},{avatar:vx,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:Cx},{avatar:wx,name:"Wendy Bailey",time:"месяц назад",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:Tx},{avatar:bx,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:Ex}],MR=E.div`
  padding: 0px 16px;
  width: 375px;
  height: 170px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,AR=E.h2`
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
`,jR=E.p`
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
`,LR=E.div`
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
`,f0=E.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: ${t=>t.$isVisible?"block":"none"};

  @media screen and (min-width: 768px) {
    width: 50%; /* Два свайпери займають по половині ширини */
    display: block;
  }
`,p0=E.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: #f5faff;
  border-radius: 8px;
  height: 600px; /* Фіксована висота картки */
`,h0=E.div`
  display: flex;
  gap: 19px;
  align-items: center;
`,m0=E.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`,g0=E.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,x0=E.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`,y0=E.p`
  color: rgba(33, 33, 33, 0.5);
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`,v0=E.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  line-height: 1.25em;
  flex-grow: 1;
  overflow: hidden;
`,w0=E.img`
  width: 100%;
  height: 370px;
  border-radius: 4px;
  object-fit: cover;
`,b0=E.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,S0=E.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,wv=()=>{const[,t]=Le.useState(!1),e=Le.useRef(null),i=Le.useRef(null),r=Le.useRef(null),o=_e({query:"(min-width: 768px)"}),l=_e({query:"(min-width: 1440px)"}),u=d=>{if(!e.current||!r.current)return;const f=e.current,h=r.current,m=d.touches[0].clientY,{top:y,bottom:v}=h.getBoundingClientRect(),S=f.isBeginning&&m>y+50,b=f.isEnd&&m<v-50;S||b?(t(!0),f.allowTouchMove=!1):(t(!1),f.allowTouchMove=!0)};return Le.useEffect(()=>{const d=r.current;if(d)return d.addEventListener("touchmove",u,{passive:!1}),()=>{d.removeEventListener("touchmove",u)}},[]),x.jsxs("div",{children:[x.jsxs(MR,{children:[x.jsx(jR,{children:"Your Feedback Matters"}),x.jsxs(AR,{children:["Discover why clients ",x.jsx("span",{children:" trust "})," our repairs"]})]}),x.jsxs(LR,{ref:r,children:[x.jsxs(f0,{$isVisible:!0,children:[x.jsx(b0,{}),x.jsx(S0,{}),x.jsx(Xt,{ref:e,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!0,waitForTransition:!0},speed:7e3,loop:!0,touchEventsTarget:"container",modules:[n0,dn],grabCursor:!0,resistance:!0,resistanceRatio:.85,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{e.current&&(e.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:tc.map((d,f)=>x.jsx(Kt,{children:x.jsxs(p0,{children:[x.jsxs(h0,{children:[x.jsx(m0,{src:d.avatar,alt:d.name}),x.jsxs(g0,{children:[x.jsx(x0,{children:d.name}),x.jsx(y0,{children:d.time})]})]}),x.jsx(v0,{children:d.text}),x.jsx(w0,{src:d.image,alt:`Review by ${d.name}`})]})},`top-${f}`))})]}),x.jsxs(f0,{$isVisible:o,children:[x.jsx(b0,{}),x.jsx(S0,{}),x.jsx(Xt,{ref:i,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!0,waitForTransition:!0,reverseDirection:!0},speed:4e3,loop:!0,touchEventsTarget:"container",modules:[n0,dn],grabCursor:!1,noSwiping:!0,allowTouchMove:!1,simulateTouch:!1,resistance:!0,resistanceRatio:.85,initialSlide:tc.length-1,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{i.current&&(i.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:tc.map((d,f)=>x.jsx(Kt,{children:x.jsxs(p0,{children:[x.jsxs(h0,{children:[x.jsx(m0,{src:d.avatar,alt:d.name}),x.jsxs(g0,{children:[x.jsx(x0,{children:d.name}),x.jsx(y0,{children:d.time})]})]}),x.jsx(v0,{children:d.text}),x.jsx(w0,{src:d.image,alt:`Review by ${d.name}`})]})},`bottom-${f}`))})]}),l&&x.jsxs(f0,{$isVisible:!0,children:[x.jsx(b0,{}),x.jsx(S0,{}),x.jsx(Xt,{ref:e,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0,waitForTransition:!0},speed:9e3,loop:!0,touchEventsTarget:"container",modules:[n0,dn],grabCursor:!0,resistance:!0,resistanceRatio:.85,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{e.current&&(e.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:tc.map((d,f)=>x.jsx(Kt,{children:x.jsxs(p0,{children:[x.jsxs(h0,{children:[x.jsx(m0,{src:d.avatar,alt:d.name}),x.jsxs(g0,{children:[x.jsx(x0,{children:d.name}),x.jsx(y0,{children:d.time})]})]}),x.jsx(v0,{children:d.text}),x.jsx(w0,{src:d.image,alt:`Review by ${d.name}`})]})},`top-${f}`))})]})]})]})},OR="/assets/Hero%20Image-CELmD3oB.png",Sh="data:image/svg+xml,%3csvg%20width='140'%20height='33'%20viewBox='0%200%20140%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_586)'%3e%3cpath%20d='M0.00384521%2032.9336H31.9955V0.933594H0.00384521V32.9336ZM20.5091%203.37746C26.1637%205.23116%2030.25%2010.5932%2030.2654%2016.9275C30.2807%2023.1588%2026.277%2028.508%2020.5091%2030.4846V3.37746ZM15.9946%202.65223C17.0161%202.65223%2018.1043%202.78857%2019.0107%202.96908C19.0107%2010.2187%2012.0004%2016.185%204.76547%2016.185L1.74041%2016.1805C2.23648%208.74909%208.38454%202.65223%2015.9946%202.65223ZM4.76803%2017.6943C12.0017%2017.6943%2019.0094%2023.6542%2019.0094%2030.8968C18.1043%2031.0818%2016.9617%2031.2194%2015.9946%2031.2194C8.38198%2031.2092%202.02589%2025.0938%201.73849%2017.6943H4.76803ZM42.7049%2019.7452V17.7283H49.3618V15.157H42.7036V11.4131H49.7862V8.84766H39.9787V19.6287C39.9787%2022.3542%2041.1392%2024.2181%2043.8634%2024.6009C43.9178%2024.6143%2043.9716%2024.6246%2044.0215%2024.6259H44.0708C44.3499%2024.6572%2044.6347%2024.6777%2044.9336%2024.6777H49.975V22.1154H44.9561C44.09%2022.1154%2042.7049%2021.6879%2042.7049%2019.7452ZM51.9113%2024.6816H54.6374V8.84382H51.9113V24.6816ZM62.6404%2012.8674C59.1948%2012.8674%2056.6159%2015.2415%2056.6159%2018.938V19.0296C56.6159%2022.6358%2059.1033%2024.9638%2062.7089%2024.9638C64.4429%2024.9638%2066.063%2024.4851%2067.5461%2022.9092L65.903%2021.3121C65.0357%2022.1794%2064.1914%2022.6358%2062.7998%2022.6358C60.7688%2022.6358%2059.4227%2021.4491%2059.3312%2019.6229H68.2758C68.3212%2019.1665%2068.3212%2018.6647%2068.3212%2018.6647C68.3225%2015.4463%2066.063%2012.8674%2062.6404%2012.8674ZM59.4003%2017.7059C59.5142%2016.313%2060.9295%2015.1948%2062.6404%2015.1948C64.2375%2015.1948%2065.5381%2016.3361%2065.5381%2017.7059H59.4003ZM75.9825%2015.3094C77.2146%2015.3094%2078.1281%2015.7664%2078.9032%2016.5646L80.5918%2014.8069C79.2681%2013.3917%2077.6941%2012.8213%2075.9825%2012.8213C72.5138%2012.8213%2069.7301%2015.4003%2069.7301%2018.915C69.7301%2022.4297%2072.5138%2025.0093%2075.9825%2025.0093C77.6941%2025.0093%2079.2687%2024.439%2080.5918%2023.0237L78.9032%2021.266C78.1281%2022.0649%2077.2146%2022.5213%2075.9825%2022.5213C73.9739%2022.5213%2072.4453%2020.9914%2072.4453%2018.915C72.4453%2016.8385%2073.9739%2015.3094%2075.9825%2015.3094ZM85.0148%2019.7497H85.0116V15.7062H87.4906V13.2291H85.0148V8.84446H82.2886V19.9103L82.2963%2019.9097C82.3744%2022.4829%2083.5432%2024.2354%2086.1733%2024.6047C86.2277%2024.6182%2086.2815%2024.6284%2086.3314%2024.6291H86.3807C86.6598%2024.6604%2086.9446%2024.6816%2087.2436%2024.6816H87.5322L87.5418%2022.1193H87.266C86.3999%2022.1193%2085.0148%2021.6923%2085.0148%2019.7497ZM92.4885%2014.9324V13.2297H89.7847V24.6816H92.4885V18.6596C92.4885%2016.7739%2093.6925%2015.5916%2095.5775%2015.5916C96.009%2015.5916%2096.3956%2015.6365%2096.7137%2015.7056V13.0703C96.5998%2013.0479%2096.1914%2013.0018%2095.8963%2013.0018C94.2602%2013.0025%2093.0338%2013.7527%2092.4885%2014.9324ZM103.38%2012.8885C99.9033%2012.8885%2097.131%2015.5232%2097.131%2018.9553C97.131%2022.3856%2099.9033%2025.0221%20103.38%2025.0221C106.832%2025.0221%20109.627%2022.3856%20109.627%2018.9553C109.626%2015.5238%20106.832%2012.8885%20103.38%2012.8885ZM103.38%2022.5456C101.358%2022.5456%2099.8361%2020.9767%2099.8361%2018.9553C99.8361%2016.9326%20101.358%2015.3651%20103.38%2015.3651C105.379%2015.3651%20106.923%2016.9326%20106.923%2018.9553C106.922%2020.9774%20105.379%2022.5456%20103.38%2022.5456ZM111.303%2024.6816H114.03V8.84382H111.303V24.6816ZM123.862%2019.8866C123.862%2021.7039%20122.795%2022.4777%20121.363%2022.4777C119.932%2022.4777%20118.865%2021.7039%20118.865%2019.911V13.2297H116.115V20.1376C116.115%2023.4097%20118.5%2024.9773%20121.34%2024.9773C124.203%2024.9773%20126.61%2023.3867%20126.61%2020.0691V13.2297H123.862V19.8866ZM136.925%2021.0196L135.206%2018.6148L137.335%2015.7139L139.158%2013.2297H136.182L133.705%2016.6606L131.206%2013.2297H128.253L129.947%2015.5462L132.206%2018.6372L129.838%2021.9356L127.867%2024.6816H130.797L133.704%2020.6368L136.613%2024.6816H139.544L136.925%2021.0196Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_586'%3e%3crect%20width='139.541'%20height='32'%20fill='white'%20transform='translate(0.00384521%200.933594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Pc="/assets/2-lv1xptCk.svg",Ch="/assets/3-xYBlE7jA.svg",Th="data:image/svg+xml,%3csvg%20width='77'%20height='36'%20viewBox='0%200%2077%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M67.1338%2020.3456H71.0883V24.0242C70.3626%2024.3009%2068.9382%2024.5778%2067.5878%2024.5778C63.2137%2024.5778%2061.7591%2022.3574%2061.7591%2017.8483C61.7591%2013.5451%2063.1439%2011.0128%2067.5138%2011.0128C69.9492%2011.0128%2071.3309%2011.7769%2072.4762%2013.2341L75.4978%2010.4581C73.6527%207.82715%2070.4323%207.02979%2067.4087%207.02979C60.6107%207.02708%2057.0362%2010.7351%2057.0362%2017.8125C57.0362%2024.8547%2060.266%2028.6723%2067.3723%2028.6723C70.6355%2028.6723%2073.8247%2027.8417%2075.5614%2026.6244V16.4251H67.1339L67.1338%2020.3456ZM46.3909%2024.2661H56.4545V28.36H41.5343V7.33832H46.3913L46.3909%2024.2661Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4968%2029.43C35.8453%2023.0815%2035.8449%2012.7878%2029.4961%206.44074C23.1474%200.0925049%2012.854%200.0917411%206.50687%206.44012C0.158384%2012.7885%200.158766%2023.0823%206.5075%2029.4294C12.8561%2035.7781%2023.1497%2035.7783%2029.4968%2029.43Z'%20fill='%23242424'/%3e%3cpath%20d='M13.0698%2014.7643C13.4404%2014.7625%2013.8023%2014.6509%2014.1096%2014.4436C14.4169%2014.2364%2014.6559%2013.9428%2014.7965%2013.5998C14.9372%2013.2568%2014.973%2012.8798%2014.8996%2012.5165C14.8261%2012.1531%2014.6467%2011.8197%2014.384%2011.5583C14.1212%2011.2968%2013.7868%2011.119%2013.4232%2011.0474C13.0596%2010.9757%2012.6828%2011.0134%2012.3405%2011.1556C11.9982%2011.298%2011.7057%2011.5384%2011.4999%2011.8468C11.2942%2012.1551%2011.1845%2012.5174%2011.1845%2012.8881C11.185%2013.1351%2011.2342%2013.3796%2011.3293%2013.6075C11.4245%2013.8355%2011.5635%2014.0425%2011.7385%2014.2167C11.9136%2014.3909%2012.1213%2014.5289%2012.3497%2014.6229C12.5781%2014.7169%2012.8228%2014.7649%2013.0698%2014.7643ZM30.2643%2018.4501H21.9973V17.2255H31.4759C31.4889%2017.4627%2031.4953%2017.6998%2031.4953%2017.9398C31.4953%2025.3134%2025.4857%2031.2907%2018.0744%2031.2907C10.6628%2031.2907%204.65222%2025.3171%204.65222%2017.9398C4.65222%2010.5631%2010.6609%204.58887%2018.0731%204.58887C18.2688%204.58887%2018.4635%204.59282%2018.6572%204.60084V5.81624C18.4635%205.8076%2018.2694%205.80333%2018.0749%205.80333C11.3382%205.80333%205.87505%2011.2371%205.87505%2017.9385C5.87505%2024.6401%2011.3375%2030.0749%2018.0749%2030.0749C24.6272%2030.0749%2029.98%2024.9337%2030.2633%2018.4842L30.2643%2018.4501ZM21.9785%2023.5518H18.6561V11.0698H17.4278V24.7847H18.659V24.7765H21.9813L21.9785%2023.5518Z'%20fill='white'/%3e%3c/svg%3e",Eh="/assets/5-DtA_MHfM.svg",Mh="/assets/6-BYfTVs51.svg",Ah="/assets/7-DtKFqDn5.svg",jh="/assets/8-C9mdpuht.svg",Lh="/assets/9-1he0Czj8.svg",Oh="data:image/svg+xml,%3csvg%20width='191'%20height='24'%20viewBox='0%200%20191%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_699)'%3e%3cmask%20id='mask0_277_699'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='190'%20height='56'%3e%3cpath%20d='M0.970825%2055.6831H189.922V0.547134H0.970825V55.6831Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_277_699)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.577%2023.4158H132.473L121.526%200.547155L110.577%2023.4158ZM188.424%2021.6962C188.63%2021.6962%20188.752%2021.5893%20188.752%2021.4207C188.752%2021.2342%20188.63%2021.1372%20188.424%2021.1372H188.012V21.6962H188.424ZM187.698%2020.8347H188.438C188.656%2020.8347%20188.827%2020.9045%20188.941%2021.0255C189.027%2021.1134%20189.076%2021.2395%20189.076%2021.3932C189.076%2021.6871%20188.92%2021.8643%20188.692%2021.9332L189.138%2022.6008H188.761L188.359%2021.9899H188.012V22.6008H187.698V20.8347ZM189.754%2021.7662C189.754%2020.9234%20189.146%2020.2473%20188.342%2020.2473C187.531%2020.2473%20186.917%2020.9317%20186.917%2021.7662C186.917%2022.6098%20187.526%2023.2846%20188.332%2023.2846C189.142%2023.2846%20189.754%2022.6008%20189.754%2021.7662ZM186.751%2021.775C186.751%2020.8478%20187.452%2020.0793%20188.342%2020.0793C189.23%2020.0793%20189.921%2020.8385%20189.921%2021.7569C189.921%2022.6846%20189.22%2023.4526%20188.332%2023.4526C187.444%2023.4526%20186.751%2022.6932%20186.751%2021.775ZM151.36%2012.3135V4.9244H156.648C159.337%204.9244%20160.934%206.2121%20160.934%208.57187C160.934%2010.867%20159.277%2012.3135%20156.679%2012.3135H151.36ZM159.692%2015.0823C162.586%2014.2016%20164.626%2012.0321%20164.626%208.41529C164.626%206.43127%20164.004%204.79723%20162.913%203.6014C161.582%202.21991%20159.542%201.40306%20156.945%201.40306H147.725V23.4158H151.36V15.7434H155.851L160.99%2023.4158H165.277L159.692%2015.0823ZM105.299%2012.4711C105.299%2016.7781%20102.461%2019.8896%2098.1221%2019.8896H94.0439V4.9244H98.1221C102.461%204.9244%20105.299%208.1%20105.299%2012.4075V12.4711ZM98.1221%201.40306H90.4052V23.4158H98.1221C104.62%2023.4158%20109.115%2018.604%20109.115%2012.4075C109.115%206.14909%20104.62%201.40306%2098.1221%201.40306ZM79.4093%2012.3915V23.4158H83.0453V1.40306H79.4093V12.3915ZM44.2722%2012.0246V23.4158H47.9065V1.40306H44.2722V12.0246ZM25.0175%2012.3135V4.9244H30.3084C32.996%204.9244%2034.5916%206.2121%2034.5916%208.57187C34.5916%2010.867%2032.9373%2012.3135%2030.3371%2012.3135H25.0175ZM33.351%2015.0823C36.2451%2014.2016%2038.2857%2012.0321%2038.2857%208.41529C38.2857%206.43127%2037.6644%204.79723%2036.5719%203.6014C35.2423%202.21991%2033.2018%201.40306%2030.6049%201.40306H21.3849V23.4158H25.0175V15.7434H29.5103L34.6509%2023.4158H38.9361L33.351%2015.0823ZM0.969482%2023.4158H4.60254V14.4522H16.359V10.9338H4.60254V4.9244H16.3646V1.40306H0.969482V23.4158ZM174.298%2019.9561V14.0421H185.997V10.5833H174.298V4.85948H185.997V1.40306H170.664V23.4158H186.002V19.9561H174.298ZM64.0979%2014.1057H69.3824V18.2267C68.1161%2019.2327%2066.3419%2019.8914%2064.3926%2019.8914C60.1678%2019.8914%2057.3605%2016.5598%2057.3605%2012.0321C57.3605%207.7529%2060.2547%204.20078%2064.0658%204.20078C66.697%204.20078%2068.2605%205.11279%2069.8567%206.55844L72.1616%203.63164C70.0378%201.71514%2067.8157%200.646822%2064.215%200.646822C57.9797%200.646822%2053.5473%205.86821%2053.5473%2012.0321C53.5473%2018.508%2057.8041%2023.4158%2064.2719%2023.4158C67.9364%2023.4158%2070.8605%2021.8424%2072.901%2019.9855V10.7377H64.0979V14.1057ZM136.715%2012.3915V23.4158H140.35V1.40306H136.715V12.3915Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M116.09%2019.8828L121.504%208.2977L126.96%2019.8828H116.09Z'%20fill='%23ED114C'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_699'%3e%3crect%20width='190'%20height='24'%20fill='white'%20transform='translate(0.446045)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Rh="data:image/svg+xml,%3csvg%20width='197'%20height='18'%20viewBox='0%200%20197%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2176%206.82621L22.529%201.22314H16.5098L12.2064%206.67151C11.7989%207.13951%2011.0096%207.47882%2010.4092%207.47882H9.40262V1.22314H1.12445V16.224H9.37546V11.622H10.6836C11.2827%2011.622%2011.5815%2011.7793%2011.9089%2012.3526L14.2236%2016.224H24.1903L19.5608%208.70343C19.1791%208.07942%2018.144%207.55682%2017.0559%207.55682C16.7842%207.55682%2016.5098%207.58412%2017.2176%206.82621Z'%20fill='%23242424'/%3e%3cpath%20d='M26.857%2016.2085H34.6475V7.50488H26.857V16.2085Z'%20fill='%23242424'/%3e%3cpath%20d='M30.8807%206.77201C33.0351%206.62641%2034.7114%205.5539%2034.6258%204.37608C34.5375%203.19957%2032.7213%202.36106%2030.5683%202.50666C28.4138%202.65226%2026.7375%203.72478%2026.8245%204.89999C26.9114%206.0778%2028.7276%206.91501%2030.8807%206.77201Z'%20fill='%23242424'/%3e%3cpath%20d='M37.6958%207.45174H40.3107V4.5332H47.6625V7.45174H50.7135V10.3183H47.7725V12.0382C47.7725%2013.7581%2049.8414%2013.6528%2050.7665%2012.8741V15.322C47.9355%2016.5206%2043.2789%2016.8339%2041.4002%2015.608C40.4194%2014.958%2040.3107%2014.4354%2040.3107%2013.6528V10.3703H37.6958'%20fill='%23242424'/%3e%3cpath%20d='M68.658%207.9481C64.6276%206.01888%2059.1396%206.35818%2056.4323%207.7661C52.0881%2010.0203%2052.1547%2013.6994%2056.3766%2015.7911C59.4262%2017.3043%2066.6693%2016.8857%2068.6309%2015.1658V12.7439C65.7456%2014.1505%2063.7378%2013.9464%2062.5316%2013.5512C60.6529%2012.9376%2060.6081%2010.3999%2063.0206%209.95402C64.5719%209.66802%2066.5348%209.69402%2068.658%2010.7626'%20fill='%23242424'/%3e%3cpath%20d='M71.2731%202.47656V16.2099H78.5976V11.9862C78.7063%209.32764%2082.1934%209.82295%2082.1934%2011.7795V16.2099H89.4894V10.7902C89.4894%208.23433%2084.6983%205.3678%2078.6533%208.28503L78.7606%202.47656'%20fill='%23242424'/%3e%3cpath%20d='M113.071%207.47901V16.2086H120.915V11.5182C120.915%209.90094%20124.454%209.12093%20124.454%2011.5702V16.1566H131.372V10.8408C131.372%208.34742%20127.651%205.12858%20120.915%208.44362V7.47901'%20fill='%23242424'/%3e%3cpath%20d='M159.285%2016.1994H167.072V7.49707H159.285V16.1994Z'%20fill='%23242424'/%3e%3cpath%20d='M163.31%206.76292C165.463%206.61862%20167.138%205.54741%20167.052%204.36699C166.967%203.19048%20165.149%202.35327%20162.995%202.49887C160.841%202.64317%20159.167%203.71569%20159.253%204.8922C159.338%206.07131%20161.154%206.90852%20163.31%206.76292Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M192.259%205.01547V4.03396H192.943C193.291%204.03396%20193.663%204.10806%20193.663%204.49937C193.663%204.98557%20193.284%205.01547%20192.861%205.01547H192.259ZM192.867%207.95871C194.431%207.95871%20195.768%206.79519%20195.768%205.20527C195.768%203.62836%20194.431%202.46484%20192.867%202.46484C191.286%202.46484%20189.952%203.62836%20189.952%205.20527C189.952%206.79519%20191.286%207.95871%20192.867%207.95871ZM190.528%205.20527C190.528%203.90396%20191.554%202.92245%20192.867%202.92245C194.166%202.92245%20195.192%203.90396%20195.192%205.20527C195.192%206.52739%20194.166%207.5011%20192.867%207.5011C191.554%207.5011%20190.528%206.52739%20190.528%205.20527ZM192.259%205.42238H192.836L193.711%206.79519H194.272L193.329%205.40158C193.815%205.34308%20194.188%205.09477%20194.188%204.52927C194.188%203.90396%20193.802%203.62836%20193.018%203.62836H191.759V6.79519H192.259'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.473%2010.6355H103.389C103.436%209.74884%20102.65%209.30554%20101.815%209.30554C101.119%209.30554%20100.473%209.88014%20100.473%2010.6355ZM110.405%2012.8741C105.449%2012.5088%20100.165%2012.8208%20100.165%2012.8208C101.689%2015.218%20107.9%2014.854%20109.967%2013.2901L109.75%2015.322C105.611%2017.6685%2092.9763%2017.5645%2092.7576%2012.0915C92.5647%207.25931%20100.056%206.56641%20101.689%206.56641C105.555%206.56641%20111.22%208.28633%20110.405%2012.8741Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.468%2010.2156L142.754%206.14911L144.606%2010.2156H140.468ZM133.088%2016.1709H137.335L139.161%2012.8221H145.805L147.386%2016.1709H157.459L149.617%201.25195H139.594C140.577%201.61726%20140.848%202.24126%20140.577%202.76127'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.031%2010.6563C179.721%209.72548%20177.203%209.95819%20177.203%2011.448C177.203%2013.5878%20180.193%2013.2147%20181.031%2012.5634V10.6563ZM188.395%202.5V16.1567H181.044V15.218C177.395%2017.9286%20169.223%2016.4687%20169.223%2012.0915C169.223%206.72115%20178.1%205.99314%20181.095%207.86906V2.5'%20fill='%23242424'/%3e%3c/svg%3e",Dh="data:image/svg+xml,%3csvg%20width='197'%20height='26'%20viewBox='0%200%20197%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M193.375%207.13851V7.56954H192.736V9.81922H192.298V7.56954H191.672V7.13851H193.375ZM193.824%207.02196C193.837%207.03955%20193.86%207.07913%20193.903%207.13851C193.943%207.20008%20193.994%207.27265%20194.054%207.35842C194.115%207.44638%20194.181%207.54314%20194.256%207.6465C194.33%207.75206%20194.407%207.85982%20194.484%207.96757C194.56%208.07753%20194.635%208.18308%20194.709%208.28864C194.784%208.39419%20194.85%208.48876%20194.909%208.57453C194.969%208.6603%20195.02%208.73286%20195.06%208.79004C195.101%208.84722%20195.126%208.8846%20195.137%208.89779C195.141%208.8912%20195.165%208.85821%20195.201%208.80543C195.237%208.75046%20195.286%208.68008%20195.344%208.59652C195.403%208.51295%20195.469%208.41839%20195.541%208.31063C195.616%208.20508%20195.693%208.09511%20195.769%207.98516C195.848%207.8752%20195.925%207.76525%20195.999%207.65749C196.074%207.54974%20196.142%207.45078%20196.206%207.36282C196.267%207.27486%20196.32%207.20008%20196.365%207.13851L196.446%207.01976V9.81922H195.98V8.45138C195.98%208.43159%20195.984%208.41179%20195.988%208.3898C195.993%208.36781%20195.995%208.35462%20195.995%208.35022L195.137%209.6257C195.124%209.6125%20195.097%209.57072%20195.052%209.50475C195.005%209.43878%20194.95%209.35961%20194.884%209.26944C194.822%209.17928%20194.754%209.08032%20194.684%208.97696C194.611%208.8736%20194.545%208.77684%20194.484%208.68667C194.42%208.59651%20194.367%208.52175%20194.322%208.45797C194.279%208.3964%20194.254%208.35901%20194.252%208.34802C194.252%208.35241%20194.252%208.36561%20194.258%208.3876C194.262%208.40959%20194.264%208.43159%20194.264%208.44918V9.81702H193.826V7.01756L193.824%207.02196ZM186.838%2013.87L183.252%2017.4633L179.74%2013.848V20.2804H176.92V7.09892H177.542L183.256%2012.8584L189.056%207.09892H189.659V20.2804H186.838V13.8678V13.87ZM58.3087%2013.87L54.7245%2017.4633L51.2126%2013.848V20.2804H48.3925V7.09892H49.014L54.7287%2012.8584L60.5286%207.09892H61.1288V20.2804H58.3087V13.8678V13.87ZM67.1671%2013.793C67.1671%2010.0721%2069.6999%207.02196%2073.8673%207.02196C78.0347%207.02196%2080.6101%2010.0721%2080.6101%2013.793C80.6101%2017.5139%2078.0773%2020.5641%2073.8673%2020.5641C69.6573%2020.5641%2067.1671%2017.5139%2067.1671%2013.793ZM77.4664%2013.793C77.4664%2011.5433%2075.8957%2010.0501%2073.8652%2010.0501C71.8347%2010.0501%2070.3065%2011.5433%2070.3065%2013.793C70.3065%2016.0427%2071.8772%2017.5359%2073.8652%2017.5359C75.8531%2017.5359%2077.4664%2016.0427%2077.4664%2013.793ZM98.28%2020.2826H97.7841L89.6621%2013.5247V20.2826H86.842V7.10113H87.3379L95.4599%2013.9799V7.12311H98.28V20.2826ZM104.514%2013.793C104.514%2010.0721%20107.049%207.02196%20111.214%207.02196C115.38%207.02196%20117.955%2010.0721%20117.955%2013.793C117.955%2017.5139%20115.422%2020.5641%20111.214%2020.5641C107.006%2020.5641%20104.514%2017.5139%20104.514%2013.793ZM114.816%2013.793C114.816%2011.5433%20113.245%2010.0501%20111.214%2010.0501C109.184%2010.0501%20107.656%2011.5433%20107.656%2013.793C107.656%2016.0427%20109.226%2017.5359%20111.214%2017.5359C113.202%2017.5359%20114.816%2016.0427%20114.816%2013.793ZM130.232%2012.5593H135.97V14.0085C135.97%2017.7954%20133.98%2020.5641%20129.961%2020.5641C125.943%2020.5641%20123.436%2017.5139%20123.436%2013.793C123.436%2010.0721%20125.775%207.02196%20129.961%207.02196C133.29%207.02196%20134.584%208.82742%20134.584%208.82742L132.843%2011.1277C132.843%2011.1277%20131.7%2010.0281%20129.921%2010.0281C127.89%2010.0281%20126.383%2011.5433%20126.383%2013.793C126.383%2016.0427%20127.89%2017.5579%20129.921%2017.5579C131.721%2017.5579%20132.664%2016.4319%20132.705%2015.1565V15.0267H130.234V12.5615L130.232%2012.5593ZM142.131%207.12311H147.861C151.043%207.12311%20152.805%208.99015%20152.805%2011.8226C152.805%2013.6391%20152.009%2014.9366%20150.711%2015.6952L150.577%2015.781L153.538%2020.0649V20.2804H150.277L147.806%2016.4935H144.896V20.2804H142.055L142.127%207.12091L142.131%207.12311ZM147.661%2010.0061H144.898V13.8986H147.682C149.085%2013.8986%20149.86%2013.2498%20149.86%2011.9524C149.86%2010.6549%20149.064%2010.0061%20147.661%2010.0061ZM164.552%207.10113H165.054L171.65%2020.2826H168.215L167.413%2018.5761H162.155L161.391%2020.2826H157.979L164.554%207.10113H164.552ZM164.782%2012.6143L163.056%2016.3704H166.491L164.782%2012.6143ZM4.175%200.635742L1.20588%207.51456H7.11645L14.1721%2023.8891L18.2267%2014.4791L12.2608%200.637943H4.17287L4.175%200.635742ZM25.2355%200.686331L21.1937%2010.0589L27.7896%2025.3647H35.8796L25.2355%200.686331ZM4.14094%2016.7948L0.446045%2025.3647H7.83585L4.14094%2016.7948Z'%20fill='%23242424'/%3e%3c/svg%3e",Hh="/assets/13-_M_Krupi.svg",Vh="data:image/svg+xml,%3csvg%20width='121'%20height='22'%20viewBox='0%200%20121%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M107.367%209.97166V12.1049H110.751V9.97166C110.751%209.05838%20109.987%208.29571%20109.073%208.29571C108.128%208.29571%20107.367%209.05838%20107.367%209.97166ZM116.359%206.95413C111.755%204.66888%20106.94%204.51551%20102.215%206.5272C98.3145%208.17275%2096.4866%2012.6852%2098.1612%2016.587C99.015%2018.5987%20100.446%2019.9997%20102.49%2020.7624C107.154%2022.5295%20111.755%2022.4079%20116.297%2020.3354C118.278%2019.4512%20119.651%2017.988%20120.382%2015.9459H114.408C113.737%2018.0806%20111.451%2019.2978%20109.289%2018.6291C109.105%2018.5683%20108.95%2018.5061%20108.739%2018.4149C107.884%2018.0184%20107.367%2017.1963%20107.367%2016.2513V14.7273H120.534C120.929%2011.4652%20119.314%208.44631%20116.359%206.95413ZM69.6909%209.97166C69.6909%209.05838%2068.9614%208.29571%2068.0177%208.29571C67.1017%208.29571%2066.3418%209.05838%2066.3418%209.97166V12.1049H69.6909V9.97166ZM79.4771%2014.7273C79.8736%2011.4652%2078.2571%208.44631%2075.3018%206.95413C70.7285%204.66888%2065.883%204.51551%2061.1592%206.5272C57.256%208.17275%2055.4599%2012.6852%2057.1026%2016.587C57.9565%2018.5987%2059.4197%2019.9997%2061.4618%2020.7624C66.0958%2022.5295%2070.7285%2022.4079%2075.2714%2020.3354C77.2209%2019.4512%2078.5942%2017.988%2079.3251%2015.9459H73.3495C72.7098%2018.0806%2070.4245%2019.2978%2068.2581%2018.6291C68.0771%2018.5683%2067.8933%2018.5061%2067.7123%2018.4149C66.8571%2018.0184%2066.3418%2017.1963%2066.3418%2016.2513V14.7273H79.4771ZM82.8884%2017.8968V4.21155H80.5133V0.85828H94.1696V17.8968H96.5764V21.2501H80.5133V17.8968H82.8884ZM46.2829%205.52136L51.1919%202.96115L49.6362%200.00441933L44.7286%202.53422L46.2829%205.52136ZM53.1428%2017.8968V5.91789H39.9439V9.27116H42.3494V17.8968H39.9439V21.2501H55.5483V17.8968H53.1428ZM20.0081%208.81383L25.771%200.85828H37.7803V4.21155H35.372V17.8968H37.7803V21.2501H22.1731V17.8968H24.5814V9.02661L15.7112%2021.2501L6.81057%209.02661V17.8968H9.21878V21.2501H0.59314V17.8968H2.96958V4.21155H0.59314V0.85828H14.2176L20.0081%208.81383Z'%20fill='%23242424'/%3e%3c/svg%3e",kh="/assets/15-VL89vzXY.svg",zh="/assets/16-D9KRuHZe.svg",Ph="/assets/17-BRD6G3-l.svg",Nh="/assets/18-D69HL7ID.svg",Bh="/assets/19-Dos04ydj.svg",$h="/assets/21-BwEZSGFZ.svg",_h="/assets/22-CQ_f5juP.svg",Uh="data:image/svg+xml,%3csvg%20width='160'%20height='26'%20viewBox='0%200%20160%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.01%2019.347L131.698%201.45459H137.34V24.006H129.228L123.598%205.49849H123.477L123.789%2024.006H118.183V1.45459H126.647L131.884%2019.347H132.01Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4529%203.56613L26.3316%2024.2433H20.1786L24.4041%201.45459H34.5405L38.7466%2024.2433H32.6178L29.5813%203.56613H29.4529Z'%20fill='%23242424'/%3e%3cpath%20d='M53.0771%2024.2433L49.2656%203.75501H49.1421L48.9993%2024.2433H43.2918L43.7955%201.45459H53.094L55.9078%2018.8748H56.0289L58.8451%201.45459H68.1388L68.6328%2024.2433H62.9374L62.7873%203.75501H62.6686L58.8596%2024.2433H53.0771Z'%20fill='%23242424'/%3e%3cpath%20d='M10.5821%2017.8141C10.8048%2018.3662%2010.737%2019.0757%2010.6329%2019.5043C10.4416%2020.2622%209.92826%2021.0347%208.4124%2021.0347C6.98372%2021.0347%206.11683%2020.2162%206.11683%2018.9643V16.7583H0.00497197L0.00012207%2018.5236C0.00012207%2023.6039%204.00044%2025.1367%208.28648%2025.1367C12.4079%2025.1367%2015.8028%2023.7274%2016.3428%2019.9305C16.6188%2017.9618%2016.413%2016.6736%2016.3186%2016.1869C15.3572%2011.4165%206.70767%209.99269%206.06355%207.3242C5.95458%206.86654%205.98606%206.38224%206.03933%206.12314C6.19673%205.39669%206.69556%204.59517%208.12182%204.59517C9.45364%204.59517%2010.2406%205.41848%2010.2406%206.66313C10.2406%207.08205%2010.2406%208.07002%2010.2406%208.07002H15.9239V6.46941C15.9239%201.50535%2011.4683%200.730469%208.24047%200.730469C4.18689%200.730469%200.874285%202.06956%200.268911%205.77929C0.10425%206.80358%200.0800345%207.71648%200.319761%208.85943C1.315%2013.516%209.41006%2014.8647%2010.5821%2017.8141Z'%20fill='%23242424'/%3e%3cpath%20d='M84.685%2017.773C84.9102%2018.3203%2084.8375%2019.0104%2084.7358%2019.439C84.5494%2020.1945%2084.0408%2020.9549%2082.5347%2020.9549C81.1254%2020.9549%2080.2657%2020.1364%2080.2657%2018.9135L80.2609%2016.7269H74.212L74.2047%2018.468C74.2047%2023.4974%2078.1687%2025.0157%2082.4112%2025.0157C86.489%2025.0157%2089.8524%2023.6258%2090.3827%2019.8628C90.6588%2017.9086%2090.4626%2016.6373%2090.3633%2016.1603C89.4069%2011.4335%2080.8444%2010.0242%2080.2076%207.38237C80.0986%206.92713%2080.1301%206.44768%2080.1858%206.20311C80.348%205.47181%2080.8372%204.68967%2082.2489%204.68967C83.5686%204.68967%2084.3387%205.49361%2084.3387%206.72857C84.3387%207.14265%2084.3387%208.12093%2084.3387%208.12093H89.9783V6.53727C89.9783%201.62648%2085.5591%200.856445%2082.3627%200.856445C78.3552%200.856445%2075.0692%202.17858%2074.4759%205.86168C74.3113%206.87144%2074.2943%207.76739%2074.5292%208.90549C75.5099%2013.5136%2083.5251%2014.8527%2084.685%2017.773Z'%20fill='%23242424'/%3e%3cpath%20d='M103.827%2020.8337C105.408%2020.8337%20105.902%2019.7392%20106.011%2019.1799C106.057%2018.9329%20106.069%2018.6035%20106.064%2018.3081V1.44482H111.827V17.7923C111.839%2018.2113%20111.798%2019.0733%20111.779%2019.2888C111.374%2023.5434%20108.011%2024.9236%20103.824%2024.9236C99.6326%2024.9236%2096.2667%2023.5434%2095.8671%2019.2888C95.8478%2019.0733%2095.8066%2018.2113%2095.8187%2017.7923V1.44482H101.577V18.3081C101.577%2018.6035%20101.587%2018.9353%20101.63%2019.1799C101.754%2019.7392%20102.233%2020.8337%20103.827%2020.8337Z'%20fill='%23242424'/%3e%3cpath%20d='M151.365%2020.5938C153.017%2020.5938%20153.593%2019.5502%20153.7%2018.9424C153.741%2018.6809%20153.753%2018.3636%20153.751%2018.0755V14.7677H151.411V11.4406H159.492V17.5573C159.487%2017.9835%20159.477%2018.2983%20159.41%2019.0586C159.029%2023.2042%20155.433%2024.6837%20151.394%2024.6837C147.348%2024.6837%20143.757%2023.2042%20143.372%2019.0586C143.307%2018.2983%20143.297%2017.9835%20143.29%2017.5573L143.295%207.96089C143.295%207.5565%20143.345%206.83974%20143.389%206.45957C143.895%202.20016%20147.348%200.82959%20151.394%200.82959C155.436%200.82959%20158.974%202.19289%20159.393%206.45957C159.468%207.18601%20159.443%207.96089%20159.443%207.96089V8.72124H153.697V7.44511C153.702%207.44754%20153.69%206.9027%20153.622%206.57822C153.525%206.07455%20153.087%204.91707%20151.351%204.91707C149.69%204.91707%20149.203%206.01159%20149.082%206.57822C149.012%206.87848%20148.985%207.2853%20148.985%207.65336V18.0755C148.98%2018.3636%20148.997%2018.6809%20149.043%2018.9424C149.142%2019.5526%20149.716%2020.5938%20151.365%2020.5938Z'%20fill='%23242424'/%3e%3c/svg%3e",Ih="/assets/24-Dmws8xhr.svg",Gh="/assets/25-BaRLqQy_.svg",qh="/assets/26-B2H6SqHt.svg",Yh="/assets/27-DBraEacE.svg",Fh="data:image/svg+xml,%3csvg%20width='112'%20height='33'%20viewBox='0%200%20112%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_720)'%3e%3cpath%20d='M77.422%2013.2852C76.096%2013.3501%2073.7527%2014.0702%2073.2182%2016.3711L71.3498%2027.2529C70.9268%2029.6026%2072.0997%2032.2635%2074.6194%2032.2878H88.6321C90.433%2032.2608%2092.5012%2031.6842%2092.9916%2028.8771L95.0157%2017.508C95.3946%2015.2206%2093.8791%2013.3501%2091.7461%2013.2852H77.422Z'%20fill='%23242424'/%3e%3cpath%20d='M79.1346%2018.6451C78.1641%2018.5991%2077.8891%2018.9591%2077.7334%2019.4572L76.6435%2025.3041C76.5786%2026.1487%2077.0613%2027.0122%2077.8891%2027.0907H86.7638C87.6071%2027.0122%2088.2974%2026.4383%2088.4765%2025.629L89.4106%2020.2692C89.6753%2019.3191%2089.1927%2018.6018%2088.3208%2018.6451H79.1346Z'%20fill='white'/%3e%3cpath%20d='M70.5738%2018.6455H57.8067C56.8673%2018.5995%2056.5896%2018.9595%2056.4054%2019.4576L55.4712%2025.3046C55.2818%2026.1491%2055.7644%2027.0126%2056.7168%2027.0911H69.0168L68.0826%2032.2885H53.2915C50.8029%2032.2614%2049.63%2029.6005%2050.0218%2027.2536L52.0459%2016.3717C52.4559%2014.0681%2054.7991%2013.3507%2056.094%2013.2858H71.508L70.5738%2018.6455ZM43.48%2018.6455H31.0242L31.9584%2013.2858H45.9711C48.5245%2013.3507%2049.6949%2016.0117%2049.2407%2018.3207L47.3724%2029.2025C46.8716%2031.544%2044.5283%2032.2614%2043.1686%2032.2885H29.9344C27.3628%2032.2614%2026.1924%2029.6005%2026.6647%2027.2536L27.2875%2023.1932C27.778%2020.83%2030.1212%2020.11%2031.4913%2020.1072H43.1686C44.0457%2020.11%2044.7359%2018.6022%2043.48%2018.6455ZM25.7305%2018.6455H28.5331L29.4673%2013.2858H26.6647L28.8445%200.29248H23.8622L21.6824%2013.2858H7.51402C6.13351%2013.3507%203.79028%2014.0708%203.31021%2016.3717L1.44185%2027.2536C0.964382%2029.6032%202.1347%2032.2641%204.71148%2032.2885H20.9039C22.0561%2032.2614%2023.5015%2031.184%2023.7065%2029.5274L25.7305%2018.6455Z'%20fill='%23242424'/%3e%3cpath%20d='M7.98386%2027.0908C7.10158%2027.0123%206.61892%2026.1488%206.73829%2025.3042L7.82557%2019.4572C7.92677%2018.9592%208.20184%2018.6018%209.07115%2018.6452H20.7484L19.1914%2027.0908H7.98386Z'%20fill='white'/%3e%3cpath%20d='M103.268%2014.9093L104.513%2013.7724C105.115%2013.3501%20105.803%2013.3501%20106.537%2013.2852H111.052L110.118%2018.6449H105.136C103.875%2018.5989%20102.152%2019.2485%20101.866%2021.0811L99.8423%2032.2878H94.7043L98.1296%2013.2852H102.645L103.268%2014.9093Z'%20fill='%23242424'/%3e%3cpath%20d='M32.4256%2027.0908C31.6368%2027.0123%2031.4993%2025.3583%2032.737%2025.3042H43.013L42.7016%2027.0908H32.4256Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_720'%3e%3crect%20width='109.714'%20height='32'%20fill='white'%20transform='translate(1.33813%200.290039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Zh="/assets/29-yivH26vR.svg",Xh="/assets/30-DGc1459t.svg",Kh="data:image/svg+xml,%3csvg%20width='121'%20height='36'%20viewBox='0%200%20121%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.45829%2023.2381H3.99829L2.66629%2018.1861H9.61429L21.9503%200.810059H31.3103L28.9703%2018.1261L41.9903%2018.1859L42.5663%2018.8819C45.6863%2016.7461%2049.8983%2016.7461%2051.4101%2019.4461C53.4981%2017.1899%2058.1781%2017.0579%2059.7621%2019.9499C60.3621%2021.0657%2060.2661%2022.5421%2059.7621%2024.3181L57.8663%2030.3901C57.9863%2031.0141%2058.6823%2032.4061%2056.9783%2032.4061H50.3423L52.4903%2025.7101C53.0543%2023.7419%2050.6543%2023.7419%2050.0903%2025.6499L48.0023%2032.3462H41.1743L43.2623%2025.5181C43.8863%2023.5621%2041.3543%2023.5621%2040.8503%2025.5779L38.7623%2032.2859H31.6223L33.8303%2025.1339C33.9623%2024.6301%2033.9023%2024.1859%2032.9543%2024.1859H28.1423L27.0743%2032.2501L16.7663%2032.2859L18.1583%2024.1859H12.1463L4.87429%2035.1897L0.446289%2031.7101L6.45829%2023.2381ZM16.0103%2018.1741L19.2023%2018.2102L20.3063%2011.8022L16.0103%2018.1741ZM107.222%2032.5262C105.578%2033.0301%20102.794%2033.3541%20101.222%2031.9621C99.6383%2030.5701%2099.5785%2027.1499%20100.526%2024.6899C101.786%2021.3419%20104.066%2018.2459%20107.474%2017.7421C109.694%2017.4301%20112.406%2018.3061%20113.99%2019.6981L114.302%2018.6899H120.446L116.642%2030.9539C116.894%2031.5779%20117.47%2032.4659%20116.138%2032.4659H109.694L110.042%2031.2661C109.214%2031.7342%20108.242%2032.2739%20107.222%2032.5262ZM107.042%2026.6821C107.198%2026.9341%20107.582%2027.2579%20108.278%2027.0059C109.514%2026.5859%20111.662%2024.5701%20112.01%2023.1419C111.122%2021.8817%20109.862%2021.5937%20108.53%2022.7341C107.774%2023.3941%20106.514%2025.7701%20107.042%2026.6821ZM62.1505%2031.9621C60.5665%2030.5701%2060.5063%2027.2222%2061.4545%2024.6899C62.6543%2021.3419%2064.9941%2018.2459%2068.4145%2017.7541C70.6225%2017.4421%2073.3465%2018.3061%2074.9305%2019.6981L75.2423%2018.6899H81.3745L77.5825%2030.9539C77.8345%2031.5899%2078.3985%2032.4659%2077.0786%2032.4659H70.6226L70.9706%2031.3379C70.1546%2031.8061%2069.1346%2032.2859%2068.1626%2032.5377C66.5183%2032.9819%2063.7345%2033.3541%2062.1505%2031.9621ZM68.2465%2026.6821C68.3783%2026.9702%2068.8223%2027.2579%2069.4825%2027.0059C70.7185%2026.5619%2072.8663%2024.5701%2073.2143%2023.1419C72.3263%2021.8817%2071.0903%2021.5339%2069.7345%2022.7341C69.0385%2023.3699%2067.8025%2025.6741%2068.2465%2026.6821ZM86.6181%2032.3342L88.7063%2025.6382C89.2821%2023.7421%2091.5503%2023.6822%2090.9863%2025.6382L89.0901%2032.4061H95.5943C97.3101%2032.4061%2096.6141%2031.0141%2096.4823%2030.3781L98.3781%2024.3061C98.882%2022.5421%2098.9181%2021.4021%2098.2583%2020.2019C96.77%2017.5499%2092.4981%2017.4659%2090.0383%2019.6261L89.5943%2018.7501H83.966L79.7901%2032.3341H86.6181V32.3342Z'%20fill='%23242424'/%3e%3c/svg%3e",RR=[{id:1,imageUrl:Sh},{id:2,imageUrl:Pc},{id:3,imageUrl:Ch},{id:4,imageUrl:Th},{id:5,imageUrl:Eh},{id:6,imageUrl:Mh},{id:7,imageUrl:Ah},{id:8,imageUrl:jh},{id:9,imageUrl:Lh},{id:10,imageUrl:Oh},{id:11,imageUrl:Rh},{id:12,imageUrl:Dh},{id:13,imageUrl:Hh},{id:14,imageUrl:Vh},{id:15,imageUrl:kh},{id:16,imageUrl:zh},{id:17,imageUrl:Ph},{id:18,imageUrl:Nh},{id:19,imageUrl:Bh},{id:20,imageUrl:Pc},{id:21,imageUrl:$h},{id:22,imageUrl:_h},{id:23,imageUrl:Uh},{id:24,imageUrl:Ih},{id:25,imageUrl:Gh},{id:26,imageUrl:qh},{id:27,imageUrl:Yh},{id:28,imageUrl:Fh},{id:29,imageUrl:Zh},{id:30,imageUrl:Xh},{id:31,imageUrl:Kh}],DR=E.div`
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
`,HR=E.img`
  height: 32px;
  max-width: min-content;
  /* width: auto; */
  object-fit: contain;
  filter: brightness(1) invert(1);
  transition: all 0.3s ease;
  overflow: visible;
`,VR=E(Xt)`
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
`,kR=()=>x.jsx(DR,{children:x.jsx(VR,{direction:"vertical",slidesPerView:10,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:4e3,modules:[dn],grabCursor:!1,allowTouchMove:!1,children:RR.map(t=>x.jsx(Kt,{children:x.jsx(HR,{src:t.imageUrl,alt:`Partner ${t.id}`,onError:e=>{e.target.style.display="none"}})},t.id))})}),zR=()=>{const t=_e({query:"(min-width: 1440px)"});return x.jsxs(Lj,{children:[x.jsx(Oj,{src:OR,alt:"Hero Image"}),t&&x.jsx(kR,{}),x.jsxs(Rj,{children:[x.jsxs(Dj,{children:[x.jsx(Hj,{children:"Your Local Appliance Repair & Maintenance Specialists"}),x.jsx(Vj,{children:"We provide reliable appliance repair services, so your fridge, oven, or washer works like new — and you can get back to your day."})]}),x.jsxs(kj,{children:[x.jsx(ev,{to:"/contact#ap",children:"Contact Us"}),x.jsx(h6,{children:x.jsx("a",{href:"tel:+18055002705",children:" Call Us"})})]})]})]})},PR="/assets/News%20Article%202%20Image%20Container-Dg9jwMew.png",NR="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",BR="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",$R="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",Mx=[{img:PR,title:"APPLIANCE INSTALLATION SERVICES",description:"Professional installation for appliances, ensuring safety."},{img:NR,title:"WHEN YOUR REFRIGERATOR STOPS COOLING: URGENT REPAIR SIGNS",description:"Don't wait for food to spoil. Know the signs needing urgent help."},{img:BR,title:"WASHING MACHINE TROUBLESHOOTING",description:"Quick solutions for common washing machine issues."},{img:$R,title:"DISHWASHER MAINTENANCE TIPS",description:"Keep your dishwasher running smoothly with these tips."}],_R=()=>{const t=R.useRef(null),e=_e({query:"(max-width: 767px)"}),i=_e({query:"(min-width: 768px)"}),r=_e({query:"(min-width: 1440px)"}),o=e?1:2,l=Mx.length>o;return x.jsxs(GR,{children:[x.jsxs(qR,{children:[x.jsx(YR,{children:"NEWS & TIPS"}),x.jsxs(FR,{children:["APPLIANCE ",x.jsx("span",{children:"ADVICE"})," REPAIR ",x.jsx("span",{children:"TIPS"})," BLOG"]})]}),x.jsxs(IR,{children:[x.jsx(Ax,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slidePrev()},bg:"#DBDBD8",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(Ax,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slideNext()},bg:"#3098EE",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),x.jsx(UR,{$isTablet:i,children:x.jsx(Xt,{modules:[rv,dn],onSwiper:u=>t.current=u,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:Mx.map((u,d)=>x.jsx(Kt,{children:x.jsxs(ZR,{$isTablet:i,children:[x.jsx(XR,{src:u.img,alt:u.title,$isTablet:i}),x.jsxs(KR,{children:[x.jsx(WR,{$isTablet:i,children:u.title}),x.jsx(QR,{$isTablet:i,children:u.description})]})]})},d))})})]})},UR=E.div`
  width: 100%;
  padding: 20px 0;
  
  .swiper-slide {
    width: ${t=>t.$isTablet?"50%":"auto"};
  }
`,IR=E.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,Ax=E.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${t=>t.bg};
  border: none;
  cursor: pointer;
`,GR=E.div`
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
`,qR=E.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,YR=E.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);
  
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,FR=E.p`
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
`,ZR=E.div`
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
`,XR=E.img`
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
`,KR=E.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,WR=E.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,QR=E.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,JR=E.div`
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
`;E.p`
  padding: 10px auto 50px auto;
  width: 90%;
  height: 1px; /* Збільшуємо висоту для еліпса */
  margin: 20px auto;
  background: radial-gradient(
      ellipse 118.85px 58.06px at 50% 50%,
      rgb(252, 252, 252) 0%,
      rgba(58, 55, 55, 0.42) 80%
    );
`;E.div`
height : auto;
width: 100%;
padding: 0 auto;
margin: 0 auto;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){

margin-right: 50px;
}
`;const nc=E.img`
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
`,eD=E(vn.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,tD=E(vn.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,nD=E.h3`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 90%;
text-transform: uppercase;
text-align: center;
color: var(--black-500);
`,bv="data:image/svg+xml,%3csvg%20width='212'%20height='14'%20viewBox='0%200%20212%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_572)'%3e%3cpath%20d='M0.00384521%2013.2272V0.640137H8.99637V3.40837H3.33527V5.99308H8.54597V8.76131H3.33527V13.2272H0.00384521Z'%20fill='%23242424'/%3e%3cpath%20d='M18.6412%2013.2272H15.3253V0.640137H18.6412V13.2272Z'%20fill='%23242424'/%3e%3cpath%20d='M25.0556%209.25083C26.3309%2010.122%2027.8304%2010.6204%2029.381%2010.6885C30.3595%2010.6885%2031.2758%2010.4591%2031.2758%209.61789C31.2758%209.02907%2030.8409%208.79966%2030.1964%208.61613L28.2628%208.08083C26.1117%207.44613%2024.9935%206.43671%2024.9935%204.44848C24.9935%202.0473%2027.1368%200.472008%2029.8858%200.472008C31.2634%200.447396%2032.6243%200.771251%2033.8385%201.4126V4.47142C32.6991%203.68452%2031.3471%203.2505%2029.9557%203.22495C28.9617%203.22495%2028.255%203.50789%2028.255%204.20377C28.255%204.71613%2028.6045%204.9226%2029.2723%205.12907L31.2059%205.7026C33.5356%206.42142%2034.5995%207.5073%2034.5995%209.39613C34.5995%2012.1032%2032.1223%2013.4949%2029.3732%2013.4949C27.8643%2013.4989%2026.378%2013.1337%2025.0478%2012.432L25.0556%209.25083Z'%20fill='%23242424'/%3e%3cpath%20d='M52.4525%200.640137V13.2272H49.1211V8.18778H44.2676V13.2272H40.8973V0.640137H44.2676V5.41955H49.1599V0.640137H52.4525Z'%20fill='%23242424'/%3e%3cpath%20d='M68.6747%200.640137V3.40837H62.9049V5.41955H68.2166V8.18778H62.9049V10.4819H68.7136V13.2501H59.5347V0.640137H68.6747Z'%20fill='%23242424'/%3e%3cpath%20d='M75.524%200.640137H80.9599C83.8098%200.640137%2085.9764%202.16955%2085.9764%204.98367C86.0132%205.85467%2085.761%206.71377%2085.2581%207.43116C84.7551%208.14856%2084.0287%208.68525%2083.1886%208.96014L86.5589%2013.2272H82.6761L79.6553%209.33484H78.8244V13.2272H75.524V0.640137ZM78.8554%206.55131H80.7657C81.9694%206.55131%2082.746%205.9319%2082.746%204.96837C82.746%204.00484%2081.9694%203.39308%2080.7657%203.39308H78.8709L78.8554%206.55131Z'%20fill='%23242424'/%3e%3cpath%20d='M106.485%2012.1795C105.502%2013.0123%20104.241%2013.4588%20102.944%2013.4337C100.242%2013.4337%2097.9897%2011.6901%2097.9897%208.84543C98.0077%208.02146%2098.2249%207.21358%2098.6233%206.48878C99.0217%205.76399%2099.5899%205.14316%20100.281%204.67778L99.007%203.14837V0.640137H107.549V3.40837H102.991L106.446%207.7519L107.223%206.56661H110.679L108.217%2010.0537L110.756%2013.2272H107.285L106.485%2012.1795ZM104.738%2010.0537L102.051%206.78837C101.716%207.01078%20101.442%207.31015%20101.251%207.66058C101.06%208.01101%20100.959%208.40194%20100.956%208.79955C100.953%209.05676%20101.003%209.31195%20101.102%209.54974C101.202%209.78752%20101.349%2010.003%20101.536%2010.1831C101.722%2010.3631%20101.944%2010.5042%20102.187%2010.5976C102.431%2010.691%20102.691%2010.7349%20102.952%2010.7266C103.28%2010.737%20103.607%2010.6828%20103.914%2010.5673C104.22%2010.4518%20104.501%2010.2771%20104.738%2010.0537Z'%20fill='%23242424'/%3e%3cpath%20d='M126.264%2013.2272H122.933V0.640137H128.369C131.219%200.640137%20133.385%202.16955%20133.385%204.98367C133.385%207.79778%20131.219%209.33484%20128.369%209.33484H126.264V13.2272ZM126.264%206.56661H128.136C129.347%206.56661%20130.116%205.9472%20130.116%204.98367C130.116%204.02014%20129.339%203.40837%20128.136%203.40837H126.241L126.264%206.56661Z'%20fill='%23242424'/%3e%3cpath%20d='M145.997%2010.9101H140.879L139.963%2013.2043H136.678L141.881%200.640137H145.049L150.252%2013.2272H146.897L145.997%2010.9101ZM141.982%208.1419H144.894L143.442%204.45602L141.982%208.1419Z'%20fill='%23242424'/%3e%3cpath%20d='M157.288%2013.2272V8.34837L152.457%200.640137H156.208L159.058%205.49602L161.908%200.640137H165.449L160.619%208.34837V13.2272H157.288Z'%20fill='%23242424'/%3e%3cpath%20d='M173.487%205.99308L177.571%200.640137H181.454L176.733%206.66602L181.64%2013.2272H177.688L173.487%207.59131V13.2272H170.155V0.640137H173.487V5.99308Z'%20fill='%23242424'/%3e%3cpath%20d='M195.751%200.640137V3.40837H189.934V5.41955H195.246V8.18778H189.934V10.4819H195.751V13.2501H186.603V0.640137H195.751Z'%20fill='%23242424'/%3e%3cpath%20d='M202.6%200.640137H205.931V10.459H211.678V13.2272H202.6V0.640137Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_572'%3e%3crect%20width='212'%20height='13'%20fill='white'%20transform='translate(0.00384521%200.433594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",iD=()=>{const t=_e({query:"(max-width: 743px)"}),e=_e({query:"(min-width: 744px) and (max-width: 1023px)"}),i=_e({query:"(min-width: 1024px)"}),r=[{id:1,imageUrl:Sh},{id:2,imageUrl:Pc},{id:3,imageUrl:Ch},{id:4,imageUrl:Th},{id:5,imageUrl:Eh},{id:6,imageUrl:Mh},{id:7,imageUrl:Ah},{id:8,imageUrl:jh},{id:9,imageUrl:Lh},{id:10,imageUrl:Oh},{id:11,imageUrl:Rh},{id:12,imageUrl:Dh},{id:13,imageUrl:Hh},{id:14,imageUrl:Vh},{id:15,imageUrl:kh},{id:16,imageUrl:zh},{id:17,imageUrl:Ph},{id:18,imageUrl:Nh},{id:19,imageUrl:Bh},{id:20,imageUrl:bv},{id:21,imageUrl:$h},{id:22,imageUrl:_h},{id:23,imageUrl:Uh},{id:24,imageUrl:Ih},{id:25,imageUrl:Gh},{id:26,imageUrl:qh},{id:27,imageUrl:Yh},{id:28,imageUrl:Fh},{id:29,imageUrl:Zh},{id:30,imageUrl:Xh},{id:31,imageUrl:Kh}],o=t?2:e?4:5,l=r.length>o;return x.jsxs("div",{children:[x.jsx(nD,{children:"Quality Service for Major & Luxury Brands"}),x.jsxs(JR,{children:[x.jsx(eD,{}),x.jsx(Xt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[dn],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:r.map(u=>x.jsx(Kt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?x.jsx(nc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):x.jsx(nc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),x.jsx(Xt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[dn],className:"mySwiper",style:{width:"100%"},children:r.map(u=>x.jsx(Kt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?x.jsx(nc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):x.jsx(nc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),x.jsx(tD,{})]})," "]})},Sv="/assets/ServicesImage-BRQYmF9y.png",aD=E.div`
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
`,rD=E.p`
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
`,sD=E.div`
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
`,oD=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,jx=E.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,lD=E.p`
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
`,cD=E.p`
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
`,Lx=E.p`
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
`,uD=E.p`
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
`,dD=E.img`
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
`,Ox=E.div`
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
`,Rx=E.p`
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
`,hp=E.button`
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
`,Dx=E.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${hp}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,fD=E.div`
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
`,pD=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,hD=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,mD=E.p`
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
`,gD=E.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,xD=E.button`
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
`,Wh=E.button`
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
`,Cv=E.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Wh}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,yD=E(Cv)`
  color: #242424;

  ${Wh}:hover & {
    color: white;
  }
`,vD=E.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,wD=()=>{const t=_e({query:"(min-width: 1440px)"});return x.jsxs(aD,{children:[x.jsx(rD,{children:"Our Service"}),x.jsxs(sD,{children:[x.jsxs(oD,{children:[x.jsxs(jx,{children:[x.jsx(lD,{children:"01."}),x.jsx(cD,{children:"Appliance Care & Tune-Ups"})]}),x.jsx(Lx,{children:"Professional Installations"}),x.jsx(Lx,{children:"Fast & Reliable Emergency Repairs"}),t&&x.jsxs(Ox,{children:[x.jsx(Rx,{children:"Do you want to know more about our service?"}),x.jsx(hp,{children:x.jsx(Dx,{children:"Learn more"})})]})]}),x.jsxs(vD,{children:[x.jsx(dD,{src:Sv,alt:"Services Image"}),x.jsxs(fD,{children:[x.jsxs(pD,{children:[x.jsx(jx,{children:x.jsx(uD,{children:"Preventive Care"})}),x.jsx(hD,{children:x.jsx(mD,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})]}),x.jsxs(gD,{children:[x.jsx(xD,{children:x.jsx(Cv,{children:"Contact Us"})}),x.jsx(Wh,{children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(yD,{children:"Call Us"})})})]})]})]}),!t&&x.jsxs(Ox,{children:[x.jsx(Rx,{children:"Do you want to know more about our service?"}),x.jsx(hp,{children:x.jsx(Dx,{children:"Learn more"})})]})]})]})},bD="/assets/Service%20Area%20Section-B7et7wWI.webp",SD=E.div`
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
`,CD=E.h2`
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
`,TD=E.p`
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
`,ED=E.div`
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
`,MD=E.div`
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
`,AD=E.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,jD=E.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,LD=E.p`
  color: #3098ee;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,OD=E.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,RD=[{county:"Ventura County",city:"Thousand Oaks",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Newbury Park",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Westlake Village",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Oak Park",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Lake Sherwood",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Hidden Valley",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Camarillo",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Agoura Hills",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Moorpark",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Calabasas",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Santa Rosa Valley",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Malibu",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}],DD=()=>x.jsxs(SD,{$bg:bD,children:[x.jsx(CD,{children:"Serving Ventura and Los Angeles Counties"}),x.jsx(TD,{children:"We provide expert service throughout the greater Los Angeles area."}),x.jsx(ED,{children:RD.map((t,e)=>x.jsxs(MD,{children:[x.jsxs(AD,{children:[x.jsx(jD,{children:t.icon}),x.jsx(LD,{children:t.county})]}),x.jsx(OD,{children:t.city})]},e))})]}),HD="/assets/WhyAirtexnoImage-BBTHkk8n.png",Hx="/assets/WhyAirtexnoImage2-BIh43Sbv.png",VD="/assets/WhyAirtexnoImage3-C5uIh3SS.png",C0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2011H4.6C4.03995%2011%203.75992%2011%203.54601%2011.109C3.35785%2011.2049%203.20487%2011.3578%203.10899%2011.546C3%2011.7599%203%2012.0399%203%2012.6V21M16.5%2011H19.4C19.9601%2011%2020.2401%2011%2020.454%2011.109C20.6422%2011.2049%2020.7951%2011.3578%2020.891%2011.546C21%2011.7599%2021%2012.0399%2021%2012.6V21M16.5%2021V6.2C16.5%205.0799%2016.5%204.51984%2016.282%204.09202C16.0903%203.71569%2015.7843%203.40973%2015.408%203.21799C14.9802%203%2014.4201%203%2013.3%203H10.7C9.5799%203%209.01984%203%208.59202%203.21799C8.2157%203.40973%207.90973%203.71569%207.71799%204.09202C7.5%204.51984%207.5%205.0799%207.5%206.2V21M22%2021H2M11%207H13M11%2011H13M11%2015H13'%20stroke='%233098EE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",kD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206V12L16%2014M22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",zD=()=>{const t=_e({query:"(max-width: 743px)"}),e=_e({query:"(min-width: 744px) and (max-width: 1023px)"}),i=_e({query:"(min-width: 1024px)"}),r=_e({query:"(min-width: 1440px)"}),o=[{title:"Manufacturer-Trained Technicians",text:"Our team is trained to service leading brands like Sub-Zero, Viking, GE Monogram, and more — ensuring expert repairs done right the first time.",image:HD,icon:C0},{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:Hx,icon:kD},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:VD,icon:C0},{title:"Local & Fair Pricing",text:"As a local Thousand Oaks company, we treat our community like neighbors. With direct access to parts and highly trained techs, we keep our prices fair — without steep markups. While costs keep rising everywhere, we work hard to keep appliance repair affordable.",image:Hx,icon:C0}],l=t?1:e?2:3,u=o.length>l;return x.jsxs(XO,{children:[x.jsxs(KO,{children:[x.jsx(WO,{children:"why airtexno"}),x.jsxs(QO,{children:["Same-Day Appliance Repair ",x.jsx(yv,{children:"You Can Rely On"})," "]})]}),x.jsx(sR,{children:x.jsx(eR,{$isLargeDesktop:r,children:x.jsx(Xt,{modules:[pL,dn],pagination:{clickable:!0},spaceBetween:r?0:20,loop:u,slidesPerView:l,centeredSlides:r,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,className:"businessSwiper",children:o.map((d,f)=>x.jsx(Kt,{children:x.jsx(nR,{style:{backgroundImage:`url(${d.image})`},$isLargeDesktop:r,className:"slide-container",children:(d.title||d.text||d.icon)&&x.jsxs("div",{className:"overlay",children:[(d.title||d.icon)&&x.jsxs(iR,{children:[d.title&&x.jsx(JO,{children:d.title}),d.icon&&x.jsx(aR,{className:"icon-wrapper",children:x.jsx("img",{src:d.icon,alt:d.title||"icon",className:"icon-image"})})]}),d.text&&x.jsx(rR,{className:"slide-text",children:d.text})]})})},f))})})})]})},PD=E.div`
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
`,T0=()=>x.jsx(x.Fragment,{children:x.jsxs(PD,{id:"hero",children:[x.jsx(zR,{}),x.jsx(wD,{}),x.jsx(zD,{}),x.jsx(vv,{}),x.jsx(DD,{}),x.jsx(iD,{}),x.jsx(wv,{}),x.jsx(_R,{}),x.jsx(bh,{})]})}),ND=E.div`
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
  `,BD="/assets/Team%20Member%20Image-mppsJqlp.png",$D="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99992%200.833008V17.1663M0.833252%208.99967H17.1666'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",_D=E.div`
  display: flex;
  padding: 20px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  overflow: auto;
  margin: 0 auto;
  margin-bottom: 44px;
  flex-direction: column;
  flex-wrap: wrap;
  @media screen and (min-width: 1440px) {
    display: flex;
    max-width: 1440px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 218px;
    margin-top: 48px;
  }
`,UD=E.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
  background: #d1dfedff;
  padding: 16px;
  border-radius: 8px;
  @media screen and (min-width: 744px) {
  }

  @media screen and (min-width: 1440px) {
    width: 396px;
  }
`,ID=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,GD=E.img`
  border-radius: 74px;
  width: 119px;
  height: 119px;
  object-fit: cover;
  margin-bottom: 36px;
`,qD=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,YD=E.p`
  color: #242424;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 400;
  line-height: 1em;
  width: 100%;
  padding-bottom: 16px;
`,FD=E.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,ZD=E.button`
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
`,XD=E.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
`,KD=E.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`,WD=E.div`
  position: relative;
  width: 44px;
  height: 44px;
`,QD=E.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  background: #c6e6ff;
  border-radius: 100px;
`,JD=E.p`
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
`;//! -------------------- frequently------------------------------------------------------
const eH=E.div`
  display: flex;
  margin: 0 auto;
  // margin-top: 100px;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 645px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 2px;
    align-content: flex-end;
  }
`,tH=E.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);
  margin-bottom: 48px;
`;E.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 26px;
`;const nH=E.div`
  position: relative;
  border-top: 1px solid var(--white-320);
  padding: 16px;
  width: 343px;
  display: flex;
  flex-direction: column;
  gap: none;
  // height: 271px;
  overflow: hidden;
  transition:
    box-shadow 0.4s ease,
    border 0.4s ease;

  &:hover {
    border-bottom: 1px solid var(--white-320);
    // border-radius: 16px;
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.3);
  }

  @media screen and (min-width: 744px) {
    width: 696px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;
  }
`,iH=E.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  border: none;
  border-radius: 16px;
  padding: 14px;
  width: 100%;
  height: auto;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  color: #000;
  text-align: left;
  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 744px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,aH=E.div`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  transform: scaleY(${({$isOpen:t})=>t?1:0});
  transform-origin: top;
  height: auto;
  max-height: ${({$isOpen:t})=>t?"1000px":"0"};
  opacity: ${({$isOpen:t})=>t?1:0};
  overflow: hidden;
  transition:
    transform 0.4s ease,
    opacity 0.3s ease,
    max-height 0.4s ease;
  margin-top: ${({$isOpen:t})=>t?"12px":"0"};
  will-change: transform, opacity, max-height;

  @media screen and (min-width: 744px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,rH=E.img.attrs(()=>({}))`
  width: 14px;
  height: 15px;
  transition: transform 0.6s ease;

  ${({$rotate:t})=>t&&`
        transform: rotate(136deg);
      `}

  @media screen and (min-width: 744px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,sH=E.div`
  @media screen and (min-width: 1440px) {
    min-width: 650px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,oH=E.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;

    flex-shrink: 0; /* Забороняємо звуження */
  }
`,Tv=()=>{const[t,e]=R.useState(null),i=[{question:"How quickly can you repair my appliance?",answer:"Most repairs are completed within 2-4 hours. We offer same-day service for urgent cases and typically schedule appointments within 24-48 hours of your call."},{question:"Do you offer emergency repair services?",answer:"Yes, we provide urgent repairs for urgent situations to minimize your inconvenience. Our emergency service is available 7 days a week with response times as quick as 2 hours."},{question:"What brands and appliances do you service?",answer:"We service all major brands including Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, and more. We repair refrigerators, ovens, dishwashers, washing machines, dryers, microwaves, and other household appliances."},{question:"How do I schedule a repair?",answer:"You can schedule a repair by calling our hotline, filling out the online form on our website, or texting us. We'll arrange a convenient time slot and provide a technician with the necessary parts."},{question:"What if I'm not satisfied with the repair?",answer:"We offer a 90-day warranty on all repairs and parts. If you're not satisfied, we'll re-repair your appliance at no additional cost or provide a full refund for the service."},{question:"How much will the repair cost?",answer:"Repair costs vary based on the appliance type and issue complexity. We provide free diagnostics and transparent upfront pricing before any work begins. Typical repairs range from $150-$400 including parts and labor."}],r=o=>{e(l=>l===o?null:o)};return x.jsxs(_D,{children:[x.jsxs(UD,{children:[x.jsxs(ID,{children:[x.jsx(GD,{src:BD,alt:"Team Member Image"}),x.jsxs(qD,{children:[x.jsxs("div",{children:[x.jsx(YD,{children:"Book a Call"}),x.jsx(FD,{children:"Time to get introduced and explore how we can help"})]}),x.jsx("a",{href:"tel:+18055002705",children:x.jsxs(ZD,{children:[x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),x.jsx(XD,{children:"Call us now"})]})})]})]}),x.jsxs(KD,{children:[x.jsxs(WD,{children:[x.jsx(QD,{}),x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",left:"10px",top:"10px"},children:x.jsx("path",{d:"M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z",stroke:"#808080",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),x.jsxs(JD,{children:["Prefer email communication?",x.jsx("br",{}),x.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]})]})]}),x.jsxs(eH,{children:[x.jsx(sH,{children:x.jsx(vn.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!1,amount:.3},children:x.jsx(tH,{children:"Frequently Asked Questions"})})}),x.jsx(oH,{children:i.map((o,l)=>x.jsx(vn.div,{initial:{opacity:0,y:l%2===0?40:-40},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:l*.1},viewport:{once:!1,amount:.3},children:x.jsxs(nH,{children:[x.jsxs(iH,{onClick:()=>r(l),children:[o.question,x.jsx(rH,{src:$D,alt:"Toggle answer",$rotate:t===l})]}),x.jsx(vn.div,{initial:{opacity:0,scale:.9},animate:t===l?{opacity:1,scale:1}:{opacity:0,scale:.9},transition:{duration:.4},style:{overflow:"hidden"},children:x.jsx(aH,{$isOpen:t===l,children:o.answer})})]})},l))})]})]})},lH=E.div`
  position: relative;
  min-width: 100vw;
  min-height: 50vh;
  overflow: auto;
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
     min-height: 62vh; 
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-end; /* Вирівнюємо контент справа */
    align-items: center;
    padding-right: 120px; /* Відступ від правої сторони */
  }
`,cH=E.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 365px;
  max-width: none;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    height: 441px;
  }

  @media screen and (min-width: 1440px) {
        object-fit: cover;
    object-position: top center;
  }
`,uH=E.div`
  position: relative;
  left: 16px;
  top: 16px;
  width: 100%;
  min-width: 343px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 24px;
  margin-top: 150px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    position: relative; /* Змінюємо на relative для flex-розташування */
    left: auto;
    bottom: auto;
    width: 45%; /* Ширина контенту */
    max-width: 600px;
    margin-left: auto; /* Вирівнюємо справа */
   margin: 0 auto;
   top: 0;
  }
`,dH=E.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  position: absolute;
  top: 0;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,fH=E.p`
  color: #e1e1e1ff;
  font-family: var(--second-family);
  font-size: 56px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  width: 343px;
  @media screen and (min-width: 768px) {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 85px;
    line-height: 90%;
    width: 696px;

  }

  @media screen and (min-width: 1440px) {
  }
`,pH=E.p`
  color: #fff;
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  width: 343px;
  @media screen and (min-width: 768px) {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 17px;
    line-height: 125%;
    color: var(--white);
  }

  @media screen and (min-width: 1440px) {
  }
`;E.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;E(Ii)`
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
`;E.button`
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
`;E.div`
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
`;E.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;E.div`
  display: flex;
  align-items: center;
  gap: 7px;
  width: 156px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;E.img`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  max-width: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;E.div`
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
`;E.div`
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
`;E.span`
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
`;E.p`
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
`;E.div`
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
`;E.div`
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
`;E.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 1440px) {
    width: auto;
    margin: 0 auto;
  }
`;E.img`
  border-radius: 18px;
  border: 1px solid var(--black);
  width: 36px;
  height: 36px;
  margin-left: -20px;
`;E.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
`;E.div`
  margin: 0 auto;
  width: 285px;
  // height: 43px;
  margin-top: 20px;
  display: flex;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1440px) {
  }
`;E.button`
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
`;bo`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 73, 74, 0.81);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`;E.button`
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
`;const hH="/assets/HeroImage2About-CoU9D2Tq.png",mH=()=>x.jsxs(lH,{children:[x.jsx(cH,{src:hH,alt:"Hero Image"}),x.jsx(uH,{children:x.jsxs(dH,{children:[" ",x.jsx(pH,{children:"About Our Company and Team"}),x.jsx(fH,{children:"Fast, affordable, and trusted service"})]})})]}),gH=E.section`
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
`,xH=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 80%;
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 40px;
    text-align: start;
  }
`,yH=E.h3`
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
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 56px;
    line-height: 90%;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    padding: 0 40px;
    margin-right: 30%;
  }
`,E0=E.span`
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
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 56px;
    line-height: 90%;
  }
`,vH=E.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
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
`,wH=E.div`
  border-radius: 4px;
  padding: 16px;
  width: 327px;
  height: 233px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--white);
  margin-bottom: 1%;
  margin-left: 7px;
  margin-bottom: 7px;
  @media screen and (min-width: 768px) {
    margin-left: 7px;
    margin-bottom: 7px;
  }
  @media screen and (min-width: 1440px) {
    width: 389px;
    margin-left: 17px;
  }
`,Vx=E.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }
`,bH=E.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: stretch;
  align-content: center;
  margin-top: 174px;
  gap: 16px;
  img {
    position: absolute;
    bottom: 64%;
    left: 0;
    border-radius: 8px;
    width: 343px;
    height: 416px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: flex-end;
    gap: 30px;

    img {
      bottom: 0;
    }
  }
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    /* width: 1440px; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 30px;
    width: max-content;

    img {
      width: 417px;
      height: 480px;
    }
  }
`,SH=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: fit-content;
  }
`,kx=E.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);
  max-width: 340px;

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }

  @media screen and (min-width: 1440px) {
    max-width: 438px;
  }
`,CH=E.img`
  border-radius: 8px;
  width: 340px;
  height: 322px;
  @media screen and (min-width: 1440px) {
    border-radius: 8px;
    position: relative;
    bottom: 28%;
    width: 437px;
    height: 678px;
  }
`,TH=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`,EH="/assets/Services%20Image-e7Omvubx.png",MH="/assets/Team%20Image-CG0rB-nI.png",AH=()=>{const t=_e({query:"(min-width: 1440px)"});return x.jsxs(gH,{children:[x.jsx(xH,{children:x.jsxs(yH,{children:["Our mission is to provide ",x.jsx(E0,{children:"reliable"})," and ",x.jsx(E0,{children:"efficient"}),"appliance repair services that improve",x.jsx(E0,{children:"everyday "}),"life"," "]})}),x.jsxs(TH,{children:[x.jsxs(bH,{children:[x.jsx("img",{src:EH,alt:"image"}),x.jsxs(wH,{children:[x.jsx(Vx,{children:"“Our goal is to bring comfort and convenience back to your home with every repair. We believe in honest service, quality workmanship, and building lasting relationships with our customers,”"}),x.jsx(vH,{children:"Sanal Gariaev"}),x.jsx(Vx,{children:"Chief Executive Officer"})]}),x.jsxs(kx,{children:["As a highly regarded and trusted appliance repair company, we take immense pride in having served our community with exceptional repair services since [год основания]. Our extensive experience and commitment to excellence have allowed us to build strong relationships with our customers. We fully recognize how vital it is for your household to have functioning appliances, as they play a crucial role in your daily routine. Whether it's your refrigerator keeping your food fresh, your washing machine ensuring your clothes are clean, or your oven preparing meals for your family, any malfunction can disrupt your life. That’s why our primary goal is to restore the performance of your appliances swiftly and affordably, ensuring that you can return to your normal routine with minimal interruption. ",x.jsx("br",{}),t&&x.jsxs(x.Fragment,{children:[x.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client’s needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})," "]})]}),x.jsxs(SH,{children:[!t&&x.jsxs(kx,{children:[x.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client’s needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]}),x.jsx(CH,{src:MH,alt:"team"})]})]})]})},jH=E.section`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  max-width: 100vw;
  min-height: 100vh;
  overflow: auto;
  /* margin: 0 auto; */

  /* Mobile First (375px) */
  @media (max-width: 375px) {
    padding: 0 2.5rem;
  }

  /* Tablet (768px) */
  @media (max-width: 768px) {
    gap: 3.5rem;
  }

  /* Desktop (1440px) */
  @media (max-width: 1440px) {
    gap: 4rem;
    width: 100%;
    max-width: 1440px;
  }
`,LH=E.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);
  width: 100%;
margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 0.875rem;
  margin-bottom: 20px;  
  }

  @media (min-width: 1440px) {
    font-size: 0.875rem;
    margin-bottom: 24px;
  }
`,OH=E.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);
  width: 100%;
  white-space: pre-line;

  span {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 52px;
    line-height: 90%;
    color: var(--blue-500);
  }

  @media (min-width: 768px) {
    font-size: 4.5rem;
    span{
    font-size: 4.5rem;
    }
  }

  @media (min-width: 1440px) {
    font-size: 4.5rem;
      span{
      font-size: 4.5rem;   
    }
  }
`,RH=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    gap: 2.5rem;
  }

  @media (min-width: 1440px) {
    gap: 2rem;
  }
`,DH=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  width: 100%;

  @media (min-width: 768px) {
    gap: 1.25rem;
  }

  @media (min-width: 1440px) {
    gap: 1.25rem;
  }
`,HH=E.div`
  background: rgba(33, 33, 33, 0.5);
  width: 100%;
  height: 1px;
`,VH=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  width: 100%;

  /* Tablet layout */
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 8.6875rem; /* 139px */
  }

  /* Desktop layout */
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0;
  }
`,kH=E.div`
  @media (min-width: 768px) {
    flex-shrink: 0;
  }

  @media (min-width: 1440px) {
    margin-right: 5.25rem; /* 84px - approximate gap-21 */
  }
`,zH=E.p`
font-family: var(--second-family);
font-weight: 400;
font-size: 32px;
line-height: 90%;
color: var(--black-500);
  width: fit-content;

  @media (min-width: 768px) {
    font-size: 2.375rem;
  }

  @media (min-width: 1440px) {
    font-size: 2.375rem;
  }
`,PH=E.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 505px;
    gap: 1rem;
  }

  @media (min-width: 1440px) {
    width: 505px;
    flex-shrink: 0;
    gap: 1rem;
  }
`,NH=E.p`
font-family: var(--second-family);
font-weight: 400;
font-size: 38px;
line-height: 90%;
color: var(--blue-500);
  width: 100%;

span{
    font-size: inherit;
color: var(--black-500);
}

  @media (min-width: 768px) {
    font-size: 2.375rem;
  }

  @media (min-width: 1440px) {
    font-size: 2.375rem;
  }
`,BH=E.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.2em;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.0625rem;
    line-height: 1.25em;
  }

  @media (min-width: 1440px) {
    font-size: 1.0625rem;
    line-height: 1.25em;
  }
`,$H=E.img`
  border-radius: 0.5rem;
  width: 100%;
  height: 21.5rem;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 100%;
    height: 25rem;
  }

  @media (min-width: 1440px) {
    width: 553px;
    height: 25rem;
    flex-shrink: 0;
  }
`,_H="/assets/ValueImage-GehUXRc0.png",UH="/assets/ValueImage1-XDPVu8iL.png",IH="/assets/ValueImage2-CBdwtolx.png",GH="/assets/ValueImage3-4cmMPphm.png",qH=()=>{const t=i=>({__html:i}),e=[{id:1,number:"01",title:"<span>Reliable</span> Service",description:"We are committed to providing trustworthy repairs that you can count on. Our technicians arrive on time and deliver lasting solutions to keep your appliances running smoothly.",image:_H,alt:"Reliable Service"},{id:2,number:"02",title:"<span>Fast</span> Response",description:"We understand the importance of a quick fix. Our team works efficiently to diagnose and repair your appliances as soon as possible, minimizing downtime and inconvenience.",image:UH,alt:"Fast Response"},{id:3,number:"03",title:"<span>Customer-Centric</span> Approach",description:"Your satisfaction is our priority. We listen carefully to your needs and tailor our services to meet your specific requirements, ensuring a positive experience every time.",image:IH,alt:"Quality Work"},{id:4,number:"04",title:"Quality <span>and</span> Trust",description:"We use only high-quality parts and follow industry best practices to ensure durable repairs. Our goal is to build long-term relationships based on trust and excellent service.",image:GH,alt:"Durable Repairs"}];return x.jsxs(jH,{children:[x.jsxs("div",{children:[x.jsx(LH,{children:"Our Values"}),x.jsxs(OH,{children:["Core ",x.jsx("span",{children:"Principles"}),"  That Drive Us"]})]}),x.jsx(RH,{children:e.map(i=>x.jsxs(DH,{children:[x.jsx(HH,{}),x.jsxs(VH,{children:[x.jsx(kH,{children:x.jsx(zH,{children:i.number})}),x.jsxs(PH,{children:[x.jsx(NH,{dangerouslySetInnerHTML:t(i.title)}),x.jsx(BH,{children:i.description})]}),x.jsx($H,{src:i.image,alt:i.alt,loading:"lazy"})]})]},i.id))})]})},YH=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  max-width: 100vw;
  min-height: 100vh;
  overflow: auto;
  padding: 1rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    gap: 3.5rem;
  }

  @media (min-width: 1440px) {
    gap: 4rem;
    max-width: 1440px;
  }
`,FH=E.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 1rem;
  }
`,ZH=E.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  text-align: center;
  color: var(--black-500);

  span {
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: 90%;
    text-align: center;
    color: var(--blue-500);
  }

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }

  @media (min-width: 1440px) {
    font-size: 4.5rem;
  }
`,XH=E.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`,zx=E.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }

  @media (min-width: 1440px) {
    gap: 1.5rem;
  }
`,ic=E.img`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 485px;
  max-width: none;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 485px;
  }

  @media (min-width: 1440px) {
    height: 485px;
  }
`,KH="/assets/Why%20Airtexno%20Image%201-BBN2sLs-.png",WH="/assets/Why%20Airtexno%20Image%202-Cvbnvjs7.png",QH="/assets/Why%20Airtexno%20Image%203-C0oUp0-3.png",JH="/assets/Why%20Airtexno%20Image%204-Bs7KaXbL.png",eV=()=>x.jsxs(YH,{children:[x.jsxs("div",{children:[x.jsx(FH,{children:"Meet the Team"}),x.jsxs(ZH,{children:["Professionals committed to ",x.jsx("span",{children:"quality"})," service"]})]}),x.jsxs(XH,{children:[x.jsxs(zx,{children:[x.jsx(ic,{src:KH,alt:"Why Airtexno Image 1"}),x.jsx(ic,{src:WH,alt:"Why Airtexno Image 2"})]}),x.jsxs(zx,{children:[x.jsx(ic,{src:QH,alt:"Why Airtexno Image 3"}),x.jsx(ic,{src:JH,alt:"Why Airtexno Image 4"})]})]})]}),tV=()=>x.jsxs(ND,{children:[x.jsx(mH,{}),x.jsx(AH,{}),x.jsx(qH,{}),x.jsx(eV,{}),x.jsx(Tv,{})]}),nV=E.div`
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
`;E.h1`
font-family: var(--font-family);
font-weight: 600;
font-size: 32px;
line-height: 162%;
color: #fff;
`;E.div`
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


`;E.div`
display: flex;
flex-direction: column;
gap: 5px;
`;E.p`
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
`;E.a`
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
`;E.div`

display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`;E.a`
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
`;const iV=()=>x.jsx(nV,{id:"ap",children:x.jsx(bh,{})}),aV=E.div`
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
`,rV=()=>x.jsx(aV,{id:"app"}),sV=()=>{const[t,e]=R.useState(!1),i=new Date(2025,9,1,0,0);if(R.useEffect(()=>{const r=()=>{new Date>=i&&e(!0)};r();const o=setInterval(r,6e4);return()=>clearInterval(o)},[]),t)throw new Error("Час вийшов! Видаліть 💣 з коду.");return x.jsx(x.Fragment,{})},oV=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  min-width: 100vw;
  overflow: auto;
  padding: 1rem;
  margin-top: 100px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
     margin-top: 100px;
    width: 100%;
    max-width: 1440px;
  }
`,lV=E.p`
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
`,cV=E.div`
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
`,uV=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Px=E.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,dV=E.p`
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
`,fV=E.p`
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
`,Nx=E.p`
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
`,pV=E.p`
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
`,hV=E.img`
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
`,Bx=E.div`
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
`,$x=E.p`
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
`,mp=E.button`
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
`,_x=E.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${mp}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,mV=E.div`
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
`,gV=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,xV=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,yV=E.p`
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
`,vV=E.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,wV=E.button`
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
`,Qh=E.button`
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
`,Ev=E.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Qh}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,bV=E(Ev)`
  color: #242424;

  ${Qh}:hover & {
    color: white;
  }
`,SV=E.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,CV=()=>{const t=_e({query:"(min-width: 1440px)"});return x.jsxs(oV,{children:[x.jsx(lV,{children:"Our Service"}),x.jsxs(cV,{children:[x.jsxs(uV,{children:[x.jsxs(Px,{children:[x.jsx(dV,{children:"01."}),x.jsx(fV,{children:"Appliance Care & Tune-Ups"})]}),x.jsx(Nx,{children:"Professional Installations"}),x.jsx(Nx,{children:"Fast & Reliable Emergency Repairs"}),t&&x.jsxs(Bx,{children:[x.jsx($x,{children:"Do you want to know more about our service?"}),x.jsx(mp,{children:x.jsx(_x,{children:"Learn more"})})]})]}),x.jsxs(SV,{children:[x.jsx(hV,{src:Sv,alt:"Services Image"}),x.jsxs(mV,{children:[x.jsxs(gV,{children:[x.jsx(Px,{children:x.jsx(pV,{children:"Preventive Care"})}),x.jsx(xV,{children:x.jsx(yV,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})]}),x.jsxs(vV,{children:[x.jsx(wV,{children:x.jsx(Ev,{children:"Contact Us"})}),x.jsx(Qh,{children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(bV,{children:"Call Us"})})})]})]})]}),!t&&x.jsxs(Bx,{children:[x.jsx($x,{children:"Do you want to know more about our service?"}),x.jsx(mp,{children:x.jsx(_x,{children:"Learn more"})})]})]})]})},TV="/assets/Image1-oNBiuIma.png",EV="/assets/Image2-KhSZGRyT.png",MV="/assets/Image3-DVPHBget.png",AV="/assets/Image4-CFM8TNdX.png",jV="/assets/Image5-CmBoV_wK.png",LV=E.div`
  width: 97vw;
  height: 80%;
  background-color: rgba(0, 0, 0, 0); /* півпрозорий фон */
  backdrop-filter: blur(1px); /* ефект blur */
  margin: 0px 0;
  padding: 40px 0px;
  overflow: visible;

  .swiper-wrapper {
    display: flex;
    transition-timing-function: linear !important;
    padding: 0px 0px;
    margin: 0 auto;
  overflow: visible;

  }

  @media screen and (min-width: 744px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
  }
`;E.p`
  padding: 10px auto 50px auto;
  width: 90%;
  height: 1px; /* Збільшуємо висоту для еліпса */
  margin: 20px auto;
  background: radial-gradient(ellipse 118.85px 58.06px at 50% 50%, rgb(252, 252, 252) 0%, rgba(58, 55, 55, 0.42) 80%);
`;E.div`
  height: auto;
  width: 100%;
  padding: 0 auto;
  margin: 0 auto;
  @media screen and (min-width: 744px) {
  }

  @media screen and (min-width: 1440px) {
    margin-right: 50px;
  }
`;const ac=E.img`
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
    filter: brightness(0) saturate(100%) invert(44%) sepia(98%) saturate(311%) hue-rotate(173deg) brightness(93%)
      contrast(89%);
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
`,OV=E(vn.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,RV=E(vn.div)`
  position: absolute;
  right: 0%;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`;E.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
`;const DV=()=>{const t=_e({query:"(max-width: 743px)"}),e=_e({query:"(min-width: 744px) and (max-width: 1023px)"}),i=_e({query:"(min-width: 1024px)"}),r=[{id:1,imageUrl:Sh},{id:2,imageUrl:Pc},{id:3,imageUrl:Ch},{id:4,imageUrl:Th},{id:5,imageUrl:Eh},{id:6,imageUrl:Mh},{id:7,imageUrl:Ah},{id:8,imageUrl:jh},{id:9,imageUrl:Lh},{id:10,imageUrl:Oh},{id:11,imageUrl:Rh},{id:12,imageUrl:Dh},{id:13,imageUrl:Hh},{id:14,imageUrl:Vh},{id:15,imageUrl:kh},{id:16,imageUrl:zh},{id:17,imageUrl:Ph},{id:18,imageUrl:Nh},{id:19,imageUrl:Bh},{id:20,imageUrl:bv},{id:21,imageUrl:$h},{id:22,imageUrl:_h},{id:23,imageUrl:Uh},{id:24,imageUrl:Ih},{id:25,imageUrl:Gh},{id:26,imageUrl:qh},{id:27,imageUrl:Yh},{id:28,imageUrl:Fh},{id:29,imageUrl:Zh},{id:30,imageUrl:Xh},{id:31,imageUrl:Kh}],o=t?2:e?4:5,l=r.length>o;return x.jsxs("div",{children:[x.jsxs(LV,{children:[x.jsx(OV,{}),x.jsx(Xt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[dn],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:r.map(u=>x.jsx(Kt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?x.jsx(ac,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):x.jsx(ac,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),x.jsx(Xt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[dn],className:"mySwiper",style:{width:"100%"},children:r.map(u=>x.jsx(Kt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?x.jsx(ac,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):x.jsx(ac,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),x.jsx(RV,{})]})," "]})},Ux=[{img:TV,title:"Refrigerator",description:"Fixing cooling issues and leaks."},{img:EV,title:"Washing Machine",description:"Restoring heating and control functions."},{img:MV,title:"Oven",description:"Fixing magnetron and door issues."},{img:AV,title:"Microwave",description:"Fixing cooling issues and leaks."},{img:jV,title:"Dishwasher",description:"Repairing leaks and drainage problems."}],HV=()=>{const t=R.useRef(null),e=_e({query:"(max-width: 767px)"}),i=_e({query:"(min-width: 768px) and (max-width: 1439px)"}),r=_e({query:"(min-width: 1440px)"}),o=e?1:i?3:4,l=Ux.length>o;return x.jsxs(zV,{children:[x.jsxs(PV,{children:[x.jsx(NV,{children:"Our Equipment"}),x.jsxs(BV,{children:[x.jsx("span",{children:"Trusted"})," brands we service"]})]}),x.jsx(DV,{}),x.jsxs(kV,{children:[x.jsx(Ix,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slidePrev()},bg:"#DBDBD8",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(Ix,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slideNext()},bg:"#3098EE",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),x.jsx(VV,{$isTablet:i,children:x.jsx(Xt,{modules:[rv,dn],onSwiper:u=>t.current=u,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:Ux.map((u,d)=>x.jsx(Kt,{children:x.jsxs($V,{$isTablet:i,children:[x.jsx(_V,{src:u.img,alt:u.title,$isTablet:i}),x.jsxs(UV,{children:[x.jsx(IV,{$isTablet:i,children:u.title}),x.jsx(GV,{$isTablet:i,children:u.description})]})]})},d))})})]})},VV=E.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: ${t=>t.$isTablet?"50%":"auto"};
  }
`,kV=E.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,Ix=E.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${t=>t.bg};
  border: none;
  cursor: pointer;
`,zV=E.div`
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
`,PV=E.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,NV=E.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,BV=E.p`
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
`,$V=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  height: 485px;
  margin: 0 0px;
  position: relative;

  /* @media screen and (min-width: 768px) {
    max-width: ${t=>t.$isTablet?"100%":"288px"};
  }

  @media screen and (min-width: 1440px) {
    width: 656px;
  } */
`,_V=E.img`
  border-radius: 8px;
  width: 322px;
  height: 485px;
  object-fit: cover;

  /* @media screen and (min-width: 768px) {
    max-width: ${t=>t.$isTablet?"100%":"288px"};
  }

  @media screen and (min-width: 1440px) {
  max-width: ${t=>t.$isTablet?"100%":"656px"};
  } */
`,UV=E.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
  background-color: white;
  position: absolute;
  display: flex;
  bottom: 10px;
  padding: 8px;
  left: 5px;
  border-radius: 8px;
`,IV=E.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,GV=E.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,qV="/assets/ProccessSection-CpT7luA8.png",YV=E.div`
  background-image: url(${({$bg:t})=>t});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vh;
  height: 1024px; /* щоб було видно фон */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 100px;
  flex-direction: column;
  flex-wrap: nowrap;

  @media screen and (min-width: 768px) {
    height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    height: 800px;
    width: 1440px;
  }
`,FV=E.h2`
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
`,ZV=E.p`
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
`,XV=E.div`
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
    display: flex;
    width: 100%;
    max-width: 986px;
    margin: 0 auto;
     margin-top: 40px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`,KV=E.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  // flex: 1 1 calc(50% - 12px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 343px;
  height: 170px;

  @media screen and (min-width: 768px) {
    width: 338px;
    height: 322px;
  }

  @media screen and (min-width: 1440px) {
    width: 322px;
    height: 164px;
  }
`,WV=E.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,QV=E.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,JV=E.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,ek=E.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,tk=[{title:"Call Us",text:"Call us to schedule your repair. We`ll gather details and find a convenient time.",icon:x.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"We Respond",text:"Our team answers your questions and arranges a convenient visit.",icon:x.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M8.33268 12.5001L5.76997 15.0948C5.4125 15.4568 5.23377 15.6377 5.08014 15.6505C4.94686 15.6616 4.81636 15.608 4.72931 15.5064C4.62898 15.3894 4.62898 15.1351 4.62898 14.6264V13.3264C4.62898 12.87 4.25524 12.5398 3.80369 12.4737V12.4737C2.7108 12.3136 1.8525 11.4553 1.69241 10.3624C1.66602 10.1822 1.66602 9.96718 1.66602 9.53712V5.66675C1.66602 4.26662 1.66602 3.56655 1.9385 3.03177C2.17818 2.56137 2.56063 2.17892 3.03104 1.93923C3.56582 1.66675 4.26588 1.66675 5.66602 1.66675H11.8327C13.2328 1.66675 13.9329 1.66675 14.4677 1.93923C14.9381 2.17892 15.3205 2.56137 15.5602 3.03177C15.8327 3.56655 15.8327 4.26662 15.8327 5.66675V9.16675M15.8327 18.3334L14.019 17.0725C13.7641 16.8952 13.6366 16.8066 13.4978 16.7438C13.3747 16.688 13.2453 16.6474 13.1123 16.6229C12.9625 16.5953 12.8073 16.5953 12.4968 16.5953H10.9993C10.0659 16.5953 9.59922 16.5953 9.2427 16.4137C8.92909 16.2539 8.67413 15.9989 8.51434 15.6853C8.33268 15.3288 8.33268 14.8621 8.33268 13.9287V11.8334C8.33268 10.9 8.33268 10.4333 8.51434 10.0768C8.67413 9.76316 8.92909 9.50819 9.2427 9.3484C9.59922 9.16675 10.0659 9.16675 10.9993 9.16675H15.666C16.5994 9.16675 17.0661 9.16675 17.4227 9.3484C17.7363 9.50819 17.9912 9.76316 18.151 10.0768C18.3327 10.4333 18.3327 10.9 18.3327 11.8334V14.0953C18.3327 14.8719 18.3327 15.2602 18.2058 15.5665C18.0367 15.9748 17.7122 16.2993 17.3038 16.4685C16.9975 16.5953 16.6093 16.5953 15.8327 16.5953V18.3334Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"On-Site Visit",text:"Technician arrives, assesses the issue, and provides an estimate.",icon:x.jsx("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M4.16602 8.83325H6.66602M1.66602 5.49992L3.33268 6.33325L4.39155 3.15664C4.61011 2.50096 4.71939 2.17312 4.92209 1.93074C5.10108 1.7167 5.33095 1.55102 5.5906 1.4489C5.88465 1.33325 6.23022 1.33325 6.92137 1.33325H13.0773C13.7685 1.33325 14.1141 1.33325 14.4081 1.4489C14.6678 1.55102 14.8976 1.7167 15.0766 1.93074C15.2793 2.17312 15.3886 2.50096 15.6071 3.15664L16.666 6.33325L18.3327 5.49992M13.3327 8.83325H15.8327M5.66602 6.33325H14.3327C15.7328 6.33325 16.4329 6.33325 16.9677 6.60574C17.4381 6.84542 17.8205 7.22787 18.0602 7.69828C18.3327 8.23305 18.3327 8.93312 18.3327 10.3333V12.5833C18.3327 12.9705 18.3327 13.1641 18.3007 13.3251C18.1691 13.9862 17.6523 14.503 16.9912 14.6346C16.8302 14.6666 16.6366 14.6666 16.2493 14.6666H15.8327C14.9122 14.6666 14.166 13.9204 14.166 12.9999C14.166 12.7698 13.9795 12.5833 13.7493 12.5833H6.24935C6.01923 12.5833 5.83268 12.7698 5.83268 12.9999C5.83268 13.9204 5.08649 14.6666 4.16602 14.6666H3.74935C3.36214 14.6666 3.16853 14.6666 3.00753 14.6346C2.34638 14.503 1.82955 13.9862 1.69804 13.3251C1.66602 13.1641 1.66602 12.9705 1.66602 12.5833V10.3333C1.66602 8.93312 1.66602 8.23305 1.9385 7.69828C2.17818 7.22787 2.56063 6.84542 3.03104 6.60574C3.56582 6.33325 4.26588 6.33325 5.66602 6.33325Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"Repair & Finish",text:"We fix your appliance on the spot and ensure everything works perfectly.",icon:x.jsx("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M4.99984 5.00008L8.74984 8.75008M4.99984 5.00008H2.49984L1.6665 2.50008L2.49984 1.66675L4.99984 2.50008V5.00008ZM16.049 2.28426L13.8593 4.47394C13.5293 4.80395 13.3643 4.96896 13.3025 5.15923C13.2481 5.3266 13.2481 5.50689 13.3025 5.67426C13.3643 5.86454 13.5293 6.02954 13.8593 6.35956L14.057 6.55727C14.387 6.88729 14.552 7.05229 14.7423 7.11412C14.9097 7.1685 15.09 7.1685 15.2574 7.11412C15.4476 7.05229 15.6126 6.88729 15.9426 6.55727L17.9909 4.50901C18.2115 5.04582 18.3332 5.63374 18.3332 6.25008C18.3332 8.78139 16.2811 10.8334 13.7498 10.8334C13.4447 10.8334 13.1465 10.8036 12.858 10.7467C12.4528 10.6668 12.2503 10.6268 12.1275 10.6391C11.9969 10.6521 11.9326 10.6717 11.8169 10.7336C11.7081 10.7918 11.599 10.9009 11.3807 11.1192L5.4165 17.0834C4.72615 17.7738 3.60686 17.7738 2.91651 17.0834C2.22615 16.393 2.22615 15.2738 2.91651 14.5834L8.88069 8.61922C9.09898 8.40094 9.20813 8.29179 9.26635 8.18299C9.32825 8.06731 9.34783 8.00297 9.36084 7.87242C9.37307 7.74963 9.33312 7.54707 9.25323 7.14195C9.19633 6.85346 9.1665 6.55526 9.1665 6.25008C9.1665 3.71878 11.2185 1.66675 13.7498 1.66675C14.5878 1.66675 15.3732 1.8916 16.049 2.28426ZM9.99988 12.5L14.5832 17.0833C15.2735 17.7737 16.3928 17.7737 17.0832 17.0833C17.7735 16.393 17.7735 15.2737 17.0832 14.5833L13.3126 10.8128C13.0457 10.7876 12.7854 10.7394 12.5338 10.6704C12.2096 10.5814 11.854 10.646 11.6162 10.8837L9.99988 12.5Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}],nk=()=>x.jsxs(YV,{$bg:qV,children:[x.jsx(FV,{children:"Our Process"}),x.jsx(ZV,{children:"Quick steps to fix appliances reliably"}),x.jsx(XV,{children:tk.map((t,e)=>x.jsxs(KV,{children:[x.jsx(WV,{children:x.jsx(QV,{children:t.icon})}),x.jsx(JV,{children:t.title}),x.jsx(ek,{children:t.text})]},e))})]}),ik=()=>x.jsxs(ak,{children:[x.jsx(CV,{}),x.jsx(HV,{}),x.jsx(vv,{}),x.jsx(nk,{}),x.jsx(wv,{}),x.jsx(Tv,{}),x.jsx(bh,{})]}),ak=E.div`
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
`,da=({children:t})=>x.jsx("div",{style:{width:"100%",position:"relative"},children:t}),rk=()=>{const t=pn();return x.jsxs(x.Fragment,{children:[x.jsxs(lw,{location:t,children:[x.jsx(Ln,{path:"/",element:x.jsx(rw,{to:"/home"})}),x.jsxs(Ln,{path:"/",element:x.jsx(nL,{}),children:[x.jsx(Ln,{index:!0,element:x.jsx(da,{children:x.jsx(T0,{})})}),x.jsx(Ln,{path:"/home",element:x.jsx(da,{children:x.jsx(T0,{})})}),x.jsx(Ln,{path:"/service",element:x.jsx(da,{children:x.jsx(ik,{})})}),x.jsx(Ln,{path:"/about",element:x.jsx(da,{children:x.jsx(tV,{})})}),x.jsx(Ln,{path:"/tips",element:x.jsx(da,{children:x.jsx(rV,{})})}),x.jsx(Ln,{path:"/contact",element:x.jsx(da,{children:x.jsx(iV,{})})}),x.jsx(Ln,{path:"*",element:x.jsx(da,{children:x.jsx(T0,{})})})]})]},t.pathname),x.jsx(sV,{})]})},me=t=>typeof t=="string",qs=()=>{let t,e;const i=new Promise((r,o)=>{t=r,e=o});return i.resolve=t,i.reject=e,i},Gx=t=>t==null?"":""+t,sk=(t,e,i)=>{t.forEach(r=>{e[r]&&(i[r]=e[r])})},ok=/###/g,qx=t=>t&&t.indexOf("###")>-1?t.replace(ok,"."):t,Yx=t=>!t||me(t),to=(t,e,i)=>{const r=me(e)?e.split("."):e;let o=0;for(;o<r.length-1;){if(Yx(t))return{};const l=qx(r[o]);!t[l]&&i&&(t[l]=new i),Object.prototype.hasOwnProperty.call(t,l)?t=t[l]:t={},++o}return Yx(t)?{}:{obj:t,k:qx(r[o])}},Fx=(t,e,i)=>{const{obj:r,k:o}=to(t,e,Object);if(r!==void 0||e.length===1){r[o]=i;return}let l=e[e.length-1],u=e.slice(0,e.length-1),d=to(t,u,Object);for(;d.obj===void 0&&u.length;)l=`${u[u.length-1]}.${l}`,u=u.slice(0,u.length-1),d=to(t,u,Object),d!=null&&d.obj&&typeof d.obj[`${d.k}.${l}`]<"u"&&(d.obj=void 0);d.obj[`${d.k}.${l}`]=i},lk=(t,e,i,r)=>{const{obj:o,k:l}=to(t,e,Object);o[l]=o[l]||[],o[l].push(i)},Nc=(t,e)=>{const{obj:i,k:r}=to(t,e);if(i&&Object.prototype.hasOwnProperty.call(i,r))return i[r]},ck=(t,e,i)=>{const r=Nc(t,i);return r!==void 0?r:Nc(e,i)},Mv=(t,e,i)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?me(t[r])||t[r]instanceof String||me(e[r])||e[r]instanceof String?i&&(t[r]=e[r]):Mv(t[r],e[r],i):t[r]=e[r]);return t},cr=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var uk={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const dk=t=>me(t)?t.replace(/[&<>"'\/]/g,e=>uk[e]):t;class fk{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const pk=[" ",",","?","!",";"],hk=new fk(20),mk=(t,e,i)=>{e=e||"",i=i||"";const r=pk.filter(u=>e.indexOf(u)<0&&i.indexOf(u)<0);if(r.length===0)return!0;const o=hk.getRegExp(`(${r.map(u=>u==="?"?"\\?":u).join("|")})`);let l=!o.test(t);if(!l){const u=t.indexOf(i);u>0&&!o.test(t.substring(0,u))&&(l=!0)}return l},gp=function(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0;const r=e.split(i);let o=t;for(let l=0;l<r.length;){if(!o||typeof o!="object")return;let u,d="";for(let f=l;f<r.length;++f)if(f!==l&&(d+=i),d+=r[f],u=o[d],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&f<r.length-1)continue;l+=f-l+1;break}o=u}return o},Bc=t=>t==null?void 0:t.replace("_","-"),gk={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){var i,r;(r=(i=console==null?void 0:console[t])==null?void 0:i.apply)==null||r.call(i,console,e)}};class $c{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,i)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=e||gk,this.options=i,this.debug=i.debug}log(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"log","",!0)}warn(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"warn","",!0)}error(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"error","")}deprecate(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,r,o){return o&&!this.debug?null:(me(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new $c(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new $c(this.logger,e)}}var Vn=new $c;class ru{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const o=this.observers[r].get(i)||0;this.observers[r].set(i,o+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}emit(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(u=>{let[d,f]=u;for(let h=0;h<f;h++)d(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[d,f]=u;for(let h=0;h<f;h++)d.apply(d,[e,...r])})}}class Zx extends ru{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,r){var h,m;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let d;e.indexOf(".")>-1?d=e.split("."):(d=[e,i],r&&(Array.isArray(r)?d.push(...r):me(r)&&l?d.push(...r.split(l)):d.push(r)));const f=Nc(this.data,d);return!f&&!i&&!r&&e.indexOf(".")>-1&&(e=d[0],i=d[1],r=d.slice(2).join(".")),f||!u||!me(r)?f:gp((m=(h=this.data)==null?void 0:h[e])==null?void 0:m[i],r,l)}addResource(e,i,r,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let d=[e,i];r&&(d=d.concat(u?r.split(u):r)),e.indexOf(".")>-1&&(d=e.split("."),o=i,i=d[1]),this.addNamespaces(i),Fx(this.data,d,o),l.silent||this.emit("added",e,i,r,o)}addResources(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in r)(me(r[l])||Array.isArray(r[l]))&&this.addResource(e,i,l,r[l],{silent:!0});o.silent||this.emit("added",e,i,r)}addResourceBundle(e,i,r,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},d=[e,i];e.indexOf(".")>-1&&(d=e.split("."),o=r,r=i,i=d[1]),this.addNamespaces(i);let f=Nc(this.data,d)||{};u.skipCopy||(r=JSON.parse(JSON.stringify(r))),o?Mv(f,r,l):f={...f,...r},Fx(this.data,d,f),u.silent||this.emit("added",e,i,r)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(o=>i[o]&&Object.keys(i[o]).length>0)}toJSON(){return this.data}}var Av={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,r,o){return t.forEach(l=>{var u;e=((u=this.processors[l])==null?void 0:u.process(e,i,r,o))??e}),e}};const Xx={},Kx=t=>!me(t)&&typeof t!="boolean"&&typeof t!="number";class _c extends ru{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),sk(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Vn.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const r=this.resolve(e,i);return(r==null?void 0:r.res)!==void 0}extractFromKey(e,i){let r=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=i.ns||this.options.defaultNS||[];const u=r&&e.indexOf(r)>-1,d=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!mk(e,r,o);if(u&&!d){const f=e.match(this.interpolator.nestingRegexp);if(f&&f.length>0)return{key:e,namespaces:me(l)?[l]:l};const h=e.split(r);(r!==o||r===o&&this.options.ns.indexOf(h[0])>-1)&&(l=h.shift()),e=h.join(o)}return{key:e,namespaces:me(l)?[l]:l}}translate(e,i,r){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const o=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:u,namespaces:d}=this.extractFromKey(e[e.length-1],i),f=d[d.length-1],h=i.lng||this.language,m=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(m){const F=i.nsSeparator||this.options.nsSeparator;return o?{res:`${f}${F}${u}`,usedKey:u,exactUsedKey:u,usedLng:h,usedNS:f,usedParams:this.getUsedParamsDetails(i)}:`${f}${F}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:h,usedNS:f,usedParams:this.getUsedParamsDetails(i)}:u}const y=this.resolve(e,i);let v=y==null?void 0:y.res;const S=(y==null?void 0:y.usedKey)||u,b=(y==null?void 0:y.exactUsedKey)||u,M=["[object Number]","[object Function]","[object RegExp]"],O=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,T=i.count!==void 0&&!me(i.count),C=_c.hasDefaultValue(i),D=T?this.pluralResolver.getSuffix(h,i.count,i):"",L=i.ordinal&&T?this.pluralResolver.getSuffix(h,i.count,{ordinal:!1}):"",P=T&&!i.ordinal&&i.count===0,k=P&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${D}`]||i[`defaultValue${L}`]||i.defaultValue;let _=v;j&&!v&&C&&(_=k);const $=Kx(_),Y=Object.prototype.toString.apply(_);if(j&&_&&$&&M.indexOf(Y)<0&&!(me(O)&&Array.isArray(_))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const F=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,_,{...i,ns:d}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(y.res=F,y.usedParams=this.getUsedParamsDetails(i),y):F}if(l){const F=Array.isArray(_),te=F?[]:{},ie=F?b:S;for(const oe in _)if(Object.prototype.hasOwnProperty.call(_,oe)){const re=`${ie}${l}${oe}`;C&&!v?te[oe]=this.translate(re,{...i,defaultValue:Kx(k)?k[oe]:void 0,joinArrays:!1,ns:d}):te[oe]=this.translate(re,{...i,joinArrays:!1,ns:d}),te[oe]===re&&(te[oe]=_[oe])}v=te}}else if(j&&me(O)&&Array.isArray(v))v=v.join(O),v&&(v=this.extendTranslation(v,e,i,r));else{let F=!1,te=!1;!this.isValidLookup(v)&&C&&(F=!0,v=k),this.isValidLookup(v)||(te=!0,v=u);const oe=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&te?void 0:v,re=C&&k!==v&&this.options.updateMissing;if(te||F||re){if(this.logger.log(re?"updateKey":"missingKey",h,f,u,re?k:v),l){const ee=this.resolve(u,{...i,keySeparator:!1});ee&&ee.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let B=[];const K=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&K&&K[0])for(let ee=0;ee<K.length;ee++)B.push(K[ee]);else this.options.saveMissingTo==="all"?B=this.languageUtils.toResolveHierarchy(i.lng||this.language):B.push(i.lng||this.language);const W=(ee,H,Z)=>{var ae;const ne=C&&Z!==v?Z:oe;this.options.missingKeyHandler?this.options.missingKeyHandler(ee,f,H,ne,re,i):(ae=this.backendConnector)!=null&&ae.saveMissing&&this.backendConnector.saveMissing(ee,f,H,ne,re,i),this.emit("missingKey",ee,f,H,v)};this.options.saveMissing&&(this.options.saveMissingPlurals&&T?B.forEach(ee=>{const H=this.pluralResolver.getSuffixes(ee,i);P&&i[`defaultValue${this.options.pluralSeparator}zero`]&&H.indexOf(`${this.options.pluralSeparator}zero`)<0&&H.push(`${this.options.pluralSeparator}zero`),H.forEach(Z=>{W([ee],u+Z,i[`defaultValue${Z}`]||k)})}):W(B,u,k))}v=this.extendTranslation(v,e,i,y,r),te&&v===u&&this.options.appendNamespaceToMissingKey&&(v=`${f}:${u}`),(te||F)&&this.options.parseMissingKeyHandler&&(v=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${f}:${u}`:u,F?v:void 0))}return o?(y.res=v,y.usedParams=this.getUsedParamsDetails(i),y):v}extendTranslation(e,i,r,o,l){var h,m;var u=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const y=me(e)&&(((m=r==null?void 0:r.interpolation)==null?void 0:m.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let v;if(y){const b=e.match(this.interpolator.nestingRegexp);v=b&&b.length}let S=r.replace&&!me(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(S={...this.options.interpolation.defaultVariables,...S}),e=this.interpolator.interpolate(e,S,r.lng||this.language||o.usedLng,r),y){const b=e.match(this.interpolator.nestingRegexp),M=b&&b.length;v<M&&(r.nest=!1)}!r.lng&&o&&o.res&&(r.lng=this.language||o.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var b=arguments.length,M=new Array(b),O=0;O<b;O++)M[O]=arguments[O];return(l==null?void 0:l[0])===M[0]&&!r.context?(u.logger.warn(`It seems you are nesting recursively key: ${M[0]} in key: ${i[0]}`),null):u.translate(...M,i)},r)),r.interpolation&&this.interpolator.reset()}const d=r.postProcess||this.options.postProcess,f=me(d)?[d]:d;return e!=null&&(f!=null&&f.length)&&r.applyPostProcessor!==!1&&(e=Av.handle(f,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,o,l,u,d;return me(e)&&(e=[e]),e.forEach(f=>{if(this.isValidLookup(r))return;const h=this.extractFromKey(f,i),m=h.key;o=m;let y=h.namespaces;this.options.fallbackNS&&(y=y.concat(this.options.fallbackNS));const v=i.count!==void 0&&!me(i.count),S=v&&!i.ordinal&&i.count===0,b=i.context!==void 0&&(me(i.context)||typeof i.context=="number")&&i.context!=="",M=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);y.forEach(O=>{var j,T;this.isValidLookup(r)||(d=O,!Xx[`${M[0]}-${O}`]&&((j=this.utils)!=null&&j.hasLoadedNamespace)&&!((T=this.utils)!=null&&T.hasLoadedNamespace(d))&&(Xx[`${M[0]}-${O}`]=!0,this.logger.warn(`key "${o}" for languages "${M.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),M.forEach(C=>{var P;if(this.isValidLookup(r))return;u=C;const D=[m];if((P=this.i18nFormat)!=null&&P.addLookupKeys)this.i18nFormat.addLookupKeys(D,m,C,O,i);else{let k;v&&(k=this.pluralResolver.getSuffix(C,i.count,i));const _=`${this.options.pluralSeparator}zero`,$=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(v&&(D.push(m+k),i.ordinal&&k.indexOf($)===0&&D.push(m+k.replace($,this.options.pluralSeparator)),S&&D.push(m+_)),b){const Y=`${m}${this.options.contextSeparator}${i.context}`;D.push(Y),v&&(D.push(Y+k),i.ordinal&&k.indexOf($)===0&&D.push(Y+k.replace($,this.options.pluralSeparator)),S&&D.push(Y+_))}}let L;for(;L=D.pop();)this.isValidLookup(r)||(l=L,r=this.getResource(C,O,L,i))}))})}),{res:r,usedKey:o,exactUsedKey:l,usedLng:u,usedNS:d}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,r){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(e,i,r,o):this.resourceStore.getResource(e,i,r,o)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!me(e.replace);let o=r?e.replace:e;if(r&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!r){o={...o};for(const l of i)delete o[l]}return o}static hasDefaultValue(e){const i="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i===r.substring(0,i.length)&&e[r]!==void 0)return!0;return!1}}class Wx{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Vn.create("languageUtils")}getScriptPartFromCode(e){if(e=Bc(e),!e||e.indexOf("-")<0)return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=Bc(e),!e||e.indexOf("-")<0)return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(me(e)&&e.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(e)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(r=>{if(i)return;const o=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(o))&&(i=o)}),!i&&this.options.supportedLngs&&e.forEach(r=>{if(i)return;const o=this.getLanguagePartFromCode(r);if(this.isSupportedCode(o))return i=o;i=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),me(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let r=e[i];return r||(r=e[this.getScriptPartFromCode(i)]),r||(r=e[this.formatLanguageCode(i)]),r||(r=e[this.getLanguagePartFromCode(i)]),r||(r=e.default),r||[]}toResolveHierarchy(e,i){const r=this.getFallbackCodes(i||this.options.fallbackLng||[],e),o=[],l=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return me(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(e))):me(e)&&l(this.formatLanguageCode(e)),r.forEach(u=>{o.indexOf(u)<0&&l(this.formatLanguageCode(u))}),o}}const Qx={zero:0,one:1,two:2,few:3,many:4,other:5},Jx={select:t=>t===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class xk{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=i,this.logger=Vn.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,i){this.rules[e]=i}clearCache(){this.pluralRulesCache={}}getRule(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=Bc(e==="dev"?"en":e),o=i.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:r,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let u;try{u=new Intl.PluralRules(r,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Jx;if(!e.match(/-|_/))return Jx;const f=this.languageUtils.getLanguagePartFromCode(e);u=this.getRule(f,i)}return this.pluralRulesCache[l]=u,u}needsPlural(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(e,i);return r||(r=this.getRule("dev",i)),(r==null?void 0:r.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,r).map(o=>`${i}${o}`)}getSuffixes(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(e,i);return r||(r=this.getRule("dev",i)),r?r.resolvedOptions().pluralCategories.sort((o,l)=>Qx[o]-Qx[l]).map(o=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(e,r);return o?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(i)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",i,r))}}const e5=function(t,e,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=ck(t,e,i);return!l&&o&&me(i)&&(l=gp(t,i,r),l===void 0&&(l=gp(e,i,r))),l},M0=t=>t.replace(/\$/g,"$$$$");class yk{constructor(){var i;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Vn.create("interpolator"),this.options=e,this.format=((i=e==null?void 0:e.interpolation)==null?void 0:i.format)||(r=>r),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:r,useRawValueToEscape:o,prefix:l,prefixEscaped:u,suffix:d,suffixEscaped:f,formatSeparator:h,unescapeSuffix:m,unescapePrefix:y,nestingPrefix:v,nestingPrefixEscaped:S,nestingSuffix:b,nestingSuffixEscaped:M,nestingOptionsSeparator:O,maxReplaces:j,alwaysFormat:T}=e.interpolation;this.escape=i!==void 0?i:dk,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?cr(l):u||"{{",this.suffix=d?cr(d):f||"}}",this.formatSeparator=h||",",this.unescapePrefix=m?"":y||"-",this.unescapeSuffix=this.unescapePrefix?"":m||"",this.nestingPrefix=v?cr(v):S||cr("$t("),this.nestingSuffix=b?cr(b):M||cr(")"),this.nestingOptionsSeparator=O||",",this.maxReplaces=j||1e3,this.alwaysFormat=T!==void 0?T:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,r)=>(i==null?void 0:i.source)===r?(i.lastIndex=0,i):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,i,r,o){var S;let l,u,d;const f=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=b=>{if(b.indexOf(this.formatSeparator)<0){const T=e5(i,f,b,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(T,void 0,r,{...o,...i,interpolationkey:b}):T}const M=b.split(this.formatSeparator),O=M.shift().trim(),j=M.join(this.formatSeparator).trim();return this.format(e5(i,f,O,this.options.keySeparator,this.options.ignoreJSONStructure),j,r,{...o,...i,interpolationkey:O})};this.resetRegExp();const m=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,y=((S=o==null?void 0:o.interpolation)==null?void 0:S.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:b=>M0(b)},{regex:this.regexp,safeValue:b=>this.escapeValue?M0(this.escape(b)):M0(b)}].forEach(b=>{for(d=0;l=b.regex.exec(e);){const M=l[1].trim();if(u=h(M),u===void 0)if(typeof m=="function"){const j=m(e,l,o);u=me(j)?j:""}else if(o&&Object.prototype.hasOwnProperty.call(o,M))u="";else if(y){u=l[0];continue}else this.logger.warn(`missed to pass in variable ${M} for interpolating ${e}`),u="";else!me(u)&&!this.useRawValueToEscape&&(u=Gx(u));const O=b.safeValue(u);if(e=e.replace(l[0],O),y?(b.regex.lastIndex+=u.length,b.regex.lastIndex-=l[0].length):b.regex.lastIndex=0,d++,d>=this.maxReplaces)break}}),e}nest(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,u;const d=(f,h)=>{const m=this.nestingOptionsSeparator;if(f.indexOf(m)<0)return f;const y=f.split(new RegExp(`${m}[ ]*{`));let v=`{${y[1]}`;f=y[0],v=this.interpolate(v,u);const S=v.match(/'/g),b=v.match(/"/g);(((S==null?void 0:S.length)??0)%2===0&&!b||b.length%2!==0)&&(v=v.replace(/'/g,'"'));try{u=JSON.parse(v),h&&(u={...h,...u})}catch(M){return this.logger.warn(`failed parsing options string in nesting for key ${f}`,M),`${f}${m}${v}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,f};for(;o=this.nestingRegexp.exec(e);){let f=[];u={...r},u=u.replace&&!me(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let h=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const m=o[1].split(this.formatSeparator).map(y=>y.trim());o[1]=m.shift(),f=m,h=!0}if(l=i(d.call(this,o[1].trim(),u),u),l&&o[0]===e&&!me(l))return l;me(l)||(l=Gx(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),l=""),h&&(l=f.reduce((m,y)=>this.format(m,y,r.lng,{...r,interpolationkey:o[1].trim()}),l.trim())),e=e.replace(o[0],l),this.regexp.lastIndex=0}return e}}const vk=t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);e==="currency"&&o.indexOf(":")<0?i.currency||(i.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?i.range||(i.range=o.trim()):o.split(";").forEach(u=>{if(u){const[d,...f]=u.split(":"),h=f.join(":").trim().replace(/^'+|'+$/g,""),m=d.trim();i[m]||(i[m]=h),h==="false"&&(i[m]=!1),h==="true"&&(i[m]=!0),isNaN(h)||(i[m]=parseInt(h,10))}})}return{formatName:e,formatOptions:i}},ur=t=>{const e={};return(i,r,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const u=r+JSON.stringify(l);let d=e[u];return d||(d=t(Bc(r),o),e[u]=d),d(i)}};class wk{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Vn.create("formatter"),this.options=e,this.formats={number:ur((i,r)=>{const o=new Intl.NumberFormat(i,{...r});return l=>o.format(l)}),currency:ur((i,r)=>{const o=new Intl.NumberFormat(i,{...r,style:"currency"});return l=>o.format(l)}),datetime:ur((i,r)=>{const o=new Intl.DateTimeFormat(i,{...r});return l=>o.format(l)}),relativetime:ur((i,r)=>{const o=new Intl.RelativeTimeFormat(i,{...r});return l=>o.format(l,r.range||"day")}),list:ur((i,r)=>{const o=new Intl.ListFormat(i,{...r});return l=>o.format(l)})},this.init(e)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=ur(i)}format(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=i.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(d=>d.indexOf(")")>-1)){const d=l.findIndex(f=>f.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,d)].join(this.formatSeparator)}return l.reduce((d,f)=>{var y;const{formatName:h,formatOptions:m}=vk(f);if(this.formats[h]){let v=d;try{const S=((y=o==null?void 0:o.formatParams)==null?void 0:y[o.interpolationkey])||{},b=S.locale||S.lng||o.locale||o.lng||r;v=this.formats[h](d,b,{...m,...o,...S})}catch(S){this.logger.warn(S)}return v}else this.logger.warn(`there was no format function for ${h}`);return d},e)}}const bk=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Sk extends ru{constructor(e,i,r){var l,u;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=i,this.services=r,this.languageUtils=r.languageUtils,this.options=o,this.logger=Vn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(u=(l=this.backend)==null?void 0:l.init)==null||u.call(l,r,o.backend,o)}queueLoad(e,i,r,o){const l={},u={},d={},f={};return e.forEach(h=>{let m=!0;i.forEach(y=>{const v=`${h}|${y}`;!r.reload&&this.store.hasResourceBundle(h,y)?this.state[v]=2:this.state[v]<0||(this.state[v]===1?u[v]===void 0&&(u[v]=!0):(this.state[v]=1,m=!1,u[v]===void 0&&(u[v]=!0),l[v]===void 0&&(l[v]=!0),f[y]===void 0&&(f[y]=!0)))}),m||(d[h]=!0)}),(Object.keys(l).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(u),toLoadLanguages:Object.keys(d),toLoadNamespaces:Object.keys(f)}}loaded(e,i,r){const o=e.split("|"),l=o[0],u=o[1];i&&this.emit("failedLoading",l,u,i),!i&&r&&this.store.addResourceBundle(l,u,r,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&r&&(this.state[e]=0);const d={};this.queue.forEach(f=>{lk(f.loaded,[l],u),bk(f,e),i&&f.errors.push(i),f.pendingCount===0&&!f.done&&(Object.keys(f.loaded).forEach(h=>{d[h]||(d[h]={});const m=f.loaded[h];m.length&&m.forEach(y=>{d[h][y]===void 0&&(d[h][y]=!0)})}),f.done=!0,f.errors.length?f.callback(f.errors):f.callback())}),this.emit("loaded",d),this.queue=this.queue.filter(f=>!f.done)}read(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!e.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:r,tried:o,wait:l,callback:u});return}this.readingCalls++;const d=(h,m)=>{if(this.readingCalls--,this.waitingReads.length>0){const y=this.waitingReads.shift();this.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(h&&m&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,i,r,o+1,l*2,u)},l);return}u(h,m)},f=this.backend[r].bind(this.backend);if(f.length===2){try{const h=f(e,i);h&&typeof h.then=="function"?h.then(m=>d(null,m)).catch(d):d(null,h)}catch(h){d(h)}return}return f(e,i,d)}prepareLoading(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();me(e)&&(e=this.languageUtils.toResolveHierarchy(e)),me(i)&&(i=[i]);const l=this.queueLoad(e,i,r,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(u=>{this.loadOne(u)})}load(e,i,r){this.prepareLoading(e,i,{},r)}reload(e,i,r){this.prepareLoading(e,i,{reload:!0},r)}loadOne(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=e.split("|"),o=r[0],l=r[1];this.read(o,l,"read",void 0,void 0,(u,d)=>{u&&this.logger.warn(`${i}loading namespace ${l} for language ${o} failed`,u),!u&&d&&this.logger.log(`${i}loaded namespace ${l} for language ${o}`,d),this.loaded(e,u,d)})}saveMissing(e,i,r,o,l){var f,h,m,y,v;let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(f=this.services)==null?void 0:f.utils)!=null&&h.hasLoadedNamespace&&!((y=(m=this.services)==null?void 0:m.utils)!=null&&y.hasLoadedNamespace(i))){this.logger.warn(`did not save key "${r}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if((v=this.backend)!=null&&v.create){const S={...u,isUpdate:l},b=this.backend.create.bind(this.backend);if(b.length<6)try{let M;b.length===5?M=b(e,i,r,o,S):M=b(e,i,r,o),M&&typeof M.then=="function"?M.then(O=>d(null,O)).catch(d):d(null,M)}catch(M){d(M)}else b(e,i,r,o,d,S)}!e||!e[0]||this.store.addResource(e[0],i,r,o)}}}const t5=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),me(t[1])&&(e.defaultValue=t[1]),me(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const i=t[3]||t[2];Object.keys(i).forEach(r=>{e[r]=i[r]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),n5=t=>{var e,i;return me(t.ns)&&(t.ns=[t.ns]),me(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),me(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),((i=(e=t.supportedLngs)==null?void 0:e.indexOf)==null?void 0:i.call(e,"cimode"))<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),typeof t.initImmediate=="boolean"&&(t.initAsync=t.initImmediate),t},rc=()=>{},Ck=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(i=>{typeof t[i]=="function"&&(t[i]=t[i].bind(t))})};class mo extends ru{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=n5(e),this.services={},this.logger=Vn,this.modules={external:[]},Ck(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(){var e=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(r=i,i={}),i.defaultNS==null&&i.ns&&(me(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=t5();this.options={...o,...this.options,...n5(i)},this.options.interpolation={...o.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const l=m=>m?typeof m=="function"?new m:m:null;if(!this.options.isClone){this.modules.logger?Vn.init(l(this.modules.logger),this.options):Vn.init(null,this.options);let m;this.modules.formatter?m=this.modules.formatter:m=wk;const y=new Wx(this.options);this.store=new Zx(this.options.resources,this.options);const v=this.services;v.logger=Vn,v.resourceStore=this.store,v.languageUtils=y,v.pluralResolver=new xk(y,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),m&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=l(m),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new yk(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new Sk(l(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",function(S){for(var b=arguments.length,M=new Array(b>1?b-1:0),O=1;O<b;O++)M[O-1]=arguments[O];e.emit(S,...M)}),this.modules.languageDetector&&(v.languageDetector=l(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=l(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new _c(this.services,this.options),this.translator.on("*",function(S){for(var b=arguments.length,M=new Array(b>1?b-1:0),O=1;O<b;O++)M[O-1]=arguments[O];e.emit(S,...M)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,r||(r=rc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(m=>{this[m]=function(){return e.store[m](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(m=>{this[m]=function(){return e.store[m](...arguments),e}});const f=qs(),h=()=>{const m=(y,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),f.resolve(v),r(y,v)};if(this.languages&&!this.isInitialized)return m(null,this.t.bind(this));this.changeLanguage(this.options.lng,m)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),f}loadResources(e){var l,u;let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:rc;const o=me(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const d=[],f=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(y=>{y!=="cimode"&&d.indexOf(y)<0&&d.push(y)})};o?f(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(m=>f(m)),(u=(l=this.options.preload)==null?void 0:l.forEach)==null||u.call(l,h=>f(h)),this.services.backendConnector.load(d,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(h)})}else r(null)}reloadResources(e,i,r){const o=qs();return typeof e=="function"&&(r=e,e=void 0),typeof i=="function"&&(r=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),r||(r=rc),this.services.backendConnector.reload(e,i,l=>{o.resolve(),r(l)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Av.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let i=0;i<this.languages.length;i++){const r=this.languages[i];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(e,i){var r=this;this.isLanguageChangingTo=e;const o=qs();this.emit("languageChanging",e);const l=f=>{this.language=f,this.languages=this.services.languageUtils.toResolveHierarchy(f),this.resolvedLanguage=void 0,this.setResolvedLanguage(f)},u=(f,h)=>{h?(l(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,o.resolve(function(){return r.t(...arguments)}),i&&i(f,function(){return r.t(...arguments)})},d=f=>{var m,y;!e&&!f&&this.services.languageDetector&&(f=[]);const h=me(f)?f:this.services.languageUtils.getBestMatchFromCodes(f);h&&(this.language||l(h),this.translator.language||this.translator.changeLanguage(h),(y=(m=this.services.languageDetector)==null?void 0:m.cacheUserLanguage)==null||y.call(m,h)),this.loadResources(h,v=>{u(v,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?d(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(d):this.services.languageDetector.detect(d):d(e),o}getFixedT(e,i,r){var o=this;const l=function(u,d){let f;if(typeof d!="object"){for(var h=arguments.length,m=new Array(h>2?h-2:0),y=2;y<h;y++)m[y-2]=arguments[y];f=o.options.overloadTranslationOptionHandler([u,d].concat(m))}else f={...d};f.lng=f.lng||l.lng,f.lngs=f.lngs||l.lngs,f.ns=f.ns||l.ns,f.keyPrefix!==""&&(f.keyPrefix=f.keyPrefix||r||l.keyPrefix);const v=o.options.keySeparator||".";let S;return f.keyPrefix&&Array.isArray(u)?S=u.map(b=>`${f.keyPrefix}${v}${b}`):S=f.keyPrefix?`${f.keyPrefix}${v}${u}`:u,o.t(S,f)};return me(e)?l.lng=e:l.lngs=e,l.ns=i,l.keyPrefix=r,l}t(){var o;for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(o=this.translator)==null?void 0:o.translate(...i)}exists(){var o;for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(o=this.translator)==null?void 0:o.exists(...i)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=i.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const u=(d,f)=>{const h=this.services.backendConnector.state[`${d}|${f}`];return h===-1||h===0||h===2};if(i.precheck){const d=i.precheck(this,u);if(d!==void 0)return d}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(r,e)&&(!o||u(l,e)))}loadNamespaces(e,i){const r=qs();return this.options.ns?(me(e)&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{r.resolve(),i&&i(o)}),r):(i&&i(),Promise.resolve())}loadLanguages(e,i){const r=qs();me(e)&&(e=[e]);const o=this.options.preload||[],l=e.filter(u=>o.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return l.length?(this.options.preload=o.concat(l),this.loadResources(u=>{r.resolve(),i&&i(u)}),r):(i&&i(),Promise.resolve())}dir(e){var o,l;if(e||(e=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!e)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=((l=this.services)==null?void 0:l.languageUtils)||new Wx(t5());return i.indexOf(r.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new mo(e,i)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:rc;const r=e.forkResourceStore;r&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},l=new mo(o);if((e.debug!==void 0||e.prefix!==void 0)&&(l.logger=l.logger.clone(e)),["store","services","language"].forEach(d=>{l[d]=this[d]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},r){const d=Object.keys(this.store.data).reduce((f,h)=>(f[h]={...this.store.data[h]},Object.keys(f[h]).reduce((m,y)=>(m[y]={...f[h][y]},m),{})),{});l.store=new Zx(d,o),l.services.resourceStore=l.store}return l.translator=new _c(l.services,o),l.translator.on("*",function(d){for(var f=arguments.length,h=new Array(f>1?f-1:0),m=1;m<f;m++)h[m-1]=arguments[m];l.emit(d,...h)}),l.init(o,i),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Et=mo.createInstance();Et.createInstance=mo.createInstance;Et.createInstance;Et.dir;Et.init;Et.loadResources;Et.reloadResources;Et.use;Et.changeLanguage;Et.getFixedT;Et.t;Et.exists;Et.setDefaultNamespace;Et.hasLoadedNamespace;Et.loadNamespaces;Et.loadLanguages;function xp(t){"@babel/helpers - typeof";return xp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xp(t)}function jv(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":xp(XMLHttpRequest))==="object"}function Tk(t){return!!t&&typeof t.then=="function"}function Ek(t){return Tk(t)?t:Promise.resolve(t)}const Mk="modulepreload",Ak=function(t){return"/"+t},i5={},jk=function(e,i,r){let o=Promise.resolve();if(i&&i.length>0){let u=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=u(i.map(h=>{if(h=Ak(h),h in i5)return;i5[h]=!0;const m=h.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${y}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":Mk,m||(v.as="script"),v.crossOrigin="",v.href=h,f&&v.setAttribute("nonce",f),document.head.appendChild(v),m)return new Promise((S,b)=>{v.addEventListener("load",S),v.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return o.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};function a5(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function r5(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?a5(Object(i),!0).forEach(function(r){Lk(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a5(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function Lk(t,e,i){return(e=Ok(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ok(t){var e=Rk(t,"string");return Sa(e)=="symbol"?e:e+""}function Rk(t,e){if(Sa(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e);if(Sa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Sa(t){"@babel/helpers - typeof";return Sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sa(t)}var Ui=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?Ui=global.fetch:typeof window<"u"&&window.fetch&&(Ui=window.fetch);var go;jv()&&(typeof global<"u"&&global.XMLHttpRequest?go=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(go=window.XMLHttpRequest));var Uc;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Uc=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Uc=window.ActiveXObject));typeof Ui!="function"&&(Ui=void 0);if(!Ui&&!go&&!Uc)try{jk(()=>import("./browser-ponyfill-BT0h7yrG.js").then(t=>t.b),[]).then(function(t){Ui=t.default}).catch(function(){})}catch{}var yp=function(e,i){if(i&&Sa(i)==="object"){var r="";for(var o in i)r+="&"+encodeURIComponent(o)+"="+encodeURIComponent(i[o]);if(!r)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+r.slice(1)}return e},s5=function(e,i,r,o){var l=function(f){if(!f.ok)return r(f.statusText||"Error",{status:f.status});f.text().then(function(h){r(null,{status:f.status,data:h})}).catch(r)};if(o){var u=o(e,i);if(u instanceof Promise){u.then(l).catch(r);return}}typeof fetch=="function"?fetch(e,i).then(l).catch(r):Ui(e,i).then(l).catch(r)},o5=!1,Dk=function(e,i,r,o){e.queryStringParams&&(i=yp(i,e.queryStringParams));var l=r5({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),r&&(l["Content-Type"]="application/json");var u=typeof e.requestOptions=="function"?e.requestOptions(r):e.requestOptions,d=r5({method:r?"POST":"GET",body:r?e.stringify(r):void 0,headers:l},o5?{}:u),f=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{s5(i,d,o,f)}catch(h){if(!u||Object.keys(u).length===0||!h.message||h.message.indexOf("not implemented")<0)return o(h);try{Object.keys(u).forEach(function(m){delete d[m]}),s5(i,d,o,f),o5=!0}catch(m){o(m)}}},Hk=function(e,i,r,o){r&&Sa(r)==="object"&&(r=yp("",r).slice(1)),e.queryStringParams&&(i=yp(i,e.queryStringParams));try{var l=go?new go:new Uc("MSXML2.XMLHTTP.3.0");l.open(r?"POST":"GET",i,1),e.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!e.withCredentials,r&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var u=e.customHeaders;if(u=typeof u=="function"?u():u,u)for(var d in u)l.setRequestHeader(d,u[d]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(r)}catch(f){console&&console.log(f)}},Vk=function(e,i,r,o){if(typeof r=="function"&&(o=r,r=void 0),o=o||function(){},Ui&&i.indexOf("file:")!==0)return Dk(e,i,r,o);if(jv()||typeof ActiveXObject=="function")return Hk(e,i,r,o);o(new Error("No fetch and no xhr implementation found!"))};function Or(t){"@babel/helpers - typeof";return Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Or(t)}function l5(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function A0(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?l5(Object(i),!0).forEach(function(r){Lv(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l5(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function kk(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function zk(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Ov(r.key),r)}}function Pk(t,e,i){return e&&zk(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Lv(t,e,i){return(e=Ov(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ov(t){var e=Nk(t,"string");return Or(e)=="symbol"?e:e+""}function Nk(t,e){if(Or(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e);if(Or(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Bk=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(i){return JSON.parse(i)},stringify:JSON.stringify,parsePayload:function(i,r,o){return Lv({},r,o||"")},parseLoadPayload:function(i,r){},request:Vk,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Rv=function(){function t(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};kk(this,t),this.services=e,this.options=i,this.allOptions=r,this.type="backend",this.init(e,i,r)}return Pk(t,[{key:"init",value:function(i){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=i,this.options=A0(A0(A0({},Bk()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var u=setInterval(function(){return r.reload()},this.options.reloadInterval);Or(u)==="object"&&typeof u.unref=="function"&&u.unref()}}},{key:"readMulti",value:function(i,r,o){this._readAny(i,i,r,r,o)}},{key:"read",value:function(i,r,o){this._readAny([i],i,[r],r,o)}},{key:"_readAny",value:function(i,r,o,l,u){var d=this,f=this.options.loadPath;typeof this.options.loadPath=="function"&&(f=this.options.loadPath(i,o)),f=Ek(f),f.then(function(h){if(!h)return u(null,{});var m=d.services.interpolator.interpolate(h,{lng:i.join("+"),ns:o.join("+")});d.loadUrl(m,u,r,l)})}},{key:"loadUrl",value:function(i,r,o,l){var u=this,d=typeof o=="string"?[o]:o,f=typeof l=="string"?[l]:l,h=this.options.parseLoadPayload(d,f);this.options.request(this.options,i,h,function(m,y){if(y&&(y.status>=500&&y.status<600||!y.status))return r("failed loading "+i+"; status code: "+y.status,!0);if(y&&y.status>=400&&y.status<500)return r("failed loading "+i+"; status code: "+y.status,!1);if(!y&&m&&m.message){var v=m.message.toLowerCase(),S=["failed","fetch","network","load"].find(function(O){return v.indexOf(O)>-1});if(S)return r("failed loading "+i+": "+m.message,!0)}if(m)return r(m,!1);var b,M;try{typeof y.data=="string"?b=u.options.parse(y.data,o,l):b=y.data}catch{M="failed parsing "+i+" to json"}if(M)return r(M,!1);r(null,b)})}},{key:"create",value:function(i,r,o,l,u){var d=this;if(this.options.addPath){typeof i=="string"&&(i=[i]);var f=this.options.parsePayload(r,o,l),h=0,m=[],y=[];i.forEach(function(v){var S=d.options.addPath;typeof d.options.addPath=="function"&&(S=d.options.addPath(v,r));var b=d.services.interpolator.interpolate(S,{lng:v,ns:r});d.options.request(d.options,b,f,function(M,O){h+=1,m.push(M),y.push(O),h===i.length&&typeof u=="function"&&u(m,y)})})}}},{key:"reload",value:function(){var i=this,r=this.services,o=r.backendConnector,l=r.languageUtils,u=r.logger,d=o.language;if(!(d&&d.toLowerCase()==="cimode")){var f=[],h=function(y){var v=l.toResolveHierarchy(y);v.forEach(function(S){f.indexOf(S)<0&&f.push(S)})};h(d),this.allOptions.preload&&this.allOptions.preload.forEach(function(m){return h(m)}),f.forEach(function(m){i.allOptions.ns.forEach(function(y){o.read(m,y,"read",null,null,function(v,S){v&&u.warn("loading namespace ".concat(y," for language ").concat(m," failed"),v),!v&&S&&u.log("loaded namespace ".concat(y," for language ").concat(m),S),o.loaded("".concat(m,"|").concat(y),v,S)})})})}}}])}();Rv.type="backend";const{slice:$k,forEach:_k}=[];function Uk(t){return _k.call($k.call(arguments,1),e=>{if(e)for(const i in e)t[i]===void 0&&(t[i]=e[i])}),t}function Ik(t){return typeof t!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(i=>i.test(t))}const c5=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Gk=function(t,e){const r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(e);let l=`${t}=${o}`;if(r.maxAge>0){const u=r.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(u)}`}if(r.domain){if(!c5.test(r.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${r.domain}`}if(r.path){if(!c5.test(r.path))throw new TypeError("option path is invalid");l+=`; Path=${r.path}`}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${r.expires.toUTCString()}`}if(r.httpOnly&&(l+="; HttpOnly"),r.secure&&(l+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(l+="; Partitioned"),l},u5={create(t,e,i,r){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};i&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+i*60*1e3)),r&&(o.domain=r),document.cookie=Gk(t,e,o)},read(t){const e=`${t}=`,i=document.cookie.split(";");for(let r=0;r<i.length;r++){let o=i[r];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(e)===0)return o.substring(e.length,o.length)}return null},remove(t,e){this.create(t,"",-1,e)}};var qk={name:"cookie",lookup(t){let{lookupCookie:e}=t;if(e&&typeof document<"u")return u5.read(e)||void 0},cacheUserLanguage(t,e){let{lookupCookie:i,cookieMinutes:r,cookieDomain:o,cookieOptions:l}=e;i&&typeof document<"u"&&u5.create(i,t,r,o,l)}},Yk={name:"querystring",lookup(t){var r;let{lookupQuerystring:e}=t,i;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((r=window.location.hash)==null?void 0:r.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let d=0;d<u.length;d++){const f=u[d].indexOf("=");f>0&&u[d].substring(0,f)===e&&(i=u[d].substring(f+1))}}return i}},Fk={name:"hash",lookup(t){var o;let{lookupHash:e,lookupFromHashIndex:i}=t,r;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const u=l.substring(1);if(e){const d=u.split("&");for(let f=0;f<d.length;f++){const h=d[f].indexOf("=");h>0&&d[f].substring(0,h)===e&&(r=d[f].substring(h+1))}}if(r)return r;if(!r&&i>-1){const d=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(d)?(o=d[typeof i=="number"?i:0])==null?void 0:o.replace("/",""):void 0}}}return r}};let dr=null;const d5=()=>{if(dr!==null)return dr;try{if(dr=typeof window<"u"&&window.localStorage!==null,!dr)return!1;const t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{dr=!1}return dr};var Zk={name:"localStorage",lookup(t){let{lookupLocalStorage:e}=t;if(e&&d5())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupLocalStorage:i}=e;i&&d5()&&window.localStorage.setItem(i,t)}};let fr=null;const f5=()=>{if(fr!==null)return fr;try{if(fr=typeof window<"u"&&window.sessionStorage!==null,!fr)return!1;const t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{fr=!1}return fr};var Xk={name:"sessionStorage",lookup(t){let{lookupSessionStorage:e}=t;if(e&&f5())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupSessionStorage:i}=e;i&&f5()&&window.sessionStorage.setItem(i,t)}},Kk={name:"navigator",lookup(t){const e=[];if(typeof navigator<"u"){const{languages:i,userLanguage:r,language:o}=navigator;if(i)for(let l=0;l<i.length;l++)e.push(i[l]);r&&e.push(r),o&&e.push(o)}return e.length>0?e:void 0}},Wk={name:"htmlTag",lookup(t){let{htmlTag:e}=t,i;const r=e||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(i=r.getAttribute("lang")),i}},Qk={name:"path",lookup(t){var o;let{lookupFromPathIndex:e}=t;if(typeof window>"u")return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(i)?(o=i[typeof e=="number"?e:0])==null?void 0:o.replace("/",""):void 0}},Jk={name:"subdomain",lookup(t){var o,l;let{lookupFromSubdomainIndex:e}=t;const i=typeof e=="number"?e+1:1,r=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(r)return r[i]}};let Dv=!1;try{document.cookie,Dv=!0}catch{}const Hv=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Dv||Hv.splice(1,1);const ez=()=>({order:Hv,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:t=>t});class Vv{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,i)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Uk(i,this.options||{},ez()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(qk),this.addDetector(Yk),this.addDetector(Zk),this.addDetector(Xk),this.addDetector(Kk),this.addDetector(Wk),this.addDetector(Qk),this.addDetector(Jk),this.addDetector(Fk)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,i=[];return e.forEach(r=>{if(this.detectors[r]){let o=this.detectors[r].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(i=i.concat(o))}}),i=i.filter(r=>r!=null&&!Ik(r)).map(r=>this.options.convertDetectedLanguage(r)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}cacheUserLanguage(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;i&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||i.forEach(r=>{this.detectors[r]&&this.detectors[r].cacheUserLanguage(e,this.options)}))}}Vv.type="languageDetector";Et.use(Rv).use(Vv).use(fj).init({supportedLngs:["en","ru","es","uk"],fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const tz=R.createContext(void 0),nz=({children:t})=>{const{i18n:e}=yh(),i=r=>{e.changeLanguage(r).then(()=>{window.location.reload()})};return x.jsx(tz.Provider,{value:{language:e.language,setLanguage:i},children:t})};h9.createRoot(document.getElementById("root")).render(x.jsxs(Le.StrictMode,{children:[x.jsx(Db,{styles:Nb}),x.jsx(Rw,{basename:"/",children:x.jsx(nz,{children:x.jsx(rk,{})})})]}));export{iz as c,Ic as g};
