function P9(e,t){for(var i=0;i<t.length;i++){const r=t[i];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();var jN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ef={exports:{}},Ns={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c3;function N9(){if(c3)return Ns;c3=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var d in o)d!=="key"&&(l[d]=o[d])}else l=o;return o=l.ref,{$$typeof:e,type:r,key:u,ref:o!==void 0?o:null,props:l}}return Ns.Fragment=t,Ns.jsx=i,Ns.jsxs=i,Ns}var u3;function $9(){return u3||(u3=1,Ef.exports=N9()),Ef.exports}var m=$9(),jf={exports:{}},$s={},Af={exports:{}},Mf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d3;function B9(){return d3||(d3=1,function(e){function t(N,X){var Q=N.length;N.push(X);e:for(;0<Q;){var ee=Q-1>>>1,k=N[ee];if(0<o(k,X))N[ee]=X,N[Q]=k,Q=ee;else break e}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var X=N[0],Q=N.pop();if(Q!==X){N[0]=Q;e:for(var ee=0,k=N.length,F=k>>>1;ee<F;){var ne=2*(ee+1)-1,ie=N[ne],le=ne+1,we=N[le];if(0>o(ie,Q))le<k&&0>o(we,ie)?(N[ee]=we,N[le]=Q,ee=le):(N[ee]=ie,N[ne]=Q,ee=ne);else if(le<k&&0>o(we,Q))N[ee]=we,N[le]=Q,ee=le;else break e}}return X}function o(N,X){var Q=N.sortIndex-X.sortIndex;return Q!==0?Q:N.id-X.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var p=[],h=[],g=1,y=null,v=3,C=!1,S=!1,E=!1,O=!1,M=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var X=i(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=N)r(h),X.sortIndex=X.expirationTime,t(p,X);else break;X=i(h)}}function L(N){if(E=!1,D(N),!S)if(i(p)!==null)S=!0,$||($=!0,te());else{var X=i(h);X!==null&&re(L,X.startTime-N)}}var $=!1,V=-1,_=5,q=-1;function Y(){return O?!0:!(e.unstable_now()-q<_)}function W(){if(O=!1,$){var N=e.unstable_now();q=N;var X=!0;try{e:{S=!1,E&&(E=!1,T(V),V=-1),C=!0;var Q=v;try{t:{for(D(N),y=i(p);y!==null&&!(y.expirationTime>N&&Y());){var ee=y.callback;if(typeof ee=="function"){y.callback=null,v=y.priorityLevel;var k=ee(y.expirationTime<=N);if(N=e.unstable_now(),typeof k=="function"){y.callback=k,D(N),X=!0;break t}y===i(p)&&r(p),D(N)}else r(p);y=i(p)}if(y!==null)X=!0;else{var F=i(h);F!==null&&re(L,F.startTime-N),X=!1}}break e}finally{y=null,v=Q,C=!1}X=void 0}}finally{X?te():$=!1}}}var te;if(typeof j=="function")te=function(){j(W)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ce=se.port2;se.port1.onmessage=W,te=function(){ce.postMessage(null)}}else te=function(){M(W,0)};function re(N,X){V=M(function(){N(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(N){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var Q=v;v=X;try{return N()}finally{v=Q}},e.unstable_requestPaint=function(){O=!0},e.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=v;v=N;try{return X()}finally{v=Q}},e.unstable_scheduleCallback=function(N,X,Q){var ee=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ee+Q:ee):Q=ee,N){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=Q+k,N={id:g++,callback:X,priorityLevel:N,startTime:Q,expirationTime:k,sortIndex:-1},Q>ee?(N.sortIndex=Q,t(h,N),i(p)===null&&N===i(h)&&(E?(T(V),V=-1):E=!0,re(L,Q-ee))):(N.sortIndex=k,t(p,N),S||C||(S=!0,$||($=!0,te()))),N},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(N){var X=v;return function(){var Q=v;v=X;try{return N.apply(this,arguments)}finally{v=Q}}}}(Mf)),Mf}var f3;function U9(){return f3||(f3=1,Af.exports=B9()),Af.exports}var Lf={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p3;function _9(){if(p3)return ge;p3=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(k){return k===null||typeof k!="object"?null:(k=y&&k[y]||k["@@iterator"],typeof k=="function"?k:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,E={};function O(k,F,ne){this.props=k,this.context=F,this.refs=E,this.updater=ne||C}O.prototype.isReactComponent={},O.prototype.setState=function(k,F){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,F,"setState")},O.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function M(){}M.prototype=O.prototype;function T(k,F,ne){this.props=k,this.context=F,this.refs=E,this.updater=ne||C}var j=T.prototype=new M;j.constructor=T,S(j,O.prototype),j.isPureReactComponent=!0;var D=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},$=Object.prototype.hasOwnProperty;function V(k,F,ne,ie,le,we){return ne=we.ref,{$$typeof:e,type:k,key:F,ref:ne!==void 0?ne:null,props:we}}function _(k,F){return V(k.type,F,void 0,void 0,void 0,k.props)}function q(k){return typeof k=="object"&&k!==null&&k.$$typeof===e}function Y(k){var F={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ne){return F[ne]})}var W=/\/+/g;function te(k,F){return typeof k=="object"&&k!==null&&k.key!=null?Y(""+k.key):F.toString(36)}function se(){}function ce(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(se,se):(k.status="pending",k.then(function(F){k.status==="pending"&&(k.status="fulfilled",k.value=F)},function(F){k.status==="pending"&&(k.status="rejected",k.reason=F)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function re(k,F,ne,ie,le){var we=typeof k;(we==="undefined"||we==="boolean")&&(k=null);var de=!1;if(k===null)de=!0;else switch(we){case"bigint":case"string":case"number":de=!0;break;case"object":switch(k.$$typeof){case e:case t:de=!0;break;case g:return de=k._init,re(de(k._payload),F,ne,ie,le)}}if(de)return le=le(k),de=ie===""?"."+te(k,0):ie,D(le)?(ne="",de!=null&&(ne=de.replace(W,"$&/")+"/"),re(le,F,ne,"",function(bt){return bt})):le!=null&&(q(le)&&(le=_(le,ne+(le.key==null||k&&k.key===le.key?"":(""+le.key).replace(W,"$&/")+"/")+de)),F.push(le)),1;de=0;var ot=ie===""?".":ie+":";if(D(k))for(var Le=0;Le<k.length;Le++)ie=k[Le],we=ot+te(ie,Le),de+=re(ie,F,ne,we,le);else if(Le=v(k),typeof Le=="function")for(k=Le.call(k),Le=0;!(ie=k.next()).done;)ie=ie.value,we=ot+te(ie,Le++),de+=re(ie,F,ne,we,le);else if(we==="object"){if(typeof k.then=="function")return re(ce(k),F,ne,ie,le);throw F=String(k),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return de}function N(k,F,ne){if(k==null)return k;var ie=[],le=0;return re(k,ie,"","",function(we){return F.call(ne,we,le++)}),ie}function X(k){if(k._status===-1){var F=k._result;F=F(),F.then(function(ne){(k._status===0||k._status===-1)&&(k._status=1,k._result=ne)},function(ne){(k._status===0||k._status===-1)&&(k._status=2,k._result=ne)}),k._status===-1&&(k._status=0,k._result=F)}if(k._status===1)return k._result.default;throw k._result}var Q=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function ee(){}return ge.Children={map:N,forEach:function(k,F,ne){N(k,function(){F.apply(this,arguments)},ne)},count:function(k){var F=0;return N(k,function(){F++}),F},toArray:function(k){return N(k,function(F){return F})||[]},only:function(k){if(!q(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ge.Component=O,ge.Fragment=i,ge.Profiler=o,ge.PureComponent=T,ge.StrictMode=r,ge.Suspense=p,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ge.__COMPILER_RUNTIME={__proto__:null,c:function(k){return L.H.useMemoCache(k)}},ge.cache=function(k){return function(){return k.apply(null,arguments)}},ge.cloneElement=function(k,F,ne){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var ie=S({},k.props),le=k.key,we=void 0;if(F!=null)for(de in F.ref!==void 0&&(we=void 0),F.key!==void 0&&(le=""+F.key),F)!$.call(F,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&F.ref===void 0||(ie[de]=F[de]);var de=arguments.length-2;if(de===1)ie.children=ne;else if(1<de){for(var ot=Array(de),Le=0;Le<de;Le++)ot[Le]=arguments[Le+2];ie.children=ot}return V(k.type,le,void 0,void 0,we,ie)},ge.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},ge.createElement=function(k,F,ne){var ie,le={},we=null;if(F!=null)for(ie in F.key!==void 0&&(we=""+F.key),F)$.call(F,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(le[ie]=F[ie]);var de=arguments.length-2;if(de===1)le.children=ne;else if(1<de){for(var ot=Array(de),Le=0;Le<de;Le++)ot[Le]=arguments[Le+2];le.children=ot}if(k&&k.defaultProps)for(ie in de=k.defaultProps,de)le[ie]===void 0&&(le[ie]=de[ie]);return V(k,we,void 0,void 0,null,le)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(k){return{$$typeof:d,render:k}},ge.isValidElement=q,ge.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:X}},ge.memo=function(k,F){return{$$typeof:h,type:k,compare:F===void 0?null:F}},ge.startTransition=function(k){var F=L.T,ne={};L.T=ne;try{var ie=k(),le=L.S;le!==null&&le(ne,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(ee,Q)}catch(we){Q(we)}finally{L.T=F}},ge.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ge.use=function(k){return L.H.use(k)},ge.useActionState=function(k,F,ne){return L.H.useActionState(k,F,ne)},ge.useCallback=function(k,F){return L.H.useCallback(k,F)},ge.useContext=function(k){return L.H.useContext(k)},ge.useDebugValue=function(){},ge.useDeferredValue=function(k,F){return L.H.useDeferredValue(k,F)},ge.useEffect=function(k,F,ne){var ie=L.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(k,F)},ge.useId=function(){return L.H.useId()},ge.useImperativeHandle=function(k,F,ne){return L.H.useImperativeHandle(k,F,ne)},ge.useInsertionEffect=function(k,F){return L.H.useInsertionEffect(k,F)},ge.useLayoutEffect=function(k,F){return L.H.useLayoutEffect(k,F)},ge.useMemo=function(k,F){return L.H.useMemo(k,F)},ge.useOptimistic=function(k,F){return L.H.useOptimistic(k,F)},ge.useReducer=function(k,F,ne){return L.H.useReducer(k,F,ne)},ge.useRef=function(k){return L.H.useRef(k)},ge.useState=function(k){return L.H.useState(k)},ge.useSyncExternalStore=function(k,F,ne){return L.H.useSyncExternalStore(k,F,ne)},ge.useTransition=function(){return L.H.useTransition()},ge.version="19.1.1",ge}var h3;function Rp(){return h3||(h3=1,Lf.exports=_9()),Lf.exports}var Of={exports:{}},Tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m3;function I9(){if(m3)return Tt;m3=1;var e=Rp();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,h,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:p,containerInfo:h,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tt.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(p,h,null,g)},Tt.flushSync=function(p){var h=u.T,g=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=h,r.p=g,r.d.f()}},Tt.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},Tt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Tt.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,y=d(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,C=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:C}):g==="script"&&r.d.X(p,{crossOrigin:y,integrity:v,fetchPriority:C,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Tt.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},Tt.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,y=d(g,h.crossOrigin);r.d.L(p,g,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Tt.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=d(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},Tt.requestFormReset=function(p){r.d.r(p)},Tt.unstable_batchedUpdates=function(p,h){return p(h)},Tt.useFormState=function(p,h,g){return u.H.useFormState(p,h,g)},Tt.useFormStatus=function(){return u.H.useHostTransitionStatus()},Tt.version="19.1.1",Tt}var g3;function G9(){if(g3)return Of.exports;g3=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Of.exports=I9(),Of.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x3;function q9(){if(x3)return $s;x3=1;var e=U9(),t=Rp(),i=G9();function r(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,s=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(s=a.return),n=a.return;while(n)}return a.tag===3?s:null}function u(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(r(188))}function p(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(r(188));return a!==n?null:n}for(var s=n,c=a;;){var f=s.return;if(f===null)break;var x=f.alternate;if(x===null){if(c=f.return,c!==null){s=c;continue}break}if(f.child===x.child){for(x=f.child;x;){if(x===s)return d(f),n;if(x===c)return d(f),a;x=x.sibling}throw Error(r(188))}if(s.return!==c.return)s=f,c=x;else{for(var b=!1,A=f.child;A;){if(A===s){b=!0,s=f,c=x;break}if(A===c){b=!0,c=f,s=x;break}A=A.sibling}if(!b){for(A=x.child;A;){if(A===s){b=!0,s=x,c=f;break}if(A===c){b=!0,c=x,s=f;break}A=A.sibling}if(!b)throw Error(r(189))}}if(s.alternate!==c)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?n:a}function h(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=h(n),a!==null)return a;n=n.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),T=Symbol.for("react.consumer"),j=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=W&&n[W]||n["@@iterator"],typeof n=="function"?n:null)}var se=Symbol.for("react.client.reference");function ce(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===se?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case O:return"Profiler";case E:return"StrictMode";case L:return"Suspense";case $:return"SuspenseList";case q:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case C:return"Portal";case j:return(n.displayName||"Context")+".Provider";case T:return(n._context.displayName||"Context")+".Consumer";case D:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return a=n.displayName||null,a!==null?a:ce(n.type)||"Memo";case _:a=n._payload,n=n._init;try{return ce(n(a))}catch{}}return null}var re=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},ee=[],k=-1;function F(n){return{current:n}}function ne(n){0>k||(n.current=ee[k],ee[k]=null,k--)}function ie(n,a){k++,ee[k]=n.current,n.current=a}var le=F(null),we=F(null),de=F(null),ot=F(null);function Le(n,a){switch(ie(de,a),ie(we,n),ie(le,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?Pg(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=Pg(a),n=Ng(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(le),ie(le,n)}function bt(){ne(le),ne(we),ne(de)}function Fi(n){n.memoizedState!==null&&ie(ot,n);var a=le.current,s=Ng(a,n.type);a!==s&&(ie(we,n),ie(le,s))}function Gn(n){we.current===n&&(ne(le),ne(we)),ot.current===n&&(ne(ot),Ds._currentValue=Q)}var an=Object.prototype.hasOwnProperty,du=e.unstable_scheduleCallback,fu=e.unstable_cancelCallback,m7=e.unstable_shouldYield,g7=e.unstable_requestPaint,Mn=e.unstable_now,x7=e.unstable_getCurrentPriorityLevel,xh=e.unstable_ImmediatePriority,yh=e.unstable_UserBlockingPriority,Ao=e.unstable_NormalPriority,y7=e.unstable_LowPriority,vh=e.unstable_IdlePriority,v7=e.log,w7=e.unstable_setDisableYieldValue,Ur=null,Gt=null;function hi(n){if(typeof v7=="function"&&w7(n),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Ur,n)}catch{}}var qt=Math.clz32?Math.clz32:C7,b7=Math.log,S7=Math.LN2;function C7(n){return n>>>=0,n===0?32:31-(b7(n)/S7|0)|0}var Mo=256,Lo=4194304;function Zi(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Oo(n,a,s){var c=n.pendingLanes;if(c===0)return 0;var f=0,x=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var A=c&134217727;return A!==0?(c=A&~x,c!==0?f=Zi(c):(b&=A,b!==0?f=Zi(b):s||(s=A&~n,s!==0&&(f=Zi(s))))):(A=c&~x,A!==0?f=Zi(A):b!==0?f=Zi(b):s||(s=c&~n,s!==0&&(f=Zi(s)))),f===0?0:a!==0&&a!==f&&(a&x)===0&&(x=f&-f,s=a&-a,x>=s||x===32&&(s&4194048)!==0)?a:f}function _r(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function T7(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wh(){var n=Mo;return Mo<<=1,(Mo&4194048)===0&&(Mo=256),n}function bh(){var n=Lo;return Lo<<=1,(Lo&62914560)===0&&(Lo=4194304),n}function pu(n){for(var a=[],s=0;31>s;s++)a.push(n);return a}function Ir(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function E7(n,a,s,c,f,x){var b=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var A=n.entanglements,H=n.expirationTimes,U=n.hiddenUpdates;for(s=b&~s;0<s;){var Z=31-qt(s),J=1<<Z;A[Z]=0,H[Z]=-1;var I=U[Z];if(I!==null)for(U[Z]=null,Z=0;Z<I.length;Z++){var G=I[Z];G!==null&&(G.lane&=-536870913)}s&=~J}c!==0&&Sh(n,c,0),x!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=x&~(b&~a))}function Sh(n,a,s){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-qt(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194090}function Ch(n,a){var s=n.entangledLanes|=a;for(n=n.entanglements;s;){var c=31-qt(s),f=1<<c;f&a|n[c]&a&&(n[c]|=a),s&=~f}}function hu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function mu(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Th(){var n=X.p;return n!==0?n:(n=window.event,n===void 0?32:i3(n.type))}function j7(n,a){var s=X.p;try{return X.p=n,a()}finally{X.p=s}}var mi=Math.random().toString(36).slice(2),St="__reactFiber$"+mi,kt="__reactProps$"+mi,Ta="__reactContainer$"+mi,gu="__reactEvents$"+mi,A7="__reactListeners$"+mi,M7="__reactHandles$"+mi,Eh="__reactResources$"+mi,Gr="__reactMarker$"+mi;function xu(n){delete n[St],delete n[kt],delete n[gu],delete n[A7],delete n[M7]}function Ea(n){var a=n[St];if(a)return a;for(var s=n.parentNode;s;){if(a=s[Ta]||s[St]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(n=_g(n);n!==null;){if(s=n[St])return s;n=_g(n)}return a}n=s,s=n.parentNode}return null}function ja(n){if(n=n[St]||n[Ta]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function qr(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(r(33))}function Aa(n){var a=n[Eh];return a||(a=n[Eh]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function lt(n){n[Gr]=!0}var jh=new Set,Ah={};function Xi(n,a){Ma(n,a),Ma(n+"Capture",a)}function Ma(n,a){for(Ah[n]=a,n=0;n<a.length;n++)jh.add(a[n])}var L7=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mh={},Lh={};function O7(n){return an.call(Lh,n)?!0:an.call(Mh,n)?!1:L7.test(n)?Lh[n]=!0:(Mh[n]=!0,!1)}function Ro(n,a,s){if(O7(a))if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+s)}}function ko(n,a,s){if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+s)}}function qn(n,a,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(a,s,""+c)}}var yu,Oh;function La(n){if(yu===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);yu=a&&a[1]||"",Oh=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yu+n+Oh}var vu=!1;function wu(n,a){if(!n||vu)return"";vu=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(G){var I=G}Reflect.construct(n,[],J)}else{try{J.call()}catch(G){I=G}n.call(J.prototype)}}else{try{throw Error()}catch(G){I=G}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(G){if(G&&I&&typeof G.stack=="string")return[G.stack,I.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var x=c.DetermineComponentFrameRoot(),b=x[0],A=x[1];if(b&&A){var H=b.split(`
`),U=A.split(`
`);for(f=c=0;c<H.length&&!H[c].includes("DetermineComponentFrameRoot");)c++;for(;f<U.length&&!U[f].includes("DetermineComponentFrameRoot");)f++;if(c===H.length||f===U.length)for(c=H.length-1,f=U.length-1;1<=c&&0<=f&&H[c]!==U[f];)f--;for(;1<=c&&0<=f;c--,f--)if(H[c]!==U[f]){if(c!==1||f!==1)do if(c--,f--,0>f||H[c]!==U[f]){var Z=`
`+H[c].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=c&&0<=f);break}}}finally{vu=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?La(s):""}function R7(n){switch(n.tag){case 26:case 27:case 5:return La(n.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 15:return wu(n.type,!1);case 11:return wu(n.type.render,!1);case 1:return wu(n.type,!0);case 31:return La("Activity");default:return""}}function Rh(n){try{var a="";do a+=R7(n),n=n.return;while(n);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function rn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function kh(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function k7(n){var a=kh(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,x=s.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return f.call(this)},set:function(b){c=""+b,x.call(this,b)}}),Object.defineProperty(n,a,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Do(n){n._valueTracker||(n._valueTracker=k7(n))}function Dh(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var s=a.getValue(),c="";return n&&(c=kh(n)?n.checked?"true":"false":n.value),n=c,n!==s?(a.setValue(n),!0):!1}function Ho(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var D7=/[\n"\\]/g;function sn(n){return n.replace(D7,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function bu(n,a,s,c,f,x,b,A){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),a!=null?b==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+rn(a)):n.value!==""+rn(a)&&(n.value=""+rn(a)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),a!=null?Su(n,b,rn(a)):s!=null?Su(n,b,rn(s)):c!=null&&n.removeAttribute("value"),f==null&&x!=null&&(n.defaultChecked=!!x),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.name=""+rn(A):n.removeAttribute("name")}function Hh(n,a,s,c,f,x,b,A){if(x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(n.type=x),a!=null||s!=null){if(!(x!=="submit"&&x!=="reset"||a!=null))return;s=s!=null?""+rn(s):"",a=a!=null?""+rn(a):s,A||a===n.value||(n.value=a),n.defaultValue=a}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=A?n.checked:!!c,n.defaultChecked=!!c,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b)}function Su(n,a,s){a==="number"&&Ho(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Oa(n,a,s,c){if(n=n.options,a){a={};for(var f=0;f<s.length;f++)a["$"+s[f]]=!0;for(s=0;s<n.length;s++)f=a.hasOwnProperty("$"+n[s].value),n[s].selected!==f&&(n[s].selected=f),f&&c&&(n[s].defaultSelected=!0)}else{for(s=""+rn(s),a=null,f=0;f<n.length;f++){if(n[f].value===s){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}a!==null||n[f].disabled||(a=n[f])}a!==null&&(a.selected=!0)}}function zh(n,a,s){if(a!=null&&(a=""+rn(a),a!==n.value&&(n.value=a),s==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=s!=null?""+rn(s):""}function Vh(n,a,s,c){if(a==null){if(c!=null){if(s!=null)throw Error(r(92));if(re(c)){if(1<c.length)throw Error(r(93));c=c[0]}s=c}s==null&&(s=""),a=s}s=rn(a),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function Ra(n,a){if(a){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=a;return}}n.textContent=a}var H7=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ph(n,a,s){var c=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,s):typeof s!="number"||s===0||H7.has(a)?a==="float"?n.cssFloat=s:n[a]=(""+s).trim():n[a]=s+"px"}function Nh(n,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var f in a)c=a[f],a.hasOwnProperty(f)&&s[f]!==c&&Ph(n,f,c)}else for(var x in a)a.hasOwnProperty(x)&&Ph(n,x,a[x])}function Cu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z7=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),V7=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zo(n){return V7.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Tu=null;function Eu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ka=null,Da=null;function $h(n){var a=ja(n);if(a&&(n=a.stateNode)){var s=n[kt]||null;e:switch(n=a.stateNode,a.type){case"input":if(bu(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+sn(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var c=s[a];if(c!==n&&c.form===n.form){var f=c[kt]||null;if(!f)throw Error(r(90));bu(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<s.length;a++)c=s[a],c.form===n.form&&Dh(c)}break e;case"textarea":zh(n,s.value,s.defaultValue);break e;case"select":a=s.value,a!=null&&Oa(n,!!s.multiple,a,!1)}}}var ju=!1;function Bh(n,a,s){if(ju)return n(a,s);ju=!0;try{var c=n(a);return c}finally{if(ju=!1,(ka!==null||Da!==null)&&(wl(),ka&&(a=ka,n=Da,Da=ka=null,$h(a),n)))for(a=0;a<n.length;a++)$h(n[a])}}function Yr(n,a){var s=n.stateNode;if(s===null)return null;var c=s[kt]||null;if(c===null)return null;s=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Yn)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){Au=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Au=!1}var gi=null,Mu=null,Vo=null;function Uh(){if(Vo)return Vo;var n,a=Mu,s=a.length,c,f="value"in gi?gi.value:gi.textContent,x=f.length;for(n=0;n<s&&a[n]===f[n];n++);var b=s-n;for(c=1;c<=b&&a[s-c]===f[x-c];c++);return Vo=f.slice(n,1<c?1-c:void 0)}function Po(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function No(){return!0}function _h(){return!1}function Dt(n){function a(s,c,f,x,b){this._reactName=s,this._targetInst=f,this.type=c,this.nativeEvent=x,this.target=b,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(s=n[A],this[A]=s?s(x):x[A]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?No:_h,this.isPropagationStopped=_h,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),a}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Dt(Wi),Zr=g({},Wi,{view:0,detail:0}),P7=Dt(Zr),Lu,Ou,Xr,Bo=g({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xr&&(Xr&&n.type==="mousemove"?(Lu=n.screenX-Xr.screenX,Ou=n.screenY-Xr.screenY):Ou=Lu=0,Xr=n),Lu)},movementY:function(n){return"movementY"in n?n.movementY:Ou}}),Ih=Dt(Bo),N7=g({},Bo,{dataTransfer:0}),$7=Dt(N7),B7=g({},Zr,{relatedTarget:0}),Ru=Dt(B7),U7=g({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),_7=Dt(U7),I7=g({},Wi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),G7=Dt(I7),q7=g({},Wi,{data:0}),Gh=Dt(q7),Y7={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F7={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z7={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X7(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=Z7[n])?!!a[n]:!1}function ku(){return X7}var W7=g({},Zr,{key:function(n){if(n.key){var a=Y7[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?F7[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(n){return n.type==="keypress"?Po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),K7=Dt(W7),Q7=g({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=Dt(Q7),J7=g({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),ev=Dt(J7),tv=g({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),nv=Dt(tv),iv=g({},Bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),av=Dt(iv),rv=g({},Wi,{newState:0,oldState:0}),sv=Dt(rv),ov=[9,13,27,32],Du=Yn&&"CompositionEvent"in window,Wr=null;Yn&&"documentMode"in document&&(Wr=document.documentMode);var lv=Yn&&"TextEvent"in window&&!Wr,Yh=Yn&&(!Du||Wr&&8<Wr&&11>=Wr),Fh=" ",Zh=!1;function Xh(n,a){switch(n){case"keyup":return ov.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ha=!1;function cv(n,a){switch(n){case"compositionend":return Wh(a);case"keypress":return a.which!==32?null:(Zh=!0,Fh);case"textInput":return n=a.data,n===Fh&&Zh?null:n;default:return null}}function uv(n,a){if(Ha)return n==="compositionend"||!Du&&Xh(n,a)?(n=Uh(),Vo=Mu=gi=null,Ha=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Yh&&a.locale!=="ko"?null:a.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!dv[n.type]:a==="textarea"}function Qh(n,a,s,c){ka?Da?Da.push(c):Da=[c]:ka=c,a=jl(a,"onChange"),0<a.length&&(s=new $o("onChange","change",null,s,c),n.push({event:s,listeners:a}))}var Kr=null,Qr=null;function fv(n){kg(n,0)}function Uo(n){var a=qr(n);if(Dh(a))return n}function Jh(n,a){if(n==="change")return a}var e2=!1;if(Yn){var Hu;if(Yn){var zu="oninput"in document;if(!zu){var t2=document.createElement("div");t2.setAttribute("oninput","return;"),zu=typeof t2.oninput=="function"}Hu=zu}else Hu=!1;e2=Hu&&(!document.documentMode||9<document.documentMode)}function n2(){Kr&&(Kr.detachEvent("onpropertychange",i2),Qr=Kr=null)}function i2(n){if(n.propertyName==="value"&&Uo(Qr)){var a=[];Qh(a,Qr,n,Eu(n)),Bh(fv,a)}}function pv(n,a,s){n==="focusin"?(n2(),Kr=a,Qr=s,Kr.attachEvent("onpropertychange",i2)):n==="focusout"&&n2()}function hv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uo(Qr)}function mv(n,a){if(n==="click")return Uo(a)}function gv(n,a){if(n==="input"||n==="change")return Uo(a)}function xv(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var Yt=typeof Object.is=="function"?Object.is:xv;function Jr(n,a){if(Yt(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var s=Object.keys(n),c=Object.keys(a);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var f=s[c];if(!an.call(a,f)||!Yt(n[f],a[f]))return!1}return!0}function a2(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function r2(n,a){var s=a2(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=a&&c>=a)return{node:s,offset:a-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=a2(s)}}function s2(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?s2(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function o2(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Ho(n.document);a instanceof n.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)n=a.contentWindow;else break;a=Ho(n.document)}return a}function Vu(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var yv=Yn&&"documentMode"in document&&11>=document.documentMode,za=null,Pu=null,es=null,Nu=!1;function l2(n,a,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Nu||za==null||za!==Ho(c)||(c=za,"selectionStart"in c&&Vu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),es&&Jr(es,c)||(es=c,c=jl(Pu,"onSelect"),0<c.length&&(a=new $o("onSelect","select",null,a,s),n.push({event:a,listeners:c}),a.target=za)))}function Ki(n,a){var s={};return s[n.toLowerCase()]=a.toLowerCase(),s["Webkit"+n]="webkit"+a,s["Moz"+n]="moz"+a,s}var Va={animationend:Ki("Animation","AnimationEnd"),animationiteration:Ki("Animation","AnimationIteration"),animationstart:Ki("Animation","AnimationStart"),transitionrun:Ki("Transition","TransitionRun"),transitionstart:Ki("Transition","TransitionStart"),transitioncancel:Ki("Transition","TransitionCancel"),transitionend:Ki("Transition","TransitionEnd")},$u={},c2={};Yn&&(c2=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function Qi(n){if($u[n])return $u[n];if(!Va[n])return n;var a=Va[n],s;for(s in a)if(a.hasOwnProperty(s)&&s in c2)return $u[n]=a[s];return n}var u2=Qi("animationend"),d2=Qi("animationiteration"),f2=Qi("animationstart"),vv=Qi("transitionrun"),wv=Qi("transitionstart"),bv=Qi("transitioncancel"),p2=Qi("transitionend"),h2=new Map,Bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bu.push("scrollEnd");function wn(n,a){h2.set(n,a),Xi(a,[n])}var m2=new WeakMap;function on(n,a){if(typeof n=="object"&&n!==null){var s=m2.get(n);return s!==void 0?s:(a={value:n,source:a,stack:Rh(a)},m2.set(n,a),a)}return{value:n,source:a,stack:Rh(a)}}var ln=[],Pa=0,Uu=0;function _o(){for(var n=Pa,a=Uu=Pa=0;a<n;){var s=ln[a];ln[a++]=null;var c=ln[a];ln[a++]=null;var f=ln[a];ln[a++]=null;var x=ln[a];if(ln[a++]=null,c!==null&&f!==null){var b=c.pending;b===null?f.next=f:(f.next=b.next,b.next=f),c.pending=f}x!==0&&g2(s,f,x)}}function Io(n,a,s,c){ln[Pa++]=n,ln[Pa++]=a,ln[Pa++]=s,ln[Pa++]=c,Uu|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function _u(n,a,s,c){return Io(n,a,s,c),Go(n)}function Na(n,a){return Io(n,null,null,a),Go(n)}function g2(n,a,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var f=!1,x=n.return;x!==null;)x.childLanes|=s,c=x.alternate,c!==null&&(c.childLanes|=s),x.tag===22&&(n=x.stateNode,n===null||n._visibility&1||(f=!0)),n=x,x=x.return;return n.tag===3?(x=n.stateNode,f&&a!==null&&(f=31-qt(s),n=x.hiddenUpdates,c=n[f],c===null?n[f]=[a]:c.push(a),a.lane=s|536870912),x):null}function Go(n){if(50<Es)throw Es=0,Zd=null,Error(r(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var $a={};function Sv(n,a,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(n,a,s,c){return new Sv(n,a,s,c)}function Iu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Fn(n,a){var s=n.alternate;return s===null?(s=Ft(n.tag,a,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=a,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,a=n.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function x2(n,a){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,a=s.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function qo(n,a,s,c,f,x){var b=0;if(c=n,typeof n=="function")Iu(n)&&(b=1);else if(typeof n=="string")b=T9(n,s,le.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case q:return n=Ft(31,s,a,f),n.elementType=q,n.lanes=x,n;case S:return Ji(s.children,f,x,a);case E:b=8,f|=24;break;case O:return n=Ft(12,s,a,f|2),n.elementType=O,n.lanes=x,n;case L:return n=Ft(13,s,a,f),n.elementType=L,n.lanes=x,n;case $:return n=Ft(19,s,a,f),n.elementType=$,n.lanes=x,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case M:case j:b=10;break e;case T:b=9;break e;case D:b=11;break e;case V:b=14;break e;case _:b=16,c=null;break e}b=29,s=Error(r(130,n===null?"null":typeof n,"")),c=null}return a=Ft(b,s,a,f),a.elementType=n,a.type=c,a.lanes=x,a}function Ji(n,a,s,c){return n=Ft(7,n,c,a),n.lanes=s,n}function Gu(n,a,s){return n=Ft(6,n,null,a),n.lanes=s,n}function qu(n,a,s){return a=Ft(4,n.children!==null?n.children:[],n.key,a),a.lanes=s,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Ba=[],Ua=0,Yo=null,Fo=0,cn=[],un=0,ea=null,Zn=1,Xn="";function ta(n,a){Ba[Ua++]=Fo,Ba[Ua++]=Yo,Yo=n,Fo=a}function y2(n,a,s){cn[un++]=Zn,cn[un++]=Xn,cn[un++]=ea,ea=n;var c=Zn;n=Xn;var f=32-qt(c)-1;c&=~(1<<f),s+=1;var x=32-qt(a)+f;if(30<x){var b=f-f%5;x=(c&(1<<b)-1).toString(32),c>>=b,f-=b,Zn=1<<32-qt(a)+f|s<<f|c,Xn=x+n}else Zn=1<<x|s<<f|c,Xn=n}function Yu(n){n.return!==null&&(ta(n,1),y2(n,1,0))}function Fu(n){for(;n===Yo;)Yo=Ba[--Ua],Ba[Ua]=null,Fo=Ba[--Ua],Ba[Ua]=null;for(;n===ea;)ea=cn[--un],cn[un]=null,Xn=cn[--un],cn[un]=null,Zn=cn[--un],cn[un]=null}var Mt=null,Fe=null,Ee=!1,na=null,Ln=!1,Zu=Error(r(519));function ia(n){var a=Error(r(418,""));throw is(on(a,n)),Zu}function v2(n){var a=n.stateNode,s=n.type,c=n.memoizedProps;switch(a[St]=n,a[kt]=c,s){case"dialog":Se("cancel",a),Se("close",a);break;case"iframe":case"object":case"embed":Se("load",a);break;case"video":case"audio":for(s=0;s<As.length;s++)Se(As[s],a);break;case"source":Se("error",a);break;case"img":case"image":case"link":Se("error",a),Se("load",a);break;case"details":Se("toggle",a);break;case"input":Se("invalid",a),Hh(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Do(a);break;case"select":Se("invalid",a);break;case"textarea":Se("invalid",a),Vh(a,c.value,c.defaultValue,c.children),Do(a)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||c.suppressHydrationWarning===!0||Vg(a.textContent,s)?(c.popover!=null&&(Se("beforetoggle",a),Se("toggle",a)),c.onScroll!=null&&Se("scroll",a),c.onScrollEnd!=null&&Se("scrollend",a),c.onClick!=null&&(a.onclick=Al),a=!0):a=!1,a||ia(n)}function w2(n){for(Mt=n.return;Mt;)switch(Mt.tag){case 5:case 13:Ln=!1;return;case 27:case 3:Ln=!0;return;default:Mt=Mt.return}}function ts(n){if(n!==Mt)return!1;if(!Ee)return w2(n),Ee=!0,!1;var a=n.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||df(n.type,n.memoizedProps)),s=!s),s&&Fe&&ia(n),w2(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(a===0){Fe=Sn(n.nextSibling);break e}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;n=n.nextSibling}Fe=null}}else a===27?(a=Fe,ki(n.type)?(n=mf,mf=null,Fe=n):Fe=a):Fe=Mt?Sn(n.stateNode.nextSibling):null;return!0}function ns(){Fe=Mt=null,Ee=!1}function b2(){var n=na;return n!==null&&(Vt===null?Vt=n:Vt.push.apply(Vt,n),na=null),n}function is(n){na===null?na=[n]:na.push(n)}var Xu=F(null),aa=null,Wn=null;function xi(n,a,s){ie(Xu,a._currentValue),a._currentValue=s}function Kn(n){n._currentValue=Xu.current,ne(Xu)}function Wu(n,a,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===s)break;n=n.return}}function Ku(n,a,s,c){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var x=f.dependencies;if(x!==null){var b=f.child;x=x.firstContext;e:for(;x!==null;){var A=x;x=f;for(var H=0;H<a.length;H++)if(A.context===a[H]){x.lanes|=s,A=x.alternate,A!==null&&(A.lanes|=s),Wu(x.return,s,n),c||(b=null);break e}x=A.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(r(341));b.lanes|=s,x=b.alternate,x!==null&&(x.lanes|=s),Wu(b,s,n),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===n){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function as(n,a,s,c){n=null;for(var f=a,x=!1;f!==null;){if(!x){if((f.flags&524288)!==0)x=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(r(387));if(b=b.memoizedProps,b!==null){var A=f.type;Yt(f.pendingProps.value,b.value)||(n!==null?n.push(A):n=[A])}}else if(f===ot.current){if(b=f.alternate,b===null)throw Error(r(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Ds):n=[Ds])}f=f.return}n!==null&&Ku(a,n,s,c),a.flags|=262144}function Zo(n){for(n=n.firstContext;n!==null;){if(!Yt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ra(n){aa=n,Wn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Ct(n){return S2(aa,n)}function Xo(n,a){return aa===null&&ra(n),S2(n,a)}function S2(n,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},Wn===null){if(n===null)throw Error(r(308));Wn=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Wn=Wn.next=a;return s}var Cv=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(s){return s()})}},Tv=e.unstable_scheduleCallback,Ev=e.unstable_NormalPriority,rt={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new Cv,data:new Map,refCount:0}}function rs(n){n.refCount--,n.refCount===0&&Tv(Ev,function(){n.controller.abort()})}var ss=null,Ju=0,_a=0,Ia=null;function jv(n,a){if(ss===null){var s=ss=[];Ju=0,_a=tf(),Ia={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Ju++,a.then(C2,C2),a}function C2(){if(--Ju===0&&ss!==null){Ia!==null&&(Ia.status="fulfilled");var n=ss;ss=null,_a=0,Ia=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function Av(n,a){var s=[],c={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var f=0;f<s.length;f++)(0,s[f])(a)},function(f){for(c.status="rejected",c.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),c}var T2=N.S;N.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&jv(n,a),T2!==null&&T2(n,a)};var sa=F(null);function ed(){var n=sa.current;return n!==null?n:Be.pooledCache}function Wo(n,a){a===null?ie(sa,sa.current):ie(sa,a.pool)}function E2(){var n=ed();return n===null?null:{parent:rt._currentValue,pool:n}}var os=Error(r(460)),j2=Error(r(474)),Ko=Error(r(542)),td={then:function(){}};function A2(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Qo(){}function M2(n,a,s){switch(s=n[s],s===void 0?n.push(a):s!==a&&(a.then(Qo,Qo),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,O2(n),n;default:if(typeof a.status=="string")a.then(Qo,Qo);else{if(n=Be,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=c}},function(c){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,O2(n),n}throw ls=a,os}}var ls=null;function L2(){if(ls===null)throw Error(r(459));var n=ls;return ls=null,n}function O2(n){if(n===os||n===Ko)throw Error(r(483))}var yi=!1;function nd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function id(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function vi(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function wi(n,a,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(He&2)!==0){var f=c.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a,a=Go(n),g2(n,null,s),a}return Io(n,c,a,s),Go(n)}function cs(n,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,Ch(n,s)}}function ad(n,a){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var f=null,x=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};x===null?f=x=b:x=x.next=b,s=s.next}while(s!==null);x===null?f=x=a:x=x.next=a}else f=x=a;s={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:x,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=a:n.next=a,s.lastBaseUpdate=a}var rd=!1;function us(){if(rd){var n=Ia;if(n!==null)throw n}}function ds(n,a,s,c){rd=!1;var f=n.updateQueue;yi=!1;var x=f.firstBaseUpdate,b=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var H=A,U=H.next;H.next=null,b===null?x=U:b.next=U,b=H;var Z=n.alternate;Z!==null&&(Z=Z.updateQueue,A=Z.lastBaseUpdate,A!==b&&(A===null?Z.firstBaseUpdate=U:A.next=U,Z.lastBaseUpdate=H))}if(x!==null){var J=f.baseState;b=0,Z=U=H=null,A=x;do{var I=A.lane&-536870913,G=I!==A.lane;if(G?(Ce&I)===I:(c&I)===I){I!==0&&I===_a&&(rd=!0),Z!==null&&(Z=Z.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var pe=n,ue=A;I=a;var Ne=s;switch(ue.tag){case 1:if(pe=ue.payload,typeof pe=="function"){J=pe.call(Ne,J,I);break e}J=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=ue.payload,I=typeof pe=="function"?pe.call(Ne,J,I):pe,I==null)break e;J=g({},J,I);break e;case 2:yi=!0}}I=A.callback,I!==null&&(n.flags|=64,G&&(n.flags|=8192),G=f.callbacks,G===null?f.callbacks=[I]:G.push(I))}else G={lane:I,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Z===null?(U=Z=G,H=J):Z=Z.next=G,b|=I;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;G=A,A=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);Z===null&&(H=J),f.baseState=H,f.firstBaseUpdate=U,f.lastBaseUpdate=Z,x===null&&(f.shared.lanes=0),Mi|=b,n.lanes=b,n.memoizedState=J}}function R2(n,a){if(typeof n!="function")throw Error(r(191,n));n.call(a)}function k2(n,a){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)R2(s[n],a)}var Ga=F(null),Jo=F(0);function D2(n,a){n=ai,ie(Jo,n),ie(Ga,a),ai=n|a.baseLanes}function sd(){ie(Jo,ai),ie(Ga,Ga.current)}function od(){ai=Jo.current,ne(Ga),ne(Jo)}var bi=0,ye=null,Ve=null,et=null,el=!1,qa=!1,oa=!1,tl=0,fs=0,Ya=null,Mv=0;function Ke(){throw Error(r(321))}function ld(n,a){if(a===null)return!1;for(var s=0;s<a.length&&s<n.length;s++)if(!Yt(n[s],a[s]))return!1;return!0}function cd(n,a,s,c,f,x){return bi=x,ye=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,N.H=n===null||n.memoizedState===null?gm:xm,oa=!1,x=s(c,f),oa=!1,qa&&(x=z2(a,s,c,f)),H2(n),x}function H2(n){N.H=ol;var a=Ve!==null&&Ve.next!==null;if(bi=0,et=Ve=ye=null,el=!1,fs=0,Ya=null,a)throw Error(r(300));n===null||ct||(n=n.dependencies,n!==null&&Zo(n)&&(ct=!0))}function z2(n,a,s,c){ye=n;var f=0;do{if(qa&&(Ya=null),fs=0,qa=!1,25<=f)throw Error(r(301));if(f+=1,et=Ve=null,n.updateQueue!=null){var x=n.updateQueue;x.lastEffect=null,x.events=null,x.stores=null,x.memoCache!=null&&(x.memoCache.index=0)}N.H=zv,x=a(s,c)}while(qa);return x}function Lv(){var n=N.H,a=n.useState()[0];return a=typeof a.then=="function"?ps(a):a,n=n.useState()[0],(Ve!==null?Ve.memoizedState:null)!==n&&(ye.flags|=1024),a}function ud(){var n=tl!==0;return tl=0,n}function dd(n,a,s){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~s}function fd(n){if(el){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}el=!1}bi=0,et=Ve=ye=null,qa=!1,fs=tl=0,Ya=null}function Ht(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?ye.memoizedState=et=n:et=et.next=n,et}function tt(){if(Ve===null){var n=ye.alternate;n=n!==null?n.memoizedState:null}else n=Ve.next;var a=et===null?ye.memoizedState:et.next;if(a!==null)et=a,Ve=n;else{if(n===null)throw ye.alternate===null?Error(r(467)):Error(r(310));Ve=n,n={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},et===null?ye.memoizedState=et=n:et=et.next=n}return et}function pd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ps(n){var a=fs;return fs+=1,Ya===null&&(Ya=[]),n=M2(Ya,n,a),a=ye,(et===null?a.memoizedState:et.next)===null&&(a=a.alternate,N.H=a===null||a.memoizedState===null?gm:xm),n}function nl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ps(n);if(n.$$typeof===j)return Ct(n)}throw Error(r(438,String(n)))}function hd(n){var a=null,s=ye.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var c=ye.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=pd(),ye.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(n),c=0;c<n;c++)s[c]=Y;return a.index++,s}function Qn(n,a){return typeof a=="function"?a(n):a}function il(n){var a=tt();return md(a,Ve,n)}function md(n,a,s){var c=n.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=s;var f=n.baseQueue,x=c.pending;if(x!==null){if(f!==null){var b=f.next;f.next=x.next,x.next=b}a.baseQueue=f=x,c.pending=null}if(x=n.baseState,f===null)n.memoizedState=x;else{a=f.next;var A=b=null,H=null,U=a,Z=!1;do{var J=U.lane&-536870913;if(J!==U.lane?(Ce&J)===J:(bi&J)===J){var I=U.revertLane;if(I===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),J===_a&&(Z=!0);else if((bi&I)===I){U=U.next,I===_a&&(Z=!0);continue}else J={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},H===null?(A=H=J,b=x):H=H.next=J,ye.lanes|=I,Mi|=I;J=U.action,oa&&s(x,J),x=U.hasEagerState?U.eagerState:s(x,J)}else I={lane:J,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},H===null?(A=H=I,b=x):H=H.next=I,ye.lanes|=J,Mi|=J;U=U.next}while(U!==null&&U!==a);if(H===null?b=x:H.next=A,!Yt(x,n.memoizedState)&&(ct=!0,Z&&(s=Ia,s!==null)))throw s;n.memoizedState=x,n.baseState=b,n.baseQueue=H,c.lastRenderedState=x}return f===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function gd(n){var a=tt(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var c=s.dispatch,f=s.pending,x=a.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do x=n(x,b.action),b=b.next;while(b!==f);Yt(x,a.memoizedState)||(ct=!0),a.memoizedState=x,a.baseQueue===null&&(a.baseState=x),s.lastRenderedState=x}return[x,c]}function V2(n,a,s){var c=ye,f=tt(),x=Ee;if(x){if(s===void 0)throw Error(r(407));s=s()}else s=a();var b=!Yt((Ve||f).memoizedState,s);b&&(f.memoizedState=s,ct=!0),f=f.queue;var A=$2.bind(null,c,f,n);if(hs(2048,8,A,[n]),f.getSnapshot!==a||b||et!==null&&et.memoizedState.tag&1){if(c.flags|=2048,Fa(9,al(),N2.bind(null,c,f,s,a),null),Be===null)throw Error(r(349));x||(bi&124)!==0||P2(c,a,s)}return s}function P2(n,a,s){n.flags|=16384,n={getSnapshot:a,value:s},a=ye.updateQueue,a===null?(a=pd(),ye.updateQueue=a,a.stores=[n]):(s=a.stores,s===null?a.stores=[n]:s.push(n))}function N2(n,a,s,c){a.value=s,a.getSnapshot=c,B2(a)&&U2(n)}function $2(n,a,s){return s(function(){B2(a)&&U2(n)})}function B2(n){var a=n.getSnapshot;n=n.value;try{var s=a();return!Yt(n,s)}catch{return!0}}function U2(n){var a=Na(n,2);a!==null&&Qt(a,n,2)}function xd(n){var a=Ht();if(typeof n=="function"){var s=n;if(n=s(),oa){hi(!0);try{s()}finally{hi(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:n},a}function _2(n,a,s,c){return n.baseState=s,md(n,Ve,typeof c=="function"?c:Qn)}function Ov(n,a,s,c,f){if(sl(n))throw Error(r(485));if(n=a.action,n!==null){var x={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){x.listeners.push(b)}};N.T!==null?s(!0):x.isTransition=!1,c(x),s=a.pending,s===null?(x.next=a.pending=x,I2(a,x)):(x.next=s.next,a.pending=s.next=x)}}function I2(n,a){var s=a.action,c=a.payload,f=n.state;if(a.isTransition){var x=N.T,b={};N.T=b;try{var A=s(f,c),H=N.S;H!==null&&H(b,A),G2(n,a,A)}catch(U){yd(n,a,U)}finally{N.T=x}}else try{x=s(f,c),G2(n,a,x)}catch(U){yd(n,a,U)}}function G2(n,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){q2(n,a,c)},function(c){return yd(n,a,c)}):q2(n,a,s)}function q2(n,a,s){a.status="fulfilled",a.value=s,Y2(a),n.state=s,a=n.pending,a!==null&&(s=a.next,s===a?n.pending=null:(s=s.next,a.next=s,I2(n,s)))}function yd(n,a,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=s,Y2(a),a=a.next;while(a!==c)}n.action=null}function Y2(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function F2(n,a){return a}function Z2(n,a){if(Ee){var s=Be.formState;if(s!==null){e:{var c=ye;if(Ee){if(Fe){t:{for(var f=Fe,x=Ln;f.nodeType!==8;){if(!x){f=null;break t}if(f=Sn(f.nextSibling),f===null){f=null;break t}}x=f.data,f=x==="F!"||x==="F"?f:null}if(f){Fe=Sn(f.nextSibling),c=f.data==="F!";break e}}ia(c)}c=!1}c&&(a=s[0])}}return s=Ht(),s.memoizedState=s.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:F2,lastRenderedState:a},s.queue=c,s=pm.bind(null,ye,c),c.dispatch=s,c=xd(!1),x=Cd.bind(null,ye,!1,c.queue),c=Ht(),f={state:a,dispatch:null,action:n,pending:null},c.queue=f,s=Ov.bind(null,ye,f,x,s),f.dispatch=s,c.memoizedState=n,[a,s,!1]}function X2(n){var a=tt();return W2(a,Ve,n)}function W2(n,a,s){if(a=md(n,a,F2)[0],n=il(Qn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=ps(a)}catch(b){throw b===os?Ko:b}else c=a;a=tt();var f=a.queue,x=f.dispatch;return s!==a.memoizedState&&(ye.flags|=2048,Fa(9,al(),Rv.bind(null,f,s),null)),[c,x,n]}function Rv(n,a){n.action=a}function K2(n){var a=tt(),s=Ve;if(s!==null)return W2(a,s,n);tt(),a=a.memoizedState,s=tt();var c=s.queue.dispatch;return s.memoizedState=n,[a,c,!1]}function Fa(n,a,s,c){return n={tag:n,create:s,deps:c,inst:a,next:null},a=ye.updateQueue,a===null&&(a=pd(),ye.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,a.lastEffect=n),n}function al(){return{destroy:void 0,resource:void 0}}function Q2(){return tt().memoizedState}function rl(n,a,s,c){var f=Ht();c=c===void 0?null:c,ye.flags|=n,f.memoizedState=Fa(1|a,al(),s,c)}function hs(n,a,s,c){var f=tt();c=c===void 0?null:c;var x=f.memoizedState.inst;Ve!==null&&c!==null&&ld(c,Ve.memoizedState.deps)?f.memoizedState=Fa(a,x,s,c):(ye.flags|=n,f.memoizedState=Fa(1|a,x,s,c))}function J2(n,a){rl(8390656,8,n,a)}function em(n,a){hs(2048,8,n,a)}function tm(n,a){return hs(4,2,n,a)}function nm(n,a){return hs(4,4,n,a)}function im(n,a){if(typeof a=="function"){n=n();var s=a(n);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function am(n,a,s){s=s!=null?s.concat([n]):null,hs(4,4,im.bind(null,a,n),s)}function vd(){}function rm(n,a){var s=tt();a=a===void 0?null:a;var c=s.memoizedState;return a!==null&&ld(a,c[1])?c[0]:(s.memoizedState=[n,a],n)}function sm(n,a){var s=tt();a=a===void 0?null:a;var c=s.memoizedState;if(a!==null&&ld(a,c[1]))return c[0];if(c=n(),oa){hi(!0);try{n()}finally{hi(!1)}}return s.memoizedState=[c,a],c}function wd(n,a,s){return s===void 0||(bi&1073741824)!==0?n.memoizedState=a:(n.memoizedState=s,n=cg(),ye.lanes|=n,Mi|=n,s)}function om(n,a,s,c){return Yt(s,a)?s:Ga.current!==null?(n=wd(n,s,c),Yt(n,a)||(ct=!0),n):(bi&42)===0?(ct=!0,n.memoizedState=s):(n=cg(),ye.lanes|=n,Mi|=n,a)}function lm(n,a,s,c,f){var x=X.p;X.p=x!==0&&8>x?x:8;var b=N.T,A={};N.T=A,Cd(n,!1,a,s);try{var H=f(),U=N.S;if(U!==null&&U(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var Z=Av(H,c);ms(n,a,Z,Kt(n))}else ms(n,a,c,Kt(n))}catch(J){ms(n,a,{then:function(){},status:"rejected",reason:J},Kt())}finally{X.p=x,N.T=b}}function kv(){}function bd(n,a,s,c){if(n.tag!==5)throw Error(r(476));var f=cm(n).queue;lm(n,f,a,Q,s===null?kv:function(){return um(n),s(c)})}function cm(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:Q},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:s},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function um(n){var a=cm(n).next.queue;ms(n,a,{},Kt())}function Sd(){return Ct(Ds)}function dm(){return tt().memoizedState}function fm(){return tt().memoizedState}function Dv(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var s=Kt();n=vi(s);var c=wi(a,n,s);c!==null&&(Qt(c,a,s),cs(c,a,s)),a={cache:Qu()},n.payload=a;return}a=a.return}}function Hv(n,a,s){var c=Kt();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},sl(n)?hm(a,s):(s=_u(n,a,s,c),s!==null&&(Qt(s,n,c),mm(s,a,c)))}function pm(n,a,s){var c=Kt();ms(n,a,s,c)}function ms(n,a,s,c){var f={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(sl(n))hm(a,f);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=a.lastRenderedReducer,x!==null))try{var b=a.lastRenderedState,A=x(b,s);if(f.hasEagerState=!0,f.eagerState=A,Yt(A,b))return Io(n,a,f,0),Be===null&&_o(),!1}catch{}finally{}if(s=_u(n,a,f,c),s!==null)return Qt(s,n,c),mm(s,a,c),!0}return!1}function Cd(n,a,s,c){if(c={lane:2,revertLane:tf(),action:c,hasEagerState:!1,eagerState:null,next:null},sl(n)){if(a)throw Error(r(479))}else a=_u(n,s,c,2),a!==null&&Qt(a,n,2)}function sl(n){var a=n.alternate;return n===ye||a!==null&&a===ye}function hm(n,a){qa=el=!0;var s=n.pending;s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a}function mm(n,a,s){if((s&4194048)!==0){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,Ch(n,s)}}var ol={readContext:Ct,use:nl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},gm={readContext:Ct,use:nl,useCallback:function(n,a){return Ht().memoizedState=[n,a===void 0?null:a],n},useContext:Ct,useEffect:J2,useImperativeHandle:function(n,a,s){s=s!=null?s.concat([n]):null,rl(4194308,4,im.bind(null,a,n),s)},useLayoutEffect:function(n,a){return rl(4194308,4,n,a)},useInsertionEffect:function(n,a){rl(4,2,n,a)},useMemo:function(n,a){var s=Ht();a=a===void 0?null:a;var c=n();if(oa){hi(!0);try{n()}finally{hi(!1)}}return s.memoizedState=[c,a],c},useReducer:function(n,a,s){var c=Ht();if(s!==void 0){var f=s(a);if(oa){hi(!0);try{s(a)}finally{hi(!1)}}}else f=a;return c.memoizedState=c.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},c.queue=n,n=n.dispatch=Hv.bind(null,ye,n),[c.memoizedState,n]},useRef:function(n){var a=Ht();return n={current:n},a.memoizedState=n},useState:function(n){n=xd(n);var a=n.queue,s=pm.bind(null,ye,a);return a.dispatch=s,[n.memoizedState,s]},useDebugValue:vd,useDeferredValue:function(n,a){var s=Ht();return wd(s,n,a)},useTransition:function(){var n=xd(!1);return n=lm.bind(null,ye,n.queue,!0,!1),Ht().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,s){var c=ye,f=Ht();if(Ee){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),Be===null)throw Error(r(349));(Ce&124)!==0||P2(c,a,s)}f.memoizedState=s;var x={value:s,getSnapshot:a};return f.queue=x,J2($2.bind(null,c,x,n),[n]),c.flags|=2048,Fa(9,al(),N2.bind(null,c,x,s,a),null),s},useId:function(){var n=Ht(),a=Be.identifierPrefix;if(Ee){var s=Xn,c=Zn;s=(c&~(1<<32-qt(c)-1)).toString(32)+s,a="«"+a+"R"+s,s=tl++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=Mv++,a="«"+a+"r"+s.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:Sd,useFormState:Z2,useActionState:Z2,useOptimistic:function(n){var a=Ht();a.memoizedState=a.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=Cd.bind(null,ye,!0,s),s.dispatch=a,[n,a]},useMemoCache:hd,useCacheRefresh:function(){return Ht().memoizedState=Dv.bind(null,ye)}},xm={readContext:Ct,use:nl,useCallback:rm,useContext:Ct,useEffect:em,useImperativeHandle:am,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:sm,useReducer:il,useRef:Q2,useState:function(){return il(Qn)},useDebugValue:vd,useDeferredValue:function(n,a){var s=tt();return om(s,Ve.memoizedState,n,a)},useTransition:function(){var n=il(Qn)[0],a=tt().memoizedState;return[typeof n=="boolean"?n:ps(n),a]},useSyncExternalStore:V2,useId:dm,useHostTransitionStatus:Sd,useFormState:X2,useActionState:X2,useOptimistic:function(n,a){var s=tt();return _2(s,Ve,n,a)},useMemoCache:hd,useCacheRefresh:fm},zv={readContext:Ct,use:nl,useCallback:rm,useContext:Ct,useEffect:em,useImperativeHandle:am,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:sm,useReducer:gd,useRef:Q2,useState:function(){return gd(Qn)},useDebugValue:vd,useDeferredValue:function(n,a){var s=tt();return Ve===null?wd(s,n,a):om(s,Ve.memoizedState,n,a)},useTransition:function(){var n=gd(Qn)[0],a=tt().memoizedState;return[typeof n=="boolean"?n:ps(n),a]},useSyncExternalStore:V2,useId:dm,useHostTransitionStatus:Sd,useFormState:K2,useActionState:K2,useOptimistic:function(n,a){var s=tt();return Ve!==null?_2(s,Ve,n,a):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:hd,useCacheRefresh:fm},Za=null,gs=0;function ll(n){var a=gs;return gs+=1,Za===null&&(Za=[]),M2(Za,n,a)}function xs(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function cl(n,a){throw a.$$typeof===y?Error(r(525)):(n=Object.prototype.toString.call(a),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function ym(n){var a=n._init;return a(n._payload)}function vm(n){function a(P,z){if(n){var B=P.deletions;B===null?(P.deletions=[z],P.flags|=16):B.push(z)}}function s(P,z){if(!n)return null;for(;z!==null;)a(P,z),z=z.sibling;return null}function c(P){for(var z=new Map;P!==null;)P.key!==null?z.set(P.key,P):z.set(P.index,P),P=P.sibling;return z}function f(P,z){return P=Fn(P,z),P.index=0,P.sibling=null,P}function x(P,z,B){return P.index=B,n?(B=P.alternate,B!==null?(B=B.index,B<z?(P.flags|=67108866,z):B):(P.flags|=67108866,z)):(P.flags|=1048576,z)}function b(P){return n&&P.alternate===null&&(P.flags|=67108866),P}function A(P,z,B,K){return z===null||z.tag!==6?(z=Gu(B,P.mode,K),z.return=P,z):(z=f(z,B),z.return=P,z)}function H(P,z,B,K){var ae=B.type;return ae===S?Z(P,z,B.props.children,K,B.key):z!==null&&(z.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===_&&ym(ae)===z.type)?(z=f(z,B.props),xs(z,B),z.return=P,z):(z=qo(B.type,B.key,B.props,null,P.mode,K),xs(z,B),z.return=P,z)}function U(P,z,B,K){return z===null||z.tag!==4||z.stateNode.containerInfo!==B.containerInfo||z.stateNode.implementation!==B.implementation?(z=qu(B,P.mode,K),z.return=P,z):(z=f(z,B.children||[]),z.return=P,z)}function Z(P,z,B,K,ae){return z===null||z.tag!==7?(z=Ji(B,P.mode,K,ae),z.return=P,z):(z=f(z,B),z.return=P,z)}function J(P,z,B){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Gu(""+z,P.mode,B),z.return=P,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case v:return B=qo(z.type,z.key,z.props,null,P.mode,B),xs(B,z),B.return=P,B;case C:return z=qu(z,P.mode,B),z.return=P,z;case _:var K=z._init;return z=K(z._payload),J(P,z,B)}if(re(z)||te(z))return z=Ji(z,P.mode,B,null),z.return=P,z;if(typeof z.then=="function")return J(P,ll(z),B);if(z.$$typeof===j)return J(P,Xo(P,z),B);cl(P,z)}return null}function I(P,z,B,K){var ae=z!==null?z.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ae!==null?null:A(P,z,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case v:return B.key===ae?H(P,z,B,K):null;case C:return B.key===ae?U(P,z,B,K):null;case _:return ae=B._init,B=ae(B._payload),I(P,z,B,K)}if(re(B)||te(B))return ae!==null?null:Z(P,z,B,K,null);if(typeof B.then=="function")return I(P,z,ll(B),K);if(B.$$typeof===j)return I(P,z,Xo(P,B),K);cl(P,B)}return null}function G(P,z,B,K,ae){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return P=P.get(B)||null,A(z,P,""+K,ae);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case v:return P=P.get(K.key===null?B:K.key)||null,H(z,P,K,ae);case C:return P=P.get(K.key===null?B:K.key)||null,U(z,P,K,ae);case _:var ve=K._init;return K=ve(K._payload),G(P,z,B,K,ae)}if(re(K)||te(K))return P=P.get(B)||null,Z(z,P,K,ae,null);if(typeof K.then=="function")return G(P,z,B,ll(K),ae);if(K.$$typeof===j)return G(P,z,B,Xo(z,K),ae);cl(z,K)}return null}function pe(P,z,B,K){for(var ae=null,ve=null,oe=z,fe=z=0,dt=null;oe!==null&&fe<B.length;fe++){oe.index>fe?(dt=oe,oe=null):dt=oe.sibling;var Te=I(P,oe,B[fe],K);if(Te===null){oe===null&&(oe=dt);break}n&&oe&&Te.alternate===null&&a(P,oe),z=x(Te,z,fe),ve===null?ae=Te:ve.sibling=Te,ve=Te,oe=dt}if(fe===B.length)return s(P,oe),Ee&&ta(P,fe),ae;if(oe===null){for(;fe<B.length;fe++)oe=J(P,B[fe],K),oe!==null&&(z=x(oe,z,fe),ve===null?ae=oe:ve.sibling=oe,ve=oe);return Ee&&ta(P,fe),ae}for(oe=c(oe);fe<B.length;fe++)dt=G(oe,P,fe,B[fe],K),dt!==null&&(n&&dt.alternate!==null&&oe.delete(dt.key===null?fe:dt.key),z=x(dt,z,fe),ve===null?ae=dt:ve.sibling=dt,ve=dt);return n&&oe.forEach(function(Pi){return a(P,Pi)}),Ee&&ta(P,fe),ae}function ue(P,z,B,K){if(B==null)throw Error(r(151));for(var ae=null,ve=null,oe=z,fe=z=0,dt=null,Te=B.next();oe!==null&&!Te.done;fe++,Te=B.next()){oe.index>fe?(dt=oe,oe=null):dt=oe.sibling;var Pi=I(P,oe,Te.value,K);if(Pi===null){oe===null&&(oe=dt);break}n&&oe&&Pi.alternate===null&&a(P,oe),z=x(Pi,z,fe),ve===null?ae=Pi:ve.sibling=Pi,ve=Pi,oe=dt}if(Te.done)return s(P,oe),Ee&&ta(P,fe),ae;if(oe===null){for(;!Te.done;fe++,Te=B.next())Te=J(P,Te.value,K),Te!==null&&(z=x(Te,z,fe),ve===null?ae=Te:ve.sibling=Te,ve=Te);return Ee&&ta(P,fe),ae}for(oe=c(oe);!Te.done;fe++,Te=B.next())Te=G(oe,P,fe,Te.value,K),Te!==null&&(n&&Te.alternate!==null&&oe.delete(Te.key===null?fe:Te.key),z=x(Te,z,fe),ve===null?ae=Te:ve.sibling=Te,ve=Te);return n&&oe.forEach(function(V9){return a(P,V9)}),Ee&&ta(P,fe),ae}function Ne(P,z,B,K){if(typeof B=="object"&&B!==null&&B.type===S&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case v:e:{for(var ae=B.key;z!==null;){if(z.key===ae){if(ae=B.type,ae===S){if(z.tag===7){s(P,z.sibling),K=f(z,B.props.children),K.return=P,P=K;break e}}else if(z.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===_&&ym(ae)===z.type){s(P,z.sibling),K=f(z,B.props),xs(K,B),K.return=P,P=K;break e}s(P,z);break}else a(P,z);z=z.sibling}B.type===S?(K=Ji(B.props.children,P.mode,K,B.key),K.return=P,P=K):(K=qo(B.type,B.key,B.props,null,P.mode,K),xs(K,B),K.return=P,P=K)}return b(P);case C:e:{for(ae=B.key;z!==null;){if(z.key===ae)if(z.tag===4&&z.stateNode.containerInfo===B.containerInfo&&z.stateNode.implementation===B.implementation){s(P,z.sibling),K=f(z,B.children||[]),K.return=P,P=K;break e}else{s(P,z);break}else a(P,z);z=z.sibling}K=qu(B,P.mode,K),K.return=P,P=K}return b(P);case _:return ae=B._init,B=ae(B._payload),Ne(P,z,B,K)}if(re(B))return pe(P,z,B,K);if(te(B)){if(ae=te(B),typeof ae!="function")throw Error(r(150));return B=ae.call(B),ue(P,z,B,K)}if(typeof B.then=="function")return Ne(P,z,ll(B),K);if(B.$$typeof===j)return Ne(P,z,Xo(P,B),K);cl(P,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,z!==null&&z.tag===6?(s(P,z.sibling),K=f(z,B),K.return=P,P=K):(s(P,z),K=Gu(B,P.mode,K),K.return=P,P=K),b(P)):s(P,z)}return function(P,z,B,K){try{gs=0;var ae=Ne(P,z,B,K);return Za=null,ae}catch(oe){if(oe===os||oe===Ko)throw oe;var ve=Ft(29,oe,null,P.mode);return ve.lanes=K,ve.return=P,ve}finally{}}}var Xa=vm(!0),wm=vm(!1),dn=F(null),On=null;function Si(n){var a=n.alternate;ie(st,st.current&1),ie(dn,n),On===null&&(a===null||Ga.current!==null||a.memoizedState!==null)&&(On=n)}function bm(n){if(n.tag===22){if(ie(st,st.current),ie(dn,n),On===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(On=n)}}else Ci()}function Ci(){ie(st,st.current),ie(dn,dn.current)}function Jn(n){ne(dn),On===n&&(On=null),ne(st)}var st=F(0);function ul(n){for(var a=n;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||hf(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Td(n,a,s,c){a=n.memoizedState,s=s(c,a),s=s==null?a:g({},a,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Ed={enqueueSetState:function(n,a,s){n=n._reactInternals;var c=Kt(),f=vi(c);f.payload=a,s!=null&&(f.callback=s),a=wi(n,f,c),a!==null&&(Qt(a,n,c),cs(a,n,c))},enqueueReplaceState:function(n,a,s){n=n._reactInternals;var c=Kt(),f=vi(c);f.tag=1,f.payload=a,s!=null&&(f.callback=s),a=wi(n,f,c),a!==null&&(Qt(a,n,c),cs(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var s=Kt(),c=vi(s);c.tag=2,a!=null&&(c.callback=a),a=wi(n,c,s),a!==null&&(Qt(a,n,s),cs(a,n,s))}};function Sm(n,a,s,c,f,x,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,b):a.prototype&&a.prototype.isPureReactComponent?!Jr(s,c)||!Jr(f,x):!0}function Cm(n,a,s,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,c),a.state!==n&&Ed.enqueueReplaceState(a,a.state,null)}function la(n,a){var s=a;if("ref"in a){s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}if(n=n.defaultProps){s===a&&(s=g({},s));for(var f in n)s[f]===void 0&&(s[f]=n[f])}return s}var dl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Tm(n){dl(n)}function Em(n){console.error(n)}function jm(n){dl(n)}function fl(n,a){try{var s=n.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function Am(n,a,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function jd(n,a,s){return s=vi(s),s.tag=3,s.payload={element:null},s.callback=function(){fl(n,a)},s}function Mm(n){return n=vi(n),n.tag=3,n}function Lm(n,a,s,c){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var x=c.value;n.payload=function(){return f(x)},n.callback=function(){Am(a,s,c)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){Am(a,s,c),typeof f!="function"&&(Li===null?Li=new Set([this]):Li.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function Vv(n,a,s,c,f){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=s.alternate,a!==null&&as(a,s,f,!0),s=dn.current,s!==null){switch(s.tag){case 13:return On===null?Wd():s.alternate===null&&Ze===0&&(Ze=3),s.flags&=-257,s.flags|=65536,s.lanes=f,c===td?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([c]):a.add(c),Qd(n,c,f)),!1;case 22:return s.flags|=65536,c===td?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([c]):s.add(c)),Qd(n,c,f)),!1}throw Error(r(435,s.tag))}return Qd(n,c,f),Wd(),!1}if(Ee)return a=dn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,c!==Zu&&(n=Error(r(422),{cause:c}),is(on(n,s)))):(c!==Zu&&(a=Error(r(423),{cause:c}),is(on(a,s))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,c=on(c,s),f=jd(n.stateNode,c,f),ad(n,f),Ze!==4&&(Ze=2)),!1;var x=Error(r(520),{cause:c});if(x=on(x,s),Ts===null?Ts=[x]:Ts.push(x),Ze!==4&&(Ze=2),a===null)return!0;c=on(c,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,n=f&-f,s.lanes|=n,n=jd(s.stateNode,c,n),ad(s,n),!1;case 1:if(a=s.type,x=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Li===null||!Li.has(x))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Mm(f),Lm(f,n,s,c),ad(s,f),!1}s=s.return}while(s!==null);return!1}var Om=Error(r(461)),ct=!1;function mt(n,a,s,c){a.child=n===null?wm(a,null,s,c):Xa(a,n.child,s,c)}function Rm(n,a,s,c,f){s=s.render;var x=a.ref;if("ref"in c){var b={};for(var A in c)A!=="ref"&&(b[A]=c[A])}else b=c;return ra(a),c=cd(n,a,s,b,x,f),A=ud(),n!==null&&!ct?(dd(n,a,f),ei(n,a,f)):(Ee&&A&&Yu(a),a.flags|=1,mt(n,a,c,f),a.child)}function km(n,a,s,c,f){if(n===null){var x=s.type;return typeof x=="function"&&!Iu(x)&&x.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=x,Dm(n,a,x,c,f)):(n=qo(s.type,null,c,a,a.mode,f),n.ref=a.ref,n.return=a,a.child=n)}if(x=n.child,!Hd(n,f)){var b=x.memoizedProps;if(s=s.compare,s=s!==null?s:Jr,s(b,c)&&n.ref===a.ref)return ei(n,a,f)}return a.flags|=1,n=Fn(x,c),n.ref=a.ref,n.return=a,a.child=n}function Dm(n,a,s,c,f){if(n!==null){var x=n.memoizedProps;if(Jr(x,c)&&n.ref===a.ref)if(ct=!1,a.pendingProps=c=x,Hd(n,f))(n.flags&131072)!==0&&(ct=!0);else return a.lanes=n.lanes,ei(n,a,f)}return Ad(n,a,s,c,f)}function Hm(n,a,s){var c=a.pendingProps,f=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((a.flags&128)!==0){if(c=x!==null?x.baseLanes|s:s,n!==null){for(f=a.child=n.child,x=0;f!==null;)x=x|f.lanes|f.childLanes,f=f.sibling;a.childLanes=x&~c}else a.childLanes=0,a.child=null;return zm(n,a,c,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Wo(a,x!==null?x.cachePool:null),x!==null?D2(a,x):sd(),bm(a);else return a.lanes=a.childLanes=536870912,zm(n,a,x!==null?x.baseLanes|s:s,s)}else x!==null?(Wo(a,x.cachePool),D2(a,x),Ci(),a.memoizedState=null):(n!==null&&Wo(a,null),sd(),Ci());return mt(n,a,f,s),a.child}function zm(n,a,s,c){var f=ed();return f=f===null?null:{parent:rt._currentValue,pool:f},a.memoizedState={baseLanes:s,cachePool:f},n!==null&&Wo(a,null),sd(),bm(a),n!==null&&as(n,a,c,!0),null}function pl(n,a){var s=a.ref;if(s===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(n===null||n.ref!==s)&&(a.flags|=4194816)}}function Ad(n,a,s,c,f){return ra(a),s=cd(n,a,s,c,void 0,f),c=ud(),n!==null&&!ct?(dd(n,a,f),ei(n,a,f)):(Ee&&c&&Yu(a),a.flags|=1,mt(n,a,s,f),a.child)}function Vm(n,a,s,c,f,x){return ra(a),a.updateQueue=null,s=z2(a,c,s,f),H2(n),c=ud(),n!==null&&!ct?(dd(n,a,x),ei(n,a,x)):(Ee&&c&&Yu(a),a.flags|=1,mt(n,a,s,x),a.child)}function Pm(n,a,s,c,f){if(ra(a),a.stateNode===null){var x=$a,b=s.contextType;typeof b=="object"&&b!==null&&(x=Ct(b)),x=new s(c,x),a.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,x.updater=Ed,a.stateNode=x,x._reactInternals=a,x=a.stateNode,x.props=c,x.state=a.memoizedState,x.refs={},nd(a),b=s.contextType,x.context=typeof b=="object"&&b!==null?Ct(b):$a,x.state=a.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Td(a,s,b,c),x.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(b=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),b!==x.state&&Ed.enqueueReplaceState(x,x.state,null),ds(a,c,x,f),us(),x.state=a.memoizedState),typeof x.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){x=a.stateNode;var A=a.memoizedProps,H=la(s,A);x.props=H;var U=x.context,Z=s.contextType;b=$a,typeof Z=="object"&&Z!==null&&(b=Ct(Z));var J=s.getDerivedStateFromProps;Z=typeof J=="function"||typeof x.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,Z||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(A||U!==b)&&Cm(a,x,c,b),yi=!1;var I=a.memoizedState;x.state=I,ds(a,c,x,f),us(),U=a.memoizedState,A||I!==U||yi?(typeof J=="function"&&(Td(a,s,J,c),U=a.memoizedState),(H=yi||Sm(a,s,H,c,I,U,b))?(Z||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(a.flags|=4194308)):(typeof x.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=U),x.props=c,x.state=U,x.context=b,c=H):(typeof x.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{x=a.stateNode,id(n,a),b=a.memoizedProps,Z=la(s,b),x.props=Z,J=a.pendingProps,I=x.context,U=s.contextType,H=$a,typeof U=="object"&&U!==null&&(H=Ct(U)),A=s.getDerivedStateFromProps,(U=typeof A=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(b!==J||I!==H)&&Cm(a,x,c,H),yi=!1,I=a.memoizedState,x.state=I,ds(a,c,x,f),us();var G=a.memoizedState;b!==J||I!==G||yi||n!==null&&n.dependencies!==null&&Zo(n.dependencies)?(typeof A=="function"&&(Td(a,s,A,c),G=a.memoizedState),(Z=yi||Sm(a,s,Z,c,I,G,H)||n!==null&&n.dependencies!==null&&Zo(n.dependencies))?(U||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(c,G,H),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(c,G,H)),typeof x.componentDidUpdate=="function"&&(a.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof x.componentDidUpdate!="function"||b===n.memoizedProps&&I===n.memoizedState||(a.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&I===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=G),x.props=c,x.state=G,x.context=H,c=Z):(typeof x.componentDidUpdate!="function"||b===n.memoizedProps&&I===n.memoizedState||(a.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&I===n.memoizedState||(a.flags|=1024),c=!1)}return x=c,pl(n,a),c=(a.flags&128)!==0,x||c?(x=a.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:x.render(),a.flags|=1,n!==null&&c?(a.child=Xa(a,n.child,null,f),a.child=Xa(a,null,s,f)):mt(n,a,s,f),a.memoizedState=x.state,n=a.child):n=ei(n,a,f),n}function Nm(n,a,s,c){return ns(),a.flags|=256,mt(n,a,s,c),a.child}var Md={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ld(n){return{baseLanes:n,cachePool:E2()}}function Od(n,a,s){return n=n!==null?n.childLanes&~s:0,a&&(n|=fn),n}function $m(n,a,s){var c=a.pendingProps,f=!1,x=(a.flags&128)!==0,b;if((b=x)||(b=n!==null&&n.memoizedState===null?!1:(st.current&2)!==0),b&&(f=!0,a.flags&=-129),b=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ee){if(f?Si(a):Ci(),Ee){var A=Fe,H;if(H=A){e:{for(H=A,A=Ln;H.nodeType!==8;){if(!A){A=null;break e}if(H=Sn(H.nextSibling),H===null){A=null;break e}}A=H}A!==null?(a.memoizedState={dehydrated:A,treeContext:ea!==null?{id:Zn,overflow:Xn}:null,retryLane:536870912,hydrationErrors:null},H=Ft(18,null,null,0),H.stateNode=A,H.return=a,a.child=H,Mt=a,Fe=null,H=!0):H=!1}H||ia(a)}if(A=a.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return hf(A)?a.lanes=32:a.lanes=536870912,null;Jn(a)}return A=c.children,c=c.fallback,f?(Ci(),f=a.mode,A=hl({mode:"hidden",children:A},f),c=Ji(c,f,s,null),A.return=a,c.return=a,A.sibling=c,a.child=A,f=a.child,f.memoizedState=Ld(s),f.childLanes=Od(n,b,s),a.memoizedState=Md,c):(Si(a),Rd(a,A))}if(H=n.memoizedState,H!==null&&(A=H.dehydrated,A!==null)){if(x)a.flags&256?(Si(a),a.flags&=-257,a=kd(n,a,s)):a.memoizedState!==null?(Ci(),a.child=n.child,a.flags|=128,a=null):(Ci(),f=c.fallback,A=a.mode,c=hl({mode:"visible",children:c.children},A),f=Ji(f,A,s,null),f.flags|=2,c.return=a,f.return=a,c.sibling=f,a.child=c,Xa(a,n.child,null,s),c=a.child,c.memoizedState=Ld(s),c.childLanes=Od(n,b,s),a.memoizedState=Md,a=f);else if(Si(a),hf(A)){if(b=A.nextSibling&&A.nextSibling.dataset,b)var U=b.dgst;b=U,c=Error(r(419)),c.stack="",c.digest=b,is({value:c,source:null,stack:null}),a=kd(n,a,s)}else if(ct||as(n,a,s,!1),b=(s&n.childLanes)!==0,ct||b){if(b=Be,b!==null&&(c=s&-s,c=(c&42)!==0?1:hu(c),c=(c&(b.suspendedLanes|s))!==0?0:c,c!==0&&c!==H.retryLane))throw H.retryLane=c,Na(n,c),Qt(b,n,c),Om;A.data==="$?"||Wd(),a=kd(n,a,s)}else A.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=H.treeContext,Fe=Sn(A.nextSibling),Mt=a,Ee=!0,na=null,Ln=!1,n!==null&&(cn[un++]=Zn,cn[un++]=Xn,cn[un++]=ea,Zn=n.id,Xn=n.overflow,ea=a),a=Rd(a,c.children),a.flags|=4096);return a}return f?(Ci(),f=c.fallback,A=a.mode,H=n.child,U=H.sibling,c=Fn(H,{mode:"hidden",children:c.children}),c.subtreeFlags=H.subtreeFlags&65011712,U!==null?f=Fn(U,f):(f=Ji(f,A,s,null),f.flags|=2),f.return=a,c.return=a,c.sibling=f,a.child=c,c=f,f=a.child,A=n.child.memoizedState,A===null?A=Ld(s):(H=A.cachePool,H!==null?(U=rt._currentValue,H=H.parent!==U?{parent:U,pool:U}:H):H=E2(),A={baseLanes:A.baseLanes|s,cachePool:H}),f.memoizedState=A,f.childLanes=Od(n,b,s),a.memoizedState=Md,c):(Si(a),s=n.child,n=s.sibling,s=Fn(s,{mode:"visible",children:c.children}),s.return=a,s.sibling=null,n!==null&&(b=a.deletions,b===null?(a.deletions=[n],a.flags|=16):b.push(n)),a.child=s,a.memoizedState=null,s)}function Rd(n,a){return a=hl({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function hl(n,a){return n=Ft(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function kd(n,a,s){return Xa(a,n.child,null,s),n=Rd(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function Bm(n,a,s){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),Wu(n.return,a,s)}function Dd(n,a,s,c,f){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:f}:(x.isBackwards=a,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=s,x.tailMode=f)}function Um(n,a,s){var c=a.pendingProps,f=c.revealOrder,x=c.tail;if(mt(n,a,c.children,s),c=st.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bm(n,s,a);else if(n.tag===19)Bm(n,s,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(ie(st,c),f){case"forwards":for(s=a.child,f=null;s!==null;)n=s.alternate,n!==null&&ul(n)===null&&(f=s),s=s.sibling;s=f,s===null?(f=a.child,a.child=null):(f=s.sibling,s.sibling=null),Dd(a,!1,f,s,x);break;case"backwards":for(s=null,f=a.child,a.child=null;f!==null;){if(n=f.alternate,n!==null&&ul(n)===null){a.child=f;break}n=f.sibling,f.sibling=s,s=f,f=n}Dd(a,!0,s,null,x);break;case"together":Dd(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ei(n,a,s){if(n!==null&&(a.dependencies=n.dependencies),Mi|=a.lanes,(s&a.childLanes)===0)if(n!==null){if(as(n,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(r(153));if(a.child!==null){for(n=a.child,s=Fn(n,n.pendingProps),a.child=s,s.return=a;n.sibling!==null;)n=n.sibling,s=s.sibling=Fn(n,n.pendingProps),s.return=a;s.sibling=null}return a.child}function Hd(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Zo(n)))}function Pv(n,a,s){switch(a.tag){case 3:Le(a,a.stateNode.containerInfo),xi(a,rt,n.memoizedState.cache),ns();break;case 27:case 5:Fi(a);break;case 4:Le(a,a.stateNode.containerInfo);break;case 10:xi(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(Si(a),a.flags|=128,null):(s&a.child.childLanes)!==0?$m(n,a,s):(Si(a),n=ei(n,a,s),n!==null?n.sibling:null);Si(a);break;case 19:var f=(n.flags&128)!==0;if(c=(s&a.childLanes)!==0,c||(as(n,a,s,!1),c=(s&a.childLanes)!==0),f){if(c)return Um(n,a,s);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(st,st.current),c)break;return null;case 22:case 23:return a.lanes=0,Hm(n,a,s);case 24:xi(a,rt,n.memoizedState.cache)}return ei(n,a,s)}function _m(n,a,s){if(n!==null)if(n.memoizedProps!==a.pendingProps)ct=!0;else{if(!Hd(n,s)&&(a.flags&128)===0)return ct=!1,Pv(n,a,s);ct=(n.flags&131072)!==0}else ct=!1,Ee&&(a.flags&1048576)!==0&&y2(a,Fo,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var c=a.elementType,f=c._init;if(c=f(c._payload),a.type=c,typeof c=="function")Iu(c)?(n=la(c,n),a.tag=1,a=Pm(null,a,c,n,s)):(a.tag=0,a=Ad(null,a,c,n,s));else{if(c!=null){if(f=c.$$typeof,f===D){a.tag=11,a=Rm(null,a,c,n,s);break e}else if(f===V){a.tag=14,a=km(null,a,c,n,s);break e}}throw a=ce(c)||c,Error(r(306,a,""))}}return a;case 0:return Ad(n,a,a.type,a.pendingProps,s);case 1:return c=a.type,f=la(c,a.pendingProps),Pm(n,a,c,f,s);case 3:e:{if(Le(a,a.stateNode.containerInfo),n===null)throw Error(r(387));c=a.pendingProps;var x=a.memoizedState;f=x.element,id(n,a),ds(a,c,null,s);var b=a.memoizedState;if(c=b.cache,xi(a,rt,c),c!==x.cache&&Ku(a,[rt],s,!0),us(),c=b.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:b.cache},a.updateQueue.baseState=x,a.memoizedState=x,a.flags&256){a=Nm(n,a,c,s);break e}else if(c!==f){f=on(Error(r(424)),a),is(f),a=Nm(n,a,c,s);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Fe=Sn(n.firstChild),Mt=a,Ee=!0,na=null,Ln=!0,s=wm(a,null,c,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ns(),c===f){a=ei(n,a,s);break e}mt(n,a,c,s)}a=a.child}return a;case 26:return pl(n,a),n===null?(s=Yg(a.type,null,a.pendingProps,null))?a.memoizedState=s:Ee||(s=a.type,n=a.pendingProps,c=Ml(de.current).createElement(s),c[St]=a,c[kt]=n,xt(c,s,n),lt(c),a.stateNode=c):a.memoizedState=Yg(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Fi(a),n===null&&Ee&&(c=a.stateNode=Ig(a.type,a.pendingProps,de.current),Mt=a,Ln=!0,f=Fe,ki(a.type)?(mf=f,Fe=Sn(c.firstChild)):Fe=f),mt(n,a,a.pendingProps.children,s),pl(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Ee&&((f=c=Fe)&&(c=d9(c,a.type,a.pendingProps,Ln),c!==null?(a.stateNode=c,Mt=a,Fe=Sn(c.firstChild),Ln=!1,f=!0):f=!1),f||ia(a)),Fi(a),f=a.type,x=a.pendingProps,b=n!==null?n.memoizedProps:null,c=x.children,df(f,x)?c=null:b!==null&&df(f,b)&&(a.flags|=32),a.memoizedState!==null&&(f=cd(n,a,Lv,null,null,s),Ds._currentValue=f),pl(n,a),mt(n,a,c,s),a.child;case 6:return n===null&&Ee&&((n=s=Fe)&&(s=f9(s,a.pendingProps,Ln),s!==null?(a.stateNode=s,Mt=a,Fe=null,n=!0):n=!1),n||ia(a)),null;case 13:return $m(n,a,s);case 4:return Le(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=Xa(a,null,c,s):mt(n,a,c,s),a.child;case 11:return Rm(n,a,a.type,a.pendingProps,s);case 7:return mt(n,a,a.pendingProps,s),a.child;case 8:return mt(n,a,a.pendingProps.children,s),a.child;case 12:return mt(n,a,a.pendingProps.children,s),a.child;case 10:return c=a.pendingProps,xi(a,a.type,c.value),mt(n,a,c.children,s),a.child;case 9:return f=a.type._context,c=a.pendingProps.children,ra(a),f=Ct(f),c=c(f),a.flags|=1,mt(n,a,c,s),a.child;case 14:return km(n,a,a.type,a.pendingProps,s);case 15:return Dm(n,a,a.type,a.pendingProps,s);case 19:return Um(n,a,s);case 31:return c=a.pendingProps,s=a.mode,c={mode:c.mode,children:c.children},n===null?(s=hl(c,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=Fn(n.child,c),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return Hm(n,a,s);case 24:return ra(a),c=Ct(rt),n===null?(f=ed(),f===null&&(f=Be,x=Qu(),f.pooledCache=x,x.refCount++,x!==null&&(f.pooledCacheLanes|=s),f=x),a.memoizedState={parent:c,cache:f},nd(a),xi(a,rt,f)):((n.lanes&s)!==0&&(id(n,a),ds(a,null,null,s),us()),f=n.memoizedState,x=a.memoizedState,f.parent!==c?(f={parent:c,cache:c},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),xi(a,rt,c)):(c=x.cache,xi(a,rt,c),c!==f.cache&&Ku(a,[rt],s,!0))),mt(n,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function ti(n){n.flags|=4}function Im(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Kg(a)){if(a=dn.current,a!==null&&((Ce&4194048)===Ce?On!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||a!==On))throw ls=td,j2;n.flags|=8192}}function ml(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?bh():536870912,n.lanes|=a,Ja|=a)}function ys(n,a){if(!Ee)switch(n.tailMode){case"hidden":a=n.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function qe(n){var a=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(a)for(var f=n.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=s,a}function Nv(n,a,s){var c=a.pendingProps;switch(Fu(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(a),null;case 1:return qe(a),null;case 3:return s=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Kn(rt),bt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(ts(a)?ti(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,b2())),qe(a),null;case 26:return s=a.memoizedState,n===null?(ti(a),s!==null?(qe(a),Im(a,s)):(qe(a),a.flags&=-16777217)):s?s!==n.memoizedState?(ti(a),qe(a),Im(a,s)):(qe(a),a.flags&=-16777217):(n.memoizedProps!==c&&ti(a),qe(a),a.flags&=-16777217),null;case 27:Gn(a),s=de.current;var f=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&ti(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return qe(a),null}n=le.current,ts(a)?v2(a):(n=Ig(f,c,s),a.stateNode=n,ti(a))}return qe(a),null;case 5:if(Gn(a),s=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&ti(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return qe(a),null}if(n=le.current,ts(a))v2(a);else{switch(f=Ml(de.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?f.createElement(s,{is:c.is}):f.createElement(s)}}n[St]=a,n[kt]=c;e:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break e;for(;f.sibling===null;){if(f.return===null||f.return===a)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=n;e:switch(xt(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ti(a)}}return qe(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&ti(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(r(166));if(n=de.current,ts(a)){if(n=a.stateNode,s=a.memoizedProps,c=null,f=Mt,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}n[St]=a,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||Vg(n.nodeValue,s)),n||ia(a)}else n=Ml(n).createTextNode(c),n[St]=a,a.stateNode=n}return qe(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=ts(a),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(r(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[St]=a}else ns(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;qe(a),f=!1}else f=b2(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(Jn(a),a):(Jn(a),null)}if(Jn(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=a.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var x=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(x=c.memoizedState.cachePool.pool),x!==f&&(c.flags|=2048)}return s!==n&&s&&(a.child.flags|=8192),ml(a,a.updateQueue),qe(a),null;case 4:return bt(),n===null&&sf(a.stateNode.containerInfo),qe(a),null;case 10:return Kn(a.type),qe(a),null;case 19:if(ne(st),f=a.memoizedState,f===null)return qe(a),null;if(c=(a.flags&128)!==0,x=f.rendering,x===null)if(c)ys(f,!1);else{if(Ze!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(x=ul(n),x!==null){for(a.flags|=128,ys(f,!1),n=x.updateQueue,a.updateQueue=n,ml(a,n),a.subtreeFlags=0,n=s,s=a.child;s!==null;)x2(s,n),s=s.sibling;return ie(st,st.current&1|2),a.child}n=n.sibling}f.tail!==null&&Mn()>yl&&(a.flags|=128,c=!0,ys(f,!1),a.lanes=4194304)}else{if(!c)if(n=ul(x),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,ml(a,n),ys(f,!0),f.tail===null&&f.tailMode==="hidden"&&!x.alternate&&!Ee)return qe(a),null}else 2*Mn()-f.renderingStartTime>yl&&s!==536870912&&(a.flags|=128,c=!0,ys(f,!1),a.lanes=4194304);f.isBackwards?(x.sibling=a.child,a.child=x):(n=f.last,n!==null?n.sibling=x:a.child=x,f.last=x)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=Mn(),a.sibling=null,n=st.current,ie(st,c?n&1|2:n&1),a):(qe(a),null);case 22:case 23:return Jn(a),od(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(s&536870912)!==0&&(a.flags&128)===0&&(qe(a),a.subtreeFlags&6&&(a.flags|=8192)):qe(a),s=a.updateQueue,s!==null&&ml(a,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==s&&(a.flags|=2048),n!==null&&ne(sa),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Kn(rt),qe(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function $v(n,a){switch(Fu(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Kn(rt),bt(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Gn(a),null;case 13:if(Jn(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(r(340));ns()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return ne(st),null;case 4:return bt(),null;case 10:return Kn(a.type),null;case 22:case 23:return Jn(a),od(),n!==null&&ne(sa),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Kn(rt),null;case 25:return null;default:return null}}function Gm(n,a){switch(Fu(a),a.tag){case 3:Kn(rt),bt();break;case 26:case 27:case 5:Gn(a);break;case 4:bt();break;case 13:Jn(a);break;case 19:ne(st);break;case 10:Kn(a.type);break;case 22:case 23:Jn(a),od(),n!==null&&ne(sa);break;case 24:Kn(rt)}}function vs(n,a){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&n)===n){c=void 0;var x=s.create,b=s.inst;c=x(),b.destroy=c}s=s.next}while(s!==f)}}catch(A){$e(a,a.return,A)}}function Ti(n,a,s){try{var c=a.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var x=f.next;c=x;do{if((c.tag&n)===n){var b=c.inst,A=b.destroy;if(A!==void 0){b.destroy=void 0,f=a;var H=s,U=A;try{U()}catch(Z){$e(f,H,Z)}}}c=c.next}while(c!==x)}}catch(Z){$e(a,a.return,Z)}}function qm(n){var a=n.updateQueue;if(a!==null){var s=n.stateNode;try{k2(a,s)}catch(c){$e(n,n.return,c)}}}function Ym(n,a,s){s.props=la(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){$e(n,a,c)}}function ws(n,a){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(f){$e(n,a,f)}}function Rn(n,a){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(f){$e(n,a,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){$e(n,a,f)}else s.current=null}function Fm(n){var a=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(f){$e(n,n.return,f)}}function zd(n,a,s){try{var c=n.stateNode;s9(c,n.type,s,a),c[kt]=a}catch(f){$e(n,n.return,f)}}function Zm(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ki(n.type)||n.tag===4}function Vd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Zm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ki(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Pd(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(n),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Al));else if(c!==4&&(c===27&&ki(n.type)&&(s=n.stateNode,a=null),n=n.child,n!==null))for(Pd(n,a,s),n=n.sibling;n!==null;)Pd(n,a,s),n=n.sibling}function gl(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?s.insertBefore(n,a):s.appendChild(n);else if(c!==4&&(c===27&&ki(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(gl(n,a,s),n=n.sibling;n!==null;)gl(n,a,s),n=n.sibling}function Xm(n){var a=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);xt(a,c,s),a[St]=n,a[kt]=s}catch(x){$e(n,n.return,x)}}var ni=!1,Qe=!1,Nd=!1,Wm=typeof WeakSet=="function"?WeakSet:Set,ut=null;function Bv(n,a){if(n=n.containerInfo,cf=Hl,n=o2(n),Vu(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break e}var b=0,A=-1,H=-1,U=0,Z=0,J=n,I=null;t:for(;;){for(var G;J!==s||f!==0&&J.nodeType!==3||(A=b+f),J!==x||c!==0&&J.nodeType!==3||(H=b+c),J.nodeType===3&&(b+=J.nodeValue.length),(G=J.firstChild)!==null;)I=J,J=G;for(;;){if(J===n)break t;if(I===s&&++U===f&&(A=b),I===x&&++Z===c&&(H=b),(G=J.nextSibling)!==null)break;J=I,I=J.parentNode}J=G}s=A===-1||H===-1?null:{start:A,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(uf={focusedElem:n,selectionRange:s},Hl=!1,ut=a;ut!==null;)if(a=ut,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,ut=n;else for(;ut!==null;){switch(a=ut,x=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&x!==null){n=void 0,s=a,f=x.memoizedProps,x=x.memoizedState,c=s.stateNode;try{var pe=la(s.type,f,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(pe,x),c.__reactInternalSnapshotBeforeUpdate=n}catch(ue){$e(s,s.return,ue)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,s=n.nodeType,s===9)pf(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":pf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=a.sibling,n!==null){n.return=a.return,ut=n;break}ut=a.return}}function Km(n,a,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Ei(n,s),c&4&&vs(5,s);break;case 1:if(Ei(n,s),c&4)if(n=s.stateNode,a===null)try{n.componentDidMount()}catch(b){$e(s,s.return,b)}else{var f=la(s.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(f,a,n.__reactInternalSnapshotBeforeUpdate)}catch(b){$e(s,s.return,b)}}c&64&&qm(s),c&512&&ws(s,s.return);break;case 3:if(Ei(n,s),c&64&&(n=s.updateQueue,n!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{k2(n,a)}catch(b){$e(s,s.return,b)}}break;case 27:a===null&&c&4&&Xm(s);case 26:case 5:Ei(n,s),a===null&&c&4&&Fm(s),c&512&&ws(s,s.return);break;case 12:Ei(n,s);break;case 13:Ei(n,s),c&4&&eg(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=Xv.bind(null,s),p9(n,s))));break;case 22:if(c=s.memoizedState!==null||ni,!c){a=a!==null&&a.memoizedState!==null||Qe,f=ni;var x=Qe;ni=c,(Qe=a)&&!x?ji(n,s,(s.subtreeFlags&8772)!==0):Ei(n,s),ni=f,Qe=x}break;case 30:break;default:Ei(n,s)}}function Qm(n){var a=n.alternate;a!==null&&(n.alternate=null,Qm(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&xu(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var _e=null,zt=!1;function ii(n,a,s){for(s=s.child;s!==null;)Jm(n,a,s),s=s.sibling}function Jm(n,a,s){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Ur,s)}catch{}switch(s.tag){case 26:Qe||Rn(s,a),ii(n,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Qe||Rn(s,a);var c=_e,f=zt;ki(s.type)&&(_e=s.stateNode,zt=!1),ii(n,a,s),Ls(s.stateNode),_e=c,zt=f;break;case 5:Qe||Rn(s,a);case 6:if(c=_e,f=zt,_e=null,ii(n,a,s),_e=c,zt=f,_e!==null)if(zt)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(s.stateNode)}catch(x){$e(s,a,x)}else try{_e.removeChild(s.stateNode)}catch(x){$e(s,a,x)}break;case 18:_e!==null&&(zt?(n=_e,Ug(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),Ps(n)):Ug(_e,s.stateNode));break;case 4:c=_e,f=zt,_e=s.stateNode.containerInfo,zt=!0,ii(n,a,s),_e=c,zt=f;break;case 0:case 11:case 14:case 15:Qe||Ti(2,s,a),Qe||Ti(4,s,a),ii(n,a,s);break;case 1:Qe||(Rn(s,a),c=s.stateNode,typeof c.componentWillUnmount=="function"&&Ym(s,a,c)),ii(n,a,s);break;case 21:ii(n,a,s);break;case 22:Qe=(c=Qe)||s.memoizedState!==null,ii(n,a,s),Qe=c;break;default:ii(n,a,s)}}function eg(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ps(n)}catch(s){$e(a,a.return,s)}}function Uv(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Wm),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Wm),a;default:throw Error(r(435,n.tag))}}function $d(n,a){var s=Uv(n);a.forEach(function(c){var f=Wv.bind(null,n,c);s.has(c)||(s.add(c),c.then(f,f))})}function Zt(n,a){var s=a.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],x=n,b=a,A=b;e:for(;A!==null;){switch(A.tag){case 27:if(ki(A.type)){_e=A.stateNode,zt=!1;break e}break;case 5:_e=A.stateNode,zt=!1;break e;case 3:case 4:_e=A.stateNode.containerInfo,zt=!0;break e}A=A.return}if(_e===null)throw Error(r(160));Jm(x,b,f),_e=null,zt=!1,x=f.alternate,x!==null&&(x.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)tg(a,n),a=a.sibling}var bn=null;function tg(n,a){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Zt(a,n),Xt(n),c&4&&(Ti(3,n,n.return),vs(3,n),Ti(5,n,n.return));break;case 1:Zt(a,n),Xt(n),c&512&&(Qe||s===null||Rn(s,s.return)),c&64&&ni&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var f=bn;if(Zt(a,n),Xt(n),c&512&&(Qe||s===null||Rn(s,s.return)),c&4){var x=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":x=f.getElementsByTagName("title")[0],(!x||x[Gr]||x[St]||x.namespaceURI==="http://www.w3.org/2000/svg"||x.hasAttribute("itemprop"))&&(x=f.createElement(c),f.head.insertBefore(x,f.querySelector("head > title"))),xt(x,c,s),x[St]=n,lt(x),c=x;break e;case"link":var b=Xg("link","href",f).get(c+(s.href||""));if(b){for(var A=0;A<b.length;A++)if(x=b[A],x.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&x.getAttribute("rel")===(s.rel==null?null:s.rel)&&x.getAttribute("title")===(s.title==null?null:s.title)&&x.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(A,1);break t}}x=f.createElement(c),xt(x,c,s),f.head.appendChild(x);break;case"meta":if(b=Xg("meta","content",f).get(c+(s.content||""))){for(A=0;A<b.length;A++)if(x=b[A],x.getAttribute("content")===(s.content==null?null:""+s.content)&&x.getAttribute("name")===(s.name==null?null:s.name)&&x.getAttribute("property")===(s.property==null?null:s.property)&&x.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&x.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(A,1);break t}}x=f.createElement(c),xt(x,c,s),f.head.appendChild(x);break;default:throw Error(r(468,c))}x[St]=n,lt(x),c=x}n.stateNode=c}else Wg(f,n.type,n.stateNode);else n.stateNode=Zg(f,c,n.memoizedProps);else x!==c?(x===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):x.count--,c===null?Wg(f,n.type,n.stateNode):Zg(f,c,n.memoizedProps)):c===null&&n.stateNode!==null&&zd(n,n.memoizedProps,s.memoizedProps)}break;case 27:Zt(a,n),Xt(n),c&512&&(Qe||s===null||Rn(s,s.return)),s!==null&&c&4&&zd(n,n.memoizedProps,s.memoizedProps);break;case 5:if(Zt(a,n),Xt(n),c&512&&(Qe||s===null||Rn(s,s.return)),n.flags&32){f=n.stateNode;try{Ra(f,"")}catch(G){$e(n,n.return,G)}}c&4&&n.stateNode!=null&&(f=n.memoizedProps,zd(n,f,s!==null?s.memoizedProps:f)),c&1024&&(Nd=!0);break;case 6:if(Zt(a,n),Xt(n),c&4){if(n.stateNode===null)throw Error(r(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(G){$e(n,n.return,G)}}break;case 3:if(Rl=null,f=bn,bn=Ll(a.containerInfo),Zt(a,n),bn=f,Xt(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Ps(a.containerInfo)}catch(G){$e(n,n.return,G)}Nd&&(Nd=!1,ng(n));break;case 4:c=bn,bn=Ll(n.stateNode.containerInfo),Zt(a,n),Xt(n),bn=c;break;case 12:Zt(a,n),Xt(n);break;case 13:Zt(a,n),Xt(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(qd=Mn()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,$d(n,c)));break;case 22:f=n.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,U=ni,Z=Qe;if(ni=U||f,Qe=Z||H,Zt(a,n),Qe=Z,ni=U,Xt(n),c&8192)e:for(a=n.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(s===null||H||ni||Qe||ca(n)),s=null,a=n;;){if(a.tag===5||a.tag===26){if(s===null){H=s=a;try{if(x=H.stateNode,f)b=x.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{A=H.stateNode;var J=H.memoizedProps.style,I=J!=null&&J.hasOwnProperty("display")?J.display:null;A.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(G){$e(H,H.return,G)}}}else if(a.tag===6){if(s===null){H=a;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(G){$e(H,H.return,G)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,$d(n,s))));break;case 19:Zt(a,n),Xt(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,$d(n,c)));break;case 30:break;case 21:break;default:Zt(a,n),Xt(n)}}function Xt(n){var a=n.flags;if(a&2){try{for(var s,c=n.return;c!==null;){if(Zm(c)){s=c;break}c=c.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,x=Vd(n);gl(n,x,f);break;case 5:var b=s.stateNode;s.flags&32&&(Ra(b,""),s.flags&=-33);var A=Vd(n);gl(n,A,b);break;case 3:case 4:var H=s.stateNode.containerInfo,U=Vd(n);Pd(n,U,H);break;default:throw Error(r(161))}}catch(Z){$e(n,n.return,Z)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function ng(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;ng(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Ei(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Km(n,a.alternate,a),a=a.sibling}function ca(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:Ti(4,a,a.return),ca(a);break;case 1:Rn(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&Ym(a,a.return,s),ca(a);break;case 27:Ls(a.stateNode);case 26:case 5:Rn(a,a.return),ca(a);break;case 22:a.memoizedState===null&&ca(a);break;case 30:ca(a);break;default:ca(a)}n=n.sibling}}function ji(n,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,f=n,x=a,b=x.flags;switch(x.tag){case 0:case 11:case 15:ji(f,x,s),vs(4,x);break;case 1:if(ji(f,x,s),c=x,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(U){$e(c,c.return,U)}if(c=x,f=c.updateQueue,f!==null){var A=c.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)R2(H[f],A)}catch(U){$e(c,c.return,U)}}s&&b&64&&qm(x),ws(x,x.return);break;case 27:Xm(x);case 26:case 5:ji(f,x,s),s&&c===null&&b&4&&Fm(x),ws(x,x.return);break;case 12:ji(f,x,s);break;case 13:ji(f,x,s),s&&b&4&&eg(f,x);break;case 22:x.memoizedState===null&&ji(f,x,s),ws(x,x.return);break;case 30:break;default:ji(f,x,s)}a=a.sibling}}function Bd(n,a){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&rs(s))}function Ud(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&rs(n))}function kn(n,a,s,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ig(n,a,s,c),a=a.sibling}function ig(n,a,s,c){var f=a.flags;switch(a.tag){case 0:case 11:case 15:kn(n,a,s,c),f&2048&&vs(9,a);break;case 1:kn(n,a,s,c);break;case 3:kn(n,a,s,c),f&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&rs(n)));break;case 12:if(f&2048){kn(n,a,s,c),n=a.stateNode;try{var x=a.memoizedProps,b=x.id,A=x.onPostCommit;typeof A=="function"&&A(b,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(H){$e(a,a.return,H)}}else kn(n,a,s,c);break;case 13:kn(n,a,s,c);break;case 23:break;case 22:x=a.stateNode,b=a.alternate,a.memoizedState!==null?x._visibility&2?kn(n,a,s,c):bs(n,a):x._visibility&2?kn(n,a,s,c):(x._visibility|=2,Wa(n,a,s,c,(a.subtreeFlags&10256)!==0)),f&2048&&Bd(b,a);break;case 24:kn(n,a,s,c),f&2048&&Ud(a.alternate,a);break;default:kn(n,a,s,c)}}function Wa(n,a,s,c,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var x=n,b=a,A=s,H=c,U=b.flags;switch(b.tag){case 0:case 11:case 15:Wa(x,b,A,H,f),vs(8,b);break;case 23:break;case 22:var Z=b.stateNode;b.memoizedState!==null?Z._visibility&2?Wa(x,b,A,H,f):bs(x,b):(Z._visibility|=2,Wa(x,b,A,H,f)),f&&U&2048&&Bd(b.alternate,b);break;case 24:Wa(x,b,A,H,f),f&&U&2048&&Ud(b.alternate,b);break;default:Wa(x,b,A,H,f)}a=a.sibling}}function bs(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=n,c=a,f=c.flags;switch(c.tag){case 22:bs(s,c),f&2048&&Bd(c.alternate,c);break;case 24:bs(s,c),f&2048&&Ud(c.alternate,c);break;default:bs(s,c)}a=a.sibling}}var Ss=8192;function Ka(n){if(n.subtreeFlags&Ss)for(n=n.child;n!==null;)ag(n),n=n.sibling}function ag(n){switch(n.tag){case 26:Ka(n),n.flags&Ss&&n.memoizedState!==null&&j9(bn,n.memoizedState,n.memoizedProps);break;case 5:Ka(n);break;case 3:case 4:var a=bn;bn=Ll(n.stateNode.containerInfo),Ka(n),bn=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Ss,Ss=16777216,Ka(n),Ss=a):Ka(n));break;default:Ka(n)}}function rg(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Cs(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];ut=c,og(c,n)}rg(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sg(n),n=n.sibling}function sg(n){switch(n.tag){case 0:case 11:case 15:Cs(n),n.flags&2048&&Ti(9,n,n.return);break;case 3:Cs(n);break;case 12:Cs(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,xl(n)):Cs(n);break;default:Cs(n)}}function xl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];ut=c,og(c,n)}rg(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:Ti(8,a,a.return),xl(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,xl(a));break;default:xl(a)}n=n.sibling}}function og(n,a){for(;ut!==null;){var s=ut;switch(s.tag){case 0:case 11:case 15:Ti(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:rs(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,ut=c;else e:for(s=n;ut!==null;){c=ut;var f=c.sibling,x=c.return;if(Qm(c),c===s){ut=null;break e}if(f!==null){f.return=x,ut=f;break e}ut=x}}}var _v={getCacheForType:function(n){var a=Ct(rt),s=a.data.get(n);return s===void 0&&(s=n(),a.data.set(n,s)),s}},Iv=typeof WeakMap=="function"?WeakMap:Map,He=0,Be=null,be=null,Ce=0,ze=0,Wt=null,Ai=!1,Qa=!1,_d=!1,ai=0,Ze=0,Mi=0,ua=0,Id=0,fn=0,Ja=0,Ts=null,Vt=null,Gd=!1,qd=0,yl=1/0,vl=null,Li=null,gt=0,Oi=null,er=null,tr=0,Yd=0,Fd=null,lg=null,Es=0,Zd=null;function Kt(){if((He&2)!==0&&Ce!==0)return Ce&-Ce;if(N.T!==null){var n=_a;return n!==0?n:tf()}return Th()}function cg(){fn===0&&(fn=(Ce&536870912)===0||Ee?wh():536870912);var n=dn.current;return n!==null&&(n.flags|=32),fn}function Qt(n,a,s){(n===Be&&(ze===2||ze===9)||n.cancelPendingCommit!==null)&&(nr(n,0),Ri(n,Ce,fn,!1)),Ir(n,s),((He&2)===0||n!==Be)&&(n===Be&&((He&2)===0&&(ua|=s),Ze===4&&Ri(n,Ce,fn,!1)),Dn(n))}function ug(n,a,s){if((He&6)!==0)throw Error(r(327));var c=!s&&(a&124)===0&&(a&n.expiredLanes)===0||_r(n,a),f=c?Yv(n,a):Kd(n,a,!0),x=c;do{if(f===0){Qa&&!c&&Ri(n,a,0,!1);break}else{if(s=n.current.alternate,x&&!Gv(s)){f=Kd(n,a,!1),x=!1;continue}if(f===2){if(x=a,n.errorRecoveryDisabledLanes&x)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){a=b;e:{var A=n;f=Ts;var H=A.current.memoizedState.isDehydrated;if(H&&(nr(A,b).flags|=256),b=Kd(A,b,!1),b!==2){if(_d&&!H){A.errorRecoveryDisabledLanes|=x,ua|=x,f=4;break e}x=Vt,Vt=f,x!==null&&(Vt===null?Vt=x:Vt.push.apply(Vt,x))}f=b}if(x=!1,f!==2)continue}}if(f===1){nr(n,0),Ri(n,a,0,!0);break}e:{switch(c=n,x=f,x){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:Ri(c,a,fn,!Ai);break e;case 2:Vt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(f=qd+300-Mn(),10<f)){if(Ri(c,a,fn,!Ai),Oo(c,0,!0)!==0)break e;c.timeoutHandle=$g(dg.bind(null,c,s,Vt,vl,Gd,a,fn,ua,Ja,Ai,x,2,-0,0),f);break e}dg(c,s,Vt,vl,Gd,a,fn,ua,Ja,Ai,x,0,-0,0)}}break}while(!0);Dn(n)}function dg(n,a,s,c,f,x,b,A,H,U,Z,J,I,G){if(n.timeoutHandle=-1,J=a.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(ks={stylesheets:null,count:0,unsuspend:E9},ag(a),J=A9(),J!==null)){n.cancelPendingCommit=J(yg.bind(null,n,a,x,s,c,f,b,A,H,Z,1,I,G)),Ri(n,x,b,!U);return}yg(n,a,x,s,c,f,b,A,H)}function Gv(n){for(var a=n;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var f=s[c],x=f.getSnapshot;f=f.value;try{if(!Yt(x(),f))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ri(n,a,s,c){a&=~Id,a&=~ua,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var f=a;0<f;){var x=31-qt(f),b=1<<x;c[x]=-1,f&=~b}s!==0&&Sh(n,s,a)}function wl(){return(He&6)===0?(js(0),!1):!0}function Xd(){if(be!==null){if(ze===0)var n=be.return;else n=be,Wn=aa=null,fd(n),Za=null,gs=0,n=be;for(;n!==null;)Gm(n.alternate,n),n=n.return;be=null}}function nr(n,a){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,l9(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Xd(),Be=n,be=s=Fn(n.current,null),Ce=a,ze=0,Wt=null,Ai=!1,Qa=_r(n,a),_d=!1,Ja=fn=Id=ua=Mi=Ze=0,Vt=Ts=null,Gd=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var f=31-qt(c),x=1<<f;a|=n[f],c&=~x}return ai=a,_o(),s}function fg(n,a){ye=null,N.H=ol,a===os||a===Ko?(a=L2(),ze=3):a===j2?(a=L2(),ze=4):ze=a===Om?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Wt=a,be===null&&(Ze=1,fl(n,on(a,n.current)))}function pg(){var n=N.H;return N.H=ol,n===null?ol:n}function hg(){var n=N.A;return N.A=_v,n}function Wd(){Ze=4,Ai||(Ce&4194048)!==Ce&&dn.current!==null||(Qa=!0),(Mi&134217727)===0&&(ua&134217727)===0||Be===null||Ri(Be,Ce,fn,!1)}function Kd(n,a,s){var c=He;He|=2;var f=pg(),x=hg();(Be!==n||Ce!==a)&&(vl=null,nr(n,a)),a=!1;var b=Ze;e:do try{if(ze!==0&&be!==null){var A=be,H=Wt;switch(ze){case 8:Xd(),b=6;break e;case 3:case 2:case 9:case 6:dn.current===null&&(a=!0);var U=ze;if(ze=0,Wt=null,ir(n,A,H,U),s&&Qa){b=0;break e}break;default:U=ze,ze=0,Wt=null,ir(n,A,H,U)}}qv(),b=Ze;break}catch(Z){fg(n,Z)}while(!0);return a&&n.shellSuspendCounter++,Wn=aa=null,He=c,N.H=f,N.A=x,be===null&&(Be=null,Ce=0,_o()),b}function qv(){for(;be!==null;)mg(be)}function Yv(n,a){var s=He;He|=2;var c=pg(),f=hg();Be!==n||Ce!==a?(vl=null,yl=Mn()+500,nr(n,a)):Qa=_r(n,a);e:do try{if(ze!==0&&be!==null){a=be;var x=Wt;t:switch(ze){case 1:ze=0,Wt=null,ir(n,a,x,1);break;case 2:case 9:if(A2(x)){ze=0,Wt=null,gg(a);break}a=function(){ze!==2&&ze!==9||Be!==n||(ze=7),Dn(n)},x.then(a,a);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:A2(x)?(ze=0,Wt=null,gg(a)):(ze=0,Wt=null,ir(n,a,x,7));break;case 5:var b=null;switch(be.tag){case 26:b=be.memoizedState;case 5:case 27:var A=be;if(!b||Kg(b)){ze=0,Wt=null;var H=A.sibling;if(H!==null)be=H;else{var U=A.return;U!==null?(be=U,bl(U)):be=null}break t}}ze=0,Wt=null,ir(n,a,x,5);break;case 6:ze=0,Wt=null,ir(n,a,x,6);break;case 8:Xd(),Ze=6;break e;default:throw Error(r(462))}}Fv();break}catch(Z){fg(n,Z)}while(!0);return Wn=aa=null,N.H=c,N.A=f,He=s,be!==null?0:(Be=null,Ce=0,_o(),Ze)}function Fv(){for(;be!==null&&!m7();)mg(be)}function mg(n){var a=_m(n.alternate,n,ai);n.memoizedProps=n.pendingProps,a===null?bl(n):be=a}function gg(n){var a=n,s=a.alternate;switch(a.tag){case 15:case 0:a=Vm(s,a,a.pendingProps,a.type,void 0,Ce);break;case 11:a=Vm(s,a,a.pendingProps,a.type.render,a.ref,Ce);break;case 5:fd(a);default:Gm(s,a),a=be=x2(a,ai),a=_m(s,a,ai)}n.memoizedProps=n.pendingProps,a===null?bl(n):be=a}function ir(n,a,s,c){Wn=aa=null,fd(a),Za=null,gs=0;var f=a.return;try{if(Vv(n,f,a,s,Ce)){Ze=1,fl(n,on(s,n.current)),be=null;return}}catch(x){if(f!==null)throw be=f,x;Ze=1,fl(n,on(s,n.current)),be=null;return}a.flags&32768?(Ee||c===1?n=!0:Qa||(Ce&536870912)!==0?n=!1:(Ai=n=!0,(c===2||c===9||c===3||c===6)&&(c=dn.current,c!==null&&c.tag===13&&(c.flags|=16384))),xg(a,n)):bl(a)}function bl(n){var a=n;do{if((a.flags&32768)!==0){xg(a,Ai);return}n=a.return;var s=Nv(a.alternate,a,ai);if(s!==null){be=s;return}if(a=a.sibling,a!==null){be=a;return}be=a=n}while(a!==null);Ze===0&&(Ze=5)}function xg(n,a){do{var s=$v(n.alternate,n);if(s!==null){s.flags&=32767,be=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(n=n.sibling,n!==null)){be=n;return}be=n=s}while(n!==null);Ze=6,be=null}function yg(n,a,s,c,f,x,b,A,H){n.cancelPendingCommit=null;do Sl();while(gt!==0);if((He&6)!==0)throw Error(r(327));if(a!==null){if(a===n.current)throw Error(r(177));if(x=a.lanes|a.childLanes,x|=Uu,E7(n,s,x,b,A,H),n===Be&&(be=Be=null,Ce=0),er=a,Oi=n,tr=s,Yd=x,Fd=f,lg=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Kv(Ao,function(){return Cg(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=N.T,N.T=null,f=X.p,X.p=2,b=He,He|=4;try{Bv(n,a,s)}finally{He=b,X.p=f,N.T=c}}gt=1,vg(),wg(),bg()}}function vg(){if(gt===1){gt=0;var n=Oi,a=er,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=N.T,N.T=null;var c=X.p;X.p=2;var f=He;He|=4;try{tg(a,n);var x=uf,b=o2(n.containerInfo),A=x.focusedElem,H=x.selectionRange;if(b!==A&&A&&A.ownerDocument&&s2(A.ownerDocument.documentElement,A)){if(H!==null&&Vu(A)){var U=H.start,Z=H.end;if(Z===void 0&&(Z=U),"selectionStart"in A)A.selectionStart=U,A.selectionEnd=Math.min(Z,A.value.length);else{var J=A.ownerDocument||document,I=J&&J.defaultView||window;if(I.getSelection){var G=I.getSelection(),pe=A.textContent.length,ue=Math.min(H.start,pe),Ne=H.end===void 0?ue:Math.min(H.end,pe);!G.extend&&ue>Ne&&(b=Ne,Ne=ue,ue=b);var P=r2(A,ue),z=r2(A,Ne);if(P&&z&&(G.rangeCount!==1||G.anchorNode!==P.node||G.anchorOffset!==P.offset||G.focusNode!==z.node||G.focusOffset!==z.offset)){var B=J.createRange();B.setStart(P.node,P.offset),G.removeAllRanges(),ue>Ne?(G.addRange(B),G.extend(z.node,z.offset)):(B.setEnd(z.node,z.offset),G.addRange(B))}}}}for(J=[],G=A;G=G.parentNode;)G.nodeType===1&&J.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<J.length;A++){var K=J[A];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Hl=!!cf,uf=cf=null}finally{He=f,X.p=c,N.T=s}}n.current=a,gt=2}}function wg(){if(gt===2){gt=0;var n=Oi,a=er,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=N.T,N.T=null;var c=X.p;X.p=2;var f=He;He|=4;try{Km(n,a.alternate,a)}finally{He=f,X.p=c,N.T=s}}gt=3}}function bg(){if(gt===4||gt===3){gt=0,g7();var n=Oi,a=er,s=tr,c=lg;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?gt=5:(gt=0,er=Oi=null,Sg(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Li=null),mu(s),a=a.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Ur,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=N.T,f=X.p,X.p=2,N.T=null;try{for(var x=n.onRecoverableError,b=0;b<c.length;b++){var A=c[b];x(A.value,{componentStack:A.stack})}}finally{N.T=a,X.p=f}}(tr&3)!==0&&Sl(),Dn(n),f=n.pendingLanes,(s&4194090)!==0&&(f&42)!==0?n===Zd?Es++:(Es=0,Zd=n):Es=0,js(0)}}function Sg(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,rs(a)))}function Sl(n){return vg(),wg(),bg(),Cg()}function Cg(){if(gt!==5)return!1;var n=Oi,a=Yd;Yd=0;var s=mu(tr),c=N.T,f=X.p;try{X.p=32>s?32:s,N.T=null,s=Fd,Fd=null;var x=Oi,b=tr;if(gt=0,er=Oi=null,tr=0,(He&6)!==0)throw Error(r(331));var A=He;if(He|=4,sg(x.current),ig(x,x.current,b,s),He=A,js(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Ur,x)}catch{}return!0}finally{X.p=f,N.T=c,Sg(n,a)}}function Tg(n,a,s){a=on(s,a),a=jd(n.stateNode,a,2),n=wi(n,a,2),n!==null&&(Ir(n,2),Dn(n))}function $e(n,a,s){if(n.tag===3)Tg(n,n,s);else for(;a!==null;){if(a.tag===3){Tg(a,n,s);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Li===null||!Li.has(c))){n=on(s,n),s=Mm(2),c=wi(a,s,2),c!==null&&(Lm(s,c,a,n),Ir(c,2),Dn(c));break}}a=a.return}}function Qd(n,a,s){var c=n.pingCache;if(c===null){c=n.pingCache=new Iv;var f=new Set;c.set(a,f)}else f=c.get(a),f===void 0&&(f=new Set,c.set(a,f));f.has(s)||(_d=!0,f.add(s),n=Zv.bind(null,n,a,s),a.then(n,n))}function Zv(n,a,s){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Be===n&&(Ce&s)===s&&(Ze===4||Ze===3&&(Ce&62914560)===Ce&&300>Mn()-qd?(He&2)===0&&nr(n,0):Id|=s,Ja===Ce&&(Ja=0)),Dn(n)}function Eg(n,a){a===0&&(a=bh()),n=Na(n,a),n!==null&&(Ir(n,a),Dn(n))}function Xv(n){var a=n.memoizedState,s=0;a!==null&&(s=a.retryLane),Eg(n,s)}function Wv(n,a){var s=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(s=f.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(a),Eg(n,s)}function Kv(n,a){return du(n,a)}var Cl=null,ar=null,Jd=!1,Tl=!1,ef=!1,da=0;function Dn(n){n!==ar&&n.next===null&&(ar===null?Cl=ar=n:ar=ar.next=n),Tl=!0,Jd||(Jd=!0,Jv())}function js(n,a){if(!ef&&Tl){ef=!0;do for(var s=!1,c=Cl;c!==null;){if(n!==0){var f=c.pendingLanes;if(f===0)var x=0;else{var b=c.suspendedLanes,A=c.pingedLanes;x=(1<<31-qt(42|n)+1)-1,x&=f&~(b&~A),x=x&201326741?x&201326741|1:x?x|2:0}x!==0&&(s=!0,Lg(c,x))}else x=Ce,x=Oo(c,c===Be?x:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(x&3)===0||_r(c,x)||(s=!0,Lg(c,x));c=c.next}while(s);ef=!1}}function Qv(){jg()}function jg(){Tl=Jd=!1;var n=0;da!==0&&(o9()&&(n=da),da=0);for(var a=Mn(),s=null,c=Cl;c!==null;){var f=c.next,x=Ag(c,a);x===0?(c.next=null,s===null?Cl=f:s.next=f,f===null&&(ar=s)):(s=c,(n!==0||(x&3)!==0)&&(Tl=!0)),c=f}js(n)}function Ag(n,a){for(var s=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,x=n.pendingLanes&-62914561;0<x;){var b=31-qt(x),A=1<<b,H=f[b];H===-1?((A&s)===0||(A&c)!==0)&&(f[b]=T7(A,a)):H<=a&&(n.expiredLanes|=A),x&=~A}if(a=Be,s=Ce,s=Oo(n,n===a?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===a&&(ze===2||ze===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&fu(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||_r(n,s)){if(a=s&-s,a===n.callbackPriority)return a;switch(c!==null&&fu(c),mu(s)){case 2:case 8:s=yh;break;case 32:s=Ao;break;case 268435456:s=vh;break;default:s=Ao}return c=Mg.bind(null,n),s=du(s,c),n.callbackPriority=a,n.callbackNode=s,a}return c!==null&&c!==null&&fu(c),n.callbackPriority=2,n.callbackNode=null,2}function Mg(n,a){if(gt!==0&&gt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(Sl()&&n.callbackNode!==s)return null;var c=Ce;return c=Oo(n,n===Be?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(ug(n,c,a),Ag(n,Mn()),n.callbackNode!=null&&n.callbackNode===s?Mg.bind(null,n):null)}function Lg(n,a){if(Sl())return null;ug(n,a,!0)}function Jv(){c9(function(){(He&6)!==0?du(xh,Qv):jg()})}function tf(){return da===0&&(da=wh()),da}function Og(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:zo(""+n)}function Rg(n,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,n.id&&s.setAttribute("form",n.id),a.parentNode.insertBefore(s,a),n=new FormData(n),s.parentNode.removeChild(s),n}function e9(n,a,s,c,f){if(a==="submit"&&s&&s.stateNode===f){var x=Og((f[kt]||null).action),b=c.submitter;b&&(a=(a=b[kt]||null)?Og(a.formAction):b.getAttribute("formAction"),a!==null&&(x=a,b=null));var A=new $o("action","action",null,c,f);n.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(da!==0){var H=b?Rg(f,b):new FormData(f);bd(s,{pending:!0,data:H,method:f.method,action:x},null,H)}}else typeof x=="function"&&(A.preventDefault(),H=b?Rg(f,b):new FormData(f),bd(s,{pending:!0,data:H,method:f.method,action:x},x,H))},currentTarget:f}]})}}for(var nf=0;nf<Bu.length;nf++){var af=Bu[nf],t9=af.toLowerCase(),n9=af[0].toUpperCase()+af.slice(1);wn(t9,"on"+n9)}wn(u2,"onAnimationEnd"),wn(d2,"onAnimationIteration"),wn(f2,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(vv,"onTransitionRun"),wn(wv,"onTransitionStart"),wn(bv,"onTransitionCancel"),wn(p2,"onTransitionEnd"),Ma("onMouseEnter",["mouseout","mouseover"]),Ma("onMouseLeave",["mouseout","mouseover"]),Ma("onPointerEnter",["pointerout","pointerover"]),Ma("onPointerLeave",["pointerout","pointerover"]),Xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i9=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(As));function kg(n,a){a=(a&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],f=c.event;c=c.listeners;e:{var x=void 0;if(a)for(var b=c.length-1;0<=b;b--){var A=c[b],H=A.instance,U=A.currentTarget;if(A=A.listener,H!==x&&f.isPropagationStopped())break e;x=A,f.currentTarget=U;try{x(f)}catch(Z){dl(Z)}f.currentTarget=null,x=H}else for(b=0;b<c.length;b++){if(A=c[b],H=A.instance,U=A.currentTarget,A=A.listener,H!==x&&f.isPropagationStopped())break e;x=A,f.currentTarget=U;try{x(f)}catch(Z){dl(Z)}f.currentTarget=null,x=H}}}}function Se(n,a){var s=a[gu];s===void 0&&(s=a[gu]=new Set);var c=n+"__bubble";s.has(c)||(Dg(a,n,2,!1),s.add(c))}function rf(n,a,s){var c=0;a&&(c|=4),Dg(s,n,c,a)}var El="_reactListening"+Math.random().toString(36).slice(2);function sf(n){if(!n[El]){n[El]=!0,jh.forEach(function(s){s!=="selectionchange"&&(i9.has(s)||rf(s,!1,n),rf(s,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[El]||(a[El]=!0,rf("selectionchange",!1,a))}}function Dg(n,a,s,c){switch(i3(a)){case 2:var f=O9;break;case 8:f=R9;break;default:f=wf}s=f.bind(null,a,s,n),f=void 0,!Au||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(a,s,{capture:!0,passive:f}):n.addEventListener(a,s,!0):f!==void 0?n.addEventListener(a,s,{passive:f}):n.addEventListener(a,s,!1)}function of(n,a,s,c,f){var x=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var A=c.stateNode.containerInfo;if(A===f)break;if(b===4)for(b=c.return;b!==null;){var H=b.tag;if((H===3||H===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;A!==null;){if(b=Ea(A),b===null)return;if(H=b.tag,H===5||H===6||H===26||H===27){c=x=b;continue e}A=A.parentNode}}c=c.return}Bh(function(){var U=x,Z=Eu(s),J=[];e:{var I=h2.get(n);if(I!==void 0){var G=$o,pe=n;switch(n){case"keypress":if(Po(s)===0)break e;case"keydown":case"keyup":G=K7;break;case"focusin":pe="focus",G=Ru;break;case"focusout":pe="blur",G=Ru;break;case"beforeblur":case"afterblur":G=Ru;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=$7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=ev;break;case u2:case d2:case f2:G=_7;break;case p2:G=nv;break;case"scroll":case"scrollend":G=P7;break;case"wheel":G=av;break;case"copy":case"cut":case"paste":G=G7;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=qh;break;case"toggle":case"beforetoggle":G=sv}var ue=(a&4)!==0,Ne=!ue&&(n==="scroll"||n==="scrollend"),P=ue?I!==null?I+"Capture":null:I;ue=[];for(var z=U,B;z!==null;){var K=z;if(B=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||B===null||P===null||(K=Yr(z,P),K!=null&&ue.push(Ms(z,K,B))),Ne)break;z=z.return}0<ue.length&&(I=new G(I,pe,null,s,Z),J.push({event:I,listeners:ue}))}}if((a&7)===0){e:{if(I=n==="mouseover"||n==="pointerover",G=n==="mouseout"||n==="pointerout",I&&s!==Tu&&(pe=s.relatedTarget||s.fromElement)&&(Ea(pe)||pe[Ta]))break e;if((G||I)&&(I=Z.window===Z?Z:(I=Z.ownerDocument)?I.defaultView||I.parentWindow:window,G?(pe=s.relatedTarget||s.toElement,G=U,pe=pe?Ea(pe):null,pe!==null&&(Ne=l(pe),ue=pe.tag,pe!==Ne||ue!==5&&ue!==27&&ue!==6)&&(pe=null)):(G=null,pe=U),G!==pe)){if(ue=Ih,K="onMouseLeave",P="onMouseEnter",z="mouse",(n==="pointerout"||n==="pointerover")&&(ue=qh,K="onPointerLeave",P="onPointerEnter",z="pointer"),Ne=G==null?I:qr(G),B=pe==null?I:qr(pe),I=new ue(K,z+"leave",G,s,Z),I.target=Ne,I.relatedTarget=B,K=null,Ea(Z)===U&&(ue=new ue(P,z+"enter",pe,s,Z),ue.target=B,ue.relatedTarget=Ne,K=ue),Ne=K,G&&pe)t:{for(ue=G,P=pe,z=0,B=ue;B;B=rr(B))z++;for(B=0,K=P;K;K=rr(K))B++;for(;0<z-B;)ue=rr(ue),z--;for(;0<B-z;)P=rr(P),B--;for(;z--;){if(ue===P||P!==null&&ue===P.alternate)break t;ue=rr(ue),P=rr(P)}ue=null}else ue=null;G!==null&&Hg(J,I,G,ue,!1),pe!==null&&Ne!==null&&Hg(J,Ne,pe,ue,!0)}}e:{if(I=U?qr(U):window,G=I.nodeName&&I.nodeName.toLowerCase(),G==="select"||G==="input"&&I.type==="file")var ae=Jh;else if(Kh(I))if(e2)ae=gv;else{ae=hv;var ve=pv}else G=I.nodeName,!G||G.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?U&&Cu(U.elementType)&&(ae=Jh):ae=mv;if(ae&&(ae=ae(n,U))){Qh(J,ae,s,Z);break e}ve&&ve(n,I,U),n==="focusout"&&U&&I.type==="number"&&U.memoizedProps.value!=null&&Su(I,"number",I.value)}switch(ve=U?qr(U):window,n){case"focusin":(Kh(ve)||ve.contentEditable==="true")&&(za=ve,Pu=U,es=null);break;case"focusout":es=Pu=za=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,l2(J,s,Z);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":l2(J,s,Z)}var oe;if(Du)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ha?Xh(n,s)&&(fe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(fe="onCompositionStart");fe&&(Yh&&s.locale!=="ko"&&(Ha||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ha&&(oe=Uh()):(gi=Z,Mu="value"in gi?gi.value:gi.textContent,Ha=!0)),ve=jl(U,fe),0<ve.length&&(fe=new Gh(fe,n,null,s,Z),J.push({event:fe,listeners:ve}),oe?fe.data=oe:(oe=Wh(s),oe!==null&&(fe.data=oe)))),(oe=lv?cv(n,s):uv(n,s))&&(fe=jl(U,"onBeforeInput"),0<fe.length&&(ve=new Gh("onBeforeInput","beforeinput",null,s,Z),J.push({event:ve,listeners:fe}),ve.data=oe)),e9(J,n,U,s,Z)}kg(J,a)})}function Ms(n,a,s){return{instance:n,listener:a,currentTarget:s}}function jl(n,a){for(var s=a+"Capture",c=[];n!==null;){var f=n,x=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||x===null||(f=Yr(n,s),f!=null&&c.unshift(Ms(n,f,x)),f=Yr(n,a),f!=null&&c.push(Ms(n,f,x))),n.tag===3)return c;n=n.return}return[]}function rr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Hg(n,a,s,c,f){for(var x=a._reactName,b=[];s!==null&&s!==c;){var A=s,H=A.alternate,U=A.stateNode;if(A=A.tag,H!==null&&H===c)break;A!==5&&A!==26&&A!==27||U===null||(H=U,f?(U=Yr(s,x),U!=null&&b.unshift(Ms(s,U,H))):f||(U=Yr(s,x),U!=null&&b.push(Ms(s,U,H)))),s=s.return}b.length!==0&&n.push({event:a,listeners:b})}var a9=/\r\n?/g,r9=/\u0000|\uFFFD/g;function zg(n){return(typeof n=="string"?n:""+n).replace(a9,`
`).replace(r9,"")}function Vg(n,a){return a=zg(a),zg(n)===a}function Al(){}function Pe(n,a,s,c,f,x){switch(s){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||Ra(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&Ra(n,""+c);break;case"className":ko(n,"class",c);break;case"tabIndex":ko(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":ko(n,s,c);break;case"style":Nh(n,c,x);break;case"data":if(a!=="object"){ko(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=zo(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof x=="function"&&(s==="formAction"?(a!=="input"&&Pe(n,a,"name",f.name,f,null),Pe(n,a,"formEncType",f.formEncType,f,null),Pe(n,a,"formMethod",f.formMethod,f,null),Pe(n,a,"formTarget",f.formTarget,f,null)):(Pe(n,a,"encType",f.encType,f,null),Pe(n,a,"method",f.method,f,null),Pe(n,a,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=zo(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=Al);break;case"onScroll":c!=null&&Se("scroll",n);break;case"onScrollEnd":c!=null&&Se("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=zo(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":Se("beforetoggle",n),Se("toggle",n),Ro(n,"popover",c);break;case"xlinkActuate":qn(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":qn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":qn(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":qn(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":qn(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":qn(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":qn(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":qn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":qn(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Ro(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=z7.get(s)||s,Ro(n,s,c))}}function lf(n,a,s,c,f,x){switch(s){case"style":Nh(n,c,x);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"children":typeof c=="string"?Ra(n,c):(typeof c=="number"||typeof c=="bigint")&&Ra(n,""+c);break;case"onScroll":c!=null&&Se("scroll",n);break;case"onScrollEnd":c!=null&&Se("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Al);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ah.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),a=s.slice(2,f?s.length-7:void 0),x=n[kt]||null,x=x!=null?x[s]:null,typeof x=="function"&&n.removeEventListener(a,x,f),typeof c=="function")){typeof x!="function"&&x!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(a,c,f);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):Ro(n,s,c)}}}function xt(n,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",n),Se("load",n);var c=!1,f=!1,x;for(x in s)if(s.hasOwnProperty(x)){var b=s[x];if(b!=null)switch(x){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Pe(n,a,x,b,s,null)}}f&&Pe(n,a,"srcSet",s.srcSet,s,null),c&&Pe(n,a,"src",s.src,s,null);return;case"input":Se("invalid",n);var A=x=b=f=null,H=null,U=null;for(c in s)if(s.hasOwnProperty(c)){var Z=s[c];if(Z!=null)switch(c){case"name":f=Z;break;case"type":b=Z;break;case"checked":H=Z;break;case"defaultChecked":U=Z;break;case"value":x=Z;break;case"defaultValue":A=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,a));break;default:Pe(n,a,c,Z,s,null)}}Hh(n,x,A,H,U,b,f,!1),Do(n);return;case"select":Se("invalid",n),c=b=x=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":x=A;break;case"defaultValue":b=A;break;case"multiple":c=A;default:Pe(n,a,f,A,s,null)}a=x,s=b,n.multiple=!!c,a!=null?Oa(n,!!c,a,!1):s!=null&&Oa(n,!!c,s,!0);return;case"textarea":Se("invalid",n),x=f=c=null;for(b in s)if(s.hasOwnProperty(b)&&(A=s[b],A!=null))switch(b){case"value":c=A;break;case"defaultValue":f=A;break;case"children":x=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Pe(n,a,b,A,s,null)}Vh(n,c,f,x),Do(n);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(c=s[H],c!=null))switch(H){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Pe(n,a,H,c,s,null)}return;case"dialog":Se("beforetoggle",n),Se("toggle",n),Se("cancel",n),Se("close",n);break;case"iframe":case"object":Se("load",n);break;case"video":case"audio":for(c=0;c<As.length;c++)Se(As[c],n);break;case"image":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"embed":case"source":case"link":Se("error",n),Se("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in s)if(s.hasOwnProperty(U)&&(c=s[U],c!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Pe(n,a,U,c,s,null)}return;default:if(Cu(a)){for(Z in s)s.hasOwnProperty(Z)&&(c=s[Z],c!==void 0&&lf(n,a,Z,c,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(c=s[A],c!=null&&Pe(n,a,A,c,s,null))}function s9(n,a,s,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,x=null,b=null,A=null,H=null,U=null,Z=null;for(G in s){var J=s[G];if(s.hasOwnProperty(G)&&J!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":H=J;default:c.hasOwnProperty(G)||Pe(n,a,G,null,c,J)}}for(var I in c){var G=c[I];if(J=s[I],c.hasOwnProperty(I)&&(G!=null||J!=null))switch(I){case"type":x=G;break;case"name":f=G;break;case"checked":U=G;break;case"defaultChecked":Z=G;break;case"value":b=G;break;case"defaultValue":A=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,a));break;default:G!==J&&Pe(n,a,I,G,c,J)}}bu(n,b,A,H,U,Z,x,f);return;case"select":G=b=A=I=null;for(x in s)if(H=s[x],s.hasOwnProperty(x)&&H!=null)switch(x){case"value":break;case"multiple":G=H;default:c.hasOwnProperty(x)||Pe(n,a,x,null,c,H)}for(f in c)if(x=c[f],H=s[f],c.hasOwnProperty(f)&&(x!=null||H!=null))switch(f){case"value":I=x;break;case"defaultValue":A=x;break;case"multiple":b=x;default:x!==H&&Pe(n,a,f,x,c,H)}a=A,s=b,c=G,I!=null?Oa(n,!!s,I,!1):!!c!=!!s&&(a!=null?Oa(n,!!s,a,!0):Oa(n,!!s,s?[]:"",!1));return;case"textarea":G=I=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Pe(n,a,A,null,c,f)}for(b in c)if(f=c[b],x=s[b],c.hasOwnProperty(b)&&(f!=null||x!=null))switch(b){case"value":I=f;break;case"defaultValue":G=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==x&&Pe(n,a,b,f,c,x)}zh(n,I,G);return;case"option":for(var pe in s)if(I=s[pe],s.hasOwnProperty(pe)&&I!=null&&!c.hasOwnProperty(pe))switch(pe){case"selected":n.selected=!1;break;default:Pe(n,a,pe,null,c,I)}for(H in c)if(I=c[H],G=s[H],c.hasOwnProperty(H)&&I!==G&&(I!=null||G!=null))switch(H){case"selected":n.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:Pe(n,a,H,I,c,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in s)I=s[ue],s.hasOwnProperty(ue)&&I!=null&&!c.hasOwnProperty(ue)&&Pe(n,a,ue,null,c,I);for(U in c)if(I=c[U],G=s[U],c.hasOwnProperty(U)&&I!==G&&(I!=null||G!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(r(137,a));break;default:Pe(n,a,U,I,c,G)}return;default:if(Cu(a)){for(var Ne in s)I=s[Ne],s.hasOwnProperty(Ne)&&I!==void 0&&!c.hasOwnProperty(Ne)&&lf(n,a,Ne,void 0,c,I);for(Z in c)I=c[Z],G=s[Z],!c.hasOwnProperty(Z)||I===G||I===void 0&&G===void 0||lf(n,a,Z,I,c,G);return}}for(var P in s)I=s[P],s.hasOwnProperty(P)&&I!=null&&!c.hasOwnProperty(P)&&Pe(n,a,P,null,c,I);for(J in c)I=c[J],G=s[J],!c.hasOwnProperty(J)||I===G||I==null&&G==null||Pe(n,a,J,I,c,G)}var cf=null,uf=null;function Ml(n){return n.nodeType===9?n:n.ownerDocument}function Pg(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ng(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function df(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ff=null;function o9(){var n=window.event;return n&&n.type==="popstate"?n===ff?!1:(ff=n,!0):(ff=null,!1)}var $g=typeof setTimeout=="function"?setTimeout:void 0,l9=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,c9=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(n){return Bg.resolve(null).then(n).catch(u9)}:$g;function u9(n){setTimeout(function(){throw n})}function ki(n){return n==="head"}function Ug(n,a){var s=a,c=0,f=0;do{var x=s.nextSibling;if(n.removeChild(s),x&&x.nodeType===8)if(s=x.data,s==="/$"){if(0<c&&8>c){s=c;var b=n.ownerDocument;if(s&1&&Ls(b.documentElement),s&2&&Ls(b.body),s&4)for(s=b.head,Ls(s),b=s.firstChild;b;){var A=b.nextSibling,H=b.nodeName;b[Gr]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&b.rel.toLowerCase()==="stylesheet"||s.removeChild(b),b=A}}if(f===0){n.removeChild(x),Ps(a);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:c=s.charCodeAt(0)-48;else c=0;s=x}while(s);Ps(a)}function pf(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":pf(s),xu(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function d9(n,a,s,c){for(;n.nodeType===1;){var f=s;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Gr])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(x=n.getAttribute("rel"),x==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(x!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(x=n.getAttribute("src"),(x!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&x&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var x=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===x)return n}else return n;if(n=Sn(n.nextSibling),n===null)break}return null}function f9(n,a,s){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Sn(n.nextSibling),n===null))return null;return n}function hf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function p9(n,a){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")a();else{var c=function(){a(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Sn(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var mf=null;function _g(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return n;a--}else s==="/$"&&a++}n=n.previousSibling}return null}function Ig(n,a,s){switch(a=Ml(s),n){case"html":if(n=a.documentElement,!n)throw Error(r(452));return n;case"head":if(n=a.head,!n)throw Error(r(453));return n;case"body":if(n=a.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Ls(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);xu(n)}var pn=new Map,Gg=new Set;function Ll(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ri=X.d;X.d={f:h9,r:m9,D:g9,C:x9,L:y9,m:v9,X:b9,S:w9,M:S9};function h9(){var n=ri.f(),a=wl();return n||a}function m9(n){var a=ja(n);a!==null&&a.tag===5&&a.type==="form"?um(a):ri.r(n)}var sr=typeof document>"u"?null:document;function qg(n,a,s){var c=sr;if(c&&typeof a=="string"&&a){var f=sn(a);f='link[rel="'+n+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Gg.has(f)||(Gg.add(f),n={rel:n,crossOrigin:s,href:a},c.querySelector(f)===null&&(a=c.createElement("link"),xt(a,"link",n),lt(a),c.head.appendChild(a)))}}function g9(n){ri.D(n),qg("dns-prefetch",n,null)}function x9(n,a){ri.C(n,a),qg("preconnect",n,a)}function y9(n,a,s){ri.L(n,a,s);var c=sr;if(c&&n&&a){var f='link[rel="preload"][as="'+sn(a)+'"]';a==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+sn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+sn(s.imageSizes)+'"]')):f+='[href="'+sn(n)+'"]';var x=f;switch(a){case"style":x=or(n);break;case"script":x=lr(n)}pn.has(x)||(n=g({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:n,as:a},s),pn.set(x,n),c.querySelector(f)!==null||a==="style"&&c.querySelector(Os(x))||a==="script"&&c.querySelector(Rs(x))||(a=c.createElement("link"),xt(a,"link",n),lt(a),c.head.appendChild(a)))}}function v9(n,a){ri.m(n,a);var s=sr;if(s&&n){var c=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+sn(c)+'"][href="'+sn(n)+'"]',x=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":x=lr(n)}if(!pn.has(x)&&(n=g({rel:"modulepreload",href:n},a),pn.set(x,n),s.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Rs(x)))return}c=s.createElement("link"),xt(c,"link",n),lt(c),s.head.appendChild(c)}}}function w9(n,a,s){ri.S(n,a,s);var c=sr;if(c&&n){var f=Aa(c).hoistableStyles,x=or(n);a=a||"default";var b=f.get(x);if(!b){var A={loading:0,preload:null};if(b=c.querySelector(Os(x)))A.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":a},s),(s=pn.get(x))&&gf(n,s);var H=b=c.createElement("link");lt(H),xt(H,"link",n),H._p=new Promise(function(U,Z){H.onload=U,H.onerror=Z}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ol(b,a,c)}b={type:"stylesheet",instance:b,count:1,state:A},f.set(x,b)}}}function b9(n,a){ri.X(n,a);var s=sr;if(s&&n){var c=Aa(s).hoistableScripts,f=lr(n),x=c.get(f);x||(x=s.querySelector(Rs(f)),x||(n=g({src:n,async:!0},a),(a=pn.get(f))&&xf(n,a),x=s.createElement("script"),lt(x),xt(x,"link",n),s.head.appendChild(x)),x={type:"script",instance:x,count:1,state:null},c.set(f,x))}}function S9(n,a){ri.M(n,a);var s=sr;if(s&&n){var c=Aa(s).hoistableScripts,f=lr(n),x=c.get(f);x||(x=s.querySelector(Rs(f)),x||(n=g({src:n,async:!0,type:"module"},a),(a=pn.get(f))&&xf(n,a),x=s.createElement("script"),lt(x),xt(x,"link",n),s.head.appendChild(x)),x={type:"script",instance:x,count:1,state:null},c.set(f,x))}}function Yg(n,a,s,c){var f=(f=de.current)?Ll(f):null;if(!f)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=or(s.href),s=Aa(f).hoistableStyles,c=s.get(a),c||(c={type:"style",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=or(s.href);var x=Aa(f).hoistableStyles,b=x.get(n);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},x.set(n,b),(x=f.querySelector(Os(n)))&&!x._p&&(b.instance=x,b.state.loading=5),pn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pn.set(n,s),x||C9(f,n,s,b.state))),a&&c===null)throw Error(r(528,""));return b}if(a&&c!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=lr(s),s=Aa(f).hoistableScripts,c=s.get(a),c||(c={type:"script",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function or(n){return'href="'+sn(n)+'"'}function Os(n){return'link[rel="stylesheet"]['+n+"]"}function Fg(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function C9(n,a,s,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),xt(a,"link",s),lt(a),n.head.appendChild(a))}function lr(n){return'[src="'+sn(n)+'"]'}function Rs(n){return"script[async]"+n}function Zg(n,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+sn(s.href)+'"]');if(c)return a.instance=c,lt(c),c;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),lt(c),xt(c,"style",f),Ol(c,s.precedence,n),a.instance=c;case"stylesheet":f=or(s.href);var x=n.querySelector(Os(f));if(x)return a.state.loading|=4,a.instance=x,lt(x),x;c=Fg(s),(f=pn.get(f))&&gf(c,f),x=(n.ownerDocument||n).createElement("link"),lt(x);var b=x;return b._p=new Promise(function(A,H){b.onload=A,b.onerror=H}),xt(x,"link",c),a.state.loading|=4,Ol(x,s.precedence,n),a.instance=x;case"script":return x=lr(s.src),(f=n.querySelector(Rs(x)))?(a.instance=f,lt(f),f):(c=s,(f=pn.get(x))&&(c=g({},s),xf(c,f)),n=n.ownerDocument||n,f=n.createElement("script"),lt(f),xt(f,"link",c),n.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Ol(c,s.precedence,n));return a.instance}function Ol(n,a,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,x=f,b=0;b<c.length;b++){var A=c[b];if(A.dataset.precedence===a)x=A;else if(x!==f)break}x?x.parentNode.insertBefore(n,x.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(n,a.firstChild))}function gf(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function xf(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Rl=null;function Xg(n,a,s){if(Rl===null){var c=new Map,f=Rl=new Map;f.set(s,c)}else f=Rl,c=f.get(s),c||(c=new Map,f.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),f=0;f<s.length;f++){var x=s[f];if(!(x[Gr]||x[St]||n==="link"&&x.getAttribute("rel")==="stylesheet")&&x.namespaceURI!=="http://www.w3.org/2000/svg"){var b=x.getAttribute(a)||"";b=n+b;var A=c.get(b);A?A.push(x):c.set(b,[x])}}return c}function Wg(n,a,s){n=n.ownerDocument||n,n.head.insertBefore(s,a==="title"?n.querySelector("head > title"):null)}function T9(n,a,s){if(s===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Kg(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ks=null;function E9(){}function j9(n,a,s){if(ks===null)throw Error(r(475));var c=ks;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=or(s.href),x=n.querySelector(Os(f));if(x){n=x._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=kl.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=x,lt(x);return}x=n.ownerDocument||n,s=Fg(s),(f=pn.get(f))&&gf(s,f),x=x.createElement("link"),lt(x);var b=x;b._p=new Promise(function(A,H){b.onload=A,b.onerror=H}),xt(x,"link",s),a.instance=x}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=kl.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function A9(){if(ks===null)throw Error(r(475));var n=ks;return n.stylesheets&&n.count===0&&yf(n,n.stylesheets),0<n.count?function(a){var s=setTimeout(function(){if(n.stylesheets&&yf(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(s)}}:null}function kl(){if(this.count--,this.count===0){if(this.stylesheets)yf(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Dl=null;function yf(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Dl=new Map,a.forEach(M9,n),Dl=null,kl.call(n))}function M9(n,a){if(!(a.state.loading&4)){var s=Dl.get(n);if(s)var c=s.get(null);else{s=new Map,Dl.set(n,s);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),x=0;x<f.length;x++){var b=f[x];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),c=b)}c&&s.set(null,c)}f=a.instance,b=f.getAttribute("data-precedence"),x=s.get(b)||c,x===c&&s.set(null,f),s.set(b,f),this.count++,c=kl.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),x?x.parentNode.insertBefore(f,x.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),a.state.loading|=4}}var Ds={$$typeof:j,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function L9(n,a,s,c,f,x,b,A){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.hiddenUpdates=pu(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=x,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Qg(n,a,s,c,f,x,b,A,H,U,Z,J){return n=new L9(n,a,s,b,A,H,U,J),a=1,x===!0&&(a|=24),x=Ft(3,null,null,a),n.current=x,x.stateNode=n,a=Qu(),a.refCount++,n.pooledCache=a,a.refCount++,x.memoizedState={element:c,isDehydrated:s,cache:a},nd(x),n}function Jg(n){return n?(n=$a,n):$a}function e3(n,a,s,c,f,x){f=Jg(f),c.context===null?c.context=f:c.pendingContext=f,c=vi(a),c.payload={element:s},x=x===void 0?null:x,x!==null&&(c.callback=x),s=wi(n,c,a),s!==null&&(Qt(s,n,a),cs(s,n,a))}function t3(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<a?s:a}}function vf(n,a){t3(n,a),(n=n.alternate)&&t3(n,a)}function n3(n){if(n.tag===13){var a=Na(n,67108864);a!==null&&Qt(a,n,67108864),vf(n,67108864)}}var Hl=!0;function O9(n,a,s,c){var f=N.T;N.T=null;var x=X.p;try{X.p=2,wf(n,a,s,c)}finally{X.p=x,N.T=f}}function R9(n,a,s,c){var f=N.T;N.T=null;var x=X.p;try{X.p=8,wf(n,a,s,c)}finally{X.p=x,N.T=f}}function wf(n,a,s,c){if(Hl){var f=bf(c);if(f===null)of(n,a,c,zl,s),a3(n,c);else if(D9(f,n,a,s,c))c.stopPropagation();else if(a3(n,c),a&4&&-1<k9.indexOf(n)){for(;f!==null;){var x=ja(f);if(x!==null)switch(x.tag){case 3:if(x=x.stateNode,x.current.memoizedState.isDehydrated){var b=Zi(x.pendingLanes);if(b!==0){var A=x;for(A.pendingLanes|=2,A.entangledLanes|=2;b;){var H=1<<31-qt(b);A.entanglements[1]|=H,b&=~H}Dn(x),(He&6)===0&&(yl=Mn()+500,js(0))}}break;case 13:A=Na(x,2),A!==null&&Qt(A,x,2),wl(),vf(x,2)}if(x=bf(c),x===null&&of(n,a,c,zl,s),x===f)break;f=x}f!==null&&c.stopPropagation()}else of(n,a,c,null,s)}}function bf(n){return n=Eu(n),Sf(n)}var zl=null;function Sf(n){if(zl=null,n=Ea(n),n!==null){var a=l(n);if(a===null)n=null;else{var s=a.tag;if(s===13){if(n=u(a),n!==null)return n;n=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return zl=n,null}function i3(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(x7()){case xh:return 2;case yh:return 8;case Ao:case y7:return 32;case vh:return 268435456;default:return 32}default:return 32}}var Cf=!1,Di=null,Hi=null,zi=null,Hs=new Map,zs=new Map,Vi=[],k9="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a3(n,a){switch(n){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":Hs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":zs.delete(a.pointerId)}}function Vs(n,a,s,c,f,x){return n===null||n.nativeEvent!==x?(n={blockedOn:a,domEventName:s,eventSystemFlags:c,nativeEvent:x,targetContainers:[f]},a!==null&&(a=ja(a),a!==null&&n3(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),n)}function D9(n,a,s,c,f){switch(a){case"focusin":return Di=Vs(Di,n,a,s,c,f),!0;case"dragenter":return Hi=Vs(Hi,n,a,s,c,f),!0;case"mouseover":return zi=Vs(zi,n,a,s,c,f),!0;case"pointerover":var x=f.pointerId;return Hs.set(x,Vs(Hs.get(x)||null,n,a,s,c,f)),!0;case"gotpointercapture":return x=f.pointerId,zs.set(x,Vs(zs.get(x)||null,n,a,s,c,f)),!0}return!1}function r3(n){var a=Ea(n.target);if(a!==null){var s=l(a);if(s!==null){if(a=s.tag,a===13){if(a=u(s),a!==null){n.blockedOn=a,j7(n.priority,function(){if(s.tag===13){var c=Kt();c=hu(c);var f=Na(s,c);f!==null&&Qt(f,s,c),vf(s,c)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Vl(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var s=bf(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);Tu=c,s.target.dispatchEvent(c),Tu=null}else return a=ja(s),a!==null&&n3(a),n.blockedOn=s,!1;a.shift()}return!0}function s3(n,a,s){Vl(n)&&s.delete(a)}function H9(){Cf=!1,Di!==null&&Vl(Di)&&(Di=null),Hi!==null&&Vl(Hi)&&(Hi=null),zi!==null&&Vl(zi)&&(zi=null),Hs.forEach(s3),zs.forEach(s3)}function Pl(n,a){n.blockedOn===a&&(n.blockedOn=null,Cf||(Cf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,H9)))}var Nl=null;function o3(n){Nl!==n&&(Nl=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Nl===n&&(Nl=null);for(var a=0;a<n.length;a+=3){var s=n[a],c=n[a+1],f=n[a+2];if(typeof c!="function"){if(Sf(c||s)===null)continue;break}var x=ja(s);x!==null&&(n.splice(a,3),a-=3,bd(x,{pending:!0,data:f,method:s.method,action:c},c,f))}}))}function Ps(n){function a(H){return Pl(H,n)}Di!==null&&Pl(Di,n),Hi!==null&&Pl(Hi,n),zi!==null&&Pl(zi,n),Hs.forEach(a),zs.forEach(a);for(var s=0;s<Vi.length;s++){var c=Vi[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Vi.length&&(s=Vi[0],s.blockedOn===null);)r3(s),s.blockedOn===null&&Vi.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var f=s[c],x=s[c+1],b=f[kt]||null;if(typeof x=="function")b||o3(s);else if(b){var A=null;if(x&&x.hasAttribute("formAction")){if(f=x,b=x[kt]||null)A=b.formAction;else if(Sf(f)!==null)continue}else A=b.action;typeof A=="function"?s[c+1]=A:(s.splice(c,3),c-=3),o3(s)}}}function Tf(n){this._internalRoot=n}$l.prototype.render=Tf.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,c=Kt();e3(s,c,n,a,null,null)},$l.prototype.unmount=Tf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;e3(n.current,2,null,n,null,null),wl(),a[Ta]=null}};function $l(n){this._internalRoot=n}$l.prototype.unstable_scheduleHydration=function(n){if(n){var a=Th();n={blockedOn:null,target:n,priority:a};for(var s=0;s<Vi.length&&a!==0&&a<Vi[s].priority;s++);Vi.splice(s,0,n),s===0&&r3(n)}};var l3=t.version;if(l3!=="19.1.1")throw Error(r(527,l3,"19.1.1"));X.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=p(a),n=n!==null?h(n):null,n=n===null?null:n.stateNode,n};var z9={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{Ur=Bl.inject(z9),Gt=Bl}catch{}}return $s.createRoot=function(n,a){if(!o(n))throw Error(r(299));var s=!1,c="",f=Tm,x=Em,b=jm,A=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(A=a.unstable_transitionCallbacks)),a=Qg(n,1,!1,null,null,s,c,f,x,b,A,null),n[Ta]=a.current,sf(n),new Tf(a)},$s.hydrateRoot=function(n,a,s){if(!o(n))throw Error(r(299));var c=!1,f="",x=Tm,b=Em,A=jm,H=null,U=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(x=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(H=s.unstable_transitionCallbacks),s.formState!==void 0&&(U=s.formState)),a=Qg(n,1,!0,a,s??null,c,f,x,b,A,H,U),a.context=Jg(null),s=a.current,c=Kt(),c=hu(c),f=vi(c),f.callback=null,wi(s,f,c),s=c,a.current.lanes=s,Ir(a,s),Dn(a),n[Ta]=a.current,sf(n),new $l(a)},$s.version="19.1.1",$s}var y3;function Y9(){if(y3)return jf.exports;y3=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),jf.exports=q9(),jf.exports}var F9=Y9();const Z9=Yc(F9);var R=Rp();const ke=Yc(R),v3=P9({__proto__:null,default:ke},[R]);/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var w3="popstate";function X9(e={}){function t(r,o){let{pathname:l,search:u,hash:d}=r.location;return V0("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(r,o){return typeof o=="string"?o:ao(o)}return K9(t,i,null,e)}function Ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function W9(){return Math.random().toString(36).substring(2,10)}function b3(e,t){return{usr:e.state,key:e.key,idx:t}}function V0(e,t,i=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Dr(t):t,state:i,key:t&&t.key||r||W9()}}function ao({pathname:e="/",search:t="",hash:i=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Dr(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substring(i),e=e.substring(0,i));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function K9(e,t,i,r={}){let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,d="POP",p=null,h=g();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function g(){return(u.state||{idx:null}).idx}function y(){d="POP";let O=g(),M=O==null?null:O-h;h=O,p&&p({action:d,location:E.location,delta:M})}function v(O,M){d="PUSH";let T=V0(E.location,O,M);h=g()+1;let j=b3(T,h),D=E.createHref(T);try{u.pushState(j,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;o.location.assign(D)}l&&p&&p({action:d,location:E.location,delta:1})}function C(O,M){d="REPLACE";let T=V0(E.location,O,M);h=g();let j=b3(T,h),D=E.createHref(T);u.replaceState(j,"",D),l&&p&&p({action:d,location:E.location,delta:0})}function S(O){return Q9(O)}let E={get action(){return d},get location(){return e(o,u)},listen(O){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(w3,y),p=O,()=>{o.removeEventListener(w3,y),p=null}},createHref(O){return t(o,O)},createURL:S,encodeLocation(O){let M=S(O);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:v,replace:C,go(O){return u.go(O)}};return E}function Q9(e,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(i,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:ao(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function U6(e,t,i="/"){return J9(e,t,i,!1)}function J9(e,t,i,r){let o=typeof t=="string"?Dr(t):t,l=di(o.pathname||"/",i);if(l==null)return null;let u=_6(e);ew(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let h=dw(l);d=cw(u[p],h,r)}return d}function _6(e,t=[],i=[],r=""){let o=(l,u,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};p.relativePath.startsWith("/")&&(Ge(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let h=ui([r,p.relativePath]),g=i.concat(p);l.children&&l.children.length>0&&(Ge(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),_6(l.children,t,g,h)),!(l.path==null&&!l.index)&&t.push({path:h,score:ow(h,l.index),routesMeta:g})};return e.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,u);else for(let p of I6(l.path))o(l,u,p)}),t}function I6(e){let t=e.split("/");if(t.length===0)return[];let[i,...r]=t,o=i.endsWith("?"),l=i.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let u=I6(r.join("/")),d=[];return d.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...u),d.map(p=>e.startsWith("/")&&p===""?"/":p)}function ew(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:lw(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var tw=/^:[\w-]+$/,nw=3,iw=2,aw=1,rw=10,sw=-2,S3=e=>e==="*";function ow(e,t){let i=e.split("/"),r=i.length;return i.some(S3)&&(r+=sw),t&&(r+=iw),i.filter(o=>!S3(o)).reduce((o,l)=>o+(tw.test(l)?nw:l===""?aw:rw),r)}function lw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function cw(e,t,i=!1){let{routesMeta:r}=e,o={},l="/",u=[];for(let d=0;d<r.length;++d){let p=r[d],h=d===r.length-1,g=l==="/"?t:t.slice(l.length)||"/",y=Cc({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},g),v=p.route;if(!y&&h&&i&&!r[r.length-1].route.index&&(y=Cc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:ui([l,y.pathname]),pathnameBase:mw(ui([l,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(l=ui([l,y.pathnameBase]))}return u}function Cc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,r]=uw(e.path,e.caseSensitive,e.end),o=t.match(i);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((h,{paramName:g,isOptional:y},v)=>{if(g==="*"){let S=d[v]||"";u=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const C=d[v];return y&&!C?h[g]=void 0:h[g]=(C||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:e}}function uw(e,t=!1,i=!0){jn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function dw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return jn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function di(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=e.charAt(i);return r&&r!=="/"?null:e.slice(i)||"/"}function fw(e,t="/"){let{pathname:i,search:r="",hash:o=""}=typeof e=="string"?Dr(e):e;return{pathname:i?i.startsWith("/")?i:pw(i,t):t,search:gw(r),hash:xw(o)}}function pw(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function Rf(e,t,i,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hw(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function kp(e){let t=hw(e);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Dp(e,t,i,r=!1){let o;typeof e=="string"?o=Dr(e):(o={...e},Ge(!o.pathname||!o.pathname.includes("?"),Rf("?","pathname","search",o)),Ge(!o.pathname||!o.pathname.includes("#"),Rf("#","pathname","hash",o)),Ge(!o.search||!o.search.includes("#"),Rf("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=i;else{let y=t.length-1;if(!r&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),y-=1;o.pathname=v.join("/")}d=y>=0?t[y]:"/"}let p=fw(o,d),h=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(h||g)&&(p.pathname+="/"),p}var ui=e=>e.join("/").replace(/\/\/+/g,"/"),mw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var G6=["POST","PUT","PATCH","DELETE"];new Set(G6);var vw=["GET",...G6];new Set(vw);var Hr=R.createContext(null);Hr.displayName="DataRouter";var Fc=R.createContext(null);Fc.displayName="DataRouterState";R.createContext(!1);var q6=R.createContext({isTransitioning:!1});q6.displayName="ViewTransition";var ww=R.createContext(new Map);ww.displayName="Fetchers";var bw=R.createContext(null);bw.displayName="Await";var An=R.createContext(null);An.displayName="Navigation";var vo=R.createContext(null);vo.displayName="Location";var yn=R.createContext({outlet:null,matches:[],isDataRoute:!1});yn.displayName="Route";var Hp=R.createContext(null);Hp.displayName="RouteError";function Sw(e,{relative:t}={}){Ge(zr(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=R.useContext(An),{hash:o,pathname:l,search:u}=wo(e,{relative:t}),d=l;return i!=="/"&&(d=l==="/"?i:ui([i,l])),r.createHref({pathname:d,search:u,hash:o})}function zr(){return R.useContext(vo)!=null}function vn(){return Ge(zr(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(vo).location}var Y6="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function F6(e){R.useContext(An).static||R.useLayoutEffect(e)}function zp(){let{isDataRoute:e}=R.useContext(yn);return e?Nw():Cw()}function Cw(){Ge(zr(),"useNavigate() may be used only in the context of a <Router> component.");let e=R.useContext(Hr),{basename:t,navigator:i}=R.useContext(An),{matches:r}=R.useContext(yn),{pathname:o}=vn(),l=JSON.stringify(kp(r)),u=R.useRef(!1);return F6(()=>{u.current=!0}),R.useCallback((p,h={})=>{if(jn(u.current,Y6),!u.current)return;if(typeof p=="number"){i.go(p);return}let g=Dp(p,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ui([t,g.pathname])),(h.replace?i.replace:i.push)(g,h.state,h)},[t,i,l,o,e])}var Tw=R.createContext(null);function Ew(e){let t=R.useContext(yn).outlet;return t&&R.createElement(Tw.Provider,{value:e},t)}function jw(){let{matches:e}=R.useContext(yn),t=e[e.length-1];return t?t.params:{}}function wo(e,{relative:t}={}){let{matches:i}=R.useContext(yn),{pathname:r}=vn(),o=JSON.stringify(kp(i));return R.useMemo(()=>Dp(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function Aw(e,t){return Z6(e,t)}function Z6(e,t,i,r){var M;Ge(zr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=R.useContext(An),{matches:l}=R.useContext(yn),u=l[l.length-1],d=u?u.params:{},p=u?u.pathname:"/",h=u?u.pathnameBase:"/",g=u&&u.route;{let T=g&&g.path||"";X6(p,!g||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let y=vn(),v;if(t){let T=typeof t=="string"?Dr(t):t;Ge(h==="/"||((M=T.pathname)==null?void 0:M.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${T.pathname}" was given in the \`location\` prop.`),v=T}else v=y;let C=v.pathname||"/",S=C;if(h!=="/"){let T=h.replace(/^\//,"").split("/");S="/"+C.replace(/^\//,"").split("/").slice(T.length).join("/")}let E=U6(e,{pathname:S});jn(g||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),jn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=kw(E&&E.map(T=>Object.assign({},T,{params:Object.assign({},d,T.params),pathname:ui([h,o.encodeLocation?o.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?h:ui([h,o.encodeLocation?o.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),l,i,r);return t&&O?R.createElement(vo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},O):O}function Mw(){let e=Pw(),t=yw(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:l},"ErrorBoundary")," or"," ",R.createElement("code",{style:l},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),i?R.createElement("pre",{style:o},i):null,u)}var Lw=R.createElement(Mw,null),Ow=class extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?R.createElement(yn.Provider,{value:this.props.routeContext},R.createElement(Hp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Rw({routeContext:e,match:t,children:i}){let r=R.useContext(Hr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),R.createElement(yn.Provider,{value:e},i)}function kw(e,t=[],i=null,r=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let o=e,l=i==null?void 0:i.errors;if(l!=null){let p=o.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);Ge(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,d=-1;if(i)for(let p=0;p<o.length;p++){let h=o[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=p),h.route.id){let{loaderData:g,errors:y}=i,v=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!y||y[h.route.id]===void 0);if(h.route.lazy||v){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,h,g)=>{let y,v=!1,C=null,S=null;i&&(y=l&&h.route.id?l[h.route.id]:void 0,C=h.route.errorElement||Lw,u&&(d<0&&g===0?(X6("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,S=null):d===g&&(v=!0,S=h.route.hydrateFallbackElement||null)));let E=t.concat(o.slice(0,g+1)),O=()=>{let M;return y?M=C:v?M=S:h.route.Component?M=R.createElement(h.route.Component,null):h.route.element?M=h.route.element:M=p,R.createElement(Rw,{match:h,routeContext:{outlet:p,matches:E,isDataRoute:i!=null},children:M})};return i&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?R.createElement(Ow,{location:i.location,revalidation:i.revalidation,component:C,error:y,children:O(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):O()},null)}function Vp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dw(e){let t=R.useContext(Hr);return Ge(t,Vp(e)),t}function Hw(e){let t=R.useContext(Fc);return Ge(t,Vp(e)),t}function zw(e){let t=R.useContext(yn);return Ge(t,Vp(e)),t}function Pp(e){let t=zw(e),i=t.matches[t.matches.length-1];return Ge(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function Vw(){return Pp("useRouteId")}function Pw(){var r;let e=R.useContext(Hp),t=Hw("useRouteError"),i=Pp("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[i]}function Nw(){let{router:e}=Dw("useNavigate"),t=Pp("useNavigate"),i=R.useRef(!1);return F6(()=>{i.current=!0}),R.useCallback(async(o,l={})=>{jn(i.current,Y6),i.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var C3={};function X6(e,t,i){!t&&!C3[e]&&(C3[e]=!0,jn(!1,i))}R.memo($w);function $w({routes:e,future:t,state:i}){return Z6(e,void 0,i,t)}function Bw({to:e,replace:t,state:i,relative:r}){Ge(zr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=R.useContext(An);jn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=R.useContext(yn),{pathname:u}=vn(),d=zp(),p=Dp(e,kp(l),u,r==="path"),h=JSON.stringify(p);return R.useEffect(()=>{d(JSON.parse(h),{replace:t,state:i,relative:r})},[d,h,r,t,i]),null}function Uw(e){return Ew(e.context)}function ft(e){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _w({basename:e="/",children:t=null,location:i,navigationType:r="POP",navigator:o,static:l=!1}){Ge(!zr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof i=="string"&&(i=Dr(i));let{pathname:p="/",search:h="",hash:g="",state:y=null,key:v="default"}=i,C=R.useMemo(()=>{let S=di(p,u);return S==null?null:{location:{pathname:S,search:h,hash:g,state:y,key:v},navigationType:r}},[u,p,h,g,y,v,r]);return jn(C!=null,`<Router basename="${u}"> is not able to match the URL "${p}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:R.createElement(An.Provider,{value:d},R.createElement(vo.Provider,{children:t,value:C}))}function Iw({children:e,location:t}){return Aw(P0(e),t)}function P0(e,t=[]){let i=[];return R.Children.forEach(e,(r,o)=>{if(!R.isValidElement(r))return;let l=[...t,o];if(r.type===R.Fragment){i.push.apply(i,P0(r.props.children,l));return}Ge(r.type===ft,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=P0(r.props.children,l)),i.push(u)}),i}var lc="get",cc="application/x-www-form-urlencoded";function Zc(e){return e!=null&&typeof e.tagName=="string"}function Gw(e){return Zc(e)&&e.tagName.toLowerCase()==="button"}function qw(e){return Zc(e)&&e.tagName.toLowerCase()==="form"}function Yw(e){return Zc(e)&&e.tagName.toLowerCase()==="input"}function Fw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Zw(e,t){return e.button===0&&(!t||t==="_self")&&!Fw(e)}var Ul=null;function Xw(){if(Ul===null)try{new FormData(document.createElement("form"),0),Ul=!1}catch{Ul=!0}return Ul}var Ww=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function kf(e){return e!=null&&!Ww.has(e)?(jn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cc}"`),null):e}function Kw(e,t){let i,r,o,l,u;if(qw(e)){let d=e.getAttribute("action");r=d?di(d,t):null,i=e.getAttribute("method")||lc,o=kf(e.getAttribute("enctype"))||cc,l=new FormData(e)}else if(Gw(e)||Yw(e)&&(e.type==="submit"||e.type==="image")){let d=e.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||d.getAttribute("action");if(r=p?di(p,t):null,i=e.getAttribute("formmethod")||d.getAttribute("method")||lc,o=kf(e.getAttribute("formenctype"))||kf(d.getAttribute("enctype"))||cc,l=new FormData(d,e),!Xw()){let{name:h,type:g,value:y}=e;if(g==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,y)}}else{if(Zc(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=lc,r=null,o=cc,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:r,method:i.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Np(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qw(e,t,i){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${i}`:t&&di(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function Jw(e,t){if(e.id in t)return t[e.id];try{let i=await import(e.module);return t[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function eb(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function tb(e,t,i){let r=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await Jw(l,i);return u.links?u.links():[]}return[]}));return rb(r.flat(1).filter(eb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function T3(e,t,i,r,o,l){let u=(p,h)=>i[h]?p.route.id!==i[h].route.id:!0,d=(p,h)=>{var g;return i[h].pathname!==p.pathname||((g=i[h].route.path)==null?void 0:g.endsWith("*"))&&i[h].params["*"]!==p.params["*"]};return l==="assets"?t.filter((p,h)=>u(p,h)||d(p,h)):l==="data"?t.filter((p,h)=>{var y;let g=r.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(u(p,h)||d(p,h))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function nb(e,t,{includeHydrateFallback:i}={}){return ib(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function ib(e){return[...new Set(e)]}function ab(e){let t={},i=Object.keys(e).sort();for(let r of i)t[r]=e[r];return t}function rb(e,t){let i=new Set;return new Set(t),e.reduce((r,o)=>{let l=JSON.stringify(ab(o));return i.has(l)||(i.add(l),r.push({key:l,link:o})),r},[])}function W6(){let e=R.useContext(Hr);return Np(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function sb(){let e=R.useContext(Fc);return Np(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var $p=R.createContext(void 0);$p.displayName="FrameworkContext";function K6(){let e=R.useContext($p);return Np(e,"You must render this element inside a <HydratedRouter> element"),e}function ob(e,t){let i=R.useContext($p),[r,o]=R.useState(!1),[l,u]=R.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:h,onMouseLeave:g,onTouchStart:y}=t,v=R.useRef(null);R.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let E=M=>{M.forEach(T=>{u(T.isIntersecting)})},O=new IntersectionObserver(E,{threshold:.5});return v.current&&O.observe(v.current),()=>{O.disconnect()}}},[e]),R.useEffect(()=>{if(r){let E=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(E)}}},[r]);let C=()=>{o(!0)},S=()=>{o(!1),u(!1)};return i?e!=="intent"?[l,v,{}]:[l,v,{onFocus:Bs(d,C),onBlur:Bs(p,S),onMouseEnter:Bs(h,C),onMouseLeave:Bs(g,S),onTouchStart:Bs(y,C)}]:[!1,v,{}]}function Bs(e,t){return i=>{e&&e(i),i.defaultPrevented||t(i)}}function lb({page:e,...t}){let{router:i}=W6(),r=R.useMemo(()=>U6(i.routes,e,i.basename),[i.routes,e,i.basename]);return r?R.createElement(ub,{page:e,matches:r,...t}):null}function cb(e){let{manifest:t,routeModules:i}=K6(),[r,o]=R.useState([]);return R.useEffect(()=>{let l=!1;return tb(e,t,i).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,i]),r}function ub({page:e,matches:t,...i}){let r=vn(),{manifest:o,routeModules:l}=K6(),{basename:u}=W6(),{loaderData:d,matches:p}=sb(),h=R.useMemo(()=>T3(e,t,p,o,r,"data"),[e,t,p,o,r]),g=R.useMemo(()=>T3(e,t,p,o,r,"assets"),[e,t,p,o,r]),y=R.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let S=new Set,E=!1;if(t.forEach(M=>{var j;let T=o.routes[M.route.id];!T||!T.hasLoader||(!h.some(D=>D.route.id===M.route.id)&&M.route.id in d&&((j=l[M.route.id])!=null&&j.shouldRevalidate)||T.hasClientLoader?E=!0:S.add(M.route.id))}),S.size===0)return[];let O=Qw(e,u,"data");return E&&S.size>0&&O.searchParams.set("_routes",t.filter(M=>S.has(M.route.id)).map(M=>M.route.id).join(",")),[O.pathname+O.search]},[u,d,r,o,h,t,e,l]),v=R.useMemo(()=>nb(g,o),[g,o]),C=cb(g);return R.createElement(R.Fragment,null,y.map(S=>R.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...i})),v.map(S=>R.createElement("link",{key:S,rel:"modulepreload",href:S,...i})),C.map(({key:S,link:E})=>R.createElement("link",{key:S,nonce:i.nonce,...E})))}function db(...e){return t=>{e.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Q6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Q6&&(window.__reactRouterVersion="7.8.0")}catch{}function fb({basename:e,children:t,window:i}){let r=R.useRef();r.current==null&&(r.current=X9({window:i,v5Compat:!0}));let o=r.current,[l,u]=R.useState({action:o.action,location:o.location}),d=R.useCallback(p=>{R.startTransition(()=>u(p))},[u]);return R.useLayoutEffect(()=>o.listen(d),[o,d]),R.createElement(_w,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:o})}var J6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e5=R.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:o,reloadDocument:l,replace:u,state:d,target:p,to:h,preventScrollReset:g,viewTransition:y,...v},C){let{basename:S}=R.useContext(An),E=typeof h=="string"&&J6.test(h),O,M=!1;if(typeof h=="string"&&E&&(O=h,Q6))try{let q=new URL(window.location.href),Y=h.startsWith("//")?new URL(q.protocol+h):new URL(h),W=di(Y.pathname,S);Y.origin===q.origin&&W!=null?h=W+Y.search+Y.hash:M=!0}catch{jn(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let T=Sw(h,{relative:o}),[j,D,L]=ob(r,v),$=mb(h,{replace:u,state:d,target:p,preventScrollReset:g,relative:o,viewTransition:y});function V(q){t&&t(q),q.defaultPrevented||$(q)}let _=R.createElement("a",{...v,...L,href:O||T,onClick:M||l?t:V,ref:db(C,D),target:p,"data-discover":!E&&i==="render"?"true":void 0});return j&&!E?R.createElement(R.Fragment,null,_,R.createElement(lb,{page:T})):_});e5.displayName="Link";var wt=R.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:o=!1,style:l,to:u,viewTransition:d,children:p,...h},g){let y=wo(u,{relative:h.relative}),v=vn(),C=R.useContext(Fc),{navigator:S,basename:E}=R.useContext(An),O=C!=null&&wb(y)&&d===!0,M=S.encodeLocation?S.encodeLocation(y).pathname:y.pathname,T=v.pathname,j=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(T=T.toLowerCase(),j=j?j.toLowerCase():null,M=M.toLowerCase()),j&&E&&(j=di(j,E)||j);const D=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let L=T===M||!o&&T.startsWith(M)&&T.charAt(D)==="/",$=j!=null&&(j===M||!o&&j.startsWith(M)&&j.charAt(M.length)==="/"),V={isActive:L,isPending:$,isTransitioning:O},_=L?t:void 0,q;typeof r=="function"?q=r(V):q=[r,L?"active":null,$?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let Y=typeof l=="function"?l(V):l;return R.createElement(e5,{...h,"aria-current":_,className:q,ref:g,style:Y,to:u,viewTransition:d},typeof p=="function"?p(V):p)});wt.displayName="NavLink";var pb=R.forwardRef(({discover:e="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:o,state:l,method:u=lc,action:d,onSubmit:p,relative:h,preventScrollReset:g,viewTransition:y,...v},C)=>{let S=yb(),E=vb(d,{relative:h}),O=u.toLowerCase()==="get"?"get":"post",M=typeof d=="string"&&J6.test(d),T=j=>{if(p&&p(j),j.defaultPrevented)return;j.preventDefault();let D=j.nativeEvent.submitter,L=(D==null?void 0:D.getAttribute("formmethod"))||u;S(D||j.currentTarget,{fetcherKey:t,method:L,navigate:i,replace:o,state:l,relative:h,preventScrollReset:g,viewTransition:y})};return R.createElement("form",{ref:C,method:O,action:E,onSubmit:r?p:T,...v,"data-discover":!M&&e==="render"?"true":void 0})});pb.displayName="Form";function hb(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function t5(e){let t=R.useContext(Hr);return Ge(t,hb(e)),t}function mb(e,{target:t,replace:i,state:r,preventScrollReset:o,relative:l,viewTransition:u}={}){let d=zp(),p=vn(),h=wo(e,{relative:l});return R.useCallback(g=>{if(Zw(g,t)){g.preventDefault();let y=i!==void 0?i:ao(p)===ao(h);d(e,{replace:y,state:r,preventScrollReset:o,relative:l,viewTransition:u})}},[p,d,h,i,r,t,e,o,l,u])}var gb=0,xb=()=>`__${String(++gb)}__`;function yb(){let{router:e}=t5("useSubmit"),{basename:t}=R.useContext(An),i=Vw();return R.useCallback(async(r,o={})=>{let{action:l,method:u,encType:d,formData:p,body:h}=Kw(r,t);if(o.navigate===!1){let g=o.fetcherKey||xb();await e.fetch(g,i,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||d,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,i])}function vb(e,{relative:t}={}){let{basename:i}=R.useContext(An),r=R.useContext(yn);Ge(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),l={...wo(e||".",{relative:t})},u=vn();if(e==null){l.search=u.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(y=>y).forEach(y=>d.append("index",y));let g=d.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(l.pathname=l.pathname==="/"?i:ui([i,l.pathname])),ao(l)}function wb(e,{relative:t}={}){let i=R.useContext(q6);Ge(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=t5("useViewTransitionState"),o=wo(e,{relative:t});if(!i.isTransitioning)return!1;let l=di(i.currentLocation.pathname,r)||i.currentLocation.pathname,u=di(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Cc(o.pathname,u)!=null||Cc(o.pathname,l)!=null}function bb(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Sb(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Cb=function(){function e(i){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Sb(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=bb(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Et="-ms-",Tc="-moz-",je="-webkit-",n5="comm",Bp="rule",Up="decl",Tb="@import",i5="@keyframes",Eb="@layer",jb=Math.abs,Xc=String.fromCharCode,Ab=Object.assign;function Mb(e,t){return vt(e,0)^45?(((t<<2^vt(e,0))<<2^vt(e,1))<<2^vt(e,2))<<2^vt(e,3):0}function a5(e){return e.trim()}function Lb(e,t){return(e=t.exec(e))?e[0]:e}function Ae(e,t,i){return e.replace(t,i)}function N0(e,t){return e.indexOf(t)}function vt(e,t){return e.charCodeAt(t)|0}function ro(e,t,i){return e.slice(t,i)}function Hn(e){return e.length}function _p(e){return e.length}function _l(e,t){return t.push(e),e}function Ob(e,t){return e.map(t).join("")}var Wc=1,Tr=1,r5=0,_t=0,it=0,Vr="";function Kc(e,t,i,r,o,l,u){return{value:e,root:t,parent:i,type:r,props:o,children:l,line:Wc,column:Tr,length:u,return:""}}function Us(e,t){return Ab(Kc("",null,null,"",null,null,0),e,{length:-e.length},t)}function Rb(){return it}function kb(){return it=_t>0?vt(Vr,--_t):0,Tr--,it===10&&(Tr=1,Wc--),it}function tn(){return it=_t<r5?vt(Vr,_t++):0,Tr++,it===10&&(Tr=1,Wc++),it}function $n(){return vt(Vr,_t)}function uc(){return _t}function bo(e,t){return ro(Vr,e,t)}function so(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function s5(e){return Wc=Tr=1,r5=Hn(Vr=e),_t=0,[]}function o5(e){return Vr="",e}function dc(e){return a5(bo(_t-1,$0(e===91?e+2:e===40?e+1:e)))}function Db(e){for(;(it=$n())&&it<33;)tn();return so(e)>2||so(it)>3?"":" "}function Hb(e,t){for(;--t&&tn()&&!(it<48||it>102||it>57&&it<65||it>70&&it<97););return bo(e,uc()+(t<6&&$n()==32&&tn()==32))}function $0(e){for(;tn();)switch(it){case e:return _t;case 34:case 39:e!==34&&e!==39&&$0(it);break;case 40:e===41&&$0(e);break;case 92:tn();break}return _t}function zb(e,t){for(;tn()&&e+it!==57;)if(e+it===84&&$n()===47)break;return"/*"+bo(t,_t-1)+"*"+Xc(e===47?e:tn())}function Vb(e){for(;!so($n());)tn();return bo(e,_t)}function Pb(e){return o5(fc("",null,null,null,[""],e=s5(e),0,[0],e))}function fc(e,t,i,r,o,l,u,d,p){for(var h=0,g=0,y=u,v=0,C=0,S=0,E=1,O=1,M=1,T=0,j="",D=o,L=l,$=r,V=j;O;)switch(S=T,T=tn()){case 40:if(S!=108&&vt(V,y-1)==58){N0(V+=Ae(dc(T),"&","&\f"),"&\f")!=-1&&(M=-1);break}case 34:case 39:case 91:V+=dc(T);break;case 9:case 10:case 13:case 32:V+=Db(S);break;case 92:V+=Hb(uc()-1,7);continue;case 47:switch($n()){case 42:case 47:_l(Nb(zb(tn(),uc()),t,i),p);break;default:V+="/"}break;case 123*E:d[h++]=Hn(V)*M;case 125*E:case 59:case 0:switch(T){case 0:case 125:O=0;case 59+g:M==-1&&(V=Ae(V,/\f/g,"")),C>0&&Hn(V)-y&&_l(C>32?j3(V+";",r,i,y-1):j3(Ae(V," ","")+";",r,i,y-2),p);break;case 59:V+=";";default:if(_l($=E3(V,t,i,h,g,o,d,j,D=[],L=[],y),l),T===123)if(g===0)fc(V,t,$,$,D,l,y,d,L);else switch(v===99&&vt(V,3)===110?100:v){case 100:case 108:case 109:case 115:fc(e,$,$,r&&_l(E3(e,$,$,0,0,o,d,j,o,D=[],y),L),o,L,y,d,r?D:L);break;default:fc(V,$,$,$,[""],L,0,d,L)}}h=g=C=0,E=M=1,j=V="",y=u;break;case 58:y=1+Hn(V),C=S;default:if(E<1){if(T==123)--E;else if(T==125&&E++==0&&kb()==125)continue}switch(V+=Xc(T),T*E){case 38:M=g>0?1:(V+="\f",-1);break;case 44:d[h++]=(Hn(V)-1)*M,M=1;break;case 64:$n()===45&&(V+=dc(tn())),v=$n(),g=y=Hn(j=V+=Vb(uc())),T++;break;case 45:S===45&&Hn(V)==2&&(E=0)}}return l}function E3(e,t,i,r,o,l,u,d,p,h,g){for(var y=o-1,v=o===0?l:[""],C=_p(v),S=0,E=0,O=0;S<r;++S)for(var M=0,T=ro(e,y+1,y=jb(E=u[S])),j=e;M<C;++M)(j=a5(E>0?v[M]+" "+T:Ae(T,/&\f/g,v[M])))&&(p[O++]=j);return Kc(e,t,i,o===0?Bp:d,p,h,g)}function Nb(e,t,i){return Kc(e,t,i,n5,Xc(Rb()),ro(e,2,-2),0)}function j3(e,t,i,r){return Kc(e,t,i,Up,ro(e,0,r),ro(e,r+1,-1),r)}function br(e,t){for(var i="",r=_p(e),o=0;o<r;o++)i+=t(e[o],o,e,t)||"";return i}function $b(e,t,i,r){switch(e.type){case Eb:if(e.children.length)break;case Tb:case Up:return e.return=e.return||e.value;case n5:return"";case i5:return e.return=e.value+"{"+br(e.children,r)+"}";case Bp:e.value=e.props.join(",")}return Hn(i=br(e.children,r))?e.return=e.value+"{"+i+"}":""}function Bb(e){var t=_p(e);return function(i,r,o,l){for(var u="",d=0;d<t;d++)u+=e[d](i,r,o,l)||"";return u}}function Ub(e){return function(t){t.root||(t=t.return)&&e(t)}}function _b(e){var t=Object.create(null);return function(i){return t[i]===void 0&&(t[i]=e(i)),t[i]}}var Ib=function(t,i,r){for(var o=0,l=0;o=l,l=$n(),o===38&&l===12&&(i[r]=1),!so(l);)tn();return bo(t,_t)},Gb=function(t,i){var r=-1,o=44;do switch(so(o)){case 0:o===38&&$n()===12&&(i[r]=1),t[r]+=Ib(_t-1,i,r);break;case 2:t[r]+=dc(o);break;case 4:if(o===44){t[++r]=$n()===58?"&\f":"",i[r]=t[r].length;break}default:t[r]+=Xc(o)}while(o=tn());return t},qb=function(t,i){return o5(Gb(s5(t),i))},A3=new WeakMap,Yb=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var i=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&i.charCodeAt(0)!==58&&!A3.get(r))&&!o){A3.set(t,!0);for(var l=[],u=qb(i,l),d=r.props,p=0,h=0;p<u.length;p++)for(var g=0;g<d.length;g++,h++)t.props[h]=l[p]?u[p].replace(/&\f/g,d[g]):d[g]+" "+u[p]}}},Fb=function(t){if(t.type==="decl"){var i=t.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(t.return="",t.value="")}};function l5(e,t){switch(Mb(e,t)){case 5103:return je+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return je+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return je+e+Tc+e+Et+e+e;case 6828:case 4268:return je+e+Et+e+e;case 6165:return je+e+Et+"flex-"+e+e;case 5187:return je+e+Ae(e,/(\w+).+(:[^]+)/,je+"box-$1$2"+Et+"flex-$1$2")+e;case 5443:return je+e+Et+"flex-item-"+Ae(e,/flex-|-self/,"")+e;case 4675:return je+e+Et+"flex-line-pack"+Ae(e,/align-content|flex-|-self/,"")+e;case 5548:return je+e+Et+Ae(e,"shrink","negative")+e;case 5292:return je+e+Et+Ae(e,"basis","preferred-size")+e;case 6060:return je+"box-"+Ae(e,"-grow","")+je+e+Et+Ae(e,"grow","positive")+e;case 4554:return je+Ae(e,/([^-])(transform)/g,"$1"+je+"$2")+e;case 6187:return Ae(Ae(Ae(e,/(zoom-|grab)/,je+"$1"),/(image-set)/,je+"$1"),e,"")+e;case 5495:case 3959:return Ae(e,/(image-set\([^]*)/,je+"$1$`$1");case 4968:return Ae(Ae(e,/(.+:)(flex-)?(.*)/,je+"box-pack:$3"+Et+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+je+e+e;case 4095:case 3583:case 4068:case 2532:return Ae(e,/(.+)-inline(.+)/,je+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hn(e)-1-t>6)switch(vt(e,t+1)){case 109:if(vt(e,t+4)!==45)break;case 102:return Ae(e,/(.+:)(.+)-([^]+)/,"$1"+je+"$2-$3$1"+Tc+(vt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~N0(e,"stretch")?l5(Ae(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(vt(e,t+1)!==115)break;case 6444:switch(vt(e,Hn(e)-3-(~N0(e,"!important")&&10))){case 107:return Ae(e,":",":"+je)+e;case 101:return Ae(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+je+(vt(e,14)===45?"inline-":"")+"box$3$1"+je+"$2$3$1"+Et+"$2box$3")+e}break;case 5936:switch(vt(e,t+11)){case 114:return je+e+Et+Ae(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return je+e+Et+Ae(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return je+e+Et+Ae(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return je+e+Et+e+e}return e}var Zb=function(t,i,r,o){if(t.length>-1&&!t.return)switch(t.type){case Up:t.return=l5(t.value,t.length);break;case i5:return br([Us(t,{value:Ae(t.value,"@","@"+je)})],o);case Bp:if(t.length)return Ob(t.props,function(l){switch(Lb(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return br([Us(t,{props:[Ae(l,/:(read-\w+)/,":"+Tc+"$1")]})],o);case"::placeholder":return br([Us(t,{props:[Ae(l,/:(plac\w+)/,":"+je+"input-$1")]}),Us(t,{props:[Ae(l,/:(plac\w+)/,":"+Tc+"$1")]}),Us(t,{props:[Ae(l,/:(plac\w+)/,Et+"input-$1")]})],o)}return""})}},Xb=[Zb],Wb=function(t){var i=t.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(E){var O=E.getAttribute("data-emotion");O.indexOf(" ")!==-1&&(document.head.appendChild(E),E.setAttribute("data-s",""))})}var o=t.stylisPlugins||Xb,l={},u,d=[];u=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(E){for(var O=E.getAttribute("data-emotion").split(" "),M=1;M<O.length;M++)l[O[M]]=!0;d.push(E)});var p,h=[Yb,Fb];{var g,y=[$b,Ub(function(E){g.insert(E)})],v=Bb(h.concat(o,y)),C=function(O){return br(Pb(O),v)};p=function(O,M,T,j){g=T,C(O?O+"{"+M.styles+"}":M.styles),j&&(S.inserted[M.name]=!0)}}var S={key:i,sheet:new Cb({key:i,container:u,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:p};return S.sheet.hydrate(d),S},Df={exports:{}},Oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M3;function Kb(){if(M3)return Oe;M3=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,i=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,p=e?Symbol.for("react.async_mode"):60111,h=e?Symbol.for("react.concurrent_mode"):60111,g=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,O=e?Symbol.for("react.fundamental"):60117,M=e?Symbol.for("react.responder"):60118,T=e?Symbol.for("react.scope"):60119;function j(L){if(typeof L=="object"&&L!==null){var $=L.$$typeof;switch($){case t:switch(L=L.type,L){case p:case h:case r:case l:case o:case y:return L;default:switch(L=L&&L.$$typeof,L){case d:case g:case S:case C:case u:return L;default:return $}}case i:return $}}}function D(L){return j(L)===h}return Oe.AsyncMode=p,Oe.ConcurrentMode=h,Oe.ContextConsumer=d,Oe.ContextProvider=u,Oe.Element=t,Oe.ForwardRef=g,Oe.Fragment=r,Oe.Lazy=S,Oe.Memo=C,Oe.Portal=i,Oe.Profiler=l,Oe.StrictMode=o,Oe.Suspense=y,Oe.isAsyncMode=function(L){return D(L)||j(L)===p},Oe.isConcurrentMode=D,Oe.isContextConsumer=function(L){return j(L)===d},Oe.isContextProvider=function(L){return j(L)===u},Oe.isElement=function(L){return typeof L=="object"&&L!==null&&L.$$typeof===t},Oe.isForwardRef=function(L){return j(L)===g},Oe.isFragment=function(L){return j(L)===r},Oe.isLazy=function(L){return j(L)===S},Oe.isMemo=function(L){return j(L)===C},Oe.isPortal=function(L){return j(L)===i},Oe.isProfiler=function(L){return j(L)===l},Oe.isStrictMode=function(L){return j(L)===o},Oe.isSuspense=function(L){return j(L)===y},Oe.isValidElementType=function(L){return typeof L=="string"||typeof L=="function"||L===r||L===h||L===l||L===o||L===y||L===v||typeof L=="object"&&L!==null&&(L.$$typeof===S||L.$$typeof===C||L.$$typeof===u||L.$$typeof===d||L.$$typeof===g||L.$$typeof===O||L.$$typeof===M||L.$$typeof===T||L.$$typeof===E)},Oe.typeOf=j,Oe}var L3;function Qb(){return L3||(L3=1,Df.exports=Kb()),Df.exports}var Hf,O3;function Jb(){if(O3)return Hf;O3=1;var e=Qb(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=r,l[e.Memo]=o;function u(S){return e.isMemo(S)?o:l[S.$$typeof]||t}var d=Object.defineProperty,p=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,v=Object.prototype;function C(S,E,O){if(typeof E!="string"){if(v){var M=y(E);M&&M!==v&&C(S,M,O)}var T=p(E);h&&(T=T.concat(h(E)));for(var j=u(S),D=u(E),L=0;L<T.length;++L){var $=T[L];if(!i[$]&&!(O&&O[$])&&!(D&&D[$])&&!(j&&j[$])){var V=g(E,$);try{d(S,$,V)}catch{}}}}return S}return Hf=C,Hf}Jb();var eS=!0;function tS(e,t,i){var r="";return i.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(r+=o+" ")}),r}var c5=function(t,i,r){var o=t.key+"-"+i.name;(r===!1||eS===!1)&&t.registered[o]===void 0&&(t.registered[o]=i.styles)},u5=function(t,i,r){c5(t,i,r);var o=t.key+"-"+i.name;if(t.inserted[i.name]===void 0){var l=i;do t.insert(i===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function nS(e){for(var t=0,i,r=0,o=e.length;o>=4;++r,o-=4)i=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,t=(i&65535)*1540483477+((i>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var iS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},aS=/[A-Z]|^ms/g,rS=/_EMO_([^_]+?)_([^]*?)_EMO_/g,d5=function(t){return t.charCodeAt(1)===45},R3=function(t){return t!=null&&typeof t!="boolean"},zf=_b(function(e){return d5(e)?e:e.replace(aS,"-$&").toLowerCase()}),k3=function(t,i){switch(t){case"animation":case"animationName":if(typeof i=="string")return i.replace(rS,function(r,o,l){return zn={name:o,styles:l,next:zn},o})}return iS[t]!==1&&!d5(t)&&typeof i=="number"&&i!==0?i+"px":i};function oo(e,t,i){if(i==null)return"";var r=i;if(r.__emotion_styles!==void 0)return r;switch(typeof i){case"boolean":return"";case"object":{var o=i;if(o.anim===1)return zn={name:o.name,styles:o.styles,next:zn},o.name;var l=i;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)zn={name:u.name,styles:u.styles,next:zn},u=u.next;var d=l.styles+";";return d}return sS(e,t,i)}case"function":{if(e!==void 0){var p=zn,h=i(e);return zn=p,oo(e,t,h)}break}}var g=i;return g}function sS(e,t,i){var r="";if(Array.isArray(i))for(var o=0;o<i.length;o++)r+=oo(e,t,i[o])+";";else for(var l in i){var u=i[l];if(typeof u!="object"){var d=u;R3(d)&&(r+=zf(l)+":"+k3(l,d)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&t==null)for(var p=0;p<u.length;p++)R3(u[p])&&(r+=zf(l)+":"+k3(l,u[p])+";");else{var h=oo(e,t,u);switch(l){case"animation":case"animationName":{r+=zf(l)+":"+h+";";break}default:r+=l+"{"+h+"}"}}}return r}var D3=/label:\s*([^\s;{]+)\s*(;|$)/g,zn;function Ip(e,t,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,o="";zn=void 0;var l=e[0];if(l==null||l.raw===void 0)r=!1,o+=oo(i,t,l);else{var u=l;o+=u[0]}for(var d=1;d<e.length;d++)if(o+=oo(i,t,e[d]),r){var p=l;o+=p[d]}D3.lastIndex=0;for(var h="",g;(g=D3.exec(o))!==null;)h+="-"+g[1];var y=nS(o)+h;return{name:y,styles:o,next:zn}}var oS=function(t){return t()},f5=v3.useInsertionEffect?v3.useInsertionEffect:!1,lS=f5||oS,H3=f5||R.useLayoutEffect,p5=R.createContext(typeof HTMLElement<"u"?Wb({key:"css"}):null);p5.Provider;var h5=function(t){return R.forwardRef(function(i,r){var o=R.useContext(p5);return t(i,o,r)})},m5=R.createContext({}),Gp={}.hasOwnProperty,B0="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",cS=function(t,i){var r={};for(var o in i)Gp.call(i,o)&&(r[o]=i[o]);return r[B0]=t,r},uS=function(t){var i=t.cache,r=t.serialized,o=t.isStringTag;return c5(i,r,o),lS(function(){return u5(i,r,o)}),null},dS=h5(function(e,t,i){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[B0],l=[r],u="";typeof e.className=="string"?u=tS(t.registered,l,e.className):e.className!=null&&(u=e.className+" ");var d=Ip(l,void 0,R.useContext(m5));u+=t.key+"-"+d.name;var p={};for(var h in e)Gp.call(e,h)&&h!=="css"&&h!==B0&&(p[h]=e[h]);return p.className=u,i&&(p.ref=i),R.createElement(R.Fragment,null,R.createElement(uS,{cache:t,serialized:d,isStringTag:typeof o=="string"}),R.createElement(o,p))}),fS=dS,z3=function(t,i){var r=arguments;if(i==null||!Gp.call(i,"css"))return R.createElement.apply(void 0,r);var o=r.length,l=new Array(o);l[0]=fS,l[1]=cS(t,i);for(var u=2;u<o;u++)l[u]=r[u];return R.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(z3||(z3={}));var pS=h5(function(e,t){var i=e.styles,r=Ip([i],void 0,R.useContext(m5)),o=R.useRef();return H3(function(){var l=t.key+"-global",u=new t.sheet.constructor({key:l,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),d=!1,p=document.querySelector('style[data-emotion="'+l+" "+r.name+'"]');return t.sheet.tags.length&&(u.before=t.sheet.tags[0]),p!==null&&(d=!0,p.setAttribute("data-emotion",l),u.hydrate([p])),o.current=[u,d],function(){u.flush()}},[t]),H3(function(){var l=o.current,u=l[0],d=l[1];if(d){l[1]=!1;return}if(r.next!==void 0&&u5(t,r.next,!0),u.tags.length){var p=u.tags[u.tags.length-1].nextElementSibling;u.before=p,u.flush()}t.insert("",r,u,!1)},[t,r.name]),null});function hS(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return Ip(t)}const mS="/assets/Geist-Regular-BCrLS6HJ.ttf",gS="/assets/Geist-Medium-C6X8vKEc.ttf",xS="/assets/BebasNeue-Regular-D2CONTwO.ttf",yS="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",vS=hS`
  /* Font Awesome */
  @font-face {
    font-family: 'Geist Regular';
    src: url(${mS}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Додано для кращого відображення шрифтів */
  }

  /* Helvetica */
  @font-face {
    font-family: 'Geist Medium';
    src: url(${gS}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bebas Neue Regular';
    src: url(${xS}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${yS}) format('truetype');
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
`;var Nt=function(){return Nt=Object.assign||function(t){for(var i,r=1,o=arguments.length;r<o;r++){i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},Nt.apply(this,arguments)};function lo(e,t,i){if(i||arguments.length===2)for(var r=0,o=t.length,l;r<o;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var Ue="-ms-",Ws="-moz-",Re="-webkit-",g5="comm",Qc="rule",qp="decl",wS="@import",x5="@keyframes",bS="@layer",y5=Math.abs,Yp=String.fromCharCode,U0=Object.assign;function SS(e,t){return ht(e,0)^45?(((t<<2^ht(e,0))<<2^ht(e,1))<<2^ht(e,2))<<2^ht(e,3):0}function v5(e){return e.trim()}function ci(e,t){return(e=t.exec(e))?e[0]:e}function xe(e,t,i){return e.replace(t,i)}function pc(e,t,i){return e.indexOf(t,i)}function ht(e,t){return e.charCodeAt(t)|0}function Er(e,t,i){return e.slice(t,i)}function Vn(e){return e.length}function w5(e){return e.length}function Zs(e,t){return t.push(e),e}function CS(e,t){return e.map(t).join("")}function V3(e,t){return e.filter(function(i){return!ci(i,t)})}var Jc=1,jr=1,b5=0,xn=0,at=0,Pr="";function eu(e,t,i,r,o,l,u,d){return{value:e,root:t,parent:i,type:r,props:o,children:l,line:Jc,column:jr,length:u,return:"",siblings:d}}function Bi(e,t){return U0(eu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function cr(e){for(;e.root;)e=Bi(e.root,{children:[e]});Zs(e,e.siblings)}function TS(){return at}function ES(){return at=xn>0?ht(Pr,--xn):0,jr--,at===10&&(jr=1,Jc--),at}function Tn(){return at=xn<b5?ht(Pr,xn++):0,jr++,at===10&&(jr=1,Jc++),at}function xa(){return ht(Pr,xn)}function hc(){return xn}function tu(e,t){return Er(Pr,e,t)}function _0(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jS(e){return Jc=jr=1,b5=Vn(Pr=e),xn=0,[]}function AS(e){return Pr="",e}function Vf(e){return v5(tu(xn-1,I0(e===91?e+2:e===40?e+1:e)))}function MS(e){for(;(at=xa())&&at<33;)Tn();return _0(e)>2||_0(at)>3?"":" "}function LS(e,t){for(;--t&&Tn()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return tu(e,hc()+(t<6&&xa()==32&&Tn()==32))}function I0(e){for(;Tn();)switch(at){case e:return xn;case 34:case 39:e!==34&&e!==39&&I0(at);break;case 40:e===41&&I0(e);break;case 92:Tn();break}return xn}function OS(e,t){for(;Tn()&&e+at!==57;)if(e+at===84&&xa()===47)break;return"/*"+tu(t,xn-1)+"*"+Yp(e===47?e:Tn())}function RS(e){for(;!_0(xa());)Tn();return tu(e,xn)}function kS(e){return AS(mc("",null,null,null,[""],e=jS(e),0,[0],e))}function mc(e,t,i,r,o,l,u,d,p){for(var h=0,g=0,y=u,v=0,C=0,S=0,E=1,O=1,M=1,T=0,j="",D=o,L=l,$=r,V=j;O;)switch(S=T,T=Tn()){case 40:if(S!=108&&ht(V,y-1)==58){pc(V+=xe(Vf(T),"&","&\f"),"&\f",y5(h?d[h-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:V+=Vf(T);break;case 9:case 10:case 13:case 32:V+=MS(S);break;case 92:V+=LS(hc()-1,7);continue;case 47:switch(xa()){case 42:case 47:Zs(DS(OS(Tn(),hc()),t,i,p),p);break;default:V+="/"}break;case 123*E:d[h++]=Vn(V)*M;case 125*E:case 59:case 0:switch(T){case 0:case 125:O=0;case 59+g:M==-1&&(V=xe(V,/\f/g,"")),C>0&&Vn(V)-y&&Zs(C>32?N3(V+";",r,i,y-1,p):N3(xe(V," ","")+";",r,i,y-2,p),p);break;case 59:V+=";";default:if(Zs($=P3(V,t,i,h,g,o,d,j,D=[],L=[],y,l),l),T===123)if(g===0)mc(V,t,$,$,D,l,y,d,L);else switch(v===99&&ht(V,3)===110?100:v){case 100:case 108:case 109:case 115:mc(e,$,$,r&&Zs(P3(e,$,$,0,0,o,d,j,o,D=[],y,L),L),o,L,y,d,r?D:L);break;default:mc(V,$,$,$,[""],L,0,d,L)}}h=g=C=0,E=M=1,j=V="",y=u;break;case 58:y=1+Vn(V),C=S;default:if(E<1){if(T==123)--E;else if(T==125&&E++==0&&ES()==125)continue}switch(V+=Yp(T),T*E){case 38:M=g>0?1:(V+="\f",-1);break;case 44:d[h++]=(Vn(V)-1)*M,M=1;break;case 64:xa()===45&&(V+=Vf(Tn())),v=xa(),g=y=Vn(j=V+=RS(hc())),T++;break;case 45:S===45&&Vn(V)==2&&(E=0)}}return l}function P3(e,t,i,r,o,l,u,d,p,h,g,y){for(var v=o-1,C=o===0?l:[""],S=w5(C),E=0,O=0,M=0;E<r;++E)for(var T=0,j=Er(e,v+1,v=y5(O=u[E])),D=e;T<S;++T)(D=v5(O>0?C[T]+" "+j:xe(j,/&\f/g,C[T])))&&(p[M++]=D);return eu(e,t,i,o===0?Qc:d,p,h,g,y)}function DS(e,t,i,r){return eu(e,t,i,g5,Yp(TS()),Er(e,2,-2),0,r)}function N3(e,t,i,r,o){return eu(e,t,i,qp,Er(e,0,r),Er(e,r+1,-1),r,o)}function S5(e,t,i){switch(SS(e,t)){case 5103:return Re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+e+e;case 4789:return Ws+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+e+Ws+e+Ue+e+e;case 5936:switch(ht(e,t+11)){case 114:return Re+e+Ue+xe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Re+e+Ue+xe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Re+e+Ue+xe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Re+e+Ue+e+e;case 6165:return Re+e+Ue+"flex-"+e+e;case 5187:return Re+e+xe(e,/(\w+).+(:[^]+)/,Re+"box-$1$2"+Ue+"flex-$1$2")+e;case 5443:return Re+e+Ue+"flex-item-"+xe(e,/flex-|-self/g,"")+(ci(e,/flex-|baseline/)?"":Ue+"grid-row-"+xe(e,/flex-|-self/g,""))+e;case 4675:return Re+e+Ue+"flex-line-pack"+xe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Re+e+Ue+xe(e,"shrink","negative")+e;case 5292:return Re+e+Ue+xe(e,"basis","preferred-size")+e;case 6060:return Re+"box-"+xe(e,"-grow","")+Re+e+Ue+xe(e,"grow","positive")+e;case 4554:return Re+xe(e,/([^-])(transform)/g,"$1"+Re+"$2")+e;case 6187:return xe(xe(xe(e,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),e,"")+e;case 5495:case 3959:return xe(e,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return xe(xe(e,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+e+e;case 4200:if(!ci(e,/flex-|baseline/))return Ue+"grid-column-align"+Er(e,t)+e;break;case 2592:case 3360:return Ue+xe(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(r,o){return t=o,ci(r.props,/grid-\w+-end/)})?~pc(e+(i=i[t].value),"span",0)?e:Ue+xe(e,"-start","")+e+Ue+"grid-row-span:"+(~pc(i,"span",0)?ci(i,/\d+/):+ci(i,/\d+/)-+ci(e,/\d+/))+";":Ue+xe(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(r){return ci(r.props,/grid-\w+-start/)})?e:Ue+xe(xe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return xe(e,/(.+)-inline(.+)/,Re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vn(e)-1-t>6)switch(ht(e,t+1)){case 109:if(ht(e,t+4)!==45)break;case 102:return xe(e,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+Ws+(ht(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~pc(e,"stretch",0)?S5(xe(e,"stretch","fill-available"),t,i)+e:e}break;case 5152:case 5920:return xe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,u,d,p,h){return Ue+o+":"+l+h+(u?Ue+o+"-span:"+(d?p:+p-+l)+h:"")+e});case 4949:if(ht(e,t+6)===121)return xe(e,":",":"+Re)+e;break;case 6444:switch(ht(e,ht(e,14)===45?18:11)){case 120:return xe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Re+(ht(e,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+Ue+"$2box$3")+e;case 100:return xe(e,":",":"+Ue)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return xe(e,"scroll-","scroll-snap-")+e}return e}function Ec(e,t){for(var i="",r=0;r<e.length;r++)i+=t(e[r],r,e,t)||"";return i}function HS(e,t,i,r){switch(e.type){case bS:if(e.children.length)break;case wS:case qp:return e.return=e.return||e.value;case g5:return"";case x5:return e.return=e.value+"{"+Ec(e.children,r)+"}";case Qc:if(!Vn(e.value=e.props.join(",")))return""}return Vn(i=Ec(e.children,r))?e.return=e.value+"{"+i+"}":""}function zS(e){var t=w5(e);return function(i,r,o,l){for(var u="",d=0;d<t;d++)u+=e[d](i,r,o,l)||"";return u}}function VS(e){return function(t){t.root||(t=t.return)&&e(t)}}function PS(e,t,i,r){if(e.length>-1&&!e.return)switch(e.type){case qp:e.return=S5(e.value,e.length,i);return;case x5:return Ec([Bi(e,{value:xe(e.value,"@","@"+Re)})],r);case Qc:if(e.length)return CS(i=e.props,function(o){switch(ci(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cr(Bi(e,{props:[xe(o,/:(read-\w+)/,":"+Ws+"$1")]})),cr(Bi(e,{props:[o]})),U0(e,{props:V3(i,r)});break;case"::placeholder":cr(Bi(e,{props:[xe(o,/:(plac\w+)/,":"+Re+"input-$1")]})),cr(Bi(e,{props:[xe(o,/:(plac\w+)/,":"+Ws+"$1")]})),cr(Bi(e,{props:[xe(o,/:(plac\w+)/,Ue+"input-$1")]})),cr(Bi(e,{props:[o]})),U0(e,{props:V3(i,r)});break}return""})}}var NS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jt={},Ar=typeof process<"u"&&Jt!==void 0&&(Jt.REACT_APP_SC_ATTR||Jt.SC_ATTR)||"data-styled",C5="active",T5="data-styled-version",nu="6.1.19",Fp=`/*!sc*/
`,jc=typeof window<"u"&&typeof document<"u",$S=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==""?Jt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.SC_DISABLE_SPEEDY!==void 0&&Jt.SC_DISABLE_SPEEDY!==""&&Jt.SC_DISABLE_SPEEDY!=="false"&&Jt.SC_DISABLE_SPEEDY),iu=Object.freeze([]),Mr=Object.freeze({});function BS(e,t,i){return i===void 0&&(i=Mr),e.theme!==i.theme&&e.theme||t||i.theme}var E5=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),US=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_S=/(^-|-$)/g;function $3(e){return e.replace(US,"-").replace(_S,"")}var IS=/(a)(d)/gi,Il=52,B3=function(e){return String.fromCharCode(e+(e>25?39:97))};function G0(e){var t,i="";for(t=Math.abs(e);t>Il;t=t/Il|0)i=B3(t%Il)+i;return(B3(t%Il)+i).replace(IS,"$1-$2")}var Pf,j5=5381,mr=function(e,t){for(var i=t.length;i;)e=33*e^t.charCodeAt(--i);return e},A5=function(e){return mr(j5,e)};function M5(e){return G0(A5(e)>>>0)}function GS(e){return e.displayName||e.name||"Component"}function Nf(e){return typeof e=="string"&&!0}var L5=typeof Symbol=="function"&&Symbol.for,O5=L5?Symbol.for("react.memo"):60115,qS=L5?Symbol.for("react.forward_ref"):60112,YS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},FS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},R5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ZS=((Pf={})[qS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pf[O5]=R5,Pf);function U3(e){return("type"in(t=e)&&t.type.$$typeof)===O5?R5:"$$typeof"in e?ZS[e.$$typeof]:YS;var t}var XS=Object.defineProperty,WS=Object.getOwnPropertyNames,_3=Object.getOwnPropertySymbols,KS=Object.getOwnPropertyDescriptor,QS=Object.getPrototypeOf,I3=Object.prototype;function k5(e,t,i){if(typeof t!="string"){if(I3){var r=QS(t);r&&r!==I3&&k5(e,r,i)}var o=WS(t);_3&&(o=o.concat(_3(t)));for(var l=U3(e),u=U3(t),d=0;d<o.length;++d){var p=o[d];if(!(p in FS||i&&i[p]||u&&p in u||l&&p in l)){var h=KS(t,p);try{XS(e,p,h)}catch{}}}}return e}function Lr(e){return typeof e=="function"}function Zp(e){return typeof e=="object"&&"styledComponentId"in e}function ha(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function q0(e,t){if(e.length===0)return"";for(var i=e[0],r=1;r<e.length;r++)i+=e[r];return i}function co(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Y0(e,t,i){if(i===void 0&&(i=!1),!i&&!co(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Y0(e[r],t[r]);else if(co(t))for(var r in t)e[r]=Y0(e[r],t[r]);return e}function Xp(e,t){Object.defineProperty(e,"toString",{value:t})}function So(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var JS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var i=0,r=0;r<t;r++)i+=this.groupSizes[r];return i},e.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;t>=l;)if((l<<=1)<0)throw So(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(t+1),p=(u=0,i.length);u<p;u++)this.tag.insertRule(d,i[u])&&(this.groupSizes[t]++,d++)},e.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],r=this.indexOfGroup(t),o=r+i;this.groupSizes[t]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),l=o+r,u=o;u<l;u++)i+="".concat(this.tag.getRule(u)).concat(Fp);return i},e}(),gc=new Map,Ac=new Map,xc=1,Gl=function(e){if(gc.has(e))return gc.get(e);for(;Ac.has(xc);)xc++;var t=xc++;return gc.set(e,t),Ac.set(t,e),t},eC=function(e,t){xc=t+1,gc.set(e,t),Ac.set(t,e)},tC="style[".concat(Ar,"][").concat(T5,'="').concat(nu,'"]'),nC=new RegExp("^".concat(Ar,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),iC=function(e,t,i){for(var r,o=i.split(","),l=0,u=o.length;l<u;l++)(r=o[l])&&e.registerName(t,r)},aC=function(e,t){for(var i,r=((i=t.textContent)!==null&&i!==void 0?i:"").split(Fp),o=[],l=0,u=r.length;l<u;l++){var d=r[l].trim();if(d){var p=d.match(nC);if(p){var h=0|parseInt(p[1],10),g=p[2];h!==0&&(eC(g,h),iC(e,g,p[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(d)}}},G3=function(e){for(var t=document.querySelectorAll(tC),i=0,r=t.length;i<r;i++){var o=t[i];o&&o.getAttribute(Ar)!==C5&&(aC(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function rC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var D5=function(e){var t=document.head,i=e||t,r=document.createElement("style"),o=function(d){var p=Array.from(d.querySelectorAll("style[".concat(Ar,"]")));return p[p.length-1]}(i),l=o!==void 0?o.nextSibling:null;r.setAttribute(Ar,C5),r.setAttribute(T5,nu);var u=rC();return u&&r.setAttribute("nonce",u),i.insertBefore(r,l),r},sC=function(){function e(t){this.element=D5(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var u=r[o];if(u.ownerNode===i)return u}throw So(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},e}(),oC=function(){function e(t){this.element=D5(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var r=document.createTextNode(i);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),lC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),q3=jc,cC={isServer:!jc,useCSSOMInjection:!$S},H5=function(){function e(t,i,r){t===void 0&&(t=Mr),i===void 0&&(i={});var o=this;this.options=Nt(Nt({},cC),t),this.gs=i,this.names=new Map(r),this.server=!!t.isServer,!this.server&&jc&&q3&&(q3=!1,G3(this)),Xp(this,function(){return function(l){for(var u=l.getTag(),d=u.length,p="",h=function(y){var v=function(M){return Ac.get(M)}(y);if(v===void 0)return"continue";var C=l.names.get(v),S=u.getGroup(y);if(C===void 0||!C.size||S.length===0)return"continue";var E="".concat(Ar,".g").concat(y,'[id="').concat(v,'"]'),O="";C!==void 0&&C.forEach(function(M){M.length>0&&(O+="".concat(M,","))}),p+="".concat(S).concat(E,'{content:"').concat(O,'"}').concat(Fp)},g=0;g<d;g++)h(g);return p}(o)})}return e.registerId=function(t){return Gl(t)},e.prototype.rehydrate=function(){!this.server&&jc&&G3(this)},e.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new e(Nt(Nt({},this.options),t),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(i){var r=i.useCSSOMInjection,o=i.target;return i.isServer?new lC(o):r?new sC(o):new oC(o)}(this.options),new JS(t)));var t},e.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},e.prototype.registerName=function(t,i){if(Gl(t),this.names.has(t))this.names.get(t).add(i);else{var r=new Set;r.add(i),this.names.set(t,r)}},e.prototype.insertRules=function(t,i,r){this.registerName(t,i),this.getTag().insertRules(Gl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Gl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),uC=/&/g,dC=/^\s*\/\/.*$/gm;function z5(e,t){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=z5(i.children,t)),i})}function fC(e){var t,i,r,o=Mr,l=o.options,u=l===void 0?Mr:l,d=o.plugins,p=d===void 0?iu:d,h=function(v,C,S){return S.startsWith(i)&&S.endsWith(i)&&S.replaceAll(i,"").length>0?".".concat(t):v},g=p.slice();g.push(function(v){v.type===Qc&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(uC,i).replace(r,h))}),u.prefix&&g.push(PS),g.push(HS);var y=function(v,C,S,E){C===void 0&&(C=""),S===void 0&&(S=""),E===void 0&&(E="&"),t=E,i=C,r=new RegExp("\\".concat(i,"\\b"),"g");var O=v.replace(dC,""),M=kS(S||C?"".concat(S," ").concat(C," { ").concat(O," }"):O);u.namespace&&(M=z5(M,u.namespace));var T=[];return Ec(M,zS(g.concat(VS(function(j){return T.push(j)})))),T};return y.hash=p.length?p.reduce(function(v,C){return C.name||So(15),mr(v,C.name)},j5).toString():"",y}var pC=new H5,F0=fC(),V5=ke.createContext({shouldForwardProp:void 0,styleSheet:pC,stylis:F0});V5.Consumer;ke.createContext(void 0);function Y3(){return R.useContext(V5)}var P5=function(){function e(t,i){var r=this;this.inject=function(o,l){l===void 0&&(l=F0);var u=r.name+l.hash;o.hasNameForId(r.id,u)||o.insertRules(r.id,u,l(r.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,Xp(this,function(){throw So(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=F0),this.name+t.hash},e}(),hC=function(e){return e>="A"&&e<="Z"};function F3(e){for(var t="",i=0;i<e.length;i++){var r=e[i];if(i===1&&r==="-"&&e[0]==="-")return e;hC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var N5=function(e){return e==null||e===!1||e===""},$5=function(e){var t,i,r=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!N5(l)&&(Array.isArray(l)&&l.isCss||Lr(l)?r.push("".concat(F3(o),":"),l,";"):co(l)?r.push.apply(r,lo(lo(["".concat(o," {")],$5(l),!1),["}"],!1)):r.push("".concat(F3(o),": ").concat((t=o,(i=l)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in NS||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return r};function ya(e,t,i,r){if(N5(e))return[];if(Zp(e))return[".".concat(e.styledComponentId)];if(Lr(e)){if(!Lr(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return ya(o,t,i,r)}var l;return e instanceof P5?i?(e.inject(i,r),[e.getName(r)]):[e]:co(e)?$5(e):Array.isArray(e)?Array.prototype.concat.apply(iu,e.map(function(u){return ya(u,t,i,r)})):[e.toString()]}function mC(e){for(var t=0;t<e.length;t+=1){var i=e[t];if(Lr(i)&&!Zp(i))return!1}return!0}var gC=A5(nu),xC=function(){function e(t,i,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&mC(t),this.componentId=i,this.baseHash=mr(gC,i),this.baseStyle=r,H5.registerId(i)}return e.prototype.generateAndInjectStyles=function(t,i,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=ha(o,this.staticRulesId);else{var l=q0(ya(this.rules,t,i,r)),u=G0(mr(this.baseHash,l)>>>0);if(!i.hasNameForId(this.componentId,u)){var d=r(l,".".concat(u),void 0,this.componentId);i.insertRules(this.componentId,u,d)}o=ha(o,u),this.staticRulesId=u}else{for(var p=mr(this.baseHash,r.hash),h="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")h+=y;else if(y){var v=q0(ya(y,t,i,r));p=mr(p,v+g),h+=v}}if(h){var C=G0(p>>>0);i.hasNameForId(this.componentId,C)||i.insertRules(this.componentId,C,r(h,".".concat(C),void 0,this.componentId)),o=ha(o,C)}}return o},e}(),B5=ke.createContext(void 0);B5.Consumer;var $f={};function yC(e,t,i){var r=Zp(e),o=e,l=!Nf(e),u=t.attrs,d=u===void 0?iu:u,p=t.componentId,h=p===void 0?function(D,L){var $=typeof D!="string"?"sc":$3(D);$f[$]=($f[$]||0)+1;var V="".concat($,"-").concat(M5(nu+$+$f[$]));return L?"".concat(L,"-").concat(V):V}(t.displayName,t.parentComponentId):p,g=t.displayName,y=g===void 0?function(D){return Nf(D)?"styled.".concat(D):"Styled(".concat(GS(D),")")}(e):g,v=t.displayName&&t.componentId?"".concat($3(t.displayName),"-").concat(t.componentId):t.componentId||h,C=r&&o.attrs?o.attrs.concat(d).filter(Boolean):d,S=t.shouldForwardProp;if(r&&o.shouldForwardProp){var E=o.shouldForwardProp;if(t.shouldForwardProp){var O=t.shouldForwardProp;S=function(D,L){return E(D,L)&&O(D,L)}}else S=E}var M=new xC(i,v,r?o.componentStyle:void 0);function T(D,L){return function($,V,_){var q=$.attrs,Y=$.componentStyle,W=$.defaultProps,te=$.foldedComponentIds,se=$.styledComponentId,ce=$.target,re=ke.useContext(B5),N=Y3(),X=$.shouldForwardProp||N.shouldForwardProp,Q=BS(V,re,W)||Mr,ee=function(we,de,ot){for(var Le,bt=Nt(Nt({},de),{className:void 0,theme:ot}),Fi=0;Fi<we.length;Fi+=1){var Gn=Lr(Le=we[Fi])?Le(bt):Le;for(var an in Gn)bt[an]=an==="className"?ha(bt[an],Gn[an]):an==="style"?Nt(Nt({},bt[an]),Gn[an]):Gn[an]}return de.className&&(bt.className=ha(bt.className,de.className)),bt}(q,V,Q),k=ee.as||ce,F={};for(var ne in ee)ee[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&ee.theme===Q||(ne==="forwardedAs"?F.as=ee.forwardedAs:X&&!X(ne,k)||(F[ne]=ee[ne]));var ie=function(we,de){var ot=Y3(),Le=we.generateAndInjectStyles(de,ot.styleSheet,ot.stylis);return Le}(Y,ee),le=ha(te,se);return ie&&(le+=" "+ie),ee.className&&(le+=" "+ee.className),F[Nf(k)&&!E5.has(k)?"class":"className"]=le,_&&(F.ref=_),R.createElement(k,F)}(j,D,L)}T.displayName=y;var j=ke.forwardRef(T);return j.attrs=C,j.componentStyle=M,j.displayName=y,j.shouldForwardProp=S,j.foldedComponentIds=r?ha(o.foldedComponentIds,o.styledComponentId):"",j.styledComponentId=v,j.target=r?o.target:e,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=r?function(L){for(var $=[],V=1;V<arguments.length;V++)$[V-1]=arguments[V];for(var _=0,q=$;_<q.length;_++)Y0(L,q[_],!0);return L}({},o.defaultProps,D):D}}),Xp(j,function(){return".".concat(j.styledComponentId)}),l&&k5(j,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function Z3(e,t){for(var i=[e[0]],r=0,o=t.length;r<o;r+=1)i.push(t[r],e[r+1]);return i}var X3=function(e){return Object.assign(e,{isCss:!0})};function It(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(Lr(e)||co(e))return X3(ya(Z3(iu,lo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?ya(r):X3(ya(Z3(r,t)))}function Z0(e,t,i){if(i===void 0&&(i=Mr),!t)throw So(1,t);var r=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,i,It.apply(void 0,lo([o],l,!1)))};return r.attrs=function(o){return Z0(e,t,Nt(Nt({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Z0(e,t,Nt(Nt({},i),o))},r}var U5=function(e){return Z0(yC,e)},w=U5;E5.forEach(function(e){w[e]=U5(e)});function We(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var r=q0(It.apply(void 0,lo([e],t,!1))),o=M5(r);return new P5(o,r)}const vC=w.nav`
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
  ${({$isScrolled:e})=>e&&It`
      background: rgba(0, 0, 0, 0.39);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    `}
  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`,wC=w.div`
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
`,bC=w(wt)`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 1001;

  img {
    height: 32px;
    width: auto;
    filter: ${({$overlayOpen:e,$darkMode:t})=>e||t?"brightness(0)":"brightness(0) invert(1)"}; // Білий колір на світлому фоні
    transition: filter 0.3s ease-in-out;

    @media (min-width: 768px) {
      height: 40px;
    }
  }
`,SC=w.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1440px) {
    gap: 40px;
  }
`,_s=w.li`
  position: relative;
`,Is=w(wt)`
  color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  transition: color 0.3s ease-in-out;
  position: relative;

  &:hover {
    color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#555555":"#CCCCCC"}; // Світло-сірий на світлому фоні
  }

  &.active {
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
    }
  }
`,W3=w.div`
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
`,ql=w.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
  }
`,Ni=w.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;
    line-height: 125%;
    color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
    width: max-content;
    transition: all 0.3s ease;

    &:hover {
      color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#555555":"#CCCCCC"}; // Світло-сірий на світлому фоні
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
      color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
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
      filter: ${({$overlayOpen:e})=>e?"brightness(0) saturate(100%)":"none"};

      &:hover {
        transform: scale(1.1);
        filter: ${({$overlayOpen:e})=>e?"brightness(0) saturate(100%)":"brightness(1.2)"};
      }
    }
  }
  @media screen and (min-width: 1440px) {
  }
`,CC=w.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,_5=w.button`
display: none;
 @media screen and (min-width: 768px) {


  background: transparent;
  border: 1px solid
    ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
  color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
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
    background: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
    color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#FFFFFF":"#000000"}; // Чорний колір на світлому фоні
  }

  a {
    color: inherit;
    text-decoration: none;
  }
   }
`;var Yl={},K3;function TC(){if(K3)return Yl;K3=1,Yl.match=l,Yl.parse=u;var e=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,r=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function l(g,y){return u(g).some(function(v){var C=v.inverse,S=v.type==="all"||y.type===v.type;if(S&&C||!(S||C))return!1;var E=v.expressions.every(function(O){var M=O.feature,T=O.modifier,j=O.value,D=y[M];if(!D)return!1;switch(M){case"orientation":case"scan":return D.toLowerCase()===j.toLowerCase();case"width":case"height":case"device-width":case"device-height":j=h(j),D=h(D);break;case"resolution":j=p(j),D=p(D);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":j=d(j),D=d(D);break;case"grid":case"color":case"color-index":case"monochrome":j=parseInt(j,10)||1,D=parseInt(D,10)||0;break}switch(T){case"min":return D>=j;case"max":return D<=j;default:return D===j}});return E&&!C||!E&&C})}function u(g){return g.split(",").map(function(y){y=y.trim();var v=y.match(e),C=v[1],S=v[2],E=v[3]||"",O={};return O.inverse=!!C&&C.toLowerCase()==="not",O.type=S?S.toLowerCase():"all",E=E.match(/\([^\)]+\)/g)||[],O.expressions=E.map(function(M){var T=M.match(t),j=T[1].toLowerCase().match(i);return{modifier:j[1],feature:j[2],value:T[2]}}),O})}function d(g){var y=Number(g),v;return y||(v=g.match(/^(\d+)\s*\/\s*(\d+)$/),y=v[1]/v[2]),y}function p(g){var y=parseFloat(g),v=String(g).match(o)[1];switch(v){case"dpcm":return y/2.54;case"dppx":return y*96;default:return y}}function h(g){var y=parseFloat(g),v=String(g).match(r)[1];switch(v){case"em":return y*16;case"rem":return y*16;case"cm":return y*96/2.54;case"mm":return y*96/2.54/10;case"in":return y*96;case"pt":return y*72;case"pc":return y*72/12;default:return y}}return Yl}var Bf,Q3;function EC(){if(Q3)return Bf;Q3=1;var e=TC().match,t=typeof window<"u"?window.matchMedia:null;function i(o,l,u){var d=this,p;t&&!u&&(p=t.call(window,o)),p?(this.matches=p.matches,this.media=p.media,p.addListener(y)):(this.matches=e(o,l),this.media=o),this.addListener=h,this.removeListener=g,this.dispose=v;function h(C){p&&p.addListener(C)}function g(C){p&&p.removeListener(C)}function y(C){d.matches=C.matches,d.media=C.media}function v(){p&&p.removeListener(y)}}function r(o,l,u){return new i(o,l,u)}return Bf=r,Bf}var jC=EC();const AC=Yc(jC);var MC=/[A-Z]/g,LC=/^ms-/,Uf={};function OC(e){return"-"+e.toLowerCase()}function I5(e){if(Uf.hasOwnProperty(e))return Uf[e];var t=e.replace(MC,OC);return Uf[e]=LC.test(t)?"-"+t:t}function RC(e,t){if(e===t)return!0;if(!e||!t)return!1;const i=Object.keys(e),r=Object.keys(t),o=i.length;if(r.length!==o)return!1;for(let l=0;l<o;l++){const u=i[l];if(e[u]!==t[u]||!Object.prototype.hasOwnProperty.call(t,u))return!1}return!0}var _f={exports:{}},If,J3;function kC(){if(J3)return If;J3=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return If=e,If}var Gf,e4;function DC(){if(e4)return Gf;e4=1;var e=kC();function t(){}function i(){}return i.resetWarningCache=t,Gf=function(){function r(u,d,p,h,g,y){if(y!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function o(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:t};return l.PropTypes=l,l},Gf}var t4;function HC(){return t4||(t4=1,_f.exports=DC()()),_f.exports}var zC=HC();const Me=Yc(zC),Lt=Me.oneOfType([Me.string,Me.number]),G5={all:Me.bool,grid:Me.bool,aural:Me.bool,braille:Me.bool,handheld:Me.bool,print:Me.bool,projection:Me.bool,screen:Me.bool,tty:Me.bool,tv:Me.bool,embossed:Me.bool},VC={orientation:Me.oneOf(["portrait","landscape"]),scan:Me.oneOf(["progressive","interlace"]),aspectRatio:Me.string,deviceAspectRatio:Me.string,height:Lt,deviceHeight:Lt,width:Lt,deviceWidth:Lt,color:Me.bool,colorIndex:Me.bool,monochrome:Me.bool,resolution:Lt,type:Object.keys(G5)},{type:AN,...PC}=VC,NC={minAspectRatio:Me.string,maxAspectRatio:Me.string,minDeviceAspectRatio:Me.string,maxDeviceAspectRatio:Me.string,minHeight:Lt,maxHeight:Lt,minDeviceHeight:Lt,maxDeviceHeight:Lt,minWidth:Lt,maxWidth:Lt,minDeviceWidth:Lt,maxDeviceWidth:Lt,minColor:Me.number,maxColor:Me.number,minColorIndex:Me.number,maxColorIndex:Me.number,minMonochrome:Me.number,maxMonochrome:Me.number,minResolution:Lt,maxResolution:Lt,...PC},$C={...G5,...NC};var BC={all:$C};const UC=e=>`not ${e}`,_C=(e,t)=>{const i=I5(e);return typeof t=="number"&&(t=`${t}px`),t===!0?i:t===!1?UC(i):`(${i}: ${t})`},IC=e=>e.join(" and "),GC=e=>{const t=[];return Object.keys(BC.all).forEach(i=>{const r=e[i];r!=null&&t.push(_C(i,r))}),IC(t)},qC=R.createContext(void 0),YC=e=>e.query||GC(e),n4=e=>e?Object.keys(e).reduce((i,r)=>(i[I5(r)]=e[r],i),{}):void 0,q5=()=>{const e=R.useRef(!1);return R.useEffect(()=>{e.current=!0},[]),e.current},FC=e=>{const t=R.useContext(qC),i=()=>n4(e)||n4(t),[r,o]=R.useState(i);return R.useEffect(()=>{const l=i();RC(r,l)||o(l)},[e,t]),r},ZC=e=>{const t=()=>YC(e),[i,r]=R.useState(t);return R.useEffect(()=>{const o=t();i!==o&&r(o)},[e]),i},XC=(e,t)=>{const i=()=>AC(e,t||{},!!t),[r,o]=R.useState(i),l=q5();return R.useEffect(()=>{if(l){const u=i();return o(u),()=>{u&&u.dispose()}}},[e,t]),r},WC=e=>{const[t,i]=R.useState(e.matches);return R.useEffect(()=>{const r=o=>{i(o.matches)};return e.addListener(r),i(e.matches),()=>{e.removeListener(r)}},[e]),t},De=(e,t,i)=>{const r=FC(t),o=ZC(e);if(!o)throw new Error("Invalid or missing MediaQuery!");const l=XC(o,r),u=WC(l);return q5(),R.useEffect(()=>{},[u]),R.useEffect(()=>()=>{l&&l.dispose()},[]),u},Wp=R.createContext({});function Kp(e){const t=R.useRef(null);return t.current===null&&(t.current=e()),t.current}const Qp=typeof window<"u",Y5=Qp?R.useLayoutEffect:R.useEffect,au=R.createContext(null);function Jp(e,t){e.indexOf(t)===-1&&e.push(t)}function e1(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}const fi=(e,t,i)=>i>t?t:i<e?e:i;let t1=()=>{};const pi={},F5=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Z5(e){return typeof e=="object"&&e!==null}const X5=e=>/^0[^.\s]+$/u.test(e);function n1(e){let t;return()=>(t===void 0&&(t=e()),t)}const gn=e=>e,KC=(e,t)=>i=>t(e(i)),Co=(...e)=>e.reduce(KC),uo=(e,t,i)=>{const r=t-e;return r===0?1:(i-e)/r};class i1{constructor(){this.subscriptions=[]}add(t){return Jp(this.subscriptions,t),()=>e1(this.subscriptions,t)}notify(t,i,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,i,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(t,i,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Bn=e=>e*1e3,Un=e=>e/1e3;function W5(e,t){return t?e*(1e3/t):0}const K5=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e,QC=1e-7,JC=12;function eT(e,t,i,r,o){let l,u,d=0;do u=t+(i-t)/2,l=K5(u,r,o)-e,l>0?i=u:t=u;while(Math.abs(l)>QC&&++d<JC);return u}function To(e,t,i,r){if(e===t&&i===r)return gn;const o=l=>eT(l,0,1,e,i);return l=>l===0||l===1?l:K5(o(l),t,r)}const Q5=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,J5=e=>t=>1-e(1-t),e8=To(.33,1.53,.69,.99),a1=J5(e8),t8=Q5(a1),n8=e=>(e*=2)<1?.5*a1(e):.5*(2-Math.pow(2,-10*(e-1))),r1=e=>1-Math.sin(Math.acos(e)),i8=J5(r1),a8=Q5(r1),tT=To(.42,0,1,1),nT=To(0,0,.58,1),r8=To(.42,0,.58,1),iT=e=>Array.isArray(e)&&typeof e[0]!="number",s8=e=>Array.isArray(e)&&typeof e[0]=="number",aT={linear:gn,easeIn:tT,easeInOut:r8,easeOut:nT,circIn:r1,circInOut:a8,circOut:i8,backIn:a1,backInOut:t8,backOut:e8,anticipate:n8},rT=e=>typeof e=="string",i4=e=>{if(s8(e)){t1(e.length===4);const[t,i,r,o]=e;return To(t,i,r,o)}else if(rT(e))return aT[e];return e},Fl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function sT(e,t){let i=new Set,r=new Set,o=!1,l=!1;const u=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function p(g){u.has(g)&&(h.schedule(g),e()),g(d)}const h={schedule:(g,y=!1,v=!1)=>{const S=v&&o?i:r;return y&&u.add(g),S.has(g)||S.add(g),g},cancel:g=>{r.delete(g),u.delete(g)},process:g=>{if(d=g,o){l=!0;return}o=!0,[i,r]=[r,i],i.forEach(p),i.clear(),o=!1,l&&(l=!1,h.process(g))}};return h}const oT=40;function o8(e,t){let i=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>i=!0,u=Fl.reduce((j,D)=>(j[D]=sT(l),j),{}),{setup:d,read:p,resolveKeyframes:h,preUpdate:g,update:y,preRender:v,render:C,postRender:S}=u,E=()=>{const j=pi.useManualTiming?o.timestamp:performance.now();i=!1,pi.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(j-o.timestamp,oT),1)),o.timestamp=j,o.isProcessing=!0,d.process(o),p.process(o),h.process(o),g.process(o),y.process(o),v.process(o),C.process(o),S.process(o),o.isProcessing=!1,i&&t&&(r=!1,e(E))},O=()=>{i=!0,r=!0,o.isProcessing||e(E)};return{schedule:Fl.reduce((j,D)=>{const L=u[D];return j[D]=($,V=!1,_=!1)=>(i||O(),L.schedule($,V,_)),j},{}),cancel:j=>{for(let D=0;D<Fl.length;D++)u[Fl[D]].cancel(j)},state:o,steps:u}}const{schedule:Ie,cancel:Ii,state:yt,steps:qf}=o8(typeof requestAnimationFrame<"u"?requestAnimationFrame:gn,!0);let yc;function lT(){yc=void 0}const $t={now:()=>(yc===void 0&&$t.set(yt.isProcessing||pi.useManualTiming?yt.timestamp:performance.now()),yc),set:e=>{yc=e,queueMicrotask(lT)}},l8=e=>t=>typeof t=="string"&&t.startsWith(e),s1=l8("--"),cT=l8("var(--"),o1=e=>cT(e)?uT.test(e.split("/*")[0].trim()):!1,uT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Nr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},fo={...Nr,transform:e=>fi(0,1,e)},Zl={...Nr,default:1},Ks=e=>Math.round(e*1e5)/1e5,l1=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function dT(e){return e==null}const fT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,c1=(e,t)=>i=>!!(typeof i=="string"&&fT.test(i)&&i.startsWith(e)||t&&!dT(i)&&Object.prototype.hasOwnProperty.call(i,t)),c8=(e,t,i)=>r=>{if(typeof r!="string")return r;const[o,l,u,d]=r.match(l1);return{[e]:parseFloat(o),[t]:parseFloat(l),[i]:parseFloat(u),alpha:d!==void 0?parseFloat(d):1}},pT=e=>fi(0,255,e),Yf={...Nr,transform:e=>Math.round(pT(e))},ma={test:c1("rgb","red"),parse:c8("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:r=1})=>"rgba("+Yf.transform(e)+", "+Yf.transform(t)+", "+Yf.transform(i)+", "+Ks(fo.transform(r))+")"};function hT(e){let t="",i="",r="",o="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,i+=i,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const X0={test:c1("#"),parse:hT,transform:ma.transform},Eo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ui=Eo("deg"),_n=Eo("%"),he=Eo("px"),mT=Eo("vh"),gT=Eo("vw"),a4={..._n,parse:e=>_n.parse(e)/100,transform:e=>_n.transform(e*100)},gr={test:c1("hsl","hue"),parse:c8("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:r=1})=>"hsla("+Math.round(e)+", "+_n.transform(Ks(t))+", "+_n.transform(Ks(i))+", "+Ks(fo.transform(r))+")"},nt={test:e=>ma.test(e)||X0.test(e)||gr.test(e),parse:e=>ma.test(e)?ma.parse(e):gr.test(e)?gr.parse(e):X0.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ma.transform(e):gr.transform(e),getAnimatableNone:e=>{const t=nt.parse(e);return t.alpha=0,nt.transform(t)}},xT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function yT(e){var t,i;return isNaN(e)&&typeof e=="string"&&(((t=e.match(l1))==null?void 0:t.length)||0)+(((i=e.match(xT))==null?void 0:i.length)||0)>0}const u8="number",d8="color",vT="var",wT="var(",r4="${}",bT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function po(e){const t=e.toString(),i=[],r={color:[],number:[],var:[]},o=[];let l=0;const d=t.replace(bT,p=>(nt.test(p)?(r.color.push(l),o.push(d8),i.push(nt.parse(p))):p.startsWith(wT)?(r.var.push(l),o.push(vT),i.push(p)):(r.number.push(l),o.push(u8),i.push(parseFloat(p))),++l,r4)).split(r4);return{values:i,split:d,indexes:r,types:o}}function f8(e){return po(e).values}function p8(e){const{split:t,types:i}=po(e),r=t.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=t[u],o[u]!==void 0){const d=i[u];d===u8?l+=Ks(o[u]):d===d8?l+=nt.transform(o[u]):l+=o[u]}return l}}const ST=e=>typeof e=="number"?0:nt.test(e)?nt.getAnimatableNone(e):e;function CT(e){const t=f8(e);return p8(e)(t.map(ST))}const Gi={test:yT,parse:f8,createTransformer:p8,getAnimatableNone:CT};function Ff(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function TT({hue:e,saturation:t,lightness:i,alpha:r}){e/=360,t/=100,i/=100;let o=0,l=0,u=0;if(!t)o=l=u=i;else{const d=i<.5?i*(1+t):i+t-i*t,p=2*i-d;o=Ff(p,d,e+1/3),l=Ff(p,d,e),u=Ff(p,d,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Mc(e,t){return i=>i>0?t:e}const Ye=(e,t,i)=>e+(t-e)*i,Zf=(e,t,i)=>{const r=e*e,o=i*(t*t-r)+r;return o<0?0:Math.sqrt(o)},ET=[X0,ma,gr],jT=e=>ET.find(t=>t.test(e));function s4(e){const t=jT(e);if(!t)return!1;let i=t.parse(e);return t===gr&&(i=TT(i)),i}const o4=(e,t)=>{const i=s4(e),r=s4(t);if(!i||!r)return Mc(e,t);const o={...i};return l=>(o.red=Zf(i.red,r.red,l),o.green=Zf(i.green,r.green,l),o.blue=Zf(i.blue,r.blue,l),o.alpha=Ye(i.alpha,r.alpha,l),ma.transform(o))},W0=new Set(["none","hidden"]);function AT(e,t){return W0.has(e)?i=>i<=0?e:t:i=>i>=1?t:e}function MT(e,t){return i=>Ye(e,t,i)}function u1(e){return typeof e=="number"?MT:typeof e=="string"?o1(e)?Mc:nt.test(e)?o4:RT:Array.isArray(e)?h8:typeof e=="object"?nt.test(e)?o4:LT:Mc}function h8(e,t){const i=[...e],r=i.length,o=e.map((l,u)=>u1(l)(l,t[u]));return l=>{for(let u=0;u<r;u++)i[u]=o[u](l);return i}}function LT(e,t){const i={...e,...t},r={};for(const o in i)e[o]!==void 0&&t[o]!==void 0&&(r[o]=u1(e[o])(e[o],t[o]));return o=>{for(const l in r)i[l]=r[l](o);return i}}function OT(e,t){const i=[],r={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const l=t.types[o],u=e.indexes[l][r[l]],d=e.values[u]??0;i[o]=d,r[l]++}return i}const RT=(e,t)=>{const i=Gi.createTransformer(t),r=po(e),o=po(t);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?W0.has(e)&&!o.values.length||W0.has(t)&&!r.values.length?AT(e,t):Co(h8(OT(r,o),o.values),i):Mc(e,t)};function m8(e,t,i){return typeof e=="number"&&typeof t=="number"&&typeof i=="number"?Ye(e,t,i):u1(e)(e,t)}const kT=e=>{const t=({timestamp:i})=>e(i);return{start:(i=!0)=>Ie.update(t,i),stop:()=>Ii(t),now:()=>yt.isProcessing?yt.timestamp:$t.now()}},g8=(e,t,i=10)=>{let r="";const o=Math.max(Math.round(t/i),2);for(let l=0;l<o;l++)r+=Math.round(e(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Lc=2e4;function d1(e){let t=0;const i=50;let r=e.next(t);for(;!r.done&&t<Lc;)t+=i,r=e.next(t);return t>=Lc?1/0:t}function DT(e,t=100,i){const r=i({...e,keyframes:[0,t]}),o=Math.min(d1(r),Lc);return{type:"keyframes",ease:l=>r.next(o*l).value/t,duration:Un(o)}}const HT=5;function x8(e,t,i){const r=Math.max(t-HT,0);return W5(i-e(r),t-r)}const Xe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Xf=.001;function zT({duration:e=Xe.duration,bounce:t=Xe.bounce,velocity:i=Xe.velocity,mass:r=Xe.mass}){let o,l,u=1-t;u=fi(Xe.minDamping,Xe.maxDamping,u),e=fi(Xe.minDuration,Xe.maxDuration,Un(e)),u<1?(o=h=>{const g=h*u,y=g*e,v=g-i,C=K0(h,u),S=Math.exp(-y);return Xf-v/C*S},l=h=>{const y=h*u*e,v=y*i+i,C=Math.pow(u,2)*Math.pow(h,2)*e,S=Math.exp(-y),E=K0(Math.pow(h,2),u);return(-o(h)+Xf>0?-1:1)*((v-C)*S)/E}):(o=h=>{const g=Math.exp(-h*e),y=(h-i)*e+1;return-Xf+g*y},l=h=>{const g=Math.exp(-h*e),y=(i-h)*(e*e);return g*y});const d=5/e,p=PT(o,l,d);if(e=Bn(e),isNaN(p))return{stiffness:Xe.stiffness,damping:Xe.damping,duration:e};{const h=Math.pow(p,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:e}}}const VT=12;function PT(e,t,i){let r=i;for(let o=1;o<VT;o++)r=r-e(r)/t(r);return r}function K0(e,t){return e*Math.sqrt(1-t*t)}const NT=["duration","bounce"],$T=["stiffness","damping","mass"];function l4(e,t){return t.some(i=>e[i]!==void 0)}function BT(e){let t={velocity:Xe.velocity,stiffness:Xe.stiffness,damping:Xe.damping,mass:Xe.mass,isResolvedFromDuration:!1,...e};if(!l4(e,$T)&&l4(e,NT))if(e.visualDuration){const i=e.visualDuration,r=2*Math.PI/(i*1.2),o=r*r,l=2*fi(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:Xe.mass,stiffness:o,damping:l}}else{const i=zT(e);t={...t,...i,mass:Xe.mass},t.isResolvedFromDuration=!0}return t}function Oc(e=Xe.visualDuration,t=Xe.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:o}=i;const l=i.keyframes[0],u=i.keyframes[i.keyframes.length-1],d={done:!1,value:l},{stiffness:p,damping:h,mass:g,duration:y,velocity:v,isResolvedFromDuration:C}=BT({...i,velocity:-Un(i.velocity||0)}),S=v||0,E=h/(2*Math.sqrt(p*g)),O=u-l,M=Un(Math.sqrt(p/g)),T=Math.abs(O)<5;r||(r=T?Xe.restSpeed.granular:Xe.restSpeed.default),o||(o=T?Xe.restDelta.granular:Xe.restDelta.default);let j;if(E<1){const L=K0(M,E);j=$=>{const V=Math.exp(-E*M*$);return u-V*((S+E*M*O)/L*Math.sin(L*$)+O*Math.cos(L*$))}}else if(E===1)j=L=>u-Math.exp(-M*L)*(O+(S+M*O)*L);else{const L=M*Math.sqrt(E*E-1);j=$=>{const V=Math.exp(-E*M*$),_=Math.min(L*$,300);return u-V*((S+E*M*O)*Math.sinh(_)+L*O*Math.cosh(_))/L}}const D={calculatedDuration:C&&y||null,next:L=>{const $=j(L);if(C)d.done=L>=y;else{let V=L===0?S:0;E<1&&(V=L===0?Bn(S):x8(j,L,$));const _=Math.abs(V)<=r,q=Math.abs(u-$)<=o;d.done=_&&q}return d.value=d.done?u:$,d},toString:()=>{const L=Math.min(d1(D),Lc),$=g8(V=>D.next(L*V).value,L,30);return L+"ms "+$},toTransition:()=>{}};return D}Oc.applyToOptions=e=>{const t=DT(e,100,Oc);return e.ease=t.ease,e.duration=Bn(t.duration),e.type="keyframes",e};function Q0({keyframes:e,velocity:t=0,power:i=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:d,max:p,restDelta:h=.5,restSpeed:g}){const y=e[0],v={done:!1,value:y},C=_=>d!==void 0&&_<d||p!==void 0&&_>p,S=_=>d===void 0?p:p===void 0||Math.abs(d-_)<Math.abs(p-_)?d:p;let E=i*t;const O=y+E,M=u===void 0?O:u(O);M!==O&&(E=M-y);const T=_=>-E*Math.exp(-_/r),j=_=>M+T(_),D=_=>{const q=T(_),Y=j(_);v.done=Math.abs(q)<=h,v.value=v.done?M:Y};let L,$;const V=_=>{C(v.value)&&(L=_,$=Oc({keyframes:[v.value,S(v.value)],velocity:x8(j,_,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:g}))};return V(0),{calculatedDuration:null,next:_=>{let q=!1;return!$&&L===void 0&&(q=!0,D(_),V(_)),L!==void 0&&_>=L?$.next(_-L):(!q&&D(_),v)}}}function UT(e,t,i){const r=[],o=i||pi.mix||m8,l=e.length-1;for(let u=0;u<l;u++){let d=o(e[u],e[u+1]);if(t){const p=Array.isArray(t)?t[u]||gn:t;d=Co(p,d)}r.push(d)}return r}function _T(e,t,{clamp:i=!0,ease:r,mixer:o}={}){const l=e.length;if(t1(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const u=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const d=UT(t,r,o),p=d.length,h=g=>{if(u&&g<e[0])return t[0];let y=0;if(p>1)for(;y<e.length-2&&!(g<e[y+1]);y++);const v=uo(e[y],e[y+1],g);return d[y](v)};return i?g=>h(fi(e[0],e[l-1],g)):h}function IT(e,t){const i=e[e.length-1];for(let r=1;r<=t;r++){const o=uo(0,t,r);e.push(Ye(i,1,o))}}function GT(e){const t=[0];return IT(t,e.length-1),t}function qT(e,t){return e.map(i=>i*t)}function YT(e,t){return e.map(()=>t||r8).splice(0,e.length-1)}function Qs({duration:e=300,keyframes:t,times:i,ease:r="easeInOut"}){const o=iT(r)?r.map(i4):i4(r),l={done:!1,value:t[0]},u=qT(i&&i.length===t.length?i:GT(t),e),d=_T(u,t,{ease:Array.isArray(o)?o:YT(t,o)});return{calculatedDuration:e,next:p=>(l.value=d(p),l.done=p>=e,l)}}const FT=e=>e!==null;function f1(e,{repeat:t,repeatType:i="loop"},r,o=1){const l=e.filter(FT),d=o<0||t&&i!=="loop"&&t%2===1?0:l.length-1;return!d||r===void 0?l[d]:r}const ZT={decay:Q0,inertia:Q0,tween:Qs,keyframes:Qs,spring:Oc};function y8(e){typeof e.type=="string"&&(e.type=ZT[e.type])}class p1{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,i){return this.finished.then(t,i)}}const XT=e=>e/100;class h1 extends p1{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,o;const{motionValue:i}=this.options;i&&i.updatedAt!==$t.now()&&this.tick($t.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;y8(t);const{type:i=Qs,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=t;let{keyframes:d}=t;const p=i||Qs;p!==Qs&&typeof d[0]!="number"&&(this.mixKeyframes=Co(XT,m8(d[0],d[1])),d=[0,100]);const h=p({...t,keyframes:d});l==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...d].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=d1(h));const{calculatedDuration:g}=h;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(t){const i=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(t,i=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:d,calculatedDuration:p}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:g,repeat:y,repeatType:v,repeatDelay:C,type:S,onUpdate:E,finalKeyframe:O}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),i?this.currentTime=t:this.updateTime(t);const M=this.currentTime-h*(this.playbackSpeed>=0?1:-1),T=this.playbackSpeed>=0?M<0:M>o;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let j=this.currentTime,D=r;if(y){const _=Math.min(this.currentTime,o)/d;let q=Math.floor(_),Y=_%1;!Y&&_>=1&&(Y=1),Y===1&&q--,q=Math.min(q,y+1),!!(q%2)&&(v==="reverse"?(Y=1-Y,C&&(Y-=C/d)):v==="mirror"&&(D=u)),j=fi(0,1,Y)*d}const L=T?{done:!1,value:g[0]}:D.next(j);l&&(L.value=l(L.value));let{done:$}=L;!T&&p!==null&&($=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const V=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&$);return V&&S!==Q0&&(L.value=f1(g,this.options,O,this.speed)),E&&E(L.value),V&&this.finish(),L}then(t,i){return this.finished.then(t,i)}get duration(){return Un(this.calculatedDuration)}get time(){return Un(this.currentTime)}set time(t){var i;t=Bn(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(i=this.driver)==null||i.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime($t.now());const i=this.playbackSpeed!==t;this.playbackSpeed=t,i&&(this.time=Un(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:t=kT,startTime:i}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),(l=(o=this.options).onPlay)==null||l.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=i??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime($t.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(t=this.options).onComplete)==null||i.call(t)}cancel(){var t,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(t=this.options).onCancel)==null||i.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),t.observe(this)}}function WT(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const ga=e=>e*180/Math.PI,J0=e=>{const t=ga(Math.atan2(e[1],e[0]));return ep(t)},KT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:J0,rotateZ:J0,skewX:e=>ga(Math.atan(e[1])),skewY:e=>ga(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},ep=e=>(e=e%360,e<0&&(e+=360),e),c4=J0,u4=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),d4=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),QT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:u4,scaleY:d4,scale:e=>(u4(e)+d4(e))/2,rotateX:e=>ep(ga(Math.atan2(e[6],e[5]))),rotateY:e=>ep(ga(Math.atan2(-e[2],e[0]))),rotateZ:c4,rotate:c4,skewX:e=>ga(Math.atan(e[4])),skewY:e=>ga(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function tp(e){return e.includes("scale")?1:0}function np(e,t){if(!e||e==="none")return tp(t);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(i)r=QT,o=i;else{const d=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=KT,o=d}if(!o)return tp(t);const l=r[t],u=o[1].split(",").map(eE);return typeof l=="function"?l(u):u[l]}const JT=(e,t)=>{const{transform:i="none"}=getComputedStyle(e);return np(i,t)};function eE(e){return parseFloat(e.trim())}const $r=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Br=new Set($r),f4=e=>e===Nr||e===he,tE=new Set(["x","y","z"]),nE=$r.filter(e=>!tE.has(e));function iE(e){const t=[];return nE.forEach(i=>{const r=e.getValue(i);r!==void 0&&(t.push([i,r.get()]),r.set(i.startsWith("scale")?1:0))}),t}const va={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>np(t,"x"),y:(e,{transform:t})=>np(t,"y")};va.translateX=va.x;va.translateY=va.y;const wa=new Set;let ip=!1,ap=!1,rp=!1;function v8(){if(ap){const e=Array.from(wa).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),i=new Map;t.forEach(r=>{const o=iE(r);o.length&&(i.set(r,o),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const o=i.get(r);o&&o.forEach(([l,u])=>{var d;(d=r.getValue(l))==null||d.set(u)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}ap=!1,ip=!1,wa.forEach(e=>e.complete(rp)),wa.clear()}function w8(){wa.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ap=!0)})}function aE(){rp=!0,w8(),v8(),rp=!1}class m1{constructor(t,i,r,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=i,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(wa.add(this),ip||(ip=!0,Ie.read(w8),Ie.resolveKeyframes(v8))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:i,element:r,motionValue:o}=this;if(t[0]===null){const l=o==null?void 0:o.get(),u=t[t.length-1];if(l!==void 0)t[0]=l;else if(r&&i){const d=r.readValue(i,u);d!=null&&(t[0]=d)}t[0]===void 0&&(t[0]=u),o&&l===void 0&&o.set(t[0])}WT(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),wa.delete(this)}cancel(){this.state==="scheduled"&&(wa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const rE=e=>e.startsWith("--");function sE(e,t,i){rE(t)?e.style.setProperty(t,i):e.style[t]=i}const oE=n1(()=>window.ScrollTimeline!==void 0),lE={};function cE(e,t){const i=n1(e);return()=>lE[t]??i()}const b8=cE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Xs=([e,t,i,r])=>`cubic-bezier(${e}, ${t}, ${i}, ${r})`,p4={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xs([0,.65,.55,1]),circOut:Xs([.55,0,1,.45]),backIn:Xs([.31,.01,.66,-.59]),backOut:Xs([.33,1.53,.69,.99])};function S8(e,t){if(e)return typeof e=="function"?b8()?g8(e,t):"ease-out":s8(e)?Xs(e):Array.isArray(e)?e.map(i=>S8(i,t)||p4.easeOut):p4[e]}function uE(e,t,i,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:d="easeOut",times:p}={},h=void 0){const g={[t]:i};p&&(g.offset=p);const y=S8(d,o);Array.isArray(y)&&(g.easing=y);const v={delay:r,duration:o,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return h&&(v.pseudoElement=h),e.animate(g,v)}function C8(e){return typeof e=="function"&&"applyToOptions"in e}function dE({type:e,...t}){return C8(e)&&b8()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class fE extends p1{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:i,name:r,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:d,onComplete:p}=t;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=t,t1(typeof t.type!="string");const h=dE(t);this.animation=uE(i,r,o,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const g=f1(o,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(g):sE(i,r,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,i;(i=(t=this.animation).finish)==null||i.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,i;this.isPseudoElement||(i=(t=this.animation).commitStyles)==null||i.call(t)}get duration(){var i,r;const t=((r=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:r.call(i).duration)||0;return Un(Number(t))}get time(){return Un(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Bn(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&oE()?(this.animation.timeline=t,gn):i(this)}}const T8={anticipate:n8,backInOut:t8,circInOut:a8};function pE(e){return e in T8}function hE(e){typeof e.ease=="string"&&pE(e.ease)&&(e.ease=T8[e.ease])}const h4=10;class mE extends fE{constructor(t){hE(t),y8(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:i,onUpdate:r,onComplete:o,element:l,...u}=this.options;if(!i)return;if(t!==void 0){i.set(t);return}const d=new h1({...u,autoplay:!1}),p=Bn(this.finishedTime??this.time);i.setWithVelocity(d.sample(p-h4).value,d.sample(p).value,h4),d.stop()}}const m4=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Gi.test(e)||e==="0")&&!e.startsWith("url("));function gE(e){const t=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}function xE(e,t,i,r){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],u=m4(o,t),d=m4(l,t);return!u||!d?!1:gE(e)||(i==="spring"||C8(i))&&r}function sp(e){e.duration=0,e.type}const yE=new Set(["opacity","clipPath","filter","transform"]),vE=n1(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function wE(e){var g;const{motionValue:t,name:i,repeatDelay:r,repeatType:o,damping:l,type:u}=e;if(!(((g=t==null?void 0:t.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:h}=t.owner.getProps();return vE()&&i&&yE.has(i)&&(i!=="transform"||!h)&&!p&&!r&&o!=="mirror"&&l!==0&&u!=="inertia"}const bE=40;class SE extends p1{constructor({autoplay:t=!0,delay:i=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:d,name:p,motionValue:h,element:g,...y}){var S;super(),this.stop=()=>{var E,O;this._animation&&(this._animation.stop(),(E=this.stopTimeline)==null||E.call(this)),(O=this.keyframeResolver)==null||O.cancel()},this.createdAt=$t.now();const v={autoplay:t,delay:i,type:r,repeat:o,repeatDelay:l,repeatType:u,name:p,motionValue:h,element:g,...y},C=(g==null?void 0:g.KeyframeResolver)||m1;this.keyframeResolver=new C(d,(E,O,M)=>this.onKeyframesResolved(E,O,v,!M),p,h,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(t,i,r,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:d,delay:p,isHandoff:h,onUpdate:g}=r;this.resolvedAt=$t.now(),xE(t,l,u,d)||((pi.instantAnimations||!p)&&(g==null||g(f1(t,r,i))),t[0]=t[t.length-1],sp(r),r.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>bE?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...r,keyframes:t},C=!h&&wE(v)?new mE({...v,element:v.motionValue.owner.current}):new h1(v);C.finished.then(()=>this.notifyFinished()).catch(gn),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(t,i){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),aE()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const CE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function TE(e){const t=CE.exec(e);if(!t)return[,];const[,i,r,o]=t;return[`--${i??r}`,o]}function E8(e,t,i=1){const[r,o]=TE(e);if(!r)return;const l=window.getComputedStyle(t).getPropertyValue(r);if(l){const u=l.trim();return F5(u)?parseFloat(u):u}return o1(o)?E8(o,t,i+1):o}function g1(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const j8=new Set(["width","height","top","left","right","bottom",...$r]),EE={test:e=>e==="auto",parse:e=>e},A8=e=>t=>t.test(e),M8=[Nr,he,_n,Ui,gT,mT,EE],g4=e=>M8.find(A8(e));function jE(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||X5(e):!0}const AE=new Set(["brightness","contrast","saturate","opacity"]);function ME(e){const[t,i]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=i.match(l1)||[];if(!r)return e;const o=i.replace(r,"");let l=AE.has(t)?1:0;return r!==i&&(l*=100),t+"("+l+o+")"}const LE=/\b([a-z-]*)\(.*?\)/gu,op={...Gi,getAnimatableNone:e=>{const t=e.match(LE);return t?t.map(ME).join(" "):e}},x4={...Nr,transform:Math.round},OE={rotate:Ui,rotateX:Ui,rotateY:Ui,rotateZ:Ui,scale:Zl,scaleX:Zl,scaleY:Zl,scaleZ:Zl,skew:Ui,skewX:Ui,skewY:Ui,distance:he,translateX:he,translateY:he,translateZ:he,x:he,y:he,z:he,perspective:he,transformPerspective:he,opacity:fo,originX:a4,originY:a4,originZ:he},x1={borderWidth:he,borderTopWidth:he,borderRightWidth:he,borderBottomWidth:he,borderLeftWidth:he,borderRadius:he,radius:he,borderTopLeftRadius:he,borderTopRightRadius:he,borderBottomRightRadius:he,borderBottomLeftRadius:he,width:he,maxWidth:he,height:he,maxHeight:he,top:he,right:he,bottom:he,left:he,padding:he,paddingTop:he,paddingRight:he,paddingBottom:he,paddingLeft:he,margin:he,marginTop:he,marginRight:he,marginBottom:he,marginLeft:he,backgroundPositionX:he,backgroundPositionY:he,...OE,zIndex:x4,fillOpacity:fo,strokeOpacity:fo,numOctaves:x4},RE={...x1,color:nt,backgroundColor:nt,outlineColor:nt,fill:nt,stroke:nt,borderColor:nt,borderTopColor:nt,borderRightColor:nt,borderBottomColor:nt,borderLeftColor:nt,filter:op,WebkitFilter:op},L8=e=>RE[e];function O8(e,t){let i=L8(e);return i!==op&&(i=Gi),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const kE=new Set(["auto","none","0"]);function DE(e,t,i){let r=0,o;for(;r<e.length&&!o;){const l=e[r];typeof l=="string"&&!kE.has(l)&&po(l).values.length&&(o=e[r]),r++}if(o&&i)for(const l of t)e[l]=O8(i,o)}class HE extends m1{constructor(t,i,r,o,l){super(t,i,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:i,name:r}=this;if(!i||!i.current)return;super.readKeyframes();for(let p=0;p<t.length;p++){let h=t[p];if(typeof h=="string"&&(h=h.trim(),o1(h))){const g=E8(h,i.current);g!==void 0&&(t[p]=g),p===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!j8.has(r)||t.length!==2)return;const[o,l]=t,u=g4(o),d=g4(l);if(u!==d)if(f4(u)&&f4(d))for(let p=0;p<t.length;p++){const h=t[p];typeof h=="string"&&(t[p]=parseFloat(h))}else va[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:i}=this,r=[];for(let o=0;o<t.length;o++)(t[o]===null||jE(t[o]))&&r.push(o);r.length&&DE(t,r,i)}measureInitialState(){const{element:t,unresolvedKeyframes:i,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=va[r](t.measureViewportBox(),window.getComputedStyle(t.current)),i[0]=this.measuredOrigin;const o=i[i.length-1];o!==void 0&&t.getValue(r,o).jump(o,!1)}measureEndState(){var d;const{element:t,name:i,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const o=t.getValue(i);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,u=r[l];r[l]=va[i](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([p,h])=>{t.getValue(p).set(h)}),this.resolveNoneKeyframes()}}function zE(e,t,i){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const o=(i==null?void 0:i[e])??r.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const R8=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function k8(e){return Z5(e)&&"offsetHeight"in e}const y4=30,VE=e=>!isNaN(parseFloat(e));class PE{constructor(t,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var l;const o=$t.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=i.owner}setCurrent(t){this.current=t,this.updatedAt=$t.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=VE(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new i1);const r=this.events[t].add(i);return t==="change"?()=>{r(),Ie.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,i,r){this.set(i),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,i=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=$t.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>y4)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,y4);return W5(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,i;(t=this.dependents)==null||t.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Or(e,t){return new PE(e,t)}const{schedule:y1}=o8(queueMicrotask,!1),Cn={x:!1,y:!1};function D8(){return Cn.x||Cn.y}function NE(e){return e==="x"||e==="y"?Cn[e]?null:(Cn[e]=!0,()=>{Cn[e]=!1}):Cn.x||Cn.y?null:(Cn.x=Cn.y=!0,()=>{Cn.x=Cn.y=!1})}function H8(e,t){const i=zE(e),r=new AbortController,o={passive:!0,...t,signal:r.signal};return[i,o,()=>r.abort()]}function v4(e){return!(e.pointerType==="touch"||D8())}function $E(e,t,i={}){const[r,o,l]=H8(e,i),u=d=>{if(!v4(d))return;const{target:p}=d,h=t(p,d);if(typeof h!="function"||!p)return;const g=y=>{v4(y)&&(h(y),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,o)};return r.forEach(d=>{d.addEventListener("pointerenter",u,o)}),l}const z8=(e,t)=>t?e===t?!0:z8(e,t.parentElement):!1,v1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,BE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function UE(e){return BE.has(e.tagName)||e.tabIndex!==-1}const vc=new WeakSet;function w4(e){return t=>{t.key==="Enter"&&e(t)}}function Wf(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const _E=(e,t)=>{const i=e.currentTarget;if(!i)return;const r=w4(()=>{if(vc.has(i))return;Wf(i,"down");const o=w4(()=>{Wf(i,"up")}),l=()=>Wf(i,"cancel");i.addEventListener("keyup",o,t),i.addEventListener("blur",l,t)});i.addEventListener("keydown",r,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",r),t)};function b4(e){return v1(e)&&!D8()}function IE(e,t,i={}){const[r,o,l]=H8(e,i),u=d=>{const p=d.currentTarget;if(!b4(d))return;vc.add(p);const h=t(p,d),g=(C,S)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",v),vc.has(p)&&vc.delete(p),b4(C)&&typeof h=="function"&&h(C,{success:S})},y=C=>{g(C,p===window||p===document||i.useGlobalTarget||z8(p,C.target))},v=C=>{g(C,!1)};window.addEventListener("pointerup",y,o),window.addEventListener("pointercancel",v,o)};return r.forEach(d=>{(i.useGlobalTarget?window:d).addEventListener("pointerdown",u,o),k8(d)&&(d.addEventListener("focus",h=>_E(h,o)),!UE(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),l}function V8(e){return Z5(e)&&"ownerSVGElement"in e}function GE(e){return V8(e)&&e.tagName==="svg"}const jt=e=>!!(e&&e.getVelocity),qE=[...M8,nt,Gi],YE=e=>qE.find(A8(e)),w1=R.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class FE extends R.Component{getSnapshotBeforeUpdate(t){const i=this.props.childRef.current;if(i&&t.isPresent&&!this.props.isPresent){const r=i.offsetParent,o=k8(r)&&r.offsetWidth||0,l=this.props.sizeRef.current;l.height=i.offsetHeight||0,l.width=i.offsetWidth||0,l.top=i.offsetTop,l.left=i.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function ZE({children:e,isPresent:t,anchorX:i,root:r}){const o=R.useId(),l=R.useRef(null),u=R.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=R.useContext(w1);return R.useInsertionEffect(()=>{const{width:p,height:h,top:g,left:y,right:v}=u.current;if(t||!l.current||!p||!h)return;const C=i==="left"?`left: ${y}`:`right: ${v}`;l.current.dataset.motionPopId=o;const S=document.createElement("style");d&&(S.nonce=d);const E=r??document.head;return E.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${C}px !important;
            top: ${g}px !important;
          }
        `),()=>{E.contains(S)&&E.removeChild(S)}},[t]),m.jsx(FE,{isPresent:t,childRef:l,sizeRef:u,children:R.cloneElement(e,{ref:l})})}const XE=({children:e,initial:t,isPresent:i,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:u,anchorX:d,root:p})=>{const h=Kp(WE),g=R.useId();let y=!0,v=R.useMemo(()=>(y=!1,{id:g,initial:t,isPresent:i,custom:o,onExitComplete:C=>{h.set(C,!0);for(const S of h.values())if(!S)return;r&&r()},register:C=>(h.set(C,!1),()=>h.delete(C))}),[i,h,r]);return l&&y&&(v={...v}),R.useMemo(()=>{h.forEach((C,S)=>h.set(S,!1))},[i]),R.useEffect(()=>{!i&&!h.size&&r&&r()},[i]),u==="popLayout"&&(e=m.jsx(ZE,{isPresent:i,anchorX:d,root:p,children:e})),m.jsx(au.Provider,{value:v,children:e})};function WE(){return new Map}function P8(e=!0){const t=R.useContext(au);if(t===null)return[!0,null];const{isPresent:i,onExitComplete:r,register:o}=t,l=R.useId();R.useEffect(()=>{if(e)return o(l)},[e]);const u=R.useCallback(()=>e&&r&&r(l),[l,r,e]);return!i&&r?[!1,u]:[!0]}const Xl=e=>e.key||"";function S4(e){const t=[];return R.Children.forEach(e,i=>{R.isValidElement(i)&&t.push(i)}),t}const N8=({children:e,custom:t,initial:i=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1,anchorX:d="left",root:p})=>{const[h,g]=P8(u),y=R.useMemo(()=>S4(e),[e]),v=u&&!h?[]:y.map(Xl),C=R.useRef(!0),S=R.useRef(y),E=Kp(()=>new Map),[O,M]=R.useState(y),[T,j]=R.useState(y);Y5(()=>{C.current=!1,S.current=y;for(let $=0;$<T.length;$++){const V=Xl(T[$]);v.includes(V)?E.delete(V):E.get(V)!==!0&&E.set(V,!1)}},[T,v.length,v.join("-")]);const D=[];if(y!==O){let $=[...y];for(let V=0;V<T.length;V++){const _=T[V],q=Xl(_);v.includes(q)||($.splice(V,0,_),D.push(_))}return l==="wait"&&D.length&&($=D),j(S4($)),M(y),null}const{forceRender:L}=R.useContext(Wp);return m.jsx(m.Fragment,{children:T.map($=>{const V=Xl($),_=u&&!h?!1:y===T||v.includes(V),q=()=>{if(E.has(V))E.set(V,!0);else return;let Y=!0;E.forEach(W=>{W||(Y=!1)}),Y&&(L==null||L(),j(S.current),u&&(g==null||g()),r&&r())};return m.jsx(XE,{isPresent:_,initial:!C.current||i?void 0:!1,custom:t,presenceAffectsLayout:o,mode:l,root:p,onExitComplete:_?void 0:q,anchorX:d,children:$},V)})})},$8=R.createContext({strict:!1}),C4={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Rr={};for(const e in C4)Rr[e]={isEnabled:t=>C4[e].some(i=>!!t[i])};function KE(e){for(const t in e)Rr[t]={...Rr[t],...e[t]}}const QE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Rc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||QE.has(e)}let B8=e=>!Rc(e);function JE(e){typeof e=="function"&&(B8=t=>t.startsWith("on")?!Rc(t):e(t))}try{JE(require("@emotion/is-prop-valid").default)}catch{}function ej(e,t,i){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(B8(o)||i===!0&&Rc(o)||!t&&!Rc(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}const ru=R.createContext({});function su(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ho(e){return typeof e=="string"||Array.isArray(e)}const b1=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],S1=["initial",...b1];function ou(e){return su(e.animate)||S1.some(t=>ho(e[t]))}function U8(e){return!!(ou(e)||e.variants)}function tj(e,t){if(ou(e)){const{initial:i,animate:r}=e;return{initial:i===!1||ho(i)?i:void 0,animate:ho(r)?r:void 0}}return e.inherit!==!1?t:{}}function nj(e){const{initial:t,animate:i}=tj(e,R.useContext(ru));return R.useMemo(()=>({initial:t,animate:i}),[T4(t),T4(i)])}function T4(e){return Array.isArray(e)?e.join(" "):e}const mo={};function ij(e){for(const t in e)mo[t]=e[t],s1(t)&&(mo[t].isCSSVariable=!0)}function _8(e,{layout:t,layoutId:i}){return Br.has(e)||e.startsWith("origin")||(t||i!==void 0)&&(!!mo[e]||e==="opacity")}const aj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},rj=$r.length;function sj(e,t,i){let r="",o=!0;for(let l=0;l<rj;l++){const u=$r[l],d=e[u];if(d===void 0)continue;let p=!0;if(typeof d=="number"?p=d===(u.startsWith("scale")?1:0):p=parseFloat(d)===0,!p||i){const h=R8(d,x1[u]);if(!p){o=!1;const g=aj[u]||u;r+=`${g}(${h}) `}i&&(t[u]=h)}}return r=r.trim(),i?r=i(t,o?"":r):o&&(r="none"),r}function C1(e,t,i){const{style:r,vars:o,transformOrigin:l}=e;let u=!1,d=!1;for(const p in t){const h=t[p];if(Br.has(p)){u=!0;continue}else if(s1(p)){o[p]=h;continue}else{const g=R8(h,x1[p]);p.startsWith("origin")?(d=!0,l[p]=g):r[p]=g}}if(t.transform||(u||i?r.transform=sj(t,e.transform,i):r.transform&&(r.transform="none")),d){const{originX:p="50%",originY:h="50%",originZ:g=0}=l;r.transformOrigin=`${p} ${h} ${g}`}}const T1=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function I8(e,t,i){for(const r in t)!jt(t[r])&&!_8(r,i)&&(e[r]=t[r])}function oj({transformTemplate:e},t){return R.useMemo(()=>{const i=T1();return C1(i,t,e),Object.assign({},i.vars,i.style)},[t])}function lj(e,t){const i=e.style||{},r={};return I8(r,i,e),Object.assign(r,oj(e,t)),r}function cj(e,t){const i={},r=lj(e,t);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=r,i}const uj={offset:"stroke-dashoffset",array:"stroke-dasharray"},dj={offset:"strokeDashoffset",array:"strokeDasharray"};function fj(e,t,i=1,r=0,o=!0){e.pathLength=1;const l=o?uj:dj;e[l.offset]=he.transform(-r);const u=he.transform(t),d=he.transform(i);e[l.array]=`${u} ${d}`}function G8(e,{attrX:t,attrY:i,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...d},p,h,g){if(C1(e,d,h),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:v}=e;y.transform&&(v.transform=y.transform,delete y.transform),(v.transform||y.transformOrigin)&&(v.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),v.transform&&(v.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete y.transformBox),t!==void 0&&(y.x=t),i!==void 0&&(y.y=i),r!==void 0&&(y.scale=r),o!==void 0&&fj(y,o,l,u,!1)}const q8=()=>({...T1(),attrs:{}}),Y8=e=>typeof e=="string"&&e.toLowerCase()==="svg";function pj(e,t,i,r){const o=R.useMemo(()=>{const l=q8();return G8(l,t,Y8(r),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};I8(l,e.style,e),o.style={...l,...o.style}}return o}const hj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function E1(e){return typeof e!="string"||e.includes("-")?!1:!!(hj.indexOf(e)>-1||/[A-Z]/u.test(e))}function mj(e,t,i,{latestValues:r},o,l=!1){const d=(E1(e)?pj:cj)(t,r,o,e),p=ej(t,typeof e=="string",l),h=e!==R.Fragment?{...p,...d,ref:i}:{},{children:g}=t,y=R.useMemo(()=>jt(g)?g.get():g,[g]);return R.createElement(e,{...h,children:y})}function E4(e){const t=[{},{}];return e==null||e.values.forEach((i,r)=>{t[0][r]=i.get(),t[1][r]=i.getVelocity()}),t}function j1(e,t,i,r){if(typeof t=="function"){const[o,l]=E4(r);t=t(i!==void 0?i:e.custom,o,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,l]=E4(r);t=t(i!==void 0?i:e.custom,o,l)}return t}function wc(e){return jt(e)?e.get():e}function gj({scrapeMotionValuesFromProps:e,createRenderState:t},i,r,o){return{latestValues:xj(i,r,o,e),renderState:t()}}function xj(e,t,i,r){const o={},l=r(e,{});for(const v in l)o[v]=wc(l[v]);let{initial:u,animate:d}=e;const p=ou(e),h=U8(e);t&&h&&!p&&e.inherit!==!1&&(u===void 0&&(u=t.initial),d===void 0&&(d=t.animate));let g=i?i.initial===!1:!1;g=g||u===!1;const y=g?d:u;if(y&&typeof y!="boolean"&&!su(y)){const v=Array.isArray(y)?y:[y];for(let C=0;C<v.length;C++){const S=j1(e,v[C]);if(S){const{transitionEnd:E,transition:O,...M}=S;for(const T in M){let j=M[T];if(Array.isArray(j)){const D=g?j.length-1:0;j=j[D]}j!==null&&(o[T]=j)}for(const T in E)o[T]=E[T]}}}return o}const F8=e=>(t,i)=>{const r=R.useContext(ru),o=R.useContext(au),l=()=>gj(e,t,r,o);return i?l():Kp(l)};function A1(e,t,i){var l;const{style:r}=e,o={};for(const u in r)(jt(r[u])||t.style&&jt(t.style[u])||_8(u,e)||((l=i==null?void 0:i.getValue(u))==null?void 0:l.liveStyle)!==void 0)&&(o[u]=r[u]);return o}const yj=F8({scrapeMotionValuesFromProps:A1,createRenderState:T1});function Z8(e,t,i){const r=A1(e,t,i);for(const o in e)if(jt(e[o])||jt(t[o])){const l=$r.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=e[o]}return r}const vj=F8({scrapeMotionValuesFromProps:Z8,createRenderState:q8}),wj=Symbol.for("motionComponentSymbol");function xr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function bj(e,t,i){return R.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),i&&(typeof i=="function"?i(r):xr(i)&&(i.current=r))},[t])}const M1=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Sj="framerAppearId",X8="data-"+M1(Sj),W8=R.createContext({});function Cj(e,t,i,r,o){var E,O;const{visualElement:l}=R.useContext(ru),u=R.useContext($8),d=R.useContext(au),p=R.useContext(w1).reducedMotion,h=R.useRef(null);r=r||u.renderer,!h.current&&r&&(h.current=r(e,{visualState:t,parent:l,props:i,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p}));const g=h.current,y=R.useContext(W8);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&Tj(h.current,i,o,y);const v=R.useRef(!1);R.useInsertionEffect(()=>{g&&v.current&&g.update(i,d)});const C=i[X8],S=R.useRef(!!C&&!((E=window.MotionHandoffIsComplete)!=null&&E.call(window,C))&&((O=window.MotionHasOptimisedAnimation)==null?void 0:O.call(window,C)));return Y5(()=>{g&&(v.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),S.current&&g.animationState&&g.animationState.animateChanges())}),R.useEffect(()=>{g&&(!S.current&&g.animationState&&g.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var M;(M=window.MotionHandoffMarkAsComplete)==null||M.call(window,C)}),S.current=!1),g.enteringChildren=void 0)}),g}function Tj(e,t,i,r){const{layoutId:o,layout:l,drag:u,dragConstraints:d,layoutScroll:p,layoutRoot:h,layoutCrossfade:g}=t;e.projection=new i(e.latestValues,t["data-framer-portal-id"]?void 0:K8(e.parent)),e.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||d&&xr(d),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:g,layoutScroll:p,layoutRoot:h})}function K8(e){if(e)return e.options.allowProjection!==!1?e.projection:K8(e.parent)}function Kf(e,{forwardMotionProps:t=!1}={},i,r){i&&KE(i);const o=E1(e)?vj:yj;function l(d,p){let h;const g={...R.useContext(w1),...d,layoutId:Ej(d)},{isStatic:y}=g,v=nj(d),C=o(d,y);if(!y&&Qp){jj();const S=Aj(g);h=S.MeasureLayout,v.visualElement=Cj(e,C,g,r,S.ProjectionNode)}return m.jsxs(ru.Provider,{value:v,children:[h&&v.visualElement?m.jsx(h,{visualElement:v.visualElement,...g}):null,mj(e,d,bj(C,v.visualElement,p),C,y,t)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=R.forwardRef(l);return u[wj]=e,u}function Ej({layoutId:e}){const t=R.useContext(Wp).id;return t&&e!==void 0?t+"-"+e:e}function jj(e,t){R.useContext($8).strict}function Aj(e){const{drag:t,layout:i}=Rr;if(!t&&!i)return{};const r={...t,...i};return{MeasureLayout:t!=null&&t.isEnabled(e)||i!=null&&i.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Mj(e,t){if(typeof Proxy>"u")return Kf;const i=new Map,r=(l,u)=>Kf(l,u,e,t),o=(l,u)=>r(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?r:(i.has(u)||i.set(u,Kf(u,void 0,e,t)),i.get(u))})}function Q8({top:e,left:t,right:i,bottom:r}){return{x:{min:t,max:i},y:{min:e,max:r}}}function Lj({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Oj(e,t){if(!t)return e;const i=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:r.y,right:r.x}}function Qf(e){return e===void 0||e===1}function lp({scale:e,scaleX:t,scaleY:i}){return!Qf(e)||!Qf(t)||!Qf(i)}function pa(e){return lp(e)||J8(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function J8(e){return j4(e.x)||j4(e.y)}function j4(e){return e&&e!=="0%"}function kc(e,t,i){const r=e-i,o=t*r;return i+o}function A4(e,t,i,r,o){return o!==void 0&&(e=kc(e,o,r)),kc(e,i,r)+t}function cp(e,t=0,i=1,r,o){e.min=A4(e.min,t,i,r,o),e.max=A4(e.max,t,i,r,o)}function ey(e,{x:t,y:i}){cp(e.x,t.translate,t.scale,t.originPoint),cp(e.y,i.translate,i.scale,i.originPoint)}const M4=.999999999999,L4=1.0000000000001;function Rj(e,t,i,r=!1){const o=i.length;if(!o)return;t.x=t.y=1;let l,u;for(let d=0;d<o;d++){l=i[d],u=l.projectionDelta;const{visualElement:p}=l.options;p&&p.props.style&&p.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&vr(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,ey(e,u)),r&&pa(l.latestValues)&&vr(e,l.latestValues))}t.x<L4&&t.x>M4&&(t.x=1),t.y<L4&&t.y>M4&&(t.y=1)}function yr(e,t){e.min=e.min+t,e.max=e.max+t}function O4(e,t,i,r,o=.5){const l=Ye(e.min,e.max,o);cp(e,t,i,l,r)}function vr(e,t){O4(e.x,t.x,t.scaleX,t.scale,t.originX),O4(e.y,t.y,t.scaleY,t.scale,t.originY)}function ty(e,t){return Q8(Oj(e.getBoundingClientRect(),t))}function kj(e,t,i){const r=ty(e,i),{scroll:o}=t;return o&&(yr(r.x,o.offset.x),yr(r.y,o.offset.y)),r}const R4=()=>({translate:0,scale:1,origin:0,originPoint:0}),wr=()=>({x:R4(),y:R4()}),k4=()=>({min:0,max:0}),Je=()=>({x:k4(),y:k4()}),up={current:null},ny={current:!1};function Dj(){if(ny.current=!0,!!Qp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>up.current=e.matches;e.addEventListener("change",t),t()}else up.current=!1}const Hj=new WeakMap;function zj(e,t,i){for(const r in t){const o=t[r],l=i[r];if(jt(o))e.addValue(r,o);else if(jt(l))e.addValue(r,Or(o,{owner:e}));else if(l!==o)if(e.hasValue(r)){const u=e.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=e.getStaticValue(r);e.addValue(r,Or(u!==void 0?u:o,{owner:e}))}}for(const r in i)t[r]===void 0&&e.removeValue(r);return t}const D4=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Vj{scrapeMotionValuesFromProps(t,i,r){return{}}constructor({parent:t,props:i,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=m1,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=$t.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,Ie.render(this.render,!1,!0))};const{latestValues:p,renderState:h}=u;this.latestValues=p,this.baseTarget={...p},this.initialValues=i.initial?{...p}:{},this.renderState=h,this.parent=t,this.props=i,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=ou(i),this.isVariantNode=U8(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...y}=this.scrapeMotionValuesFromProps(i,{},this);for(const v in y){const C=y[v];p[v]!==void 0&&jt(C)&&C.set(p[v])}}mount(t){var i;this.current=t,Hj.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),ny.current||Dj(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:up.current,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Ii(this.notifyUpdate),Ii(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,i){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Br.has(t);r&&this.onBindTransform&&this.onBindTransform();const o=i.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Ie.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,t,i)),this.valueSubscriptions.set(t,()=>{o(),l&&l(),i.owner&&i.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Rr){const i=Rr[t];if(!i)continue;const{isEnabled:r,Feature:o}=i;if(!this.features[t]&&o&&r(this.props)&&(this.features[t]=new o(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Je()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let r=0;r<D4.length;r++){const o=D4[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=t[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=zj(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){const r=this.values.get(t);i!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,i),this.values.set(t,i),this.latestValues[t]=i.get())}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&i!==void 0&&(r=Or(i===null?void 0:i,{owner:this}),this.addValue(t,r)),r}readValue(t,i){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(F5(r)||X5(r))?r=parseFloat(r):!YE(r)&&Gi.test(i)&&(r=O8(t,i)),this.setBaseTarget(t,jt(r)?r.get():r)),jt(r)?r.get():r}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){var l;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const u=j1(this.props,i,(l=this.presenceContext)==null?void 0:l.custom);u&&(r=u[t])}if(i&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!jt(o)?o:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new i1),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}scheduleRenderMicrotask(){y1.render(this.render)}}class iy extends Vj{constructor(){super(...arguments),this.KeyframeResolver=HE}sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){return t.style?t.style[i]:void 0}removeValueFromRenderState(t,{vars:i,style:r}){delete i[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;jt(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function ay(e,{style:t,vars:i},r,o){const l=e.style;let u;for(u in t)l[u]=t[u];o==null||o.applyProjectionStyles(l,r);for(u in i)l.setProperty(u,i[u])}function Pj(e){return window.getComputedStyle(e)}class Nj extends iy{constructor(){super(...arguments),this.type="html",this.renderInstance=ay}readValueFromInstance(t,i){var r;if(Br.has(i))return(r=this.projection)!=null&&r.isProjecting?tp(i):JT(t,i);{const o=Pj(t),l=(s1(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:i}){return ty(t,i)}build(t,i,r){C1(t,i,r.transformTemplate)}scrapeMotionValuesFromProps(t,i,r){return A1(t,i,r)}}const ry=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function $j(e,t,i,r){ay(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(ry.has(o)?o:M1(o),t.attrs[o])}class Bj extends iy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Je}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(Br.has(i)){const r=L8(i);return r&&r.default||0}return i=ry.has(i)?i:M1(i),t.getAttribute(i)}scrapeMotionValuesFromProps(t,i,r){return Z8(t,i,r)}build(t,i,r){G8(t,i,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,i,r,o){$j(t,i,r,o)}mount(t){this.isSVGTag=Y8(t.tagName),super.mount(t)}}const Uj=(e,t)=>E1(e)?new Bj(t):new Nj(t,{allowProjection:e!==R.Fragment});function Sr(e,t,i){const r=e.getProps();return j1(r,t,i!==void 0?i:r.custom,e)}const dp=e=>Array.isArray(e);function _j(e,t,i){e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,Or(i))}function Ij(e){return dp(e)?e[e.length-1]||0:e}function Gj(e,t){const i=Sr(e,t);let{transitionEnd:r={},transition:o={},...l}=i||{};l={...l,...r};for(const u in l){const d=Ij(l[u]);_j(e,u,d)}}function qj(e){return!!(jt(e)&&e.add)}function fp(e,t){const i=e.getValue("willChange");if(qj(i))return i.add(t);if(!i&&pi.WillChange){const r=new pi.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function sy(e){return e.props[X8]}const Yj=e=>e!==null;function Fj(e,{repeat:t,repeatType:i="loop"},r){const o=e.filter(Yj),l=t&&i!=="loop"&&t%2===1?0:o.length-1;return o[l]}const Zj={type:"spring",stiffness:500,damping:25,restSpeed:10},Xj=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Wj={type:"keyframes",duration:.8},Kj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Qj=(e,{keyframes:t})=>t.length>2?Wj:Br.has(e)?e.startsWith("scale")?Xj(t[1]):Zj:Kj;function Jj({when:e,delay:t,delayChildren:i,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:d,from:p,elapsed:h,...g}){return!!Object.keys(g).length}const L1=(e,t,i,r={},o,l)=>u=>{const d=g1(r,e)||{},p=d.delay||r.delay||0;let{elapsed:h=0}=r;h=h-Bn(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...d,delay:-h,onUpdate:v=>{t.set(v),d.onUpdate&&d.onUpdate(v)},onComplete:()=>{u(),d.onComplete&&d.onComplete()},name:e,motionValue:t,element:l?void 0:o};Jj(d)||Object.assign(g,Qj(e,g)),g.duration&&(g.duration=Bn(g.duration)),g.repeatDelay&&(g.repeatDelay=Bn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(sp(g),g.delay===0&&(y=!0)),(pi.instantAnimations||pi.skipAnimations)&&(y=!0,sp(g),g.delay=0),g.allowFlatten=!d.type&&!d.ease,y&&!l&&t.get()!==void 0){const v=Fj(g.keyframes,d);if(v!==void 0){Ie.update(()=>{g.onUpdate(v),g.onComplete()});return}}return d.isSync?new h1(g):new SE(g)};function eA({protectedKeys:e,needsAnimating:t},i){const r=e.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,r}function oy(e,t,{delay:i=0,transitionOverride:r,type:o}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:u,...d}=t;r&&(l=r);const p=[],h=o&&e.animationState&&e.animationState.getState()[o];for(const g in d){const y=e.getValue(g,e.latestValues[g]??null),v=d[g];if(v===void 0||h&&eA(h,g))continue;const C={delay:i,...g1(l||{},g)},S=y.get();if(S!==void 0&&!y.isAnimating&&!Array.isArray(v)&&v===S&&!C.velocity)continue;let E=!1;if(window.MotionHandoffAnimation){const M=sy(e);if(M){const T=window.MotionHandoffAnimation(M,g,Ie);T!==null&&(C.startTime=T,E=!0)}}fp(e,g),y.start(L1(g,y,v,e.shouldReduceMotion&&j8.has(g)?{type:!1}:C,e,E));const O=y.animation;O&&p.push(O)}return u&&Promise.all(p).then(()=>{Ie.update(()=>{u&&Gj(e,u)})}),p}function ly(e,t,i,r=0,o=1){const l=Array.from(e).sort((h,g)=>h.sortNodePosition(g)).indexOf(t),u=e.size,d=(u-1)*r;return typeof i=="function"?i(l,u):o===1?l*r:d-l*r}function pp(e,t,i={}){var p;const r=Sr(e,t,i.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=r||{};i.transitionOverride&&(o=i.transitionOverride);const l=r?()=>Promise.all(oy(e,r,i)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(h=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:v}=o;return tA(e,t,h,g,y,v,i)}:()=>Promise.resolve(),{when:d}=o;if(d){const[h,g]=d==="beforeChildren"?[l,u]:[u,l];return h().then(()=>g())}else return Promise.all([l(),u(i.delay)])}function tA(e,t,i=0,r=0,o=0,l=1,u){const d=[];for(const p of e.variantChildren)p.notify("AnimationStart",t),d.push(pp(p,t,{...u,delay:i+(typeof r=="function"?0:r)+ly(e.variantChildren,p,r,o,l)}).then(()=>p.notify("AnimationComplete",t)));return Promise.all(d)}function nA(e,t,i={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(l=>pp(e,l,i));r=Promise.all(o)}else if(typeof t=="string")r=pp(e,t,i);else{const o=typeof t=="function"?Sr(e,t,i.custom):t;r=Promise.all(oy(e,o,i))}return r.then(()=>{e.notify("AnimationComplete",t)})}function cy(e,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==e.length)return!1;for(let r=0;r<i;r++)if(t[r]!==e[r])return!1;return!0}const iA=S1.length;function uy(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?uy(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const t={};for(let i=0;i<iA;i++){const r=S1[i],o=e.props[r];(ho(o)||o===!1)&&(t[r]=o)}return t}const aA=[...b1].reverse(),rA=b1.length;function sA(e){return t=>Promise.all(t.map(({animation:i,options:r})=>nA(e,i,r)))}function oA(e){let t=sA(e),i=H4(),r=!0;const o=p=>(h,g)=>{var v;const y=Sr(e,g,p==="exit"?(v=e.presenceContext)==null?void 0:v.custom:void 0);if(y){const{transition:C,transitionEnd:S,...E}=y;h={...h,...E,...S}}return h};function l(p){t=p(e)}function u(p){const{props:h}=e,g=uy(e.parent)||{},y=[],v=new Set;let C={},S=1/0;for(let O=0;O<rA;O++){const M=aA[O],T=i[M],j=h[M]!==void 0?h[M]:g[M],D=ho(j),L=M===p?T.isActive:null;L===!1&&(S=O);let $=j===g[M]&&j!==h[M]&&D;if($&&r&&e.manuallyAnimateOnMount&&($=!1),T.protectedKeys={...C},!T.isActive&&L===null||!j&&!T.prevProp||su(j)||typeof j=="boolean")continue;const V=lA(T.prevProp,j);let _=V||M===p&&T.isActive&&!$&&D||O>S&&D,q=!1;const Y=Array.isArray(j)?j:[j];let W=Y.reduce(o(M),{});L===!1&&(W={});const{prevResolvedValues:te={}}=T,se={...te,...W},ce=X=>{_=!0,v.has(X)&&(q=!0,v.delete(X)),T.needsAnimating[X]=!0;const Q=e.getValue(X);Q&&(Q.liveStyle=!1)};for(const X in se){const Q=W[X],ee=te[X];if(C.hasOwnProperty(X))continue;let k=!1;dp(Q)&&dp(ee)?k=!cy(Q,ee):k=Q!==ee,k?Q!=null?ce(X):v.add(X):Q!==void 0&&v.has(X)?ce(X):T.protectedKeys[X]=!0}T.prevProp=j,T.prevResolvedValues=W,T.isActive&&(C={...C,...W}),r&&e.blockInitialAnimation&&(_=!1);const re=$&&V;_&&(!re||q)&&y.push(...Y.map(X=>{const Q={type:M};if(typeof X=="string"&&r&&!re&&e.manuallyAnimateOnMount&&e.parent){const{parent:ee}=e,k=Sr(ee,X);if(ee.enteringChildren&&k){const{delayChildren:F}=k.transition||{};Q.delay=ly(ee.enteringChildren,e,F)}}return{animation:X,options:Q}}))}if(v.size){const O={};if(typeof h.initial!="boolean"){const M=Sr(e,Array.isArray(h.initial)?h.initial[0]:h.initial);M&&M.transition&&(O.transition=M.transition)}v.forEach(M=>{const T=e.getBaseTarget(M),j=e.getValue(M);j&&(j.liveStyle=!0),O[M]=T??null}),y.push({animation:O})}let E=!!y.length;return r&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(E=!1),r=!1,E?t(y):Promise.resolve()}function d(p,h){var y;if(i[p].isActive===h)return Promise.resolve();(y=e.variantChildren)==null||y.forEach(v=>{var C;return(C=v.animationState)==null?void 0:C.setActive(p,h)}),i[p].isActive=h;const g=u(p);for(const v in i)i[v].protectedKeys={};return g}return{animateChanges:u,setActive:d,setAnimateFunction:l,getState:()=>i,reset:()=>{i=H4(),r=!0}}}function lA(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!cy(t,e):!1}function fa(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function H4(){return{animate:fa(!0),whileInView:fa(),whileHover:fa(),whileTap:fa(),whileDrag:fa(),whileFocus:fa(),exit:fa()}}class Yi{constructor(t){this.isMounted=!1,this.node=t}update(){}}class cA extends Yi{constructor(t){super(t),t.animationState||(t.animationState=oA(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();su(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let uA=0;class dA extends Yi{constructor(){super(...arguments),this.id=uA++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const o=this.node.animationState.setActive("exit",!t);i&&!t&&o.then(()=>{i(this.id)})}mount(){const{register:t,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const fA={animation:{Feature:cA},exit:{Feature:dA}};function go(e,t,i,r={passive:!0}){return e.addEventListener(t,i,r),()=>e.removeEventListener(t,i)}function jo(e){return{point:{x:e.pageX,y:e.pageY}}}const pA=e=>t=>v1(t)&&e(t,jo(t));function Js(e,t,i,r){return go(e,t,pA(i),r)}const dy=1e-4,hA=1-dy,mA=1+dy,fy=.01,gA=0-fy,xA=0+fy;function Ot(e){return e.max-e.min}function yA(e,t,i){return Math.abs(e-t)<=i}function z4(e,t,i,r=.5){e.origin=r,e.originPoint=Ye(t.min,t.max,e.origin),e.scale=Ot(i)/Ot(t),e.translate=Ye(i.min,i.max,e.origin)-e.originPoint,(e.scale>=hA&&e.scale<=mA||isNaN(e.scale))&&(e.scale=1),(e.translate>=gA&&e.translate<=xA||isNaN(e.translate))&&(e.translate=0)}function eo(e,t,i,r){z4(e.x,t.x,i.x,r?r.originX:void 0),z4(e.y,t.y,i.y,r?r.originY:void 0)}function V4(e,t,i){e.min=i.min+t.min,e.max=e.min+Ot(t)}function vA(e,t,i){V4(e.x,t.x,i.x),V4(e.y,t.y,i.y)}function P4(e,t,i){e.min=t.min-i.min,e.max=e.min+Ot(t)}function to(e,t,i){P4(e.x,t.x,i.x),P4(e.y,t.y,i.y)}function mn(e){return[e("x"),e("y")]}const py=({current:e})=>e?e.ownerDocument.defaultView:null,N4=(e,t)=>Math.abs(e-t);function wA(e,t){const i=N4(e.x,t.x),r=N4(e.y,t.y);return Math.sqrt(i**2+r**2)}class hy{constructor(t,i,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=e0(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,S=wA(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!S)return;const{point:E}=v,{timestamp:O}=yt;this.history.push({...E,timestamp:O});const{onStart:M,onMove:T}=this.handlers;C||(M&&M(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),T&&T(this.lastMoveEvent,v)},this.handlePointerMove=(v,C)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Jf(C,this.transformPagePoint),Ie.update(this.updatePoint,!0)},this.handlePointerUp=(v,C)=>{this.end();const{onEnd:S,onSessionEnd:E,resumeAnimation:O}=this.handlers;if(this.dragSnapToOrigin&&O&&O(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=e0(v.type==="pointercancel"?this.lastMoveEventInfo:Jf(C,this.transformPagePoint),this.history);this.startEvent&&S&&S(v,M),E&&E(v,M)},!v1(t))return;this.dragSnapToOrigin=l,this.handlers=i,this.transformPagePoint=r,this.distanceThreshold=u,this.contextWindow=o||window;const d=jo(t),p=Jf(d,this.transformPagePoint),{point:h}=p,{timestamp:g}=yt;this.history=[{...h,timestamp:g}];const{onSessionStart:y}=i;y&&y(t,e0(p,this.history)),this.removeListeners=Co(Js(this.contextWindow,"pointermove",this.handlePointerMove),Js(this.contextWindow,"pointerup",this.handlePointerUp),Js(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ii(this.updatePoint)}}function Jf(e,t){return t?{point:t(e.point)}:e}function $4(e,t){return{x:e.x-t.x,y:e.y-t.y}}function e0({point:e},t){return{point:e,delta:$4(e,my(t)),offset:$4(e,bA(t)),velocity:SA(t,.1)}}function bA(e){return e[0]}function my(e){return e[e.length-1]}function SA(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,r=null;const o=my(e);for(;i>=0&&(r=e[i],!(o.timestamp-r.timestamp>Bn(t)));)i--;if(!r)return{x:0,y:0};const l=Un(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function CA(e,{min:t,max:i},r){return t!==void 0&&e<t?e=r?Ye(t,e,r.min):Math.max(e,t):i!==void 0&&e>i&&(e=r?Ye(i,e,r.max):Math.min(e,i)),e}function B4(e,t,i){return{min:t!==void 0?e.min+t:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function TA(e,{top:t,left:i,bottom:r,right:o}){return{x:B4(e.x,i,o),y:B4(e.y,t,r)}}function U4(e,t){let i=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,r]=[r,i]),{min:i,max:r}}function EA(e,t){return{x:U4(e.x,t.x),y:U4(e.y,t.y)}}function jA(e,t){let i=.5;const r=Ot(e),o=Ot(t);return o>r?i=uo(t.min,t.max-r,e.min):r>o&&(i=uo(e.min,e.max-o,t.min)),fi(0,1,i)}function AA(e,t){const i={};return t.min!==void 0&&(i.min=t.min-e.min),t.max!==void 0&&(i.max=t.max-e.min),i}const hp=.35;function MA(e=hp){return e===!1?e=0:e===!0&&(e=hp),{x:_4(e,"left","right"),y:_4(e,"top","bottom")}}function _4(e,t,i){return{min:I4(e,t),max:I4(e,i)}}function I4(e,t){return typeof e=="number"?e:e[t]||0}const LA=new WeakMap;class OA{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Je(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:i=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(jo(y).point)},u=(y,v)=>{const{drag:C,dragPropagation:S,onDragStart:E}=this.getProps();if(C&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=NE(C),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),mn(M=>{let T=this.getAxisMotionValue(M).get()||0;if(_n.test(T)){const{projection:j}=this.visualElement;if(j&&j.layout){const D=j.layout.layoutBox[M];D&&(T=Ot(D)*(parseFloat(T)/100))}}this.originPoint[M]=T}),E&&Ie.postRender(()=>E(y,v)),fp(this.visualElement,"transform");const{animationState:O}=this.visualElement;O&&O.setActive("whileDrag",!0)},d=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v;const{dragPropagation:C,dragDirectionLock:S,onDirectionLock:E,onDrag:O}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:M}=v;if(S&&this.currentDirection===null){this.currentDirection=RA(M),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",v.point,M),this.updateAxis("y",v.point,M),this.visualElement.render(),O&&O(y,v)},p=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v,this.stop(y,v),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>mn(y=>{var v;return this.getAnimationState(y)==="paused"&&((v=this.getAxisMotionValue(y).animation)==null?void 0:v.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new hy(t,{onSessionStart:l,onStart:u,onMove:d,onSessionEnd:p,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:r,contextWindow:py(this.visualElement)})}stop(t,i){const r=t||this.latestPointerEvent,o=i||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:d}=this.getProps();d&&Ie.postRender(()=>d(r,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(t,i,r){const{drag:o}=this.getProps();if(!r||!Wl(t,o,this.currentDirection))return;const l=this.getAxisMotionValue(t);let u=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(u=CA(u,this.constraints[t],this.elastic[t])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:t,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;t&&xr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=TA(r.layoutBox,t):this.constraints=!1,this.elastic=MA(i),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&mn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=AA(r.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!xr(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=kj(r,o.root,this.visualElement.getTransformPagePoint());let u=EA(o.layout.layoutBox,l);if(i){const d=i(Lj(u));this.hasMutatedConstraints=!!d,d&&(u=Q8(d))}return u}startAnimation(t){const{drag:i,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:d}=this.getProps(),p=this.constraints||{},h=mn(g=>{if(!Wl(g,i,this.currentDirection))return;let y=p&&p[g]||{};u&&(y={min:0,max:0});const v=o?200:1e6,C=o?40:1e7,S={type:"inertia",velocity:r?t[g]:0,bounceStiffness:v,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...l,...y};return this.startAxisValueAnimation(g,S)});return Promise.all(h).then(d)}startAxisValueAnimation(t,i){const r=this.getAxisMotionValue(t);return fp(this.visualElement,t),r.start(L1(t,r,0,i,this.visualElement,!1))}stopAnimation(){mn(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){mn(t=>{var i;return(i=this.getAxisMotionValue(t).animation)==null?void 0:i.pause()})}getAnimationState(t){var i;return(i=this.getAxisMotionValue(t).animation)==null?void 0:i.state}getAxisMotionValue(t){const i=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),o=r[i];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){mn(i=>{const{drag:r}=this.getProps();if(!Wl(i,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(i);if(o&&o.layout){const{min:u,max:d}=o.layout.layoutBox[i];l.set(t[i]-Ye(u,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:r}=this.visualElement;if(!xr(i)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};mn(u=>{const d=this.getAxisMotionValue(u);if(d&&this.constraints!==!1){const p=d.get();o[u]=jA({min:p,max:p},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),mn(u=>{if(!Wl(u,t,null))return;const d=this.getAxisMotionValue(u),{min:p,max:h}=this.constraints[u];d.set(Ye(p,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;LA.set(this.visualElement,this);const t=this.visualElement.current,i=Js(t,"pointerdown",p=>{const{drag:h,dragListener:g=!0}=this.getProps();h&&g&&this.start(p)}),r=()=>{const{dragConstraints:p}=this.getProps();xr(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ie.read(r);const u=go(window,"resize",()=>this.scalePositionWithinConstraints()),d=o.addEventListener("didUpdate",({delta:p,hasLayoutChanged:h})=>{this.isDragging&&h&&(mn(g=>{const y=this.getAxisMotionValue(g);y&&(this.originPoint[g]+=p[g].translate,y.set(y.get()+p[g].translate))}),this.visualElement.render())});return()=>{u(),i(),l(),d&&d()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=hp,dragMomentum:d=!0}=t;return{...t,drag:i,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:d}}}function Wl(e,t,i){return(t===!0||t===e)&&(i===null||i===e)}function RA(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}class kA extends Yi{constructor(t){super(t),this.removeGroupControls=gn,this.removeListeners=gn,this.controls=new OA(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||gn}unmount(){this.removeGroupControls(),this.removeListeners()}}const G4=e=>(t,i)=>{e&&Ie.postRender(()=>e(t,i))};class DA extends Yi{constructor(){super(...arguments),this.removePointerDownListener=gn}onPointerDown(t){this.session=new hy(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:py(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:G4(t),onStart:G4(i),onMove:r,onEnd:(l,u)=>{delete this.session,o&&Ie.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Js(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const bc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function q4(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Gs={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(he.test(e))e=parseFloat(e);else return e;const i=q4(e,t.target.x),r=q4(e,t.target.y);return`${i}% ${r}%`}},HA={correct:(e,{treeScale:t,projectionDelta:i})=>{const r=e,o=Gi.parse(e);if(o.length>5)return r;const l=Gi.createTransformer(e),u=typeof o[0]!="number"?1:0,d=i.x.scale*t.x,p=i.y.scale*t.y;o[0+u]/=d,o[1+u]/=p;const h=Ye(d,p,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};let t0=!1;class zA extends R.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=t;ij(VA),l&&(i.group&&i.group.add(l),r&&r.register&&o&&r.register(l),t0&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),bc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:r,drag:o,isPresent:l}=this.props,{projection:u}=r;return u&&(u.isPresent=l,t0=!0,o||t.layoutDependency!==i||i===void 0||t.isPresent!==l?u.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?u.promote():u.relegate()||Ie.postRender(()=>{const d=u.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),y1.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:r}=this.props,{projection:o}=t;t0=!0,o&&(o.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function gy(e){const[t,i]=P8(),r=R.useContext(Wp);return m.jsx(zA,{...e,layoutGroup:r,switchLayoutGroup:R.useContext(W8),isPresent:t,safeToRemove:i})}const VA={borderRadius:{...Gs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Gs,borderTopRightRadius:Gs,borderBottomLeftRadius:Gs,borderBottomRightRadius:Gs,boxShadow:HA};function PA(e,t,i){const r=jt(e)?e:Or(e);return r.start(L1("",r,t,i)),r.animation}const NA=(e,t)=>e.depth-t.depth;class $A{constructor(){this.children=[],this.isDirty=!1}add(t){Jp(this.children,t),this.isDirty=!0}remove(t){e1(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(NA),this.isDirty=!1,this.children.forEach(t)}}function BA(e,t){const i=$t.now(),r=({timestamp:o})=>{const l=o-i;l>=t&&(Ii(r),e(l-t))};return Ie.setup(r,!0),()=>Ii(r)}const xy=["TopLeft","TopRight","BottomLeft","BottomRight"],UA=xy.length,Y4=e=>typeof e=="string"?parseFloat(e):e,F4=e=>typeof e=="number"||he.test(e);function _A(e,t,i,r,o,l){o?(e.opacity=Ye(0,i.opacity??1,IA(r)),e.opacityExit=Ye(t.opacity??1,0,GA(r))):l&&(e.opacity=Ye(t.opacity??1,i.opacity??1,r));for(let u=0;u<UA;u++){const d=`border${xy[u]}Radius`;let p=Z4(t,d),h=Z4(i,d);if(p===void 0&&h===void 0)continue;p||(p=0),h||(h=0),p===0||h===0||F4(p)===F4(h)?(e[d]=Math.max(Ye(Y4(p),Y4(h),r),0),(_n.test(h)||_n.test(p))&&(e[d]+="%")):e[d]=h}(t.rotate||i.rotate)&&(e.rotate=Ye(t.rotate||0,i.rotate||0,r))}function Z4(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const IA=yy(0,.5,i8),GA=yy(.5,.95,gn);function yy(e,t,i){return r=>r<e?0:r>t?1:i(uo(e,t,r))}function X4(e,t){e.min=t.min,e.max=t.max}function hn(e,t){X4(e.x,t.x),X4(e.y,t.y)}function W4(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function K4(e,t,i,r,o){return e-=t,e=kc(e,1/i,r),o!==void 0&&(e=kc(e,1/o,r)),e}function qA(e,t=0,i=1,r=.5,o,l=e,u=e){if(_n.test(t)&&(t=parseFloat(t),t=Ye(u.min,u.max,t/100)-u.min),typeof t!="number")return;let d=Ye(l.min,l.max,r);e===l&&(d-=t),e.min=K4(e.min,t,i,d,o),e.max=K4(e.max,t,i,d,o)}function Q4(e,t,[i,r,o],l,u){qA(e,t[i],t[r],t[o],t.scale,l,u)}const YA=["x","scaleX","originX"],FA=["y","scaleY","originY"];function J4(e,t,i,r){Q4(e.x,t,YA,i?i.x:void 0,r?r.x:void 0),Q4(e.y,t,FA,i?i.y:void 0,r?r.y:void 0)}function ex(e){return e.translate===0&&e.scale===1}function vy(e){return ex(e.x)&&ex(e.y)}function tx(e,t){return e.min===t.min&&e.max===t.max}function ZA(e,t){return tx(e.x,t.x)&&tx(e.y,t.y)}function nx(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function wy(e,t){return nx(e.x,t.x)&&nx(e.y,t.y)}function ix(e){return Ot(e.x)/Ot(e.y)}function ax(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class XA{constructor(){this.members=[]}add(t){Jp(this.members,t),t.scheduleRender()}remove(t){if(e1(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){const i=this.members.findIndex(o=>t===o);if(i===0)return!1;let r;for(let o=i;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(t,i){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,i&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:i,resumingFrom:r}=t;i.onExitComplete&&i.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function WA(e,t,i){let r="";const o=e.x.translate/t.x,l=e.y.translate/t.y,u=(i==null?void 0:i.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),i){const{transformPerspective:h,rotate:g,rotateX:y,rotateY:v,skewX:C,skewY:S}=i;h&&(r=`perspective(${h}px) ${r}`),g&&(r+=`rotate(${g}deg) `),y&&(r+=`rotateX(${y}deg) `),v&&(r+=`rotateY(${v}deg) `),C&&(r+=`skewX(${C}deg) `),S&&(r+=`skewY(${S}deg) `)}const d=e.x.scale*t.x,p=e.y.scale*t.y;return(d!==1||p!==1)&&(r+=`scale(${d}, ${p})`),r||"none"}const n0=["","X","Y","Z"],KA=1e3;let QA=0;function i0(e,t,i,r){const{latestValues:o}=t;o[e]&&(i[e]=o[e],t.setStaticValue(e,0),r&&(r[e]=0))}function by(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const i=sy(t);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:o,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",Ie,!(o||l))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&by(r)}function Sy({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},d=t==null?void 0:t()){this.id=QA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(tM),this.nodes.forEach(rM),this.nodes.forEach(sM),this.nodes.forEach(nM)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new $A)}addEventListener(u,d){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new i1),this.eventHandlers.get(u).add(d)}notifyListeners(u,...d){const p=this.eventHandlers.get(u);p&&p.notify(...d)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=V8(u)&&!GE(u),this.instance=u;const{layoutId:d,layout:p,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||d)&&(this.isLayoutDirty=!0),e){let g,y=0;const v=()=>this.root.updateBlockedByResize=!1;Ie.read(()=>{y=window.innerWidth}),e(u,()=>{const C=window.innerWidth;C!==y&&(y=C,this.root.updateBlockedByResize=!0,g&&g(),g=BA(v,250),bc.hasAnimatedSinceResize&&(bc.hasAnimatedSinceResize=!1,this.nodes.forEach(ox)))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&h&&(d||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:y,hasRelativeLayoutChanged:v,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||h.getDefaultTransition()||dM,{onLayoutAnimationStart:E,onLayoutAnimationComplete:O}=h.getProps(),M=!this.targetLayout||!wy(this.targetLayout,C),T=!y&&v;if(this.options.layoutRoot||this.resumeFrom||T||y&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const j={...g1(S,"layout"),onPlay:E,onComplete:O};(h.shouldReduceMotion||this.options.layoutRoot)&&(j.delay=0,j.type=!1),this.startAnimation(j),this.setAnimationOrigin(g,T)}else y||ox(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ii(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(oM),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&by(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:d,layout:p}=this.options;if(d===void 0&&!p)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(rx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(sx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(aM),this.nodes.forEach(JA),this.nodes.forEach(eM)):this.nodes.forEach(sx),this.clearAllSnapshots();const d=$t.now();yt.delta=fi(0,1e3/60,d-yt.timestamp),yt.timestamp=d,yt.isProcessing=!0,qf.update.process(yt),qf.preRender.process(yt),qf.render.process(yt),yt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,y1.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(iM),this.sharedNodes.forEach(lM)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ie.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ot(this.snapshot.measuredBox.x)&&!Ot(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Je(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(d=!1),d&&this.instance){const p=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!vy(this.projectionDelta),p=this.getTransformTemplate(),h=p?p(this.latestValues,""):void 0,g=h!==this.prevTransformTemplateValue;u&&this.instance&&(d||pa(this.latestValues)||g)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const d=this.measurePageBox();let p=this.removeElementScroll(d);return u&&(p=this.removeTransform(p)),fM(p),{animationId:this.root.animationId,measuredBox:d,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:u}=this.options;if(!u)return Je();const d=u.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(pM))){const{scroll:g}=this.root;g&&(yr(d.x,g.offset.x),yr(d.y,g.offset.y))}return d}removeElementScroll(u){var p;const d=Je();if(hn(d,u),(p=this.scroll)!=null&&p.wasRoot)return d;for(let h=0;h<this.path.length;h++){const g=this.path[h],{scroll:y,options:v}=g;g!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&hn(d,u),yr(d.x,y.offset.x),yr(d.y,y.offset.y))}return d}applyTransform(u,d=!1){const p=Je();hn(p,u);for(let h=0;h<this.path.length;h++){const g=this.path[h];!d&&g.options.layoutScroll&&g.scroll&&g!==g.root&&vr(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),pa(g.latestValues)&&vr(p,g.latestValues)}return pa(this.latestValues)&&vr(p,this.latestValues),p}removeTransform(u){const d=Je();hn(d,u);for(let p=0;p<this.path.length;p++){const h=this.path[p];if(!h.instance||!pa(h.latestValues))continue;lp(h.latestValues)&&h.updateSnapshot();const g=Je(),y=h.measurePageBox();hn(g,y),J4(d,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,g)}return pa(this.latestValues)&&J4(d,this.latestValues),d}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==yt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var v;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==d;if(!(u||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!(!this.layout||!(g||y))){if(this.resolvedRelativeTargetAt=yt.timestamp,!this.targetDelta&&!this.relativeTarget){const C=this.getClosestProjectingParent();C&&C.layout&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Je(),this.relativeTargetOrigin=Je(),to(this.relativeTargetOrigin,this.layout.layoutBox,C.layout.layoutBox),hn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Je(),this.targetWithTransforms=Je()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),vA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):hn(this.target,this.layout.layoutBox),ey(this.target,this.targetDelta)):hn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const C=this.getClosestProjectingParent();C&&!!C.resumingFrom==!!this.resumingFrom&&!C.options.layoutScroll&&C.target&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Je(),this.relativeTargetOrigin=Je(),to(this.relativeTargetOrigin,this.target,C.target),hn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||lp(this.parent.latestValues)||J8(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var S;const u=this.getLead(),d=!!this.resumingFrom||this!==u;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===yt.timestamp&&(p=!1),p)return;const{layout:h,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||g))return;hn(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,v=this.treeScale.y;Rj(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Je());const{target:C}=u;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(W4(this.prevProjectionDelta.x,this.projectionDelta.x),W4(this.prevProjectionDelta.y,this.projectionDelta.y)),eo(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==v||!ax(this.projectionDelta.x,this.prevProjectionDelta.x)||!ax(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var d;if((d=this.options.visualElement)==null||d.scheduleRender(),u){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=wr(),this.projectionDelta=wr(),this.projectionDeltaWithTransform=wr()}setAnimationOrigin(u,d=!1){const p=this.snapshot,h=p?p.latestValues:{},g={...this.latestValues},y=wr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const v=Je(),C=p?p.source:void 0,S=this.layout?this.layout.source:void 0,E=C!==S,O=this.getStack(),M=!O||O.members.length<=1,T=!!(E&&!M&&this.options.crossfade===!0&&!this.path.some(uM));this.animationProgress=0;let j;this.mixTargetDelta=D=>{const L=D/1e3;lx(y.x,u.x,L),lx(y.y,u.y,L),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(to(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),cM(this.relativeTarget,this.relativeTargetOrigin,v,L),j&&ZA(this.relativeTarget,j)&&(this.isProjectionDirty=!1),j||(j=Je()),hn(j,this.relativeTarget)),E&&(this.animationValues=g,_A(g,h,this.latestValues,L,T,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var d,p,h;this.notifyListeners("animationStart"),(d=this.currentAnimation)==null||d.stop(),(h=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Ii(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ie.update(()=>{bc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Or(0)),this.currentAnimation=PA(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),u.onUpdate&&u.onUpdate(g)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(KA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:d,target:p,layout:h,latestValues:g}=u;if(!(!d||!p||!h)){if(this!==u&&this.layout&&h&&Cy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){p=this.target||Je();const y=Ot(this.layout.layoutBox.x);p.x.min=u.target.x.min,p.x.max=p.x.min+y;const v=Ot(this.layout.layoutBox.y);p.y.min=u.target.y.min,p.y.max=p.y.min+v}hn(d,p),vr(d,g),eo(this.projectionDeltaWithTransform,this.layoutCorrected,d,g)}}registerSharedNode(u,d){this.sharedNodes.has(u)||this.sharedNodes.set(u,new XA),this.sharedNodes.get(u).add(d);const h=d.options.initialPromotionConfig;d.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(d):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var d;const{layoutId:u}=this.options;return u?((d=this.getStack())==null?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:u}=this.options;return u?(d=this.getStack())==null?void 0:d.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:d,preserveFollowOpacity:p}={}){const h=this.getStack();h&&h.promote(this,p),u&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let d=!1;const{latestValues:p}=u;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(d=!0),!d)return;const h={};p.z&&i0("z",u,h,this.animationValues);for(let g=0;g<n0.length;g++)i0(`rotate${n0[g]}`,u,h,this.animationValues),i0(`skew${n0[g]}`,u,h,this.animationValues);u.render();for(const g in h)u.setStaticValue(g,h[g]),this.animationValues&&(this.animationValues[g]=h[g]);u.scheduleRender()}applyProjectionStyles(u,d){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=wc(d==null?void 0:d.pointerEvents)||"",u.transform=p?p(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=wc(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!pa(this.latestValues)&&(u.transform=p?p({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=h.animationValues||h.latestValues;this.applyTransformsToTarget();let y=WA(this.projectionDeltaWithTransform,this.treeScale,g);p&&(y=p(g,y)),u.transform=y;const{x:v,y:C}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${C.origin*100}% 0`,h.animationValues?u.opacity=h===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=h===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const S in mo){if(g[S]===void 0)continue;const{correct:E,applyTo:O,isCSSVariable:M}=mo[S],T=y==="none"?g[S]:E(g[S],h);if(O){const j=O.length;for(let D=0;D<j;D++)u[O[D]]=T}else M?this.options.visualElement.renderState.vars[S]=T:u[S]=T}this.options.layoutId&&(u.pointerEvents=h===this?wc(d==null?void 0:d.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var d;return(d=u.currentAnimation)==null?void 0:d.stop()}),this.root.nodes.forEach(rx),this.root.sharedNodes.clear()}}}function JA(e){e.updateLayout()}function eM(e){var i;const t=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:l}=e.options,u=t.source!==e.layout.source;l==="size"?mn(y=>{const v=u?t.measuredBox[y]:t.layoutBox[y],C=Ot(v);v.min=r[y].min,v.max=v.min+C}):Cy(l,t.layoutBox,r)&&mn(y=>{const v=u?t.measuredBox[y]:t.layoutBox[y],C=Ot(r[y]);v.max=v.min+C,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[y].max=e.relativeTarget[y].min+C)});const d=wr();eo(d,r,t.layoutBox);const p=wr();u?eo(p,e.applyTransform(o,!0),t.measuredBox):eo(p,r,t.layoutBox);const h=!vy(d);let g=!1;if(!e.resumeFrom){const y=e.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:C}=y;if(v&&C){const S=Je();to(S,t.layoutBox,v.layoutBox);const E=Je();to(E,r,C.layoutBox),wy(S,E)||(g=!0),y.options.layoutRoot&&(e.relativeTarget=E,e.relativeTargetOrigin=S,e.relativeParent=y)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:p,layoutDelta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function tM(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function nM(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function iM(e){e.clearSnapshot()}function rx(e){e.clearMeasurements()}function sx(e){e.isLayoutDirty=!1}function aM(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ox(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function rM(e){e.resolveTargetDelta()}function sM(e){e.calcProjection()}function oM(e){e.resetSkewAndRotation()}function lM(e){e.removeLeadSnapshot()}function lx(e,t,i){e.translate=Ye(t.translate,0,i),e.scale=Ye(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function cx(e,t,i,r){e.min=Ye(t.min,i.min,r),e.max=Ye(t.max,i.max,r)}function cM(e,t,i,r){cx(e.x,t.x,i.x,r),cx(e.y,t.y,i.y,r)}function uM(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const dM={duration:.45,ease:[.4,0,.1,1]},ux=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),dx=ux("applewebkit/")&&!ux("chrome/")?Math.round:gn;function fx(e){e.min=dx(e.min),e.max=dx(e.max)}function fM(e){fx(e.x),fx(e.y)}function Cy(e,t,i){return e==="position"||e==="preserve-aspect"&&!yA(ix(t),ix(i),.2)}function pM(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const hM=Sy({attachResizeListener:(e,t)=>go(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),a0={current:void 0},Ty=Sy({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!a0.current){const e=new hM({});e.mount(window),e.setOptions({layoutScroll:!0}),a0.current=e}return a0.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),mM={pan:{Feature:DA},drag:{Feature:kA,ProjectionNode:Ty,MeasureLayout:gy}};function px(e,t,i){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",i==="Start");const o="onHover"+i,l=r[o];l&&Ie.postRender(()=>l(t,jo(t)))}class gM extends Yi{mount(){const{current:t}=this.node;t&&(this.unmount=$E(t,(i,r)=>(px(this.node,r,"Start"),o=>px(this.node,o,"End"))))}unmount(){}}class xM extends Yi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Co(go(this.node.current,"focus",()=>this.onFocus()),go(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function hx(e,t,i){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",i==="Start");const o="onTap"+(i==="End"?"":i),l=r[o];l&&Ie.postRender(()=>l(t,jo(t)))}class yM extends Yi{mount(){const{current:t}=this.node;t&&(this.unmount=IE(t,(i,r)=>(hx(this.node,r,"Start"),(o,{success:l})=>hx(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const mp=new WeakMap,r0=new WeakMap,vM=e=>{const t=mp.get(e.target);t&&t(e)},wM=e=>{e.forEach(vM)};function bM({root:e,...t}){const i=e||document;r0.has(i)||r0.set(i,{});const r=r0.get(i),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(wM,{root:e,...t})),r[o]}function SM(e,t,i){const r=bM(t);return mp.set(e,i),r.observe(e),()=>{mp.delete(e),r.unobserve(e)}}const CM={some:0,all:1};class TM extends Yi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:i,margin:r,amount:o="some",once:l}=t,u={root:i?i.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:CM[o]},d=p=>{const{isIntersecting:h}=p;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),v=h?g:y;v&&v(p)};return SM(this.node.current,u,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(EM(t,i))&&this.startObserver()}unmount(){}}function EM({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}const jM={inView:{Feature:TM},tap:{Feature:yM},focus:{Feature:xM},hover:{Feature:gM}},AM={layout:{ProjectionNode:Ty,MeasureLayout:gy}},MM={...fA,...jM,...mM,...AM},En=Mj(MM,Uj),LM=w.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,OM=w.button`
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
`,s0=w(En.div)`
  width: 20px;
  height: 2px;
  background: ${({$isOpen:e,$darkMode:t})=>e||t?"black":"white"};
  border-radius: 2px;
  transition: background 0.3s ease;
`,RM=w(En.div)`
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
`,kM=w(wt)`
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
`,DM=w.p`
  color: ${({$active:e})=>e?"#3098EE":"#242424"};
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
`;w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;w(En.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 8px;
  overflow: hidden;
`;w.div`
  padding: 10px 0;
`;const HM=w.img`
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
`;w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  span {
    flex-grow: 1;
  }

  ${HM} {
    padding: 8px;
    margin-right: -8px;
  }
`;const zM=w.div`
  background-color: ${({$active:e})=>e?"#3098EE":"#c3c2c2ff"};
  position: absolute;
  width: 90%;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`,VM=(e,t,i,r)=>{var l,u,d,p;const o=[i,{code:t,...r||{}}];if((u=(l=e==null?void 0:e.services)==null?void 0:l.logger)!=null&&u.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);ba(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(p=(d=e==null?void 0:e.services)==null?void 0:d.logger)!=null&&p.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},mx={},gp=(e,t,i,r)=>{ba(i)&&mx[i]||(ba(i)&&(mx[i]=new Date),VM(e,t,i,r))},Ey=(e,t)=>()=>{if(e.isInitialized)t();else{const i=()=>{setTimeout(()=>{e.off("initialized",i)},0),t()};e.on("initialized",i)}},xp=(e,t,i)=>{e.loadNamespaces(t,Ey(e,i))},gx=(e,t,i,r)=>{if(ba(i)&&(i=[i]),e.options.preload&&e.options.preload.indexOf(t)>-1)return xp(e,i,r);i.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,Ey(e,r))},PM=(e,t,i={})=>!t.languages||!t.languages.length?(gp(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:i.lng,precheck:(r,o)=>{if(i.bindI18n&&i.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!o(r.isLanguageChangingTo,e))return!1}}),ba=e=>typeof e=="string",NM=e=>typeof e=="object"&&e!==null,$M=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,BM={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},UM=e=>BM[e],_M=e=>e.replace($M,UM);let yp={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:_M};const IM=(e={})=>{yp={...yp,...e}},GM=()=>yp;let jy;const qM=e=>{jy=e},YM=()=>jy,FM={type:"3rdParty",init(e){IM(e.options.react),qM(e)}},ZM=R.createContext();class XM{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(i=>{this.usedNamespaces[i]||(this.usedNamespaces[i]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const WM=(e,t)=>{const i=R.useRef();return R.useEffect(()=>{i.current=e},[e,t]),i.current},Ay=(e,t,i,r)=>e.getFixedT(t,i,r),KM=(e,t,i,r)=>R.useCallback(Ay(e,t,i,r),[e,t,i,r]),O1=(e,t={})=>{var D,L,$,V;const{i18n:i}=t,{i18n:r,defaultNS:o}=R.useContext(ZM)||{},l=i||r||YM();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new XM),!l){gp(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const _=(Y,W)=>ba(W)?W:NM(W)&&ba(W.defaultValue)?W.defaultValue:Array.isArray(Y)?Y[Y.length-1]:Y,q=[_,{},!1];return q.t=_,q.i18n={},q.ready=!1,q}(D=l.options.react)!=null&&D.wait&&gp(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...GM(),...l.options.react,...t},{useSuspense:d,keyPrefix:p}=u;let h=o||((L=l.options)==null?void 0:L.defaultNS);h=ba(h)?[h]:h||["translation"],(V=($=l.reportNamespaces).addUsedNamespaces)==null||V.call($,h);const g=(l.isInitialized||l.initializedStoreOnce)&&h.every(_=>PM(_,l,u)),y=KM(l,t.lng||null,u.nsMode==="fallback"?h:h[0],p),v=()=>y,C=()=>Ay(l,t.lng||null,u.nsMode==="fallback"?h:h[0],p),[S,E]=R.useState(v);let O=h.join();t.lng&&(O=`${t.lng}${O}`);const M=WM(O),T=R.useRef(!0);R.useEffect(()=>{const{bindI18n:_,bindI18nStore:q}=u;T.current=!0,!g&&!d&&(t.lng?gx(l,t.lng,h,()=>{T.current&&E(C)}):xp(l,h,()=>{T.current&&E(C)})),g&&M&&M!==O&&T.current&&E(C);const Y=()=>{T.current&&E(C)};return _&&(l==null||l.on(_,Y)),q&&(l==null||l.store.on(q,Y)),()=>{T.current=!1,l&&_&&(_==null||_.split(" ").forEach(W=>l.off(W,Y))),q&&l&&q.split(" ").forEach(W=>l.store.off(W,Y))}},[l,O]),R.useEffect(()=>{T.current&&g&&E(v)},[l,p,g]);const j=[S,l,g];if(j.t=S,j.i18n=l,j.ready=g,g||!g&&!d)return j;throw new Promise(_=>{t.lng?gx(l,t.lng,h,()=>_()):xp(l,h,()=>_())})},QM=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  overflow: auto;
  margin-top: 40px;
`,xx=w.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  width: 166px;
`,$i=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,JM=w.div`
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
`,eL=w.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
`,tL=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 2 * 0.25rem */
  width: 100%;
`,nL=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;
`,iL=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 400;
  line-height: 1.2em;
  width: fit-content;
`,aL={open:{rotate:45,y:8},closed:{rotate:0,y:0}},rL={open:{opacity:0},closed:{opacity:1}},sL={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},oL={open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},lL=({isOpen:e,setIsOpen:t})=>{const[,i]=R.useState(!1),{t:r}=O1(),o=vn(),l=["/contact","/service","/tips","/pricing","/fridge"].some(h=>o.pathname.startsWith(h));R.useEffect(()=>(document.body.style.overflow=e?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[e]);const u=()=>{t(!1),i(!1)},d=h=>{const g=o.pathname;return h==="/home#hero"?g==="/"||g==="/home":g.startsWith(h.split("#")[0])},p=[{to:"/home#hero",label:"Home"},{to:"/service#all",label:"Services"},{to:"/about#ap",label:"About Us"},{to:"/tips#app",label:"Tips"},{to:"/contact#ap",label:"Contact"}];return m.jsxs(LM,{children:[m.jsxs(OM,{onClick:()=>t(!e),"aria-label":e?"Close menu":"Open menu",children:[m.jsx(s0,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:aL}),m.jsx(s0,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:rL}),m.jsx(s0,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:sL})]}),m.jsx(N8,{children:e&&m.jsxs(RM,{initial:"closed",animate:"open",exit:"closed",variants:oL,transition:{duration:.3},children:[p.map((h,g)=>{const y=d(h.to);return m.jsxs("div",{children:[m.jsx(kM,{to:h.to,onClick:u,children:m.jsx(DM,{$active:y,children:r(h.label)})}),m.jsx(zM,{})]},g)}),m.jsxs(QM,{children:[m.jsxs(xx,{children:[m.jsx($i,{children:"Washing Machine Fix"}),m.jsx($i,{children:"Dishwasher Repair"}),m.jsx($i,{children:"Oven Maintenance"}),m.jsx($i,{children:"Dryer Troubleshooting"})]}),m.jsxs(xx,{children:[m.jsx($i,{children:"Microwave Service"}),m.jsx($i,{children:"Air Conditioner Repair"}),m.jsx($i,{children:"Coffee Maker Repair"}),m.jsx($i,{children:"Blender Maintenance"})]})]}),m.jsxs(JM,{children:[m.jsx(eL,{}),m.jsxs(tL,{children:[m.jsx(nL,{children:"Designed by TRBN"}),m.jsx(iL,{children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})})]})},cL="/assets/LogoandTextContainer-CnBPFIWK.svg",uL=w.div`
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
`,dL=w.img`
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
`,fL=w.div`
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
`,pL=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,hL=w.p`
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
`,mL=w.p`
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
`,gL=w.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,My=w(wt)`
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
`;w.button`
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
`;w.div`
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
`;w.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.div`
  display: flex;
  align-items: center;
  gap: 7px;
  width: 156px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.img`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  max-width: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.div`
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
`;w.div`
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
`;w.span`
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
`;w.p`
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
`;w.div`
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
`;w.div`
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
`;w.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 1440px) {
    width: auto;
    margin: 0 auto;
  }
`;w.img`
  border-radius: 18px;
  border: 1px solid var(--black);
  width: 36px;
  height: 36px;
  margin-left: -20px;
`;w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
`;w.div`
  margin: 0 auto;
  width: 285px;
  // height: 43px;
  margin-top: 20px;
  display: flex;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1440px) {
  }
`;w.button`
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
`;We`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 73, 74, 0.81);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`;w.button`
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
`;const yx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgBzZFhEcIwDIVTFFRCHYCESZgDJgEHmwPmYJWAhKGgONgccCgoL3e5I1eaAf/I3Xftkry+ZnVUiZyzx9KBPXiAm3Muln27ivCIJYEArmAFLfILCGQFimYTcidwNw8QYSv7A5iEILkBjDUhNy+yD3IQu40q79m9Jm7ALPsOXFRtVe75k7OX+fjAvrjRu7OauaHXz5v5BsqVbzRZYi4moxa+ea4IzkXOi3CgrZDGxLMW39vCilMvwki/hJox0t/FEx1sC+f02XQyAAAAAElFTkSuQmCC",xL=()=>{const[e,t]=R.useState(!1),[i]=R.useState(!1),[r,o]=R.useState(!1),l=vn(),u=["/contact","/service","/tips","/pricing","/fridge"].some(C=>l.pathname.startsWith(C)),d=i||r,p=zp(),h=C=>{C.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),window.location.pathname!=="/home"&&p("/home")};R.useEffect(()=>{const C=new IntersectionObserver(([E])=>{t(!E.isIntersecting)},{threshold:.1,rootMargin:"50px 0px 0px 0px"}),S=document.createElement("div");return S.style.position="absolute",S.style.top="50px",S.style.height="1px",S.style.pointerEvents="none",document.body.appendChild(S),C.observe(S),()=>{C.disconnect(),document.body.contains(S)&&document.body.removeChild(S)}},[]);const g=De({query:"(max-width: 1439px)"}),y=De({query:"(min-width: 768px) and (max-width: 1439px)"}),v=De({query:"(min-width: 1440px)"});return m.jsxs(vC,{$isScrolled:e,$darkMode:u,children:[m.jsxs(wC,{id:"header",children:[m.jsx(bC,{to:"/home#hero",onClick:h,$overlayOpen:d,$darkMode:u,children:m.jsx("img",{src:cL,alt:"Logo"})}),!g&&m.jsxs(SC,{children:[m.jsx(_s,{children:m.jsx(Is,{to:"/home#hero",$overlayOpen:d,$darkMode:u,children:"Home"})}),m.jsx(_s,{children:m.jsx(Is,{to:"/service#all",$overlayOpen:d,$darkMode:u,children:"Services"})}),m.jsx(_s,{children:m.jsx(Is,{to:"/about#ap",$overlayOpen:d,$darkMode:u,children:"About Us"})}),m.jsx(_s,{children:m.jsx(Is,{to:"/tips#app",$overlayOpen:d,$darkMode:u,children:"Tips"})}),m.jsx(_s,{children:m.jsx(Is,{to:"/contact#ap",$overlayOpen:d,$darkMode:u,children:"Contact"})})]}),v&&m.jsxs(W3,{children:[m.jsxs(ql,{children:[m.jsx(Ni,{$overlayOpen:d,$darkMode:u,children:m.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),m.jsx(Ni,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),m.jsxs(ql,{children:[m.jsxs(Ni,{$overlayOpen:d,$darkMode:u,children:[m.jsx("img",{src:yx,alt:"🗺️"}),m.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),m.jsx(Ni,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]}),m.jsx(CC,{children:m.jsxs("div",{style:{display:"flex"},children:[m.jsx(My,{to:"/contact#ap",children:"Contact Us"}),m.jsx(_5,{$overlayOpen:d,$darkMode:u,children:m.jsx("a",{href:"tel:+18055002705",children:"Call Us"})}),g&&m.jsx(lL,{isOpen:r,setIsOpen:o})]})})]}),y&&m.jsxs(W3,{children:[m.jsxs(ql,{children:[m.jsx(Ni,{$overlayOpen:d,$darkMode:u,children:m.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),m.jsx(Ni,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),m.jsxs(ql,{children:[m.jsxs(Ni,{$overlayOpen:d,$darkMode:u,children:[m.jsx("img",{src:yx,alt:"🗺️"}),m.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),m.jsx(Ni,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]})]})},yL=w.footer`
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
`,vL=w.div`
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
`,wL=w.div`
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
`,qs=w(wt)`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: ${({size:e})=>e||"15px"};
  font-weight: ${({weight:e})=>e||"normal"};
  line-height: 1.2em;
  width: fit-content;
  display: flex;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,o0=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: ${({size:e})=>e||"15px"};
  font-weight: ${({weight:e})=>e||"normal"};
  line-height: 1.2em;
  width: fit-content;
  display: flex;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,bL=w.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
  }
`,SL=w.p`
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
`,CL=w.div`
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
`,TL=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,EL=w.div`
  background: rgba(255, 255, 255, ${({opacity:e})=>e||.5});
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,jL=w.svg`
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 114px;
  }

  @media screen and (min-width: 1440px) {
    height: 222px;
  }
`;w.footer`
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
`;w.div`
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
`;w.p`
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
`;w.div`
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
`;w.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 5px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.a`
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
`;w.div`
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
`;w(wt)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: var(--white-50);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.a`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: var(--white-50);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.div`
  display: flex;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w(wt)`
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
`;w.div`
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
`;w.button`
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
`;w.div`
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
`;w.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
  margin: 16px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.a`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.img`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const AL=w.div`
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
`,ML=w.div`
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
`,LL=w.p`
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
`,OL=w.p`
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
`,Ly=w.div`
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
`,Oy=w.div`
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
`,Ry=w.button`
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
`,RL=w.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 55px;
  line-height: 90%;
  color: var(--blue-500);
  text-align: center;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`,kL=w.div`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
  height: auto;
  padding: 30px 0;
  background: var(--blue-form);
   z-index: 9000;
`,ky=()=>{const e=[{title:"Last Updated: January 20, 2025",content:"At Airtexno, we are dedicated to safeguarding your privacy and ensuring that your personal data is managed securely and responsibly. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or engage with our services."},{title:"INFORMATION WE COLLECT",content:"We may collect the following types of information: Personal Information: Name, email address, phone number, company name, and other details you provide when filling out forms, subscribing to newsletters, or contacting us directly. Usage Data: Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent. We may collect this through cookies and analytics tools. Third-Party Data: Information from services you've authorized us to use (e.g., analytics providers)."},{title:"HOW WE USE YOUR INFORMATION",content:"We may use or share your information with: Service Providers: To help operate our website, analytics, marketing, or provide services on our behalf. Legal Requirements: If required by applicable law or to comply with legal processes. Business Transfers: In the case of a merger or acquisition, data may be shared as part of that process. We do not sell personal data to third parties."},{title:"COOKIES AND TRACKING TECHNOLOGIES",content:"Our site uses cookies and similar technologies to enhance performance and user experience. Cookies help remember your preferences and analyze behavior. You can manage cookies through your browser settings. Please note that disabling cookies may impact site functionality."},{title:"DATA RETENTION",content:"We retain your data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations."},{title:"YOUR RIGHTS",content:"Depending on your location, you may have the right to: Access your data. Request corrections to inaccurate or incomplete data. Request deletion of your personal data. Object to certain processing activities. Request a copy of your data in machine-readable format. To exercise these rights, please contact us using the details below."},{title:"DATA SECURITY",content:"We implement appropriate technical and organizational measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection."},{title:"THIRD-PARTY LINKS",content:"Our website may contain links to external sites. We are not responsible for their privacy practices. We recommend reviewing their privacy policies separately."},{title:"INTERNATIONAL DATA TRANSFERS",content:"If you access our site from outside our operating country, your data may be transferred and processed in other regions where our servers or partners are located. By using the site, you consent to this transfer."},{title:"UPDATES TO THIS POLICY",content:"We may update this Privacy Policy as necessary. Any changes will be reflected by updating the 'Last Updated' date above. We encourage you to check this page periodically."}];return m.jsxs("div",{children:[m.jsx(kL,{children:m.jsx(RL,{children:"Privacy and terms"})}),m.jsx(AL,{children:e.map((t,i)=>m.jsxs(ML,{children:[m.jsx(LL,{children:t.title}),m.jsx(OL,{children:t.content})]},i))})]})},DL=()=>{const[e,t]=R.useState(!1),i=()=>{t(!0)},r=()=>{t(!1)};return m.jsxs(m.Fragment,{children:[m.jsx(yL,{children:m.jsxs(vL,{children:[m.jsxs(wL,{children:[m.jsxs(SL,{children:[m.jsx("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:"801 Tioga pl, Newbury Park, CA 91320"})," ",m.jsx("br",{}),m.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"}),m.jsx("br",{})," ",m.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]}),m.jsxs(CL,{children:[m.jsx(qs,{to:"/home#hero",children:"Home"}),m.jsx(qs,{to:"/service#all",children:"Services"}),m.jsx(qs,{to:"/about#ap",children:"About Us"}),m.jsx(qs,{to:"/tips#app",children:"Tips"}),m.jsx(qs,{to:"/contact#ap",children:"Contacts"}),m.jsx(o0,{onClick:i,style:{cursor:"pointer"},children:"Privacy and Terms"})]})]}),m.jsxs(TL,{children:[m.jsxs(jL,{viewBox:"0 0 343 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M0 54.8045L19.396 1.71207H26.1359L45.457 54.8045H39.9152L34.2238 38.8768H11.2332L5.5417 54.8045H0ZM12.9556 33.9414H32.5013L22.7659 6.27353L12.9556 33.9414Z",fill:"#3098EE"}),m.jsx("path",{d:"M51.2842 54.8045V1.71207H56.3765V54.8045H51.2842Z",fill:"#3098EE"}),m.jsx("path",{d:"M67.6308 54.8045V1.71207H87.1016C90.896 1.71207 94.1161 2.36015 96.7622 3.6563C99.4581 4.9026 101.53 6.69727 102.978 9.04032C104.426 11.3834 105.15 14.2 105.15 17.4902C105.15 19.933 104.575 22.1015 103.427 23.9959C102.329 25.8903 100.856 27.4108 99.0088 28.5574C97.1616 29.704 95.1646 30.3521 93.0178 30.5016L92.6433 29.8286C96.1381 29.8286 98.8341 30.6262 100.731 32.2215C102.678 33.7669 103.802 36.2097 104.101 39.5498L105.449 54.8045H100.282L99.0088 39.9984C98.8091 37.5557 97.9354 35.761 96.3877 34.6144C94.84 33.418 92.3438 32.8197 88.8989 32.8197H72.7232V54.8045H67.6308ZM72.7232 27.8844H87.9254C91.5699 27.8844 94.4407 26.987 96.5375 25.1924C98.6843 23.3478 99.7577 20.7555 99.7577 17.4155C99.7577 13.9258 98.6843 11.2587 96.5375 9.41421C94.3907 7.56968 91.2205 6.64742 87.0267 6.64742H72.7232V27.8844Z",fill:"#3098EE"}),m.jsx("path",{d:"M125.684 54.8045V9.1151H109.359V1.71207H150.098V9.1151H133.772V54.8045H125.684Z",fill:"white"}),m.jsx("path",{d:"M153.991 54.8045V1.71207H188.589V9.1151H162.079V24.5941H187.691V31.7728H162.079V47.4014H189.188V54.8045H153.991Z",fill:"white"}),m.jsx("path",{d:"M192.736 54.8045L210.41 28.1835L192.886 1.71207H202.397L215.502 21.9021L228.383 1.71207H237.819L220.295 28.0339L238.043 54.8045H228.533L215.352 34.3153L202.172 54.8045H192.736Z",fill:"white"}),m.jsx("path",{d:"M243.289 54.8045V1.71207H253.549L278.112 45.0085V1.71207H286.2V54.8045H275.566L251.377 12.4801V54.8045H243.289Z",fill:"white"}),m.jsx("path",{d:"M318.137 56.0009C312.995 56.0009 308.577 54.9042 304.882 52.7107C301.188 50.4674 298.342 47.2768 296.345 43.1391C294.348 39.0014 293.349 34.066 293.349 28.333C293.349 22.6001 294.348 17.6647 296.345 13.527C298.342 9.33943 301.188 6.12397 304.882 3.88063C308.577 1.63729 312.995 0.515625 318.137 0.515625C323.329 0.515625 327.773 1.63729 331.467 3.88063C335.212 6.12397 338.057 9.33943 340.004 13.527C342.001 17.6647 343 22.6001 343 28.333C343 34.066 342.001 39.0014 340.004 43.1391C338.057 47.2768 335.212 50.4674 331.467 52.7107C327.773 54.9042 323.329 56.0009 318.137 56.0009ZM318.137 48.5979C321.582 48.5979 324.528 47.8003 326.974 46.205C329.47 44.6097 331.367 42.3165 332.665 39.3254C333.964 36.2844 334.613 32.6203 334.613 28.333C334.613 24.0458 333.964 20.3817 332.665 17.3407C331.367 14.2997 329.47 11.9816 326.974 10.3863C324.528 8.74121 321.582 7.91865 318.137 7.91865C314.742 7.91865 311.822 8.74121 309.375 10.3863C306.929 11.9816 305.032 14.2997 303.684 17.3407C302.386 20.3817 301.737 24.0458 301.737 28.333C301.737 32.6203 302.386 36.2844 303.684 39.3254C305.032 42.3165 306.929 44.6097 309.375 46.205C311.822 47.8003 314.742 48.5979 318.137 48.5979Z",fill:"white"})]}),m.jsx(EL,{opacity:.5}),m.jsxs(bL,{children:[m.jsx(o0,{size:"14px",weight:"500",children:"Designed by TRBN"}),m.jsx(o0,{size:"14px",children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})}),e&&m.jsx(Ly,{onClick:r,children:m.jsxs(Oy,{onClick:o=>o.stopPropagation(),children:[m.jsx(Ry,{onClick:r,children:"×"}),m.jsx(ky,{})]})})]})},HL="data:image/svg+xml,%3csvg%20width='1360'%20height='220'%20viewBox='0%200%201360%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%20215.256L76.9053%204.74393H103.629L180.237%20215.256H158.265L135.698%20152.102H44.5397L21.9729%20215.256H0ZM51.3692%20132.534H128.868L90.2672%2022.8302L51.3692%20132.534Z'%20fill='%233098EE'/%3e%3cpath%20d='M203.342%20215.256V4.74393H223.534V215.256H203.342Z'%20fill='%233098EE'/%3e%3cpath%20d='M268.157%20215.256V4.74393H345.359C360.404%204.74393%20373.172%207.31356%20383.663%2012.4528C394.353%2017.3944%20402.568%2024.5103%20408.309%2033.8005C414.049%2043.0907%20416.92%2054.2588%20416.92%2067.3046C416.92%2076.9901%20414.643%2085.5885%20410.09%2093.0997C405.735%20100.611%20399.896%20106.64%20392.571%20111.186C385.247%20115.732%20377.329%20118.302%20368.817%20118.895L367.332%20116.226C381.189%20116.226%20391.879%20119.389%20399.401%20125.714C407.121%20131.842%20411.575%20141.527%20412.763%20154.771L418.108%20215.256H397.619L392.571%20156.55C391.78%20146.864%20388.315%20139.748%20382.179%20135.202C376.042%20130.458%20366.144%20128.086%20352.486%20128.086H288.348V215.256H268.157ZM288.348%20108.518H348.626C363.076%20108.518%20374.459%20104.96%20382.773%2097.8437C391.285%2090.5301%20395.541%2080.2516%20395.541%2067.0081C395.541%2053.1716%20391.285%2042.5966%20382.773%2035.283C374.261%2027.9694%20361.69%2024.3127%20345.062%2024.3127H288.348V108.518Z'%20fill='%233098EE'/%3e%3cpath%20d='M498.339%20215.256V34.097H433.608V4.74393H595.139V34.097H530.408V215.256H498.339Z'%20fill='white'/%3e%3cpath%20d='M610.577%20215.256V4.74393H747.76V34.097H642.646V95.4717H744.196V123.935H642.646V185.903H750.135V215.256H610.577Z'%20fill='white'/%3e%3cpath%20d='M764.202%20215.256L834.278%20109.704L764.796%204.74393H802.506L854.469%2084.7978L905.542%204.74393H942.955L873.473%20109.111L943.846%20215.256H906.135L853.875%20134.016L801.616%20215.256H764.202Z'%20fill='white'/%3e%3cpath%20d='M964.645%20215.256V4.74393H1005.32L1102.72%20176.415V4.74393H1134.79V215.256H1092.62L996.714%2047.4393V215.256H964.645Z'%20fill='white'/%3e%3cpath%20d='M1261.42%20220C1241.03%20220%201223.51%20215.651%201208.86%20206.954C1194.21%20198.059%201182.93%20185.409%201175.01%20169.003C1167.09%20152.597%201163.13%20133.028%201163.13%20110.296C1163.13%2087.5651%201167.09%2067.9964%201175.01%2051.5903C1182.93%2034.9865%201194.21%2022.2372%201208.86%2013.3423C1223.51%204.44743%201241.03%200%201261.42%200C1282.01%200%201299.62%204.44743%201314.27%2013.3423C1329.12%2022.2372%201340.4%2034.9865%201348.12%2051.5903C1356.04%2067.9964%201360%2087.5651%201360%20110.296C1360%20133.028%201356.04%20152.597%201348.12%20169.003C1340.4%20185.409%201329.12%20198.059%201314.27%20206.954C1299.62%20215.651%201282.01%20220%201261.42%20220ZM1261.42%20190.647C1275.08%20190.647%201286.76%20187.484%201296.46%20181.159C1306.35%20174.834%201313.88%20165.741%201319.02%20153.881C1324.17%20141.824%201326.74%20127.296%201326.74%20110.296C1326.74%2093.2974%201324.17%2078.7691%201319.02%2066.7116C1313.88%2054.6541%201306.35%2045.4627%201296.46%2039.1375C1286.76%2032.6145%201275.08%2029.3531%201261.42%2029.3531C1247.96%2029.3531%201236.38%2032.6145%201226.68%2039.1375C1216.98%2045.4627%201209.46%2054.6541%201204.11%2066.7116C1198.96%2078.7691%201196.39%2093.2974%201196.39%20110.296C1196.39%20127.296%201198.96%20141.824%201204.11%20153.881C1209.46%20165.741%201216.98%20174.834%201226.68%20181.159C1236.38%20187.484%201247.96%20190.647%201261.42%20190.647Z'%20fill='white'/%3e%3c/svg%3e",zL="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",VL=We`
  from { opacity: 0; }
  to { opacity: 1; }
`,PL=We`
  from { opacity: 1; }
  to { opacity: 0; }
`,NL=We`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
`,$L=w.div`
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  ${({$hide:e})=>e&&It`
      animation: ${PL} 1s forwards;
    `}
`,BL=w.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  ${({$visible:e})=>e&&It`
      animation: ${VL} 1.5s forwards;
    `}
`,UL=w.img`
  position: absolute;
  width: min-content;
  height: 27px;
  opacity: 0;
  ${({$show:e})=>e&&It`
      animation: ${NL} 2s forwards;
    `}

      @media screen and (min-width: 744px) {
   height: 100px;
  }

  @media screen and (min-width: 1440px) {
  height: 240px;
  }
`,_L=({onComplete:e})=>{const[t,i]=R.useState(!0),[r,o]=R.useState(!1),[l,u]=R.useState(!1),d=R.useRef(null);return R.useEffect(()=>{d.current&&(d.current.onended=()=>{i(!1),o(!0),setTimeout(()=>{u(!0),setTimeout(e,1e3)},3e3)})},[e]),m.jsxs($L,{$hide:l,children:[t&&m.jsx(BL,{ref:d,$visible:t,autoPlay:!0,muted:!0,playsInline:!0,children:m.jsx("source",{src:zL,type:"video/mp4"})}),r&&m.jsx(UL,{src:HL,alt:"Logo",$show:r})]})},IL=()=>{const e=vn(),[t,i]=R.useState(!1);R.useEffect(()=>{const o=()=>{sessionStorage.clear()};return window.addEventListener("beforeunload",o),()=>{window.removeEventListener("beforeunload",o)}},[]),R.useEffect(()=>{sessionStorage.getItem("hasSeenPreloader")||i(!0)},[]);const r=()=>{sessionStorage.setItem("hasSeenPreloader","true"),i(!1)};return R.useEffect(()=>{if(e.hash){const o=e.hash.replace("#",""),l=document.getElementById(o);l&&setTimeout(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})},400)}else window.scrollTo({top:0,behavior:"auto"})},[e.pathname]),t?m.jsx(_L,{onComplete:r}):m.jsxs(m.Fragment,{children:[m.jsx(xL,{}),m.jsx(R.Suspense,{children:m.jsx(Uw,{})}),m.jsx(DL,{})]})};function vx(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function R1(e,t){e===void 0&&(e={}),t===void 0&&(t={});const i=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:vx(t[r])&&vx(e[r])&&Object.keys(t[r]).length>0&&R1(e[r],t[r])})}const Dy={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function In(){const e=typeof document<"u"?document:{};return R1(e,Dy),e}const GL={document:Dy,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Rt(){const e=typeof window<"u"?window:{};return R1(e,GL),e}function qL(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function YL(e){const t=e;Object.keys(t).forEach(i=>{try{t[i]=null}catch{}try{delete t[i]}catch{}})}function Hy(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Dc(){return Date.now()}function FL(e){const t=Rt();let i;return t.getComputedStyle&&(i=t.getComputedStyle(e,null)),!i&&e.currentStyle&&(i=e.currentStyle),i||(i=e.style),i}function ZL(e,t){t===void 0&&(t="x");const i=Rt();let r,o,l;const u=FL(e);return i.WebKitCSSMatrix?(o=u.transform||u.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(d=>d.replace(",",".")).join(", ")),l=new i.WebKitCSSMatrix(o==="none"?"":o)):(l=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=l.toString().split(",")),t==="x"&&(i.WebKitCSSMatrix?o=l.m41:r.length===16?o=parseFloat(r[12]):o=parseFloat(r[4])),t==="y"&&(i.WebKitCSSMatrix?o=l.m42:r.length===16?o=parseFloat(r[13]):o=parseFloat(r[5])),o||0}function Kl(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function XL(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function en(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){const r=i<0||arguments.length<=i?void 0:arguments[i];if(r!=null&&!XL(r)){const o=Object.keys(Object(r)).filter(l=>t.indexOf(l)<0);for(let l=0,u=o.length;l<u;l+=1){const d=o[l],p=Object.getOwnPropertyDescriptor(r,d);p!==void 0&&p.enumerable&&(Kl(e[d])&&Kl(r[d])?r[d].__swiper__?e[d]=r[d]:en(e[d],r[d]):!Kl(e[d])&&Kl(r[d])?(e[d]={},r[d].__swiper__?e[d]=r[d]:en(e[d],r[d])):e[d]=r[d])}}}return e}function Ql(e,t,i){e.style.setProperty(t,i)}function zy(e){let{swiper:t,targetPosition:i,side:r}=e;const o=Rt(),l=-t.translate;let u=null,d;const p=t.params.speed;t.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(t.cssModeFrameID);const h=i>l?"next":"prev",g=(v,C)=>h==="next"&&v>=C||h==="prev"&&v<=C,y=()=>{d=new Date().getTime(),u===null&&(u=d);const v=Math.max(Math.min((d-u)/p,1),0),C=.5-Math.cos(v*Math.PI)/2;let S=l+C*(i-l);if(g(S,i)&&(S=i),t.wrapperEl.scrollTo({[r]:S}),g(S,i)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:S})}),o.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=o.requestAnimationFrame(y)};y()}function Pn(e,t){t===void 0&&(t="");const i=Rt(),r=[...e.children];return i.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(o=>o.matches(t)):r}function WL(e,t){const i=[t];for(;i.length>0;){const r=i.shift();if(e===r)return!0;i.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function KL(e,t){const i=Rt();let r=t.contains(e);return!r&&i.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=WL(e,t))),r}function Hc(e){try{console.warn(e);return}catch{}}function zc(e,t){t===void 0&&(t=[]);const i=document.createElement(e);return i.classList.add(...Array.isArray(t)?t:qL(t)),i}function QL(e,t){const i=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&i.push(r):i.push(r),e=r}return i}function JL(e,t){const i=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&i.push(r):i.push(r),e=r}return i}function _i(e,t){return Rt().getComputedStyle(e,null).getPropertyValue(t)}function Vc(e){let t=e,i;if(t){for(i=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(i+=1);return i}}function Vy(e,t){const i=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&i.push(r):i.push(r),r=r.parentElement;return i}function vp(e,t,i){const r=Rt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function pt(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Pc(e,t){t===void 0&&(t=""),typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:i=>i}).createHTML(t):e.innerHTML=t}function Py(e,t,i,r){return e.params.createElements&&Object.keys(r).forEach(o=>{if(!i[o]&&i.auto===!0){let l=Pn(e.el,`.${r[o]}`)[0];l||(l=zc("div",r[o]),l.className=r[o],e.el.append(l)),i[o]=l,t[o]=l}}),i}function k1(e){let{swiper:t,extendParams:i,on:r,emit:o}=e;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function l(S){let E;return S&&typeof S=="string"&&t.isElement&&(E=t.el.querySelector(S)||t.hostEl.querySelector(S),E)?E:(S&&(typeof S=="string"&&(E=[...document.querySelectorAll(S)]),t.params.uniqueNavElements&&typeof S=="string"&&E&&E.length>1&&t.el.querySelectorAll(S).length===1?E=t.el.querySelector(S):E&&E.length===1&&(E=E[0])),S&&!E?S:E)}function u(S,E){const O=t.params.navigation;S=pt(S),S.forEach(M=>{M&&(M.classList[E?"add":"remove"](...O.disabledClass.split(" ")),M.tagName==="BUTTON"&&(M.disabled=E),t.params.watchOverflow&&t.enabled&&M.classList[t.isLocked?"add":"remove"](O.lockClass))})}function d(){const{nextEl:S,prevEl:E}=t.navigation;if(t.params.loop){u(E,!1),u(S,!1);return}u(E,t.isBeginning&&!t.params.rewind),u(S,t.isEnd&&!t.params.rewind)}function p(S){S.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),o("navigationPrev"))}function h(S){S.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),o("navigationNext"))}function g(){const S=t.params.navigation;if(t.params.navigation=Py(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(S.nextEl||S.prevEl))return;let E=l(S.nextEl),O=l(S.prevEl);Object.assign(t.navigation,{nextEl:E,prevEl:O}),E=pt(E),O=pt(O);const M=(T,j)=>{T&&T.addEventListener("click",j==="next"?h:p),!t.enabled&&T&&T.classList.add(...S.lockClass.split(" "))};E.forEach(T=>M(T,"next")),O.forEach(T=>M(T,"prev"))}function y(){let{nextEl:S,prevEl:E}=t.navigation;S=pt(S),E=pt(E);const O=(M,T)=>{M.removeEventListener("click",T==="next"?h:p),M.classList.remove(...t.params.navigation.disabledClass.split(" "))};S.forEach(M=>O(M,"next")),E.forEach(M=>O(M,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?C():(g(),d())}),r("toEdge fromEdge lock unlock",()=>{d()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{nextEl:S,prevEl:E}=t.navigation;if(S=pt(S),E=pt(E),t.enabled){d();return}[...S,...E].filter(O=>!!O).forEach(O=>O.classList.add(t.params.navigation.lockClass))}),r("click",(S,E)=>{let{nextEl:O,prevEl:M}=t.navigation;O=pt(O),M=pt(M);const T=E.target;let j=M.includes(T)||O.includes(T);if(t.isElement&&!j){const D=E.path||E.composedPath&&E.composedPath();D&&(j=D.find(L=>O.includes(L)||M.includes(L)))}if(t.params.navigation.hideOnClick&&!j){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===T||t.pagination.el.contains(T)))return;let D;O.length?D=O[0].classList.contains(t.params.navigation.hiddenClass):M.length&&(D=M[0].classList.contains(t.params.navigation.hiddenClass)),o(D===!0?"navigationShow":"navigationHide"),[...O,...M].filter(L=>!!L).forEach(L=>L.classList.toggle(t.params.navigation.hiddenClass))}});const v=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),g(),d()},C=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),y()};Object.assign(t.navigation,{enable:v,disable:C,update:d,init:g,destroy:y})}function Ys(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function eO(e){let{swiper:t,extendParams:i,on:r,emit:o}=e;const l="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:T=>T,formatFractionTotal:T=>T,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),t.pagination={el:null,bullets:[]};let u,d=0;function p(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function h(T,j){const{bulletActiveClass:D}=t.params.pagination;T&&(T=T[`${j==="prev"?"previous":"next"}ElementSibling`],T&&(T.classList.add(`${D}-${j}`),T=T[`${j==="prev"?"previous":"next"}ElementSibling`],T&&T.classList.add(`${D}-${j}-${j}`)))}function g(T,j,D){if(T=T%D,j=j%D,j===T+1)return"next";if(j===T-1)return"previous"}function y(T){const j=T.target.closest(Ys(t.params.pagination.bulletClass));if(!j)return;T.preventDefault();const D=Vc(j)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===D)return;const L=g(t.realIndex,D,t.slides.length);L==="next"?t.slideNext():L==="previous"?t.slidePrev():t.slideToLoop(D)}else t.slideTo(D)}function v(){const T=t.rtl,j=t.params.pagination;if(p())return;let D=t.pagination.el;D=pt(D);let L,$;const V=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,_=t.params.loop?Math.ceil(V/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?($=t.previousRealIndex||0,L=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(L=t.snapIndex,$=t.previousSnapIndex):($=t.previousIndex||0,L=t.activeIndex||0),j.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const q=t.pagination.bullets;let Y,W,te;if(j.dynamicBullets&&(u=vp(q[0],t.isHorizontal()?"width":"height"),D.forEach(se=>{se.style[t.isHorizontal()?"width":"height"]=`${u*(j.dynamicMainBullets+4)}px`}),j.dynamicMainBullets>1&&$!==void 0&&(d+=L-($||0),d>j.dynamicMainBullets-1?d=j.dynamicMainBullets-1:d<0&&(d=0)),Y=Math.max(L-d,0),W=Y+(Math.min(q.length,j.dynamicMainBullets)-1),te=(W+Y)/2),q.forEach(se=>{const ce=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(re=>`${j.bulletActiveClass}${re}`)].map(re=>typeof re=="string"&&re.includes(" ")?re.split(" "):re).flat();se.classList.remove(...ce)}),D.length>1)q.forEach(se=>{const ce=Vc(se);ce===L?se.classList.add(...j.bulletActiveClass.split(" ")):t.isElement&&se.setAttribute("part","bullet"),j.dynamicBullets&&(ce>=Y&&ce<=W&&se.classList.add(...`${j.bulletActiveClass}-main`.split(" ")),ce===Y&&h(se,"prev"),ce===W&&h(se,"next"))});else{const se=q[L];if(se&&se.classList.add(...j.bulletActiveClass.split(" ")),t.isElement&&q.forEach((ce,re)=>{ce.setAttribute("part",re===L?"bullet-active":"bullet")}),j.dynamicBullets){const ce=q[Y],re=q[W];for(let N=Y;N<=W;N+=1)q[N]&&q[N].classList.add(...`${j.bulletActiveClass}-main`.split(" "));h(ce,"prev"),h(re,"next")}}if(j.dynamicBullets){const se=Math.min(q.length,j.dynamicMainBullets+4),ce=(u*se-u)/2-te*u,re=T?"right":"left";q.forEach(N=>{N.style[t.isHorizontal()?re:"top"]=`${ce}px`})}}D.forEach((q,Y)=>{if(j.type==="fraction"&&(q.querySelectorAll(Ys(j.currentClass)).forEach(W=>{W.textContent=j.formatFractionCurrent(L+1)}),q.querySelectorAll(Ys(j.totalClass)).forEach(W=>{W.textContent=j.formatFractionTotal(_)})),j.type==="progressbar"){let W;j.progressbarOpposite?W=t.isHorizontal()?"vertical":"horizontal":W=t.isHorizontal()?"horizontal":"vertical";const te=(L+1)/_;let se=1,ce=1;W==="horizontal"?se=te:ce=te,q.querySelectorAll(Ys(j.progressbarFillClass)).forEach(re=>{re.style.transform=`translate3d(0,0,0) scaleX(${se}) scaleY(${ce})`,re.style.transitionDuration=`${t.params.speed}ms`})}j.type==="custom"&&j.renderCustom?(Pc(q,j.renderCustom(t,L+1,_)),Y===0&&o("paginationRender",q)):(Y===0&&o("paginationRender",q),o("paginationUpdate",q)),t.params.watchOverflow&&t.enabled&&q.classList[t.isLocked?"add":"remove"](j.lockClass)})}function C(){const T=t.params.pagination;if(p())return;const j=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let D=t.pagination.el;D=pt(D);let L="";if(T.type==="bullets"){let $=t.params.loop?Math.ceil(j/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&$>j&&($=j);for(let V=0;V<$;V+=1)T.renderBullet?L+=T.renderBullet.call(t,V,T.bulletClass):L+=`<${T.bulletElement} ${t.isElement?'part="bullet"':""} class="${T.bulletClass}"></${T.bulletElement}>`}T.type==="fraction"&&(T.renderFraction?L=T.renderFraction.call(t,T.currentClass,T.totalClass):L=`<span class="${T.currentClass}"></span> / <span class="${T.totalClass}"></span>`),T.type==="progressbar"&&(T.renderProgressbar?L=T.renderProgressbar.call(t,T.progressbarFillClass):L=`<span class="${T.progressbarFillClass}"></span>`),t.pagination.bullets=[],D.forEach($=>{T.type!=="custom"&&Pc($,L||""),T.type==="bullets"&&t.pagination.bullets.push(...$.querySelectorAll(Ys(T.bulletClass)))}),T.type!=="custom"&&o("paginationRender",D[0])}function S(){t.params.pagination=Py(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const T=t.params.pagination;if(!T.el)return;let j;typeof T.el=="string"&&t.isElement&&(j=t.el.querySelector(T.el)),!j&&typeof T.el=="string"&&(j=[...document.querySelectorAll(T.el)]),j||(j=T.el),!(!j||j.length===0)&&(t.params.uniqueNavElements&&typeof T.el=="string"&&Array.isArray(j)&&j.length>1&&(j=[...t.el.querySelectorAll(T.el)],j.length>1&&(j=j.find(D=>Vy(D,".swiper")[0]===t.el))),Array.isArray(j)&&j.length===1&&(j=j[0]),Object.assign(t.pagination,{el:j}),j=pt(j),j.forEach(D=>{T.type==="bullets"&&T.clickable&&D.classList.add(...(T.clickableClass||"").split(" ")),D.classList.add(T.modifierClass+T.type),D.classList.add(t.isHorizontal()?T.horizontalClass:T.verticalClass),T.type==="bullets"&&T.dynamicBullets&&(D.classList.add(`${T.modifierClass}${T.type}-dynamic`),d=0,T.dynamicMainBullets<1&&(T.dynamicMainBullets=1)),T.type==="progressbar"&&T.progressbarOpposite&&D.classList.add(T.progressbarOppositeClass),T.clickable&&D.addEventListener("click",y),t.enabled||D.classList.add(T.lockClass)}))}function E(){const T=t.params.pagination;if(p())return;let j=t.pagination.el;j&&(j=pt(j),j.forEach(D=>{D.classList.remove(T.hiddenClass),D.classList.remove(T.modifierClass+T.type),D.classList.remove(t.isHorizontal()?T.horizontalClass:T.verticalClass),T.clickable&&(D.classList.remove(...(T.clickableClass||"").split(" ")),D.removeEventListener("click",y))})),t.pagination.bullets&&t.pagination.bullets.forEach(D=>D.classList.remove(...T.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const T=t.params.pagination;let{el:j}=t.pagination;j=pt(j),j.forEach(D=>{D.classList.remove(T.horizontalClass,T.verticalClass),D.classList.add(t.isHorizontal()?T.horizontalClass:T.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?M():(S(),C(),v())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&v()}),r("snapIndexChange",()=>{v()}),r("snapGridLengthChange",()=>{C(),v()}),r("destroy",()=>{E()}),r("enable disable",()=>{let{el:T}=t.pagination;T&&(T=pt(T),T.forEach(j=>j.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{v()}),r("click",(T,j)=>{const D=j.target,L=pt(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&L&&L.length>0&&!D.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&D===t.navigation.nextEl||t.navigation.prevEl&&D===t.navigation.prevEl))return;const $=L[0].classList.contains(t.params.pagination.hiddenClass);o($===!0?"paginationShow":"paginationHide"),L.forEach(V=>V.classList.toggle(t.params.pagination.hiddenClass))}});const O=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:T}=t.pagination;T&&(T=pt(T),T.forEach(j=>j.classList.remove(t.params.pagination.paginationDisabledClass))),S(),C(),v()},M=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:T}=t.pagination;T&&(T=pt(T),T.forEach(j=>j.classList.add(t.params.pagination.paginationDisabledClass))),E()};Object.assign(t.pagination,{enable:O,disable:M,render:C,update:v,init:S,destroy:E})}function nn(e){let{swiper:t,extendParams:i,on:r,emit:o,params:l}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,d,p=l&&l.autoplay?l.autoplay.delay:3e3,h=l&&l.autoplay?l.autoplay.delay:3e3,g,y=new Date().getTime(),v,C,S,E,O,M,T;function j(Q){!t||t.destroyed||!t.wrapperEl||Q.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",j),!(T||Q.detail&&Q.detail.bySwiperTouchMove)&&Y())}const D=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?v=!0:v&&(h=g,v=!1);const Q=t.autoplay.paused?g:y+h-new Date().getTime();t.autoplay.timeLeft=Q,o("autoplayTimeLeft",Q,Q/p),d=requestAnimationFrame(()=>{D()})},L=()=>{let Q;return t.virtual&&t.params.virtual.enabled?Q=t.slides.find(k=>k.classList.contains("swiper-slide-active")):Q=t.slides[t.activeIndex],Q?parseInt(Q.getAttribute("data-swiper-autoplay"),10):void 0},$=Q=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(d),D();let ee=typeof Q>"u"?t.params.autoplay.delay:Q;p=t.params.autoplay.delay,h=t.params.autoplay.delay;const k=L();!Number.isNaN(k)&&k>0&&typeof Q>"u"&&(ee=k,p=k,h=k),g=ee;const F=t.params.speed,ne=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(F,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,F,!0,!0),o("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(F,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,F,!0,!0),o("autoplay")),t.params.cssMode&&(y=new Date().getTime(),requestAnimationFrame(()=>{$()})))};return ee>0?(clearTimeout(u),u=setTimeout(()=>{ne()},ee)):requestAnimationFrame(()=>{ne()}),ee},V=()=>{y=new Date().getTime(),t.autoplay.running=!0,$(),o("autoplayStart")},_=()=>{t.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(d),o("autoplayStop")},q=(Q,ee)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(u),Q||(M=!0);const k=()=>{o("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",j):Y()};if(t.autoplay.paused=!0,ee){O&&(g=t.params.autoplay.delay),O=!1,k();return}g=(g||t.params.autoplay.delay)-(new Date().getTime()-y),!(t.isEnd&&g<0&&!t.params.loop)&&(g<0&&(g=0),k())},Y=()=>{t.isEnd&&g<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(y=new Date().getTime(),M?(M=!1,$(g)):$(),t.autoplay.paused=!1,o("autoplayResume"))},W=()=>{if(t.destroyed||!t.autoplay.running)return;const Q=In();Q.visibilityState==="hidden"&&(M=!0,q(!0)),Q.visibilityState==="visible"&&Y()},te=Q=>{Q.pointerType==="mouse"&&(M=!0,T=!0,!(t.animating||t.autoplay.paused)&&q(!0))},se=Q=>{Q.pointerType==="mouse"&&(T=!1,t.autoplay.paused&&Y())},ce=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",te),t.el.addEventListener("pointerleave",se))},re=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",te),t.el.removeEventListener("pointerleave",se))},N=()=>{In().addEventListener("visibilitychange",W)},X=()=>{In().removeEventListener("visibilitychange",W)};r("init",()=>{t.params.autoplay.enabled&&(ce(),N(),V())}),r("destroy",()=>{re(),X(),t.autoplay.running&&_()}),r("_freeModeStaticRelease",()=>{(S||M)&&Y()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?_():q(!0,!0)}),r("beforeTransitionStart",(Q,ee,k)=>{t.destroyed||!t.autoplay.running||(k||!t.params.autoplay.disableOnInteraction?q(!0,!0):_())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){_();return}C=!0,S=!1,M=!1,E=setTimeout(()=>{M=!0,S=!0,q(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!C)){if(clearTimeout(E),clearTimeout(u),t.params.autoplay.disableOnInteraction){S=!1,C=!1;return}S&&t.params.cssMode&&Y(),S=!1,C=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(O=!0)}),Object.assign(t.autoplay,{start:V,stop:_,pause:q,resume:Y})}let l0;function tO(){const e=Rt(),t=In();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Ny(){return l0||(l0=tO()),l0}let c0;function nO(e){let{userAgent:t}=e===void 0?{}:e;const i=Ny(),r=Rt(),o=r.navigator.platform,l=t||r.navigator.userAgent,u={ios:!1,android:!1},d=r.screen.width,p=r.screen.height,h=l.match(/(Android);?[\s\/]+([\d.]+)?/);let g=l.match(/(iPad).*OS\s([\d_]+)/);const y=l.match(/(iPod)(.*OS\s([\d_]+))?/),v=!g&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),C=o==="Win32";let S=o==="MacIntel";const E=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!g&&S&&i.touch&&E.indexOf(`${d}x${p}`)>=0&&(g=l.match(/(Version)\/([\d.]+)/),g||(g=[0,1,"13_0_0"]),S=!1),h&&!C&&(u.os="android",u.android=!0),(g||v||y)&&(u.os="ios",u.ios=!0),u}function $y(e){return e===void 0&&(e={}),c0||(c0=nO(e)),c0}let u0;function iO(){const e=Rt(),t=$y();let i=!1;function r(){const d=e.navigator.userAgent.toLowerCase();return d.indexOf("safari")>=0&&d.indexOf("chrome")<0&&d.indexOf("android")<0}if(r()){const d=String(e.navigator.userAgent);if(d.includes("Version/")){const[p,h]=d.split("Version/")[1].split(" ")[0].split(".").map(g=>Number(g));i=p<16||p===16&&h<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),l=r(),u=l||o&&t.ios;return{isSafari:i||l,needPerspectiveFix:i,need3dFix:u,isWebView:o}}function By(){return u0||(u0=iO()),u0}function aO(e){let{swiper:t,on:i,emit:r}=e;const o=Rt();let l=null,u=null;const d=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},p=()=>{!t||t.destroyed||!t.initialized||(l=new ResizeObserver(y=>{u=o.requestAnimationFrame(()=>{const{width:v,height:C}=t;let S=v,E=C;y.forEach(O=>{let{contentBoxSize:M,contentRect:T,target:j}=O;j&&j!==t.el||(S=T?T.width:(M[0]||M).inlineSize,E=T?T.height:(M[0]||M).blockSize)}),(S!==v||E!==C)&&d()})}),l.observe(t.el))},h=()=>{u&&o.cancelAnimationFrame(u),l&&l.unobserve&&t.el&&(l.unobserve(t.el),l=null)},g=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};i("init",()=>{if(t.params.resizeObserver&&typeof o.ResizeObserver<"u"){p();return}o.addEventListener("resize",d),o.addEventListener("orientationchange",g)}),i("destroy",()=>{h(),o.removeEventListener("resize",d),o.removeEventListener("orientationchange",g)})}function rO(e){let{swiper:t,extendParams:i,on:r,emit:o}=e;const l=[],u=Rt(),d=function(g,y){y===void 0&&(y={});const v=u.MutationObserver||u.WebkitMutationObserver,C=new v(S=>{if(t.__preventObserver__)return;if(S.length===1){o("observerUpdate",S[0]);return}const E=function(){o("observerUpdate",S[0])};u.requestAnimationFrame?u.requestAnimationFrame(E):u.setTimeout(E,0)});C.observe(g,{attributes:typeof y.attributes>"u"?!0:y.attributes,childList:t.isElement||(typeof y.childList>"u"?!0:y).childList,characterData:typeof y.characterData>"u"?!0:y.characterData}),l.push(C)},p=()=>{if(t.params.observer){if(t.params.observeParents){const g=Vy(t.hostEl);for(let y=0;y<g.length;y+=1)d(g[y])}d(t.hostEl,{childList:t.params.observeSlideChildren}),d(t.wrapperEl,{attributes:!1})}},h=()=>{l.forEach(g=>{g.disconnect()}),l.splice(0,l.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",p),r("destroy",h)}var sO={on(e,t,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const o=i?"unshift":"push";return e.split(" ").forEach(l=>{r.eventsListeners[l]||(r.eventsListeners[l]=[]),r.eventsListeners[l][o](t)}),r},once(e,t,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function o(){r.off(e,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];t.apply(r,u)}return o.__emitterProxy=t,r.on(e,o,i)},onAny(e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const r=t?"unshift":"push";return i.eventsAnyListeners.indexOf(e)<0&&i.eventsAnyListeners[r](e),i},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const i=t.eventsAnyListeners.indexOf(e);return i>=0&&t.eventsAnyListeners.splice(i,1),t},off(e,t){const i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?i.eventsListeners[r]=[]:i.eventsListeners[r]&&i.eventsListeners[r].forEach((o,l)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&i.eventsListeners[r].splice(l,1)})}),i},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,i,r;for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return typeof l[0]=="string"||Array.isArray(l[0])?(t=l[0],i=l.slice(1,l.length),r=e):(t=l[0].events,i=l[0].data,r=l[0].context||e),i.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(p=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(h=>{h.apply(r,[p,...i])}),e.eventsListeners&&e.eventsListeners[p]&&e.eventsListeners[p].forEach(h=>{h.apply(r,i)})}),e}};function oO(){const e=this;let t,i;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?i=e.params.height:i=r.clientHeight,!(t===0&&e.isHorizontal()||i===0&&e.isVertical())&&(t=t-parseInt(_i(r,"padding-left")||0,10)-parseInt(_i(r,"padding-right")||0,10),i=i-parseInt(_i(r,"padding-top")||0,10)-parseInt(_i(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(i)&&(i=0),Object.assign(e,{width:t,height:i,size:e.isHorizontal()?t:i}))}function lO(){const e=this;function t(Y,W){return parseFloat(Y.getPropertyValue(e.getDirectionLabel(W))||0)}const i=e.params,{wrapperEl:r,slidesEl:o,size:l,rtlTranslate:u,wrongRTL:d}=e,p=e.virtual&&i.virtual.enabled,h=p?e.virtual.slides.length:e.slides.length,g=Pn(o,`.${e.params.slideClass}, swiper-slide`),y=p?e.virtual.slides.length:g.length;let v=[];const C=[],S=[];let E=i.slidesOffsetBefore;typeof E=="function"&&(E=i.slidesOffsetBefore.call(e));let O=i.slidesOffsetAfter;typeof O=="function"&&(O=i.slidesOffsetAfter.call(e));const M=e.snapGrid.length,T=e.slidesGrid.length;let j=i.spaceBetween,D=-E,L=0,$=0;if(typeof l>"u")return;typeof j=="string"&&j.indexOf("%")>=0?j=parseFloat(j.replace("%",""))/100*l:typeof j=="string"&&(j=parseFloat(j)),e.virtualSize=-j,g.forEach(Y=>{u?Y.style.marginLeft="":Y.style.marginRight="",Y.style.marginBottom="",Y.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(Ql(r,"--swiper-centered-offset-before",""),Ql(r,"--swiper-centered-offset-after",""));const V=i.grid&&i.grid.rows>1&&e.grid;V?e.grid.initSlides(g):e.grid&&e.grid.unsetSlides();let _;const q=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(Y=>typeof i.breakpoints[Y].slidesPerView<"u").length>0;for(let Y=0;Y<y;Y+=1){_=0;let W;if(g[Y]&&(W=g[Y]),V&&e.grid.updateSlide(Y,W,g),!(g[Y]&&_i(W,"display")==="none")){if(i.slidesPerView==="auto"){q&&(g[Y].style[e.getDirectionLabel("width")]="");const te=getComputedStyle(W),se=W.style.transform,ce=W.style.webkitTransform;if(se&&(W.style.transform="none"),ce&&(W.style.webkitTransform="none"),i.roundLengths)_=e.isHorizontal()?vp(W,"width"):vp(W,"height");else{const re=t(te,"width"),N=t(te,"padding-left"),X=t(te,"padding-right"),Q=t(te,"margin-left"),ee=t(te,"margin-right"),k=te.getPropertyValue("box-sizing");if(k&&k==="border-box")_=re+Q+ee;else{const{clientWidth:F,offsetWidth:ne}=W;_=re+N+X+Q+ee+(ne-F)}}se&&(W.style.transform=se),ce&&(W.style.webkitTransform=ce),i.roundLengths&&(_=Math.floor(_))}else _=(l-(i.slidesPerView-1)*j)/i.slidesPerView,i.roundLengths&&(_=Math.floor(_)),g[Y]&&(g[Y].style[e.getDirectionLabel("width")]=`${_}px`);g[Y]&&(g[Y].swiperSlideSize=_),S.push(_),i.centeredSlides?(D=D+_/2+L/2+j,L===0&&Y!==0&&(D=D-l/2-j),Y===0&&(D=D-l/2-j),Math.abs(D)<1/1e3&&(D=0),i.roundLengths&&(D=Math.floor(D)),$%i.slidesPerGroup===0&&v.push(D),C.push(D)):(i.roundLengths&&(D=Math.floor(D)),($-Math.min(e.params.slidesPerGroupSkip,$))%e.params.slidesPerGroup===0&&v.push(D),C.push(D),D=D+_+j),e.virtualSize+=_+j,L=_,$+=1}}if(e.virtualSize=Math.max(e.virtualSize,l)+O,u&&d&&(i.effect==="slide"||i.effect==="coverflow")&&(r.style.width=`${e.virtualSize+j}px`),i.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+j}px`),V&&e.grid.updateWrapperSize(_,v),!i.centeredSlides){const Y=[];for(let W=0;W<v.length;W+=1){let te=v[W];i.roundLengths&&(te=Math.floor(te)),v[W]<=e.virtualSize-l&&Y.push(te)}v=Y,Math.floor(e.virtualSize-l)-Math.floor(v[v.length-1])>1&&v.push(e.virtualSize-l)}if(p&&i.loop){const Y=S[0]+j;if(i.slidesPerGroup>1){const W=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/i.slidesPerGroup),te=Y*i.slidesPerGroup;for(let se=0;se<W;se+=1)v.push(v[v.length-1]+te)}for(let W=0;W<e.virtual.slidesBefore+e.virtual.slidesAfter;W+=1)i.slidesPerGroup===1&&v.push(v[v.length-1]+Y),C.push(C[C.length-1]+Y),e.virtualSize+=Y}if(v.length===0&&(v=[0]),j!==0){const Y=e.isHorizontal()&&u?"marginLeft":e.getDirectionLabel("marginRight");g.filter((W,te)=>!i.cssMode||i.loop?!0:te!==g.length-1).forEach(W=>{W.style[Y]=`${j}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let Y=0;S.forEach(te=>{Y+=te+(j||0)}),Y-=j;const W=Y>l?Y-l:0;v=v.map(te=>te<=0?-E:te>W?W+O:te)}if(i.centerInsufficientSlides){let Y=0;S.forEach(te=>{Y+=te+(j||0)}),Y-=j;const W=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(Y+W<l){const te=(l-Y-W)/2;v.forEach((se,ce)=>{v[ce]=se-te}),C.forEach((se,ce)=>{C[ce]=se+te})}}if(Object.assign(e,{slides:g,snapGrid:v,slidesGrid:C,slidesSizesGrid:S}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Ql(r,"--swiper-centered-offset-before",`${-v[0]}px`),Ql(r,"--swiper-centered-offset-after",`${e.size/2-S[S.length-1]/2}px`);const Y=-e.snapGrid[0],W=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(te=>te+Y),e.slidesGrid=e.slidesGrid.map(te=>te+W)}if(y!==h&&e.emit("slidesLengthChange"),v.length!==M&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),C.length!==T&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!p&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const Y=`${i.containerModifierClass}backface-hidden`,W=e.el.classList.contains(Y);y<=i.maxBackfaceHiddenSlides?W||e.el.classList.add(Y):W&&e.el.classList.remove(Y)}}function cO(e){const t=this,i=[],r=t.virtual&&t.params.virtual.enabled;let o=0,l;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const u=d=>r?t.slides[t.getSlideIndexByData(d)]:t.slides[d];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(d=>{i.push(d)});else for(l=0;l<Math.ceil(t.params.slidesPerView);l+=1){const d=t.activeIndex+l;if(d>t.slides.length&&!r)break;i.push(u(d))}else i.push(u(t.activeIndex));for(l=0;l<i.length;l+=1)if(typeof i[l]<"u"){const d=i[l].offsetHeight;o=d>o?d:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function uO(){const e=this,t=e.slides,i=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-i-e.cssOverflowAdjustment()}const wx=(e,t,i)=>{t&&!e.classList.contains(i)?e.classList.add(i):!t&&e.classList.contains(i)&&e.classList.remove(i)};function dO(e){e===void 0&&(e=this&&this.translate||0);const t=this,i=t.params,{slides:r,rtlTranslate:o,snapGrid:l}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let u=-e;o&&(u=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let d=i.spaceBetween;typeof d=="string"&&d.indexOf("%")>=0?d=parseFloat(d.replace("%",""))/100*t.size:typeof d=="string"&&(d=parseFloat(d));for(let p=0;p<r.length;p+=1){const h=r[p];let g=h.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(g-=r[0].swiperSlideOffset);const y=(u+(i.centeredSlides?t.minTranslate():0)-g)/(h.swiperSlideSize+d),v=(u-l[0]+(i.centeredSlides?t.minTranslate():0)-g)/(h.swiperSlideSize+d),C=-(u-g),S=C+t.slidesSizesGrid[p],E=C>=0&&C<=t.size-t.slidesSizesGrid[p],O=C>=0&&C<t.size-1||S>1&&S<=t.size||C<=0&&S>=t.size;O&&(t.visibleSlides.push(h),t.visibleSlidesIndexes.push(p)),wx(h,O,i.slideVisibleClass),wx(h,E,i.slideFullyVisibleClass),h.progress=o?-y:y,h.originalProgress=o?-v:v}}function fO(e){const t=this;if(typeof e>"u"){const g=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*g||0}const i=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:l,isEnd:u,progressLoop:d}=t;const p=l,h=u;if(r===0)o=0,l=!0,u=!0;else{o=(e-t.minTranslate())/r;const g=Math.abs(e-t.minTranslate())<1,y=Math.abs(e-t.maxTranslate())<1;l=g||o<=0,u=y||o>=1,g&&(o=0),y&&(o=1)}if(i.loop){const g=t.getSlideIndexByData(0),y=t.getSlideIndexByData(t.slides.length-1),v=t.slidesGrid[g],C=t.slidesGrid[y],S=t.slidesGrid[t.slidesGrid.length-1],E=Math.abs(e);E>=v?d=(E-v)/S:d=(E+S-C)/S,d>1&&(d-=1)}Object.assign(t,{progress:o,progressLoop:d,isBeginning:l,isEnd:u}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),l&&!p&&t.emit("reachBeginning toEdge"),u&&!h&&t.emit("reachEnd toEdge"),(p&&!l||h&&!u)&&t.emit("fromEdge"),t.emit("progress",o)}const d0=(e,t,i)=>{t&&!e.classList.contains(i)?e.classList.add(i):!t&&e.classList.contains(i)&&e.classList.remove(i)};function pO(){const e=this,{slides:t,params:i,slidesEl:r,activeIndex:o}=e,l=e.virtual&&i.virtual.enabled,u=e.grid&&i.grid&&i.grid.rows>1,d=y=>Pn(r,`.${i.slideClass}${y}, swiper-slide${y}`)[0];let p,h,g;if(l)if(i.loop){let y=o-e.virtual.slidesBefore;y<0&&(y=e.virtual.slides.length+y),y>=e.virtual.slides.length&&(y-=e.virtual.slides.length),p=d(`[data-swiper-slide-index="${y}"]`)}else p=d(`[data-swiper-slide-index="${o}"]`);else u?(p=t.find(y=>y.column===o),g=t.find(y=>y.column===o+1),h=t.find(y=>y.column===o-1)):p=t[o];p&&(u||(g=JL(p,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!g&&(g=t[0]),h=QL(p,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!h===0&&(h=t[t.length-1]))),t.forEach(y=>{d0(y,y===p,i.slideActiveClass),d0(y,y===g,i.slideNextClass),d0(y,y===h,i.slidePrevClass)}),e.emitSlidesClasses()}const Sc=(e,t)=>{if(!e||e.destroyed||!e.params)return;const i=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(i());if(r){let o=r.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(r.shadowRoot?o=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(o=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},f0=(e,t)=>{if(!e.slides[t])return;const i=e.slides[t].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},wp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const i=e.slides.length;if(!i||!t||t<0)return;t=Math.min(t,i);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const u=o,d=[u-t];d.push(...Array.from({length:t}).map((p,h)=>u+r+h)),e.slides.forEach((p,h)=>{d.includes(p.column)&&f0(e,h)});return}const l=o+r-1;if(e.params.rewind||e.params.loop)for(let u=o-t;u<=l+t;u+=1){const d=(u%i+i)%i;(d<o||d>l)&&f0(e,d)}else for(let u=Math.max(o-t,0);u<=Math.min(l+t,i-1);u+=1)u!==o&&(u>l||u<o)&&f0(e,u)};function hO(e){const{slidesGrid:t,params:i}=e,r=e.rtlTranslate?e.translate:-e.translate;let o;for(let l=0;l<t.length;l+=1)typeof t[l+1]<"u"?r>=t[l]&&r<t[l+1]-(t[l+1]-t[l])/2?o=l:r>=t[l]&&r<t[l+1]&&(o=l+1):r>=t[l]&&(o=l);return i.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function mO(e){const t=this,i=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:o,activeIndex:l,realIndex:u,snapIndex:d}=t;let p=e,h;const g=C=>{let S=C-t.virtual.slidesBefore;return S<0&&(S=t.virtual.slides.length+S),S>=t.virtual.slides.length&&(S-=t.virtual.slides.length),S};if(typeof p>"u"&&(p=hO(t)),r.indexOf(i)>=0)h=r.indexOf(i);else{const C=Math.min(o.slidesPerGroupSkip,p);h=C+Math.floor((p-C)/o.slidesPerGroup)}if(h>=r.length&&(h=r.length-1),p===l&&!t.params.loop){h!==d&&(t.snapIndex=h,t.emit("snapIndexChange"));return}if(p===l&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=g(p);return}const y=t.grid&&o.grid&&o.grid.rows>1;let v;if(t.virtual&&o.virtual.enabled&&o.loop)v=g(p);else if(y){const C=t.slides.find(E=>E.column===p);let S=parseInt(C.getAttribute("data-swiper-slide-index"),10);Number.isNaN(S)&&(S=Math.max(t.slides.indexOf(C),0)),v=Math.floor(S/o.grid.rows)}else if(t.slides[p]){const C=t.slides[p].getAttribute("data-swiper-slide-index");C?v=parseInt(C,10):v=p}else v=p;Object.assign(t,{previousSnapIndex:d,snapIndex:h,previousRealIndex:u,realIndex:v,previousIndex:l,activeIndex:p}),t.initialized&&wp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(u!==v&&t.emit("realIndexChange"),t.emit("slideChange"))}function gO(e,t){const i=this,r=i.params;let o=e.closest(`.${r.slideClass}, swiper-slide`);!o&&i.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(d=>{!o&&d.matches&&d.matches(`.${r.slideClass}, swiper-slide`)&&(o=d)});let l=!1,u;if(o){for(let d=0;d<i.slides.length;d+=1)if(i.slides[d]===o){l=!0,u=d;break}}if(o&&l)i.clickedSlide=o,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=u;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}r.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var xO={updateSize:oO,updateSlides:lO,updateAutoHeight:cO,updateSlidesOffset:uO,updateSlidesProgress:dO,updateProgress:fO,updateSlidesClasses:pO,updateActiveIndex:mO,updateClickedSlide:gO};function yO(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:i,rtlTranslate:r,translate:o,wrapperEl:l}=t;if(i.virtualTranslate)return r?-o:o;if(i.cssMode)return o;let u=ZL(l,e);return u+=t.cssOverflowAdjustment(),r&&(u=-u),u||0}function vO(e,t){const i=this,{rtlTranslate:r,params:o,wrapperEl:l,progress:u}=i;let d=0,p=0;const h=0;i.isHorizontal()?d=r?-e:e:p=e,o.roundLengths&&(d=Math.floor(d),p=Math.floor(p)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?d:p,o.cssMode?l[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-d:-p:o.virtualTranslate||(i.isHorizontal()?d-=i.cssOverflowAdjustment():p-=i.cssOverflowAdjustment(),l.style.transform=`translate3d(${d}px, ${p}px, ${h}px)`);let g;const y=i.maxTranslate()-i.minTranslate();y===0?g=0:g=(e-i.minTranslate())/y,g!==u&&i.updateProgress(e),i.emit("setTranslate",i.translate,t)}function wO(){return-this.snapGrid[0]}function bO(){return-this.snapGrid[this.snapGrid.length-1]}function SO(e,t,i,r,o){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),i===void 0&&(i=!0),r===void 0&&(r=!0);const l=this,{params:u,wrapperEl:d}=l;if(l.animating&&u.preventInteractionOnTransition)return!1;const p=l.minTranslate(),h=l.maxTranslate();let g;if(r&&e>p?g=p:r&&e<h?g=h:g=e,l.updateProgress(g),u.cssMode){const y=l.isHorizontal();if(t===0)d[y?"scrollLeft":"scrollTop"]=-g;else{if(!l.support.smoothScroll)return zy({swiper:l,targetPosition:-g,side:y?"left":"top"}),!0;d.scrollTo({[y?"left":"top"]:-g,behavior:"smooth"})}return!0}return t===0?(l.setTransition(0),l.setTranslate(g),i&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionEnd"))):(l.setTransition(t),l.setTranslate(g),i&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(v){!l||l.destroyed||v.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,i&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var CO={getTranslate:yO,setTranslate:vO,minTranslate:wO,maxTranslate:bO,translateTo:SO};function TO(e,t){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${e}ms`,i.wrapperEl.style.transitionDelay=e===0?"0ms":""),i.emit("setTransition",e,t)}function Uy(e){let{swiper:t,runCallbacks:i,direction:r,step:o}=e;const{activeIndex:l,previousIndex:u}=t;let d=r;d||(l>u?d="next":l<u?d="prev":d="reset"),t.emit(`transition${o}`),i&&d==="reset"?t.emit(`slideResetTransition${o}`):i&&l!==u&&(t.emit(`slideChangeTransition${o}`),d==="next"?t.emit(`slideNextTransition${o}`):t.emit(`slidePrevTransition${o}`))}function EO(e,t){e===void 0&&(e=!0);const i=this,{params:r}=i;r.cssMode||(r.autoHeight&&i.updateAutoHeight(),Uy({swiper:i,runCallbacks:e,direction:t,step:"Start"}))}function jO(e,t){e===void 0&&(e=!0);const i=this,{params:r}=i;i.animating=!1,!r.cssMode&&(i.setTransition(0),Uy({swiper:i,runCallbacks:e,direction:t,step:"End"}))}var AO={setTransition:TO,transitionStart:EO,transitionEnd:jO};function MO(e,t,i,r,o){e===void 0&&(e=0),i===void 0&&(i=!0),typeof e=="string"&&(e=parseInt(e,10));const l=this;let u=e;u<0&&(u=0);const{params:d,snapGrid:p,slidesGrid:h,previousIndex:g,activeIndex:y,rtlTranslate:v,wrapperEl:C,enabled:S}=l;if(!S&&!r&&!o||l.destroyed||l.animating&&d.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=l.params.speed);const E=Math.min(l.params.slidesPerGroupSkip,u);let O=E+Math.floor((u-E)/l.params.slidesPerGroup);O>=p.length&&(O=p.length-1);const M=-p[O];if(d.normalizeSlideIndex)for(let V=0;V<h.length;V+=1){const _=-Math.floor(M*100),q=Math.floor(h[V]*100),Y=Math.floor(h[V+1]*100);typeof h[V+1]<"u"?_>=q&&_<Y-(Y-q)/2?u=V:_>=q&&_<Y&&(u=V+1):_>=q&&(u=V)}if(l.initialized&&u!==y&&(!l.allowSlideNext&&(v?M>l.translate&&M>l.minTranslate():M<l.translate&&M<l.minTranslate())||!l.allowSlidePrev&&M>l.translate&&M>l.maxTranslate()&&(y||0)!==u))return!1;u!==(g||0)&&i&&l.emit("beforeSlideChangeStart"),l.updateProgress(M);let T;u>y?T="next":u<y?T="prev":T="reset";const j=l.virtual&&l.params.virtual.enabled;if(!(j&&o)&&(v&&-M===l.translate||!v&&M===l.translate))return l.updateActiveIndex(u),d.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),d.effect!=="slide"&&l.setTranslate(M),T!=="reset"&&(l.transitionStart(i,T),l.transitionEnd(i,T)),!1;if(d.cssMode){const V=l.isHorizontal(),_=v?M:-M;if(t===0)j&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),j&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{C[V?"scrollLeft":"scrollTop"]=_})):C[V?"scrollLeft":"scrollTop"]=_,j&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return zy({swiper:l,targetPosition:_,side:V?"left":"top"}),!0;C.scrollTo({[V?"left":"top"]:_,behavior:"smooth"})}return!0}const $=By().isSafari;return j&&!o&&$&&l.isElement&&l.virtual.update(!1,!1,u),l.setTransition(t),l.setTranslate(M),l.updateActiveIndex(u),l.updateSlidesClasses(),l.emit("beforeTransitionStart",t,r),l.transitionStart(i,T),t===0?l.transitionEnd(i,T):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(_){!l||l.destroyed||_.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(i,T))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function LO(e,t,i,r){e===void 0&&(e=0),i===void 0&&(i=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let u=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)u=u+o.virtual.slidesBefore;else{let d;if(l){const v=u*o.params.grid.rows;d=o.slides.find(C=>C.getAttribute("data-swiper-slide-index")*1===v).column}else d=o.getSlideIndexByData(u);const p=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:h}=o.params;let g=o.params.slidesPerView;g==="auto"?g=o.slidesPerViewDynamic():(g=Math.ceil(parseFloat(o.params.slidesPerView,10)),h&&g%2===0&&(g=g+1));let y=p-d<g;if(h&&(y=y||d<Math.ceil(g/2)),r&&h&&o.params.slidesPerView!=="auto"&&!l&&(y=!1),y){const v=h?d<o.activeIndex?"prev":"next":d-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?d+1:d-p+1,slideRealIndex:v==="next"?o.realIndex:void 0})}if(l){const v=u*o.params.grid.rows;u=o.slides.find(C=>C.getAttribute("data-swiper-slide-index")*1===v).column}else u=o.getSlideIndexByData(u)}return requestAnimationFrame(()=>{o.slideTo(u,t,i,r)}),o}function OO(e,t,i){t===void 0&&(t=!0);const r=this,{enabled:o,params:l,animating:u}=r;if(!o||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let d=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(d=Math.max(r.slidesPerViewDynamic("current",!0),1));const p=r.activeIndex<l.slidesPerGroupSkip?1:d,h=r.virtual&&l.virtual.enabled;if(l.loop){if(u&&!h&&l.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+p,e,t,i)}),!0}return l.rewind&&r.isEnd?r.slideTo(0,e,t,i):r.slideTo(r.activeIndex+p,e,t,i)}function RO(e,t,i){t===void 0&&(t=!0);const r=this,{params:o,snapGrid:l,slidesGrid:u,rtlTranslate:d,enabled:p,animating:h}=r;if(!p||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const g=r.virtual&&o.virtual.enabled;if(o.loop){if(h&&!g&&o.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const y=d?r.translate:-r.translate;function v(T){return T<0?-Math.floor(Math.abs(T)):Math.floor(T)}const C=v(y),S=l.map(T=>v(T)),E=o.freeMode&&o.freeMode.enabled;let O=l[S.indexOf(C)-1];if(typeof O>"u"&&(o.cssMode||E)){let T;l.forEach((j,D)=>{C>=j&&(T=D)}),typeof T<"u"&&(O=E?l[T]:l[T>0?T-1:T])}let M=0;if(typeof O<"u"&&(M=u.indexOf(O),M<0&&(M=r.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(M=M-r.slidesPerViewDynamic("previous",!0)+1,M=Math.max(M,0))),o.rewind&&r.isBeginning){const T=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(T,e,t,i)}else if(o.loop&&r.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(M,e,t,i)}),!0;return r.slideTo(M,e,t,i)}function kO(e,t,i){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,i)}function DO(e,t,i,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let l=o.activeIndex;const u=Math.min(o.params.slidesPerGroupSkip,l),d=u+Math.floor((l-u)/o.params.slidesPerGroup),p=o.rtlTranslate?o.translate:-o.translate;if(p>=o.snapGrid[d]){const h=o.snapGrid[d],g=o.snapGrid[d+1];p-h>(g-h)*r&&(l+=o.params.slidesPerGroup)}else{const h=o.snapGrid[d-1],g=o.snapGrid[d];p-h<=(g-h)*r&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,e,t,i)}function HO(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:i}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(e.clickedIndex),l;const u=e.isElement?"swiper-slide":`.${t.slideClass}`,d=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;l=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(l):o>(d?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),o=e.getSlideIndex(Pn(i,`${u}[data-swiper-slide-index="${l}"]`)[0]),Hy(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var zO={slideTo:MO,slideToLoop:LO,slideNext:OO,slidePrev:RO,slideReset:kO,slideToClosest:DO,slideToClickedSlide:HO};function VO(e,t){const i=this,{params:r,slidesEl:o}=i;if(!r.loop||i.virtual&&i.params.virtual.enabled)return;const l=()=>{Pn(o,`.${r.slideClass}, swiper-slide`).forEach((C,S)=>{C.setAttribute("data-swiper-slide-index",S)})},u=()=>{const v=Pn(o,`.${r.slideBlankClass}`);v.forEach(C=>{C.remove()}),v.length>0&&(i.recalcSlides(),i.updateSlides())},d=i.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||d)&&u();const p=r.slidesPerGroup*(d?r.grid.rows:1),h=i.slides.length%p!==0,g=d&&i.slides.length%r.grid.rows!==0,y=v=>{for(let C=0;C<v;C+=1){const S=i.isElement?zc("swiper-slide",[r.slideBlankClass]):zc("div",[r.slideClass,r.slideBlankClass]);i.slidesEl.append(S)}};if(h){if(r.loopAddBlankSlides){const v=p-i.slides.length%p;y(v),i.recalcSlides(),i.updateSlides()}else Hc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(g){if(r.loopAddBlankSlides){const v=r.grid.rows-i.slides.length%r.grid.rows;y(v),i.recalcSlides(),i.updateSlides()}else Hc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();i.loopFix({slideRealIndex:e,direction:r.centeredSlides?void 0:"next",initial:t})}function PO(e){let{slideRealIndex:t,slideTo:i=!0,direction:r,setTranslate:o,activeSlideIndex:l,initial:u,byController:d,byMousewheel:p}=e===void 0?{}:e;const h=this;if(!h.params.loop)return;h.emit("beforeLoopFix");const{slides:g,allowSlidePrev:y,allowSlideNext:v,slidesEl:C,params:S}=h,{centeredSlides:E,initialSlide:O}=S;if(h.allowSlidePrev=!0,h.allowSlideNext=!0,h.virtual&&S.virtual.enabled){i&&(!S.centeredSlides&&h.snapIndex===0?h.slideTo(h.virtual.slides.length,0,!1,!0):S.centeredSlides&&h.snapIndex<S.slidesPerView?h.slideTo(h.virtual.slides.length+h.snapIndex,0,!1,!0):h.snapIndex===h.snapGrid.length-1&&h.slideTo(h.virtual.slidesBefore,0,!1,!0)),h.allowSlidePrev=y,h.allowSlideNext=v,h.emit("loopFix");return}let M=S.slidesPerView;M==="auto"?M=h.slidesPerViewDynamic():(M=Math.ceil(parseFloat(S.slidesPerView,10)),E&&M%2===0&&(M=M+1));const T=S.slidesPerGroupAuto?M:S.slidesPerGroup;let j=E?Math.max(T,Math.ceil(M/2)):T;j%T!==0&&(j+=T-j%T),j+=S.loopAdditionalSlides,h.loopedSlides=j;const D=h.grid&&S.grid&&S.grid.rows>1;g.length<M+j||h.params.effect==="cards"&&g.length<M+j*2?Hc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):D&&S.grid.fill==="row"&&Hc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const L=[],$=[],V=D?Math.ceil(g.length/S.grid.rows):g.length,_=u&&V-O<M&&!E;let q=_?O:h.activeIndex;typeof l>"u"?l=h.getSlideIndex(g.find(N=>N.classList.contains(S.slideActiveClass))):q=l;const Y=r==="next"||!r,W=r==="prev"||!r;let te=0,se=0;const re=(D?g[l].column:l)+(E&&typeof o>"u"?-M/2+.5:0);if(re<j){te=Math.max(j-re,T);for(let N=0;N<j-re;N+=1){const X=N-Math.floor(N/V)*V;if(D){const Q=V-X-1;for(let ee=g.length-1;ee>=0;ee-=1)g[ee].column===Q&&L.push(ee)}else L.push(V-X-1)}}else if(re+M>V-j){se=Math.max(re-(V-j*2),T),_&&(se=Math.max(se,M-V+O+1));for(let N=0;N<se;N+=1){const X=N-Math.floor(N/V)*V;D?g.forEach((Q,ee)=>{Q.column===X&&$.push(ee)}):$.push(X)}}if(h.__preventObserver__=!0,requestAnimationFrame(()=>{h.__preventObserver__=!1}),h.params.effect==="cards"&&g.length<M+j*2&&($.includes(l)&&$.splice($.indexOf(l),1),L.includes(l)&&L.splice(L.indexOf(l),1)),W&&L.forEach(N=>{g[N].swiperLoopMoveDOM=!0,C.prepend(g[N]),g[N].swiperLoopMoveDOM=!1}),Y&&$.forEach(N=>{g[N].swiperLoopMoveDOM=!0,C.append(g[N]),g[N].swiperLoopMoveDOM=!1}),h.recalcSlides(),S.slidesPerView==="auto"?h.updateSlides():D&&(L.length>0&&W||$.length>0&&Y)&&h.slides.forEach((N,X)=>{h.grid.updateSlide(X,N,h.slides)}),S.watchSlidesProgress&&h.updateSlidesOffset(),i){if(L.length>0&&W){if(typeof t>"u"){const N=h.slidesGrid[q],Q=h.slidesGrid[q+te]-N;p?h.setTranslate(h.translate-Q):(h.slideTo(q+Math.ceil(te),0,!1,!0),o&&(h.touchEventsData.startTranslate=h.touchEventsData.startTranslate-Q,h.touchEventsData.currentTranslate=h.touchEventsData.currentTranslate-Q))}else if(o){const N=D?L.length/S.grid.rows:L.length;h.slideTo(h.activeIndex+N,0,!1,!0),h.touchEventsData.currentTranslate=h.translate}}else if($.length>0&&Y)if(typeof t>"u"){const N=h.slidesGrid[q],Q=h.slidesGrid[q-se]-N;p?h.setTranslate(h.translate-Q):(h.slideTo(q-se,0,!1,!0),o&&(h.touchEventsData.startTranslate=h.touchEventsData.startTranslate-Q,h.touchEventsData.currentTranslate=h.touchEventsData.currentTranslate-Q))}else{const N=D?$.length/S.grid.rows:$.length;h.slideTo(h.activeIndex-N,0,!1,!0)}}if(h.allowSlidePrev=y,h.allowSlideNext=v,h.controller&&h.controller.control&&!d){const N={slideRealIndex:t,direction:r,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(h.controller.control)?h.controller.control.forEach(X=>{!X.destroyed&&X.params.loop&&X.loopFix({...N,slideTo:X.params.slidesPerView===S.slidesPerView?i:!1})}):h.controller.control instanceof h.constructor&&h.controller.control.params.loop&&h.controller.control.loopFix({...N,slideTo:h.controller.control.params.slidesPerView===S.slidesPerView?i:!1})}h.emit("loopFix")}function NO(){const e=this,{params:t,slidesEl:i}=e;if(!t.loop||!i||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;r[l]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),r.forEach(o=>{i.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var $O={loopCreate:VO,loopFix:PO,loopDestroy:NO};function BO(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const i=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function UO(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var _O={setGrabCursor:BO,unsetGrabCursor:UO};function IO(e,t){t===void 0&&(t=this);function i(r){if(!r||r===In()||r===Rt())return null;r.assignedSlot&&(r=r.assignedSlot);const o=r.closest(e);return!o&&!r.getRootNode?null:o||i(r.getRootNode().host)}return i(t)}function bx(e,t,i){const r=Rt(),{params:o}=e,l=o.edgeSwipeDetection,u=o.edgeSwipeThreshold;return l&&(i<=u||i>=r.innerWidth-u)?l==="prevent"?(t.preventDefault(),!0):!1:!0}function GO(e){const t=this,i=In();let r=e;r.originalEvent&&(r=r.originalEvent);const o=t.touchEventsData;if(r.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==r.pointerId)return;o.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(o.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){bx(t,r,r.targetTouches[0].pageX);return}const{params:l,touches:u,enabled:d}=t;if(!d||!l.simulateTouch&&r.pointerType==="mouse"||t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=r.target;if(l.touchEventsTarget==="wrapper"&&!KL(p,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||o.isTouched&&o.isMoved)return;const h=!!l.noSwipingClass&&l.noSwipingClass!=="",g=r.composedPath?r.composedPath():r.path;h&&r.target&&r.target.shadowRoot&&g&&(p=g[0]);const y=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(l.noSwiping&&(v?IO(y,p):p.closest(y))){t.allowClick=!0;return}if(l.swipeHandler&&!p.closest(l.swipeHandler))return;u.currentX=r.pageX,u.currentY=r.pageY;const C=u.currentX,S=u.currentY;if(!bx(t,r,C))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=C,u.startY=S,o.touchStartTime=Dc(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let E=!0;p.matches(o.focusableElements)&&(E=!1,p.nodeName==="SELECT"&&(o.isTouched=!1)),i.activeElement&&i.activeElement.matches(o.focusableElements)&&i.activeElement!==p&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!p.matches(o.focusableElements))&&i.activeElement.blur();const O=E&&t.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||O)&&!p.isContentEditable&&r.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function qO(e){const t=In(),i=this,r=i.touchEventsData,{params:o,touches:l,rtlTranslate:u,enabled:d}=i;if(!d||!o.simulateTouch&&e.pointerType==="mouse")return;let p=e;if(p.originalEvent&&(p=p.originalEvent),p.type==="pointermove"&&(r.touchId!==null||p.pointerId!==r.pointerId))return;let h;if(p.type==="touchmove"){if(h=[...p.changedTouches].find(L=>L.identifier===r.touchId),!h||h.identifier!==r.touchId)return}else h=p;if(!r.isTouched){r.startMoving&&r.isScrolling&&i.emit("touchMoveOpposite",p);return}const g=h.pageX,y=h.pageY;if(p.preventedByNestedSwiper){l.startX=g,l.startY=y;return}if(!i.allowTouchMove){p.target.matches(r.focusableElements)||(i.allowClick=!1),r.isTouched&&(Object.assign(l,{startX:g,startY:y,currentX:g,currentY:y}),r.touchStartTime=Dc());return}if(o.touchReleaseOnEdges&&!o.loop)if(i.isVertical()){if(y<l.startY&&i.translate<=i.maxTranslate()||y>l.startY&&i.translate>=i.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(u&&(g>l.startX&&-i.translate<=i.maxTranslate()||g<l.startX&&-i.translate>=i.minTranslate()))return;if(!u&&(g<l.startX&&i.translate<=i.maxTranslate()||g>l.startX&&i.translate>=i.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==p.target&&p.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&p.target===t.activeElement&&p.target.matches(r.focusableElements)){r.isMoved=!0,i.allowClick=!1;return}r.allowTouchCallbacks&&i.emit("touchMove",p),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=g,l.currentY=y;const v=l.currentX-l.startX,C=l.currentY-l.startY;if(i.params.threshold&&Math.sqrt(v**2+C**2)<i.params.threshold)return;if(typeof r.isScrolling>"u"){let L;i.isHorizontal()&&l.currentY===l.startY||i.isVertical()&&l.currentX===l.startX?r.isScrolling=!1:v*v+C*C>=25&&(L=Math.atan2(Math.abs(C),Math.abs(v))*180/Math.PI,r.isScrolling=i.isHorizontal()?L>o.touchAngle:90-L>o.touchAngle)}if(r.isScrolling&&i.emit("touchMoveOpposite",p),typeof r.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(r.startMoving=!0),r.isScrolling||p.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;i.allowClick=!1,!o.cssMode&&p.cancelable&&p.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&p.stopPropagation();let S=i.isHorizontal()?v:C,E=i.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(S=Math.abs(S)*(u?1:-1),E=Math.abs(E)*(u?1:-1)),l.diff=S,S*=o.touchRatio,u&&(S=-S,E=-E);const O=i.touchesDirection;i.swipeDirection=S>0?"prev":"next",i.touchesDirection=E>0?"prev":"next";const M=i.params.loop&&!o.cssMode,T=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!r.isMoved){if(M&&T&&i.loopFix({direction:i.swipeDirection}),r.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const L=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(L)}r.allowMomentumBounce=!1,o.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",p)}if(new Date().getTime(),o._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&O!==i.touchesDirection&&M&&T&&Math.abs(S)>=1){Object.assign(l,{startX:g,startY:y,currentX:g,currentY:y,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}i.emit("sliderMove",p),r.isMoved=!0,r.currentTranslate=S+r.startTranslate;let j=!0,D=o.resistanceRatio;if(o.touchReleaseOnEdges&&(D=0),S>0?(M&&T&&r.allowThresholdMove&&r.currentTranslate>(o.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>i.minTranslate()&&(j=!1,o.resistance&&(r.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+r.startTranslate+S)**D))):S<0&&(M&&T&&r.allowThresholdMove&&r.currentTranslate<(o.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(o.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),r.currentTranslate<i.maxTranslate()&&(j=!1,o.resistance&&(r.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-r.startTranslate-S)**D))),j&&(p.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(r.currentTranslate=r.startTranslate),o.threshold>0)if(Math.abs(S)>o.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,r.currentTranslate=r.startTranslate,l.diff=i.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{r.currentTranslate=r.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&i.freeMode||o.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(r.currentTranslate),i.setTranslate(r.currentTranslate))}function YO(e){const t=this,i=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let o;if(r.type==="touchend"||r.type==="touchcancel"){if(o=[...r.changedTouches].find(L=>L.identifier===i.touchId),!o||o.identifier!==i.touchId)return}else{if(i.touchId!==null||r.pointerId!==i.pointerId)return;o=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;i.pointerId=null,i.touchId=null;const{params:u,touches:d,rtlTranslate:p,slidesGrid:h,enabled:g}=t;if(!g||!u.simulateTouch&&r.pointerType==="mouse")return;if(i.allowTouchCallbacks&&t.emit("touchEnd",r),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&u.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}u.grabCursor&&i.isMoved&&i.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const y=Dc(),v=y-i.touchStartTime;if(t.allowClick){const L=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(L&&L[0]||r.target,L),t.emit("tap click",r),v<300&&y-i.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(i.lastClickTime=Dc(),Hy(()=>{t.destroyed||(t.allowClick=!0)}),!i.isTouched||!i.isMoved||!t.swipeDirection||d.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let C;if(u.followFinger?C=p?t.translate:-t.translate:C=-i.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:C});return}const S=C>=-t.maxTranslate()&&!t.params.loop;let E=0,O=t.slidesSizesGrid[0];for(let L=0;L<h.length;L+=L<u.slidesPerGroupSkip?1:u.slidesPerGroup){const $=L<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof h[L+$]<"u"?(S||C>=h[L]&&C<h[L+$])&&(E=L,O=h[L+$]-h[L]):(S||C>=h[L])&&(E=L,O=h[h.length-1]-h[h.length-2])}let M=null,T=null;u.rewind&&(t.isBeginning?T=u.virtual&&u.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(M=0));const j=(C-h[E])/O,D=E<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(v>u.longSwipesMs){if(!u.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(j>=u.longSwipesRatio?t.slideTo(u.rewind&&t.isEnd?M:E+D):t.slideTo(E)),t.swipeDirection==="prev"&&(j>1-u.longSwipesRatio?t.slideTo(E+D):T!==null&&j<0&&Math.abs(j)>u.longSwipesRatio?t.slideTo(T):t.slideTo(E))}else{if(!u.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(E+D):t.slideTo(E):(t.swipeDirection==="next"&&t.slideTo(M!==null?M:E+D),t.swipeDirection==="prev"&&t.slideTo(T!==null?T:E))}}function Sx(){const e=this,{params:t,el:i}=e;if(i&&i.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:o,snapGrid:l}=e,u=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const d=u&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!d?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!u?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=r,e.params.watchOverflow&&l!==e.snapGrid&&e.checkOverflow()}function FO(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function ZO(){const e=this,{wrapperEl:t,rtlTranslate:i,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const l=e.maxTranslate()-e.minTranslate();l===0?o=0:o=(e.translate-e.minTranslate())/l,o!==e.progress&&e.updateProgress(i?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function XO(e){const t=this;Sc(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function WO(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const _y=(e,t)=>{const i=In(),{params:r,el:o,wrapperEl:l,device:u}=e,d=!!r.nested,p=t==="on"?"addEventListener":"removeEventListener",h=t;!o||typeof o=="string"||(i[p]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:d}),o[p]("touchstart",e.onTouchStart,{passive:!1}),o[p]("pointerdown",e.onTouchStart,{passive:!1}),i[p]("touchmove",e.onTouchMove,{passive:!1,capture:d}),i[p]("pointermove",e.onTouchMove,{passive:!1,capture:d}),i[p]("touchend",e.onTouchEnd,{passive:!0}),i[p]("pointerup",e.onTouchEnd,{passive:!0}),i[p]("pointercancel",e.onTouchEnd,{passive:!0}),i[p]("touchcancel",e.onTouchEnd,{passive:!0}),i[p]("pointerout",e.onTouchEnd,{passive:!0}),i[p]("pointerleave",e.onTouchEnd,{passive:!0}),i[p]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&o[p]("click",e.onClick,!0),r.cssMode&&l[p]("scroll",e.onScroll),r.updateOnWindowResize?e[h](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",Sx,!0):e[h]("observerUpdate",Sx,!0),o[p]("load",e.onLoad,{capture:!0}))};function KO(){const e=this,{params:t}=e;e.onTouchStart=GO.bind(e),e.onTouchMove=qO.bind(e),e.onTouchEnd=YO.bind(e),e.onDocumentTouchStart=WO.bind(e),t.cssMode&&(e.onScroll=ZO.bind(e)),e.onClick=FO.bind(e),e.onLoad=XO.bind(e),_y(e,"on")}function QO(){_y(this,"off")}var JO={attachEvents:KO,detachEvents:QO};const Cx=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function eR(){const e=this,{realIndex:t,initialized:i,params:r,el:o}=e,l=r.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const u=In(),d=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",p=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:u.querySelector(r.breakpointsBase),h=e.getBreakpoint(l,d,p);if(!h||e.currentBreakpoint===h)return;const y=(h in l?l[h]:void 0)||e.originalParams,v=Cx(e,r),C=Cx(e,y),S=e.params.grabCursor,E=y.grabCursor,O=r.enabled;v&&!C?(o.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!v&&C&&(o.classList.add(`${r.containerModifierClass}grid`),(y.grid.fill&&y.grid.fill==="column"||!y.grid.fill&&r.grid.fill==="column")&&o.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),S&&!E?e.unsetGrabCursor():!S&&E&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach($=>{if(typeof y[$]>"u")return;const V=r[$]&&r[$].enabled,_=y[$]&&y[$].enabled;V&&!_&&e[$].disable(),!V&&_&&e[$].enable()});const M=y.direction&&y.direction!==r.direction,T=r.loop&&(y.slidesPerView!==r.slidesPerView||M),j=r.loop;M&&i&&e.changeDirection(),en(e.params,y);const D=e.params.enabled,L=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),O&&!D?e.disable():!O&&D&&e.enable(),e.currentBreakpoint=h,e.emit("_beforeBreakpoint",y),i&&(T?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!j&&L?(e.loopCreate(t),e.updateSlides()):j&&!L&&e.loopDestroy()),e.emit("breakpoint",y)}function tR(e,t,i){if(t===void 0&&(t="window"),!e||t==="container"&&!i)return;let r=!1;const o=Rt(),l=t==="window"?o.innerHeight:i.clientHeight,u=Object.keys(e).map(d=>{if(typeof d=="string"&&d.indexOf("@")===0){const p=parseFloat(d.substr(1));return{value:l*p,point:d}}return{value:d,point:d}});u.sort((d,p)=>parseInt(d.value,10)-parseInt(p.value,10));for(let d=0;d<u.length;d+=1){const{point:p,value:h}=u[d];t==="window"?o.matchMedia(`(min-width: ${h}px)`).matches&&(r=p):h<=i.clientWidth&&(r=p)}return r||"max"}var nR={setBreakpoint:eR,getBreakpoint:tR};function iR(e,t){const i=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(o=>{r[o]&&i.push(t+o)}):typeof r=="string"&&i.push(t+r)}),i}function aR(){const e=this,{classNames:t,params:i,rtl:r,el:o,device:l}=e,u=iR(["initialized",i.direction,{"free-mode":e.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:r},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);t.push(...u),o.classList.add(...t),e.emitContainerClasses()}function rR(){const e=this,{el:t,classNames:i}=e;!t||typeof t=="string"||(t.classList.remove(...i),e.emitContainerClasses())}var sR={addClasses:aR,removeClasses:rR};function oR(){const e=this,{isLocked:t,params:i}=e,{slidesOffsetBefore:r}=i;if(r){const o=e.slides.length-1,l=e.slidesGrid[o]+e.slidesSizesGrid[o]+r*2;e.isLocked=e.size>l}else e.isLocked=e.snapGrid.length===1;i.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),i.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var lR={checkOverflow:oR},bp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function cR(e,t){return function(r){r===void 0&&(r={});const o=Object.keys(r)[0],l=r[o];if(typeof l!="object"||l===null){en(t,r);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in l)){en(t,r);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),en(t,r)}}const p0={eventsEmitter:sO,update:xO,translate:CO,transition:AO,slide:zO,loop:$O,grabCursor:_O,events:JO,breakpoints:nR,checkOverflow:lR,classes:sR},h0={};let D1=class li{constructor(){let t,i;for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?i=o[0]:[t,i]=o,i||(i={}),i=en({},i),t&&!i.el&&(i.el=t);const u=In();if(i.el&&typeof i.el=="string"&&u.querySelectorAll(i.el).length>1){const g=[];return u.querySelectorAll(i.el).forEach(y=>{const v=en({},i,{el:y});g.push(new li(v))}),g}const d=this;d.__swiper__=!0,d.support=Ny(),d.device=$y({userAgent:i.userAgent}),d.browser=By(),d.eventsListeners={},d.eventsAnyListeners=[],d.modules=[...d.__modules__],i.modules&&Array.isArray(i.modules)&&d.modules.push(...i.modules);const p={};d.modules.forEach(g=>{g({params:i,swiper:d,extendParams:cR(i,p),on:d.on.bind(d),once:d.once.bind(d),off:d.off.bind(d),emit:d.emit.bind(d)})});const h=en({},bp,p);return d.params=en({},h,h0,i),d.originalParams=en({},d.params),d.passedParams=en({},i),d.params&&d.params.on&&Object.keys(d.params.on).forEach(g=>{d.on(g,d.params.on[g])}),d.params&&d.params.onAny&&d.onAny(d.params.onAny),Object.assign(d,{enabled:d.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return d.params.direction==="horizontal"},isVertical(){return d.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:d.params.allowSlideNext,allowSlidePrev:d.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:d.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:d.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),d.emit("_swiper"),d.params.init&&d.init(),d}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:i,params:r}=this,o=Pn(i,`.${r.slideClass}, swiper-slide`),l=Vc(o[0]);return Vc(t)-l}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(i=>i.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:i,params:r}=t;t.slides=Pn(i,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,i){const r=this;t=Math.min(Math.max(t,0),1);const o=r.minTranslate(),u=(r.maxTranslate()-o)*t+o;r.translateTo(u,typeof i>"u"?0:i),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const i=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",i.join(" "))}getSlideClasses(t){const i=this;return i.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const i=[];t.slides.forEach(r=>{const o=t.getSlideClasses(r);i.push({slideEl:r,classNames:o}),t.emit("_slideClass",r,o)}),t.emit("_slideClasses",i)}slidesPerViewDynamic(t,i){t===void 0&&(t="current"),i===void 0&&(i=!1);const r=this,{params:o,slides:l,slidesGrid:u,slidesSizesGrid:d,size:p,activeIndex:h}=r;let g=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let y=l[h]?Math.ceil(l[h].swiperSlideSize):0,v;for(let C=h+1;C<l.length;C+=1)l[C]&&!v&&(y+=Math.ceil(l[C].swiperSlideSize),g+=1,y>p&&(v=!0));for(let C=h-1;C>=0;C-=1)l[C]&&!v&&(y+=l[C].swiperSlideSize,g+=1,y>p&&(v=!0))}else if(t==="current")for(let y=h+1;y<l.length;y+=1)(i?u[y]+d[y]-u[h]<p:u[y]-u[h]<p)&&(g+=1);else for(let y=h-1;y>=0;y-=1)u[h]-u[y]<p&&(g+=1);return g}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:i,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&Sc(t,u)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const u=t.rtlTranslate?t.translate*-1:t.translate,d=Math.min(Math.max(u,t.maxTranslate()),t.minTranslate());t.setTranslate(d),t.updateActiveIndex(),t.updateSlidesClasses()}let l;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)o(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const u=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;l=t.slideTo(u.length-1,0,!1,!0)}else l=t.slideTo(t.activeIndex,0,!1,!0);l||o()}r.watchOverflow&&i!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,i){i===void 0&&(i=!0);const r=this,o=r.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${o}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(l=>{t==="vertical"?l.style.width="":l.style.height=""}),r.emit("changeDirection"),i&&r.update()),r}changeLanguageDirection(t){const i=this;i.rtl&&t==="rtl"||!i.rtl&&t==="ltr"||(i.rtl=t==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(t){const i=this;if(i.mounted)return!0;let r=t||i.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=i,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const o=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(o()):Pn(r,o())[0];return!u&&i.params.createElements&&(u=zc("div",i.params.wrapperClass),r.append(u),Pn(r,`.${i.params.slideClass}`).forEach(d=>{u.append(d)})),Object.assign(i,{el:r,wrapperEl:u,slidesEl:i.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:u,hostEl:i.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||_i(r,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||_i(r,"direction")==="rtl"),wrongRTL:_i(u,"display")==="-webkit-box"}),!0}init(t){const i=this;if(i.initialized||i.mount(t)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(void 0,!0),i.attachEvents();const o=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&o.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?Sc(i,l):l.addEventListener("load",u=>{Sc(i,u.target)})}),wp(i),i.initialized=!0,wp(i),i.emit("init"),i.emit("afterInit"),i}destroy(t,i){t===void 0&&(t=!0),i===void 0&&(i=!0);const r=this,{params:o,el:l,wrapperEl:u,slides:d}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),o.loop&&r.loopDestroy(),i&&(r.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),u&&u.removeAttribute("style"),d&&d.length&&d.forEach(p=>{p.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),p.removeAttribute("style"),p.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(p=>{r.off(p)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),YL(r)),r.destroyed=!0),null}static extendDefaults(t){en(h0,t)}static get extendedDefaults(){return h0}static get defaults(){return bp}static installModule(t){li.prototype.__modules__||(li.prototype.__modules__=[]);const i=li.prototype.__modules__;typeof t=="function"&&i.indexOf(t)<0&&i.push(t)}static use(t){return Array.isArray(t)?(t.forEach(i=>li.installModule(i)),li):(li.installModule(t),li)}};Object.keys(p0).forEach(e=>{Object.keys(p0[e]).forEach(t=>{D1.prototype[t]=p0[e][t]})});D1.use([aO,rO]);const Iy=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Sa(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Cr(e,t){const i=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Sa(t[r])&&Sa(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Cr(e[r],t[r]):e[r]=t[r]})}function Gy(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function qy(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Yy(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Fy(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),i=[];return t.forEach(r=>{i.indexOf(r)<0&&i.push(r)}),i.join(" ")}function uR(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function dR(e){let{swiper:t,slides:i,passedParams:r,changedParams:o,nextEl:l,prevEl:u,scrollbarEl:d,paginationEl:p}=e;const h=o.filter(q=>q!=="children"&&q!=="direction"&&q!=="wrapperClass"),{params:g,pagination:y,navigation:v,scrollbar:C,virtual:S,thumbs:E}=t;let O,M,T,j,D,L,$,V;o.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&!r.thumbs.swiper.destroyed&&g.thumbs&&(!g.thumbs.swiper||g.thumbs.swiper.destroyed)&&(O=!0),o.includes("controller")&&r.controller&&r.controller.control&&g.controller&&!g.controller.control&&(M=!0),o.includes("pagination")&&r.pagination&&(r.pagination.el||p)&&(g.pagination||g.pagination===!1)&&y&&!y.el&&(T=!0),o.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||d)&&(g.scrollbar||g.scrollbar===!1)&&C&&!C.el&&(j=!0),o.includes("navigation")&&r.navigation&&(r.navigation.prevEl||u)&&(r.navigation.nextEl||l)&&(g.navigation||g.navigation===!1)&&v&&!v.prevEl&&!v.nextEl&&(D=!0);const _=q=>{t[q]&&(t[q].destroy(),q==="navigation"?(t.isElement&&(t[q].prevEl.remove(),t[q].nextEl.remove()),g[q].prevEl=void 0,g[q].nextEl=void 0,t[q].prevEl=void 0,t[q].nextEl=void 0):(t.isElement&&t[q].el.remove(),g[q].el=void 0,t[q].el=void 0))};o.includes("loop")&&t.isElement&&(g.loop&&!r.loop?L=!0:!g.loop&&r.loop?$=!0:V=!0),h.forEach(q=>{if(Sa(g[q])&&Sa(r[q]))Object.assign(g[q],r[q]),(q==="navigation"||q==="pagination"||q==="scrollbar")&&"enabled"in r[q]&&!r[q].enabled&&_(q);else{const Y=r[q];(Y===!0||Y===!1)&&(q==="navigation"||q==="pagination"||q==="scrollbar")?Y===!1&&_(q):g[q]=r[q]}}),h.includes("controller")&&!M&&t.controller&&t.controller.control&&g.controller&&g.controller.control&&(t.controller.control=g.controller.control),o.includes("children")&&i&&S&&g.virtual.enabled?(S.slides=i,S.update(!0)):o.includes("virtual")&&S&&g.virtual.enabled&&(i&&(S.slides=i),S.update(!0)),o.includes("children")&&i&&g.loop&&(V=!0),O&&E.init()&&E.update(!0),M&&(t.controller.control=g.controller.control),T&&(t.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-pagination"),p.part.add("pagination"),t.el.appendChild(p)),p&&(g.pagination.el=p),y.init(),y.render(),y.update()),j&&(t.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-scrollbar"),d.part.add("scrollbar"),t.el.appendChild(d)),d&&(g.scrollbar.el=d),C.init(),C.updateSize(),C.setTranslate()),D&&(t.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),Pc(l,t.hostEl.constructor.nextButtonSvg),l.part.add("button-next"),t.el.appendChild(l)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),Pc(u,t.hostEl.constructor.prevButtonSvg),u.part.add("button-prev"),t.el.appendChild(u))),l&&(g.navigation.nextEl=l),u&&(g.navigation.prevEl=u),v.init(),v.update()),o.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),o.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),o.includes("direction")&&t.changeDirection(r.direction,!1),(L||V)&&t.loopDestroy(),($||V)&&t.loopCreate(),t.update()}function fR(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const i={on:{}},r={},o={};Cr(i,bp),i._emitClasses=!0,i.init=!1;const l={},u=Iy.map(p=>p.replace(/_/,"")),d=Object.assign({},e);return Object.keys(d).forEach(p=>{typeof e[p]>"u"||(u.indexOf(p)>=0?Sa(e[p])?(i[p]={},o[p]={},Cr(i[p],e[p]),Cr(o[p],e[p])):(i[p]=e[p],o[p]=e[p]):p.search(/on[A-Z]/)===0&&typeof e[p]=="function"?t?r[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:i.on[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:l[p]=e[p])}),["navigation","pagination","scrollbar"].forEach(p=>{i[p]===!0&&(i[p]={}),i[p]===!1&&delete i[p]}),{params:i,passedParams:o,rest:l,events:r}}function pR(e,t){let{el:i,nextEl:r,prevEl:o,paginationEl:l,scrollbarEl:u,swiper:d}=e;Gy(t)&&r&&o&&(d.params.navigation.nextEl=r,d.originalParams.navigation.nextEl=r,d.params.navigation.prevEl=o,d.originalParams.navigation.prevEl=o),qy(t)&&l&&(d.params.pagination.el=l,d.originalParams.pagination.el=l),Yy(t)&&u&&(d.params.scrollbar.el=u,d.originalParams.scrollbar.el=u),d.init(i)}function hR(e,t,i,r,o){const l=[];if(!t)return l;const u=p=>{l.indexOf(p)<0&&l.push(p)};if(i&&r){const p=r.map(o),h=i.map(o);p.join("")!==h.join("")&&u("children"),r.length!==i.length&&u("children")}return Iy.filter(p=>p[0]==="_").map(p=>p.replace(/_/,"")).forEach(p=>{if(p in e&&p in t)if(Sa(e[p])&&Sa(t[p])){const h=Object.keys(e[p]),g=Object.keys(t[p]);h.length!==g.length?u(p):(h.forEach(y=>{e[p][y]!==t[p][y]&&u(p)}),g.forEach(y=>{e[p][y]!==t[p][y]&&u(p)}))}else e[p]!==t[p]&&u(p)}),l}const mR=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Nc(){return Nc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},Nc.apply(this,arguments)}function Zy(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Xy(e){const t=[];return ke.Children.toArray(e).forEach(i=>{Zy(i)?t.push(i):i.props&&i.props.children&&Xy(i.props.children).forEach(r=>t.push(r))}),t}function gR(e){const t=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return ke.Children.toArray(e).forEach(r=>{if(Zy(r))t.push(r);else if(r.props&&r.props.slot&&i[r.props.slot])i[r.props.slot].push(r);else if(r.props&&r.props.children){const o=Xy(r.props.children);o.length>0?o.forEach(l=>t.push(l)):i["container-end"].push(r)}else i["container-end"].push(r)}),{slides:t,slots:i}}function xR(e,t,i){if(!i)return null;const r=g=>{let y=g;return g<0?y=t.length+g:y>=t.length&&(y=y-t.length),y},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`},{from:l,to:u}=i,d=e.params.loop?-t.length:0,p=e.params.loop?t.length*2:t.length,h=[];for(let g=d;g<p;g+=1)g>=l&&g<=u&&h.push(t[r(g)]);return h.map((g,y)=>ke.cloneElement(g,{swiper:e,style:o,key:g.props.virtualIndex||g.key||`slide-${y}`}))}function no(e,t){return typeof window>"u"?R.useEffect(e,t):R.useLayoutEffect(e,t)}const Tx=R.createContext(null),yR=R.createContext(null),Bt=R.forwardRef(function(e,t){let{className:i,tag:r="div",wrapperTag:o="div",children:l,onSwiper:u,...d}=e===void 0?{}:e,p=!1;const[h,g]=R.useState("swiper"),[y,v]=R.useState(null),[C,S]=R.useState(!1),E=R.useRef(!1),O=R.useRef(null),M=R.useRef(null),T=R.useRef(null),j=R.useRef(null),D=R.useRef(null),L=R.useRef(null),$=R.useRef(null),V=R.useRef(null),{params:_,passedParams:q,rest:Y,events:W}=fR(d),{slides:te,slots:se}=gR(l),ce=()=>{S(!C)};Object.assign(_.on,{_containerClasses(ee,k){g(k)}});const re=()=>{Object.assign(_.on,W),p=!0;const ee={..._};if(delete ee.wrapperClass,M.current=new D1(ee),M.current.virtual&&M.current.params.virtual.enabled){M.current.virtual.slides=te;const k={cache:!1,slides:te,renderExternal:v,renderExternalUpdate:!1};Cr(M.current.params.virtual,k),Cr(M.current.originalParams.virtual,k)}};O.current||re(),M.current&&M.current.on("_beforeBreakpoint",ce);const N=()=>{p||!W||!M.current||Object.keys(W).forEach(ee=>{M.current.on(ee,W[ee])})},X=()=>{!W||!M.current||Object.keys(W).forEach(ee=>{M.current.off(ee,W[ee])})};R.useEffect(()=>()=>{M.current&&M.current.off("_beforeBreakpoint",ce)}),R.useEffect(()=>{!E.current&&M.current&&(M.current.emitSlidesClasses(),E.current=!0)}),no(()=>{if(t&&(t.current=O.current),!!O.current)return M.current.destroyed&&re(),pR({el:O.current,nextEl:D.current,prevEl:L.current,paginationEl:$.current,scrollbarEl:V.current,swiper:M.current},_),u&&!M.current.destroyed&&u(M.current),()=>{M.current&&!M.current.destroyed&&M.current.destroy(!0,!1)}},[]),no(()=>{N();const ee=hR(q,T.current,te,j.current,k=>k.key);return T.current=q,j.current=te,ee.length&&M.current&&!M.current.destroyed&&dR({swiper:M.current,slides:te,passedParams:q,changedParams:ee,nextEl:D.current,prevEl:L.current,scrollbarEl:V.current,paginationEl:$.current}),()=>{X()}}),no(()=>{mR(M.current)},[y]);function Q(){return _.virtual?xR(M.current,te,y):te.map((ee,k)=>ke.cloneElement(ee,{swiper:M.current,swiperSlideIndex:k}))}return ke.createElement(r,Nc({ref:O,className:Fy(`${h}${i?` ${i}`:""}`)},Y),ke.createElement(yR.Provider,{value:M.current},se["container-start"],ke.createElement(o,{className:uR(_.wrapperClass)},se["wrapper-start"],Q(),se["wrapper-end"]),Gy(_)&&ke.createElement(ke.Fragment,null,ke.createElement("div",{ref:L,className:"swiper-button-prev"}),ke.createElement("div",{ref:D,className:"swiper-button-next"})),Yy(_)&&ke.createElement("div",{ref:V,className:"swiper-scrollbar"}),qy(_)&&ke.createElement("div",{ref:$,className:"swiper-pagination"}),se["container-end"]))});Bt.displayName="Swiper";const Ut=R.forwardRef(function(e,t){let{tag:i="div",children:r,className:o="",swiper:l,zoom:u,lazy:d,virtualIndex:p,swiperSlideIndex:h,...g}=e===void 0?{}:e;const y=R.useRef(null),[v,C]=R.useState("swiper-slide"),[S,E]=R.useState(!1);function O(D,L,$){L===y.current&&C($)}no(()=>{if(typeof h<"u"&&(y.current.swiperSlideIndex=h),t&&(t.current=y.current),!(!y.current||!l)){if(l.destroyed){v!=="swiper-slide"&&C("swiper-slide");return}return l.on("_slideClass",O),()=>{l&&l.off("_slideClass",O)}}}),no(()=>{l&&y.current&&!l.destroyed&&C(l.getSlideClasses(y.current))},[l]);const M={isActive:v.indexOf("swiper-slide-active")>=0,isVisible:v.indexOf("swiper-slide-visible")>=0,isPrev:v.indexOf("swiper-slide-prev")>=0,isNext:v.indexOf("swiper-slide-next")>=0},T=()=>typeof r=="function"?r(M):r,j=()=>{E(!0)};return ke.createElement(i,Nc({ref:y,className:Fy(`${v}${o?` ${o}`:""}`),"data-swiper-slide-index":p,onLoad:j},g),u&&ke.createElement(Tx.Provider,{value:M},ke.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof u=="number"?u:void 0},T(),d&&!S&&ke.createElement("div",{className:"swiper-lazy-preloader"}))),!u&&ke.createElement(Tx.Provider,{value:M},T(),d&&!S&&ke.createElement("div",{className:"swiper-lazy-preloader"})))});Ut.displayName="SwiperSlide";const vR=w(Bt)`
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
`,wR=w(Ut)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${e=>e.$isActive?"898px":"437px"} !important;
    height: ${e=>e.$isActive?"100%":"285px"} !important;
    opacity: ${e=>e.$isActive?1:e.$index===0||e.$index===4?.6:.8};
    transform: ${e=>{if(e.$isActive)return"scale(1)";switch(Math.abs(e.$index-2)){case 1:return e.$index<2?"translateX(-100px) scale(0.9)":"translateX(100px) scale(0.9)";case 2:return e.$index<2?"translateX(-200px) scale(0.8)":"translateX(200px) scale(0.8)";default:return"scale(0.9)"}}};
    z-index: ${e=>e.$isActive?10:10-Math.abs(e.$index-2)};
  }
`,bR=w.section`
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
`,SR=We`
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
`,CR=We`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-2px);
  }
`,TR=We`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(2px);
  }
`,ER=We`
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
`,jR=w.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`,Ex=w.button`
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({$bg:e})=>e};
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
      ${SR} 0.6s ease,
      ${ER} 0.6s ease;
    transform: translateY(-2px);

    &::before {
      width: 300%;
      height: 300%;
    }

    ${e=>e.$bg==="#DBDBD8"&&It`
        background-color: #c8c8c5;
        box-shadow: 0 4px 15px rgba(219, 219, 216, 0.4);

        svg {
          animation: ${CR} 0.4s ease;
        }
      `}

    ${e=>e.$bg==="#3098EE"&&It`
        background-color: #2580d6;
        box-shadow: 0 4px 15px rgba(48, 152, 238, 0.4);

        svg {
          animation: ${TR} 0.4s ease;
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
`,AR=w.div`
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
`,MR=w.p`
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
`,LR=w.p`
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
`,OR=w.img`
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
    height: ${e=>e.$isActive?"500px":"285px"};
    border-radius: 8px;
  }
`;w.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.button`
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
`;const RR=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${e=>e.$isActive?"898px":"437px"};
    height: ${e=>e.$isActive?"500px":"285px"};
  }
`,kR=w.div`
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
    margin: ${e=>e.$isActive?"20px":"10px"};
    margin-bottom: ${e=>e.$isActive?"20px":"10px"};
    opacity: ${e=>e.$isActive?1:.9};
    transform: ${e=>e.$isActive?"scale(1.03)":"scale(0.95)"};
  }
`,DR=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,HR=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  position: relative;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const jx=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,zR=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,VR=w.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,PR=w.div`
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
`,NR="/assets/Review%20Image%203-bwglEcYl.png",Ax="/assets/Review%20Image%201-BysFOq9G.png",Mx="/assets/Review%20Image%202-C_HtVc_c.png",Lx="/assets/Review%20Image%205-B3ukDKHL.png",$R="/assets/Review%20Image%204-AW0fOgIu.png",BR=w.section`
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
`,UR=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,_R=w.p`
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
`,IR=w.h3`
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
`,Wy=w.span`
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
`,GR=w.div`
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
`,qR=w.div`
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

    ${e=>e.$isLargeDesktop&&`
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
`,YR=w.div`
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
`,FR=w(YR)`
  ${e=>e.$isLargeDesktop&&`
    margin: 0;
    transition: all 0.3s ease;
    
    .overlay {
      margin-bottom: 5%;
    }
    
    &:hover {
      transform: scale(1.12) translateY(-5px);
    }
  `}
`,ZR=w.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`,XR=w.div`
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
`,WR=w.p`
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
`,KR=w.div`
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
`;function Ky(){const[e,t]=R.useState(null),[i,r]=R.useState(0),o=R.useRef(null),l=R.useRef(null),u=()=>{e&&e.slidePrev()},d=()=>{e&&e.slideNext()},p=[{image:NR,description:"A broken washing machine that stopped mid-cycle was fully restored by our team in just one visit. The family can now enjoy clean laundry again without stress.",title:"Quick Fix for a Washing Machine Breakdown",type:"Washing Machine Repair"},{image:Mx,description:"We installed a brand-new dishwasher for a busy household, ensuring proper water connections and energy efficiency. The client now saves both time and water daily.",title:"Professional Dishwasher Installation",type:"Dishwasher Installation"},{image:Lx,description:"A fridge that was leaking water and not cooling properly was diagnosed and repaired. The customer avoided costly food spoilage and gained reliable performance again.",title:"Refrigerator Leak and Cooling Repair",type:"Refrigerator Repair"},{image:$R,description:"The dryer was overheating and shutting down after a few minutes. Our experts replaced faulty parts and cleaned the vent system, restoring safe and efficient drying.",title:"Dryer Overheating Problem Solved",type:"Dryer Repair"},{image:Ax,description:"An oven that wouldn’t heat evenly was repaired by recalibrating the thermostat and replacing heating elements. The family can now cook meals perfectly again.",title:"Oven Heating Restored for Perfect Meals",type:"Oven Repair"},{image:Lx,description:"We handled a complete installation of a modern washing machine, ensuring proper setup, water connection, and vibration-free operation.",title:"Seamless Washing Machine Installation",type:"Washing Machine Installation"},{image:Mx,description:"A freezer full of food was saved when we quickly repaired the compressor and restored full cooling capacity within hours.",title:"Emergency Freezer Repair",type:"Freezer Repair"},{image:Ax,description:"A customer’s stove stopped working during family dinner preparation. Our team replaced defective wiring and burners, restoring it the same day.",title:"Stove Emergency Fixed Same Day",type:"Stove Repair"}];return m.jsxs(bR,{children:[m.jsxs(AR,{children:[m.jsx(MR,{children:"Our Cases"}),m.jsxs(LR,{children:[m.jsx(Wy,{children:"Success Stories "})," That Bring Your Appliances Back to Life"]})]}),m.jsx(PR,{children:m.jsx(vR,{modules:[nn],pagination:{clickable:!0},spaceBetween:20,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,onSwiper:t,onSlideChange:h=>r(h.realIndex),breakpoints:{1440:{slidesPerView:6,spaceBetween:30,centeredSlides:!0}},children:p.map(({image:h,description:g,title:y,type:v},C)=>m.jsx(wR,{$isActive:i===C,$index:C,children:m.jsxs(RR,{$isActive:i===C,$index:C,children:[m.jsx(OR,{src:h,alt:v,$isActive:i===C,$index:C}),m.jsx(kR,{$isActive:i===C,$index:C,children:m.jsxs(DR,{children:[m.jsx(HR,{children:m.jsx(jx,{children:g})}),m.jsxs(zR,{children:[m.jsx(VR,{children:y}),m.jsx(jx,{children:v})]})]})})]})},C))})}),m.jsxs(jR,{children:[m.jsx(Ex,{ref:o,$bg:"#DBDBD8",onClick:u,children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),m.jsx(Ex,{ref:l,$bg:"#3098EE",onClick:d,children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})}const QR=w(En.div)`
  position: fixed;
  top: 100px;
  right: 100px;
  padding: 16px 24px;
  border-radius: 8px;
  background: ${e=>e.$type==="success"?"linear-gradient(135deg, #4caf50, #2e7d32)":"linear-gradient(135deg, #f44336, #c62828)"};
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  z-index: 1000;
  max-width: 400px;
`,JR=w.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`,ek=({type:e,message:t,onClose:i,autoClose:r=!0,autoCloseDuration:o=25e3})=>{const{t:l}=O1();R.useEffect(()=>{if(r){const d=setTimeout(()=>{i()},o);return()=>clearTimeout(d)}},[r,o,i]);const u={success:l("alert.success"),error:l("alert.error")};return m.jsxs(QR,{$type:e,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",damping:25},children:[m.jsx("div",{children:t||u[e]}),m.jsx(JR,{onClick:i,children:"×"})]})},tk="/assets/ContactFormImage-CaQYWUqs.png",lu=()=>{const[e,t]=R.useState(""),[i,r]=R.useState({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),[o,l]=R.useState({}),[u,d]=R.useState(null),[p,h]=R.useState(!1),g=()=>{h(!0)},y=()=>{h(!1)},v=E=>{const{name:O,value:M}=E.target;r(T=>({...T,[O]:M})),l(T=>({...T,[O]:!1}))},C=()=>{const E={};return e||(E.service=!0),i.name||(E.name=!0),i.email||(E.email=!0),i.phone||(E.phone=!0),i.location||(E.location=!0),i.appliance||(E.appliance=!0),i.brand||(E.brand=!0),i.power||(E.power=!0),E},S=async E=>{E.preventDefault();const O=C();if(Object.keys(O).length>0){l(O),d({type:"error",message:"Please fill all required fields"});return}try{if((await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:e,...i})})).ok)t(""),r({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),l({}),d({type:"success",message:"Form submitted successfully! We will contact you soon."});else throw new Error("Failed to submit form")}catch(M){console.error("Error submitting form:",M),d({type:"error",message:"There was an error submitting the form. Please try again."})}};return m.jsxs(m.Fragment,{children:[m.jsxs(ok,{children:[m.jsxs(Dx,{children:[m.jsxs(g0,{children:[m.jsxs(lk,{children:[" ",m.jsx("span",{children:"Contact"})," our team"]}),m.jsx(tc,{children:"We love our customers, so feel free to call during normal business hours"})]})," ",m.jsx("a",{href:"tel:+18055002705",children:m.jsx(ck,{children:m.jsx(uk,{children:"Call Us for Fast Repair"})})}),m.jsxs(Dx,{children:[m.jsx(dk,{}),m.jsxs(fk,{children:[m.jsxs(Hx,{width:"251px",children:[m.jsx(zx,{children:"Service Hours"}),m.jsx(g0,{children:m.jsxs(tc,{children:["Mon–Sat: 8AM–6PM ",m.jsx("br",{})," Sun: 9AM–4PM"," "]})})]}),m.jsxs(Hx,{children:[m.jsx(zx,{children:"Our Location"}),m.jsxs(g0,{children:[m.jsxs("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:[" ",m.jsx(tc,{children:" 801 Tioga Pl, Newbury Park, CA 91320"})]}),m.jsx("a",{href:"tel:+18055002705",children:m.jsx(tc,{children:"+1 (805) 500-2705"})})]})]})]})]})]}),m.jsxs(nk,{onSubmit:S,children:[m.jsx(pk,{src:tk,alt:"contact image"}),m.jsx(si,{children:"What service do you need for your appliances?"}),m.jsxs(ik,{children:[m.jsxs(Ox,{style:o.service?{borderColor:"red"}:{},children:[m.jsx(Rx,{name:"service",value:"Repair",checked:e==="Repair",onChange:E=>t(E.target.value)}),m.jsx(kx,{checked:e==="Repair"}),"Repair"]}),m.jsxs(Ox,{style:o.service?{borderColor:"red"}:{},children:[m.jsx(Rx,{name:"service",value:"Installation",checked:e==="Installation",onChange:E=>t(E.target.value)}),m.jsx(kx,{checked:e==="Installation"}),"Installation"]})]}),m.jsxs(hk,{children:[m.jsxs(mk,{children:[m.jsx(si,{children:"Name"}),m.jsx(m0,{name:"name",type:"text",placeholder:"Your Name",value:i.name,onChange:v,style:o.name?{borderBottom:"1px solid red"}:{}}),m.jsx(si,{children:"Email"}),m.jsx(m0,{name:"email",type:"email",placeholder:"Your Email",value:i.email,onChange:v,style:o.email?{borderBottom:"1px solid red"}:{}}),m.jsx(si,{children:"Phone Number"}),m.jsx(m0,{name:"phone",type:"tel",placeholder:"Your Phone Number",value:i.phone,onChange:v,style:o.phone?{borderBottom:"1px solid red"}:{}})]}),m.jsxs(gk,{children:[m.jsx(si,{children:"In what location do you need the service?"}),m.jsx(Jl,{children:m.jsxs(ec,{name:"location",value:i.location,onChange:v,style:o.location?{borderBottom:"1px solid red"}:{},children:[m.jsx("option",{value:"",children:"Select location"}),m.jsx("option",{children:"Malibu"}),m.jsx("option",{children:"Los Angeles County"}),m.jsx("option",{children:"Thousand Oaks"}),m.jsx("option",{children:"Newbury Park"}),m.jsx("option",{children:"Westlake Village"}),m.jsx("option",{children:"Oak Park"}),m.jsx("option",{children:"Lake Sherwood"}),m.jsx("option",{children:"Hidden Valley"}),m.jsx("option",{children:"Camarillo"}),m.jsx("option",{children:"Agoura Hills"}),m.jsx("option",{children:"Moorpark"}),m.jsx("option",{children:"Calabasas"}),m.jsx("option",{children:"Santa Rosa Valley"}),m.jsx("option",{children:"Other"})]})}),m.jsx(si,{children:"What do you need repaired?"}),m.jsx(Jl,{children:m.jsxs(ec,{name:"appliance",value:i.appliance,onChange:v,style:o.appliance?{borderBottom:"1px solid red"}:{},children:[m.jsx("option",{value:"",children:"Select appliance"}),m.jsx("option",{children:"Cooktop"}),m.jsx("option",{children:"Oven"}),m.jsx("option",{children:"Range"}),m.jsx("option",{children:"Washer"}),m.jsx("option",{children:"Refrigerator"}),m.jsx("option",{children:"Microwave"}),m.jsx("option",{children:"Dishwasher"}),m.jsx("option",{children:"Dryer"}),m.jsx("option",{children:"Washing Machine"}),m.jsx("option",{children:"Freezer"}),m.jsx("option",{children:"Stove"}),m.jsx("option",{children:"Wine Cooler"}),m.jsx("option",{children:"Other"})]})}),m.jsx(si,{children:"Brand of appliance"}),m.jsx(Jl,{children:m.jsxs(ec,{name:"brand",value:i.brand,onChange:v,style:o.brand?{borderBottom:"1px solid red"}:{},children:[m.jsx("option",{value:"",children:"Select brand"}),m.jsx("option",{children:"LG"}),m.jsx("option",{children:"Samsung"}),m.jsx("option",{children:"Whirlpool"}),m.jsx("option",{children:"Bosch"}),m.jsx("option",{children:"GE"}),m.jsx("option",{children:"Frigidaire"}),m.jsx("option",{children:"Maytag"}),m.jsx("option",{children:"KitchenAid"}),m.jsx("option",{children:"Viking"}),m.jsx("option",{children:"Fisher & Paykel"}),m.jsx("option",{children:"Amana"}),m.jsx("option",{children:"JennAir"}),m.jsx("option",{children:"Haier"}),m.jsx("option",{children:"Sharp"}),m.jsx("option",{children:"Electrolux"}),m.jsx("option",{children:"Sub-Zero"}),m.jsx("option",{children:"Thermador"}),m.jsx("option",{children:"Wolf"}),m.jsx("option",{children:"Other"})]})})]})]}),m.jsx(si,{children:"What type of power does this appliance use?"}),m.jsx(Jl,{children:m.jsxs(ec,{name:"power",value:i.power,onChange:v,style:o.power?{borderBottom:"1px solid red"}:{},children:[m.jsx("option",{value:"",children:"Select power"}),m.jsx("option",{children:"Electric"}),m.jsx("option",{children:"Gas"}),m.jsx("option",{children:"Dual Fuel"}),m.jsx("option",{children:"Induction"}),m.jsx("option",{children:"Solar"}),m.jsx("option",{children:"Propane"}),m.jsx("option",{children:"Natural Gas"}),m.jsx("option",{children:"Other"})]})}),m.jsx(si,{children:"Any details you'd like to add?"}),m.jsx(ak,{name:"details",placeholder:"Any details you'd like to add?",value:i.details,onChange:v}),m.jsxs(sk,{children:['By clicking "Submit" you hereby agree to our'," ",m.jsx("span",{onClick:g,style:{cursor:"pointer"},children:"Privacy Policy"})," ","."]}),m.jsx(rk,{type:"submit",children:"Submit"})]}),m.jsx(N8,{children:u&&m.jsx(ek,{type:u.type,message:u.message,onClose:()=>d(null)})})]})," ",p&&m.jsx(Ly,{onClick:y,children:m.jsxs(Oy,{onClick:E=>E.stopPropagation(),children:[m.jsx(Ry,{onClick:y,children:"×"}),m.jsx(ky,{})]})})]})},nk=w.form`
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
`,si=w.label`
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
`,ik=w.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Ox=w.label`
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
`,Rx=w.input.attrs({type:"radio"})`
  display: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,kx=w.span`
  width: 18px;
  height: 18px;
  border: 2px solid #242424;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  transition: all 0.3s ease;

  ${({checked:e})=>e&&`
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
`,m0=w.input`
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
`,Jl=w.div`
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
`,ec=w.select`
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
`,ak=w.textarea`
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
`,rk=w.button`
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
`,sk=w.p`
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
`,ok=w.div`
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
`,Dx=w.div`
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
`,g0=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,lk=w.p`
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
`,tc=w.p`
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
`,ck=w.button`
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
`,uk=w.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,dk=w.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,fk=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Hx=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${e=>e.width||"100%"};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,zx=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,pk=w.img`
  margin: 0 auto;
  width: 100%;
  max-width: 696px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 668px;
  }

  @media screen and (min-width: 1440px) {
  }
`,hk=w.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`,mk=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,gk=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,Vx="/assets/Ellipse%204aleksey-FxWBDF7j.png",Px="/assets/Ellipse%204-sanal-avatar-Dxfndv0Z.png",Nx="/assets/Ellipse%204-Wendy%20Bailey-jDxdSyQ5.png",$x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgESURBVHgB3Vr7b1NVHP/c29t3V9ZtsNG9Oh1TivJWCAaGYjSDxWgwBo3EmBgRTIiCidF/QBMTfoaYKGIkQIiiYTwSQHkZiKCM8d4YY2PtBuzRrs/b9l6/53aDjdFube9Yt09yt7b33HPP93zf3+/hoD442GxW5JocsOW8CKPxJRj1lRCEORA0BmVELBZEJFqPkFgPX7AR3r5j6Oq7A4+nByqDg1pwOBwozd+Egty3YTJOJyKAaAzKf0kGZHaxgfSH4+IXzwMaugRN/PIG2tHj2YEm11a43a1QAZkSyGOesxYV9m1EVBGCIRBnJCKGR3qQoddxMOhAczXg5p1vceHabvo9hjSRLoEcFjrfQGX5j8QJG3yBfhZx6RI2FDLNxaaymDjEosDN1rdw/uo+pIHUCXRMLcKCuf9Cr52OPr8UlzUVRX0oFKGG1cwhFG7AhSurcNPVlsoEmlQGY/nCTzFn1jH4gxaExQGOjRVx6J+bo3exjZyGGY5NsFg60eY+l8oEoxtXu+wgrJbXyRBE6ZuA8YAkRzHFIsDjO4W648swwOEkGA2BWqypuUIWsZLMeoyeSI3rakNGFEadAA3XiF2HnfRLNNnwkQjU4b2a6wiI5YhGmbqNpTimAFkiv8pBb2jBrroqJCEy2YI5rFnZiHD4KTL9WUTcAPqJ1GkbsfvQs0ggronNem31KSLs6ewkjoEMXDQqQ5KqULNsf6JRj9en6hc2Ymrux+RsSedU8m1jAtr4CIVKtpxnYLN04Lb7/LARw56pqCjH0udb0O0ha8mNj7VMFcy6FkwRcOhsITo77w6+NZw7CysPwOuTJgxxDDyttdcnY8lzfw67NeTbolmrIeic5BKyUOdGgBSTKR52Yu7MVYN/HkygAEfJXvgU7k08ApnRYaFjVdlPGETXQzGcN/NdJX1B+sTx9LwcESG72sl8MfuVwlTkZ7niYlqRVom104IsU4wl5BMXa3Dhah2GrGD1q5fJIj2bQapDqZKI4oJp+HvLNnj8PqSyTJvZguVfbURz222QA0fa4Oi1GqEDvx2xs69xDpYXVsBocCLcJyMT6ZQk6AUBZVOnAexKETmMMJojIzD2mw3T8bS9lGUecQIdpespHcncodPj0iDxilAud+pKAwReGFFY86xWeIJBkvNMQ13SxbAITC/8jAjcHCcwL/d9hCLEPXVTn0A4jFfeIaNmMMTLE8mg6GApeBorpauDAwhRKpdvW0OfvhBQXJwPE7HU64Pa4GkzdSWlEA3GUdkuRpacKXFxcDAb7cjLy6EV6EqU4tBkA9Nls7mMR65+hVL5mmxg6V2BZREPi3kGYhlarmwE46DRsESg4tHcseKgTCmb6HbRi5LoINM5rRa6IjvEaBSqgSI3Kj9WMgJnY4ygo6hk86av6RXahAZaoIins7cHW/f8TNWzKVANbOOINiomVasXe4phOIgTt7bvfWAR+VFM7e7ugr16LqVqlVAVkhQWxiqwZpMyfxYQRSIyyTjyj95AgGLXscjOWPlPigVochPU8T9D4AsFUbhyKTRGU2JHT++VaY/5MgdUNXWMb1I0KECMXYRJWAz16VPEUyYdCySLYvobMYogqbnJbD5RvMgjFGocMYxK/y1xzildJE3ii6VZaksQ04tQpJ6HP3Q6nrtNMrCgPRBo4tEdOKv06CYbWL+xK3iUR29vC2XBmHQQiGkej4uqUb1eBIMdZGQK1U6XlEjm/j2KKIwjp0usD2jLA6fTq6GPMvUs21lLnLFOwn3vr1To3QAxAjXBIpm1az+ipq1uxL2zWSz45fgRtHe4ldAtI+j1HDrub2cf47LZ2vYdygo3KD2/DB3/wMOMC1qtgB0Uqo0WzR0u7L3ZCOTakD5IbAw6nrL579m3OIEtHS2YH+okMZqqVKbSnrs/eqFMPkhhWyrIoWDAo0Q0GZcsOGrQNgwcYnhoXVo716GyZB/dRLrgqNzQ2nUP5sXOuJKnAtbkmVYEzZRcyt4yiGlyqK9/qfmbB2sadEtD7bJ78AesACaqY5RhJP3bc5itX9mlwdscQ1Pbh5QAa9QPK54ESPdyzByaXW8CD8PaoXJ0ruEPRCJu0oOJRyDLRsLhBqLh98E/P6ooMi5fX0CNfl7phU8UyOxwgplH/dWVj94armv3PT5qKHYhP7eW/CKrZWR3HMcYwU5eNLevR/2NY4/eTuwSaqsPw6B/jSreMrK128RsBTMqwdBJ7D+x7HFDEnNn//EaavA3QSvIWWl0lEhCYCFgExFXnWhYMvGTsLPOSTvUqkTm2UTkAHFGQws6D81EkgNBI+lXBDsPPEO9hWYKf5iYjn+FWKY1GA0cVeQb4fJX4a/MDgINgEftyydhNS6B1z9+hxMkZlDMlAH1HcSBE6xVPaJUjTZikXGj5Qfk2bpRlL9KORMqSU/w/Aw5cXaaJc+qwW33ehw98/lon0x9gTMryuGcUUedzln9xynH2I2wCIX8ckh04b/6+bh1tzOVp9PnwKLZq+Gw71WqV4EQ4yinGkeVA7Fc/ECsJHXj2p0PUH+J9dxTNnSZLkhQDi88VfIl+cxZSpdYFNPnqsyONGs5stxAMOxGq2sd/rl8AONwpHk42KH0soJPSE/WwmyyK+0r1tRhnSvlULr0cP8fHErvLyuymhBzRf6gG929e3DHtQXN2XEo/fGwWvNgtxbDlLOCTHoVcWQ2pfezqXpnUu7HpAAZqosIh5qIqNPo9Z1Bj78VPT1epCGGyfA/uU/qLszt8vwAAAAASUVORK5CYII=",Bx="/assets/Review%20Image-alexey-BS9M-VaX.png",Ux="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",_x="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",Ix="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",nc=[{avatar:Vx,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:Bx},{avatar:Px,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:Ux},{avatar:Nx,name:"Wendy Bailey",time:"месяц назад",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:_x},{avatar:$x,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:Ix},{avatar:Vx,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:Bx},{avatar:Px,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:Ux},{avatar:Nx,name:"Wendy Bailey",time:"месяц назад",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:_x},{avatar:$x,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:Ix}],xk=w.div`
  padding: 0px 16px;
  width: 375px;
  height: 170px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,yk=w.h2`
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
`,vk=w.p`
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
`,wk=w.div`
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
`,x0=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: ${e=>e.$isVisible?"block":"none"};

  @media screen and (min-width: 768px) {
    width: 50%; /* Два свайпери займають по половині ширини */
    display: block;
  }
`,y0=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: #f5faff;
  border-radius: 8px;
  height: 600px; /* Фіксована висота картки */
`,v0=w.div`
  display: flex;
  gap: 19px;
  align-items: center;
`,w0=w.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`,b0=w.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,S0=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`,C0=w.p`
  color: rgba(33, 33, 33, 0.5);
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`,T0=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  line-height: 1.25em;
  flex-grow: 1;
  overflow: hidden;
`,E0=w.img`
  width: 100%;
  height: 370px;
  border-radius: 4px;
  object-fit: cover;
`,j0=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,A0=w.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,cu=()=>{const[,e]=ke.useState(!1),t=ke.useRef(null),i=ke.useRef(null),r=ke.useRef(null),o=De({query:"(min-width: 768px)"}),l=De({query:"(min-width: 1440px)"});return m.jsxs("div",{children:[m.jsxs(xk,{children:[m.jsx(vk,{children:"Your Feedback Matters"}),m.jsxs(yk,{children:["Discover why clients ",m.jsx("span",{children:" trust "})," our repairs"]})]}),m.jsxs(wk,{ref:r,children:[m.jsxs(x0,{$isVisible:!0,children:[m.jsx(j0,{}),m.jsx(A0,{}),m.jsx(Bt,{ref:t,direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},speed:4e3,loop:!0,modules:[nn],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%"},children:nc.map((u,d)=>m.jsx(Ut,{children:m.jsxs(y0,{children:[m.jsxs(v0,{children:[m.jsx(w0,{src:u.avatar,alt:u.name}),m.jsxs(b0,{children:[m.jsx(S0,{children:u.name}),m.jsx(C0,{children:u.time})]})]}),m.jsx(T0,{children:u.text}),m.jsx(E0,{src:u.image,alt:`Review by ${u.name}`})]})},`top-${d}`))})]}),m.jsxs(x0,{$isVisible:o,children:[m.jsx(j0,{}),m.jsx(A0,{}),m.jsx(Bt,{ref:i,direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!1,reverseDirection:!0},speed:2e3,loop:!0,modules:[nn],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,initialSlide:nc.length-1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%"},children:nc.map((u,d)=>m.jsx(Ut,{children:m.jsxs(y0,{children:[m.jsxs(v0,{children:[m.jsx(w0,{src:u.avatar,alt:u.name}),m.jsxs(b0,{children:[m.jsx(S0,{children:u.name}),m.jsx(C0,{children:u.time})]})]}),m.jsx(T0,{children:u.text}),m.jsx(E0,{src:u.image,alt:`Review by ${u.name}`})]})},`bottom-${d}`))})]}),l&&m.jsxs(x0,{$isVisible:!0,children:[m.jsx(j0,{}),m.jsx(A0,{}),m.jsx(Bt,{direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},speed:6e3,loop:!0,modules:[nn],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%"},children:nc.map((u,d)=>m.jsx(Ut,{children:m.jsxs(y0,{children:[m.jsxs(v0,{children:[m.jsx(w0,{src:u.avatar,alt:u.name}),m.jsxs(b0,{children:[m.jsx(S0,{children:u.name}),m.jsx(C0,{children:u.time})]})]}),m.jsx(T0,{children:u.text}),m.jsx(E0,{src:u.image,alt:`Review by ${u.name}`})]})},`desktop-${d}`))})]})]})]})},bk="/assets/Hero%20Image-CELmD3oB.png",H1="data:image/svg+xml,%3csvg%20width='140'%20height='33'%20viewBox='0%200%20140%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_586)'%3e%3cpath%20d='M0.00384521%2032.9336H31.9955V0.933594H0.00384521V32.9336ZM20.5091%203.37746C26.1637%205.23116%2030.25%2010.5932%2030.2654%2016.9275C30.2807%2023.1588%2026.277%2028.508%2020.5091%2030.4846V3.37746ZM15.9946%202.65223C17.0161%202.65223%2018.1043%202.78857%2019.0107%202.96908C19.0107%2010.2187%2012.0004%2016.185%204.76547%2016.185L1.74041%2016.1805C2.23648%208.74909%208.38454%202.65223%2015.9946%202.65223ZM4.76803%2017.6943C12.0017%2017.6943%2019.0094%2023.6542%2019.0094%2030.8968C18.1043%2031.0818%2016.9617%2031.2194%2015.9946%2031.2194C8.38198%2031.2092%202.02589%2025.0938%201.73849%2017.6943H4.76803ZM42.7049%2019.7452V17.7283H49.3618V15.157H42.7036V11.4131H49.7862V8.84766H39.9787V19.6287C39.9787%2022.3542%2041.1392%2024.2181%2043.8634%2024.6009C43.9178%2024.6143%2043.9716%2024.6246%2044.0215%2024.6259H44.0708C44.3499%2024.6572%2044.6347%2024.6777%2044.9336%2024.6777H49.975V22.1154H44.9561C44.09%2022.1154%2042.7049%2021.6879%2042.7049%2019.7452ZM51.9113%2024.6816H54.6374V8.84382H51.9113V24.6816ZM62.6404%2012.8674C59.1948%2012.8674%2056.6159%2015.2415%2056.6159%2018.938V19.0296C56.6159%2022.6358%2059.1033%2024.9638%2062.7089%2024.9638C64.4429%2024.9638%2066.063%2024.4851%2067.5461%2022.9092L65.903%2021.3121C65.0357%2022.1794%2064.1914%2022.6358%2062.7998%2022.6358C60.7688%2022.6358%2059.4227%2021.4491%2059.3312%2019.6229H68.2758C68.3212%2019.1665%2068.3212%2018.6647%2068.3212%2018.6647C68.3225%2015.4463%2066.063%2012.8674%2062.6404%2012.8674ZM59.4003%2017.7059C59.5142%2016.313%2060.9295%2015.1948%2062.6404%2015.1948C64.2375%2015.1948%2065.5381%2016.3361%2065.5381%2017.7059H59.4003ZM75.9825%2015.3094C77.2146%2015.3094%2078.1281%2015.7664%2078.9032%2016.5646L80.5918%2014.8069C79.2681%2013.3917%2077.6941%2012.8213%2075.9825%2012.8213C72.5138%2012.8213%2069.7301%2015.4003%2069.7301%2018.915C69.7301%2022.4297%2072.5138%2025.0093%2075.9825%2025.0093C77.6941%2025.0093%2079.2687%2024.439%2080.5918%2023.0237L78.9032%2021.266C78.1281%2022.0649%2077.2146%2022.5213%2075.9825%2022.5213C73.9739%2022.5213%2072.4453%2020.9914%2072.4453%2018.915C72.4453%2016.8385%2073.9739%2015.3094%2075.9825%2015.3094ZM85.0148%2019.7497H85.0116V15.7062H87.4906V13.2291H85.0148V8.84446H82.2886V19.9103L82.2963%2019.9097C82.3744%2022.4829%2083.5432%2024.2354%2086.1733%2024.6047C86.2277%2024.6182%2086.2815%2024.6284%2086.3314%2024.6291H86.3807C86.6598%2024.6604%2086.9446%2024.6816%2087.2436%2024.6816H87.5322L87.5418%2022.1193H87.266C86.3999%2022.1193%2085.0148%2021.6923%2085.0148%2019.7497ZM92.4885%2014.9324V13.2297H89.7847V24.6816H92.4885V18.6596C92.4885%2016.7739%2093.6925%2015.5916%2095.5775%2015.5916C96.009%2015.5916%2096.3956%2015.6365%2096.7137%2015.7056V13.0703C96.5998%2013.0479%2096.1914%2013.0018%2095.8963%2013.0018C94.2602%2013.0025%2093.0338%2013.7527%2092.4885%2014.9324ZM103.38%2012.8885C99.9033%2012.8885%2097.131%2015.5232%2097.131%2018.9553C97.131%2022.3856%2099.9033%2025.0221%20103.38%2025.0221C106.832%2025.0221%20109.627%2022.3856%20109.627%2018.9553C109.626%2015.5238%20106.832%2012.8885%20103.38%2012.8885ZM103.38%2022.5456C101.358%2022.5456%2099.8361%2020.9767%2099.8361%2018.9553C99.8361%2016.9326%20101.358%2015.3651%20103.38%2015.3651C105.379%2015.3651%20106.923%2016.9326%20106.923%2018.9553C106.922%2020.9774%20105.379%2022.5456%20103.38%2022.5456ZM111.303%2024.6816H114.03V8.84382H111.303V24.6816ZM123.862%2019.8866C123.862%2021.7039%20122.795%2022.4777%20121.363%2022.4777C119.932%2022.4777%20118.865%2021.7039%20118.865%2019.911V13.2297H116.115V20.1376C116.115%2023.4097%20118.5%2024.9773%20121.34%2024.9773C124.203%2024.9773%20126.61%2023.3867%20126.61%2020.0691V13.2297H123.862V19.8866ZM136.925%2021.0196L135.206%2018.6148L137.335%2015.7139L139.158%2013.2297H136.182L133.705%2016.6606L131.206%2013.2297H128.253L129.947%2015.5462L132.206%2018.6372L129.838%2021.9356L127.867%2024.6816H130.797L133.704%2020.6368L136.613%2024.6816H139.544L136.925%2021.0196Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_586'%3e%3crect%20width='139.541'%20height='32'%20fill='white'%20transform='translate(0.00384521%200.933594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",$c="/assets/2-lv1xptCk.svg",z1="/assets/3-xYBlE7jA.svg",V1="data:image/svg+xml,%3csvg%20width='77'%20height='36'%20viewBox='0%200%2077%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M67.1338%2020.3456H71.0883V24.0242C70.3626%2024.3009%2068.9382%2024.5778%2067.5878%2024.5778C63.2137%2024.5778%2061.7591%2022.3574%2061.7591%2017.8483C61.7591%2013.5451%2063.1439%2011.0128%2067.5138%2011.0128C69.9492%2011.0128%2071.3309%2011.7769%2072.4762%2013.2341L75.4978%2010.4581C73.6527%207.82715%2070.4323%207.02979%2067.4087%207.02979C60.6107%207.02708%2057.0362%2010.7351%2057.0362%2017.8125C57.0362%2024.8547%2060.266%2028.6723%2067.3723%2028.6723C70.6355%2028.6723%2073.8247%2027.8417%2075.5614%2026.6244V16.4251H67.1339L67.1338%2020.3456ZM46.3909%2024.2661H56.4545V28.36H41.5343V7.33832H46.3913L46.3909%2024.2661Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4968%2029.43C35.8453%2023.0815%2035.8449%2012.7878%2029.4961%206.44074C23.1474%200.0925049%2012.854%200.0917411%206.50687%206.44012C0.158384%2012.7885%200.158766%2023.0823%206.5075%2029.4294C12.8561%2035.7781%2023.1497%2035.7783%2029.4968%2029.43Z'%20fill='%23242424'/%3e%3cpath%20d='M13.0698%2014.7643C13.4404%2014.7625%2013.8023%2014.6509%2014.1096%2014.4436C14.4169%2014.2364%2014.6559%2013.9428%2014.7965%2013.5998C14.9372%2013.2568%2014.973%2012.8798%2014.8996%2012.5165C14.8261%2012.1531%2014.6467%2011.8197%2014.384%2011.5583C14.1212%2011.2968%2013.7868%2011.119%2013.4232%2011.0474C13.0596%2010.9757%2012.6828%2011.0134%2012.3405%2011.1556C11.9982%2011.298%2011.7057%2011.5384%2011.4999%2011.8468C11.2942%2012.1551%2011.1845%2012.5174%2011.1845%2012.8881C11.185%2013.1351%2011.2342%2013.3796%2011.3293%2013.6075C11.4245%2013.8355%2011.5635%2014.0425%2011.7385%2014.2167C11.9136%2014.3909%2012.1213%2014.5289%2012.3497%2014.6229C12.5781%2014.7169%2012.8228%2014.7649%2013.0698%2014.7643ZM30.2643%2018.4501H21.9973V17.2255H31.4759C31.4889%2017.4627%2031.4953%2017.6998%2031.4953%2017.9398C31.4953%2025.3134%2025.4857%2031.2907%2018.0744%2031.2907C10.6628%2031.2907%204.65222%2025.3171%204.65222%2017.9398C4.65222%2010.5631%2010.6609%204.58887%2018.0731%204.58887C18.2688%204.58887%2018.4635%204.59282%2018.6572%204.60084V5.81624C18.4635%205.8076%2018.2694%205.80333%2018.0749%205.80333C11.3382%205.80333%205.87505%2011.2371%205.87505%2017.9385C5.87505%2024.6401%2011.3375%2030.0749%2018.0749%2030.0749C24.6272%2030.0749%2029.98%2024.9337%2030.2633%2018.4842L30.2643%2018.4501ZM21.9785%2023.5518H18.6561V11.0698H17.4278V24.7847H18.659V24.7765H21.9813L21.9785%2023.5518Z'%20fill='white'/%3e%3c/svg%3e",P1="/assets/5-DtA_MHfM.svg",N1="/assets/6-BYfTVs51.svg",$1="/assets/7-DtKFqDn5.svg",B1="/assets/8-C9mdpuht.svg",U1="/assets/9-1he0Czj8.svg",_1="data:image/svg+xml,%3csvg%20width='191'%20height='24'%20viewBox='0%200%20191%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_699)'%3e%3cmask%20id='mask0_277_699'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='190'%20height='56'%3e%3cpath%20d='M0.970825%2055.6831H189.922V0.547134H0.970825V55.6831Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_277_699)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.577%2023.4158H132.473L121.526%200.547155L110.577%2023.4158ZM188.424%2021.6962C188.63%2021.6962%20188.752%2021.5893%20188.752%2021.4207C188.752%2021.2342%20188.63%2021.1372%20188.424%2021.1372H188.012V21.6962H188.424ZM187.698%2020.8347H188.438C188.656%2020.8347%20188.827%2020.9045%20188.941%2021.0255C189.027%2021.1134%20189.076%2021.2395%20189.076%2021.3932C189.076%2021.6871%20188.92%2021.8643%20188.692%2021.9332L189.138%2022.6008H188.761L188.359%2021.9899H188.012V22.6008H187.698V20.8347ZM189.754%2021.7662C189.754%2020.9234%20189.146%2020.2473%20188.342%2020.2473C187.531%2020.2473%20186.917%2020.9317%20186.917%2021.7662C186.917%2022.6098%20187.526%2023.2846%20188.332%2023.2846C189.142%2023.2846%20189.754%2022.6008%20189.754%2021.7662ZM186.751%2021.775C186.751%2020.8478%20187.452%2020.0793%20188.342%2020.0793C189.23%2020.0793%20189.921%2020.8385%20189.921%2021.7569C189.921%2022.6846%20189.22%2023.4526%20188.332%2023.4526C187.444%2023.4526%20186.751%2022.6932%20186.751%2021.775ZM151.36%2012.3135V4.9244H156.648C159.337%204.9244%20160.934%206.2121%20160.934%208.57187C160.934%2010.867%20159.277%2012.3135%20156.679%2012.3135H151.36ZM159.692%2015.0823C162.586%2014.2016%20164.626%2012.0321%20164.626%208.41529C164.626%206.43127%20164.004%204.79723%20162.913%203.6014C161.582%202.21991%20159.542%201.40306%20156.945%201.40306H147.725V23.4158H151.36V15.7434H155.851L160.99%2023.4158H165.277L159.692%2015.0823ZM105.299%2012.4711C105.299%2016.7781%20102.461%2019.8896%2098.1221%2019.8896H94.0439V4.9244H98.1221C102.461%204.9244%20105.299%208.1%20105.299%2012.4075V12.4711ZM98.1221%201.40306H90.4052V23.4158H98.1221C104.62%2023.4158%20109.115%2018.604%20109.115%2012.4075C109.115%206.14909%20104.62%201.40306%2098.1221%201.40306ZM79.4093%2012.3915V23.4158H83.0453V1.40306H79.4093V12.3915ZM44.2722%2012.0246V23.4158H47.9065V1.40306H44.2722V12.0246ZM25.0175%2012.3135V4.9244H30.3084C32.996%204.9244%2034.5916%206.2121%2034.5916%208.57187C34.5916%2010.867%2032.9373%2012.3135%2030.3371%2012.3135H25.0175ZM33.351%2015.0823C36.2451%2014.2016%2038.2857%2012.0321%2038.2857%208.41529C38.2857%206.43127%2037.6644%204.79723%2036.5719%203.6014C35.2423%202.21991%2033.2018%201.40306%2030.6049%201.40306H21.3849V23.4158H25.0175V15.7434H29.5103L34.6509%2023.4158H38.9361L33.351%2015.0823ZM0.969482%2023.4158H4.60254V14.4522H16.359V10.9338H4.60254V4.9244H16.3646V1.40306H0.969482V23.4158ZM174.298%2019.9561V14.0421H185.997V10.5833H174.298V4.85948H185.997V1.40306H170.664V23.4158H186.002V19.9561H174.298ZM64.0979%2014.1057H69.3824V18.2267C68.1161%2019.2327%2066.3419%2019.8914%2064.3926%2019.8914C60.1678%2019.8914%2057.3605%2016.5598%2057.3605%2012.0321C57.3605%207.7529%2060.2547%204.20078%2064.0658%204.20078C66.697%204.20078%2068.2605%205.11279%2069.8567%206.55844L72.1616%203.63164C70.0378%201.71514%2067.8157%200.646822%2064.215%200.646822C57.9797%200.646822%2053.5473%205.86821%2053.5473%2012.0321C53.5473%2018.508%2057.8041%2023.4158%2064.2719%2023.4158C67.9364%2023.4158%2070.8605%2021.8424%2072.901%2019.9855V10.7377H64.0979V14.1057ZM136.715%2012.3915V23.4158H140.35V1.40306H136.715V12.3915Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M116.09%2019.8828L121.504%208.2977L126.96%2019.8828H116.09Z'%20fill='%23ED114C'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_699'%3e%3crect%20width='190'%20height='24'%20fill='white'%20transform='translate(0.446045)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",I1="data:image/svg+xml,%3csvg%20width='197'%20height='18'%20viewBox='0%200%20197%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2176%206.82621L22.529%201.22314H16.5098L12.2064%206.67151C11.7989%207.13951%2011.0096%207.47882%2010.4092%207.47882H9.40262V1.22314H1.12445V16.224H9.37546V11.622H10.6836C11.2827%2011.622%2011.5815%2011.7793%2011.9089%2012.3526L14.2236%2016.224H24.1903L19.5608%208.70343C19.1791%208.07942%2018.144%207.55682%2017.0559%207.55682C16.7842%207.55682%2016.5098%207.58412%2017.2176%206.82621Z'%20fill='%23242424'/%3e%3cpath%20d='M26.857%2016.2085H34.6475V7.50488H26.857V16.2085Z'%20fill='%23242424'/%3e%3cpath%20d='M30.8807%206.77201C33.0351%206.62641%2034.7114%205.5539%2034.6258%204.37608C34.5375%203.19957%2032.7213%202.36106%2030.5683%202.50666C28.4138%202.65226%2026.7375%203.72478%2026.8245%204.89999C26.9114%206.0778%2028.7276%206.91501%2030.8807%206.77201Z'%20fill='%23242424'/%3e%3cpath%20d='M37.6958%207.45174H40.3107V4.5332H47.6625V7.45174H50.7135V10.3183H47.7725V12.0382C47.7725%2013.7581%2049.8414%2013.6528%2050.7665%2012.8741V15.322C47.9355%2016.5206%2043.2789%2016.8339%2041.4002%2015.608C40.4194%2014.958%2040.3107%2014.4354%2040.3107%2013.6528V10.3703H37.6958'%20fill='%23242424'/%3e%3cpath%20d='M68.658%207.9481C64.6276%206.01888%2059.1396%206.35818%2056.4323%207.7661C52.0881%2010.0203%2052.1547%2013.6994%2056.3766%2015.7911C59.4262%2017.3043%2066.6693%2016.8857%2068.6309%2015.1658V12.7439C65.7456%2014.1505%2063.7378%2013.9464%2062.5316%2013.5512C60.6529%2012.9376%2060.6081%2010.3999%2063.0206%209.95402C64.5719%209.66802%2066.5348%209.69402%2068.658%2010.7626'%20fill='%23242424'/%3e%3cpath%20d='M71.2731%202.47656V16.2099H78.5976V11.9862C78.7063%209.32764%2082.1934%209.82295%2082.1934%2011.7795V16.2099H89.4894V10.7902C89.4894%208.23433%2084.6983%205.3678%2078.6533%208.28503L78.7606%202.47656'%20fill='%23242424'/%3e%3cpath%20d='M113.071%207.47901V16.2086H120.915V11.5182C120.915%209.90094%20124.454%209.12093%20124.454%2011.5702V16.1566H131.372V10.8408C131.372%208.34742%20127.651%205.12858%20120.915%208.44362V7.47901'%20fill='%23242424'/%3e%3cpath%20d='M159.285%2016.1994H167.072V7.49707H159.285V16.1994Z'%20fill='%23242424'/%3e%3cpath%20d='M163.31%206.76292C165.463%206.61862%20167.138%205.54741%20167.052%204.36699C166.967%203.19048%20165.149%202.35327%20162.995%202.49887C160.841%202.64317%20159.167%203.71569%20159.253%204.8922C159.338%206.07131%20161.154%206.90852%20163.31%206.76292Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M192.259%205.01547V4.03396H192.943C193.291%204.03396%20193.663%204.10806%20193.663%204.49937C193.663%204.98557%20193.284%205.01547%20192.861%205.01547H192.259ZM192.867%207.95871C194.431%207.95871%20195.768%206.79519%20195.768%205.20527C195.768%203.62836%20194.431%202.46484%20192.867%202.46484C191.286%202.46484%20189.952%203.62836%20189.952%205.20527C189.952%206.79519%20191.286%207.95871%20192.867%207.95871ZM190.528%205.20527C190.528%203.90396%20191.554%202.92245%20192.867%202.92245C194.166%202.92245%20195.192%203.90396%20195.192%205.20527C195.192%206.52739%20194.166%207.5011%20192.867%207.5011C191.554%207.5011%20190.528%206.52739%20190.528%205.20527ZM192.259%205.42238H192.836L193.711%206.79519H194.272L193.329%205.40158C193.815%205.34308%20194.188%205.09477%20194.188%204.52927C194.188%203.90396%20193.802%203.62836%20193.018%203.62836H191.759V6.79519H192.259'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.473%2010.6355H103.389C103.436%209.74884%20102.65%209.30554%20101.815%209.30554C101.119%209.30554%20100.473%209.88014%20100.473%2010.6355ZM110.405%2012.8741C105.449%2012.5088%20100.165%2012.8208%20100.165%2012.8208C101.689%2015.218%20107.9%2014.854%20109.967%2013.2901L109.75%2015.322C105.611%2017.6685%2092.9763%2017.5645%2092.7576%2012.0915C92.5647%207.25931%20100.056%206.56641%20101.689%206.56641C105.555%206.56641%20111.22%208.28633%20110.405%2012.8741Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.468%2010.2156L142.754%206.14911L144.606%2010.2156H140.468ZM133.088%2016.1709H137.335L139.161%2012.8221H145.805L147.386%2016.1709H157.459L149.617%201.25195H139.594C140.577%201.61726%20140.848%202.24126%20140.577%202.76127'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.031%2010.6563C179.721%209.72548%20177.203%209.95819%20177.203%2011.448C177.203%2013.5878%20180.193%2013.2147%20181.031%2012.5634V10.6563ZM188.395%202.5V16.1567H181.044V15.218C177.395%2017.9286%20169.223%2016.4687%20169.223%2012.0915C169.223%206.72115%20178.1%205.99314%20181.095%207.86906V2.5'%20fill='%23242424'/%3e%3c/svg%3e",G1="data:image/svg+xml,%3csvg%20width='197'%20height='26'%20viewBox='0%200%20197%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M193.375%207.13851V7.56954H192.736V9.81922H192.298V7.56954H191.672V7.13851H193.375ZM193.824%207.02196C193.837%207.03955%20193.86%207.07913%20193.903%207.13851C193.943%207.20008%20193.994%207.27265%20194.054%207.35842C194.115%207.44638%20194.181%207.54314%20194.256%207.6465C194.33%207.75206%20194.407%207.85982%20194.484%207.96757C194.56%208.07753%20194.635%208.18308%20194.709%208.28864C194.784%208.39419%20194.85%208.48876%20194.909%208.57453C194.969%208.6603%20195.02%208.73286%20195.06%208.79004C195.101%208.84722%20195.126%208.8846%20195.137%208.89779C195.141%208.8912%20195.165%208.85821%20195.201%208.80543C195.237%208.75046%20195.286%208.68008%20195.344%208.59652C195.403%208.51295%20195.469%208.41839%20195.541%208.31063C195.616%208.20508%20195.693%208.09511%20195.769%207.98516C195.848%207.8752%20195.925%207.76525%20195.999%207.65749C196.074%207.54974%20196.142%207.45078%20196.206%207.36282C196.267%207.27486%20196.32%207.20008%20196.365%207.13851L196.446%207.01976V9.81922H195.98V8.45138C195.98%208.43159%20195.984%208.41179%20195.988%208.3898C195.993%208.36781%20195.995%208.35462%20195.995%208.35022L195.137%209.6257C195.124%209.6125%20195.097%209.57072%20195.052%209.50475C195.005%209.43878%20194.95%209.35961%20194.884%209.26944C194.822%209.17928%20194.754%209.08032%20194.684%208.97696C194.611%208.8736%20194.545%208.77684%20194.484%208.68667C194.42%208.59651%20194.367%208.52175%20194.322%208.45797C194.279%208.3964%20194.254%208.35901%20194.252%208.34802C194.252%208.35241%20194.252%208.36561%20194.258%208.3876C194.262%208.40959%20194.264%208.43159%20194.264%208.44918V9.81702H193.826V7.01756L193.824%207.02196ZM186.838%2013.87L183.252%2017.4633L179.74%2013.848V20.2804H176.92V7.09892H177.542L183.256%2012.8584L189.056%207.09892H189.659V20.2804H186.838V13.8678V13.87ZM58.3087%2013.87L54.7245%2017.4633L51.2126%2013.848V20.2804H48.3925V7.09892H49.014L54.7287%2012.8584L60.5286%207.09892H61.1288V20.2804H58.3087V13.8678V13.87ZM67.1671%2013.793C67.1671%2010.0721%2069.6999%207.02196%2073.8673%207.02196C78.0347%207.02196%2080.6101%2010.0721%2080.6101%2013.793C80.6101%2017.5139%2078.0773%2020.5641%2073.8673%2020.5641C69.6573%2020.5641%2067.1671%2017.5139%2067.1671%2013.793ZM77.4664%2013.793C77.4664%2011.5433%2075.8957%2010.0501%2073.8652%2010.0501C71.8347%2010.0501%2070.3065%2011.5433%2070.3065%2013.793C70.3065%2016.0427%2071.8772%2017.5359%2073.8652%2017.5359C75.8531%2017.5359%2077.4664%2016.0427%2077.4664%2013.793ZM98.28%2020.2826H97.7841L89.6621%2013.5247V20.2826H86.842V7.10113H87.3379L95.4599%2013.9799V7.12311H98.28V20.2826ZM104.514%2013.793C104.514%2010.0721%20107.049%207.02196%20111.214%207.02196C115.38%207.02196%20117.955%2010.0721%20117.955%2013.793C117.955%2017.5139%20115.422%2020.5641%20111.214%2020.5641C107.006%2020.5641%20104.514%2017.5139%20104.514%2013.793ZM114.816%2013.793C114.816%2011.5433%20113.245%2010.0501%20111.214%2010.0501C109.184%2010.0501%20107.656%2011.5433%20107.656%2013.793C107.656%2016.0427%20109.226%2017.5359%20111.214%2017.5359C113.202%2017.5359%20114.816%2016.0427%20114.816%2013.793ZM130.232%2012.5593H135.97V14.0085C135.97%2017.7954%20133.98%2020.5641%20129.961%2020.5641C125.943%2020.5641%20123.436%2017.5139%20123.436%2013.793C123.436%2010.0721%20125.775%207.02196%20129.961%207.02196C133.29%207.02196%20134.584%208.82742%20134.584%208.82742L132.843%2011.1277C132.843%2011.1277%20131.7%2010.0281%20129.921%2010.0281C127.89%2010.0281%20126.383%2011.5433%20126.383%2013.793C126.383%2016.0427%20127.89%2017.5579%20129.921%2017.5579C131.721%2017.5579%20132.664%2016.4319%20132.705%2015.1565V15.0267H130.234V12.5615L130.232%2012.5593ZM142.131%207.12311H147.861C151.043%207.12311%20152.805%208.99015%20152.805%2011.8226C152.805%2013.6391%20152.009%2014.9366%20150.711%2015.6952L150.577%2015.781L153.538%2020.0649V20.2804H150.277L147.806%2016.4935H144.896V20.2804H142.055L142.127%207.12091L142.131%207.12311ZM147.661%2010.0061H144.898V13.8986H147.682C149.085%2013.8986%20149.86%2013.2498%20149.86%2011.9524C149.86%2010.6549%20149.064%2010.0061%20147.661%2010.0061ZM164.552%207.10113H165.054L171.65%2020.2826H168.215L167.413%2018.5761H162.155L161.391%2020.2826H157.979L164.554%207.10113H164.552ZM164.782%2012.6143L163.056%2016.3704H166.491L164.782%2012.6143ZM4.175%200.635742L1.20588%207.51456H7.11645L14.1721%2023.8891L18.2267%2014.4791L12.2608%200.637943H4.17287L4.175%200.635742ZM25.2355%200.686331L21.1937%2010.0589L27.7896%2025.3647H35.8796L25.2355%200.686331ZM4.14094%2016.7948L0.446045%2025.3647H7.83585L4.14094%2016.7948Z'%20fill='%23242424'/%3e%3c/svg%3e",q1="/assets/13-_M_Krupi.svg",Y1="data:image/svg+xml,%3csvg%20width='121'%20height='22'%20viewBox='0%200%20121%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M107.367%209.97166V12.1049H110.751V9.97166C110.751%209.05838%20109.987%208.29571%20109.073%208.29571C108.128%208.29571%20107.367%209.05838%20107.367%209.97166ZM116.359%206.95413C111.755%204.66888%20106.94%204.51551%20102.215%206.5272C98.3145%208.17275%2096.4866%2012.6852%2098.1612%2016.587C99.015%2018.5987%20100.446%2019.9997%20102.49%2020.7624C107.154%2022.5295%20111.755%2022.4079%20116.297%2020.3354C118.278%2019.4512%20119.651%2017.988%20120.382%2015.9459H114.408C113.737%2018.0806%20111.451%2019.2978%20109.289%2018.6291C109.105%2018.5683%20108.95%2018.5061%20108.739%2018.4149C107.884%2018.0184%20107.367%2017.1963%20107.367%2016.2513V14.7273H120.534C120.929%2011.4652%20119.314%208.44631%20116.359%206.95413ZM69.6909%209.97166C69.6909%209.05838%2068.9614%208.29571%2068.0177%208.29571C67.1017%208.29571%2066.3418%209.05838%2066.3418%209.97166V12.1049H69.6909V9.97166ZM79.4771%2014.7273C79.8736%2011.4652%2078.2571%208.44631%2075.3018%206.95413C70.7285%204.66888%2065.883%204.51551%2061.1592%206.5272C57.256%208.17275%2055.4599%2012.6852%2057.1026%2016.587C57.9565%2018.5987%2059.4197%2019.9997%2061.4618%2020.7624C66.0958%2022.5295%2070.7285%2022.4079%2075.2714%2020.3354C77.2209%2019.4512%2078.5942%2017.988%2079.3251%2015.9459H73.3495C72.7098%2018.0806%2070.4245%2019.2978%2068.2581%2018.6291C68.0771%2018.5683%2067.8933%2018.5061%2067.7123%2018.4149C66.8571%2018.0184%2066.3418%2017.1963%2066.3418%2016.2513V14.7273H79.4771ZM82.8884%2017.8968V4.21155H80.5133V0.85828H94.1696V17.8968H96.5764V21.2501H80.5133V17.8968H82.8884ZM46.2829%205.52136L51.1919%202.96115L49.6362%200.00441933L44.7286%202.53422L46.2829%205.52136ZM53.1428%2017.8968V5.91789H39.9439V9.27116H42.3494V17.8968H39.9439V21.2501H55.5483V17.8968H53.1428ZM20.0081%208.81383L25.771%200.85828H37.7803V4.21155H35.372V17.8968H37.7803V21.2501H22.1731V17.8968H24.5814V9.02661L15.7112%2021.2501L6.81057%209.02661V17.8968H9.21878V21.2501H0.59314V17.8968H2.96958V4.21155H0.59314V0.85828H14.2176L20.0081%208.81383Z'%20fill='%23242424'/%3e%3c/svg%3e",F1="/assets/15-VL89vzXY.svg",Z1="/assets/16-D9KRuHZe.svg",X1="/assets/17-BRD6G3-l.svg",W1="/assets/18-D69HL7ID.svg",K1="/assets/19-Dos04ydj.svg",Q1="/assets/21-BwEZSGFZ.svg",J1="/assets/22-CQ_f5juP.svg",eh="data:image/svg+xml,%3csvg%20width='160'%20height='26'%20viewBox='0%200%20160%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.01%2019.347L131.698%201.45459H137.34V24.006H129.228L123.598%205.49849H123.477L123.789%2024.006H118.183V1.45459H126.647L131.884%2019.347H132.01Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4529%203.56613L26.3316%2024.2433H20.1786L24.4041%201.45459H34.5405L38.7466%2024.2433H32.6178L29.5813%203.56613H29.4529Z'%20fill='%23242424'/%3e%3cpath%20d='M53.0771%2024.2433L49.2656%203.75501H49.1421L48.9993%2024.2433H43.2918L43.7955%201.45459H53.094L55.9078%2018.8748H56.0289L58.8451%201.45459H68.1388L68.6328%2024.2433H62.9374L62.7873%203.75501H62.6686L58.8596%2024.2433H53.0771Z'%20fill='%23242424'/%3e%3cpath%20d='M10.5821%2017.8141C10.8048%2018.3662%2010.737%2019.0757%2010.6329%2019.5043C10.4416%2020.2622%209.92826%2021.0347%208.4124%2021.0347C6.98372%2021.0347%206.11683%2020.2162%206.11683%2018.9643V16.7583H0.00497197L0.00012207%2018.5236C0.00012207%2023.6039%204.00044%2025.1367%208.28648%2025.1367C12.4079%2025.1367%2015.8028%2023.7274%2016.3428%2019.9305C16.6188%2017.9618%2016.413%2016.6736%2016.3186%2016.1869C15.3572%2011.4165%206.70767%209.99269%206.06355%207.3242C5.95458%206.86654%205.98606%206.38224%206.03933%206.12314C6.19673%205.39669%206.69556%204.59517%208.12182%204.59517C9.45364%204.59517%2010.2406%205.41848%2010.2406%206.66313C10.2406%207.08205%2010.2406%208.07002%2010.2406%208.07002H15.9239V6.46941C15.9239%201.50535%2011.4683%200.730469%208.24047%200.730469C4.18689%200.730469%200.874285%202.06956%200.268911%205.77929C0.10425%206.80358%200.0800345%207.71648%200.319761%208.85943C1.315%2013.516%209.41006%2014.8647%2010.5821%2017.8141Z'%20fill='%23242424'/%3e%3cpath%20d='M84.685%2017.773C84.9102%2018.3203%2084.8375%2019.0104%2084.7358%2019.439C84.5494%2020.1945%2084.0408%2020.9549%2082.5347%2020.9549C81.1254%2020.9549%2080.2657%2020.1364%2080.2657%2018.9135L80.2609%2016.7269H74.212L74.2047%2018.468C74.2047%2023.4974%2078.1687%2025.0157%2082.4112%2025.0157C86.489%2025.0157%2089.8524%2023.6258%2090.3827%2019.8628C90.6588%2017.9086%2090.4626%2016.6373%2090.3633%2016.1603C89.4069%2011.4335%2080.8444%2010.0242%2080.2076%207.38237C80.0986%206.92713%2080.1301%206.44768%2080.1858%206.20311C80.348%205.47181%2080.8372%204.68967%2082.2489%204.68967C83.5686%204.68967%2084.3387%205.49361%2084.3387%206.72857C84.3387%207.14265%2084.3387%208.12093%2084.3387%208.12093H89.9783V6.53727C89.9783%201.62648%2085.5591%200.856445%2082.3627%200.856445C78.3552%200.856445%2075.0692%202.17858%2074.4759%205.86168C74.3113%206.87144%2074.2943%207.76739%2074.5292%208.90549C75.5099%2013.5136%2083.5251%2014.8527%2084.685%2017.773Z'%20fill='%23242424'/%3e%3cpath%20d='M103.827%2020.8337C105.408%2020.8337%20105.902%2019.7392%20106.011%2019.1799C106.057%2018.9329%20106.069%2018.6035%20106.064%2018.3081V1.44482H111.827V17.7923C111.839%2018.2113%20111.798%2019.0733%20111.779%2019.2888C111.374%2023.5434%20108.011%2024.9236%20103.824%2024.9236C99.6326%2024.9236%2096.2667%2023.5434%2095.8671%2019.2888C95.8478%2019.0733%2095.8066%2018.2113%2095.8187%2017.7923V1.44482H101.577V18.3081C101.577%2018.6035%20101.587%2018.9353%20101.63%2019.1799C101.754%2019.7392%20102.233%2020.8337%20103.827%2020.8337Z'%20fill='%23242424'/%3e%3cpath%20d='M151.365%2020.5938C153.017%2020.5938%20153.593%2019.5502%20153.7%2018.9424C153.741%2018.6809%20153.753%2018.3636%20153.751%2018.0755V14.7677H151.411V11.4406H159.492V17.5573C159.487%2017.9835%20159.477%2018.2983%20159.41%2019.0586C159.029%2023.2042%20155.433%2024.6837%20151.394%2024.6837C147.348%2024.6837%20143.757%2023.2042%20143.372%2019.0586C143.307%2018.2983%20143.297%2017.9835%20143.29%2017.5573L143.295%207.96089C143.295%207.5565%20143.345%206.83974%20143.389%206.45957C143.895%202.20016%20147.348%200.82959%20151.394%200.82959C155.436%200.82959%20158.974%202.19289%20159.393%206.45957C159.468%207.18601%20159.443%207.96089%20159.443%207.96089V8.72124H153.697V7.44511C153.702%207.44754%20153.69%206.9027%20153.622%206.57822C153.525%206.07455%20153.087%204.91707%20151.351%204.91707C149.69%204.91707%20149.203%206.01159%20149.082%206.57822C149.012%206.87848%20148.985%207.2853%20148.985%207.65336V18.0755C148.98%2018.3636%20148.997%2018.6809%20149.043%2018.9424C149.142%2019.5526%20149.716%2020.5938%20151.365%2020.5938Z'%20fill='%23242424'/%3e%3c/svg%3e",th="/assets/24-Dmws8xhr.svg",nh="/assets/25-BaRLqQy_.svg",ih="/assets/26-B2H6SqHt.svg",ah="/assets/27-DBraEacE.svg",rh="data:image/svg+xml,%3csvg%20width='112'%20height='33'%20viewBox='0%200%20112%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_720)'%3e%3cpath%20d='M77.422%2013.2852C76.096%2013.3501%2073.7527%2014.0702%2073.2182%2016.3711L71.3498%2027.2529C70.9268%2029.6026%2072.0997%2032.2635%2074.6194%2032.2878H88.6321C90.433%2032.2608%2092.5012%2031.6842%2092.9916%2028.8771L95.0157%2017.508C95.3946%2015.2206%2093.8791%2013.3501%2091.7461%2013.2852H77.422Z'%20fill='%23242424'/%3e%3cpath%20d='M79.1346%2018.6451C78.1641%2018.5991%2077.8891%2018.9591%2077.7334%2019.4572L76.6435%2025.3041C76.5786%2026.1487%2077.0613%2027.0122%2077.8891%2027.0907H86.7638C87.6071%2027.0122%2088.2974%2026.4383%2088.4765%2025.629L89.4106%2020.2692C89.6753%2019.3191%2089.1927%2018.6018%2088.3208%2018.6451H79.1346Z'%20fill='white'/%3e%3cpath%20d='M70.5738%2018.6455H57.8067C56.8673%2018.5995%2056.5896%2018.9595%2056.4054%2019.4576L55.4712%2025.3046C55.2818%2026.1491%2055.7644%2027.0126%2056.7168%2027.0911H69.0168L68.0826%2032.2885H53.2915C50.8029%2032.2614%2049.63%2029.6005%2050.0218%2027.2536L52.0459%2016.3717C52.4559%2014.0681%2054.7991%2013.3507%2056.094%2013.2858H71.508L70.5738%2018.6455ZM43.48%2018.6455H31.0242L31.9584%2013.2858H45.9711C48.5245%2013.3507%2049.6949%2016.0117%2049.2407%2018.3207L47.3724%2029.2025C46.8716%2031.544%2044.5283%2032.2614%2043.1686%2032.2885H29.9344C27.3628%2032.2614%2026.1924%2029.6005%2026.6647%2027.2536L27.2875%2023.1932C27.778%2020.83%2030.1212%2020.11%2031.4913%2020.1072H43.1686C44.0457%2020.11%2044.7359%2018.6022%2043.48%2018.6455ZM25.7305%2018.6455H28.5331L29.4673%2013.2858H26.6647L28.8445%200.29248H23.8622L21.6824%2013.2858H7.51402C6.13351%2013.3507%203.79028%2014.0708%203.31021%2016.3717L1.44185%2027.2536C0.964382%2029.6032%202.1347%2032.2641%204.71148%2032.2885H20.9039C22.0561%2032.2614%2023.5015%2031.184%2023.7065%2029.5274L25.7305%2018.6455Z'%20fill='%23242424'/%3e%3cpath%20d='M7.98386%2027.0908C7.10158%2027.0123%206.61892%2026.1488%206.73829%2025.3042L7.82557%2019.4572C7.92677%2018.9592%208.20184%2018.6018%209.07115%2018.6452H20.7484L19.1914%2027.0908H7.98386Z'%20fill='white'/%3e%3cpath%20d='M103.268%2014.9093L104.513%2013.7724C105.115%2013.3501%20105.803%2013.3501%20106.537%2013.2852H111.052L110.118%2018.6449H105.136C103.875%2018.5989%20102.152%2019.2485%20101.866%2021.0811L99.8423%2032.2878H94.7043L98.1296%2013.2852H102.645L103.268%2014.9093Z'%20fill='%23242424'/%3e%3cpath%20d='M32.4256%2027.0908C31.6368%2027.0123%2031.4993%2025.3583%2032.737%2025.3042H43.013L42.7016%2027.0908H32.4256Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_720'%3e%3crect%20width='109.714'%20height='32'%20fill='white'%20transform='translate(1.33813%200.290039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",sh="/assets/29-yivH26vR.svg",oh="/assets/30-DGc1459t.svg",lh="data:image/svg+xml,%3csvg%20width='121'%20height='36'%20viewBox='0%200%20121%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.45829%2023.2381H3.99829L2.66629%2018.1861H9.61429L21.9503%200.810059H31.3103L28.9703%2018.1261L41.9903%2018.1859L42.5663%2018.8819C45.6863%2016.7461%2049.8983%2016.7461%2051.4101%2019.4461C53.4981%2017.1899%2058.1781%2017.0579%2059.7621%2019.9499C60.3621%2021.0657%2060.2661%2022.5421%2059.7621%2024.3181L57.8663%2030.3901C57.9863%2031.0141%2058.6823%2032.4061%2056.9783%2032.4061H50.3423L52.4903%2025.7101C53.0543%2023.7419%2050.6543%2023.7419%2050.0903%2025.6499L48.0023%2032.3462H41.1743L43.2623%2025.5181C43.8863%2023.5621%2041.3543%2023.5621%2040.8503%2025.5779L38.7623%2032.2859H31.6223L33.8303%2025.1339C33.9623%2024.6301%2033.9023%2024.1859%2032.9543%2024.1859H28.1423L27.0743%2032.2501L16.7663%2032.2859L18.1583%2024.1859H12.1463L4.87429%2035.1897L0.446289%2031.7101L6.45829%2023.2381ZM16.0103%2018.1741L19.2023%2018.2102L20.3063%2011.8022L16.0103%2018.1741ZM107.222%2032.5262C105.578%2033.0301%20102.794%2033.3541%20101.222%2031.9621C99.6383%2030.5701%2099.5785%2027.1499%20100.526%2024.6899C101.786%2021.3419%20104.066%2018.2459%20107.474%2017.7421C109.694%2017.4301%20112.406%2018.3061%20113.99%2019.6981L114.302%2018.6899H120.446L116.642%2030.9539C116.894%2031.5779%20117.47%2032.4659%20116.138%2032.4659H109.694L110.042%2031.2661C109.214%2031.7342%20108.242%2032.2739%20107.222%2032.5262ZM107.042%2026.6821C107.198%2026.9341%20107.582%2027.2579%20108.278%2027.0059C109.514%2026.5859%20111.662%2024.5701%20112.01%2023.1419C111.122%2021.8817%20109.862%2021.5937%20108.53%2022.7341C107.774%2023.3941%20106.514%2025.7701%20107.042%2026.6821ZM62.1505%2031.9621C60.5665%2030.5701%2060.5063%2027.2222%2061.4545%2024.6899C62.6543%2021.3419%2064.9941%2018.2459%2068.4145%2017.7541C70.6225%2017.4421%2073.3465%2018.3061%2074.9305%2019.6981L75.2423%2018.6899H81.3745L77.5825%2030.9539C77.8345%2031.5899%2078.3985%2032.4659%2077.0786%2032.4659H70.6226L70.9706%2031.3379C70.1546%2031.8061%2069.1346%2032.2859%2068.1626%2032.5377C66.5183%2032.9819%2063.7345%2033.3541%2062.1505%2031.9621ZM68.2465%2026.6821C68.3783%2026.9702%2068.8223%2027.2579%2069.4825%2027.0059C70.7185%2026.5619%2072.8663%2024.5701%2073.2143%2023.1419C72.3263%2021.8817%2071.0903%2021.5339%2069.7345%2022.7341C69.0385%2023.3699%2067.8025%2025.6741%2068.2465%2026.6821ZM86.6181%2032.3342L88.7063%2025.6382C89.2821%2023.7421%2091.5503%2023.6822%2090.9863%2025.6382L89.0901%2032.4061H95.5943C97.3101%2032.4061%2096.6141%2031.0141%2096.4823%2030.3781L98.3781%2024.3061C98.882%2022.5421%2098.9181%2021.4021%2098.2583%2020.2019C96.77%2017.5499%2092.4981%2017.4659%2090.0383%2019.6261L89.5943%2018.7501H83.966L79.7901%2032.3341H86.6181V32.3342Z'%20fill='%23242424'/%3e%3c/svg%3e",Sk=[{id:1,imageUrl:H1},{id:2,imageUrl:$c},{id:3,imageUrl:z1},{id:4,imageUrl:V1},{id:5,imageUrl:P1},{id:6,imageUrl:N1},{id:7,imageUrl:$1},{id:8,imageUrl:B1},{id:9,imageUrl:U1},{id:10,imageUrl:_1},{id:11,imageUrl:I1},{id:12,imageUrl:G1},{id:13,imageUrl:q1},{id:14,imageUrl:Y1},{id:15,imageUrl:F1},{id:16,imageUrl:Z1},{id:17,imageUrl:X1},{id:18,imageUrl:W1},{id:19,imageUrl:K1},{id:20,imageUrl:$c},{id:21,imageUrl:Q1},{id:22,imageUrl:J1},{id:23,imageUrl:eh},{id:24,imageUrl:th},{id:25,imageUrl:nh},{id:26,imageUrl:ih},{id:27,imageUrl:ah},{id:28,imageUrl:rh},{id:29,imageUrl:sh},{id:30,imageUrl:oh},{id:31,imageUrl:lh}],Ck=w.div`
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
`,Tk=w.img`
  height: 32px;
  max-width: min-content;
  /* width: auto; */
  object-fit: contain;
  filter: brightness(1) invert(1);
  transition: all 0.3s ease;
  overflow: visible;
`,Ek=w(Bt)`
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
`,jk=()=>m.jsx(Ck,{children:m.jsx(Ek,{direction:"vertical",slidesPerView:10,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:4e3,modules:[nn],grabCursor:!1,allowTouchMove:!1,children:Sk.map(e=>m.jsx(Ut,{children:m.jsx(Tk,{src:e.imageUrl,alt:`Partner ${e.id}`,onError:t=>{t.target.style.display="none"}})},e.id))})}),Ak=()=>{const e=De({query:"(min-width: 1440px)"});return m.jsxs(uL,{id:"hero",children:[m.jsx(dL,{src:bk,alt:"Hero Image"}),e&&m.jsx(jk,{}),m.jsxs(fL,{children:[m.jsxs(pL,{children:[m.jsx(hL,{children:"Your Local Appliance Repair & Maintenance Specialists"}),m.jsx(mL,{children:"We provide reliable appliance repair services, so your fridge, oven, or washer works like new — and you can get back to your day."})]}),m.jsxs(gL,{children:[m.jsx(My,{to:"/contact#ap",children:"Contact Us"}),m.jsx(_5,{children:m.jsx("a",{href:"tel:+18055002705",children:" Call Us"})})]})]})]})},Mk="/assets/News%20Article%202%20Image%20Container-Dg9jwMew.png",Lk="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",Ok="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",Rk="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",Gx=[{img:Mk,title:"APPLIANCE INSTALLATION SERVICES",description:"Professional installation for appliances, ensuring safety."},{img:Lk,title:"WHEN YOUR REFRIGERATOR STOPS COOLING: URGENT REPAIR SIGNS",description:"Don't wait for food to spoil. Know the signs needing urgent help."},{img:Ok,title:"WASHING MACHINE TROUBLESHOOTING",description:"Quick solutions for common washing machine issues."},{img:Rk,title:"DISHWASHER MAINTENANCE TIPS",description:"Keep your dishwasher running smoothly with these tips."}],kk=()=>{const e=R.useRef(null),t=De({query:"(max-width: 767px)"}),i=De({query:"(min-width: 768px)"}),r=De({query:"(min-width: 1440px)"}),o=t?1:2,l=Gx.length>o;return m.jsxs(Nk,{children:[m.jsxs($k,{children:[m.jsx(Bk,{children:"NEWS & TIPS"}),m.jsxs(Uk,{children:["APPLIANCE ",m.jsx("span",{children:"ADVICE"})," REPAIR ",m.jsx("span",{children:"TIPS"})," BLOG"]})]}),m.jsxs(Pk,{children:[m.jsx(qx,{onClick:()=>{var u;return(u=e.current)==null?void 0:u.slidePrev()},bg:"#DBDBD8",children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),m.jsx(qx,{onClick:()=>{var u;return(u=e.current)==null?void 0:u.slideNext()},bg:"#3098EE",children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),m.jsx(Dk,{$isTablet:i,children:m.jsx(Bt,{modules:[k1,nn],onSwiper:u=>e.current=u,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:Gx.map((u,d)=>m.jsx(Ut,{children:m.jsxs(_k,{$isTablet:i,children:[m.jsx(Ik,{src:u.img,alt:u.title,$isTablet:i}),m.jsxs(Gk,{children:[m.jsx(qk,{$isTablet:i,children:u.title}),m.jsx(Yk,{$isTablet:i,children:u.description})]})]})},d))})})]})},Dk=w.div`
  width: 100%;
  padding: 20px 0;
  
  .swiper-slide {
    width: ${e=>e.$isTablet?"50%":"auto"};
  }
`,Hk=We`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,zk=We`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,Vk=We`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,Pk=w.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,qx=w.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${e=>e.bg};
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
    animation: ${Hk} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }

    ${e=>e.bg==="#DBDBD8"&&It`
      background-color: #c8c8c5;
      svg {
        animation: ${zk} 0.4s ease;
      }
    `}

    ${e=>e.bg==="#3098EE"&&It`
      background-color: #2580d6;
      svg {
        animation: ${Vk} 0.4s ease;
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
`,Nk=w.div`
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
`,$k=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,Bk=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);
  
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,Uk=w.p`
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
`,_k=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: ${e=>e.$isTablet?"100%":"288px"};
  height: 517px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: ${e=>e.$isTablet?"100%":"288px"};
  }

  @media screen and (min-width: 1440px) {
    width: 656px;
  }
`,Ik=w.img`
  border-radius: 8px;
  width: ${e=>e.$isTablet?"100%":"288px"};
  height: 395px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    max-width: ${e=>e.$isTablet?"100%":"288px"};
  }

  @media screen and (min-width: 1440px) {
  max-width: ${e=>e.$isTablet?"100%":"656px"};
  }
`,Gk=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,qk=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,Yk=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,Fk=w.div`
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
`;w.p`
  padding: 10px auto 50px auto;
  width: 90%;
  height: 1px; /* Збільшуємо висоту для еліпса */
  margin: 20px auto;
  background: radial-gradient(
      ellipse 118.85px 58.06px at 50% 50%,
      rgb(252, 252, 252) 0%,
      rgba(58, 55, 55, 0.42) 80%
    );
`;w.div`
height : auto;
width: 100%;
padding: 0 auto;
margin: 0 auto;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){

margin-right: 50px;
}
`;const ic=w.img`
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
`,Zk=w(En.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,Xk=w(En.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,Wk=w.h3`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 90%;
text-transform: uppercase;
text-align: center;
color: var(--black-500);
`,Qy="data:image/svg+xml,%3csvg%20width='212'%20height='14'%20viewBox='0%200%20212%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_572)'%3e%3cpath%20d='M0.00384521%2013.2272V0.640137H8.99637V3.40837H3.33527V5.99308H8.54597V8.76131H3.33527V13.2272H0.00384521Z'%20fill='%23242424'/%3e%3cpath%20d='M18.6412%2013.2272H15.3253V0.640137H18.6412V13.2272Z'%20fill='%23242424'/%3e%3cpath%20d='M25.0556%209.25083C26.3309%2010.122%2027.8304%2010.6204%2029.381%2010.6885C30.3595%2010.6885%2031.2758%2010.4591%2031.2758%209.61789C31.2758%209.02907%2030.8409%208.79966%2030.1964%208.61613L28.2628%208.08083C26.1117%207.44613%2024.9935%206.43671%2024.9935%204.44848C24.9935%202.0473%2027.1368%200.472008%2029.8858%200.472008C31.2634%200.447396%2032.6243%200.771251%2033.8385%201.4126V4.47142C32.6991%203.68452%2031.3471%203.2505%2029.9557%203.22495C28.9617%203.22495%2028.255%203.50789%2028.255%204.20377C28.255%204.71613%2028.6045%204.9226%2029.2723%205.12907L31.2059%205.7026C33.5356%206.42142%2034.5995%207.5073%2034.5995%209.39613C34.5995%2012.1032%2032.1223%2013.4949%2029.3732%2013.4949C27.8643%2013.4989%2026.378%2013.1337%2025.0478%2012.432L25.0556%209.25083Z'%20fill='%23242424'/%3e%3cpath%20d='M52.4525%200.640137V13.2272H49.1211V8.18778H44.2676V13.2272H40.8973V0.640137H44.2676V5.41955H49.1599V0.640137H52.4525Z'%20fill='%23242424'/%3e%3cpath%20d='M68.6747%200.640137V3.40837H62.9049V5.41955H68.2166V8.18778H62.9049V10.4819H68.7136V13.2501H59.5347V0.640137H68.6747Z'%20fill='%23242424'/%3e%3cpath%20d='M75.524%200.640137H80.9599C83.8098%200.640137%2085.9764%202.16955%2085.9764%204.98367C86.0132%205.85467%2085.761%206.71377%2085.2581%207.43116C84.7551%208.14856%2084.0287%208.68525%2083.1886%208.96014L86.5589%2013.2272H82.6761L79.6553%209.33484H78.8244V13.2272H75.524V0.640137ZM78.8554%206.55131H80.7657C81.9694%206.55131%2082.746%205.9319%2082.746%204.96837C82.746%204.00484%2081.9694%203.39308%2080.7657%203.39308H78.8709L78.8554%206.55131Z'%20fill='%23242424'/%3e%3cpath%20d='M106.485%2012.1795C105.502%2013.0123%20104.241%2013.4588%20102.944%2013.4337C100.242%2013.4337%2097.9897%2011.6901%2097.9897%208.84543C98.0077%208.02146%2098.2249%207.21358%2098.6233%206.48878C99.0217%205.76399%2099.5899%205.14316%20100.281%204.67778L99.007%203.14837V0.640137H107.549V3.40837H102.991L106.446%207.7519L107.223%206.56661H110.679L108.217%2010.0537L110.756%2013.2272H107.285L106.485%2012.1795ZM104.738%2010.0537L102.051%206.78837C101.716%207.01078%20101.442%207.31015%20101.251%207.66058C101.06%208.01101%20100.959%208.40194%20100.956%208.79955C100.953%209.05676%20101.003%209.31195%20101.102%209.54974C101.202%209.78752%20101.349%2010.003%20101.536%2010.1831C101.722%2010.3631%20101.944%2010.5042%20102.187%2010.5976C102.431%2010.691%20102.691%2010.7349%20102.952%2010.7266C103.28%2010.737%20103.607%2010.6828%20103.914%2010.5673C104.22%2010.4518%20104.501%2010.2771%20104.738%2010.0537Z'%20fill='%23242424'/%3e%3cpath%20d='M126.264%2013.2272H122.933V0.640137H128.369C131.219%200.640137%20133.385%202.16955%20133.385%204.98367C133.385%207.79778%20131.219%209.33484%20128.369%209.33484H126.264V13.2272ZM126.264%206.56661H128.136C129.347%206.56661%20130.116%205.9472%20130.116%204.98367C130.116%204.02014%20129.339%203.40837%20128.136%203.40837H126.241L126.264%206.56661Z'%20fill='%23242424'/%3e%3cpath%20d='M145.997%2010.9101H140.879L139.963%2013.2043H136.678L141.881%200.640137H145.049L150.252%2013.2272H146.897L145.997%2010.9101ZM141.982%208.1419H144.894L143.442%204.45602L141.982%208.1419Z'%20fill='%23242424'/%3e%3cpath%20d='M157.288%2013.2272V8.34837L152.457%200.640137H156.208L159.058%205.49602L161.908%200.640137H165.449L160.619%208.34837V13.2272H157.288Z'%20fill='%23242424'/%3e%3cpath%20d='M173.487%205.99308L177.571%200.640137H181.454L176.733%206.66602L181.64%2013.2272H177.688L173.487%207.59131V13.2272H170.155V0.640137H173.487V5.99308Z'%20fill='%23242424'/%3e%3cpath%20d='M195.751%200.640137V3.40837H189.934V5.41955H195.246V8.18778H189.934V10.4819H195.751V13.2501H186.603V0.640137H195.751Z'%20fill='%23242424'/%3e%3cpath%20d='M202.6%200.640137H205.931V10.459H211.678V13.2272H202.6V0.640137Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_572'%3e%3crect%20width='212'%20height='13'%20fill='white'%20transform='translate(0.00384521%200.433594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Jy=()=>{const e=De({query:"(max-width: 743px)"}),t=De({query:"(min-width: 744px) and (max-width: 1023px)"}),i=De({query:"(min-width: 1024px)"}),r=[{id:1,imageUrl:H1},{id:2,imageUrl:$c},{id:3,imageUrl:z1},{id:4,imageUrl:V1},{id:5,imageUrl:P1},{id:6,imageUrl:N1},{id:7,imageUrl:$1},{id:8,imageUrl:B1},{id:9,imageUrl:U1},{id:10,imageUrl:_1},{id:11,imageUrl:I1},{id:12,imageUrl:G1},{id:13,imageUrl:q1},{id:14,imageUrl:Y1},{id:15,imageUrl:F1},{id:16,imageUrl:Z1},{id:17,imageUrl:X1},{id:18,imageUrl:W1},{id:19,imageUrl:K1},{id:20,imageUrl:Qy},{id:21,imageUrl:Q1},{id:22,imageUrl:J1},{id:23,imageUrl:eh},{id:24,imageUrl:th},{id:25,imageUrl:nh},{id:26,imageUrl:ih},{id:27,imageUrl:ah},{id:28,imageUrl:rh},{id:29,imageUrl:sh},{id:30,imageUrl:oh},{id:31,imageUrl:lh}],o=e?2:t?4:5,l=r.length>o;return m.jsxs("div",{children:[m.jsx(Wk,{children:"Quality Service for Major & Luxury Brands"}),m.jsxs(Fk,{children:[m.jsx(Zk,{}),m.jsx(Bt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[nn],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:r.map(u=>m.jsx(Ut,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?m.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):m.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),m.jsx(Bt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[nn],className:"mySwiper",style:{width:"100%"},children:r.map(u=>m.jsx(Ut,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?m.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):m.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),m.jsx(Xk,{})]})," "]})},e7="/assets/ServicesImage-BRQYmF9y.png",Kk=w.div`
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
`,Qk=w.p`
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
`,Jk=w.div`
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
`,eD=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Yx=w.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,tD=w.p`
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
`,nD=w.p`
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
`,Fx=w.p`
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
`,iD=w.p`
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
`,aD=w.img`
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
`,Zx=w.div`
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
`,Xx=w.p`
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
`,Sp=w(wt)`
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
`,Wx=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Sp}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,rD=w.div`
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
`,sD=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,oD=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,lD=w.p`
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
`,cD=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,uD=w(wt)`
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
`,ch=w.button`
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
`,t7=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${ch}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,dD=w(t7)`
  color: #242424;

  ${ch}:hover & {
    color: white;
  }
`,fD=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,pD=()=>{const e=De({query:"(min-width: 1440px)"});return m.jsxs(Kk,{children:[m.jsx(Qk,{children:"Our Service"}),m.jsxs(Jk,{children:[m.jsxs(eD,{children:[m.jsxs(Yx,{children:[m.jsx(tD,{children:"01."}),m.jsx(nD,{children:"Appliance Care & Tune-Ups"})]}),m.jsx(Fx,{children:"Professional Installations"}),m.jsx(Fx,{children:"Fast & Reliable Emergency Repairs"}),e&&m.jsxs(Zx,{children:[m.jsx(Xx,{children:"Do you want to know more about our service?"}),m.jsx(Sp,{to:"/fridge#ap",children:m.jsx(Wx,{children:"Learn more"})})]})]}),m.jsxs(fD,{children:[m.jsx(aD,{src:e7,alt:"Services Image"}),m.jsxs(rD,{children:[m.jsxs(sD,{children:[m.jsx(Yx,{children:m.jsx(iD,{children:"Preventive Care"})}),m.jsx(oD,{children:m.jsx(lD,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})]}),m.jsxs(cD,{children:[m.jsx(uD,{to:"/contact#ap",children:m.jsx(t7,{children:"Contact Us"})}),m.jsx(ch,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(dD,{children:"Call Us"})})})]})]})]}),!e&&m.jsxs(Zx,{children:[m.jsx(Xx,{children:"Do you want to know more about our service?"}),m.jsx(Sp,{to:"/fridge#ap",children:m.jsx(Wx,{children:"Learn more"})})]})]})]})},hD="/assets/Service%20Area%20Section-B7et7wWI.webp",mD=w.div`
  background-image: url(${({$bg:e})=>e});
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
`,gD=w.h2`
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
`,xD=w.p`
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
`,yD=w.div`
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
`,vD=w.div`
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
`,wD=w.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,bD=w.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,SD=w.p`
  color: #3098ee;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,CD=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,TD=[{county:"Ventura County",city:"Thousand Oaks",icon:m.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:m.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Newbury Park",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Westlake Village",icon:m.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:m.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Oak Park",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Lake Sherwood",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Hidden Valley",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Camarillo",icon:m.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:m.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Agoura Hills",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Moorpark",icon:m.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:m.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Calabasas",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Santa Rosa Valley",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Malibu",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}],ED=()=>m.jsxs(mD,{$bg:hD,children:[m.jsx(gD,{children:"Serving Ventura and Los Angeles Counties"}),m.jsx(xD,{children:"We provide expert service throughout the greater Los Angeles area."}),m.jsx(yD,{children:TD.map((e,t)=>m.jsxs(vD,{children:[m.jsxs(wD,{children:[m.jsx(bD,{children:e.icon}),m.jsx(SD,{children:e.county})]}),m.jsx(CD,{children:e.city})]},t))})]}),jD="/assets/WhyAirtexnoImage-BBTHkk8n.png",Kx="/assets/WhyAirtexnoImage2-BIh43Sbv.png",AD="/assets/WhyAirtexnoImage3-C5uIh3SS.png",M0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2011H4.6C4.03995%2011%203.75992%2011%203.54601%2011.109C3.35785%2011.2049%203.20487%2011.3578%203.10899%2011.546C3%2011.7599%203%2012.0399%203%2012.6V21M16.5%2011H19.4C19.9601%2011%2020.2401%2011%2020.454%2011.109C20.6422%2011.2049%2020.7951%2011.3578%2020.891%2011.546C21%2011.7599%2021%2012.0399%2021%2012.6V21M16.5%2021V6.2C16.5%205.0799%2016.5%204.51984%2016.282%204.09202C16.0903%203.71569%2015.7843%203.40973%2015.408%203.21799C14.9802%203%2014.4201%203%2013.3%203H10.7C9.5799%203%209.01984%203%208.59202%203.21799C8.2157%203.40973%207.90973%203.71569%207.71799%204.09202C7.5%204.51984%207.5%205.0799%207.5%206.2V21M22%2021H2M11%207H13M11%2011H13M11%2015H13'%20stroke='%233098EE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",MD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206V12L16%2014M22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",LD=()=>{const e=De({query:"(max-width: 743px)"}),t=De({query:"(min-width: 744px) and (max-width: 1023px)"}),i=De({query:"(min-width: 1024px)"}),r=De({query:"(min-width: 1440px)"}),o=[{title:"Manufacturer-Trained Technicians",text:"Our team is trained to service leading brands like Sub-Zero, Viking, GE Monogram, and more — ensuring expert repairs done right the first time.",image:jD,icon:M0},{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:Kx,icon:MD},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:AD,icon:M0},{title:"Local & Fair Pricing",text:"As a local Thousand Oaks company, we treat our community like neighbors. With direct access to parts and highly trained techs, we keep our prices fair — without steep markups. While costs keep rising everywhere, we work hard to keep appliance repair affordable.",image:Kx,icon:M0}],l=e?1:t?2:3,u=o.length>l;return m.jsxs(BR,{children:[m.jsxs(UR,{children:[m.jsx(_R,{children:"why airtexno"}),m.jsxs(IR,{children:["Same-Day Appliance Repair ",m.jsx(Wy,{children:"You Can Rely On"})," "]})]}),m.jsx(KR,{children:m.jsx(qR,{$isLargeDesktop:r,children:m.jsx(Bt,{modules:[eO,nn],pagination:{clickable:!0},spaceBetween:r?0:20,loop:u,slidesPerView:l,centeredSlides:r,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,className:"businessSwiper",children:o.map((d,p)=>m.jsx(Ut,{children:m.jsx(FR,{style:{backgroundImage:`url(${d.image})`},$isLargeDesktop:r,className:"slide-container",children:(d.title||d.text||d.icon)&&m.jsxs("div",{className:"overlay",children:[(d.title||d.icon)&&m.jsxs(ZR,{children:[d.title&&m.jsx(GR,{children:d.title}),d.icon&&m.jsx(XR,{className:"icon-wrapper",children:m.jsx("img",{src:d.icon,alt:d.title||"icon",className:"icon-image"})})]}),d.text&&m.jsx(WR,{className:"slide-text",children:d.text})]})})},p))})})})]})},OD=w.div`
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
`,L0=()=>m.jsx(m.Fragment,{children:m.jsxs(OD,{id:"hero",children:[m.jsx(Ak,{}),m.jsx(pD,{}),m.jsx(LD,{}),m.jsx(Ky,{}),m.jsx(ED,{}),m.jsx(Jy,{}),m.jsx(cu,{}),m.jsx(kk,{}),m.jsx(lu,{})]})}),RD=w.div`
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
  `,kD="/assets/Team%20Member%20Image-mppsJqlp.png",DD="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99992%200.833008V17.1663M0.833252%208.99967H17.1666'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",HD=We`
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
`,zD=We`
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
`,VD=We`
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
`,Cp=w.p`
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
`,PD=w.button`
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
      ${zD} 1s ease,
      ${VD} 0.6s ease;
    background-position: 100% 50%;
    transform: translateY(-3px);
    box-shadow:
      0 8px 25px rgba(48, 152, 238, 0.4),
      0 4px 15px rgba(48, 152, 238, 0.3);

    &::before {
      left: 100%;
    }

    svg {
      animation: ${HD} 1s ease;
    }

    ${Cp} {
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

    &:hover ${Cp} {
      transform: translateX(3px);
    }
  }
`,ND=w.div`
  display: flex;
  padding: 0px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  overflow: auto;
  margin: 0 auto;
  /* margin-bottom: 44px; */
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
`,$D=w.div`
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
`,BD=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,UD=w.img`
  border-radius: 74px;
  width: 119px;
  height: 119px;
  object-fit: cover;
  margin-bottom: 36px;
`,_D=w.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,ID=w.p`
  color: #242424;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 400;
  line-height: 1em;
  width: 100%;
  padding-bottom: 16px;
`,GD=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,qD=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`,YD=w.div`
  position: relative;
  width: 44px;
  height: 44px;
`,FD=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  background: #c6e6ff;
  border-radius: 100px;
`,ZD=w.p`
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
const XD=w.div`
  display: flex;
  margin: 0 auto;
  // margin-top: 100px;
  width: 100%;
  height: 100%;
  /* margin-bottom: 100px; */
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
`,WD=w.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);
  margin-bottom: 48px;
`;w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 26px;
`;const KD=w.div`
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
`,QD=w.button`
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
`,JD=w.div`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  transform: scaleY(${({$isOpen:e})=>e?1:0});
  transform-origin: top;
  height: auto;
  max-height: ${({$isOpen:e})=>e?"1000px":"0"};
  opacity: ${({$isOpen:e})=>e?1:0};
  overflow: hidden;
  transition:
    transform 0.4s ease,
    opacity 0.3s ease,
    max-height 0.4s ease;
  margin-top: ${({$isOpen:e})=>e?"12px":"0"};
  will-change: transform, opacity, max-height;

  @media screen and (min-width: 744px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,eH=w.img.attrs(()=>({}))`
  width: 14px;
  height: 15px;
  transition: transform 0.6s ease;

  ${({$rotate:e})=>e&&`
        transform: rotate(136deg);
      `}

  @media screen and (min-width: 744px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,tH=w.div`
  @media screen and (min-width: 1440px) {
    min-width: 650px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,nH=w.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;

    flex-shrink: 0; /* Забороняємо звуження */
  }
`,uh=()=>{const[e,t]=R.useState(null),i=[{question:"How quickly can you repair my appliance?",answer:"Most repairs are completed within 2-4 hours. We offer same-day service for urgent cases and typically schedule appointments within 24-48 hours of your call."},{question:"Do you offer emergency repair services?",answer:"Yes, we provide urgent repairs for urgent situations to minimize your inconvenience. Our emergency service is available 7 days a week with response times as quick as 2 hours."},{question:"What brands and appliances do you service?",answer:"We service all major brands including Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, and more. We repair refrigerators, ovens, dishwashers, washing machines, dryers, microwaves, and other household appliances."},{question:"How do I schedule a repair?",answer:"You can schedule a repair by calling our hotline, filling out the online form on our website, or texting us. We'll arrange a convenient time slot and provide a technician with the necessary parts."},{question:"What if I'm not satisfied with the repair?",answer:"We offer a 90-day warranty on all repairs and parts. If you're not satisfied, we'll re-repair your appliance at no additional cost or provide a full refund for the service."},{question:"How much will the repair cost?",answer:"Repair costs vary based on the appliance type and issue complexity. We provide free diagnostics and transparent upfront pricing before any work begins. Typical repairs range from $150-$400 including parts and labor."}],r=o=>{t(l=>l===o?null:o)};return m.jsxs(ND,{children:[m.jsxs($D,{children:[m.jsxs(BD,{children:[m.jsx(UD,{src:kD,alt:"Team Member Image"}),m.jsxs(_D,{children:[m.jsxs("div",{children:[m.jsx(ID,{children:"Book a Call"}),m.jsx(GD,{children:"Time to get introduced and explore how we can help"})]}),m.jsx("a",{href:"tel:+18055002705",children:m.jsxs(PD,{children:[m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),m.jsx(Cp,{children:"Call us now"})]})})]})]}),m.jsxs(qD,{children:[m.jsxs(YD,{children:[m.jsx(FD,{}),m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",left:"10px",top:"10px"},children:m.jsx("path",{d:"M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z",stroke:"#808080",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),m.jsxs(ZD,{children:["Prefer email communication?",m.jsx("br",{}),m.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]})]})]}),m.jsxs(XD,{children:[m.jsx(tH,{children:m.jsx(En.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!1,amount:.3},children:m.jsx(WD,{children:"Frequently Asked Questions"})})}),m.jsx(nH,{children:i.map((o,l)=>m.jsx(En.div,{initial:{opacity:0,y:l%2===0?40:-40},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:l*.1},viewport:{once:!1,amount:.3},children:m.jsxs(KD,{children:[m.jsxs(QD,{onClick:()=>r(l),children:[o.question,m.jsx(eH,{src:DD,alt:"Toggle answer",$rotate:e===l})]}),m.jsx(En.div,{initial:{opacity:0,scale:.9},animate:e===l?{opacity:1,scale:1}:{opacity:0,scale:.9},transition:{duration:.4},style:{overflow:"hidden"},children:m.jsx(JD,{$isOpen:e===l,children:o.answer})})]})},l))})]})]})},iH=w.div`
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
`,aH=w.img`
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
`,rH=w.div`
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
`,sH=w.div`
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
`,oH=w.p`
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
`,lH=w.p`
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
`;w.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w(wt)`
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
`;w.button`
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
`;w.div`
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
`;w.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.div`
  display: flex;
  align-items: center;
  gap: 7px;
  width: 156px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.img`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  max-width: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;w.div`
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
`;w.div`
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
`;w.span`
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
`;w.p`
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
`;w.div`
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
`;w.div`
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
`;w.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 1440px) {
    width: auto;
    margin: 0 auto;
  }
`;w.img`
  border-radius: 18px;
  border: 1px solid var(--black);
  width: 36px;
  height: 36px;
  margin-left: -20px;
`;w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
`;w.div`
  margin: 0 auto;
  width: 285px;
  // height: 43px;
  margin-top: 20px;
  display: flex;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1440px) {
  }
`;w.button`
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
`;We`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 73, 74, 0.81);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`;w.button`
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
`;const cH="/assets/HeroImage2About-CoU9D2Tq.png",uH=()=>m.jsxs(iH,{id:"ap",children:[m.jsx(aH,{src:cH,alt:"Hero Image"}),m.jsx(rH,{children:m.jsxs(sH,{children:[m.jsx(lH,{children:"About Our Company and Team"}),m.jsx(oH,{children:"Fast, affordable, and trusted service"})]})})]}),dH=w.section`
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
`,fH=w.div`
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
`,pH=w.h3`
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
`,O0=w.span`
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
`,hH=w.div`
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
`,mH=w.div`
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
`,Qx=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }
`,gH=w.div`
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
`,xH=w.div`
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
`,Jx=w.p`
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
`,yH=w.img`
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
`,vH=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`,wH="/assets/Services%20Image-e7Omvubx.png",bH="/assets/Team%20Image-CG0rB-nI.png",SH=()=>{const e=De({query:"(min-width: 1440px)"});return m.jsxs(dH,{children:[m.jsx(fH,{children:m.jsxs(pH,{children:["Our mission is to provide ",m.jsx(O0,{children:"reliable"})," and ",m.jsx(O0,{children:"efficient"}),"appliance repair services that improve",m.jsx(O0,{children:"everyday "}),"life"," "]})}),m.jsxs(vH,{children:[m.jsxs(gH,{children:[m.jsx("img",{src:wH,alt:"image"}),m.jsxs(mH,{children:[m.jsx(Qx,{children:"“Our goal is to bring comfort and convenience back to your home with every repair. We believe in honest service, quality workmanship, and building lasting relationships with our customers,”"}),m.jsx(hH,{children:"Sanal Gariaev"}),m.jsx(Qx,{children:"Chief Executive Officer"})]}),m.jsxs(Jx,{children:["As a highly regarded and trusted appliance repair company, we take immense pride in having served our community with exceptional repair services since [год основания]. Our extensive experience and commitment to excellence have allowed us to build strong relationships with our customers. We fully recognize how vital it is for your household to have functioning appliances, as they play a crucial role in your daily routine. Whether it's your refrigerator keeping your food fresh, your washing machine ensuring your clothes are clean, or your oven preparing meals for your family, any malfunction can disrupt your life. That’s why our primary goal is to restore the performance of your appliances swiftly and affordably, ensuring that you can return to your normal routine with minimal interruption. ",m.jsx("br",{}),e&&m.jsxs(m.Fragment,{children:[m.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client’s needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})," "]})]}),m.jsxs(xH,{children:[!e&&m.jsxs(Jx,{children:[m.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client’s needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]}),m.jsx(yH,{src:bH,alt:"team"})]})]})]})},CH=w.section`
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
`,TH=w.p`
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
`,EH=w.p`
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
`,jH=w.div`
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
`,AH=w.div`
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
`,MH=w.div`
  background: rgba(33, 33, 33, 0.5);
  width: 100%;
  height: 1px;
`,LH=w.div`
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
`,OH=w.div`
  @media (min-width: 768px) {
    flex-shrink: 0;
  }

  @media (min-width: 1440px) {
    margin-right: 5.25rem; /* 84px - approximate gap-21 */
  }
`,RH=w.p`
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
`,kH=w.div`
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
`,DH=w.p`
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
`,HH=w.p`
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
`,zH=w.img`
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
`,VH="/assets/ValueImage-GehUXRc0.png",PH="/assets/ValueImage1-XDPVu8iL.png",NH="/assets/ValueImage2-CBdwtolx.png",$H="/assets/ValueImage3-4cmMPphm.png",BH=()=>{const e=i=>({__html:i}),t=[{id:1,number:"01",title:"<span>Reliable</span> Service",description:"We are committed to providing trustworthy repairs that you can count on. Our technicians arrive on time and deliver lasting solutions to keep your appliances running smoothly.",image:VH,alt:"Reliable Service"},{id:2,number:"02",title:"<span>Fast</span> Response",description:"We understand the importance of a quick fix. Our team works efficiently to diagnose and repair your appliances as soon as possible, minimizing downtime and inconvenience.",image:PH,alt:"Fast Response"},{id:3,number:"03",title:"<span>Customer-Centric</span> Approach",description:"Your satisfaction is our priority. We listen carefully to your needs and tailor our services to meet your specific requirements, ensuring a positive experience every time.",image:NH,alt:"Quality Work"},{id:4,number:"04",title:"Quality <span>and</span> Trust",description:"We use only high-quality parts and follow industry best practices to ensure durable repairs. Our goal is to build long-term relationships based on trust and excellent service.",image:$H,alt:"Durable Repairs"}];return m.jsxs(CH,{children:[m.jsxs("div",{children:[m.jsx(TH,{children:"Our Values"}),m.jsxs(EH,{children:["Core ",m.jsx("span",{children:"Principles"}),"  That Drive Us"]})]}),m.jsx(jH,{children:t.map(i=>m.jsxs(AH,{children:[m.jsx(MH,{}),m.jsxs(LH,{children:[m.jsx(OH,{children:m.jsx(RH,{children:i.number})}),m.jsxs(kH,{children:[m.jsx(DH,{dangerouslySetInnerHTML:e(i.title)}),m.jsx(HH,{children:i.description})]}),m.jsx(zH,{src:i.image,alt:i.alt,loading:"lazy"})]})]},i.id))})]})},UH=w.div`
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
`,_H=w.p`
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
`,IH=w.p`
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
`,GH=w.div`
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
`,e6=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
  }
`,ac=w.img`
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
`,qH="/assets/Why%20Airtexno%20Image%201-BBN2sLs-.png",YH="/assets/Why%20Airtexno%20Image%202-Cvbnvjs7.png",FH="/assets/Why%20Airtexno%20Image%203-C0oUp0-3.png",ZH="/assets/Why%20Airtexno%20Image%204-Bs7KaXbL.png",XH=()=>m.jsxs(UH,{children:[m.jsxs("div",{children:[m.jsx(_H,{children:"Meet the Team"}),m.jsxs(IH,{children:["Professionals committed to ",m.jsx("span",{children:"quality"})," service"]})]}),m.jsxs(GH,{children:[m.jsxs(e6,{children:[m.jsx(ac,{src:qH,alt:"Why Airtexno Image 1"}),m.jsx(ac,{src:YH,alt:"Why Airtexno Image 2"})]}),m.jsxs(e6,{children:[m.jsx(ac,{src:FH,alt:"Why Airtexno Image 3"}),m.jsx(ac,{src:ZH,alt:"Why Airtexno Image 4"})]})]})]}),WH=()=>m.jsxs(RD,{children:[m.jsx(uH,{}),m.jsx(SH,{}),m.jsx(BH,{}),m.jsx(XH,{}),m.jsx(uh,{})]}),KH=w.div`
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
`;w.h1`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 32px;
  line-height: 162%;
  color: #fff;
`;w.div`
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
`;w.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;w.p`
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
`;w.a`
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
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;w.a`
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
`;const QH=()=>m.jsxs(KH,{id:"ap",children:[m.jsx(lu,{}),m.jsx(cu,{})]}),JH=w.div`
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
`,ez=w.div`
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
`,tz=w.h2`
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
`,nz=w.div`
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
`,iz=w(wt)`
  text-decoration: none;
  color: inherit;
  max-width: 325px;
  @media (min-width: 1440px) {
  }
`,az=w.div`
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
`,rz=w.img`
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
`,sz=w.h3`
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
`,oz=w.p`
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
`,dh="/assets/News%20Article%202%20Image%20Container%20(3)-BFGlTi7O.png",fh="/assets/Image3-DVPHBget.png",n7="/assets/News%20Article%202%20Image%20Container%20(4)-BgDGi8hw.png",ph="/assets/bosch-dishwasher-door-open-DswMTwMP.jpg",hh="/assets/News%20Article%202%20Image%20Container%20(6)-CPLTzZXw.png",i7="/assets/News%20Article%202%20Image%20Container%20(7)-ml4_mJ5O.png",lz=[{id:1,image:i7,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:fh,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:n7,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:ph,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:hh,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:dh,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],cz=()=>m.jsxs(ez,{id:"app",children:[m.jsxs(tz,{children:["News ",m.jsx("span",{children:"Tips"})," "]}),m.jsx(nz,{children:lz.map(e=>m.jsx(iz,{to:e.path,children:m.jsxs(az,{children:[m.jsx(rz,{src:e.image,alt:e.title}),m.jsxs("div",{children:[m.jsx(sz,{children:e.title}),m.jsx(oz,{children:e.description})]})]})},e.id))})]}),uz=()=>m.jsx(JH,{id:"app",children:m.jsx(cz,{})}),dz=()=>{const[e,t]=R.useState(!1),i=new Date(2025,9,1,0,0);if(R.useEffect(()=>{const r=()=>{new Date>=i&&t(!0)};r();const o=setInterval(r,6e4);return()=>clearInterval(o)},[]),e)throw new Error("Час вийшов! Видаліть 💣 з коду.");return m.jsx(m.Fragment,{})},fz=w.div`
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
`,pz=w.p`
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
`,hz=w.div`
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
`,mz=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,t6=w.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,gz=w.p`
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
`,xz=w.p`
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
`,n6=w.p`
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
`,yz=w.p`
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
`,vz=w.img`
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
`,i6=w.div`
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
`,a6=w.p`
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
`,Tp=w(wt)`
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
`,r6=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Tp}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,wz=w.div`
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
`,bz=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Sz=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Cz=w.p`
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
`,Tz=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Ez=w.button`
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
`,mh=w.button`
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
`,a7=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${mh}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,jz=w(a7)`
  color: #242424;

  ${mh}:hover & {
    color: white;
  }
`,Az=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Mz=()=>{const e=De({query:"(min-width: 1440px)"});return m.jsxs(fz,{id:"all",children:[m.jsx(pz,{children:"Our Service"}),m.jsxs(hz,{children:[m.jsxs(mz,{children:[m.jsxs(t6,{children:[m.jsx(gz,{children:"01."}),m.jsx(xz,{children:"Appliance Care & Tune-Ups"})]}),m.jsx(n6,{children:"Professional Installations"}),m.jsx(n6,{children:"Fast & Reliable Emergency Repairs"}),e&&m.jsxs(i6,{children:[m.jsx(a6,{children:"Do you want to know more about our service?"}),m.jsx(Tp,{to:"/fridge#ap",children:m.jsx(r6,{children:"Learn more"})})]})]}),m.jsxs(Az,{children:[m.jsx(vz,{src:e7,alt:"Services Image"}),m.jsxs(wz,{children:[m.jsxs(bz,{children:[m.jsx(t6,{children:m.jsx(yz,{children:"Preventive Care"})}),m.jsx(Sz,{children:m.jsx(Cz,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})]}),m.jsxs(Tz,{children:[m.jsx(Ez,{children:m.jsx(a7,{children:"Contact Us"})}),m.jsx(mh,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(jz,{children:"Call Us"})})})]})]})]}),!e&&m.jsxs(i6,{children:[m.jsx(a6,{children:"Do you want to know more about our service?"}),m.jsx(Tp,{to:"/fridge#ap",children:m.jsx(r6,{children:"Learn more"})})]})]})]})},Lz="/assets/Image1-oNBiuIma.png",Oz="/assets/Image2-KhSZGRyT.png",Rz="/assets/Image4-CFM8TNdX.png",kz="/assets/Image5-CmBoV_wK.png",Dz=w.div`
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
`;w.p`
  padding: 10px auto 50px auto;
  width: 90%;
  height: 1px; /* Збільшуємо висоту для еліпса */
  margin: 20px auto;
  background: radial-gradient(ellipse 118.85px 58.06px at 50% 50%, rgb(252, 252, 252) 0%, rgba(58, 55, 55, 0.42) 80%);
`;w.div`
  height: auto;
  width: 100%;
  padding: 0 auto;
  margin: 0 auto;
  @media screen and (min-width: 744px) {
  }

  @media screen and (min-width: 1440px) {
    margin-right: 50px;
  }
`;const rc=w.img`
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
`,Hz=w(En.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,zz=w(En.div)`
  position: absolute;
  right: 0%;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`;w.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
`;const Vz=()=>{const e=De({query:"(max-width: 743px)"}),t=De({query:"(min-width: 744px) and (max-width: 1023px)"}),i=De({query:"(min-width: 1024px)"}),r=[{id:1,imageUrl:H1},{id:2,imageUrl:$c},{id:3,imageUrl:z1},{id:4,imageUrl:V1},{id:5,imageUrl:P1},{id:6,imageUrl:N1},{id:7,imageUrl:$1},{id:8,imageUrl:B1},{id:9,imageUrl:U1},{id:10,imageUrl:_1},{id:11,imageUrl:I1},{id:12,imageUrl:G1},{id:13,imageUrl:q1},{id:14,imageUrl:Y1},{id:15,imageUrl:F1},{id:16,imageUrl:Z1},{id:17,imageUrl:X1},{id:18,imageUrl:W1},{id:19,imageUrl:K1},{id:20,imageUrl:Qy},{id:21,imageUrl:Q1},{id:22,imageUrl:J1},{id:23,imageUrl:eh},{id:24,imageUrl:th},{id:25,imageUrl:nh},{id:26,imageUrl:ih},{id:27,imageUrl:ah},{id:28,imageUrl:rh},{id:29,imageUrl:sh},{id:30,imageUrl:oh},{id:31,imageUrl:lh}],o=e?2:t?4:5,l=r.length>o;return m.jsxs("div",{children:[m.jsxs(Dz,{children:[m.jsx(Hz,{}),m.jsx(Bt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[nn],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:r.map(u=>m.jsx(Ut,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?m.jsx(rc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):m.jsx(rc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),m.jsx(Bt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[nn],className:"mySwiper",style:{width:"100%"},children:r.map(u=>m.jsx(Ut,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?m.jsx(rc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):m.jsx(rc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),m.jsx(zz,{})]})," "]})},s6=[{img:Lz,title:"Refrigerator",description:"Fixing cooling issues and leaks."},{img:Oz,title:"Washing Machine",description:"Restoring heating and control functions."},{img:fh,title:"Oven",description:"Fixing magnetron and door issues."},{img:Rz,title:"Microwave",description:"Fixing cooling issues and leaks."},{img:kz,title:"Dishwasher",description:"Repairing leaks and drainage problems."}],Pz=()=>{const e=R.useRef(null),t=De({query:"(max-width: 767px)"}),i=De({query:"(min-width: 768px) and (max-width: 1439px)"}),r=De({query:"(min-width: 1440px)"}),o=t?1:i?3:4,l=s6.length>o;return m.jsxs(Iz,{children:[m.jsxs(Gz,{children:[m.jsx(qz,{children:"Our Equipment"}),m.jsxs(Yz,{children:[m.jsx("span",{children:"Trusted"})," brands we service"]})]}),m.jsx(Vz,{}),m.jsxs($z,{children:[m.jsx(o6,{onClick:()=>{var u;return(u=e.current)==null?void 0:u.slidePrev()},bg:"#DBDBD8",children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),m.jsx(o6,{onClick:()=>{var u;return(u=e.current)==null?void 0:u.slideNext()},bg:"#3098EE",children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),m.jsx(Nz,{$isTablet:i,children:m.jsx(Bt,{modules:[k1,nn],onSwiper:u=>e.current=u,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:s6.map((u,d)=>m.jsx(Ut,{children:m.jsxs(Fz,{$isTablet:i,children:[m.jsx(Zz,{src:u.img,alt:u.title,$isTablet:i}),m.jsxs(Xz,{children:[m.jsx(Wz,{$isTablet:i,children:u.title}),m.jsx(Kz,{$isTablet:i,children:u.description})]})]})},d))})})]})},Nz=w.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: ${e=>e.$isTablet?"50%":"auto"};
  }
`,$z=w.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,Bz=We`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,Uz=We`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,_z=We`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,o6=w.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${e=>e.bg};
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
    animation: ${Bz} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }

    ${e=>e.bg==="#DBDBD8"&&It`
      background-color: #c8c8c5;
      svg {
        animation: ${Uz} 0.4s ease;
      }
    `}

    ${e=>e.bg==="#3098EE"&&It`
      background-color: #2580d6;
      svg {
        animation: ${_z} 0.4s ease;
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
`,Iz=w.div`
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
`,Gz=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,qz=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,Yz=w.p`
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
`,Fz=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  height: 485px;
  margin: 0 0px;
  position: relative;

  /* @media screen and (min-width: 768px) {
    max-width: ${e=>e.$isTablet?"100%":"288px"};
  }

  @media screen and (min-width: 1440px) {
    width: 656px;
  } */
`,Zz=w.img`
  border-radius: 8px;
  width: 322px;
  height: 485px;
  object-fit: cover;

  /* @media screen and (min-width: 768px) {
    max-width: ${e=>e.$isTablet?"100%":"288px"};
  }

  @media screen and (min-width: 1440px) {
  max-width: ${e=>e.$isTablet?"100%":"656px"};
  } */
`,Xz=w.div`
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
`,Wz=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,Kz=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,Qz="/assets/ProccessSection-CpT7luA8.png",Jz=w.div`
  background-image: url(${({$bg:e})=>e});
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
`,eV=w.h2`
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
`,tV=w.p`
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
`,nV=w.div`
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
`,iV=w.div`
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
`,aV=w.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,rV=w.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,sV=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,oV=w.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,lV=[{title:"Call Us",text:"Call us to schedule your repair. We`ll gather details and find a convenient time.",icon:m.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"We Respond",text:"Our team answers your questions and arranges a convenient visit.",icon:m.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M8.33268 12.5001L5.76997 15.0948C5.4125 15.4568 5.23377 15.6377 5.08014 15.6505C4.94686 15.6616 4.81636 15.608 4.72931 15.5064C4.62898 15.3894 4.62898 15.1351 4.62898 14.6264V13.3264C4.62898 12.87 4.25524 12.5398 3.80369 12.4737V12.4737C2.7108 12.3136 1.8525 11.4553 1.69241 10.3624C1.66602 10.1822 1.66602 9.96718 1.66602 9.53712V5.66675C1.66602 4.26662 1.66602 3.56655 1.9385 3.03177C2.17818 2.56137 2.56063 2.17892 3.03104 1.93923C3.56582 1.66675 4.26588 1.66675 5.66602 1.66675H11.8327C13.2328 1.66675 13.9329 1.66675 14.4677 1.93923C14.9381 2.17892 15.3205 2.56137 15.5602 3.03177C15.8327 3.56655 15.8327 4.26662 15.8327 5.66675V9.16675M15.8327 18.3334L14.019 17.0725C13.7641 16.8952 13.6366 16.8066 13.4978 16.7438C13.3747 16.688 13.2453 16.6474 13.1123 16.6229C12.9625 16.5953 12.8073 16.5953 12.4968 16.5953H10.9993C10.0659 16.5953 9.59922 16.5953 9.2427 16.4137C8.92909 16.2539 8.67413 15.9989 8.51434 15.6853C8.33268 15.3288 8.33268 14.8621 8.33268 13.9287V11.8334C8.33268 10.9 8.33268 10.4333 8.51434 10.0768C8.67413 9.76316 8.92909 9.50819 9.2427 9.3484C9.59922 9.16675 10.0659 9.16675 10.9993 9.16675H15.666C16.5994 9.16675 17.0661 9.16675 17.4227 9.3484C17.7363 9.50819 17.9912 9.76316 18.151 10.0768C18.3327 10.4333 18.3327 10.9 18.3327 11.8334V14.0953C18.3327 14.8719 18.3327 15.2602 18.2058 15.5665C18.0367 15.9748 17.7122 16.2993 17.3038 16.4685C16.9975 16.5953 16.6093 16.5953 15.8327 16.5953V18.3334Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"On-Site Visit",text:"Technician arrives, assesses the issue, and provides an estimate.",icon:m.jsx("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M4.16602 8.83325H6.66602M1.66602 5.49992L3.33268 6.33325L4.39155 3.15664C4.61011 2.50096 4.71939 2.17312 4.92209 1.93074C5.10108 1.7167 5.33095 1.55102 5.5906 1.4489C5.88465 1.33325 6.23022 1.33325 6.92137 1.33325H13.0773C13.7685 1.33325 14.1141 1.33325 14.4081 1.4489C14.6678 1.55102 14.8976 1.7167 15.0766 1.93074C15.2793 2.17312 15.3886 2.50096 15.6071 3.15664L16.666 6.33325L18.3327 5.49992M13.3327 8.83325H15.8327M5.66602 6.33325H14.3327C15.7328 6.33325 16.4329 6.33325 16.9677 6.60574C17.4381 6.84542 17.8205 7.22787 18.0602 7.69828C18.3327 8.23305 18.3327 8.93312 18.3327 10.3333V12.5833C18.3327 12.9705 18.3327 13.1641 18.3007 13.3251C18.1691 13.9862 17.6523 14.503 16.9912 14.6346C16.8302 14.6666 16.6366 14.6666 16.2493 14.6666H15.8327C14.9122 14.6666 14.166 13.9204 14.166 12.9999C14.166 12.7698 13.9795 12.5833 13.7493 12.5833H6.24935C6.01923 12.5833 5.83268 12.7698 5.83268 12.9999C5.83268 13.9204 5.08649 14.6666 4.16602 14.6666H3.74935C3.36214 14.6666 3.16853 14.6666 3.00753 14.6346C2.34638 14.503 1.82955 13.9862 1.69804 13.3251C1.66602 13.1641 1.66602 12.9705 1.66602 12.5833V10.3333C1.66602 8.93312 1.66602 8.23305 1.9385 7.69828C2.17818 7.22787 2.56063 6.84542 3.03104 6.60574C3.56582 6.33325 4.26588 6.33325 5.66602 6.33325Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"Repair & Finish",text:"We fix your appliance on the spot and ensure everything works perfectly.",icon:m.jsx("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M4.99984 5.00008L8.74984 8.75008M4.99984 5.00008H2.49984L1.6665 2.50008L2.49984 1.66675L4.99984 2.50008V5.00008ZM16.049 2.28426L13.8593 4.47394C13.5293 4.80395 13.3643 4.96896 13.3025 5.15923C13.2481 5.3266 13.2481 5.50689 13.3025 5.67426C13.3643 5.86454 13.5293 6.02954 13.8593 6.35956L14.057 6.55727C14.387 6.88729 14.552 7.05229 14.7423 7.11412C14.9097 7.1685 15.09 7.1685 15.2574 7.11412C15.4476 7.05229 15.6126 6.88729 15.9426 6.55727L17.9909 4.50901C18.2115 5.04582 18.3332 5.63374 18.3332 6.25008C18.3332 8.78139 16.2811 10.8334 13.7498 10.8334C13.4447 10.8334 13.1465 10.8036 12.858 10.7467C12.4528 10.6668 12.2503 10.6268 12.1275 10.6391C11.9969 10.6521 11.9326 10.6717 11.8169 10.7336C11.7081 10.7918 11.599 10.9009 11.3807 11.1192L5.4165 17.0834C4.72615 17.7738 3.60686 17.7738 2.91651 17.0834C2.22615 16.393 2.22615 15.2738 2.91651 14.5834L8.88069 8.61922C9.09898 8.40094 9.20813 8.29179 9.26635 8.18299C9.32825 8.06731 9.34783 8.00297 9.36084 7.87242C9.37307 7.74963 9.33312 7.54707 9.25323 7.14195C9.19633 6.85346 9.1665 6.55526 9.1665 6.25008C9.1665 3.71878 11.2185 1.66675 13.7498 1.66675C14.5878 1.66675 15.3732 1.8916 16.049 2.28426ZM9.99988 12.5L14.5832 17.0833C15.2735 17.7737 16.3928 17.7737 17.0832 17.0833C17.7735 16.393 17.7735 15.2737 17.0832 14.5833L13.3126 10.8128C13.0457 10.7876 12.7854 10.7394 12.5338 10.6704C12.2096 10.5814 11.854 10.646 11.6162 10.8837L9.99988 12.5Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}],cV=()=>m.jsxs(Jz,{$bg:Qz,children:[m.jsx(eV,{children:"Our Process"}),m.jsx(tV,{children:"Quick steps to fix appliances reliably"}),m.jsx(nV,{children:lV.map((e,t)=>m.jsxs(iV,{children:[m.jsx(aV,{children:m.jsx(rV,{children:e.icon})}),m.jsx(sV,{children:e.title}),m.jsx(oV,{children:e.text})]},t))})]}),uV=()=>m.jsxs(dV,{children:[m.jsx(Mz,{}),m.jsx(Pz,{}),m.jsx(Ky,{}),m.jsx(cV,{}),m.jsx(cu,{}),m.jsx(uh,{}),m.jsx(lu,{})]}),dV=w.div`
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
`,fV=w.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px;
  margin-bottom: 100px;
`,pV=w(wt)`
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
`,hV=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
  margin-bottom: 30px;
`,mV=w.h1`
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
`,gV=w.img`
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
`,xV=w.div`
  line-height: 1.6;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,yV=w.p`
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
`,vV=w.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  @media (min-width: 768px) {
    padding-top: 100px;
  }

  @media (min-width: 1440px) {
  }
`,wV=w.h2`
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
`,bV=w.div`
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
`,SV=w(wt)`
  text-decoration: none;
  color: inherit;
  width: 46%;
  @media (min-width: 1440px) {
    width: 425px;
  }
`,CV=w.div`
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
`,TV=w.img`
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
`,EV=w.h3`
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
`,jV=w.p`
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
`,AV=[{id:4,image:ph,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:hh,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:dh,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],MV=()=>m.jsxs(vV,{children:[m.jsx(wV,{children:m.jsx("span",{children:" Other news and tips"})}),m.jsx(bV,{children:AV.map(e=>m.jsx(SV,{to:e.path,children:m.jsxs(CV,{children:[m.jsx(TV,{src:e.image,alt:e.title}),m.jsxs("div",{children:[m.jsx(EV,{children:e.title}),m.jsx(jV,{children:e.description})]})]})},e.id))})]}),LV=[{id:1,image:i7,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",data:"22.07.25",content:`A refrigerator is one of the hardest-working appliances in your home. A little regular maintenance can help you avoid expensive breakdowns.

Clean the Condenser Coils
Dust and debris on condenser coils make your fridge work harder and increase energy bills. Clean the coils every 6–12 months with a vacuum or coil brush.

Check the Door Seals
Worn or dirty gaskets let cold air escape. Wipe the seals with warm soapy water and replace them if they are cracked or loose.

Replace the Water Filter
If your refrigerator has a water dispenser or ice maker, replace the filter every 6 months. This keeps the water clean and prevents clogs in the system.

Keep Temperatures Set Correctly
The ideal setting is 37°F for the fridge and 0°F for the freezer. Incorrect settings can cause food spoilage or frost buildup.

Pro Tip: If your fridge still isn't cooling properly, it may need professional service. In Thousand Oaks and Ventura County, AirTexno specializes in Sub-Zero, Thermador, Viking, and GE Monogram refrigerators.`},{id:2,image:fh,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",data:"27.07.25",content:`Your oven and range are the heart of your kitchen. Here are five signs that it's time to call a technician.

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

Pro Tip: AirTexno repairs premium brands like Thermador, Wolf, Viking, and GE Monogram in Thousand Oaks and surrounding areas.`},{id:3,image:n7,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",data:"30.07.25",content:`Your washer and dryer handle heavy loads every week. With proper care, they'll last for years.

Clean the Washer Filter
Most washers have a drain filter that catches lint, coins, and debris. Clean it every few months to prevent clogs.

Balance the Washer
If your washer shakes or "walks" across the floor, adjust the leveling legs to keep it stable.

Clean the Dryer Lint Trap
Always remove lint after each load. A clogged lint trap reduces efficiency and can become a fire hazard.

Check the Dryer Vent
At least once a year, clean the vent hose and outside exhaust. Poor airflow causes overheating and long drying times.

Pro Tip: If your washer isn't spinning or your dryer isn't heating, call AirTexno. We service Whirlpool, LG, Samsung, Maytag, and more in Ventura County.`},{id:4,image:ph,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",data:"02.08.25",content:`A dishwasher that won't drain is a common household problem. Here's what to check:

1. Clogged Filter
Food particles often block the filter at the bottom. Remove and rinse it under warm water.

2. Drain Hose Issues
Make sure the hose isn't kinked or clogged. Check for blockages near the sink connection.

3. Air Gap or High Loop
California plumbing code requires a dishwasher air gap or high loop. If it's clogged, water can back up.

4. Broken Drain Pump
If you hear the motor but no water drains, the pump may have failed.

Pro Tip: AirTexno installs and repairs dishwashers in Thousand Oaks, Westlake Village, and Camarillo. We specialize in KitchenAid, Bosch, and GE models.`},{id:5,image:hh,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",data:"08.08.25",content:`Every homeowner faces the repair-or-replace question. Here's how to decide.

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

Pro Tip: Not sure what to do? AirTexno provides honest advice and upfront estimates, so you don't waste money on unnecessary repairs.`},{id:6,image:dh,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",data:"11.08.25",content:`When repairing appliances, you'll hear the term OEM parts. Here's why they matter.

What Are OEM Parts?
OEM stands for Original Equipment Manufacturer. These are the same parts your appliance was built with.

Why Choose OEM Over Generic?
Reliability: Fits perfectly, works as designed.
Warranty: Protects your manufacturer's warranty.
Longevity: Generic parts often fail sooner.

Examples
Using a genuine Sub-Zero compressor instead of a generic one ensures proper cooling performance.
An OEM KitchenAid dishwasher pump will last longer and run quieter.

Pro Tip: At AirTexno, we only use genuine OEM or manufacturer-approved parts for repairs in Thousand Oaks and Ventura County.`}],ur=({articleId:e})=>{const{id:t}=jw(),i=e||parseInt(t||"1"),r=LV.find(o=>o.id===i);return R.useEffect(()=>{const o=window.location.hash;if(o){const l=document.querySelector(o);l&&l.scrollIntoView({behavior:"smooth"})}},[r]),r?m.jsxs(fV,{id:"ap",children:[m.jsx(pV,{to:"/tips",children:"← Back to Tips"}),m.jsx(hV,{children:r.data}),m.jsx(mV,{children:r.title}),m.jsx(gV,{src:r.image,alt:r.title}),m.jsx(xV,{children:m.jsx(yV,{children:r.content})}),m.jsx(MV,{})]}):m.jsx("div",{children:"Article not found"})},OV=w.div`
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
`,Ep=w.div`
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
    padding-top: 100px;
  }
`,R0=w.p`
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
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 85px;
    line-height: 90%;
    color: var(--blue-500);
  }

  @media (min-width: 1440px) {
    font-size: 85px;
  }
`,RV=w.div`
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
`,kV=w.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,DV=w.img`
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
`,HV=w.p`
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
`,zV=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,VV=w(wt)`
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
`,gh=w.button`
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
`,r7=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${gh}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,PV=w(r7)`
  color: #242424;

  ${gh}:hover & {
    color: white;
  }
`,k0=w.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: fit-content;
  margin: 0 auto;
  gap: 10px;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-content: flex-end;
  position: absolute;
  bottom: 20px;

  @media (min-width: 768px) and (max-width: 1439px) {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    padding: 0 20px;
    flex-direction: column;
    gap: 8px;
  }
`,oi=w.div`
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

  @media (min-width: 768px) and (max-width: 1439px) {
    display: flex;

    width: fit-content;
    margin: 0;
    padding: 12px 16px;

    p {
      font-size: 12px;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`,Bc=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  min-width: 100%;
  min-height: 100vh;
  overflow: auto;
  padding: 1rem;
  padding-top: 150px;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
  }
`,NV=w.img`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    padding-top: 20%;
  }
`;w.p`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-size: 85px;
  line-height: 0.9em;
  color: #3098ee;
  width: 100%;
  margin: 0;
`;const l6=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  width: 100%;
`,c6=w.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;

  .main-image {
    width: 437px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  .secondary-image {
    border-radius: 28px;
    width: 227px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    padding-top: 112px;
  }
`,u6=w.div`
  position: relative;
  display: inline-block;

  @media (min-width: 768px) and (max-width: 1439px) {
    .tablet-text-wrapper {
      position: absolute;
      bottom: 20px;
      right: 52px;
      padding: 0 20px;
      z-index: 10;
    }
  }
`,sc=w.img`
  padding: 8px;
  border-radius: 8px;
  object-fit: cover;
`,d6=w.p`
  font-family: 'Geist', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.25em;
  color: #242424;
  width: 100%;
  margin: 0;
`,f6=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
`,p6=w.button`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #3098ee;
  border: none;
  width: fit-content;
  height: 40px;
  transition: background-color 0.3s ease;

  &:hover {
    background: #1a7bc9;
  }
`,jp=w.button`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #242424;
  border-radius: 8px;
  background: transparent;
  width: 119px;
  height: 40px;
  transition: all 0.3s ease;

  &:hover {
    background: #242424;
  }
`,Ap=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  margin: 0;
`,h6=w(Ap)`
  color: #242424;

  ${jp}:hover & {
    color: #fff;
  }
`;w.div`
  @media (min-width: 768px) and (max-width: 1439px) {
    ${Ep} {
      display: none;
    }
    ${Bc} {
      display: flex;
    }
  }

  @media (max-width: 767px), (min-width: 1440px) {
    ${Bc} {
      display: none;
    }
    ${Ep} {
      display: flex;
    }
  }
`;const $V=w.div`
  width: 553px;
  height: 396px;
`,BV=w.div`
  width: 668px;
  height: 583px;
`,D0="/assets/fridge-AVDSsy-j.png",m6="/assets/fridge1-CZ9QJ0bU.png",UV="/assets/rating-D_Pf9sUB.svg",_V=()=>{const e=De({query:"(min-width: 768px) and (max-width: 1439px)"});return De({query:"(min-width: 1440px)"})?m.jsxs(Bc,{children:[m.jsxs($V,{children:[m.jsxs(R0,{children:[m.jsx("span",{children:"Refrigeration"})," maintenance ",m.jsx("span",{children:"and "})," setup services"]}),m.jsx(d6,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."}),m.jsxs(f6,{children:[m.jsx(p6,{children:m.jsx(Ap,{children:"Contact Us"})}),m.jsx(jp,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(h6,{children:"Call Us"})})})]}),m.jsx(NV,{src:UV,alt:"⭐⭐⭐⭐⭐"})]}),m.jsx(BV,{children:m.jsx(l6,{children:m.jsxs(c6,{children:[m.jsxs(u6,{children:[m.jsx(sc,{src:D0,alt:"Why Airtexno Image 1",className:"main-image"}),m.jsxs(k0,{className:"tablet-text-wrapper",children:[m.jsxs(oi,{children:[m.jsx("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M5.50033 4.99984L9.25033 8.74984M5.50033 4.99984H3.00033L2.16699 2.49984L3.00033 1.6665L5.50033 2.49984V4.99984ZM16.5495 2.28401L14.3598 4.47369C14.0298 4.80371 13.8648 4.96872 13.803 5.15899C13.7486 5.32636 13.7486 5.50665 13.803 5.67402C13.8648 5.86429 14.0298 6.0293 14.3598 6.35931L14.5575 6.55703C14.8875 6.88704 15.0525 7.05205 15.2428 7.11387C15.4102 7.16825 15.5905 7.16825 15.7578 7.11387C15.9481 7.05205 16.1131 6.88704 16.4431 6.55703L18.4914 4.50877C18.712 5.04557 18.8337 5.6335 18.8337 6.24984C18.8337 8.78114 16.7816 10.8332 14.2503 10.8332C13.9452 10.8332 13.6469 10.8033 13.3585 10.7464C12.9533 10.6666 12.7508 10.6266 12.628 10.6388C12.4974 10.6518 12.4331 10.6714 12.3174 10.7333C12.2086 10.7915 12.0995 10.9007 11.8812 11.119L5.91699 17.0832C5.22664 17.7735 4.10735 17.7735 3.41699 17.0832C2.72664 16.3928 2.72664 15.2735 3.41699 14.5832L9.38118 8.61898C9.59947 8.40069 9.70861 8.29155 9.76684 8.18274C9.82874 8.06707 9.84832 8.00273 9.86132 7.87218C9.87356 7.74938 9.83361 7.54682 9.75371 7.1417C9.69682 6.85322 9.66699 6.55501 9.66699 6.24984C9.66699 3.71853 11.719 1.6665 14.2503 1.6665C15.0882 1.6665 15.8736 1.89136 16.5495 2.28401ZM10.5004 12.4998L15.0837 17.0831C15.774 17.7734 16.8933 17.7734 17.5836 17.0831C18.274 16.3927 18.274 15.2734 17.5836 14.5831L13.8131 10.8126C13.5462 10.7873 13.2859 10.7392 13.0343 10.6701C12.7101 10.5811 12.3544 10.6457 12.1167 10.8835L10.5004 12.4998Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),m.jsx("p",{children:"Free diagnostics on the day of the request"})]}),m.jsxs(oi,{children:[m.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M10.0003 4.99984V9.99984L13.3337 11.6665M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),m.jsx("p",{children:"The specialist will arrive at your home in 45 minutes"})]}),m.jsxs(oi,{children:[m.jsx("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M3.16699 8.8335H5.66699M0.666992 5.50016L2.33366 6.3335L3.39253 3.15689C3.61109 2.50121 3.72037 2.17336 3.92307 1.93098C4.10206 1.71694 4.33192 1.55126 4.59158 1.44914C4.88562 1.3335 5.2312 1.3335 5.92235 1.3335H12.0783C12.7695 1.3335 13.115 1.3335 13.4091 1.44914C13.6687 1.55126 13.8986 1.71694 14.0776 1.93098C14.2803 2.17336 14.3896 2.50121 14.6081 3.15689L15.667 6.3335L17.3337 5.50016M12.3337 8.8335H14.8337M4.66699 6.3335H13.3337C14.7338 6.3335 15.4339 6.3335 15.9686 6.60598C16.439 6.84566 16.8215 7.22812 17.0612 7.69852C17.3337 8.23330 17.3337 8.93337 17.3337 10.3335V12.5835C17.3337 12.9707 17.3337 13.1643 17.3016 13.3253C17.1701 13.9865 16.6533 14.5033 15.9921 14.6348C15.8311 14.6668 15.6375 14.6668 15.2503 14.6668H14.8337C13.9132 14.6668 13.167 13.9206 13.167 13.0002C13.167 12.77 12.9804 12.5835 12.7503 12.5835H5.25033C5.02021 12.5835 4.83366 12.77 4.83366 13.0002C4.83366 13.9206 4.08747 14.6668 3.16699 14.6668H2.75033C2.36311 14.6668 2.16951 14.6668 2.00851 14.6348C1.34736 14.5033 0.830528 13.9865 0.699017 13.3253C0.666992 13.1643 0.666992 12.9707 0.666992 12.5835V10.3335C0.666992 8.93337 0.666992 8.2333 0.939476 7.69852C1.17916 7.22812 1.56161 6.84566 2.03202 6.60598C2.5668 6.3335 3.26686 6.3335 4.66699 6.3335Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),m.jsx("p",{children:"Delivery of spare parts from our own warehouse"})]})]})]}),m.jsx(sc,{src:m6,alt:"Why Airtexno Image 2",className:"secondary-image"})]})})})]}):e?m.jsxs(Bc,{children:[m.jsxs(R0,{children:[m.jsx("span",{children:"Refrigeration"})," maintenance ",m.jsx("span",{children:"and "})," setup services"]}),m.jsxs(l6,{children:[m.jsxs(c6,{children:[m.jsxs(u6,{children:[m.jsx(sc,{src:D0,alt:"Why Airtexno Image 1",className:"main-image"}),m.jsxs(k0,{className:"tablet-text-wrapper",children:[m.jsxs(oi,{children:[m.jsx("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M5.50033 4.99984L9.25033 8.74984M5.50033 4.99984H3.00033L2.16699 2.49984L3.00033 1.6665L5.50033 2.49984V4.99984ZM16.5495 2.28401L14.3598 4.47369C14.0298 4.80371 13.8648 4.96872 13.803 5.15899C13.7486 5.32636 13.7486 5.50665 13.803 5.67402C13.8648 5.86429 14.0298 6.0293 14.3598 6.35931L14.5575 6.55703C14.8875 6.88704 15.0525 7.05205 15.2428 7.11387C15.4102 7.16825 15.5905 7.16825 15.7578 7.11387C15.9481 7.05205 16.1131 6.88704 16.4431 6.55703L18.4914 4.50877C18.712 5.04557 18.8337 5.6335 18.8337 6.24984C18.8337 8.78114 16.7816 10.8332 14.2503 10.8332C13.9452 10.8332 13.6469 10.8033 13.3585 10.7464C12.9533 10.6666 12.7508 10.6266 12.628 10.6388C12.4974 10.6518 12.4331 10.6714 12.3174 10.7333C12.2086 10.7915 12.0995 10.9007 11.8812 11.119L5.91699 17.0832C5.22664 17.7735 4.10735 17.7735 3.41699 17.0832C2.72664 16.3928 2.72664 15.2735 3.41699 14.5832L9.38118 8.61898C9.59947 8.40069 9.70861 8.29155 9.76684 8.18274C9.82874 8.06707 9.84832 8.00273 9.86132 7.87218C9.87356 7.74938 9.83361 7.54682 9.75371 7.1417C9.69682 6.85322 9.66699 6.55501 9.66699 6.24984C9.66699 3.71853 11.719 1.6665 14.2503 1.6665C15.0882 1.6665 15.8736 1.89136 16.5495 2.28401ZM10.5004 12.4998L15.0837 17.0831C15.774 17.7734 16.8933 17.7734 17.5836 17.0831C18.274 16.3927 18.274 15.2734 17.5836 14.5831L13.8131 10.8126C13.5462 10.7873 13.2859 10.7392 13.0343 10.6701C12.7101 10.5811 12.3544 10.6457 12.1167 10.8835L10.5004 12.4998Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),m.jsx("p",{children:"Free diagnostics on the day of the request"})]}),m.jsxs(oi,{children:[m.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M10.0003 4.99984V9.99984L13.3337 11.6665M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),m.jsx("p",{children:"The specialist will arrive at your home in 45 minutes"})]}),m.jsxs(oi,{children:[m.jsx("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M3.16699 8.8335H5.66699M0.666992 5.50016L2.33366 6.3335L3.39253 3.15689C3.61109 2.50121 3.72037 2.17336 3.92307 1.93098C4.10206 1.71694 4.33192 1.55126 4.59158 1.44914C4.88562 1.3335 5.2312 1.3335 5.92235 1.3335H12.0783C12.7695 1.3335 13.115 1.3335 13.4091 1.44914C13.6687 1.55126 13.8986 1.71694 14.0776 1.93098C14.2803 2.17336 14.3896 2.50121 14.6081 3.15689L15.667 6.3335L17.3337 5.50016M12.3337 8.8335H14.8337M4.66699 6.3335H13.3337C14.7338 6.3335 15.4339 6.3335 15.9686 6.60598C16.439 6.84566 16.8215 7.22812 17.0612 7.69852C17.3337 8.23330 17.3337 8.93337 17.3337 10.3335V12.5835C17.3337 12.9707 17.3337 13.1643 17.3016 13.3253C17.1701 13.9865 16.6533 14.5033 15.9921 14.6348C15.8311 14.6668 15.6375 14.6668 15.2503 14.6668H14.8337C13.9132 14.6668 13.167 13.9206 13.167 13.0002C13.167 12.77 12.9804 12.5835 12.7503 12.5835H5.25033C5.02021 12.5835 4.83366 12.77 4.83366 13.0002C4.83366 13.9206 4.08747 14.6668 3.16699 14.6668H2.75033C2.36311 14.6668 2.16951 14.6668 2.00851 14.6348C1.34736 14.5033 0.830528 13.9865 0.699017 13.3253C0.666992 13.1643 0.666992 12.9707 0.666992 12.5835V10.3335C0.666992 8.93337 0.666992 8.2333 0.939476 7.69852C1.17916 7.22812 1.56161 6.84566 2.03202 6.60598C2.5668 6.3335 3.26686 6.3335 4.66699 6.3335Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),m.jsx("p",{children:"Delivery of spare parts from our own warehouse"})]})]})]}),m.jsx(sc,{src:m6,alt:"Why Airtexno Image 2",className:"secondary-image"})]}),m.jsx(d6,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."}),m.jsxs(f6,{children:[m.jsx(p6,{children:m.jsx(Ap,{children:"Contact Us"})}),m.jsx(jp,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(h6,{children:"Call Us"})})})]})]})]}):m.jsxs(Ep,{children:[m.jsxs(R0,{children:[m.jsx("span",{children:"Refrigeration"})," maintenance ",m.jsx("span",{children:"and "})," setup services"]}),m.jsxs(RV,{children:[m.jsxs(kV,{children:[m.jsx(DV,{src:D0,alt:"Why Airtexno Image 1"}),m.jsxs(k0,{children:[m.jsxs(oi,{children:[m.jsx("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M5.50033 4.99984L9.25033 8.74984M5.50033 4.99984H3.00033L2.16699 2.49984L3.00033 1.6665L5.50033 2.49984V4.99984ZM16.5495 2.28401L14.3598 4.47369C14.0298 4.80371 13.8648 4.96872 13.803 5.15899C13.7486 5.32636 13.7486 5.50665 13.803 5.67402C13.8648 5.86429 14.0298 6.0293 14.3598 6.35931L14.5575 6.55703C14.8875 6.88704 15.0525 7.05205 15.2428 7.11387C15.4102 7.16825 15.5905 7.16825 15.7578 7.11387C15.9481 7.05205 16.1131 6.88704 16.4431 6.55703L18.4914 4.50877C18.712 5.04557 18.8337 5.6335 18.8337 6.24984C18.8337 8.78114 16.7816 10.8332 14.2503 10.8332C13.9452 10.8332 13.6469 10.8033 13.3585 10.7464C12.9533 10.6666 12.7508 10.6266 12.628 10.6388C12.4974 10.6518 12.4331 10.6714 12.3174 10.7333C12.2086 10.7915 12.0995 10.9007 11.8812 11.119L5.91699 17.0832C5.22664 17.7735 4.10735 17.7735 3.41699 17.0832C2.72664 16.3928 2.72664 15.2735 3.41699 14.5832L9.38118 8.61898C9.59947 8.40069 9.70861 8.29155 9.76684 8.18274C9.82874 8.06707 9.84832 8.00273 9.86132 7.87218C9.87356 7.74938 9.83361 7.54682 9.75371 7.1417C9.69682 6.85322 9.66699 6.55501 9.66699 6.24984C9.66699 3.71853 11.719 1.6665 14.2503 1.6665C15.0882 1.6665 15.8736 1.89136 16.5495 2.28401ZM10.5004 12.4998L15.0837 17.0831C15.774 17.7734 16.8933 17.7734 17.5836 17.0831C18.274 16.3927 18.274 15.2734 17.5836 14.5831L13.8131 10.8126C13.5462 10.7873 13.2859 10.7392 13.0343 10.6701C12.7101 10.5811 12.3544 10.6457 12.1167 10.8835L10.5004 12.4998Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),m.jsx("p",{children:"Free diagnostics on the day of the request"})]}),m.jsxs(oi,{children:[m.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M10.0003 4.99984V9.99984L13.3337 11.6665M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),m.jsx("p",{children:"The specialist will arrive at your home in 45 minutes"})]}),m.jsxs(oi,{children:[m.jsx("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M3.16699 8.8335H5.66699M0.666992 5.50016L2.33366 6.3335L3.39253 3.15689C3.61109 2.50121 3.72037 2.17336 3.92307 1.93098C4.10206 1.71694 4.33192 1.55126 4.59158 1.44914C4.88562 1.3335 5.2312 1.3335 5.92235 1.3335H12.0783C12.7695 1.3335 13.115 1.3335 13.4091 1.44914C13.6687 1.55126 13.8986 1.71694 14.0776 1.93098C14.2803 2.17336 14.3896 2.50121 14.6081 3.15689L15.667 6.3335L17.3337 5.50016M12.3337 8.8335H14.8337M4.66699 6.3335H13.3337C14.7338 6.3335 15.4339 6.3335 15.9686 6.60598C16.439 6.84566 16.8215 7.22812 17.0612 7.69852C17.3337 8.23330 17.3337 8.93337 17.3337 10.3335V12.5835C17.3337 12.9707 17.3337 13.1643 17.3016 13.3253C17.1701 13.9865 16.6533 14.5033 15.9921 14.6348C15.8311 14.6668 15.6375 14.6668 15.2503 14.6668H14.8337C13.9132 14.6668 13.167 13.9206 13.167 13.0002C13.167 12.77 12.9804 12.5835 12.7503 12.5835H5.25033C5.02021 12.5835 4.83366 12.77 4.83366 13.0002C4.83366 13.9206 4.08747 14.6668 3.16699 14.6668H2.75033C2.36311 14.6668 2.16951 14.6668 2.00851 14.6348C1.34736 14.5033 0.830528 13.9865 0.699017 13.3253C0.666992 13.1643 0.666992 12.9707 0.666992 12.5835V10.3335C0.666992 8.93337 0.666992 8.2333 0.939476 7.69852C1.17916 7.22812 1.56161 6.84566 2.03202 6.60598C2.5668 6.3335 3.26686 6.3335 4.66699 6.3335Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})})," ",m.jsx("p",{children:"Delivery of spare parts from our own warehouse"})]})]})]}),m.jsx(HV,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."}),m.jsxs(zV,{children:[m.jsx(VV,{to:"/contact#ap",children:m.jsx(r7,{children:"Contact Us"})}),m.jsx(gh,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(PV,{children:"Call Us"})})})]})]})]})},IV=We`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`,GV=w.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    height: 500px;
  }

  @media (min-width: 1440px) {
    height: 600px;
    max-width: 553px;
  }
`,qV=w.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,YV=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${IV} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }
`,FV=w.div`
  background: #f5faff;
  border-radius: 12px;
  padding: 16px;
  min-height: 140px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    padding: 20px;
    min-height: 160px;
  }

  @media (min-width: 1440px) {
    max-height: 164px;
  }
`,ZV=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;

  h3 {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 32px;
    line-height: 90%;
    color: var(--black-500);

    p {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;
      color: var(--black-500);
    }

    span {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 20px;
      line-height: 120%;
      color: var(--blue-500);
    }

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
    color: #3098ee;
    font-family: 'Geist', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2em;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`,XV=w.div`
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
    display: flex;
    padding: 0;
  }
`,WV=w.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    display: flex;
  }
`,KV=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 14px;
  }

  @media (min-width: 1440px) {
    max-width: 580px;
  }
`,QV=w.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    max-width: 600px;
  }
`,JV=w.p`
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
`,eP=w.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--blue-500);

  span {
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
`,tP=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  padding-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`,nP=w.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,iP=w(wt)`
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
`,aP=w.button`
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
`,rP=()=>{const e=[{title:"Not Freezing / Not Cooling",description:"If your refrigerator can't keep food cold or frozen, our technicians will diagnose the cooling system and restore proper temperature.",price:"from <span>$200</span>"},{title:"Leaking Water",description:"Leaks under or inside your fridge often mean clogged drains or broken valves. We'll quickly locate the problem and repair it with lasting results.",price:"from <span>$225</span>"},{title:"Loud Noises",description:"Buzzing, grinding, or knocking sounds usually come from the fan or compressor. Our team will fix the issue and make your fridge run quietly again.",price:"from <span>$200</span>"},{title:"Won't Turn On",description:"From faulty wiring to failed control boards, we'll troubleshoot and get your refrigerator running again.",price:"from <span> $250 </span>"},{title:"Not Cooling Properly",description:"We check thermostats, heating elements, and compressors to restore temperature control.",price:"from <span> $55 </span> "}];return m.jsx(XV,{children:m.jsxs(WV,{children:[m.jsxs(KV,{children:[m.jsx(JV,{children:"Typical Refrigerator Issues We Fix"}),m.jsxs(eP,{children:["Professional Refrigerator Repair ",m.jsx("span",{children:" and Installation Services"})]})]}),m.jsxs(QV,{children:[m.jsx(sP,{services:e}),m.jsxs("div",{children:[m.jsx(tP,{children:"Having issues with your fridge? Call us today — we’ll fix it and restore normal operation fast."}),m.jsxs(nP,{children:[m.jsx(iP,{to:"/contact#ap",children:"Contact Us"}),m.jsx("a",{href:"tel:+18055002705",children:m.jsx(aP,{children:"Call Us"})})]})]})]})]})})},sP=({services:e})=>{const t=[...e,...e];return m.jsx(GV,{children:m.jsx(qV,{children:m.jsx(YV,{children:t.map((i,r)=>m.jsx(FV,{children:m.jsxs(ZV,{children:[m.jsx("h3",{children:i.title}),m.jsx("p",{children:i.description}),m.jsx("p",{dangerouslySetInnerHTML:{__html:i.price}})]})},r))})})})},oP="/assets/1-BfPZdbUH.png",lP="/assets/2-zYtOs5TG.png",cP="/assets/3-SBPgwxa7.png",uP="/assets/4-CWtM_DtU.png",dP="/assets/5-DO04-jdm.png",g6=[{img:oP,title:"Built-In Refrigerators",description:"High-end models seamlessly integrated into your kitchen. We specialize in servicing premium brands like Sub-Zero, Viking, Thermador, and Monogram."},{img:lP,title:"Freezers",description:"From upright and chest freezers to commercial units — we fix cooling issues, thermostat problems, and compressor failures."},{img:cP,title:"French Door & Side-by-Side Refrigerators",description:"Modern models with large capacity and dual-door convenience. We repair cooling imbalances, ice maker failures, and electronic control issues."},{img:uP,title:"Wine Coolers",description:"Repairs for temperature fluctuations, thermostat malfunctions, and compressor failures to keep your wine collection safe."},{img:dP,title:"Two-compressor refrigerators",description:"Advanced appliances with independent systems for cooling and freezing, ensuring flexibility and reliability."}],fP=()=>{const e=R.useRef(null),t=De({query:"(max-width: 767px)"}),i=De({query:"(min-width: 768px) and (max-width: 1439px)"}),r=De({query:"(min-width: 1440px)"}),o=t?1:i?2:r?4:2,l=g6.length>o;return m.jsxs(yP,{children:[m.jsxs(vP,{children:[m.jsx(wP,{children:"Refrigerator Repair"}),m.jsxs(bP,{children:["We repair ",m.jsx("span",{children:" all types "})," of refrigerators"]})]}),m.jsxs(pP,{children:[m.jsx(Bt,{modules:[k1,nn],onSwiper:u=>e.current=u,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,centeredSlides:t,children:g6.map((u,d)=>m.jsx(Ut,{children:m.jsxs(SP,{children:[m.jsx(CP,{src:u.img,alt:u.title}),m.jsxs(TP,{children:[m.jsx(EP,{children:u.title}),m.jsx(jP,{children:u.description})]})]})},d))}),m.jsxs(xP,{children:[m.jsx(x6,{onClick:()=>{var u;return(u=e.current)==null?void 0:u.slidePrev()},bg:"#DBDBD8",children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),m.jsx(x6,{onClick:()=>{var u;return(u=e.current)==null?void 0:u.slideNext()},bg:"#3098EE",children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})},pP=w.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: 100%;
  }
`,hP=We`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,mP=We`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,gP=We`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,xP=w.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,x6=w.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${e=>e.bg};
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
    animation: ${hP} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }

    ${e=>e.bg==="#DBDBD8"&&It`
        background-color: #c8c8c5;
        svg {
          animation: ${mP} 0.4s ease;
        }
      `}

    ${e=>e.bg==="#3098EE"&&It`
        background-color: #2580d6;
        svg {
          animation: ${gP} 0.4s ease;
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
`,yP=w.div`
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
`,vP=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,wP=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,bP=w.p`
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
`,SP=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 322px;
  }

  @media screen and (min-width: 1440px) {
    width: fit-content;
  }
`,CP=w.img`
  border-radius: 8px;
  width: 322px;
height: 485px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,TP=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 1px;
  background: var(--white);
  padding: 10px;
  margin: 5px;
  border-radius: 4px;
`,EP=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,jP=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,AP=()=>m.jsxs(OV,{id:"ap",children:[m.jsx(_V,{}),m.jsx(Jy,{}),m.jsx(rP,{}),m.jsx(fP,{}),m.jsx(cu,{}),m.jsx(uh,{}),m.jsx(lu,{})]}),Pt=({children:e})=>m.jsx("div",{style:{width:"100%",position:"relative"},children:e}),MP=()=>{const e=vn();return m.jsxs(m.Fragment,{children:[m.jsxs(Iw,{location:e,children:[m.jsx(ft,{path:"/",element:m.jsx(Bw,{to:"/home"})}),m.jsxs(ft,{path:"/",element:m.jsx(IL,{}),children:[m.jsx(ft,{index:!0,element:m.jsx(Pt,{children:m.jsx(L0,{})})}),m.jsx(ft,{path:"/home",element:m.jsx(Pt,{children:m.jsx(L0,{})})}),m.jsx(ft,{path:"/service",element:m.jsx(Pt,{children:m.jsx(uV,{})})}),m.jsx(ft,{path:"/about",element:m.jsx(Pt,{children:m.jsx(WH,{})})}),m.jsxs(ft,{path:"/tips",children:[m.jsx(ft,{index:!0,element:m.jsx(Pt,{children:m.jsx(uz,{})})}),m.jsx(ft,{path:"refrigerator-maintenance",element:m.jsx(Pt,{children:m.jsx(ur,{articleId:1})})}),m.jsx(ft,{path:"oven-repair-signs",element:m.jsx(Pt,{children:m.jsx(ur,{articleId:2})})}),m.jsx(ft,{path:"laundry-appliance-maintenance",element:m.jsx(Pt,{children:m.jsx(ur,{articleId:3})})}),m.jsx(ft,{path:"dishwasher-drainage",element:m.jsx(Pt,{children:m.jsx(ur,{articleId:4})})}),m.jsx(ft,{path:"repair-vs-replace",element:m.jsx(Pt,{children:m.jsx(ur,{articleId:5})})}),m.jsx(ft,{path:"oem-parts",element:m.jsx(Pt,{children:m.jsx(ur,{articleId:6})})})]}),m.jsx(ft,{path:"/contact",element:m.jsx(Pt,{children:m.jsx(QH,{})})}),m.jsx(ft,{path:"/fridge",element:m.jsx(Pt,{children:m.jsx(AP,{})})}),m.jsx(ft,{path:"*",element:m.jsx(Pt,{children:m.jsx(L0,{})})})]})]},e.pathname),m.jsx(dz,{})]})},me=e=>typeof e=="string",Fs=()=>{let e,t;const i=new Promise((r,o)=>{e=r,t=o});return i.resolve=e,i.reject=t,i},y6=e=>e==null?"":""+e,LP=(e,t,i)=>{e.forEach(r=>{t[r]&&(i[r]=t[r])})},OP=/###/g,v6=e=>e&&e.indexOf("###")>-1?e.replace(OP,"."):e,w6=e=>!e||me(e),io=(e,t,i)=>{const r=me(t)?t.split("."):t;let o=0;for(;o<r.length-1;){if(w6(e))return{};const l=v6(r[o]);!e[l]&&i&&(e[l]=new i),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={},++o}return w6(e)?{}:{obj:e,k:v6(r[o])}},b6=(e,t,i)=>{const{obj:r,k:o}=io(e,t,Object);if(r!==void 0||t.length===1){r[o]=i;return}let l=t[t.length-1],u=t.slice(0,t.length-1),d=io(e,u,Object);for(;d.obj===void 0&&u.length;)l=`${u[u.length-1]}.${l}`,u=u.slice(0,u.length-1),d=io(e,u,Object),d!=null&&d.obj&&typeof d.obj[`${d.k}.${l}`]<"u"&&(d.obj=void 0);d.obj[`${d.k}.${l}`]=i},RP=(e,t,i,r)=>{const{obj:o,k:l}=io(e,t,Object);o[l]=o[l]||[],o[l].push(i)},Uc=(e,t)=>{const{obj:i,k:r}=io(e,t);if(i&&Object.prototype.hasOwnProperty.call(i,r))return i[r]},kP=(e,t,i)=>{const r=Uc(e,i);return r!==void 0?r:Uc(t,i)},s7=(e,t,i)=>{for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?me(e[r])||e[r]instanceof String||me(t[r])||t[r]instanceof String?i&&(e[r]=t[r]):s7(e[r],t[r],i):e[r]=t[r]);return e},dr=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var DP={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const HP=e=>me(e)?e.replace(/[&<>"'\/]/g,t=>DP[t]):e;class zP{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const i=this.regExpMap.get(t);if(i!==void 0)return i;const r=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,r),this.regExpQueue.push(t),r}}const VP=[" ",",","?","!",";"],PP=new zP(20),NP=(e,t,i)=>{t=t||"",i=i||"";const r=VP.filter(u=>t.indexOf(u)<0&&i.indexOf(u)<0);if(r.length===0)return!0;const o=PP.getRegExp(`(${r.map(u=>u==="?"?"\\?":u).join("|")})`);let l=!o.test(e);if(!l){const u=e.indexOf(i);u>0&&!o.test(e.substring(0,u))&&(l=!0)}return l},Mp=function(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const r=t.split(i);let o=e;for(let l=0;l<r.length;){if(!o||typeof o!="object")return;let u,d="";for(let p=l;p<r.length;++p)if(p!==l&&(d+=i),d+=r[p],u=o[d],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&p<r.length-1)continue;l+=p-l+1;break}o=u}return o},_c=e=>e==null?void 0:e.replace("_","-"),$P={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var i,r;(r=(i=console==null?void 0:console[e])==null?void 0:i.apply)==null||r.call(i,console,t)}};class Ic{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,i)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=t||$P,this.options=i,this.debug=i.debug}log(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return this.forward(i,"log","",!0)}warn(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return this.forward(i,"warn","",!0)}error(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return this.forward(i,"error","")}deprecate(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(t,i,r,o){return o&&!this.debug?null:(me(t[0])&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[i](t))}create(t){return new Ic(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Ic(this.logger,t)}}var Nn=new Ic;class uu{constructor(){this.observers={}}on(t,i){return t.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const o=this.observers[r].get(i)||0;this.observers[r].set(i,o+1)}),this}off(t,i){if(this.observers[t]){if(!i){delete this.observers[t];return}this.observers[t].delete(i)}}emit(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(u=>{let[d,p]=u;for(let h=0;h<p;h++)d(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[d,p]=u;for(let h=0;h<p;h++)d.apply(d,[t,...r])})}}class S6 extends uu{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const i=this.options.ns.indexOf(t);i>-1&&this.options.ns.splice(i,1)}getResource(t,i,r){var h,g;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let d;t.indexOf(".")>-1?d=t.split("."):(d=[t,i],r&&(Array.isArray(r)?d.push(...r):me(r)&&l?d.push(...r.split(l)):d.push(r)));const p=Uc(this.data,d);return!p&&!i&&!r&&t.indexOf(".")>-1&&(t=d[0],i=d[1],r=d.slice(2).join(".")),p||!u||!me(r)?p:Mp((g=(h=this.data)==null?void 0:h[t])==null?void 0:g[i],r,l)}addResource(t,i,r,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let d=[t,i];r&&(d=d.concat(u?r.split(u):r)),t.indexOf(".")>-1&&(d=t.split("."),o=i,i=d[1]),this.addNamespaces(i),b6(this.data,d,o),l.silent||this.emit("added",t,i,r,o)}addResources(t,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in r)(me(r[l])||Array.isArray(r[l]))&&this.addResource(t,i,l,r[l],{silent:!0});o.silent||this.emit("added",t,i,r)}addResourceBundle(t,i,r,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},d=[t,i];t.indexOf(".")>-1&&(d=t.split("."),o=r,r=i,i=d[1]),this.addNamespaces(i);let p=Uc(this.data,d)||{};u.skipCopy||(r=JSON.parse(JSON.stringify(r))),o?s7(p,r,l):p={...p,...r},b6(this.data,d,p),u.silent||this.emit("added",t,i,r)}removeResourceBundle(t,i){this.hasResourceBundle(t,i)&&delete this.data[t][i],this.removeNamespaces(i),this.emit("removed",t,i)}hasResourceBundle(t,i){return this.getResource(t,i)!==void 0}getResourceBundle(t,i){return i||(i=this.options.defaultNS),this.getResource(t,i)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const i=this.getDataByLanguage(t);return!!(i&&Object.keys(i)||[]).find(o=>i[o]&&Object.keys(i[o]).length>0)}toJSON(){return this.data}}var o7={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,i,r,o){return e.forEach(l=>{var u;t=((u=this.processors[l])==null?void 0:u.process(t,i,r,o))??t}),t}};const C6={},T6=e=>!me(e)&&typeof e!="boolean"&&typeof e!="number";class Gc extends uu{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),LP(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Nn.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,i);return(r==null?void 0:r.res)!==void 0}extractFromKey(t,i){let r=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=i.ns||this.options.defaultNS||[];const u=r&&t.indexOf(r)>-1,d=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!NP(t,r,o);if(u&&!d){const p=t.match(this.interpolator.nestingRegexp);if(p&&p.length>0)return{key:t,namespaces:me(l)?[l]:l};const h=t.split(r);(r!==o||r===o&&this.options.ns.indexOf(h[0])>-1)&&(l=h.shift()),t=h.join(o)}return{key:t,namespaces:me(l)?[l]:l}}translate(t,i,r){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:u,namespaces:d}=this.extractFromKey(t[t.length-1],i),p=d[d.length-1],h=i.lng||this.language,g=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(g){const W=i.nsSeparator||this.options.nsSeparator;return o?{res:`${p}${W}${u}`,usedKey:u,exactUsedKey:u,usedLng:h,usedNS:p,usedParams:this.getUsedParamsDetails(i)}:`${p}${W}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:h,usedNS:p,usedParams:this.getUsedParamsDetails(i)}:u}const y=this.resolve(t,i);let v=y==null?void 0:y.res;const C=(y==null?void 0:y.usedKey)||u,S=(y==null?void 0:y.exactUsedKey)||u,E=["[object Number]","[object Function]","[object RegExp]"],O=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,M=!this.i18nFormat||this.i18nFormat.handleAsObject,T=i.count!==void 0&&!me(i.count),j=Gc.hasDefaultValue(i),D=T?this.pluralResolver.getSuffix(h,i.count,i):"",L=i.ordinal&&T?this.pluralResolver.getSuffix(h,i.count,{ordinal:!1}):"",$=T&&!i.ordinal&&i.count===0,V=$&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${D}`]||i[`defaultValue${L}`]||i.defaultValue;let _=v;M&&!v&&j&&(_=V);const q=T6(_),Y=Object.prototype.toString.apply(_);if(M&&_&&q&&E.indexOf(Y)<0&&!(me(O)&&Array.isArray(_))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const W=this.options.returnedObjectHandler?this.options.returnedObjectHandler(C,_,{...i,ns:d}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(y.res=W,y.usedParams=this.getUsedParamsDetails(i),y):W}if(l){const W=Array.isArray(_),te=W?[]:{},se=W?S:C;for(const ce in _)if(Object.prototype.hasOwnProperty.call(_,ce)){const re=`${se}${l}${ce}`;j&&!v?te[ce]=this.translate(re,{...i,defaultValue:T6(V)?V[ce]:void 0,joinArrays:!1,ns:d}):te[ce]=this.translate(re,{...i,joinArrays:!1,ns:d}),te[ce]===re&&(te[ce]=_[ce])}v=te}}else if(M&&me(O)&&Array.isArray(v))v=v.join(O),v&&(v=this.extendTranslation(v,t,i,r));else{let W=!1,te=!1;!this.isValidLookup(v)&&j&&(W=!0,v=V),this.isValidLookup(v)||(te=!0,v=u);const ce=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&te?void 0:v,re=j&&V!==v&&this.options.updateMissing;if(te||W||re){if(this.logger.log(re?"updateKey":"missingKey",h,p,u,re?V:v),l){const ee=this.resolve(u,{...i,keySeparator:!1});ee&&ee.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let N=[];const X=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&X&&X[0])for(let ee=0;ee<X.length;ee++)N.push(X[ee]);else this.options.saveMissingTo==="all"?N=this.languageUtils.toResolveHierarchy(i.lng||this.language):N.push(i.lng||this.language);const Q=(ee,k,F)=>{var ie;const ne=j&&F!==v?F:ce;this.options.missingKeyHandler?this.options.missingKeyHandler(ee,p,k,ne,re,i):(ie=this.backendConnector)!=null&&ie.saveMissing&&this.backendConnector.saveMissing(ee,p,k,ne,re,i),this.emit("missingKey",ee,p,k,v)};this.options.saveMissing&&(this.options.saveMissingPlurals&&T?N.forEach(ee=>{const k=this.pluralResolver.getSuffixes(ee,i);$&&i[`defaultValue${this.options.pluralSeparator}zero`]&&k.indexOf(`${this.options.pluralSeparator}zero`)<0&&k.push(`${this.options.pluralSeparator}zero`),k.forEach(F=>{Q([ee],u+F,i[`defaultValue${F}`]||V)})}):Q(N,u,V))}v=this.extendTranslation(v,t,i,y,r),te&&v===u&&this.options.appendNamespaceToMissingKey&&(v=`${p}:${u}`),(te||W)&&this.options.parseMissingKeyHandler&&(v=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${p}:${u}`:u,W?v:void 0))}return o?(y.res=v,y.usedParams=this.getUsedParamsDetails(i),y):v}extendTranslation(t,i,r,o,l){var h,g;var u=this;if((h=this.i18nFormat)!=null&&h.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const y=me(t)&&(((g=r==null?void 0:r.interpolation)==null?void 0:g.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let v;if(y){const S=t.match(this.interpolator.nestingRegexp);v=S&&S.length}let C=r.replace&&!me(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(C={...this.options.interpolation.defaultVariables,...C}),t=this.interpolator.interpolate(t,C,r.lng||this.language||o.usedLng,r),y){const S=t.match(this.interpolator.nestingRegexp),E=S&&S.length;v<E&&(r.nest=!1)}!r.lng&&o&&o.res&&(r.lng=this.language||o.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var S=arguments.length,E=new Array(S),O=0;O<S;O++)E[O]=arguments[O];return(l==null?void 0:l[0])===E[0]&&!r.context?(u.logger.warn(`It seems you are nesting recursively key: ${E[0]} in key: ${i[0]}`),null):u.translate(...E,i)},r)),r.interpolation&&this.interpolator.reset()}const d=r.postProcess||this.options.postProcess,p=me(d)?[d]:d;return t!=null&&(p!=null&&p.length)&&r.applyPostProcessor!==!1&&(t=o7.handle(p,t,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),t}resolve(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,o,l,u,d;return me(t)&&(t=[t]),t.forEach(p=>{if(this.isValidLookup(r))return;const h=this.extractFromKey(p,i),g=h.key;o=g;let y=h.namespaces;this.options.fallbackNS&&(y=y.concat(this.options.fallbackNS));const v=i.count!==void 0&&!me(i.count),C=v&&!i.ordinal&&i.count===0,S=i.context!==void 0&&(me(i.context)||typeof i.context=="number")&&i.context!=="",E=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);y.forEach(O=>{var M,T;this.isValidLookup(r)||(d=O,!C6[`${E[0]}-${O}`]&&((M=this.utils)!=null&&M.hasLoadedNamespace)&&!((T=this.utils)!=null&&T.hasLoadedNamespace(d))&&(C6[`${E[0]}-${O}`]=!0,this.logger.warn(`key "${o}" for languages "${E.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),E.forEach(j=>{var $;if(this.isValidLookup(r))return;u=j;const D=[g];if(($=this.i18nFormat)!=null&&$.addLookupKeys)this.i18nFormat.addLookupKeys(D,g,j,O,i);else{let V;v&&(V=this.pluralResolver.getSuffix(j,i.count,i));const _=`${this.options.pluralSeparator}zero`,q=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(v&&(D.push(g+V),i.ordinal&&V.indexOf(q)===0&&D.push(g+V.replace(q,this.options.pluralSeparator)),C&&D.push(g+_)),S){const Y=`${g}${this.options.contextSeparator}${i.context}`;D.push(Y),v&&(D.push(Y+V),i.ordinal&&V.indexOf(q)===0&&D.push(Y+V.replace(q,this.options.pluralSeparator)),C&&D.push(Y+_))}}let L;for(;L=D.pop();)this.isValidLookup(r)||(l=L,r=this.getResource(j,O,L,i))}))})}),{res:r,usedKey:o,exactUsedKey:l,usedLng:u,usedNS:d}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,i,r){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(t,i,r,o):this.resourceStore.getResource(t,i,r,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=t.replace&&!me(t.replace);let o=r?t.replace:t;if(r&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!r){o={...o};for(const l of i)delete o[l]}return o}static hasDefaultValue(t){const i="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&i===r.substring(0,i.length)&&t[r]!==void 0)return!0;return!1}}class E6{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Nn.create("languageUtils")}getScriptPartFromCode(t){if(t=_c(t),!t||t.indexOf("-")<0)return null;const i=t.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(t){if(t=_c(t),!t||t.indexOf("-")<0)return t;const i=t.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(t){if(me(t)&&t.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(t)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let i;return t.forEach(r=>{if(i)return;const o=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(o))&&(i=o)}),!i&&this.options.supportedLngs&&t.forEach(r=>{if(i)return;const o=this.getLanguagePartFromCode(r);if(this.isSupportedCode(o))return i=o;i=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(t,i){if(!t)return[];if(typeof t=="function"&&(t=t(i)),me(t)&&(t=[t]),Array.isArray(t))return t;if(!i)return t.default||[];let r=t[i];return r||(r=t[this.getScriptPartFromCode(i)]),r||(r=t[this.formatLanguageCode(i)]),r||(r=t[this.getLanguagePartFromCode(i)]),r||(r=t.default),r||[]}toResolveHierarchy(t,i){const r=this.getFallbackCodes(i||this.options.fallbackLng||[],t),o=[],l=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return me(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(t))):me(t)&&l(this.formatLanguageCode(t)),r.forEach(u=>{o.indexOf(u)<0&&l(this.formatLanguageCode(u))}),o}}const j6={zero:0,one:1,two:2,few:3,many:4,other:5},A6={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class BP{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=i,this.logger=Nn.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,i){this.rules[t]=i}clearCache(){this.pluralRulesCache={}}getRule(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=_c(t==="dev"?"en":t),o=i.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:r,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let u;try{u=new Intl.PluralRules(r,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),A6;if(!t.match(/-|_/))return A6;const p=this.languageUtils.getLanguagePartFromCode(t);u=this.getRule(p,i)}return this.pluralRulesCache[l]=u,u}needsPlural(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(t,i);return r||(r=this.getRule("dev",i)),(r==null?void 0:r.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(o=>`${i}${o}`)}getSuffixes(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(t,i);return r||(r=this.getRule("dev",i)),r?r.resolvedOptions().pluralCategories.sort((o,l)=>j6[o]-j6[l]).map(o=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(t,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,r);return o?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(i)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",i,r))}}const M6=function(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=kP(e,t,i);return!l&&o&&me(i)&&(l=Mp(e,i,r),l===void 0&&(l=Mp(t,i,r))),l},H0=e=>e.replace(/\$/g,"$$$$");class UP{constructor(){var i;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Nn.create("interpolator"),this.options=t,this.format=((i=t==null?void 0:t.interpolation)==null?void 0:i.format)||(r=>r),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:i,escapeValue:r,useRawValueToEscape:o,prefix:l,prefixEscaped:u,suffix:d,suffixEscaped:p,formatSeparator:h,unescapeSuffix:g,unescapePrefix:y,nestingPrefix:v,nestingPrefixEscaped:C,nestingSuffix:S,nestingSuffixEscaped:E,nestingOptionsSeparator:O,maxReplaces:M,alwaysFormat:T}=t.interpolation;this.escape=i!==void 0?i:HP,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?dr(l):u||"{{",this.suffix=d?dr(d):p||"}}",this.formatSeparator=h||",",this.unescapePrefix=g?"":y||"-",this.unescapeSuffix=this.unescapePrefix?"":g||"",this.nestingPrefix=v?dr(v):C||dr("$t("),this.nestingSuffix=S?dr(S):E||dr(")"),this.nestingOptionsSeparator=O||",",this.maxReplaces=M||1e3,this.alwaysFormat=T!==void 0?T:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(i,r)=>(i==null?void 0:i.source)===r?(i.lastIndex=0,i):new RegExp(r,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,i,r,o){var C;let l,u,d;const p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=S=>{if(S.indexOf(this.formatSeparator)<0){const T=M6(i,p,S,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(T,void 0,r,{...o,...i,interpolationkey:S}):T}const E=S.split(this.formatSeparator),O=E.shift().trim(),M=E.join(this.formatSeparator).trim();return this.format(M6(i,p,O,this.options.keySeparator,this.options.ignoreJSONStructure),M,r,{...o,...i,interpolationkey:O})};this.resetRegExp();const g=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,y=((C=o==null?void 0:o.interpolation)==null?void 0:C.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:S=>H0(S)},{regex:this.regexp,safeValue:S=>this.escapeValue?H0(this.escape(S)):H0(S)}].forEach(S=>{for(d=0;l=S.regex.exec(t);){const E=l[1].trim();if(u=h(E),u===void 0)if(typeof g=="function"){const M=g(t,l,o);u=me(M)?M:""}else if(o&&Object.prototype.hasOwnProperty.call(o,E))u="";else if(y){u=l[0];continue}else this.logger.warn(`missed to pass in variable ${E} for interpolating ${t}`),u="";else!me(u)&&!this.useRawValueToEscape&&(u=y6(u));const O=S.safeValue(u);if(t=t.replace(l[0],O),y?(S.regex.lastIndex+=u.length,S.regex.lastIndex-=l[0].length):S.regex.lastIndex=0,d++,d>=this.maxReplaces)break}}),t}nest(t,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,u;const d=(p,h)=>{const g=this.nestingOptionsSeparator;if(p.indexOf(g)<0)return p;const y=p.split(new RegExp(`${g}[ ]*{`));let v=`{${y[1]}`;p=y[0],v=this.interpolate(v,u);const C=v.match(/'/g),S=v.match(/"/g);(((C==null?void 0:C.length)??0)%2===0&&!S||S.length%2!==0)&&(v=v.replace(/'/g,'"'));try{u=JSON.parse(v),h&&(u={...h,...u})}catch(E){return this.logger.warn(`failed parsing options string in nesting for key ${p}`,E),`${p}${g}${v}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,p};for(;o=this.nestingRegexp.exec(t);){let p=[];u={...r},u=u.replace&&!me(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let h=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const g=o[1].split(this.formatSeparator).map(y=>y.trim());o[1]=g.shift(),p=g,h=!0}if(l=i(d.call(this,o[1].trim(),u),u),l&&o[0]===t&&!me(l))return l;me(l)||(l=y6(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),l=""),h&&(l=p.reduce((g,y)=>this.format(g,y,r.lng,{...r,interpolationkey:o[1].trim()}),l.trim())),t=t.replace(o[0],l),this.regexp.lastIndex=0}return t}}const _P=e=>{let t=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);t==="currency"&&o.indexOf(":")<0?i.currency||(i.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?i.range||(i.range=o.trim()):o.split(";").forEach(u=>{if(u){const[d,...p]=u.split(":"),h=p.join(":").trim().replace(/^'+|'+$/g,""),g=d.trim();i[g]||(i[g]=h),h==="false"&&(i[g]=!1),h==="true"&&(i[g]=!0),isNaN(h)||(i[g]=parseInt(h,10))}})}return{formatName:t,formatOptions:i}},fr=e=>{const t={};return(i,r,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const u=r+JSON.stringify(l);let d=t[u];return d||(d=e(_c(r),o),t[u]=d),d(i)}};class IP{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Nn.create("formatter"),this.options=t,this.formats={number:fr((i,r)=>{const o=new Intl.NumberFormat(i,{...r});return l=>o.format(l)}),currency:fr((i,r)=>{const o=new Intl.NumberFormat(i,{...r,style:"currency"});return l=>o.format(l)}),datetime:fr((i,r)=>{const o=new Intl.DateTimeFormat(i,{...r});return l=>o.format(l)}),relativetime:fr((i,r)=>{const o=new Intl.RelativeTimeFormat(i,{...r});return l=>o.format(l,r.range||"day")}),list:fr((i,r)=>{const o=new Intl.ListFormat(i,{...r});return l=>o.format(l)})},this.init(t)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(t,i){this.formats[t.toLowerCase().trim()]=i}addCached(t,i){this.formats[t.toLowerCase().trim()]=fr(i)}format(t,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=i.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(d=>d.indexOf(")")>-1)){const d=l.findIndex(p=>p.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,d)].join(this.formatSeparator)}return l.reduce((d,p)=>{var y;const{formatName:h,formatOptions:g}=_P(p);if(this.formats[h]){let v=d;try{const C=((y=o==null?void 0:o.formatParams)==null?void 0:y[o.interpolationkey])||{},S=C.locale||C.lng||o.locale||o.lng||r;v=this.formats[h](d,S,{...g,...o,...C})}catch(C){this.logger.warn(C)}return v}else this.logger.warn(`there was no format function for ${h}`);return d},t)}}const GP=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class qP extends uu{constructor(t,i,r){var l,u;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=i,this.services=r,this.languageUtils=r.languageUtils,this.options=o,this.logger=Nn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(u=(l=this.backend)==null?void 0:l.init)==null||u.call(l,r,o.backend,o)}queueLoad(t,i,r,o){const l={},u={},d={},p={};return t.forEach(h=>{let g=!0;i.forEach(y=>{const v=`${h}|${y}`;!r.reload&&this.store.hasResourceBundle(h,y)?this.state[v]=2:this.state[v]<0||(this.state[v]===1?u[v]===void 0&&(u[v]=!0):(this.state[v]=1,g=!1,u[v]===void 0&&(u[v]=!0),l[v]===void 0&&(l[v]=!0),p[y]===void 0&&(p[y]=!0)))}),g||(d[h]=!0)}),(Object.keys(l).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(u),toLoadLanguages:Object.keys(d),toLoadNamespaces:Object.keys(p)}}loaded(t,i,r){const o=t.split("|"),l=o[0],u=o[1];i&&this.emit("failedLoading",l,u,i),!i&&r&&this.store.addResourceBundle(l,u,r,void 0,void 0,{skipCopy:!0}),this.state[t]=i?-1:2,i&&r&&(this.state[t]=0);const d={};this.queue.forEach(p=>{RP(p.loaded,[l],u),GP(p,t),i&&p.errors.push(i),p.pendingCount===0&&!p.done&&(Object.keys(p.loaded).forEach(h=>{d[h]||(d[h]={});const g=p.loaded[h];g.length&&g.forEach(y=>{d[h][y]===void 0&&(d[h][y]=!0)})}),p.done=!0,p.errors.length?p.callback(p.errors):p.callback())}),this.emit("loaded",d),this.queue=this.queue.filter(p=>!p.done)}read(t,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!t.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:i,fcName:r,tried:o,wait:l,callback:u});return}this.readingCalls++;const d=(h,g)=>{if(this.readingCalls--,this.waitingReads.length>0){const y=this.waitingReads.shift();this.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(h&&g&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,i,r,o+1,l*2,u)},l);return}u(h,g)},p=this.backend[r].bind(this.backend);if(p.length===2){try{const h=p(t,i);h&&typeof h.then=="function"?h.then(g=>d(null,g)).catch(d):d(null,h)}catch(h){d(h)}return}return p(t,i,d)}prepareLoading(t,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();me(t)&&(t=this.languageUtils.toResolveHierarchy(t)),me(i)&&(i=[i]);const l=this.queueLoad(t,i,r,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(u=>{this.loadOne(u)})}load(t,i,r){this.prepareLoading(t,i,{},r)}reload(t,i,r){this.prepareLoading(t,i,{reload:!0},r)}loadOne(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),o=r[0],l=r[1];this.read(o,l,"read",void 0,void 0,(u,d)=>{u&&this.logger.warn(`${i}loading namespace ${l} for language ${o} failed`,u),!u&&d&&this.logger.log(`${i}loaded namespace ${l} for language ${o}`,d),this.loaded(t,u,d)})}saveMissing(t,i,r,o,l){var p,h,g,y,v;let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(p=this.services)==null?void 0:p.utils)!=null&&h.hasLoadedNamespace&&!((y=(g=this.services)==null?void 0:g.utils)!=null&&y.hasLoadedNamespace(i))){this.logger.warn(`did not save key "${r}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if((v=this.backend)!=null&&v.create){const C={...u,isUpdate:l},S=this.backend.create.bind(this.backend);if(S.length<6)try{let E;S.length===5?E=S(t,i,r,o,C):E=S(t,i,r,o),E&&typeof E.then=="function"?E.then(O=>d(null,O)).catch(d):d(null,E)}catch(E){d(E)}else S(t,i,r,o,d,C)}!t||!t[0]||this.store.addResource(t[0],i,r,o)}}}const L6=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),me(e[1])&&(t.defaultValue=e[1]),me(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const i=e[3]||e[2];Object.keys(i).forEach(r=>{t[r]=i[r]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),O6=e=>{var t,i;return me(e.ns)&&(e.ns=[e.ns]),me(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),me(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((i=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:i.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},oc=()=>{},YP=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(i=>{typeof e[i]=="function"&&(e[i]=e[i].bind(e))})};class xo extends uu{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=O6(t),this.services={},this.logger=Nn,this.modules={external:[]},YP(this),i&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,i),this;setTimeout(()=>{this.init(t,i)},0)}}init(){var t=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(r=i,i={}),i.defaultNS==null&&i.ns&&(me(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=L6();this.options={...o,...this.options,...O6(i)},this.options.interpolation={...o.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const l=g=>g?typeof g=="function"?new g:g:null;if(!this.options.isClone){this.modules.logger?Nn.init(l(this.modules.logger),this.options):Nn.init(null,this.options);let g;this.modules.formatter?g=this.modules.formatter:g=IP;const y=new E6(this.options);this.store=new S6(this.options.resources,this.options);const v=this.services;v.logger=Nn,v.resourceStore=this.store,v.languageUtils=y,v.pluralResolver=new BP(y,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),g&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=l(g),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new UP(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new qP(l(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",function(C){for(var S=arguments.length,E=new Array(S>1?S-1:0),O=1;O<S;O++)E[O-1]=arguments[O];t.emit(C,...E)}),this.modules.languageDetector&&(v.languageDetector=l(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=l(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new Gc(this.services,this.options),this.translator.on("*",function(C){for(var S=arguments.length,E=new Array(S>1?S-1:0),O=1;O<S;O++)E[O-1]=arguments[O];t.emit(C,...E)}),this.modules.external.forEach(C=>{C.init&&C.init(this)})}if(this.format=this.options.interpolation.format,r||(r=oc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(g=>{this[g]=function(){return t.store[g](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(g=>{this[g]=function(){return t.store[g](...arguments),t}});const p=Fs(),h=()=>{const g=(y,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(v),r(y,v)};if(this.languages&&!this.isInitialized)return g(null,this.t.bind(this));this.changeLanguage(this.options.lng,g)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),p}loadResources(t){var l,u;let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oc;const o=me(t)?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const d=[],p=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(y=>{y!=="cimode"&&d.indexOf(y)<0&&d.push(y)})};o?p(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(g=>p(g)),(u=(l=this.options.preload)==null?void 0:l.forEach)==null||u.call(l,h=>p(h)),this.services.backendConnector.load(d,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(h)})}else r(null)}reloadResources(t,i,r){const o=Fs();return typeof t=="function"&&(r=t,t=void 0),typeof i=="function"&&(r=i,i=void 0),t||(t=this.languages),i||(i=this.options.ns),r||(r=oc),this.services.backendConnector.reload(t,i,l=>{o.resolve(),r(l)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&o7.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let i=0;i<this.languages.length;i++){const r=this.languages[i];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,i){var r=this;this.isLanguageChangingTo=t;const o=Fs();this.emit("languageChanging",t);const l=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},u=(p,h)=>{h?(l(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,o.resolve(function(){return r.t(...arguments)}),i&&i(p,function(){return r.t(...arguments)})},d=p=>{var g,y;!t&&!p&&this.services.languageDetector&&(p=[]);const h=me(p)?p:this.services.languageUtils.getBestMatchFromCodes(p);h&&(this.language||l(h),this.translator.language||this.translator.changeLanguage(h),(y=(g=this.services.languageDetector)==null?void 0:g.cacheUserLanguage)==null||y.call(g,h)),this.loadResources(h,v=>{u(v,h)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?d(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(d):this.services.languageDetector.detect(d):d(t),o}getFixedT(t,i,r){var o=this;const l=function(u,d){let p;if(typeof d!="object"){for(var h=arguments.length,g=new Array(h>2?h-2:0),y=2;y<h;y++)g[y-2]=arguments[y];p=o.options.overloadTranslationOptionHandler([u,d].concat(g))}else p={...d};p.lng=p.lng||l.lng,p.lngs=p.lngs||l.lngs,p.ns=p.ns||l.ns,p.keyPrefix!==""&&(p.keyPrefix=p.keyPrefix||r||l.keyPrefix);const v=o.options.keySeparator||".";let C;return p.keyPrefix&&Array.isArray(u)?C=u.map(S=>`${p.keyPrefix}${v}${S}`):C=p.keyPrefix?`${p.keyPrefix}${v}${u}`:u,o.t(C,p)};return me(t)?l.lng=t:l.lngs=t,l.ns=i,l.keyPrefix=r,l}t(){var o;for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(o=this.translator)==null?void 0:o.translate(...i)}exists(){var o;for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(o=this.translator)==null?void 0:o.exists(...i)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=i.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const u=(d,p)=>{const h=this.services.backendConnector.state[`${d}|${p}`];return h===-1||h===0||h===2};if(i.precheck){const d=i.precheck(this,u);if(d!==void 0)return d}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(r,t)&&(!o||u(l,t)))}loadNamespaces(t,i){const r=Fs();return this.options.ns?(me(t)&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{r.resolve(),i&&i(o)}),r):(i&&i(),Promise.resolve())}loadLanguages(t,i){const r=Fs();me(t)&&(t=[t]);const o=this.options.preload||[],l=t.filter(u=>o.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return l.length?(this.options.preload=o.concat(l),this.loadResources(u=>{r.resolve(),i&&i(u)}),r):(i&&i(),Promise.resolve())}dir(t){var o,l;if(t||(t=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!t)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=((l=this.services)==null?void 0:l.languageUtils)||new E6(L6());return i.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new xo(t,i)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oc;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},l=new xo(o);if((t.debug!==void 0||t.prefix!==void 0)&&(l.logger=l.logger.clone(t)),["store","services","language"].forEach(d=>{l[d]=this[d]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},r){const d=Object.keys(this.store.data).reduce((p,h)=>(p[h]={...this.store.data[h]},Object.keys(p[h]).reduce((g,y)=>(g[y]={...p[h][y]},g),{})),{});l.store=new S6(d,o),l.services.resourceStore=l.store}return l.translator=new Gc(l.services,o),l.translator.on("*",function(d){for(var p=arguments.length,h=new Array(p>1?p-1:0),g=1;g<p;g++)h[g-1]=arguments[g];l.emit(d,...h)}),l.init(o,i),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const At=xo.createInstance();At.createInstance=xo.createInstance;At.createInstance;At.dir;At.init;At.loadResources;At.reloadResources;At.use;At.changeLanguage;At.getFixedT;At.t;At.exists;At.setDefaultNamespace;At.hasLoadedNamespace;At.loadNamespaces;At.loadLanguages;function Lp(e){"@babel/helpers - typeof";return Lp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Lp(e)}function l7(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Lp(XMLHttpRequest))==="object"}function FP(e){return!!e&&typeof e.then=="function"}function ZP(e){return FP(e)?e:Promise.resolve(e)}const XP="modulepreload",WP=function(e){return"/"+e},R6={},KP=function(t,i,r){let o=Promise.resolve();if(i&&i.length>0){let u=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=u(i.map(h=>{if(h=WP(h),h in R6)return;R6[h]=!0;const g=h.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${y}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":XP,g||(v.as="script"),v.crossOrigin="",v.href=h,p&&v.setAttribute("nonce",p),document.head.appendChild(v),g)return new Promise((C,S)=>{v.addEventListener("load",C),v.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return o.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return t().catch(l)})};function k6(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,r)}return i}function D6(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?k6(Object(i),!0).forEach(function(r){QP(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):k6(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function QP(e,t,i){return(t=JP(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function JP(e){var t=eN(e,"string");return Ca(t)=="symbol"?t:t+""}function eN(e,t){if(Ca(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,t);if(Ca(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ca(e){"@babel/helpers - typeof";return Ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ca(e)}var qi=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?qi=global.fetch:typeof window<"u"&&window.fetch&&(qi=window.fetch);var yo;l7()&&(typeof global<"u"&&global.XMLHttpRequest?yo=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(yo=window.XMLHttpRequest));var qc;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?qc=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(qc=window.ActiveXObject));typeof qi!="function"&&(qi=void 0);if(!qi&&!yo&&!qc)try{KP(()=>import("./browser-ponyfill-BZYdTUve.js").then(e=>e.b),[]).then(function(e){qi=e.default}).catch(function(){})}catch{}var Op=function(t,i){if(i&&Ca(i)==="object"){var r="";for(var o in i)r+="&"+encodeURIComponent(o)+"="+encodeURIComponent(i[o]);if(!r)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+r.slice(1)}return t},H6=function(t,i,r,o){var l=function(p){if(!p.ok)return r(p.statusText||"Error",{status:p.status});p.text().then(function(h){r(null,{status:p.status,data:h})}).catch(r)};if(o){var u=o(t,i);if(u instanceof Promise){u.then(l).catch(r);return}}typeof fetch=="function"?fetch(t,i).then(l).catch(r):qi(t,i).then(l).catch(r)},z6=!1,tN=function(t,i,r,o){t.queryStringParams&&(i=Op(i,t.queryStringParams));var l=D6({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),r&&(l["Content-Type"]="application/json");var u=typeof t.requestOptions=="function"?t.requestOptions(r):t.requestOptions,d=D6({method:r?"POST":"GET",body:r?t.stringify(r):void 0,headers:l},z6?{}:u),p=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{H6(i,d,o,p)}catch(h){if(!u||Object.keys(u).length===0||!h.message||h.message.indexOf("not implemented")<0)return o(h);try{Object.keys(u).forEach(function(g){delete d[g]}),H6(i,d,o,p),z6=!0}catch(g){o(g)}}},nN=function(t,i,r,o){r&&Ca(r)==="object"&&(r=Op("",r).slice(1)),t.queryStringParams&&(i=Op(i,t.queryStringParams));try{var l=yo?new yo:new qc("MSXML2.XMLHTTP.3.0");l.open(r?"POST":"GET",i,1),t.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!t.withCredentials,r&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var u=t.customHeaders;if(u=typeof u=="function"?u():u,u)for(var d in u)l.setRequestHeader(d,u[d]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(r)}catch(p){console&&console.log(p)}},iN=function(t,i,r,o){if(typeof r=="function"&&(o=r,r=void 0),o=o||function(){},qi&&i.indexOf("file:")!==0)return tN(t,i,r,o);if(l7()||typeof ActiveXObject=="function")return nN(t,i,r,o);o(new Error("No fetch and no xhr implementation found!"))};function kr(e){"@babel/helpers - typeof";return kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kr(e)}function V6(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,r)}return i}function z0(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?V6(Object(i),!0).forEach(function(r){c7(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):V6(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function aN(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rN(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,u7(r.key),r)}}function sN(e,t,i){return t&&rN(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function c7(e,t,i){return(t=u7(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u7(e){var t=oN(e,"string");return kr(t)=="symbol"?t:t+""}function oN(e,t){if(kr(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,t);if(kr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var lN=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(i){return JSON.parse(i)},stringify:JSON.stringify,parsePayload:function(i,r,o){return c7({},r,o||"")},parseLoadPayload:function(i,r){},request:iN,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},d7=function(){function e(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};aN(this,e),this.services=t,this.options=i,this.allOptions=r,this.type="backend",this.init(t,i,r)}return sN(e,[{key:"init",value:function(i){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=i,this.options=z0(z0(z0({},lN()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var u=setInterval(function(){return r.reload()},this.options.reloadInterval);kr(u)==="object"&&typeof u.unref=="function"&&u.unref()}}},{key:"readMulti",value:function(i,r,o){this._readAny(i,i,r,r,o)}},{key:"read",value:function(i,r,o){this._readAny([i],i,[r],r,o)}},{key:"_readAny",value:function(i,r,o,l,u){var d=this,p=this.options.loadPath;typeof this.options.loadPath=="function"&&(p=this.options.loadPath(i,o)),p=ZP(p),p.then(function(h){if(!h)return u(null,{});var g=d.services.interpolator.interpolate(h,{lng:i.join("+"),ns:o.join("+")});d.loadUrl(g,u,r,l)})}},{key:"loadUrl",value:function(i,r,o,l){var u=this,d=typeof o=="string"?[o]:o,p=typeof l=="string"?[l]:l,h=this.options.parseLoadPayload(d,p);this.options.request(this.options,i,h,function(g,y){if(y&&(y.status>=500&&y.status<600||!y.status))return r("failed loading "+i+"; status code: "+y.status,!0);if(y&&y.status>=400&&y.status<500)return r("failed loading "+i+"; status code: "+y.status,!1);if(!y&&g&&g.message){var v=g.message.toLowerCase(),C=["failed","fetch","network","load"].find(function(O){return v.indexOf(O)>-1});if(C)return r("failed loading "+i+": "+g.message,!0)}if(g)return r(g,!1);var S,E;try{typeof y.data=="string"?S=u.options.parse(y.data,o,l):S=y.data}catch{E="failed parsing "+i+" to json"}if(E)return r(E,!1);r(null,S)})}},{key:"create",value:function(i,r,o,l,u){var d=this;if(this.options.addPath){typeof i=="string"&&(i=[i]);var p=this.options.parsePayload(r,o,l),h=0,g=[],y=[];i.forEach(function(v){var C=d.options.addPath;typeof d.options.addPath=="function"&&(C=d.options.addPath(v,r));var S=d.services.interpolator.interpolate(C,{lng:v,ns:r});d.options.request(d.options,S,p,function(E,O){h+=1,g.push(E),y.push(O),h===i.length&&typeof u=="function"&&u(g,y)})})}}},{key:"reload",value:function(){var i=this,r=this.services,o=r.backendConnector,l=r.languageUtils,u=r.logger,d=o.language;if(!(d&&d.toLowerCase()==="cimode")){var p=[],h=function(y){var v=l.toResolveHierarchy(y);v.forEach(function(C){p.indexOf(C)<0&&p.push(C)})};h(d),this.allOptions.preload&&this.allOptions.preload.forEach(function(g){return h(g)}),p.forEach(function(g){i.allOptions.ns.forEach(function(y){o.read(g,y,"read",null,null,function(v,C){v&&u.warn("loading namespace ".concat(y," for language ").concat(g," failed"),v),!v&&C&&u.log("loaded namespace ".concat(y," for language ").concat(g),C),o.loaded("".concat(g,"|").concat(y),v,C)})})})}}}])}();d7.type="backend";const{slice:cN,forEach:uN}=[];function dN(e){return uN.call(cN.call(arguments,1),t=>{if(t)for(const i in t)e[i]===void 0&&(e[i]=t[i])}),e}function fN(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(i=>i.test(e))}const P6=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,pN=function(e,t){const r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(t);let l=`${e}=${o}`;if(r.maxAge>0){const u=r.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(u)}`}if(r.domain){if(!P6.test(r.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${r.domain}`}if(r.path){if(!P6.test(r.path))throw new TypeError("option path is invalid");l+=`; Path=${r.path}`}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${r.expires.toUTCString()}`}if(r.httpOnly&&(l+="; HttpOnly"),r.secure&&(l+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(l+="; Partitioned"),l},N6={create(e,t,i,r){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};i&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+i*60*1e3)),r&&(o.domain=r),document.cookie=pN(e,t,o)},read(e){const t=`${e}=`,i=document.cookie.split(";");for(let r=0;r<i.length;r++){let o=i[r];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var hN={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return N6.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:i,cookieMinutes:r,cookieDomain:o,cookieOptions:l}=t;i&&typeof document<"u"&&N6.create(i,e,r,o,l)}},mN={name:"querystring",lookup(e){var r;let{lookupQuerystring:t}=e,i;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((r=window.location.hash)==null?void 0:r.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let d=0;d<u.length;d++){const p=u[d].indexOf("=");p>0&&u[d].substring(0,p)===t&&(i=u[d].substring(p+1))}}return i}},gN={name:"hash",lookup(e){var o;let{lookupHash:t,lookupFromHashIndex:i}=e,r;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const u=l.substring(1);if(t){const d=u.split("&");for(let p=0;p<d.length;p++){const h=d[p].indexOf("=");h>0&&d[p].substring(0,h)===t&&(r=d[p].substring(h+1))}}if(r)return r;if(!r&&i>-1){const d=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(d)?(o=d[typeof i=="number"?i:0])==null?void 0:o.replace("/",""):void 0}}}return r}};let pr=null;const $6=()=>{if(pr!==null)return pr;try{if(pr=typeof window<"u"&&window.localStorage!==null,!pr)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{pr=!1}return pr};var xN={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&$6())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:i}=t;i&&$6()&&window.localStorage.setItem(i,e)}};let hr=null;const B6=()=>{if(hr!==null)return hr;try{if(hr=typeof window<"u"&&window.sessionStorage!==null,!hr)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{hr=!1}return hr};var yN={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&B6())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:i}=t;i&&B6()&&window.sessionStorage.setItem(i,e)}},vN={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:i,userLanguage:r,language:o}=navigator;if(i)for(let l=0;l<i.length;l++)t.push(i[l]);r&&t.push(r),o&&t.push(o)}return t.length>0?t:void 0}},wN={name:"htmlTag",lookup(e){let{htmlTag:t}=e,i;const r=t||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(i=r.getAttribute("lang")),i}},bN={name:"path",lookup(e){var o;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(i)?(o=i[typeof t=="number"?t:0])==null?void 0:o.replace("/",""):void 0}},SN={name:"subdomain",lookup(e){var o,l;let{lookupFromSubdomainIndex:t}=e;const i=typeof t=="number"?t+1:1,r=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(r)return r[i]}};let f7=!1;try{document.cookie,f7=!0}catch{}const p7=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];f7||p7.splice(1,1);const CN=()=>({order:p7,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class h7{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,i)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=dN(i,this.options||{},CN()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(hN),this.addDetector(mN),this.addDetector(xN),this.addDetector(yN),this.addDetector(vN),this.addDetector(wN),this.addDetector(bN),this.addDetector(SN),this.addDetector(gN)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,i=[];return t.forEach(r=>{if(this.detectors[r]){let o=this.detectors[r].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(i=i.concat(o))}}),i=i.filter(r=>r!=null&&!fN(r)).map(r=>this.options.convertDetectedLanguage(r)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}cacheUserLanguage(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;i&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||i.forEach(r=>{this.detectors[r]&&this.detectors[r].cacheUserLanguage(t,this.options)}))}}h7.type="languageDetector";At.use(d7).use(h7).use(FM).init({supportedLngs:["en","ru","es","uk"],fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const TN=R.createContext(void 0),EN=({children:e})=>{const{i18n:t}=O1(),i=r=>{t.changeLanguage(r).then(()=>{window.location.reload()})};return m.jsx(TN.Provider,{value:{language:t.language,setLanguage:i},children:e})};Z9.createRoot(document.getElementById("root")).render(m.jsxs(ke.StrictMode,{children:[m.jsx(pS,{styles:vS}),m.jsx(fb,{basename:"/",children:m.jsx(EN,{children:m.jsx(MP,{})})})]}));export{jN as c,Yc as g};
