function w9(t,e){for(var i=0;i<e.length;i++){const r=e[i];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();var IP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cf={exports:{}},Ns={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n3;function b9(){if(n3)return Ns;n3=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var d in o)d!=="key"&&(l[d]=o[d])}else l=o;return o=l.ref,{$$typeof:t,type:r,key:u,ref:o!==void 0?o:null,props:l}}return Ns.Fragment=e,Ns.jsx=i,Ns.jsxs=i,Ns}var i3;function S9(){return i3||(i3=1,Cf.exports=b9()),Cf.exports}var x=S9(),Tf={exports:{}},Bs={},Ef={exports:{}},Af={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a3;function C9(){return a3||(a3=1,function(t){function e(B,W){var K=B.length;B.push(W);e:for(;0<K;){var ee=K-1>>>1,D=B[ee];if(0<o(D,W))B[ee]=W,B[K]=D,K=ee;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var W=B[0],K=B.pop();if(K!==W){B[0]=K;e:for(var ee=0,D=B.length,X=D>>>1;ee<X;){var ne=2*(ee+1)-1,ae=B[ne],ce=ne+1,we=B[ce];if(0>o(ae,K))ce<D&&0>o(we,ae)?(B[ee]=we,B[ce]=K,ee=ce):(B[ee]=ae,B[ne]=K,ee=ne);else if(ce<D&&0>o(we,K))B[ee]=we,B[ce]=K,ee=ce;else break e}}return W}function o(B,W){var K=B.sortIndex-W.sortIndex;return K!==0?K:B.id-W.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();t.unstable_now=function(){return u.now()-d}}var p=[],h=[],m=1,y=null,v=3,S=!1,b=!1,A=!1,O=!1,j=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function k(B){for(var W=i(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=B)r(h),W.sortIndex=W.expirationTime,e(p,W);else break;W=i(h)}}function L(B){if(A=!1,k(B),!b)if(i(p)!==null)b=!0,P||(P=!0,te());else{var W=i(h);W!==null&&re(L,W.startTime-B)}}var P=!1,V=-1,U=5,$=-1;function Y(){return O?!0:!(t.unstable_now()-$<U)}function F(){if(O=!1,P){var B=t.unstable_now();$=B;var W=!0;try{e:{b=!1,A&&(A=!1,E(V),V=-1),S=!0;var K=v;try{t:{for(k(B),y=i(p);y!==null&&!(y.expirationTime>B&&Y());){var ee=y.callback;if(typeof ee=="function"){y.callback=null,v=y.priorityLevel;var D=ee(y.expirationTime<=B);if(B=t.unstable_now(),typeof D=="function"){y.callback=D,k(B),W=!0;break t}y===i(p)&&r(p),k(B)}else r(p);y=i(p)}if(y!==null)W=!0;else{var X=i(h);X!==null&&re(L,X.startTime-B),W=!1}}break e}finally{y=null,v=K,S=!1}W=void 0}}finally{W?te():P=!1}}}var te;if(typeof T=="function")te=function(){T(F)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,oe=ie.port2;ie.port1.onmessage=F,te=function(){oe.postMessage(null)}}else te=function(){j(F,0)};function re(B,W){V=j(function(){B(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_next=function(B){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var K=v;v=W;try{return B()}finally{v=K}},t.unstable_requestPaint=function(){O=!0},t.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=v;v=B;try{return W()}finally{v=K}},t.unstable_scheduleCallback=function(B,W,K){var ee=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ee+K:ee):K=ee,B){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=K+D,B={id:m++,callback:W,priorityLevel:B,startTime:K,expirationTime:D,sortIndex:-1},K>ee?(B.sortIndex=K,e(h,B),i(p)===null&&B===i(h)&&(A?(E(V),V=-1):A=!0,re(L,K-ee))):(B.sortIndex=D,e(p,B),b||S||(b=!0,P||(P=!0,te()))),B},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(B){var W=v;return function(){var K=v;v=W;try{return B.apply(this,arguments)}finally{v=K}}}}(Af)),Af}var r3;function T9(){return r3||(r3=1,Ef.exports=C9()),Ef.exports}var Mf={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s3;function E9(){if(s3)return ge;s3=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.iterator;function v(D){return D===null||typeof D!="object"?null:(D=y&&D[y]||D["@@iterator"],typeof D=="function"?D:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,A={};function O(D,X,ne){this.props=D,this.context=X,this.refs=A,this.updater=ne||S}O.prototype.isReactComponent={},O.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},O.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function j(){}j.prototype=O.prototype;function E(D,X,ne){this.props=D,this.context=X,this.refs=A,this.updater=ne||S}var T=E.prototype=new j;T.constructor=E,b(T,O.prototype),T.isPureReactComponent=!0;var k=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function V(D,X,ne,ae,ce,we){return ne=we.ref,{$$typeof:t,type:D,key:X,ref:ne!==void 0?ne:null,props:we}}function U(D,X){return V(D.type,X,void 0,void 0,void 0,D.props)}function $(D){return typeof D=="object"&&D!==null&&D.$$typeof===t}function Y(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ne){return X[ne]})}var F=/\/+/g;function te(D,X){return typeof D=="object"&&D!==null&&D.key!=null?Y(""+D.key):X.toString(36)}function ie(){}function oe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(ie,ie):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function re(D,X,ne,ae,ce){var we=typeof D;(we==="undefined"||we==="boolean")&&(D=null);var de=!1;if(D===null)de=!0;else switch(we){case"bigint":case"string":case"number":de=!0;break;case"object":switch(D.$$typeof){case t:case e:de=!0;break;case m:return de=D._init,re(de(D._payload),X,ne,ae,ce)}}if(de)return ce=ce(D),de=ae===""?"."+te(D,0):ae,k(ce)?(ne="",de!=null&&(ne=de.replace(F,"$&/")+"/"),re(ce,X,ne,"",function(bt){return bt})):ce!=null&&($(ce)&&(ce=U(ce,ne+(ce.key==null||D&&D.key===ce.key?"":(""+ce.key).replace(F,"$&/")+"/")+de)),X.push(ce)),1;de=0;var ot=ae===""?".":ae+":";if(k(D))for(var Oe=0;Oe<D.length;Oe++)ae=D[Oe],we=ot+te(ae,Oe),de+=re(ae,X,ne,we,ce);else if(Oe=v(D),typeof Oe=="function")for(D=Oe.call(D),Oe=0;!(ae=D.next()).done;)ae=ae.value,we=ot+te(ae,Oe++),de+=re(ae,X,ne,we,ce);else if(we==="object"){if(typeof D.then=="function")return re(oe(D),X,ne,ae,ce);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return de}function B(D,X,ne){if(D==null)return D;var ae=[],ce=0;return re(D,ae,"","",function(we){return X.call(ne,we,ce++)}),ae}function W(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(ne){(D._status===0||D._status===-1)&&(D._status=1,D._result=ne)},function(ne){(D._status===0||D._status===-1)&&(D._status=2,D._result=ne)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var K=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function ee(){}return ge.Children={map:B,forEach:function(D,X,ne){B(D,function(){X.apply(this,arguments)},ne)},count:function(D){var X=0;return B(D,function(){X++}),X},toArray:function(D){return B(D,function(X){return X})||[]},only:function(D){if(!$(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ge.Component=O,ge.Fragment=i,ge.Profiler=o,ge.PureComponent=E,ge.StrictMode=r,ge.Suspense=p,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ge.__COMPILER_RUNTIME={__proto__:null,c:function(D){return L.H.useMemoCache(D)}},ge.cache=function(D){return function(){return D.apply(null,arguments)}},ge.cloneElement=function(D,X,ne){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ae=b({},D.props),ce=D.key,we=void 0;if(X!=null)for(de in X.ref!==void 0&&(we=void 0),X.key!==void 0&&(ce=""+X.key),X)!P.call(X,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&X.ref===void 0||(ae[de]=X[de]);var de=arguments.length-2;if(de===1)ae.children=ne;else if(1<de){for(var ot=Array(de),Oe=0;Oe<de;Oe++)ot[Oe]=arguments[Oe+2];ae.children=ot}return V(D.type,ce,void 0,void 0,we,ae)},ge.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},ge.createElement=function(D,X,ne){var ae,ce={},we=null;if(X!=null)for(ae in X.key!==void 0&&(we=""+X.key),X)P.call(X,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ce[ae]=X[ae]);var de=arguments.length-2;if(de===1)ce.children=ne;else if(1<de){for(var ot=Array(de),Oe=0;Oe<de;Oe++)ot[Oe]=arguments[Oe+2];ce.children=ot}if(D&&D.defaultProps)for(ae in de=D.defaultProps,de)ce[ae]===void 0&&(ce[ae]=de[ae]);return V(D,we,void 0,void 0,null,ce)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(D){return{$$typeof:d,render:D}},ge.isValidElement=$,ge.lazy=function(D){return{$$typeof:m,_payload:{_status:-1,_result:D},_init:W}},ge.memo=function(D,X){return{$$typeof:h,type:D,compare:X===void 0?null:X}},ge.startTransition=function(D){var X=L.T,ne={};L.T=ne;try{var ae=D(),ce=L.S;ce!==null&&ce(ne,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(ee,K)}catch(we){K(we)}finally{L.T=X}},ge.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ge.use=function(D){return L.H.use(D)},ge.useActionState=function(D,X,ne){return L.H.useActionState(D,X,ne)},ge.useCallback=function(D,X){return L.H.useCallback(D,X)},ge.useContext=function(D){return L.H.useContext(D)},ge.useDebugValue=function(){},ge.useDeferredValue=function(D,X){return L.H.useDeferredValue(D,X)},ge.useEffect=function(D,X,ne){var ae=L.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(D,X)},ge.useId=function(){return L.H.useId()},ge.useImperativeHandle=function(D,X,ne){return L.H.useImperativeHandle(D,X,ne)},ge.useInsertionEffect=function(D,X){return L.H.useInsertionEffect(D,X)},ge.useLayoutEffect=function(D,X){return L.H.useLayoutEffect(D,X)},ge.useMemo=function(D,X){return L.H.useMemo(D,X)},ge.useOptimistic=function(D,X){return L.H.useOptimistic(D,X)},ge.useReducer=function(D,X,ne){return L.H.useReducer(D,X,ne)},ge.useRef=function(D){return L.H.useRef(D)},ge.useState=function(D){return L.H.useState(D)},ge.useSyncExternalStore=function(D,X,ne){return L.H.useSyncExternalStore(D,X,ne)},ge.useTransition=function(){return L.H.useTransition()},ge.version="19.1.1",ge}var o3;function Ep(){return o3||(o3=1,Mf.exports=E9()),Mf.exports}var jf={exports:{}},Tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l3;function A9(){if(l3)return Tt;l3=1;var t=Ep();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,h,m){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:p,containerInfo:h,implementation:m}}var u=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tt.createPortal=function(p,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(p,h,null,m)},Tt.flushSync=function(p){var h=u.T,m=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=h,r.p=m,r.d.f()}},Tt.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},Tt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Tt.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var m=h.as,y=d(m,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:S}):m==="script"&&r.d.X(p,{crossOrigin:y,integrity:v,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Tt.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=d(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},Tt.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,y=d(m,h.crossOrigin);r.d.L(p,m,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Tt.preloadModule=function(p,h){if(typeof p=="string")if(h){var m=d(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},Tt.requestFormReset=function(p){r.d.r(p)},Tt.unstable_batchedUpdates=function(p,h){return p(h)},Tt.useFormState=function(p,h,m){return u.H.useFormState(p,h,m)},Tt.useFormStatus=function(){return u.H.useHostTransitionStatus()},Tt.version="19.1.1",Tt}var c3;function M9(){if(c3)return jf.exports;c3=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),jf.exports=A9(),jf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u3;function j9(){if(u3)return Bs;u3=1;var t=T9(),e=Ep(),i=M9();function r(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,s=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(s=a.return),n=a.return;while(n)}return a.tag===3?s:null}function u(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(r(188))}function p(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(r(188));return a!==n?null:n}for(var s=n,c=a;;){var f=s.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){s=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===s)return d(f),n;if(g===c)return d(f),a;g=g.sibling}throw Error(r(188))}if(s.return!==c.return)s=f,c=g;else{for(var w=!1,M=f.child;M;){if(M===s){w=!0,s=f,c=g;break}if(M===c){w=!0,c=f,s=g;break}M=M.sibling}if(!w){for(M=g.child;M;){if(M===s){w=!0,s=g,c=f;break}if(M===c){w=!0,c=g,s=f;break}M=M.sibling}if(!w)throw Error(r(189))}}if(s.alternate!==c)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?n:a}function h(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=h(n),a!==null)return a;n=n.sibling}return null}var m=Object.assign,y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),E=Symbol.for("react.consumer"),T=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Symbol.for("react.client.reference");function oe(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ie?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case b:return"Fragment";case O:return"Profiler";case A:return"StrictMode";case L:return"Suspense";case P:return"SuspenseList";case $:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case T:return(n.displayName||"Context")+".Provider";case E:return(n._context.displayName||"Context")+".Consumer";case k:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return a=n.displayName||null,a!==null?a:oe(n.type)||"Memo";case U:a=n._payload,n=n._init;try{return oe(n(a))}catch{}}return null}var re=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},ee=[],D=-1;function X(n){return{current:n}}function ne(n){0>D||(n.current=ee[D],ee[D]=null,D--)}function ae(n,a){D++,ee[D]=n.current,n.current=a}var ce=X(null),we=X(null),de=X(null),ot=X(null);function Oe(n,a){switch(ae(de,a),ae(we,n),ae(ce,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?Og(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=Og(a),n=Rg(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(ce),ae(ce,n)}function bt(){ne(ce),ne(we),ne(de)}function Fi(n){n.memoizedState!==null&&ae(ot,n);var a=ce.current,s=Rg(a,n.type);a!==s&&(ae(we,n),ae(ce,s))}function Gn(n){we.current===n&&(ne(ce),ne(we)),ot.current===n&&(ne(ot),Ds._currentValue=K)}var tn=Object.prototype.hasOwnProperty,cu=t.unstable_scheduleCallback,uu=t.unstable_cancelCallback,Qv=t.unstable_shouldYield,Jv=t.unstable_requestPaint,jn=t.unstable_now,e8=t.unstable_getCurrentPriorityLevel,u1=t.unstable_ImmediatePriority,d1=t.unstable_UserBlockingPriority,Mo=t.unstable_NormalPriority,t8=t.unstable_LowPriority,f1=t.unstable_IdlePriority,n8=t.log,i8=t.unstable_setDisableYieldValue,Ur=null,Ut=null;function hi(n){if(typeof n8=="function"&&i8(n),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(Ur,n)}catch{}}var _t=Math.clz32?Math.clz32:s8,a8=Math.log,r8=Math.LN2;function s8(n){return n>>>=0,n===0?32:31-(a8(n)/r8|0)|0}var jo=256,Lo=4194304;function Xi(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Oo(n,a,s){var c=n.pendingLanes;if(c===0)return 0;var f=0,g=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var M=c&134217727;return M!==0?(c=M&~g,c!==0?f=Xi(c):(w&=M,w!==0?f=Xi(w):s||(s=M&~n,s!==0&&(f=Xi(s))))):(M=c&~g,M!==0?f=Xi(M):w!==0?f=Xi(w):s||(s=c&~n,s!==0&&(f=Xi(s)))),f===0?0:a!==0&&a!==f&&(a&g)===0&&(g=f&-f,s=a&-a,g>=s||g===32&&(s&4194048)!==0)?a:f}function _r(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function o8(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p1(){var n=jo;return jo<<=1,(jo&4194048)===0&&(jo=256),n}function h1(){var n=Lo;return Lo<<=1,(Lo&62914560)===0&&(Lo=4194304),n}function du(n){for(var a=[],s=0;31>s;s++)a.push(n);return a}function Ir(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function l8(n,a,s,c,f,g){var w=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var M=n.entanglements,H=n.expirationTimes,I=n.hiddenUpdates;for(s=w&~s;0<s;){var Z=31-_t(s),J=1<<Z;M[Z]=0,H[Z]=-1;var G=I[Z];if(G!==null)for(I[Z]=null,Z=0;Z<G.length;Z++){var q=G[Z];q!==null&&(q.lane&=-536870913)}s&=~J}c!==0&&m1(n,c,0),g!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=g&~(w&~a))}function m1(n,a,s){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-_t(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194090}function g1(n,a){var s=n.entangledLanes|=a;for(n=n.entanglements;s;){var c=31-_t(s),f=1<<c;f&a|n[c]&a&&(n[c]|=a),s&=~f}}function fu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function pu(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function x1(){var n=W.p;return n!==0?n:(n=window.event,n===void 0?32:Wg(n.type))}function c8(n,a){var s=W.p;try{return W.p=n,a()}finally{W.p=s}}var mi=Math.random().toString(36).slice(2),St="__reactFiber$"+mi,kt="__reactProps$"+mi,Ta="__reactContainer$"+mi,hu="__reactEvents$"+mi,u8="__reactListeners$"+mi,d8="__reactHandles$"+mi,y1="__reactResources$"+mi,Gr="__reactMarker$"+mi;function mu(n){delete n[St],delete n[kt],delete n[hu],delete n[u8],delete n[d8]}function Ea(n){var a=n[St];if(a)return a;for(var s=n.parentNode;s;){if(a=s[Ta]||s[St]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(n=Vg(n);n!==null;){if(s=n[St])return s;n=Vg(n)}return a}n=s,s=n.parentNode}return null}function Aa(n){if(n=n[St]||n[Ta]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function qr(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(r(33))}function Ma(n){var a=n[y1];return a||(a=n[y1]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function lt(n){n[Gr]=!0}var v1=new Set,w1={};function Zi(n,a){ja(n,a),ja(n+"Capture",a)}function ja(n,a){for(w1[n]=a,n=0;n<a.length;n++)v1.add(a[n])}var f8=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),b1={},S1={};function p8(n){return tn.call(S1,n)?!0:tn.call(b1,n)?!1:f8.test(n)?S1[n]=!0:(b1[n]=!0,!1)}function Ro(n,a,s){if(p8(a))if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+s)}}function ko(n,a,s){if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+s)}}function qn(n,a,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(a,s,""+c)}}var gu,C1;function La(n){if(gu===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);gu=a&&a[1]||"",C1=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gu+n+C1}var xu=!1;function yu(n,a){if(!n||xu)return"";xu=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(q){var G=q}Reflect.construct(n,[],J)}else{try{J.call()}catch(q){G=q}n.call(J.prototype)}}else{try{throw Error()}catch(q){G=q}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(q){if(q&&G&&typeof q.stack=="string")return[q.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),w=g[0],M=g[1];if(w&&M){var H=w.split(`
`),I=M.split(`
`);for(f=c=0;c<H.length&&!H[c].includes("DetermineComponentFrameRoot");)c++;for(;f<I.length&&!I[f].includes("DetermineComponentFrameRoot");)f++;if(c===H.length||f===I.length)for(c=H.length-1,f=I.length-1;1<=c&&0<=f&&H[c]!==I[f];)f--;for(;1<=c&&0<=f;c--,f--)if(H[c]!==I[f]){if(c!==1||f!==1)do if(c--,f--,0>f||H[c]!==I[f]){var Z=`
`+H[c].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=c&&0<=f);break}}}finally{xu=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?La(s):""}function h8(n){switch(n.tag){case 26:case 27:case 5:return La(n.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 15:return yu(n.type,!1);case 11:return yu(n.type.render,!1);case 1:return yu(n.type,!0);case 31:return La("Activity");default:return""}}function T1(n){try{var a="";do a+=h8(n),n=n.return;while(n);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function nn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function E1(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function m8(n){var a=E1(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,g=s.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,a,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Do(n){n._valueTracker||(n._valueTracker=m8(n))}function A1(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var s=a.getValue(),c="";return n&&(c=E1(n)?n.checked?"true":"false":n.value),n=c,n!==s?(a.setValue(n),!0):!1}function Ho(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var g8=/[\n"\\]/g;function an(n){return n.replace(g8,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function vu(n,a,s,c,f,g,w,M){n.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.type=w:n.removeAttribute("type"),a!=null?w==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+nn(a)):n.value!==""+nn(a)&&(n.value=""+nn(a)):w!=="submit"&&w!=="reset"||n.removeAttribute("value"),a!=null?wu(n,w,nn(a)):s!=null?wu(n,w,nn(s)):c!=null&&n.removeAttribute("value"),f==null&&g!=null&&(n.defaultChecked=!!g),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?n.name=""+nn(M):n.removeAttribute("name")}function M1(n,a,s,c,f,g,w,M){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),a!=null||s!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;s=s!=null?""+nn(s):"",a=a!=null?""+nn(a):s,M||a===n.value||(n.value=a),n.defaultValue=a}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=M?n.checked:!!c,n.defaultChecked=!!c,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(n.name=w)}function wu(n,a,s){a==="number"&&Ho(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Oa(n,a,s,c){if(n=n.options,a){a={};for(var f=0;f<s.length;f++)a["$"+s[f]]=!0;for(s=0;s<n.length;s++)f=a.hasOwnProperty("$"+n[s].value),n[s].selected!==f&&(n[s].selected=f),f&&c&&(n[s].defaultSelected=!0)}else{for(s=""+nn(s),a=null,f=0;f<n.length;f++){if(n[f].value===s){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}a!==null||n[f].disabled||(a=n[f])}a!==null&&(a.selected=!0)}}function j1(n,a,s){if(a!=null&&(a=""+nn(a),a!==n.value&&(n.value=a),s==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=s!=null?""+nn(s):""}function L1(n,a,s,c){if(a==null){if(c!=null){if(s!=null)throw Error(r(92));if(re(c)){if(1<c.length)throw Error(r(93));c=c[0]}s=c}s==null&&(s=""),a=s}s=nn(a),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function Ra(n,a){if(a){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=a;return}}n.textContent=a}var x8=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function O1(n,a,s){var c=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,s):typeof s!="number"||s===0||x8.has(a)?a==="float"?n.cssFloat=s:n[a]=(""+s).trim():n[a]=s+"px"}function R1(n,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var f in a)c=a[f],a.hasOwnProperty(f)&&s[f]!==c&&O1(n,f,c)}else for(var g in a)a.hasOwnProperty(g)&&O1(n,g,a[g])}function bu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var y8=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),v8=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(n){return v8.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Su=null;function Cu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ka=null,Da=null;function k1(n){var a=Aa(n);if(a&&(n=a.stateNode)){var s=n[kt]||null;e:switch(n=a.stateNode,a.type){case"input":if(vu(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+an(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var c=s[a];if(c!==n&&c.form===n.form){var f=c[kt]||null;if(!f)throw Error(r(90));vu(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<s.length;a++)c=s[a],c.form===n.form&&A1(c)}break e;case"textarea":j1(n,s.value,s.defaultValue);break e;case"select":a=s.value,a!=null&&Oa(n,!!s.multiple,a,!1)}}}var Tu=!1;function D1(n,a,s){if(Tu)return n(a,s);Tu=!0;try{var c=n(a);return c}finally{if(Tu=!1,(ka!==null||Da!==null)&&(wl(),ka&&(a=ka,n=Da,Da=ka=null,k1(a),n)))for(a=0;a<n.length;a++)k1(n[a])}}function Yr(n,a){var s=n.stateNode;if(s===null)return null;var c=s[kt]||null;if(c===null)return null;s=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=!1;if(Yn)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Eu=!1}var gi=null,Au=null,zo=null;function H1(){if(zo)return zo;var n,a=Au,s=a.length,c,f="value"in gi?gi.value:gi.textContent,g=f.length;for(n=0;n<s&&a[n]===f[n];n++);var w=s-n;for(c=1;c<=w&&a[s-c]===f[g-c];c++);return zo=f.slice(n,1<c?1-c:void 0)}function Po(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function No(){return!0}function V1(){return!1}function Dt(n){function a(s,c,f,g,w){this._reactName=s,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var M in n)n.hasOwnProperty(M)&&(s=n[M],this[M]=s?s(g):g[M]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?No:V1,this.isPropagationStopped=V1,this}return m(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),a}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bo=Dt(Wi),Xr=m({},Wi,{view:0,detail:0}),w8=Dt(Xr),Mu,ju,Zr,$o=m({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Zr&&(Zr&&n.type==="mousemove"?(Mu=n.screenX-Zr.screenX,ju=n.screenY-Zr.screenY):ju=Mu=0,Zr=n),Mu)},movementY:function(n){return"movementY"in n?n.movementY:ju}}),z1=Dt($o),b8=m({},$o,{dataTransfer:0}),S8=Dt(b8),C8=m({},Xr,{relatedTarget:0}),Lu=Dt(C8),T8=m({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),E8=Dt(T8),A8=m({},Wi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),M8=Dt(A8),j8=m({},Wi,{data:0}),P1=Dt(j8),L8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k8(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=R8[n])?!!a[n]:!1}function Ou(){return k8}var D8=m({},Xr,{key:function(n){if(n.key){var a=L8[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?O8[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(n){return n.type==="keypress"?Po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),H8=Dt(D8),V8=m({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),N1=Dt(V8),z8=m({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),P8=Dt(z8),N8=m({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),B8=Dt(N8),$8=m({},$o,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),U8=Dt($8),_8=m({},Wi,{newState:0,oldState:0}),I8=Dt(_8),G8=[9,13,27,32],Ru=Yn&&"CompositionEvent"in window,Wr=null;Yn&&"documentMode"in document&&(Wr=document.documentMode);var q8=Yn&&"TextEvent"in window&&!Wr,B1=Yn&&(!Ru||Wr&&8<Wr&&11>=Wr),$1=" ",U1=!1;function _1(n,a){switch(n){case"keyup":return G8.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I1(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ha=!1;function Y8(n,a){switch(n){case"compositionend":return I1(a);case"keypress":return a.which!==32?null:(U1=!0,$1);case"textInput":return n=a.data,n===$1&&U1?null:n;default:return null}}function F8(n,a){if(Ha)return n==="compositionend"||!Ru&&_1(n,a)?(n=H1(),zo=Au=gi=null,Ha=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return B1&&a.locale!=="ko"?null:a.data;default:return null}}var X8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function G1(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!X8[n.type]:a==="textarea"}function q1(n,a,s,c){ka?Da?Da.push(c):Da=[c]:ka=c,a=Al(a,"onChange"),0<a.length&&(s=new Bo("onChange","change",null,s,c),n.push({event:s,listeners:a}))}var Kr=null,Qr=null;function Z8(n){Eg(n,0)}function Uo(n){var a=qr(n);if(A1(a))return n}function Y1(n,a){if(n==="change")return a}var F1=!1;if(Yn){var ku;if(Yn){var Du="oninput"in document;if(!Du){var X1=document.createElement("div");X1.setAttribute("oninput","return;"),Du=typeof X1.oninput=="function"}ku=Du}else ku=!1;F1=ku&&(!document.documentMode||9<document.documentMode)}function Z1(){Kr&&(Kr.detachEvent("onpropertychange",W1),Qr=Kr=null)}function W1(n){if(n.propertyName==="value"&&Uo(Qr)){var a=[];q1(a,Qr,n,Cu(n)),D1(Z8,a)}}function W8(n,a,s){n==="focusin"?(Z1(),Kr=a,Qr=s,Kr.attachEvent("onpropertychange",W1)):n==="focusout"&&Z1()}function K8(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uo(Qr)}function Q8(n,a){if(n==="click")return Uo(a)}function J8(n,a){if(n==="input"||n==="change")return Uo(a)}function e7(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var It=typeof Object.is=="function"?Object.is:e7;function Jr(n,a){if(It(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var s=Object.keys(n),c=Object.keys(a);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var f=s[c];if(!tn.call(a,f)||!It(n[f],a[f]))return!1}return!0}function K1(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Q1(n,a){var s=K1(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=a&&c>=a)return{node:s,offset:a-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=K1(s)}}function J1(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?J1(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function e2(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Ho(n.document);a instanceof n.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)n=a.contentWindow;else break;a=Ho(n.document)}return a}function Hu(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var t7=Yn&&"documentMode"in document&&11>=document.documentMode,Va=null,Vu=null,es=null,zu=!1;function t2(n,a,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;zu||Va==null||Va!==Ho(c)||(c=Va,"selectionStart"in c&&Hu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),es&&Jr(es,c)||(es=c,c=Al(Vu,"onSelect"),0<c.length&&(a=new Bo("onSelect","select",null,a,s),n.push({event:a,listeners:c}),a.target=Va)))}function Ki(n,a){var s={};return s[n.toLowerCase()]=a.toLowerCase(),s["Webkit"+n]="webkit"+a,s["Moz"+n]="moz"+a,s}var za={animationend:Ki("Animation","AnimationEnd"),animationiteration:Ki("Animation","AnimationIteration"),animationstart:Ki("Animation","AnimationStart"),transitionrun:Ki("Transition","TransitionRun"),transitionstart:Ki("Transition","TransitionStart"),transitioncancel:Ki("Transition","TransitionCancel"),transitionend:Ki("Transition","TransitionEnd")},Pu={},n2={};Yn&&(n2=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function Qi(n){if(Pu[n])return Pu[n];if(!za[n])return n;var a=za[n],s;for(s in a)if(a.hasOwnProperty(s)&&s in n2)return Pu[n]=a[s];return n}var i2=Qi("animationend"),a2=Qi("animationiteration"),r2=Qi("animationstart"),n7=Qi("transitionrun"),i7=Qi("transitionstart"),a7=Qi("transitioncancel"),s2=Qi("transitionend"),o2=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function wn(n,a){o2.set(n,a),Zi(a,[n])}var l2=new WeakMap;function rn(n,a){if(typeof n=="object"&&n!==null){var s=l2.get(n);return s!==void 0?s:(a={value:n,source:a,stack:T1(a)},l2.set(n,a),a)}return{value:n,source:a,stack:T1(a)}}var sn=[],Pa=0,Bu=0;function _o(){for(var n=Pa,a=Bu=Pa=0;a<n;){var s=sn[a];sn[a++]=null;var c=sn[a];sn[a++]=null;var f=sn[a];sn[a++]=null;var g=sn[a];if(sn[a++]=null,c!==null&&f!==null){var w=c.pending;w===null?f.next=f:(f.next=w.next,w.next=f),c.pending=f}g!==0&&c2(s,f,g)}}function Io(n,a,s,c){sn[Pa++]=n,sn[Pa++]=a,sn[Pa++]=s,sn[Pa++]=c,Bu|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function $u(n,a,s,c){return Io(n,a,s,c),Go(n)}function Na(n,a){return Io(n,null,null,a),Go(n)}function c2(n,a,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var f=!1,g=n.return;g!==null;)g.childLanes|=s,c=g.alternate,c!==null&&(c.childLanes|=s),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(f=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,f&&a!==null&&(f=31-_t(s),n=g.hiddenUpdates,c=n[f],c===null?n[f]=[a]:c.push(a),a.lane=s|536870912),g):null}function Go(n){if(50<Es)throw Es=0,Yd=null,Error(r(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var Ba={};function r7(n,a,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(n,a,s,c){return new r7(n,a,s,c)}function Uu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Fn(n,a){var s=n.alternate;return s===null?(s=Gt(n.tag,a,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=a,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,a=n.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function u2(n,a){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,a=s.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function qo(n,a,s,c,f,g){var w=0;if(c=n,typeof n=="function")Uu(n)&&(w=1);else if(typeof n=="string")w=o9(n,s,ce.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case $:return n=Gt(31,s,a,f),n.elementType=$,n.lanes=g,n;case b:return Ji(s.children,f,g,a);case A:w=8,f|=24;break;case O:return n=Gt(12,s,a,f|2),n.elementType=O,n.lanes=g,n;case L:return n=Gt(13,s,a,f),n.elementType=L,n.lanes=g,n;case P:return n=Gt(19,s,a,f),n.elementType=P,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:case T:w=10;break e;case E:w=9;break e;case k:w=11;break e;case V:w=14;break e;case U:w=16,c=null;break e}w=29,s=Error(r(130,n===null?"null":typeof n,"")),c=null}return a=Gt(w,s,a,f),a.elementType=n,a.type=c,a.lanes=g,a}function Ji(n,a,s,c){return n=Gt(7,n,c,a),n.lanes=s,n}function _u(n,a,s){return n=Gt(6,n,null,a),n.lanes=s,n}function Iu(n,a,s){return a=Gt(4,n.children!==null?n.children:[],n.key,a),a.lanes=s,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var $a=[],Ua=0,Yo=null,Fo=0,on=[],ln=0,ea=null,Xn=1,Zn="";function ta(n,a){$a[Ua++]=Fo,$a[Ua++]=Yo,Yo=n,Fo=a}function d2(n,a,s){on[ln++]=Xn,on[ln++]=Zn,on[ln++]=ea,ea=n;var c=Xn;n=Zn;var f=32-_t(c)-1;c&=~(1<<f),s+=1;var g=32-_t(a)+f;if(30<g){var w=f-f%5;g=(c&(1<<w)-1).toString(32),c>>=w,f-=w,Xn=1<<32-_t(a)+f|s<<f|c,Zn=g+n}else Xn=1<<g|s<<f|c,Zn=n}function Gu(n){n.return!==null&&(ta(n,1),d2(n,1,0))}function qu(n){for(;n===Yo;)Yo=$a[--Ua],$a[Ua]=null,Fo=$a[--Ua],$a[Ua]=null;for(;n===ea;)ea=on[--ln],on[ln]=null,Zn=on[--ln],on[ln]=null,Xn=on[--ln],on[ln]=null}var Lt=null,Fe=null,Ee=!1,na=null,Ln=!1,Yu=Error(r(519));function ia(n){var a=Error(r(418,""));throw is(rn(a,n)),Yu}function f2(n){var a=n.stateNode,s=n.type,c=n.memoizedProps;switch(a[St]=n,a[kt]=c,s){case"dialog":Se("cancel",a),Se("close",a);break;case"iframe":case"object":case"embed":Se("load",a);break;case"video":case"audio":for(s=0;s<Ms.length;s++)Se(Ms[s],a);break;case"source":Se("error",a);break;case"img":case"image":case"link":Se("error",a),Se("load",a);break;case"details":Se("toggle",a);break;case"input":Se("invalid",a),M1(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Do(a);break;case"select":Se("invalid",a);break;case"textarea":Se("invalid",a),L1(a,c.value,c.defaultValue,c.children),Do(a)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||c.suppressHydrationWarning===!0||Lg(a.textContent,s)?(c.popover!=null&&(Se("beforetoggle",a),Se("toggle",a)),c.onScroll!=null&&Se("scroll",a),c.onScrollEnd!=null&&Se("scrollend",a),c.onClick!=null&&(a.onclick=Ml),a=!0):a=!1,a||ia(n)}function p2(n){for(Lt=n.return;Lt;)switch(Lt.tag){case 5:case 13:Ln=!1;return;case 27:case 3:Ln=!0;return;default:Lt=Lt.return}}function ts(n){if(n!==Lt)return!1;if(!Ee)return p2(n),Ee=!0,!1;var a=n.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||cf(n.type,n.memoizedProps)),s=!s),s&&Fe&&ia(n),p2(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(a===0){Fe=Sn(n.nextSibling);break e}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;n=n.nextSibling}Fe=null}}else a===27?(a=Fe,ki(n.type)?(n=pf,pf=null,Fe=n):Fe=a):Fe=Lt?Sn(n.stateNode.nextSibling):null;return!0}function ns(){Fe=Lt=null,Ee=!1}function h2(){var n=na;return n!==null&&(zt===null?zt=n:zt.push.apply(zt,n),na=null),n}function is(n){na===null?na=[n]:na.push(n)}var Fu=X(null),aa=null,Wn=null;function xi(n,a,s){ae(Fu,a._currentValue),a._currentValue=s}function Kn(n){n._currentValue=Fu.current,ne(Fu)}function Xu(n,a,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===s)break;n=n.return}}function Zu(n,a,s,c){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var g=f.dependencies;if(g!==null){var w=f.child;g=g.firstContext;e:for(;g!==null;){var M=g;g=f;for(var H=0;H<a.length;H++)if(M.context===a[H]){g.lanes|=s,M=g.alternate,M!==null&&(M.lanes|=s),Xu(g.return,s,n),c||(w=null);break e}g=M.next}}else if(f.tag===18){if(w=f.return,w===null)throw Error(r(341));w.lanes|=s,g=w.alternate,g!==null&&(g.lanes|=s),Xu(w,s,n),w=null}else w=f.child;if(w!==null)w.return=f;else for(w=f;w!==null;){if(w===n){w=null;break}if(f=w.sibling,f!==null){f.return=w.return,w=f;break}w=w.return}f=w}}function as(n,a,s,c){n=null;for(var f=a,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var w=f.alternate;if(w===null)throw Error(r(387));if(w=w.memoizedProps,w!==null){var M=f.type;It(f.pendingProps.value,w.value)||(n!==null?n.push(M):n=[M])}}else if(f===ot.current){if(w=f.alternate,w===null)throw Error(r(387));w.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Ds):n=[Ds])}f=f.return}n!==null&&Zu(a,n,s,c),a.flags|=262144}function Xo(n){for(n=n.firstContext;n!==null;){if(!It(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ra(n){aa=n,Wn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Ct(n){return m2(aa,n)}function Zo(n,a){return aa===null&&ra(n),m2(n,a)}function m2(n,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},Wn===null){if(n===null)throw Error(r(308));Wn=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Wn=Wn.next=a;return s}var s7=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(s){return s()})}},o7=t.unstable_scheduleCallback,l7=t.unstable_NormalPriority,at={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new s7,data:new Map,refCount:0}}function rs(n){n.refCount--,n.refCount===0&&o7(l7,function(){n.controller.abort()})}var ss=null,Ku=0,_a=0,Ia=null;function c7(n,a){if(ss===null){var s=ss=[];Ku=0,_a=Jd(),Ia={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Ku++,a.then(g2,g2),a}function g2(){if(--Ku===0&&ss!==null){Ia!==null&&(Ia.status="fulfilled");var n=ss;ss=null,_a=0,Ia=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function u7(n,a){var s=[],c={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var f=0;f<s.length;f++)(0,s[f])(a)},function(f){for(c.status="rejected",c.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),c}var x2=B.S;B.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&c7(n,a),x2!==null&&x2(n,a)};var sa=X(null);function Qu(){var n=sa.current;return n!==null?n:Be.pooledCache}function Wo(n,a){a===null?ae(sa,sa.current):ae(sa,a.pool)}function y2(){var n=Qu();return n===null?null:{parent:at._currentValue,pool:n}}var os=Error(r(460)),v2=Error(r(474)),Ko=Error(r(542)),Ju={then:function(){}};function w2(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Qo(){}function b2(n,a,s){switch(s=n[s],s===void 0?n.push(a):s!==a&&(a.then(Qo,Qo),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,C2(n),n;default:if(typeof a.status=="string")a.then(Qo,Qo);else{if(n=Be,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=c}},function(c){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,C2(n),n}throw ls=a,os}}var ls=null;function S2(){if(ls===null)throw Error(r(459));var n=ls;return ls=null,n}function C2(n){if(n===os||n===Ko)throw Error(r(483))}var yi=!1;function ed(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function td(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function vi(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function wi(n,a,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(De&2)!==0){var f=c.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a,a=Go(n),c2(n,null,s),a}return Io(n,c,a,s),Go(n)}function cs(n,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,g1(n,s)}}function nd(n,a){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var f=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var w={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};g===null?f=g=w:g=g.next=w,s=s.next}while(s!==null);g===null?f=g=a:g=g.next=a}else f=g=a;s={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=a:n.next=a,s.lastBaseUpdate=a}var id=!1;function us(){if(id){var n=Ia;if(n!==null)throw n}}function ds(n,a,s,c){id=!1;var f=n.updateQueue;yi=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,M=f.shared.pending;if(M!==null){f.shared.pending=null;var H=M,I=H.next;H.next=null,w===null?g=I:w.next=I,w=H;var Z=n.alternate;Z!==null&&(Z=Z.updateQueue,M=Z.lastBaseUpdate,M!==w&&(M===null?Z.firstBaseUpdate=I:M.next=I,Z.lastBaseUpdate=H))}if(g!==null){var J=f.baseState;w=0,Z=I=H=null,M=g;do{var G=M.lane&-536870913,q=G!==M.lane;if(q?(Ce&G)===G:(c&G)===G){G!==0&&G===_a&&(id=!0),Z!==null&&(Z=Z.next={lane:0,tag:M.tag,payload:M.payload,callback:null,next:null});e:{var pe=n,ue=M;G=a;var Pe=s;switch(ue.tag){case 1:if(pe=ue.payload,typeof pe=="function"){J=pe.call(Pe,J,G);break e}J=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=ue.payload,G=typeof pe=="function"?pe.call(Pe,J,G):pe,G==null)break e;J=m({},J,G);break e;case 2:yi=!0}}G=M.callback,G!==null&&(n.flags|=64,q&&(n.flags|=8192),q=f.callbacks,q===null?f.callbacks=[G]:q.push(G))}else q={lane:G,tag:M.tag,payload:M.payload,callback:M.callback,next:null},Z===null?(I=Z=q,H=J):Z=Z.next=q,w|=G;if(M=M.next,M===null){if(M=f.shared.pending,M===null)break;q=M,M=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);Z===null&&(H=J),f.baseState=H,f.firstBaseUpdate=I,f.lastBaseUpdate=Z,g===null&&(f.shared.lanes=0),ji|=w,n.lanes=w,n.memoizedState=J}}function T2(n,a){if(typeof n!="function")throw Error(r(191,n));n.call(a)}function E2(n,a){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)T2(s[n],a)}var Ga=X(null),Jo=X(0);function A2(n,a){n=ai,ae(Jo,n),ae(Ga,a),ai=n|a.baseLanes}function ad(){ae(Jo,ai),ae(Ga,Ga.current)}function rd(){ai=Jo.current,ne(Ga),ne(Jo)}var bi=0,ye=null,Ve=null,Je=null,el=!1,qa=!1,oa=!1,tl=0,fs=0,Ya=null,d7=0;function We(){throw Error(r(321))}function sd(n,a){if(a===null)return!1;for(var s=0;s<a.length&&s<n.length;s++)if(!It(n[s],a[s]))return!1;return!0}function od(n,a,s,c,f,g){return bi=g,ye=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,B.H=n===null||n.memoizedState===null?cm:um,oa=!1,g=s(c,f),oa=!1,qa&&(g=j2(a,s,c,f)),M2(n),g}function M2(n){B.H=ol;var a=Ve!==null&&Ve.next!==null;if(bi=0,Je=Ve=ye=null,el=!1,fs=0,Ya=null,a)throw Error(r(300));n===null||ct||(n=n.dependencies,n!==null&&Xo(n)&&(ct=!0))}function j2(n,a,s,c){ye=n;var f=0;do{if(qa&&(Ya=null),fs=0,qa=!1,25<=f)throw Error(r(301));if(f+=1,Je=Ve=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}B.H=y7,g=a(s,c)}while(qa);return g}function f7(){var n=B.H,a=n.useState()[0];return a=typeof a.then=="function"?ps(a):a,n=n.useState()[0],(Ve!==null?Ve.memoizedState:null)!==n&&(ye.flags|=1024),a}function ld(){var n=tl!==0;return tl=0,n}function cd(n,a,s){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~s}function ud(n){if(el){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}el=!1}bi=0,Je=Ve=ye=null,qa=!1,fs=tl=0,Ya=null}function Ht(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ye.memoizedState=Je=n:Je=Je.next=n,Je}function et(){if(Ve===null){var n=ye.alternate;n=n!==null?n.memoizedState:null}else n=Ve.next;var a=Je===null?ye.memoizedState:Je.next;if(a!==null)Je=a,Ve=n;else{if(n===null)throw ye.alternate===null?Error(r(467)):Error(r(310));Ve=n,n={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Je===null?ye.memoizedState=Je=n:Je=Je.next=n}return Je}function dd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ps(n){var a=fs;return fs+=1,Ya===null&&(Ya=[]),n=b2(Ya,n,a),a=ye,(Je===null?a.memoizedState:Je.next)===null&&(a=a.alternate,B.H=a===null||a.memoizedState===null?cm:um),n}function nl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ps(n);if(n.$$typeof===T)return Ct(n)}throw Error(r(438,String(n)))}function fd(n){var a=null,s=ye.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var c=ye.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=dd(),ye.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(n),c=0;c<n;c++)s[c]=Y;return a.index++,s}function Qn(n,a){return typeof a=="function"?a(n):a}function il(n){var a=et();return pd(a,Ve,n)}function pd(n,a,s){var c=n.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=s;var f=n.baseQueue,g=c.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}a.baseQueue=f=g,c.pending=null}if(g=n.baseState,f===null)n.memoizedState=g;else{a=f.next;var M=w=null,H=null,I=a,Z=!1;do{var J=I.lane&-536870913;if(J!==I.lane?(Ce&J)===J:(bi&J)===J){var G=I.revertLane;if(G===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),J===_a&&(Z=!0);else if((bi&G)===G){I=I.next,G===_a&&(Z=!0);continue}else J={lane:0,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},H===null?(M=H=J,w=g):H=H.next=J,ye.lanes|=G,ji|=G;J=I.action,oa&&s(g,J),g=I.hasEagerState?I.eagerState:s(g,J)}else G={lane:J,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},H===null?(M=H=G,w=g):H=H.next=G,ye.lanes|=J,ji|=J;I=I.next}while(I!==null&&I!==a);if(H===null?w=g:H.next=M,!It(g,n.memoizedState)&&(ct=!0,Z&&(s=Ia,s!==null)))throw s;n.memoizedState=g,n.baseState=w,n.baseQueue=H,c.lastRenderedState=g}return f===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function hd(n){var a=et(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var c=s.dispatch,f=s.pending,g=a.memoizedState;if(f!==null){s.pending=null;var w=f=f.next;do g=n(g,w.action),w=w.next;while(w!==f);It(g,a.memoizedState)||(ct=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),s.lastRenderedState=g}return[g,c]}function L2(n,a,s){var c=ye,f=et(),g=Ee;if(g){if(s===void 0)throw Error(r(407));s=s()}else s=a();var w=!It((Ve||f).memoizedState,s);w&&(f.memoizedState=s,ct=!0),f=f.queue;var M=k2.bind(null,c,f,n);if(hs(2048,8,M,[n]),f.getSnapshot!==a||w||Je!==null&&Je.memoizedState.tag&1){if(c.flags|=2048,Fa(9,al(),R2.bind(null,c,f,s,a),null),Be===null)throw Error(r(349));g||(bi&124)!==0||O2(c,a,s)}return s}function O2(n,a,s){n.flags|=16384,n={getSnapshot:a,value:s},a=ye.updateQueue,a===null?(a=dd(),ye.updateQueue=a,a.stores=[n]):(s=a.stores,s===null?a.stores=[n]:s.push(n))}function R2(n,a,s,c){a.value=s,a.getSnapshot=c,D2(a)&&H2(n)}function k2(n,a,s){return s(function(){D2(a)&&H2(n)})}function D2(n){var a=n.getSnapshot;n=n.value;try{var s=a();return!It(n,s)}catch{return!0}}function H2(n){var a=Na(n,2);a!==null&&Zt(a,n,2)}function md(n){var a=Ht();if(typeof n=="function"){var s=n;if(n=s(),oa){hi(!0);try{s()}finally{hi(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:n},a}function V2(n,a,s,c){return n.baseState=s,pd(n,Ve,typeof c=="function"?c:Qn)}function p7(n,a,s,c,f){if(sl(n))throw Error(r(485));if(n=a.action,n!==null){var g={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){g.listeners.push(w)}};B.T!==null?s(!0):g.isTransition=!1,c(g),s=a.pending,s===null?(g.next=a.pending=g,z2(a,g)):(g.next=s.next,a.pending=s.next=g)}}function z2(n,a){var s=a.action,c=a.payload,f=n.state;if(a.isTransition){var g=B.T,w={};B.T=w;try{var M=s(f,c),H=B.S;H!==null&&H(w,M),P2(n,a,M)}catch(I){gd(n,a,I)}finally{B.T=g}}else try{g=s(f,c),P2(n,a,g)}catch(I){gd(n,a,I)}}function P2(n,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){N2(n,a,c)},function(c){return gd(n,a,c)}):N2(n,a,s)}function N2(n,a,s){a.status="fulfilled",a.value=s,B2(a),n.state=s,a=n.pending,a!==null&&(s=a.next,s===a?n.pending=null:(s=s.next,a.next=s,z2(n,s)))}function gd(n,a,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=s,B2(a),a=a.next;while(a!==c)}n.action=null}function B2(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function $2(n,a){return a}function U2(n,a){if(Ee){var s=Be.formState;if(s!==null){e:{var c=ye;if(Ee){if(Fe){t:{for(var f=Fe,g=Ln;f.nodeType!==8;){if(!g){f=null;break t}if(f=Sn(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){Fe=Sn(f.nextSibling),c=f.data==="F!";break e}}ia(c)}c=!1}c&&(a=s[0])}}return s=Ht(),s.memoizedState=s.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$2,lastRenderedState:a},s.queue=c,s=sm.bind(null,ye,c),c.dispatch=s,c=md(!1),g=bd.bind(null,ye,!1,c.queue),c=Ht(),f={state:a,dispatch:null,action:n,pending:null},c.queue=f,s=p7.bind(null,ye,f,g,s),f.dispatch=s,c.memoizedState=n,[a,s,!1]}function _2(n){var a=et();return I2(a,Ve,n)}function I2(n,a,s){if(a=pd(n,a,$2)[0],n=il(Qn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=ps(a)}catch(w){throw w===os?Ko:w}else c=a;a=et();var f=a.queue,g=f.dispatch;return s!==a.memoizedState&&(ye.flags|=2048,Fa(9,al(),h7.bind(null,f,s),null)),[c,g,n]}function h7(n,a){n.action=a}function G2(n){var a=et(),s=Ve;if(s!==null)return I2(a,s,n);et(),a=a.memoizedState,s=et();var c=s.queue.dispatch;return s.memoizedState=n,[a,c,!1]}function Fa(n,a,s,c){return n={tag:n,create:s,deps:c,inst:a,next:null},a=ye.updateQueue,a===null&&(a=dd(),ye.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,a.lastEffect=n),n}function al(){return{destroy:void 0,resource:void 0}}function q2(){return et().memoizedState}function rl(n,a,s,c){var f=Ht();c=c===void 0?null:c,ye.flags|=n,f.memoizedState=Fa(1|a,al(),s,c)}function hs(n,a,s,c){var f=et();c=c===void 0?null:c;var g=f.memoizedState.inst;Ve!==null&&c!==null&&sd(c,Ve.memoizedState.deps)?f.memoizedState=Fa(a,g,s,c):(ye.flags|=n,f.memoizedState=Fa(1|a,g,s,c))}function Y2(n,a){rl(8390656,8,n,a)}function F2(n,a){hs(2048,8,n,a)}function X2(n,a){return hs(4,2,n,a)}function Z2(n,a){return hs(4,4,n,a)}function W2(n,a){if(typeof a=="function"){n=n();var s=a(n);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function K2(n,a,s){s=s!=null?s.concat([n]):null,hs(4,4,W2.bind(null,a,n),s)}function xd(){}function Q2(n,a){var s=et();a=a===void 0?null:a;var c=s.memoizedState;return a!==null&&sd(a,c[1])?c[0]:(s.memoizedState=[n,a],n)}function J2(n,a){var s=et();a=a===void 0?null:a;var c=s.memoizedState;if(a!==null&&sd(a,c[1]))return c[0];if(c=n(),oa){hi(!0);try{n()}finally{hi(!1)}}return s.memoizedState=[c,a],c}function yd(n,a,s){return s===void 0||(bi&1073741824)!==0?n.memoizedState=a:(n.memoizedState=s,n=ng(),ye.lanes|=n,ji|=n,s)}function em(n,a,s,c){return It(s,a)?s:Ga.current!==null?(n=yd(n,s,c),It(n,a)||(ct=!0),n):(bi&42)===0?(ct=!0,n.memoizedState=s):(n=ng(),ye.lanes|=n,ji|=n,a)}function tm(n,a,s,c,f){var g=W.p;W.p=g!==0&&8>g?g:8;var w=B.T,M={};B.T=M,bd(n,!1,a,s);try{var H=f(),I=B.S;if(I!==null&&I(M,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var Z=u7(H,c);ms(n,a,Z,Xt(n))}else ms(n,a,c,Xt(n))}catch(J){ms(n,a,{then:function(){},status:"rejected",reason:J},Xt())}finally{W.p=g,B.T=w}}function m7(){}function vd(n,a,s,c){if(n.tag!==5)throw Error(r(476));var f=nm(n).queue;tm(n,f,a,K,s===null?m7:function(){return im(n),s(c)})}function nm(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:K},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:s},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function im(n){var a=nm(n).next.queue;ms(n,a,{},Xt())}function wd(){return Ct(Ds)}function am(){return et().memoizedState}function rm(){return et().memoizedState}function g7(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var s=Xt();n=vi(s);var c=wi(a,n,s);c!==null&&(Zt(c,a,s),cs(c,a,s)),a={cache:Wu()},n.payload=a;return}a=a.return}}function x7(n,a,s){var c=Xt();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},sl(n)?om(a,s):(s=$u(n,a,s,c),s!==null&&(Zt(s,n,c),lm(s,a,c)))}function sm(n,a,s){var c=Xt();ms(n,a,s,c)}function ms(n,a,s,c){var f={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(sl(n))om(a,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var w=a.lastRenderedState,M=g(w,s);if(f.hasEagerState=!0,f.eagerState=M,It(M,w))return Io(n,a,f,0),Be===null&&_o(),!1}catch{}finally{}if(s=$u(n,a,f,c),s!==null)return Zt(s,n,c),lm(s,a,c),!0}return!1}function bd(n,a,s,c){if(c={lane:2,revertLane:Jd(),action:c,hasEagerState:!1,eagerState:null,next:null},sl(n)){if(a)throw Error(r(479))}else a=$u(n,s,c,2),a!==null&&Zt(a,n,2)}function sl(n){var a=n.alternate;return n===ye||a!==null&&a===ye}function om(n,a){qa=el=!0;var s=n.pending;s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a}function lm(n,a,s){if((s&4194048)!==0){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,g1(n,s)}}var ol={readContext:Ct,use:nl,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We},cm={readContext:Ct,use:nl,useCallback:function(n,a){return Ht().memoizedState=[n,a===void 0?null:a],n},useContext:Ct,useEffect:Y2,useImperativeHandle:function(n,a,s){s=s!=null?s.concat([n]):null,rl(4194308,4,W2.bind(null,a,n),s)},useLayoutEffect:function(n,a){return rl(4194308,4,n,a)},useInsertionEffect:function(n,a){rl(4,2,n,a)},useMemo:function(n,a){var s=Ht();a=a===void 0?null:a;var c=n();if(oa){hi(!0);try{n()}finally{hi(!1)}}return s.memoizedState=[c,a],c},useReducer:function(n,a,s){var c=Ht();if(s!==void 0){var f=s(a);if(oa){hi(!0);try{s(a)}finally{hi(!1)}}}else f=a;return c.memoizedState=c.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},c.queue=n,n=n.dispatch=x7.bind(null,ye,n),[c.memoizedState,n]},useRef:function(n){var a=Ht();return n={current:n},a.memoizedState=n},useState:function(n){n=md(n);var a=n.queue,s=sm.bind(null,ye,a);return a.dispatch=s,[n.memoizedState,s]},useDebugValue:xd,useDeferredValue:function(n,a){var s=Ht();return yd(s,n,a)},useTransition:function(){var n=md(!1);return n=tm.bind(null,ye,n.queue,!0,!1),Ht().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,s){var c=ye,f=Ht();if(Ee){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),Be===null)throw Error(r(349));(Ce&124)!==0||O2(c,a,s)}f.memoizedState=s;var g={value:s,getSnapshot:a};return f.queue=g,Y2(k2.bind(null,c,g,n),[n]),c.flags|=2048,Fa(9,al(),R2.bind(null,c,g,s,a),null),s},useId:function(){var n=Ht(),a=Be.identifierPrefix;if(Ee){var s=Zn,c=Xn;s=(c&~(1<<32-_t(c)-1)).toString(32)+s,a="«"+a+"R"+s,s=tl++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=d7++,a="«"+a+"r"+s.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:wd,useFormState:U2,useActionState:U2,useOptimistic:function(n){var a=Ht();a.memoizedState=a.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=bd.bind(null,ye,!0,s),s.dispatch=a,[n,a]},useMemoCache:fd,useCacheRefresh:function(){return Ht().memoizedState=g7.bind(null,ye)}},um={readContext:Ct,use:nl,useCallback:Q2,useContext:Ct,useEffect:F2,useImperativeHandle:K2,useInsertionEffect:X2,useLayoutEffect:Z2,useMemo:J2,useReducer:il,useRef:q2,useState:function(){return il(Qn)},useDebugValue:xd,useDeferredValue:function(n,a){var s=et();return em(s,Ve.memoizedState,n,a)},useTransition:function(){var n=il(Qn)[0],a=et().memoizedState;return[typeof n=="boolean"?n:ps(n),a]},useSyncExternalStore:L2,useId:am,useHostTransitionStatus:wd,useFormState:_2,useActionState:_2,useOptimistic:function(n,a){var s=et();return V2(s,Ve,n,a)},useMemoCache:fd,useCacheRefresh:rm},y7={readContext:Ct,use:nl,useCallback:Q2,useContext:Ct,useEffect:F2,useImperativeHandle:K2,useInsertionEffect:X2,useLayoutEffect:Z2,useMemo:J2,useReducer:hd,useRef:q2,useState:function(){return hd(Qn)},useDebugValue:xd,useDeferredValue:function(n,a){var s=et();return Ve===null?yd(s,n,a):em(s,Ve.memoizedState,n,a)},useTransition:function(){var n=hd(Qn)[0],a=et().memoizedState;return[typeof n=="boolean"?n:ps(n),a]},useSyncExternalStore:L2,useId:am,useHostTransitionStatus:wd,useFormState:G2,useActionState:G2,useOptimistic:function(n,a){var s=et();return Ve!==null?V2(s,Ve,n,a):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:fd,useCacheRefresh:rm},Xa=null,gs=0;function ll(n){var a=gs;return gs+=1,Xa===null&&(Xa=[]),b2(Xa,n,a)}function xs(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function cl(n,a){throw a.$$typeof===y?Error(r(525)):(n=Object.prototype.toString.call(a),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function dm(n){var a=n._init;return a(n._payload)}function fm(n){function a(N,z){if(n){var _=N.deletions;_===null?(N.deletions=[z],N.flags|=16):_.push(z)}}function s(N,z){if(!n)return null;for(;z!==null;)a(N,z),z=z.sibling;return null}function c(N){for(var z=new Map;N!==null;)N.key!==null?z.set(N.key,N):z.set(N.index,N),N=N.sibling;return z}function f(N,z){return N=Fn(N,z),N.index=0,N.sibling=null,N}function g(N,z,_){return N.index=_,n?(_=N.alternate,_!==null?(_=_.index,_<z?(N.flags|=67108866,z):_):(N.flags|=67108866,z)):(N.flags|=1048576,z)}function w(N){return n&&N.alternate===null&&(N.flags|=67108866),N}function M(N,z,_,Q){return z===null||z.tag!==6?(z=_u(_,N.mode,Q),z.return=N,z):(z=f(z,_),z.return=N,z)}function H(N,z,_,Q){var se=_.type;return se===b?Z(N,z,_.props.children,Q,_.key):z!==null&&(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===U&&dm(se)===z.type)?(z=f(z,_.props),xs(z,_),z.return=N,z):(z=qo(_.type,_.key,_.props,null,N.mode,Q),xs(z,_),z.return=N,z)}function I(N,z,_,Q){return z===null||z.tag!==4||z.stateNode.containerInfo!==_.containerInfo||z.stateNode.implementation!==_.implementation?(z=Iu(_,N.mode,Q),z.return=N,z):(z=f(z,_.children||[]),z.return=N,z)}function Z(N,z,_,Q,se){return z===null||z.tag!==7?(z=Ji(_,N.mode,Q,se),z.return=N,z):(z=f(z,_),z.return=N,z)}function J(N,z,_){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=_u(""+z,N.mode,_),z.return=N,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case v:return _=qo(z.type,z.key,z.props,null,N.mode,_),xs(_,z),_.return=N,_;case S:return z=Iu(z,N.mode,_),z.return=N,z;case U:var Q=z._init;return z=Q(z._payload),J(N,z,_)}if(re(z)||te(z))return z=Ji(z,N.mode,_,null),z.return=N,z;if(typeof z.then=="function")return J(N,ll(z),_);if(z.$$typeof===T)return J(N,Zo(N,z),_);cl(N,z)}return null}function G(N,z,_,Q){var se=z!==null?z.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return se!==null?null:M(N,z,""+_,Q);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case v:return _.key===se?H(N,z,_,Q):null;case S:return _.key===se?I(N,z,_,Q):null;case U:return se=_._init,_=se(_._payload),G(N,z,_,Q)}if(re(_)||te(_))return se!==null?null:Z(N,z,_,Q,null);if(typeof _.then=="function")return G(N,z,ll(_),Q);if(_.$$typeof===T)return G(N,z,Zo(N,_),Q);cl(N,_)}return null}function q(N,z,_,Q,se){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return N=N.get(_)||null,M(z,N,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return N=N.get(Q.key===null?_:Q.key)||null,H(z,N,Q,se);case S:return N=N.get(Q.key===null?_:Q.key)||null,I(z,N,Q,se);case U:var ve=Q._init;return Q=ve(Q._payload),q(N,z,_,Q,se)}if(re(Q)||te(Q))return N=N.get(_)||null,Z(z,N,Q,se,null);if(typeof Q.then=="function")return q(N,z,_,ll(Q),se);if(Q.$$typeof===T)return q(N,z,_,Zo(z,Q),se);cl(z,Q)}return null}function pe(N,z,_,Q){for(var se=null,ve=null,le=z,fe=z=0,dt=null;le!==null&&fe<_.length;fe++){le.index>fe?(dt=le,le=null):dt=le.sibling;var Te=G(N,le,_[fe],Q);if(Te===null){le===null&&(le=dt);break}n&&le&&Te.alternate===null&&a(N,le),z=g(Te,z,fe),ve===null?se=Te:ve.sibling=Te,ve=Te,le=dt}if(fe===_.length)return s(N,le),Ee&&ta(N,fe),se;if(le===null){for(;fe<_.length;fe++)le=J(N,_[fe],Q),le!==null&&(z=g(le,z,fe),ve===null?se=le:ve.sibling=le,ve=le);return Ee&&ta(N,fe),se}for(le=c(le);fe<_.length;fe++)dt=q(le,N,fe,_[fe],Q),dt!==null&&(n&&dt.alternate!==null&&le.delete(dt.key===null?fe:dt.key),z=g(dt,z,fe),ve===null?se=dt:ve.sibling=dt,ve=dt);return n&&le.forEach(function(Pi){return a(N,Pi)}),Ee&&ta(N,fe),se}function ue(N,z,_,Q){if(_==null)throw Error(r(151));for(var se=null,ve=null,le=z,fe=z=0,dt=null,Te=_.next();le!==null&&!Te.done;fe++,Te=_.next()){le.index>fe?(dt=le,le=null):dt=le.sibling;var Pi=G(N,le,Te.value,Q);if(Pi===null){le===null&&(le=dt);break}n&&le&&Pi.alternate===null&&a(N,le),z=g(Pi,z,fe),ve===null?se=Pi:ve.sibling=Pi,ve=Pi,le=dt}if(Te.done)return s(N,le),Ee&&ta(N,fe),se;if(le===null){for(;!Te.done;fe++,Te=_.next())Te=J(N,Te.value,Q),Te!==null&&(z=g(Te,z,fe),ve===null?se=Te:ve.sibling=Te,ve=Te);return Ee&&ta(N,fe),se}for(le=c(le);!Te.done;fe++,Te=_.next())Te=q(le,N,fe,Te.value,Q),Te!==null&&(n&&Te.alternate!==null&&le.delete(Te.key===null?fe:Te.key),z=g(Te,z,fe),ve===null?se=Te:ve.sibling=Te,ve=Te);return n&&le.forEach(function(v9){return a(N,v9)}),Ee&&ta(N,fe),se}function Pe(N,z,_,Q){if(typeof _=="object"&&_!==null&&_.type===b&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case v:e:{for(var se=_.key;z!==null;){if(z.key===se){if(se=_.type,se===b){if(z.tag===7){s(N,z.sibling),Q=f(z,_.props.children),Q.return=N,N=Q;break e}}else if(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===U&&dm(se)===z.type){s(N,z.sibling),Q=f(z,_.props),xs(Q,_),Q.return=N,N=Q;break e}s(N,z);break}else a(N,z);z=z.sibling}_.type===b?(Q=Ji(_.props.children,N.mode,Q,_.key),Q.return=N,N=Q):(Q=qo(_.type,_.key,_.props,null,N.mode,Q),xs(Q,_),Q.return=N,N=Q)}return w(N);case S:e:{for(se=_.key;z!==null;){if(z.key===se)if(z.tag===4&&z.stateNode.containerInfo===_.containerInfo&&z.stateNode.implementation===_.implementation){s(N,z.sibling),Q=f(z,_.children||[]),Q.return=N,N=Q;break e}else{s(N,z);break}else a(N,z);z=z.sibling}Q=Iu(_,N.mode,Q),Q.return=N,N=Q}return w(N);case U:return se=_._init,_=se(_._payload),Pe(N,z,_,Q)}if(re(_))return pe(N,z,_,Q);if(te(_)){if(se=te(_),typeof se!="function")throw Error(r(150));return _=se.call(_),ue(N,z,_,Q)}if(typeof _.then=="function")return Pe(N,z,ll(_),Q);if(_.$$typeof===T)return Pe(N,z,Zo(N,_),Q);cl(N,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,z!==null&&z.tag===6?(s(N,z.sibling),Q=f(z,_),Q.return=N,N=Q):(s(N,z),Q=_u(_,N.mode,Q),Q.return=N,N=Q),w(N)):s(N,z)}return function(N,z,_,Q){try{gs=0;var se=Pe(N,z,_,Q);return Xa=null,se}catch(le){if(le===os||le===Ko)throw le;var ve=Gt(29,le,null,N.mode);return ve.lanes=Q,ve.return=N,ve}finally{}}}var Za=fm(!0),pm=fm(!1),cn=X(null),On=null;function Si(n){var a=n.alternate;ae(rt,rt.current&1),ae(cn,n),On===null&&(a===null||Ga.current!==null||a.memoizedState!==null)&&(On=n)}function hm(n){if(n.tag===22){if(ae(rt,rt.current),ae(cn,n),On===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(On=n)}}else Ci()}function Ci(){ae(rt,rt.current),ae(cn,cn.current)}function Jn(n){ne(cn),On===n&&(On=null),ne(rt)}var rt=X(0);function ul(n){for(var a=n;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||ff(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Sd(n,a,s,c){a=n.memoizedState,s=s(c,a),s=s==null?a:m({},a,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Cd={enqueueSetState:function(n,a,s){n=n._reactInternals;var c=Xt(),f=vi(c);f.payload=a,s!=null&&(f.callback=s),a=wi(n,f,c),a!==null&&(Zt(a,n,c),cs(a,n,c))},enqueueReplaceState:function(n,a,s){n=n._reactInternals;var c=Xt(),f=vi(c);f.tag=1,f.payload=a,s!=null&&(f.callback=s),a=wi(n,f,c),a!==null&&(Zt(a,n,c),cs(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var s=Xt(),c=vi(s);c.tag=2,a!=null&&(c.callback=a),a=wi(n,c,s),a!==null&&(Zt(a,n,s),cs(a,n,s))}};function mm(n,a,s,c,f,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):a.prototype&&a.prototype.isPureReactComponent?!Jr(s,c)||!Jr(f,g):!0}function gm(n,a,s,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,c),a.state!==n&&Cd.enqueueReplaceState(a,a.state,null)}function la(n,a){var s=a;if("ref"in a){s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}if(n=n.defaultProps){s===a&&(s=m({},s));for(var f in n)s[f]===void 0&&(s[f]=n[f])}return s}var dl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function xm(n){dl(n)}function ym(n){console.error(n)}function vm(n){dl(n)}function fl(n,a){try{var s=n.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function wm(n,a,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Td(n,a,s){return s=vi(s),s.tag=3,s.payload={element:null},s.callback=function(){fl(n,a)},s}function bm(n){return n=vi(n),n.tag=3,n}function Sm(n,a,s,c){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;n.payload=function(){return f(g)},n.callback=function(){wm(a,s,c)}}var w=s.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){wm(a,s,c),typeof f!="function"&&(Li===null?Li=new Set([this]):Li.add(this));var M=c.stack;this.componentDidCatch(c.value,{componentStack:M!==null?M:""})})}function v7(n,a,s,c,f){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=s.alternate,a!==null&&as(a,s,f,!0),s=cn.current,s!==null){switch(s.tag){case 13:return On===null?Xd():s.alternate===null&&Xe===0&&(Xe=3),s.flags&=-257,s.flags|=65536,s.lanes=f,c===Ju?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([c]):a.add(c),Wd(n,c,f)),!1;case 22:return s.flags|=65536,c===Ju?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([c]):s.add(c)),Wd(n,c,f)),!1}throw Error(r(435,s.tag))}return Wd(n,c,f),Xd(),!1}if(Ee)return a=cn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,c!==Yu&&(n=Error(r(422),{cause:c}),is(rn(n,s)))):(c!==Yu&&(a=Error(r(423),{cause:c}),is(rn(a,s))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,c=rn(c,s),f=Td(n.stateNode,c,f),nd(n,f),Xe!==4&&(Xe=2)),!1;var g=Error(r(520),{cause:c});if(g=rn(g,s),Ts===null?Ts=[g]:Ts.push(g),Xe!==4&&(Xe=2),a===null)return!0;c=rn(c,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,n=f&-f,s.lanes|=n,n=Td(s.stateNode,c,n),nd(s,n),!1;case 1:if(a=s.type,g=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Li===null||!Li.has(g))))return s.flags|=65536,f&=-f,s.lanes|=f,f=bm(f),Sm(f,n,s,c),nd(s,f),!1}s=s.return}while(s!==null);return!1}var Cm=Error(r(461)),ct=!1;function mt(n,a,s,c){a.child=n===null?pm(a,null,s,c):Za(a,n.child,s,c)}function Tm(n,a,s,c,f){s=s.render;var g=a.ref;if("ref"in c){var w={};for(var M in c)M!=="ref"&&(w[M]=c[M])}else w=c;return ra(a),c=od(n,a,s,w,g,f),M=ld(),n!==null&&!ct?(cd(n,a,f),ei(n,a,f)):(Ee&&M&&Gu(a),a.flags|=1,mt(n,a,c,f),a.child)}function Em(n,a,s,c,f){if(n===null){var g=s.type;return typeof g=="function"&&!Uu(g)&&g.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=g,Am(n,a,g,c,f)):(n=qo(s.type,null,c,a,a.mode,f),n.ref=a.ref,n.return=a,a.child=n)}if(g=n.child,!kd(n,f)){var w=g.memoizedProps;if(s=s.compare,s=s!==null?s:Jr,s(w,c)&&n.ref===a.ref)return ei(n,a,f)}return a.flags|=1,n=Fn(g,c),n.ref=a.ref,n.return=a,a.child=n}function Am(n,a,s,c,f){if(n!==null){var g=n.memoizedProps;if(Jr(g,c)&&n.ref===a.ref)if(ct=!1,a.pendingProps=c=g,kd(n,f))(n.flags&131072)!==0&&(ct=!0);else return a.lanes=n.lanes,ei(n,a,f)}return Ed(n,a,s,c,f)}function Mm(n,a,s){var c=a.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((a.flags&128)!==0){if(c=g!==null?g.baseLanes|s:s,n!==null){for(f=a.child=n.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;a.childLanes=g&~c}else a.childLanes=0,a.child=null;return jm(n,a,c,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Wo(a,g!==null?g.cachePool:null),g!==null?A2(a,g):ad(),hm(a);else return a.lanes=a.childLanes=536870912,jm(n,a,g!==null?g.baseLanes|s:s,s)}else g!==null?(Wo(a,g.cachePool),A2(a,g),Ci(),a.memoizedState=null):(n!==null&&Wo(a,null),ad(),Ci());return mt(n,a,f,s),a.child}function jm(n,a,s,c){var f=Qu();return f=f===null?null:{parent:at._currentValue,pool:f},a.memoizedState={baseLanes:s,cachePool:f},n!==null&&Wo(a,null),ad(),hm(a),n!==null&&as(n,a,c,!0),null}function pl(n,a){var s=a.ref;if(s===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(n===null||n.ref!==s)&&(a.flags|=4194816)}}function Ed(n,a,s,c,f){return ra(a),s=od(n,a,s,c,void 0,f),c=ld(),n!==null&&!ct?(cd(n,a,f),ei(n,a,f)):(Ee&&c&&Gu(a),a.flags|=1,mt(n,a,s,f),a.child)}function Lm(n,a,s,c,f,g){return ra(a),a.updateQueue=null,s=j2(a,c,s,f),M2(n),c=ld(),n!==null&&!ct?(cd(n,a,g),ei(n,a,g)):(Ee&&c&&Gu(a),a.flags|=1,mt(n,a,s,g),a.child)}function Om(n,a,s,c,f){if(ra(a),a.stateNode===null){var g=Ba,w=s.contextType;typeof w=="object"&&w!==null&&(g=Ct(w)),g=new s(c,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Cd,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=c,g.state=a.memoizedState,g.refs={},ed(a),w=s.contextType,g.context=typeof w=="object"&&w!==null?Ct(w):Ba,g.state=a.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(Sd(a,s,w,c),g.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(w=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),w!==g.state&&Cd.enqueueReplaceState(g,g.state,null),ds(a,c,g,f),us(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){g=a.stateNode;var M=a.memoizedProps,H=la(s,M);g.props=H;var I=g.context,Z=s.contextType;w=Ba,typeof Z=="object"&&Z!==null&&(w=Ct(Z));var J=s.getDerivedStateFromProps;Z=typeof J=="function"||typeof g.getSnapshotBeforeUpdate=="function",M=a.pendingProps!==M,Z||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(M||I!==w)&&gm(a,g,c,w),yi=!1;var G=a.memoizedState;g.state=G,ds(a,c,g,f),us(),I=a.memoizedState,M||G!==I||yi?(typeof J=="function"&&(Sd(a,s,J,c),I=a.memoizedState),(H=yi||mm(a,s,H,c,G,I,w))?(Z||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=I),g.props=c,g.state=I,g.context=w,c=H):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{g=a.stateNode,td(n,a),w=a.memoizedProps,Z=la(s,w),g.props=Z,J=a.pendingProps,G=g.context,I=s.contextType,H=Ba,typeof I=="object"&&I!==null&&(H=Ct(I)),M=s.getDerivedStateFromProps,(I=typeof M=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==J||G!==H)&&gm(a,g,c,H),yi=!1,G=a.memoizedState,g.state=G,ds(a,c,g,f),us();var q=a.memoizedState;w!==J||G!==q||yi||n!==null&&n.dependencies!==null&&Xo(n.dependencies)?(typeof M=="function"&&(Sd(a,s,M,c),q=a.memoizedState),(Z=yi||mm(a,s,Z,c,G,q,H)||n!==null&&n.dependencies!==null&&Xo(n.dependencies))?(I||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,q,H),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,q,H)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===n.memoizedProps&&G===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&G===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=q),g.props=c,g.state=q,g.context=H,c=Z):(typeof g.componentDidUpdate!="function"||w===n.memoizedProps&&G===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&G===n.memoizedState||(a.flags|=1024),c=!1)}return g=c,pl(n,a),c=(a.flags&128)!==0,g||c?(g=a.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,n!==null&&c?(a.child=Za(a,n.child,null,f),a.child=Za(a,null,s,f)):mt(n,a,s,f),a.memoizedState=g.state,n=a.child):n=ei(n,a,f),n}function Rm(n,a,s,c){return ns(),a.flags|=256,mt(n,a,s,c),a.child}var Ad={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Md(n){return{baseLanes:n,cachePool:y2()}}function jd(n,a,s){return n=n!==null?n.childLanes&~s:0,a&&(n|=un),n}function km(n,a,s){var c=a.pendingProps,f=!1,g=(a.flags&128)!==0,w;if((w=g)||(w=n!==null&&n.memoizedState===null?!1:(rt.current&2)!==0),w&&(f=!0,a.flags&=-129),w=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ee){if(f?Si(a):Ci(),Ee){var M=Fe,H;if(H=M){e:{for(H=M,M=Ln;H.nodeType!==8;){if(!M){M=null;break e}if(H=Sn(H.nextSibling),H===null){M=null;break e}}M=H}M!==null?(a.memoizedState={dehydrated:M,treeContext:ea!==null?{id:Xn,overflow:Zn}:null,retryLane:536870912,hydrationErrors:null},H=Gt(18,null,null,0),H.stateNode=M,H.return=a,a.child=H,Lt=a,Fe=null,H=!0):H=!1}H||ia(a)}if(M=a.memoizedState,M!==null&&(M=M.dehydrated,M!==null))return ff(M)?a.lanes=32:a.lanes=536870912,null;Jn(a)}return M=c.children,c=c.fallback,f?(Ci(),f=a.mode,M=hl({mode:"hidden",children:M},f),c=Ji(c,f,s,null),M.return=a,c.return=a,M.sibling=c,a.child=M,f=a.child,f.memoizedState=Md(s),f.childLanes=jd(n,w,s),a.memoizedState=Ad,c):(Si(a),Ld(a,M))}if(H=n.memoizedState,H!==null&&(M=H.dehydrated,M!==null)){if(g)a.flags&256?(Si(a),a.flags&=-257,a=Od(n,a,s)):a.memoizedState!==null?(Ci(),a.child=n.child,a.flags|=128,a=null):(Ci(),f=c.fallback,M=a.mode,c=hl({mode:"visible",children:c.children},M),f=Ji(f,M,s,null),f.flags|=2,c.return=a,f.return=a,c.sibling=f,a.child=c,Za(a,n.child,null,s),c=a.child,c.memoizedState=Md(s),c.childLanes=jd(n,w,s),a.memoizedState=Ad,a=f);else if(Si(a),ff(M)){if(w=M.nextSibling&&M.nextSibling.dataset,w)var I=w.dgst;w=I,c=Error(r(419)),c.stack="",c.digest=w,is({value:c,source:null,stack:null}),a=Od(n,a,s)}else if(ct||as(n,a,s,!1),w=(s&n.childLanes)!==0,ct||w){if(w=Be,w!==null&&(c=s&-s,c=(c&42)!==0?1:fu(c),c=(c&(w.suspendedLanes|s))!==0?0:c,c!==0&&c!==H.retryLane))throw H.retryLane=c,Na(n,c),Zt(w,n,c),Cm;M.data==="$?"||Xd(),a=Od(n,a,s)}else M.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=H.treeContext,Fe=Sn(M.nextSibling),Lt=a,Ee=!0,na=null,Ln=!1,n!==null&&(on[ln++]=Xn,on[ln++]=Zn,on[ln++]=ea,Xn=n.id,Zn=n.overflow,ea=a),a=Ld(a,c.children),a.flags|=4096);return a}return f?(Ci(),f=c.fallback,M=a.mode,H=n.child,I=H.sibling,c=Fn(H,{mode:"hidden",children:c.children}),c.subtreeFlags=H.subtreeFlags&65011712,I!==null?f=Fn(I,f):(f=Ji(f,M,s,null),f.flags|=2),f.return=a,c.return=a,c.sibling=f,a.child=c,c=f,f=a.child,M=n.child.memoizedState,M===null?M=Md(s):(H=M.cachePool,H!==null?(I=at._currentValue,H=H.parent!==I?{parent:I,pool:I}:H):H=y2(),M={baseLanes:M.baseLanes|s,cachePool:H}),f.memoizedState=M,f.childLanes=jd(n,w,s),a.memoizedState=Ad,c):(Si(a),s=n.child,n=s.sibling,s=Fn(s,{mode:"visible",children:c.children}),s.return=a,s.sibling=null,n!==null&&(w=a.deletions,w===null?(a.deletions=[n],a.flags|=16):w.push(n)),a.child=s,a.memoizedState=null,s)}function Ld(n,a){return a=hl({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function hl(n,a){return n=Gt(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Od(n,a,s){return Za(a,n.child,null,s),n=Ld(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function Dm(n,a,s){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),Xu(n.return,a,s)}function Rd(n,a,s,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:f}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=s,g.tailMode=f)}function Hm(n,a,s){var c=a.pendingProps,f=c.revealOrder,g=c.tail;if(mt(n,a,c.children,s),c=rt.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dm(n,s,a);else if(n.tag===19)Dm(n,s,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(ae(rt,c),f){case"forwards":for(s=a.child,f=null;s!==null;)n=s.alternate,n!==null&&ul(n)===null&&(f=s),s=s.sibling;s=f,s===null?(f=a.child,a.child=null):(f=s.sibling,s.sibling=null),Rd(a,!1,f,s,g);break;case"backwards":for(s=null,f=a.child,a.child=null;f!==null;){if(n=f.alternate,n!==null&&ul(n)===null){a.child=f;break}n=f.sibling,f.sibling=s,s=f,f=n}Rd(a,!0,s,null,g);break;case"together":Rd(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ei(n,a,s){if(n!==null&&(a.dependencies=n.dependencies),ji|=a.lanes,(s&a.childLanes)===0)if(n!==null){if(as(n,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(r(153));if(a.child!==null){for(n=a.child,s=Fn(n,n.pendingProps),a.child=s,s.return=a;n.sibling!==null;)n=n.sibling,s=s.sibling=Fn(n,n.pendingProps),s.return=a;s.sibling=null}return a.child}function kd(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Xo(n)))}function w7(n,a,s){switch(a.tag){case 3:Oe(a,a.stateNode.containerInfo),xi(a,at,n.memoizedState.cache),ns();break;case 27:case 5:Fi(a);break;case 4:Oe(a,a.stateNode.containerInfo);break;case 10:xi(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(Si(a),a.flags|=128,null):(s&a.child.childLanes)!==0?km(n,a,s):(Si(a),n=ei(n,a,s),n!==null?n.sibling:null);Si(a);break;case 19:var f=(n.flags&128)!==0;if(c=(s&a.childLanes)!==0,c||(as(n,a,s,!1),c=(s&a.childLanes)!==0),f){if(c)return Hm(n,a,s);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ae(rt,rt.current),c)break;return null;case 22:case 23:return a.lanes=0,Mm(n,a,s);case 24:xi(a,at,n.memoizedState.cache)}return ei(n,a,s)}function Vm(n,a,s){if(n!==null)if(n.memoizedProps!==a.pendingProps)ct=!0;else{if(!kd(n,s)&&(a.flags&128)===0)return ct=!1,w7(n,a,s);ct=(n.flags&131072)!==0}else ct=!1,Ee&&(a.flags&1048576)!==0&&d2(a,Fo,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var c=a.elementType,f=c._init;if(c=f(c._payload),a.type=c,typeof c=="function")Uu(c)?(n=la(c,n),a.tag=1,a=Om(null,a,c,n,s)):(a.tag=0,a=Ed(null,a,c,n,s));else{if(c!=null){if(f=c.$$typeof,f===k){a.tag=11,a=Tm(null,a,c,n,s);break e}else if(f===V){a.tag=14,a=Em(null,a,c,n,s);break e}}throw a=oe(c)||c,Error(r(306,a,""))}}return a;case 0:return Ed(n,a,a.type,a.pendingProps,s);case 1:return c=a.type,f=la(c,a.pendingProps),Om(n,a,c,f,s);case 3:e:{if(Oe(a,a.stateNode.containerInfo),n===null)throw Error(r(387));c=a.pendingProps;var g=a.memoizedState;f=g.element,td(n,a),ds(a,c,null,s);var w=a.memoizedState;if(c=w.cache,xi(a,at,c),c!==g.cache&&Zu(a,[at],s,!0),us(),c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=Rm(n,a,c,s);break e}else if(c!==f){f=rn(Error(r(424)),a),is(f),a=Rm(n,a,c,s);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Fe=Sn(n.firstChild),Lt=a,Ee=!0,na=null,Ln=!0,s=pm(a,null,c,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ns(),c===f){a=ei(n,a,s);break e}mt(n,a,c,s)}a=a.child}return a;case 26:return pl(n,a),n===null?(s=Bg(a.type,null,a.pendingProps,null))?a.memoizedState=s:Ee||(s=a.type,n=a.pendingProps,c=jl(de.current).createElement(s),c[St]=a,c[kt]=n,xt(c,s,n),lt(c),a.stateNode=c):a.memoizedState=Bg(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Fi(a),n===null&&Ee&&(c=a.stateNode=zg(a.type,a.pendingProps,de.current),Lt=a,Ln=!0,f=Fe,ki(a.type)?(pf=f,Fe=Sn(c.firstChild)):Fe=f),mt(n,a,a.pendingProps.children,s),pl(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Ee&&((f=c=Fe)&&(c=X7(c,a.type,a.pendingProps,Ln),c!==null?(a.stateNode=c,Lt=a,Fe=Sn(c.firstChild),Ln=!1,f=!0):f=!1),f||ia(a)),Fi(a),f=a.type,g=a.pendingProps,w=n!==null?n.memoizedProps:null,c=g.children,cf(f,g)?c=null:w!==null&&cf(f,w)&&(a.flags|=32),a.memoizedState!==null&&(f=od(n,a,f7,null,null,s),Ds._currentValue=f),pl(n,a),mt(n,a,c,s),a.child;case 6:return n===null&&Ee&&((n=s=Fe)&&(s=Z7(s,a.pendingProps,Ln),s!==null?(a.stateNode=s,Lt=a,Fe=null,n=!0):n=!1),n||ia(a)),null;case 13:return km(n,a,s);case 4:return Oe(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=Za(a,null,c,s):mt(n,a,c,s),a.child;case 11:return Tm(n,a,a.type,a.pendingProps,s);case 7:return mt(n,a,a.pendingProps,s),a.child;case 8:return mt(n,a,a.pendingProps.children,s),a.child;case 12:return mt(n,a,a.pendingProps.children,s),a.child;case 10:return c=a.pendingProps,xi(a,a.type,c.value),mt(n,a,c.children,s),a.child;case 9:return f=a.type._context,c=a.pendingProps.children,ra(a),f=Ct(f),c=c(f),a.flags|=1,mt(n,a,c,s),a.child;case 14:return Em(n,a,a.type,a.pendingProps,s);case 15:return Am(n,a,a.type,a.pendingProps,s);case 19:return Hm(n,a,s);case 31:return c=a.pendingProps,s=a.mode,c={mode:c.mode,children:c.children},n===null?(s=hl(c,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=Fn(n.child,c),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return Mm(n,a,s);case 24:return ra(a),c=Ct(at),n===null?(f=Qu(),f===null&&(f=Be,g=Wu(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=s),f=g),a.memoizedState={parent:c,cache:f},ed(a),xi(a,at,f)):((n.lanes&s)!==0&&(td(n,a),ds(a,null,null,s),us()),f=n.memoizedState,g=a.memoizedState,f.parent!==c?(f={parent:c,cache:c},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),xi(a,at,c)):(c=g.cache,xi(a,at,c),c!==f.cache&&Zu(a,[at],s,!0))),mt(n,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function ti(n){n.flags|=4}function zm(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Gg(a)){if(a=cn.current,a!==null&&((Ce&4194048)===Ce?On!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||a!==On))throw ls=Ju,v2;n.flags|=8192}}function ml(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?h1():536870912,n.lanes|=a,Ja|=a)}function ys(n,a){if(!Ee)switch(n.tailMode){case"hidden":a=n.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function qe(n){var a=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(a)for(var f=n.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=s,a}function b7(n,a,s){var c=a.pendingProps;switch(qu(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(a),null;case 1:return qe(a),null;case 3:return s=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Kn(at),bt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(ts(a)?ti(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,h2())),qe(a),null;case 26:return s=a.memoizedState,n===null?(ti(a),s!==null?(qe(a),zm(a,s)):(qe(a),a.flags&=-16777217)):s?s!==n.memoizedState?(ti(a),qe(a),zm(a,s)):(qe(a),a.flags&=-16777217):(n.memoizedProps!==c&&ti(a),qe(a),a.flags&=-16777217),null;case 27:Gn(a),s=de.current;var f=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&ti(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return qe(a),null}n=ce.current,ts(a)?f2(a):(n=zg(f,c,s),a.stateNode=n,ti(a))}return qe(a),null;case 5:if(Gn(a),s=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&ti(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return qe(a),null}if(n=ce.current,ts(a))f2(a);else{switch(f=jl(de.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?f.createElement(s,{is:c.is}):f.createElement(s)}}n[St]=a,n[kt]=c;e:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break e;for(;f.sibling===null;){if(f.return===null||f.return===a)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=n;e:switch(xt(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ti(a)}}return qe(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&ti(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(r(166));if(n=de.current,ts(a)){if(n=a.stateNode,s=a.memoizedProps,c=null,f=Lt,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}n[St]=a,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||Lg(n.nodeValue,s)),n||ia(a)}else n=jl(n).createTextNode(c),n[St]=a,a.stateNode=n}return qe(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=ts(a),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(r(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[St]=a}else ns(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;qe(a),f=!1}else f=h2(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(Jn(a),a):(Jn(a),null)}if(Jn(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=a.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)}return s!==n&&s&&(a.child.flags|=8192),ml(a,a.updateQueue),qe(a),null;case 4:return bt(),n===null&&af(a.stateNode.containerInfo),qe(a),null;case 10:return Kn(a.type),qe(a),null;case 19:if(ne(rt),f=a.memoizedState,f===null)return qe(a),null;if(c=(a.flags&128)!==0,g=f.rendering,g===null)if(c)ys(f,!1);else{if(Xe!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(g=ul(n),g!==null){for(a.flags|=128,ys(f,!1),n=g.updateQueue,a.updateQueue=n,ml(a,n),a.subtreeFlags=0,n=s,s=a.child;s!==null;)u2(s,n),s=s.sibling;return ae(rt,rt.current&1|2),a.child}n=n.sibling}f.tail!==null&&jn()>yl&&(a.flags|=128,c=!0,ys(f,!1),a.lanes=4194304)}else{if(!c)if(n=ul(g),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,ml(a,n),ys(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Ee)return qe(a),null}else 2*jn()-f.renderingStartTime>yl&&s!==536870912&&(a.flags|=128,c=!0,ys(f,!1),a.lanes=4194304);f.isBackwards?(g.sibling=a.child,a.child=g):(n=f.last,n!==null?n.sibling=g:a.child=g,f.last=g)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=jn(),a.sibling=null,n=rt.current,ae(rt,c?n&1|2:n&1),a):(qe(a),null);case 22:case 23:return Jn(a),rd(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(s&536870912)!==0&&(a.flags&128)===0&&(qe(a),a.subtreeFlags&6&&(a.flags|=8192)):qe(a),s=a.updateQueue,s!==null&&ml(a,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==s&&(a.flags|=2048),n!==null&&ne(sa),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Kn(at),qe(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function S7(n,a){switch(qu(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Kn(at),bt(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Gn(a),null;case 13:if(Jn(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(r(340));ns()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return ne(rt),null;case 4:return bt(),null;case 10:return Kn(a.type),null;case 22:case 23:return Jn(a),rd(),n!==null&&ne(sa),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Kn(at),null;case 25:return null;default:return null}}function Pm(n,a){switch(qu(a),a.tag){case 3:Kn(at),bt();break;case 26:case 27:case 5:Gn(a);break;case 4:bt();break;case 13:Jn(a);break;case 19:ne(rt);break;case 10:Kn(a.type);break;case 22:case 23:Jn(a),rd(),n!==null&&ne(sa);break;case 24:Kn(at)}}function vs(n,a){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&n)===n){c=void 0;var g=s.create,w=s.inst;c=g(),w.destroy=c}s=s.next}while(s!==f)}}catch(M){Ne(a,a.return,M)}}function Ti(n,a,s){try{var c=a.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&n)===n){var w=c.inst,M=w.destroy;if(M!==void 0){w.destroy=void 0,f=a;var H=s,I=M;try{I()}catch(Z){Ne(f,H,Z)}}}c=c.next}while(c!==g)}}catch(Z){Ne(a,a.return,Z)}}function Nm(n){var a=n.updateQueue;if(a!==null){var s=n.stateNode;try{E2(a,s)}catch(c){Ne(n,n.return,c)}}}function Bm(n,a,s){s.props=la(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){Ne(n,a,c)}}function ws(n,a){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(f){Ne(n,a,f)}}function Rn(n,a){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(f){Ne(n,a,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Ne(n,a,f)}else s.current=null}function $m(n){var a=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(f){Ne(n,n.return,f)}}function Dd(n,a,s){try{var c=n.stateNode;I7(c,n.type,s,a),c[kt]=a}catch(f){Ne(n,n.return,f)}}function Um(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ki(n.type)||n.tag===4}function Hd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ki(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vd(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(n),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Ml));else if(c!==4&&(c===27&&ki(n.type)&&(s=n.stateNode,a=null),n=n.child,n!==null))for(Vd(n,a,s),n=n.sibling;n!==null;)Vd(n,a,s),n=n.sibling}function gl(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?s.insertBefore(n,a):s.appendChild(n);else if(c!==4&&(c===27&&ki(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(gl(n,a,s),n=n.sibling;n!==null;)gl(n,a,s),n=n.sibling}function _m(n){var a=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);xt(a,c,s),a[St]=n,a[kt]=s}catch(g){Ne(n,n.return,g)}}var ni=!1,Ke=!1,zd=!1,Im=typeof WeakSet=="function"?WeakSet:Set,ut=null;function C7(n,a){if(n=n.containerInfo,of=Hl,n=e2(n),Hu(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break e}var w=0,M=-1,H=-1,I=0,Z=0,J=n,G=null;t:for(;;){for(var q;J!==s||f!==0&&J.nodeType!==3||(M=w+f),J!==g||c!==0&&J.nodeType!==3||(H=w+c),J.nodeType===3&&(w+=J.nodeValue.length),(q=J.firstChild)!==null;)G=J,J=q;for(;;){if(J===n)break t;if(G===s&&++I===f&&(M=w),G===g&&++Z===c&&(H=w),(q=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=q}s=M===-1||H===-1?null:{start:M,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(lf={focusedElem:n,selectionRange:s},Hl=!1,ut=a;ut!==null;)if(a=ut,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,ut=n;else for(;ut!==null;){switch(a=ut,g=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,s=a,f=g.memoizedProps,g=g.memoizedState,c=s.stateNode;try{var pe=la(s.type,f,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(pe,g),c.__reactInternalSnapshotBeforeUpdate=n}catch(ue){Ne(s,s.return,ue)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,s=n.nodeType,s===9)df(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":df(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=a.sibling,n!==null){n.return=a.return,ut=n;break}ut=a.return}}function Gm(n,a,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Ei(n,s),c&4&&vs(5,s);break;case 1:if(Ei(n,s),c&4)if(n=s.stateNode,a===null)try{n.componentDidMount()}catch(w){Ne(s,s.return,w)}else{var f=la(s.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(f,a,n.__reactInternalSnapshotBeforeUpdate)}catch(w){Ne(s,s.return,w)}}c&64&&Nm(s),c&512&&ws(s,s.return);break;case 3:if(Ei(n,s),c&64&&(n=s.updateQueue,n!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{E2(n,a)}catch(w){Ne(s,s.return,w)}}break;case 27:a===null&&c&4&&_m(s);case 26:case 5:Ei(n,s),a===null&&c&4&&$m(s),c&512&&ws(s,s.return);break;case 12:Ei(n,s);break;case 13:Ei(n,s),c&4&&Fm(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=k7.bind(null,s),W7(n,s))));break;case 22:if(c=s.memoizedState!==null||ni,!c){a=a!==null&&a.memoizedState!==null||Ke,f=ni;var g=Ke;ni=c,(Ke=a)&&!g?Ai(n,s,(s.subtreeFlags&8772)!==0):Ei(n,s),ni=f,Ke=g}break;case 30:break;default:Ei(n,s)}}function qm(n){var a=n.alternate;a!==null&&(n.alternate=null,qm(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&mu(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var _e=null,Vt=!1;function ii(n,a,s){for(s=s.child;s!==null;)Ym(n,a,s),s=s.sibling}function Ym(n,a,s){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Ur,s)}catch{}switch(s.tag){case 26:Ke||Rn(s,a),ii(n,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ke||Rn(s,a);var c=_e,f=Vt;ki(s.type)&&(_e=s.stateNode,Vt=!1),ii(n,a,s),Ls(s.stateNode),_e=c,Vt=f;break;case 5:Ke||Rn(s,a);case 6:if(c=_e,f=Vt,_e=null,ii(n,a,s),_e=c,Vt=f,_e!==null)if(Vt)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(s.stateNode)}catch(g){Ne(s,a,g)}else try{_e.removeChild(s.stateNode)}catch(g){Ne(s,a,g)}break;case 18:_e!==null&&(Vt?(n=_e,Hg(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),Ps(n)):Hg(_e,s.stateNode));break;case 4:c=_e,f=Vt,_e=s.stateNode.containerInfo,Vt=!0,ii(n,a,s),_e=c,Vt=f;break;case 0:case 11:case 14:case 15:Ke||Ti(2,s,a),Ke||Ti(4,s,a),ii(n,a,s);break;case 1:Ke||(Rn(s,a),c=s.stateNode,typeof c.componentWillUnmount=="function"&&Bm(s,a,c)),ii(n,a,s);break;case 21:ii(n,a,s);break;case 22:Ke=(c=Ke)||s.memoizedState!==null,ii(n,a,s),Ke=c;break;default:ii(n,a,s)}}function Fm(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ps(n)}catch(s){Ne(a,a.return,s)}}function T7(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Im),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Im),a;default:throw Error(r(435,n.tag))}}function Pd(n,a){var s=T7(n);a.forEach(function(c){var f=D7.bind(null,n,c);s.has(c)||(s.add(c),c.then(f,f))})}function qt(n,a){var s=a.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],g=n,w=a,M=w;e:for(;M!==null;){switch(M.tag){case 27:if(ki(M.type)){_e=M.stateNode,Vt=!1;break e}break;case 5:_e=M.stateNode,Vt=!1;break e;case 3:case 4:_e=M.stateNode.containerInfo,Vt=!0;break e}M=M.return}if(_e===null)throw Error(r(160));Ym(g,w,f),_e=null,Vt=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Xm(a,n),a=a.sibling}var bn=null;function Xm(n,a){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:qt(a,n),Yt(n),c&4&&(Ti(3,n,n.return),vs(3,n),Ti(5,n,n.return));break;case 1:qt(a,n),Yt(n),c&512&&(Ke||s===null||Rn(s,s.return)),c&64&&ni&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var f=bn;if(qt(a,n),Yt(n),c&512&&(Ke||s===null||Rn(s,s.return)),c&4){var g=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[Gr]||g[St]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),xt(g,c,s),g[St]=n,lt(g),c=g;break e;case"link":var w=_g("link","href",f).get(c+(s.href||""));if(w){for(var M=0;M<w.length;M++)if(g=w[M],g.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&g.getAttribute("rel")===(s.rel==null?null:s.rel)&&g.getAttribute("title")===(s.title==null?null:s.title)&&g.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){w.splice(M,1);break t}}g=f.createElement(c),xt(g,c,s),f.head.appendChild(g);break;case"meta":if(w=_g("meta","content",f).get(c+(s.content||""))){for(M=0;M<w.length;M++)if(g=w[M],g.getAttribute("content")===(s.content==null?null:""+s.content)&&g.getAttribute("name")===(s.name==null?null:s.name)&&g.getAttribute("property")===(s.property==null?null:s.property)&&g.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&g.getAttribute("charset")===(s.charSet==null?null:s.charSet)){w.splice(M,1);break t}}g=f.createElement(c),xt(g,c,s),f.head.appendChild(g);break;default:throw Error(r(468,c))}g[St]=n,lt(g),c=g}n.stateNode=c}else Ig(f,n.type,n.stateNode);else n.stateNode=Ug(f,c,n.memoizedProps);else g!==c?(g===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):g.count--,c===null?Ig(f,n.type,n.stateNode):Ug(f,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Dd(n,n.memoizedProps,s.memoizedProps)}break;case 27:qt(a,n),Yt(n),c&512&&(Ke||s===null||Rn(s,s.return)),s!==null&&c&4&&Dd(n,n.memoizedProps,s.memoizedProps);break;case 5:if(qt(a,n),Yt(n),c&512&&(Ke||s===null||Rn(s,s.return)),n.flags&32){f=n.stateNode;try{Ra(f,"")}catch(q){Ne(n,n.return,q)}}c&4&&n.stateNode!=null&&(f=n.memoizedProps,Dd(n,f,s!==null?s.memoizedProps:f)),c&1024&&(zd=!0);break;case 6:if(qt(a,n),Yt(n),c&4){if(n.stateNode===null)throw Error(r(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(q){Ne(n,n.return,q)}}break;case 3:if(Rl=null,f=bn,bn=Ll(a.containerInfo),qt(a,n),bn=f,Yt(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Ps(a.containerInfo)}catch(q){Ne(n,n.return,q)}zd&&(zd=!1,Zm(n));break;case 4:c=bn,bn=Ll(n.stateNode.containerInfo),qt(a,n),Yt(n),bn=c;break;case 12:qt(a,n),Yt(n);break;case 13:qt(a,n),Yt(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Id=jn()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Pd(n,c)));break;case 22:f=n.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,I=ni,Z=Ke;if(ni=I||f,Ke=Z||H,qt(a,n),Ke=Z,ni=I,Yt(n),c&8192)e:for(a=n.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(s===null||H||ni||Ke||ca(n)),s=null,a=n;;){if(a.tag===5||a.tag===26){if(s===null){H=s=a;try{if(g=H.stateNode,f)w=g.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{M=H.stateNode;var J=H.memoizedProps.style,G=J!=null&&J.hasOwnProperty("display")?J.display:null;M.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(q){Ne(H,H.return,q)}}}else if(a.tag===6){if(s===null){H=a;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(q){Ne(H,H.return,q)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Pd(n,s))));break;case 19:qt(a,n),Yt(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Pd(n,c)));break;case 30:break;case 21:break;default:qt(a,n),Yt(n)}}function Yt(n){var a=n.flags;if(a&2){try{for(var s,c=n.return;c!==null;){if(Um(c)){s=c;break}c=c.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,g=Hd(n);gl(n,g,f);break;case 5:var w=s.stateNode;s.flags&32&&(Ra(w,""),s.flags&=-33);var M=Hd(n);gl(n,M,w);break;case 3:case 4:var H=s.stateNode.containerInfo,I=Hd(n);Vd(n,I,H);break;default:throw Error(r(161))}}catch(Z){Ne(n,n.return,Z)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function Zm(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;Zm(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Ei(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Gm(n,a.alternate,a),a=a.sibling}function ca(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:Ti(4,a,a.return),ca(a);break;case 1:Rn(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&Bm(a,a.return,s),ca(a);break;case 27:Ls(a.stateNode);case 26:case 5:Rn(a,a.return),ca(a);break;case 22:a.memoizedState===null&&ca(a);break;case 30:ca(a);break;default:ca(a)}n=n.sibling}}function Ai(n,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,f=n,g=a,w=g.flags;switch(g.tag){case 0:case 11:case 15:Ai(f,g,s),vs(4,g);break;case 1:if(Ai(f,g,s),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(I){Ne(c,c.return,I)}if(c=g,f=c.updateQueue,f!==null){var M=c.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)T2(H[f],M)}catch(I){Ne(c,c.return,I)}}s&&w&64&&Nm(g),ws(g,g.return);break;case 27:_m(g);case 26:case 5:Ai(f,g,s),s&&c===null&&w&4&&$m(g),ws(g,g.return);break;case 12:Ai(f,g,s);break;case 13:Ai(f,g,s),s&&w&4&&Fm(f,g);break;case 22:g.memoizedState===null&&Ai(f,g,s),ws(g,g.return);break;case 30:break;default:Ai(f,g,s)}a=a.sibling}}function Nd(n,a){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&rs(s))}function Bd(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&rs(n))}function kn(n,a,s,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Wm(n,a,s,c),a=a.sibling}function Wm(n,a,s,c){var f=a.flags;switch(a.tag){case 0:case 11:case 15:kn(n,a,s,c),f&2048&&vs(9,a);break;case 1:kn(n,a,s,c);break;case 3:kn(n,a,s,c),f&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&rs(n)));break;case 12:if(f&2048){kn(n,a,s,c),n=a.stateNode;try{var g=a.memoizedProps,w=g.id,M=g.onPostCommit;typeof M=="function"&&M(w,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(H){Ne(a,a.return,H)}}else kn(n,a,s,c);break;case 13:kn(n,a,s,c);break;case 23:break;case 22:g=a.stateNode,w=a.alternate,a.memoizedState!==null?g._visibility&2?kn(n,a,s,c):bs(n,a):g._visibility&2?kn(n,a,s,c):(g._visibility|=2,Wa(n,a,s,c,(a.subtreeFlags&10256)!==0)),f&2048&&Nd(w,a);break;case 24:kn(n,a,s,c),f&2048&&Bd(a.alternate,a);break;default:kn(n,a,s,c)}}function Wa(n,a,s,c,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=n,w=a,M=s,H=c,I=w.flags;switch(w.tag){case 0:case 11:case 15:Wa(g,w,M,H,f),vs(8,w);break;case 23:break;case 22:var Z=w.stateNode;w.memoizedState!==null?Z._visibility&2?Wa(g,w,M,H,f):bs(g,w):(Z._visibility|=2,Wa(g,w,M,H,f)),f&&I&2048&&Nd(w.alternate,w);break;case 24:Wa(g,w,M,H,f),f&&I&2048&&Bd(w.alternate,w);break;default:Wa(g,w,M,H,f)}a=a.sibling}}function bs(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=n,c=a,f=c.flags;switch(c.tag){case 22:bs(s,c),f&2048&&Nd(c.alternate,c);break;case 24:bs(s,c),f&2048&&Bd(c.alternate,c);break;default:bs(s,c)}a=a.sibling}}var Ss=8192;function Ka(n){if(n.subtreeFlags&Ss)for(n=n.child;n!==null;)Km(n),n=n.sibling}function Km(n){switch(n.tag){case 26:Ka(n),n.flags&Ss&&n.memoizedState!==null&&c9(bn,n.memoizedState,n.memoizedProps);break;case 5:Ka(n);break;case 3:case 4:var a=bn;bn=Ll(n.stateNode.containerInfo),Ka(n),bn=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Ss,Ss=16777216,Ka(n),Ss=a):Ka(n));break;default:Ka(n)}}function Qm(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Cs(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];ut=c,eg(c,n)}Qm(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jm(n),n=n.sibling}function Jm(n){switch(n.tag){case 0:case 11:case 15:Cs(n),n.flags&2048&&Ti(9,n,n.return);break;case 3:Cs(n);break;case 12:Cs(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,xl(n)):Cs(n);break;default:Cs(n)}}function xl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];ut=c,eg(c,n)}Qm(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:Ti(8,a,a.return),xl(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,xl(a));break;default:xl(a)}n=n.sibling}}function eg(n,a){for(;ut!==null;){var s=ut;switch(s.tag){case 0:case 11:case 15:Ti(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:rs(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,ut=c;else e:for(s=n;ut!==null;){c=ut;var f=c.sibling,g=c.return;if(qm(c),c===s){ut=null;break e}if(f!==null){f.return=g,ut=f;break e}ut=g}}}var E7={getCacheForType:function(n){var a=Ct(at),s=a.data.get(n);return s===void 0&&(s=n(),a.data.set(n,s)),s}},A7=typeof WeakMap=="function"?WeakMap:Map,De=0,Be=null,be=null,Ce=0,He=0,Ft=null,Mi=!1,Qa=!1,$d=!1,ai=0,Xe=0,ji=0,ua=0,Ud=0,un=0,Ja=0,Ts=null,zt=null,_d=!1,Id=0,yl=1/0,vl=null,Li=null,gt=0,Oi=null,er=null,tr=0,Gd=0,qd=null,tg=null,Es=0,Yd=null;function Xt(){if((De&2)!==0&&Ce!==0)return Ce&-Ce;if(B.T!==null){var n=_a;return n!==0?n:Jd()}return x1()}function ng(){un===0&&(un=(Ce&536870912)===0||Ee?p1():536870912);var n=cn.current;return n!==null&&(n.flags|=32),un}function Zt(n,a,s){(n===Be&&(He===2||He===9)||n.cancelPendingCommit!==null)&&(nr(n,0),Ri(n,Ce,un,!1)),Ir(n,s),((De&2)===0||n!==Be)&&(n===Be&&((De&2)===0&&(ua|=s),Xe===4&&Ri(n,Ce,un,!1)),Dn(n))}function ig(n,a,s){if((De&6)!==0)throw Error(r(327));var c=!s&&(a&124)===0&&(a&n.expiredLanes)===0||_r(n,a),f=c?L7(n,a):Zd(n,a,!0),g=c;do{if(f===0){Qa&&!c&&Ri(n,a,0,!1);break}else{if(s=n.current.alternate,g&&!M7(s)){f=Zd(n,a,!1),g=!1;continue}if(f===2){if(g=a,n.errorRecoveryDisabledLanes&g)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){a=w;e:{var M=n;f=Ts;var H=M.current.memoizedState.isDehydrated;if(H&&(nr(M,w).flags|=256),w=Zd(M,w,!1),w!==2){if($d&&!H){M.errorRecoveryDisabledLanes|=g,ua|=g,f=4;break e}g=zt,zt=f,g!==null&&(zt===null?zt=g:zt.push.apply(zt,g))}f=w}if(g=!1,f!==2)continue}}if(f===1){nr(n,0),Ri(n,a,0,!0);break}e:{switch(c=n,g=f,g){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:Ri(c,a,un,!Mi);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(f=Id+300-jn(),10<f)){if(Ri(c,a,un,!Mi),Oo(c,0,!0)!==0)break e;c.timeoutHandle=kg(ag.bind(null,c,s,zt,vl,_d,a,un,ua,Ja,Mi,g,2,-0,0),f);break e}ag(c,s,zt,vl,_d,a,un,ua,Ja,Mi,g,0,-0,0)}}break}while(!0);Dn(n)}function ag(n,a,s,c,f,g,w,M,H,I,Z,J,G,q){if(n.timeoutHandle=-1,J=a.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(ks={stylesheets:null,count:0,unsuspend:l9},Km(a),J=u9(),J!==null)){n.cancelPendingCommit=J(dg.bind(null,n,a,g,s,c,f,w,M,H,Z,1,G,q)),Ri(n,g,w,!I);return}dg(n,a,g,s,c,f,w,M,H)}function M7(n){for(var a=n;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var f=s[c],g=f.getSnapshot;f=f.value;try{if(!It(g(),f))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ri(n,a,s,c){a&=~Ud,a&=~ua,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var f=a;0<f;){var g=31-_t(f),w=1<<g;c[g]=-1,f&=~w}s!==0&&m1(n,s,a)}function wl(){return(De&6)===0?(As(0),!1):!0}function Fd(){if(be!==null){if(He===0)var n=be.return;else n=be,Wn=aa=null,ud(n),Xa=null,gs=0,n=be;for(;n!==null;)Pm(n.alternate,n),n=n.return;be=null}}function nr(n,a){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,q7(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Fd(),Be=n,be=s=Fn(n.current,null),Ce=a,He=0,Ft=null,Mi=!1,Qa=_r(n,a),$d=!1,Ja=un=Ud=ua=ji=Xe=0,zt=Ts=null,_d=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var f=31-_t(c),g=1<<f;a|=n[f],c&=~g}return ai=a,_o(),s}function rg(n,a){ye=null,B.H=ol,a===os||a===Ko?(a=S2(),He=3):a===v2?(a=S2(),He=4):He=a===Cm?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ft=a,be===null&&(Xe=1,fl(n,rn(a,n.current)))}function sg(){var n=B.H;return B.H=ol,n===null?ol:n}function og(){var n=B.A;return B.A=E7,n}function Xd(){Xe=4,Mi||(Ce&4194048)!==Ce&&cn.current!==null||(Qa=!0),(ji&134217727)===0&&(ua&134217727)===0||Be===null||Ri(Be,Ce,un,!1)}function Zd(n,a,s){var c=De;De|=2;var f=sg(),g=og();(Be!==n||Ce!==a)&&(vl=null,nr(n,a)),a=!1;var w=Xe;e:do try{if(He!==0&&be!==null){var M=be,H=Ft;switch(He){case 8:Fd(),w=6;break e;case 3:case 2:case 9:case 6:cn.current===null&&(a=!0);var I=He;if(He=0,Ft=null,ir(n,M,H,I),s&&Qa){w=0;break e}break;default:I=He,He=0,Ft=null,ir(n,M,H,I)}}j7(),w=Xe;break}catch(Z){rg(n,Z)}while(!0);return a&&n.shellSuspendCounter++,Wn=aa=null,De=c,B.H=f,B.A=g,be===null&&(Be=null,Ce=0,_o()),w}function j7(){for(;be!==null;)lg(be)}function L7(n,a){var s=De;De|=2;var c=sg(),f=og();Be!==n||Ce!==a?(vl=null,yl=jn()+500,nr(n,a)):Qa=_r(n,a);e:do try{if(He!==0&&be!==null){a=be;var g=Ft;t:switch(He){case 1:He=0,Ft=null,ir(n,a,g,1);break;case 2:case 9:if(w2(g)){He=0,Ft=null,cg(a);break}a=function(){He!==2&&He!==9||Be!==n||(He=7),Dn(n)},g.then(a,a);break e;case 3:He=7;break e;case 4:He=5;break e;case 7:w2(g)?(He=0,Ft=null,cg(a)):(He=0,Ft=null,ir(n,a,g,7));break;case 5:var w=null;switch(be.tag){case 26:w=be.memoizedState;case 5:case 27:var M=be;if(!w||Gg(w)){He=0,Ft=null;var H=M.sibling;if(H!==null)be=H;else{var I=M.return;I!==null?(be=I,bl(I)):be=null}break t}}He=0,Ft=null,ir(n,a,g,5);break;case 6:He=0,Ft=null,ir(n,a,g,6);break;case 8:Fd(),Xe=6;break e;default:throw Error(r(462))}}O7();break}catch(Z){rg(n,Z)}while(!0);return Wn=aa=null,B.H=c,B.A=f,De=s,be!==null?0:(Be=null,Ce=0,_o(),Xe)}function O7(){for(;be!==null&&!Qv();)lg(be)}function lg(n){var a=Vm(n.alternate,n,ai);n.memoizedProps=n.pendingProps,a===null?bl(n):be=a}function cg(n){var a=n,s=a.alternate;switch(a.tag){case 15:case 0:a=Lm(s,a,a.pendingProps,a.type,void 0,Ce);break;case 11:a=Lm(s,a,a.pendingProps,a.type.render,a.ref,Ce);break;case 5:ud(a);default:Pm(s,a),a=be=u2(a,ai),a=Vm(s,a,ai)}n.memoizedProps=n.pendingProps,a===null?bl(n):be=a}function ir(n,a,s,c){Wn=aa=null,ud(a),Xa=null,gs=0;var f=a.return;try{if(v7(n,f,a,s,Ce)){Xe=1,fl(n,rn(s,n.current)),be=null;return}}catch(g){if(f!==null)throw be=f,g;Xe=1,fl(n,rn(s,n.current)),be=null;return}a.flags&32768?(Ee||c===1?n=!0:Qa||(Ce&536870912)!==0?n=!1:(Mi=n=!0,(c===2||c===9||c===3||c===6)&&(c=cn.current,c!==null&&c.tag===13&&(c.flags|=16384))),ug(a,n)):bl(a)}function bl(n){var a=n;do{if((a.flags&32768)!==0){ug(a,Mi);return}n=a.return;var s=b7(a.alternate,a,ai);if(s!==null){be=s;return}if(a=a.sibling,a!==null){be=a;return}be=a=n}while(a!==null);Xe===0&&(Xe=5)}function ug(n,a){do{var s=S7(n.alternate,n);if(s!==null){s.flags&=32767,be=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(n=n.sibling,n!==null)){be=n;return}be=n=s}while(n!==null);Xe=6,be=null}function dg(n,a,s,c,f,g,w,M,H){n.cancelPendingCommit=null;do Sl();while(gt!==0);if((De&6)!==0)throw Error(r(327));if(a!==null){if(a===n.current)throw Error(r(177));if(g=a.lanes|a.childLanes,g|=Bu,l8(n,s,g,w,M,H),n===Be&&(be=Be=null,Ce=0),er=a,Oi=n,tr=s,Gd=g,qd=f,tg=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,H7(Mo,function(){return gg(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,f=W.p,W.p=2,w=De,De|=4;try{C7(n,a,s)}finally{De=w,W.p=f,B.T=c}}gt=1,fg(),pg(),hg()}}function fg(){if(gt===1){gt=0;var n=Oi,a=er,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var c=W.p;W.p=2;var f=De;De|=4;try{Xm(a,n);var g=lf,w=e2(n.containerInfo),M=g.focusedElem,H=g.selectionRange;if(w!==M&&M&&M.ownerDocument&&J1(M.ownerDocument.documentElement,M)){if(H!==null&&Hu(M)){var I=H.start,Z=H.end;if(Z===void 0&&(Z=I),"selectionStart"in M)M.selectionStart=I,M.selectionEnd=Math.min(Z,M.value.length);else{var J=M.ownerDocument||document,G=J&&J.defaultView||window;if(G.getSelection){var q=G.getSelection(),pe=M.textContent.length,ue=Math.min(H.start,pe),Pe=H.end===void 0?ue:Math.min(H.end,pe);!q.extend&&ue>Pe&&(w=Pe,Pe=ue,ue=w);var N=Q1(M,ue),z=Q1(M,Pe);if(N&&z&&(q.rangeCount!==1||q.anchorNode!==N.node||q.anchorOffset!==N.offset||q.focusNode!==z.node||q.focusOffset!==z.offset)){var _=J.createRange();_.setStart(N.node,N.offset),q.removeAllRanges(),ue>Pe?(q.addRange(_),q.extend(z.node,z.offset)):(_.setEnd(z.node,z.offset),q.addRange(_))}}}}for(J=[],q=M;q=q.parentNode;)q.nodeType===1&&J.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof M.focus=="function"&&M.focus(),M=0;M<J.length;M++){var Q=J[M];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Hl=!!of,lf=of=null}finally{De=f,W.p=c,B.T=s}}n.current=a,gt=2}}function pg(){if(gt===2){gt=0;var n=Oi,a=er,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var c=W.p;W.p=2;var f=De;De|=4;try{Gm(n,a.alternate,a)}finally{De=f,W.p=c,B.T=s}}gt=3}}function hg(){if(gt===4||gt===3){gt=0,Jv();var n=Oi,a=er,s=tr,c=tg;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?gt=5:(gt=0,er=Oi=null,mg(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Li=null),pu(s),a=a.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Ur,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=B.T,f=W.p,W.p=2,B.T=null;try{for(var g=n.onRecoverableError,w=0;w<c.length;w++){var M=c[w];g(M.value,{componentStack:M.stack})}}finally{B.T=a,W.p=f}}(tr&3)!==0&&Sl(),Dn(n),f=n.pendingLanes,(s&4194090)!==0&&(f&42)!==0?n===Yd?Es++:(Es=0,Yd=n):Es=0,As(0)}}function mg(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,rs(a)))}function Sl(n){return fg(),pg(),hg(),gg()}function gg(){if(gt!==5)return!1;var n=Oi,a=Gd;Gd=0;var s=pu(tr),c=B.T,f=W.p;try{W.p=32>s?32:s,B.T=null,s=qd,qd=null;var g=Oi,w=tr;if(gt=0,er=Oi=null,tr=0,(De&6)!==0)throw Error(r(331));var M=De;if(De|=4,Jm(g.current),Wm(g,g.current,w,s),De=M,As(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Ur,g)}catch{}return!0}finally{W.p=f,B.T=c,mg(n,a)}}function xg(n,a,s){a=rn(s,a),a=Td(n.stateNode,a,2),n=wi(n,a,2),n!==null&&(Ir(n,2),Dn(n))}function Ne(n,a,s){if(n.tag===3)xg(n,n,s);else for(;a!==null;){if(a.tag===3){xg(a,n,s);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Li===null||!Li.has(c))){n=rn(s,n),s=bm(2),c=wi(a,s,2),c!==null&&(Sm(s,c,a,n),Ir(c,2),Dn(c));break}}a=a.return}}function Wd(n,a,s){var c=n.pingCache;if(c===null){c=n.pingCache=new A7;var f=new Set;c.set(a,f)}else f=c.get(a),f===void 0&&(f=new Set,c.set(a,f));f.has(s)||($d=!0,f.add(s),n=R7.bind(null,n,a,s),a.then(n,n))}function R7(n,a,s){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Be===n&&(Ce&s)===s&&(Xe===4||Xe===3&&(Ce&62914560)===Ce&&300>jn()-Id?(De&2)===0&&nr(n,0):Ud|=s,Ja===Ce&&(Ja=0)),Dn(n)}function yg(n,a){a===0&&(a=h1()),n=Na(n,a),n!==null&&(Ir(n,a),Dn(n))}function k7(n){var a=n.memoizedState,s=0;a!==null&&(s=a.retryLane),yg(n,s)}function D7(n,a){var s=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(s=f.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(a),yg(n,s)}function H7(n,a){return cu(n,a)}var Cl=null,ar=null,Kd=!1,Tl=!1,Qd=!1,da=0;function Dn(n){n!==ar&&n.next===null&&(ar===null?Cl=ar=n:ar=ar.next=n),Tl=!0,Kd||(Kd=!0,z7())}function As(n,a){if(!Qd&&Tl){Qd=!0;do for(var s=!1,c=Cl;c!==null;){if(n!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var w=c.suspendedLanes,M=c.pingedLanes;g=(1<<31-_t(42|n)+1)-1,g&=f&~(w&~M),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(s=!0,Sg(c,g))}else g=Ce,g=Oo(c,c===Be?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||_r(c,g)||(s=!0,Sg(c,g));c=c.next}while(s);Qd=!1}}function V7(){vg()}function vg(){Tl=Kd=!1;var n=0;da!==0&&(G7()&&(n=da),da=0);for(var a=jn(),s=null,c=Cl;c!==null;){var f=c.next,g=wg(c,a);g===0?(c.next=null,s===null?Cl=f:s.next=f,f===null&&(ar=s)):(s=c,(n!==0||(g&3)!==0)&&(Tl=!0)),c=f}As(n)}function wg(n,a){for(var s=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var w=31-_t(g),M=1<<w,H=f[w];H===-1?((M&s)===0||(M&c)!==0)&&(f[w]=o8(M,a)):H<=a&&(n.expiredLanes|=M),g&=~M}if(a=Be,s=Ce,s=Oo(n,n===a?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===a&&(He===2||He===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&uu(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||_r(n,s)){if(a=s&-s,a===n.callbackPriority)return a;switch(c!==null&&uu(c),pu(s)){case 2:case 8:s=d1;break;case 32:s=Mo;break;case 268435456:s=f1;break;default:s=Mo}return c=bg.bind(null,n),s=cu(s,c),n.callbackPriority=a,n.callbackNode=s,a}return c!==null&&c!==null&&uu(c),n.callbackPriority=2,n.callbackNode=null,2}function bg(n,a){if(gt!==0&&gt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(Sl()&&n.callbackNode!==s)return null;var c=Ce;return c=Oo(n,n===Be?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(ig(n,c,a),wg(n,jn()),n.callbackNode!=null&&n.callbackNode===s?bg.bind(null,n):null)}function Sg(n,a){if(Sl())return null;ig(n,a,!0)}function z7(){Y7(function(){(De&6)!==0?cu(u1,V7):vg()})}function Jd(){return da===0&&(da=p1()),da}function Cg(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Vo(""+n)}function Tg(n,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,n.id&&s.setAttribute("form",n.id),a.parentNode.insertBefore(s,a),n=new FormData(n),s.parentNode.removeChild(s),n}function P7(n,a,s,c,f){if(a==="submit"&&s&&s.stateNode===f){var g=Cg((f[kt]||null).action),w=c.submitter;w&&(a=(a=w[kt]||null)?Cg(a.formAction):w.getAttribute("formAction"),a!==null&&(g=a,w=null));var M=new Bo("action","action",null,c,f);n.push({event:M,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(da!==0){var H=w?Tg(f,w):new FormData(f);vd(s,{pending:!0,data:H,method:f.method,action:g},null,H)}}else typeof g=="function"&&(M.preventDefault(),H=w?Tg(f,w):new FormData(f),vd(s,{pending:!0,data:H,method:f.method,action:g},g,H))},currentTarget:f}]})}}for(var ef=0;ef<Nu.length;ef++){var tf=Nu[ef],N7=tf.toLowerCase(),B7=tf[0].toUpperCase()+tf.slice(1);wn(N7,"on"+B7)}wn(i2,"onAnimationEnd"),wn(a2,"onAnimationIteration"),wn(r2,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(n7,"onTransitionRun"),wn(i7,"onTransitionStart"),wn(a7,"onTransitionCancel"),wn(s2,"onTransitionEnd"),ja("onMouseEnter",["mouseout","mouseover"]),ja("onMouseLeave",["mouseout","mouseover"]),ja("onPointerEnter",["pointerout","pointerover"]),ja("onPointerLeave",["pointerout","pointerover"]),Zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$7=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ms));function Eg(n,a){a=(a&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],f=c.event;c=c.listeners;e:{var g=void 0;if(a)for(var w=c.length-1;0<=w;w--){var M=c[w],H=M.instance,I=M.currentTarget;if(M=M.listener,H!==g&&f.isPropagationStopped())break e;g=M,f.currentTarget=I;try{g(f)}catch(Z){dl(Z)}f.currentTarget=null,g=H}else for(w=0;w<c.length;w++){if(M=c[w],H=M.instance,I=M.currentTarget,M=M.listener,H!==g&&f.isPropagationStopped())break e;g=M,f.currentTarget=I;try{g(f)}catch(Z){dl(Z)}f.currentTarget=null,g=H}}}}function Se(n,a){var s=a[hu];s===void 0&&(s=a[hu]=new Set);var c=n+"__bubble";s.has(c)||(Ag(a,n,2,!1),s.add(c))}function nf(n,a,s){var c=0;a&&(c|=4),Ag(s,n,c,a)}var El="_reactListening"+Math.random().toString(36).slice(2);function af(n){if(!n[El]){n[El]=!0,v1.forEach(function(s){s!=="selectionchange"&&($7.has(s)||nf(s,!1,n),nf(s,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[El]||(a[El]=!0,nf("selectionchange",!1,a))}}function Ag(n,a,s,c){switch(Wg(a)){case 2:var f=p9;break;case 8:f=h9;break;default:f=yf}s=f.bind(null,a,s,n),f=void 0,!Eu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(a,s,{capture:!0,passive:f}):n.addEventListener(a,s,!0):f!==void 0?n.addEventListener(a,s,{passive:f}):n.addEventListener(a,s,!1)}function rf(n,a,s,c,f){var g=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var M=c.stateNode.containerInfo;if(M===f)break;if(w===4)for(w=c.return;w!==null;){var H=w.tag;if((H===3||H===4)&&w.stateNode.containerInfo===f)return;w=w.return}for(;M!==null;){if(w=Ea(M),w===null)return;if(H=w.tag,H===5||H===6||H===26||H===27){c=g=w;continue e}M=M.parentNode}}c=c.return}D1(function(){var I=g,Z=Cu(s),J=[];e:{var G=o2.get(n);if(G!==void 0){var q=Bo,pe=n;switch(n){case"keypress":if(Po(s)===0)break e;case"keydown":case"keyup":q=H8;break;case"focusin":pe="focus",q=Lu;break;case"focusout":pe="blur",q=Lu;break;case"beforeblur":case"afterblur":q=Lu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=z1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=S8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=P8;break;case i2:case a2:case r2:q=E8;break;case s2:q=B8;break;case"scroll":case"scrollend":q=w8;break;case"wheel":q=U8;break;case"copy":case"cut":case"paste":q=M8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=N1;break;case"toggle":case"beforetoggle":q=I8}var ue=(a&4)!==0,Pe=!ue&&(n==="scroll"||n==="scrollend"),N=ue?G!==null?G+"Capture":null:G;ue=[];for(var z=I,_;z!==null;){var Q=z;if(_=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||_===null||N===null||(Q=Yr(z,N),Q!=null&&ue.push(js(z,Q,_))),Pe)break;z=z.return}0<ue.length&&(G=new q(G,pe,null,s,Z),J.push({event:G,listeners:ue}))}}if((a&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",q=n==="mouseout"||n==="pointerout",G&&s!==Su&&(pe=s.relatedTarget||s.fromElement)&&(Ea(pe)||pe[Ta]))break e;if((q||G)&&(G=Z.window===Z?Z:(G=Z.ownerDocument)?G.defaultView||G.parentWindow:window,q?(pe=s.relatedTarget||s.toElement,q=I,pe=pe?Ea(pe):null,pe!==null&&(Pe=l(pe),ue=pe.tag,pe!==Pe||ue!==5&&ue!==27&&ue!==6)&&(pe=null)):(q=null,pe=I),q!==pe)){if(ue=z1,Q="onMouseLeave",N="onMouseEnter",z="mouse",(n==="pointerout"||n==="pointerover")&&(ue=N1,Q="onPointerLeave",N="onPointerEnter",z="pointer"),Pe=q==null?G:qr(q),_=pe==null?G:qr(pe),G=new ue(Q,z+"leave",q,s,Z),G.target=Pe,G.relatedTarget=_,Q=null,Ea(Z)===I&&(ue=new ue(N,z+"enter",pe,s,Z),ue.target=_,ue.relatedTarget=Pe,Q=ue),Pe=Q,q&&pe)t:{for(ue=q,N=pe,z=0,_=ue;_;_=rr(_))z++;for(_=0,Q=N;Q;Q=rr(Q))_++;for(;0<z-_;)ue=rr(ue),z--;for(;0<_-z;)N=rr(N),_--;for(;z--;){if(ue===N||N!==null&&ue===N.alternate)break t;ue=rr(ue),N=rr(N)}ue=null}else ue=null;q!==null&&Mg(J,G,q,ue,!1),pe!==null&&Pe!==null&&Mg(J,Pe,pe,ue,!0)}}e:{if(G=I?qr(I):window,q=G.nodeName&&G.nodeName.toLowerCase(),q==="select"||q==="input"&&G.type==="file")var se=Y1;else if(G1(G))if(F1)se=J8;else{se=K8;var ve=W8}else q=G.nodeName,!q||q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?I&&bu(I.elementType)&&(se=Y1):se=Q8;if(se&&(se=se(n,I))){q1(J,se,s,Z);break e}ve&&ve(n,G,I),n==="focusout"&&I&&G.type==="number"&&I.memoizedProps.value!=null&&wu(G,"number",G.value)}switch(ve=I?qr(I):window,n){case"focusin":(G1(ve)||ve.contentEditable==="true")&&(Va=ve,Vu=I,es=null);break;case"focusout":es=Vu=Va=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,t2(J,s,Z);break;case"selectionchange":if(t7)break;case"keydown":case"keyup":t2(J,s,Z)}var le;if(Ru)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ha?_1(n,s)&&(fe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(fe="onCompositionStart");fe&&(B1&&s.locale!=="ko"&&(Ha||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ha&&(le=H1()):(gi=Z,Au="value"in gi?gi.value:gi.textContent,Ha=!0)),ve=Al(I,fe),0<ve.length&&(fe=new P1(fe,n,null,s,Z),J.push({event:fe,listeners:ve}),le?fe.data=le:(le=I1(s),le!==null&&(fe.data=le)))),(le=q8?Y8(n,s):F8(n,s))&&(fe=Al(I,"onBeforeInput"),0<fe.length&&(ve=new P1("onBeforeInput","beforeinput",null,s,Z),J.push({event:ve,listeners:fe}),ve.data=le)),P7(J,n,I,s,Z)}Eg(J,a)})}function js(n,a,s){return{instance:n,listener:a,currentTarget:s}}function Al(n,a){for(var s=a+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=Yr(n,s),f!=null&&c.unshift(js(n,f,g)),f=Yr(n,a),f!=null&&c.push(js(n,f,g))),n.tag===3)return c;n=n.return}return[]}function rr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Mg(n,a,s,c,f){for(var g=a._reactName,w=[];s!==null&&s!==c;){var M=s,H=M.alternate,I=M.stateNode;if(M=M.tag,H!==null&&H===c)break;M!==5&&M!==26&&M!==27||I===null||(H=I,f?(I=Yr(s,g),I!=null&&w.unshift(js(s,I,H))):f||(I=Yr(s,g),I!=null&&w.push(js(s,I,H)))),s=s.return}w.length!==0&&n.push({event:a,listeners:w})}var U7=/\r\n?/g,_7=/\u0000|\uFFFD/g;function jg(n){return(typeof n=="string"?n:""+n).replace(U7,`
`).replace(_7,"")}function Lg(n,a){return a=jg(a),jg(n)===a}function Ml(){}function ze(n,a,s,c,f,g){switch(s){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||Ra(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&Ra(n,""+c);break;case"className":ko(n,"class",c);break;case"tabIndex":ko(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":ko(n,s,c);break;case"style":R1(n,c,g);break;case"data":if(a!=="object"){ko(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Vo(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(s==="formAction"?(a!=="input"&&ze(n,a,"name",f.name,f,null),ze(n,a,"formEncType",f.formEncType,f,null),ze(n,a,"formMethod",f.formMethod,f,null),ze(n,a,"formTarget",f.formTarget,f,null)):(ze(n,a,"encType",f.encType,f,null),ze(n,a,"method",f.method,f,null),ze(n,a,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Vo(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=Ml);break;case"onScroll":c!=null&&Se("scroll",n);break;case"onScrollEnd":c!=null&&Se("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=Vo(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":Se("beforetoggle",n),Se("toggle",n),Ro(n,"popover",c);break;case"xlinkActuate":qn(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":qn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":qn(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":qn(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":qn(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":qn(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":qn(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":qn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":qn(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Ro(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=y8.get(s)||s,Ro(n,s,c))}}function sf(n,a,s,c,f,g){switch(s){case"style":R1(n,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"children":typeof c=="string"?Ra(n,c):(typeof c=="number"||typeof c=="bigint")&&Ra(n,""+c);break;case"onScroll":c!=null&&Se("scroll",n);break;case"onScrollEnd":c!=null&&Se("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Ml);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w1.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),a=s.slice(2,f?s.length-7:void 0),g=n[kt]||null,g=g!=null?g[s]:null,typeof g=="function"&&n.removeEventListener(a,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(a,c,f);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):Ro(n,s,c)}}}function xt(n,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",n),Se("load",n);var c=!1,f=!1,g;for(g in s)if(s.hasOwnProperty(g)){var w=s[g];if(w!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ze(n,a,g,w,s,null)}}f&&ze(n,a,"srcSet",s.srcSet,s,null),c&&ze(n,a,"src",s.src,s,null);return;case"input":Se("invalid",n);var M=g=w=f=null,H=null,I=null;for(c in s)if(s.hasOwnProperty(c)){var Z=s[c];if(Z!=null)switch(c){case"name":f=Z;break;case"type":w=Z;break;case"checked":H=Z;break;case"defaultChecked":I=Z;break;case"value":g=Z;break;case"defaultValue":M=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,a));break;default:ze(n,a,c,Z,s,null)}}M1(n,g,M,H,I,w,f,!1),Do(n);return;case"select":Se("invalid",n),c=w=g=null;for(f in s)if(s.hasOwnProperty(f)&&(M=s[f],M!=null))switch(f){case"value":g=M;break;case"defaultValue":w=M;break;case"multiple":c=M;default:ze(n,a,f,M,s,null)}a=g,s=w,n.multiple=!!c,a!=null?Oa(n,!!c,a,!1):s!=null&&Oa(n,!!c,s,!0);return;case"textarea":Se("invalid",n),g=f=c=null;for(w in s)if(s.hasOwnProperty(w)&&(M=s[w],M!=null))switch(w){case"value":c=M;break;case"defaultValue":f=M;break;case"children":g=M;break;case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(91));break;default:ze(n,a,w,M,s,null)}L1(n,c,f,g),Do(n);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(c=s[H],c!=null))switch(H){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ze(n,a,H,c,s,null)}return;case"dialog":Se("beforetoggle",n),Se("toggle",n),Se("cancel",n),Se("close",n);break;case"iframe":case"object":Se("load",n);break;case"video":case"audio":for(c=0;c<Ms.length;c++)Se(Ms[c],n);break;case"image":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"embed":case"source":case"link":Se("error",n),Se("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(I in s)if(s.hasOwnProperty(I)&&(c=s[I],c!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ze(n,a,I,c,s,null)}return;default:if(bu(a)){for(Z in s)s.hasOwnProperty(Z)&&(c=s[Z],c!==void 0&&sf(n,a,Z,c,s,void 0));return}}for(M in s)s.hasOwnProperty(M)&&(c=s[M],c!=null&&ze(n,a,M,c,s,null))}function I7(n,a,s,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,w=null,M=null,H=null,I=null,Z=null;for(q in s){var J=s[q];if(s.hasOwnProperty(q)&&J!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":H=J;default:c.hasOwnProperty(q)||ze(n,a,q,null,c,J)}}for(var G in c){var q=c[G];if(J=s[G],c.hasOwnProperty(G)&&(q!=null||J!=null))switch(G){case"type":g=q;break;case"name":f=q;break;case"checked":I=q;break;case"defaultChecked":Z=q;break;case"value":w=q;break;case"defaultValue":M=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,a));break;default:q!==J&&ze(n,a,G,q,c,J)}}vu(n,w,M,H,I,Z,g,f);return;case"select":q=w=M=G=null;for(g in s)if(H=s[g],s.hasOwnProperty(g)&&H!=null)switch(g){case"value":break;case"multiple":q=H;default:c.hasOwnProperty(g)||ze(n,a,g,null,c,H)}for(f in c)if(g=c[f],H=s[f],c.hasOwnProperty(f)&&(g!=null||H!=null))switch(f){case"value":G=g;break;case"defaultValue":M=g;break;case"multiple":w=g;default:g!==H&&ze(n,a,f,g,c,H)}a=M,s=w,c=q,G!=null?Oa(n,!!s,G,!1):!!c!=!!s&&(a!=null?Oa(n,!!s,a,!0):Oa(n,!!s,s?[]:"",!1));return;case"textarea":q=G=null;for(M in s)if(f=s[M],s.hasOwnProperty(M)&&f!=null&&!c.hasOwnProperty(M))switch(M){case"value":break;case"children":break;default:ze(n,a,M,null,c,f)}for(w in c)if(f=c[w],g=s[w],c.hasOwnProperty(w)&&(f!=null||g!=null))switch(w){case"value":G=f;break;case"defaultValue":q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==g&&ze(n,a,w,f,c,g)}j1(n,G,q);return;case"option":for(var pe in s)if(G=s[pe],s.hasOwnProperty(pe)&&G!=null&&!c.hasOwnProperty(pe))switch(pe){case"selected":n.selected=!1;break;default:ze(n,a,pe,null,c,G)}for(H in c)if(G=c[H],q=s[H],c.hasOwnProperty(H)&&G!==q&&(G!=null||q!=null))switch(H){case"selected":n.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:ze(n,a,H,G,c,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in s)G=s[ue],s.hasOwnProperty(ue)&&G!=null&&!c.hasOwnProperty(ue)&&ze(n,a,ue,null,c,G);for(I in c)if(G=c[I],q=s[I],c.hasOwnProperty(I)&&G!==q&&(G!=null||q!=null))switch(I){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,a));break;default:ze(n,a,I,G,c,q)}return;default:if(bu(a)){for(var Pe in s)G=s[Pe],s.hasOwnProperty(Pe)&&G!==void 0&&!c.hasOwnProperty(Pe)&&sf(n,a,Pe,void 0,c,G);for(Z in c)G=c[Z],q=s[Z],!c.hasOwnProperty(Z)||G===q||G===void 0&&q===void 0||sf(n,a,Z,G,c,q);return}}for(var N in s)G=s[N],s.hasOwnProperty(N)&&G!=null&&!c.hasOwnProperty(N)&&ze(n,a,N,null,c,G);for(J in c)G=c[J],q=s[J],!c.hasOwnProperty(J)||G===q||G==null&&q==null||ze(n,a,J,G,c,q)}var of=null,lf=null;function jl(n){return n.nodeType===9?n:n.ownerDocument}function Og(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rg(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function cf(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var uf=null;function G7(){var n=window.event;return n&&n.type==="popstate"?n===uf?!1:(uf=n,!0):(uf=null,!1)}var kg=typeof setTimeout=="function"?setTimeout:void 0,q7=typeof clearTimeout=="function"?clearTimeout:void 0,Dg=typeof Promise=="function"?Promise:void 0,Y7=typeof queueMicrotask=="function"?queueMicrotask:typeof Dg<"u"?function(n){return Dg.resolve(null).then(n).catch(F7)}:kg;function F7(n){setTimeout(function(){throw n})}function ki(n){return n==="head"}function Hg(n,a){var s=a,c=0,f=0;do{var g=s.nextSibling;if(n.removeChild(s),g&&g.nodeType===8)if(s=g.data,s==="/$"){if(0<c&&8>c){s=c;var w=n.ownerDocument;if(s&1&&Ls(w.documentElement),s&2&&Ls(w.body),s&4)for(s=w.head,Ls(s),w=s.firstChild;w;){var M=w.nextSibling,H=w.nodeName;w[Gr]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&w.rel.toLowerCase()==="stylesheet"||s.removeChild(w),w=M}}if(f===0){n.removeChild(g),Ps(a);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:c=s.charCodeAt(0)-48;else c=0;s=g}while(s);Ps(a)}function df(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":df(s),mu(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function X7(n,a,s,c){for(;n.nodeType===1;){var f=s;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Gr])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=Sn(n.nextSibling),n===null)break}return null}function Z7(n,a,s){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Sn(n.nextSibling),n===null))return null;return n}function ff(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function W7(n,a){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")a();else{var c=function(){a(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Sn(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var pf=null;function Vg(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return n;a--}else s==="/$"&&a++}n=n.previousSibling}return null}function zg(n,a,s){switch(a=jl(s),n){case"html":if(n=a.documentElement,!n)throw Error(r(452));return n;case"head":if(n=a.head,!n)throw Error(r(453));return n;case"body":if(n=a.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Ls(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);mu(n)}var dn=new Map,Pg=new Set;function Ll(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ri=W.d;W.d={f:K7,r:Q7,D:J7,C:e9,L:t9,m:n9,X:a9,S:i9,M:r9};function K7(){var n=ri.f(),a=wl();return n||a}function Q7(n){var a=Aa(n);a!==null&&a.tag===5&&a.type==="form"?im(a):ri.r(n)}var sr=typeof document>"u"?null:document;function Ng(n,a,s){var c=sr;if(c&&typeof a=="string"&&a){var f=an(a);f='link[rel="'+n+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Pg.has(f)||(Pg.add(f),n={rel:n,crossOrigin:s,href:a},c.querySelector(f)===null&&(a=c.createElement("link"),xt(a,"link",n),lt(a),c.head.appendChild(a)))}}function J7(n){ri.D(n),Ng("dns-prefetch",n,null)}function e9(n,a){ri.C(n,a),Ng("preconnect",n,a)}function t9(n,a,s){ri.L(n,a,s);var c=sr;if(c&&n&&a){var f='link[rel="preload"][as="'+an(a)+'"]';a==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+an(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+an(s.imageSizes)+'"]')):f+='[href="'+an(n)+'"]';var g=f;switch(a){case"style":g=or(n);break;case"script":g=lr(n)}dn.has(g)||(n=m({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:n,as:a},s),dn.set(g,n),c.querySelector(f)!==null||a==="style"&&c.querySelector(Os(g))||a==="script"&&c.querySelector(Rs(g))||(a=c.createElement("link"),xt(a,"link",n),lt(a),c.head.appendChild(a)))}}function n9(n,a){ri.m(n,a);var s=sr;if(s&&n){var c=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+an(c)+'"][href="'+an(n)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=lr(n)}if(!dn.has(g)&&(n=m({rel:"modulepreload",href:n},a),dn.set(g,n),s.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Rs(g)))return}c=s.createElement("link"),xt(c,"link",n),lt(c),s.head.appendChild(c)}}}function i9(n,a,s){ri.S(n,a,s);var c=sr;if(c&&n){var f=Ma(c).hoistableStyles,g=or(n);a=a||"default";var w=f.get(g);if(!w){var M={loading:0,preload:null};if(w=c.querySelector(Os(g)))M.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":a},s),(s=dn.get(g))&&hf(n,s);var H=w=c.createElement("link");lt(H),xt(H,"link",n),H._p=new Promise(function(I,Z){H.onload=I,H.onerror=Z}),H.addEventListener("load",function(){M.loading|=1}),H.addEventListener("error",function(){M.loading|=2}),M.loading|=4,Ol(w,a,c)}w={type:"stylesheet",instance:w,count:1,state:M},f.set(g,w)}}}function a9(n,a){ri.X(n,a);var s=sr;if(s&&n){var c=Ma(s).hoistableScripts,f=lr(n),g=c.get(f);g||(g=s.querySelector(Rs(f)),g||(n=m({src:n,async:!0},a),(a=dn.get(f))&&mf(n,a),g=s.createElement("script"),lt(g),xt(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function r9(n,a){ri.M(n,a);var s=sr;if(s&&n){var c=Ma(s).hoistableScripts,f=lr(n),g=c.get(f);g||(g=s.querySelector(Rs(f)),g||(n=m({src:n,async:!0,type:"module"},a),(a=dn.get(f))&&mf(n,a),g=s.createElement("script"),lt(g),xt(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function Bg(n,a,s,c){var f=(f=de.current)?Ll(f):null;if(!f)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=or(s.href),s=Ma(f).hoistableStyles,c=s.get(a),c||(c={type:"style",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=or(s.href);var g=Ma(f).hoistableStyles,w=g.get(n);if(w||(f=f.ownerDocument||f,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,w),(g=f.querySelector(Os(n)))&&!g._p&&(w.instance=g,w.state.loading=5),dn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},dn.set(n,s),g||s9(f,n,s,w.state))),a&&c===null)throw Error(r(528,""));return w}if(a&&c!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=lr(s),s=Ma(f).hoistableScripts,c=s.get(a),c||(c={type:"script",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function or(n){return'href="'+an(n)+'"'}function Os(n){return'link[rel="stylesheet"]['+n+"]"}function $g(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function s9(n,a,s,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),xt(a,"link",s),lt(a),n.head.appendChild(a))}function lr(n){return'[src="'+an(n)+'"]'}function Rs(n){return"script[async]"+n}function Ug(n,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+an(s.href)+'"]');if(c)return a.instance=c,lt(c),c;var f=m({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),lt(c),xt(c,"style",f),Ol(c,s.precedence,n),a.instance=c;case"stylesheet":f=or(s.href);var g=n.querySelector(Os(f));if(g)return a.state.loading|=4,a.instance=g,lt(g),g;c=$g(s),(f=dn.get(f))&&hf(c,f),g=(n.ownerDocument||n).createElement("link"),lt(g);var w=g;return w._p=new Promise(function(M,H){w.onload=M,w.onerror=H}),xt(g,"link",c),a.state.loading|=4,Ol(g,s.precedence,n),a.instance=g;case"script":return g=lr(s.src),(f=n.querySelector(Rs(g)))?(a.instance=f,lt(f),f):(c=s,(f=dn.get(g))&&(c=m({},s),mf(c,f)),n=n.ownerDocument||n,f=n.createElement("script"),lt(f),xt(f,"link",c),n.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Ol(c,s.precedence,n));return a.instance}function Ol(n,a,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,w=0;w<c.length;w++){var M=c[w];if(M.dataset.precedence===a)g=M;else if(g!==f)break}g?g.parentNode.insertBefore(n,g.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(n,a.firstChild))}function hf(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function mf(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Rl=null;function _g(n,a,s){if(Rl===null){var c=new Map,f=Rl=new Map;f.set(s,c)}else f=Rl,c=f.get(s),c||(c=new Map,f.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),f=0;f<s.length;f++){var g=s[f];if(!(g[Gr]||g[St]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var w=g.getAttribute(a)||"";w=n+w;var M=c.get(w);M?M.push(g):c.set(w,[g])}}return c}function Ig(n,a,s){n=n.ownerDocument||n,n.head.insertBefore(s,a==="title"?n.querySelector("head > title"):null)}function o9(n,a,s){if(s===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Gg(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ks=null;function l9(){}function c9(n,a,s){if(ks===null)throw Error(r(475));var c=ks;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=or(s.href),g=n.querySelector(Os(f));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=kl.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=g,lt(g);return}g=n.ownerDocument||n,s=$g(s),(f=dn.get(f))&&hf(s,f),g=g.createElement("link"),lt(g);var w=g;w._p=new Promise(function(M,H){w.onload=M,w.onerror=H}),xt(g,"link",s),a.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=kl.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function u9(){if(ks===null)throw Error(r(475));var n=ks;return n.stylesheets&&n.count===0&&gf(n,n.stylesheets),0<n.count?function(a){var s=setTimeout(function(){if(n.stylesheets&&gf(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(s)}}:null}function kl(){if(this.count--,this.count===0){if(this.stylesheets)gf(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Dl=null;function gf(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Dl=new Map,a.forEach(d9,n),Dl=null,kl.call(n))}function d9(n,a){if(!(a.state.loading&4)){var s=Dl.get(n);if(s)var c=s.get(null);else{s=new Map,Dl.set(n,s);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var w=f[g];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(s.set(w.dataset.precedence,w),c=w)}c&&s.set(null,c)}f=a.instance,w=f.getAttribute("data-precedence"),g=s.get(w)||c,g===c&&s.set(null,f),s.set(w,f),this.count++,c=kl.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),a.state.loading|=4}}var Ds={$$typeof:T,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function f9(n,a,s,c,f,g,w,M){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=du(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.hiddenUpdates=du(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function qg(n,a,s,c,f,g,w,M,H,I,Z,J){return n=new f9(n,a,s,w,M,H,I,J),a=1,g===!0&&(a|=24),g=Gt(3,null,null,a),n.current=g,g.stateNode=n,a=Wu(),a.refCount++,n.pooledCache=a,a.refCount++,g.memoizedState={element:c,isDehydrated:s,cache:a},ed(g),n}function Yg(n){return n?(n=Ba,n):Ba}function Fg(n,a,s,c,f,g){f=Yg(f),c.context===null?c.context=f:c.pendingContext=f,c=vi(a),c.payload={element:s},g=g===void 0?null:g,g!==null&&(c.callback=g),s=wi(n,c,a),s!==null&&(Zt(s,n,a),cs(s,n,a))}function Xg(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<a?s:a}}function xf(n,a){Xg(n,a),(n=n.alternate)&&Xg(n,a)}function Zg(n){if(n.tag===13){var a=Na(n,67108864);a!==null&&Zt(a,n,67108864),xf(n,67108864)}}var Hl=!0;function p9(n,a,s,c){var f=B.T;B.T=null;var g=W.p;try{W.p=2,yf(n,a,s,c)}finally{W.p=g,B.T=f}}function h9(n,a,s,c){var f=B.T;B.T=null;var g=W.p;try{W.p=8,yf(n,a,s,c)}finally{W.p=g,B.T=f}}function yf(n,a,s,c){if(Hl){var f=vf(c);if(f===null)rf(n,a,c,Vl,s),Kg(n,c);else if(g9(f,n,a,s,c))c.stopPropagation();else if(Kg(n,c),a&4&&-1<m9.indexOf(n)){for(;f!==null;){var g=Aa(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var w=Xi(g.pendingLanes);if(w!==0){var M=g;for(M.pendingLanes|=2,M.entangledLanes|=2;w;){var H=1<<31-_t(w);M.entanglements[1]|=H,w&=~H}Dn(g),(De&6)===0&&(yl=jn()+500,As(0))}}break;case 13:M=Na(g,2),M!==null&&Zt(M,g,2),wl(),xf(g,2)}if(g=vf(c),g===null&&rf(n,a,c,Vl,s),g===f)break;f=g}f!==null&&c.stopPropagation()}else rf(n,a,c,null,s)}}function vf(n){return n=Cu(n),wf(n)}var Vl=null;function wf(n){if(Vl=null,n=Ea(n),n!==null){var a=l(n);if(a===null)n=null;else{var s=a.tag;if(s===13){if(n=u(a),n!==null)return n;n=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Vl=n,null}function Wg(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(e8()){case u1:return 2;case d1:return 8;case Mo:case t8:return 32;case f1:return 268435456;default:return 32}default:return 32}}var bf=!1,Di=null,Hi=null,Vi=null,Hs=new Map,Vs=new Map,zi=[],m9="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kg(n,a){switch(n){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":Hs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vs.delete(a.pointerId)}}function zs(n,a,s,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:a,domEventName:s,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},a!==null&&(a=Aa(a),a!==null&&Zg(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),n)}function g9(n,a,s,c,f){switch(a){case"focusin":return Di=zs(Di,n,a,s,c,f),!0;case"dragenter":return Hi=zs(Hi,n,a,s,c,f),!0;case"mouseover":return Vi=zs(Vi,n,a,s,c,f),!0;case"pointerover":var g=f.pointerId;return Hs.set(g,zs(Hs.get(g)||null,n,a,s,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Vs.set(g,zs(Vs.get(g)||null,n,a,s,c,f)),!0}return!1}function Qg(n){var a=Ea(n.target);if(a!==null){var s=l(a);if(s!==null){if(a=s.tag,a===13){if(a=u(s),a!==null){n.blockedOn=a,c8(n.priority,function(){if(s.tag===13){var c=Xt();c=fu(c);var f=Na(s,c);f!==null&&Zt(f,s,c),xf(s,c)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function zl(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var s=vf(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);Su=c,s.target.dispatchEvent(c),Su=null}else return a=Aa(s),a!==null&&Zg(a),n.blockedOn=s,!1;a.shift()}return!0}function Jg(n,a,s){zl(n)&&s.delete(a)}function x9(){bf=!1,Di!==null&&zl(Di)&&(Di=null),Hi!==null&&zl(Hi)&&(Hi=null),Vi!==null&&zl(Vi)&&(Vi=null),Hs.forEach(Jg),Vs.forEach(Jg)}function Pl(n,a){n.blockedOn===a&&(n.blockedOn=null,bf||(bf=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,x9)))}var Nl=null;function e3(n){Nl!==n&&(Nl=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Nl===n&&(Nl=null);for(var a=0;a<n.length;a+=3){var s=n[a],c=n[a+1],f=n[a+2];if(typeof c!="function"){if(wf(c||s)===null)continue;break}var g=Aa(s);g!==null&&(n.splice(a,3),a-=3,vd(g,{pending:!0,data:f,method:s.method,action:c},c,f))}}))}function Ps(n){function a(H){return Pl(H,n)}Di!==null&&Pl(Di,n),Hi!==null&&Pl(Hi,n),Vi!==null&&Pl(Vi,n),Hs.forEach(a),Vs.forEach(a);for(var s=0;s<zi.length;s++){var c=zi[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<zi.length&&(s=zi[0],s.blockedOn===null);)Qg(s),s.blockedOn===null&&zi.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var f=s[c],g=s[c+1],w=f[kt]||null;if(typeof g=="function")w||e3(s);else if(w){var M=null;if(g&&g.hasAttribute("formAction")){if(f=g,w=g[kt]||null)M=w.formAction;else if(wf(f)!==null)continue}else M=w.action;typeof M=="function"?s[c+1]=M:(s.splice(c,3),c-=3),e3(s)}}}function Sf(n){this._internalRoot=n}Bl.prototype.render=Sf.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,c=Xt();Fg(s,c,n,a,null,null)},Bl.prototype.unmount=Sf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;Fg(n.current,2,null,n,null,null),wl(),a[Ta]=null}};function Bl(n){this._internalRoot=n}Bl.prototype.unstable_scheduleHydration=function(n){if(n){var a=x1();n={blockedOn:null,target:n,priority:a};for(var s=0;s<zi.length&&a!==0&&a<zi[s].priority;s++);zi.splice(s,0,n),s===0&&Qg(n)}};var t3=e.version;if(t3!=="19.1.1")throw Error(r(527,t3,"19.1.1"));W.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=p(a),n=n!==null?h(n):null,n=n===null?null:n.stateNode,n};var y9={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Ur=$l.inject(y9),Ut=$l}catch{}}return Bs.createRoot=function(n,a){if(!o(n))throw Error(r(299));var s=!1,c="",f=xm,g=ym,w=vm,M=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(M=a.unstable_transitionCallbacks)),a=qg(n,1,!1,null,null,s,c,f,g,w,M,null),n[Ta]=a.current,af(n),new Sf(a)},Bs.hydrateRoot=function(n,a,s){if(!o(n))throw Error(r(299));var c=!1,f="",g=xm,w=ym,M=vm,H=null,I=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(g=s.onUncaughtError),s.onCaughtError!==void 0&&(w=s.onCaughtError),s.onRecoverableError!==void 0&&(M=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(H=s.unstable_transitionCallbacks),s.formState!==void 0&&(I=s.formState)),a=qg(n,1,!0,a,s??null,c,f,g,w,M,H,I),a.context=Yg(null),s=a.current,c=Xt(),c=fu(c),f=vi(c),f.callback=null,wi(s,f,c),s=c,a.current.lanes=s,Ir(a,s),Dn(a),n[Ta]=a.current,af(n),new Bl(a)},Bs.version="19.1.1",Bs}var d3;function L9(){if(d3)return Tf.exports;d3=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Tf.exports=j9(),Tf.exports}var O9=L9();const R9=Gc(O9);var R=Ep();const Le=Gc(R),f3=w9({__proto__:null,default:Le},[R]);/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var p3="popstate";function k9(t={}){function e(r,o){let{pathname:l,search:u,hash:d}=r.location;return D0("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(r,o){return typeof o=="string"?o:ao(o)}return H9(e,i,null,t)}function Ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function An(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function D9(){return Math.random().toString(36).substring(2,10)}function h3(t,e){return{usr:t.state,key:t.key,idx:e}}function D0(t,e,i=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Dr(e):e,state:i,key:e&&e.key||r||D9()}}function ao({pathname:t="/",search:e="",hash:i=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Dr(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substring(i),t=t.substring(0,i));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function H9(t,e,i,r={}){let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,d="POP",p=null,h=m();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function m(){return(u.state||{idx:null}).idx}function y(){d="POP";let O=m(),j=O==null?null:O-h;h=O,p&&p({action:d,location:A.location,delta:j})}function v(O,j){d="PUSH";let E=D0(A.location,O,j);h=m()+1;let T=h3(E,h),k=A.createHref(E);try{u.pushState(T,"",k)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;o.location.assign(k)}l&&p&&p({action:d,location:A.location,delta:1})}function S(O,j){d="REPLACE";let E=D0(A.location,O,j);h=m();let T=h3(E,h),k=A.createHref(E);u.replaceState(T,"",k),l&&p&&p({action:d,location:A.location,delta:0})}function b(O){return V9(O)}let A={get action(){return d},get location(){return t(o,u)},listen(O){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(p3,y),p=O,()=>{o.removeEventListener(p3,y),p=null}},createHref(O){return e(o,O)},createURL:b,encodeLocation(O){let j=b(O);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:v,replace:S,go(O){return u.go(O)}};return A}function V9(t,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(i,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:ao(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function T5(t,e,i="/"){return z9(t,e,i,!1)}function z9(t,e,i,r){let o=typeof e=="string"?Dr(e):e,l=di(o.pathname||"/",i);if(l==null)return null;let u=E5(t);P9(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let h=X9(l);d=Y9(u[p],h,r)}return d}function E5(t,e=[],i=[],r=""){let o=(l,u,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};p.relativePath.startsWith("/")&&(Ge(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let h=ui([r,p.relativePath]),m=i.concat(p);l.children&&l.children.length>0&&(Ge(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),E5(l.children,e,m,h)),!(l.path==null&&!l.index)&&e.push({path:h,score:G9(h,l.index),routesMeta:m})};return t.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,u);else for(let p of A5(l.path))o(l,u,p)}),e}function A5(t){let e=t.split("/");if(e.length===0)return[];let[i,...r]=e,o=i.endsWith("?"),l=i.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let u=A5(r.join("/")),d=[];return d.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...u),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function P9(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:q9(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var N9=/^:[\w-]+$/,B9=3,$9=2,U9=1,_9=10,I9=-2,m3=t=>t==="*";function G9(t,e){let i=t.split("/"),r=i.length;return i.some(m3)&&(r+=I9),e&&(r+=$9),i.filter(o=>!m3(o)).reduce((o,l)=>o+(N9.test(l)?B9:l===""?U9:_9),r)}function q9(t,e){return t.length===e.length&&t.slice(0,-1).every((r,o)=>r===e[o])?t[t.length-1]-e[e.length-1]:0}function Y9(t,e,i=!1){let{routesMeta:r}=t,o={},l="/",u=[];for(let d=0;d<r.length;++d){let p=r[d],h=d===r.length-1,m=l==="/"?e:e.slice(l.length)||"/",y=Sc({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},m),v=p.route;if(!y&&h&&i&&!r[r.length-1].route.index&&(y=Sc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},m)),!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:ui([l,y.pathname]),pathnameBase:Q9(ui([l,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(l=ui([l,y.pathnameBase]))}return u}function Sc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,r]=F9(t.path,t.caseSensitive,t.end),o=e.match(i);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((h,{paramName:m,isOptional:y},v)=>{if(m==="*"){let b=d[v]||"";u=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const S=d[v];return y&&!S?h[m]=void 0:h[m]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:t}}function F9(t,e=!1,i=!0){An(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function X9(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return An(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function di(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=t.charAt(i);return r&&r!=="/"?null:t.slice(i)||"/"}function Z9(t,e="/"){let{pathname:i,search:r="",hash:o=""}=typeof t=="string"?Dr(t):t;return{pathname:i?i.startsWith("/")?i:W9(i,e):e,search:J9(r),hash:ew(o)}}function W9(t,e){let i=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function Lf(t,e,i,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function K9(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Ap(t){let e=K9(t);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Mp(t,e,i,r=!1){let o;typeof t=="string"?o=Dr(t):(o={...t},Ge(!o.pathname||!o.pathname.includes("?"),Lf("?","pathname","search",o)),Ge(!o.pathname||!o.pathname.includes("#"),Lf("#","pathname","hash",o)),Ge(!o.search||!o.search.includes("#"),Lf("#","search","hash",o)));let l=t===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=i;else{let y=e.length-1;if(!r&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),y-=1;o.pathname=v.join("/")}d=y>=0?e[y]:"/"}let p=Z9(o,d),h=u&&u!=="/"&&u.endsWith("/"),m=(l||u===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(h||m)&&(p.pathname+="/"),p}var ui=t=>t.join("/").replace(/\/\/+/g,"/"),Q9=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),J9=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ew=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var M5=["POST","PUT","PATCH","DELETE"];new Set(M5);var nw=["GET",...M5];new Set(nw);var Hr=R.createContext(null);Hr.displayName="DataRouter";var qc=R.createContext(null);qc.displayName="DataRouterState";R.createContext(!1);var j5=R.createContext({isTransitioning:!1});j5.displayName="ViewTransition";var iw=R.createContext(new Map);iw.displayName="Fetchers";var aw=R.createContext(null);aw.displayName="Await";var Mn=R.createContext(null);Mn.displayName="Navigation";var vo=R.createContext(null);vo.displayName="Location";var yn=R.createContext({outlet:null,matches:[],isDataRoute:!1});yn.displayName="Route";var jp=R.createContext(null);jp.displayName="RouteError";function rw(t,{relative:e}={}){Ge(Vr(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=R.useContext(Mn),{hash:o,pathname:l,search:u}=wo(t,{relative:e}),d=l;return i!=="/"&&(d=l==="/"?i:ui([i,l])),r.createHref({pathname:d,search:u,hash:o})}function Vr(){return R.useContext(vo)!=null}function vn(){return Ge(Vr(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(vo).location}var L5="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function O5(t){R.useContext(Mn).static||R.useLayoutEffect(t)}function Lp(){let{isDataRoute:t}=R.useContext(yn);return t?bw():sw()}function sw(){Ge(Vr(),"useNavigate() may be used only in the context of a <Router> component.");let t=R.useContext(Hr),{basename:e,navigator:i}=R.useContext(Mn),{matches:r}=R.useContext(yn),{pathname:o}=vn(),l=JSON.stringify(Ap(r)),u=R.useRef(!1);return O5(()=>{u.current=!0}),R.useCallback((p,h={})=>{if(An(u.current,L5),!u.current)return;if(typeof p=="number"){i.go(p);return}let m=Mp(p,JSON.parse(l),o,h.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:ui([e,m.pathname])),(h.replace?i.replace:i.push)(m,h.state,h)},[e,i,l,o,t])}var ow=R.createContext(null);function lw(t){let e=R.useContext(yn).outlet;return e&&R.createElement(ow.Provider,{value:t},e)}function cw(){let{matches:t}=R.useContext(yn),e=t[t.length-1];return e?e.params:{}}function wo(t,{relative:e}={}){let{matches:i}=R.useContext(yn),{pathname:r}=vn(),o=JSON.stringify(Ap(i));return R.useMemo(()=>Mp(t,JSON.parse(o),r,e==="path"),[t,o,r,e])}function uw(t,e){return R5(t,e)}function R5(t,e,i,r){var j;Ge(Vr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=R.useContext(Mn),{matches:l}=R.useContext(yn),u=l[l.length-1],d=u?u.params:{},p=u?u.pathname:"/",h=u?u.pathnameBase:"/",m=u&&u.route;{let E=m&&m.path||"";k5(p,!m||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let y=vn(),v;if(e){let E=typeof e=="string"?Dr(e):e;Ge(h==="/"||((j=E.pathname)==null?void 0:j.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${E.pathname}" was given in the \`location\` prop.`),v=E}else v=y;let S=v.pathname||"/",b=S;if(h!=="/"){let E=h.replace(/^\//,"").split("/");b="/"+S.replace(/^\//,"").split("/").slice(E.length).join("/")}let A=T5(t,{pathname:b});An(m||A!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),An(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=mw(A&&A.map(E=>Object.assign({},E,{params:Object.assign({},d,E.params),pathname:ui([h,o.encodeLocation?o.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?h:ui([h,o.encodeLocation?o.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),l,i,r);return e&&O?R.createElement(vo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},O):O}function dw(){let t=ww(),e=tw(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",t),u=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:l},"ErrorBoundary")," or"," ",R.createElement("code",{style:l},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),i?R.createElement("pre",{style:o},i):null,u)}var fw=R.createElement(dw,null),pw=class extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?R.createElement(yn.Provider,{value:this.props.routeContext},R.createElement(jp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function hw({routeContext:t,match:e,children:i}){let r=R.useContext(Hr);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),R.createElement(yn.Provider,{value:t},i)}function mw(t,e=[],i=null,r=null){if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let o=t,l=i==null?void 0:i.errors;if(l!=null){let p=o.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);Ge(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,d=-1;if(i)for(let p=0;p<o.length;p++){let h=o[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=p),h.route.id){let{loaderData:m,errors:y}=i,v=h.route.loader&&!m.hasOwnProperty(h.route.id)&&(!y||y[h.route.id]===void 0);if(h.route.lazy||v){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,h,m)=>{let y,v=!1,S=null,b=null;i&&(y=l&&h.route.id?l[h.route.id]:void 0,S=h.route.errorElement||fw,u&&(d<0&&m===0?(k5("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,b=null):d===m&&(v=!0,b=h.route.hydrateFallbackElement||null)));let A=e.concat(o.slice(0,m+1)),O=()=>{let j;return y?j=S:v?j=b:h.route.Component?j=R.createElement(h.route.Component,null):h.route.element?j=h.route.element:j=p,R.createElement(hw,{match:h,routeContext:{outlet:p,matches:A,isDataRoute:i!=null},children:j})};return i&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?R.createElement(pw,{location:i.location,revalidation:i.revalidation,component:S,error:y,children:O(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):O()},null)}function Op(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gw(t){let e=R.useContext(Hr);return Ge(e,Op(t)),e}function xw(t){let e=R.useContext(qc);return Ge(e,Op(t)),e}function yw(t){let e=R.useContext(yn);return Ge(e,Op(t)),e}function Rp(t){let e=yw(t),i=e.matches[e.matches.length-1];return Ge(i.route.id,`${t} can only be used on routes that contain a unique "id"`),i.route.id}function vw(){return Rp("useRouteId")}function ww(){var r;let t=R.useContext(jp),e=xw("useRouteError"),i=Rp("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[i]}function bw(){let{router:t}=gw("useNavigate"),e=Rp("useNavigate"),i=R.useRef(!1);return O5(()=>{i.current=!0}),R.useCallback(async(o,l={})=>{An(i.current,L5),i.current&&(typeof o=="number"?t.navigate(o):await t.navigate(o,{fromRouteId:e,...l}))},[t,e])}var g3={};function k5(t,e,i){!e&&!g3[t]&&(g3[t]=!0,An(!1,i))}R.memo(Sw);function Sw({routes:t,future:e,state:i}){return R5(t,void 0,i,e)}function Cw({to:t,replace:e,state:i,relative:r}){Ge(Vr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=R.useContext(Mn);An(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=R.useContext(yn),{pathname:u}=vn(),d=Lp(),p=Mp(t,Ap(l),u,r==="path"),h=JSON.stringify(p);return R.useEffect(()=>{d(JSON.parse(h),{replace:e,state:i,relative:r})},[d,h,r,e,i]),null}function Tw(t){return lw(t.context)}function ft(t){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ew({basename:t="/",children:e=null,location:i,navigationType:r="POP",navigator:o,static:l=!1}){Ge(!Vr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=t.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof i=="string"&&(i=Dr(i));let{pathname:p="/",search:h="",hash:m="",state:y=null,key:v="default"}=i,S=R.useMemo(()=>{let b=di(p,u);return b==null?null:{location:{pathname:b,search:h,hash:m,state:y,key:v},navigationType:r}},[u,p,h,m,y,v,r]);return An(S!=null,`<Router basename="${u}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:R.createElement(Mn.Provider,{value:d},R.createElement(vo.Provider,{children:e,value:S}))}function Aw({children:t,location:e}){return uw(H0(t),e)}function H0(t,e=[]){let i=[];return R.Children.forEach(t,(r,o)=>{if(!R.isValidElement(r))return;let l=[...e,o];if(r.type===R.Fragment){i.push.apply(i,H0(r.props.children,l));return}Ge(r.type===ft,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=H0(r.props.children,l)),i.push(u)}),i}var oc="get",lc="application/x-www-form-urlencoded";function Yc(t){return t!=null&&typeof t.tagName=="string"}function Mw(t){return Yc(t)&&t.tagName.toLowerCase()==="button"}function jw(t){return Yc(t)&&t.tagName.toLowerCase()==="form"}function Lw(t){return Yc(t)&&t.tagName.toLowerCase()==="input"}function Ow(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Rw(t,e){return t.button===0&&(!e||e==="_self")&&!Ow(t)}var Ul=null;function kw(){if(Ul===null)try{new FormData(document.createElement("form"),0),Ul=!1}catch{Ul=!0}return Ul}var Dw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Of(t){return t!=null&&!Dw.has(t)?(An(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lc}"`),null):t}function Hw(t,e){let i,r,o,l,u;if(jw(t)){let d=t.getAttribute("action");r=d?di(d,e):null,i=t.getAttribute("method")||oc,o=Of(t.getAttribute("enctype"))||lc,l=new FormData(t)}else if(Mw(t)||Lw(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(r=p?di(p,e):null,i=t.getAttribute("formmethod")||d.getAttribute("method")||oc,o=Of(t.getAttribute("formenctype"))||Of(d.getAttribute("enctype"))||lc,l=new FormData(d,t),!kw()){let{name:h,type:m,value:y}=t;if(m==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,y)}}else{if(Yc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=oc,r=null,o=lc,u=t}return l&&o==="text/plain"&&(u=l,l=void 0),{action:r,method:i.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function kp(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vw(t,e,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&di(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function zw(t,e){if(t.id in e)return e[t.id];try{let i=await import(t.module);return e[t.id]=i,i}catch(i){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Pw(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Nw(t,e,i){let r=await Promise.all(t.map(async o=>{let l=e.routes[o.route.id];if(l){let u=await zw(l,i);return u.links?u.links():[]}return[]}));return _w(r.flat(1).filter(Pw).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function x3(t,e,i,r,o,l){let u=(p,h)=>i[h]?p.route.id!==i[h].route.id:!0,d=(p,h)=>{var m;return i[h].pathname!==p.pathname||((m=i[h].route.path)==null?void 0:m.endsWith("*"))&&i[h].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,h)=>u(p,h)||d(p,h)):l==="data"?e.filter((p,h)=>{var y;let m=r.routes[p.route.id];if(!m||!m.hasLoader)return!1;if(u(p,h)||d(p,h))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Bw(t,e,{includeHydrateFallback:i}={}){return $w(t.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function $w(t){return[...new Set(t)]}function Uw(t){let e={},i=Object.keys(t).sort();for(let r of i)e[r]=t[r];return e}function _w(t,e){let i=new Set;return new Set(e),t.reduce((r,o)=>{let l=JSON.stringify(Uw(o));return i.has(l)||(i.add(l),r.push({key:l,link:o})),r},[])}function D5(){let t=R.useContext(Hr);return kp(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Iw(){let t=R.useContext(qc);return kp(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Dp=R.createContext(void 0);Dp.displayName="FrameworkContext";function H5(){let t=R.useContext(Dp);return kp(t,"You must render this element inside a <HydratedRouter> element"),t}function Gw(t,e){let i=R.useContext(Dp),[r,o]=R.useState(!1),[l,u]=R.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:h,onMouseLeave:m,onTouchStart:y}=e,v=R.useRef(null);R.useEffect(()=>{if(t==="render"&&u(!0),t==="viewport"){let A=j=>{j.forEach(E=>{u(E.isIntersecting)})},O=new IntersectionObserver(A,{threshold:.5});return v.current&&O.observe(v.current),()=>{O.disconnect()}}},[t]),R.useEffect(()=>{if(r){let A=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(A)}}},[r]);let S=()=>{o(!0)},b=()=>{o(!1),u(!1)};return i?t!=="intent"?[l,v,{}]:[l,v,{onFocus:$s(d,S),onBlur:$s(p,b),onMouseEnter:$s(h,S),onMouseLeave:$s(m,b),onTouchStart:$s(y,S)}]:[!1,v,{}]}function $s(t,e){return i=>{t&&t(i),i.defaultPrevented||e(i)}}function qw({page:t,...e}){let{router:i}=D5(),r=R.useMemo(()=>T5(i.routes,t,i.basename),[i.routes,t,i.basename]);return r?R.createElement(Fw,{page:t,matches:r,...e}):null}function Yw(t){let{manifest:e,routeModules:i}=H5(),[r,o]=R.useState([]);return R.useEffect(()=>{let l=!1;return Nw(t,e,i).then(u=>{l||o(u)}),()=>{l=!0}},[t,e,i]),r}function Fw({page:t,matches:e,...i}){let r=vn(),{manifest:o,routeModules:l}=H5(),{basename:u}=D5(),{loaderData:d,matches:p}=Iw(),h=R.useMemo(()=>x3(t,e,p,o,r,"data"),[t,e,p,o,r]),m=R.useMemo(()=>x3(t,e,p,o,r,"assets"),[t,e,p,o,r]),y=R.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let b=new Set,A=!1;if(e.forEach(j=>{var T;let E=o.routes[j.route.id];!E||!E.hasLoader||(!h.some(k=>k.route.id===j.route.id)&&j.route.id in d&&((T=l[j.route.id])!=null&&T.shouldRevalidate)||E.hasClientLoader?A=!0:b.add(j.route.id))}),b.size===0)return[];let O=Vw(t,u,"data");return A&&b.size>0&&O.searchParams.set("_routes",e.filter(j=>b.has(j.route.id)).map(j=>j.route.id).join(",")),[O.pathname+O.search]},[u,d,r,o,h,e,t,l]),v=R.useMemo(()=>Bw(m,o),[m,o]),S=Yw(m);return R.createElement(R.Fragment,null,y.map(b=>R.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),v.map(b=>R.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),S.map(({key:b,link:A})=>R.createElement("link",{key:b,nonce:i.nonce,...A})))}function Xw(...t){return e=>{t.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var V5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{V5&&(window.__reactRouterVersion="7.8.0")}catch{}function Zw({basename:t,children:e,window:i}){let r=R.useRef();r.current==null&&(r.current=k9({window:i,v5Compat:!0}));let o=r.current,[l,u]=R.useState({action:o.action,location:o.location}),d=R.useCallback(p=>{R.startTransition(()=>u(p))},[u]);return R.useLayoutEffect(()=>o.listen(d),[o,d]),R.createElement(Ew,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:o})}var z5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,P5=R.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:o,reloadDocument:l,replace:u,state:d,target:p,to:h,preventScrollReset:m,viewTransition:y,...v},S){let{basename:b}=R.useContext(Mn),A=typeof h=="string"&&z5.test(h),O,j=!1;if(typeof h=="string"&&A&&(O=h,V5))try{let $=new URL(window.location.href),Y=h.startsWith("//")?new URL($.protocol+h):new URL(h),F=di(Y.pathname,b);Y.origin===$.origin&&F!=null?h=F+Y.search+Y.hash:j=!0}catch{An(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let E=rw(h,{relative:o}),[T,k,L]=Gw(r,v),P=Qw(h,{replace:u,state:d,target:p,preventScrollReset:m,relative:o,viewTransition:y});function V($){e&&e($),$.defaultPrevented||P($)}let U=R.createElement("a",{...v,...L,href:O||E,onClick:j||l?e:V,ref:Xw(S,k),target:p,"data-discover":!A&&i==="render"?"true":void 0});return T&&!A?R.createElement(R.Fragment,null,U,R.createElement(qw,{page:E})):U});P5.displayName="Link";var wt=R.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:o=!1,style:l,to:u,viewTransition:d,children:p,...h},m){let y=wo(u,{relative:h.relative}),v=vn(),S=R.useContext(qc),{navigator:b,basename:A}=R.useContext(Mn),O=S!=null&&ib(y)&&d===!0,j=b.encodeLocation?b.encodeLocation(y).pathname:y.pathname,E=v.pathname,T=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(E=E.toLowerCase(),T=T?T.toLowerCase():null,j=j.toLowerCase()),T&&A&&(T=di(T,A)||T);const k=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let L=E===j||!o&&E.startsWith(j)&&E.charAt(k)==="/",P=T!=null&&(T===j||!o&&T.startsWith(j)&&T.charAt(j.length)==="/"),V={isActive:L,isPending:P,isTransitioning:O},U=L?e:void 0,$;typeof r=="function"?$=r(V):$=[r,L?"active":null,P?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let Y=typeof l=="function"?l(V):l;return R.createElement(P5,{...h,"aria-current":U,className:$,ref:m,style:Y,to:u,viewTransition:d},typeof p=="function"?p(V):p)});wt.displayName="NavLink";var Ww=R.forwardRef(({discover:t="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:o,state:l,method:u=oc,action:d,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:y,...v},S)=>{let b=tb(),A=nb(d,{relative:h}),O=u.toLowerCase()==="get"?"get":"post",j=typeof d=="string"&&z5.test(d),E=T=>{if(p&&p(T),T.defaultPrevented)return;T.preventDefault();let k=T.nativeEvent.submitter,L=(k==null?void 0:k.getAttribute("formmethod"))||u;b(k||T.currentTarget,{fetcherKey:e,method:L,navigate:i,replace:o,state:l,relative:h,preventScrollReset:m,viewTransition:y})};return R.createElement("form",{ref:S,method:O,action:A,onSubmit:r?p:E,...v,"data-discover":!j&&t==="render"?"true":void 0})});Ww.displayName="Form";function Kw(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function N5(t){let e=R.useContext(Hr);return Ge(e,Kw(t)),e}function Qw(t,{target:e,replace:i,state:r,preventScrollReset:o,relative:l,viewTransition:u}={}){let d=Lp(),p=vn(),h=wo(t,{relative:l});return R.useCallback(m=>{if(Rw(m,e)){m.preventDefault();let y=i!==void 0?i:ao(p)===ao(h);d(t,{replace:y,state:r,preventScrollReset:o,relative:l,viewTransition:u})}},[p,d,h,i,r,e,t,o,l,u])}var Jw=0,eb=()=>`__${String(++Jw)}__`;function tb(){let{router:t}=N5("useSubmit"),{basename:e}=R.useContext(Mn),i=vw();return R.useCallback(async(r,o={})=>{let{action:l,method:u,encType:d,formData:p,body:h}=Hw(r,e);if(o.navigate===!1){let m=o.fetcherKey||eb();await t.fetch(m,i,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||d,flushSync:o.flushSync})}else await t.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[t,e,i])}function nb(t,{relative:e}={}){let{basename:i}=R.useContext(Mn),r=R.useContext(yn);Ge(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),l={...wo(t||".",{relative:e})},u=vn();if(t==null){l.search=u.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(m=>m==="")){d.delete("index"),p.filter(y=>y).forEach(y=>d.append("index",y));let m=d.toString();l.search=m?`?${m}`:""}}return(!t||t===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(l.pathname=l.pathname==="/"?i:ui([i,l.pathname])),ao(l)}function ib(t,{relative:e}={}){let i=R.useContext(j5);Ge(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=N5("useViewTransitionState"),o=wo(t,{relative:e});if(!i.isTransitioning)return!1;let l=di(i.currentLocation.pathname,r)||i.currentLocation.pathname,u=di(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Sc(o.pathname,u)!=null||Sc(o.pathname,l)!=null}function ab(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function rb(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var sb=function(){function t(i){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(rb(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=ab(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Et="-ms-",Cc="-moz-",Ae="-webkit-",B5="comm",Hp="rule",Vp="decl",ob="@import",$5="@keyframes",lb="@layer",cb=Math.abs,Fc=String.fromCharCode,ub=Object.assign;function db(t,e){return vt(t,0)^45?(((e<<2^vt(t,0))<<2^vt(t,1))<<2^vt(t,2))<<2^vt(t,3):0}function U5(t){return t.trim()}function fb(t,e){return(t=e.exec(t))?t[0]:t}function Me(t,e,i){return t.replace(e,i)}function V0(t,e){return t.indexOf(e)}function vt(t,e){return t.charCodeAt(e)|0}function ro(t,e,i){return t.slice(e,i)}function Hn(t){return t.length}function zp(t){return t.length}function _l(t,e){return e.push(t),t}function pb(t,e){return t.map(e).join("")}var Xc=1,Tr=1,_5=0,$t=0,nt=0,zr="";function Zc(t,e,i,r,o,l,u){return{value:t,root:e,parent:i,type:r,props:o,children:l,line:Xc,column:Tr,length:u,return:""}}function Us(t,e){return ub(Zc("",null,null,"",null,null,0),t,{length:-t.length},e)}function hb(){return nt}function mb(){return nt=$t>0?vt(zr,--$t):0,Tr--,nt===10&&(Tr=1,Xc--),nt}function Qt(){return nt=$t<_5?vt(zr,$t++):0,Tr++,nt===10&&(Tr=1,Xc++),nt}function Bn(){return vt(zr,$t)}function cc(){return $t}function bo(t,e){return ro(zr,t,e)}function so(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I5(t){return Xc=Tr=1,_5=Hn(zr=t),$t=0,[]}function G5(t){return zr="",t}function uc(t){return U5(bo($t-1,z0(t===91?t+2:t===40?t+1:t)))}function gb(t){for(;(nt=Bn())&&nt<33;)Qt();return so(t)>2||so(nt)>3?"":" "}function xb(t,e){for(;--e&&Qt()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return bo(t,cc()+(e<6&&Bn()==32&&Qt()==32))}function z0(t){for(;Qt();)switch(nt){case t:return $t;case 34:case 39:t!==34&&t!==39&&z0(nt);break;case 40:t===41&&z0(t);break;case 92:Qt();break}return $t}function yb(t,e){for(;Qt()&&t+nt!==57;)if(t+nt===84&&Bn()===47)break;return"/*"+bo(e,$t-1)+"*"+Fc(t===47?t:Qt())}function vb(t){for(;!so(Bn());)Qt();return bo(t,$t)}function wb(t){return G5(dc("",null,null,null,[""],t=I5(t),0,[0],t))}function dc(t,e,i,r,o,l,u,d,p){for(var h=0,m=0,y=u,v=0,S=0,b=0,A=1,O=1,j=1,E=0,T="",k=o,L=l,P=r,V=T;O;)switch(b=E,E=Qt()){case 40:if(b!=108&&vt(V,y-1)==58){V0(V+=Me(uc(E),"&","&\f"),"&\f")!=-1&&(j=-1);break}case 34:case 39:case 91:V+=uc(E);break;case 9:case 10:case 13:case 32:V+=gb(b);break;case 92:V+=xb(cc()-1,7);continue;case 47:switch(Bn()){case 42:case 47:_l(bb(yb(Qt(),cc()),e,i),p);break;default:V+="/"}break;case 123*A:d[h++]=Hn(V)*j;case 125*A:case 59:case 0:switch(E){case 0:case 125:O=0;case 59+m:j==-1&&(V=Me(V,/\f/g,"")),S>0&&Hn(V)-y&&_l(S>32?v3(V+";",r,i,y-1):v3(Me(V," ","")+";",r,i,y-2),p);break;case 59:V+=";";default:if(_l(P=y3(V,e,i,h,m,o,d,T,k=[],L=[],y),l),E===123)if(m===0)dc(V,e,P,P,k,l,y,d,L);else switch(v===99&&vt(V,3)===110?100:v){case 100:case 108:case 109:case 115:dc(t,P,P,r&&_l(y3(t,P,P,0,0,o,d,T,o,k=[],y),L),o,L,y,d,r?k:L);break;default:dc(V,P,P,P,[""],L,0,d,L)}}h=m=S=0,A=j=1,T=V="",y=u;break;case 58:y=1+Hn(V),S=b;default:if(A<1){if(E==123)--A;else if(E==125&&A++==0&&mb()==125)continue}switch(V+=Fc(E),E*A){case 38:j=m>0?1:(V+="\f",-1);break;case 44:d[h++]=(Hn(V)-1)*j,j=1;break;case 64:Bn()===45&&(V+=uc(Qt())),v=Bn(),m=y=Hn(T=V+=vb(cc())),E++;break;case 45:b===45&&Hn(V)==2&&(A=0)}}return l}function y3(t,e,i,r,o,l,u,d,p,h,m){for(var y=o-1,v=o===0?l:[""],S=zp(v),b=0,A=0,O=0;b<r;++b)for(var j=0,E=ro(t,y+1,y=cb(A=u[b])),T=t;j<S;++j)(T=U5(A>0?v[j]+" "+E:Me(E,/&\f/g,v[j])))&&(p[O++]=T);return Zc(t,e,i,o===0?Hp:d,p,h,m)}function bb(t,e,i){return Zc(t,e,i,B5,Fc(hb()),ro(t,2,-2),0)}function v3(t,e,i,r){return Zc(t,e,i,Vp,ro(t,0,r),ro(t,r+1,-1),r)}function br(t,e){for(var i="",r=zp(t),o=0;o<r;o++)i+=e(t[o],o,t,e)||"";return i}function Sb(t,e,i,r){switch(t.type){case lb:if(t.children.length)break;case ob:case Vp:return t.return=t.return||t.value;case B5:return"";case $5:return t.return=t.value+"{"+br(t.children,r)+"}";case Hp:t.value=t.props.join(",")}return Hn(i=br(t.children,r))?t.return=t.value+"{"+i+"}":""}function Cb(t){var e=zp(t);return function(i,r,o,l){for(var u="",d=0;d<e;d++)u+=t[d](i,r,o,l)||"";return u}}function Tb(t){return function(e){e.root||(e=e.return)&&t(e)}}function Eb(t){var e=Object.create(null);return function(i){return e[i]===void 0&&(e[i]=t(i)),e[i]}}var Ab=function(e,i,r){for(var o=0,l=0;o=l,l=Bn(),o===38&&l===12&&(i[r]=1),!so(l);)Qt();return bo(e,$t)},Mb=function(e,i){var r=-1,o=44;do switch(so(o)){case 0:o===38&&Bn()===12&&(i[r]=1),e[r]+=Ab($t-1,i,r);break;case 2:e[r]+=uc(o);break;case 4:if(o===44){e[++r]=Bn()===58?"&\f":"",i[r]=e[r].length;break}default:e[r]+=Fc(o)}while(o=Qt());return e},jb=function(e,i){return G5(Mb(I5(e),i))},w3=new WeakMap,Lb=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var i=e.value,r=e.parent,o=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&i.charCodeAt(0)!==58&&!w3.get(r))&&!o){w3.set(e,!0);for(var l=[],u=jb(i,l),d=r.props,p=0,h=0;p<u.length;p++)for(var m=0;m<d.length;m++,h++)e.props[h]=l[p]?u[p].replace(/&\f/g,d[m]):d[m]+" "+u[p]}}},Ob=function(e){if(e.type==="decl"){var i=e.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(e.return="",e.value="")}};function q5(t,e){switch(db(t,e)){case 5103:return Ae+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+t+Cc+t+Et+t+t;case 6828:case 4268:return Ae+t+Et+t+t;case 6165:return Ae+t+Et+"flex-"+t+t;case 5187:return Ae+t+Me(t,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+Et+"flex-$1$2")+t;case 5443:return Ae+t+Et+"flex-item-"+Me(t,/flex-|-self/,"")+t;case 4675:return Ae+t+Et+"flex-line-pack"+Me(t,/align-content|flex-|-self/,"")+t;case 5548:return Ae+t+Et+Me(t,"shrink","negative")+t;case 5292:return Ae+t+Et+Me(t,"basis","preferred-size")+t;case 6060:return Ae+"box-"+Me(t,"-grow","")+Ae+t+Et+Me(t,"grow","positive")+t;case 4554:return Ae+Me(t,/([^-])(transform)/g,"$1"+Ae+"$2")+t;case 6187:return Me(Me(Me(t,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),t,"")+t;case 5495:case 3959:return Me(t,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return Me(Me(t,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+Et+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+t+t;case 4095:case 3583:case 4068:case 2532:return Me(t,/(.+)-inline(.+)/,Ae+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hn(t)-1-e>6)switch(vt(t,e+1)){case 109:if(vt(t,e+4)!==45)break;case 102:return Me(t,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+Cc+(vt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~V0(t,"stretch")?q5(Me(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(vt(t,e+1)!==115)break;case 6444:switch(vt(t,Hn(t)-3-(~V0(t,"!important")&&10))){case 107:return Me(t,":",":"+Ae)+t;case 101:return Me(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ae+(vt(t,14)===45?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+Et+"$2box$3")+t}break;case 5936:switch(vt(t,e+11)){case 114:return Ae+t+Et+Me(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ae+t+Et+Me(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ae+t+Et+Me(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Ae+t+Et+t+t}return t}var Rb=function(e,i,r,o){if(e.length>-1&&!e.return)switch(e.type){case Vp:e.return=q5(e.value,e.length);break;case $5:return br([Us(e,{value:Me(e.value,"@","@"+Ae)})],o);case Hp:if(e.length)return pb(e.props,function(l){switch(fb(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return br([Us(e,{props:[Me(l,/:(read-\w+)/,":"+Cc+"$1")]})],o);case"::placeholder":return br([Us(e,{props:[Me(l,/:(plac\w+)/,":"+Ae+"input-$1")]}),Us(e,{props:[Me(l,/:(plac\w+)/,":"+Cc+"$1")]}),Us(e,{props:[Me(l,/:(plac\w+)/,Et+"input-$1")]})],o)}return""})}},kb=[Rb],Db=function(e){var i=e.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(A){var O=A.getAttribute("data-emotion");O.indexOf(" ")!==-1&&(document.head.appendChild(A),A.setAttribute("data-s",""))})}var o=e.stylisPlugins||kb,l={},u,d=[];u=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(A){for(var O=A.getAttribute("data-emotion").split(" "),j=1;j<O.length;j++)l[O[j]]=!0;d.push(A)});var p,h=[Lb,Ob];{var m,y=[Sb,Tb(function(A){m.insert(A)})],v=Cb(h.concat(o,y)),S=function(O){return br(wb(O),v)};p=function(O,j,E,T){m=E,S(O?O+"{"+j.styles+"}":j.styles),T&&(b.inserted[j.name]=!0)}}var b={key:i,sheet:new sb({key:i,container:u,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:p};return b.sheet.hydrate(d),b},Rf={exports:{}},Re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b3;function Hb(){if(b3)return Re;b3=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,i=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,o=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,u=t?Symbol.for("react.provider"):60109,d=t?Symbol.for("react.context"):60110,p=t?Symbol.for("react.async_mode"):60111,h=t?Symbol.for("react.concurrent_mode"):60111,m=t?Symbol.for("react.forward_ref"):60112,y=t?Symbol.for("react.suspense"):60113,v=t?Symbol.for("react.suspense_list"):60120,S=t?Symbol.for("react.memo"):60115,b=t?Symbol.for("react.lazy"):60116,A=t?Symbol.for("react.block"):60121,O=t?Symbol.for("react.fundamental"):60117,j=t?Symbol.for("react.responder"):60118,E=t?Symbol.for("react.scope"):60119;function T(L){if(typeof L=="object"&&L!==null){var P=L.$$typeof;switch(P){case e:switch(L=L.type,L){case p:case h:case r:case l:case o:case y:return L;default:switch(L=L&&L.$$typeof,L){case d:case m:case b:case S:case u:return L;default:return P}}case i:return P}}}function k(L){return T(L)===h}return Re.AsyncMode=p,Re.ConcurrentMode=h,Re.ContextConsumer=d,Re.ContextProvider=u,Re.Element=e,Re.ForwardRef=m,Re.Fragment=r,Re.Lazy=b,Re.Memo=S,Re.Portal=i,Re.Profiler=l,Re.StrictMode=o,Re.Suspense=y,Re.isAsyncMode=function(L){return k(L)||T(L)===p},Re.isConcurrentMode=k,Re.isContextConsumer=function(L){return T(L)===d},Re.isContextProvider=function(L){return T(L)===u},Re.isElement=function(L){return typeof L=="object"&&L!==null&&L.$$typeof===e},Re.isForwardRef=function(L){return T(L)===m},Re.isFragment=function(L){return T(L)===r},Re.isLazy=function(L){return T(L)===b},Re.isMemo=function(L){return T(L)===S},Re.isPortal=function(L){return T(L)===i},Re.isProfiler=function(L){return T(L)===l},Re.isStrictMode=function(L){return T(L)===o},Re.isSuspense=function(L){return T(L)===y},Re.isValidElementType=function(L){return typeof L=="string"||typeof L=="function"||L===r||L===h||L===l||L===o||L===y||L===v||typeof L=="object"&&L!==null&&(L.$$typeof===b||L.$$typeof===S||L.$$typeof===u||L.$$typeof===d||L.$$typeof===m||L.$$typeof===O||L.$$typeof===j||L.$$typeof===E||L.$$typeof===A)},Re.typeOf=T,Re}var S3;function Vb(){return S3||(S3=1,Rf.exports=Hb()),Rf.exports}var kf,C3;function zb(){if(C3)return kf;C3=1;var t=Vb(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[t.ForwardRef]=r,l[t.Memo]=o;function u(b){return t.isMemo(b)?o:l[b.$$typeof]||e}var d=Object.defineProperty,p=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,v=Object.prototype;function S(b,A,O){if(typeof A!="string"){if(v){var j=y(A);j&&j!==v&&S(b,j,O)}var E=p(A);h&&(E=E.concat(h(A)));for(var T=u(b),k=u(A),L=0;L<E.length;++L){var P=E[L];if(!i[P]&&!(O&&O[P])&&!(k&&k[P])&&!(T&&T[P])){var V=m(A,P);try{d(b,P,V)}catch{}}}}return b}return kf=S,kf}zb();var Pb=!0;function Nb(t,e,i){var r="";return i.split(" ").forEach(function(o){t[o]!==void 0?e.push(t[o]+";"):o&&(r+=o+" ")}),r}var Y5=function(e,i,r){var o=e.key+"-"+i.name;(r===!1||Pb===!1)&&e.registered[o]===void 0&&(e.registered[o]=i.styles)},F5=function(e,i,r){Y5(e,i,r);var o=e.key+"-"+i.name;if(e.inserted[i.name]===void 0){var l=i;do e.insert(i===l?"."+o:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function Bb(t){for(var e=0,i,r=0,o=t.length;o>=4;++r,o-=4)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,e=(i&65535)*1540483477+((i>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var $b={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ub=/[A-Z]|^ms/g,_b=/_EMO_([^_]+?)_([^]*?)_EMO_/g,X5=function(e){return e.charCodeAt(1)===45},T3=function(e){return e!=null&&typeof e!="boolean"},Df=Eb(function(t){return X5(t)?t:t.replace(Ub,"-$&").toLowerCase()}),E3=function(e,i){switch(e){case"animation":case"animationName":if(typeof i=="string")return i.replace(_b,function(r,o,l){return Vn={name:o,styles:l,next:Vn},o})}return $b[e]!==1&&!X5(e)&&typeof i=="number"&&i!==0?i+"px":i};function oo(t,e,i){if(i==null)return"";var r=i;if(r.__emotion_styles!==void 0)return r;switch(typeof i){case"boolean":return"";case"object":{var o=i;if(o.anim===1)return Vn={name:o.name,styles:o.styles,next:Vn},o.name;var l=i;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)Vn={name:u.name,styles:u.styles,next:Vn},u=u.next;var d=l.styles+";";return d}return Ib(t,e,i)}case"function":{if(t!==void 0){var p=Vn,h=i(t);return Vn=p,oo(t,e,h)}break}}var m=i;return m}function Ib(t,e,i){var r="";if(Array.isArray(i))for(var o=0;o<i.length;o++)r+=oo(t,e,i[o])+";";else for(var l in i){var u=i[l];if(typeof u!="object"){var d=u;T3(d)&&(r+=Df(l)+":"+E3(l,d)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&e==null)for(var p=0;p<u.length;p++)T3(u[p])&&(r+=Df(l)+":"+E3(l,u[p])+";");else{var h=oo(t,e,u);switch(l){case"animation":case"animationName":{r+=Df(l)+":"+h+";";break}default:r+=l+"{"+h+"}"}}}return r}var A3=/label:\s*([^\s;{]+)\s*(;|$)/g,Vn;function Pp(t,e,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,o="";Vn=void 0;var l=t[0];if(l==null||l.raw===void 0)r=!1,o+=oo(i,e,l);else{var u=l;o+=u[0]}for(var d=1;d<t.length;d++)if(o+=oo(i,e,t[d]),r){var p=l;o+=p[d]}A3.lastIndex=0;for(var h="",m;(m=A3.exec(o))!==null;)h+="-"+m[1];var y=Bb(o)+h;return{name:y,styles:o,next:Vn}}var Gb=function(e){return e()},Z5=f3.useInsertionEffect?f3.useInsertionEffect:!1,qb=Z5||Gb,M3=Z5||R.useLayoutEffect,W5=R.createContext(typeof HTMLElement<"u"?Db({key:"css"}):null);W5.Provider;var K5=function(e){return R.forwardRef(function(i,r){var o=R.useContext(W5);return e(i,o,r)})},Q5=R.createContext({}),Np={}.hasOwnProperty,P0="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Yb=function(e,i){var r={};for(var o in i)Np.call(i,o)&&(r[o]=i[o]);return r[P0]=e,r},Fb=function(e){var i=e.cache,r=e.serialized,o=e.isStringTag;return Y5(i,r,o),qb(function(){return F5(i,r,o)}),null},Xb=K5(function(t,e,i){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var o=t[P0],l=[r],u="";typeof t.className=="string"?u=Nb(e.registered,l,t.className):t.className!=null&&(u=t.className+" ");var d=Pp(l,void 0,R.useContext(Q5));u+=e.key+"-"+d.name;var p={};for(var h in t)Np.call(t,h)&&h!=="css"&&h!==P0&&(p[h]=t[h]);return p.className=u,i&&(p.ref=i),R.createElement(R.Fragment,null,R.createElement(Fb,{cache:e,serialized:d,isStringTag:typeof o=="string"}),R.createElement(o,p))}),Zb=Xb,j3=function(e,i){var r=arguments;if(i==null||!Np.call(i,"css"))return R.createElement.apply(void 0,r);var o=r.length,l=new Array(o);l[0]=Zb,l[1]=Yb(e,i);for(var u=2;u<o;u++)l[u]=r[u];return R.createElement.apply(null,l)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(j3||(j3={}));var Wb=K5(function(t,e){var i=t.styles,r=Pp([i],void 0,R.useContext(Q5)),o=R.useRef();return M3(function(){var l=e.key+"-global",u=new e.sheet.constructor({key:l,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),d=!1,p=document.querySelector('style[data-emotion="'+l+" "+r.name+'"]');return e.sheet.tags.length&&(u.before=e.sheet.tags[0]),p!==null&&(d=!0,p.setAttribute("data-emotion",l),u.hydrate([p])),o.current=[u,d],function(){u.flush()}},[e]),M3(function(){var l=o.current,u=l[0],d=l[1];if(d){l[1]=!1;return}if(r.next!==void 0&&F5(e,r.next,!0),u.tags.length){var p=u.tags[u.tags.length-1].nextElementSibling;u.before=p,u.flush()}e.insert("",r,u,!1)},[e,r.name]),null});function Kb(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return Pp(e)}const Qb="/assets/Geist-Regular-BCrLS6HJ.ttf",Jb="/assets/Geist-Medium-C6X8vKEc.ttf",eS="/assets/BebasNeue-Regular-D2CONTwO.ttf",tS="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",nS=Kb`
  /* Font Awesome */
  @font-face {
    font-family: 'Geist Regular';
    src: url(${Qb}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Додано для кращого відображення шрифтів */
  }

  /* Helvetica */
  @font-face {
    font-family: 'Geist Medium';
    src: url(${Jb}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bebas Neue Regular';
    src: url(${eS}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${tS}) format('truetype');
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
    --black-500: rgba(85, 84, 84, 1);
    --black-100: rgba(33, 33, 33, 0.1);
    --gray: #dbdbd8;
    --black-300: rgba(33, 33, 33, 0.3);
    --black-800: rgba(0, 0, 0, 0.8);
    --white-800: rgba(255, 255, 255, 0.8);
    --blue-350: #c6e6ff;
    --blue-450: #6abcff;
    --purple-400: #a66affff;

    /* Fonts */
    --font-family: 'Geist Regular', sans-serif;
    --second-family: 'Bebas Neue Regular', sans-serif;
    --third-family: 'Inter', sans-serif;
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
    padding: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px)
      env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px);
  }

  body.modal-open {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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

  ul,
  li {
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

  html,
  body {
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

  main,
  .container,
  #root {
    overflow-x: clip;
    width: 100%;
  }

  input,
  textarea,
  button {
    height: auto;
    font-size: 16px;
    font-family: inherit;
    border-radius: 0; /* Фікс для iOS */
    appearance: none; /* Видаляє стандартні стилі для інпутів на iOS */
  }

  /* Особливі фікси для iOS */
  input[type='text'],
  input[type='email'],
  input[type='password'],
  input[type='search'],
  input[type='tel'],
  input[type='url'],
  textarea {
    -webkit-appearance: none;
  }

  /* Фікс для масштабування при фокусі на інпут на iOS */
  @media screen and (max-width: 767px) {
    input,
    textarea,
    select {
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
    0% {
      background-position: center bottom;
    }
    99.99% {
      background-position: left bottom;
    }
    100% {
      background-position: right bottom;
    }
  }

  @keyframes move {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-100%);
    }
  }

  /* Додаткові фікси для різних платформ */
  /* Фікс для висоти 100vh на мобільних пристроях */
  @supports (-webkit-touch-callout: none) {
    body {
      height: -webkit-fill-available;
    }
  }

  /* Фікс для Safari */
  _::-webkit-full-page-media,
  _:future,
  :root .safari_only {
    @supports (-webkit-touch-callout: none) {
      /* Специфічні стилі для Safari */
    }
  }
`;var Nt=function(){return Nt=Object.assign||function(e){for(var i,r=1,o=arguments.length;r<o;r++){i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},Nt.apply(this,arguments)};function lo(t,e,i){if(i||arguments.length===2)for(var r=0,o=e.length,l;r<o;r++)(l||!(r in e))&&(l||(l=Array.prototype.slice.call(e,0,r)),l[r]=e[r]);return t.concat(l||Array.prototype.slice.call(e))}var $e="-ms-",Ws="-moz-",ke="-webkit-",J5="comm",Wc="rule",Bp="decl",iS="@import",e6="@keyframes",aS="@layer",t6=Math.abs,$p=String.fromCharCode,N0=Object.assign;function rS(t,e){return ht(t,0)^45?(((e<<2^ht(t,0))<<2^ht(t,1))<<2^ht(t,2))<<2^ht(t,3):0}function n6(t){return t.trim()}function li(t,e){return(t=e.exec(t))?t[0]:t}function xe(t,e,i){return t.replace(e,i)}function fc(t,e,i){return t.indexOf(e,i)}function ht(t,e){return t.charCodeAt(e)|0}function Er(t,e,i){return t.slice(e,i)}function zn(t){return t.length}function i6(t){return t.length}function Xs(t,e){return e.push(t),t}function sS(t,e){return t.map(e).join("")}function L3(t,e){return t.filter(function(i){return!li(i,e)})}var Kc=1,Ar=1,a6=0,gn=0,it=0,Pr="";function Qc(t,e,i,r,o,l,u,d){return{value:t,root:e,parent:i,type:r,props:o,children:l,line:Kc,column:Ar,length:u,return:"",siblings:d}}function $i(t,e){return N0(Qc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function cr(t){for(;t.root;)t=$i(t.root,{children:[t]});Xs(t,t.siblings)}function oS(){return it}function lS(){return it=gn>0?ht(Pr,--gn):0,Ar--,it===10&&(Ar=1,Kc--),it}function Tn(){return it=gn<a6?ht(Pr,gn++):0,Ar++,it===10&&(Ar=1,Kc++),it}function xa(){return ht(Pr,gn)}function pc(){return gn}function Jc(t,e){return Er(Pr,t,e)}function B0(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cS(t){return Kc=Ar=1,a6=zn(Pr=t),gn=0,[]}function uS(t){return Pr="",t}function Hf(t){return n6(Jc(gn-1,$0(t===91?t+2:t===40?t+1:t)))}function dS(t){for(;(it=xa())&&it<33;)Tn();return B0(t)>2||B0(it)>3?"":" "}function fS(t,e){for(;--e&&Tn()&&!(it<48||it>102||it>57&&it<65||it>70&&it<97););return Jc(t,pc()+(e<6&&xa()==32&&Tn()==32))}function $0(t){for(;Tn();)switch(it){case t:return gn;case 34:case 39:t!==34&&t!==39&&$0(it);break;case 40:t===41&&$0(t);break;case 92:Tn();break}return gn}function pS(t,e){for(;Tn()&&t+it!==57;)if(t+it===84&&xa()===47)break;return"/*"+Jc(e,gn-1)+"*"+$p(t===47?t:Tn())}function hS(t){for(;!B0(xa());)Tn();return Jc(t,gn)}function mS(t){return uS(hc("",null,null,null,[""],t=cS(t),0,[0],t))}function hc(t,e,i,r,o,l,u,d,p){for(var h=0,m=0,y=u,v=0,S=0,b=0,A=1,O=1,j=1,E=0,T="",k=o,L=l,P=r,V=T;O;)switch(b=E,E=Tn()){case 40:if(b!=108&&ht(V,y-1)==58){fc(V+=xe(Hf(E),"&","&\f"),"&\f",t6(h?d[h-1]:0))!=-1&&(j=-1);break}case 34:case 39:case 91:V+=Hf(E);break;case 9:case 10:case 13:case 32:V+=dS(b);break;case 92:V+=fS(pc()-1,7);continue;case 47:switch(xa()){case 42:case 47:Xs(gS(pS(Tn(),pc()),e,i,p),p);break;default:V+="/"}break;case 123*A:d[h++]=zn(V)*j;case 125*A:case 59:case 0:switch(E){case 0:case 125:O=0;case 59+m:j==-1&&(V=xe(V,/\f/g,"")),S>0&&zn(V)-y&&Xs(S>32?R3(V+";",r,i,y-1,p):R3(xe(V," ","")+";",r,i,y-2,p),p);break;case 59:V+=";";default:if(Xs(P=O3(V,e,i,h,m,o,d,T,k=[],L=[],y,l),l),E===123)if(m===0)hc(V,e,P,P,k,l,y,d,L);else switch(v===99&&ht(V,3)===110?100:v){case 100:case 108:case 109:case 115:hc(t,P,P,r&&Xs(O3(t,P,P,0,0,o,d,T,o,k=[],y,L),L),o,L,y,d,r?k:L);break;default:hc(V,P,P,P,[""],L,0,d,L)}}h=m=S=0,A=j=1,T=V="",y=u;break;case 58:y=1+zn(V),S=b;default:if(A<1){if(E==123)--A;else if(E==125&&A++==0&&lS()==125)continue}switch(V+=$p(E),E*A){case 38:j=m>0?1:(V+="\f",-1);break;case 44:d[h++]=(zn(V)-1)*j,j=1;break;case 64:xa()===45&&(V+=Hf(Tn())),v=xa(),m=y=zn(T=V+=hS(pc())),E++;break;case 45:b===45&&zn(V)==2&&(A=0)}}return l}function O3(t,e,i,r,o,l,u,d,p,h,m,y){for(var v=o-1,S=o===0?l:[""],b=i6(S),A=0,O=0,j=0;A<r;++A)for(var E=0,T=Er(t,v+1,v=t6(O=u[A])),k=t;E<b;++E)(k=n6(O>0?S[E]+" "+T:xe(T,/&\f/g,S[E])))&&(p[j++]=k);return Qc(t,e,i,o===0?Wc:d,p,h,m,y)}function gS(t,e,i,r){return Qc(t,e,i,J5,$p(oS()),Er(t,2,-2),0,r)}function R3(t,e,i,r,o){return Qc(t,e,i,Bp,Er(t,0,r),Er(t,r+1,-1),r,o)}function r6(t,e,i){switch(rS(t,e)){case 5103:return ke+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+t+t;case 4789:return Ws+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+t+Ws+t+$e+t+t;case 5936:switch(ht(t,e+11)){case 114:return ke+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ke+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ke+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ke+t+$e+t+t;case 6165:return ke+t+$e+"flex-"+t+t;case 5187:return ke+t+xe(t,/(\w+).+(:[^]+)/,ke+"box-$1$2"+$e+"flex-$1$2")+t;case 5443:return ke+t+$e+"flex-item-"+xe(t,/flex-|-self/g,"")+(li(t,/flex-|baseline/)?"":$e+"grid-row-"+xe(t,/flex-|-self/g,""))+t;case 4675:return ke+t+$e+"flex-line-pack"+xe(t,/align-content|flex-|-self/g,"")+t;case 5548:return ke+t+$e+xe(t,"shrink","negative")+t;case 5292:return ke+t+$e+xe(t,"basis","preferred-size")+t;case 6060:return ke+"box-"+xe(t,"-grow","")+ke+t+$e+xe(t,"grow","positive")+t;case 4554:return ke+xe(t,/([^-])(transform)/g,"$1"+ke+"$2")+t;case 6187:return xe(xe(xe(t,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),t,"")+t;case 5495:case 3959:return xe(t,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return xe(xe(t,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+$e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+t+t;case 4200:if(!li(t,/flex-|baseline/))return $e+"grid-column-align"+Er(t,e)+t;break;case 2592:case 3360:return $e+xe(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(r,o){return e=o,li(r.props,/grid-\w+-end/)})?~fc(t+(i=i[e].value),"span",0)?t:$e+xe(t,"-start","")+t+$e+"grid-row-span:"+(~fc(i,"span",0)?li(i,/\d+/):+li(i,/\d+/)-+li(t,/\d+/))+";":$e+xe(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(r){return li(r.props,/grid-\w+-start/)})?t:$e+xe(xe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return xe(t,/(.+)-inline(.+)/,ke+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zn(t)-1-e>6)switch(ht(t,e+1)){case 109:if(ht(t,e+4)!==45)break;case 102:return xe(t,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+Ws+(ht(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~fc(t,"stretch",0)?r6(xe(t,"stretch","fill-available"),e,i)+t:t}break;case 5152:case 5920:return xe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,u,d,p,h){return $e+o+":"+l+h+(u?$e+o+"-span:"+(d?p:+p-+l)+h:"")+t});case 4949:if(ht(t,e+6)===121)return xe(t,":",":"+ke)+t;break;case 6444:switch(ht(t,ht(t,14)===45?18:11)){case 120:return xe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(ht(t,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+$e+"$2box$3")+t;case 100:return xe(t,":",":"+$e)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return xe(t,"scroll-","scroll-snap-")+t}return t}function Tc(t,e){for(var i="",r=0;r<t.length;r++)i+=e(t[r],r,t,e)||"";return i}function xS(t,e,i,r){switch(t.type){case aS:if(t.children.length)break;case iS:case Bp:return t.return=t.return||t.value;case J5:return"";case e6:return t.return=t.value+"{"+Tc(t.children,r)+"}";case Wc:if(!zn(t.value=t.props.join(",")))return""}return zn(i=Tc(t.children,r))?t.return=t.value+"{"+i+"}":""}function yS(t){var e=i6(t);return function(i,r,o,l){for(var u="",d=0;d<e;d++)u+=t[d](i,r,o,l)||"";return u}}function vS(t){return function(e){e.root||(e=e.return)&&t(e)}}function wS(t,e,i,r){if(t.length>-1&&!t.return)switch(t.type){case Bp:t.return=r6(t.value,t.length,i);return;case e6:return Tc([$i(t,{value:xe(t.value,"@","@"+ke)})],r);case Wc:if(t.length)return sS(i=t.props,function(o){switch(li(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cr($i(t,{props:[xe(o,/:(read-\w+)/,":"+Ws+"$1")]})),cr($i(t,{props:[o]})),N0(t,{props:L3(i,r)});break;case"::placeholder":cr($i(t,{props:[xe(o,/:(plac\w+)/,":"+ke+"input-$1")]})),cr($i(t,{props:[xe(o,/:(plac\w+)/,":"+Ws+"$1")]})),cr($i(t,{props:[xe(o,/:(plac\w+)/,$e+"input-$1")]})),cr($i(t,{props:[o]})),N0(t,{props:L3(i,r)});break}return""})}}var bS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wt={},Mr=typeof process<"u"&&Wt!==void 0&&(Wt.REACT_APP_SC_ATTR||Wt.SC_ATTR)||"data-styled",s6="active",o6="data-styled-version",eu="6.1.19",Up=`/*!sc*/
`,Ec=typeof window<"u"&&typeof document<"u",SS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==""?Wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.SC_DISABLE_SPEEDY!==void 0&&Wt.SC_DISABLE_SPEEDY!==""&&Wt.SC_DISABLE_SPEEDY!=="false"&&Wt.SC_DISABLE_SPEEDY),tu=Object.freeze([]),jr=Object.freeze({});function CS(t,e,i){return i===void 0&&(i=jr),t.theme!==i.theme&&t.theme||e||i.theme}var l6=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),TS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ES=/(^-|-$)/g;function k3(t){return t.replace(TS,"-").replace(ES,"")}var AS=/(a)(d)/gi,Il=52,D3=function(t){return String.fromCharCode(t+(t>25?39:97))};function U0(t){var e,i="";for(e=Math.abs(t);e>Il;e=e/Il|0)i=D3(e%Il)+i;return(D3(e%Il)+i).replace(AS,"$1-$2")}var Vf,c6=5381,mr=function(t,e){for(var i=e.length;i;)t=33*t^e.charCodeAt(--i);return t},u6=function(t){return mr(c6,t)};function d6(t){return U0(u6(t)>>>0)}function MS(t){return t.displayName||t.name||"Component"}function zf(t){return typeof t=="string"&&!0}var f6=typeof Symbol=="function"&&Symbol.for,p6=f6?Symbol.for("react.memo"):60115,jS=f6?Symbol.for("react.forward_ref"):60112,LS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},OS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},h6={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},RS=((Vf={})[jS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vf[p6]=h6,Vf);function H3(t){return("type"in(e=t)&&e.type.$$typeof)===p6?h6:"$$typeof"in t?RS[t.$$typeof]:LS;var e}var kS=Object.defineProperty,DS=Object.getOwnPropertyNames,V3=Object.getOwnPropertySymbols,HS=Object.getOwnPropertyDescriptor,VS=Object.getPrototypeOf,z3=Object.prototype;function m6(t,e,i){if(typeof e!="string"){if(z3){var r=VS(e);r&&r!==z3&&m6(t,r,i)}var o=DS(e);V3&&(o=o.concat(V3(e)));for(var l=H3(t),u=H3(e),d=0;d<o.length;++d){var p=o[d];if(!(p in OS||i&&i[p]||u&&p in u||l&&p in l)){var h=HS(e,p);try{kS(t,p,h)}catch{}}}}return t}function Lr(t){return typeof t=="function"}function _p(t){return typeof t=="object"&&"styledComponentId"in t}function ha(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function _0(t,e){if(t.length===0)return"";for(var i=t[0],r=1;r<t.length;r++)i+=t[r];return i}function co(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function I0(t,e,i){if(i===void 0&&(i=!1),!i&&!co(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=I0(t[r],e[r]);else if(co(e))for(var r in e)t[r]=I0(t[r],e[r]);return t}function Ip(t,e){Object.defineProperty(t,"toString",{value:e})}function So(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var zS=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var i=0,r=0;r<e;r++)i+=this.groupSizes[r];return i},t.prototype.insertRules=function(e,i){if(e>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;e>=l;)if((l<<=1)<0)throw So(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),p=(u=0,i.length);u<p;u++)this.tag.insertRule(d,i[u])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var i=this.groupSizes[e],r=this.indexOfGroup(e),o=r+i;this.groupSizes[e]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var i="";if(e>=this.length||this.groupSizes[e]===0)return i;for(var r=this.groupSizes[e],o=this.indexOfGroup(e),l=o+r,u=o;u<l;u++)i+="".concat(this.tag.getRule(u)).concat(Up);return i},t}(),mc=new Map,Ac=new Map,gc=1,Gl=function(t){if(mc.has(t))return mc.get(t);for(;Ac.has(gc);)gc++;var e=gc++;return mc.set(t,e),Ac.set(e,t),e},PS=function(t,e){gc=e+1,mc.set(t,e),Ac.set(e,t)},NS="style[".concat(Mr,"][").concat(o6,'="').concat(eu,'"]'),BS=new RegExp("^".concat(Mr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$S=function(t,e,i){for(var r,o=i.split(","),l=0,u=o.length;l<u;l++)(r=o[l])&&t.registerName(e,r)},US=function(t,e){for(var i,r=((i=e.textContent)!==null&&i!==void 0?i:"").split(Up),o=[],l=0,u=r.length;l<u;l++){var d=r[l].trim();if(d){var p=d.match(BS);if(p){var h=0|parseInt(p[1],10),m=p[2];h!==0&&(PS(m,h),$S(t,m,p[3]),t.getTag().insertRules(h,o)),o.length=0}else o.push(d)}}},P3=function(t){for(var e=document.querySelectorAll(NS),i=0,r=e.length;i<r;i++){var o=e[i];o&&o.getAttribute(Mr)!==s6&&(US(t,o),o.parentNode&&o.parentNode.removeChild(o))}};function _S(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var g6=function(t){var e=document.head,i=t||e,r=document.createElement("style"),o=function(d){var p=Array.from(d.querySelectorAll("style[".concat(Mr,"]")));return p[p.length-1]}(i),l=o!==void 0?o.nextSibling:null;r.setAttribute(Mr,s6),r.setAttribute(o6,eu);var u=_S();return u&&r.setAttribute("nonce",u),i.insertBefore(r,l),r},IS=function(){function t(e){this.element=g6(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var u=r[o];if(u.ownerNode===i)return u}throw So(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,i){try{return this.sheet.insertRule(i,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var i=this.sheet.cssRules[e];return i&&i.cssText?i.cssText:""},t}(),GS=function(){function t(e){this.element=g6(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,i){if(e<=this.length&&e>=0){var r=document.createTextNode(i);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),qS=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,i){return e<=this.length&&(this.rules.splice(e,0,i),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),N3=Ec,YS={isServer:!Ec,useCSSOMInjection:!SS},x6=function(){function t(e,i,r){e===void 0&&(e=jr),i===void 0&&(i={});var o=this;this.options=Nt(Nt({},YS),e),this.gs=i,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Ec&&N3&&(N3=!1,P3(this)),Ip(this,function(){return function(l){for(var u=l.getTag(),d=u.length,p="",h=function(y){var v=function(j){return Ac.get(j)}(y);if(v===void 0)return"continue";var S=l.names.get(v),b=u.getGroup(y);if(S===void 0||!S.size||b.length===0)return"continue";var A="".concat(Mr,".g").concat(y,'[id="').concat(v,'"]'),O="";S!==void 0&&S.forEach(function(j){j.length>0&&(O+="".concat(j,","))}),p+="".concat(b).concat(A,'{content:"').concat(O,'"}').concat(Up)},m=0;m<d;m++)h(m);return p}(o)})}return t.registerId=function(e){return Gl(e)},t.prototype.rehydrate=function(){!this.server&&Ec&&P3(this)},t.prototype.reconstructWithOptions=function(e,i){return i===void 0&&(i=!0),new t(Nt(Nt({},this.options),e),this.gs,i&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(i){var r=i.useCSSOMInjection,o=i.target;return i.isServer?new qS(o):r?new IS(o):new GS(o)}(this.options),new zS(e)));var e},t.prototype.hasNameForId=function(e,i){return this.names.has(e)&&this.names.get(e).has(i)},t.prototype.registerName=function(e,i){if(Gl(e),this.names.has(e))this.names.get(e).add(i);else{var r=new Set;r.add(i),this.names.set(e,r)}},t.prototype.insertRules=function(e,i,r){this.registerName(e,i),this.getTag().insertRules(Gl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Gl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),FS=/&/g,XS=/^\s*\/\/.*$/gm;function y6(t,e){return t.map(function(i){return i.type==="rule"&&(i.value="".concat(e," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(e," ")),i.props=i.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=y6(i.children,e)),i})}function ZS(t){var e,i,r,o=jr,l=o.options,u=l===void 0?jr:l,d=o.plugins,p=d===void 0?tu:d,h=function(v,S,b){return b.startsWith(i)&&b.endsWith(i)&&b.replaceAll(i,"").length>0?".".concat(e):v},m=p.slice();m.push(function(v){v.type===Wc&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(FS,i).replace(r,h))}),u.prefix&&m.push(wS),m.push(xS);var y=function(v,S,b,A){S===void 0&&(S=""),b===void 0&&(b=""),A===void 0&&(A="&"),e=A,i=S,r=new RegExp("\\".concat(i,"\\b"),"g");var O=v.replace(XS,""),j=mS(b||S?"".concat(b," ").concat(S," { ").concat(O," }"):O);u.namespace&&(j=y6(j,u.namespace));var E=[];return Tc(j,yS(m.concat(vS(function(T){return E.push(T)})))),E};return y.hash=p.length?p.reduce(function(v,S){return S.name||So(15),mr(v,S.name)},c6).toString():"",y}var WS=new x6,G0=ZS(),v6=Le.createContext({shouldForwardProp:void 0,styleSheet:WS,stylis:G0});v6.Consumer;Le.createContext(void 0);function B3(){return R.useContext(v6)}var w6=function(){function t(e,i){var r=this;this.inject=function(o,l){l===void 0&&(l=G0);var u=r.name+l.hash;o.hasNameForId(r.id,u)||o.insertRules(r.id,u,l(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=i,Ip(this,function(){throw So(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=G0),this.name+e.hash},t}(),KS=function(t){return t>="A"&&t<="Z"};function $3(t){for(var e="",i=0;i<t.length;i++){var r=t[i];if(i===1&&r==="-"&&t[0]==="-")return t;KS(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var b6=function(t){return t==null||t===!1||t===""},S6=function(t){var e,i,r=[];for(var o in t){var l=t[o];t.hasOwnProperty(o)&&!b6(l)&&(Array.isArray(l)&&l.isCss||Lr(l)?r.push("".concat($3(o),":"),l,";"):co(l)?r.push.apply(r,lo(lo(["".concat(o," {")],S6(l),!1),["}"],!1)):r.push("".concat($3(o),": ").concat((e=o,(i=l)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||e in bS||e.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return r};function ya(t,e,i,r){if(b6(t))return[];if(_p(t))return[".".concat(t.styledComponentId)];if(Lr(t)){if(!Lr(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var o=t(e);return ya(o,e,i,r)}var l;return t instanceof w6?i?(t.inject(i,r),[t.getName(r)]):[t]:co(t)?S6(t):Array.isArray(t)?Array.prototype.concat.apply(tu,t.map(function(u){return ya(u,e,i,r)})):[t.toString()]}function QS(t){for(var e=0;e<t.length;e+=1){var i=t[e];if(Lr(i)&&!_p(i))return!1}return!0}var JS=u6(eu),eC=function(){function t(e,i,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&QS(e),this.componentId=i,this.baseHash=mr(JS,i),this.baseStyle=r,x6.registerId(i)}return t.prototype.generateAndInjectStyles=function(e,i,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,i,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=ha(o,this.staticRulesId);else{var l=_0(ya(this.rules,e,i,r)),u=U0(mr(this.baseHash,l)>>>0);if(!i.hasNameForId(this.componentId,u)){var d=r(l,".".concat(u),void 0,this.componentId);i.insertRules(this.componentId,u,d)}o=ha(o,u),this.staticRulesId=u}else{for(var p=mr(this.baseHash,r.hash),h="",m=0;m<this.rules.length;m++){var y=this.rules[m];if(typeof y=="string")h+=y;else if(y){var v=_0(ya(y,e,i,r));p=mr(p,v+m),h+=v}}if(h){var S=U0(p>>>0);i.hasNameForId(this.componentId,S)||i.insertRules(this.componentId,S,r(h,".".concat(S),void 0,this.componentId)),o=ha(o,S)}}return o},t}(),C6=Le.createContext(void 0);C6.Consumer;var Pf={};function tC(t,e,i){var r=_p(t),o=t,l=!zf(t),u=e.attrs,d=u===void 0?tu:u,p=e.componentId,h=p===void 0?function(k,L){var P=typeof k!="string"?"sc":k3(k);Pf[P]=(Pf[P]||0)+1;var V="".concat(P,"-").concat(d6(eu+P+Pf[P]));return L?"".concat(L,"-").concat(V):V}(e.displayName,e.parentComponentId):p,m=e.displayName,y=m===void 0?function(k){return zf(k)?"styled.".concat(k):"Styled(".concat(MS(k),")")}(t):m,v=e.displayName&&e.componentId?"".concat(k3(e.displayName),"-").concat(e.componentId):e.componentId||h,S=r&&o.attrs?o.attrs.concat(d).filter(Boolean):d,b=e.shouldForwardProp;if(r&&o.shouldForwardProp){var A=o.shouldForwardProp;if(e.shouldForwardProp){var O=e.shouldForwardProp;b=function(k,L){return A(k,L)&&O(k,L)}}else b=A}var j=new eC(i,v,r?o.componentStyle:void 0);function E(k,L){return function(P,V,U){var $=P.attrs,Y=P.componentStyle,F=P.defaultProps,te=P.foldedComponentIds,ie=P.styledComponentId,oe=P.target,re=Le.useContext(C6),B=B3(),W=P.shouldForwardProp||B.shouldForwardProp,K=CS(V,re,F)||jr,ee=function(we,de,ot){for(var Oe,bt=Nt(Nt({},de),{className:void 0,theme:ot}),Fi=0;Fi<we.length;Fi+=1){var Gn=Lr(Oe=we[Fi])?Oe(bt):Oe;for(var tn in Gn)bt[tn]=tn==="className"?ha(bt[tn],Gn[tn]):tn==="style"?Nt(Nt({},bt[tn]),Gn[tn]):Gn[tn]}return de.className&&(bt.className=ha(bt.className,de.className)),bt}($,V,K),D=ee.as||oe,X={};for(var ne in ee)ee[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&ee.theme===K||(ne==="forwardedAs"?X.as=ee.forwardedAs:W&&!W(ne,D)||(X[ne]=ee[ne]));var ae=function(we,de){var ot=B3(),Oe=we.generateAndInjectStyles(de,ot.styleSheet,ot.stylis);return Oe}(Y,ee),ce=ha(te,ie);return ae&&(ce+=" "+ae),ee.className&&(ce+=" "+ee.className),X[zf(D)&&!l6.has(D)?"class":"className"]=ce,U&&(X.ref=U),R.createElement(D,X)}(T,k,L)}E.displayName=y;var T=Le.forwardRef(E);return T.attrs=S,T.componentStyle=j,T.displayName=y,T.shouldForwardProp=b,T.foldedComponentIds=r?ha(o.foldedComponentIds,o.styledComponentId):"",T.styledComponentId=v,T.target=r?o.target:t,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(L){for(var P=[],V=1;V<arguments.length;V++)P[V-1]=arguments[V];for(var U=0,$=P;U<$.length;U++)I0(L,$[U],!0);return L}({},o.defaultProps,k):k}}),Ip(T,function(){return".".concat(T.styledComponentId)}),l&&m6(T,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function U3(t,e){for(var i=[t[0]],r=0,o=e.length;r<o;r+=1)i.push(e[r],t[r+1]);return i}var _3=function(t){return Object.assign(t,{isCss:!0})};function xn(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(Lr(t)||co(t))return _3(ya(U3(tu,lo([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ya(r):_3(ya(U3(r,e)))}function q0(t,e,i){if(i===void 0&&(i=jr),!e)throw So(1,e);var r=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return t(e,i,xn.apply(void 0,lo([o],l,!1)))};return r.attrs=function(o){return q0(t,e,Nt(Nt({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return q0(t,e,Nt(Nt({},i),o))},r}var T6=function(t){return q0(tC,t)},C=T6;l6.forEach(function(t){C[t]=T6(t)});function st(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var r=_0(xn.apply(void 0,lo([t],e,!1))),o=d6(r);return new w6(o,r)}const nC=C.nav`
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
  ${({$isScrolled:t})=>t&&xn`
      background: rgba(0, 0, 0, 0.39);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    `}
  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`,iC=C.div`
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
`,aC=C(wt)`
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
`,rC=C.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1440px) {
    gap: 40px;
  }
`,_s=C.li`
  position: relative;
`,Is=C(wt)`
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
`,I3=C.div`
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
`,ql=C.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
  }
`,Ni=C.span`
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
`,sC=C.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,E6=C.button`
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
`;var Yl={},G3;function oC(){if(G3)return Yl;G3=1,Yl.match=l,Yl.parse=u;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,e=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,r=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function l(m,y){return u(m).some(function(v){var S=v.inverse,b=v.type==="all"||y.type===v.type;if(b&&S||!(b||S))return!1;var A=v.expressions.every(function(O){var j=O.feature,E=O.modifier,T=O.value,k=y[j];if(!k)return!1;switch(j){case"orientation":case"scan":return k.toLowerCase()===T.toLowerCase();case"width":case"height":case"device-width":case"device-height":T=h(T),k=h(k);break;case"resolution":T=p(T),k=p(k);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":T=d(T),k=d(k);break;case"grid":case"color":case"color-index":case"monochrome":T=parseInt(T,10)||1,k=parseInt(k,10)||0;break}switch(E){case"min":return k>=T;case"max":return k<=T;default:return k===T}});return A&&!S||!A&&S})}function u(m){return m.split(",").map(function(y){y=y.trim();var v=y.match(t),S=v[1],b=v[2],A=v[3]||"",O={};return O.inverse=!!S&&S.toLowerCase()==="not",O.type=b?b.toLowerCase():"all",A=A.match(/\([^\)]+\)/g)||[],O.expressions=A.map(function(j){var E=j.match(e),T=E[1].toLowerCase().match(i);return{modifier:T[1],feature:T[2],value:E[2]}}),O})}function d(m){var y=Number(m),v;return y||(v=m.match(/^(\d+)\s*\/\s*(\d+)$/),y=v[1]/v[2]),y}function p(m){var y=parseFloat(m),v=String(m).match(o)[1];switch(v){case"dpcm":return y/2.54;case"dppx":return y*96;default:return y}}function h(m){var y=parseFloat(m),v=String(m).match(r)[1];switch(v){case"em":return y*16;case"rem":return y*16;case"cm":return y*96/2.54;case"mm":return y*96/2.54/10;case"in":return y*96;case"pt":return y*72;case"pc":return y*72/12;default:return y}}return Yl}var Nf,q3;function lC(){if(q3)return Nf;q3=1;var t=oC().match,e=typeof window<"u"?window.matchMedia:null;function i(o,l,u){var d=this,p;e&&!u&&(p=e.call(window,o)),p?(this.matches=p.matches,this.media=p.media,p.addListener(y)):(this.matches=t(o,l),this.media=o),this.addListener=h,this.removeListener=m,this.dispose=v;function h(S){p&&p.addListener(S)}function m(S){p&&p.removeListener(S)}function y(S){d.matches=S.matches,d.media=S.media}function v(){p&&p.removeListener(y)}}function r(o,l,u){return new i(o,l,u)}return Nf=r,Nf}var cC=lC();const uC=Gc(cC);var dC=/[A-Z]/g,fC=/^ms-/,Bf={};function pC(t){return"-"+t.toLowerCase()}function A6(t){if(Bf.hasOwnProperty(t))return Bf[t];var e=t.replace(dC,pC);return Bf[t]=fC.test(e)?"-"+e:e}function hC(t,e){if(t===e)return!0;if(!t||!e)return!1;const i=Object.keys(t),r=Object.keys(e),o=i.length;if(r.length!==o)return!1;for(let l=0;l<o;l++){const u=i[l];if(t[u]!==e[u]||!Object.prototype.hasOwnProperty.call(e,u))return!1}return!0}var $f={exports:{}},Uf,Y3;function mC(){if(Y3)return Uf;Y3=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Uf=t,Uf}var _f,F3;function gC(){if(F3)return _f;F3=1;var t=mC();function e(){}function i(){}return i.resetWarningCache=e,_f=function(){function r(u,d,p,h,m,y){if(y!==t){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function o(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:e};return l.PropTypes=l,l},_f}var X3;function xC(){return X3||(X3=1,$f.exports=gC()()),$f.exports}var yC=xC();const je=Gc(yC),Ot=je.oneOfType([je.string,je.number]),M6={all:je.bool,grid:je.bool,aural:je.bool,braille:je.bool,handheld:je.bool,print:je.bool,projection:je.bool,screen:je.bool,tty:je.bool,tv:je.bool,embossed:je.bool},vC={orientation:je.oneOf(["portrait","landscape"]),scan:je.oneOf(["progressive","interlace"]),aspectRatio:je.string,deviceAspectRatio:je.string,height:Ot,deviceHeight:Ot,width:Ot,deviceWidth:Ot,color:je.bool,colorIndex:je.bool,monochrome:je.bool,resolution:Ot,type:Object.keys(M6)},{type:GP,...wC}=vC,bC={minAspectRatio:je.string,maxAspectRatio:je.string,minDeviceAspectRatio:je.string,maxDeviceAspectRatio:je.string,minHeight:Ot,maxHeight:Ot,minDeviceHeight:Ot,maxDeviceHeight:Ot,minWidth:Ot,maxWidth:Ot,minDeviceWidth:Ot,maxDeviceWidth:Ot,minColor:je.number,maxColor:je.number,minColorIndex:je.number,maxColorIndex:je.number,minMonochrome:je.number,maxMonochrome:je.number,minResolution:Ot,maxResolution:Ot,...wC},SC={...M6,...bC};var CC={all:SC};const TC=t=>`not ${t}`,EC=(t,e)=>{const i=A6(t);return typeof e=="number"&&(e=`${e}px`),e===!0?i:e===!1?TC(i):`(${i}: ${e})`},AC=t=>t.join(" and "),MC=t=>{const e=[];return Object.keys(CC.all).forEach(i=>{const r=t[i];r!=null&&e.push(EC(i,r))}),AC(e)},jC=R.createContext(void 0),LC=t=>t.query||MC(t),Z3=t=>t?Object.keys(t).reduce((i,r)=>(i[A6(r)]=t[r],i),{}):void 0,j6=()=>{const t=R.useRef(!1);return R.useEffect(()=>{t.current=!0},[]),t.current},OC=t=>{const e=R.useContext(jC),i=()=>Z3(t)||Z3(e),[r,o]=R.useState(i);return R.useEffect(()=>{const l=i();hC(r,l)||o(l)},[t,e]),r},RC=t=>{const e=()=>LC(t),[i,r]=R.useState(e);return R.useEffect(()=>{const o=e();i!==o&&r(o)},[t]),i},kC=(t,e)=>{const i=()=>uC(t,e||{},!!e),[r,o]=R.useState(i),l=j6();return R.useEffect(()=>{if(l){const u=i();return o(u),()=>{u&&u.dispose()}}},[t,e]),r},DC=t=>{const[e,i]=R.useState(t.matches);return R.useEffect(()=>{const r=o=>{i(o.matches)};return t.addListener(r),i(t.matches),()=>{t.removeListener(r)}},[t]),e},Ue=(t,e,i)=>{const r=OC(e),o=RC(t);if(!o)throw new Error("Invalid or missing MediaQuery!");const l=kC(o,r),u=DC(l);return j6(),R.useEffect(()=>{},[u]),R.useEffect(()=>()=>{l&&l.dispose()},[]),u},Gp=R.createContext({});function qp(t){const e=R.useRef(null);return e.current===null&&(e.current=t()),e.current}const Yp=typeof window<"u",L6=Yp?R.useLayoutEffect:R.useEffect,nu=R.createContext(null);function Fp(t,e){t.indexOf(e)===-1&&t.push(e)}function Xp(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}const fi=(t,e,i)=>i>e?e:i<t?t:i;let Zp=()=>{};const pi={},O6=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function R6(t){return typeof t=="object"&&t!==null}const k6=t=>/^0[^.\s]+$/u.test(t);function Wp(t){let e;return()=>(e===void 0&&(e=t()),e)}const hn=t=>t,HC=(t,e)=>i=>e(t(i)),Co=(...t)=>t.reduce(HC),uo=(t,e,i)=>{const r=e-t;return r===0?1:(i-t)/r};class Kp{constructor(){this.subscriptions=[]}add(e){return Fp(this.subscriptions,e),()=>Xp(this.subscriptions,e)}notify(e,i,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,i,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,i,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const $n=t=>t*1e3,Un=t=>t/1e3;function D6(t,e){return e?t*(1e3/e):0}const H6=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,VC=1e-7,zC=12;function PC(t,e,i,r,o){let l,u,d=0;do u=e+(i-e)/2,l=H6(u,r,o)-t,l>0?i=u:e=u;while(Math.abs(l)>VC&&++d<zC);return u}function To(t,e,i,r){if(t===e&&i===r)return hn;const o=l=>PC(l,0,1,t,i);return l=>l===0||l===1?l:H6(o(l),e,r)}const V6=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,z6=t=>e=>1-t(1-e),P6=To(.33,1.53,.69,.99),Qp=z6(P6),N6=V6(Qp),B6=t=>(t*=2)<1?.5*Qp(t):.5*(2-Math.pow(2,-10*(t-1))),Jp=t=>1-Math.sin(Math.acos(t)),$6=z6(Jp),U6=V6(Jp),NC=To(.42,0,1,1),BC=To(0,0,.58,1),_6=To(.42,0,.58,1),$C=t=>Array.isArray(t)&&typeof t[0]!="number",I6=t=>Array.isArray(t)&&typeof t[0]=="number",UC={linear:hn,easeIn:NC,easeInOut:_6,easeOut:BC,circIn:Jp,circInOut:U6,circOut:$6,backIn:Qp,backInOut:N6,backOut:P6,anticipate:B6},_C=t=>typeof t=="string",W3=t=>{if(I6(t)){Zp(t.length===4);const[e,i,r,o]=t;return To(e,i,r,o)}else if(_C(t))return UC[t];return t},Fl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function IC(t,e){let i=new Set,r=new Set,o=!1,l=!1;const u=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function p(m){u.has(m)&&(h.schedule(m),t()),m(d)}const h={schedule:(m,y=!1,v=!1)=>{const b=v&&o?i:r;return y&&u.add(m),b.has(m)||b.add(m),m},cancel:m=>{r.delete(m),u.delete(m)},process:m=>{if(d=m,o){l=!0;return}o=!0,[i,r]=[r,i],i.forEach(p),i.clear(),o=!1,l&&(l=!1,h.process(m))}};return h}const GC=40;function G6(t,e){let i=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>i=!0,u=Fl.reduce((T,k)=>(T[k]=IC(l),T),{}),{setup:d,read:p,resolveKeyframes:h,preUpdate:m,update:y,preRender:v,render:S,postRender:b}=u,A=()=>{const T=pi.useManualTiming?o.timestamp:performance.now();i=!1,pi.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(T-o.timestamp,GC),1)),o.timestamp=T,o.isProcessing=!0,d.process(o),p.process(o),h.process(o),m.process(o),y.process(o),v.process(o),S.process(o),b.process(o),o.isProcessing=!1,i&&e&&(r=!1,t(A))},O=()=>{i=!0,r=!0,o.isProcessing||t(A)};return{schedule:Fl.reduce((T,k)=>{const L=u[k];return T[k]=(P,V=!1,U=!1)=>(i||O(),L.schedule(P,V,U)),T},{}),cancel:T=>{for(let k=0;k<Fl.length;k++)u[Fl[k]].cancel(T)},state:o,steps:u}}const{schedule:Ie,cancel:Ii,state:yt,steps:If}=G6(typeof requestAnimationFrame<"u"?requestAnimationFrame:hn,!0);let xc;function qC(){xc=void 0}const Bt={now:()=>(xc===void 0&&Bt.set(yt.isProcessing||pi.useManualTiming?yt.timestamp:performance.now()),xc),set:t=>{xc=t,queueMicrotask(qC)}},q6=t=>e=>typeof e=="string"&&e.startsWith(t),eh=q6("--"),YC=q6("var(--"),th=t=>YC(t)?FC.test(t.split("/*")[0].trim()):!1,FC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Nr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},fo={...Nr,transform:t=>fi(0,1,t)},Xl={...Nr,default:1},Ks=t=>Math.round(t*1e5)/1e5,nh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function XC(t){return t==null}const ZC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ih=(t,e)=>i=>!!(typeof i=="string"&&ZC.test(i)&&i.startsWith(t)||e&&!XC(i)&&Object.prototype.hasOwnProperty.call(i,e)),Y6=(t,e,i)=>r=>{if(typeof r!="string")return r;const[o,l,u,d]=r.match(nh);return{[t]:parseFloat(o),[e]:parseFloat(l),[i]:parseFloat(u),alpha:d!==void 0?parseFloat(d):1}},WC=t=>fi(0,255,t),Gf={...Nr,transform:t=>Math.round(WC(t))},ma={test:ih("rgb","red"),parse:Y6("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:r=1})=>"rgba("+Gf.transform(t)+", "+Gf.transform(e)+", "+Gf.transform(i)+", "+Ks(fo.transform(r))+")"};function KC(t){let e="",i="",r="",o="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),r=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),r=t.substring(3,4),o=t.substring(4,5),e+=e,i+=i,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Y0={test:ih("#"),parse:KC,transform:ma.transform},Eo=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Ui=Eo("deg"),_n=Eo("%"),he=Eo("px"),QC=Eo("vh"),JC=Eo("vw"),K3={..._n,parse:t=>_n.parse(t)/100,transform:t=>_n.transform(t*100)},gr={test:ih("hsl","hue"),parse:Y6("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:r=1})=>"hsla("+Math.round(t)+", "+_n.transform(Ks(e))+", "+_n.transform(Ks(i))+", "+Ks(fo.transform(r))+")"},tt={test:t=>ma.test(t)||Y0.test(t)||gr.test(t),parse:t=>ma.test(t)?ma.parse(t):gr.test(t)?gr.parse(t):Y0.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ma.transform(t):gr.transform(t),getAnimatableNone:t=>{const e=tt.parse(t);return e.alpha=0,tt.transform(e)}},eT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function tT(t){var e,i;return isNaN(t)&&typeof t=="string"&&(((e=t.match(nh))==null?void 0:e.length)||0)+(((i=t.match(eT))==null?void 0:i.length)||0)>0}const F6="number",X6="color",nT="var",iT="var(",Q3="${}",aT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function po(t){const e=t.toString(),i=[],r={color:[],number:[],var:[]},o=[];let l=0;const d=e.replace(aT,p=>(tt.test(p)?(r.color.push(l),o.push(X6),i.push(tt.parse(p))):p.startsWith(iT)?(r.var.push(l),o.push(nT),i.push(p)):(r.number.push(l),o.push(F6),i.push(parseFloat(p))),++l,Q3)).split(Q3);return{values:i,split:d,indexes:r,types:o}}function Z6(t){return po(t).values}function W6(t){const{split:e,types:i}=po(t),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const d=i[u];d===F6?l+=Ks(o[u]):d===X6?l+=tt.transform(o[u]):l+=o[u]}return l}}const rT=t=>typeof t=="number"?0:tt.test(t)?tt.getAnimatableNone(t):t;function sT(t){const e=Z6(t);return W6(t)(e.map(rT))}const Gi={test:tT,parse:Z6,createTransformer:W6,getAnimatableNone:sT};function qf(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function oT({hue:t,saturation:e,lightness:i,alpha:r}){t/=360,e/=100,i/=100;let o=0,l=0,u=0;if(!e)o=l=u=i;else{const d=i<.5?i*(1+e):i+e-i*e,p=2*i-d;o=qf(p,d,t+1/3),l=qf(p,d,t),u=qf(p,d,t-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Mc(t,e){return i=>i>0?e:t}const Ye=(t,e,i)=>t+(e-t)*i,Yf=(t,e,i)=>{const r=t*t,o=i*(e*e-r)+r;return o<0?0:Math.sqrt(o)},lT=[Y0,ma,gr],cT=t=>lT.find(e=>e.test(t));function J3(t){const e=cT(t);if(!e)return!1;let i=e.parse(t);return e===gr&&(i=oT(i)),i}const ex=(t,e)=>{const i=J3(t),r=J3(e);if(!i||!r)return Mc(t,e);const o={...i};return l=>(o.red=Yf(i.red,r.red,l),o.green=Yf(i.green,r.green,l),o.blue=Yf(i.blue,r.blue,l),o.alpha=Ye(i.alpha,r.alpha,l),ma.transform(o))},F0=new Set(["none","hidden"]);function uT(t,e){return F0.has(t)?i=>i<=0?t:e:i=>i>=1?e:t}function dT(t,e){return i=>Ye(t,e,i)}function ah(t){return typeof t=="number"?dT:typeof t=="string"?th(t)?Mc:tt.test(t)?ex:hT:Array.isArray(t)?K6:typeof t=="object"?tt.test(t)?ex:fT:Mc}function K6(t,e){const i=[...t],r=i.length,o=t.map((l,u)=>ah(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)i[u]=o[u](l);return i}}function fT(t,e){const i={...t,...e},r={};for(const o in i)t[o]!==void 0&&e[o]!==void 0&&(r[o]=ah(t[o])(t[o],e[o]));return o=>{for(const l in r)i[l]=r[l](o);return i}}function pT(t,e){const i=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],u=t.indexes[l][r[l]],d=t.values[u]??0;i[o]=d,r[l]++}return i}const hT=(t,e)=>{const i=Gi.createTransformer(e),r=po(t),o=po(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?F0.has(t)&&!o.values.length||F0.has(e)&&!r.values.length?uT(t,e):Co(K6(pT(r,o),o.values),i):Mc(t,e)};function Q6(t,e,i){return typeof t=="number"&&typeof e=="number"&&typeof i=="number"?Ye(t,e,i):ah(t)(t,e)}const mT=t=>{const e=({timestamp:i})=>t(i);return{start:(i=!0)=>Ie.update(e,i),stop:()=>Ii(e),now:()=>yt.isProcessing?yt.timestamp:Bt.now()}},J6=(t,e,i=10)=>{let r="";const o=Math.max(Math.round(e/i),2);for(let l=0;l<o;l++)r+=Math.round(t(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},jc=2e4;function rh(t){let e=0;const i=50;let r=t.next(e);for(;!r.done&&e<jc;)e+=i,r=t.next(e);return e>=jc?1/0:e}function gT(t,e=100,i){const r=i({...t,keyframes:[0,e]}),o=Math.min(rh(r),jc);return{type:"keyframes",ease:l=>r.next(o*l).value/e,duration:Un(o)}}const xT=5;function ey(t,e,i){const r=Math.max(e-xT,0);return D6(i-t(r),e-r)}const Ze={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ff=.001;function yT({duration:t=Ze.duration,bounce:e=Ze.bounce,velocity:i=Ze.velocity,mass:r=Ze.mass}){let o,l,u=1-e;u=fi(Ze.minDamping,Ze.maxDamping,u),t=fi(Ze.minDuration,Ze.maxDuration,Un(t)),u<1?(o=h=>{const m=h*u,y=m*t,v=m-i,S=X0(h,u),b=Math.exp(-y);return Ff-v/S*b},l=h=>{const y=h*u*t,v=y*i+i,S=Math.pow(u,2)*Math.pow(h,2)*t,b=Math.exp(-y),A=X0(Math.pow(h,2),u);return(-o(h)+Ff>0?-1:1)*((v-S)*b)/A}):(o=h=>{const m=Math.exp(-h*t),y=(h-i)*t+1;return-Ff+m*y},l=h=>{const m=Math.exp(-h*t),y=(i-h)*(t*t);return m*y});const d=5/t,p=wT(o,l,d);if(t=$n(t),isNaN(p))return{stiffness:Ze.stiffness,damping:Ze.damping,duration:t};{const h=Math.pow(p,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:t}}}const vT=12;function wT(t,e,i){let r=i;for(let o=1;o<vT;o++)r=r-t(r)/e(r);return r}function X0(t,e){return t*Math.sqrt(1-e*e)}const bT=["duration","bounce"],ST=["stiffness","damping","mass"];function tx(t,e){return e.some(i=>t[i]!==void 0)}function CT(t){let e={velocity:Ze.velocity,stiffness:Ze.stiffness,damping:Ze.damping,mass:Ze.mass,isResolvedFromDuration:!1,...t};if(!tx(t,ST)&&tx(t,bT))if(t.visualDuration){const i=t.visualDuration,r=2*Math.PI/(i*1.2),o=r*r,l=2*fi(.05,1,1-(t.bounce||0))*Math.sqrt(o);e={...e,mass:Ze.mass,stiffness:o,damping:l}}else{const i=yT(t);e={...e,...i,mass:Ze.mass},e.isResolvedFromDuration=!0}return e}function Lc(t=Ze.visualDuration,e=Ze.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:o}=i;const l=i.keyframes[0],u=i.keyframes[i.keyframes.length-1],d={done:!1,value:l},{stiffness:p,damping:h,mass:m,duration:y,velocity:v,isResolvedFromDuration:S}=CT({...i,velocity:-Un(i.velocity||0)}),b=v||0,A=h/(2*Math.sqrt(p*m)),O=u-l,j=Un(Math.sqrt(p/m)),E=Math.abs(O)<5;r||(r=E?Ze.restSpeed.granular:Ze.restSpeed.default),o||(o=E?Ze.restDelta.granular:Ze.restDelta.default);let T;if(A<1){const L=X0(j,A);T=P=>{const V=Math.exp(-A*j*P);return u-V*((b+A*j*O)/L*Math.sin(L*P)+O*Math.cos(L*P))}}else if(A===1)T=L=>u-Math.exp(-j*L)*(O+(b+j*O)*L);else{const L=j*Math.sqrt(A*A-1);T=P=>{const V=Math.exp(-A*j*P),U=Math.min(L*P,300);return u-V*((b+A*j*O)*Math.sinh(U)+L*O*Math.cosh(U))/L}}const k={calculatedDuration:S&&y||null,next:L=>{const P=T(L);if(S)d.done=L>=y;else{let V=L===0?b:0;A<1&&(V=L===0?$n(b):ey(T,L,P));const U=Math.abs(V)<=r,$=Math.abs(u-P)<=o;d.done=U&&$}return d.value=d.done?u:P,d},toString:()=>{const L=Math.min(rh(k),jc),P=J6(V=>k.next(L*V).value,L,30);return L+"ms "+P},toTransition:()=>{}};return k}Lc.applyToOptions=t=>{const e=gT(t,100,Lc);return t.ease=e.ease,t.duration=$n(e.duration),t.type="keyframes",t};function Z0({keyframes:t,velocity:e=0,power:i=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:d,max:p,restDelta:h=.5,restSpeed:m}){const y=t[0],v={done:!1,value:y},S=U=>d!==void 0&&U<d||p!==void 0&&U>p,b=U=>d===void 0?p:p===void 0||Math.abs(d-U)<Math.abs(p-U)?d:p;let A=i*e;const O=y+A,j=u===void 0?O:u(O);j!==O&&(A=j-y);const E=U=>-A*Math.exp(-U/r),T=U=>j+E(U),k=U=>{const $=E(U),Y=T(U);v.done=Math.abs($)<=h,v.value=v.done?j:Y};let L,P;const V=U=>{S(v.value)&&(L=U,P=Lc({keyframes:[v.value,b(v.value)],velocity:ey(T,U,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return V(0),{calculatedDuration:null,next:U=>{let $=!1;return!P&&L===void 0&&($=!0,k(U),V(U)),L!==void 0&&U>=L?P.next(U-L):(!$&&k(U),v)}}}function TT(t,e,i){const r=[],o=i||pi.mix||Q6,l=t.length-1;for(let u=0;u<l;u++){let d=o(t[u],t[u+1]);if(e){const p=Array.isArray(e)?e[u]||hn:e;d=Co(p,d)}r.push(d)}return r}function ET(t,e,{clamp:i=!0,ease:r,mixer:o}={}){const l=t.length;if(Zp(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=t[0]===t[1];t[0]>t[l-1]&&(t=[...t].reverse(),e=[...e].reverse());const d=TT(e,r,o),p=d.length,h=m=>{if(u&&m<t[0])return e[0];let y=0;if(p>1)for(;y<t.length-2&&!(m<t[y+1]);y++);const v=uo(t[y],t[y+1],m);return d[y](v)};return i?m=>h(fi(t[0],t[l-1],m)):h}function AT(t,e){const i=t[t.length-1];for(let r=1;r<=e;r++){const o=uo(0,e,r);t.push(Ye(i,1,o))}}function MT(t){const e=[0];return AT(e,t.length-1),e}function jT(t,e){return t.map(i=>i*e)}function LT(t,e){return t.map(()=>e||_6).splice(0,t.length-1)}function Qs({duration:t=300,keyframes:e,times:i,ease:r="easeInOut"}){const o=$C(r)?r.map(W3):W3(r),l={done:!1,value:e[0]},u=jT(i&&i.length===e.length?i:MT(e),t),d=ET(u,e,{ease:Array.isArray(o)?o:LT(e,o)});return{calculatedDuration:t,next:p=>(l.value=d(p),l.done=p>=t,l)}}const OT=t=>t!==null;function sh(t,{repeat:e,repeatType:i="loop"},r,o=1){const l=t.filter(OT),d=o<0||e&&i!=="loop"&&e%2===1?0:l.length-1;return!d||r===void 0?l[d]:r}const RT={decay:Z0,inertia:Z0,tween:Qs,keyframes:Qs,spring:Lc};function ty(t){typeof t.type=="string"&&(t.type=RT[t.type])}class oh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,i){return this.finished.then(e,i)}}const kT=t=>t/100;class lh extends oh{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,o;const{motionValue:i}=this.options;i&&i.updatedAt!==Bt.now()&&this.tick(Bt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;ty(e);const{type:i=Qs,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=e;let{keyframes:d}=e;const p=i||Qs;p!==Qs&&typeof d[0]!="number"&&(this.mixKeyframes=Co(kT,Q6(d[0],d[1])),d=[0,100]);const h=p({...e,keyframes:d});l==="mirror"&&(this.mirroredGenerator=p({...e,keyframes:[...d].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=rh(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const i=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(e,i=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:d,calculatedDuration:p}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:m,repeat:y,repeatType:v,repeatDelay:S,type:b,onUpdate:A,finalKeyframe:O}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),i?this.currentTime=e:this.updateTime(e);const j=this.currentTime-h*(this.playbackSpeed>=0?1:-1),E=this.playbackSpeed>=0?j<0:j>o;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let T=this.currentTime,k=r;if(y){const U=Math.min(this.currentTime,o)/d;let $=Math.floor(U),Y=U%1;!Y&&U>=1&&(Y=1),Y===1&&$--,$=Math.min($,y+1),!!($%2)&&(v==="reverse"?(Y=1-Y,S&&(Y-=S/d)):v==="mirror"&&(k=u)),T=fi(0,1,Y)*d}const L=E?{done:!1,value:m[0]}:k.next(T);l&&(L.value=l(L.value));let{done:P}=L;!E&&p!==null&&(P=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const V=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return V&&b!==Z0&&(L.value=sh(m,this.options,O,this.speed)),A&&A(L.value),V&&this.finish(),L}then(e,i){return this.finished.then(e,i)}get duration(){return Un(this.calculatedDuration)}get time(){return Un(this.currentTime)}set time(e){var i;e=$n(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(i=this.driver)==null||i.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Bt.now());const i=this.playbackSpeed!==e;this.playbackSpeed=e,i&&(this.time=Un(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:e=mT,startTime:i}=this.options;this.driver||(this.driver=e(u=>this.tick(u))),(l=(o=this.options).onPlay)==null||l.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=i??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Bt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(e=this.options).onComplete)==null||i.call(e)}cancel(){var e,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(e=this.options).onCancel)==null||i.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),e.observe(this)}}function DT(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ga=t=>t*180/Math.PI,W0=t=>{const e=ga(Math.atan2(t[1],t[0]));return K0(e)},HT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:W0,rotateZ:W0,skewX:t=>ga(Math.atan(t[1])),skewY:t=>ga(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},K0=t=>(t=t%360,t<0&&(t+=360),t),nx=W0,ix=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),ax=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),VT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ix,scaleY:ax,scale:t=>(ix(t)+ax(t))/2,rotateX:t=>K0(ga(Math.atan2(t[6],t[5]))),rotateY:t=>K0(ga(Math.atan2(-t[2],t[0]))),rotateZ:nx,rotate:nx,skewX:t=>ga(Math.atan(t[4])),skewY:t=>ga(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Q0(t){return t.includes("scale")?1:0}function J0(t,e){if(!t||t==="none")return Q0(e);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(i)r=VT,o=i;else{const d=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=HT,o=d}if(!o)return Q0(e);const l=r[e],u=o[1].split(",").map(PT);return typeof l=="function"?l(u):u[l]}const zT=(t,e)=>{const{transform:i="none"}=getComputedStyle(t);return J0(i,e)};function PT(t){return parseFloat(t.trim())}const Br=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],$r=new Set(Br),rx=t=>t===Nr||t===he,NT=new Set(["x","y","z"]),BT=Br.filter(t=>!NT.has(t));function $T(t){const e=[];return BT.forEach(i=>{const r=t.getValue(i);r!==void 0&&(e.push([i,r.get()]),r.set(i.startsWith("scale")?1:0))}),e}const va={width:({x:t},{paddingLeft:e="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),height:({y:t},{paddingTop:e="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>J0(e,"x"),y:(t,{transform:e})=>J0(e,"y")};va.translateX=va.x;va.translateY=va.y;const wa=new Set;let ep=!1,tp=!1,np=!1;function ny(){if(tp){const t=Array.from(wa).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),i=new Map;e.forEach(r=>{const o=$T(r);o.length&&(i.set(r,o),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=i.get(r);o&&o.forEach(([l,u])=>{var d;(d=r.getValue(l))==null||d.set(u)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}tp=!1,ep=!1,wa.forEach(t=>t.complete(np)),wa.clear()}function iy(){wa.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(tp=!0)})}function UT(){np=!0,iy(),ny(),np=!1}class ch{constructor(e,i,r,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=i,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(wa.add(this),ep||(ep=!0,Ie.read(iy),Ie.resolveKeyframes(ny))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:i,element:r,motionValue:o}=this;if(e[0]===null){const l=o==null?void 0:o.get(),u=e[e.length-1];if(l!==void 0)e[0]=l;else if(r&&i){const d=r.readValue(i,u);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=u),o&&l===void 0&&o.set(e[0])}DT(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),wa.delete(this)}cancel(){this.state==="scheduled"&&(wa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const _T=t=>t.startsWith("--");function IT(t,e,i){_T(e)?t.style.setProperty(e,i):t.style[e]=i}const GT=Wp(()=>window.ScrollTimeline!==void 0),qT={};function YT(t,e){const i=Wp(t);return()=>qT[e]??i()}const ay=YT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Zs=([t,e,i,r])=>`cubic-bezier(${t}, ${e}, ${i}, ${r})`,sx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Zs([0,.65,.55,1]),circOut:Zs([.55,0,1,.45]),backIn:Zs([.31,.01,.66,-.59]),backOut:Zs([.33,1.53,.69,.99])};function ry(t,e){if(t)return typeof t=="function"?ay()?J6(t,e):"ease-out":I6(t)?Zs(t):Array.isArray(t)?t.map(i=>ry(i,e)||sx.easeOut):sx[t]}function FT(t,e,i,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:d="easeOut",times:p}={},h=void 0){const m={[e]:i};p&&(m.offset=p);const y=ry(d,o);Array.isArray(y)&&(m.easing=y);const v={delay:r,duration:o,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return h&&(v.pseudoElement=h),t.animate(m,v)}function sy(t){return typeof t=="function"&&"applyToOptions"in t}function XT({type:t,...e}){return sy(t)&&ay()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class ZT extends oh{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:i,name:r,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:d,onComplete:p}=e;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=e,Zp(typeof e.type!="string");const h=XT(e);this.animation=FT(i,r,o,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=sh(o,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(m):IT(i,r,m),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,i;(i=(e=this.animation).finish)==null||i.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,i;this.isPseudoElement||(i=(e=this.animation).commitStyles)==null||i.call(e)}get duration(){var i,r;const e=((r=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:r.call(i).duration)||0;return Un(Number(e))}get time(){return Un(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=$n(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&GT()?(this.animation.timeline=e,hn):i(this)}}const oy={anticipate:B6,backInOut:N6,circInOut:U6};function WT(t){return t in oy}function KT(t){typeof t.ease=="string"&&WT(t.ease)&&(t.ease=oy[t.ease])}const ox=10;class QT extends ZT{constructor(e){KT(e),ty(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:i,onUpdate:r,onComplete:o,element:l,...u}=this.options;if(!i)return;if(e!==void 0){i.set(e);return}const d=new lh({...u,autoplay:!1}),p=$n(this.finishedTime??this.time);i.setWithVelocity(d.sample(p-ox).value,d.sample(p).value,ox),d.stop()}}const lx=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Gi.test(t)||t==="0")&&!t.startsWith("url("));function JT(t){const e=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==e)return!0}function eE(t,e,i,r){const o=t[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=t[t.length-1],u=lx(o,e),d=lx(l,e);return!u||!d?!1:JT(t)||(i==="spring"||sy(i))&&r}function ip(t){t.duration=0,t.type}const tE=new Set(["opacity","clipPath","filter","transform"]),nE=Wp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function iE(t){var m;const{motionValue:e,name:i,repeatDelay:r,repeatType:o,damping:l,type:u}=t;if(!(((m=e==null?void 0:e.owner)==null?void 0:m.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:h}=e.owner.getProps();return nE()&&i&&tE.has(i)&&(i!=="transform"||!h)&&!p&&!r&&o!=="mirror"&&l!==0&&u!=="inertia"}const aE=40;class rE extends oh{constructor({autoplay:e=!0,delay:i=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:d,name:p,motionValue:h,element:m,...y}){var b;super(),this.stop=()=>{var A,O;this._animation&&(this._animation.stop(),(A=this.stopTimeline)==null||A.call(this)),(O=this.keyframeResolver)==null||O.cancel()},this.createdAt=Bt.now();const v={autoplay:e,delay:i,type:r,repeat:o,repeatDelay:l,repeatType:u,name:p,motionValue:h,element:m,...y},S=(m==null?void 0:m.KeyframeResolver)||ch;this.keyframeResolver=new S(d,(A,O,j)=>this.onKeyframesResolved(A,O,v,!j),p,h,m),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(e,i,r,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:d,delay:p,isHandoff:h,onUpdate:m}=r;this.resolvedAt=Bt.now(),eE(e,l,u,d)||((pi.instantAnimations||!p)&&(m==null||m(sh(e,r,i))),e[0]=e[e.length-1],ip(r),r.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>aE?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...r,keyframes:e},S=!h&&iE(v)?new QT({...v,element:v.motionValue.owner.current}):new lh(v);S.finished.then(()=>this.notifyFinished()).catch(hn),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(e,i){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),UT()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const sE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function oE(t){const e=sE.exec(t);if(!e)return[,];const[,i,r,o]=e;return[`--${i??r}`,o]}function ly(t,e,i=1){const[r,o]=oE(t);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return O6(u)?parseFloat(u):u}return th(o)?ly(o,e,i+1):o}function uh(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const cy=new Set(["width","height","top","left","right","bottom",...Br]),lE={test:t=>t==="auto",parse:t=>t},uy=t=>e=>e.test(t),dy=[Nr,he,_n,Ui,JC,QC,lE],cx=t=>dy.find(uy(t));function cE(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||k6(t):!0}const uE=new Set(["brightness","contrast","saturate","opacity"]);function dE(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=i.match(nh)||[];if(!r)return t;const o=i.replace(r,"");let l=uE.has(e)?1:0;return r!==i&&(l*=100),e+"("+l+o+")"}const fE=/\b([a-z-]*)\(.*?\)/gu,ap={...Gi,getAnimatableNone:t=>{const e=t.match(fE);return e?e.map(dE).join(" "):t}},ux={...Nr,transform:Math.round},pE={rotate:Ui,rotateX:Ui,rotateY:Ui,rotateZ:Ui,scale:Xl,scaleX:Xl,scaleY:Xl,scaleZ:Xl,skew:Ui,skewX:Ui,skewY:Ui,distance:he,translateX:he,translateY:he,translateZ:he,x:he,y:he,z:he,perspective:he,transformPerspective:he,opacity:fo,originX:K3,originY:K3,originZ:he},dh={borderWidth:he,borderTopWidth:he,borderRightWidth:he,borderBottomWidth:he,borderLeftWidth:he,borderRadius:he,radius:he,borderTopLeftRadius:he,borderTopRightRadius:he,borderBottomRightRadius:he,borderBottomLeftRadius:he,width:he,maxWidth:he,height:he,maxHeight:he,top:he,right:he,bottom:he,left:he,padding:he,paddingTop:he,paddingRight:he,paddingBottom:he,paddingLeft:he,margin:he,marginTop:he,marginRight:he,marginBottom:he,marginLeft:he,backgroundPositionX:he,backgroundPositionY:he,...pE,zIndex:ux,fillOpacity:fo,strokeOpacity:fo,numOctaves:ux},hE={...dh,color:tt,backgroundColor:tt,outlineColor:tt,fill:tt,stroke:tt,borderColor:tt,borderTopColor:tt,borderRightColor:tt,borderBottomColor:tt,borderLeftColor:tt,filter:ap,WebkitFilter:ap},fy=t=>hE[t];function py(t,e){let i=fy(t);return i!==ap&&(i=Gi),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const mE=new Set(["auto","none","0"]);function gE(t,e,i){let r=0,o;for(;r<t.length&&!o;){const l=t[r];typeof l=="string"&&!mE.has(l)&&po(l).values.length&&(o=t[r]),r++}if(o&&i)for(const l of e)t[l]=py(i,o)}class xE extends ch{constructor(e,i,r,o,l){super(e,i,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:i,name:r}=this;if(!i||!i.current)return;super.readKeyframes();for(let p=0;p<e.length;p++){let h=e[p];if(typeof h=="string"&&(h=h.trim(),th(h))){const m=ly(h,i.current);m!==void 0&&(e[p]=m),p===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!cy.has(r)||e.length!==2)return;const[o,l]=e,u=cx(o),d=cx(l);if(u!==d)if(rx(u)&&rx(d))for(let p=0;p<e.length;p++){const h=e[p];typeof h=="string"&&(e[p]=parseFloat(h))}else va[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:i}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||cE(e[o]))&&r.push(o);r.length&&gE(e,r,i)}measureInitialState(){const{element:e,unresolvedKeyframes:i,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=va[r](e.measureViewportBox(),window.getComputedStyle(e.current)),i[0]=this.measuredOrigin;const o=i[i.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var d;const{element:e,name:i,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(i);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,u=r[l];r[l]=va[i](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([p,h])=>{e.getValue(p).set(h)}),this.resolveNoneKeyframes()}}function yE(t,e,i){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const o=(i==null?void 0:i[t])??r.querySelectorAll(t);return o?Array.from(o):[]}return Array.from(t)}const hy=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function my(t){return R6(t)&&"offsetHeight"in t}const dx=30,vE=t=>!isNaN(parseFloat(t));class wE{constructor(e,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var l;const o=Bt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=i.owner}setCurrent(e){this.current=e,this.updatedAt=Bt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=vE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new Kp);const r=this.events[e].add(i);return e==="change"?()=>{r(),Ie.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,i,r){this.set(i),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,i=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Bt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>dx)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,dx);return D6(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,i;(e=this.dependents)==null||e.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Or(t,e){return new wE(t,e)}const{schedule:fh}=G6(queueMicrotask,!1),Cn={x:!1,y:!1};function gy(){return Cn.x||Cn.y}function bE(t){return t==="x"||t==="y"?Cn[t]?null:(Cn[t]=!0,()=>{Cn[t]=!1}):Cn.x||Cn.y?null:(Cn.x=Cn.y=!0,()=>{Cn.x=Cn.y=!1})}function xy(t,e){const i=yE(t),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[i,o,()=>r.abort()]}function fx(t){return!(t.pointerType==="touch"||gy())}function SE(t,e,i={}){const[r,o,l]=xy(t,i),u=d=>{if(!fx(d))return;const{target:p}=d,h=e(p,d);if(typeof h!="function"||!p)return;const m=y=>{fx(y)&&(h(y),p.removeEventListener("pointerleave",m))};p.addEventListener("pointerleave",m,o)};return r.forEach(d=>{d.addEventListener("pointerenter",u,o)}),l}const yy=(t,e)=>e?t===e?!0:yy(t,e.parentElement):!1,ph=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,CE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function TE(t){return CE.has(t.tagName)||t.tabIndex!==-1}const yc=new WeakSet;function px(t){return e=>{e.key==="Enter"&&t(e)}}function Xf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const EE=(t,e)=>{const i=t.currentTarget;if(!i)return;const r=px(()=>{if(yc.has(i))return;Xf(i,"down");const o=px(()=>{Xf(i,"up")}),l=()=>Xf(i,"cancel");i.addEventListener("keyup",o,e),i.addEventListener("blur",l,e)});i.addEventListener("keydown",r,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",r),e)};function hx(t){return ph(t)&&!gy()}function AE(t,e,i={}){const[r,o,l]=xy(t,i),u=d=>{const p=d.currentTarget;if(!hx(d))return;yc.add(p);const h=e(p,d),m=(S,b)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",v),yc.has(p)&&yc.delete(p),hx(S)&&typeof h=="function"&&h(S,{success:b})},y=S=>{m(S,p===window||p===document||i.useGlobalTarget||yy(p,S.target))},v=S=>{m(S,!1)};window.addEventListener("pointerup",y,o),window.addEventListener("pointercancel",v,o)};return r.forEach(d=>{(i.useGlobalTarget?window:d).addEventListener("pointerdown",u,o),my(d)&&(d.addEventListener("focus",h=>EE(h,o)),!TE(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),l}function vy(t){return R6(t)&&"ownerSVGElement"in t}function ME(t){return vy(t)&&t.tagName==="svg"}const At=t=>!!(t&&t.getVelocity),jE=[...dy,tt,Gi],LE=t=>jE.find(uy(t)),hh=R.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class OE extends R.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(i&&e.isPresent&&!this.props.isPresent){const r=i.offsetParent,o=my(r)&&r.offsetWidth||0,l=this.props.sizeRef.current;l.height=i.offsetHeight||0,l.width=i.offsetWidth||0,l.top=i.offsetTop,l.left=i.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function RE({children:t,isPresent:e,anchorX:i,root:r}){const o=R.useId(),l=R.useRef(null),u=R.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=R.useContext(hh);return R.useInsertionEffect(()=>{const{width:p,height:h,top:m,left:y,right:v}=u.current;if(e||!l.current||!p||!h)return;const S=i==="left"?`left: ${y}`:`right: ${v}`;l.current.dataset.motionPopId=o;const b=document.createElement("style");d&&(b.nonce=d);const A=r??document.head;return A.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${S}px !important;
            top: ${m}px !important;
          }
        `),()=>{A.contains(b)&&A.removeChild(b)}},[e]),x.jsx(OE,{isPresent:e,childRef:l,sizeRef:u,children:R.cloneElement(t,{ref:l})})}const kE=({children:t,initial:e,isPresent:i,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:u,anchorX:d,root:p})=>{const h=qp(DE),m=R.useId();let y=!0,v=R.useMemo(()=>(y=!1,{id:m,initial:e,isPresent:i,custom:o,onExitComplete:S=>{h.set(S,!0);for(const b of h.values())if(!b)return;r&&r()},register:S=>(h.set(S,!1),()=>h.delete(S))}),[i,h,r]);return l&&y&&(v={...v}),R.useMemo(()=>{h.forEach((S,b)=>h.set(b,!1))},[i]),R.useEffect(()=>{!i&&!h.size&&r&&r()},[i]),u==="popLayout"&&(t=x.jsx(RE,{isPresent:i,anchorX:d,root:p,children:t})),x.jsx(nu.Provider,{value:v,children:t})};function DE(){return new Map}function wy(t=!0){const e=R.useContext(nu);if(e===null)return[!0,null];const{isPresent:i,onExitComplete:r,register:o}=e,l=R.useId();R.useEffect(()=>{if(t)return o(l)},[t]);const u=R.useCallback(()=>t&&r&&r(l),[l,r,t]);return!i&&r?[!1,u]:[!0]}const Zl=t=>t.key||"";function mx(t){const e=[];return R.Children.forEach(t,i=>{R.isValidElement(i)&&e.push(i)}),e}const by=({children:t,custom:e,initial:i=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1,anchorX:d="left",root:p})=>{const[h,m]=wy(u),y=R.useMemo(()=>mx(t),[t]),v=u&&!h?[]:y.map(Zl),S=R.useRef(!0),b=R.useRef(y),A=qp(()=>new Map),[O,j]=R.useState(y),[E,T]=R.useState(y);L6(()=>{S.current=!1,b.current=y;for(let P=0;P<E.length;P++){const V=Zl(E[P]);v.includes(V)?A.delete(V):A.get(V)!==!0&&A.set(V,!1)}},[E,v.length,v.join("-")]);const k=[];if(y!==O){let P=[...y];for(let V=0;V<E.length;V++){const U=E[V],$=Zl(U);v.includes($)||(P.splice(V,0,U),k.push(U))}return l==="wait"&&k.length&&(P=k),T(mx(P)),j(y),null}const{forceRender:L}=R.useContext(Gp);return x.jsx(x.Fragment,{children:E.map(P=>{const V=Zl(P),U=u&&!h?!1:y===E||v.includes(V),$=()=>{if(A.has(V))A.set(V,!0);else return;let Y=!0;A.forEach(F=>{F||(Y=!1)}),Y&&(L==null||L(),T(b.current),u&&(m==null||m()),r&&r())};return x.jsx(kE,{isPresent:U,initial:!S.current||i?void 0:!1,custom:e,presenceAffectsLayout:o,mode:l,root:p,onExitComplete:U?void 0:$,anchorX:d,children:P},V)})})},Sy=R.createContext({strict:!1}),gx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Rr={};for(const t in gx)Rr[t]={isEnabled:e=>gx[t].some(i=>!!e[i])};function HE(t){for(const e in t)Rr[e]={...Rr[e],...t[e]}}const VE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Oc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||VE.has(t)}let Cy=t=>!Oc(t);function zE(t){typeof t=="function"&&(Cy=e=>e.startsWith("on")?!Oc(e):t(e))}try{zE(require("@emotion/is-prop-valid").default)}catch{}function PE(t,e,i){const r={};for(const o in t)o==="values"&&typeof t.values=="object"||(Cy(o)||i===!0&&Oc(o)||!e&&!Oc(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}const iu=R.createContext({});function au(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function ho(t){return typeof t=="string"||Array.isArray(t)}const mh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],gh=["initial",...mh];function ru(t){return au(t.animate)||gh.some(e=>ho(t[e]))}function Ty(t){return!!(ru(t)||t.variants)}function NE(t,e){if(ru(t)){const{initial:i,animate:r}=t;return{initial:i===!1||ho(i)?i:void 0,animate:ho(r)?r:void 0}}return t.inherit!==!1?e:{}}function BE(t){const{initial:e,animate:i}=NE(t,R.useContext(iu));return R.useMemo(()=>({initial:e,animate:i}),[xx(e),xx(i)])}function xx(t){return Array.isArray(t)?t.join(" "):t}const mo={};function $E(t){for(const e in t)mo[e]=t[e],eh(e)&&(mo[e].isCSSVariable=!0)}function Ey(t,{layout:e,layoutId:i}){return $r.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!mo[t]||t==="opacity")}const UE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_E=Br.length;function IE(t,e,i){let r="",o=!0;for(let l=0;l<_E;l++){const u=Br[l],d=t[u];if(d===void 0)continue;let p=!0;if(typeof d=="number"?p=d===(u.startsWith("scale")?1:0):p=parseFloat(d)===0,!p||i){const h=hy(d,dh[u]);if(!p){o=!1;const m=UE[u]||u;r+=`${m}(${h}) `}i&&(e[u]=h)}}return r=r.trim(),i?r=i(e,o?"":r):o&&(r="none"),r}function xh(t,e,i){const{style:r,vars:o,transformOrigin:l}=t;let u=!1,d=!1;for(const p in e){const h=e[p];if($r.has(p)){u=!0;continue}else if(eh(p)){o[p]=h;continue}else{const m=hy(h,dh[p]);p.startsWith("origin")?(d=!0,l[p]=m):r[p]=m}}if(e.transform||(u||i?r.transform=IE(e,t.transform,i):r.transform&&(r.transform="none")),d){const{originX:p="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${p} ${h} ${m}`}}const yh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ay(t,e,i){for(const r in e)!At(e[r])&&!Ey(r,i)&&(t[r]=e[r])}function GE({transformTemplate:t},e){return R.useMemo(()=>{const i=yh();return xh(i,e,t),Object.assign({},i.vars,i.style)},[e])}function qE(t,e){const i=t.style||{},r={};return Ay(r,i,t),Object.assign(r,GE(t,e)),r}function YE(t,e){const i={},r=qE(t,e);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const FE={offset:"stroke-dashoffset",array:"stroke-dasharray"},XE={offset:"strokeDashoffset",array:"strokeDasharray"};function ZE(t,e,i=1,r=0,o=!0){t.pathLength=1;const l=o?FE:XE;t[l.offset]=he.transform(-r);const u=he.transform(e),d=he.transform(i);t[l.array]=`${u} ${d}`}function My(t,{attrX:e,attrY:i,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...d},p,h,m){if(xh(t,d,h),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:y,style:v}=t;y.transform&&(v.transform=y.transform,delete y.transform),(v.transform||y.transformOrigin)&&(v.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),v.transform&&(v.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete y.transformBox),e!==void 0&&(y.x=e),i!==void 0&&(y.y=i),r!==void 0&&(y.scale=r),o!==void 0&&ZE(y,o,l,u,!1)}const jy=()=>({...yh(),attrs:{}}),Ly=t=>typeof t=="string"&&t.toLowerCase()==="svg";function WE(t,e,i,r){const o=R.useMemo(()=>{const l=jy();return My(l,e,Ly(r),t.transformTemplate,t.style),{...l.attrs,style:{...l.style}}},[e]);if(t.style){const l={};Ay(l,t.style,t),o.style={...l,...o.style}}return o}const KE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function vh(t){return typeof t!="string"||t.includes("-")?!1:!!(KE.indexOf(t)>-1||/[A-Z]/u.test(t))}function QE(t,e,i,{latestValues:r},o,l=!1){const d=(vh(t)?WE:YE)(e,r,o,t),p=PE(e,typeof t=="string",l),h=t!==R.Fragment?{...p,...d,ref:i}:{},{children:m}=e,y=R.useMemo(()=>At(m)?m.get():m,[m]);return R.createElement(t,{...h,children:y})}function yx(t){const e=[{},{}];return t==null||t.values.forEach((i,r)=>{e[0][r]=i.get(),e[1][r]=i.getVelocity()}),e}function wh(t,e,i,r){if(typeof e=="function"){const[o,l]=yx(r);e=e(i!==void 0?i:t.custom,o,l)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[o,l]=yx(r);e=e(i!==void 0?i:t.custom,o,l)}return e}function vc(t){return At(t)?t.get():t}function JE({scrapeMotionValuesFromProps:t,createRenderState:e},i,r,o){return{latestValues:eA(i,r,o,t),renderState:e()}}function eA(t,e,i,r){const o={},l=r(t,{});for(const v in l)o[v]=vc(l[v]);let{initial:u,animate:d}=t;const p=ru(t),h=Ty(t);e&&h&&!p&&t.inherit!==!1&&(u===void 0&&(u=e.initial),d===void 0&&(d=e.animate));let m=i?i.initial===!1:!1;m=m||u===!1;const y=m?d:u;if(y&&typeof y!="boolean"&&!au(y)){const v=Array.isArray(y)?y:[y];for(let S=0;S<v.length;S++){const b=wh(t,v[S]);if(b){const{transitionEnd:A,transition:O,...j}=b;for(const E in j){let T=j[E];if(Array.isArray(T)){const k=m?T.length-1:0;T=T[k]}T!==null&&(o[E]=T)}for(const E in A)o[E]=A[E]}}}return o}const Oy=t=>(e,i)=>{const r=R.useContext(iu),o=R.useContext(nu),l=()=>JE(t,e,r,o);return i?l():qp(l)};function bh(t,e,i){var l;const{style:r}=t,o={};for(const u in r)(At(r[u])||e.style&&At(e.style[u])||Ey(u,t)||((l=i==null?void 0:i.getValue(u))==null?void 0:l.liveStyle)!==void 0)&&(o[u]=r[u]);return o}const tA=Oy({scrapeMotionValuesFromProps:bh,createRenderState:yh});function Ry(t,e,i){const r=bh(t,e,i);for(const o in t)if(At(t[o])||At(e[o])){const l=Br.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=t[o]}return r}const nA=Oy({scrapeMotionValuesFromProps:Ry,createRenderState:jy}),iA=Symbol.for("motionComponentSymbol");function xr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function aA(t,e,i){return R.useCallback(r=>{r&&t.onMount&&t.onMount(r),e&&(r?e.mount(r):e.unmount()),i&&(typeof i=="function"?i(r):xr(i)&&(i.current=r))},[e])}const Sh=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),rA="framerAppearId",ky="data-"+Sh(rA),Dy=R.createContext({});function sA(t,e,i,r,o){var A,O;const{visualElement:l}=R.useContext(iu),u=R.useContext(Sy),d=R.useContext(nu),p=R.useContext(hh).reducedMotion,h=R.useRef(null);r=r||u.renderer,!h.current&&r&&(h.current=r(t,{visualState:e,parent:l,props:i,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p}));const m=h.current,y=R.useContext(Dy);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&oA(h.current,i,o,y);const v=R.useRef(!1);R.useInsertionEffect(()=>{m&&v.current&&m.update(i,d)});const S=i[ky],b=R.useRef(!!S&&!((A=window.MotionHandoffIsComplete)!=null&&A.call(window,S))&&((O=window.MotionHasOptimisedAnimation)==null?void 0:O.call(window,S)));return L6(()=>{m&&(v.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),b.current&&m.animationState&&m.animationState.animateChanges())}),R.useEffect(()=>{m&&(!b.current&&m.animationState&&m.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var j;(j=window.MotionHandoffMarkAsComplete)==null||j.call(window,S)}),b.current=!1),m.enteringChildren=void 0)}),m}function oA(t,e,i,r){const{layoutId:o,layout:l,drag:u,dragConstraints:d,layoutScroll:p,layoutRoot:h,layoutCrossfade:m}=e;t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:Hy(t.parent)),t.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||d&&xr(d),visualElement:t,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:m,layoutScroll:p,layoutRoot:h})}function Hy(t){if(t)return t.options.allowProjection!==!1?t.projection:Hy(t.parent)}function Zf(t,{forwardMotionProps:e=!1}={},i,r){i&&HE(i);const o=vh(t)?nA:tA;function l(d,p){let h;const m={...R.useContext(hh),...d,layoutId:lA(d)},{isStatic:y}=m,v=BE(d),S=o(d,y);if(!y&&Yp){cA();const b=uA(m);h=b.MeasureLayout,v.visualElement=sA(t,S,m,r,b.ProjectionNode)}return x.jsxs(iu.Provider,{value:v,children:[h&&v.visualElement?x.jsx(h,{visualElement:v.visualElement,...m}):null,QE(t,d,aA(S,v.visualElement,p),S,y,e)]})}l.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const u=R.forwardRef(l);return u[iA]=t,u}function lA({layoutId:t}){const e=R.useContext(Gp).id;return e&&t!==void 0?e+"-"+t:t}function cA(t,e){R.useContext(Sy).strict}function uA(t){const{drag:e,layout:i}=Rr;if(!e&&!i)return{};const r={...e,...i};return{MeasureLayout:e!=null&&e.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function dA(t,e){if(typeof Proxy>"u")return Zf;const i=new Map,r=(l,u)=>Zf(l,u,t,e),o=(l,u)=>r(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?r:(i.has(u)||i.set(u,Zf(u,void 0,t,e)),i.get(u))})}function Vy({top:t,left:e,right:i,bottom:r}){return{x:{min:e,max:i},y:{min:t,max:r}}}function fA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function pA(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:r.y,right:r.x}}function Wf(t){return t===void 0||t===1}function rp({scale:t,scaleX:e,scaleY:i}){return!Wf(t)||!Wf(e)||!Wf(i)}function pa(t){return rp(t)||zy(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function zy(t){return vx(t.x)||vx(t.y)}function vx(t){return t&&t!=="0%"}function Rc(t,e,i){const r=t-i,o=e*r;return i+o}function wx(t,e,i,r,o){return o!==void 0&&(t=Rc(t,o,r)),Rc(t,i,r)+e}function sp(t,e=0,i=1,r,o){t.min=wx(t.min,e,i,r,o),t.max=wx(t.max,e,i,r,o)}function Py(t,{x:e,y:i}){sp(t.x,e.translate,e.scale,e.originPoint),sp(t.y,i.translate,i.scale,i.originPoint)}const bx=.999999999999,Sx=1.0000000000001;function hA(t,e,i,r=!1){const o=i.length;if(!o)return;e.x=e.y=1;let l,u;for(let d=0;d<o;d++){l=i[d],u=l.projectionDelta;const{visualElement:p}=l.options;p&&p.props.style&&p.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&vr(t,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,Py(t,u)),r&&pa(l.latestValues)&&vr(t,l.latestValues))}e.x<Sx&&e.x>bx&&(e.x=1),e.y<Sx&&e.y>bx&&(e.y=1)}function yr(t,e){t.min=t.min+e,t.max=t.max+e}function Cx(t,e,i,r,o=.5){const l=Ye(t.min,t.max,o);sp(t,e,i,l,r)}function vr(t,e){Cx(t.x,e.x,e.scaleX,e.scale,e.originX),Cx(t.y,e.y,e.scaleY,e.scale,e.originY)}function Ny(t,e){return Vy(pA(t.getBoundingClientRect(),e))}function mA(t,e,i){const r=Ny(t,i),{scroll:o}=e;return o&&(yr(r.x,o.offset.x),yr(r.y,o.offset.y)),r}const Tx=()=>({translate:0,scale:1,origin:0,originPoint:0}),wr=()=>({x:Tx(),y:Tx()}),Ex=()=>({min:0,max:0}),Qe=()=>({x:Ex(),y:Ex()}),op={current:null},By={current:!1};function gA(){if(By.current=!0,!!Yp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>op.current=t.matches;t.addEventListener("change",e),e()}else op.current=!1}const xA=new WeakMap;function yA(t,e,i){for(const r in e){const o=e[r],l=i[r];if(At(o))t.addValue(r,o);else if(At(l))t.addValue(r,Or(o,{owner:t}));else if(l!==o)if(t.hasValue(r)){const u=t.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=t.getStaticValue(r);t.addValue(r,Or(u!==void 0?u:o,{owner:t}))}}for(const r in i)e[r]===void 0&&t.removeValue(r);return e}const Ax=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class vA{scrapeMotionValuesFromProps(e,i,r){return{}}constructor({parent:e,props:i,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ch,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=Bt.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,Ie.render(this.render,!1,!0))};const{latestValues:p,renderState:h}=u;this.latestValues=p,this.baseTarget={...p},this.initialValues=i.initial?{...p}:{},this.renderState=h,this.parent=e,this.props=i,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=ru(i),this.isVariantNode=Ty(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:m,...y}=this.scrapeMotionValuesFromProps(i,{},this);for(const v in y){const S=y[v];p[v]!==void 0&&At(S)&&S.set(p[v])}}mount(e){var i;this.current=e,xA.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),By.current||gA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:op.current,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),Ii(this.notifyUpdate),Ii(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,i){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=$r.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=i.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Ie.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,i)),this.valueSubscriptions.set(e,()=>{o(),l&&l(),i.owner&&i.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Rr){const i=Rr[e];if(!i)continue;const{isEnabled:r,Feature:o}=i;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let r=0;r<Ax.length;r++){const o=Ax[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=yA(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){const r=this.values.get(e);i!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,i),this.values.set(e,i),this.latestValues[e]=i.get())}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&i!==void 0&&(r=Or(i===null?void 0:i,{owner:this}),this.addValue(e,r)),r}readValue(e,i){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(O6(r)||k6(r))?r=parseFloat(r):!LE(r)&&Gi.test(i)&&(r=py(e,i)),this.setBaseTarget(e,At(r)?r.get():r)),At(r)?r.get():r}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){var l;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const u=wh(this.props,i,(l=this.presenceContext)==null?void 0:l.custom);u&&(r=u[e])}if(i&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!At(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new Kp),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}scheduleRenderMicrotask(){fh.render(this.render)}}class $y extends vA{constructor(){super(...arguments),this.KeyframeResolver=xE}sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){return e.style?e.style[i]:void 0}removeValueFromRenderState(e,{vars:i,style:r}){delete i[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;At(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function Uy(t,{style:e,vars:i},r,o){const l=t.style;let u;for(u in e)l[u]=e[u];o==null||o.applyProjectionStyles(l,r);for(u in i)l.setProperty(u,i[u])}function wA(t){return window.getComputedStyle(t)}class bA extends $y{constructor(){super(...arguments),this.type="html",this.renderInstance=Uy}readValueFromInstance(e,i){var r;if($r.has(i))return(r=this.projection)!=null&&r.isProjecting?Q0(i):zT(e,i);{const o=wA(e),l=(eh(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(e,{transformPagePoint:i}){return Ny(e,i)}build(e,i,r){xh(e,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,i,r){return bh(e,i,r)}}const _y=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function SA(t,e,i,r){Uy(t,e,void 0,r);for(const o in e.attrs)t.setAttribute(_y.has(o)?o:Sh(o),e.attrs[o])}class CA extends $y{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qe}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if($r.has(i)){const r=fy(i);return r&&r.default||0}return i=_y.has(i)?i:Sh(i),e.getAttribute(i)}scrapeMotionValuesFromProps(e,i,r){return Ry(e,i,r)}build(e,i,r){My(e,i,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,i,r,o){SA(e,i,r,o)}mount(e){this.isSVGTag=Ly(e.tagName),super.mount(e)}}const TA=(t,e)=>vh(t)?new CA(e):new bA(e,{allowProjection:t!==R.Fragment});function Sr(t,e,i){const r=t.getProps();return wh(r,e,i!==void 0?i:r.custom,t)}const lp=t=>Array.isArray(t);function EA(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,Or(i))}function AA(t){return lp(t)?t[t.length-1]||0:t}function MA(t,e){const i=Sr(t,e);let{transitionEnd:r={},transition:o={},...l}=i||{};l={...l,...r};for(const u in l){const d=AA(l[u]);EA(t,u,d)}}function jA(t){return!!(At(t)&&t.add)}function cp(t,e){const i=t.getValue("willChange");if(jA(i))return i.add(e);if(!i&&pi.WillChange){const r=new pi.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function Iy(t){return t.props[ky]}const LA=t=>t!==null;function OA(t,{repeat:e,repeatType:i="loop"},r){const o=t.filter(LA),l=e&&i!=="loop"&&e%2===1?0:o.length-1;return o[l]}const RA={type:"spring",stiffness:500,damping:25,restSpeed:10},kA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),DA={type:"keyframes",duration:.8},HA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},VA=(t,{keyframes:e})=>e.length>2?DA:$r.has(t)?t.startsWith("scale")?kA(e[1]):RA:HA;function zA({when:t,delay:e,delayChildren:i,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:d,from:p,elapsed:h,...m}){return!!Object.keys(m).length}const Ch=(t,e,i,r={},o,l)=>u=>{const d=uh(r,t)||{},p=d.delay||r.delay||0;let{elapsed:h=0}=r;h=h-$n(p);const m={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...d,delay:-h,onUpdate:v=>{e.set(v),d.onUpdate&&d.onUpdate(v)},onComplete:()=>{u(),d.onComplete&&d.onComplete()},name:t,motionValue:e,element:l?void 0:o};zA(d)||Object.assign(m,VA(t,m)),m.duration&&(m.duration=$n(m.duration)),m.repeatDelay&&(m.repeatDelay=$n(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let y=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(ip(m),m.delay===0&&(y=!0)),(pi.instantAnimations||pi.skipAnimations)&&(y=!0,ip(m),m.delay=0),m.allowFlatten=!d.type&&!d.ease,y&&!l&&e.get()!==void 0){const v=OA(m.keyframes,d);if(v!==void 0){Ie.update(()=>{m.onUpdate(v),m.onComplete()});return}}return d.isSync?new lh(m):new rE(m)};function PA({protectedKeys:t,needsAnimating:e},i){const r=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,r}function Gy(t,e,{delay:i=0,transitionOverride:r,type:o}={}){let{transition:l=t.getDefaultTransition(),transitionEnd:u,...d}=e;r&&(l=r);const p=[],h=o&&t.animationState&&t.animationState.getState()[o];for(const m in d){const y=t.getValue(m,t.latestValues[m]??null),v=d[m];if(v===void 0||h&&PA(h,m))continue;const S={delay:i,...uh(l||{},m)},b=y.get();if(b!==void 0&&!y.isAnimating&&!Array.isArray(v)&&v===b&&!S.velocity)continue;let A=!1;if(window.MotionHandoffAnimation){const j=Iy(t);if(j){const E=window.MotionHandoffAnimation(j,m,Ie);E!==null&&(S.startTime=E,A=!0)}}cp(t,m),y.start(Ch(m,y,v,t.shouldReduceMotion&&cy.has(m)?{type:!1}:S,t,A));const O=y.animation;O&&p.push(O)}return u&&Promise.all(p).then(()=>{Ie.update(()=>{u&&MA(t,u)})}),p}function qy(t,e,i,r=0,o=1){const l=Array.from(t).sort((h,m)=>h.sortNodePosition(m)).indexOf(e),u=t.size,d=(u-1)*r;return typeof i=="function"?i(l,u):o===1?l*r:d-l*r}function up(t,e,i={}){var p;const r=Sr(t,e,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=r||{};i.transitionOverride&&(o=i.transitionOverride);const l=r?()=>Promise.all(Gy(t,r,i)):()=>Promise.resolve(),u=t.variantChildren&&t.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:v}=o;return NA(t,e,h,m,y,v,i)}:()=>Promise.resolve(),{when:d}=o;if(d){const[h,m]=d==="beforeChildren"?[l,u]:[u,l];return h().then(()=>m())}else return Promise.all([l(),u(i.delay)])}function NA(t,e,i=0,r=0,o=0,l=1,u){const d=[];for(const p of t.variantChildren)p.notify("AnimationStart",e),d.push(up(p,e,{...u,delay:i+(typeof r=="function"?0:r)+qy(t.variantChildren,p,r,o,l)}).then(()=>p.notify("AnimationComplete",e)));return Promise.all(d)}function BA(t,e,i={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>up(t,l,i));r=Promise.all(o)}else if(typeof e=="string")r=up(t,e,i);else{const o=typeof e=="function"?Sr(t,e,i.custom):e;r=Promise.all(Gy(t,o,i))}return r.then(()=>{t.notify("AnimationComplete",e)})}function Yy(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let r=0;r<i;r++)if(e[r]!==t[r])return!1;return!0}const $A=gh.length;function Fy(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?Fy(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const e={};for(let i=0;i<$A;i++){const r=gh[i],o=t.props[r];(ho(o)||o===!1)&&(e[r]=o)}return e}const UA=[...mh].reverse(),_A=mh.length;function IA(t){return e=>Promise.all(e.map(({animation:i,options:r})=>BA(t,i,r)))}function GA(t){let e=IA(t),i=Mx(),r=!0;const o=p=>(h,m)=>{var v;const y=Sr(t,m,p==="exit"?(v=t.presenceContext)==null?void 0:v.custom:void 0);if(y){const{transition:S,transitionEnd:b,...A}=y;h={...h,...A,...b}}return h};function l(p){e=p(t)}function u(p){const{props:h}=t,m=Fy(t.parent)||{},y=[],v=new Set;let S={},b=1/0;for(let O=0;O<_A;O++){const j=UA[O],E=i[j],T=h[j]!==void 0?h[j]:m[j],k=ho(T),L=j===p?E.isActive:null;L===!1&&(b=O);let P=T===m[j]&&T!==h[j]&&k;if(P&&r&&t.manuallyAnimateOnMount&&(P=!1),E.protectedKeys={...S},!E.isActive&&L===null||!T&&!E.prevProp||au(T)||typeof T=="boolean")continue;const V=qA(E.prevProp,T);let U=V||j===p&&E.isActive&&!P&&k||O>b&&k,$=!1;const Y=Array.isArray(T)?T:[T];let F=Y.reduce(o(j),{});L===!1&&(F={});const{prevResolvedValues:te={}}=E,ie={...te,...F},oe=W=>{U=!0,v.has(W)&&($=!0,v.delete(W)),E.needsAnimating[W]=!0;const K=t.getValue(W);K&&(K.liveStyle=!1)};for(const W in ie){const K=F[W],ee=te[W];if(S.hasOwnProperty(W))continue;let D=!1;lp(K)&&lp(ee)?D=!Yy(K,ee):D=K!==ee,D?K!=null?oe(W):v.add(W):K!==void 0&&v.has(W)?oe(W):E.protectedKeys[W]=!0}E.prevProp=T,E.prevResolvedValues=F,E.isActive&&(S={...S,...F}),r&&t.blockInitialAnimation&&(U=!1);const re=P&&V;U&&(!re||$)&&y.push(...Y.map(W=>{const K={type:j};if(typeof W=="string"&&r&&!re&&t.manuallyAnimateOnMount&&t.parent){const{parent:ee}=t,D=Sr(ee,W);if(ee.enteringChildren&&D){const{delayChildren:X}=D.transition||{};K.delay=qy(ee.enteringChildren,t,X)}}return{animation:W,options:K}}))}if(v.size){const O={};if(typeof h.initial!="boolean"){const j=Sr(t,Array.isArray(h.initial)?h.initial[0]:h.initial);j&&j.transition&&(O.transition=j.transition)}v.forEach(j=>{const E=t.getBaseTarget(j),T=t.getValue(j);T&&(T.liveStyle=!0),O[j]=E??null}),y.push({animation:O})}let A=!!y.length;return r&&(h.initial===!1||h.initial===h.animate)&&!t.manuallyAnimateOnMount&&(A=!1),r=!1,A?e(y):Promise.resolve()}function d(p,h){var y;if(i[p].isActive===h)return Promise.resolve();(y=t.variantChildren)==null||y.forEach(v=>{var S;return(S=v.animationState)==null?void 0:S.setActive(p,h)}),i[p].isActive=h;const m=u(p);for(const v in i)i[v].protectedKeys={};return m}return{animateChanges:u,setActive:d,setAnimateFunction:l,getState:()=>i,reset:()=>{i=Mx(),r=!0}}}function qA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Yy(e,t):!1}function fa(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Mx(){return{animate:fa(!0),whileInView:fa(),whileHover:fa(),whileTap:fa(),whileDrag:fa(),whileFocus:fa(),exit:fa()}}class Yi{constructor(e){this.isMounted=!1,this.node=e}update(){}}class YA extends Yi{constructor(e){super(e),e.animationState||(e.animationState=GA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();au(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let FA=0;class XA extends Yi{constructor(){super(...arguments),this.id=FA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);i&&!e&&o.then(()=>{i(this.id)})}mount(){const{register:e,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const ZA={animation:{Feature:YA},exit:{Feature:XA}};function go(t,e,i,r={passive:!0}){return t.addEventListener(e,i,r),()=>t.removeEventListener(e,i)}function Ao(t){return{point:{x:t.pageX,y:t.pageY}}}const WA=t=>e=>ph(e)&&t(e,Ao(e));function Js(t,e,i,r){return go(t,e,WA(i),r)}const Xy=1e-4,KA=1-Xy,QA=1+Xy,Zy=.01,JA=0-Zy,eM=0+Zy;function Rt(t){return t.max-t.min}function tM(t,e,i){return Math.abs(t-e)<=i}function jx(t,e,i,r=.5){t.origin=r,t.originPoint=Ye(e.min,e.max,t.origin),t.scale=Rt(i)/Rt(e),t.translate=Ye(i.min,i.max,t.origin)-t.originPoint,(t.scale>=KA&&t.scale<=QA||isNaN(t.scale))&&(t.scale=1),(t.translate>=JA&&t.translate<=eM||isNaN(t.translate))&&(t.translate=0)}function eo(t,e,i,r){jx(t.x,e.x,i.x,r?r.originX:void 0),jx(t.y,e.y,i.y,r?r.originY:void 0)}function Lx(t,e,i){t.min=i.min+e.min,t.max=t.min+Rt(e)}function nM(t,e,i){Lx(t.x,e.x,i.x),Lx(t.y,e.y,i.y)}function Ox(t,e,i){t.min=e.min-i.min,t.max=t.min+Rt(e)}function to(t,e,i){Ox(t.x,e.x,i.x),Ox(t.y,e.y,i.y)}function pn(t){return[t("x"),t("y")]}const Wy=({current:t})=>t?t.ownerDocument.defaultView:null,Rx=(t,e)=>Math.abs(t-e);function iM(t,e){const i=Rx(t.x,e.x),r=Rx(t.y,e.y);return Math.sqrt(i**2+r**2)}class Ky{constructor(e,i,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Qf(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,b=iM(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!b)return;const{point:A}=v,{timestamp:O}=yt;this.history.push({...A,timestamp:O});const{onStart:j,onMove:E}=this.handlers;S||(j&&j(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,v)},this.handlePointerMove=(v,S)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Kf(S,this.transformPagePoint),Ie.update(this.updatePoint,!0)},this.handlePointerUp=(v,S)=>{this.end();const{onEnd:b,onSessionEnd:A,resumeAnimation:O}=this.handlers;if(this.dragSnapToOrigin&&O&&O(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=Qf(v.type==="pointercancel"?this.lastMoveEventInfo:Kf(S,this.transformPagePoint),this.history);this.startEvent&&b&&b(v,j),A&&A(v,j)},!ph(e))return;this.dragSnapToOrigin=l,this.handlers=i,this.transformPagePoint=r,this.distanceThreshold=u,this.contextWindow=o||window;const d=Ao(e),p=Kf(d,this.transformPagePoint),{point:h}=p,{timestamp:m}=yt;this.history=[{...h,timestamp:m}];const{onSessionStart:y}=i;y&&y(e,Qf(p,this.history)),this.removeListeners=Co(Js(this.contextWindow,"pointermove",this.handlePointerMove),Js(this.contextWindow,"pointerup",this.handlePointerUp),Js(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ii(this.updatePoint)}}function Kf(t,e){return e?{point:e(t.point)}:t}function kx(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Qf({point:t},e){return{point:t,delta:kx(t,Qy(e)),offset:kx(t,aM(e)),velocity:rM(e,.1)}}function aM(t){return t[0]}function Qy(t){return t[t.length-1]}function rM(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,r=null;const o=Qy(t);for(;i>=0&&(r=t[i],!(o.timestamp-r.timestamp>$n(e)));)i--;if(!r)return{x:0,y:0};const l=Un(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function sM(t,{min:e,max:i},r){return e!==void 0&&t<e?t=r?Ye(e,t,r.min):Math.max(t,e):i!==void 0&&t>i&&(t=r?Ye(i,t,r.max):Math.min(t,i)),t}function Dx(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function oM(t,{top:e,left:i,bottom:r,right:o}){return{x:Dx(t.x,i,o),y:Dx(t.y,e,r)}}function Hx(t,e){let i=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,r]=[r,i]),{min:i,max:r}}function lM(t,e){return{x:Hx(t.x,e.x),y:Hx(t.y,e.y)}}function cM(t,e){let i=.5;const r=Rt(t),o=Rt(e);return o>r?i=uo(e.min,e.max-r,t.min):r>o&&(i=uo(t.min,t.max-o,e.min)),fi(0,1,i)}function uM(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const dp=.35;function dM(t=dp){return t===!1?t=0:t===!0&&(t=dp),{x:Vx(t,"left","right"),y:Vx(t,"top","bottom")}}function Vx(t,e,i){return{min:zx(t,e),max:zx(t,i)}}function zx(t,e){return typeof t=="number"?t:t[e]||0}const fM=new WeakMap;class pM{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:i=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Ao(y).point)},u=(y,v)=>{const{drag:S,dragPropagation:b,onDragStart:A}=this.getProps();if(S&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=bE(S),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),pn(j=>{let E=this.getAxisMotionValue(j).get()||0;if(_n.test(E)){const{projection:T}=this.visualElement;if(T&&T.layout){const k=T.layout.layoutBox[j];k&&(E=Rt(k)*(parseFloat(E)/100))}}this.originPoint[j]=E}),A&&Ie.postRender(()=>A(y,v)),cp(this.visualElement,"transform");const{animationState:O}=this.visualElement;O&&O.setActive("whileDrag",!0)},d=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v;const{dragPropagation:S,dragDirectionLock:b,onDirectionLock:A,onDrag:O}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:j}=v;if(b&&this.currentDirection===null){this.currentDirection=hM(j),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",v.point,j),this.updateAxis("y",v.point,j),this.visualElement.render(),O&&O(y,v)},p=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v,this.stop(y,v),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>pn(y=>{var v;return this.getAnimationState(y)==="paused"&&((v=this.getAxisMotionValue(y).animation)==null?void 0:v.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new Ky(e,{onSessionStart:l,onStart:u,onMove:d,onSessionEnd:p,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:Wy(this.visualElement)})}stop(e,i){const r=e||this.latestPointerEvent,o=i||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:d}=this.getProps();d&&Ie.postRender(()=>d(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(e,i,r){const{drag:o}=this.getProps();if(!r||!Wl(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=sM(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:e,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;e&&xr(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=oM(r.layoutBox,e):this.constraints=!1,this.elastic=dM(i),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&pn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=uM(r.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!xr(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=mA(r,o.root,this.visualElement.getTransformPagePoint());let u=lM(o.layout.layoutBox,l);if(i){const d=i(fA(u));this.hasMutatedConstraints=!!d,d&&(u=Vy(d))}return u}startAnimation(e){const{drag:i,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:d}=this.getProps(),p=this.constraints||{},h=pn(m=>{if(!Wl(m,i,this.currentDirection))return;let y=p&&p[m]||{};u&&(y={min:0,max:0});const v=o?200:1e6,S=o?40:1e7,b={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...l,...y};return this.startAxisValueAnimation(m,b)});return Promise.all(h).then(d)}startAxisValueAnimation(e,i){const r=this.getAxisMotionValue(e);return cp(this.visualElement,e),r.start(Ch(e,r,0,i,this.visualElement,!1))}stopAnimation(){pn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){pn(e=>{var i;return(i=this.getAxisMotionValue(e).animation)==null?void 0:i.pause()})}getAnimationState(e){var i;return(i=this.getAxisMotionValue(e).animation)==null?void 0:i.state}getAxisMotionValue(e){const i=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[i];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){pn(i=>{const{drag:r}=this.getProps();if(!Wl(i,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(i);if(o&&o.layout){const{min:u,max:d}=o.layout.layoutBox[i];l.set(e[i]-Ye(u,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:r}=this.visualElement;if(!xr(i)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};pn(u=>{const d=this.getAxisMotionValue(u);if(d&&this.constraints!==!1){const p=d.get();o[u]=cM({min:p,max:p},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),pn(u=>{if(!Wl(u,e,null))return;const d=this.getAxisMotionValue(u),{min:p,max:h}=this.constraints[u];d.set(Ye(p,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;fM.set(this.visualElement,this);const e=this.visualElement.current,i=Js(e,"pointerdown",p=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(p)}),r=()=>{const{dragConstraints:p}=this.getProps();xr(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ie.read(r);const u=go(window,"resize",()=>this.scalePositionWithinConstraints()),d=o.addEventListener("didUpdate",({delta:p,hasLayoutChanged:h})=>{this.isDragging&&h&&(pn(m=>{const y=this.getAxisMotionValue(m);y&&(this.originPoint[m]+=p[m].translate,y.set(y.get()+p[m].translate))}),this.visualElement.render())});return()=>{u(),i(),l(),d&&d()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=dp,dragMomentum:d=!0}=e;return{...e,drag:i,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:d}}}function Wl(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function hM(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class mM extends Yi{constructor(e){super(e),this.removeGroupControls=hn,this.removeListeners=hn,this.controls=new pM(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||hn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Px=t=>(e,i)=>{t&&Ie.postRender(()=>t(e,i))};class gM extends Yi{constructor(){super(...arguments),this.removePointerDownListener=hn}onPointerDown(e){this.session=new Ky(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Wy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Px(e),onStart:Px(i),onMove:r,onEnd:(l,u)=>{delete this.session,o&&Ie.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Js(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const wc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Nx(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Gs={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(he.test(t))t=parseFloat(t);else return t;const i=Nx(t,e.target.x),r=Nx(t,e.target.y);return`${i}% ${r}%`}},xM={correct:(t,{treeScale:e,projectionDelta:i})=>{const r=t,o=Gi.parse(t);if(o.length>5)return r;const l=Gi.createTransformer(t),u=typeof o[0]!="number"?1:0,d=i.x.scale*e.x,p=i.y.scale*e.y;o[0+u]/=d,o[1+u]/=p;const h=Ye(d,p,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};let Jf=!1;class yM extends R.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;$E(vM),l&&(i.group&&i.group.add(l),r&&r.register&&o&&r.register(l),Jf&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),wc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:r,drag:o,isPresent:l}=this.props,{projection:u}=r;return u&&(u.isPresent=l,Jf=!0,o||e.layoutDependency!==i||i===void 0||e.isPresent!==l?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Ie.postRender(()=>{const d=u.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),fh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:r}=this.props,{projection:o}=e;Jf=!0,o&&(o.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Jy(t){const[e,i]=wy(),r=R.useContext(Gp);return x.jsx(yM,{...t,layoutGroup:r,switchLayoutGroup:R.useContext(Dy),isPresent:e,safeToRemove:i})}const vM={borderRadius:{...Gs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Gs,borderTopRightRadius:Gs,borderBottomLeftRadius:Gs,borderBottomRightRadius:Gs,boxShadow:xM};function wM(t,e,i){const r=At(t)?t:Or(t);return r.start(Ch("",r,e,i)),r.animation}const bM=(t,e)=>t.depth-e.depth;class SM{constructor(){this.children=[],this.isDirty=!1}add(e){Fp(this.children,e),this.isDirty=!0}remove(e){Xp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(bM),this.isDirty=!1,this.children.forEach(e)}}function CM(t,e){const i=Bt.now(),r=({timestamp:o})=>{const l=o-i;l>=e&&(Ii(r),t(l-e))};return Ie.setup(r,!0),()=>Ii(r)}const ev=["TopLeft","TopRight","BottomLeft","BottomRight"],TM=ev.length,Bx=t=>typeof t=="string"?parseFloat(t):t,$x=t=>typeof t=="number"||he.test(t);function EM(t,e,i,r,o,l){o?(t.opacity=Ye(0,i.opacity??1,AM(r)),t.opacityExit=Ye(e.opacity??1,0,MM(r))):l&&(t.opacity=Ye(e.opacity??1,i.opacity??1,r));for(let u=0;u<TM;u++){const d=`border${ev[u]}Radius`;let p=Ux(e,d),h=Ux(i,d);if(p===void 0&&h===void 0)continue;p||(p=0),h||(h=0),p===0||h===0||$x(p)===$x(h)?(t[d]=Math.max(Ye(Bx(p),Bx(h),r),0),(_n.test(h)||_n.test(p))&&(t[d]+="%")):t[d]=h}(e.rotate||i.rotate)&&(t.rotate=Ye(e.rotate||0,i.rotate||0,r))}function Ux(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const AM=tv(0,.5,$6),MM=tv(.5,.95,hn);function tv(t,e,i){return r=>r<t?0:r>e?1:i(uo(t,e,r))}function _x(t,e){t.min=e.min,t.max=e.max}function fn(t,e){_x(t.x,e.x),_x(t.y,e.y)}function Ix(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Gx(t,e,i,r,o){return t-=e,t=Rc(t,1/i,r),o!==void 0&&(t=Rc(t,1/o,r)),t}function jM(t,e=0,i=1,r=.5,o,l=t,u=t){if(_n.test(e)&&(e=parseFloat(e),e=Ye(u.min,u.max,e/100)-u.min),typeof e!="number")return;let d=Ye(l.min,l.max,r);t===l&&(d-=e),t.min=Gx(t.min,e,i,d,o),t.max=Gx(t.max,e,i,d,o)}function qx(t,e,[i,r,o],l,u){jM(t,e[i],e[r],e[o],e.scale,l,u)}const LM=["x","scaleX","originX"],OM=["y","scaleY","originY"];function Yx(t,e,i,r){qx(t.x,e,LM,i?i.x:void 0,r?r.x:void 0),qx(t.y,e,OM,i?i.y:void 0,r?r.y:void 0)}function Fx(t){return t.translate===0&&t.scale===1}function nv(t){return Fx(t.x)&&Fx(t.y)}function Xx(t,e){return t.min===e.min&&t.max===e.max}function RM(t,e){return Xx(t.x,e.x)&&Xx(t.y,e.y)}function Zx(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function iv(t,e){return Zx(t.x,e.x)&&Zx(t.y,e.y)}function Wx(t){return Rt(t.x)/Rt(t.y)}function Kx(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class kM{constructor(){this.members=[]}add(e){Fp(this.members,e),e.scheduleRender()}remove(e){if(Xp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){const i=this.members.findIndex(o=>e===o);if(i===0)return!1;let r;for(let o=i;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,i){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,i&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:i,resumingFrom:r}=e;i.onExitComplete&&i.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function DM(t,e,i){let r="";const o=t.x.translate/e.x,l=t.y.translate/e.y,u=(i==null?void 0:i.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:h,rotate:m,rotateX:y,rotateY:v,skewX:S,skewY:b}=i;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),y&&(r+=`rotateX(${y}deg) `),v&&(r+=`rotateY(${v}deg) `),S&&(r+=`skewX(${S}deg) `),b&&(r+=`skewY(${b}deg) `)}const d=t.x.scale*e.x,p=t.y.scale*e.y;return(d!==1||p!==1)&&(r+=`scale(${d}, ${p})`),r||"none"}const e0=["","X","Y","Z"],HM=1e3;let VM=0;function t0(t,e,i,r){const{latestValues:o}=e;o[t]&&(i[t]=o[t],e.setStaticValue(t,0),r&&(r[t]=0))}function av(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const i=Iy(e);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:o,layoutId:l}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",Ie,!(o||l))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&av(r)}function rv({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},d=e==null?void 0:e()){this.id=VM++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(NM),this.nodes.forEach(_M),this.nodes.forEach(IM),this.nodes.forEach(BM)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new SM)}addEventListener(u,d){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Kp),this.eventHandlers.get(u).add(d)}notifyListeners(u,...d){const p=this.eventHandlers.get(u);p&&p.notify(...d)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=vy(u)&&!ME(u),this.instance=u;const{layoutId:d,layout:p,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||d)&&(this.isLayoutDirty=!0),t){let m,y=0;const v=()=>this.root.updateBlockedByResize=!1;Ie.read(()=>{y=window.innerWidth}),t(u,()=>{const S=window.innerWidth;S!==y&&(y=S,this.root.updateBlockedByResize=!0,m&&m(),m=CM(v,250),wc.hasAnimatedSinceResize&&(wc.hasAnimatedSinceResize=!1,this.nodes.forEach(e4)))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&h&&(d||p)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:y,hasRelativeLayoutChanged:v,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||h.getDefaultTransition()||XM,{onLayoutAnimationStart:A,onLayoutAnimationComplete:O}=h.getProps(),j=!this.targetLayout||!iv(this.targetLayout,S),E=!y&&v;if(this.options.layoutRoot||this.resumeFrom||E||y&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const T={...uh(b,"layout"),onPlay:A,onComplete:O};(h.shouldReduceMotion||this.options.layoutRoot)&&(T.delay=0,T.type=!1),this.startAnimation(T),this.setAnimationOrigin(m,E)}else y||e4(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ii(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(GM),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&av(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const y=this.path[m];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:d,layout:p}=this.options;if(d===void 0&&!p)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Qx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Jx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(UM),this.nodes.forEach(zM),this.nodes.forEach(PM)):this.nodes.forEach(Jx),this.clearAllSnapshots();const d=Bt.now();yt.delta=fi(0,1e3/60,d-yt.timestamp),yt.timestamp=d,yt.isProcessing=!0,If.update.process(yt),If.preRender.process(yt),If.render.process(yt),yt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,fh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach($M),this.sharedNodes.forEach(qM)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ie.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Rt(this.snapshot.measuredBox.x)&&!Rt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(d=!1),d&&this.instance){const p=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!nv(this.projectionDelta),p=this.getTransformTemplate(),h=p?p(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&this.instance&&(d||pa(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const d=this.measurePageBox();let p=this.removeElementScroll(d);return u&&(p=this.removeTransform(p)),ZM(p),{animationId:this.root.animationId,measuredBox:d,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:u}=this.options;if(!u)return Qe();const d=u.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(WM))){const{scroll:m}=this.root;m&&(yr(d.x,m.offset.x),yr(d.y,m.offset.y))}return d}removeElementScroll(u){var p;const d=Qe();if(fn(d,u),(p=this.scroll)!=null&&p.wasRoot)return d;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:y,options:v}=m;m!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&fn(d,u),yr(d.x,y.offset.x),yr(d.y,y.offset.y))}return d}applyTransform(u,d=!1){const p=Qe();fn(p,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!d&&m.options.layoutScroll&&m.scroll&&m!==m.root&&vr(p,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),pa(m.latestValues)&&vr(p,m.latestValues)}return pa(this.latestValues)&&vr(p,this.latestValues),p}removeTransform(u){const d=Qe();fn(d,u);for(let p=0;p<this.path.length;p++){const h=this.path[p];if(!h.instance||!pa(h.latestValues))continue;rp(h.latestValues)&&h.updateSnapshot();const m=Qe(),y=h.measurePageBox();fn(m,y),Yx(d,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return pa(this.latestValues)&&Yx(d,this.latestValues),d}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==yt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var v;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==d;if(!(u||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:y}=this.options;if(!(!this.layout||!(m||y))){if(this.resolvedRelativeTargetAt=yt.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),to(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),fn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),nM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):fn(this.target,this.layout.layoutBox),Py(this.target,this.targetDelta)):fn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),to(this.relativeTargetOrigin,this.target,S.target),fn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||rp(this.parent.latestValues)||zy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var b;const u=this.getLead(),d=!!this.resumingFrom||this!==u;let p=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(p=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===yt.timestamp&&(p=!1),p)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;fn(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,v=this.treeScale.y;hA(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Qe());const{target:S}=u;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ix(this.prevProjectionDelta.x,this.projectionDelta.x),Ix(this.prevProjectionDelta.y,this.projectionDelta.y)),eo(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==v||!Kx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Kx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var d;if((d=this.options.visualElement)==null||d.scheduleRender(),u){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=wr(),this.projectionDelta=wr(),this.projectionDeltaWithTransform=wr()}setAnimationOrigin(u,d=!1){const p=this.snapshot,h=p?p.latestValues:{},m={...this.latestValues},y=wr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const v=Qe(),S=p?p.source:void 0,b=this.layout?this.layout.source:void 0,A=S!==b,O=this.getStack(),j=!O||O.members.length<=1,E=!!(A&&!j&&this.options.crossfade===!0&&!this.path.some(FM));this.animationProgress=0;let T;this.mixTargetDelta=k=>{const L=k/1e3;t4(y.x,u.x,L),t4(y.y,u.y,L),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(to(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),YM(this.relativeTarget,this.relativeTargetOrigin,v,L),T&&RM(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=Qe()),fn(T,this.relativeTarget)),A&&(this.animationValues=m,EM(m,h,this.latestValues,L,E,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var d,p,h;this.notifyListeners("animationStart"),(d=this.currentAnimation)==null||d.stop(),(h=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Ii(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ie.update(()=>{wc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Or(0)),this.currentAnimation=wM(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),u.onUpdate&&u.onUpdate(m)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(HM),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:d,target:p,layout:h,latestValues:m}=u;if(!(!d||!p||!h)){if(this!==u&&this.layout&&h&&sv(this.options.animationType,this.layout.layoutBox,h.layoutBox)){p=this.target||Qe();const y=Rt(this.layout.layoutBox.x);p.x.min=u.target.x.min,p.x.max=p.x.min+y;const v=Rt(this.layout.layoutBox.y);p.y.min=u.target.y.min,p.y.max=p.y.min+v}fn(d,p),vr(d,m),eo(this.projectionDeltaWithTransform,this.layoutCorrected,d,m)}}registerSharedNode(u,d){this.sharedNodes.has(u)||this.sharedNodes.set(u,new kM),this.sharedNodes.get(u).add(d);const h=d.options.initialPromotionConfig;d.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(d):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var d;const{layoutId:u}=this.options;return u?((d=this.getStack())==null?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:u}=this.options;return u?(d=this.getStack())==null?void 0:d.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:d,preserveFollowOpacity:p}={}){const h=this.getStack();h&&h.promote(this,p),u&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let d=!1;const{latestValues:p}=u;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(d=!0),!d)return;const h={};p.z&&t0("z",u,h,this.animationValues);for(let m=0;m<e0.length;m++)t0(`rotate${e0[m]}`,u,h,this.animationValues),t0(`skew${e0[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}applyProjectionStyles(u,d){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=vc(d==null?void 0:d.pointerEvents)||"",u.transform=p?p(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=vc(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!pa(this.latestValues)&&(u.transform=p?p({},""):"none",this.hasProjected=!1);return}u.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let y=DM(this.projectionDeltaWithTransform,this.treeScale,m);p&&(y=p(m,y)),u.transform=y;const{x:v,y:S}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${S.origin*100}% 0`,h.animationValues?u.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const b in mo){if(m[b]===void 0)continue;const{correct:A,applyTo:O,isCSSVariable:j}=mo[b],E=y==="none"?m[b]:A(m[b],h);if(O){const T=O.length;for(let k=0;k<T;k++)u[O[k]]=E}else j?this.options.visualElement.renderState.vars[b]=E:u[b]=E}this.options.layoutId&&(u.pointerEvents=h===this?vc(d==null?void 0:d.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var d;return(d=u.currentAnimation)==null?void 0:d.stop()}),this.root.nodes.forEach(Qx),this.root.sharedNodes.clear()}}}function zM(t){t.updateLayout()}function PM(t){var i;const e=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=t.layout,{animationType:l}=t.options,u=e.source!==t.layout.source;l==="size"?pn(y=>{const v=u?e.measuredBox[y]:e.layoutBox[y],S=Rt(v);v.min=r[y].min,v.max=v.min+S}):sv(l,e.layoutBox,r)&&pn(y=>{const v=u?e.measuredBox[y]:e.layoutBox[y],S=Rt(r[y]);v.max=v.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+S)});const d=wr();eo(d,r,e.layoutBox);const p=wr();u?eo(p,t.applyTransform(o,!0),e.measuredBox):eo(p,r,e.layoutBox);const h=!nv(d);let m=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:S}=y;if(v&&S){const b=Qe();to(b,e.layoutBox,v.layoutBox);const A=Qe();to(A,r,S.layoutBox),iv(b,A)||(m=!0),y.options.layoutRoot&&(t.relativeTarget=A,t.relativeTargetOrigin=b,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:p,layoutDelta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:m})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function NM(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function BM(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function $M(t){t.clearSnapshot()}function Qx(t){t.clearMeasurements()}function Jx(t){t.isLayoutDirty=!1}function UM(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function e4(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function _M(t){t.resolveTargetDelta()}function IM(t){t.calcProjection()}function GM(t){t.resetSkewAndRotation()}function qM(t){t.removeLeadSnapshot()}function t4(t,e,i){t.translate=Ye(e.translate,0,i),t.scale=Ye(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function n4(t,e,i,r){t.min=Ye(e.min,i.min,r),t.max=Ye(e.max,i.max,r)}function YM(t,e,i,r){n4(t.x,e.x,i.x,r),n4(t.y,e.y,i.y,r)}function FM(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const XM={duration:.45,ease:[.4,0,.1,1]},i4=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),a4=i4("applewebkit/")&&!i4("chrome/")?Math.round:hn;function r4(t){t.min=a4(t.min),t.max=a4(t.max)}function ZM(t){r4(t.x),r4(t.y)}function sv(t,e,i){return t==="position"||t==="preserve-aspect"&&!tM(Wx(e),Wx(i),.2)}function WM(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const KM=rv({attachResizeListener:(t,e)=>go(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),n0={current:void 0},ov=rv({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!n0.current){const t=new KM({});t.mount(window),t.setOptions({layoutScroll:!0}),n0.current=t}return n0.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),QM={pan:{Feature:gM},drag:{Feature:mM,ProjectionNode:ov,MeasureLayout:Jy}};function s4(t,e,i){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",i==="Start");const o="onHover"+i,l=r[o];l&&Ie.postRender(()=>l(e,Ao(e)))}class JM extends Yi{mount(){const{current:e}=this.node;e&&(this.unmount=SE(e,(i,r)=>(s4(this.node,r,"Start"),o=>s4(this.node,o,"End"))))}unmount(){}}class ej extends Yi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Co(go(this.node.current,"focus",()=>this.onFocus()),go(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function o4(t,e,i){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",i==="Start");const o="onTap"+(i==="End"?"":i),l=r[o];l&&Ie.postRender(()=>l(e,Ao(e)))}class tj extends Yi{mount(){const{current:e}=this.node;e&&(this.unmount=AE(e,(i,r)=>(o4(this.node,r,"Start"),(o,{success:l})=>o4(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const fp=new WeakMap,i0=new WeakMap,nj=t=>{const e=fp.get(t.target);e&&e(t)},ij=t=>{t.forEach(nj)};function aj({root:t,...e}){const i=t||document;i0.has(i)||i0.set(i,{});const r=i0.get(i),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(ij,{root:t,...e})),r[o]}function rj(t,e,i){const r=aj(e);return fp.set(t,i),r.observe(t),()=>{fp.delete(t),r.unobserve(t)}}const sj={some:0,all:1};class oj extends Yi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:i,margin:r,amount:o="some",once:l}=e,u={root:i?i.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:sj[o]},d=p=>{const{isIntersecting:h}=p;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:y}=this.node.getProps(),v=h?m:y;v&&v(p)};return rj(this.node.current,u,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(lj(e,i))&&this.startObserver()}unmount(){}}function lj({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const cj={inView:{Feature:oj},tap:{Feature:tj},focus:{Feature:ej},hover:{Feature:JM}},uj={layout:{ProjectionNode:ov,MeasureLayout:Jy}},dj={...ZA,...cj,...QM,...uj},En=dA(dj,TA),fj=C.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,pj=C.button`
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
`,a0=C(En.div)`
  width: 20px;
  height: 2px;
  background: ${({$isOpen:t,$darkMode:e})=>t||e?"black":"white"};
  border-radius: 2px;
  transition: background 0.3s ease;
`,hj=C(En.div)`
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
`,mj=C(wt)`
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
`,gj=C.p`
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
`;C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;C(En.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 8px;
  overflow: hidden;
`;C.div`
  padding: 10px 0;
`;const xj=C.img`
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: ${({$isOpen:t})=>t?"rotate(180deg)":"rotate(0)"};
`;C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  span {
    flex-grow: 1;
  }

  ${xj} {
    padding: 8px;
    margin-right: -8px;
  }
`;const yj=C.div`
  background-color: ${({$active:t})=>t?"#3098EE":"#c3c2c2ff"};
  position: absolute;
  width: 90%;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`,vj=(t,e,i,r)=>{var l,u,d,p;const o=[i,{code:e,...r||{}}];if((u=(l=t==null?void 0:t.services)==null?void 0:l.logger)!=null&&u.forward)return t.services.logger.forward(o,"warn","react-i18next::",!0);ba(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(p=(d=t==null?void 0:t.services)==null?void 0:d.logger)!=null&&p.warn?t.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},l4={},pp=(t,e,i,r)=>{ba(i)&&l4[i]||(ba(i)&&(l4[i]=new Date),vj(t,e,i,r))},lv=(t,e)=>()=>{if(t.isInitialized)e();else{const i=()=>{setTimeout(()=>{t.off("initialized",i)},0),e()};t.on("initialized",i)}},hp=(t,e,i)=>{t.loadNamespaces(e,lv(t,i))},c4=(t,e,i,r)=>{if(ba(i)&&(i=[i]),t.options.preload&&t.options.preload.indexOf(e)>-1)return hp(t,i,r);i.forEach(o=>{t.options.ns.indexOf(o)<0&&t.options.ns.push(o)}),t.loadLanguages(e,lv(t,r))},wj=(t,e,i={})=>!e.languages||!e.languages.length?(pp(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(t,{lng:i.lng,precheck:(r,o)=>{if(i.bindI18n&&i.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!o(r.isLanguageChangingTo,t))return!1}}),ba=t=>typeof t=="string",bj=t=>typeof t=="object"&&t!==null,Sj=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Cj={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Tj=t=>Cj[t],Ej=t=>t.replace(Sj,Tj);let mp={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Ej};const Aj=(t={})=>{mp={...mp,...t}},Mj=()=>mp;let cv;const jj=t=>{cv=t},Lj=()=>cv,Oj={type:"3rdParty",init(t){Aj(t.options.react),jj(t)}},Rj=R.createContext();class kj{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(i=>{this.usedNamespaces[i]||(this.usedNamespaces[i]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Dj=(t,e)=>{const i=R.useRef();return R.useEffect(()=>{i.current=t},[t,e]),i.current},uv=(t,e,i,r)=>t.getFixedT(e,i,r),Hj=(t,e,i,r)=>R.useCallback(uv(t,e,i,r),[t,e,i,r]),Th=(t,e={})=>{var k,L,P,V;const{i18n:i}=e,{i18n:r,defaultNS:o}=R.useContext(Rj)||{},l=i||r||Lj();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new kj),!l){pp(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const U=(Y,F)=>ba(F)?F:bj(F)&&ba(F.defaultValue)?F.defaultValue:Array.isArray(Y)?Y[Y.length-1]:Y,$=[U,{},!1];return $.t=U,$.i18n={},$.ready=!1,$}(k=l.options.react)!=null&&k.wait&&pp(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...Mj(),...l.options.react,...e},{useSuspense:d,keyPrefix:p}=u;let h=o||((L=l.options)==null?void 0:L.defaultNS);h=ba(h)?[h]:h||["translation"],(V=(P=l.reportNamespaces).addUsedNamespaces)==null||V.call(P,h);const m=(l.isInitialized||l.initializedStoreOnce)&&h.every(U=>wj(U,l,u)),y=Hj(l,e.lng||null,u.nsMode==="fallback"?h:h[0],p),v=()=>y,S=()=>uv(l,e.lng||null,u.nsMode==="fallback"?h:h[0],p),[b,A]=R.useState(v);let O=h.join();e.lng&&(O=`${e.lng}${O}`);const j=Dj(O),E=R.useRef(!0);R.useEffect(()=>{const{bindI18n:U,bindI18nStore:$}=u;E.current=!0,!m&&!d&&(e.lng?c4(l,e.lng,h,()=>{E.current&&A(S)}):hp(l,h,()=>{E.current&&A(S)})),m&&j&&j!==O&&E.current&&A(S);const Y=()=>{E.current&&A(S)};return U&&(l==null||l.on(U,Y)),$&&(l==null||l.store.on($,Y)),()=>{E.current=!1,l&&U&&(U==null||U.split(" ").forEach(F=>l.off(F,Y))),$&&l&&$.split(" ").forEach(F=>l.store.off(F,Y))}},[l,O]),R.useEffect(()=>{E.current&&m&&A(v)},[l,p,m]);const T=[b,l,m];if(T.t=b,T.i18n=l,T.ready=m,m||!m&&!d)return T;throw new Promise(U=>{e.lng?c4(l,e.lng,h,()=>U()):hp(l,h,()=>U())})},Vj=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  overflow: auto;
  margin-top: 40px;
`,u4=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  width: 166px;
`,Bi=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,zj=C.div`
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
`,Pj=C.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
`,Nj=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 2 * 0.25rem */
  width: 100%;
`,Bj=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;
`,$j=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 400;
  line-height: 1.2em;
  width: fit-content;
`,Uj={open:{rotate:45,y:8},closed:{rotate:0,y:0}},_j={open:{opacity:0},closed:{opacity:1}},Ij={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},Gj={open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},qj=({isOpen:t,setIsOpen:e})=>{const[,i]=R.useState(!1),{t:r}=Th(),o=vn(),l=["/contact","/service","/tips","/pricing","/fridge"].some(h=>o.pathname.startsWith(h));R.useEffect(()=>(document.body.style.overflow=t?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[t]);const u=()=>{e(!1),i(!1)},d=h=>{const m=o.pathname;return h==="/home#hero"?m==="/"||m==="/home":m.startsWith(h.split("#")[0])},p=[{to:"/home#hero",label:"Home"},{to:"/service#all",label:"Services"},{to:"/about#ap",label:"About Us"},{to:"/tips#app",label:"Tips"},{to:"/contact#ap",label:"Contact"}];return x.jsxs(fj,{children:[x.jsxs(pj,{onClick:()=>e(!t),"aria-label":t?"Close menu":"Open menu",children:[x.jsx(a0,{$isOpen:t,$darkMode:l,animate:t?"open":"closed",variants:Uj}),x.jsx(a0,{$isOpen:t,$darkMode:l,animate:t?"open":"closed",variants:_j}),x.jsx(a0,{$isOpen:t,$darkMode:l,animate:t?"open":"closed",variants:Ij})]}),x.jsx(by,{children:t&&x.jsxs(hj,{initial:"closed",animate:"open",exit:"closed",variants:Gj,transition:{duration:.3},children:[p.map((h,m)=>{const y=d(h.to);return x.jsxs("div",{children:[x.jsx(mj,{to:h.to,onClick:u,children:x.jsx(gj,{$active:y,children:r(h.label)})}),x.jsx(yj,{})]},m)}),x.jsxs(Vj,{children:[x.jsxs(u4,{children:[x.jsx(Bi,{children:"Washing Machine Fix"}),x.jsx(Bi,{children:"Dishwasher Repair"}),x.jsx(Bi,{children:"Oven Maintenance"}),x.jsx(Bi,{children:"Dryer Troubleshooting"})]}),x.jsxs(u4,{children:[x.jsx(Bi,{children:"Microwave Service"}),x.jsx(Bi,{children:"Air Conditioner Repair"}),x.jsx(Bi,{children:"Coffee Maker Repair"}),x.jsx(Bi,{children:"Blender Maintenance"})]})]}),x.jsxs(zj,{children:[x.jsx(Pj,{}),x.jsxs(Nj,{children:[x.jsx(Bj,{children:"Designed by TRBN"}),x.jsx($j,{children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})})]})},Yj="/assets/LogoandTextContainer-CnBPFIWK.svg",Fj=C.div`
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
`,Xj=C.img`
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
`,Zj=C.div`
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
`,Wj=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Kj=C.p`
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
`,Qj=C.p`
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
`,Jj=C.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,dv=C(wt)`
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
`;C.button`
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
`;C.div`
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
`;C.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.div`
  display: flex;
  align-items: center;
  gap: 7px;
  width: 156px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.img`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  max-width: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.div`
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
`;C.div`
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
`;C.span`
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
`;C.p`
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
`;C.div`
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
`;C.div`
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
`;C.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 1440px) {
    width: auto;
    margin: 0 auto;
  }
`;C.img`
  border-radius: 18px;
  border: 1px solid var(--black);
  width: 36px;
  height: 36px;
  margin-left: -20px;
`;C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
`;C.div`
  margin: 0 auto;
  width: 285px;
  // height: 43px;
  margin-top: 20px;
  display: flex;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1440px) {
  }
`;C.button`
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
`;st`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 73, 74, 0.81);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`;C.button`
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
`;const d4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgBzZFhEcIwDIVTFFRCHYCESZgDJgEHmwPmYJWAhKGgONgccCgoL3e5I1eaAf/I3Xftkry+ZnVUiZyzx9KBPXiAm3Muln27ivCIJYEArmAFLfILCGQFimYTcidwNw8QYSv7A5iEILkBjDUhNy+yD3IQu40q79m9Jm7ALPsOXFRtVe75k7OX+fjAvrjRu7OauaHXz5v5BsqVbzRZYi4moxa+ea4IzkXOi3CgrZDGxLMW39vCilMvwki/hJox0t/FEx1sC+f02XQyAAAAAElFTkSuQmCC",eL=()=>{const[t,e]=R.useState(!1),[i]=R.useState(!1),[r,o]=R.useState(!1),l=vn(),u=["/contact","/service","/tips","/pricing","/fridge"].some(S=>l.pathname.startsWith(S)),d=i||r,p=Lp(),h=S=>{S.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),window.location.pathname!=="/home"&&p("/home")};R.useEffect(()=>{const S=new IntersectionObserver(([A])=>{e(!A.isIntersecting)},{threshold:.1,rootMargin:"50px 0px 0px 0px"}),b=document.createElement("div");return b.style.position="absolute",b.style.top="50px",b.style.height="1px",b.style.pointerEvents="none",document.body.appendChild(b),S.observe(b),()=>{S.disconnect(),document.body.contains(b)&&document.body.removeChild(b)}},[]);const m=Ue({query:"(max-width: 1439px)"}),y=Ue({query:"(min-width: 768px) and (max-width: 1439px)"}),v=Ue({query:"(min-width: 1440px)"});return x.jsxs(nC,{$isScrolled:t,$darkMode:u,children:[x.jsxs(iC,{id:"header",children:[x.jsx(aC,{to:"/home#hero",onClick:h,$overlayOpen:d,$darkMode:u,children:x.jsx("img",{src:Yj,alt:"Logo"})}),!m&&x.jsxs(rC,{children:[x.jsx(_s,{children:x.jsx(Is,{to:"/home#hero",$overlayOpen:d,$darkMode:u,children:"Home"})}),x.jsx(_s,{children:x.jsx(Is,{to:"/service#all",$overlayOpen:d,$darkMode:u,children:"Services"})}),x.jsx(_s,{children:x.jsx(Is,{to:"/about#ap",$overlayOpen:d,$darkMode:u,children:"About Us"})}),x.jsx(_s,{children:x.jsx(Is,{to:"/tips#app",$overlayOpen:d,$darkMode:u,children:"Tips"})}),x.jsx(_s,{children:x.jsx(Is,{to:"/contact#ap",$overlayOpen:d,$darkMode:u,children:"Contact"})})]}),v&&x.jsxs(I3,{children:[x.jsxs(ql,{children:[x.jsx(Ni,{$overlayOpen:d,$darkMode:u,children:x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),x.jsx(Ni,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),x.jsxs(ql,{children:[x.jsxs(Ni,{$overlayOpen:d,$darkMode:u,children:[x.jsx("img",{src:d4,alt:"🗺️"}),x.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),x.jsx(Ni,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]}),x.jsx(sC,{children:x.jsxs("div",{style:{display:"flex"},children:[x.jsx(dv,{to:"/contact#ap",children:"Contact Us"}),x.jsx(E6,{$overlayOpen:d,$darkMode:u,children:x.jsx("a",{href:"tel:+18055002705",children:"Call Us"})}),m&&x.jsx(qj,{isOpen:r,setIsOpen:o})]})})]}),y&&x.jsxs(I3,{children:[x.jsxs(ql,{children:[x.jsx(Ni,{$overlayOpen:d,$darkMode:u,children:x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),x.jsx(Ni,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),x.jsxs(ql,{children:[x.jsxs(Ni,{$overlayOpen:d,$darkMode:u,children:[x.jsx("img",{src:d4,alt:"🗺️"}),x.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),x.jsx(Ni,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]})]})},tL=C.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 32px 16px 24px 16px;
  background: #242424;
  min-width: 100vw;

  overflow: auto;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,nL=C.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 338px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,iL=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
  }
`,qs=C(wt)`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: ${({size:t})=>t||"15px"};
  font-weight: ${({weight:t})=>t||"normal"};
  line-height: 1.2em;
  width: fit-content;
  display: flex;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,r0=C.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: ${({size:t})=>t||"15px"};
  font-weight: ${({weight:t})=>t||"normal"};
  line-height: 1.2em;
  width: fit-content;
  display: flex;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,aL=C.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
  }
`,rL=C.p`
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

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,sL=C.div`
  display: flex;
  align-items: center;
  gap: 13px;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }

  @media screen and (min-width: 1440px) {
  }
`,oL=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,lL=C.div`
  background: rgba(255, 255, 255, ${({opacity:t})=>t||.5});
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,cL=C.svg`
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 114px;
  }

  @media screen and (min-width: 1440px) {
    height: 222px;
  }
`;C.footer`
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
  }
`;C.div`
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
`;C.p`
  padding: 0px auto 50px auto;
  width: 98%;
  height: 2px; /* Збільшуємо висоту для еліпса */
  margin: 0 auto;
  background: var(--white-24);
  position: relative;
  z-index: 10;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.div`
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

  @media screen and (min-width: 1440px) {
    display: flex;
    margin: 0 auto;
    padding: 50px 0px;
  }
`;C.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 5px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.a`
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
`;C.div`
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
`;C(wt)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: var(--white-50);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.a`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: var(--white-50);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.div`
  display: flex;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C(wt)`
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
`;C.div`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: var(--white-50);
  border: 1px solid var(--white-50);
  width: 1px;
  height: 1px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.button`
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
  padding: 8px 16px;
  width: max-content;
  height: 34px;

  backdrop-filter: blur(168px);
  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%),
    rgba(255, 255, 255, 0.03);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.div`
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
`;C.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
  margin: 16px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.a`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.img`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const uL=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  overflow: auto;
  font-family: 'Geist', sans-serif;

  /* Mobile First (375px) */
  @media (min-width: 375px) {
    gap: 16px;

    > * {
      width: 100%;
    }
  }

  /* Tablet (768px) */
  @media (min-width: 768px) {
    gap: 28px;

    > * {
      width: 100%;
    }
  }

  /* Desktop (1440px) */
  @media (min-width: 1440px) {
    gap: 28px;

    > * {
      width: 100%;

      > * {
        padding-right: 24px;
      }
    }
  }
`,dL=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  /* Mobile First */
  gap: 12px;

  /* Tablet */
  @media (min-width: 768px) {
    gap: 20px;
  }

  /* Desktop */
  @media (min-width: 1440px) {
    gap: 28px;
  }
`,fL=C.p`
  color: #000000;
  font-weight: 400;
  width: 100%;
  margin: 0;

  /* Mobile First */
  font-size: 20px;
  line-height: 1.3em;

  /* Tablet */
  @media (min-width: 768px) {
    font-size: 24px;
    width: fit-content;
  }

  /* Desktop */
  @media (min-width: 1440px) {
    font-size: 24px;
    width: fit-content;
  }
`,pL=C.p`
  color: rgba(0, 0, 0, 0.75);
  font-weight: 400;
  width: 100%;
  margin: 0;

  /* Mobile First */
  font-size: 16px;
  line-height: 1.25em;

  /* Tablet */
  @media (min-width: 768px) {
    font-size: 17px;
  }

  /* Desktop */
  @media (min-width: 1440px) {
    font-size: 17px;
  }
`,fv=C.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  padding: 20px;
`,pv=C.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  position: relative;
 z-index: 9000;
  @media (min-width: 768px) {
    max-width: 80%;
    padding: 40px;
  }

  @media (min-width: 1440px) {
    max-width: 70%;
    padding: 50px;
  }
`,hv=C.button`
  position: fixed;
   bottom: 85%;
    right: 12%;
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: #403f3fff;
  z-index: 1001;

  &:hover {
    color: #3098ee;
  }

  @media (min-width: 768px) {
    bottom: 85%;
    right: 17%;
    font-size: 38px;
  }
`,hL=C.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 55px;
  line-height: 90%;
  color: var(--blue-500);
  text-align: center;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`,mL=C.div`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
  height: auto;
  padding: 30px 0;
  background: var(--blue-form);
   z-index: 9000;
`,mv=()=>{const t=[{title:"Last Updated: January 20, 2025",content:"At Airtexno, we are dedicated to safeguarding your privacy and ensuring that your personal data is managed securely and responsibly. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or engage with our services."},{title:"INFORMATION WE COLLECT",content:"We may collect the following types of information: Personal Information: Name, email address, phone number, company name, and other details you provide when filling out forms, subscribing to newsletters, or contacting us directly. Usage Data: Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent. We may collect this through cookies and analytics tools. Third-Party Data: Information from services you've authorized us to use (e.g., analytics providers)."},{title:"HOW WE USE YOUR INFORMATION",content:"We may use or share your information with: Service Providers: To help operate our website, analytics, marketing, or provide services on our behalf. Legal Requirements: If required by applicable law or to comply with legal processes. Business Transfers: In the case of a merger or acquisition, data may be shared as part of that process. We do not sell personal data to third parties."},{title:"COOKIES AND TRACKING TECHNOLOGIES",content:"Our site uses cookies and similar technologies to enhance performance and user experience. Cookies help remember your preferences and analyze behavior. You can manage cookies through your browser settings. Please note that disabling cookies may impact site functionality."},{title:"DATA RETENTION",content:"We retain your data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations."},{title:"YOUR RIGHTS",content:"Depending on your location, you may have the right to: Access your data. Request corrections to inaccurate or incomplete data. Request deletion of your personal data. Object to certain processing activities. Request a copy of your data in machine-readable format. To exercise these rights, please contact us using the details below."},{title:"DATA SECURITY",content:"We implement appropriate technical and organizational measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection."},{title:"THIRD-PARTY LINKS",content:"Our website may contain links to external sites. We are not responsible for their privacy practices. We recommend reviewing their privacy policies separately."},{title:"INTERNATIONAL DATA TRANSFERS",content:"If you access our site from outside our operating country, your data may be transferred and processed in other regions where our servers or partners are located. By using the site, you consent to this transfer."},{title:"UPDATES TO THIS POLICY",content:"We may update this Privacy Policy as necessary. Any changes will be reflected by updating the 'Last Updated' date above. We encourage you to check this page periodically."}];return x.jsxs("div",{children:[x.jsx(mL,{children:x.jsx(hL,{children:"Privacy and terms"})}),x.jsx(uL,{children:t.map((e,i)=>x.jsxs(dL,{children:[x.jsx(fL,{children:e.title}),x.jsx(pL,{children:e.content})]},i))})]})},gL=()=>{const[t,e]=R.useState(!1),i=()=>{e(!0)},r=()=>{e(!1)};return x.jsxs(x.Fragment,{children:[x.jsx(tL,{children:x.jsxs(nL,{children:[x.jsxs(iL,{children:[x.jsxs(rL,{children:[x.jsx("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:"801 Tioga pl, Newbury Park, CA 91320"})," ",x.jsx("br",{}),x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"}),x.jsx("br",{})," ",x.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]}),x.jsxs(sL,{children:[x.jsx(qs,{to:"/home#hero",children:"Home"}),x.jsx(qs,{to:"/service#all",children:"Services"}),x.jsx(qs,{to:"/about#ap",children:"About Us"}),x.jsx(qs,{to:"/tips#app",children:"Tips"}),x.jsx(qs,{to:"/contact#ap",children:"Contacts"}),x.jsx(r0,{onClick:i,style:{cursor:"pointer"},children:"Privacy and Terms"})]})]}),x.jsxs(oL,{children:[x.jsxs(cL,{viewBox:"0 0 343 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[x.jsx("path",{d:"M0 54.8045L19.396 1.71207H26.1359L45.457 54.8045H39.9152L34.2238 38.8768H11.2332L5.5417 54.8045H0ZM12.9556 33.9414H32.5013L22.7659 6.27353L12.9556 33.9414Z",fill:"#3098EE"}),x.jsx("path",{d:"M51.2842 54.8045V1.71207H56.3765V54.8045H51.2842Z",fill:"#3098EE"}),x.jsx("path",{d:"M67.6308 54.8045V1.71207H87.1016C90.896 1.71207 94.1161 2.36015 96.7622 3.6563C99.4581 4.9026 101.53 6.69727 102.978 9.04032C104.426 11.3834 105.15 14.2 105.15 17.4902C105.15 19.933 104.575 22.1015 103.427 23.9959C102.329 25.8903 100.856 27.4108 99.0088 28.5574C97.1616 29.704 95.1646 30.3521 93.0178 30.5016L92.6433 29.8286C96.1381 29.8286 98.8341 30.6262 100.731 32.2215C102.678 33.7669 103.802 36.2097 104.101 39.5498L105.449 54.8045H100.282L99.0088 39.9984C98.8091 37.5557 97.9354 35.761 96.3877 34.6144C94.84 33.418 92.3438 32.8197 88.8989 32.8197H72.7232V54.8045H67.6308ZM72.7232 27.8844H87.9254C91.5699 27.8844 94.4407 26.987 96.5375 25.1924C98.6843 23.3478 99.7577 20.7555 99.7577 17.4155C99.7577 13.9258 98.6843 11.2587 96.5375 9.41421C94.3907 7.56968 91.2205 6.64742 87.0267 6.64742H72.7232V27.8844Z",fill:"#3098EE"}),x.jsx("path",{d:"M125.684 54.8045V9.1151H109.359V1.71207H150.098V9.1151H133.772V54.8045H125.684Z",fill:"white"}),x.jsx("path",{d:"M153.991 54.8045V1.71207H188.589V9.1151H162.079V24.5941H187.691V31.7728H162.079V47.4014H189.188V54.8045H153.991Z",fill:"white"}),x.jsx("path",{d:"M192.736 54.8045L210.41 28.1835L192.886 1.71207H202.397L215.502 21.9021L228.383 1.71207H237.819L220.295 28.0339L238.043 54.8045H228.533L215.352 34.3153L202.172 54.8045H192.736Z",fill:"white"}),x.jsx("path",{d:"M243.289 54.8045V1.71207H253.549L278.112 45.0085V1.71207H286.2V54.8045H275.566L251.377 12.4801V54.8045H243.289Z",fill:"white"}),x.jsx("path",{d:"M318.137 56.0009C312.995 56.0009 308.577 54.9042 304.882 52.7107C301.188 50.4674 298.342 47.2768 296.345 43.1391C294.348 39.0014 293.349 34.066 293.349 28.333C293.349 22.6001 294.348 17.6647 296.345 13.527C298.342 9.33943 301.188 6.12397 304.882 3.88063C308.577 1.63729 312.995 0.515625 318.137 0.515625C323.329 0.515625 327.773 1.63729 331.467 3.88063C335.212 6.12397 338.057 9.33943 340.004 13.527C342.001 17.6647 343 22.6001 343 28.333C343 34.066 342.001 39.0014 340.004 43.1391C338.057 47.2768 335.212 50.4674 331.467 52.7107C327.773 54.9042 323.329 56.0009 318.137 56.0009ZM318.137 48.5979C321.582 48.5979 324.528 47.8003 326.974 46.205C329.47 44.6097 331.367 42.3165 332.665 39.3254C333.964 36.2844 334.613 32.6203 334.613 28.333C334.613 24.0458 333.964 20.3817 332.665 17.3407C331.367 14.2997 329.47 11.9816 326.974 10.3863C324.528 8.74121 321.582 7.91865 318.137 7.91865C314.742 7.91865 311.822 8.74121 309.375 10.3863C306.929 11.9816 305.032 14.2997 303.684 17.3407C302.386 20.3817 301.737 24.0458 301.737 28.333C301.737 32.6203 302.386 36.2844 303.684 39.3254C305.032 42.3165 306.929 44.6097 309.375 46.205C311.822 47.8003 314.742 48.5979 318.137 48.5979Z",fill:"white"})]}),x.jsx(lL,{opacity:.5}),x.jsxs(aL,{children:[x.jsx(r0,{size:"14px",weight:"500",children:"Designed by TRBN"}),x.jsx(r0,{size:"14px",children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})}),t&&x.jsx(fv,{onClick:r,children:x.jsxs(pv,{onClick:o=>o.stopPropagation(),children:[x.jsx(hv,{onClick:r,children:"×"}),x.jsx(mv,{})]})})]})},xL="data:image/svg+xml,%3csvg%20width='1360'%20height='220'%20viewBox='0%200%201360%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%20215.256L76.9053%204.74393H103.629L180.237%20215.256H158.265L135.698%20152.102H44.5397L21.9729%20215.256H0ZM51.3692%20132.534H128.868L90.2672%2022.8302L51.3692%20132.534Z'%20fill='%233098EE'/%3e%3cpath%20d='M203.342%20215.256V4.74393H223.534V215.256H203.342Z'%20fill='%233098EE'/%3e%3cpath%20d='M268.157%20215.256V4.74393H345.359C360.404%204.74393%20373.172%207.31356%20383.663%2012.4528C394.353%2017.3944%20402.568%2024.5103%20408.309%2033.8005C414.049%2043.0907%20416.92%2054.2588%20416.92%2067.3046C416.92%2076.9901%20414.643%2085.5885%20410.09%2093.0997C405.735%20100.611%20399.896%20106.64%20392.571%20111.186C385.247%20115.732%20377.329%20118.302%20368.817%20118.895L367.332%20116.226C381.189%20116.226%20391.879%20119.389%20399.401%20125.714C407.121%20131.842%20411.575%20141.527%20412.763%20154.771L418.108%20215.256H397.619L392.571%20156.55C391.78%20146.864%20388.315%20139.748%20382.179%20135.202C376.042%20130.458%20366.144%20128.086%20352.486%20128.086H288.348V215.256H268.157ZM288.348%20108.518H348.626C363.076%20108.518%20374.459%20104.96%20382.773%2097.8437C391.285%2090.5301%20395.541%2080.2516%20395.541%2067.0081C395.541%2053.1716%20391.285%2042.5966%20382.773%2035.283C374.261%2027.9694%20361.69%2024.3127%20345.062%2024.3127H288.348V108.518Z'%20fill='%233098EE'/%3e%3cpath%20d='M498.339%20215.256V34.097H433.608V4.74393H595.139V34.097H530.408V215.256H498.339Z'%20fill='white'/%3e%3cpath%20d='M610.577%20215.256V4.74393H747.76V34.097H642.646V95.4717H744.196V123.935H642.646V185.903H750.135V215.256H610.577Z'%20fill='white'/%3e%3cpath%20d='M764.202%20215.256L834.278%20109.704L764.796%204.74393H802.506L854.469%2084.7978L905.542%204.74393H942.955L873.473%20109.111L943.846%20215.256H906.135L853.875%20134.016L801.616%20215.256H764.202Z'%20fill='white'/%3e%3cpath%20d='M964.645%20215.256V4.74393H1005.32L1102.72%20176.415V4.74393H1134.79V215.256H1092.62L996.714%2047.4393V215.256H964.645Z'%20fill='white'/%3e%3cpath%20d='M1261.42%20220C1241.03%20220%201223.51%20215.651%201208.86%20206.954C1194.21%20198.059%201182.93%20185.409%201175.01%20169.003C1167.09%20152.597%201163.13%20133.028%201163.13%20110.296C1163.13%2087.5651%201167.09%2067.9964%201175.01%2051.5903C1182.93%2034.9865%201194.21%2022.2372%201208.86%2013.3423C1223.51%204.44743%201241.03%200%201261.42%200C1282.01%200%201299.62%204.44743%201314.27%2013.3423C1329.12%2022.2372%201340.4%2034.9865%201348.12%2051.5903C1356.04%2067.9964%201360%2087.5651%201360%20110.296C1360%20133.028%201356.04%20152.597%201348.12%20169.003C1340.4%20185.409%201329.12%20198.059%201314.27%20206.954C1299.62%20215.651%201282.01%20220%201261.42%20220ZM1261.42%20190.647C1275.08%20190.647%201286.76%20187.484%201296.46%20181.159C1306.35%20174.834%201313.88%20165.741%201319.02%20153.881C1324.17%20141.824%201326.74%20127.296%201326.74%20110.296C1326.74%2093.2974%201324.17%2078.7691%201319.02%2066.7116C1313.88%2054.6541%201306.35%2045.4627%201296.46%2039.1375C1286.76%2032.6145%201275.08%2029.3531%201261.42%2029.3531C1247.96%2029.3531%201236.38%2032.6145%201226.68%2039.1375C1216.98%2045.4627%201209.46%2054.6541%201204.11%2066.7116C1198.96%2078.7691%201196.39%2093.2974%201196.39%20110.296C1196.39%20127.296%201198.96%20141.824%201204.11%20153.881C1209.46%20165.741%201216.98%20174.834%201226.68%20181.159C1236.38%20187.484%201247.96%20190.647%201261.42%20190.647Z'%20fill='white'/%3e%3c/svg%3e",yL="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",vL=st`
  from { opacity: 0; }
  to { opacity: 1; }
`,wL=st`
  from { opacity: 1; }
  to { opacity: 0; }
`,bL=st`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
`,SL=C.div`
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  ${({$hide:t})=>t&&xn`
      animation: ${wL} 1s forwards;
    `}
`,CL=C.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  ${({$visible:t})=>t&&xn`
      animation: ${vL} 1.5s forwards;
    `}
`,TL=C.img`
  position: absolute;
  width: min-content;
  height: 27px;
  opacity: 0;
  ${({$show:t})=>t&&xn`
      animation: ${bL} 2s forwards;
    `}

      @media screen and (min-width: 744px) {
   height: 100px;
  }

  @media screen and (min-width: 1440px) {
  height: 240px;
  }
`,EL=({onComplete:t})=>{const[e,i]=R.useState(!0),[r,o]=R.useState(!1),[l,u]=R.useState(!1),d=R.useRef(null);return R.useEffect(()=>{d.current&&(d.current.onended=()=>{i(!1),o(!0),setTimeout(()=>{u(!0),setTimeout(t,1e3)},3e3)})},[t]),x.jsxs(SL,{$hide:l,children:[e&&x.jsx(CL,{ref:d,$visible:e,autoPlay:!0,muted:!0,playsInline:!0,children:x.jsx("source",{src:yL,type:"video/mp4"})}),r&&x.jsx(TL,{src:xL,alt:"Logo",$show:r})]})},AL=()=>{const t=vn(),[e,i]=R.useState(!1);R.useEffect(()=>{const o=()=>{sessionStorage.clear()};return window.addEventListener("beforeunload",o),()=>{window.removeEventListener("beforeunload",o)}},[]),R.useEffect(()=>{sessionStorage.getItem("hasSeenPreloader")||i(!0)},[]);const r=()=>{sessionStorage.setItem("hasSeenPreloader","true"),i(!1)};return R.useEffect(()=>{if(t.hash){const o=t.hash.replace("#",""),l=document.getElementById(o);l&&setTimeout(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})},400)}else window.scrollTo({top:0,behavior:"auto"})},[t.pathname]),e?x.jsx(EL,{onComplete:r}):x.jsxs(x.Fragment,{children:[x.jsx(eL,{}),x.jsx(R.Suspense,{children:x.jsx(Tw,{})}),x.jsx(gL,{})]})};function f4(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function Eh(t,e){t===void 0&&(t={}),e===void 0&&(e={});const i=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:f4(e[r])&&f4(t[r])&&Object.keys(e[r]).length>0&&Eh(t[r],e[r])})}const gv={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function In(){const t=typeof document<"u"?document:{};return Eh(t,gv),t}const ML={document:gv,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function Mt(){const t=typeof window<"u"?window:{};return Eh(t,ML),t}function jL(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function LL(t){const e=t;Object.keys(e).forEach(i=>{try{e[i]=null}catch{}try{delete e[i]}catch{}})}function kc(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function ci(){return Date.now()}function OL(t){const e=Mt();let i;return e.getComputedStyle&&(i=e.getComputedStyle(t,null)),!i&&t.currentStyle&&(i=t.currentStyle),i||(i=t.style),i}function RL(t,e){e===void 0&&(e="x");const i=Mt();let r,o,l;const u=OL(t);return i.WebKitCSSMatrix?(o=u.transform||u.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(d=>d.replace(",",".")).join(", ")),l=new i.WebKitCSSMatrix(o==="none"?"":o)):(l=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=l.toString().split(",")),e==="x"&&(i.WebKitCSSMatrix?o=l.m41:r.length===16?o=parseFloat(r[12]):o=parseFloat(r[4])),e==="y"&&(i.WebKitCSSMatrix?o=l.m42:r.length===16?o=parseFloat(r[13]):o=parseFloat(r[5])),o||0}function Kl(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function kL(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Kt(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){const r=i<0||arguments.length<=i?void 0:arguments[i];if(r!=null&&!kL(r)){const o=Object.keys(Object(r)).filter(l=>e.indexOf(l)<0);for(let l=0,u=o.length;l<u;l+=1){const d=o[l],p=Object.getOwnPropertyDescriptor(r,d);p!==void 0&&p.enumerable&&(Kl(t[d])&&Kl(r[d])?r[d].__swiper__?t[d]=r[d]:Kt(t[d],r[d]):!Kl(t[d])&&Kl(r[d])?(t[d]={},r[d].__swiper__?t[d]=r[d]:Kt(t[d],r[d])):t[d]=r[d])}}}return t}function Ql(t,e,i){t.style.setProperty(e,i)}function xv(t){let{swiper:e,targetPosition:i,side:r}=t;const o=Mt(),l=-e.translate;let u=null,d;const p=e.params.speed;e.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(e.cssModeFrameID);const h=i>l?"next":"prev",m=(v,S)=>h==="next"&&v>=S||h==="prev"&&v<=S,y=()=>{d=new Date().getTime(),u===null&&(u=d);const v=Math.max(Math.min((d-u)/p,1),0),S=.5-Math.cos(v*Math.PI)/2;let b=l+S*(i-l);if(m(b,i)&&(b=i),e.wrapperEl.scrollTo({[r]:b}),m(b,i)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:b})}),o.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=o.requestAnimationFrame(y)};y()}function Pn(t,e){e===void 0&&(e="");const i=Mt(),r=[...t.children];return i.HTMLSlotElement&&t instanceof HTMLSlotElement&&r.push(...t.assignedElements()),e?r.filter(o=>o.matches(e)):r}function DL(t,e){const i=[e];for(;i.length>0;){const r=i.shift();if(t===r)return!0;i.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function HL(t,e){const i=Mt();let r=e.contains(t);return!r&&i.HTMLSlotElement&&e instanceof HTMLSlotElement&&(r=[...e.assignedElements()].includes(t),r||(r=DL(t,e))),r}function Dc(t){try{console.warn(t);return}catch{}}function Hc(t,e){e===void 0&&(e=[]);const i=document.createElement(t);return i.classList.add(...Array.isArray(e)?e:jL(e)),i}function VL(t,e){const i=[];for(;t.previousElementSibling;){const r=t.previousElementSibling;e?r.matches(e)&&i.push(r):i.push(r),t=r}return i}function zL(t,e){const i=[];for(;t.nextElementSibling;){const r=t.nextElementSibling;e?r.matches(e)&&i.push(r):i.push(r),t=r}return i}function _i(t,e){return Mt().getComputedStyle(t,null).getPropertyValue(e)}function Vc(t){let e=t,i;if(e){for(i=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(i+=1);return i}}function yv(t,e){const i=[];let r=t.parentElement;for(;r;)e?r.matches(e)&&i.push(r):i.push(r),r=r.parentElement;return i}function gp(t,e,i){const r=Mt();return t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function pt(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}function zc(t,e){e===void 0&&(e=""),typeof trustedTypes<"u"?t.innerHTML=trustedTypes.createPolicy("html",{createHTML:i=>i}).createHTML(e):t.innerHTML=e}function s0(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l=Mt();i({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let u,d=ci(),p;const h=[];function m(T){let V=0,U=0,$=0,Y=0;return"detail"in T&&(U=T.detail),"wheelDelta"in T&&(U=-T.wheelDelta/120),"wheelDeltaY"in T&&(U=-T.wheelDeltaY/120),"wheelDeltaX"in T&&(V=-T.wheelDeltaX/120),"axis"in T&&T.axis===T.HORIZONTAL_AXIS&&(V=U,U=0),$=V*10,Y=U*10,"deltaY"in T&&(Y=T.deltaY),"deltaX"in T&&($=T.deltaX),T.shiftKey&&!$&&($=Y,Y=0),($||Y)&&T.deltaMode&&(T.deltaMode===1?($*=40,Y*=40):($*=800,Y*=800)),$&&!V&&(V=$<1?-1:1),Y&&!U&&(U=Y<1?-1:1),{spinX:V,spinY:U,pixelX:$,pixelY:Y}}function y(){e.enabled&&(e.mouseEntered=!0)}function v(){e.enabled&&(e.mouseEntered=!1)}function S(T){return e.params.mousewheel.thresholdDelta&&T.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&ci()-d<e.params.mousewheel.thresholdTime?!1:T.delta>=6&&ci()-d<60?!0:(T.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),o("scroll",T.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),o("scroll",T.raw)),d=new l.Date().getTime(),!1)}function b(T){const k=e.params.mousewheel;if(T.direction<0){if(e.isEnd&&!e.params.loop&&k.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&k.releaseOnEdges)return!0;return!1}function A(T){let k=T,L=!0;if(!e.enabled||T.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const P=e.params.mousewheel;e.params.cssMode&&k.preventDefault();let V=e.el;e.params.mousewheel.eventsTarget!=="container"&&(V=document.querySelector(e.params.mousewheel.eventsTarget));const U=V&&V.contains(k.target);if(!e.mouseEntered&&!U&&!P.releaseOnEdges)return!0;k.originalEvent&&(k=k.originalEvent);let $=0;const Y=e.rtlTranslate?-1:1,F=m(k);if(P.forceToAxis)if(e.isHorizontal())if(Math.abs(F.pixelX)>Math.abs(F.pixelY))$=-F.pixelX*Y;else return!0;else if(Math.abs(F.pixelY)>Math.abs(F.pixelX))$=-F.pixelY;else return!0;else $=Math.abs(F.pixelX)>Math.abs(F.pixelY)?-F.pixelX*Y:-F.pixelY;if($===0)return!0;P.invert&&($=-$);let te=e.getTranslate()+$*P.sensitivity;if(te>=e.minTranslate()&&(te=e.minTranslate()),te<=e.maxTranslate()&&(te=e.maxTranslate()),L=e.params.loop?!0:!(te===e.minTranslate()||te===e.maxTranslate()),L&&e.params.nested&&k.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const ie={time:ci(),delta:Math.abs($),direction:Math.sign($),raw:T};h.length>=2&&h.shift();const oe=h.length?h[h.length-1]:void 0;if(h.push(ie),oe?(ie.direction!==oe.direction||ie.delta>oe.delta||ie.time>oe.time+150)&&S(ie):S(ie),b(ie))return!0}else{const ie={time:ci(),delta:Math.abs($),direction:Math.sign($)},oe=p&&ie.time<p.time+500&&ie.delta<=p.delta&&ie.direction===p.direction;if(!oe){p=void 0;let re=e.getTranslate()+$*P.sensitivity;const B=e.isBeginning,W=e.isEnd;if(re>=e.minTranslate()&&(re=e.minTranslate()),re<=e.maxTranslate()&&(re=e.maxTranslate()),e.setTransition(0),e.setTranslate(re),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!B&&e.isBeginning||!W&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:ie.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(u),u=void 0,h.length>=15&&h.shift();const K=h.length?h[h.length-1]:void 0,ee=h[0];if(h.push(ie),K&&(ie.delta>K.delta||ie.direction!==K.direction))h.splice(0);else if(h.length>=15&&ie.time-ee.time<500&&ee.delta-ie.delta>=1&&ie.delta<=6){const D=$>0?.8:.2;p=ie,h.splice(0),u=kc(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,D)},0)}u||(u=kc(()=>{if(e.destroyed||!e.params)return;const D=.5;p=ie,h.splice(0),e.slideToClosest(e.params.speed,!0,void 0,D)},500))}if(oe||o("scroll",k),e.params.autoplay&&e.params.autoplay.disableOnInteraction&&e.autoplay.stop(),P.releaseOnEdges&&(re===e.minTranslate()||re===e.maxTranslate()))return!0}}return k.preventDefault?k.preventDefault():k.returnValue=!1,!1}function O(T){let k=e.el;e.params.mousewheel.eventsTarget!=="container"&&(k=document.querySelector(e.params.mousewheel.eventsTarget)),k[T]("mouseenter",y),k[T]("mouseleave",v),k[T]("wheel",A)}function j(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",A),!0):e.mousewheel.enabled?!1:(O("addEventListener"),e.mousewheel.enabled=!0,!0)}function E(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,A),!0):e.mousewheel.enabled?(O("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}r("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&E(),e.params.mousewheel.enabled&&j()}),r("destroy",()=>{e.params.cssMode&&j(),e.mousewheel.enabled&&E()}),Object.assign(e.mousewheel,{enable:j,disable:E})}function vv(t,e,i,r){return t.params.createElements&&Object.keys(r).forEach(o=>{if(!i[o]&&i.auto===!0){let l=Pn(t.el,`.${r[o]}`)[0];l||(l=Hc("div",r[o]),l.className=r[o],t.el.append(l)),i[o]=l,e[o]=l}}),i}function wv(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function l(b){let A;return b&&typeof b=="string"&&e.isElement&&(A=e.el.querySelector(b)||e.hostEl.querySelector(b),A)?A:(b&&(typeof b=="string"&&(A=[...document.querySelectorAll(b)]),e.params.uniqueNavElements&&typeof b=="string"&&A&&A.length>1&&e.el.querySelectorAll(b).length===1?A=e.el.querySelector(b):A&&A.length===1&&(A=A[0])),b&&!A?b:A)}function u(b,A){const O=e.params.navigation;b=pt(b),b.forEach(j=>{j&&(j.classList[A?"add":"remove"](...O.disabledClass.split(" ")),j.tagName==="BUTTON"&&(j.disabled=A),e.params.watchOverflow&&e.enabled&&j.classList[e.isLocked?"add":"remove"](O.lockClass))})}function d(){const{nextEl:b,prevEl:A}=e.navigation;if(e.params.loop){u(A,!1),u(b,!1);return}u(A,e.isBeginning&&!e.params.rewind),u(b,e.isEnd&&!e.params.rewind)}function p(b){b.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),o("navigationPrev"))}function h(b){b.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),o("navigationNext"))}function m(){const b=e.params.navigation;if(e.params.navigation=vv(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(b.nextEl||b.prevEl))return;let A=l(b.nextEl),O=l(b.prevEl);Object.assign(e.navigation,{nextEl:A,prevEl:O}),A=pt(A),O=pt(O);const j=(E,T)=>{E&&E.addEventListener("click",T==="next"?h:p),!e.enabled&&E&&E.classList.add(...b.lockClass.split(" "))};A.forEach(E=>j(E,"next")),O.forEach(E=>j(E,"prev"))}function y(){let{nextEl:b,prevEl:A}=e.navigation;b=pt(b),A=pt(A);const O=(j,E)=>{j.removeEventListener("click",E==="next"?h:p),j.classList.remove(...e.params.navigation.disabledClass.split(" "))};b.forEach(j=>O(j,"next")),A.forEach(j=>O(j,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?S():(m(),d())}),r("toEdge fromEdge lock unlock",()=>{d()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{nextEl:b,prevEl:A}=e.navigation;if(b=pt(b),A=pt(A),e.enabled){d();return}[...b,...A].filter(O=>!!O).forEach(O=>O.classList.add(e.params.navigation.lockClass))}),r("click",(b,A)=>{let{nextEl:O,prevEl:j}=e.navigation;O=pt(O),j=pt(j);const E=A.target;let T=j.includes(E)||O.includes(E);if(e.isElement&&!T){const k=A.path||A.composedPath&&A.composedPath();k&&(T=k.find(L=>O.includes(L)||j.includes(L)))}if(e.params.navigation.hideOnClick&&!T){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===E||e.pagination.el.contains(E)))return;let k;O.length?k=O[0].classList.contains(e.params.navigation.hiddenClass):j.length&&(k=j[0].classList.contains(e.params.navigation.hiddenClass)),o(k===!0?"navigationShow":"navigationHide"),[...O,...j].filter(L=>!!L).forEach(L=>L.classList.toggle(e.params.navigation.hiddenClass))}});const v=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),m(),d()},S=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),y()};Object.assign(e.navigation,{enable:v,disable:S,update:d,init:m,destroy:y})}function Ys(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function PL(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:E=>E,formatFractionTotal:E=>E,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),e.pagination={el:null,bullets:[]};let u,d=0;function p(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function h(E,T){const{bulletActiveClass:k}=e.params.pagination;E&&(E=E[`${T==="prev"?"previous":"next"}ElementSibling`],E&&(E.classList.add(`${k}-${T}`),E=E[`${T==="prev"?"previous":"next"}ElementSibling`],E&&E.classList.add(`${k}-${T}-${T}`)))}function m(E,T,k){if(E=E%k,T=T%k,T===E+1)return"next";if(T===E-1)return"previous"}function y(E){const T=E.target.closest(Ys(e.params.pagination.bulletClass));if(!T)return;E.preventDefault();const k=Vc(T)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===k)return;const L=m(e.realIndex,k,e.slides.length);L==="next"?e.slideNext():L==="previous"?e.slidePrev():e.slideToLoop(k)}else e.slideTo(k)}function v(){const E=e.rtl,T=e.params.pagination;if(p())return;let k=e.pagination.el;k=pt(k);let L,P;const V=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,U=e.params.loop?Math.ceil(V/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(P=e.previousRealIndex||0,L=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(L=e.snapIndex,P=e.previousSnapIndex):(P=e.previousIndex||0,L=e.activeIndex||0),T.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const $=e.pagination.bullets;let Y,F,te;if(T.dynamicBullets&&(u=gp($[0],e.isHorizontal()?"width":"height"),k.forEach(ie=>{ie.style[e.isHorizontal()?"width":"height"]=`${u*(T.dynamicMainBullets+4)}px`}),T.dynamicMainBullets>1&&P!==void 0&&(d+=L-(P||0),d>T.dynamicMainBullets-1?d=T.dynamicMainBullets-1:d<0&&(d=0)),Y=Math.max(L-d,0),F=Y+(Math.min($.length,T.dynamicMainBullets)-1),te=(F+Y)/2),$.forEach(ie=>{const oe=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(re=>`${T.bulletActiveClass}${re}`)].map(re=>typeof re=="string"&&re.includes(" ")?re.split(" "):re).flat();ie.classList.remove(...oe)}),k.length>1)$.forEach(ie=>{const oe=Vc(ie);oe===L?ie.classList.add(...T.bulletActiveClass.split(" ")):e.isElement&&ie.setAttribute("part","bullet"),T.dynamicBullets&&(oe>=Y&&oe<=F&&ie.classList.add(...`${T.bulletActiveClass}-main`.split(" ")),oe===Y&&h(ie,"prev"),oe===F&&h(ie,"next"))});else{const ie=$[L];if(ie&&ie.classList.add(...T.bulletActiveClass.split(" ")),e.isElement&&$.forEach((oe,re)=>{oe.setAttribute("part",re===L?"bullet-active":"bullet")}),T.dynamicBullets){const oe=$[Y],re=$[F];for(let B=Y;B<=F;B+=1)$[B]&&$[B].classList.add(...`${T.bulletActiveClass}-main`.split(" "));h(oe,"prev"),h(re,"next")}}if(T.dynamicBullets){const ie=Math.min($.length,T.dynamicMainBullets+4),oe=(u*ie-u)/2-te*u,re=E?"right":"left";$.forEach(B=>{B.style[e.isHorizontal()?re:"top"]=`${oe}px`})}}k.forEach(($,Y)=>{if(T.type==="fraction"&&($.querySelectorAll(Ys(T.currentClass)).forEach(F=>{F.textContent=T.formatFractionCurrent(L+1)}),$.querySelectorAll(Ys(T.totalClass)).forEach(F=>{F.textContent=T.formatFractionTotal(U)})),T.type==="progressbar"){let F;T.progressbarOpposite?F=e.isHorizontal()?"vertical":"horizontal":F=e.isHorizontal()?"horizontal":"vertical";const te=(L+1)/U;let ie=1,oe=1;F==="horizontal"?ie=te:oe=te,$.querySelectorAll(Ys(T.progressbarFillClass)).forEach(re=>{re.style.transform=`translate3d(0,0,0) scaleX(${ie}) scaleY(${oe})`,re.style.transitionDuration=`${e.params.speed}ms`})}T.type==="custom"&&T.renderCustom?(zc($,T.renderCustom(e,L+1,U)),Y===0&&o("paginationRender",$)):(Y===0&&o("paginationRender",$),o("paginationUpdate",$)),e.params.watchOverflow&&e.enabled&&$.classList[e.isLocked?"add":"remove"](T.lockClass)})}function S(){const E=e.params.pagination;if(p())return;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let k=e.pagination.el;k=pt(k);let L="";if(E.type==="bullets"){let P=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&P>T&&(P=T);for(let V=0;V<P;V+=1)E.renderBullet?L+=E.renderBullet.call(e,V,E.bulletClass):L+=`<${E.bulletElement} ${e.isElement?'part="bullet"':""} class="${E.bulletClass}"></${E.bulletElement}>`}E.type==="fraction"&&(E.renderFraction?L=E.renderFraction.call(e,E.currentClass,E.totalClass):L=`<span class="${E.currentClass}"></span> / <span class="${E.totalClass}"></span>`),E.type==="progressbar"&&(E.renderProgressbar?L=E.renderProgressbar.call(e,E.progressbarFillClass):L=`<span class="${E.progressbarFillClass}"></span>`),e.pagination.bullets=[],k.forEach(P=>{E.type!=="custom"&&zc(P,L||""),E.type==="bullets"&&e.pagination.bullets.push(...P.querySelectorAll(Ys(E.bulletClass)))}),E.type!=="custom"&&o("paginationRender",k[0])}function b(){e.params.pagination=vv(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const E=e.params.pagination;if(!E.el)return;let T;typeof E.el=="string"&&e.isElement&&(T=e.el.querySelector(E.el)),!T&&typeof E.el=="string"&&(T=[...document.querySelectorAll(E.el)]),T||(T=E.el),!(!T||T.length===0)&&(e.params.uniqueNavElements&&typeof E.el=="string"&&Array.isArray(T)&&T.length>1&&(T=[...e.el.querySelectorAll(E.el)],T.length>1&&(T=T.find(k=>yv(k,".swiper")[0]===e.el))),Array.isArray(T)&&T.length===1&&(T=T[0]),Object.assign(e.pagination,{el:T}),T=pt(T),T.forEach(k=>{E.type==="bullets"&&E.clickable&&k.classList.add(...(E.clickableClass||"").split(" ")),k.classList.add(E.modifierClass+E.type),k.classList.add(e.isHorizontal()?E.horizontalClass:E.verticalClass),E.type==="bullets"&&E.dynamicBullets&&(k.classList.add(`${E.modifierClass}${E.type}-dynamic`),d=0,E.dynamicMainBullets<1&&(E.dynamicMainBullets=1)),E.type==="progressbar"&&E.progressbarOpposite&&k.classList.add(E.progressbarOppositeClass),E.clickable&&k.addEventListener("click",y),e.enabled||k.classList.add(E.lockClass)}))}function A(){const E=e.params.pagination;if(p())return;let T=e.pagination.el;T&&(T=pt(T),T.forEach(k=>{k.classList.remove(E.hiddenClass),k.classList.remove(E.modifierClass+E.type),k.classList.remove(e.isHorizontal()?E.horizontalClass:E.verticalClass),E.clickable&&(k.classList.remove(...(E.clickableClass||"").split(" ")),k.removeEventListener("click",y))})),e.pagination.bullets&&e.pagination.bullets.forEach(k=>k.classList.remove(...E.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const E=e.params.pagination;let{el:T}=e.pagination;T=pt(T),T.forEach(k=>{k.classList.remove(E.horizontalClass,E.verticalClass),k.classList.add(e.isHorizontal()?E.horizontalClass:E.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?j():(b(),S(),v())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&v()}),r("snapIndexChange",()=>{v()}),r("snapGridLengthChange",()=>{S(),v()}),r("destroy",()=>{A()}),r("enable disable",()=>{let{el:E}=e.pagination;E&&(E=pt(E),E.forEach(T=>T.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{v()}),r("click",(E,T)=>{const k=T.target,L=pt(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&L&&L.length>0&&!k.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&k===e.navigation.nextEl||e.navigation.prevEl&&k===e.navigation.prevEl))return;const P=L[0].classList.contains(e.params.pagination.hiddenClass);o(P===!0?"paginationShow":"paginationHide"),L.forEach(V=>V.classList.toggle(e.params.pagination.hiddenClass))}});const O=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:E}=e.pagination;E&&(E=pt(E),E.forEach(T=>T.classList.remove(e.params.pagination.paginationDisabledClass))),b(),S(),v()},j=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:E}=e.pagination;E&&(E=pt(E),E.forEach(T=>T.classList.add(e.params.pagination.paginationDisabledClass))),A()};Object.assign(e.pagination,{enable:O,disable:j,render:S,update:v,init:b,destroy:A})}function mn(t){let{swiper:e,extendParams:i,on:r,emit:o,params:l}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,d,p=l&&l.autoplay?l.autoplay.delay:3e3,h=l&&l.autoplay?l.autoplay.delay:3e3,m,y=new Date().getTime(),v,S,b,A,O,j,E;function T(K){!e||e.destroyed||!e.wrapperEl||K.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",T),!(E||K.detail&&K.detail.bySwiperTouchMove)&&Y())}const k=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?v=!0:v&&(h=m,v=!1);const K=e.autoplay.paused?m:y+h-new Date().getTime();e.autoplay.timeLeft=K,o("autoplayTimeLeft",K,K/p),d=requestAnimationFrame(()=>{k()})},L=()=>{let K;return e.virtual&&e.params.virtual.enabled?K=e.slides.find(D=>D.classList.contains("swiper-slide-active")):K=e.slides[e.activeIndex],K?parseInt(K.getAttribute("data-swiper-autoplay"),10):void 0},P=K=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(d),k();let ee=typeof K>"u"?e.params.autoplay.delay:K;p=e.params.autoplay.delay,h=e.params.autoplay.delay;const D=L();!Number.isNaN(D)&&D>0&&typeof K>"u"&&(ee=D,p=D,h=D),m=ee;const X=e.params.speed,ne=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(X,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,X,!0,!0),o("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(X,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,X,!0,!0),o("autoplay")),e.params.cssMode&&(y=new Date().getTime(),requestAnimationFrame(()=>{P()})))};return ee>0?(clearTimeout(u),u=setTimeout(()=>{ne()},ee)):requestAnimationFrame(()=>{ne()}),ee},V=()=>{y=new Date().getTime(),e.autoplay.running=!0,P(),o("autoplayStart")},U=()=>{e.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(d),o("autoplayStop")},$=(K,ee)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(u),K||(j=!0);const D=()=>{o("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",T):Y()};if(e.autoplay.paused=!0,ee){O&&(m=e.params.autoplay.delay),O=!1,D();return}m=(m||e.params.autoplay.delay)-(new Date().getTime()-y),!(e.isEnd&&m<0&&!e.params.loop)&&(m<0&&(m=0),D())},Y=()=>{e.isEnd&&m<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(y=new Date().getTime(),j?(j=!1,P(m)):P(),e.autoplay.paused=!1,o("autoplayResume"))},F=()=>{if(e.destroyed||!e.autoplay.running)return;const K=In();K.visibilityState==="hidden"&&(j=!0,$(!0)),K.visibilityState==="visible"&&Y()},te=K=>{K.pointerType==="mouse"&&(j=!0,E=!0,!(e.animating||e.autoplay.paused)&&$(!0))},ie=K=>{K.pointerType==="mouse"&&(E=!1,e.autoplay.paused&&Y())},oe=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",te),e.el.addEventListener("pointerleave",ie))},re=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",te),e.el.removeEventListener("pointerleave",ie))},B=()=>{In().addEventListener("visibilitychange",F)},W=()=>{In().removeEventListener("visibilitychange",F)};r("init",()=>{e.params.autoplay.enabled&&(oe(),B(),V())}),r("destroy",()=>{re(),W(),e.autoplay.running&&U()}),r("_freeModeStaticRelease",()=>{(b||j)&&Y()}),r("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?U():$(!0,!0)}),r("beforeTransitionStart",(K,ee,D)=>{e.destroyed||!e.autoplay.running||(D||!e.params.autoplay.disableOnInteraction?$(!0,!0):U())}),r("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){U();return}S=!0,b=!1,j=!1,A=setTimeout(()=>{j=!0,b=!0,$(!0)},200)}}),r("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!S)){if(clearTimeout(A),clearTimeout(u),e.params.autoplay.disableOnInteraction){b=!1,S=!1;return}b&&e.params.cssMode&&Y(),b=!1,S=!1}}),r("slideChange",()=>{e.destroyed||!e.autoplay.running||(O=!0)}),Object.assign(e.autoplay,{start:V,stop:U,pause:$,resume:Y})}let o0;function NL(){const t=Mt(),e=In();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function bv(){return o0||(o0=NL()),o0}let l0;function BL(t){let{userAgent:e}=t===void 0?{}:t;const i=bv(),r=Mt(),o=r.navigator.platform,l=e||r.navigator.userAgent,u={ios:!1,android:!1},d=r.screen.width,p=r.screen.height,h=l.match(/(Android);?[\s\/]+([\d.]+)?/);let m=l.match(/(iPad).*OS\s([\d_]+)/);const y=l.match(/(iPod)(.*OS\s([\d_]+))?/),v=!m&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),S=o==="Win32";let b=o==="MacIntel";const A=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!m&&b&&i.touch&&A.indexOf(`${d}x${p}`)>=0&&(m=l.match(/(Version)\/([\d.]+)/),m||(m=[0,1,"13_0_0"]),b=!1),h&&!S&&(u.os="android",u.android=!0),(m||v||y)&&(u.os="ios",u.ios=!0),u}function Sv(t){return t===void 0&&(t={}),l0||(l0=BL(t)),l0}let c0;function $L(){const t=Mt(),e=Sv();let i=!1;function r(){const d=t.navigator.userAgent.toLowerCase();return d.indexOf("safari")>=0&&d.indexOf("chrome")<0&&d.indexOf("android")<0}if(r()){const d=String(t.navigator.userAgent);if(d.includes("Version/")){const[p,h]=d.split("Version/")[1].split(" ")[0].split(".").map(m=>Number(m));i=p<16||p===16&&h<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),l=r(),u=l||o&&e.ios;return{isSafari:i||l,needPerspectiveFix:i,need3dFix:u,isWebView:o}}function Cv(){return c0||(c0=$L()),c0}function UL(t){let{swiper:e,on:i,emit:r}=t;const o=Mt();let l=null,u=null;const d=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},p=()=>{!e||e.destroyed||!e.initialized||(l=new ResizeObserver(y=>{u=o.requestAnimationFrame(()=>{const{width:v,height:S}=e;let b=v,A=S;y.forEach(O=>{let{contentBoxSize:j,contentRect:E,target:T}=O;T&&T!==e.el||(b=E?E.width:(j[0]||j).inlineSize,A=E?E.height:(j[0]||j).blockSize)}),(b!==v||A!==S)&&d()})}),l.observe(e.el))},h=()=>{u&&o.cancelAnimationFrame(u),l&&l.unobserve&&e.el&&(l.unobserve(e.el),l=null)},m=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};i("init",()=>{if(e.params.resizeObserver&&typeof o.ResizeObserver<"u"){p();return}o.addEventListener("resize",d),o.addEventListener("orientationchange",m)}),i("destroy",()=>{h(),o.removeEventListener("resize",d),o.removeEventListener("orientationchange",m)})}function _L(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l=[],u=Mt(),d=function(m,y){y===void 0&&(y={});const v=u.MutationObserver||u.WebkitMutationObserver,S=new v(b=>{if(e.__preventObserver__)return;if(b.length===1){o("observerUpdate",b[0]);return}const A=function(){o("observerUpdate",b[0])};u.requestAnimationFrame?u.requestAnimationFrame(A):u.setTimeout(A,0)});S.observe(m,{attributes:typeof y.attributes>"u"?!0:y.attributes,childList:e.isElement||(typeof y.childList>"u"?!0:y).childList,characterData:typeof y.characterData>"u"?!0:y.characterData}),l.push(S)},p=()=>{if(e.params.observer){if(e.params.observeParents){const m=yv(e.hostEl);for(let y=0;y<m.length;y+=1)d(m[y])}d(e.hostEl,{childList:e.params.observeSlideChildren}),d(e.wrapperEl,{attributes:!1})}},h=()=>{l.forEach(m=>{m.disconnect()}),l.splice(0,l.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",p),r("destroy",h)}var IL={on(t,e,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const o=i?"unshift":"push";return t.split(" ").forEach(l=>{r.eventsListeners[l]||(r.eventsListeners[l]=[]),r.eventsListeners[l][o](e)}),r},once(t,e,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function o(){r.off(t,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];e.apply(r,u)}return o.__emitterProxy=e,r.on(t,o,i)},onAny(t,e){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;const r=e?"unshift":"push";return i.eventsAnyListeners.indexOf(t)<0&&i.eventsAnyListeners[r](t),i},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const i=e.eventsAnyListeners.indexOf(t);return i>=0&&e.eventsAnyListeners.splice(i,1),e},off(t,e){const i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?i.eventsListeners[r]=[]:i.eventsListeners[r]&&i.eventsListeners[r].forEach((o,l)=>{(o===e||o.__emitterProxy&&o.__emitterProxy===e)&&i.eventsListeners[r].splice(l,1)})}),i},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,i,r;for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return typeof l[0]=="string"||Array.isArray(l[0])?(e=l[0],i=l.slice(1,l.length),r=t):(e=l[0].events,i=l[0].data,r=l[0].context||t),i.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(p=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(h=>{h.apply(r,[p,...i])}),t.eventsListeners&&t.eventsListeners[p]&&t.eventsListeners[p].forEach(h=>{h.apply(r,i)})}),t}};function GL(){const t=this;let e,i;const r=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?i=t.params.height:i=r.clientHeight,!(e===0&&t.isHorizontal()||i===0&&t.isVertical())&&(e=e-parseInt(_i(r,"padding-left")||0,10)-parseInt(_i(r,"padding-right")||0,10),i=i-parseInt(_i(r,"padding-top")||0,10)-parseInt(_i(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Object.assign(t,{width:e,height:i,size:t.isHorizontal()?e:i}))}function qL(){const t=this;function e(Y,F){return parseFloat(Y.getPropertyValue(t.getDirectionLabel(F))||0)}const i=t.params,{wrapperEl:r,slidesEl:o,size:l,rtlTranslate:u,wrongRTL:d}=t,p=t.virtual&&i.virtual.enabled,h=p?t.virtual.slides.length:t.slides.length,m=Pn(o,`.${t.params.slideClass}, swiper-slide`),y=p?t.virtual.slides.length:m.length;let v=[];const S=[],b=[];let A=i.slidesOffsetBefore;typeof A=="function"&&(A=i.slidesOffsetBefore.call(t));let O=i.slidesOffsetAfter;typeof O=="function"&&(O=i.slidesOffsetAfter.call(t));const j=t.snapGrid.length,E=t.slidesGrid.length;let T=i.spaceBetween,k=-A,L=0,P=0;if(typeof l>"u")return;typeof T=="string"&&T.indexOf("%")>=0?T=parseFloat(T.replace("%",""))/100*l:typeof T=="string"&&(T=parseFloat(T)),t.virtualSize=-T,m.forEach(Y=>{u?Y.style.marginLeft="":Y.style.marginRight="",Y.style.marginBottom="",Y.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(Ql(r,"--swiper-centered-offset-before",""),Ql(r,"--swiper-centered-offset-after",""));const V=i.grid&&i.grid.rows>1&&t.grid;V?t.grid.initSlides(m):t.grid&&t.grid.unsetSlides();let U;const $=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(Y=>typeof i.breakpoints[Y].slidesPerView<"u").length>0;for(let Y=0;Y<y;Y+=1){U=0;let F;if(m[Y]&&(F=m[Y]),V&&t.grid.updateSlide(Y,F,m),!(m[Y]&&_i(F,"display")==="none")){if(i.slidesPerView==="auto"){$&&(m[Y].style[t.getDirectionLabel("width")]="");const te=getComputedStyle(F),ie=F.style.transform,oe=F.style.webkitTransform;if(ie&&(F.style.transform="none"),oe&&(F.style.webkitTransform="none"),i.roundLengths)U=t.isHorizontal()?gp(F,"width"):gp(F,"height");else{const re=e(te,"width"),B=e(te,"padding-left"),W=e(te,"padding-right"),K=e(te,"margin-left"),ee=e(te,"margin-right"),D=te.getPropertyValue("box-sizing");if(D&&D==="border-box")U=re+K+ee;else{const{clientWidth:X,offsetWidth:ne}=F;U=re+B+W+K+ee+(ne-X)}}ie&&(F.style.transform=ie),oe&&(F.style.webkitTransform=oe),i.roundLengths&&(U=Math.floor(U))}else U=(l-(i.slidesPerView-1)*T)/i.slidesPerView,i.roundLengths&&(U=Math.floor(U)),m[Y]&&(m[Y].style[t.getDirectionLabel("width")]=`${U}px`);m[Y]&&(m[Y].swiperSlideSize=U),b.push(U),i.centeredSlides?(k=k+U/2+L/2+T,L===0&&Y!==0&&(k=k-l/2-T),Y===0&&(k=k-l/2-T),Math.abs(k)<1/1e3&&(k=0),i.roundLengths&&(k=Math.floor(k)),P%i.slidesPerGroup===0&&v.push(k),S.push(k)):(i.roundLengths&&(k=Math.floor(k)),(P-Math.min(t.params.slidesPerGroupSkip,P))%t.params.slidesPerGroup===0&&v.push(k),S.push(k),k=k+U+T),t.virtualSize+=U+T,L=U,P+=1}}if(t.virtualSize=Math.max(t.virtualSize,l)+O,u&&d&&(i.effect==="slide"||i.effect==="coverflow")&&(r.style.width=`${t.virtualSize+T}px`),i.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+T}px`),V&&t.grid.updateWrapperSize(U,v),!i.centeredSlides){const Y=[];for(let F=0;F<v.length;F+=1){let te=v[F];i.roundLengths&&(te=Math.floor(te)),v[F]<=t.virtualSize-l&&Y.push(te)}v=Y,Math.floor(t.virtualSize-l)-Math.floor(v[v.length-1])>1&&v.push(t.virtualSize-l)}if(p&&i.loop){const Y=b[0]+T;if(i.slidesPerGroup>1){const F=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/i.slidesPerGroup),te=Y*i.slidesPerGroup;for(let ie=0;ie<F;ie+=1)v.push(v[v.length-1]+te)}for(let F=0;F<t.virtual.slidesBefore+t.virtual.slidesAfter;F+=1)i.slidesPerGroup===1&&v.push(v[v.length-1]+Y),S.push(S[S.length-1]+Y),t.virtualSize+=Y}if(v.length===0&&(v=[0]),T!==0){const Y=t.isHorizontal()&&u?"marginLeft":t.getDirectionLabel("marginRight");m.filter((F,te)=>!i.cssMode||i.loop?!0:te!==m.length-1).forEach(F=>{F.style[Y]=`${T}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let Y=0;b.forEach(te=>{Y+=te+(T||0)}),Y-=T;const F=Y>l?Y-l:0;v=v.map(te=>te<=0?-A:te>F?F+O:te)}if(i.centerInsufficientSlides){let Y=0;b.forEach(te=>{Y+=te+(T||0)}),Y-=T;const F=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(Y+F<l){const te=(l-Y-F)/2;v.forEach((ie,oe)=>{v[oe]=ie-te}),S.forEach((ie,oe)=>{S[oe]=ie+te})}}if(Object.assign(t,{slides:m,snapGrid:v,slidesGrid:S,slidesSizesGrid:b}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Ql(r,"--swiper-centered-offset-before",`${-v[0]}px`),Ql(r,"--swiper-centered-offset-after",`${t.size/2-b[b.length-1]/2}px`);const Y=-t.snapGrid[0],F=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(te=>te+Y),t.slidesGrid=t.slidesGrid.map(te=>te+F)}if(y!==h&&t.emit("slidesLengthChange"),v.length!==j&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),S.length!==E&&t.emit("slidesGridLengthChange"),i.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!p&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const Y=`${i.containerModifierClass}backface-hidden`,F=t.el.classList.contains(Y);y<=i.maxBackfaceHiddenSlides?F||t.el.classList.add(Y):F&&t.el.classList.remove(Y)}}function YL(t){const e=this,i=[],r=e.virtual&&e.params.virtual.enabled;let o=0,l;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const u=d=>r?e.slides[e.getSlideIndexByData(d)]:e.slides[d];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(d=>{i.push(d)});else for(l=0;l<Math.ceil(e.params.slidesPerView);l+=1){const d=e.activeIndex+l;if(d>e.slides.length&&!r)break;i.push(u(d))}else i.push(u(e.activeIndex));for(l=0;l<i.length;l+=1)if(typeof i[l]<"u"){const d=i[l].offsetHeight;o=d>o?d:o}(o||o===0)&&(e.wrapperEl.style.height=`${o}px`)}function FL(){const t=this,e=t.slides,i=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(t.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-i-t.cssOverflowAdjustment()}const p4=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function XL(t){t===void 0&&(t=this&&this.translate||0);const e=this,i=e.params,{slides:r,rtlTranslate:o,snapGrid:l}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let u=-t;o&&(u=t),e.visibleSlidesIndexes=[],e.visibleSlides=[];let d=i.spaceBetween;typeof d=="string"&&d.indexOf("%")>=0?d=parseFloat(d.replace("%",""))/100*e.size:typeof d=="string"&&(d=parseFloat(d));for(let p=0;p<r.length;p+=1){const h=r[p];let m=h.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(m-=r[0].swiperSlideOffset);const y=(u+(i.centeredSlides?e.minTranslate():0)-m)/(h.swiperSlideSize+d),v=(u-l[0]+(i.centeredSlides?e.minTranslate():0)-m)/(h.swiperSlideSize+d),S=-(u-m),b=S+e.slidesSizesGrid[p],A=S>=0&&S<=e.size-e.slidesSizesGrid[p],O=S>=0&&S<e.size-1||b>1&&b<=e.size||S<=0&&b>=e.size;O&&(e.visibleSlides.push(h),e.visibleSlidesIndexes.push(p)),p4(h,O,i.slideVisibleClass),p4(h,A,i.slideFullyVisibleClass),h.progress=o?-y:y,h.originalProgress=o?-v:v}}function ZL(t){const e=this;if(typeof t>"u"){const m=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*m||0}const i=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:o,isBeginning:l,isEnd:u,progressLoop:d}=e;const p=l,h=u;if(r===0)o=0,l=!0,u=!0;else{o=(t-e.minTranslate())/r;const m=Math.abs(t-e.minTranslate())<1,y=Math.abs(t-e.maxTranslate())<1;l=m||o<=0,u=y||o>=1,m&&(o=0),y&&(o=1)}if(i.loop){const m=e.getSlideIndexByData(0),y=e.getSlideIndexByData(e.slides.length-1),v=e.slidesGrid[m],S=e.slidesGrid[y],b=e.slidesGrid[e.slidesGrid.length-1],A=Math.abs(t);A>=v?d=(A-v)/b:d=(A+b-S)/b,d>1&&(d-=1)}Object.assign(e,{progress:o,progressLoop:d,isBeginning:l,isEnd:u}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&e.updateSlidesProgress(t),l&&!p&&e.emit("reachBeginning toEdge"),u&&!h&&e.emit("reachEnd toEdge"),(p&&!l||h&&!u)&&e.emit("fromEdge"),e.emit("progress",o)}const u0=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function WL(){const t=this,{slides:e,params:i,slidesEl:r,activeIndex:o}=t,l=t.virtual&&i.virtual.enabled,u=t.grid&&i.grid&&i.grid.rows>1,d=y=>Pn(r,`.${i.slideClass}${y}, swiper-slide${y}`)[0];let p,h,m;if(l)if(i.loop){let y=o-t.virtual.slidesBefore;y<0&&(y=t.virtual.slides.length+y),y>=t.virtual.slides.length&&(y-=t.virtual.slides.length),p=d(`[data-swiper-slide-index="${y}"]`)}else p=d(`[data-swiper-slide-index="${o}"]`);else u?(p=e.find(y=>y.column===o),m=e.find(y=>y.column===o+1),h=e.find(y=>y.column===o-1)):p=e[o];p&&(u||(m=zL(p,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!m&&(m=e[0]),h=VL(p,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!h===0&&(h=e[e.length-1]))),e.forEach(y=>{u0(y,y===p,i.slideActiveClass),u0(y,y===m,i.slideNextClass),u0(y,y===h,i.slidePrevClass)}),t.emitSlidesClasses()}const bc=(t,e)=>{if(!t||t.destroyed||!t.params)return;const i=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,r=e.closest(i());if(r){let o=r.querySelector(`.${t.params.lazyPreloaderClass}`);!o&&t.isElement&&(r.shadowRoot?o=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(o=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},d0=(t,e)=>{if(!t.slides[e])return;const i=t.slides[e].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},xp=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const i=t.slides.length;if(!i||!e||e<0)return;e=Math.min(e,i);const r=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),o=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const u=o,d=[u-e];d.push(...Array.from({length:e}).map((p,h)=>u+r+h)),t.slides.forEach((p,h)=>{d.includes(p.column)&&d0(t,h)});return}const l=o+r-1;if(t.params.rewind||t.params.loop)for(let u=o-e;u<=l+e;u+=1){const d=(u%i+i)%i;(d<o||d>l)&&d0(t,d)}else for(let u=Math.max(o-e,0);u<=Math.min(l+e,i-1);u+=1)u!==o&&(u>l||u<o)&&d0(t,u)};function KL(t){const{slidesGrid:e,params:i}=t,r=t.rtlTranslate?t.translate:-t.translate;let o;for(let l=0;l<e.length;l+=1)typeof e[l+1]<"u"?r>=e[l]&&r<e[l+1]-(e[l+1]-e[l])/2?o=l:r>=e[l]&&r<e[l+1]&&(o=l+1):r>=e[l]&&(o=l);return i.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function QL(t){const e=this,i=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:o,activeIndex:l,realIndex:u,snapIndex:d}=e;let p=t,h;const m=S=>{let b=S-e.virtual.slidesBefore;return b<0&&(b=e.virtual.slides.length+b),b>=e.virtual.slides.length&&(b-=e.virtual.slides.length),b};if(typeof p>"u"&&(p=KL(e)),r.indexOf(i)>=0)h=r.indexOf(i);else{const S=Math.min(o.slidesPerGroupSkip,p);h=S+Math.floor((p-S)/o.slidesPerGroup)}if(h>=r.length&&(h=r.length-1),p===l&&!e.params.loop){h!==d&&(e.snapIndex=h,e.emit("snapIndexChange"));return}if(p===l&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=m(p);return}const y=e.grid&&o.grid&&o.grid.rows>1;let v;if(e.virtual&&o.virtual.enabled&&o.loop)v=m(p);else if(y){const S=e.slides.find(A=>A.column===p);let b=parseInt(S.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(e.slides.indexOf(S),0)),v=Math.floor(b/o.grid.rows)}else if(e.slides[p]){const S=e.slides[p].getAttribute("data-swiper-slide-index");S?v=parseInt(S,10):v=p}else v=p;Object.assign(e,{previousSnapIndex:d,snapIndex:h,previousRealIndex:u,realIndex:v,previousIndex:l,activeIndex:p}),e.initialized&&xp(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(u!==v&&e.emit("realIndexChange"),e.emit("slideChange"))}function JL(t,e){const i=this,r=i.params;let o=t.closest(`.${r.slideClass}, swiper-slide`);!o&&i.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(d=>{!o&&d.matches&&d.matches(`.${r.slideClass}, swiper-slide`)&&(o=d)});let l=!1,u;if(o){for(let d=0;d<i.slides.length;d+=1)if(i.slides[d]===o){l=!0,u=d;break}}if(o&&l)i.clickedSlide=o,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=u;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}r.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var eO={updateSize:GL,updateSlides:qL,updateAutoHeight:YL,updateSlidesOffset:FL,updateSlidesProgress:XL,updateProgress:ZL,updateSlidesClasses:WL,updateActiveIndex:QL,updateClickedSlide:JL};function tO(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:i,rtlTranslate:r,translate:o,wrapperEl:l}=e;if(i.virtualTranslate)return r?-o:o;if(i.cssMode)return o;let u=RL(l,t);return u+=e.cssOverflowAdjustment(),r&&(u=-u),u||0}function nO(t,e){const i=this,{rtlTranslate:r,params:o,wrapperEl:l,progress:u}=i;let d=0,p=0;const h=0;i.isHorizontal()?d=r?-t:t:p=t,o.roundLengths&&(d=Math.floor(d),p=Math.floor(p)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?d:p,o.cssMode?l[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-d:-p:o.virtualTranslate||(i.isHorizontal()?d-=i.cssOverflowAdjustment():p-=i.cssOverflowAdjustment(),l.style.transform=`translate3d(${d}px, ${p}px, ${h}px)`);let m;const y=i.maxTranslate()-i.minTranslate();y===0?m=0:m=(t-i.minTranslate())/y,m!==u&&i.updateProgress(t),i.emit("setTranslate",i.translate,e)}function iO(){return-this.snapGrid[0]}function aO(){return-this.snapGrid[this.snapGrid.length-1]}function rO(t,e,i,r,o){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),i===void 0&&(i=!0),r===void 0&&(r=!0);const l=this,{params:u,wrapperEl:d}=l;if(l.animating&&u.preventInteractionOnTransition)return!1;const p=l.minTranslate(),h=l.maxTranslate();let m;if(r&&t>p?m=p:r&&t<h?m=h:m=t,l.updateProgress(m),u.cssMode){const y=l.isHorizontal();if(e===0)d[y?"scrollLeft":"scrollTop"]=-m;else{if(!l.support.smoothScroll)return xv({swiper:l,targetPosition:-m,side:y?"left":"top"}),!0;d.scrollTo({[y?"left":"top"]:-m,behavior:"smooth"})}return!0}return e===0?(l.setTransition(0),l.setTranslate(m),i&&(l.emit("beforeTransitionStart",e,o),l.emit("transitionEnd"))):(l.setTransition(e),l.setTranslate(m),i&&(l.emit("beforeTransitionStart",e,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(v){!l||l.destroyed||v.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,i&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var sO={getTranslate:tO,setTranslate:nO,minTranslate:iO,maxTranslate:aO,translateTo:rO};function oO(t,e){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${t}ms`,i.wrapperEl.style.transitionDelay=t===0?"0ms":""),i.emit("setTransition",t,e)}function Tv(t){let{swiper:e,runCallbacks:i,direction:r,step:o}=t;const{activeIndex:l,previousIndex:u}=e;let d=r;d||(l>u?d="next":l<u?d="prev":d="reset"),e.emit(`transition${o}`),i&&d==="reset"?e.emit(`slideResetTransition${o}`):i&&l!==u&&(e.emit(`slideChangeTransition${o}`),d==="next"?e.emit(`slideNextTransition${o}`):e.emit(`slidePrevTransition${o}`))}function lO(t,e){t===void 0&&(t=!0);const i=this,{params:r}=i;r.cssMode||(r.autoHeight&&i.updateAutoHeight(),Tv({swiper:i,runCallbacks:t,direction:e,step:"Start"}))}function cO(t,e){t===void 0&&(t=!0);const i=this,{params:r}=i;i.animating=!1,!r.cssMode&&(i.setTransition(0),Tv({swiper:i,runCallbacks:t,direction:e,step:"End"}))}var uO={setTransition:oO,transitionStart:lO,transitionEnd:cO};function dO(t,e,i,r,o){t===void 0&&(t=0),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));const l=this;let u=t;u<0&&(u=0);const{params:d,snapGrid:p,slidesGrid:h,previousIndex:m,activeIndex:y,rtlTranslate:v,wrapperEl:S,enabled:b}=l;if(!b&&!r&&!o||l.destroyed||l.animating&&d.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=l.params.speed);const A=Math.min(l.params.slidesPerGroupSkip,u);let O=A+Math.floor((u-A)/l.params.slidesPerGroup);O>=p.length&&(O=p.length-1);const j=-p[O];if(d.normalizeSlideIndex)for(let V=0;V<h.length;V+=1){const U=-Math.floor(j*100),$=Math.floor(h[V]*100),Y=Math.floor(h[V+1]*100);typeof h[V+1]<"u"?U>=$&&U<Y-(Y-$)/2?u=V:U>=$&&U<Y&&(u=V+1):U>=$&&(u=V)}if(l.initialized&&u!==y&&(!l.allowSlideNext&&(v?j>l.translate&&j>l.minTranslate():j<l.translate&&j<l.minTranslate())||!l.allowSlidePrev&&j>l.translate&&j>l.maxTranslate()&&(y||0)!==u))return!1;u!==(m||0)&&i&&l.emit("beforeSlideChangeStart"),l.updateProgress(j);let E;u>y?E="next":u<y?E="prev":E="reset";const T=l.virtual&&l.params.virtual.enabled;if(!(T&&o)&&(v&&-j===l.translate||!v&&j===l.translate))return l.updateActiveIndex(u),d.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),d.effect!=="slide"&&l.setTranslate(j),E!=="reset"&&(l.transitionStart(i,E),l.transitionEnd(i,E)),!1;if(d.cssMode){const V=l.isHorizontal(),U=v?j:-j;if(e===0)T&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),T&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{S[V?"scrollLeft":"scrollTop"]=U})):S[V?"scrollLeft":"scrollTop"]=U,T&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return xv({swiper:l,targetPosition:U,side:V?"left":"top"}),!0;S.scrollTo({[V?"left":"top"]:U,behavior:"smooth"})}return!0}const P=Cv().isSafari;return T&&!o&&P&&l.isElement&&l.virtual.update(!1,!1,u),l.setTransition(e),l.setTranslate(j),l.updateActiveIndex(u),l.updateSlidesClasses(),l.emit("beforeTransitionStart",e,r),l.transitionStart(i,E),e===0?l.transitionEnd(i,E):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(U){!l||l.destroyed||U.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(i,E))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function fO(t,e,i,r){t===void 0&&(t=0),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let u=t;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)u=u+o.virtual.slidesBefore;else{let d;if(l){const v=u*o.params.grid.rows;d=o.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===v).column}else d=o.getSlideIndexByData(u);const p=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:h}=o.params;let m=o.params.slidesPerView;m==="auto"?m=o.slidesPerViewDynamic():(m=Math.ceil(parseFloat(o.params.slidesPerView,10)),h&&m%2===0&&(m=m+1));let y=p-d<m;if(h&&(y=y||d<Math.ceil(m/2)),r&&h&&o.params.slidesPerView!=="auto"&&!l&&(y=!1),y){const v=h?d<o.activeIndex?"prev":"next":d-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?d+1:d-p+1,slideRealIndex:v==="next"?o.realIndex:void 0})}if(l){const v=u*o.params.grid.rows;u=o.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===v).column}else u=o.getSlideIndexByData(u)}return requestAnimationFrame(()=>{o.slideTo(u,e,i,r)}),o}function pO(t,e,i){e===void 0&&(e=!0);const r=this,{enabled:o,params:l,animating:u}=r;if(!o||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);let d=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(d=Math.max(r.slidesPerViewDynamic("current",!0),1));const p=r.activeIndex<l.slidesPerGroupSkip?1:d,h=r.virtual&&l.virtual.enabled;if(l.loop){if(u&&!h&&l.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+p,t,e,i)}),!0}return l.rewind&&r.isEnd?r.slideTo(0,t,e,i):r.slideTo(r.activeIndex+p,t,e,i)}function hO(t,e,i){e===void 0&&(e=!0);const r=this,{params:o,snapGrid:l,slidesGrid:u,rtlTranslate:d,enabled:p,animating:h}=r;if(!p||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);const m=r.virtual&&o.virtual.enabled;if(o.loop){if(h&&!m&&o.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const y=d?r.translate:-r.translate;function v(E){return E<0?-Math.floor(Math.abs(E)):Math.floor(E)}const S=v(y),b=l.map(E=>v(E)),A=o.freeMode&&o.freeMode.enabled;let O=l[b.indexOf(S)-1];if(typeof O>"u"&&(o.cssMode||A)){let E;l.forEach((T,k)=>{S>=T&&(E=k)}),typeof E<"u"&&(O=A?l[E]:l[E>0?E-1:E])}let j=0;if(typeof O<"u"&&(j=u.indexOf(O),j<0&&(j=r.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(j=j-r.slidesPerViewDynamic("previous",!0)+1,j=Math.max(j,0))),o.rewind&&r.isBeginning){const E=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(E,t,e,i)}else if(o.loop&&r.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(j,t,e,i)}),!0;return r.slideTo(j,t,e,i)}function mO(t,e,i){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof t>"u"&&(t=r.params.speed),r.slideTo(r.activeIndex,t,e,i)}function gO(t,e,i,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);let l=o.activeIndex;const u=Math.min(o.params.slidesPerGroupSkip,l),d=u+Math.floor((l-u)/o.params.slidesPerGroup),p=o.rtlTranslate?o.translate:-o.translate;if(p>=o.snapGrid[d]){const h=o.snapGrid[d],m=o.snapGrid[d+1];p-h>(m-h)*r&&(l+=o.params.slidesPerGroup)}else{const h=o.snapGrid[d-1],m=o.snapGrid[d];p-h<=(m-h)*r&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,t,e,i)}function xO(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:i}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let o=t.getSlideIndexWhenGrid(t.clickedIndex),l;const u=t.isElement?"swiper-slide":`.${e.slideClass}`,d=t.grid&&t.params.grid&&t.params.grid.rows>1;if(e.loop){if(t.animating)return;l=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?t.slideToLoop(l):o>(d?(t.slides.length-r)/2-(t.params.grid.rows-1):t.slides.length-r)?(t.loopFix(),o=t.getSlideIndex(Pn(i,`${u}[data-swiper-slide-index="${l}"]`)[0]),kc(()=>{t.slideTo(o)})):t.slideTo(o)}else t.slideTo(o)}var yO={slideTo:dO,slideToLoop:fO,slideNext:pO,slidePrev:hO,slideReset:mO,slideToClosest:gO,slideToClickedSlide:xO};function vO(t,e){const i=this,{params:r,slidesEl:o}=i;if(!r.loop||i.virtual&&i.params.virtual.enabled)return;const l=()=>{Pn(o,`.${r.slideClass}, swiper-slide`).forEach((S,b)=>{S.setAttribute("data-swiper-slide-index",b)})},u=()=>{const v=Pn(o,`.${r.slideBlankClass}`);v.forEach(S=>{S.remove()}),v.length>0&&(i.recalcSlides(),i.updateSlides())},d=i.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||d)&&u();const p=r.slidesPerGroup*(d?r.grid.rows:1),h=i.slides.length%p!==0,m=d&&i.slides.length%r.grid.rows!==0,y=v=>{for(let S=0;S<v;S+=1){const b=i.isElement?Hc("swiper-slide",[r.slideBlankClass]):Hc("div",[r.slideClass,r.slideBlankClass]);i.slidesEl.append(b)}};if(h){if(r.loopAddBlankSlides){const v=p-i.slides.length%p;y(v),i.recalcSlides(),i.updateSlides()}else Dc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(m){if(r.loopAddBlankSlides){const v=r.grid.rows-i.slides.length%r.grid.rows;y(v),i.recalcSlides(),i.updateSlides()}else Dc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();i.loopFix({slideRealIndex:t,direction:r.centeredSlides?void 0:"next",initial:e})}function wO(t){let{slideRealIndex:e,slideTo:i=!0,direction:r,setTranslate:o,activeSlideIndex:l,initial:u,byController:d,byMousewheel:p}=t===void 0?{}:t;const h=this;if(!h.params.loop)return;h.emit("beforeLoopFix");const{slides:m,allowSlidePrev:y,allowSlideNext:v,slidesEl:S,params:b}=h,{centeredSlides:A,initialSlide:O}=b;if(h.allowSlidePrev=!0,h.allowSlideNext=!0,h.virtual&&b.virtual.enabled){i&&(!b.centeredSlides&&h.snapIndex===0?h.slideTo(h.virtual.slides.length,0,!1,!0):b.centeredSlides&&h.snapIndex<b.slidesPerView?h.slideTo(h.virtual.slides.length+h.snapIndex,0,!1,!0):h.snapIndex===h.snapGrid.length-1&&h.slideTo(h.virtual.slidesBefore,0,!1,!0)),h.allowSlidePrev=y,h.allowSlideNext=v,h.emit("loopFix");return}let j=b.slidesPerView;j==="auto"?j=h.slidesPerViewDynamic():(j=Math.ceil(parseFloat(b.slidesPerView,10)),A&&j%2===0&&(j=j+1));const E=b.slidesPerGroupAuto?j:b.slidesPerGroup;let T=A?Math.max(E,Math.ceil(j/2)):E;T%E!==0&&(T+=E-T%E),T+=b.loopAdditionalSlides,h.loopedSlides=T;const k=h.grid&&b.grid&&b.grid.rows>1;m.length<j+T||h.params.effect==="cards"&&m.length<j+T*2?Dc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&b.grid.fill==="row"&&Dc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const L=[],P=[],V=k?Math.ceil(m.length/b.grid.rows):m.length,U=u&&V-O<j&&!A;let $=U?O:h.activeIndex;typeof l>"u"?l=h.getSlideIndex(m.find(B=>B.classList.contains(b.slideActiveClass))):$=l;const Y=r==="next"||!r,F=r==="prev"||!r;let te=0,ie=0;const re=(k?m[l].column:l)+(A&&typeof o>"u"?-j/2+.5:0);if(re<T){te=Math.max(T-re,E);for(let B=0;B<T-re;B+=1){const W=B-Math.floor(B/V)*V;if(k){const K=V-W-1;for(let ee=m.length-1;ee>=0;ee-=1)m[ee].column===K&&L.push(ee)}else L.push(V-W-1)}}else if(re+j>V-T){ie=Math.max(re-(V-T*2),E),U&&(ie=Math.max(ie,j-V+O+1));for(let B=0;B<ie;B+=1){const W=B-Math.floor(B/V)*V;k?m.forEach((K,ee)=>{K.column===W&&P.push(ee)}):P.push(W)}}if(h.__preventObserver__=!0,requestAnimationFrame(()=>{h.__preventObserver__=!1}),h.params.effect==="cards"&&m.length<j+T*2&&(P.includes(l)&&P.splice(P.indexOf(l),1),L.includes(l)&&L.splice(L.indexOf(l),1)),F&&L.forEach(B=>{m[B].swiperLoopMoveDOM=!0,S.prepend(m[B]),m[B].swiperLoopMoveDOM=!1}),Y&&P.forEach(B=>{m[B].swiperLoopMoveDOM=!0,S.append(m[B]),m[B].swiperLoopMoveDOM=!1}),h.recalcSlides(),b.slidesPerView==="auto"?h.updateSlides():k&&(L.length>0&&F||P.length>0&&Y)&&h.slides.forEach((B,W)=>{h.grid.updateSlide(W,B,h.slides)}),b.watchSlidesProgress&&h.updateSlidesOffset(),i){if(L.length>0&&F){if(typeof e>"u"){const B=h.slidesGrid[$],K=h.slidesGrid[$+te]-B;p?h.setTranslate(h.translate-K):(h.slideTo($+Math.ceil(te),0,!1,!0),o&&(h.touchEventsData.startTranslate=h.touchEventsData.startTranslate-K,h.touchEventsData.currentTranslate=h.touchEventsData.currentTranslate-K))}else if(o){const B=k?L.length/b.grid.rows:L.length;h.slideTo(h.activeIndex+B,0,!1,!0),h.touchEventsData.currentTranslate=h.translate}}else if(P.length>0&&Y)if(typeof e>"u"){const B=h.slidesGrid[$],K=h.slidesGrid[$-ie]-B;p?h.setTranslate(h.translate-K):(h.slideTo($-ie,0,!1,!0),o&&(h.touchEventsData.startTranslate=h.touchEventsData.startTranslate-K,h.touchEventsData.currentTranslate=h.touchEventsData.currentTranslate-K))}else{const B=k?P.length/b.grid.rows:P.length;h.slideTo(h.activeIndex-B,0,!1,!0)}}if(h.allowSlidePrev=y,h.allowSlideNext=v,h.controller&&h.controller.control&&!d){const B={slideRealIndex:e,direction:r,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(h.controller.control)?h.controller.control.forEach(W=>{!W.destroyed&&W.params.loop&&W.loopFix({...B,slideTo:W.params.slidesPerView===b.slidesPerView?i:!1})}):h.controller.control instanceof h.constructor&&h.controller.control.params.loop&&h.controller.control.loopFix({...B,slideTo:h.controller.control.params.slidesPerView===b.slidesPerView?i:!1})}h.emit("loopFix")}function bO(){const t=this,{params:e,slidesEl:i}=t;if(!e.loop||!i||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const r=[];t.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;r[l]=o}),t.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),r.forEach(o=>{i.append(o)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var SO={loopCreate:vO,loopFix:wO,loopDestroy:bO};function CO(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const i=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function TO(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var EO={setGrabCursor:CO,unsetGrabCursor:TO};function AO(t,e){e===void 0&&(e=this);function i(r){if(!r||r===In()||r===Mt())return null;r.assignedSlot&&(r=r.assignedSlot);const o=r.closest(t);return!o&&!r.getRootNode?null:o||i(r.getRootNode().host)}return i(e)}function h4(t,e,i){const r=Mt(),{params:o}=t,l=o.edgeSwipeDetection,u=o.edgeSwipeThreshold;return l&&(i<=u||i>=r.innerWidth-u)?l==="prevent"?(e.preventDefault(),!0):!1:!0}function MO(t){const e=this,i=In();let r=t;r.originalEvent&&(r=r.originalEvent);const o=e.touchEventsData;if(r.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==r.pointerId)return;o.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(o.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){h4(e,r,r.targetTouches[0].pageX);return}const{params:l,touches:u,enabled:d}=e;if(!d||!l.simulateTouch&&r.pointerType==="mouse"||e.animating&&l.preventInteractionOnTransition)return;!e.animating&&l.cssMode&&l.loop&&e.loopFix();let p=r.target;if(l.touchEventsTarget==="wrapper"&&!HL(p,e.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||o.isTouched&&o.isMoved)return;const h=!!l.noSwipingClass&&l.noSwipingClass!=="",m=r.composedPath?r.composedPath():r.path;h&&r.target&&r.target.shadowRoot&&m&&(p=m[0]);const y=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(l.noSwiping&&(v?AO(y,p):p.closest(y))){e.allowClick=!0;return}if(l.swipeHandler&&!p.closest(l.swipeHandler))return;u.currentX=r.pageX,u.currentY=r.pageY;const S=u.currentX,b=u.currentY;if(!h4(e,r,S))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=S,u.startY=b,o.touchStartTime=ci(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let A=!0;p.matches(o.focusableElements)&&(A=!1,p.nodeName==="SELECT"&&(o.isTouched=!1)),i.activeElement&&i.activeElement.matches(o.focusableElements)&&i.activeElement!==p&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!p.matches(o.focusableElements))&&i.activeElement.blur();const O=A&&e.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||O)&&!p.isContentEditable&&r.preventDefault(),l.freeMode&&l.freeMode.enabled&&e.freeMode&&e.animating&&!l.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function jO(t){const e=In(),i=this,r=i.touchEventsData,{params:o,touches:l,rtlTranslate:u,enabled:d}=i;if(!d||!o.simulateTouch&&t.pointerType==="mouse")return;let p=t;if(p.originalEvent&&(p=p.originalEvent),p.type==="pointermove"&&(r.touchId!==null||p.pointerId!==r.pointerId))return;let h;if(p.type==="touchmove"){if(h=[...p.changedTouches].find(L=>L.identifier===r.touchId),!h||h.identifier!==r.touchId)return}else h=p;if(!r.isTouched){r.startMoving&&r.isScrolling&&i.emit("touchMoveOpposite",p);return}const m=h.pageX,y=h.pageY;if(p.preventedByNestedSwiper){l.startX=m,l.startY=y;return}if(!i.allowTouchMove){p.target.matches(r.focusableElements)||(i.allowClick=!1),r.isTouched&&(Object.assign(l,{startX:m,startY:y,currentX:m,currentY:y}),r.touchStartTime=ci());return}if(o.touchReleaseOnEdges&&!o.loop)if(i.isVertical()){if(y<l.startY&&i.translate<=i.maxTranslate()||y>l.startY&&i.translate>=i.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(u&&(m>l.startX&&-i.translate<=i.maxTranslate()||m<l.startX&&-i.translate>=i.minTranslate()))return;if(!u&&(m<l.startX&&i.translate<=i.maxTranslate()||m>l.startX&&i.translate>=i.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(r.focusableElements)&&e.activeElement!==p.target&&p.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&p.target===e.activeElement&&p.target.matches(r.focusableElements)){r.isMoved=!0,i.allowClick=!1;return}r.allowTouchCallbacks&&i.emit("touchMove",p),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=m,l.currentY=y;const v=l.currentX-l.startX,S=l.currentY-l.startY;if(i.params.threshold&&Math.sqrt(v**2+S**2)<i.params.threshold)return;if(typeof r.isScrolling>"u"){let L;i.isHorizontal()&&l.currentY===l.startY||i.isVertical()&&l.currentX===l.startX?r.isScrolling=!1:v*v+S*S>=25&&(L=Math.atan2(Math.abs(S),Math.abs(v))*180/Math.PI,r.isScrolling=i.isHorizontal()?L>o.touchAngle:90-L>o.touchAngle)}if(r.isScrolling&&i.emit("touchMoveOpposite",p),typeof r.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(r.startMoving=!0),r.isScrolling||p.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;i.allowClick=!1,!o.cssMode&&p.cancelable&&p.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&p.stopPropagation();let b=i.isHorizontal()?v:S,A=i.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(b=Math.abs(b)*(u?1:-1),A=Math.abs(A)*(u?1:-1)),l.diff=b,b*=o.touchRatio,u&&(b=-b,A=-A);const O=i.touchesDirection;i.swipeDirection=b>0?"prev":"next",i.touchesDirection=A>0?"prev":"next";const j=i.params.loop&&!o.cssMode,E=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!r.isMoved){if(j&&E&&i.loopFix({direction:i.swipeDirection}),r.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const L=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(L)}r.allowMomentumBounce=!1,o.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",p)}if(new Date().getTime(),o._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&O!==i.touchesDirection&&j&&E&&Math.abs(b)>=1){Object.assign(l,{startX:m,startY:y,currentX:m,currentY:y,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}i.emit("sliderMove",p),r.isMoved=!0,r.currentTranslate=b+r.startTranslate;let T=!0,k=o.resistanceRatio;if(o.touchReleaseOnEdges&&(k=0),b>0?(j&&E&&r.allowThresholdMove&&r.currentTranslate>(o.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>i.minTranslate()&&(T=!1,o.resistance&&(r.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+r.startTranslate+b)**k))):b<0&&(j&&E&&r.allowThresholdMove&&r.currentTranslate<(o.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(o.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),r.currentTranslate<i.maxTranslate()&&(T=!1,o.resistance&&(r.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-r.startTranslate-b)**k))),T&&(p.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(r.currentTranslate=r.startTranslate),o.threshold>0)if(Math.abs(b)>o.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,r.currentTranslate=r.startTranslate,l.diff=i.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{r.currentTranslate=r.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&i.freeMode||o.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(r.currentTranslate),i.setTranslate(r.currentTranslate))}function LO(t){const e=this,i=e.touchEventsData;let r=t;r.originalEvent&&(r=r.originalEvent);let o;if(r.type==="touchend"||r.type==="touchcancel"){if(o=[...r.changedTouches].find(L=>L.identifier===i.touchId),!o||o.identifier!==i.touchId)return}else{if(i.touchId!==null||r.pointerId!==i.pointerId)return;o=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;i.pointerId=null,i.touchId=null;const{params:u,touches:d,rtlTranslate:p,slidesGrid:h,enabled:m}=e;if(!m||!u.simulateTouch&&r.pointerType==="mouse")return;if(i.allowTouchCallbacks&&e.emit("touchEnd",r),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&u.grabCursor&&e.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}u.grabCursor&&i.isMoved&&i.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const y=ci(),v=y-i.touchStartTime;if(e.allowClick){const L=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(L&&L[0]||r.target,L),e.emit("tap click",r),v<300&&y-i.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(i.lastClickTime=ci(),kc(()=>{e.destroyed||(e.allowClick=!0)}),!i.isTouched||!i.isMoved||!e.swipeDirection||d.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let S;if(u.followFinger?S=p?e.translate:-e.translate:S=-i.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:S});return}const b=S>=-e.maxTranslate()&&!e.params.loop;let A=0,O=e.slidesSizesGrid[0];for(let L=0;L<h.length;L+=L<u.slidesPerGroupSkip?1:u.slidesPerGroup){const P=L<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof h[L+P]<"u"?(b||S>=h[L]&&S<h[L+P])&&(A=L,O=h[L+P]-h[L]):(b||S>=h[L])&&(A=L,O=h[h.length-1]-h[h.length-2])}let j=null,E=null;u.rewind&&(e.isBeginning?E=u.virtual&&u.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(j=0));const T=(S-h[A])/O,k=A<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(v>u.longSwipesMs){if(!u.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(T>=u.longSwipesRatio?e.slideTo(u.rewind&&e.isEnd?j:A+k):e.slideTo(A)),e.swipeDirection==="prev"&&(T>1-u.longSwipesRatio?e.slideTo(A+k):E!==null&&T<0&&Math.abs(T)>u.longSwipesRatio?e.slideTo(E):e.slideTo(A))}else{if(!u.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(A+k):e.slideTo(A):(e.swipeDirection==="next"&&e.slideTo(j!==null?j:A+k),e.swipeDirection==="prev"&&e.slideTo(E!==null?E:A))}}function m4(){const t=this,{params:e,el:i}=t;if(i&&i.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:o,snapGrid:l}=t,u=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const d=u&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!d?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!u?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=o,t.allowSlideNext=r,t.params.watchOverflow&&l!==t.snapGrid&&t.checkOverflow()}function OO(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function RO(){const t=this,{wrapperEl:e,rtlTranslate:i,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let o;const l=t.maxTranslate()-t.minTranslate();l===0?o=0:o=(t.translate-t.minTranslate())/l,o!==t.progress&&t.updateProgress(i?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function kO(t){const e=this;bc(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function DO(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const Ev=(t,e)=>{const i=In(),{params:r,el:o,wrapperEl:l,device:u}=t,d=!!r.nested,p=e==="on"?"addEventListener":"removeEventListener",h=e;!o||typeof o=="string"||(i[p]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:d}),o[p]("touchstart",t.onTouchStart,{passive:!1}),o[p]("pointerdown",t.onTouchStart,{passive:!1}),i[p]("touchmove",t.onTouchMove,{passive:!1,capture:d}),i[p]("pointermove",t.onTouchMove,{passive:!1,capture:d}),i[p]("touchend",t.onTouchEnd,{passive:!0}),i[p]("pointerup",t.onTouchEnd,{passive:!0}),i[p]("pointercancel",t.onTouchEnd,{passive:!0}),i[p]("touchcancel",t.onTouchEnd,{passive:!0}),i[p]("pointerout",t.onTouchEnd,{passive:!0}),i[p]("pointerleave",t.onTouchEnd,{passive:!0}),i[p]("contextmenu",t.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&o[p]("click",t.onClick,!0),r.cssMode&&l[p]("scroll",t.onScroll),r.updateOnWindowResize?t[h](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",m4,!0):t[h]("observerUpdate",m4,!0),o[p]("load",t.onLoad,{capture:!0}))};function HO(){const t=this,{params:e}=t;t.onTouchStart=MO.bind(t),t.onTouchMove=jO.bind(t),t.onTouchEnd=LO.bind(t),t.onDocumentTouchStart=DO.bind(t),e.cssMode&&(t.onScroll=RO.bind(t)),t.onClick=OO.bind(t),t.onLoad=kO.bind(t),Ev(t,"on")}function VO(){Ev(this,"off")}var zO={attachEvents:HO,detachEvents:VO};const g4=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function PO(){const t=this,{realIndex:e,initialized:i,params:r,el:o}=t,l=r.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const u=In(),d=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",p=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?t.el:u.querySelector(r.breakpointsBase),h=t.getBreakpoint(l,d,p);if(!h||t.currentBreakpoint===h)return;const y=(h in l?l[h]:void 0)||t.originalParams,v=g4(t,r),S=g4(t,y),b=t.params.grabCursor,A=y.grabCursor,O=r.enabled;v&&!S?(o.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),t.emitContainerClasses()):!v&&S&&(o.classList.add(`${r.containerModifierClass}grid`),(y.grid.fill&&y.grid.fill==="column"||!y.grid.fill&&r.grid.fill==="column")&&o.classList.add(`${r.containerModifierClass}grid-column`),t.emitContainerClasses()),b&&!A?t.unsetGrabCursor():!b&&A&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof y[P]>"u")return;const V=r[P]&&r[P].enabled,U=y[P]&&y[P].enabled;V&&!U&&t[P].disable(),!V&&U&&t[P].enable()});const j=y.direction&&y.direction!==r.direction,E=r.loop&&(y.slidesPerView!==r.slidesPerView||j),T=r.loop;j&&i&&t.changeDirection(),Kt(t.params,y);const k=t.params.enabled,L=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),O&&!k?t.disable():!O&&k&&t.enable(),t.currentBreakpoint=h,t.emit("_beforeBreakpoint",y),i&&(E?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!T&&L?(t.loopCreate(e),t.updateSlides()):T&&!L&&t.loopDestroy()),t.emit("breakpoint",y)}function NO(t,e,i){if(e===void 0&&(e="window"),!t||e==="container"&&!i)return;let r=!1;const o=Mt(),l=e==="window"?o.innerHeight:i.clientHeight,u=Object.keys(t).map(d=>{if(typeof d=="string"&&d.indexOf("@")===0){const p=parseFloat(d.substr(1));return{value:l*p,point:d}}return{value:d,point:d}});u.sort((d,p)=>parseInt(d.value,10)-parseInt(p.value,10));for(let d=0;d<u.length;d+=1){const{point:p,value:h}=u[d];e==="window"?o.matchMedia(`(min-width: ${h}px)`).matches&&(r=p):h<=i.clientWidth&&(r=p)}return r||"max"}var BO={setBreakpoint:PO,getBreakpoint:NO};function $O(t,e){const i=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(o=>{r[o]&&i.push(e+o)}):typeof r=="string"&&i.push(e+r)}),i}function UO(){const t=this,{classNames:e,params:i,rtl:r,el:o,device:l}=t,u=$O(["initialized",i.direction,{"free-mode":t.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:r},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);e.push(...u),o.classList.add(...e),t.emitContainerClasses()}function _O(){const t=this,{el:e,classNames:i}=t;!e||typeof e=="string"||(e.classList.remove(...i),t.emitContainerClasses())}var IO={addClasses:UO,removeClasses:_O};function GO(){const t=this,{isLocked:e,params:i}=t,{slidesOffsetBefore:r}=i;if(r){const o=t.slides.length-1,l=t.slidesGrid[o]+t.slidesSizesGrid[o]+r*2;t.isLocked=t.size>l}else t.isLocked=t.snapGrid.length===1;i.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),i.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var qO={checkOverflow:GO},yp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function YO(t,e){return function(r){r===void 0&&(r={});const o=Object.keys(r)[0],l=r[o];if(typeof l!="object"||l===null){Kt(e,r);return}if(t[o]===!0&&(t[o]={enabled:!0}),o==="navigation"&&t[o]&&t[o].enabled&&!t[o].prevEl&&!t[o].nextEl&&(t[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&t[o]&&t[o].enabled&&!t[o].el&&(t[o].auto=!0),!(o in t&&"enabled"in l)){Kt(e,r);return}typeof t[o]=="object"&&!("enabled"in t[o])&&(t[o].enabled=!0),t[o]||(t[o]={enabled:!1}),Kt(e,r)}}const f0={eventsEmitter:IL,update:eO,translate:sO,transition:uO,slide:yO,loop:SO,grabCursor:EO,events:zO,breakpoints:BO,checkOverflow:qO,classes:IO},p0={};let Ah=class oi{constructor(){let e,i;for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?i=o[0]:[e,i]=o,i||(i={}),i=Kt({},i),e&&!i.el&&(i.el=e);const u=In();if(i.el&&typeof i.el=="string"&&u.querySelectorAll(i.el).length>1){const m=[];return u.querySelectorAll(i.el).forEach(y=>{const v=Kt({},i,{el:y});m.push(new oi(v))}),m}const d=this;d.__swiper__=!0,d.support=bv(),d.device=Sv({userAgent:i.userAgent}),d.browser=Cv(),d.eventsListeners={},d.eventsAnyListeners=[],d.modules=[...d.__modules__],i.modules&&Array.isArray(i.modules)&&d.modules.push(...i.modules);const p={};d.modules.forEach(m=>{m({params:i,swiper:d,extendParams:YO(i,p),on:d.on.bind(d),once:d.once.bind(d),off:d.off.bind(d),emit:d.emit.bind(d)})});const h=Kt({},yp,p);return d.params=Kt({},h,p0,i),d.originalParams=Kt({},d.params),d.passedParams=Kt({},i),d.params&&d.params.on&&Object.keys(d.params.on).forEach(m=>{d.on(m,d.params.on[m])}),d.params&&d.params.onAny&&d.onAny(d.params.onAny),Object.assign(d,{enabled:d.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return d.params.direction==="horizontal"},isVertical(){return d.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:d.params.allowSlideNext,allowSlidePrev:d.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:d.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:d.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),d.emit("_swiper"),d.params.init&&d.init(),d}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:i,params:r}=this,o=Pn(i,`.${r.slideClass}, swiper-slide`),l=Vc(o[0]);return Vc(e)-l}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(i=>i.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:i,params:r}=e;e.slides=Pn(i,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,i){const r=this;e=Math.min(Math.max(e,0),1);const o=r.minTranslate(),u=(r.maxTranslate()-o)*e+o;r.translateTo(u,typeof i>"u"?0:i),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",i.join(" "))}getSlideClasses(e){const i=this;return i.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=[];e.slides.forEach(r=>{const o=e.getSlideClasses(r);i.push({slideEl:r,classNames:o}),e.emit("_slideClass",r,o)}),e.emit("_slideClasses",i)}slidesPerViewDynamic(e,i){e===void 0&&(e="current"),i===void 0&&(i=!1);const r=this,{params:o,slides:l,slidesGrid:u,slidesSizesGrid:d,size:p,activeIndex:h}=r;let m=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let y=l[h]?Math.ceil(l[h].swiperSlideSize):0,v;for(let S=h+1;S<l.length;S+=1)l[S]&&!v&&(y+=Math.ceil(l[S].swiperSlideSize),m+=1,y>p&&(v=!0));for(let S=h-1;S>=0;S-=1)l[S]&&!v&&(y+=l[S].swiperSlideSize,m+=1,y>p&&(v=!0))}else if(e==="current")for(let y=h+1;y<l.length;y+=1)(i?u[y]+d[y]-u[h]<p:u[y]-u[h]<p)&&(m+=1);else for(let y=h-1;y>=0;y-=1)u[h]-u[y]<p&&(m+=1);return m}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:i,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&bc(e,u)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function o(){const u=e.rtlTranslate?e.translate*-1:e.translate,d=Math.min(Math.max(u,e.maxTranslate()),e.minTranslate());e.setTranslate(d),e.updateActiveIndex(),e.updateSlidesClasses()}let l;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)o(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const u=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;l=e.slideTo(u.length-1,0,!1,!0)}else l=e.slideTo(e.activeIndex,0,!1,!0);l||o()}r.watchOverflow&&i!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,i){i===void 0&&(i=!0);const r=this,o=r.params.direction;return e||(e=o==="horizontal"?"vertical":"horizontal"),e===o||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${o}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(l=>{e==="vertical"?l.style.width="":l.style.height=""}),r.emit("changeDirection"),i&&r.update()),r}changeLanguageDirection(e){const i=this;i.rtl&&e==="rtl"||!i.rtl&&e==="ltr"||(i.rtl=e==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(e){const i=this;if(i.mounted)return!0;let r=e||i.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=i,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const o=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(o()):Pn(r,o())[0];return!u&&i.params.createElements&&(u=Hc("div",i.params.wrapperClass),r.append(u),Pn(r,`.${i.params.slideClass}`).forEach(d=>{u.append(d)})),Object.assign(i,{el:r,wrapperEl:u,slidesEl:i.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:u,hostEl:i.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||_i(r,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||_i(r,"direction")==="rtl"),wrongRTL:_i(u,"display")==="-webkit-box"}),!0}init(e){const i=this;if(i.initialized||i.mount(e)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(void 0,!0),i.attachEvents();const o=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&o.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?bc(i,l):l.addEventListener("load",u=>{bc(i,u.target)})}),xp(i),i.initialized=!0,xp(i),i.emit("init"),i.emit("afterInit"),i}destroy(e,i){e===void 0&&(e=!0),i===void 0&&(i=!0);const r=this,{params:o,el:l,wrapperEl:u,slides:d}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),o.loop&&r.loopDestroy(),i&&(r.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),u&&u.removeAttribute("style"),d&&d.length&&d.forEach(p=>{p.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),p.removeAttribute("style"),p.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(p=>{r.off(p)}),e!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),LL(r)),r.destroyed=!0),null}static extendDefaults(e){Kt(p0,e)}static get extendedDefaults(){return p0}static get defaults(){return yp}static installModule(e){oi.prototype.__modules__||(oi.prototype.__modules__=[]);const i=oi.prototype.__modules__;typeof e=="function"&&i.indexOf(e)<0&&i.push(e)}static use(e){return Array.isArray(e)?(e.forEach(i=>oi.installModule(i)),oi):(oi.installModule(e),oi)}};Object.keys(f0).forEach(t=>{Object.keys(f0[t]).forEach(e=>{Ah.prototype[e]=f0[t][e]})});Ah.use([UL,_L]);const Av=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Sa(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function Cr(t,e){const i=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:Sa(e[r])&&Sa(t[r])&&Object.keys(e[r]).length>0?e[r].__swiper__?t[r]=e[r]:Cr(t[r],e[r]):t[r]=e[r]})}function Mv(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function jv(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function Lv(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function Ov(t){t===void 0&&(t="");const e=t.split(" ").map(r=>r.trim()).filter(r=>!!r),i=[];return e.forEach(r=>{i.indexOf(r)<0&&i.push(r)}),i.join(" ")}function FO(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function XO(t){let{swiper:e,slides:i,passedParams:r,changedParams:o,nextEl:l,prevEl:u,scrollbarEl:d,paginationEl:p}=t;const h=o.filter($=>$!=="children"&&$!=="direction"&&$!=="wrapperClass"),{params:m,pagination:y,navigation:v,scrollbar:S,virtual:b,thumbs:A}=e;let O,j,E,T,k,L,P,V;o.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&!r.thumbs.swiper.destroyed&&m.thumbs&&(!m.thumbs.swiper||m.thumbs.swiper.destroyed)&&(O=!0),o.includes("controller")&&r.controller&&r.controller.control&&m.controller&&!m.controller.control&&(j=!0),o.includes("pagination")&&r.pagination&&(r.pagination.el||p)&&(m.pagination||m.pagination===!1)&&y&&!y.el&&(E=!0),o.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||d)&&(m.scrollbar||m.scrollbar===!1)&&S&&!S.el&&(T=!0),o.includes("navigation")&&r.navigation&&(r.navigation.prevEl||u)&&(r.navigation.nextEl||l)&&(m.navigation||m.navigation===!1)&&v&&!v.prevEl&&!v.nextEl&&(k=!0);const U=$=>{e[$]&&(e[$].destroy(),$==="navigation"?(e.isElement&&(e[$].prevEl.remove(),e[$].nextEl.remove()),m[$].prevEl=void 0,m[$].nextEl=void 0,e[$].prevEl=void 0,e[$].nextEl=void 0):(e.isElement&&e[$].el.remove(),m[$].el=void 0,e[$].el=void 0))};o.includes("loop")&&e.isElement&&(m.loop&&!r.loop?L=!0:!m.loop&&r.loop?P=!0:V=!0),h.forEach($=>{if(Sa(m[$])&&Sa(r[$]))Object.assign(m[$],r[$]),($==="navigation"||$==="pagination"||$==="scrollbar")&&"enabled"in r[$]&&!r[$].enabled&&U($);else{const Y=r[$];(Y===!0||Y===!1)&&($==="navigation"||$==="pagination"||$==="scrollbar")?Y===!1&&U($):m[$]=r[$]}}),h.includes("controller")&&!j&&e.controller&&e.controller.control&&m.controller&&m.controller.control&&(e.controller.control=m.controller.control),o.includes("children")&&i&&b&&m.virtual.enabled?(b.slides=i,b.update(!0)):o.includes("virtual")&&b&&m.virtual.enabled&&(i&&(b.slides=i),b.update(!0)),o.includes("children")&&i&&m.loop&&(V=!0),O&&A.init()&&A.update(!0),j&&(e.controller.control=m.controller.control),E&&(e.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-pagination"),p.part.add("pagination"),e.el.appendChild(p)),p&&(m.pagination.el=p),y.init(),y.render(),y.update()),T&&(e.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-scrollbar"),d.part.add("scrollbar"),e.el.appendChild(d)),d&&(m.scrollbar.el=d),S.init(),S.updateSize(),S.setTranslate()),k&&(e.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),zc(l,e.hostEl.constructor.nextButtonSvg),l.part.add("button-next"),e.el.appendChild(l)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),zc(u,e.hostEl.constructor.prevButtonSvg),u.part.add("button-prev"),e.el.appendChild(u))),l&&(m.navigation.nextEl=l),u&&(m.navigation.prevEl=u),v.init(),v.update()),o.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),o.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),o.includes("direction")&&e.changeDirection(r.direction,!1),(L||V)&&e.loopDestroy(),(P||V)&&e.loopCreate(),e.update()}function ZO(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const i={on:{}},r={},o={};Cr(i,yp),i._emitClasses=!0,i.init=!1;const l={},u=Av.map(p=>p.replace(/_/,"")),d=Object.assign({},t);return Object.keys(d).forEach(p=>{typeof t[p]>"u"||(u.indexOf(p)>=0?Sa(t[p])?(i[p]={},o[p]={},Cr(i[p],t[p]),Cr(o[p],t[p])):(i[p]=t[p],o[p]=t[p]):p.search(/on[A-Z]/)===0&&typeof t[p]=="function"?e?r[`${p[2].toLowerCase()}${p.substr(3)}`]=t[p]:i.on[`${p[2].toLowerCase()}${p.substr(3)}`]=t[p]:l[p]=t[p])}),["navigation","pagination","scrollbar"].forEach(p=>{i[p]===!0&&(i[p]={}),i[p]===!1&&delete i[p]}),{params:i,passedParams:o,rest:l,events:r}}function WO(t,e){let{el:i,nextEl:r,prevEl:o,paginationEl:l,scrollbarEl:u,swiper:d}=t;Mv(e)&&r&&o&&(d.params.navigation.nextEl=r,d.originalParams.navigation.nextEl=r,d.params.navigation.prevEl=o,d.originalParams.navigation.prevEl=o),jv(e)&&l&&(d.params.pagination.el=l,d.originalParams.pagination.el=l),Lv(e)&&u&&(d.params.scrollbar.el=u,d.originalParams.scrollbar.el=u),d.init(i)}function KO(t,e,i,r,o){const l=[];if(!e)return l;const u=p=>{l.indexOf(p)<0&&l.push(p)};if(i&&r){const p=r.map(o),h=i.map(o);p.join("")!==h.join("")&&u("children"),r.length!==i.length&&u("children")}return Av.filter(p=>p[0]==="_").map(p=>p.replace(/_/,"")).forEach(p=>{if(p in t&&p in e)if(Sa(t[p])&&Sa(e[p])){const h=Object.keys(t[p]),m=Object.keys(e[p]);h.length!==m.length?u(p):(h.forEach(y=>{t[p][y]!==e[p][y]&&u(p)}),m.forEach(y=>{t[p][y]!==e[p][y]&&u(p)}))}else t[p]!==e[p]&&u(p)}),l}const QO=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.emit("_virtualUpdated"),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function Pc(){return Pc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},Pc.apply(this,arguments)}function Rv(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function kv(t){const e=[];return Le.Children.toArray(t).forEach(i=>{Rv(i)?e.push(i):i.props&&i.props.children&&kv(i.props.children).forEach(r=>e.push(r))}),e}function JO(t){const e=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Le.Children.toArray(t).forEach(r=>{if(Rv(r))e.push(r);else if(r.props&&r.props.slot&&i[r.props.slot])i[r.props.slot].push(r);else if(r.props&&r.props.children){const o=kv(r.props.children);o.length>0?o.forEach(l=>e.push(l)):i["container-end"].push(r)}else i["container-end"].push(r)}),{slides:e,slots:i}}function eR(t,e,i){if(!i)return null;const r=m=>{let y=m;return m<0?y=e.length+m:y>=e.length&&(y=y-e.length),y},o=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`},{from:l,to:u}=i,d=t.params.loop?-e.length:0,p=t.params.loop?e.length*2:e.length,h=[];for(let m=d;m<p;m+=1)m>=l&&m<=u&&h.push(e[r(m)]);return h.map((m,y)=>Le.cloneElement(m,{swiper:t,style:o,key:m.props.virtualIndex||m.key||`slide-${y}`}))}function no(t,e){return typeof window>"u"?R.useEffect(t,e):R.useLayoutEffect(t,e)}const x4=R.createContext(null),tR=R.createContext(null),Jt=R.forwardRef(function(t,e){let{className:i,tag:r="div",wrapperTag:o="div",children:l,onSwiper:u,...d}=t===void 0?{}:t,p=!1;const[h,m]=R.useState("swiper"),[y,v]=R.useState(null),[S,b]=R.useState(!1),A=R.useRef(!1),O=R.useRef(null),j=R.useRef(null),E=R.useRef(null),T=R.useRef(null),k=R.useRef(null),L=R.useRef(null),P=R.useRef(null),V=R.useRef(null),{params:U,passedParams:$,rest:Y,events:F}=ZO(d),{slides:te,slots:ie}=JO(l),oe=()=>{b(!S)};Object.assign(U.on,{_containerClasses(ee,D){m(D)}});const re=()=>{Object.assign(U.on,F),p=!0;const ee={...U};if(delete ee.wrapperClass,j.current=new Ah(ee),j.current.virtual&&j.current.params.virtual.enabled){j.current.virtual.slides=te;const D={cache:!1,slides:te,renderExternal:v,renderExternalUpdate:!1};Cr(j.current.params.virtual,D),Cr(j.current.originalParams.virtual,D)}};O.current||re(),j.current&&j.current.on("_beforeBreakpoint",oe);const B=()=>{p||!F||!j.current||Object.keys(F).forEach(ee=>{j.current.on(ee,F[ee])})},W=()=>{!F||!j.current||Object.keys(F).forEach(ee=>{j.current.off(ee,F[ee])})};R.useEffect(()=>()=>{j.current&&j.current.off("_beforeBreakpoint",oe)}),R.useEffect(()=>{!A.current&&j.current&&(j.current.emitSlidesClasses(),A.current=!0)}),no(()=>{if(e&&(e.current=O.current),!!O.current)return j.current.destroyed&&re(),WO({el:O.current,nextEl:k.current,prevEl:L.current,paginationEl:P.current,scrollbarEl:V.current,swiper:j.current},U),u&&!j.current.destroyed&&u(j.current),()=>{j.current&&!j.current.destroyed&&j.current.destroy(!0,!1)}},[]),no(()=>{B();const ee=KO($,E.current,te,T.current,D=>D.key);return E.current=$,T.current=te,ee.length&&j.current&&!j.current.destroyed&&XO({swiper:j.current,slides:te,passedParams:$,changedParams:ee,nextEl:k.current,prevEl:L.current,scrollbarEl:V.current,paginationEl:P.current}),()=>{W()}}),no(()=>{QO(j.current)},[y]);function K(){return U.virtual?eR(j.current,te,y):te.map((ee,D)=>Le.cloneElement(ee,{swiper:j.current,swiperSlideIndex:D}))}return Le.createElement(r,Pc({ref:O,className:Ov(`${h}${i?` ${i}`:""}`)},Y),Le.createElement(tR.Provider,{value:j.current},ie["container-start"],Le.createElement(o,{className:FO(U.wrapperClass)},ie["wrapper-start"],K(),ie["wrapper-end"]),Mv(U)&&Le.createElement(Le.Fragment,null,Le.createElement("div",{ref:L,className:"swiper-button-prev"}),Le.createElement("div",{ref:k,className:"swiper-button-next"})),Lv(U)&&Le.createElement("div",{ref:V,className:"swiper-scrollbar"}),jv(U)&&Le.createElement("div",{ref:P,className:"swiper-pagination"}),ie["container-end"]))});Jt.displayName="Swiper";const en=R.forwardRef(function(t,e){let{tag:i="div",children:r,className:o="",swiper:l,zoom:u,lazy:d,virtualIndex:p,swiperSlideIndex:h,...m}=t===void 0?{}:t;const y=R.useRef(null),[v,S]=R.useState("swiper-slide"),[b,A]=R.useState(!1);function O(k,L,P){L===y.current&&S(P)}no(()=>{if(typeof h<"u"&&(y.current.swiperSlideIndex=h),e&&(e.current=y.current),!(!y.current||!l)){if(l.destroyed){v!=="swiper-slide"&&S("swiper-slide");return}return l.on("_slideClass",O),()=>{l&&l.off("_slideClass",O)}}}),no(()=>{l&&y.current&&!l.destroyed&&S(l.getSlideClasses(y.current))},[l]);const j={isActive:v.indexOf("swiper-slide-active")>=0,isVisible:v.indexOf("swiper-slide-visible")>=0,isPrev:v.indexOf("swiper-slide-prev")>=0,isNext:v.indexOf("swiper-slide-next")>=0},E=()=>typeof r=="function"?r(j):r,T=()=>{A(!0)};return Le.createElement(i,Pc({ref:y,className:Ov(`${v}${o?` ${o}`:""}`),"data-swiper-slide-index":p,onLoad:T},m),u&&Le.createElement(x4.Provider,{value:j},Le.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof u=="number"?u:void 0},E(),d&&!b&&Le.createElement("div",{className:"swiper-lazy-preloader"}))),!u&&Le.createElement(x4.Provider,{value:j},E(),d&&!b&&Le.createElement("div",{className:"swiper-lazy-preloader"})))});en.displayName="SwiperSlide";const nR=C(Jt)`
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
`,iR=C(en)`
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
`,aR=C.section`
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
`,rR=st`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`,sR=st`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-2px);
  }
`,oR=st`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(2px);
  }
`,lR=st`
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
`,cR=C.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`,y4=C.button`
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 0.6s ease,
      height 0.6s ease;
  }

  &:hover {
    animation:
      ${rR} 0.6s ease,
      ${lR} 0.6s ease;
    transform: translateY(-2px);

    &::before {
      width: 300%;
      height: 300%;
    }

    ${t=>t.$bg==="#DBDBD8"&&xn`
        background-color: #c8c8c5;
        box-shadow: 0 4px 15px rgba(219, 219, 216, 0.4);

        svg {
          animation: ${sR} 0.4s ease;
        }
      `}

    ${t=>t.$bg==="#3098EE"&&xn`
        background-color: #2580d6;
        box-shadow: 0 4px 15px rgba(48, 152, 238, 0.4);

        svg {
          animation: ${oR} 0.4s ease;
        }
      `}
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  &:hover svg {
    transform: scale(1.15);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  }

  // Медіа-запити
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;

    &:hover {
      transform: translateY(-3px);
    }
  }

  @media screen and (min-width: 1440px) {
    width: 48px;
    height: 48px;

    &:hover {
      transform: translateY(-4px);
    }

    &:hover svg {
      transform: scale(1.2);
    }
  }
`,uR=C.div`
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
`,dR=C.p`
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
`,fR=C.p`
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
`,pR=C.img`
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
`;C.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.button`
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
`;const hR=C.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${t=>t.$isActive?"898px":"437px"};
    height: ${t=>t.$isActive?"500px":"285px"};
  }
`,mR=C.div`
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
    margin-bottom: ${t=>t.$isActive?"20px":"10px"};
    opacity: ${t=>t.$isActive?1:.9};
    transform: ${t=>t.$isActive?"scale(1.03)":"scale(0.95)"};
  }
`,gR=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,xR=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  position: relative;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const v4=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,yR=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,vR=C.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,wR=C.div`
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
`,bR="/assets/Review%20Image%203-bwglEcYl.png",w4="/assets/Review%20Image%201-BysFOq9G.png",b4="/assets/Review%20Image%202-C_HtVc_c.png",S4="/assets/Review%20Image%205-B3ukDKHL.png",SR="/assets/Review%20Image%204-AW0fOgIu.png",CR=C.section`
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
`,TR=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,ER=C.p`
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
`,AR=C.h3`
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
`,Dv=C.span`
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
`,MR=C.div`
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
`,jR=C.div`
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
`,LR=C.div`
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
`,OR=C(LR)`
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
`,RR=C.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`,kR=C.div`
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
`,DR=C.p`
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
`,HR=C.div`
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
`;function Hv(){const[t,e]=R.useState(null),[i,r]=R.useState(0),o=R.useRef(null),l=R.useRef(null),u=()=>{t&&t.slidePrev()},d=()=>{t&&t.slideNext()},p=[{image:bR,description:"A broken washing machine that stopped mid-cycle was fully restored by our team in just one visit. The family can now enjoy clean laundry again without stress.",title:"Quick Fix for a Washing Machine Breakdown",type:"Washing Machine Repair"},{image:b4,description:"We installed a brand-new dishwasher for a busy household, ensuring proper water connections and energy efficiency. The client now saves both time and water daily.",title:"Professional Dishwasher Installation",type:"Dishwasher Installation"},{image:S4,description:"A fridge that was leaking water and not cooling properly was diagnosed and repaired. The customer avoided costly food spoilage and gained reliable performance again.",title:"Refrigerator Leak and Cooling Repair",type:"Refrigerator Repair"},{image:SR,description:"The dryer was overheating and shutting down after a few minutes. Our experts replaced faulty parts and cleaned the vent system, restoring safe and efficient drying.",title:"Dryer Overheating Problem Solved",type:"Dryer Repair"},{image:w4,description:"An oven that wouldn’t heat evenly was repaired by recalibrating the thermostat and replacing heating elements. The family can now cook meals perfectly again.",title:"Oven Heating Restored for Perfect Meals",type:"Oven Repair"},{image:S4,description:"We handled a complete installation of a modern washing machine, ensuring proper setup, water connection, and vibration-free operation.",title:"Seamless Washing Machine Installation",type:"Washing Machine Installation"},{image:b4,description:"A freezer full of food was saved when we quickly repaired the compressor and restored full cooling capacity within hours.",title:"Emergency Freezer Repair",type:"Freezer Repair"},{image:w4,description:"A customer’s stove stopped working during family dinner preparation. Our team replaced defective wiring and burners, restoring it the same day.",title:"Stove Emergency Fixed Same Day",type:"Stove Repair"}];return x.jsxs(aR,{children:[x.jsxs(uR,{children:[x.jsx(dR,{children:"Our Cases"}),x.jsxs(fR,{children:[x.jsx(Dv,{children:"Success Stories "})," That Bring Your Appliances Back to Life"]})]}),x.jsx(wR,{children:x.jsx(nR,{modules:[mn],pagination:{clickable:!0},spaceBetween:20,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,onSwiper:e,onSlideChange:h=>r(h.realIndex),breakpoints:{1440:{slidesPerView:6,spaceBetween:30,centeredSlides:!0}},children:p.map(({image:h,description:m,title:y,type:v},S)=>x.jsx(iR,{$isActive:i===S,$index:S,children:x.jsxs(hR,{$isActive:i===S,$index:S,children:[x.jsx(pR,{src:h,alt:v,$isActive:i===S,$index:S}),x.jsx(mR,{$isActive:i===S,$index:S,children:x.jsxs(gR,{children:[x.jsx(xR,{children:x.jsx(v4,{children:m})}),x.jsxs(yR,{children:[x.jsx(vR,{children:y}),x.jsx(v4,{children:v})]})]})})]})},S))})}),x.jsxs(cR,{children:[x.jsx(y4,{ref:o,$bg:"#DBDBD8",onClick:u,children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(y4,{ref:l,$bg:"#3098EE",onClick:d,children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})}const VR=C(En.div)`
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
`,zR=C.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`,PR=({type:t,message:e,onClose:i,autoClose:r=!0,autoCloseDuration:o=25e3})=>{const{t:l}=Th();R.useEffect(()=>{if(r){const d=setTimeout(()=>{i()},o);return()=>clearTimeout(d)}},[r,o,i]);const u={success:l("alert.success"),error:l("alert.error")};return x.jsxs(VR,{$type:t,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",damping:25},children:[x.jsx("div",{children:e||u[t]}),x.jsx(zR,{onClick:i,children:"×"})]})},NR="/assets/ContactFormImage-CaQYWUqs.png",su=()=>{const[t,e]=R.useState(""),[i,r]=R.useState({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),[o,l]=R.useState({}),[u,d]=R.useState(null),[p,h]=R.useState(!1),m=()=>{h(!0)},y=()=>{h(!1)},v=A=>{const{name:O,value:j}=A.target;r(E=>({...E,[O]:j})),l(E=>({...E,[O]:!1}))},S=()=>{const A={};return t||(A.service=!0),i.name||(A.name=!0),i.email||(A.email=!0),i.phone||(A.phone=!0),i.location||(A.location=!0),i.appliance||(A.appliance=!0),i.brand||(A.brand=!0),i.power||(A.power=!0),A},b=async A=>{A.preventDefault();const O=S();if(Object.keys(O).length>0){l(O),d({type:"error",message:"Please fill all required fields"});return}try{if((await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:t,...i})})).ok)e(""),r({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),l({}),d({type:"success",message:"Form submitted successfully! We will contact you soon."});else throw new Error("Failed to submit form")}catch(j){console.error("Error submitting form:",j),d({type:"error",message:"There was an error submitting the form. Please try again."})}};return x.jsxs(x.Fragment,{children:[x.jsxs(GR,{children:[x.jsxs(A4,{children:[x.jsxs(m0,{children:[x.jsxs(qR,{children:[" ",x.jsx("span",{children:"Contact"})," our team"]}),x.jsx(tc,{children:"We love our customers, so feel free to call during normal business hours"})]})," ",x.jsx("a",{href:"tel:+18055002705",children:x.jsx(YR,{children:x.jsx(FR,{children:"Call Us for Fast Repair"})})}),x.jsxs(A4,{children:[x.jsx(XR,{}),x.jsxs(ZR,{children:[x.jsxs(M4,{width:"251px",children:[x.jsx(j4,{children:"Service Hours"}),x.jsx(m0,{children:x.jsxs(tc,{children:["Mon–Sat: 8AM–6PM ",x.jsx("br",{})," Sun: 9AM–4PM"," "]})})]}),x.jsxs(M4,{children:[x.jsx(j4,{children:"Our Location"}),x.jsxs(m0,{children:[x.jsxs("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:[" ",x.jsx(tc,{children:" 801 Tioga Pl, Newbury Park, CA 91320"})]}),x.jsx("a",{href:"tel:+18055002705",children:x.jsx(tc,{children:"+1 (805) 500-2705"})})]})]})]})]})]}),x.jsxs(BR,{onSubmit:b,children:[x.jsx(WR,{src:NR,alt:"contact image"}),x.jsx(si,{children:"What service do you need for your appliances?"}),x.jsxs($R,{children:[x.jsxs(C4,{style:o.service?{borderColor:"red"}:{},children:[x.jsx(T4,{name:"service",value:"Repair",checked:t==="Repair",onChange:A=>e(A.target.value)}),x.jsx(E4,{checked:t==="Repair"}),"Repair"]}),x.jsxs(C4,{style:o.service?{borderColor:"red"}:{},children:[x.jsx(T4,{name:"service",value:"Installation",checked:t==="Installation",onChange:A=>e(A.target.value)}),x.jsx(E4,{checked:t==="Installation"}),"Installation"]})]}),x.jsxs(KR,{children:[x.jsxs(QR,{children:[x.jsx(si,{children:"Name"}),x.jsx(h0,{name:"name",type:"text",placeholder:"Your Name",value:i.name,onChange:v,style:o.name?{borderBottom:"1px solid red"}:{}}),x.jsx(si,{children:"Email"}),x.jsx(h0,{name:"email",type:"email",placeholder:"Your Email",value:i.email,onChange:v,style:o.email?{borderBottom:"1px solid red"}:{}}),x.jsx(si,{children:"Phone Number"}),x.jsx(h0,{name:"phone",type:"tel",placeholder:"Your Phone Number",value:i.phone,onChange:v,style:o.phone?{borderBottom:"1px solid red"}:{}})]}),x.jsxs(JR,{children:[x.jsx(si,{children:"In what location do you need the service?"}),x.jsx(Jl,{children:x.jsxs(ec,{name:"location",value:i.location,onChange:v,style:o.location?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select location"}),x.jsx("option",{children:"Malibu"}),x.jsx("option",{children:"Los Angeles County"}),x.jsx("option",{children:"Thousand Oaks"}),x.jsx("option",{children:"Newbury Park"}),x.jsx("option",{children:"Westlake Village"}),x.jsx("option",{children:"Oak Park"}),x.jsx("option",{children:"Lake Sherwood"}),x.jsx("option",{children:"Hidden Valley"}),x.jsx("option",{children:"Camarillo"}),x.jsx("option",{children:"Agoura Hills"}),x.jsx("option",{children:"Moorpark"}),x.jsx("option",{children:"Calabasas"}),x.jsx("option",{children:"Santa Rosa Valley"}),x.jsx("option",{children:"Other"})]})}),x.jsx(si,{children:"What do you need repaired?"}),x.jsx(Jl,{children:x.jsxs(ec,{name:"appliance",value:i.appliance,onChange:v,style:o.appliance?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select appliance"}),x.jsx("option",{children:"Cooktop"}),x.jsx("option",{children:"Oven"}),x.jsx("option",{children:"Range"}),x.jsx("option",{children:"Washer"}),x.jsx("option",{children:"Refrigerator"}),x.jsx("option",{children:"Microwave"}),x.jsx("option",{children:"Dishwasher"}),x.jsx("option",{children:"Dryer"}),x.jsx("option",{children:"Washing Machine"}),x.jsx("option",{children:"Freezer"}),x.jsx("option",{children:"Stove"}),x.jsx("option",{children:"Wine Cooler"}),x.jsx("option",{children:"Other"})]})}),x.jsx(si,{children:"Brand of appliance"}),x.jsx(Jl,{children:x.jsxs(ec,{name:"brand",value:i.brand,onChange:v,style:o.brand?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select brand"}),x.jsx("option",{children:"LG"}),x.jsx("option",{children:"Samsung"}),x.jsx("option",{children:"Whirlpool"}),x.jsx("option",{children:"Bosch"}),x.jsx("option",{children:"GE"}),x.jsx("option",{children:"Frigidaire"}),x.jsx("option",{children:"Maytag"}),x.jsx("option",{children:"KitchenAid"}),x.jsx("option",{children:"Viking"}),x.jsx("option",{children:"Fisher & Paykel"}),x.jsx("option",{children:"Amana"}),x.jsx("option",{children:"JennAir"}),x.jsx("option",{children:"Haier"}),x.jsx("option",{children:"Sharp"}),x.jsx("option",{children:"Electrolux"}),x.jsx("option",{children:"Sub-Zero"}),x.jsx("option",{children:"Thermador"}),x.jsx("option",{children:"Wolf"}),x.jsx("option",{children:"Other"})]})})]})]}),x.jsx(si,{children:"What type of power does this appliance use?"}),x.jsx(Jl,{children:x.jsxs(ec,{name:"power",value:i.power,onChange:v,style:o.power?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select power"}),x.jsx("option",{children:"Electric"}),x.jsx("option",{children:"Gas"}),x.jsx("option",{children:"Dual Fuel"}),x.jsx("option",{children:"Induction"}),x.jsx("option",{children:"Solar"}),x.jsx("option",{children:"Propane"}),x.jsx("option",{children:"Natural Gas"}),x.jsx("option",{children:"Other"})]})}),x.jsx(si,{children:"Any details you'd like to add?"}),x.jsx(UR,{name:"details",placeholder:"Any details you'd like to add?",value:i.details,onChange:v}),x.jsxs(IR,{children:['By clicking "Submit" you hereby agree to our'," ",x.jsx("span",{onClick:m,style:{cursor:"pointer"},children:"Privacy Policy"})," ","."]}),x.jsx(_R,{type:"submit",children:"Submit"})]}),x.jsx(by,{children:u&&x.jsx(PR,{type:u.type,message:u.message,onClose:()=>d(null)})})]})," ",p&&x.jsx(fv,{onClick:y,children:x.jsxs(pv,{onClick:A=>A.stopPropagation(),children:[x.jsx(hv,{onClick:y,children:"×"}),x.jsx(mv,{})]})})]})},BR=C.form`
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
`,si=C.label`
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
`,$R=C.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,C4=C.label`
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
`,T4=C.input.attrs({type:"radio"})`
  display: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,E4=C.span`
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
`,h0=C.input`
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
`,Jl=C.div`
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
`,ec=C.select`
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
`,UR=C.textarea`
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
`,_R=C.button`
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
`,IR=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  span {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: var(--blue-500);
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,GR=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  overflow: auto;
  padding-top: 100px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 240px;

  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    display: flex;
    width: 1440px;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 240px;
  }
`,A4=C.div`
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
`,m0=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,qR=C.p`
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
`,tc=C.p`
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
`,YR=C.button`
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
`,FR=C.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,XR=C.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,ZR=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,M4=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${t=>t.width||"100%"};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,j4=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,WR=C.img`
  margin: 0 auto;
  width: 100%;
  max-width: 696px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 668px;
  }

  @media screen and (min-width: 1440px) {
  }
`,KR=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`,QR=C.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,JR=C.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,L4="/assets/Ellipse%204aleksey-FxWBDF7j.png",O4="/assets/Ellipse%204-sanal-avatar-Dxfndv0Z.png",R4="/assets/Ellipse%204-Wendy%20Bailey-jDxdSyQ5.png",k4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgESURBVHgB3Vr7b1NVHP/c29t3V9ZtsNG9Oh1TivJWCAaGYjSDxWgwBo3EmBgRTIiCidF/QBMTfoaYKGIkQIiiYTwSQHkZiKCM8d4YY2PtBuzRrs/b9l6/53aDjdFube9Yt09yt7b33HPP93zf3+/hoD442GxW5JocsOW8CKPxJRj1lRCEORA0BmVELBZEJFqPkFgPX7AR3r5j6Oq7A4+nByqDg1pwOBwozd+Egty3YTJOJyKAaAzKf0kGZHaxgfSH4+IXzwMaugRN/PIG2tHj2YEm11a43a1QAZkSyGOesxYV9m1EVBGCIRBnJCKGR3qQoddxMOhAczXg5p1vceHabvo9hjSRLoEcFjrfQGX5j8QJG3yBfhZx6RI2FDLNxaaymDjEosDN1rdw/uo+pIHUCXRMLcKCuf9Cr52OPr8UlzUVRX0oFKGG1cwhFG7AhSurcNPVlsoEmlQGY/nCTzFn1jH4gxaExQGOjRVx6J+bo3exjZyGGY5NsFg60eY+l8oEoxtXu+wgrJbXyRBE6ZuA8YAkRzHFIsDjO4W648swwOEkGA2BWqypuUIWsZLMeoyeSI3rakNGFEadAA3XiF2HnfRLNNnwkQjU4b2a6wiI5YhGmbqNpTimAFkiv8pBb2jBrroqJCEy2YI5rFnZiHD4KTL9WUTcAPqJ1GkbsfvQs0ggronNem31KSLs6ewkjoEMXDQqQ5KqULNsf6JRj9en6hc2Ymrux+RsSedU8m1jAtr4CIVKtpxnYLN04Lb7/LARw56pqCjH0udb0O0ha8mNj7VMFcy6FkwRcOhsITo77w6+NZw7CysPwOuTJgxxDDyttdcnY8lzfw67NeTbolmrIeic5BKyUOdGgBSTKR52Yu7MVYN/HkygAEfJXvgU7k08ApnRYaFjVdlPGETXQzGcN/NdJX1B+sTx9LwcESG72sl8MfuVwlTkZ7niYlqRVom104IsU4wl5BMXa3Dhah2GrGD1q5fJIj2bQapDqZKI4oJp+HvLNnj8PqSyTJvZguVfbURz222QA0fa4Oi1GqEDvx2xs69xDpYXVsBocCLcJyMT6ZQk6AUBZVOnAexKETmMMJojIzD2mw3T8bS9lGUecQIdpespHcncodPj0iDxilAud+pKAwReGFFY86xWeIJBkvNMQ13SxbAITC/8jAjcHCcwL/d9hCLEPXVTn0A4jFfeIaNmMMTLE8mg6GApeBorpauDAwhRKpdvW0OfvhBQXJwPE7HU64Pa4GkzdSWlEA3GUdkuRpacKXFxcDAb7cjLy6EV6EqU4tBkA9Nls7mMR65+hVL5mmxg6V2BZREPi3kGYhlarmwE46DRsESg4tHcseKgTCmb6HbRi5LoINM5rRa6IjvEaBSqgSI3Kj9WMgJnY4ygo6hk86av6RXahAZaoIins7cHW/f8TNWzKVANbOOINiomVasXe4phOIgTt7bvfWAR+VFM7e7ugr16LqVqlVAVkhQWxiqwZpMyfxYQRSIyyTjyj95AgGLXscjOWPlPigVochPU8T9D4AsFUbhyKTRGU2JHT++VaY/5MgdUNXWMb1I0KECMXYRJWAz16VPEUyYdCySLYvobMYogqbnJbD5RvMgjFGocMYxK/y1xzildJE3ii6VZaksQ04tQpJ6HP3Q6nrtNMrCgPRBo4tEdOKv06CYbWL+xK3iUR29vC2XBmHQQiGkej4uqUb1eBIMdZGQK1U6XlEjm/j2KKIwjp0usD2jLA6fTq6GPMvUs21lLnLFOwn3vr1To3QAxAjXBIpm1az+ipq1uxL2zWSz45fgRtHe4ldAtI+j1HDrub2cf47LZ2vYdygo3KD2/DB3/wMOMC1qtgB0Uqo0WzR0u7L3ZCOTakD5IbAw6nrL579m3OIEtHS2YH+okMZqqVKbSnrs/eqFMPkhhWyrIoWDAo0Q0GZcsOGrQNgwcYnhoXVo716GyZB/dRLrgqNzQ2nUP5sXOuJKnAtbkmVYEzZRcyt4yiGlyqK9/qfmbB2sadEtD7bJ78AesACaqY5RhJP3bc5itX9mlwdscQ1Pbh5QAa9QPK54ESPdyzByaXW8CD8PaoXJ0ruEPRCJu0oOJRyDLRsLhBqLh98E/P6ooMi5fX0CNfl7phU8UyOxwgplH/dWVj94armv3PT5qKHYhP7eW/CKrZWR3HMcYwU5eNLevR/2NY4/eTuwSaqsPw6B/jSreMrK128RsBTMqwdBJ7D+x7HFDEnNn//EaavA3QSvIWWl0lEhCYCFgExFXnWhYMvGTsLPOSTvUqkTm2UTkAHFGQws6D81EkgNBI+lXBDsPPEO9hWYKf5iYjn+FWKY1GA0cVeQb4fJX4a/MDgINgEftyydhNS6B1z9+hxMkZlDMlAH1HcSBE6xVPaJUjTZikXGj5Qfk2bpRlL9KORMqSU/w/Aw5cXaaJc+qwW33ehw98/lon0x9gTMryuGcUUedzln9xynH2I2wCIX8ckh04b/6+bh1tzOVp9PnwKLZq+Gw71WqV4EQ4yinGkeVA7Fc/ECsJHXj2p0PUH+J9dxTNnSZLkhQDi88VfIl+cxZSpdYFNPnqsyONGs5stxAMOxGq2sd/rl8AONwpHk42KH0soJPSE/WwmyyK+0r1tRhnSvlULr0cP8fHErvLyuymhBzRf6gG929e3DHtQXN2XEo/fGwWvNgtxbDlLOCTHoVcWQ2pfezqXpnUu7HpAAZqosIh5qIqNPo9Z1Bj78VPT1epCGGyfA/uU/qLszt8vwAAAAASUVORK5CYII=",D4="/assets/Review%20Image-alexey-BS9M-VaX.png",H4="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",V4="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",z4="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",nc=[{avatar:L4,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:D4},{avatar:O4,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:H4},{avatar:R4,name:"Wendy Bailey",time:"месяц назад",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:V4},{avatar:k4,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:z4},{avatar:L4,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:D4},{avatar:O4,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:H4},{avatar:R4,name:"Wendy Bailey",time:"месяц назад",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:V4},{avatar:k4,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:z4}],ek=C.div`
  padding: 0px 16px;
  width: 375px;
  height: 170px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,tk=C.h2`
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
`,nk=C.p`
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
`,ik=C.div`
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
`,g0=C.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: ${t=>t.$isVisible?"block":"none"};

  @media screen and (min-width: 768px) {
    width: 50%; /* Два свайпери займають по половині ширини */
    display: block;
  }
`,x0=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: #f5faff;
  border-radius: 8px;
  height: 600px; /* Фіксована висота картки */
`,y0=C.div`
  display: flex;
  gap: 19px;
  align-items: center;
`,v0=C.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`,w0=C.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,b0=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`,S0=C.p`
  color: rgba(33, 33, 33, 0.5);
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`,C0=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  line-height: 1.25em;
  flex-grow: 1;
  overflow: hidden;
`,T0=C.img`
  width: 100%;
  height: 370px;
  border-radius: 4px;
  object-fit: cover;
`,E0=C.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,A0=C.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,ou=()=>{const[,t]=Le.useState(!1),e=Le.useRef(null),i=Le.useRef(null),r=Le.useRef(null),o=Ue({query:"(min-width: 768px)"}),l=Ue({query:"(min-width: 1440px)"}),u=d=>{if(!e.current||!r.current)return;const p=e.current,h=r.current,m=d.touches[0].clientY,{top:y,bottom:v}=h.getBoundingClientRect(),S=p.isBeginning&&m>y+50,b=p.isEnd&&m<v-50;S||b?(t(!0),p.allowTouchMove=!1):(t(!1),p.allowTouchMove=!0)};return Le.useEffect(()=>{const d=r.current;if(d)return d.addEventListener("touchmove",u,{passive:!1}),()=>{d.removeEventListener("touchmove",u)}},[]),x.jsxs("div",{children:[x.jsxs(ek,{children:[x.jsx(nk,{children:"Your Feedback Matters"}),x.jsxs(tk,{children:["Discover why clients ",x.jsx("span",{children:" trust "})," our repairs"]})]}),x.jsxs(ik,{ref:r,children:[x.jsxs(g0,{$isVisible:!0,children:[x.jsx(E0,{}),x.jsx(A0,{}),x.jsx(Jt,{ref:e,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!1,waitForTransition:!1},speed:7e3,loop:!0,touchEventsTarget:"container",modules:[s0,mn],grabCursor:!1,resistance:!0,resistanceRatio:.85,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{e.current&&(e.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:nc.map((d,p)=>x.jsx(en,{children:x.jsxs(x0,{children:[x.jsxs(y0,{children:[x.jsx(v0,{src:d.avatar,alt:d.name}),x.jsxs(w0,{children:[x.jsx(b0,{children:d.name}),x.jsx(S0,{children:d.time})]})]}),x.jsx(C0,{children:d.text}),x.jsx(T0,{src:d.image,alt:`Review by ${d.name}`})]})},`top-${p}`))})]}),x.jsxs(g0,{$isVisible:o,children:[x.jsx(E0,{}),x.jsx(A0,{}),x.jsx(Jt,{ref:i,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!1,waitForTransition:!1,reverseDirection:!0},speed:4e3,loop:!0,touchEventsTarget:"container",modules:[s0,mn],grabCursor:!1,noSwiping:!0,allowTouchMove:!1,simulateTouch:!1,resistance:!0,resistanceRatio:.85,initialSlide:nc.length-1,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{i.current&&(i.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:nc.map((d,p)=>x.jsx(en,{children:x.jsxs(x0,{children:[x.jsxs(y0,{children:[x.jsx(v0,{src:d.avatar,alt:d.name}),x.jsxs(w0,{children:[x.jsx(b0,{children:d.name}),x.jsx(S0,{children:d.time})]})]}),x.jsx(C0,{children:d.text}),x.jsx(T0,{src:d.image,alt:`Review by ${d.name}`})]})},`bottom-${p}`))})]}),l&&x.jsxs(g0,{$isVisible:!0,children:[x.jsx(E0,{}),x.jsx(A0,{}),x.jsx(Jt,{ref:e,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!1,waitForTransition:!1},speed:9e3,loop:!0,touchEventsTarget:"container",modules:[s0,mn],grabCursor:!1,resistance:!0,resistanceRatio:.85,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{e.current&&(e.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:nc.map((d,p)=>x.jsx(en,{children:x.jsxs(x0,{children:[x.jsxs(y0,{children:[x.jsx(v0,{src:d.avatar,alt:d.name}),x.jsxs(w0,{children:[x.jsx(b0,{children:d.name}),x.jsx(S0,{children:d.time})]})]}),x.jsx(C0,{children:d.text}),x.jsx(T0,{src:d.image,alt:`Review by ${d.name}`})]})},`top-${p}`))})]})]})]})},ak="/assets/Hero%20Image-CELmD3oB.png",Mh="data:image/svg+xml,%3csvg%20width='140'%20height='33'%20viewBox='0%200%20140%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_586)'%3e%3cpath%20d='M0.00384521%2032.9336H31.9955V0.933594H0.00384521V32.9336ZM20.5091%203.37746C26.1637%205.23116%2030.25%2010.5932%2030.2654%2016.9275C30.2807%2023.1588%2026.277%2028.508%2020.5091%2030.4846V3.37746ZM15.9946%202.65223C17.0161%202.65223%2018.1043%202.78857%2019.0107%202.96908C19.0107%2010.2187%2012.0004%2016.185%204.76547%2016.185L1.74041%2016.1805C2.23648%208.74909%208.38454%202.65223%2015.9946%202.65223ZM4.76803%2017.6943C12.0017%2017.6943%2019.0094%2023.6542%2019.0094%2030.8968C18.1043%2031.0818%2016.9617%2031.2194%2015.9946%2031.2194C8.38198%2031.2092%202.02589%2025.0938%201.73849%2017.6943H4.76803ZM42.7049%2019.7452V17.7283H49.3618V15.157H42.7036V11.4131H49.7862V8.84766H39.9787V19.6287C39.9787%2022.3542%2041.1392%2024.2181%2043.8634%2024.6009C43.9178%2024.6143%2043.9716%2024.6246%2044.0215%2024.6259H44.0708C44.3499%2024.6572%2044.6347%2024.6777%2044.9336%2024.6777H49.975V22.1154H44.9561C44.09%2022.1154%2042.7049%2021.6879%2042.7049%2019.7452ZM51.9113%2024.6816H54.6374V8.84382H51.9113V24.6816ZM62.6404%2012.8674C59.1948%2012.8674%2056.6159%2015.2415%2056.6159%2018.938V19.0296C56.6159%2022.6358%2059.1033%2024.9638%2062.7089%2024.9638C64.4429%2024.9638%2066.063%2024.4851%2067.5461%2022.9092L65.903%2021.3121C65.0357%2022.1794%2064.1914%2022.6358%2062.7998%2022.6358C60.7688%2022.6358%2059.4227%2021.4491%2059.3312%2019.6229H68.2758C68.3212%2019.1665%2068.3212%2018.6647%2068.3212%2018.6647C68.3225%2015.4463%2066.063%2012.8674%2062.6404%2012.8674ZM59.4003%2017.7059C59.5142%2016.313%2060.9295%2015.1948%2062.6404%2015.1948C64.2375%2015.1948%2065.5381%2016.3361%2065.5381%2017.7059H59.4003ZM75.9825%2015.3094C77.2146%2015.3094%2078.1281%2015.7664%2078.9032%2016.5646L80.5918%2014.8069C79.2681%2013.3917%2077.6941%2012.8213%2075.9825%2012.8213C72.5138%2012.8213%2069.7301%2015.4003%2069.7301%2018.915C69.7301%2022.4297%2072.5138%2025.0093%2075.9825%2025.0093C77.6941%2025.0093%2079.2687%2024.439%2080.5918%2023.0237L78.9032%2021.266C78.1281%2022.0649%2077.2146%2022.5213%2075.9825%2022.5213C73.9739%2022.5213%2072.4453%2020.9914%2072.4453%2018.915C72.4453%2016.8385%2073.9739%2015.3094%2075.9825%2015.3094ZM85.0148%2019.7497H85.0116V15.7062H87.4906V13.2291H85.0148V8.84446H82.2886V19.9103L82.2963%2019.9097C82.3744%2022.4829%2083.5432%2024.2354%2086.1733%2024.6047C86.2277%2024.6182%2086.2815%2024.6284%2086.3314%2024.6291H86.3807C86.6598%2024.6604%2086.9446%2024.6816%2087.2436%2024.6816H87.5322L87.5418%2022.1193H87.266C86.3999%2022.1193%2085.0148%2021.6923%2085.0148%2019.7497ZM92.4885%2014.9324V13.2297H89.7847V24.6816H92.4885V18.6596C92.4885%2016.7739%2093.6925%2015.5916%2095.5775%2015.5916C96.009%2015.5916%2096.3956%2015.6365%2096.7137%2015.7056V13.0703C96.5998%2013.0479%2096.1914%2013.0018%2095.8963%2013.0018C94.2602%2013.0025%2093.0338%2013.7527%2092.4885%2014.9324ZM103.38%2012.8885C99.9033%2012.8885%2097.131%2015.5232%2097.131%2018.9553C97.131%2022.3856%2099.9033%2025.0221%20103.38%2025.0221C106.832%2025.0221%20109.627%2022.3856%20109.627%2018.9553C109.626%2015.5238%20106.832%2012.8885%20103.38%2012.8885ZM103.38%2022.5456C101.358%2022.5456%2099.8361%2020.9767%2099.8361%2018.9553C99.8361%2016.9326%20101.358%2015.3651%20103.38%2015.3651C105.379%2015.3651%20106.923%2016.9326%20106.923%2018.9553C106.922%2020.9774%20105.379%2022.5456%20103.38%2022.5456ZM111.303%2024.6816H114.03V8.84382H111.303V24.6816ZM123.862%2019.8866C123.862%2021.7039%20122.795%2022.4777%20121.363%2022.4777C119.932%2022.4777%20118.865%2021.7039%20118.865%2019.911V13.2297H116.115V20.1376C116.115%2023.4097%20118.5%2024.9773%20121.34%2024.9773C124.203%2024.9773%20126.61%2023.3867%20126.61%2020.0691V13.2297H123.862V19.8866ZM136.925%2021.0196L135.206%2018.6148L137.335%2015.7139L139.158%2013.2297H136.182L133.705%2016.6606L131.206%2013.2297H128.253L129.947%2015.5462L132.206%2018.6372L129.838%2021.9356L127.867%2024.6816H130.797L133.704%2020.6368L136.613%2024.6816H139.544L136.925%2021.0196Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_586'%3e%3crect%20width='139.541'%20height='32'%20fill='white'%20transform='translate(0.00384521%200.933594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Nc="/assets/2-lv1xptCk.svg",jh="/assets/3-xYBlE7jA.svg",Lh="data:image/svg+xml,%3csvg%20width='77'%20height='36'%20viewBox='0%200%2077%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M67.1338%2020.3456H71.0883V24.0242C70.3626%2024.3009%2068.9382%2024.5778%2067.5878%2024.5778C63.2137%2024.5778%2061.7591%2022.3574%2061.7591%2017.8483C61.7591%2013.5451%2063.1439%2011.0128%2067.5138%2011.0128C69.9492%2011.0128%2071.3309%2011.7769%2072.4762%2013.2341L75.4978%2010.4581C73.6527%207.82715%2070.4323%207.02979%2067.4087%207.02979C60.6107%207.02708%2057.0362%2010.7351%2057.0362%2017.8125C57.0362%2024.8547%2060.266%2028.6723%2067.3723%2028.6723C70.6355%2028.6723%2073.8247%2027.8417%2075.5614%2026.6244V16.4251H67.1339L67.1338%2020.3456ZM46.3909%2024.2661H56.4545V28.36H41.5343V7.33832H46.3913L46.3909%2024.2661Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4968%2029.43C35.8453%2023.0815%2035.8449%2012.7878%2029.4961%206.44074C23.1474%200.0925049%2012.854%200.0917411%206.50687%206.44012C0.158384%2012.7885%200.158766%2023.0823%206.5075%2029.4294C12.8561%2035.7781%2023.1497%2035.7783%2029.4968%2029.43Z'%20fill='%23242424'/%3e%3cpath%20d='M13.0698%2014.7643C13.4404%2014.7625%2013.8023%2014.6509%2014.1096%2014.4436C14.4169%2014.2364%2014.6559%2013.9428%2014.7965%2013.5998C14.9372%2013.2568%2014.973%2012.8798%2014.8996%2012.5165C14.8261%2012.1531%2014.6467%2011.8197%2014.384%2011.5583C14.1212%2011.2968%2013.7868%2011.119%2013.4232%2011.0474C13.0596%2010.9757%2012.6828%2011.0134%2012.3405%2011.1556C11.9982%2011.298%2011.7057%2011.5384%2011.4999%2011.8468C11.2942%2012.1551%2011.1845%2012.5174%2011.1845%2012.8881C11.185%2013.1351%2011.2342%2013.3796%2011.3293%2013.6075C11.4245%2013.8355%2011.5635%2014.0425%2011.7385%2014.2167C11.9136%2014.3909%2012.1213%2014.5289%2012.3497%2014.6229C12.5781%2014.7169%2012.8228%2014.7649%2013.0698%2014.7643ZM30.2643%2018.4501H21.9973V17.2255H31.4759C31.4889%2017.4627%2031.4953%2017.6998%2031.4953%2017.9398C31.4953%2025.3134%2025.4857%2031.2907%2018.0744%2031.2907C10.6628%2031.2907%204.65222%2025.3171%204.65222%2017.9398C4.65222%2010.5631%2010.6609%204.58887%2018.0731%204.58887C18.2688%204.58887%2018.4635%204.59282%2018.6572%204.60084V5.81624C18.4635%205.8076%2018.2694%205.80333%2018.0749%205.80333C11.3382%205.80333%205.87505%2011.2371%205.87505%2017.9385C5.87505%2024.6401%2011.3375%2030.0749%2018.0749%2030.0749C24.6272%2030.0749%2029.98%2024.9337%2030.2633%2018.4842L30.2643%2018.4501ZM21.9785%2023.5518H18.6561V11.0698H17.4278V24.7847H18.659V24.7765H21.9813L21.9785%2023.5518Z'%20fill='white'/%3e%3c/svg%3e",Oh="/assets/5-DtA_MHfM.svg",Rh="/assets/6-BYfTVs51.svg",kh="/assets/7-DtKFqDn5.svg",Dh="/assets/8-C9mdpuht.svg",Hh="/assets/9-1he0Czj8.svg",Vh="data:image/svg+xml,%3csvg%20width='191'%20height='24'%20viewBox='0%200%20191%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_699)'%3e%3cmask%20id='mask0_277_699'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='190'%20height='56'%3e%3cpath%20d='M0.970825%2055.6831H189.922V0.547134H0.970825V55.6831Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_277_699)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.577%2023.4158H132.473L121.526%200.547155L110.577%2023.4158ZM188.424%2021.6962C188.63%2021.6962%20188.752%2021.5893%20188.752%2021.4207C188.752%2021.2342%20188.63%2021.1372%20188.424%2021.1372H188.012V21.6962H188.424ZM187.698%2020.8347H188.438C188.656%2020.8347%20188.827%2020.9045%20188.941%2021.0255C189.027%2021.1134%20189.076%2021.2395%20189.076%2021.3932C189.076%2021.6871%20188.92%2021.8643%20188.692%2021.9332L189.138%2022.6008H188.761L188.359%2021.9899H188.012V22.6008H187.698V20.8347ZM189.754%2021.7662C189.754%2020.9234%20189.146%2020.2473%20188.342%2020.2473C187.531%2020.2473%20186.917%2020.9317%20186.917%2021.7662C186.917%2022.6098%20187.526%2023.2846%20188.332%2023.2846C189.142%2023.2846%20189.754%2022.6008%20189.754%2021.7662ZM186.751%2021.775C186.751%2020.8478%20187.452%2020.0793%20188.342%2020.0793C189.23%2020.0793%20189.921%2020.8385%20189.921%2021.7569C189.921%2022.6846%20189.22%2023.4526%20188.332%2023.4526C187.444%2023.4526%20186.751%2022.6932%20186.751%2021.775ZM151.36%2012.3135V4.9244H156.648C159.337%204.9244%20160.934%206.2121%20160.934%208.57187C160.934%2010.867%20159.277%2012.3135%20156.679%2012.3135H151.36ZM159.692%2015.0823C162.586%2014.2016%20164.626%2012.0321%20164.626%208.41529C164.626%206.43127%20164.004%204.79723%20162.913%203.6014C161.582%202.21991%20159.542%201.40306%20156.945%201.40306H147.725V23.4158H151.36V15.7434H155.851L160.99%2023.4158H165.277L159.692%2015.0823ZM105.299%2012.4711C105.299%2016.7781%20102.461%2019.8896%2098.1221%2019.8896H94.0439V4.9244H98.1221C102.461%204.9244%20105.299%208.1%20105.299%2012.4075V12.4711ZM98.1221%201.40306H90.4052V23.4158H98.1221C104.62%2023.4158%20109.115%2018.604%20109.115%2012.4075C109.115%206.14909%20104.62%201.40306%2098.1221%201.40306ZM79.4093%2012.3915V23.4158H83.0453V1.40306H79.4093V12.3915ZM44.2722%2012.0246V23.4158H47.9065V1.40306H44.2722V12.0246ZM25.0175%2012.3135V4.9244H30.3084C32.996%204.9244%2034.5916%206.2121%2034.5916%208.57187C34.5916%2010.867%2032.9373%2012.3135%2030.3371%2012.3135H25.0175ZM33.351%2015.0823C36.2451%2014.2016%2038.2857%2012.0321%2038.2857%208.41529C38.2857%206.43127%2037.6644%204.79723%2036.5719%203.6014C35.2423%202.21991%2033.2018%201.40306%2030.6049%201.40306H21.3849V23.4158H25.0175V15.7434H29.5103L34.6509%2023.4158H38.9361L33.351%2015.0823ZM0.969482%2023.4158H4.60254V14.4522H16.359V10.9338H4.60254V4.9244H16.3646V1.40306H0.969482V23.4158ZM174.298%2019.9561V14.0421H185.997V10.5833H174.298V4.85948H185.997V1.40306H170.664V23.4158H186.002V19.9561H174.298ZM64.0979%2014.1057H69.3824V18.2267C68.1161%2019.2327%2066.3419%2019.8914%2064.3926%2019.8914C60.1678%2019.8914%2057.3605%2016.5598%2057.3605%2012.0321C57.3605%207.7529%2060.2547%204.20078%2064.0658%204.20078C66.697%204.20078%2068.2605%205.11279%2069.8567%206.55844L72.1616%203.63164C70.0378%201.71514%2067.8157%200.646822%2064.215%200.646822C57.9797%200.646822%2053.5473%205.86821%2053.5473%2012.0321C53.5473%2018.508%2057.8041%2023.4158%2064.2719%2023.4158C67.9364%2023.4158%2070.8605%2021.8424%2072.901%2019.9855V10.7377H64.0979V14.1057ZM136.715%2012.3915V23.4158H140.35V1.40306H136.715V12.3915Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M116.09%2019.8828L121.504%208.2977L126.96%2019.8828H116.09Z'%20fill='%23ED114C'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_699'%3e%3crect%20width='190'%20height='24'%20fill='white'%20transform='translate(0.446045)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",zh="data:image/svg+xml,%3csvg%20width='197'%20height='18'%20viewBox='0%200%20197%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2176%206.82621L22.529%201.22314H16.5098L12.2064%206.67151C11.7989%207.13951%2011.0096%207.47882%2010.4092%207.47882H9.40262V1.22314H1.12445V16.224H9.37546V11.622H10.6836C11.2827%2011.622%2011.5815%2011.7793%2011.9089%2012.3526L14.2236%2016.224H24.1903L19.5608%208.70343C19.1791%208.07942%2018.144%207.55682%2017.0559%207.55682C16.7842%207.55682%2016.5098%207.58412%2017.2176%206.82621Z'%20fill='%23242424'/%3e%3cpath%20d='M26.857%2016.2085H34.6475V7.50488H26.857V16.2085Z'%20fill='%23242424'/%3e%3cpath%20d='M30.8807%206.77201C33.0351%206.62641%2034.7114%205.5539%2034.6258%204.37608C34.5375%203.19957%2032.7213%202.36106%2030.5683%202.50666C28.4138%202.65226%2026.7375%203.72478%2026.8245%204.89999C26.9114%206.0778%2028.7276%206.91501%2030.8807%206.77201Z'%20fill='%23242424'/%3e%3cpath%20d='M37.6958%207.45174H40.3107V4.5332H47.6625V7.45174H50.7135V10.3183H47.7725V12.0382C47.7725%2013.7581%2049.8414%2013.6528%2050.7665%2012.8741V15.322C47.9355%2016.5206%2043.2789%2016.8339%2041.4002%2015.608C40.4194%2014.958%2040.3107%2014.4354%2040.3107%2013.6528V10.3703H37.6958'%20fill='%23242424'/%3e%3cpath%20d='M68.658%207.9481C64.6276%206.01888%2059.1396%206.35818%2056.4323%207.7661C52.0881%2010.0203%2052.1547%2013.6994%2056.3766%2015.7911C59.4262%2017.3043%2066.6693%2016.8857%2068.6309%2015.1658V12.7439C65.7456%2014.1505%2063.7378%2013.9464%2062.5316%2013.5512C60.6529%2012.9376%2060.6081%2010.3999%2063.0206%209.95402C64.5719%209.66802%2066.5348%209.69402%2068.658%2010.7626'%20fill='%23242424'/%3e%3cpath%20d='M71.2731%202.47656V16.2099H78.5976V11.9862C78.7063%209.32764%2082.1934%209.82295%2082.1934%2011.7795V16.2099H89.4894V10.7902C89.4894%208.23433%2084.6983%205.3678%2078.6533%208.28503L78.7606%202.47656'%20fill='%23242424'/%3e%3cpath%20d='M113.071%207.47901V16.2086H120.915V11.5182C120.915%209.90094%20124.454%209.12093%20124.454%2011.5702V16.1566H131.372V10.8408C131.372%208.34742%20127.651%205.12858%20120.915%208.44362V7.47901'%20fill='%23242424'/%3e%3cpath%20d='M159.285%2016.1994H167.072V7.49707H159.285V16.1994Z'%20fill='%23242424'/%3e%3cpath%20d='M163.31%206.76292C165.463%206.61862%20167.138%205.54741%20167.052%204.36699C166.967%203.19048%20165.149%202.35327%20162.995%202.49887C160.841%202.64317%20159.167%203.71569%20159.253%204.8922C159.338%206.07131%20161.154%206.90852%20163.31%206.76292Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M192.259%205.01547V4.03396H192.943C193.291%204.03396%20193.663%204.10806%20193.663%204.49937C193.663%204.98557%20193.284%205.01547%20192.861%205.01547H192.259ZM192.867%207.95871C194.431%207.95871%20195.768%206.79519%20195.768%205.20527C195.768%203.62836%20194.431%202.46484%20192.867%202.46484C191.286%202.46484%20189.952%203.62836%20189.952%205.20527C189.952%206.79519%20191.286%207.95871%20192.867%207.95871ZM190.528%205.20527C190.528%203.90396%20191.554%202.92245%20192.867%202.92245C194.166%202.92245%20195.192%203.90396%20195.192%205.20527C195.192%206.52739%20194.166%207.5011%20192.867%207.5011C191.554%207.5011%20190.528%206.52739%20190.528%205.20527ZM192.259%205.42238H192.836L193.711%206.79519H194.272L193.329%205.40158C193.815%205.34308%20194.188%205.09477%20194.188%204.52927C194.188%203.90396%20193.802%203.62836%20193.018%203.62836H191.759V6.79519H192.259'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.473%2010.6355H103.389C103.436%209.74884%20102.65%209.30554%20101.815%209.30554C101.119%209.30554%20100.473%209.88014%20100.473%2010.6355ZM110.405%2012.8741C105.449%2012.5088%20100.165%2012.8208%20100.165%2012.8208C101.689%2015.218%20107.9%2014.854%20109.967%2013.2901L109.75%2015.322C105.611%2017.6685%2092.9763%2017.5645%2092.7576%2012.0915C92.5647%207.25931%20100.056%206.56641%20101.689%206.56641C105.555%206.56641%20111.22%208.28633%20110.405%2012.8741Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.468%2010.2156L142.754%206.14911L144.606%2010.2156H140.468ZM133.088%2016.1709H137.335L139.161%2012.8221H145.805L147.386%2016.1709H157.459L149.617%201.25195H139.594C140.577%201.61726%20140.848%202.24126%20140.577%202.76127'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.031%2010.6563C179.721%209.72548%20177.203%209.95819%20177.203%2011.448C177.203%2013.5878%20180.193%2013.2147%20181.031%2012.5634V10.6563ZM188.395%202.5V16.1567H181.044V15.218C177.395%2017.9286%20169.223%2016.4687%20169.223%2012.0915C169.223%206.72115%20178.1%205.99314%20181.095%207.86906V2.5'%20fill='%23242424'/%3e%3c/svg%3e",Ph="data:image/svg+xml,%3csvg%20width='197'%20height='26'%20viewBox='0%200%20197%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M193.375%207.13851V7.56954H192.736V9.81922H192.298V7.56954H191.672V7.13851H193.375ZM193.824%207.02196C193.837%207.03955%20193.86%207.07913%20193.903%207.13851C193.943%207.20008%20193.994%207.27265%20194.054%207.35842C194.115%207.44638%20194.181%207.54314%20194.256%207.6465C194.33%207.75206%20194.407%207.85982%20194.484%207.96757C194.56%208.07753%20194.635%208.18308%20194.709%208.28864C194.784%208.39419%20194.85%208.48876%20194.909%208.57453C194.969%208.6603%20195.02%208.73286%20195.06%208.79004C195.101%208.84722%20195.126%208.8846%20195.137%208.89779C195.141%208.8912%20195.165%208.85821%20195.201%208.80543C195.237%208.75046%20195.286%208.68008%20195.344%208.59652C195.403%208.51295%20195.469%208.41839%20195.541%208.31063C195.616%208.20508%20195.693%208.09511%20195.769%207.98516C195.848%207.8752%20195.925%207.76525%20195.999%207.65749C196.074%207.54974%20196.142%207.45078%20196.206%207.36282C196.267%207.27486%20196.32%207.20008%20196.365%207.13851L196.446%207.01976V9.81922H195.98V8.45138C195.98%208.43159%20195.984%208.41179%20195.988%208.3898C195.993%208.36781%20195.995%208.35462%20195.995%208.35022L195.137%209.6257C195.124%209.6125%20195.097%209.57072%20195.052%209.50475C195.005%209.43878%20194.95%209.35961%20194.884%209.26944C194.822%209.17928%20194.754%209.08032%20194.684%208.97696C194.611%208.8736%20194.545%208.77684%20194.484%208.68667C194.42%208.59651%20194.367%208.52175%20194.322%208.45797C194.279%208.3964%20194.254%208.35901%20194.252%208.34802C194.252%208.35241%20194.252%208.36561%20194.258%208.3876C194.262%208.40959%20194.264%208.43159%20194.264%208.44918V9.81702H193.826V7.01756L193.824%207.02196ZM186.838%2013.87L183.252%2017.4633L179.74%2013.848V20.2804H176.92V7.09892H177.542L183.256%2012.8584L189.056%207.09892H189.659V20.2804H186.838V13.8678V13.87ZM58.3087%2013.87L54.7245%2017.4633L51.2126%2013.848V20.2804H48.3925V7.09892H49.014L54.7287%2012.8584L60.5286%207.09892H61.1288V20.2804H58.3087V13.8678V13.87ZM67.1671%2013.793C67.1671%2010.0721%2069.6999%207.02196%2073.8673%207.02196C78.0347%207.02196%2080.6101%2010.0721%2080.6101%2013.793C80.6101%2017.5139%2078.0773%2020.5641%2073.8673%2020.5641C69.6573%2020.5641%2067.1671%2017.5139%2067.1671%2013.793ZM77.4664%2013.793C77.4664%2011.5433%2075.8957%2010.0501%2073.8652%2010.0501C71.8347%2010.0501%2070.3065%2011.5433%2070.3065%2013.793C70.3065%2016.0427%2071.8772%2017.5359%2073.8652%2017.5359C75.8531%2017.5359%2077.4664%2016.0427%2077.4664%2013.793ZM98.28%2020.2826H97.7841L89.6621%2013.5247V20.2826H86.842V7.10113H87.3379L95.4599%2013.9799V7.12311H98.28V20.2826ZM104.514%2013.793C104.514%2010.0721%20107.049%207.02196%20111.214%207.02196C115.38%207.02196%20117.955%2010.0721%20117.955%2013.793C117.955%2017.5139%20115.422%2020.5641%20111.214%2020.5641C107.006%2020.5641%20104.514%2017.5139%20104.514%2013.793ZM114.816%2013.793C114.816%2011.5433%20113.245%2010.0501%20111.214%2010.0501C109.184%2010.0501%20107.656%2011.5433%20107.656%2013.793C107.656%2016.0427%20109.226%2017.5359%20111.214%2017.5359C113.202%2017.5359%20114.816%2016.0427%20114.816%2013.793ZM130.232%2012.5593H135.97V14.0085C135.97%2017.7954%20133.98%2020.5641%20129.961%2020.5641C125.943%2020.5641%20123.436%2017.5139%20123.436%2013.793C123.436%2010.0721%20125.775%207.02196%20129.961%207.02196C133.29%207.02196%20134.584%208.82742%20134.584%208.82742L132.843%2011.1277C132.843%2011.1277%20131.7%2010.0281%20129.921%2010.0281C127.89%2010.0281%20126.383%2011.5433%20126.383%2013.793C126.383%2016.0427%20127.89%2017.5579%20129.921%2017.5579C131.721%2017.5579%20132.664%2016.4319%20132.705%2015.1565V15.0267H130.234V12.5615L130.232%2012.5593ZM142.131%207.12311H147.861C151.043%207.12311%20152.805%208.99015%20152.805%2011.8226C152.805%2013.6391%20152.009%2014.9366%20150.711%2015.6952L150.577%2015.781L153.538%2020.0649V20.2804H150.277L147.806%2016.4935H144.896V20.2804H142.055L142.127%207.12091L142.131%207.12311ZM147.661%2010.0061H144.898V13.8986H147.682C149.085%2013.8986%20149.86%2013.2498%20149.86%2011.9524C149.86%2010.6549%20149.064%2010.0061%20147.661%2010.0061ZM164.552%207.10113H165.054L171.65%2020.2826H168.215L167.413%2018.5761H162.155L161.391%2020.2826H157.979L164.554%207.10113H164.552ZM164.782%2012.6143L163.056%2016.3704H166.491L164.782%2012.6143ZM4.175%200.635742L1.20588%207.51456H7.11645L14.1721%2023.8891L18.2267%2014.4791L12.2608%200.637943H4.17287L4.175%200.635742ZM25.2355%200.686331L21.1937%2010.0589L27.7896%2025.3647H35.8796L25.2355%200.686331ZM4.14094%2016.7948L0.446045%2025.3647H7.83585L4.14094%2016.7948Z'%20fill='%23242424'/%3e%3c/svg%3e",Nh="/assets/13-_M_Krupi.svg",Bh="data:image/svg+xml,%3csvg%20width='121'%20height='22'%20viewBox='0%200%20121%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M107.367%209.97166V12.1049H110.751V9.97166C110.751%209.05838%20109.987%208.29571%20109.073%208.29571C108.128%208.29571%20107.367%209.05838%20107.367%209.97166ZM116.359%206.95413C111.755%204.66888%20106.94%204.51551%20102.215%206.5272C98.3145%208.17275%2096.4866%2012.6852%2098.1612%2016.587C99.015%2018.5987%20100.446%2019.9997%20102.49%2020.7624C107.154%2022.5295%20111.755%2022.4079%20116.297%2020.3354C118.278%2019.4512%20119.651%2017.988%20120.382%2015.9459H114.408C113.737%2018.0806%20111.451%2019.2978%20109.289%2018.6291C109.105%2018.5683%20108.95%2018.5061%20108.739%2018.4149C107.884%2018.0184%20107.367%2017.1963%20107.367%2016.2513V14.7273H120.534C120.929%2011.4652%20119.314%208.44631%20116.359%206.95413ZM69.6909%209.97166C69.6909%209.05838%2068.9614%208.29571%2068.0177%208.29571C67.1017%208.29571%2066.3418%209.05838%2066.3418%209.97166V12.1049H69.6909V9.97166ZM79.4771%2014.7273C79.8736%2011.4652%2078.2571%208.44631%2075.3018%206.95413C70.7285%204.66888%2065.883%204.51551%2061.1592%206.5272C57.256%208.17275%2055.4599%2012.6852%2057.1026%2016.587C57.9565%2018.5987%2059.4197%2019.9997%2061.4618%2020.7624C66.0958%2022.5295%2070.7285%2022.4079%2075.2714%2020.3354C77.2209%2019.4512%2078.5942%2017.988%2079.3251%2015.9459H73.3495C72.7098%2018.0806%2070.4245%2019.2978%2068.2581%2018.6291C68.0771%2018.5683%2067.8933%2018.5061%2067.7123%2018.4149C66.8571%2018.0184%2066.3418%2017.1963%2066.3418%2016.2513V14.7273H79.4771ZM82.8884%2017.8968V4.21155H80.5133V0.85828H94.1696V17.8968H96.5764V21.2501H80.5133V17.8968H82.8884ZM46.2829%205.52136L51.1919%202.96115L49.6362%200.00441933L44.7286%202.53422L46.2829%205.52136ZM53.1428%2017.8968V5.91789H39.9439V9.27116H42.3494V17.8968H39.9439V21.2501H55.5483V17.8968H53.1428ZM20.0081%208.81383L25.771%200.85828H37.7803V4.21155H35.372V17.8968H37.7803V21.2501H22.1731V17.8968H24.5814V9.02661L15.7112%2021.2501L6.81057%209.02661V17.8968H9.21878V21.2501H0.59314V17.8968H2.96958V4.21155H0.59314V0.85828H14.2176L20.0081%208.81383Z'%20fill='%23242424'/%3e%3c/svg%3e",$h="/assets/15-VL89vzXY.svg",Uh="/assets/16-D9KRuHZe.svg",_h="/assets/17-BRD6G3-l.svg",Ih="/assets/18-D69HL7ID.svg",Gh="/assets/19-Dos04ydj.svg",qh="/assets/21-BwEZSGFZ.svg",Yh="/assets/22-CQ_f5juP.svg",Fh="data:image/svg+xml,%3csvg%20width='160'%20height='26'%20viewBox='0%200%20160%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.01%2019.347L131.698%201.45459H137.34V24.006H129.228L123.598%205.49849H123.477L123.789%2024.006H118.183V1.45459H126.647L131.884%2019.347H132.01Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4529%203.56613L26.3316%2024.2433H20.1786L24.4041%201.45459H34.5405L38.7466%2024.2433H32.6178L29.5813%203.56613H29.4529Z'%20fill='%23242424'/%3e%3cpath%20d='M53.0771%2024.2433L49.2656%203.75501H49.1421L48.9993%2024.2433H43.2918L43.7955%201.45459H53.094L55.9078%2018.8748H56.0289L58.8451%201.45459H68.1388L68.6328%2024.2433H62.9374L62.7873%203.75501H62.6686L58.8596%2024.2433H53.0771Z'%20fill='%23242424'/%3e%3cpath%20d='M10.5821%2017.8141C10.8048%2018.3662%2010.737%2019.0757%2010.6329%2019.5043C10.4416%2020.2622%209.92826%2021.0347%208.4124%2021.0347C6.98372%2021.0347%206.11683%2020.2162%206.11683%2018.9643V16.7583H0.00497197L0.00012207%2018.5236C0.00012207%2023.6039%204.00044%2025.1367%208.28648%2025.1367C12.4079%2025.1367%2015.8028%2023.7274%2016.3428%2019.9305C16.6188%2017.9618%2016.413%2016.6736%2016.3186%2016.1869C15.3572%2011.4165%206.70767%209.99269%206.06355%207.3242C5.95458%206.86654%205.98606%206.38224%206.03933%206.12314C6.19673%205.39669%206.69556%204.59517%208.12182%204.59517C9.45364%204.59517%2010.2406%205.41848%2010.2406%206.66313C10.2406%207.08205%2010.2406%208.07002%2010.2406%208.07002H15.9239V6.46941C15.9239%201.50535%2011.4683%200.730469%208.24047%200.730469C4.18689%200.730469%200.874285%202.06956%200.268911%205.77929C0.10425%206.80358%200.0800345%207.71648%200.319761%208.85943C1.315%2013.516%209.41006%2014.8647%2010.5821%2017.8141Z'%20fill='%23242424'/%3e%3cpath%20d='M84.685%2017.773C84.9102%2018.3203%2084.8375%2019.0104%2084.7358%2019.439C84.5494%2020.1945%2084.0408%2020.9549%2082.5347%2020.9549C81.1254%2020.9549%2080.2657%2020.1364%2080.2657%2018.9135L80.2609%2016.7269H74.212L74.2047%2018.468C74.2047%2023.4974%2078.1687%2025.0157%2082.4112%2025.0157C86.489%2025.0157%2089.8524%2023.6258%2090.3827%2019.8628C90.6588%2017.9086%2090.4626%2016.6373%2090.3633%2016.1603C89.4069%2011.4335%2080.8444%2010.0242%2080.2076%207.38237C80.0986%206.92713%2080.1301%206.44768%2080.1858%206.20311C80.348%205.47181%2080.8372%204.68967%2082.2489%204.68967C83.5686%204.68967%2084.3387%205.49361%2084.3387%206.72857C84.3387%207.14265%2084.3387%208.12093%2084.3387%208.12093H89.9783V6.53727C89.9783%201.62648%2085.5591%200.856445%2082.3627%200.856445C78.3552%200.856445%2075.0692%202.17858%2074.4759%205.86168C74.3113%206.87144%2074.2943%207.76739%2074.5292%208.90549C75.5099%2013.5136%2083.5251%2014.8527%2084.685%2017.773Z'%20fill='%23242424'/%3e%3cpath%20d='M103.827%2020.8337C105.408%2020.8337%20105.902%2019.7392%20106.011%2019.1799C106.057%2018.9329%20106.069%2018.6035%20106.064%2018.3081V1.44482H111.827V17.7923C111.839%2018.2113%20111.798%2019.0733%20111.779%2019.2888C111.374%2023.5434%20108.011%2024.9236%20103.824%2024.9236C99.6326%2024.9236%2096.2667%2023.5434%2095.8671%2019.2888C95.8478%2019.0733%2095.8066%2018.2113%2095.8187%2017.7923V1.44482H101.577V18.3081C101.577%2018.6035%20101.587%2018.9353%20101.63%2019.1799C101.754%2019.7392%20102.233%2020.8337%20103.827%2020.8337Z'%20fill='%23242424'/%3e%3cpath%20d='M151.365%2020.5938C153.017%2020.5938%20153.593%2019.5502%20153.7%2018.9424C153.741%2018.6809%20153.753%2018.3636%20153.751%2018.0755V14.7677H151.411V11.4406H159.492V17.5573C159.487%2017.9835%20159.477%2018.2983%20159.41%2019.0586C159.029%2023.2042%20155.433%2024.6837%20151.394%2024.6837C147.348%2024.6837%20143.757%2023.2042%20143.372%2019.0586C143.307%2018.2983%20143.297%2017.9835%20143.29%2017.5573L143.295%207.96089C143.295%207.5565%20143.345%206.83974%20143.389%206.45957C143.895%202.20016%20147.348%200.82959%20151.394%200.82959C155.436%200.82959%20158.974%202.19289%20159.393%206.45957C159.468%207.18601%20159.443%207.96089%20159.443%207.96089V8.72124H153.697V7.44511C153.702%207.44754%20153.69%206.9027%20153.622%206.57822C153.525%206.07455%20153.087%204.91707%20151.351%204.91707C149.69%204.91707%20149.203%206.01159%20149.082%206.57822C149.012%206.87848%20148.985%207.2853%20148.985%207.65336V18.0755C148.98%2018.3636%20148.997%2018.6809%20149.043%2018.9424C149.142%2019.5526%20149.716%2020.5938%20151.365%2020.5938Z'%20fill='%23242424'/%3e%3c/svg%3e",Xh="/assets/24-Dmws8xhr.svg",Zh="/assets/25-BaRLqQy_.svg",Wh="/assets/26-B2H6SqHt.svg",Kh="/assets/27-DBraEacE.svg",Qh="data:image/svg+xml,%3csvg%20width='112'%20height='33'%20viewBox='0%200%20112%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_720)'%3e%3cpath%20d='M77.422%2013.2852C76.096%2013.3501%2073.7527%2014.0702%2073.2182%2016.3711L71.3498%2027.2529C70.9268%2029.6026%2072.0997%2032.2635%2074.6194%2032.2878H88.6321C90.433%2032.2608%2092.5012%2031.6842%2092.9916%2028.8771L95.0157%2017.508C95.3946%2015.2206%2093.8791%2013.3501%2091.7461%2013.2852H77.422Z'%20fill='%23242424'/%3e%3cpath%20d='M79.1346%2018.6451C78.1641%2018.5991%2077.8891%2018.9591%2077.7334%2019.4572L76.6435%2025.3041C76.5786%2026.1487%2077.0613%2027.0122%2077.8891%2027.0907H86.7638C87.6071%2027.0122%2088.2974%2026.4383%2088.4765%2025.629L89.4106%2020.2692C89.6753%2019.3191%2089.1927%2018.6018%2088.3208%2018.6451H79.1346Z'%20fill='white'/%3e%3cpath%20d='M70.5738%2018.6455H57.8067C56.8673%2018.5995%2056.5896%2018.9595%2056.4054%2019.4576L55.4712%2025.3046C55.2818%2026.1491%2055.7644%2027.0126%2056.7168%2027.0911H69.0168L68.0826%2032.2885H53.2915C50.8029%2032.2614%2049.63%2029.6005%2050.0218%2027.2536L52.0459%2016.3717C52.4559%2014.0681%2054.7991%2013.3507%2056.094%2013.2858H71.508L70.5738%2018.6455ZM43.48%2018.6455H31.0242L31.9584%2013.2858H45.9711C48.5245%2013.3507%2049.6949%2016.0117%2049.2407%2018.3207L47.3724%2029.2025C46.8716%2031.544%2044.5283%2032.2614%2043.1686%2032.2885H29.9344C27.3628%2032.2614%2026.1924%2029.6005%2026.6647%2027.2536L27.2875%2023.1932C27.778%2020.83%2030.1212%2020.11%2031.4913%2020.1072H43.1686C44.0457%2020.11%2044.7359%2018.6022%2043.48%2018.6455ZM25.7305%2018.6455H28.5331L29.4673%2013.2858H26.6647L28.8445%200.29248H23.8622L21.6824%2013.2858H7.51402C6.13351%2013.3507%203.79028%2014.0708%203.31021%2016.3717L1.44185%2027.2536C0.964382%2029.6032%202.1347%2032.2641%204.71148%2032.2885H20.9039C22.0561%2032.2614%2023.5015%2031.184%2023.7065%2029.5274L25.7305%2018.6455Z'%20fill='%23242424'/%3e%3cpath%20d='M7.98386%2027.0908C7.10158%2027.0123%206.61892%2026.1488%206.73829%2025.3042L7.82557%2019.4572C7.92677%2018.9592%208.20184%2018.6018%209.07115%2018.6452H20.7484L19.1914%2027.0908H7.98386Z'%20fill='white'/%3e%3cpath%20d='M103.268%2014.9093L104.513%2013.7724C105.115%2013.3501%20105.803%2013.3501%20106.537%2013.2852H111.052L110.118%2018.6449H105.136C103.875%2018.5989%20102.152%2019.2485%20101.866%2021.0811L99.8423%2032.2878H94.7043L98.1296%2013.2852H102.645L103.268%2014.9093Z'%20fill='%23242424'/%3e%3cpath%20d='M32.4256%2027.0908C31.6368%2027.0123%2031.4993%2025.3583%2032.737%2025.3042H43.013L42.7016%2027.0908H32.4256Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_720'%3e%3crect%20width='109.714'%20height='32'%20fill='white'%20transform='translate(1.33813%200.290039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Jh="/assets/29-yivH26vR.svg",e1="/assets/30-DGc1459t.svg",t1="data:image/svg+xml,%3csvg%20width='121'%20height='36'%20viewBox='0%200%20121%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.45829%2023.2381H3.99829L2.66629%2018.1861H9.61429L21.9503%200.810059H31.3103L28.9703%2018.1261L41.9903%2018.1859L42.5663%2018.8819C45.6863%2016.7461%2049.8983%2016.7461%2051.4101%2019.4461C53.4981%2017.1899%2058.1781%2017.0579%2059.7621%2019.9499C60.3621%2021.0657%2060.2661%2022.5421%2059.7621%2024.3181L57.8663%2030.3901C57.9863%2031.0141%2058.6823%2032.4061%2056.9783%2032.4061H50.3423L52.4903%2025.7101C53.0543%2023.7419%2050.6543%2023.7419%2050.0903%2025.6499L48.0023%2032.3462H41.1743L43.2623%2025.5181C43.8863%2023.5621%2041.3543%2023.5621%2040.8503%2025.5779L38.7623%2032.2859H31.6223L33.8303%2025.1339C33.9623%2024.6301%2033.9023%2024.1859%2032.9543%2024.1859H28.1423L27.0743%2032.2501L16.7663%2032.2859L18.1583%2024.1859H12.1463L4.87429%2035.1897L0.446289%2031.7101L6.45829%2023.2381ZM16.0103%2018.1741L19.2023%2018.2102L20.3063%2011.8022L16.0103%2018.1741ZM107.222%2032.5262C105.578%2033.0301%20102.794%2033.3541%20101.222%2031.9621C99.6383%2030.5701%2099.5785%2027.1499%20100.526%2024.6899C101.786%2021.3419%20104.066%2018.2459%20107.474%2017.7421C109.694%2017.4301%20112.406%2018.3061%20113.99%2019.6981L114.302%2018.6899H120.446L116.642%2030.9539C116.894%2031.5779%20117.47%2032.4659%20116.138%2032.4659H109.694L110.042%2031.2661C109.214%2031.7342%20108.242%2032.2739%20107.222%2032.5262ZM107.042%2026.6821C107.198%2026.9341%20107.582%2027.2579%20108.278%2027.0059C109.514%2026.5859%20111.662%2024.5701%20112.01%2023.1419C111.122%2021.8817%20109.862%2021.5937%20108.53%2022.7341C107.774%2023.3941%20106.514%2025.7701%20107.042%2026.6821ZM62.1505%2031.9621C60.5665%2030.5701%2060.5063%2027.2222%2061.4545%2024.6899C62.6543%2021.3419%2064.9941%2018.2459%2068.4145%2017.7541C70.6225%2017.4421%2073.3465%2018.3061%2074.9305%2019.6981L75.2423%2018.6899H81.3745L77.5825%2030.9539C77.8345%2031.5899%2078.3985%2032.4659%2077.0786%2032.4659H70.6226L70.9706%2031.3379C70.1546%2031.8061%2069.1346%2032.2859%2068.1626%2032.5377C66.5183%2032.9819%2063.7345%2033.3541%2062.1505%2031.9621ZM68.2465%2026.6821C68.3783%2026.9702%2068.8223%2027.2579%2069.4825%2027.0059C70.7185%2026.5619%2072.8663%2024.5701%2073.2143%2023.1419C72.3263%2021.8817%2071.0903%2021.5339%2069.7345%2022.7341C69.0385%2023.3699%2067.8025%2025.6741%2068.2465%2026.6821ZM86.6181%2032.3342L88.7063%2025.6382C89.2821%2023.7421%2091.5503%2023.6822%2090.9863%2025.6382L89.0901%2032.4061H95.5943C97.3101%2032.4061%2096.6141%2031.0141%2096.4823%2030.3781L98.3781%2024.3061C98.882%2022.5421%2098.9181%2021.4021%2098.2583%2020.2019C96.77%2017.5499%2092.4981%2017.4659%2090.0383%2019.6261L89.5943%2018.7501H83.966L79.7901%2032.3341H86.6181V32.3342Z'%20fill='%23242424'/%3e%3c/svg%3e",rk=[{id:1,imageUrl:Mh},{id:2,imageUrl:Nc},{id:3,imageUrl:jh},{id:4,imageUrl:Lh},{id:5,imageUrl:Oh},{id:6,imageUrl:Rh},{id:7,imageUrl:kh},{id:8,imageUrl:Dh},{id:9,imageUrl:Hh},{id:10,imageUrl:Vh},{id:11,imageUrl:zh},{id:12,imageUrl:Ph},{id:13,imageUrl:Nh},{id:14,imageUrl:Bh},{id:15,imageUrl:$h},{id:16,imageUrl:Uh},{id:17,imageUrl:_h},{id:18,imageUrl:Ih},{id:19,imageUrl:Gh},{id:20,imageUrl:Nc},{id:21,imageUrl:qh},{id:22,imageUrl:Yh},{id:23,imageUrl:Fh},{id:24,imageUrl:Xh},{id:25,imageUrl:Zh},{id:26,imageUrl:Wh},{id:27,imageUrl:Kh},{id:28,imageUrl:Qh},{id:29,imageUrl:Jh},{id:30,imageUrl:e1},{id:31,imageUrl:t1}],sk=C.div`
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
`,ok=C.img`
  height: 32px;
  max-width: min-content;
  /* width: auto; */
  object-fit: contain;
  filter: brightness(1) invert(1);
  transition: all 0.3s ease;
  overflow: visible;
`,lk=C(Jt)`
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
`,ck=()=>x.jsx(sk,{children:x.jsx(lk,{direction:"vertical",slidesPerView:10,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:4e3,modules:[mn],grabCursor:!1,allowTouchMove:!1,children:rk.map(t=>x.jsx(en,{children:x.jsx(ok,{src:t.imageUrl,alt:`Partner ${t.id}`,onError:e=>{e.target.style.display="none"}})},t.id))})}),uk=()=>{const t=Ue({query:"(min-width: 1440px)"});return x.jsxs(Fj,{id:"hero",children:[x.jsx(Xj,{src:ak,alt:"Hero Image"}),t&&x.jsx(ck,{}),x.jsxs(Zj,{children:[x.jsxs(Wj,{children:[x.jsx(Kj,{children:"Your Local Appliance Repair & Maintenance Specialists"}),x.jsx(Qj,{children:"We provide reliable appliance repair services, so your fridge, oven, or washer works like new — and you can get back to your day."})]}),x.jsxs(Jj,{children:[x.jsx(dv,{to:"/contact#ap",children:"Contact Us"}),x.jsx(E6,{children:x.jsx("a",{href:"tel:+18055002705",children:" Call Us"})})]})]})]})},dk="/assets/News%20Article%202%20Image%20Container-Dg9jwMew.png",fk="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",pk="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",hk="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",P4=[{img:dk,title:"APPLIANCE INSTALLATION SERVICES",description:"Professional installation for appliances, ensuring safety."},{img:fk,title:"WHEN YOUR REFRIGERATOR STOPS COOLING: URGENT REPAIR SIGNS",description:"Don't wait for food to spoil. Know the signs needing urgent help."},{img:pk,title:"WASHING MACHINE TROUBLESHOOTING",description:"Quick solutions for common washing machine issues."},{img:hk,title:"DISHWASHER MAINTENANCE TIPS",description:"Keep your dishwasher running smoothly with these tips."}],mk=()=>{const t=R.useRef(null),e=Ue({query:"(max-width: 767px)"}),i=Ue({query:"(min-width: 768px)"}),r=Ue({query:"(min-width: 1440px)"}),o=e?1:2,l=P4.length>o;return x.jsxs(bk,{children:[x.jsxs(Sk,{children:[x.jsx(Ck,{children:"NEWS & TIPS"}),x.jsxs(Tk,{children:["APPLIANCE ",x.jsx("span",{children:"ADVICE"})," REPAIR ",x.jsx("span",{children:"TIPS"})," BLOG"]})]}),x.jsxs(wk,{children:[x.jsx(N4,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slidePrev()},bg:"#DBDBD8",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(N4,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slideNext()},bg:"#3098EE",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),x.jsx(gk,{$isTablet:i,children:x.jsx(Jt,{modules:[wv,mn],onSwiper:u=>t.current=u,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:P4.map((u,d)=>x.jsx(en,{children:x.jsxs(Ek,{$isTablet:i,children:[x.jsx(Ak,{src:u.img,alt:u.title,$isTablet:i}),x.jsxs(Mk,{children:[x.jsx(jk,{$isTablet:i,children:u.title}),x.jsx(Lk,{$isTablet:i,children:u.description})]})]})},d))})})]})},gk=C.div`
  width: 100%;
  padding: 20px 0;
  
  .swiper-slide {
    width: ${t=>t.$isTablet?"50%":"auto"};
  }
`,xk=st`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,yk=st`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,vk=st`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,wk=C.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,N4=C.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${t=>t.bg};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    animation: ${xk} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }

    ${t=>t.bg==="#DBDBD8"&&xn`
      background-color: #c8c8c5;
      svg {
        animation: ${yk} 0.4s ease;
      }
    `}

    ${t=>t.bg==="#3098EE"&&xn`
      background-color: #2580d6;
      svg {
        animation: ${vk} 0.4s ease;
      }
    `}
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`,bk=C.div`
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
`,Sk=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,Ck=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);
  
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,Tk=C.p`
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
`,Ek=C.div`
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
`,Ak=C.img`
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
`,Mk=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,jk=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,Lk=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,Ok=C.div`
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
`;C.p`
  padding: 10px auto 50px auto;
  width: 90%;
  height: 1px; /* Збільшуємо висоту для еліпса */
  margin: 20px auto;
  background: radial-gradient(
      ellipse 118.85px 58.06px at 50% 50%,
      rgb(252, 252, 252) 0%,
      rgba(58, 55, 55, 0.42) 80%
    );
`;C.div`
height : auto;
width: 100%;
padding: 0 auto;
margin: 0 auto;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){

margin-right: 50px;
}
`;const ic=C.img`
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
`,Rk=C(En.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,kk=C(En.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,Dk=C.h3`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 90%;
text-transform: uppercase;
text-align: center;
color: var(--black-500);
`,Vv="data:image/svg+xml,%3csvg%20width='212'%20height='14'%20viewBox='0%200%20212%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_572)'%3e%3cpath%20d='M0.00384521%2013.2272V0.640137H8.99637V3.40837H3.33527V5.99308H8.54597V8.76131H3.33527V13.2272H0.00384521Z'%20fill='%23242424'/%3e%3cpath%20d='M18.6412%2013.2272H15.3253V0.640137H18.6412V13.2272Z'%20fill='%23242424'/%3e%3cpath%20d='M25.0556%209.25083C26.3309%2010.122%2027.8304%2010.6204%2029.381%2010.6885C30.3595%2010.6885%2031.2758%2010.4591%2031.2758%209.61789C31.2758%209.02907%2030.8409%208.79966%2030.1964%208.61613L28.2628%208.08083C26.1117%207.44613%2024.9935%206.43671%2024.9935%204.44848C24.9935%202.0473%2027.1368%200.472008%2029.8858%200.472008C31.2634%200.447396%2032.6243%200.771251%2033.8385%201.4126V4.47142C32.6991%203.68452%2031.3471%203.2505%2029.9557%203.22495C28.9617%203.22495%2028.255%203.50789%2028.255%204.20377C28.255%204.71613%2028.6045%204.9226%2029.2723%205.12907L31.2059%205.7026C33.5356%206.42142%2034.5995%207.5073%2034.5995%209.39613C34.5995%2012.1032%2032.1223%2013.4949%2029.3732%2013.4949C27.8643%2013.4989%2026.378%2013.1337%2025.0478%2012.432L25.0556%209.25083Z'%20fill='%23242424'/%3e%3cpath%20d='M52.4525%200.640137V13.2272H49.1211V8.18778H44.2676V13.2272H40.8973V0.640137H44.2676V5.41955H49.1599V0.640137H52.4525Z'%20fill='%23242424'/%3e%3cpath%20d='M68.6747%200.640137V3.40837H62.9049V5.41955H68.2166V8.18778H62.9049V10.4819H68.7136V13.2501H59.5347V0.640137H68.6747Z'%20fill='%23242424'/%3e%3cpath%20d='M75.524%200.640137H80.9599C83.8098%200.640137%2085.9764%202.16955%2085.9764%204.98367C86.0132%205.85467%2085.761%206.71377%2085.2581%207.43116C84.7551%208.14856%2084.0287%208.68525%2083.1886%208.96014L86.5589%2013.2272H82.6761L79.6553%209.33484H78.8244V13.2272H75.524V0.640137ZM78.8554%206.55131H80.7657C81.9694%206.55131%2082.746%205.9319%2082.746%204.96837C82.746%204.00484%2081.9694%203.39308%2080.7657%203.39308H78.8709L78.8554%206.55131Z'%20fill='%23242424'/%3e%3cpath%20d='M106.485%2012.1795C105.502%2013.0123%20104.241%2013.4588%20102.944%2013.4337C100.242%2013.4337%2097.9897%2011.6901%2097.9897%208.84543C98.0077%208.02146%2098.2249%207.21358%2098.6233%206.48878C99.0217%205.76399%2099.5899%205.14316%20100.281%204.67778L99.007%203.14837V0.640137H107.549V3.40837H102.991L106.446%207.7519L107.223%206.56661H110.679L108.217%2010.0537L110.756%2013.2272H107.285L106.485%2012.1795ZM104.738%2010.0537L102.051%206.78837C101.716%207.01078%20101.442%207.31015%20101.251%207.66058C101.06%208.01101%20100.959%208.40194%20100.956%208.79955C100.953%209.05676%20101.003%209.31195%20101.102%209.54974C101.202%209.78752%20101.349%2010.003%20101.536%2010.1831C101.722%2010.3631%20101.944%2010.5042%20102.187%2010.5976C102.431%2010.691%20102.691%2010.7349%20102.952%2010.7266C103.28%2010.737%20103.607%2010.6828%20103.914%2010.5673C104.22%2010.4518%20104.501%2010.2771%20104.738%2010.0537Z'%20fill='%23242424'/%3e%3cpath%20d='M126.264%2013.2272H122.933V0.640137H128.369C131.219%200.640137%20133.385%202.16955%20133.385%204.98367C133.385%207.79778%20131.219%209.33484%20128.369%209.33484H126.264V13.2272ZM126.264%206.56661H128.136C129.347%206.56661%20130.116%205.9472%20130.116%204.98367C130.116%204.02014%20129.339%203.40837%20128.136%203.40837H126.241L126.264%206.56661Z'%20fill='%23242424'/%3e%3cpath%20d='M145.997%2010.9101H140.879L139.963%2013.2043H136.678L141.881%200.640137H145.049L150.252%2013.2272H146.897L145.997%2010.9101ZM141.982%208.1419H144.894L143.442%204.45602L141.982%208.1419Z'%20fill='%23242424'/%3e%3cpath%20d='M157.288%2013.2272V8.34837L152.457%200.640137H156.208L159.058%205.49602L161.908%200.640137H165.449L160.619%208.34837V13.2272H157.288Z'%20fill='%23242424'/%3e%3cpath%20d='M173.487%205.99308L177.571%200.640137H181.454L176.733%206.66602L181.64%2013.2272H177.688L173.487%207.59131V13.2272H170.155V0.640137H173.487V5.99308Z'%20fill='%23242424'/%3e%3cpath%20d='M195.751%200.640137V3.40837H189.934V5.41955H195.246V8.18778H189.934V10.4819H195.751V13.2501H186.603V0.640137H195.751Z'%20fill='%23242424'/%3e%3cpath%20d='M202.6%200.640137H205.931V10.459H211.678V13.2272H202.6V0.640137Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_572'%3e%3crect%20width='212'%20height='13'%20fill='white'%20transform='translate(0.00384521%200.433594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",zv=()=>{const t=Ue({query:"(max-width: 743px)"}),e=Ue({query:"(min-width: 744px) and (max-width: 1023px)"}),i=Ue({query:"(min-width: 1024px)"}),r=[{id:1,imageUrl:Mh},{id:2,imageUrl:Nc},{id:3,imageUrl:jh},{id:4,imageUrl:Lh},{id:5,imageUrl:Oh},{id:6,imageUrl:Rh},{id:7,imageUrl:kh},{id:8,imageUrl:Dh},{id:9,imageUrl:Hh},{id:10,imageUrl:Vh},{id:11,imageUrl:zh},{id:12,imageUrl:Ph},{id:13,imageUrl:Nh},{id:14,imageUrl:Bh},{id:15,imageUrl:$h},{id:16,imageUrl:Uh},{id:17,imageUrl:_h},{id:18,imageUrl:Ih},{id:19,imageUrl:Gh},{id:20,imageUrl:Vv},{id:21,imageUrl:qh},{id:22,imageUrl:Yh},{id:23,imageUrl:Fh},{id:24,imageUrl:Xh},{id:25,imageUrl:Zh},{id:26,imageUrl:Wh},{id:27,imageUrl:Kh},{id:28,imageUrl:Qh},{id:29,imageUrl:Jh},{id:30,imageUrl:e1},{id:31,imageUrl:t1}],o=t?2:e?4:5,l=r.length>o;return x.jsxs("div",{children:[x.jsx(Dk,{children:"Quality Service for Major & Luxury Brands"}),x.jsxs(Ok,{children:[x.jsx(Rk,{}),x.jsx(Jt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[mn],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:r.map(u=>x.jsx(en,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?x.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):x.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),x.jsx(Jt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[mn],className:"mySwiper",style:{width:"100%"},children:r.map(u=>x.jsx(en,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?x.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):x.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),x.jsx(kk,{})]})," "]})},Pv="/assets/ServicesImage-BRQYmF9y.png",Hk=C.div`
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
`,Vk=C.p`
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
`,zk=C.div`
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
`,Pk=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,B4=C.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Nk=C.p`
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
`,Bk=C.p`
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
`,$4=C.p`
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
`,$k=C.p`
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
`,Uk=C.img`
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
`,U4=C.div`
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
`,_4=C.p`
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
`,vp=C(wt)`
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
`,I4=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${vp}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,_k=C.div`
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
`,Ik=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Gk=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,qk=C.p`
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
`,Yk=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Fk=C(wt)`
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
`,n1=C.button`
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
`,Nv=C.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${n1}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Xk=C(Nv)`
  color: #242424;

  ${n1}:hover & {
    color: white;
  }
`,Zk=C.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Wk=()=>{const t=Ue({query:"(min-width: 1440px)"});return x.jsxs(Hk,{children:[x.jsx(Vk,{children:"Our Service"}),x.jsxs(zk,{children:[x.jsxs(Pk,{children:[x.jsxs(B4,{children:[x.jsx(Nk,{children:"01."}),x.jsx(Bk,{children:"Appliance Care & Tune-Ups"})]}),x.jsx($4,{children:"Professional Installations"}),x.jsx($4,{children:"Fast & Reliable Emergency Repairs"}),t&&x.jsxs(U4,{children:[x.jsx(_4,{children:"Do you want to know more about our service?"}),x.jsx(vp,{to:"/fridge#ap",children:x.jsx(I4,{children:"Learn more"})})]})]}),x.jsxs(Zk,{children:[x.jsx(Uk,{src:Pv,alt:"Services Image"}),x.jsxs(_k,{children:[x.jsxs(Ik,{children:[x.jsx(B4,{children:x.jsx($k,{children:"Preventive Care"})}),x.jsx(Gk,{children:x.jsx(qk,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})]}),x.jsxs(Yk,{children:[x.jsx(Fk,{to:"/contact#ap",children:x.jsx(Nv,{children:"Contact Us"})}),x.jsx(n1,{children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(Xk,{children:"Call Us"})})})]})]})]}),!t&&x.jsxs(U4,{children:[x.jsx(_4,{children:"Do you want to know more about our service?"}),x.jsx(vp,{to:"/fridge#ap",children:x.jsx(I4,{children:"Learn more"})})]})]})]})},Kk="/assets/Service%20Area%20Section-B7et7wWI.webp",Qk=C.div`
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
`,Jk=C.h2`
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
`,eD=C.p`
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
`,tD=C.div`
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
`,nD=C.div`
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
`,iD=C.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,aD=C.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,rD=C.p`
  color: #3098ee;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,sD=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,oD=[{county:"Ventura County",city:"Thousand Oaks",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Newbury Park",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Westlake Village",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Oak Park",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Lake Sherwood",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Hidden Valley",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Camarillo",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Agoura Hills",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Moorpark",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Calabasas",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Santa Rosa Valley",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Malibu",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}],lD=()=>x.jsxs(Qk,{$bg:Kk,children:[x.jsx(Jk,{children:"Serving Ventura and Los Angeles Counties"}),x.jsx(eD,{children:"We provide expert service throughout the greater Los Angeles area."}),x.jsx(tD,{children:oD.map((t,e)=>x.jsxs(nD,{children:[x.jsxs(iD,{children:[x.jsx(aD,{children:t.icon}),x.jsx(rD,{children:t.county})]}),x.jsx(sD,{children:t.city})]},e))})]}),cD="/assets/WhyAirtexnoImage-BBTHkk8n.png",G4="/assets/WhyAirtexnoImage2-BIh43Sbv.png",uD="/assets/WhyAirtexnoImage3-C5uIh3SS.png",M0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2011H4.6C4.03995%2011%203.75992%2011%203.54601%2011.109C3.35785%2011.2049%203.20487%2011.3578%203.10899%2011.546C3%2011.7599%203%2012.0399%203%2012.6V21M16.5%2011H19.4C19.9601%2011%2020.2401%2011%2020.454%2011.109C20.6422%2011.2049%2020.7951%2011.3578%2020.891%2011.546C21%2011.7599%2021%2012.0399%2021%2012.6V21M16.5%2021V6.2C16.5%205.0799%2016.5%204.51984%2016.282%204.09202C16.0903%203.71569%2015.7843%203.40973%2015.408%203.21799C14.9802%203%2014.4201%203%2013.3%203H10.7C9.5799%203%209.01984%203%208.59202%203.21799C8.2157%203.40973%207.90973%203.71569%207.71799%204.09202C7.5%204.51984%207.5%205.0799%207.5%206.2V21M22%2021H2M11%207H13M11%2011H13M11%2015H13'%20stroke='%233098EE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",dD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206V12L16%2014M22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",fD=()=>{const t=Ue({query:"(max-width: 743px)"}),e=Ue({query:"(min-width: 744px) and (max-width: 1023px)"}),i=Ue({query:"(min-width: 1024px)"}),r=Ue({query:"(min-width: 1440px)"}),o=[{title:"Manufacturer-Trained Technicians",text:"Our team is trained to service leading brands like Sub-Zero, Viking, GE Monogram, and more — ensuring expert repairs done right the first time.",image:cD,icon:M0},{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:G4,icon:dD},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:uD,icon:M0},{title:"Local & Fair Pricing",text:"As a local Thousand Oaks company, we treat our community like neighbors. With direct access to parts and highly trained techs, we keep our prices fair — without steep markups. While costs keep rising everywhere, we work hard to keep appliance repair affordable.",image:G4,icon:M0}],l=t?1:e?2:3,u=o.length>l;return x.jsxs(CR,{children:[x.jsxs(TR,{children:[x.jsx(ER,{children:"why airtexno"}),x.jsxs(AR,{children:["Same-Day Appliance Repair ",x.jsx(Dv,{children:"You Can Rely On"})," "]})]}),x.jsx(HR,{children:x.jsx(jR,{$isLargeDesktop:r,children:x.jsx(Jt,{modules:[PL,mn],pagination:{clickable:!0},spaceBetween:r?0:20,loop:u,slidesPerView:l,centeredSlides:r,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,className:"businessSwiper",children:o.map((d,p)=>x.jsx(en,{children:x.jsx(OR,{style:{backgroundImage:`url(${d.image})`},$isLargeDesktop:r,className:"slide-container",children:(d.title||d.text||d.icon)&&x.jsxs("div",{className:"overlay",children:[(d.title||d.icon)&&x.jsxs(RR,{children:[d.title&&x.jsx(MR,{children:d.title}),d.icon&&x.jsx(kR,{className:"icon-wrapper",children:x.jsx("img",{src:d.icon,alt:d.title||"icon",className:"icon-image"})})]}),d.text&&x.jsx(DR,{className:"slide-text",children:d.text})]})})},p))})})})]})},pD=C.div`
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
`,j0=()=>x.jsx(x.Fragment,{children:x.jsxs(pD,{id:"hero",children:[x.jsx(uk,{}),x.jsx(Wk,{}),x.jsx(fD,{}),x.jsx(Hv,{}),x.jsx(lD,{}),x.jsx(zv,{}),x.jsx(ou,{}),x.jsx(mk,{}),x.jsx(su,{})]})}),hD=C.div`
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
  `,mD="/assets/Team%20Member%20Image-mppsJqlp.png",gD="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99992%200.833008V17.1663M0.833252%208.99967H17.1666'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",xD=st`
  0% {
    transform: rotate(0);
  }
  15% {
    transform: rotate(15deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  45% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0);
  }
`,yD=st`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(48, 152, 238, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(48, 152, 238, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(48, 152, 238, 0);
  }
`,vD=st`
  0%, 20%, 53%, 80%, 100% {
    transform: translateY(0);
  }
  40%, 43% {
    transform: translateY(-8px);
  }
  70% {
    transform: translateY(-4px);
  }
  90% {
    transform: translateY(-2px);
  }
`,wp=C.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25em;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;

  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.2rem;
  }
`,wD=C.button`
  cursor: pointer;
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3098ee, #2580d6, #3098ee);
  background-size: 200% 200%;
  width: fit-content;
  border: none;
  margin-bottom: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    animation:
      ${yD} 1s ease,
      ${vD} 0.6s ease;
    background-position: 100% 50%;
    transform: translateY(-3px);
    box-shadow:
      0 8px 25px rgba(48, 152, 238, 0.4),
      0 4px 15px rgba(48, 152, 238, 0.3);

    &::before {
      left: 100%;
    }

    svg {
      animation: ${xD} 1s ease;
    }

    ${wp} {
      transform: translateX(2px);
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow:
      0 4px 12px rgba(48, 152, 238, 0.3),
      0 2px 6px rgba(48, 152, 238, 0.2);
  }

  svg {
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }

  &:hover svg {
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }

  // Медіа-запити
  @media screen and (min-width: 768px) {
    padding: 14px 28px;
    gap: 12px;

    &:hover {
      transform: translateY(-4px);
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 16px 32px;
    gap: 14px;

    &:hover {
      transform: translateY(-5px);
    }

    &:hover ${wp} {
      transform: translateX(3px);
    }
  }
`,bD=C.div`
  display: flex;
  padding: 0px;
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
`,SD=C.div`
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
`,CD=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,TD=C.img`
  border-radius: 74px;
  width: 119px;
  height: 119px;
  object-fit: cover;
  margin-bottom: 36px;
`,ED=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,AD=C.p`
  color: #242424;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 400;
  line-height: 1em;
  width: 100%;
  padding-bottom: 16px;
`,MD=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,jD=C.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`,LD=C.div`
  position: relative;
  width: 44px;
  height: 44px;
`,OD=C.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  background: #c6e6ff;
  border-radius: 100px;
`,RD=C.p`
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
const kD=C.div`
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
`,DD=C.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);
  margin-bottom: 48px;
`;C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 26px;
`;const HD=C.div`
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
`,VD=C.button`
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
`,zD=C.div`
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
`,PD=C.img.attrs(()=>({}))`
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
`,ND=C.div`
  @media screen and (min-width: 1440px) {
    min-width: 650px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,BD=C.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;

    flex-shrink: 0; /* Забороняємо звуження */
  }
`,i1=()=>{const[t,e]=R.useState(null),i=[{question:"How quickly can you repair my appliance?",answer:"Most repairs are completed within 2-4 hours. We offer same-day service for urgent cases and typically schedule appointments within 24-48 hours of your call."},{question:"Do you offer emergency repair services?",answer:"Yes, we provide urgent repairs for urgent situations to minimize your inconvenience. Our emergency service is available 7 days a week with response times as quick as 2 hours."},{question:"What brands and appliances do you service?",answer:"We service all major brands including Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, and more. We repair refrigerators, ovens, dishwashers, washing machines, dryers, microwaves, and other household appliances."},{question:"How do I schedule a repair?",answer:"You can schedule a repair by calling our hotline, filling out the online form on our website, or texting us. We'll arrange a convenient time slot and provide a technician with the necessary parts."},{question:"What if I'm not satisfied with the repair?",answer:"We offer a 90-day warranty on all repairs and parts. If you're not satisfied, we'll re-repair your appliance at no additional cost or provide a full refund for the service."},{question:"How much will the repair cost?",answer:"Repair costs vary based on the appliance type and issue complexity. We provide free diagnostics and transparent upfront pricing before any work begins. Typical repairs range from $150-$400 including parts and labor."}],r=o=>{e(l=>l===o?null:o)};return x.jsxs(bD,{children:[x.jsxs(SD,{children:[x.jsxs(CD,{children:[x.jsx(TD,{src:mD,alt:"Team Member Image"}),x.jsxs(ED,{children:[x.jsxs("div",{children:[x.jsx(AD,{children:"Book a Call"}),x.jsx(MD,{children:"Time to get introduced and explore how we can help"})]}),x.jsx("a",{href:"tel:+18055002705",children:x.jsxs(wD,{children:[x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),x.jsx(wp,{children:"Call us now"})]})})]})]}),x.jsxs(jD,{children:[x.jsxs(LD,{children:[x.jsx(OD,{}),x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",left:"10px",top:"10px"},children:x.jsx("path",{d:"M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z",stroke:"#808080",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),x.jsxs(RD,{children:["Prefer email communication?",x.jsx("br",{}),x.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]})]})]}),x.jsxs(kD,{children:[x.jsx(ND,{children:x.jsx(En.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!1,amount:.3},children:x.jsx(DD,{children:"Frequently Asked Questions"})})}),x.jsx(BD,{children:i.map((o,l)=>x.jsx(En.div,{initial:{opacity:0,y:l%2===0?40:-40},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:l*.1},viewport:{once:!1,amount:.3},children:x.jsxs(HD,{children:[x.jsxs(VD,{onClick:()=>r(l),children:[o.question,x.jsx(PD,{src:gD,alt:"Toggle answer",$rotate:t===l})]}),x.jsx(En.div,{initial:{opacity:0,scale:.9},animate:t===l?{opacity:1,scale:1}:{opacity:0,scale:.9},transition:{duration:.4},style:{overflow:"hidden"},children:x.jsx(zD,{$isOpen:t===l,children:o.answer})})]})},l))})]})]})},$D=C.div`
  position: relative;
  min-width: 100vw;
  min-height: 50vh;
  overflow: hidden;
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    min-height: 62vh;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
  }
`,UD=C.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 365px;
  max-width: none;
  flex-shrink: 0;
  object-fit: cover;
  
  @media screen and (min-width: 768px) {
    height: 441px;
  }

  @media screen and (min-width: 1440px) {
    height: 100%;
    object-position: center;
  }
`,_D=C.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 16px;
  margin-top: 150px;

  @media screen and (min-width: 768px) {
    margin-top: 180px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    padding: 0;
  }
`,ID=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;
  z-index: 10;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px;
  }
`,GD=C.p`
  color: #e1e1e1;
  font-family: var(--second-family);
  font-size: 56px;
  font-weight: 400;
  line-height: 0.9em;
  margin: 0;
  max-width: 343px;

  @media screen and (min-width: 768px) {
    font-size: 85px;
    max-width: 696px;
    line-height: 90%;
  }

  @media screen and (min-width: 1440px) {
    font-size: 96px;
    max-width: 800px;
  }
`,qD=C.p`
  color: #fff;
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25em;
  margin: 0;
  max-width: 343px;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    max-width: 500px;
    line-height: 125%;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    max-width: 600px;
  }
`;C.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C(wt)`
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
`;C.button`
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
`;C.div`
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
`;C.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.div`
  display: flex;
  align-items: center;
  gap: 7px;
  width: 156px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.img`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  max-width: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;C.div`
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
`;C.div`
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
`;C.span`
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
`;C.p`
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
`;C.div`
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
`;C.div`
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
`;C.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 1440px) {
    width: auto;
    margin: 0 auto;
  }
`;C.img`
  border-radius: 18px;
  border: 1px solid var(--black);
  width: 36px;
  height: 36px;
  margin-left: -20px;
`;C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
`;C.div`
  margin: 0 auto;
  width: 285px;
  // height: 43px;
  margin-top: 20px;
  display: flex;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1440px) {
  }
`;C.button`
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
`;st`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 73, 74, 0.81);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`;C.button`
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
`;const YD="/assets/HeroImage2About-CoU9D2Tq.png",FD=()=>x.jsxs($D,{id:"ap",children:[x.jsx(UD,{src:YD,alt:"Hero Image"}),x.jsx(_D,{children:x.jsxs(ID,{children:[x.jsx(qD,{children:"About Our Company and Team"}),x.jsx(GD,{children:"Fast, affordable, and trusted service"})]})})]}),XD=C.section`
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
`,ZD=C.div`
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
`,WD=C.h3`
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
`,L0=C.span`
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
`,KD=C.div`
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
`,QD=C.div`
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
`,q4=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }
`,JD=C.div`
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
`,eH=C.div`
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
`,Y4=C.p`
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
`,tH=C.img`
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
`,nH=C.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`,iH="/assets/Services%20Image-e7Omvubx.png",aH="/assets/Team%20Image-CG0rB-nI.png",rH=()=>{const t=Ue({query:"(min-width: 1440px)"});return x.jsxs(XD,{children:[x.jsx(ZD,{children:x.jsxs(WD,{children:["Our mission is to provide ",x.jsx(L0,{children:"reliable"})," and ",x.jsx(L0,{children:"efficient"}),"appliance repair services that improve",x.jsx(L0,{children:"everyday "}),"life"," "]})}),x.jsxs(nH,{children:[x.jsxs(JD,{children:[x.jsx("img",{src:iH,alt:"image"}),x.jsxs(QD,{children:[x.jsx(q4,{children:"“Our goal is to bring comfort and convenience back to your home with every repair. We believe in honest service, quality workmanship, and building lasting relationships with our customers,”"}),x.jsx(KD,{children:"Sanal Gariaev"}),x.jsx(q4,{children:"Chief Executive Officer"})]}),x.jsxs(Y4,{children:["As a highly regarded and trusted appliance repair company, we take immense pride in having served our community with exceptional repair services since [год основания]. Our extensive experience and commitment to excellence have allowed us to build strong relationships with our customers. We fully recognize how vital it is for your household to have functioning appliances, as they play a crucial role in your daily routine. Whether it's your refrigerator keeping your food fresh, your washing machine ensuring your clothes are clean, or your oven preparing meals for your family, any malfunction can disrupt your life. That’s why our primary goal is to restore the performance of your appliances swiftly and affordably, ensuring that you can return to your normal routine with minimal interruption. ",x.jsx("br",{}),t&&x.jsxs(x.Fragment,{children:[x.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client’s needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})," "]})]}),x.jsxs(eH,{children:[!t&&x.jsxs(Y4,{children:[x.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client’s needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]}),x.jsx(tH,{src:aH,alt:"team"})]})]})]})},sH=C.section`
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
`,oH=C.p`
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
`,lH=C.p`
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
`,cH=C.div`
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
`,uH=C.div`
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
`,dH=C.div`
  background: rgba(33, 33, 33, 0.5);
  width: 100%;
  height: 1px;
`,fH=C.div`
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
`,pH=C.div`
  @media (min-width: 768px) {
    flex-shrink: 0;
  }

  @media (min-width: 1440px) {
    margin-right: 5.25rem; /* 84px - approximate gap-21 */
  }
`,hH=C.p`
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
`,mH=C.div`
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
`,gH=C.p`
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
`,xH=C.p`
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
`,yH=C.img`
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
`,vH="/assets/ValueImage-GehUXRc0.png",wH="/assets/ValueImage1-XDPVu8iL.png",bH="/assets/ValueImage2-CBdwtolx.png",SH="/assets/ValueImage3-4cmMPphm.png",CH=()=>{const t=i=>({__html:i}),e=[{id:1,number:"01",title:"<span>Reliable</span> Service",description:"We are committed to providing trustworthy repairs that you can count on. Our technicians arrive on time and deliver lasting solutions to keep your appliances running smoothly.",image:vH,alt:"Reliable Service"},{id:2,number:"02",title:"<span>Fast</span> Response",description:"We understand the importance of a quick fix. Our team works efficiently to diagnose and repair your appliances as soon as possible, minimizing downtime and inconvenience.",image:wH,alt:"Fast Response"},{id:3,number:"03",title:"<span>Customer-Centric</span> Approach",description:"Your satisfaction is our priority. We listen carefully to your needs and tailor our services to meet your specific requirements, ensuring a positive experience every time.",image:bH,alt:"Quality Work"},{id:4,number:"04",title:"Quality <span>and</span> Trust",description:"We use only high-quality parts and follow industry best practices to ensure durable repairs. Our goal is to build long-term relationships based on trust and excellent service.",image:SH,alt:"Durable Repairs"}];return x.jsxs(sH,{children:[x.jsxs("div",{children:[x.jsx(oH,{children:"Our Values"}),x.jsxs(lH,{children:["Core ",x.jsx("span",{children:"Principles"}),"  That Drive Us"]})]}),x.jsx(cH,{children:e.map(i=>x.jsxs(uH,{children:[x.jsx(dH,{}),x.jsxs(fH,{children:[x.jsx(pH,{children:x.jsx(hH,{children:i.number})}),x.jsxs(mH,{children:[x.jsx(gH,{dangerouslySetInnerHTML:t(i.title)}),x.jsx(xH,{children:i.description})]}),x.jsx(yH,{src:i.image,alt:i.alt,loading:"lazy"})]})]},i.id))})]})},TH=C.div`
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
    display: flex;
    gap: 4rem;
    max-width: 1440px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`,EH=C.p`
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
`,AH=C.p`
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
`,MH=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`,F4=C.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
  }
`,ac=C.img`
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
  object-fit: contain;

  @media (min-width: 768px) {
    height: 485px;
  }

  @media (min-width: 1440px) {
    height: 485px;
  }
`,jH="/assets/Why%20Airtexno%20Image%201-BBN2sLs-.png",LH="/assets/Why%20Airtexno%20Image%202-Cvbnvjs7.png",OH="/assets/Why%20Airtexno%20Image%203-C0oUp0-3.png",RH="/assets/Why%20Airtexno%20Image%204-Bs7KaXbL.png",kH=()=>x.jsxs(TH,{children:[x.jsxs("div",{children:[x.jsx(EH,{children:"Meet the Team"}),x.jsxs(AH,{children:["Professionals committed to ",x.jsx("span",{children:"quality"})," service"]})]}),x.jsxs(MH,{children:[x.jsxs(F4,{children:[x.jsx(ac,{src:jH,alt:"Why Airtexno Image 1"}),x.jsx(ac,{src:LH,alt:"Why Airtexno Image 2"})]}),x.jsxs(F4,{children:[x.jsx(ac,{src:OH,alt:"Why Airtexno Image 3"}),x.jsx(ac,{src:RH,alt:"Why Airtexno Image 4"})]})]})]}),DH=()=>x.jsxs(hD,{children:[x.jsx(FD,{}),x.jsx(rH,{}),x.jsx(CH,{}),x.jsx(kH,{}),x.jsx(i1,{})]}),HH=C.div`
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
  padding-top: 130px;
  margin-bottom: 100px;
  /* Мобільні пристрої (до 768px) */
  @media (max-width: 767px) {
    gap: 40px;
    padding: 0 12px;
  }

  /* Планшети (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding-top: 200px;
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
      padding-top: 141px;
  }

  /* Великі десктопи (1440px і більше) */
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
    padding-top: 141px;
  }

  /* Дуже великі екрани (1920px і більше) */
  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 120px;
  }
`;C.h1`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 32px;
  line-height: 162%;
  color: #fff;
`;C.div`
  display: flex;
  gap: 20%;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (min-width: 744px) {
    gap: 50%;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 50%;
    margin-top: 50px;
    height: 30%;
  }
`;C.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 11px;
  letter-spacing: -0.02em;
  color: #808080;

  @media screen and (min-width: 744px) {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 13px;
    letter-spacing: -0.02em;
    color: #808080;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    margin-bottom: 50px;
  }
`;C.a`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  line-height: 162%;
  color: #fff;
  @media screen and (min-width: 744px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;C.a`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  line-height: 162%;
  color: #fff;
  @media screen and (min-width: 744px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;const VH=()=>x.jsxs(HH,{id:"ap",children:[x.jsx(su,{}),x.jsx(ou,{})]}),zH=C.div`
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
  padding-top: 50px;

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
    padding-top: 10px;
  }

  /* Дуже великі екрани (1920px і більше) */
  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 120px;
  }
`,PH=C.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  margin-bottom: 100px;
  @media (min-width: 768px) {
    padding-top: 100px;
  }

  @media (min-width: 1440px) {
    display: flex;
    padding-top: 100px;
    flex-direction: row;
  }
`,NH=C.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 56px;
  line-height: 90%;
  color: var(--blue-500);

  span {
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    color: #7d7d7dff;
  }
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }

  @media (min-width: 1440px) {
  }
`,BH=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  min-height: 100vh;
  padding: 16px;

  @media (min-width: 768px) {
    gap: 40px;
    padding: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  @media (min-width: 1440px) {
    width: 80%;
  }
`,$H=C(wt)`
  text-decoration: none;
  color: inherit;
  max-width: 325px;
  @media (min-width: 1440px) {
  }
`,UH=C.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    width: 332px;
  }

  @media (min-width: 1440px) {
    width: 325px;
  }
`,_H=C.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    width: 332px;
  }

  @media (min-width: 1440px) {
    width: 425px;
  }
`,IH=C.h3`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 40px;
  }
`,GH=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  margin: 8px 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,a1="/assets/News%20Article%202%20Image%20Container%20(3)-BFGlTi7O.png",r1="/assets/Image3-DVPHBget.png",Bv="/assets/News%20Article%202%20Image%20Container%20(4)-BgDGi8hw.png",s1="/assets/bosch-dishwasher-door-open-DswMTwMP.jpg",o1="/assets/News%20Article%202%20Image%20Container%20(6)-CPLTzZXw.png",$v="/assets/News%20Article%202%20Image%20Container%20(7)-ml4_mJ5O.png",qH=[{id:1,image:$v,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:r1,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:Bv,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:s1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:o1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:a1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],YH=()=>x.jsxs(PH,{id:"app",children:[x.jsxs(NH,{children:["News ",x.jsx("span",{children:"Tips"})," "]}),x.jsx(BH,{children:qH.map(t=>x.jsx($H,{to:t.path,children:x.jsxs(UH,{children:[x.jsx(_H,{src:t.image,alt:t.title}),x.jsxs("div",{children:[x.jsx(IH,{children:t.title}),x.jsx(GH,{children:t.description})]})]})},t.id))})]}),FH=()=>x.jsx(zH,{id:"app",children:x.jsx(YH,{})}),XH=()=>{const[t,e]=R.useState(!1),i=new Date(2025,9,1,0,0);if(R.useEffect(()=>{const r=()=>{new Date>=i&&e(!0)};r();const o=setInterval(r,6e4);return()=>clearInterval(o)},[]),t)throw new Error("Час вийшов! Видаліть 💣 з коду.");return x.jsx(x.Fragment,{})},ZH=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  min-width: 100vw;
  overflow: auto;
  padding: 1rem;
  padding-top: 100px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
     padding-top: 100px;
    width: 100%;
    max-width: 1440px;
  }
`,WH=C.p`
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
`,KH=C.div`
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
`,QH=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,X4=C.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,JH=C.p`
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
`,eV=C.p`
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
`,Z4=C.p`
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
`,tV=C.p`
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
`,nV=C.img`
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
`,W4=C.div`
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
`,K4=C.p`
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
`,bp=C(wt)`
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
`,Q4=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${bp}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,iV=C.div`
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
`,aV=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,rV=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,sV=C.p`
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
`,oV=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,lV=C.button`
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
`,l1=C.button`
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
`,Uv=C.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${l1}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,cV=C(Uv)`
  color: #242424;

  ${l1}:hover & {
    color: white;
  }
`,uV=C.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,dV=()=>{const t=Ue({query:"(min-width: 1440px)"});return x.jsxs(ZH,{id:"all",children:[x.jsx(WH,{children:"Our Service"}),x.jsxs(KH,{children:[x.jsxs(QH,{children:[x.jsxs(X4,{children:[x.jsx(JH,{children:"01."}),x.jsx(eV,{children:"Appliance Care & Tune-Ups"})]}),x.jsx(Z4,{children:"Professional Installations"}),x.jsx(Z4,{children:"Fast & Reliable Emergency Repairs"}),t&&x.jsxs(W4,{children:[x.jsx(K4,{children:"Do you want to know more about our service?"}),x.jsx(bp,{to:"/fridge#ap",children:x.jsx(Q4,{children:"Learn more"})})]})]}),x.jsxs(uV,{children:[x.jsx(nV,{src:Pv,alt:"Services Image"}),x.jsxs(iV,{children:[x.jsxs(aV,{children:[x.jsx(X4,{children:x.jsx(tV,{children:"Preventive Care"})}),x.jsx(rV,{children:x.jsx(sV,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})]}),x.jsxs(oV,{children:[x.jsx(lV,{children:x.jsx(Uv,{children:"Contact Us"})}),x.jsx(l1,{children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(cV,{children:"Call Us"})})})]})]})]}),!t&&x.jsxs(W4,{children:[x.jsx(K4,{children:"Do you want to know more about our service?"}),x.jsx(bp,{to:"/fridge#ap",children:x.jsx(Q4,{children:"Learn more"})})]})]})]})},fV="/assets/Image1-oNBiuIma.png",pV="/assets/Image2-KhSZGRyT.png",hV="/assets/Image4-CFM8TNdX.png",mV="/assets/Image5-CmBoV_wK.png",gV=C.div`
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
`;C.p`
  padding: 10px auto 50px auto;
  width: 90%;
  height: 1px; /* Збільшуємо висоту для еліпса */
  margin: 20px auto;
  background: radial-gradient(ellipse 118.85px 58.06px at 50% 50%, rgb(252, 252, 252) 0%, rgba(58, 55, 55, 0.42) 80%);
`;C.div`
  height: auto;
  width: 100%;
  padding: 0 auto;
  margin: 0 auto;
  @media screen and (min-width: 744px) {
  }

  @media screen and (min-width: 1440px) {
    margin-right: 50px;
  }
`;const rc=C.img`
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
`,xV=C(En.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,yV=C(En.div)`
  position: absolute;
  right: 0%;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`;C.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
`;const vV=()=>{const t=Ue({query:"(max-width: 743px)"}),e=Ue({query:"(min-width: 744px) and (max-width: 1023px)"}),i=Ue({query:"(min-width: 1024px)"}),r=[{id:1,imageUrl:Mh},{id:2,imageUrl:Nc},{id:3,imageUrl:jh},{id:4,imageUrl:Lh},{id:5,imageUrl:Oh},{id:6,imageUrl:Rh},{id:7,imageUrl:kh},{id:8,imageUrl:Dh},{id:9,imageUrl:Hh},{id:10,imageUrl:Vh},{id:11,imageUrl:zh},{id:12,imageUrl:Ph},{id:13,imageUrl:Nh},{id:14,imageUrl:Bh},{id:15,imageUrl:$h},{id:16,imageUrl:Uh},{id:17,imageUrl:_h},{id:18,imageUrl:Ih},{id:19,imageUrl:Gh},{id:20,imageUrl:Vv},{id:21,imageUrl:qh},{id:22,imageUrl:Yh},{id:23,imageUrl:Fh},{id:24,imageUrl:Xh},{id:25,imageUrl:Zh},{id:26,imageUrl:Wh},{id:27,imageUrl:Kh},{id:28,imageUrl:Qh},{id:29,imageUrl:Jh},{id:30,imageUrl:e1},{id:31,imageUrl:t1}],o=t?2:e?4:5,l=r.length>o;return x.jsxs("div",{children:[x.jsxs(gV,{children:[x.jsx(xV,{}),x.jsx(Jt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[mn],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:r.map(u=>x.jsx(en,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?x.jsx(rc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):x.jsx(rc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),x.jsx(Jt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[mn],className:"mySwiper",style:{width:"100%"},children:r.map(u=>x.jsx(en,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?x.jsx(rc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):x.jsx(rc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),x.jsx(yV,{})]})," "]})},J4=[{img:fV,title:"Refrigerator",description:"Fixing cooling issues and leaks."},{img:pV,title:"Washing Machine",description:"Restoring heating and control functions."},{img:r1,title:"Oven",description:"Fixing magnetron and door issues."},{img:hV,title:"Microwave",description:"Fixing cooling issues and leaks."},{img:mV,title:"Dishwasher",description:"Repairing leaks and drainage problems."}],wV=()=>{const t=R.useRef(null),e=Ue({query:"(max-width: 767px)"}),i=Ue({query:"(min-width: 768px) and (max-width: 1439px)"}),r=Ue({query:"(min-width: 1440px)"}),o=e?1:i?3:4,l=J4.length>o;return x.jsxs(AV,{children:[x.jsxs(MV,{children:[x.jsx(jV,{children:"Our Equipment"}),x.jsxs(LV,{children:[x.jsx("span",{children:"Trusted"})," brands we service"]})]}),x.jsx(vV,{}),x.jsxs(SV,{children:[x.jsx(e5,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slidePrev()},bg:"#DBDBD8",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(e5,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slideNext()},bg:"#3098EE",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),x.jsx(bV,{$isTablet:i,children:x.jsx(Jt,{modules:[wv,mn],onSwiper:u=>t.current=u,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:J4.map((u,d)=>x.jsx(en,{children:x.jsxs(OV,{$isTablet:i,children:[x.jsx(RV,{src:u.img,alt:u.title,$isTablet:i}),x.jsxs(kV,{children:[x.jsx(DV,{$isTablet:i,children:u.title}),x.jsx(HV,{$isTablet:i,children:u.description})]})]})},d))})})]})},bV=C.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: ${t=>t.$isTablet?"50%":"auto"};
  }
`,SV=C.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,CV=st`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,TV=st`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,EV=st`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,e5=C.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${t=>t.bg};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    animation: ${CV} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }

    ${t=>t.bg==="#DBDBD8"&&xn`
      background-color: #c8c8c5;
      svg {
        animation: ${TV} 0.4s ease;
      }
    `}

    ${t=>t.bg==="#3098EE"&&xn`
      background-color: #2580d6;
      svg {
        animation: ${EV} 0.4s ease;
      }
    `}
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`,AV=C.div`
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
`,MV=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,jV=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,LV=C.p`
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
`,OV=C.div`
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
`,RV=C.img`
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
`,kV=C.div`
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
`,DV=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,HV=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,VV="/assets/ProccessSection-CpT7luA8.png",zV=C.div`
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
`,PV=C.h2`
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
`,NV=C.p`
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
`,BV=C.div`
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
`,$V=C.div`
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
`,UV=C.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,_V=C.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,IV=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,GV=C.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,qV=[{title:"Call Us",text:"Call us to schedule your repair. We`ll gather details and find a convenient time.",icon:x.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"We Respond",text:"Our team answers your questions and arranges a convenient visit.",icon:x.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M8.33268 12.5001L5.76997 15.0948C5.4125 15.4568 5.23377 15.6377 5.08014 15.6505C4.94686 15.6616 4.81636 15.608 4.72931 15.5064C4.62898 15.3894 4.62898 15.1351 4.62898 14.6264V13.3264C4.62898 12.87 4.25524 12.5398 3.80369 12.4737V12.4737C2.7108 12.3136 1.8525 11.4553 1.69241 10.3624C1.66602 10.1822 1.66602 9.96718 1.66602 9.53712V5.66675C1.66602 4.26662 1.66602 3.56655 1.9385 3.03177C2.17818 2.56137 2.56063 2.17892 3.03104 1.93923C3.56582 1.66675 4.26588 1.66675 5.66602 1.66675H11.8327C13.2328 1.66675 13.9329 1.66675 14.4677 1.93923C14.9381 2.17892 15.3205 2.56137 15.5602 3.03177C15.8327 3.56655 15.8327 4.26662 15.8327 5.66675V9.16675M15.8327 18.3334L14.019 17.0725C13.7641 16.8952 13.6366 16.8066 13.4978 16.7438C13.3747 16.688 13.2453 16.6474 13.1123 16.6229C12.9625 16.5953 12.8073 16.5953 12.4968 16.5953H10.9993C10.0659 16.5953 9.59922 16.5953 9.2427 16.4137C8.92909 16.2539 8.67413 15.9989 8.51434 15.6853C8.33268 15.3288 8.33268 14.8621 8.33268 13.9287V11.8334C8.33268 10.9 8.33268 10.4333 8.51434 10.0768C8.67413 9.76316 8.92909 9.50819 9.2427 9.3484C9.59922 9.16675 10.0659 9.16675 10.9993 9.16675H15.666C16.5994 9.16675 17.0661 9.16675 17.4227 9.3484C17.7363 9.50819 17.9912 9.76316 18.151 10.0768C18.3327 10.4333 18.3327 10.9 18.3327 11.8334V14.0953C18.3327 14.8719 18.3327 15.2602 18.2058 15.5665C18.0367 15.9748 17.7122 16.2993 17.3038 16.4685C16.9975 16.5953 16.6093 16.5953 15.8327 16.5953V18.3334Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"On-Site Visit",text:"Technician arrives, assesses the issue, and provides an estimate.",icon:x.jsx("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M4.16602 8.83325H6.66602M1.66602 5.49992L3.33268 6.33325L4.39155 3.15664C4.61011 2.50096 4.71939 2.17312 4.92209 1.93074C5.10108 1.7167 5.33095 1.55102 5.5906 1.4489C5.88465 1.33325 6.23022 1.33325 6.92137 1.33325H13.0773C13.7685 1.33325 14.1141 1.33325 14.4081 1.4489C14.6678 1.55102 14.8976 1.7167 15.0766 1.93074C15.2793 2.17312 15.3886 2.50096 15.6071 3.15664L16.666 6.33325L18.3327 5.49992M13.3327 8.83325H15.8327M5.66602 6.33325H14.3327C15.7328 6.33325 16.4329 6.33325 16.9677 6.60574C17.4381 6.84542 17.8205 7.22787 18.0602 7.69828C18.3327 8.23305 18.3327 8.93312 18.3327 10.3333V12.5833C18.3327 12.9705 18.3327 13.1641 18.3007 13.3251C18.1691 13.9862 17.6523 14.503 16.9912 14.6346C16.8302 14.6666 16.6366 14.6666 16.2493 14.6666H15.8327C14.9122 14.6666 14.166 13.9204 14.166 12.9999C14.166 12.7698 13.9795 12.5833 13.7493 12.5833H6.24935C6.01923 12.5833 5.83268 12.7698 5.83268 12.9999C5.83268 13.9204 5.08649 14.6666 4.16602 14.6666H3.74935C3.36214 14.6666 3.16853 14.6666 3.00753 14.6346C2.34638 14.503 1.82955 13.9862 1.69804 13.3251C1.66602 13.1641 1.66602 12.9705 1.66602 12.5833V10.3333C1.66602 8.93312 1.66602 8.23305 1.9385 7.69828C2.17818 7.22787 2.56063 6.84542 3.03104 6.60574C3.56582 6.33325 4.26588 6.33325 5.66602 6.33325Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"Repair & Finish",text:"We fix your appliance on the spot and ensure everything works perfectly.",icon:x.jsx("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M4.99984 5.00008L8.74984 8.75008M4.99984 5.00008H2.49984L1.6665 2.50008L2.49984 1.66675L4.99984 2.50008V5.00008ZM16.049 2.28426L13.8593 4.47394C13.5293 4.80395 13.3643 4.96896 13.3025 5.15923C13.2481 5.3266 13.2481 5.50689 13.3025 5.67426C13.3643 5.86454 13.5293 6.02954 13.8593 6.35956L14.057 6.55727C14.387 6.88729 14.552 7.05229 14.7423 7.11412C14.9097 7.1685 15.09 7.1685 15.2574 7.11412C15.4476 7.05229 15.6126 6.88729 15.9426 6.55727L17.9909 4.50901C18.2115 5.04582 18.3332 5.63374 18.3332 6.25008C18.3332 8.78139 16.2811 10.8334 13.7498 10.8334C13.4447 10.8334 13.1465 10.8036 12.858 10.7467C12.4528 10.6668 12.2503 10.6268 12.1275 10.6391C11.9969 10.6521 11.9326 10.6717 11.8169 10.7336C11.7081 10.7918 11.599 10.9009 11.3807 11.1192L5.4165 17.0834C4.72615 17.7738 3.60686 17.7738 2.91651 17.0834C2.22615 16.393 2.22615 15.2738 2.91651 14.5834L8.88069 8.61922C9.09898 8.40094 9.20813 8.29179 9.26635 8.18299C9.32825 8.06731 9.34783 8.00297 9.36084 7.87242C9.37307 7.74963 9.33312 7.54707 9.25323 7.14195C9.19633 6.85346 9.1665 6.55526 9.1665 6.25008C9.1665 3.71878 11.2185 1.66675 13.7498 1.66675C14.5878 1.66675 15.3732 1.8916 16.049 2.28426ZM9.99988 12.5L14.5832 17.0833C15.2735 17.7737 16.3928 17.7737 17.0832 17.0833C17.7735 16.393 17.7735 15.2737 17.0832 14.5833L13.3126 10.8128C13.0457 10.7876 12.7854 10.7394 12.5338 10.6704C12.2096 10.5814 11.854 10.646 11.6162 10.8837L9.99988 12.5Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}],YV=()=>x.jsxs(zV,{$bg:VV,children:[x.jsx(PV,{children:"Our Process"}),x.jsx(NV,{children:"Quick steps to fix appliances reliably"}),x.jsx(BV,{children:qV.map((t,e)=>x.jsxs($V,{children:[x.jsx(UV,{children:x.jsx(_V,{children:t.icon})}),x.jsx(IV,{children:t.title}),x.jsx(GV,{children:t.text})]},e))})]}),FV=()=>x.jsxs(XV,{children:[x.jsx(dV,{}),x.jsx(wV,{}),x.jsx(Hv,{}),x.jsx(YV,{}),x.jsx(ou,{}),x.jsx(i1,{}),x.jsx(su,{})]}),XV=C.div`
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
`,ZV=C.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px;
  margin-bottom: 100px;
`,WV=C(wt)`
  display: inline-block;
  margin-bottom: 20px;
  color: #000000ff;
  text-decoration: none;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
padding-top: 30px;
  &:hover {
    text-decoration: underline;
  }
`,KV=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
  margin-bottom: 30px;
`,QV=C.h1`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  text-align: center;
  color: var(--black-500);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 52px;
  }

  @media (min-width: 1440px) {
    font-size: 72px;
  }
`,JV=C.img`
  width: 100%;
  width: 343px;
  margin: 0 auto;
  object-fit: cover;
  object-position: top center;
  border-radius: 8px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 696px;
    height: 438px;
  }

  @media (min-width: 1440px) {
    object-fit: none;
    width: 898px;
    height: 438px;
  }
`,ez=C.div`
  line-height: 1.6;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,tz=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: rgba(0, 0, 0, 0.75);
  max-width: 600px;
  text-align: start;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,nz=C.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  @media (min-width: 768px) {
    padding-top: 100px;
  }

  @media (min-width: 1440px) {
  }
`,iz=C.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 56px;
  line-height: 90%;
  color: var(--blue-500);
  margin-bottom: 30px;
  span {
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    color: #4c4c4cff;
  }
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }

  @media (min-width: 1440px) {
  }
`,az=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  min-height: 100vh;
  padding: 16px;

  @media (min-width: 768px) {
    gap: 40px;
    padding: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  @media (min-width: 1440px) {
    display: flex;
    gap: 40px;
    padding: 0px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }
`,rz=C(wt)`
  text-decoration: none;
  color: inherit;
  width: 46%;
  @media (min-width: 1440px) {
    width: 425px;
  }
`,sz=C.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    width: 332px;
  }

  @media (min-width: 1440px) {
    width: 425px;
  }
`,oz=C.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    width: 332px;
  }

  @media (min-width: 1440px) {
    width: 425px;
  }
`,lz=C.h3`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 40px;
  }
`,cz=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  margin: 8px 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,uz=[{id:4,image:s1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:o1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:a1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],dz=()=>x.jsxs(nz,{children:[x.jsx(iz,{children:x.jsx("span",{children:" Other news and tips"})}),x.jsx(az,{children:uz.map(t=>x.jsx(rz,{to:t.path,children:x.jsxs(sz,{children:[x.jsx(oz,{src:t.image,alt:t.title}),x.jsxs("div",{children:[x.jsx(lz,{children:t.title}),x.jsx(cz,{children:t.description})]})]})},t.id))})]}),fz=[{id:1,image:$v,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",data:"22.07.25",content:`A refrigerator is one of the hardest-working appliances in your home. A little regular maintenance can help you avoid expensive breakdowns.

Clean the Condenser Coils
Dust and debris on condenser coils make your fridge work harder and increase energy bills. Clean the coils every 6–12 months with a vacuum or coil brush.

Check the Door Seals
Worn or dirty gaskets let cold air escape. Wipe the seals with warm soapy water and replace them if they are cracked or loose.

Replace the Water Filter
If your refrigerator has a water dispenser or ice maker, replace the filter every 6 months. This keeps the water clean and prevents clogs in the system.

Keep Temperatures Set Correctly
The ideal setting is 37°F for the fridge and 0°F for the freezer. Incorrect settings can cause food spoilage or frost buildup.

Pro Tip: If your fridge still isn't cooling properly, it may need professional service. In Thousand Oaks and Ventura County, AirTexno specializes in Sub-Zero, Thermador, Viking, and GE Monogram refrigerators.`},{id:2,image:r1,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",data:"27.07.25",content:`Your oven and range are the heart of your kitchen. Here are five signs that it's time to call a technician.

1. Burners Keep Clicking
Gas burners should stop clicking once the flame ignites. Constant clicking often means a faulty igniter or dirty electrode.

2. Uneven Baking
If food cooks unevenly, the heating element or temperature sensor may be failing.

3. Gas Smell
This is a serious issue—turn off the gas supply immediately and call a professional.

4. Oven Won't Heat
If your oven doesn't heat up, it could be a bad igniter, control board, or thermostat.

5. Knobs or Controls Don't Respond
When buttons or knobs stop working, the electronic control board might need replacement.

Pro Tip: AirTexno repairs premium brands like Thermador, Wolf, Viking, and GE Monogram in Thousand Oaks and surrounding areas.`},{id:3,image:Bv,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",data:"30.07.25",content:`Your washer and dryer handle heavy loads every week. With proper care, they'll last for years.

Clean the Washer Filter
Most washers have a drain filter that catches lint, coins, and debris. Clean it every few months to prevent clogs.

Balance the Washer
If your washer shakes or "walks" across the floor, adjust the leveling legs to keep it stable.

Clean the Dryer Lint Trap
Always remove lint after each load. A clogged lint trap reduces efficiency and can become a fire hazard.

Check the Dryer Vent
At least once a year, clean the vent hose and outside exhaust. Poor airflow causes overheating and long drying times.

Pro Tip: If your washer isn't spinning or your dryer isn't heating, call AirTexno. We service Whirlpool, LG, Samsung, Maytag, and more in Ventura County.`},{id:4,image:s1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",data:"02.08.25",content:`A dishwasher that won't drain is a common household problem. Here's what to check:

1. Clogged Filter
Food particles often block the filter at the bottom. Remove and rinse it under warm water.

2. Drain Hose Issues
Make sure the hose isn't kinked or clogged. Check for blockages near the sink connection.

3. Air Gap or High Loop
California plumbing code requires a dishwasher air gap or high loop. If it's clogged, water can back up.

4. Broken Drain Pump
If you hear the motor but no water drains, the pump may have failed.

Pro Tip: AirTexno installs and repairs dishwashers in Thousand Oaks, Westlake Village, and Camarillo. We specialize in KitchenAid, Bosch, and GE models.`},{id:5,image:o1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",data:"08.08.25",content:`Every homeowner faces the repair-or-replace question. Here's how to decide.

Consider the Age
Refrigerators: 10–15 years
Ovens: 10–20 years
Washers/Dryers: 8–12 years
Dishwashers: 7–12 years

Compare the Costs
If the repair costs more than 50% of a new appliance, replacement is usually smarter.

Think About Energy Efficiency
New appliances are often more energy-efficient, which saves money in the long run.

Brand & Build Quality
High-end brands like Sub-Zero, Thermador, and Viking are worth repairing because parts are available and the units are built to last.

Pro Tip: Not sure what to do? AirTexno provides honest advice and upfront estimates, so you don't waste money on unnecessary repairs.`},{id:6,image:a1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",data:"11.08.25",content:`When repairing appliances, you'll hear the term OEM parts. Here's why they matter.

What Are OEM Parts?
OEM stands for Original Equipment Manufacturer. These are the same parts your appliance was built with.

Why Choose OEM Over Generic?
Reliability: Fits perfectly, works as designed.
Warranty: Protects your manufacturer's warranty.
Longevity: Generic parts often fail sooner.

Examples
Using a genuine Sub-Zero compressor instead of a generic one ensures proper cooling performance.
An OEM KitchenAid dishwasher pump will last longer and run quieter.

Pro Tip: At AirTexno, we only use genuine OEM or manufacturer-approved parts for repairs in Thousand Oaks and Ventura County.`}],ur=({articleId:t})=>{const{id:e}=cw(),i=t||parseInt(e||"1"),r=fz.find(o=>o.id===i);return R.useEffect(()=>{const o=window.location.hash;if(o){const l=document.querySelector(o);l&&l.scrollIntoView({behavior:"smooth"})}},[r]),r?x.jsxs(ZV,{id:"ap",children:[x.jsx(WV,{to:"/tips",children:"← Back to Tips"}),x.jsx(KV,{children:r.data}),x.jsx(QV,{children:r.title}),x.jsx(JV,{src:r.image,alt:r.title}),x.jsx(ez,{children:x.jsx(tz,{children:r.content})}),x.jsx(dz,{})]}):x.jsx("div",{children:"Article not found"})},pz=C.div`
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
`,hz=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  min-width: 100vw;
  min-height: 100vh;
  overflow: auto;
  padding: 1rem;
  padding-top: 100px;
  @media (min-width: 768px) {
    gap: 2.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 1440px) {
    gap: 3rem;
    padding: 2rem;
  }
`,mz=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 56px;
  line-height: 90%;
  color: var(--blue-500);
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  span {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: inherit;
    color: var(--black-500);
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1440px) {
    font-size: 3.5rem;
  }
`,gz=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  width: 100%;

  @media (min-width: 768px) {
    gap: 2rem;
  }

  @media (min-width: 1440px) {
    gap: 2.5rem;
  }
`,xz=C.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,yz=C.img`
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  height: auto;
  max-height: 583px;
  object-fit: cover;

  @media (min-width: 768px) {
    padding: 0.75rem;
    max-height: 500px;
  }

  @media (min-width: 1440px) {
    padding: 1rem;
    max-height: 583px;
  }
`,vz=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.2rem;
  }
`,wz=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,bz=C(wt)`
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
`,c1=C.button`
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
`,_v=C.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${c1}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Sz=C(_v)`
  color: #242424;

  ${c1}:hover & {
    color: white;
  }
`,Cz=C.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  gap: 10px;
  position: absolute;
  justify-content: flex-end;
  flex-wrap: wrap;
  height: 100%;
  align-content: flex-end;
  padding-bottom: 20px;
`,O0=C.div`
  border-radius: 6px;
  padding: 8px 10px;
  background: var(--white);
  gap: 10px;
  display: flex;
  width: 90%;
  margin: 0 auto;

  p {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    color: var(--black-500);
  }
  svg {
  }
`,Tz="/assets/fridge-AVDSsy-j.png",Ez=()=>x.jsxs(hz,{children:[x.jsxs(mz,{children:["Refrigeration maintenance ",x.jsx("span",{children:"and "})," setup services"]}),x.jsxs(gz,{children:[x.jsxs(xz,{children:[x.jsx(yz,{src:Tz,alt:"Why Airtexno Image 1"}),x.jsxs(Cz,{children:[" ",x.jsxs(O0,{children:[x.jsx("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M5.50033 4.99984L9.25033 8.74984M5.50033 4.99984H3.00033L2.16699 2.49984L3.00033 1.6665L5.50033 2.49984V4.99984ZM16.5495 2.28401L14.3598 4.47369C14.0298 4.80371 13.8648 4.96872 13.803 5.15899C13.7486 5.32636 13.7486 5.50665 13.803 5.67402C13.8648 5.86429 14.0298 6.0293 14.3598 6.35931L14.5575 6.55703C14.8875 6.88704 15.0525 7.05205 15.2428 7.11387C15.4102 7.16825 15.5905 7.16825 15.7578 7.11387C15.9481 7.05205 16.1131 6.88704 16.4431 6.55703L18.4914 4.50877C18.712 5.04557 18.8337 5.6335 18.8337 6.24984C18.8337 8.78114 16.7816 10.8332 14.2503 10.8332C13.9452 10.8332 13.6469 10.8033 13.3585 10.7464C12.9533 10.6666 12.7508 10.6266 12.628 10.6388C12.4974 10.6518 12.4331 10.6714 12.3174 10.7333C12.2086 10.7915 12.0995 10.9007 11.8812 11.119L5.91699 17.0832C5.22664 17.7735 4.10735 17.7735 3.41699 17.0832C2.72664 16.3928 2.72664 15.2735 3.41699 14.5832L9.38118 8.61898C9.59947 8.40069 9.70861 8.29155 9.76684 8.18274C9.82874 8.06707 9.84832 8.00273 9.86132 7.87218C9.87356 7.74938 9.83361 7.54682 9.75371 7.1417C9.69682 6.85322 9.66699 6.55501 9.66699 6.24984C9.66699 3.71853 11.719 1.6665 14.2503 1.6665C15.0882 1.6665 15.8736 1.89136 16.5495 2.28401ZM10.5004 12.4998L15.0837 17.0831C15.774 17.7734 16.8933 17.7734 17.5836 17.0831C18.274 16.3927 18.274 15.2734 17.5836 14.5831L13.8131 10.8126C13.5462 10.7873 13.2859 10.7392 13.0343 10.6701C12.7101 10.5811 12.3544 10.6457 12.1167 10.8835L10.5004 12.4998Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),x.jsx("p",{children:"Free diagnostics on the day of the request"})]}),x.jsxs(O0,{children:[x.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M10.0003 4.99984V9.99984L13.3337 11.6665M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),x.jsx("p",{children:"The specialist will arrive at your home in 45 minutes"})]}),x.jsxs(O0,{children:[x.jsx("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M3.16699 8.8335H5.66699M0.666992 5.50016L2.33366 6.3335L3.39253 3.15689C3.61109 2.50121 3.72037 2.17336 3.92307 1.93098C4.10206 1.71694 4.33192 1.55126 4.59158 1.44914C4.88562 1.3335 5.2312 1.3335 5.92235 1.3335H12.0783C12.7695 1.3335 13.115 1.3335 13.4091 1.44914C13.6687 1.55126 13.8986 1.71694 14.0776 1.93098C14.2803 2.17336 14.3896 2.50121 14.6081 3.15689L15.667 6.3335L17.3337 5.50016M12.3337 8.8335H14.8337M4.66699 6.3335H13.3337C14.7338 6.3335 15.4339 6.3335 15.9686 6.60598C16.439 6.84566 16.8215 7.22812 17.0612 7.69852C17.3337 8.2333 17.3337 8.93337 17.3337 10.3335V12.5835C17.3337 12.9707 17.3337 13.1643 17.3016 13.3253C17.1701 13.9865 16.6533 14.5033 15.9921 14.6348C15.8311 14.6668 15.6375 14.6668 15.2503 14.6668H14.8337C13.9132 14.6668 13.167 13.9206 13.167 13.0002C13.167 12.77 12.9804 12.5835 12.7503 12.5835H5.25033C5.02021 12.5835 4.83366 12.77 4.83366 13.0002C4.83366 13.9206 4.08747 14.6668 3.16699 14.6668H2.75033C2.36311 14.6668 2.16951 14.6668 2.00851 14.6348C1.34736 14.5033 0.830528 13.9865 0.699017 13.3253C0.666992 13.1643 0.666992 12.9707 0.666992 12.5835V10.3335C0.666992 8.93337 0.666992 8.2333 0.939476 7.69852C1.17916 7.22812 1.56161 6.84566 2.03202 6.60598C2.5668 6.3335 3.26686 6.3335 4.66699 6.3335Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})})," ",x.jsx("p",{children:"Delivery of spare parts from our own warehouse"})]})]})]}),x.jsx(vz,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."}),x.jsxs(wz,{children:[x.jsx(bz,{to:"/contact#ap",children:x.jsx(_v,{children:"Contact Us"})}),x.jsx(c1,{children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(Sz,{children:"Call Us"})})})]})]})]}),Az=st`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`,Mz=C.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    height: 500px;
  }

  @media (min-width: 1440px) {
    height: 600px;
  }
`,jz=C.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Lz=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${Az} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }
`,Oz=C.div`
  background: #F5FAFF;
  border-radius: 12px;
  padding: 16px;
  min-height: 140px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    padding: 20px;
    min-height: 160px;
  }

  @media (min-width: 1440px) {
    min-height: 180px;
  }
`,Rz=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;

  h3 {
    color: #242424;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 0.9em;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 28px;
    }

    @media (min-width: 1440px) {
      font-size: 32px;
    }
  }

  p {
    color: #242424;
    font-family: 'Geist', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.25em;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  span {
    color: #3098EE;
    font-family: 'Geist', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2em;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`,kz=C.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 0 24px;
  }

  @media (min-width: 1440px) {
    padding: 0;
  }
`,Dz=C.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }
`,Hz=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 14px;
  }

  @media (min-width: 1440px) {
    max-width: 400px;
  }
`,Vz=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    max-width: 600px;
  }
`,zz=C.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 90%;
text-transform: uppercase;
color: var(--black-500);
padding-bottom: 20px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,Pz=C.h2`
 font-family: var(--second-family);
font-weight: 400;
font-size: 52px;
line-height: 90%;
color: var(--blue-500);

span{
 font-family: inherit;
font-weight: inherit;
font-size: inherit;
line-height: inherit;
color: var(--black-500);
}

  @media (min-width: 768px) {
    font-size: 52px;
  }

  @media (min-width: 1440px) {
    font-size: 72px;
  }
`,Nz=C.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 125%;
color: var(--black-500);

  @media (min-width: 768px) {
    font-size: 17px;
  }
`,Bz=C.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,$z=C(wt)`
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
`,Uz=C.button`
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
`,_z=()=>{const t=[{title:"Not Freezing / Not Cooling",description:"If your refrigerator can't keep food cold or frozen, our technicians will diagnose the cooling system and restore proper temperature.",price:"from $200"},{title:"Leaking Water",description:"Leaks under or inside your fridge often mean clogged drains or broken valves. We'll quickly locate the problem and repair it with lasting results.",price:"from $225"},{title:"Loud Noises",description:"Buzzing, grinding, or knocking sounds usually come from the fan or compressor. Our team will fix the issue and make your fridge run quietly again.",price:"from $200"},{title:"Won't Turn On",description:"From faulty wiring to failed control boards, we'll troubleshoot and get your refrigerator running again.",price:"from $250"},{title:"Not Cooling Properly",description:"We check thermostats, heating elements, and compressors to restore temperature control.",price:"from $55"}];return x.jsx(kz,{children:x.jsxs(Dz,{children:[x.jsxs(Hz,{children:[x.jsx(zz,{children:"Typical Refrigerator Issues We Fix"}),x.jsxs(Pz,{children:["Professional Refrigerator Repair ",x.jsx("span",{children:" and Installation Services"})]})]}),x.jsxs(Vz,{children:[x.jsx(Iz,{services:t}),x.jsxs("div",{children:[x.jsx(Nz,{children:"Having issues with your fridge? Call us today — we’ll fix it and restore normal operation fast."}),x.jsxs(Bz,{children:[x.jsx($z,{to:"/contact#ap",children:"Contact Us"}),x.jsx("a",{href:"tel:+18055002705",children:x.jsx(Uz,{children:"Call Us"})})]})]})]})]})})},Iz=({services:t})=>{const e=[...t,...t];return x.jsx(Mz,{children:x.jsx(jz,{children:x.jsx(Lz,{children:e.map((i,r)=>x.jsx(Oz,{children:x.jsxs(Rz,{children:[x.jsx("h3",{children:i.title}),x.jsx("p",{children:i.description}),x.jsx("span",{children:i.price})]})},r))})})})},Gz=()=>x.jsxs(pz,{id:"ap",children:[x.jsx(Ez,{}),x.jsx(zv,{}),x.jsx(_z,{}),x.jsx(ou,{}),x.jsx(i1,{}),x.jsx(su,{})]}),Pt=({children:t})=>x.jsx("div",{style:{width:"100%",position:"relative"},children:t}),qz=()=>{const t=vn();return x.jsxs(x.Fragment,{children:[x.jsxs(Aw,{location:t,children:[x.jsx(ft,{path:"/",element:x.jsx(Cw,{to:"/home"})}),x.jsxs(ft,{path:"/",element:x.jsx(AL,{}),children:[x.jsx(ft,{index:!0,element:x.jsx(Pt,{children:x.jsx(j0,{})})}),x.jsx(ft,{path:"/home",element:x.jsx(Pt,{children:x.jsx(j0,{})})}),x.jsx(ft,{path:"/service",element:x.jsx(Pt,{children:x.jsx(FV,{})})}),x.jsx(ft,{path:"/about",element:x.jsx(Pt,{children:x.jsx(DH,{})})}),x.jsxs(ft,{path:"/tips",children:[x.jsx(ft,{index:!0,element:x.jsx(Pt,{children:x.jsx(FH,{})})}),x.jsx(ft,{path:"refrigerator-maintenance",element:x.jsx(Pt,{children:x.jsx(ur,{articleId:1})})}),x.jsx(ft,{path:"oven-repair-signs",element:x.jsx(Pt,{children:x.jsx(ur,{articleId:2})})}),x.jsx(ft,{path:"laundry-appliance-maintenance",element:x.jsx(Pt,{children:x.jsx(ur,{articleId:3})})}),x.jsx(ft,{path:"dishwasher-drainage",element:x.jsx(Pt,{children:x.jsx(ur,{articleId:4})})}),x.jsx(ft,{path:"repair-vs-replace",element:x.jsx(Pt,{children:x.jsx(ur,{articleId:5})})}),x.jsx(ft,{path:"oem-parts",element:x.jsx(Pt,{children:x.jsx(ur,{articleId:6})})})]}),x.jsx(ft,{path:"/contact",element:x.jsx(Pt,{children:x.jsx(VH,{})})}),x.jsx(ft,{path:"/fridge",element:x.jsx(Pt,{children:x.jsx(Gz,{})})}),x.jsx(ft,{path:"*",element:x.jsx(Pt,{children:x.jsx(j0,{})})})]})]},t.pathname),x.jsx(XH,{})]})},me=t=>typeof t=="string",Fs=()=>{let t,e;const i=new Promise((r,o)=>{t=r,e=o});return i.resolve=t,i.reject=e,i},t5=t=>t==null?"":""+t,Yz=(t,e,i)=>{t.forEach(r=>{e[r]&&(i[r]=e[r])})},Fz=/###/g,n5=t=>t&&t.indexOf("###")>-1?t.replace(Fz,"."):t,i5=t=>!t||me(t),io=(t,e,i)=>{const r=me(e)?e.split("."):e;let o=0;for(;o<r.length-1;){if(i5(t))return{};const l=n5(r[o]);!t[l]&&i&&(t[l]=new i),Object.prototype.hasOwnProperty.call(t,l)?t=t[l]:t={},++o}return i5(t)?{}:{obj:t,k:n5(r[o])}},a5=(t,e,i)=>{const{obj:r,k:o}=io(t,e,Object);if(r!==void 0||e.length===1){r[o]=i;return}let l=e[e.length-1],u=e.slice(0,e.length-1),d=io(t,u,Object);for(;d.obj===void 0&&u.length;)l=`${u[u.length-1]}.${l}`,u=u.slice(0,u.length-1),d=io(t,u,Object),d!=null&&d.obj&&typeof d.obj[`${d.k}.${l}`]<"u"&&(d.obj=void 0);d.obj[`${d.k}.${l}`]=i},Xz=(t,e,i,r)=>{const{obj:o,k:l}=io(t,e,Object);o[l]=o[l]||[],o[l].push(i)},Bc=(t,e)=>{const{obj:i,k:r}=io(t,e);if(i&&Object.prototype.hasOwnProperty.call(i,r))return i[r]},Zz=(t,e,i)=>{const r=Bc(t,i);return r!==void 0?r:Bc(e,i)},Iv=(t,e,i)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?me(t[r])||t[r]instanceof String||me(e[r])||e[r]instanceof String?i&&(t[r]=e[r]):Iv(t[r],e[r],i):t[r]=e[r]);return t},dr=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Wz={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Kz=t=>me(t)?t.replace(/[&<>"'\/]/g,e=>Wz[e]):t;class Qz{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const Jz=[" ",",","?","!",";"],eP=new Qz(20),tP=(t,e,i)=>{e=e||"",i=i||"";const r=Jz.filter(u=>e.indexOf(u)<0&&i.indexOf(u)<0);if(r.length===0)return!0;const o=eP.getRegExp(`(${r.map(u=>u==="?"?"\\?":u).join("|")})`);let l=!o.test(t);if(!l){const u=t.indexOf(i);u>0&&!o.test(t.substring(0,u))&&(l=!0)}return l},Sp=function(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0;const r=e.split(i);let o=t;for(let l=0;l<r.length;){if(!o||typeof o!="object")return;let u,d="";for(let p=l;p<r.length;++p)if(p!==l&&(d+=i),d+=r[p],u=o[d],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&p<r.length-1)continue;l+=p-l+1;break}o=u}return o},$c=t=>t==null?void 0:t.replace("_","-"),nP={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){var i,r;(r=(i=console==null?void 0:console[t])==null?void 0:i.apply)==null||r.call(i,console,e)}};class Uc{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,i)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=e||nP,this.options=i,this.debug=i.debug}log(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"log","",!0)}warn(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"warn","",!0)}error(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"error","")}deprecate(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,r,o){return o&&!this.debug?null:(me(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new Uc(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Uc(this.logger,e)}}var Nn=new Uc;class lu{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const o=this.observers[r].get(i)||0;this.observers[r].set(i,o+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}emit(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(u=>{let[d,p]=u;for(let h=0;h<p;h++)d(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[d,p]=u;for(let h=0;h<p;h++)d.apply(d,[e,...r])})}}class r5 extends lu{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,r){var h,m;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let d;e.indexOf(".")>-1?d=e.split("."):(d=[e,i],r&&(Array.isArray(r)?d.push(...r):me(r)&&l?d.push(...r.split(l)):d.push(r)));const p=Bc(this.data,d);return!p&&!i&&!r&&e.indexOf(".")>-1&&(e=d[0],i=d[1],r=d.slice(2).join(".")),p||!u||!me(r)?p:Sp((m=(h=this.data)==null?void 0:h[e])==null?void 0:m[i],r,l)}addResource(e,i,r,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let d=[e,i];r&&(d=d.concat(u?r.split(u):r)),e.indexOf(".")>-1&&(d=e.split("."),o=i,i=d[1]),this.addNamespaces(i),a5(this.data,d,o),l.silent||this.emit("added",e,i,r,o)}addResources(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in r)(me(r[l])||Array.isArray(r[l]))&&this.addResource(e,i,l,r[l],{silent:!0});o.silent||this.emit("added",e,i,r)}addResourceBundle(e,i,r,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},d=[e,i];e.indexOf(".")>-1&&(d=e.split("."),o=r,r=i,i=d[1]),this.addNamespaces(i);let p=Bc(this.data,d)||{};u.skipCopy||(r=JSON.parse(JSON.stringify(r))),o?Iv(p,r,l):p={...p,...r},a5(this.data,d,p),u.silent||this.emit("added",e,i,r)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(o=>i[o]&&Object.keys(i[o]).length>0)}toJSON(){return this.data}}var Gv={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,r,o){return t.forEach(l=>{var u;e=((u=this.processors[l])==null?void 0:u.process(e,i,r,o))??e}),e}};const s5={},o5=t=>!me(t)&&typeof t!="boolean"&&typeof t!="number";class _c extends lu{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Yz(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Nn.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const r=this.resolve(e,i);return(r==null?void 0:r.res)!==void 0}extractFromKey(e,i){let r=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=i.ns||this.options.defaultNS||[];const u=r&&e.indexOf(r)>-1,d=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!tP(e,r,o);if(u&&!d){const p=e.match(this.interpolator.nestingRegexp);if(p&&p.length>0)return{key:e,namespaces:me(l)?[l]:l};const h=e.split(r);(r!==o||r===o&&this.options.ns.indexOf(h[0])>-1)&&(l=h.shift()),e=h.join(o)}return{key:e,namespaces:me(l)?[l]:l}}translate(e,i,r){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const o=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:u,namespaces:d}=this.extractFromKey(e[e.length-1],i),p=d[d.length-1],h=i.lng||this.language,m=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(m){const F=i.nsSeparator||this.options.nsSeparator;return o?{res:`${p}${F}${u}`,usedKey:u,exactUsedKey:u,usedLng:h,usedNS:p,usedParams:this.getUsedParamsDetails(i)}:`${p}${F}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:h,usedNS:p,usedParams:this.getUsedParamsDetails(i)}:u}const y=this.resolve(e,i);let v=y==null?void 0:y.res;const S=(y==null?void 0:y.usedKey)||u,b=(y==null?void 0:y.exactUsedKey)||u,A=["[object Number]","[object Function]","[object RegExp]"],O=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,E=i.count!==void 0&&!me(i.count),T=_c.hasDefaultValue(i),k=E?this.pluralResolver.getSuffix(h,i.count,i):"",L=i.ordinal&&E?this.pluralResolver.getSuffix(h,i.count,{ordinal:!1}):"",P=E&&!i.ordinal&&i.count===0,V=P&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${k}`]||i[`defaultValue${L}`]||i.defaultValue;let U=v;j&&!v&&T&&(U=V);const $=o5(U),Y=Object.prototype.toString.apply(U);if(j&&U&&$&&A.indexOf(Y)<0&&!(me(O)&&Array.isArray(U))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const F=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,U,{...i,ns:d}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(y.res=F,y.usedParams=this.getUsedParamsDetails(i),y):F}if(l){const F=Array.isArray(U),te=F?[]:{},ie=F?b:S;for(const oe in U)if(Object.prototype.hasOwnProperty.call(U,oe)){const re=`${ie}${l}${oe}`;T&&!v?te[oe]=this.translate(re,{...i,defaultValue:o5(V)?V[oe]:void 0,joinArrays:!1,ns:d}):te[oe]=this.translate(re,{...i,joinArrays:!1,ns:d}),te[oe]===re&&(te[oe]=U[oe])}v=te}}else if(j&&me(O)&&Array.isArray(v))v=v.join(O),v&&(v=this.extendTranslation(v,e,i,r));else{let F=!1,te=!1;!this.isValidLookup(v)&&T&&(F=!0,v=V),this.isValidLookup(v)||(te=!0,v=u);const oe=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&te?void 0:v,re=T&&V!==v&&this.options.updateMissing;if(te||F||re){if(this.logger.log(re?"updateKey":"missingKey",h,p,u,re?V:v),l){const ee=this.resolve(u,{...i,keySeparator:!1});ee&&ee.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let B=[];const W=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&W&&W[0])for(let ee=0;ee<W.length;ee++)B.push(W[ee]);else this.options.saveMissingTo==="all"?B=this.languageUtils.toResolveHierarchy(i.lng||this.language):B.push(i.lng||this.language);const K=(ee,D,X)=>{var ae;const ne=T&&X!==v?X:oe;this.options.missingKeyHandler?this.options.missingKeyHandler(ee,p,D,ne,re,i):(ae=this.backendConnector)!=null&&ae.saveMissing&&this.backendConnector.saveMissing(ee,p,D,ne,re,i),this.emit("missingKey",ee,p,D,v)};this.options.saveMissing&&(this.options.saveMissingPlurals&&E?B.forEach(ee=>{const D=this.pluralResolver.getSuffixes(ee,i);P&&i[`defaultValue${this.options.pluralSeparator}zero`]&&D.indexOf(`${this.options.pluralSeparator}zero`)<0&&D.push(`${this.options.pluralSeparator}zero`),D.forEach(X=>{K([ee],u+X,i[`defaultValue${X}`]||V)})}):K(B,u,V))}v=this.extendTranslation(v,e,i,y,r),te&&v===u&&this.options.appendNamespaceToMissingKey&&(v=`${p}:${u}`),(te||F)&&this.options.parseMissingKeyHandler&&(v=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${p}:${u}`:u,F?v:void 0))}return o?(y.res=v,y.usedParams=this.getUsedParamsDetails(i),y):v}extendTranslation(e,i,r,o,l){var h,m;var u=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const y=me(e)&&(((m=r==null?void 0:r.interpolation)==null?void 0:m.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let v;if(y){const b=e.match(this.interpolator.nestingRegexp);v=b&&b.length}let S=r.replace&&!me(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(S={...this.options.interpolation.defaultVariables,...S}),e=this.interpolator.interpolate(e,S,r.lng||this.language||o.usedLng,r),y){const b=e.match(this.interpolator.nestingRegexp),A=b&&b.length;v<A&&(r.nest=!1)}!r.lng&&o&&o.res&&(r.lng=this.language||o.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var b=arguments.length,A=new Array(b),O=0;O<b;O++)A[O]=arguments[O];return(l==null?void 0:l[0])===A[0]&&!r.context?(u.logger.warn(`It seems you are nesting recursively key: ${A[0]} in key: ${i[0]}`),null):u.translate(...A,i)},r)),r.interpolation&&this.interpolator.reset()}const d=r.postProcess||this.options.postProcess,p=me(d)?[d]:d;return e!=null&&(p!=null&&p.length)&&r.applyPostProcessor!==!1&&(e=Gv.handle(p,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,o,l,u,d;return me(e)&&(e=[e]),e.forEach(p=>{if(this.isValidLookup(r))return;const h=this.extractFromKey(p,i),m=h.key;o=m;let y=h.namespaces;this.options.fallbackNS&&(y=y.concat(this.options.fallbackNS));const v=i.count!==void 0&&!me(i.count),S=v&&!i.ordinal&&i.count===0,b=i.context!==void 0&&(me(i.context)||typeof i.context=="number")&&i.context!=="",A=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);y.forEach(O=>{var j,E;this.isValidLookup(r)||(d=O,!s5[`${A[0]}-${O}`]&&((j=this.utils)!=null&&j.hasLoadedNamespace)&&!((E=this.utils)!=null&&E.hasLoadedNamespace(d))&&(s5[`${A[0]}-${O}`]=!0,this.logger.warn(`key "${o}" for languages "${A.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),A.forEach(T=>{var P;if(this.isValidLookup(r))return;u=T;const k=[m];if((P=this.i18nFormat)!=null&&P.addLookupKeys)this.i18nFormat.addLookupKeys(k,m,T,O,i);else{let V;v&&(V=this.pluralResolver.getSuffix(T,i.count,i));const U=`${this.options.pluralSeparator}zero`,$=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(v&&(k.push(m+V),i.ordinal&&V.indexOf($)===0&&k.push(m+V.replace($,this.options.pluralSeparator)),S&&k.push(m+U)),b){const Y=`${m}${this.options.contextSeparator}${i.context}`;k.push(Y),v&&(k.push(Y+V),i.ordinal&&V.indexOf($)===0&&k.push(Y+V.replace($,this.options.pluralSeparator)),S&&k.push(Y+U))}}let L;for(;L=k.pop();)this.isValidLookup(r)||(l=L,r=this.getResource(T,O,L,i))}))})}),{res:r,usedKey:o,exactUsedKey:l,usedLng:u,usedNS:d}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,r){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(e,i,r,o):this.resourceStore.getResource(e,i,r,o)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!me(e.replace);let o=r?e.replace:e;if(r&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!r){o={...o};for(const l of i)delete o[l]}return o}static hasDefaultValue(e){const i="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i===r.substring(0,i.length)&&e[r]!==void 0)return!0;return!1}}class l5{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Nn.create("languageUtils")}getScriptPartFromCode(e){if(e=$c(e),!e||e.indexOf("-")<0)return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=$c(e),!e||e.indexOf("-")<0)return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(me(e)&&e.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(e)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(r=>{if(i)return;const o=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(o))&&(i=o)}),!i&&this.options.supportedLngs&&e.forEach(r=>{if(i)return;const o=this.getLanguagePartFromCode(r);if(this.isSupportedCode(o))return i=o;i=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),me(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let r=e[i];return r||(r=e[this.getScriptPartFromCode(i)]),r||(r=e[this.formatLanguageCode(i)]),r||(r=e[this.getLanguagePartFromCode(i)]),r||(r=e.default),r||[]}toResolveHierarchy(e,i){const r=this.getFallbackCodes(i||this.options.fallbackLng||[],e),o=[],l=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return me(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(e))):me(e)&&l(this.formatLanguageCode(e)),r.forEach(u=>{o.indexOf(u)<0&&l(this.formatLanguageCode(u))}),o}}const c5={zero:0,one:1,two:2,few:3,many:4,other:5},u5={select:t=>t===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class iP{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=i,this.logger=Nn.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,i){this.rules[e]=i}clearCache(){this.pluralRulesCache={}}getRule(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=$c(e==="dev"?"en":e),o=i.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:r,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let u;try{u=new Intl.PluralRules(r,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),u5;if(!e.match(/-|_/))return u5;const p=this.languageUtils.getLanguagePartFromCode(e);u=this.getRule(p,i)}return this.pluralRulesCache[l]=u,u}needsPlural(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(e,i);return r||(r=this.getRule("dev",i)),(r==null?void 0:r.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,r).map(o=>`${i}${o}`)}getSuffixes(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(e,i);return r||(r=this.getRule("dev",i)),r?r.resolvedOptions().pluralCategories.sort((o,l)=>c5[o]-c5[l]).map(o=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(e,r);return o?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(i)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",i,r))}}const d5=function(t,e,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=Zz(t,e,i);return!l&&o&&me(i)&&(l=Sp(t,i,r),l===void 0&&(l=Sp(e,i,r))),l},R0=t=>t.replace(/\$/g,"$$$$");class aP{constructor(){var i;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Nn.create("interpolator"),this.options=e,this.format=((i=e==null?void 0:e.interpolation)==null?void 0:i.format)||(r=>r),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:r,useRawValueToEscape:o,prefix:l,prefixEscaped:u,suffix:d,suffixEscaped:p,formatSeparator:h,unescapeSuffix:m,unescapePrefix:y,nestingPrefix:v,nestingPrefixEscaped:S,nestingSuffix:b,nestingSuffixEscaped:A,nestingOptionsSeparator:O,maxReplaces:j,alwaysFormat:E}=e.interpolation;this.escape=i!==void 0?i:Kz,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?dr(l):u||"{{",this.suffix=d?dr(d):p||"}}",this.formatSeparator=h||",",this.unescapePrefix=m?"":y||"-",this.unescapeSuffix=this.unescapePrefix?"":m||"",this.nestingPrefix=v?dr(v):S||dr("$t("),this.nestingSuffix=b?dr(b):A||dr(")"),this.nestingOptionsSeparator=O||",",this.maxReplaces=j||1e3,this.alwaysFormat=E!==void 0?E:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,r)=>(i==null?void 0:i.source)===r?(i.lastIndex=0,i):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,i,r,o){var S;let l,u,d;const p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=b=>{if(b.indexOf(this.formatSeparator)<0){const E=d5(i,p,b,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(E,void 0,r,{...o,...i,interpolationkey:b}):E}const A=b.split(this.formatSeparator),O=A.shift().trim(),j=A.join(this.formatSeparator).trim();return this.format(d5(i,p,O,this.options.keySeparator,this.options.ignoreJSONStructure),j,r,{...o,...i,interpolationkey:O})};this.resetRegExp();const m=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,y=((S=o==null?void 0:o.interpolation)==null?void 0:S.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:b=>R0(b)},{regex:this.regexp,safeValue:b=>this.escapeValue?R0(this.escape(b)):R0(b)}].forEach(b=>{for(d=0;l=b.regex.exec(e);){const A=l[1].trim();if(u=h(A),u===void 0)if(typeof m=="function"){const j=m(e,l,o);u=me(j)?j:""}else if(o&&Object.prototype.hasOwnProperty.call(o,A))u="";else if(y){u=l[0];continue}else this.logger.warn(`missed to pass in variable ${A} for interpolating ${e}`),u="";else!me(u)&&!this.useRawValueToEscape&&(u=t5(u));const O=b.safeValue(u);if(e=e.replace(l[0],O),y?(b.regex.lastIndex+=u.length,b.regex.lastIndex-=l[0].length):b.regex.lastIndex=0,d++,d>=this.maxReplaces)break}}),e}nest(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,u;const d=(p,h)=>{const m=this.nestingOptionsSeparator;if(p.indexOf(m)<0)return p;const y=p.split(new RegExp(`${m}[ ]*{`));let v=`{${y[1]}`;p=y[0],v=this.interpolate(v,u);const S=v.match(/'/g),b=v.match(/"/g);(((S==null?void 0:S.length)??0)%2===0&&!b||b.length%2!==0)&&(v=v.replace(/'/g,'"'));try{u=JSON.parse(v),h&&(u={...h,...u})}catch(A){return this.logger.warn(`failed parsing options string in nesting for key ${p}`,A),`${p}${m}${v}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,p};for(;o=this.nestingRegexp.exec(e);){let p=[];u={...r},u=u.replace&&!me(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let h=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const m=o[1].split(this.formatSeparator).map(y=>y.trim());o[1]=m.shift(),p=m,h=!0}if(l=i(d.call(this,o[1].trim(),u),u),l&&o[0]===e&&!me(l))return l;me(l)||(l=t5(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),l=""),h&&(l=p.reduce((m,y)=>this.format(m,y,r.lng,{...r,interpolationkey:o[1].trim()}),l.trim())),e=e.replace(o[0],l),this.regexp.lastIndex=0}return e}}const rP=t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);e==="currency"&&o.indexOf(":")<0?i.currency||(i.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?i.range||(i.range=o.trim()):o.split(";").forEach(u=>{if(u){const[d,...p]=u.split(":"),h=p.join(":").trim().replace(/^'+|'+$/g,""),m=d.trim();i[m]||(i[m]=h),h==="false"&&(i[m]=!1),h==="true"&&(i[m]=!0),isNaN(h)||(i[m]=parseInt(h,10))}})}return{formatName:e,formatOptions:i}},fr=t=>{const e={};return(i,r,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const u=r+JSON.stringify(l);let d=e[u];return d||(d=t($c(r),o),e[u]=d),d(i)}};class sP{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Nn.create("formatter"),this.options=e,this.formats={number:fr((i,r)=>{const o=new Intl.NumberFormat(i,{...r});return l=>o.format(l)}),currency:fr((i,r)=>{const o=new Intl.NumberFormat(i,{...r,style:"currency"});return l=>o.format(l)}),datetime:fr((i,r)=>{const o=new Intl.DateTimeFormat(i,{...r});return l=>o.format(l)}),relativetime:fr((i,r)=>{const o=new Intl.RelativeTimeFormat(i,{...r});return l=>o.format(l,r.range||"day")}),list:fr((i,r)=>{const o=new Intl.ListFormat(i,{...r});return l=>o.format(l)})},this.init(e)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=fr(i)}format(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=i.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(d=>d.indexOf(")")>-1)){const d=l.findIndex(p=>p.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,d)].join(this.formatSeparator)}return l.reduce((d,p)=>{var y;const{formatName:h,formatOptions:m}=rP(p);if(this.formats[h]){let v=d;try{const S=((y=o==null?void 0:o.formatParams)==null?void 0:y[o.interpolationkey])||{},b=S.locale||S.lng||o.locale||o.lng||r;v=this.formats[h](d,b,{...m,...o,...S})}catch(S){this.logger.warn(S)}return v}else this.logger.warn(`there was no format function for ${h}`);return d},e)}}const oP=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class lP extends lu{constructor(e,i,r){var l,u;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=i,this.services=r,this.languageUtils=r.languageUtils,this.options=o,this.logger=Nn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(u=(l=this.backend)==null?void 0:l.init)==null||u.call(l,r,o.backend,o)}queueLoad(e,i,r,o){const l={},u={},d={},p={};return e.forEach(h=>{let m=!0;i.forEach(y=>{const v=`${h}|${y}`;!r.reload&&this.store.hasResourceBundle(h,y)?this.state[v]=2:this.state[v]<0||(this.state[v]===1?u[v]===void 0&&(u[v]=!0):(this.state[v]=1,m=!1,u[v]===void 0&&(u[v]=!0),l[v]===void 0&&(l[v]=!0),p[y]===void 0&&(p[y]=!0)))}),m||(d[h]=!0)}),(Object.keys(l).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(u),toLoadLanguages:Object.keys(d),toLoadNamespaces:Object.keys(p)}}loaded(e,i,r){const o=e.split("|"),l=o[0],u=o[1];i&&this.emit("failedLoading",l,u,i),!i&&r&&this.store.addResourceBundle(l,u,r,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&r&&(this.state[e]=0);const d={};this.queue.forEach(p=>{Xz(p.loaded,[l],u),oP(p,e),i&&p.errors.push(i),p.pendingCount===0&&!p.done&&(Object.keys(p.loaded).forEach(h=>{d[h]||(d[h]={});const m=p.loaded[h];m.length&&m.forEach(y=>{d[h][y]===void 0&&(d[h][y]=!0)})}),p.done=!0,p.errors.length?p.callback(p.errors):p.callback())}),this.emit("loaded",d),this.queue=this.queue.filter(p=>!p.done)}read(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!e.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:r,tried:o,wait:l,callback:u});return}this.readingCalls++;const d=(h,m)=>{if(this.readingCalls--,this.waitingReads.length>0){const y=this.waitingReads.shift();this.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(h&&m&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,i,r,o+1,l*2,u)},l);return}u(h,m)},p=this.backend[r].bind(this.backend);if(p.length===2){try{const h=p(e,i);h&&typeof h.then=="function"?h.then(m=>d(null,m)).catch(d):d(null,h)}catch(h){d(h)}return}return p(e,i,d)}prepareLoading(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();me(e)&&(e=this.languageUtils.toResolveHierarchy(e)),me(i)&&(i=[i]);const l=this.queueLoad(e,i,r,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(u=>{this.loadOne(u)})}load(e,i,r){this.prepareLoading(e,i,{},r)}reload(e,i,r){this.prepareLoading(e,i,{reload:!0},r)}loadOne(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=e.split("|"),o=r[0],l=r[1];this.read(o,l,"read",void 0,void 0,(u,d)=>{u&&this.logger.warn(`${i}loading namespace ${l} for language ${o} failed`,u),!u&&d&&this.logger.log(`${i}loaded namespace ${l} for language ${o}`,d),this.loaded(e,u,d)})}saveMissing(e,i,r,o,l){var p,h,m,y,v;let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(p=this.services)==null?void 0:p.utils)!=null&&h.hasLoadedNamespace&&!((y=(m=this.services)==null?void 0:m.utils)!=null&&y.hasLoadedNamespace(i))){this.logger.warn(`did not save key "${r}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if((v=this.backend)!=null&&v.create){const S={...u,isUpdate:l},b=this.backend.create.bind(this.backend);if(b.length<6)try{let A;b.length===5?A=b(e,i,r,o,S):A=b(e,i,r,o),A&&typeof A.then=="function"?A.then(O=>d(null,O)).catch(d):d(null,A)}catch(A){d(A)}else b(e,i,r,o,d,S)}!e||!e[0]||this.store.addResource(e[0],i,r,o)}}}const f5=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),me(t[1])&&(e.defaultValue=t[1]),me(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const i=t[3]||t[2];Object.keys(i).forEach(r=>{e[r]=i[r]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),p5=t=>{var e,i;return me(t.ns)&&(t.ns=[t.ns]),me(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),me(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),((i=(e=t.supportedLngs)==null?void 0:e.indexOf)==null?void 0:i.call(e,"cimode"))<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),typeof t.initImmediate=="boolean"&&(t.initAsync=t.initImmediate),t},sc=()=>{},cP=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(i=>{typeof t[i]=="function"&&(t[i]=t[i].bind(t))})};class xo extends lu{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=p5(e),this.services={},this.logger=Nn,this.modules={external:[]},cP(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(){var e=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(r=i,i={}),i.defaultNS==null&&i.ns&&(me(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=f5();this.options={...o,...this.options,...p5(i)},this.options.interpolation={...o.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const l=m=>m?typeof m=="function"?new m:m:null;if(!this.options.isClone){this.modules.logger?Nn.init(l(this.modules.logger),this.options):Nn.init(null,this.options);let m;this.modules.formatter?m=this.modules.formatter:m=sP;const y=new l5(this.options);this.store=new r5(this.options.resources,this.options);const v=this.services;v.logger=Nn,v.resourceStore=this.store,v.languageUtils=y,v.pluralResolver=new iP(y,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),m&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=l(m),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new aP(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new lP(l(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",function(S){for(var b=arguments.length,A=new Array(b>1?b-1:0),O=1;O<b;O++)A[O-1]=arguments[O];e.emit(S,...A)}),this.modules.languageDetector&&(v.languageDetector=l(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=l(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new _c(this.services,this.options),this.translator.on("*",function(S){for(var b=arguments.length,A=new Array(b>1?b-1:0),O=1;O<b;O++)A[O-1]=arguments[O];e.emit(S,...A)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,r||(r=sc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(m=>{this[m]=function(){return e.store[m](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(m=>{this[m]=function(){return e.store[m](...arguments),e}});const p=Fs(),h=()=>{const m=(y,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(v),r(y,v)};if(this.languages&&!this.isInitialized)return m(null,this.t.bind(this));this.changeLanguage(this.options.lng,m)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),p}loadResources(e){var l,u;let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:sc;const o=me(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const d=[],p=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(y=>{y!=="cimode"&&d.indexOf(y)<0&&d.push(y)})};o?p(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(m=>p(m)),(u=(l=this.options.preload)==null?void 0:l.forEach)==null||u.call(l,h=>p(h)),this.services.backendConnector.load(d,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(h)})}else r(null)}reloadResources(e,i,r){const o=Fs();return typeof e=="function"&&(r=e,e=void 0),typeof i=="function"&&(r=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),r||(r=sc),this.services.backendConnector.reload(e,i,l=>{o.resolve(),r(l)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Gv.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let i=0;i<this.languages.length;i++){const r=this.languages[i];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(e,i){var r=this;this.isLanguageChangingTo=e;const o=Fs();this.emit("languageChanging",e);const l=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},u=(p,h)=>{h?(l(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,o.resolve(function(){return r.t(...arguments)}),i&&i(p,function(){return r.t(...arguments)})},d=p=>{var m,y;!e&&!p&&this.services.languageDetector&&(p=[]);const h=me(p)?p:this.services.languageUtils.getBestMatchFromCodes(p);h&&(this.language||l(h),this.translator.language||this.translator.changeLanguage(h),(y=(m=this.services.languageDetector)==null?void 0:m.cacheUserLanguage)==null||y.call(m,h)),this.loadResources(h,v=>{u(v,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?d(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(d):this.services.languageDetector.detect(d):d(e),o}getFixedT(e,i,r){var o=this;const l=function(u,d){let p;if(typeof d!="object"){for(var h=arguments.length,m=new Array(h>2?h-2:0),y=2;y<h;y++)m[y-2]=arguments[y];p=o.options.overloadTranslationOptionHandler([u,d].concat(m))}else p={...d};p.lng=p.lng||l.lng,p.lngs=p.lngs||l.lngs,p.ns=p.ns||l.ns,p.keyPrefix!==""&&(p.keyPrefix=p.keyPrefix||r||l.keyPrefix);const v=o.options.keySeparator||".";let S;return p.keyPrefix&&Array.isArray(u)?S=u.map(b=>`${p.keyPrefix}${v}${b}`):S=p.keyPrefix?`${p.keyPrefix}${v}${u}`:u,o.t(S,p)};return me(e)?l.lng=e:l.lngs=e,l.ns=i,l.keyPrefix=r,l}t(){var o;for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(o=this.translator)==null?void 0:o.translate(...i)}exists(){var o;for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(o=this.translator)==null?void 0:o.exists(...i)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=i.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const u=(d,p)=>{const h=this.services.backendConnector.state[`${d}|${p}`];return h===-1||h===0||h===2};if(i.precheck){const d=i.precheck(this,u);if(d!==void 0)return d}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(r,e)&&(!o||u(l,e)))}loadNamespaces(e,i){const r=Fs();return this.options.ns?(me(e)&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{r.resolve(),i&&i(o)}),r):(i&&i(),Promise.resolve())}loadLanguages(e,i){const r=Fs();me(e)&&(e=[e]);const o=this.options.preload||[],l=e.filter(u=>o.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return l.length?(this.options.preload=o.concat(l),this.loadResources(u=>{r.resolve(),i&&i(u)}),r):(i&&i(),Promise.resolve())}dir(e){var o,l;if(e||(e=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!e)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=((l=this.services)==null?void 0:l.languageUtils)||new l5(f5());return i.indexOf(r.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new xo(e,i)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:sc;const r=e.forkResourceStore;r&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},l=new xo(o);if((e.debug!==void 0||e.prefix!==void 0)&&(l.logger=l.logger.clone(e)),["store","services","language"].forEach(d=>{l[d]=this[d]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},r){const d=Object.keys(this.store.data).reduce((p,h)=>(p[h]={...this.store.data[h]},Object.keys(p[h]).reduce((m,y)=>(m[y]={...p[h][y]},m),{})),{});l.store=new r5(d,o),l.services.resourceStore=l.store}return l.translator=new _c(l.services,o),l.translator.on("*",function(d){for(var p=arguments.length,h=new Array(p>1?p-1:0),m=1;m<p;m++)h[m-1]=arguments[m];l.emit(d,...h)}),l.init(o,i),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const jt=xo.createInstance();jt.createInstance=xo.createInstance;jt.createInstance;jt.dir;jt.init;jt.loadResources;jt.reloadResources;jt.use;jt.changeLanguage;jt.getFixedT;jt.t;jt.exists;jt.setDefaultNamespace;jt.hasLoadedNamespace;jt.loadNamespaces;jt.loadLanguages;function Cp(t){"@babel/helpers - typeof";return Cp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cp(t)}function qv(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Cp(XMLHttpRequest))==="object"}function uP(t){return!!t&&typeof t.then=="function"}function dP(t){return uP(t)?t:Promise.resolve(t)}const fP="modulepreload",pP=function(t){return"/"+t},h5={},hP=function(e,i,r){let o=Promise.resolve();if(i&&i.length>0){let u=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=u(i.map(h=>{if(h=pP(h),h in h5)return;h5[h]=!0;const m=h.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${y}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":fP,m||(v.as="script"),v.crossOrigin="",v.href=h,p&&v.setAttribute("nonce",p),document.head.appendChild(v),m)return new Promise((S,b)=>{v.addEventListener("load",S),v.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return o.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};function m5(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function g5(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?m5(Object(i),!0).forEach(function(r){mP(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m5(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function mP(t,e,i){return(e=gP(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function gP(t){var e=xP(t,"string");return Ca(e)=="symbol"?e:e+""}function xP(t,e){if(Ca(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e);if(Ca(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ca(t){"@babel/helpers - typeof";return Ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ca(t)}var qi=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?qi=global.fetch:typeof window<"u"&&window.fetch&&(qi=window.fetch);var yo;qv()&&(typeof global<"u"&&global.XMLHttpRequest?yo=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(yo=window.XMLHttpRequest));var Ic;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Ic=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Ic=window.ActiveXObject));typeof qi!="function"&&(qi=void 0);if(!qi&&!yo&&!Ic)try{hP(()=>import("./browser-ponyfill-CF7IYgeK.js").then(t=>t.b),[]).then(function(t){qi=t.default}).catch(function(){})}catch{}var Tp=function(e,i){if(i&&Ca(i)==="object"){var r="";for(var o in i)r+="&"+encodeURIComponent(o)+"="+encodeURIComponent(i[o]);if(!r)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+r.slice(1)}return e},x5=function(e,i,r,o){var l=function(p){if(!p.ok)return r(p.statusText||"Error",{status:p.status});p.text().then(function(h){r(null,{status:p.status,data:h})}).catch(r)};if(o){var u=o(e,i);if(u instanceof Promise){u.then(l).catch(r);return}}typeof fetch=="function"?fetch(e,i).then(l).catch(r):qi(e,i).then(l).catch(r)},y5=!1,yP=function(e,i,r,o){e.queryStringParams&&(i=Tp(i,e.queryStringParams));var l=g5({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),r&&(l["Content-Type"]="application/json");var u=typeof e.requestOptions=="function"?e.requestOptions(r):e.requestOptions,d=g5({method:r?"POST":"GET",body:r?e.stringify(r):void 0,headers:l},y5?{}:u),p=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{x5(i,d,o,p)}catch(h){if(!u||Object.keys(u).length===0||!h.message||h.message.indexOf("not implemented")<0)return o(h);try{Object.keys(u).forEach(function(m){delete d[m]}),x5(i,d,o,p),y5=!0}catch(m){o(m)}}},vP=function(e,i,r,o){r&&Ca(r)==="object"&&(r=Tp("",r).slice(1)),e.queryStringParams&&(i=Tp(i,e.queryStringParams));try{var l=yo?new yo:new Ic("MSXML2.XMLHTTP.3.0");l.open(r?"POST":"GET",i,1),e.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!e.withCredentials,r&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var u=e.customHeaders;if(u=typeof u=="function"?u():u,u)for(var d in u)l.setRequestHeader(d,u[d]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(r)}catch(p){console&&console.log(p)}},wP=function(e,i,r,o){if(typeof r=="function"&&(o=r,r=void 0),o=o||function(){},qi&&i.indexOf("file:")!==0)return yP(e,i,r,o);if(qv()||typeof ActiveXObject=="function")return vP(e,i,r,o);o(new Error("No fetch and no xhr implementation found!"))};function kr(t){"@babel/helpers - typeof";return kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kr(t)}function v5(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function k0(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?v5(Object(i),!0).forEach(function(r){Yv(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v5(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function bP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function SP(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Fv(r.key),r)}}function CP(t,e,i){return e&&SP(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Yv(t,e,i){return(e=Fv(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Fv(t){var e=TP(t,"string");return kr(e)=="symbol"?e:e+""}function TP(t,e){if(kr(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e);if(kr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var EP=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(i){return JSON.parse(i)},stringify:JSON.stringify,parsePayload:function(i,r,o){return Yv({},r,o||"")},parseLoadPayload:function(i,r){},request:wP,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Xv=function(){function t(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};bP(this,t),this.services=e,this.options=i,this.allOptions=r,this.type="backend",this.init(e,i,r)}return CP(t,[{key:"init",value:function(i){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=i,this.options=k0(k0(k0({},EP()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var u=setInterval(function(){return r.reload()},this.options.reloadInterval);kr(u)==="object"&&typeof u.unref=="function"&&u.unref()}}},{key:"readMulti",value:function(i,r,o){this._readAny(i,i,r,r,o)}},{key:"read",value:function(i,r,o){this._readAny([i],i,[r],r,o)}},{key:"_readAny",value:function(i,r,o,l,u){var d=this,p=this.options.loadPath;typeof this.options.loadPath=="function"&&(p=this.options.loadPath(i,o)),p=dP(p),p.then(function(h){if(!h)return u(null,{});var m=d.services.interpolator.interpolate(h,{lng:i.join("+"),ns:o.join("+")});d.loadUrl(m,u,r,l)})}},{key:"loadUrl",value:function(i,r,o,l){var u=this,d=typeof o=="string"?[o]:o,p=typeof l=="string"?[l]:l,h=this.options.parseLoadPayload(d,p);this.options.request(this.options,i,h,function(m,y){if(y&&(y.status>=500&&y.status<600||!y.status))return r("failed loading "+i+"; status code: "+y.status,!0);if(y&&y.status>=400&&y.status<500)return r("failed loading "+i+"; status code: "+y.status,!1);if(!y&&m&&m.message){var v=m.message.toLowerCase(),S=["failed","fetch","network","load"].find(function(O){return v.indexOf(O)>-1});if(S)return r("failed loading "+i+": "+m.message,!0)}if(m)return r(m,!1);var b,A;try{typeof y.data=="string"?b=u.options.parse(y.data,o,l):b=y.data}catch{A="failed parsing "+i+" to json"}if(A)return r(A,!1);r(null,b)})}},{key:"create",value:function(i,r,o,l,u){var d=this;if(this.options.addPath){typeof i=="string"&&(i=[i]);var p=this.options.parsePayload(r,o,l),h=0,m=[],y=[];i.forEach(function(v){var S=d.options.addPath;typeof d.options.addPath=="function"&&(S=d.options.addPath(v,r));var b=d.services.interpolator.interpolate(S,{lng:v,ns:r});d.options.request(d.options,b,p,function(A,O){h+=1,m.push(A),y.push(O),h===i.length&&typeof u=="function"&&u(m,y)})})}}},{key:"reload",value:function(){var i=this,r=this.services,o=r.backendConnector,l=r.languageUtils,u=r.logger,d=o.language;if(!(d&&d.toLowerCase()==="cimode")){var p=[],h=function(y){var v=l.toResolveHierarchy(y);v.forEach(function(S){p.indexOf(S)<0&&p.push(S)})};h(d),this.allOptions.preload&&this.allOptions.preload.forEach(function(m){return h(m)}),p.forEach(function(m){i.allOptions.ns.forEach(function(y){o.read(m,y,"read",null,null,function(v,S){v&&u.warn("loading namespace ".concat(y," for language ").concat(m," failed"),v),!v&&S&&u.log("loaded namespace ".concat(y," for language ").concat(m),S),o.loaded("".concat(m,"|").concat(y),v,S)})})})}}}])}();Xv.type="backend";const{slice:AP,forEach:MP}=[];function jP(t){return MP.call(AP.call(arguments,1),e=>{if(e)for(const i in e)t[i]===void 0&&(t[i]=e[i])}),t}function LP(t){return typeof t!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(i=>i.test(t))}const w5=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,OP=function(t,e){const r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(e);let l=`${t}=${o}`;if(r.maxAge>0){const u=r.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(u)}`}if(r.domain){if(!w5.test(r.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${r.domain}`}if(r.path){if(!w5.test(r.path))throw new TypeError("option path is invalid");l+=`; Path=${r.path}`}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${r.expires.toUTCString()}`}if(r.httpOnly&&(l+="; HttpOnly"),r.secure&&(l+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(l+="; Partitioned"),l},b5={create(t,e,i,r){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};i&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+i*60*1e3)),r&&(o.domain=r),document.cookie=OP(t,e,o)},read(t){const e=`${t}=`,i=document.cookie.split(";");for(let r=0;r<i.length;r++){let o=i[r];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(e)===0)return o.substring(e.length,o.length)}return null},remove(t,e){this.create(t,"",-1,e)}};var RP={name:"cookie",lookup(t){let{lookupCookie:e}=t;if(e&&typeof document<"u")return b5.read(e)||void 0},cacheUserLanguage(t,e){let{lookupCookie:i,cookieMinutes:r,cookieDomain:o,cookieOptions:l}=e;i&&typeof document<"u"&&b5.create(i,t,r,o,l)}},kP={name:"querystring",lookup(t){var r;let{lookupQuerystring:e}=t,i;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((r=window.location.hash)==null?void 0:r.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let d=0;d<u.length;d++){const p=u[d].indexOf("=");p>0&&u[d].substring(0,p)===e&&(i=u[d].substring(p+1))}}return i}},DP={name:"hash",lookup(t){var o;let{lookupHash:e,lookupFromHashIndex:i}=t,r;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const u=l.substring(1);if(e){const d=u.split("&");for(let p=0;p<d.length;p++){const h=d[p].indexOf("=");h>0&&d[p].substring(0,h)===e&&(r=d[p].substring(h+1))}}if(r)return r;if(!r&&i>-1){const d=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(d)?(o=d[typeof i=="number"?i:0])==null?void 0:o.replace("/",""):void 0}}}return r}};let pr=null;const S5=()=>{if(pr!==null)return pr;try{if(pr=typeof window<"u"&&window.localStorage!==null,!pr)return!1;const t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{pr=!1}return pr};var HP={name:"localStorage",lookup(t){let{lookupLocalStorage:e}=t;if(e&&S5())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupLocalStorage:i}=e;i&&S5()&&window.localStorage.setItem(i,t)}};let hr=null;const C5=()=>{if(hr!==null)return hr;try{if(hr=typeof window<"u"&&window.sessionStorage!==null,!hr)return!1;const t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{hr=!1}return hr};var VP={name:"sessionStorage",lookup(t){let{lookupSessionStorage:e}=t;if(e&&C5())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupSessionStorage:i}=e;i&&C5()&&window.sessionStorage.setItem(i,t)}},zP={name:"navigator",lookup(t){const e=[];if(typeof navigator<"u"){const{languages:i,userLanguage:r,language:o}=navigator;if(i)for(let l=0;l<i.length;l++)e.push(i[l]);r&&e.push(r),o&&e.push(o)}return e.length>0?e:void 0}},PP={name:"htmlTag",lookup(t){let{htmlTag:e}=t,i;const r=e||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(i=r.getAttribute("lang")),i}},NP={name:"path",lookup(t){var o;let{lookupFromPathIndex:e}=t;if(typeof window>"u")return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(i)?(o=i[typeof e=="number"?e:0])==null?void 0:o.replace("/",""):void 0}},BP={name:"subdomain",lookup(t){var o,l;let{lookupFromSubdomainIndex:e}=t;const i=typeof e=="number"?e+1:1,r=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(r)return r[i]}};let Zv=!1;try{document.cookie,Zv=!0}catch{}const Wv=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Zv||Wv.splice(1,1);const $P=()=>({order:Wv,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:t=>t});class Kv{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,i)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=jP(i,this.options||{},$P()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(RP),this.addDetector(kP),this.addDetector(HP),this.addDetector(VP),this.addDetector(zP),this.addDetector(PP),this.addDetector(NP),this.addDetector(BP),this.addDetector(DP)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,i=[];return e.forEach(r=>{if(this.detectors[r]){let o=this.detectors[r].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(i=i.concat(o))}}),i=i.filter(r=>r!=null&&!LP(r)).map(r=>this.options.convertDetectedLanguage(r)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}cacheUserLanguage(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;i&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||i.forEach(r=>{this.detectors[r]&&this.detectors[r].cacheUserLanguage(e,this.options)}))}}Kv.type="languageDetector";jt.use(Xv).use(Kv).use(Oj).init({supportedLngs:["en","ru","es","uk"],fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const UP=R.createContext(void 0),_P=({children:t})=>{const{i18n:e}=Th(),i=r=>{e.changeLanguage(r).then(()=>{window.location.reload()})};return x.jsx(UP.Provider,{value:{language:e.language,setLanguage:i},children:t})};R9.createRoot(document.getElementById("root")).render(x.jsxs(Le.StrictMode,{children:[x.jsx(Wb,{styles:nS}),x.jsx(Zw,{basename:"/",children:x.jsx(_P,{children:x.jsx(qz,{})})})]}));export{IP as c,Gc as g};
