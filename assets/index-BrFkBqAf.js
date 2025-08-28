function t9(t,e){for(var i=0;i<e.length;i++){const r=e[i];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();var jk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Uc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vf={exports:{}},Ps={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function n9(){if(Ig)return Ps;Ig=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var d in o)d!=="key"&&(l[d]=o[d])}else l=o;return o=l.ref,{$$typeof:t,type:r,key:u,ref:o!==void 0?o:null,props:l}}return Ps.Fragment=e,Ps.jsx=i,Ps.jsxs=i,Ps}var qg;function i9(){return qg||(qg=1,vf.exports=n9()),vf.exports}var y=i9(),wf={exports:{}},Ns={},bf={exports:{}},Sf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function a9(){return Yg||(Yg=1,function(t){function e(B,K){var W=B.length;B.push(K);e:for(;0<W;){var ee=W-1>>>1,H=B[ee];if(0<o(H,K))B[ee]=K,B[W]=H,W=ee;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],W=B.pop();if(W!==K){B[0]=W;e:for(var ee=0,H=B.length,Z=H>>>1;ee<Z;){var ne=2*(ee+1)-1,ae=B[ne],ce=ne+1,we=B[ce];if(0>o(ae,W))ce<H&&0>o(we,ae)?(B[ee]=we,B[ce]=W,ee=ce):(B[ee]=ae,B[ne]=W,ee=ne);else if(ce<H&&0>o(we,W))B[ee]=we,B[ce]=W,ee=ce;else break e}}return K}function o(B,K){var W=B.sortIndex-K.sortIndex;return W!==0?W:B.id-K.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();t.unstable_now=function(){return u.now()-d}}var f=[],p=[],m=1,x=null,v=3,S=!1,b=!1,E=!1,O=!1,j=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=B)r(p),K.sortIndex=K.expirationTime,e(f,K);else break;K=i(p)}}function L(B){if(E=!1,D(B),!b)if(i(f)!==null)b=!0,P||(P=!0,te());else{var K=i(p);K!==null&&re(L,K.startTime-B)}}var P=!1,k=-1,_=5,$=-1;function Y(){return O?!0:!(t.unstable_now()-$<_)}function F(){if(O=!1,P){var B=t.unstable_now();$=B;var K=!0;try{e:{b=!1,E&&(E=!1,T(k),k=-1),S=!0;var W=v;try{t:{for(D(B),x=i(f);x!==null&&!(x.expirationTime>B&&Y());){var ee=x.callback;if(typeof ee=="function"){x.callback=null,v=x.priorityLevel;var H=ee(x.expirationTime<=B);if(B=t.unstable_now(),typeof H=="function"){x.callback=H,D(B),K=!0;break t}x===i(f)&&r(f),D(B)}else r(f);x=i(f)}if(x!==null)K=!0;else{var Z=i(p);Z!==null&&re(L,Z.startTime-B),K=!1}}break e}finally{x=null,v=W,S=!1}K=void 0}}finally{K?te():P=!1}}}var te;if(typeof C=="function")te=function(){C(F)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,oe=ie.port2;ie.port1.onmessage=F,te=function(){oe.postMessage(null)}}else te=function(){j(F,0)};function re(B,K){k=j(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_next=function(B){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var W=v;v=K;try{return B()}finally{v=W}},t.unstable_requestPaint=function(){O=!0},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=v;v=B;try{return K()}finally{v=W}},t.unstable_scheduleCallback=function(B,K,W){var ee=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ee+W:ee):W=ee,B){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=W+H,B={id:m++,callback:K,priorityLevel:B,startTime:W,expirationTime:H,sortIndex:-1},W>ee?(B.sortIndex=W,e(p,B),i(f)===null&&B===i(p)&&(E?(T(k),k=-1):E=!0,re(L,W-ee))):(B.sortIndex=H,e(f,B),b||S||(b=!0,P||(P=!0,te()))),B},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(B){var K=v;return function(){var W=v;v=K;try{return B.apply(this,arguments)}finally{v=W}}}}(Sf)),Sf}var Fg;function r9(){return Fg||(Fg=1,bf.exports=a9()),bf.exports}var Cf={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function s9(){if(Zg)return ge;Zg=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function v(H){return H===null||typeof H!="object"?null:(H=x&&H[x]||H["@@iterator"],typeof H=="function"?H:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function O(H,Z,ne){this.props=H,this.context=Z,this.refs=E,this.updater=ne||S}O.prototype.isReactComponent={},O.prototype.setState=function(H,Z){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,Z,"setState")},O.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function j(){}j.prototype=O.prototype;function T(H,Z,ne){this.props=H,this.context=Z,this.refs=E,this.updater=ne||S}var C=T.prototype=new j;C.constructor=T,b(C,O.prototype),C.isPureReactComponent=!0;var D=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function k(H,Z,ne,ae,ce,we){return ne=we.ref,{$$typeof:t,type:H,key:Z,ref:ne!==void 0?ne:null,props:we}}function _(H,Z){return k(H.type,Z,void 0,void 0,void 0,H.props)}function $(H){return typeof H=="object"&&H!==null&&H.$$typeof===t}function Y(H){var Z={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(ne){return Z[ne]})}var F=/\/+/g;function te(H,Z){return typeof H=="object"&&H!==null&&H.key!=null?Y(""+H.key):Z.toString(36)}function ie(){}function oe(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(ie,ie):(H.status="pending",H.then(function(Z){H.status==="pending"&&(H.status="fulfilled",H.value=Z)},function(Z){H.status==="pending"&&(H.status="rejected",H.reason=Z)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function re(H,Z,ne,ae,ce){var we=typeof H;(we==="undefined"||we==="boolean")&&(H=null);var de=!1;if(H===null)de=!0;else switch(we){case"bigint":case"string":case"number":de=!0;break;case"object":switch(H.$$typeof){case t:case e:de=!0;break;case m:return de=H._init,re(de(H._payload),Z,ne,ae,ce)}}if(de)return ce=ce(H),de=ae===""?"."+te(H,0):ae,D(ce)?(ne="",de!=null&&(ne=de.replace(F,"$&/")+"/"),re(ce,Z,ne,"",function(yt){return yt})):ce!=null&&($(ce)&&(ce=_(ce,ne+(ce.key==null||H&&H.key===ce.key?"":(""+ce.key).replace(F,"$&/")+"/")+de)),Z.push(ce)),1;de=0;var st=ae===""?".":ae+":";if(D(H))for(var Oe=0;Oe<H.length;Oe++)ae=H[Oe],we=st+te(ae,Oe),de+=re(ae,Z,ne,we,ce);else if(Oe=v(H),typeof Oe=="function")for(H=Oe.call(H),Oe=0;!(ae=H.next()).done;)ae=ae.value,we=st+te(ae,Oe++),de+=re(ae,Z,ne,we,ce);else if(we==="object"){if(typeof H.then=="function")return re(oe(H),Z,ne,ae,ce);throw Z=String(H),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return de}function B(H,Z,ne){if(H==null)return H;var ae=[],ce=0;return re(H,ae,"","",function(we){return Z.call(ne,we,ce++)}),ae}function K(H){if(H._status===-1){var Z=H._result;Z=Z(),Z.then(function(ne){(H._status===0||H._status===-1)&&(H._status=1,H._result=ne)},function(ne){(H._status===0||H._status===-1)&&(H._status=2,H._result=ne)}),H._status===-1&&(H._status=0,H._result=Z)}if(H._status===1)return H._result.default;throw H._result}var W=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function ee(){}return ge.Children={map:B,forEach:function(H,Z,ne){B(H,function(){Z.apply(this,arguments)},ne)},count:function(H){var Z=0;return B(H,function(){Z++}),Z},toArray:function(H){return B(H,function(Z){return Z})||[]},only:function(H){if(!$(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},ge.Component=O,ge.Fragment=i,ge.Profiler=o,ge.PureComponent=T,ge.StrictMode=r,ge.Suspense=f,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ge.__COMPILER_RUNTIME={__proto__:null,c:function(H){return L.H.useMemoCache(H)}},ge.cache=function(H){return function(){return H.apply(null,arguments)}},ge.cloneElement=function(H,Z,ne){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var ae=b({},H.props),ce=H.key,we=void 0;if(Z!=null)for(de in Z.ref!==void 0&&(we=void 0),Z.key!==void 0&&(ce=""+Z.key),Z)!P.call(Z,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&Z.ref===void 0||(ae[de]=Z[de]);var de=arguments.length-2;if(de===1)ae.children=ne;else if(1<de){for(var st=Array(de),Oe=0;Oe<de;Oe++)st[Oe]=arguments[Oe+2];ae.children=st}return k(H.type,ce,void 0,void 0,we,ae)},ge.createContext=function(H){return H={$$typeof:u,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:l,_context:H},H},ge.createElement=function(H,Z,ne){var ae,ce={},we=null;if(Z!=null)for(ae in Z.key!==void 0&&(we=""+Z.key),Z)P.call(Z,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ce[ae]=Z[ae]);var de=arguments.length-2;if(de===1)ce.children=ne;else if(1<de){for(var st=Array(de),Oe=0;Oe<de;Oe++)st[Oe]=arguments[Oe+2];ce.children=st}if(H&&H.defaultProps)for(ae in de=H.defaultProps,de)ce[ae]===void 0&&(ce[ae]=de[ae]);return k(H,we,void 0,void 0,null,ce)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(H){return{$$typeof:d,render:H}},ge.isValidElement=$,ge.lazy=function(H){return{$$typeof:m,_payload:{_status:-1,_result:H},_init:K}},ge.memo=function(H,Z){return{$$typeof:p,type:H,compare:Z===void 0?null:Z}},ge.startTransition=function(H){var Z=L.T,ne={};L.T=ne;try{var ae=H(),ce=L.S;ce!==null&&ce(ne,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(ee,W)}catch(we){W(we)}finally{L.T=Z}},ge.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ge.use=function(H){return L.H.use(H)},ge.useActionState=function(H,Z,ne){return L.H.useActionState(H,Z,ne)},ge.useCallback=function(H,Z){return L.H.useCallback(H,Z)},ge.useContext=function(H){return L.H.useContext(H)},ge.useDebugValue=function(){},ge.useDeferredValue=function(H,Z){return L.H.useDeferredValue(H,Z)},ge.useEffect=function(H,Z,ne){var ae=L.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(H,Z)},ge.useId=function(){return L.H.useId()},ge.useImperativeHandle=function(H,Z,ne){return L.H.useImperativeHandle(H,Z,ne)},ge.useInsertionEffect=function(H,Z){return L.H.useInsertionEffect(H,Z)},ge.useLayoutEffect=function(H,Z){return L.H.useLayoutEffect(H,Z)},ge.useMemo=function(H,Z){return L.H.useMemo(H,Z)},ge.useOptimistic=function(H,Z){return L.H.useOptimistic(H,Z)},ge.useReducer=function(H,Z,ne){return L.H.useReducer(H,Z,ne)},ge.useRef=function(H){return L.H.useRef(H)},ge.useState=function(H){return L.H.useState(H)},ge.useSyncExternalStore=function(H,Z,ne){return L.H.useSyncExternalStore(H,Z,ne)},ge.useTransition=function(){return L.H.useTransition()},ge.version="19.1.1",ge}var Xg;function yh(){return Xg||(Xg=1,Cf.exports=s9()),Cf.exports}var Tf={exports:{}},bt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function o9(){if(Kg)return bt;Kg=1;var t=yh();function e(f){var p="https://react.dev/errors/"+f;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+f+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(f,p,m){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:f,containerInfo:p,implementation:m}}var u=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(f,p){if(f==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bt.createPortal=function(f,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return l(f,p,null,m)},bt.flushSync=function(f){var p=u.T,m=r.p;try{if(u.T=null,r.p=2,f)return f()}finally{u.T=p,r.p=m,r.d.f()}},bt.preconnect=function(f,p){typeof f=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(f,p))},bt.prefetchDNS=function(f){typeof f=="string"&&r.d.D(f)},bt.preinit=function(f,p){if(typeof f=="string"&&p&&typeof p.as=="string"){var m=p.as,x=d(m,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?r.d.S(f,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:S}):m==="script"&&r.d.X(f,{crossOrigin:x,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bt.preinitModule=function(f,p){if(typeof f=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=d(p.as,p.crossOrigin);r.d.M(f,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(f)},bt.preload=function(f,p){if(typeof f=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,x=d(m,p.crossOrigin);r.d.L(f,m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bt.preloadModule=function(f,p){if(typeof f=="string")if(p){var m=d(p.as,p.crossOrigin);r.d.m(f,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(f)},bt.requestFormReset=function(f){r.d.r(f)},bt.unstable_batchedUpdates=function(f,p){return f(p)},bt.useFormState=function(f,p,m){return u.H.useFormState(f,p,m)},bt.useFormStatus=function(){return u.H.useHostTransitionStatus()},bt.version="19.1.1",bt}var Wg;function l9(){if(Wg)return Tf.exports;Wg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Tf.exports=o9(),Tf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function c9(){if(Qg)return Ns;Qg=1;var t=r9(),e=yh(),i=l9();function r(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,s=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(s=a.return),n=a.return;while(n)}return a.tag===3?s:null}function u(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(r(188))}function f(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(r(188));return a!==n?null:n}for(var s=n,c=a;;){var h=s.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===s)return d(h),n;if(g===c)return d(h),a;g=g.sibling}throw Error(r(188))}if(s.return!==c.return)s=h,c=g;else{for(var w=!1,A=h.child;A;){if(A===s){w=!0,s=h,c=g;break}if(A===c){w=!0,c=h,s=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===s){w=!0,s=g,c=h;break}if(A===c){w=!0,c=g,s=h;break}A=A.sibling}if(!w)throw Error(r(189))}}if(s.alternate!==c)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?n:a}function p(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=p(n),a!==null)return a;n=n.sibling}return null}var m=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),T=Symbol.for("react.consumer"),C=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Symbol.for("react.client.reference");function oe(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ie?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case b:return"Fragment";case O:return"Profiler";case E:return"StrictMode";case L:return"Suspense";case P:return"SuspenseList";case $:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case C:return(n.displayName||"Context")+".Provider";case T:return(n._context.displayName||"Context")+".Consumer";case D:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case k:return a=n.displayName||null,a!==null?a:oe(n.type)||"Memo";case _:a=n._payload,n=n._init;try{return oe(n(a))}catch{}}return null}var re=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ee=[],H=-1;function Z(n){return{current:n}}function ne(n){0>H||(n.current=ee[H],ee[H]=null,H--)}function ae(n,a){H++,ee[H]=n.current,n.current=a}var ce=Z(null),we=Z(null),de=Z(null),st=Z(null);function Oe(n,a){switch(ae(de,a),ae(we,n),ae(ce,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?yg(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=yg(a),n=vg(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(ce),ae(ce,n)}function yt(){ne(ce),ne(we),ne(de)}function qi(n){n.memoizedState!==null&&ae(st,n);var a=ce.current,s=vg(a,n.type);a!==s&&(ae(we,n),ae(ce,s))}function $n(n){we.current===n&&(ne(ce),ne(we)),st.current===n&&(ne(st),Ds._currentValue=W)}var Wt=Object.prototype.hasOwnProperty,ru=t.unstable_scheduleCallback,su=t.unstable_cancelCallback,Hv=t.unstable_shouldYield,Vv=t.unstable_requestPaint,Cn=t.unstable_now,kv=t.unstable_getCurrentPriorityLevel,Qp=t.unstable_ImmediatePriority,Jp=t.unstable_UserBlockingPriority,Mo=t.unstable_NormalPriority,zv=t.unstable_LowPriority,e1=t.unstable_IdlePriority,Pv=t.log,Nv=t.unstable_setDisableYieldValue,$r=null,Pt=null;function ui(n){if(typeof Pv=="function"&&Nv(n),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode($r,n)}catch{}}var Nt=Math.clz32?Math.clz32:_v,Bv=Math.log,$v=Math.LN2;function _v(n){return n>>>=0,n===0?32:31-(Bv(n)/$v|0)|0}var Ao=256,jo=4194304;function Yi(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Lo(n,a,s){var c=n.pendingLanes;if(c===0)return 0;var h=0,g=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var A=c&134217727;return A!==0?(c=A&~g,c!==0?h=Yi(c):(w&=A,w!==0?h=Yi(w):s||(s=A&~n,s!==0&&(h=Yi(s))))):(A=c&~g,A!==0?h=Yi(A):w!==0?h=Yi(w):s||(s=c&~n,s!==0&&(h=Yi(s)))),h===0?0:a!==0&&a!==h&&(a&g)===0&&(g=h&-h,s=a&-a,g>=s||g===32&&(s&4194048)!==0)?a:h}function _r(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function Uv(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t1(){var n=Ao;return Ao<<=1,(Ao&4194048)===0&&(Ao=256),n}function n1(){var n=jo;return jo<<=1,(jo&62914560)===0&&(jo=4194304),n}function ou(n){for(var a=[],s=0;31>s;s++)a.push(n);return a}function Ur(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Gv(n,a,s,c,h,g){var w=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var A=n.entanglements,V=n.expirationTimes,G=n.hiddenUpdates;for(s=w&~s;0<s;){var X=31-Nt(s),J=1<<X;A[X]=0,V[X]=-1;var I=G[X];if(I!==null)for(G[X]=null,X=0;X<I.length;X++){var q=I[X];q!==null&&(q.lane&=-536870913)}s&=~J}c!==0&&i1(n,c,0),g!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=g&~(w&~a))}function i1(n,a,s){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-Nt(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194090}function a1(n,a){var s=n.entangledLanes|=a;for(n=n.entanglements;s;){var c=31-Nt(s),h=1<<c;h&a|n[c]&a&&(n[c]|=a),s&=~h}}function lu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function cu(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function r1(){var n=K.p;return n!==0?n:(n=window.event,n===void 0?32:Ng(n.type))}function Iv(n,a){var s=K.p;try{return K.p=n,a()}finally{K.p=s}}var di=Math.random().toString(36).slice(2),vt="__reactFiber$"+di,Lt="__reactProps$"+di,Ca="__reactContainer$"+di,uu="__reactEvents$"+di,qv="__reactListeners$"+di,Yv="__reactHandles$"+di,s1="__reactResources$"+di,Gr="__reactMarker$"+di;function du(n){delete n[vt],delete n[Lt],delete n[uu],delete n[qv],delete n[Yv]}function Ta(n){var a=n[vt];if(a)return a;for(var s=n.parentNode;s;){if(a=s[Ca]||s[vt]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(n=Cg(n);n!==null;){if(s=n[vt])return s;n=Cg(n)}return a}n=s,s=n.parentNode}return null}function Ea(n){if(n=n[vt]||n[Ca]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Ir(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(r(33))}function Ma(n){var a=n[s1];return a||(a=n[s1]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ot(n){n[Gr]=!0}var o1=new Set,l1={};function Fi(n,a){Aa(n,a),Aa(n+"Capture",a)}function Aa(n,a){for(l1[n]=a,n=0;n<a.length;n++)o1.add(a[n])}var Fv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),c1={},u1={};function Zv(n){return Wt.call(u1,n)?!0:Wt.call(c1,n)?!1:Fv.test(n)?u1[n]=!0:(c1[n]=!0,!1)}function Oo(n,a,s){if(Zv(a))if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+s)}}function Ro(n,a,s){if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+s)}}function _n(n,a,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(a,s,""+c)}}var fu,d1;function ja(n){if(fu===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);fu=a&&a[1]||"",d1=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fu+n+d1}var hu=!1;function pu(n,a){if(!n||hu)return"";hu=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(q){var I=q}Reflect.construct(n,[],J)}else{try{J.call()}catch(q){I=q}n.call(J.prototype)}}else{try{throw Error()}catch(q){I=q}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(q){if(q&&I&&typeof q.stack=="string")return[q.stack,I.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),w=g[0],A=g[1];if(w&&A){var V=w.split(`
`),G=A.split(`
`);for(h=c=0;c<V.length&&!V[c].includes("DetermineComponentFrameRoot");)c++;for(;h<G.length&&!G[h].includes("DetermineComponentFrameRoot");)h++;if(c===V.length||h===G.length)for(c=V.length-1,h=G.length-1;1<=c&&0<=h&&V[c]!==G[h];)h--;for(;1<=c&&0<=h;c--,h--)if(V[c]!==G[h]){if(c!==1||h!==1)do if(c--,h--,0>h||V[c]!==G[h]){var X=`
`+V[c].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=c&&0<=h);break}}}finally{hu=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?ja(s):""}function Xv(n){switch(n.tag){case 26:case 27:case 5:return ja(n.type);case 16:return ja("Lazy");case 13:return ja("Suspense");case 19:return ja("SuspenseList");case 0:case 15:return pu(n.type,!1);case 11:return pu(n.type.render,!1);case 1:return pu(n.type,!0);case 31:return ja("Activity");default:return""}}function f1(n){try{var a="";do a+=Xv(n),n=n.return;while(n);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Qt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function h1(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Kv(n){var a=h1(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,g=s.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,a,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Do(n){n._valueTracker||(n._valueTracker=Kv(n))}function p1(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var s=a.getValue(),c="";return n&&(c=h1(n)?n.checked?"true":"false":n.value),n=c,n!==s?(a.setValue(n),!0):!1}function Ho(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Wv=/[\n"\\]/g;function Jt(n){return n.replace(Wv,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function mu(n,a,s,c,h,g,w,A){n.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.type=w:n.removeAttribute("type"),a!=null?w==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+Qt(a)):n.value!==""+Qt(a)&&(n.value=""+Qt(a)):w!=="submit"&&w!=="reset"||n.removeAttribute("value"),a!=null?gu(n,w,Qt(a)):s!=null?gu(n,w,Qt(s)):c!=null&&n.removeAttribute("value"),h==null&&g!=null&&(n.defaultChecked=!!g),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.name=""+Qt(A):n.removeAttribute("name")}function m1(n,a,s,c,h,g,w,A){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),a!=null||s!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;s=s!=null?""+Qt(s):"",a=a!=null?""+Qt(a):s,A||a===n.value||(n.value=a),n.defaultValue=a}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=A?n.checked:!!c,n.defaultChecked=!!c,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(n.name=w)}function gu(n,a,s){a==="number"&&Ho(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function La(n,a,s,c){if(n=n.options,a){a={};for(var h=0;h<s.length;h++)a["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=a.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&c&&(n[s].defaultSelected=!0)}else{for(s=""+Qt(s),a=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}a!==null||n[h].disabled||(a=n[h])}a!==null&&(a.selected=!0)}}function g1(n,a,s){if(a!=null&&(a=""+Qt(a),a!==n.value&&(n.value=a),s==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=s!=null?""+Qt(s):""}function x1(n,a,s,c){if(a==null){if(c!=null){if(s!=null)throw Error(r(92));if(re(c)){if(1<c.length)throw Error(r(93));c=c[0]}s=c}s==null&&(s=""),a=s}s=Qt(a),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function Oa(n,a){if(a){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=a;return}}n.textContent=a}var Qv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function y1(n,a,s){var c=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,s):typeof s!="number"||s===0||Qv.has(a)?a==="float"?n.cssFloat=s:n[a]=(""+s).trim():n[a]=s+"px"}function v1(n,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var h in a)c=a[h],a.hasOwnProperty(h)&&s[h]!==c&&y1(n,h,c)}else for(var g in a)a.hasOwnProperty(g)&&y1(n,g,a[g])}function xu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),e8=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(n){return e8.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var yu=null;function vu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ra=null,Da=null;function w1(n){var a=Ea(n);if(a&&(n=a.stateNode)){var s=n[Lt]||null;e:switch(n=a.stateNode,a.type){case"input":if(mu(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Jt(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var c=s[a];if(c!==n&&c.form===n.form){var h=c[Lt]||null;if(!h)throw Error(r(90));mu(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<s.length;a++)c=s[a],c.form===n.form&&p1(c)}break e;case"textarea":g1(n,s.value,s.defaultValue);break e;case"select":a=s.value,a!=null&&La(n,!!s.multiple,a,!1)}}}var wu=!1;function b1(n,a,s){if(wu)return n(a,s);wu=!0;try{var c=n(a);return c}finally{if(wu=!1,(Ra!==null||Da!==null)&&(vl(),Ra&&(a=Ra,n=Da,Da=Ra=null,w1(a),n)))for(a=0;a<n.length;a++)w1(n[a])}}function qr(n,a){var s=n.stateNode;if(s===null)return null;var c=s[Lt]||null;if(c===null)return null;s=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=!1;if(Un)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){bu=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{bu=!1}var fi=null,Su=null,ko=null;function S1(){if(ko)return ko;var n,a=Su,s=a.length,c,h="value"in fi?fi.value:fi.textContent,g=h.length;for(n=0;n<s&&a[n]===h[n];n++);var w=s-n;for(c=1;c<=w&&a[s-c]===h[g-c];c++);return ko=h.slice(n,1<c?1-c:void 0)}function zo(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Po(){return!0}function C1(){return!1}function Ot(n){function a(s,c,h,g,w){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(s=n[A],this[A]=s?s(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Po:C1,this.isPropagationStopped=C1,this}return m(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),a}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},No=Ot(Zi),Fr=m({},Zi,{view:0,detail:0}),t8=Ot(Fr),Cu,Tu,Zr,Bo=m({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Zr&&(Zr&&n.type==="mousemove"?(Cu=n.screenX-Zr.screenX,Tu=n.screenY-Zr.screenY):Tu=Cu=0,Zr=n),Cu)},movementY:function(n){return"movementY"in n?n.movementY:Tu}}),T1=Ot(Bo),n8=m({},Bo,{dataTransfer:0}),i8=Ot(n8),a8=m({},Fr,{relatedTarget:0}),Eu=Ot(a8),r8=m({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),s8=Ot(r8),o8=m({},Zi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l8=Ot(o8),c8=m({},Zi,{data:0}),E1=Ot(c8),u8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h8(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=f8[n])?!!a[n]:!1}function Mu(){return h8}var p8=m({},Fr,{key:function(n){if(n.key){var a=u8[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=zo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?d8[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(n){return n.type==="keypress"?zo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),m8=Ot(p8),g8=m({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M1=Ot(g8),x8=m({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),y8=Ot(x8),v8=m({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),w8=Ot(v8),b8=m({},Bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),S8=Ot(b8),C8=m({},Zi,{newState:0,oldState:0}),T8=Ot(C8),E8=[9,13,27,32],Au=Un&&"CompositionEvent"in window,Xr=null;Un&&"documentMode"in document&&(Xr=document.documentMode);var M8=Un&&"TextEvent"in window&&!Xr,A1=Un&&(!Au||Xr&&8<Xr&&11>=Xr),j1=" ",L1=!1;function O1(n,a){switch(n){case"keyup":return E8.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R1(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ha=!1;function A8(n,a){switch(n){case"compositionend":return R1(a);case"keypress":return a.which!==32?null:(L1=!0,j1);case"textInput":return n=a.data,n===j1&&L1?null:n;default:return null}}function j8(n,a){if(Ha)return n==="compositionend"||!Au&&O1(n,a)?(n=S1(),ko=Su=fi=null,Ha=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return A1&&a.locale!=="ko"?null:a.data;default:return null}}var L8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function D1(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!L8[n.type]:a==="textarea"}function H1(n,a,s,c){Ra?Da?Da.push(c):Da=[c]:Ra=c,a=El(a,"onChange"),0<a.length&&(s=new No("onChange","change",null,s,c),n.push({event:s,listeners:a}))}var Kr=null,Wr=null;function O8(n){hg(n,0)}function $o(n){var a=Ir(n);if(p1(a))return n}function V1(n,a){if(n==="change")return a}var k1=!1;if(Un){var ju;if(Un){var Lu="oninput"in document;if(!Lu){var z1=document.createElement("div");z1.setAttribute("oninput","return;"),Lu=typeof z1.oninput=="function"}ju=Lu}else ju=!1;k1=ju&&(!document.documentMode||9<document.documentMode)}function P1(){Kr&&(Kr.detachEvent("onpropertychange",N1),Wr=Kr=null)}function N1(n){if(n.propertyName==="value"&&$o(Wr)){var a=[];H1(a,Wr,n,vu(n)),b1(O8,a)}}function R8(n,a,s){n==="focusin"?(P1(),Kr=a,Wr=s,Kr.attachEvent("onpropertychange",N1)):n==="focusout"&&P1()}function D8(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $o(Wr)}function H8(n,a){if(n==="click")return $o(a)}function V8(n,a){if(n==="input"||n==="change")return $o(a)}function k8(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var Bt=typeof Object.is=="function"?Object.is:k8;function Qr(n,a){if(Bt(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var s=Object.keys(n),c=Object.keys(a);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!Wt.call(a,h)||!Bt(n[h],a[h]))return!1}return!0}function B1(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $1(n,a){var s=B1(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=a&&c>=a)return{node:s,offset:a-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=B1(s)}}function _1(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?_1(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function U1(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Ho(n.document);a instanceof n.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)n=a.contentWindow;else break;a=Ho(n.document)}return a}function Ou(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var z8=Un&&"documentMode"in document&&11>=document.documentMode,Va=null,Ru=null,Jr=null,Du=!1;function G1(n,a,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Du||Va==null||Va!==Ho(c)||(c=Va,"selectionStart"in c&&Ou(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Jr&&Qr(Jr,c)||(Jr=c,c=El(Ru,"onSelect"),0<c.length&&(a=new No("onSelect","select",null,a,s),n.push({event:a,listeners:c}),a.target=Va)))}function Xi(n,a){var s={};return s[n.toLowerCase()]=a.toLowerCase(),s["Webkit"+n]="webkit"+a,s["Moz"+n]="moz"+a,s}var ka={animationend:Xi("Animation","AnimationEnd"),animationiteration:Xi("Animation","AnimationIteration"),animationstart:Xi("Animation","AnimationStart"),transitionrun:Xi("Transition","TransitionRun"),transitionstart:Xi("Transition","TransitionStart"),transitioncancel:Xi("Transition","TransitionCancel"),transitionend:Xi("Transition","TransitionEnd")},Hu={},I1={};Un&&(I1=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function Ki(n){if(Hu[n])return Hu[n];if(!ka[n])return n;var a=ka[n],s;for(s in a)if(a.hasOwnProperty(s)&&s in I1)return Hu[n]=a[s];return n}var q1=Ki("animationend"),Y1=Ki("animationiteration"),F1=Ki("animationstart"),P8=Ki("transitionrun"),N8=Ki("transitionstart"),B8=Ki("transitioncancel"),Z1=Ki("transitionend"),X1=new Map,Vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vu.push("scrollEnd");function pn(n,a){X1.set(n,a),Fi(a,[n])}var K1=new WeakMap;function en(n,a){if(typeof n=="object"&&n!==null){var s=K1.get(n);return s!==void 0?s:(a={value:n,source:a,stack:f1(a)},K1.set(n,a),a)}return{value:n,source:a,stack:f1(a)}}var tn=[],za=0,ku=0;function _o(){for(var n=za,a=ku=za=0;a<n;){var s=tn[a];tn[a++]=null;var c=tn[a];tn[a++]=null;var h=tn[a];tn[a++]=null;var g=tn[a];if(tn[a++]=null,c!==null&&h!==null){var w=c.pending;w===null?h.next=h:(h.next=w.next,w.next=h),c.pending=h}g!==0&&W1(s,h,g)}}function Uo(n,a,s,c){tn[za++]=n,tn[za++]=a,tn[za++]=s,tn[za++]=c,ku|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function zu(n,a,s,c){return Uo(n,a,s,c),Go(n)}function Pa(n,a){return Uo(n,null,null,a),Go(n)}function W1(n,a,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var h=!1,g=n.return;g!==null;)g.childLanes|=s,c=g.alternate,c!==null&&(c.childLanes|=s),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(h=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,h&&a!==null&&(h=31-Nt(s),n=g.hiddenUpdates,c=n[h],c===null?n[h]=[a]:c.push(a),a.lane=s|536870912),g):null}function Go(n){if(50<Ts)throw Ts=0,Ud=null,Error(r(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var Na={};function $8(n,a,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(n,a,s,c){return new $8(n,a,s,c)}function Pu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Gn(n,a){var s=n.alternate;return s===null?(s=$t(n.tag,a,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=a,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,a=n.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function Q1(n,a){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,a=s.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Io(n,a,s,c,h,g){var w=0;if(c=n,typeof n=="function")Pu(n)&&(w=1);else if(typeof n=="string")w=U7(n,s,ce.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case $:return n=$t(31,s,a,h),n.elementType=$,n.lanes=g,n;case b:return Wi(s.children,h,g,a);case E:w=8,h|=24;break;case O:return n=$t(12,s,a,h|2),n.elementType=O,n.lanes=g,n;case L:return n=$t(13,s,a,h),n.elementType=L,n.lanes=g,n;case P:return n=$t(19,s,a,h),n.elementType=P,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:case C:w=10;break e;case T:w=9;break e;case D:w=11;break e;case k:w=14;break e;case _:w=16,c=null;break e}w=29,s=Error(r(130,n===null?"null":typeof n,"")),c=null}return a=$t(w,s,a,h),a.elementType=n,a.type=c,a.lanes=g,a}function Wi(n,a,s,c){return n=$t(7,n,c,a),n.lanes=s,n}function Nu(n,a,s){return n=$t(6,n,null,a),n.lanes=s,n}function Bu(n,a,s){return a=$t(4,n.children!==null?n.children:[],n.key,a),a.lanes=s,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Ba=[],$a=0,qo=null,Yo=0,nn=[],an=0,Qi=null,In=1,qn="";function Ji(n,a){Ba[$a++]=Yo,Ba[$a++]=qo,qo=n,Yo=a}function J1(n,a,s){nn[an++]=In,nn[an++]=qn,nn[an++]=Qi,Qi=n;var c=In;n=qn;var h=32-Nt(c)-1;c&=~(1<<h),s+=1;var g=32-Nt(a)+h;if(30<g){var w=h-h%5;g=(c&(1<<w)-1).toString(32),c>>=w,h-=w,In=1<<32-Nt(a)+h|s<<h|c,qn=g+n}else In=1<<g|s<<h|c,qn=n}function $u(n){n.return!==null&&(Ji(n,1),J1(n,1,0))}function _u(n){for(;n===qo;)qo=Ba[--$a],Ba[$a]=null,Yo=Ba[--$a],Ba[$a]=null;for(;n===Qi;)Qi=nn[--an],nn[an]=null,qn=nn[--an],nn[an]=null,In=nn[--an],nn[an]=null}var Mt=null,Fe=null,Ee=!1,ea=null,Tn=!1,Uu=Error(r(519));function ta(n){var a=Error(r(418,""));throw ns(en(a,n)),Uu}function e2(n){var a=n.stateNode,s=n.type,c=n.memoizedProps;switch(a[vt]=n,a[Lt]=c,s){case"dialog":Se("cancel",a),Se("close",a);break;case"iframe":case"object":case"embed":Se("load",a);break;case"video":case"audio":for(s=0;s<Ms.length;s++)Se(Ms[s],a);break;case"source":Se("error",a);break;case"img":case"image":case"link":Se("error",a),Se("load",a);break;case"details":Se("toggle",a);break;case"input":Se("invalid",a),m1(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Do(a);break;case"select":Se("invalid",a);break;case"textarea":Se("invalid",a),x1(a,c.value,c.defaultValue,c.children),Do(a)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||c.suppressHydrationWarning===!0||xg(a.textContent,s)?(c.popover!=null&&(Se("beforetoggle",a),Se("toggle",a)),c.onScroll!=null&&Se("scroll",a),c.onScrollEnd!=null&&Se("scrollend",a),c.onClick!=null&&(a.onclick=Ml),a=!0):a=!1,a||ta(n)}function t2(n){for(Mt=n.return;Mt;)switch(Mt.tag){case 5:case 13:Tn=!1;return;case 27:case 3:Tn=!0;return;default:Mt=Mt.return}}function es(n){if(n!==Mt)return!1;if(!Ee)return t2(n),Ee=!0,!1;var a=n.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||rf(n.type,n.memoizedProps)),s=!s),s&&Fe&&ta(n),t2(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(a===0){Fe=gn(n.nextSibling);break e}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;n=n.nextSibling}Fe=null}}else a===27?(a=Fe,ji(n.type)?(n=cf,cf=null,Fe=n):Fe=a):Fe=Mt?gn(n.stateNode.nextSibling):null;return!0}function ts(){Fe=Mt=null,Ee=!1}function n2(){var n=ea;return n!==null&&(Ht===null?Ht=n:Ht.push.apply(Ht,n),ea=null),n}function ns(n){ea===null?ea=[n]:ea.push(n)}var Gu=Z(null),na=null,Yn=null;function hi(n,a,s){ae(Gu,a._currentValue),a._currentValue=s}function Fn(n){n._currentValue=Gu.current,ne(Gu)}function Iu(n,a,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===s)break;n=n.return}}function qu(n,a,s,c){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var g=h.dependencies;if(g!==null){var w=h.child;g=g.firstContext;e:for(;g!==null;){var A=g;g=h;for(var V=0;V<a.length;V++)if(A.context===a[V]){g.lanes|=s,A=g.alternate,A!==null&&(A.lanes|=s),Iu(g.return,s,n),c||(w=null);break e}g=A.next}}else if(h.tag===18){if(w=h.return,w===null)throw Error(r(341));w.lanes|=s,g=w.alternate,g!==null&&(g.lanes|=s),Iu(w,s,n),w=null}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===n){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}}function is(n,a,s,c){n=null;for(var h=a,g=!1;h!==null;){if(!g){if((h.flags&524288)!==0)g=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var w=h.alternate;if(w===null)throw Error(r(387));if(w=w.memoizedProps,w!==null){var A=h.type;Bt(h.pendingProps.value,w.value)||(n!==null?n.push(A):n=[A])}}else if(h===st.current){if(w=h.alternate,w===null)throw Error(r(387));w.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(Ds):n=[Ds])}h=h.return}n!==null&&qu(a,n,s,c),a.flags|=262144}function Fo(n){for(n=n.firstContext;n!==null;){if(!Bt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ia(n){na=n,Yn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function wt(n){return i2(na,n)}function Zo(n,a){return na===null&&ia(n),i2(n,a)}function i2(n,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},Yn===null){if(n===null)throw Error(r(308));Yn=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Yn=Yn.next=a;return s}var _8=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(s){return s()})}},U8=t.unstable_scheduleCallback,G8=t.unstable_NormalPriority,at={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new _8,data:new Map,refCount:0}}function as(n){n.refCount--,n.refCount===0&&U8(G8,function(){n.controller.abort()})}var rs=null,Fu=0,_a=0,Ua=null;function I8(n,a){if(rs===null){var s=rs=[];Fu=0,_a=Xd(),Ua={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Fu++,a.then(a2,a2),a}function a2(){if(--Fu===0&&rs!==null){Ua!==null&&(Ua.status="fulfilled");var n=rs;rs=null,_a=0,Ua=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function q8(n,a){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var h=0;h<s.length;h++)(0,s[h])(a)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var r2=B.S;B.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&I8(n,a),r2!==null&&r2(n,a)};var aa=Z(null);function Zu(){var n=aa.current;return n!==null?n:Be.pooledCache}function Xo(n,a){a===null?ae(aa,aa.current):ae(aa,a.pool)}function s2(){var n=Zu();return n===null?null:{parent:at._currentValue,pool:n}}var ss=Error(r(460)),o2=Error(r(474)),Ko=Error(r(542)),Xu={then:function(){}};function l2(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Wo(){}function c2(n,a,s){switch(s=n[s],s===void 0?n.push(a):s!==a&&(a.then(Wo,Wo),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,d2(n),n;default:if(typeof a.status=="string")a.then(Wo,Wo);else{if(n=Be,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=c}},function(c){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,d2(n),n}throw os=a,ss}}var os=null;function u2(){if(os===null)throw Error(r(459));var n=os;return os=null,n}function d2(n){if(n===ss||n===Ko)throw Error(r(483))}var pi=!1;function Ku(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function mi(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function gi(n,a,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(He&2)!==0){var h=c.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a,a=Go(n),W1(n,null,s),a}return Uo(n,c,a,s),Go(n)}function ls(n,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,a1(n,s)}}function Qu(n,a){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var w={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};g===null?h=g=w:g=g.next=w,s=s.next}while(s!==null);g===null?h=g=a:g=g.next=a}else h=g=a;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=a:n.next=a,s.lastBaseUpdate=a}var Ju=!1;function cs(){if(Ju){var n=Ua;if(n!==null)throw n}}function us(n,a,s,c){Ju=!1;var h=n.updateQueue;pi=!1;var g=h.firstBaseUpdate,w=h.lastBaseUpdate,A=h.shared.pending;if(A!==null){h.shared.pending=null;var V=A,G=V.next;V.next=null,w===null?g=G:w.next=G,w=V;var X=n.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==w&&(A===null?X.firstBaseUpdate=G:A.next=G,X.lastBaseUpdate=V))}if(g!==null){var J=h.baseState;w=0,X=G=V=null,A=g;do{var I=A.lane&-536870913,q=I!==A.lane;if(q?(Ce&I)===I:(c&I)===I){I!==0&&I===_a&&(Ju=!0),X!==null&&(X=X.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var he=n,ue=A;I=a;var Pe=s;switch(ue.tag){case 1:if(he=ue.payload,typeof he=="function"){J=he.call(Pe,J,I);break e}J=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=ue.payload,I=typeof he=="function"?he.call(Pe,J,I):he,I==null)break e;J=m({},J,I);break e;case 2:pi=!0}}I=A.callback,I!==null&&(n.flags|=64,q&&(n.flags|=8192),q=h.callbacks,q===null?h.callbacks=[I]:q.push(I))}else q={lane:I,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(G=X=q,V=J):X=X.next=q,w|=I;if(A=A.next,A===null){if(A=h.shared.pending,A===null)break;q=A,A=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);X===null&&(V=J),h.baseState=V,h.firstBaseUpdate=G,h.lastBaseUpdate=X,g===null&&(h.shared.lanes=0),Ti|=w,n.lanes=w,n.memoizedState=J}}function f2(n,a){if(typeof n!="function")throw Error(r(191,n));n.call(a)}function h2(n,a){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)f2(s[n],a)}var Ga=Z(null),Qo=Z(0);function p2(n,a){n=ei,ae(Qo,n),ae(Ga,a),ei=n|a.baseLanes}function ed(){ae(Qo,ei),ae(Ga,Ga.current)}function td(){ei=Qo.current,ne(Ga),ne(Qo)}var xi=0,ye=null,ke=null,Je=null,Jo=!1,Ia=!1,ra=!1,el=0,ds=0,qa=null,Y8=0;function Ke(){throw Error(r(321))}function nd(n,a){if(a===null)return!1;for(var s=0;s<a.length&&s<n.length;s++)if(!Bt(n[s],a[s]))return!1;return!0}function id(n,a,s,c,h,g){return xi=g,ye=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,B.H=n===null||n.memoizedState===null?W2:Q2,ra=!1,g=s(c,h),ra=!1,Ia&&(g=g2(a,s,c,h)),m2(n),g}function m2(n){B.H=sl;var a=ke!==null&&ke.next!==null;if(xi=0,Je=ke=ye=null,Jo=!1,ds=0,qa=null,a)throw Error(r(300));n===null||lt||(n=n.dependencies,n!==null&&Fo(n)&&(lt=!0))}function g2(n,a,s,c){ye=n;var h=0;do{if(Ia&&(qa=null),ds=0,Ia=!1,25<=h)throw Error(r(301));if(h+=1,Je=ke=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}B.H=J8,g=a(s,c)}while(Ia);return g}function F8(){var n=B.H,a=n.useState()[0];return a=typeof a.then=="function"?fs(a):a,n=n.useState()[0],(ke!==null?ke.memoizedState:null)!==n&&(ye.flags|=1024),a}function ad(){var n=el!==0;return el=0,n}function rd(n,a,s){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~s}function sd(n){if(Jo){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Jo=!1}xi=0,Je=ke=ye=null,Ia=!1,ds=el=0,qa=null}function Rt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ye.memoizedState=Je=n:Je=Je.next=n,Je}function et(){if(ke===null){var n=ye.alternate;n=n!==null?n.memoizedState:null}else n=ke.next;var a=Je===null?ye.memoizedState:Je.next;if(a!==null)Je=a,ke=n;else{if(n===null)throw ye.alternate===null?Error(r(467)):Error(r(310));ke=n,n={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Je===null?ye.memoizedState=Je=n:Je=Je.next=n}return Je}function od(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fs(n){var a=ds;return ds+=1,qa===null&&(qa=[]),n=c2(qa,n,a),a=ye,(Je===null?a.memoizedState:Je.next)===null&&(a=a.alternate,B.H=a===null||a.memoizedState===null?W2:Q2),n}function tl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return fs(n);if(n.$$typeof===C)return wt(n)}throw Error(r(438,String(n)))}function ld(n){var a=null,s=ye.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var c=ye.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=od(),ye.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(n),c=0;c<n;c++)s[c]=Y;return a.index++,s}function Zn(n,a){return typeof a=="function"?a(n):a}function nl(n){var a=et();return cd(a,ke,n)}function cd(n,a,s){var c=n.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=s;var h=n.baseQueue,g=c.pending;if(g!==null){if(h!==null){var w=h.next;h.next=g.next,g.next=w}a.baseQueue=h=g,c.pending=null}if(g=n.baseState,h===null)n.memoizedState=g;else{a=h.next;var A=w=null,V=null,G=a,X=!1;do{var J=G.lane&-536870913;if(J!==G.lane?(Ce&J)===J:(xi&J)===J){var I=G.revertLane;if(I===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),J===_a&&(X=!0);else if((xi&I)===I){G=G.next,I===_a&&(X=!0);continue}else J={lane:0,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},V===null?(A=V=J,w=g):V=V.next=J,ye.lanes|=I,Ti|=I;J=G.action,ra&&s(g,J),g=G.hasEagerState?G.eagerState:s(g,J)}else I={lane:J,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},V===null?(A=V=I,w=g):V=V.next=I,ye.lanes|=J,Ti|=J;G=G.next}while(G!==null&&G!==a);if(V===null?w=g:V.next=A,!Bt(g,n.memoizedState)&&(lt=!0,X&&(s=Ua,s!==null)))throw s;n.memoizedState=g,n.baseState=w,n.baseQueue=V,c.lastRenderedState=g}return h===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function ud(n){var a=et(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var c=s.dispatch,h=s.pending,g=a.memoizedState;if(h!==null){s.pending=null;var w=h=h.next;do g=n(g,w.action),w=w.next;while(w!==h);Bt(g,a.memoizedState)||(lt=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),s.lastRenderedState=g}return[g,c]}function x2(n,a,s){var c=ye,h=et(),g=Ee;if(g){if(s===void 0)throw Error(r(407));s=s()}else s=a();var w=!Bt((ke||h).memoizedState,s);w&&(h.memoizedState=s,lt=!0),h=h.queue;var A=w2.bind(null,c,h,n);if(hs(2048,8,A,[n]),h.getSnapshot!==a||w||Je!==null&&Je.memoizedState.tag&1){if(c.flags|=2048,Ya(9,il(),v2.bind(null,c,h,s,a),null),Be===null)throw Error(r(349));g||(xi&124)!==0||y2(c,a,s)}return s}function y2(n,a,s){n.flags|=16384,n={getSnapshot:a,value:s},a=ye.updateQueue,a===null?(a=od(),ye.updateQueue=a,a.stores=[n]):(s=a.stores,s===null?a.stores=[n]:s.push(n))}function v2(n,a,s,c){a.value=s,a.getSnapshot=c,b2(a)&&S2(n)}function w2(n,a,s){return s(function(){b2(a)&&S2(n)})}function b2(n){var a=n.getSnapshot;n=n.value;try{var s=a();return!Bt(n,s)}catch{return!0}}function S2(n){var a=Pa(n,2);a!==null&&qt(a,n,2)}function dd(n){var a=Rt();if(typeof n=="function"){var s=n;if(n=s(),ra){ui(!0);try{s()}finally{ui(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:n},a}function C2(n,a,s,c){return n.baseState=s,cd(n,ke,typeof c=="function"?c:Zn)}function Z8(n,a,s,c,h){if(rl(n))throw Error(r(485));if(n=a.action,n!==null){var g={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){g.listeners.push(w)}};B.T!==null?s(!0):g.isTransition=!1,c(g),s=a.pending,s===null?(g.next=a.pending=g,T2(a,g)):(g.next=s.next,a.pending=s.next=g)}}function T2(n,a){var s=a.action,c=a.payload,h=n.state;if(a.isTransition){var g=B.T,w={};B.T=w;try{var A=s(h,c),V=B.S;V!==null&&V(w,A),E2(n,a,A)}catch(G){fd(n,a,G)}finally{B.T=g}}else try{g=s(h,c),E2(n,a,g)}catch(G){fd(n,a,G)}}function E2(n,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){M2(n,a,c)},function(c){return fd(n,a,c)}):M2(n,a,s)}function M2(n,a,s){a.status="fulfilled",a.value=s,A2(a),n.state=s,a=n.pending,a!==null&&(s=a.next,s===a?n.pending=null:(s=s.next,a.next=s,T2(n,s)))}function fd(n,a,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=s,A2(a),a=a.next;while(a!==c)}n.action=null}function A2(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function j2(n,a){return a}function L2(n,a){if(Ee){var s=Be.formState;if(s!==null){e:{var c=ye;if(Ee){if(Fe){t:{for(var h=Fe,g=Tn;h.nodeType!==8;){if(!g){h=null;break t}if(h=gn(h.nextSibling),h===null){h=null;break t}}g=h.data,h=g==="F!"||g==="F"?h:null}if(h){Fe=gn(h.nextSibling),c=h.data==="F!";break e}}ta(c)}c=!1}c&&(a=s[0])}}return s=Rt(),s.memoizedState=s.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:j2,lastRenderedState:a},s.queue=c,s=Z2.bind(null,ye,c),c.dispatch=s,c=dd(!1),g=xd.bind(null,ye,!1,c.queue),c=Rt(),h={state:a,dispatch:null,action:n,pending:null},c.queue=h,s=Z8.bind(null,ye,h,g,s),h.dispatch=s,c.memoizedState=n,[a,s,!1]}function O2(n){var a=et();return R2(a,ke,n)}function R2(n,a,s){if(a=cd(n,a,j2)[0],n=nl(Zn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=fs(a)}catch(w){throw w===ss?Ko:w}else c=a;a=et();var h=a.queue,g=h.dispatch;return s!==a.memoizedState&&(ye.flags|=2048,Ya(9,il(),X8.bind(null,h,s),null)),[c,g,n]}function X8(n,a){n.action=a}function D2(n){var a=et(),s=ke;if(s!==null)return R2(a,s,n);et(),a=a.memoizedState,s=et();var c=s.queue.dispatch;return s.memoizedState=n,[a,c,!1]}function Ya(n,a,s,c){return n={tag:n,create:s,deps:c,inst:a,next:null},a=ye.updateQueue,a===null&&(a=od(),ye.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,a.lastEffect=n),n}function il(){return{destroy:void 0,resource:void 0}}function H2(){return et().memoizedState}function al(n,a,s,c){var h=Rt();c=c===void 0?null:c,ye.flags|=n,h.memoizedState=Ya(1|a,il(),s,c)}function hs(n,a,s,c){var h=et();c=c===void 0?null:c;var g=h.memoizedState.inst;ke!==null&&c!==null&&nd(c,ke.memoizedState.deps)?h.memoizedState=Ya(a,g,s,c):(ye.flags|=n,h.memoizedState=Ya(1|a,g,s,c))}function V2(n,a){al(8390656,8,n,a)}function k2(n,a){hs(2048,8,n,a)}function z2(n,a){return hs(4,2,n,a)}function P2(n,a){return hs(4,4,n,a)}function N2(n,a){if(typeof a=="function"){n=n();var s=a(n);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function B2(n,a,s){s=s!=null?s.concat([n]):null,hs(4,4,N2.bind(null,a,n),s)}function hd(){}function $2(n,a){var s=et();a=a===void 0?null:a;var c=s.memoizedState;return a!==null&&nd(a,c[1])?c[0]:(s.memoizedState=[n,a],n)}function _2(n,a){var s=et();a=a===void 0?null:a;var c=s.memoizedState;if(a!==null&&nd(a,c[1]))return c[0];if(c=n(),ra){ui(!0);try{n()}finally{ui(!1)}}return s.memoizedState=[c,a],c}function pd(n,a,s){return s===void 0||(xi&1073741824)!==0?n.memoizedState=a:(n.memoizedState=s,n=Im(),ye.lanes|=n,Ti|=n,s)}function U2(n,a,s,c){return Bt(s,a)?s:Ga.current!==null?(n=pd(n,s,c),Bt(n,a)||(lt=!0),n):(xi&42)===0?(lt=!0,n.memoizedState=s):(n=Im(),ye.lanes|=n,Ti|=n,a)}function G2(n,a,s,c,h){var g=K.p;K.p=g!==0&&8>g?g:8;var w=B.T,A={};B.T=A,xd(n,!1,a,s);try{var V=h(),G=B.S;if(G!==null&&G(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var X=q8(V,c);ps(n,a,X,It(n))}else ps(n,a,c,It(n))}catch(J){ps(n,a,{then:function(){},status:"rejected",reason:J},It())}finally{K.p=g,B.T=w}}function K8(){}function md(n,a,s,c){if(n.tag!==5)throw Error(r(476));var h=I2(n).queue;G2(n,h,a,W,s===null?K8:function(){return q2(n),s(c)})}function I2(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:W},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:s},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function q2(n){var a=I2(n).next.queue;ps(n,a,{},It())}function gd(){return wt(Ds)}function Y2(){return et().memoizedState}function F2(){return et().memoizedState}function W8(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var s=It();n=mi(s);var c=gi(a,n,s);c!==null&&(qt(c,a,s),ls(c,a,s)),a={cache:Yu()},n.payload=a;return}a=a.return}}function Q8(n,a,s){var c=It();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},rl(n)?X2(a,s):(s=zu(n,a,s,c),s!==null&&(qt(s,n,c),K2(s,a,c)))}function Z2(n,a,s){var c=It();ps(n,a,s,c)}function ps(n,a,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(rl(n))X2(a,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var w=a.lastRenderedState,A=g(w,s);if(h.hasEagerState=!0,h.eagerState=A,Bt(A,w))return Uo(n,a,h,0),Be===null&&_o(),!1}catch{}finally{}if(s=zu(n,a,h,c),s!==null)return qt(s,n,c),K2(s,a,c),!0}return!1}function xd(n,a,s,c){if(c={lane:2,revertLane:Xd(),action:c,hasEagerState:!1,eagerState:null,next:null},rl(n)){if(a)throw Error(r(479))}else a=zu(n,s,c,2),a!==null&&qt(a,n,2)}function rl(n){var a=n.alternate;return n===ye||a!==null&&a===ye}function X2(n,a){Ia=Jo=!0;var s=n.pending;s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a}function K2(n,a,s){if((s&4194048)!==0){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,a1(n,s)}}var sl={readContext:wt,use:tl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},W2={readContext:wt,use:tl,useCallback:function(n,a){return Rt().memoizedState=[n,a===void 0?null:a],n},useContext:wt,useEffect:V2,useImperativeHandle:function(n,a,s){s=s!=null?s.concat([n]):null,al(4194308,4,N2.bind(null,a,n),s)},useLayoutEffect:function(n,a){return al(4194308,4,n,a)},useInsertionEffect:function(n,a){al(4,2,n,a)},useMemo:function(n,a){var s=Rt();a=a===void 0?null:a;var c=n();if(ra){ui(!0);try{n()}finally{ui(!1)}}return s.memoizedState=[c,a],c},useReducer:function(n,a,s){var c=Rt();if(s!==void 0){var h=s(a);if(ra){ui(!0);try{s(a)}finally{ui(!1)}}}else h=a;return c.memoizedState=c.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},c.queue=n,n=n.dispatch=Q8.bind(null,ye,n),[c.memoizedState,n]},useRef:function(n){var a=Rt();return n={current:n},a.memoizedState=n},useState:function(n){n=dd(n);var a=n.queue,s=Z2.bind(null,ye,a);return a.dispatch=s,[n.memoizedState,s]},useDebugValue:hd,useDeferredValue:function(n,a){var s=Rt();return pd(s,n,a)},useTransition:function(){var n=dd(!1);return n=G2.bind(null,ye,n.queue,!0,!1),Rt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,s){var c=ye,h=Rt();if(Ee){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),Be===null)throw Error(r(349));(Ce&124)!==0||y2(c,a,s)}h.memoizedState=s;var g={value:s,getSnapshot:a};return h.queue=g,V2(w2.bind(null,c,g,n),[n]),c.flags|=2048,Ya(9,il(),v2.bind(null,c,g,s,a),null),s},useId:function(){var n=Rt(),a=Be.identifierPrefix;if(Ee){var s=qn,c=In;s=(c&~(1<<32-Nt(c)-1)).toString(32)+s,a="«"+a+"R"+s,s=el++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=Y8++,a="«"+a+"r"+s.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:gd,useFormState:L2,useActionState:L2,useOptimistic:function(n){var a=Rt();a.memoizedState=a.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=xd.bind(null,ye,!0,s),s.dispatch=a,[n,a]},useMemoCache:ld,useCacheRefresh:function(){return Rt().memoizedState=W8.bind(null,ye)}},Q2={readContext:wt,use:tl,useCallback:$2,useContext:wt,useEffect:k2,useImperativeHandle:B2,useInsertionEffect:z2,useLayoutEffect:P2,useMemo:_2,useReducer:nl,useRef:H2,useState:function(){return nl(Zn)},useDebugValue:hd,useDeferredValue:function(n,a){var s=et();return U2(s,ke.memoizedState,n,a)},useTransition:function(){var n=nl(Zn)[0],a=et().memoizedState;return[typeof n=="boolean"?n:fs(n),a]},useSyncExternalStore:x2,useId:Y2,useHostTransitionStatus:gd,useFormState:O2,useActionState:O2,useOptimistic:function(n,a){var s=et();return C2(s,ke,n,a)},useMemoCache:ld,useCacheRefresh:F2},J8={readContext:wt,use:tl,useCallback:$2,useContext:wt,useEffect:k2,useImperativeHandle:B2,useInsertionEffect:z2,useLayoutEffect:P2,useMemo:_2,useReducer:ud,useRef:H2,useState:function(){return ud(Zn)},useDebugValue:hd,useDeferredValue:function(n,a){var s=et();return ke===null?pd(s,n,a):U2(s,ke.memoizedState,n,a)},useTransition:function(){var n=ud(Zn)[0],a=et().memoizedState;return[typeof n=="boolean"?n:fs(n),a]},useSyncExternalStore:x2,useId:Y2,useHostTransitionStatus:gd,useFormState:D2,useActionState:D2,useOptimistic:function(n,a){var s=et();return ke!==null?C2(s,ke,n,a):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:ld,useCacheRefresh:F2},Fa=null,ms=0;function ol(n){var a=ms;return ms+=1,Fa===null&&(Fa=[]),c2(Fa,n,a)}function gs(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function ll(n,a){throw a.$$typeof===x?Error(r(525)):(n=Object.prototype.toString.call(a),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function J2(n){var a=n._init;return a(n._payload)}function em(n){function a(N,z){if(n){var U=N.deletions;U===null?(N.deletions=[z],N.flags|=16):U.push(z)}}function s(N,z){if(!n)return null;for(;z!==null;)a(N,z),z=z.sibling;return null}function c(N){for(var z=new Map;N!==null;)N.key!==null?z.set(N.key,N):z.set(N.index,N),N=N.sibling;return z}function h(N,z){return N=Gn(N,z),N.index=0,N.sibling=null,N}function g(N,z,U){return N.index=U,n?(U=N.alternate,U!==null?(U=U.index,U<z?(N.flags|=67108866,z):U):(N.flags|=67108866,z)):(N.flags|=1048576,z)}function w(N){return n&&N.alternate===null&&(N.flags|=67108866),N}function A(N,z,U,Q){return z===null||z.tag!==6?(z=Nu(U,N.mode,Q),z.return=N,z):(z=h(z,U),z.return=N,z)}function V(N,z,U,Q){var se=U.type;return se===b?X(N,z,U.props.children,Q,U.key):z!==null&&(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&J2(se)===z.type)?(z=h(z,U.props),gs(z,U),z.return=N,z):(z=Io(U.type,U.key,U.props,null,N.mode,Q),gs(z,U),z.return=N,z)}function G(N,z,U,Q){return z===null||z.tag!==4||z.stateNode.containerInfo!==U.containerInfo||z.stateNode.implementation!==U.implementation?(z=Bu(U,N.mode,Q),z.return=N,z):(z=h(z,U.children||[]),z.return=N,z)}function X(N,z,U,Q,se){return z===null||z.tag!==7?(z=Wi(U,N.mode,Q,se),z.return=N,z):(z=h(z,U),z.return=N,z)}function J(N,z,U){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Nu(""+z,N.mode,U),z.return=N,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case v:return U=Io(z.type,z.key,z.props,null,N.mode,U),gs(U,z),U.return=N,U;case S:return z=Bu(z,N.mode,U),z.return=N,z;case _:var Q=z._init;return z=Q(z._payload),J(N,z,U)}if(re(z)||te(z))return z=Wi(z,N.mode,U,null),z.return=N,z;if(typeof z.then=="function")return J(N,ol(z),U);if(z.$$typeof===C)return J(N,Zo(N,z),U);ll(N,z)}return null}function I(N,z,U,Q){var se=z!==null?z.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return se!==null?null:A(N,z,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case v:return U.key===se?V(N,z,U,Q):null;case S:return U.key===se?G(N,z,U,Q):null;case _:return se=U._init,U=se(U._payload),I(N,z,U,Q)}if(re(U)||te(U))return se!==null?null:X(N,z,U,Q,null);if(typeof U.then=="function")return I(N,z,ol(U),Q);if(U.$$typeof===C)return I(N,z,Zo(N,U),Q);ll(N,U)}return null}function q(N,z,U,Q,se){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return N=N.get(U)||null,A(z,N,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return N=N.get(Q.key===null?U:Q.key)||null,V(z,N,Q,se);case S:return N=N.get(Q.key===null?U:Q.key)||null,G(z,N,Q,se);case _:var ve=Q._init;return Q=ve(Q._payload),q(N,z,U,Q,se)}if(re(Q)||te(Q))return N=N.get(U)||null,X(z,N,Q,se,null);if(typeof Q.then=="function")return q(N,z,U,ol(Q),se);if(Q.$$typeof===C)return q(N,z,U,Zo(z,Q),se);ll(z,Q)}return null}function he(N,z,U,Q){for(var se=null,ve=null,le=z,fe=z=0,ut=null;le!==null&&fe<U.length;fe++){le.index>fe?(ut=le,le=null):ut=le.sibling;var Te=I(N,le,U[fe],Q);if(Te===null){le===null&&(le=ut);break}n&&le&&Te.alternate===null&&a(N,le),z=g(Te,z,fe),ve===null?se=Te:ve.sibling=Te,ve=Te,le=ut}if(fe===U.length)return s(N,le),Ee&&Ji(N,fe),se;if(le===null){for(;fe<U.length;fe++)le=J(N,U[fe],Q),le!==null&&(z=g(le,z,fe),ve===null?se=le:ve.sibling=le,ve=le);return Ee&&Ji(N,fe),se}for(le=c(le);fe<U.length;fe++)ut=q(le,N,fe,U[fe],Q),ut!==null&&(n&&ut.alternate!==null&&le.delete(ut.key===null?fe:ut.key),z=g(ut,z,fe),ve===null?se=ut:ve.sibling=ut,ve=ut);return n&&le.forEach(function(Hi){return a(N,Hi)}),Ee&&Ji(N,fe),se}function ue(N,z,U,Q){if(U==null)throw Error(r(151));for(var se=null,ve=null,le=z,fe=z=0,ut=null,Te=U.next();le!==null&&!Te.done;fe++,Te=U.next()){le.index>fe?(ut=le,le=null):ut=le.sibling;var Hi=I(N,le,Te.value,Q);if(Hi===null){le===null&&(le=ut);break}n&&le&&Hi.alternate===null&&a(N,le),z=g(Hi,z,fe),ve===null?se=Hi:ve.sibling=Hi,ve=Hi,le=ut}if(Te.done)return s(N,le),Ee&&Ji(N,fe),se;if(le===null){for(;!Te.done;fe++,Te=U.next())Te=J(N,Te.value,Q),Te!==null&&(z=g(Te,z,fe),ve===null?se=Te:ve.sibling=Te,ve=Te);return Ee&&Ji(N,fe),se}for(le=c(le);!Te.done;fe++,Te=U.next())Te=q(le,N,fe,Te.value,Q),Te!==null&&(n&&Te.alternate!==null&&le.delete(Te.key===null?fe:Te.key),z=g(Te,z,fe),ve===null?se=Te:ve.sibling=Te,ve=Te);return n&&le.forEach(function(e9){return a(N,e9)}),Ee&&Ji(N,fe),se}function Pe(N,z,U,Q){if(typeof U=="object"&&U!==null&&U.type===b&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case v:e:{for(var se=U.key;z!==null;){if(z.key===se){if(se=U.type,se===b){if(z.tag===7){s(N,z.sibling),Q=h(z,U.props.children),Q.return=N,N=Q;break e}}else if(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&J2(se)===z.type){s(N,z.sibling),Q=h(z,U.props),gs(Q,U),Q.return=N,N=Q;break e}s(N,z);break}else a(N,z);z=z.sibling}U.type===b?(Q=Wi(U.props.children,N.mode,Q,U.key),Q.return=N,N=Q):(Q=Io(U.type,U.key,U.props,null,N.mode,Q),gs(Q,U),Q.return=N,N=Q)}return w(N);case S:e:{for(se=U.key;z!==null;){if(z.key===se)if(z.tag===4&&z.stateNode.containerInfo===U.containerInfo&&z.stateNode.implementation===U.implementation){s(N,z.sibling),Q=h(z,U.children||[]),Q.return=N,N=Q;break e}else{s(N,z);break}else a(N,z);z=z.sibling}Q=Bu(U,N.mode,Q),Q.return=N,N=Q}return w(N);case _:return se=U._init,U=se(U._payload),Pe(N,z,U,Q)}if(re(U))return he(N,z,U,Q);if(te(U)){if(se=te(U),typeof se!="function")throw Error(r(150));return U=se.call(U),ue(N,z,U,Q)}if(typeof U.then=="function")return Pe(N,z,ol(U),Q);if(U.$$typeof===C)return Pe(N,z,Zo(N,U),Q);ll(N,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,z!==null&&z.tag===6?(s(N,z.sibling),Q=h(z,U),Q.return=N,N=Q):(s(N,z),Q=Nu(U,N.mode,Q),Q.return=N,N=Q),w(N)):s(N,z)}return function(N,z,U,Q){try{ms=0;var se=Pe(N,z,U,Q);return Fa=null,se}catch(le){if(le===ss||le===Ko)throw le;var ve=$t(29,le,null,N.mode);return ve.lanes=Q,ve.return=N,ve}finally{}}}var Za=em(!0),tm=em(!1),rn=Z(null),En=null;function yi(n){var a=n.alternate;ae(rt,rt.current&1),ae(rn,n),En===null&&(a===null||Ga.current!==null||a.memoizedState!==null)&&(En=n)}function nm(n){if(n.tag===22){if(ae(rt,rt.current),ae(rn,n),En===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(En=n)}}else vi()}function vi(){ae(rt,rt.current),ae(rn,rn.current)}function Xn(n){ne(rn),En===n&&(En=null),ne(rt)}var rt=Z(0);function cl(n){for(var a=n;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||lf(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function yd(n,a,s,c){a=n.memoizedState,s=s(c,a),s=s==null?a:m({},a,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var vd={enqueueSetState:function(n,a,s){n=n._reactInternals;var c=It(),h=mi(c);h.payload=a,s!=null&&(h.callback=s),a=gi(n,h,c),a!==null&&(qt(a,n,c),ls(a,n,c))},enqueueReplaceState:function(n,a,s){n=n._reactInternals;var c=It(),h=mi(c);h.tag=1,h.payload=a,s!=null&&(h.callback=s),a=gi(n,h,c),a!==null&&(qt(a,n,c),ls(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var s=It(),c=mi(s);c.tag=2,a!=null&&(c.callback=a),a=gi(n,c,s),a!==null&&(qt(a,n,s),ls(a,n,s))}};function im(n,a,s,c,h,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):a.prototype&&a.prototype.isPureReactComponent?!Qr(s,c)||!Qr(h,g):!0}function am(n,a,s,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,c),a.state!==n&&vd.enqueueReplaceState(a,a.state,null)}function sa(n,a){var s=a;if("ref"in a){s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}if(n=n.defaultProps){s===a&&(s=m({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var ul=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function rm(n){ul(n)}function sm(n){console.error(n)}function om(n){ul(n)}function dl(n,a){try{var s=n.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function lm(n,a,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function wd(n,a,s){return s=mi(s),s.tag=3,s.payload={element:null},s.callback=function(){dl(n,a)},s}function cm(n){return n=mi(n),n.tag=3,n}function um(n,a,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var g=c.value;n.payload=function(){return h(g)},n.callback=function(){lm(a,s,c)}}var w=s.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){lm(a,s,c),typeof h!="function"&&(Ei===null?Ei=new Set([this]):Ei.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function e7(n,a,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=s.alternate,a!==null&&is(a,s,h,!0),s=rn.current,s!==null){switch(s.tag){case 13:return En===null?Id():s.alternate===null&&Ze===0&&(Ze=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===Xu?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([c]):a.add(c),Yd(n,c,h)),!1;case 22:return s.flags|=65536,c===Xu?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([c]):s.add(c)),Yd(n,c,h)),!1}throw Error(r(435,s.tag))}return Yd(n,c,h),Id(),!1}if(Ee)return a=rn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,c!==Uu&&(n=Error(r(422),{cause:c}),ns(en(n,s)))):(c!==Uu&&(a=Error(r(423),{cause:c}),ns(en(a,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,c=en(c,s),h=wd(n.stateNode,c,h),Qu(n,h),Ze!==4&&(Ze=2)),!1;var g=Error(r(520),{cause:c});if(g=en(g,s),Cs===null?Cs=[g]:Cs.push(g),Ze!==4&&(Ze=2),a===null)return!0;c=en(c,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=wd(s.stateNode,c,n),Qu(s,n),!1;case 1:if(a=s.type,g=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ei===null||!Ei.has(g))))return s.flags|=65536,h&=-h,s.lanes|=h,h=cm(h),um(h,n,s,c),Qu(s,h),!1}s=s.return}while(s!==null);return!1}var dm=Error(r(461)),lt=!1;function ht(n,a,s,c){a.child=n===null?tm(a,null,s,c):Za(a,n.child,s,c)}function fm(n,a,s,c,h){s=s.render;var g=a.ref;if("ref"in c){var w={};for(var A in c)A!=="ref"&&(w[A]=c[A])}else w=c;return ia(a),c=id(n,a,s,w,g,h),A=ad(),n!==null&&!lt?(rd(n,a,h),Kn(n,a,h)):(Ee&&A&&$u(a),a.flags|=1,ht(n,a,c,h),a.child)}function hm(n,a,s,c,h){if(n===null){var g=s.type;return typeof g=="function"&&!Pu(g)&&g.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=g,pm(n,a,g,c,h)):(n=Io(s.type,null,c,a,a.mode,h),n.ref=a.ref,n.return=a,a.child=n)}if(g=n.child,!jd(n,h)){var w=g.memoizedProps;if(s=s.compare,s=s!==null?s:Qr,s(w,c)&&n.ref===a.ref)return Kn(n,a,h)}return a.flags|=1,n=Gn(g,c),n.ref=a.ref,n.return=a,a.child=n}function pm(n,a,s,c,h){if(n!==null){var g=n.memoizedProps;if(Qr(g,c)&&n.ref===a.ref)if(lt=!1,a.pendingProps=c=g,jd(n,h))(n.flags&131072)!==0&&(lt=!0);else return a.lanes=n.lanes,Kn(n,a,h)}return bd(n,a,s,c,h)}function mm(n,a,s){var c=a.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((a.flags&128)!==0){if(c=g!==null?g.baseLanes|s:s,n!==null){for(h=a.child=n.child,g=0;h!==null;)g=g|h.lanes|h.childLanes,h=h.sibling;a.childLanes=g&~c}else a.childLanes=0,a.child=null;return gm(n,a,c,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Xo(a,g!==null?g.cachePool:null),g!==null?p2(a,g):ed(),nm(a);else return a.lanes=a.childLanes=536870912,gm(n,a,g!==null?g.baseLanes|s:s,s)}else g!==null?(Xo(a,g.cachePool),p2(a,g),vi(),a.memoizedState=null):(n!==null&&Xo(a,null),ed(),vi());return ht(n,a,h,s),a.child}function gm(n,a,s,c){var h=Zu();return h=h===null?null:{parent:at._currentValue,pool:h},a.memoizedState={baseLanes:s,cachePool:h},n!==null&&Xo(a,null),ed(),nm(a),n!==null&&is(n,a,c,!0),null}function fl(n,a){var s=a.ref;if(s===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(n===null||n.ref!==s)&&(a.flags|=4194816)}}function bd(n,a,s,c,h){return ia(a),s=id(n,a,s,c,void 0,h),c=ad(),n!==null&&!lt?(rd(n,a,h),Kn(n,a,h)):(Ee&&c&&$u(a),a.flags|=1,ht(n,a,s,h),a.child)}function xm(n,a,s,c,h,g){return ia(a),a.updateQueue=null,s=g2(a,c,s,h),m2(n),c=ad(),n!==null&&!lt?(rd(n,a,g),Kn(n,a,g)):(Ee&&c&&$u(a),a.flags|=1,ht(n,a,s,g),a.child)}function ym(n,a,s,c,h){if(ia(a),a.stateNode===null){var g=Na,w=s.contextType;typeof w=="object"&&w!==null&&(g=wt(w)),g=new s(c,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=vd,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=c,g.state=a.memoizedState,g.refs={},Ku(a),w=s.contextType,g.context=typeof w=="object"&&w!==null?wt(w):Na,g.state=a.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(yd(a,s,w,c),g.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(w=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),w!==g.state&&vd.enqueueReplaceState(g,g.state,null),us(a,c,g,h),cs(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){g=a.stateNode;var A=a.memoizedProps,V=sa(s,A);g.props=V;var G=g.context,X=s.contextType;w=Na,typeof X=="object"&&X!==null&&(w=wt(X));var J=s.getDerivedStateFromProps;X=typeof J=="function"||typeof g.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,X||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(A||G!==w)&&am(a,g,c,w),pi=!1;var I=a.memoizedState;g.state=I,us(a,c,g,h),cs(),G=a.memoizedState,A||I!==G||pi?(typeof J=="function"&&(yd(a,s,J,c),G=a.memoizedState),(V=pi||im(a,s,V,c,I,G,w))?(X||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=G),g.props=c,g.state=G,g.context=w,c=V):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{g=a.stateNode,Wu(n,a),w=a.memoizedProps,X=sa(s,w),g.props=X,J=a.pendingProps,I=g.context,G=s.contextType,V=Na,typeof G=="object"&&G!==null&&(V=wt(G)),A=s.getDerivedStateFromProps,(G=typeof A=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==J||I!==V)&&am(a,g,c,V),pi=!1,I=a.memoizedState,g.state=I,us(a,c,g,h),cs();var q=a.memoizedState;w!==J||I!==q||pi||n!==null&&n.dependencies!==null&&Fo(n.dependencies)?(typeof A=="function"&&(yd(a,s,A,c),q=a.memoizedState),(X=pi||im(a,s,X,c,I,q,V)||n!==null&&n.dependencies!==null&&Fo(n.dependencies))?(G||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,q,V),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,q,V)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===n.memoizedProps&&I===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&I===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=q),g.props=c,g.state=q,g.context=V,c=X):(typeof g.componentDidUpdate!="function"||w===n.memoizedProps&&I===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&I===n.memoizedState||(a.flags|=1024),c=!1)}return g=c,fl(n,a),c=(a.flags&128)!==0,g||c?(g=a.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,n!==null&&c?(a.child=Za(a,n.child,null,h),a.child=Za(a,null,s,h)):ht(n,a,s,h),a.memoizedState=g.state,n=a.child):n=Kn(n,a,h),n}function vm(n,a,s,c){return ts(),a.flags|=256,ht(n,a,s,c),a.child}var Sd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cd(n){return{baseLanes:n,cachePool:s2()}}function Td(n,a,s){return n=n!==null?n.childLanes&~s:0,a&&(n|=sn),n}function wm(n,a,s){var c=a.pendingProps,h=!1,g=(a.flags&128)!==0,w;if((w=g)||(w=n!==null&&n.memoizedState===null?!1:(rt.current&2)!==0),w&&(h=!0,a.flags&=-129),w=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ee){if(h?yi(a):vi(),Ee){var A=Fe,V;if(V=A){e:{for(V=A,A=Tn;V.nodeType!==8;){if(!A){A=null;break e}if(V=gn(V.nextSibling),V===null){A=null;break e}}A=V}A!==null?(a.memoizedState={dehydrated:A,treeContext:Qi!==null?{id:In,overflow:qn}:null,retryLane:536870912,hydrationErrors:null},V=$t(18,null,null,0),V.stateNode=A,V.return=a,a.child=V,Mt=a,Fe=null,V=!0):V=!1}V||ta(a)}if(A=a.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return lf(A)?a.lanes=32:a.lanes=536870912,null;Xn(a)}return A=c.children,c=c.fallback,h?(vi(),h=a.mode,A=hl({mode:"hidden",children:A},h),c=Wi(c,h,s,null),A.return=a,c.return=a,A.sibling=c,a.child=A,h=a.child,h.memoizedState=Cd(s),h.childLanes=Td(n,w,s),a.memoizedState=Sd,c):(yi(a),Ed(a,A))}if(V=n.memoizedState,V!==null&&(A=V.dehydrated,A!==null)){if(g)a.flags&256?(yi(a),a.flags&=-257,a=Md(n,a,s)):a.memoizedState!==null?(vi(),a.child=n.child,a.flags|=128,a=null):(vi(),h=c.fallback,A=a.mode,c=hl({mode:"visible",children:c.children},A),h=Wi(h,A,s,null),h.flags|=2,c.return=a,h.return=a,c.sibling=h,a.child=c,Za(a,n.child,null,s),c=a.child,c.memoizedState=Cd(s),c.childLanes=Td(n,w,s),a.memoizedState=Sd,a=h);else if(yi(a),lf(A)){if(w=A.nextSibling&&A.nextSibling.dataset,w)var G=w.dgst;w=G,c=Error(r(419)),c.stack="",c.digest=w,ns({value:c,source:null,stack:null}),a=Md(n,a,s)}else if(lt||is(n,a,s,!1),w=(s&n.childLanes)!==0,lt||w){if(w=Be,w!==null&&(c=s&-s,c=(c&42)!==0?1:lu(c),c=(c&(w.suspendedLanes|s))!==0?0:c,c!==0&&c!==V.retryLane))throw V.retryLane=c,Pa(n,c),qt(w,n,c),dm;A.data==="$?"||Id(),a=Md(n,a,s)}else A.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=V.treeContext,Fe=gn(A.nextSibling),Mt=a,Ee=!0,ea=null,Tn=!1,n!==null&&(nn[an++]=In,nn[an++]=qn,nn[an++]=Qi,In=n.id,qn=n.overflow,Qi=a),a=Ed(a,c.children),a.flags|=4096);return a}return h?(vi(),h=c.fallback,A=a.mode,V=n.child,G=V.sibling,c=Gn(V,{mode:"hidden",children:c.children}),c.subtreeFlags=V.subtreeFlags&65011712,G!==null?h=Gn(G,h):(h=Wi(h,A,s,null),h.flags|=2),h.return=a,c.return=a,c.sibling=h,a.child=c,c=h,h=a.child,A=n.child.memoizedState,A===null?A=Cd(s):(V=A.cachePool,V!==null?(G=at._currentValue,V=V.parent!==G?{parent:G,pool:G}:V):V=s2(),A={baseLanes:A.baseLanes|s,cachePool:V}),h.memoizedState=A,h.childLanes=Td(n,w,s),a.memoizedState=Sd,c):(yi(a),s=n.child,n=s.sibling,s=Gn(s,{mode:"visible",children:c.children}),s.return=a,s.sibling=null,n!==null&&(w=a.deletions,w===null?(a.deletions=[n],a.flags|=16):w.push(n)),a.child=s,a.memoizedState=null,s)}function Ed(n,a){return a=hl({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function hl(n,a){return n=$t(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Md(n,a,s){return Za(a,n.child,null,s),n=Ed(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function bm(n,a,s){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),Iu(n.return,a,s)}function Ad(n,a,s,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=s,g.tailMode=h)}function Sm(n,a,s){var c=a.pendingProps,h=c.revealOrder,g=c.tail;if(ht(n,a,c.children,s),c=rt.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&bm(n,s,a);else if(n.tag===19)bm(n,s,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(ae(rt,c),h){case"forwards":for(s=a.child,h=null;s!==null;)n=s.alternate,n!==null&&cl(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=a.child,a.child=null):(h=s.sibling,s.sibling=null),Ad(a,!1,h,s,g);break;case"backwards":for(s=null,h=a.child,a.child=null;h!==null;){if(n=h.alternate,n!==null&&cl(n)===null){a.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}Ad(a,!0,s,null,g);break;case"together":Ad(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Kn(n,a,s){if(n!==null&&(a.dependencies=n.dependencies),Ti|=a.lanes,(s&a.childLanes)===0)if(n!==null){if(is(n,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(r(153));if(a.child!==null){for(n=a.child,s=Gn(n,n.pendingProps),a.child=s,s.return=a;n.sibling!==null;)n=n.sibling,s=s.sibling=Gn(n,n.pendingProps),s.return=a;s.sibling=null}return a.child}function jd(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Fo(n)))}function t7(n,a,s){switch(a.tag){case 3:Oe(a,a.stateNode.containerInfo),hi(a,at,n.memoizedState.cache),ts();break;case 27:case 5:qi(a);break;case 4:Oe(a,a.stateNode.containerInfo);break;case 10:hi(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(yi(a),a.flags|=128,null):(s&a.child.childLanes)!==0?wm(n,a,s):(yi(a),n=Kn(n,a,s),n!==null?n.sibling:null);yi(a);break;case 19:var h=(n.flags&128)!==0;if(c=(s&a.childLanes)!==0,c||(is(n,a,s,!1),c=(s&a.childLanes)!==0),h){if(c)return Sm(n,a,s);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ae(rt,rt.current),c)break;return null;case 22:case 23:return a.lanes=0,mm(n,a,s);case 24:hi(a,at,n.memoizedState.cache)}return Kn(n,a,s)}function Cm(n,a,s){if(n!==null)if(n.memoizedProps!==a.pendingProps)lt=!0;else{if(!jd(n,s)&&(a.flags&128)===0)return lt=!1,t7(n,a,s);lt=(n.flags&131072)!==0}else lt=!1,Ee&&(a.flags&1048576)!==0&&J1(a,Yo,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var c=a.elementType,h=c._init;if(c=h(c._payload),a.type=c,typeof c=="function")Pu(c)?(n=sa(c,n),a.tag=1,a=ym(null,a,c,n,s)):(a.tag=0,a=bd(null,a,c,n,s));else{if(c!=null){if(h=c.$$typeof,h===D){a.tag=11,a=fm(null,a,c,n,s);break e}else if(h===k){a.tag=14,a=hm(null,a,c,n,s);break e}}throw a=oe(c)||c,Error(r(306,a,""))}}return a;case 0:return bd(n,a,a.type,a.pendingProps,s);case 1:return c=a.type,h=sa(c,a.pendingProps),ym(n,a,c,h,s);case 3:e:{if(Oe(a,a.stateNode.containerInfo),n===null)throw Error(r(387));c=a.pendingProps;var g=a.memoizedState;h=g.element,Wu(n,a),us(a,c,null,s);var w=a.memoizedState;if(c=w.cache,hi(a,at,c),c!==g.cache&&qu(a,[at],s,!0),cs(),c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=vm(n,a,c,s);break e}else if(c!==h){h=en(Error(r(424)),a),ns(h),a=vm(n,a,c,s);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Fe=gn(n.firstChild),Mt=a,Ee=!0,ea=null,Tn=!0,s=tm(a,null,c,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ts(),c===h){a=Kn(n,a,s);break e}ht(n,a,c,s)}a=a.child}return a;case 26:return fl(n,a),n===null?(s=Ag(a.type,null,a.pendingProps,null))?a.memoizedState=s:Ee||(s=a.type,n=a.pendingProps,c=Al(de.current).createElement(s),c[vt]=a,c[Lt]=n,mt(c,s,n),ot(c),a.stateNode=c):a.memoizedState=Ag(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return qi(a),n===null&&Ee&&(c=a.stateNode=Tg(a.type,a.pendingProps,de.current),Mt=a,Tn=!0,h=Fe,ji(a.type)?(cf=h,Fe=gn(c.firstChild)):Fe=h),ht(n,a,a.pendingProps.children,s),fl(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Ee&&((h=c=Fe)&&(c=L7(c,a.type,a.pendingProps,Tn),c!==null?(a.stateNode=c,Mt=a,Fe=gn(c.firstChild),Tn=!1,h=!0):h=!1),h||ta(a)),qi(a),h=a.type,g=a.pendingProps,w=n!==null?n.memoizedProps:null,c=g.children,rf(h,g)?c=null:w!==null&&rf(h,w)&&(a.flags|=32),a.memoizedState!==null&&(h=id(n,a,F8,null,null,s),Ds._currentValue=h),fl(n,a),ht(n,a,c,s),a.child;case 6:return n===null&&Ee&&((n=s=Fe)&&(s=O7(s,a.pendingProps,Tn),s!==null?(a.stateNode=s,Mt=a,Fe=null,n=!0):n=!1),n||ta(a)),null;case 13:return wm(n,a,s);case 4:return Oe(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=Za(a,null,c,s):ht(n,a,c,s),a.child;case 11:return fm(n,a,a.type,a.pendingProps,s);case 7:return ht(n,a,a.pendingProps,s),a.child;case 8:return ht(n,a,a.pendingProps.children,s),a.child;case 12:return ht(n,a,a.pendingProps.children,s),a.child;case 10:return c=a.pendingProps,hi(a,a.type,c.value),ht(n,a,c.children,s),a.child;case 9:return h=a.type._context,c=a.pendingProps.children,ia(a),h=wt(h),c=c(h),a.flags|=1,ht(n,a,c,s),a.child;case 14:return hm(n,a,a.type,a.pendingProps,s);case 15:return pm(n,a,a.type,a.pendingProps,s);case 19:return Sm(n,a,s);case 31:return c=a.pendingProps,s=a.mode,c={mode:c.mode,children:c.children},n===null?(s=hl(c,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=Gn(n.child,c),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return mm(n,a,s);case 24:return ia(a),c=wt(at),n===null?(h=Zu(),h===null&&(h=Be,g=Yu(),h.pooledCache=g,g.refCount++,g!==null&&(h.pooledCacheLanes|=s),h=g),a.memoizedState={parent:c,cache:h},Ku(a),hi(a,at,h)):((n.lanes&s)!==0&&(Wu(n,a),us(a,null,null,s),cs()),h=n.memoizedState,g=a.memoizedState,h.parent!==c?(h={parent:c,cache:c},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),hi(a,at,c)):(c=g.cache,hi(a,at,c),c!==h.cache&&qu(a,[at],s,!0))),ht(n,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function Wn(n){n.flags|=4}function Tm(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Dg(a)){if(a=rn.current,a!==null&&((Ce&4194048)===Ce?En!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||a!==En))throw os=Xu,o2;n.flags|=8192}}function pl(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?n1():536870912,n.lanes|=a,Qa|=a)}function xs(n,a){if(!Ee)switch(n.tailMode){case"hidden":a=n.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function qe(n){var a=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(a)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=s,a}function n7(n,a,s){var c=a.pendingProps;switch(_u(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(a),null;case 1:return qe(a),null;case 3:return s=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Fn(at),yt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(es(a)?Wn(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,n2())),qe(a),null;case 26:return s=a.memoizedState,n===null?(Wn(a),s!==null?(qe(a),Tm(a,s)):(qe(a),a.flags&=-16777217)):s?s!==n.memoizedState?(Wn(a),qe(a),Tm(a,s)):(qe(a),a.flags&=-16777217):(n.memoizedProps!==c&&Wn(a),qe(a),a.flags&=-16777217),null;case 27:$n(a),s=de.current;var h=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Wn(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return qe(a),null}n=ce.current,es(a)?e2(a):(n=Tg(h,c,s),a.stateNode=n,Wn(a))}return qe(a),null;case 5:if($n(a),s=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Wn(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return qe(a),null}if(n=ce.current,es(a))e2(a);else{switch(h=Al(de.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}n[vt]=a,n[Lt]=c;e:for(h=a.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===a)break e;for(;h.sibling===null;){if(h.return===null||h.return===a)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}a.stateNode=n;e:switch(mt(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Wn(a)}}return qe(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&Wn(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(r(166));if(n=de.current,es(a)){if(n=a.stateNode,s=a.memoizedProps,c=null,h=Mt,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}n[vt]=a,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||xg(n.nodeValue,s)),n||ta(a)}else n=Al(n).createTextNode(c),n[vt]=a,a.stateNode=n}return qe(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=es(a),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(r(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[vt]=a}else ts(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;qe(a),h=!1}else h=n2(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(Xn(a),a):(Xn(a),null)}if(Xn(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=a.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==h&&(c.flags|=2048)}return s!==n&&s&&(a.child.flags|=8192),pl(a,a.updateQueue),qe(a),null;case 4:return yt(),n===null&&Jd(a.stateNode.containerInfo),qe(a),null;case 10:return Fn(a.type),qe(a),null;case 19:if(ne(rt),h=a.memoizedState,h===null)return qe(a),null;if(c=(a.flags&128)!==0,g=h.rendering,g===null)if(c)xs(h,!1);else{if(Ze!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(g=cl(n),g!==null){for(a.flags|=128,xs(h,!1),n=g.updateQueue,a.updateQueue=n,pl(a,n),a.subtreeFlags=0,n=s,s=a.child;s!==null;)Q1(s,n),s=s.sibling;return ae(rt,rt.current&1|2),a.child}n=n.sibling}h.tail!==null&&Cn()>xl&&(a.flags|=128,c=!0,xs(h,!1),a.lanes=4194304)}else{if(!c)if(n=cl(g),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,pl(a,n),xs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!Ee)return qe(a),null}else 2*Cn()-h.renderingStartTime>xl&&s!==536870912&&(a.flags|=128,c=!0,xs(h,!1),a.lanes=4194304);h.isBackwards?(g.sibling=a.child,a.child=g):(n=h.last,n!==null?n.sibling=g:a.child=g,h.last=g)}return h.tail!==null?(a=h.tail,h.rendering=a,h.tail=a.sibling,h.renderingStartTime=Cn(),a.sibling=null,n=rt.current,ae(rt,c?n&1|2:n&1),a):(qe(a),null);case 22:case 23:return Xn(a),td(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(s&536870912)!==0&&(a.flags&128)===0&&(qe(a),a.subtreeFlags&6&&(a.flags|=8192)):qe(a),s=a.updateQueue,s!==null&&pl(a,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==s&&(a.flags|=2048),n!==null&&ne(aa),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Fn(at),qe(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function i7(n,a){switch(_u(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Fn(at),yt(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return $n(a),null;case 13:if(Xn(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(r(340));ts()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return ne(rt),null;case 4:return yt(),null;case 10:return Fn(a.type),null;case 22:case 23:return Xn(a),td(),n!==null&&ne(aa),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Fn(at),null;case 25:return null;default:return null}}function Em(n,a){switch(_u(a),a.tag){case 3:Fn(at),yt();break;case 26:case 27:case 5:$n(a);break;case 4:yt();break;case 13:Xn(a);break;case 19:ne(rt);break;case 10:Fn(a.type);break;case 22:case 23:Xn(a),td(),n!==null&&ne(aa);break;case 24:Fn(at)}}function ys(n,a){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&n)===n){c=void 0;var g=s.create,w=s.inst;c=g(),w.destroy=c}s=s.next}while(s!==h)}}catch(A){Ne(a,a.return,A)}}function wi(n,a,s){try{var c=a.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var g=h.next;c=g;do{if((c.tag&n)===n){var w=c.inst,A=w.destroy;if(A!==void 0){w.destroy=void 0,h=a;var V=s,G=A;try{G()}catch(X){Ne(h,V,X)}}}c=c.next}while(c!==g)}}catch(X){Ne(a,a.return,X)}}function Mm(n){var a=n.updateQueue;if(a!==null){var s=n.stateNode;try{h2(a,s)}catch(c){Ne(n,n.return,c)}}}function Am(n,a,s){s.props=sa(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){Ne(n,a,c)}}function vs(n,a){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(h){Ne(n,a,h)}}function Mn(n,a){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){Ne(n,a,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Ne(n,a,h)}else s.current=null}function jm(n){var a=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){Ne(n,n.return,h)}}function Ld(n,a,s){try{var c=n.stateNode;T7(c,n.type,s,a),c[Lt]=a}catch(h){Ne(n,n.return,h)}}function Lm(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ji(n.type)||n.tag===4}function Od(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ji(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Rd(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(n),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Ml));else if(c!==4&&(c===27&&ji(n.type)&&(s=n.stateNode,a=null),n=n.child,n!==null))for(Rd(n,a,s),n=n.sibling;n!==null;)Rd(n,a,s),n=n.sibling}function ml(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?s.insertBefore(n,a):s.appendChild(n);else if(c!==4&&(c===27&&ji(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(ml(n,a,s),n=n.sibling;n!==null;)ml(n,a,s),n=n.sibling}function Om(n){var a=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);mt(a,c,s),a[vt]=n,a[Lt]=s}catch(g){Ne(n,n.return,g)}}var Qn=!1,We=!1,Dd=!1,Rm=typeof WeakSet=="function"?WeakSet:Set,ct=null;function a7(n,a){if(n=n.containerInfo,nf=Hl,n=U1(n),Ou(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break e}var w=0,A=-1,V=-1,G=0,X=0,J=n,I=null;t:for(;;){for(var q;J!==s||h!==0&&J.nodeType!==3||(A=w+h),J!==g||c!==0&&J.nodeType!==3||(V=w+c),J.nodeType===3&&(w+=J.nodeValue.length),(q=J.firstChild)!==null;)I=J,J=q;for(;;){if(J===n)break t;if(I===s&&++G===h&&(A=w),I===g&&++X===c&&(V=w),(q=J.nextSibling)!==null)break;J=I,I=J.parentNode}J=q}s=A===-1||V===-1?null:{start:A,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(af={focusedElem:n,selectionRange:s},Hl=!1,ct=a;ct!==null;)if(a=ct,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,ct=n;else for(;ct!==null;){switch(a=ct,g=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,s=a,h=g.memoizedProps,g=g.memoizedState,c=s.stateNode;try{var he=sa(s.type,h,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(he,g),c.__reactInternalSnapshotBeforeUpdate=n}catch(ue){Ne(s,s.return,ue)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,s=n.nodeType,s===9)of(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":of(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=a.sibling,n!==null){n.return=a.return,ct=n;break}ct=a.return}}function Dm(n,a,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:bi(n,s),c&4&&ys(5,s);break;case 1:if(bi(n,s),c&4)if(n=s.stateNode,a===null)try{n.componentDidMount()}catch(w){Ne(s,s.return,w)}else{var h=sa(s.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(h,a,n.__reactInternalSnapshotBeforeUpdate)}catch(w){Ne(s,s.return,w)}}c&64&&Mm(s),c&512&&vs(s,s.return);break;case 3:if(bi(n,s),c&64&&(n=s.updateQueue,n!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{h2(n,a)}catch(w){Ne(s,s.return,w)}}break;case 27:a===null&&c&4&&Om(s);case 26:case 5:bi(n,s),a===null&&c&4&&jm(s),c&512&&vs(s,s.return);break;case 12:bi(n,s);break;case 13:bi(n,s),c&4&&km(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=h7.bind(null,s),R7(n,s))));break;case 22:if(c=s.memoizedState!==null||Qn,!c){a=a!==null&&a.memoizedState!==null||We,h=Qn;var g=We;Qn=c,(We=a)&&!g?Si(n,s,(s.subtreeFlags&8772)!==0):bi(n,s),Qn=h,We=g}break;case 30:break;default:bi(n,s)}}function Hm(n){var a=n.alternate;a!==null&&(n.alternate=null,Hm(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&du(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Ue=null,Dt=!1;function Jn(n,a,s){for(s=s.child;s!==null;)Vm(n,a,s),s=s.sibling}function Vm(n,a,s){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount($r,s)}catch{}switch(s.tag){case 26:We||Mn(s,a),Jn(n,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:We||Mn(s,a);var c=Ue,h=Dt;ji(s.type)&&(Ue=s.stateNode,Dt=!1),Jn(n,a,s),js(s.stateNode),Ue=c,Dt=h;break;case 5:We||Mn(s,a);case 6:if(c=Ue,h=Dt,Ue=null,Jn(n,a,s),Ue=c,Dt=h,Ue!==null)if(Dt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(s.stateNode)}catch(g){Ne(s,a,g)}else try{Ue.removeChild(s.stateNode)}catch(g){Ne(s,a,g)}break;case 18:Ue!==null&&(Dt?(n=Ue,Sg(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),zs(n)):Sg(Ue,s.stateNode));break;case 4:c=Ue,h=Dt,Ue=s.stateNode.containerInfo,Dt=!0,Jn(n,a,s),Ue=c,Dt=h;break;case 0:case 11:case 14:case 15:We||wi(2,s,a),We||wi(4,s,a),Jn(n,a,s);break;case 1:We||(Mn(s,a),c=s.stateNode,typeof c.componentWillUnmount=="function"&&Am(s,a,c)),Jn(n,a,s);break;case 21:Jn(n,a,s);break;case 22:We=(c=We)||s.memoizedState!==null,Jn(n,a,s),We=c;break;default:Jn(n,a,s)}}function km(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{zs(n)}catch(s){Ne(a,a.return,s)}}function r7(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Rm),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Rm),a;default:throw Error(r(435,n.tag))}}function Hd(n,a){var s=r7(n);a.forEach(function(c){var h=p7.bind(null,n,c);s.has(c)||(s.add(c),c.then(h,h))})}function _t(n,a){var s=a.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],g=n,w=a,A=w;e:for(;A!==null;){switch(A.tag){case 27:if(ji(A.type)){Ue=A.stateNode,Dt=!1;break e}break;case 5:Ue=A.stateNode,Dt=!1;break e;case 3:case 4:Ue=A.stateNode.containerInfo,Dt=!0;break e}A=A.return}if(Ue===null)throw Error(r(160));Vm(g,w,h),Ue=null,Dt=!1,g=h.alternate,g!==null&&(g.return=null),h.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)zm(a,n),a=a.sibling}var mn=null;function zm(n,a){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:_t(a,n),Ut(n),c&4&&(wi(3,n,n.return),ys(3,n),wi(5,n,n.return));break;case 1:_t(a,n),Ut(n),c&512&&(We||s===null||Mn(s,s.return)),c&64&&Qn&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=mn;if(_t(a,n),Ut(n),c&512&&(We||s===null||Mn(s,s.return)),c&4){var g=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,h=h.ownerDocument||h;t:switch(c){case"title":g=h.getElementsByTagName("title")[0],(!g||g[Gr]||g[vt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=h.createElement(c),h.head.insertBefore(g,h.querySelector("head > title"))),mt(g,c,s),g[vt]=n,ot(g),c=g;break e;case"link":var w=Og("link","href",h).get(c+(s.href||""));if(w){for(var A=0;A<w.length;A++)if(g=w[A],g.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&g.getAttribute("rel")===(s.rel==null?null:s.rel)&&g.getAttribute("title")===(s.title==null?null:s.title)&&g.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){w.splice(A,1);break t}}g=h.createElement(c),mt(g,c,s),h.head.appendChild(g);break;case"meta":if(w=Og("meta","content",h).get(c+(s.content||""))){for(A=0;A<w.length;A++)if(g=w[A],g.getAttribute("content")===(s.content==null?null:""+s.content)&&g.getAttribute("name")===(s.name==null?null:s.name)&&g.getAttribute("property")===(s.property==null?null:s.property)&&g.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&g.getAttribute("charset")===(s.charSet==null?null:s.charSet)){w.splice(A,1);break t}}g=h.createElement(c),mt(g,c,s),h.head.appendChild(g);break;default:throw Error(r(468,c))}g[vt]=n,ot(g),c=g}n.stateNode=c}else Rg(h,n.type,n.stateNode);else n.stateNode=Lg(h,c,n.memoizedProps);else g!==c?(g===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):g.count--,c===null?Rg(h,n.type,n.stateNode):Lg(h,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Ld(n,n.memoizedProps,s.memoizedProps)}break;case 27:_t(a,n),Ut(n),c&512&&(We||s===null||Mn(s,s.return)),s!==null&&c&4&&Ld(n,n.memoizedProps,s.memoizedProps);break;case 5:if(_t(a,n),Ut(n),c&512&&(We||s===null||Mn(s,s.return)),n.flags&32){h=n.stateNode;try{Oa(h,"")}catch(q){Ne(n,n.return,q)}}c&4&&n.stateNode!=null&&(h=n.memoizedProps,Ld(n,h,s!==null?s.memoizedProps:h)),c&1024&&(Dd=!0);break;case 6:if(_t(a,n),Ut(n),c&4){if(n.stateNode===null)throw Error(r(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(q){Ne(n,n.return,q)}}break;case 3:if(Ol=null,h=mn,mn=jl(a.containerInfo),_t(a,n),mn=h,Ut(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{zs(a.containerInfo)}catch(q){Ne(n,n.return,q)}Dd&&(Dd=!1,Pm(n));break;case 4:c=mn,mn=jl(n.stateNode.containerInfo),_t(a,n),Ut(n),mn=c;break;case 12:_t(a,n),Ut(n);break;case 13:_t(a,n),Ut(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Bd=Cn()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Hd(n,c)));break;case 22:h=n.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,G=Qn,X=We;if(Qn=G||h,We=X||V,_t(a,n),We=X,Qn=G,Ut(n),c&8192)e:for(a=n.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(s===null||V||Qn||We||oa(n)),s=null,a=n;;){if(a.tag===5||a.tag===26){if(s===null){V=s=a;try{if(g=V.stateNode,h)w=g.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{A=V.stateNode;var J=V.memoizedProps.style,I=J!=null&&J.hasOwnProperty("display")?J.display:null;A.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(q){Ne(V,V.return,q)}}}else if(a.tag===6){if(s===null){V=a;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(q){Ne(V,V.return,q)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Hd(n,s))));break;case 19:_t(a,n),Ut(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Hd(n,c)));break;case 30:break;case 21:break;default:_t(a,n),Ut(n)}}function Ut(n){var a=n.flags;if(a&2){try{for(var s,c=n.return;c!==null;){if(Lm(c)){s=c;break}c=c.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var h=s.stateNode,g=Od(n);ml(n,g,h);break;case 5:var w=s.stateNode;s.flags&32&&(Oa(w,""),s.flags&=-33);var A=Od(n);ml(n,A,w);break;case 3:case 4:var V=s.stateNode.containerInfo,G=Od(n);Rd(n,G,V);break;default:throw Error(r(161))}}catch(X){Ne(n,n.return,X)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function Pm(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;Pm(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function bi(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Dm(n,a.alternate,a),a=a.sibling}function oa(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:wi(4,a,a.return),oa(a);break;case 1:Mn(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&Am(a,a.return,s),oa(a);break;case 27:js(a.stateNode);case 26:case 5:Mn(a,a.return),oa(a);break;case 22:a.memoizedState===null&&oa(a);break;case 30:oa(a);break;default:oa(a)}n=n.sibling}}function Si(n,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,h=n,g=a,w=g.flags;switch(g.tag){case 0:case 11:case 15:Si(h,g,s),ys(4,g);break;case 1:if(Si(h,g,s),c=g,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(G){Ne(c,c.return,G)}if(c=g,h=c.updateQueue,h!==null){var A=c.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)f2(V[h],A)}catch(G){Ne(c,c.return,G)}}s&&w&64&&Mm(g),vs(g,g.return);break;case 27:Om(g);case 26:case 5:Si(h,g,s),s&&c===null&&w&4&&jm(g),vs(g,g.return);break;case 12:Si(h,g,s);break;case 13:Si(h,g,s),s&&w&4&&km(h,g);break;case 22:g.memoizedState===null&&Si(h,g,s),vs(g,g.return);break;case 30:break;default:Si(h,g,s)}a=a.sibling}}function Vd(n,a){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&as(s))}function kd(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&as(n))}function An(n,a,s,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Nm(n,a,s,c),a=a.sibling}function Nm(n,a,s,c){var h=a.flags;switch(a.tag){case 0:case 11:case 15:An(n,a,s,c),h&2048&&ys(9,a);break;case 1:An(n,a,s,c);break;case 3:An(n,a,s,c),h&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&as(n)));break;case 12:if(h&2048){An(n,a,s,c),n=a.stateNode;try{var g=a.memoizedProps,w=g.id,A=g.onPostCommit;typeof A=="function"&&A(w,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(V){Ne(a,a.return,V)}}else An(n,a,s,c);break;case 13:An(n,a,s,c);break;case 23:break;case 22:g=a.stateNode,w=a.alternate,a.memoizedState!==null?g._visibility&2?An(n,a,s,c):ws(n,a):g._visibility&2?An(n,a,s,c):(g._visibility|=2,Xa(n,a,s,c,(a.subtreeFlags&10256)!==0)),h&2048&&Vd(w,a);break;case 24:An(n,a,s,c),h&2048&&kd(a.alternate,a);break;default:An(n,a,s,c)}}function Xa(n,a,s,c,h){for(h=h&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=n,w=a,A=s,V=c,G=w.flags;switch(w.tag){case 0:case 11:case 15:Xa(g,w,A,V,h),ys(8,w);break;case 23:break;case 22:var X=w.stateNode;w.memoizedState!==null?X._visibility&2?Xa(g,w,A,V,h):ws(g,w):(X._visibility|=2,Xa(g,w,A,V,h)),h&&G&2048&&Vd(w.alternate,w);break;case 24:Xa(g,w,A,V,h),h&&G&2048&&kd(w.alternate,w);break;default:Xa(g,w,A,V,h)}a=a.sibling}}function ws(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=n,c=a,h=c.flags;switch(c.tag){case 22:ws(s,c),h&2048&&Vd(c.alternate,c);break;case 24:ws(s,c),h&2048&&kd(c.alternate,c);break;default:ws(s,c)}a=a.sibling}}var bs=8192;function Ka(n){if(n.subtreeFlags&bs)for(n=n.child;n!==null;)Bm(n),n=n.sibling}function Bm(n){switch(n.tag){case 26:Ka(n),n.flags&bs&&n.memoizedState!==null&&I7(mn,n.memoizedState,n.memoizedProps);break;case 5:Ka(n);break;case 3:case 4:var a=mn;mn=jl(n.stateNode.containerInfo),Ka(n),mn=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=bs,bs=16777216,Ka(n),bs=a):Ka(n));break;default:Ka(n)}}function $m(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Ss(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];ct=c,Um(c,n)}$m(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_m(n),n=n.sibling}function _m(n){switch(n.tag){case 0:case 11:case 15:Ss(n),n.flags&2048&&wi(9,n,n.return);break;case 3:Ss(n);break;case 12:Ss(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,gl(n)):Ss(n);break;default:Ss(n)}}function gl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];ct=c,Um(c,n)}$m(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:wi(8,a,a.return),gl(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,gl(a));break;default:gl(a)}n=n.sibling}}function Um(n,a){for(;ct!==null;){var s=ct;switch(s.tag){case 0:case 11:case 15:wi(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:as(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,ct=c;else e:for(s=n;ct!==null;){c=ct;var h=c.sibling,g=c.return;if(Hm(c),c===s){ct=null;break e}if(h!==null){h.return=g,ct=h;break e}ct=g}}}var s7={getCacheForType:function(n){var a=wt(at),s=a.data.get(n);return s===void 0&&(s=n(),a.data.set(n,s)),s}},o7=typeof WeakMap=="function"?WeakMap:Map,He=0,Be=null,be=null,Ce=0,Ve=0,Gt=null,Ci=!1,Wa=!1,zd=!1,ei=0,Ze=0,Ti=0,la=0,Pd=0,sn=0,Qa=0,Cs=null,Ht=null,Nd=!1,Bd=0,xl=1/0,yl=null,Ei=null,pt=0,Mi=null,Ja=null,er=0,$d=0,_d=null,Gm=null,Ts=0,Ud=null;function It(){if((He&2)!==0&&Ce!==0)return Ce&-Ce;if(B.T!==null){var n=_a;return n!==0?n:Xd()}return r1()}function Im(){sn===0&&(sn=(Ce&536870912)===0||Ee?t1():536870912);var n=rn.current;return n!==null&&(n.flags|=32),sn}function qt(n,a,s){(n===Be&&(Ve===2||Ve===9)||n.cancelPendingCommit!==null)&&(tr(n,0),Ai(n,Ce,sn,!1)),Ur(n,s),((He&2)===0||n!==Be)&&(n===Be&&((He&2)===0&&(la|=s),Ze===4&&Ai(n,Ce,sn,!1)),jn(n))}function qm(n,a,s){if((He&6)!==0)throw Error(r(327));var c=!s&&(a&124)===0&&(a&n.expiredLanes)===0||_r(n,a),h=c?u7(n,a):qd(n,a,!0),g=c;do{if(h===0){Wa&&!c&&Ai(n,a,0,!1);break}else{if(s=n.current.alternate,g&&!l7(s)){h=qd(n,a,!1),g=!1;continue}if(h===2){if(g=a,n.errorRecoveryDisabledLanes&g)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){a=w;e:{var A=n;h=Cs;var V=A.current.memoizedState.isDehydrated;if(V&&(tr(A,w).flags|=256),w=qd(A,w,!1),w!==2){if(zd&&!V){A.errorRecoveryDisabledLanes|=g,la|=g,h=4;break e}g=Ht,Ht=h,g!==null&&(Ht===null?Ht=g:Ht.push.apply(Ht,g))}h=w}if(g=!1,h!==2)continue}}if(h===1){tr(n,0),Ai(n,a,0,!0);break}e:{switch(c=n,g=h,g){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:Ai(c,a,sn,!Ci);break e;case 2:Ht=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(h=Bd+300-Cn(),10<h)){if(Ai(c,a,sn,!Ci),Lo(c,0,!0)!==0)break e;c.timeoutHandle=wg(Ym.bind(null,c,s,Ht,yl,Nd,a,sn,la,Qa,Ci,g,2,-0,0),h);break e}Ym(c,s,Ht,yl,Nd,a,sn,la,Qa,Ci,g,0,-0,0)}}break}while(!0);jn(n)}function Ym(n,a,s,c,h,g,w,A,V,G,X,J,I,q){if(n.timeoutHandle=-1,J=a.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Rs={stylesheets:null,count:0,unsuspend:G7},Bm(a),J=q7(),J!==null)){n.cancelPendingCommit=J(Jm.bind(null,n,a,g,s,c,h,w,A,V,X,1,I,q)),Ai(n,g,w,!G);return}Jm(n,a,g,s,c,h,w,A,V)}function l7(n){for(var a=n;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],g=h.getSnapshot;h=h.value;try{if(!Bt(g(),h))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ai(n,a,s,c){a&=~Pd,a&=~la,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var h=a;0<h;){var g=31-Nt(h),w=1<<g;c[g]=-1,h&=~w}s!==0&&i1(n,s,a)}function vl(){return(He&6)===0?(Es(0),!1):!0}function Gd(){if(be!==null){if(Ve===0)var n=be.return;else n=be,Yn=na=null,sd(n),Fa=null,ms=0,n=be;for(;n!==null;)Em(n.alternate,n),n=n.return;be=null}}function tr(n,a){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,M7(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Gd(),Be=n,be=s=Gn(n.current,null),Ce=a,Ve=0,Gt=null,Ci=!1,Wa=_r(n,a),zd=!1,Qa=sn=Pd=la=Ti=Ze=0,Ht=Cs=null,Nd=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var h=31-Nt(c),g=1<<h;a|=n[h],c&=~g}return ei=a,_o(),s}function Fm(n,a){ye=null,B.H=sl,a===ss||a===Ko?(a=u2(),Ve=3):a===o2?(a=u2(),Ve=4):Ve=a===dm?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Gt=a,be===null&&(Ze=1,dl(n,en(a,n.current)))}function Zm(){var n=B.H;return B.H=sl,n===null?sl:n}function Xm(){var n=B.A;return B.A=s7,n}function Id(){Ze=4,Ci||(Ce&4194048)!==Ce&&rn.current!==null||(Wa=!0),(Ti&134217727)===0&&(la&134217727)===0||Be===null||Ai(Be,Ce,sn,!1)}function qd(n,a,s){var c=He;He|=2;var h=Zm(),g=Xm();(Be!==n||Ce!==a)&&(yl=null,tr(n,a)),a=!1;var w=Ze;e:do try{if(Ve!==0&&be!==null){var A=be,V=Gt;switch(Ve){case 8:Gd(),w=6;break e;case 3:case 2:case 9:case 6:rn.current===null&&(a=!0);var G=Ve;if(Ve=0,Gt=null,nr(n,A,V,G),s&&Wa){w=0;break e}break;default:G=Ve,Ve=0,Gt=null,nr(n,A,V,G)}}c7(),w=Ze;break}catch(X){Fm(n,X)}while(!0);return a&&n.shellSuspendCounter++,Yn=na=null,He=c,B.H=h,B.A=g,be===null&&(Be=null,Ce=0,_o()),w}function c7(){for(;be!==null;)Km(be)}function u7(n,a){var s=He;He|=2;var c=Zm(),h=Xm();Be!==n||Ce!==a?(yl=null,xl=Cn()+500,tr(n,a)):Wa=_r(n,a);e:do try{if(Ve!==0&&be!==null){a=be;var g=Gt;t:switch(Ve){case 1:Ve=0,Gt=null,nr(n,a,g,1);break;case 2:case 9:if(l2(g)){Ve=0,Gt=null,Wm(a);break}a=function(){Ve!==2&&Ve!==9||Be!==n||(Ve=7),jn(n)},g.then(a,a);break e;case 3:Ve=7;break e;case 4:Ve=5;break e;case 7:l2(g)?(Ve=0,Gt=null,Wm(a)):(Ve=0,Gt=null,nr(n,a,g,7));break;case 5:var w=null;switch(be.tag){case 26:w=be.memoizedState;case 5:case 27:var A=be;if(!w||Dg(w)){Ve=0,Gt=null;var V=A.sibling;if(V!==null)be=V;else{var G=A.return;G!==null?(be=G,wl(G)):be=null}break t}}Ve=0,Gt=null,nr(n,a,g,5);break;case 6:Ve=0,Gt=null,nr(n,a,g,6);break;case 8:Gd(),Ze=6;break e;default:throw Error(r(462))}}d7();break}catch(X){Fm(n,X)}while(!0);return Yn=na=null,B.H=c,B.A=h,He=s,be!==null?0:(Be=null,Ce=0,_o(),Ze)}function d7(){for(;be!==null&&!Hv();)Km(be)}function Km(n){var a=Cm(n.alternate,n,ei);n.memoizedProps=n.pendingProps,a===null?wl(n):be=a}function Wm(n){var a=n,s=a.alternate;switch(a.tag){case 15:case 0:a=xm(s,a,a.pendingProps,a.type,void 0,Ce);break;case 11:a=xm(s,a,a.pendingProps,a.type.render,a.ref,Ce);break;case 5:sd(a);default:Em(s,a),a=be=Q1(a,ei),a=Cm(s,a,ei)}n.memoizedProps=n.pendingProps,a===null?wl(n):be=a}function nr(n,a,s,c){Yn=na=null,sd(a),Fa=null,ms=0;var h=a.return;try{if(e7(n,h,a,s,Ce)){Ze=1,dl(n,en(s,n.current)),be=null;return}}catch(g){if(h!==null)throw be=h,g;Ze=1,dl(n,en(s,n.current)),be=null;return}a.flags&32768?(Ee||c===1?n=!0:Wa||(Ce&536870912)!==0?n=!1:(Ci=n=!0,(c===2||c===9||c===3||c===6)&&(c=rn.current,c!==null&&c.tag===13&&(c.flags|=16384))),Qm(a,n)):wl(a)}function wl(n){var a=n;do{if((a.flags&32768)!==0){Qm(a,Ci);return}n=a.return;var s=n7(a.alternate,a,ei);if(s!==null){be=s;return}if(a=a.sibling,a!==null){be=a;return}be=a=n}while(a!==null);Ze===0&&(Ze=5)}function Qm(n,a){do{var s=i7(n.alternate,n);if(s!==null){s.flags&=32767,be=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(n=n.sibling,n!==null)){be=n;return}be=n=s}while(n!==null);Ze=6,be=null}function Jm(n,a,s,c,h,g,w,A,V){n.cancelPendingCommit=null;do bl();while(pt!==0);if((He&6)!==0)throw Error(r(327));if(a!==null){if(a===n.current)throw Error(r(177));if(g=a.lanes|a.childLanes,g|=ku,Gv(n,s,g,w,A,V),n===Be&&(be=Be=null,Ce=0),Ja=a,Mi=n,er=s,$d=g,_d=h,Gm=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,m7(Mo,function(){return ag(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,h=K.p,K.p=2,w=He,He|=4;try{a7(n,a,s)}finally{He=w,K.p=h,B.T=c}}pt=1,eg(),tg(),ng()}}function eg(){if(pt===1){pt=0;var n=Mi,a=Ja,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var c=K.p;K.p=2;var h=He;He|=4;try{zm(a,n);var g=af,w=U1(n.containerInfo),A=g.focusedElem,V=g.selectionRange;if(w!==A&&A&&A.ownerDocument&&_1(A.ownerDocument.documentElement,A)){if(V!==null&&Ou(A)){var G=V.start,X=V.end;if(X===void 0&&(X=G),"selectionStart"in A)A.selectionStart=G,A.selectionEnd=Math.min(X,A.value.length);else{var J=A.ownerDocument||document,I=J&&J.defaultView||window;if(I.getSelection){var q=I.getSelection(),he=A.textContent.length,ue=Math.min(V.start,he),Pe=V.end===void 0?ue:Math.min(V.end,he);!q.extend&&ue>Pe&&(w=Pe,Pe=ue,ue=w);var N=$1(A,ue),z=$1(A,Pe);if(N&&z&&(q.rangeCount!==1||q.anchorNode!==N.node||q.anchorOffset!==N.offset||q.focusNode!==z.node||q.focusOffset!==z.offset)){var U=J.createRange();U.setStart(N.node,N.offset),q.removeAllRanges(),ue>Pe?(q.addRange(U),q.extend(z.node,z.offset)):(U.setEnd(z.node,z.offset),q.addRange(U))}}}}for(J=[],q=A;q=q.parentNode;)q.nodeType===1&&J.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<J.length;A++){var Q=J[A];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Hl=!!nf,af=nf=null}finally{He=h,K.p=c,B.T=s}}n.current=a,pt=2}}function tg(){if(pt===2){pt=0;var n=Mi,a=Ja,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var c=K.p;K.p=2;var h=He;He|=4;try{Dm(n,a.alternate,a)}finally{He=h,K.p=c,B.T=s}}pt=3}}function ng(){if(pt===4||pt===3){pt=0,Vv();var n=Mi,a=Ja,s=er,c=Gm;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?pt=5:(pt=0,Ja=Mi=null,ig(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Ei=null),cu(s),a=a.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot($r,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=B.T,h=K.p,K.p=2,B.T=null;try{for(var g=n.onRecoverableError,w=0;w<c.length;w++){var A=c[w];g(A.value,{componentStack:A.stack})}}finally{B.T=a,K.p=h}}(er&3)!==0&&bl(),jn(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===Ud?Ts++:(Ts=0,Ud=n):Ts=0,Es(0)}}function ig(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,as(a)))}function bl(n){return eg(),tg(),ng(),ag()}function ag(){if(pt!==5)return!1;var n=Mi,a=$d;$d=0;var s=cu(er),c=B.T,h=K.p;try{K.p=32>s?32:s,B.T=null,s=_d,_d=null;var g=Mi,w=er;if(pt=0,Ja=Mi=null,er=0,(He&6)!==0)throw Error(r(331));var A=He;if(He|=4,_m(g.current),Nm(g,g.current,w,s),He=A,Es(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot($r,g)}catch{}return!0}finally{K.p=h,B.T=c,ig(n,a)}}function rg(n,a,s){a=en(s,a),a=wd(n.stateNode,a,2),n=gi(n,a,2),n!==null&&(Ur(n,2),jn(n))}function Ne(n,a,s){if(n.tag===3)rg(n,n,s);else for(;a!==null;){if(a.tag===3){rg(a,n,s);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ei===null||!Ei.has(c))){n=en(s,n),s=cm(2),c=gi(a,s,2),c!==null&&(um(s,c,a,n),Ur(c,2),jn(c));break}}a=a.return}}function Yd(n,a,s){var c=n.pingCache;if(c===null){c=n.pingCache=new o7;var h=new Set;c.set(a,h)}else h=c.get(a),h===void 0&&(h=new Set,c.set(a,h));h.has(s)||(zd=!0,h.add(s),n=f7.bind(null,n,a,s),a.then(n,n))}function f7(n,a,s){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Be===n&&(Ce&s)===s&&(Ze===4||Ze===3&&(Ce&62914560)===Ce&&300>Cn()-Bd?(He&2)===0&&tr(n,0):Pd|=s,Qa===Ce&&(Qa=0)),jn(n)}function sg(n,a){a===0&&(a=n1()),n=Pa(n,a),n!==null&&(Ur(n,a),jn(n))}function h7(n){var a=n.memoizedState,s=0;a!==null&&(s=a.retryLane),sg(n,s)}function p7(n,a){var s=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(a),sg(n,s)}function m7(n,a){return ru(n,a)}var Sl=null,ir=null,Fd=!1,Cl=!1,Zd=!1,ca=0;function jn(n){n!==ir&&n.next===null&&(ir===null?Sl=ir=n:ir=ir.next=n),Cl=!0,Fd||(Fd=!0,x7())}function Es(n,a){if(!Zd&&Cl){Zd=!0;do for(var s=!1,c=Sl;c!==null;){if(n!==0){var h=c.pendingLanes;if(h===0)var g=0;else{var w=c.suspendedLanes,A=c.pingedLanes;g=(1<<31-Nt(42|n)+1)-1,g&=h&~(w&~A),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(s=!0,ug(c,g))}else g=Ce,g=Lo(c,c===Be?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||_r(c,g)||(s=!0,ug(c,g));c=c.next}while(s);Zd=!1}}function g7(){og()}function og(){Cl=Fd=!1;var n=0;ca!==0&&(E7()&&(n=ca),ca=0);for(var a=Cn(),s=null,c=Sl;c!==null;){var h=c.next,g=lg(c,a);g===0?(c.next=null,s===null?Sl=h:s.next=h,h===null&&(ir=s)):(s=c,(n!==0||(g&3)!==0)&&(Cl=!0)),c=h}Es(n)}function lg(n,a){for(var s=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var w=31-Nt(g),A=1<<w,V=h[w];V===-1?((A&s)===0||(A&c)!==0)&&(h[w]=Uv(A,a)):V<=a&&(n.expiredLanes|=A),g&=~A}if(a=Be,s=Ce,s=Lo(n,n===a?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===a&&(Ve===2||Ve===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&su(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||_r(n,s)){if(a=s&-s,a===n.callbackPriority)return a;switch(c!==null&&su(c),cu(s)){case 2:case 8:s=Jp;break;case 32:s=Mo;break;case 268435456:s=e1;break;default:s=Mo}return c=cg.bind(null,n),s=ru(s,c),n.callbackPriority=a,n.callbackNode=s,a}return c!==null&&c!==null&&su(c),n.callbackPriority=2,n.callbackNode=null,2}function cg(n,a){if(pt!==0&&pt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(bl()&&n.callbackNode!==s)return null;var c=Ce;return c=Lo(n,n===Be?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(qm(n,c,a),lg(n,Cn()),n.callbackNode!=null&&n.callbackNode===s?cg.bind(null,n):null)}function ug(n,a){if(bl())return null;qm(n,a,!0)}function x7(){A7(function(){(He&6)!==0?ru(Qp,g7):og()})}function Xd(){return ca===0&&(ca=t1()),ca}function dg(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Vo(""+n)}function fg(n,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,n.id&&s.setAttribute("form",n.id),a.parentNode.insertBefore(s,a),n=new FormData(n),s.parentNode.removeChild(s),n}function y7(n,a,s,c,h){if(a==="submit"&&s&&s.stateNode===h){var g=dg((h[Lt]||null).action),w=c.submitter;w&&(a=(a=w[Lt]||null)?dg(a.formAction):w.getAttribute("formAction"),a!==null&&(g=a,w=null));var A=new No("action","action",null,c,h);n.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ca!==0){var V=w?fg(h,w):new FormData(h);md(s,{pending:!0,data:V,method:h.method,action:g},null,V)}}else typeof g=="function"&&(A.preventDefault(),V=w?fg(h,w):new FormData(h),md(s,{pending:!0,data:V,method:h.method,action:g},g,V))},currentTarget:h}]})}}for(var Kd=0;Kd<Vu.length;Kd++){var Wd=Vu[Kd],v7=Wd.toLowerCase(),w7=Wd[0].toUpperCase()+Wd.slice(1);pn(v7,"on"+w7)}pn(q1,"onAnimationEnd"),pn(Y1,"onAnimationIteration"),pn(F1,"onAnimationStart"),pn("dblclick","onDoubleClick"),pn("focusin","onFocus"),pn("focusout","onBlur"),pn(P8,"onTransitionRun"),pn(N8,"onTransitionStart"),pn(B8,"onTransitionCancel"),pn(Z1,"onTransitionEnd"),Aa("onMouseEnter",["mouseout","mouseover"]),Aa("onMouseLeave",["mouseout","mouseover"]),Aa("onPointerEnter",["pointerout","pointerover"]),Aa("onPointerLeave",["pointerout","pointerover"]),Fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b7=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ms));function hg(n,a){a=(a&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],h=c.event;c=c.listeners;e:{var g=void 0;if(a)for(var w=c.length-1;0<=w;w--){var A=c[w],V=A.instance,G=A.currentTarget;if(A=A.listener,V!==g&&h.isPropagationStopped())break e;g=A,h.currentTarget=G;try{g(h)}catch(X){ul(X)}h.currentTarget=null,g=V}else for(w=0;w<c.length;w++){if(A=c[w],V=A.instance,G=A.currentTarget,A=A.listener,V!==g&&h.isPropagationStopped())break e;g=A,h.currentTarget=G;try{g(h)}catch(X){ul(X)}h.currentTarget=null,g=V}}}}function Se(n,a){var s=a[uu];s===void 0&&(s=a[uu]=new Set);var c=n+"__bubble";s.has(c)||(pg(a,n,2,!1),s.add(c))}function Qd(n,a,s){var c=0;a&&(c|=4),pg(s,n,c,a)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Jd(n){if(!n[Tl]){n[Tl]=!0,o1.forEach(function(s){s!=="selectionchange"&&(b7.has(s)||Qd(s,!1,n),Qd(s,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Tl]||(a[Tl]=!0,Qd("selectionchange",!1,a))}}function pg(n,a,s,c){switch(Ng(a)){case 2:var h=Z7;break;case 8:h=X7;break;default:h=pf}s=h.bind(null,a,s,n),h=void 0,!bu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(a,s,{capture:!0,passive:h}):n.addEventListener(a,s,!0):h!==void 0?n.addEventListener(a,s,{passive:h}):n.addEventListener(a,s,!1)}function ef(n,a,s,c,h){var g=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var A=c.stateNode.containerInfo;if(A===h)break;if(w===4)for(w=c.return;w!==null;){var V=w.tag;if((V===3||V===4)&&w.stateNode.containerInfo===h)return;w=w.return}for(;A!==null;){if(w=Ta(A),w===null)return;if(V=w.tag,V===5||V===6||V===26||V===27){c=g=w;continue e}A=A.parentNode}}c=c.return}b1(function(){var G=g,X=vu(s),J=[];e:{var I=X1.get(n);if(I!==void 0){var q=No,he=n;switch(n){case"keypress":if(zo(s)===0)break e;case"keydown":case"keyup":q=m8;break;case"focusin":he="focus",q=Eu;break;case"focusout":he="blur",q=Eu;break;case"beforeblur":case"afterblur":q=Eu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=T1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=i8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=y8;break;case q1:case Y1:case F1:q=s8;break;case Z1:q=w8;break;case"scroll":case"scrollend":q=t8;break;case"wheel":q=S8;break;case"copy":case"cut":case"paste":q=l8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=M1;break;case"toggle":case"beforetoggle":q=T8}var ue=(a&4)!==0,Pe=!ue&&(n==="scroll"||n==="scrollend"),N=ue?I!==null?I+"Capture":null:I;ue=[];for(var z=G,U;z!==null;){var Q=z;if(U=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||U===null||N===null||(Q=qr(z,N),Q!=null&&ue.push(As(z,Q,U))),Pe)break;z=z.return}0<ue.length&&(I=new q(I,he,null,s,X),J.push({event:I,listeners:ue}))}}if((a&7)===0){e:{if(I=n==="mouseover"||n==="pointerover",q=n==="mouseout"||n==="pointerout",I&&s!==yu&&(he=s.relatedTarget||s.fromElement)&&(Ta(he)||he[Ca]))break e;if((q||I)&&(I=X.window===X?X:(I=X.ownerDocument)?I.defaultView||I.parentWindow:window,q?(he=s.relatedTarget||s.toElement,q=G,he=he?Ta(he):null,he!==null&&(Pe=l(he),ue=he.tag,he!==Pe||ue!==5&&ue!==27&&ue!==6)&&(he=null)):(q=null,he=G),q!==he)){if(ue=T1,Q="onMouseLeave",N="onMouseEnter",z="mouse",(n==="pointerout"||n==="pointerover")&&(ue=M1,Q="onPointerLeave",N="onPointerEnter",z="pointer"),Pe=q==null?I:Ir(q),U=he==null?I:Ir(he),I=new ue(Q,z+"leave",q,s,X),I.target=Pe,I.relatedTarget=U,Q=null,Ta(X)===G&&(ue=new ue(N,z+"enter",he,s,X),ue.target=U,ue.relatedTarget=Pe,Q=ue),Pe=Q,q&&he)t:{for(ue=q,N=he,z=0,U=ue;U;U=ar(U))z++;for(U=0,Q=N;Q;Q=ar(Q))U++;for(;0<z-U;)ue=ar(ue),z--;for(;0<U-z;)N=ar(N),U--;for(;z--;){if(ue===N||N!==null&&ue===N.alternate)break t;ue=ar(ue),N=ar(N)}ue=null}else ue=null;q!==null&&mg(J,I,q,ue,!1),he!==null&&Pe!==null&&mg(J,Pe,he,ue,!0)}}e:{if(I=G?Ir(G):window,q=I.nodeName&&I.nodeName.toLowerCase(),q==="select"||q==="input"&&I.type==="file")var se=V1;else if(D1(I))if(k1)se=V8;else{se=D8;var ve=R8}else q=I.nodeName,!q||q.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?G&&xu(G.elementType)&&(se=V1):se=H8;if(se&&(se=se(n,G))){H1(J,se,s,X);break e}ve&&ve(n,I,G),n==="focusout"&&G&&I.type==="number"&&G.memoizedProps.value!=null&&gu(I,"number",I.value)}switch(ve=G?Ir(G):window,n){case"focusin":(D1(ve)||ve.contentEditable==="true")&&(Va=ve,Ru=G,Jr=null);break;case"focusout":Jr=Ru=Va=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,G1(J,s,X);break;case"selectionchange":if(z8)break;case"keydown":case"keyup":G1(J,s,X)}var le;if(Au)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ha?O1(n,s)&&(fe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(fe="onCompositionStart");fe&&(A1&&s.locale!=="ko"&&(Ha||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ha&&(le=S1()):(fi=X,Su="value"in fi?fi.value:fi.textContent,Ha=!0)),ve=El(G,fe),0<ve.length&&(fe=new E1(fe,n,null,s,X),J.push({event:fe,listeners:ve}),le?fe.data=le:(le=R1(s),le!==null&&(fe.data=le)))),(le=M8?A8(n,s):j8(n,s))&&(fe=El(G,"onBeforeInput"),0<fe.length&&(ve=new E1("onBeforeInput","beforeinput",null,s,X),J.push({event:ve,listeners:fe}),ve.data=le)),y7(J,n,G,s,X)}hg(J,a)})}function As(n,a,s){return{instance:n,listener:a,currentTarget:s}}function El(n,a){for(var s=a+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||g===null||(h=qr(n,s),h!=null&&c.unshift(As(n,h,g)),h=qr(n,a),h!=null&&c.push(As(n,h,g))),n.tag===3)return c;n=n.return}return[]}function ar(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function mg(n,a,s,c,h){for(var g=a._reactName,w=[];s!==null&&s!==c;){var A=s,V=A.alternate,G=A.stateNode;if(A=A.tag,V!==null&&V===c)break;A!==5&&A!==26&&A!==27||G===null||(V=G,h?(G=qr(s,g),G!=null&&w.unshift(As(s,G,V))):h||(G=qr(s,g),G!=null&&w.push(As(s,G,V)))),s=s.return}w.length!==0&&n.push({event:a,listeners:w})}var S7=/\r\n?/g,C7=/\u0000|\uFFFD/g;function gg(n){return(typeof n=="string"?n:""+n).replace(S7,`
`).replace(C7,"")}function xg(n,a){return a=gg(a),gg(n)===a}function Ml(){}function ze(n,a,s,c,h,g){switch(s){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||Oa(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&Oa(n,""+c);break;case"className":Ro(n,"class",c);break;case"tabIndex":Ro(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Ro(n,s,c);break;case"style":v1(n,c,g);break;case"data":if(a!=="object"){Ro(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Vo(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(s==="formAction"?(a!=="input"&&ze(n,a,"name",h.name,h,null),ze(n,a,"formEncType",h.formEncType,h,null),ze(n,a,"formMethod",h.formMethod,h,null),ze(n,a,"formTarget",h.formTarget,h,null)):(ze(n,a,"encType",h.encType,h,null),ze(n,a,"method",h.method,h,null),ze(n,a,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Vo(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=Ml);break;case"onScroll":c!=null&&Se("scroll",n);break;case"onScrollEnd":c!=null&&Se("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=Vo(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":Se("beforetoggle",n),Se("toggle",n),Oo(n,"popover",c);break;case"xlinkActuate":_n(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":_n(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":_n(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":_n(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":_n(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":_n(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":_n(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":_n(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":_n(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Oo(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Jv.get(s)||s,Oo(n,s,c))}}function tf(n,a,s,c,h,g){switch(s){case"style":v1(n,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"children":typeof c=="string"?Oa(n,c):(typeof c=="number"||typeof c=="bigint")&&Oa(n,""+c);break;case"onScroll":c!=null&&Se("scroll",n);break;case"onScrollEnd":c!=null&&Se("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Ml);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!l1.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),a=s.slice(2,h?s.length-7:void 0),g=n[Lt]||null,g=g!=null?g[s]:null,typeof g=="function"&&n.removeEventListener(a,g,h),typeof c=="function")){typeof g!="function"&&g!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(a,c,h);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):Oo(n,s,c)}}}function mt(n,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",n),Se("load",n);var c=!1,h=!1,g;for(g in s)if(s.hasOwnProperty(g)){var w=s[g];if(w!=null)switch(g){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ze(n,a,g,w,s,null)}}h&&ze(n,a,"srcSet",s.srcSet,s,null),c&&ze(n,a,"src",s.src,s,null);return;case"input":Se("invalid",n);var A=g=w=h=null,V=null,G=null;for(c in s)if(s.hasOwnProperty(c)){var X=s[c];if(X!=null)switch(c){case"name":h=X;break;case"type":w=X;break;case"checked":V=X;break;case"defaultChecked":G=X;break;case"value":g=X;break;case"defaultValue":A=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,a));break;default:ze(n,a,c,X,s,null)}}m1(n,g,A,V,G,w,h,!1),Do(n);return;case"select":Se("invalid",n),c=w=g=null;for(h in s)if(s.hasOwnProperty(h)&&(A=s[h],A!=null))switch(h){case"value":g=A;break;case"defaultValue":w=A;break;case"multiple":c=A;default:ze(n,a,h,A,s,null)}a=g,s=w,n.multiple=!!c,a!=null?La(n,!!c,a,!1):s!=null&&La(n,!!c,s,!0);return;case"textarea":Se("invalid",n),g=h=c=null;for(w in s)if(s.hasOwnProperty(w)&&(A=s[w],A!=null))switch(w){case"value":c=A;break;case"defaultValue":h=A;break;case"children":g=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:ze(n,a,w,A,s,null)}x1(n,c,h,g),Do(n);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(c=s[V],c!=null))switch(V){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ze(n,a,V,c,s,null)}return;case"dialog":Se("beforetoggle",n),Se("toggle",n),Se("cancel",n),Se("close",n);break;case"iframe":case"object":Se("load",n);break;case"video":case"audio":for(c=0;c<Ms.length;c++)Se(Ms[c],n);break;case"image":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"embed":case"source":case"link":Se("error",n),Se("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in s)if(s.hasOwnProperty(G)&&(c=s[G],c!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ze(n,a,G,c,s,null)}return;default:if(xu(a)){for(X in s)s.hasOwnProperty(X)&&(c=s[X],c!==void 0&&tf(n,a,X,c,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(c=s[A],c!=null&&ze(n,a,A,c,s,null))}function T7(n,a,s,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,g=null,w=null,A=null,V=null,G=null,X=null;for(q in s){var J=s[q];if(s.hasOwnProperty(q)&&J!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":V=J;default:c.hasOwnProperty(q)||ze(n,a,q,null,c,J)}}for(var I in c){var q=c[I];if(J=s[I],c.hasOwnProperty(I)&&(q!=null||J!=null))switch(I){case"type":g=q;break;case"name":h=q;break;case"checked":G=q;break;case"defaultChecked":X=q;break;case"value":w=q;break;case"defaultValue":A=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,a));break;default:q!==J&&ze(n,a,I,q,c,J)}}mu(n,w,A,V,G,X,g,h);return;case"select":q=w=A=I=null;for(g in s)if(V=s[g],s.hasOwnProperty(g)&&V!=null)switch(g){case"value":break;case"multiple":q=V;default:c.hasOwnProperty(g)||ze(n,a,g,null,c,V)}for(h in c)if(g=c[h],V=s[h],c.hasOwnProperty(h)&&(g!=null||V!=null))switch(h){case"value":I=g;break;case"defaultValue":A=g;break;case"multiple":w=g;default:g!==V&&ze(n,a,h,g,c,V)}a=A,s=w,c=q,I!=null?La(n,!!s,I,!1):!!c!=!!s&&(a!=null?La(n,!!s,a,!0):La(n,!!s,s?[]:"",!1));return;case"textarea":q=I=null;for(A in s)if(h=s[A],s.hasOwnProperty(A)&&h!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ze(n,a,A,null,c,h)}for(w in c)if(h=c[w],g=s[w],c.hasOwnProperty(w)&&(h!=null||g!=null))switch(w){case"value":I=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==g&&ze(n,a,w,h,c,g)}g1(n,I,q);return;case"option":for(var he in s)if(I=s[he],s.hasOwnProperty(he)&&I!=null&&!c.hasOwnProperty(he))switch(he){case"selected":n.selected=!1;break;default:ze(n,a,he,null,c,I)}for(V in c)if(I=c[V],q=s[V],c.hasOwnProperty(V)&&I!==q&&(I!=null||q!=null))switch(V){case"selected":n.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:ze(n,a,V,I,c,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in s)I=s[ue],s.hasOwnProperty(ue)&&I!=null&&!c.hasOwnProperty(ue)&&ze(n,a,ue,null,c,I);for(G in c)if(I=c[G],q=s[G],c.hasOwnProperty(G)&&I!==q&&(I!=null||q!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(r(137,a));break;default:ze(n,a,G,I,c,q)}return;default:if(xu(a)){for(var Pe in s)I=s[Pe],s.hasOwnProperty(Pe)&&I!==void 0&&!c.hasOwnProperty(Pe)&&tf(n,a,Pe,void 0,c,I);for(X in c)I=c[X],q=s[X],!c.hasOwnProperty(X)||I===q||I===void 0&&q===void 0||tf(n,a,X,I,c,q);return}}for(var N in s)I=s[N],s.hasOwnProperty(N)&&I!=null&&!c.hasOwnProperty(N)&&ze(n,a,N,null,c,I);for(J in c)I=c[J],q=s[J],!c.hasOwnProperty(J)||I===q||I==null&&q==null||ze(n,a,J,I,c,q)}var nf=null,af=null;function Al(n){return n.nodeType===9?n:n.ownerDocument}function yg(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vg(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function rf(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var sf=null;function E7(){var n=window.event;return n&&n.type==="popstate"?n===sf?!1:(sf=n,!0):(sf=null,!1)}var wg=typeof setTimeout=="function"?setTimeout:void 0,M7=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,A7=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(n){return bg.resolve(null).then(n).catch(j7)}:wg;function j7(n){setTimeout(function(){throw n})}function ji(n){return n==="head"}function Sg(n,a){var s=a,c=0,h=0;do{var g=s.nextSibling;if(n.removeChild(s),g&&g.nodeType===8)if(s=g.data,s==="/$"){if(0<c&&8>c){s=c;var w=n.ownerDocument;if(s&1&&js(w.documentElement),s&2&&js(w.body),s&4)for(s=w.head,js(s),w=s.firstChild;w;){var A=w.nextSibling,V=w.nodeName;w[Gr]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&w.rel.toLowerCase()==="stylesheet"||s.removeChild(w),w=A}}if(h===0){n.removeChild(g),zs(a);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:c=s.charCodeAt(0)-48;else c=0;s=g}while(s);zs(a)}function of(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":of(s),du(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function L7(n,a,s,c){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Gr])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var g=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=gn(n.nextSibling),n===null)break}return null}function O7(n,a,s){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=gn(n.nextSibling),n===null))return null;return n}function lf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function R7(n,a){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")a();else{var c=function(){a(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function gn(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var cf=null;function Cg(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return n;a--}else s==="/$"&&a++}n=n.previousSibling}return null}function Tg(n,a,s){switch(a=Al(s),n){case"html":if(n=a.documentElement,!n)throw Error(r(452));return n;case"head":if(n=a.head,!n)throw Error(r(453));return n;case"body":if(n=a.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function js(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);du(n)}var on=new Map,Eg=new Set;function jl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ti=K.d;K.d={f:D7,r:H7,D:V7,C:k7,L:z7,m:P7,X:B7,S:N7,M:$7};function D7(){var n=ti.f(),a=vl();return n||a}function H7(n){var a=Ea(n);a!==null&&a.tag===5&&a.type==="form"?q2(a):ti.r(n)}var rr=typeof document>"u"?null:document;function Mg(n,a,s){var c=rr;if(c&&typeof a=="string"&&a){var h=Jt(a);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),Eg.has(h)||(Eg.add(h),n={rel:n,crossOrigin:s,href:a},c.querySelector(h)===null&&(a=c.createElement("link"),mt(a,"link",n),ot(a),c.head.appendChild(a)))}}function V7(n){ti.D(n),Mg("dns-prefetch",n,null)}function k7(n,a){ti.C(n,a),Mg("preconnect",n,a)}function z7(n,a,s){ti.L(n,a,s);var c=rr;if(c&&n&&a){var h='link[rel="preload"][as="'+Jt(a)+'"]';a==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Jt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Jt(s.imageSizes)+'"]')):h+='[href="'+Jt(n)+'"]';var g=h;switch(a){case"style":g=sr(n);break;case"script":g=or(n)}on.has(g)||(n=m({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:n,as:a},s),on.set(g,n),c.querySelector(h)!==null||a==="style"&&c.querySelector(Ls(g))||a==="script"&&c.querySelector(Os(g))||(a=c.createElement("link"),mt(a,"link",n),ot(a),c.head.appendChild(a)))}}function P7(n,a){ti.m(n,a);var s=rr;if(s&&n){var c=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+Jt(c)+'"][href="'+Jt(n)+'"]',g=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=or(n)}if(!on.has(g)&&(n=m({rel:"modulepreload",href:n},a),on.set(g,n),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Os(g)))return}c=s.createElement("link"),mt(c,"link",n),ot(c),s.head.appendChild(c)}}}function N7(n,a,s){ti.S(n,a,s);var c=rr;if(c&&n){var h=Ma(c).hoistableStyles,g=sr(n);a=a||"default";var w=h.get(g);if(!w){var A={loading:0,preload:null};if(w=c.querySelector(Ls(g)))A.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":a},s),(s=on.get(g))&&uf(n,s);var V=w=c.createElement("link");ot(V),mt(V,"link",n),V._p=new Promise(function(G,X){V.onload=G,V.onerror=X}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ll(w,a,c)}w={type:"stylesheet",instance:w,count:1,state:A},h.set(g,w)}}}function B7(n,a){ti.X(n,a);var s=rr;if(s&&n){var c=Ma(s).hoistableScripts,h=or(n),g=c.get(h);g||(g=s.querySelector(Os(h)),g||(n=m({src:n,async:!0},a),(a=on.get(h))&&df(n,a),g=s.createElement("script"),ot(g),mt(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(h,g))}}function $7(n,a){ti.M(n,a);var s=rr;if(s&&n){var c=Ma(s).hoistableScripts,h=or(n),g=c.get(h);g||(g=s.querySelector(Os(h)),g||(n=m({src:n,async:!0,type:"module"},a),(a=on.get(h))&&df(n,a),g=s.createElement("script"),ot(g),mt(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(h,g))}}function Ag(n,a,s,c){var h=(h=de.current)?jl(h):null;if(!h)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=sr(s.href),s=Ma(h).hoistableStyles,c=s.get(a),c||(c={type:"style",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=sr(s.href);var g=Ma(h).hoistableStyles,w=g.get(n);if(w||(h=h.ownerDocument||h,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,w),(g=h.querySelector(Ls(n)))&&!g._p&&(w.instance=g,w.state.loading=5),on.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},on.set(n,s),g||_7(h,n,s,w.state))),a&&c===null)throw Error(r(528,""));return w}if(a&&c!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=or(s),s=Ma(h).hoistableScripts,c=s.get(a),c||(c={type:"script",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function sr(n){return'href="'+Jt(n)+'"'}function Ls(n){return'link[rel="stylesheet"]['+n+"]"}function jg(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function _7(n,a,s,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),mt(a,"link",s),ot(a),n.head.appendChild(a))}function or(n){return'[src="'+Jt(n)+'"]'}function Os(n){return"script[async]"+n}function Lg(n,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+Jt(s.href)+'"]');if(c)return a.instance=c,ot(c),c;var h=m({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),ot(c),mt(c,"style",h),Ll(c,s.precedence,n),a.instance=c;case"stylesheet":h=sr(s.href);var g=n.querySelector(Ls(h));if(g)return a.state.loading|=4,a.instance=g,ot(g),g;c=jg(s),(h=on.get(h))&&uf(c,h),g=(n.ownerDocument||n).createElement("link"),ot(g);var w=g;return w._p=new Promise(function(A,V){w.onload=A,w.onerror=V}),mt(g,"link",c),a.state.loading|=4,Ll(g,s.precedence,n),a.instance=g;case"script":return g=or(s.src),(h=n.querySelector(Os(g)))?(a.instance=h,ot(h),h):(c=s,(h=on.get(g))&&(c=m({},s),df(c,h)),n=n.ownerDocument||n,h=n.createElement("script"),ot(h),mt(h,"link",c),n.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Ll(c,s.precedence,n));return a.instance}function Ll(n,a,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,g=h,w=0;w<c.length;w++){var A=c[w];if(A.dataset.precedence===a)g=A;else if(g!==h)break}g?g.parentNode.insertBefore(n,g.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(n,a.firstChild))}function uf(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function df(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Ol=null;function Og(n,a,s){if(Ol===null){var c=new Map,h=Ol=new Map;h.set(s,c)}else h=Ol,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var g=s[h];if(!(g[Gr]||g[vt]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var w=g.getAttribute(a)||"";w=n+w;var A=c.get(w);A?A.push(g):c.set(w,[g])}}return c}function Rg(n,a,s){n=n.ownerDocument||n,n.head.insertBefore(s,a==="title"?n.querySelector("head > title"):null)}function U7(n,a,s){if(s===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Dg(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Rs=null;function G7(){}function I7(n,a,s){if(Rs===null)throw Error(r(475));var c=Rs;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=sr(s.href),g=n.querySelector(Ls(h));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Rl.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=g,ot(g);return}g=n.ownerDocument||n,s=jg(s),(h=on.get(h))&&uf(s,h),g=g.createElement("link"),ot(g);var w=g;w._p=new Promise(function(A,V){w.onload=A,w.onerror=V}),mt(g,"link",s),a.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Rl.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function q7(){if(Rs===null)throw Error(r(475));var n=Rs;return n.stylesheets&&n.count===0&&ff(n,n.stylesheets),0<n.count?function(a){var s=setTimeout(function(){if(n.stylesheets&&ff(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Rl(){if(this.count--,this.count===0){if(this.stylesheets)ff(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Dl=null;function ff(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Dl=new Map,a.forEach(Y7,n),Dl=null,Rl.call(n))}function Y7(n,a){if(!(a.state.loading&4)){var s=Dl.get(n);if(s)var c=s.get(null);else{s=new Map,Dl.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<h.length;g++){var w=h[g];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(s.set(w.dataset.precedence,w),c=w)}c&&s.set(null,c)}h=a.instance,w=h.getAttribute("data-precedence"),g=s.get(w)||c,g===c&&s.set(null,h),s.set(w,h),this.count++,c=Rl.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),g?g.parentNode.insertBefore(h,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),a.state.loading|=4}}var Ds={$$typeof:C,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function F7(n,a,s,c,h,g,w,A){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ou(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ou(0),this.hiddenUpdates=ou(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=g,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Hg(n,a,s,c,h,g,w,A,V,G,X,J){return n=new F7(n,a,s,w,A,V,G,J),a=1,g===!0&&(a|=24),g=$t(3,null,null,a),n.current=g,g.stateNode=n,a=Yu(),a.refCount++,n.pooledCache=a,a.refCount++,g.memoizedState={element:c,isDehydrated:s,cache:a},Ku(g),n}function Vg(n){return n?(n=Na,n):Na}function kg(n,a,s,c,h,g){h=Vg(h),c.context===null?c.context=h:c.pendingContext=h,c=mi(a),c.payload={element:s},g=g===void 0?null:g,g!==null&&(c.callback=g),s=gi(n,c,a),s!==null&&(qt(s,n,a),ls(s,n,a))}function zg(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<a?s:a}}function hf(n,a){zg(n,a),(n=n.alternate)&&zg(n,a)}function Pg(n){if(n.tag===13){var a=Pa(n,67108864);a!==null&&qt(a,n,67108864),hf(n,67108864)}}var Hl=!0;function Z7(n,a,s,c){var h=B.T;B.T=null;var g=K.p;try{K.p=2,pf(n,a,s,c)}finally{K.p=g,B.T=h}}function X7(n,a,s,c){var h=B.T;B.T=null;var g=K.p;try{K.p=8,pf(n,a,s,c)}finally{K.p=g,B.T=h}}function pf(n,a,s,c){if(Hl){var h=mf(c);if(h===null)ef(n,a,c,Vl,s),Bg(n,c);else if(W7(h,n,a,s,c))c.stopPropagation();else if(Bg(n,c),a&4&&-1<K7.indexOf(n)){for(;h!==null;){var g=Ea(h);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var w=Yi(g.pendingLanes);if(w!==0){var A=g;for(A.pendingLanes|=2,A.entangledLanes|=2;w;){var V=1<<31-Nt(w);A.entanglements[1]|=V,w&=~V}jn(g),(He&6)===0&&(xl=Cn()+500,Es(0))}}break;case 13:A=Pa(g,2),A!==null&&qt(A,g,2),vl(),hf(g,2)}if(g=mf(c),g===null&&ef(n,a,c,Vl,s),g===h)break;h=g}h!==null&&c.stopPropagation()}else ef(n,a,c,null,s)}}function mf(n){return n=vu(n),gf(n)}var Vl=null;function gf(n){if(Vl=null,n=Ta(n),n!==null){var a=l(n);if(a===null)n=null;else{var s=a.tag;if(s===13){if(n=u(a),n!==null)return n;n=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Vl=n,null}function Ng(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kv()){case Qp:return 2;case Jp:return 8;case Mo:case zv:return 32;case e1:return 268435456;default:return 32}default:return 32}}var xf=!1,Li=null,Oi=null,Ri=null,Hs=new Map,Vs=new Map,Di=[],K7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bg(n,a){switch(n){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":Hs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vs.delete(a.pointerId)}}function ks(n,a,s,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:a,domEventName:s,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},a!==null&&(a=Ea(a),a!==null&&Pg(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),n)}function W7(n,a,s,c,h){switch(a){case"focusin":return Li=ks(Li,n,a,s,c,h),!0;case"dragenter":return Oi=ks(Oi,n,a,s,c,h),!0;case"mouseover":return Ri=ks(Ri,n,a,s,c,h),!0;case"pointerover":var g=h.pointerId;return Hs.set(g,ks(Hs.get(g)||null,n,a,s,c,h)),!0;case"gotpointercapture":return g=h.pointerId,Vs.set(g,ks(Vs.get(g)||null,n,a,s,c,h)),!0}return!1}function $g(n){var a=Ta(n.target);if(a!==null){var s=l(a);if(s!==null){if(a=s.tag,a===13){if(a=u(s),a!==null){n.blockedOn=a,Iv(n.priority,function(){if(s.tag===13){var c=It();c=lu(c);var h=Pa(s,c);h!==null&&qt(h,s,c),hf(s,c)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function kl(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var s=mf(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);yu=c,s.target.dispatchEvent(c),yu=null}else return a=Ea(s),a!==null&&Pg(a),n.blockedOn=s,!1;a.shift()}return!0}function _g(n,a,s){kl(n)&&s.delete(a)}function Q7(){xf=!1,Li!==null&&kl(Li)&&(Li=null),Oi!==null&&kl(Oi)&&(Oi=null),Ri!==null&&kl(Ri)&&(Ri=null),Hs.forEach(_g),Vs.forEach(_g)}function zl(n,a){n.blockedOn===a&&(n.blockedOn=null,xf||(xf=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Q7)))}var Pl=null;function Ug(n){Pl!==n&&(Pl=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pl===n&&(Pl=null);for(var a=0;a<n.length;a+=3){var s=n[a],c=n[a+1],h=n[a+2];if(typeof c!="function"){if(gf(c||s)===null)continue;break}var g=Ea(s);g!==null&&(n.splice(a,3),a-=3,md(g,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function zs(n){function a(V){return zl(V,n)}Li!==null&&zl(Li,n),Oi!==null&&zl(Oi,n),Ri!==null&&zl(Ri,n),Hs.forEach(a),Vs.forEach(a);for(var s=0;s<Di.length;s++){var c=Di[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Di.length&&(s=Di[0],s.blockedOn===null);)$g(s),s.blockedOn===null&&Di.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],g=s[c+1],w=h[Lt]||null;if(typeof g=="function")w||Ug(s);else if(w){var A=null;if(g&&g.hasAttribute("formAction")){if(h=g,w=g[Lt]||null)A=w.formAction;else if(gf(h)!==null)continue}else A=w.action;typeof A=="function"?s[c+1]=A:(s.splice(c,3),c-=3),Ug(s)}}}function yf(n){this._internalRoot=n}Nl.prototype.render=yf.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,c=It();kg(s,c,n,a,null,null)},Nl.prototype.unmount=yf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;kg(n.current,2,null,n,null,null),vl(),a[Ca]=null}};function Nl(n){this._internalRoot=n}Nl.prototype.unstable_scheduleHydration=function(n){if(n){var a=r1();n={blockedOn:null,target:n,priority:a};for(var s=0;s<Di.length&&a!==0&&a<Di[s].priority;s++);Di.splice(s,0,n),s===0&&$g(n)}};var Gg=e.version;if(Gg!=="19.1.1")throw Error(r(527,Gg,"19.1.1"));K.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=f(a),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var J7={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{$r=Bl.inject(J7),Pt=Bl}catch{}}return Ns.createRoot=function(n,a){if(!o(n))throw Error(r(299));var s=!1,c="",h=rm,g=sm,w=om,A=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(A=a.unstable_transitionCallbacks)),a=Hg(n,1,!1,null,null,s,c,h,g,w,A,null),n[Ca]=a.current,Jd(n),new yf(a)},Ns.hydrateRoot=function(n,a,s){if(!o(n))throw Error(r(299));var c=!1,h="",g=rm,w=sm,A=om,V=null,G=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(g=s.onUncaughtError),s.onCaughtError!==void 0&&(w=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(V=s.unstable_transitionCallbacks),s.formState!==void 0&&(G=s.formState)),a=Hg(n,1,!0,a,s??null,c,h,g,w,A,V,G),a.context=Vg(null),s=a.current,c=It(),c=lu(c),h=mi(c),h.callback=null,gi(s,h,c),s=c,a.current.lanes=s,Ur(a,s),jn(a),n[Ca]=a.current,Jd(n),new Nl(a)},Ns.version="19.1.1",Ns}var Jg;function u9(){if(Jg)return wf.exports;Jg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),wf.exports=c9(),wf.exports}var d9=u9();const f9=Uc(d9);var R=yh();const Le=Uc(R),e3=t9({__proto__:null,default:Le},[R]);/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var t3="popstate";function h9(t={}){function e(r,o){let{pathname:l,search:u,hash:d}=r.location;return A0("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(r,o){return typeof o=="string"?o:no(o)}return m9(e,i,null,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function p9(){return Math.random().toString(36).substring(2,10)}function n3(t,e){return{usr:t.state,key:t.key,idx:e}}function A0(t,e,i=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Rr(e):e,state:i,key:e&&e.key||r||p9()}}function no({pathname:t="/",search:e="",hash:i=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Rr(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substring(i),t=t.substring(0,i));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function m9(t,e,i,r={}){let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,d="POP",f=null,p=m();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function m(){return(u.state||{idx:null}).idx}function x(){d="POP";let O=m(),j=O==null?null:O-p;p=O,f&&f({action:d,location:E.location,delta:j})}function v(O,j){d="PUSH";let T=A0(E.location,O,j);p=m()+1;let C=n3(T,p),D=E.createHref(T);try{u.pushState(C,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;o.location.assign(D)}l&&f&&f({action:d,location:E.location,delta:1})}function S(O,j){d="REPLACE";let T=A0(E.location,O,j);p=m();let C=n3(T,p),D=E.createHref(T);u.replaceState(C,"",D),l&&f&&f({action:d,location:E.location,delta:0})}function b(O){return g9(O)}let E={get action(){return d},get location(){return t(o,u)},listen(O){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(t3,x),f=O,()=>{o.removeEventListener(t3,x),f=null}},createHref(O){return e(o,O)},createURL:b,encodeLocation(O){let j=b(O);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:v,replace:S,go(O){return u.go(O)}};return E}function g9(t,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ie(i,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:no(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function d6(t,e,i="/"){return x9(t,e,i,!1)}function x9(t,e,i,r){let o=typeof e=="string"?Rr(e):e,l=oi(o.pathname||"/",i);if(l==null)return null;let u=f6(t);y9(u);let d=null;for(let f=0;d==null&&f<u.length;++f){let p=L9(l);d=A9(u[f],p,r)}return d}function f6(t,e=[],i=[],r=""){let o=(l,u,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};f.relativePath.startsWith("/")&&(Ie(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length));let p=si([r,f.relativePath]),m=i.concat(f);l.children&&l.children.length>0&&(Ie(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),f6(l.children,e,m,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:E9(p,l.index),routesMeta:m})};return t.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,u);else for(let f of h6(l.path))o(l,u,f)}),e}function h6(t){let e=t.split("/");if(e.length===0)return[];let[i,...r]=e,o=i.endsWith("?"),l=i.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let u=h6(r.join("/")),d=[];return d.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&d.push(...u),d.map(f=>t.startsWith("/")&&f===""?"/":f)}function y9(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:M9(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var v9=/^:[\w-]+$/,w9=3,b9=2,S9=1,C9=10,T9=-2,i3=t=>t==="*";function E9(t,e){let i=t.split("/"),r=i.length;return i.some(i3)&&(r+=T9),e&&(r+=b9),i.filter(o=>!i3(o)).reduce((o,l)=>o+(v9.test(l)?w9:l===""?S9:C9),r)}function M9(t,e){return t.length===e.length&&t.slice(0,-1).every((r,o)=>r===e[o])?t[t.length-1]-e[e.length-1]:0}function A9(t,e,i=!1){let{routesMeta:r}=t,o={},l="/",u=[];for(let d=0;d<r.length;++d){let f=r[d],p=d===r.length-1,m=l==="/"?e:e.slice(l.length)||"/",x=wc({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},m),v=f.route;if(!x&&p&&i&&!r[r.length-1].route.index&&(x=wc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},m)),!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:si([l,x.pathname]),pathnameBase:H9(si([l,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(l=si([l,x.pathnameBase]))}return u}function wc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,r]=j9(t.path,t.caseSensitive,t.end),o=e.match(i);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((p,{paramName:m,isOptional:x},v)=>{if(m==="*"){let b=d[v]||"";u=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const S=d[v];return x&&!S?p[m]=void 0:p[m]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:t}}function j9(t,e=!1,i=!0){wn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function L9(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function oi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=t.charAt(i);return r&&r!=="/"?null:t.slice(i)||"/"}function O9(t,e="/"){let{pathname:i,search:r="",hash:o=""}=typeof t=="string"?Rr(t):t;return{pathname:i?i.startsWith("/")?i:R9(i,e):e,search:V9(r),hash:k9(o)}}function R9(t,e){let i=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function Ef(t,e,i,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function D9(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function vh(t){let e=D9(t);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function wh(t,e,i,r=!1){let o;typeof t=="string"?o=Rr(t):(o={...t},Ie(!o.pathname||!o.pathname.includes("?"),Ef("?","pathname","search",o)),Ie(!o.pathname||!o.pathname.includes("#"),Ef("#","pathname","hash",o)),Ie(!o.search||!o.search.includes("#"),Ef("#","search","hash",o)));let l=t===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=i;else{let x=e.length-1;if(!r&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),x-=1;o.pathname=v.join("/")}d=x>=0?e[x]:"/"}let f=O9(o,d),p=u&&u!=="/"&&u.endsWith("/"),m=(l||u===".")&&i.endsWith("/");return!f.pathname.endsWith("/")&&(p||m)&&(f.pathname+="/"),f}var si=t=>t.join("/").replace(/\/\/+/g,"/"),H9=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),V9=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,k9=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function z9(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var p6=["POST","PUT","PATCH","DELETE"];new Set(p6);var P9=["GET",...p6];new Set(P9);var Dr=R.createContext(null);Dr.displayName="DataRouter";var Gc=R.createContext(null);Gc.displayName="DataRouterState";R.createContext(!1);var m6=R.createContext({isTransitioning:!1});m6.displayName="ViewTransition";var N9=R.createContext(new Map);N9.displayName="Fetchers";var B9=R.createContext(null);B9.displayName="Await";var bn=R.createContext(null);bn.displayName="Navigation";var xo=R.createContext(null);xo.displayName="Location";var Sn=R.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var bh=R.createContext(null);bh.displayName="RouteError";function $9(t,{relative:e}={}){Ie(Hr(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=R.useContext(bn),{hash:o,pathname:l,search:u}=yo(t,{relative:e}),d=l;return i!=="/"&&(d=l==="/"?i:si([i,l])),r.createHref({pathname:d,search:u,hash:o})}function Hr(){return R.useContext(xo)!=null}function hn(){return Ie(Hr(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(xo).location}var g6="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function x6(t){R.useContext(bn).static||R.useLayoutEffect(t)}function Sh(){let{isDataRoute:t}=R.useContext(Sn);return t?tw():_9()}function _9(){Ie(Hr(),"useNavigate() may be used only in the context of a <Router> component.");let t=R.useContext(Dr),{basename:e,navigator:i}=R.useContext(bn),{matches:r}=R.useContext(Sn),{pathname:o}=hn(),l=JSON.stringify(vh(r)),u=R.useRef(!1);return x6(()=>{u.current=!0}),R.useCallback((f,p={})=>{if(wn(u.current,g6),!u.current)return;if(typeof f=="number"){i.go(f);return}let m=wh(f,JSON.parse(l),o,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:si([e,m.pathname])),(p.replace?i.replace:i.push)(m,p.state,p)},[e,i,l,o,t])}var U9=R.createContext(null);function G9(t){let e=R.useContext(Sn).outlet;return e&&R.createElement(U9.Provider,{value:t},e)}function yo(t,{relative:e}={}){let{matches:i}=R.useContext(Sn),{pathname:r}=hn(),o=JSON.stringify(vh(i));return R.useMemo(()=>wh(t,JSON.parse(o),r,e==="path"),[t,o,r,e])}function I9(t,e){return y6(t,e)}function y6(t,e,i,r){var j;Ie(Hr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=R.useContext(bn),{matches:l}=R.useContext(Sn),u=l[l.length-1],d=u?u.params:{},f=u?u.pathname:"/",p=u?u.pathnameBase:"/",m=u&&u.route;{let T=m&&m.path||"";v6(f,!m||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let x=hn(),v;if(e){let T=typeof e=="string"?Rr(e):e;Ie(p==="/"||((j=T.pathname)==null?void 0:j.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${T.pathname}" was given in the \`location\` prop.`),v=T}else v=x;let S=v.pathname||"/",b=S;if(p!=="/"){let T=p.replace(/^\//,"").split("/");b="/"+S.replace(/^\//,"").split("/").slice(T.length).join("/")}let E=d6(t,{pathname:b});wn(m||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),wn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=X9(E&&E.map(T=>Object.assign({},T,{params:Object.assign({},d,T.params),pathname:si([p,o.encodeLocation?o.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?p:si([p,o.encodeLocation?o.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),l,i,r);return e&&O?R.createElement(xo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},O):O}function q9(){let t=ew(),e=z9(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",t),u=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:l},"ErrorBoundary")," or"," ",R.createElement("code",{style:l},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),i?R.createElement("pre",{style:o},i):null,u)}var Y9=R.createElement(q9,null),F9=class extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?R.createElement(Sn.Provider,{value:this.props.routeContext},R.createElement(bh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Z9({routeContext:t,match:e,children:i}){let r=R.useContext(Dr);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),R.createElement(Sn.Provider,{value:t},i)}function X9(t,e=[],i=null,r=null){if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let o=t,l=i==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);Ie(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(i)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=f),p.route.id){let{loaderData:m,errors:x}=i,v=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let x,v=!1,S=null,b=null;i&&(x=l&&p.route.id?l[p.route.id]:void 0,S=p.route.errorElement||Y9,u&&(d<0&&m===0?(v6("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,b=null):d===m&&(v=!0,b=p.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),O=()=>{let j;return x?j=S:v?j=b:p.route.Component?j=R.createElement(p.route.Component,null):p.route.element?j=p.route.element:j=f,R.createElement(Z9,{match:p,routeContext:{outlet:f,matches:E,isDataRoute:i!=null},children:j})};return i&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?R.createElement(F9,{location:i.location,revalidation:i.revalidation,component:S,error:x,children:O(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):O()},null)}function Ch(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function K9(t){let e=R.useContext(Dr);return Ie(e,Ch(t)),e}function W9(t){let e=R.useContext(Gc);return Ie(e,Ch(t)),e}function Q9(t){let e=R.useContext(Sn);return Ie(e,Ch(t)),e}function Th(t){let e=Q9(t),i=e.matches[e.matches.length-1];return Ie(i.route.id,`${t} can only be used on routes that contain a unique "id"`),i.route.id}function J9(){return Th("useRouteId")}function ew(){var r;let t=R.useContext(bh),e=W9("useRouteError"),i=Th("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[i]}function tw(){let{router:t}=K9("useNavigate"),e=Th("useNavigate"),i=R.useRef(!1);return x6(()=>{i.current=!0}),R.useCallback(async(o,l={})=>{wn(i.current,g6),i.current&&(typeof o=="number"?t.navigate(o):await t.navigate(o,{fromRouteId:e,...l}))},[t,e])}var a3={};function v6(t,e,i){!e&&!a3[t]&&(a3[t]=!0,wn(!1,i))}R.memo(nw);function nw({routes:t,future:e,state:i}){return y6(t,void 0,i,e)}function iw({to:t,replace:e,state:i,relative:r}){Ie(Hr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=R.useContext(bn);wn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=R.useContext(Sn),{pathname:u}=hn(),d=Sh(),f=wh(t,vh(l),u,r==="path"),p=JSON.stringify(f);return R.useEffect(()=>{d(JSON.parse(p),{replace:e,state:i,relative:r})},[d,p,r,e,i]),null}function aw(t){return G9(t.context)}function Ln(t){Ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rw({basename:t="/",children:e=null,location:i,navigationType:r="POP",navigator:o,static:l=!1}){Ie(!Hr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=t.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof i=="string"&&(i=Rr(i));let{pathname:f="/",search:p="",hash:m="",state:x=null,key:v="default"}=i,S=R.useMemo(()=>{let b=oi(f,u);return b==null?null:{location:{pathname:b,search:p,hash:m,state:x,key:v},navigationType:r}},[u,f,p,m,x,v,r]);return wn(S!=null,`<Router basename="${u}"> is not able to match the URL "${f}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:R.createElement(bn.Provider,{value:d},R.createElement(xo.Provider,{children:e,value:S}))}function sw({children:t,location:e}){return I9(j0(t),e)}function j0(t,e=[]){let i=[];return R.Children.forEach(t,(r,o)=>{if(!R.isValidElement(r))return;let l=[...e,o];if(r.type===R.Fragment){i.push.apply(i,j0(r.props.children,l));return}Ie(r.type===Ln,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ie(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=j0(r.props.children,l)),i.push(u)}),i}var rc="get",sc="application/x-www-form-urlencoded";function Ic(t){return t!=null&&typeof t.tagName=="string"}function ow(t){return Ic(t)&&t.tagName.toLowerCase()==="button"}function lw(t){return Ic(t)&&t.tagName.toLowerCase()==="form"}function cw(t){return Ic(t)&&t.tagName.toLowerCase()==="input"}function uw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function dw(t,e){return t.button===0&&(!e||e==="_self")&&!uw(t)}var $l=null;function fw(){if($l===null)try{new FormData(document.createElement("form"),0),$l=!1}catch{$l=!0}return $l}var hw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mf(t){return t!=null&&!hw.has(t)?(wn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sc}"`),null):t}function pw(t,e){let i,r,o,l,u;if(lw(t)){let d=t.getAttribute("action");r=d?oi(d,e):null,i=t.getAttribute("method")||rc,o=Mf(t.getAttribute("enctype"))||sc,l=new FormData(t)}else if(ow(t)||cw(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=t.getAttribute("formaction")||d.getAttribute("action");if(r=f?oi(f,e):null,i=t.getAttribute("formmethod")||d.getAttribute("method")||rc,o=Mf(t.getAttribute("formenctype"))||Mf(d.getAttribute("enctype"))||sc,l=new FormData(d,t),!fw()){let{name:p,type:m,value:x}=t;if(m==="image"){let v=p?`${p}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else p&&l.append(p,x)}}else{if(Ic(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=rc,r=null,o=sc,u=t}return l&&o==="text/plain"&&(u=l,l=void 0),{action:r,method:i.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Eh(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mw(t,e,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&oi(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function gw(t,e){if(t.id in e)return e[t.id];try{let i=await import(t.module);return e[t.id]=i,i}catch(i){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xw(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function yw(t,e,i){let r=await Promise.all(t.map(async o=>{let l=e.routes[o.route.id];if(l){let u=await gw(l,i);return u.links?u.links():[]}return[]}));return Sw(r.flat(1).filter(xw).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function r3(t,e,i,r,o,l){let u=(f,p)=>i[p]?f.route.id!==i[p].route.id:!0,d=(f,p)=>{var m;return i[p].pathname!==f.pathname||((m=i[p].route.path)==null?void 0:m.endsWith("*"))&&i[p].params["*"]!==f.params["*"]};return l==="assets"?e.filter((f,p)=>u(f,p)||d(f,p)):l==="data"?e.filter((f,p)=>{var x;let m=r.routes[f.route.id];if(!m||!m.hasLoader)return!1;if(u(f,p)||d(f,p))return!0;if(f.route.shouldRevalidate){let v=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(t,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function vw(t,e,{includeHydrateFallback:i}={}){return ww(t.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function ww(t){return[...new Set(t)]}function bw(t){let e={},i=Object.keys(t).sort();for(let r of i)e[r]=t[r];return e}function Sw(t,e){let i=new Set;return new Set(e),t.reduce((r,o)=>{let l=JSON.stringify(bw(o));return i.has(l)||(i.add(l),r.push({key:l,link:o})),r},[])}function w6(){let t=R.useContext(Dr);return Eh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Cw(){let t=R.useContext(Gc);return Eh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Mh=R.createContext(void 0);Mh.displayName="FrameworkContext";function b6(){let t=R.useContext(Mh);return Eh(t,"You must render this element inside a <HydratedRouter> element"),t}function Tw(t,e){let i=R.useContext(Mh),[r,o]=R.useState(!1),[l,u]=R.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:p,onMouseLeave:m,onTouchStart:x}=e,v=R.useRef(null);R.useEffect(()=>{if(t==="render"&&u(!0),t==="viewport"){let E=j=>{j.forEach(T=>{u(T.isIntersecting)})},O=new IntersectionObserver(E,{threshold:.5});return v.current&&O.observe(v.current),()=>{O.disconnect()}}},[t]),R.useEffect(()=>{if(r){let E=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(E)}}},[r]);let S=()=>{o(!0)},b=()=>{o(!1),u(!1)};return i?t!=="intent"?[l,v,{}]:[l,v,{onFocus:Bs(d,S),onBlur:Bs(f,b),onMouseEnter:Bs(p,S),onMouseLeave:Bs(m,b),onTouchStart:Bs(x,S)}]:[!1,v,{}]}function Bs(t,e){return i=>{t&&t(i),i.defaultPrevented||e(i)}}function Ew({page:t,...e}){let{router:i}=w6(),r=R.useMemo(()=>d6(i.routes,t,i.basename),[i.routes,t,i.basename]);return r?R.createElement(Aw,{page:t,matches:r,...e}):null}function Mw(t){let{manifest:e,routeModules:i}=b6(),[r,o]=R.useState([]);return R.useEffect(()=>{let l=!1;return yw(t,e,i).then(u=>{l||o(u)}),()=>{l=!0}},[t,e,i]),r}function Aw({page:t,matches:e,...i}){let r=hn(),{manifest:o,routeModules:l}=b6(),{basename:u}=w6(),{loaderData:d,matches:f}=Cw(),p=R.useMemo(()=>r3(t,e,f,o,r,"data"),[t,e,f,o,r]),m=R.useMemo(()=>r3(t,e,f,o,r,"assets"),[t,e,f,o,r]),x=R.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let b=new Set,E=!1;if(e.forEach(j=>{var C;let T=o.routes[j.route.id];!T||!T.hasLoader||(!p.some(D=>D.route.id===j.route.id)&&j.route.id in d&&((C=l[j.route.id])!=null&&C.shouldRevalidate)||T.hasClientLoader?E=!0:b.add(j.route.id))}),b.size===0)return[];let O=mw(t,u,"data");return E&&b.size>0&&O.searchParams.set("_routes",e.filter(j=>b.has(j.route.id)).map(j=>j.route.id).join(",")),[O.pathname+O.search]},[u,d,r,o,p,e,t,l]),v=R.useMemo(()=>vw(m,o),[m,o]),S=Mw(m);return R.createElement(R.Fragment,null,x.map(b=>R.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),v.map(b=>R.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),S.map(({key:b,link:E})=>R.createElement("link",{key:b,nonce:i.nonce,...E})))}function jw(...t){return e=>{t.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var S6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{S6&&(window.__reactRouterVersion="7.8.0")}catch{}function Lw({basename:t,children:e,window:i}){let r=R.useRef();r.current==null&&(r.current=h9({window:i,v5Compat:!0}));let o=r.current,[l,u]=R.useState({action:o.action,location:o.location}),d=R.useCallback(f=>{R.startTransition(()=>u(f))},[u]);return R.useLayoutEffect(()=>o.listen(d),[o,d]),R.createElement(rw,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:o})}var C6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,T6=R.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:o,reloadDocument:l,replace:u,state:d,target:f,to:p,preventScrollReset:m,viewTransition:x,...v},S){let{basename:b}=R.useContext(bn),E=typeof p=="string"&&C6.test(p),O,j=!1;if(typeof p=="string"&&E&&(O=p,S6))try{let $=new URL(window.location.href),Y=p.startsWith("//")?new URL($.protocol+p):new URL(p),F=oi(Y.pathname,b);Y.origin===$.origin&&F!=null?p=F+Y.search+Y.hash:j=!0}catch{wn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let T=$9(p,{relative:o}),[C,D,L]=Tw(r,v),P=Dw(p,{replace:u,state:d,target:f,preventScrollReset:m,relative:o,viewTransition:x});function k($){e&&e($),$.defaultPrevented||P($)}let _=R.createElement("a",{...v,...L,href:O||T,onClick:j||l?e:k,ref:jw(S,D),target:f,"data-discover":!E&&i==="render"?"true":void 0});return C&&!E?R.createElement(R.Fragment,null,_,R.createElement(Ew,{page:T})):_});T6.displayName="Link";var Gi=R.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:o=!1,style:l,to:u,viewTransition:d,children:f,...p},m){let x=yo(u,{relative:p.relative}),v=hn(),S=R.useContext(Gc),{navigator:b,basename:E}=R.useContext(bn),O=S!=null&&Pw(x)&&d===!0,j=b.encodeLocation?b.encodeLocation(x).pathname:x.pathname,T=v.pathname,C=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(T=T.toLowerCase(),C=C?C.toLowerCase():null,j=j.toLowerCase()),C&&E&&(C=oi(C,E)||C);const D=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let L=T===j||!o&&T.startsWith(j)&&T.charAt(D)==="/",P=C!=null&&(C===j||!o&&C.startsWith(j)&&C.charAt(j.length)==="/"),k={isActive:L,isPending:P,isTransitioning:O},_=L?e:void 0,$;typeof r=="function"?$=r(k):$=[r,L?"active":null,P?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let Y=typeof l=="function"?l(k):l;return R.createElement(T6,{...p,"aria-current":_,className:$,ref:m,style:Y,to:u,viewTransition:d},typeof f=="function"?f(k):f)});Gi.displayName="NavLink";var Ow=R.forwardRef(({discover:t="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:o,state:l,method:u=rc,action:d,onSubmit:f,relative:p,preventScrollReset:m,viewTransition:x,...v},S)=>{let b=kw(),E=zw(d,{relative:p}),O=u.toLowerCase()==="get"?"get":"post",j=typeof d=="string"&&C6.test(d),T=C=>{if(f&&f(C),C.defaultPrevented)return;C.preventDefault();let D=C.nativeEvent.submitter,L=(D==null?void 0:D.getAttribute("formmethod"))||u;b(D||C.currentTarget,{fetcherKey:e,method:L,navigate:i,replace:o,state:l,relative:p,preventScrollReset:m,viewTransition:x})};return R.createElement("form",{ref:S,method:O,action:E,onSubmit:r?f:T,...v,"data-discover":!j&&t==="render"?"true":void 0})});Ow.displayName="Form";function Rw(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function E6(t){let e=R.useContext(Dr);return Ie(e,Rw(t)),e}function Dw(t,{target:e,replace:i,state:r,preventScrollReset:o,relative:l,viewTransition:u}={}){let d=Sh(),f=hn(),p=yo(t,{relative:l});return R.useCallback(m=>{if(dw(m,e)){m.preventDefault();let x=i!==void 0?i:no(f)===no(p);d(t,{replace:x,state:r,preventScrollReset:o,relative:l,viewTransition:u})}},[f,d,p,i,r,e,t,o,l,u])}var Hw=0,Vw=()=>`__${String(++Hw)}__`;function kw(){let{router:t}=E6("useSubmit"),{basename:e}=R.useContext(bn),i=J9();return R.useCallback(async(r,o={})=>{let{action:l,method:u,encType:d,formData:f,body:p}=pw(r,e);if(o.navigate===!1){let m=o.fetcherKey||Vw();await t.fetch(m,i,o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:p,formMethod:o.method||u,formEncType:o.encType||d,flushSync:o.flushSync})}else await t.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:p,formMethod:o.method||u,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[t,e,i])}function zw(t,{relative:e}={}){let{basename:i}=R.useContext(bn),r=R.useContext(Sn);Ie(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),l={...yo(t||".",{relative:e})},u=hn();if(t==null){l.search=u.search;let d=new URLSearchParams(l.search),f=d.getAll("index");if(f.some(m=>m==="")){d.delete("index"),f.filter(x=>x).forEach(x=>d.append("index",x));let m=d.toString();l.search=m?`?${m}`:""}}return(!t||t===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(l.pathname=l.pathname==="/"?i:si([i,l.pathname])),no(l)}function Pw(t,{relative:e}={}){let i=R.useContext(m6);Ie(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=E6("useViewTransitionState"),o=yo(t,{relative:e});if(!i.isTransitioning)return!1;let l=oi(i.currentLocation.pathname,r)||i.currentLocation.pathname,u=oi(i.nextLocation.pathname,r)||i.nextLocation.pathname;return wc(o.pathname,u)!=null||wc(o.pathname,l)!=null}function Nw(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Bw(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var $w=function(){function t(i){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Bw(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=Nw(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},t}(),St="-ms-",bc="-moz-",Me="-webkit-",M6="comm",Ah="rule",jh="decl",_w="@import",A6="@keyframes",Uw="@layer",Gw=Math.abs,qc=String.fromCharCode,Iw=Object.assign;function qw(t,e){return xt(t,0)^45?(((e<<2^xt(t,0))<<2^xt(t,1))<<2^xt(t,2))<<2^xt(t,3):0}function j6(t){return t.trim()}function Yw(t,e){return(t=e.exec(t))?t[0]:t}function Ae(t,e,i){return t.replace(e,i)}function L0(t,e){return t.indexOf(e)}function xt(t,e){return t.charCodeAt(e)|0}function io(t,e,i){return t.slice(e,i)}function On(t){return t.length}function Lh(t){return t.length}function _l(t,e){return e.push(t),t}function Fw(t,e){return t.map(e).join("")}var Yc=1,Sr=1,L6=0,zt=0,nt=0,Vr="";function Fc(t,e,i,r,o,l,u){return{value:t,root:e,parent:i,type:r,props:o,children:l,line:Yc,column:Sr,length:u,return:""}}function $s(t,e){return Iw(Fc("",null,null,"",null,null,0),t,{length:-t.length},e)}function Zw(){return nt}function Xw(){return nt=zt>0?xt(Vr,--zt):0,Sr--,nt===10&&(Sr=1,Yc--),nt}function Zt(){return nt=zt<L6?xt(Vr,zt++):0,Sr++,nt===10&&(Sr=1,Yc++),nt}function kn(){return xt(Vr,zt)}function oc(){return zt}function vo(t,e){return io(Vr,t,e)}function ao(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O6(t){return Yc=Sr=1,L6=On(Vr=t),zt=0,[]}function R6(t){return Vr="",t}function lc(t){return j6(vo(zt-1,O0(t===91?t+2:t===40?t+1:t)))}function Kw(t){for(;(nt=kn())&&nt<33;)Zt();return ao(t)>2||ao(nt)>3?"":" "}function Ww(t,e){for(;--e&&Zt()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return vo(t,oc()+(e<6&&kn()==32&&Zt()==32))}function O0(t){for(;Zt();)switch(nt){case t:return zt;case 34:case 39:t!==34&&t!==39&&O0(nt);break;case 40:t===41&&O0(t);break;case 92:Zt();break}return zt}function Qw(t,e){for(;Zt()&&t+nt!==57;)if(t+nt===84&&kn()===47)break;return"/*"+vo(e,zt-1)+"*"+qc(t===47?t:Zt())}function Jw(t){for(;!ao(kn());)Zt();return vo(t,zt)}function eb(t){return R6(cc("",null,null,null,[""],t=O6(t),0,[0],t))}function cc(t,e,i,r,o,l,u,d,f){for(var p=0,m=0,x=u,v=0,S=0,b=0,E=1,O=1,j=1,T=0,C="",D=o,L=l,P=r,k=C;O;)switch(b=T,T=Zt()){case 40:if(b!=108&&xt(k,x-1)==58){L0(k+=Ae(lc(T),"&","&\f"),"&\f")!=-1&&(j=-1);break}case 34:case 39:case 91:k+=lc(T);break;case 9:case 10:case 13:case 32:k+=Kw(b);break;case 92:k+=Ww(oc()-1,7);continue;case 47:switch(kn()){case 42:case 47:_l(tb(Qw(Zt(),oc()),e,i),f);break;default:k+="/"}break;case 123*E:d[p++]=On(k)*j;case 125*E:case 59:case 0:switch(T){case 0:case 125:O=0;case 59+m:j==-1&&(k=Ae(k,/\f/g,"")),S>0&&On(k)-x&&_l(S>32?o3(k+";",r,i,x-1):o3(Ae(k," ","")+";",r,i,x-2),f);break;case 59:k+=";";default:if(_l(P=s3(k,e,i,p,m,o,d,C,D=[],L=[],x),l),T===123)if(m===0)cc(k,e,P,P,D,l,x,d,L);else switch(v===99&&xt(k,3)===110?100:v){case 100:case 108:case 109:case 115:cc(t,P,P,r&&_l(s3(t,P,P,0,0,o,d,C,o,D=[],x),L),o,L,x,d,r?D:L);break;default:cc(k,P,P,P,[""],L,0,d,L)}}p=m=S=0,E=j=1,C=k="",x=u;break;case 58:x=1+On(k),S=b;default:if(E<1){if(T==123)--E;else if(T==125&&E++==0&&Xw()==125)continue}switch(k+=qc(T),T*E){case 38:j=m>0?1:(k+="\f",-1);break;case 44:d[p++]=(On(k)-1)*j,j=1;break;case 64:kn()===45&&(k+=lc(Zt())),v=kn(),m=x=On(C=k+=Jw(oc())),T++;break;case 45:b===45&&On(k)==2&&(E=0)}}return l}function s3(t,e,i,r,o,l,u,d,f,p,m){for(var x=o-1,v=o===0?l:[""],S=Lh(v),b=0,E=0,O=0;b<r;++b)for(var j=0,T=io(t,x+1,x=Gw(E=u[b])),C=t;j<S;++j)(C=j6(E>0?v[j]+" "+T:Ae(T,/&\f/g,v[j])))&&(f[O++]=C);return Fc(t,e,i,o===0?Ah:d,f,p,m)}function tb(t,e,i){return Fc(t,e,i,M6,qc(Zw()),io(t,2,-2),0)}function o3(t,e,i,r){return Fc(t,e,i,jh,io(t,0,r),io(t,r+1,-1),r)}function vr(t,e){for(var i="",r=Lh(t),o=0;o<r;o++)i+=e(t[o],o,t,e)||"";return i}function nb(t,e,i,r){switch(t.type){case Uw:if(t.children.length)break;case _w:case jh:return t.return=t.return||t.value;case M6:return"";case A6:return t.return=t.value+"{"+vr(t.children,r)+"}";case Ah:t.value=t.props.join(",")}return On(i=vr(t.children,r))?t.return=t.value+"{"+i+"}":""}function ib(t){var e=Lh(t);return function(i,r,o,l){for(var u="",d=0;d<e;d++)u+=t[d](i,r,o,l)||"";return u}}function ab(t){return function(e){e.root||(e=e.return)&&t(e)}}function rb(t){var e=Object.create(null);return function(i){return e[i]===void 0&&(e[i]=t(i)),e[i]}}var sb=function(e,i,r){for(var o=0,l=0;o=l,l=kn(),o===38&&l===12&&(i[r]=1),!ao(l);)Zt();return vo(e,zt)},ob=function(e,i){var r=-1,o=44;do switch(ao(o)){case 0:o===38&&kn()===12&&(i[r]=1),e[r]+=sb(zt-1,i,r);break;case 2:e[r]+=lc(o);break;case 4:if(o===44){e[++r]=kn()===58?"&\f":"",i[r]=e[r].length;break}default:e[r]+=qc(o)}while(o=Zt());return e},lb=function(e,i){return R6(ob(O6(e),i))},l3=new WeakMap,cb=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var i=e.value,r=e.parent,o=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&i.charCodeAt(0)!==58&&!l3.get(r))&&!o){l3.set(e,!0);for(var l=[],u=lb(i,l),d=r.props,f=0,p=0;f<u.length;f++)for(var m=0;m<d.length;m++,p++)e.props[p]=l[f]?u[f].replace(/&\f/g,d[m]):d[m]+" "+u[f]}}},ub=function(e){if(e.type==="decl"){var i=e.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(e.return="",e.value="")}};function D6(t,e){switch(qw(t,e)){case 5103:return Me+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+t+bc+t+St+t+t;case 6828:case 4268:return Me+t+St+t+t;case 6165:return Me+t+St+"flex-"+t+t;case 5187:return Me+t+Ae(t,/(\w+).+(:[^]+)/,Me+"box-$1$2"+St+"flex-$1$2")+t;case 5443:return Me+t+St+"flex-item-"+Ae(t,/flex-|-self/,"")+t;case 4675:return Me+t+St+"flex-line-pack"+Ae(t,/align-content|flex-|-self/,"")+t;case 5548:return Me+t+St+Ae(t,"shrink","negative")+t;case 5292:return Me+t+St+Ae(t,"basis","preferred-size")+t;case 6060:return Me+"box-"+Ae(t,"-grow","")+Me+t+St+Ae(t,"grow","positive")+t;case 4554:return Me+Ae(t,/([^-])(transform)/g,"$1"+Me+"$2")+t;case 6187:return Ae(Ae(Ae(t,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),t,"")+t;case 5495:case 3959:return Ae(t,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return Ae(Ae(t,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+St+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+t+t;case 4095:case 3583:case 4068:case 2532:return Ae(t,/(.+)-inline(.+)/,Me+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(On(t)-1-e>6)switch(xt(t,e+1)){case 109:if(xt(t,e+4)!==45)break;case 102:return Ae(t,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+bc+(xt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~L0(t,"stretch")?D6(Ae(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(xt(t,e+1)!==115)break;case 6444:switch(xt(t,On(t)-3-(~L0(t,"!important")&&10))){case 107:return Ae(t,":",":"+Me)+t;case 101:return Ae(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Me+(xt(t,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+St+"$2box$3")+t}break;case 5936:switch(xt(t,e+11)){case 114:return Me+t+St+Ae(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Me+t+St+Ae(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Me+t+St+Ae(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Me+t+St+t+t}return t}var db=function(e,i,r,o){if(e.length>-1&&!e.return)switch(e.type){case jh:e.return=D6(e.value,e.length);break;case A6:return vr([$s(e,{value:Ae(e.value,"@","@"+Me)})],o);case Ah:if(e.length)return Fw(e.props,function(l){switch(Yw(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return vr([$s(e,{props:[Ae(l,/:(read-\w+)/,":"+bc+"$1")]})],o);case"::placeholder":return vr([$s(e,{props:[Ae(l,/:(plac\w+)/,":"+Me+"input-$1")]}),$s(e,{props:[Ae(l,/:(plac\w+)/,":"+bc+"$1")]}),$s(e,{props:[Ae(l,/:(plac\w+)/,St+"input-$1")]})],o)}return""})}},fb=[db],hb=function(e){var i=e.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(E){var O=E.getAttribute("data-emotion");O.indexOf(" ")!==-1&&(document.head.appendChild(E),E.setAttribute("data-s",""))})}var o=e.stylisPlugins||fb,l={},u,d=[];u=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(E){for(var O=E.getAttribute("data-emotion").split(" "),j=1;j<O.length;j++)l[O[j]]=!0;d.push(E)});var f,p=[cb,ub];{var m,x=[nb,ab(function(E){m.insert(E)})],v=ib(p.concat(o,x)),S=function(O){return vr(eb(O),v)};f=function(O,j,T,C){m=T,S(O?O+"{"+j.styles+"}":j.styles),C&&(b.inserted[j.name]=!0)}}var b={key:i,sheet:new $w({key:i,container:u,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:f};return b.sheet.hydrate(d),b},Af={exports:{}},Re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c3;function pb(){if(c3)return Re;c3=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,i=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,o=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,u=t?Symbol.for("react.provider"):60109,d=t?Symbol.for("react.context"):60110,f=t?Symbol.for("react.async_mode"):60111,p=t?Symbol.for("react.concurrent_mode"):60111,m=t?Symbol.for("react.forward_ref"):60112,x=t?Symbol.for("react.suspense"):60113,v=t?Symbol.for("react.suspense_list"):60120,S=t?Symbol.for("react.memo"):60115,b=t?Symbol.for("react.lazy"):60116,E=t?Symbol.for("react.block"):60121,O=t?Symbol.for("react.fundamental"):60117,j=t?Symbol.for("react.responder"):60118,T=t?Symbol.for("react.scope"):60119;function C(L){if(typeof L=="object"&&L!==null){var P=L.$$typeof;switch(P){case e:switch(L=L.type,L){case f:case p:case r:case l:case o:case x:return L;default:switch(L=L&&L.$$typeof,L){case d:case m:case b:case S:case u:return L;default:return P}}case i:return P}}}function D(L){return C(L)===p}return Re.AsyncMode=f,Re.ConcurrentMode=p,Re.ContextConsumer=d,Re.ContextProvider=u,Re.Element=e,Re.ForwardRef=m,Re.Fragment=r,Re.Lazy=b,Re.Memo=S,Re.Portal=i,Re.Profiler=l,Re.StrictMode=o,Re.Suspense=x,Re.isAsyncMode=function(L){return D(L)||C(L)===f},Re.isConcurrentMode=D,Re.isContextConsumer=function(L){return C(L)===d},Re.isContextProvider=function(L){return C(L)===u},Re.isElement=function(L){return typeof L=="object"&&L!==null&&L.$$typeof===e},Re.isForwardRef=function(L){return C(L)===m},Re.isFragment=function(L){return C(L)===r},Re.isLazy=function(L){return C(L)===b},Re.isMemo=function(L){return C(L)===S},Re.isPortal=function(L){return C(L)===i},Re.isProfiler=function(L){return C(L)===l},Re.isStrictMode=function(L){return C(L)===o},Re.isSuspense=function(L){return C(L)===x},Re.isValidElementType=function(L){return typeof L=="string"||typeof L=="function"||L===r||L===p||L===l||L===o||L===x||L===v||typeof L=="object"&&L!==null&&(L.$$typeof===b||L.$$typeof===S||L.$$typeof===u||L.$$typeof===d||L.$$typeof===m||L.$$typeof===O||L.$$typeof===j||L.$$typeof===T||L.$$typeof===E)},Re.typeOf=C,Re}var u3;function mb(){return u3||(u3=1,Af.exports=pb()),Af.exports}var jf,d3;function gb(){if(d3)return jf;d3=1;var t=mb(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[t.ForwardRef]=r,l[t.Memo]=o;function u(b){return t.isMemo(b)?o:l[b.$$typeof]||e}var d=Object.defineProperty,f=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,v=Object.prototype;function S(b,E,O){if(typeof E!="string"){if(v){var j=x(E);j&&j!==v&&S(b,j,O)}var T=f(E);p&&(T=T.concat(p(E)));for(var C=u(b),D=u(E),L=0;L<T.length;++L){var P=T[L];if(!i[P]&&!(O&&O[P])&&!(D&&D[P])&&!(C&&C[P])){var k=m(E,P);try{d(b,P,k)}catch{}}}}return b}return jf=S,jf}gb();var xb=!0;function yb(t,e,i){var r="";return i.split(" ").forEach(function(o){t[o]!==void 0?e.push(t[o]+";"):o&&(r+=o+" ")}),r}var H6=function(e,i,r){var o=e.key+"-"+i.name;(r===!1||xb===!1)&&e.registered[o]===void 0&&(e.registered[o]=i.styles)},V6=function(e,i,r){H6(e,i,r);var o=e.key+"-"+i.name;if(e.inserted[i.name]===void 0){var l=i;do e.insert(i===l?"."+o:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function vb(t){for(var e=0,i,r=0,o=t.length;o>=4;++r,o-=4)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,e=(i&65535)*1540483477+((i>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var wb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bb=/[A-Z]|^ms/g,Sb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,k6=function(e){return e.charCodeAt(1)===45},f3=function(e){return e!=null&&typeof e!="boolean"},Lf=rb(function(t){return k6(t)?t:t.replace(bb,"-$&").toLowerCase()}),h3=function(e,i){switch(e){case"animation":case"animationName":if(typeof i=="string")return i.replace(Sb,function(r,o,l){return Rn={name:o,styles:l,next:Rn},o})}return wb[e]!==1&&!k6(e)&&typeof i=="number"&&i!==0?i+"px":i};function ro(t,e,i){if(i==null)return"";var r=i;if(r.__emotion_styles!==void 0)return r;switch(typeof i){case"boolean":return"";case"object":{var o=i;if(o.anim===1)return Rn={name:o.name,styles:o.styles,next:Rn},o.name;var l=i;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)Rn={name:u.name,styles:u.styles,next:Rn},u=u.next;var d=l.styles+";";return d}return Cb(t,e,i)}case"function":{if(t!==void 0){var f=Rn,p=i(t);return Rn=f,ro(t,e,p)}break}}var m=i;return m}function Cb(t,e,i){var r="";if(Array.isArray(i))for(var o=0;o<i.length;o++)r+=ro(t,e,i[o])+";";else for(var l in i){var u=i[l];if(typeof u!="object"){var d=u;f3(d)&&(r+=Lf(l)+":"+h3(l,d)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&e==null)for(var f=0;f<u.length;f++)f3(u[f])&&(r+=Lf(l)+":"+h3(l,u[f])+";");else{var p=ro(t,e,u);switch(l){case"animation":case"animationName":{r+=Lf(l)+":"+p+";";break}default:r+=l+"{"+p+"}"}}}return r}var p3=/label:\s*([^\s;{]+)\s*(;|$)/g,Rn;function Oh(t,e,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,o="";Rn=void 0;var l=t[0];if(l==null||l.raw===void 0)r=!1,o+=ro(i,e,l);else{var u=l;o+=u[0]}for(var d=1;d<t.length;d++)if(o+=ro(i,e,t[d]),r){var f=l;o+=f[d]}p3.lastIndex=0;for(var p="",m;(m=p3.exec(o))!==null;)p+="-"+m[1];var x=vb(o)+p;return{name:x,styles:o,next:Rn}}var Tb=function(e){return e()},z6=e3.useInsertionEffect?e3.useInsertionEffect:!1,Eb=z6||Tb,m3=z6||R.useLayoutEffect,P6=R.createContext(typeof HTMLElement<"u"?hb({key:"css"}):null);P6.Provider;var N6=function(e){return R.forwardRef(function(i,r){var o=R.useContext(P6);return e(i,o,r)})},B6=R.createContext({}),Rh={}.hasOwnProperty,R0="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Mb=function(e,i){var r={};for(var o in i)Rh.call(i,o)&&(r[o]=i[o]);return r[R0]=e,r},Ab=function(e){var i=e.cache,r=e.serialized,o=e.isStringTag;return H6(i,r,o),Eb(function(){return V6(i,r,o)}),null},jb=N6(function(t,e,i){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var o=t[R0],l=[r],u="";typeof t.className=="string"?u=yb(e.registered,l,t.className):t.className!=null&&(u=t.className+" ");var d=Oh(l,void 0,R.useContext(B6));u+=e.key+"-"+d.name;var f={};for(var p in t)Rh.call(t,p)&&p!=="css"&&p!==R0&&(f[p]=t[p]);return f.className=u,i&&(f.ref=i),R.createElement(R.Fragment,null,R.createElement(Ab,{cache:e,serialized:d,isStringTag:typeof o=="string"}),R.createElement(o,f))}),Lb=jb,g3=function(e,i){var r=arguments;if(i==null||!Rh.call(i,"css"))return R.createElement.apply(void 0,r);var o=r.length,l=new Array(o);l[0]=Lb,l[1]=Mb(e,i);for(var u=2;u<o;u++)l[u]=r[u];return R.createElement.apply(null,l)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(g3||(g3={}));var Ob=N6(function(t,e){var i=t.styles,r=Oh([i],void 0,R.useContext(B6)),o=R.useRef();return m3(function(){var l=e.key+"-global",u=new e.sheet.constructor({key:l,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),d=!1,f=document.querySelector('style[data-emotion="'+l+" "+r.name+'"]');return e.sheet.tags.length&&(u.before=e.sheet.tags[0]),f!==null&&(d=!0,f.setAttribute("data-emotion",l),u.hydrate([f])),o.current=[u,d],function(){u.flush()}},[e]),m3(function(){var l=o.current,u=l[0],d=l[1];if(d){l[1]=!1;return}if(r.next!==void 0&&V6(e,r.next,!0),u.tags.length){var f=u.tags[u.tags.length-1].nextElementSibling;u.before=f,u.flush()}e.insert("",r,u,!1)},[e,r.name]),null});function Rb(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return Oh(e)}const Db="/assets/Geist-Regular-BCrLS6HJ.ttf",Hb="/assets/Geist-Medium-C6X8vKEc.ttf",Vb="/assets/BebasNeue-Regular-D2CONTwO.ttf",kb="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",zb=Rb`
  /* Font Awesome */
  @font-face {
    font-family: 'Geist Regular';
    src: url(${Db}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Додано для кращого відображення шрифтів */
  }

  /* Helvetica */
  @font-face {
    font-family: 'Geist Medium';
    src: url(${Hb}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bebas Neue Regular';
    src: url(${Vb}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${kb}) format('truetype');
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




  
`;var Vt=function(){return Vt=Object.assign||function(e){for(var i,r=1,o=arguments.length;r<o;r++){i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},Vt.apply(this,arguments)};function so(t,e,i){if(i||arguments.length===2)for(var r=0,o=e.length,l;r<o;r++)(l||!(r in e))&&(l||(l=Array.prototype.slice.call(e,0,r)),l[r]=e[r]);return t.concat(l||Array.prototype.slice.call(e))}var $e="-ms-",Zs="-moz-",De="-webkit-",$6="comm",Zc="rule",Dh="decl",Pb="@import",_6="@keyframes",Nb="@layer",U6=Math.abs,Hh=String.fromCharCode,D0=Object.assign;function Bb(t,e){return ft(t,0)^45?(((e<<2^ft(t,0))<<2^ft(t,1))<<2^ft(t,2))<<2^ft(t,3):0}function G6(t){return t.trim()}function ai(t,e){return(t=e.exec(t))?t[0]:t}function xe(t,e,i){return t.replace(e,i)}function uc(t,e,i){return t.indexOf(e,i)}function ft(t,e){return t.charCodeAt(e)|0}function Cr(t,e,i){return t.slice(e,i)}function Dn(t){return t.length}function I6(t){return t.length}function Ys(t,e){return e.push(t),t}function $b(t,e){return t.map(e).join("")}function x3(t,e){return t.filter(function(i){return!ai(i,e)})}var Xc=1,Tr=1,q6=0,fn=0,it=0,kr="";function Kc(t,e,i,r,o,l,u,d){return{value:t,root:e,parent:i,type:r,props:o,children:l,line:Xc,column:Tr,length:u,return:"",siblings:d}}function Pi(t,e){return D0(Kc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function lr(t){for(;t.root;)t=Pi(t.root,{children:[t]});Ys(t,t.siblings)}function _b(){return it}function Ub(){return it=fn>0?ft(kr,--fn):0,Tr--,it===10&&(Tr=1,Xc--),it}function yn(){return it=fn<q6?ft(kr,fn++):0,Tr++,it===10&&(Tr=1,Xc++),it}function ga(){return ft(kr,fn)}function dc(){return fn}function Wc(t,e){return Cr(kr,t,e)}function H0(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gb(t){return Xc=Tr=1,q6=Dn(kr=t),fn=0,[]}function Ib(t){return kr="",t}function Of(t){return G6(Wc(fn-1,V0(t===91?t+2:t===40?t+1:t)))}function qb(t){for(;(it=ga())&&it<33;)yn();return H0(t)>2||H0(it)>3?"":" "}function Yb(t,e){for(;--e&&yn()&&!(it<48||it>102||it>57&&it<65||it>70&&it<97););return Wc(t,dc()+(e<6&&ga()==32&&yn()==32))}function V0(t){for(;yn();)switch(it){case t:return fn;case 34:case 39:t!==34&&t!==39&&V0(it);break;case 40:t===41&&V0(t);break;case 92:yn();break}return fn}function Fb(t,e){for(;yn()&&t+it!==57;)if(t+it===84&&ga()===47)break;return"/*"+Wc(e,fn-1)+"*"+Hh(t===47?t:yn())}function Zb(t){for(;!H0(ga());)yn();return Wc(t,fn)}function Xb(t){return Ib(fc("",null,null,null,[""],t=Gb(t),0,[0],t))}function fc(t,e,i,r,o,l,u,d,f){for(var p=0,m=0,x=u,v=0,S=0,b=0,E=1,O=1,j=1,T=0,C="",D=o,L=l,P=r,k=C;O;)switch(b=T,T=yn()){case 40:if(b!=108&&ft(k,x-1)==58){uc(k+=xe(Of(T),"&","&\f"),"&\f",U6(p?d[p-1]:0))!=-1&&(j=-1);break}case 34:case 39:case 91:k+=Of(T);break;case 9:case 10:case 13:case 32:k+=qb(b);break;case 92:k+=Yb(dc()-1,7);continue;case 47:switch(ga()){case 42:case 47:Ys(Kb(Fb(yn(),dc()),e,i,f),f);break;default:k+="/"}break;case 123*E:d[p++]=Dn(k)*j;case 125*E:case 59:case 0:switch(T){case 0:case 125:O=0;case 59+m:j==-1&&(k=xe(k,/\f/g,"")),S>0&&Dn(k)-x&&Ys(S>32?v3(k+";",r,i,x-1,f):v3(xe(k," ","")+";",r,i,x-2,f),f);break;case 59:k+=";";default:if(Ys(P=y3(k,e,i,p,m,o,d,C,D=[],L=[],x,l),l),T===123)if(m===0)fc(k,e,P,P,D,l,x,d,L);else switch(v===99&&ft(k,3)===110?100:v){case 100:case 108:case 109:case 115:fc(t,P,P,r&&Ys(y3(t,P,P,0,0,o,d,C,o,D=[],x,L),L),o,L,x,d,r?D:L);break;default:fc(k,P,P,P,[""],L,0,d,L)}}p=m=S=0,E=j=1,C=k="",x=u;break;case 58:x=1+Dn(k),S=b;default:if(E<1){if(T==123)--E;else if(T==125&&E++==0&&Ub()==125)continue}switch(k+=Hh(T),T*E){case 38:j=m>0?1:(k+="\f",-1);break;case 44:d[p++]=(Dn(k)-1)*j,j=1;break;case 64:ga()===45&&(k+=Of(yn())),v=ga(),m=x=Dn(C=k+=Zb(dc())),T++;break;case 45:b===45&&Dn(k)==2&&(E=0)}}return l}function y3(t,e,i,r,o,l,u,d,f,p,m,x){for(var v=o-1,S=o===0?l:[""],b=I6(S),E=0,O=0,j=0;E<r;++E)for(var T=0,C=Cr(t,v+1,v=U6(O=u[E])),D=t;T<b;++T)(D=G6(O>0?S[T]+" "+C:xe(C,/&\f/g,S[T])))&&(f[j++]=D);return Kc(t,e,i,o===0?Zc:d,f,p,m,x)}function Kb(t,e,i,r){return Kc(t,e,i,$6,Hh(_b()),Cr(t,2,-2),0,r)}function v3(t,e,i,r,o){return Kc(t,e,i,Dh,Cr(t,0,r),Cr(t,r+1,-1),r,o)}function Y6(t,e,i){switch(Bb(t,e)){case 5103:return De+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return De+t+t;case 4789:return Zs+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return De+t+Zs+t+$e+t+t;case 5936:switch(ft(t,e+11)){case 114:return De+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return De+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return De+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return De+t+$e+t+t;case 6165:return De+t+$e+"flex-"+t+t;case 5187:return De+t+xe(t,/(\w+).+(:[^]+)/,De+"box-$1$2"+$e+"flex-$1$2")+t;case 5443:return De+t+$e+"flex-item-"+xe(t,/flex-|-self/g,"")+(ai(t,/flex-|baseline/)?"":$e+"grid-row-"+xe(t,/flex-|-self/g,""))+t;case 4675:return De+t+$e+"flex-line-pack"+xe(t,/align-content|flex-|-self/g,"")+t;case 5548:return De+t+$e+xe(t,"shrink","negative")+t;case 5292:return De+t+$e+xe(t,"basis","preferred-size")+t;case 6060:return De+"box-"+xe(t,"-grow","")+De+t+$e+xe(t,"grow","positive")+t;case 4554:return De+xe(t,/([^-])(transform)/g,"$1"+De+"$2")+t;case 6187:return xe(xe(xe(t,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),t,"")+t;case 5495:case 3959:return xe(t,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return xe(xe(t,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+$e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+De+t+t;case 4200:if(!ai(t,/flex-|baseline/))return $e+"grid-column-align"+Cr(t,e)+t;break;case 2592:case 3360:return $e+xe(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(r,o){return e=o,ai(r.props,/grid-\w+-end/)})?~uc(t+(i=i[e].value),"span",0)?t:$e+xe(t,"-start","")+t+$e+"grid-row-span:"+(~uc(i,"span",0)?ai(i,/\d+/):+ai(i,/\d+/)-+ai(t,/\d+/))+";":$e+xe(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(r){return ai(r.props,/grid-\w+-start/)})?t:$e+xe(xe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return xe(t,/(.+)-inline(.+)/,De+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(t)-1-e>6)switch(ft(t,e+1)){case 109:if(ft(t,e+4)!==45)break;case 102:return xe(t,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+Zs+(ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~uc(t,"stretch",0)?Y6(xe(t,"stretch","fill-available"),e,i)+t:t}break;case 5152:case 5920:return xe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,u,d,f,p){return $e+o+":"+l+p+(u?$e+o+"-span:"+(d?f:+f-+l)+p:"")+t});case 4949:if(ft(t,e+6)===121)return xe(t,":",":"+De)+t;break;case 6444:switch(ft(t,ft(t,14)===45?18:11)){case 120:return xe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+De+(ft(t,14)===45?"inline-":"")+"box$3$1"+De+"$2$3$1"+$e+"$2box$3")+t;case 100:return xe(t,":",":"+$e)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return xe(t,"scroll-","scroll-snap-")+t}return t}function Sc(t,e){for(var i="",r=0;r<t.length;r++)i+=e(t[r],r,t,e)||"";return i}function Wb(t,e,i,r){switch(t.type){case Nb:if(t.children.length)break;case Pb:case Dh:return t.return=t.return||t.value;case $6:return"";case _6:return t.return=t.value+"{"+Sc(t.children,r)+"}";case Zc:if(!Dn(t.value=t.props.join(",")))return""}return Dn(i=Sc(t.children,r))?t.return=t.value+"{"+i+"}":""}function Qb(t){var e=I6(t);return function(i,r,o,l){for(var u="",d=0;d<e;d++)u+=t[d](i,r,o,l)||"";return u}}function Jb(t){return function(e){e.root||(e=e.return)&&t(e)}}function eS(t,e,i,r){if(t.length>-1&&!t.return)switch(t.type){case Dh:t.return=Y6(t.value,t.length,i);return;case _6:return Sc([Pi(t,{value:xe(t.value,"@","@"+De)})],r);case Zc:if(t.length)return $b(i=t.props,function(o){switch(ai(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lr(Pi(t,{props:[xe(o,/:(read-\w+)/,":"+Zs+"$1")]})),lr(Pi(t,{props:[o]})),D0(t,{props:x3(i,r)});break;case"::placeholder":lr(Pi(t,{props:[xe(o,/:(plac\w+)/,":"+De+"input-$1")]})),lr(Pi(t,{props:[xe(o,/:(plac\w+)/,":"+Zs+"$1")]})),lr(Pi(t,{props:[xe(o,/:(plac\w+)/,$e+"input-$1")]})),lr(Pi(t,{props:[o]})),D0(t,{props:x3(i,r)});break}return""})}}var tS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yt={},Er=typeof process<"u"&&Yt!==void 0&&(Yt.REACT_APP_SC_ATTR||Yt.SC_ATTR)||"data-styled",F6="active",Z6="data-styled-version",Qc="6.1.19",Vh=`/*!sc*/
`,Cc=typeof window<"u"&&typeof document<"u",nS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==""?Yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.SC_DISABLE_SPEEDY!==void 0&&Yt.SC_DISABLE_SPEEDY!==""&&Yt.SC_DISABLE_SPEEDY!=="false"&&Yt.SC_DISABLE_SPEEDY),Jc=Object.freeze([]),Mr=Object.freeze({});function iS(t,e,i){return i===void 0&&(i=Mr),t.theme!==i.theme&&t.theme||e||i.theme}var X6=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),aS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rS=/(^-|-$)/g;function w3(t){return t.replace(aS,"-").replace(rS,"")}var sS=/(a)(d)/gi,Ul=52,b3=function(t){return String.fromCharCode(t+(t>25?39:97))};function k0(t){var e,i="";for(e=Math.abs(t);e>Ul;e=e/Ul|0)i=b3(e%Ul)+i;return(b3(e%Ul)+i).replace(sS,"$1-$2")}var Rf,K6=5381,hr=function(t,e){for(var i=e.length;i;)t=33*t^e.charCodeAt(--i);return t},W6=function(t){return hr(K6,t)};function Q6(t){return k0(W6(t)>>>0)}function oS(t){return t.displayName||t.name||"Component"}function Df(t){return typeof t=="string"&&!0}var J6=typeof Symbol=="function"&&Symbol.for,e5=J6?Symbol.for("react.memo"):60115,lS=J6?Symbol.for("react.forward_ref"):60112,cS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dS=((Rf={})[lS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rf[e5]=t5,Rf);function S3(t){return("type"in(e=t)&&e.type.$$typeof)===e5?t5:"$$typeof"in t?dS[t.$$typeof]:cS;var e}var fS=Object.defineProperty,hS=Object.getOwnPropertyNames,C3=Object.getOwnPropertySymbols,pS=Object.getOwnPropertyDescriptor,mS=Object.getPrototypeOf,T3=Object.prototype;function n5(t,e,i){if(typeof e!="string"){if(T3){var r=mS(e);r&&r!==T3&&n5(t,r,i)}var o=hS(e);C3&&(o=o.concat(C3(e)));for(var l=S3(t),u=S3(e),d=0;d<o.length;++d){var f=o[d];if(!(f in uS||i&&i[f]||u&&f in u||l&&f in l)){var p=pS(e,f);try{fS(t,f,p)}catch{}}}}return t}function Ar(t){return typeof t=="function"}function kh(t){return typeof t=="object"&&"styledComponentId"in t}function ha(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function z0(t,e){if(t.length===0)return"";for(var i=t[0],r=1;r<t.length;r++)i+=t[r];return i}function oo(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function P0(t,e,i){if(i===void 0&&(i=!1),!i&&!oo(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=P0(t[r],e[r]);else if(oo(e))for(var r in e)t[r]=P0(t[r],e[r]);return t}function zh(t,e){Object.defineProperty(t,"toString",{value:e})}function wo(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var gS=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var i=0,r=0;r<e;r++)i+=this.groupSizes[r];return i},t.prototype.insertRules=function(e,i){if(e>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;e>=l;)if((l<<=1)<0)throw wo(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),f=(u=0,i.length);u<f;u++)this.tag.insertRule(d,i[u])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var i=this.groupSizes[e],r=this.indexOfGroup(e),o=r+i;this.groupSizes[e]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var i="";if(e>=this.length||this.groupSizes[e]===0)return i;for(var r=this.groupSizes[e],o=this.indexOfGroup(e),l=o+r,u=o;u<l;u++)i+="".concat(this.tag.getRule(u)).concat(Vh);return i},t}(),hc=new Map,Tc=new Map,pc=1,Gl=function(t){if(hc.has(t))return hc.get(t);for(;Tc.has(pc);)pc++;var e=pc++;return hc.set(t,e),Tc.set(e,t),e},xS=function(t,e){pc=e+1,hc.set(t,e),Tc.set(e,t)},yS="style[".concat(Er,"][").concat(Z6,'="').concat(Qc,'"]'),vS=new RegExp("^".concat(Er,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),wS=function(t,e,i){for(var r,o=i.split(","),l=0,u=o.length;l<u;l++)(r=o[l])&&t.registerName(e,r)},bS=function(t,e){for(var i,r=((i=e.textContent)!==null&&i!==void 0?i:"").split(Vh),o=[],l=0,u=r.length;l<u;l++){var d=r[l].trim();if(d){var f=d.match(vS);if(f){var p=0|parseInt(f[1],10),m=f[2];p!==0&&(xS(m,p),wS(t,m,f[3]),t.getTag().insertRules(p,o)),o.length=0}else o.push(d)}}},E3=function(t){for(var e=document.querySelectorAll(yS),i=0,r=e.length;i<r;i++){var o=e[i];o&&o.getAttribute(Er)!==F6&&(bS(t,o),o.parentNode&&o.parentNode.removeChild(o))}};function SS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var i5=function(t){var e=document.head,i=t||e,r=document.createElement("style"),o=function(d){var f=Array.from(d.querySelectorAll("style[".concat(Er,"]")));return f[f.length-1]}(i),l=o!==void 0?o.nextSibling:null;r.setAttribute(Er,F6),r.setAttribute(Z6,Qc);var u=SS();return u&&r.setAttribute("nonce",u),i.insertBefore(r,l),r},CS=function(){function t(e){this.element=i5(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var u=r[o];if(u.ownerNode===i)return u}throw wo(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,i){try{return this.sheet.insertRule(i,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var i=this.sheet.cssRules[e];return i&&i.cssText?i.cssText:""},t}(),TS=function(){function t(e){this.element=i5(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,i){if(e<=this.length&&e>=0){var r=document.createTextNode(i);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),ES=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,i){return e<=this.length&&(this.rules.splice(e,0,i),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),M3=Cc,MS={isServer:!Cc,useCSSOMInjection:!nS},a5=function(){function t(e,i,r){e===void 0&&(e=Mr),i===void 0&&(i={});var o=this;this.options=Vt(Vt({},MS),e),this.gs=i,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Cc&&M3&&(M3=!1,E3(this)),zh(this,function(){return function(l){for(var u=l.getTag(),d=u.length,f="",p=function(x){var v=function(j){return Tc.get(j)}(x);if(v===void 0)return"continue";var S=l.names.get(v),b=u.getGroup(x);if(S===void 0||!S.size||b.length===0)return"continue";var E="".concat(Er,".g").concat(x,'[id="').concat(v,'"]'),O="";S!==void 0&&S.forEach(function(j){j.length>0&&(O+="".concat(j,","))}),f+="".concat(b).concat(E,'{content:"').concat(O,'"}').concat(Vh)},m=0;m<d;m++)p(m);return f}(o)})}return t.registerId=function(e){return Gl(e)},t.prototype.rehydrate=function(){!this.server&&Cc&&E3(this)},t.prototype.reconstructWithOptions=function(e,i){return i===void 0&&(i=!0),new t(Vt(Vt({},this.options),e),this.gs,i&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(i){var r=i.useCSSOMInjection,o=i.target;return i.isServer?new ES(o):r?new CS(o):new TS(o)}(this.options),new gS(e)));var e},t.prototype.hasNameForId=function(e,i){return this.names.has(e)&&this.names.get(e).has(i)},t.prototype.registerName=function(e,i){if(Gl(e),this.names.has(e))this.names.get(e).add(i);else{var r=new Set;r.add(i),this.names.set(e,r)}},t.prototype.insertRules=function(e,i,r){this.registerName(e,i),this.getTag().insertRules(Gl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Gl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),AS=/&/g,jS=/^\s*\/\/.*$/gm;function r5(t,e){return t.map(function(i){return i.type==="rule"&&(i.value="".concat(e," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(e," ")),i.props=i.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=r5(i.children,e)),i})}function LS(t){var e,i,r,o=Mr,l=o.options,u=l===void 0?Mr:l,d=o.plugins,f=d===void 0?Jc:d,p=function(v,S,b){return b.startsWith(i)&&b.endsWith(i)&&b.replaceAll(i,"").length>0?".".concat(e):v},m=f.slice();m.push(function(v){v.type===Zc&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(AS,i).replace(r,p))}),u.prefix&&m.push(eS),m.push(Wb);var x=function(v,S,b,E){S===void 0&&(S=""),b===void 0&&(b=""),E===void 0&&(E="&"),e=E,i=S,r=new RegExp("\\".concat(i,"\\b"),"g");var O=v.replace(jS,""),j=Xb(b||S?"".concat(b," ").concat(S," { ").concat(O," }"):O);u.namespace&&(j=r5(j,u.namespace));var T=[];return Sc(j,Qb(m.concat(Jb(function(C){return T.push(C)})))),T};return x.hash=f.length?f.reduce(function(v,S){return S.name||wo(15),hr(v,S.name)},K6).toString():"",x}var OS=new a5,N0=LS(),s5=Le.createContext({shouldForwardProp:void 0,styleSheet:OS,stylis:N0});s5.Consumer;Le.createContext(void 0);function A3(){return R.useContext(s5)}var o5=function(){function t(e,i){var r=this;this.inject=function(o,l){l===void 0&&(l=N0);var u=r.name+l.hash;o.hasNameForId(r.id,u)||o.insertRules(r.id,u,l(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=i,zh(this,function(){throw wo(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=N0),this.name+e.hash},t}(),RS=function(t){return t>="A"&&t<="Z"};function j3(t){for(var e="",i=0;i<t.length;i++){var r=t[i];if(i===1&&r==="-"&&t[0]==="-")return t;RS(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var l5=function(t){return t==null||t===!1||t===""},c5=function(t){var e,i,r=[];for(var o in t){var l=t[o];t.hasOwnProperty(o)&&!l5(l)&&(Array.isArray(l)&&l.isCss||Ar(l)?r.push("".concat(j3(o),":"),l,";"):oo(l)?r.push.apply(r,so(so(["".concat(o," {")],c5(l),!1),["}"],!1)):r.push("".concat(j3(o),": ").concat((e=o,(i=l)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||e in tS||e.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return r};function xa(t,e,i,r){if(l5(t))return[];if(kh(t))return[".".concat(t.styledComponentId)];if(Ar(t)){if(!Ar(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var o=t(e);return xa(o,e,i,r)}var l;return t instanceof o5?i?(t.inject(i,r),[t.getName(r)]):[t]:oo(t)?c5(t):Array.isArray(t)?Array.prototype.concat.apply(Jc,t.map(function(u){return xa(u,e,i,r)})):[t.toString()]}function DS(t){for(var e=0;e<t.length;e+=1){var i=t[e];if(Ar(i)&&!kh(i))return!1}return!0}var HS=W6(Qc),VS=function(){function t(e,i,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&DS(e),this.componentId=i,this.baseHash=hr(HS,i),this.baseStyle=r,a5.registerId(i)}return t.prototype.generateAndInjectStyles=function(e,i,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,i,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=ha(o,this.staticRulesId);else{var l=z0(xa(this.rules,e,i,r)),u=k0(hr(this.baseHash,l)>>>0);if(!i.hasNameForId(this.componentId,u)){var d=r(l,".".concat(u),void 0,this.componentId);i.insertRules(this.componentId,u,d)}o=ha(o,u),this.staticRulesId=u}else{for(var f=hr(this.baseHash,r.hash),p="",m=0;m<this.rules.length;m++){var x=this.rules[m];if(typeof x=="string")p+=x;else if(x){var v=z0(xa(x,e,i,r));f=hr(f,v+m),p+=v}}if(p){var S=k0(f>>>0);i.hasNameForId(this.componentId,S)||i.insertRules(this.componentId,S,r(p,".".concat(S),void 0,this.componentId)),o=ha(o,S)}}return o},t}(),u5=Le.createContext(void 0);u5.Consumer;var Hf={};function kS(t,e,i){var r=kh(t),o=t,l=!Df(t),u=e.attrs,d=u===void 0?Jc:u,f=e.componentId,p=f===void 0?function(D,L){var P=typeof D!="string"?"sc":w3(D);Hf[P]=(Hf[P]||0)+1;var k="".concat(P,"-").concat(Q6(Qc+P+Hf[P]));return L?"".concat(L,"-").concat(k):k}(e.displayName,e.parentComponentId):f,m=e.displayName,x=m===void 0?function(D){return Df(D)?"styled.".concat(D):"Styled(".concat(oS(D),")")}(t):m,v=e.displayName&&e.componentId?"".concat(w3(e.displayName),"-").concat(e.componentId):e.componentId||p,S=r&&o.attrs?o.attrs.concat(d).filter(Boolean):d,b=e.shouldForwardProp;if(r&&o.shouldForwardProp){var E=o.shouldForwardProp;if(e.shouldForwardProp){var O=e.shouldForwardProp;b=function(D,L){return E(D,L)&&O(D,L)}}else b=E}var j=new VS(i,v,r?o.componentStyle:void 0);function T(D,L){return function(P,k,_){var $=P.attrs,Y=P.componentStyle,F=P.defaultProps,te=P.foldedComponentIds,ie=P.styledComponentId,oe=P.target,re=Le.useContext(u5),B=A3(),K=P.shouldForwardProp||B.shouldForwardProp,W=iS(k,re,F)||Mr,ee=function(we,de,st){for(var Oe,yt=Vt(Vt({},de),{className:void 0,theme:st}),qi=0;qi<we.length;qi+=1){var $n=Ar(Oe=we[qi])?Oe(yt):Oe;for(var Wt in $n)yt[Wt]=Wt==="className"?ha(yt[Wt],$n[Wt]):Wt==="style"?Vt(Vt({},yt[Wt]),$n[Wt]):$n[Wt]}return de.className&&(yt.className=ha(yt.className,de.className)),yt}($,k,W),H=ee.as||oe,Z={};for(var ne in ee)ee[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&ee.theme===W||(ne==="forwardedAs"?Z.as=ee.forwardedAs:K&&!K(ne,H)||(Z[ne]=ee[ne]));var ae=function(we,de){var st=A3(),Oe=we.generateAndInjectStyles(de,st.styleSheet,st.stylis);return Oe}(Y,ee),ce=ha(te,ie);return ae&&(ce+=" "+ae),ee.className&&(ce+=" "+ee.className),Z[Df(H)&&!X6.has(H)?"class":"className"]=ce,_&&(Z.ref=_),R.createElement(H,Z)}(C,D,L)}T.displayName=x;var C=Le.forwardRef(T);return C.attrs=S,C.componentStyle=j,C.displayName=x,C.shouldForwardProp=b,C.foldedComponentIds=r?ha(o.foldedComponentIds,o.styledComponentId):"",C.styledComponentId=v,C.target=r?o.target:t,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=r?function(L){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var _=0,$=P;_<$.length;_++)P0(L,$[_],!0);return L}({},o.defaultProps,D):D}}),zh(C,function(){return".".concat(C.styledComponentId)}),l&&n5(C,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function L3(t,e){for(var i=[t[0]],r=0,o=e.length;r<o;r+=1)i.push(e[r],t[r+1]);return i}var O3=function(t){return Object.assign(t,{isCss:!0})};function zr(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(Ar(t)||oo(t))return O3(xa(L3(Jc,so([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?xa(r):O3(xa(L3(r,e)))}function B0(t,e,i){if(i===void 0&&(i=Mr),!e)throw wo(1,e);var r=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return t(e,i,zr.apply(void 0,so([o],l,!1)))};return r.attrs=function(o){return B0(t,e,Vt(Vt({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return B0(t,e,Vt(Vt({},i),o))},r}var d5=function(t){return B0(kS,t)},M=d5;X6.forEach(function(t){M[t]=d5(t)});function bo(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var r=z0(zr.apply(void 0,so([t],e,!1))),o=Q6(r);return new o5(o,r)}const zS=M.nav`
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
`,PS=M.div`
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
`,NS=M(Gi)`
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
`,BS=M.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1440px) {
    gap: 40px;
  }
`,_s=M.li`
  position: relative;
`,Us=M(Gi)`
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
`,R3=M.div`
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
`,Il=M.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
  }
`,Vi=M.span`
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
`,$S=M.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,f5=M.button`
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
`;var ql={},D3;function _S(){if(D3)return ql;D3=1,ql.match=l,ql.parse=u;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,e=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,r=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function l(m,x){return u(m).some(function(v){var S=v.inverse,b=v.type==="all"||x.type===v.type;if(b&&S||!(b||S))return!1;var E=v.expressions.every(function(O){var j=O.feature,T=O.modifier,C=O.value,D=x[j];if(!D)return!1;switch(j){case"orientation":case"scan":return D.toLowerCase()===C.toLowerCase();case"width":case"height":case"device-width":case"device-height":C=p(C),D=p(D);break;case"resolution":C=f(C),D=f(D);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":C=d(C),D=d(D);break;case"grid":case"color":case"color-index":case"monochrome":C=parseInt(C,10)||1,D=parseInt(D,10)||0;break}switch(T){case"min":return D>=C;case"max":return D<=C;default:return D===C}});return E&&!S||!E&&S})}function u(m){return m.split(",").map(function(x){x=x.trim();var v=x.match(t),S=v[1],b=v[2],E=v[3]||"",O={};return O.inverse=!!S&&S.toLowerCase()==="not",O.type=b?b.toLowerCase():"all",E=E.match(/\([^\)]+\)/g)||[],O.expressions=E.map(function(j){var T=j.match(e),C=T[1].toLowerCase().match(i);return{modifier:C[1],feature:C[2],value:T[2]}}),O})}function d(m){var x=Number(m),v;return x||(v=m.match(/^(\d+)\s*\/\s*(\d+)$/),x=v[1]/v[2]),x}function f(m){var x=parseFloat(m),v=String(m).match(o)[1];switch(v){case"dpcm":return x/2.54;case"dppx":return x*96;default:return x}}function p(m){var x=parseFloat(m),v=String(m).match(r)[1];switch(v){case"em":return x*16;case"rem":return x*16;case"cm":return x*96/2.54;case"mm":return x*96/2.54/10;case"in":return x*96;case"pt":return x*72;case"pc":return x*72/12;default:return x}}return ql}var Vf,H3;function US(){if(H3)return Vf;H3=1;var t=_S().match,e=typeof window<"u"?window.matchMedia:null;function i(o,l,u){var d=this,f;e&&!u&&(f=e.call(window,o)),f?(this.matches=f.matches,this.media=f.media,f.addListener(x)):(this.matches=t(o,l),this.media=o),this.addListener=p,this.removeListener=m,this.dispose=v;function p(S){f&&f.addListener(S)}function m(S){f&&f.removeListener(S)}function x(S){d.matches=S.matches,d.media=S.media}function v(){f&&f.removeListener(x)}}function r(o,l,u){return new i(o,l,u)}return Vf=r,Vf}var GS=US();const IS=Uc(GS);var qS=/[A-Z]/g,YS=/^ms-/,kf={};function FS(t){return"-"+t.toLowerCase()}function h5(t){if(kf.hasOwnProperty(t))return kf[t];var e=t.replace(qS,FS);return kf[t]=YS.test(e)?"-"+e:e}function ZS(t,e){if(t===e)return!0;if(!t||!e)return!1;const i=Object.keys(t),r=Object.keys(e),o=i.length;if(r.length!==o)return!1;for(let l=0;l<o;l++){const u=i[l];if(t[u]!==e[u]||!Object.prototype.hasOwnProperty.call(e,u))return!1}return!0}var zf={exports:{}},Pf,V3;function XS(){if(V3)return Pf;V3=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Pf=t,Pf}var Nf,k3;function KS(){if(k3)return Nf;k3=1;var t=XS();function e(){}function i(){}return i.resetWarningCache=e,Nf=function(){function r(u,d,f,p,m,x){if(x!==t){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function o(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:e};return l.PropTypes=l,l},Nf}var z3;function WS(){return z3||(z3=1,zf.exports=KS()()),zf.exports}var QS=WS();const je=Uc(QS),At=je.oneOfType([je.string,je.number]),p5={all:je.bool,grid:je.bool,aural:je.bool,braille:je.bool,handheld:je.bool,print:je.bool,projection:je.bool,screen:je.bool,tty:je.bool,tv:je.bool,embossed:je.bool},JS={orientation:je.oneOf(["portrait","landscape"]),scan:je.oneOf(["progressive","interlace"]),aspectRatio:je.string,deviceAspectRatio:je.string,height:At,deviceHeight:At,width:At,deviceWidth:At,color:je.bool,colorIndex:je.bool,monochrome:je.bool,resolution:At,type:Object.keys(p5)},{type:Lk,...eC}=JS,tC={minAspectRatio:je.string,maxAspectRatio:je.string,minDeviceAspectRatio:je.string,maxDeviceAspectRatio:je.string,minHeight:At,maxHeight:At,minDeviceHeight:At,maxDeviceHeight:At,minWidth:At,maxWidth:At,minDeviceWidth:At,maxDeviceWidth:At,minColor:je.number,maxColor:je.number,minColorIndex:je.number,maxColorIndex:je.number,minMonochrome:je.number,maxMonochrome:je.number,minResolution:At,maxResolution:At,...eC},nC={...p5,...tC};var iC={all:nC};const aC=t=>`not ${t}`,rC=(t,e)=>{const i=h5(t);return typeof e=="number"&&(e=`${e}px`),e===!0?i:e===!1?aC(i):`(${i}: ${e})`},sC=t=>t.join(" and "),oC=t=>{const e=[];return Object.keys(iC.all).forEach(i=>{const r=t[i];r!=null&&e.push(rC(i,r))}),sC(e)},lC=R.createContext(void 0),cC=t=>t.query||oC(t),P3=t=>t?Object.keys(t).reduce((i,r)=>(i[h5(r)]=t[r],i),{}):void 0,m5=()=>{const t=R.useRef(!1);return R.useEffect(()=>{t.current=!0},[]),t.current},uC=t=>{const e=R.useContext(lC),i=()=>P3(t)||P3(e),[r,o]=R.useState(i);return R.useEffect(()=>{const l=i();ZS(r,l)||o(l)},[t,e]),r},dC=t=>{const e=()=>cC(t),[i,r]=R.useState(e);return R.useEffect(()=>{const o=e();i!==o&&r(o)},[t]),i},fC=(t,e)=>{const i=()=>IS(t,e||{},!!e),[r,o]=R.useState(i),l=m5();return R.useEffect(()=>{if(l){const u=i();return o(u),()=>{u&&u.dispose()}}},[t,e]),r},hC=t=>{const[e,i]=R.useState(t.matches);return R.useEffect(()=>{const r=o=>{i(o.matches)};return t.addListener(r),i(t.matches),()=>{t.removeListener(r)}},[t]),e},_e=(t,e,i)=>{const r=uC(e),o=dC(t);if(!o)throw new Error("Invalid or missing MediaQuery!");const l=fC(o,r),u=hC(l);return m5(),R.useEffect(()=>{},[u]),R.useEffect(()=>()=>{l&&l.dispose()},[]),u},Ph=R.createContext({});function Nh(t){const e=R.useRef(null);return e.current===null&&(e.current=t()),e.current}const Bh=typeof window<"u",g5=Bh?R.useLayoutEffect:R.useEffect,eu=R.createContext(null);function $h(t,e){t.indexOf(e)===-1&&t.push(e)}function _h(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}const li=(t,e,i)=>i>e?e:i<t?t:i;let Uh=()=>{};const ci={},x5=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function y5(t){return typeof t=="object"&&t!==null}const v5=t=>/^0[^.\s]+$/u.test(t);function Gh(t){let e;return()=>(e===void 0&&(e=t()),e)}const un=t=>t,pC=(t,e)=>i=>e(t(i)),So=(...t)=>t.reduce(pC),lo=(t,e,i)=>{const r=e-t;return r===0?1:(i-t)/r};class Ih{constructor(){this.subscriptions=[]}add(e){return $h(this.subscriptions,e),()=>_h(this.subscriptions,e)}notify(e,i,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,i,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,i,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const zn=t=>t*1e3,Pn=t=>t/1e3;function w5(t,e){return e?t*(1e3/e):0}const b5=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,mC=1e-7,gC=12;function xC(t,e,i,r,o){let l,u,d=0;do u=e+(i-e)/2,l=b5(u,r,o)-t,l>0?i=u:e=u;while(Math.abs(l)>mC&&++d<gC);return u}function Co(t,e,i,r){if(t===e&&i===r)return un;const o=l=>xC(l,0,1,t,i);return l=>l===0||l===1?l:b5(o(l),e,r)}const S5=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,C5=t=>e=>1-t(1-e),T5=Co(.33,1.53,.69,.99),qh=C5(T5),E5=S5(qh),M5=t=>(t*=2)<1?.5*qh(t):.5*(2-Math.pow(2,-10*(t-1))),Yh=t=>1-Math.sin(Math.acos(t)),A5=C5(Yh),j5=S5(Yh),yC=Co(.42,0,1,1),vC=Co(0,0,.58,1),L5=Co(.42,0,.58,1),wC=t=>Array.isArray(t)&&typeof t[0]!="number",O5=t=>Array.isArray(t)&&typeof t[0]=="number",bC={linear:un,easeIn:yC,easeInOut:L5,easeOut:vC,circIn:Yh,circInOut:j5,circOut:A5,backIn:qh,backInOut:E5,backOut:T5,anticipate:M5},SC=t=>typeof t=="string",N3=t=>{if(O5(t)){Uh(t.length===4);const[e,i,r,o]=t;return Co(e,i,r,o)}else if(SC(t))return bC[t];return t},Yl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function CC(t,e){let i=new Set,r=new Set,o=!1,l=!1;const u=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function f(m){u.has(m)&&(p.schedule(m),t()),m(d)}const p={schedule:(m,x=!1,v=!1)=>{const b=v&&o?i:r;return x&&u.add(m),b.has(m)||b.add(m),m},cancel:m=>{r.delete(m),u.delete(m)},process:m=>{if(d=m,o){l=!0;return}o=!0,[i,r]=[r,i],i.forEach(f),i.clear(),o=!1,l&&(l=!1,p.process(m))}};return p}const TC=40;function R5(t,e){let i=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>i=!0,u=Yl.reduce((C,D)=>(C[D]=CC(l),C),{}),{setup:d,read:f,resolveKeyframes:p,preUpdate:m,update:x,preRender:v,render:S,postRender:b}=u,E=()=>{const C=ci.useManualTiming?o.timestamp:performance.now();i=!1,ci.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(C-o.timestamp,TC),1)),o.timestamp=C,o.isProcessing=!0,d.process(o),f.process(o),p.process(o),m.process(o),x.process(o),v.process(o),S.process(o),b.process(o),o.isProcessing=!1,i&&e&&(r=!1,t(E))},O=()=>{i=!0,r=!0,o.isProcessing||t(E)};return{schedule:Yl.reduce((C,D)=>{const L=u[D];return C[D]=(P,k=!1,_=!1)=>(i||O(),L.schedule(P,k,_)),C},{}),cancel:C=>{for(let D=0;D<Yl.length;D++)u[Yl[D]].cancel(C)},state:o,steps:u}}const{schedule:Ge,cancel:$i,state:gt,steps:Bf}=R5(typeof requestAnimationFrame<"u"?requestAnimationFrame:un,!0);let mc;function EC(){mc=void 0}const kt={now:()=>(mc===void 0&&kt.set(gt.isProcessing||ci.useManualTiming?gt.timestamp:performance.now()),mc),set:t=>{mc=t,queueMicrotask(EC)}},D5=t=>e=>typeof e=="string"&&e.startsWith(t),Fh=D5("--"),MC=D5("var(--"),Zh=t=>MC(t)?AC.test(t.split("/*")[0].trim()):!1,AC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Pr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},co={...Pr,transform:t=>li(0,1,t)},Fl={...Pr,default:1},Xs=t=>Math.round(t*1e5)/1e5,Xh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function jC(t){return t==null}const LC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Kh=(t,e)=>i=>!!(typeof i=="string"&&LC.test(i)&&i.startsWith(t)||e&&!jC(i)&&Object.prototype.hasOwnProperty.call(i,e)),H5=(t,e,i)=>r=>{if(typeof r!="string")return r;const[o,l,u,d]=r.match(Xh);return{[t]:parseFloat(o),[e]:parseFloat(l),[i]:parseFloat(u),alpha:d!==void 0?parseFloat(d):1}},OC=t=>li(0,255,t),$f={...Pr,transform:t=>Math.round(OC(t))},pa={test:Kh("rgb","red"),parse:H5("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:r=1})=>"rgba("+$f.transform(t)+", "+$f.transform(e)+", "+$f.transform(i)+", "+Xs(co.transform(r))+")"};function RC(t){let e="",i="",r="",o="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),r=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),r=t.substring(3,4),o=t.substring(4,5),e+=e,i+=i,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const $0={test:Kh("#"),parse:RC,transform:pa.transform},To=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Ni=To("deg"),Nn=To("%"),pe=To("px"),DC=To("vh"),HC=To("vw"),B3={...Nn,parse:t=>Nn.parse(t)/100,transform:t=>Nn.transform(t*100)},pr={test:Kh("hsl","hue"),parse:H5("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:r=1})=>"hsla("+Math.round(t)+", "+Nn.transform(Xs(e))+", "+Nn.transform(Xs(i))+", "+Xs(co.transform(r))+")"},tt={test:t=>pa.test(t)||$0.test(t)||pr.test(t),parse:t=>pa.test(t)?pa.parse(t):pr.test(t)?pr.parse(t):$0.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?pa.transform(t):pr.transform(t),getAnimatableNone:t=>{const e=tt.parse(t);return e.alpha=0,tt.transform(e)}},VC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function kC(t){var e,i;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Xh))==null?void 0:e.length)||0)+(((i=t.match(VC))==null?void 0:i.length)||0)>0}const V5="number",k5="color",zC="var",PC="var(",$3="${}",NC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function uo(t){const e=t.toString(),i=[],r={color:[],number:[],var:[]},o=[];let l=0;const d=e.replace(NC,f=>(tt.test(f)?(r.color.push(l),o.push(k5),i.push(tt.parse(f))):f.startsWith(PC)?(r.var.push(l),o.push(zC),i.push(f)):(r.number.push(l),o.push(V5),i.push(parseFloat(f))),++l,$3)).split($3);return{values:i,split:d,indexes:r,types:o}}function z5(t){return uo(t).values}function P5(t){const{split:e,types:i}=uo(t),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const d=i[u];d===V5?l+=Xs(o[u]):d===k5?l+=tt.transform(o[u]):l+=o[u]}return l}}const BC=t=>typeof t=="number"?0:tt.test(t)?tt.getAnimatableNone(t):t;function $C(t){const e=z5(t);return P5(t)(e.map(BC))}const _i={test:kC,parse:z5,createTransformer:P5,getAnimatableNone:$C};function _f(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function _C({hue:t,saturation:e,lightness:i,alpha:r}){t/=360,e/=100,i/=100;let o=0,l=0,u=0;if(!e)o=l=u=i;else{const d=i<.5?i*(1+e):i+e-i*e,f=2*i-d;o=_f(f,d,t+1/3),l=_f(f,d,t),u=_f(f,d,t-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Ec(t,e){return i=>i>0?e:t}const Ye=(t,e,i)=>t+(e-t)*i,Uf=(t,e,i)=>{const r=t*t,o=i*(e*e-r)+r;return o<0?0:Math.sqrt(o)},UC=[$0,pa,pr],GC=t=>UC.find(e=>e.test(t));function _3(t){const e=GC(t);if(!e)return!1;let i=e.parse(t);return e===pr&&(i=_C(i)),i}const U3=(t,e)=>{const i=_3(t),r=_3(e);if(!i||!r)return Ec(t,e);const o={...i};return l=>(o.red=Uf(i.red,r.red,l),o.green=Uf(i.green,r.green,l),o.blue=Uf(i.blue,r.blue,l),o.alpha=Ye(i.alpha,r.alpha,l),pa.transform(o))},_0=new Set(["none","hidden"]);function IC(t,e){return _0.has(t)?i=>i<=0?t:e:i=>i>=1?e:t}function qC(t,e){return i=>Ye(t,e,i)}function Wh(t){return typeof t=="number"?qC:typeof t=="string"?Zh(t)?Ec:tt.test(t)?U3:ZC:Array.isArray(t)?N5:typeof t=="object"?tt.test(t)?U3:YC:Ec}function N5(t,e){const i=[...t],r=i.length,o=t.map((l,u)=>Wh(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)i[u]=o[u](l);return i}}function YC(t,e){const i={...t,...e},r={};for(const o in i)t[o]!==void 0&&e[o]!==void 0&&(r[o]=Wh(t[o])(t[o],e[o]));return o=>{for(const l in r)i[l]=r[l](o);return i}}function FC(t,e){const i=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],u=t.indexes[l][r[l]],d=t.values[u]??0;i[o]=d,r[l]++}return i}const ZC=(t,e)=>{const i=_i.createTransformer(e),r=uo(t),o=uo(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?_0.has(t)&&!o.values.length||_0.has(e)&&!r.values.length?IC(t,e):So(N5(FC(r,o),o.values),i):Ec(t,e)};function B5(t,e,i){return typeof t=="number"&&typeof e=="number"&&typeof i=="number"?Ye(t,e,i):Wh(t)(t,e)}const XC=t=>{const e=({timestamp:i})=>t(i);return{start:(i=!0)=>Ge.update(e,i),stop:()=>$i(e),now:()=>gt.isProcessing?gt.timestamp:kt.now()}},$5=(t,e,i=10)=>{let r="";const o=Math.max(Math.round(e/i),2);for(let l=0;l<o;l++)r+=Math.round(t(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Mc=2e4;function Qh(t){let e=0;const i=50;let r=t.next(e);for(;!r.done&&e<Mc;)e+=i,r=t.next(e);return e>=Mc?1/0:e}function KC(t,e=100,i){const r=i({...t,keyframes:[0,e]}),o=Math.min(Qh(r),Mc);return{type:"keyframes",ease:l=>r.next(o*l).value/e,duration:Pn(o)}}const WC=5;function _5(t,e,i){const r=Math.max(e-WC,0);return w5(i-t(r),e-r)}const Xe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Gf=.001;function QC({duration:t=Xe.duration,bounce:e=Xe.bounce,velocity:i=Xe.velocity,mass:r=Xe.mass}){let o,l,u=1-e;u=li(Xe.minDamping,Xe.maxDamping,u),t=li(Xe.minDuration,Xe.maxDuration,Pn(t)),u<1?(o=p=>{const m=p*u,x=m*t,v=m-i,S=U0(p,u),b=Math.exp(-x);return Gf-v/S*b},l=p=>{const x=p*u*t,v=x*i+i,S=Math.pow(u,2)*Math.pow(p,2)*t,b=Math.exp(-x),E=U0(Math.pow(p,2),u);return(-o(p)+Gf>0?-1:1)*((v-S)*b)/E}):(o=p=>{const m=Math.exp(-p*t),x=(p-i)*t+1;return-Gf+m*x},l=p=>{const m=Math.exp(-p*t),x=(i-p)*(t*t);return m*x});const d=5/t,f=eT(o,l,d);if(t=zn(t),isNaN(f))return{stiffness:Xe.stiffness,damping:Xe.damping,duration:t};{const p=Math.pow(f,2)*r;return{stiffness:p,damping:u*2*Math.sqrt(r*p),duration:t}}}const JC=12;function eT(t,e,i){let r=i;for(let o=1;o<JC;o++)r=r-t(r)/e(r);return r}function U0(t,e){return t*Math.sqrt(1-e*e)}const tT=["duration","bounce"],nT=["stiffness","damping","mass"];function G3(t,e){return e.some(i=>t[i]!==void 0)}function iT(t){let e={velocity:Xe.velocity,stiffness:Xe.stiffness,damping:Xe.damping,mass:Xe.mass,isResolvedFromDuration:!1,...t};if(!G3(t,nT)&&G3(t,tT))if(t.visualDuration){const i=t.visualDuration,r=2*Math.PI/(i*1.2),o=r*r,l=2*li(.05,1,1-(t.bounce||0))*Math.sqrt(o);e={...e,mass:Xe.mass,stiffness:o,damping:l}}else{const i=QC(t);e={...e,...i,mass:Xe.mass},e.isResolvedFromDuration=!0}return e}function Ac(t=Xe.visualDuration,e=Xe.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:o}=i;const l=i.keyframes[0],u=i.keyframes[i.keyframes.length-1],d={done:!1,value:l},{stiffness:f,damping:p,mass:m,duration:x,velocity:v,isResolvedFromDuration:S}=iT({...i,velocity:-Pn(i.velocity||0)}),b=v||0,E=p/(2*Math.sqrt(f*m)),O=u-l,j=Pn(Math.sqrt(f/m)),T=Math.abs(O)<5;r||(r=T?Xe.restSpeed.granular:Xe.restSpeed.default),o||(o=T?Xe.restDelta.granular:Xe.restDelta.default);let C;if(E<1){const L=U0(j,E);C=P=>{const k=Math.exp(-E*j*P);return u-k*((b+E*j*O)/L*Math.sin(L*P)+O*Math.cos(L*P))}}else if(E===1)C=L=>u-Math.exp(-j*L)*(O+(b+j*O)*L);else{const L=j*Math.sqrt(E*E-1);C=P=>{const k=Math.exp(-E*j*P),_=Math.min(L*P,300);return u-k*((b+E*j*O)*Math.sinh(_)+L*O*Math.cosh(_))/L}}const D={calculatedDuration:S&&x||null,next:L=>{const P=C(L);if(S)d.done=L>=x;else{let k=L===0?b:0;E<1&&(k=L===0?zn(b):_5(C,L,P));const _=Math.abs(k)<=r,$=Math.abs(u-P)<=o;d.done=_&&$}return d.value=d.done?u:P,d},toString:()=>{const L=Math.min(Qh(D),Mc),P=$5(k=>D.next(L*k).value,L,30);return L+"ms "+P},toTransition:()=>{}};return D}Ac.applyToOptions=t=>{const e=KC(t,100,Ac);return t.ease=e.ease,t.duration=zn(e.duration),t.type="keyframes",t};function G0({keyframes:t,velocity:e=0,power:i=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:d,max:f,restDelta:p=.5,restSpeed:m}){const x=t[0],v={done:!1,value:x},S=_=>d!==void 0&&_<d||f!==void 0&&_>f,b=_=>d===void 0?f:f===void 0||Math.abs(d-_)<Math.abs(f-_)?d:f;let E=i*e;const O=x+E,j=u===void 0?O:u(O);j!==O&&(E=j-x);const T=_=>-E*Math.exp(-_/r),C=_=>j+T(_),D=_=>{const $=T(_),Y=C(_);v.done=Math.abs($)<=p,v.value=v.done?j:Y};let L,P;const k=_=>{S(v.value)&&(L=_,P=Ac({keyframes:[v.value,b(v.value)],velocity:_5(C,_,v.value),damping:o,stiffness:l,restDelta:p,restSpeed:m}))};return k(0),{calculatedDuration:null,next:_=>{let $=!1;return!P&&L===void 0&&($=!0,D(_),k(_)),L!==void 0&&_>=L?P.next(_-L):(!$&&D(_),v)}}}function aT(t,e,i){const r=[],o=i||ci.mix||B5,l=t.length-1;for(let u=0;u<l;u++){let d=o(t[u],t[u+1]);if(e){const f=Array.isArray(e)?e[u]||un:e;d=So(f,d)}r.push(d)}return r}function rT(t,e,{clamp:i=!0,ease:r,mixer:o}={}){const l=t.length;if(Uh(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=t[0]===t[1];t[0]>t[l-1]&&(t=[...t].reverse(),e=[...e].reverse());const d=aT(e,r,o),f=d.length,p=m=>{if(u&&m<t[0])return e[0];let x=0;if(f>1)for(;x<t.length-2&&!(m<t[x+1]);x++);const v=lo(t[x],t[x+1],m);return d[x](v)};return i?m=>p(li(t[0],t[l-1],m)):p}function sT(t,e){const i=t[t.length-1];for(let r=1;r<=e;r++){const o=lo(0,e,r);t.push(Ye(i,1,o))}}function oT(t){const e=[0];return sT(e,t.length-1),e}function lT(t,e){return t.map(i=>i*e)}function cT(t,e){return t.map(()=>e||L5).splice(0,t.length-1)}function Ks({duration:t=300,keyframes:e,times:i,ease:r="easeInOut"}){const o=wC(r)?r.map(N3):N3(r),l={done:!1,value:e[0]},u=lT(i&&i.length===e.length?i:oT(e),t),d=rT(u,e,{ease:Array.isArray(o)?o:cT(e,o)});return{calculatedDuration:t,next:f=>(l.value=d(f),l.done=f>=t,l)}}const uT=t=>t!==null;function Jh(t,{repeat:e,repeatType:i="loop"},r,o=1){const l=t.filter(uT),d=o<0||e&&i!=="loop"&&e%2===1?0:l.length-1;return!d||r===void 0?l[d]:r}const dT={decay:G0,inertia:G0,tween:Ks,keyframes:Ks,spring:Ac};function U5(t){typeof t.type=="string"&&(t.type=dT[t.type])}class ep{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,i){return this.finished.then(e,i)}}const fT=t=>t/100;class tp extends ep{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,o;const{motionValue:i}=this.options;i&&i.updatedAt!==kt.now()&&this.tick(kt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;U5(e);const{type:i=Ks,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=e;let{keyframes:d}=e;const f=i||Ks;f!==Ks&&typeof d[0]!="number"&&(this.mixKeyframes=So(fT,B5(d[0],d[1])),d=[0,100]);const p=f({...e,keyframes:d});l==="mirror"&&(this.mirroredGenerator=f({...e,keyframes:[...d].reverse(),velocity:-u})),p.calculatedDuration===null&&(p.calculatedDuration=Qh(p));const{calculatedDuration:m}=p;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=p}updateTime(e){const i=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(e,i=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:d,calculatedDuration:f}=this;if(this.startTime===null)return r.next(0);const{delay:p=0,keyframes:m,repeat:x,repeatType:v,repeatDelay:S,type:b,onUpdate:E,finalKeyframe:O}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),i?this.currentTime=e:this.updateTime(e);const j=this.currentTime-p*(this.playbackSpeed>=0?1:-1),T=this.playbackSpeed>=0?j<0:j>o;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let C=this.currentTime,D=r;if(x){const _=Math.min(this.currentTime,o)/d;let $=Math.floor(_),Y=_%1;!Y&&_>=1&&(Y=1),Y===1&&$--,$=Math.min($,x+1),!!($%2)&&(v==="reverse"?(Y=1-Y,S&&(Y-=S/d)):v==="mirror"&&(D=u)),C=li(0,1,Y)*d}const L=T?{done:!1,value:m[0]}:D.next(C);l&&(L.value=l(L.value));let{done:P}=L;!T&&f!==null&&(P=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const k=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return k&&b!==G0&&(L.value=Jh(m,this.options,O,this.speed)),E&&E(L.value),k&&this.finish(),L}then(e,i){return this.finished.then(e,i)}get duration(){return Pn(this.calculatedDuration)}get time(){return Pn(this.currentTime)}set time(e){var i;e=zn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(i=this.driver)==null||i.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(kt.now());const i=this.playbackSpeed!==e;this.playbackSpeed=e,i&&(this.time=Pn(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:e=XC,startTime:i}=this.options;this.driver||(this.driver=e(u=>this.tick(u))),(l=(o=this.options).onPlay)==null||l.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=i??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(kt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(e=this.options).onComplete)==null||i.call(e)}cancel(){var e,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(e=this.options).onCancel)==null||i.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),e.observe(this)}}function hT(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ma=t=>t*180/Math.PI,I0=t=>{const e=ma(Math.atan2(t[1],t[0]));return q0(e)},pT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:I0,rotateZ:I0,skewX:t=>ma(Math.atan(t[1])),skewY:t=>ma(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},q0=t=>(t=t%360,t<0&&(t+=360),t),I3=I0,q3=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Y3=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),mT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:q3,scaleY:Y3,scale:t=>(q3(t)+Y3(t))/2,rotateX:t=>q0(ma(Math.atan2(t[6],t[5]))),rotateY:t=>q0(ma(Math.atan2(-t[2],t[0]))),rotateZ:I3,rotate:I3,skewX:t=>ma(Math.atan(t[4])),skewY:t=>ma(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Y0(t){return t.includes("scale")?1:0}function F0(t,e){if(!t||t==="none")return Y0(e);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(i)r=mT,o=i;else{const d=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=pT,o=d}if(!o)return Y0(e);const l=r[e],u=o[1].split(",").map(xT);return typeof l=="function"?l(u):u[l]}const gT=(t,e)=>{const{transform:i="none"}=getComputedStyle(t);return F0(i,e)};function xT(t){return parseFloat(t.trim())}const Nr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Br=new Set(Nr),F3=t=>t===Pr||t===pe,yT=new Set(["x","y","z"]),vT=Nr.filter(t=>!yT.has(t));function wT(t){const e=[];return vT.forEach(i=>{const r=t.getValue(i);r!==void 0&&(e.push([i,r.get()]),r.set(i.startsWith("scale")?1:0))}),e}const ya={width:({x:t},{paddingLeft:e="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),height:({y:t},{paddingTop:e="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>F0(e,"x"),y:(t,{transform:e})=>F0(e,"y")};ya.translateX=ya.x;ya.translateY=ya.y;const va=new Set;let Z0=!1,X0=!1,K0=!1;function G5(){if(X0){const t=Array.from(va).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),i=new Map;e.forEach(r=>{const o=wT(r);o.length&&(i.set(r,o),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=i.get(r);o&&o.forEach(([l,u])=>{var d;(d=r.getValue(l))==null||d.set(u)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}X0=!1,Z0=!1,va.forEach(t=>t.complete(K0)),va.clear()}function I5(){va.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(X0=!0)})}function bT(){K0=!0,I5(),G5(),K0=!1}class np{constructor(e,i,r,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=i,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(va.add(this),Z0||(Z0=!0,Ge.read(I5),Ge.resolveKeyframes(G5))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:i,element:r,motionValue:o}=this;if(e[0]===null){const l=o==null?void 0:o.get(),u=e[e.length-1];if(l!==void 0)e[0]=l;else if(r&&i){const d=r.readValue(i,u);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=u),o&&l===void 0&&o.set(e[0])}hT(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),va.delete(this)}cancel(){this.state==="scheduled"&&(va.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ST=t=>t.startsWith("--");function CT(t,e,i){ST(e)?t.style.setProperty(e,i):t.style[e]=i}const TT=Gh(()=>window.ScrollTimeline!==void 0),ET={};function MT(t,e){const i=Gh(t);return()=>ET[e]??i()}const q5=MT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Fs=([t,e,i,r])=>`cubic-bezier(${t}, ${e}, ${i}, ${r})`,Z3={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fs([0,.65,.55,1]),circOut:Fs([.55,0,1,.45]),backIn:Fs([.31,.01,.66,-.59]),backOut:Fs([.33,1.53,.69,.99])};function Y5(t,e){if(t)return typeof t=="function"?q5()?$5(t,e):"ease-out":O5(t)?Fs(t):Array.isArray(t)?t.map(i=>Y5(i,e)||Z3.easeOut):Z3[t]}function AT(t,e,i,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:d="easeOut",times:f}={},p=void 0){const m={[e]:i};f&&(m.offset=f);const x=Y5(d,o);Array.isArray(x)&&(m.easing=x);const v={delay:r,duration:o,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return p&&(v.pseudoElement=p),t.animate(m,v)}function F5(t){return typeof t=="function"&&"applyToOptions"in t}function jT({type:t,...e}){return F5(t)&&q5()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class LT extends ep{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:i,name:r,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:d,onComplete:f}=e;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=e,Uh(typeof e.type!="string");const p=jT(e);this.animation=AT(i,r,o,p,l),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=Jh(o,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(m):CT(i,r,m),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,i;(i=(e=this.animation).finish)==null||i.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,i;this.isPseudoElement||(i=(e=this.animation).commitStyles)==null||i.call(e)}get duration(){var i,r;const e=((r=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:r.call(i).duration)||0;return Pn(Number(e))}get time(){return Pn(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=zn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&TT()?(this.animation.timeline=e,un):i(this)}}const Z5={anticipate:M5,backInOut:E5,circInOut:j5};function OT(t){return t in Z5}function RT(t){typeof t.ease=="string"&&OT(t.ease)&&(t.ease=Z5[t.ease])}const X3=10;class DT extends LT{constructor(e){RT(e),U5(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:i,onUpdate:r,onComplete:o,element:l,...u}=this.options;if(!i)return;if(e!==void 0){i.set(e);return}const d=new tp({...u,autoplay:!1}),f=zn(this.finishedTime??this.time);i.setWithVelocity(d.sample(f-X3).value,d.sample(f).value,X3),d.stop()}}const K3=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(_i.test(t)||t==="0")&&!t.startsWith("url("));function HT(t){const e=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==e)return!0}function VT(t,e,i,r){const o=t[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=t[t.length-1],u=K3(o,e),d=K3(l,e);return!u||!d?!1:HT(t)||(i==="spring"||F5(i))&&r}function W0(t){t.duration=0,t.type}const kT=new Set(["opacity","clipPath","filter","transform"]),zT=Gh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function PT(t){var m;const{motionValue:e,name:i,repeatDelay:r,repeatType:o,damping:l,type:u}=t;if(!(((m=e==null?void 0:e.owner)==null?void 0:m.current)instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:p}=e.owner.getProps();return zT()&&i&&kT.has(i)&&(i!=="transform"||!p)&&!f&&!r&&o!=="mirror"&&l!==0&&u!=="inertia"}const NT=40;class BT extends ep{constructor({autoplay:e=!0,delay:i=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:d,name:f,motionValue:p,element:m,...x}){var b;super(),this.stop=()=>{var E,O;this._animation&&(this._animation.stop(),(E=this.stopTimeline)==null||E.call(this)),(O=this.keyframeResolver)==null||O.cancel()},this.createdAt=kt.now();const v={autoplay:e,delay:i,type:r,repeat:o,repeatDelay:l,repeatType:u,name:f,motionValue:p,element:m,...x},S=(m==null?void 0:m.KeyframeResolver)||np;this.keyframeResolver=new S(d,(E,O,j)=>this.onKeyframesResolved(E,O,v,!j),f,p,m),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(e,i,r,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:d,delay:f,isHandoff:p,onUpdate:m}=r;this.resolvedAt=kt.now(),VT(e,l,u,d)||((ci.instantAnimations||!f)&&(m==null||m(Jh(e,r,i))),e[0]=e[e.length-1],W0(r),r.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>NT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...r,keyframes:e},S=!p&&PT(v)?new DT({...v,element:v.motionValue.owner.current}):new tp(v);S.finished.then(()=>this.notifyFinished()).catch(un),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(e,i){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),bT()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const $T=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function _T(t){const e=$T.exec(t);if(!e)return[,];const[,i,r,o]=e;return[`--${i??r}`,o]}function X5(t,e,i=1){const[r,o]=_T(t);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return x5(u)?parseFloat(u):u}return Zh(o)?X5(o,e,i+1):o}function ip(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const K5=new Set(["width","height","top","left","right","bottom",...Nr]),UT={test:t=>t==="auto",parse:t=>t},W5=t=>e=>e.test(t),Q5=[Pr,pe,Nn,Ni,HC,DC,UT],W3=t=>Q5.find(W5(t));function GT(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||v5(t):!0}const IT=new Set(["brightness","contrast","saturate","opacity"]);function qT(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=i.match(Xh)||[];if(!r)return t;const o=i.replace(r,"");let l=IT.has(e)?1:0;return r!==i&&(l*=100),e+"("+l+o+")"}const YT=/\b([a-z-]*)\(.*?\)/gu,Q0={..._i,getAnimatableNone:t=>{const e=t.match(YT);return e?e.map(qT).join(" "):t}},Q3={...Pr,transform:Math.round},FT={rotate:Ni,rotateX:Ni,rotateY:Ni,rotateZ:Ni,scale:Fl,scaleX:Fl,scaleY:Fl,scaleZ:Fl,skew:Ni,skewX:Ni,skewY:Ni,distance:pe,translateX:pe,translateY:pe,translateZ:pe,x:pe,y:pe,z:pe,perspective:pe,transformPerspective:pe,opacity:co,originX:B3,originY:B3,originZ:pe},ap={borderWidth:pe,borderTopWidth:pe,borderRightWidth:pe,borderBottomWidth:pe,borderLeftWidth:pe,borderRadius:pe,radius:pe,borderTopLeftRadius:pe,borderTopRightRadius:pe,borderBottomRightRadius:pe,borderBottomLeftRadius:pe,width:pe,maxWidth:pe,height:pe,maxHeight:pe,top:pe,right:pe,bottom:pe,left:pe,padding:pe,paddingTop:pe,paddingRight:pe,paddingBottom:pe,paddingLeft:pe,margin:pe,marginTop:pe,marginRight:pe,marginBottom:pe,marginLeft:pe,backgroundPositionX:pe,backgroundPositionY:pe,...FT,zIndex:Q3,fillOpacity:co,strokeOpacity:co,numOctaves:Q3},ZT={...ap,color:tt,backgroundColor:tt,outlineColor:tt,fill:tt,stroke:tt,borderColor:tt,borderTopColor:tt,borderRightColor:tt,borderBottomColor:tt,borderLeftColor:tt,filter:Q0,WebkitFilter:Q0},J5=t=>ZT[t];function ey(t,e){let i=J5(t);return i!==Q0&&(i=_i),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const XT=new Set(["auto","none","0"]);function KT(t,e,i){let r=0,o;for(;r<t.length&&!o;){const l=t[r];typeof l=="string"&&!XT.has(l)&&uo(l).values.length&&(o=t[r]),r++}if(o&&i)for(const l of e)t[l]=ey(i,o)}class WT extends np{constructor(e,i,r,o,l){super(e,i,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:i,name:r}=this;if(!i||!i.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let p=e[f];if(typeof p=="string"&&(p=p.trim(),Zh(p))){const m=X5(p,i.current);m!==void 0&&(e[f]=m),f===e.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!K5.has(r)||e.length!==2)return;const[o,l]=e,u=W3(o),d=W3(l);if(u!==d)if(F3(u)&&F3(d))for(let f=0;f<e.length;f++){const p=e[f];typeof p=="string"&&(e[f]=parseFloat(p))}else ya[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:i}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||GT(e[o]))&&r.push(o);r.length&&KT(e,r,i)}measureInitialState(){const{element:e,unresolvedKeyframes:i,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ya[r](e.measureViewportBox(),window.getComputedStyle(e.current)),i[0]=this.measuredOrigin;const o=i[i.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var d;const{element:e,name:i,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(i);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,u=r[l];r[l]=ya[i](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([f,p])=>{e.getValue(f).set(p)}),this.resolveNoneKeyframes()}}function QT(t,e,i){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const o=(i==null?void 0:i[t])??r.querySelectorAll(t);return o?Array.from(o):[]}return Array.from(t)}const ty=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function ny(t){return y5(t)&&"offsetHeight"in t}const J3=30,JT=t=>!isNaN(parseFloat(t));class eE{constructor(e,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var l;const o=kt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=i.owner}setCurrent(e){this.current=e,this.updatedAt=kt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=JT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new Ih);const r=this.events[e].add(i);return e==="change"?()=>{r(),Ge.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,i,r){this.set(i),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,i=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=kt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>J3)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,J3);return w5(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,i;(e=this.dependents)==null||e.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function jr(t,e){return new eE(t,e)}const{schedule:rp}=R5(queueMicrotask,!1),xn={x:!1,y:!1};function iy(){return xn.x||xn.y}function tE(t){return t==="x"||t==="y"?xn[t]?null:(xn[t]=!0,()=>{xn[t]=!1}):xn.x||xn.y?null:(xn.x=xn.y=!0,()=>{xn.x=xn.y=!1})}function ay(t,e){const i=QT(t),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[i,o,()=>r.abort()]}function e4(t){return!(t.pointerType==="touch"||iy())}function nE(t,e,i={}){const[r,o,l]=ay(t,i),u=d=>{if(!e4(d))return;const{target:f}=d,p=e(f,d);if(typeof p!="function"||!f)return;const m=x=>{e4(x)&&(p(x),f.removeEventListener("pointerleave",m))};f.addEventListener("pointerleave",m,o)};return r.forEach(d=>{d.addEventListener("pointerenter",u,o)}),l}const ry=(t,e)=>e?t===e?!0:ry(t,e.parentElement):!1,sp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,iE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function aE(t){return iE.has(t.tagName)||t.tabIndex!==-1}const gc=new WeakSet;function t4(t){return e=>{e.key==="Enter"&&t(e)}}function If(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const rE=(t,e)=>{const i=t.currentTarget;if(!i)return;const r=t4(()=>{if(gc.has(i))return;If(i,"down");const o=t4(()=>{If(i,"up")}),l=()=>If(i,"cancel");i.addEventListener("keyup",o,e),i.addEventListener("blur",l,e)});i.addEventListener("keydown",r,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",r),e)};function n4(t){return sp(t)&&!iy()}function sE(t,e,i={}){const[r,o,l]=ay(t,i),u=d=>{const f=d.currentTarget;if(!n4(d))return;gc.add(f);const p=e(f,d),m=(S,b)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",v),gc.has(f)&&gc.delete(f),n4(S)&&typeof p=="function"&&p(S,{success:b})},x=S=>{m(S,f===window||f===document||i.useGlobalTarget||ry(f,S.target))},v=S=>{m(S,!1)};window.addEventListener("pointerup",x,o),window.addEventListener("pointercancel",v,o)};return r.forEach(d=>{(i.useGlobalTarget?window:d).addEventListener("pointerdown",u,o),ny(d)&&(d.addEventListener("focus",p=>rE(p,o)),!aE(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),l}function sy(t){return y5(t)&&"ownerSVGElement"in t}function oE(t){return sy(t)&&t.tagName==="svg"}const Ct=t=>!!(t&&t.getVelocity),lE=[...Q5,tt,_i],cE=t=>lE.find(W5(t)),op=R.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class uE extends R.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(i&&e.isPresent&&!this.props.isPresent){const r=i.offsetParent,o=ny(r)&&r.offsetWidth||0,l=this.props.sizeRef.current;l.height=i.offsetHeight||0,l.width=i.offsetWidth||0,l.top=i.offsetTop,l.left=i.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function dE({children:t,isPresent:e,anchorX:i,root:r}){const o=R.useId(),l=R.useRef(null),u=R.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=R.useContext(op);return R.useInsertionEffect(()=>{const{width:f,height:p,top:m,left:x,right:v}=u.current;if(e||!l.current||!f||!p)return;const S=i==="left"?`left: ${x}`:`right: ${v}`;l.current.dataset.motionPopId=o;const b=document.createElement("style");d&&(b.nonce=d);const E=r??document.head;return E.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${p}px !important;
            ${S}px !important;
            top: ${m}px !important;
          }
        `),()=>{E.contains(b)&&E.removeChild(b)}},[e]),y.jsx(uE,{isPresent:e,childRef:l,sizeRef:u,children:R.cloneElement(t,{ref:l})})}const fE=({children:t,initial:e,isPresent:i,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:u,anchorX:d,root:f})=>{const p=Nh(hE),m=R.useId();let x=!0,v=R.useMemo(()=>(x=!1,{id:m,initial:e,isPresent:i,custom:o,onExitComplete:S=>{p.set(S,!0);for(const b of p.values())if(!b)return;r&&r()},register:S=>(p.set(S,!1),()=>p.delete(S))}),[i,p,r]);return l&&x&&(v={...v}),R.useMemo(()=>{p.forEach((S,b)=>p.set(b,!1))},[i]),R.useEffect(()=>{!i&&!p.size&&r&&r()},[i]),u==="popLayout"&&(t=y.jsx(dE,{isPresent:i,anchorX:d,root:f,children:t})),y.jsx(eu.Provider,{value:v,children:t})};function hE(){return new Map}function oy(t=!0){const e=R.useContext(eu);if(e===null)return[!0,null];const{isPresent:i,onExitComplete:r,register:o}=e,l=R.useId();R.useEffect(()=>{if(t)return o(l)},[t]);const u=R.useCallback(()=>t&&r&&r(l),[l,r,t]);return!i&&r?[!1,u]:[!0]}const Zl=t=>t.key||"";function i4(t){const e=[];return R.Children.forEach(t,i=>{R.isValidElement(i)&&e.push(i)}),e}const ly=({children:t,custom:e,initial:i=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1,anchorX:d="left",root:f})=>{const[p,m]=oy(u),x=R.useMemo(()=>i4(t),[t]),v=u&&!p?[]:x.map(Zl),S=R.useRef(!0),b=R.useRef(x),E=Nh(()=>new Map),[O,j]=R.useState(x),[T,C]=R.useState(x);g5(()=>{S.current=!1,b.current=x;for(let P=0;P<T.length;P++){const k=Zl(T[P]);v.includes(k)?E.delete(k):E.get(k)!==!0&&E.set(k,!1)}},[T,v.length,v.join("-")]);const D=[];if(x!==O){let P=[...x];for(let k=0;k<T.length;k++){const _=T[k],$=Zl(_);v.includes($)||(P.splice(k,0,_),D.push(_))}return l==="wait"&&D.length&&(P=D),C(i4(P)),j(x),null}const{forceRender:L}=R.useContext(Ph);return y.jsx(y.Fragment,{children:T.map(P=>{const k=Zl(P),_=u&&!p?!1:x===T||v.includes(k),$=()=>{if(E.has(k))E.set(k,!0);else return;let Y=!0;E.forEach(F=>{F||(Y=!1)}),Y&&(L==null||L(),C(b.current),u&&(m==null||m()),r&&r())};return y.jsx(fE,{isPresent:_,initial:!S.current||i?void 0:!1,custom:e,presenceAffectsLayout:o,mode:l,root:f,onExitComplete:_?void 0:$,anchorX:d,children:P},k)})})},cy=R.createContext({strict:!1}),a4={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Lr={};for(const t in a4)Lr[t]={isEnabled:e=>a4[t].some(i=>!!e[i])};function pE(t){for(const e in t)Lr[e]={...Lr[e],...t[e]}}const mE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function jc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||mE.has(t)}let uy=t=>!jc(t);function gE(t){typeof t=="function"&&(uy=e=>e.startsWith("on")?!jc(e):t(e))}try{gE(require("@emotion/is-prop-valid").default)}catch{}function xE(t,e,i){const r={};for(const o in t)o==="values"&&typeof t.values=="object"||(uy(o)||i===!0&&jc(o)||!e&&!jc(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}const tu=R.createContext({});function nu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function fo(t){return typeof t=="string"||Array.isArray(t)}const lp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cp=["initial",...lp];function iu(t){return nu(t.animate)||cp.some(e=>fo(t[e]))}function dy(t){return!!(iu(t)||t.variants)}function yE(t,e){if(iu(t)){const{initial:i,animate:r}=t;return{initial:i===!1||fo(i)?i:void 0,animate:fo(r)?r:void 0}}return t.inherit!==!1?e:{}}function vE(t){const{initial:e,animate:i}=yE(t,R.useContext(tu));return R.useMemo(()=>({initial:e,animate:i}),[r4(e),r4(i)])}function r4(t){return Array.isArray(t)?t.join(" "):t}const ho={};function wE(t){for(const e in t)ho[e]=t[e],Fh(e)&&(ho[e].isCSSVariable=!0)}function fy(t,{layout:e,layoutId:i}){return Br.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!ho[t]||t==="opacity")}const bE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},SE=Nr.length;function CE(t,e,i){let r="",o=!0;for(let l=0;l<SE;l++){const u=Nr[l],d=t[u];if(d===void 0)continue;let f=!0;if(typeof d=="number"?f=d===(u.startsWith("scale")?1:0):f=parseFloat(d)===0,!f||i){const p=ty(d,ap[u]);if(!f){o=!1;const m=bE[u]||u;r+=`${m}(${p}) `}i&&(e[u]=p)}}return r=r.trim(),i?r=i(e,o?"":r):o&&(r="none"),r}function up(t,e,i){const{style:r,vars:o,transformOrigin:l}=t;let u=!1,d=!1;for(const f in e){const p=e[f];if(Br.has(f)){u=!0;continue}else if(Fh(f)){o[f]=p;continue}else{const m=ty(p,ap[f]);f.startsWith("origin")?(d=!0,l[f]=m):r[f]=m}}if(e.transform||(u||i?r.transform=CE(e,t.transform,i):r.transform&&(r.transform="none")),d){const{originX:f="50%",originY:p="50%",originZ:m=0}=l;r.transformOrigin=`${f} ${p} ${m}`}}const dp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function hy(t,e,i){for(const r in e)!Ct(e[r])&&!fy(r,i)&&(t[r]=e[r])}function TE({transformTemplate:t},e){return R.useMemo(()=>{const i=dp();return up(i,e,t),Object.assign({},i.vars,i.style)},[e])}function EE(t,e){const i=t.style||{},r={};return hy(r,i,t),Object.assign(r,TE(t,e)),r}function ME(t,e){const i={},r=EE(t,e);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const AE={offset:"stroke-dashoffset",array:"stroke-dasharray"},jE={offset:"strokeDashoffset",array:"strokeDasharray"};function LE(t,e,i=1,r=0,o=!0){t.pathLength=1;const l=o?AE:jE;t[l.offset]=pe.transform(-r);const u=pe.transform(e),d=pe.transform(i);t[l.array]=`${u} ${d}`}function py(t,{attrX:e,attrY:i,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...d},f,p,m){if(up(t,d,p),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:v}=t;x.transform&&(v.transform=x.transform,delete x.transform),(v.transform||x.transformOrigin)&&(v.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),v.transform&&(v.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete x.transformBox),e!==void 0&&(x.x=e),i!==void 0&&(x.y=i),r!==void 0&&(x.scale=r),o!==void 0&&LE(x,o,l,u,!1)}const my=()=>({...dp(),attrs:{}}),gy=t=>typeof t=="string"&&t.toLowerCase()==="svg";function OE(t,e,i,r){const o=R.useMemo(()=>{const l=my();return py(l,e,gy(r),t.transformTemplate,t.style),{...l.attrs,style:{...l.style}}},[e]);if(t.style){const l={};hy(l,t.style,t),o.style={...l,...o.style}}return o}const RE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function fp(t){return typeof t!="string"||t.includes("-")?!1:!!(RE.indexOf(t)>-1||/[A-Z]/u.test(t))}function DE(t,e,i,{latestValues:r},o,l=!1){const d=(fp(t)?OE:ME)(e,r,o,t),f=xE(e,typeof t=="string",l),p=t!==R.Fragment?{...f,...d,ref:i}:{},{children:m}=e,x=R.useMemo(()=>Ct(m)?m.get():m,[m]);return R.createElement(t,{...p,children:x})}function s4(t){const e=[{},{}];return t==null||t.values.forEach((i,r)=>{e[0][r]=i.get(),e[1][r]=i.getVelocity()}),e}function hp(t,e,i,r){if(typeof e=="function"){const[o,l]=s4(r);e=e(i!==void 0?i:t.custom,o,l)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[o,l]=s4(r);e=e(i!==void 0?i:t.custom,o,l)}return e}function xc(t){return Ct(t)?t.get():t}function HE({scrapeMotionValuesFromProps:t,createRenderState:e},i,r,o){return{latestValues:VE(i,r,o,t),renderState:e()}}function VE(t,e,i,r){const o={},l=r(t,{});for(const v in l)o[v]=xc(l[v]);let{initial:u,animate:d}=t;const f=iu(t),p=dy(t);e&&p&&!f&&t.inherit!==!1&&(u===void 0&&(u=e.initial),d===void 0&&(d=e.animate));let m=i?i.initial===!1:!1;m=m||u===!1;const x=m?d:u;if(x&&typeof x!="boolean"&&!nu(x)){const v=Array.isArray(x)?x:[x];for(let S=0;S<v.length;S++){const b=hp(t,v[S]);if(b){const{transitionEnd:E,transition:O,...j}=b;for(const T in j){let C=j[T];if(Array.isArray(C)){const D=m?C.length-1:0;C=C[D]}C!==null&&(o[T]=C)}for(const T in E)o[T]=E[T]}}}return o}const xy=t=>(e,i)=>{const r=R.useContext(tu),o=R.useContext(eu),l=()=>HE(t,e,r,o);return i?l():Nh(l)};function pp(t,e,i){var l;const{style:r}=t,o={};for(const u in r)(Ct(r[u])||e.style&&Ct(e.style[u])||fy(u,t)||((l=i==null?void 0:i.getValue(u))==null?void 0:l.liveStyle)!==void 0)&&(o[u]=r[u]);return o}const kE=xy({scrapeMotionValuesFromProps:pp,createRenderState:dp});function yy(t,e,i){const r=pp(t,e,i);for(const o in t)if(Ct(t[o])||Ct(e[o])){const l=Nr.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=t[o]}return r}const zE=xy({scrapeMotionValuesFromProps:yy,createRenderState:my}),PE=Symbol.for("motionComponentSymbol");function mr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function NE(t,e,i){return R.useCallback(r=>{r&&t.onMount&&t.onMount(r),e&&(r?e.mount(r):e.unmount()),i&&(typeof i=="function"?i(r):mr(i)&&(i.current=r))},[e])}const mp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),BE="framerAppearId",vy="data-"+mp(BE),wy=R.createContext({});function $E(t,e,i,r,o){var E,O;const{visualElement:l}=R.useContext(tu),u=R.useContext(cy),d=R.useContext(eu),f=R.useContext(op).reducedMotion,p=R.useRef(null);r=r||u.renderer,!p.current&&r&&(p.current=r(t,{visualState:e,parent:l,props:i,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:f}));const m=p.current,x=R.useContext(wy);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&_E(p.current,i,o,x);const v=R.useRef(!1);R.useInsertionEffect(()=>{m&&v.current&&m.update(i,d)});const S=i[vy],b=R.useRef(!!S&&!((E=window.MotionHandoffIsComplete)!=null&&E.call(window,S))&&((O=window.MotionHasOptimisedAnimation)==null?void 0:O.call(window,S)));return g5(()=>{m&&(v.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),b.current&&m.animationState&&m.animationState.animateChanges())}),R.useEffect(()=>{m&&(!b.current&&m.animationState&&m.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var j;(j=window.MotionHandoffMarkAsComplete)==null||j.call(window,S)}),b.current=!1),m.enteringChildren=void 0)}),m}function _E(t,e,i,r){const{layoutId:o,layout:l,drag:u,dragConstraints:d,layoutScroll:f,layoutRoot:p,layoutCrossfade:m}=e;t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:by(t.parent)),t.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||d&&mr(d),visualElement:t,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:m,layoutScroll:f,layoutRoot:p})}function by(t){if(t)return t.options.allowProjection!==!1?t.projection:by(t.parent)}function qf(t,{forwardMotionProps:e=!1}={},i,r){i&&pE(i);const o=fp(t)?zE:kE;function l(d,f){let p;const m={...R.useContext(op),...d,layoutId:UE(d)},{isStatic:x}=m,v=vE(d),S=o(d,x);if(!x&&Bh){GE();const b=IE(m);p=b.MeasureLayout,v.visualElement=$E(t,S,m,r,b.ProjectionNode)}return y.jsxs(tu.Provider,{value:v,children:[p&&v.visualElement?y.jsx(p,{visualElement:v.visualElement,...m}):null,DE(t,d,NE(S,v.visualElement,f),S,x,e)]})}l.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const u=R.forwardRef(l);return u[PE]=t,u}function UE({layoutId:t}){const e=R.useContext(Ph).id;return e&&t!==void 0?e+"-"+t:t}function GE(t,e){R.useContext(cy).strict}function IE(t){const{drag:e,layout:i}=Lr;if(!e&&!i)return{};const r={...e,...i};return{MeasureLayout:e!=null&&e.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function qE(t,e){if(typeof Proxy>"u")return qf;const i=new Map,r=(l,u)=>qf(l,u,t,e),o=(l,u)=>r(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?r:(i.has(u)||i.set(u,qf(u,void 0,t,e)),i.get(u))})}function Sy({top:t,left:e,right:i,bottom:r}){return{x:{min:e,max:i},y:{min:t,max:r}}}function YE({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function FE(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:r.y,right:r.x}}function Yf(t){return t===void 0||t===1}function J0({scale:t,scaleX:e,scaleY:i}){return!Yf(t)||!Yf(e)||!Yf(i)}function fa(t){return J0(t)||Cy(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Cy(t){return o4(t.x)||o4(t.y)}function o4(t){return t&&t!=="0%"}function Lc(t,e,i){const r=t-i,o=e*r;return i+o}function l4(t,e,i,r,o){return o!==void 0&&(t=Lc(t,o,r)),Lc(t,i,r)+e}function eh(t,e=0,i=1,r,o){t.min=l4(t.min,e,i,r,o),t.max=l4(t.max,e,i,r,o)}function Ty(t,{x:e,y:i}){eh(t.x,e.translate,e.scale,e.originPoint),eh(t.y,i.translate,i.scale,i.originPoint)}const c4=.999999999999,u4=1.0000000000001;function ZE(t,e,i,r=!1){const o=i.length;if(!o)return;e.x=e.y=1;let l,u;for(let d=0;d<o;d++){l=i[d],u=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&xr(t,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,Ty(t,u)),r&&fa(l.latestValues)&&xr(t,l.latestValues))}e.x<u4&&e.x>c4&&(e.x=1),e.y<u4&&e.y>c4&&(e.y=1)}function gr(t,e){t.min=t.min+e,t.max=t.max+e}function d4(t,e,i,r,o=.5){const l=Ye(t.min,t.max,o);eh(t,e,i,l,r)}function xr(t,e){d4(t.x,e.x,e.scaleX,e.scale,e.originX),d4(t.y,e.y,e.scaleY,e.scale,e.originY)}function Ey(t,e){return Sy(FE(t.getBoundingClientRect(),e))}function XE(t,e,i){const r=Ey(t,i),{scroll:o}=e;return o&&(gr(r.x,o.offset.x),gr(r.y,o.offset.y)),r}const f4=()=>({translate:0,scale:1,origin:0,originPoint:0}),yr=()=>({x:f4(),y:f4()}),h4=()=>({min:0,max:0}),Qe=()=>({x:h4(),y:h4()}),th={current:null},My={current:!1};function KE(){if(My.current=!0,!!Bh)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>th.current=t.matches;t.addEventListener("change",e),e()}else th.current=!1}const WE=new WeakMap;function QE(t,e,i){for(const r in e){const o=e[r],l=i[r];if(Ct(o))t.addValue(r,o);else if(Ct(l))t.addValue(r,jr(o,{owner:t}));else if(l!==o)if(t.hasValue(r)){const u=t.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=t.getStaticValue(r);t.addValue(r,jr(u!==void 0?u:o,{owner:t}))}}for(const r in i)e[r]===void 0&&t.removeValue(r);return e}const p4=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class JE{scrapeMotionValuesFromProps(e,i,r){return{}}constructor({parent:e,props:i,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=np,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=kt.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,Ge.render(this.render,!1,!0))};const{latestValues:f,renderState:p}=u;this.latestValues=f,this.baseTarget={...f},this.initialValues=i.initial?{...f}:{},this.renderState=p,this.parent=e,this.props=i,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=iu(i),this.isVariantNode=dy(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:m,...x}=this.scrapeMotionValuesFromProps(i,{},this);for(const v in x){const S=x[v];f[v]!==void 0&&Ct(S)&&S.set(f[v])}}mount(e){var i;this.current=e,WE.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),My.current||KE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:th.current,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),$i(this.notifyUpdate),$i(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,i){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Br.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=i.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Ge.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,i)),this.valueSubscriptions.set(e,()=>{o(),l&&l(),i.owner&&i.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Lr){const i=Lr[e];if(!i)continue;const{isEnabled:r,Feature:o}=i;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let r=0;r<p4.length;r++){const o=p4[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=QE(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){const r=this.values.get(e);i!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,i),this.values.set(e,i),this.latestValues[e]=i.get())}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&i!==void 0&&(r=jr(i===null?void 0:i,{owner:this}),this.addValue(e,r)),r}readValue(e,i){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(x5(r)||v5(r))?r=parseFloat(r):!cE(r)&&_i.test(i)&&(r=ey(e,i)),this.setBaseTarget(e,Ct(r)?r.get():r)),Ct(r)?r.get():r}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){var l;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const u=hp(this.props,i,(l=this.presenceContext)==null?void 0:l.custom);u&&(r=u[e])}if(i&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Ct(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new Ih),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}scheduleRenderMicrotask(){rp.render(this.render)}}class Ay extends JE{constructor(){super(...arguments),this.KeyframeResolver=WT}sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){return e.style?e.style[i]:void 0}removeValueFromRenderState(e,{vars:i,style:r}){delete i[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ct(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function jy(t,{style:e,vars:i},r,o){const l=t.style;let u;for(u in e)l[u]=e[u];o==null||o.applyProjectionStyles(l,r);for(u in i)l.setProperty(u,i[u])}function eM(t){return window.getComputedStyle(t)}class tM extends Ay{constructor(){super(...arguments),this.type="html",this.renderInstance=jy}readValueFromInstance(e,i){var r;if(Br.has(i))return(r=this.projection)!=null&&r.isProjecting?Y0(i):gT(e,i);{const o=eM(e),l=(Fh(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(e,{transformPagePoint:i}){return Ey(e,i)}build(e,i,r){up(e,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,i,r){return pp(e,i,r)}}const Ly=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function nM(t,e,i,r){jy(t,e,void 0,r);for(const o in e.attrs)t.setAttribute(Ly.has(o)?o:mp(o),e.attrs[o])}class iM extends Ay{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qe}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if(Br.has(i)){const r=J5(i);return r&&r.default||0}return i=Ly.has(i)?i:mp(i),e.getAttribute(i)}scrapeMotionValuesFromProps(e,i,r){return yy(e,i,r)}build(e,i,r){py(e,i,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,i,r,o){nM(e,i,r,o)}mount(e){this.isSVGTag=gy(e.tagName),super.mount(e)}}const aM=(t,e)=>fp(t)?new iM(e):new tM(e,{allowProjection:t!==R.Fragment});function wr(t,e,i){const r=t.getProps();return hp(r,e,i!==void 0?i:r.custom,t)}const nh=t=>Array.isArray(t);function rM(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,jr(i))}function sM(t){return nh(t)?t[t.length-1]||0:t}function oM(t,e){const i=wr(t,e);let{transitionEnd:r={},transition:o={},...l}=i||{};l={...l,...r};for(const u in l){const d=sM(l[u]);rM(t,u,d)}}function lM(t){return!!(Ct(t)&&t.add)}function ih(t,e){const i=t.getValue("willChange");if(lM(i))return i.add(e);if(!i&&ci.WillChange){const r=new ci.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function Oy(t){return t.props[vy]}const cM=t=>t!==null;function uM(t,{repeat:e,repeatType:i="loop"},r){const o=t.filter(cM),l=e&&i!=="loop"&&e%2===1?0:o.length-1;return o[l]}const dM={type:"spring",stiffness:500,damping:25,restSpeed:10},fM=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),hM={type:"keyframes",duration:.8},pM={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},mM=(t,{keyframes:e})=>e.length>2?hM:Br.has(t)?t.startsWith("scale")?fM(e[1]):dM:pM;function gM({when:t,delay:e,delayChildren:i,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:d,from:f,elapsed:p,...m}){return!!Object.keys(m).length}const gp=(t,e,i,r={},o,l)=>u=>{const d=ip(r,t)||{},f=d.delay||r.delay||0;let{elapsed:p=0}=r;p=p-zn(f);const m={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...d,delay:-p,onUpdate:v=>{e.set(v),d.onUpdate&&d.onUpdate(v)},onComplete:()=>{u(),d.onComplete&&d.onComplete()},name:t,motionValue:e,element:l?void 0:o};gM(d)||Object.assign(m,mM(t,m)),m.duration&&(m.duration=zn(m.duration)),m.repeatDelay&&(m.repeatDelay=zn(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let x=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(W0(m),m.delay===0&&(x=!0)),(ci.instantAnimations||ci.skipAnimations)&&(x=!0,W0(m),m.delay=0),m.allowFlatten=!d.type&&!d.ease,x&&!l&&e.get()!==void 0){const v=uM(m.keyframes,d);if(v!==void 0){Ge.update(()=>{m.onUpdate(v),m.onComplete()});return}}return d.isSync?new tp(m):new BT(m)};function xM({protectedKeys:t,needsAnimating:e},i){const r=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,r}function Ry(t,e,{delay:i=0,transitionOverride:r,type:o}={}){let{transition:l=t.getDefaultTransition(),transitionEnd:u,...d}=e;r&&(l=r);const f=[],p=o&&t.animationState&&t.animationState.getState()[o];for(const m in d){const x=t.getValue(m,t.latestValues[m]??null),v=d[m];if(v===void 0||p&&xM(p,m))continue;const S={delay:i,...ip(l||{},m)},b=x.get();if(b!==void 0&&!x.isAnimating&&!Array.isArray(v)&&v===b&&!S.velocity)continue;let E=!1;if(window.MotionHandoffAnimation){const j=Oy(t);if(j){const T=window.MotionHandoffAnimation(j,m,Ge);T!==null&&(S.startTime=T,E=!0)}}ih(t,m),x.start(gp(m,x,v,t.shouldReduceMotion&&K5.has(m)?{type:!1}:S,t,E));const O=x.animation;O&&f.push(O)}return u&&Promise.all(f).then(()=>{Ge.update(()=>{u&&oM(t,u)})}),f}function Dy(t,e,i,r=0,o=1){const l=Array.from(t).sort((p,m)=>p.sortNodePosition(m)).indexOf(e),u=t.size,d=(u-1)*r;return typeof i=="function"?i(l,u):o===1?l*r:d-l*r}function ah(t,e,i={}){var f;const r=wr(t,e,i.type==="exit"?(f=t.presenceContext)==null?void 0:f.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=r||{};i.transitionOverride&&(o=i.transitionOverride);const l=r?()=>Promise.all(Ry(t,r,i)):()=>Promise.resolve(),u=t.variantChildren&&t.variantChildren.size?(p=0)=>{const{delayChildren:m=0,staggerChildren:x,staggerDirection:v}=o;return yM(t,e,p,m,x,v,i)}:()=>Promise.resolve(),{when:d}=o;if(d){const[p,m]=d==="beforeChildren"?[l,u]:[u,l];return p().then(()=>m())}else return Promise.all([l(),u(i.delay)])}function yM(t,e,i=0,r=0,o=0,l=1,u){const d=[];for(const f of t.variantChildren)f.notify("AnimationStart",e),d.push(ah(f,e,{...u,delay:i+(typeof r=="function"?0:r)+Dy(t.variantChildren,f,r,o,l)}).then(()=>f.notify("AnimationComplete",e)));return Promise.all(d)}function vM(t,e,i={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>ah(t,l,i));r=Promise.all(o)}else if(typeof e=="string")r=ah(t,e,i);else{const o=typeof e=="function"?wr(t,e,i.custom):e;r=Promise.all(Ry(t,o,i))}return r.then(()=>{t.notify("AnimationComplete",e)})}function Hy(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let r=0;r<i;r++)if(e[r]!==t[r])return!1;return!0}const wM=cp.length;function Vy(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?Vy(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const e={};for(let i=0;i<wM;i++){const r=cp[i],o=t.props[r];(fo(o)||o===!1)&&(e[r]=o)}return e}const bM=[...lp].reverse(),SM=lp.length;function CM(t){return e=>Promise.all(e.map(({animation:i,options:r})=>vM(t,i,r)))}function TM(t){let e=CM(t),i=m4(),r=!0;const o=f=>(p,m)=>{var v;const x=wr(t,m,f==="exit"?(v=t.presenceContext)==null?void 0:v.custom:void 0);if(x){const{transition:S,transitionEnd:b,...E}=x;p={...p,...E,...b}}return p};function l(f){e=f(t)}function u(f){const{props:p}=t,m=Vy(t.parent)||{},x=[],v=new Set;let S={},b=1/0;for(let O=0;O<SM;O++){const j=bM[O],T=i[j],C=p[j]!==void 0?p[j]:m[j],D=fo(C),L=j===f?T.isActive:null;L===!1&&(b=O);let P=C===m[j]&&C!==p[j]&&D;if(P&&r&&t.manuallyAnimateOnMount&&(P=!1),T.protectedKeys={...S},!T.isActive&&L===null||!C&&!T.prevProp||nu(C)||typeof C=="boolean")continue;const k=EM(T.prevProp,C);let _=k||j===f&&T.isActive&&!P&&D||O>b&&D,$=!1;const Y=Array.isArray(C)?C:[C];let F=Y.reduce(o(j),{});L===!1&&(F={});const{prevResolvedValues:te={}}=T,ie={...te,...F},oe=K=>{_=!0,v.has(K)&&($=!0,v.delete(K)),T.needsAnimating[K]=!0;const W=t.getValue(K);W&&(W.liveStyle=!1)};for(const K in ie){const W=F[K],ee=te[K];if(S.hasOwnProperty(K))continue;let H=!1;nh(W)&&nh(ee)?H=!Hy(W,ee):H=W!==ee,H?W!=null?oe(K):v.add(K):W!==void 0&&v.has(K)?oe(K):T.protectedKeys[K]=!0}T.prevProp=C,T.prevResolvedValues=F,T.isActive&&(S={...S,...F}),r&&t.blockInitialAnimation&&(_=!1);const re=P&&k;_&&(!re||$)&&x.push(...Y.map(K=>{const W={type:j};if(typeof K=="string"&&r&&!re&&t.manuallyAnimateOnMount&&t.parent){const{parent:ee}=t,H=wr(ee,K);if(ee.enteringChildren&&H){const{delayChildren:Z}=H.transition||{};W.delay=Dy(ee.enteringChildren,t,Z)}}return{animation:K,options:W}}))}if(v.size){const O={};if(typeof p.initial!="boolean"){const j=wr(t,Array.isArray(p.initial)?p.initial[0]:p.initial);j&&j.transition&&(O.transition=j.transition)}v.forEach(j=>{const T=t.getBaseTarget(j),C=t.getValue(j);C&&(C.liveStyle=!0),O[j]=T??null}),x.push({animation:O})}let E=!!x.length;return r&&(p.initial===!1||p.initial===p.animate)&&!t.manuallyAnimateOnMount&&(E=!1),r=!1,E?e(x):Promise.resolve()}function d(f,p){var x;if(i[f].isActive===p)return Promise.resolve();(x=t.variantChildren)==null||x.forEach(v=>{var S;return(S=v.animationState)==null?void 0:S.setActive(f,p)}),i[f].isActive=p;const m=u(f);for(const v in i)i[v].protectedKeys={};return m}return{animateChanges:u,setActive:d,setAnimateFunction:l,getState:()=>i,reset:()=>{i=m4(),r=!0}}}function EM(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Hy(e,t):!1}function ua(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function m4(){return{animate:ua(!0),whileInView:ua(),whileHover:ua(),whileTap:ua(),whileDrag:ua(),whileFocus:ua(),exit:ua()}}class Ii{constructor(e){this.isMounted=!1,this.node=e}update(){}}class MM extends Ii{constructor(e){super(e),e.animationState||(e.animationState=TM(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();nu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let AM=0;class jM extends Ii{constructor(){super(...arguments),this.id=AM++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);i&&!e&&o.then(()=>{i(this.id)})}mount(){const{register:e,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const LM={animation:{Feature:MM},exit:{Feature:jM}};function po(t,e,i,r={passive:!0}){return t.addEventListener(e,i,r),()=>t.removeEventListener(e,i)}function Eo(t){return{point:{x:t.pageX,y:t.pageY}}}const OM=t=>e=>sp(e)&&t(e,Eo(e));function Ws(t,e,i,r){return po(t,e,OM(i),r)}const ky=1e-4,RM=1-ky,DM=1+ky,zy=.01,HM=0-zy,VM=0+zy;function jt(t){return t.max-t.min}function kM(t,e,i){return Math.abs(t-e)<=i}function g4(t,e,i,r=.5){t.origin=r,t.originPoint=Ye(e.min,e.max,t.origin),t.scale=jt(i)/jt(e),t.translate=Ye(i.min,i.max,t.origin)-t.originPoint,(t.scale>=RM&&t.scale<=DM||isNaN(t.scale))&&(t.scale=1),(t.translate>=HM&&t.translate<=VM||isNaN(t.translate))&&(t.translate=0)}function Qs(t,e,i,r){g4(t.x,e.x,i.x,r?r.originX:void 0),g4(t.y,e.y,i.y,r?r.originY:void 0)}function x4(t,e,i){t.min=i.min+e.min,t.max=t.min+jt(e)}function zM(t,e,i){x4(t.x,e.x,i.x),x4(t.y,e.y,i.y)}function y4(t,e,i){t.min=e.min-i.min,t.max=t.min+jt(e)}function Js(t,e,i){y4(t.x,e.x,i.x),y4(t.y,e.y,i.y)}function cn(t){return[t("x"),t("y")]}const Py=({current:t})=>t?t.ownerDocument.defaultView:null,v4=(t,e)=>Math.abs(t-e);function PM(t,e){const i=v4(t.x,e.x),r=v4(t.y,e.y);return Math.sqrt(i**2+r**2)}class Ny{constructor(e,i,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Zf(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,b=PM(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!b)return;const{point:E}=v,{timestamp:O}=gt;this.history.push({...E,timestamp:O});const{onStart:j,onMove:T}=this.handlers;S||(j&&j(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),T&&T(this.lastMoveEvent,v)},this.handlePointerMove=(v,S)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Ff(S,this.transformPagePoint),Ge.update(this.updatePoint,!0)},this.handlePointerUp=(v,S)=>{this.end();const{onEnd:b,onSessionEnd:E,resumeAnimation:O}=this.handlers;if(this.dragSnapToOrigin&&O&&O(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=Zf(v.type==="pointercancel"?this.lastMoveEventInfo:Ff(S,this.transformPagePoint),this.history);this.startEvent&&b&&b(v,j),E&&E(v,j)},!sp(e))return;this.dragSnapToOrigin=l,this.handlers=i,this.transformPagePoint=r,this.distanceThreshold=u,this.contextWindow=o||window;const d=Eo(e),f=Ff(d,this.transformPagePoint),{point:p}=f,{timestamp:m}=gt;this.history=[{...p,timestamp:m}];const{onSessionStart:x}=i;x&&x(e,Zf(f,this.history)),this.removeListeners=So(Ws(this.contextWindow,"pointermove",this.handlePointerMove),Ws(this.contextWindow,"pointerup",this.handlePointerUp),Ws(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),$i(this.updatePoint)}}function Ff(t,e){return e?{point:e(t.point)}:t}function w4(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Zf({point:t},e){return{point:t,delta:w4(t,By(e)),offset:w4(t,NM(e)),velocity:BM(e,.1)}}function NM(t){return t[0]}function By(t){return t[t.length-1]}function BM(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,r=null;const o=By(t);for(;i>=0&&(r=t[i],!(o.timestamp-r.timestamp>zn(e)));)i--;if(!r)return{x:0,y:0};const l=Pn(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function $M(t,{min:e,max:i},r){return e!==void 0&&t<e?t=r?Ye(e,t,r.min):Math.max(t,e):i!==void 0&&t>i&&(t=r?Ye(i,t,r.max):Math.min(t,i)),t}function b4(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function _M(t,{top:e,left:i,bottom:r,right:o}){return{x:b4(t.x,i,o),y:b4(t.y,e,r)}}function S4(t,e){let i=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,r]=[r,i]),{min:i,max:r}}function UM(t,e){return{x:S4(t.x,e.x),y:S4(t.y,e.y)}}function GM(t,e){let i=.5;const r=jt(t),o=jt(e);return o>r?i=lo(e.min,e.max-r,t.min):r>o&&(i=lo(t.min,t.max-o,e.min)),li(0,1,i)}function IM(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const rh=.35;function qM(t=rh){return t===!1?t=0:t===!0&&(t=rh),{x:C4(t,"left","right"),y:C4(t,"top","bottom")}}function C4(t,e,i){return{min:T4(t,e),max:T4(t,i)}}function T4(t,e){return typeof t=="number"?t:t[e]||0}const YM=new WeakMap;class FM{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:i=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=x=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Eo(x).point)},u=(x,v)=>{const{drag:S,dragPropagation:b,onDragStart:E}=this.getProps();if(S&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=tE(S),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),cn(j=>{let T=this.getAxisMotionValue(j).get()||0;if(Nn.test(T)){const{projection:C}=this.visualElement;if(C&&C.layout){const D=C.layout.layoutBox[j];D&&(T=jt(D)*(parseFloat(T)/100))}}this.originPoint[j]=T}),E&&Ge.postRender(()=>E(x,v)),ih(this.visualElement,"transform");const{animationState:O}=this.visualElement;O&&O.setActive("whileDrag",!0)},d=(x,v)=>{this.latestPointerEvent=x,this.latestPanInfo=v;const{dragPropagation:S,dragDirectionLock:b,onDirectionLock:E,onDrag:O}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:j}=v;if(b&&this.currentDirection===null){this.currentDirection=ZM(j),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",v.point,j),this.updateAxis("y",v.point,j),this.visualElement.render(),O&&O(x,v)},f=(x,v)=>{this.latestPointerEvent=x,this.latestPanInfo=v,this.stop(x,v),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>cn(x=>{var v;return this.getAnimationState(x)==="paused"&&((v=this.getAxisMotionValue(x).animation)==null?void 0:v.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new Ny(e,{onSessionStart:l,onStart:u,onMove:d,onSessionEnd:f,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:Py(this.visualElement)})}stop(e,i){const r=e||this.latestPointerEvent,o=i||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:d}=this.getProps();d&&Ge.postRender(()=>d(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(e,i,r){const{drag:o}=this.getProps();if(!r||!Xl(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=$M(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:e,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;e&&mr(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=_M(r.layoutBox,e):this.constraints=!1,this.elastic=qM(i),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&cn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=IM(r.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!mr(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=XE(r,o.root,this.visualElement.getTransformPagePoint());let u=UM(o.layout.layoutBox,l);if(i){const d=i(YE(u));this.hasMutatedConstraints=!!d,d&&(u=Sy(d))}return u}startAnimation(e){const{drag:i,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:d}=this.getProps(),f=this.constraints||{},p=cn(m=>{if(!Xl(m,i,this.currentDirection))return;let x=f&&f[m]||{};u&&(x={min:0,max:0});const v=o?200:1e6,S=o?40:1e7,b={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...l,...x};return this.startAxisValueAnimation(m,b)});return Promise.all(p).then(d)}startAxisValueAnimation(e,i){const r=this.getAxisMotionValue(e);return ih(this.visualElement,e),r.start(gp(e,r,0,i,this.visualElement,!1))}stopAnimation(){cn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){cn(e=>{var i;return(i=this.getAxisMotionValue(e).animation)==null?void 0:i.pause()})}getAnimationState(e){var i;return(i=this.getAxisMotionValue(e).animation)==null?void 0:i.state}getAxisMotionValue(e){const i=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[i];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){cn(i=>{const{drag:r}=this.getProps();if(!Xl(i,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(i);if(o&&o.layout){const{min:u,max:d}=o.layout.layoutBox[i];l.set(e[i]-Ye(u,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:r}=this.visualElement;if(!mr(i)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};cn(u=>{const d=this.getAxisMotionValue(u);if(d&&this.constraints!==!1){const f=d.get();o[u]=GM({min:f,max:f},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),cn(u=>{if(!Xl(u,e,null))return;const d=this.getAxisMotionValue(u),{min:f,max:p}=this.constraints[u];d.set(Ye(f,p,o[u]))})}addListeners(){if(!this.visualElement.current)return;YM.set(this.visualElement,this);const e=this.visualElement.current,i=Ws(e,"pointerdown",f=>{const{drag:p,dragListener:m=!0}=this.getProps();p&&m&&this.start(f)}),r=()=>{const{dragConstraints:f}=this.getProps();mr(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ge.read(r);const u=po(window,"resize",()=>this.scalePositionWithinConstraints()),d=o.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p})=>{this.isDragging&&p&&(cn(m=>{const x=this.getAxisMotionValue(m);x&&(this.originPoint[m]+=f[m].translate,x.set(x.get()+f[m].translate))}),this.visualElement.render())});return()=>{u(),i(),l(),d&&d()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=rh,dragMomentum:d=!0}=e;return{...e,drag:i,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:d}}}function Xl(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function ZM(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class XM extends Ii{constructor(e){super(e),this.removeGroupControls=un,this.removeListeners=un,this.controls=new FM(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||un}unmount(){this.removeGroupControls(),this.removeListeners()}}const E4=t=>(e,i)=>{t&&Ge.postRender(()=>t(e,i))};class KM extends Ii{constructor(){super(...arguments),this.removePointerDownListener=un}onPointerDown(e){this.session=new Ny(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Py(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:E4(e),onStart:E4(i),onMove:r,onEnd:(l,u)=>{delete this.session,o&&Ge.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Ws(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const yc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function M4(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Gs={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(pe.test(t))t=parseFloat(t);else return t;const i=M4(t,e.target.x),r=M4(t,e.target.y);return`${i}% ${r}%`}},WM={correct:(t,{treeScale:e,projectionDelta:i})=>{const r=t,o=_i.parse(t);if(o.length>5)return r;const l=_i.createTransformer(t),u=typeof o[0]!="number"?1:0,d=i.x.scale*e.x,f=i.y.scale*e.y;o[0+u]/=d,o[1+u]/=f;const p=Ye(d,f,.5);return typeof o[2+u]=="number"&&(o[2+u]/=p),typeof o[3+u]=="number"&&(o[3+u]/=p),l(o)}};let Xf=!1;class QM extends R.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;wE(JM),l&&(i.group&&i.group.add(l),r&&r.register&&o&&r.register(l),Xf&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),yc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:r,drag:o,isPresent:l}=this.props,{projection:u}=r;return u&&(u.isPresent=l,Xf=!0,o||e.layoutDependency!==i||i===void 0||e.isPresent!==l?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Ge.postRender(()=>{const d=u.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),rp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:r}=this.props,{projection:o}=e;Xf=!0,o&&(o.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function $y(t){const[e,i]=oy(),r=R.useContext(Ph);return y.jsx(QM,{...t,layoutGroup:r,switchLayoutGroup:R.useContext(wy),isPresent:e,safeToRemove:i})}const JM={borderRadius:{...Gs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Gs,borderTopRightRadius:Gs,borderBottomLeftRadius:Gs,borderBottomRightRadius:Gs,boxShadow:WM};function eA(t,e,i){const r=Ct(t)?t:jr(t);return r.start(gp("",r,e,i)),r.animation}const tA=(t,e)=>t.depth-e.depth;class nA{constructor(){this.children=[],this.isDirty=!1}add(e){$h(this.children,e),this.isDirty=!0}remove(e){_h(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(tA),this.isDirty=!1,this.children.forEach(e)}}function iA(t,e){const i=kt.now(),r=({timestamp:o})=>{const l=o-i;l>=e&&($i(r),t(l-e))};return Ge.setup(r,!0),()=>$i(r)}const _y=["TopLeft","TopRight","BottomLeft","BottomRight"],aA=_y.length,A4=t=>typeof t=="string"?parseFloat(t):t,j4=t=>typeof t=="number"||pe.test(t);function rA(t,e,i,r,o,l){o?(t.opacity=Ye(0,i.opacity??1,sA(r)),t.opacityExit=Ye(e.opacity??1,0,oA(r))):l&&(t.opacity=Ye(e.opacity??1,i.opacity??1,r));for(let u=0;u<aA;u++){const d=`border${_y[u]}Radius`;let f=L4(e,d),p=L4(i,d);if(f===void 0&&p===void 0)continue;f||(f=0),p||(p=0),f===0||p===0||j4(f)===j4(p)?(t[d]=Math.max(Ye(A4(f),A4(p),r),0),(Nn.test(p)||Nn.test(f))&&(t[d]+="%")):t[d]=p}(e.rotate||i.rotate)&&(t.rotate=Ye(e.rotate||0,i.rotate||0,r))}function L4(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const sA=Uy(0,.5,A5),oA=Uy(.5,.95,un);function Uy(t,e,i){return r=>r<t?0:r>e?1:i(lo(t,e,r))}function O4(t,e){t.min=e.min,t.max=e.max}function ln(t,e){O4(t.x,e.x),O4(t.y,e.y)}function R4(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function D4(t,e,i,r,o){return t-=e,t=Lc(t,1/i,r),o!==void 0&&(t=Lc(t,1/o,r)),t}function lA(t,e=0,i=1,r=.5,o,l=t,u=t){if(Nn.test(e)&&(e=parseFloat(e),e=Ye(u.min,u.max,e/100)-u.min),typeof e!="number")return;let d=Ye(l.min,l.max,r);t===l&&(d-=e),t.min=D4(t.min,e,i,d,o),t.max=D4(t.max,e,i,d,o)}function H4(t,e,[i,r,o],l,u){lA(t,e[i],e[r],e[o],e.scale,l,u)}const cA=["x","scaleX","originX"],uA=["y","scaleY","originY"];function V4(t,e,i,r){H4(t.x,e,cA,i?i.x:void 0,r?r.x:void 0),H4(t.y,e,uA,i?i.y:void 0,r?r.y:void 0)}function k4(t){return t.translate===0&&t.scale===1}function Gy(t){return k4(t.x)&&k4(t.y)}function z4(t,e){return t.min===e.min&&t.max===e.max}function dA(t,e){return z4(t.x,e.x)&&z4(t.y,e.y)}function P4(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Iy(t,e){return P4(t.x,e.x)&&P4(t.y,e.y)}function N4(t){return jt(t.x)/jt(t.y)}function B4(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class fA{constructor(){this.members=[]}add(e){$h(this.members,e),e.scheduleRender()}remove(e){if(_h(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){const i=this.members.findIndex(o=>e===o);if(i===0)return!1;let r;for(let o=i;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,i){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,i&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:i,resumingFrom:r}=e;i.onExitComplete&&i.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function hA(t,e,i){let r="";const o=t.x.translate/e.x,l=t.y.translate/e.y,u=(i==null?void 0:i.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:p,rotate:m,rotateX:x,rotateY:v,skewX:S,skewY:b}=i;p&&(r=`perspective(${p}px) ${r}`),m&&(r+=`rotate(${m}deg) `),x&&(r+=`rotateX(${x}deg) `),v&&(r+=`rotateY(${v}deg) `),S&&(r+=`skewX(${S}deg) `),b&&(r+=`skewY(${b}deg) `)}const d=t.x.scale*e.x,f=t.y.scale*e.y;return(d!==1||f!==1)&&(r+=`scale(${d}, ${f})`),r||"none"}const Kf=["","X","Y","Z"],pA=1e3;let mA=0;function Wf(t,e,i,r){const{latestValues:o}=e;o[t]&&(i[t]=o[t],e.setStaticValue(t,0),r&&(r[t]=0))}function qy(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const i=Oy(e);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:o,layoutId:l}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",Ge,!(o||l))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&qy(r)}function Yy({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},d=e==null?void 0:e()){this.id=mA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(yA),this.nodes.forEach(SA),this.nodes.forEach(CA),this.nodes.forEach(vA)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new nA)}addEventListener(u,d){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Ih),this.eventHandlers.get(u).add(d)}notifyListeners(u,...d){const f=this.eventHandlers.get(u);f&&f.notify(...d)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=sy(u)&&!oE(u),this.instance=u;const{layoutId:d,layout:f,visualElement:p}=this.options;if(p&&!p.current&&p.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||d)&&(this.isLayoutDirty=!0),t){let m,x=0;const v=()=>this.root.updateBlockedByResize=!1;Ge.read(()=>{x=window.innerWidth}),t(u,()=>{const S=window.innerWidth;S!==x&&(x=S,this.root.updateBlockedByResize=!0,m&&m(),m=iA(v,250),yc.hasAnimatedSinceResize&&(yc.hasAnimatedSinceResize=!1,this.nodes.forEach(U4)))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&p&&(d||f)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:x,hasRelativeLayoutChanged:v,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||p.getDefaultTransition()||jA,{onLayoutAnimationStart:E,onLayoutAnimationComplete:O}=p.getProps(),j=!this.targetLayout||!Iy(this.targetLayout,S),T=!x&&v;if(this.options.layoutRoot||this.resumeFrom||T||x&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...ip(b,"layout"),onPlay:E,onComplete:O};(p.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(m,T)}else x||U4(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),$i(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(TA),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&qy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const x=this.path[m];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:d,layout:f}=this.options;if(d===void 0&&!f)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach($4);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(_4);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(bA),this.nodes.forEach(gA),this.nodes.forEach(xA)):this.nodes.forEach(_4),this.clearAllSnapshots();const d=kt.now();gt.delta=li(0,1e3/60,d-gt.timestamp),gt.timestamp=d,gt.isProcessing=!0,Bf.update.process(gt),Bf.preRender.process(gt),Bf.render.process(gt),gt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,rp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(wA),this.sharedNodes.forEach(EA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ge.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ge.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!jt(this.snapshot.measuredBox.x)&&!jt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(d=!1),d&&this.instance){const f=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:f,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!Gy(this.projectionDelta),f=this.getTransformTemplate(),p=f?f(this.latestValues,""):void 0,m=p!==this.prevTransformTemplateValue;u&&this.instance&&(d||fa(this.latestValues)||m)&&(o(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const d=this.measurePageBox();let f=this.removeElementScroll(d);return u&&(f=this.removeTransform(f)),LA(f),{animationId:this.root.animationId,measuredBox:d,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:u}=this.options;if(!u)return Qe();const d=u.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(OA))){const{scroll:m}=this.root;m&&(gr(d.x,m.offset.x),gr(d.y,m.offset.y))}return d}removeElementScroll(u){var f;const d=Qe();if(ln(d,u),(f=this.scroll)!=null&&f.wasRoot)return d;for(let p=0;p<this.path.length;p++){const m=this.path[p],{scroll:x,options:v}=m;m!==this.root&&x&&v.layoutScroll&&(x.wasRoot&&ln(d,u),gr(d.x,x.offset.x),gr(d.y,x.offset.y))}return d}applyTransform(u,d=!1){const f=Qe();ln(f,u);for(let p=0;p<this.path.length;p++){const m=this.path[p];!d&&m.options.layoutScroll&&m.scroll&&m!==m.root&&xr(f,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),fa(m.latestValues)&&xr(f,m.latestValues)}return fa(this.latestValues)&&xr(f,this.latestValues),f}removeTransform(u){const d=Qe();ln(d,u);for(let f=0;f<this.path.length;f++){const p=this.path[f];if(!p.instance||!fa(p.latestValues))continue;J0(p.latestValues)&&p.updateSnapshot();const m=Qe(),x=p.measurePageBox();ln(m,x),V4(d,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,m)}return fa(this.latestValues)&&V4(d,this.latestValues),d}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==gt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var v;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==d;if(!(u||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:x}=this.options;if(!(!this.layout||!(m||x))){if(this.resolvedRelativeTargetAt=gt.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),Js(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),ln(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),zM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ln(this.target,this.layout.layoutBox),Ty(this.target,this.targetDelta)):ln(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),Js(this.relativeTargetOrigin,this.target,S.target),ln(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||J0(this.parent.latestValues)||Cy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var b;const u=this.getLead(),d=!!this.resumingFrom||this!==u;let f=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(f=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===gt.timestamp&&(f=!1),f)return;const{layout:p,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||m))return;ln(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,v=this.treeScale.y;ZE(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Qe());const{target:S}=u;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(R4(this.prevProjectionDelta.x,this.projectionDelta.x),R4(this.prevProjectionDelta.y,this.projectionDelta.y)),Qs(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==v||!B4(this.projectionDelta.x,this.prevProjectionDelta.x)||!B4(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var d;if((d=this.options.visualElement)==null||d.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=yr(),this.projectionDelta=yr(),this.projectionDeltaWithTransform=yr()}setAnimationOrigin(u,d=!1){const f=this.snapshot,p=f?f.latestValues:{},m={...this.latestValues},x=yr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const v=Qe(),S=f?f.source:void 0,b=this.layout?this.layout.source:void 0,E=S!==b,O=this.getStack(),j=!O||O.members.length<=1,T=!!(E&&!j&&this.options.crossfade===!0&&!this.path.some(AA));this.animationProgress=0;let C;this.mixTargetDelta=D=>{const L=D/1e3;G4(x.x,u.x,L),G4(x.y,u.y,L),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Js(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),MA(this.relativeTarget,this.relativeTargetOrigin,v,L),C&&dA(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=Qe()),ln(C,this.relativeTarget)),E&&(this.animationValues=m,rA(m,p,this.latestValues,L,T,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var d,f,p;this.notifyListeners("animationStart"),(d=this.currentAnimation)==null||d.stop(),(p=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||p.stop(),this.pendingAnimation&&($i(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ge.update(()=>{yc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=jr(0)),this.currentAnimation=eA(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),u.onUpdate&&u.onUpdate(m)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(pA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:d,target:f,layout:p,latestValues:m}=u;if(!(!d||!f||!p)){if(this!==u&&this.layout&&p&&Fy(this.options.animationType,this.layout.layoutBox,p.layoutBox)){f=this.target||Qe();const x=jt(this.layout.layoutBox.x);f.x.min=u.target.x.min,f.x.max=f.x.min+x;const v=jt(this.layout.layoutBox.y);f.y.min=u.target.y.min,f.y.max=f.y.min+v}ln(d,f),xr(d,m),Qs(this.projectionDeltaWithTransform,this.layoutCorrected,d,m)}}registerSharedNode(u,d){this.sharedNodes.has(u)||this.sharedNodes.set(u,new fA),this.sharedNodes.get(u).add(d);const p=d.options.initialPromotionConfig;d.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(d):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var d;const{layoutId:u}=this.options;return u?((d=this.getStack())==null?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:u}=this.options;return u?(d=this.getStack())==null?void 0:d.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:d,preserveFollowOpacity:f}={}){const p=this.getStack();p&&p.promote(this,f),u&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let d=!1;const{latestValues:f}=u;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(d=!0),!d)return;const p={};f.z&&Wf("z",u,p,this.animationValues);for(let m=0;m<Kf.length;m++)Wf(`rotate${Kf[m]}`,u,p,this.animationValues),Wf(`skew${Kf[m]}`,u,p,this.animationValues);u.render();for(const m in p)u.setStaticValue(m,p[m]),this.animationValues&&(this.animationValues[m]=p[m]);u.scheduleRender()}applyProjectionStyles(u,d){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=xc(d==null?void 0:d.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=xc(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!fa(this.latestValues)&&(u.transform=f?f({},""):"none",this.hasProjected=!1);return}u.visibility="";const m=p.animationValues||p.latestValues;this.applyTransformsToTarget();let x=hA(this.projectionDeltaWithTransform,this.treeScale,m);f&&(x=f(m,x)),u.transform=x;const{x:v,y:S}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${S.origin*100}% 0`,p.animationValues?u.opacity=p===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=p===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const b in ho){if(m[b]===void 0)continue;const{correct:E,applyTo:O,isCSSVariable:j}=ho[b],T=x==="none"?m[b]:E(m[b],p);if(O){const C=O.length;for(let D=0;D<C;D++)u[O[D]]=T}else j?this.options.visualElement.renderState.vars[b]=T:u[b]=T}this.options.layoutId&&(u.pointerEvents=p===this?xc(d==null?void 0:d.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var d;return(d=u.currentAnimation)==null?void 0:d.stop()}),this.root.nodes.forEach($4),this.root.sharedNodes.clear()}}}function gA(t){t.updateLayout()}function xA(t){var i;const e=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=t.layout,{animationType:l}=t.options,u=e.source!==t.layout.source;l==="size"?cn(x=>{const v=u?e.measuredBox[x]:e.layoutBox[x],S=jt(v);v.min=r[x].min,v.max=v.min+S}):Fy(l,e.layoutBox,r)&&cn(x=>{const v=u?e.measuredBox[x]:e.layoutBox[x],S=jt(r[x]);v.max=v.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+S)});const d=yr();Qs(d,r,e.layoutBox);const f=yr();u?Qs(f,t.applyTransform(o,!0),e.measuredBox):Qs(f,r,e.layoutBox);const p=!Gy(d);let m=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:v,layout:S}=x;if(v&&S){const b=Qe();Js(b,e.layoutBox,v.layoutBox);const E=Qe();Js(E,r,S.layoutBox),Iy(b,E)||(m=!0),x.options.layoutRoot&&(t.relativeTarget=E,t.relativeTargetOrigin=b,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:f,layoutDelta:d,hasLayoutChanged:p,hasRelativeLayoutChanged:m})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function yA(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function vA(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function wA(t){t.clearSnapshot()}function $4(t){t.clearMeasurements()}function _4(t){t.isLayoutDirty=!1}function bA(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function U4(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function SA(t){t.resolveTargetDelta()}function CA(t){t.calcProjection()}function TA(t){t.resetSkewAndRotation()}function EA(t){t.removeLeadSnapshot()}function G4(t,e,i){t.translate=Ye(e.translate,0,i),t.scale=Ye(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function I4(t,e,i,r){t.min=Ye(e.min,i.min,r),t.max=Ye(e.max,i.max,r)}function MA(t,e,i,r){I4(t.x,e.x,i.x,r),I4(t.y,e.y,i.y,r)}function AA(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const jA={duration:.45,ease:[.4,0,.1,1]},q4=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Y4=q4("applewebkit/")&&!q4("chrome/")?Math.round:un;function F4(t){t.min=Y4(t.min),t.max=Y4(t.max)}function LA(t){F4(t.x),F4(t.y)}function Fy(t,e,i){return t==="position"||t==="preserve-aspect"&&!kM(N4(e),N4(i),.2)}function OA(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const RA=Yy({attachResizeListener:(t,e)=>po(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Qf={current:void 0},Zy=Yy({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Qf.current){const t=new RA({});t.mount(window),t.setOptions({layoutScroll:!0}),Qf.current=t}return Qf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),DA={pan:{Feature:KM},drag:{Feature:XM,ProjectionNode:Zy,MeasureLayout:$y}};function Z4(t,e,i){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",i==="Start");const o="onHover"+i,l=r[o];l&&Ge.postRender(()=>l(e,Eo(e)))}class HA extends Ii{mount(){const{current:e}=this.node;e&&(this.unmount=nE(e,(i,r)=>(Z4(this.node,r,"Start"),o=>Z4(this.node,o,"End"))))}unmount(){}}class VA extends Ii{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=So(po(this.node.current,"focus",()=>this.onFocus()),po(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function X4(t,e,i){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",i==="Start");const o="onTap"+(i==="End"?"":i),l=r[o];l&&Ge.postRender(()=>l(e,Eo(e)))}class kA extends Ii{mount(){const{current:e}=this.node;e&&(this.unmount=sE(e,(i,r)=>(X4(this.node,r,"Start"),(o,{success:l})=>X4(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const sh=new WeakMap,Jf=new WeakMap,zA=t=>{const e=sh.get(t.target);e&&e(t)},PA=t=>{t.forEach(zA)};function NA({root:t,...e}){const i=t||document;Jf.has(i)||Jf.set(i,{});const r=Jf.get(i),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(PA,{root:t,...e})),r[o]}function BA(t,e,i){const r=NA(e);return sh.set(t,i),r.observe(t),()=>{sh.delete(t),r.unobserve(t)}}const $A={some:0,all:1};class _A extends Ii{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:i,margin:r,amount:o="some",once:l}=e,u={root:i?i.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:$A[o]},d=f=>{const{isIntersecting:p}=f;if(this.isInView===p||(this.isInView=p,l&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:m,onViewportLeave:x}=this.node.getProps(),v=p?m:x;v&&v(f)};return BA(this.node.current,u,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(UA(e,i))&&this.startObserver()}unmount(){}}function UA({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const GA={inView:{Feature:_A},tap:{Feature:kA},focus:{Feature:VA},hover:{Feature:HA}},IA={layout:{ProjectionNode:Zy,MeasureLayout:$y}},qA={...LM,...GA,...DA,...IA},vn=qE(qA,aM),YA=M.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,FA=M.button`
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
`,e0=M(vn.div)`
  width: 20px;
  height: 2px;
  background: ${({$isOpen:t,$darkMode:e})=>t||e?"black":"white"};
  border-radius: 2px;
  transition: background 0.3s ease;
`,ZA=M(vn.div)`
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
`,XA=M(Gi)`
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
`,KA=M.p`
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
`;M.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;M(vn.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 8px;
  overflow: hidden;
`;M.div`
  padding: 10px 0;
`;const WA=M.img`
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: ${({$isOpen:t})=>t?"rotate(180deg)":"rotate(0)"};
`;M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  span {
    flex-grow: 1;
  }

  ${WA} {
    padding: 8px;
    margin-right: -8px;
  }
`;const QA=M.div`
  background-color: ${({$active:t})=>t?"#3098EE":"#c3c2c2ff"};
  position: absolute;
  width: 90%;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`,JA=(t,e,i,r)=>{var l,u,d,f;const o=[i,{code:e,...r||{}}];if((u=(l=t==null?void 0:t.services)==null?void 0:l.logger)!=null&&u.forward)return t.services.logger.forward(o,"warn","react-i18next::",!0);wa(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(f=(d=t==null?void 0:t.services)==null?void 0:d.logger)!=null&&f.warn?t.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},K4={},oh=(t,e,i,r)=>{wa(i)&&K4[i]||(wa(i)&&(K4[i]=new Date),JA(t,e,i,r))},Xy=(t,e)=>()=>{if(t.isInitialized)e();else{const i=()=>{setTimeout(()=>{t.off("initialized",i)},0),e()};t.on("initialized",i)}},lh=(t,e,i)=>{t.loadNamespaces(e,Xy(t,i))},W4=(t,e,i,r)=>{if(wa(i)&&(i=[i]),t.options.preload&&t.options.preload.indexOf(e)>-1)return lh(t,i,r);i.forEach(o=>{t.options.ns.indexOf(o)<0&&t.options.ns.push(o)}),t.loadLanguages(e,Xy(t,r))},ej=(t,e,i={})=>!e.languages||!e.languages.length?(oh(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(t,{lng:i.lng,precheck:(r,o)=>{if(i.bindI18n&&i.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!o(r.isLanguageChangingTo,t))return!1}}),wa=t=>typeof t=="string",tj=t=>typeof t=="object"&&t!==null,nj=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,ij={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},aj=t=>ij[t],rj=t=>t.replace(nj,aj);let ch={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:rj};const sj=(t={})=>{ch={...ch,...t}},oj=()=>ch;let Ky;const lj=t=>{Ky=t},cj=()=>Ky,uj={type:"3rdParty",init(t){sj(t.options.react),lj(t)}},dj=R.createContext();class fj{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(i=>{this.usedNamespaces[i]||(this.usedNamespaces[i]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const hj=(t,e)=>{const i=R.useRef();return R.useEffect(()=>{i.current=t},[t,e]),i.current},Wy=(t,e,i,r)=>t.getFixedT(e,i,r),pj=(t,e,i,r)=>R.useCallback(Wy(t,e,i,r),[t,e,i,r]),xp=(t,e={})=>{var D,L,P,k;const{i18n:i}=e,{i18n:r,defaultNS:o}=R.useContext(dj)||{},l=i||r||cj();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new fj),!l){oh(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const _=(Y,F)=>wa(F)?F:tj(F)&&wa(F.defaultValue)?F.defaultValue:Array.isArray(Y)?Y[Y.length-1]:Y,$=[_,{},!1];return $.t=_,$.i18n={},$.ready=!1,$}(D=l.options.react)!=null&&D.wait&&oh(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...oj(),...l.options.react,...e},{useSuspense:d,keyPrefix:f}=u;let p=o||((L=l.options)==null?void 0:L.defaultNS);p=wa(p)?[p]:p||["translation"],(k=(P=l.reportNamespaces).addUsedNamespaces)==null||k.call(P,p);const m=(l.isInitialized||l.initializedStoreOnce)&&p.every(_=>ej(_,l,u)),x=pj(l,e.lng||null,u.nsMode==="fallback"?p:p[0],f),v=()=>x,S=()=>Wy(l,e.lng||null,u.nsMode==="fallback"?p:p[0],f),[b,E]=R.useState(v);let O=p.join();e.lng&&(O=`${e.lng}${O}`);const j=hj(O),T=R.useRef(!0);R.useEffect(()=>{const{bindI18n:_,bindI18nStore:$}=u;T.current=!0,!m&&!d&&(e.lng?W4(l,e.lng,p,()=>{T.current&&E(S)}):lh(l,p,()=>{T.current&&E(S)})),m&&j&&j!==O&&T.current&&E(S);const Y=()=>{T.current&&E(S)};return _&&(l==null||l.on(_,Y)),$&&(l==null||l.store.on($,Y)),()=>{T.current=!1,l&&_&&(_==null||_.split(" ").forEach(F=>l.off(F,Y))),$&&l&&$.split(" ").forEach(F=>l.store.off(F,Y))}},[l,O]),R.useEffect(()=>{T.current&&m&&E(v)},[l,f,m]);const C=[b,l,m];if(C.t=b,C.i18n=l,C.ready=m,m||!m&&!d)return C;throw new Promise(_=>{e.lng?W4(l,e.lng,p,()=>_()):lh(l,p,()=>_())})},mj=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  overflow: auto;
  margin-top: 40px;
`,Q4=M.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  width: 166px;
`,ki=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,gj=M.div`
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
`,xj=M.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
`,yj=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 2 * 0.25rem */
  width: 100%;
`,vj=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;
`,wj=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 400;
  line-height: 1.2em;
  width: fit-content;
`,bj={open:{rotate:45,y:8},closed:{rotate:0,y:0}},Sj={open:{opacity:0},closed:{opacity:1}},Cj={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},Tj={open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},Ej=({isOpen:t,setIsOpen:e})=>{const[,i]=R.useState(!1),{t:r}=xp(),o=hn(),l=["/contact","/service","/tips","/pricing"].some(f=>o.pathname.startsWith(f));R.useEffect(()=>(document.body.style.overflow=t?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[t]);const u=()=>{e(!1),i(!1)},d=[{to:"/home#hero",label:"Home",active:!0},{to:"/service",label:"Services"},{to:"/about#ap",label:"About Us"},{to:"/tips#app",label:"Tips"},{to:"/contact#ap",label:"Contact"}];return y.jsxs(YA,{children:[y.jsxs(FA,{onClick:()=>e(!t),"aria-label":t?"Close menu":"Open menu",children:[y.jsx(e0,{$isOpen:t,$darkMode:l,animate:t?"open":"closed",variants:bj}),y.jsx(e0,{$isOpen:t,$darkMode:l,animate:t?"open":"closed",variants:Sj}),y.jsx(e0,{$isOpen:t,$darkMode:l,animate:t?"open":"closed",variants:Cj})]}),y.jsx(ly,{children:t&&y.jsxs(ZA,{initial:"closed",animate:"open",exit:"closed",variants:Tj,transition:{duration:.3},children:[d.map((f,p)=>y.jsxs("div",{children:[y.jsx(XA,{to:f.to,onClick:u,children:y.jsx(KA,{$active:f.active,children:r(f.label)})}),y.jsx(QA,{})]},p)),y.jsxs(mj,{children:[y.jsxs(Q4,{children:[y.jsx(ki,{children:"Washing Machine Fix"}),y.jsx(ki,{children:"Dishwasher Repair"}),y.jsx(ki,{children:"Oven Maintenance"}),y.jsx(ki,{children:"Dryer Troubleshooting"})]}),y.jsxs(Q4,{children:[y.jsx(ki,{children:"Microwave Service"}),y.jsx(ki,{children:"Air Conditioner Repair"}),y.jsx(ki,{children:"Coffee Maker Repair"}),y.jsx(ki,{children:"Blender Maintenance"})]})]}),y.jsxs(gj,{children:[y.jsx(xj,{}),y.jsxs(yj,{children:[y.jsx(vj,{children:"Designed by TRBN"}),y.jsx(wj,{children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})})]})},Mj="/assets/LogoandTextContainer-CnBPFIWK.svg",Aj=M.div`
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
`,jj=M.img`
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
`,Lj=M.div`
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
`,Oj=M.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Rj=M.p`
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
`,Dj=M.p`
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
`,Hj=M.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Qy=M(Gi)`
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
`;M.button`
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
`;M.div`
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
`;M.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;M.div`
  display: flex;
  align-items: center;
  gap: 7px;
  width: 156px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;M.img`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  max-width: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;M.div`
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
`;M.div`
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
`;M.span`
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
`;M.p`
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
`;M.div`
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
`;M.div`
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
`;M.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 1440px) {
    width: auto;
    margin: 0 auto;
  }
`;M.img`
  border-radius: 18px;
  border: 1px solid var(--black);
  width: 36px;
  height: 36px;
  margin-left: -20px;
`;M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
`;M.div`
  margin: 0 auto;
  width: 285px;
  // height: 43px;
  margin-top: 20px;
  display: flex;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1440px) {
  }
`;M.button`
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
`;M.button`
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
`;const J4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgBzZFhEcIwDIVTFFRCHYCESZgDJgEHmwPmYJWAhKGgONgccCgoL3e5I1eaAf/I3Xftkry+ZnVUiZyzx9KBPXiAm3Muln27ivCIJYEArmAFLfILCGQFimYTcidwNw8QYSv7A5iEILkBjDUhNy+yD3IQu40q79m9Jm7ALPsOXFRtVe75k7OX+fjAvrjRu7OauaHXz5v5BsqVbzRZYi4moxa+ea4IzkXOi3CgrZDGxLMW39vCilMvwki/hJox0t/FEx1sC+f02XQyAAAAAElFTkSuQmCC",Vj=()=>{const[t,e]=R.useState(!1),[i]=R.useState(!1),[r,o]=R.useState(!1),l=hn(),u=["/contact","/service","/tips","/pricing"].some(S=>l.pathname.startsWith(S)),d=i||r,f=Sh(),p=S=>{S.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),window.location.pathname!=="/home"&&f("/home")};R.useEffect(()=>{const S=new IntersectionObserver(([E])=>{e(!E.isIntersecting)},{threshold:.1,rootMargin:"50px 0px 0px 0px"}),b=document.createElement("div");return b.style.position="absolute",b.style.top="50px",b.style.height="1px",b.style.pointerEvents="none",document.body.appendChild(b),S.observe(b),()=>{S.disconnect(),document.body.contains(b)&&document.body.removeChild(b)}},[]);const m=_e({query:"(max-width: 1439px)"}),x=_e({query:"(min-width: 768px) and (max-width: 1439px)"}),v=_e({query:"(min-width: 1440px)"});return y.jsxs(zS,{$isScrolled:t,$darkMode:u,children:[y.jsxs(PS,{id:"header",children:[y.jsx(NS,{to:"/home#hero",onClick:p,$overlayOpen:d,$darkMode:u,children:y.jsx("img",{src:Mj,alt:"Logo"})}),!m&&y.jsxs(BS,{children:[y.jsx(_s,{children:y.jsx(Us,{to:"/home#hero",$overlayOpen:d,$darkMode:u,children:"Home"})}),y.jsx(_s,{children:y.jsx(Us,{to:"/service#all",$overlayOpen:d,$darkMode:u,children:"Services"})}),y.jsx(_s,{children:y.jsx(Us,{to:"/about#ap",$overlayOpen:d,$darkMode:u,children:"About Us"})}),y.jsx(_s,{children:y.jsx(Us,{to:"/tips#app",$overlayOpen:d,$darkMode:u,children:"Tips"})}),y.jsx(_s,{children:y.jsx(Us,{to:"/contact#ap",$overlayOpen:d,$darkMode:u,children:"Contact"})})]}),v&&y.jsxs(R3,{children:[y.jsxs(Il,{children:[y.jsx(Vi,{$overlayOpen:d,$darkMode:u,children:y.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),y.jsx(Vi,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),y.jsxs(Il,{children:[y.jsxs(Vi,{$overlayOpen:d,$darkMode:u,children:[y.jsx("img",{src:J4,alt:"🗺️"}),y.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),y.jsx(Vi,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]}),y.jsx($S,{children:y.jsxs("div",{style:{display:"flex"},children:[y.jsx(Qy,{to:"/contact#ap",children:"Contact Us"}),y.jsx(f5,{$overlayOpen:d,$darkMode:u,children:y.jsx("a",{href:"tel:+18055002705",children:"Call Us"})}),m&&y.jsx(Ej,{isOpen:r,setIsOpen:o})]})})]}),x&&y.jsxs(R3,{children:[y.jsxs(Il,{children:[y.jsx(Vi,{$overlayOpen:d,$darkMode:u,children:y.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),y.jsx(Vi,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),y.jsxs(Il,{children:[y.jsxs(Vi,{$overlayOpen:d,$darkMode:u,children:[y.jsx("img",{src:J4,alt:"🗺️"}),y.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),y.jsx(Vi,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]})]})},kj=M.footer`
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
`,zj=M.div`
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
`,Pj=M.div`
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
`,zi=M.p`
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
`,Nj=M.div`
  @media screen and (min-width: 768px){
display: flex;
 flex-direction: row;
 width: 100%;
 justify-content: space-between;
}

@media screen and (min-width: 1440px){
    
}  
`,Bj=M.p`
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
`,$j=M.div`
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
`,_j=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px){

}

@media screen and (min-width: 1440px){
    
}  
`,Uj=M.div`
  background: rgba(255, 255, 255, ${({opacity:t})=>t||.5});
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px){

}

@media screen and (min-width: 1440px){
    
}  
`,Gj=M.svg`
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px){
    width: 100%;
    height: 114px;
}

@media screen and (min-width: 1440px){
    height: 222px;
}  
`;M.footer`

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
  }`;M.div`
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
  `;M.p`
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
`;M.div`
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
`;M.div`
 display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    gap: 5px;
    @media screen and (min-width: 768px){

}

@media screen and (min-width: 1440px){
    
}  
`;M.a`
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
`;M.div`
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
`;M(Gi)`
font-family: var(--font-family);
font-weight: 400;
font-size: 15px;
color: var(--white-50);
margin-bottom: 10px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;M.a`
font-family: var(--font-family);
font-weight: 400;
font-size: 15px;
color: var(--white-50);
margin-bottom: 10px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;M.div`
display: flex;
margin-bottom: 16px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;M.div`
display: flex;
justify-content: space-between;
margin: 0 auto;
width: 100%;
flex-wrap: wrap;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;M(Gi)`
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
`;M.div`
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
`;M.button`
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
`;M.div`
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
`;M.div`
display: flex;
gap: 12px;
flex-direction: row;
margin: 16px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
;`;M.a`
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;M.img`
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;M.div`
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
`;M.section`
  max-width: 800px;
  margin: 0 auto ;
  padding: 20px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;M.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;M.h2`
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
`;M.p`
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
`;M.div`
 

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
`;M.img`
  width: 56px;
  height: 56px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;const Ij=()=>y.jsx(kj,{children:y.jsxs(zj,{children:[y.jsxs(Pj,{children:[y.jsxs(Bj,{children:[y.jsx("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:"801 Tioga pl, Newbury Park, CA 91320"})," ",y.jsx("br",{}),y.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"}),y.jsx("br",{})," ",y.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]}),y.jsxs($j,{children:[y.jsx(zi,{children:"Home"}),y.jsx(zi,{children:"Services"}),y.jsx(zi,{children:"About Us"}),y.jsx(zi,{children:"Tips"}),y.jsx(zi,{children:"Contacts"}),y.jsx(zi,{children:"Privacy and Terms"})]})]}),y.jsxs(_j,{children:[y.jsxs(Gj,{viewBox:"0 0 343 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("path",{d:"M0 54.8045L19.396 1.71207H26.1359L45.457 54.8045H39.9152L34.2238 38.8768H11.2332L5.5417 54.8045H0ZM12.9556 33.9414H32.5013L22.7659 6.27353L12.9556 33.9414Z",fill:"#3098EE"}),y.jsx("path",{d:"M51.2842 54.8045V1.71207H56.3765V54.8045H51.2842Z",fill:"#3098EE"}),y.jsx("path",{d:"M67.6308 54.8045V1.71207H87.1016C90.896 1.71207 94.1161 2.36015 96.7622 3.6563C99.4581 4.9026 101.53 6.69727 102.978 9.04032C104.426 11.3834 105.15 14.2 105.15 17.4902C105.15 19.933 104.575 22.1015 103.427 23.9959C102.329 25.8903 100.856 27.4108 99.0088 28.5574C97.1616 29.704 95.1646 30.3521 93.0178 30.5016L92.6433 29.8286C96.1381 29.8286 98.8341 30.6262 100.731 32.2215C102.678 33.7669 103.802 36.2097 104.101 39.5498L105.449 54.8045H100.282L99.0088 39.9984C98.8091 37.5557 97.9354 35.761 96.3877 34.6144C94.84 33.418 92.3438 32.8197 88.8989 32.8197H72.7232V54.8045H67.6308ZM72.7232 27.8844H87.9254C91.5699 27.8844 94.4407 26.987 96.5375 25.1924C98.6843 23.3478 99.7577 20.7555 99.7577 17.4155C99.7577 13.9258 98.6843 11.2587 96.5375 9.41421C94.3907 7.56968 91.2205 6.64742 87.0267 6.64742H72.7232V27.8844Z",fill:"#3098EE"}),y.jsx("path",{d:"M125.684 54.8045V9.1151H109.359V1.71207H150.098V9.1151H133.772V54.8045H125.684Z",fill:"white"}),y.jsx("path",{d:"M153.991 54.8045V1.71207H188.589V9.1151H162.079V24.5941H187.691V31.7728H162.079V47.4014H189.188V54.8045H153.991Z",fill:"white"}),y.jsx("path",{d:"M192.736 54.8045L210.41 28.1835L192.886 1.71207H202.397L215.502 21.9021L228.383 1.71207H237.819L220.295 28.0339L238.043 54.8045H228.533L215.352 34.3153L202.172 54.8045H192.736Z",fill:"white"}),y.jsx("path",{d:"M243.289 54.8045V1.71207H253.549L278.112 45.0085V1.71207H286.2V54.8045H275.566L251.377 12.4801V54.8045H243.289Z",fill:"white"}),y.jsx("path",{d:"M318.137 56.0009C312.995 56.0009 308.577 54.9042 304.882 52.7107C301.188 50.4674 298.342 47.2768 296.345 43.1391C294.348 39.0014 293.349 34.066 293.349 28.333C293.349 22.6001 294.348 17.6647 296.345 13.527C298.342 9.33943 301.188 6.12397 304.882 3.88063C308.577 1.63729 312.995 0.515625 318.137 0.515625C323.329 0.515625 327.773 1.63729 331.467 3.88063C335.212 6.12397 338.057 9.33943 340.004 13.527C342.001 17.6647 343 22.6001 343 28.333C343 34.066 342.001 39.0014 340.004 43.1391C338.057 47.2768 335.212 50.4674 331.467 52.7107C327.773 54.9042 323.329 56.0009 318.137 56.0009ZM318.137 48.5979C321.582 48.5979 324.528 47.8003 326.974 46.205C329.47 44.6097 331.367 42.3165 332.665 39.3254C333.964 36.2844 334.613 32.6203 334.613 28.333C334.613 24.0458 333.964 20.3817 332.665 17.3407C331.367 14.2997 329.47 11.9816 326.974 10.3863C324.528 8.74121 321.582 7.91865 318.137 7.91865C314.742 7.91865 311.822 8.74121 309.375 10.3863C306.929 11.9816 305.032 14.2997 303.684 17.3407C302.386 20.3817 301.737 24.0458 301.737 28.333C301.737 32.6203 302.386 36.2844 303.684 39.3254C305.032 42.3165 306.929 44.6097 309.375 46.205C311.822 47.8003 314.742 48.5979 318.137 48.5979Z",fill:"white"})]}),y.jsx(Uj,{opacity:.5}),y.jsxs(Nj,{children:[y.jsx(zi,{size:"14px",weight:"500",children:"Designed by TRBN"}),y.jsx(zi,{size:"14px",children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})}),qj="data:image/svg+xml,%3csvg%20width='1360'%20height='220'%20viewBox='0%200%201360%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%20215.256L76.9053%204.74393H103.629L180.237%20215.256H158.265L135.698%20152.102H44.5397L21.9729%20215.256H0ZM51.3692%20132.534H128.868L90.2672%2022.8302L51.3692%20132.534Z'%20fill='%233098EE'/%3e%3cpath%20d='M203.342%20215.256V4.74393H223.534V215.256H203.342Z'%20fill='%233098EE'/%3e%3cpath%20d='M268.157%20215.256V4.74393H345.359C360.404%204.74393%20373.172%207.31356%20383.663%2012.4528C394.353%2017.3944%20402.568%2024.5103%20408.309%2033.8005C414.049%2043.0907%20416.92%2054.2588%20416.92%2067.3046C416.92%2076.9901%20414.643%2085.5885%20410.09%2093.0997C405.735%20100.611%20399.896%20106.64%20392.571%20111.186C385.247%20115.732%20377.329%20118.302%20368.817%20118.895L367.332%20116.226C381.189%20116.226%20391.879%20119.389%20399.401%20125.714C407.121%20131.842%20411.575%20141.527%20412.763%20154.771L418.108%20215.256H397.619L392.571%20156.55C391.78%20146.864%20388.315%20139.748%20382.179%20135.202C376.042%20130.458%20366.144%20128.086%20352.486%20128.086H288.348V215.256H268.157ZM288.348%20108.518H348.626C363.076%20108.518%20374.459%20104.96%20382.773%2097.8437C391.285%2090.5301%20395.541%2080.2516%20395.541%2067.0081C395.541%2053.1716%20391.285%2042.5966%20382.773%2035.283C374.261%2027.9694%20361.69%2024.3127%20345.062%2024.3127H288.348V108.518Z'%20fill='%233098EE'/%3e%3cpath%20d='M498.339%20215.256V34.097H433.608V4.74393H595.139V34.097H530.408V215.256H498.339Z'%20fill='white'/%3e%3cpath%20d='M610.577%20215.256V4.74393H747.76V34.097H642.646V95.4717H744.196V123.935H642.646V185.903H750.135V215.256H610.577Z'%20fill='white'/%3e%3cpath%20d='M764.202%20215.256L834.278%20109.704L764.796%204.74393H802.506L854.469%2084.7978L905.542%204.74393H942.955L873.473%20109.111L943.846%20215.256H906.135L853.875%20134.016L801.616%20215.256H764.202Z'%20fill='white'/%3e%3cpath%20d='M964.645%20215.256V4.74393H1005.32L1102.72%20176.415V4.74393H1134.79V215.256H1092.62L996.714%2047.4393V215.256H964.645Z'%20fill='white'/%3e%3cpath%20d='M1261.42%20220C1241.03%20220%201223.51%20215.651%201208.86%20206.954C1194.21%20198.059%201182.93%20185.409%201175.01%20169.003C1167.09%20152.597%201163.13%20133.028%201163.13%20110.296C1163.13%2087.5651%201167.09%2067.9964%201175.01%2051.5903C1182.93%2034.9865%201194.21%2022.2372%201208.86%2013.3423C1223.51%204.44743%201241.03%200%201261.42%200C1282.01%200%201299.62%204.44743%201314.27%2013.3423C1329.12%2022.2372%201340.4%2034.9865%201348.12%2051.5903C1356.04%2067.9964%201360%2087.5651%201360%20110.296C1360%20133.028%201356.04%20152.597%201348.12%20169.003C1340.4%20185.409%201329.12%20198.059%201314.27%20206.954C1299.62%20215.651%201282.01%20220%201261.42%20220ZM1261.42%20190.647C1275.08%20190.647%201286.76%20187.484%201296.46%20181.159C1306.35%20174.834%201313.88%20165.741%201319.02%20153.881C1324.17%20141.824%201326.74%20127.296%201326.74%20110.296C1326.74%2093.2974%201324.17%2078.7691%201319.02%2066.7116C1313.88%2054.6541%201306.35%2045.4627%201296.46%2039.1375C1286.76%2032.6145%201275.08%2029.3531%201261.42%2029.3531C1247.96%2029.3531%201236.38%2032.6145%201226.68%2039.1375C1216.98%2045.4627%201209.46%2054.6541%201204.11%2066.7116C1198.96%2078.7691%201196.39%2093.2974%201196.39%20110.296C1196.39%20127.296%201198.96%20141.824%201204.11%20153.881C1209.46%20165.741%201216.98%20174.834%201226.68%20181.159C1236.38%20187.484%201247.96%20190.647%201261.42%20190.647Z'%20fill='white'/%3e%3c/svg%3e",Yj="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",Fj=bo`
  from { opacity: 0; }
  to { opacity: 1; }
`,Zj=bo`
  from { opacity: 1; }
  to { opacity: 0; }
`,Xj=bo`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
`,Kj=M.div`
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  ${({$hide:t})=>t&&zr`
      animation: ${Zj} 1s forwards;
    `}
`,Wj=M.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  ${({$visible:t})=>t&&zr`
      animation: ${Fj} 1.5s forwards;
    `}
`,Qj=M.img`
  position: absolute;
  width: min-content;
  height: 27px;
  opacity: 0;
  ${({$show:t})=>t&&zr`
      animation: ${Xj} 2s forwards;
    `}

      @media screen and (min-width: 744px) {
   height: 100px;
  }

  @media screen and (min-width: 1440px) {
  height: 240px;
  }
`,Jj=({onComplete:t})=>{const[e,i]=R.useState(!0),[r,o]=R.useState(!1),[l,u]=R.useState(!1),d=R.useRef(null);return R.useEffect(()=>{d.current&&(d.current.onended=()=>{i(!1),o(!0),setTimeout(()=>{u(!0),setTimeout(t,1e3)},3e3)})},[t]),y.jsxs(Kj,{$hide:l,children:[e&&y.jsx(Wj,{ref:d,$visible:e,autoPlay:!0,muted:!0,playsInline:!0,children:y.jsx("source",{src:Yj,type:"video/mp4"})}),r&&y.jsx(Qj,{src:qj,alt:"Logo",$show:r})]})},eL=()=>{const t=hn(),[e,i]=R.useState(!1);R.useEffect(()=>{const o=()=>{sessionStorage.clear()};return window.addEventListener("beforeunload",o),()=>{window.removeEventListener("beforeunload",o)}},[]),R.useEffect(()=>{sessionStorage.getItem("hasSeenPreloader")||i(!0)},[]);const r=()=>{sessionStorage.setItem("hasSeenPreloader","true"),i(!1)};return R.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[t.pathname]),e?y.jsx(Jj,{onComplete:r}):y.jsxs(y.Fragment,{children:[y.jsx(Vj,{}),y.jsx(R.Suspense,{children:y.jsx(aw,{})}),y.jsx(Ij,{})]})};function ex(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function yp(t,e){t===void 0&&(t={}),e===void 0&&(e={});const i=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:ex(e[r])&&ex(t[r])&&Object.keys(e[r]).length>0&&yp(t[r],e[r])})}const Jy={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Bn(){const t=typeof document<"u"?document:{};return yp(t,Jy),t}const tL={document:Jy,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function Tt(){const t=typeof window<"u"?window:{};return yp(t,tL),t}function nL(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function iL(t){const e=t;Object.keys(e).forEach(i=>{try{e[i]=null}catch{}try{delete e[i]}catch{}})}function Oc(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function ri(){return Date.now()}function aL(t){const e=Tt();let i;return e.getComputedStyle&&(i=e.getComputedStyle(t,null)),!i&&t.currentStyle&&(i=t.currentStyle),i||(i=t.style),i}function rL(t,e){e===void 0&&(e="x");const i=Tt();let r,o,l;const u=aL(t);return i.WebKitCSSMatrix?(o=u.transform||u.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(d=>d.replace(",",".")).join(", ")),l=new i.WebKitCSSMatrix(o==="none"?"":o)):(l=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=l.toString().split(",")),e==="x"&&(i.WebKitCSSMatrix?o=l.m41:r.length===16?o=parseFloat(r[12]):o=parseFloat(r[4])),e==="y"&&(i.WebKitCSSMatrix?o=l.m42:r.length===16?o=parseFloat(r[13]):o=parseFloat(r[5])),o||0}function Kl(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function sL(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Ft(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){const r=i<0||arguments.length<=i?void 0:arguments[i];if(r!=null&&!sL(r)){const o=Object.keys(Object(r)).filter(l=>e.indexOf(l)<0);for(let l=0,u=o.length;l<u;l+=1){const d=o[l],f=Object.getOwnPropertyDescriptor(r,d);f!==void 0&&f.enumerable&&(Kl(t[d])&&Kl(r[d])?r[d].__swiper__?t[d]=r[d]:Ft(t[d],r[d]):!Kl(t[d])&&Kl(r[d])?(t[d]={},r[d].__swiper__?t[d]=r[d]:Ft(t[d],r[d])):t[d]=r[d])}}}return t}function Wl(t,e,i){t.style.setProperty(e,i)}function ev(t){let{swiper:e,targetPosition:i,side:r}=t;const o=Tt(),l=-e.translate;let u=null,d;const f=e.params.speed;e.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(e.cssModeFrameID);const p=i>l?"next":"prev",m=(v,S)=>p==="next"&&v>=S||p==="prev"&&v<=S,x=()=>{d=new Date().getTime(),u===null&&(u=d);const v=Math.max(Math.min((d-u)/f,1),0),S=.5-Math.cos(v*Math.PI)/2;let b=l+S*(i-l);if(m(b,i)&&(b=i),e.wrapperEl.scrollTo({[r]:b}),m(b,i)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:b})}),o.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=o.requestAnimationFrame(x)};x()}function Hn(t,e){e===void 0&&(e="");const i=Tt(),r=[...t.children];return i.HTMLSlotElement&&t instanceof HTMLSlotElement&&r.push(...t.assignedElements()),e?r.filter(o=>o.matches(e)):r}function oL(t,e){const i=[e];for(;i.length>0;){const r=i.shift();if(t===r)return!0;i.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function lL(t,e){const i=Tt();let r=e.contains(t);return!r&&i.HTMLSlotElement&&e instanceof HTMLSlotElement&&(r=[...e.assignedElements()].includes(t),r||(r=oL(t,e))),r}function Rc(t){try{console.warn(t);return}catch{}}function Dc(t,e){e===void 0&&(e=[]);const i=document.createElement(t);return i.classList.add(...Array.isArray(e)?e:nL(e)),i}function cL(t,e){const i=[];for(;t.previousElementSibling;){const r=t.previousElementSibling;e?r.matches(e)&&i.push(r):i.push(r),t=r}return i}function uL(t,e){const i=[];for(;t.nextElementSibling;){const r=t.nextElementSibling;e?r.matches(e)&&i.push(r):i.push(r),t=r}return i}function Bi(t,e){return Tt().getComputedStyle(t,null).getPropertyValue(e)}function Hc(t){let e=t,i;if(e){for(i=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(i+=1);return i}}function tv(t,e){const i=[];let r=t.parentElement;for(;r;)e?r.matches(e)&&i.push(r):i.push(r),r=r.parentElement;return i}function uh(t,e,i){const r=Tt();return t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function dt(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}function Vc(t,e){e===void 0&&(e=""),typeof trustedTypes<"u"?t.innerHTML=trustedTypes.createPolicy("html",{createHTML:i=>i}).createHTML(e):t.innerHTML=e}function t0(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l=Tt();i({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let u,d=ri(),f;const p=[];function m(C){let k=0,_=0,$=0,Y=0;return"detail"in C&&(_=C.detail),"wheelDelta"in C&&(_=-C.wheelDelta/120),"wheelDeltaY"in C&&(_=-C.wheelDeltaY/120),"wheelDeltaX"in C&&(k=-C.wheelDeltaX/120),"axis"in C&&C.axis===C.HORIZONTAL_AXIS&&(k=_,_=0),$=k*10,Y=_*10,"deltaY"in C&&(Y=C.deltaY),"deltaX"in C&&($=C.deltaX),C.shiftKey&&!$&&($=Y,Y=0),($||Y)&&C.deltaMode&&(C.deltaMode===1?($*=40,Y*=40):($*=800,Y*=800)),$&&!k&&(k=$<1?-1:1),Y&&!_&&(_=Y<1?-1:1),{spinX:k,spinY:_,pixelX:$,pixelY:Y}}function x(){e.enabled&&(e.mouseEntered=!0)}function v(){e.enabled&&(e.mouseEntered=!1)}function S(C){return e.params.mousewheel.thresholdDelta&&C.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&ri()-d<e.params.mousewheel.thresholdTime?!1:C.delta>=6&&ri()-d<60?!0:(C.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),o("scroll",C.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),o("scroll",C.raw)),d=new l.Date().getTime(),!1)}function b(C){const D=e.params.mousewheel;if(C.direction<0){if(e.isEnd&&!e.params.loop&&D.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&D.releaseOnEdges)return!0;return!1}function E(C){let D=C,L=!0;if(!e.enabled||C.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const P=e.params.mousewheel;e.params.cssMode&&D.preventDefault();let k=e.el;e.params.mousewheel.eventsTarget!=="container"&&(k=document.querySelector(e.params.mousewheel.eventsTarget));const _=k&&k.contains(D.target);if(!e.mouseEntered&&!_&&!P.releaseOnEdges)return!0;D.originalEvent&&(D=D.originalEvent);let $=0;const Y=e.rtlTranslate?-1:1,F=m(D);if(P.forceToAxis)if(e.isHorizontal())if(Math.abs(F.pixelX)>Math.abs(F.pixelY))$=-F.pixelX*Y;else return!0;else if(Math.abs(F.pixelY)>Math.abs(F.pixelX))$=-F.pixelY;else return!0;else $=Math.abs(F.pixelX)>Math.abs(F.pixelY)?-F.pixelX*Y:-F.pixelY;if($===0)return!0;P.invert&&($=-$);let te=e.getTranslate()+$*P.sensitivity;if(te>=e.minTranslate()&&(te=e.minTranslate()),te<=e.maxTranslate()&&(te=e.maxTranslate()),L=e.params.loop?!0:!(te===e.minTranslate()||te===e.maxTranslate()),L&&e.params.nested&&D.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const ie={time:ri(),delta:Math.abs($),direction:Math.sign($),raw:C};p.length>=2&&p.shift();const oe=p.length?p[p.length-1]:void 0;if(p.push(ie),oe?(ie.direction!==oe.direction||ie.delta>oe.delta||ie.time>oe.time+150)&&S(ie):S(ie),b(ie))return!0}else{const ie={time:ri(),delta:Math.abs($),direction:Math.sign($)},oe=f&&ie.time<f.time+500&&ie.delta<=f.delta&&ie.direction===f.direction;if(!oe){f=void 0;let re=e.getTranslate()+$*P.sensitivity;const B=e.isBeginning,K=e.isEnd;if(re>=e.minTranslate()&&(re=e.minTranslate()),re<=e.maxTranslate()&&(re=e.maxTranslate()),e.setTransition(0),e.setTranslate(re),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!B&&e.isBeginning||!K&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:ie.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(u),u=void 0,p.length>=15&&p.shift();const W=p.length?p[p.length-1]:void 0,ee=p[0];if(p.push(ie),W&&(ie.delta>W.delta||ie.direction!==W.direction))p.splice(0);else if(p.length>=15&&ie.time-ee.time<500&&ee.delta-ie.delta>=1&&ie.delta<=6){const H=$>0?.8:.2;f=ie,p.splice(0),u=Oc(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,H)},0)}u||(u=Oc(()=>{if(e.destroyed||!e.params)return;const H=.5;f=ie,p.splice(0),e.slideToClosest(e.params.speed,!0,void 0,H)},500))}if(oe||o("scroll",D),e.params.autoplay&&e.params.autoplay.disableOnInteraction&&e.autoplay.stop(),P.releaseOnEdges&&(re===e.minTranslate()||re===e.maxTranslate()))return!0}}return D.preventDefault?D.preventDefault():D.returnValue=!1,!1}function O(C){let D=e.el;e.params.mousewheel.eventsTarget!=="container"&&(D=document.querySelector(e.params.mousewheel.eventsTarget)),D[C]("mouseenter",x),D[C]("mouseleave",v),D[C]("wheel",E)}function j(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",E),!0):e.mousewheel.enabled?!1:(O("addEventListener"),e.mousewheel.enabled=!0,!0)}function T(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,E),!0):e.mousewheel.enabled?(O("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}r("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&T(),e.params.mousewheel.enabled&&j()}),r("destroy",()=>{e.params.cssMode&&j(),e.mousewheel.enabled&&T()}),Object.assign(e.mousewheel,{enable:j,disable:T})}function nv(t,e,i,r){return t.params.createElements&&Object.keys(r).forEach(o=>{if(!i[o]&&i.auto===!0){let l=Hn(t.el,`.${r[o]}`)[0];l||(l=Dc("div",r[o]),l.className=r[o],t.el.append(l)),i[o]=l,e[o]=l}}),i}function iv(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function l(b){let E;return b&&typeof b=="string"&&e.isElement&&(E=e.el.querySelector(b)||e.hostEl.querySelector(b),E)?E:(b&&(typeof b=="string"&&(E=[...document.querySelectorAll(b)]),e.params.uniqueNavElements&&typeof b=="string"&&E&&E.length>1&&e.el.querySelectorAll(b).length===1?E=e.el.querySelector(b):E&&E.length===1&&(E=E[0])),b&&!E?b:E)}function u(b,E){const O=e.params.navigation;b=dt(b),b.forEach(j=>{j&&(j.classList[E?"add":"remove"](...O.disabledClass.split(" ")),j.tagName==="BUTTON"&&(j.disabled=E),e.params.watchOverflow&&e.enabled&&j.classList[e.isLocked?"add":"remove"](O.lockClass))})}function d(){const{nextEl:b,prevEl:E}=e.navigation;if(e.params.loop){u(E,!1),u(b,!1);return}u(E,e.isBeginning&&!e.params.rewind),u(b,e.isEnd&&!e.params.rewind)}function f(b){b.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),o("navigationPrev"))}function p(b){b.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),o("navigationNext"))}function m(){const b=e.params.navigation;if(e.params.navigation=nv(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(b.nextEl||b.prevEl))return;let E=l(b.nextEl),O=l(b.prevEl);Object.assign(e.navigation,{nextEl:E,prevEl:O}),E=dt(E),O=dt(O);const j=(T,C)=>{T&&T.addEventListener("click",C==="next"?p:f),!e.enabled&&T&&T.classList.add(...b.lockClass.split(" "))};E.forEach(T=>j(T,"next")),O.forEach(T=>j(T,"prev"))}function x(){let{nextEl:b,prevEl:E}=e.navigation;b=dt(b),E=dt(E);const O=(j,T)=>{j.removeEventListener("click",T==="next"?p:f),j.classList.remove(...e.params.navigation.disabledClass.split(" "))};b.forEach(j=>O(j,"next")),E.forEach(j=>O(j,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?S():(m(),d())}),r("toEdge fromEdge lock unlock",()=>{d()}),r("destroy",()=>{x()}),r("enable disable",()=>{let{nextEl:b,prevEl:E}=e.navigation;if(b=dt(b),E=dt(E),e.enabled){d();return}[...b,...E].filter(O=>!!O).forEach(O=>O.classList.add(e.params.navigation.lockClass))}),r("click",(b,E)=>{let{nextEl:O,prevEl:j}=e.navigation;O=dt(O),j=dt(j);const T=E.target;let C=j.includes(T)||O.includes(T);if(e.isElement&&!C){const D=E.path||E.composedPath&&E.composedPath();D&&(C=D.find(L=>O.includes(L)||j.includes(L)))}if(e.params.navigation.hideOnClick&&!C){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===T||e.pagination.el.contains(T)))return;let D;O.length?D=O[0].classList.contains(e.params.navigation.hiddenClass):j.length&&(D=j[0].classList.contains(e.params.navigation.hiddenClass)),o(D===!0?"navigationShow":"navigationHide"),[...O,...j].filter(L=>!!L).forEach(L=>L.classList.toggle(e.params.navigation.hiddenClass))}});const v=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),m(),d()},S=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),x()};Object.assign(e.navigation,{enable:v,disable:S,update:d,init:m,destroy:x})}function Is(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function dL(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:T=>T,formatFractionTotal:T=>T,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),e.pagination={el:null,bullets:[]};let u,d=0;function f(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function p(T,C){const{bulletActiveClass:D}=e.params.pagination;T&&(T=T[`${C==="prev"?"previous":"next"}ElementSibling`],T&&(T.classList.add(`${D}-${C}`),T=T[`${C==="prev"?"previous":"next"}ElementSibling`],T&&T.classList.add(`${D}-${C}-${C}`)))}function m(T,C,D){if(T=T%D,C=C%D,C===T+1)return"next";if(C===T-1)return"previous"}function x(T){const C=T.target.closest(Is(e.params.pagination.bulletClass));if(!C)return;T.preventDefault();const D=Hc(C)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===D)return;const L=m(e.realIndex,D,e.slides.length);L==="next"?e.slideNext():L==="previous"?e.slidePrev():e.slideToLoop(D)}else e.slideTo(D)}function v(){const T=e.rtl,C=e.params.pagination;if(f())return;let D=e.pagination.el;D=dt(D);let L,P;const k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(k/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(P=e.previousRealIndex||0,L=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(L=e.snapIndex,P=e.previousSnapIndex):(P=e.previousIndex||0,L=e.activeIndex||0),C.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const $=e.pagination.bullets;let Y,F,te;if(C.dynamicBullets&&(u=uh($[0],e.isHorizontal()?"width":"height"),D.forEach(ie=>{ie.style[e.isHorizontal()?"width":"height"]=`${u*(C.dynamicMainBullets+4)}px`}),C.dynamicMainBullets>1&&P!==void 0&&(d+=L-(P||0),d>C.dynamicMainBullets-1?d=C.dynamicMainBullets-1:d<0&&(d=0)),Y=Math.max(L-d,0),F=Y+(Math.min($.length,C.dynamicMainBullets)-1),te=(F+Y)/2),$.forEach(ie=>{const oe=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(re=>`${C.bulletActiveClass}${re}`)].map(re=>typeof re=="string"&&re.includes(" ")?re.split(" "):re).flat();ie.classList.remove(...oe)}),D.length>1)$.forEach(ie=>{const oe=Hc(ie);oe===L?ie.classList.add(...C.bulletActiveClass.split(" ")):e.isElement&&ie.setAttribute("part","bullet"),C.dynamicBullets&&(oe>=Y&&oe<=F&&ie.classList.add(...`${C.bulletActiveClass}-main`.split(" ")),oe===Y&&p(ie,"prev"),oe===F&&p(ie,"next"))});else{const ie=$[L];if(ie&&ie.classList.add(...C.bulletActiveClass.split(" ")),e.isElement&&$.forEach((oe,re)=>{oe.setAttribute("part",re===L?"bullet-active":"bullet")}),C.dynamicBullets){const oe=$[Y],re=$[F];for(let B=Y;B<=F;B+=1)$[B]&&$[B].classList.add(...`${C.bulletActiveClass}-main`.split(" "));p(oe,"prev"),p(re,"next")}}if(C.dynamicBullets){const ie=Math.min($.length,C.dynamicMainBullets+4),oe=(u*ie-u)/2-te*u,re=T?"right":"left";$.forEach(B=>{B.style[e.isHorizontal()?re:"top"]=`${oe}px`})}}D.forEach(($,Y)=>{if(C.type==="fraction"&&($.querySelectorAll(Is(C.currentClass)).forEach(F=>{F.textContent=C.formatFractionCurrent(L+1)}),$.querySelectorAll(Is(C.totalClass)).forEach(F=>{F.textContent=C.formatFractionTotal(_)})),C.type==="progressbar"){let F;C.progressbarOpposite?F=e.isHorizontal()?"vertical":"horizontal":F=e.isHorizontal()?"horizontal":"vertical";const te=(L+1)/_;let ie=1,oe=1;F==="horizontal"?ie=te:oe=te,$.querySelectorAll(Is(C.progressbarFillClass)).forEach(re=>{re.style.transform=`translate3d(0,0,0) scaleX(${ie}) scaleY(${oe})`,re.style.transitionDuration=`${e.params.speed}ms`})}C.type==="custom"&&C.renderCustom?(Vc($,C.renderCustom(e,L+1,_)),Y===0&&o("paginationRender",$)):(Y===0&&o("paginationRender",$),o("paginationUpdate",$)),e.params.watchOverflow&&e.enabled&&$.classList[e.isLocked?"add":"remove"](C.lockClass)})}function S(){const T=e.params.pagination;if(f())return;const C=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let D=e.pagination.el;D=dt(D);let L="";if(T.type==="bullets"){let P=e.params.loop?Math.ceil(C/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&P>C&&(P=C);for(let k=0;k<P;k+=1)T.renderBullet?L+=T.renderBullet.call(e,k,T.bulletClass):L+=`<${T.bulletElement} ${e.isElement?'part="bullet"':""} class="${T.bulletClass}"></${T.bulletElement}>`}T.type==="fraction"&&(T.renderFraction?L=T.renderFraction.call(e,T.currentClass,T.totalClass):L=`<span class="${T.currentClass}"></span> / <span class="${T.totalClass}"></span>`),T.type==="progressbar"&&(T.renderProgressbar?L=T.renderProgressbar.call(e,T.progressbarFillClass):L=`<span class="${T.progressbarFillClass}"></span>`),e.pagination.bullets=[],D.forEach(P=>{T.type!=="custom"&&Vc(P,L||""),T.type==="bullets"&&e.pagination.bullets.push(...P.querySelectorAll(Is(T.bulletClass)))}),T.type!=="custom"&&o("paginationRender",D[0])}function b(){e.params.pagination=nv(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const T=e.params.pagination;if(!T.el)return;let C;typeof T.el=="string"&&e.isElement&&(C=e.el.querySelector(T.el)),!C&&typeof T.el=="string"&&(C=[...document.querySelectorAll(T.el)]),C||(C=T.el),!(!C||C.length===0)&&(e.params.uniqueNavElements&&typeof T.el=="string"&&Array.isArray(C)&&C.length>1&&(C=[...e.el.querySelectorAll(T.el)],C.length>1&&(C=C.find(D=>tv(D,".swiper")[0]===e.el))),Array.isArray(C)&&C.length===1&&(C=C[0]),Object.assign(e.pagination,{el:C}),C=dt(C),C.forEach(D=>{T.type==="bullets"&&T.clickable&&D.classList.add(...(T.clickableClass||"").split(" ")),D.classList.add(T.modifierClass+T.type),D.classList.add(e.isHorizontal()?T.horizontalClass:T.verticalClass),T.type==="bullets"&&T.dynamicBullets&&(D.classList.add(`${T.modifierClass}${T.type}-dynamic`),d=0,T.dynamicMainBullets<1&&(T.dynamicMainBullets=1)),T.type==="progressbar"&&T.progressbarOpposite&&D.classList.add(T.progressbarOppositeClass),T.clickable&&D.addEventListener("click",x),e.enabled||D.classList.add(T.lockClass)}))}function E(){const T=e.params.pagination;if(f())return;let C=e.pagination.el;C&&(C=dt(C),C.forEach(D=>{D.classList.remove(T.hiddenClass),D.classList.remove(T.modifierClass+T.type),D.classList.remove(e.isHorizontal()?T.horizontalClass:T.verticalClass),T.clickable&&(D.classList.remove(...(T.clickableClass||"").split(" ")),D.removeEventListener("click",x))})),e.pagination.bullets&&e.pagination.bullets.forEach(D=>D.classList.remove(...T.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const T=e.params.pagination;let{el:C}=e.pagination;C=dt(C),C.forEach(D=>{D.classList.remove(T.horizontalClass,T.verticalClass),D.classList.add(e.isHorizontal()?T.horizontalClass:T.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?j():(b(),S(),v())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&v()}),r("snapIndexChange",()=>{v()}),r("snapGridLengthChange",()=>{S(),v()}),r("destroy",()=>{E()}),r("enable disable",()=>{let{el:T}=e.pagination;T&&(T=dt(T),T.forEach(C=>C.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{v()}),r("click",(T,C)=>{const D=C.target,L=dt(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&L&&L.length>0&&!D.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&D===e.navigation.nextEl||e.navigation.prevEl&&D===e.navigation.prevEl))return;const P=L[0].classList.contains(e.params.pagination.hiddenClass);o(P===!0?"paginationShow":"paginationHide"),L.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const O=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:T}=e.pagination;T&&(T=dt(T),T.forEach(C=>C.classList.remove(e.params.pagination.paginationDisabledClass))),b(),S(),v()},j=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:T}=e.pagination;T&&(T=dt(T),T.forEach(C=>C.classList.add(e.params.pagination.paginationDisabledClass))),E()};Object.assign(e.pagination,{enable:O,disable:j,render:S,update:v,init:b,destroy:E})}function dn(t){let{swiper:e,extendParams:i,on:r,emit:o,params:l}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,d,f=l&&l.autoplay?l.autoplay.delay:3e3,p=l&&l.autoplay?l.autoplay.delay:3e3,m,x=new Date().getTime(),v,S,b,E,O,j,T;function C(W){!e||e.destroyed||!e.wrapperEl||W.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",C),!(T||W.detail&&W.detail.bySwiperTouchMove)&&Y())}const D=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?v=!0:v&&(p=m,v=!1);const W=e.autoplay.paused?m:x+p-new Date().getTime();e.autoplay.timeLeft=W,o("autoplayTimeLeft",W,W/f),d=requestAnimationFrame(()=>{D()})},L=()=>{let W;return e.virtual&&e.params.virtual.enabled?W=e.slides.find(H=>H.classList.contains("swiper-slide-active")):W=e.slides[e.activeIndex],W?parseInt(W.getAttribute("data-swiper-autoplay"),10):void 0},P=W=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(d),D();let ee=typeof W>"u"?e.params.autoplay.delay:W;f=e.params.autoplay.delay,p=e.params.autoplay.delay;const H=L();!Number.isNaN(H)&&H>0&&typeof W>"u"&&(ee=H,f=H,p=H),m=ee;const Z=e.params.speed,ne=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(Z,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,Z,!0,!0),o("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(Z,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,Z,!0,!0),o("autoplay")),e.params.cssMode&&(x=new Date().getTime(),requestAnimationFrame(()=>{P()})))};return ee>0?(clearTimeout(u),u=setTimeout(()=>{ne()},ee)):requestAnimationFrame(()=>{ne()}),ee},k=()=>{x=new Date().getTime(),e.autoplay.running=!0,P(),o("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(d),o("autoplayStop")},$=(W,ee)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(u),W||(j=!0);const H=()=>{o("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",C):Y()};if(e.autoplay.paused=!0,ee){O&&(m=e.params.autoplay.delay),O=!1,H();return}m=(m||e.params.autoplay.delay)-(new Date().getTime()-x),!(e.isEnd&&m<0&&!e.params.loop)&&(m<0&&(m=0),H())},Y=()=>{e.isEnd&&m<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(x=new Date().getTime(),j?(j=!1,P(m)):P(),e.autoplay.paused=!1,o("autoplayResume"))},F=()=>{if(e.destroyed||!e.autoplay.running)return;const W=Bn();W.visibilityState==="hidden"&&(j=!0,$(!0)),W.visibilityState==="visible"&&Y()},te=W=>{W.pointerType==="mouse"&&(j=!0,T=!0,!(e.animating||e.autoplay.paused)&&$(!0))},ie=W=>{W.pointerType==="mouse"&&(T=!1,e.autoplay.paused&&Y())},oe=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",te),e.el.addEventListener("pointerleave",ie))},re=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",te),e.el.removeEventListener("pointerleave",ie))},B=()=>{Bn().addEventListener("visibilitychange",F)},K=()=>{Bn().removeEventListener("visibilitychange",F)};r("init",()=>{e.params.autoplay.enabled&&(oe(),B(),k())}),r("destroy",()=>{re(),K(),e.autoplay.running&&_()}),r("_freeModeStaticRelease",()=>{(b||j)&&Y()}),r("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():$(!0,!0)}),r("beforeTransitionStart",(W,ee,H)=>{e.destroyed||!e.autoplay.running||(H||!e.params.autoplay.disableOnInteraction?$(!0,!0):_())}),r("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}S=!0,b=!1,j=!1,E=setTimeout(()=>{j=!0,b=!0,$(!0)},200)}}),r("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!S)){if(clearTimeout(E),clearTimeout(u),e.params.autoplay.disableOnInteraction){b=!1,S=!1;return}b&&e.params.cssMode&&Y(),b=!1,S=!1}}),r("slideChange",()=>{e.destroyed||!e.autoplay.running||(O=!0)}),Object.assign(e.autoplay,{start:k,stop:_,pause:$,resume:Y})}let n0;function fL(){const t=Tt(),e=Bn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function av(){return n0||(n0=fL()),n0}let i0;function hL(t){let{userAgent:e}=t===void 0?{}:t;const i=av(),r=Tt(),o=r.navigator.platform,l=e||r.navigator.userAgent,u={ios:!1,android:!1},d=r.screen.width,f=r.screen.height,p=l.match(/(Android);?[\s\/]+([\d.]+)?/);let m=l.match(/(iPad).*OS\s([\d_]+)/);const x=l.match(/(iPod)(.*OS\s([\d_]+))?/),v=!m&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),S=o==="Win32";let b=o==="MacIntel";const E=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!m&&b&&i.touch&&E.indexOf(`${d}x${f}`)>=0&&(m=l.match(/(Version)\/([\d.]+)/),m||(m=[0,1,"13_0_0"]),b=!1),p&&!S&&(u.os="android",u.android=!0),(m||v||x)&&(u.os="ios",u.ios=!0),u}function rv(t){return t===void 0&&(t={}),i0||(i0=hL(t)),i0}let a0;function pL(){const t=Tt(),e=rv();let i=!1;function r(){const d=t.navigator.userAgent.toLowerCase();return d.indexOf("safari")>=0&&d.indexOf("chrome")<0&&d.indexOf("android")<0}if(r()){const d=String(t.navigator.userAgent);if(d.includes("Version/")){const[f,p]=d.split("Version/")[1].split(" ")[0].split(".").map(m=>Number(m));i=f<16||f===16&&p<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),l=r(),u=l||o&&e.ios;return{isSafari:i||l,needPerspectiveFix:i,need3dFix:u,isWebView:o}}function sv(){return a0||(a0=pL()),a0}function mL(t){let{swiper:e,on:i,emit:r}=t;const o=Tt();let l=null,u=null;const d=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},f=()=>{!e||e.destroyed||!e.initialized||(l=new ResizeObserver(x=>{u=o.requestAnimationFrame(()=>{const{width:v,height:S}=e;let b=v,E=S;x.forEach(O=>{let{contentBoxSize:j,contentRect:T,target:C}=O;C&&C!==e.el||(b=T?T.width:(j[0]||j).inlineSize,E=T?T.height:(j[0]||j).blockSize)}),(b!==v||E!==S)&&d()})}),l.observe(e.el))},p=()=>{u&&o.cancelAnimationFrame(u),l&&l.unobserve&&e.el&&(l.unobserve(e.el),l=null)},m=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};i("init",()=>{if(e.params.resizeObserver&&typeof o.ResizeObserver<"u"){f();return}o.addEventListener("resize",d),o.addEventListener("orientationchange",m)}),i("destroy",()=>{p(),o.removeEventListener("resize",d),o.removeEventListener("orientationchange",m)})}function gL(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l=[],u=Tt(),d=function(m,x){x===void 0&&(x={});const v=u.MutationObserver||u.WebkitMutationObserver,S=new v(b=>{if(e.__preventObserver__)return;if(b.length===1){o("observerUpdate",b[0]);return}const E=function(){o("observerUpdate",b[0])};u.requestAnimationFrame?u.requestAnimationFrame(E):u.setTimeout(E,0)});S.observe(m,{attributes:typeof x.attributes>"u"?!0:x.attributes,childList:e.isElement||(typeof x.childList>"u"?!0:x).childList,characterData:typeof x.characterData>"u"?!0:x.characterData}),l.push(S)},f=()=>{if(e.params.observer){if(e.params.observeParents){const m=tv(e.hostEl);for(let x=0;x<m.length;x+=1)d(m[x])}d(e.hostEl,{childList:e.params.observeSlideChildren}),d(e.wrapperEl,{attributes:!1})}},p=()=>{l.forEach(m=>{m.disconnect()}),l.splice(0,l.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",f),r("destroy",p)}var xL={on(t,e,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const o=i?"unshift":"push";return t.split(" ").forEach(l=>{r.eventsListeners[l]||(r.eventsListeners[l]=[]),r.eventsListeners[l][o](e)}),r},once(t,e,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function o(){r.off(t,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];e.apply(r,u)}return o.__emitterProxy=e,r.on(t,o,i)},onAny(t,e){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;const r=e?"unshift":"push";return i.eventsAnyListeners.indexOf(t)<0&&i.eventsAnyListeners[r](t),i},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const i=e.eventsAnyListeners.indexOf(t);return i>=0&&e.eventsAnyListeners.splice(i,1),e},off(t,e){const i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?i.eventsListeners[r]=[]:i.eventsListeners[r]&&i.eventsListeners[r].forEach((o,l)=>{(o===e||o.__emitterProxy&&o.__emitterProxy===e)&&i.eventsListeners[r].splice(l,1)})}),i},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,i,r;for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return typeof l[0]=="string"||Array.isArray(l[0])?(e=l[0],i=l.slice(1,l.length),r=t):(e=l[0].events,i=l[0].data,r=l[0].context||t),i.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(f=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(p=>{p.apply(r,[f,...i])}),t.eventsListeners&&t.eventsListeners[f]&&t.eventsListeners[f].forEach(p=>{p.apply(r,i)})}),t}};function yL(){const t=this;let e,i;const r=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?i=t.params.height:i=r.clientHeight,!(e===0&&t.isHorizontal()||i===0&&t.isVertical())&&(e=e-parseInt(Bi(r,"padding-left")||0,10)-parseInt(Bi(r,"padding-right")||0,10),i=i-parseInt(Bi(r,"padding-top")||0,10)-parseInt(Bi(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Object.assign(t,{width:e,height:i,size:t.isHorizontal()?e:i}))}function vL(){const t=this;function e(Y,F){return parseFloat(Y.getPropertyValue(t.getDirectionLabel(F))||0)}const i=t.params,{wrapperEl:r,slidesEl:o,size:l,rtlTranslate:u,wrongRTL:d}=t,f=t.virtual&&i.virtual.enabled,p=f?t.virtual.slides.length:t.slides.length,m=Hn(o,`.${t.params.slideClass}, swiper-slide`),x=f?t.virtual.slides.length:m.length;let v=[];const S=[],b=[];let E=i.slidesOffsetBefore;typeof E=="function"&&(E=i.slidesOffsetBefore.call(t));let O=i.slidesOffsetAfter;typeof O=="function"&&(O=i.slidesOffsetAfter.call(t));const j=t.snapGrid.length,T=t.slidesGrid.length;let C=i.spaceBetween,D=-E,L=0,P=0;if(typeof l>"u")return;typeof C=="string"&&C.indexOf("%")>=0?C=parseFloat(C.replace("%",""))/100*l:typeof C=="string"&&(C=parseFloat(C)),t.virtualSize=-C,m.forEach(Y=>{u?Y.style.marginLeft="":Y.style.marginRight="",Y.style.marginBottom="",Y.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(Wl(r,"--swiper-centered-offset-before",""),Wl(r,"--swiper-centered-offset-after",""));const k=i.grid&&i.grid.rows>1&&t.grid;k?t.grid.initSlides(m):t.grid&&t.grid.unsetSlides();let _;const $=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(Y=>typeof i.breakpoints[Y].slidesPerView<"u").length>0;for(let Y=0;Y<x;Y+=1){_=0;let F;if(m[Y]&&(F=m[Y]),k&&t.grid.updateSlide(Y,F,m),!(m[Y]&&Bi(F,"display")==="none")){if(i.slidesPerView==="auto"){$&&(m[Y].style[t.getDirectionLabel("width")]="");const te=getComputedStyle(F),ie=F.style.transform,oe=F.style.webkitTransform;if(ie&&(F.style.transform="none"),oe&&(F.style.webkitTransform="none"),i.roundLengths)_=t.isHorizontal()?uh(F,"width"):uh(F,"height");else{const re=e(te,"width"),B=e(te,"padding-left"),K=e(te,"padding-right"),W=e(te,"margin-left"),ee=e(te,"margin-right"),H=te.getPropertyValue("box-sizing");if(H&&H==="border-box")_=re+W+ee;else{const{clientWidth:Z,offsetWidth:ne}=F;_=re+B+K+W+ee+(ne-Z)}}ie&&(F.style.transform=ie),oe&&(F.style.webkitTransform=oe),i.roundLengths&&(_=Math.floor(_))}else _=(l-(i.slidesPerView-1)*C)/i.slidesPerView,i.roundLengths&&(_=Math.floor(_)),m[Y]&&(m[Y].style[t.getDirectionLabel("width")]=`${_}px`);m[Y]&&(m[Y].swiperSlideSize=_),b.push(_),i.centeredSlides?(D=D+_/2+L/2+C,L===0&&Y!==0&&(D=D-l/2-C),Y===0&&(D=D-l/2-C),Math.abs(D)<1/1e3&&(D=0),i.roundLengths&&(D=Math.floor(D)),P%i.slidesPerGroup===0&&v.push(D),S.push(D)):(i.roundLengths&&(D=Math.floor(D)),(P-Math.min(t.params.slidesPerGroupSkip,P))%t.params.slidesPerGroup===0&&v.push(D),S.push(D),D=D+_+C),t.virtualSize+=_+C,L=_,P+=1}}if(t.virtualSize=Math.max(t.virtualSize,l)+O,u&&d&&(i.effect==="slide"||i.effect==="coverflow")&&(r.style.width=`${t.virtualSize+C}px`),i.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+C}px`),k&&t.grid.updateWrapperSize(_,v),!i.centeredSlides){const Y=[];for(let F=0;F<v.length;F+=1){let te=v[F];i.roundLengths&&(te=Math.floor(te)),v[F]<=t.virtualSize-l&&Y.push(te)}v=Y,Math.floor(t.virtualSize-l)-Math.floor(v[v.length-1])>1&&v.push(t.virtualSize-l)}if(f&&i.loop){const Y=b[0]+C;if(i.slidesPerGroup>1){const F=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/i.slidesPerGroup),te=Y*i.slidesPerGroup;for(let ie=0;ie<F;ie+=1)v.push(v[v.length-1]+te)}for(let F=0;F<t.virtual.slidesBefore+t.virtual.slidesAfter;F+=1)i.slidesPerGroup===1&&v.push(v[v.length-1]+Y),S.push(S[S.length-1]+Y),t.virtualSize+=Y}if(v.length===0&&(v=[0]),C!==0){const Y=t.isHorizontal()&&u?"marginLeft":t.getDirectionLabel("marginRight");m.filter((F,te)=>!i.cssMode||i.loop?!0:te!==m.length-1).forEach(F=>{F.style[Y]=`${C}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let Y=0;b.forEach(te=>{Y+=te+(C||0)}),Y-=C;const F=Y>l?Y-l:0;v=v.map(te=>te<=0?-E:te>F?F+O:te)}if(i.centerInsufficientSlides){let Y=0;b.forEach(te=>{Y+=te+(C||0)}),Y-=C;const F=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(Y+F<l){const te=(l-Y-F)/2;v.forEach((ie,oe)=>{v[oe]=ie-te}),S.forEach((ie,oe)=>{S[oe]=ie+te})}}if(Object.assign(t,{slides:m,snapGrid:v,slidesGrid:S,slidesSizesGrid:b}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Wl(r,"--swiper-centered-offset-before",`${-v[0]}px`),Wl(r,"--swiper-centered-offset-after",`${t.size/2-b[b.length-1]/2}px`);const Y=-t.snapGrid[0],F=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(te=>te+Y),t.slidesGrid=t.slidesGrid.map(te=>te+F)}if(x!==p&&t.emit("slidesLengthChange"),v.length!==j&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),S.length!==T&&t.emit("slidesGridLengthChange"),i.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!f&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const Y=`${i.containerModifierClass}backface-hidden`,F=t.el.classList.contains(Y);x<=i.maxBackfaceHiddenSlides?F||t.el.classList.add(Y):F&&t.el.classList.remove(Y)}}function wL(t){const e=this,i=[],r=e.virtual&&e.params.virtual.enabled;let o=0,l;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const u=d=>r?e.slides[e.getSlideIndexByData(d)]:e.slides[d];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(d=>{i.push(d)});else for(l=0;l<Math.ceil(e.params.slidesPerView);l+=1){const d=e.activeIndex+l;if(d>e.slides.length&&!r)break;i.push(u(d))}else i.push(u(e.activeIndex));for(l=0;l<i.length;l+=1)if(typeof i[l]<"u"){const d=i[l].offsetHeight;o=d>o?d:o}(o||o===0)&&(e.wrapperEl.style.height=`${o}px`)}function bL(){const t=this,e=t.slides,i=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(t.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-i-t.cssOverflowAdjustment()}const tx=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function SL(t){t===void 0&&(t=this&&this.translate||0);const e=this,i=e.params,{slides:r,rtlTranslate:o,snapGrid:l}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let u=-t;o&&(u=t),e.visibleSlidesIndexes=[],e.visibleSlides=[];let d=i.spaceBetween;typeof d=="string"&&d.indexOf("%")>=0?d=parseFloat(d.replace("%",""))/100*e.size:typeof d=="string"&&(d=parseFloat(d));for(let f=0;f<r.length;f+=1){const p=r[f];let m=p.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(m-=r[0].swiperSlideOffset);const x=(u+(i.centeredSlides?e.minTranslate():0)-m)/(p.swiperSlideSize+d),v=(u-l[0]+(i.centeredSlides?e.minTranslate():0)-m)/(p.swiperSlideSize+d),S=-(u-m),b=S+e.slidesSizesGrid[f],E=S>=0&&S<=e.size-e.slidesSizesGrid[f],O=S>=0&&S<e.size-1||b>1&&b<=e.size||S<=0&&b>=e.size;O&&(e.visibleSlides.push(p),e.visibleSlidesIndexes.push(f)),tx(p,O,i.slideVisibleClass),tx(p,E,i.slideFullyVisibleClass),p.progress=o?-x:x,p.originalProgress=o?-v:v}}function CL(t){const e=this;if(typeof t>"u"){const m=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*m||0}const i=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:o,isBeginning:l,isEnd:u,progressLoop:d}=e;const f=l,p=u;if(r===0)o=0,l=!0,u=!0;else{o=(t-e.minTranslate())/r;const m=Math.abs(t-e.minTranslate())<1,x=Math.abs(t-e.maxTranslate())<1;l=m||o<=0,u=x||o>=1,m&&(o=0),x&&(o=1)}if(i.loop){const m=e.getSlideIndexByData(0),x=e.getSlideIndexByData(e.slides.length-1),v=e.slidesGrid[m],S=e.slidesGrid[x],b=e.slidesGrid[e.slidesGrid.length-1],E=Math.abs(t);E>=v?d=(E-v)/b:d=(E+b-S)/b,d>1&&(d-=1)}Object.assign(e,{progress:o,progressLoop:d,isBeginning:l,isEnd:u}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&e.updateSlidesProgress(t),l&&!f&&e.emit("reachBeginning toEdge"),u&&!p&&e.emit("reachEnd toEdge"),(f&&!l||p&&!u)&&e.emit("fromEdge"),e.emit("progress",o)}const r0=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function TL(){const t=this,{slides:e,params:i,slidesEl:r,activeIndex:o}=t,l=t.virtual&&i.virtual.enabled,u=t.grid&&i.grid&&i.grid.rows>1,d=x=>Hn(r,`.${i.slideClass}${x}, swiper-slide${x}`)[0];let f,p,m;if(l)if(i.loop){let x=o-t.virtual.slidesBefore;x<0&&(x=t.virtual.slides.length+x),x>=t.virtual.slides.length&&(x-=t.virtual.slides.length),f=d(`[data-swiper-slide-index="${x}"]`)}else f=d(`[data-swiper-slide-index="${o}"]`);else u?(f=e.find(x=>x.column===o),m=e.find(x=>x.column===o+1),p=e.find(x=>x.column===o-1)):f=e[o];f&&(u||(m=uL(f,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!m&&(m=e[0]),p=cL(f,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!p===0&&(p=e[e.length-1]))),e.forEach(x=>{r0(x,x===f,i.slideActiveClass),r0(x,x===m,i.slideNextClass),r0(x,x===p,i.slidePrevClass)}),t.emitSlidesClasses()}const vc=(t,e)=>{if(!t||t.destroyed||!t.params)return;const i=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,r=e.closest(i());if(r){let o=r.querySelector(`.${t.params.lazyPreloaderClass}`);!o&&t.isElement&&(r.shadowRoot?o=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(o=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},s0=(t,e)=>{if(!t.slides[e])return;const i=t.slides[e].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},dh=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const i=t.slides.length;if(!i||!e||e<0)return;e=Math.min(e,i);const r=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),o=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const u=o,d=[u-e];d.push(...Array.from({length:e}).map((f,p)=>u+r+p)),t.slides.forEach((f,p)=>{d.includes(f.column)&&s0(t,p)});return}const l=o+r-1;if(t.params.rewind||t.params.loop)for(let u=o-e;u<=l+e;u+=1){const d=(u%i+i)%i;(d<o||d>l)&&s0(t,d)}else for(let u=Math.max(o-e,0);u<=Math.min(l+e,i-1);u+=1)u!==o&&(u>l||u<o)&&s0(t,u)};function EL(t){const{slidesGrid:e,params:i}=t,r=t.rtlTranslate?t.translate:-t.translate;let o;for(let l=0;l<e.length;l+=1)typeof e[l+1]<"u"?r>=e[l]&&r<e[l+1]-(e[l+1]-e[l])/2?o=l:r>=e[l]&&r<e[l+1]&&(o=l+1):r>=e[l]&&(o=l);return i.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function ML(t){const e=this,i=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:o,activeIndex:l,realIndex:u,snapIndex:d}=e;let f=t,p;const m=S=>{let b=S-e.virtual.slidesBefore;return b<0&&(b=e.virtual.slides.length+b),b>=e.virtual.slides.length&&(b-=e.virtual.slides.length),b};if(typeof f>"u"&&(f=EL(e)),r.indexOf(i)>=0)p=r.indexOf(i);else{const S=Math.min(o.slidesPerGroupSkip,f);p=S+Math.floor((f-S)/o.slidesPerGroup)}if(p>=r.length&&(p=r.length-1),f===l&&!e.params.loop){p!==d&&(e.snapIndex=p,e.emit("snapIndexChange"));return}if(f===l&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=m(f);return}const x=e.grid&&o.grid&&o.grid.rows>1;let v;if(e.virtual&&o.virtual.enabled&&o.loop)v=m(f);else if(x){const S=e.slides.find(E=>E.column===f);let b=parseInt(S.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(e.slides.indexOf(S),0)),v=Math.floor(b/o.grid.rows)}else if(e.slides[f]){const S=e.slides[f].getAttribute("data-swiper-slide-index");S?v=parseInt(S,10):v=f}else v=f;Object.assign(e,{previousSnapIndex:d,snapIndex:p,previousRealIndex:u,realIndex:v,previousIndex:l,activeIndex:f}),e.initialized&&dh(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(u!==v&&e.emit("realIndexChange"),e.emit("slideChange"))}function AL(t,e){const i=this,r=i.params;let o=t.closest(`.${r.slideClass}, swiper-slide`);!o&&i.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(d=>{!o&&d.matches&&d.matches(`.${r.slideClass}, swiper-slide`)&&(o=d)});let l=!1,u;if(o){for(let d=0;d<i.slides.length;d+=1)if(i.slides[d]===o){l=!0,u=d;break}}if(o&&l)i.clickedSlide=o,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=u;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}r.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var jL={updateSize:yL,updateSlides:vL,updateAutoHeight:wL,updateSlidesOffset:bL,updateSlidesProgress:SL,updateProgress:CL,updateSlidesClasses:TL,updateActiveIndex:ML,updateClickedSlide:AL};function LL(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:i,rtlTranslate:r,translate:o,wrapperEl:l}=e;if(i.virtualTranslate)return r?-o:o;if(i.cssMode)return o;let u=rL(l,t);return u+=e.cssOverflowAdjustment(),r&&(u=-u),u||0}function OL(t,e){const i=this,{rtlTranslate:r,params:o,wrapperEl:l,progress:u}=i;let d=0,f=0;const p=0;i.isHorizontal()?d=r?-t:t:f=t,o.roundLengths&&(d=Math.floor(d),f=Math.floor(f)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?d:f,o.cssMode?l[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-d:-f:o.virtualTranslate||(i.isHorizontal()?d-=i.cssOverflowAdjustment():f-=i.cssOverflowAdjustment(),l.style.transform=`translate3d(${d}px, ${f}px, ${p}px)`);let m;const x=i.maxTranslate()-i.minTranslate();x===0?m=0:m=(t-i.minTranslate())/x,m!==u&&i.updateProgress(t),i.emit("setTranslate",i.translate,e)}function RL(){return-this.snapGrid[0]}function DL(){return-this.snapGrid[this.snapGrid.length-1]}function HL(t,e,i,r,o){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),i===void 0&&(i=!0),r===void 0&&(r=!0);const l=this,{params:u,wrapperEl:d}=l;if(l.animating&&u.preventInteractionOnTransition)return!1;const f=l.minTranslate(),p=l.maxTranslate();let m;if(r&&t>f?m=f:r&&t<p?m=p:m=t,l.updateProgress(m),u.cssMode){const x=l.isHorizontal();if(e===0)d[x?"scrollLeft":"scrollTop"]=-m;else{if(!l.support.smoothScroll)return ev({swiper:l,targetPosition:-m,side:x?"left":"top"}),!0;d.scrollTo({[x?"left":"top"]:-m,behavior:"smooth"})}return!0}return e===0?(l.setTransition(0),l.setTranslate(m),i&&(l.emit("beforeTransitionStart",e,o),l.emit("transitionEnd"))):(l.setTransition(e),l.setTranslate(m),i&&(l.emit("beforeTransitionStart",e,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(v){!l||l.destroyed||v.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,i&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var VL={getTranslate:LL,setTranslate:OL,minTranslate:RL,maxTranslate:DL,translateTo:HL};function kL(t,e){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${t}ms`,i.wrapperEl.style.transitionDelay=t===0?"0ms":""),i.emit("setTransition",t,e)}function ov(t){let{swiper:e,runCallbacks:i,direction:r,step:o}=t;const{activeIndex:l,previousIndex:u}=e;let d=r;d||(l>u?d="next":l<u?d="prev":d="reset"),e.emit(`transition${o}`),i&&d==="reset"?e.emit(`slideResetTransition${o}`):i&&l!==u&&(e.emit(`slideChangeTransition${o}`),d==="next"?e.emit(`slideNextTransition${o}`):e.emit(`slidePrevTransition${o}`))}function zL(t,e){t===void 0&&(t=!0);const i=this,{params:r}=i;r.cssMode||(r.autoHeight&&i.updateAutoHeight(),ov({swiper:i,runCallbacks:t,direction:e,step:"Start"}))}function PL(t,e){t===void 0&&(t=!0);const i=this,{params:r}=i;i.animating=!1,!r.cssMode&&(i.setTransition(0),ov({swiper:i,runCallbacks:t,direction:e,step:"End"}))}var NL={setTransition:kL,transitionStart:zL,transitionEnd:PL};function BL(t,e,i,r,o){t===void 0&&(t=0),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));const l=this;let u=t;u<0&&(u=0);const{params:d,snapGrid:f,slidesGrid:p,previousIndex:m,activeIndex:x,rtlTranslate:v,wrapperEl:S,enabled:b}=l;if(!b&&!r&&!o||l.destroyed||l.animating&&d.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=l.params.speed);const E=Math.min(l.params.slidesPerGroupSkip,u);let O=E+Math.floor((u-E)/l.params.slidesPerGroup);O>=f.length&&(O=f.length-1);const j=-f[O];if(d.normalizeSlideIndex)for(let k=0;k<p.length;k+=1){const _=-Math.floor(j*100),$=Math.floor(p[k]*100),Y=Math.floor(p[k+1]*100);typeof p[k+1]<"u"?_>=$&&_<Y-(Y-$)/2?u=k:_>=$&&_<Y&&(u=k+1):_>=$&&(u=k)}if(l.initialized&&u!==x&&(!l.allowSlideNext&&(v?j>l.translate&&j>l.minTranslate():j<l.translate&&j<l.minTranslate())||!l.allowSlidePrev&&j>l.translate&&j>l.maxTranslate()&&(x||0)!==u))return!1;u!==(m||0)&&i&&l.emit("beforeSlideChangeStart"),l.updateProgress(j);let T;u>x?T="next":u<x?T="prev":T="reset";const C=l.virtual&&l.params.virtual.enabled;if(!(C&&o)&&(v&&-j===l.translate||!v&&j===l.translate))return l.updateActiveIndex(u),d.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),d.effect!=="slide"&&l.setTranslate(j),T!=="reset"&&(l.transitionStart(i,T),l.transitionEnd(i,T)),!1;if(d.cssMode){const k=l.isHorizontal(),_=v?j:-j;if(e===0)C&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),C&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{S[k?"scrollLeft":"scrollTop"]=_})):S[k?"scrollLeft":"scrollTop"]=_,C&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return ev({swiper:l,targetPosition:_,side:k?"left":"top"}),!0;S.scrollTo({[k?"left":"top"]:_,behavior:"smooth"})}return!0}const P=sv().isSafari;return C&&!o&&P&&l.isElement&&l.virtual.update(!1,!1,u),l.setTransition(e),l.setTranslate(j),l.updateActiveIndex(u),l.updateSlidesClasses(),l.emit("beforeTransitionStart",e,r),l.transitionStart(i,T),e===0?l.transitionEnd(i,T):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(_){!l||l.destroyed||_.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(i,T))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function $L(t,e,i,r){t===void 0&&(t=0),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let u=t;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)u=u+o.virtual.slidesBefore;else{let d;if(l){const v=u*o.params.grid.rows;d=o.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===v).column}else d=o.getSlideIndexByData(u);const f=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:p}=o.params;let m=o.params.slidesPerView;m==="auto"?m=o.slidesPerViewDynamic():(m=Math.ceil(parseFloat(o.params.slidesPerView,10)),p&&m%2===0&&(m=m+1));let x=f-d<m;if(p&&(x=x||d<Math.ceil(m/2)),r&&p&&o.params.slidesPerView!=="auto"&&!l&&(x=!1),x){const v=p?d<o.activeIndex?"prev":"next":d-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?d+1:d-f+1,slideRealIndex:v==="next"?o.realIndex:void 0})}if(l){const v=u*o.params.grid.rows;u=o.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===v).column}else u=o.getSlideIndexByData(u)}return requestAnimationFrame(()=>{o.slideTo(u,e,i,r)}),o}function _L(t,e,i){e===void 0&&(e=!0);const r=this,{enabled:o,params:l,animating:u}=r;if(!o||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);let d=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(d=Math.max(r.slidesPerViewDynamic("current",!0),1));const f=r.activeIndex<l.slidesPerGroupSkip?1:d,p=r.virtual&&l.virtual.enabled;if(l.loop){if(u&&!p&&l.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+f,t,e,i)}),!0}return l.rewind&&r.isEnd?r.slideTo(0,t,e,i):r.slideTo(r.activeIndex+f,t,e,i)}function UL(t,e,i){e===void 0&&(e=!0);const r=this,{params:o,snapGrid:l,slidesGrid:u,rtlTranslate:d,enabled:f,animating:p}=r;if(!f||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);const m=r.virtual&&o.virtual.enabled;if(o.loop){if(p&&!m&&o.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const x=d?r.translate:-r.translate;function v(T){return T<0?-Math.floor(Math.abs(T)):Math.floor(T)}const S=v(x),b=l.map(T=>v(T)),E=o.freeMode&&o.freeMode.enabled;let O=l[b.indexOf(S)-1];if(typeof O>"u"&&(o.cssMode||E)){let T;l.forEach((C,D)=>{S>=C&&(T=D)}),typeof T<"u"&&(O=E?l[T]:l[T>0?T-1:T])}let j=0;if(typeof O<"u"&&(j=u.indexOf(O),j<0&&(j=r.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(j=j-r.slidesPerViewDynamic("previous",!0)+1,j=Math.max(j,0))),o.rewind&&r.isBeginning){const T=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(T,t,e,i)}else if(o.loop&&r.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(j,t,e,i)}),!0;return r.slideTo(j,t,e,i)}function GL(t,e,i){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof t>"u"&&(t=r.params.speed),r.slideTo(r.activeIndex,t,e,i)}function IL(t,e,i,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);let l=o.activeIndex;const u=Math.min(o.params.slidesPerGroupSkip,l),d=u+Math.floor((l-u)/o.params.slidesPerGroup),f=o.rtlTranslate?o.translate:-o.translate;if(f>=o.snapGrid[d]){const p=o.snapGrid[d],m=o.snapGrid[d+1];f-p>(m-p)*r&&(l+=o.params.slidesPerGroup)}else{const p=o.snapGrid[d-1],m=o.snapGrid[d];f-p<=(m-p)*r&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,t,e,i)}function qL(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:i}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let o=t.getSlideIndexWhenGrid(t.clickedIndex),l;const u=t.isElement?"swiper-slide":`.${e.slideClass}`,d=t.grid&&t.params.grid&&t.params.grid.rows>1;if(e.loop){if(t.animating)return;l=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?t.slideToLoop(l):o>(d?(t.slides.length-r)/2-(t.params.grid.rows-1):t.slides.length-r)?(t.loopFix(),o=t.getSlideIndex(Hn(i,`${u}[data-swiper-slide-index="${l}"]`)[0]),Oc(()=>{t.slideTo(o)})):t.slideTo(o)}else t.slideTo(o)}var YL={slideTo:BL,slideToLoop:$L,slideNext:_L,slidePrev:UL,slideReset:GL,slideToClosest:IL,slideToClickedSlide:qL};function FL(t,e){const i=this,{params:r,slidesEl:o}=i;if(!r.loop||i.virtual&&i.params.virtual.enabled)return;const l=()=>{Hn(o,`.${r.slideClass}, swiper-slide`).forEach((S,b)=>{S.setAttribute("data-swiper-slide-index",b)})},u=()=>{const v=Hn(o,`.${r.slideBlankClass}`);v.forEach(S=>{S.remove()}),v.length>0&&(i.recalcSlides(),i.updateSlides())},d=i.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||d)&&u();const f=r.slidesPerGroup*(d?r.grid.rows:1),p=i.slides.length%f!==0,m=d&&i.slides.length%r.grid.rows!==0,x=v=>{for(let S=0;S<v;S+=1){const b=i.isElement?Dc("swiper-slide",[r.slideBlankClass]):Dc("div",[r.slideClass,r.slideBlankClass]);i.slidesEl.append(b)}};if(p){if(r.loopAddBlankSlides){const v=f-i.slides.length%f;x(v),i.recalcSlides(),i.updateSlides()}else Rc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(m){if(r.loopAddBlankSlides){const v=r.grid.rows-i.slides.length%r.grid.rows;x(v),i.recalcSlides(),i.updateSlides()}else Rc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();i.loopFix({slideRealIndex:t,direction:r.centeredSlides?void 0:"next",initial:e})}function ZL(t){let{slideRealIndex:e,slideTo:i=!0,direction:r,setTranslate:o,activeSlideIndex:l,initial:u,byController:d,byMousewheel:f}=t===void 0?{}:t;const p=this;if(!p.params.loop)return;p.emit("beforeLoopFix");const{slides:m,allowSlidePrev:x,allowSlideNext:v,slidesEl:S,params:b}=p,{centeredSlides:E,initialSlide:O}=b;if(p.allowSlidePrev=!0,p.allowSlideNext=!0,p.virtual&&b.virtual.enabled){i&&(!b.centeredSlides&&p.snapIndex===0?p.slideTo(p.virtual.slides.length,0,!1,!0):b.centeredSlides&&p.snapIndex<b.slidesPerView?p.slideTo(p.virtual.slides.length+p.snapIndex,0,!1,!0):p.snapIndex===p.snapGrid.length-1&&p.slideTo(p.virtual.slidesBefore,0,!1,!0)),p.allowSlidePrev=x,p.allowSlideNext=v,p.emit("loopFix");return}let j=b.slidesPerView;j==="auto"?j=p.slidesPerViewDynamic():(j=Math.ceil(parseFloat(b.slidesPerView,10)),E&&j%2===0&&(j=j+1));const T=b.slidesPerGroupAuto?j:b.slidesPerGroup;let C=E?Math.max(T,Math.ceil(j/2)):T;C%T!==0&&(C+=T-C%T),C+=b.loopAdditionalSlides,p.loopedSlides=C;const D=p.grid&&b.grid&&b.grid.rows>1;m.length<j+C||p.params.effect==="cards"&&m.length<j+C*2?Rc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):D&&b.grid.fill==="row"&&Rc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const L=[],P=[],k=D?Math.ceil(m.length/b.grid.rows):m.length,_=u&&k-O<j&&!E;let $=_?O:p.activeIndex;typeof l>"u"?l=p.getSlideIndex(m.find(B=>B.classList.contains(b.slideActiveClass))):$=l;const Y=r==="next"||!r,F=r==="prev"||!r;let te=0,ie=0;const re=(D?m[l].column:l)+(E&&typeof o>"u"?-j/2+.5:0);if(re<C){te=Math.max(C-re,T);for(let B=0;B<C-re;B+=1){const K=B-Math.floor(B/k)*k;if(D){const W=k-K-1;for(let ee=m.length-1;ee>=0;ee-=1)m[ee].column===W&&L.push(ee)}else L.push(k-K-1)}}else if(re+j>k-C){ie=Math.max(re-(k-C*2),T),_&&(ie=Math.max(ie,j-k+O+1));for(let B=0;B<ie;B+=1){const K=B-Math.floor(B/k)*k;D?m.forEach((W,ee)=>{W.column===K&&P.push(ee)}):P.push(K)}}if(p.__preventObserver__=!0,requestAnimationFrame(()=>{p.__preventObserver__=!1}),p.params.effect==="cards"&&m.length<j+C*2&&(P.includes(l)&&P.splice(P.indexOf(l),1),L.includes(l)&&L.splice(L.indexOf(l),1)),F&&L.forEach(B=>{m[B].swiperLoopMoveDOM=!0,S.prepend(m[B]),m[B].swiperLoopMoveDOM=!1}),Y&&P.forEach(B=>{m[B].swiperLoopMoveDOM=!0,S.append(m[B]),m[B].swiperLoopMoveDOM=!1}),p.recalcSlides(),b.slidesPerView==="auto"?p.updateSlides():D&&(L.length>0&&F||P.length>0&&Y)&&p.slides.forEach((B,K)=>{p.grid.updateSlide(K,B,p.slides)}),b.watchSlidesProgress&&p.updateSlidesOffset(),i){if(L.length>0&&F){if(typeof e>"u"){const B=p.slidesGrid[$],W=p.slidesGrid[$+te]-B;f?p.setTranslate(p.translate-W):(p.slideTo($+Math.ceil(te),0,!1,!0),o&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-W,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-W))}else if(o){const B=D?L.length/b.grid.rows:L.length;p.slideTo(p.activeIndex+B,0,!1,!0),p.touchEventsData.currentTranslate=p.translate}}else if(P.length>0&&Y)if(typeof e>"u"){const B=p.slidesGrid[$],W=p.slidesGrid[$-ie]-B;f?p.setTranslate(p.translate-W):(p.slideTo($-ie,0,!1,!0),o&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-W,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-W))}else{const B=D?P.length/b.grid.rows:P.length;p.slideTo(p.activeIndex-B,0,!1,!0)}}if(p.allowSlidePrev=x,p.allowSlideNext=v,p.controller&&p.controller.control&&!d){const B={slideRealIndex:e,direction:r,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(p.controller.control)?p.controller.control.forEach(K=>{!K.destroyed&&K.params.loop&&K.loopFix({...B,slideTo:K.params.slidesPerView===b.slidesPerView?i:!1})}):p.controller.control instanceof p.constructor&&p.controller.control.params.loop&&p.controller.control.loopFix({...B,slideTo:p.controller.control.params.slidesPerView===b.slidesPerView?i:!1})}p.emit("loopFix")}function XL(){const t=this,{params:e,slidesEl:i}=t;if(!e.loop||!i||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const r=[];t.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;r[l]=o}),t.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),r.forEach(o=>{i.append(o)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var KL={loopCreate:FL,loopFix:ZL,loopDestroy:XL};function WL(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const i=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function QL(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var JL={setGrabCursor:WL,unsetGrabCursor:QL};function eO(t,e){e===void 0&&(e=this);function i(r){if(!r||r===Bn()||r===Tt())return null;r.assignedSlot&&(r=r.assignedSlot);const o=r.closest(t);return!o&&!r.getRootNode?null:o||i(r.getRootNode().host)}return i(e)}function nx(t,e,i){const r=Tt(),{params:o}=t,l=o.edgeSwipeDetection,u=o.edgeSwipeThreshold;return l&&(i<=u||i>=r.innerWidth-u)?l==="prevent"?(e.preventDefault(),!0):!1:!0}function tO(t){const e=this,i=Bn();let r=t;r.originalEvent&&(r=r.originalEvent);const o=e.touchEventsData;if(r.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==r.pointerId)return;o.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(o.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){nx(e,r,r.targetTouches[0].pageX);return}const{params:l,touches:u,enabled:d}=e;if(!d||!l.simulateTouch&&r.pointerType==="mouse"||e.animating&&l.preventInteractionOnTransition)return;!e.animating&&l.cssMode&&l.loop&&e.loopFix();let f=r.target;if(l.touchEventsTarget==="wrapper"&&!lL(f,e.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||o.isTouched&&o.isMoved)return;const p=!!l.noSwipingClass&&l.noSwipingClass!=="",m=r.composedPath?r.composedPath():r.path;p&&r.target&&r.target.shadowRoot&&m&&(f=m[0]);const x=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(l.noSwiping&&(v?eO(x,f):f.closest(x))){e.allowClick=!0;return}if(l.swipeHandler&&!f.closest(l.swipeHandler))return;u.currentX=r.pageX,u.currentY=r.pageY;const S=u.currentX,b=u.currentY;if(!nx(e,r,S))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=S,u.startY=b,o.touchStartTime=ri(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let E=!0;f.matches(o.focusableElements)&&(E=!1,f.nodeName==="SELECT"&&(o.isTouched=!1)),i.activeElement&&i.activeElement.matches(o.focusableElements)&&i.activeElement!==f&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!f.matches(o.focusableElements))&&i.activeElement.blur();const O=E&&e.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||O)&&!f.isContentEditable&&r.preventDefault(),l.freeMode&&l.freeMode.enabled&&e.freeMode&&e.animating&&!l.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function nO(t){const e=Bn(),i=this,r=i.touchEventsData,{params:o,touches:l,rtlTranslate:u,enabled:d}=i;if(!d||!o.simulateTouch&&t.pointerType==="mouse")return;let f=t;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(r.touchId!==null||f.pointerId!==r.pointerId))return;let p;if(f.type==="touchmove"){if(p=[...f.changedTouches].find(L=>L.identifier===r.touchId),!p||p.identifier!==r.touchId)return}else p=f;if(!r.isTouched){r.startMoving&&r.isScrolling&&i.emit("touchMoveOpposite",f);return}const m=p.pageX,x=p.pageY;if(f.preventedByNestedSwiper){l.startX=m,l.startY=x;return}if(!i.allowTouchMove){f.target.matches(r.focusableElements)||(i.allowClick=!1),r.isTouched&&(Object.assign(l,{startX:m,startY:x,currentX:m,currentY:x}),r.touchStartTime=ri());return}if(o.touchReleaseOnEdges&&!o.loop)if(i.isVertical()){if(x<l.startY&&i.translate<=i.maxTranslate()||x>l.startY&&i.translate>=i.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(u&&(m>l.startX&&-i.translate<=i.maxTranslate()||m<l.startX&&-i.translate>=i.minTranslate()))return;if(!u&&(m<l.startX&&i.translate<=i.maxTranslate()||m>l.startX&&i.translate>=i.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(r.focusableElements)&&e.activeElement!==f.target&&f.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&f.target===e.activeElement&&f.target.matches(r.focusableElements)){r.isMoved=!0,i.allowClick=!1;return}r.allowTouchCallbacks&&i.emit("touchMove",f),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=m,l.currentY=x;const v=l.currentX-l.startX,S=l.currentY-l.startY;if(i.params.threshold&&Math.sqrt(v**2+S**2)<i.params.threshold)return;if(typeof r.isScrolling>"u"){let L;i.isHorizontal()&&l.currentY===l.startY||i.isVertical()&&l.currentX===l.startX?r.isScrolling=!1:v*v+S*S>=25&&(L=Math.atan2(Math.abs(S),Math.abs(v))*180/Math.PI,r.isScrolling=i.isHorizontal()?L>o.touchAngle:90-L>o.touchAngle)}if(r.isScrolling&&i.emit("touchMoveOpposite",f),typeof r.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(r.startMoving=!0),r.isScrolling||f.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;i.allowClick=!1,!o.cssMode&&f.cancelable&&f.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&f.stopPropagation();let b=i.isHorizontal()?v:S,E=i.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(b=Math.abs(b)*(u?1:-1),E=Math.abs(E)*(u?1:-1)),l.diff=b,b*=o.touchRatio,u&&(b=-b,E=-E);const O=i.touchesDirection;i.swipeDirection=b>0?"prev":"next",i.touchesDirection=E>0?"prev":"next";const j=i.params.loop&&!o.cssMode,T=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!r.isMoved){if(j&&T&&i.loopFix({direction:i.swipeDirection}),r.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const L=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(L)}r.allowMomentumBounce=!1,o.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",f)}if(new Date().getTime(),o._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&O!==i.touchesDirection&&j&&T&&Math.abs(b)>=1){Object.assign(l,{startX:m,startY:x,currentX:m,currentY:x,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}i.emit("sliderMove",f),r.isMoved=!0,r.currentTranslate=b+r.startTranslate;let C=!0,D=o.resistanceRatio;if(o.touchReleaseOnEdges&&(D=0),b>0?(j&&T&&r.allowThresholdMove&&r.currentTranslate>(o.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>i.minTranslate()&&(C=!1,o.resistance&&(r.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+r.startTranslate+b)**D))):b<0&&(j&&T&&r.allowThresholdMove&&r.currentTranslate<(o.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(o.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),r.currentTranslate<i.maxTranslate()&&(C=!1,o.resistance&&(r.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-r.startTranslate-b)**D))),C&&(f.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(r.currentTranslate=r.startTranslate),o.threshold>0)if(Math.abs(b)>o.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,r.currentTranslate=r.startTranslate,l.diff=i.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{r.currentTranslate=r.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&i.freeMode||o.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(r.currentTranslate),i.setTranslate(r.currentTranslate))}function iO(t){const e=this,i=e.touchEventsData;let r=t;r.originalEvent&&(r=r.originalEvent);let o;if(r.type==="touchend"||r.type==="touchcancel"){if(o=[...r.changedTouches].find(L=>L.identifier===i.touchId),!o||o.identifier!==i.touchId)return}else{if(i.touchId!==null||r.pointerId!==i.pointerId)return;o=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;i.pointerId=null,i.touchId=null;const{params:u,touches:d,rtlTranslate:f,slidesGrid:p,enabled:m}=e;if(!m||!u.simulateTouch&&r.pointerType==="mouse")return;if(i.allowTouchCallbacks&&e.emit("touchEnd",r),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&u.grabCursor&&e.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}u.grabCursor&&i.isMoved&&i.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const x=ri(),v=x-i.touchStartTime;if(e.allowClick){const L=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(L&&L[0]||r.target,L),e.emit("tap click",r),v<300&&x-i.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(i.lastClickTime=ri(),Oc(()=>{e.destroyed||(e.allowClick=!0)}),!i.isTouched||!i.isMoved||!e.swipeDirection||d.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let S;if(u.followFinger?S=f?e.translate:-e.translate:S=-i.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:S});return}const b=S>=-e.maxTranslate()&&!e.params.loop;let E=0,O=e.slidesSizesGrid[0];for(let L=0;L<p.length;L+=L<u.slidesPerGroupSkip?1:u.slidesPerGroup){const P=L<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof p[L+P]<"u"?(b||S>=p[L]&&S<p[L+P])&&(E=L,O=p[L+P]-p[L]):(b||S>=p[L])&&(E=L,O=p[p.length-1]-p[p.length-2])}let j=null,T=null;u.rewind&&(e.isBeginning?T=u.virtual&&u.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(j=0));const C=(S-p[E])/O,D=E<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(v>u.longSwipesMs){if(!u.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(C>=u.longSwipesRatio?e.slideTo(u.rewind&&e.isEnd?j:E+D):e.slideTo(E)),e.swipeDirection==="prev"&&(C>1-u.longSwipesRatio?e.slideTo(E+D):T!==null&&C<0&&Math.abs(C)>u.longSwipesRatio?e.slideTo(T):e.slideTo(E))}else{if(!u.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(E+D):e.slideTo(E):(e.swipeDirection==="next"&&e.slideTo(j!==null?j:E+D),e.swipeDirection==="prev"&&e.slideTo(T!==null?T:E))}}function ix(){const t=this,{params:e,el:i}=t;if(i&&i.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:o,snapGrid:l}=t,u=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const d=u&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!d?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!u?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=o,t.allowSlideNext=r,t.params.watchOverflow&&l!==t.snapGrid&&t.checkOverflow()}function aO(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function rO(){const t=this,{wrapperEl:e,rtlTranslate:i,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let o;const l=t.maxTranslate()-t.minTranslate();l===0?o=0:o=(t.translate-t.minTranslate())/l,o!==t.progress&&t.updateProgress(i?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function sO(t){const e=this;vc(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function oO(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const lv=(t,e)=>{const i=Bn(),{params:r,el:o,wrapperEl:l,device:u}=t,d=!!r.nested,f=e==="on"?"addEventListener":"removeEventListener",p=e;!o||typeof o=="string"||(i[f]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:d}),o[f]("touchstart",t.onTouchStart,{passive:!1}),o[f]("pointerdown",t.onTouchStart,{passive:!1}),i[f]("touchmove",t.onTouchMove,{passive:!1,capture:d}),i[f]("pointermove",t.onTouchMove,{passive:!1,capture:d}),i[f]("touchend",t.onTouchEnd,{passive:!0}),i[f]("pointerup",t.onTouchEnd,{passive:!0}),i[f]("pointercancel",t.onTouchEnd,{passive:!0}),i[f]("touchcancel",t.onTouchEnd,{passive:!0}),i[f]("pointerout",t.onTouchEnd,{passive:!0}),i[f]("pointerleave",t.onTouchEnd,{passive:!0}),i[f]("contextmenu",t.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&o[f]("click",t.onClick,!0),r.cssMode&&l[f]("scroll",t.onScroll),r.updateOnWindowResize?t[p](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",ix,!0):t[p]("observerUpdate",ix,!0),o[f]("load",t.onLoad,{capture:!0}))};function lO(){const t=this,{params:e}=t;t.onTouchStart=tO.bind(t),t.onTouchMove=nO.bind(t),t.onTouchEnd=iO.bind(t),t.onDocumentTouchStart=oO.bind(t),e.cssMode&&(t.onScroll=rO.bind(t)),t.onClick=aO.bind(t),t.onLoad=sO.bind(t),lv(t,"on")}function cO(){lv(this,"off")}var uO={attachEvents:lO,detachEvents:cO};const ax=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function dO(){const t=this,{realIndex:e,initialized:i,params:r,el:o}=t,l=r.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const u=Bn(),d=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",f=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?t.el:u.querySelector(r.breakpointsBase),p=t.getBreakpoint(l,d,f);if(!p||t.currentBreakpoint===p)return;const x=(p in l?l[p]:void 0)||t.originalParams,v=ax(t,r),S=ax(t,x),b=t.params.grabCursor,E=x.grabCursor,O=r.enabled;v&&!S?(o.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),t.emitContainerClasses()):!v&&S&&(o.classList.add(`${r.containerModifierClass}grid`),(x.grid.fill&&x.grid.fill==="column"||!x.grid.fill&&r.grid.fill==="column")&&o.classList.add(`${r.containerModifierClass}grid-column`),t.emitContainerClasses()),b&&!E?t.unsetGrabCursor():!b&&E&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof x[P]>"u")return;const k=r[P]&&r[P].enabled,_=x[P]&&x[P].enabled;k&&!_&&t[P].disable(),!k&&_&&t[P].enable()});const j=x.direction&&x.direction!==r.direction,T=r.loop&&(x.slidesPerView!==r.slidesPerView||j),C=r.loop;j&&i&&t.changeDirection(),Ft(t.params,x);const D=t.params.enabled,L=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),O&&!D?t.disable():!O&&D&&t.enable(),t.currentBreakpoint=p,t.emit("_beforeBreakpoint",x),i&&(T?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!C&&L?(t.loopCreate(e),t.updateSlides()):C&&!L&&t.loopDestroy()),t.emit("breakpoint",x)}function fO(t,e,i){if(e===void 0&&(e="window"),!t||e==="container"&&!i)return;let r=!1;const o=Tt(),l=e==="window"?o.innerHeight:i.clientHeight,u=Object.keys(t).map(d=>{if(typeof d=="string"&&d.indexOf("@")===0){const f=parseFloat(d.substr(1));return{value:l*f,point:d}}return{value:d,point:d}});u.sort((d,f)=>parseInt(d.value,10)-parseInt(f.value,10));for(let d=0;d<u.length;d+=1){const{point:f,value:p}=u[d];e==="window"?o.matchMedia(`(min-width: ${p}px)`).matches&&(r=f):p<=i.clientWidth&&(r=f)}return r||"max"}var hO={setBreakpoint:dO,getBreakpoint:fO};function pO(t,e){const i=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(o=>{r[o]&&i.push(e+o)}):typeof r=="string"&&i.push(e+r)}),i}function mO(){const t=this,{classNames:e,params:i,rtl:r,el:o,device:l}=t,u=pO(["initialized",i.direction,{"free-mode":t.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:r},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);e.push(...u),o.classList.add(...e),t.emitContainerClasses()}function gO(){const t=this,{el:e,classNames:i}=t;!e||typeof e=="string"||(e.classList.remove(...i),t.emitContainerClasses())}var xO={addClasses:mO,removeClasses:gO};function yO(){const t=this,{isLocked:e,params:i}=t,{slidesOffsetBefore:r}=i;if(r){const o=t.slides.length-1,l=t.slidesGrid[o]+t.slidesSizesGrid[o]+r*2;t.isLocked=t.size>l}else t.isLocked=t.snapGrid.length===1;i.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),i.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var vO={checkOverflow:yO},fh={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function wO(t,e){return function(r){r===void 0&&(r={});const o=Object.keys(r)[0],l=r[o];if(typeof l!="object"||l===null){Ft(e,r);return}if(t[o]===!0&&(t[o]={enabled:!0}),o==="navigation"&&t[o]&&t[o].enabled&&!t[o].prevEl&&!t[o].nextEl&&(t[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&t[o]&&t[o].enabled&&!t[o].el&&(t[o].auto=!0),!(o in t&&"enabled"in l)){Ft(e,r);return}typeof t[o]=="object"&&!("enabled"in t[o])&&(t[o].enabled=!0),t[o]||(t[o]={enabled:!1}),Ft(e,r)}}const o0={eventsEmitter:xL,update:jL,translate:VL,transition:NL,slide:YL,loop:KL,grabCursor:JL,events:uO,breakpoints:hO,checkOverflow:vO,classes:xO},l0={};let vp=class ii{constructor(){let e,i;for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?i=o[0]:[e,i]=o,i||(i={}),i=Ft({},i),e&&!i.el&&(i.el=e);const u=Bn();if(i.el&&typeof i.el=="string"&&u.querySelectorAll(i.el).length>1){const m=[];return u.querySelectorAll(i.el).forEach(x=>{const v=Ft({},i,{el:x});m.push(new ii(v))}),m}const d=this;d.__swiper__=!0,d.support=av(),d.device=rv({userAgent:i.userAgent}),d.browser=sv(),d.eventsListeners={},d.eventsAnyListeners=[],d.modules=[...d.__modules__],i.modules&&Array.isArray(i.modules)&&d.modules.push(...i.modules);const f={};d.modules.forEach(m=>{m({params:i,swiper:d,extendParams:wO(i,f),on:d.on.bind(d),once:d.once.bind(d),off:d.off.bind(d),emit:d.emit.bind(d)})});const p=Ft({},fh,f);return d.params=Ft({},p,l0,i),d.originalParams=Ft({},d.params),d.passedParams=Ft({},i),d.params&&d.params.on&&Object.keys(d.params.on).forEach(m=>{d.on(m,d.params.on[m])}),d.params&&d.params.onAny&&d.onAny(d.params.onAny),Object.assign(d,{enabled:d.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return d.params.direction==="horizontal"},isVertical(){return d.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:d.params.allowSlideNext,allowSlidePrev:d.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:d.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:d.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),d.emit("_swiper"),d.params.init&&d.init(),d}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:i,params:r}=this,o=Hn(i,`.${r.slideClass}, swiper-slide`),l=Hc(o[0]);return Hc(e)-l}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(i=>i.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:i,params:r}=e;e.slides=Hn(i,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,i){const r=this;e=Math.min(Math.max(e,0),1);const o=r.minTranslate(),u=(r.maxTranslate()-o)*e+o;r.translateTo(u,typeof i>"u"?0:i),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",i.join(" "))}getSlideClasses(e){const i=this;return i.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=[];e.slides.forEach(r=>{const o=e.getSlideClasses(r);i.push({slideEl:r,classNames:o}),e.emit("_slideClass",r,o)}),e.emit("_slideClasses",i)}slidesPerViewDynamic(e,i){e===void 0&&(e="current"),i===void 0&&(i=!1);const r=this,{params:o,slides:l,slidesGrid:u,slidesSizesGrid:d,size:f,activeIndex:p}=r;let m=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let x=l[p]?Math.ceil(l[p].swiperSlideSize):0,v;for(let S=p+1;S<l.length;S+=1)l[S]&&!v&&(x+=Math.ceil(l[S].swiperSlideSize),m+=1,x>f&&(v=!0));for(let S=p-1;S>=0;S-=1)l[S]&&!v&&(x+=l[S].swiperSlideSize,m+=1,x>f&&(v=!0))}else if(e==="current")for(let x=p+1;x<l.length;x+=1)(i?u[x]+d[x]-u[p]<f:u[x]-u[p]<f)&&(m+=1);else for(let x=p-1;x>=0;x-=1)u[p]-u[x]<f&&(m+=1);return m}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:i,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&vc(e,u)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function o(){const u=e.rtlTranslate?e.translate*-1:e.translate,d=Math.min(Math.max(u,e.maxTranslate()),e.minTranslate());e.setTranslate(d),e.updateActiveIndex(),e.updateSlidesClasses()}let l;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)o(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const u=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;l=e.slideTo(u.length-1,0,!1,!0)}else l=e.slideTo(e.activeIndex,0,!1,!0);l||o()}r.watchOverflow&&i!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,i){i===void 0&&(i=!0);const r=this,o=r.params.direction;return e||(e=o==="horizontal"?"vertical":"horizontal"),e===o||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${o}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(l=>{e==="vertical"?l.style.width="":l.style.height=""}),r.emit("changeDirection"),i&&r.update()),r}changeLanguageDirection(e){const i=this;i.rtl&&e==="rtl"||!i.rtl&&e==="ltr"||(i.rtl=e==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(e){const i=this;if(i.mounted)return!0;let r=e||i.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=i,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const o=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(o()):Hn(r,o())[0];return!u&&i.params.createElements&&(u=Dc("div",i.params.wrapperClass),r.append(u),Hn(r,`.${i.params.slideClass}`).forEach(d=>{u.append(d)})),Object.assign(i,{el:r,wrapperEl:u,slidesEl:i.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:u,hostEl:i.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Bi(r,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Bi(r,"direction")==="rtl"),wrongRTL:Bi(u,"display")==="-webkit-box"}),!0}init(e){const i=this;if(i.initialized||i.mount(e)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(void 0,!0),i.attachEvents();const o=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&o.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?vc(i,l):l.addEventListener("load",u=>{vc(i,u.target)})}),dh(i),i.initialized=!0,dh(i),i.emit("init"),i.emit("afterInit"),i}destroy(e,i){e===void 0&&(e=!0),i===void 0&&(i=!0);const r=this,{params:o,el:l,wrapperEl:u,slides:d}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),o.loop&&r.loopDestroy(),i&&(r.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),u&&u.removeAttribute("style"),d&&d.length&&d.forEach(f=>{f.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(f=>{r.off(f)}),e!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),iL(r)),r.destroyed=!0),null}static extendDefaults(e){Ft(l0,e)}static get extendedDefaults(){return l0}static get defaults(){return fh}static installModule(e){ii.prototype.__modules__||(ii.prototype.__modules__=[]);const i=ii.prototype.__modules__;typeof e=="function"&&i.indexOf(e)<0&&i.push(e)}static use(e){return Array.isArray(e)?(e.forEach(i=>ii.installModule(i)),ii):(ii.installModule(e),ii)}};Object.keys(o0).forEach(t=>{Object.keys(o0[t]).forEach(e=>{vp.prototype[e]=o0[t][e]})});vp.use([mL,gL]);const cv=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ba(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function br(t,e){const i=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:ba(e[r])&&ba(t[r])&&Object.keys(e[r]).length>0?e[r].__swiper__?t[r]=e[r]:br(t[r],e[r]):t[r]=e[r]})}function uv(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function dv(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function fv(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function hv(t){t===void 0&&(t="");const e=t.split(" ").map(r=>r.trim()).filter(r=>!!r),i=[];return e.forEach(r=>{i.indexOf(r)<0&&i.push(r)}),i.join(" ")}function bO(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function SO(t){let{swiper:e,slides:i,passedParams:r,changedParams:o,nextEl:l,prevEl:u,scrollbarEl:d,paginationEl:f}=t;const p=o.filter($=>$!=="children"&&$!=="direction"&&$!=="wrapperClass"),{params:m,pagination:x,navigation:v,scrollbar:S,virtual:b,thumbs:E}=e;let O,j,T,C,D,L,P,k;o.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&!r.thumbs.swiper.destroyed&&m.thumbs&&(!m.thumbs.swiper||m.thumbs.swiper.destroyed)&&(O=!0),o.includes("controller")&&r.controller&&r.controller.control&&m.controller&&!m.controller.control&&(j=!0),o.includes("pagination")&&r.pagination&&(r.pagination.el||f)&&(m.pagination||m.pagination===!1)&&x&&!x.el&&(T=!0),o.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||d)&&(m.scrollbar||m.scrollbar===!1)&&S&&!S.el&&(C=!0),o.includes("navigation")&&r.navigation&&(r.navigation.prevEl||u)&&(r.navigation.nextEl||l)&&(m.navigation||m.navigation===!1)&&v&&!v.prevEl&&!v.nextEl&&(D=!0);const _=$=>{e[$]&&(e[$].destroy(),$==="navigation"?(e.isElement&&(e[$].prevEl.remove(),e[$].nextEl.remove()),m[$].prevEl=void 0,m[$].nextEl=void 0,e[$].prevEl=void 0,e[$].nextEl=void 0):(e.isElement&&e[$].el.remove(),m[$].el=void 0,e[$].el=void 0))};o.includes("loop")&&e.isElement&&(m.loop&&!r.loop?L=!0:!m.loop&&r.loop?P=!0:k=!0),p.forEach($=>{if(ba(m[$])&&ba(r[$]))Object.assign(m[$],r[$]),($==="navigation"||$==="pagination"||$==="scrollbar")&&"enabled"in r[$]&&!r[$].enabled&&_($);else{const Y=r[$];(Y===!0||Y===!1)&&($==="navigation"||$==="pagination"||$==="scrollbar")?Y===!1&&_($):m[$]=r[$]}}),p.includes("controller")&&!j&&e.controller&&e.controller.control&&m.controller&&m.controller.control&&(e.controller.control=m.controller.control),o.includes("children")&&i&&b&&m.virtual.enabled?(b.slides=i,b.update(!0)):o.includes("virtual")&&b&&m.virtual.enabled&&(i&&(b.slides=i),b.update(!0)),o.includes("children")&&i&&m.loop&&(k=!0),O&&E.init()&&E.update(!0),j&&(e.controller.control=m.controller.control),T&&(e.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-pagination"),f.part.add("pagination"),e.el.appendChild(f)),f&&(m.pagination.el=f),x.init(),x.render(),x.update()),C&&(e.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-scrollbar"),d.part.add("scrollbar"),e.el.appendChild(d)),d&&(m.scrollbar.el=d),S.init(),S.updateSize(),S.setTranslate()),D&&(e.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),Vc(l,e.hostEl.constructor.nextButtonSvg),l.part.add("button-next"),e.el.appendChild(l)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),Vc(u,e.hostEl.constructor.prevButtonSvg),u.part.add("button-prev"),e.el.appendChild(u))),l&&(m.navigation.nextEl=l),u&&(m.navigation.prevEl=u),v.init(),v.update()),o.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),o.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),o.includes("direction")&&e.changeDirection(r.direction,!1),(L||k)&&e.loopDestroy(),(P||k)&&e.loopCreate(),e.update()}function CO(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const i={on:{}},r={},o={};br(i,fh),i._emitClasses=!0,i.init=!1;const l={},u=cv.map(f=>f.replace(/_/,"")),d=Object.assign({},t);return Object.keys(d).forEach(f=>{typeof t[f]>"u"||(u.indexOf(f)>=0?ba(t[f])?(i[f]={},o[f]={},br(i[f],t[f]),br(o[f],t[f])):(i[f]=t[f],o[f]=t[f]):f.search(/on[A-Z]/)===0&&typeof t[f]=="function"?e?r[`${f[2].toLowerCase()}${f.substr(3)}`]=t[f]:i.on[`${f[2].toLowerCase()}${f.substr(3)}`]=t[f]:l[f]=t[f])}),["navigation","pagination","scrollbar"].forEach(f=>{i[f]===!0&&(i[f]={}),i[f]===!1&&delete i[f]}),{params:i,passedParams:o,rest:l,events:r}}function TO(t,e){let{el:i,nextEl:r,prevEl:o,paginationEl:l,scrollbarEl:u,swiper:d}=t;uv(e)&&r&&o&&(d.params.navigation.nextEl=r,d.originalParams.navigation.nextEl=r,d.params.navigation.prevEl=o,d.originalParams.navigation.prevEl=o),dv(e)&&l&&(d.params.pagination.el=l,d.originalParams.pagination.el=l),fv(e)&&u&&(d.params.scrollbar.el=u,d.originalParams.scrollbar.el=u),d.init(i)}function EO(t,e,i,r,o){const l=[];if(!e)return l;const u=f=>{l.indexOf(f)<0&&l.push(f)};if(i&&r){const f=r.map(o),p=i.map(o);f.join("")!==p.join("")&&u("children"),r.length!==i.length&&u("children")}return cv.filter(f=>f[0]==="_").map(f=>f.replace(/_/,"")).forEach(f=>{if(f in t&&f in e)if(ba(t[f])&&ba(e[f])){const p=Object.keys(t[f]),m=Object.keys(e[f]);p.length!==m.length?u(f):(p.forEach(x=>{t[f][x]!==e[f][x]&&u(f)}),m.forEach(x=>{t[f][x]!==e[f][x]&&u(f)}))}else t[f]!==e[f]&&u(f)}),l}const MO=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.emit("_virtualUpdated"),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function kc(){return kc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},kc.apply(this,arguments)}function pv(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function mv(t){const e=[];return Le.Children.toArray(t).forEach(i=>{pv(i)?e.push(i):i.props&&i.props.children&&mv(i.props.children).forEach(r=>e.push(r))}),e}function AO(t){const e=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Le.Children.toArray(t).forEach(r=>{if(pv(r))e.push(r);else if(r.props&&r.props.slot&&i[r.props.slot])i[r.props.slot].push(r);else if(r.props&&r.props.children){const o=mv(r.props.children);o.length>0?o.forEach(l=>e.push(l)):i["container-end"].push(r)}else i["container-end"].push(r)}),{slides:e,slots:i}}function jO(t,e,i){if(!i)return null;const r=m=>{let x=m;return m<0?x=e.length+m:x>=e.length&&(x=x-e.length),x},o=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`},{from:l,to:u}=i,d=t.params.loop?-e.length:0,f=t.params.loop?e.length*2:e.length,p=[];for(let m=d;m<f;m+=1)m>=l&&m<=u&&p.push(e[r(m)]);return p.map((m,x)=>Le.cloneElement(m,{swiper:t,style:o,key:m.props.virtualIndex||m.key||`slide-${x}`}))}function eo(t,e){return typeof window>"u"?R.useEffect(t,e):R.useLayoutEffect(t,e)}const rx=R.createContext(null),LO=R.createContext(null),Xt=R.forwardRef(function(t,e){let{className:i,tag:r="div",wrapperTag:o="div",children:l,onSwiper:u,...d}=t===void 0?{}:t,f=!1;const[p,m]=R.useState("swiper"),[x,v]=R.useState(null),[S,b]=R.useState(!1),E=R.useRef(!1),O=R.useRef(null),j=R.useRef(null),T=R.useRef(null),C=R.useRef(null),D=R.useRef(null),L=R.useRef(null),P=R.useRef(null),k=R.useRef(null),{params:_,passedParams:$,rest:Y,events:F}=CO(d),{slides:te,slots:ie}=AO(l),oe=()=>{b(!S)};Object.assign(_.on,{_containerClasses(ee,H){m(H)}});const re=()=>{Object.assign(_.on,F),f=!0;const ee={..._};if(delete ee.wrapperClass,j.current=new vp(ee),j.current.virtual&&j.current.params.virtual.enabled){j.current.virtual.slides=te;const H={cache:!1,slides:te,renderExternal:v,renderExternalUpdate:!1};br(j.current.params.virtual,H),br(j.current.originalParams.virtual,H)}};O.current||re(),j.current&&j.current.on("_beforeBreakpoint",oe);const B=()=>{f||!F||!j.current||Object.keys(F).forEach(ee=>{j.current.on(ee,F[ee])})},K=()=>{!F||!j.current||Object.keys(F).forEach(ee=>{j.current.off(ee,F[ee])})};R.useEffect(()=>()=>{j.current&&j.current.off("_beforeBreakpoint",oe)}),R.useEffect(()=>{!E.current&&j.current&&(j.current.emitSlidesClasses(),E.current=!0)}),eo(()=>{if(e&&(e.current=O.current),!!O.current)return j.current.destroyed&&re(),TO({el:O.current,nextEl:D.current,prevEl:L.current,paginationEl:P.current,scrollbarEl:k.current,swiper:j.current},_),u&&!j.current.destroyed&&u(j.current),()=>{j.current&&!j.current.destroyed&&j.current.destroy(!0,!1)}},[]),eo(()=>{B();const ee=EO($,T.current,te,C.current,H=>H.key);return T.current=$,C.current=te,ee.length&&j.current&&!j.current.destroyed&&SO({swiper:j.current,slides:te,passedParams:$,changedParams:ee,nextEl:D.current,prevEl:L.current,scrollbarEl:k.current,paginationEl:P.current}),()=>{K()}}),eo(()=>{MO(j.current)},[x]);function W(){return _.virtual?jO(j.current,te,x):te.map((ee,H)=>Le.cloneElement(ee,{swiper:j.current,swiperSlideIndex:H}))}return Le.createElement(r,kc({ref:O,className:hv(`${p}${i?` ${i}`:""}`)},Y),Le.createElement(LO.Provider,{value:j.current},ie["container-start"],Le.createElement(o,{className:bO(_.wrapperClass)},ie["wrapper-start"],W(),ie["wrapper-end"]),uv(_)&&Le.createElement(Le.Fragment,null,Le.createElement("div",{ref:L,className:"swiper-button-prev"}),Le.createElement("div",{ref:D,className:"swiper-button-next"})),fv(_)&&Le.createElement("div",{ref:k,className:"swiper-scrollbar"}),dv(_)&&Le.createElement("div",{ref:P,className:"swiper-pagination"}),ie["container-end"]))});Xt.displayName="Swiper";const Kt=R.forwardRef(function(t,e){let{tag:i="div",children:r,className:o="",swiper:l,zoom:u,lazy:d,virtualIndex:f,swiperSlideIndex:p,...m}=t===void 0?{}:t;const x=R.useRef(null),[v,S]=R.useState("swiper-slide"),[b,E]=R.useState(!1);function O(D,L,P){L===x.current&&S(P)}eo(()=>{if(typeof p<"u"&&(x.current.swiperSlideIndex=p),e&&(e.current=x.current),!(!x.current||!l)){if(l.destroyed){v!=="swiper-slide"&&S("swiper-slide");return}return l.on("_slideClass",O),()=>{l&&l.off("_slideClass",O)}}}),eo(()=>{l&&x.current&&!l.destroyed&&S(l.getSlideClasses(x.current))},[l]);const j={isActive:v.indexOf("swiper-slide-active")>=0,isVisible:v.indexOf("swiper-slide-visible")>=0,isPrev:v.indexOf("swiper-slide-prev")>=0,isNext:v.indexOf("swiper-slide-next")>=0},T=()=>typeof r=="function"?r(j):r,C=()=>{E(!0)};return Le.createElement(i,kc({ref:x,className:hv(`${v}${o?` ${o}`:""}`),"data-swiper-slide-index":f,onLoad:C},m),u&&Le.createElement(rx.Provider,{value:j},Le.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof u=="number"?u:void 0},T(),d&&!b&&Le.createElement("div",{className:"swiper-lazy-preloader"}))),!u&&Le.createElement(rx.Provider,{value:j},T(),d&&!b&&Le.createElement("div",{className:"swiper-lazy-preloader"})))});Kt.displayName="SwiperSlide";const OO=M(Xt)`
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
`,RO=M(Kt)`
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
`,DO=M.section`
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
`,HO=M.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`,VO=M.div`
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
`,kO=M.p`
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
`,zO=M.p`
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
`,PO=M.img`
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
`;M.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;M.button`
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
`;const NO=M.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${t=>t.$isActive?"898px":"437px"};
    height: ${t=>t.$isActive?"500px":"285px"};
  }
`,BO=M.div`
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
`,$O=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,_O=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  position: relative;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const sx=M.button`
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
`,ox=M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,UO=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,GO=M.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,IO=M.div`
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
`,qO="/assets/Review%20Image%203-bwglEcYl.png",lx="/assets/Review%20Image%201-BysFOq9G.png",cx="/assets/Review%20Image%202-C_HtVc_c.png",ux="/assets/Review%20Image%205-B3ukDKHL.png",YO="/assets/Review%20Image%204-AW0fOgIu.png",FO=M.section`
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
`,ZO=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,XO=M.p`
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
`,KO=M.h3`
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
`,gv=M.span`
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
`,WO=M.div`
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
`,QO=M.div`
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
`,JO=M.div`
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
`,eR=M(JO)`
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
`,tR=M.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`,nR=M.div`
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
`,iR=M.p`
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
`,aR=M.div`
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
`;function xv(){const[t,e]=R.useState(null),[i,r]=R.useState(0),o=R.useRef(null),l=R.useRef(null),u=()=>{t&&t.slidePrev()},d=()=>{t&&t.slideNext()},f=[{image:qO,description:"A broken washing machine that stopped mid-cycle was fully restored by our team in just one visit. The family can now enjoy clean laundry again without stress.",title:"Quick Fix for a Washing Machine Breakdown",type:"Washing Machine Repair"},{image:cx,description:"We installed a brand-new dishwasher for a busy household, ensuring proper water connections and energy efficiency. The client now saves both time and water daily.",title:"Professional Dishwasher Installation",type:"Dishwasher Installation"},{image:ux,description:"A fridge that was leaking water and not cooling properly was diagnosed and repaired. The customer avoided costly food spoilage and gained reliable performance again.",title:"Refrigerator Leak and Cooling Repair",type:"Refrigerator Repair"},{image:YO,description:"The dryer was overheating and shutting down after a few minutes. Our experts replaced faulty parts and cleaned the vent system, restoring safe and efficient drying.",title:"Dryer Overheating Problem Solved",type:"Dryer Repair"},{image:lx,description:"An oven that wouldn’t heat evenly was repaired by recalibrating the thermostat and replacing heating elements. The family can now cook meals perfectly again.",title:"Oven Heating Restored for Perfect Meals",type:"Oven Repair"},{image:ux,description:"We handled a complete installation of a modern washing machine, ensuring proper setup, water connection, and vibration-free operation.",title:"Seamless Washing Machine Installation",type:"Washing Machine Installation"},{image:cx,description:"A freezer full of food was saved when we quickly repaired the compressor and restored full cooling capacity within hours.",title:"Emergency Freezer Repair",type:"Freezer Repair"},{image:lx,description:"A customer’s stove stopped working during family dinner preparation. Our team replaced defective wiring and burners, restoring it the same day.",title:"Stove Emergency Fixed Same Day",type:"Stove Repair"}];return y.jsxs(DO,{children:[y.jsxs(VO,{children:[y.jsx(kO,{children:"Our Cases"}),y.jsxs(zO,{children:[y.jsx(gv,{children:"Success Stories "})," That Bring Your Appliances Back to Life"]})]}),y.jsx(IO,{children:y.jsx(OO,{modules:[dn],pagination:{clickable:!0},spaceBetween:20,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,onSwiper:e,onSlideChange:p=>r(p.realIndex),breakpoints:{1440:{slidesPerView:6,spaceBetween:30,centeredSlides:!0}},children:f.map(({image:p,description:m,title:x,type:v},S)=>y.jsx(RO,{$isActive:i===S,$index:S,children:y.jsxs(NO,{$isActive:i===S,$index:S,children:[y.jsx(PO,{src:p,alt:v,$isActive:i===S,$index:S}),y.jsx(BO,{$isActive:i===S,$index:S,children:y.jsxs($O,{children:[y.jsx(_O,{children:y.jsx(ox,{children:m})}),y.jsxs(UO,{children:[y.jsx(GO,{children:x}),y.jsx(ox,{children:v})]})]})})]})},S))})}),y.jsxs(HO,{children:[y.jsx(sx,{ref:o,$bg:"#DBDBD8",onClick:u,children:y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:y.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),y.jsx(sx,{ref:l,$bg:"#3098EE",onClick:d,children:y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:y.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})}const rR=M(vn.div)`
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
`,sR=M.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`,oR=({type:t,message:e,onClose:i,autoClose:r=!0,autoCloseDuration:o=25e3})=>{const{t:l}=xp();R.useEffect(()=>{if(r){const d=setTimeout(()=>{i()},o);return()=>clearTimeout(d)}},[r,o,i]);const u={success:l("alert.success"),error:l("alert.error")};return y.jsxs(rR,{$type:t,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",damping:25},children:[y.jsx("div",{children:e||u[t]}),y.jsx(sR,{onClick:i,children:"×"})]})},lR="/assets/ContactFormImage-CaQYWUqs.png",wp=()=>{const[t,e]=R.useState(""),[i,r]=R.useState({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),[o,l]=R.useState({}),[u,d]=R.useState(null),f=x=>{const{name:v,value:S}=x.target;r(b=>({...b,[v]:S})),l(b=>({...b,[v]:!1}))},p=()=>{const x={};return t||(x.service=!0),i.name||(x.name=!0),i.email||(x.email=!0),i.phone||(x.phone=!0),i.location||(x.location=!0),i.appliance||(x.appliance=!0),i.brand||(x.brand=!0),i.power||(x.power=!0),x},m=async x=>{x.preventDefault();const v=p();if(Object.keys(v).length>0){l(v),d({type:"error",message:"Please fill all required fields"});return}try{if((await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:t,...i})})).ok)e(""),r({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),l({}),d({type:"success",message:"Form submitted successfully! We will contact you soon."});else throw new Error("Failed to submit form")}catch(S){console.error("Error submitting form:",S),d({type:"error",message:"There was an error submitting the form. Please try again."})}};return y.jsxs(pR,{children:[y.jsxs(px,{children:[y.jsxs(u0,{children:[y.jsxs(mR,{children:[" ",y.jsx("span",{children:"Contact"})," our team"]}),y.jsx(ec,{children:"We love our customers, so feel free to call during normal business hours"})]}),y.jsx(gR,{children:y.jsx(xR,{children:"Call Us for Fast Repair"})}),y.jsxs(px,{children:[y.jsx(yR,{}),y.jsxs(vR,{children:[y.jsxs(mx,{width:"251px",children:[y.jsx(gx,{children:"Service Hours"}),y.jsx(u0,{children:y.jsxs(ec,{children:["Mon–Sat: 8AM–6PM ",y.jsx("br",{})," Sun: 9AM–4PM"," "]})})]}),y.jsxs(mx,{children:[y.jsx(gx,{children:"Our Location"}),y.jsxs(u0,{children:[y.jsx(ec,{children:"801 Tioga Pl, Newbury Park, CA 91320"}),y.jsx(ec,{children:"+1 (805) 500-2705"})]})]})]})]})]}),y.jsxs(cR,{onSubmit:m,children:[y.jsx(wR,{src:lR,alt:"contact image"}),y.jsx(ni,{children:"What service do you need for your appliances?"}),y.jsxs(uR,{children:[y.jsxs(dx,{style:o.service?{borderColor:"red"}:{},children:[y.jsx(fx,{name:"service",value:"Repair",checked:t==="Repair",onChange:x=>e(x.target.value)}),y.jsx(hx,{checked:t==="Repair"}),"Repair"]}),y.jsxs(dx,{style:o.service?{borderColor:"red"}:{},children:[y.jsx(fx,{name:"service",value:"Installation",checked:t==="Installation",onChange:x=>e(x.target.value)}),y.jsx(hx,{checked:t==="Installation"}),"Installation"]})]}),y.jsxs(bR,{children:[y.jsxs(SR,{children:[y.jsx(ni,{children:"Name"}),y.jsx(c0,{name:"name",type:"text",placeholder:"Your Name",value:i.name,onChange:f,style:o.name?{borderBottom:"1px solid red"}:{}}),y.jsx(ni,{children:"Email"}),y.jsx(c0,{name:"email",type:"email",placeholder:"Your Email",value:i.email,onChange:f,style:o.email?{borderBottom:"1px solid red"}:{}}),y.jsx(ni,{children:"Phone Number"}),y.jsx(c0,{name:"phone",type:"tel",placeholder:"Your Phone Number",value:i.phone,onChange:f,style:o.phone?{borderBottom:"1px solid red"}:{}})]}),y.jsxs(CR,{children:[y.jsx(ni,{children:"In what location do you need the service?"}),y.jsx(Ql,{children:y.jsxs(Jl,{name:"location",value:i.location,onChange:f,style:o.location?{borderBottom:"1px solid red"}:{},children:[y.jsx("option",{value:"",children:"Select location"}),y.jsx("option",{children:"Malibu"}),y.jsx("option",{children:"Los Angeles County"}),y.jsx("option",{children:"Thousand Oaks"}),y.jsx("option",{children:"Newbury Park"}),y.jsx("option",{children:"Westlake Village"}),y.jsx("option",{children:"Oak Park"}),y.jsx("option",{children:"Lake Sherwood"}),y.jsx("option",{children:"Hidden Valley"}),y.jsx("option",{children:"Camarillo"}),y.jsx("option",{children:"Agoura Hills"}),y.jsx("option",{children:"Moorpark"}),y.jsx("option",{children:"Calabasas"}),y.jsx("option",{children:"Santa Rosa Valley"}),y.jsx("option",{children:"Other"})]})}),y.jsx(ni,{children:"What do you need repaired?"}),y.jsx(Ql,{children:y.jsxs(Jl,{name:"appliance",value:i.appliance,onChange:f,style:o.appliance?{borderBottom:"1px solid red"}:{},children:[y.jsx("option",{value:"",children:"Select appliance"}),y.jsx("option",{children:"Cooktop"}),y.jsx("option",{children:"Oven"}),y.jsx("option",{children:"Range"}),y.jsx("option",{children:"Washer"}),y.jsx("option",{children:"Refrigerator"}),y.jsx("option",{children:"Microwave"}),y.jsx("option",{children:"Dishwasher"}),y.jsx("option",{children:"Dryer"}),y.jsx("option",{children:"Washing Machine"}),y.jsx("option",{children:"Freezer"}),y.jsx("option",{children:"Stove"}),y.jsx("option",{children:"Wine Cooler"}),y.jsx("option",{children:"Other"})]})}),y.jsx(ni,{children:"Brand of appliance"}),y.jsx(Ql,{children:y.jsxs(Jl,{name:"brand",value:i.brand,onChange:f,style:o.brand?{borderBottom:"1px solid red"}:{},children:[y.jsx("option",{value:"",children:"Select brand"}),y.jsx("option",{children:"LG"}),y.jsx("option",{children:"Samsung"}),y.jsx("option",{children:"Whirlpool"}),y.jsx("option",{children:"Bosch"}),y.jsx("option",{children:"GE"}),y.jsx("option",{children:"Frigidaire"}),y.jsx("option",{children:"Maytag"}),y.jsx("option",{children:"KitchenAid"}),y.jsx("option",{children:"Viking"}),y.jsx("option",{children:"Fisher & Paykel"}),y.jsx("option",{children:"Amana"}),y.jsx("option",{children:"JennAir"}),y.jsx("option",{children:"Haier"}),y.jsx("option",{children:"Sharp"}),y.jsx("option",{children:"Electrolux"}),y.jsx("option",{children:"Sub-Zero"}),y.jsx("option",{children:"Thermador"}),y.jsx("option",{children:"Wolf"}),y.jsx("option",{children:"Other"})]})})]})]}),y.jsx(ni,{children:"What type of power does this appliance use?"}),y.jsx(Ql,{children:y.jsxs(Jl,{name:"power",value:i.power,onChange:f,style:o.power?{borderBottom:"1px solid red"}:{},children:[y.jsx("option",{value:"",children:"Select power"}),y.jsx("option",{children:"Electric"}),y.jsx("option",{children:"Gas"}),y.jsx("option",{children:"Dual Fuel"}),y.jsx("option",{children:"Induction"}),y.jsx("option",{children:"Solar"}),y.jsx("option",{children:"Propane"}),y.jsx("option",{children:"Natural Gas"}),y.jsx("option",{children:"Other"})]})}),y.jsx(ni,{children:"Any details you'd like to add?"}),y.jsx(dR,{name:"details",placeholder:"Any details you'd like to add?",value:i.details,onChange:f}),y.jsxs(hR,{children:['By clicking "Submit" you hereby agree to our ',y.jsx("a",{href:"http://#",children:"Privacy Policy"})," ."]}),y.jsx(fR,{type:"submit",children:"Submit"})]}),y.jsx(ly,{children:u&&y.jsx(oR,{type:u.type,message:u.message,onClose:()=>d(null)})})]})},cR=M.form`
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
`,ni=M.label`
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
`,uR=M.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,dx=M.label`
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
`,fx=M.input.attrs({type:"radio"})`
  display: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,hx=M.span`
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
`,c0=M.input`
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
`,Ql=M.div`
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
`,Jl=M.select`
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
`,dR=M.textarea`
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
`,fR=M.button`
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
`,hR=M.p`
  font-size: 12px;
  color: #666;
  text-align: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,pR=M.div`
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
`,px=M.div`
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
`,u0=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,mR=M.p`
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
`,ec=M.p`
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
`,gR=M.button`
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
`,xR=M.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,yR=M.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,vR=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,mx=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${t=>t.width||"100%"};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,gx=M.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,wR=M.img`
  margin: 0 auto;
  width: 100%;
  max-width: 696px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 668px;
  }

  @media screen and (min-width: 1440px) {
  }
`,bR=M.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`,SR=M.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,CR=M.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,xx="/assets/Ellipse%204aleksey-FxWBDF7j.png",yx="/assets/Ellipse%204-sanal-avatar-Dxfndv0Z.png",vx="/assets/Ellipse%204-Wendy%20Bailey-jDxdSyQ5.png",wx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgESURBVHgB3Vr7b1NVHP/c29t3V9ZtsNG9Oh1TivJWCAaGYjSDxWgwBo3EmBgRTIiCidF/QBMTfoaYKGIkQIiiYTwSQHkZiKCM8d4YY2PtBuzRrs/b9l6/53aDjdFube9Yt09yt7b33HPP93zf3+/hoD442GxW5JocsOW8CKPxJRj1lRCEORA0BmVELBZEJFqPkFgPX7AR3r5j6Oq7A4+nByqDg1pwOBwozd+Egty3YTJOJyKAaAzKf0kGZHaxgfSH4+IXzwMaugRN/PIG2tHj2YEm11a43a1QAZkSyGOesxYV9m1EVBGCIRBnJCKGR3qQoddxMOhAczXg5p1vceHabvo9hjSRLoEcFjrfQGX5j8QJG3yBfhZx6RI2FDLNxaaymDjEosDN1rdw/uo+pIHUCXRMLcKCuf9Cr52OPr8UlzUVRX0oFKGG1cwhFG7AhSurcNPVlsoEmlQGY/nCTzFn1jH4gxaExQGOjRVx6J+bo3exjZyGGY5NsFg60eY+l8oEoxtXu+wgrJbXyRBE6ZuA8YAkRzHFIsDjO4W648swwOEkGA2BWqypuUIWsZLMeoyeSI3rakNGFEadAA3XiF2HnfRLNNnwkQjU4b2a6wiI5YhGmbqNpTimAFkiv8pBb2jBrroqJCEy2YI5rFnZiHD4KTL9WUTcAPqJ1GkbsfvQs0ggronNem31KSLs6ewkjoEMXDQqQ5KqULNsf6JRj9en6hc2Ymrux+RsSedU8m1jAtr4CIVKtpxnYLN04Lb7/LARw56pqCjH0udb0O0ha8mNj7VMFcy6FkwRcOhsITo77w6+NZw7CysPwOuTJgxxDDyttdcnY8lzfw67NeTbolmrIeic5BKyUOdGgBSTKR52Yu7MVYN/HkygAEfJXvgU7k08ApnRYaFjVdlPGETXQzGcN/NdJX1B+sTx9LwcESG72sl8MfuVwlTkZ7niYlqRVom104IsU4wl5BMXa3Dhah2GrGD1q5fJIj2bQapDqZKI4oJp+HvLNnj8PqSyTJvZguVfbURz222QA0fa4Oi1GqEDvx2xs69xDpYXVsBocCLcJyMT6ZQk6AUBZVOnAexKETmMMJojIzD2mw3T8bS9lGUecQIdpespHcncodPj0iDxilAud+pKAwReGFFY86xWeIJBkvNMQ13SxbAITC/8jAjcHCcwL/d9hCLEPXVTn0A4jFfeIaNmMMTLE8mg6GApeBorpauDAwhRKpdvW0OfvhBQXJwPE7HU64Pa4GkzdSWlEA3GUdkuRpacKXFxcDAb7cjLy6EV6EqU4tBkA9Nls7mMR65+hVL5mmxg6V2BZREPi3kGYhlarmwE46DRsESg4tHcseKgTCmb6HbRi5LoINM5rRa6IjvEaBSqgSI3Kj9WMgJnY4ygo6hk86av6RXahAZaoIins7cHW/f8TNWzKVANbOOINiomVasXe4phOIgTt7bvfWAR+VFM7e7ugr16LqVqlVAVkhQWxiqwZpMyfxYQRSIyyTjyj95AgGLXscjOWPlPigVochPU8T9D4AsFUbhyKTRGU2JHT++VaY/5MgdUNXWMb1I0KECMXYRJWAz16VPEUyYdCySLYvobMYogqbnJbD5RvMgjFGocMYxK/y1xzildJE3ii6VZaksQ04tQpJ6HP3Q6nrtNMrCgPRBo4tEdOKv06CYbWL+xK3iUR29vC2XBmHQQiGkej4uqUb1eBIMdZGQK1U6XlEjm/j2KKIwjp0usD2jLA6fTq6GPMvUs21lLnLFOwn3vr1To3QAxAjXBIpm1az+ipq1uxL2zWSz45fgRtHe4ldAtI+j1HDrub2cf47LZ2vYdygo3KD2/DB3/wMOMC1qtgB0Uqo0WzR0u7L3ZCOTakD5IbAw6nrL579m3OIEtHS2YH+okMZqqVKbSnrs/eqFMPkhhWyrIoWDAo0Q0GZcsOGrQNgwcYnhoXVo716GyZB/dRLrgqNzQ2nUP5sXOuJKnAtbkmVYEzZRcyt4yiGlyqK9/qfmbB2sadEtD7bJ78AesACaqY5RhJP3bc5itX9mlwdscQ1Pbh5QAa9QPK54ESPdyzByaXW8CD8PaoXJ0ruEPRCJu0oOJRyDLRsLhBqLh98E/P6ooMi5fX0CNfl7phU8UyOxwgplH/dWVj94armv3PT5qKHYhP7eW/CKrZWR3HMcYwU5eNLevR/2NY4/eTuwSaqsPw6B/jSreMrK128RsBTMqwdBJ7D+x7HFDEnNn//EaavA3QSvIWWl0lEhCYCFgExFXnWhYMvGTsLPOSTvUqkTm2UTkAHFGQws6D81EkgNBI+lXBDsPPEO9hWYKf5iYjn+FWKY1GA0cVeQb4fJX4a/MDgINgEftyydhNS6B1z9+hxMkZlDMlAH1HcSBE6xVPaJUjTZikXGj5Qfk2bpRlL9KORMqSU/w/Aw5cXaaJc+qwW33ehw98/lon0x9gTMryuGcUUedzln9xynH2I2wCIX8ckh04b/6+bh1tzOVp9PnwKLZq+Gw71WqV4EQ4yinGkeVA7Fc/ECsJHXj2p0PUH+J9dxTNnSZLkhQDi88VfIl+cxZSpdYFNPnqsyONGs5stxAMOxGq2sd/rl8AONwpHk42KH0soJPSE/WwmyyK+0r1tRhnSvlULr0cP8fHErvLyuymhBzRf6gG929e3DHtQXN2XEo/fGwWvNgtxbDlLOCTHoVcWQ2pfezqXpnUu7HpAAZqosIh5qIqNPo9Z1Bj78VPT1epCGGyfA/uU/qLszt8vwAAAAASUVORK5CYII=",bx="/assets/Review%20Image-alexey-BS9M-VaX.png",Sx="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",Cx="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",Tx="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",tc=[{avatar:xx,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:bx},{avatar:yx,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:Sx},{avatar:vx,name:"Wendy Bailey",time:"месяц назад",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:Cx},{avatar:wx,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:Tx},{avatar:xx,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:bx},{avatar:yx,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:Sx},{avatar:vx,name:"Wendy Bailey",time:"месяц назад",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:Cx},{avatar:wx,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:Tx}],TR=M.div`
  padding: 0px 16px;
  width: 375px;
  height: 170px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,ER=M.h2`
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
`,MR=M.p`
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
`,AR=M.div`
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
`,d0=M.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: ${t=>t.$isVisible?"block":"none"};

  @media screen and (min-width: 768px) {
    width: 50%; /* Два свайпери займають по половині ширини */
    display: block;
  }
`,f0=M.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: #f5faff;
  border-radius: 8px;
  height: 600px; /* Фіксована висота картки */
`,h0=M.div`
  display: flex;
  gap: 19px;
  align-items: center;
`,p0=M.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`,m0=M.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,g0=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`,x0=M.p`
  color: rgba(33, 33, 33, 0.5);
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`,y0=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  line-height: 1.25em;
  flex-grow: 1;
  overflow: hidden;
`,v0=M.img`
  width: 100%;
  height: 370px;
  border-radius: 4px;
  object-fit: cover;
`,w0=M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,b0=M.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,yv=()=>{const[,t]=Le.useState(!1),e=Le.useRef(null),i=Le.useRef(null),r=Le.useRef(null),o=_e({query:"(min-width: 768px)"}),l=_e({query:"(min-width: 1440px)"}),u=d=>{if(!e.current||!r.current)return;const f=e.current,p=r.current,m=d.touches[0].clientY,{top:x,bottom:v}=p.getBoundingClientRect(),S=f.isBeginning&&m>x+50,b=f.isEnd&&m<v-50;S||b?(t(!0),f.allowTouchMove=!1):(t(!1),f.allowTouchMove=!0)};return Le.useEffect(()=>{const d=r.current;if(d)return d.addEventListener("touchmove",u,{passive:!1}),()=>{d.removeEventListener("touchmove",u)}},[]),y.jsxs("div",{children:[y.jsxs(TR,{children:[y.jsx(MR,{children:"Your Feedback Matters"}),y.jsxs(ER,{children:["Discover why clients ",y.jsx("span",{children:" trust "})," our repairs"]})]}),y.jsxs(AR,{ref:r,children:[y.jsxs(d0,{$isVisible:!0,children:[y.jsx(w0,{}),y.jsx(b0,{}),y.jsx(Xt,{ref:e,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!0,waitForTransition:!0},speed:7e3,loop:!0,touchEventsTarget:"container",modules:[t0,dn],grabCursor:!0,resistance:!0,resistanceRatio:.85,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{e.current&&(e.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:tc.map((d,f)=>y.jsx(Kt,{children:y.jsxs(f0,{children:[y.jsxs(h0,{children:[y.jsx(p0,{src:d.avatar,alt:d.name}),y.jsxs(m0,{children:[y.jsx(g0,{children:d.name}),y.jsx(x0,{children:d.time})]})]}),y.jsx(y0,{children:d.text}),y.jsx(v0,{src:d.image,alt:`Review by ${d.name}`})]})},`top-${f}`))})]}),y.jsxs(d0,{$isVisible:o,children:[y.jsx(w0,{}),y.jsx(b0,{}),y.jsx(Xt,{ref:i,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!0,waitForTransition:!0,reverseDirection:!0},speed:4e3,loop:!0,touchEventsTarget:"container",modules:[t0,dn],grabCursor:!1,noSwiping:!0,allowTouchMove:!1,simulateTouch:!1,resistance:!0,resistanceRatio:.85,initialSlide:tc.length-1,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{i.current&&(i.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:tc.map((d,f)=>y.jsx(Kt,{children:y.jsxs(f0,{children:[y.jsxs(h0,{children:[y.jsx(p0,{src:d.avatar,alt:d.name}),y.jsxs(m0,{children:[y.jsx(g0,{children:d.name}),y.jsx(x0,{children:d.time})]})]}),y.jsx(y0,{children:d.text}),y.jsx(v0,{src:d.image,alt:`Review by ${d.name}`})]})},`bottom-${f}`))})]}),l&&y.jsxs(d0,{$isVisible:!0,children:[y.jsx(w0,{}),y.jsx(b0,{}),y.jsx(Xt,{ref:e,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0,waitForTransition:!0},speed:9e3,loop:!0,touchEventsTarget:"container",modules:[t0,dn],grabCursor:!0,resistance:!0,resistanceRatio:.85,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{e.current&&(e.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:tc.map((d,f)=>y.jsx(Kt,{children:y.jsxs(f0,{children:[y.jsxs(h0,{children:[y.jsx(p0,{src:d.avatar,alt:d.name}),y.jsxs(m0,{children:[y.jsx(g0,{children:d.name}),y.jsx(x0,{children:d.time})]})]}),y.jsx(y0,{children:d.text}),y.jsx(v0,{src:d.image,alt:`Review by ${d.name}`})]})},`top-${f}`))})]})]})]})},jR="/assets/Hero%20Image-CELmD3oB.png",bp="data:image/svg+xml,%3csvg%20width='140'%20height='33'%20viewBox='0%200%20140%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_586)'%3e%3cpath%20d='M0.00384521%2032.9336H31.9955V0.933594H0.00384521V32.9336ZM20.5091%203.37746C26.1637%205.23116%2030.25%2010.5932%2030.2654%2016.9275C30.2807%2023.1588%2026.277%2028.508%2020.5091%2030.4846V3.37746ZM15.9946%202.65223C17.0161%202.65223%2018.1043%202.78857%2019.0107%202.96908C19.0107%2010.2187%2012.0004%2016.185%204.76547%2016.185L1.74041%2016.1805C2.23648%208.74909%208.38454%202.65223%2015.9946%202.65223ZM4.76803%2017.6943C12.0017%2017.6943%2019.0094%2023.6542%2019.0094%2030.8968C18.1043%2031.0818%2016.9617%2031.2194%2015.9946%2031.2194C8.38198%2031.2092%202.02589%2025.0938%201.73849%2017.6943H4.76803ZM42.7049%2019.7452V17.7283H49.3618V15.157H42.7036V11.4131H49.7862V8.84766H39.9787V19.6287C39.9787%2022.3542%2041.1392%2024.2181%2043.8634%2024.6009C43.9178%2024.6143%2043.9716%2024.6246%2044.0215%2024.6259H44.0708C44.3499%2024.6572%2044.6347%2024.6777%2044.9336%2024.6777H49.975V22.1154H44.9561C44.09%2022.1154%2042.7049%2021.6879%2042.7049%2019.7452ZM51.9113%2024.6816H54.6374V8.84382H51.9113V24.6816ZM62.6404%2012.8674C59.1948%2012.8674%2056.6159%2015.2415%2056.6159%2018.938V19.0296C56.6159%2022.6358%2059.1033%2024.9638%2062.7089%2024.9638C64.4429%2024.9638%2066.063%2024.4851%2067.5461%2022.9092L65.903%2021.3121C65.0357%2022.1794%2064.1914%2022.6358%2062.7998%2022.6358C60.7688%2022.6358%2059.4227%2021.4491%2059.3312%2019.6229H68.2758C68.3212%2019.1665%2068.3212%2018.6647%2068.3212%2018.6647C68.3225%2015.4463%2066.063%2012.8674%2062.6404%2012.8674ZM59.4003%2017.7059C59.5142%2016.313%2060.9295%2015.1948%2062.6404%2015.1948C64.2375%2015.1948%2065.5381%2016.3361%2065.5381%2017.7059H59.4003ZM75.9825%2015.3094C77.2146%2015.3094%2078.1281%2015.7664%2078.9032%2016.5646L80.5918%2014.8069C79.2681%2013.3917%2077.6941%2012.8213%2075.9825%2012.8213C72.5138%2012.8213%2069.7301%2015.4003%2069.7301%2018.915C69.7301%2022.4297%2072.5138%2025.0093%2075.9825%2025.0093C77.6941%2025.0093%2079.2687%2024.439%2080.5918%2023.0237L78.9032%2021.266C78.1281%2022.0649%2077.2146%2022.5213%2075.9825%2022.5213C73.9739%2022.5213%2072.4453%2020.9914%2072.4453%2018.915C72.4453%2016.8385%2073.9739%2015.3094%2075.9825%2015.3094ZM85.0148%2019.7497H85.0116V15.7062H87.4906V13.2291H85.0148V8.84446H82.2886V19.9103L82.2963%2019.9097C82.3744%2022.4829%2083.5432%2024.2354%2086.1733%2024.6047C86.2277%2024.6182%2086.2815%2024.6284%2086.3314%2024.6291H86.3807C86.6598%2024.6604%2086.9446%2024.6816%2087.2436%2024.6816H87.5322L87.5418%2022.1193H87.266C86.3999%2022.1193%2085.0148%2021.6923%2085.0148%2019.7497ZM92.4885%2014.9324V13.2297H89.7847V24.6816H92.4885V18.6596C92.4885%2016.7739%2093.6925%2015.5916%2095.5775%2015.5916C96.009%2015.5916%2096.3956%2015.6365%2096.7137%2015.7056V13.0703C96.5998%2013.0479%2096.1914%2013.0018%2095.8963%2013.0018C94.2602%2013.0025%2093.0338%2013.7527%2092.4885%2014.9324ZM103.38%2012.8885C99.9033%2012.8885%2097.131%2015.5232%2097.131%2018.9553C97.131%2022.3856%2099.9033%2025.0221%20103.38%2025.0221C106.832%2025.0221%20109.627%2022.3856%20109.627%2018.9553C109.626%2015.5238%20106.832%2012.8885%20103.38%2012.8885ZM103.38%2022.5456C101.358%2022.5456%2099.8361%2020.9767%2099.8361%2018.9553C99.8361%2016.9326%20101.358%2015.3651%20103.38%2015.3651C105.379%2015.3651%20106.923%2016.9326%20106.923%2018.9553C106.922%2020.9774%20105.379%2022.5456%20103.38%2022.5456ZM111.303%2024.6816H114.03V8.84382H111.303V24.6816ZM123.862%2019.8866C123.862%2021.7039%20122.795%2022.4777%20121.363%2022.4777C119.932%2022.4777%20118.865%2021.7039%20118.865%2019.911V13.2297H116.115V20.1376C116.115%2023.4097%20118.5%2024.9773%20121.34%2024.9773C124.203%2024.9773%20126.61%2023.3867%20126.61%2020.0691V13.2297H123.862V19.8866ZM136.925%2021.0196L135.206%2018.6148L137.335%2015.7139L139.158%2013.2297H136.182L133.705%2016.6606L131.206%2013.2297H128.253L129.947%2015.5462L132.206%2018.6372L129.838%2021.9356L127.867%2024.6816H130.797L133.704%2020.6368L136.613%2024.6816H139.544L136.925%2021.0196Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_586'%3e%3crect%20width='139.541'%20height='32'%20fill='white'%20transform='translate(0.00384521%200.933594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",zc="/assets/2-lv1xptCk.svg",Sp="/assets/3-xYBlE7jA.svg",Cp="data:image/svg+xml,%3csvg%20width='77'%20height='36'%20viewBox='0%200%2077%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M67.1338%2020.3456H71.0883V24.0242C70.3626%2024.3009%2068.9382%2024.5778%2067.5878%2024.5778C63.2137%2024.5778%2061.7591%2022.3574%2061.7591%2017.8483C61.7591%2013.5451%2063.1439%2011.0128%2067.5138%2011.0128C69.9492%2011.0128%2071.3309%2011.7769%2072.4762%2013.2341L75.4978%2010.4581C73.6527%207.82715%2070.4323%207.02979%2067.4087%207.02979C60.6107%207.02708%2057.0362%2010.7351%2057.0362%2017.8125C57.0362%2024.8547%2060.266%2028.6723%2067.3723%2028.6723C70.6355%2028.6723%2073.8247%2027.8417%2075.5614%2026.6244V16.4251H67.1339L67.1338%2020.3456ZM46.3909%2024.2661H56.4545V28.36H41.5343V7.33832H46.3913L46.3909%2024.2661Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4968%2029.43C35.8453%2023.0815%2035.8449%2012.7878%2029.4961%206.44074C23.1474%200.0925049%2012.854%200.0917411%206.50687%206.44012C0.158384%2012.7885%200.158766%2023.0823%206.5075%2029.4294C12.8561%2035.7781%2023.1497%2035.7783%2029.4968%2029.43Z'%20fill='%23242424'/%3e%3cpath%20d='M13.0698%2014.7643C13.4404%2014.7625%2013.8023%2014.6509%2014.1096%2014.4436C14.4169%2014.2364%2014.6559%2013.9428%2014.7965%2013.5998C14.9372%2013.2568%2014.973%2012.8798%2014.8996%2012.5165C14.8261%2012.1531%2014.6467%2011.8197%2014.384%2011.5583C14.1212%2011.2968%2013.7868%2011.119%2013.4232%2011.0474C13.0596%2010.9757%2012.6828%2011.0134%2012.3405%2011.1556C11.9982%2011.298%2011.7057%2011.5384%2011.4999%2011.8468C11.2942%2012.1551%2011.1845%2012.5174%2011.1845%2012.8881C11.185%2013.1351%2011.2342%2013.3796%2011.3293%2013.6075C11.4245%2013.8355%2011.5635%2014.0425%2011.7385%2014.2167C11.9136%2014.3909%2012.1213%2014.5289%2012.3497%2014.6229C12.5781%2014.7169%2012.8228%2014.7649%2013.0698%2014.7643ZM30.2643%2018.4501H21.9973V17.2255H31.4759C31.4889%2017.4627%2031.4953%2017.6998%2031.4953%2017.9398C31.4953%2025.3134%2025.4857%2031.2907%2018.0744%2031.2907C10.6628%2031.2907%204.65222%2025.3171%204.65222%2017.9398C4.65222%2010.5631%2010.6609%204.58887%2018.0731%204.58887C18.2688%204.58887%2018.4635%204.59282%2018.6572%204.60084V5.81624C18.4635%205.8076%2018.2694%205.80333%2018.0749%205.80333C11.3382%205.80333%205.87505%2011.2371%205.87505%2017.9385C5.87505%2024.6401%2011.3375%2030.0749%2018.0749%2030.0749C24.6272%2030.0749%2029.98%2024.9337%2030.2633%2018.4842L30.2643%2018.4501ZM21.9785%2023.5518H18.6561V11.0698H17.4278V24.7847H18.659V24.7765H21.9813L21.9785%2023.5518Z'%20fill='white'/%3e%3c/svg%3e",Tp="/assets/5-DtA_MHfM.svg",Ep="/assets/6-BYfTVs51.svg",Mp="/assets/7-DtKFqDn5.svg",Ap="/assets/8-C9mdpuht.svg",jp="/assets/9-1he0Czj8.svg",Lp="data:image/svg+xml,%3csvg%20width='191'%20height='24'%20viewBox='0%200%20191%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_699)'%3e%3cmask%20id='mask0_277_699'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='190'%20height='56'%3e%3cpath%20d='M0.970825%2055.6831H189.922V0.547134H0.970825V55.6831Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_277_699)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.577%2023.4158H132.473L121.526%200.547155L110.577%2023.4158ZM188.424%2021.6962C188.63%2021.6962%20188.752%2021.5893%20188.752%2021.4207C188.752%2021.2342%20188.63%2021.1372%20188.424%2021.1372H188.012V21.6962H188.424ZM187.698%2020.8347H188.438C188.656%2020.8347%20188.827%2020.9045%20188.941%2021.0255C189.027%2021.1134%20189.076%2021.2395%20189.076%2021.3932C189.076%2021.6871%20188.92%2021.8643%20188.692%2021.9332L189.138%2022.6008H188.761L188.359%2021.9899H188.012V22.6008H187.698V20.8347ZM189.754%2021.7662C189.754%2020.9234%20189.146%2020.2473%20188.342%2020.2473C187.531%2020.2473%20186.917%2020.9317%20186.917%2021.7662C186.917%2022.6098%20187.526%2023.2846%20188.332%2023.2846C189.142%2023.2846%20189.754%2022.6008%20189.754%2021.7662ZM186.751%2021.775C186.751%2020.8478%20187.452%2020.0793%20188.342%2020.0793C189.23%2020.0793%20189.921%2020.8385%20189.921%2021.7569C189.921%2022.6846%20189.22%2023.4526%20188.332%2023.4526C187.444%2023.4526%20186.751%2022.6932%20186.751%2021.775ZM151.36%2012.3135V4.9244H156.648C159.337%204.9244%20160.934%206.2121%20160.934%208.57187C160.934%2010.867%20159.277%2012.3135%20156.679%2012.3135H151.36ZM159.692%2015.0823C162.586%2014.2016%20164.626%2012.0321%20164.626%208.41529C164.626%206.43127%20164.004%204.79723%20162.913%203.6014C161.582%202.21991%20159.542%201.40306%20156.945%201.40306H147.725V23.4158H151.36V15.7434H155.851L160.99%2023.4158H165.277L159.692%2015.0823ZM105.299%2012.4711C105.299%2016.7781%20102.461%2019.8896%2098.1221%2019.8896H94.0439V4.9244H98.1221C102.461%204.9244%20105.299%208.1%20105.299%2012.4075V12.4711ZM98.1221%201.40306H90.4052V23.4158H98.1221C104.62%2023.4158%20109.115%2018.604%20109.115%2012.4075C109.115%206.14909%20104.62%201.40306%2098.1221%201.40306ZM79.4093%2012.3915V23.4158H83.0453V1.40306H79.4093V12.3915ZM44.2722%2012.0246V23.4158H47.9065V1.40306H44.2722V12.0246ZM25.0175%2012.3135V4.9244H30.3084C32.996%204.9244%2034.5916%206.2121%2034.5916%208.57187C34.5916%2010.867%2032.9373%2012.3135%2030.3371%2012.3135H25.0175ZM33.351%2015.0823C36.2451%2014.2016%2038.2857%2012.0321%2038.2857%208.41529C38.2857%206.43127%2037.6644%204.79723%2036.5719%203.6014C35.2423%202.21991%2033.2018%201.40306%2030.6049%201.40306H21.3849V23.4158H25.0175V15.7434H29.5103L34.6509%2023.4158H38.9361L33.351%2015.0823ZM0.969482%2023.4158H4.60254V14.4522H16.359V10.9338H4.60254V4.9244H16.3646V1.40306H0.969482V23.4158ZM174.298%2019.9561V14.0421H185.997V10.5833H174.298V4.85948H185.997V1.40306H170.664V23.4158H186.002V19.9561H174.298ZM64.0979%2014.1057H69.3824V18.2267C68.1161%2019.2327%2066.3419%2019.8914%2064.3926%2019.8914C60.1678%2019.8914%2057.3605%2016.5598%2057.3605%2012.0321C57.3605%207.7529%2060.2547%204.20078%2064.0658%204.20078C66.697%204.20078%2068.2605%205.11279%2069.8567%206.55844L72.1616%203.63164C70.0378%201.71514%2067.8157%200.646822%2064.215%200.646822C57.9797%200.646822%2053.5473%205.86821%2053.5473%2012.0321C53.5473%2018.508%2057.8041%2023.4158%2064.2719%2023.4158C67.9364%2023.4158%2070.8605%2021.8424%2072.901%2019.9855V10.7377H64.0979V14.1057ZM136.715%2012.3915V23.4158H140.35V1.40306H136.715V12.3915Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M116.09%2019.8828L121.504%208.2977L126.96%2019.8828H116.09Z'%20fill='%23ED114C'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_699'%3e%3crect%20width='190'%20height='24'%20fill='white'%20transform='translate(0.446045)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Op="data:image/svg+xml,%3csvg%20width='197'%20height='18'%20viewBox='0%200%20197%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2176%206.82621L22.529%201.22314H16.5098L12.2064%206.67151C11.7989%207.13951%2011.0096%207.47882%2010.4092%207.47882H9.40262V1.22314H1.12445V16.224H9.37546V11.622H10.6836C11.2827%2011.622%2011.5815%2011.7793%2011.9089%2012.3526L14.2236%2016.224H24.1903L19.5608%208.70343C19.1791%208.07942%2018.144%207.55682%2017.0559%207.55682C16.7842%207.55682%2016.5098%207.58412%2017.2176%206.82621Z'%20fill='%23242424'/%3e%3cpath%20d='M26.857%2016.2085H34.6475V7.50488H26.857V16.2085Z'%20fill='%23242424'/%3e%3cpath%20d='M30.8807%206.77201C33.0351%206.62641%2034.7114%205.5539%2034.6258%204.37608C34.5375%203.19957%2032.7213%202.36106%2030.5683%202.50666C28.4138%202.65226%2026.7375%203.72478%2026.8245%204.89999C26.9114%206.0778%2028.7276%206.91501%2030.8807%206.77201Z'%20fill='%23242424'/%3e%3cpath%20d='M37.6958%207.45174H40.3107V4.5332H47.6625V7.45174H50.7135V10.3183H47.7725V12.0382C47.7725%2013.7581%2049.8414%2013.6528%2050.7665%2012.8741V15.322C47.9355%2016.5206%2043.2789%2016.8339%2041.4002%2015.608C40.4194%2014.958%2040.3107%2014.4354%2040.3107%2013.6528V10.3703H37.6958'%20fill='%23242424'/%3e%3cpath%20d='M68.658%207.9481C64.6276%206.01888%2059.1396%206.35818%2056.4323%207.7661C52.0881%2010.0203%2052.1547%2013.6994%2056.3766%2015.7911C59.4262%2017.3043%2066.6693%2016.8857%2068.6309%2015.1658V12.7439C65.7456%2014.1505%2063.7378%2013.9464%2062.5316%2013.5512C60.6529%2012.9376%2060.6081%2010.3999%2063.0206%209.95402C64.5719%209.66802%2066.5348%209.69402%2068.658%2010.7626'%20fill='%23242424'/%3e%3cpath%20d='M71.2731%202.47656V16.2099H78.5976V11.9862C78.7063%209.32764%2082.1934%209.82295%2082.1934%2011.7795V16.2099H89.4894V10.7902C89.4894%208.23433%2084.6983%205.3678%2078.6533%208.28503L78.7606%202.47656'%20fill='%23242424'/%3e%3cpath%20d='M113.071%207.47901V16.2086H120.915V11.5182C120.915%209.90094%20124.454%209.12093%20124.454%2011.5702V16.1566H131.372V10.8408C131.372%208.34742%20127.651%205.12858%20120.915%208.44362V7.47901'%20fill='%23242424'/%3e%3cpath%20d='M159.285%2016.1994H167.072V7.49707H159.285V16.1994Z'%20fill='%23242424'/%3e%3cpath%20d='M163.31%206.76292C165.463%206.61862%20167.138%205.54741%20167.052%204.36699C166.967%203.19048%20165.149%202.35327%20162.995%202.49887C160.841%202.64317%20159.167%203.71569%20159.253%204.8922C159.338%206.07131%20161.154%206.90852%20163.31%206.76292Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M192.259%205.01547V4.03396H192.943C193.291%204.03396%20193.663%204.10806%20193.663%204.49937C193.663%204.98557%20193.284%205.01547%20192.861%205.01547H192.259ZM192.867%207.95871C194.431%207.95871%20195.768%206.79519%20195.768%205.20527C195.768%203.62836%20194.431%202.46484%20192.867%202.46484C191.286%202.46484%20189.952%203.62836%20189.952%205.20527C189.952%206.79519%20191.286%207.95871%20192.867%207.95871ZM190.528%205.20527C190.528%203.90396%20191.554%202.92245%20192.867%202.92245C194.166%202.92245%20195.192%203.90396%20195.192%205.20527C195.192%206.52739%20194.166%207.5011%20192.867%207.5011C191.554%207.5011%20190.528%206.52739%20190.528%205.20527ZM192.259%205.42238H192.836L193.711%206.79519H194.272L193.329%205.40158C193.815%205.34308%20194.188%205.09477%20194.188%204.52927C194.188%203.90396%20193.802%203.62836%20193.018%203.62836H191.759V6.79519H192.259'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.473%2010.6355H103.389C103.436%209.74884%20102.65%209.30554%20101.815%209.30554C101.119%209.30554%20100.473%209.88014%20100.473%2010.6355ZM110.405%2012.8741C105.449%2012.5088%20100.165%2012.8208%20100.165%2012.8208C101.689%2015.218%20107.9%2014.854%20109.967%2013.2901L109.75%2015.322C105.611%2017.6685%2092.9763%2017.5645%2092.7576%2012.0915C92.5647%207.25931%20100.056%206.56641%20101.689%206.56641C105.555%206.56641%20111.22%208.28633%20110.405%2012.8741Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.468%2010.2156L142.754%206.14911L144.606%2010.2156H140.468ZM133.088%2016.1709H137.335L139.161%2012.8221H145.805L147.386%2016.1709H157.459L149.617%201.25195H139.594C140.577%201.61726%20140.848%202.24126%20140.577%202.76127'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.031%2010.6563C179.721%209.72548%20177.203%209.95819%20177.203%2011.448C177.203%2013.5878%20180.193%2013.2147%20181.031%2012.5634V10.6563ZM188.395%202.5V16.1567H181.044V15.218C177.395%2017.9286%20169.223%2016.4687%20169.223%2012.0915C169.223%206.72115%20178.1%205.99314%20181.095%207.86906V2.5'%20fill='%23242424'/%3e%3c/svg%3e",Rp="data:image/svg+xml,%3csvg%20width='197'%20height='26'%20viewBox='0%200%20197%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M193.375%207.13851V7.56954H192.736V9.81922H192.298V7.56954H191.672V7.13851H193.375ZM193.824%207.02196C193.837%207.03955%20193.86%207.07913%20193.903%207.13851C193.943%207.20008%20193.994%207.27265%20194.054%207.35842C194.115%207.44638%20194.181%207.54314%20194.256%207.6465C194.33%207.75206%20194.407%207.85982%20194.484%207.96757C194.56%208.07753%20194.635%208.18308%20194.709%208.28864C194.784%208.39419%20194.85%208.48876%20194.909%208.57453C194.969%208.6603%20195.02%208.73286%20195.06%208.79004C195.101%208.84722%20195.126%208.8846%20195.137%208.89779C195.141%208.8912%20195.165%208.85821%20195.201%208.80543C195.237%208.75046%20195.286%208.68008%20195.344%208.59652C195.403%208.51295%20195.469%208.41839%20195.541%208.31063C195.616%208.20508%20195.693%208.09511%20195.769%207.98516C195.848%207.8752%20195.925%207.76525%20195.999%207.65749C196.074%207.54974%20196.142%207.45078%20196.206%207.36282C196.267%207.27486%20196.32%207.20008%20196.365%207.13851L196.446%207.01976V9.81922H195.98V8.45138C195.98%208.43159%20195.984%208.41179%20195.988%208.3898C195.993%208.36781%20195.995%208.35462%20195.995%208.35022L195.137%209.6257C195.124%209.6125%20195.097%209.57072%20195.052%209.50475C195.005%209.43878%20194.95%209.35961%20194.884%209.26944C194.822%209.17928%20194.754%209.08032%20194.684%208.97696C194.611%208.8736%20194.545%208.77684%20194.484%208.68667C194.42%208.59651%20194.367%208.52175%20194.322%208.45797C194.279%208.3964%20194.254%208.35901%20194.252%208.34802C194.252%208.35241%20194.252%208.36561%20194.258%208.3876C194.262%208.40959%20194.264%208.43159%20194.264%208.44918V9.81702H193.826V7.01756L193.824%207.02196ZM186.838%2013.87L183.252%2017.4633L179.74%2013.848V20.2804H176.92V7.09892H177.542L183.256%2012.8584L189.056%207.09892H189.659V20.2804H186.838V13.8678V13.87ZM58.3087%2013.87L54.7245%2017.4633L51.2126%2013.848V20.2804H48.3925V7.09892H49.014L54.7287%2012.8584L60.5286%207.09892H61.1288V20.2804H58.3087V13.8678V13.87ZM67.1671%2013.793C67.1671%2010.0721%2069.6999%207.02196%2073.8673%207.02196C78.0347%207.02196%2080.6101%2010.0721%2080.6101%2013.793C80.6101%2017.5139%2078.0773%2020.5641%2073.8673%2020.5641C69.6573%2020.5641%2067.1671%2017.5139%2067.1671%2013.793ZM77.4664%2013.793C77.4664%2011.5433%2075.8957%2010.0501%2073.8652%2010.0501C71.8347%2010.0501%2070.3065%2011.5433%2070.3065%2013.793C70.3065%2016.0427%2071.8772%2017.5359%2073.8652%2017.5359C75.8531%2017.5359%2077.4664%2016.0427%2077.4664%2013.793ZM98.28%2020.2826H97.7841L89.6621%2013.5247V20.2826H86.842V7.10113H87.3379L95.4599%2013.9799V7.12311H98.28V20.2826ZM104.514%2013.793C104.514%2010.0721%20107.049%207.02196%20111.214%207.02196C115.38%207.02196%20117.955%2010.0721%20117.955%2013.793C117.955%2017.5139%20115.422%2020.5641%20111.214%2020.5641C107.006%2020.5641%20104.514%2017.5139%20104.514%2013.793ZM114.816%2013.793C114.816%2011.5433%20113.245%2010.0501%20111.214%2010.0501C109.184%2010.0501%20107.656%2011.5433%20107.656%2013.793C107.656%2016.0427%20109.226%2017.5359%20111.214%2017.5359C113.202%2017.5359%20114.816%2016.0427%20114.816%2013.793ZM130.232%2012.5593H135.97V14.0085C135.97%2017.7954%20133.98%2020.5641%20129.961%2020.5641C125.943%2020.5641%20123.436%2017.5139%20123.436%2013.793C123.436%2010.0721%20125.775%207.02196%20129.961%207.02196C133.29%207.02196%20134.584%208.82742%20134.584%208.82742L132.843%2011.1277C132.843%2011.1277%20131.7%2010.0281%20129.921%2010.0281C127.89%2010.0281%20126.383%2011.5433%20126.383%2013.793C126.383%2016.0427%20127.89%2017.5579%20129.921%2017.5579C131.721%2017.5579%20132.664%2016.4319%20132.705%2015.1565V15.0267H130.234V12.5615L130.232%2012.5593ZM142.131%207.12311H147.861C151.043%207.12311%20152.805%208.99015%20152.805%2011.8226C152.805%2013.6391%20152.009%2014.9366%20150.711%2015.6952L150.577%2015.781L153.538%2020.0649V20.2804H150.277L147.806%2016.4935H144.896V20.2804H142.055L142.127%207.12091L142.131%207.12311ZM147.661%2010.0061H144.898V13.8986H147.682C149.085%2013.8986%20149.86%2013.2498%20149.86%2011.9524C149.86%2010.6549%20149.064%2010.0061%20147.661%2010.0061ZM164.552%207.10113H165.054L171.65%2020.2826H168.215L167.413%2018.5761H162.155L161.391%2020.2826H157.979L164.554%207.10113H164.552ZM164.782%2012.6143L163.056%2016.3704H166.491L164.782%2012.6143ZM4.175%200.635742L1.20588%207.51456H7.11645L14.1721%2023.8891L18.2267%2014.4791L12.2608%200.637943H4.17287L4.175%200.635742ZM25.2355%200.686331L21.1937%2010.0589L27.7896%2025.3647H35.8796L25.2355%200.686331ZM4.14094%2016.7948L0.446045%2025.3647H7.83585L4.14094%2016.7948Z'%20fill='%23242424'/%3e%3c/svg%3e",Dp="/assets/13-_M_Krupi.svg",Hp="data:image/svg+xml,%3csvg%20width='121'%20height='22'%20viewBox='0%200%20121%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M107.367%209.97166V12.1049H110.751V9.97166C110.751%209.05838%20109.987%208.29571%20109.073%208.29571C108.128%208.29571%20107.367%209.05838%20107.367%209.97166ZM116.359%206.95413C111.755%204.66888%20106.94%204.51551%20102.215%206.5272C98.3145%208.17275%2096.4866%2012.6852%2098.1612%2016.587C99.015%2018.5987%20100.446%2019.9997%20102.49%2020.7624C107.154%2022.5295%20111.755%2022.4079%20116.297%2020.3354C118.278%2019.4512%20119.651%2017.988%20120.382%2015.9459H114.408C113.737%2018.0806%20111.451%2019.2978%20109.289%2018.6291C109.105%2018.5683%20108.95%2018.5061%20108.739%2018.4149C107.884%2018.0184%20107.367%2017.1963%20107.367%2016.2513V14.7273H120.534C120.929%2011.4652%20119.314%208.44631%20116.359%206.95413ZM69.6909%209.97166C69.6909%209.05838%2068.9614%208.29571%2068.0177%208.29571C67.1017%208.29571%2066.3418%209.05838%2066.3418%209.97166V12.1049H69.6909V9.97166ZM79.4771%2014.7273C79.8736%2011.4652%2078.2571%208.44631%2075.3018%206.95413C70.7285%204.66888%2065.883%204.51551%2061.1592%206.5272C57.256%208.17275%2055.4599%2012.6852%2057.1026%2016.587C57.9565%2018.5987%2059.4197%2019.9997%2061.4618%2020.7624C66.0958%2022.5295%2070.7285%2022.4079%2075.2714%2020.3354C77.2209%2019.4512%2078.5942%2017.988%2079.3251%2015.9459H73.3495C72.7098%2018.0806%2070.4245%2019.2978%2068.2581%2018.6291C68.0771%2018.5683%2067.8933%2018.5061%2067.7123%2018.4149C66.8571%2018.0184%2066.3418%2017.1963%2066.3418%2016.2513V14.7273H79.4771ZM82.8884%2017.8968V4.21155H80.5133V0.85828H94.1696V17.8968H96.5764V21.2501H80.5133V17.8968H82.8884ZM46.2829%205.52136L51.1919%202.96115L49.6362%200.00441933L44.7286%202.53422L46.2829%205.52136ZM53.1428%2017.8968V5.91789H39.9439V9.27116H42.3494V17.8968H39.9439V21.2501H55.5483V17.8968H53.1428ZM20.0081%208.81383L25.771%200.85828H37.7803V4.21155H35.372V17.8968H37.7803V21.2501H22.1731V17.8968H24.5814V9.02661L15.7112%2021.2501L6.81057%209.02661V17.8968H9.21878V21.2501H0.59314V17.8968H2.96958V4.21155H0.59314V0.85828H14.2176L20.0081%208.81383Z'%20fill='%23242424'/%3e%3c/svg%3e",Vp="/assets/15-VL89vzXY.svg",kp="/assets/16-D9KRuHZe.svg",zp="/assets/17-BRD6G3-l.svg",Pp="/assets/18-D69HL7ID.svg",Np="/assets/19-Dos04ydj.svg",Bp="/assets/21-BwEZSGFZ.svg",$p="/assets/22-CQ_f5juP.svg",_p="data:image/svg+xml,%3csvg%20width='160'%20height='26'%20viewBox='0%200%20160%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.01%2019.347L131.698%201.45459H137.34V24.006H129.228L123.598%205.49849H123.477L123.789%2024.006H118.183V1.45459H126.647L131.884%2019.347H132.01Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4529%203.56613L26.3316%2024.2433H20.1786L24.4041%201.45459H34.5405L38.7466%2024.2433H32.6178L29.5813%203.56613H29.4529Z'%20fill='%23242424'/%3e%3cpath%20d='M53.0771%2024.2433L49.2656%203.75501H49.1421L48.9993%2024.2433H43.2918L43.7955%201.45459H53.094L55.9078%2018.8748H56.0289L58.8451%201.45459H68.1388L68.6328%2024.2433H62.9374L62.7873%203.75501H62.6686L58.8596%2024.2433H53.0771Z'%20fill='%23242424'/%3e%3cpath%20d='M10.5821%2017.8141C10.8048%2018.3662%2010.737%2019.0757%2010.6329%2019.5043C10.4416%2020.2622%209.92826%2021.0347%208.4124%2021.0347C6.98372%2021.0347%206.11683%2020.2162%206.11683%2018.9643V16.7583H0.00497197L0.00012207%2018.5236C0.00012207%2023.6039%204.00044%2025.1367%208.28648%2025.1367C12.4079%2025.1367%2015.8028%2023.7274%2016.3428%2019.9305C16.6188%2017.9618%2016.413%2016.6736%2016.3186%2016.1869C15.3572%2011.4165%206.70767%209.99269%206.06355%207.3242C5.95458%206.86654%205.98606%206.38224%206.03933%206.12314C6.19673%205.39669%206.69556%204.59517%208.12182%204.59517C9.45364%204.59517%2010.2406%205.41848%2010.2406%206.66313C10.2406%207.08205%2010.2406%208.07002%2010.2406%208.07002H15.9239V6.46941C15.9239%201.50535%2011.4683%200.730469%208.24047%200.730469C4.18689%200.730469%200.874285%202.06956%200.268911%205.77929C0.10425%206.80358%200.0800345%207.71648%200.319761%208.85943C1.315%2013.516%209.41006%2014.8647%2010.5821%2017.8141Z'%20fill='%23242424'/%3e%3cpath%20d='M84.685%2017.773C84.9102%2018.3203%2084.8375%2019.0104%2084.7358%2019.439C84.5494%2020.1945%2084.0408%2020.9549%2082.5347%2020.9549C81.1254%2020.9549%2080.2657%2020.1364%2080.2657%2018.9135L80.2609%2016.7269H74.212L74.2047%2018.468C74.2047%2023.4974%2078.1687%2025.0157%2082.4112%2025.0157C86.489%2025.0157%2089.8524%2023.6258%2090.3827%2019.8628C90.6588%2017.9086%2090.4626%2016.6373%2090.3633%2016.1603C89.4069%2011.4335%2080.8444%2010.0242%2080.2076%207.38237C80.0986%206.92713%2080.1301%206.44768%2080.1858%206.20311C80.348%205.47181%2080.8372%204.68967%2082.2489%204.68967C83.5686%204.68967%2084.3387%205.49361%2084.3387%206.72857C84.3387%207.14265%2084.3387%208.12093%2084.3387%208.12093H89.9783V6.53727C89.9783%201.62648%2085.5591%200.856445%2082.3627%200.856445C78.3552%200.856445%2075.0692%202.17858%2074.4759%205.86168C74.3113%206.87144%2074.2943%207.76739%2074.5292%208.90549C75.5099%2013.5136%2083.5251%2014.8527%2084.685%2017.773Z'%20fill='%23242424'/%3e%3cpath%20d='M103.827%2020.8337C105.408%2020.8337%20105.902%2019.7392%20106.011%2019.1799C106.057%2018.9329%20106.069%2018.6035%20106.064%2018.3081V1.44482H111.827V17.7923C111.839%2018.2113%20111.798%2019.0733%20111.779%2019.2888C111.374%2023.5434%20108.011%2024.9236%20103.824%2024.9236C99.6326%2024.9236%2096.2667%2023.5434%2095.8671%2019.2888C95.8478%2019.0733%2095.8066%2018.2113%2095.8187%2017.7923V1.44482H101.577V18.3081C101.577%2018.6035%20101.587%2018.9353%20101.63%2019.1799C101.754%2019.7392%20102.233%2020.8337%20103.827%2020.8337Z'%20fill='%23242424'/%3e%3cpath%20d='M151.365%2020.5938C153.017%2020.5938%20153.593%2019.5502%20153.7%2018.9424C153.741%2018.6809%20153.753%2018.3636%20153.751%2018.0755V14.7677H151.411V11.4406H159.492V17.5573C159.487%2017.9835%20159.477%2018.2983%20159.41%2019.0586C159.029%2023.2042%20155.433%2024.6837%20151.394%2024.6837C147.348%2024.6837%20143.757%2023.2042%20143.372%2019.0586C143.307%2018.2983%20143.297%2017.9835%20143.29%2017.5573L143.295%207.96089C143.295%207.5565%20143.345%206.83974%20143.389%206.45957C143.895%202.20016%20147.348%200.82959%20151.394%200.82959C155.436%200.82959%20158.974%202.19289%20159.393%206.45957C159.468%207.18601%20159.443%207.96089%20159.443%207.96089V8.72124H153.697V7.44511C153.702%207.44754%20153.69%206.9027%20153.622%206.57822C153.525%206.07455%20153.087%204.91707%20151.351%204.91707C149.69%204.91707%20149.203%206.01159%20149.082%206.57822C149.012%206.87848%20148.985%207.2853%20148.985%207.65336V18.0755C148.98%2018.3636%20148.997%2018.6809%20149.043%2018.9424C149.142%2019.5526%20149.716%2020.5938%20151.365%2020.5938Z'%20fill='%23242424'/%3e%3c/svg%3e",Up="/assets/24-Dmws8xhr.svg",Gp="/assets/25-BaRLqQy_.svg",Ip="/assets/26-B2H6SqHt.svg",qp="/assets/27-DBraEacE.svg",Yp="data:image/svg+xml,%3csvg%20width='112'%20height='33'%20viewBox='0%200%20112%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_720)'%3e%3cpath%20d='M77.422%2013.2852C76.096%2013.3501%2073.7527%2014.0702%2073.2182%2016.3711L71.3498%2027.2529C70.9268%2029.6026%2072.0997%2032.2635%2074.6194%2032.2878H88.6321C90.433%2032.2608%2092.5012%2031.6842%2092.9916%2028.8771L95.0157%2017.508C95.3946%2015.2206%2093.8791%2013.3501%2091.7461%2013.2852H77.422Z'%20fill='%23242424'/%3e%3cpath%20d='M79.1346%2018.6451C78.1641%2018.5991%2077.8891%2018.9591%2077.7334%2019.4572L76.6435%2025.3041C76.5786%2026.1487%2077.0613%2027.0122%2077.8891%2027.0907H86.7638C87.6071%2027.0122%2088.2974%2026.4383%2088.4765%2025.629L89.4106%2020.2692C89.6753%2019.3191%2089.1927%2018.6018%2088.3208%2018.6451H79.1346Z'%20fill='white'/%3e%3cpath%20d='M70.5738%2018.6455H57.8067C56.8673%2018.5995%2056.5896%2018.9595%2056.4054%2019.4576L55.4712%2025.3046C55.2818%2026.1491%2055.7644%2027.0126%2056.7168%2027.0911H69.0168L68.0826%2032.2885H53.2915C50.8029%2032.2614%2049.63%2029.6005%2050.0218%2027.2536L52.0459%2016.3717C52.4559%2014.0681%2054.7991%2013.3507%2056.094%2013.2858H71.508L70.5738%2018.6455ZM43.48%2018.6455H31.0242L31.9584%2013.2858H45.9711C48.5245%2013.3507%2049.6949%2016.0117%2049.2407%2018.3207L47.3724%2029.2025C46.8716%2031.544%2044.5283%2032.2614%2043.1686%2032.2885H29.9344C27.3628%2032.2614%2026.1924%2029.6005%2026.6647%2027.2536L27.2875%2023.1932C27.778%2020.83%2030.1212%2020.11%2031.4913%2020.1072H43.1686C44.0457%2020.11%2044.7359%2018.6022%2043.48%2018.6455ZM25.7305%2018.6455H28.5331L29.4673%2013.2858H26.6647L28.8445%200.29248H23.8622L21.6824%2013.2858H7.51402C6.13351%2013.3507%203.79028%2014.0708%203.31021%2016.3717L1.44185%2027.2536C0.964382%2029.6032%202.1347%2032.2641%204.71148%2032.2885H20.9039C22.0561%2032.2614%2023.5015%2031.184%2023.7065%2029.5274L25.7305%2018.6455Z'%20fill='%23242424'/%3e%3cpath%20d='M7.98386%2027.0908C7.10158%2027.0123%206.61892%2026.1488%206.73829%2025.3042L7.82557%2019.4572C7.92677%2018.9592%208.20184%2018.6018%209.07115%2018.6452H20.7484L19.1914%2027.0908H7.98386Z'%20fill='white'/%3e%3cpath%20d='M103.268%2014.9093L104.513%2013.7724C105.115%2013.3501%20105.803%2013.3501%20106.537%2013.2852H111.052L110.118%2018.6449H105.136C103.875%2018.5989%20102.152%2019.2485%20101.866%2021.0811L99.8423%2032.2878H94.7043L98.1296%2013.2852H102.645L103.268%2014.9093Z'%20fill='%23242424'/%3e%3cpath%20d='M32.4256%2027.0908C31.6368%2027.0123%2031.4993%2025.3583%2032.737%2025.3042H43.013L42.7016%2027.0908H32.4256Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_720'%3e%3crect%20width='109.714'%20height='32'%20fill='white'%20transform='translate(1.33813%200.290039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Fp="/assets/29-yivH26vR.svg",Zp="/assets/30-DGc1459t.svg",Xp="data:image/svg+xml,%3csvg%20width='121'%20height='36'%20viewBox='0%200%20121%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.45829%2023.2381H3.99829L2.66629%2018.1861H9.61429L21.9503%200.810059H31.3103L28.9703%2018.1261L41.9903%2018.1859L42.5663%2018.8819C45.6863%2016.7461%2049.8983%2016.7461%2051.4101%2019.4461C53.4981%2017.1899%2058.1781%2017.0579%2059.7621%2019.9499C60.3621%2021.0657%2060.2661%2022.5421%2059.7621%2024.3181L57.8663%2030.3901C57.9863%2031.0141%2058.6823%2032.4061%2056.9783%2032.4061H50.3423L52.4903%2025.7101C53.0543%2023.7419%2050.6543%2023.7419%2050.0903%2025.6499L48.0023%2032.3462H41.1743L43.2623%2025.5181C43.8863%2023.5621%2041.3543%2023.5621%2040.8503%2025.5779L38.7623%2032.2859H31.6223L33.8303%2025.1339C33.9623%2024.6301%2033.9023%2024.1859%2032.9543%2024.1859H28.1423L27.0743%2032.2501L16.7663%2032.2859L18.1583%2024.1859H12.1463L4.87429%2035.1897L0.446289%2031.7101L6.45829%2023.2381ZM16.0103%2018.1741L19.2023%2018.2102L20.3063%2011.8022L16.0103%2018.1741ZM107.222%2032.5262C105.578%2033.0301%20102.794%2033.3541%20101.222%2031.9621C99.6383%2030.5701%2099.5785%2027.1499%20100.526%2024.6899C101.786%2021.3419%20104.066%2018.2459%20107.474%2017.7421C109.694%2017.4301%20112.406%2018.3061%20113.99%2019.6981L114.302%2018.6899H120.446L116.642%2030.9539C116.894%2031.5779%20117.47%2032.4659%20116.138%2032.4659H109.694L110.042%2031.2661C109.214%2031.7342%20108.242%2032.2739%20107.222%2032.5262ZM107.042%2026.6821C107.198%2026.9341%20107.582%2027.2579%20108.278%2027.0059C109.514%2026.5859%20111.662%2024.5701%20112.01%2023.1419C111.122%2021.8817%20109.862%2021.5937%20108.53%2022.7341C107.774%2023.3941%20106.514%2025.7701%20107.042%2026.6821ZM62.1505%2031.9621C60.5665%2030.5701%2060.5063%2027.2222%2061.4545%2024.6899C62.6543%2021.3419%2064.9941%2018.2459%2068.4145%2017.7541C70.6225%2017.4421%2073.3465%2018.3061%2074.9305%2019.6981L75.2423%2018.6899H81.3745L77.5825%2030.9539C77.8345%2031.5899%2078.3985%2032.4659%2077.0786%2032.4659H70.6226L70.9706%2031.3379C70.1546%2031.8061%2069.1346%2032.2859%2068.1626%2032.5377C66.5183%2032.9819%2063.7345%2033.3541%2062.1505%2031.9621ZM68.2465%2026.6821C68.3783%2026.9702%2068.8223%2027.2579%2069.4825%2027.0059C70.7185%2026.5619%2072.8663%2024.5701%2073.2143%2023.1419C72.3263%2021.8817%2071.0903%2021.5339%2069.7345%2022.7341C69.0385%2023.3699%2067.8025%2025.6741%2068.2465%2026.6821ZM86.6181%2032.3342L88.7063%2025.6382C89.2821%2023.7421%2091.5503%2023.6822%2090.9863%2025.6382L89.0901%2032.4061H95.5943C97.3101%2032.4061%2096.6141%2031.0141%2096.4823%2030.3781L98.3781%2024.3061C98.882%2022.5421%2098.9181%2021.4021%2098.2583%2020.2019C96.77%2017.5499%2092.4981%2017.4659%2090.0383%2019.6261L89.5943%2018.7501H83.966L79.7901%2032.3341H86.6181V32.3342Z'%20fill='%23242424'/%3e%3c/svg%3e",LR=[{id:1,imageUrl:bp},{id:2,imageUrl:zc},{id:3,imageUrl:Sp},{id:4,imageUrl:Cp},{id:5,imageUrl:Tp},{id:6,imageUrl:Ep},{id:7,imageUrl:Mp},{id:8,imageUrl:Ap},{id:9,imageUrl:jp},{id:10,imageUrl:Lp},{id:11,imageUrl:Op},{id:12,imageUrl:Rp},{id:13,imageUrl:Dp},{id:14,imageUrl:Hp},{id:15,imageUrl:Vp},{id:16,imageUrl:kp},{id:17,imageUrl:zp},{id:18,imageUrl:Pp},{id:19,imageUrl:Np},{id:20,imageUrl:zc},{id:21,imageUrl:Bp},{id:22,imageUrl:$p},{id:23,imageUrl:_p},{id:24,imageUrl:Up},{id:25,imageUrl:Gp},{id:26,imageUrl:Ip},{id:27,imageUrl:qp},{id:28,imageUrl:Yp},{id:29,imageUrl:Fp},{id:30,imageUrl:Zp},{id:31,imageUrl:Xp}],OR=M.div`
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
`,RR=M.img`
  height: 32px;
  max-width: min-content;
  /* width: auto; */
  object-fit: contain;
  filter: brightness(1) invert(1);
  transition: all 0.3s ease;
  overflow: visible;
`,DR=M(Xt)`
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
`,HR=()=>y.jsx(OR,{children:y.jsx(DR,{direction:"vertical",slidesPerView:10,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:4e3,modules:[dn],grabCursor:!1,allowTouchMove:!1,children:LR.map(t=>y.jsx(Kt,{children:y.jsx(RR,{src:t.imageUrl,alt:`Partner ${t.id}`,onError:e=>{e.target.style.display="none"}})},t.id))})}),VR=()=>{const t=_e({query:"(min-width: 1440px)"});return y.jsxs(Aj,{children:[y.jsx(jj,{src:jR,alt:"Hero Image"}),t&&y.jsx(HR,{}),y.jsxs(Lj,{children:[y.jsxs(Oj,{children:[y.jsx(Rj,{children:"Your Local Appliance Repair & Maintenance Specialists"}),y.jsx(Dj,{children:"We provide reliable appliance repair services, so your fridge, oven, or washer works like new — and you can get back to your day."})]}),y.jsxs(Hj,{children:[y.jsx(Qy,{to:"/contact#ap",children:"Contact Us"}),y.jsx(f5,{children:y.jsx("a",{href:"tel:+18055002705",children:" Call Us"})})]})]})]})},kR="/assets/News%20Article%202%20Image%20Container-Dg9jwMew.png",zR="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",PR="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",NR="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",Ex=[{img:kR,title:"APPLIANCE INSTALLATION SERVICES",description:"Professional installation for appliances, ensuring safety."},{img:zR,title:"WHEN YOUR REFRIGERATOR STOPS COOLING: URGENT REPAIR SIGNS",description:"Don't wait for food to spoil. Know the signs needing urgent help."},{img:PR,title:"WASHING MACHINE TROUBLESHOOTING",description:"Quick solutions for common washing machine issues."},{img:NR,title:"DISHWASHER MAINTENANCE TIPS",description:"Keep your dishwasher running smoothly with these tips."}],BR=()=>{const t=R.useRef(null),e=_e({query:"(max-width: 767px)"}),i=_e({query:"(min-width: 768px)"}),r=_e({query:"(min-width: 1440px)"}),o=e?1:2,l=Ex.length>o;return y.jsxs(UR,{children:[y.jsxs(GR,{children:[y.jsx(IR,{children:"NEWS & TIPS"}),y.jsxs(qR,{children:["APPLIANCE ",y.jsx("span",{children:"ADVICE"})," REPAIR ",y.jsx("span",{children:"TIPS"})," BLOG"]})]}),y.jsxs(_R,{children:[y.jsx(Mx,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slidePrev()},bg:"#DBDBD8",children:y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:y.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),y.jsx(Mx,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slideNext()},bg:"#3098EE",children:y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:y.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),y.jsx($R,{$isTablet:i,children:y.jsx(Xt,{modules:[iv,dn],onSwiper:u=>t.current=u,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:Ex.map((u,d)=>y.jsx(Kt,{children:y.jsxs(YR,{$isTablet:i,children:[y.jsx(FR,{src:u.img,alt:u.title,$isTablet:i}),y.jsxs(ZR,{children:[y.jsx(XR,{$isTablet:i,children:u.title}),y.jsx(KR,{$isTablet:i,children:u.description})]})]})},d))})})]})},$R=M.div`
  width: 100%;
  padding: 20px 0;
  
  .swiper-slide {
    width: ${t=>t.$isTablet?"50%":"auto"};
  }
`,_R=M.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,Mx=M.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${t=>t.bg};
  border: none;
  cursor: pointer;
`,UR=M.div`
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
`,GR=M.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,IR=M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);
  
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,qR=M.p`
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
`,YR=M.div`
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
`,FR=M.img`
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
`,ZR=M.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,XR=M.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,KR=M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,WR=M.div`
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
`;M.p`
  padding: 10px auto 50px auto;
  width: 90%;
  height: 1px; /* Збільшуємо висоту для еліпса */
  margin: 20px auto;
  background: radial-gradient(
      ellipse 118.85px 58.06px at 50% 50%,
      rgb(252, 252, 252) 0%,
      rgba(58, 55, 55, 0.42) 80%
    );
`;M.div`
height : auto;
width: 100%;
padding: 0 auto;
margin: 0 auto;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){

margin-right: 50px;
}
`;const nc=M.img`
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
`,QR=M(vn.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,JR=M(vn.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,eD=M.h3`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 90%;
text-transform: uppercase;
text-align: center;
color: var(--black-500);
`,vv="data:image/svg+xml,%3csvg%20width='212'%20height='14'%20viewBox='0%200%20212%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_572)'%3e%3cpath%20d='M0.00384521%2013.2272V0.640137H8.99637V3.40837H3.33527V5.99308H8.54597V8.76131H3.33527V13.2272H0.00384521Z'%20fill='%23242424'/%3e%3cpath%20d='M18.6412%2013.2272H15.3253V0.640137H18.6412V13.2272Z'%20fill='%23242424'/%3e%3cpath%20d='M25.0556%209.25083C26.3309%2010.122%2027.8304%2010.6204%2029.381%2010.6885C30.3595%2010.6885%2031.2758%2010.4591%2031.2758%209.61789C31.2758%209.02907%2030.8409%208.79966%2030.1964%208.61613L28.2628%208.08083C26.1117%207.44613%2024.9935%206.43671%2024.9935%204.44848C24.9935%202.0473%2027.1368%200.472008%2029.8858%200.472008C31.2634%200.447396%2032.6243%200.771251%2033.8385%201.4126V4.47142C32.6991%203.68452%2031.3471%203.2505%2029.9557%203.22495C28.9617%203.22495%2028.255%203.50789%2028.255%204.20377C28.255%204.71613%2028.6045%204.9226%2029.2723%205.12907L31.2059%205.7026C33.5356%206.42142%2034.5995%207.5073%2034.5995%209.39613C34.5995%2012.1032%2032.1223%2013.4949%2029.3732%2013.4949C27.8643%2013.4989%2026.378%2013.1337%2025.0478%2012.432L25.0556%209.25083Z'%20fill='%23242424'/%3e%3cpath%20d='M52.4525%200.640137V13.2272H49.1211V8.18778H44.2676V13.2272H40.8973V0.640137H44.2676V5.41955H49.1599V0.640137H52.4525Z'%20fill='%23242424'/%3e%3cpath%20d='M68.6747%200.640137V3.40837H62.9049V5.41955H68.2166V8.18778H62.9049V10.4819H68.7136V13.2501H59.5347V0.640137H68.6747Z'%20fill='%23242424'/%3e%3cpath%20d='M75.524%200.640137H80.9599C83.8098%200.640137%2085.9764%202.16955%2085.9764%204.98367C86.0132%205.85467%2085.761%206.71377%2085.2581%207.43116C84.7551%208.14856%2084.0287%208.68525%2083.1886%208.96014L86.5589%2013.2272H82.6761L79.6553%209.33484H78.8244V13.2272H75.524V0.640137ZM78.8554%206.55131H80.7657C81.9694%206.55131%2082.746%205.9319%2082.746%204.96837C82.746%204.00484%2081.9694%203.39308%2080.7657%203.39308H78.8709L78.8554%206.55131Z'%20fill='%23242424'/%3e%3cpath%20d='M106.485%2012.1795C105.502%2013.0123%20104.241%2013.4588%20102.944%2013.4337C100.242%2013.4337%2097.9897%2011.6901%2097.9897%208.84543C98.0077%208.02146%2098.2249%207.21358%2098.6233%206.48878C99.0217%205.76399%2099.5899%205.14316%20100.281%204.67778L99.007%203.14837V0.640137H107.549V3.40837H102.991L106.446%207.7519L107.223%206.56661H110.679L108.217%2010.0537L110.756%2013.2272H107.285L106.485%2012.1795ZM104.738%2010.0537L102.051%206.78837C101.716%207.01078%20101.442%207.31015%20101.251%207.66058C101.06%208.01101%20100.959%208.40194%20100.956%208.79955C100.953%209.05676%20101.003%209.31195%20101.102%209.54974C101.202%209.78752%20101.349%2010.003%20101.536%2010.1831C101.722%2010.3631%20101.944%2010.5042%20102.187%2010.5976C102.431%2010.691%20102.691%2010.7349%20102.952%2010.7266C103.28%2010.737%20103.607%2010.6828%20103.914%2010.5673C104.22%2010.4518%20104.501%2010.2771%20104.738%2010.0537Z'%20fill='%23242424'/%3e%3cpath%20d='M126.264%2013.2272H122.933V0.640137H128.369C131.219%200.640137%20133.385%202.16955%20133.385%204.98367C133.385%207.79778%20131.219%209.33484%20128.369%209.33484H126.264V13.2272ZM126.264%206.56661H128.136C129.347%206.56661%20130.116%205.9472%20130.116%204.98367C130.116%204.02014%20129.339%203.40837%20128.136%203.40837H126.241L126.264%206.56661Z'%20fill='%23242424'/%3e%3cpath%20d='M145.997%2010.9101H140.879L139.963%2013.2043H136.678L141.881%200.640137H145.049L150.252%2013.2272H146.897L145.997%2010.9101ZM141.982%208.1419H144.894L143.442%204.45602L141.982%208.1419Z'%20fill='%23242424'/%3e%3cpath%20d='M157.288%2013.2272V8.34837L152.457%200.640137H156.208L159.058%205.49602L161.908%200.640137H165.449L160.619%208.34837V13.2272H157.288Z'%20fill='%23242424'/%3e%3cpath%20d='M173.487%205.99308L177.571%200.640137H181.454L176.733%206.66602L181.64%2013.2272H177.688L173.487%207.59131V13.2272H170.155V0.640137H173.487V5.99308Z'%20fill='%23242424'/%3e%3cpath%20d='M195.751%200.640137V3.40837H189.934V5.41955H195.246V8.18778H189.934V10.4819H195.751V13.2501H186.603V0.640137H195.751Z'%20fill='%23242424'/%3e%3cpath%20d='M202.6%200.640137H205.931V10.459H211.678V13.2272H202.6V0.640137Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_572'%3e%3crect%20width='212'%20height='13'%20fill='white'%20transform='translate(0.00384521%200.433594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",tD=()=>{const t=_e({query:"(max-width: 743px)"}),e=_e({query:"(min-width: 744px) and (max-width: 1023px)"}),i=_e({query:"(min-width: 1024px)"}),r=[{id:1,imageUrl:bp},{id:2,imageUrl:zc},{id:3,imageUrl:Sp},{id:4,imageUrl:Cp},{id:5,imageUrl:Tp},{id:6,imageUrl:Ep},{id:7,imageUrl:Mp},{id:8,imageUrl:Ap},{id:9,imageUrl:jp},{id:10,imageUrl:Lp},{id:11,imageUrl:Op},{id:12,imageUrl:Rp},{id:13,imageUrl:Dp},{id:14,imageUrl:Hp},{id:15,imageUrl:Vp},{id:16,imageUrl:kp},{id:17,imageUrl:zp},{id:18,imageUrl:Pp},{id:19,imageUrl:Np},{id:20,imageUrl:vv},{id:21,imageUrl:Bp},{id:22,imageUrl:$p},{id:23,imageUrl:_p},{id:24,imageUrl:Up},{id:25,imageUrl:Gp},{id:26,imageUrl:Ip},{id:27,imageUrl:qp},{id:28,imageUrl:Yp},{id:29,imageUrl:Fp},{id:30,imageUrl:Zp},{id:31,imageUrl:Xp}],o=t?2:e?4:5,l=r.length>o;return y.jsxs("div",{children:[y.jsx(eD,{children:"Quality Service for Major & Luxury Brands"}),y.jsxs(WR,{children:[y.jsx(QR,{}),y.jsx(Xt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[dn],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:r.map(u=>y.jsx(Kt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?y.jsx(nc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):y.jsx(nc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),y.jsx(Xt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[dn],className:"mySwiper",style:{width:"100%"},children:r.map(u=>y.jsx(Kt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?y.jsx(nc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):y.jsx(nc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),y.jsx(JR,{})]})," "]})},wv="/assets/ServicesImage-BRQYmF9y.png",nD=M.div`
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
`,iD=M.p`
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
`,aD=M.div`
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
`,rD=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Ax=M.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,sD=M.p`
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
`,oD=M.p`
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
`,jx=M.p`
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
`,lD=M.p`
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
`,cD=M.img`
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
`,Lx=M.div`
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
`,Ox=M.p`
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
`,hh=M.button`
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
`,Rx=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${hh}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,uD=M.div`
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
`,dD=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,fD=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,hD=M.p`
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
`,pD=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,mD=M.button`
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
`,Kp=M.button`
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
`,bv=M.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Kp}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,gD=M(bv)`
  color: #242424;

  ${Kp}:hover & {
    color: white;
  }
`,xD=M.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,yD=()=>{const t=_e({query:"(min-width: 1440px)"});return y.jsxs(nD,{children:[y.jsx(iD,{children:"Our Service"}),y.jsxs(aD,{children:[y.jsxs(rD,{children:[y.jsxs(Ax,{children:[y.jsx(sD,{children:"01."}),y.jsx(oD,{children:"Appliance Care & Tune-Ups"})]}),y.jsx(jx,{children:"Professional Installations"}),y.jsx(jx,{children:"Fast & Reliable Emergency Repairs"}),t&&y.jsxs(Lx,{children:[y.jsx(Ox,{children:"Do you want to know more about our service?"}),y.jsx(hh,{children:y.jsx(Rx,{children:"Learn more"})})]})]}),y.jsxs(xD,{children:[y.jsx(cD,{src:wv,alt:"Services Image"}),y.jsxs(uD,{children:[y.jsxs(dD,{children:[y.jsx(Ax,{children:y.jsx(lD,{children:"Preventive Care"})}),y.jsx(fD,{children:y.jsx(hD,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})]}),y.jsxs(pD,{children:[y.jsx(mD,{children:y.jsx(bv,{children:"Contact Us"})}),y.jsx(Kp,{children:y.jsx("a",{href:"tel:+18055002705",children:y.jsx(gD,{children:"Call Us"})})})]})]})]}),!t&&y.jsxs(Lx,{children:[y.jsx(Ox,{children:"Do you want to know more about our service?"}),y.jsx(hh,{children:y.jsx(Rx,{children:"Learn more"})})]})]})]})},vD="/assets/Service%20Area%20Section-B7et7wWI.webp",wD=M.div`
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
`,bD=M.h2`
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
`,SD=M.p`
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
`,CD=M.div`
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
`,TD=M.div`
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
`,ED=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,MD=M.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,AD=M.p`
  color: #3098ee;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,jD=M.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,LD=[{county:"Ventura County",city:"Thousand Oaks",icon:y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:y.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Newbury Park",icon:y.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:y.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Westlake Village",icon:y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:y.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Oak Park",icon:y.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:y.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Lake Sherwood",icon:y.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:y.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Hidden Valley",icon:y.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:y.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Camarillo",icon:y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:y.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Agoura Hills",icon:y.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:y.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Moorpark",icon:y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:y.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Calabasas",icon:y.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:y.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Santa Rosa Valley",icon:y.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:y.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Malibu",icon:y.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:y.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}],OD=()=>y.jsxs(wD,{$bg:vD,children:[y.jsx(bD,{children:"Serving Ventura and Los Angeles Counties"}),y.jsx(SD,{children:"We provide expert service throughout the greater Los Angeles area."}),y.jsx(CD,{children:LD.map((t,e)=>y.jsxs(TD,{children:[y.jsxs(ED,{children:[y.jsx(MD,{children:t.icon}),y.jsx(AD,{children:t.county})]}),y.jsx(jD,{children:t.city})]},e))})]}),RD="/assets/WhyAirtexnoImage-BBTHkk8n.png",Dx="/assets/WhyAirtexnoImage2-BIh43Sbv.png",DD="/assets/WhyAirtexnoImage3-C5uIh3SS.png",S0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2011H4.6C4.03995%2011%203.75992%2011%203.54601%2011.109C3.35785%2011.2049%203.20487%2011.3578%203.10899%2011.546C3%2011.7599%203%2012.0399%203%2012.6V21M16.5%2011H19.4C19.9601%2011%2020.2401%2011%2020.454%2011.109C20.6422%2011.2049%2020.7951%2011.3578%2020.891%2011.546C21%2011.7599%2021%2012.0399%2021%2012.6V21M16.5%2021V6.2C16.5%205.0799%2016.5%204.51984%2016.282%204.09202C16.0903%203.71569%2015.7843%203.40973%2015.408%203.21799C14.9802%203%2014.4201%203%2013.3%203H10.7C9.5799%203%209.01984%203%208.59202%203.21799C8.2157%203.40973%207.90973%203.71569%207.71799%204.09202C7.5%204.51984%207.5%205.0799%207.5%206.2V21M22%2021H2M11%207H13M11%2011H13M11%2015H13'%20stroke='%233098EE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",HD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206V12L16%2014M22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",VD=()=>{const t=_e({query:"(max-width: 743px)"}),e=_e({query:"(min-width: 744px) and (max-width: 1023px)"}),i=_e({query:"(min-width: 1024px)"}),r=_e({query:"(min-width: 1440px)"}),o=[{title:"Manufacturer-Trained Technicians",text:"Our team is trained to service leading brands like Sub-Zero, Viking, GE Monogram, and more — ensuring expert repairs done right the first time.",image:RD,icon:S0},{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:Dx,icon:HD},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:DD,icon:S0},{title:"Local & Fair Pricing",text:"As a local Thousand Oaks company, we treat our community like neighbors. With direct access to parts and highly trained techs, we keep our prices fair — without steep markups. While costs keep rising everywhere, we work hard to keep appliance repair affordable.",image:Dx,icon:S0}],l=t?1:e?2:3,u=o.length>l;return y.jsxs(FO,{children:[y.jsxs(ZO,{children:[y.jsx(XO,{children:"why airtexno"}),y.jsxs(KO,{children:["Same-Day Appliance Repair ",y.jsx(gv,{children:"You Can Rely On"})," "]})]}),y.jsx(aR,{children:y.jsx(QO,{$isLargeDesktop:r,children:y.jsx(Xt,{modules:[dL,dn],pagination:{clickable:!0},spaceBetween:r?0:20,loop:u,slidesPerView:l,centeredSlides:r,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,className:"businessSwiper",children:o.map((d,f)=>y.jsx(Kt,{children:y.jsx(eR,{style:{backgroundImage:`url(${d.image})`},$isLargeDesktop:r,className:"slide-container",children:(d.title||d.text||d.icon)&&y.jsxs("div",{className:"overlay",children:[(d.title||d.icon)&&y.jsxs(tR,{children:[d.title&&y.jsx(WO,{children:d.title}),d.icon&&y.jsx(nR,{className:"icon-wrapper",children:y.jsx("img",{src:d.icon,alt:d.title||"icon",className:"icon-image"})})]}),d.text&&y.jsx(iR,{className:"slide-text",children:d.text})]})})},f))})})})]})},kD=M.div`
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
`,C0=()=>y.jsx(y.Fragment,{children:y.jsxs(kD,{id:"hero",children:[y.jsx(VR,{}),y.jsx(yD,{}),y.jsx(VD,{}),y.jsx(xv,{}),y.jsx(OD,{}),y.jsx(tD,{}),y.jsx(yv,{}),y.jsx(BR,{}),y.jsx(wp,{})]})}),zD=M.div`
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
  `,PD="/assets/Team%20Member%20Image-mppsJqlp.png",ND="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99992%200.833008V17.1663M0.833252%208.99967H17.1666'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",BD=M.div`
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
`,$D=M.div`
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
`,_D=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,UD=M.img`
  border-radius: 74px;
  width: 119px;
  height: 119px;
  object-fit: cover;
  margin-bottom: 36px;
`,GD=M.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,ID=M.p`
  color: #242424;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 400;
  line-height: 1em;
  width: 100%;
  padding-bottom: 16px;
`,qD=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,YD=M.button`
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
`,FD=M.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
`,ZD=M.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`,XD=M.div`
  position: relative;
  width: 44px;
  height: 44px;
`,KD=M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  background: #c6e6ff;
  border-radius: 100px;
`,WD=M.p`
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
const QD=M.div`
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
`,JD=M.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);
  margin-bottom: 48px;
`;M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 26px;
`;const eH=M.div`
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
`,tH=M.button`
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
`,nH=M.div`
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
`,iH=M.img.attrs(()=>({}))`
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
`,aH=M.div`
  @media screen and (min-width: 1440px) {
    min-width: 650px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,rH=M.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;

    flex-shrink: 0; /* Забороняємо звуження */
  }
`,Sv=()=>{const[t,e]=R.useState(null),i=[{question:"How quickly can you repair my appliance?",answer:"Most repairs are completed within 2-4 hours. We offer same-day service for urgent cases and typically schedule appointments within 24-48 hours of your call."},{question:"Do you offer emergency repair services?",answer:"Yes, we provide urgent repairs for urgent situations to minimize your inconvenience. Our emergency service is available 7 days a week with response times as quick as 2 hours."},{question:"What brands and appliances do you service?",answer:"We service all major brands including Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, and more. We repair refrigerators, ovens, dishwashers, washing machines, dryers, microwaves, and other household appliances."},{question:"How do I schedule a repair?",answer:"You can schedule a repair by calling our hotline, filling out the online form on our website, or texting us. We'll arrange a convenient time slot and provide a technician with the necessary parts."},{question:"What if I'm not satisfied with the repair?",answer:"We offer a 90-day warranty on all repairs and parts. If you're not satisfied, we'll re-repair your appliance at no additional cost or provide a full refund for the service."},{question:"How much will the repair cost?",answer:"Repair costs vary based on the appliance type and issue complexity. We provide free diagnostics and transparent upfront pricing before any work begins. Typical repairs range from $150-$400 including parts and labor."}],r=o=>{e(l=>l===o?null:o)};return y.jsxs(BD,{children:[y.jsxs($D,{children:[y.jsxs(_D,{children:[y.jsx(UD,{src:PD,alt:"Team Member Image"}),y.jsxs(GD,{children:[y.jsxs("div",{children:[y.jsx(ID,{children:"Book a Call"}),y.jsx(qD,{children:"Time to get introduced and explore how we can help"})]}),y.jsx("a",{href:"tel:+18055002705",children:y.jsxs(YD,{children:[y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),y.jsx(FD,{children:"Call us now"})]})})]})]}),y.jsxs(ZD,{children:[y.jsxs(XD,{children:[y.jsx(KD,{}),y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",left:"10px",top:"10px"},children:y.jsx("path",{d:"M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z",stroke:"#808080",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),y.jsxs(WD,{children:["Prefer email communication?",y.jsx("br",{}),y.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]})]})]}),y.jsxs(QD,{children:[y.jsx(aH,{children:y.jsx(vn.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!1,amount:.3},children:y.jsx(JD,{children:"Frequently Asked Questions"})})}),y.jsx(rH,{children:i.map((o,l)=>y.jsx(vn.div,{initial:{opacity:0,y:l%2===0?40:-40},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:l*.1},viewport:{once:!1,amount:.3},children:y.jsxs(eH,{children:[y.jsxs(tH,{onClick:()=>r(l),children:[o.question,y.jsx(iH,{src:ND,alt:"Toggle answer",$rotate:t===l})]}),y.jsx(vn.div,{initial:{opacity:0,scale:.9},animate:t===l?{opacity:1,scale:1}:{opacity:0,scale:.9},transition:{duration:.4},style:{overflow:"hidden"},children:y.jsx(nH,{$isOpen:t===l,children:o.answer})})]})},l))})]})]})},sH=M.div`
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
`,oH=M.img`
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
`,lH=M.div`
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
`,cH=M.div`
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
`,uH=M.p`
  color: #fff;
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
    color: var(--white);
    width: 696px;

  }

  @media screen and (min-width: 1440px) {
  }
`,dH=M.p`
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
`;M.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;M(Gi)`
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
`;M.button`
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
`;M.div`
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
`;M.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;M.div`
  display: flex;
  align-items: center;
  gap: 7px;
  width: 156px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;M.img`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  max-width: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;M.div`
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
`;M.div`
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
`;M.span`
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
`;M.p`
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
`;M.div`
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
`;M.div`
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
`;M.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 1440px) {
    width: auto;
    margin: 0 auto;
  }
`;M.img`
  border-radius: 18px;
  border: 1px solid var(--black);
  width: 36px;
  height: 36px;
  margin-left: -20px;
`;M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
`;M.div`
  margin: 0 auto;
  width: 285px;
  // height: 43px;
  margin-top: 20px;
  display: flex;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1440px) {
  }
`;M.button`
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
`;M.button`
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
`;const fH="/assets/HeroImage2About-CoU9D2Tq.png",hH=()=>y.jsxs(sH,{children:[y.jsx(oH,{src:fH,alt:"Hero Image"}),y.jsx(lH,{children:y.jsxs(cH,{children:[" ",y.jsx(dH,{children:"About Our Company and Team"}),y.jsx(uH,{children:"Fast, affordable, and trusted service"})]})})]}),pH=M.section`
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
`,mH=M.div`
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
`,gH=M.h3`
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
`,T0=M.span`
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
`,xH=M.div`
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
`,yH=M.div`
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
`,Hx=M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }
`,vH=M.div`
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
`,wH=M.div`
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
`,Vx=M.p`
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
`,bH=M.img`
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
`,SH=M.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`,CH="/assets/Services%20Image-e7Omvubx.png",TH="/assets/Team%20Image-CG0rB-nI.png",EH=()=>{const t=_e({query:"(min-width: 1440px)"});return y.jsxs(pH,{children:[y.jsx(mH,{children:y.jsxs(gH,{children:["Our mission is to provide ",y.jsx(T0,{children:"reliable"})," and ",y.jsx(T0,{children:"efficient"}),"appliance repair services that improve",y.jsx(T0,{children:"everyday "}),"life"," "]})}),y.jsxs(SH,{children:[y.jsxs(vH,{children:[y.jsx("img",{src:CH,alt:"image"}),y.jsxs(yH,{children:[y.jsx(Hx,{children:"“Our goal is to bring comfort and convenience back to your home with every repair. We believe in honest service, quality workmanship, and building lasting relationships with our customers,”"}),y.jsx(xH,{children:"Sanal Gariaev"}),y.jsx(Hx,{children:"Chief Executive Officer"})]}),y.jsxs(Vx,{children:["As a highly regarded and trusted appliance repair company, we take immense pride in having served our community with exceptional repair services since [год основания]. Our extensive experience and commitment to excellence have allowed us to build strong relationships with our customers. We fully recognize how vital it is for your household to have functioning appliances, as they play a crucial role in your daily routine. Whether it's your refrigerator keeping your food fresh, your washing machine ensuring your clothes are clean, or your oven preparing meals for your family, any malfunction can disrupt your life. That’s why our primary goal is to restore the performance of your appliances swiftly and affordably, ensuring that you can return to your normal routine with minimal interruption. ",y.jsx("br",{}),t&&y.jsxs(y.Fragment,{children:[y.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client’s needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})," "]})]}),y.jsxs(wH,{children:[!t&&y.jsxs(Vx,{children:[y.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client’s needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]}),y.jsx(bH,{src:TH,alt:"team"})]})]})]})},MH=()=>y.jsxs(zD,{children:[y.jsx(hH,{}),y.jsx(EH,{}),y.jsx(Sv,{})]}),AH=M.div`
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
`;M.h1`
font-family: var(--font-family);
font-weight: 600;
font-size: 32px;
line-height: 162%;
color: #fff;
`;M.div`
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


`;M.div`
display: flex;
flex-direction: column;
gap: 5px;
`;M.p`
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
`;M.a`
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
`;M.div`

display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`;M.a`
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
`;const jH=()=>y.jsx(AH,{id:"ap",children:y.jsx(wp,{})}),LH=M.div`
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
`,OH=()=>y.jsx(LH,{id:"app"}),RH=()=>{const[t,e]=R.useState(!1),i=new Date(2025,9,1,0,0);if(R.useEffect(()=>{const r=()=>{new Date>=i&&e(!0)};r();const o=setInterval(r,6e4);return()=>clearInterval(o)},[]),t)throw new Error("Час вийшов! Видаліть 💣 з коду.");return y.jsx(y.Fragment,{})},DH=M.div`
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
`,HH=M.p`
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
`,VH=M.div`
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
`,kH=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,kx=M.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,zH=M.p`
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
`,PH=M.p`
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
`,zx=M.p`
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
`,NH=M.p`
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
`,BH=M.img`
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
`,Px=M.div`
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
`,Nx=M.p`
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
`,ph=M.button`
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
`,Bx=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${ph}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,$H=M.div`
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
`,_H=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,UH=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,GH=M.p`
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
`,IH=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,qH=M.button`
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
`,Wp=M.button`
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
`,Cv=M.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Wp}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,YH=M(Cv)`
  color: #242424;

  ${Wp}:hover & {
    color: white;
  }
`,FH=M.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,ZH=()=>{const t=_e({query:"(min-width: 1440px)"});return y.jsxs(DH,{children:[y.jsx(HH,{children:"Our Service"}),y.jsxs(VH,{children:[y.jsxs(kH,{children:[y.jsxs(kx,{children:[y.jsx(zH,{children:"01."}),y.jsx(PH,{children:"Appliance Care & Tune-Ups"})]}),y.jsx(zx,{children:"Professional Installations"}),y.jsx(zx,{children:"Fast & Reliable Emergency Repairs"}),t&&y.jsxs(Px,{children:[y.jsx(Nx,{children:"Do you want to know more about our service?"}),y.jsx(ph,{children:y.jsx(Bx,{children:"Learn more"})})]})]}),y.jsxs(FH,{children:[y.jsx(BH,{src:wv,alt:"Services Image"}),y.jsxs($H,{children:[y.jsxs(_H,{children:[y.jsx(kx,{children:y.jsx(NH,{children:"Preventive Care"})}),y.jsx(UH,{children:y.jsx(GH,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})]}),y.jsxs(IH,{children:[y.jsx(qH,{children:y.jsx(Cv,{children:"Contact Us"})}),y.jsx(Wp,{children:y.jsx("a",{href:"tel:+18055002705",children:y.jsx(YH,{children:"Call Us"})})})]})]})]}),!t&&y.jsxs(Px,{children:[y.jsx(Nx,{children:"Do you want to know more about our service?"}),y.jsx(ph,{children:y.jsx(Bx,{children:"Learn more"})})]})]})]})},XH="/assets/Image1-oNBiuIma.png",KH="/assets/Image2-KhSZGRyT.png",WH="/assets/Image3-DVPHBget.png",QH="/assets/Image4-CFM8TNdX.png",JH="/assets/Image5-CmBoV_wK.png",eV=M.div`
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
`;M.p`
  padding: 10px auto 50px auto;
  width: 90%;
  height: 1px; /* Збільшуємо висоту для еліпса */
  margin: 20px auto;
  background: radial-gradient(ellipse 118.85px 58.06px at 50% 50%, rgb(252, 252, 252) 0%, rgba(58, 55, 55, 0.42) 80%);
`;M.div`
  height: auto;
  width: 100%;
  padding: 0 auto;
  margin: 0 auto;
  @media screen and (min-width: 744px) {
  }

  @media screen and (min-width: 1440px) {
    margin-right: 50px;
  }
`;const ic=M.img`
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
`,tV=M(vn.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,nV=M(vn.div)`
  position: absolute;
  right: 0%;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`;M.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
`;const iV=()=>{const t=_e({query:"(max-width: 743px)"}),e=_e({query:"(min-width: 744px) and (max-width: 1023px)"}),i=_e({query:"(min-width: 1024px)"}),r=[{id:1,imageUrl:bp},{id:2,imageUrl:zc},{id:3,imageUrl:Sp},{id:4,imageUrl:Cp},{id:5,imageUrl:Tp},{id:6,imageUrl:Ep},{id:7,imageUrl:Mp},{id:8,imageUrl:Ap},{id:9,imageUrl:jp},{id:10,imageUrl:Lp},{id:11,imageUrl:Op},{id:12,imageUrl:Rp},{id:13,imageUrl:Dp},{id:14,imageUrl:Hp},{id:15,imageUrl:Vp},{id:16,imageUrl:kp},{id:17,imageUrl:zp},{id:18,imageUrl:Pp},{id:19,imageUrl:Np},{id:20,imageUrl:vv},{id:21,imageUrl:Bp},{id:22,imageUrl:$p},{id:23,imageUrl:_p},{id:24,imageUrl:Up},{id:25,imageUrl:Gp},{id:26,imageUrl:Ip},{id:27,imageUrl:qp},{id:28,imageUrl:Yp},{id:29,imageUrl:Fp},{id:30,imageUrl:Zp},{id:31,imageUrl:Xp}],o=t?2:e?4:5,l=r.length>o;return y.jsxs("div",{children:[y.jsxs(eV,{children:[y.jsx(tV,{}),y.jsx(Xt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[dn],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:r.map(u=>y.jsx(Kt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?y.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):y.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),y.jsx(Xt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[dn],className:"mySwiper",style:{width:"100%"},children:r.map(u=>y.jsx(Kt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?y.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):y.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),y.jsx(nV,{})]})," "]})},$x=[{img:XH,title:"Refrigerator",description:"Fixing cooling issues and leaks."},{img:KH,title:"Washing Machine",description:"Restoring heating and control functions."},{img:WH,title:"Oven",description:"Fixing magnetron and door issues."},{img:QH,title:"Microwave",description:"Fixing cooling issues and leaks."},{img:JH,title:"Dishwasher",description:"Repairing leaks and drainage problems."}],aV=()=>{const t=R.useRef(null),e=_e({query:"(max-width: 767px)"}),i=_e({query:"(min-width: 768px) and (max-width: 1439px)"}),r=_e({query:"(min-width: 1440px)"}),o=e?1:i?3:4,l=$x.length>o;return y.jsxs(oV,{children:[y.jsxs(lV,{children:[y.jsx(cV,{children:"Our Equipment"}),y.jsxs(uV,{children:[y.jsx("span",{children:"Trusted"})," brands we service"]})]}),y.jsx(iV,{}),y.jsxs(sV,{children:[y.jsx(_x,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slidePrev()},bg:"#DBDBD8",children:y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:y.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),y.jsx(_x,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slideNext()},bg:"#3098EE",children:y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:y.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),y.jsx(rV,{$isTablet:i,children:y.jsx(Xt,{modules:[iv,dn],onSwiper:u=>t.current=u,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:$x.map((u,d)=>y.jsx(Kt,{children:y.jsxs(dV,{$isTablet:i,children:[y.jsx(fV,{src:u.img,alt:u.title,$isTablet:i}),y.jsxs(hV,{children:[y.jsx(pV,{$isTablet:i,children:u.title}),y.jsx(mV,{$isTablet:i,children:u.description})]})]})},d))})})]})},rV=M.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: ${t=>t.$isTablet?"50%":"auto"};
  }
`,sV=M.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,_x=M.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${t=>t.bg};
  border: none;
  cursor: pointer;
`,oV=M.div`
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
`,lV=M.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,cV=M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,uV=M.p`
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
`,dV=M.div`
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
`,fV=M.img`
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
`,hV=M.div`
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
`,pV=M.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,mV=M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,gV="/assets/ProccessSection-CpT7luA8.png",xV=M.div`
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
`,yV=M.h2`
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
`,vV=M.p`
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
`,wV=M.div`
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
`,bV=M.div`
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
`,SV=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,CV=M.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,TV=M.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,EV=M.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,MV=[{title:"Call Us",text:"Call us to schedule your repair. We`ll gather details and find a convenient time.",icon:y.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"We Respond",text:"Our team answers your questions and arranges a convenient visit.",icon:y.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M8.33268 12.5001L5.76997 15.0948C5.4125 15.4568 5.23377 15.6377 5.08014 15.6505C4.94686 15.6616 4.81636 15.608 4.72931 15.5064C4.62898 15.3894 4.62898 15.1351 4.62898 14.6264V13.3264C4.62898 12.87 4.25524 12.5398 3.80369 12.4737V12.4737C2.7108 12.3136 1.8525 11.4553 1.69241 10.3624C1.66602 10.1822 1.66602 9.96718 1.66602 9.53712V5.66675C1.66602 4.26662 1.66602 3.56655 1.9385 3.03177C2.17818 2.56137 2.56063 2.17892 3.03104 1.93923C3.56582 1.66675 4.26588 1.66675 5.66602 1.66675H11.8327C13.2328 1.66675 13.9329 1.66675 14.4677 1.93923C14.9381 2.17892 15.3205 2.56137 15.5602 3.03177C15.8327 3.56655 15.8327 4.26662 15.8327 5.66675V9.16675M15.8327 18.3334L14.019 17.0725C13.7641 16.8952 13.6366 16.8066 13.4978 16.7438C13.3747 16.688 13.2453 16.6474 13.1123 16.6229C12.9625 16.5953 12.8073 16.5953 12.4968 16.5953H10.9993C10.0659 16.5953 9.59922 16.5953 9.2427 16.4137C8.92909 16.2539 8.67413 15.9989 8.51434 15.6853C8.33268 15.3288 8.33268 14.8621 8.33268 13.9287V11.8334C8.33268 10.9 8.33268 10.4333 8.51434 10.0768C8.67413 9.76316 8.92909 9.50819 9.2427 9.3484C9.59922 9.16675 10.0659 9.16675 10.9993 9.16675H15.666C16.5994 9.16675 17.0661 9.16675 17.4227 9.3484C17.7363 9.50819 17.9912 9.76316 18.151 10.0768C18.3327 10.4333 18.3327 10.9 18.3327 11.8334V14.0953C18.3327 14.8719 18.3327 15.2602 18.2058 15.5665C18.0367 15.9748 17.7122 16.2993 17.3038 16.4685C16.9975 16.5953 16.6093 16.5953 15.8327 16.5953V18.3334Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"On-Site Visit",text:"Technician arrives, assesses the issue, and provides an estimate.",icon:y.jsx("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M4.16602 8.83325H6.66602M1.66602 5.49992L3.33268 6.33325L4.39155 3.15664C4.61011 2.50096 4.71939 2.17312 4.92209 1.93074C5.10108 1.7167 5.33095 1.55102 5.5906 1.4489C5.88465 1.33325 6.23022 1.33325 6.92137 1.33325H13.0773C13.7685 1.33325 14.1141 1.33325 14.4081 1.4489C14.6678 1.55102 14.8976 1.7167 15.0766 1.93074C15.2793 2.17312 15.3886 2.50096 15.6071 3.15664L16.666 6.33325L18.3327 5.49992M13.3327 8.83325H15.8327M5.66602 6.33325H14.3327C15.7328 6.33325 16.4329 6.33325 16.9677 6.60574C17.4381 6.84542 17.8205 7.22787 18.0602 7.69828C18.3327 8.23305 18.3327 8.93312 18.3327 10.3333V12.5833C18.3327 12.9705 18.3327 13.1641 18.3007 13.3251C18.1691 13.9862 17.6523 14.503 16.9912 14.6346C16.8302 14.6666 16.6366 14.6666 16.2493 14.6666H15.8327C14.9122 14.6666 14.166 13.9204 14.166 12.9999C14.166 12.7698 13.9795 12.5833 13.7493 12.5833H6.24935C6.01923 12.5833 5.83268 12.7698 5.83268 12.9999C5.83268 13.9204 5.08649 14.6666 4.16602 14.6666H3.74935C3.36214 14.6666 3.16853 14.6666 3.00753 14.6346C2.34638 14.503 1.82955 13.9862 1.69804 13.3251C1.66602 13.1641 1.66602 12.9705 1.66602 12.5833V10.3333C1.66602 8.93312 1.66602 8.23305 1.9385 7.69828C2.17818 7.22787 2.56063 6.84542 3.03104 6.60574C3.56582 6.33325 4.26588 6.33325 5.66602 6.33325Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"Repair & Finish",text:"We fix your appliance on the spot and ensure everything works perfectly.",icon:y.jsx("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M4.99984 5.00008L8.74984 8.75008M4.99984 5.00008H2.49984L1.6665 2.50008L2.49984 1.66675L4.99984 2.50008V5.00008ZM16.049 2.28426L13.8593 4.47394C13.5293 4.80395 13.3643 4.96896 13.3025 5.15923C13.2481 5.3266 13.2481 5.50689 13.3025 5.67426C13.3643 5.86454 13.5293 6.02954 13.8593 6.35956L14.057 6.55727C14.387 6.88729 14.552 7.05229 14.7423 7.11412C14.9097 7.1685 15.09 7.1685 15.2574 7.11412C15.4476 7.05229 15.6126 6.88729 15.9426 6.55727L17.9909 4.50901C18.2115 5.04582 18.3332 5.63374 18.3332 6.25008C18.3332 8.78139 16.2811 10.8334 13.7498 10.8334C13.4447 10.8334 13.1465 10.8036 12.858 10.7467C12.4528 10.6668 12.2503 10.6268 12.1275 10.6391C11.9969 10.6521 11.9326 10.6717 11.8169 10.7336C11.7081 10.7918 11.599 10.9009 11.3807 11.1192L5.4165 17.0834C4.72615 17.7738 3.60686 17.7738 2.91651 17.0834C2.22615 16.393 2.22615 15.2738 2.91651 14.5834L8.88069 8.61922C9.09898 8.40094 9.20813 8.29179 9.26635 8.18299C9.32825 8.06731 9.34783 8.00297 9.36084 7.87242C9.37307 7.74963 9.33312 7.54707 9.25323 7.14195C9.19633 6.85346 9.1665 6.55526 9.1665 6.25008C9.1665 3.71878 11.2185 1.66675 13.7498 1.66675C14.5878 1.66675 15.3732 1.8916 16.049 2.28426ZM9.99988 12.5L14.5832 17.0833C15.2735 17.7737 16.3928 17.7737 17.0832 17.0833C17.7735 16.393 17.7735 15.2737 17.0832 14.5833L13.3126 10.8128C13.0457 10.7876 12.7854 10.7394 12.5338 10.6704C12.2096 10.5814 11.854 10.646 11.6162 10.8837L9.99988 12.5Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}],AV=()=>y.jsxs(xV,{$bg:gV,children:[y.jsx(yV,{children:"Our Process"}),y.jsx(vV,{children:"Quick steps to fix appliances reliably"}),y.jsx(wV,{children:MV.map((t,e)=>y.jsxs(bV,{children:[y.jsx(SV,{children:y.jsx(CV,{children:t.icon})}),y.jsx(TV,{children:t.title}),y.jsx(EV,{children:t.text})]},e))})]}),jV=()=>y.jsxs(LV,{children:[y.jsx(ZH,{}),y.jsx(aV,{}),y.jsx(xv,{}),y.jsx(AV,{}),y.jsx(yv,{}),y.jsx(Sv,{}),y.jsx(wp,{})]}),LV=M.div`
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
`,da=({children:t})=>y.jsx("div",{style:{width:"100%",position:"relative"},children:t}),OV=()=>{const t=hn();return y.jsxs(y.Fragment,{children:[y.jsxs(sw,{location:t,children:[y.jsx(Ln,{path:"/",element:y.jsx(iw,{to:"/home"})}),y.jsxs(Ln,{path:"/",element:y.jsx(eL,{}),children:[y.jsx(Ln,{index:!0,element:y.jsx(da,{children:y.jsx(C0,{})})}),y.jsx(Ln,{path:"/home",element:y.jsx(da,{children:y.jsx(C0,{})})}),y.jsx(Ln,{path:"/service",element:y.jsx(da,{children:y.jsx(jV,{})})}),y.jsx(Ln,{path:"/about",element:y.jsx(da,{children:y.jsx(MH,{})})}),y.jsx(Ln,{path:"/tips",element:y.jsx(da,{children:y.jsx(OH,{})})}),y.jsx(Ln,{path:"/contact",element:y.jsx(da,{children:y.jsx(jH,{})})}),y.jsx(Ln,{path:"*",element:y.jsx(da,{children:y.jsx(C0,{})})})]})]},t.pathname),y.jsx(RH,{})]})},me=t=>typeof t=="string",qs=()=>{let t,e;const i=new Promise((r,o)=>{t=r,e=o});return i.resolve=t,i.reject=e,i},Ux=t=>t==null?"":""+t,RV=(t,e,i)=>{t.forEach(r=>{e[r]&&(i[r]=e[r])})},DV=/###/g,Gx=t=>t&&t.indexOf("###")>-1?t.replace(DV,"."):t,Ix=t=>!t||me(t),to=(t,e,i)=>{const r=me(e)?e.split("."):e;let o=0;for(;o<r.length-1;){if(Ix(t))return{};const l=Gx(r[o]);!t[l]&&i&&(t[l]=new i),Object.prototype.hasOwnProperty.call(t,l)?t=t[l]:t={},++o}return Ix(t)?{}:{obj:t,k:Gx(r[o])}},qx=(t,e,i)=>{const{obj:r,k:o}=to(t,e,Object);if(r!==void 0||e.length===1){r[o]=i;return}let l=e[e.length-1],u=e.slice(0,e.length-1),d=to(t,u,Object);for(;d.obj===void 0&&u.length;)l=`${u[u.length-1]}.${l}`,u=u.slice(0,u.length-1),d=to(t,u,Object),d!=null&&d.obj&&typeof d.obj[`${d.k}.${l}`]<"u"&&(d.obj=void 0);d.obj[`${d.k}.${l}`]=i},HV=(t,e,i,r)=>{const{obj:o,k:l}=to(t,e,Object);o[l]=o[l]||[],o[l].push(i)},Pc=(t,e)=>{const{obj:i,k:r}=to(t,e);if(i&&Object.prototype.hasOwnProperty.call(i,r))return i[r]},VV=(t,e,i)=>{const r=Pc(t,i);return r!==void 0?r:Pc(e,i)},Tv=(t,e,i)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?me(t[r])||t[r]instanceof String||me(e[r])||e[r]instanceof String?i&&(t[r]=e[r]):Tv(t[r],e[r],i):t[r]=e[r]);return t},cr=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var kV={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const zV=t=>me(t)?t.replace(/[&<>"'\/]/g,e=>kV[e]):t;class PV{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const NV=[" ",",","?","!",";"],BV=new PV(20),$V=(t,e,i)=>{e=e||"",i=i||"";const r=NV.filter(u=>e.indexOf(u)<0&&i.indexOf(u)<0);if(r.length===0)return!0;const o=BV.getRegExp(`(${r.map(u=>u==="?"?"\\?":u).join("|")})`);let l=!o.test(t);if(!l){const u=t.indexOf(i);u>0&&!o.test(t.substring(0,u))&&(l=!0)}return l},mh=function(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0;const r=e.split(i);let o=t;for(let l=0;l<r.length;){if(!o||typeof o!="object")return;let u,d="";for(let f=l;f<r.length;++f)if(f!==l&&(d+=i),d+=r[f],u=o[d],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&f<r.length-1)continue;l+=f-l+1;break}o=u}return o},Nc=t=>t==null?void 0:t.replace("_","-"),_V={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){var i,r;(r=(i=console==null?void 0:console[t])==null?void 0:i.apply)==null||r.call(i,console,e)}};class Bc{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,i)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=e||_V,this.options=i,this.debug=i.debug}log(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"log","",!0)}warn(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"warn","",!0)}error(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"error","")}deprecate(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,r,o){return o&&!this.debug?null:(me(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new Bc(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Bc(this.logger,e)}}var Vn=new Bc;class au{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const o=this.observers[r].get(i)||0;this.observers[r].set(i,o+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}emit(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(u=>{let[d,f]=u;for(let p=0;p<f;p++)d(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[d,f]=u;for(let p=0;p<f;p++)d.apply(d,[e,...r])})}}class Yx extends au{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,r){var p,m;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let d;e.indexOf(".")>-1?d=e.split("."):(d=[e,i],r&&(Array.isArray(r)?d.push(...r):me(r)&&l?d.push(...r.split(l)):d.push(r)));const f=Pc(this.data,d);return!f&&!i&&!r&&e.indexOf(".")>-1&&(e=d[0],i=d[1],r=d.slice(2).join(".")),f||!u||!me(r)?f:mh((m=(p=this.data)==null?void 0:p[e])==null?void 0:m[i],r,l)}addResource(e,i,r,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let d=[e,i];r&&(d=d.concat(u?r.split(u):r)),e.indexOf(".")>-1&&(d=e.split("."),o=i,i=d[1]),this.addNamespaces(i),qx(this.data,d,o),l.silent||this.emit("added",e,i,r,o)}addResources(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in r)(me(r[l])||Array.isArray(r[l]))&&this.addResource(e,i,l,r[l],{silent:!0});o.silent||this.emit("added",e,i,r)}addResourceBundle(e,i,r,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},d=[e,i];e.indexOf(".")>-1&&(d=e.split("."),o=r,r=i,i=d[1]),this.addNamespaces(i);let f=Pc(this.data,d)||{};u.skipCopy||(r=JSON.parse(JSON.stringify(r))),o?Tv(f,r,l):f={...f,...r},qx(this.data,d,f),u.silent||this.emit("added",e,i,r)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(o=>i[o]&&Object.keys(i[o]).length>0)}toJSON(){return this.data}}var Ev={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,r,o){return t.forEach(l=>{var u;e=((u=this.processors[l])==null?void 0:u.process(e,i,r,o))??e}),e}};const Fx={},Zx=t=>!me(t)&&typeof t!="boolean"&&typeof t!="number";class $c extends au{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),RV(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Vn.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const r=this.resolve(e,i);return(r==null?void 0:r.res)!==void 0}extractFromKey(e,i){let r=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=i.ns||this.options.defaultNS||[];const u=r&&e.indexOf(r)>-1,d=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!$V(e,r,o);if(u&&!d){const f=e.match(this.interpolator.nestingRegexp);if(f&&f.length>0)return{key:e,namespaces:me(l)?[l]:l};const p=e.split(r);(r!==o||r===o&&this.options.ns.indexOf(p[0])>-1)&&(l=p.shift()),e=p.join(o)}return{key:e,namespaces:me(l)?[l]:l}}translate(e,i,r){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const o=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:u,namespaces:d}=this.extractFromKey(e[e.length-1],i),f=d[d.length-1],p=i.lng||this.language,m=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((p==null?void 0:p.toLowerCase())==="cimode"){if(m){const F=i.nsSeparator||this.options.nsSeparator;return o?{res:`${f}${F}${u}`,usedKey:u,exactUsedKey:u,usedLng:p,usedNS:f,usedParams:this.getUsedParamsDetails(i)}:`${f}${F}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:p,usedNS:f,usedParams:this.getUsedParamsDetails(i)}:u}const x=this.resolve(e,i);let v=x==null?void 0:x.res;const S=(x==null?void 0:x.usedKey)||u,b=(x==null?void 0:x.exactUsedKey)||u,E=["[object Number]","[object Function]","[object RegExp]"],O=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,T=i.count!==void 0&&!me(i.count),C=$c.hasDefaultValue(i),D=T?this.pluralResolver.getSuffix(p,i.count,i):"",L=i.ordinal&&T?this.pluralResolver.getSuffix(p,i.count,{ordinal:!1}):"",P=T&&!i.ordinal&&i.count===0,k=P&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${D}`]||i[`defaultValue${L}`]||i.defaultValue;let _=v;j&&!v&&C&&(_=k);const $=Zx(_),Y=Object.prototype.toString.apply(_);if(j&&_&&$&&E.indexOf(Y)<0&&!(me(O)&&Array.isArray(_))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const F=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,_,{...i,ns:d}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(x.res=F,x.usedParams=this.getUsedParamsDetails(i),x):F}if(l){const F=Array.isArray(_),te=F?[]:{},ie=F?b:S;for(const oe in _)if(Object.prototype.hasOwnProperty.call(_,oe)){const re=`${ie}${l}${oe}`;C&&!v?te[oe]=this.translate(re,{...i,defaultValue:Zx(k)?k[oe]:void 0,joinArrays:!1,ns:d}):te[oe]=this.translate(re,{...i,joinArrays:!1,ns:d}),te[oe]===re&&(te[oe]=_[oe])}v=te}}else if(j&&me(O)&&Array.isArray(v))v=v.join(O),v&&(v=this.extendTranslation(v,e,i,r));else{let F=!1,te=!1;!this.isValidLookup(v)&&C&&(F=!0,v=k),this.isValidLookup(v)||(te=!0,v=u);const oe=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&te?void 0:v,re=C&&k!==v&&this.options.updateMissing;if(te||F||re){if(this.logger.log(re?"updateKey":"missingKey",p,f,u,re?k:v),l){const ee=this.resolve(u,{...i,keySeparator:!1});ee&&ee.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let B=[];const K=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&K&&K[0])for(let ee=0;ee<K.length;ee++)B.push(K[ee]);else this.options.saveMissingTo==="all"?B=this.languageUtils.toResolveHierarchy(i.lng||this.language):B.push(i.lng||this.language);const W=(ee,H,Z)=>{var ae;const ne=C&&Z!==v?Z:oe;this.options.missingKeyHandler?this.options.missingKeyHandler(ee,f,H,ne,re,i):(ae=this.backendConnector)!=null&&ae.saveMissing&&this.backendConnector.saveMissing(ee,f,H,ne,re,i),this.emit("missingKey",ee,f,H,v)};this.options.saveMissing&&(this.options.saveMissingPlurals&&T?B.forEach(ee=>{const H=this.pluralResolver.getSuffixes(ee,i);P&&i[`defaultValue${this.options.pluralSeparator}zero`]&&H.indexOf(`${this.options.pluralSeparator}zero`)<0&&H.push(`${this.options.pluralSeparator}zero`),H.forEach(Z=>{W([ee],u+Z,i[`defaultValue${Z}`]||k)})}):W(B,u,k))}v=this.extendTranslation(v,e,i,x,r),te&&v===u&&this.options.appendNamespaceToMissingKey&&(v=`${f}:${u}`),(te||F)&&this.options.parseMissingKeyHandler&&(v=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${f}:${u}`:u,F?v:void 0))}return o?(x.res=v,x.usedParams=this.getUsedParamsDetails(i),x):v}extendTranslation(e,i,r,o,l){var p,m;var u=this;if((p=this.i18nFormat)!=null&&p.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const x=me(e)&&(((m=r==null?void 0:r.interpolation)==null?void 0:m.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let v;if(x){const b=e.match(this.interpolator.nestingRegexp);v=b&&b.length}let S=r.replace&&!me(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(S={...this.options.interpolation.defaultVariables,...S}),e=this.interpolator.interpolate(e,S,r.lng||this.language||o.usedLng,r),x){const b=e.match(this.interpolator.nestingRegexp),E=b&&b.length;v<E&&(r.nest=!1)}!r.lng&&o&&o.res&&(r.lng=this.language||o.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var b=arguments.length,E=new Array(b),O=0;O<b;O++)E[O]=arguments[O];return(l==null?void 0:l[0])===E[0]&&!r.context?(u.logger.warn(`It seems you are nesting recursively key: ${E[0]} in key: ${i[0]}`),null):u.translate(...E,i)},r)),r.interpolation&&this.interpolator.reset()}const d=r.postProcess||this.options.postProcess,f=me(d)?[d]:d;return e!=null&&(f!=null&&f.length)&&r.applyPostProcessor!==!1&&(e=Ev.handle(f,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,o,l,u,d;return me(e)&&(e=[e]),e.forEach(f=>{if(this.isValidLookup(r))return;const p=this.extractFromKey(f,i),m=p.key;o=m;let x=p.namespaces;this.options.fallbackNS&&(x=x.concat(this.options.fallbackNS));const v=i.count!==void 0&&!me(i.count),S=v&&!i.ordinal&&i.count===0,b=i.context!==void 0&&(me(i.context)||typeof i.context=="number")&&i.context!=="",E=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);x.forEach(O=>{var j,T;this.isValidLookup(r)||(d=O,!Fx[`${E[0]}-${O}`]&&((j=this.utils)!=null&&j.hasLoadedNamespace)&&!((T=this.utils)!=null&&T.hasLoadedNamespace(d))&&(Fx[`${E[0]}-${O}`]=!0,this.logger.warn(`key "${o}" for languages "${E.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),E.forEach(C=>{var P;if(this.isValidLookup(r))return;u=C;const D=[m];if((P=this.i18nFormat)!=null&&P.addLookupKeys)this.i18nFormat.addLookupKeys(D,m,C,O,i);else{let k;v&&(k=this.pluralResolver.getSuffix(C,i.count,i));const _=`${this.options.pluralSeparator}zero`,$=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(v&&(D.push(m+k),i.ordinal&&k.indexOf($)===0&&D.push(m+k.replace($,this.options.pluralSeparator)),S&&D.push(m+_)),b){const Y=`${m}${this.options.contextSeparator}${i.context}`;D.push(Y),v&&(D.push(Y+k),i.ordinal&&k.indexOf($)===0&&D.push(Y+k.replace($,this.options.pluralSeparator)),S&&D.push(Y+_))}}let L;for(;L=D.pop();)this.isValidLookup(r)||(l=L,r=this.getResource(C,O,L,i))}))})}),{res:r,usedKey:o,exactUsedKey:l,usedLng:u,usedNS:d}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,r){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(e,i,r,o):this.resourceStore.getResource(e,i,r,o)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!me(e.replace);let o=r?e.replace:e;if(r&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!r){o={...o};for(const l of i)delete o[l]}return o}static hasDefaultValue(e){const i="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i===r.substring(0,i.length)&&e[r]!==void 0)return!0;return!1}}class Xx{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Vn.create("languageUtils")}getScriptPartFromCode(e){if(e=Nc(e),!e||e.indexOf("-")<0)return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=Nc(e),!e||e.indexOf("-")<0)return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(me(e)&&e.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(e)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(r=>{if(i)return;const o=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(o))&&(i=o)}),!i&&this.options.supportedLngs&&e.forEach(r=>{if(i)return;const o=this.getLanguagePartFromCode(r);if(this.isSupportedCode(o))return i=o;i=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),me(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let r=e[i];return r||(r=e[this.getScriptPartFromCode(i)]),r||(r=e[this.formatLanguageCode(i)]),r||(r=e[this.getLanguagePartFromCode(i)]),r||(r=e.default),r||[]}toResolveHierarchy(e,i){const r=this.getFallbackCodes(i||this.options.fallbackLng||[],e),o=[],l=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return me(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(e))):me(e)&&l(this.formatLanguageCode(e)),r.forEach(u=>{o.indexOf(u)<0&&l(this.formatLanguageCode(u))}),o}}const Kx={zero:0,one:1,two:2,few:3,many:4,other:5},Wx={select:t=>t===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class UV{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=i,this.logger=Vn.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,i){this.rules[e]=i}clearCache(){this.pluralRulesCache={}}getRule(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=Nc(e==="dev"?"en":e),o=i.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:r,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let u;try{u=new Intl.PluralRules(r,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Wx;if(!e.match(/-|_/))return Wx;const f=this.languageUtils.getLanguagePartFromCode(e);u=this.getRule(f,i)}return this.pluralRulesCache[l]=u,u}needsPlural(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(e,i);return r||(r=this.getRule("dev",i)),(r==null?void 0:r.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,r).map(o=>`${i}${o}`)}getSuffixes(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(e,i);return r||(r=this.getRule("dev",i)),r?r.resolvedOptions().pluralCategories.sort((o,l)=>Kx[o]-Kx[l]).map(o=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(e,r);return o?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(i)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",i,r))}}const Qx=function(t,e,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=VV(t,e,i);return!l&&o&&me(i)&&(l=mh(t,i,r),l===void 0&&(l=mh(e,i,r))),l},E0=t=>t.replace(/\$/g,"$$$$");class GV{constructor(){var i;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Vn.create("interpolator"),this.options=e,this.format=((i=e==null?void 0:e.interpolation)==null?void 0:i.format)||(r=>r),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:r,useRawValueToEscape:o,prefix:l,prefixEscaped:u,suffix:d,suffixEscaped:f,formatSeparator:p,unescapeSuffix:m,unescapePrefix:x,nestingPrefix:v,nestingPrefixEscaped:S,nestingSuffix:b,nestingSuffixEscaped:E,nestingOptionsSeparator:O,maxReplaces:j,alwaysFormat:T}=e.interpolation;this.escape=i!==void 0?i:zV,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?cr(l):u||"{{",this.suffix=d?cr(d):f||"}}",this.formatSeparator=p||",",this.unescapePrefix=m?"":x||"-",this.unescapeSuffix=this.unescapePrefix?"":m||"",this.nestingPrefix=v?cr(v):S||cr("$t("),this.nestingSuffix=b?cr(b):E||cr(")"),this.nestingOptionsSeparator=O||",",this.maxReplaces=j||1e3,this.alwaysFormat=T!==void 0?T:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,r)=>(i==null?void 0:i.source)===r?(i.lastIndex=0,i):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,i,r,o){var S;let l,u,d;const f=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},p=b=>{if(b.indexOf(this.formatSeparator)<0){const T=Qx(i,f,b,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(T,void 0,r,{...o,...i,interpolationkey:b}):T}const E=b.split(this.formatSeparator),O=E.shift().trim(),j=E.join(this.formatSeparator).trim();return this.format(Qx(i,f,O,this.options.keySeparator,this.options.ignoreJSONStructure),j,r,{...o,...i,interpolationkey:O})};this.resetRegExp();const m=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,x=((S=o==null?void 0:o.interpolation)==null?void 0:S.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:b=>E0(b)},{regex:this.regexp,safeValue:b=>this.escapeValue?E0(this.escape(b)):E0(b)}].forEach(b=>{for(d=0;l=b.regex.exec(e);){const E=l[1].trim();if(u=p(E),u===void 0)if(typeof m=="function"){const j=m(e,l,o);u=me(j)?j:""}else if(o&&Object.prototype.hasOwnProperty.call(o,E))u="";else if(x){u=l[0];continue}else this.logger.warn(`missed to pass in variable ${E} for interpolating ${e}`),u="";else!me(u)&&!this.useRawValueToEscape&&(u=Ux(u));const O=b.safeValue(u);if(e=e.replace(l[0],O),x?(b.regex.lastIndex+=u.length,b.regex.lastIndex-=l[0].length):b.regex.lastIndex=0,d++,d>=this.maxReplaces)break}}),e}nest(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,u;const d=(f,p)=>{const m=this.nestingOptionsSeparator;if(f.indexOf(m)<0)return f;const x=f.split(new RegExp(`${m}[ ]*{`));let v=`{${x[1]}`;f=x[0],v=this.interpolate(v,u);const S=v.match(/'/g),b=v.match(/"/g);(((S==null?void 0:S.length)??0)%2===0&&!b||b.length%2!==0)&&(v=v.replace(/'/g,'"'));try{u=JSON.parse(v),p&&(u={...p,...u})}catch(E){return this.logger.warn(`failed parsing options string in nesting for key ${f}`,E),`${f}${m}${v}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,f};for(;o=this.nestingRegexp.exec(e);){let f=[];u={...r},u=u.replace&&!me(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let p=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const m=o[1].split(this.formatSeparator).map(x=>x.trim());o[1]=m.shift(),f=m,p=!0}if(l=i(d.call(this,o[1].trim(),u),u),l&&o[0]===e&&!me(l))return l;me(l)||(l=Ux(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),l=""),p&&(l=f.reduce((m,x)=>this.format(m,x,r.lng,{...r,interpolationkey:o[1].trim()}),l.trim())),e=e.replace(o[0],l),this.regexp.lastIndex=0}return e}}const IV=t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);e==="currency"&&o.indexOf(":")<0?i.currency||(i.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?i.range||(i.range=o.trim()):o.split(";").forEach(u=>{if(u){const[d,...f]=u.split(":"),p=f.join(":").trim().replace(/^'+|'+$/g,""),m=d.trim();i[m]||(i[m]=p),p==="false"&&(i[m]=!1),p==="true"&&(i[m]=!0),isNaN(p)||(i[m]=parseInt(p,10))}})}return{formatName:e,formatOptions:i}},ur=t=>{const e={};return(i,r,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const u=r+JSON.stringify(l);let d=e[u];return d||(d=t(Nc(r),o),e[u]=d),d(i)}};class qV{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Vn.create("formatter"),this.options=e,this.formats={number:ur((i,r)=>{const o=new Intl.NumberFormat(i,{...r});return l=>o.format(l)}),currency:ur((i,r)=>{const o=new Intl.NumberFormat(i,{...r,style:"currency"});return l=>o.format(l)}),datetime:ur((i,r)=>{const o=new Intl.DateTimeFormat(i,{...r});return l=>o.format(l)}),relativetime:ur((i,r)=>{const o=new Intl.RelativeTimeFormat(i,{...r});return l=>o.format(l,r.range||"day")}),list:ur((i,r)=>{const o=new Intl.ListFormat(i,{...r});return l=>o.format(l)})},this.init(e)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=ur(i)}format(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=i.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(d=>d.indexOf(")")>-1)){const d=l.findIndex(f=>f.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,d)].join(this.formatSeparator)}return l.reduce((d,f)=>{var x;const{formatName:p,formatOptions:m}=IV(f);if(this.formats[p]){let v=d;try{const S=((x=o==null?void 0:o.formatParams)==null?void 0:x[o.interpolationkey])||{},b=S.locale||S.lng||o.locale||o.lng||r;v=this.formats[p](d,b,{...m,...o,...S})}catch(S){this.logger.warn(S)}return v}else this.logger.warn(`there was no format function for ${p}`);return d},e)}}const YV=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class FV extends au{constructor(e,i,r){var l,u;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=i,this.services=r,this.languageUtils=r.languageUtils,this.options=o,this.logger=Vn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(u=(l=this.backend)==null?void 0:l.init)==null||u.call(l,r,o.backend,o)}queueLoad(e,i,r,o){const l={},u={},d={},f={};return e.forEach(p=>{let m=!0;i.forEach(x=>{const v=`${p}|${x}`;!r.reload&&this.store.hasResourceBundle(p,x)?this.state[v]=2:this.state[v]<0||(this.state[v]===1?u[v]===void 0&&(u[v]=!0):(this.state[v]=1,m=!1,u[v]===void 0&&(u[v]=!0),l[v]===void 0&&(l[v]=!0),f[x]===void 0&&(f[x]=!0)))}),m||(d[p]=!0)}),(Object.keys(l).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(u),toLoadLanguages:Object.keys(d),toLoadNamespaces:Object.keys(f)}}loaded(e,i,r){const o=e.split("|"),l=o[0],u=o[1];i&&this.emit("failedLoading",l,u,i),!i&&r&&this.store.addResourceBundle(l,u,r,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&r&&(this.state[e]=0);const d={};this.queue.forEach(f=>{HV(f.loaded,[l],u),YV(f,e),i&&f.errors.push(i),f.pendingCount===0&&!f.done&&(Object.keys(f.loaded).forEach(p=>{d[p]||(d[p]={});const m=f.loaded[p];m.length&&m.forEach(x=>{d[p][x]===void 0&&(d[p][x]=!0)})}),f.done=!0,f.errors.length?f.callback(f.errors):f.callback())}),this.emit("loaded",d),this.queue=this.queue.filter(f=>!f.done)}read(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!e.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:r,tried:o,wait:l,callback:u});return}this.readingCalls++;const d=(p,m)=>{if(this.readingCalls--,this.waitingReads.length>0){const x=this.waitingReads.shift();this.read(x.lng,x.ns,x.fcName,x.tried,x.wait,x.callback)}if(p&&m&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,i,r,o+1,l*2,u)},l);return}u(p,m)},f=this.backend[r].bind(this.backend);if(f.length===2){try{const p=f(e,i);p&&typeof p.then=="function"?p.then(m=>d(null,m)).catch(d):d(null,p)}catch(p){d(p)}return}return f(e,i,d)}prepareLoading(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();me(e)&&(e=this.languageUtils.toResolveHierarchy(e)),me(i)&&(i=[i]);const l=this.queueLoad(e,i,r,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(u=>{this.loadOne(u)})}load(e,i,r){this.prepareLoading(e,i,{},r)}reload(e,i,r){this.prepareLoading(e,i,{reload:!0},r)}loadOne(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=e.split("|"),o=r[0],l=r[1];this.read(o,l,"read",void 0,void 0,(u,d)=>{u&&this.logger.warn(`${i}loading namespace ${l} for language ${o} failed`,u),!u&&d&&this.logger.log(`${i}loaded namespace ${l} for language ${o}`,d),this.loaded(e,u,d)})}saveMissing(e,i,r,o,l){var f,p,m,x,v;let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((p=(f=this.services)==null?void 0:f.utils)!=null&&p.hasLoadedNamespace&&!((x=(m=this.services)==null?void 0:m.utils)!=null&&x.hasLoadedNamespace(i))){this.logger.warn(`did not save key "${r}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if((v=this.backend)!=null&&v.create){const S={...u,isUpdate:l},b=this.backend.create.bind(this.backend);if(b.length<6)try{let E;b.length===5?E=b(e,i,r,o,S):E=b(e,i,r,o),E&&typeof E.then=="function"?E.then(O=>d(null,O)).catch(d):d(null,E)}catch(E){d(E)}else b(e,i,r,o,d,S)}!e||!e[0]||this.store.addResource(e[0],i,r,o)}}}const Jx=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),me(t[1])&&(e.defaultValue=t[1]),me(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const i=t[3]||t[2];Object.keys(i).forEach(r=>{e[r]=i[r]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),e6=t=>{var e,i;return me(t.ns)&&(t.ns=[t.ns]),me(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),me(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),((i=(e=t.supportedLngs)==null?void 0:e.indexOf)==null?void 0:i.call(e,"cimode"))<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),typeof t.initImmediate=="boolean"&&(t.initAsync=t.initImmediate),t},ac=()=>{},ZV=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(i=>{typeof t[i]=="function"&&(t[i]=t[i].bind(t))})};class mo extends au{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=e6(e),this.services={},this.logger=Vn,this.modules={external:[]},ZV(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(){var e=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(r=i,i={}),i.defaultNS==null&&i.ns&&(me(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=Jx();this.options={...o,...this.options,...e6(i)},this.options.interpolation={...o.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const l=m=>m?typeof m=="function"?new m:m:null;if(!this.options.isClone){this.modules.logger?Vn.init(l(this.modules.logger),this.options):Vn.init(null,this.options);let m;this.modules.formatter?m=this.modules.formatter:m=qV;const x=new Xx(this.options);this.store=new Yx(this.options.resources,this.options);const v=this.services;v.logger=Vn,v.resourceStore=this.store,v.languageUtils=x,v.pluralResolver=new UV(x,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),m&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=l(m),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new GV(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new FV(l(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",function(S){for(var b=arguments.length,E=new Array(b>1?b-1:0),O=1;O<b;O++)E[O-1]=arguments[O];e.emit(S,...E)}),this.modules.languageDetector&&(v.languageDetector=l(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=l(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new $c(this.services,this.options),this.translator.on("*",function(S){for(var b=arguments.length,E=new Array(b>1?b-1:0),O=1;O<b;O++)E[O-1]=arguments[O];e.emit(S,...E)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,r||(r=ac),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(m=>{this[m]=function(){return e.store[m](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(m=>{this[m]=function(){return e.store[m](...arguments),e}});const f=qs(),p=()=>{const m=(x,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),f.resolve(v),r(x,v)};if(this.languages&&!this.isInitialized)return m(null,this.t.bind(this));this.changeLanguage(this.options.lng,m)};return this.options.resources||!this.options.initAsync?p():setTimeout(p,0),f}loadResources(e){var l,u;let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ac;const o=me(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const d=[],f=p=>{if(!p||p==="cimode")return;this.services.languageUtils.toResolveHierarchy(p).forEach(x=>{x!=="cimode"&&d.indexOf(x)<0&&d.push(x)})};o?f(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(m=>f(m)),(u=(l=this.options.preload)==null?void 0:l.forEach)==null||u.call(l,p=>f(p)),this.services.backendConnector.load(d,this.options.ns,p=>{!p&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(p)})}else r(null)}reloadResources(e,i,r){const o=qs();return typeof e=="function"&&(r=e,e=void 0),typeof i=="function"&&(r=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),r||(r=ac),this.services.backendConnector.reload(e,i,l=>{o.resolve(),r(l)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Ev.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let i=0;i<this.languages.length;i++){const r=this.languages[i];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(e,i){var r=this;this.isLanguageChangingTo=e;const o=qs();this.emit("languageChanging",e);const l=f=>{this.language=f,this.languages=this.services.languageUtils.toResolveHierarchy(f),this.resolvedLanguage=void 0,this.setResolvedLanguage(f)},u=(f,p)=>{p?(l(p),this.translator.changeLanguage(p),this.isLanguageChangingTo=void 0,this.emit("languageChanged",p),this.logger.log("languageChanged",p)):this.isLanguageChangingTo=void 0,o.resolve(function(){return r.t(...arguments)}),i&&i(f,function(){return r.t(...arguments)})},d=f=>{var m,x;!e&&!f&&this.services.languageDetector&&(f=[]);const p=me(f)?f:this.services.languageUtils.getBestMatchFromCodes(f);p&&(this.language||l(p),this.translator.language||this.translator.changeLanguage(p),(x=(m=this.services.languageDetector)==null?void 0:m.cacheUserLanguage)==null||x.call(m,p)),this.loadResources(p,v=>{u(v,p)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?d(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(d):this.services.languageDetector.detect(d):d(e),o}getFixedT(e,i,r){var o=this;const l=function(u,d){let f;if(typeof d!="object"){for(var p=arguments.length,m=new Array(p>2?p-2:0),x=2;x<p;x++)m[x-2]=arguments[x];f=o.options.overloadTranslationOptionHandler([u,d].concat(m))}else f={...d};f.lng=f.lng||l.lng,f.lngs=f.lngs||l.lngs,f.ns=f.ns||l.ns,f.keyPrefix!==""&&(f.keyPrefix=f.keyPrefix||r||l.keyPrefix);const v=o.options.keySeparator||".";let S;return f.keyPrefix&&Array.isArray(u)?S=u.map(b=>`${f.keyPrefix}${v}${b}`):S=f.keyPrefix?`${f.keyPrefix}${v}${u}`:u,o.t(S,f)};return me(e)?l.lng=e:l.lngs=e,l.ns=i,l.keyPrefix=r,l}t(){var o;for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(o=this.translator)==null?void 0:o.translate(...i)}exists(){var o;for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(o=this.translator)==null?void 0:o.exists(...i)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=i.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const u=(d,f)=>{const p=this.services.backendConnector.state[`${d}|${f}`];return p===-1||p===0||p===2};if(i.precheck){const d=i.precheck(this,u);if(d!==void 0)return d}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(r,e)&&(!o||u(l,e)))}loadNamespaces(e,i){const r=qs();return this.options.ns?(me(e)&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{r.resolve(),i&&i(o)}),r):(i&&i(),Promise.resolve())}loadLanguages(e,i){const r=qs();me(e)&&(e=[e]);const o=this.options.preload||[],l=e.filter(u=>o.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return l.length?(this.options.preload=o.concat(l),this.loadResources(u=>{r.resolve(),i&&i(u)}),r):(i&&i(),Promise.resolve())}dir(e){var o,l;if(e||(e=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!e)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=((l=this.services)==null?void 0:l.languageUtils)||new Xx(Jx());return i.indexOf(r.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new mo(e,i)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ac;const r=e.forkResourceStore;r&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},l=new mo(o);if((e.debug!==void 0||e.prefix!==void 0)&&(l.logger=l.logger.clone(e)),["store","services","language"].forEach(d=>{l[d]=this[d]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},r){const d=Object.keys(this.store.data).reduce((f,p)=>(f[p]={...this.store.data[p]},Object.keys(f[p]).reduce((m,x)=>(m[x]={...f[p][x]},m),{})),{});l.store=new Yx(d,o),l.services.resourceStore=l.store}return l.translator=new $c(l.services,o),l.translator.on("*",function(d){for(var f=arguments.length,p=new Array(f>1?f-1:0),m=1;m<f;m++)p[m-1]=arguments[m];l.emit(d,...p)}),l.init(o,i),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Et=mo.createInstance();Et.createInstance=mo.createInstance;Et.createInstance;Et.dir;Et.init;Et.loadResources;Et.reloadResources;Et.use;Et.changeLanguage;Et.getFixedT;Et.t;Et.exists;Et.setDefaultNamespace;Et.hasLoadedNamespace;Et.loadNamespaces;Et.loadLanguages;function gh(t){"@babel/helpers - typeof";return gh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gh(t)}function Mv(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":gh(XMLHttpRequest))==="object"}function XV(t){return!!t&&typeof t.then=="function"}function KV(t){return XV(t)?t:Promise.resolve(t)}const WV="modulepreload",QV=function(t){return"/"+t},t6={},JV=function(e,i,r){let o=Promise.resolve();if(i&&i.length>0){let u=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=u(i.map(p=>{if(p=QV(p),p in t6)return;t6[p]=!0;const m=p.endsWith(".css"),x=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${x}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":WV,m||(v.as="script"),v.crossOrigin="",v.href=p,f&&v.setAttribute("nonce",f),document.head.appendChild(v),m)return new Promise((S,b)=>{v.addEventListener("load",S),v.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${p}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return o.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};function n6(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function i6(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?n6(Object(i),!0).forEach(function(r){ek(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n6(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function ek(t,e,i){return(e=tk(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function tk(t){var e=nk(t,"string");return Sa(e)=="symbol"?e:e+""}function nk(t,e){if(Sa(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e);if(Sa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Sa(t){"@babel/helpers - typeof";return Sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sa(t)}var Ui=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?Ui=global.fetch:typeof window<"u"&&window.fetch&&(Ui=window.fetch);var go;Mv()&&(typeof global<"u"&&global.XMLHttpRequest?go=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(go=window.XMLHttpRequest));var _c;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?_c=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(_c=window.ActiveXObject));typeof Ui!="function"&&(Ui=void 0);if(!Ui&&!go&&!_c)try{JV(()=>import("./browser-ponyfill-cXSvoiGa.js").then(t=>t.b),[]).then(function(t){Ui=t.default}).catch(function(){})}catch{}var xh=function(e,i){if(i&&Sa(i)==="object"){var r="";for(var o in i)r+="&"+encodeURIComponent(o)+"="+encodeURIComponent(i[o]);if(!r)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+r.slice(1)}return e},a6=function(e,i,r,o){var l=function(f){if(!f.ok)return r(f.statusText||"Error",{status:f.status});f.text().then(function(p){r(null,{status:f.status,data:p})}).catch(r)};if(o){var u=o(e,i);if(u instanceof Promise){u.then(l).catch(r);return}}typeof fetch=="function"?fetch(e,i).then(l).catch(r):Ui(e,i).then(l).catch(r)},r6=!1,ik=function(e,i,r,o){e.queryStringParams&&(i=xh(i,e.queryStringParams));var l=i6({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),r&&(l["Content-Type"]="application/json");var u=typeof e.requestOptions=="function"?e.requestOptions(r):e.requestOptions,d=i6({method:r?"POST":"GET",body:r?e.stringify(r):void 0,headers:l},r6?{}:u),f=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{a6(i,d,o,f)}catch(p){if(!u||Object.keys(u).length===0||!p.message||p.message.indexOf("not implemented")<0)return o(p);try{Object.keys(u).forEach(function(m){delete d[m]}),a6(i,d,o,f),r6=!0}catch(m){o(m)}}},ak=function(e,i,r,o){r&&Sa(r)==="object"&&(r=xh("",r).slice(1)),e.queryStringParams&&(i=xh(i,e.queryStringParams));try{var l=go?new go:new _c("MSXML2.XMLHTTP.3.0");l.open(r?"POST":"GET",i,1),e.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!e.withCredentials,r&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var u=e.customHeaders;if(u=typeof u=="function"?u():u,u)for(var d in u)l.setRequestHeader(d,u[d]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(r)}catch(f){console&&console.log(f)}},rk=function(e,i,r,o){if(typeof r=="function"&&(o=r,r=void 0),o=o||function(){},Ui&&i.indexOf("file:")!==0)return ik(e,i,r,o);if(Mv()||typeof ActiveXObject=="function")return ak(e,i,r,o);o(new Error("No fetch and no xhr implementation found!"))};function Or(t){"@babel/helpers - typeof";return Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Or(t)}function s6(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function M0(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?s6(Object(i),!0).forEach(function(r){Av(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s6(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function sk(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ok(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,jv(r.key),r)}}function lk(t,e,i){return e&&ok(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Av(t,e,i){return(e=jv(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function jv(t){var e=ck(t,"string");return Or(e)=="symbol"?e:e+""}function ck(t,e){if(Or(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e);if(Or(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var uk=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(i){return JSON.parse(i)},stringify:JSON.stringify,parsePayload:function(i,r,o){return Av({},r,o||"")},parseLoadPayload:function(i,r){},request:rk,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Lv=function(){function t(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};sk(this,t),this.services=e,this.options=i,this.allOptions=r,this.type="backend",this.init(e,i,r)}return lk(t,[{key:"init",value:function(i){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=i,this.options=M0(M0(M0({},uk()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var u=setInterval(function(){return r.reload()},this.options.reloadInterval);Or(u)==="object"&&typeof u.unref=="function"&&u.unref()}}},{key:"readMulti",value:function(i,r,o){this._readAny(i,i,r,r,o)}},{key:"read",value:function(i,r,o){this._readAny([i],i,[r],r,o)}},{key:"_readAny",value:function(i,r,o,l,u){var d=this,f=this.options.loadPath;typeof this.options.loadPath=="function"&&(f=this.options.loadPath(i,o)),f=KV(f),f.then(function(p){if(!p)return u(null,{});var m=d.services.interpolator.interpolate(p,{lng:i.join("+"),ns:o.join("+")});d.loadUrl(m,u,r,l)})}},{key:"loadUrl",value:function(i,r,o,l){var u=this,d=typeof o=="string"?[o]:o,f=typeof l=="string"?[l]:l,p=this.options.parseLoadPayload(d,f);this.options.request(this.options,i,p,function(m,x){if(x&&(x.status>=500&&x.status<600||!x.status))return r("failed loading "+i+"; status code: "+x.status,!0);if(x&&x.status>=400&&x.status<500)return r("failed loading "+i+"; status code: "+x.status,!1);if(!x&&m&&m.message){var v=m.message.toLowerCase(),S=["failed","fetch","network","load"].find(function(O){return v.indexOf(O)>-1});if(S)return r("failed loading "+i+": "+m.message,!0)}if(m)return r(m,!1);var b,E;try{typeof x.data=="string"?b=u.options.parse(x.data,o,l):b=x.data}catch{E="failed parsing "+i+" to json"}if(E)return r(E,!1);r(null,b)})}},{key:"create",value:function(i,r,o,l,u){var d=this;if(this.options.addPath){typeof i=="string"&&(i=[i]);var f=this.options.parsePayload(r,o,l),p=0,m=[],x=[];i.forEach(function(v){var S=d.options.addPath;typeof d.options.addPath=="function"&&(S=d.options.addPath(v,r));var b=d.services.interpolator.interpolate(S,{lng:v,ns:r});d.options.request(d.options,b,f,function(E,O){p+=1,m.push(E),x.push(O),p===i.length&&typeof u=="function"&&u(m,x)})})}}},{key:"reload",value:function(){var i=this,r=this.services,o=r.backendConnector,l=r.languageUtils,u=r.logger,d=o.language;if(!(d&&d.toLowerCase()==="cimode")){var f=[],p=function(x){var v=l.toResolveHierarchy(x);v.forEach(function(S){f.indexOf(S)<0&&f.push(S)})};p(d),this.allOptions.preload&&this.allOptions.preload.forEach(function(m){return p(m)}),f.forEach(function(m){i.allOptions.ns.forEach(function(x){o.read(m,x,"read",null,null,function(v,S){v&&u.warn("loading namespace ".concat(x," for language ").concat(m," failed"),v),!v&&S&&u.log("loaded namespace ".concat(x," for language ").concat(m),S),o.loaded("".concat(m,"|").concat(x),v,S)})})})}}}])}();Lv.type="backend";const{slice:dk,forEach:fk}=[];function hk(t){return fk.call(dk.call(arguments,1),e=>{if(e)for(const i in e)t[i]===void 0&&(t[i]=e[i])}),t}function pk(t){return typeof t!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(i=>i.test(t))}const o6=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,mk=function(t,e){const r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(e);let l=`${t}=${o}`;if(r.maxAge>0){const u=r.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(u)}`}if(r.domain){if(!o6.test(r.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${r.domain}`}if(r.path){if(!o6.test(r.path))throw new TypeError("option path is invalid");l+=`; Path=${r.path}`}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${r.expires.toUTCString()}`}if(r.httpOnly&&(l+="; HttpOnly"),r.secure&&(l+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(l+="; Partitioned"),l},l6={create(t,e,i,r){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};i&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+i*60*1e3)),r&&(o.domain=r),document.cookie=mk(t,e,o)},read(t){const e=`${t}=`,i=document.cookie.split(";");for(let r=0;r<i.length;r++){let o=i[r];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(e)===0)return o.substring(e.length,o.length)}return null},remove(t,e){this.create(t,"",-1,e)}};var gk={name:"cookie",lookup(t){let{lookupCookie:e}=t;if(e&&typeof document<"u")return l6.read(e)||void 0},cacheUserLanguage(t,e){let{lookupCookie:i,cookieMinutes:r,cookieDomain:o,cookieOptions:l}=e;i&&typeof document<"u"&&l6.create(i,t,r,o,l)}},xk={name:"querystring",lookup(t){var r;let{lookupQuerystring:e}=t,i;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((r=window.location.hash)==null?void 0:r.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let d=0;d<u.length;d++){const f=u[d].indexOf("=");f>0&&u[d].substring(0,f)===e&&(i=u[d].substring(f+1))}}return i}},yk={name:"hash",lookup(t){var o;let{lookupHash:e,lookupFromHashIndex:i}=t,r;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const u=l.substring(1);if(e){const d=u.split("&");for(let f=0;f<d.length;f++){const p=d[f].indexOf("=");p>0&&d[f].substring(0,p)===e&&(r=d[f].substring(p+1))}}if(r)return r;if(!r&&i>-1){const d=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(d)?(o=d[typeof i=="number"?i:0])==null?void 0:o.replace("/",""):void 0}}}return r}};let dr=null;const c6=()=>{if(dr!==null)return dr;try{if(dr=typeof window<"u"&&window.localStorage!==null,!dr)return!1;const t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{dr=!1}return dr};var vk={name:"localStorage",lookup(t){let{lookupLocalStorage:e}=t;if(e&&c6())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupLocalStorage:i}=e;i&&c6()&&window.localStorage.setItem(i,t)}};let fr=null;const u6=()=>{if(fr!==null)return fr;try{if(fr=typeof window<"u"&&window.sessionStorage!==null,!fr)return!1;const t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{fr=!1}return fr};var wk={name:"sessionStorage",lookup(t){let{lookupSessionStorage:e}=t;if(e&&u6())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupSessionStorage:i}=e;i&&u6()&&window.sessionStorage.setItem(i,t)}},bk={name:"navigator",lookup(t){const e=[];if(typeof navigator<"u"){const{languages:i,userLanguage:r,language:o}=navigator;if(i)for(let l=0;l<i.length;l++)e.push(i[l]);r&&e.push(r),o&&e.push(o)}return e.length>0?e:void 0}},Sk={name:"htmlTag",lookup(t){let{htmlTag:e}=t,i;const r=e||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(i=r.getAttribute("lang")),i}},Ck={name:"path",lookup(t){var o;let{lookupFromPathIndex:e}=t;if(typeof window>"u")return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(i)?(o=i[typeof e=="number"?e:0])==null?void 0:o.replace("/",""):void 0}},Tk={name:"subdomain",lookup(t){var o,l;let{lookupFromSubdomainIndex:e}=t;const i=typeof e=="number"?e+1:1,r=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(r)return r[i]}};let Ov=!1;try{document.cookie,Ov=!0}catch{}const Rv=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Ov||Rv.splice(1,1);const Ek=()=>({order:Rv,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:t=>t});class Dv{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,i)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=hk(i,this.options||{},Ek()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(gk),this.addDetector(xk),this.addDetector(vk),this.addDetector(wk),this.addDetector(bk),this.addDetector(Sk),this.addDetector(Ck),this.addDetector(Tk),this.addDetector(yk)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,i=[];return e.forEach(r=>{if(this.detectors[r]){let o=this.detectors[r].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(i=i.concat(o))}}),i=i.filter(r=>r!=null&&!pk(r)).map(r=>this.options.convertDetectedLanguage(r)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}cacheUserLanguage(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;i&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||i.forEach(r=>{this.detectors[r]&&this.detectors[r].cacheUserLanguage(e,this.options)}))}}Dv.type="languageDetector";Et.use(Lv).use(Dv).use(uj).init({supportedLngs:["en","ru","es","uk"],fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const Mk=R.createContext(void 0),Ak=({children:t})=>{const{i18n:e}=xp(),i=r=>{e.changeLanguage(r).then(()=>{window.location.reload()})};return y.jsx(Mk.Provider,{value:{language:e.language,setLanguage:i},children:t})};f9.createRoot(document.getElementById("root")).render(y.jsxs(Le.StrictMode,{children:[y.jsx(Ob,{styles:zb}),y.jsx(Lw,{basename:"/",children:y.jsx(Ak,{children:y.jsx(OV,{})})})]}));export{jk as c,Uc as g};
