function uw(t,e){for(var i=0;i<e.length;i++){const r=e[i];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();var Zz=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bf={exports:{}},Ns={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function dw(){if(Wg)return Ns;Wg=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var d in o)d!=="key"&&(l[d]=o[d])}else l=o;return o=l.ref,{$$typeof:t,type:r,key:u,ref:o!==void 0?o:null,props:l}}return Ns.Fragment=e,Ns.jsx=i,Ns.jsxs=i,Ns}var Qg;function fw(){return Qg||(Qg=1,bf.exports=dw()),bf.exports}var x=fw(),Sf={exports:{}},Bs={},Cf={exports:{}},Tf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function pw(){return Jg||(Jg=1,function(t){function e(B,K){var W=B.length;B.push(K);e:for(;0<W;){var ee=W-1>>>1,k=B[ee];if(0<o(k,K))B[ee]=K,B[W]=k,W=ee;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],W=B.pop();if(W!==K){B[0]=W;e:for(var ee=0,k=B.length,Z=k>>>1;ee<Z;){var ne=2*(ee+1)-1,ae=B[ne],ce=ne+1,we=B[ce];if(0>o(ae,W))ce<k&&0>o(we,ae)?(B[ee]=we,B[ce]=W,ee=ce):(B[ee]=ae,B[ne]=W,ee=ne);else if(ce<k&&0>o(we,W))B[ee]=we,B[ce]=W,ee=ce;else break e}}return K}function o(B,K){var W=B.sortIndex-K.sortIndex;return W!==0?W:B.id-K.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();t.unstable_now=function(){return u.now()-d}}var f=[],h=[],m=1,y=null,v=3,S=!1,b=!1,A=!1,O=!1,j=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var K=i(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=B)r(h),K.sortIndex=K.expirationTime,e(f,K);else break;K=i(h)}}function L(B){if(A=!1,D(B),!b)if(i(f)!==null)b=!0,P||(P=!0,te());else{var K=i(h);K!==null&&re(L,K.startTime-B)}}var P=!1,V=-1,U=5,$=-1;function Y(){return O?!0:!(t.unstable_now()-$<U)}function F(){if(O=!1,P){var B=t.unstable_now();$=B;var K=!0;try{e:{b=!1,A&&(A=!1,E(V),V=-1),S=!0;var W=v;try{t:{for(D(B),y=i(f);y!==null&&!(y.expirationTime>B&&Y());){var ee=y.callback;if(typeof ee=="function"){y.callback=null,v=y.priorityLevel;var k=ee(y.expirationTime<=B);if(B=t.unstable_now(),typeof k=="function"){y.callback=k,D(B),K=!0;break t}y===i(f)&&r(f),D(B)}else r(f);y=i(f)}if(y!==null)K=!0;else{var Z=i(h);Z!==null&&re(L,Z.startTime-B),K=!1}}break e}finally{y=null,v=W,S=!1}K=void 0}}finally{K?te():P=!1}}}var te;if(typeof T=="function")te=function(){T(F)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,oe=ie.port2;ie.port1.onmessage=F,te=function(){oe.postMessage(null)}}else te=function(){j(F,0)};function re(B,K){V=j(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_next=function(B){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var W=v;v=K;try{return B()}finally{v=W}},t.unstable_requestPaint=function(){O=!0},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=v;v=B;try{return K()}finally{v=W}},t.unstable_scheduleCallback=function(B,K,W){var ee=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ee+W:ee):W=ee,B){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=W+k,B={id:m++,callback:K,priorityLevel:B,startTime:W,expirationTime:k,sortIndex:-1},W>ee?(B.sortIndex=W,e(h,B),i(f)===null&&B===i(h)&&(A?(E(V),V=-1):A=!0,re(L,W-ee))):(B.sortIndex=k,e(f,B),b||S||(b=!0,P||(P=!0,te()))),B},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(B){var K=v;return function(){var W=v;v=K;try{return B.apply(this,arguments)}finally{v=W}}}}(Tf)),Tf}var e3;function hw(){return e3||(e3=1,Cf.exports=pw()),Cf.exports}var Ef={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t3;function mw(){if(t3)return ge;t3=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.iterator;function v(k){return k===null||typeof k!="object"?null:(k=y&&k[y]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,A={};function O(k,Z,ne){this.props=k,this.context=Z,this.refs=A,this.updater=ne||S}O.prototype.isReactComponent={},O.prototype.setState=function(k,Z){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Z,"setState")},O.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function j(){}j.prototype=O.prototype;function E(k,Z,ne){this.props=k,this.context=Z,this.refs=A,this.updater=ne||S}var T=E.prototype=new j;T.constructor=E,b(T,O.prototype),T.isPureReactComponent=!0;var D=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function V(k,Z,ne,ae,ce,we){return ne=we.ref,{$$typeof:t,type:k,key:Z,ref:ne!==void 0?ne:null,props:we}}function U(k,Z){return V(k.type,Z,void 0,void 0,void 0,k.props)}function $(k){return typeof k=="object"&&k!==null&&k.$$typeof===t}function Y(k){var Z={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ne){return Z[ne]})}var F=/\/+/g;function te(k,Z){return typeof k=="object"&&k!==null&&k.key!=null?Y(""+k.key):Z.toString(36)}function ie(){}function oe(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(ie,ie):(k.status="pending",k.then(function(Z){k.status==="pending"&&(k.status="fulfilled",k.value=Z)},function(Z){k.status==="pending"&&(k.status="rejected",k.reason=Z)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function re(k,Z,ne,ae,ce){var we=typeof k;(we==="undefined"||we==="boolean")&&(k=null);var de=!1;if(k===null)de=!0;else switch(we){case"bigint":case"string":case"number":de=!0;break;case"object":switch(k.$$typeof){case t:case e:de=!0;break;case m:return de=k._init,re(de(k._payload),Z,ne,ae,ce)}}if(de)return ce=ce(k),de=ae===""?"."+te(k,0):ae,D(ce)?(ne="",de!=null&&(ne=de.replace(F,"$&/")+"/"),re(ce,Z,ne,"",function(vt){return vt})):ce!=null&&($(ce)&&(ce=U(ce,ne+(ce.key==null||k&&k.key===ce.key?"":(""+ce.key).replace(F,"$&/")+"/")+de)),Z.push(ce)),1;de=0;var st=ae===""?".":ae+":";if(D(k))for(var Oe=0;Oe<k.length;Oe++)ae=k[Oe],we=st+te(ae,Oe),de+=re(ae,Z,ne,we,ce);else if(Oe=v(k),typeof Oe=="function")for(k=Oe.call(k),Oe=0;!(ae=k.next()).done;)ae=ae.value,we=st+te(ae,Oe++),de+=re(ae,Z,ne,we,ce);else if(we==="object"){if(typeof k.then=="function")return re(oe(k),Z,ne,ae,ce);throw Z=String(k),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return de}function B(k,Z,ne){if(k==null)return k;var ae=[],ce=0;return re(k,ae,"","",function(we){return Z.call(ne,we,ce++)}),ae}function K(k){if(k._status===-1){var Z=k._result;Z=Z(),Z.then(function(ne){(k._status===0||k._status===-1)&&(k._status=1,k._result=ne)},function(ne){(k._status===0||k._status===-1)&&(k._status=2,k._result=ne)}),k._status===-1&&(k._status=0,k._result=Z)}if(k._status===1)return k._result.default;throw k._result}var W=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function ee(){}return ge.Children={map:B,forEach:function(k,Z,ne){B(k,function(){Z.apply(this,arguments)},ne)},count:function(k){var Z=0;return B(k,function(){Z++}),Z},toArray:function(k){return B(k,function(Z){return Z})||[]},only:function(k){if(!$(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ge.Component=O,ge.Fragment=i,ge.Profiler=o,ge.PureComponent=E,ge.StrictMode=r,ge.Suspense=f,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ge.__COMPILER_RUNTIME={__proto__:null,c:function(k){return L.H.useMemoCache(k)}},ge.cache=function(k){return function(){return k.apply(null,arguments)}},ge.cloneElement=function(k,Z,ne){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var ae=b({},k.props),ce=k.key,we=void 0;if(Z!=null)for(de in Z.ref!==void 0&&(we=void 0),Z.key!==void 0&&(ce=""+Z.key),Z)!P.call(Z,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&Z.ref===void 0||(ae[de]=Z[de]);var de=arguments.length-2;if(de===1)ae.children=ne;else if(1<de){for(var st=Array(de),Oe=0;Oe<de;Oe++)st[Oe]=arguments[Oe+2];ae.children=st}return V(k.type,ce,void 0,void 0,we,ae)},ge.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},ge.createElement=function(k,Z,ne){var ae,ce={},we=null;if(Z!=null)for(ae in Z.key!==void 0&&(we=""+Z.key),Z)P.call(Z,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ce[ae]=Z[ae]);var de=arguments.length-2;if(de===1)ce.children=ne;else if(1<de){for(var st=Array(de),Oe=0;Oe<de;Oe++)st[Oe]=arguments[Oe+2];ce.children=st}if(k&&k.defaultProps)for(ae in de=k.defaultProps,de)ce[ae]===void 0&&(ce[ae]=de[ae]);return V(k,we,void 0,void 0,null,ce)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(k){return{$$typeof:d,render:k}},ge.isValidElement=$,ge.lazy=function(k){return{$$typeof:m,_payload:{_status:-1,_result:k},_init:K}},ge.memo=function(k,Z){return{$$typeof:h,type:k,compare:Z===void 0?null:Z}},ge.startTransition=function(k){var Z=L.T,ne={};L.T=ne;try{var ae=k(),ce=L.S;ce!==null&&ce(ne,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(ee,W)}catch(we){W(we)}finally{L.T=Z}},ge.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ge.use=function(k){return L.H.use(k)},ge.useActionState=function(k,Z,ne){return L.H.useActionState(k,Z,ne)},ge.useCallback=function(k,Z){return L.H.useCallback(k,Z)},ge.useContext=function(k){return L.H.useContext(k)},ge.useDebugValue=function(){},ge.useDeferredValue=function(k,Z){return L.H.useDeferredValue(k,Z)},ge.useEffect=function(k,Z,ne){var ae=L.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(k,Z)},ge.useId=function(){return L.H.useId()},ge.useImperativeHandle=function(k,Z,ne){return L.H.useImperativeHandle(k,Z,ne)},ge.useInsertionEffect=function(k,Z){return L.H.useInsertionEffect(k,Z)},ge.useLayoutEffect=function(k,Z){return L.H.useLayoutEffect(k,Z)},ge.useMemo=function(k,Z){return L.H.useMemo(k,Z)},ge.useOptimistic=function(k,Z){return L.H.useOptimistic(k,Z)},ge.useReducer=function(k,Z,ne){return L.H.useReducer(k,Z,ne)},ge.useRef=function(k){return L.H.useRef(k)},ge.useState=function(k){return L.H.useState(k)},ge.useSyncExternalStore=function(k,Z,ne){return L.H.useSyncExternalStore(k,Z,ne)},ge.useTransition=function(){return L.H.useTransition()},ge.version="19.1.1",ge}var n3;function wp(){return n3||(n3=1,Ef.exports=mw()),Ef.exports}var Af={exports:{}},St={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i3;function gw(){if(i3)return St;i3=1;var t=wp();function e(f){var h="https://react.dev/errors/"+f;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+f+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(f,h,m){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:f,containerInfo:h,implementation:m}}var u=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(f,h){if(f==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,St.createPortal=function(f,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(f,h,null,m)},St.flushSync=function(f){var h=u.T,m=r.p;try{if(u.T=null,r.p=2,f)return f()}finally{u.T=h,r.p=m,r.d.f()}},St.preconnect=function(f,h){typeof f=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(f,h))},St.prefetchDNS=function(f){typeof f=="string"&&r.d.D(f)},St.preinit=function(f,h){if(typeof f=="string"&&h&&typeof h.as=="string"){var m=h.as,y=d(m,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?r.d.S(f,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:S}):m==="script"&&r.d.X(f,{crossOrigin:y,integrity:v,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},St.preinitModule=function(f,h){if(typeof f=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=d(h.as,h.crossOrigin);r.d.M(f,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(f)},St.preload=function(f,h){if(typeof f=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,y=d(m,h.crossOrigin);r.d.L(f,m,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},St.preloadModule=function(f,h){if(typeof f=="string")if(h){var m=d(h.as,h.crossOrigin);r.d.m(f,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(f)},St.requestFormReset=function(f){r.d.r(f)},St.unstable_batchedUpdates=function(f,h){return f(h)},St.useFormState=function(f,h,m){return u.H.useFormState(f,h,m)},St.useFormStatus=function(){return u.H.useHostTransitionStatus()},St.version="19.1.1",St}var a3;function xw(){if(a3)return Af.exports;a3=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Af.exports=gw(),Af.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r3;function yw(){if(r3)return Bs;r3=1;var t=hw(),e=wp(),i=xw();function r(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,s=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(s=a.return),n=a.return;while(n)}return a.tag===3?s:null}function u(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(r(188))}function f(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(r(188));return a!==n?null:n}for(var s=n,c=a;;){var p=s.return;if(p===null)break;var g=p.alternate;if(g===null){if(c=p.return,c!==null){s=c;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===s)return d(p),n;if(g===c)return d(p),a;g=g.sibling}throw Error(r(188))}if(s.return!==c.return)s=p,c=g;else{for(var w=!1,M=p.child;M;){if(M===s){w=!0,s=p,c=g;break}if(M===c){w=!0,c=p,s=g;break}M=M.sibling}if(!w){for(M=g.child;M;){if(M===s){w=!0,s=g,c=p;break}if(M===c){w=!0,c=g,s=p;break}M=M.sibling}if(!w)throw Error(r(189))}}if(s.alternate!==c)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?n:a}function h(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=h(n),a!==null)return a;n=n.sibling}return null}var m=Object.assign,y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),E=Symbol.for("react.consumer"),T=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Symbol.for("react.client.reference");function oe(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ie?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case b:return"Fragment";case O:return"Profiler";case A:return"StrictMode";case L:return"Suspense";case P:return"SuspenseList";case $:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case T:return(n.displayName||"Context")+".Provider";case E:return(n._context.displayName||"Context")+".Consumer";case D:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return a=n.displayName||null,a!==null?a:oe(n.type)||"Memo";case U:a=n._payload,n=n._init;try{return oe(n(a))}catch{}}return null}var re=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ee=[],k=-1;function Z(n){return{current:n}}function ne(n){0>k||(n.current=ee[k],ee[k]=null,k--)}function ae(n,a){k++,ee[k]=n.current,n.current=a}var ce=Z(null),we=Z(null),de=Z(null),st=Z(null);function Oe(n,a){switch(ae(de,a),ae(we,n),ae(ce,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?Eg(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=Eg(a),n=Ag(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(ce),ae(ce,n)}function vt(){ne(ce),ne(we),ne(de)}function Yi(n){n.memoizedState!==null&&ae(st,n);var a=ce.current,s=Ag(a,n.type);a!==s&&(ae(we,n),ae(ce,s))}function _n(n){we.current===n&&(ne(ce),ne(we)),st.current===n&&(ne(st),ks._currentValue=W)}var Jt=Object.prototype.hasOwnProperty,ou=t.unstable_scheduleCallback,lu=t.unstable_cancelCallback,_v=t.unstable_shouldYield,Iv=t.unstable_requestPaint,An=t.unstable_now,Gv=t.unstable_getCurrentPriorityLevel,r1=t.unstable_ImmediatePriority,s1=t.unstable_UserBlockingPriority,Mo=t.unstable_NormalPriority,qv=t.unstable_LowPriority,o1=t.unstable_IdlePriority,Yv=t.log,Fv=t.unstable_setDisableYieldValue,Ur=null,Nt=null;function pi(n){if(typeof Yv=="function"&&Fv(n),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(Ur,n)}catch{}}var Bt=Math.clz32?Math.clz32:Kv,Zv=Math.log,Xv=Math.LN2;function Kv(n){return n>>>=0,n===0?32:31-(Zv(n)/Xv|0)|0}var jo=256,Lo=4194304;function Fi(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Oo(n,a,s){var c=n.pendingLanes;if(c===0)return 0;var p=0,g=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var M=c&134217727;return M!==0?(c=M&~g,c!==0?p=Fi(c):(w&=M,w!==0?p=Fi(w):s||(s=M&~n,s!==0&&(p=Fi(s))))):(M=c&~g,M!==0?p=Fi(M):w!==0?p=Fi(w):s||(s=c&~n,s!==0&&(p=Fi(s)))),p===0?0:a!==0&&a!==p&&(a&g)===0&&(g=p&-p,s=a&-a,g>=s||g===32&&(s&4194048)!==0)?a:p}function _r(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function Wv(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l1(){var n=jo;return jo<<=1,(jo&4194048)===0&&(jo=256),n}function c1(){var n=Lo;return Lo<<=1,(Lo&62914560)===0&&(Lo=4194304),n}function cu(n){for(var a=[],s=0;31>s;s++)a.push(n);return a}function Ir(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Qv(n,a,s,c,p,g){var w=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var M=n.entanglements,H=n.expirationTimes,I=n.hiddenUpdates;for(s=w&~s;0<s;){var X=31-Bt(s),J=1<<X;M[X]=0,H[X]=-1;var G=I[X];if(G!==null)for(I[X]=null,X=0;X<G.length;X++){var q=G[X];q!==null&&(q.lane&=-536870913)}s&=~J}c!==0&&u1(n,c,0),g!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=g&~(w&~a))}function u1(n,a,s){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-Bt(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194090}function d1(n,a){var s=n.entangledLanes|=a;for(n=n.entanglements;s;){var c=31-Bt(s),p=1<<c;p&a|n[c]&a&&(n[c]|=a),s&=~p}}function uu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function du(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function f1(){var n=K.p;return n!==0?n:(n=window.event,n===void 0?32:qg(n.type))}function Jv(n,a){var s=K.p;try{return K.p=n,a()}finally{K.p=s}}var hi=Math.random().toString(36).slice(2),wt="__reactFiber$"+hi,Ot="__reactProps$"+hi,Ca="__reactContainer$"+hi,fu="__reactEvents$"+hi,e8="__reactListeners$"+hi,t8="__reactHandles$"+hi,p1="__reactResources$"+hi,Gr="__reactMarker$"+hi;function pu(n){delete n[wt],delete n[Ot],delete n[fu],delete n[e8],delete n[t8]}function Ta(n){var a=n[wt];if(a)return a;for(var s=n.parentNode;s;){if(a=s[Ca]||s[wt]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(n=Og(n);n!==null;){if(s=n[wt])return s;n=Og(n)}return a}n=s,s=n.parentNode}return null}function Ea(n){if(n=n[wt]||n[Ca]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function qr(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(r(33))}function Aa(n){var a=n[p1];return a||(a=n[p1]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ot(n){n[Gr]=!0}var h1=new Set,m1={};function Zi(n,a){Ma(n,a),Ma(n+"Capture",a)}function Ma(n,a){for(m1[n]=a,n=0;n<a.length;n++)h1.add(a[n])}var n8=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),g1={},x1={};function i8(n){return Jt.call(x1,n)?!0:Jt.call(g1,n)?!1:n8.test(n)?x1[n]=!0:(g1[n]=!0,!1)}function Ro(n,a,s){if(i8(a))if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+s)}}function Do(n,a,s){if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+s)}}function In(n,a,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(a,s,""+c)}}var hu,y1;function ja(n){if(hu===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);hu=a&&a[1]||"",y1=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hu+n+y1}var mu=!1;function gu(n,a){if(!n||mu)return"";mu=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(q){var G=q}Reflect.construct(n,[],J)}else{try{J.call()}catch(q){G=q}n.call(J.prototype)}}else{try{throw Error()}catch(q){G=q}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(q){if(q&&G&&typeof q.stack=="string")return[q.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),w=g[0],M=g[1];if(w&&M){var H=w.split(`
`),I=M.split(`
`);for(p=c=0;c<H.length&&!H[c].includes("DetermineComponentFrameRoot");)c++;for(;p<I.length&&!I[p].includes("DetermineComponentFrameRoot");)p++;if(c===H.length||p===I.length)for(c=H.length-1,p=I.length-1;1<=c&&0<=p&&H[c]!==I[p];)p--;for(;1<=c&&0<=p;c--,p--)if(H[c]!==I[p]){if(c!==1||p!==1)do if(c--,p--,0>p||H[c]!==I[p]){var X=`
`+H[c].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=c&&0<=p);break}}}finally{mu=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?ja(s):""}function a8(n){switch(n.tag){case 26:case 27:case 5:return ja(n.type);case 16:return ja("Lazy");case 13:return ja("Suspense");case 19:return ja("SuspenseList");case 0:case 15:return gu(n.type,!1);case 11:return gu(n.type.render,!1);case 1:return gu(n.type,!0);case 31:return ja("Activity");default:return""}}function v1(n){try{var a="";do a+=a8(n),n=n.return;while(n);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function en(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function w1(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function r8(n){var a=w1(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var p=s.get,g=s.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return p.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,a,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function ko(n){n._valueTracker||(n._valueTracker=r8(n))}function b1(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var s=a.getValue(),c="";return n&&(c=w1(n)?n.checked?"true":"false":n.value),n=c,n!==s?(a.setValue(n),!0):!1}function Ho(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var s8=/[\n"\\]/g;function tn(n){return n.replace(s8,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function xu(n,a,s,c,p,g,w,M){n.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.type=w:n.removeAttribute("type"),a!=null?w==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+en(a)):n.value!==""+en(a)&&(n.value=""+en(a)):w!=="submit"&&w!=="reset"||n.removeAttribute("value"),a!=null?yu(n,w,en(a)):s!=null?yu(n,w,en(s)):c!=null&&n.removeAttribute("value"),p==null&&g!=null&&(n.defaultChecked=!!g),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?n.name=""+en(M):n.removeAttribute("name")}function S1(n,a,s,c,p,g,w,M){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),a!=null||s!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;s=s!=null?""+en(s):"",a=a!=null?""+en(a):s,M||a===n.value||(n.value=a),n.defaultValue=a}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=M?n.checked:!!c,n.defaultChecked=!!c,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(n.name=w)}function yu(n,a,s){a==="number"&&Ho(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function La(n,a,s,c){if(n=n.options,a){a={};for(var p=0;p<s.length;p++)a["$"+s[p]]=!0;for(s=0;s<n.length;s++)p=a.hasOwnProperty("$"+n[s].value),n[s].selected!==p&&(n[s].selected=p),p&&c&&(n[s].defaultSelected=!0)}else{for(s=""+en(s),a=null,p=0;p<n.length;p++){if(n[p].value===s){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}a!==null||n[p].disabled||(a=n[p])}a!==null&&(a.selected=!0)}}function C1(n,a,s){if(a!=null&&(a=""+en(a),a!==n.value&&(n.value=a),s==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=s!=null?""+en(s):""}function T1(n,a,s,c){if(a==null){if(c!=null){if(s!=null)throw Error(r(92));if(re(c)){if(1<c.length)throw Error(r(93));c=c[0]}s=c}s==null&&(s=""),a=s}s=en(a),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function Oa(n,a){if(a){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=a;return}}n.textContent=a}var o8=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function E1(n,a,s){var c=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,s):typeof s!="number"||s===0||o8.has(a)?a==="float"?n.cssFloat=s:n[a]=(""+s).trim():n[a]=s+"px"}function A1(n,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var p in a)c=a[p],a.hasOwnProperty(p)&&s[p]!==c&&E1(n,p,c)}else for(var g in a)a.hasOwnProperty(g)&&E1(n,g,a[g])}function vu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var l8=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),c8=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(n){return c8.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var wu=null;function bu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ra=null,Da=null;function M1(n){var a=Ea(n);if(a&&(n=a.stateNode)){var s=n[Ot]||null;e:switch(n=a.stateNode,a.type){case"input":if(xu(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+tn(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var c=s[a];if(c!==n&&c.form===n.form){var p=c[Ot]||null;if(!p)throw Error(r(90));xu(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(a=0;a<s.length;a++)c=s[a],c.form===n.form&&b1(c)}break e;case"textarea":C1(n,s.value,s.defaultValue);break e;case"select":a=s.value,a!=null&&La(n,!!s.multiple,a,!1)}}}var Su=!1;function j1(n,a,s){if(Su)return n(a,s);Su=!0;try{var c=n(a);return c}finally{if(Su=!1,(Ra!==null||Da!==null)&&(wl(),Ra&&(a=Ra,n=Da,Da=Ra=null,M1(a),n)))for(a=0;a<n.length;a++)M1(n[a])}}function Yr(n,a){var s=n.stateNode;if(s===null)return null;var c=s[Ot]||null;if(c===null)return null;s=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if(Gn)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Cu=!1}var mi=null,Tu=null,zo=null;function L1(){if(zo)return zo;var n,a=Tu,s=a.length,c,p="value"in mi?mi.value:mi.textContent,g=p.length;for(n=0;n<s&&a[n]===p[n];n++);var w=s-n;for(c=1;c<=w&&a[s-c]===p[g-c];c++);return zo=p.slice(n,1<c?1-c:void 0)}function Po(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function No(){return!0}function O1(){return!1}function Rt(n){function a(s,c,p,g,w){this._reactName=s,this._targetInst=p,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var M in n)n.hasOwnProperty(M)&&(s=n[M],this[M]=s?s(g):g[M]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?No:O1,this.isPropagationStopped=O1,this}return m(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),a}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bo=Rt(Xi),Zr=m({},Xi,{view:0,detail:0}),u8=Rt(Zr),Eu,Au,Xr,$o=m({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xr&&(Xr&&n.type==="mousemove"?(Eu=n.screenX-Xr.screenX,Au=n.screenY-Xr.screenY):Au=Eu=0,Xr=n),Eu)},movementY:function(n){return"movementY"in n?n.movementY:Au}}),R1=Rt($o),d8=m({},$o,{dataTransfer:0}),f8=Rt(d8),p8=m({},Zr,{relatedTarget:0}),Mu=Rt(p8),h8=m({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),m8=Rt(h8),g8=m({},Xi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),x8=Rt(g8),y8=m({},Xi,{data:0}),D1=Rt(y8),v8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S8(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=b8[n])?!!a[n]:!1}function ju(){return S8}var C8=m({},Zr,{key:function(n){if(n.key){var a=v8[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?w8[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(n){return n.type==="keypress"?Po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),T8=Rt(C8),E8=m({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),k1=Rt(E8),A8=m({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),M8=Rt(A8),j8=m({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),L8=Rt(j8),O8=m({},$o,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),R8=Rt(O8),D8=m({},Xi,{newState:0,oldState:0}),k8=Rt(D8),H8=[9,13,27,32],Lu=Gn&&"CompositionEvent"in window,Kr=null;Gn&&"documentMode"in document&&(Kr=document.documentMode);var V8=Gn&&"TextEvent"in window&&!Kr,H1=Gn&&(!Lu||Kr&&8<Kr&&11>=Kr),V1=" ",z1=!1;function P1(n,a){switch(n){case"keyup":return H8.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N1(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ka=!1;function z8(n,a){switch(n){case"compositionend":return N1(a);case"keypress":return a.which!==32?null:(z1=!0,V1);case"textInput":return n=a.data,n===V1&&z1?null:n;default:return null}}function P8(n,a){if(ka)return n==="compositionend"||!Lu&&P1(n,a)?(n=L1(),zo=Tu=mi=null,ka=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return H1&&a.locale!=="ko"?null:a.data;default:return null}}var N8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function B1(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!N8[n.type]:a==="textarea"}function $1(n,a,s,c){Ra?Da?Da.push(c):Da=[c]:Ra=c,a=Al(a,"onChange"),0<a.length&&(s=new Bo("onChange","change",null,s,c),n.push({event:s,listeners:a}))}var Wr=null,Qr=null;function B8(n){wg(n,0)}function Uo(n){var a=qr(n);if(b1(a))return n}function U1(n,a){if(n==="change")return a}var _1=!1;if(Gn){var Ou;if(Gn){var Ru="oninput"in document;if(!Ru){var I1=document.createElement("div");I1.setAttribute("oninput","return;"),Ru=typeof I1.oninput=="function"}Ou=Ru}else Ou=!1;_1=Ou&&(!document.documentMode||9<document.documentMode)}function G1(){Wr&&(Wr.detachEvent("onpropertychange",q1),Qr=Wr=null)}function q1(n){if(n.propertyName==="value"&&Uo(Qr)){var a=[];$1(a,Qr,n,bu(n)),j1(B8,a)}}function $8(n,a,s){n==="focusin"?(G1(),Wr=a,Qr=s,Wr.attachEvent("onpropertychange",q1)):n==="focusout"&&G1()}function U8(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uo(Qr)}function _8(n,a){if(n==="click")return Uo(a)}function I8(n,a){if(n==="input"||n==="change")return Uo(a)}function G8(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var $t=typeof Object.is=="function"?Object.is:G8;function Jr(n,a){if($t(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var s=Object.keys(n),c=Object.keys(a);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var p=s[c];if(!Jt.call(a,p)||!$t(n[p],a[p]))return!1}return!0}function Y1(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function F1(n,a){var s=Y1(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=a&&c>=a)return{node:s,offset:a-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Y1(s)}}function Z1(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?Z1(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function X1(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Ho(n.document);a instanceof n.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)n=a.contentWindow;else break;a=Ho(n.document)}return a}function Du(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var q8=Gn&&"documentMode"in document&&11>=document.documentMode,Ha=null,ku=null,es=null,Hu=!1;function K1(n,a,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Hu||Ha==null||Ha!==Ho(c)||(c=Ha,"selectionStart"in c&&Du(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),es&&Jr(es,c)||(es=c,c=Al(ku,"onSelect"),0<c.length&&(a=new Bo("onSelect","select",null,a,s),n.push({event:a,listeners:c}),a.target=Ha)))}function Ki(n,a){var s={};return s[n.toLowerCase()]=a.toLowerCase(),s["Webkit"+n]="webkit"+a,s["Moz"+n]="moz"+a,s}var Va={animationend:Ki("Animation","AnimationEnd"),animationiteration:Ki("Animation","AnimationIteration"),animationstart:Ki("Animation","AnimationStart"),transitionrun:Ki("Transition","TransitionRun"),transitionstart:Ki("Transition","TransitionStart"),transitioncancel:Ki("Transition","TransitionCancel"),transitionend:Ki("Transition","TransitionEnd")},Vu={},W1={};Gn&&(W1=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function Wi(n){if(Vu[n])return Vu[n];if(!Va[n])return n;var a=Va[n],s;for(s in a)if(a.hasOwnProperty(s)&&s in W1)return Vu[n]=a[s];return n}var Q1=Wi("animationend"),J1=Wi("animationiteration"),e2=Wi("animationstart"),Y8=Wi("transitionrun"),F8=Wi("transitionstart"),Z8=Wi("transitioncancel"),t2=Wi("transitionend"),n2=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function xn(n,a){n2.set(n,a),Zi(a,[n])}var i2=new WeakMap;function nn(n,a){if(typeof n=="object"&&n!==null){var s=i2.get(n);return s!==void 0?s:(a={value:n,source:a,stack:v1(a)},i2.set(n,a),a)}return{value:n,source:a,stack:v1(a)}}var an=[],za=0,Pu=0;function _o(){for(var n=za,a=Pu=za=0;a<n;){var s=an[a];an[a++]=null;var c=an[a];an[a++]=null;var p=an[a];an[a++]=null;var g=an[a];if(an[a++]=null,c!==null&&p!==null){var w=c.pending;w===null?p.next=p:(p.next=w.next,w.next=p),c.pending=p}g!==0&&a2(s,p,g)}}function Io(n,a,s,c){an[za++]=n,an[za++]=a,an[za++]=s,an[za++]=c,Pu|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Nu(n,a,s,c){return Io(n,a,s,c),Go(n)}function Pa(n,a){return Io(n,null,null,a),Go(n)}function a2(n,a,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var p=!1,g=n.return;g!==null;)g.childLanes|=s,c=g.alternate,c!==null&&(c.childLanes|=s),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(p=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,p&&a!==null&&(p=31-Bt(s),n=g.hiddenUpdates,c=n[p],c===null?n[p]=[a]:c.push(a),a.lane=s|536870912),g):null}function Go(n){if(50<Es)throw Es=0,Gd=null,Error(r(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var Na={};function X8(n,a,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(n,a,s,c){return new X8(n,a,s,c)}function Bu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qn(n,a){var s=n.alternate;return s===null?(s=Ut(n.tag,a,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=a,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,a=n.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function r2(n,a){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,a=s.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function qo(n,a,s,c,p,g){var w=0;if(c=n,typeof n=="function")Bu(n)&&(w=1);else if(typeof n=="string")w=W7(n,s,ce.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case $:return n=Ut(31,s,a,p),n.elementType=$,n.lanes=g,n;case b:return Qi(s.children,p,g,a);case A:w=8,p|=24;break;case O:return n=Ut(12,s,a,p|2),n.elementType=O,n.lanes=g,n;case L:return n=Ut(13,s,a,p),n.elementType=L,n.lanes=g,n;case P:return n=Ut(19,s,a,p),n.elementType=P,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:case T:w=10;break e;case E:w=9;break e;case D:w=11;break e;case V:w=14;break e;case U:w=16,c=null;break e}w=29,s=Error(r(130,n===null?"null":typeof n,"")),c=null}return a=Ut(w,s,a,p),a.elementType=n,a.type=c,a.lanes=g,a}function Qi(n,a,s,c){return n=Ut(7,n,c,a),n.lanes=s,n}function $u(n,a,s){return n=Ut(6,n,null,a),n.lanes=s,n}function Uu(n,a,s){return a=Ut(4,n.children!==null?n.children:[],n.key,a),a.lanes=s,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Ba=[],$a=0,Yo=null,Fo=0,rn=[],sn=0,Ji=null,Yn=1,Fn="";function ea(n,a){Ba[$a++]=Fo,Ba[$a++]=Yo,Yo=n,Fo=a}function s2(n,a,s){rn[sn++]=Yn,rn[sn++]=Fn,rn[sn++]=Ji,Ji=n;var c=Yn;n=Fn;var p=32-Bt(c)-1;c&=~(1<<p),s+=1;var g=32-Bt(a)+p;if(30<g){var w=p-p%5;g=(c&(1<<w)-1).toString(32),c>>=w,p-=w,Yn=1<<32-Bt(a)+p|s<<p|c,Fn=g+n}else Yn=1<<g|s<<p|c,Fn=n}function _u(n){n.return!==null&&(ea(n,1),s2(n,1,0))}function Iu(n){for(;n===Yo;)Yo=Ba[--$a],Ba[$a]=null,Fo=Ba[--$a],Ba[$a]=null;for(;n===Ji;)Ji=rn[--sn],rn[sn]=null,Fn=rn[--sn],rn[sn]=null,Yn=rn[--sn],rn[sn]=null}var Mt=null,Fe=null,Ee=!1,ta=null,Mn=!1,Gu=Error(r(519));function na(n){var a=Error(r(418,""));throw is(nn(a,n)),Gu}function o2(n){var a=n.stateNode,s=n.type,c=n.memoizedProps;switch(a[wt]=n,a[Ot]=c,s){case"dialog":Se("cancel",a),Se("close",a);break;case"iframe":case"object":case"embed":Se("load",a);break;case"video":case"audio":for(s=0;s<Ms.length;s++)Se(Ms[s],a);break;case"source":Se("error",a);break;case"img":case"image":case"link":Se("error",a),Se("load",a);break;case"details":Se("toggle",a);break;case"input":Se("invalid",a),S1(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),ko(a);break;case"select":Se("invalid",a);break;case"textarea":Se("invalid",a),T1(a,c.value,c.defaultValue,c.children),ko(a)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||c.suppressHydrationWarning===!0||Tg(a.textContent,s)?(c.popover!=null&&(Se("beforetoggle",a),Se("toggle",a)),c.onScroll!=null&&Se("scroll",a),c.onScrollEnd!=null&&Se("scrollend",a),c.onClick!=null&&(a.onclick=Ml),a=!0):a=!1,a||na(n)}function l2(n){for(Mt=n.return;Mt;)switch(Mt.tag){case 5:case 13:Mn=!1;return;case 27:case 3:Mn=!0;return;default:Mt=Mt.return}}function ts(n){if(n!==Mt)return!1;if(!Ee)return l2(n),Ee=!0,!1;var a=n.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||of(n.type,n.memoizedProps)),s=!s),s&&Fe&&na(n),l2(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(a===0){Fe=vn(n.nextSibling);break e}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;n=n.nextSibling}Fe=null}}else a===27?(a=Fe,Ri(n.type)?(n=df,df=null,Fe=n):Fe=a):Fe=Mt?vn(n.stateNode.nextSibling):null;return!0}function ns(){Fe=Mt=null,Ee=!1}function c2(){var n=ta;return n!==null&&(Ht===null?Ht=n:Ht.push.apply(Ht,n),ta=null),n}function is(n){ta===null?ta=[n]:ta.push(n)}var qu=Z(null),ia=null,Zn=null;function gi(n,a,s){ae(qu,a._currentValue),a._currentValue=s}function Xn(n){n._currentValue=qu.current,ne(qu)}function Yu(n,a,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===s)break;n=n.return}}function Fu(n,a,s,c){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var g=p.dependencies;if(g!==null){var w=p.child;g=g.firstContext;e:for(;g!==null;){var M=g;g=p;for(var H=0;H<a.length;H++)if(M.context===a[H]){g.lanes|=s,M=g.alternate,M!==null&&(M.lanes|=s),Yu(g.return,s,n),c||(w=null);break e}g=M.next}}else if(p.tag===18){if(w=p.return,w===null)throw Error(r(341));w.lanes|=s,g=w.alternate,g!==null&&(g.lanes|=s),Yu(w,s,n),w=null}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===n){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}}function as(n,a,s,c){n=null;for(var p=a,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var w=p.alternate;if(w===null)throw Error(r(387));if(w=w.memoizedProps,w!==null){var M=p.type;$t(p.pendingProps.value,w.value)||(n!==null?n.push(M):n=[M])}}else if(p===st.current){if(w=p.alternate,w===null)throw Error(r(387));w.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(ks):n=[ks])}p=p.return}n!==null&&Fu(a,n,s,c),a.flags|=262144}function Zo(n){for(n=n.firstContext;n!==null;){if(!$t(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function aa(n){ia=n,Zn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function bt(n){return u2(ia,n)}function Xo(n,a){return ia===null&&aa(n),u2(n,a)}function u2(n,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},Zn===null){if(n===null)throw Error(r(308));Zn=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Zn=Zn.next=a;return s}var K8=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(s){return s()})}},W8=t.unstable_scheduleCallback,Q8=t.unstable_NormalPriority,at={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new K8,data:new Map,refCount:0}}function rs(n){n.refCount--,n.refCount===0&&W8(Q8,function(){n.controller.abort()})}var ss=null,Xu=0,Ua=0,_a=null;function J8(n,a){if(ss===null){var s=ss=[];Xu=0,Ua=Wd(),_a={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Xu++,a.then(d2,d2),a}function d2(){if(--Xu===0&&ss!==null){_a!==null&&(_a.status="fulfilled");var n=ss;ss=null,Ua=0,_a=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function e7(n,a){var s=[],c={status:"pending",value:null,reason:null,then:function(p){s.push(p)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var p=0;p<s.length;p++)(0,s[p])(a)},function(p){for(c.status="rejected",c.reason=p,p=0;p<s.length;p++)(0,s[p])(void 0)}),c}var f2=B.S;B.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&J8(n,a),f2!==null&&f2(n,a)};var ra=Z(null);function Ku(){var n=ra.current;return n!==null?n:Be.pooledCache}function Ko(n,a){a===null?ae(ra,ra.current):ae(ra,a.pool)}function p2(){var n=Ku();return n===null?null:{parent:at._currentValue,pool:n}}var os=Error(r(460)),h2=Error(r(474)),Wo=Error(r(542)),Wu={then:function(){}};function m2(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Qo(){}function g2(n,a,s){switch(s=n[s],s===void 0?n.push(a):s!==a&&(a.then(Qo,Qo),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,y2(n),n;default:if(typeof a.status=="string")a.then(Qo,Qo);else{if(n=Be,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var p=a;p.status="fulfilled",p.value=c}},function(c){if(a.status==="pending"){var p=a;p.status="rejected",p.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,y2(n),n}throw ls=a,os}}var ls=null;function x2(){if(ls===null)throw Error(r(459));var n=ls;return ls=null,n}function y2(n){if(n===os||n===Wo)throw Error(r(483))}var xi=!1;function Qu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function yi(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function vi(n,a,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(ke&2)!==0){var p=c.pending;return p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a,a=Go(n),a2(n,null,s),a}return Io(n,c,a,s),Go(n)}function cs(n,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,d1(n,s)}}function ed(n,a){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var p=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var w={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};g===null?p=g=w:g=g.next=w,s=s.next}while(s!==null);g===null?p=g=a:g=g.next=a}else p=g=a;s={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=a:n.next=a,s.lastBaseUpdate=a}var td=!1;function us(){if(td){var n=_a;if(n!==null)throw n}}function ds(n,a,s,c){td=!1;var p=n.updateQueue;xi=!1;var g=p.firstBaseUpdate,w=p.lastBaseUpdate,M=p.shared.pending;if(M!==null){p.shared.pending=null;var H=M,I=H.next;H.next=null,w===null?g=I:w.next=I,w=H;var X=n.alternate;X!==null&&(X=X.updateQueue,M=X.lastBaseUpdate,M!==w&&(M===null?X.firstBaseUpdate=I:M.next=I,X.lastBaseUpdate=H))}if(g!==null){var J=p.baseState;w=0,X=I=H=null,M=g;do{var G=M.lane&-536870913,q=G!==M.lane;if(q?(Ce&G)===G:(c&G)===G){G!==0&&G===Ua&&(td=!0),X!==null&&(X=X.next={lane:0,tag:M.tag,payload:M.payload,callback:null,next:null});e:{var pe=n,ue=M;G=a;var Pe=s;switch(ue.tag){case 1:if(pe=ue.payload,typeof pe=="function"){J=pe.call(Pe,J,G);break e}J=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=ue.payload,G=typeof pe=="function"?pe.call(Pe,J,G):pe,G==null)break e;J=m({},J,G);break e;case 2:xi=!0}}G=M.callback,G!==null&&(n.flags|=64,q&&(n.flags|=8192),q=p.callbacks,q===null?p.callbacks=[G]:q.push(G))}else q={lane:G,tag:M.tag,payload:M.payload,callback:M.callback,next:null},X===null?(I=X=q,H=J):X=X.next=q,w|=G;if(M=M.next,M===null){if(M=p.shared.pending,M===null)break;q=M,M=q.next,q.next=null,p.lastBaseUpdate=q,p.shared.pending=null}}while(!0);X===null&&(H=J),p.baseState=H,p.firstBaseUpdate=I,p.lastBaseUpdate=X,g===null&&(p.shared.lanes=0),Mi|=w,n.lanes=w,n.memoizedState=J}}function v2(n,a){if(typeof n!="function")throw Error(r(191,n));n.call(a)}function w2(n,a){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)v2(s[n],a)}var Ia=Z(null),Jo=Z(0);function b2(n,a){n=ni,ae(Jo,n),ae(Ia,a),ni=n|a.baseLanes}function nd(){ae(Jo,ni),ae(Ia,Ia.current)}function id(){ni=Jo.current,ne(Ia),ne(Jo)}var wi=0,ye=null,Ve=null,Je=null,el=!1,Ga=!1,sa=!1,tl=0,fs=0,qa=null,t7=0;function Ke(){throw Error(r(321))}function ad(n,a){if(a===null)return!1;for(var s=0;s<a.length&&s<n.length;s++)if(!$t(n[s],a[s]))return!1;return!0}function rd(n,a,s,c,p,g){return wi=g,ye=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,B.H=n===null||n.memoizedState===null?am:rm,sa=!1,g=s(c,p),sa=!1,Ga&&(g=C2(a,s,c,p)),S2(n),g}function S2(n){B.H=ol;var a=Ve!==null&&Ve.next!==null;if(wi=0,Je=Ve=ye=null,el=!1,fs=0,qa=null,a)throw Error(r(300));n===null||lt||(n=n.dependencies,n!==null&&Zo(n)&&(lt=!0))}function C2(n,a,s,c){ye=n;var p=0;do{if(Ga&&(qa=null),fs=0,Ga=!1,25<=p)throw Error(r(301));if(p+=1,Je=Ve=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}B.H=l7,g=a(s,c)}while(Ga);return g}function n7(){var n=B.H,a=n.useState()[0];return a=typeof a.then=="function"?ps(a):a,n=n.useState()[0],(Ve!==null?Ve.memoizedState:null)!==n&&(ye.flags|=1024),a}function sd(){var n=tl!==0;return tl=0,n}function od(n,a,s){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~s}function ld(n){if(el){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}el=!1}wi=0,Je=Ve=ye=null,Ga=!1,fs=tl=0,qa=null}function Dt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ye.memoizedState=Je=n:Je=Je.next=n,Je}function et(){if(Ve===null){var n=ye.alternate;n=n!==null?n.memoizedState:null}else n=Ve.next;var a=Je===null?ye.memoizedState:Je.next;if(a!==null)Je=a,Ve=n;else{if(n===null)throw ye.alternate===null?Error(r(467)):Error(r(310));Ve=n,n={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Je===null?ye.memoizedState=Je=n:Je=Je.next=n}return Je}function cd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ps(n){var a=fs;return fs+=1,qa===null&&(qa=[]),n=g2(qa,n,a),a=ye,(Je===null?a.memoizedState:Je.next)===null&&(a=a.alternate,B.H=a===null||a.memoizedState===null?am:rm),n}function nl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ps(n);if(n.$$typeof===T)return bt(n)}throw Error(r(438,String(n)))}function ud(n){var a=null,s=ye.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var c=ye.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(p){return p.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=cd(),ye.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(n),c=0;c<n;c++)s[c]=Y;return a.index++,s}function Kn(n,a){return typeof a=="function"?a(n):a}function il(n){var a=et();return dd(a,Ve,n)}function dd(n,a,s){var c=n.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=s;var p=n.baseQueue,g=c.pending;if(g!==null){if(p!==null){var w=p.next;p.next=g.next,g.next=w}a.baseQueue=p=g,c.pending=null}if(g=n.baseState,p===null)n.memoizedState=g;else{a=p.next;var M=w=null,H=null,I=a,X=!1;do{var J=I.lane&-536870913;if(J!==I.lane?(Ce&J)===J:(wi&J)===J){var G=I.revertLane;if(G===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),J===Ua&&(X=!0);else if((wi&G)===G){I=I.next,G===Ua&&(X=!0);continue}else J={lane:0,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},H===null?(M=H=J,w=g):H=H.next=J,ye.lanes|=G,Mi|=G;J=I.action,sa&&s(g,J),g=I.hasEagerState?I.eagerState:s(g,J)}else G={lane:J,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},H===null?(M=H=G,w=g):H=H.next=G,ye.lanes|=J,Mi|=J;I=I.next}while(I!==null&&I!==a);if(H===null?w=g:H.next=M,!$t(g,n.memoizedState)&&(lt=!0,X&&(s=_a,s!==null)))throw s;n.memoizedState=g,n.baseState=w,n.baseQueue=H,c.lastRenderedState=g}return p===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function fd(n){var a=et(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var c=s.dispatch,p=s.pending,g=a.memoizedState;if(p!==null){s.pending=null;var w=p=p.next;do g=n(g,w.action),w=w.next;while(w!==p);$t(g,a.memoizedState)||(lt=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),s.lastRenderedState=g}return[g,c]}function T2(n,a,s){var c=ye,p=et(),g=Ee;if(g){if(s===void 0)throw Error(r(407));s=s()}else s=a();var w=!$t((Ve||p).memoizedState,s);w&&(p.memoizedState=s,lt=!0),p=p.queue;var M=M2.bind(null,c,p,n);if(hs(2048,8,M,[n]),p.getSnapshot!==a||w||Je!==null&&Je.memoizedState.tag&1){if(c.flags|=2048,Ya(9,al(),A2.bind(null,c,p,s,a),null),Be===null)throw Error(r(349));g||(wi&124)!==0||E2(c,a,s)}return s}function E2(n,a,s){n.flags|=16384,n={getSnapshot:a,value:s},a=ye.updateQueue,a===null?(a=cd(),ye.updateQueue=a,a.stores=[n]):(s=a.stores,s===null?a.stores=[n]:s.push(n))}function A2(n,a,s,c){a.value=s,a.getSnapshot=c,j2(a)&&L2(n)}function M2(n,a,s){return s(function(){j2(a)&&L2(n)})}function j2(n){var a=n.getSnapshot;n=n.value;try{var s=a();return!$t(n,s)}catch{return!0}}function L2(n){var a=Pa(n,2);a!==null&&Yt(a,n,2)}function pd(n){var a=Dt();if(typeof n=="function"){var s=n;if(n=s(),sa){pi(!0);try{s()}finally{pi(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:n},a}function O2(n,a,s,c){return n.baseState=s,dd(n,Ve,typeof c=="function"?c:Kn)}function i7(n,a,s,c,p){if(sl(n))throw Error(r(485));if(n=a.action,n!==null){var g={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){g.listeners.push(w)}};B.T!==null?s(!0):g.isTransition=!1,c(g),s=a.pending,s===null?(g.next=a.pending=g,R2(a,g)):(g.next=s.next,a.pending=s.next=g)}}function R2(n,a){var s=a.action,c=a.payload,p=n.state;if(a.isTransition){var g=B.T,w={};B.T=w;try{var M=s(p,c),H=B.S;H!==null&&H(w,M),D2(n,a,M)}catch(I){hd(n,a,I)}finally{B.T=g}}else try{g=s(p,c),D2(n,a,g)}catch(I){hd(n,a,I)}}function D2(n,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){k2(n,a,c)},function(c){return hd(n,a,c)}):k2(n,a,s)}function k2(n,a,s){a.status="fulfilled",a.value=s,H2(a),n.state=s,a=n.pending,a!==null&&(s=a.next,s===a?n.pending=null:(s=s.next,a.next=s,R2(n,s)))}function hd(n,a,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=s,H2(a),a=a.next;while(a!==c)}n.action=null}function H2(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function V2(n,a){return a}function z2(n,a){if(Ee){var s=Be.formState;if(s!==null){e:{var c=ye;if(Ee){if(Fe){t:{for(var p=Fe,g=Mn;p.nodeType!==8;){if(!g){p=null;break t}if(p=vn(p.nextSibling),p===null){p=null;break t}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){Fe=vn(p.nextSibling),c=p.data==="F!";break e}}na(c)}c=!1}c&&(a=s[0])}}return s=Dt(),s.memoizedState=s.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:V2,lastRenderedState:a},s.queue=c,s=tm.bind(null,ye,c),c.dispatch=s,c=pd(!1),g=vd.bind(null,ye,!1,c.queue),c=Dt(),p={state:a,dispatch:null,action:n,pending:null},c.queue=p,s=i7.bind(null,ye,p,g,s),p.dispatch=s,c.memoizedState=n,[a,s,!1]}function P2(n){var a=et();return N2(a,Ve,n)}function N2(n,a,s){if(a=dd(n,a,V2)[0],n=il(Kn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=ps(a)}catch(w){throw w===os?Wo:w}else c=a;a=et();var p=a.queue,g=p.dispatch;return s!==a.memoizedState&&(ye.flags|=2048,Ya(9,al(),a7.bind(null,p,s),null)),[c,g,n]}function a7(n,a){n.action=a}function B2(n){var a=et(),s=Ve;if(s!==null)return N2(a,s,n);et(),a=a.memoizedState,s=et();var c=s.queue.dispatch;return s.memoizedState=n,[a,c,!1]}function Ya(n,a,s,c){return n={tag:n,create:s,deps:c,inst:a,next:null},a=ye.updateQueue,a===null&&(a=cd(),ye.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,a.lastEffect=n),n}function al(){return{destroy:void 0,resource:void 0}}function $2(){return et().memoizedState}function rl(n,a,s,c){var p=Dt();c=c===void 0?null:c,ye.flags|=n,p.memoizedState=Ya(1|a,al(),s,c)}function hs(n,a,s,c){var p=et();c=c===void 0?null:c;var g=p.memoizedState.inst;Ve!==null&&c!==null&&ad(c,Ve.memoizedState.deps)?p.memoizedState=Ya(a,g,s,c):(ye.flags|=n,p.memoizedState=Ya(1|a,g,s,c))}function U2(n,a){rl(8390656,8,n,a)}function _2(n,a){hs(2048,8,n,a)}function I2(n,a){return hs(4,2,n,a)}function G2(n,a){return hs(4,4,n,a)}function q2(n,a){if(typeof a=="function"){n=n();var s=a(n);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function Y2(n,a,s){s=s!=null?s.concat([n]):null,hs(4,4,q2.bind(null,a,n),s)}function md(){}function F2(n,a){var s=et();a=a===void 0?null:a;var c=s.memoizedState;return a!==null&&ad(a,c[1])?c[0]:(s.memoizedState=[n,a],n)}function Z2(n,a){var s=et();a=a===void 0?null:a;var c=s.memoizedState;if(a!==null&&ad(a,c[1]))return c[0];if(c=n(),sa){pi(!0);try{n()}finally{pi(!1)}}return s.memoizedState=[c,a],c}function gd(n,a,s){return s===void 0||(wi&1073741824)!==0?n.memoizedState=a:(n.memoizedState=s,n=Wm(),ye.lanes|=n,Mi|=n,s)}function X2(n,a,s,c){return $t(s,a)?s:Ia.current!==null?(n=gd(n,s,c),$t(n,a)||(lt=!0),n):(wi&42)===0?(lt=!0,n.memoizedState=s):(n=Wm(),ye.lanes|=n,Mi|=n,a)}function K2(n,a,s,c,p){var g=K.p;K.p=g!==0&&8>g?g:8;var w=B.T,M={};B.T=M,vd(n,!1,a,s);try{var H=p(),I=B.S;if(I!==null&&I(M,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var X=e7(H,c);ms(n,a,X,qt(n))}else ms(n,a,c,qt(n))}catch(J){ms(n,a,{then:function(){},status:"rejected",reason:J},qt())}finally{K.p=g,B.T=w}}function r7(){}function xd(n,a,s,c){if(n.tag!==5)throw Error(r(476));var p=W2(n).queue;K2(n,p,a,W,s===null?r7:function(){return Q2(n),s(c)})}function W2(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:W},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:s},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function Q2(n){var a=W2(n).next.queue;ms(n,a,{},qt())}function yd(){return bt(ks)}function J2(){return et().memoizedState}function em(){return et().memoizedState}function s7(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var s=qt();n=yi(s);var c=vi(a,n,s);c!==null&&(Yt(c,a,s),cs(c,a,s)),a={cache:Zu()},n.payload=a;return}a=a.return}}function o7(n,a,s){var c=qt();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},sl(n)?nm(a,s):(s=Nu(n,a,s,c),s!==null&&(Yt(s,n,c),im(s,a,c)))}function tm(n,a,s){var c=qt();ms(n,a,s,c)}function ms(n,a,s,c){var p={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(sl(n))nm(a,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var w=a.lastRenderedState,M=g(w,s);if(p.hasEagerState=!0,p.eagerState=M,$t(M,w))return Io(n,a,p,0),Be===null&&_o(),!1}catch{}finally{}if(s=Nu(n,a,p,c),s!==null)return Yt(s,n,c),im(s,a,c),!0}return!1}function vd(n,a,s,c){if(c={lane:2,revertLane:Wd(),action:c,hasEagerState:!1,eagerState:null,next:null},sl(n)){if(a)throw Error(r(479))}else a=Nu(n,s,c,2),a!==null&&Yt(a,n,2)}function sl(n){var a=n.alternate;return n===ye||a!==null&&a===ye}function nm(n,a){Ga=el=!0;var s=n.pending;s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a}function im(n,a,s){if((s&4194048)!==0){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,d1(n,s)}}var ol={readContext:bt,use:nl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},am={readContext:bt,use:nl,useCallback:function(n,a){return Dt().memoizedState=[n,a===void 0?null:a],n},useContext:bt,useEffect:U2,useImperativeHandle:function(n,a,s){s=s!=null?s.concat([n]):null,rl(4194308,4,q2.bind(null,a,n),s)},useLayoutEffect:function(n,a){return rl(4194308,4,n,a)},useInsertionEffect:function(n,a){rl(4,2,n,a)},useMemo:function(n,a){var s=Dt();a=a===void 0?null:a;var c=n();if(sa){pi(!0);try{n()}finally{pi(!1)}}return s.memoizedState=[c,a],c},useReducer:function(n,a,s){var c=Dt();if(s!==void 0){var p=s(a);if(sa){pi(!0);try{s(a)}finally{pi(!1)}}}else p=a;return c.memoizedState=c.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},c.queue=n,n=n.dispatch=o7.bind(null,ye,n),[c.memoizedState,n]},useRef:function(n){var a=Dt();return n={current:n},a.memoizedState=n},useState:function(n){n=pd(n);var a=n.queue,s=tm.bind(null,ye,a);return a.dispatch=s,[n.memoizedState,s]},useDebugValue:md,useDeferredValue:function(n,a){var s=Dt();return gd(s,n,a)},useTransition:function(){var n=pd(!1);return n=K2.bind(null,ye,n.queue,!0,!1),Dt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,s){var c=ye,p=Dt();if(Ee){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),Be===null)throw Error(r(349));(Ce&124)!==0||E2(c,a,s)}p.memoizedState=s;var g={value:s,getSnapshot:a};return p.queue=g,U2(M2.bind(null,c,g,n),[n]),c.flags|=2048,Ya(9,al(),A2.bind(null,c,g,s,a),null),s},useId:function(){var n=Dt(),a=Be.identifierPrefix;if(Ee){var s=Fn,c=Yn;s=(c&~(1<<32-Bt(c)-1)).toString(32)+s,a="«"+a+"R"+s,s=tl++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=t7++,a="«"+a+"r"+s.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:yd,useFormState:z2,useActionState:z2,useOptimistic:function(n){var a=Dt();a.memoizedState=a.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=vd.bind(null,ye,!0,s),s.dispatch=a,[n,a]},useMemoCache:ud,useCacheRefresh:function(){return Dt().memoizedState=s7.bind(null,ye)}},rm={readContext:bt,use:nl,useCallback:F2,useContext:bt,useEffect:_2,useImperativeHandle:Y2,useInsertionEffect:I2,useLayoutEffect:G2,useMemo:Z2,useReducer:il,useRef:$2,useState:function(){return il(Kn)},useDebugValue:md,useDeferredValue:function(n,a){var s=et();return X2(s,Ve.memoizedState,n,a)},useTransition:function(){var n=il(Kn)[0],a=et().memoizedState;return[typeof n=="boolean"?n:ps(n),a]},useSyncExternalStore:T2,useId:J2,useHostTransitionStatus:yd,useFormState:P2,useActionState:P2,useOptimistic:function(n,a){var s=et();return O2(s,Ve,n,a)},useMemoCache:ud,useCacheRefresh:em},l7={readContext:bt,use:nl,useCallback:F2,useContext:bt,useEffect:_2,useImperativeHandle:Y2,useInsertionEffect:I2,useLayoutEffect:G2,useMemo:Z2,useReducer:fd,useRef:$2,useState:function(){return fd(Kn)},useDebugValue:md,useDeferredValue:function(n,a){var s=et();return Ve===null?gd(s,n,a):X2(s,Ve.memoizedState,n,a)},useTransition:function(){var n=fd(Kn)[0],a=et().memoizedState;return[typeof n=="boolean"?n:ps(n),a]},useSyncExternalStore:T2,useId:J2,useHostTransitionStatus:yd,useFormState:B2,useActionState:B2,useOptimistic:function(n,a){var s=et();return Ve!==null?O2(s,Ve,n,a):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:ud,useCacheRefresh:em},Fa=null,gs=0;function ll(n){var a=gs;return gs+=1,Fa===null&&(Fa=[]),g2(Fa,n,a)}function xs(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function cl(n,a){throw a.$$typeof===y?Error(r(525)):(n=Object.prototype.toString.call(a),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function sm(n){var a=n._init;return a(n._payload)}function om(n){function a(N,z){if(n){var _=N.deletions;_===null?(N.deletions=[z],N.flags|=16):_.push(z)}}function s(N,z){if(!n)return null;for(;z!==null;)a(N,z),z=z.sibling;return null}function c(N){for(var z=new Map;N!==null;)N.key!==null?z.set(N.key,N):z.set(N.index,N),N=N.sibling;return z}function p(N,z){return N=qn(N,z),N.index=0,N.sibling=null,N}function g(N,z,_){return N.index=_,n?(_=N.alternate,_!==null?(_=_.index,_<z?(N.flags|=67108866,z):_):(N.flags|=67108866,z)):(N.flags|=1048576,z)}function w(N){return n&&N.alternate===null&&(N.flags|=67108866),N}function M(N,z,_,Q){return z===null||z.tag!==6?(z=$u(_,N.mode,Q),z.return=N,z):(z=p(z,_),z.return=N,z)}function H(N,z,_,Q){var se=_.type;return se===b?X(N,z,_.props.children,Q,_.key):z!==null&&(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===U&&sm(se)===z.type)?(z=p(z,_.props),xs(z,_),z.return=N,z):(z=qo(_.type,_.key,_.props,null,N.mode,Q),xs(z,_),z.return=N,z)}function I(N,z,_,Q){return z===null||z.tag!==4||z.stateNode.containerInfo!==_.containerInfo||z.stateNode.implementation!==_.implementation?(z=Uu(_,N.mode,Q),z.return=N,z):(z=p(z,_.children||[]),z.return=N,z)}function X(N,z,_,Q,se){return z===null||z.tag!==7?(z=Qi(_,N.mode,Q,se),z.return=N,z):(z=p(z,_),z.return=N,z)}function J(N,z,_){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=$u(""+z,N.mode,_),z.return=N,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case v:return _=qo(z.type,z.key,z.props,null,N.mode,_),xs(_,z),_.return=N,_;case S:return z=Uu(z,N.mode,_),z.return=N,z;case U:var Q=z._init;return z=Q(z._payload),J(N,z,_)}if(re(z)||te(z))return z=Qi(z,N.mode,_,null),z.return=N,z;if(typeof z.then=="function")return J(N,ll(z),_);if(z.$$typeof===T)return J(N,Xo(N,z),_);cl(N,z)}return null}function G(N,z,_,Q){var se=z!==null?z.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return se!==null?null:M(N,z,""+_,Q);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case v:return _.key===se?H(N,z,_,Q):null;case S:return _.key===se?I(N,z,_,Q):null;case U:return se=_._init,_=se(_._payload),G(N,z,_,Q)}if(re(_)||te(_))return se!==null?null:X(N,z,_,Q,null);if(typeof _.then=="function")return G(N,z,ll(_),Q);if(_.$$typeof===T)return G(N,z,Xo(N,_),Q);cl(N,_)}return null}function q(N,z,_,Q,se){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return N=N.get(_)||null,M(z,N,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return N=N.get(Q.key===null?_:Q.key)||null,H(z,N,Q,se);case S:return N=N.get(Q.key===null?_:Q.key)||null,I(z,N,Q,se);case U:var ve=Q._init;return Q=ve(Q._payload),q(N,z,_,Q,se)}if(re(Q)||te(Q))return N=N.get(_)||null,X(z,N,Q,se,null);if(typeof Q.then=="function")return q(N,z,_,ll(Q),se);if(Q.$$typeof===T)return q(N,z,_,Xo(z,Q),se);cl(z,Q)}return null}function pe(N,z,_,Q){for(var se=null,ve=null,le=z,fe=z=0,ut=null;le!==null&&fe<_.length;fe++){le.index>fe?(ut=le,le=null):ut=le.sibling;var Te=G(N,le,_[fe],Q);if(Te===null){le===null&&(le=ut);break}n&&le&&Te.alternate===null&&a(N,le),z=g(Te,z,fe),ve===null?se=Te:ve.sibling=Te,ve=Te,le=ut}if(fe===_.length)return s(N,le),Ee&&ea(N,fe),se;if(le===null){for(;fe<_.length;fe++)le=J(N,_[fe],Q),le!==null&&(z=g(le,z,fe),ve===null?se=le:ve.sibling=le,ve=le);return Ee&&ea(N,fe),se}for(le=c(le);fe<_.length;fe++)ut=q(le,N,fe,_[fe],Q),ut!==null&&(n&&ut.alternate!==null&&le.delete(ut.key===null?fe:ut.key),z=g(ut,z,fe),ve===null?se=ut:ve.sibling=ut,ve=ut);return n&&le.forEach(function(zi){return a(N,zi)}),Ee&&ea(N,fe),se}function ue(N,z,_,Q){if(_==null)throw Error(r(151));for(var se=null,ve=null,le=z,fe=z=0,ut=null,Te=_.next();le!==null&&!Te.done;fe++,Te=_.next()){le.index>fe?(ut=le,le=null):ut=le.sibling;var zi=G(N,le,Te.value,Q);if(zi===null){le===null&&(le=ut);break}n&&le&&zi.alternate===null&&a(N,le),z=g(zi,z,fe),ve===null?se=zi:ve.sibling=zi,ve=zi,le=ut}if(Te.done)return s(N,le),Ee&&ea(N,fe),se;if(le===null){for(;!Te.done;fe++,Te=_.next())Te=J(N,Te.value,Q),Te!==null&&(z=g(Te,z,fe),ve===null?se=Te:ve.sibling=Te,ve=Te);return Ee&&ea(N,fe),se}for(le=c(le);!Te.done;fe++,Te=_.next())Te=q(le,N,fe,Te.value,Q),Te!==null&&(n&&Te.alternate!==null&&le.delete(Te.key===null?fe:Te.key),z=g(Te,z,fe),ve===null?se=Te:ve.sibling=Te,ve=Te);return n&&le.forEach(function(cw){return a(N,cw)}),Ee&&ea(N,fe),se}function Pe(N,z,_,Q){if(typeof _=="object"&&_!==null&&_.type===b&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case v:e:{for(var se=_.key;z!==null;){if(z.key===se){if(se=_.type,se===b){if(z.tag===7){s(N,z.sibling),Q=p(z,_.props.children),Q.return=N,N=Q;break e}}else if(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===U&&sm(se)===z.type){s(N,z.sibling),Q=p(z,_.props),xs(Q,_),Q.return=N,N=Q;break e}s(N,z);break}else a(N,z);z=z.sibling}_.type===b?(Q=Qi(_.props.children,N.mode,Q,_.key),Q.return=N,N=Q):(Q=qo(_.type,_.key,_.props,null,N.mode,Q),xs(Q,_),Q.return=N,N=Q)}return w(N);case S:e:{for(se=_.key;z!==null;){if(z.key===se)if(z.tag===4&&z.stateNode.containerInfo===_.containerInfo&&z.stateNode.implementation===_.implementation){s(N,z.sibling),Q=p(z,_.children||[]),Q.return=N,N=Q;break e}else{s(N,z);break}else a(N,z);z=z.sibling}Q=Uu(_,N.mode,Q),Q.return=N,N=Q}return w(N);case U:return se=_._init,_=se(_._payload),Pe(N,z,_,Q)}if(re(_))return pe(N,z,_,Q);if(te(_)){if(se=te(_),typeof se!="function")throw Error(r(150));return _=se.call(_),ue(N,z,_,Q)}if(typeof _.then=="function")return Pe(N,z,ll(_),Q);if(_.$$typeof===T)return Pe(N,z,Xo(N,_),Q);cl(N,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,z!==null&&z.tag===6?(s(N,z.sibling),Q=p(z,_),Q.return=N,N=Q):(s(N,z),Q=$u(_,N.mode,Q),Q.return=N,N=Q),w(N)):s(N,z)}return function(N,z,_,Q){try{gs=0;var se=Pe(N,z,_,Q);return Fa=null,se}catch(le){if(le===os||le===Wo)throw le;var ve=Ut(29,le,null,N.mode);return ve.lanes=Q,ve.return=N,ve}finally{}}}var Za=om(!0),lm=om(!1),on=Z(null),jn=null;function bi(n){var a=n.alternate;ae(rt,rt.current&1),ae(on,n),jn===null&&(a===null||Ia.current!==null||a.memoizedState!==null)&&(jn=n)}function cm(n){if(n.tag===22){if(ae(rt,rt.current),ae(on,n),jn===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(jn=n)}}else Si()}function Si(){ae(rt,rt.current),ae(on,on.current)}function Wn(n){ne(on),jn===n&&(jn=null),ne(rt)}var rt=Z(0);function ul(n){for(var a=n;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||uf(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function wd(n,a,s,c){a=n.memoizedState,s=s(c,a),s=s==null?a:m({},a,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var bd={enqueueSetState:function(n,a,s){n=n._reactInternals;var c=qt(),p=yi(c);p.payload=a,s!=null&&(p.callback=s),a=vi(n,p,c),a!==null&&(Yt(a,n,c),cs(a,n,c))},enqueueReplaceState:function(n,a,s){n=n._reactInternals;var c=qt(),p=yi(c);p.tag=1,p.payload=a,s!=null&&(p.callback=s),a=vi(n,p,c),a!==null&&(Yt(a,n,c),cs(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var s=qt(),c=yi(s);c.tag=2,a!=null&&(c.callback=a),a=vi(n,c,s),a!==null&&(Yt(a,n,s),cs(a,n,s))}};function um(n,a,s,c,p,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):a.prototype&&a.prototype.isPureReactComponent?!Jr(s,c)||!Jr(p,g):!0}function dm(n,a,s,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,c),a.state!==n&&bd.enqueueReplaceState(a,a.state,null)}function oa(n,a){var s=a;if("ref"in a){s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}if(n=n.defaultProps){s===a&&(s=m({},s));for(var p in n)s[p]===void 0&&(s[p]=n[p])}return s}var dl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function fm(n){dl(n)}function pm(n){console.error(n)}function hm(n){dl(n)}function fl(n,a){try{var s=n.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function mm(n,a,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function Sd(n,a,s){return s=yi(s),s.tag=3,s.payload={element:null},s.callback=function(){fl(n,a)},s}function gm(n){return n=yi(n),n.tag=3,n}function xm(n,a,s,c){var p=s.type.getDerivedStateFromError;if(typeof p=="function"){var g=c.value;n.payload=function(){return p(g)},n.callback=function(){mm(a,s,c)}}var w=s.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){mm(a,s,c),typeof p!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var M=c.stack;this.componentDidCatch(c.value,{componentStack:M!==null?M:""})})}function c7(n,a,s,c,p){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=s.alternate,a!==null&&as(a,s,p,!0),s=on.current,s!==null){switch(s.tag){case 13:return jn===null?Yd():s.alternate===null&&Ze===0&&(Ze=3),s.flags&=-257,s.flags|=65536,s.lanes=p,c===Wu?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([c]):a.add(c),Zd(n,c,p)),!1;case 22:return s.flags|=65536,c===Wu?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([c]):s.add(c)),Zd(n,c,p)),!1}throw Error(r(435,s.tag))}return Zd(n,c,p),Yd(),!1}if(Ee)return a=on.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=p,c!==Gu&&(n=Error(r(422),{cause:c}),is(nn(n,s)))):(c!==Gu&&(a=Error(r(423),{cause:c}),is(nn(a,s))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,c=nn(c,s),p=Sd(n.stateNode,c,p),ed(n,p),Ze!==4&&(Ze=2)),!1;var g=Error(r(520),{cause:c});if(g=nn(g,s),Ts===null?Ts=[g]:Ts.push(g),Ze!==4&&(Ze=2),a===null)return!0;c=nn(c,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,n=p&-p,s.lanes|=n,n=Sd(s.stateNode,c,n),ed(s,n),!1;case 1:if(a=s.type,g=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ji===null||!ji.has(g))))return s.flags|=65536,p&=-p,s.lanes|=p,p=gm(p),xm(p,n,s,c),ed(s,p),!1}s=s.return}while(s!==null);return!1}var ym=Error(r(461)),lt=!1;function pt(n,a,s,c){a.child=n===null?lm(a,null,s,c):Za(a,n.child,s,c)}function vm(n,a,s,c,p){s=s.render;var g=a.ref;if("ref"in c){var w={};for(var M in c)M!=="ref"&&(w[M]=c[M])}else w=c;return aa(a),c=rd(n,a,s,w,g,p),M=sd(),n!==null&&!lt?(od(n,a,p),Qn(n,a,p)):(Ee&&M&&_u(a),a.flags|=1,pt(n,a,c,p),a.child)}function wm(n,a,s,c,p){if(n===null){var g=s.type;return typeof g=="function"&&!Bu(g)&&g.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=g,bm(n,a,g,c,p)):(n=qo(s.type,null,c,a,a.mode,p),n.ref=a.ref,n.return=a,a.child=n)}if(g=n.child,!Od(n,p)){var w=g.memoizedProps;if(s=s.compare,s=s!==null?s:Jr,s(w,c)&&n.ref===a.ref)return Qn(n,a,p)}return a.flags|=1,n=qn(g,c),n.ref=a.ref,n.return=a,a.child=n}function bm(n,a,s,c,p){if(n!==null){var g=n.memoizedProps;if(Jr(g,c)&&n.ref===a.ref)if(lt=!1,a.pendingProps=c=g,Od(n,p))(n.flags&131072)!==0&&(lt=!0);else return a.lanes=n.lanes,Qn(n,a,p)}return Cd(n,a,s,c,p)}function Sm(n,a,s){var c=a.pendingProps,p=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((a.flags&128)!==0){if(c=g!==null?g.baseLanes|s:s,n!==null){for(p=a.child=n.child,g=0;p!==null;)g=g|p.lanes|p.childLanes,p=p.sibling;a.childLanes=g&~c}else a.childLanes=0,a.child=null;return Cm(n,a,c,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ko(a,g!==null?g.cachePool:null),g!==null?b2(a,g):nd(),cm(a);else return a.lanes=a.childLanes=536870912,Cm(n,a,g!==null?g.baseLanes|s:s,s)}else g!==null?(Ko(a,g.cachePool),b2(a,g),Si(),a.memoizedState=null):(n!==null&&Ko(a,null),nd(),Si());return pt(n,a,p,s),a.child}function Cm(n,a,s,c){var p=Ku();return p=p===null?null:{parent:at._currentValue,pool:p},a.memoizedState={baseLanes:s,cachePool:p},n!==null&&Ko(a,null),nd(),cm(a),n!==null&&as(n,a,c,!0),null}function pl(n,a){var s=a.ref;if(s===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(n===null||n.ref!==s)&&(a.flags|=4194816)}}function Cd(n,a,s,c,p){return aa(a),s=rd(n,a,s,c,void 0,p),c=sd(),n!==null&&!lt?(od(n,a,p),Qn(n,a,p)):(Ee&&c&&_u(a),a.flags|=1,pt(n,a,s,p),a.child)}function Tm(n,a,s,c,p,g){return aa(a),a.updateQueue=null,s=C2(a,c,s,p),S2(n),c=sd(),n!==null&&!lt?(od(n,a,g),Qn(n,a,g)):(Ee&&c&&_u(a),a.flags|=1,pt(n,a,s,g),a.child)}function Em(n,a,s,c,p){if(aa(a),a.stateNode===null){var g=Na,w=s.contextType;typeof w=="object"&&w!==null&&(g=bt(w)),g=new s(c,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=bd,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=c,g.state=a.memoizedState,g.refs={},Qu(a),w=s.contextType,g.context=typeof w=="object"&&w!==null?bt(w):Na,g.state=a.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(wd(a,s,w,c),g.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(w=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),w!==g.state&&bd.enqueueReplaceState(g,g.state,null),ds(a,c,g,p),us(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){g=a.stateNode;var M=a.memoizedProps,H=oa(s,M);g.props=H;var I=g.context,X=s.contextType;w=Na,typeof X=="object"&&X!==null&&(w=bt(X));var J=s.getDerivedStateFromProps;X=typeof J=="function"||typeof g.getSnapshotBeforeUpdate=="function",M=a.pendingProps!==M,X||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(M||I!==w)&&dm(a,g,c,w),xi=!1;var G=a.memoizedState;g.state=G,ds(a,c,g,p),us(),I=a.memoizedState,M||G!==I||xi?(typeof J=="function"&&(wd(a,s,J,c),I=a.memoizedState),(H=xi||um(a,s,H,c,G,I,w))?(X||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=I),g.props=c,g.state=I,g.context=w,c=H):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{g=a.stateNode,Ju(n,a),w=a.memoizedProps,X=oa(s,w),g.props=X,J=a.pendingProps,G=g.context,I=s.contextType,H=Na,typeof I=="object"&&I!==null&&(H=bt(I)),M=s.getDerivedStateFromProps,(I=typeof M=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==J||G!==H)&&dm(a,g,c,H),xi=!1,G=a.memoizedState,g.state=G,ds(a,c,g,p),us();var q=a.memoizedState;w!==J||G!==q||xi||n!==null&&n.dependencies!==null&&Zo(n.dependencies)?(typeof M=="function"&&(wd(a,s,M,c),q=a.memoizedState),(X=xi||um(a,s,X,c,G,q,H)||n!==null&&n.dependencies!==null&&Zo(n.dependencies))?(I||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,q,H),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,q,H)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===n.memoizedProps&&G===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&G===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=q),g.props=c,g.state=q,g.context=H,c=X):(typeof g.componentDidUpdate!="function"||w===n.memoizedProps&&G===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&G===n.memoizedState||(a.flags|=1024),c=!1)}return g=c,pl(n,a),c=(a.flags&128)!==0,g||c?(g=a.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,n!==null&&c?(a.child=Za(a,n.child,null,p),a.child=Za(a,null,s,p)):pt(n,a,s,p),a.memoizedState=g.state,n=a.child):n=Qn(n,a,p),n}function Am(n,a,s,c){return ns(),a.flags|=256,pt(n,a,s,c),a.child}var Td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ed(n){return{baseLanes:n,cachePool:p2()}}function Ad(n,a,s){return n=n!==null?n.childLanes&~s:0,a&&(n|=ln),n}function Mm(n,a,s){var c=a.pendingProps,p=!1,g=(a.flags&128)!==0,w;if((w=g)||(w=n!==null&&n.memoizedState===null?!1:(rt.current&2)!==0),w&&(p=!0,a.flags&=-129),w=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ee){if(p?bi(a):Si(),Ee){var M=Fe,H;if(H=M){e:{for(H=M,M=Mn;H.nodeType!==8;){if(!M){M=null;break e}if(H=vn(H.nextSibling),H===null){M=null;break e}}M=H}M!==null?(a.memoizedState={dehydrated:M,treeContext:Ji!==null?{id:Yn,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},H=Ut(18,null,null,0),H.stateNode=M,H.return=a,a.child=H,Mt=a,Fe=null,H=!0):H=!1}H||na(a)}if(M=a.memoizedState,M!==null&&(M=M.dehydrated,M!==null))return uf(M)?a.lanes=32:a.lanes=536870912,null;Wn(a)}return M=c.children,c=c.fallback,p?(Si(),p=a.mode,M=hl({mode:"hidden",children:M},p),c=Qi(c,p,s,null),M.return=a,c.return=a,M.sibling=c,a.child=M,p=a.child,p.memoizedState=Ed(s),p.childLanes=Ad(n,w,s),a.memoizedState=Td,c):(bi(a),Md(a,M))}if(H=n.memoizedState,H!==null&&(M=H.dehydrated,M!==null)){if(g)a.flags&256?(bi(a),a.flags&=-257,a=jd(n,a,s)):a.memoizedState!==null?(Si(),a.child=n.child,a.flags|=128,a=null):(Si(),p=c.fallback,M=a.mode,c=hl({mode:"visible",children:c.children},M),p=Qi(p,M,s,null),p.flags|=2,c.return=a,p.return=a,c.sibling=p,a.child=c,Za(a,n.child,null,s),c=a.child,c.memoizedState=Ed(s),c.childLanes=Ad(n,w,s),a.memoizedState=Td,a=p);else if(bi(a),uf(M)){if(w=M.nextSibling&&M.nextSibling.dataset,w)var I=w.dgst;w=I,c=Error(r(419)),c.stack="",c.digest=w,is({value:c,source:null,stack:null}),a=jd(n,a,s)}else if(lt||as(n,a,s,!1),w=(s&n.childLanes)!==0,lt||w){if(w=Be,w!==null&&(c=s&-s,c=(c&42)!==0?1:uu(c),c=(c&(w.suspendedLanes|s))!==0?0:c,c!==0&&c!==H.retryLane))throw H.retryLane=c,Pa(n,c),Yt(w,n,c),ym;M.data==="$?"||Yd(),a=jd(n,a,s)}else M.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=H.treeContext,Fe=vn(M.nextSibling),Mt=a,Ee=!0,ta=null,Mn=!1,n!==null&&(rn[sn++]=Yn,rn[sn++]=Fn,rn[sn++]=Ji,Yn=n.id,Fn=n.overflow,Ji=a),a=Md(a,c.children),a.flags|=4096);return a}return p?(Si(),p=c.fallback,M=a.mode,H=n.child,I=H.sibling,c=qn(H,{mode:"hidden",children:c.children}),c.subtreeFlags=H.subtreeFlags&65011712,I!==null?p=qn(I,p):(p=Qi(p,M,s,null),p.flags|=2),p.return=a,c.return=a,c.sibling=p,a.child=c,c=p,p=a.child,M=n.child.memoizedState,M===null?M=Ed(s):(H=M.cachePool,H!==null?(I=at._currentValue,H=H.parent!==I?{parent:I,pool:I}:H):H=p2(),M={baseLanes:M.baseLanes|s,cachePool:H}),p.memoizedState=M,p.childLanes=Ad(n,w,s),a.memoizedState=Td,c):(bi(a),s=n.child,n=s.sibling,s=qn(s,{mode:"visible",children:c.children}),s.return=a,s.sibling=null,n!==null&&(w=a.deletions,w===null?(a.deletions=[n],a.flags|=16):w.push(n)),a.child=s,a.memoizedState=null,s)}function Md(n,a){return a=hl({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function hl(n,a){return n=Ut(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function jd(n,a,s){return Za(a,n.child,null,s),n=Md(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function jm(n,a,s){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),Yu(n.return,a,s)}function Ld(n,a,s,c,p){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:p}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=s,g.tailMode=p)}function Lm(n,a,s){var c=a.pendingProps,p=c.revealOrder,g=c.tail;if(pt(n,a,c.children,s),c=rt.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jm(n,s,a);else if(n.tag===19)jm(n,s,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(ae(rt,c),p){case"forwards":for(s=a.child,p=null;s!==null;)n=s.alternate,n!==null&&ul(n)===null&&(p=s),s=s.sibling;s=p,s===null?(p=a.child,a.child=null):(p=s.sibling,s.sibling=null),Ld(a,!1,p,s,g);break;case"backwards":for(s=null,p=a.child,a.child=null;p!==null;){if(n=p.alternate,n!==null&&ul(n)===null){a.child=p;break}n=p.sibling,p.sibling=s,s=p,p=n}Ld(a,!0,s,null,g);break;case"together":Ld(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Qn(n,a,s){if(n!==null&&(a.dependencies=n.dependencies),Mi|=a.lanes,(s&a.childLanes)===0)if(n!==null){if(as(n,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(r(153));if(a.child!==null){for(n=a.child,s=qn(n,n.pendingProps),a.child=s,s.return=a;n.sibling!==null;)n=n.sibling,s=s.sibling=qn(n,n.pendingProps),s.return=a;s.sibling=null}return a.child}function Od(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Zo(n)))}function u7(n,a,s){switch(a.tag){case 3:Oe(a,a.stateNode.containerInfo),gi(a,at,n.memoizedState.cache),ns();break;case 27:case 5:Yi(a);break;case 4:Oe(a,a.stateNode.containerInfo);break;case 10:gi(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(bi(a),a.flags|=128,null):(s&a.child.childLanes)!==0?Mm(n,a,s):(bi(a),n=Qn(n,a,s),n!==null?n.sibling:null);bi(a);break;case 19:var p=(n.flags&128)!==0;if(c=(s&a.childLanes)!==0,c||(as(n,a,s,!1),c=(s&a.childLanes)!==0),p){if(c)return Lm(n,a,s);a.flags|=128}if(p=a.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ae(rt,rt.current),c)break;return null;case 22:case 23:return a.lanes=0,Sm(n,a,s);case 24:gi(a,at,n.memoizedState.cache)}return Qn(n,a,s)}function Om(n,a,s){if(n!==null)if(n.memoizedProps!==a.pendingProps)lt=!0;else{if(!Od(n,s)&&(a.flags&128)===0)return lt=!1,u7(n,a,s);lt=(n.flags&131072)!==0}else lt=!1,Ee&&(a.flags&1048576)!==0&&s2(a,Fo,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var c=a.elementType,p=c._init;if(c=p(c._payload),a.type=c,typeof c=="function")Bu(c)?(n=oa(c,n),a.tag=1,a=Em(null,a,c,n,s)):(a.tag=0,a=Cd(null,a,c,n,s));else{if(c!=null){if(p=c.$$typeof,p===D){a.tag=11,a=vm(null,a,c,n,s);break e}else if(p===V){a.tag=14,a=wm(null,a,c,n,s);break e}}throw a=oe(c)||c,Error(r(306,a,""))}}return a;case 0:return Cd(n,a,a.type,a.pendingProps,s);case 1:return c=a.type,p=oa(c,a.pendingProps),Em(n,a,c,p,s);case 3:e:{if(Oe(a,a.stateNode.containerInfo),n===null)throw Error(r(387));c=a.pendingProps;var g=a.memoizedState;p=g.element,Ju(n,a),ds(a,c,null,s);var w=a.memoizedState;if(c=w.cache,gi(a,at,c),c!==g.cache&&Fu(a,[at],s,!0),us(),c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=Am(n,a,c,s);break e}else if(c!==p){p=nn(Error(r(424)),a),is(p),a=Am(n,a,c,s);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Fe=vn(n.firstChild),Mt=a,Ee=!0,ta=null,Mn=!0,s=lm(a,null,c,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ns(),c===p){a=Qn(n,a,s);break e}pt(n,a,c,s)}a=a.child}return a;case 26:return pl(n,a),n===null?(s=Hg(a.type,null,a.pendingProps,null))?a.memoizedState=s:Ee||(s=a.type,n=a.pendingProps,c=jl(de.current).createElement(s),c[wt]=a,c[Ot]=n,mt(c,s,n),ot(c),a.stateNode=c):a.memoizedState=Hg(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Yi(a),n===null&&Ee&&(c=a.stateNode=Rg(a.type,a.pendingProps,de.current),Mt=a,Mn=!0,p=Fe,Ri(a.type)?(df=p,Fe=vn(c.firstChild)):Fe=p),pt(n,a,a.pendingProps.children,s),pl(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Ee&&((p=c=Fe)&&(c=N7(c,a.type,a.pendingProps,Mn),c!==null?(a.stateNode=c,Mt=a,Fe=vn(c.firstChild),Mn=!1,p=!0):p=!1),p||na(a)),Yi(a),p=a.type,g=a.pendingProps,w=n!==null?n.memoizedProps:null,c=g.children,of(p,g)?c=null:w!==null&&of(p,w)&&(a.flags|=32),a.memoizedState!==null&&(p=rd(n,a,n7,null,null,s),ks._currentValue=p),pl(n,a),pt(n,a,c,s),a.child;case 6:return n===null&&Ee&&((n=s=Fe)&&(s=B7(s,a.pendingProps,Mn),s!==null?(a.stateNode=s,Mt=a,Fe=null,n=!0):n=!1),n||na(a)),null;case 13:return Mm(n,a,s);case 4:return Oe(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=Za(a,null,c,s):pt(n,a,c,s),a.child;case 11:return vm(n,a,a.type,a.pendingProps,s);case 7:return pt(n,a,a.pendingProps,s),a.child;case 8:return pt(n,a,a.pendingProps.children,s),a.child;case 12:return pt(n,a,a.pendingProps.children,s),a.child;case 10:return c=a.pendingProps,gi(a,a.type,c.value),pt(n,a,c.children,s),a.child;case 9:return p=a.type._context,c=a.pendingProps.children,aa(a),p=bt(p),c=c(p),a.flags|=1,pt(n,a,c,s),a.child;case 14:return wm(n,a,a.type,a.pendingProps,s);case 15:return bm(n,a,a.type,a.pendingProps,s);case 19:return Lm(n,a,s);case 31:return c=a.pendingProps,s=a.mode,c={mode:c.mode,children:c.children},n===null?(s=hl(c,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=qn(n.child,c),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return Sm(n,a,s);case 24:return aa(a),c=bt(at),n===null?(p=Ku(),p===null&&(p=Be,g=Zu(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=s),p=g),a.memoizedState={parent:c,cache:p},Qu(a),gi(a,at,p)):((n.lanes&s)!==0&&(Ju(n,a),ds(a,null,null,s),us()),p=n.memoizedState,g=a.memoizedState,p.parent!==c?(p={parent:c,cache:c},a.memoizedState=p,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=p),gi(a,at,c)):(c=g.cache,gi(a,at,c),c!==p.cache&&Fu(a,[at],s,!0))),pt(n,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function Jn(n){n.flags|=4}function Rm(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Bg(a)){if(a=on.current,a!==null&&((Ce&4194048)===Ce?jn!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||a!==jn))throw ls=Wu,h2;n.flags|=8192}}function ml(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?c1():536870912,n.lanes|=a,Qa|=a)}function ys(n,a){if(!Ee)switch(n.tailMode){case"hidden":a=n.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function qe(n){var a=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(a)for(var p=n.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=s,a}function d7(n,a,s){var c=a.pendingProps;switch(Iu(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(a),null;case 1:return qe(a),null;case 3:return s=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Xn(at),vt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(ts(a)?Jn(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,c2())),qe(a),null;case 26:return s=a.memoizedState,n===null?(Jn(a),s!==null?(qe(a),Rm(a,s)):(qe(a),a.flags&=-16777217)):s?s!==n.memoizedState?(Jn(a),qe(a),Rm(a,s)):(qe(a),a.flags&=-16777217):(n.memoizedProps!==c&&Jn(a),qe(a),a.flags&=-16777217),null;case 27:_n(a),s=de.current;var p=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Jn(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return qe(a),null}n=ce.current,ts(a)?o2(a):(n=Rg(p,c,s),a.stateNode=n,Jn(a))}return qe(a),null;case 5:if(_n(a),s=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Jn(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return qe(a),null}if(n=ce.current,ts(a))o2(a);else{switch(p=jl(de.current),n){case 1:n=p.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=p.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=p.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=p.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=p.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?p.createElement("select",{is:c.is}):p.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?p.createElement(s,{is:c.is}):p.createElement(s)}}n[wt]=a,n[Ot]=c;e:for(p=a.child;p!==null;){if(p.tag===5||p.tag===6)n.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===a)break e;for(;p.sibling===null;){if(p.return===null||p.return===a)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}a.stateNode=n;e:switch(mt(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Jn(a)}}return qe(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&Jn(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(r(166));if(n=de.current,ts(a)){if(n=a.stateNode,s=a.memoizedProps,c=null,p=Mt,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}n[wt]=a,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||Tg(n.nodeValue,s)),n||na(a)}else n=jl(n).createTextNode(c),n[wt]=a,a.stateNode=n}return qe(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=ts(a),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(r(318));if(p=a.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(r(317));p[wt]=a}else ns(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;qe(a),p=!1}else p=c2(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return a.flags&256?(Wn(a),a):(Wn(a),null)}if(Wn(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=a.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==p&&(c.flags|=2048)}return s!==n&&s&&(a.child.flags|=8192),ml(a,a.updateQueue),qe(a),null;case 4:return vt(),n===null&&tf(a.stateNode.containerInfo),qe(a),null;case 10:return Xn(a.type),qe(a),null;case 19:if(ne(rt),p=a.memoizedState,p===null)return qe(a),null;if(c=(a.flags&128)!==0,g=p.rendering,g===null)if(c)ys(p,!1);else{if(Ze!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(g=ul(n),g!==null){for(a.flags|=128,ys(p,!1),n=g.updateQueue,a.updateQueue=n,ml(a,n),a.subtreeFlags=0,n=s,s=a.child;s!==null;)r2(s,n),s=s.sibling;return ae(rt,rt.current&1|2),a.child}n=n.sibling}p.tail!==null&&An()>yl&&(a.flags|=128,c=!0,ys(p,!1),a.lanes=4194304)}else{if(!c)if(n=ul(g),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,ml(a,n),ys(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!Ee)return qe(a),null}else 2*An()-p.renderingStartTime>yl&&s!==536870912&&(a.flags|=128,c=!0,ys(p,!1),a.lanes=4194304);p.isBackwards?(g.sibling=a.child,a.child=g):(n=p.last,n!==null?n.sibling=g:a.child=g,p.last=g)}return p.tail!==null?(a=p.tail,p.rendering=a,p.tail=a.sibling,p.renderingStartTime=An(),a.sibling=null,n=rt.current,ae(rt,c?n&1|2:n&1),a):(qe(a),null);case 22:case 23:return Wn(a),id(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(s&536870912)!==0&&(a.flags&128)===0&&(qe(a),a.subtreeFlags&6&&(a.flags|=8192)):qe(a),s=a.updateQueue,s!==null&&ml(a,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==s&&(a.flags|=2048),n!==null&&ne(ra),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Xn(at),qe(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function f7(n,a){switch(Iu(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Xn(at),vt(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return _n(a),null;case 13:if(Wn(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(r(340));ns()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return ne(rt),null;case 4:return vt(),null;case 10:return Xn(a.type),null;case 22:case 23:return Wn(a),id(),n!==null&&ne(ra),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Xn(at),null;case 25:return null;default:return null}}function Dm(n,a){switch(Iu(a),a.tag){case 3:Xn(at),vt();break;case 26:case 27:case 5:_n(a);break;case 4:vt();break;case 13:Wn(a);break;case 19:ne(rt);break;case 10:Xn(a.type);break;case 22:case 23:Wn(a),id(),n!==null&&ne(ra);break;case 24:Xn(at)}}function vs(n,a){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var p=c.next;s=p;do{if((s.tag&n)===n){c=void 0;var g=s.create,w=s.inst;c=g(),w.destroy=c}s=s.next}while(s!==p)}}catch(M){Ne(a,a.return,M)}}function Ci(n,a,s){try{var c=a.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var g=p.next;c=g;do{if((c.tag&n)===n){var w=c.inst,M=w.destroy;if(M!==void 0){w.destroy=void 0,p=a;var H=s,I=M;try{I()}catch(X){Ne(p,H,X)}}}c=c.next}while(c!==g)}}catch(X){Ne(a,a.return,X)}}function km(n){var a=n.updateQueue;if(a!==null){var s=n.stateNode;try{w2(a,s)}catch(c){Ne(n,n.return,c)}}}function Hm(n,a,s){s.props=oa(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){Ne(n,a,c)}}function ws(n,a){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(p){Ne(n,a,p)}}function Ln(n,a){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(p){Ne(n,a,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(p){Ne(n,a,p)}else s.current=null}function Vm(n){var a=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(p){Ne(n,n.return,p)}}function Rd(n,a,s){try{var c=n.stateNode;k7(c,n.type,s,a),c[Ot]=a}catch(p){Ne(n,n.return,p)}}function zm(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ri(n.type)||n.tag===4}function Dd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ri(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kd(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(n),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Ml));else if(c!==4&&(c===27&&Ri(n.type)&&(s=n.stateNode,a=null),n=n.child,n!==null))for(kd(n,a,s),n=n.sibling;n!==null;)kd(n,a,s),n=n.sibling}function gl(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?s.insertBefore(n,a):s.appendChild(n);else if(c!==4&&(c===27&&Ri(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(gl(n,a,s),n=n.sibling;n!==null;)gl(n,a,s),n=n.sibling}function Pm(n){var a=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,p=a.attributes;p.length;)a.removeAttributeNode(p[0]);mt(a,c,s),a[wt]=n,a[Ot]=s}catch(g){Ne(n,n.return,g)}}var ei=!1,We=!1,Hd=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,ct=null;function p7(n,a){if(n=n.containerInfo,rf=Hl,n=X1(n),Du(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var p=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break e}var w=0,M=-1,H=-1,I=0,X=0,J=n,G=null;t:for(;;){for(var q;J!==s||p!==0&&J.nodeType!==3||(M=w+p),J!==g||c!==0&&J.nodeType!==3||(H=w+c),J.nodeType===3&&(w+=J.nodeValue.length),(q=J.firstChild)!==null;)G=J,J=q;for(;;){if(J===n)break t;if(G===s&&++I===p&&(M=w),G===g&&++X===c&&(H=w),(q=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=q}s=M===-1||H===-1?null:{start:M,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(sf={focusedElem:n,selectionRange:s},Hl=!1,ct=a;ct!==null;)if(a=ct,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,ct=n;else for(;ct!==null;){switch(a=ct,g=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,s=a,p=g.memoizedProps,g=g.memoizedState,c=s.stateNode;try{var pe=oa(s.type,p,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(pe,g),c.__reactInternalSnapshotBeforeUpdate=n}catch(ue){Ne(s,s.return,ue)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,s=n.nodeType,s===9)cf(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":cf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=a.sibling,n!==null){n.return=a.return,ct=n;break}ct=a.return}}function Bm(n,a,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Ti(n,s),c&4&&vs(5,s);break;case 1:if(Ti(n,s),c&4)if(n=s.stateNode,a===null)try{n.componentDidMount()}catch(w){Ne(s,s.return,w)}else{var p=oa(s.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(p,a,n.__reactInternalSnapshotBeforeUpdate)}catch(w){Ne(s,s.return,w)}}c&64&&km(s),c&512&&ws(s,s.return);break;case 3:if(Ti(n,s),c&64&&(n=s.updateQueue,n!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{w2(n,a)}catch(w){Ne(s,s.return,w)}}break;case 27:a===null&&c&4&&Pm(s);case 26:case 5:Ti(n,s),a===null&&c&4&&Vm(s),c&512&&ws(s,s.return);break;case 12:Ti(n,s);break;case 13:Ti(n,s),c&4&&_m(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=S7.bind(null,s),$7(n,s))));break;case 22:if(c=s.memoizedState!==null||ei,!c){a=a!==null&&a.memoizedState!==null||We,p=ei;var g=We;ei=c,(We=a)&&!g?Ei(n,s,(s.subtreeFlags&8772)!==0):Ti(n,s),ei=p,We=g}break;case 30:break;default:Ti(n,s)}}function $m(n){var a=n.alternate;a!==null&&(n.alternate=null,$m(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&pu(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var _e=null,kt=!1;function ti(n,a,s){for(s=s.child;s!==null;)Um(n,a,s),s=s.sibling}function Um(n,a,s){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Ur,s)}catch{}switch(s.tag){case 26:We||Ln(s,a),ti(n,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:We||Ln(s,a);var c=_e,p=kt;Ri(s.type)&&(_e=s.stateNode,kt=!1),ti(n,a,s),Ls(s.stateNode),_e=c,kt=p;break;case 5:We||Ln(s,a);case 6:if(c=_e,p=kt,_e=null,ti(n,a,s),_e=c,kt=p,_e!==null)if(kt)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(s.stateNode)}catch(g){Ne(s,a,g)}else try{_e.removeChild(s.stateNode)}catch(g){Ne(s,a,g)}break;case 18:_e!==null&&(kt?(n=_e,Lg(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),Ps(n)):Lg(_e,s.stateNode));break;case 4:c=_e,p=kt,_e=s.stateNode.containerInfo,kt=!0,ti(n,a,s),_e=c,kt=p;break;case 0:case 11:case 14:case 15:We||Ci(2,s,a),We||Ci(4,s,a),ti(n,a,s);break;case 1:We||(Ln(s,a),c=s.stateNode,typeof c.componentWillUnmount=="function"&&Hm(s,a,c)),ti(n,a,s);break;case 21:ti(n,a,s);break;case 22:We=(c=We)||s.memoizedState!==null,ti(n,a,s),We=c;break;default:ti(n,a,s)}}function _m(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ps(n)}catch(s){Ne(a,a.return,s)}}function h7(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Nm),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Nm),a;default:throw Error(r(435,n.tag))}}function Vd(n,a){var s=h7(n);a.forEach(function(c){var p=C7.bind(null,n,c);s.has(c)||(s.add(c),c.then(p,p))})}function _t(n,a){var s=a.deletions;if(s!==null)for(var c=0;c<s.length;c++){var p=s[c],g=n,w=a,M=w;e:for(;M!==null;){switch(M.tag){case 27:if(Ri(M.type)){_e=M.stateNode,kt=!1;break e}break;case 5:_e=M.stateNode,kt=!1;break e;case 3:case 4:_e=M.stateNode.containerInfo,kt=!0;break e}M=M.return}if(_e===null)throw Error(r(160));Um(g,w,p),_e=null,kt=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Im(a,n),a=a.sibling}var yn=null;function Im(n,a){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:_t(a,n),It(n),c&4&&(Ci(3,n,n.return),vs(3,n),Ci(5,n,n.return));break;case 1:_t(a,n),It(n),c&512&&(We||s===null||Ln(s,s.return)),c&64&&ei&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var p=yn;if(_t(a,n),It(n),c&512&&(We||s===null||Ln(s,s.return)),c&4){var g=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":g=p.getElementsByTagName("title")[0],(!g||g[Gr]||g[wt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(c),p.head.insertBefore(g,p.querySelector("head > title"))),mt(g,c,s),g[wt]=n,ot(g),c=g;break e;case"link":var w=Pg("link","href",p).get(c+(s.href||""));if(w){for(var M=0;M<w.length;M++)if(g=w[M],g.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&g.getAttribute("rel")===(s.rel==null?null:s.rel)&&g.getAttribute("title")===(s.title==null?null:s.title)&&g.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){w.splice(M,1);break t}}g=p.createElement(c),mt(g,c,s),p.head.appendChild(g);break;case"meta":if(w=Pg("meta","content",p).get(c+(s.content||""))){for(M=0;M<w.length;M++)if(g=w[M],g.getAttribute("content")===(s.content==null?null:""+s.content)&&g.getAttribute("name")===(s.name==null?null:s.name)&&g.getAttribute("property")===(s.property==null?null:s.property)&&g.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&g.getAttribute("charset")===(s.charSet==null?null:s.charSet)){w.splice(M,1);break t}}g=p.createElement(c),mt(g,c,s),p.head.appendChild(g);break;default:throw Error(r(468,c))}g[wt]=n,ot(g),c=g}n.stateNode=c}else Ng(p,n.type,n.stateNode);else n.stateNode=zg(p,c,n.memoizedProps);else g!==c?(g===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):g.count--,c===null?Ng(p,n.type,n.stateNode):zg(p,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Rd(n,n.memoizedProps,s.memoizedProps)}break;case 27:_t(a,n),It(n),c&512&&(We||s===null||Ln(s,s.return)),s!==null&&c&4&&Rd(n,n.memoizedProps,s.memoizedProps);break;case 5:if(_t(a,n),It(n),c&512&&(We||s===null||Ln(s,s.return)),n.flags&32){p=n.stateNode;try{Oa(p,"")}catch(q){Ne(n,n.return,q)}}c&4&&n.stateNode!=null&&(p=n.memoizedProps,Rd(n,p,s!==null?s.memoizedProps:p)),c&1024&&(Hd=!0);break;case 6:if(_t(a,n),It(n),c&4){if(n.stateNode===null)throw Error(r(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(q){Ne(n,n.return,q)}}break;case 3:if(Rl=null,p=yn,yn=Ll(a.containerInfo),_t(a,n),yn=p,It(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Ps(a.containerInfo)}catch(q){Ne(n,n.return,q)}Hd&&(Hd=!1,Gm(n));break;case 4:c=yn,yn=Ll(n.stateNode.containerInfo),_t(a,n),It(n),yn=c;break;case 12:_t(a,n),It(n);break;case 13:_t(a,n),It(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ud=An()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Vd(n,c)));break;case 22:p=n.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,I=ei,X=We;if(ei=I||p,We=X||H,_t(a,n),We=X,ei=I,It(n),c&8192)e:for(a=n.stateNode,a._visibility=p?a._visibility&-2:a._visibility|1,p&&(s===null||H||ei||We||la(n)),s=null,a=n;;){if(a.tag===5||a.tag===26){if(s===null){H=s=a;try{if(g=H.stateNode,p)w=g.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{M=H.stateNode;var J=H.memoizedProps.style,G=J!=null&&J.hasOwnProperty("display")?J.display:null;M.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(q){Ne(H,H.return,q)}}}else if(a.tag===6){if(s===null){H=a;try{H.stateNode.nodeValue=p?"":H.memoizedProps}catch(q){Ne(H,H.return,q)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Vd(n,s))));break;case 19:_t(a,n),It(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Vd(n,c)));break;case 30:break;case 21:break;default:_t(a,n),It(n)}}function It(n){var a=n.flags;if(a&2){try{for(var s,c=n.return;c!==null;){if(zm(c)){s=c;break}c=c.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var p=s.stateNode,g=Dd(n);gl(n,g,p);break;case 5:var w=s.stateNode;s.flags&32&&(Oa(w,""),s.flags&=-33);var M=Dd(n);gl(n,M,w);break;case 3:case 4:var H=s.stateNode.containerInfo,I=Dd(n);kd(n,I,H);break;default:throw Error(r(161))}}catch(X){Ne(n,n.return,X)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function Gm(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;Gm(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Ti(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Bm(n,a.alternate,a),a=a.sibling}function la(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:Ci(4,a,a.return),la(a);break;case 1:Ln(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&Hm(a,a.return,s),la(a);break;case 27:Ls(a.stateNode);case 26:case 5:Ln(a,a.return),la(a);break;case 22:a.memoizedState===null&&la(a);break;case 30:la(a);break;default:la(a)}n=n.sibling}}function Ei(n,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,p=n,g=a,w=g.flags;switch(g.tag){case 0:case 11:case 15:Ei(p,g,s),vs(4,g);break;case 1:if(Ei(p,g,s),c=g,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(I){Ne(c,c.return,I)}if(c=g,p=c.updateQueue,p!==null){var M=c.stateNode;try{var H=p.shared.hiddenCallbacks;if(H!==null)for(p.shared.hiddenCallbacks=null,p=0;p<H.length;p++)v2(H[p],M)}catch(I){Ne(c,c.return,I)}}s&&w&64&&km(g),ws(g,g.return);break;case 27:Pm(g);case 26:case 5:Ei(p,g,s),s&&c===null&&w&4&&Vm(g),ws(g,g.return);break;case 12:Ei(p,g,s);break;case 13:Ei(p,g,s),s&&w&4&&_m(p,g);break;case 22:g.memoizedState===null&&Ei(p,g,s),ws(g,g.return);break;case 30:break;default:Ei(p,g,s)}a=a.sibling}}function zd(n,a){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&rs(s))}function Pd(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&rs(n))}function On(n,a,s,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)qm(n,a,s,c),a=a.sibling}function qm(n,a,s,c){var p=a.flags;switch(a.tag){case 0:case 11:case 15:On(n,a,s,c),p&2048&&vs(9,a);break;case 1:On(n,a,s,c);break;case 3:On(n,a,s,c),p&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&rs(n)));break;case 12:if(p&2048){On(n,a,s,c),n=a.stateNode;try{var g=a.memoizedProps,w=g.id,M=g.onPostCommit;typeof M=="function"&&M(w,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(H){Ne(a,a.return,H)}}else On(n,a,s,c);break;case 13:On(n,a,s,c);break;case 23:break;case 22:g=a.stateNode,w=a.alternate,a.memoizedState!==null?g._visibility&2?On(n,a,s,c):bs(n,a):g._visibility&2?On(n,a,s,c):(g._visibility|=2,Xa(n,a,s,c,(a.subtreeFlags&10256)!==0)),p&2048&&zd(w,a);break;case 24:On(n,a,s,c),p&2048&&Pd(a.alternate,a);break;default:On(n,a,s,c)}}function Xa(n,a,s,c,p){for(p=p&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=n,w=a,M=s,H=c,I=w.flags;switch(w.tag){case 0:case 11:case 15:Xa(g,w,M,H,p),vs(8,w);break;case 23:break;case 22:var X=w.stateNode;w.memoizedState!==null?X._visibility&2?Xa(g,w,M,H,p):bs(g,w):(X._visibility|=2,Xa(g,w,M,H,p)),p&&I&2048&&zd(w.alternate,w);break;case 24:Xa(g,w,M,H,p),p&&I&2048&&Pd(w.alternate,w);break;default:Xa(g,w,M,H,p)}a=a.sibling}}function bs(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=n,c=a,p=c.flags;switch(c.tag){case 22:bs(s,c),p&2048&&zd(c.alternate,c);break;case 24:bs(s,c),p&2048&&Pd(c.alternate,c);break;default:bs(s,c)}a=a.sibling}}var Ss=8192;function Ka(n){if(n.subtreeFlags&Ss)for(n=n.child;n!==null;)Ym(n),n=n.sibling}function Ym(n){switch(n.tag){case 26:Ka(n),n.flags&Ss&&n.memoizedState!==null&&J7(yn,n.memoizedState,n.memoizedProps);break;case 5:Ka(n);break;case 3:case 4:var a=yn;yn=Ll(n.stateNode.containerInfo),Ka(n),yn=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Ss,Ss=16777216,Ka(n),Ss=a):Ka(n));break;default:Ka(n)}}function Fm(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Cs(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];ct=c,Xm(c,n)}Fm(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zm(n),n=n.sibling}function Zm(n){switch(n.tag){case 0:case 11:case 15:Cs(n),n.flags&2048&&Ci(9,n,n.return);break;case 3:Cs(n);break;case 12:Cs(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,xl(n)):Cs(n);break;default:Cs(n)}}function xl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];ct=c,Xm(c,n)}Fm(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:Ci(8,a,a.return),xl(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,xl(a));break;default:xl(a)}n=n.sibling}}function Xm(n,a){for(;ct!==null;){var s=ct;switch(s.tag){case 0:case 11:case 15:Ci(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:rs(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,ct=c;else e:for(s=n;ct!==null;){c=ct;var p=c.sibling,g=c.return;if($m(c),c===s){ct=null;break e}if(p!==null){p.return=g,ct=p;break e}ct=g}}}var m7={getCacheForType:function(n){var a=bt(at),s=a.data.get(n);return s===void 0&&(s=n(),a.data.set(n,s)),s}},g7=typeof WeakMap=="function"?WeakMap:Map,ke=0,Be=null,be=null,Ce=0,He=0,Gt=null,Ai=!1,Wa=!1,Nd=!1,ni=0,Ze=0,Mi=0,ca=0,Bd=0,ln=0,Qa=0,Ts=null,Ht=null,$d=!1,Ud=0,yl=1/0,vl=null,ji=null,ht=0,Li=null,Ja=null,er=0,_d=0,Id=null,Km=null,Es=0,Gd=null;function qt(){if((ke&2)!==0&&Ce!==0)return Ce&-Ce;if(B.T!==null){var n=Ua;return n!==0?n:Wd()}return f1()}function Wm(){ln===0&&(ln=(Ce&536870912)===0||Ee?l1():536870912);var n=on.current;return n!==null&&(n.flags|=32),ln}function Yt(n,a,s){(n===Be&&(He===2||He===9)||n.cancelPendingCommit!==null)&&(tr(n,0),Oi(n,Ce,ln,!1)),Ir(n,s),((ke&2)===0||n!==Be)&&(n===Be&&((ke&2)===0&&(ca|=s),Ze===4&&Oi(n,Ce,ln,!1)),Rn(n))}function Qm(n,a,s){if((ke&6)!==0)throw Error(r(327));var c=!s&&(a&124)===0&&(a&n.expiredLanes)===0||_r(n,a),p=c?v7(n,a):Fd(n,a,!0),g=c;do{if(p===0){Wa&&!c&&Oi(n,a,0,!1);break}else{if(s=n.current.alternate,g&&!x7(s)){p=Fd(n,a,!1),g=!1;continue}if(p===2){if(g=a,n.errorRecoveryDisabledLanes&g)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){a=w;e:{var M=n;p=Ts;var H=M.current.memoizedState.isDehydrated;if(H&&(tr(M,w).flags|=256),w=Fd(M,w,!1),w!==2){if(Nd&&!H){M.errorRecoveryDisabledLanes|=g,ca|=g,p=4;break e}g=Ht,Ht=p,g!==null&&(Ht===null?Ht=g:Ht.push.apply(Ht,g))}p=w}if(g=!1,p!==2)continue}}if(p===1){tr(n,0),Oi(n,a,0,!0);break}e:{switch(c=n,g=p,g){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:Oi(c,a,ln,!Ai);break e;case 2:Ht=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(p=Ud+300-An(),10<p)){if(Oi(c,a,ln,!Ai),Oo(c,0,!0)!==0)break e;c.timeoutHandle=Mg(Jm.bind(null,c,s,Ht,vl,$d,a,ln,ca,Qa,Ai,g,2,-0,0),p);break e}Jm(c,s,Ht,vl,$d,a,ln,ca,Qa,Ai,g,0,-0,0)}}break}while(!0);Rn(n)}function Jm(n,a,s,c,p,g,w,M,H,I,X,J,G,q){if(n.timeoutHandle=-1,J=a.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Ds={stylesheets:null,count:0,unsuspend:Q7},Ym(a),J=ew(),J!==null)){n.cancelPendingCommit=J(sg.bind(null,n,a,g,s,c,p,w,M,H,X,1,G,q)),Oi(n,g,w,!I);return}sg(n,a,g,s,c,p,w,M,H)}function x7(n){for(var a=n;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var p=s[c],g=p.getSnapshot;p=p.value;try{if(!$t(g(),p))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Oi(n,a,s,c){a&=~Bd,a&=~ca,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var p=a;0<p;){var g=31-Bt(p),w=1<<g;c[g]=-1,p&=~w}s!==0&&u1(n,s,a)}function wl(){return(ke&6)===0?(As(0),!1):!0}function qd(){if(be!==null){if(He===0)var n=be.return;else n=be,Zn=ia=null,ld(n),Fa=null,gs=0,n=be;for(;n!==null;)Dm(n.alternate,n),n=n.return;be=null}}function tr(n,a){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,V7(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),qd(),Be=n,be=s=qn(n.current,null),Ce=a,He=0,Gt=null,Ai=!1,Wa=_r(n,a),Nd=!1,Qa=ln=Bd=ca=Mi=Ze=0,Ht=Ts=null,$d=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var p=31-Bt(c),g=1<<p;a|=n[p],c&=~g}return ni=a,_o(),s}function eg(n,a){ye=null,B.H=ol,a===os||a===Wo?(a=x2(),He=3):a===h2?(a=x2(),He=4):He=a===ym?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Gt=a,be===null&&(Ze=1,fl(n,nn(a,n.current)))}function tg(){var n=B.H;return B.H=ol,n===null?ol:n}function ng(){var n=B.A;return B.A=m7,n}function Yd(){Ze=4,Ai||(Ce&4194048)!==Ce&&on.current!==null||(Wa=!0),(Mi&134217727)===0&&(ca&134217727)===0||Be===null||Oi(Be,Ce,ln,!1)}function Fd(n,a,s){var c=ke;ke|=2;var p=tg(),g=ng();(Be!==n||Ce!==a)&&(vl=null,tr(n,a)),a=!1;var w=Ze;e:do try{if(He!==0&&be!==null){var M=be,H=Gt;switch(He){case 8:qd(),w=6;break e;case 3:case 2:case 9:case 6:on.current===null&&(a=!0);var I=He;if(He=0,Gt=null,nr(n,M,H,I),s&&Wa){w=0;break e}break;default:I=He,He=0,Gt=null,nr(n,M,H,I)}}y7(),w=Ze;break}catch(X){eg(n,X)}while(!0);return a&&n.shellSuspendCounter++,Zn=ia=null,ke=c,B.H=p,B.A=g,be===null&&(Be=null,Ce=0,_o()),w}function y7(){for(;be!==null;)ig(be)}function v7(n,a){var s=ke;ke|=2;var c=tg(),p=ng();Be!==n||Ce!==a?(vl=null,yl=An()+500,tr(n,a)):Wa=_r(n,a);e:do try{if(He!==0&&be!==null){a=be;var g=Gt;t:switch(He){case 1:He=0,Gt=null,nr(n,a,g,1);break;case 2:case 9:if(m2(g)){He=0,Gt=null,ag(a);break}a=function(){He!==2&&He!==9||Be!==n||(He=7),Rn(n)},g.then(a,a);break e;case 3:He=7;break e;case 4:He=5;break e;case 7:m2(g)?(He=0,Gt=null,ag(a)):(He=0,Gt=null,nr(n,a,g,7));break;case 5:var w=null;switch(be.tag){case 26:w=be.memoizedState;case 5:case 27:var M=be;if(!w||Bg(w)){He=0,Gt=null;var H=M.sibling;if(H!==null)be=H;else{var I=M.return;I!==null?(be=I,bl(I)):be=null}break t}}He=0,Gt=null,nr(n,a,g,5);break;case 6:He=0,Gt=null,nr(n,a,g,6);break;case 8:qd(),Ze=6;break e;default:throw Error(r(462))}}w7();break}catch(X){eg(n,X)}while(!0);return Zn=ia=null,B.H=c,B.A=p,ke=s,be!==null?0:(Be=null,Ce=0,_o(),Ze)}function w7(){for(;be!==null&&!_v();)ig(be)}function ig(n){var a=Om(n.alternate,n,ni);n.memoizedProps=n.pendingProps,a===null?bl(n):be=a}function ag(n){var a=n,s=a.alternate;switch(a.tag){case 15:case 0:a=Tm(s,a,a.pendingProps,a.type,void 0,Ce);break;case 11:a=Tm(s,a,a.pendingProps,a.type.render,a.ref,Ce);break;case 5:ld(a);default:Dm(s,a),a=be=r2(a,ni),a=Om(s,a,ni)}n.memoizedProps=n.pendingProps,a===null?bl(n):be=a}function nr(n,a,s,c){Zn=ia=null,ld(a),Fa=null,gs=0;var p=a.return;try{if(c7(n,p,a,s,Ce)){Ze=1,fl(n,nn(s,n.current)),be=null;return}}catch(g){if(p!==null)throw be=p,g;Ze=1,fl(n,nn(s,n.current)),be=null;return}a.flags&32768?(Ee||c===1?n=!0:Wa||(Ce&536870912)!==0?n=!1:(Ai=n=!0,(c===2||c===9||c===3||c===6)&&(c=on.current,c!==null&&c.tag===13&&(c.flags|=16384))),rg(a,n)):bl(a)}function bl(n){var a=n;do{if((a.flags&32768)!==0){rg(a,Ai);return}n=a.return;var s=d7(a.alternate,a,ni);if(s!==null){be=s;return}if(a=a.sibling,a!==null){be=a;return}be=a=n}while(a!==null);Ze===0&&(Ze=5)}function rg(n,a){do{var s=f7(n.alternate,n);if(s!==null){s.flags&=32767,be=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(n=n.sibling,n!==null)){be=n;return}be=n=s}while(n!==null);Ze=6,be=null}function sg(n,a,s,c,p,g,w,M,H){n.cancelPendingCommit=null;do Sl();while(ht!==0);if((ke&6)!==0)throw Error(r(327));if(a!==null){if(a===n.current)throw Error(r(177));if(g=a.lanes|a.childLanes,g|=Pu,Qv(n,s,g,w,M,H),n===Be&&(be=Be=null,Ce=0),Ja=a,Li=n,er=s,_d=g,Id=p,Km=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,T7(Mo,function(){return dg(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,p=K.p,K.p=2,w=ke,ke|=4;try{p7(n,a,s)}finally{ke=w,K.p=p,B.T=c}}ht=1,og(),lg(),cg()}}function og(){if(ht===1){ht=0;var n=Li,a=Ja,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var c=K.p;K.p=2;var p=ke;ke|=4;try{Im(a,n);var g=sf,w=X1(n.containerInfo),M=g.focusedElem,H=g.selectionRange;if(w!==M&&M&&M.ownerDocument&&Z1(M.ownerDocument.documentElement,M)){if(H!==null&&Du(M)){var I=H.start,X=H.end;if(X===void 0&&(X=I),"selectionStart"in M)M.selectionStart=I,M.selectionEnd=Math.min(X,M.value.length);else{var J=M.ownerDocument||document,G=J&&J.defaultView||window;if(G.getSelection){var q=G.getSelection(),pe=M.textContent.length,ue=Math.min(H.start,pe),Pe=H.end===void 0?ue:Math.min(H.end,pe);!q.extend&&ue>Pe&&(w=Pe,Pe=ue,ue=w);var N=F1(M,ue),z=F1(M,Pe);if(N&&z&&(q.rangeCount!==1||q.anchorNode!==N.node||q.anchorOffset!==N.offset||q.focusNode!==z.node||q.focusOffset!==z.offset)){var _=J.createRange();_.setStart(N.node,N.offset),q.removeAllRanges(),ue>Pe?(q.addRange(_),q.extend(z.node,z.offset)):(_.setEnd(z.node,z.offset),q.addRange(_))}}}}for(J=[],q=M;q=q.parentNode;)q.nodeType===1&&J.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof M.focus=="function"&&M.focus(),M=0;M<J.length;M++){var Q=J[M];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Hl=!!rf,sf=rf=null}finally{ke=p,K.p=c,B.T=s}}n.current=a,ht=2}}function lg(){if(ht===2){ht=0;var n=Li,a=Ja,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var c=K.p;K.p=2;var p=ke;ke|=4;try{Bm(n,a.alternate,a)}finally{ke=p,K.p=c,B.T=s}}ht=3}}function cg(){if(ht===4||ht===3){ht=0,Iv();var n=Li,a=Ja,s=er,c=Km;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ht=5:(ht=0,Ja=Li=null,ug(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(ji=null),du(s),a=a.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Ur,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=B.T,p=K.p,K.p=2,B.T=null;try{for(var g=n.onRecoverableError,w=0;w<c.length;w++){var M=c[w];g(M.value,{componentStack:M.stack})}}finally{B.T=a,K.p=p}}(er&3)!==0&&Sl(),Rn(n),p=n.pendingLanes,(s&4194090)!==0&&(p&42)!==0?n===Gd?Es++:(Es=0,Gd=n):Es=0,As(0)}}function ug(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,rs(a)))}function Sl(n){return og(),lg(),cg(),dg()}function dg(){if(ht!==5)return!1;var n=Li,a=_d;_d=0;var s=du(er),c=B.T,p=K.p;try{K.p=32>s?32:s,B.T=null,s=Id,Id=null;var g=Li,w=er;if(ht=0,Ja=Li=null,er=0,(ke&6)!==0)throw Error(r(331));var M=ke;if(ke|=4,Zm(g.current),qm(g,g.current,w,s),ke=M,As(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Ur,g)}catch{}return!0}finally{K.p=p,B.T=c,ug(n,a)}}function fg(n,a,s){a=nn(s,a),a=Sd(n.stateNode,a,2),n=vi(n,a,2),n!==null&&(Ir(n,2),Rn(n))}function Ne(n,a,s){if(n.tag===3)fg(n,n,s);else for(;a!==null;){if(a.tag===3){fg(a,n,s);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ji===null||!ji.has(c))){n=nn(s,n),s=gm(2),c=vi(a,s,2),c!==null&&(xm(s,c,a,n),Ir(c,2),Rn(c));break}}a=a.return}}function Zd(n,a,s){var c=n.pingCache;if(c===null){c=n.pingCache=new g7;var p=new Set;c.set(a,p)}else p=c.get(a),p===void 0&&(p=new Set,c.set(a,p));p.has(s)||(Nd=!0,p.add(s),n=b7.bind(null,n,a,s),a.then(n,n))}function b7(n,a,s){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Be===n&&(Ce&s)===s&&(Ze===4||Ze===3&&(Ce&62914560)===Ce&&300>An()-Ud?(ke&2)===0&&tr(n,0):Bd|=s,Qa===Ce&&(Qa=0)),Rn(n)}function pg(n,a){a===0&&(a=c1()),n=Pa(n,a),n!==null&&(Ir(n,a),Rn(n))}function S7(n){var a=n.memoizedState,s=0;a!==null&&(s=a.retryLane),pg(n,s)}function C7(n,a){var s=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(s=p.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(a),pg(n,s)}function T7(n,a){return ou(n,a)}var Cl=null,ir=null,Xd=!1,Tl=!1,Kd=!1,ua=0;function Rn(n){n!==ir&&n.next===null&&(ir===null?Cl=ir=n:ir=ir.next=n),Tl=!0,Xd||(Xd=!0,A7())}function As(n,a){if(!Kd&&Tl){Kd=!0;do for(var s=!1,c=Cl;c!==null;){if(n!==0){var p=c.pendingLanes;if(p===0)var g=0;else{var w=c.suspendedLanes,M=c.pingedLanes;g=(1<<31-Bt(42|n)+1)-1,g&=p&~(w&~M),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(s=!0,xg(c,g))}else g=Ce,g=Oo(c,c===Be?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||_r(c,g)||(s=!0,xg(c,g));c=c.next}while(s);Kd=!1}}function E7(){hg()}function hg(){Tl=Xd=!1;var n=0;ua!==0&&(H7()&&(n=ua),ua=0);for(var a=An(),s=null,c=Cl;c!==null;){var p=c.next,g=mg(c,a);g===0?(c.next=null,s===null?Cl=p:s.next=p,p===null&&(ir=s)):(s=c,(n!==0||(g&3)!==0)&&(Tl=!0)),c=p}As(n)}function mg(n,a){for(var s=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var w=31-Bt(g),M=1<<w,H=p[w];H===-1?((M&s)===0||(M&c)!==0)&&(p[w]=Wv(M,a)):H<=a&&(n.expiredLanes|=M),g&=~M}if(a=Be,s=Ce,s=Oo(n,n===a?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===a&&(He===2||He===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&lu(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||_r(n,s)){if(a=s&-s,a===n.callbackPriority)return a;switch(c!==null&&lu(c),du(s)){case 2:case 8:s=s1;break;case 32:s=Mo;break;case 268435456:s=o1;break;default:s=Mo}return c=gg.bind(null,n),s=ou(s,c),n.callbackPriority=a,n.callbackNode=s,a}return c!==null&&c!==null&&lu(c),n.callbackPriority=2,n.callbackNode=null,2}function gg(n,a){if(ht!==0&&ht!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(Sl()&&n.callbackNode!==s)return null;var c=Ce;return c=Oo(n,n===Be?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(Qm(n,c,a),mg(n,An()),n.callbackNode!=null&&n.callbackNode===s?gg.bind(null,n):null)}function xg(n,a){if(Sl())return null;Qm(n,a,!0)}function A7(){z7(function(){(ke&6)!==0?ou(r1,E7):hg()})}function Wd(){return ua===0&&(ua=l1()),ua}function yg(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Vo(""+n)}function vg(n,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,n.id&&s.setAttribute("form",n.id),a.parentNode.insertBefore(s,a),n=new FormData(n),s.parentNode.removeChild(s),n}function M7(n,a,s,c,p){if(a==="submit"&&s&&s.stateNode===p){var g=yg((p[Ot]||null).action),w=c.submitter;w&&(a=(a=w[Ot]||null)?yg(a.formAction):w.getAttribute("formAction"),a!==null&&(g=a,w=null));var M=new Bo("action","action",null,c,p);n.push({event:M,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ua!==0){var H=w?vg(p,w):new FormData(p);xd(s,{pending:!0,data:H,method:p.method,action:g},null,H)}}else typeof g=="function"&&(M.preventDefault(),H=w?vg(p,w):new FormData(p),xd(s,{pending:!0,data:H,method:p.method,action:g},g,H))},currentTarget:p}]})}}for(var Qd=0;Qd<zu.length;Qd++){var Jd=zu[Qd],j7=Jd.toLowerCase(),L7=Jd[0].toUpperCase()+Jd.slice(1);xn(j7,"on"+L7)}xn(Q1,"onAnimationEnd"),xn(J1,"onAnimationIteration"),xn(e2,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(Y8,"onTransitionRun"),xn(F8,"onTransitionStart"),xn(Z8,"onTransitionCancel"),xn(t2,"onTransitionEnd"),Ma("onMouseEnter",["mouseout","mouseover"]),Ma("onMouseLeave",["mouseout","mouseover"]),Ma("onPointerEnter",["pointerout","pointerover"]),Ma("onPointerLeave",["pointerout","pointerover"]),Zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O7=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ms));function wg(n,a){a=(a&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],p=c.event;c=c.listeners;e:{var g=void 0;if(a)for(var w=c.length-1;0<=w;w--){var M=c[w],H=M.instance,I=M.currentTarget;if(M=M.listener,H!==g&&p.isPropagationStopped())break e;g=M,p.currentTarget=I;try{g(p)}catch(X){dl(X)}p.currentTarget=null,g=H}else for(w=0;w<c.length;w++){if(M=c[w],H=M.instance,I=M.currentTarget,M=M.listener,H!==g&&p.isPropagationStopped())break e;g=M,p.currentTarget=I;try{g(p)}catch(X){dl(X)}p.currentTarget=null,g=H}}}}function Se(n,a){var s=a[fu];s===void 0&&(s=a[fu]=new Set);var c=n+"__bubble";s.has(c)||(bg(a,n,2,!1),s.add(c))}function ef(n,a,s){var c=0;a&&(c|=4),bg(s,n,c,a)}var El="_reactListening"+Math.random().toString(36).slice(2);function tf(n){if(!n[El]){n[El]=!0,h1.forEach(function(s){s!=="selectionchange"&&(O7.has(s)||ef(s,!1,n),ef(s,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[El]||(a[El]=!0,ef("selectionchange",!1,a))}}function bg(n,a,s,c){switch(qg(a)){case 2:var p=iw;break;case 8:p=aw;break;default:p=gf}s=p.bind(null,a,s,n),p=void 0,!Cu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(a,s,{capture:!0,passive:p}):n.addEventListener(a,s,!0):p!==void 0?n.addEventListener(a,s,{passive:p}):n.addEventListener(a,s,!1)}function nf(n,a,s,c,p){var g=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var M=c.stateNode.containerInfo;if(M===p)break;if(w===4)for(w=c.return;w!==null;){var H=w.tag;if((H===3||H===4)&&w.stateNode.containerInfo===p)return;w=w.return}for(;M!==null;){if(w=Ta(M),w===null)return;if(H=w.tag,H===5||H===6||H===26||H===27){c=g=w;continue e}M=M.parentNode}}c=c.return}j1(function(){var I=g,X=bu(s),J=[];e:{var G=n2.get(n);if(G!==void 0){var q=Bo,pe=n;switch(n){case"keypress":if(Po(s)===0)break e;case"keydown":case"keyup":q=T8;break;case"focusin":pe="focus",q=Mu;break;case"focusout":pe="blur",q=Mu;break;case"beforeblur":case"afterblur":q=Mu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=R1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=f8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=M8;break;case Q1:case J1:case e2:q=m8;break;case t2:q=L8;break;case"scroll":case"scrollend":q=u8;break;case"wheel":q=R8;break;case"copy":case"cut":case"paste":q=x8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=k1;break;case"toggle":case"beforetoggle":q=k8}var ue=(a&4)!==0,Pe=!ue&&(n==="scroll"||n==="scrollend"),N=ue?G!==null?G+"Capture":null:G;ue=[];for(var z=I,_;z!==null;){var Q=z;if(_=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||_===null||N===null||(Q=Yr(z,N),Q!=null&&ue.push(js(z,Q,_))),Pe)break;z=z.return}0<ue.length&&(G=new q(G,pe,null,s,X),J.push({event:G,listeners:ue}))}}if((a&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",q=n==="mouseout"||n==="pointerout",G&&s!==wu&&(pe=s.relatedTarget||s.fromElement)&&(Ta(pe)||pe[Ca]))break e;if((q||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,q?(pe=s.relatedTarget||s.toElement,q=I,pe=pe?Ta(pe):null,pe!==null&&(Pe=l(pe),ue=pe.tag,pe!==Pe||ue!==5&&ue!==27&&ue!==6)&&(pe=null)):(q=null,pe=I),q!==pe)){if(ue=R1,Q="onMouseLeave",N="onMouseEnter",z="mouse",(n==="pointerout"||n==="pointerover")&&(ue=k1,Q="onPointerLeave",N="onPointerEnter",z="pointer"),Pe=q==null?G:qr(q),_=pe==null?G:qr(pe),G=new ue(Q,z+"leave",q,s,X),G.target=Pe,G.relatedTarget=_,Q=null,Ta(X)===I&&(ue=new ue(N,z+"enter",pe,s,X),ue.target=_,ue.relatedTarget=Pe,Q=ue),Pe=Q,q&&pe)t:{for(ue=q,N=pe,z=0,_=ue;_;_=ar(_))z++;for(_=0,Q=N;Q;Q=ar(Q))_++;for(;0<z-_;)ue=ar(ue),z--;for(;0<_-z;)N=ar(N),_--;for(;z--;){if(ue===N||N!==null&&ue===N.alternate)break t;ue=ar(ue),N=ar(N)}ue=null}else ue=null;q!==null&&Sg(J,G,q,ue,!1),pe!==null&&Pe!==null&&Sg(J,Pe,pe,ue,!0)}}e:{if(G=I?qr(I):window,q=G.nodeName&&G.nodeName.toLowerCase(),q==="select"||q==="input"&&G.type==="file")var se=U1;else if(B1(G))if(_1)se=I8;else{se=U8;var ve=$8}else q=G.nodeName,!q||q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?I&&vu(I.elementType)&&(se=U1):se=_8;if(se&&(se=se(n,I))){$1(J,se,s,X);break e}ve&&ve(n,G,I),n==="focusout"&&I&&G.type==="number"&&I.memoizedProps.value!=null&&yu(G,"number",G.value)}switch(ve=I?qr(I):window,n){case"focusin":(B1(ve)||ve.contentEditable==="true")&&(Ha=ve,ku=I,es=null);break;case"focusout":es=ku=Ha=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,K1(J,s,X);break;case"selectionchange":if(q8)break;case"keydown":case"keyup":K1(J,s,X)}var le;if(Lu)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else ka?P1(n,s)&&(fe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(fe="onCompositionStart");fe&&(H1&&s.locale!=="ko"&&(ka||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&ka&&(le=L1()):(mi=X,Tu="value"in mi?mi.value:mi.textContent,ka=!0)),ve=Al(I,fe),0<ve.length&&(fe=new D1(fe,n,null,s,X),J.push({event:fe,listeners:ve}),le?fe.data=le:(le=N1(s),le!==null&&(fe.data=le)))),(le=V8?z8(n,s):P8(n,s))&&(fe=Al(I,"onBeforeInput"),0<fe.length&&(ve=new D1("onBeforeInput","beforeinput",null,s,X),J.push({event:ve,listeners:fe}),ve.data=le)),M7(J,n,I,s,X)}wg(J,a)})}function js(n,a,s){return{instance:n,listener:a,currentTarget:s}}function Al(n,a){for(var s=a+"Capture",c=[];n!==null;){var p=n,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=Yr(n,s),p!=null&&c.unshift(js(n,p,g)),p=Yr(n,a),p!=null&&c.push(js(n,p,g))),n.tag===3)return c;n=n.return}return[]}function ar(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Sg(n,a,s,c,p){for(var g=a._reactName,w=[];s!==null&&s!==c;){var M=s,H=M.alternate,I=M.stateNode;if(M=M.tag,H!==null&&H===c)break;M!==5&&M!==26&&M!==27||I===null||(H=I,p?(I=Yr(s,g),I!=null&&w.unshift(js(s,I,H))):p||(I=Yr(s,g),I!=null&&w.push(js(s,I,H)))),s=s.return}w.length!==0&&n.push({event:a,listeners:w})}var R7=/\r\n?/g,D7=/\u0000|\uFFFD/g;function Cg(n){return(typeof n=="string"?n:""+n).replace(R7,`
`).replace(D7,"")}function Tg(n,a){return a=Cg(a),Cg(n)===a}function Ml(){}function ze(n,a,s,c,p,g){switch(s){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||Oa(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&Oa(n,""+c);break;case"className":Do(n,"class",c);break;case"tabIndex":Do(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Do(n,s,c);break;case"style":A1(n,c,g);break;case"data":if(a!=="object"){Do(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Vo(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(s==="formAction"?(a!=="input"&&ze(n,a,"name",p.name,p,null),ze(n,a,"formEncType",p.formEncType,p,null),ze(n,a,"formMethod",p.formMethod,p,null),ze(n,a,"formTarget",p.formTarget,p,null)):(ze(n,a,"encType",p.encType,p,null),ze(n,a,"method",p.method,p,null),ze(n,a,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Vo(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=Ml);break;case"onScroll":c!=null&&Se("scroll",n);break;case"onScrollEnd":c!=null&&Se("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=Vo(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":Se("beforetoggle",n),Se("toggle",n),Ro(n,"popover",c);break;case"xlinkActuate":In(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":In(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":In(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":In(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":In(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":In(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":In(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":In(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":In(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Ro(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=l8.get(s)||s,Ro(n,s,c))}}function af(n,a,s,c,p,g){switch(s){case"style":A1(n,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"children":typeof c=="string"?Oa(n,c):(typeof c=="number"||typeof c=="bigint")&&Oa(n,""+c);break;case"onScroll":c!=null&&Se("scroll",n);break;case"onScrollEnd":c!=null&&Se("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Ml);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!m1.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(p=s.endsWith("Capture"),a=s.slice(2,p?s.length-7:void 0),g=n[Ot]||null,g=g!=null?g[s]:null,typeof g=="function"&&n.removeEventListener(a,g,p),typeof c=="function")){typeof g!="function"&&g!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(a,c,p);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):Ro(n,s,c)}}}function mt(n,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",n),Se("load",n);var c=!1,p=!1,g;for(g in s)if(s.hasOwnProperty(g)){var w=s[g];if(w!=null)switch(g){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ze(n,a,g,w,s,null)}}p&&ze(n,a,"srcSet",s.srcSet,s,null),c&&ze(n,a,"src",s.src,s,null);return;case"input":Se("invalid",n);var M=g=w=p=null,H=null,I=null;for(c in s)if(s.hasOwnProperty(c)){var X=s[c];if(X!=null)switch(c){case"name":p=X;break;case"type":w=X;break;case"checked":H=X;break;case"defaultChecked":I=X;break;case"value":g=X;break;case"defaultValue":M=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,a));break;default:ze(n,a,c,X,s,null)}}S1(n,g,M,H,I,w,p,!1),ko(n);return;case"select":Se("invalid",n),c=w=g=null;for(p in s)if(s.hasOwnProperty(p)&&(M=s[p],M!=null))switch(p){case"value":g=M;break;case"defaultValue":w=M;break;case"multiple":c=M;default:ze(n,a,p,M,s,null)}a=g,s=w,n.multiple=!!c,a!=null?La(n,!!c,a,!1):s!=null&&La(n,!!c,s,!0);return;case"textarea":Se("invalid",n),g=p=c=null;for(w in s)if(s.hasOwnProperty(w)&&(M=s[w],M!=null))switch(w){case"value":c=M;break;case"defaultValue":p=M;break;case"children":g=M;break;case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(91));break;default:ze(n,a,w,M,s,null)}T1(n,c,p,g),ko(n);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(c=s[H],c!=null))switch(H){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ze(n,a,H,c,s,null)}return;case"dialog":Se("beforetoggle",n),Se("toggle",n),Se("cancel",n),Se("close",n);break;case"iframe":case"object":Se("load",n);break;case"video":case"audio":for(c=0;c<Ms.length;c++)Se(Ms[c],n);break;case"image":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"embed":case"source":case"link":Se("error",n),Se("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(I in s)if(s.hasOwnProperty(I)&&(c=s[I],c!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:ze(n,a,I,c,s,null)}return;default:if(vu(a)){for(X in s)s.hasOwnProperty(X)&&(c=s[X],c!==void 0&&af(n,a,X,c,s,void 0));return}}for(M in s)s.hasOwnProperty(M)&&(c=s[M],c!=null&&ze(n,a,M,c,s,null))}function k7(n,a,s,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,w=null,M=null,H=null,I=null,X=null;for(q in s){var J=s[q];if(s.hasOwnProperty(q)&&J!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":H=J;default:c.hasOwnProperty(q)||ze(n,a,q,null,c,J)}}for(var G in c){var q=c[G];if(J=s[G],c.hasOwnProperty(G)&&(q!=null||J!=null))switch(G){case"type":g=q;break;case"name":p=q;break;case"checked":I=q;break;case"defaultChecked":X=q;break;case"value":w=q;break;case"defaultValue":M=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,a));break;default:q!==J&&ze(n,a,G,q,c,J)}}xu(n,w,M,H,I,X,g,p);return;case"select":q=w=M=G=null;for(g in s)if(H=s[g],s.hasOwnProperty(g)&&H!=null)switch(g){case"value":break;case"multiple":q=H;default:c.hasOwnProperty(g)||ze(n,a,g,null,c,H)}for(p in c)if(g=c[p],H=s[p],c.hasOwnProperty(p)&&(g!=null||H!=null))switch(p){case"value":G=g;break;case"defaultValue":M=g;break;case"multiple":w=g;default:g!==H&&ze(n,a,p,g,c,H)}a=M,s=w,c=q,G!=null?La(n,!!s,G,!1):!!c!=!!s&&(a!=null?La(n,!!s,a,!0):La(n,!!s,s?[]:"",!1));return;case"textarea":q=G=null;for(M in s)if(p=s[M],s.hasOwnProperty(M)&&p!=null&&!c.hasOwnProperty(M))switch(M){case"value":break;case"children":break;default:ze(n,a,M,null,c,p)}for(w in c)if(p=c[w],g=s[w],c.hasOwnProperty(w)&&(p!=null||g!=null))switch(w){case"value":G=p;break;case"defaultValue":q=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(r(91));break;default:p!==g&&ze(n,a,w,p,c,g)}C1(n,G,q);return;case"option":for(var pe in s)if(G=s[pe],s.hasOwnProperty(pe)&&G!=null&&!c.hasOwnProperty(pe))switch(pe){case"selected":n.selected=!1;break;default:ze(n,a,pe,null,c,G)}for(H in c)if(G=c[H],q=s[H],c.hasOwnProperty(H)&&G!==q&&(G!=null||q!=null))switch(H){case"selected":n.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:ze(n,a,H,G,c,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in s)G=s[ue],s.hasOwnProperty(ue)&&G!=null&&!c.hasOwnProperty(ue)&&ze(n,a,ue,null,c,G);for(I in c)if(G=c[I],q=s[I],c.hasOwnProperty(I)&&G!==q&&(G!=null||q!=null))switch(I){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,a));break;default:ze(n,a,I,G,c,q)}return;default:if(vu(a)){for(var Pe in s)G=s[Pe],s.hasOwnProperty(Pe)&&G!==void 0&&!c.hasOwnProperty(Pe)&&af(n,a,Pe,void 0,c,G);for(X in c)G=c[X],q=s[X],!c.hasOwnProperty(X)||G===q||G===void 0&&q===void 0||af(n,a,X,G,c,q);return}}for(var N in s)G=s[N],s.hasOwnProperty(N)&&G!=null&&!c.hasOwnProperty(N)&&ze(n,a,N,null,c,G);for(J in c)G=c[J],q=s[J],!c.hasOwnProperty(J)||G===q||G==null&&q==null||ze(n,a,J,G,c,q)}var rf=null,sf=null;function jl(n){return n.nodeType===9?n:n.ownerDocument}function Eg(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ag(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function of(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var lf=null;function H7(){var n=window.event;return n&&n.type==="popstate"?n===lf?!1:(lf=n,!0):(lf=null,!1)}var Mg=typeof setTimeout=="function"?setTimeout:void 0,V7=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,z7=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(n){return jg.resolve(null).then(n).catch(P7)}:Mg;function P7(n){setTimeout(function(){throw n})}function Ri(n){return n==="head"}function Lg(n,a){var s=a,c=0,p=0;do{var g=s.nextSibling;if(n.removeChild(s),g&&g.nodeType===8)if(s=g.data,s==="/$"){if(0<c&&8>c){s=c;var w=n.ownerDocument;if(s&1&&Ls(w.documentElement),s&2&&Ls(w.body),s&4)for(s=w.head,Ls(s),w=s.firstChild;w;){var M=w.nextSibling,H=w.nodeName;w[Gr]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&w.rel.toLowerCase()==="stylesheet"||s.removeChild(w),w=M}}if(p===0){n.removeChild(g),Ps(a);return}p--}else s==="$"||s==="$?"||s==="$!"?p++:c=s.charCodeAt(0)-48;else c=0;s=g}while(s);Ps(a)}function cf(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":cf(s),pu(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function N7(n,a,s,c){for(;n.nodeType===1;){var p=s;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Gr])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=vn(n.nextSibling),n===null)break}return null}function B7(n,a,s){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=vn(n.nextSibling),n===null))return null;return n}function uf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function $7(n,a){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")a();else{var c=function(){a(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function vn(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var df=null;function Og(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return n;a--}else s==="/$"&&a++}n=n.previousSibling}return null}function Rg(n,a,s){switch(a=jl(s),n){case"html":if(n=a.documentElement,!n)throw Error(r(452));return n;case"head":if(n=a.head,!n)throw Error(r(453));return n;case"body":if(n=a.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Ls(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);pu(n)}var cn=new Map,Dg=new Set;function Ll(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ii=K.d;K.d={f:U7,r:_7,D:I7,C:G7,L:q7,m:Y7,X:Z7,S:F7,M:X7};function U7(){var n=ii.f(),a=wl();return n||a}function _7(n){var a=Ea(n);a!==null&&a.tag===5&&a.type==="form"?Q2(a):ii.r(n)}var rr=typeof document>"u"?null:document;function kg(n,a,s){var c=rr;if(c&&typeof a=="string"&&a){var p=tn(a);p='link[rel="'+n+'"][href="'+p+'"]',typeof s=="string"&&(p+='[crossorigin="'+s+'"]'),Dg.has(p)||(Dg.add(p),n={rel:n,crossOrigin:s,href:a},c.querySelector(p)===null&&(a=c.createElement("link"),mt(a,"link",n),ot(a),c.head.appendChild(a)))}}function I7(n){ii.D(n),kg("dns-prefetch",n,null)}function G7(n,a){ii.C(n,a),kg("preconnect",n,a)}function q7(n,a,s){ii.L(n,a,s);var c=rr;if(c&&n&&a){var p='link[rel="preload"][as="'+tn(a)+'"]';a==="image"&&s&&s.imageSrcSet?(p+='[imagesrcset="'+tn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(p+='[imagesizes="'+tn(s.imageSizes)+'"]')):p+='[href="'+tn(n)+'"]';var g=p;switch(a){case"style":g=sr(n);break;case"script":g=or(n)}cn.has(g)||(n=m({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:n,as:a},s),cn.set(g,n),c.querySelector(p)!==null||a==="style"&&c.querySelector(Os(g))||a==="script"&&c.querySelector(Rs(g))||(a=c.createElement("link"),mt(a,"link",n),ot(a),c.head.appendChild(a)))}}function Y7(n,a){ii.m(n,a);var s=rr;if(s&&n){var c=a&&typeof a.as=="string"?a.as:"script",p='link[rel="modulepreload"][as="'+tn(c)+'"][href="'+tn(n)+'"]',g=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=or(n)}if(!cn.has(g)&&(n=m({rel:"modulepreload",href:n},a),cn.set(g,n),s.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Rs(g)))return}c=s.createElement("link"),mt(c,"link",n),ot(c),s.head.appendChild(c)}}}function F7(n,a,s){ii.S(n,a,s);var c=rr;if(c&&n){var p=Aa(c).hoistableStyles,g=sr(n);a=a||"default";var w=p.get(g);if(!w){var M={loading:0,preload:null};if(w=c.querySelector(Os(g)))M.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":a},s),(s=cn.get(g))&&ff(n,s);var H=w=c.createElement("link");ot(H),mt(H,"link",n),H._p=new Promise(function(I,X){H.onload=I,H.onerror=X}),H.addEventListener("load",function(){M.loading|=1}),H.addEventListener("error",function(){M.loading|=2}),M.loading|=4,Ol(w,a,c)}w={type:"stylesheet",instance:w,count:1,state:M},p.set(g,w)}}}function Z7(n,a){ii.X(n,a);var s=rr;if(s&&n){var c=Aa(s).hoistableScripts,p=or(n),g=c.get(p);g||(g=s.querySelector(Rs(p)),g||(n=m({src:n,async:!0},a),(a=cn.get(p))&&pf(n,a),g=s.createElement("script"),ot(g),mt(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function X7(n,a){ii.M(n,a);var s=rr;if(s&&n){var c=Aa(s).hoistableScripts,p=or(n),g=c.get(p);g||(g=s.querySelector(Rs(p)),g||(n=m({src:n,async:!0,type:"module"},a),(a=cn.get(p))&&pf(n,a),g=s.createElement("script"),ot(g),mt(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function Hg(n,a,s,c){var p=(p=de.current)?Ll(p):null;if(!p)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=sr(s.href),s=Aa(p).hoistableStyles,c=s.get(a),c||(c={type:"style",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=sr(s.href);var g=Aa(p).hoistableStyles,w=g.get(n);if(w||(p=p.ownerDocument||p,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,w),(g=p.querySelector(Os(n)))&&!g._p&&(w.instance=g,w.state.loading=5),cn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},cn.set(n,s),g||K7(p,n,s,w.state))),a&&c===null)throw Error(r(528,""));return w}if(a&&c!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=or(s),s=Aa(p).hoistableScripts,c=s.get(a),c||(c={type:"script",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function sr(n){return'href="'+tn(n)+'"'}function Os(n){return'link[rel="stylesheet"]['+n+"]"}function Vg(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function K7(n,a,s,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),mt(a,"link",s),ot(a),n.head.appendChild(a))}function or(n){return'[src="'+tn(n)+'"]'}function Rs(n){return"script[async]"+n}function zg(n,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+tn(s.href)+'"]');if(c)return a.instance=c,ot(c),c;var p=m({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),ot(c),mt(c,"style",p),Ol(c,s.precedence,n),a.instance=c;case"stylesheet":p=sr(s.href);var g=n.querySelector(Os(p));if(g)return a.state.loading|=4,a.instance=g,ot(g),g;c=Vg(s),(p=cn.get(p))&&ff(c,p),g=(n.ownerDocument||n).createElement("link"),ot(g);var w=g;return w._p=new Promise(function(M,H){w.onload=M,w.onerror=H}),mt(g,"link",c),a.state.loading|=4,Ol(g,s.precedence,n),a.instance=g;case"script":return g=or(s.src),(p=n.querySelector(Rs(g)))?(a.instance=p,ot(p),p):(c=s,(p=cn.get(g))&&(c=m({},s),pf(c,p)),n=n.ownerDocument||n,p=n.createElement("script"),ot(p),mt(p,"link",c),n.head.appendChild(p),a.instance=p);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Ol(c,s.precedence,n));return a.instance}function Ol(n,a,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,g=p,w=0;w<c.length;w++){var M=c[w];if(M.dataset.precedence===a)g=M;else if(g!==p)break}g?g.parentNode.insertBefore(n,g.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(n,a.firstChild))}function ff(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function pf(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Rl=null;function Pg(n,a,s){if(Rl===null){var c=new Map,p=Rl=new Map;p.set(s,c)}else p=Rl,c=p.get(s),c||(c=new Map,p.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),p=0;p<s.length;p++){var g=s[p];if(!(g[Gr]||g[wt]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var w=g.getAttribute(a)||"";w=n+w;var M=c.get(w);M?M.push(g):c.set(w,[g])}}return c}function Ng(n,a,s){n=n.ownerDocument||n,n.head.insertBefore(s,a==="title"?n.querySelector("head > title"):null)}function W7(n,a,s){if(s===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Bg(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Ds=null;function Q7(){}function J7(n,a,s){if(Ds===null)throw Error(r(475));var c=Ds;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var p=sr(s.href),g=n.querySelector(Os(p));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Dl.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=g,ot(g);return}g=n.ownerDocument||n,s=Vg(s),(p=cn.get(p))&&ff(s,p),g=g.createElement("link"),ot(g);var w=g;w._p=new Promise(function(M,H){w.onload=M,w.onerror=H}),mt(g,"link",s),a.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Dl.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function ew(){if(Ds===null)throw Error(r(475));var n=Ds;return n.stylesheets&&n.count===0&&hf(n,n.stylesheets),0<n.count?function(a){var s=setTimeout(function(){if(n.stylesheets&&hf(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Dl(){if(this.count--,this.count===0){if(this.stylesheets)hf(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var kl=null;function hf(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,kl=new Map,a.forEach(tw,n),kl=null,Dl.call(n))}function tw(n,a){if(!(a.state.loading&4)){var s=kl.get(n);if(s)var c=s.get(null);else{s=new Map,kl.set(n,s);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var w=p[g];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(s.set(w.dataset.precedence,w),c=w)}c&&s.set(null,c)}p=a.instance,w=p.getAttribute("data-precedence"),g=s.get(w)||c,g===c&&s.set(null,p),s.set(w,p),this.count++,c=Dl.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),g?g.parentNode.insertBefore(p,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),a.state.loading|=4}}var ks={$$typeof:T,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function nw(n,a,s,c,p,g,w,M){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.hiddenUpdates=cu(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function $g(n,a,s,c,p,g,w,M,H,I,X,J){return n=new nw(n,a,s,w,M,H,I,J),a=1,g===!0&&(a|=24),g=Ut(3,null,null,a),n.current=g,g.stateNode=n,a=Zu(),a.refCount++,n.pooledCache=a,a.refCount++,g.memoizedState={element:c,isDehydrated:s,cache:a},Qu(g),n}function Ug(n){return n?(n=Na,n):Na}function _g(n,a,s,c,p,g){p=Ug(p),c.context===null?c.context=p:c.pendingContext=p,c=yi(a),c.payload={element:s},g=g===void 0?null:g,g!==null&&(c.callback=g),s=vi(n,c,a),s!==null&&(Yt(s,n,a),cs(s,n,a))}function Ig(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<a?s:a}}function mf(n,a){Ig(n,a),(n=n.alternate)&&Ig(n,a)}function Gg(n){if(n.tag===13){var a=Pa(n,67108864);a!==null&&Yt(a,n,67108864),mf(n,67108864)}}var Hl=!0;function iw(n,a,s,c){var p=B.T;B.T=null;var g=K.p;try{K.p=2,gf(n,a,s,c)}finally{K.p=g,B.T=p}}function aw(n,a,s,c){var p=B.T;B.T=null;var g=K.p;try{K.p=8,gf(n,a,s,c)}finally{K.p=g,B.T=p}}function gf(n,a,s,c){if(Hl){var p=xf(c);if(p===null)nf(n,a,c,Vl,s),Yg(n,c);else if(sw(p,n,a,s,c))c.stopPropagation();else if(Yg(n,c),a&4&&-1<rw.indexOf(n)){for(;p!==null;){var g=Ea(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var w=Fi(g.pendingLanes);if(w!==0){var M=g;for(M.pendingLanes|=2,M.entangledLanes|=2;w;){var H=1<<31-Bt(w);M.entanglements[1]|=H,w&=~H}Rn(g),(ke&6)===0&&(yl=An()+500,As(0))}}break;case 13:M=Pa(g,2),M!==null&&Yt(M,g,2),wl(),mf(g,2)}if(g=xf(c),g===null&&nf(n,a,c,Vl,s),g===p)break;p=g}p!==null&&c.stopPropagation()}else nf(n,a,c,null,s)}}function xf(n){return n=bu(n),yf(n)}var Vl=null;function yf(n){if(Vl=null,n=Ta(n),n!==null){var a=l(n);if(a===null)n=null;else{var s=a.tag;if(s===13){if(n=u(a),n!==null)return n;n=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Vl=n,null}function qg(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gv()){case r1:return 2;case s1:return 8;case Mo:case qv:return 32;case o1:return 268435456;default:return 32}default:return 32}}var vf=!1,Di=null,ki=null,Hi=null,Hs=new Map,Vs=new Map,Vi=[],rw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yg(n,a){switch(n){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":Hs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vs.delete(a.pointerId)}}function zs(n,a,s,c,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:a,domEventName:s,eventSystemFlags:c,nativeEvent:g,targetContainers:[p]},a!==null&&(a=Ea(a),a!==null&&Gg(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,p!==null&&a.indexOf(p)===-1&&a.push(p),n)}function sw(n,a,s,c,p){switch(a){case"focusin":return Di=zs(Di,n,a,s,c,p),!0;case"dragenter":return ki=zs(ki,n,a,s,c,p),!0;case"mouseover":return Hi=zs(Hi,n,a,s,c,p),!0;case"pointerover":var g=p.pointerId;return Hs.set(g,zs(Hs.get(g)||null,n,a,s,c,p)),!0;case"gotpointercapture":return g=p.pointerId,Vs.set(g,zs(Vs.get(g)||null,n,a,s,c,p)),!0}return!1}function Fg(n){var a=Ta(n.target);if(a!==null){var s=l(a);if(s!==null){if(a=s.tag,a===13){if(a=u(s),a!==null){n.blockedOn=a,Jv(n.priority,function(){if(s.tag===13){var c=qt();c=uu(c);var p=Pa(s,c);p!==null&&Yt(p,s,c),mf(s,c)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function zl(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var s=xf(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);wu=c,s.target.dispatchEvent(c),wu=null}else return a=Ea(s),a!==null&&Gg(a),n.blockedOn=s,!1;a.shift()}return!0}function Zg(n,a,s){zl(n)&&s.delete(a)}function ow(){vf=!1,Di!==null&&zl(Di)&&(Di=null),ki!==null&&zl(ki)&&(ki=null),Hi!==null&&zl(Hi)&&(Hi=null),Hs.forEach(Zg),Vs.forEach(Zg)}function Pl(n,a){n.blockedOn===a&&(n.blockedOn=null,vf||(vf=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,ow)))}var Nl=null;function Xg(n){Nl!==n&&(Nl=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Nl===n&&(Nl=null);for(var a=0;a<n.length;a+=3){var s=n[a],c=n[a+1],p=n[a+2];if(typeof c!="function"){if(yf(c||s)===null)continue;break}var g=Ea(s);g!==null&&(n.splice(a,3),a-=3,xd(g,{pending:!0,data:p,method:s.method,action:c},c,p))}}))}function Ps(n){function a(H){return Pl(H,n)}Di!==null&&Pl(Di,n),ki!==null&&Pl(ki,n),Hi!==null&&Pl(Hi,n),Hs.forEach(a),Vs.forEach(a);for(var s=0;s<Vi.length;s++){var c=Vi[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Vi.length&&(s=Vi[0],s.blockedOn===null);)Fg(s),s.blockedOn===null&&Vi.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var p=s[c],g=s[c+1],w=p[Ot]||null;if(typeof g=="function")w||Xg(s);else if(w){var M=null;if(g&&g.hasAttribute("formAction")){if(p=g,w=g[Ot]||null)M=w.formAction;else if(yf(p)!==null)continue}else M=w.action;typeof M=="function"?s[c+1]=M:(s.splice(c,3),c-=3),Xg(s)}}}function wf(n){this._internalRoot=n}Bl.prototype.render=wf.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,c=qt();_g(s,c,n,a,null,null)},Bl.prototype.unmount=wf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;_g(n.current,2,null,n,null,null),wl(),a[Ca]=null}};function Bl(n){this._internalRoot=n}Bl.prototype.unstable_scheduleHydration=function(n){if(n){var a=f1();n={blockedOn:null,target:n,priority:a};for(var s=0;s<Vi.length&&a!==0&&a<Vi[s].priority;s++);Vi.splice(s,0,n),s===0&&Fg(n)}};var Kg=e.version;if(Kg!=="19.1.1")throw Error(r(527,Kg,"19.1.1"));K.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=f(a),n=n!==null?h(n):null,n=n===null?null:n.stateNode,n};var lw={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Ur=$l.inject(lw),Nt=$l}catch{}}return Bs.createRoot=function(n,a){if(!o(n))throw Error(r(299));var s=!1,c="",p=fm,g=pm,w=hm,M=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(p=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(M=a.unstable_transitionCallbacks)),a=$g(n,1,!1,null,null,s,c,p,g,w,M,null),n[Ca]=a.current,tf(n),new wf(a)},Bs.hydrateRoot=function(n,a,s){if(!o(n))throw Error(r(299));var c=!1,p="",g=fm,w=pm,M=hm,H=null,I=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onUncaughtError!==void 0&&(g=s.onUncaughtError),s.onCaughtError!==void 0&&(w=s.onCaughtError),s.onRecoverableError!==void 0&&(M=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(H=s.unstable_transitionCallbacks),s.formState!==void 0&&(I=s.formState)),a=$g(n,1,!0,a,s??null,c,p,g,w,M,H,I),a.context=Ug(null),s=a.current,c=qt(),c=uu(c),p=yi(c),p.callback=null,vi(s,p,c),s=c,a.current.lanes=s,Ir(a,s),Rn(a),n[Ca]=a.current,tf(n),new Bl(a)},Bs.version="19.1.1",Bs}var s3;function vw(){if(s3)return Sf.exports;s3=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Sf.exports=yw(),Sf.exports}var ww=vw();const bw=Gc(ww);var R=wp();const Le=Gc(R),o3=uw({__proto__:null,default:Le},[R]);/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var l3="popstate";function Sw(t={}){function e(r,o){let{pathname:l,search:u,hash:d}=r.location;return L0("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(r,o){return typeof o=="string"?o:io(o)}return Tw(e,i,null,t)}function Ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Cn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Cw(){return Math.random().toString(36).substring(2,10)}function c3(t,e){return{usr:t.state,key:t.key,idx:e}}function L0(t,e,i=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Dr(e):e,state:i,key:e&&e.key||r||Cw()}}function io({pathname:t="/",search:e="",hash:i=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Dr(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substring(i),t=t.substring(0,i));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function Tw(t,e,i,r={}){let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,d="POP",f=null,h=m();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function m(){return(u.state||{idx:null}).idx}function y(){d="POP";let O=m(),j=O==null?null:O-h;h=O,f&&f({action:d,location:A.location,delta:j})}function v(O,j){d="PUSH";let E=L0(A.location,O,j);h=m()+1;let T=c3(E,h),D=A.createHref(E);try{u.pushState(T,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;o.location.assign(D)}l&&f&&f({action:d,location:A.location,delta:1})}function S(O,j){d="REPLACE";let E=L0(A.location,O,j);h=m();let T=c3(E,h),D=A.createHref(E);u.replaceState(T,"",D),l&&f&&f({action:d,location:A.location,delta:0})}function b(O){return Ew(O)}let A={get action(){return d},get location(){return t(o,u)},listen(O){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(l3,y),f=O,()=>{o.removeEventListener(l3,y),f=null}},createHref(O){return e(o,O)},createURL:b,encodeLocation(O){let j=b(O);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:v,replace:S,go(O){return u.go(O)}};return A}function Ew(t,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(i,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:io(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function v5(t,e,i="/"){return Aw(t,e,i,!1)}function Aw(t,e,i,r){let o=typeof e=="string"?Dr(e):e,l=ui(o.pathname||"/",i);if(l==null)return null;let u=w5(t);Mw(u);let d=null;for(let f=0;d==null&&f<u.length;++f){let h=Nw(l);d=zw(u[f],h,r)}return d}function w5(t,e=[],i=[],r=""){let o=(l,u,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};f.relativePath.startsWith("/")&&(Ge(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length));let h=ci([r,f.relativePath]),m=i.concat(f);l.children&&l.children.length>0&&(Ge(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),w5(l.children,e,m,h)),!(l.path==null&&!l.index)&&e.push({path:h,score:Hw(h,l.index),routesMeta:m})};return t.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,u);else for(let f of b5(l.path))o(l,u,f)}),e}function b5(t){let e=t.split("/");if(e.length===0)return[];let[i,...r]=e,o=i.endsWith("?"),l=i.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let u=b5(r.join("/")),d=[];return d.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&d.push(...u),d.map(f=>t.startsWith("/")&&f===""?"/":f)}function Mw(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:Vw(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var jw=/^:[\w-]+$/,Lw=3,Ow=2,Rw=1,Dw=10,kw=-2,u3=t=>t==="*";function Hw(t,e){let i=t.split("/"),r=i.length;return i.some(u3)&&(r+=kw),e&&(r+=Ow),i.filter(o=>!u3(o)).reduce((o,l)=>o+(jw.test(l)?Lw:l===""?Rw:Dw),r)}function Vw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,o)=>r===e[o])?t[t.length-1]-e[e.length-1]:0}function zw(t,e,i=!1){let{routesMeta:r}=t,o={},l="/",u=[];for(let d=0;d<r.length;++d){let f=r[d],h=d===r.length-1,m=l==="/"?e:e.slice(l.length)||"/",y=Sc({path:f.relativePath,caseSensitive:f.caseSensitive,end:h},m),v=f.route;if(!y&&h&&i&&!r[r.length-1].route.index&&(y=Sc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},m)),!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:ci([l,y.pathname]),pathnameBase:_w(ci([l,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(l=ci([l,y.pathnameBase]))}return u}function Sc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,r]=Pw(t.path,t.caseSensitive,t.end),o=e.match(i);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((h,{paramName:m,isOptional:y},v)=>{if(m==="*"){let b=d[v]||"";u=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const S=d[v];return y&&!S?h[m]=void 0:h[m]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:t}}function Pw(t,e=!1,i=!0){Cn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function Nw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Cn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function ui(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=t.charAt(i);return r&&r!=="/"?null:t.slice(i)||"/"}function Bw(t,e="/"){let{pathname:i,search:r="",hash:o=""}=typeof t=="string"?Dr(t):t;return{pathname:i?i.startsWith("/")?i:$w(i,e):e,search:Iw(r),hash:Gw(o)}}function $w(t,e){let i=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function Mf(t,e,i,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Uw(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function bp(t){let e=Uw(t);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Sp(t,e,i,r=!1){let o;typeof t=="string"?o=Dr(t):(o={...t},Ge(!o.pathname||!o.pathname.includes("?"),Mf("?","pathname","search",o)),Ge(!o.pathname||!o.pathname.includes("#"),Mf("#","pathname","hash",o)),Ge(!o.search||!o.search.includes("#"),Mf("#","search","hash",o)));let l=t===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=i;else{let y=e.length-1;if(!r&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),y-=1;o.pathname=v.join("/")}d=y>=0?e[y]:"/"}let f=Bw(o,d),h=u&&u!=="/"&&u.endsWith("/"),m=(l||u===".")&&i.endsWith("/");return!f.pathname.endsWith("/")&&(h||m)&&(f.pathname+="/"),f}var ci=t=>t.join("/").replace(/\/\/+/g,"/"),_w=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Iw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Gw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function qw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var S5=["POST","PUT","PATCH","DELETE"];new Set(S5);var Yw=["GET",...S5];new Set(Yw);var kr=R.createContext(null);kr.displayName="DataRouter";var qc=R.createContext(null);qc.displayName="DataRouterState";R.createContext(!1);var C5=R.createContext({isTransitioning:!1});C5.displayName="ViewTransition";var Fw=R.createContext(new Map);Fw.displayName="Fetchers";var Zw=R.createContext(null);Zw.displayName="Await";var Tn=R.createContext(null);Tn.displayName="Navigation";var yo=R.createContext(null);yo.displayName="Location";var mn=R.createContext({outlet:null,matches:[],isDataRoute:!1});mn.displayName="Route";var Cp=R.createContext(null);Cp.displayName="RouteError";function Xw(t,{relative:e}={}){Ge(Hr(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=R.useContext(Tn),{hash:o,pathname:l,search:u}=vo(t,{relative:e}),d=l;return i!=="/"&&(d=l==="/"?i:ci([i,l])),r.createHref({pathname:d,search:u,hash:o})}function Hr(){return R.useContext(yo)!=null}function gn(){return Ge(Hr(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(yo).location}var T5="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function E5(t){R.useContext(Tn).static||R.useLayoutEffect(t)}function Tp(){let{isDataRoute:t}=R.useContext(mn);return t?d9():Kw()}function Kw(){Ge(Hr(),"useNavigate() may be used only in the context of a <Router> component.");let t=R.useContext(kr),{basename:e,navigator:i}=R.useContext(Tn),{matches:r}=R.useContext(mn),{pathname:o}=gn(),l=JSON.stringify(bp(r)),u=R.useRef(!1);return E5(()=>{u.current=!0}),R.useCallback((f,h={})=>{if(Cn(u.current,T5),!u.current)return;if(typeof f=="number"){i.go(f);return}let m=Sp(f,JSON.parse(l),o,h.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:ci([e,m.pathname])),(h.replace?i.replace:i.push)(m,h.state,h)},[e,i,l,o,t])}var Ww=R.createContext(null);function Qw(t){let e=R.useContext(mn).outlet;return e&&R.createElement(Ww.Provider,{value:t},e)}function Jw(){let{matches:t}=R.useContext(mn),e=t[t.length-1];return e?e.params:{}}function vo(t,{relative:e}={}){let{matches:i}=R.useContext(mn),{pathname:r}=gn(),o=JSON.stringify(bp(i));return R.useMemo(()=>Sp(t,JSON.parse(o),r,e==="path"),[t,o,r,e])}function e9(t,e){return A5(t,e)}function A5(t,e,i,r){var j;Ge(Hr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=R.useContext(Tn),{matches:l}=R.useContext(mn),u=l[l.length-1],d=u?u.params:{},f=u?u.pathname:"/",h=u?u.pathnameBase:"/",m=u&&u.route;{let E=m&&m.path||"";M5(f,!m||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let y=gn(),v;if(e){let E=typeof e=="string"?Dr(e):e;Ge(h==="/"||((j=E.pathname)==null?void 0:j.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${E.pathname}" was given in the \`location\` prop.`),v=E}else v=y;let S=v.pathname||"/",b=S;if(h!=="/"){let E=h.replace(/^\//,"").split("/");b="/"+S.replace(/^\//,"").split("/").slice(E.length).join("/")}let A=v5(t,{pathname:b});Cn(m||A!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Cn(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=r9(A&&A.map(E=>Object.assign({},E,{params:Object.assign({},d,E.params),pathname:ci([h,o.encodeLocation?o.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?h:ci([h,o.encodeLocation?o.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),l,i,r);return e&&O?R.createElement(yo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},O):O}function t9(){let t=u9(),e=qw(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",t),u=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:l},"ErrorBoundary")," or"," ",R.createElement("code",{style:l},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),i?R.createElement("pre",{style:o},i):null,u)}var n9=R.createElement(t9,null),i9=class extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?R.createElement(mn.Provider,{value:this.props.routeContext},R.createElement(Cp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function a9({routeContext:t,match:e,children:i}){let r=R.useContext(kr);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),R.createElement(mn.Provider,{value:t},i)}function r9(t,e=[],i=null,r=null){if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let o=t,l=i==null?void 0:i.errors;if(l!=null){let f=o.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);Ge(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(i)for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=f),h.route.id){let{loaderData:m,errors:y}=i,v=h.route.loader&&!m.hasOwnProperty(h.route.id)&&(!y||y[h.route.id]===void 0);if(h.route.lazy||v){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,h,m)=>{let y,v=!1,S=null,b=null;i&&(y=l&&h.route.id?l[h.route.id]:void 0,S=h.route.errorElement||n9,u&&(d<0&&m===0?(M5("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,b=null):d===m&&(v=!0,b=h.route.hydrateFallbackElement||null)));let A=e.concat(o.slice(0,m+1)),O=()=>{let j;return y?j=S:v?j=b:h.route.Component?j=R.createElement(h.route.Component,null):h.route.element?j=h.route.element:j=f,R.createElement(a9,{match:h,routeContext:{outlet:f,matches:A,isDataRoute:i!=null},children:j})};return i&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?R.createElement(i9,{location:i.location,revalidation:i.revalidation,component:S,error:y,children:O(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):O()},null)}function Ep(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function s9(t){let e=R.useContext(kr);return Ge(e,Ep(t)),e}function o9(t){let e=R.useContext(qc);return Ge(e,Ep(t)),e}function l9(t){let e=R.useContext(mn);return Ge(e,Ep(t)),e}function Ap(t){let e=l9(t),i=e.matches[e.matches.length-1];return Ge(i.route.id,`${t} can only be used on routes that contain a unique "id"`),i.route.id}function c9(){return Ap("useRouteId")}function u9(){var r;let t=R.useContext(Cp),e=o9("useRouteError"),i=Ap("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[i]}function d9(){let{router:t}=s9("useNavigate"),e=Ap("useNavigate"),i=R.useRef(!1);return E5(()=>{i.current=!0}),R.useCallback(async(o,l={})=>{Cn(i.current,T5),i.current&&(typeof o=="number"?t.navigate(o):await t.navigate(o,{fromRouteId:e,...l}))},[t,e])}var d3={};function M5(t,e,i){!e&&!d3[t]&&(d3[t]=!0,Cn(!1,i))}R.memo(f9);function f9({routes:t,future:e,state:i}){return A5(t,void 0,i,e)}function p9({to:t,replace:e,state:i,relative:r}){Ge(Hr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=R.useContext(Tn);Cn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=R.useContext(mn),{pathname:u}=gn(),d=Tp(),f=Sp(t,bp(l),u,r==="path"),h=JSON.stringify(f);return R.useEffect(()=>{d(JSON.parse(h),{replace:e,state:i,relative:r})},[d,h,r,e,i]),null}function h9(t){return Qw(t.context)}function gt(t){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function m9({basename:t="/",children:e=null,location:i,navigationType:r="POP",navigator:o,static:l=!1}){Ge(!Hr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=t.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof i=="string"&&(i=Dr(i));let{pathname:f="/",search:h="",hash:m="",state:y=null,key:v="default"}=i,S=R.useMemo(()=>{let b=ui(f,u);return b==null?null:{location:{pathname:b,search:h,hash:m,state:y,key:v},navigationType:r}},[u,f,h,m,y,v,r]);return Cn(S!=null,`<Router basename="${u}"> is not able to match the URL "${f}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:R.createElement(Tn.Provider,{value:d},R.createElement(yo.Provider,{children:e,value:S}))}function g9({children:t,location:e}){return e9(O0(t),e)}function O0(t,e=[]){let i=[];return R.Children.forEach(t,(r,o)=>{if(!R.isValidElement(r))return;let l=[...e,o];if(r.type===R.Fragment){i.push.apply(i,O0(r.props.children,l));return}Ge(r.type===gt,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=O0(r.props.children,l)),i.push(u)}),i}var oc="get",lc="application/x-www-form-urlencoded";function Yc(t){return t!=null&&typeof t.tagName=="string"}function x9(t){return Yc(t)&&t.tagName.toLowerCase()==="button"}function y9(t){return Yc(t)&&t.tagName.toLowerCase()==="form"}function v9(t){return Yc(t)&&t.tagName.toLowerCase()==="input"}function w9(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function b9(t,e){return t.button===0&&(!e||e==="_self")&&!w9(t)}var Ul=null;function S9(){if(Ul===null)try{new FormData(document.createElement("form"),0),Ul=!1}catch{Ul=!0}return Ul}var C9=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jf(t){return t!=null&&!C9.has(t)?(Cn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lc}"`),null):t}function T9(t,e){let i,r,o,l,u;if(y9(t)){let d=t.getAttribute("action");r=d?ui(d,e):null,i=t.getAttribute("method")||oc,o=jf(t.getAttribute("enctype"))||lc,l=new FormData(t)}else if(x9(t)||v9(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=t.getAttribute("formaction")||d.getAttribute("action");if(r=f?ui(f,e):null,i=t.getAttribute("formmethod")||d.getAttribute("method")||oc,o=jf(t.getAttribute("formenctype"))||jf(d.getAttribute("enctype"))||lc,l=new FormData(d,t),!S9()){let{name:h,type:m,value:y}=t;if(m==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,y)}}else{if(Yc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=oc,r=null,o=lc,u=t}return l&&o==="text/plain"&&(u=l,l=void 0),{action:r,method:i.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Mp(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function E9(t,e,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&ui(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function A9(t,e){if(t.id in e)return e[t.id];try{let i=await import(t.module);return e[t.id]=i,i}catch(i){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function M9(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function j9(t,e,i){let r=await Promise.all(t.map(async o=>{let l=e.routes[o.route.id];if(l){let u=await A9(l,i);return u.links?u.links():[]}return[]}));return D9(r.flat(1).filter(M9).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function f3(t,e,i,r,o,l){let u=(f,h)=>i[h]?f.route.id!==i[h].route.id:!0,d=(f,h)=>{var m;return i[h].pathname!==f.pathname||((m=i[h].route.path)==null?void 0:m.endsWith("*"))&&i[h].params["*"]!==f.params["*"]};return l==="assets"?e.filter((f,h)=>u(f,h)||d(f,h)):l==="data"?e.filter((f,h)=>{var y;let m=r.routes[f.route.id];if(!m||!m.hasLoader)return!1;if(u(f,h)||d(f,h))return!0;if(f.route.shouldRevalidate){let v=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(t,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function L9(t,e,{includeHydrateFallback:i}={}){return O9(t.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function O9(t){return[...new Set(t)]}function R9(t){let e={},i=Object.keys(t).sort();for(let r of i)e[r]=t[r];return e}function D9(t,e){let i=new Set;return new Set(e),t.reduce((r,o)=>{let l=JSON.stringify(R9(o));return i.has(l)||(i.add(l),r.push({key:l,link:o})),r},[])}function j5(){let t=R.useContext(kr);return Mp(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function k9(){let t=R.useContext(qc);return Mp(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var jp=R.createContext(void 0);jp.displayName="FrameworkContext";function L5(){let t=R.useContext(jp);return Mp(t,"You must render this element inside a <HydratedRouter> element"),t}function H9(t,e){let i=R.useContext(jp),[r,o]=R.useState(!1),[l,u]=R.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:h,onMouseLeave:m,onTouchStart:y}=e,v=R.useRef(null);R.useEffect(()=>{if(t==="render"&&u(!0),t==="viewport"){let A=j=>{j.forEach(E=>{u(E.isIntersecting)})},O=new IntersectionObserver(A,{threshold:.5});return v.current&&O.observe(v.current),()=>{O.disconnect()}}},[t]),R.useEffect(()=>{if(r){let A=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(A)}}},[r]);let S=()=>{o(!0)},b=()=>{o(!1),u(!1)};return i?t!=="intent"?[l,v,{}]:[l,v,{onFocus:$s(d,S),onBlur:$s(f,b),onMouseEnter:$s(h,S),onMouseLeave:$s(m,b),onTouchStart:$s(y,S)}]:[!1,v,{}]}function $s(t,e){return i=>{t&&t(i),i.defaultPrevented||e(i)}}function V9({page:t,...e}){let{router:i}=j5(),r=R.useMemo(()=>v5(i.routes,t,i.basename),[i.routes,t,i.basename]);return r?R.createElement(P9,{page:t,matches:r,...e}):null}function z9(t){let{manifest:e,routeModules:i}=L5(),[r,o]=R.useState([]);return R.useEffect(()=>{let l=!1;return j9(t,e,i).then(u=>{l||o(u)}),()=>{l=!0}},[t,e,i]),r}function P9({page:t,matches:e,...i}){let r=gn(),{manifest:o,routeModules:l}=L5(),{basename:u}=j5(),{loaderData:d,matches:f}=k9(),h=R.useMemo(()=>f3(t,e,f,o,r,"data"),[t,e,f,o,r]),m=R.useMemo(()=>f3(t,e,f,o,r,"assets"),[t,e,f,o,r]),y=R.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let b=new Set,A=!1;if(e.forEach(j=>{var T;let E=o.routes[j.route.id];!E||!E.hasLoader||(!h.some(D=>D.route.id===j.route.id)&&j.route.id in d&&((T=l[j.route.id])!=null&&T.shouldRevalidate)||E.hasClientLoader?A=!0:b.add(j.route.id))}),b.size===0)return[];let O=E9(t,u,"data");return A&&b.size>0&&O.searchParams.set("_routes",e.filter(j=>b.has(j.route.id)).map(j=>j.route.id).join(",")),[O.pathname+O.search]},[u,d,r,o,h,e,t,l]),v=R.useMemo(()=>L9(m,o),[m,o]),S=z9(m);return R.createElement(R.Fragment,null,y.map(b=>R.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),v.map(b=>R.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),S.map(({key:b,link:A})=>R.createElement("link",{key:b,nonce:i.nonce,...A})))}function N9(...t){return e=>{t.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var O5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{O5&&(window.__reactRouterVersion="7.8.0")}catch{}function B9({basename:t,children:e,window:i}){let r=R.useRef();r.current==null&&(r.current=Sw({window:i,v5Compat:!0}));let o=r.current,[l,u]=R.useState({action:o.action,location:o.location}),d=R.useCallback(f=>{R.startTransition(()=>u(f))},[u]);return R.useLayoutEffect(()=>o.listen(d),[o,d]),R.createElement(m9,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:o})}var R5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D5=R.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:o,reloadDocument:l,replace:u,state:d,target:f,to:h,preventScrollReset:m,viewTransition:y,...v},S){let{basename:b}=R.useContext(Tn),A=typeof h=="string"&&R5.test(h),O,j=!1;if(typeof h=="string"&&A&&(O=h,O5))try{let $=new URL(window.location.href),Y=h.startsWith("//")?new URL($.protocol+h):new URL(h),F=ui(Y.pathname,b);Y.origin===$.origin&&F!=null?h=F+Y.search+Y.hash:j=!0}catch{Cn(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let E=Xw(h,{relative:o}),[T,D,L]=H9(r,v),P=_9(h,{replace:u,state:d,target:f,preventScrollReset:m,relative:o,viewTransition:y});function V($){e&&e($),$.defaultPrevented||P($)}let U=R.createElement("a",{...v,...L,href:O||E,onClick:j||l?e:V,ref:N9(S,D),target:f,"data-discover":!A&&i==="render"?"true":void 0});return T&&!A?R.createElement(R.Fragment,null,U,R.createElement(V9,{page:E})):U});D5.displayName="Link";var En=R.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:o=!1,style:l,to:u,viewTransition:d,children:f,...h},m){let y=vo(u,{relative:h.relative}),v=gn(),S=R.useContext(qc),{navigator:b,basename:A}=R.useContext(Tn),O=S!=null&&F9(y)&&d===!0,j=b.encodeLocation?b.encodeLocation(y).pathname:y.pathname,E=v.pathname,T=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(E=E.toLowerCase(),T=T?T.toLowerCase():null,j=j.toLowerCase()),T&&A&&(T=ui(T,A)||T);const D=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let L=E===j||!o&&E.startsWith(j)&&E.charAt(D)==="/",P=T!=null&&(T===j||!o&&T.startsWith(j)&&T.charAt(j.length)==="/"),V={isActive:L,isPending:P,isTransitioning:O},U=L?e:void 0,$;typeof r=="function"?$=r(V):$=[r,L?"active":null,P?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let Y=typeof l=="function"?l(V):l;return R.createElement(D5,{...h,"aria-current":U,className:$,ref:m,style:Y,to:u,viewTransition:d},typeof f=="function"?f(V):f)});En.displayName="NavLink";var $9=R.forwardRef(({discover:t="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:o,state:l,method:u=oc,action:d,onSubmit:f,relative:h,preventScrollReset:m,viewTransition:y,...v},S)=>{let b=q9(),A=Y9(d,{relative:h}),O=u.toLowerCase()==="get"?"get":"post",j=typeof d=="string"&&R5.test(d),E=T=>{if(f&&f(T),T.defaultPrevented)return;T.preventDefault();let D=T.nativeEvent.submitter,L=(D==null?void 0:D.getAttribute("formmethod"))||u;b(D||T.currentTarget,{fetcherKey:e,method:L,navigate:i,replace:o,state:l,relative:h,preventScrollReset:m,viewTransition:y})};return R.createElement("form",{ref:S,method:O,action:A,onSubmit:r?f:E,...v,"data-discover":!j&&t==="render"?"true":void 0})});$9.displayName="Form";function U9(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function k5(t){let e=R.useContext(kr);return Ge(e,U9(t)),e}function _9(t,{target:e,replace:i,state:r,preventScrollReset:o,relative:l,viewTransition:u}={}){let d=Tp(),f=gn(),h=vo(t,{relative:l});return R.useCallback(m=>{if(b9(m,e)){m.preventDefault();let y=i!==void 0?i:io(f)===io(h);d(t,{replace:y,state:r,preventScrollReset:o,relative:l,viewTransition:u})}},[f,d,h,i,r,e,t,o,l,u])}var I9=0,G9=()=>`__${String(++I9)}__`;function q9(){let{router:t}=k5("useSubmit"),{basename:e}=R.useContext(Tn),i=c9();return R.useCallback(async(r,o={})=>{let{action:l,method:u,encType:d,formData:f,body:h}=T9(r,e);if(o.navigate===!1){let m=o.fetcherKey||G9();await t.fetch(m,i,o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:h,formMethod:o.method||u,formEncType:o.encType||d,flushSync:o.flushSync})}else await t.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:h,formMethod:o.method||u,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[t,e,i])}function Y9(t,{relative:e}={}){let{basename:i}=R.useContext(Tn),r=R.useContext(mn);Ge(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),l={...vo(t||".",{relative:e})},u=gn();if(t==null){l.search=u.search;let d=new URLSearchParams(l.search),f=d.getAll("index");if(f.some(m=>m==="")){d.delete("index"),f.filter(y=>y).forEach(y=>d.append("index",y));let m=d.toString();l.search=m?`?${m}`:""}}return(!t||t===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(l.pathname=l.pathname==="/"?i:ci([i,l.pathname])),io(l)}function F9(t,{relative:e}={}){let i=R.useContext(C5);Ge(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=k5("useViewTransitionState"),o=vo(t,{relative:e});if(!i.isTransitioning)return!1;let l=ui(i.currentLocation.pathname,r)||i.currentLocation.pathname,u=ui(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Sc(o.pathname,u)!=null||Sc(o.pathname,l)!=null}function Z9(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function X9(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var K9=function(){function t(i){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(X9(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=Z9(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Ct="-ms-",Cc="-moz-",Ae="-webkit-",H5="comm",Lp="rule",Op="decl",W9="@import",V5="@keyframes",Q9="@layer",J9=Math.abs,Fc=String.fromCharCode,eb=Object.assign;function tb(t,e){return yt(t,0)^45?(((e<<2^yt(t,0))<<2^yt(t,1))<<2^yt(t,2))<<2^yt(t,3):0}function z5(t){return t.trim()}function nb(t,e){return(t=e.exec(t))?t[0]:t}function Me(t,e,i){return t.replace(e,i)}function R0(t,e){return t.indexOf(e)}function yt(t,e){return t.charCodeAt(e)|0}function ao(t,e,i){return t.slice(e,i)}function Dn(t){return t.length}function Rp(t){return t.length}function _l(t,e){return e.push(t),t}function ib(t,e){return t.map(e).join("")}var Zc=1,Cr=1,P5=0,Pt=0,nt=0,Vr="";function Xc(t,e,i,r,o,l,u){return{value:t,root:e,parent:i,type:r,props:o,children:l,line:Zc,column:Cr,length:u,return:""}}function Us(t,e){return eb(Xc("",null,null,"",null,null,0),t,{length:-t.length},e)}function ab(){return nt}function rb(){return nt=Pt>0?yt(Vr,--Pt):0,Cr--,nt===10&&(Cr=1,Zc--),nt}function Kt(){return nt=Pt<P5?yt(Vr,Pt++):0,Cr++,nt===10&&(Cr=1,Zc++),nt}function Pn(){return yt(Vr,Pt)}function cc(){return Pt}function wo(t,e){return ao(Vr,t,e)}function ro(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N5(t){return Zc=Cr=1,P5=Dn(Vr=t),Pt=0,[]}function B5(t){return Vr="",t}function uc(t){return z5(wo(Pt-1,D0(t===91?t+2:t===40?t+1:t)))}function sb(t){for(;(nt=Pn())&&nt<33;)Kt();return ro(t)>2||ro(nt)>3?"":" "}function ob(t,e){for(;--e&&Kt()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return wo(t,cc()+(e<6&&Pn()==32&&Kt()==32))}function D0(t){for(;Kt();)switch(nt){case t:return Pt;case 34:case 39:t!==34&&t!==39&&D0(nt);break;case 40:t===41&&D0(t);break;case 92:Kt();break}return Pt}function lb(t,e){for(;Kt()&&t+nt!==57;)if(t+nt===84&&Pn()===47)break;return"/*"+wo(e,Pt-1)+"*"+Fc(t===47?t:Kt())}function cb(t){for(;!ro(Pn());)Kt();return wo(t,Pt)}function ub(t){return B5(dc("",null,null,null,[""],t=N5(t),0,[0],t))}function dc(t,e,i,r,o,l,u,d,f){for(var h=0,m=0,y=u,v=0,S=0,b=0,A=1,O=1,j=1,E=0,T="",D=o,L=l,P=r,V=T;O;)switch(b=E,E=Kt()){case 40:if(b!=108&&yt(V,y-1)==58){R0(V+=Me(uc(E),"&","&\f"),"&\f")!=-1&&(j=-1);break}case 34:case 39:case 91:V+=uc(E);break;case 9:case 10:case 13:case 32:V+=sb(b);break;case 92:V+=ob(cc()-1,7);continue;case 47:switch(Pn()){case 42:case 47:_l(db(lb(Kt(),cc()),e,i),f);break;default:V+="/"}break;case 123*A:d[h++]=Dn(V)*j;case 125*A:case 59:case 0:switch(E){case 0:case 125:O=0;case 59+m:j==-1&&(V=Me(V,/\f/g,"")),S>0&&Dn(V)-y&&_l(S>32?h3(V+";",r,i,y-1):h3(Me(V," ","")+";",r,i,y-2),f);break;case 59:V+=";";default:if(_l(P=p3(V,e,i,h,m,o,d,T,D=[],L=[],y),l),E===123)if(m===0)dc(V,e,P,P,D,l,y,d,L);else switch(v===99&&yt(V,3)===110?100:v){case 100:case 108:case 109:case 115:dc(t,P,P,r&&_l(p3(t,P,P,0,0,o,d,T,o,D=[],y),L),o,L,y,d,r?D:L);break;default:dc(V,P,P,P,[""],L,0,d,L)}}h=m=S=0,A=j=1,T=V="",y=u;break;case 58:y=1+Dn(V),S=b;default:if(A<1){if(E==123)--A;else if(E==125&&A++==0&&rb()==125)continue}switch(V+=Fc(E),E*A){case 38:j=m>0?1:(V+="\f",-1);break;case 44:d[h++]=(Dn(V)-1)*j,j=1;break;case 64:Pn()===45&&(V+=uc(Kt())),v=Pn(),m=y=Dn(T=V+=cb(cc())),E++;break;case 45:b===45&&Dn(V)==2&&(A=0)}}return l}function p3(t,e,i,r,o,l,u,d,f,h,m){for(var y=o-1,v=o===0?l:[""],S=Rp(v),b=0,A=0,O=0;b<r;++b)for(var j=0,E=ao(t,y+1,y=J9(A=u[b])),T=t;j<S;++j)(T=z5(A>0?v[j]+" "+E:Me(E,/&\f/g,v[j])))&&(f[O++]=T);return Xc(t,e,i,o===0?Lp:d,f,h,m)}function db(t,e,i){return Xc(t,e,i,H5,Fc(ab()),ao(t,2,-2),0)}function h3(t,e,i,r){return Xc(t,e,i,Op,ao(t,0,r),ao(t,r+1,-1),r)}function wr(t,e){for(var i="",r=Rp(t),o=0;o<r;o++)i+=e(t[o],o,t,e)||"";return i}function fb(t,e,i,r){switch(t.type){case Q9:if(t.children.length)break;case W9:case Op:return t.return=t.return||t.value;case H5:return"";case V5:return t.return=t.value+"{"+wr(t.children,r)+"}";case Lp:t.value=t.props.join(",")}return Dn(i=wr(t.children,r))?t.return=t.value+"{"+i+"}":""}function pb(t){var e=Rp(t);return function(i,r,o,l){for(var u="",d=0;d<e;d++)u+=t[d](i,r,o,l)||"";return u}}function hb(t){return function(e){e.root||(e=e.return)&&t(e)}}function mb(t){var e=Object.create(null);return function(i){return e[i]===void 0&&(e[i]=t(i)),e[i]}}var gb=function(e,i,r){for(var o=0,l=0;o=l,l=Pn(),o===38&&l===12&&(i[r]=1),!ro(l);)Kt();return wo(e,Pt)},xb=function(e,i){var r=-1,o=44;do switch(ro(o)){case 0:o===38&&Pn()===12&&(i[r]=1),e[r]+=gb(Pt-1,i,r);break;case 2:e[r]+=uc(o);break;case 4:if(o===44){e[++r]=Pn()===58?"&\f":"",i[r]=e[r].length;break}default:e[r]+=Fc(o)}while(o=Kt());return e},yb=function(e,i){return B5(xb(N5(e),i))},m3=new WeakMap,vb=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var i=e.value,r=e.parent,o=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&i.charCodeAt(0)!==58&&!m3.get(r))&&!o){m3.set(e,!0);for(var l=[],u=yb(i,l),d=r.props,f=0,h=0;f<u.length;f++)for(var m=0;m<d.length;m++,h++)e.props[h]=l[f]?u[f].replace(/&\f/g,d[m]):d[m]+" "+u[f]}}},wb=function(e){if(e.type==="decl"){var i=e.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(e.return="",e.value="")}};function $5(t,e){switch(tb(t,e)){case 5103:return Ae+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+t+Cc+t+Ct+t+t;case 6828:case 4268:return Ae+t+Ct+t+t;case 6165:return Ae+t+Ct+"flex-"+t+t;case 5187:return Ae+t+Me(t,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+Ct+"flex-$1$2")+t;case 5443:return Ae+t+Ct+"flex-item-"+Me(t,/flex-|-self/,"")+t;case 4675:return Ae+t+Ct+"flex-line-pack"+Me(t,/align-content|flex-|-self/,"")+t;case 5548:return Ae+t+Ct+Me(t,"shrink","negative")+t;case 5292:return Ae+t+Ct+Me(t,"basis","preferred-size")+t;case 6060:return Ae+"box-"+Me(t,"-grow","")+Ae+t+Ct+Me(t,"grow","positive")+t;case 4554:return Ae+Me(t,/([^-])(transform)/g,"$1"+Ae+"$2")+t;case 6187:return Me(Me(Me(t,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),t,"")+t;case 5495:case 3959:return Me(t,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return Me(Me(t,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+Ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+t+t;case 4095:case 3583:case 4068:case 2532:return Me(t,/(.+)-inline(.+)/,Ae+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(t)-1-e>6)switch(yt(t,e+1)){case 109:if(yt(t,e+4)!==45)break;case 102:return Me(t,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+Cc+(yt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~R0(t,"stretch")?$5(Me(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(yt(t,e+1)!==115)break;case 6444:switch(yt(t,Dn(t)-3-(~R0(t,"!important")&&10))){case 107:return Me(t,":",":"+Ae)+t;case 101:return Me(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ae+(yt(t,14)===45?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+Ct+"$2box$3")+t}break;case 5936:switch(yt(t,e+11)){case 114:return Ae+t+Ct+Me(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ae+t+Ct+Me(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ae+t+Ct+Me(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Ae+t+Ct+t+t}return t}var bb=function(e,i,r,o){if(e.length>-1&&!e.return)switch(e.type){case Op:e.return=$5(e.value,e.length);break;case V5:return wr([Us(e,{value:Me(e.value,"@","@"+Ae)})],o);case Lp:if(e.length)return ib(e.props,function(l){switch(nb(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return wr([Us(e,{props:[Me(l,/:(read-\w+)/,":"+Cc+"$1")]})],o);case"::placeholder":return wr([Us(e,{props:[Me(l,/:(plac\w+)/,":"+Ae+"input-$1")]}),Us(e,{props:[Me(l,/:(plac\w+)/,":"+Cc+"$1")]}),Us(e,{props:[Me(l,/:(plac\w+)/,Ct+"input-$1")]})],o)}return""})}},Sb=[bb],Cb=function(e){var i=e.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(A){var O=A.getAttribute("data-emotion");O.indexOf(" ")!==-1&&(document.head.appendChild(A),A.setAttribute("data-s",""))})}var o=e.stylisPlugins||Sb,l={},u,d=[];u=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(A){for(var O=A.getAttribute("data-emotion").split(" "),j=1;j<O.length;j++)l[O[j]]=!0;d.push(A)});var f,h=[vb,wb];{var m,y=[fb,hb(function(A){m.insert(A)})],v=pb(h.concat(o,y)),S=function(O){return wr(ub(O),v)};f=function(O,j,E,T){m=E,S(O?O+"{"+j.styles+"}":j.styles),T&&(b.inserted[j.name]=!0)}}var b={key:i,sheet:new K9({key:i,container:u,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:f};return b.sheet.hydrate(d),b},Lf={exports:{}},Re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g3;function Tb(){if(g3)return Re;g3=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,i=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,o=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,u=t?Symbol.for("react.provider"):60109,d=t?Symbol.for("react.context"):60110,f=t?Symbol.for("react.async_mode"):60111,h=t?Symbol.for("react.concurrent_mode"):60111,m=t?Symbol.for("react.forward_ref"):60112,y=t?Symbol.for("react.suspense"):60113,v=t?Symbol.for("react.suspense_list"):60120,S=t?Symbol.for("react.memo"):60115,b=t?Symbol.for("react.lazy"):60116,A=t?Symbol.for("react.block"):60121,O=t?Symbol.for("react.fundamental"):60117,j=t?Symbol.for("react.responder"):60118,E=t?Symbol.for("react.scope"):60119;function T(L){if(typeof L=="object"&&L!==null){var P=L.$$typeof;switch(P){case e:switch(L=L.type,L){case f:case h:case r:case l:case o:case y:return L;default:switch(L=L&&L.$$typeof,L){case d:case m:case b:case S:case u:return L;default:return P}}case i:return P}}}function D(L){return T(L)===h}return Re.AsyncMode=f,Re.ConcurrentMode=h,Re.ContextConsumer=d,Re.ContextProvider=u,Re.Element=e,Re.ForwardRef=m,Re.Fragment=r,Re.Lazy=b,Re.Memo=S,Re.Portal=i,Re.Profiler=l,Re.StrictMode=o,Re.Suspense=y,Re.isAsyncMode=function(L){return D(L)||T(L)===f},Re.isConcurrentMode=D,Re.isContextConsumer=function(L){return T(L)===d},Re.isContextProvider=function(L){return T(L)===u},Re.isElement=function(L){return typeof L=="object"&&L!==null&&L.$$typeof===e},Re.isForwardRef=function(L){return T(L)===m},Re.isFragment=function(L){return T(L)===r},Re.isLazy=function(L){return T(L)===b},Re.isMemo=function(L){return T(L)===S},Re.isPortal=function(L){return T(L)===i},Re.isProfiler=function(L){return T(L)===l},Re.isStrictMode=function(L){return T(L)===o},Re.isSuspense=function(L){return T(L)===y},Re.isValidElementType=function(L){return typeof L=="string"||typeof L=="function"||L===r||L===h||L===l||L===o||L===y||L===v||typeof L=="object"&&L!==null&&(L.$$typeof===b||L.$$typeof===S||L.$$typeof===u||L.$$typeof===d||L.$$typeof===m||L.$$typeof===O||L.$$typeof===j||L.$$typeof===E||L.$$typeof===A)},Re.typeOf=T,Re}var x3;function Eb(){return x3||(x3=1,Lf.exports=Tb()),Lf.exports}var Of,y3;function Ab(){if(y3)return Of;y3=1;var t=Eb(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[t.ForwardRef]=r,l[t.Memo]=o;function u(b){return t.isMemo(b)?o:l[b.$$typeof]||e}var d=Object.defineProperty,f=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,v=Object.prototype;function S(b,A,O){if(typeof A!="string"){if(v){var j=y(A);j&&j!==v&&S(b,j,O)}var E=f(A);h&&(E=E.concat(h(A)));for(var T=u(b),D=u(A),L=0;L<E.length;++L){var P=E[L];if(!i[P]&&!(O&&O[P])&&!(D&&D[P])&&!(T&&T[P])){var V=m(A,P);try{d(b,P,V)}catch{}}}}return b}return Of=S,Of}Ab();var Mb=!0;function jb(t,e,i){var r="";return i.split(" ").forEach(function(o){t[o]!==void 0?e.push(t[o]+";"):o&&(r+=o+" ")}),r}var U5=function(e,i,r){var o=e.key+"-"+i.name;(r===!1||Mb===!1)&&e.registered[o]===void 0&&(e.registered[o]=i.styles)},_5=function(e,i,r){U5(e,i,r);var o=e.key+"-"+i.name;if(e.inserted[i.name]===void 0){var l=i;do e.insert(i===l?"."+o:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function Lb(t){for(var e=0,i,r=0,o=t.length;o>=4;++r,o-=4)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,e=(i&65535)*1540483477+((i>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Ob={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rb=/[A-Z]|^ms/g,Db=/_EMO_([^_]+?)_([^]*?)_EMO_/g,I5=function(e){return e.charCodeAt(1)===45},v3=function(e){return e!=null&&typeof e!="boolean"},Rf=mb(function(t){return I5(t)?t:t.replace(Rb,"-$&").toLowerCase()}),w3=function(e,i){switch(e){case"animation":case"animationName":if(typeof i=="string")return i.replace(Db,function(r,o,l){return kn={name:o,styles:l,next:kn},o})}return Ob[e]!==1&&!I5(e)&&typeof i=="number"&&i!==0?i+"px":i};function so(t,e,i){if(i==null)return"";var r=i;if(r.__emotion_styles!==void 0)return r;switch(typeof i){case"boolean":return"";case"object":{var o=i;if(o.anim===1)return kn={name:o.name,styles:o.styles,next:kn},o.name;var l=i;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)kn={name:u.name,styles:u.styles,next:kn},u=u.next;var d=l.styles+";";return d}return kb(t,e,i)}case"function":{if(t!==void 0){var f=kn,h=i(t);return kn=f,so(t,e,h)}break}}var m=i;return m}function kb(t,e,i){var r="";if(Array.isArray(i))for(var o=0;o<i.length;o++)r+=so(t,e,i[o])+";";else for(var l in i){var u=i[l];if(typeof u!="object"){var d=u;v3(d)&&(r+=Rf(l)+":"+w3(l,d)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&e==null)for(var f=0;f<u.length;f++)v3(u[f])&&(r+=Rf(l)+":"+w3(l,u[f])+";");else{var h=so(t,e,u);switch(l){case"animation":case"animationName":{r+=Rf(l)+":"+h+";";break}default:r+=l+"{"+h+"}"}}}return r}var b3=/label:\s*([^\s;{]+)\s*(;|$)/g,kn;function Dp(t,e,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,o="";kn=void 0;var l=t[0];if(l==null||l.raw===void 0)r=!1,o+=so(i,e,l);else{var u=l;o+=u[0]}for(var d=1;d<t.length;d++)if(o+=so(i,e,t[d]),r){var f=l;o+=f[d]}b3.lastIndex=0;for(var h="",m;(m=b3.exec(o))!==null;)h+="-"+m[1];var y=Lb(o)+h;return{name:y,styles:o,next:kn}}var Hb=function(e){return e()},G5=o3.useInsertionEffect?o3.useInsertionEffect:!1,Vb=G5||Hb,S3=G5||R.useLayoutEffect,q5=R.createContext(typeof HTMLElement<"u"?Cb({key:"css"}):null);q5.Provider;var Y5=function(e){return R.forwardRef(function(i,r){var o=R.useContext(q5);return e(i,o,r)})},F5=R.createContext({}),kp={}.hasOwnProperty,k0="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",zb=function(e,i){var r={};for(var o in i)kp.call(i,o)&&(r[o]=i[o]);return r[k0]=e,r},Pb=function(e){var i=e.cache,r=e.serialized,o=e.isStringTag;return U5(i,r,o),Vb(function(){return _5(i,r,o)}),null},Nb=Y5(function(t,e,i){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var o=t[k0],l=[r],u="";typeof t.className=="string"?u=jb(e.registered,l,t.className):t.className!=null&&(u=t.className+" ");var d=Dp(l,void 0,R.useContext(F5));u+=e.key+"-"+d.name;var f={};for(var h in t)kp.call(t,h)&&h!=="css"&&h!==k0&&(f[h]=t[h]);return f.className=u,i&&(f.ref=i),R.createElement(R.Fragment,null,R.createElement(Pb,{cache:e,serialized:d,isStringTag:typeof o=="string"}),R.createElement(o,f))}),Bb=Nb,C3=function(e,i){var r=arguments;if(i==null||!kp.call(i,"css"))return R.createElement.apply(void 0,r);var o=r.length,l=new Array(o);l[0]=Bb,l[1]=zb(e,i);for(var u=2;u<o;u++)l[u]=r[u];return R.createElement.apply(null,l)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(C3||(C3={}));var $b=Y5(function(t,e){var i=t.styles,r=Dp([i],void 0,R.useContext(F5)),o=R.useRef();return S3(function(){var l=e.key+"-global",u=new e.sheet.constructor({key:l,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),d=!1,f=document.querySelector('style[data-emotion="'+l+" "+r.name+'"]');return e.sheet.tags.length&&(u.before=e.sheet.tags[0]),f!==null&&(d=!0,f.setAttribute("data-emotion",l),u.hydrate([f])),o.current=[u,d],function(){u.flush()}},[e]),S3(function(){var l=o.current,u=l[0],d=l[1];if(d){l[1]=!1;return}if(r.next!==void 0&&_5(e,r.next,!0),u.tags.length){var f=u.tags[u.tags.length-1].nextElementSibling;u.before=f,u.flush()}e.insert("",r,u,!1)},[e,r.name]),null});function Ub(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return Dp(e)}const _b="/assets/Geist-Regular-BCrLS6HJ.ttf",Ib="/assets/Geist-Medium-C6X8vKEc.ttf",Gb="/assets/BebasNeue-Regular-D2CONTwO.ttf",qb="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",Yb=Ub`
  /* Font Awesome */
  @font-face {
    font-family: 'Geist Regular';
    src: url(${_b}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Додано для кращого відображення шрифтів */
  }

  /* Helvetica */
  @font-face {
    font-family: 'Geist Medium';
    src: url(${Ib}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bebas Neue Regular';
    src: url(${Gb}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${qb}) format('truetype');
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
    overflow-x: hidden;
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
`;var Vt=function(){return Vt=Object.assign||function(e){for(var i,r=1,o=arguments.length;r<o;r++){i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},Vt.apply(this,arguments)};function oo(t,e,i){if(i||arguments.length===2)for(var r=0,o=e.length,l;r<o;r++)(l||!(r in e))&&(l||(l=Array.prototype.slice.call(e,0,r)),l[r]=e[r]);return t.concat(l||Array.prototype.slice.call(e))}var $e="-ms-",Xs="-moz-",De="-webkit-",Z5="comm",Kc="rule",Hp="decl",Fb="@import",X5="@keyframes",Zb="@layer",K5=Math.abs,Vp=String.fromCharCode,H0=Object.assign;function Xb(t,e){return ft(t,0)^45?(((e<<2^ft(t,0))<<2^ft(t,1))<<2^ft(t,2))<<2^ft(t,3):0}function W5(t){return t.trim()}function oi(t,e){return(t=e.exec(t))?t[0]:t}function xe(t,e,i){return t.replace(e,i)}function fc(t,e,i){return t.indexOf(e,i)}function ft(t,e){return t.charCodeAt(e)|0}function Tr(t,e,i){return t.slice(e,i)}function Hn(t){return t.length}function Q5(t){return t.length}function Fs(t,e){return e.push(t),t}function Kb(t,e){return t.map(e).join("")}function T3(t,e){return t.filter(function(i){return!oi(i,e)})}var Wc=1,Er=1,J5=0,hn=0,it=0,zr="";function Qc(t,e,i,r,o,l,u,d){return{value:t,root:e,parent:i,type:r,props:o,children:l,line:Wc,column:Er,length:u,return:"",siblings:d}}function Bi(t,e){return H0(Qc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function lr(t){for(;t.root;)t=Bi(t.root,{children:[t]});Fs(t,t.siblings)}function Wb(){return it}function Qb(){return it=hn>0?ft(zr,--hn):0,Er--,it===10&&(Er=1,Wc--),it}function bn(){return it=hn<J5?ft(zr,hn++):0,Er++,it===10&&(Er=1,Wc++),it}function ga(){return ft(zr,hn)}function pc(){return hn}function Jc(t,e){return Tr(zr,t,e)}function V0(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jb(t){return Wc=Er=1,J5=Hn(zr=t),hn=0,[]}function eS(t){return zr="",t}function Df(t){return W5(Jc(hn-1,z0(t===91?t+2:t===40?t+1:t)))}function tS(t){for(;(it=ga())&&it<33;)bn();return V0(t)>2||V0(it)>3?"":" "}function nS(t,e){for(;--e&&bn()&&!(it<48||it>102||it>57&&it<65||it>70&&it<97););return Jc(t,pc()+(e<6&&ga()==32&&bn()==32))}function z0(t){for(;bn();)switch(it){case t:return hn;case 34:case 39:t!==34&&t!==39&&z0(it);break;case 40:t===41&&z0(t);break;case 92:bn();break}return hn}function iS(t,e){for(;bn()&&t+it!==57;)if(t+it===84&&ga()===47)break;return"/*"+Jc(e,hn-1)+"*"+Vp(t===47?t:bn())}function aS(t){for(;!V0(ga());)bn();return Jc(t,hn)}function rS(t){return eS(hc("",null,null,null,[""],t=Jb(t),0,[0],t))}function hc(t,e,i,r,o,l,u,d,f){for(var h=0,m=0,y=u,v=0,S=0,b=0,A=1,O=1,j=1,E=0,T="",D=o,L=l,P=r,V=T;O;)switch(b=E,E=bn()){case 40:if(b!=108&&ft(V,y-1)==58){fc(V+=xe(Df(E),"&","&\f"),"&\f",K5(h?d[h-1]:0))!=-1&&(j=-1);break}case 34:case 39:case 91:V+=Df(E);break;case 9:case 10:case 13:case 32:V+=tS(b);break;case 92:V+=nS(pc()-1,7);continue;case 47:switch(ga()){case 42:case 47:Fs(sS(iS(bn(),pc()),e,i,f),f);break;default:V+="/"}break;case 123*A:d[h++]=Hn(V)*j;case 125*A:case 59:case 0:switch(E){case 0:case 125:O=0;case 59+m:j==-1&&(V=xe(V,/\f/g,"")),S>0&&Hn(V)-y&&Fs(S>32?A3(V+";",r,i,y-1,f):A3(xe(V," ","")+";",r,i,y-2,f),f);break;case 59:V+=";";default:if(Fs(P=E3(V,e,i,h,m,o,d,T,D=[],L=[],y,l),l),E===123)if(m===0)hc(V,e,P,P,D,l,y,d,L);else switch(v===99&&ft(V,3)===110?100:v){case 100:case 108:case 109:case 115:hc(t,P,P,r&&Fs(E3(t,P,P,0,0,o,d,T,o,D=[],y,L),L),o,L,y,d,r?D:L);break;default:hc(V,P,P,P,[""],L,0,d,L)}}h=m=S=0,A=j=1,T=V="",y=u;break;case 58:y=1+Hn(V),S=b;default:if(A<1){if(E==123)--A;else if(E==125&&A++==0&&Qb()==125)continue}switch(V+=Vp(E),E*A){case 38:j=m>0?1:(V+="\f",-1);break;case 44:d[h++]=(Hn(V)-1)*j,j=1;break;case 64:ga()===45&&(V+=Df(bn())),v=ga(),m=y=Hn(T=V+=aS(pc())),E++;break;case 45:b===45&&Hn(V)==2&&(A=0)}}return l}function E3(t,e,i,r,o,l,u,d,f,h,m,y){for(var v=o-1,S=o===0?l:[""],b=Q5(S),A=0,O=0,j=0;A<r;++A)for(var E=0,T=Tr(t,v+1,v=K5(O=u[A])),D=t;E<b;++E)(D=W5(O>0?S[E]+" "+T:xe(T,/&\f/g,S[E])))&&(f[j++]=D);return Qc(t,e,i,o===0?Kc:d,f,h,m,y)}function sS(t,e,i,r){return Qc(t,e,i,Z5,Vp(Wb()),Tr(t,2,-2),0,r)}function A3(t,e,i,r,o){return Qc(t,e,i,Hp,Tr(t,0,r),Tr(t,r+1,-1),r,o)}function e6(t,e,i){switch(Xb(t,e)){case 5103:return De+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return De+t+t;case 4789:return Xs+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return De+t+Xs+t+$e+t+t;case 5936:switch(ft(t,e+11)){case 114:return De+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return De+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return De+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return De+t+$e+t+t;case 6165:return De+t+$e+"flex-"+t+t;case 5187:return De+t+xe(t,/(\w+).+(:[^]+)/,De+"box-$1$2"+$e+"flex-$1$2")+t;case 5443:return De+t+$e+"flex-item-"+xe(t,/flex-|-self/g,"")+(oi(t,/flex-|baseline/)?"":$e+"grid-row-"+xe(t,/flex-|-self/g,""))+t;case 4675:return De+t+$e+"flex-line-pack"+xe(t,/align-content|flex-|-self/g,"")+t;case 5548:return De+t+$e+xe(t,"shrink","negative")+t;case 5292:return De+t+$e+xe(t,"basis","preferred-size")+t;case 6060:return De+"box-"+xe(t,"-grow","")+De+t+$e+xe(t,"grow","positive")+t;case 4554:return De+xe(t,/([^-])(transform)/g,"$1"+De+"$2")+t;case 6187:return xe(xe(xe(t,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),t,"")+t;case 5495:case 3959:return xe(t,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return xe(xe(t,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+$e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+De+t+t;case 4200:if(!oi(t,/flex-|baseline/))return $e+"grid-column-align"+Tr(t,e)+t;break;case 2592:case 3360:return $e+xe(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(r,o){return e=o,oi(r.props,/grid-\w+-end/)})?~fc(t+(i=i[e].value),"span",0)?t:$e+xe(t,"-start","")+t+$e+"grid-row-span:"+(~fc(i,"span",0)?oi(i,/\d+/):+oi(i,/\d+/)-+oi(t,/\d+/))+";":$e+xe(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(r){return oi(r.props,/grid-\w+-start/)})?t:$e+xe(xe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return xe(t,/(.+)-inline(.+)/,De+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hn(t)-1-e>6)switch(ft(t,e+1)){case 109:if(ft(t,e+4)!==45)break;case 102:return xe(t,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+Xs+(ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~fc(t,"stretch",0)?e6(xe(t,"stretch","fill-available"),e,i)+t:t}break;case 5152:case 5920:return xe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,u,d,f,h){return $e+o+":"+l+h+(u?$e+o+"-span:"+(d?f:+f-+l)+h:"")+t});case 4949:if(ft(t,e+6)===121)return xe(t,":",":"+De)+t;break;case 6444:switch(ft(t,ft(t,14)===45?18:11)){case 120:return xe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+De+(ft(t,14)===45?"inline-":"")+"box$3$1"+De+"$2$3$1"+$e+"$2box$3")+t;case 100:return xe(t,":",":"+$e)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return xe(t,"scroll-","scroll-snap-")+t}return t}function Tc(t,e){for(var i="",r=0;r<t.length;r++)i+=e(t[r],r,t,e)||"";return i}function oS(t,e,i,r){switch(t.type){case Zb:if(t.children.length)break;case Fb:case Hp:return t.return=t.return||t.value;case Z5:return"";case X5:return t.return=t.value+"{"+Tc(t.children,r)+"}";case Kc:if(!Hn(t.value=t.props.join(",")))return""}return Hn(i=Tc(t.children,r))?t.return=t.value+"{"+i+"}":""}function lS(t){var e=Q5(t);return function(i,r,o,l){for(var u="",d=0;d<e;d++)u+=t[d](i,r,o,l)||"";return u}}function cS(t){return function(e){e.root||(e=e.return)&&t(e)}}function uS(t,e,i,r){if(t.length>-1&&!t.return)switch(t.type){case Hp:t.return=e6(t.value,t.length,i);return;case X5:return Tc([Bi(t,{value:xe(t.value,"@","@"+De)})],r);case Kc:if(t.length)return Kb(i=t.props,function(o){switch(oi(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lr(Bi(t,{props:[xe(o,/:(read-\w+)/,":"+Xs+"$1")]})),lr(Bi(t,{props:[o]})),H0(t,{props:T3(i,r)});break;case"::placeholder":lr(Bi(t,{props:[xe(o,/:(plac\w+)/,":"+De+"input-$1")]})),lr(Bi(t,{props:[xe(o,/:(plac\w+)/,":"+Xs+"$1")]})),lr(Bi(t,{props:[xe(o,/:(plac\w+)/,$e+"input-$1")]})),lr(Bi(t,{props:[o]})),H0(t,{props:T3(i,r)});break}return""})}}var dS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zt={},Ar=typeof process<"u"&&Zt!==void 0&&(Zt.REACT_APP_SC_ATTR||Zt.SC_ATTR)||"data-styled",t6="active",n6="data-styled-version",eu="6.1.19",zp=`/*!sc*/
`,Ec=typeof window<"u"&&typeof document<"u",fS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Zt!==void 0&&Zt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Zt.REACT_APP_SC_DISABLE_SPEEDY!==""?Zt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Zt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Zt!==void 0&&Zt.SC_DISABLE_SPEEDY!==void 0&&Zt.SC_DISABLE_SPEEDY!==""&&Zt.SC_DISABLE_SPEEDY!=="false"&&Zt.SC_DISABLE_SPEEDY),tu=Object.freeze([]),Mr=Object.freeze({});function pS(t,e,i){return i===void 0&&(i=Mr),t.theme!==i.theme&&t.theme||e||i.theme}var i6=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mS=/(^-|-$)/g;function M3(t){return t.replace(hS,"-").replace(mS,"")}var gS=/(a)(d)/gi,Il=52,j3=function(t){return String.fromCharCode(t+(t>25?39:97))};function P0(t){var e,i="";for(e=Math.abs(t);e>Il;e=e/Il|0)i=j3(e%Il)+i;return(j3(e%Il)+i).replace(gS,"$1-$2")}var kf,a6=5381,hr=function(t,e){for(var i=e.length;i;)t=33*t^e.charCodeAt(--i);return t},r6=function(t){return hr(a6,t)};function s6(t){return P0(r6(t)>>>0)}function xS(t){return t.displayName||t.name||"Component"}function Hf(t){return typeof t=="string"&&!0}var o6=typeof Symbol=="function"&&Symbol.for,l6=o6?Symbol.for("react.memo"):60115,yS=o6?Symbol.for("react.forward_ref"):60112,vS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c6={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bS=((kf={})[yS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kf[l6]=c6,kf);function L3(t){return("type"in(e=t)&&e.type.$$typeof)===l6?c6:"$$typeof"in t?bS[t.$$typeof]:vS;var e}var SS=Object.defineProperty,CS=Object.getOwnPropertyNames,O3=Object.getOwnPropertySymbols,TS=Object.getOwnPropertyDescriptor,ES=Object.getPrototypeOf,R3=Object.prototype;function u6(t,e,i){if(typeof e!="string"){if(R3){var r=ES(e);r&&r!==R3&&u6(t,r,i)}var o=CS(e);O3&&(o=o.concat(O3(e)));for(var l=L3(t),u=L3(e),d=0;d<o.length;++d){var f=o[d];if(!(f in wS||i&&i[f]||u&&f in u||l&&f in l)){var h=TS(e,f);try{SS(t,f,h)}catch{}}}}return t}function jr(t){return typeof t=="function"}function Pp(t){return typeof t=="object"&&"styledComponentId"in t}function pa(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function N0(t,e){if(t.length===0)return"";for(var i=t[0],r=1;r<t.length;r++)i+=t[r];return i}function lo(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function B0(t,e,i){if(i===void 0&&(i=!1),!i&&!lo(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=B0(t[r],e[r]);else if(lo(e))for(var r in e)t[r]=B0(t[r],e[r]);return t}function Np(t,e){Object.defineProperty(t,"toString",{value:e})}function bo(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var AS=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var i=0,r=0;r<e;r++)i+=this.groupSizes[r];return i},t.prototype.insertRules=function(e,i){if(e>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;e>=l;)if((l<<=1)<0)throw bo(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),f=(u=0,i.length);u<f;u++)this.tag.insertRule(d,i[u])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var i=this.groupSizes[e],r=this.indexOfGroup(e),o=r+i;this.groupSizes[e]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var i="";if(e>=this.length||this.groupSizes[e]===0)return i;for(var r=this.groupSizes[e],o=this.indexOfGroup(e),l=o+r,u=o;u<l;u++)i+="".concat(this.tag.getRule(u)).concat(zp);return i},t}(),mc=new Map,Ac=new Map,gc=1,Gl=function(t){if(mc.has(t))return mc.get(t);for(;Ac.has(gc);)gc++;var e=gc++;return mc.set(t,e),Ac.set(e,t),e},MS=function(t,e){gc=e+1,mc.set(t,e),Ac.set(e,t)},jS="style[".concat(Ar,"][").concat(n6,'="').concat(eu,'"]'),LS=new RegExp("^".concat(Ar,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),OS=function(t,e,i){for(var r,o=i.split(","),l=0,u=o.length;l<u;l++)(r=o[l])&&t.registerName(e,r)},RS=function(t,e){for(var i,r=((i=e.textContent)!==null&&i!==void 0?i:"").split(zp),o=[],l=0,u=r.length;l<u;l++){var d=r[l].trim();if(d){var f=d.match(LS);if(f){var h=0|parseInt(f[1],10),m=f[2];h!==0&&(MS(m,h),OS(t,m,f[3]),t.getTag().insertRules(h,o)),o.length=0}else o.push(d)}}},D3=function(t){for(var e=document.querySelectorAll(jS),i=0,r=e.length;i<r;i++){var o=e[i];o&&o.getAttribute(Ar)!==t6&&(RS(t,o),o.parentNode&&o.parentNode.removeChild(o))}};function DS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var d6=function(t){var e=document.head,i=t||e,r=document.createElement("style"),o=function(d){var f=Array.from(d.querySelectorAll("style[".concat(Ar,"]")));return f[f.length-1]}(i),l=o!==void 0?o.nextSibling:null;r.setAttribute(Ar,t6),r.setAttribute(n6,eu);var u=DS();return u&&r.setAttribute("nonce",u),i.insertBefore(r,l),r},kS=function(){function t(e){this.element=d6(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var u=r[o];if(u.ownerNode===i)return u}throw bo(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,i){try{return this.sheet.insertRule(i,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var i=this.sheet.cssRules[e];return i&&i.cssText?i.cssText:""},t}(),HS=function(){function t(e){this.element=d6(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,i){if(e<=this.length&&e>=0){var r=document.createTextNode(i);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),VS=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,i){return e<=this.length&&(this.rules.splice(e,0,i),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),k3=Ec,zS={isServer:!Ec,useCSSOMInjection:!fS},f6=function(){function t(e,i,r){e===void 0&&(e=Mr),i===void 0&&(i={});var o=this;this.options=Vt(Vt({},zS),e),this.gs=i,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Ec&&k3&&(k3=!1,D3(this)),Np(this,function(){return function(l){for(var u=l.getTag(),d=u.length,f="",h=function(y){var v=function(j){return Ac.get(j)}(y);if(v===void 0)return"continue";var S=l.names.get(v),b=u.getGroup(y);if(S===void 0||!S.size||b.length===0)return"continue";var A="".concat(Ar,".g").concat(y,'[id="').concat(v,'"]'),O="";S!==void 0&&S.forEach(function(j){j.length>0&&(O+="".concat(j,","))}),f+="".concat(b).concat(A,'{content:"').concat(O,'"}').concat(zp)},m=0;m<d;m++)h(m);return f}(o)})}return t.registerId=function(e){return Gl(e)},t.prototype.rehydrate=function(){!this.server&&Ec&&D3(this)},t.prototype.reconstructWithOptions=function(e,i){return i===void 0&&(i=!0),new t(Vt(Vt({},this.options),e),this.gs,i&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(i){var r=i.useCSSOMInjection,o=i.target;return i.isServer?new VS(o):r?new kS(o):new HS(o)}(this.options),new AS(e)));var e},t.prototype.hasNameForId=function(e,i){return this.names.has(e)&&this.names.get(e).has(i)},t.prototype.registerName=function(e,i){if(Gl(e),this.names.has(e))this.names.get(e).add(i);else{var r=new Set;r.add(i),this.names.set(e,r)}},t.prototype.insertRules=function(e,i,r){this.registerName(e,i),this.getTag().insertRules(Gl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Gl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),PS=/&/g,NS=/^\s*\/\/.*$/gm;function p6(t,e){return t.map(function(i){return i.type==="rule"&&(i.value="".concat(e," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(e," ")),i.props=i.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=p6(i.children,e)),i})}function BS(t){var e,i,r,o=Mr,l=o.options,u=l===void 0?Mr:l,d=o.plugins,f=d===void 0?tu:d,h=function(v,S,b){return b.startsWith(i)&&b.endsWith(i)&&b.replaceAll(i,"").length>0?".".concat(e):v},m=f.slice();m.push(function(v){v.type===Kc&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(PS,i).replace(r,h))}),u.prefix&&m.push(uS),m.push(oS);var y=function(v,S,b,A){S===void 0&&(S=""),b===void 0&&(b=""),A===void 0&&(A="&"),e=A,i=S,r=new RegExp("\\".concat(i,"\\b"),"g");var O=v.replace(NS,""),j=rS(b||S?"".concat(b," ").concat(S," { ").concat(O," }"):O);u.namespace&&(j=p6(j,u.namespace));var E=[];return Tc(j,lS(m.concat(cS(function(T){return E.push(T)})))),E};return y.hash=f.length?f.reduce(function(v,S){return S.name||bo(15),hr(v,S.name)},a6).toString():"",y}var $S=new f6,$0=BS(),h6=Le.createContext({shouldForwardProp:void 0,styleSheet:$S,stylis:$0});h6.Consumer;Le.createContext(void 0);function H3(){return R.useContext(h6)}var m6=function(){function t(e,i){var r=this;this.inject=function(o,l){l===void 0&&(l=$0);var u=r.name+l.hash;o.hasNameForId(r.id,u)||o.insertRules(r.id,u,l(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=i,Np(this,function(){throw bo(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=$0),this.name+e.hash},t}(),US=function(t){return t>="A"&&t<="Z"};function V3(t){for(var e="",i=0;i<t.length;i++){var r=t[i];if(i===1&&r==="-"&&t[0]==="-")return t;US(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var g6=function(t){return t==null||t===!1||t===""},x6=function(t){var e,i,r=[];for(var o in t){var l=t[o];t.hasOwnProperty(o)&&!g6(l)&&(Array.isArray(l)&&l.isCss||jr(l)?r.push("".concat(V3(o),":"),l,";"):lo(l)?r.push.apply(r,oo(oo(["".concat(o," {")],x6(l),!1),["}"],!1)):r.push("".concat(V3(o),": ").concat((e=o,(i=l)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||e in dS||e.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return r};function xa(t,e,i,r){if(g6(t))return[];if(Pp(t))return[".".concat(t.styledComponentId)];if(jr(t)){if(!jr(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var o=t(e);return xa(o,e,i,r)}var l;return t instanceof m6?i?(t.inject(i,r),[t.getName(r)]):[t]:lo(t)?x6(t):Array.isArray(t)?Array.prototype.concat.apply(tu,t.map(function(u){return xa(u,e,i,r)})):[t.toString()]}function _S(t){for(var e=0;e<t.length;e+=1){var i=t[e];if(jr(i)&&!Pp(i))return!1}return!0}var IS=r6(eu),GS=function(){function t(e,i,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_S(e),this.componentId=i,this.baseHash=hr(IS,i),this.baseStyle=r,f6.registerId(i)}return t.prototype.generateAndInjectStyles=function(e,i,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,i,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=pa(o,this.staticRulesId);else{var l=N0(xa(this.rules,e,i,r)),u=P0(hr(this.baseHash,l)>>>0);if(!i.hasNameForId(this.componentId,u)){var d=r(l,".".concat(u),void 0,this.componentId);i.insertRules(this.componentId,u,d)}o=pa(o,u),this.staticRulesId=u}else{for(var f=hr(this.baseHash,r.hash),h="",m=0;m<this.rules.length;m++){var y=this.rules[m];if(typeof y=="string")h+=y;else if(y){var v=N0(xa(y,e,i,r));f=hr(f,v+m),h+=v}}if(h){var S=P0(f>>>0);i.hasNameForId(this.componentId,S)||i.insertRules(this.componentId,S,r(h,".".concat(S),void 0,this.componentId)),o=pa(o,S)}}return o},t}(),y6=Le.createContext(void 0);y6.Consumer;var Vf={};function qS(t,e,i){var r=Pp(t),o=t,l=!Hf(t),u=e.attrs,d=u===void 0?tu:u,f=e.componentId,h=f===void 0?function(D,L){var P=typeof D!="string"?"sc":M3(D);Vf[P]=(Vf[P]||0)+1;var V="".concat(P,"-").concat(s6(eu+P+Vf[P]));return L?"".concat(L,"-").concat(V):V}(e.displayName,e.parentComponentId):f,m=e.displayName,y=m===void 0?function(D){return Hf(D)?"styled.".concat(D):"Styled(".concat(xS(D),")")}(t):m,v=e.displayName&&e.componentId?"".concat(M3(e.displayName),"-").concat(e.componentId):e.componentId||h,S=r&&o.attrs?o.attrs.concat(d).filter(Boolean):d,b=e.shouldForwardProp;if(r&&o.shouldForwardProp){var A=o.shouldForwardProp;if(e.shouldForwardProp){var O=e.shouldForwardProp;b=function(D,L){return A(D,L)&&O(D,L)}}else b=A}var j=new GS(i,v,r?o.componentStyle:void 0);function E(D,L){return function(P,V,U){var $=P.attrs,Y=P.componentStyle,F=P.defaultProps,te=P.foldedComponentIds,ie=P.styledComponentId,oe=P.target,re=Le.useContext(y6),B=H3(),K=P.shouldForwardProp||B.shouldForwardProp,W=pS(V,re,F)||Mr,ee=function(we,de,st){for(var Oe,vt=Vt(Vt({},de),{className:void 0,theme:st}),Yi=0;Yi<we.length;Yi+=1){var _n=jr(Oe=we[Yi])?Oe(vt):Oe;for(var Jt in _n)vt[Jt]=Jt==="className"?pa(vt[Jt],_n[Jt]):Jt==="style"?Vt(Vt({},vt[Jt]),_n[Jt]):_n[Jt]}return de.className&&(vt.className=pa(vt.className,de.className)),vt}($,V,W),k=ee.as||oe,Z={};for(var ne in ee)ee[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&ee.theme===W||(ne==="forwardedAs"?Z.as=ee.forwardedAs:K&&!K(ne,k)||(Z[ne]=ee[ne]));var ae=function(we,de){var st=H3(),Oe=we.generateAndInjectStyles(de,st.styleSheet,st.stylis);return Oe}(Y,ee),ce=pa(te,ie);return ae&&(ce+=" "+ae),ee.className&&(ce+=" "+ee.className),Z[Hf(k)&&!i6.has(k)?"class":"className"]=ce,U&&(Z.ref=U),R.createElement(k,Z)}(T,D,L)}E.displayName=y;var T=Le.forwardRef(E);return T.attrs=S,T.componentStyle=j,T.displayName=y,T.shouldForwardProp=b,T.foldedComponentIds=r?pa(o.foldedComponentIds,o.styledComponentId):"",T.styledComponentId=v,T.target=r?o.target:t,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=r?function(L){for(var P=[],V=1;V<arguments.length;V++)P[V-1]=arguments[V];for(var U=0,$=P;U<$.length;U++)B0(L,$[U],!0);return L}({},o.defaultProps,D):D}}),Np(T,function(){return".".concat(T.styledComponentId)}),l&&u6(T,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function z3(t,e){for(var i=[t[0]],r=0,o=e.length;r<o;r+=1)i.push(e[r],t[r+1]);return i}var P3=function(t){return Object.assign(t,{isCss:!0})};function Pr(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(jr(t)||lo(t))return P3(xa(z3(tu,oo([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?xa(r):P3(xa(z3(r,e)))}function U0(t,e,i){if(i===void 0&&(i=Mr),!e)throw bo(1,e);var r=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return t(e,i,Pr.apply(void 0,oo([o],l,!1)))};return r.attrs=function(o){return U0(t,e,Vt(Vt({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return U0(t,e,Vt(Vt({},i),o))},r}var v6=function(t){return U0(qS,t)},C=v6;i6.forEach(function(t){C[t]=v6(t)});function So(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var r=N0(Pr.apply(void 0,oo([t],e,!1))),o=s6(r);return new m6(o,r)}const YS=C.nav`
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
  ${({$isScrolled:t})=>t&&Pr`
      background: rgba(0, 0, 0, 0.39);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    `}
  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`,FS=C.div`
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
`,ZS=C(En)`
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
`,XS=C.ul`
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
`,Is=C(En)`
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
`,N3=C.div`
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
`,Pi=C.span`
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
`,KS=C.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,w6=C.button`
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
`;var Yl={},B3;function WS(){if(B3)return Yl;B3=1,Yl.match=l,Yl.parse=u;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,e=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,r=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function l(m,y){return u(m).some(function(v){var S=v.inverse,b=v.type==="all"||y.type===v.type;if(b&&S||!(b||S))return!1;var A=v.expressions.every(function(O){var j=O.feature,E=O.modifier,T=O.value,D=y[j];if(!D)return!1;switch(j){case"orientation":case"scan":return D.toLowerCase()===T.toLowerCase();case"width":case"height":case"device-width":case"device-height":T=h(T),D=h(D);break;case"resolution":T=f(T),D=f(D);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":T=d(T),D=d(D);break;case"grid":case"color":case"color-index":case"monochrome":T=parseInt(T,10)||1,D=parseInt(D,10)||0;break}switch(E){case"min":return D>=T;case"max":return D<=T;default:return D===T}});return A&&!S||!A&&S})}function u(m){return m.split(",").map(function(y){y=y.trim();var v=y.match(t),S=v[1],b=v[2],A=v[3]||"",O={};return O.inverse=!!S&&S.toLowerCase()==="not",O.type=b?b.toLowerCase():"all",A=A.match(/\([^\)]+\)/g)||[],O.expressions=A.map(function(j){var E=j.match(e),T=E[1].toLowerCase().match(i);return{modifier:T[1],feature:T[2],value:E[2]}}),O})}function d(m){var y=Number(m),v;return y||(v=m.match(/^(\d+)\s*\/\s*(\d+)$/),y=v[1]/v[2]),y}function f(m){var y=parseFloat(m),v=String(m).match(o)[1];switch(v){case"dpcm":return y/2.54;case"dppx":return y*96;default:return y}}function h(m){var y=parseFloat(m),v=String(m).match(r)[1];switch(v){case"em":return y*16;case"rem":return y*16;case"cm":return y*96/2.54;case"mm":return y*96/2.54/10;case"in":return y*96;case"pt":return y*72;case"pc":return y*72/12;default:return y}}return Yl}var zf,$3;function QS(){if($3)return zf;$3=1;var t=WS().match,e=typeof window<"u"?window.matchMedia:null;function i(o,l,u){var d=this,f;e&&!u&&(f=e.call(window,o)),f?(this.matches=f.matches,this.media=f.media,f.addListener(y)):(this.matches=t(o,l),this.media=o),this.addListener=h,this.removeListener=m,this.dispose=v;function h(S){f&&f.addListener(S)}function m(S){f&&f.removeListener(S)}function y(S){d.matches=S.matches,d.media=S.media}function v(){f&&f.removeListener(y)}}function r(o,l,u){return new i(o,l,u)}return zf=r,zf}var JS=QS();const eC=Gc(JS);var tC=/[A-Z]/g,nC=/^ms-/,Pf={};function iC(t){return"-"+t.toLowerCase()}function b6(t){if(Pf.hasOwnProperty(t))return Pf[t];var e=t.replace(tC,iC);return Pf[t]=nC.test(e)?"-"+e:e}function aC(t,e){if(t===e)return!0;if(!t||!e)return!1;const i=Object.keys(t),r=Object.keys(e),o=i.length;if(r.length!==o)return!1;for(let l=0;l<o;l++){const u=i[l];if(t[u]!==e[u]||!Object.prototype.hasOwnProperty.call(e,u))return!1}return!0}var Nf={exports:{}},Bf,U3;function rC(){if(U3)return Bf;U3=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Bf=t,Bf}var $f,_3;function sC(){if(_3)return $f;_3=1;var t=rC();function e(){}function i(){}return i.resetWarningCache=e,$f=function(){function r(u,d,f,h,m,y){if(y!==t){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function o(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:e};return l.PropTypes=l,l},$f}var I3;function oC(){return I3||(I3=1,Nf.exports=sC()()),Nf.exports}var lC=oC();const je=Gc(lC),jt=je.oneOfType([je.string,je.number]),S6={all:je.bool,grid:je.bool,aural:je.bool,braille:je.bool,handheld:je.bool,print:je.bool,projection:je.bool,screen:je.bool,tty:je.bool,tv:je.bool,embossed:je.bool},cC={orientation:je.oneOf(["portrait","landscape"]),scan:je.oneOf(["progressive","interlace"]),aspectRatio:je.string,deviceAspectRatio:je.string,height:jt,deviceHeight:jt,width:jt,deviceWidth:jt,color:je.bool,colorIndex:je.bool,monochrome:je.bool,resolution:jt,type:Object.keys(S6)},{type:Xz,...uC}=cC,dC={minAspectRatio:je.string,maxAspectRatio:je.string,minDeviceAspectRatio:je.string,maxDeviceAspectRatio:je.string,minHeight:jt,maxHeight:jt,minDeviceHeight:jt,maxDeviceHeight:jt,minWidth:jt,maxWidth:jt,minDeviceWidth:jt,maxDeviceWidth:jt,minColor:je.number,maxColor:je.number,minColorIndex:je.number,maxColorIndex:je.number,minMonochrome:je.number,maxMonochrome:je.number,minResolution:jt,maxResolution:jt,...uC},fC={...S6,...dC};var pC={all:fC};const hC=t=>`not ${t}`,mC=(t,e)=>{const i=b6(t);return typeof e=="number"&&(e=`${e}px`),e===!0?i:e===!1?hC(i):`(${i}: ${e})`},gC=t=>t.join(" and "),xC=t=>{const e=[];return Object.keys(pC.all).forEach(i=>{const r=t[i];r!=null&&e.push(mC(i,r))}),gC(e)},yC=R.createContext(void 0),vC=t=>t.query||xC(t),G3=t=>t?Object.keys(t).reduce((i,r)=>(i[b6(r)]=t[r],i),{}):void 0,C6=()=>{const t=R.useRef(!1);return R.useEffect(()=>{t.current=!0},[]),t.current},wC=t=>{const e=R.useContext(yC),i=()=>G3(t)||G3(e),[r,o]=R.useState(i);return R.useEffect(()=>{const l=i();aC(r,l)||o(l)},[t,e]),r},bC=t=>{const e=()=>vC(t),[i,r]=R.useState(e);return R.useEffect(()=>{const o=e();i!==o&&r(o)},[t]),i},SC=(t,e)=>{const i=()=>eC(t,e||{},!!e),[r,o]=R.useState(i),l=C6();return R.useEffect(()=>{if(l){const u=i();return o(u),()=>{u&&u.dispose()}}},[t,e]),r},CC=t=>{const[e,i]=R.useState(t.matches);return R.useEffect(()=>{const r=o=>{i(o.matches)};return t.addListener(r),i(t.matches),()=>{t.removeListener(r)}},[t]),e},Ue=(t,e,i)=>{const r=wC(e),o=bC(t);if(!o)throw new Error("Invalid or missing MediaQuery!");const l=SC(o,r),u=CC(l);return C6(),R.useEffect(()=>{},[u]),R.useEffect(()=>()=>{l&&l.dispose()},[]),u},Bp=R.createContext({});function $p(t){const e=R.useRef(null);return e.current===null&&(e.current=t()),e.current}const Up=typeof window<"u",T6=Up?R.useLayoutEffect:R.useEffect,nu=R.createContext(null);function _p(t,e){t.indexOf(e)===-1&&t.push(e)}function Ip(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}const di=(t,e,i)=>i>e?e:i<t?t:i;let Gp=()=>{};const fi={},E6=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function A6(t){return typeof t=="object"&&t!==null}const M6=t=>/^0[^.\s]+$/u.test(t);function qp(t){let e;return()=>(e===void 0&&(e=t()),e)}const fn=t=>t,TC=(t,e)=>i=>e(t(i)),Co=(...t)=>t.reduce(TC),co=(t,e,i)=>{const r=e-t;return r===0?1:(i-t)/r};class Yp{constructor(){this.subscriptions=[]}add(e){return _p(this.subscriptions,e),()=>Ip(this.subscriptions,e)}notify(e,i,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,i,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,i,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Nn=t=>t*1e3,Bn=t=>t/1e3;function j6(t,e){return e?t*(1e3/e):0}const L6=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,EC=1e-7,AC=12;function MC(t,e,i,r,o){let l,u,d=0;do u=e+(i-e)/2,l=L6(u,r,o)-t,l>0?i=u:e=u;while(Math.abs(l)>EC&&++d<AC);return u}function To(t,e,i,r){if(t===e&&i===r)return fn;const o=l=>MC(l,0,1,t,i);return l=>l===0||l===1?l:L6(o(l),e,r)}const O6=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,R6=t=>e=>1-t(1-e),D6=To(.33,1.53,.69,.99),Fp=R6(D6),k6=O6(Fp),H6=t=>(t*=2)<1?.5*Fp(t):.5*(2-Math.pow(2,-10*(t-1))),Zp=t=>1-Math.sin(Math.acos(t)),V6=R6(Zp),z6=O6(Zp),jC=To(.42,0,1,1),LC=To(0,0,.58,1),P6=To(.42,0,.58,1),OC=t=>Array.isArray(t)&&typeof t[0]!="number",N6=t=>Array.isArray(t)&&typeof t[0]=="number",RC={linear:fn,easeIn:jC,easeInOut:P6,easeOut:LC,circIn:Zp,circInOut:z6,circOut:V6,backIn:Fp,backInOut:k6,backOut:D6,anticipate:H6},DC=t=>typeof t=="string",q3=t=>{if(N6(t)){Gp(t.length===4);const[e,i,r,o]=t;return To(e,i,r,o)}else if(DC(t))return RC[t];return t},Fl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function kC(t,e){let i=new Set,r=new Set,o=!1,l=!1;const u=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function f(m){u.has(m)&&(h.schedule(m),t()),m(d)}const h={schedule:(m,y=!1,v=!1)=>{const b=v&&o?i:r;return y&&u.add(m),b.has(m)||b.add(m),m},cancel:m=>{r.delete(m),u.delete(m)},process:m=>{if(d=m,o){l=!0;return}o=!0,[i,r]=[r,i],i.forEach(f),i.clear(),o=!1,l&&(l=!1,h.process(m))}};return h}const HC=40;function B6(t,e){let i=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>i=!0,u=Fl.reduce((T,D)=>(T[D]=kC(l),T),{}),{setup:d,read:f,resolveKeyframes:h,preUpdate:m,update:y,preRender:v,render:S,postRender:b}=u,A=()=>{const T=fi.useManualTiming?o.timestamp:performance.now();i=!1,fi.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(T-o.timestamp,HC),1)),o.timestamp=T,o.isProcessing=!0,d.process(o),f.process(o),h.process(o),m.process(o),y.process(o),v.process(o),S.process(o),b.process(o),o.isProcessing=!1,i&&e&&(r=!1,t(A))},O=()=>{i=!0,r=!0,o.isProcessing||t(A)};return{schedule:Fl.reduce((T,D)=>{const L=u[D];return T[D]=(P,V=!1,U=!1)=>(i||O(),L.schedule(P,V,U)),T},{}),cancel:T=>{for(let D=0;D<Fl.length;D++)u[Fl[D]].cancel(T)},state:o,steps:u}}const{schedule:Ie,cancel:_i,state:xt,steps:Uf}=B6(typeof requestAnimationFrame<"u"?requestAnimationFrame:fn,!0);let xc;function VC(){xc=void 0}const zt={now:()=>(xc===void 0&&zt.set(xt.isProcessing||fi.useManualTiming?xt.timestamp:performance.now()),xc),set:t=>{xc=t,queueMicrotask(VC)}},$6=t=>e=>typeof e=="string"&&e.startsWith(t),Xp=$6("--"),zC=$6("var(--"),Kp=t=>zC(t)?PC.test(t.split("/*")[0].trim()):!1,PC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Nr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},uo={...Nr,transform:t=>di(0,1,t)},Zl={...Nr,default:1},Ks=t=>Math.round(t*1e5)/1e5,Wp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function NC(t){return t==null}const BC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Qp=(t,e)=>i=>!!(typeof i=="string"&&BC.test(i)&&i.startsWith(t)||e&&!NC(i)&&Object.prototype.hasOwnProperty.call(i,e)),U6=(t,e,i)=>r=>{if(typeof r!="string")return r;const[o,l,u,d]=r.match(Wp);return{[t]:parseFloat(o),[e]:parseFloat(l),[i]:parseFloat(u),alpha:d!==void 0?parseFloat(d):1}},$C=t=>di(0,255,t),_f={...Nr,transform:t=>Math.round($C(t))},ha={test:Qp("rgb","red"),parse:U6("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:r=1})=>"rgba("+_f.transform(t)+", "+_f.transform(e)+", "+_f.transform(i)+", "+Ks(uo.transform(r))+")"};function UC(t){let e="",i="",r="",o="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),r=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),r=t.substring(3,4),o=t.substring(4,5),e+=e,i+=i,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const _0={test:Qp("#"),parse:UC,transform:ha.transform},Eo=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),$i=Eo("deg"),$n=Eo("%"),he=Eo("px"),_C=Eo("vh"),IC=Eo("vw"),Y3={...$n,parse:t=>$n.parse(t)/100,transform:t=>$n.transform(t*100)},mr={test:Qp("hsl","hue"),parse:U6("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:r=1})=>"hsla("+Math.round(t)+", "+$n.transform(Ks(e))+", "+$n.transform(Ks(i))+", "+Ks(uo.transform(r))+")"},tt={test:t=>ha.test(t)||_0.test(t)||mr.test(t),parse:t=>ha.test(t)?ha.parse(t):mr.test(t)?mr.parse(t):_0.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ha.transform(t):mr.transform(t),getAnimatableNone:t=>{const e=tt.parse(t);return e.alpha=0,tt.transform(e)}},GC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function qC(t){var e,i;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Wp))==null?void 0:e.length)||0)+(((i=t.match(GC))==null?void 0:i.length)||0)>0}const _6="number",I6="color",YC="var",FC="var(",F3="${}",ZC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function fo(t){const e=t.toString(),i=[],r={color:[],number:[],var:[]},o=[];let l=0;const d=e.replace(ZC,f=>(tt.test(f)?(r.color.push(l),o.push(I6),i.push(tt.parse(f))):f.startsWith(FC)?(r.var.push(l),o.push(YC),i.push(f)):(r.number.push(l),o.push(_6),i.push(parseFloat(f))),++l,F3)).split(F3);return{values:i,split:d,indexes:r,types:o}}function G6(t){return fo(t).values}function q6(t){const{split:e,types:i}=fo(t),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const d=i[u];d===_6?l+=Ks(o[u]):d===I6?l+=tt.transform(o[u]):l+=o[u]}return l}}const XC=t=>typeof t=="number"?0:tt.test(t)?tt.getAnimatableNone(t):t;function KC(t){const e=G6(t);return q6(t)(e.map(XC))}const Ii={test:qC,parse:G6,createTransformer:q6,getAnimatableNone:KC};function If(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function WC({hue:t,saturation:e,lightness:i,alpha:r}){t/=360,e/=100,i/=100;let o=0,l=0,u=0;if(!e)o=l=u=i;else{const d=i<.5?i*(1+e):i+e-i*e,f=2*i-d;o=If(f,d,t+1/3),l=If(f,d,t),u=If(f,d,t-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Mc(t,e){return i=>i>0?e:t}const Ye=(t,e,i)=>t+(e-t)*i,Gf=(t,e,i)=>{const r=t*t,o=i*(e*e-r)+r;return o<0?0:Math.sqrt(o)},QC=[_0,ha,mr],JC=t=>QC.find(e=>e.test(t));function Z3(t){const e=JC(t);if(!e)return!1;let i=e.parse(t);return e===mr&&(i=WC(i)),i}const X3=(t,e)=>{const i=Z3(t),r=Z3(e);if(!i||!r)return Mc(t,e);const o={...i};return l=>(o.red=Gf(i.red,r.red,l),o.green=Gf(i.green,r.green,l),o.blue=Gf(i.blue,r.blue,l),o.alpha=Ye(i.alpha,r.alpha,l),ha.transform(o))},I0=new Set(["none","hidden"]);function eT(t,e){return I0.has(t)?i=>i<=0?t:e:i=>i>=1?e:t}function tT(t,e){return i=>Ye(t,e,i)}function Jp(t){return typeof t=="number"?tT:typeof t=="string"?Kp(t)?Mc:tt.test(t)?X3:aT:Array.isArray(t)?Y6:typeof t=="object"?tt.test(t)?X3:nT:Mc}function Y6(t,e){const i=[...t],r=i.length,o=t.map((l,u)=>Jp(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)i[u]=o[u](l);return i}}function nT(t,e){const i={...t,...e},r={};for(const o in i)t[o]!==void 0&&e[o]!==void 0&&(r[o]=Jp(t[o])(t[o],e[o]));return o=>{for(const l in r)i[l]=r[l](o);return i}}function iT(t,e){const i=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],u=t.indexes[l][r[l]],d=t.values[u]??0;i[o]=d,r[l]++}return i}const aT=(t,e)=>{const i=Ii.createTransformer(e),r=fo(t),o=fo(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?I0.has(t)&&!o.values.length||I0.has(e)&&!r.values.length?eT(t,e):Co(Y6(iT(r,o),o.values),i):Mc(t,e)};function F6(t,e,i){return typeof t=="number"&&typeof e=="number"&&typeof i=="number"?Ye(t,e,i):Jp(t)(t,e)}const rT=t=>{const e=({timestamp:i})=>t(i);return{start:(i=!0)=>Ie.update(e,i),stop:()=>_i(e),now:()=>xt.isProcessing?xt.timestamp:zt.now()}},Z6=(t,e,i=10)=>{let r="";const o=Math.max(Math.round(e/i),2);for(let l=0;l<o;l++)r+=Math.round(t(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},jc=2e4;function eh(t){let e=0;const i=50;let r=t.next(e);for(;!r.done&&e<jc;)e+=i,r=t.next(e);return e>=jc?1/0:e}function sT(t,e=100,i){const r=i({...t,keyframes:[0,e]}),o=Math.min(eh(r),jc);return{type:"keyframes",ease:l=>r.next(o*l).value/e,duration:Bn(o)}}const oT=5;function X6(t,e,i){const r=Math.max(e-oT,0);return j6(i-t(r),e-r)}const Xe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},qf=.001;function lT({duration:t=Xe.duration,bounce:e=Xe.bounce,velocity:i=Xe.velocity,mass:r=Xe.mass}){let o,l,u=1-e;u=di(Xe.minDamping,Xe.maxDamping,u),t=di(Xe.minDuration,Xe.maxDuration,Bn(t)),u<1?(o=h=>{const m=h*u,y=m*t,v=m-i,S=G0(h,u),b=Math.exp(-y);return qf-v/S*b},l=h=>{const y=h*u*t,v=y*i+i,S=Math.pow(u,2)*Math.pow(h,2)*t,b=Math.exp(-y),A=G0(Math.pow(h,2),u);return(-o(h)+qf>0?-1:1)*((v-S)*b)/A}):(o=h=>{const m=Math.exp(-h*t),y=(h-i)*t+1;return-qf+m*y},l=h=>{const m=Math.exp(-h*t),y=(i-h)*(t*t);return m*y});const d=5/t,f=uT(o,l,d);if(t=Nn(t),isNaN(f))return{stiffness:Xe.stiffness,damping:Xe.damping,duration:t};{const h=Math.pow(f,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:t}}}const cT=12;function uT(t,e,i){let r=i;for(let o=1;o<cT;o++)r=r-t(r)/e(r);return r}function G0(t,e){return t*Math.sqrt(1-e*e)}const dT=["duration","bounce"],fT=["stiffness","damping","mass"];function K3(t,e){return e.some(i=>t[i]!==void 0)}function pT(t){let e={velocity:Xe.velocity,stiffness:Xe.stiffness,damping:Xe.damping,mass:Xe.mass,isResolvedFromDuration:!1,...t};if(!K3(t,fT)&&K3(t,dT))if(t.visualDuration){const i=t.visualDuration,r=2*Math.PI/(i*1.2),o=r*r,l=2*di(.05,1,1-(t.bounce||0))*Math.sqrt(o);e={...e,mass:Xe.mass,stiffness:o,damping:l}}else{const i=lT(t);e={...e,...i,mass:Xe.mass},e.isResolvedFromDuration=!0}return e}function Lc(t=Xe.visualDuration,e=Xe.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:o}=i;const l=i.keyframes[0],u=i.keyframes[i.keyframes.length-1],d={done:!1,value:l},{stiffness:f,damping:h,mass:m,duration:y,velocity:v,isResolvedFromDuration:S}=pT({...i,velocity:-Bn(i.velocity||0)}),b=v||0,A=h/(2*Math.sqrt(f*m)),O=u-l,j=Bn(Math.sqrt(f/m)),E=Math.abs(O)<5;r||(r=E?Xe.restSpeed.granular:Xe.restSpeed.default),o||(o=E?Xe.restDelta.granular:Xe.restDelta.default);let T;if(A<1){const L=G0(j,A);T=P=>{const V=Math.exp(-A*j*P);return u-V*((b+A*j*O)/L*Math.sin(L*P)+O*Math.cos(L*P))}}else if(A===1)T=L=>u-Math.exp(-j*L)*(O+(b+j*O)*L);else{const L=j*Math.sqrt(A*A-1);T=P=>{const V=Math.exp(-A*j*P),U=Math.min(L*P,300);return u-V*((b+A*j*O)*Math.sinh(U)+L*O*Math.cosh(U))/L}}const D={calculatedDuration:S&&y||null,next:L=>{const P=T(L);if(S)d.done=L>=y;else{let V=L===0?b:0;A<1&&(V=L===0?Nn(b):X6(T,L,P));const U=Math.abs(V)<=r,$=Math.abs(u-P)<=o;d.done=U&&$}return d.value=d.done?u:P,d},toString:()=>{const L=Math.min(eh(D),jc),P=Z6(V=>D.next(L*V).value,L,30);return L+"ms "+P},toTransition:()=>{}};return D}Lc.applyToOptions=t=>{const e=sT(t,100,Lc);return t.ease=e.ease,t.duration=Nn(e.duration),t.type="keyframes",t};function q0({keyframes:t,velocity:e=0,power:i=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:d,max:f,restDelta:h=.5,restSpeed:m}){const y=t[0],v={done:!1,value:y},S=U=>d!==void 0&&U<d||f!==void 0&&U>f,b=U=>d===void 0?f:f===void 0||Math.abs(d-U)<Math.abs(f-U)?d:f;let A=i*e;const O=y+A,j=u===void 0?O:u(O);j!==O&&(A=j-y);const E=U=>-A*Math.exp(-U/r),T=U=>j+E(U),D=U=>{const $=E(U),Y=T(U);v.done=Math.abs($)<=h,v.value=v.done?j:Y};let L,P;const V=U=>{S(v.value)&&(L=U,P=Lc({keyframes:[v.value,b(v.value)],velocity:X6(T,U,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return V(0),{calculatedDuration:null,next:U=>{let $=!1;return!P&&L===void 0&&($=!0,D(U),V(U)),L!==void 0&&U>=L?P.next(U-L):(!$&&D(U),v)}}}function hT(t,e,i){const r=[],o=i||fi.mix||F6,l=t.length-1;for(let u=0;u<l;u++){let d=o(t[u],t[u+1]);if(e){const f=Array.isArray(e)?e[u]||fn:e;d=Co(f,d)}r.push(d)}return r}function mT(t,e,{clamp:i=!0,ease:r,mixer:o}={}){const l=t.length;if(Gp(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=t[0]===t[1];t[0]>t[l-1]&&(t=[...t].reverse(),e=[...e].reverse());const d=hT(e,r,o),f=d.length,h=m=>{if(u&&m<t[0])return e[0];let y=0;if(f>1)for(;y<t.length-2&&!(m<t[y+1]);y++);const v=co(t[y],t[y+1],m);return d[y](v)};return i?m=>h(di(t[0],t[l-1],m)):h}function gT(t,e){const i=t[t.length-1];for(let r=1;r<=e;r++){const o=co(0,e,r);t.push(Ye(i,1,o))}}function xT(t){const e=[0];return gT(e,t.length-1),e}function yT(t,e){return t.map(i=>i*e)}function vT(t,e){return t.map(()=>e||P6).splice(0,t.length-1)}function Ws({duration:t=300,keyframes:e,times:i,ease:r="easeInOut"}){const o=OC(r)?r.map(q3):q3(r),l={done:!1,value:e[0]},u=yT(i&&i.length===e.length?i:xT(e),t),d=mT(u,e,{ease:Array.isArray(o)?o:vT(e,o)});return{calculatedDuration:t,next:f=>(l.value=d(f),l.done=f>=t,l)}}const wT=t=>t!==null;function th(t,{repeat:e,repeatType:i="loop"},r,o=1){const l=t.filter(wT),d=o<0||e&&i!=="loop"&&e%2===1?0:l.length-1;return!d||r===void 0?l[d]:r}const bT={decay:q0,inertia:q0,tween:Ws,keyframes:Ws,spring:Lc};function K6(t){typeof t.type=="string"&&(t.type=bT[t.type])}class nh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,i){return this.finished.then(e,i)}}const ST=t=>t/100;class ih extends nh{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,o;const{motionValue:i}=this.options;i&&i.updatedAt!==zt.now()&&this.tick(zt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;K6(e);const{type:i=Ws,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=e;let{keyframes:d}=e;const f=i||Ws;f!==Ws&&typeof d[0]!="number"&&(this.mixKeyframes=Co(ST,F6(d[0],d[1])),d=[0,100]);const h=f({...e,keyframes:d});l==="mirror"&&(this.mirroredGenerator=f({...e,keyframes:[...d].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=eh(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const i=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(e,i=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:d,calculatedDuration:f}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:m,repeat:y,repeatType:v,repeatDelay:S,type:b,onUpdate:A,finalKeyframe:O}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),i?this.currentTime=e:this.updateTime(e);const j=this.currentTime-h*(this.playbackSpeed>=0?1:-1),E=this.playbackSpeed>=0?j<0:j>o;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let T=this.currentTime,D=r;if(y){const U=Math.min(this.currentTime,o)/d;let $=Math.floor(U),Y=U%1;!Y&&U>=1&&(Y=1),Y===1&&$--,$=Math.min($,y+1),!!($%2)&&(v==="reverse"?(Y=1-Y,S&&(Y-=S/d)):v==="mirror"&&(D=u)),T=di(0,1,Y)*d}const L=E?{done:!1,value:m[0]}:D.next(T);l&&(L.value=l(L.value));let{done:P}=L;!E&&f!==null&&(P=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const V=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return V&&b!==q0&&(L.value=th(m,this.options,O,this.speed)),A&&A(L.value),V&&this.finish(),L}then(e,i){return this.finished.then(e,i)}get duration(){return Bn(this.calculatedDuration)}get time(){return Bn(this.currentTime)}set time(e){var i;e=Nn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(i=this.driver)==null||i.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(zt.now());const i=this.playbackSpeed!==e;this.playbackSpeed=e,i&&(this.time=Bn(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:e=rT,startTime:i}=this.options;this.driver||(this.driver=e(u=>this.tick(u))),(l=(o=this.options).onPlay)==null||l.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=i??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(zt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(e=this.options).onComplete)==null||i.call(e)}cancel(){var e,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(e=this.options).onCancel)==null||i.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),e.observe(this)}}function CT(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ma=t=>t*180/Math.PI,Y0=t=>{const e=ma(Math.atan2(t[1],t[0]));return F0(e)},TT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Y0,rotateZ:Y0,skewX:t=>ma(Math.atan(t[1])),skewY:t=>ma(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},F0=t=>(t=t%360,t<0&&(t+=360),t),W3=Y0,Q3=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),J3=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),ET={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Q3,scaleY:J3,scale:t=>(Q3(t)+J3(t))/2,rotateX:t=>F0(ma(Math.atan2(t[6],t[5]))),rotateY:t=>F0(ma(Math.atan2(-t[2],t[0]))),rotateZ:W3,rotate:W3,skewX:t=>ma(Math.atan(t[4])),skewY:t=>ma(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Z0(t){return t.includes("scale")?1:0}function X0(t,e){if(!t||t==="none")return Z0(e);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(i)r=ET,o=i;else{const d=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=TT,o=d}if(!o)return Z0(e);const l=r[e],u=o[1].split(",").map(MT);return typeof l=="function"?l(u):u[l]}const AT=(t,e)=>{const{transform:i="none"}=getComputedStyle(t);return X0(i,e)};function MT(t){return parseFloat(t.trim())}const Br=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],$r=new Set(Br),ex=t=>t===Nr||t===he,jT=new Set(["x","y","z"]),LT=Br.filter(t=>!jT.has(t));function OT(t){const e=[];return LT.forEach(i=>{const r=t.getValue(i);r!==void 0&&(e.push([i,r.get()]),r.set(i.startsWith("scale")?1:0))}),e}const ya={width:({x:t},{paddingLeft:e="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),height:({y:t},{paddingTop:e="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>X0(e,"x"),y:(t,{transform:e})=>X0(e,"y")};ya.translateX=ya.x;ya.translateY=ya.y;const va=new Set;let K0=!1,W0=!1,Q0=!1;function W6(){if(W0){const t=Array.from(va).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),i=new Map;e.forEach(r=>{const o=OT(r);o.length&&(i.set(r,o),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=i.get(r);o&&o.forEach(([l,u])=>{var d;(d=r.getValue(l))==null||d.set(u)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}W0=!1,K0=!1,va.forEach(t=>t.complete(Q0)),va.clear()}function Q6(){va.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(W0=!0)})}function RT(){Q0=!0,Q6(),W6(),Q0=!1}class ah{constructor(e,i,r,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=i,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(va.add(this),K0||(K0=!0,Ie.read(Q6),Ie.resolveKeyframes(W6))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:i,element:r,motionValue:o}=this;if(e[0]===null){const l=o==null?void 0:o.get(),u=e[e.length-1];if(l!==void 0)e[0]=l;else if(r&&i){const d=r.readValue(i,u);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=u),o&&l===void 0&&o.set(e[0])}CT(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),va.delete(this)}cancel(){this.state==="scheduled"&&(va.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const DT=t=>t.startsWith("--");function kT(t,e,i){DT(e)?t.style.setProperty(e,i):t.style[e]=i}const HT=qp(()=>window.ScrollTimeline!==void 0),VT={};function zT(t,e){const i=qp(t);return()=>VT[e]??i()}const J6=zT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Zs=([t,e,i,r])=>`cubic-bezier(${t}, ${e}, ${i}, ${r})`,tx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Zs([0,.65,.55,1]),circOut:Zs([.55,0,1,.45]),backIn:Zs([.31,.01,.66,-.59]),backOut:Zs([.33,1.53,.69,.99])};function ey(t,e){if(t)return typeof t=="function"?J6()?Z6(t,e):"ease-out":N6(t)?Zs(t):Array.isArray(t)?t.map(i=>ey(i,e)||tx.easeOut):tx[t]}function PT(t,e,i,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:d="easeOut",times:f}={},h=void 0){const m={[e]:i};f&&(m.offset=f);const y=ey(d,o);Array.isArray(y)&&(m.easing=y);const v={delay:r,duration:o,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return h&&(v.pseudoElement=h),t.animate(m,v)}function ty(t){return typeof t=="function"&&"applyToOptions"in t}function NT({type:t,...e}){return ty(t)&&J6()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class BT extends nh{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:i,name:r,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:d,onComplete:f}=e;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=e,Gp(typeof e.type!="string");const h=NT(e);this.animation=PT(i,r,o,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=th(o,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(m):kT(i,r,m),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,i;(i=(e=this.animation).finish)==null||i.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,i;this.isPseudoElement||(i=(e=this.animation).commitStyles)==null||i.call(e)}get duration(){var i,r;const e=((r=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:r.call(i).duration)||0;return Bn(Number(e))}get time(){return Bn(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Nn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&HT()?(this.animation.timeline=e,fn):i(this)}}const ny={anticipate:H6,backInOut:k6,circInOut:z6};function $T(t){return t in ny}function UT(t){typeof t.ease=="string"&&$T(t.ease)&&(t.ease=ny[t.ease])}const nx=10;class _T extends BT{constructor(e){UT(e),K6(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:i,onUpdate:r,onComplete:o,element:l,...u}=this.options;if(!i)return;if(e!==void 0){i.set(e);return}const d=new ih({...u,autoplay:!1}),f=Nn(this.finishedTime??this.time);i.setWithVelocity(d.sample(f-nx).value,d.sample(f).value,nx),d.stop()}}const ix=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ii.test(t)||t==="0")&&!t.startsWith("url("));function IT(t){const e=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==e)return!0}function GT(t,e,i,r){const o=t[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=t[t.length-1],u=ix(o,e),d=ix(l,e);return!u||!d?!1:IT(t)||(i==="spring"||ty(i))&&r}function J0(t){t.duration=0,t.type}const qT=new Set(["opacity","clipPath","filter","transform"]),YT=qp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function FT(t){var m;const{motionValue:e,name:i,repeatDelay:r,repeatType:o,damping:l,type:u}=t;if(!(((m=e==null?void 0:e.owner)==null?void 0:m.current)instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:h}=e.owner.getProps();return YT()&&i&&qT.has(i)&&(i!=="transform"||!h)&&!f&&!r&&o!=="mirror"&&l!==0&&u!=="inertia"}const ZT=40;class XT extends nh{constructor({autoplay:e=!0,delay:i=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:d,name:f,motionValue:h,element:m,...y}){var b;super(),this.stop=()=>{var A,O;this._animation&&(this._animation.stop(),(A=this.stopTimeline)==null||A.call(this)),(O=this.keyframeResolver)==null||O.cancel()},this.createdAt=zt.now();const v={autoplay:e,delay:i,type:r,repeat:o,repeatDelay:l,repeatType:u,name:f,motionValue:h,element:m,...y},S=(m==null?void 0:m.KeyframeResolver)||ah;this.keyframeResolver=new S(d,(A,O,j)=>this.onKeyframesResolved(A,O,v,!j),f,h,m),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(e,i,r,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:d,delay:f,isHandoff:h,onUpdate:m}=r;this.resolvedAt=zt.now(),GT(e,l,u,d)||((fi.instantAnimations||!f)&&(m==null||m(th(e,r,i))),e[0]=e[e.length-1],J0(r),r.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>ZT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...r,keyframes:e},S=!h&&FT(v)?new _T({...v,element:v.motionValue.owner.current}):new ih(v);S.finished.then(()=>this.notifyFinished()).catch(fn),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(e,i){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),RT()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const KT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function WT(t){const e=KT.exec(t);if(!e)return[,];const[,i,r,o]=e;return[`--${i??r}`,o]}function iy(t,e,i=1){const[r,o]=WT(t);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return E6(u)?parseFloat(u):u}return Kp(o)?iy(o,e,i+1):o}function rh(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const ay=new Set(["width","height","top","left","right","bottom",...Br]),QT={test:t=>t==="auto",parse:t=>t},ry=t=>e=>e.test(t),sy=[Nr,he,$n,$i,IC,_C,QT],ax=t=>sy.find(ry(t));function JT(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||M6(t):!0}const eE=new Set(["brightness","contrast","saturate","opacity"]);function tE(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=i.match(Wp)||[];if(!r)return t;const o=i.replace(r,"");let l=eE.has(e)?1:0;return r!==i&&(l*=100),e+"("+l+o+")"}const nE=/\b([a-z-]*)\(.*?\)/gu,ep={...Ii,getAnimatableNone:t=>{const e=t.match(nE);return e?e.map(tE).join(" "):t}},rx={...Nr,transform:Math.round},iE={rotate:$i,rotateX:$i,rotateY:$i,rotateZ:$i,scale:Zl,scaleX:Zl,scaleY:Zl,scaleZ:Zl,skew:$i,skewX:$i,skewY:$i,distance:he,translateX:he,translateY:he,translateZ:he,x:he,y:he,z:he,perspective:he,transformPerspective:he,opacity:uo,originX:Y3,originY:Y3,originZ:he},sh={borderWidth:he,borderTopWidth:he,borderRightWidth:he,borderBottomWidth:he,borderLeftWidth:he,borderRadius:he,radius:he,borderTopLeftRadius:he,borderTopRightRadius:he,borderBottomRightRadius:he,borderBottomLeftRadius:he,width:he,maxWidth:he,height:he,maxHeight:he,top:he,right:he,bottom:he,left:he,padding:he,paddingTop:he,paddingRight:he,paddingBottom:he,paddingLeft:he,margin:he,marginTop:he,marginRight:he,marginBottom:he,marginLeft:he,backgroundPositionX:he,backgroundPositionY:he,...iE,zIndex:rx,fillOpacity:uo,strokeOpacity:uo,numOctaves:rx},aE={...sh,color:tt,backgroundColor:tt,outlineColor:tt,fill:tt,stroke:tt,borderColor:tt,borderTopColor:tt,borderRightColor:tt,borderBottomColor:tt,borderLeftColor:tt,filter:ep,WebkitFilter:ep},oy=t=>aE[t];function ly(t,e){let i=oy(t);return i!==ep&&(i=Ii),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const rE=new Set(["auto","none","0"]);function sE(t,e,i){let r=0,o;for(;r<t.length&&!o;){const l=t[r];typeof l=="string"&&!rE.has(l)&&fo(l).values.length&&(o=t[r]),r++}if(o&&i)for(const l of e)t[l]=ly(i,o)}class oE extends ah{constructor(e,i,r,o,l){super(e,i,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:i,name:r}=this;if(!i||!i.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let h=e[f];if(typeof h=="string"&&(h=h.trim(),Kp(h))){const m=iy(h,i.current);m!==void 0&&(e[f]=m),f===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!ay.has(r)||e.length!==2)return;const[o,l]=e,u=ax(o),d=ax(l);if(u!==d)if(ex(u)&&ex(d))for(let f=0;f<e.length;f++){const h=e[f];typeof h=="string"&&(e[f]=parseFloat(h))}else ya[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:i}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||JT(e[o]))&&r.push(o);r.length&&sE(e,r,i)}measureInitialState(){const{element:e,unresolvedKeyframes:i,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ya[r](e.measureViewportBox(),window.getComputedStyle(e.current)),i[0]=this.measuredOrigin;const o=i[i.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var d;const{element:e,name:i,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(i);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,u=r[l];r[l]=ya[i](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([f,h])=>{e.getValue(f).set(h)}),this.resolveNoneKeyframes()}}function lE(t,e,i){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const o=(i==null?void 0:i[t])??r.querySelectorAll(t);return o?Array.from(o):[]}return Array.from(t)}const cy=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function uy(t){return A6(t)&&"offsetHeight"in t}const sx=30,cE=t=>!isNaN(parseFloat(t));class uE{constructor(e,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var l;const o=zt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=i.owner}setCurrent(e){this.current=e,this.updatedAt=zt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=cE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new Yp);const r=this.events[e].add(i);return e==="change"?()=>{r(),Ie.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,i,r){this.set(i),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,i=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=zt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>sx)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,sx);return j6(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,i;(e=this.dependents)==null||e.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Lr(t,e){return new uE(t,e)}const{schedule:oh}=B6(queueMicrotask,!1),wn={x:!1,y:!1};function dy(){return wn.x||wn.y}function dE(t){return t==="x"||t==="y"?wn[t]?null:(wn[t]=!0,()=>{wn[t]=!1}):wn.x||wn.y?null:(wn.x=wn.y=!0,()=>{wn.x=wn.y=!1})}function fy(t,e){const i=lE(t),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[i,o,()=>r.abort()]}function ox(t){return!(t.pointerType==="touch"||dy())}function fE(t,e,i={}){const[r,o,l]=fy(t,i),u=d=>{if(!ox(d))return;const{target:f}=d,h=e(f,d);if(typeof h!="function"||!f)return;const m=y=>{ox(y)&&(h(y),f.removeEventListener("pointerleave",m))};f.addEventListener("pointerleave",m,o)};return r.forEach(d=>{d.addEventListener("pointerenter",u,o)}),l}const py=(t,e)=>e?t===e?!0:py(t,e.parentElement):!1,lh=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,pE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function hE(t){return pE.has(t.tagName)||t.tabIndex!==-1}const yc=new WeakSet;function lx(t){return e=>{e.key==="Enter"&&t(e)}}function Yf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const mE=(t,e)=>{const i=t.currentTarget;if(!i)return;const r=lx(()=>{if(yc.has(i))return;Yf(i,"down");const o=lx(()=>{Yf(i,"up")}),l=()=>Yf(i,"cancel");i.addEventListener("keyup",o,e),i.addEventListener("blur",l,e)});i.addEventListener("keydown",r,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",r),e)};function cx(t){return lh(t)&&!dy()}function gE(t,e,i={}){const[r,o,l]=fy(t,i),u=d=>{const f=d.currentTarget;if(!cx(d))return;yc.add(f);const h=e(f,d),m=(S,b)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",v),yc.has(f)&&yc.delete(f),cx(S)&&typeof h=="function"&&h(S,{success:b})},y=S=>{m(S,f===window||f===document||i.useGlobalTarget||py(f,S.target))},v=S=>{m(S,!1)};window.addEventListener("pointerup",y,o),window.addEventListener("pointercancel",v,o)};return r.forEach(d=>{(i.useGlobalTarget?window:d).addEventListener("pointerdown",u,o),uy(d)&&(d.addEventListener("focus",h=>mE(h,o)),!hE(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),l}function hy(t){return A6(t)&&"ownerSVGElement"in t}function xE(t){return hy(t)&&t.tagName==="svg"}const Tt=t=>!!(t&&t.getVelocity),yE=[...sy,tt,Ii],vE=t=>yE.find(ry(t)),ch=R.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class wE extends R.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(i&&e.isPresent&&!this.props.isPresent){const r=i.offsetParent,o=uy(r)&&r.offsetWidth||0,l=this.props.sizeRef.current;l.height=i.offsetHeight||0,l.width=i.offsetWidth||0,l.top=i.offsetTop,l.left=i.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function bE({children:t,isPresent:e,anchorX:i,root:r}){const o=R.useId(),l=R.useRef(null),u=R.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=R.useContext(ch);return R.useInsertionEffect(()=>{const{width:f,height:h,top:m,left:y,right:v}=u.current;if(e||!l.current||!f||!h)return;const S=i==="left"?`left: ${y}`:`right: ${v}`;l.current.dataset.motionPopId=o;const b=document.createElement("style");d&&(b.nonce=d);const A=r??document.head;return A.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            ${S}px !important;
            top: ${m}px !important;
          }
        `),()=>{A.contains(b)&&A.removeChild(b)}},[e]),x.jsx(wE,{isPresent:e,childRef:l,sizeRef:u,children:R.cloneElement(t,{ref:l})})}const SE=({children:t,initial:e,isPresent:i,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:u,anchorX:d,root:f})=>{const h=$p(CE),m=R.useId();let y=!0,v=R.useMemo(()=>(y=!1,{id:m,initial:e,isPresent:i,custom:o,onExitComplete:S=>{h.set(S,!0);for(const b of h.values())if(!b)return;r&&r()},register:S=>(h.set(S,!1),()=>h.delete(S))}),[i,h,r]);return l&&y&&(v={...v}),R.useMemo(()=>{h.forEach((S,b)=>h.set(b,!1))},[i]),R.useEffect(()=>{!i&&!h.size&&r&&r()},[i]),u==="popLayout"&&(t=x.jsx(bE,{isPresent:i,anchorX:d,root:f,children:t})),x.jsx(nu.Provider,{value:v,children:t})};function CE(){return new Map}function my(t=!0){const e=R.useContext(nu);if(e===null)return[!0,null];const{isPresent:i,onExitComplete:r,register:o}=e,l=R.useId();R.useEffect(()=>{if(t)return o(l)},[t]);const u=R.useCallback(()=>t&&r&&r(l),[l,r,t]);return!i&&r?[!1,u]:[!0]}const Xl=t=>t.key||"";function ux(t){const e=[];return R.Children.forEach(t,i=>{R.isValidElement(i)&&e.push(i)}),e}const gy=({children:t,custom:e,initial:i=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1,anchorX:d="left",root:f})=>{const[h,m]=my(u),y=R.useMemo(()=>ux(t),[t]),v=u&&!h?[]:y.map(Xl),S=R.useRef(!0),b=R.useRef(y),A=$p(()=>new Map),[O,j]=R.useState(y),[E,T]=R.useState(y);T6(()=>{S.current=!1,b.current=y;for(let P=0;P<E.length;P++){const V=Xl(E[P]);v.includes(V)?A.delete(V):A.get(V)!==!0&&A.set(V,!1)}},[E,v.length,v.join("-")]);const D=[];if(y!==O){let P=[...y];for(let V=0;V<E.length;V++){const U=E[V],$=Xl(U);v.includes($)||(P.splice(V,0,U),D.push(U))}return l==="wait"&&D.length&&(P=D),T(ux(P)),j(y),null}const{forceRender:L}=R.useContext(Bp);return x.jsx(x.Fragment,{children:E.map(P=>{const V=Xl(P),U=u&&!h?!1:y===E||v.includes(V),$=()=>{if(A.has(V))A.set(V,!0);else return;let Y=!0;A.forEach(F=>{F||(Y=!1)}),Y&&(L==null||L(),T(b.current),u&&(m==null||m()),r&&r())};return x.jsx(SE,{isPresent:U,initial:!S.current||i?void 0:!1,custom:e,presenceAffectsLayout:o,mode:l,root:f,onExitComplete:U?void 0:$,anchorX:d,children:P},V)})})},xy=R.createContext({strict:!1}),dx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Or={};for(const t in dx)Or[t]={isEnabled:e=>dx[t].some(i=>!!e[i])};function TE(t){for(const e in t)Or[e]={...Or[e],...t[e]}}const EE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Oc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||EE.has(t)}let yy=t=>!Oc(t);function AE(t){typeof t=="function"&&(yy=e=>e.startsWith("on")?!Oc(e):t(e))}try{AE(require("@emotion/is-prop-valid").default)}catch{}function ME(t,e,i){const r={};for(const o in t)o==="values"&&typeof t.values=="object"||(yy(o)||i===!0&&Oc(o)||!e&&!Oc(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}const iu=R.createContext({});function au(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function po(t){return typeof t=="string"||Array.isArray(t)}const uh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],dh=["initial",...uh];function ru(t){return au(t.animate)||dh.some(e=>po(t[e]))}function vy(t){return!!(ru(t)||t.variants)}function jE(t,e){if(ru(t)){const{initial:i,animate:r}=t;return{initial:i===!1||po(i)?i:void 0,animate:po(r)?r:void 0}}return t.inherit!==!1?e:{}}function LE(t){const{initial:e,animate:i}=jE(t,R.useContext(iu));return R.useMemo(()=>({initial:e,animate:i}),[fx(e),fx(i)])}function fx(t){return Array.isArray(t)?t.join(" "):t}const ho={};function OE(t){for(const e in t)ho[e]=t[e],Xp(e)&&(ho[e].isCSSVariable=!0)}function wy(t,{layout:e,layoutId:i}){return $r.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!ho[t]||t==="opacity")}const RE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},DE=Br.length;function kE(t,e,i){let r="",o=!0;for(let l=0;l<DE;l++){const u=Br[l],d=t[u];if(d===void 0)continue;let f=!0;if(typeof d=="number"?f=d===(u.startsWith("scale")?1:0):f=parseFloat(d)===0,!f||i){const h=cy(d,sh[u]);if(!f){o=!1;const m=RE[u]||u;r+=`${m}(${h}) `}i&&(e[u]=h)}}return r=r.trim(),i?r=i(e,o?"":r):o&&(r="none"),r}function fh(t,e,i){const{style:r,vars:o,transformOrigin:l}=t;let u=!1,d=!1;for(const f in e){const h=e[f];if($r.has(f)){u=!0;continue}else if(Xp(f)){o[f]=h;continue}else{const m=cy(h,sh[f]);f.startsWith("origin")?(d=!0,l[f]=m):r[f]=m}}if(e.transform||(u||i?r.transform=kE(e,t.transform,i):r.transform&&(r.transform="none")),d){const{originX:f="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${f} ${h} ${m}`}}const ph=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function by(t,e,i){for(const r in e)!Tt(e[r])&&!wy(r,i)&&(t[r]=e[r])}function HE({transformTemplate:t},e){return R.useMemo(()=>{const i=ph();return fh(i,e,t),Object.assign({},i.vars,i.style)},[e])}function VE(t,e){const i=t.style||{},r={};return by(r,i,t),Object.assign(r,HE(t,e)),r}function zE(t,e){const i={},r=VE(t,e);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const PE={offset:"stroke-dashoffset",array:"stroke-dasharray"},NE={offset:"strokeDashoffset",array:"strokeDasharray"};function BE(t,e,i=1,r=0,o=!0){t.pathLength=1;const l=o?PE:NE;t[l.offset]=he.transform(-r);const u=he.transform(e),d=he.transform(i);t[l.array]=`${u} ${d}`}function Sy(t,{attrX:e,attrY:i,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...d},f,h,m){if(fh(t,d,h),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:y,style:v}=t;y.transform&&(v.transform=y.transform,delete y.transform),(v.transform||y.transformOrigin)&&(v.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),v.transform&&(v.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete y.transformBox),e!==void 0&&(y.x=e),i!==void 0&&(y.y=i),r!==void 0&&(y.scale=r),o!==void 0&&BE(y,o,l,u,!1)}const Cy=()=>({...ph(),attrs:{}}),Ty=t=>typeof t=="string"&&t.toLowerCase()==="svg";function $E(t,e,i,r){const o=R.useMemo(()=>{const l=Cy();return Sy(l,e,Ty(r),t.transformTemplate,t.style),{...l.attrs,style:{...l.style}}},[e]);if(t.style){const l={};by(l,t.style,t),o.style={...l,...o.style}}return o}const UE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hh(t){return typeof t!="string"||t.includes("-")?!1:!!(UE.indexOf(t)>-1||/[A-Z]/u.test(t))}function _E(t,e,i,{latestValues:r},o,l=!1){const d=(hh(t)?$E:zE)(e,r,o,t),f=ME(e,typeof t=="string",l),h=t!==R.Fragment?{...f,...d,ref:i}:{},{children:m}=e,y=R.useMemo(()=>Tt(m)?m.get():m,[m]);return R.createElement(t,{...h,children:y})}function px(t){const e=[{},{}];return t==null||t.values.forEach((i,r)=>{e[0][r]=i.get(),e[1][r]=i.getVelocity()}),e}function mh(t,e,i,r){if(typeof e=="function"){const[o,l]=px(r);e=e(i!==void 0?i:t.custom,o,l)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[o,l]=px(r);e=e(i!==void 0?i:t.custom,o,l)}return e}function vc(t){return Tt(t)?t.get():t}function IE({scrapeMotionValuesFromProps:t,createRenderState:e},i,r,o){return{latestValues:GE(i,r,o,t),renderState:e()}}function GE(t,e,i,r){const o={},l=r(t,{});for(const v in l)o[v]=vc(l[v]);let{initial:u,animate:d}=t;const f=ru(t),h=vy(t);e&&h&&!f&&t.inherit!==!1&&(u===void 0&&(u=e.initial),d===void 0&&(d=e.animate));let m=i?i.initial===!1:!1;m=m||u===!1;const y=m?d:u;if(y&&typeof y!="boolean"&&!au(y)){const v=Array.isArray(y)?y:[y];for(let S=0;S<v.length;S++){const b=mh(t,v[S]);if(b){const{transitionEnd:A,transition:O,...j}=b;for(const E in j){let T=j[E];if(Array.isArray(T)){const D=m?T.length-1:0;T=T[D]}T!==null&&(o[E]=T)}for(const E in A)o[E]=A[E]}}}return o}const Ey=t=>(e,i)=>{const r=R.useContext(iu),o=R.useContext(nu),l=()=>IE(t,e,r,o);return i?l():$p(l)};function gh(t,e,i){var l;const{style:r}=t,o={};for(const u in r)(Tt(r[u])||e.style&&Tt(e.style[u])||wy(u,t)||((l=i==null?void 0:i.getValue(u))==null?void 0:l.liveStyle)!==void 0)&&(o[u]=r[u]);return o}const qE=Ey({scrapeMotionValuesFromProps:gh,createRenderState:ph});function Ay(t,e,i){const r=gh(t,e,i);for(const o in t)if(Tt(t[o])||Tt(e[o])){const l=Br.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=t[o]}return r}const YE=Ey({scrapeMotionValuesFromProps:Ay,createRenderState:Cy}),FE=Symbol.for("motionComponentSymbol");function gr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function ZE(t,e,i){return R.useCallback(r=>{r&&t.onMount&&t.onMount(r),e&&(r?e.mount(r):e.unmount()),i&&(typeof i=="function"?i(r):gr(i)&&(i.current=r))},[e])}const xh=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),XE="framerAppearId",My="data-"+xh(XE),jy=R.createContext({});function KE(t,e,i,r,o){var A,O;const{visualElement:l}=R.useContext(iu),u=R.useContext(xy),d=R.useContext(nu),f=R.useContext(ch).reducedMotion,h=R.useRef(null);r=r||u.renderer,!h.current&&r&&(h.current=r(t,{visualState:e,parent:l,props:i,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:f}));const m=h.current,y=R.useContext(jy);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&WE(h.current,i,o,y);const v=R.useRef(!1);R.useInsertionEffect(()=>{m&&v.current&&m.update(i,d)});const S=i[My],b=R.useRef(!!S&&!((A=window.MotionHandoffIsComplete)!=null&&A.call(window,S))&&((O=window.MotionHasOptimisedAnimation)==null?void 0:O.call(window,S)));return T6(()=>{m&&(v.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),b.current&&m.animationState&&m.animationState.animateChanges())}),R.useEffect(()=>{m&&(!b.current&&m.animationState&&m.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var j;(j=window.MotionHandoffMarkAsComplete)==null||j.call(window,S)}),b.current=!1),m.enteringChildren=void 0)}),m}function WE(t,e,i,r){const{layoutId:o,layout:l,drag:u,dragConstraints:d,layoutScroll:f,layoutRoot:h,layoutCrossfade:m}=e;t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:Ly(t.parent)),t.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||d&&gr(d),visualElement:t,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:m,layoutScroll:f,layoutRoot:h})}function Ly(t){if(t)return t.options.allowProjection!==!1?t.projection:Ly(t.parent)}function Ff(t,{forwardMotionProps:e=!1}={},i,r){i&&TE(i);const o=hh(t)?YE:qE;function l(d,f){let h;const m={...R.useContext(ch),...d,layoutId:QE(d)},{isStatic:y}=m,v=LE(d),S=o(d,y);if(!y&&Up){JE();const b=eA(m);h=b.MeasureLayout,v.visualElement=KE(t,S,m,r,b.ProjectionNode)}return x.jsxs(iu.Provider,{value:v,children:[h&&v.visualElement?x.jsx(h,{visualElement:v.visualElement,...m}):null,_E(t,d,ZE(S,v.visualElement,f),S,y,e)]})}l.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const u=R.forwardRef(l);return u[FE]=t,u}function QE({layoutId:t}){const e=R.useContext(Bp).id;return e&&t!==void 0?e+"-"+t:t}function JE(t,e){R.useContext(xy).strict}function eA(t){const{drag:e,layout:i}=Or;if(!e&&!i)return{};const r={...e,...i};return{MeasureLayout:e!=null&&e.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function tA(t,e){if(typeof Proxy>"u")return Ff;const i=new Map,r=(l,u)=>Ff(l,u,t,e),o=(l,u)=>r(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?r:(i.has(u)||i.set(u,Ff(u,void 0,t,e)),i.get(u))})}function Oy({top:t,left:e,right:i,bottom:r}){return{x:{min:e,max:i},y:{min:t,max:r}}}function nA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function iA(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:r.y,right:r.x}}function Zf(t){return t===void 0||t===1}function tp({scale:t,scaleX:e,scaleY:i}){return!Zf(t)||!Zf(e)||!Zf(i)}function fa(t){return tp(t)||Ry(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Ry(t){return hx(t.x)||hx(t.y)}function hx(t){return t&&t!=="0%"}function Rc(t,e,i){const r=t-i,o=e*r;return i+o}function mx(t,e,i,r,o){return o!==void 0&&(t=Rc(t,o,r)),Rc(t,i,r)+e}function np(t,e=0,i=1,r,o){t.min=mx(t.min,e,i,r,o),t.max=mx(t.max,e,i,r,o)}function Dy(t,{x:e,y:i}){np(t.x,e.translate,e.scale,e.originPoint),np(t.y,i.translate,i.scale,i.originPoint)}const gx=.999999999999,xx=1.0000000000001;function aA(t,e,i,r=!1){const o=i.length;if(!o)return;e.x=e.y=1;let l,u;for(let d=0;d<o;d++){l=i[d],u=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&yr(t,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,Dy(t,u)),r&&fa(l.latestValues)&&yr(t,l.latestValues))}e.x<xx&&e.x>gx&&(e.x=1),e.y<xx&&e.y>gx&&(e.y=1)}function xr(t,e){t.min=t.min+e,t.max=t.max+e}function yx(t,e,i,r,o=.5){const l=Ye(t.min,t.max,o);np(t,e,i,l,r)}function yr(t,e){yx(t.x,e.x,e.scaleX,e.scale,e.originX),yx(t.y,e.y,e.scaleY,e.scale,e.originY)}function ky(t,e){return Oy(iA(t.getBoundingClientRect(),e))}function rA(t,e,i){const r=ky(t,i),{scroll:o}=e;return o&&(xr(r.x,o.offset.x),xr(r.y,o.offset.y)),r}const vx=()=>({translate:0,scale:1,origin:0,originPoint:0}),vr=()=>({x:vx(),y:vx()}),wx=()=>({min:0,max:0}),Qe=()=>({x:wx(),y:wx()}),ip={current:null},Hy={current:!1};function sA(){if(Hy.current=!0,!!Up)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>ip.current=t.matches;t.addEventListener("change",e),e()}else ip.current=!1}const oA=new WeakMap;function lA(t,e,i){for(const r in e){const o=e[r],l=i[r];if(Tt(o))t.addValue(r,o);else if(Tt(l))t.addValue(r,Lr(o,{owner:t}));else if(l!==o)if(t.hasValue(r)){const u=t.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=t.getStaticValue(r);t.addValue(r,Lr(u!==void 0?u:o,{owner:t}))}}for(const r in i)e[r]===void 0&&t.removeValue(r);return e}const bx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class cA{scrapeMotionValuesFromProps(e,i,r){return{}}constructor({parent:e,props:i,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ah,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=zt.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,Ie.render(this.render,!1,!0))};const{latestValues:f,renderState:h}=u;this.latestValues=f,this.baseTarget={...f},this.initialValues=i.initial?{...f}:{},this.renderState=h,this.parent=e,this.props=i,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=ru(i),this.isVariantNode=vy(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:m,...y}=this.scrapeMotionValuesFromProps(i,{},this);for(const v in y){const S=y[v];f[v]!==void 0&&Tt(S)&&S.set(f[v])}}mount(e){var i;this.current=e,oA.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),Hy.current||sA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ip.current,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),_i(this.notifyUpdate),_i(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,i){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=$r.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=i.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Ie.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,i)),this.valueSubscriptions.set(e,()=>{o(),l&&l(),i.owner&&i.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Or){const i=Or[e];if(!i)continue;const{isEnabled:r,Feature:o}=i;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let r=0;r<bx.length;r++){const o=bx[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=lA(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){const r=this.values.get(e);i!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,i),this.values.set(e,i),this.latestValues[e]=i.get())}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&i!==void 0&&(r=Lr(i===null?void 0:i,{owner:this}),this.addValue(e,r)),r}readValue(e,i){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(E6(r)||M6(r))?r=parseFloat(r):!vE(r)&&Ii.test(i)&&(r=ly(e,i)),this.setBaseTarget(e,Tt(r)?r.get():r)),Tt(r)?r.get():r}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){var l;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const u=mh(this.props,i,(l=this.presenceContext)==null?void 0:l.custom);u&&(r=u[e])}if(i&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Tt(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new Yp),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}scheduleRenderMicrotask(){oh.render(this.render)}}class Vy extends cA{constructor(){super(...arguments),this.KeyframeResolver=oE}sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){return e.style?e.style[i]:void 0}removeValueFromRenderState(e,{vars:i,style:r}){delete i[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Tt(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function zy(t,{style:e,vars:i},r,o){const l=t.style;let u;for(u in e)l[u]=e[u];o==null||o.applyProjectionStyles(l,r);for(u in i)l.setProperty(u,i[u])}function uA(t){return window.getComputedStyle(t)}class dA extends Vy{constructor(){super(...arguments),this.type="html",this.renderInstance=zy}readValueFromInstance(e,i){var r;if($r.has(i))return(r=this.projection)!=null&&r.isProjecting?Z0(i):AT(e,i);{const o=uA(e),l=(Xp(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(e,{transformPagePoint:i}){return ky(e,i)}build(e,i,r){fh(e,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,i,r){return gh(e,i,r)}}const Py=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function fA(t,e,i,r){zy(t,e,void 0,r);for(const o in e.attrs)t.setAttribute(Py.has(o)?o:xh(o),e.attrs[o])}class pA extends Vy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qe}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if($r.has(i)){const r=oy(i);return r&&r.default||0}return i=Py.has(i)?i:xh(i),e.getAttribute(i)}scrapeMotionValuesFromProps(e,i,r){return Ay(e,i,r)}build(e,i,r){Sy(e,i,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,i,r,o){fA(e,i,r,o)}mount(e){this.isSVGTag=Ty(e.tagName),super.mount(e)}}const hA=(t,e)=>hh(t)?new pA(e):new dA(e,{allowProjection:t!==R.Fragment});function br(t,e,i){const r=t.getProps();return mh(r,e,i!==void 0?i:r.custom,t)}const ap=t=>Array.isArray(t);function mA(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,Lr(i))}function gA(t){return ap(t)?t[t.length-1]||0:t}function xA(t,e){const i=br(t,e);let{transitionEnd:r={},transition:o={},...l}=i||{};l={...l,...r};for(const u in l){const d=gA(l[u]);mA(t,u,d)}}function yA(t){return!!(Tt(t)&&t.add)}function rp(t,e){const i=t.getValue("willChange");if(yA(i))return i.add(e);if(!i&&fi.WillChange){const r=new fi.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function Ny(t){return t.props[My]}const vA=t=>t!==null;function wA(t,{repeat:e,repeatType:i="loop"},r){const o=t.filter(vA),l=e&&i!=="loop"&&e%2===1?0:o.length-1;return o[l]}const bA={type:"spring",stiffness:500,damping:25,restSpeed:10},SA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),CA={type:"keyframes",duration:.8},TA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},EA=(t,{keyframes:e})=>e.length>2?CA:$r.has(t)?t.startsWith("scale")?SA(e[1]):bA:TA;function AA({when:t,delay:e,delayChildren:i,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:d,from:f,elapsed:h,...m}){return!!Object.keys(m).length}const yh=(t,e,i,r={},o,l)=>u=>{const d=rh(r,t)||{},f=d.delay||r.delay||0;let{elapsed:h=0}=r;h=h-Nn(f);const m={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...d,delay:-h,onUpdate:v=>{e.set(v),d.onUpdate&&d.onUpdate(v)},onComplete:()=>{u(),d.onComplete&&d.onComplete()},name:t,motionValue:e,element:l?void 0:o};AA(d)||Object.assign(m,EA(t,m)),m.duration&&(m.duration=Nn(m.duration)),m.repeatDelay&&(m.repeatDelay=Nn(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let y=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(J0(m),m.delay===0&&(y=!0)),(fi.instantAnimations||fi.skipAnimations)&&(y=!0,J0(m),m.delay=0),m.allowFlatten=!d.type&&!d.ease,y&&!l&&e.get()!==void 0){const v=wA(m.keyframes,d);if(v!==void 0){Ie.update(()=>{m.onUpdate(v),m.onComplete()});return}}return d.isSync?new ih(m):new XT(m)};function MA({protectedKeys:t,needsAnimating:e},i){const r=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,r}function By(t,e,{delay:i=0,transitionOverride:r,type:o}={}){let{transition:l=t.getDefaultTransition(),transitionEnd:u,...d}=e;r&&(l=r);const f=[],h=o&&t.animationState&&t.animationState.getState()[o];for(const m in d){const y=t.getValue(m,t.latestValues[m]??null),v=d[m];if(v===void 0||h&&MA(h,m))continue;const S={delay:i,...rh(l||{},m)},b=y.get();if(b!==void 0&&!y.isAnimating&&!Array.isArray(v)&&v===b&&!S.velocity)continue;let A=!1;if(window.MotionHandoffAnimation){const j=Ny(t);if(j){const E=window.MotionHandoffAnimation(j,m,Ie);E!==null&&(S.startTime=E,A=!0)}}rp(t,m),y.start(yh(m,y,v,t.shouldReduceMotion&&ay.has(m)?{type:!1}:S,t,A));const O=y.animation;O&&f.push(O)}return u&&Promise.all(f).then(()=>{Ie.update(()=>{u&&xA(t,u)})}),f}function $y(t,e,i,r=0,o=1){const l=Array.from(t).sort((h,m)=>h.sortNodePosition(m)).indexOf(e),u=t.size,d=(u-1)*r;return typeof i=="function"?i(l,u):o===1?l*r:d-l*r}function sp(t,e,i={}){var f;const r=br(t,e,i.type==="exit"?(f=t.presenceContext)==null?void 0:f.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=r||{};i.transitionOverride&&(o=i.transitionOverride);const l=r?()=>Promise.all(By(t,r,i)):()=>Promise.resolve(),u=t.variantChildren&&t.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:v}=o;return jA(t,e,h,m,y,v,i)}:()=>Promise.resolve(),{when:d}=o;if(d){const[h,m]=d==="beforeChildren"?[l,u]:[u,l];return h().then(()=>m())}else return Promise.all([l(),u(i.delay)])}function jA(t,e,i=0,r=0,o=0,l=1,u){const d=[];for(const f of t.variantChildren)f.notify("AnimationStart",e),d.push(sp(f,e,{...u,delay:i+(typeof r=="function"?0:r)+$y(t.variantChildren,f,r,o,l)}).then(()=>f.notify("AnimationComplete",e)));return Promise.all(d)}function LA(t,e,i={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>sp(t,l,i));r=Promise.all(o)}else if(typeof e=="string")r=sp(t,e,i);else{const o=typeof e=="function"?br(t,e,i.custom):e;r=Promise.all(By(t,o,i))}return r.then(()=>{t.notify("AnimationComplete",e)})}function Uy(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let r=0;r<i;r++)if(e[r]!==t[r])return!1;return!0}const OA=dh.length;function _y(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?_y(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const e={};for(let i=0;i<OA;i++){const r=dh[i],o=t.props[r];(po(o)||o===!1)&&(e[r]=o)}return e}const RA=[...uh].reverse(),DA=uh.length;function kA(t){return e=>Promise.all(e.map(({animation:i,options:r})=>LA(t,i,r)))}function HA(t){let e=kA(t),i=Sx(),r=!0;const o=f=>(h,m)=>{var v;const y=br(t,m,f==="exit"?(v=t.presenceContext)==null?void 0:v.custom:void 0);if(y){const{transition:S,transitionEnd:b,...A}=y;h={...h,...A,...b}}return h};function l(f){e=f(t)}function u(f){const{props:h}=t,m=_y(t.parent)||{},y=[],v=new Set;let S={},b=1/0;for(let O=0;O<DA;O++){const j=RA[O],E=i[j],T=h[j]!==void 0?h[j]:m[j],D=po(T),L=j===f?E.isActive:null;L===!1&&(b=O);let P=T===m[j]&&T!==h[j]&&D;if(P&&r&&t.manuallyAnimateOnMount&&(P=!1),E.protectedKeys={...S},!E.isActive&&L===null||!T&&!E.prevProp||au(T)||typeof T=="boolean")continue;const V=VA(E.prevProp,T);let U=V||j===f&&E.isActive&&!P&&D||O>b&&D,$=!1;const Y=Array.isArray(T)?T:[T];let F=Y.reduce(o(j),{});L===!1&&(F={});const{prevResolvedValues:te={}}=E,ie={...te,...F},oe=K=>{U=!0,v.has(K)&&($=!0,v.delete(K)),E.needsAnimating[K]=!0;const W=t.getValue(K);W&&(W.liveStyle=!1)};for(const K in ie){const W=F[K],ee=te[K];if(S.hasOwnProperty(K))continue;let k=!1;ap(W)&&ap(ee)?k=!Uy(W,ee):k=W!==ee,k?W!=null?oe(K):v.add(K):W!==void 0&&v.has(K)?oe(K):E.protectedKeys[K]=!0}E.prevProp=T,E.prevResolvedValues=F,E.isActive&&(S={...S,...F}),r&&t.blockInitialAnimation&&(U=!1);const re=P&&V;U&&(!re||$)&&y.push(...Y.map(K=>{const W={type:j};if(typeof K=="string"&&r&&!re&&t.manuallyAnimateOnMount&&t.parent){const{parent:ee}=t,k=br(ee,K);if(ee.enteringChildren&&k){const{delayChildren:Z}=k.transition||{};W.delay=$y(ee.enteringChildren,t,Z)}}return{animation:K,options:W}}))}if(v.size){const O={};if(typeof h.initial!="boolean"){const j=br(t,Array.isArray(h.initial)?h.initial[0]:h.initial);j&&j.transition&&(O.transition=j.transition)}v.forEach(j=>{const E=t.getBaseTarget(j),T=t.getValue(j);T&&(T.liveStyle=!0),O[j]=E??null}),y.push({animation:O})}let A=!!y.length;return r&&(h.initial===!1||h.initial===h.animate)&&!t.manuallyAnimateOnMount&&(A=!1),r=!1,A?e(y):Promise.resolve()}function d(f,h){var y;if(i[f].isActive===h)return Promise.resolve();(y=t.variantChildren)==null||y.forEach(v=>{var S;return(S=v.animationState)==null?void 0:S.setActive(f,h)}),i[f].isActive=h;const m=u(f);for(const v in i)i[v].protectedKeys={};return m}return{animateChanges:u,setActive:d,setAnimateFunction:l,getState:()=>i,reset:()=>{i=Sx(),r=!0}}}function VA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Uy(e,t):!1}function da(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Sx(){return{animate:da(!0),whileInView:da(),whileHover:da(),whileTap:da(),whileDrag:da(),whileFocus:da(),exit:da()}}class qi{constructor(e){this.isMounted=!1,this.node=e}update(){}}class zA extends qi{constructor(e){super(e),e.animationState||(e.animationState=HA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();au(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let PA=0;class NA extends qi{constructor(){super(...arguments),this.id=PA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);i&&!e&&o.then(()=>{i(this.id)})}mount(){const{register:e,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const BA={animation:{Feature:zA},exit:{Feature:NA}};function mo(t,e,i,r={passive:!0}){return t.addEventListener(e,i,r),()=>t.removeEventListener(e,i)}function Ao(t){return{point:{x:t.pageX,y:t.pageY}}}const $A=t=>e=>lh(e)&&t(e,Ao(e));function Qs(t,e,i,r){return mo(t,e,$A(i),r)}const Iy=1e-4,UA=1-Iy,_A=1+Iy,Gy=.01,IA=0-Gy,GA=0+Gy;function Lt(t){return t.max-t.min}function qA(t,e,i){return Math.abs(t-e)<=i}function Cx(t,e,i,r=.5){t.origin=r,t.originPoint=Ye(e.min,e.max,t.origin),t.scale=Lt(i)/Lt(e),t.translate=Ye(i.min,i.max,t.origin)-t.originPoint,(t.scale>=UA&&t.scale<=_A||isNaN(t.scale))&&(t.scale=1),(t.translate>=IA&&t.translate<=GA||isNaN(t.translate))&&(t.translate=0)}function Js(t,e,i,r){Cx(t.x,e.x,i.x,r?r.originX:void 0),Cx(t.y,e.y,i.y,r?r.originY:void 0)}function Tx(t,e,i){t.min=i.min+e.min,t.max=t.min+Lt(e)}function YA(t,e,i){Tx(t.x,e.x,i.x),Tx(t.y,e.y,i.y)}function Ex(t,e,i){t.min=e.min-i.min,t.max=t.min+Lt(e)}function eo(t,e,i){Ex(t.x,e.x,i.x),Ex(t.y,e.y,i.y)}function dn(t){return[t("x"),t("y")]}const qy=({current:t})=>t?t.ownerDocument.defaultView:null,Ax=(t,e)=>Math.abs(t-e);function FA(t,e){const i=Ax(t.x,e.x),r=Ax(t.y,e.y);return Math.sqrt(i**2+r**2)}class Yy{constructor(e,i,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Kf(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,b=FA(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!b)return;const{point:A}=v,{timestamp:O}=xt;this.history.push({...A,timestamp:O});const{onStart:j,onMove:E}=this.handlers;S||(j&&j(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,v)},this.handlePointerMove=(v,S)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Xf(S,this.transformPagePoint),Ie.update(this.updatePoint,!0)},this.handlePointerUp=(v,S)=>{this.end();const{onEnd:b,onSessionEnd:A,resumeAnimation:O}=this.handlers;if(this.dragSnapToOrigin&&O&&O(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=Kf(v.type==="pointercancel"?this.lastMoveEventInfo:Xf(S,this.transformPagePoint),this.history);this.startEvent&&b&&b(v,j),A&&A(v,j)},!lh(e))return;this.dragSnapToOrigin=l,this.handlers=i,this.transformPagePoint=r,this.distanceThreshold=u,this.contextWindow=o||window;const d=Ao(e),f=Xf(d,this.transformPagePoint),{point:h}=f,{timestamp:m}=xt;this.history=[{...h,timestamp:m}];const{onSessionStart:y}=i;y&&y(e,Kf(f,this.history)),this.removeListeners=Co(Qs(this.contextWindow,"pointermove",this.handlePointerMove),Qs(this.contextWindow,"pointerup",this.handlePointerUp),Qs(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),_i(this.updatePoint)}}function Xf(t,e){return e?{point:e(t.point)}:t}function Mx(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Kf({point:t},e){return{point:t,delta:Mx(t,Fy(e)),offset:Mx(t,ZA(e)),velocity:XA(e,.1)}}function ZA(t){return t[0]}function Fy(t){return t[t.length-1]}function XA(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,r=null;const o=Fy(t);for(;i>=0&&(r=t[i],!(o.timestamp-r.timestamp>Nn(e)));)i--;if(!r)return{x:0,y:0};const l=Bn(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function KA(t,{min:e,max:i},r){return e!==void 0&&t<e?t=r?Ye(e,t,r.min):Math.max(t,e):i!==void 0&&t>i&&(t=r?Ye(i,t,r.max):Math.min(t,i)),t}function jx(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function WA(t,{top:e,left:i,bottom:r,right:o}){return{x:jx(t.x,i,o),y:jx(t.y,e,r)}}function Lx(t,e){let i=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,r]=[r,i]),{min:i,max:r}}function QA(t,e){return{x:Lx(t.x,e.x),y:Lx(t.y,e.y)}}function JA(t,e){let i=.5;const r=Lt(t),o=Lt(e);return o>r?i=co(e.min,e.max-r,t.min):r>o&&(i=co(t.min,t.max-o,e.min)),di(0,1,i)}function eM(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const op=.35;function tM(t=op){return t===!1?t=0:t===!0&&(t=op),{x:Ox(t,"left","right"),y:Ox(t,"top","bottom")}}function Ox(t,e,i){return{min:Rx(t,e),max:Rx(t,i)}}function Rx(t,e){return typeof t=="number"?t:t[e]||0}const nM=new WeakMap;class iM{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:i=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Ao(y).point)},u=(y,v)=>{const{drag:S,dragPropagation:b,onDragStart:A}=this.getProps();if(S&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=dE(S),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),dn(j=>{let E=this.getAxisMotionValue(j).get()||0;if($n.test(E)){const{projection:T}=this.visualElement;if(T&&T.layout){const D=T.layout.layoutBox[j];D&&(E=Lt(D)*(parseFloat(E)/100))}}this.originPoint[j]=E}),A&&Ie.postRender(()=>A(y,v)),rp(this.visualElement,"transform");const{animationState:O}=this.visualElement;O&&O.setActive("whileDrag",!0)},d=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v;const{dragPropagation:S,dragDirectionLock:b,onDirectionLock:A,onDrag:O}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:j}=v;if(b&&this.currentDirection===null){this.currentDirection=aM(j),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",v.point,j),this.updateAxis("y",v.point,j),this.visualElement.render(),O&&O(y,v)},f=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v,this.stop(y,v),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>dn(y=>{var v;return this.getAnimationState(y)==="paused"&&((v=this.getAxisMotionValue(y).animation)==null?void 0:v.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new Yy(e,{onSessionStart:l,onStart:u,onMove:d,onSessionEnd:f,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:qy(this.visualElement)})}stop(e,i){const r=e||this.latestPointerEvent,o=i||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:d}=this.getProps();d&&Ie.postRender(()=>d(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(e,i,r){const{drag:o}=this.getProps();if(!r||!Kl(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=KA(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:e,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;e&&gr(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=WA(r.layoutBox,e):this.constraints=!1,this.elastic=tM(i),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&dn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=eM(r.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!gr(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=rA(r,o.root,this.visualElement.getTransformPagePoint());let u=QA(o.layout.layoutBox,l);if(i){const d=i(nA(u));this.hasMutatedConstraints=!!d,d&&(u=Oy(d))}return u}startAnimation(e){const{drag:i,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:d}=this.getProps(),f=this.constraints||{},h=dn(m=>{if(!Kl(m,i,this.currentDirection))return;let y=f&&f[m]||{};u&&(y={min:0,max:0});const v=o?200:1e6,S=o?40:1e7,b={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...l,...y};return this.startAxisValueAnimation(m,b)});return Promise.all(h).then(d)}startAxisValueAnimation(e,i){const r=this.getAxisMotionValue(e);return rp(this.visualElement,e),r.start(yh(e,r,0,i,this.visualElement,!1))}stopAnimation(){dn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){dn(e=>{var i;return(i=this.getAxisMotionValue(e).animation)==null?void 0:i.pause()})}getAnimationState(e){var i;return(i=this.getAxisMotionValue(e).animation)==null?void 0:i.state}getAxisMotionValue(e){const i=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[i];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){dn(i=>{const{drag:r}=this.getProps();if(!Kl(i,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(i);if(o&&o.layout){const{min:u,max:d}=o.layout.layoutBox[i];l.set(e[i]-Ye(u,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:r}=this.visualElement;if(!gr(i)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};dn(u=>{const d=this.getAxisMotionValue(u);if(d&&this.constraints!==!1){const f=d.get();o[u]=JA({min:f,max:f},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),dn(u=>{if(!Kl(u,e,null))return;const d=this.getAxisMotionValue(u),{min:f,max:h}=this.constraints[u];d.set(Ye(f,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;nM.set(this.visualElement,this);const e=this.visualElement.current,i=Qs(e,"pointerdown",f=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(f)}),r=()=>{const{dragConstraints:f}=this.getProps();gr(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ie.read(r);const u=mo(window,"resize",()=>this.scalePositionWithinConstraints()),d=o.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&(dn(m=>{const y=this.getAxisMotionValue(m);y&&(this.originPoint[m]+=f[m].translate,y.set(y.get()+f[m].translate))}),this.visualElement.render())});return()=>{u(),i(),l(),d&&d()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=op,dragMomentum:d=!0}=e;return{...e,drag:i,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:d}}}function Kl(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function aM(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class rM extends qi{constructor(e){super(e),this.removeGroupControls=fn,this.removeListeners=fn,this.controls=new iM(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||fn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Dx=t=>(e,i)=>{t&&Ie.postRender(()=>t(e,i))};class sM extends qi{constructor(){super(...arguments),this.removePointerDownListener=fn}onPointerDown(e){this.session=new Yy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:qy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Dx(e),onStart:Dx(i),onMove:r,onEnd:(l,u)=>{delete this.session,o&&Ie.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Qs(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const wc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function kx(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Gs={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(he.test(t))t=parseFloat(t);else return t;const i=kx(t,e.target.x),r=kx(t,e.target.y);return`${i}% ${r}%`}},oM={correct:(t,{treeScale:e,projectionDelta:i})=>{const r=t,o=Ii.parse(t);if(o.length>5)return r;const l=Ii.createTransformer(t),u=typeof o[0]!="number"?1:0,d=i.x.scale*e.x,f=i.y.scale*e.y;o[0+u]/=d,o[1+u]/=f;const h=Ye(d,f,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};let Wf=!1;class lM extends R.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;OE(cM),l&&(i.group&&i.group.add(l),r&&r.register&&o&&r.register(l),Wf&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),wc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:r,drag:o,isPresent:l}=this.props,{projection:u}=r;return u&&(u.isPresent=l,Wf=!0,o||e.layoutDependency!==i||i===void 0||e.isPresent!==l?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Ie.postRender(()=>{const d=u.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),oh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:r}=this.props,{projection:o}=e;Wf=!0,o&&(o.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Zy(t){const[e,i]=my(),r=R.useContext(Bp);return x.jsx(lM,{...t,layoutGroup:r,switchLayoutGroup:R.useContext(jy),isPresent:e,safeToRemove:i})}const cM={borderRadius:{...Gs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Gs,borderTopRightRadius:Gs,borderBottomLeftRadius:Gs,borderBottomRightRadius:Gs,boxShadow:oM};function uM(t,e,i){const r=Tt(t)?t:Lr(t);return r.start(yh("",r,e,i)),r.animation}const dM=(t,e)=>t.depth-e.depth;class fM{constructor(){this.children=[],this.isDirty=!1}add(e){_p(this.children,e),this.isDirty=!0}remove(e){Ip(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(dM),this.isDirty=!1,this.children.forEach(e)}}function pM(t,e){const i=zt.now(),r=({timestamp:o})=>{const l=o-i;l>=e&&(_i(r),t(l-e))};return Ie.setup(r,!0),()=>_i(r)}const Xy=["TopLeft","TopRight","BottomLeft","BottomRight"],hM=Xy.length,Hx=t=>typeof t=="string"?parseFloat(t):t,Vx=t=>typeof t=="number"||he.test(t);function mM(t,e,i,r,o,l){o?(t.opacity=Ye(0,i.opacity??1,gM(r)),t.opacityExit=Ye(e.opacity??1,0,xM(r))):l&&(t.opacity=Ye(e.opacity??1,i.opacity??1,r));for(let u=0;u<hM;u++){const d=`border${Xy[u]}Radius`;let f=zx(e,d),h=zx(i,d);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||Vx(f)===Vx(h)?(t[d]=Math.max(Ye(Hx(f),Hx(h),r),0),($n.test(h)||$n.test(f))&&(t[d]+="%")):t[d]=h}(e.rotate||i.rotate)&&(t.rotate=Ye(e.rotate||0,i.rotate||0,r))}function zx(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const gM=Ky(0,.5,V6),xM=Ky(.5,.95,fn);function Ky(t,e,i){return r=>r<t?0:r>e?1:i(co(t,e,r))}function Px(t,e){t.min=e.min,t.max=e.max}function un(t,e){Px(t.x,e.x),Px(t.y,e.y)}function Nx(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Bx(t,e,i,r,o){return t-=e,t=Rc(t,1/i,r),o!==void 0&&(t=Rc(t,1/o,r)),t}function yM(t,e=0,i=1,r=.5,o,l=t,u=t){if($n.test(e)&&(e=parseFloat(e),e=Ye(u.min,u.max,e/100)-u.min),typeof e!="number")return;let d=Ye(l.min,l.max,r);t===l&&(d-=e),t.min=Bx(t.min,e,i,d,o),t.max=Bx(t.max,e,i,d,o)}function $x(t,e,[i,r,o],l,u){yM(t,e[i],e[r],e[o],e.scale,l,u)}const vM=["x","scaleX","originX"],wM=["y","scaleY","originY"];function Ux(t,e,i,r){$x(t.x,e,vM,i?i.x:void 0,r?r.x:void 0),$x(t.y,e,wM,i?i.y:void 0,r?r.y:void 0)}function _x(t){return t.translate===0&&t.scale===1}function Wy(t){return _x(t.x)&&_x(t.y)}function Ix(t,e){return t.min===e.min&&t.max===e.max}function bM(t,e){return Ix(t.x,e.x)&&Ix(t.y,e.y)}function Gx(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Qy(t,e){return Gx(t.x,e.x)&&Gx(t.y,e.y)}function qx(t){return Lt(t.x)/Lt(t.y)}function Yx(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class SM{constructor(){this.members=[]}add(e){_p(this.members,e),e.scheduleRender()}remove(e){if(Ip(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){const i=this.members.findIndex(o=>e===o);if(i===0)return!1;let r;for(let o=i;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,i){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,i&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:i,resumingFrom:r}=e;i.onExitComplete&&i.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function CM(t,e,i){let r="";const o=t.x.translate/e.x,l=t.y.translate/e.y,u=(i==null?void 0:i.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:h,rotate:m,rotateX:y,rotateY:v,skewX:S,skewY:b}=i;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),y&&(r+=`rotateX(${y}deg) `),v&&(r+=`rotateY(${v}deg) `),S&&(r+=`skewX(${S}deg) `),b&&(r+=`skewY(${b}deg) `)}const d=t.x.scale*e.x,f=t.y.scale*e.y;return(d!==1||f!==1)&&(r+=`scale(${d}, ${f})`),r||"none"}const Qf=["","X","Y","Z"],TM=1e3;let EM=0;function Jf(t,e,i,r){const{latestValues:o}=e;o[t]&&(i[t]=o[t],e.setStaticValue(t,0),r&&(r[t]=0))}function Jy(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const i=Ny(e);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:o,layoutId:l}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",Ie,!(o||l))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&Jy(r)}function ev({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},d=e==null?void 0:e()){this.id=EM++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(jM),this.nodes.forEach(DM),this.nodes.forEach(kM),this.nodes.forEach(LM)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new fM)}addEventListener(u,d){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Yp),this.eventHandlers.get(u).add(d)}notifyListeners(u,...d){const f=this.eventHandlers.get(u);f&&f.notify(...d)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=hy(u)&&!xE(u),this.instance=u;const{layoutId:d,layout:f,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||d)&&(this.isLayoutDirty=!0),t){let m,y=0;const v=()=>this.root.updateBlockedByResize=!1;Ie.read(()=>{y=window.innerWidth}),t(u,()=>{const S=window.innerWidth;S!==y&&(y=S,this.root.updateBlockedByResize=!0,m&&m(),m=pM(v,250),wc.hasAnimatedSinceResize&&(wc.hasAnimatedSinceResize=!1,this.nodes.forEach(Xx)))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&h&&(d||f)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:y,hasRelativeLayoutChanged:v,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||h.getDefaultTransition()||NM,{onLayoutAnimationStart:A,onLayoutAnimationComplete:O}=h.getProps(),j=!this.targetLayout||!Qy(this.targetLayout,S),E=!y&&v;if(this.options.layoutRoot||this.resumeFrom||E||y&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const T={...rh(b,"layout"),onPlay:A,onComplete:O};(h.shouldReduceMotion||this.options.layoutRoot)&&(T.delay=0,T.type=!1),this.startAnimation(T),this.setAnimationOrigin(m,E)}else y||Xx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),_i(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(HM),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Jy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const y=this.path[m];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:d,layout:f}=this.options;if(d===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Fx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Zx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(RM),this.nodes.forEach(AM),this.nodes.forEach(MM)):this.nodes.forEach(Zx),this.clearAllSnapshots();const d=zt.now();xt.delta=di(0,1e3/60,d-xt.timestamp),xt.timestamp=d,xt.isProcessing=!0,Uf.update.process(xt),Uf.preRender.process(xt),Uf.render.process(xt),xt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,oh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(OM),this.sharedNodes.forEach(VM)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ie.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Lt(this.snapshot.measuredBox.x)&&!Lt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(d=!1),d&&this.instance){const f=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:f,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!Wy(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&this.instance&&(d||fa(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const d=this.measurePageBox();let f=this.removeElementScroll(d);return u&&(f=this.removeTransform(f)),BM(f),{animationId:this.root.animationId,measuredBox:d,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:u}=this.options;if(!u)return Qe();const d=u.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some($M))){const{scroll:m}=this.root;m&&(xr(d.x,m.offset.x),xr(d.y,m.offset.y))}return d}removeElementScroll(u){var f;const d=Qe();if(un(d,u),(f=this.scroll)!=null&&f.wasRoot)return d;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:y,options:v}=m;m!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&un(d,u),xr(d.x,y.offset.x),xr(d.y,y.offset.y))}return d}applyTransform(u,d=!1){const f=Qe();un(f,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!d&&m.options.layoutScroll&&m.scroll&&m!==m.root&&yr(f,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),fa(m.latestValues)&&yr(f,m.latestValues)}return fa(this.latestValues)&&yr(f,this.latestValues),f}removeTransform(u){const d=Qe();un(d,u);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!fa(h.latestValues))continue;tp(h.latestValues)&&h.updateSnapshot();const m=Qe(),y=h.measurePageBox();un(m,y),Ux(d,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return fa(this.latestValues)&&Ux(d,this.latestValues),d}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var v;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==d;if(!(u||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:y}=this.options;if(!(!this.layout||!(m||y))){if(this.resolvedRelativeTargetAt=xt.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),eo(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),un(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),YA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):un(this.target,this.layout.layoutBox),Dy(this.target,this.targetDelta)):un(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),eo(this.relativeTargetOrigin,this.target,S.target),un(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||tp(this.parent.latestValues)||Ry(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var b;const u=this.getLead(),d=!!this.resumingFrom||this!==u;let f=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(f=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===xt.timestamp&&(f=!1),f)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;un(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,v=this.treeScale.y;aA(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Qe());const{target:S}=u;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Nx(this.prevProjectionDelta.x,this.projectionDelta.x),Nx(this.prevProjectionDelta.y,this.projectionDelta.y)),Js(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==v||!Yx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Yx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var d;if((d=this.options.visualElement)==null||d.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=vr(),this.projectionDelta=vr(),this.projectionDeltaWithTransform=vr()}setAnimationOrigin(u,d=!1){const f=this.snapshot,h=f?f.latestValues:{},m={...this.latestValues},y=vr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const v=Qe(),S=f?f.source:void 0,b=this.layout?this.layout.source:void 0,A=S!==b,O=this.getStack(),j=!O||O.members.length<=1,E=!!(A&&!j&&this.options.crossfade===!0&&!this.path.some(PM));this.animationProgress=0;let T;this.mixTargetDelta=D=>{const L=D/1e3;Kx(y.x,u.x,L),Kx(y.y,u.y,L),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(eo(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),zM(this.relativeTarget,this.relativeTargetOrigin,v,L),T&&bM(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=Qe()),un(T,this.relativeTarget)),A&&(this.animationValues=m,mM(m,h,this.latestValues,L,E,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var d,f,h;this.notifyListeners("animationStart"),(d=this.currentAnimation)==null||d.stop(),(h=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||h.stop(),this.pendingAnimation&&(_i(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ie.update(()=>{wc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Lr(0)),this.currentAnimation=uM(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),u.onUpdate&&u.onUpdate(m)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(TM),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:d,target:f,layout:h,latestValues:m}=u;if(!(!d||!f||!h)){if(this!==u&&this.layout&&h&&tv(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||Qe();const y=Lt(this.layout.layoutBox.x);f.x.min=u.target.x.min,f.x.max=f.x.min+y;const v=Lt(this.layout.layoutBox.y);f.y.min=u.target.y.min,f.y.max=f.y.min+v}un(d,f),yr(d,m),Js(this.projectionDeltaWithTransform,this.layoutCorrected,d,m)}}registerSharedNode(u,d){this.sharedNodes.has(u)||this.sharedNodes.set(u,new SM),this.sharedNodes.get(u).add(d);const h=d.options.initialPromotionConfig;d.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(d):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var d;const{layoutId:u}=this.options;return u?((d=this.getStack())==null?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:u}=this.options;return u?(d=this.getStack())==null?void 0:d.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:d,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),u&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let d=!1;const{latestValues:f}=u;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(d=!0),!d)return;const h={};f.z&&Jf("z",u,h,this.animationValues);for(let m=0;m<Qf.length;m++)Jf(`rotate${Qf[m]}`,u,h,this.animationValues),Jf(`skew${Qf[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}applyProjectionStyles(u,d){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=vc(d==null?void 0:d.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=vc(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!fa(this.latestValues)&&(u.transform=f?f({},""):"none",this.hasProjected=!1);return}u.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let y=CM(this.projectionDeltaWithTransform,this.treeScale,m);f&&(y=f(m,y)),u.transform=y;const{x:v,y:S}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${S.origin*100}% 0`,h.animationValues?u.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const b in ho){if(m[b]===void 0)continue;const{correct:A,applyTo:O,isCSSVariable:j}=ho[b],E=y==="none"?m[b]:A(m[b],h);if(O){const T=O.length;for(let D=0;D<T;D++)u[O[D]]=E}else j?this.options.visualElement.renderState.vars[b]=E:u[b]=E}this.options.layoutId&&(u.pointerEvents=h===this?vc(d==null?void 0:d.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var d;return(d=u.currentAnimation)==null?void 0:d.stop()}),this.root.nodes.forEach(Fx),this.root.sharedNodes.clear()}}}function AM(t){t.updateLayout()}function MM(t){var i;const e=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=t.layout,{animationType:l}=t.options,u=e.source!==t.layout.source;l==="size"?dn(y=>{const v=u?e.measuredBox[y]:e.layoutBox[y],S=Lt(v);v.min=r[y].min,v.max=v.min+S}):tv(l,e.layoutBox,r)&&dn(y=>{const v=u?e.measuredBox[y]:e.layoutBox[y],S=Lt(r[y]);v.max=v.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+S)});const d=vr();Js(d,r,e.layoutBox);const f=vr();u?Js(f,t.applyTransform(o,!0),e.measuredBox):Js(f,r,e.layoutBox);const h=!Wy(d);let m=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:S}=y;if(v&&S){const b=Qe();eo(b,e.layoutBox,v.layoutBox);const A=Qe();eo(A,r,S.layoutBox),Qy(b,A)||(m=!0),y.options.layoutRoot&&(t.relativeTarget=A,t.relativeTargetOrigin=b,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:f,layoutDelta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:m})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function jM(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function LM(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function OM(t){t.clearSnapshot()}function Fx(t){t.clearMeasurements()}function Zx(t){t.isLayoutDirty=!1}function RM(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Xx(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function DM(t){t.resolveTargetDelta()}function kM(t){t.calcProjection()}function HM(t){t.resetSkewAndRotation()}function VM(t){t.removeLeadSnapshot()}function Kx(t,e,i){t.translate=Ye(e.translate,0,i),t.scale=Ye(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function Wx(t,e,i,r){t.min=Ye(e.min,i.min,r),t.max=Ye(e.max,i.max,r)}function zM(t,e,i,r){Wx(t.x,e.x,i.x,r),Wx(t.y,e.y,i.y,r)}function PM(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const NM={duration:.45,ease:[.4,0,.1,1]},Qx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Jx=Qx("applewebkit/")&&!Qx("chrome/")?Math.round:fn;function e4(t){t.min=Jx(t.min),t.max=Jx(t.max)}function BM(t){e4(t.x),e4(t.y)}function tv(t,e,i){return t==="position"||t==="preserve-aspect"&&!qA(qx(e),qx(i),.2)}function $M(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const UM=ev({attachResizeListener:(t,e)=>mo(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),e0={current:void 0},nv=ev({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!e0.current){const t=new UM({});t.mount(window),t.setOptions({layoutScroll:!0}),e0.current=t}return e0.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),_M={pan:{Feature:sM},drag:{Feature:rM,ProjectionNode:nv,MeasureLayout:Zy}};function t4(t,e,i){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",i==="Start");const o="onHover"+i,l=r[o];l&&Ie.postRender(()=>l(e,Ao(e)))}class IM extends qi{mount(){const{current:e}=this.node;e&&(this.unmount=fE(e,(i,r)=>(t4(this.node,r,"Start"),o=>t4(this.node,o,"End"))))}unmount(){}}class GM extends qi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Co(mo(this.node.current,"focus",()=>this.onFocus()),mo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function n4(t,e,i){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",i==="Start");const o="onTap"+(i==="End"?"":i),l=r[o];l&&Ie.postRender(()=>l(e,Ao(e)))}class qM extends qi{mount(){const{current:e}=this.node;e&&(this.unmount=gE(e,(i,r)=>(n4(this.node,r,"Start"),(o,{success:l})=>n4(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const lp=new WeakMap,t0=new WeakMap,YM=t=>{const e=lp.get(t.target);e&&e(t)},FM=t=>{t.forEach(YM)};function ZM({root:t,...e}){const i=t||document;t0.has(i)||t0.set(i,{});const r=t0.get(i),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(FM,{root:t,...e})),r[o]}function XM(t,e,i){const r=ZM(e);return lp.set(t,i),r.observe(t),()=>{lp.delete(t),r.unobserve(t)}}const KM={some:0,all:1};class WM extends qi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:i,margin:r,amount:o="some",once:l}=e,u={root:i?i.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:KM[o]},d=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:y}=this.node.getProps(),v=h?m:y;v&&v(f)};return XM(this.node.current,u,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(QM(e,i))&&this.startObserver()}unmount(){}}function QM({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const JM={inView:{Feature:WM},tap:{Feature:qM},focus:{Feature:GM},hover:{Feature:IM}},ej={layout:{ProjectionNode:nv,MeasureLayout:Zy}},tj={...BA,...JM,..._M,...ej},Sn=tA(tj,hA),nj=C.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,ij=C.button`
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
`,n0=C(Sn.div)`
  width: 20px;
  height: 2px;
  background: ${({$isOpen:t,$darkMode:e})=>t||e?"black":"white"};
  border-radius: 2px;
  transition: background 0.3s ease;
`,aj=C(Sn.div)`
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
`,rj=C(En)`
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
`,sj=C.p`
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
`;C(Sn.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 8px;
  overflow: hidden;
`;C.div`
  padding: 10px 0;
`;const oj=C.img`
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

  ${oj} {
    padding: 8px;
    margin-right: -8px;
  }
`;const lj=C.div`
  background-color: ${({$active:t})=>t?"#3098EE":"#c3c2c2ff"};
  position: absolute;
  width: 90%;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`,cj=(t,e,i,r)=>{var l,u,d,f;const o=[i,{code:e,...r||{}}];if((u=(l=t==null?void 0:t.services)==null?void 0:l.logger)!=null&&u.forward)return t.services.logger.forward(o,"warn","react-i18next::",!0);wa(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(f=(d=t==null?void 0:t.services)==null?void 0:d.logger)!=null&&f.warn?t.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},i4={},cp=(t,e,i,r)=>{wa(i)&&i4[i]||(wa(i)&&(i4[i]=new Date),cj(t,e,i,r))},iv=(t,e)=>()=>{if(t.isInitialized)e();else{const i=()=>{setTimeout(()=>{t.off("initialized",i)},0),e()};t.on("initialized",i)}},up=(t,e,i)=>{t.loadNamespaces(e,iv(t,i))},a4=(t,e,i,r)=>{if(wa(i)&&(i=[i]),t.options.preload&&t.options.preload.indexOf(e)>-1)return up(t,i,r);i.forEach(o=>{t.options.ns.indexOf(o)<0&&t.options.ns.push(o)}),t.loadLanguages(e,iv(t,r))},uj=(t,e,i={})=>!e.languages||!e.languages.length?(cp(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(t,{lng:i.lng,precheck:(r,o)=>{if(i.bindI18n&&i.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!o(r.isLanguageChangingTo,t))return!1}}),wa=t=>typeof t=="string",dj=t=>typeof t=="object"&&t!==null,fj=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,pj={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},hj=t=>pj[t],mj=t=>t.replace(fj,hj);let dp={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:mj};const gj=(t={})=>{dp={...dp,...t}},xj=()=>dp;let av;const yj=t=>{av=t},vj=()=>av,wj={type:"3rdParty",init(t){gj(t.options.react),yj(t)}},bj=R.createContext();class Sj{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(i=>{this.usedNamespaces[i]||(this.usedNamespaces[i]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Cj=(t,e)=>{const i=R.useRef();return R.useEffect(()=>{i.current=t},[t,e]),i.current},rv=(t,e,i,r)=>t.getFixedT(e,i,r),Tj=(t,e,i,r)=>R.useCallback(rv(t,e,i,r),[t,e,i,r]),vh=(t,e={})=>{var D,L,P,V;const{i18n:i}=e,{i18n:r,defaultNS:o}=R.useContext(bj)||{},l=i||r||vj();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new Sj),!l){cp(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const U=(Y,F)=>wa(F)?F:dj(F)&&wa(F.defaultValue)?F.defaultValue:Array.isArray(Y)?Y[Y.length-1]:Y,$=[U,{},!1];return $.t=U,$.i18n={},$.ready=!1,$}(D=l.options.react)!=null&&D.wait&&cp(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...xj(),...l.options.react,...e},{useSuspense:d,keyPrefix:f}=u;let h=o||((L=l.options)==null?void 0:L.defaultNS);h=wa(h)?[h]:h||["translation"],(V=(P=l.reportNamespaces).addUsedNamespaces)==null||V.call(P,h);const m=(l.isInitialized||l.initializedStoreOnce)&&h.every(U=>uj(U,l,u)),y=Tj(l,e.lng||null,u.nsMode==="fallback"?h:h[0],f),v=()=>y,S=()=>rv(l,e.lng||null,u.nsMode==="fallback"?h:h[0],f),[b,A]=R.useState(v);let O=h.join();e.lng&&(O=`${e.lng}${O}`);const j=Cj(O),E=R.useRef(!0);R.useEffect(()=>{const{bindI18n:U,bindI18nStore:$}=u;E.current=!0,!m&&!d&&(e.lng?a4(l,e.lng,h,()=>{E.current&&A(S)}):up(l,h,()=>{E.current&&A(S)})),m&&j&&j!==O&&E.current&&A(S);const Y=()=>{E.current&&A(S)};return U&&(l==null||l.on(U,Y)),$&&(l==null||l.store.on($,Y)),()=>{E.current=!1,l&&U&&(U==null||U.split(" ").forEach(F=>l.off(F,Y))),$&&l&&$.split(" ").forEach(F=>l.store.off(F,Y))}},[l,O]),R.useEffect(()=>{E.current&&m&&A(v)},[l,f,m]);const T=[b,l,m];if(T.t=b,T.i18n=l,T.ready=m,m||!m&&!d)return T;throw new Promise(U=>{e.lng?a4(l,e.lng,h,()=>U()):up(l,h,()=>U())})},Ej=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  overflow: auto;
  margin-top: 40px;
`,r4=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  width: 166px;
`,Ni=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,Aj=C.div`
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
`,Mj=C.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
`,jj=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 2 * 0.25rem */
  width: 100%;
`,Lj=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;
`,Oj=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 400;
  line-height: 1.2em;
  width: fit-content;
`,Rj={open:{rotate:45,y:8},closed:{rotate:0,y:0}},Dj={open:{opacity:0},closed:{opacity:1}},kj={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},Hj={open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},Vj=({isOpen:t,setIsOpen:e})=>{const[,i]=R.useState(!1),{t:r}=vh(),o=gn(),l=["/contact","/service","/tips","/pricing"].some(f=>o.pathname.startsWith(f));R.useEffect(()=>(document.body.style.overflow=t?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[t]);const u=()=>{e(!1),i(!1)},d=[{to:"/home#hero",label:"Home",active:!0},{to:"/service",label:"Services"},{to:"/about#ap",label:"About Us"},{to:"/tips#app",label:"Tips"},{to:"/contact#ap",label:"Contact"}];return x.jsxs(nj,{children:[x.jsxs(ij,{onClick:()=>e(!t),"aria-label":t?"Close menu":"Open menu",children:[x.jsx(n0,{$isOpen:t,$darkMode:l,animate:t?"open":"closed",variants:Rj}),x.jsx(n0,{$isOpen:t,$darkMode:l,animate:t?"open":"closed",variants:Dj}),x.jsx(n0,{$isOpen:t,$darkMode:l,animate:t?"open":"closed",variants:kj})]}),x.jsx(gy,{children:t&&x.jsxs(aj,{initial:"closed",animate:"open",exit:"closed",variants:Hj,transition:{duration:.3},children:[d.map((f,h)=>x.jsxs("div",{children:[x.jsx(rj,{to:f.to,onClick:u,children:x.jsx(sj,{$active:f.active,children:r(f.label)})}),x.jsx(lj,{})]},h)),x.jsxs(Ej,{children:[x.jsxs(r4,{children:[x.jsx(Ni,{children:"Washing Machine Fix"}),x.jsx(Ni,{children:"Dishwasher Repair"}),x.jsx(Ni,{children:"Oven Maintenance"}),x.jsx(Ni,{children:"Dryer Troubleshooting"})]}),x.jsxs(r4,{children:[x.jsx(Ni,{children:"Microwave Service"}),x.jsx(Ni,{children:"Air Conditioner Repair"}),x.jsx(Ni,{children:"Coffee Maker Repair"}),x.jsx(Ni,{children:"Blender Maintenance"})]})]}),x.jsxs(Aj,{children:[x.jsx(Mj,{}),x.jsxs(jj,{children:[x.jsx(Lj,{children:"Designed by TRBN"}),x.jsx(Oj,{children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})})]})},zj="/assets/LogoandTextContainer-CnBPFIWK.svg",Pj=C.div`
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
`,Nj=C.img`
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
`,Bj=C.div`
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
`,$j=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Uj=C.p`
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
`,_j=C.p`
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
`,Ij=C.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,sv=C(En)`
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
`;So`
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
`;const s4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgBzZFhEcIwDIVTFFRCHYCESZgDJgEHmwPmYJWAhKGgONgccCgoL3e5I1eaAf/I3Xftkry+ZnVUiZyzx9KBPXiAm3Muln27ivCIJYEArmAFLfILCGQFimYTcidwNw8QYSv7A5iEILkBjDUhNy+yD3IQu40q79m9Jm7ALPsOXFRtVe75k7OX+fjAvrjRu7OauaHXz5v5BsqVbzRZYi4moxa+ea4IzkXOi3CgrZDGxLMW39vCilMvwki/hJox0t/FEx1sC+f02XQyAAAAAElFTkSuQmCC",Gj=()=>{const[t,e]=R.useState(!1),[i]=R.useState(!1),[r,o]=R.useState(!1),l=gn(),u=["/contact","/service","/tips","/pricing"].some(S=>l.pathname.startsWith(S)),d=i||r,f=Tp(),h=S=>{S.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),window.location.pathname!=="/home"&&f("/home")};R.useEffect(()=>{const S=new IntersectionObserver(([A])=>{e(!A.isIntersecting)},{threshold:.1,rootMargin:"50px 0px 0px 0px"}),b=document.createElement("div");return b.style.position="absolute",b.style.top="50px",b.style.height="1px",b.style.pointerEvents="none",document.body.appendChild(b),S.observe(b),()=>{S.disconnect(),document.body.contains(b)&&document.body.removeChild(b)}},[]);const m=Ue({query:"(max-width: 1439px)"}),y=Ue({query:"(min-width: 768px) and (max-width: 1439px)"}),v=Ue({query:"(min-width: 1440px)"});return x.jsxs(YS,{$isScrolled:t,$darkMode:u,children:[x.jsxs(FS,{id:"header",children:[x.jsx(ZS,{to:"/home#hero",onClick:h,$overlayOpen:d,$darkMode:u,children:x.jsx("img",{src:zj,alt:"Logo"})}),!m&&x.jsxs(XS,{children:[x.jsx(_s,{children:x.jsx(Is,{to:"/home#hero",$overlayOpen:d,$darkMode:u,children:"Home"})}),x.jsx(_s,{children:x.jsx(Is,{to:"/service#all",$overlayOpen:d,$darkMode:u,children:"Services"})}),x.jsx(_s,{children:x.jsx(Is,{to:"/about#ap",$overlayOpen:d,$darkMode:u,children:"About Us"})}),x.jsx(_s,{children:x.jsx(Is,{to:"/tips#app",$overlayOpen:d,$darkMode:u,children:"Tips"})}),x.jsx(_s,{children:x.jsx(Is,{to:"/contact#ap",$overlayOpen:d,$darkMode:u,children:"Contact"})})]}),v&&x.jsxs(N3,{children:[x.jsxs(ql,{children:[x.jsx(Pi,{$overlayOpen:d,$darkMode:u,children:x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),x.jsx(Pi,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),x.jsxs(ql,{children:[x.jsxs(Pi,{$overlayOpen:d,$darkMode:u,children:[x.jsx("img",{src:s4,alt:"🗺️"}),x.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),x.jsx(Pi,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]}),x.jsx(KS,{children:x.jsxs("div",{style:{display:"flex"},children:[x.jsx(sv,{to:"/contact#ap",children:"Contact Us"}),x.jsx(w6,{$overlayOpen:d,$darkMode:u,children:x.jsx("a",{href:"tel:+18055002705",children:"Call Us"})}),m&&x.jsx(Vj,{isOpen:r,setIsOpen:o})]})})]}),y&&x.jsxs(N3,{children:[x.jsxs(ql,{children:[x.jsx(Pi,{$overlayOpen:d,$darkMode:u,children:x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),x.jsx(Pi,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),x.jsxs(ql,{children:[x.jsxs(Pi,{$overlayOpen:d,$darkMode:u,children:[x.jsx("img",{src:s4,alt:"🗺️"}),x.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),x.jsx(Pi,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]})]})},qj=C.footer`
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
`,Yj=C.div`
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
`,Fj=C.div`
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
`,ai=C.p`
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
`,Zj=C.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
  }
`,Xj=C.p`
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
`,Kj=C.div`
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
`,Wj=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Qj=C.div`
  background: rgba(255, 255, 255, ${({opacity:t})=>t||.5});
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Jj=C.svg`
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
`;C(En)`
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
`;C(En)`
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
`;const eL=C.div`
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
`,tL=C.div`
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
`,nL=C.p`
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
`,iL=C.p`
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
`,aL=C.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
  padding: 20px;
`,rL=C.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  position: relative;

  @media (min-width: 768px) {
    max-width: 80%;
    padding: 40px;
  }

  @media (min-width: 1440px) {
    max-width: 70%;
    padding: 50px;
  }
`,sL=C.button`
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
`,oL=C.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 55px;
  line-height: 90%;
  color: var(--blue-500);
  text-align: center;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`,lL=C.div`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
  height: auto;
  padding: 30px 0;
  background: var(--blue-form);
`,cL=()=>{const t=[{title:"Last Updated: January 20, 2025",content:"At Airtexno, we are dedicated to safeguarding your privacy and ensuring that your personal data is managed securely and responsibly. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or engage with our services."},{title:"INFORMATION WE COLLECT",content:"We may collect the following types of information: Personal Information: Name, email address, phone number, company name, and other details you provide when filling out forms, subscribing to newsletters, or contacting us directly. Usage Data: Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent. We may collect this through cookies and analytics tools. Third-Party Data: Information from services you've authorized us to use (e.g., analytics providers)."},{title:"HOW WE USE YOUR INFORMATION",content:"We may use or share your information with: Service Providers: To help operate our website, analytics, marketing, or provide services on our behalf. Legal Requirements: If required by applicable law or to comply with legal processes. Business Transfers: In the case of a merger or acquisition, data may be shared as part of that process. We do not sell personal data to third parties."},{title:"COOKIES AND TRACKING TECHNOLOGIES",content:"Our site uses cookies and similar technologies to enhance performance and user experience. Cookies help remember your preferences and analyze behavior. You can manage cookies through your browser settings. Please note that disabling cookies may impact site functionality."},{title:"DATA RETENTION",content:"We retain your data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations."},{title:"YOUR RIGHTS",content:"Depending on your location, you may have the right to: Access your data. Request corrections to inaccurate or incomplete data. Request deletion of your personal data. Object to certain processing activities. Request a copy of your data in machine-readable format. To exercise these rights, please contact us using the details below."},{title:"DATA SECURITY",content:"We implement appropriate technical and organizational measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection."},{title:"THIRD-PARTY LINKS",content:"Our website may contain links to external sites. We are not responsible for their privacy practices. We recommend reviewing their privacy policies separately."},{title:"INTERNATIONAL DATA TRANSFERS",content:"If you access our site from outside our operating country, your data may be transferred and processed in other regions where our servers or partners are located. By using the site, you consent to this transfer."},{title:"UPDATES TO THIS POLICY",content:"We may update this Privacy Policy as necessary. Any changes will be reflected by updating the 'Last Updated' date above. We encourage you to check this page periodically."}];return x.jsxs("div",{children:[x.jsx(lL,{children:x.jsx(oL,{children:"Privacy and terms"})}),x.jsx(eL,{children:t.map((e,i)=>x.jsxs(tL,{children:[x.jsx(nL,{children:e.title}),x.jsx(iL,{children:e.content})]},i))})]})},uL=()=>{const[t,e]=R.useState(!1),i=()=>{e(!0)},r=()=>{e(!1)};return x.jsxs(x.Fragment,{children:[x.jsx(qj,{children:x.jsxs(Yj,{children:[x.jsxs(Fj,{children:[x.jsxs(Xj,{children:[x.jsx("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:"801 Tioga pl, Newbury Park, CA 91320"})," ",x.jsx("br",{}),x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"}),x.jsx("br",{})," ",x.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]}),x.jsxs(Kj,{children:[x.jsx(ai,{children:"Home"}),x.jsx(ai,{children:"Services"}),x.jsx(ai,{children:"About Us"}),x.jsx(ai,{children:"Tips"}),x.jsx(ai,{children:"Contacts"}),x.jsx(ai,{onClick:i,style:{cursor:"pointer"},children:"Privacy and Terms"})]})]}),x.jsxs(Wj,{children:[x.jsxs(Jj,{viewBox:"0 0 343 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[x.jsx("path",{d:"M0 54.8045L19.396 1.71207H26.1359L45.457 54.8045H39.9152L34.2238 38.8768H11.2332L5.5417 54.8045H0ZM12.9556 33.9414H32.5013L22.7659 6.27353L12.9556 33.9414Z",fill:"#3098EE"}),x.jsx("path",{d:"M51.2842 54.8045V1.71207H56.3765V54.8045H51.2842Z",fill:"#3098EE"}),x.jsx("path",{d:"M67.6308 54.8045V1.71207H87.1016C90.896 1.71207 94.1161 2.36015 96.7622 3.6563C99.4581 4.9026 101.53 6.69727 102.978 9.04032C104.426 11.3834 105.15 14.2 105.15 17.4902C105.15 19.933 104.575 22.1015 103.427 23.9959C102.329 25.8903 100.856 27.4108 99.0088 28.5574C97.1616 29.704 95.1646 30.3521 93.0178 30.5016L92.6433 29.8286C96.1381 29.8286 98.8341 30.6262 100.731 32.2215C102.678 33.7669 103.802 36.2097 104.101 39.5498L105.449 54.8045H100.282L99.0088 39.9984C98.8091 37.5557 97.9354 35.761 96.3877 34.6144C94.84 33.418 92.3438 32.8197 88.8989 32.8197H72.7232V54.8045H67.6308ZM72.7232 27.8844H87.9254C91.5699 27.8844 94.4407 26.987 96.5375 25.1924C98.6843 23.3478 99.7577 20.7555 99.7577 17.4155C99.7577 13.9258 98.6843 11.2587 96.5375 9.41421C94.3907 7.56968 91.2205 6.64742 87.0267 6.64742H72.7232V27.8844Z",fill:"#3098EE"}),x.jsx("path",{d:"M125.684 54.8045V9.1151H109.359V1.71207H150.098V9.1151H133.772V54.8045H125.684Z",fill:"white"}),x.jsx("path",{d:"M153.991 54.8045V1.71207H188.589V9.1151H162.079V24.5941H187.691V31.7728H162.079V47.4014H189.188V54.8045H153.991Z",fill:"white"}),x.jsx("path",{d:"M192.736 54.8045L210.41 28.1835L192.886 1.71207H202.397L215.502 21.9021L228.383 1.71207H237.819L220.295 28.0339L238.043 54.8045H228.533L215.352 34.3153L202.172 54.8045H192.736Z",fill:"white"}),x.jsx("path",{d:"M243.289 54.8045V1.71207H253.549L278.112 45.0085V1.71207H286.2V54.8045H275.566L251.377 12.4801V54.8045H243.289Z",fill:"white"}),x.jsx("path",{d:"M318.137 56.0009C312.995 56.0009 308.577 54.9042 304.882 52.7107C301.188 50.4674 298.342 47.2768 296.345 43.1391C294.348 39.0014 293.349 34.066 293.349 28.333C293.349 22.6001 294.348 17.6647 296.345 13.527C298.342 9.33943 301.188 6.12397 304.882 3.88063C308.577 1.63729 312.995 0.515625 318.137 0.515625C323.329 0.515625 327.773 1.63729 331.467 3.88063C335.212 6.12397 338.057 9.33943 340.004 13.527C342.001 17.6647 343 22.6001 343 28.333C343 34.066 342.001 39.0014 340.004 43.1391C338.057 47.2768 335.212 50.4674 331.467 52.7107C327.773 54.9042 323.329 56.0009 318.137 56.0009ZM318.137 48.5979C321.582 48.5979 324.528 47.8003 326.974 46.205C329.47 44.6097 331.367 42.3165 332.665 39.3254C333.964 36.2844 334.613 32.6203 334.613 28.333C334.613 24.0458 333.964 20.3817 332.665 17.3407C331.367 14.2997 329.47 11.9816 326.974 10.3863C324.528 8.74121 321.582 7.91865 318.137 7.91865C314.742 7.91865 311.822 8.74121 309.375 10.3863C306.929 11.9816 305.032 14.2997 303.684 17.3407C302.386 20.3817 301.737 24.0458 301.737 28.333C301.737 32.6203 302.386 36.2844 303.684 39.3254C305.032 42.3165 306.929 44.6097 309.375 46.205C311.822 47.8003 314.742 48.5979 318.137 48.5979Z",fill:"white"})]}),x.jsx(Qj,{opacity:.5}),x.jsxs(Zj,{children:[x.jsx(ai,{size:"14px",weight:"500",children:"Designed by TRBN"}),x.jsx(ai,{onClick:i,style:{cursor:"pointer"},children:"Privacy and terms"}),x.jsx(ai,{size:"14px",children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})}),t&&x.jsx(aL,{onClick:r,children:x.jsxs(rL,{onClick:o=>o.stopPropagation(),children:[x.jsx(sL,{onClick:r,children:"×"}),x.jsx(cL,{})]})})]})},dL="data:image/svg+xml,%3csvg%20width='1360'%20height='220'%20viewBox='0%200%201360%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%20215.256L76.9053%204.74393H103.629L180.237%20215.256H158.265L135.698%20152.102H44.5397L21.9729%20215.256H0ZM51.3692%20132.534H128.868L90.2672%2022.8302L51.3692%20132.534Z'%20fill='%233098EE'/%3e%3cpath%20d='M203.342%20215.256V4.74393H223.534V215.256H203.342Z'%20fill='%233098EE'/%3e%3cpath%20d='M268.157%20215.256V4.74393H345.359C360.404%204.74393%20373.172%207.31356%20383.663%2012.4528C394.353%2017.3944%20402.568%2024.5103%20408.309%2033.8005C414.049%2043.0907%20416.92%2054.2588%20416.92%2067.3046C416.92%2076.9901%20414.643%2085.5885%20410.09%2093.0997C405.735%20100.611%20399.896%20106.64%20392.571%20111.186C385.247%20115.732%20377.329%20118.302%20368.817%20118.895L367.332%20116.226C381.189%20116.226%20391.879%20119.389%20399.401%20125.714C407.121%20131.842%20411.575%20141.527%20412.763%20154.771L418.108%20215.256H397.619L392.571%20156.55C391.78%20146.864%20388.315%20139.748%20382.179%20135.202C376.042%20130.458%20366.144%20128.086%20352.486%20128.086H288.348V215.256H268.157ZM288.348%20108.518H348.626C363.076%20108.518%20374.459%20104.96%20382.773%2097.8437C391.285%2090.5301%20395.541%2080.2516%20395.541%2067.0081C395.541%2053.1716%20391.285%2042.5966%20382.773%2035.283C374.261%2027.9694%20361.69%2024.3127%20345.062%2024.3127H288.348V108.518Z'%20fill='%233098EE'/%3e%3cpath%20d='M498.339%20215.256V34.097H433.608V4.74393H595.139V34.097H530.408V215.256H498.339Z'%20fill='white'/%3e%3cpath%20d='M610.577%20215.256V4.74393H747.76V34.097H642.646V95.4717H744.196V123.935H642.646V185.903H750.135V215.256H610.577Z'%20fill='white'/%3e%3cpath%20d='M764.202%20215.256L834.278%20109.704L764.796%204.74393H802.506L854.469%2084.7978L905.542%204.74393H942.955L873.473%20109.111L943.846%20215.256H906.135L853.875%20134.016L801.616%20215.256H764.202Z'%20fill='white'/%3e%3cpath%20d='M964.645%20215.256V4.74393H1005.32L1102.72%20176.415V4.74393H1134.79V215.256H1092.62L996.714%2047.4393V215.256H964.645Z'%20fill='white'/%3e%3cpath%20d='M1261.42%20220C1241.03%20220%201223.51%20215.651%201208.86%20206.954C1194.21%20198.059%201182.93%20185.409%201175.01%20169.003C1167.09%20152.597%201163.13%20133.028%201163.13%20110.296C1163.13%2087.5651%201167.09%2067.9964%201175.01%2051.5903C1182.93%2034.9865%201194.21%2022.2372%201208.86%2013.3423C1223.51%204.44743%201241.03%200%201261.42%200C1282.01%200%201299.62%204.44743%201314.27%2013.3423C1329.12%2022.2372%201340.4%2034.9865%201348.12%2051.5903C1356.04%2067.9964%201360%2087.5651%201360%20110.296C1360%20133.028%201356.04%20152.597%201348.12%20169.003C1340.4%20185.409%201329.12%20198.059%201314.27%20206.954C1299.62%20215.651%201282.01%20220%201261.42%20220ZM1261.42%20190.647C1275.08%20190.647%201286.76%20187.484%201296.46%20181.159C1306.35%20174.834%201313.88%20165.741%201319.02%20153.881C1324.17%20141.824%201326.74%20127.296%201326.74%20110.296C1326.74%2093.2974%201324.17%2078.7691%201319.02%2066.7116C1313.88%2054.6541%201306.35%2045.4627%201296.46%2039.1375C1286.76%2032.6145%201275.08%2029.3531%201261.42%2029.3531C1247.96%2029.3531%201236.38%2032.6145%201226.68%2039.1375C1216.98%2045.4627%201209.46%2054.6541%201204.11%2066.7116C1198.96%2078.7691%201196.39%2093.2974%201196.39%20110.296C1196.39%20127.296%201198.96%20141.824%201204.11%20153.881C1209.46%20165.741%201216.98%20174.834%201226.68%20181.159C1236.38%20187.484%201247.96%20190.647%201261.42%20190.647Z'%20fill='white'/%3e%3c/svg%3e",fL="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",pL=So`
  from { opacity: 0; }
  to { opacity: 1; }
`,hL=So`
  from { opacity: 1; }
  to { opacity: 0; }
`,mL=So`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
`,gL=C.div`
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  ${({$hide:t})=>t&&Pr`
      animation: ${hL} 1s forwards;
    `}
`,xL=C.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  ${({$visible:t})=>t&&Pr`
      animation: ${pL} 1.5s forwards;
    `}
`,yL=C.img`
  position: absolute;
  width: min-content;
  height: 27px;
  opacity: 0;
  ${({$show:t})=>t&&Pr`
      animation: ${mL} 2s forwards;
    `}

      @media screen and (min-width: 744px) {
   height: 100px;
  }

  @media screen and (min-width: 1440px) {
  height: 240px;
  }
`,vL=({onComplete:t})=>{const[e,i]=R.useState(!0),[r,o]=R.useState(!1),[l,u]=R.useState(!1),d=R.useRef(null);return R.useEffect(()=>{d.current&&(d.current.onended=()=>{i(!1),o(!0),setTimeout(()=>{u(!0),setTimeout(t,1e3)},3e3)})},[t]),x.jsxs(gL,{$hide:l,children:[e&&x.jsx(xL,{ref:d,$visible:e,autoPlay:!0,muted:!0,playsInline:!0,children:x.jsx("source",{src:fL,type:"video/mp4"})}),r&&x.jsx(yL,{src:dL,alt:"Logo",$show:r})]})},wL=()=>{const t=gn(),[e,i]=R.useState(!1);R.useEffect(()=>{const o=()=>{sessionStorage.clear()};return window.addEventListener("beforeunload",o),()=>{window.removeEventListener("beforeunload",o)}},[]),R.useEffect(()=>{sessionStorage.getItem("hasSeenPreloader")||i(!0)},[]);const r=()=>{sessionStorage.setItem("hasSeenPreloader","true"),i(!1)};return R.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[t.pathname]),e?x.jsx(vL,{onComplete:r}):x.jsxs(x.Fragment,{children:[x.jsx(Gj,{}),x.jsx(R.Suspense,{children:x.jsx(h9,{})}),x.jsx(uL,{})]})};function o4(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function wh(t,e){t===void 0&&(t={}),e===void 0&&(e={});const i=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:o4(e[r])&&o4(t[r])&&Object.keys(e[r]).length>0&&wh(t[r],e[r])})}const ov={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Un(){const t=typeof document<"u"?document:{};return wh(t,ov),t}const bL={document:ov,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function Et(){const t=typeof window<"u"?window:{};return wh(t,bL),t}function SL(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function CL(t){const e=t;Object.keys(e).forEach(i=>{try{e[i]=null}catch{}try{delete e[i]}catch{}})}function Dc(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function li(){return Date.now()}function TL(t){const e=Et();let i;return e.getComputedStyle&&(i=e.getComputedStyle(t,null)),!i&&t.currentStyle&&(i=t.currentStyle),i||(i=t.style),i}function EL(t,e){e===void 0&&(e="x");const i=Et();let r,o,l;const u=TL(t);return i.WebKitCSSMatrix?(o=u.transform||u.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(d=>d.replace(",",".")).join(", ")),l=new i.WebKitCSSMatrix(o==="none"?"":o)):(l=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=l.toString().split(",")),e==="x"&&(i.WebKitCSSMatrix?o=l.m41:r.length===16?o=parseFloat(r[12]):o=parseFloat(r[4])),e==="y"&&(i.WebKitCSSMatrix?o=l.m42:r.length===16?o=parseFloat(r[13]):o=parseFloat(r[5])),o||0}function Wl(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function AL(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Xt(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){const r=i<0||arguments.length<=i?void 0:arguments[i];if(r!=null&&!AL(r)){const o=Object.keys(Object(r)).filter(l=>e.indexOf(l)<0);for(let l=0,u=o.length;l<u;l+=1){const d=o[l],f=Object.getOwnPropertyDescriptor(r,d);f!==void 0&&f.enumerable&&(Wl(t[d])&&Wl(r[d])?r[d].__swiper__?t[d]=r[d]:Xt(t[d],r[d]):!Wl(t[d])&&Wl(r[d])?(t[d]={},r[d].__swiper__?t[d]=r[d]:Xt(t[d],r[d])):t[d]=r[d])}}}return t}function Ql(t,e,i){t.style.setProperty(e,i)}function lv(t){let{swiper:e,targetPosition:i,side:r}=t;const o=Et(),l=-e.translate;let u=null,d;const f=e.params.speed;e.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(e.cssModeFrameID);const h=i>l?"next":"prev",m=(v,S)=>h==="next"&&v>=S||h==="prev"&&v<=S,y=()=>{d=new Date().getTime(),u===null&&(u=d);const v=Math.max(Math.min((d-u)/f,1),0),S=.5-Math.cos(v*Math.PI)/2;let b=l+S*(i-l);if(m(b,i)&&(b=i),e.wrapperEl.scrollTo({[r]:b}),m(b,i)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:b})}),o.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=o.requestAnimationFrame(y)};y()}function Vn(t,e){e===void 0&&(e="");const i=Et(),r=[...t.children];return i.HTMLSlotElement&&t instanceof HTMLSlotElement&&r.push(...t.assignedElements()),e?r.filter(o=>o.matches(e)):r}function ML(t,e){const i=[e];for(;i.length>0;){const r=i.shift();if(t===r)return!0;i.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function jL(t,e){const i=Et();let r=e.contains(t);return!r&&i.HTMLSlotElement&&e instanceof HTMLSlotElement&&(r=[...e.assignedElements()].includes(t),r||(r=ML(t,e))),r}function kc(t){try{console.warn(t);return}catch{}}function Hc(t,e){e===void 0&&(e=[]);const i=document.createElement(t);return i.classList.add(...Array.isArray(e)?e:SL(e)),i}function LL(t,e){const i=[];for(;t.previousElementSibling;){const r=t.previousElementSibling;e?r.matches(e)&&i.push(r):i.push(r),t=r}return i}function OL(t,e){const i=[];for(;t.nextElementSibling;){const r=t.nextElementSibling;e?r.matches(e)&&i.push(r):i.push(r),t=r}return i}function Ui(t,e){return Et().getComputedStyle(t,null).getPropertyValue(e)}function Vc(t){let e=t,i;if(e){for(i=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(i+=1);return i}}function cv(t,e){const i=[];let r=t.parentElement;for(;r;)e?r.matches(e)&&i.push(r):i.push(r),r=r.parentElement;return i}function fp(t,e,i){const r=Et();return t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function dt(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}function zc(t,e){e===void 0&&(e=""),typeof trustedTypes<"u"?t.innerHTML=trustedTypes.createPolicy("html",{createHTML:i=>i}).createHTML(e):t.innerHTML=e}function i0(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l=Et();i({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let u,d=li(),f;const h=[];function m(T){let V=0,U=0,$=0,Y=0;return"detail"in T&&(U=T.detail),"wheelDelta"in T&&(U=-T.wheelDelta/120),"wheelDeltaY"in T&&(U=-T.wheelDeltaY/120),"wheelDeltaX"in T&&(V=-T.wheelDeltaX/120),"axis"in T&&T.axis===T.HORIZONTAL_AXIS&&(V=U,U=0),$=V*10,Y=U*10,"deltaY"in T&&(Y=T.deltaY),"deltaX"in T&&($=T.deltaX),T.shiftKey&&!$&&($=Y,Y=0),($||Y)&&T.deltaMode&&(T.deltaMode===1?($*=40,Y*=40):($*=800,Y*=800)),$&&!V&&(V=$<1?-1:1),Y&&!U&&(U=Y<1?-1:1),{spinX:V,spinY:U,pixelX:$,pixelY:Y}}function y(){e.enabled&&(e.mouseEntered=!0)}function v(){e.enabled&&(e.mouseEntered=!1)}function S(T){return e.params.mousewheel.thresholdDelta&&T.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&li()-d<e.params.mousewheel.thresholdTime?!1:T.delta>=6&&li()-d<60?!0:(T.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),o("scroll",T.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),o("scroll",T.raw)),d=new l.Date().getTime(),!1)}function b(T){const D=e.params.mousewheel;if(T.direction<0){if(e.isEnd&&!e.params.loop&&D.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&D.releaseOnEdges)return!0;return!1}function A(T){let D=T,L=!0;if(!e.enabled||T.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const P=e.params.mousewheel;e.params.cssMode&&D.preventDefault();let V=e.el;e.params.mousewheel.eventsTarget!=="container"&&(V=document.querySelector(e.params.mousewheel.eventsTarget));const U=V&&V.contains(D.target);if(!e.mouseEntered&&!U&&!P.releaseOnEdges)return!0;D.originalEvent&&(D=D.originalEvent);let $=0;const Y=e.rtlTranslate?-1:1,F=m(D);if(P.forceToAxis)if(e.isHorizontal())if(Math.abs(F.pixelX)>Math.abs(F.pixelY))$=-F.pixelX*Y;else return!0;else if(Math.abs(F.pixelY)>Math.abs(F.pixelX))$=-F.pixelY;else return!0;else $=Math.abs(F.pixelX)>Math.abs(F.pixelY)?-F.pixelX*Y:-F.pixelY;if($===0)return!0;P.invert&&($=-$);let te=e.getTranslate()+$*P.sensitivity;if(te>=e.minTranslate()&&(te=e.minTranslate()),te<=e.maxTranslate()&&(te=e.maxTranslate()),L=e.params.loop?!0:!(te===e.minTranslate()||te===e.maxTranslate()),L&&e.params.nested&&D.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const ie={time:li(),delta:Math.abs($),direction:Math.sign($),raw:T};h.length>=2&&h.shift();const oe=h.length?h[h.length-1]:void 0;if(h.push(ie),oe?(ie.direction!==oe.direction||ie.delta>oe.delta||ie.time>oe.time+150)&&S(ie):S(ie),b(ie))return!0}else{const ie={time:li(),delta:Math.abs($),direction:Math.sign($)},oe=f&&ie.time<f.time+500&&ie.delta<=f.delta&&ie.direction===f.direction;if(!oe){f=void 0;let re=e.getTranslate()+$*P.sensitivity;const B=e.isBeginning,K=e.isEnd;if(re>=e.minTranslate()&&(re=e.minTranslate()),re<=e.maxTranslate()&&(re=e.maxTranslate()),e.setTransition(0),e.setTranslate(re),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!B&&e.isBeginning||!K&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:ie.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(u),u=void 0,h.length>=15&&h.shift();const W=h.length?h[h.length-1]:void 0,ee=h[0];if(h.push(ie),W&&(ie.delta>W.delta||ie.direction!==W.direction))h.splice(0);else if(h.length>=15&&ie.time-ee.time<500&&ee.delta-ie.delta>=1&&ie.delta<=6){const k=$>0?.8:.2;f=ie,h.splice(0),u=Dc(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,k)},0)}u||(u=Dc(()=>{if(e.destroyed||!e.params)return;const k=.5;f=ie,h.splice(0),e.slideToClosest(e.params.speed,!0,void 0,k)},500))}if(oe||o("scroll",D),e.params.autoplay&&e.params.autoplay.disableOnInteraction&&e.autoplay.stop(),P.releaseOnEdges&&(re===e.minTranslate()||re===e.maxTranslate()))return!0}}return D.preventDefault?D.preventDefault():D.returnValue=!1,!1}function O(T){let D=e.el;e.params.mousewheel.eventsTarget!=="container"&&(D=document.querySelector(e.params.mousewheel.eventsTarget)),D[T]("mouseenter",y),D[T]("mouseleave",v),D[T]("wheel",A)}function j(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",A),!0):e.mousewheel.enabled?!1:(O("addEventListener"),e.mousewheel.enabled=!0,!0)}function E(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,A),!0):e.mousewheel.enabled?(O("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}r("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&E(),e.params.mousewheel.enabled&&j()}),r("destroy",()=>{e.params.cssMode&&j(),e.mousewheel.enabled&&E()}),Object.assign(e.mousewheel,{enable:j,disable:E})}function uv(t,e,i,r){return t.params.createElements&&Object.keys(r).forEach(o=>{if(!i[o]&&i.auto===!0){let l=Vn(t.el,`.${r[o]}`)[0];l||(l=Hc("div",r[o]),l.className=r[o],t.el.append(l)),i[o]=l,e[o]=l}}),i}function dv(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function l(b){let A;return b&&typeof b=="string"&&e.isElement&&(A=e.el.querySelector(b)||e.hostEl.querySelector(b),A)?A:(b&&(typeof b=="string"&&(A=[...document.querySelectorAll(b)]),e.params.uniqueNavElements&&typeof b=="string"&&A&&A.length>1&&e.el.querySelectorAll(b).length===1?A=e.el.querySelector(b):A&&A.length===1&&(A=A[0])),b&&!A?b:A)}function u(b,A){const O=e.params.navigation;b=dt(b),b.forEach(j=>{j&&(j.classList[A?"add":"remove"](...O.disabledClass.split(" ")),j.tagName==="BUTTON"&&(j.disabled=A),e.params.watchOverflow&&e.enabled&&j.classList[e.isLocked?"add":"remove"](O.lockClass))})}function d(){const{nextEl:b,prevEl:A}=e.navigation;if(e.params.loop){u(A,!1),u(b,!1);return}u(A,e.isBeginning&&!e.params.rewind),u(b,e.isEnd&&!e.params.rewind)}function f(b){b.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),o("navigationPrev"))}function h(b){b.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),o("navigationNext"))}function m(){const b=e.params.navigation;if(e.params.navigation=uv(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(b.nextEl||b.prevEl))return;let A=l(b.nextEl),O=l(b.prevEl);Object.assign(e.navigation,{nextEl:A,prevEl:O}),A=dt(A),O=dt(O);const j=(E,T)=>{E&&E.addEventListener("click",T==="next"?h:f),!e.enabled&&E&&E.classList.add(...b.lockClass.split(" "))};A.forEach(E=>j(E,"next")),O.forEach(E=>j(E,"prev"))}function y(){let{nextEl:b,prevEl:A}=e.navigation;b=dt(b),A=dt(A);const O=(j,E)=>{j.removeEventListener("click",E==="next"?h:f),j.classList.remove(...e.params.navigation.disabledClass.split(" "))};b.forEach(j=>O(j,"next")),A.forEach(j=>O(j,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?S():(m(),d())}),r("toEdge fromEdge lock unlock",()=>{d()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{nextEl:b,prevEl:A}=e.navigation;if(b=dt(b),A=dt(A),e.enabled){d();return}[...b,...A].filter(O=>!!O).forEach(O=>O.classList.add(e.params.navigation.lockClass))}),r("click",(b,A)=>{let{nextEl:O,prevEl:j}=e.navigation;O=dt(O),j=dt(j);const E=A.target;let T=j.includes(E)||O.includes(E);if(e.isElement&&!T){const D=A.path||A.composedPath&&A.composedPath();D&&(T=D.find(L=>O.includes(L)||j.includes(L)))}if(e.params.navigation.hideOnClick&&!T){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===E||e.pagination.el.contains(E)))return;let D;O.length?D=O[0].classList.contains(e.params.navigation.hiddenClass):j.length&&(D=j[0].classList.contains(e.params.navigation.hiddenClass)),o(D===!0?"navigationShow":"navigationHide"),[...O,...j].filter(L=>!!L).forEach(L=>L.classList.toggle(e.params.navigation.hiddenClass))}});const v=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),m(),d()},S=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),y()};Object.assign(e.navigation,{enable:v,disable:S,update:d,init:m,destroy:y})}function qs(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function RL(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:E=>E,formatFractionTotal:E=>E,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),e.pagination={el:null,bullets:[]};let u,d=0;function f(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function h(E,T){const{bulletActiveClass:D}=e.params.pagination;E&&(E=E[`${T==="prev"?"previous":"next"}ElementSibling`],E&&(E.classList.add(`${D}-${T}`),E=E[`${T==="prev"?"previous":"next"}ElementSibling`],E&&E.classList.add(`${D}-${T}-${T}`)))}function m(E,T,D){if(E=E%D,T=T%D,T===E+1)return"next";if(T===E-1)return"previous"}function y(E){const T=E.target.closest(qs(e.params.pagination.bulletClass));if(!T)return;E.preventDefault();const D=Vc(T)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===D)return;const L=m(e.realIndex,D,e.slides.length);L==="next"?e.slideNext():L==="previous"?e.slidePrev():e.slideToLoop(D)}else e.slideTo(D)}function v(){const E=e.rtl,T=e.params.pagination;if(f())return;let D=e.pagination.el;D=dt(D);let L,P;const V=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,U=e.params.loop?Math.ceil(V/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(P=e.previousRealIndex||0,L=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(L=e.snapIndex,P=e.previousSnapIndex):(P=e.previousIndex||0,L=e.activeIndex||0),T.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const $=e.pagination.bullets;let Y,F,te;if(T.dynamicBullets&&(u=fp($[0],e.isHorizontal()?"width":"height"),D.forEach(ie=>{ie.style[e.isHorizontal()?"width":"height"]=`${u*(T.dynamicMainBullets+4)}px`}),T.dynamicMainBullets>1&&P!==void 0&&(d+=L-(P||0),d>T.dynamicMainBullets-1?d=T.dynamicMainBullets-1:d<0&&(d=0)),Y=Math.max(L-d,0),F=Y+(Math.min($.length,T.dynamicMainBullets)-1),te=(F+Y)/2),$.forEach(ie=>{const oe=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(re=>`${T.bulletActiveClass}${re}`)].map(re=>typeof re=="string"&&re.includes(" ")?re.split(" "):re).flat();ie.classList.remove(...oe)}),D.length>1)$.forEach(ie=>{const oe=Vc(ie);oe===L?ie.classList.add(...T.bulletActiveClass.split(" ")):e.isElement&&ie.setAttribute("part","bullet"),T.dynamicBullets&&(oe>=Y&&oe<=F&&ie.classList.add(...`${T.bulletActiveClass}-main`.split(" ")),oe===Y&&h(ie,"prev"),oe===F&&h(ie,"next"))});else{const ie=$[L];if(ie&&ie.classList.add(...T.bulletActiveClass.split(" ")),e.isElement&&$.forEach((oe,re)=>{oe.setAttribute("part",re===L?"bullet-active":"bullet")}),T.dynamicBullets){const oe=$[Y],re=$[F];for(let B=Y;B<=F;B+=1)$[B]&&$[B].classList.add(...`${T.bulletActiveClass}-main`.split(" "));h(oe,"prev"),h(re,"next")}}if(T.dynamicBullets){const ie=Math.min($.length,T.dynamicMainBullets+4),oe=(u*ie-u)/2-te*u,re=E?"right":"left";$.forEach(B=>{B.style[e.isHorizontal()?re:"top"]=`${oe}px`})}}D.forEach(($,Y)=>{if(T.type==="fraction"&&($.querySelectorAll(qs(T.currentClass)).forEach(F=>{F.textContent=T.formatFractionCurrent(L+1)}),$.querySelectorAll(qs(T.totalClass)).forEach(F=>{F.textContent=T.formatFractionTotal(U)})),T.type==="progressbar"){let F;T.progressbarOpposite?F=e.isHorizontal()?"vertical":"horizontal":F=e.isHorizontal()?"horizontal":"vertical";const te=(L+1)/U;let ie=1,oe=1;F==="horizontal"?ie=te:oe=te,$.querySelectorAll(qs(T.progressbarFillClass)).forEach(re=>{re.style.transform=`translate3d(0,0,0) scaleX(${ie}) scaleY(${oe})`,re.style.transitionDuration=`${e.params.speed}ms`})}T.type==="custom"&&T.renderCustom?(zc($,T.renderCustom(e,L+1,U)),Y===0&&o("paginationRender",$)):(Y===0&&o("paginationRender",$),o("paginationUpdate",$)),e.params.watchOverflow&&e.enabled&&$.classList[e.isLocked?"add":"remove"](T.lockClass)})}function S(){const E=e.params.pagination;if(f())return;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let D=e.pagination.el;D=dt(D);let L="";if(E.type==="bullets"){let P=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&P>T&&(P=T);for(let V=0;V<P;V+=1)E.renderBullet?L+=E.renderBullet.call(e,V,E.bulletClass):L+=`<${E.bulletElement} ${e.isElement?'part="bullet"':""} class="${E.bulletClass}"></${E.bulletElement}>`}E.type==="fraction"&&(E.renderFraction?L=E.renderFraction.call(e,E.currentClass,E.totalClass):L=`<span class="${E.currentClass}"></span> / <span class="${E.totalClass}"></span>`),E.type==="progressbar"&&(E.renderProgressbar?L=E.renderProgressbar.call(e,E.progressbarFillClass):L=`<span class="${E.progressbarFillClass}"></span>`),e.pagination.bullets=[],D.forEach(P=>{E.type!=="custom"&&zc(P,L||""),E.type==="bullets"&&e.pagination.bullets.push(...P.querySelectorAll(qs(E.bulletClass)))}),E.type!=="custom"&&o("paginationRender",D[0])}function b(){e.params.pagination=uv(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const E=e.params.pagination;if(!E.el)return;let T;typeof E.el=="string"&&e.isElement&&(T=e.el.querySelector(E.el)),!T&&typeof E.el=="string"&&(T=[...document.querySelectorAll(E.el)]),T||(T=E.el),!(!T||T.length===0)&&(e.params.uniqueNavElements&&typeof E.el=="string"&&Array.isArray(T)&&T.length>1&&(T=[...e.el.querySelectorAll(E.el)],T.length>1&&(T=T.find(D=>cv(D,".swiper")[0]===e.el))),Array.isArray(T)&&T.length===1&&(T=T[0]),Object.assign(e.pagination,{el:T}),T=dt(T),T.forEach(D=>{E.type==="bullets"&&E.clickable&&D.classList.add(...(E.clickableClass||"").split(" ")),D.classList.add(E.modifierClass+E.type),D.classList.add(e.isHorizontal()?E.horizontalClass:E.verticalClass),E.type==="bullets"&&E.dynamicBullets&&(D.classList.add(`${E.modifierClass}${E.type}-dynamic`),d=0,E.dynamicMainBullets<1&&(E.dynamicMainBullets=1)),E.type==="progressbar"&&E.progressbarOpposite&&D.classList.add(E.progressbarOppositeClass),E.clickable&&D.addEventListener("click",y),e.enabled||D.classList.add(E.lockClass)}))}function A(){const E=e.params.pagination;if(f())return;let T=e.pagination.el;T&&(T=dt(T),T.forEach(D=>{D.classList.remove(E.hiddenClass),D.classList.remove(E.modifierClass+E.type),D.classList.remove(e.isHorizontal()?E.horizontalClass:E.verticalClass),E.clickable&&(D.classList.remove(...(E.clickableClass||"").split(" ")),D.removeEventListener("click",y))})),e.pagination.bullets&&e.pagination.bullets.forEach(D=>D.classList.remove(...E.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const E=e.params.pagination;let{el:T}=e.pagination;T=dt(T),T.forEach(D=>{D.classList.remove(E.horizontalClass,E.verticalClass),D.classList.add(e.isHorizontal()?E.horizontalClass:E.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?j():(b(),S(),v())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&v()}),r("snapIndexChange",()=>{v()}),r("snapGridLengthChange",()=>{S(),v()}),r("destroy",()=>{A()}),r("enable disable",()=>{let{el:E}=e.pagination;E&&(E=dt(E),E.forEach(T=>T.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{v()}),r("click",(E,T)=>{const D=T.target,L=dt(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&L&&L.length>0&&!D.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&D===e.navigation.nextEl||e.navigation.prevEl&&D===e.navigation.prevEl))return;const P=L[0].classList.contains(e.params.pagination.hiddenClass);o(P===!0?"paginationShow":"paginationHide"),L.forEach(V=>V.classList.toggle(e.params.pagination.hiddenClass))}});const O=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:E}=e.pagination;E&&(E=dt(E),E.forEach(T=>T.classList.remove(e.params.pagination.paginationDisabledClass))),b(),S(),v()},j=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:E}=e.pagination;E&&(E=dt(E),E.forEach(T=>T.classList.add(e.params.pagination.paginationDisabledClass))),A()};Object.assign(e.pagination,{enable:O,disable:j,render:S,update:v,init:b,destroy:A})}function pn(t){let{swiper:e,extendParams:i,on:r,emit:o,params:l}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,d,f=l&&l.autoplay?l.autoplay.delay:3e3,h=l&&l.autoplay?l.autoplay.delay:3e3,m,y=new Date().getTime(),v,S,b,A,O,j,E;function T(W){!e||e.destroyed||!e.wrapperEl||W.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",T),!(E||W.detail&&W.detail.bySwiperTouchMove)&&Y())}const D=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?v=!0:v&&(h=m,v=!1);const W=e.autoplay.paused?m:y+h-new Date().getTime();e.autoplay.timeLeft=W,o("autoplayTimeLeft",W,W/f),d=requestAnimationFrame(()=>{D()})},L=()=>{let W;return e.virtual&&e.params.virtual.enabled?W=e.slides.find(k=>k.classList.contains("swiper-slide-active")):W=e.slides[e.activeIndex],W?parseInt(W.getAttribute("data-swiper-autoplay"),10):void 0},P=W=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(d),D();let ee=typeof W>"u"?e.params.autoplay.delay:W;f=e.params.autoplay.delay,h=e.params.autoplay.delay;const k=L();!Number.isNaN(k)&&k>0&&typeof W>"u"&&(ee=k,f=k,h=k),m=ee;const Z=e.params.speed,ne=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(Z,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,Z,!0,!0),o("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(Z,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,Z,!0,!0),o("autoplay")),e.params.cssMode&&(y=new Date().getTime(),requestAnimationFrame(()=>{P()})))};return ee>0?(clearTimeout(u),u=setTimeout(()=>{ne()},ee)):requestAnimationFrame(()=>{ne()}),ee},V=()=>{y=new Date().getTime(),e.autoplay.running=!0,P(),o("autoplayStart")},U=()=>{e.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(d),o("autoplayStop")},$=(W,ee)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(u),W||(j=!0);const k=()=>{o("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",T):Y()};if(e.autoplay.paused=!0,ee){O&&(m=e.params.autoplay.delay),O=!1,k();return}m=(m||e.params.autoplay.delay)-(new Date().getTime()-y),!(e.isEnd&&m<0&&!e.params.loop)&&(m<0&&(m=0),k())},Y=()=>{e.isEnd&&m<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(y=new Date().getTime(),j?(j=!1,P(m)):P(),e.autoplay.paused=!1,o("autoplayResume"))},F=()=>{if(e.destroyed||!e.autoplay.running)return;const W=Un();W.visibilityState==="hidden"&&(j=!0,$(!0)),W.visibilityState==="visible"&&Y()},te=W=>{W.pointerType==="mouse"&&(j=!0,E=!0,!(e.animating||e.autoplay.paused)&&$(!0))},ie=W=>{W.pointerType==="mouse"&&(E=!1,e.autoplay.paused&&Y())},oe=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",te),e.el.addEventListener("pointerleave",ie))},re=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",te),e.el.removeEventListener("pointerleave",ie))},B=()=>{Un().addEventListener("visibilitychange",F)},K=()=>{Un().removeEventListener("visibilitychange",F)};r("init",()=>{e.params.autoplay.enabled&&(oe(),B(),V())}),r("destroy",()=>{re(),K(),e.autoplay.running&&U()}),r("_freeModeStaticRelease",()=>{(b||j)&&Y()}),r("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?U():$(!0,!0)}),r("beforeTransitionStart",(W,ee,k)=>{e.destroyed||!e.autoplay.running||(k||!e.params.autoplay.disableOnInteraction?$(!0,!0):U())}),r("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){U();return}S=!0,b=!1,j=!1,A=setTimeout(()=>{j=!0,b=!0,$(!0)},200)}}),r("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!S)){if(clearTimeout(A),clearTimeout(u),e.params.autoplay.disableOnInteraction){b=!1,S=!1;return}b&&e.params.cssMode&&Y(),b=!1,S=!1}}),r("slideChange",()=>{e.destroyed||!e.autoplay.running||(O=!0)}),Object.assign(e.autoplay,{start:V,stop:U,pause:$,resume:Y})}let a0;function DL(){const t=Et(),e=Un();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function fv(){return a0||(a0=DL()),a0}let r0;function kL(t){let{userAgent:e}=t===void 0?{}:t;const i=fv(),r=Et(),o=r.navigator.platform,l=e||r.navigator.userAgent,u={ios:!1,android:!1},d=r.screen.width,f=r.screen.height,h=l.match(/(Android);?[\s\/]+([\d.]+)?/);let m=l.match(/(iPad).*OS\s([\d_]+)/);const y=l.match(/(iPod)(.*OS\s([\d_]+))?/),v=!m&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),S=o==="Win32";let b=o==="MacIntel";const A=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!m&&b&&i.touch&&A.indexOf(`${d}x${f}`)>=0&&(m=l.match(/(Version)\/([\d.]+)/),m||(m=[0,1,"13_0_0"]),b=!1),h&&!S&&(u.os="android",u.android=!0),(m||v||y)&&(u.os="ios",u.ios=!0),u}function pv(t){return t===void 0&&(t={}),r0||(r0=kL(t)),r0}let s0;function HL(){const t=Et(),e=pv();let i=!1;function r(){const d=t.navigator.userAgent.toLowerCase();return d.indexOf("safari")>=0&&d.indexOf("chrome")<0&&d.indexOf("android")<0}if(r()){const d=String(t.navigator.userAgent);if(d.includes("Version/")){const[f,h]=d.split("Version/")[1].split(" ")[0].split(".").map(m=>Number(m));i=f<16||f===16&&h<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),l=r(),u=l||o&&e.ios;return{isSafari:i||l,needPerspectiveFix:i,need3dFix:u,isWebView:o}}function hv(){return s0||(s0=HL()),s0}function VL(t){let{swiper:e,on:i,emit:r}=t;const o=Et();let l=null,u=null;const d=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},f=()=>{!e||e.destroyed||!e.initialized||(l=new ResizeObserver(y=>{u=o.requestAnimationFrame(()=>{const{width:v,height:S}=e;let b=v,A=S;y.forEach(O=>{let{contentBoxSize:j,contentRect:E,target:T}=O;T&&T!==e.el||(b=E?E.width:(j[0]||j).inlineSize,A=E?E.height:(j[0]||j).blockSize)}),(b!==v||A!==S)&&d()})}),l.observe(e.el))},h=()=>{u&&o.cancelAnimationFrame(u),l&&l.unobserve&&e.el&&(l.unobserve(e.el),l=null)},m=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};i("init",()=>{if(e.params.resizeObserver&&typeof o.ResizeObserver<"u"){f();return}o.addEventListener("resize",d),o.addEventListener("orientationchange",m)}),i("destroy",()=>{h(),o.removeEventListener("resize",d),o.removeEventListener("orientationchange",m)})}function zL(t){let{swiper:e,extendParams:i,on:r,emit:o}=t;const l=[],u=Et(),d=function(m,y){y===void 0&&(y={});const v=u.MutationObserver||u.WebkitMutationObserver,S=new v(b=>{if(e.__preventObserver__)return;if(b.length===1){o("observerUpdate",b[0]);return}const A=function(){o("observerUpdate",b[0])};u.requestAnimationFrame?u.requestAnimationFrame(A):u.setTimeout(A,0)});S.observe(m,{attributes:typeof y.attributes>"u"?!0:y.attributes,childList:e.isElement||(typeof y.childList>"u"?!0:y).childList,characterData:typeof y.characterData>"u"?!0:y.characterData}),l.push(S)},f=()=>{if(e.params.observer){if(e.params.observeParents){const m=cv(e.hostEl);for(let y=0;y<m.length;y+=1)d(m[y])}d(e.hostEl,{childList:e.params.observeSlideChildren}),d(e.wrapperEl,{attributes:!1})}},h=()=>{l.forEach(m=>{m.disconnect()}),l.splice(0,l.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",f),r("destroy",h)}var PL={on(t,e,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const o=i?"unshift":"push";return t.split(" ").forEach(l=>{r.eventsListeners[l]||(r.eventsListeners[l]=[]),r.eventsListeners[l][o](e)}),r},once(t,e,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function o(){r.off(t,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];e.apply(r,u)}return o.__emitterProxy=e,r.on(t,o,i)},onAny(t,e){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;const r=e?"unshift":"push";return i.eventsAnyListeners.indexOf(t)<0&&i.eventsAnyListeners[r](t),i},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const i=e.eventsAnyListeners.indexOf(t);return i>=0&&e.eventsAnyListeners.splice(i,1),e},off(t,e){const i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?i.eventsListeners[r]=[]:i.eventsListeners[r]&&i.eventsListeners[r].forEach((o,l)=>{(o===e||o.__emitterProxy&&o.__emitterProxy===e)&&i.eventsListeners[r].splice(l,1)})}),i},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,i,r;for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return typeof l[0]=="string"||Array.isArray(l[0])?(e=l[0],i=l.slice(1,l.length),r=t):(e=l[0].events,i=l[0].data,r=l[0].context||t),i.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(f=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(h=>{h.apply(r,[f,...i])}),t.eventsListeners&&t.eventsListeners[f]&&t.eventsListeners[f].forEach(h=>{h.apply(r,i)})}),t}};function NL(){const t=this;let e,i;const r=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?i=t.params.height:i=r.clientHeight,!(e===0&&t.isHorizontal()||i===0&&t.isVertical())&&(e=e-parseInt(Ui(r,"padding-left")||0,10)-parseInt(Ui(r,"padding-right")||0,10),i=i-parseInt(Ui(r,"padding-top")||0,10)-parseInt(Ui(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Object.assign(t,{width:e,height:i,size:t.isHorizontal()?e:i}))}function BL(){const t=this;function e(Y,F){return parseFloat(Y.getPropertyValue(t.getDirectionLabel(F))||0)}const i=t.params,{wrapperEl:r,slidesEl:o,size:l,rtlTranslate:u,wrongRTL:d}=t,f=t.virtual&&i.virtual.enabled,h=f?t.virtual.slides.length:t.slides.length,m=Vn(o,`.${t.params.slideClass}, swiper-slide`),y=f?t.virtual.slides.length:m.length;let v=[];const S=[],b=[];let A=i.slidesOffsetBefore;typeof A=="function"&&(A=i.slidesOffsetBefore.call(t));let O=i.slidesOffsetAfter;typeof O=="function"&&(O=i.slidesOffsetAfter.call(t));const j=t.snapGrid.length,E=t.slidesGrid.length;let T=i.spaceBetween,D=-A,L=0,P=0;if(typeof l>"u")return;typeof T=="string"&&T.indexOf("%")>=0?T=parseFloat(T.replace("%",""))/100*l:typeof T=="string"&&(T=parseFloat(T)),t.virtualSize=-T,m.forEach(Y=>{u?Y.style.marginLeft="":Y.style.marginRight="",Y.style.marginBottom="",Y.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(Ql(r,"--swiper-centered-offset-before",""),Ql(r,"--swiper-centered-offset-after",""));const V=i.grid&&i.grid.rows>1&&t.grid;V?t.grid.initSlides(m):t.grid&&t.grid.unsetSlides();let U;const $=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(Y=>typeof i.breakpoints[Y].slidesPerView<"u").length>0;for(let Y=0;Y<y;Y+=1){U=0;let F;if(m[Y]&&(F=m[Y]),V&&t.grid.updateSlide(Y,F,m),!(m[Y]&&Ui(F,"display")==="none")){if(i.slidesPerView==="auto"){$&&(m[Y].style[t.getDirectionLabel("width")]="");const te=getComputedStyle(F),ie=F.style.transform,oe=F.style.webkitTransform;if(ie&&(F.style.transform="none"),oe&&(F.style.webkitTransform="none"),i.roundLengths)U=t.isHorizontal()?fp(F,"width"):fp(F,"height");else{const re=e(te,"width"),B=e(te,"padding-left"),K=e(te,"padding-right"),W=e(te,"margin-left"),ee=e(te,"margin-right"),k=te.getPropertyValue("box-sizing");if(k&&k==="border-box")U=re+W+ee;else{const{clientWidth:Z,offsetWidth:ne}=F;U=re+B+K+W+ee+(ne-Z)}}ie&&(F.style.transform=ie),oe&&(F.style.webkitTransform=oe),i.roundLengths&&(U=Math.floor(U))}else U=(l-(i.slidesPerView-1)*T)/i.slidesPerView,i.roundLengths&&(U=Math.floor(U)),m[Y]&&(m[Y].style[t.getDirectionLabel("width")]=`${U}px`);m[Y]&&(m[Y].swiperSlideSize=U),b.push(U),i.centeredSlides?(D=D+U/2+L/2+T,L===0&&Y!==0&&(D=D-l/2-T),Y===0&&(D=D-l/2-T),Math.abs(D)<1/1e3&&(D=0),i.roundLengths&&(D=Math.floor(D)),P%i.slidesPerGroup===0&&v.push(D),S.push(D)):(i.roundLengths&&(D=Math.floor(D)),(P-Math.min(t.params.slidesPerGroupSkip,P))%t.params.slidesPerGroup===0&&v.push(D),S.push(D),D=D+U+T),t.virtualSize+=U+T,L=U,P+=1}}if(t.virtualSize=Math.max(t.virtualSize,l)+O,u&&d&&(i.effect==="slide"||i.effect==="coverflow")&&(r.style.width=`${t.virtualSize+T}px`),i.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+T}px`),V&&t.grid.updateWrapperSize(U,v),!i.centeredSlides){const Y=[];for(let F=0;F<v.length;F+=1){let te=v[F];i.roundLengths&&(te=Math.floor(te)),v[F]<=t.virtualSize-l&&Y.push(te)}v=Y,Math.floor(t.virtualSize-l)-Math.floor(v[v.length-1])>1&&v.push(t.virtualSize-l)}if(f&&i.loop){const Y=b[0]+T;if(i.slidesPerGroup>1){const F=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/i.slidesPerGroup),te=Y*i.slidesPerGroup;for(let ie=0;ie<F;ie+=1)v.push(v[v.length-1]+te)}for(let F=0;F<t.virtual.slidesBefore+t.virtual.slidesAfter;F+=1)i.slidesPerGroup===1&&v.push(v[v.length-1]+Y),S.push(S[S.length-1]+Y),t.virtualSize+=Y}if(v.length===0&&(v=[0]),T!==0){const Y=t.isHorizontal()&&u?"marginLeft":t.getDirectionLabel("marginRight");m.filter((F,te)=>!i.cssMode||i.loop?!0:te!==m.length-1).forEach(F=>{F.style[Y]=`${T}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let Y=0;b.forEach(te=>{Y+=te+(T||0)}),Y-=T;const F=Y>l?Y-l:0;v=v.map(te=>te<=0?-A:te>F?F+O:te)}if(i.centerInsufficientSlides){let Y=0;b.forEach(te=>{Y+=te+(T||0)}),Y-=T;const F=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(Y+F<l){const te=(l-Y-F)/2;v.forEach((ie,oe)=>{v[oe]=ie-te}),S.forEach((ie,oe)=>{S[oe]=ie+te})}}if(Object.assign(t,{slides:m,snapGrid:v,slidesGrid:S,slidesSizesGrid:b}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Ql(r,"--swiper-centered-offset-before",`${-v[0]}px`),Ql(r,"--swiper-centered-offset-after",`${t.size/2-b[b.length-1]/2}px`);const Y=-t.snapGrid[0],F=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(te=>te+Y),t.slidesGrid=t.slidesGrid.map(te=>te+F)}if(y!==h&&t.emit("slidesLengthChange"),v.length!==j&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),S.length!==E&&t.emit("slidesGridLengthChange"),i.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!f&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const Y=`${i.containerModifierClass}backface-hidden`,F=t.el.classList.contains(Y);y<=i.maxBackfaceHiddenSlides?F||t.el.classList.add(Y):F&&t.el.classList.remove(Y)}}function $L(t){const e=this,i=[],r=e.virtual&&e.params.virtual.enabled;let o=0,l;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const u=d=>r?e.slides[e.getSlideIndexByData(d)]:e.slides[d];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(d=>{i.push(d)});else for(l=0;l<Math.ceil(e.params.slidesPerView);l+=1){const d=e.activeIndex+l;if(d>e.slides.length&&!r)break;i.push(u(d))}else i.push(u(e.activeIndex));for(l=0;l<i.length;l+=1)if(typeof i[l]<"u"){const d=i[l].offsetHeight;o=d>o?d:o}(o||o===0)&&(e.wrapperEl.style.height=`${o}px`)}function UL(){const t=this,e=t.slides,i=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(t.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-i-t.cssOverflowAdjustment()}const l4=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function _L(t){t===void 0&&(t=this&&this.translate||0);const e=this,i=e.params,{slides:r,rtlTranslate:o,snapGrid:l}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let u=-t;o&&(u=t),e.visibleSlidesIndexes=[],e.visibleSlides=[];let d=i.spaceBetween;typeof d=="string"&&d.indexOf("%")>=0?d=parseFloat(d.replace("%",""))/100*e.size:typeof d=="string"&&(d=parseFloat(d));for(let f=0;f<r.length;f+=1){const h=r[f];let m=h.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(m-=r[0].swiperSlideOffset);const y=(u+(i.centeredSlides?e.minTranslate():0)-m)/(h.swiperSlideSize+d),v=(u-l[0]+(i.centeredSlides?e.minTranslate():0)-m)/(h.swiperSlideSize+d),S=-(u-m),b=S+e.slidesSizesGrid[f],A=S>=0&&S<=e.size-e.slidesSizesGrid[f],O=S>=0&&S<e.size-1||b>1&&b<=e.size||S<=0&&b>=e.size;O&&(e.visibleSlides.push(h),e.visibleSlidesIndexes.push(f)),l4(h,O,i.slideVisibleClass),l4(h,A,i.slideFullyVisibleClass),h.progress=o?-y:y,h.originalProgress=o?-v:v}}function IL(t){const e=this;if(typeof t>"u"){const m=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*m||0}const i=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:o,isBeginning:l,isEnd:u,progressLoop:d}=e;const f=l,h=u;if(r===0)o=0,l=!0,u=!0;else{o=(t-e.minTranslate())/r;const m=Math.abs(t-e.minTranslate())<1,y=Math.abs(t-e.maxTranslate())<1;l=m||o<=0,u=y||o>=1,m&&(o=0),y&&(o=1)}if(i.loop){const m=e.getSlideIndexByData(0),y=e.getSlideIndexByData(e.slides.length-1),v=e.slidesGrid[m],S=e.slidesGrid[y],b=e.slidesGrid[e.slidesGrid.length-1],A=Math.abs(t);A>=v?d=(A-v)/b:d=(A+b-S)/b,d>1&&(d-=1)}Object.assign(e,{progress:o,progressLoop:d,isBeginning:l,isEnd:u}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&e.updateSlidesProgress(t),l&&!f&&e.emit("reachBeginning toEdge"),u&&!h&&e.emit("reachEnd toEdge"),(f&&!l||h&&!u)&&e.emit("fromEdge"),e.emit("progress",o)}const o0=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function GL(){const t=this,{slides:e,params:i,slidesEl:r,activeIndex:o}=t,l=t.virtual&&i.virtual.enabled,u=t.grid&&i.grid&&i.grid.rows>1,d=y=>Vn(r,`.${i.slideClass}${y}, swiper-slide${y}`)[0];let f,h,m;if(l)if(i.loop){let y=o-t.virtual.slidesBefore;y<0&&(y=t.virtual.slides.length+y),y>=t.virtual.slides.length&&(y-=t.virtual.slides.length),f=d(`[data-swiper-slide-index="${y}"]`)}else f=d(`[data-swiper-slide-index="${o}"]`);else u?(f=e.find(y=>y.column===o),m=e.find(y=>y.column===o+1),h=e.find(y=>y.column===o-1)):f=e[o];f&&(u||(m=OL(f,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!m&&(m=e[0]),h=LL(f,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!h===0&&(h=e[e.length-1]))),e.forEach(y=>{o0(y,y===f,i.slideActiveClass),o0(y,y===m,i.slideNextClass),o0(y,y===h,i.slidePrevClass)}),t.emitSlidesClasses()}const bc=(t,e)=>{if(!t||t.destroyed||!t.params)return;const i=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,r=e.closest(i());if(r){let o=r.querySelector(`.${t.params.lazyPreloaderClass}`);!o&&t.isElement&&(r.shadowRoot?o=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(o=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},l0=(t,e)=>{if(!t.slides[e])return;const i=t.slides[e].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},pp=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const i=t.slides.length;if(!i||!e||e<0)return;e=Math.min(e,i);const r=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),o=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const u=o,d=[u-e];d.push(...Array.from({length:e}).map((f,h)=>u+r+h)),t.slides.forEach((f,h)=>{d.includes(f.column)&&l0(t,h)});return}const l=o+r-1;if(t.params.rewind||t.params.loop)for(let u=o-e;u<=l+e;u+=1){const d=(u%i+i)%i;(d<o||d>l)&&l0(t,d)}else for(let u=Math.max(o-e,0);u<=Math.min(l+e,i-1);u+=1)u!==o&&(u>l||u<o)&&l0(t,u)};function qL(t){const{slidesGrid:e,params:i}=t,r=t.rtlTranslate?t.translate:-t.translate;let o;for(let l=0;l<e.length;l+=1)typeof e[l+1]<"u"?r>=e[l]&&r<e[l+1]-(e[l+1]-e[l])/2?o=l:r>=e[l]&&r<e[l+1]&&(o=l+1):r>=e[l]&&(o=l);return i.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function YL(t){const e=this,i=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:o,activeIndex:l,realIndex:u,snapIndex:d}=e;let f=t,h;const m=S=>{let b=S-e.virtual.slidesBefore;return b<0&&(b=e.virtual.slides.length+b),b>=e.virtual.slides.length&&(b-=e.virtual.slides.length),b};if(typeof f>"u"&&(f=qL(e)),r.indexOf(i)>=0)h=r.indexOf(i);else{const S=Math.min(o.slidesPerGroupSkip,f);h=S+Math.floor((f-S)/o.slidesPerGroup)}if(h>=r.length&&(h=r.length-1),f===l&&!e.params.loop){h!==d&&(e.snapIndex=h,e.emit("snapIndexChange"));return}if(f===l&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=m(f);return}const y=e.grid&&o.grid&&o.grid.rows>1;let v;if(e.virtual&&o.virtual.enabled&&o.loop)v=m(f);else if(y){const S=e.slides.find(A=>A.column===f);let b=parseInt(S.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(e.slides.indexOf(S),0)),v=Math.floor(b/o.grid.rows)}else if(e.slides[f]){const S=e.slides[f].getAttribute("data-swiper-slide-index");S?v=parseInt(S,10):v=f}else v=f;Object.assign(e,{previousSnapIndex:d,snapIndex:h,previousRealIndex:u,realIndex:v,previousIndex:l,activeIndex:f}),e.initialized&&pp(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(u!==v&&e.emit("realIndexChange"),e.emit("slideChange"))}function FL(t,e){const i=this,r=i.params;let o=t.closest(`.${r.slideClass}, swiper-slide`);!o&&i.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(d=>{!o&&d.matches&&d.matches(`.${r.slideClass}, swiper-slide`)&&(o=d)});let l=!1,u;if(o){for(let d=0;d<i.slides.length;d+=1)if(i.slides[d]===o){l=!0,u=d;break}}if(o&&l)i.clickedSlide=o,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=u;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}r.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var ZL={updateSize:NL,updateSlides:BL,updateAutoHeight:$L,updateSlidesOffset:UL,updateSlidesProgress:_L,updateProgress:IL,updateSlidesClasses:GL,updateActiveIndex:YL,updateClickedSlide:FL};function XL(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:i,rtlTranslate:r,translate:o,wrapperEl:l}=e;if(i.virtualTranslate)return r?-o:o;if(i.cssMode)return o;let u=EL(l,t);return u+=e.cssOverflowAdjustment(),r&&(u=-u),u||0}function KL(t,e){const i=this,{rtlTranslate:r,params:o,wrapperEl:l,progress:u}=i;let d=0,f=0;const h=0;i.isHorizontal()?d=r?-t:t:f=t,o.roundLengths&&(d=Math.floor(d),f=Math.floor(f)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?d:f,o.cssMode?l[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-d:-f:o.virtualTranslate||(i.isHorizontal()?d-=i.cssOverflowAdjustment():f-=i.cssOverflowAdjustment(),l.style.transform=`translate3d(${d}px, ${f}px, ${h}px)`);let m;const y=i.maxTranslate()-i.minTranslate();y===0?m=0:m=(t-i.minTranslate())/y,m!==u&&i.updateProgress(t),i.emit("setTranslate",i.translate,e)}function WL(){return-this.snapGrid[0]}function QL(){return-this.snapGrid[this.snapGrid.length-1]}function JL(t,e,i,r,o){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),i===void 0&&(i=!0),r===void 0&&(r=!0);const l=this,{params:u,wrapperEl:d}=l;if(l.animating&&u.preventInteractionOnTransition)return!1;const f=l.minTranslate(),h=l.maxTranslate();let m;if(r&&t>f?m=f:r&&t<h?m=h:m=t,l.updateProgress(m),u.cssMode){const y=l.isHorizontal();if(e===0)d[y?"scrollLeft":"scrollTop"]=-m;else{if(!l.support.smoothScroll)return lv({swiper:l,targetPosition:-m,side:y?"left":"top"}),!0;d.scrollTo({[y?"left":"top"]:-m,behavior:"smooth"})}return!0}return e===0?(l.setTransition(0),l.setTranslate(m),i&&(l.emit("beforeTransitionStart",e,o),l.emit("transitionEnd"))):(l.setTransition(e),l.setTranslate(m),i&&(l.emit("beforeTransitionStart",e,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(v){!l||l.destroyed||v.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,i&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var eO={getTranslate:XL,setTranslate:KL,minTranslate:WL,maxTranslate:QL,translateTo:JL};function tO(t,e){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${t}ms`,i.wrapperEl.style.transitionDelay=t===0?"0ms":""),i.emit("setTransition",t,e)}function mv(t){let{swiper:e,runCallbacks:i,direction:r,step:o}=t;const{activeIndex:l,previousIndex:u}=e;let d=r;d||(l>u?d="next":l<u?d="prev":d="reset"),e.emit(`transition${o}`),i&&d==="reset"?e.emit(`slideResetTransition${o}`):i&&l!==u&&(e.emit(`slideChangeTransition${o}`),d==="next"?e.emit(`slideNextTransition${o}`):e.emit(`slidePrevTransition${o}`))}function nO(t,e){t===void 0&&(t=!0);const i=this,{params:r}=i;r.cssMode||(r.autoHeight&&i.updateAutoHeight(),mv({swiper:i,runCallbacks:t,direction:e,step:"Start"}))}function iO(t,e){t===void 0&&(t=!0);const i=this,{params:r}=i;i.animating=!1,!r.cssMode&&(i.setTransition(0),mv({swiper:i,runCallbacks:t,direction:e,step:"End"}))}var aO={setTransition:tO,transitionStart:nO,transitionEnd:iO};function rO(t,e,i,r,o){t===void 0&&(t=0),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));const l=this;let u=t;u<0&&(u=0);const{params:d,snapGrid:f,slidesGrid:h,previousIndex:m,activeIndex:y,rtlTranslate:v,wrapperEl:S,enabled:b}=l;if(!b&&!r&&!o||l.destroyed||l.animating&&d.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=l.params.speed);const A=Math.min(l.params.slidesPerGroupSkip,u);let O=A+Math.floor((u-A)/l.params.slidesPerGroup);O>=f.length&&(O=f.length-1);const j=-f[O];if(d.normalizeSlideIndex)for(let V=0;V<h.length;V+=1){const U=-Math.floor(j*100),$=Math.floor(h[V]*100),Y=Math.floor(h[V+1]*100);typeof h[V+1]<"u"?U>=$&&U<Y-(Y-$)/2?u=V:U>=$&&U<Y&&(u=V+1):U>=$&&(u=V)}if(l.initialized&&u!==y&&(!l.allowSlideNext&&(v?j>l.translate&&j>l.minTranslate():j<l.translate&&j<l.minTranslate())||!l.allowSlidePrev&&j>l.translate&&j>l.maxTranslate()&&(y||0)!==u))return!1;u!==(m||0)&&i&&l.emit("beforeSlideChangeStart"),l.updateProgress(j);let E;u>y?E="next":u<y?E="prev":E="reset";const T=l.virtual&&l.params.virtual.enabled;if(!(T&&o)&&(v&&-j===l.translate||!v&&j===l.translate))return l.updateActiveIndex(u),d.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),d.effect!=="slide"&&l.setTranslate(j),E!=="reset"&&(l.transitionStart(i,E),l.transitionEnd(i,E)),!1;if(d.cssMode){const V=l.isHorizontal(),U=v?j:-j;if(e===0)T&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),T&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{S[V?"scrollLeft":"scrollTop"]=U})):S[V?"scrollLeft":"scrollTop"]=U,T&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return lv({swiper:l,targetPosition:U,side:V?"left":"top"}),!0;S.scrollTo({[V?"left":"top"]:U,behavior:"smooth"})}return!0}const P=hv().isSafari;return T&&!o&&P&&l.isElement&&l.virtual.update(!1,!1,u),l.setTransition(e),l.setTranslate(j),l.updateActiveIndex(u),l.updateSlidesClasses(),l.emit("beforeTransitionStart",e,r),l.transitionStart(i,E),e===0?l.transitionEnd(i,E):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(U){!l||l.destroyed||U.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(i,E))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function sO(t,e,i,r){t===void 0&&(t=0),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let u=t;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)u=u+o.virtual.slidesBefore;else{let d;if(l){const v=u*o.params.grid.rows;d=o.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===v).column}else d=o.getSlideIndexByData(u);const f=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:h}=o.params;let m=o.params.slidesPerView;m==="auto"?m=o.slidesPerViewDynamic():(m=Math.ceil(parseFloat(o.params.slidesPerView,10)),h&&m%2===0&&(m=m+1));let y=f-d<m;if(h&&(y=y||d<Math.ceil(m/2)),r&&h&&o.params.slidesPerView!=="auto"&&!l&&(y=!1),y){const v=h?d<o.activeIndex?"prev":"next":d-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?d+1:d-f+1,slideRealIndex:v==="next"?o.realIndex:void 0})}if(l){const v=u*o.params.grid.rows;u=o.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===v).column}else u=o.getSlideIndexByData(u)}return requestAnimationFrame(()=>{o.slideTo(u,e,i,r)}),o}function oO(t,e,i){e===void 0&&(e=!0);const r=this,{enabled:o,params:l,animating:u}=r;if(!o||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);let d=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(d=Math.max(r.slidesPerViewDynamic("current",!0),1));const f=r.activeIndex<l.slidesPerGroupSkip?1:d,h=r.virtual&&l.virtual.enabled;if(l.loop){if(u&&!h&&l.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+f,t,e,i)}),!0}return l.rewind&&r.isEnd?r.slideTo(0,t,e,i):r.slideTo(r.activeIndex+f,t,e,i)}function lO(t,e,i){e===void 0&&(e=!0);const r=this,{params:o,snapGrid:l,slidesGrid:u,rtlTranslate:d,enabled:f,animating:h}=r;if(!f||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);const m=r.virtual&&o.virtual.enabled;if(o.loop){if(h&&!m&&o.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const y=d?r.translate:-r.translate;function v(E){return E<0?-Math.floor(Math.abs(E)):Math.floor(E)}const S=v(y),b=l.map(E=>v(E)),A=o.freeMode&&o.freeMode.enabled;let O=l[b.indexOf(S)-1];if(typeof O>"u"&&(o.cssMode||A)){let E;l.forEach((T,D)=>{S>=T&&(E=D)}),typeof E<"u"&&(O=A?l[E]:l[E>0?E-1:E])}let j=0;if(typeof O<"u"&&(j=u.indexOf(O),j<0&&(j=r.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(j=j-r.slidesPerViewDynamic("previous",!0)+1,j=Math.max(j,0))),o.rewind&&r.isBeginning){const E=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(E,t,e,i)}else if(o.loop&&r.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(j,t,e,i)}),!0;return r.slideTo(j,t,e,i)}function cO(t,e,i){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof t>"u"&&(t=r.params.speed),r.slideTo(r.activeIndex,t,e,i)}function uO(t,e,i,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);let l=o.activeIndex;const u=Math.min(o.params.slidesPerGroupSkip,l),d=u+Math.floor((l-u)/o.params.slidesPerGroup),f=o.rtlTranslate?o.translate:-o.translate;if(f>=o.snapGrid[d]){const h=o.snapGrid[d],m=o.snapGrid[d+1];f-h>(m-h)*r&&(l+=o.params.slidesPerGroup)}else{const h=o.snapGrid[d-1],m=o.snapGrid[d];f-h<=(m-h)*r&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,t,e,i)}function dO(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:i}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let o=t.getSlideIndexWhenGrid(t.clickedIndex),l;const u=t.isElement?"swiper-slide":`.${e.slideClass}`,d=t.grid&&t.params.grid&&t.params.grid.rows>1;if(e.loop){if(t.animating)return;l=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?t.slideToLoop(l):o>(d?(t.slides.length-r)/2-(t.params.grid.rows-1):t.slides.length-r)?(t.loopFix(),o=t.getSlideIndex(Vn(i,`${u}[data-swiper-slide-index="${l}"]`)[0]),Dc(()=>{t.slideTo(o)})):t.slideTo(o)}else t.slideTo(o)}var fO={slideTo:rO,slideToLoop:sO,slideNext:oO,slidePrev:lO,slideReset:cO,slideToClosest:uO,slideToClickedSlide:dO};function pO(t,e){const i=this,{params:r,slidesEl:o}=i;if(!r.loop||i.virtual&&i.params.virtual.enabled)return;const l=()=>{Vn(o,`.${r.slideClass}, swiper-slide`).forEach((S,b)=>{S.setAttribute("data-swiper-slide-index",b)})},u=()=>{const v=Vn(o,`.${r.slideBlankClass}`);v.forEach(S=>{S.remove()}),v.length>0&&(i.recalcSlides(),i.updateSlides())},d=i.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||d)&&u();const f=r.slidesPerGroup*(d?r.grid.rows:1),h=i.slides.length%f!==0,m=d&&i.slides.length%r.grid.rows!==0,y=v=>{for(let S=0;S<v;S+=1){const b=i.isElement?Hc("swiper-slide",[r.slideBlankClass]):Hc("div",[r.slideClass,r.slideBlankClass]);i.slidesEl.append(b)}};if(h){if(r.loopAddBlankSlides){const v=f-i.slides.length%f;y(v),i.recalcSlides(),i.updateSlides()}else kc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(m){if(r.loopAddBlankSlides){const v=r.grid.rows-i.slides.length%r.grid.rows;y(v),i.recalcSlides(),i.updateSlides()}else kc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();i.loopFix({slideRealIndex:t,direction:r.centeredSlides?void 0:"next",initial:e})}function hO(t){let{slideRealIndex:e,slideTo:i=!0,direction:r,setTranslate:o,activeSlideIndex:l,initial:u,byController:d,byMousewheel:f}=t===void 0?{}:t;const h=this;if(!h.params.loop)return;h.emit("beforeLoopFix");const{slides:m,allowSlidePrev:y,allowSlideNext:v,slidesEl:S,params:b}=h,{centeredSlides:A,initialSlide:O}=b;if(h.allowSlidePrev=!0,h.allowSlideNext=!0,h.virtual&&b.virtual.enabled){i&&(!b.centeredSlides&&h.snapIndex===0?h.slideTo(h.virtual.slides.length,0,!1,!0):b.centeredSlides&&h.snapIndex<b.slidesPerView?h.slideTo(h.virtual.slides.length+h.snapIndex,0,!1,!0):h.snapIndex===h.snapGrid.length-1&&h.slideTo(h.virtual.slidesBefore,0,!1,!0)),h.allowSlidePrev=y,h.allowSlideNext=v,h.emit("loopFix");return}let j=b.slidesPerView;j==="auto"?j=h.slidesPerViewDynamic():(j=Math.ceil(parseFloat(b.slidesPerView,10)),A&&j%2===0&&(j=j+1));const E=b.slidesPerGroupAuto?j:b.slidesPerGroup;let T=A?Math.max(E,Math.ceil(j/2)):E;T%E!==0&&(T+=E-T%E),T+=b.loopAdditionalSlides,h.loopedSlides=T;const D=h.grid&&b.grid&&b.grid.rows>1;m.length<j+T||h.params.effect==="cards"&&m.length<j+T*2?kc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):D&&b.grid.fill==="row"&&kc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const L=[],P=[],V=D?Math.ceil(m.length/b.grid.rows):m.length,U=u&&V-O<j&&!A;let $=U?O:h.activeIndex;typeof l>"u"?l=h.getSlideIndex(m.find(B=>B.classList.contains(b.slideActiveClass))):$=l;const Y=r==="next"||!r,F=r==="prev"||!r;let te=0,ie=0;const re=(D?m[l].column:l)+(A&&typeof o>"u"?-j/2+.5:0);if(re<T){te=Math.max(T-re,E);for(let B=0;B<T-re;B+=1){const K=B-Math.floor(B/V)*V;if(D){const W=V-K-1;for(let ee=m.length-1;ee>=0;ee-=1)m[ee].column===W&&L.push(ee)}else L.push(V-K-1)}}else if(re+j>V-T){ie=Math.max(re-(V-T*2),E),U&&(ie=Math.max(ie,j-V+O+1));for(let B=0;B<ie;B+=1){const K=B-Math.floor(B/V)*V;D?m.forEach((W,ee)=>{W.column===K&&P.push(ee)}):P.push(K)}}if(h.__preventObserver__=!0,requestAnimationFrame(()=>{h.__preventObserver__=!1}),h.params.effect==="cards"&&m.length<j+T*2&&(P.includes(l)&&P.splice(P.indexOf(l),1),L.includes(l)&&L.splice(L.indexOf(l),1)),F&&L.forEach(B=>{m[B].swiperLoopMoveDOM=!0,S.prepend(m[B]),m[B].swiperLoopMoveDOM=!1}),Y&&P.forEach(B=>{m[B].swiperLoopMoveDOM=!0,S.append(m[B]),m[B].swiperLoopMoveDOM=!1}),h.recalcSlides(),b.slidesPerView==="auto"?h.updateSlides():D&&(L.length>0&&F||P.length>0&&Y)&&h.slides.forEach((B,K)=>{h.grid.updateSlide(K,B,h.slides)}),b.watchSlidesProgress&&h.updateSlidesOffset(),i){if(L.length>0&&F){if(typeof e>"u"){const B=h.slidesGrid[$],W=h.slidesGrid[$+te]-B;f?h.setTranslate(h.translate-W):(h.slideTo($+Math.ceil(te),0,!1,!0),o&&(h.touchEventsData.startTranslate=h.touchEventsData.startTranslate-W,h.touchEventsData.currentTranslate=h.touchEventsData.currentTranslate-W))}else if(o){const B=D?L.length/b.grid.rows:L.length;h.slideTo(h.activeIndex+B,0,!1,!0),h.touchEventsData.currentTranslate=h.translate}}else if(P.length>0&&Y)if(typeof e>"u"){const B=h.slidesGrid[$],W=h.slidesGrid[$-ie]-B;f?h.setTranslate(h.translate-W):(h.slideTo($-ie,0,!1,!0),o&&(h.touchEventsData.startTranslate=h.touchEventsData.startTranslate-W,h.touchEventsData.currentTranslate=h.touchEventsData.currentTranslate-W))}else{const B=D?P.length/b.grid.rows:P.length;h.slideTo(h.activeIndex-B,0,!1,!0)}}if(h.allowSlidePrev=y,h.allowSlideNext=v,h.controller&&h.controller.control&&!d){const B={slideRealIndex:e,direction:r,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(h.controller.control)?h.controller.control.forEach(K=>{!K.destroyed&&K.params.loop&&K.loopFix({...B,slideTo:K.params.slidesPerView===b.slidesPerView?i:!1})}):h.controller.control instanceof h.constructor&&h.controller.control.params.loop&&h.controller.control.loopFix({...B,slideTo:h.controller.control.params.slidesPerView===b.slidesPerView?i:!1})}h.emit("loopFix")}function mO(){const t=this,{params:e,slidesEl:i}=t;if(!e.loop||!i||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const r=[];t.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;r[l]=o}),t.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),r.forEach(o=>{i.append(o)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var gO={loopCreate:pO,loopFix:hO,loopDestroy:mO};function xO(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const i=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function yO(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var vO={setGrabCursor:xO,unsetGrabCursor:yO};function wO(t,e){e===void 0&&(e=this);function i(r){if(!r||r===Un()||r===Et())return null;r.assignedSlot&&(r=r.assignedSlot);const o=r.closest(t);return!o&&!r.getRootNode?null:o||i(r.getRootNode().host)}return i(e)}function c4(t,e,i){const r=Et(),{params:o}=t,l=o.edgeSwipeDetection,u=o.edgeSwipeThreshold;return l&&(i<=u||i>=r.innerWidth-u)?l==="prevent"?(e.preventDefault(),!0):!1:!0}function bO(t){const e=this,i=Un();let r=t;r.originalEvent&&(r=r.originalEvent);const o=e.touchEventsData;if(r.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==r.pointerId)return;o.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(o.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){c4(e,r,r.targetTouches[0].pageX);return}const{params:l,touches:u,enabled:d}=e;if(!d||!l.simulateTouch&&r.pointerType==="mouse"||e.animating&&l.preventInteractionOnTransition)return;!e.animating&&l.cssMode&&l.loop&&e.loopFix();let f=r.target;if(l.touchEventsTarget==="wrapper"&&!jL(f,e.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||o.isTouched&&o.isMoved)return;const h=!!l.noSwipingClass&&l.noSwipingClass!=="",m=r.composedPath?r.composedPath():r.path;h&&r.target&&r.target.shadowRoot&&m&&(f=m[0]);const y=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(l.noSwiping&&(v?wO(y,f):f.closest(y))){e.allowClick=!0;return}if(l.swipeHandler&&!f.closest(l.swipeHandler))return;u.currentX=r.pageX,u.currentY=r.pageY;const S=u.currentX,b=u.currentY;if(!c4(e,r,S))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=S,u.startY=b,o.touchStartTime=li(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let A=!0;f.matches(o.focusableElements)&&(A=!1,f.nodeName==="SELECT"&&(o.isTouched=!1)),i.activeElement&&i.activeElement.matches(o.focusableElements)&&i.activeElement!==f&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!f.matches(o.focusableElements))&&i.activeElement.blur();const O=A&&e.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||O)&&!f.isContentEditable&&r.preventDefault(),l.freeMode&&l.freeMode.enabled&&e.freeMode&&e.animating&&!l.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function SO(t){const e=Un(),i=this,r=i.touchEventsData,{params:o,touches:l,rtlTranslate:u,enabled:d}=i;if(!d||!o.simulateTouch&&t.pointerType==="mouse")return;let f=t;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(r.touchId!==null||f.pointerId!==r.pointerId))return;let h;if(f.type==="touchmove"){if(h=[...f.changedTouches].find(L=>L.identifier===r.touchId),!h||h.identifier!==r.touchId)return}else h=f;if(!r.isTouched){r.startMoving&&r.isScrolling&&i.emit("touchMoveOpposite",f);return}const m=h.pageX,y=h.pageY;if(f.preventedByNestedSwiper){l.startX=m,l.startY=y;return}if(!i.allowTouchMove){f.target.matches(r.focusableElements)||(i.allowClick=!1),r.isTouched&&(Object.assign(l,{startX:m,startY:y,currentX:m,currentY:y}),r.touchStartTime=li());return}if(o.touchReleaseOnEdges&&!o.loop)if(i.isVertical()){if(y<l.startY&&i.translate<=i.maxTranslate()||y>l.startY&&i.translate>=i.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(u&&(m>l.startX&&-i.translate<=i.maxTranslate()||m<l.startX&&-i.translate>=i.minTranslate()))return;if(!u&&(m<l.startX&&i.translate<=i.maxTranslate()||m>l.startX&&i.translate>=i.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(r.focusableElements)&&e.activeElement!==f.target&&f.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&f.target===e.activeElement&&f.target.matches(r.focusableElements)){r.isMoved=!0,i.allowClick=!1;return}r.allowTouchCallbacks&&i.emit("touchMove",f),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=m,l.currentY=y;const v=l.currentX-l.startX,S=l.currentY-l.startY;if(i.params.threshold&&Math.sqrt(v**2+S**2)<i.params.threshold)return;if(typeof r.isScrolling>"u"){let L;i.isHorizontal()&&l.currentY===l.startY||i.isVertical()&&l.currentX===l.startX?r.isScrolling=!1:v*v+S*S>=25&&(L=Math.atan2(Math.abs(S),Math.abs(v))*180/Math.PI,r.isScrolling=i.isHorizontal()?L>o.touchAngle:90-L>o.touchAngle)}if(r.isScrolling&&i.emit("touchMoveOpposite",f),typeof r.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(r.startMoving=!0),r.isScrolling||f.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;i.allowClick=!1,!o.cssMode&&f.cancelable&&f.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&f.stopPropagation();let b=i.isHorizontal()?v:S,A=i.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(b=Math.abs(b)*(u?1:-1),A=Math.abs(A)*(u?1:-1)),l.diff=b,b*=o.touchRatio,u&&(b=-b,A=-A);const O=i.touchesDirection;i.swipeDirection=b>0?"prev":"next",i.touchesDirection=A>0?"prev":"next";const j=i.params.loop&&!o.cssMode,E=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!r.isMoved){if(j&&E&&i.loopFix({direction:i.swipeDirection}),r.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const L=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(L)}r.allowMomentumBounce=!1,o.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",f)}if(new Date().getTime(),o._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&O!==i.touchesDirection&&j&&E&&Math.abs(b)>=1){Object.assign(l,{startX:m,startY:y,currentX:m,currentY:y,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}i.emit("sliderMove",f),r.isMoved=!0,r.currentTranslate=b+r.startTranslate;let T=!0,D=o.resistanceRatio;if(o.touchReleaseOnEdges&&(D=0),b>0?(j&&E&&r.allowThresholdMove&&r.currentTranslate>(o.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>i.minTranslate()&&(T=!1,o.resistance&&(r.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+r.startTranslate+b)**D))):b<0&&(j&&E&&r.allowThresholdMove&&r.currentTranslate<(o.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(o.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),r.currentTranslate<i.maxTranslate()&&(T=!1,o.resistance&&(r.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-r.startTranslate-b)**D))),T&&(f.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(r.currentTranslate=r.startTranslate),o.threshold>0)if(Math.abs(b)>o.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,r.currentTranslate=r.startTranslate,l.diff=i.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{r.currentTranslate=r.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&i.freeMode||o.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(r.currentTranslate),i.setTranslate(r.currentTranslate))}function CO(t){const e=this,i=e.touchEventsData;let r=t;r.originalEvent&&(r=r.originalEvent);let o;if(r.type==="touchend"||r.type==="touchcancel"){if(o=[...r.changedTouches].find(L=>L.identifier===i.touchId),!o||o.identifier!==i.touchId)return}else{if(i.touchId!==null||r.pointerId!==i.pointerId)return;o=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;i.pointerId=null,i.touchId=null;const{params:u,touches:d,rtlTranslate:f,slidesGrid:h,enabled:m}=e;if(!m||!u.simulateTouch&&r.pointerType==="mouse")return;if(i.allowTouchCallbacks&&e.emit("touchEnd",r),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&u.grabCursor&&e.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}u.grabCursor&&i.isMoved&&i.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const y=li(),v=y-i.touchStartTime;if(e.allowClick){const L=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(L&&L[0]||r.target,L),e.emit("tap click",r),v<300&&y-i.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(i.lastClickTime=li(),Dc(()=>{e.destroyed||(e.allowClick=!0)}),!i.isTouched||!i.isMoved||!e.swipeDirection||d.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let S;if(u.followFinger?S=f?e.translate:-e.translate:S=-i.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:S});return}const b=S>=-e.maxTranslate()&&!e.params.loop;let A=0,O=e.slidesSizesGrid[0];for(let L=0;L<h.length;L+=L<u.slidesPerGroupSkip?1:u.slidesPerGroup){const P=L<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof h[L+P]<"u"?(b||S>=h[L]&&S<h[L+P])&&(A=L,O=h[L+P]-h[L]):(b||S>=h[L])&&(A=L,O=h[h.length-1]-h[h.length-2])}let j=null,E=null;u.rewind&&(e.isBeginning?E=u.virtual&&u.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(j=0));const T=(S-h[A])/O,D=A<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(v>u.longSwipesMs){if(!u.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(T>=u.longSwipesRatio?e.slideTo(u.rewind&&e.isEnd?j:A+D):e.slideTo(A)),e.swipeDirection==="prev"&&(T>1-u.longSwipesRatio?e.slideTo(A+D):E!==null&&T<0&&Math.abs(T)>u.longSwipesRatio?e.slideTo(E):e.slideTo(A))}else{if(!u.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(A+D):e.slideTo(A):(e.swipeDirection==="next"&&e.slideTo(j!==null?j:A+D),e.swipeDirection==="prev"&&e.slideTo(E!==null?E:A))}}function u4(){const t=this,{params:e,el:i}=t;if(i&&i.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:o,snapGrid:l}=t,u=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const d=u&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!d?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!u?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=o,t.allowSlideNext=r,t.params.watchOverflow&&l!==t.snapGrid&&t.checkOverflow()}function TO(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function EO(){const t=this,{wrapperEl:e,rtlTranslate:i,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let o;const l=t.maxTranslate()-t.minTranslate();l===0?o=0:o=(t.translate-t.minTranslate())/l,o!==t.progress&&t.updateProgress(i?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function AO(t){const e=this;bc(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function MO(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const gv=(t,e)=>{const i=Un(),{params:r,el:o,wrapperEl:l,device:u}=t,d=!!r.nested,f=e==="on"?"addEventListener":"removeEventListener",h=e;!o||typeof o=="string"||(i[f]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:d}),o[f]("touchstart",t.onTouchStart,{passive:!1}),o[f]("pointerdown",t.onTouchStart,{passive:!1}),i[f]("touchmove",t.onTouchMove,{passive:!1,capture:d}),i[f]("pointermove",t.onTouchMove,{passive:!1,capture:d}),i[f]("touchend",t.onTouchEnd,{passive:!0}),i[f]("pointerup",t.onTouchEnd,{passive:!0}),i[f]("pointercancel",t.onTouchEnd,{passive:!0}),i[f]("touchcancel",t.onTouchEnd,{passive:!0}),i[f]("pointerout",t.onTouchEnd,{passive:!0}),i[f]("pointerleave",t.onTouchEnd,{passive:!0}),i[f]("contextmenu",t.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&o[f]("click",t.onClick,!0),r.cssMode&&l[f]("scroll",t.onScroll),r.updateOnWindowResize?t[h](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",u4,!0):t[h]("observerUpdate",u4,!0),o[f]("load",t.onLoad,{capture:!0}))};function jO(){const t=this,{params:e}=t;t.onTouchStart=bO.bind(t),t.onTouchMove=SO.bind(t),t.onTouchEnd=CO.bind(t),t.onDocumentTouchStart=MO.bind(t),e.cssMode&&(t.onScroll=EO.bind(t)),t.onClick=TO.bind(t),t.onLoad=AO.bind(t),gv(t,"on")}function LO(){gv(this,"off")}var OO={attachEvents:jO,detachEvents:LO};const d4=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function RO(){const t=this,{realIndex:e,initialized:i,params:r,el:o}=t,l=r.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const u=Un(),d=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",f=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?t.el:u.querySelector(r.breakpointsBase),h=t.getBreakpoint(l,d,f);if(!h||t.currentBreakpoint===h)return;const y=(h in l?l[h]:void 0)||t.originalParams,v=d4(t,r),S=d4(t,y),b=t.params.grabCursor,A=y.grabCursor,O=r.enabled;v&&!S?(o.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),t.emitContainerClasses()):!v&&S&&(o.classList.add(`${r.containerModifierClass}grid`),(y.grid.fill&&y.grid.fill==="column"||!y.grid.fill&&r.grid.fill==="column")&&o.classList.add(`${r.containerModifierClass}grid-column`),t.emitContainerClasses()),b&&!A?t.unsetGrabCursor():!b&&A&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof y[P]>"u")return;const V=r[P]&&r[P].enabled,U=y[P]&&y[P].enabled;V&&!U&&t[P].disable(),!V&&U&&t[P].enable()});const j=y.direction&&y.direction!==r.direction,E=r.loop&&(y.slidesPerView!==r.slidesPerView||j),T=r.loop;j&&i&&t.changeDirection(),Xt(t.params,y);const D=t.params.enabled,L=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),O&&!D?t.disable():!O&&D&&t.enable(),t.currentBreakpoint=h,t.emit("_beforeBreakpoint",y),i&&(E?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!T&&L?(t.loopCreate(e),t.updateSlides()):T&&!L&&t.loopDestroy()),t.emit("breakpoint",y)}function DO(t,e,i){if(e===void 0&&(e="window"),!t||e==="container"&&!i)return;let r=!1;const o=Et(),l=e==="window"?o.innerHeight:i.clientHeight,u=Object.keys(t).map(d=>{if(typeof d=="string"&&d.indexOf("@")===0){const f=parseFloat(d.substr(1));return{value:l*f,point:d}}return{value:d,point:d}});u.sort((d,f)=>parseInt(d.value,10)-parseInt(f.value,10));for(let d=0;d<u.length;d+=1){const{point:f,value:h}=u[d];e==="window"?o.matchMedia(`(min-width: ${h}px)`).matches&&(r=f):h<=i.clientWidth&&(r=f)}return r||"max"}var kO={setBreakpoint:RO,getBreakpoint:DO};function HO(t,e){const i=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(o=>{r[o]&&i.push(e+o)}):typeof r=="string"&&i.push(e+r)}),i}function VO(){const t=this,{classNames:e,params:i,rtl:r,el:o,device:l}=t,u=HO(["initialized",i.direction,{"free-mode":t.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:r},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);e.push(...u),o.classList.add(...e),t.emitContainerClasses()}function zO(){const t=this,{el:e,classNames:i}=t;!e||typeof e=="string"||(e.classList.remove(...i),t.emitContainerClasses())}var PO={addClasses:VO,removeClasses:zO};function NO(){const t=this,{isLocked:e,params:i}=t,{slidesOffsetBefore:r}=i;if(r){const o=t.slides.length-1,l=t.slidesGrid[o]+t.slidesSizesGrid[o]+r*2;t.isLocked=t.size>l}else t.isLocked=t.snapGrid.length===1;i.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),i.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var BO={checkOverflow:NO},hp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function $O(t,e){return function(r){r===void 0&&(r={});const o=Object.keys(r)[0],l=r[o];if(typeof l!="object"||l===null){Xt(e,r);return}if(t[o]===!0&&(t[o]={enabled:!0}),o==="navigation"&&t[o]&&t[o].enabled&&!t[o].prevEl&&!t[o].nextEl&&(t[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&t[o]&&t[o].enabled&&!t[o].el&&(t[o].auto=!0),!(o in t&&"enabled"in l)){Xt(e,r);return}typeof t[o]=="object"&&!("enabled"in t[o])&&(t[o].enabled=!0),t[o]||(t[o]={enabled:!1}),Xt(e,r)}}const c0={eventsEmitter:PL,update:ZL,translate:eO,transition:aO,slide:fO,loop:gO,grabCursor:vO,events:OO,breakpoints:kO,checkOverflow:BO,classes:PO},u0={};let bh=class si{constructor(){let e,i;for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?i=o[0]:[e,i]=o,i||(i={}),i=Xt({},i),e&&!i.el&&(i.el=e);const u=Un();if(i.el&&typeof i.el=="string"&&u.querySelectorAll(i.el).length>1){const m=[];return u.querySelectorAll(i.el).forEach(y=>{const v=Xt({},i,{el:y});m.push(new si(v))}),m}const d=this;d.__swiper__=!0,d.support=fv(),d.device=pv({userAgent:i.userAgent}),d.browser=hv(),d.eventsListeners={},d.eventsAnyListeners=[],d.modules=[...d.__modules__],i.modules&&Array.isArray(i.modules)&&d.modules.push(...i.modules);const f={};d.modules.forEach(m=>{m({params:i,swiper:d,extendParams:$O(i,f),on:d.on.bind(d),once:d.once.bind(d),off:d.off.bind(d),emit:d.emit.bind(d)})});const h=Xt({},hp,f);return d.params=Xt({},h,u0,i),d.originalParams=Xt({},d.params),d.passedParams=Xt({},i),d.params&&d.params.on&&Object.keys(d.params.on).forEach(m=>{d.on(m,d.params.on[m])}),d.params&&d.params.onAny&&d.onAny(d.params.onAny),Object.assign(d,{enabled:d.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return d.params.direction==="horizontal"},isVertical(){return d.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:d.params.allowSlideNext,allowSlidePrev:d.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:d.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:d.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),d.emit("_swiper"),d.params.init&&d.init(),d}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:i,params:r}=this,o=Vn(i,`.${r.slideClass}, swiper-slide`),l=Vc(o[0]);return Vc(e)-l}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(i=>i.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:i,params:r}=e;e.slides=Vn(i,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,i){const r=this;e=Math.min(Math.max(e,0),1);const o=r.minTranslate(),u=(r.maxTranslate()-o)*e+o;r.translateTo(u,typeof i>"u"?0:i),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",i.join(" "))}getSlideClasses(e){const i=this;return i.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=[];e.slides.forEach(r=>{const o=e.getSlideClasses(r);i.push({slideEl:r,classNames:o}),e.emit("_slideClass",r,o)}),e.emit("_slideClasses",i)}slidesPerViewDynamic(e,i){e===void 0&&(e="current"),i===void 0&&(i=!1);const r=this,{params:o,slides:l,slidesGrid:u,slidesSizesGrid:d,size:f,activeIndex:h}=r;let m=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let y=l[h]?Math.ceil(l[h].swiperSlideSize):0,v;for(let S=h+1;S<l.length;S+=1)l[S]&&!v&&(y+=Math.ceil(l[S].swiperSlideSize),m+=1,y>f&&(v=!0));for(let S=h-1;S>=0;S-=1)l[S]&&!v&&(y+=l[S].swiperSlideSize,m+=1,y>f&&(v=!0))}else if(e==="current")for(let y=h+1;y<l.length;y+=1)(i?u[y]+d[y]-u[h]<f:u[y]-u[h]<f)&&(m+=1);else for(let y=h-1;y>=0;y-=1)u[h]-u[y]<f&&(m+=1);return m}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:i,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&bc(e,u)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function o(){const u=e.rtlTranslate?e.translate*-1:e.translate,d=Math.min(Math.max(u,e.maxTranslate()),e.minTranslate());e.setTranslate(d),e.updateActiveIndex(),e.updateSlidesClasses()}let l;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)o(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const u=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;l=e.slideTo(u.length-1,0,!1,!0)}else l=e.slideTo(e.activeIndex,0,!1,!0);l||o()}r.watchOverflow&&i!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,i){i===void 0&&(i=!0);const r=this,o=r.params.direction;return e||(e=o==="horizontal"?"vertical":"horizontal"),e===o||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${o}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(l=>{e==="vertical"?l.style.width="":l.style.height=""}),r.emit("changeDirection"),i&&r.update()),r}changeLanguageDirection(e){const i=this;i.rtl&&e==="rtl"||!i.rtl&&e==="ltr"||(i.rtl=e==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(e){const i=this;if(i.mounted)return!0;let r=e||i.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=i,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const o=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(o()):Vn(r,o())[0];return!u&&i.params.createElements&&(u=Hc("div",i.params.wrapperClass),r.append(u),Vn(r,`.${i.params.slideClass}`).forEach(d=>{u.append(d)})),Object.assign(i,{el:r,wrapperEl:u,slidesEl:i.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:u,hostEl:i.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Ui(r,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Ui(r,"direction")==="rtl"),wrongRTL:Ui(u,"display")==="-webkit-box"}),!0}init(e){const i=this;if(i.initialized||i.mount(e)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(void 0,!0),i.attachEvents();const o=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&o.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?bc(i,l):l.addEventListener("load",u=>{bc(i,u.target)})}),pp(i),i.initialized=!0,pp(i),i.emit("init"),i.emit("afterInit"),i}destroy(e,i){e===void 0&&(e=!0),i===void 0&&(i=!0);const r=this,{params:o,el:l,wrapperEl:u,slides:d}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),o.loop&&r.loopDestroy(),i&&(r.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),u&&u.removeAttribute("style"),d&&d.length&&d.forEach(f=>{f.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(f=>{r.off(f)}),e!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),CL(r)),r.destroyed=!0),null}static extendDefaults(e){Xt(u0,e)}static get extendedDefaults(){return u0}static get defaults(){return hp}static installModule(e){si.prototype.__modules__||(si.prototype.__modules__=[]);const i=si.prototype.__modules__;typeof e=="function"&&i.indexOf(e)<0&&i.push(e)}static use(e){return Array.isArray(e)?(e.forEach(i=>si.installModule(i)),si):(si.installModule(e),si)}};Object.keys(c0).forEach(t=>{Object.keys(c0[t]).forEach(e=>{bh.prototype[e]=c0[t][e]})});bh.use([VL,zL]);const xv=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ba(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function Sr(t,e){const i=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:ba(e[r])&&ba(t[r])&&Object.keys(e[r]).length>0?e[r].__swiper__?t[r]=e[r]:Sr(t[r],e[r]):t[r]=e[r]})}function yv(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function vv(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function wv(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function bv(t){t===void 0&&(t="");const e=t.split(" ").map(r=>r.trim()).filter(r=>!!r),i=[];return e.forEach(r=>{i.indexOf(r)<0&&i.push(r)}),i.join(" ")}function UO(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function _O(t){let{swiper:e,slides:i,passedParams:r,changedParams:o,nextEl:l,prevEl:u,scrollbarEl:d,paginationEl:f}=t;const h=o.filter($=>$!=="children"&&$!=="direction"&&$!=="wrapperClass"),{params:m,pagination:y,navigation:v,scrollbar:S,virtual:b,thumbs:A}=e;let O,j,E,T,D,L,P,V;o.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&!r.thumbs.swiper.destroyed&&m.thumbs&&(!m.thumbs.swiper||m.thumbs.swiper.destroyed)&&(O=!0),o.includes("controller")&&r.controller&&r.controller.control&&m.controller&&!m.controller.control&&(j=!0),o.includes("pagination")&&r.pagination&&(r.pagination.el||f)&&(m.pagination||m.pagination===!1)&&y&&!y.el&&(E=!0),o.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||d)&&(m.scrollbar||m.scrollbar===!1)&&S&&!S.el&&(T=!0),o.includes("navigation")&&r.navigation&&(r.navigation.prevEl||u)&&(r.navigation.nextEl||l)&&(m.navigation||m.navigation===!1)&&v&&!v.prevEl&&!v.nextEl&&(D=!0);const U=$=>{e[$]&&(e[$].destroy(),$==="navigation"?(e.isElement&&(e[$].prevEl.remove(),e[$].nextEl.remove()),m[$].prevEl=void 0,m[$].nextEl=void 0,e[$].prevEl=void 0,e[$].nextEl=void 0):(e.isElement&&e[$].el.remove(),m[$].el=void 0,e[$].el=void 0))};o.includes("loop")&&e.isElement&&(m.loop&&!r.loop?L=!0:!m.loop&&r.loop?P=!0:V=!0),h.forEach($=>{if(ba(m[$])&&ba(r[$]))Object.assign(m[$],r[$]),($==="navigation"||$==="pagination"||$==="scrollbar")&&"enabled"in r[$]&&!r[$].enabled&&U($);else{const Y=r[$];(Y===!0||Y===!1)&&($==="navigation"||$==="pagination"||$==="scrollbar")?Y===!1&&U($):m[$]=r[$]}}),h.includes("controller")&&!j&&e.controller&&e.controller.control&&m.controller&&m.controller.control&&(e.controller.control=m.controller.control),o.includes("children")&&i&&b&&m.virtual.enabled?(b.slides=i,b.update(!0)):o.includes("virtual")&&b&&m.virtual.enabled&&(i&&(b.slides=i),b.update(!0)),o.includes("children")&&i&&m.loop&&(V=!0),O&&A.init()&&A.update(!0),j&&(e.controller.control=m.controller.control),E&&(e.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-pagination"),f.part.add("pagination"),e.el.appendChild(f)),f&&(m.pagination.el=f),y.init(),y.render(),y.update()),T&&(e.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-scrollbar"),d.part.add("scrollbar"),e.el.appendChild(d)),d&&(m.scrollbar.el=d),S.init(),S.updateSize(),S.setTranslate()),D&&(e.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),zc(l,e.hostEl.constructor.nextButtonSvg),l.part.add("button-next"),e.el.appendChild(l)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),zc(u,e.hostEl.constructor.prevButtonSvg),u.part.add("button-prev"),e.el.appendChild(u))),l&&(m.navigation.nextEl=l),u&&(m.navigation.prevEl=u),v.init(),v.update()),o.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),o.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),o.includes("direction")&&e.changeDirection(r.direction,!1),(L||V)&&e.loopDestroy(),(P||V)&&e.loopCreate(),e.update()}function IO(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const i={on:{}},r={},o={};Sr(i,hp),i._emitClasses=!0,i.init=!1;const l={},u=xv.map(f=>f.replace(/_/,"")),d=Object.assign({},t);return Object.keys(d).forEach(f=>{typeof t[f]>"u"||(u.indexOf(f)>=0?ba(t[f])?(i[f]={},o[f]={},Sr(i[f],t[f]),Sr(o[f],t[f])):(i[f]=t[f],o[f]=t[f]):f.search(/on[A-Z]/)===0&&typeof t[f]=="function"?e?r[`${f[2].toLowerCase()}${f.substr(3)}`]=t[f]:i.on[`${f[2].toLowerCase()}${f.substr(3)}`]=t[f]:l[f]=t[f])}),["navigation","pagination","scrollbar"].forEach(f=>{i[f]===!0&&(i[f]={}),i[f]===!1&&delete i[f]}),{params:i,passedParams:o,rest:l,events:r}}function GO(t,e){let{el:i,nextEl:r,prevEl:o,paginationEl:l,scrollbarEl:u,swiper:d}=t;yv(e)&&r&&o&&(d.params.navigation.nextEl=r,d.originalParams.navigation.nextEl=r,d.params.navigation.prevEl=o,d.originalParams.navigation.prevEl=o),vv(e)&&l&&(d.params.pagination.el=l,d.originalParams.pagination.el=l),wv(e)&&u&&(d.params.scrollbar.el=u,d.originalParams.scrollbar.el=u),d.init(i)}function qO(t,e,i,r,o){const l=[];if(!e)return l;const u=f=>{l.indexOf(f)<0&&l.push(f)};if(i&&r){const f=r.map(o),h=i.map(o);f.join("")!==h.join("")&&u("children"),r.length!==i.length&&u("children")}return xv.filter(f=>f[0]==="_").map(f=>f.replace(/_/,"")).forEach(f=>{if(f in t&&f in e)if(ba(t[f])&&ba(e[f])){const h=Object.keys(t[f]),m=Object.keys(e[f]);h.length!==m.length?u(f):(h.forEach(y=>{t[f][y]!==e[f][y]&&u(f)}),m.forEach(y=>{t[f][y]!==e[f][y]&&u(f)}))}else t[f]!==e[f]&&u(f)}),l}const YO=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.emit("_virtualUpdated"),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function Pc(){return Pc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},Pc.apply(this,arguments)}function Sv(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function Cv(t){const e=[];return Le.Children.toArray(t).forEach(i=>{Sv(i)?e.push(i):i.props&&i.props.children&&Cv(i.props.children).forEach(r=>e.push(r))}),e}function FO(t){const e=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Le.Children.toArray(t).forEach(r=>{if(Sv(r))e.push(r);else if(r.props&&r.props.slot&&i[r.props.slot])i[r.props.slot].push(r);else if(r.props&&r.props.children){const o=Cv(r.props.children);o.length>0?o.forEach(l=>e.push(l)):i["container-end"].push(r)}else i["container-end"].push(r)}),{slides:e,slots:i}}function ZO(t,e,i){if(!i)return null;const r=m=>{let y=m;return m<0?y=e.length+m:y>=e.length&&(y=y-e.length),y},o=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`},{from:l,to:u}=i,d=t.params.loop?-e.length:0,f=t.params.loop?e.length*2:e.length,h=[];for(let m=d;m<f;m+=1)m>=l&&m<=u&&h.push(e[r(m)]);return h.map((m,y)=>Le.cloneElement(m,{swiper:t,style:o,key:m.props.virtualIndex||m.key||`slide-${y}`}))}function to(t,e){return typeof window>"u"?R.useEffect(t,e):R.useLayoutEffect(t,e)}const f4=R.createContext(null),XO=R.createContext(null),Wt=R.forwardRef(function(t,e){let{className:i,tag:r="div",wrapperTag:o="div",children:l,onSwiper:u,...d}=t===void 0?{}:t,f=!1;const[h,m]=R.useState("swiper"),[y,v]=R.useState(null),[S,b]=R.useState(!1),A=R.useRef(!1),O=R.useRef(null),j=R.useRef(null),E=R.useRef(null),T=R.useRef(null),D=R.useRef(null),L=R.useRef(null),P=R.useRef(null),V=R.useRef(null),{params:U,passedParams:$,rest:Y,events:F}=IO(d),{slides:te,slots:ie}=FO(l),oe=()=>{b(!S)};Object.assign(U.on,{_containerClasses(ee,k){m(k)}});const re=()=>{Object.assign(U.on,F),f=!0;const ee={...U};if(delete ee.wrapperClass,j.current=new bh(ee),j.current.virtual&&j.current.params.virtual.enabled){j.current.virtual.slides=te;const k={cache:!1,slides:te,renderExternal:v,renderExternalUpdate:!1};Sr(j.current.params.virtual,k),Sr(j.current.originalParams.virtual,k)}};O.current||re(),j.current&&j.current.on("_beforeBreakpoint",oe);const B=()=>{f||!F||!j.current||Object.keys(F).forEach(ee=>{j.current.on(ee,F[ee])})},K=()=>{!F||!j.current||Object.keys(F).forEach(ee=>{j.current.off(ee,F[ee])})};R.useEffect(()=>()=>{j.current&&j.current.off("_beforeBreakpoint",oe)}),R.useEffect(()=>{!A.current&&j.current&&(j.current.emitSlidesClasses(),A.current=!0)}),to(()=>{if(e&&(e.current=O.current),!!O.current)return j.current.destroyed&&re(),GO({el:O.current,nextEl:D.current,prevEl:L.current,paginationEl:P.current,scrollbarEl:V.current,swiper:j.current},U),u&&!j.current.destroyed&&u(j.current),()=>{j.current&&!j.current.destroyed&&j.current.destroy(!0,!1)}},[]),to(()=>{B();const ee=qO($,E.current,te,T.current,k=>k.key);return E.current=$,T.current=te,ee.length&&j.current&&!j.current.destroyed&&_O({swiper:j.current,slides:te,passedParams:$,changedParams:ee,nextEl:D.current,prevEl:L.current,scrollbarEl:V.current,paginationEl:P.current}),()=>{K()}}),to(()=>{YO(j.current)},[y]);function W(){return U.virtual?ZO(j.current,te,y):te.map((ee,k)=>Le.cloneElement(ee,{swiper:j.current,swiperSlideIndex:k}))}return Le.createElement(r,Pc({ref:O,className:bv(`${h}${i?` ${i}`:""}`)},Y),Le.createElement(XO.Provider,{value:j.current},ie["container-start"],Le.createElement(o,{className:UO(U.wrapperClass)},ie["wrapper-start"],W(),ie["wrapper-end"]),yv(U)&&Le.createElement(Le.Fragment,null,Le.createElement("div",{ref:L,className:"swiper-button-prev"}),Le.createElement("div",{ref:D,className:"swiper-button-next"})),wv(U)&&Le.createElement("div",{ref:V,className:"swiper-scrollbar"}),vv(U)&&Le.createElement("div",{ref:P,className:"swiper-pagination"}),ie["container-end"]))});Wt.displayName="Swiper";const Qt=R.forwardRef(function(t,e){let{tag:i="div",children:r,className:o="",swiper:l,zoom:u,lazy:d,virtualIndex:f,swiperSlideIndex:h,...m}=t===void 0?{}:t;const y=R.useRef(null),[v,S]=R.useState("swiper-slide"),[b,A]=R.useState(!1);function O(D,L,P){L===y.current&&S(P)}to(()=>{if(typeof h<"u"&&(y.current.swiperSlideIndex=h),e&&(e.current=y.current),!(!y.current||!l)){if(l.destroyed){v!=="swiper-slide"&&S("swiper-slide");return}return l.on("_slideClass",O),()=>{l&&l.off("_slideClass",O)}}}),to(()=>{l&&y.current&&!l.destroyed&&S(l.getSlideClasses(y.current))},[l]);const j={isActive:v.indexOf("swiper-slide-active")>=0,isVisible:v.indexOf("swiper-slide-visible")>=0,isPrev:v.indexOf("swiper-slide-prev")>=0,isNext:v.indexOf("swiper-slide-next")>=0},E=()=>typeof r=="function"?r(j):r,T=()=>{A(!0)};return Le.createElement(i,Pc({ref:y,className:bv(`${v}${o?` ${o}`:""}`),"data-swiper-slide-index":f,onLoad:T},m),u&&Le.createElement(f4.Provider,{value:j},Le.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof u=="number"?u:void 0},E(),d&&!b&&Le.createElement("div",{className:"swiper-lazy-preloader"}))),!u&&Le.createElement(f4.Provider,{value:j},E(),d&&!b&&Le.createElement("div",{className:"swiper-lazy-preloader"})))});Qt.displayName="SwiperSlide";const KO=C(Wt)`
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
`,WO=C(Qt)`
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
`,QO=C.section`
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
`,JO=C.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`,eR=C.div`
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
`,tR=C.p`
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
`,nR=C.p`
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
`,iR=C.img`
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
`;const aR=C.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${t=>t.$isActive?"898px":"437px"};
    height: ${t=>t.$isActive?"500px":"285px"};
  }
`,rR=C.div`
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
`,sR=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,oR=C.div`
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
`;const p4=C.button`
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
`,h4=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,lR=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,cR=C.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,uR=C.div`
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
`,dR="/assets/Review%20Image%203-bwglEcYl.png",m4="/assets/Review%20Image%201-BysFOq9G.png",g4="/assets/Review%20Image%202-C_HtVc_c.png",x4="/assets/Review%20Image%205-B3ukDKHL.png",fR="/assets/Review%20Image%204-AW0fOgIu.png",pR=C.section`
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
`,hR=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,mR=C.p`
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
`,gR=C.h3`
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
`,Tv=C.span`
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
`,xR=C.div`
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
`,yR=C.div`
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
`,vR=C.div`
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
`,wR=C(vR)`
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
`,bR=C.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`,SR=C.div`
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
`,CR=C.p`
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
`,TR=C.div`
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
`;function Ev(){const[t,e]=R.useState(null),[i,r]=R.useState(0),o=R.useRef(null),l=R.useRef(null),u=()=>{t&&t.slidePrev()},d=()=>{t&&t.slideNext()},f=[{image:dR,description:"A broken washing machine that stopped mid-cycle was fully restored by our team in just one visit. The family can now enjoy clean laundry again without stress.",title:"Quick Fix for a Washing Machine Breakdown",type:"Washing Machine Repair"},{image:g4,description:"We installed a brand-new dishwasher for a busy household, ensuring proper water connections and energy efficiency. The client now saves both time and water daily.",title:"Professional Dishwasher Installation",type:"Dishwasher Installation"},{image:x4,description:"A fridge that was leaking water and not cooling properly was diagnosed and repaired. The customer avoided costly food spoilage and gained reliable performance again.",title:"Refrigerator Leak and Cooling Repair",type:"Refrigerator Repair"},{image:fR,description:"The dryer was overheating and shutting down after a few minutes. Our experts replaced faulty parts and cleaned the vent system, restoring safe and efficient drying.",title:"Dryer Overheating Problem Solved",type:"Dryer Repair"},{image:m4,description:"An oven that wouldn’t heat evenly was repaired by recalibrating the thermostat and replacing heating elements. The family can now cook meals perfectly again.",title:"Oven Heating Restored for Perfect Meals",type:"Oven Repair"},{image:x4,description:"We handled a complete installation of a modern washing machine, ensuring proper setup, water connection, and vibration-free operation.",title:"Seamless Washing Machine Installation",type:"Washing Machine Installation"},{image:g4,description:"A freezer full of food was saved when we quickly repaired the compressor and restored full cooling capacity within hours.",title:"Emergency Freezer Repair",type:"Freezer Repair"},{image:m4,description:"A customer’s stove stopped working during family dinner preparation. Our team replaced defective wiring and burners, restoring it the same day.",title:"Stove Emergency Fixed Same Day",type:"Stove Repair"}];return x.jsxs(QO,{children:[x.jsxs(eR,{children:[x.jsx(tR,{children:"Our Cases"}),x.jsxs(nR,{children:[x.jsx(Tv,{children:"Success Stories "})," That Bring Your Appliances Back to Life"]})]}),x.jsx(uR,{children:x.jsx(KO,{modules:[pn],pagination:{clickable:!0},spaceBetween:20,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,onSwiper:e,onSlideChange:h=>r(h.realIndex),breakpoints:{1440:{slidesPerView:6,spaceBetween:30,centeredSlides:!0}},children:f.map(({image:h,description:m,title:y,type:v},S)=>x.jsx(WO,{$isActive:i===S,$index:S,children:x.jsxs(aR,{$isActive:i===S,$index:S,children:[x.jsx(iR,{src:h,alt:v,$isActive:i===S,$index:S}),x.jsx(rR,{$isActive:i===S,$index:S,children:x.jsxs(sR,{children:[x.jsx(oR,{children:x.jsx(h4,{children:m})}),x.jsxs(lR,{children:[x.jsx(cR,{children:y}),x.jsx(h4,{children:v})]})]})})]})},S))})}),x.jsxs(JO,{children:[x.jsx(p4,{ref:o,$bg:"#DBDBD8",onClick:u,children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(p4,{ref:l,$bg:"#3098EE",onClick:d,children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})}const ER=C(Sn.div)`
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
`,AR=C.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`,MR=({type:t,message:e,onClose:i,autoClose:r=!0,autoCloseDuration:o=25e3})=>{const{t:l}=vh();R.useEffect(()=>{if(r){const d=setTimeout(()=>{i()},o);return()=>clearTimeout(d)}},[r,o,i]);const u={success:l("alert.success"),error:l("alert.error")};return x.jsxs(ER,{$type:t,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",damping:25},children:[x.jsx("div",{children:e||u[t]}),x.jsx(AR,{onClick:i,children:"×"})]})},jR="/assets/ContactFormImage-CaQYWUqs.png",Sh=()=>{const[t,e]=R.useState(""),[i,r]=R.useState({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),[o,l]=R.useState({}),[u,d]=R.useState(null),f=y=>{const{name:v,value:S}=y.target;r(b=>({...b,[v]:S})),l(b=>({...b,[v]:!1}))},h=()=>{const y={};return t||(y.service=!0),i.name||(y.name=!0),i.email||(y.email=!0),i.phone||(y.phone=!0),i.location||(y.location=!0),i.appliance||(y.appliance=!0),i.brand||(y.brand=!0),i.power||(y.power=!0),y},m=async y=>{y.preventDefault();const v=h();if(Object.keys(v).length>0){l(v),d({type:"error",message:"Please fill all required fields"});return}try{if((await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:t,...i})})).ok)e(""),r({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),l({}),d({type:"success",message:"Form submitted successfully! We will contact you soon."});else throw new Error("Failed to submit form")}catch(S){console.error("Error submitting form:",S),d({type:"error",message:"There was an error submitting the form. Please try again."})}};return x.jsxs(HR,{children:[x.jsxs(b4,{children:[x.jsxs(f0,{children:[x.jsxs(VR,{children:[" ",x.jsx("span",{children:"Contact"})," our team"]}),x.jsx(tc,{children:"We love our customers, so feel free to call during normal business hours"})]}),x.jsx(zR,{children:x.jsx(PR,{children:"Call Us for Fast Repair"})}),x.jsxs(b4,{children:[x.jsx(NR,{}),x.jsxs(BR,{children:[x.jsxs(S4,{width:"251px",children:[x.jsx(C4,{children:"Service Hours"}),x.jsx(f0,{children:x.jsxs(tc,{children:["Mon–Sat: 8AM–6PM ",x.jsx("br",{})," Sun: 9AM–4PM"," "]})})]}),x.jsxs(S4,{children:[x.jsx(C4,{children:"Our Location"}),x.jsxs(f0,{children:[x.jsx(tc,{children:"801 Tioga Pl, Newbury Park, CA 91320"}),x.jsx(tc,{children:"+1 (805) 500-2705"})]})]})]})]})]}),x.jsxs(LR,{onSubmit:m,children:[x.jsx($R,{src:jR,alt:"contact image"}),x.jsx(ri,{children:"What service do you need for your appliances?"}),x.jsxs(OR,{children:[x.jsxs(y4,{style:o.service?{borderColor:"red"}:{},children:[x.jsx(v4,{name:"service",value:"Repair",checked:t==="Repair",onChange:y=>e(y.target.value)}),x.jsx(w4,{checked:t==="Repair"}),"Repair"]}),x.jsxs(y4,{style:o.service?{borderColor:"red"}:{},children:[x.jsx(v4,{name:"service",value:"Installation",checked:t==="Installation",onChange:y=>e(y.target.value)}),x.jsx(w4,{checked:t==="Installation"}),"Installation"]})]}),x.jsxs(UR,{children:[x.jsxs(_R,{children:[x.jsx(ri,{children:"Name"}),x.jsx(d0,{name:"name",type:"text",placeholder:"Your Name",value:i.name,onChange:f,style:o.name?{borderBottom:"1px solid red"}:{}}),x.jsx(ri,{children:"Email"}),x.jsx(d0,{name:"email",type:"email",placeholder:"Your Email",value:i.email,onChange:f,style:o.email?{borderBottom:"1px solid red"}:{}}),x.jsx(ri,{children:"Phone Number"}),x.jsx(d0,{name:"phone",type:"tel",placeholder:"Your Phone Number",value:i.phone,onChange:f,style:o.phone?{borderBottom:"1px solid red"}:{}})]}),x.jsxs(IR,{children:[x.jsx(ri,{children:"In what location do you need the service?"}),x.jsx(Jl,{children:x.jsxs(ec,{name:"location",value:i.location,onChange:f,style:o.location?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select location"}),x.jsx("option",{children:"Malibu"}),x.jsx("option",{children:"Los Angeles County"}),x.jsx("option",{children:"Thousand Oaks"}),x.jsx("option",{children:"Newbury Park"}),x.jsx("option",{children:"Westlake Village"}),x.jsx("option",{children:"Oak Park"}),x.jsx("option",{children:"Lake Sherwood"}),x.jsx("option",{children:"Hidden Valley"}),x.jsx("option",{children:"Camarillo"}),x.jsx("option",{children:"Agoura Hills"}),x.jsx("option",{children:"Moorpark"}),x.jsx("option",{children:"Calabasas"}),x.jsx("option",{children:"Santa Rosa Valley"}),x.jsx("option",{children:"Other"})]})}),x.jsx(ri,{children:"What do you need repaired?"}),x.jsx(Jl,{children:x.jsxs(ec,{name:"appliance",value:i.appliance,onChange:f,style:o.appliance?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select appliance"}),x.jsx("option",{children:"Cooktop"}),x.jsx("option",{children:"Oven"}),x.jsx("option",{children:"Range"}),x.jsx("option",{children:"Washer"}),x.jsx("option",{children:"Refrigerator"}),x.jsx("option",{children:"Microwave"}),x.jsx("option",{children:"Dishwasher"}),x.jsx("option",{children:"Dryer"}),x.jsx("option",{children:"Washing Machine"}),x.jsx("option",{children:"Freezer"}),x.jsx("option",{children:"Stove"}),x.jsx("option",{children:"Wine Cooler"}),x.jsx("option",{children:"Other"})]})}),x.jsx(ri,{children:"Brand of appliance"}),x.jsx(Jl,{children:x.jsxs(ec,{name:"brand",value:i.brand,onChange:f,style:o.brand?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select brand"}),x.jsx("option",{children:"LG"}),x.jsx("option",{children:"Samsung"}),x.jsx("option",{children:"Whirlpool"}),x.jsx("option",{children:"Bosch"}),x.jsx("option",{children:"GE"}),x.jsx("option",{children:"Frigidaire"}),x.jsx("option",{children:"Maytag"}),x.jsx("option",{children:"KitchenAid"}),x.jsx("option",{children:"Viking"}),x.jsx("option",{children:"Fisher & Paykel"}),x.jsx("option",{children:"Amana"}),x.jsx("option",{children:"JennAir"}),x.jsx("option",{children:"Haier"}),x.jsx("option",{children:"Sharp"}),x.jsx("option",{children:"Electrolux"}),x.jsx("option",{children:"Sub-Zero"}),x.jsx("option",{children:"Thermador"}),x.jsx("option",{children:"Wolf"}),x.jsx("option",{children:"Other"})]})})]})]}),x.jsx(ri,{children:"What type of power does this appliance use?"}),x.jsx(Jl,{children:x.jsxs(ec,{name:"power",value:i.power,onChange:f,style:o.power?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select power"}),x.jsx("option",{children:"Electric"}),x.jsx("option",{children:"Gas"}),x.jsx("option",{children:"Dual Fuel"}),x.jsx("option",{children:"Induction"}),x.jsx("option",{children:"Solar"}),x.jsx("option",{children:"Propane"}),x.jsx("option",{children:"Natural Gas"}),x.jsx("option",{children:"Other"})]})}),x.jsx(ri,{children:"Any details you'd like to add?"}),x.jsx(RR,{name:"details",placeholder:"Any details you'd like to add?",value:i.details,onChange:f}),x.jsxs(kR,{children:['By clicking "Submit" you hereby agree to our ',x.jsx("a",{href:"http://#",children:"Privacy Policy"})," ."]}),x.jsx(DR,{type:"submit",children:"Submit"})]}),x.jsx(gy,{children:u&&x.jsx(MR,{type:u.type,message:u.message,onClose:()=>d(null)})})]})},LR=C.form`
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
`,ri=C.label`
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
`,OR=C.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,y4=C.label`
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
`,v4=C.input.attrs({type:"radio"})`
  display: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,w4=C.span`
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
`,d0=C.input`
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
`,RR=C.textarea`
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
`,DR=C.button`
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
`,kR=C.p`
  font-size: 12px;
  color: #666;
  text-align: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,HR=C.div`
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
`,b4=C.div`
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
`,f0=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,VR=C.p`
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
`,zR=C.button`
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
`,PR=C.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,NR=C.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,BR=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,S4=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${t=>t.width||"100%"};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,C4=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,$R=C.img`
  margin: 0 auto;
  width: 100%;
  max-width: 696px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 668px;
  }

  @media screen and (min-width: 1440px) {
  }
`,UR=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`,_R=C.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,IR=C.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,T4="/assets/Ellipse%204aleksey-FxWBDF7j.png",E4="/assets/Ellipse%204-sanal-avatar-Dxfndv0Z.png",A4="/assets/Ellipse%204-Wendy%20Bailey-jDxdSyQ5.png",M4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgESURBVHgB3Vr7b1NVHP/c29t3V9ZtsNG9Oh1TivJWCAaGYjSDxWgwBo3EmBgRTIiCidF/QBMTfoaYKGIkQIiiYTwSQHkZiKCM8d4YY2PtBuzRrs/b9l6/53aDjdFube9Yt09yt7b33HPP93zf3+/hoD442GxW5JocsOW8CKPxJRj1lRCEORA0BmVELBZEJFqPkFgPX7AR3r5j6Oq7A4+nByqDg1pwOBwozd+Egty3YTJOJyKAaAzKf0kGZHaxgfSH4+IXzwMaugRN/PIG2tHj2YEm11a43a1QAZkSyGOesxYV9m1EVBGCIRBnJCKGR3qQoddxMOhAczXg5p1vceHabvo9hjSRLoEcFjrfQGX5j8QJG3yBfhZx6RI2FDLNxaaymDjEosDN1rdw/uo+pIHUCXRMLcKCuf9Cr52OPr8UlzUVRX0oFKGG1cwhFG7AhSurcNPVlsoEmlQGY/nCTzFn1jH4gxaExQGOjRVx6J+bo3exjZyGGY5NsFg60eY+l8oEoxtXu+wgrJbXyRBE6ZuA8YAkRzHFIsDjO4W648swwOEkGA2BWqypuUIWsZLMeoyeSI3rakNGFEadAA3XiF2HnfRLNNnwkQjU4b2a6wiI5YhGmbqNpTimAFkiv8pBb2jBrroqJCEy2YI5rFnZiHD4KTL9WUTcAPqJ1GkbsfvQs0ggronNem31KSLs6ewkjoEMXDQqQ5KqULNsf6JRj9en6hc2Ymrux+RsSedU8m1jAtr4CIVKtpxnYLN04Lb7/LARw56pqCjH0udb0O0ha8mNj7VMFcy6FkwRcOhsITo77w6+NZw7CysPwOuTJgxxDDyttdcnY8lzfw67NeTbolmrIeic5BKyUOdGgBSTKR52Yu7MVYN/HkygAEfJXvgU7k08ApnRYaFjVdlPGETXQzGcN/NdJX1B+sTx9LwcESG72sl8MfuVwlTkZ7niYlqRVom104IsU4wl5BMXa3Dhah2GrGD1q5fJIj2bQapDqZKI4oJp+HvLNnj8PqSyTJvZguVfbURz222QA0fa4Oi1GqEDvx2xs69xDpYXVsBocCLcJyMT6ZQk6AUBZVOnAexKETmMMJojIzD2mw3T8bS9lGUecQIdpespHcncodPj0iDxilAud+pKAwReGFFY86xWeIJBkvNMQ13SxbAITC/8jAjcHCcwL/d9hCLEPXVTn0A4jFfeIaNmMMTLE8mg6GApeBorpauDAwhRKpdvW0OfvhBQXJwPE7HU64Pa4GkzdSWlEA3GUdkuRpacKXFxcDAb7cjLy6EV6EqU4tBkA9Nls7mMR65+hVL5mmxg6V2BZREPi3kGYhlarmwE46DRsESg4tHcseKgTCmb6HbRi5LoINM5rRa6IjvEaBSqgSI3Kj9WMgJnY4ygo6hk86av6RXahAZaoIins7cHW/f8TNWzKVANbOOINiomVasXe4phOIgTt7bvfWAR+VFM7e7ugr16LqVqlVAVkhQWxiqwZpMyfxYQRSIyyTjyj95AgGLXscjOWPlPigVochPU8T9D4AsFUbhyKTRGU2JHT++VaY/5MgdUNXWMb1I0KECMXYRJWAz16VPEUyYdCySLYvobMYogqbnJbD5RvMgjFGocMYxK/y1xzildJE3ii6VZaksQ04tQpJ6HP3Q6nrtNMrCgPRBo4tEdOKv06CYbWL+xK3iUR29vC2XBmHQQiGkej4uqUb1eBIMdZGQK1U6XlEjm/j2KKIwjp0usD2jLA6fTq6GPMvUs21lLnLFOwn3vr1To3QAxAjXBIpm1az+ipq1uxL2zWSz45fgRtHe4ldAtI+j1HDrub2cf47LZ2vYdygo3KD2/DB3/wMOMC1qtgB0Uqo0WzR0u7L3ZCOTakD5IbAw6nrL579m3OIEtHS2YH+okMZqqVKbSnrs/eqFMPkhhWyrIoWDAo0Q0GZcsOGrQNgwcYnhoXVo716GyZB/dRLrgqNzQ2nUP5sXOuJKnAtbkmVYEzZRcyt4yiGlyqK9/qfmbB2sadEtD7bJ78AesACaqY5RhJP3bc5itX9mlwdscQ1Pbh5QAa9QPK54ESPdyzByaXW8CD8PaoXJ0ruEPRCJu0oOJRyDLRsLhBqLh98E/P6ooMi5fX0CNfl7phU8UyOxwgplH/dWVj94armv3PT5qKHYhP7eW/CKrZWR3HMcYwU5eNLevR/2NY4/eTuwSaqsPw6B/jSreMrK128RsBTMqwdBJ7D+x7HFDEnNn//EaavA3QSvIWWl0lEhCYCFgExFXnWhYMvGTsLPOSTvUqkTm2UTkAHFGQws6D81EkgNBI+lXBDsPPEO9hWYKf5iYjn+FWKY1GA0cVeQb4fJX4a/MDgINgEftyydhNS6B1z9+hxMkZlDMlAH1HcSBE6xVPaJUjTZikXGj5Qfk2bpRlL9KORMqSU/w/Aw5cXaaJc+qwW33ehw98/lon0x9gTMryuGcUUedzln9xynH2I2wCIX8ckh04b/6+bh1tzOVp9PnwKLZq+Gw71WqV4EQ4yinGkeVA7Fc/ECsJHXj2p0PUH+J9dxTNnSZLkhQDi88VfIl+cxZSpdYFNPnqsyONGs5stxAMOxGq2sd/rl8AONwpHk42KH0soJPSE/WwmyyK+0r1tRhnSvlULr0cP8fHErvLyuymhBzRf6gG929e3DHtQXN2XEo/fGwWvNgtxbDlLOCTHoVcWQ2pfezqXpnUu7HpAAZqosIh5qIqNPo9Z1Bj78VPT1epCGGyfA/uU/qLszt8vwAAAAASUVORK5CYII=",j4="/assets/Review%20Image-alexey-BS9M-VaX.png",L4="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",O4="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",R4="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",nc=[{avatar:T4,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:j4},{avatar:E4,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:L4},{avatar:A4,name:"Wendy Bailey",time:"месяц назад",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:O4},{avatar:M4,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:R4},{avatar:T4,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:j4},{avatar:E4,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:L4},{avatar:A4,name:"Wendy Bailey",time:"месяц назад",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:O4},{avatar:M4,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:R4}],GR=C.div`
  padding: 0px 16px;
  width: 375px;
  height: 170px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,qR=C.h2`
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
`,YR=C.p`
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
`,FR=C.div`
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
`,p0=C.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: ${t=>t.$isVisible?"block":"none"};

  @media screen and (min-width: 768px) {
    width: 50%; /* Два свайпери займають по половині ширини */
    display: block;
  }
`,h0=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: #f5faff;
  border-radius: 8px;
  height: 600px; /* Фіксована висота картки */
`,m0=C.div`
  display: flex;
  gap: 19px;
  align-items: center;
`,g0=C.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`,x0=C.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y0=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`,v0=C.p`
  color: rgba(33, 33, 33, 0.5);
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`,w0=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  line-height: 1.25em;
  flex-grow: 1;
  overflow: hidden;
`,b0=C.img`
  width: 100%;
  height: 370px;
  border-radius: 4px;
  object-fit: cover;
`,S0=C.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,C0=C.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,Ch=()=>{const[,t]=Le.useState(!1),e=Le.useRef(null),i=Le.useRef(null),r=Le.useRef(null),o=Ue({query:"(min-width: 768px)"}),l=Ue({query:"(min-width: 1440px)"}),u=d=>{if(!e.current||!r.current)return;const f=e.current,h=r.current,m=d.touches[0].clientY,{top:y,bottom:v}=h.getBoundingClientRect(),S=f.isBeginning&&m>y+50,b=f.isEnd&&m<v-50;S||b?(t(!0),f.allowTouchMove=!1):(t(!1),f.allowTouchMove=!0)};return Le.useEffect(()=>{const d=r.current;if(d)return d.addEventListener("touchmove",u,{passive:!1}),()=>{d.removeEventListener("touchmove",u)}},[]),x.jsxs("div",{children:[x.jsxs(GR,{children:[x.jsx(YR,{children:"Your Feedback Matters"}),x.jsxs(qR,{children:["Discover why clients ",x.jsx("span",{children:" trust "})," our repairs"]})]}),x.jsxs(FR,{ref:r,children:[x.jsxs(p0,{$isVisible:!0,children:[x.jsx(S0,{}),x.jsx(C0,{}),x.jsx(Wt,{ref:e,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!0,waitForTransition:!0},speed:7e3,loop:!0,touchEventsTarget:"container",modules:[i0,pn],grabCursor:!0,resistance:!0,resistanceRatio:.85,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{e.current&&(e.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:nc.map((d,f)=>x.jsx(Qt,{children:x.jsxs(h0,{children:[x.jsxs(m0,{children:[x.jsx(g0,{src:d.avatar,alt:d.name}),x.jsxs(x0,{children:[x.jsx(y0,{children:d.name}),x.jsx(v0,{children:d.time})]})]}),x.jsx(w0,{children:d.text}),x.jsx(b0,{src:d.image,alt:`Review by ${d.name}`})]})},`top-${f}`))})]}),x.jsxs(p0,{$isVisible:o,children:[x.jsx(S0,{}),x.jsx(C0,{}),x.jsx(Wt,{ref:i,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!0,waitForTransition:!0,reverseDirection:!0},speed:4e3,loop:!0,touchEventsTarget:"container",modules:[i0,pn],grabCursor:!1,noSwiping:!0,allowTouchMove:!1,simulateTouch:!1,resistance:!0,resistanceRatio:.85,initialSlide:nc.length-1,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{i.current&&(i.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:nc.map((d,f)=>x.jsx(Qt,{children:x.jsxs(h0,{children:[x.jsxs(m0,{children:[x.jsx(g0,{src:d.avatar,alt:d.name}),x.jsxs(x0,{children:[x.jsx(y0,{children:d.name}),x.jsx(v0,{children:d.time})]})]}),x.jsx(w0,{children:d.text}),x.jsx(b0,{src:d.image,alt:`Review by ${d.name}`})]})},`bottom-${f}`))})]}),l&&x.jsxs(p0,{$isVisible:!0,children:[x.jsx(S0,{}),x.jsx(C0,{}),x.jsx(Wt,{ref:e,direction:"vertical",slidesPerView:1,spaceBetween:20,freeMode:{enabled:!1},mousewheel:{enabled:!1},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0,waitForTransition:!0},speed:9e3,loop:!0,touchEventsTarget:"container",modules:[i0,pn],grabCursor:!0,resistance:!0,resistanceRatio:.85,onReachBeginning:()=>t(!1),onReachEnd:()=>t(!1),onTouchEnd:()=>{setTimeout(()=>{e.current&&(e.current.allowTouchMove=!0)},100)},style:{height:"100%"},children:nc.map((d,f)=>x.jsx(Qt,{children:x.jsxs(h0,{children:[x.jsxs(m0,{children:[x.jsx(g0,{src:d.avatar,alt:d.name}),x.jsxs(x0,{children:[x.jsx(y0,{children:d.name}),x.jsx(v0,{children:d.time})]})]}),x.jsx(w0,{children:d.text}),x.jsx(b0,{src:d.image,alt:`Review by ${d.name}`})]})},`top-${f}`))})]})]})]})},ZR="/assets/Hero%20Image-CELmD3oB.png",Th="data:image/svg+xml,%3csvg%20width='140'%20height='33'%20viewBox='0%200%20140%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_586)'%3e%3cpath%20d='M0.00384521%2032.9336H31.9955V0.933594H0.00384521V32.9336ZM20.5091%203.37746C26.1637%205.23116%2030.25%2010.5932%2030.2654%2016.9275C30.2807%2023.1588%2026.277%2028.508%2020.5091%2030.4846V3.37746ZM15.9946%202.65223C17.0161%202.65223%2018.1043%202.78857%2019.0107%202.96908C19.0107%2010.2187%2012.0004%2016.185%204.76547%2016.185L1.74041%2016.1805C2.23648%208.74909%208.38454%202.65223%2015.9946%202.65223ZM4.76803%2017.6943C12.0017%2017.6943%2019.0094%2023.6542%2019.0094%2030.8968C18.1043%2031.0818%2016.9617%2031.2194%2015.9946%2031.2194C8.38198%2031.2092%202.02589%2025.0938%201.73849%2017.6943H4.76803ZM42.7049%2019.7452V17.7283H49.3618V15.157H42.7036V11.4131H49.7862V8.84766H39.9787V19.6287C39.9787%2022.3542%2041.1392%2024.2181%2043.8634%2024.6009C43.9178%2024.6143%2043.9716%2024.6246%2044.0215%2024.6259H44.0708C44.3499%2024.6572%2044.6347%2024.6777%2044.9336%2024.6777H49.975V22.1154H44.9561C44.09%2022.1154%2042.7049%2021.6879%2042.7049%2019.7452ZM51.9113%2024.6816H54.6374V8.84382H51.9113V24.6816ZM62.6404%2012.8674C59.1948%2012.8674%2056.6159%2015.2415%2056.6159%2018.938V19.0296C56.6159%2022.6358%2059.1033%2024.9638%2062.7089%2024.9638C64.4429%2024.9638%2066.063%2024.4851%2067.5461%2022.9092L65.903%2021.3121C65.0357%2022.1794%2064.1914%2022.6358%2062.7998%2022.6358C60.7688%2022.6358%2059.4227%2021.4491%2059.3312%2019.6229H68.2758C68.3212%2019.1665%2068.3212%2018.6647%2068.3212%2018.6647C68.3225%2015.4463%2066.063%2012.8674%2062.6404%2012.8674ZM59.4003%2017.7059C59.5142%2016.313%2060.9295%2015.1948%2062.6404%2015.1948C64.2375%2015.1948%2065.5381%2016.3361%2065.5381%2017.7059H59.4003ZM75.9825%2015.3094C77.2146%2015.3094%2078.1281%2015.7664%2078.9032%2016.5646L80.5918%2014.8069C79.2681%2013.3917%2077.6941%2012.8213%2075.9825%2012.8213C72.5138%2012.8213%2069.7301%2015.4003%2069.7301%2018.915C69.7301%2022.4297%2072.5138%2025.0093%2075.9825%2025.0093C77.6941%2025.0093%2079.2687%2024.439%2080.5918%2023.0237L78.9032%2021.266C78.1281%2022.0649%2077.2146%2022.5213%2075.9825%2022.5213C73.9739%2022.5213%2072.4453%2020.9914%2072.4453%2018.915C72.4453%2016.8385%2073.9739%2015.3094%2075.9825%2015.3094ZM85.0148%2019.7497H85.0116V15.7062H87.4906V13.2291H85.0148V8.84446H82.2886V19.9103L82.2963%2019.9097C82.3744%2022.4829%2083.5432%2024.2354%2086.1733%2024.6047C86.2277%2024.6182%2086.2815%2024.6284%2086.3314%2024.6291H86.3807C86.6598%2024.6604%2086.9446%2024.6816%2087.2436%2024.6816H87.5322L87.5418%2022.1193H87.266C86.3999%2022.1193%2085.0148%2021.6923%2085.0148%2019.7497ZM92.4885%2014.9324V13.2297H89.7847V24.6816H92.4885V18.6596C92.4885%2016.7739%2093.6925%2015.5916%2095.5775%2015.5916C96.009%2015.5916%2096.3956%2015.6365%2096.7137%2015.7056V13.0703C96.5998%2013.0479%2096.1914%2013.0018%2095.8963%2013.0018C94.2602%2013.0025%2093.0338%2013.7527%2092.4885%2014.9324ZM103.38%2012.8885C99.9033%2012.8885%2097.131%2015.5232%2097.131%2018.9553C97.131%2022.3856%2099.9033%2025.0221%20103.38%2025.0221C106.832%2025.0221%20109.627%2022.3856%20109.627%2018.9553C109.626%2015.5238%20106.832%2012.8885%20103.38%2012.8885ZM103.38%2022.5456C101.358%2022.5456%2099.8361%2020.9767%2099.8361%2018.9553C99.8361%2016.9326%20101.358%2015.3651%20103.38%2015.3651C105.379%2015.3651%20106.923%2016.9326%20106.923%2018.9553C106.922%2020.9774%20105.379%2022.5456%20103.38%2022.5456ZM111.303%2024.6816H114.03V8.84382H111.303V24.6816ZM123.862%2019.8866C123.862%2021.7039%20122.795%2022.4777%20121.363%2022.4777C119.932%2022.4777%20118.865%2021.7039%20118.865%2019.911V13.2297H116.115V20.1376C116.115%2023.4097%20118.5%2024.9773%20121.34%2024.9773C124.203%2024.9773%20126.61%2023.3867%20126.61%2020.0691V13.2297H123.862V19.8866ZM136.925%2021.0196L135.206%2018.6148L137.335%2015.7139L139.158%2013.2297H136.182L133.705%2016.6606L131.206%2013.2297H128.253L129.947%2015.5462L132.206%2018.6372L129.838%2021.9356L127.867%2024.6816H130.797L133.704%2020.6368L136.613%2024.6816H139.544L136.925%2021.0196Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_586'%3e%3crect%20width='139.541'%20height='32'%20fill='white'%20transform='translate(0.00384521%200.933594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Nc="/assets/2-lv1xptCk.svg",Eh="/assets/3-xYBlE7jA.svg",Ah="data:image/svg+xml,%3csvg%20width='77'%20height='36'%20viewBox='0%200%2077%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M67.1338%2020.3456H71.0883V24.0242C70.3626%2024.3009%2068.9382%2024.5778%2067.5878%2024.5778C63.2137%2024.5778%2061.7591%2022.3574%2061.7591%2017.8483C61.7591%2013.5451%2063.1439%2011.0128%2067.5138%2011.0128C69.9492%2011.0128%2071.3309%2011.7769%2072.4762%2013.2341L75.4978%2010.4581C73.6527%207.82715%2070.4323%207.02979%2067.4087%207.02979C60.6107%207.02708%2057.0362%2010.7351%2057.0362%2017.8125C57.0362%2024.8547%2060.266%2028.6723%2067.3723%2028.6723C70.6355%2028.6723%2073.8247%2027.8417%2075.5614%2026.6244V16.4251H67.1339L67.1338%2020.3456ZM46.3909%2024.2661H56.4545V28.36H41.5343V7.33832H46.3913L46.3909%2024.2661Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4968%2029.43C35.8453%2023.0815%2035.8449%2012.7878%2029.4961%206.44074C23.1474%200.0925049%2012.854%200.0917411%206.50687%206.44012C0.158384%2012.7885%200.158766%2023.0823%206.5075%2029.4294C12.8561%2035.7781%2023.1497%2035.7783%2029.4968%2029.43Z'%20fill='%23242424'/%3e%3cpath%20d='M13.0698%2014.7643C13.4404%2014.7625%2013.8023%2014.6509%2014.1096%2014.4436C14.4169%2014.2364%2014.6559%2013.9428%2014.7965%2013.5998C14.9372%2013.2568%2014.973%2012.8798%2014.8996%2012.5165C14.8261%2012.1531%2014.6467%2011.8197%2014.384%2011.5583C14.1212%2011.2968%2013.7868%2011.119%2013.4232%2011.0474C13.0596%2010.9757%2012.6828%2011.0134%2012.3405%2011.1556C11.9982%2011.298%2011.7057%2011.5384%2011.4999%2011.8468C11.2942%2012.1551%2011.1845%2012.5174%2011.1845%2012.8881C11.185%2013.1351%2011.2342%2013.3796%2011.3293%2013.6075C11.4245%2013.8355%2011.5635%2014.0425%2011.7385%2014.2167C11.9136%2014.3909%2012.1213%2014.5289%2012.3497%2014.6229C12.5781%2014.7169%2012.8228%2014.7649%2013.0698%2014.7643ZM30.2643%2018.4501H21.9973V17.2255H31.4759C31.4889%2017.4627%2031.4953%2017.6998%2031.4953%2017.9398C31.4953%2025.3134%2025.4857%2031.2907%2018.0744%2031.2907C10.6628%2031.2907%204.65222%2025.3171%204.65222%2017.9398C4.65222%2010.5631%2010.6609%204.58887%2018.0731%204.58887C18.2688%204.58887%2018.4635%204.59282%2018.6572%204.60084V5.81624C18.4635%205.8076%2018.2694%205.80333%2018.0749%205.80333C11.3382%205.80333%205.87505%2011.2371%205.87505%2017.9385C5.87505%2024.6401%2011.3375%2030.0749%2018.0749%2030.0749C24.6272%2030.0749%2029.98%2024.9337%2030.2633%2018.4842L30.2643%2018.4501ZM21.9785%2023.5518H18.6561V11.0698H17.4278V24.7847H18.659V24.7765H21.9813L21.9785%2023.5518Z'%20fill='white'/%3e%3c/svg%3e",Mh="/assets/5-DtA_MHfM.svg",jh="/assets/6-BYfTVs51.svg",Lh="/assets/7-DtKFqDn5.svg",Oh="/assets/8-C9mdpuht.svg",Rh="/assets/9-1he0Czj8.svg",Dh="data:image/svg+xml,%3csvg%20width='191'%20height='24'%20viewBox='0%200%20191%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_699)'%3e%3cmask%20id='mask0_277_699'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='190'%20height='56'%3e%3cpath%20d='M0.970825%2055.6831H189.922V0.547134H0.970825V55.6831Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_277_699)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.577%2023.4158H132.473L121.526%200.547155L110.577%2023.4158ZM188.424%2021.6962C188.63%2021.6962%20188.752%2021.5893%20188.752%2021.4207C188.752%2021.2342%20188.63%2021.1372%20188.424%2021.1372H188.012V21.6962H188.424ZM187.698%2020.8347H188.438C188.656%2020.8347%20188.827%2020.9045%20188.941%2021.0255C189.027%2021.1134%20189.076%2021.2395%20189.076%2021.3932C189.076%2021.6871%20188.92%2021.8643%20188.692%2021.9332L189.138%2022.6008H188.761L188.359%2021.9899H188.012V22.6008H187.698V20.8347ZM189.754%2021.7662C189.754%2020.9234%20189.146%2020.2473%20188.342%2020.2473C187.531%2020.2473%20186.917%2020.9317%20186.917%2021.7662C186.917%2022.6098%20187.526%2023.2846%20188.332%2023.2846C189.142%2023.2846%20189.754%2022.6008%20189.754%2021.7662ZM186.751%2021.775C186.751%2020.8478%20187.452%2020.0793%20188.342%2020.0793C189.23%2020.0793%20189.921%2020.8385%20189.921%2021.7569C189.921%2022.6846%20189.22%2023.4526%20188.332%2023.4526C187.444%2023.4526%20186.751%2022.6932%20186.751%2021.775ZM151.36%2012.3135V4.9244H156.648C159.337%204.9244%20160.934%206.2121%20160.934%208.57187C160.934%2010.867%20159.277%2012.3135%20156.679%2012.3135H151.36ZM159.692%2015.0823C162.586%2014.2016%20164.626%2012.0321%20164.626%208.41529C164.626%206.43127%20164.004%204.79723%20162.913%203.6014C161.582%202.21991%20159.542%201.40306%20156.945%201.40306H147.725V23.4158H151.36V15.7434H155.851L160.99%2023.4158H165.277L159.692%2015.0823ZM105.299%2012.4711C105.299%2016.7781%20102.461%2019.8896%2098.1221%2019.8896H94.0439V4.9244H98.1221C102.461%204.9244%20105.299%208.1%20105.299%2012.4075V12.4711ZM98.1221%201.40306H90.4052V23.4158H98.1221C104.62%2023.4158%20109.115%2018.604%20109.115%2012.4075C109.115%206.14909%20104.62%201.40306%2098.1221%201.40306ZM79.4093%2012.3915V23.4158H83.0453V1.40306H79.4093V12.3915ZM44.2722%2012.0246V23.4158H47.9065V1.40306H44.2722V12.0246ZM25.0175%2012.3135V4.9244H30.3084C32.996%204.9244%2034.5916%206.2121%2034.5916%208.57187C34.5916%2010.867%2032.9373%2012.3135%2030.3371%2012.3135H25.0175ZM33.351%2015.0823C36.2451%2014.2016%2038.2857%2012.0321%2038.2857%208.41529C38.2857%206.43127%2037.6644%204.79723%2036.5719%203.6014C35.2423%202.21991%2033.2018%201.40306%2030.6049%201.40306H21.3849V23.4158H25.0175V15.7434H29.5103L34.6509%2023.4158H38.9361L33.351%2015.0823ZM0.969482%2023.4158H4.60254V14.4522H16.359V10.9338H4.60254V4.9244H16.3646V1.40306H0.969482V23.4158ZM174.298%2019.9561V14.0421H185.997V10.5833H174.298V4.85948H185.997V1.40306H170.664V23.4158H186.002V19.9561H174.298ZM64.0979%2014.1057H69.3824V18.2267C68.1161%2019.2327%2066.3419%2019.8914%2064.3926%2019.8914C60.1678%2019.8914%2057.3605%2016.5598%2057.3605%2012.0321C57.3605%207.7529%2060.2547%204.20078%2064.0658%204.20078C66.697%204.20078%2068.2605%205.11279%2069.8567%206.55844L72.1616%203.63164C70.0378%201.71514%2067.8157%200.646822%2064.215%200.646822C57.9797%200.646822%2053.5473%205.86821%2053.5473%2012.0321C53.5473%2018.508%2057.8041%2023.4158%2064.2719%2023.4158C67.9364%2023.4158%2070.8605%2021.8424%2072.901%2019.9855V10.7377H64.0979V14.1057ZM136.715%2012.3915V23.4158H140.35V1.40306H136.715V12.3915Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M116.09%2019.8828L121.504%208.2977L126.96%2019.8828H116.09Z'%20fill='%23ED114C'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_699'%3e%3crect%20width='190'%20height='24'%20fill='white'%20transform='translate(0.446045)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",kh="data:image/svg+xml,%3csvg%20width='197'%20height='18'%20viewBox='0%200%20197%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2176%206.82621L22.529%201.22314H16.5098L12.2064%206.67151C11.7989%207.13951%2011.0096%207.47882%2010.4092%207.47882H9.40262V1.22314H1.12445V16.224H9.37546V11.622H10.6836C11.2827%2011.622%2011.5815%2011.7793%2011.9089%2012.3526L14.2236%2016.224H24.1903L19.5608%208.70343C19.1791%208.07942%2018.144%207.55682%2017.0559%207.55682C16.7842%207.55682%2016.5098%207.58412%2017.2176%206.82621Z'%20fill='%23242424'/%3e%3cpath%20d='M26.857%2016.2085H34.6475V7.50488H26.857V16.2085Z'%20fill='%23242424'/%3e%3cpath%20d='M30.8807%206.77201C33.0351%206.62641%2034.7114%205.5539%2034.6258%204.37608C34.5375%203.19957%2032.7213%202.36106%2030.5683%202.50666C28.4138%202.65226%2026.7375%203.72478%2026.8245%204.89999C26.9114%206.0778%2028.7276%206.91501%2030.8807%206.77201Z'%20fill='%23242424'/%3e%3cpath%20d='M37.6958%207.45174H40.3107V4.5332H47.6625V7.45174H50.7135V10.3183H47.7725V12.0382C47.7725%2013.7581%2049.8414%2013.6528%2050.7665%2012.8741V15.322C47.9355%2016.5206%2043.2789%2016.8339%2041.4002%2015.608C40.4194%2014.958%2040.3107%2014.4354%2040.3107%2013.6528V10.3703H37.6958'%20fill='%23242424'/%3e%3cpath%20d='M68.658%207.9481C64.6276%206.01888%2059.1396%206.35818%2056.4323%207.7661C52.0881%2010.0203%2052.1547%2013.6994%2056.3766%2015.7911C59.4262%2017.3043%2066.6693%2016.8857%2068.6309%2015.1658V12.7439C65.7456%2014.1505%2063.7378%2013.9464%2062.5316%2013.5512C60.6529%2012.9376%2060.6081%2010.3999%2063.0206%209.95402C64.5719%209.66802%2066.5348%209.69402%2068.658%2010.7626'%20fill='%23242424'/%3e%3cpath%20d='M71.2731%202.47656V16.2099H78.5976V11.9862C78.7063%209.32764%2082.1934%209.82295%2082.1934%2011.7795V16.2099H89.4894V10.7902C89.4894%208.23433%2084.6983%205.3678%2078.6533%208.28503L78.7606%202.47656'%20fill='%23242424'/%3e%3cpath%20d='M113.071%207.47901V16.2086H120.915V11.5182C120.915%209.90094%20124.454%209.12093%20124.454%2011.5702V16.1566H131.372V10.8408C131.372%208.34742%20127.651%205.12858%20120.915%208.44362V7.47901'%20fill='%23242424'/%3e%3cpath%20d='M159.285%2016.1994H167.072V7.49707H159.285V16.1994Z'%20fill='%23242424'/%3e%3cpath%20d='M163.31%206.76292C165.463%206.61862%20167.138%205.54741%20167.052%204.36699C166.967%203.19048%20165.149%202.35327%20162.995%202.49887C160.841%202.64317%20159.167%203.71569%20159.253%204.8922C159.338%206.07131%20161.154%206.90852%20163.31%206.76292Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M192.259%205.01547V4.03396H192.943C193.291%204.03396%20193.663%204.10806%20193.663%204.49937C193.663%204.98557%20193.284%205.01547%20192.861%205.01547H192.259ZM192.867%207.95871C194.431%207.95871%20195.768%206.79519%20195.768%205.20527C195.768%203.62836%20194.431%202.46484%20192.867%202.46484C191.286%202.46484%20189.952%203.62836%20189.952%205.20527C189.952%206.79519%20191.286%207.95871%20192.867%207.95871ZM190.528%205.20527C190.528%203.90396%20191.554%202.92245%20192.867%202.92245C194.166%202.92245%20195.192%203.90396%20195.192%205.20527C195.192%206.52739%20194.166%207.5011%20192.867%207.5011C191.554%207.5011%20190.528%206.52739%20190.528%205.20527ZM192.259%205.42238H192.836L193.711%206.79519H194.272L193.329%205.40158C193.815%205.34308%20194.188%205.09477%20194.188%204.52927C194.188%203.90396%20193.802%203.62836%20193.018%203.62836H191.759V6.79519H192.259'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.473%2010.6355H103.389C103.436%209.74884%20102.65%209.30554%20101.815%209.30554C101.119%209.30554%20100.473%209.88014%20100.473%2010.6355ZM110.405%2012.8741C105.449%2012.5088%20100.165%2012.8208%20100.165%2012.8208C101.689%2015.218%20107.9%2014.854%20109.967%2013.2901L109.75%2015.322C105.611%2017.6685%2092.9763%2017.5645%2092.7576%2012.0915C92.5647%207.25931%20100.056%206.56641%20101.689%206.56641C105.555%206.56641%20111.22%208.28633%20110.405%2012.8741Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.468%2010.2156L142.754%206.14911L144.606%2010.2156H140.468ZM133.088%2016.1709H137.335L139.161%2012.8221H145.805L147.386%2016.1709H157.459L149.617%201.25195H139.594C140.577%201.61726%20140.848%202.24126%20140.577%202.76127'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.031%2010.6563C179.721%209.72548%20177.203%209.95819%20177.203%2011.448C177.203%2013.5878%20180.193%2013.2147%20181.031%2012.5634V10.6563ZM188.395%202.5V16.1567H181.044V15.218C177.395%2017.9286%20169.223%2016.4687%20169.223%2012.0915C169.223%206.72115%20178.1%205.99314%20181.095%207.86906V2.5'%20fill='%23242424'/%3e%3c/svg%3e",Hh="data:image/svg+xml,%3csvg%20width='197'%20height='26'%20viewBox='0%200%20197%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M193.375%207.13851V7.56954H192.736V9.81922H192.298V7.56954H191.672V7.13851H193.375ZM193.824%207.02196C193.837%207.03955%20193.86%207.07913%20193.903%207.13851C193.943%207.20008%20193.994%207.27265%20194.054%207.35842C194.115%207.44638%20194.181%207.54314%20194.256%207.6465C194.33%207.75206%20194.407%207.85982%20194.484%207.96757C194.56%208.07753%20194.635%208.18308%20194.709%208.28864C194.784%208.39419%20194.85%208.48876%20194.909%208.57453C194.969%208.6603%20195.02%208.73286%20195.06%208.79004C195.101%208.84722%20195.126%208.8846%20195.137%208.89779C195.141%208.8912%20195.165%208.85821%20195.201%208.80543C195.237%208.75046%20195.286%208.68008%20195.344%208.59652C195.403%208.51295%20195.469%208.41839%20195.541%208.31063C195.616%208.20508%20195.693%208.09511%20195.769%207.98516C195.848%207.8752%20195.925%207.76525%20195.999%207.65749C196.074%207.54974%20196.142%207.45078%20196.206%207.36282C196.267%207.27486%20196.32%207.20008%20196.365%207.13851L196.446%207.01976V9.81922H195.98V8.45138C195.98%208.43159%20195.984%208.41179%20195.988%208.3898C195.993%208.36781%20195.995%208.35462%20195.995%208.35022L195.137%209.6257C195.124%209.6125%20195.097%209.57072%20195.052%209.50475C195.005%209.43878%20194.95%209.35961%20194.884%209.26944C194.822%209.17928%20194.754%209.08032%20194.684%208.97696C194.611%208.8736%20194.545%208.77684%20194.484%208.68667C194.42%208.59651%20194.367%208.52175%20194.322%208.45797C194.279%208.3964%20194.254%208.35901%20194.252%208.34802C194.252%208.35241%20194.252%208.36561%20194.258%208.3876C194.262%208.40959%20194.264%208.43159%20194.264%208.44918V9.81702H193.826V7.01756L193.824%207.02196ZM186.838%2013.87L183.252%2017.4633L179.74%2013.848V20.2804H176.92V7.09892H177.542L183.256%2012.8584L189.056%207.09892H189.659V20.2804H186.838V13.8678V13.87ZM58.3087%2013.87L54.7245%2017.4633L51.2126%2013.848V20.2804H48.3925V7.09892H49.014L54.7287%2012.8584L60.5286%207.09892H61.1288V20.2804H58.3087V13.8678V13.87ZM67.1671%2013.793C67.1671%2010.0721%2069.6999%207.02196%2073.8673%207.02196C78.0347%207.02196%2080.6101%2010.0721%2080.6101%2013.793C80.6101%2017.5139%2078.0773%2020.5641%2073.8673%2020.5641C69.6573%2020.5641%2067.1671%2017.5139%2067.1671%2013.793ZM77.4664%2013.793C77.4664%2011.5433%2075.8957%2010.0501%2073.8652%2010.0501C71.8347%2010.0501%2070.3065%2011.5433%2070.3065%2013.793C70.3065%2016.0427%2071.8772%2017.5359%2073.8652%2017.5359C75.8531%2017.5359%2077.4664%2016.0427%2077.4664%2013.793ZM98.28%2020.2826H97.7841L89.6621%2013.5247V20.2826H86.842V7.10113H87.3379L95.4599%2013.9799V7.12311H98.28V20.2826ZM104.514%2013.793C104.514%2010.0721%20107.049%207.02196%20111.214%207.02196C115.38%207.02196%20117.955%2010.0721%20117.955%2013.793C117.955%2017.5139%20115.422%2020.5641%20111.214%2020.5641C107.006%2020.5641%20104.514%2017.5139%20104.514%2013.793ZM114.816%2013.793C114.816%2011.5433%20113.245%2010.0501%20111.214%2010.0501C109.184%2010.0501%20107.656%2011.5433%20107.656%2013.793C107.656%2016.0427%20109.226%2017.5359%20111.214%2017.5359C113.202%2017.5359%20114.816%2016.0427%20114.816%2013.793ZM130.232%2012.5593H135.97V14.0085C135.97%2017.7954%20133.98%2020.5641%20129.961%2020.5641C125.943%2020.5641%20123.436%2017.5139%20123.436%2013.793C123.436%2010.0721%20125.775%207.02196%20129.961%207.02196C133.29%207.02196%20134.584%208.82742%20134.584%208.82742L132.843%2011.1277C132.843%2011.1277%20131.7%2010.0281%20129.921%2010.0281C127.89%2010.0281%20126.383%2011.5433%20126.383%2013.793C126.383%2016.0427%20127.89%2017.5579%20129.921%2017.5579C131.721%2017.5579%20132.664%2016.4319%20132.705%2015.1565V15.0267H130.234V12.5615L130.232%2012.5593ZM142.131%207.12311H147.861C151.043%207.12311%20152.805%208.99015%20152.805%2011.8226C152.805%2013.6391%20152.009%2014.9366%20150.711%2015.6952L150.577%2015.781L153.538%2020.0649V20.2804H150.277L147.806%2016.4935H144.896V20.2804H142.055L142.127%207.12091L142.131%207.12311ZM147.661%2010.0061H144.898V13.8986H147.682C149.085%2013.8986%20149.86%2013.2498%20149.86%2011.9524C149.86%2010.6549%20149.064%2010.0061%20147.661%2010.0061ZM164.552%207.10113H165.054L171.65%2020.2826H168.215L167.413%2018.5761H162.155L161.391%2020.2826H157.979L164.554%207.10113H164.552ZM164.782%2012.6143L163.056%2016.3704H166.491L164.782%2012.6143ZM4.175%200.635742L1.20588%207.51456H7.11645L14.1721%2023.8891L18.2267%2014.4791L12.2608%200.637943H4.17287L4.175%200.635742ZM25.2355%200.686331L21.1937%2010.0589L27.7896%2025.3647H35.8796L25.2355%200.686331ZM4.14094%2016.7948L0.446045%2025.3647H7.83585L4.14094%2016.7948Z'%20fill='%23242424'/%3e%3c/svg%3e",Vh="/assets/13-_M_Krupi.svg",zh="data:image/svg+xml,%3csvg%20width='121'%20height='22'%20viewBox='0%200%20121%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M107.367%209.97166V12.1049H110.751V9.97166C110.751%209.05838%20109.987%208.29571%20109.073%208.29571C108.128%208.29571%20107.367%209.05838%20107.367%209.97166ZM116.359%206.95413C111.755%204.66888%20106.94%204.51551%20102.215%206.5272C98.3145%208.17275%2096.4866%2012.6852%2098.1612%2016.587C99.015%2018.5987%20100.446%2019.9997%20102.49%2020.7624C107.154%2022.5295%20111.755%2022.4079%20116.297%2020.3354C118.278%2019.4512%20119.651%2017.988%20120.382%2015.9459H114.408C113.737%2018.0806%20111.451%2019.2978%20109.289%2018.6291C109.105%2018.5683%20108.95%2018.5061%20108.739%2018.4149C107.884%2018.0184%20107.367%2017.1963%20107.367%2016.2513V14.7273H120.534C120.929%2011.4652%20119.314%208.44631%20116.359%206.95413ZM69.6909%209.97166C69.6909%209.05838%2068.9614%208.29571%2068.0177%208.29571C67.1017%208.29571%2066.3418%209.05838%2066.3418%209.97166V12.1049H69.6909V9.97166ZM79.4771%2014.7273C79.8736%2011.4652%2078.2571%208.44631%2075.3018%206.95413C70.7285%204.66888%2065.883%204.51551%2061.1592%206.5272C57.256%208.17275%2055.4599%2012.6852%2057.1026%2016.587C57.9565%2018.5987%2059.4197%2019.9997%2061.4618%2020.7624C66.0958%2022.5295%2070.7285%2022.4079%2075.2714%2020.3354C77.2209%2019.4512%2078.5942%2017.988%2079.3251%2015.9459H73.3495C72.7098%2018.0806%2070.4245%2019.2978%2068.2581%2018.6291C68.0771%2018.5683%2067.8933%2018.5061%2067.7123%2018.4149C66.8571%2018.0184%2066.3418%2017.1963%2066.3418%2016.2513V14.7273H79.4771ZM82.8884%2017.8968V4.21155H80.5133V0.85828H94.1696V17.8968H96.5764V21.2501H80.5133V17.8968H82.8884ZM46.2829%205.52136L51.1919%202.96115L49.6362%200.00441933L44.7286%202.53422L46.2829%205.52136ZM53.1428%2017.8968V5.91789H39.9439V9.27116H42.3494V17.8968H39.9439V21.2501H55.5483V17.8968H53.1428ZM20.0081%208.81383L25.771%200.85828H37.7803V4.21155H35.372V17.8968H37.7803V21.2501H22.1731V17.8968H24.5814V9.02661L15.7112%2021.2501L6.81057%209.02661V17.8968H9.21878V21.2501H0.59314V17.8968H2.96958V4.21155H0.59314V0.85828H14.2176L20.0081%208.81383Z'%20fill='%23242424'/%3e%3c/svg%3e",Ph="/assets/15-VL89vzXY.svg",Nh="/assets/16-D9KRuHZe.svg",Bh="/assets/17-BRD6G3-l.svg",$h="/assets/18-D69HL7ID.svg",Uh="/assets/19-Dos04ydj.svg",_h="/assets/21-BwEZSGFZ.svg",Ih="/assets/22-CQ_f5juP.svg",Gh="data:image/svg+xml,%3csvg%20width='160'%20height='26'%20viewBox='0%200%20160%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.01%2019.347L131.698%201.45459H137.34V24.006H129.228L123.598%205.49849H123.477L123.789%2024.006H118.183V1.45459H126.647L131.884%2019.347H132.01Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4529%203.56613L26.3316%2024.2433H20.1786L24.4041%201.45459H34.5405L38.7466%2024.2433H32.6178L29.5813%203.56613H29.4529Z'%20fill='%23242424'/%3e%3cpath%20d='M53.0771%2024.2433L49.2656%203.75501H49.1421L48.9993%2024.2433H43.2918L43.7955%201.45459H53.094L55.9078%2018.8748H56.0289L58.8451%201.45459H68.1388L68.6328%2024.2433H62.9374L62.7873%203.75501H62.6686L58.8596%2024.2433H53.0771Z'%20fill='%23242424'/%3e%3cpath%20d='M10.5821%2017.8141C10.8048%2018.3662%2010.737%2019.0757%2010.6329%2019.5043C10.4416%2020.2622%209.92826%2021.0347%208.4124%2021.0347C6.98372%2021.0347%206.11683%2020.2162%206.11683%2018.9643V16.7583H0.00497197L0.00012207%2018.5236C0.00012207%2023.6039%204.00044%2025.1367%208.28648%2025.1367C12.4079%2025.1367%2015.8028%2023.7274%2016.3428%2019.9305C16.6188%2017.9618%2016.413%2016.6736%2016.3186%2016.1869C15.3572%2011.4165%206.70767%209.99269%206.06355%207.3242C5.95458%206.86654%205.98606%206.38224%206.03933%206.12314C6.19673%205.39669%206.69556%204.59517%208.12182%204.59517C9.45364%204.59517%2010.2406%205.41848%2010.2406%206.66313C10.2406%207.08205%2010.2406%208.07002%2010.2406%208.07002H15.9239V6.46941C15.9239%201.50535%2011.4683%200.730469%208.24047%200.730469C4.18689%200.730469%200.874285%202.06956%200.268911%205.77929C0.10425%206.80358%200.0800345%207.71648%200.319761%208.85943C1.315%2013.516%209.41006%2014.8647%2010.5821%2017.8141Z'%20fill='%23242424'/%3e%3cpath%20d='M84.685%2017.773C84.9102%2018.3203%2084.8375%2019.0104%2084.7358%2019.439C84.5494%2020.1945%2084.0408%2020.9549%2082.5347%2020.9549C81.1254%2020.9549%2080.2657%2020.1364%2080.2657%2018.9135L80.2609%2016.7269H74.212L74.2047%2018.468C74.2047%2023.4974%2078.1687%2025.0157%2082.4112%2025.0157C86.489%2025.0157%2089.8524%2023.6258%2090.3827%2019.8628C90.6588%2017.9086%2090.4626%2016.6373%2090.3633%2016.1603C89.4069%2011.4335%2080.8444%2010.0242%2080.2076%207.38237C80.0986%206.92713%2080.1301%206.44768%2080.1858%206.20311C80.348%205.47181%2080.8372%204.68967%2082.2489%204.68967C83.5686%204.68967%2084.3387%205.49361%2084.3387%206.72857C84.3387%207.14265%2084.3387%208.12093%2084.3387%208.12093H89.9783V6.53727C89.9783%201.62648%2085.5591%200.856445%2082.3627%200.856445C78.3552%200.856445%2075.0692%202.17858%2074.4759%205.86168C74.3113%206.87144%2074.2943%207.76739%2074.5292%208.90549C75.5099%2013.5136%2083.5251%2014.8527%2084.685%2017.773Z'%20fill='%23242424'/%3e%3cpath%20d='M103.827%2020.8337C105.408%2020.8337%20105.902%2019.7392%20106.011%2019.1799C106.057%2018.9329%20106.069%2018.6035%20106.064%2018.3081V1.44482H111.827V17.7923C111.839%2018.2113%20111.798%2019.0733%20111.779%2019.2888C111.374%2023.5434%20108.011%2024.9236%20103.824%2024.9236C99.6326%2024.9236%2096.2667%2023.5434%2095.8671%2019.2888C95.8478%2019.0733%2095.8066%2018.2113%2095.8187%2017.7923V1.44482H101.577V18.3081C101.577%2018.6035%20101.587%2018.9353%20101.63%2019.1799C101.754%2019.7392%20102.233%2020.8337%20103.827%2020.8337Z'%20fill='%23242424'/%3e%3cpath%20d='M151.365%2020.5938C153.017%2020.5938%20153.593%2019.5502%20153.7%2018.9424C153.741%2018.6809%20153.753%2018.3636%20153.751%2018.0755V14.7677H151.411V11.4406H159.492V17.5573C159.487%2017.9835%20159.477%2018.2983%20159.41%2019.0586C159.029%2023.2042%20155.433%2024.6837%20151.394%2024.6837C147.348%2024.6837%20143.757%2023.2042%20143.372%2019.0586C143.307%2018.2983%20143.297%2017.9835%20143.29%2017.5573L143.295%207.96089C143.295%207.5565%20143.345%206.83974%20143.389%206.45957C143.895%202.20016%20147.348%200.82959%20151.394%200.82959C155.436%200.82959%20158.974%202.19289%20159.393%206.45957C159.468%207.18601%20159.443%207.96089%20159.443%207.96089V8.72124H153.697V7.44511C153.702%207.44754%20153.69%206.9027%20153.622%206.57822C153.525%206.07455%20153.087%204.91707%20151.351%204.91707C149.69%204.91707%20149.203%206.01159%20149.082%206.57822C149.012%206.87848%20148.985%207.2853%20148.985%207.65336V18.0755C148.98%2018.3636%20148.997%2018.6809%20149.043%2018.9424C149.142%2019.5526%20149.716%2020.5938%20151.365%2020.5938Z'%20fill='%23242424'/%3e%3c/svg%3e",qh="/assets/24-Dmws8xhr.svg",Yh="/assets/25-BaRLqQy_.svg",Fh="/assets/26-B2H6SqHt.svg",Zh="/assets/27-DBraEacE.svg",Xh="data:image/svg+xml,%3csvg%20width='112'%20height='33'%20viewBox='0%200%20112%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_720)'%3e%3cpath%20d='M77.422%2013.2852C76.096%2013.3501%2073.7527%2014.0702%2073.2182%2016.3711L71.3498%2027.2529C70.9268%2029.6026%2072.0997%2032.2635%2074.6194%2032.2878H88.6321C90.433%2032.2608%2092.5012%2031.6842%2092.9916%2028.8771L95.0157%2017.508C95.3946%2015.2206%2093.8791%2013.3501%2091.7461%2013.2852H77.422Z'%20fill='%23242424'/%3e%3cpath%20d='M79.1346%2018.6451C78.1641%2018.5991%2077.8891%2018.9591%2077.7334%2019.4572L76.6435%2025.3041C76.5786%2026.1487%2077.0613%2027.0122%2077.8891%2027.0907H86.7638C87.6071%2027.0122%2088.2974%2026.4383%2088.4765%2025.629L89.4106%2020.2692C89.6753%2019.3191%2089.1927%2018.6018%2088.3208%2018.6451H79.1346Z'%20fill='white'/%3e%3cpath%20d='M70.5738%2018.6455H57.8067C56.8673%2018.5995%2056.5896%2018.9595%2056.4054%2019.4576L55.4712%2025.3046C55.2818%2026.1491%2055.7644%2027.0126%2056.7168%2027.0911H69.0168L68.0826%2032.2885H53.2915C50.8029%2032.2614%2049.63%2029.6005%2050.0218%2027.2536L52.0459%2016.3717C52.4559%2014.0681%2054.7991%2013.3507%2056.094%2013.2858H71.508L70.5738%2018.6455ZM43.48%2018.6455H31.0242L31.9584%2013.2858H45.9711C48.5245%2013.3507%2049.6949%2016.0117%2049.2407%2018.3207L47.3724%2029.2025C46.8716%2031.544%2044.5283%2032.2614%2043.1686%2032.2885H29.9344C27.3628%2032.2614%2026.1924%2029.6005%2026.6647%2027.2536L27.2875%2023.1932C27.778%2020.83%2030.1212%2020.11%2031.4913%2020.1072H43.1686C44.0457%2020.11%2044.7359%2018.6022%2043.48%2018.6455ZM25.7305%2018.6455H28.5331L29.4673%2013.2858H26.6647L28.8445%200.29248H23.8622L21.6824%2013.2858H7.51402C6.13351%2013.3507%203.79028%2014.0708%203.31021%2016.3717L1.44185%2027.2536C0.964382%2029.6032%202.1347%2032.2641%204.71148%2032.2885H20.9039C22.0561%2032.2614%2023.5015%2031.184%2023.7065%2029.5274L25.7305%2018.6455Z'%20fill='%23242424'/%3e%3cpath%20d='M7.98386%2027.0908C7.10158%2027.0123%206.61892%2026.1488%206.73829%2025.3042L7.82557%2019.4572C7.92677%2018.9592%208.20184%2018.6018%209.07115%2018.6452H20.7484L19.1914%2027.0908H7.98386Z'%20fill='white'/%3e%3cpath%20d='M103.268%2014.9093L104.513%2013.7724C105.115%2013.3501%20105.803%2013.3501%20106.537%2013.2852H111.052L110.118%2018.6449H105.136C103.875%2018.5989%20102.152%2019.2485%20101.866%2021.0811L99.8423%2032.2878H94.7043L98.1296%2013.2852H102.645L103.268%2014.9093Z'%20fill='%23242424'/%3e%3cpath%20d='M32.4256%2027.0908C31.6368%2027.0123%2031.4993%2025.3583%2032.737%2025.3042H43.013L42.7016%2027.0908H32.4256Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_720'%3e%3crect%20width='109.714'%20height='32'%20fill='white'%20transform='translate(1.33813%200.290039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Kh="/assets/29-yivH26vR.svg",Wh="/assets/30-DGc1459t.svg",Qh="data:image/svg+xml,%3csvg%20width='121'%20height='36'%20viewBox='0%200%20121%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.45829%2023.2381H3.99829L2.66629%2018.1861H9.61429L21.9503%200.810059H31.3103L28.9703%2018.1261L41.9903%2018.1859L42.5663%2018.8819C45.6863%2016.7461%2049.8983%2016.7461%2051.4101%2019.4461C53.4981%2017.1899%2058.1781%2017.0579%2059.7621%2019.9499C60.3621%2021.0657%2060.2661%2022.5421%2059.7621%2024.3181L57.8663%2030.3901C57.9863%2031.0141%2058.6823%2032.4061%2056.9783%2032.4061H50.3423L52.4903%2025.7101C53.0543%2023.7419%2050.6543%2023.7419%2050.0903%2025.6499L48.0023%2032.3462H41.1743L43.2623%2025.5181C43.8863%2023.5621%2041.3543%2023.5621%2040.8503%2025.5779L38.7623%2032.2859H31.6223L33.8303%2025.1339C33.9623%2024.6301%2033.9023%2024.1859%2032.9543%2024.1859H28.1423L27.0743%2032.2501L16.7663%2032.2859L18.1583%2024.1859H12.1463L4.87429%2035.1897L0.446289%2031.7101L6.45829%2023.2381ZM16.0103%2018.1741L19.2023%2018.2102L20.3063%2011.8022L16.0103%2018.1741ZM107.222%2032.5262C105.578%2033.0301%20102.794%2033.3541%20101.222%2031.9621C99.6383%2030.5701%2099.5785%2027.1499%20100.526%2024.6899C101.786%2021.3419%20104.066%2018.2459%20107.474%2017.7421C109.694%2017.4301%20112.406%2018.3061%20113.99%2019.6981L114.302%2018.6899H120.446L116.642%2030.9539C116.894%2031.5779%20117.47%2032.4659%20116.138%2032.4659H109.694L110.042%2031.2661C109.214%2031.7342%20108.242%2032.2739%20107.222%2032.5262ZM107.042%2026.6821C107.198%2026.9341%20107.582%2027.2579%20108.278%2027.0059C109.514%2026.5859%20111.662%2024.5701%20112.01%2023.1419C111.122%2021.8817%20109.862%2021.5937%20108.53%2022.7341C107.774%2023.3941%20106.514%2025.7701%20107.042%2026.6821ZM62.1505%2031.9621C60.5665%2030.5701%2060.5063%2027.2222%2061.4545%2024.6899C62.6543%2021.3419%2064.9941%2018.2459%2068.4145%2017.7541C70.6225%2017.4421%2073.3465%2018.3061%2074.9305%2019.6981L75.2423%2018.6899H81.3745L77.5825%2030.9539C77.8345%2031.5899%2078.3985%2032.4659%2077.0786%2032.4659H70.6226L70.9706%2031.3379C70.1546%2031.8061%2069.1346%2032.2859%2068.1626%2032.5377C66.5183%2032.9819%2063.7345%2033.3541%2062.1505%2031.9621ZM68.2465%2026.6821C68.3783%2026.9702%2068.8223%2027.2579%2069.4825%2027.0059C70.7185%2026.5619%2072.8663%2024.5701%2073.2143%2023.1419C72.3263%2021.8817%2071.0903%2021.5339%2069.7345%2022.7341C69.0385%2023.3699%2067.8025%2025.6741%2068.2465%2026.6821ZM86.6181%2032.3342L88.7063%2025.6382C89.2821%2023.7421%2091.5503%2023.6822%2090.9863%2025.6382L89.0901%2032.4061H95.5943C97.3101%2032.4061%2096.6141%2031.0141%2096.4823%2030.3781L98.3781%2024.3061C98.882%2022.5421%2098.9181%2021.4021%2098.2583%2020.2019C96.77%2017.5499%2092.4981%2017.4659%2090.0383%2019.6261L89.5943%2018.7501H83.966L79.7901%2032.3341H86.6181V32.3342Z'%20fill='%23242424'/%3e%3c/svg%3e",XR=[{id:1,imageUrl:Th},{id:2,imageUrl:Nc},{id:3,imageUrl:Eh},{id:4,imageUrl:Ah},{id:5,imageUrl:Mh},{id:6,imageUrl:jh},{id:7,imageUrl:Lh},{id:8,imageUrl:Oh},{id:9,imageUrl:Rh},{id:10,imageUrl:Dh},{id:11,imageUrl:kh},{id:12,imageUrl:Hh},{id:13,imageUrl:Vh},{id:14,imageUrl:zh},{id:15,imageUrl:Ph},{id:16,imageUrl:Nh},{id:17,imageUrl:Bh},{id:18,imageUrl:$h},{id:19,imageUrl:Uh},{id:20,imageUrl:Nc},{id:21,imageUrl:_h},{id:22,imageUrl:Ih},{id:23,imageUrl:Gh},{id:24,imageUrl:qh},{id:25,imageUrl:Yh},{id:26,imageUrl:Fh},{id:27,imageUrl:Zh},{id:28,imageUrl:Xh},{id:29,imageUrl:Kh},{id:30,imageUrl:Wh},{id:31,imageUrl:Qh}],KR=C.div`
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
`,WR=C.img`
  height: 32px;
  max-width: min-content;
  /* width: auto; */
  object-fit: contain;
  filter: brightness(1) invert(1);
  transition: all 0.3s ease;
  overflow: visible;
`,QR=C(Wt)`
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
`,JR=()=>x.jsx(KR,{children:x.jsx(QR,{direction:"vertical",slidesPerView:10,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:4e3,modules:[pn],grabCursor:!1,allowTouchMove:!1,children:XR.map(t=>x.jsx(Qt,{children:x.jsx(WR,{src:t.imageUrl,alt:`Partner ${t.id}`,onError:e=>{e.target.style.display="none"}})},t.id))})}),eD=()=>{const t=Ue({query:"(min-width: 1440px)"});return x.jsxs(Pj,{children:[x.jsx(Nj,{src:ZR,alt:"Hero Image"}),t&&x.jsx(JR,{}),x.jsxs(Bj,{children:[x.jsxs($j,{children:[x.jsx(Uj,{children:"Your Local Appliance Repair & Maintenance Specialists"}),x.jsx(_j,{children:"We provide reliable appliance repair services, so your fridge, oven, or washer works like new — and you can get back to your day."})]}),x.jsxs(Ij,{children:[x.jsx(sv,{to:"/contact#ap",children:"Contact Us"}),x.jsx(w6,{children:x.jsx("a",{href:"tel:+18055002705",children:" Call Us"})})]})]})]})},tD="/assets/News%20Article%202%20Image%20Container-Dg9jwMew.png",nD="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",iD="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",aD="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",D4=[{img:tD,title:"APPLIANCE INSTALLATION SERVICES",description:"Professional installation for appliances, ensuring safety."},{img:nD,title:"WHEN YOUR REFRIGERATOR STOPS COOLING: URGENT REPAIR SIGNS",description:"Don't wait for food to spoil. Know the signs needing urgent help."},{img:iD,title:"WASHING MACHINE TROUBLESHOOTING",description:"Quick solutions for common washing machine issues."},{img:aD,title:"DISHWASHER MAINTENANCE TIPS",description:"Keep your dishwasher running smoothly with these tips."}],rD=()=>{const t=R.useRef(null),e=Ue({query:"(max-width: 767px)"}),i=Ue({query:"(min-width: 768px)"}),r=Ue({query:"(min-width: 1440px)"}),o=e?1:2,l=D4.length>o;return x.jsxs(lD,{children:[x.jsxs(cD,{children:[x.jsx(uD,{children:"NEWS & TIPS"}),x.jsxs(dD,{children:["APPLIANCE ",x.jsx("span",{children:"ADVICE"})," REPAIR ",x.jsx("span",{children:"TIPS"})," BLOG"]})]}),x.jsxs(oD,{children:[x.jsx(k4,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slidePrev()},bg:"#DBDBD8",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(k4,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slideNext()},bg:"#3098EE",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),x.jsx(sD,{$isTablet:i,children:x.jsx(Wt,{modules:[dv,pn],onSwiper:u=>t.current=u,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:D4.map((u,d)=>x.jsx(Qt,{children:x.jsxs(fD,{$isTablet:i,children:[x.jsx(pD,{src:u.img,alt:u.title,$isTablet:i}),x.jsxs(hD,{children:[x.jsx(mD,{$isTablet:i,children:u.title}),x.jsx(gD,{$isTablet:i,children:u.description})]})]})},d))})})]})},sD=C.div`
  width: 100%;
  padding: 20px 0;
  
  .swiper-slide {
    width: ${t=>t.$isTablet?"50%":"auto"};
  }
`,oD=C.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,k4=C.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${t=>t.bg};
  border: none;
  cursor: pointer;
`,lD=C.div`
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
`,cD=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,uD=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);
  
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,dD=C.p`
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
`,fD=C.div`
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
`,pD=C.img`
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
`,hD=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,mD=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,gD=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,xD=C.div`
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
`,yD=C(Sn.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,vD=C(Sn.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,wD=C.h3`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 90%;
text-transform: uppercase;
text-align: center;
color: var(--black-500);
`,Av="data:image/svg+xml,%3csvg%20width='212'%20height='14'%20viewBox='0%200%20212%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_572)'%3e%3cpath%20d='M0.00384521%2013.2272V0.640137H8.99637V3.40837H3.33527V5.99308H8.54597V8.76131H3.33527V13.2272H0.00384521Z'%20fill='%23242424'/%3e%3cpath%20d='M18.6412%2013.2272H15.3253V0.640137H18.6412V13.2272Z'%20fill='%23242424'/%3e%3cpath%20d='M25.0556%209.25083C26.3309%2010.122%2027.8304%2010.6204%2029.381%2010.6885C30.3595%2010.6885%2031.2758%2010.4591%2031.2758%209.61789C31.2758%209.02907%2030.8409%208.79966%2030.1964%208.61613L28.2628%208.08083C26.1117%207.44613%2024.9935%206.43671%2024.9935%204.44848C24.9935%202.0473%2027.1368%200.472008%2029.8858%200.472008C31.2634%200.447396%2032.6243%200.771251%2033.8385%201.4126V4.47142C32.6991%203.68452%2031.3471%203.2505%2029.9557%203.22495C28.9617%203.22495%2028.255%203.50789%2028.255%204.20377C28.255%204.71613%2028.6045%204.9226%2029.2723%205.12907L31.2059%205.7026C33.5356%206.42142%2034.5995%207.5073%2034.5995%209.39613C34.5995%2012.1032%2032.1223%2013.4949%2029.3732%2013.4949C27.8643%2013.4989%2026.378%2013.1337%2025.0478%2012.432L25.0556%209.25083Z'%20fill='%23242424'/%3e%3cpath%20d='M52.4525%200.640137V13.2272H49.1211V8.18778H44.2676V13.2272H40.8973V0.640137H44.2676V5.41955H49.1599V0.640137H52.4525Z'%20fill='%23242424'/%3e%3cpath%20d='M68.6747%200.640137V3.40837H62.9049V5.41955H68.2166V8.18778H62.9049V10.4819H68.7136V13.2501H59.5347V0.640137H68.6747Z'%20fill='%23242424'/%3e%3cpath%20d='M75.524%200.640137H80.9599C83.8098%200.640137%2085.9764%202.16955%2085.9764%204.98367C86.0132%205.85467%2085.761%206.71377%2085.2581%207.43116C84.7551%208.14856%2084.0287%208.68525%2083.1886%208.96014L86.5589%2013.2272H82.6761L79.6553%209.33484H78.8244V13.2272H75.524V0.640137ZM78.8554%206.55131H80.7657C81.9694%206.55131%2082.746%205.9319%2082.746%204.96837C82.746%204.00484%2081.9694%203.39308%2080.7657%203.39308H78.8709L78.8554%206.55131Z'%20fill='%23242424'/%3e%3cpath%20d='M106.485%2012.1795C105.502%2013.0123%20104.241%2013.4588%20102.944%2013.4337C100.242%2013.4337%2097.9897%2011.6901%2097.9897%208.84543C98.0077%208.02146%2098.2249%207.21358%2098.6233%206.48878C99.0217%205.76399%2099.5899%205.14316%20100.281%204.67778L99.007%203.14837V0.640137H107.549V3.40837H102.991L106.446%207.7519L107.223%206.56661H110.679L108.217%2010.0537L110.756%2013.2272H107.285L106.485%2012.1795ZM104.738%2010.0537L102.051%206.78837C101.716%207.01078%20101.442%207.31015%20101.251%207.66058C101.06%208.01101%20100.959%208.40194%20100.956%208.79955C100.953%209.05676%20101.003%209.31195%20101.102%209.54974C101.202%209.78752%20101.349%2010.003%20101.536%2010.1831C101.722%2010.3631%20101.944%2010.5042%20102.187%2010.5976C102.431%2010.691%20102.691%2010.7349%20102.952%2010.7266C103.28%2010.737%20103.607%2010.6828%20103.914%2010.5673C104.22%2010.4518%20104.501%2010.2771%20104.738%2010.0537Z'%20fill='%23242424'/%3e%3cpath%20d='M126.264%2013.2272H122.933V0.640137H128.369C131.219%200.640137%20133.385%202.16955%20133.385%204.98367C133.385%207.79778%20131.219%209.33484%20128.369%209.33484H126.264V13.2272ZM126.264%206.56661H128.136C129.347%206.56661%20130.116%205.9472%20130.116%204.98367C130.116%204.02014%20129.339%203.40837%20128.136%203.40837H126.241L126.264%206.56661Z'%20fill='%23242424'/%3e%3cpath%20d='M145.997%2010.9101H140.879L139.963%2013.2043H136.678L141.881%200.640137H145.049L150.252%2013.2272H146.897L145.997%2010.9101ZM141.982%208.1419H144.894L143.442%204.45602L141.982%208.1419Z'%20fill='%23242424'/%3e%3cpath%20d='M157.288%2013.2272V8.34837L152.457%200.640137H156.208L159.058%205.49602L161.908%200.640137H165.449L160.619%208.34837V13.2272H157.288Z'%20fill='%23242424'/%3e%3cpath%20d='M173.487%205.99308L177.571%200.640137H181.454L176.733%206.66602L181.64%2013.2272H177.688L173.487%207.59131V13.2272H170.155V0.640137H173.487V5.99308Z'%20fill='%23242424'/%3e%3cpath%20d='M195.751%200.640137V3.40837H189.934V5.41955H195.246V8.18778H189.934V10.4819H195.751V13.2501H186.603V0.640137H195.751Z'%20fill='%23242424'/%3e%3cpath%20d='M202.6%200.640137H205.931V10.459H211.678V13.2272H202.6V0.640137Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_572'%3e%3crect%20width='212'%20height='13'%20fill='white'%20transform='translate(0.00384521%200.433594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",bD=()=>{const t=Ue({query:"(max-width: 743px)"}),e=Ue({query:"(min-width: 744px) and (max-width: 1023px)"}),i=Ue({query:"(min-width: 1024px)"}),r=[{id:1,imageUrl:Th},{id:2,imageUrl:Nc},{id:3,imageUrl:Eh},{id:4,imageUrl:Ah},{id:5,imageUrl:Mh},{id:6,imageUrl:jh},{id:7,imageUrl:Lh},{id:8,imageUrl:Oh},{id:9,imageUrl:Rh},{id:10,imageUrl:Dh},{id:11,imageUrl:kh},{id:12,imageUrl:Hh},{id:13,imageUrl:Vh},{id:14,imageUrl:zh},{id:15,imageUrl:Ph},{id:16,imageUrl:Nh},{id:17,imageUrl:Bh},{id:18,imageUrl:$h},{id:19,imageUrl:Uh},{id:20,imageUrl:Av},{id:21,imageUrl:_h},{id:22,imageUrl:Ih},{id:23,imageUrl:Gh},{id:24,imageUrl:qh},{id:25,imageUrl:Yh},{id:26,imageUrl:Fh},{id:27,imageUrl:Zh},{id:28,imageUrl:Xh},{id:29,imageUrl:Kh},{id:30,imageUrl:Wh},{id:31,imageUrl:Qh}],o=t?2:e?4:5,l=r.length>o;return x.jsxs("div",{children:[x.jsx(wD,{children:"Quality Service for Major & Luxury Brands"}),x.jsxs(xD,{children:[x.jsx(yD,{}),x.jsx(Wt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[pn],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:r.map(u=>x.jsx(Qt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?x.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):x.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),x.jsx(Wt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[pn],className:"mySwiper",style:{width:"100%"},children:r.map(u=>x.jsx(Qt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?x.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):x.jsx(ic,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),x.jsx(vD,{})]})," "]})},Mv="/assets/ServicesImage-BRQYmF9y.png",SD=C.div`
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
`,CD=C.p`
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
`,TD=C.div`
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
`,ED=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,H4=C.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,AD=C.p`
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
`,MD=C.p`
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
`,V4=C.p`
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
`,jD=C.p`
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
`,LD=C.img`
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
`,z4=C.div`
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
`,P4=C.p`
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
`,mp=C.button`
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
`,N4=C.p`
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
`,OD=C.div`
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
`,RD=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,DD=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,kD=C.p`
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
`,HD=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,VD=C.button`
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
`,Jh=C.button`
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
`,jv=C.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Jh}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,zD=C(jv)`
  color: #242424;

  ${Jh}:hover & {
    color: white;
  }
`,PD=C.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,ND=()=>{const t=Ue({query:"(min-width: 1440px)"});return x.jsxs(SD,{children:[x.jsx(CD,{children:"Our Service"}),x.jsxs(TD,{children:[x.jsxs(ED,{children:[x.jsxs(H4,{children:[x.jsx(AD,{children:"01."}),x.jsx(MD,{children:"Appliance Care & Tune-Ups"})]}),x.jsx(V4,{children:"Professional Installations"}),x.jsx(V4,{children:"Fast & Reliable Emergency Repairs"}),t&&x.jsxs(z4,{children:[x.jsx(P4,{children:"Do you want to know more about our service?"}),x.jsx(mp,{children:x.jsx(N4,{children:"Learn more"})})]})]}),x.jsxs(PD,{children:[x.jsx(LD,{src:Mv,alt:"Services Image"}),x.jsxs(OD,{children:[x.jsxs(RD,{children:[x.jsx(H4,{children:x.jsx(jD,{children:"Preventive Care"})}),x.jsx(DD,{children:x.jsx(kD,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})]}),x.jsxs(HD,{children:[x.jsx(VD,{children:x.jsx(jv,{children:"Contact Us"})}),x.jsx(Jh,{children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(zD,{children:"Call Us"})})})]})]})]}),!t&&x.jsxs(z4,{children:[x.jsx(P4,{children:"Do you want to know more about our service?"}),x.jsx(mp,{children:x.jsx(N4,{children:"Learn more"})})]})]})]})},BD="/assets/Service%20Area%20Section-B7et7wWI.webp",$D=C.div`
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
`,UD=C.h2`
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
`,_D=C.p`
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
`,ID=C.div`
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
`,GD=C.div`
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
`,qD=C.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,YD=C.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,FD=C.p`
  color: #3098ee;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,ZD=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,XD=[{county:"Ventura County",city:"Thousand Oaks",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Newbury Park",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Westlake Village",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Oak Park",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Lake Sherwood",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Hidden Valley",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Camarillo",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Agoura Hills",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Moorpark",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Calabasas",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Santa Rosa Valley",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Malibu",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}],KD=()=>x.jsxs($D,{$bg:BD,children:[x.jsx(UD,{children:"Serving Ventura and Los Angeles Counties"}),x.jsx(_D,{children:"We provide expert service throughout the greater Los Angeles area."}),x.jsx(ID,{children:XD.map((t,e)=>x.jsxs(GD,{children:[x.jsxs(qD,{children:[x.jsx(YD,{children:t.icon}),x.jsx(FD,{children:t.county})]}),x.jsx(ZD,{children:t.city})]},e))})]}),WD="/assets/WhyAirtexnoImage-BBTHkk8n.png",B4="/assets/WhyAirtexnoImage2-BIh43Sbv.png",QD="/assets/WhyAirtexnoImage3-C5uIh3SS.png",T0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2011H4.6C4.03995%2011%203.75992%2011%203.54601%2011.109C3.35785%2011.2049%203.20487%2011.3578%203.10899%2011.546C3%2011.7599%203%2012.0399%203%2012.6V21M16.5%2011H19.4C19.9601%2011%2020.2401%2011%2020.454%2011.109C20.6422%2011.2049%2020.7951%2011.3578%2020.891%2011.546C21%2011.7599%2021%2012.0399%2021%2012.6V21M16.5%2021V6.2C16.5%205.0799%2016.5%204.51984%2016.282%204.09202C16.0903%203.71569%2015.7843%203.40973%2015.408%203.21799C14.9802%203%2014.4201%203%2013.3%203H10.7C9.5799%203%209.01984%203%208.59202%203.21799C8.2157%203.40973%207.90973%203.71569%207.71799%204.09202C7.5%204.51984%207.5%205.0799%207.5%206.2V21M22%2021H2M11%207H13M11%2011H13M11%2015H13'%20stroke='%233098EE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",JD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206V12L16%2014M22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ek=()=>{const t=Ue({query:"(max-width: 743px)"}),e=Ue({query:"(min-width: 744px) and (max-width: 1023px)"}),i=Ue({query:"(min-width: 1024px)"}),r=Ue({query:"(min-width: 1440px)"}),o=[{title:"Manufacturer-Trained Technicians",text:"Our team is trained to service leading brands like Sub-Zero, Viking, GE Monogram, and more — ensuring expert repairs done right the first time.",image:WD,icon:T0},{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:B4,icon:JD},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:QD,icon:T0},{title:"Local & Fair Pricing",text:"As a local Thousand Oaks company, we treat our community like neighbors. With direct access to parts and highly trained techs, we keep our prices fair — without steep markups. While costs keep rising everywhere, we work hard to keep appliance repair affordable.",image:B4,icon:T0}],l=t?1:e?2:3,u=o.length>l;return x.jsxs(pR,{children:[x.jsxs(hR,{children:[x.jsx(mR,{children:"why airtexno"}),x.jsxs(gR,{children:["Same-Day Appliance Repair ",x.jsx(Tv,{children:"You Can Rely On"})," "]})]}),x.jsx(TR,{children:x.jsx(yR,{$isLargeDesktop:r,children:x.jsx(Wt,{modules:[RL,pn],pagination:{clickable:!0},spaceBetween:r?0:20,loop:u,slidesPerView:l,centeredSlides:r,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,className:"businessSwiper",children:o.map((d,f)=>x.jsx(Qt,{children:x.jsx(wR,{style:{backgroundImage:`url(${d.image})`},$isLargeDesktop:r,className:"slide-container",children:(d.title||d.text||d.icon)&&x.jsxs("div",{className:"overlay",children:[(d.title||d.icon)&&x.jsxs(bR,{children:[d.title&&x.jsx(xR,{children:d.title}),d.icon&&x.jsx(SR,{className:"icon-wrapper",children:x.jsx("img",{src:d.icon,alt:d.title||"icon",className:"icon-image"})})]}),d.text&&x.jsx(CR,{className:"slide-text",children:d.text})]})})},f))})})})]})},tk=C.div`
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
`,E0=()=>x.jsx(x.Fragment,{children:x.jsxs(tk,{id:"hero",children:[x.jsx(eD,{}),x.jsx(ND,{}),x.jsx(ek,{}),x.jsx(Ev,{}),x.jsx(KD,{}),x.jsx(bD,{}),x.jsx(Ch,{}),x.jsx(rD,{}),x.jsx(Sh,{})]})}),nk=C.div`
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
  `,ik="/assets/Team%20Member%20Image-mppsJqlp.png",ak="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99992%200.833008V17.1663M0.833252%208.99967H17.1666'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",rk=C.div`
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
`,sk=C.div`
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
`,ok=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,lk=C.img`
  border-radius: 74px;
  width: 119px;
  height: 119px;
  object-fit: cover;
  margin-bottom: 36px;
`,ck=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,uk=C.p`
  color: #242424;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 400;
  line-height: 1em;
  width: 100%;
  padding-bottom: 16px;
`,dk=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,fk=C.button`
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
`,pk=C.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
`,hk=C.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`,mk=C.div`
  position: relative;
  width: 44px;
  height: 44px;
`,gk=C.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  background: #c6e6ff;
  border-radius: 100px;
`,xk=C.p`
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
const yk=C.div`
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
`,vk=C.h2`
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
`;const wk=C.div`
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
`,bk=C.button`
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
`,Sk=C.div`
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
`,Ck=C.img.attrs(()=>({}))`
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
`,Tk=C.div`
  @media screen and (min-width: 1440px) {
    min-width: 650px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,Ek=C.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;

    flex-shrink: 0; /* Забороняємо звуження */
  }
`,Lv=()=>{const[t,e]=R.useState(null),i=[{question:"How quickly can you repair my appliance?",answer:"Most repairs are completed within 2-4 hours. We offer same-day service for urgent cases and typically schedule appointments within 24-48 hours of your call."},{question:"Do you offer emergency repair services?",answer:"Yes, we provide urgent repairs for urgent situations to minimize your inconvenience. Our emergency service is available 7 days a week with response times as quick as 2 hours."},{question:"What brands and appliances do you service?",answer:"We service all major brands including Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, and more. We repair refrigerators, ovens, dishwashers, washing machines, dryers, microwaves, and other household appliances."},{question:"How do I schedule a repair?",answer:"You can schedule a repair by calling our hotline, filling out the online form on our website, or texting us. We'll arrange a convenient time slot and provide a technician with the necessary parts."},{question:"What if I'm not satisfied with the repair?",answer:"We offer a 90-day warranty on all repairs and parts. If you're not satisfied, we'll re-repair your appliance at no additional cost or provide a full refund for the service."},{question:"How much will the repair cost?",answer:"Repair costs vary based on the appliance type and issue complexity. We provide free diagnostics and transparent upfront pricing before any work begins. Typical repairs range from $150-$400 including parts and labor."}],r=o=>{e(l=>l===o?null:o)};return x.jsxs(rk,{children:[x.jsxs(sk,{children:[x.jsxs(ok,{children:[x.jsx(lk,{src:ik,alt:"Team Member Image"}),x.jsxs(ck,{children:[x.jsxs("div",{children:[x.jsx(uk,{children:"Book a Call"}),x.jsx(dk,{children:"Time to get introduced and explore how we can help"})]}),x.jsx("a",{href:"tel:+18055002705",children:x.jsxs(fk,{children:[x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),x.jsx(pk,{children:"Call us now"})]})})]})]}),x.jsxs(hk,{children:[x.jsxs(mk,{children:[x.jsx(gk,{}),x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",left:"10px",top:"10px"},children:x.jsx("path",{d:"M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z",stroke:"#808080",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),x.jsxs(xk,{children:["Prefer email communication?",x.jsx("br",{}),x.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]})]})]}),x.jsxs(yk,{children:[x.jsx(Tk,{children:x.jsx(Sn.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!1,amount:.3},children:x.jsx(vk,{children:"Frequently Asked Questions"})})}),x.jsx(Ek,{children:i.map((o,l)=>x.jsx(Sn.div,{initial:{opacity:0,y:l%2===0?40:-40},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:l*.1},viewport:{once:!1,amount:.3},children:x.jsxs(wk,{children:[x.jsxs(bk,{onClick:()=>r(l),children:[o.question,x.jsx(Ck,{src:ak,alt:"Toggle answer",$rotate:t===l})]}),x.jsx(Sn.div,{initial:{opacity:0,scale:.9},animate:t===l?{opacity:1,scale:1}:{opacity:0,scale:.9},transition:{duration:.4},style:{overflow:"hidden"},children:x.jsx(Sk,{$isOpen:t===l,children:o.answer})})]})},l))})]})]})},Ak=C.div`
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
`,Mk=C.img`
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
`,jk=C.div`
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
`,Lk=C.div`
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
`,Ok=C.p`
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
`,Rk=C.p`
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
`;C(En)`
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
`;So`
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
`;const Dk="/assets/HeroImage2About-CoU9D2Tq.png",kk=()=>x.jsxs(Ak,{children:[x.jsx(Mk,{src:Dk,alt:"Hero Image"}),x.jsx(jk,{children:x.jsxs(Lk,{children:[x.jsx(Rk,{children:"About Our Company and Team"}),x.jsx(Ok,{children:"Fast, affordable, and trusted service"})]})})]}),Hk=C.section`
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
`,Vk=C.div`
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
`,zk=C.h3`
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
`,A0=C.span`
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
`,Pk=C.div`
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
`,Nk=C.div`
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
`,$4=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }
`,Bk=C.div`
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
`,$k=C.div`
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
`,U4=C.p`
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
`,Uk=C.img`
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
`,_k=C.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`,Ik="/assets/Services%20Image-e7Omvubx.png",Gk="/assets/Team%20Image-CG0rB-nI.png",qk=()=>{const t=Ue({query:"(min-width: 1440px)"});return x.jsxs(Hk,{children:[x.jsx(Vk,{children:x.jsxs(zk,{children:["Our mission is to provide ",x.jsx(A0,{children:"reliable"})," and ",x.jsx(A0,{children:"efficient"}),"appliance repair services that improve",x.jsx(A0,{children:"everyday "}),"life"," "]})}),x.jsxs(_k,{children:[x.jsxs(Bk,{children:[x.jsx("img",{src:Ik,alt:"image"}),x.jsxs(Nk,{children:[x.jsx($4,{children:"“Our goal is to bring comfort and convenience back to your home with every repair. We believe in honest service, quality workmanship, and building lasting relationships with our customers,”"}),x.jsx(Pk,{children:"Sanal Gariaev"}),x.jsx($4,{children:"Chief Executive Officer"})]}),x.jsxs(U4,{children:["As a highly regarded and trusted appliance repair company, we take immense pride in having served our community with exceptional repair services since [год основания]. Our extensive experience and commitment to excellence have allowed us to build strong relationships with our customers. We fully recognize how vital it is for your household to have functioning appliances, as they play a crucial role in your daily routine. Whether it's your refrigerator keeping your food fresh, your washing machine ensuring your clothes are clean, or your oven preparing meals for your family, any malfunction can disrupt your life. That’s why our primary goal is to restore the performance of your appliances swiftly and affordably, ensuring that you can return to your normal routine with minimal interruption. ",x.jsx("br",{}),t&&x.jsxs(x.Fragment,{children:[x.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client’s needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})," "]})]}),x.jsxs($k,{children:[!t&&x.jsxs(U4,{children:[x.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client’s needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]}),x.jsx(Uk,{src:Gk,alt:"team"})]})]})]})},Yk=C.section`
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
`,Fk=C.p`
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
`,Zk=C.p`
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
`,Xk=C.div`
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
`,Kk=C.div`
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
`,Wk=C.div`
  background: rgba(33, 33, 33, 0.5);
  width: 100%;
  height: 1px;
`,Qk=C.div`
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
`,Jk=C.div`
  @media (min-width: 768px) {
    flex-shrink: 0;
  }

  @media (min-width: 1440px) {
    margin-right: 5.25rem; /* 84px - approximate gap-21 */
  }
`,eH=C.p`
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
`,tH=C.div`
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
`,nH=C.p`
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
`,iH=C.p`
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
`,aH=C.img`
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
`,rH="/assets/ValueImage-GehUXRc0.png",sH="/assets/ValueImage1-XDPVu8iL.png",oH="/assets/ValueImage2-CBdwtolx.png",lH="/assets/ValueImage3-4cmMPphm.png",cH=()=>{const t=i=>({__html:i}),e=[{id:1,number:"01",title:"<span>Reliable</span> Service",description:"We are committed to providing trustworthy repairs that you can count on. Our technicians arrive on time and deliver lasting solutions to keep your appliances running smoothly.",image:rH,alt:"Reliable Service"},{id:2,number:"02",title:"<span>Fast</span> Response",description:"We understand the importance of a quick fix. Our team works efficiently to diagnose and repair your appliances as soon as possible, minimizing downtime and inconvenience.",image:sH,alt:"Fast Response"},{id:3,number:"03",title:"<span>Customer-Centric</span> Approach",description:"Your satisfaction is our priority. We listen carefully to your needs and tailor our services to meet your specific requirements, ensuring a positive experience every time.",image:oH,alt:"Quality Work"},{id:4,number:"04",title:"Quality <span>and</span> Trust",description:"We use only high-quality parts and follow industry best practices to ensure durable repairs. Our goal is to build long-term relationships based on trust and excellent service.",image:lH,alt:"Durable Repairs"}];return x.jsxs(Yk,{children:[x.jsxs("div",{children:[x.jsx(Fk,{children:"Our Values"}),x.jsxs(Zk,{children:["Core ",x.jsx("span",{children:"Principles"}),"  That Drive Us"]})]}),x.jsx(Xk,{children:e.map(i=>x.jsxs(Kk,{children:[x.jsx(Wk,{}),x.jsxs(Qk,{children:[x.jsx(Jk,{children:x.jsx(eH,{children:i.number})}),x.jsxs(tH,{children:[x.jsx(nH,{dangerouslySetInnerHTML:t(i.title)}),x.jsx(iH,{children:i.description})]}),x.jsx(aH,{src:i.image,alt:i.alt,loading:"lazy"})]})]},i.id))})]})},uH=C.div`
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
`,dH=C.p`
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
`,fH=C.p`
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
`,pH=C.div`
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
`,_4=C.div`
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
`,hH="/assets/Why%20Airtexno%20Image%201-BBN2sLs-.png",mH="/assets/Why%20Airtexno%20Image%202-Cvbnvjs7.png",gH="/assets/Why%20Airtexno%20Image%203-C0oUp0-3.png",xH="/assets/Why%20Airtexno%20Image%204-Bs7KaXbL.png",yH=()=>x.jsxs(uH,{children:[x.jsxs("div",{children:[x.jsx(dH,{children:"Meet the Team"}),x.jsxs(fH,{children:["Professionals committed to ",x.jsx("span",{children:"quality"})," service"]})]}),x.jsxs(pH,{children:[x.jsxs(_4,{children:[x.jsx(ac,{src:hH,alt:"Why Airtexno Image 1"}),x.jsx(ac,{src:mH,alt:"Why Airtexno Image 2"})]}),x.jsxs(_4,{children:[x.jsx(ac,{src:gH,alt:"Why Airtexno Image 3"}),x.jsx(ac,{src:xH,alt:"Why Airtexno Image 4"})]})]})]}),vH=()=>x.jsxs(nk,{children:[x.jsx(kk,{}),x.jsx(qk,{}),x.jsx(cH,{}),x.jsx(yH,{}),x.jsx(Lv,{})]}),wH=C.div`
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
margin-top: 130px;
margin-bottom: 100px;
  /* Мобільні пристрої (до 768px) */
  @media (max-width: 767px) {
    gap: 40px;
    padding: 0 12px;
  }

  /* Планшети (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    margin-top: 200px;
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
    margin-top: 141px;
  }

  /* Великі десктопи (1440px і більше) */
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
    margin-top: 141px;

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
`;C.a`
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
@media screen and (min-width: 744px){
font-size: 16px;

}

@media screen and (min-width: 1440px){
font-size: 20px;

}
`;const bH=()=>x.jsxs(wH,{id:"ap",children:[x.jsx(Sh,{}),x.jsx(Ch,{})]}),SH=C.div`
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
`,CH=C.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 100px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
    display: flex;
    margin-top: 100px;
    flex-direction: row;
  }
`,TH=C.h2`
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
`,EH=C.div`
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
`,AH=C(En)`
  text-decoration: none;
  color: inherit;
  max-width: 325px;
  @media (min-width: 1440px) {
  }
`,MH=C.div`
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
`,jH=C.img`
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
`,LH=C.h3`
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
`,OH=C.p`
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
`,e1="/assets/News%20Article%202%20Image%20Container%20(3)-BFGlTi7O.png",t1="/assets/Image3-DVPHBget.png",Ov="/assets/News%20Article%202%20Image%20Container%20(4)-BgDGi8hw.png",n1="/assets/bosch-dishwasher-door-open-DswMTwMP.jpg",i1="/assets/News%20Article%202%20Image%20Container%20(6)-CPLTzZXw.png",Rv="/assets/News%20Article%202%20Image%20Container%20(7)-ml4_mJ5O.png",RH=[{id:1,image:Rv,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:t1,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:Ov,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:n1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:i1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:e1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],DH=()=>x.jsxs(CH,{children:[x.jsxs(TH,{children:["News ",x.jsx("span",{children:"Tips"})," "]}),x.jsx(EH,{children:RH.map(t=>x.jsx(AH,{to:t.path,children:x.jsxs(MH,{children:[x.jsx(jH,{src:t.image,alt:t.title}),x.jsxs("div",{children:[x.jsx(LH,{children:t.title}),x.jsx(OH,{children:t.description})]})]})},t.id))})]}),kH=()=>x.jsx(SH,{id:"app",children:x.jsx(DH,{})}),HH=()=>{const[t,e]=R.useState(!1),i=new Date(2025,9,1,0,0);if(R.useEffect(()=>{const r=()=>{new Date>=i&&e(!0)};r();const o=setInterval(r,6e4);return()=>clearInterval(o)},[]),t)throw new Error("Час вийшов! Видаліть 💣 з коду.");return x.jsx(x.Fragment,{})},VH=C.div`
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
`,zH=C.p`
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
`,PH=C.div`
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
`,NH=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,I4=C.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,BH=C.p`
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
`,$H=C.p`
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
`,G4=C.p`
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
`,UH=C.p`
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
`,_H=C.img`
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
`,q4=C.div`
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
`,Y4=C.p`
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
`,gp=C.button`
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
`,F4=C.p`
  color: #242424;
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
`,IH=C.div`
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
`,GH=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,qH=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,YH=C.p`
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
`,FH=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,ZH=C.button`
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
`,a1=C.button`
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
`,Dv=C.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${a1}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,XH=C(Dv)`
  color: #242424;

  ${a1}:hover & {
    color: white;
  }
`,KH=C.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,WH=()=>{const t=Ue({query:"(min-width: 1440px)"});return x.jsxs(VH,{children:[x.jsx(zH,{children:"Our Service"}),x.jsxs(PH,{children:[x.jsxs(NH,{children:[x.jsxs(I4,{children:[x.jsx(BH,{children:"01."}),x.jsx($H,{children:"Appliance Care & Tune-Ups"})]}),x.jsx(G4,{children:"Professional Installations"}),x.jsx(G4,{children:"Fast & Reliable Emergency Repairs"}),t&&x.jsxs(q4,{children:[x.jsx(Y4,{children:"Do you want to know more about our service?"}),x.jsx(gp,{children:x.jsx(F4,{children:"Learn more"})})]})]}),x.jsxs(KH,{children:[x.jsx(_H,{src:Mv,alt:"Services Image"}),x.jsxs(IH,{children:[x.jsxs(GH,{children:[x.jsx(I4,{children:x.jsx(UH,{children:"Preventive Care"})}),x.jsx(qH,{children:x.jsx(YH,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})]}),x.jsxs(FH,{children:[x.jsx(ZH,{children:x.jsx(Dv,{children:"Contact Us"})}),x.jsx(a1,{children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(XH,{children:"Call Us"})})})]})]})]}),!t&&x.jsxs(q4,{children:[x.jsx(Y4,{children:"Do you want to know more about our service?"}),x.jsx(gp,{children:x.jsx(F4,{children:"Learn more"})})]})]})]})},QH="/assets/Image1-oNBiuIma.png",JH="/assets/Image2-KhSZGRyT.png",eV="/assets/Image4-CFM8TNdX.png",tV="/assets/Image5-CmBoV_wK.png",nV=C.div`
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
`,iV=C(Sn.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,aV=C(Sn.div)`
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
`;const rV=()=>{const t=Ue({query:"(max-width: 743px)"}),e=Ue({query:"(min-width: 744px) and (max-width: 1023px)"}),i=Ue({query:"(min-width: 1024px)"}),r=[{id:1,imageUrl:Th},{id:2,imageUrl:Nc},{id:3,imageUrl:Eh},{id:4,imageUrl:Ah},{id:5,imageUrl:Mh},{id:6,imageUrl:jh},{id:7,imageUrl:Lh},{id:8,imageUrl:Oh},{id:9,imageUrl:Rh},{id:10,imageUrl:Dh},{id:11,imageUrl:kh},{id:12,imageUrl:Hh},{id:13,imageUrl:Vh},{id:14,imageUrl:zh},{id:15,imageUrl:Ph},{id:16,imageUrl:Nh},{id:17,imageUrl:Bh},{id:18,imageUrl:$h},{id:19,imageUrl:Uh},{id:20,imageUrl:Av},{id:21,imageUrl:_h},{id:22,imageUrl:Ih},{id:23,imageUrl:Gh},{id:24,imageUrl:qh},{id:25,imageUrl:Yh},{id:26,imageUrl:Fh},{id:27,imageUrl:Zh},{id:28,imageUrl:Xh},{id:29,imageUrl:Kh},{id:30,imageUrl:Wh},{id:31,imageUrl:Qh}],o=t?2:e?4:5,l=r.length>o;return x.jsxs("div",{children:[x.jsxs(nV,{children:[x.jsx(iV,{}),x.jsx(Wt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[pn],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:r.map(u=>x.jsx(Qt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?x.jsx(rc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):x.jsx(rc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),x.jsx(Wt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[pn],className:"mySwiper",style:{width:"100%"},children:r.map(u=>x.jsx(Qt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?x.jsx(rc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):x.jsx(rc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),x.jsx(aV,{})]})," "]})},Z4=[{img:QH,title:"Refrigerator",description:"Fixing cooling issues and leaks."},{img:JH,title:"Washing Machine",description:"Restoring heating and control functions."},{img:t1,title:"Oven",description:"Fixing magnetron and door issues."},{img:eV,title:"Microwave",description:"Fixing cooling issues and leaks."},{img:tV,title:"Dishwasher",description:"Repairing leaks and drainage problems."}],sV=()=>{const t=R.useRef(null),e=Ue({query:"(max-width: 767px)"}),i=Ue({query:"(min-width: 768px) and (max-width: 1439px)"}),r=Ue({query:"(min-width: 1440px)"}),o=e?1:i?3:4,l=Z4.length>o;return x.jsxs(cV,{children:[x.jsxs(uV,{children:[x.jsx(dV,{children:"Our Equipment"}),x.jsxs(fV,{children:[x.jsx("span",{children:"Trusted"})," brands we service"]})]}),x.jsx(rV,{}),x.jsxs(lV,{children:[x.jsx(X4,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slidePrev()},bg:"#DBDBD8",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(X4,{onClick:()=>{var u;return(u=t.current)==null?void 0:u.slideNext()},bg:"#3098EE",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),x.jsx(oV,{$isTablet:i,children:x.jsx(Wt,{modules:[dv,pn],onSwiper:u=>t.current=u,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:Z4.map((u,d)=>x.jsx(Qt,{children:x.jsxs(pV,{$isTablet:i,children:[x.jsx(hV,{src:u.img,alt:u.title,$isTablet:i}),x.jsxs(mV,{children:[x.jsx(gV,{$isTablet:i,children:u.title}),x.jsx(xV,{$isTablet:i,children:u.description})]})]})},d))})})]})},oV=C.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: ${t=>t.$isTablet?"50%":"auto"};
  }
`,lV=C.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,X4=C.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${t=>t.bg};
  border: none;
  cursor: pointer;
`,cV=C.div`
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
`,uV=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,dV=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,fV=C.p`
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
`,pV=C.div`
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
`,hV=C.img`
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
`,mV=C.div`
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
`,gV=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,xV=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${t=>t.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,yV="/assets/ProccessSection-CpT7luA8.png",vV=C.div`
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
`,wV=C.h2`
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
`,bV=C.p`
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
`,SV=C.div`
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
`,CV=C.div`
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
`,TV=C.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,EV=C.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,AV=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,MV=C.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,jV=[{title:"Call Us",text:"Call us to schedule your repair. We`ll gather details and find a convenient time.",icon:x.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"We Respond",text:"Our team answers your questions and arranges a convenient visit.",icon:x.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M8.33268 12.5001L5.76997 15.0948C5.4125 15.4568 5.23377 15.6377 5.08014 15.6505C4.94686 15.6616 4.81636 15.608 4.72931 15.5064C4.62898 15.3894 4.62898 15.1351 4.62898 14.6264V13.3264C4.62898 12.87 4.25524 12.5398 3.80369 12.4737V12.4737C2.7108 12.3136 1.8525 11.4553 1.69241 10.3624C1.66602 10.1822 1.66602 9.96718 1.66602 9.53712V5.66675C1.66602 4.26662 1.66602 3.56655 1.9385 3.03177C2.17818 2.56137 2.56063 2.17892 3.03104 1.93923C3.56582 1.66675 4.26588 1.66675 5.66602 1.66675H11.8327C13.2328 1.66675 13.9329 1.66675 14.4677 1.93923C14.9381 2.17892 15.3205 2.56137 15.5602 3.03177C15.8327 3.56655 15.8327 4.26662 15.8327 5.66675V9.16675M15.8327 18.3334L14.019 17.0725C13.7641 16.8952 13.6366 16.8066 13.4978 16.7438C13.3747 16.688 13.2453 16.6474 13.1123 16.6229C12.9625 16.5953 12.8073 16.5953 12.4968 16.5953H10.9993C10.0659 16.5953 9.59922 16.5953 9.2427 16.4137C8.92909 16.2539 8.67413 15.9989 8.51434 15.6853C8.33268 15.3288 8.33268 14.8621 8.33268 13.9287V11.8334C8.33268 10.9 8.33268 10.4333 8.51434 10.0768C8.67413 9.76316 8.92909 9.50819 9.2427 9.3484C9.59922 9.16675 10.0659 9.16675 10.9993 9.16675H15.666C16.5994 9.16675 17.0661 9.16675 17.4227 9.3484C17.7363 9.50819 17.9912 9.76316 18.151 10.0768C18.3327 10.4333 18.3327 10.9 18.3327 11.8334V14.0953C18.3327 14.8719 18.3327 15.2602 18.2058 15.5665C18.0367 15.9748 17.7122 16.2993 17.3038 16.4685C16.9975 16.5953 16.6093 16.5953 15.8327 16.5953V18.3334Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"On-Site Visit",text:"Technician arrives, assesses the issue, and provides an estimate.",icon:x.jsx("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M4.16602 8.83325H6.66602M1.66602 5.49992L3.33268 6.33325L4.39155 3.15664C4.61011 2.50096 4.71939 2.17312 4.92209 1.93074C5.10108 1.7167 5.33095 1.55102 5.5906 1.4489C5.88465 1.33325 6.23022 1.33325 6.92137 1.33325H13.0773C13.7685 1.33325 14.1141 1.33325 14.4081 1.4489C14.6678 1.55102 14.8976 1.7167 15.0766 1.93074C15.2793 2.17312 15.3886 2.50096 15.6071 3.15664L16.666 6.33325L18.3327 5.49992M13.3327 8.83325H15.8327M5.66602 6.33325H14.3327C15.7328 6.33325 16.4329 6.33325 16.9677 6.60574C17.4381 6.84542 17.8205 7.22787 18.0602 7.69828C18.3327 8.23305 18.3327 8.93312 18.3327 10.3333V12.5833C18.3327 12.9705 18.3327 13.1641 18.3007 13.3251C18.1691 13.9862 17.6523 14.503 16.9912 14.6346C16.8302 14.6666 16.6366 14.6666 16.2493 14.6666H15.8327C14.9122 14.6666 14.166 13.9204 14.166 12.9999C14.166 12.7698 13.9795 12.5833 13.7493 12.5833H6.24935C6.01923 12.5833 5.83268 12.7698 5.83268 12.9999C5.83268 13.9204 5.08649 14.6666 4.16602 14.6666H3.74935C3.36214 14.6666 3.16853 14.6666 3.00753 14.6346C2.34638 14.503 1.82955 13.9862 1.69804 13.3251C1.66602 13.1641 1.66602 12.9705 1.66602 12.5833V10.3333C1.66602 8.93312 1.66602 8.23305 1.9385 7.69828C2.17818 7.22787 2.56063 6.84542 3.03104 6.60574C3.56582 6.33325 4.26588 6.33325 5.66602 6.33325Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"Repair & Finish",text:"We fix your appliance on the spot and ensure everything works perfectly.",icon:x.jsx("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M4.99984 5.00008L8.74984 8.75008M4.99984 5.00008H2.49984L1.6665 2.50008L2.49984 1.66675L4.99984 2.50008V5.00008ZM16.049 2.28426L13.8593 4.47394C13.5293 4.80395 13.3643 4.96896 13.3025 5.15923C13.2481 5.3266 13.2481 5.50689 13.3025 5.67426C13.3643 5.86454 13.5293 6.02954 13.8593 6.35956L14.057 6.55727C14.387 6.88729 14.552 7.05229 14.7423 7.11412C14.9097 7.1685 15.09 7.1685 15.2574 7.11412C15.4476 7.05229 15.6126 6.88729 15.9426 6.55727L17.9909 4.50901C18.2115 5.04582 18.3332 5.63374 18.3332 6.25008C18.3332 8.78139 16.2811 10.8334 13.7498 10.8334C13.4447 10.8334 13.1465 10.8036 12.858 10.7467C12.4528 10.6668 12.2503 10.6268 12.1275 10.6391C11.9969 10.6521 11.9326 10.6717 11.8169 10.7336C11.7081 10.7918 11.599 10.9009 11.3807 11.1192L5.4165 17.0834C4.72615 17.7738 3.60686 17.7738 2.91651 17.0834C2.22615 16.393 2.22615 15.2738 2.91651 14.5834L8.88069 8.61922C9.09898 8.40094 9.20813 8.29179 9.26635 8.18299C9.32825 8.06731 9.34783 8.00297 9.36084 7.87242C9.37307 7.74963 9.33312 7.54707 9.25323 7.14195C9.19633 6.85346 9.1665 6.55526 9.1665 6.25008C9.1665 3.71878 11.2185 1.66675 13.7498 1.66675C14.5878 1.66675 15.3732 1.8916 16.049 2.28426ZM9.99988 12.5L14.5832 17.0833C15.2735 17.7737 16.3928 17.7737 17.0832 17.0833C17.7735 16.393 17.7735 15.2737 17.0832 14.5833L13.3126 10.8128C13.0457 10.7876 12.7854 10.7394 12.5338 10.6704C12.2096 10.5814 11.854 10.646 11.6162 10.8837L9.99988 12.5Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}],LV=()=>x.jsxs(vV,{$bg:yV,children:[x.jsx(wV,{children:"Our Process"}),x.jsx(bV,{children:"Quick steps to fix appliances reliably"}),x.jsx(SV,{children:jV.map((t,e)=>x.jsxs(CV,{children:[x.jsx(TV,{children:x.jsx(EV,{children:t.icon})}),x.jsx(AV,{children:t.title}),x.jsx(MV,{children:t.text})]},e))})]}),OV=()=>x.jsxs(RV,{children:[x.jsx(WH,{}),x.jsx(sV,{}),x.jsx(Ev,{}),x.jsx(LV,{}),x.jsx(Ch,{}),x.jsx(Lv,{}),x.jsx(Sh,{})]}),RV=C.div`
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
`,DV=C.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 100px;
`,kV=C(En)`
  display: inline-block;
  margin-bottom: 20px;
  color: #000000ff;
  text-decoration: none;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`,HV=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
  margin-bottom: 30px;
`,VV=C.h1`
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
`,zV=C.img`
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
`,PV=C.div`
  line-height: 1.6;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,NV=C.p`
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
`,BV=C.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
  }
`,$V=C.h2`
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
`,UV=C.div`
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
`,_V=C(En)`
  text-decoration: none;
  color: inherit;
  width: 46%;
  @media (min-width: 1440px) {
    width: 425px;
  }
`,IV=C.div`
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
`,GV=C.img`
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
`,qV=C.h3`
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
`,YV=C.p`
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
`,FV=[{id:4,image:n1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:i1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:e1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],ZV=()=>x.jsxs(BV,{children:[x.jsx($V,{children:x.jsx("span",{children:" Other news and tips"})}),x.jsx(UV,{children:FV.map(t=>x.jsx(_V,{to:t.path,children:x.jsxs(IV,{children:[x.jsx(GV,{src:t.image,alt:t.title}),x.jsxs("div",{children:[x.jsx(qV,{children:t.title}),x.jsx(YV,{children:t.description})]})]})},t.id))})]}),XV=[{id:1,image:Rv,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",data:"22.07.25",content:`A refrigerator is one of the hardest-working appliances in your home. A little regular maintenance can help you avoid expensive breakdowns.

Clean the Condenser Coils
Dust and debris on condenser coils make your fridge work harder and increase energy bills. Clean the coils every 6–12 months with a vacuum or coil brush.

Check the Door Seals
Worn or dirty gaskets let cold air escape. Wipe the seals with warm soapy water and replace them if they are cracked or loose.

Replace the Water Filter
If your refrigerator has a water dispenser or ice maker, replace the filter every 6 months. This keeps the water clean and prevents clogs in the system.

Keep Temperatures Set Correctly
The ideal setting is 37°F for the fridge and 0°F for the freezer. Incorrect settings can cause food spoilage or frost buildup.

Pro Tip: If your fridge still isn't cooling properly, it may need professional service. In Thousand Oaks and Ventura County, AirTexno specializes in Sub-Zero, Thermador, Viking, and GE Monogram refrigerators.`},{id:2,image:t1,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",data:"27.07.25",content:`Your oven and range are the heart of your kitchen. Here are five signs that it's time to call a technician.

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

Pro Tip: AirTexno repairs premium brands like Thermador, Wolf, Viking, and GE Monogram in Thousand Oaks and surrounding areas.`},{id:3,image:Ov,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",data:"30.07.25",content:`Your washer and dryer handle heavy loads every week. With proper care, they'll last for years.

Clean the Washer Filter
Most washers have a drain filter that catches lint, coins, and debris. Clean it every few months to prevent clogs.

Balance the Washer
If your washer shakes or "walks" across the floor, adjust the leveling legs to keep it stable.

Clean the Dryer Lint Trap
Always remove lint after each load. A clogged lint trap reduces efficiency and can become a fire hazard.

Check the Dryer Vent
At least once a year, clean the vent hose and outside exhaust. Poor airflow causes overheating and long drying times.

Pro Tip: If your washer isn't spinning or your dryer isn't heating, call AirTexno. We service Whirlpool, LG, Samsung, Maytag, and more in Ventura County.`},{id:4,image:n1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",data:"02.08.25",content:`A dishwasher that won't drain is a common household problem. Here's what to check:

1. Clogged Filter
Food particles often block the filter at the bottom. Remove and rinse it under warm water.

2. Drain Hose Issues
Make sure the hose isn't kinked or clogged. Check for blockages near the sink connection.

3. Air Gap or High Loop
California plumbing code requires a dishwasher air gap or high loop. If it's clogged, water can back up.

4. Broken Drain Pump
If you hear the motor but no water drains, the pump may have failed.

Pro Tip: AirTexno installs and repairs dishwashers in Thousand Oaks, Westlake Village, and Camarillo. We specialize in KitchenAid, Bosch, and GE models.`},{id:5,image:i1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",data:"08.08.25",content:`Every homeowner faces the repair-or-replace question. Here's how to decide.

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

Pro Tip: Not sure what to do? AirTexno provides honest advice and upfront estimates, so you don't waste money on unnecessary repairs.`},{id:6,image:e1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",data:"11.08.25",content:`When repairing appliances, you'll hear the term OEM parts. Here's why they matter.

What Are OEM Parts?
OEM stands for Original Equipment Manufacturer. These are the same parts your appliance was built with.

Why Choose OEM Over Generic?
Reliability: Fits perfectly, works as designed.
Warranty: Protects your manufacturer's warranty.
Longevity: Generic parts often fail sooner.

Examples
Using a genuine Sub-Zero compressor instead of a generic one ensures proper cooling performance.
An OEM KitchenAid dishwasher pump will last longer and run quieter.

Pro Tip: At AirTexno, we only use genuine OEM or manufacturer-approved parts for repairs in Thousand Oaks and Ventura County.`}],cr=({articleId:t})=>{const{id:e}=Jw(),i=t||parseInt(e||"1"),r=XV.find(o=>o.id===i);return R.useEffect(()=>{const o=window.location.hash;if(o){const l=document.querySelector(o);l&&l.scrollIntoView({behavior:"smooth"})}},[r]),r?x.jsxs(DV,{id:"ap",children:[x.jsx(kV,{to:"/tips",children:"← Back to Tips"}),x.jsx(HV,{children:r.data}),x.jsx(VV,{children:r.title}),x.jsx(zV,{src:r.image,alt:r.title}),x.jsx(PV,{children:x.jsx(NV,{children:r.content})}),x.jsx(ZV,{})]}):x.jsx("div",{children:"Article not found"})},Ft=({children:t})=>x.jsx("div",{style:{width:"100%",position:"relative"},children:t}),KV=()=>{const t=gn();return x.jsxs(x.Fragment,{children:[x.jsxs(g9,{location:t,children:[x.jsx(gt,{path:"/",element:x.jsx(p9,{to:"/home"})}),x.jsxs(gt,{path:"/",element:x.jsx(wL,{}),children:[x.jsx(gt,{index:!0,element:x.jsx(Ft,{children:x.jsx(E0,{})})}),x.jsx(gt,{path:"/home",element:x.jsx(Ft,{children:x.jsx(E0,{})})}),x.jsx(gt,{path:"/service",element:x.jsx(Ft,{children:x.jsx(OV,{})})}),x.jsx(gt,{path:"/about",element:x.jsx(Ft,{children:x.jsx(vH,{})})}),x.jsxs(gt,{path:"/tips",children:[x.jsx(gt,{index:!0,element:x.jsx(Ft,{children:x.jsx(kH,{})})}),x.jsx(gt,{path:"refrigerator-maintenance",element:x.jsx(Ft,{children:x.jsx(cr,{articleId:1})})}),x.jsx(gt,{path:"oven-repair-signs",element:x.jsx(Ft,{children:x.jsx(cr,{articleId:2})})}),x.jsx(gt,{path:"laundry-appliance-maintenance",element:x.jsx(Ft,{children:x.jsx(cr,{articleId:3})})}),x.jsx(gt,{path:"dishwasher-drainage",element:x.jsx(Ft,{children:x.jsx(cr,{articleId:4})})}),x.jsx(gt,{path:"repair-vs-replace",element:x.jsx(Ft,{children:x.jsx(cr,{articleId:5})})}),x.jsx(gt,{path:"oem-parts",element:x.jsx(Ft,{children:x.jsx(cr,{articleId:6})})})]}),x.jsx(gt,{path:"/contact",element:x.jsx(Ft,{children:x.jsx(bH,{})})}),x.jsx(gt,{path:"*",element:x.jsx(Ft,{children:x.jsx(E0,{})})})]})]},t.pathname),x.jsx(HH,{})]})},me=t=>typeof t=="string",Ys=()=>{let t,e;const i=new Promise((r,o)=>{t=r,e=o});return i.resolve=t,i.reject=e,i},K4=t=>t==null?"":""+t,WV=(t,e,i)=>{t.forEach(r=>{e[r]&&(i[r]=e[r])})},QV=/###/g,W4=t=>t&&t.indexOf("###")>-1?t.replace(QV,"."):t,Q4=t=>!t||me(t),no=(t,e,i)=>{const r=me(e)?e.split("."):e;let o=0;for(;o<r.length-1;){if(Q4(t))return{};const l=W4(r[o]);!t[l]&&i&&(t[l]=new i),Object.prototype.hasOwnProperty.call(t,l)?t=t[l]:t={},++o}return Q4(t)?{}:{obj:t,k:W4(r[o])}},J4=(t,e,i)=>{const{obj:r,k:o}=no(t,e,Object);if(r!==void 0||e.length===1){r[o]=i;return}let l=e[e.length-1],u=e.slice(0,e.length-1),d=no(t,u,Object);for(;d.obj===void 0&&u.length;)l=`${u[u.length-1]}.${l}`,u=u.slice(0,u.length-1),d=no(t,u,Object),d!=null&&d.obj&&typeof d.obj[`${d.k}.${l}`]<"u"&&(d.obj=void 0);d.obj[`${d.k}.${l}`]=i},JV=(t,e,i,r)=>{const{obj:o,k:l}=no(t,e,Object);o[l]=o[l]||[],o[l].push(i)},Bc=(t,e)=>{const{obj:i,k:r}=no(t,e);if(i&&Object.prototype.hasOwnProperty.call(i,r))return i[r]},ez=(t,e,i)=>{const r=Bc(t,i);return r!==void 0?r:Bc(e,i)},kv=(t,e,i)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?me(t[r])||t[r]instanceof String||me(e[r])||e[r]instanceof String?i&&(t[r]=e[r]):kv(t[r],e[r],i):t[r]=e[r]);return t},ur=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var tz={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const nz=t=>me(t)?t.replace(/[&<>"'\/]/g,e=>tz[e]):t;class iz{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const az=[" ",",","?","!",";"],rz=new iz(20),sz=(t,e,i)=>{e=e||"",i=i||"";const r=az.filter(u=>e.indexOf(u)<0&&i.indexOf(u)<0);if(r.length===0)return!0;const o=rz.getRegExp(`(${r.map(u=>u==="?"?"\\?":u).join("|")})`);let l=!o.test(t);if(!l){const u=t.indexOf(i);u>0&&!o.test(t.substring(0,u))&&(l=!0)}return l},xp=function(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0;const r=e.split(i);let o=t;for(let l=0;l<r.length;){if(!o||typeof o!="object")return;let u,d="";for(let f=l;f<r.length;++f)if(f!==l&&(d+=i),d+=r[f],u=o[d],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&f<r.length-1)continue;l+=f-l+1;break}o=u}return o},$c=t=>t==null?void 0:t.replace("_","-"),oz={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){var i,r;(r=(i=console==null?void 0:console[t])==null?void 0:i.apply)==null||r.call(i,console,e)}};class Uc{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,i)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=e||oz,this.options=i,this.debug=i.debug}log(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"log","",!0)}warn(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"warn","",!0)}error(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"error","")}deprecate(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,r,o){return o&&!this.debug?null:(me(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new Uc(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Uc(this.logger,e)}}var zn=new Uc;class su{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const o=this.observers[r].get(i)||0;this.observers[r].set(i,o+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}emit(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(u=>{let[d,f]=u;for(let h=0;h<f;h++)d(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[d,f]=u;for(let h=0;h<f;h++)d.apply(d,[e,...r])})}}class e5 extends su{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,r){var h,m;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let d;e.indexOf(".")>-1?d=e.split("."):(d=[e,i],r&&(Array.isArray(r)?d.push(...r):me(r)&&l?d.push(...r.split(l)):d.push(r)));const f=Bc(this.data,d);return!f&&!i&&!r&&e.indexOf(".")>-1&&(e=d[0],i=d[1],r=d.slice(2).join(".")),f||!u||!me(r)?f:xp((m=(h=this.data)==null?void 0:h[e])==null?void 0:m[i],r,l)}addResource(e,i,r,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let d=[e,i];r&&(d=d.concat(u?r.split(u):r)),e.indexOf(".")>-1&&(d=e.split("."),o=i,i=d[1]),this.addNamespaces(i),J4(this.data,d,o),l.silent||this.emit("added",e,i,r,o)}addResources(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in r)(me(r[l])||Array.isArray(r[l]))&&this.addResource(e,i,l,r[l],{silent:!0});o.silent||this.emit("added",e,i,r)}addResourceBundle(e,i,r,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},d=[e,i];e.indexOf(".")>-1&&(d=e.split("."),o=r,r=i,i=d[1]),this.addNamespaces(i);let f=Bc(this.data,d)||{};u.skipCopy||(r=JSON.parse(JSON.stringify(r))),o?kv(f,r,l):f={...f,...r},J4(this.data,d,f),u.silent||this.emit("added",e,i,r)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(o=>i[o]&&Object.keys(i[o]).length>0)}toJSON(){return this.data}}var Hv={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,r,o){return t.forEach(l=>{var u;e=((u=this.processors[l])==null?void 0:u.process(e,i,r,o))??e}),e}};const t5={},n5=t=>!me(t)&&typeof t!="boolean"&&typeof t!="number";class _c extends su{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),WV(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=zn.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const r=this.resolve(e,i);return(r==null?void 0:r.res)!==void 0}extractFromKey(e,i){let r=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=i.ns||this.options.defaultNS||[];const u=r&&e.indexOf(r)>-1,d=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!sz(e,r,o);if(u&&!d){const f=e.match(this.interpolator.nestingRegexp);if(f&&f.length>0)return{key:e,namespaces:me(l)?[l]:l};const h=e.split(r);(r!==o||r===o&&this.options.ns.indexOf(h[0])>-1)&&(l=h.shift()),e=h.join(o)}return{key:e,namespaces:me(l)?[l]:l}}translate(e,i,r){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const o=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:u,namespaces:d}=this.extractFromKey(e[e.length-1],i),f=d[d.length-1],h=i.lng||this.language,m=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(m){const F=i.nsSeparator||this.options.nsSeparator;return o?{res:`${f}${F}${u}`,usedKey:u,exactUsedKey:u,usedLng:h,usedNS:f,usedParams:this.getUsedParamsDetails(i)}:`${f}${F}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:h,usedNS:f,usedParams:this.getUsedParamsDetails(i)}:u}const y=this.resolve(e,i);let v=y==null?void 0:y.res;const S=(y==null?void 0:y.usedKey)||u,b=(y==null?void 0:y.exactUsedKey)||u,A=["[object Number]","[object Function]","[object RegExp]"],O=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,E=i.count!==void 0&&!me(i.count),T=_c.hasDefaultValue(i),D=E?this.pluralResolver.getSuffix(h,i.count,i):"",L=i.ordinal&&E?this.pluralResolver.getSuffix(h,i.count,{ordinal:!1}):"",P=E&&!i.ordinal&&i.count===0,V=P&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${D}`]||i[`defaultValue${L}`]||i.defaultValue;let U=v;j&&!v&&T&&(U=V);const $=n5(U),Y=Object.prototype.toString.apply(U);if(j&&U&&$&&A.indexOf(Y)<0&&!(me(O)&&Array.isArray(U))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const F=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,U,{...i,ns:d}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(y.res=F,y.usedParams=this.getUsedParamsDetails(i),y):F}if(l){const F=Array.isArray(U),te=F?[]:{},ie=F?b:S;for(const oe in U)if(Object.prototype.hasOwnProperty.call(U,oe)){const re=`${ie}${l}${oe}`;T&&!v?te[oe]=this.translate(re,{...i,defaultValue:n5(V)?V[oe]:void 0,joinArrays:!1,ns:d}):te[oe]=this.translate(re,{...i,joinArrays:!1,ns:d}),te[oe]===re&&(te[oe]=U[oe])}v=te}}else if(j&&me(O)&&Array.isArray(v))v=v.join(O),v&&(v=this.extendTranslation(v,e,i,r));else{let F=!1,te=!1;!this.isValidLookup(v)&&T&&(F=!0,v=V),this.isValidLookup(v)||(te=!0,v=u);const oe=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&te?void 0:v,re=T&&V!==v&&this.options.updateMissing;if(te||F||re){if(this.logger.log(re?"updateKey":"missingKey",h,f,u,re?V:v),l){const ee=this.resolve(u,{...i,keySeparator:!1});ee&&ee.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let B=[];const K=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&K&&K[0])for(let ee=0;ee<K.length;ee++)B.push(K[ee]);else this.options.saveMissingTo==="all"?B=this.languageUtils.toResolveHierarchy(i.lng||this.language):B.push(i.lng||this.language);const W=(ee,k,Z)=>{var ae;const ne=T&&Z!==v?Z:oe;this.options.missingKeyHandler?this.options.missingKeyHandler(ee,f,k,ne,re,i):(ae=this.backendConnector)!=null&&ae.saveMissing&&this.backendConnector.saveMissing(ee,f,k,ne,re,i),this.emit("missingKey",ee,f,k,v)};this.options.saveMissing&&(this.options.saveMissingPlurals&&E?B.forEach(ee=>{const k=this.pluralResolver.getSuffixes(ee,i);P&&i[`defaultValue${this.options.pluralSeparator}zero`]&&k.indexOf(`${this.options.pluralSeparator}zero`)<0&&k.push(`${this.options.pluralSeparator}zero`),k.forEach(Z=>{W([ee],u+Z,i[`defaultValue${Z}`]||V)})}):W(B,u,V))}v=this.extendTranslation(v,e,i,y,r),te&&v===u&&this.options.appendNamespaceToMissingKey&&(v=`${f}:${u}`),(te||F)&&this.options.parseMissingKeyHandler&&(v=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${f}:${u}`:u,F?v:void 0))}return o?(y.res=v,y.usedParams=this.getUsedParamsDetails(i),y):v}extendTranslation(e,i,r,o,l){var h,m;var u=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const y=me(e)&&(((m=r==null?void 0:r.interpolation)==null?void 0:m.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let v;if(y){const b=e.match(this.interpolator.nestingRegexp);v=b&&b.length}let S=r.replace&&!me(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(S={...this.options.interpolation.defaultVariables,...S}),e=this.interpolator.interpolate(e,S,r.lng||this.language||o.usedLng,r),y){const b=e.match(this.interpolator.nestingRegexp),A=b&&b.length;v<A&&(r.nest=!1)}!r.lng&&o&&o.res&&(r.lng=this.language||o.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var b=arguments.length,A=new Array(b),O=0;O<b;O++)A[O]=arguments[O];return(l==null?void 0:l[0])===A[0]&&!r.context?(u.logger.warn(`It seems you are nesting recursively key: ${A[0]} in key: ${i[0]}`),null):u.translate(...A,i)},r)),r.interpolation&&this.interpolator.reset()}const d=r.postProcess||this.options.postProcess,f=me(d)?[d]:d;return e!=null&&(f!=null&&f.length)&&r.applyPostProcessor!==!1&&(e=Hv.handle(f,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,o,l,u,d;return me(e)&&(e=[e]),e.forEach(f=>{if(this.isValidLookup(r))return;const h=this.extractFromKey(f,i),m=h.key;o=m;let y=h.namespaces;this.options.fallbackNS&&(y=y.concat(this.options.fallbackNS));const v=i.count!==void 0&&!me(i.count),S=v&&!i.ordinal&&i.count===0,b=i.context!==void 0&&(me(i.context)||typeof i.context=="number")&&i.context!=="",A=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);y.forEach(O=>{var j,E;this.isValidLookup(r)||(d=O,!t5[`${A[0]}-${O}`]&&((j=this.utils)!=null&&j.hasLoadedNamespace)&&!((E=this.utils)!=null&&E.hasLoadedNamespace(d))&&(t5[`${A[0]}-${O}`]=!0,this.logger.warn(`key "${o}" for languages "${A.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),A.forEach(T=>{var P;if(this.isValidLookup(r))return;u=T;const D=[m];if((P=this.i18nFormat)!=null&&P.addLookupKeys)this.i18nFormat.addLookupKeys(D,m,T,O,i);else{let V;v&&(V=this.pluralResolver.getSuffix(T,i.count,i));const U=`${this.options.pluralSeparator}zero`,$=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(v&&(D.push(m+V),i.ordinal&&V.indexOf($)===0&&D.push(m+V.replace($,this.options.pluralSeparator)),S&&D.push(m+U)),b){const Y=`${m}${this.options.contextSeparator}${i.context}`;D.push(Y),v&&(D.push(Y+V),i.ordinal&&V.indexOf($)===0&&D.push(Y+V.replace($,this.options.pluralSeparator)),S&&D.push(Y+U))}}let L;for(;L=D.pop();)this.isValidLookup(r)||(l=L,r=this.getResource(T,O,L,i))}))})}),{res:r,usedKey:o,exactUsedKey:l,usedLng:u,usedNS:d}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,r){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(e,i,r,o):this.resourceStore.getResource(e,i,r,o)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!me(e.replace);let o=r?e.replace:e;if(r&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!r){o={...o};for(const l of i)delete o[l]}return o}static hasDefaultValue(e){const i="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i===r.substring(0,i.length)&&e[r]!==void 0)return!0;return!1}}class i5{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=zn.create("languageUtils")}getScriptPartFromCode(e){if(e=$c(e),!e||e.indexOf("-")<0)return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=$c(e),!e||e.indexOf("-")<0)return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(me(e)&&e.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(e)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(r=>{if(i)return;const o=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(o))&&(i=o)}),!i&&this.options.supportedLngs&&e.forEach(r=>{if(i)return;const o=this.getLanguagePartFromCode(r);if(this.isSupportedCode(o))return i=o;i=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),me(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let r=e[i];return r||(r=e[this.getScriptPartFromCode(i)]),r||(r=e[this.formatLanguageCode(i)]),r||(r=e[this.getLanguagePartFromCode(i)]),r||(r=e.default),r||[]}toResolveHierarchy(e,i){const r=this.getFallbackCodes(i||this.options.fallbackLng||[],e),o=[],l=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return me(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(e))):me(e)&&l(this.formatLanguageCode(e)),r.forEach(u=>{o.indexOf(u)<0&&l(this.formatLanguageCode(u))}),o}}const a5={zero:0,one:1,two:2,few:3,many:4,other:5},r5={select:t=>t===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class lz{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=i,this.logger=zn.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,i){this.rules[e]=i}clearCache(){this.pluralRulesCache={}}getRule(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=$c(e==="dev"?"en":e),o=i.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:r,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let u;try{u=new Intl.PluralRules(r,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),r5;if(!e.match(/-|_/))return r5;const f=this.languageUtils.getLanguagePartFromCode(e);u=this.getRule(f,i)}return this.pluralRulesCache[l]=u,u}needsPlural(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(e,i);return r||(r=this.getRule("dev",i)),(r==null?void 0:r.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,r).map(o=>`${i}${o}`)}getSuffixes(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(e,i);return r||(r=this.getRule("dev",i)),r?r.resolvedOptions().pluralCategories.sort((o,l)=>a5[o]-a5[l]).map(o=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(e,r);return o?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(i)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",i,r))}}const s5=function(t,e,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=ez(t,e,i);return!l&&o&&me(i)&&(l=xp(t,i,r),l===void 0&&(l=xp(e,i,r))),l},M0=t=>t.replace(/\$/g,"$$$$");class cz{constructor(){var i;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=zn.create("interpolator"),this.options=e,this.format=((i=e==null?void 0:e.interpolation)==null?void 0:i.format)||(r=>r),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:r,useRawValueToEscape:o,prefix:l,prefixEscaped:u,suffix:d,suffixEscaped:f,formatSeparator:h,unescapeSuffix:m,unescapePrefix:y,nestingPrefix:v,nestingPrefixEscaped:S,nestingSuffix:b,nestingSuffixEscaped:A,nestingOptionsSeparator:O,maxReplaces:j,alwaysFormat:E}=e.interpolation;this.escape=i!==void 0?i:nz,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?ur(l):u||"{{",this.suffix=d?ur(d):f||"}}",this.formatSeparator=h||",",this.unescapePrefix=m?"":y||"-",this.unescapeSuffix=this.unescapePrefix?"":m||"",this.nestingPrefix=v?ur(v):S||ur("$t("),this.nestingSuffix=b?ur(b):A||ur(")"),this.nestingOptionsSeparator=O||",",this.maxReplaces=j||1e3,this.alwaysFormat=E!==void 0?E:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,r)=>(i==null?void 0:i.source)===r?(i.lastIndex=0,i):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,i,r,o){var S;let l,u,d;const f=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=b=>{if(b.indexOf(this.formatSeparator)<0){const E=s5(i,f,b,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(E,void 0,r,{...o,...i,interpolationkey:b}):E}const A=b.split(this.formatSeparator),O=A.shift().trim(),j=A.join(this.formatSeparator).trim();return this.format(s5(i,f,O,this.options.keySeparator,this.options.ignoreJSONStructure),j,r,{...o,...i,interpolationkey:O})};this.resetRegExp();const m=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,y=((S=o==null?void 0:o.interpolation)==null?void 0:S.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:b=>M0(b)},{regex:this.regexp,safeValue:b=>this.escapeValue?M0(this.escape(b)):M0(b)}].forEach(b=>{for(d=0;l=b.regex.exec(e);){const A=l[1].trim();if(u=h(A),u===void 0)if(typeof m=="function"){const j=m(e,l,o);u=me(j)?j:""}else if(o&&Object.prototype.hasOwnProperty.call(o,A))u="";else if(y){u=l[0];continue}else this.logger.warn(`missed to pass in variable ${A} for interpolating ${e}`),u="";else!me(u)&&!this.useRawValueToEscape&&(u=K4(u));const O=b.safeValue(u);if(e=e.replace(l[0],O),y?(b.regex.lastIndex+=u.length,b.regex.lastIndex-=l[0].length):b.regex.lastIndex=0,d++,d>=this.maxReplaces)break}}),e}nest(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,u;const d=(f,h)=>{const m=this.nestingOptionsSeparator;if(f.indexOf(m)<0)return f;const y=f.split(new RegExp(`${m}[ ]*{`));let v=`{${y[1]}`;f=y[0],v=this.interpolate(v,u);const S=v.match(/'/g),b=v.match(/"/g);(((S==null?void 0:S.length)??0)%2===0&&!b||b.length%2!==0)&&(v=v.replace(/'/g,'"'));try{u=JSON.parse(v),h&&(u={...h,...u})}catch(A){return this.logger.warn(`failed parsing options string in nesting for key ${f}`,A),`${f}${m}${v}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,f};for(;o=this.nestingRegexp.exec(e);){let f=[];u={...r},u=u.replace&&!me(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let h=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const m=o[1].split(this.formatSeparator).map(y=>y.trim());o[1]=m.shift(),f=m,h=!0}if(l=i(d.call(this,o[1].trim(),u),u),l&&o[0]===e&&!me(l))return l;me(l)||(l=K4(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),l=""),h&&(l=f.reduce((m,y)=>this.format(m,y,r.lng,{...r,interpolationkey:o[1].trim()}),l.trim())),e=e.replace(o[0],l),this.regexp.lastIndex=0}return e}}const uz=t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);e==="currency"&&o.indexOf(":")<0?i.currency||(i.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?i.range||(i.range=o.trim()):o.split(";").forEach(u=>{if(u){const[d,...f]=u.split(":"),h=f.join(":").trim().replace(/^'+|'+$/g,""),m=d.trim();i[m]||(i[m]=h),h==="false"&&(i[m]=!1),h==="true"&&(i[m]=!0),isNaN(h)||(i[m]=parseInt(h,10))}})}return{formatName:e,formatOptions:i}},dr=t=>{const e={};return(i,r,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const u=r+JSON.stringify(l);let d=e[u];return d||(d=t($c(r),o),e[u]=d),d(i)}};class dz{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=zn.create("formatter"),this.options=e,this.formats={number:dr((i,r)=>{const o=new Intl.NumberFormat(i,{...r});return l=>o.format(l)}),currency:dr((i,r)=>{const o=new Intl.NumberFormat(i,{...r,style:"currency"});return l=>o.format(l)}),datetime:dr((i,r)=>{const o=new Intl.DateTimeFormat(i,{...r});return l=>o.format(l)}),relativetime:dr((i,r)=>{const o=new Intl.RelativeTimeFormat(i,{...r});return l=>o.format(l,r.range||"day")}),list:dr((i,r)=>{const o=new Intl.ListFormat(i,{...r});return l=>o.format(l)})},this.init(e)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=dr(i)}format(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=i.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(d=>d.indexOf(")")>-1)){const d=l.findIndex(f=>f.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,d)].join(this.formatSeparator)}return l.reduce((d,f)=>{var y;const{formatName:h,formatOptions:m}=uz(f);if(this.formats[h]){let v=d;try{const S=((y=o==null?void 0:o.formatParams)==null?void 0:y[o.interpolationkey])||{},b=S.locale||S.lng||o.locale||o.lng||r;v=this.formats[h](d,b,{...m,...o,...S})}catch(S){this.logger.warn(S)}return v}else this.logger.warn(`there was no format function for ${h}`);return d},e)}}const fz=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class pz extends su{constructor(e,i,r){var l,u;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=i,this.services=r,this.languageUtils=r.languageUtils,this.options=o,this.logger=zn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(u=(l=this.backend)==null?void 0:l.init)==null||u.call(l,r,o.backend,o)}queueLoad(e,i,r,o){const l={},u={},d={},f={};return e.forEach(h=>{let m=!0;i.forEach(y=>{const v=`${h}|${y}`;!r.reload&&this.store.hasResourceBundle(h,y)?this.state[v]=2:this.state[v]<0||(this.state[v]===1?u[v]===void 0&&(u[v]=!0):(this.state[v]=1,m=!1,u[v]===void 0&&(u[v]=!0),l[v]===void 0&&(l[v]=!0),f[y]===void 0&&(f[y]=!0)))}),m||(d[h]=!0)}),(Object.keys(l).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(u),toLoadLanguages:Object.keys(d),toLoadNamespaces:Object.keys(f)}}loaded(e,i,r){const o=e.split("|"),l=o[0],u=o[1];i&&this.emit("failedLoading",l,u,i),!i&&r&&this.store.addResourceBundle(l,u,r,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&r&&(this.state[e]=0);const d={};this.queue.forEach(f=>{JV(f.loaded,[l],u),fz(f,e),i&&f.errors.push(i),f.pendingCount===0&&!f.done&&(Object.keys(f.loaded).forEach(h=>{d[h]||(d[h]={});const m=f.loaded[h];m.length&&m.forEach(y=>{d[h][y]===void 0&&(d[h][y]=!0)})}),f.done=!0,f.errors.length?f.callback(f.errors):f.callback())}),this.emit("loaded",d),this.queue=this.queue.filter(f=>!f.done)}read(e,i,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!e.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:r,tried:o,wait:l,callback:u});return}this.readingCalls++;const d=(h,m)=>{if(this.readingCalls--,this.waitingReads.length>0){const y=this.waitingReads.shift();this.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(h&&m&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,i,r,o+1,l*2,u)},l);return}u(h,m)},f=this.backend[r].bind(this.backend);if(f.length===2){try{const h=f(e,i);h&&typeof h.then=="function"?h.then(m=>d(null,m)).catch(d):d(null,h)}catch(h){d(h)}return}return f(e,i,d)}prepareLoading(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();me(e)&&(e=this.languageUtils.toResolveHierarchy(e)),me(i)&&(i=[i]);const l=this.queueLoad(e,i,r,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(u=>{this.loadOne(u)})}load(e,i,r){this.prepareLoading(e,i,{},r)}reload(e,i,r){this.prepareLoading(e,i,{reload:!0},r)}loadOne(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=e.split("|"),o=r[0],l=r[1];this.read(o,l,"read",void 0,void 0,(u,d)=>{u&&this.logger.warn(`${i}loading namespace ${l} for language ${o} failed`,u),!u&&d&&this.logger.log(`${i}loaded namespace ${l} for language ${o}`,d),this.loaded(e,u,d)})}saveMissing(e,i,r,o,l){var f,h,m,y,v;let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(f=this.services)==null?void 0:f.utils)!=null&&h.hasLoadedNamespace&&!((y=(m=this.services)==null?void 0:m.utils)!=null&&y.hasLoadedNamespace(i))){this.logger.warn(`did not save key "${r}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if((v=this.backend)!=null&&v.create){const S={...u,isUpdate:l},b=this.backend.create.bind(this.backend);if(b.length<6)try{let A;b.length===5?A=b(e,i,r,o,S):A=b(e,i,r,o),A&&typeof A.then=="function"?A.then(O=>d(null,O)).catch(d):d(null,A)}catch(A){d(A)}else b(e,i,r,o,d,S)}!e||!e[0]||this.store.addResource(e[0],i,r,o)}}}const o5=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),me(t[1])&&(e.defaultValue=t[1]),me(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const i=t[3]||t[2];Object.keys(i).forEach(r=>{e[r]=i[r]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),l5=t=>{var e,i;return me(t.ns)&&(t.ns=[t.ns]),me(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),me(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),((i=(e=t.supportedLngs)==null?void 0:e.indexOf)==null?void 0:i.call(e,"cimode"))<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),typeof t.initImmediate=="boolean"&&(t.initAsync=t.initImmediate),t},sc=()=>{},hz=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(i=>{typeof t[i]=="function"&&(t[i]=t[i].bind(t))})};class go extends su{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=l5(e),this.services={},this.logger=zn,this.modules={external:[]},hz(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(){var e=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(r=i,i={}),i.defaultNS==null&&i.ns&&(me(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=o5();this.options={...o,...this.options,...l5(i)},this.options.interpolation={...o.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const l=m=>m?typeof m=="function"?new m:m:null;if(!this.options.isClone){this.modules.logger?zn.init(l(this.modules.logger),this.options):zn.init(null,this.options);let m;this.modules.formatter?m=this.modules.formatter:m=dz;const y=new i5(this.options);this.store=new e5(this.options.resources,this.options);const v=this.services;v.logger=zn,v.resourceStore=this.store,v.languageUtils=y,v.pluralResolver=new lz(y,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),m&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=l(m),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new cz(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new pz(l(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",function(S){for(var b=arguments.length,A=new Array(b>1?b-1:0),O=1;O<b;O++)A[O-1]=arguments[O];e.emit(S,...A)}),this.modules.languageDetector&&(v.languageDetector=l(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=l(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new _c(this.services,this.options),this.translator.on("*",function(S){for(var b=arguments.length,A=new Array(b>1?b-1:0),O=1;O<b;O++)A[O-1]=arguments[O];e.emit(S,...A)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,r||(r=sc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(m=>{this[m]=function(){return e.store[m](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(m=>{this[m]=function(){return e.store[m](...arguments),e}});const f=Ys(),h=()=>{const m=(y,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),f.resolve(v),r(y,v)};if(this.languages&&!this.isInitialized)return m(null,this.t.bind(this));this.changeLanguage(this.options.lng,m)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),f}loadResources(e){var l,u;let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:sc;const o=me(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const d=[],f=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(y=>{y!=="cimode"&&d.indexOf(y)<0&&d.push(y)})};o?f(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(m=>f(m)),(u=(l=this.options.preload)==null?void 0:l.forEach)==null||u.call(l,h=>f(h)),this.services.backendConnector.load(d,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(h)})}else r(null)}reloadResources(e,i,r){const o=Ys();return typeof e=="function"&&(r=e,e=void 0),typeof i=="function"&&(r=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),r||(r=sc),this.services.backendConnector.reload(e,i,l=>{o.resolve(),r(l)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Hv.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let i=0;i<this.languages.length;i++){const r=this.languages[i];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(e,i){var r=this;this.isLanguageChangingTo=e;const o=Ys();this.emit("languageChanging",e);const l=f=>{this.language=f,this.languages=this.services.languageUtils.toResolveHierarchy(f),this.resolvedLanguage=void 0,this.setResolvedLanguage(f)},u=(f,h)=>{h?(l(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,o.resolve(function(){return r.t(...arguments)}),i&&i(f,function(){return r.t(...arguments)})},d=f=>{var m,y;!e&&!f&&this.services.languageDetector&&(f=[]);const h=me(f)?f:this.services.languageUtils.getBestMatchFromCodes(f);h&&(this.language||l(h),this.translator.language||this.translator.changeLanguage(h),(y=(m=this.services.languageDetector)==null?void 0:m.cacheUserLanguage)==null||y.call(m,h)),this.loadResources(h,v=>{u(v,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?d(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(d):this.services.languageDetector.detect(d):d(e),o}getFixedT(e,i,r){var o=this;const l=function(u,d){let f;if(typeof d!="object"){for(var h=arguments.length,m=new Array(h>2?h-2:0),y=2;y<h;y++)m[y-2]=arguments[y];f=o.options.overloadTranslationOptionHandler([u,d].concat(m))}else f={...d};f.lng=f.lng||l.lng,f.lngs=f.lngs||l.lngs,f.ns=f.ns||l.ns,f.keyPrefix!==""&&(f.keyPrefix=f.keyPrefix||r||l.keyPrefix);const v=o.options.keySeparator||".";let S;return f.keyPrefix&&Array.isArray(u)?S=u.map(b=>`${f.keyPrefix}${v}${b}`):S=f.keyPrefix?`${f.keyPrefix}${v}${u}`:u,o.t(S,f)};return me(e)?l.lng=e:l.lngs=e,l.ns=i,l.keyPrefix=r,l}t(){var o;for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(o=this.translator)==null?void 0:o.translate(...i)}exists(){var o;for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(o=this.translator)==null?void 0:o.exists(...i)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=i.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const u=(d,f)=>{const h=this.services.backendConnector.state[`${d}|${f}`];return h===-1||h===0||h===2};if(i.precheck){const d=i.precheck(this,u);if(d!==void 0)return d}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(r,e)&&(!o||u(l,e)))}loadNamespaces(e,i){const r=Ys();return this.options.ns?(me(e)&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{r.resolve(),i&&i(o)}),r):(i&&i(),Promise.resolve())}loadLanguages(e,i){const r=Ys();me(e)&&(e=[e]);const o=this.options.preload||[],l=e.filter(u=>o.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return l.length?(this.options.preload=o.concat(l),this.loadResources(u=>{r.resolve(),i&&i(u)}),r):(i&&i(),Promise.resolve())}dir(e){var o,l;if(e||(e=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!e)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=((l=this.services)==null?void 0:l.languageUtils)||new i5(o5());return i.indexOf(r.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new go(e,i)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:sc;const r=e.forkResourceStore;r&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},l=new go(o);if((e.debug!==void 0||e.prefix!==void 0)&&(l.logger=l.logger.clone(e)),["store","services","language"].forEach(d=>{l[d]=this[d]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},r){const d=Object.keys(this.store.data).reduce((f,h)=>(f[h]={...this.store.data[h]},Object.keys(f[h]).reduce((m,y)=>(m[y]={...f[h][y]},m),{})),{});l.store=new e5(d,o),l.services.resourceStore=l.store}return l.translator=new _c(l.services,o),l.translator.on("*",function(d){for(var f=arguments.length,h=new Array(f>1?f-1:0),m=1;m<f;m++)h[m-1]=arguments[m];l.emit(d,...h)}),l.init(o,i),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const At=go.createInstance();At.createInstance=go.createInstance;At.createInstance;At.dir;At.init;At.loadResources;At.reloadResources;At.use;At.changeLanguage;At.getFixedT;At.t;At.exists;At.setDefaultNamespace;At.hasLoadedNamespace;At.loadNamespaces;At.loadLanguages;function yp(t){"@babel/helpers - typeof";return yp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yp(t)}function Vv(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":yp(XMLHttpRequest))==="object"}function mz(t){return!!t&&typeof t.then=="function"}function gz(t){return mz(t)?t:Promise.resolve(t)}const xz="modulepreload",yz=function(t){return"/"+t},c5={},vz=function(e,i,r){let o=Promise.resolve();if(i&&i.length>0){let u=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=u(i.map(h=>{if(h=yz(h),h in c5)return;c5[h]=!0;const m=h.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${y}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":xz,m||(v.as="script"),v.crossOrigin="",v.href=h,f&&v.setAttribute("nonce",f),document.head.appendChild(v),m)return new Promise((S,b)=>{v.addEventListener("load",S),v.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return o.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};function u5(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function d5(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?u5(Object(i),!0).forEach(function(r){wz(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u5(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function wz(t,e,i){return(e=bz(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function bz(t){var e=Sz(t,"string");return Sa(e)=="symbol"?e:e+""}function Sz(t,e){if(Sa(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e);if(Sa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Sa(t){"@babel/helpers - typeof";return Sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sa(t)}var Gi=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?Gi=global.fetch:typeof window<"u"&&window.fetch&&(Gi=window.fetch);var xo;Vv()&&(typeof global<"u"&&global.XMLHttpRequest?xo=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(xo=window.XMLHttpRequest));var Ic;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Ic=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Ic=window.ActiveXObject));typeof Gi!="function"&&(Gi=void 0);if(!Gi&&!xo&&!Ic)try{vz(()=>import("./browser-ponyfill-TpSCKBWZ.js").then(t=>t.b),[]).then(function(t){Gi=t.default}).catch(function(){})}catch{}var vp=function(e,i){if(i&&Sa(i)==="object"){var r="";for(var o in i)r+="&"+encodeURIComponent(o)+"="+encodeURIComponent(i[o]);if(!r)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+r.slice(1)}return e},f5=function(e,i,r,o){var l=function(f){if(!f.ok)return r(f.statusText||"Error",{status:f.status});f.text().then(function(h){r(null,{status:f.status,data:h})}).catch(r)};if(o){var u=o(e,i);if(u instanceof Promise){u.then(l).catch(r);return}}typeof fetch=="function"?fetch(e,i).then(l).catch(r):Gi(e,i).then(l).catch(r)},p5=!1,Cz=function(e,i,r,o){e.queryStringParams&&(i=vp(i,e.queryStringParams));var l=d5({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),r&&(l["Content-Type"]="application/json");var u=typeof e.requestOptions=="function"?e.requestOptions(r):e.requestOptions,d=d5({method:r?"POST":"GET",body:r?e.stringify(r):void 0,headers:l},p5?{}:u),f=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{f5(i,d,o,f)}catch(h){if(!u||Object.keys(u).length===0||!h.message||h.message.indexOf("not implemented")<0)return o(h);try{Object.keys(u).forEach(function(m){delete d[m]}),f5(i,d,o,f),p5=!0}catch(m){o(m)}}},Tz=function(e,i,r,o){r&&Sa(r)==="object"&&(r=vp("",r).slice(1)),e.queryStringParams&&(i=vp(i,e.queryStringParams));try{var l=xo?new xo:new Ic("MSXML2.XMLHTTP.3.0");l.open(r?"POST":"GET",i,1),e.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!e.withCredentials,r&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var u=e.customHeaders;if(u=typeof u=="function"?u():u,u)for(var d in u)l.setRequestHeader(d,u[d]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(r)}catch(f){console&&console.log(f)}},Ez=function(e,i,r,o){if(typeof r=="function"&&(o=r,r=void 0),o=o||function(){},Gi&&i.indexOf("file:")!==0)return Cz(e,i,r,o);if(Vv()||typeof ActiveXObject=="function")return Tz(e,i,r,o);o(new Error("No fetch and no xhr implementation found!"))};function Rr(t){"@babel/helpers - typeof";return Rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rr(t)}function h5(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function j0(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?h5(Object(i),!0).forEach(function(r){zv(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h5(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function Az(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Mz(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Pv(r.key),r)}}function jz(t,e,i){return e&&Mz(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function zv(t,e,i){return(e=Pv(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Pv(t){var e=Lz(t,"string");return Rr(e)=="symbol"?e:e+""}function Lz(t,e){if(Rr(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e);if(Rr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Oz=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(i){return JSON.parse(i)},stringify:JSON.stringify,parsePayload:function(i,r,o){return zv({},r,o||"")},parseLoadPayload:function(i,r){},request:Ez,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Nv=function(){function t(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Az(this,t),this.services=e,this.options=i,this.allOptions=r,this.type="backend",this.init(e,i,r)}return jz(t,[{key:"init",value:function(i){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=i,this.options=j0(j0(j0({},Oz()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var u=setInterval(function(){return r.reload()},this.options.reloadInterval);Rr(u)==="object"&&typeof u.unref=="function"&&u.unref()}}},{key:"readMulti",value:function(i,r,o){this._readAny(i,i,r,r,o)}},{key:"read",value:function(i,r,o){this._readAny([i],i,[r],r,o)}},{key:"_readAny",value:function(i,r,o,l,u){var d=this,f=this.options.loadPath;typeof this.options.loadPath=="function"&&(f=this.options.loadPath(i,o)),f=gz(f),f.then(function(h){if(!h)return u(null,{});var m=d.services.interpolator.interpolate(h,{lng:i.join("+"),ns:o.join("+")});d.loadUrl(m,u,r,l)})}},{key:"loadUrl",value:function(i,r,o,l){var u=this,d=typeof o=="string"?[o]:o,f=typeof l=="string"?[l]:l,h=this.options.parseLoadPayload(d,f);this.options.request(this.options,i,h,function(m,y){if(y&&(y.status>=500&&y.status<600||!y.status))return r("failed loading "+i+"; status code: "+y.status,!0);if(y&&y.status>=400&&y.status<500)return r("failed loading "+i+"; status code: "+y.status,!1);if(!y&&m&&m.message){var v=m.message.toLowerCase(),S=["failed","fetch","network","load"].find(function(O){return v.indexOf(O)>-1});if(S)return r("failed loading "+i+": "+m.message,!0)}if(m)return r(m,!1);var b,A;try{typeof y.data=="string"?b=u.options.parse(y.data,o,l):b=y.data}catch{A="failed parsing "+i+" to json"}if(A)return r(A,!1);r(null,b)})}},{key:"create",value:function(i,r,o,l,u){var d=this;if(this.options.addPath){typeof i=="string"&&(i=[i]);var f=this.options.parsePayload(r,o,l),h=0,m=[],y=[];i.forEach(function(v){var S=d.options.addPath;typeof d.options.addPath=="function"&&(S=d.options.addPath(v,r));var b=d.services.interpolator.interpolate(S,{lng:v,ns:r});d.options.request(d.options,b,f,function(A,O){h+=1,m.push(A),y.push(O),h===i.length&&typeof u=="function"&&u(m,y)})})}}},{key:"reload",value:function(){var i=this,r=this.services,o=r.backendConnector,l=r.languageUtils,u=r.logger,d=o.language;if(!(d&&d.toLowerCase()==="cimode")){var f=[],h=function(y){var v=l.toResolveHierarchy(y);v.forEach(function(S){f.indexOf(S)<0&&f.push(S)})};h(d),this.allOptions.preload&&this.allOptions.preload.forEach(function(m){return h(m)}),f.forEach(function(m){i.allOptions.ns.forEach(function(y){o.read(m,y,"read",null,null,function(v,S){v&&u.warn("loading namespace ".concat(y," for language ").concat(m," failed"),v),!v&&S&&u.log("loaded namespace ".concat(y," for language ").concat(m),S),o.loaded("".concat(m,"|").concat(y),v,S)})})})}}}])}();Nv.type="backend";const{slice:Rz,forEach:Dz}=[];function kz(t){return Dz.call(Rz.call(arguments,1),e=>{if(e)for(const i in e)t[i]===void 0&&(t[i]=e[i])}),t}function Hz(t){return typeof t!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(i=>i.test(t))}const m5=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Vz=function(t,e){const r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(e);let l=`${t}=${o}`;if(r.maxAge>0){const u=r.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(u)}`}if(r.domain){if(!m5.test(r.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${r.domain}`}if(r.path){if(!m5.test(r.path))throw new TypeError("option path is invalid");l+=`; Path=${r.path}`}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${r.expires.toUTCString()}`}if(r.httpOnly&&(l+="; HttpOnly"),r.secure&&(l+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(l+="; Partitioned"),l},g5={create(t,e,i,r){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};i&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+i*60*1e3)),r&&(o.domain=r),document.cookie=Vz(t,e,o)},read(t){const e=`${t}=`,i=document.cookie.split(";");for(let r=0;r<i.length;r++){let o=i[r];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(e)===0)return o.substring(e.length,o.length)}return null},remove(t,e){this.create(t,"",-1,e)}};var zz={name:"cookie",lookup(t){let{lookupCookie:e}=t;if(e&&typeof document<"u")return g5.read(e)||void 0},cacheUserLanguage(t,e){let{lookupCookie:i,cookieMinutes:r,cookieDomain:o,cookieOptions:l}=e;i&&typeof document<"u"&&g5.create(i,t,r,o,l)}},Pz={name:"querystring",lookup(t){var r;let{lookupQuerystring:e}=t,i;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((r=window.location.hash)==null?void 0:r.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let d=0;d<u.length;d++){const f=u[d].indexOf("=");f>0&&u[d].substring(0,f)===e&&(i=u[d].substring(f+1))}}return i}},Nz={name:"hash",lookup(t){var o;let{lookupHash:e,lookupFromHashIndex:i}=t,r;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const u=l.substring(1);if(e){const d=u.split("&");for(let f=0;f<d.length;f++){const h=d[f].indexOf("=");h>0&&d[f].substring(0,h)===e&&(r=d[f].substring(h+1))}}if(r)return r;if(!r&&i>-1){const d=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(d)?(o=d[typeof i=="number"?i:0])==null?void 0:o.replace("/",""):void 0}}}return r}};let fr=null;const x5=()=>{if(fr!==null)return fr;try{if(fr=typeof window<"u"&&window.localStorage!==null,!fr)return!1;const t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{fr=!1}return fr};var Bz={name:"localStorage",lookup(t){let{lookupLocalStorage:e}=t;if(e&&x5())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupLocalStorage:i}=e;i&&x5()&&window.localStorage.setItem(i,t)}};let pr=null;const y5=()=>{if(pr!==null)return pr;try{if(pr=typeof window<"u"&&window.sessionStorage!==null,!pr)return!1;const t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{pr=!1}return pr};var $z={name:"sessionStorage",lookup(t){let{lookupSessionStorage:e}=t;if(e&&y5())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupSessionStorage:i}=e;i&&y5()&&window.sessionStorage.setItem(i,t)}},Uz={name:"navigator",lookup(t){const e=[];if(typeof navigator<"u"){const{languages:i,userLanguage:r,language:o}=navigator;if(i)for(let l=0;l<i.length;l++)e.push(i[l]);r&&e.push(r),o&&e.push(o)}return e.length>0?e:void 0}},_z={name:"htmlTag",lookup(t){let{htmlTag:e}=t,i;const r=e||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(i=r.getAttribute("lang")),i}},Iz={name:"path",lookup(t){var o;let{lookupFromPathIndex:e}=t;if(typeof window>"u")return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(i)?(o=i[typeof e=="number"?e:0])==null?void 0:o.replace("/",""):void 0}},Gz={name:"subdomain",lookup(t){var o,l;let{lookupFromSubdomainIndex:e}=t;const i=typeof e=="number"?e+1:1,r=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(r)return r[i]}};let Bv=!1;try{document.cookie,Bv=!0}catch{}const $v=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Bv||$v.splice(1,1);const qz=()=>({order:$v,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:t=>t});class Uv{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,i)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=kz(i,this.options||{},qz()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(zz),this.addDetector(Pz),this.addDetector(Bz),this.addDetector($z),this.addDetector(Uz),this.addDetector(_z),this.addDetector(Iz),this.addDetector(Gz),this.addDetector(Nz)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,i=[];return e.forEach(r=>{if(this.detectors[r]){let o=this.detectors[r].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(i=i.concat(o))}}),i=i.filter(r=>r!=null&&!Hz(r)).map(r=>this.options.convertDetectedLanguage(r)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}cacheUserLanguage(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;i&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||i.forEach(r=>{this.detectors[r]&&this.detectors[r].cacheUserLanguage(e,this.options)}))}}Uv.type="languageDetector";At.use(Nv).use(Uv).use(wj).init({supportedLngs:["en","ru","es","uk"],fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const Yz=R.createContext(void 0),Fz=({children:t})=>{const{i18n:e}=vh(),i=r=>{e.changeLanguage(r).then(()=>{window.location.reload()})};return x.jsx(Yz.Provider,{value:{language:e.language,setLanguage:i},children:t})};bw.createRoot(document.getElementById("root")).render(x.jsxs(Le.StrictMode,{children:[x.jsx($b,{styles:Yb}),x.jsx(B9,{basename:"/",children:x.jsx(Fz,{children:x.jsx(KV,{})})})]}));export{Zz as c,Gc as g};
