function T9(e,t){for(var i=0;i<t.length;i++){const a=t[i];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const c=Object.getOwnPropertyDescriptor(a,o);c&&Object.defineProperty(e,o,c.get?c:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var $1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function l2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fg={exports:{}},S0={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy;function A9(){if(Vy)return S0;Vy=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:e,type:a,key:f,ref:o!==void 0?o:null,props:c}}return S0.Fragment=t,S0.jsx=i,S0.jsxs=i,S0}var _y;function E9(){return _y||(_y=1,Fg.exports=A9()),Fg.exports}var m=E9(),Wg={exports:{}},C0={},Zg={exports:{}},Xg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny;function M9(){return Ny||(Ny=1,function(e){function t(Z,le){var ue=Z.length;Z.push(le);e:for(;0<ue;){var xe=ue-1>>>1,B=Z[xe];if(0<o(B,le))Z[xe]=le,Z[ue]=B,ue=xe;else break e}}function i(Z){return Z.length===0?null:Z[0]}function a(Z){if(Z.length===0)return null;var le=Z[0],ue=Z.pop();if(ue!==le){Z[0]=ue;e:for(var xe=0,B=Z.length,re=B>>>1;xe<re;){var we=2*(xe+1)-1,be=Z[we],Re=we+1,$e=Z[Re];if(0>o(be,ue))Re<B&&0>o($e,be)?(Z[xe]=$e,Z[Re]=ue,xe=Re):(Z[xe]=be,Z[we]=ue,xe=we);else if(Re<B&&0>o($e,ue))Z[xe]=$e,Z[Re]=ue,xe=Re;else break e}}return le}function o(Z,le){var ue=Z.sortIndex-le.sortIndex;return ue!==0?ue:Z.id-le.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();e.unstable_now=function(){return f.now()-p}}var h=[],x=[],y=1,b=null,S=3,E=!1,A=!1,k=!1,_=!1,R=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function P(Z){for(var le=i(x);le!==null;){if(le.callback===null)a(x);else if(le.startTime<=Z)a(x),le.sortIndex=le.expirationTime,t(h,le);else break;le=i(x)}}function V(Z){if(k=!1,P(Z),!A)if(i(h)!==null)A=!0,F||(F=!0,ye());else{var le=i(x);le!==null&&Ae(V,le.startTime-Z)}}var F=!1,G=-1,Q=5,ne=-1;function se(){return _?!0:!(e.unstable_now()-ne<Q)}function de(){if(_=!1,F){var Z=e.unstable_now();ne=Z;var le=!0;try{e:{A=!1,k&&(k=!1,O(G),G=-1),E=!0;var ue=S;try{t:{for(P(Z),b=i(h);b!==null&&!(b.expirationTime>Z&&se());){var xe=b.callback;if(typeof xe=="function"){b.callback=null,S=b.priorityLevel;var B=xe(b.expirationTime<=Z);if(Z=e.unstable_now(),typeof B=="function"){b.callback=B,P(Z),le=!0;break t}b===i(h)&&a(h),P(Z)}else a(h);b=i(h)}if(b!==null)le=!0;else{var re=i(x);re!==null&&Ae(V,re.startTime-Z),le=!1}}break e}finally{b=null,S=ue,E=!1}le=void 0}}finally{le?ye():F=!1}}}var ye;if(typeof L=="function")ye=function(){L(de)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,Oe=Ee.port2;Ee.port1.onmessage=de,ye=function(){Oe.postMessage(null)}}else ye=function(){R(de,0)};function Ae(Z,le){G=R(function(){Z(e.unstable_now())},le)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Z){Z.callback=null},e.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<Z?Math.floor(1e3/Z):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_next=function(Z){switch(S){case 1:case 2:case 3:var le=3;break;default:le=S}var ue=S;S=le;try{return Z()}finally{S=ue}},e.unstable_requestPaint=function(){_=!0},e.unstable_runWithPriority=function(Z,le){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ue=S;S=Z;try{return le()}finally{S=ue}},e.unstable_scheduleCallback=function(Z,le,ue){var xe=e.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?xe+ue:xe):ue=xe,Z){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ue+B,Z={id:y++,callback:le,priorityLevel:Z,startTime:ue,expirationTime:B,sortIndex:-1},ue>xe?(Z.sortIndex=ue,t(x,Z),i(h)===null&&Z===i(x)&&(k?(O(G),G=-1):k=!0,Ae(V,ue-xe))):(Z.sortIndex=B,t(h,Z),A||E||(A=!0,F||(F=!0,ye()))),Z},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(Z){var le=S;return function(){var ue=S;S=le;try{return Z.apply(this,arguments)}finally{S=ue}}}}(Xg)),Xg}var Py;function j9(){return Py||(Py=1,Zg.exports=M9()),Zg.exports}var Kg={exports:{}},Ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By;function O9(){if(By)return Ye;By=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function S(B){return B===null||typeof B!="object"?null:(B=b&&B[b]||B["@@iterator"],typeof B=="function"?B:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,k={};function _(B,re,we){this.props=B,this.context=re,this.refs=k,this.updater=we||E}_.prototype.isReactComponent={},_.prototype.setState=function(B,re){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,re,"setState")},_.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function R(){}R.prototype=_.prototype;function O(B,re,we){this.props=B,this.context=re,this.refs=k,this.updater=we||E}var L=O.prototype=new R;L.constructor=O,A(L,_.prototype),L.isPureReactComponent=!0;var P=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function G(B,re,we,be,Re,$e){return we=$e.ref,{$$typeof:e,type:B,key:re,ref:we!==void 0?we:null,props:$e}}function Q(B,re){return G(B.type,re,void 0,void 0,void 0,B.props)}function ne(B){return typeof B=="object"&&B!==null&&B.$$typeof===e}function se(B){var re={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(we){return re[we]})}var de=/\/+/g;function ye(B,re){return typeof B=="object"&&B!==null&&B.key!=null?se(""+B.key):re.toString(36)}function Ee(){}function Oe(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(Ee,Ee):(B.status="pending",B.then(function(re){B.status==="pending"&&(B.status="fulfilled",B.value=re)},function(re){B.status==="pending"&&(B.status="rejected",B.reason=re)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function Ae(B,re,we,be,Re){var $e=typeof B;($e==="undefined"||$e==="boolean")&&(B=null);var ke=!1;if(B===null)ke=!0;else switch($e){case"bigint":case"string":case"number":ke=!0;break;case"object":switch(B.$$typeof){case e:case t:ke=!0;break;case y:return ke=B._init,Ae(ke(B._payload),re,we,be,Re)}}if(ke)return Re=Re(B),ke=be===""?"."+ye(B,0):be,P(Re)?(we="",ke!=null&&(we=ke.replace(de,"$&/")+"/"),Ae(Re,re,we,"",function(Ft){return Ft})):Re!=null&&(ne(Re)&&(Re=Q(Re,we+(Re.key==null||B&&B.key===Re.key?"":(""+Re.key).replace(de,"$&/")+"/")+ke)),re.push(Re)),1;ke=0;var ln=be===""?".":be+":";if(P(B))for(var it=0;it<B.length;it++)be=B[it],$e=ln+ye(be,it),ke+=Ae(be,re,we,$e,Re);else if(it=S(B),typeof it=="function")for(B=it.call(B),it=0;!(be=B.next()).done;)be=be.value,$e=ln+ye(be,it++),ke+=Ae(be,re,we,$e,Re);else if($e==="object"){if(typeof B.then=="function")return Ae(Oe(B),re,we,be,Re);throw re=String(B),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return ke}function Z(B,re,we){if(B==null)return B;var be=[],Re=0;return Ae(B,be,"","",function($e){return re.call(we,$e,Re++)}),be}function le(B){if(B._status===-1){var re=B._result;re=re(),re.then(function(we){(B._status===0||B._status===-1)&&(B._status=1,B._result=we)},function(we){(B._status===0||B._status===-1)&&(B._status=2,B._result=we)}),B._status===-1&&(B._status=0,B._result=re)}if(B._status===1)return B._result.default;throw B._result}var ue=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function xe(){}return Ye.Children={map:Z,forEach:function(B,re,we){Z(B,function(){re.apply(this,arguments)},we)},count:function(B){var re=0;return Z(B,function(){re++}),re},toArray:function(B){return Z(B,function(re){return re})||[]},only:function(B){if(!ne(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},Ye.Component=_,Ye.Fragment=i,Ye.Profiler=o,Ye.PureComponent=O,Ye.StrictMode=a,Ye.Suspense=h,Ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,Ye.__COMPILER_RUNTIME={__proto__:null,c:function(B){return V.H.useMemoCache(B)}},Ye.cache=function(B){return function(){return B.apply(null,arguments)}},Ye.cloneElement=function(B,re,we){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var be=A({},B.props),Re=B.key,$e=void 0;if(re!=null)for(ke in re.ref!==void 0&&($e=void 0),re.key!==void 0&&(Re=""+re.key),re)!F.call(re,ke)||ke==="key"||ke==="__self"||ke==="__source"||ke==="ref"&&re.ref===void 0||(be[ke]=re[ke]);var ke=arguments.length-2;if(ke===1)be.children=we;else if(1<ke){for(var ln=Array(ke),it=0;it<ke;it++)ln[it]=arguments[it+2];be.children=ln}return G(B.type,Re,void 0,void 0,$e,be)},Ye.createContext=function(B){return B={$$typeof:f,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},Ye.createElement=function(B,re,we){var be,Re={},$e=null;if(re!=null)for(be in re.key!==void 0&&($e=""+re.key),re)F.call(re,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Re[be]=re[be]);var ke=arguments.length-2;if(ke===1)Re.children=we;else if(1<ke){for(var ln=Array(ke),it=0;it<ke;it++)ln[it]=arguments[it+2];Re.children=ln}if(B&&B.defaultProps)for(be in ke=B.defaultProps,ke)Re[be]===void 0&&(Re[be]=ke[be]);return G(B,$e,void 0,void 0,null,Re)},Ye.createRef=function(){return{current:null}},Ye.forwardRef=function(B){return{$$typeof:p,render:B}},Ye.isValidElement=ne,Ye.lazy=function(B){return{$$typeof:y,_payload:{_status:-1,_result:B},_init:le}},Ye.memo=function(B,re){return{$$typeof:x,type:B,compare:re===void 0?null:re}},Ye.startTransition=function(B){var re=V.T,we={};V.T=we;try{var be=B(),Re=V.S;Re!==null&&Re(we,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(xe,ue)}catch($e){ue($e)}finally{V.T=re}},Ye.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},Ye.use=function(B){return V.H.use(B)},Ye.useActionState=function(B,re,we){return V.H.useActionState(B,re,we)},Ye.useCallback=function(B,re){return V.H.useCallback(B,re)},Ye.useContext=function(B){return V.H.useContext(B)},Ye.useDebugValue=function(){},Ye.useDeferredValue=function(B,re){return V.H.useDeferredValue(B,re)},Ye.useEffect=function(B,re,we){var be=V.H;if(typeof we=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return be.useEffect(B,re)},Ye.useId=function(){return V.H.useId()},Ye.useImperativeHandle=function(B,re,we){return V.H.useImperativeHandle(B,re,we)},Ye.useInsertionEffect=function(B,re){return V.H.useInsertionEffect(B,re)},Ye.useLayoutEffect=function(B,re){return V.H.useLayoutEffect(B,re)},Ye.useMemo=function(B,re){return V.H.useMemo(B,re)},Ye.useOptimistic=function(B,re){return V.H.useOptimistic(B,re)},Ye.useReducer=function(B,re,we){return V.H.useReducer(B,re,we)},Ye.useRef=function(B){return V.H.useRef(B)},Ye.useState=function(B){return V.H.useState(B)},Ye.useSyncExternalStore=function(B,re,we){return V.H.useSyncExternalStore(B,re,we)},Ye.useTransition=function(){return V.H.useTransition()},Ye.version="19.1.1",Ye}var Iy;function X3(){return Iy||(Iy=1,Kg.exports=O9()),Kg.exports}var Qg={exports:{}},Jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy;function R9(){if(Uy)return Jn;Uy=1;var e=X3();function t(h){var x="https://react.dev/errors/"+h;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)x+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(h,x,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:h,containerInfo:x,implementation:y}}var f=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,x){if(h==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Jn.createPortal=function(h,x){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(t(299));return c(h,x,null,y)},Jn.flushSync=function(h){var x=f.T,y=a.p;try{if(f.T=null,a.p=2,h)return h()}finally{f.T=x,a.p=y,a.d.f()}},Jn.preconnect=function(h,x){typeof h=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,a.d.C(h,x))},Jn.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},Jn.preinit=function(h,x){if(typeof h=="string"&&x&&typeof x.as=="string"){var y=x.as,b=p(y,x.crossOrigin),S=typeof x.integrity=="string"?x.integrity:void 0,E=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;y==="style"?a.d.S(h,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:E}):y==="script"&&a.d.X(h,{crossOrigin:b,integrity:S,fetchPriority:E,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Jn.preinitModule=function(h,x){if(typeof h=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var y=p(x.as,x.crossOrigin);a.d.M(h,{crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&a.d.M(h)},Jn.preload=function(h,x){if(typeof h=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var y=x.as,b=p(y,x.crossOrigin);a.d.L(h,y,{crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Jn.preloadModule=function(h,x){if(typeof h=="string")if(x){var y=p(x.as,x.crossOrigin);a.d.m(h,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else a.d.m(h)},Jn.requestFormReset=function(h){a.d.r(h)},Jn.unstable_batchedUpdates=function(h,x){return h(x)},Jn.useFormState=function(h,x,y){return f.H.useFormState(h,x,y)},Jn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Jn.version="19.1.1",Jn}var $y;function L9(){if($y)return Qg.exports;$y=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Qg.exports=R9(),Qg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy;function k9(){if(Gy)return C0;Gy=1;var e=j9(),t=X3(),i=L9();function a(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var r=n,s=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(s=r.return),n=r.return;while(n)}return r.tag===3?s:null}function f(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function p(n){if(c(n)!==n)throw Error(a(188))}function h(n){var r=n.alternate;if(!r){if(r=c(n),r===null)throw Error(a(188));return r!==n?null:n}for(var s=n,d=r;;){var g=s.return;if(g===null)break;var w=g.alternate;if(w===null){if(d=g.return,d!==null){s=d;continue}break}if(g.child===w.child){for(w=g.child;w;){if(w===s)return p(g),n;if(w===d)return p(g),r;w=w.sibling}throw Error(a(188))}if(s.return!==d.return)s=g,d=w;else{for(var M=!1,z=g.child;z;){if(z===s){M=!0,s=g,d=w;break}if(z===d){M=!0,d=g,s=w;break}z=z.sibling}if(!M){for(z=w.child;z;){if(z===s){M=!0,s=w,d=g;break}if(z===d){M=!0,d=w,s=g;break}z=z.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==d)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:r}function x(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=x(n),r!==null)return r;n=n.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function ye(n){return n===null||typeof n!="object"?null:(n=de&&n[de]||n["@@iterator"],typeof n=="function"?n:null)}var Ee=Symbol.for("react.client.reference");function Oe(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Ee?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case A:return"Fragment";case _:return"Profiler";case k:return"StrictMode";case V:return"Suspense";case F:return"SuspenseList";case ne:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case E:return"Portal";case L:return(n.displayName||"Context")+".Provider";case O:return(n._context.displayName||"Context")+".Consumer";case P:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return r=n.displayName||null,r!==null?r:Oe(n.type)||"Memo";case Q:r=n._payload,n=n._init;try{return Oe(n(r))}catch{}}return null}var Ae=Array.isArray,Z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},xe=[],B=-1;function re(n){return{current:n}}function we(n){0>B||(n.current=xe[B],xe[B]=null,B--)}function be(n,r){B++,xe[B]=n.current,n.current=r}var Re=re(null),$e=re(null),ke=re(null),ln=re(null);function it(n,r){switch(be(ke,r),be($e,n),be(Re,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?_t(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=_t(r),n=Nt(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}we(Re),be(Re,n)}function Ft(){we(Re),we($e),we(ke)}function Br(n){n.memoizedState!==null&&be(ln,n);var r=Re.current,s=Nt(r,n.type);r!==s&&(be($e,n),be(Re,s))}function Si(n){$e.current===n&&(we(Re),we($e)),ln.current===n&&(we(ln),Co._currentValue=ue)}var On=Object.prototype.hasOwnProperty,uc=e.unstable_scheduleCallback,ai=e.unstable_cancelCallback,Ho=e.unstable_shouldYield,H2=e.unstable_requestPaint,cn=e.unstable_now,mp=e.unstable_getCurrentPriorityLevel,gp=e.unstable_ImmediatePriority,Ss=e.unstable_UserBlockingPriority,Nn=e.unstable_NormalPriority,Vo=e.unstable_LowPriority,_o=e.unstable_IdlePriority,V2=e.log,No=e.unstable_setDisableYieldValue,Po=null,yn=null;function ri(n){if(typeof V2=="function"&&No(n),yn&&typeof yn.setStrictMode=="function")try{yn.setStrictMode(Po,n)}catch{}}var Rn=Math.clz32?Math.clz32:Ed,Td=Math.log,Ad=Math.LN2;function Ed(n){return n>>>=0,n===0?32:31-(Td(n)/Ad|0)|0}var Cs=256,Ts=4194304;function Ca(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function As(n,r,s){var d=n.pendingLanes;if(d===0)return 0;var g=0,w=n.suspendedLanes,M=n.pingedLanes;n=n.warmLanes;var z=d&134217727;return z!==0?(d=z&~w,d!==0?g=Ca(d):(M&=z,M!==0?g=Ca(M):s||(s=z&~n,s!==0&&(g=Ca(s))))):(z=d&~w,z!==0?g=Ca(z):M!==0?g=Ca(M):s||(s=d&~n,s!==0&&(g=Ca(s)))),g===0?0:r!==0&&r!==g&&(r&w)===0&&(w=g&-g,s=r&-r,w>=s||w===32&&(s&4194048)!==0)?r:g}function Ir(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function _2(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xp(){var n=Cs;return Cs<<=1,(Cs&4194048)===0&&(Cs=256),n}function vp(){var n=Ts;return Ts<<=1,(Ts&62914560)===0&&(Ts=4194304),n}function dc(n){for(var r=[],s=0;31>s;s++)r.push(n);return r}function Es(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function N2(n,r,s,d,g,w){var M=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var z=n.entanglements,U=n.expirationTimes,J=n.hiddenUpdates;for(s=M&~s;0<s;){var ce=31-Rn(s),he=1<<ce;z[ce]=0,U[ce]=-1;var te=J[ce];if(te!==null)for(J[ce]=null,ce=0;ce<te.length;ce++){var ee=te[ce];ee!==null&&(ee.lane&=-536870913)}s&=~he}d!==0&&yp(n,d,0),w!==0&&g===0&&n.tag!==0&&(n.suspendedLanes|=w&~(M&~r))}function yp(n,r,s){n.pendingLanes|=r,n.suspendedLanes&=~r;var d=31-Rn(r);n.entangledLanes|=r,n.entanglements[d]=n.entanglements[d]|1073741824|s&4194090}function wp(n,r){var s=n.entangledLanes|=r;for(n=n.entanglements;s;){var d=31-Rn(s),g=1<<d;g&r|n[d]&r&&(n[d]|=r),s&=~g}}function Md(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function fc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function bp(){var n=le.p;return n!==0?n:(n=window.event,n===void 0?32:_1(n.type))}function P2(n,r){var s=le.p;try{return le.p=n,r()}finally{le.p=s}}var Za=Math.random().toString(36).slice(2),un="__reactFiber$"+Za,Pn="__reactProps$"+Za,Xa="__reactContainer$"+Za,jd="__reactEvents$"+Za,B2="__reactListeners$"+Za,I2="__reactHandles$"+Za,Sp="__reactResources$"+Za,Bo="__reactMarker$"+Za;function Od(n){delete n[un],delete n[Pn],delete n[jd],delete n[B2],delete n[I2]}function Ms(n){var r=n[un];if(r)return r;for(var s=n.parentNode;s;){if(r=s[Xa]||s[un]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(n=A1(n);n!==null;){if(s=n[un])return s;n=A1(n)}return r}n=s,s=n.parentNode}return null}function js(n){if(n=n[un]||n[Xa]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function Os(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(a(33))}function Rs(n){var r=n[Sp];return r||(r=n[Sp]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function dn(n){n[Bo]=!0}var Cp=new Set,Tp={};function Ur(n,r){Ls(n,r),Ls(n+"Capture",r)}function Ls(n,r){for(Tp[n]=r,n=0;n<r.length;n++)Cp.add(r[n])}var pc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ap={},Io={};function U2(n){return On.call(Io,n)?!0:On.call(Ap,n)?!1:pc.test(n)?Io[n]=!0:(Ap[n]=!0,!1)}function hc(n,r,s){if(U2(r))if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var d=r.toLowerCase().slice(0,5);if(d!=="data-"&&d!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+s)}}function mc(n,r,s){if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+s)}}function aa(n,r,s,d){if(d===null)n.removeAttribute(s);else{switch(typeof d){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(r,s,""+d)}}var gc,Rd;function ks(n){if(gc===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);gc=r&&r[1]||"",Rd=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gc+n+Rd}var Ld=!1;function kd(n,r){if(!n||Ld)return"";Ld=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var d={DetermineComponentFrameRoot:function(){try{if(r){var he=function(){throw Error()};if(Object.defineProperty(he.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(he,[])}catch(ee){var te=ee}Reflect.construct(n,[],he)}else{try{he.call()}catch(ee){te=ee}n.call(he.prototype)}}else{try{throw Error()}catch(ee){te=ee}(he=n())&&typeof he.catch=="function"&&he.catch(function(){})}}catch(ee){if(ee&&te&&typeof ee.stack=="string")return[ee.stack,te.stack]}return[null,null]}};d.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var g=Object.getOwnPropertyDescriptor(d.DetermineComponentFrameRoot,"name");g&&g.configurable&&Object.defineProperty(d.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var w=d.DetermineComponentFrameRoot(),M=w[0],z=w[1];if(M&&z){var U=M.split(`
`),J=z.split(`
`);for(g=d=0;d<U.length&&!U[d].includes("DetermineComponentFrameRoot");)d++;for(;g<J.length&&!J[g].includes("DetermineComponentFrameRoot");)g++;if(d===U.length||g===J.length)for(d=U.length-1,g=J.length-1;1<=d&&0<=g&&U[d]!==J[g];)g--;for(;1<=d&&0<=g;d--,g--)if(U[d]!==J[g]){if(d!==1||g!==1)do if(d--,g--,0>g||U[d]!==J[g]){var ce=`
`+U[d].replace(" at new "," at ");return n.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",n.displayName)),ce}while(1<=d&&0<=g);break}}}finally{Ld=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?ks(s):""}function $2(n){switch(n.tag){case 26:case 27:case 5:return ks(n.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 15:return kd(n.type,!1);case 11:return kd(n.type.render,!1);case 1:return kd(n.type,!0);case 31:return ks("Activity");default:return""}}function Dd(n){try{var r="";do r+=$2(n),n=n.return;while(n);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function si(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function zd(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Hd(n){var r=zd(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var g=s.get,w=s.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return g.call(this)},set:function(M){d=""+M,w.call(this,M)}}),Object.defineProperty(n,r,{enumerable:s.enumerable}),{getValue:function(){return d},setValue:function(M){d=""+M},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function xc(n){n._valueTracker||(n._valueTracker=Hd(n))}function Vd(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var s=r.getValue(),d="";return n&&(d=zd(n)?n.checked?"true":"false":n.value),n=d,n!==s?(r.setValue(n),!0):!1}function $r(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Ep=/[\n"\\]/g;function Ci(n){return n.replace(Ep,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function vc(n,r,s,d,g,w,M,z){n.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?n.type=M:n.removeAttribute("type"),r!=null?M==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+si(r)):n.value!==""+si(r)&&(n.value=""+si(r)):M!=="submit"&&M!=="reset"||n.removeAttribute("value"),r!=null?Uo(n,M,si(r)):s!=null?Uo(n,M,si(s)):d!=null&&n.removeAttribute("value"),g==null&&w!=null&&(n.defaultChecked=!!w),g!=null&&(n.checked=g&&typeof g!="function"&&typeof g!="symbol"),z!=null&&typeof z!="function"&&typeof z!="symbol"&&typeof z!="boolean"?n.name=""+si(z):n.removeAttribute("name")}function _d(n,r,s,d,g,w,M,z){if(w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(n.type=w),r!=null||s!=null){if(!(w!=="submit"&&w!=="reset"||r!=null))return;s=s!=null?""+si(s):"",r=r!=null?""+si(r):s,z||r===n.value||(n.value=r),n.defaultValue=r}d=d??g,d=typeof d!="function"&&typeof d!="symbol"&&!!d,n.checked=z?n.checked:!!d,n.defaultChecked=!!d,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(n.name=M)}function Uo(n,r,s){r==="number"&&$r(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Ds(n,r,s,d){if(n=n.options,r){r={};for(var g=0;g<s.length;g++)r["$"+s[g]]=!0;for(s=0;s<n.length;s++)g=r.hasOwnProperty("$"+n[s].value),n[s].selected!==g&&(n[s].selected=g),g&&d&&(n[s].defaultSelected=!0)}else{for(s=""+si(s),r=null,g=0;g<n.length;g++){if(n[g].value===s){n[g].selected=!0,d&&(n[g].defaultSelected=!0);return}r!==null||n[g].disabled||(r=n[g])}r!==null&&(r.selected=!0)}}function Nd(n,r,s){if(r!=null&&(r=""+si(r),r!==n.value&&(n.value=r),s==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=s!=null?""+si(s):""}function yc(n,r,s,d){if(r==null){if(d!=null){if(s!=null)throw Error(a(92));if(Ae(d)){if(1<d.length)throw Error(a(93));d=d[0]}s=d}s==null&&(s=""),r=s}s=si(r),n.defaultValue=s,d=n.textContent,d===s&&d!==""&&d!==null&&(n.value=d)}function Ka(n,r){if(r){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=r;return}}n.textContent=r}var zs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pd(n,r,s){var d=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?d?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":d?n.setProperty(r,s):typeof s!="number"||s===0||zs.has(r)?r==="float"?n.cssFloat=s:n[r]=(""+s).trim():n[r]=s+"px"}function Bd(n,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(n=n.style,s!=null){for(var d in s)!s.hasOwnProperty(d)||r!=null&&r.hasOwnProperty(d)||(d.indexOf("--")===0?n.setProperty(d,""):d==="float"?n.cssFloat="":n[d]="");for(var g in r)d=r[g],r.hasOwnProperty(g)&&s[g]!==d&&Pd(n,g,d)}else for(var w in r)r.hasOwnProperty(w)&&Pd(n,w,r[w])}function Id(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(n){return jp.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var wc=null;function Ud(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Hs=null,Vs=null;function $d(n){var r=js(n);if(r&&(n=r.stateNode)){var s=n[Pn]||null;e:switch(n=r.stateNode,r.type){case"input":if(vc(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ci(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var d=s[r];if(d!==n&&d.form===n.form){var g=d[Pn]||null;if(!g)throw Error(a(90));vc(d,g.value,g.defaultValue,g.defaultValue,g.checked,g.defaultChecked,g.type,g.name)}}for(r=0;r<s.length;r++)d=s[r],d.form===n.form&&Vd(d)}break e;case"textarea":Nd(n,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&Ds(n,!!s.multiple,r,!1)}}}var Gd=!1;function Op(n,r,s){if(Gd)return n(r,s);Gd=!0;try{var d=n(r);return d}finally{if(Gd=!1,(Hs!==null||Vs!==null)&&(wu(),Hs&&(r=Hs,n=Vs,Vs=Hs=null,$d(r),n)))for(r=0;r<n.length;r++)$d(n[r])}}function Go(n,r){var s=n.stateNode;if(s===null)return null;var d=s[Pn]||null;if(d===null)return null;s=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var Ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qo=!1;if(Ta)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){qo=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{qo=!1}var Qa=null,qd=null,bc=null;function Rp(){if(bc)return bc;var n,r=qd,s=r.length,d,g="value"in Qa?Qa.value:Qa.textContent,w=g.length;for(n=0;n<s&&r[n]===g[n];n++);var M=s-n;for(d=1;d<=M&&r[s-d]===g[w-d];d++);return bc=g.slice(n,1<d?1-d:void 0)}function wt(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function pt(){return!0}function Lp(){return!1}function Bn(n){function r(s,d,g,w,M){this._reactName=s,this._targetInst=g,this.type=d,this.nativeEvent=w,this.target=M,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(s=n[z],this[z]=s?s(w):w[z]);return this.isDefaultPrevented=(w.defaultPrevented!=null?w.defaultPrevented:w.returnValue===!1)?pt:Lp,this.isPropagationStopped=Lp,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=pt)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=pt)},persist:function(){},isPersistent:pt}),r}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sc=Bn(Gr),Fo=y({},Gr,{view:0,detail:0}),G2=Bn(Fo),Cc,Yd,qt,_s=y({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qt&&(qt&&n.type==="mousemove"?(Cc=n.screenX-qt.screenX,Yd=n.screenY-qt.screenY):Yd=Cc=0,qt=n),Cc)},movementY:function(n){return"movementY"in n?n.movementY:Yd}}),Ja=Bn(_s),kp=y({},_s,{dataTransfer:0}),Fd=Bn(kp),Ti=y({},Fo,{relatedTarget:0}),Tc=Bn(Ti),Dp=y({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),zp=Bn(Dp),Hp=y({},Gr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Vp=Bn(Hp),_p=y({},Gr,{data:0}),In=Bn(_p),q2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ai={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Np(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Y2[n])?!!r[n]:!1}function ra(){return Np}var Ac=y({},Fo,{key:function(n){if(n.key){var r=q2[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=wt(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ai[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(n){return n.type==="keypress"?wt(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wt(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Wd=Bn(Ac),Dt=y({},_s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Aa=Bn(Dt),Zd=y({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),F2=Bn(Zd),Xd=y({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),W2=Bn(Xd),Z2=y({},_s,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),X2=Bn(Z2),Pp=y({},Gr,{newState:0,oldState:0}),Ec=Bn(Pp),Ns=[9,13,27,32],Kd=Ta&&"CompositionEvent"in window,Ps=null;Ta&&"documentMode"in document&&(Ps=document.documentMode);var Bp=Ta&&"TextEvent"in window&&!Ps,Mc=Ta&&(!Kd||Ps&&8<Ps&&11>=Ps),jc=" ",Qd=!1;function Ip(n,r){switch(n){case"keyup":return Ns.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var er=!1;function K2(n,r){switch(n){case"compositionend":return Oc(r);case"keypress":return r.which!==32?null:(Qd=!0,jc);case"textInput":return n=r.data,n===jc&&Qd?null:n;default:return null}}function Up(n,r){if(er)return n==="compositionend"||!Kd&&Ip(n,r)?(n=Rp(),bc=qd=Qa=null,er=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Mc&&r.locale!=="ko"?null:r.data;default:return null}}var oi={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!oi[n.type]:r==="textarea"}function Bs(n,r,s,d){Hs?Vs?Vs.push(d):Vs=[d]:Hs=d,r=Mu(r,"onChange"),0<r.length&&(s=new Sc("onChange","change",null,s,d),n.push({event:s,listeners:r}))}var Is=null,Us=null;function Q2(n){x1(n,0)}function Lc(n){var r=Os(n);if(Vd(r))return n}function $p(n,r){if(n==="change")return r}var Gp=!1;if(Ta){var Jd;if(Ta){var tr="oninput"in document;if(!tr){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),tr=typeof qp.oninput=="function"}Jd=tr}else Jd=!1;Gp=Jd&&(!document.documentMode||9<document.documentMode)}function Yp(){Is&&(Is.detachEvent("onpropertychange",kc),Us=Is=null)}function kc(n){if(n.propertyName==="value"&&Lc(Us)){var r=[];Bs(r,Us,n,Ud(n)),Op(Q2,r)}}function Fp(n,r,s){n==="focusin"?(Yp(),Is=r,Us=s,Is.attachEvent("onpropertychange",kc)):n==="focusout"&&Yp()}function nr(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Lc(Us)}function Dc(n,r){if(n==="click")return Lc(r)}function J2(n,r){if(n==="input"||n==="change")return Lc(r)}function eg(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var li=typeof Object.is=="function"?Object.is:eg;function sa(n,r){if(li(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var s=Object.keys(n),d=Object.keys(r);if(s.length!==d.length)return!1;for(d=0;d<s.length;d++){var g=s[d];if(!On.call(r,g)||!li(n[g],r[g]))return!1}return!0}function Ei(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ef(n,r){var s=Ei(n);n=0;for(var d;s;){if(s.nodeType===3){if(d=n+s.textContent.length,n<=r&&d>=r)return{node:s,offset:r-n};n=d}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Ei(s)}}function Wp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Wp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Zp(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=$r(n.document);r instanceof n.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)n=r.contentWindow;else break;r=$r(n.document)}return r}function tf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var tg=Ta&&"documentMode"in document&&11>=document.documentMode,$s=null,ir=null,Y=null,oe=!1;function ae(n,r,s){var d=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;oe||$s==null||$s!==$r(d)||(d=$s,"selectionStart"in d&&tf(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Y&&sa(Y,d)||(Y=d,d=Mu(ir,"onSelect"),0<d.length&&(r=new Sc("onSelect","select",null,r,s),n.push({event:r,listeners:d}),r.target=$s)))}function Se(n,r){var s={};return s[n.toLowerCase()]=r.toLowerCase(),s["Webkit"+n]="webkit"+r,s["Moz"+n]="moz"+r,s}var Ve={animationend:Se("Animation","AnimationEnd"),animationiteration:Se("Animation","AnimationIteration"),animationstart:Se("Animation","AnimationStart"),transitionrun:Se("Transition","TransitionRun"),transitionstart:Se("Transition","TransitionStart"),transitioncancel:Se("Transition","TransitionCancel"),transitionend:Se("Transition","TransitionEnd")},rt={},Wt={};Ta&&(Wt=document.createElement("div").style,"AnimationEvent"in window||(delete Ve.animationend.animation,delete Ve.animationiteration.animation,delete Ve.animationstart.animation),"TransitionEvent"in window||delete Ve.transitionend.transition);function st(n){if(rt[n])return rt[n];if(!Ve[n])return n;var r=Ve[n],s;for(s in r)if(r.hasOwnProperty(s)&&s in Wt)return rt[n]=r[s];return n}var zc=st("animationend"),Xp=st("animationiteration"),ci=st("animationstart"),Hc=st("transitionrun"),ng=st("transitionstart"),Gs=st("transitioncancel"),Wo=st("transitionend"),Zo=new Map,ct="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ct.push("scrollEnd");function Ii(n,r){Zo.set(n,r),Ur(r,[n])}var nf=new WeakMap;function Ln(n,r){if(typeof n=="object"&&n!==null){var s=nf.get(n);return s!==void 0?s:(r={value:n,source:r,stack:Dd(r)},nf.set(n,r),r)}return{value:n,source:r,stack:Dd(r)}}var Mi=[],qs=0,af=0;function qr(){for(var n=qs,r=af=qs=0;r<n;){var s=Mi[r];Mi[r++]=null;var d=Mi[r];Mi[r++]=null;var g=Mi[r];Mi[r++]=null;var w=Mi[r];if(Mi[r++]=null,d!==null&&g!==null){var M=d.pending;M===null?g.next=g:(g.next=M.next,M.next=g),d.pending=g}w!==0&&Xo(s,g,w)}}function Ui(n,r,s,d){Mi[qs++]=n,Mi[qs++]=r,Mi[qs++]=s,Mi[qs++]=d,af|=d,n.lanes|=d,n=n.alternate,n!==null&&(n.lanes|=d)}function Ys(n,r,s,d){return Ui(n,r,s,d),Ko(n)}function Yr(n,r){return Ui(n,null,null,r),Ko(n)}function Xo(n,r,s){n.lanes|=s;var d=n.alternate;d!==null&&(d.lanes|=s);for(var g=!1,w=n.return;w!==null;)w.childLanes|=s,d=w.alternate,d!==null&&(d.childLanes|=s),w.tag===22&&(n=w.stateNode,n===null||n._visibility&1||(g=!0)),n=w,w=w.return;return n.tag===3?(w=n.stateNode,g&&r!==null&&(g=31-Rn(s),n=w.hiddenUpdates,d=n[g],d===null?n[g]=[r]:d.push(r),r.lane=s|536870912),w):null}function Ko(n){if(50<mo)throw mo=0,Qf=null,Error(a(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Fr={};function Vc(n,r,s,d){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(n,r,s,d){return new Vc(n,r,s,d)}function Wr(n){return n=n.prototype,!(!n||!n.isReactComponent)}function kn(n,r){var s=n.alternate;return s===null?(s=Un(n.tag,r,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=r,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,r=n.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function Qo(n,r){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,r=s.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function _c(n,r,s,d,g,w){var M=0;if(d=n,typeof n=="function")Wr(n)&&(M=1);else if(typeof n=="string")M=Dg(n,s,Re.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case ne:return n=Un(31,s,r,g),n.elementType=ne,n.lanes=w,n;case A:return Zr(s.children,g,w,r);case k:M=8,g|=24;break;case _:return n=Un(12,s,r,g|2),n.elementType=_,n.lanes=w,n;case V:return n=Un(13,s,r,g),n.elementType=V,n.lanes=w,n;case F:return n=Un(19,s,r,g),n.elementType=F,n.lanes=w,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:case L:M=10;break e;case O:M=9;break e;case P:M=11;break e;case G:M=14;break e;case Q:M=16,d=null;break e}M=29,s=Error(a(130,n===null?"null":typeof n,"")),d=null}return r=Un(M,s,r,g),r.elementType=n,r.type=d,r.lanes=w,r}function Zr(n,r,s,d){return n=Un(7,n,d,r),n.lanes=s,n}function rf(n,r,s){return n=Un(6,n,null,r),n.lanes=s,n}function Fs(n,r,s){return r=Un(4,n.children!==null?n.children:[],n.key,r),r.lanes=s,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Ea=[],ar=0,Nc=null,Jo=0,ji=[],Oi=0,Lt=null,zt=1,Ma="";function Xr(n,r){Ea[ar++]=Jo,Ea[ar++]=Nc,Nc=n,Jo=r}function sf(n,r,s){ji[Oi++]=zt,ji[Oi++]=Ma,ji[Oi++]=Lt,Lt=n;var d=zt;n=Ma;var g=32-Rn(d)-1;d&=~(1<<g),s+=1;var w=32-Rn(r)+g;if(30<w){var M=g-g%5;w=(d&(1<<M)-1).toString(32),d>>=M,g-=M,zt=1<<32-Rn(r)+g|s<<g|d,Ma=w+n}else zt=1<<w|s<<g|d,Ma=n}function of(n){n.return!==null&&(Xr(n,1),sf(n,1,0))}function el(n){for(;n===Nc;)Nc=Ea[--ar],Ea[ar]=null,Jo=Ea[--ar],Ea[ar]=null;for(;n===Lt;)Lt=ji[--Oi],ji[Oi]=null,Ma=ji[--Oi],ji[Oi]=null,zt=ji[--Oi],ji[Oi]=null}var Qt=null,Ht=null,Je=!1,$i=null,$n=!1,Ws=Error(a(519));function Ri(n){var r=Error(a(418,""));throw rr(Ln(r,n)),Ws}function Kp(n){var r=n.stateNode,s=n.type,d=n.memoizedProps;switch(r[un]=n,r[Pn]=d,s){case"dialog":Qe("cancel",r),Qe("close",r);break;case"iframe":case"object":case"embed":Qe("load",r);break;case"video":case"audio":for(s=0;s<Ul.length;s++)Qe(Ul[s],r);break;case"source":Qe("error",r);break;case"img":case"image":case"link":Qe("error",r),Qe("load",r);break;case"details":Qe("toggle",r);break;case"input":Qe("invalid",r),_d(r,d.value,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name,!0),xc(r);break;case"select":Qe("invalid",r);break;case"textarea":Qe("invalid",r),yc(r,d.value,d.defaultValue,d.children),xc(r)}s=d.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||d.suppressHydrationWarning===!0||w1(r.textContent,s)?(d.popover!=null&&(Qe("beforetoggle",r),Qe("toggle",r)),d.onScroll!=null&&Qe("scroll",r),d.onScrollEnd!=null&&Qe("scrollend",r),d.onClick!=null&&(r.onclick=ju),r=!0):r=!1,r||Ri(n)}function Qp(n){for(Qt=n.return;Qt;)switch(Qt.tag){case 5:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:Qt=Qt.return}}function tl(n){if(n!==Qt)return!1;if(!Je)return Qp(n),Je=!0,!1;var r=n.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Ru(n.type,n.memoizedProps)),s=!s),s&&Ht&&Ri(n),Qp(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(r===0){Ht=Zi(n.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;n=n.nextSibling}Ht=null}}else r===27?(r=Ht,Vi(n.type)?(n=f0,f0=null,Ht=n):Ht=r):Ht=Qt?Zi(n.stateNode.nextSibling):null;return!0}function nl(){Ht=Qt=null,Je=!1}function Jp(){var n=$i;return n!==null&&(Kn===null?Kn=n:Kn.push.apply(Kn,n),$i=null),n}function rr(n){$i===null?$i=[n]:$i.push(n)}var Kr=re(null),sr=null,D=null;function ui(n,r,s){be(Kr,r._currentValue),r._currentValue=s}function Li(n){n._currentValue=Kr.current,we(Kr)}function Gn(n,r,s){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===s)break;n=n.return}}function Fe(n,r,s,d){var g=n.child;for(g!==null&&(g.return=n);g!==null;){var w=g.dependencies;if(w!==null){var M=g.child;w=w.firstContext;e:for(;w!==null;){var z=w;w=g;for(var U=0;U<r.length;U++)if(z.context===r[U]){w.lanes|=s,z=w.alternate,z!==null&&(z.lanes|=s),Gn(w.return,s,n),d||(M=null);break e}w=z.next}}else if(g.tag===18){if(M=g.return,M===null)throw Error(a(341));M.lanes|=s,w=M.alternate,w!==null&&(w.lanes|=s),Gn(M,s,n),M=null}else M=g.child;if(M!==null)M.return=g;else for(M=g;M!==null;){if(M===n){M=null;break}if(g=M.sibling,g!==null){g.return=M.return,M=g;break}M=M.return}g=M}}function il(n,r,s,d){n=null;for(var g=r,w=!1;g!==null;){if(!w){if((g.flags&524288)!==0)w=!0;else if((g.flags&262144)!==0)break}if(g.tag===10){var M=g.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var z=g.type;li(g.pendingProps.value,M.value)||(n!==null?n.push(z):n=[z])}}else if(g===ln.current){if(M=g.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==g.memoizedState.memoizedState&&(n!==null?n.push(Co):n=[Co])}g=g.return}n!==null&&Fe(r,n,s,d),r.flags|=262144}function Pc(n){for(n=n.firstContext;n!==null;){if(!li(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Qr(n){sr=n,D=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Bt(n){return eh(sr,n)}function Bc(n,r){return sr===null&&Qr(n),eh(n,r)}function eh(n,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},D===null){if(n===null)throw Error(a(308));D=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else D=D.next=r;return s}var ig=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(s,d){n.push(d)}};this.abort=function(){r.aborted=!0,n.forEach(function(s){return s()})}},ag=e.unstable_scheduleCallback,rg=e.unstable_NormalPriority,Et={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new ig,data:new Map,refCount:0}}function al(n){n.refCount--,n.refCount===0&&ag(rg,function(){n.controller.abort()})}var rl=null,cf=0,Zs=0,qn=null;function sg(n,r){if(rl===null){var s=rl=[];cf=0,Zs=Eu(),qn={status:"pending",value:void 0,then:function(d){s.push(d)}}}return cf++,r.then(th,th),r}function th(){if(--cf===0&&rl!==null){qn!==null&&(qn.status="fulfilled");var n=rl;rl=null,Zs=0,qn=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function og(n,r){var s=[],d={status:"pending",value:null,reason:null,then:function(g){s.push(g)}};return n.then(function(){d.status="fulfilled",d.value=r;for(var g=0;g<s.length;g++)(0,s[g])(r)},function(g){for(d.status="rejected",d.reason=g,g=0;g<s.length;g++)(0,s[g])(void 0)}),d}var nh=Z.S;Z.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&sg(n,r),nh!==null&&nh(n,r)};var Jr=re(null);function ja(){var n=Jr.current;return n!==null?n:Rt.pooledCache}function Ic(n,r){r===null?be(Jr,Jr.current):be(Jr,r.pool)}function ih(){var n=ja();return n===null?null:{parent:Et._currentValue,pool:n}}var Dn=Error(a(460)),ah=Error(a(474)),Uc=Error(a(542)),uf={then:function(){}};function rh(n){return n=n.status,n==="fulfilled"||n==="rejected"}function $c(){}function df(n,r,s){switch(s=n[s],s===void 0?n.push(r):s!==r&&(r.then($c,$c),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,oh(n),n;default:if(typeof r.status=="string")r.then($c,$c);else{if(n=Rt,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=r,n.status="pending",n.then(function(d){if(r.status==="pending"){var g=r;g.status="fulfilled",g.value=d}},function(d){if(r.status==="pending"){var g=r;g.status="rejected",g.reason=d}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,oh(n),n}throw Xs=r,Dn}}var Xs=null;function sh(){if(Xs===null)throw Error(a(459));var n=Xs;return Xs=null,n}function oh(n){if(n===Dn||n===Uc)throw Error(a(483))}var oa=!1;function es(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ks(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function or(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Oa(n,r,s){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(mt&2)!==0){var g=d.pending;return g===null?r.next=r:(r.next=g.next,g.next=r),d.pending=r,r=Ko(n),Xo(n,null,s),r}return Ui(n,d,r,s),Ko(n)}function sl(n,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var d=r.lanes;d&=n.pendingLanes,s|=d,r.lanes=s,wp(n,s)}}function Gi(n,r){var s=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,s===d)){var g=null,w=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};w===null?g=w=M:w=w.next=M,s=s.next}while(s!==null);w===null?g=w=r:w=w.next=r}else g=w=r;s={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:w,shared:d.shared,callbacks:d.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=r:n.next=r,s.lastBaseUpdate=r}var ol=!1;function qi(){if(ol){var n=qn;if(n!==null)throw n}}function Sn(n,r,s,d){ol=!1;var g=n.updateQueue;oa=!1;var w=g.firstBaseUpdate,M=g.lastBaseUpdate,z=g.shared.pending;if(z!==null){g.shared.pending=null;var U=z,J=U.next;U.next=null,M===null?w=J:M.next=J,M=U;var ce=n.alternate;ce!==null&&(ce=ce.updateQueue,z=ce.lastBaseUpdate,z!==M&&(z===null?ce.firstBaseUpdate=J:z.next=J,ce.lastBaseUpdate=U))}if(w!==null){var he=g.baseState;M=0,ce=J=U=null,z=w;do{var te=z.lane&-536870913,ee=te!==z.lane;if(ee?(at&te)===te:(d&te)===te){te!==0&&te===Zs&&(ol=!0),ce!==null&&(ce=ce.next={lane:0,tag:z.tag,payload:z.payload,callback:null,next:null});e:{var ze=n,De=z;te=r;var St=s;switch(De.tag){case 1:if(ze=De.payload,typeof ze=="function"){he=ze.call(St,he,te);break e}he=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=De.payload,te=typeof ze=="function"?ze.call(St,he,te):ze,te==null)break e;he=y({},he,te);break e;case 2:oa=!0}}te=z.callback,te!==null&&(n.flags|=64,ee&&(n.flags|=8192),ee=g.callbacks,ee===null?g.callbacks=[te]:ee.push(te))}else ee={lane:te,tag:z.tag,payload:z.payload,callback:z.callback,next:null},ce===null?(J=ce=ee,U=he):ce=ce.next=ee,M|=te;if(z=z.next,z===null){if(z=g.shared.pending,z===null)break;ee=z,z=ee.next,ee.next=null,g.lastBaseUpdate=ee,g.shared.pending=null}}while(!0);ce===null&&(U=he),g.baseState=U,g.firstBaseUpdate=J,g.lastBaseUpdate=ce,w===null&&(g.shared.lanes=0),gr|=M,n.lanes=M,n.memoizedState=he}}function lh(n,r){if(typeof n!="function")throw Error(a(191,n));n.call(r)}function ff(n,r){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)lh(s[n],r)}var ts=re(null),lr=re(0);function Ra(n,r){n=Pa,be(lr,n),be(ts,r),Pa=n|r.baseLanes}function Gc(){be(lr,Pa),be(ts,ts.current)}function pf(){Pa=lr.current,we(ts),we(lr)}var Yi=0,qe=null,ht=null,et=null,Qs=!1,ns=!1,Cn=!1,Js=0,cr=0,ki=null,ch=0;function tt(){throw Error(a(321))}function ll(n,r){if(r===null)return!1;for(var s=0;s<r.length&&s<n.length;s++)if(!li(n[s],r[s]))return!1;return!0}function hf(n,r,s,d,g,w){return Yi=w,qe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Z.H=n===null||n.memoizedState===null?Sh:kf,Cn=!1,w=s(d,g),Cn=!1,ns&&(w=dh(r,s,d,g)),uh(n),w}function uh(n){Z.H=yl;var r=ht!==null&&ht.next!==null;if(Yi=0,et=ht=qe=null,Qs=!1,cr=0,ki=null,r)throw Error(a(300));n===null||fn||(n=n.dependencies,n!==null&&Pc(n)&&(fn=!0))}function dh(n,r,s,d){qe=n;var g=0;do{if(ns&&(ki=null),cr=0,ns=!1,25<=g)throw Error(a(301));if(g+=1,et=ht=null,n.updateQueue!=null){var w=n.updateQueue;w.lastEffect=null,w.events=null,w.stores=null,w.memoCache!=null&&(w.memoCache.index=0)}Z.H=Ch,w=r(s,d)}while(ns);return w}function mf(){var n=Z.H,r=n.useState()[0];return r=typeof r.then=="function"?cl(r):r,n=n.useState()[0],(ht!==null?ht.memoizedState:null)!==n&&(qe.flags|=1024),r}function gf(){var n=Js!==0;return Js=0,n}function is(n,r,s){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~s}function qc(n){if(Qs){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Qs=!1}Yi=0,et=ht=qe=null,ns=!1,cr=Js=0,ki=null}function Yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?qe.memoizedState=et=n:et=et.next=n,et}function Zt(){if(ht===null){var n=qe.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=et===null?qe.memoizedState:et.next;if(r!==null)et=r,ht=n;else{if(n===null)throw qe.alternate===null?Error(a(467)):Error(a(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},et===null?qe.memoizedState=et=n:et=et.next=n}return et}function as(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cl(n){var r=cr;return cr+=1,ki===null&&(ki=[]),n=df(ki,n,r),r=qe,(et===null?r.memoizedState:et.next)===null&&(r=r.alternate,Z.H=r===null||r.memoizedState===null?Sh:kf),n}function Yc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return cl(n);if(n.$$typeof===L)return Bt(n)}throw Error(a(438,String(n)))}function ul(n){var r=null,s=qe.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var d=qe.alternate;d!==null&&(d=d.updateQueue,d!==null&&(d=d.memoCache,d!=null&&(r={data:d.data.map(function(g){return g.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=as(),qe.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(n),d=0;d<n;d++)s[d]=se;return r.index++,s}function la(n,r){return typeof r=="function"?r(n):r}function Fc(n){var r=Zt();return xf(r,ht,n)}function xf(n,r,s){var d=n.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=s;var g=n.baseQueue,w=d.pending;if(w!==null){if(g!==null){var M=g.next;g.next=w.next,w.next=M}r.baseQueue=g=w,d.pending=null}if(w=n.baseState,g===null)n.memoizedState=w;else{r=g.next;var z=M=null,U=null,J=r,ce=!1;do{var he=J.lane&-536870913;if(he!==J.lane?(at&he)===he:(Yi&he)===he){var te=J.revertLane;if(te===0)U!==null&&(U=U.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),he===Zs&&(ce=!0);else if((Yi&te)===te){J=J.next,te===Zs&&(ce=!0);continue}else he={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},U===null?(z=U=he,M=w):U=U.next=he,qe.lanes|=te,gr|=te;he=J.action,Cn&&s(w,he),w=J.hasEagerState?J.eagerState:s(w,he)}else te={lane:he,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},U===null?(z=U=te,M=w):U=U.next=te,qe.lanes|=he,gr|=he;J=J.next}while(J!==null&&J!==r);if(U===null?M=w:U.next=z,!li(w,n.memoizedState)&&(fn=!0,ce&&(s=qn,s!==null)))throw s;n.memoizedState=w,n.baseState=M,n.baseQueue=U,d.lastRenderedState=w}return g===null&&(d.lanes=0),[n.memoizedState,d.dispatch]}function vf(n){var r=Zt(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var d=s.dispatch,g=s.pending,w=r.memoizedState;if(g!==null){s.pending=null;var M=g=g.next;do w=n(w,M.action),M=M.next;while(M!==g);li(w,r.memoizedState)||(fn=!0),r.memoizedState=w,r.baseQueue===null&&(r.baseState=w),s.lastRenderedState=w}return[w,d]}function yf(n,r,s){var d=qe,g=Zt(),w=Je;if(w){if(s===void 0)throw Error(a(407));s=s()}else s=r();var M=!li((ht||g).memoizedState,s);M&&(g.memoizedState=s,fn=!0),g=g.queue;var z=Zc.bind(null,d,g,n);if(pl(2048,8,z,[n]),g.getSnapshot!==r||M||et!==null&&et.memoizedState.tag&1){if(d.flags|=2048,eo(9,eu(),fh.bind(null,d,g,s,r),null),Rt===null)throw Error(a(349));w||(Yi&124)!==0||Wc(d,r,s)}return s}function Wc(n,r,s){n.flags|=16384,n={getSnapshot:r,value:s},r=qe.updateQueue,r===null?(r=as(),qe.updateQueue=r,r.stores=[n]):(s=r.stores,s===null?r.stores=[n]:s.push(n))}function fh(n,r,s,d){r.value=s,r.getSnapshot=d,wf(r)&&bf(n)}function Zc(n,r,s){return s(function(){wf(r)&&bf(n)})}function wf(n){var r=n.getSnapshot;n=n.value;try{var s=r();return!li(n,s)}catch{return!0}}function bf(n){var r=Yr(n,2);r!==null&&mi(r,n,2)}function Xc(n){var r=Yn();if(typeof n=="function"){var s=n;if(n=s(),Cn){ri(!0);try{s()}finally{ri(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:n},r}function dl(n,r,s,d){return n.baseState=s,xf(n,ht,typeof d=="function"?d:la)}function lg(n,r,s,d,g){if(au(n))throw Error(a(485));if(n=r.action,n!==null){var w={payload:g,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){w.listeners.push(M)}};Z.T!==null?s(!0):w.isTransition=!1,d(w),s=r.pending,s===null?(w.next=r.pending=w,Sf(r,w)):(w.next=s.next,r.pending=s.next=w)}}function Sf(n,r){var s=r.action,d=r.payload,g=n.state;if(r.isTransition){var w=Z.T,M={};Z.T=M;try{var z=s(g,d),U=Z.S;U!==null&&U(M,z),Cf(n,r,z)}catch(J){Kc(n,r,J)}finally{Z.T=w}}else try{w=s(g,d),Cf(n,r,w)}catch(J){Kc(n,r,J)}}function Cf(n,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(d){ph(n,r,d)},function(d){return Kc(n,r,d)}):ph(n,r,s)}function ph(n,r,s){r.status="fulfilled",r.value=s,hh(r),n.state=s,r=n.pending,r!==null&&(s=r.next,s===r?n.pending=null:(s=s.next,r.next=s,Sf(n,s)))}function Kc(n,r,s){var d=n.pending;if(n.pending=null,d!==null){d=d.next;do r.status="rejected",r.reason=s,hh(r),r=r.next;while(r!==d)}n.action=null}function hh(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Qc(n,r){return r}function Tf(n,r){if(Je){var s=Rt.formState;if(s!==null){e:{var d=qe;if(Je){if(Ht){t:{for(var g=Ht,w=$n;g.nodeType!==8;){if(!w){g=null;break t}if(g=Zi(g.nextSibling),g===null){g=null;break t}}w=g.data,g=w==="F!"||w==="F"?g:null}if(g){Ht=Zi(g.nextSibling),d=g.data==="F!";break e}}Ri(d)}d=!1}d&&(r=s[0])}}return s=Yn(),s.memoizedState=s.baseState=r,d={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qc,lastRenderedState:r},s.queue=d,s=Of.bind(null,qe,d),d.dispatch=s,d=Xc(!1),w=Rf.bind(null,qe,!1,d.queue),d=Yn(),g={state:r,dispatch:null,action:n,pending:null},d.queue=g,s=lg.bind(null,qe,g,w,s),g.dispatch=s,d.memoizedState=n,[r,s,!1]}function Jc(n){var r=Zt();return mh(r,ht,n)}function mh(n,r,s){if(r=xf(n,r,Qc)[0],n=Fc(la)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var d=cl(r)}catch(M){throw M===Dn?Uc:M}else d=r;r=Zt();var g=r.queue,w=g.dispatch;return s!==r.memoizedState&&(qe.flags|=2048,eo(9,eu(),Af.bind(null,g,s),null)),[d,w,n]}function Af(n,r){n.action=r}function Ge(n){var r=Zt(),s=ht;if(s!==null)return mh(r,s,n);Zt(),r=r.memoizedState,s=Zt();var d=s.queue.dispatch;return s.memoizedState=n,[r,d,!1]}function eo(n,r,s,d){return n={tag:n,create:s,deps:d,inst:r,next:null},r=qe.updateQueue,r===null&&(r=as(),qe.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=n.next=n:(d=s.next,s.next=n,n.next=d,r.lastEffect=n),n}function eu(){return{destroy:void 0,resource:void 0}}function to(){return Zt().memoizedState}function fl(n,r,s,d){var g=Yn();d=d===void 0?null:d,qe.flags|=n,g.memoizedState=eo(1|r,eu(),s,d)}function pl(n,r,s,d){var g=Zt();d=d===void 0?null:d;var w=g.memoizedState.inst;ht!==null&&d!==null&&ll(d,ht.memoizedState.deps)?g.memoizedState=eo(r,w,s,d):(qe.flags|=n,g.memoizedState=eo(1|r,w,s,d))}function gh(n,r){fl(8390656,8,n,r)}function di(n,r){pl(2048,8,n,r)}function xh(n,r){return pl(4,2,n,r)}function hl(n,r){return pl(4,4,n,r)}function tu(n,r){if(typeof r=="function"){n=n();var s=r(n);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ef(n,r,s){s=s!=null?s.concat([n]):null,pl(4,4,tu.bind(null,r,n),s)}function nu(){}function Fn(n,r){var s=Zt();r=r===void 0?null:r;var d=s.memoizedState;return r!==null&&ll(r,d[1])?d[0]:(s.memoizedState=[n,r],n)}function La(n,r){var s=Zt();r=r===void 0?null:r;var d=s.memoizedState;if(r!==null&&ll(r,d[1]))return d[0];if(d=n(),Cn){ri(!0);try{n()}finally{ri(!1)}}return s.memoizedState=[d,r],d}function ml(n,r,s){return s===void 0||(Yi&1073741824)!==0?n.memoizedState=r:(n.memoizedState=s,n=Xh(),qe.lanes|=n,gr|=n,s)}function Mf(n,r,s,d){return li(s,r)?s:ts.current!==null?(n=ml(n,s,d),li(n,r)||(fn=!0),n):(Yi&42)===0?(fn=!0,n.memoizedState=s):(n=Xh(),qe.lanes|=n,gr|=n,r)}function gl(n,r,s,d,g){var w=le.p;le.p=w!==0&&8>w?w:8;var M=Z.T,z={};Z.T=z,Rf(n,!1,r,s);try{var U=g(),J=Z.S;if(J!==null&&J(z,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var ce=og(U,d);rs(n,r,ce,An(n))}else rs(n,r,d,An(n))}catch(he){rs(n,r,{then:function(){},status:"rejected",reason:he},An())}finally{le.p=w,Z.T=M}}function vh(){}function xl(n,r,s,d){if(n.tag!==5)throw Error(a(476));var g=jf(n).queue;gl(n,g,r,ue,s===null?vh:function(){return iu(n),s(d)})}function jf(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:ue},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:s},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function iu(n){var r=jf(n).next.queue;rs(n,r,{},An())}function vl(){return Bt(Co)}function ka(){return Zt().memoizedState}function yh(){return Zt().memoizedState}function ur(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var s=An();n=or(s);var d=Oa(r,n,s);d!==null&&(mi(d,r,s),sl(d,r,s)),r={cache:lf()},n.payload=r;return}r=r.return}}function wh(n,r,s){var d=An();s={lane:d,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},au(n)?bh(r,s):(s=Ys(n,r,s,d),s!==null&&(mi(s,n,d),Lf(s,r,d)))}function Of(n,r,s){var d=An();rs(n,r,s,d)}function rs(n,r,s,d){var g={lane:d,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(au(n))bh(r,g);else{var w=n.alternate;if(n.lanes===0&&(w===null||w.lanes===0)&&(w=r.lastRenderedReducer,w!==null))try{var M=r.lastRenderedState,z=w(M,s);if(g.hasEagerState=!0,g.eagerState=z,li(z,M))return Ui(n,r,g,0),Rt===null&&qr(),!1}catch{}finally{}if(s=Ys(n,r,g,d),s!==null)return mi(s,n,d),Lf(s,r,d),!0}return!1}function Rf(n,r,s,d){if(d={lane:2,revertLane:Eu(),action:d,hasEagerState:!1,eagerState:null,next:null},au(n)){if(r)throw Error(a(479))}else r=Ys(n,s,d,2),r!==null&&mi(r,n,2)}function au(n){var r=n.alternate;return n===qe||r!==null&&r===qe}function bh(n,r){ns=Qs=!0;var s=n.pending;s===null?r.next=r:(r.next=s.next,s.next=r),n.pending=r}function Lf(n,r,s){if((s&4194048)!==0){var d=r.lanes;d&=n.pendingLanes,s|=d,r.lanes=s,wp(n,s)}}var yl={readContext:Bt,use:Yc,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt},Sh={readContext:Bt,use:Yc,useCallback:function(n,r){return Yn().memoizedState=[n,r===void 0?null:r],n},useContext:Bt,useEffect:gh,useImperativeHandle:function(n,r,s){s=s!=null?s.concat([n]):null,fl(4194308,4,tu.bind(null,r,n),s)},useLayoutEffect:function(n,r){return fl(4194308,4,n,r)},useInsertionEffect:function(n,r){fl(4,2,n,r)},useMemo:function(n,r){var s=Yn();r=r===void 0?null:r;var d=n();if(Cn){ri(!0);try{n()}finally{ri(!1)}}return s.memoizedState=[d,r],d},useReducer:function(n,r,s){var d=Yn();if(s!==void 0){var g=s(r);if(Cn){ri(!0);try{s(r)}finally{ri(!1)}}}else g=r;return d.memoizedState=d.baseState=g,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:g},d.queue=n,n=n.dispatch=wh.bind(null,qe,n),[d.memoizedState,n]},useRef:function(n){var r=Yn();return n={current:n},r.memoizedState=n},useState:function(n){n=Xc(n);var r=n.queue,s=Of.bind(null,qe,r);return r.dispatch=s,[n.memoizedState,s]},useDebugValue:nu,useDeferredValue:function(n,r){var s=Yn();return ml(s,n,r)},useTransition:function(){var n=Xc(!1);return n=gl.bind(null,qe,n.queue,!0,!1),Yn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,s){var d=qe,g=Yn();if(Je){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),Rt===null)throw Error(a(349));(at&124)!==0||Wc(d,r,s)}g.memoizedState=s;var w={value:s,getSnapshot:r};return g.queue=w,gh(Zc.bind(null,d,w,n),[n]),d.flags|=2048,eo(9,eu(),fh.bind(null,d,w,s,r),null),s},useId:function(){var n=Yn(),r=Rt.identifierPrefix;if(Je){var s=Ma,d=zt;s=(d&~(1<<32-Rn(d)-1)).toString(32)+s,r="«"+r+"R"+s,s=Js++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=ch++,r="«"+r+"r"+s.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:vl,useFormState:Tf,useActionState:Tf,useOptimistic:function(n){var r=Yn();r.memoizedState=r.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=Rf.bind(null,qe,!0,s),s.dispatch=r,[n,r]},useMemoCache:ul,useCacheRefresh:function(){return Yn().memoizedState=ur.bind(null,qe)}},kf={readContext:Bt,use:Yc,useCallback:Fn,useContext:Bt,useEffect:di,useImperativeHandle:Ef,useInsertionEffect:xh,useLayoutEffect:hl,useMemo:La,useReducer:Fc,useRef:to,useState:function(){return Fc(la)},useDebugValue:nu,useDeferredValue:function(n,r){var s=Zt();return Mf(s,ht.memoizedState,n,r)},useTransition:function(){var n=Fc(la)[0],r=Zt().memoizedState;return[typeof n=="boolean"?n:cl(n),r]},useSyncExternalStore:yf,useId:ka,useHostTransitionStatus:vl,useFormState:Jc,useActionState:Jc,useOptimistic:function(n,r){var s=Zt();return dl(s,ht,n,r)},useMemoCache:ul,useCacheRefresh:yh},Ch={readContext:Bt,use:Yc,useCallback:Fn,useContext:Bt,useEffect:di,useImperativeHandle:Ef,useInsertionEffect:xh,useLayoutEffect:hl,useMemo:La,useReducer:vf,useRef:to,useState:function(){return vf(la)},useDebugValue:nu,useDeferredValue:function(n,r){var s=Zt();return ht===null?ml(s,n,r):Mf(s,ht.memoizedState,n,r)},useTransition:function(){var n=vf(la)[0],r=Zt().memoizedState;return[typeof n=="boolean"?n:cl(n),r]},useSyncExternalStore:yf,useId:ka,useHostTransitionStatus:vl,useFormState:Ge,useActionState:Ge,useOptimistic:function(n,r){var s=Zt();return ht!==null?dl(s,ht,n,r):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:ul,useCacheRefresh:yh},Jt=null,Wn=0;function ru(n){var r=Wn;return Wn+=1,Jt===null&&(Jt=[]),df(Jt,n,r)}function wl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function ss(n,r){throw r.$$typeof===b?Error(a(525)):(n=Object.prototype.toString.call(r),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function os(n){var r=n._init;return r(n._payload)}function Df(n){function r(W,q){if(n){var K=W.deletions;K===null?(W.deletions=[q],W.flags|=16):K.push(q)}}function s(W,q){if(!n)return null;for(;q!==null;)r(W,q),q=q.sibling;return null}function d(W){for(var q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function g(W,q){return W=kn(W,q),W.index=0,W.sibling=null,W}function w(W,q,K){return W.index=K,n?(K=W.alternate,K!==null?(K=K.index,K<q?(W.flags|=67108866,q):K):(W.flags|=67108866,q)):(W.flags|=1048576,q)}function M(W){return n&&W.alternate===null&&(W.flags|=67108866),W}function z(W,q,K,fe){return q===null||q.tag!==6?(q=rf(K,W.mode,fe),q.return=W,q):(q=g(q,K),q.return=W,q)}function U(W,q,K,fe){var Te=K.type;return Te===A?ce(W,q,K.props.children,fe,K.key):q!==null&&(q.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===Q&&os(Te)===q.type)?(q=g(q,K.props),wl(q,K),q.return=W,q):(q=_c(K.type,K.key,K.props,null,W.mode,fe),wl(q,K),q.return=W,q)}function J(W,q,K,fe){return q===null||q.tag!==4||q.stateNode.containerInfo!==K.containerInfo||q.stateNode.implementation!==K.implementation?(q=Fs(K,W.mode,fe),q.return=W,q):(q=g(q,K.children||[]),q.return=W,q)}function ce(W,q,K,fe,Te){return q===null||q.tag!==7?(q=Zr(K,W.mode,fe,Te),q.return=W,q):(q=g(q,K),q.return=W,q)}function he(W,q,K){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=rf(""+q,W.mode,K),q.return=W,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case S:return K=_c(q.type,q.key,q.props,null,W.mode,K),wl(K,q),K.return=W,K;case E:return q=Fs(q,W.mode,K),q.return=W,q;case Q:var fe=q._init;return q=fe(q._payload),he(W,q,K)}if(Ae(q)||ye(q))return q=Zr(q,W.mode,K,null),q.return=W,q;if(typeof q.then=="function")return he(W,ru(q),K);if(q.$$typeof===L)return he(W,Bc(W,q),K);ss(W,q)}return null}function te(W,q,K,fe){var Te=q!==null?q.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Te!==null?null:z(W,q,""+K,fe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case S:return K.key===Te?U(W,q,K,fe):null;case E:return K.key===Te?J(W,q,K,fe):null;case Q:return Te=K._init,K=Te(K._payload),te(W,q,K,fe)}if(Ae(K)||ye(K))return Te!==null?null:ce(W,q,K,fe,null);if(typeof K.then=="function")return te(W,q,ru(K),fe);if(K.$$typeof===L)return te(W,q,Bc(W,K),fe);ss(W,K)}return null}function ee(W,q,K,fe,Te){if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return W=W.get(K)||null,z(q,W,""+fe,Te);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case S:return W=W.get(fe.key===null?K:fe.key)||null,U(q,W,fe,Te);case E:return W=W.get(fe.key===null?K:fe.key)||null,J(q,W,fe,Te);case Q:var We=fe._init;return fe=We(fe._payload),ee(W,q,K,fe,Te)}if(Ae(fe)||ye(fe))return W=W.get(K)||null,ce(q,W,fe,Te,null);if(typeof fe.then=="function")return ee(W,q,K,ru(fe),Te);if(fe.$$typeof===L)return ee(W,q,K,Bc(q,fe),Te);ss(q,fe)}return null}function ze(W,q,K,fe){for(var Te=null,We=null,je=q,He=q=0,mn=null;je!==null&&He<K.length;He++){je.index>He?(mn=je,je=null):mn=je.sibling;var ot=te(W,je,K[He],fe);if(ot===null){je===null&&(je=mn);break}n&&je&&ot.alternate===null&&r(W,je),q=w(ot,q,He),We===null?Te=ot:We.sibling=ot,We=ot,je=mn}if(He===K.length)return s(W,je),Je&&Xr(W,He),Te;if(je===null){for(;He<K.length;He++)je=he(W,K[He],fe),je!==null&&(q=w(je,q,He),We===null?Te=je:We.sibling=je,We=je);return Je&&Xr(W,He),Te}for(je=d(je);He<K.length;He++)mn=ee(je,W,He,K[He],fe),mn!==null&&(n&&mn.alternate!==null&&je.delete(mn.key===null?He:mn.key),q=w(mn,q,He),We===null?Te=mn:We.sibling=mn,We=mn);return n&&je.forEach(function(Er){return r(W,Er)}),Je&&Xr(W,He),Te}function De(W,q,K,fe){if(K==null)throw Error(a(151));for(var Te=null,We=null,je=q,He=q=0,mn=null,ot=K.next();je!==null&&!ot.done;He++,ot=K.next()){je.index>He?(mn=je,je=null):mn=je.sibling;var Er=te(W,je,ot.value,fe);if(Er===null){je===null&&(je=mn);break}n&&je&&Er.alternate===null&&r(W,je),q=w(Er,q,He),We===null?Te=Er:We.sibling=Er,We=Er,je=mn}if(ot.done)return s(W,je),Je&&Xr(W,He),Te;if(je===null){for(;!ot.done;He++,ot=K.next())ot=he(W,ot.value,fe),ot!==null&&(q=w(ot,q,He),We===null?Te=ot:We.sibling=ot,We=ot);return Je&&Xr(W,He),Te}for(je=d(je);!ot.done;He++,ot=K.next())ot=ee(je,W,He,ot.value,fe),ot!==null&&(n&&ot.alternate!==null&&je.delete(ot.key===null?He:ot.key),q=w(ot,q,He),We===null?Te=ot:We.sibling=ot,We=ot);return n&&je.forEach(function(Gg){return r(W,Gg)}),Je&&Xr(W,He),Te}function St(W,q,K,fe){if(typeof K=="object"&&K!==null&&K.type===A&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case S:e:{for(var Te=K.key;q!==null;){if(q.key===Te){if(Te=K.type,Te===A){if(q.tag===7){s(W,q.sibling),fe=g(q,K.props.children),fe.return=W,W=fe;break e}}else if(q.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===Q&&os(Te)===q.type){s(W,q.sibling),fe=g(q,K.props),wl(fe,K),fe.return=W,W=fe;break e}s(W,q);break}else r(W,q);q=q.sibling}K.type===A?(fe=Zr(K.props.children,W.mode,fe,K.key),fe.return=W,W=fe):(fe=_c(K.type,K.key,K.props,null,W.mode,fe),wl(fe,K),fe.return=W,W=fe)}return M(W);case E:e:{for(Te=K.key;q!==null;){if(q.key===Te)if(q.tag===4&&q.stateNode.containerInfo===K.containerInfo&&q.stateNode.implementation===K.implementation){s(W,q.sibling),fe=g(q,K.children||[]),fe.return=W,W=fe;break e}else{s(W,q);break}else r(W,q);q=q.sibling}fe=Fs(K,W.mode,fe),fe.return=W,W=fe}return M(W);case Q:return Te=K._init,K=Te(K._payload),St(W,q,K,fe)}if(Ae(K))return ze(W,q,K,fe);if(ye(K)){if(Te=ye(K),typeof Te!="function")throw Error(a(150));return K=Te.call(K),De(W,q,K,fe)}if(typeof K.then=="function")return St(W,q,ru(K),fe);if(K.$$typeof===L)return St(W,q,Bc(W,K),fe);ss(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,q!==null&&q.tag===6?(s(W,q.sibling),fe=g(q,K),fe.return=W,W=fe):(s(W,q),fe=rf(K,W.mode,fe),fe.return=W,W=fe),M(W)):s(W,q)}return function(W,q,K,fe){try{Wn=0;var Te=St(W,q,K,fe);return Jt=null,Te}catch(je){if(je===Dn||je===Uc)throw je;var We=Un(29,je,null,W.mode);return We.lanes=fe,We.return=W,We}finally{}}}var ls=Df(!0),Th=Df(!1),fi=re(null),zn=null;function Di(n){var r=n.alternate;be(It,It.current&1),be(fi,n),zn===null&&(r===null||ts.current!==null||r.memoizedState!==null)&&(zn=n)}function Ah(n){if(n.tag===22){if(be(It,It.current),be(fi,n),zn===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(zn=n)}}else Da()}function Da(){be(It,It.current),be(fi,fi.current)}function ca(n){we(fi),zn===n&&(zn=null),we(It)}var It=re(0);function bl(n){for(var r=n;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Vn(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function no(n,r,s,d){r=n.memoizedState,s=s(d,r),s=s==null?r:y({},r,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Sl={enqueueSetState:function(n,r,s){n=n._reactInternals;var d=An(),g=or(d);g.payload=r,s!=null&&(g.callback=s),r=Oa(n,g,d),r!==null&&(mi(r,n,d),sl(r,n,d))},enqueueReplaceState:function(n,r,s){n=n._reactInternals;var d=An(),g=or(d);g.tag=1,g.payload=r,s!=null&&(g.callback=s),r=Oa(n,g,d),r!==null&&(mi(r,n,d),sl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var s=An(),d=or(s);d.tag=2,r!=null&&(d.callback=r),r=Oa(n,d,s),r!==null&&(mi(r,n,s),sl(r,n,s))}};function Cl(n,r,s,d,g,w,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,w,M):r.prototype&&r.prototype.isPureReactComponent?!sa(s,d)||!sa(g,w):!0}function Eh(n,r,s,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,d),r.state!==n&&Sl.enqueueReplaceState(r,r.state,null)}function dr(n,r){var s=r;if("ref"in r){s={};for(var d in r)d!=="ref"&&(s[d]=r[d])}if(n=n.defaultProps){s===r&&(s=y({},s));for(var g in n)s[g]===void 0&&(s[g]=n[g])}return s}var cs=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function zf(n){cs(n)}function su(n){console.error(n)}function Mh(n){cs(n)}function Tl(n,r){try{var s=n.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(d){setTimeout(function(){throw d})}}function ua(n,r,s){try{var d=n.onCaughtError;d(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(g){setTimeout(function(){throw g})}}function ou(n,r,s){return s=or(s),s.tag=3,s.payload={element:null},s.callback=function(){Tl(n,r)},s}function Hf(n){return n=or(n),n.tag=3,n}function jh(n,r,s,d){var g=s.type.getDerivedStateFromError;if(typeof g=="function"){var w=d.value;n.payload=function(){return g(w)},n.callback=function(){ua(r,s,d)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(n.callback=function(){ua(r,s,d),typeof g!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var z=d.stack;this.componentDidCatch(d.value,{componentStack:z!==null?z:""})})}function Oh(n,r,s,d,g){if(s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){if(r=s.alternate,r!==null&&il(r,s,g,!0),s=fi.current,s!==null){switch(s.tag){case 13:return zn===null?e0():s.alternate===null&&Ut===0&&(Ut=3),s.flags&=-257,s.flags|=65536,s.lanes=g,d===uf?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([d]):r.add(d),i0(n,d,g)),!1;case 22:return s.flags|=65536,d===uf?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([d])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([d]):s.add(d)),i0(n,d,g)),!1}throw Error(a(435,s.tag))}return i0(n,d,g),e0(),!1}if(Je)return r=fi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=g,d!==Ws&&(n=Error(a(422),{cause:d}),rr(Ln(n,s)))):(d!==Ws&&(r=Error(a(423),{cause:d}),rr(Ln(r,s))),n=n.current.alternate,n.flags|=65536,g&=-g,n.lanes|=g,d=Ln(d,s),g=ou(n.stateNode,d,g),Gi(n,g),Ut!==4&&(Ut=2)),!1;var w=Error(a(520),{cause:d});if(w=Ln(w,s),zl===null?zl=[w]:zl.push(w),Ut!==4&&(Ut=2),r===null)return!0;d=Ln(d,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,n=g&-g,s.lanes|=n,n=ou(s.stateNode,d,n),Gi(s,n),!1;case 1:if(r=s.type,w=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(xr===null||!xr.has(w))))return s.flags|=65536,g&=-g,s.lanes|=g,g=Hf(g),jh(g,n,s,d),Gi(s,g),!1}s=s.return}while(s!==null);return!1}var Rh=Error(a(461)),fn=!1;function kt(n,r,s,d){r.child=n===null?Th(r,null,s,d):ls(r,n.child,s,d)}function lu(n,r,s,d,g){s=s.render;var w=r.ref;if("ref"in d){var M={};for(var z in d)z!=="ref"&&(M[z]=d[z])}else M=d;return Qr(r),d=hf(n,r,s,M,w,g),z=gf(),n!==null&&!fn?(is(n,r,g),za(n,r,g)):(Je&&z&&of(r),r.flags|=1,kt(n,r,d,g),r.child)}function cu(n,r,s,d,g){if(n===null){var w=s.type;return typeof w=="function"&&!Wr(w)&&w.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=w,uu(n,r,w,d,g)):(n=_c(s.type,null,d,r,r.mode,g),n.ref=r.ref,n.return=r,r.child=n)}if(w=n.child,!Fi(n,g)){var M=w.memoizedProps;if(s=s.compare,s=s!==null?s:sa,s(M,d)&&n.ref===r.ref)return za(n,r,g)}return r.flags|=1,n=kn(w,d),n.ref=r.ref,n.return=r,r.child=n}function uu(n,r,s,d,g){if(n!==null){var w=n.memoizedProps;if(sa(w,d)&&n.ref===r.ref)if(fn=!1,r.pendingProps=d=w,Fi(n,g))(n.flags&131072)!==0&&(fn=!0);else return r.lanes=n.lanes,za(n,r,g)}return io(n,r,s,d,g)}function Al(n,r,s){var d=r.pendingProps,g=d.children,w=n!==null?n.memoizedState:null;if(d.mode==="hidden"){if((r.flags&128)!==0){if(d=w!==null?w.baseLanes|s:s,n!==null){for(g=r.child=n.child,w=0;g!==null;)w=w|g.lanes|g.childLanes,g=g.sibling;r.childLanes=w&~d}else r.childLanes=0,r.child=null;return us(n,r,d,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ic(r,w!==null?w.cachePool:null),w!==null?Ra(r,w):Gc(),Ah(r);else return r.lanes=r.childLanes=536870912,us(n,r,w!==null?w.baseLanes|s:s,s)}else w!==null?(Ic(r,w.cachePool),Ra(r,w),Da(),r.memoizedState=null):(n!==null&&Ic(r,null),Gc(),Da());return kt(n,r,g,s),r.child}function us(n,r,s,d){var g=ja();return g=g===null?null:{parent:Et._currentValue,pool:g},r.memoizedState={baseLanes:s,cachePool:g},n!==null&&Ic(r,null),Gc(),Ah(r),n!==null&&il(n,r,d,!0),null}function Le(n,r){var s=r.ref;if(s===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(r.flags|=4194816)}}function io(n,r,s,d,g){return Qr(r),s=hf(n,r,s,d,void 0,g),d=gf(),n!==null&&!fn?(is(n,r,g),za(n,r,g)):(Je&&d&&of(r),r.flags|=1,kt(n,r,s,g),r.child)}function du(n,r,s,d,g,w){return Qr(r),r.updateQueue=null,s=dh(r,d,s,g),uh(n),d=gf(),n!==null&&!fn?(is(n,r,w),za(n,r,w)):(Je&&d&&of(r),r.flags|=1,kt(n,r,s,w),r.child)}function fr(n,r,s,d,g){if(Qr(r),r.stateNode===null){var w=Fr,M=s.contextType;typeof M=="object"&&M!==null&&(w=Bt(M)),w=new s(d,w),r.memoizedState=w.state!==null&&w.state!==void 0?w.state:null,w.updater=Sl,r.stateNode=w,w._reactInternals=r,w=r.stateNode,w.props=d,w.state=r.memoizedState,w.refs={},es(r),M=s.contextType,w.context=typeof M=="object"&&M!==null?Bt(M):Fr,w.state=r.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(no(r,s,M,d),w.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof w.getSnapshotBeforeUpdate=="function"||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(M=w.state,typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount(),M!==w.state&&Sl.enqueueReplaceState(w,w.state,null),Sn(r,d,w,g),qi(),w.state=r.memoizedState),typeof w.componentDidMount=="function"&&(r.flags|=4194308),d=!0}else if(n===null){w=r.stateNode;var z=r.memoizedProps,U=dr(s,z);w.props=U;var J=w.context,ce=s.contextType;M=Fr,typeof ce=="object"&&ce!==null&&(M=Bt(ce));var he=s.getDerivedStateFromProps;ce=typeof he=="function"||typeof w.getSnapshotBeforeUpdate=="function",z=r.pendingProps!==z,ce||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(z||J!==M)&&Eh(r,w,d,M),oa=!1;var te=r.memoizedState;w.state=te,Sn(r,d,w,g),qi(),J=r.memoizedState,z||te!==J||oa?(typeof he=="function"&&(no(r,s,he,d),J=r.memoizedState),(U=oa||Cl(r,s,U,d,te,J,M))?(ce||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=J),w.props=d,w.state=J,w.context=M,d=U):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{w=r.stateNode,Ks(n,r),M=r.memoizedProps,ce=dr(s,M),w.props=ce,he=r.pendingProps,te=w.context,J=s.contextType,U=Fr,typeof J=="object"&&J!==null&&(U=Bt(J)),z=s.getDerivedStateFromProps,(J=typeof z=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(M!==he||te!==U)&&Eh(r,w,d,U),oa=!1,te=r.memoizedState,w.state=te,Sn(r,d,w,g),qi();var ee=r.memoizedState;M!==he||te!==ee||oa||n!==null&&n.dependencies!==null&&Pc(n.dependencies)?(typeof z=="function"&&(no(r,s,z,d),ee=r.memoizedState),(ce=oa||Cl(r,s,ce,d,te,ee,U)||n!==null&&n.dependencies!==null&&Pc(n.dependencies))?(J||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,ee,U),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,ee,U)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||M===n.memoizedProps&&te===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||M===n.memoizedProps&&te===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=ee),w.props=d,w.state=ee,w.context=U,d=ce):(typeof w.componentDidUpdate!="function"||M===n.memoizedProps&&te===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||M===n.memoizedProps&&te===n.memoizedState||(r.flags|=1024),d=!1)}return w=d,Le(n,r),d=(r.flags&128)!==0,w||d?(w=r.stateNode,s=d&&typeof s.getDerivedStateFromError!="function"?null:w.render(),r.flags|=1,n!==null&&d?(r.child=ls(r,n.child,null,g),r.child=ls(r,null,s,g)):kt(n,r,s,g),r.memoizedState=w.state,n=r.child):n=za(n,r,g),n}function Lh(n,r,s,d){return nl(),r.flags|=256,kt(n,r,s,d),r.child}var El={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fu(n){return{baseLanes:n,cachePool:ih()}}function pn(n,r,s){return n=n!==null?n.childLanes&~s:0,r&&(n|=Hi),n}function kh(n,r,s){var d=r.pendingProps,g=!1,w=(r.flags&128)!==0,M;if((M=w)||(M=n!==null&&n.memoizedState===null?!1:(It.current&2)!==0),M&&(g=!0,r.flags&=-129),M=(r.flags&32)!==0,r.flags&=-33,n===null){if(Je){if(g?Di(r):Da(),Je){var z=Ht,U;if(U=z){e:{for(U=z,z=$n;U.nodeType!==8;){if(!z){z=null;break e}if(U=Zi(U.nextSibling),U===null){z=null;break e}}z=U}z!==null?(r.memoizedState={dehydrated:z,treeContext:Lt!==null?{id:zt,overflow:Ma}:null,retryLane:536870912,hydrationErrors:null},U=Un(18,null,null,0),U.stateNode=z,U.return=r,r.child=U,Qt=r,Ht=null,U=!0):U=!1}U||Ri(r)}if(z=r.memoizedState,z!==null&&(z=z.dehydrated,z!==null))return Vn(z)?r.lanes=32:r.lanes=536870912,null;ca(r)}return z=d.children,d=d.fallback,g?(Da(),g=r.mode,z=Ml({mode:"hidden",children:z},g),d=Zr(d,g,s,null),z.return=r,d.return=r,z.sibling=d,r.child=z,g=r.child,g.memoizedState=fu(s),g.childLanes=pn(n,M,s),r.memoizedState=El,d):(Di(r),Vf(r,z))}if(U=n.memoizedState,U!==null&&(z=U.dehydrated,z!==null)){if(w)r.flags&256?(Di(r),r.flags&=-257,r=_f(n,r,s)):r.memoizedState!==null?(Da(),r.child=n.child,r.flags|=128,r=null):(Da(),g=d.fallback,z=r.mode,d=Ml({mode:"visible",children:d.children},z),g=Zr(g,z,s,null),g.flags|=2,d.return=r,g.return=r,d.sibling=g,r.child=d,ls(r,n.child,null,s),d=r.child,d.memoizedState=fu(s),d.childLanes=pn(n,M,s),r.memoizedState=El,r=g);else if(Di(r),Vn(z)){if(M=z.nextSibling&&z.nextSibling.dataset,M)var J=M.dgst;M=J,d=Error(a(419)),d.stack="",d.digest=M,rr({value:d,source:null,stack:null}),r=_f(n,r,s)}else if(fn||il(n,r,s,!1),M=(s&n.childLanes)!==0,fn||M){if(M=Rt,M!==null&&(d=s&-s,d=(d&42)!==0?1:Md(d),d=(d&(M.suspendedLanes|s))!==0?0:d,d!==0&&d!==U.retryLane))throw U.retryLane=d,Yr(n,d),mi(M,n,d),Rh;z.data==="$?"||e0(),r=_f(n,r,s)}else z.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=U.treeContext,Ht=Zi(z.nextSibling),Qt=r,Je=!0,$i=null,$n=!1,n!==null&&(ji[Oi++]=zt,ji[Oi++]=Ma,ji[Oi++]=Lt,zt=n.id,Ma=n.overflow,Lt=r),r=Vf(r,d.children),r.flags|=4096);return r}return g?(Da(),g=d.fallback,z=r.mode,U=n.child,J=U.sibling,d=kn(U,{mode:"hidden",children:d.children}),d.subtreeFlags=U.subtreeFlags&65011712,J!==null?g=kn(J,g):(g=Zr(g,z,s,null),g.flags|=2),g.return=r,d.return=r,d.sibling=g,r.child=d,d=g,g=r.child,z=n.child.memoizedState,z===null?z=fu(s):(U=z.cachePool,U!==null?(J=Et._currentValue,U=U.parent!==J?{parent:J,pool:J}:U):U=ih(),z={baseLanes:z.baseLanes|s,cachePool:U}),g.memoizedState=z,g.childLanes=pn(n,M,s),r.memoizedState=El,d):(Di(r),s=n.child,n=s.sibling,s=kn(s,{mode:"visible",children:d.children}),s.return=r,s.sibling=null,n!==null&&(M=r.deletions,M===null?(r.deletions=[n],r.flags|=16):M.push(n)),r.child=s,r.memoizedState=null,s)}function Vf(n,r){return r=Ml({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Ml(n,r){return n=Un(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function _f(n,r,s){return ls(r,n.child,null,s),n=Vf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Nf(n,r,s){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),Gn(n.return,r,s)}function Pf(n,r,s,d,g){var w=n.memoizedState;w===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:s,tailMode:g}:(w.isBackwards=r,w.rendering=null,w.renderingStartTime=0,w.last=d,w.tail=s,w.tailMode=g)}function Dh(n,r,s){var d=r.pendingProps,g=d.revealOrder,w=d.tail;if(kt(n,r,d.children,s),d=It.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Nf(n,s,r);else if(n.tag===19)Nf(n,s,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}switch(be(It,d),g){case"forwards":for(s=r.child,g=null;s!==null;)n=s.alternate,n!==null&&bl(n)===null&&(g=s),s=s.sibling;s=g,s===null?(g=r.child,r.child=null):(g=s.sibling,s.sibling=null),Pf(r,!1,g,s,w);break;case"backwards":for(s=null,g=r.child,r.child=null;g!==null;){if(n=g.alternate,n!==null&&bl(n)===null){r.child=g;break}n=g.sibling,g.sibling=s,s=g,g=n}Pf(r,!0,s,null,w);break;case"together":Pf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function za(n,r,s){if(n!==null&&(r.dependencies=n.dependencies),gr|=r.lanes,(s&r.childLanes)===0)if(n!==null){if(il(n,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(a(153));if(r.child!==null){for(n=r.child,s=kn(n,n.pendingProps),r.child=s,s.return=r;n.sibling!==null;)n=n.sibling,s=s.sibling=kn(n,n.pendingProps),s.return=r;s.sibling=null}return r.child}function Fi(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Pc(n)))}function Hn(n,r,s){switch(r.tag){case 3:it(r,r.stateNode.containerInfo),ui(r,Et,n.memoizedState.cache),nl();break;case 27:case 5:Br(r);break;case 4:it(r,r.stateNode.containerInfo);break;case 10:ui(r,r.type,r.memoizedProps.value);break;case 13:var d=r.memoizedState;if(d!==null)return d.dehydrated!==null?(Di(r),r.flags|=128,null):(s&r.child.childLanes)!==0?kh(n,r,s):(Di(r),n=za(n,r,s),n!==null?n.sibling:null);Di(r);break;case 19:var g=(n.flags&128)!==0;if(d=(s&r.childLanes)!==0,d||(il(n,r,s,!1),d=(s&r.childLanes)!==0),g){if(d)return Dh(n,r,s);r.flags|=128}if(g=r.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),be(It,It.current),d)break;return null;case 22:case 23:return r.lanes=0,Al(n,r,s);case 24:ui(r,Et,n.memoizedState.cache)}return za(n,r,s)}function pu(n,r,s){if(n!==null)if(n.memoizedProps!==r.pendingProps)fn=!0;else{if(!Fi(n,s)&&(r.flags&128)===0)return fn=!1,Hn(n,r,s);fn=(n.flags&131072)!==0}else fn=!1,Je&&(r.flags&1048576)!==0&&sf(r,Jo,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var d=r.elementType,g=d._init;if(d=g(d._payload),r.type=d,typeof d=="function")Wr(d)?(n=dr(d,n),r.tag=1,r=fr(null,r,d,n,s)):(r.tag=0,r=io(null,r,d,n,s));else{if(d!=null){if(g=d.$$typeof,g===P){r.tag=11,r=lu(null,r,d,n,s);break e}else if(g===G){r.tag=14,r=cu(null,r,d,n,s);break e}}throw r=Oe(d)||d,Error(a(306,r,""))}}return r;case 0:return io(n,r,r.type,r.pendingProps,s);case 1:return d=r.type,g=dr(d,r.pendingProps),fr(n,r,d,g,s);case 3:e:{if(it(r,r.stateNode.containerInfo),n===null)throw Error(a(387));d=r.pendingProps;var w=r.memoizedState;g=w.element,Ks(n,r),Sn(r,d,null,s);var M=r.memoizedState;if(d=M.cache,ui(r,Et,d),d!==w.cache&&Fe(r,[Et],s,!0),qi(),d=M.element,w.isDehydrated)if(w={element:d,isDehydrated:!1,cache:M.cache},r.updateQueue.baseState=w,r.memoizedState=w,r.flags&256){r=Lh(n,r,d,s);break e}else if(d!==g){g=Ln(Error(a(424)),r),rr(g),r=Lh(n,r,d,s);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Ht=Zi(n.firstChild),Qt=r,Je=!0,$i=null,$n=!0,s=Th(r,null,d,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(nl(),d===g){r=za(n,r,s);break e}kt(n,r,d,s)}r=r.child}return r;case 26:return Le(n,r),n===null?(s=O1(r.type,null,r.pendingProps,null))?r.memoizedState=s:Je||(s=r.type,n=r.pendingProps,d=ps(ke.current).createElement(s),d[un]=r,d[Pn]=n,nn(d,s,n),dn(d),r.stateNode=d):r.memoizedState=O1(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Br(r),n===null&&Je&&(d=r.stateNode=E1(r.type,r.pendingProps,ke.current),Qt=r,$n=!0,g=Ht,Vi(r.type)?(f0=g,Ht=Zi(d.firstChild)):Ht=g),kt(n,r,r.pendingProps.children,s),Le(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Je&&((g=d=Ht)&&(d=T1(d,r.type,r.pendingProps,$n),d!==null?(r.stateNode=d,Qt=r,Ht=Zi(d.firstChild),$n=!1,g=!0):g=!1),g||Ri(r)),Br(r),g=r.type,w=r.pendingProps,M=n!==null?n.memoizedProps:null,d=w.children,Ru(g,w)?d=null:M!==null&&Ru(g,M)&&(r.flags|=32),r.memoizedState!==null&&(g=hf(n,r,mf,null,null,s),Co._currentValue=g),Le(n,r),kt(n,r,d,s),r.child;case 6:return n===null&&Je&&((n=s=Ht)&&(s=ku(s,r.pendingProps,$n),s!==null?(r.stateNode=s,Qt=r,Ht=null,n=!0):n=!1),n||Ri(r)),null;case 13:return kh(n,r,s);case 4:return it(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=ls(r,null,d,s):kt(n,r,d,s),r.child;case 11:return lu(n,r,r.type,r.pendingProps,s);case 7:return kt(n,r,r.pendingProps,s),r.child;case 8:return kt(n,r,r.pendingProps.children,s),r.child;case 12:return kt(n,r,r.pendingProps.children,s),r.child;case 10:return d=r.pendingProps,ui(r,r.type,d.value),kt(n,r,d.children,s),r.child;case 9:return g=r.type._context,d=r.pendingProps.children,Qr(r),g=Bt(g),d=d(g),r.flags|=1,kt(n,r,d,s),r.child;case 14:return cu(n,r,r.type,r.pendingProps,s);case 15:return uu(n,r,r.type,r.pendingProps,s);case 19:return Dh(n,r,s);case 31:return d=r.pendingProps,s=r.mode,d={mode:d.mode,children:d.children},n===null?(s=Ml(d,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=kn(n.child,d),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return Al(n,r,s);case 24:return Qr(r),d=Bt(Et),n===null?(g=ja(),g===null&&(g=Rt,w=lf(),g.pooledCache=w,w.refCount++,w!==null&&(g.pooledCacheLanes|=s),g=w),r.memoizedState={parent:d,cache:g},es(r),ui(r,Et,g)):((n.lanes&s)!==0&&(Ks(n,r),Sn(r,null,null,s),qi()),g=n.memoizedState,w=r.memoizedState,g.parent!==d?(g={parent:d,cache:d},r.memoizedState=g,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=g),ui(r,Et,d)):(d=w.cache,ui(r,Et,d),d!==g.cache&&Fe(r,[Et],s,!0))),kt(n,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Ha(n){n.flags|=4}function hu(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!an(r)){if(r=fi.current,r!==null&&((at&4194048)===at?zn!==null:(at&62914560)!==at&&(at&536870912)===0||r!==zn))throw Xs=uf,ah;n.flags|=8192}}function mu(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?vp():536870912,n.lanes|=r,uo|=r)}function jl(n,r){if(!Je)switch(n.tailMode){case"hidden":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var d=null;s!==null;)s.alternate!==null&&(d=s),s=s.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function Mt(n){var r=n.alternate!==null&&n.alternate.child===n.child,s=0,d=0;if(r)for(var g=n.child;g!==null;)s|=g.lanes|g.childLanes,d|=g.subtreeFlags&65011712,d|=g.flags&65011712,g.return=n,g=g.sibling;else for(g=n.child;g!==null;)s|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=n,g=g.sibling;return n.subtreeFlags|=d,n.childLanes=s,r}function zh(n,r,s){var d=r.pendingProps;switch(el(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(r),null;case 1:return Mt(r),null;case 3:return s=r.stateNode,d=null,n!==null&&(d=n.memoizedState.cache),r.memoizedState.cache!==d&&(r.flags|=2048),Li(Et),Ft(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(tl(r)?Ha(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Jp())),Mt(r),null;case 26:return s=r.memoizedState,n===null?(Ha(r),s!==null?(Mt(r),hu(r,s)):(Mt(r),r.flags&=-16777217)):s?s!==n.memoizedState?(Ha(r),Mt(r),hu(r,s)):(Mt(r),r.flags&=-16777217):(n.memoizedProps!==d&&Ha(r),Mt(r),r.flags&=-16777217),null;case 27:Si(r),s=ke.current;var g=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==d&&Ha(r);else{if(!d){if(r.stateNode===null)throw Error(a(166));return Mt(r),null}n=Re.current,tl(r)?Kp(r):(n=E1(g,d,s),r.stateNode=n,Ha(r))}return Mt(r),null;case 5:if(Si(r),s=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==d&&Ha(r);else{if(!d){if(r.stateNode===null)throw Error(a(166));return Mt(r),null}if(n=Re.current,tl(r))Kp(r);else{switch(g=ps(ke.current),n){case 1:n=g.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=g.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=g.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=g.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=g.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof d.is=="string"?g.createElement("select",{is:d.is}):g.createElement("select"),d.multiple?n.multiple=!0:d.size&&(n.size=d.size);break;default:n=typeof d.is=="string"?g.createElement(s,{is:d.is}):g.createElement(s)}}n[un]=r,n[Pn]=d;e:for(g=r.child;g!==null;){if(g.tag===5||g.tag===6)n.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break e;for(;g.sibling===null;){if(g.return===null||g.return===r)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}r.stateNode=n;e:switch(nn(n,s,d),s){case"button":case"input":case"select":case"textarea":n=!!d.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ha(r)}}return Mt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==d&&Ha(r);else{if(typeof d!="string"&&r.stateNode===null)throw Error(a(166));if(n=ke.current,tl(r)){if(n=r.stateNode,s=r.memoizedProps,d=null,g=Qt,g!==null)switch(g.tag){case 27:case 5:d=g.memoizedProps}n[un]=r,n=!!(n.nodeValue===s||d!==null&&d.suppressHydrationWarning===!0||w1(n.nodeValue,s)),n||Ri(r)}else n=ps(n).createTextNode(d),n[un]=r,r.stateNode=n}return Mt(r),null;case 13:if(d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(g=tl(r),d!==null&&d.dehydrated!==null){if(n===null){if(!g)throw Error(a(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(a(317));g[un]=r}else nl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Mt(r),g=!1}else g=Jp(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=g),g=!0;if(!g)return r.flags&256?(ca(r),r):(ca(r),null)}if(ca(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=d!==null,n=n!==null&&n.memoizedState!==null,s){d=r.child,g=null,d.alternate!==null&&d.alternate.memoizedState!==null&&d.alternate.memoizedState.cachePool!==null&&(g=d.alternate.memoizedState.cachePool.pool);var w=null;d.memoizedState!==null&&d.memoizedState.cachePool!==null&&(w=d.memoizedState.cachePool.pool),w!==g&&(d.flags|=2048)}return s!==n&&s&&(r.child.flags|=8192),mu(r,r.updateQueue),Mt(r),null;case 4:return Ft(),n===null&&l0(r.stateNode.containerInfo),Mt(r),null;case 10:return Li(r.type),Mt(r),null;case 19:if(we(It),g=r.memoizedState,g===null)return Mt(r),null;if(d=(r.flags&128)!==0,w=g.rendering,w===null)if(d)jl(g,!1);else{if(Ut!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(w=bl(n),w!==null){for(r.flags|=128,jl(g,!1),n=w.updateQueue,r.updateQueue=n,mu(r,n),r.subtreeFlags=0,n=s,s=r.child;s!==null;)Qo(s,n),s=s.sibling;return be(It,It.current&1|2),r.child}n=n.sibling}g.tail!==null&&cn()>fo&&(r.flags|=128,d=!0,jl(g,!1),r.lanes=4194304)}else{if(!d)if(n=bl(w),n!==null){if(r.flags|=128,d=!0,n=n.updateQueue,r.updateQueue=n,mu(r,n),jl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Je)return Mt(r),null}else 2*cn()-g.renderingStartTime>fo&&s!==536870912&&(r.flags|=128,d=!0,jl(g,!1),r.lanes=4194304);g.isBackwards?(w.sibling=r.child,r.child=w):(n=g.last,n!==null?n.sibling=w:r.child=w,g.last=w)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=cn(),r.sibling=null,n=It.current,be(It,d?n&1|2:n&1),r):(Mt(r),null);case 22:case 23:return ca(r),pf(),d=r.memoizedState!==null,n!==null?n.memoizedState!==null!==d&&(r.flags|=8192):d&&(r.flags|=8192),d?(s&536870912)!==0&&(r.flags&128)===0&&(Mt(r),r.subtreeFlags&6&&(r.flags|=8192)):Mt(r),s=r.updateQueue,s!==null&&mu(r,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),d=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(d=r.memoizedState.cachePool.pool),d!==s&&(r.flags|=2048),n!==null&&we(Jr),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Li(Et),Mt(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function Hh(n,r){switch(el(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Li(Et),Ft(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Si(r),null;case 13:if(ca(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(a(340));nl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return we(It),null;case 4:return Ft(),null;case 10:return Li(r.type),null;case 22:case 23:return ca(r),pf(),n!==null&&we(Jr),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Li(Et),null;case 25:return null;default:return null}}function Vh(n,r){switch(el(r),r.tag){case 3:Li(Et),Ft();break;case 26:case 27:case 5:Si(r);break;case 4:Ft();break;case 13:ca(r);break;case 19:we(It);break;case 10:Li(r.type);break;case 22:case 23:ca(r),pf(),n!==null&&we(Jr);break;case 24:Li(Et)}}function Ol(n,r){try{var s=r.updateQueue,d=s!==null?s.lastEffect:null;if(d!==null){var g=d.next;s=g;do{if((s.tag&n)===n){d=void 0;var w=s.create,M=s.inst;d=w(),M.destroy=d}s=s.next}while(s!==g)}}catch(z){jt(r,r.return,z)}}function pr(n,r,s){try{var d=r.updateQueue,g=d!==null?d.lastEffect:null;if(g!==null){var w=g.next;d=w;do{if((d.tag&n)===n){var M=d.inst,z=M.destroy;if(z!==void 0){M.destroy=void 0,g=r;var U=s,J=z;try{J()}catch(ce){jt(g,U,ce)}}}d=d.next}while(d!==w)}}catch(ce){jt(r,r.return,ce)}}function _h(n){var r=n.updateQueue;if(r!==null){var s=n.stateNode;try{ff(r,s)}catch(d){jt(n,n.return,d)}}}function Bf(n,r,s){s.props=dr(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(d){jt(n,r,d)}}function ao(n,r){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var d=n.stateNode;break;case 30:d=n.stateNode;break;default:d=n.stateNode}typeof s=="function"?n.refCleanup=s(d):s.current=d}}catch(g){jt(n,r,g)}}function da(n,r){var s=n.ref,d=n.refCleanup;if(s!==null)if(typeof d=="function")try{d()}catch(g){jt(n,r,g)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(g){jt(n,r,g)}else s.current=null}function gu(n){var r=n.type,s=n.memoizedProps,d=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&d.focus();break e;case"img":s.src?d.src=s.src:s.srcSet&&(d.srcset=s.srcSet)}}catch(g){jt(n,n.return,g)}}function xu(n,r,s){try{var d=n.stateNode;Cg(d,n.type,s,r),d[Pn]=r}catch(g){jt(n,n.return,g)}}function ro(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Vi(n.type)||n.tag===4}function Rl(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ro(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Vi(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vu(n,r,s){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(n),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=ju));else if(d!==4&&(d===27&&Vi(n.type)&&(s=n.stateNode,r=null),n=n.child,n!==null))for(vu(n,r,s),n=n.sibling;n!==null;)vu(n,r,s),n=n.sibling}function Ll(n,r,s){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?s.insertBefore(n,r):s.appendChild(n);else if(d!==4&&(d===27&&Vi(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(Ll(n,r,s),n=n.sibling;n!==null;)Ll(n,r,s),n=n.sibling}function kl(n){var r=n.stateNode,s=n.memoizedProps;try{for(var d=n.type,g=r.attributes;g.length;)r.removeAttributeNode(g[0]);nn(r,d,s),r[un]=n,r[Pn]=s}catch(w){jt(n,n.return,w)}}var fa=!1,dt=!1,Va=!1,Nh=typeof WeakSet=="function"?WeakSet:Set,en=null;function cg(n,r){if(n=n.containerInfo,Wi=Vu,n=Zp(n),tf(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var d=s.getSelection&&s.getSelection();if(d&&d.rangeCount!==0){s=d.anchorNode;var g=d.anchorOffset,w=d.focusNode;d=d.focusOffset;try{s.nodeType,w.nodeType}catch{s=null;break e}var M=0,z=-1,U=-1,J=0,ce=0,he=n,te=null;t:for(;;){for(var ee;he!==s||g!==0&&he.nodeType!==3||(z=M+g),he!==w||d!==0&&he.nodeType!==3||(U=M+d),he.nodeType===3&&(M+=he.nodeValue.length),(ee=he.firstChild)!==null;)te=he,he=ee;for(;;){if(he===n)break t;if(te===s&&++J===g&&(z=M),te===w&&++ce===d&&(U=M),(ee=he.nextSibling)!==null)break;he=te,te=he.parentNode}he=ee}s=z===-1||U===-1?null:{start:z,end:U}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ou={focusedElem:n,selectionRange:s},Vu=!1,en=r;en!==null;)if(r=en,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,en=n;else for(;en!==null;){switch(r=en,w=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&w!==null){n=void 0,s=r,g=w.memoizedProps,w=w.memoizedState,d=s.stateNode;try{var ze=dr(s.type,g,s.elementType===s.type);n=d.getSnapshotBeforeUpdate(ze,w),d.__reactInternalSnapshotBeforeUpdate=n}catch(De){jt(s,s.return,De)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,s=n.nodeType,s===9)d0(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":d0(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=r.sibling,n!==null){n.return=r.return,en=n;break}en=r.return}}function Ph(n,r,s){var d=s.flags;switch(s.tag){case 0:case 11:case 15:hr(n,s),d&4&&Ol(5,s);break;case 1:if(hr(n,s),d&4)if(n=s.stateNode,r===null)try{n.componentDidMount()}catch(M){jt(s,s.return,M)}else{var g=dr(s.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(g,r,n.__reactInternalSnapshotBeforeUpdate)}catch(M){jt(s,s.return,M)}}d&64&&_h(s),d&512&&ao(s,s.return);break;case 3:if(hr(n,s),d&64&&(n=s.updateQueue,n!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{ff(n,r)}catch(M){jt(s,s.return,M)}}break;case 27:r===null&&d&4&&kl(s);case 26:case 5:hr(n,s),r===null&&d&4&&gu(s),d&512&&ao(s,s.return);break;case 12:hr(n,s);break;case 13:hr(n,s),d&4&&Uh(n,s),d&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=Cu.bind(null,s),vo(n,s))));break;case 22:if(d=s.memoizedState!==null||fa,!d){r=r!==null&&r.memoizedState!==null||dt,g=fa;var w=dt;fa=d,(dt=r)&&!w?Na(n,s,(s.subtreeFlags&8772)!==0):hr(n,s),fa=g,dt=w}break;case 30:break;default:hr(n,s)}}function Bh(n){var r=n.alternate;r!==null&&(n.alternate=null,Bh(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Od(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Vt=null,Zn=!1;function _a(n,r,s){for(s=s.child;s!==null;)Ih(n,r,s),s=s.sibling}function Ih(n,r,s){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Po,s)}catch{}switch(s.tag){case 26:dt||da(s,r),_a(n,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:dt||da(s,r);var d=Vt,g=Zn;Vi(s.type)&&(Vt=s.stateNode,Zn=!1),_a(n,r,s),$l(s.stateNode),Vt=d,Zn=g;break;case 5:dt||da(s,r);case 6:if(d=Vt,g=Zn,Vt=null,_a(n,r,s),Vt=d,Zn=g,Vt!==null)if(Zn)try{(Vt.nodeType===9?Vt.body:Vt.nodeName==="HTML"?Vt.ownerDocument.body:Vt).removeChild(s.stateNode)}catch(w){jt(s,r,w)}else try{Vt.removeChild(s.stateNode)}catch(w){jt(s,r,w)}break;case 18:Vt!==null&&(Zn?(n=Vt,Lu(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),Kl(n)):Lu(Vt,s.stateNode));break;case 4:d=Vt,g=Zn,Vt=s.stateNode.containerInfo,Zn=!0,_a(n,r,s),Vt=d,Zn=g;break;case 0:case 11:case 14:case 15:dt||pr(2,s,r),dt||pr(4,s,r),_a(n,r,s);break;case 1:dt||(da(s,r),d=s.stateNode,typeof d.componentWillUnmount=="function"&&Bf(s,r,d)),_a(n,r,s);break;case 21:_a(n,r,s);break;case 22:dt=(d=dt)||s.memoizedState!==null,_a(n,r,s),dt=d;break;default:_a(n,r,s)}}function Uh(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Kl(n)}catch(s){jt(r,r.return,s)}}function ug(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Nh),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Nh),r;default:throw Error(a(435,n.tag))}}function If(n,r){var s=ug(n);r.forEach(function(d){var g=gg.bind(null,n,d);s.has(d)||(s.add(d),d.then(g,g))})}function pi(n,r){var s=r.deletions;if(s!==null)for(var d=0;d<s.length;d++){var g=s[d],w=n,M=r,z=M;e:for(;z!==null;){switch(z.tag){case 27:if(Vi(z.type)){Vt=z.stateNode,Zn=!1;break e}break;case 5:Vt=z.stateNode,Zn=!1;break e;case 3:case 4:Vt=z.stateNode.containerInfo,Zn=!0;break e}z=z.return}if(Vt===null)throw Error(a(160));Ih(w,M,g),Vt=null,Zn=!1,w=g.alternate,w!==null&&(w.return=null),g.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Uf(r,n),r=r.sibling}var zi=null;function Uf(n,r){var s=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:pi(r,n),Xn(n),d&4&&(pr(3,n,n.return),Ol(3,n),pr(5,n,n.return));break;case 1:pi(r,n),Xn(n),d&512&&(dt||s===null||da(s,s.return)),d&64&&fa&&(n=n.updateQueue,n!==null&&(d=n.callbacks,d!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?d:s.concat(d))));break;case 26:var g=zi;if(pi(r,n),Xn(n),d&512&&(dt||s===null||da(s,s.return)),d&4){var w=s!==null?s.memoizedState:null;if(d=n.memoizedState,s===null)if(d===null)if(n.stateNode===null){e:{d=n.type,s=n.memoizedProps,g=g.ownerDocument||g;t:switch(d){case"title":w=g.getElementsByTagName("title")[0],(!w||w[Bo]||w[un]||w.namespaceURI==="http://www.w3.org/2000/svg"||w.hasAttribute("itemprop"))&&(w=g.createElement(d),g.head.insertBefore(w,g.querySelector("head > title"))),nn(w,d,s),w[un]=n,dn(w),d=w;break e;case"link":var M=k1("link","href",g).get(d+(s.href||""));if(M){for(var z=0;z<M.length;z++)if(w=M[z],w.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&w.getAttribute("rel")===(s.rel==null?null:s.rel)&&w.getAttribute("title")===(s.title==null?null:s.title)&&w.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(z,1);break t}}w=g.createElement(d),nn(w,d,s),g.head.appendChild(w);break;case"meta":if(M=k1("meta","content",g).get(d+(s.content||""))){for(z=0;z<M.length;z++)if(w=M[z],w.getAttribute("content")===(s.content==null?null:""+s.content)&&w.getAttribute("name")===(s.name==null?null:s.name)&&w.getAttribute("property")===(s.property==null?null:s.property)&&w.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&w.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(z,1);break t}}w=g.createElement(d),nn(w,d,s),g.head.appendChild(w);break;default:throw Error(a(468,d))}w[un]=n,dn(w),d=w}n.stateNode=d}else D1(g,n.type,n.stateNode);else n.stateNode=L1(g,d,n.memoizedProps);else w!==d?(w===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):w.count--,d===null?D1(g,n.type,n.stateNode):L1(g,d,n.memoizedProps)):d===null&&n.stateNode!==null&&xu(n,n.memoizedProps,s.memoizedProps)}break;case 27:pi(r,n),Xn(n),d&512&&(dt||s===null||da(s,s.return)),s!==null&&d&4&&xu(n,n.memoizedProps,s.memoizedProps);break;case 5:if(pi(r,n),Xn(n),d&512&&(dt||s===null||da(s,s.return)),n.flags&32){g=n.stateNode;try{Ka(g,"")}catch(ee){jt(n,n.return,ee)}}d&4&&n.stateNode!=null&&(g=n.memoizedProps,xu(n,g,s!==null?s.memoizedProps:g)),d&1024&&(Va=!0);break;case 6:if(pi(r,n),Xn(n),d&4){if(n.stateNode===null)throw Error(a(162));d=n.memoizedProps,s=n.stateNode;try{s.nodeValue=d}catch(ee){jt(n,n.return,ee)}}break;case 3:if(So=null,g=zi,zi=Ie(r.containerInfo),pi(r,n),zi=g,Xn(n),d&4&&s!==null&&s.memoizedState.isDehydrated)try{Kl(r.containerInfo)}catch(ee){jt(n,n.return,ee)}Va&&(Va=!1,$h(n));break;case 4:d=zi,zi=Ie(n.stateNode.containerInfo),pi(r,n),Xn(n),zi=d;break;case 12:pi(r,n),Xn(n);break;case 13:pi(r,n),Xn(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Zf=cn()),d&4&&(d=n.updateQueue,d!==null&&(n.updateQueue=null,If(n,d)));break;case 22:g=n.memoizedState!==null;var U=s!==null&&s.memoizedState!==null,J=fa,ce=dt;if(fa=J||g,dt=ce||U,pi(r,n),dt=ce,fa=J,Xn(n),d&8192)e:for(r=n.stateNode,r._visibility=g?r._visibility&-2:r._visibility|1,g&&(s===null||U||fa||dt||ds(n)),s=null,r=n;;){if(r.tag===5||r.tag===26){if(s===null){U=s=r;try{if(w=U.stateNode,g)M=w.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{z=U.stateNode;var he=U.memoizedProps.style,te=he!=null&&he.hasOwnProperty("display")?he.display:null;z.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(ee){jt(U,U.return,ee)}}}else if(r.tag===6){if(s===null){U=r;try{U.stateNode.nodeValue=g?"":U.memoizedProps}catch(ee){jt(U,U.return,ee)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}d&4&&(d=n.updateQueue,d!==null&&(s=d.retryQueue,s!==null&&(d.retryQueue=null,If(n,s))));break;case 19:pi(r,n),Xn(n),d&4&&(d=n.updateQueue,d!==null&&(n.updateQueue=null,If(n,d)));break;case 30:break;case 21:break;default:pi(r,n),Xn(n)}}function Xn(n){var r=n.flags;if(r&2){try{for(var s,d=n.return;d!==null;){if(ro(d)){s=d;break}d=d.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var g=s.stateNode,w=Rl(n);Ll(n,w,g);break;case 5:var M=s.stateNode;s.flags&32&&(Ka(M,""),s.flags&=-33);var z=Rl(n);Ll(n,z,M);break;case 3:case 4:var U=s.stateNode.containerInfo,J=Rl(n);vu(n,J,U);break;default:throw Error(a(161))}}catch(ce){jt(n,n.return,ce)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function $h(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;$h(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function hr(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Ph(n,r.alternate,r),r=r.sibling}function ds(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:pr(4,r,r.return),ds(r);break;case 1:da(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Bf(r,r.return,s),ds(r);break;case 27:$l(r.stateNode);case 26:case 5:da(r,r.return),ds(r);break;case 22:r.memoizedState===null&&ds(r);break;case 30:ds(r);break;default:ds(r)}n=n.sibling}}function Na(n,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var d=r.alternate,g=n,w=r,M=w.flags;switch(w.tag){case 0:case 11:case 15:Na(g,w,s),Ol(4,w);break;case 1:if(Na(g,w,s),d=w,g=d.stateNode,typeof g.componentDidMount=="function")try{g.componentDidMount()}catch(J){jt(d,d.return,J)}if(d=w,g=d.updateQueue,g!==null){var z=d.stateNode;try{var U=g.shared.hiddenCallbacks;if(U!==null)for(g.shared.hiddenCallbacks=null,g=0;g<U.length;g++)lh(U[g],z)}catch(J){jt(d,d.return,J)}}s&&M&64&&_h(w),ao(w,w.return);break;case 27:kl(w);case 26:case 5:Na(g,w,s),s&&d===null&&M&4&&gu(w),ao(w,w.return);break;case 12:Na(g,w,s);break;case 13:Na(g,w,s),s&&M&4&&Uh(g,w);break;case 22:w.memoizedState===null&&Na(g,w,s),ao(w,w.return);break;case 30:break;default:Na(g,w,s)}r=r.sibling}}function $f(n,r){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&al(s))}function Gf(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&al(n))}function pa(n,r,s,d){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Gh(n,r,s,d),r=r.sibling}function Gh(n,r,s,d){var g=r.flags;switch(r.tag){case 0:case 11:case 15:pa(n,r,s,d),g&2048&&Ol(9,r);break;case 1:pa(n,r,s,d);break;case 3:pa(n,r,s,d),g&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&al(n)));break;case 12:if(g&2048){pa(n,r,s,d),n=r.stateNode;try{var w=r.memoizedProps,M=w.id,z=w.onPostCommit;typeof z=="function"&&z(M,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(U){jt(r,r.return,U)}}else pa(n,r,s,d);break;case 13:pa(n,r,s,d);break;case 23:break;case 22:w=r.stateNode,M=r.alternate,r.memoizedState!==null?w._visibility&2?pa(n,r,s,d):Dl(n,r):w._visibility&2?pa(n,r,s,d):(w._visibility|=2,so(n,r,s,d,(r.subtreeFlags&10256)!==0)),g&2048&&$f(M,r);break;case 24:pa(n,r,s,d),g&2048&&Gf(r.alternate,r);break;default:pa(n,r,s,d)}}function so(n,r,s,d,g){for(g=g&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var w=n,M=r,z=s,U=d,J=M.flags;switch(M.tag){case 0:case 11:case 15:so(w,M,z,U,g),Ol(8,M);break;case 23:break;case 22:var ce=M.stateNode;M.memoizedState!==null?ce._visibility&2?so(w,M,z,U,g):Dl(w,M):(ce._visibility|=2,so(w,M,z,U,g)),g&&J&2048&&$f(M.alternate,M);break;case 24:so(w,M,z,U,g),g&&J&2048&&Gf(M.alternate,M);break;default:so(w,M,z,U,g)}r=r.sibling}}function Dl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=n,d=r,g=d.flags;switch(d.tag){case 22:Dl(s,d),g&2048&&$f(d.alternate,d);break;case 24:Dl(s,d),g&2048&&Gf(d.alternate,d);break;default:Dl(s,d)}r=r.sibling}}var Tn=8192;function oo(n){if(n.subtreeFlags&Tn)for(n=n.child;n!==null;)qh(n),n=n.sibling}function qh(n){switch(n.tag){case 26:oo(n),n.flags&Tn&&n.memoizedState!==null&&Hg(zi,n.memoizedState,n.memoizedProps);break;case 5:oo(n);break;case 3:case 4:var r=zi;zi=Ie(n.stateNode.containerInfo),oo(n),zi=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Tn,Tn=16777216,oo(n),Tn=r):oo(n));break;default:oo(n)}}function Yh(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function lo(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var d=r[s];en=d,Wh(d,n)}Yh(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fh(n),n=n.sibling}function Fh(n){switch(n.tag){case 0:case 11:case 15:lo(n),n.flags&2048&&pr(9,n,n.return);break;case 3:lo(n);break;case 12:lo(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,yu(n)):lo(n);break;default:lo(n)}}function yu(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var d=r[s];en=d,Wh(d,n)}Yh(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:pr(8,r,r.return),yu(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,yu(r));break;default:yu(r)}n=n.sibling}}function Wh(n,r){for(;en!==null;){var s=en;switch(s.tag){case 0:case 11:case 15:pr(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var d=s.memoizedState.cachePool.pool;d!=null&&d.refCount++}break;case 24:al(s.memoizedState.cache)}if(d=s.child,d!==null)d.return=s,en=d;else e:for(s=n;en!==null;){d=en;var g=d.sibling,w=d.return;if(Bh(d),d===s){en=null;break e}if(g!==null){g.return=w,en=g;break e}en=w}}}var dg={getCacheForType:function(n){var r=Bt(Et),s=r.data.get(n);return s===void 0&&(s=n(),r.data.set(n,s)),s}},qf=typeof WeakMap=="function"?WeakMap:Map,mt=0,Rt=null,Ke=null,at=0,gt=0,hi=null,mr=!1,co=!1,Yf=!1,Pa=0,Ut=0,gr=0,fs=0,Ff=0,Hi=0,uo=0,zl=null,Kn=null,Wf=!1,Zf=0,fo=1/0,Hl=null,xr=null,wn=0,vr=null,po=null,ho=0,Xf=0,Kf=null,Zh=null,mo=0,Qf=null;function An(){if((mt&2)!==0&&at!==0)return at&-at;if(Z.T!==null){var n=Zs;return n!==0?n:Eu()}return bp()}function Xh(){Hi===0&&(Hi=(at&536870912)===0||Je?xp():536870912);var n=fi.current;return n!==null&&(n.flags|=32),Hi}function mi(n,r,s){(n===Rt&&(gt===2||gt===9)||n.cancelPendingCommit!==null)&&(go(n,0),yr(n,at,Hi,!1)),Es(n,s),((mt&2)===0||n!==Rt)&&(n===Rt&&((mt&2)===0&&(fs|=s),Ut===4&&yr(n,at,Hi,!1)),ha(n))}function Kh(n,r,s){if((mt&6)!==0)throw Error(a(327));var d=!s&&(r&124)===0&&(r&n.expiredLanes)===0||Ir(n,r),g=d?hg(n,r):t0(n,r,!0),w=d;do{if(g===0){co&&!d&&yr(n,r,0,!1);break}else{if(s=n.current.alternate,w&&!fg(s)){g=t0(n,r,!1),w=!1;continue}if(g===2){if(w=r,n.errorRecoveryDisabledLanes&w)var M=0;else M=n.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){r=M;e:{var z=n;g=zl;var U=z.current.memoizedState.isDehydrated;if(U&&(go(z,M).flags|=256),M=t0(z,M,!1),M!==2){if(Yf&&!U){z.errorRecoveryDisabledLanes|=w,fs|=w,g=4;break e}w=Kn,Kn=g,w!==null&&(Kn===null?Kn=w:Kn.push.apply(Kn,w))}g=M}if(w=!1,g!==2)continue}}if(g===1){go(n,0),yr(n,r,0,!0);break}e:{switch(d=n,w=g,w){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:yr(d,r,Hi,!mr);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(g=Zf+300-cn(),10<g)){if(yr(d,r,Hi,!mr),As(d,0,!0)!==0)break e;d.timeoutHandle=b1(Qh.bind(null,d,s,Kn,Hl,Wf,r,Hi,fs,uo,mr,w,2,-0,0),g);break e}Qh(d,s,Kn,Hl,Wf,r,Hi,fs,uo,mr,w,0,-0,0)}}break}while(!0);ha(n)}function Qh(n,r,s,d,g,w,M,z,U,J,ce,he,te,ee){if(n.timeoutHandle=-1,he=r.subtreeFlags,(he&8192||(he&16785408)===16785408)&&(hn={stylesheets:null,count:0,unsuspend:zg},qh(r),he=Vg(),he!==null)){n.cancelPendingCommit=he(Vl.bind(null,n,r,w,s,d,g,M,z,U,ce,1,te,ee)),yr(n,w,M,!J);return}Vl(n,r,w,s,d,g,M,z,U)}function fg(n){for(var r=n;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var d=0;d<s.length;d++){var g=s[d],w=g.getSnapshot;g=g.value;try{if(!li(w(),g))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function yr(n,r,s,d){r&=~Ff,r&=~fs,n.suspendedLanes|=r,n.pingedLanes&=~r,d&&(n.warmLanes|=r),d=n.expirationTimes;for(var g=r;0<g;){var w=31-Rn(g),M=1<<w;d[w]=-1,g&=~M}s!==0&&yp(n,s,r)}function wu(){return(mt&6)===0?(Pl(0),!1):!0}function Jf(){if(Ke!==null){if(gt===0)var n=Ke.return;else n=Ke,D=sr=null,qc(n),Jt=null,Wn=0,n=Ke;for(;n!==null;)Vh(n.alternate,n),n=n.return;Ke=null}}function go(n,r){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,Ag(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Jf(),Rt=n,Ke=s=kn(n.current,null),at=r,gt=0,hi=null,mr=!1,co=Ir(n,r),Yf=!1,uo=Hi=Ff=fs=gr=Ut=0,Kn=zl=null,Wf=!1,(r&8)!==0&&(r|=r&32);var d=n.entangledLanes;if(d!==0)for(n=n.entanglements,d&=r;0<d;){var g=31-Rn(d),w=1<<g;r|=n[g],d&=~w}return Pa=r,qr(),s}function Jh(n,r){qe=null,Z.H=yl,r===Dn||r===Uc?(r=sh(),gt=3):r===ah?(r=sh(),gt=4):gt=r===Rh?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,hi=r,Ke===null&&(Ut=1,Tl(n,Ln(r,n.current)))}function e1(){var n=Z.H;return Z.H=yl,n===null?yl:n}function t1(){var n=Z.A;return Z.A=dg,n}function e0(){Ut=4,mr||(at&4194048)!==at&&fi.current!==null||(co=!0),(gr&134217727)===0&&(fs&134217727)===0||Rt===null||yr(Rt,at,Hi,!1)}function t0(n,r,s){var d=mt;mt|=2;var g=e1(),w=t1();(Rt!==n||at!==r)&&(Hl=null,go(n,r)),r=!1;var M=Ut;e:do try{if(gt!==0&&Ke!==null){var z=Ke,U=hi;switch(gt){case 8:Jf(),M=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(r=!0);var J=gt;if(gt=0,hi=null,xo(n,z,U,J),s&&co){M=0;break e}break;default:J=gt,gt=0,hi=null,xo(n,z,U,J)}}pg(),M=Ut;break}catch(ce){Jh(n,ce)}while(!0);return r&&n.shellSuspendCounter++,D=sr=null,mt=d,Z.H=g,Z.A=w,Ke===null&&(Rt=null,at=0,qr()),M}function pg(){for(;Ke!==null;)n0(Ke)}function hg(n,r){var s=mt;mt|=2;var d=e1(),g=t1();Rt!==n||at!==r?(Hl=null,fo=cn()+500,go(n,r)):co=Ir(n,r);e:do try{if(gt!==0&&Ke!==null){r=Ke;var w=hi;t:switch(gt){case 1:gt=0,hi=null,xo(n,r,w,1);break;case 2:case 9:if(rh(w)){gt=0,hi=null,i1(r);break}r=function(){gt!==2&&gt!==9||Rt!==n||(gt=7),ha(n)},w.then(r,r);break e;case 3:gt=7;break e;case 4:gt=5;break e;case 7:rh(w)?(gt=0,hi=null,i1(r)):(gt=0,hi=null,xo(n,r,w,7));break;case 5:var M=null;switch(Ke.tag){case 26:M=Ke.memoizedState;case 5:case 27:var z=Ke;if(!M||an(M)){gt=0,hi=null;var U=z.sibling;if(U!==null)Ke=U;else{var J=z.return;J!==null?(Ke=J,bu(J)):Ke=null}break t}}gt=0,hi=null,xo(n,r,w,5);break;case 6:gt=0,hi=null,xo(n,r,w,6);break;case 8:Jf(),Ut=6;break e;default:throw Error(a(462))}}n1();break}catch(ce){Jh(n,ce)}while(!0);return D=sr=null,Z.H=d,Z.A=g,mt=s,Ke!==null?0:(Rt=null,at=0,qr(),Ut)}function n1(){for(;Ke!==null&&!Ho();)n0(Ke)}function n0(n){var r=pu(n.alternate,n,Pa);n.memoizedProps=n.pendingProps,r===null?bu(n):Ke=r}function i1(n){var r=n,s=r.alternate;switch(r.tag){case 15:case 0:r=du(s,r,r.pendingProps,r.type,void 0,at);break;case 11:r=du(s,r,r.pendingProps,r.type.render,r.ref,at);break;case 5:qc(r);default:Vh(s,r),r=Ke=Qo(r,Pa),r=pu(s,r,Pa)}n.memoizedProps=n.pendingProps,r===null?bu(n):Ke=r}function xo(n,r,s,d){D=sr=null,qc(r),Jt=null,Wn=0;var g=r.return;try{if(Oh(n,g,r,s,at)){Ut=1,Tl(n,Ln(s,n.current)),Ke=null;return}}catch(w){if(g!==null)throw Ke=g,w;Ut=1,Tl(n,Ln(s,n.current)),Ke=null;return}r.flags&32768?(Je||d===1?n=!0:co||(at&536870912)!==0?n=!1:(mr=n=!0,(d===2||d===9||d===3||d===6)&&(d=fi.current,d!==null&&d.tag===13&&(d.flags|=16384))),a1(r,n)):bu(r)}function bu(n){var r=n;do{if((r.flags&32768)!==0){a1(r,mr);return}n=r.return;var s=zh(r.alternate,r,Pa);if(s!==null){Ke=s;return}if(r=r.sibling,r!==null){Ke=r;return}Ke=r=n}while(r!==null);Ut===0&&(Ut=5)}function a1(n,r){do{var s=Hh(n.alternate,n);if(s!==null){s.flags&=32767,Ke=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(n=n.sibling,n!==null)){Ke=n;return}Ke=n=s}while(n!==null);Ut=6,Ke=null}function Vl(n,r,s,d,g,w,M,z,U){n.cancelPendingCommit=null;do Su();while(wn!==0);if((mt&6)!==0)throw Error(a(327));if(r!==null){if(r===n.current)throw Error(a(177));if(w=r.lanes|r.childLanes,w|=af,N2(n,s,w,M,z,U),n===Rt&&(Ke=Rt=null,at=0),po=r,vr=n,ho=s,Xf=w,Kf=g,Zh=d,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,f1(Nn,function(){return c1(),null})):(n.callbackNode=null,n.callbackPriority=0),d=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||d){d=Z.T,Z.T=null,g=le.p,le.p=2,M=mt,mt|=4;try{cg(n,r,s)}finally{mt=M,le.p=g,Z.T=d}}wn=1,r1(),s1(),o1()}}function r1(){if(wn===1){wn=0;var n=vr,r=po,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=Z.T,Z.T=null;var d=le.p;le.p=2;var g=mt;mt|=4;try{Uf(r,n);var w=Ou,M=Zp(n.containerInfo),z=w.focusedElem,U=w.selectionRange;if(M!==z&&z&&z.ownerDocument&&Wp(z.ownerDocument.documentElement,z)){if(U!==null&&tf(z)){var J=U.start,ce=U.end;if(ce===void 0&&(ce=J),"selectionStart"in z)z.selectionStart=J,z.selectionEnd=Math.min(ce,z.value.length);else{var he=z.ownerDocument||document,te=he&&he.defaultView||window;if(te.getSelection){var ee=te.getSelection(),ze=z.textContent.length,De=Math.min(U.start,ze),St=U.end===void 0?De:Math.min(U.end,ze);!ee.extend&&De>St&&(M=St,St=De,De=M);var W=ef(z,De),q=ef(z,St);if(W&&q&&(ee.rangeCount!==1||ee.anchorNode!==W.node||ee.anchorOffset!==W.offset||ee.focusNode!==q.node||ee.focusOffset!==q.offset)){var K=he.createRange();K.setStart(W.node,W.offset),ee.removeAllRanges(),De>St?(ee.addRange(K),ee.extend(q.node,q.offset)):(K.setEnd(q.node,q.offset),ee.addRange(K))}}}}for(he=[],ee=z;ee=ee.parentNode;)ee.nodeType===1&&he.push({element:ee,left:ee.scrollLeft,top:ee.scrollTop});for(typeof z.focus=="function"&&z.focus(),z=0;z<he.length;z++){var fe=he[z];fe.element.scrollLeft=fe.left,fe.element.scrollTop=fe.top}}Vu=!!Wi,Ou=Wi=null}finally{mt=g,le.p=d,Z.T=s}}n.current=r,wn=2}}function s1(){if(wn===2){wn=0;var n=vr,r=po,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=Z.T,Z.T=null;var d=le.p;le.p=2;var g=mt;mt|=4;try{Ph(n,r.alternate,r)}finally{mt=g,le.p=d,Z.T=s}}wn=3}}function o1(){if(wn===4||wn===3){wn=0,H2();var n=vr,r=po,s=ho,d=Zh;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?wn=5:(wn=0,po=vr=null,l1(n,n.pendingLanes));var g=n.pendingLanes;if(g===0&&(xr=null),fc(s),r=r.stateNode,yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Po,r,void 0,(r.current.flags&128)===128)}catch{}if(d!==null){r=Z.T,g=le.p,le.p=2,Z.T=null;try{for(var w=n.onRecoverableError,M=0;M<d.length;M++){var z=d[M];w(z.value,{componentStack:z.stack})}}finally{Z.T=r,le.p=g}}(ho&3)!==0&&Su(),ha(n),g=n.pendingLanes,(s&4194090)!==0&&(g&42)!==0?n===Qf?mo++:(mo=0,Qf=n):mo=0,Pl(0)}}function l1(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,al(r)))}function Su(n){return r1(),s1(),o1(),c1()}function c1(){if(wn!==5)return!1;var n=vr,r=Xf;Xf=0;var s=fc(ho),d=Z.T,g=le.p;try{le.p=32>s?32:s,Z.T=null,s=Kf,Kf=null;var w=vr,M=ho;if(wn=0,po=vr=null,ho=0,(mt&6)!==0)throw Error(a(331));var z=mt;if(mt|=4,Fh(w.current),Gh(w,w.current,M,s),mt=z,Pl(0,!1),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Po,w)}catch{}return!0}finally{le.p=g,Z.T=d,l1(n,r)}}function u1(n,r,s){r=Ln(s,r),r=ou(n.stateNode,r,2),n=Oa(n,r,2),n!==null&&(Es(n,2),ha(n))}function jt(n,r,s){if(n.tag===3)u1(n,n,s);else for(;r!==null;){if(r.tag===3){u1(r,n,s);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(xr===null||!xr.has(d))){n=Ln(s,n),s=Hf(2),d=Oa(r,s,2),d!==null&&(jh(s,d,r,n),Es(d,2),ha(d));break}}r=r.return}}function i0(n,r,s){var d=n.pingCache;if(d===null){d=n.pingCache=new qf;var g=new Set;d.set(r,g)}else g=d.get(r),g===void 0&&(g=new Set,d.set(r,g));g.has(s)||(Yf=!0,g.add(s),n=mg.bind(null,n,r,s),r.then(n,n))}function mg(n,r,s){var d=n.pingCache;d!==null&&d.delete(r),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Rt===n&&(at&s)===s&&(Ut===4||Ut===3&&(at&62914560)===at&&300>cn()-Zf?(mt&2)===0&&go(n,0):Ff|=s,uo===at&&(uo=0)),ha(n)}function d1(n,r){r===0&&(r=vp()),n=Yr(n,r),n!==null&&(Es(n,r),ha(n))}function Cu(n){var r=n.memoizedState,s=0;r!==null&&(s=r.retryLane),d1(n,s)}function gg(n,r){var s=0;switch(n.tag){case 13:var d=n.stateNode,g=n.memoizedState;g!==null&&(s=g.retryLane);break;case 19:d=n.stateNode;break;case 22:d=n.stateNode._retryCache;break;default:throw Error(a(314))}d!==null&&d.delete(r),d1(n,s)}function f1(n,r){return uc(n,r)}var _l=null,wr=null,Tu=!1,Nl=!1,Au=!1,br=0;function ha(n){n!==wr&&n.next===null&&(wr===null?_l=wr=n:wr=wr.next=n),Nl=!0,Tu||(Tu=!0,a0())}function Pl(n,r){if(!Au&&Nl){Au=!0;do for(var s=!1,d=_l;d!==null;){if(n!==0){var g=d.pendingLanes;if(g===0)var w=0;else{var M=d.suspendedLanes,z=d.pingedLanes;w=(1<<31-Rn(42|n)+1)-1,w&=g&~(M&~z),w=w&201326741?w&201326741|1:w?w|2:0}w!==0&&(s=!0,h1(d,w))}else w=at,w=As(d,d===Rt?w:0,d.cancelPendingCommit!==null||d.timeoutHandle!==-1),(w&3)===0||Ir(d,w)||(s=!0,h1(d,w));d=d.next}while(s);Au=!1}}function xg(){Bl()}function Bl(){Nl=Tu=!1;var n=0;br!==0&&(Tg()&&(n=br),br=0);for(var r=cn(),s=null,d=_l;d!==null;){var g=d.next,w=Il(d,r);w===0?(d.next=null,s===null?_l=g:s.next=g,g===null&&(wr=s)):(s=d,(n!==0||(w&3)!==0)&&(Nl=!0)),d=g}Pl(n)}function Il(n,r){for(var s=n.suspendedLanes,d=n.pingedLanes,g=n.expirationTimes,w=n.pendingLanes&-62914561;0<w;){var M=31-Rn(w),z=1<<M,U=g[M];U===-1?((z&s)===0||(z&d)!==0)&&(g[M]=_2(z,r)):U<=r&&(n.expiredLanes|=z),w&=~z}if(r=Rt,s=at,s=As(n,n===r?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),d=n.callbackNode,s===0||n===r&&(gt===2||gt===9)||n.cancelPendingCommit!==null)return d!==null&&d!==null&&ai(d),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Ir(n,s)){if(r=s&-s,r===n.callbackPriority)return r;switch(d!==null&&ai(d),fc(s)){case 2:case 8:s=Ss;break;case 32:s=Nn;break;case 268435456:s=_o;break;default:s=Nn}return d=p1.bind(null,n),s=uc(s,d),n.callbackPriority=r,n.callbackNode=s,r}return d!==null&&d!==null&&ai(d),n.callbackPriority=2,n.callbackNode=null,2}function p1(n,r){if(wn!==0&&wn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(Su()&&n.callbackNode!==s)return null;var d=at;return d=As(n,n===Rt?d:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),d===0?null:(Kh(n,d,r),Il(n,cn()),n.callbackNode!=null&&n.callbackNode===s?p1.bind(null,n):null)}function h1(n,r){if(Su())return null;Kh(n,r,!0)}function a0(){Eg(function(){(mt&6)!==0?uc(gp,xg):Bl()})}function Eu(){return br===0&&(br=xp()),br}function m1(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:$o(""+n)}function g1(n,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,n.id&&s.setAttribute("form",n.id),r.parentNode.insertBefore(s,r),n=new FormData(n),s.parentNode.removeChild(s),n}function vg(n,r,s,d,g){if(r==="submit"&&s&&s.stateNode===g){var w=m1((g[Pn]||null).action),M=d.submitter;M&&(r=(r=M[Pn]||null)?m1(r.formAction):M.getAttribute("formAction"),r!==null&&(w=r,M=null));var z=new Sc("action","action",null,d,g);n.push({event:z,listeners:[{instance:null,listener:function(){if(d.defaultPrevented){if(br!==0){var U=M?g1(g,M):new FormData(g);xl(s,{pending:!0,data:U,method:g.method,action:w},null,U)}}else typeof w=="function"&&(z.preventDefault(),U=M?g1(g,M):new FormData(g),xl(s,{pending:!0,data:U,method:g.method,action:w},w,U))},currentTarget:g}]})}}for(var r0=0;r0<ct.length;r0++){var s0=ct[r0],yg=s0.toLowerCase(),wg=s0[0].toUpperCase()+s0.slice(1);Ii(yg,"on"+wg)}Ii(zc,"onAnimationEnd"),Ii(Xp,"onAnimationIteration"),Ii(ci,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(Hc,"onTransitionRun"),Ii(ng,"onTransitionStart"),Ii(Gs,"onTransitionCancel"),Ii(Wo,"onTransitionEnd"),Ls("onMouseEnter",["mouseout","mouseover"]),Ls("onMouseLeave",["mouseout","mouseover"]),Ls("onPointerEnter",["pointerout","pointerover"]),Ls("onPointerLeave",["pointerout","pointerover"]),Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ul));function x1(n,r){r=(r&4)!==0;for(var s=0;s<n.length;s++){var d=n[s],g=d.event;d=d.listeners;e:{var w=void 0;if(r)for(var M=d.length-1;0<=M;M--){var z=d[M],U=z.instance,J=z.currentTarget;if(z=z.listener,U!==w&&g.isPropagationStopped())break e;w=z,g.currentTarget=J;try{w(g)}catch(ce){cs(ce)}g.currentTarget=null,w=U}else for(M=0;M<d.length;M++){if(z=d[M],U=z.instance,J=z.currentTarget,z=z.listener,U!==w&&g.isPropagationStopped())break e;w=z,g.currentTarget=J;try{w(g)}catch(ce){cs(ce)}g.currentTarget=null,w=U}}}}function Qe(n,r){var s=r[jd];s===void 0&&(s=r[jd]=new Set);var d=n+"__bubble";s.has(d)||(v1(r,n,2,!1),s.add(d))}function o0(n,r,s){var d=0;r&&(d|=4),v1(s,n,d,r)}var Qn="_reactListening"+Math.random().toString(36).slice(2);function l0(n){if(!n[Qn]){n[Qn]=!0,Cp.forEach(function(s){s!=="selectionchange"&&(bg.has(s)||o0(s,!1,n),o0(s,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Qn]||(r[Qn]=!0,o0("selectionchange",!1,r))}}function v1(n,r,s,d){switch(_1(r)){case 2:var g=Pg;break;case 8:g=To;break;default:g=v0}s=g.bind(null,r,s,n),g=void 0,!qo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(g=!0),d?g!==void 0?n.addEventListener(r,s,{capture:!0,passive:g}):n.addEventListener(r,s,!0):g!==void 0?n.addEventListener(r,s,{passive:g}):n.addEventListener(r,s,!1)}function Ba(n,r,s,d,g){var w=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var M=d.tag;if(M===3||M===4){var z=d.stateNode.containerInfo;if(z===g)break;if(M===4)for(M=d.return;M!==null;){var U=M.tag;if((U===3||U===4)&&M.stateNode.containerInfo===g)return;M=M.return}for(;z!==null;){if(M=Ms(z),M===null)return;if(U=M.tag,U===5||U===6||U===26||U===27){d=w=M;continue e}z=z.parentNode}}d=d.return}Op(function(){var J=w,ce=Ud(s),he=[];e:{var te=Zo.get(n);if(te!==void 0){var ee=Sc,ze=n;switch(n){case"keypress":if(wt(s)===0)break e;case"keydown":case"keyup":ee=Wd;break;case"focusin":ze="focus",ee=Tc;break;case"focusout":ze="blur",ee=Tc;break;case"beforeblur":case"afterblur":ee=Tc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=F2;break;case zc:case Xp:case ci:ee=zp;break;case Wo:ee=W2;break;case"scroll":case"scrollend":ee=G2;break;case"wheel":ee=X2;break;case"copy":case"cut":case"paste":ee=Vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=Aa;break;case"toggle":case"beforetoggle":ee=Ec}var De=(r&4)!==0,St=!De&&(n==="scroll"||n==="scrollend"),W=De?te!==null?te+"Capture":null:te;De=[];for(var q=J,K;q!==null;){var fe=q;if(K=fe.stateNode,fe=fe.tag,fe!==5&&fe!==26&&fe!==27||K===null||W===null||(fe=Go(q,W),fe!=null&&De.push(Pe(q,fe,K))),St)break;q=q.return}0<De.length&&(te=new ee(te,ze,null,s,ce),he.push({event:te,listeners:De}))}}if((r&7)===0){e:{if(te=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",te&&s!==wc&&(ze=s.relatedTarget||s.fromElement)&&(Ms(ze)||ze[Xa]))break e;if((ee||te)&&(te=ce.window===ce?ce:(te=ce.ownerDocument)?te.defaultView||te.parentWindow:window,ee?(ze=s.relatedTarget||s.toElement,ee=J,ze=ze?Ms(ze):null,ze!==null&&(St=c(ze),De=ze.tag,ze!==St||De!==5&&De!==27&&De!==6)&&(ze=null)):(ee=null,ze=J),ee!==ze)){if(De=Ja,fe="onMouseLeave",W="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(De=Aa,fe="onPointerLeave",W="onPointerEnter",q="pointer"),St=ee==null?te:Os(ee),K=ze==null?te:Os(ze),te=new De(fe,q+"leave",ee,s,ce),te.target=St,te.relatedTarget=K,fe=null,Ms(ce)===J&&(De=new De(W,q+"enter",ze,s,ce),De.target=K,De.relatedTarget=St,fe=De),St=fe,ee&&ze)t:{for(De=ee,W=ze,q=0,K=De;K;K=tn(K))q++;for(K=0,fe=W;fe;fe=tn(fe))K++;for(;0<q-K;)De=tn(De),q--;for(;0<K-q;)W=tn(W),K--;for(;q--;){if(De===W||W!==null&&De===W.alternate)break t;De=tn(De),W=tn(W)}De=null}else De=null;ee!==null&&$t(he,te,ee,De,!1),ze!==null&&St!==null&&$t(he,St,ze,De,!0)}}e:{if(te=J?Os(J):window,ee=te.nodeName&&te.nodeName.toLowerCase(),ee==="select"||ee==="input"&&te.type==="file")var Te=$p;else if(Rc(te))if(Gp)Te=J2;else{Te=nr;var We=Fp}else ee=te.nodeName,!ee||ee.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?J&&Id(J.elementType)&&(Te=$p):Te=Dc;if(Te&&(Te=Te(n,J))){Bs(he,Te,s,ce);break e}We&&We(n,te,J),n==="focusout"&&J&&te.type==="number"&&J.memoizedProps.value!=null&&Uo(te,"number",te.value)}switch(We=J?Os(J):window,n){case"focusin":(Rc(We)||We.contentEditable==="true")&&($s=We,ir=J,Y=null);break;case"focusout":Y=ir=$s=null;break;case"mousedown":oe=!0;break;case"contextmenu":case"mouseup":case"dragend":oe=!1,ae(he,s,ce);break;case"selectionchange":if(tg)break;case"keydown":case"keyup":ae(he,s,ce)}var je;if(Kd)e:{switch(n){case"compositionstart":var He="onCompositionStart";break e;case"compositionend":He="onCompositionEnd";break e;case"compositionupdate":He="onCompositionUpdate";break e}He=void 0}else er?Ip(n,s)&&(He="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(He="onCompositionStart");He&&(Mc&&s.locale!=="ko"&&(er||He!=="onCompositionStart"?He==="onCompositionEnd"&&er&&(je=Rp()):(Qa=ce,qd="value"in Qa?Qa.value:Qa.textContent,er=!0)),We=Mu(J,He),0<We.length&&(He=new In(He,n,null,s,ce),he.push({event:He,listeners:We}),je?He.data=je:(je=Oc(s),je!==null&&(He.data=je)))),(je=Bp?K2(n,s):Up(n,s))&&(He=Mu(J,"onBeforeInput"),0<He.length&&(We=new In("onBeforeInput","beforeinput",null,s,ce),he.push({event:We,listeners:He}),We.data=je)),vg(he,n,J,s,ce)}x1(he,r)})}function Pe(n,r,s){return{instance:n,listener:r,currentTarget:s}}function Mu(n,r){for(var s=r+"Capture",d=[];n!==null;){var g=n,w=g.stateNode;if(g=g.tag,g!==5&&g!==26&&g!==27||w===null||(g=Go(n,s),g!=null&&d.unshift(Pe(n,g,w)),g=Go(n,r),g!=null&&d.push(Pe(n,g,w))),n.tag===3)return d;n=n.return}return[]}function tn(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function $t(n,r,s,d,g){for(var w=r._reactName,M=[];s!==null&&s!==d;){var z=s,U=z.alternate,J=z.stateNode;if(z=z.tag,U!==null&&U===d)break;z!==5&&z!==26&&z!==27||J===null||(U=J,g?(J=Go(s,w),J!=null&&M.unshift(Pe(s,J,U))):g||(J=Go(s,w),J!=null&&M.push(Pe(s,J,U)))),s=s.return}M.length!==0&&n.push({event:r,listeners:M})}var Sg=/\r\n?/g,Sr=/\u0000|\uFFFD/g;function y1(n){return(typeof n=="string"?n:""+n).replace(Sg,`
`).replace(Sr,"")}function w1(n,r){return r=y1(r),y1(n)===r}function ju(){}function bt(n,r,s,d,g,w){switch(s){case"children":typeof d=="string"?r==="body"||r==="textarea"&&d===""||Ka(n,d):(typeof d=="number"||typeof d=="bigint")&&r!=="body"&&Ka(n,""+d);break;case"className":mc(n,"class",d);break;case"tabIndex":mc(n,"tabindex",d);break;case"dir":case"role":case"viewBox":case"width":case"height":mc(n,s,d);break;case"style":Bd(n,d,w);break;case"data":if(r!=="object"){mc(n,"data",d);break}case"src":case"href":if(d===""&&(r!=="a"||s!=="href")){n.removeAttribute(s);break}if(d==null||typeof d=="function"||typeof d=="symbol"||typeof d=="boolean"){n.removeAttribute(s);break}d=$o(""+d),n.setAttribute(s,d);break;case"action":case"formAction":if(typeof d=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof w=="function"&&(s==="formAction"?(r!=="input"&&bt(n,r,"name",g.name,g,null),bt(n,r,"formEncType",g.formEncType,g,null),bt(n,r,"formMethod",g.formMethod,g,null),bt(n,r,"formTarget",g.formTarget,g,null)):(bt(n,r,"encType",g.encType,g,null),bt(n,r,"method",g.method,g,null),bt(n,r,"target",g.target,g,null)));if(d==null||typeof d=="symbol"||typeof d=="boolean"){n.removeAttribute(s);break}d=$o(""+d),n.setAttribute(s,d);break;case"onClick":d!=null&&(n.onclick=ju);break;case"onScroll":d!=null&&Qe("scroll",n);break;case"onScrollEnd":d!=null&&Qe("scrollend",n);break;case"dangerouslySetInnerHTML":if(d!=null){if(typeof d!="object"||!("__html"in d))throw Error(a(61));if(s=d.__html,s!=null){if(g.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=d&&typeof d!="function"&&typeof d!="symbol";break;case"muted":n.muted=d&&typeof d!="function"&&typeof d!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(d==null||typeof d=="function"||typeof d=="boolean"||typeof d=="symbol"){n.removeAttribute("xlink:href");break}s=$o(""+d),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":d!=null&&typeof d!="function"&&typeof d!="symbol"?n.setAttribute(s,""+d):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":d&&typeof d!="function"&&typeof d!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":d===!0?n.setAttribute(s,""):d!==!1&&d!=null&&typeof d!="function"&&typeof d!="symbol"?n.setAttribute(s,d):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":d!=null&&typeof d!="function"&&typeof d!="symbol"&&!isNaN(d)&&1<=d?n.setAttribute(s,d):n.removeAttribute(s);break;case"rowSpan":case"start":d==null||typeof d=="function"||typeof d=="symbol"||isNaN(d)?n.removeAttribute(s):n.setAttribute(s,d);break;case"popover":Qe("beforetoggle",n),Qe("toggle",n),hc(n,"popover",d);break;case"xlinkActuate":aa(n,"http://www.w3.org/1999/xlink","xlink:actuate",d);break;case"xlinkArcrole":aa(n,"http://www.w3.org/1999/xlink","xlink:arcrole",d);break;case"xlinkRole":aa(n,"http://www.w3.org/1999/xlink","xlink:role",d);break;case"xlinkShow":aa(n,"http://www.w3.org/1999/xlink","xlink:show",d);break;case"xlinkTitle":aa(n,"http://www.w3.org/1999/xlink","xlink:title",d);break;case"xlinkType":aa(n,"http://www.w3.org/1999/xlink","xlink:type",d);break;case"xmlBase":aa(n,"http://www.w3.org/XML/1998/namespace","xml:base",d);break;case"xmlLang":aa(n,"http://www.w3.org/XML/1998/namespace","xml:lang",d);break;case"xmlSpace":aa(n,"http://www.w3.org/XML/1998/namespace","xml:space",d);break;case"is":hc(n,"is",d);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Mp.get(s)||s,hc(n,s,d))}}function c0(n,r,s,d,g,w){switch(s){case"style":Bd(n,d,w);break;case"dangerouslySetInnerHTML":if(d!=null){if(typeof d!="object"||!("__html"in d))throw Error(a(61));if(s=d.__html,s!=null){if(g.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof d=="string"?Ka(n,d):(typeof d=="number"||typeof d=="bigint")&&Ka(n,""+d);break;case"onScroll":d!=null&&Qe("scroll",n);break;case"onScrollEnd":d!=null&&Qe("scrollend",n);break;case"onClick":d!=null&&(n.onclick=ju);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tp.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(g=s.endsWith("Capture"),r=s.slice(2,g?s.length-7:void 0),w=n[Pn]||null,w=w!=null?w[s]:null,typeof w=="function"&&n.removeEventListener(r,w,g),typeof d=="function")){typeof w!="function"&&w!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(r,d,g);break e}s in n?n[s]=d:d===!0?n.setAttribute(s,""):hc(n,s,d)}}}function nn(n,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",n),Qe("load",n);var d=!1,g=!1,w;for(w in s)if(s.hasOwnProperty(w)){var M=s[w];if(M!=null)switch(w){case"src":d=!0;break;case"srcSet":g=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:bt(n,r,w,M,s,null)}}g&&bt(n,r,"srcSet",s.srcSet,s,null),d&&bt(n,r,"src",s.src,s,null);return;case"input":Qe("invalid",n);var z=w=M=g=null,U=null,J=null;for(d in s)if(s.hasOwnProperty(d)){var ce=s[d];if(ce!=null)switch(d){case"name":g=ce;break;case"type":M=ce;break;case"checked":U=ce;break;case"defaultChecked":J=ce;break;case"value":w=ce;break;case"defaultValue":z=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,r));break;default:bt(n,r,d,ce,s,null)}}_d(n,w,z,U,J,M,g,!1),xc(n);return;case"select":Qe("invalid",n),d=M=w=null;for(g in s)if(s.hasOwnProperty(g)&&(z=s[g],z!=null))switch(g){case"value":w=z;break;case"defaultValue":M=z;break;case"multiple":d=z;default:bt(n,r,g,z,s,null)}r=w,s=M,n.multiple=!!d,r!=null?Ds(n,!!d,r,!1):s!=null&&Ds(n,!!d,s,!0);return;case"textarea":Qe("invalid",n),w=g=d=null;for(M in s)if(s.hasOwnProperty(M)&&(z=s[M],z!=null))switch(M){case"value":d=z;break;case"defaultValue":g=z;break;case"children":w=z;break;case"dangerouslySetInnerHTML":if(z!=null)throw Error(a(91));break;default:bt(n,r,M,z,s,null)}yc(n,d,g,w),xc(n);return;case"option":for(U in s)if(s.hasOwnProperty(U)&&(d=s[U],d!=null))switch(U){case"selected":n.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:bt(n,r,U,d,s,null)}return;case"dialog":Qe("beforetoggle",n),Qe("toggle",n),Qe("cancel",n),Qe("close",n);break;case"iframe":case"object":Qe("load",n);break;case"video":case"audio":for(d=0;d<Ul.length;d++)Qe(Ul[d],n);break;case"image":Qe("error",n),Qe("load",n);break;case"details":Qe("toggle",n);break;case"embed":case"source":case"link":Qe("error",n),Qe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in s)if(s.hasOwnProperty(J)&&(d=s[J],d!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:bt(n,r,J,d,s,null)}return;default:if(Id(r)){for(ce in s)s.hasOwnProperty(ce)&&(d=s[ce],d!==void 0&&c0(n,r,ce,d,s,void 0));return}}for(z in s)s.hasOwnProperty(z)&&(d=s[z],d!=null&&bt(n,r,z,d,s,null))}function Cg(n,r,s,d){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var g=null,w=null,M=null,z=null,U=null,J=null,ce=null;for(ee in s){var he=s[ee];if(s.hasOwnProperty(ee)&&he!=null)switch(ee){case"checked":break;case"value":break;case"defaultValue":U=he;default:d.hasOwnProperty(ee)||bt(n,r,ee,null,d,he)}}for(var te in d){var ee=d[te];if(he=s[te],d.hasOwnProperty(te)&&(ee!=null||he!=null))switch(te){case"type":w=ee;break;case"name":g=ee;break;case"checked":J=ee;break;case"defaultChecked":ce=ee;break;case"value":M=ee;break;case"defaultValue":z=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(a(137,r));break;default:ee!==he&&bt(n,r,te,ee,d,he)}}vc(n,M,z,U,J,ce,w,g);return;case"select":ee=M=z=te=null;for(w in s)if(U=s[w],s.hasOwnProperty(w)&&U!=null)switch(w){case"value":break;case"multiple":ee=U;default:d.hasOwnProperty(w)||bt(n,r,w,null,d,U)}for(g in d)if(w=d[g],U=s[g],d.hasOwnProperty(g)&&(w!=null||U!=null))switch(g){case"value":te=w;break;case"defaultValue":z=w;break;case"multiple":M=w;default:w!==U&&bt(n,r,g,w,d,U)}r=z,s=M,d=ee,te!=null?Ds(n,!!s,te,!1):!!d!=!!s&&(r!=null?Ds(n,!!s,r,!0):Ds(n,!!s,s?[]:"",!1));return;case"textarea":ee=te=null;for(z in s)if(g=s[z],s.hasOwnProperty(z)&&g!=null&&!d.hasOwnProperty(z))switch(z){case"value":break;case"children":break;default:bt(n,r,z,null,d,g)}for(M in d)if(g=d[M],w=s[M],d.hasOwnProperty(M)&&(g!=null||w!=null))switch(M){case"value":te=g;break;case"defaultValue":ee=g;break;case"children":break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(a(91));break;default:g!==w&&bt(n,r,M,g,d,w)}Nd(n,te,ee);return;case"option":for(var ze in s)if(te=s[ze],s.hasOwnProperty(ze)&&te!=null&&!d.hasOwnProperty(ze))switch(ze){case"selected":n.selected=!1;break;default:bt(n,r,ze,null,d,te)}for(U in d)if(te=d[U],ee=s[U],d.hasOwnProperty(U)&&te!==ee&&(te!=null||ee!=null))switch(U){case"selected":n.selected=te&&typeof te!="function"&&typeof te!="symbol";break;default:bt(n,r,U,te,d,ee)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in s)te=s[De],s.hasOwnProperty(De)&&te!=null&&!d.hasOwnProperty(De)&&bt(n,r,De,null,d,te);for(J in d)if(te=d[J],ee=s[J],d.hasOwnProperty(J)&&te!==ee&&(te!=null||ee!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(a(137,r));break;default:bt(n,r,J,te,d,ee)}return;default:if(Id(r)){for(var St in s)te=s[St],s.hasOwnProperty(St)&&te!==void 0&&!d.hasOwnProperty(St)&&c0(n,r,St,void 0,d,te);for(ce in d)te=d[ce],ee=s[ce],!d.hasOwnProperty(ce)||te===ee||te===void 0&&ee===void 0||c0(n,r,ce,te,d,ee);return}}for(var W in s)te=s[W],s.hasOwnProperty(W)&&te!=null&&!d.hasOwnProperty(W)&&bt(n,r,W,null,d,te);for(he in d)te=d[he],ee=s[he],!d.hasOwnProperty(he)||te===ee||te==null&&ee==null||bt(n,r,he,te,d,ee)}var Wi=null,Ou=null;function ps(n){return n.nodeType===9?n:n.ownerDocument}function _t(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nt(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Ru(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var u0=null;function Tg(){var n=window.event;return n&&n.type==="popstate"?n===u0?!1:(u0=n,!0):(u0=null,!1)}var b1=typeof setTimeout=="function"?setTimeout:void 0,Ag=typeof clearTimeout=="function"?clearTimeout:void 0,S1=typeof Promise=="function"?Promise:void 0,Eg=typeof queueMicrotask=="function"?queueMicrotask:typeof S1<"u"?function(n){return S1.resolve(null).then(n).catch(C1)}:b1;function C1(n){setTimeout(function(){throw n})}function Vi(n){return n==="head"}function Lu(n,r){var s=r,d=0,g=0;do{var w=s.nextSibling;if(n.removeChild(s),w&&w.nodeType===8)if(s=w.data,s==="/$"){if(0<d&&8>d){s=d;var M=n.ownerDocument;if(s&1&&$l(M.documentElement),s&2&&$l(M.body),s&4)for(s=M.head,$l(s),M=s.firstChild;M;){var z=M.nextSibling,U=M.nodeName;M[Bo]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=z}}if(g===0){n.removeChild(w),Kl(r);return}g--}else s==="$"||s==="$?"||s==="$!"?g++:d=s.charCodeAt(0)-48;else d=0;s=w}while(s);Kl(r)}function d0(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":d0(s),Od(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function T1(n,r,s,d){for(;n.nodeType===1;){var g=s;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!d&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(d){if(!n[Bo])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(w=n.getAttribute("rel"),w==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(w!==g.rel||n.getAttribute("href")!==(g.href==null||g.href===""?null:g.href)||n.getAttribute("crossorigin")!==(g.crossOrigin==null?null:g.crossOrigin)||n.getAttribute("title")!==(g.title==null?null:g.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(w=n.getAttribute("src"),(w!==(g.src==null?null:g.src)||n.getAttribute("type")!==(g.type==null?null:g.type)||n.getAttribute("crossorigin")!==(g.crossOrigin==null?null:g.crossOrigin))&&w&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var w=g.name==null?null:""+g.name;if(g.type==="hidden"&&n.getAttribute("name")===w)return n}else return n;if(n=Zi(n.nextSibling),n===null)break}return null}function ku(n,r,s){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Zi(n.nextSibling),n===null))return null;return n}function Vn(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function vo(n,r){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")r();else{var d=function(){r(),s.removeEventListener("DOMContentLoaded",d)};s.addEventListener("DOMContentLoaded",d),n._reactRetry=d}}function Zi(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var f0=null;function A1(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return n;r--}else s==="/$"&&r++}n=n.previousSibling}return null}function E1(n,r,s){switch(r=ps(s),n){case"html":if(n=r.documentElement,!n)throw Error(a(452));return n;case"head":if(n=r.head,!n)throw Error(a(453));return n;case"body":if(n=r.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function $l(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Od(n)}var gi=new Map,ma=new Set;function Ie(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ga=le.d;le.d={f:_i,r:M1,D:Mg,C:j1,L:Du,m:jg,X:Rg,S:Og,M:Lg};function _i(){var n=ga.f(),r=wu();return n||r}function M1(n){var r=js(n);r!==null&&r.tag===5&&r.type==="form"?iu(r):ga.r(n)}var yo=typeof document>"u"?null:document;function ut(n,r,s){var d=yo;if(d&&typeof r=="string"&&r){var g=Ci(r);g='link[rel="'+n+'"][href="'+g+'"]',typeof s=="string"&&(g+='[crossorigin="'+s+'"]'),ma.has(g)||(ma.add(g),n={rel:n,crossOrigin:s,href:r},d.querySelector(g)===null&&(r=d.createElement("link"),nn(r,"link",n),dn(r),d.head.appendChild(r)))}}function Mg(n){ga.D(n),ut("dns-prefetch",n,null)}function j1(n,r){ga.C(n,r),ut("preconnect",n,r)}function Du(n,r,s){ga.L(n,r,s);var d=yo;if(d&&n&&r){var g='link[rel="preload"][as="'+Ci(r)+'"]';r==="image"&&s&&s.imageSrcSet?(g+='[imagesrcset="'+Ci(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(g+='[imagesizes="'+Ci(s.imageSizes)+'"]')):g+='[href="'+Ci(n)+'"]';var w=g;switch(r){case"style":w=wo(n);break;case"script":w=bo(n)}gi.has(w)||(n=y({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:n,as:r},s),gi.set(w,n),d.querySelector(g)!==null||r==="style"&&d.querySelector(Gl(w))||r==="script"&&d.querySelector(ql(w))||(r=d.createElement("link"),nn(r,"link",n),dn(r),d.head.appendChild(r)))}}function jg(n,r){ga.m(n,r);var s=yo;if(s&&n){var d=r&&typeof r.as=="string"?r.as:"script",g='link[rel="modulepreload"][as="'+Ci(d)+'"][href="'+Ci(n)+'"]',w=g;switch(d){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":w=bo(n)}if(!gi.has(w)&&(n=y({rel:"modulepreload",href:n},r),gi.set(w,n),s.querySelector(g)===null)){switch(d){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ql(w)))return}d=s.createElement("link"),nn(d,"link",n),dn(d),s.head.appendChild(d)}}}function Og(n,r,s){ga.S(n,r,s);var d=yo;if(d&&n){var g=Rs(d).hoistableStyles,w=wo(n);r=r||"default";var M=g.get(w);if(!M){var z={loading:0,preload:null};if(M=d.querySelector(Gl(w)))z.loading=5;else{n=y({rel:"stylesheet",href:n,"data-precedence":r},s),(s=gi.get(w))&&Yl(n,s);var U=M=d.createElement("link");dn(U),nn(U,"link",n),U._p=new Promise(function(J,ce){U.onload=J,U.onerror=ce}),U.addEventListener("load",function(){z.loading|=1}),U.addEventListener("error",function(){z.loading|=2}),z.loading|=4,zu(M,r,d)}M={type:"stylesheet",instance:M,count:1,state:z},g.set(w,M)}}}function Rg(n,r){ga.X(n,r);var s=yo;if(s&&n){var d=Rs(s).hoistableScripts,g=bo(n),w=d.get(g);w||(w=s.querySelector(ql(g)),w||(n=y({src:n,async:!0},r),(r=gi.get(g))&&p0(n,r),w=s.createElement("script"),dn(w),nn(w,"link",n),s.head.appendChild(w)),w={type:"script",instance:w,count:1,state:null},d.set(g,w))}}function Lg(n,r){ga.M(n,r);var s=yo;if(s&&n){var d=Rs(s).hoistableScripts,g=bo(n),w=d.get(g);w||(w=s.querySelector(ql(g)),w||(n=y({src:n,async:!0,type:"module"},r),(r=gi.get(g))&&p0(n,r),w=s.createElement("script"),dn(w),nn(w,"link",n),s.head.appendChild(w)),w={type:"script",instance:w,count:1,state:null},d.set(g,w))}}function O1(n,r,s,d){var g=(g=ke.current)?Ie(g):null;if(!g)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=wo(s.href),s=Rs(g).hoistableStyles,d=s.get(r),d||(d={type:"style",instance:null,count:0,state:null},s.set(r,d)),d):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=wo(s.href);var w=Rs(g).hoistableStyles,M=w.get(n);if(M||(g=g.ownerDocument||g,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},w.set(n,M),(w=g.querySelector(Gl(n)))&&!w._p&&(M.instance=w,M.state.loading=5),gi.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},gi.set(n,s),w||kg(g,n,s,M.state))),r&&d===null)throw Error(a(528,""));return M}if(r&&d!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=bo(s),s=Rs(g).hoistableScripts,d=s.get(r),d||(d={type:"script",instance:null,count:0,state:null},s.set(r,d)),d):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function wo(n){return'href="'+Ci(n)+'"'}function Gl(n){return'link[rel="stylesheet"]['+n+"]"}function R1(n){return y({},n,{"data-precedence":n.precedence,precedence:null})}function kg(n,r,s,d){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?d.loading=1:(r=n.createElement("link"),d.preload=r,r.addEventListener("load",function(){return d.loading|=1}),r.addEventListener("error",function(){return d.loading|=2}),nn(r,"link",s),dn(r),n.head.appendChild(r))}function bo(n){return'[src="'+Ci(n)+'"]'}function ql(n){return"script[async]"+n}function L1(n,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var d=n.querySelector('style[data-href~="'+Ci(s.href)+'"]');if(d)return r.instance=d,dn(d),d;var g=y({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return d=(n.ownerDocument||n).createElement("style"),dn(d),nn(d,"style",g),zu(d,s.precedence,n),r.instance=d;case"stylesheet":g=wo(s.href);var w=n.querySelector(Gl(g));if(w)return r.state.loading|=4,r.instance=w,dn(w),w;d=R1(s),(g=gi.get(g))&&Yl(d,g),w=(n.ownerDocument||n).createElement("link"),dn(w);var M=w;return M._p=new Promise(function(z,U){M.onload=z,M.onerror=U}),nn(w,"link",d),r.state.loading|=4,zu(w,s.precedence,n),r.instance=w;case"script":return w=bo(s.src),(g=n.querySelector(ql(w)))?(r.instance=g,dn(g),g):(d=s,(g=gi.get(w))&&(d=y({},s),p0(d,g)),n=n.ownerDocument||n,g=n.createElement("script"),dn(g),nn(g,"link",d),n.head.appendChild(g),r.instance=g);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(d=r.instance,r.state.loading|=4,zu(d,s.precedence,n));return r.instance}function zu(n,r,s){for(var d=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),g=d.length?d[d.length-1]:null,w=g,M=0;M<d.length;M++){var z=d[M];if(z.dataset.precedence===r)w=z;else if(w!==g)break}w?w.parentNode.insertBefore(n,w.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(n,r.firstChild))}function Yl(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function p0(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var So=null;function k1(n,r,s){if(So===null){var d=new Map,g=So=new Map;g.set(s,d)}else g=So,d=g.get(s),d||(d=new Map,g.set(s,d));if(d.has(n))return d;for(d.set(n,null),s=s.getElementsByTagName(n),g=0;g<s.length;g++){var w=s[g];if(!(w[Bo]||w[un]||n==="link"&&w.getAttribute("rel")==="stylesheet")&&w.namespaceURI!=="http://www.w3.org/2000/svg"){var M=w.getAttribute(r)||"";M=n+M;var z=d.get(M);z?z.push(w):d.set(M,[w])}}return d}function D1(n,r,s){n=n.ownerDocument||n,n.head.insertBefore(s,r==="title"?n.querySelector("head > title"):null)}function Dg(n,r,s){if(s===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function an(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var hn=null;function zg(){}function Hg(n,r,s){if(hn===null)throw Error(a(475));var d=hn;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var g=wo(s.href),w=n.querySelector(Gl(g));if(w){n=w._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(d.count++,d=Fl.bind(d),n.then(d,d)),r.state.loading|=4,r.instance=w,dn(w);return}w=n.ownerDocument||n,s=R1(s),(g=gi.get(g))&&Yl(s,g),w=w.createElement("link"),dn(w);var M=w;M._p=new Promise(function(z,U){M.onload=z,M.onerror=U}),nn(w,"link",s),r.instance=w}d.stylesheets===null&&(d.stylesheets=new Map),d.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(d.count++,r=Fl.bind(d),n.addEventListener("load",r),n.addEventListener("error",r))}}function Vg(){if(hn===null)throw Error(a(475));var n=hn;return n.stylesheets&&n.count===0&&h0(n,n.stylesheets),0<n.count?function(r){var s=setTimeout(function(){if(n.stylesheets&&h0(n,n.stylesheets),n.unsuspend){var d=n.unsuspend;n.unsuspend=null,d()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Fl(){if(this.count--,this.count===0){if(this.stylesheets)h0(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Hu=null;function h0(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Hu=new Map,r.forEach(_g,n),Hu=null,Fl.call(n))}function _g(n,r){if(!(r.state.loading&4)){var s=Hu.get(n);if(s)var d=s.get(null);else{s=new Map,Hu.set(n,s);for(var g=n.querySelectorAll("link[data-precedence],style[data-precedence]"),w=0;w<g.length;w++){var M=g[w];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),d=M)}d&&s.set(null,d)}g=r.instance,M=g.getAttribute("data-precedence"),w=s.get(M)||d,w===d&&s.set(null,g),s.set(M,g),this.count++,d=Fl.bind(this),g.addEventListener("load",d),g.addEventListener("error",d),w?w.parentNode.insertBefore(g,w.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(g,n.firstChild)),r.state.loading|=4}}var Co={$$typeof:L,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function Ng(n,r,s,d,g,w,M,z){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dc(0),this.hiddenUpdates=dc(null),this.identifierPrefix=d,this.onUncaughtError=g,this.onCaughtError=w,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function z1(n,r,s,d,g,w,M,z,U,J,ce,he){return n=new Ng(n,r,s,M,z,U,J,he),r=1,w===!0&&(r|=24),w=Un(3,null,null,r),n.current=w,w.stateNode=n,r=lf(),r.refCount++,n.pooledCache=r,r.refCount++,w.memoizedState={element:d,isDehydrated:s,cache:r},es(w),n}function H1(n){return n?(n=Fr,n):Fr}function m0(n,r,s,d,g,w){g=H1(g),d.context===null?d.context=g:d.pendingContext=g,d=or(r),d.payload={element:s},w=w===void 0?null:w,w!==null&&(d.callback=w),s=Oa(n,d,r),s!==null&&(mi(s,n,r),sl(s,n,r))}function g0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<r?s:r}}function x0(n,r){g0(n,r),(n=n.alternate)&&g0(n,r)}function V1(n){if(n.tag===13){var r=Yr(n,67108864);r!==null&&mi(r,n,67108864),x0(n,67108864)}}var Vu=!0;function Pg(n,r,s,d){var g=Z.T;Z.T=null;var w=le.p;try{le.p=2,v0(n,r,s,d)}finally{le.p=w,Z.T=g}}function To(n,r,s,d){var g=Z.T;Z.T=null;var w=le.p;try{le.p=8,v0(n,r,s,d)}finally{le.p=w,Z.T=g}}function v0(n,r,s,d){if(Vu){var g=y0(d);if(g===null)Ba(n,r,d,_u,s),N1(n,d);else if(Ig(g,n,r,s,d))d.stopPropagation();else if(N1(n,d),r&4&&-1<Bg.indexOf(n)){for(;g!==null;){var w=js(g);if(w!==null)switch(w.tag){case 3:if(w=w.stateNode,w.current.memoizedState.isDehydrated){var M=Ca(w.pendingLanes);if(M!==0){var z=w;for(z.pendingLanes|=2,z.entangledLanes|=2;M;){var U=1<<31-Rn(M);z.entanglements[1]|=U,M&=~U}ha(w),(mt&6)===0&&(fo=cn()+500,Pl(0))}}break;case 13:z=Yr(w,2),z!==null&&mi(z,w,2),wu(),x0(w,2)}if(w=y0(d),w===null&&Ba(n,r,d,_u,s),w===g)break;g=w}g!==null&&d.stopPropagation()}else Ba(n,r,d,null,s)}}function y0(n){return n=Ud(n),w0(n)}var _u=null;function w0(n){if(_u=null,n=Ms(n),n!==null){var r=c(n);if(r===null)n=null;else{var s=r.tag;if(s===13){if(n=f(r),n!==null)return n;n=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return _u=n,null}function _1(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mp()){case gp:return 2;case Ss:return 8;case Nn:case Vo:return 32;case _o:return 268435456;default:return 32}default:return 32}}var Nu=!1,Ia=null,Cr=null,Tr=null,Wl=new Map,Zl=new Map,Ar=[],Bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function N1(n,r){switch(n){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Wl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(r.pointerId)}}function Xl(n,r,s,d,g,w){return n===null||n.nativeEvent!==w?(n={blockedOn:r,domEventName:s,eventSystemFlags:d,nativeEvent:w,targetContainers:[g]},r!==null&&(r=js(r),r!==null&&V1(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,g!==null&&r.indexOf(g)===-1&&r.push(g),n)}function Ig(n,r,s,d,g){switch(r){case"focusin":return Ia=Xl(Ia,n,r,s,d,g),!0;case"dragenter":return Cr=Xl(Cr,n,r,s,d,g),!0;case"mouseover":return Tr=Xl(Tr,n,r,s,d,g),!0;case"pointerover":var w=g.pointerId;return Wl.set(w,Xl(Wl.get(w)||null,n,r,s,d,g)),!0;case"gotpointercapture":return w=g.pointerId,Zl.set(w,Xl(Zl.get(w)||null,n,r,s,d,g)),!0}return!1}function P1(n){var r=Ms(n.target);if(r!==null){var s=c(r);if(s!==null){if(r=s.tag,r===13){if(r=f(s),r!==null){n.blockedOn=r,P2(n.priority,function(){if(s.tag===13){var d=An();d=Md(d);var g=Yr(s,d);g!==null&&mi(g,s,d),x0(s,d)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pu(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var s=y0(n.nativeEvent);if(s===null){s=n.nativeEvent;var d=new s.constructor(s.type,s);wc=d,s.target.dispatchEvent(d),wc=null}else return r=js(s),r!==null&&V1(r),n.blockedOn=s,!1;r.shift()}return!0}function B1(n,r,s){Pu(n)&&s.delete(r)}function Ug(){Nu=!1,Ia!==null&&Pu(Ia)&&(Ia=null),Cr!==null&&Pu(Cr)&&(Cr=null),Tr!==null&&Pu(Tr)&&(Tr=null),Wl.forEach(B1),Zl.forEach(B1)}function Bu(n,r){n.blockedOn===r&&(n.blockedOn=null,Nu||(Nu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ug)))}var Iu=null;function I1(n){Iu!==n&&(Iu=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Iu===n&&(Iu=null);for(var r=0;r<n.length;r+=3){var s=n[r],d=n[r+1],g=n[r+2];if(typeof d!="function"){if(w0(d||s)===null)continue;break}var w=js(s);w!==null&&(n.splice(r,3),r-=3,xl(w,{pending:!0,data:g,method:s.method,action:d},d,g))}}))}function Kl(n){function r(U){return Bu(U,n)}Ia!==null&&Bu(Ia,n),Cr!==null&&Bu(Cr,n),Tr!==null&&Bu(Tr,n),Wl.forEach(r),Zl.forEach(r);for(var s=0;s<Ar.length;s++){var d=Ar[s];d.blockedOn===n&&(d.blockedOn=null)}for(;0<Ar.length&&(s=Ar[0],s.blockedOn===null);)P1(s),s.blockedOn===null&&Ar.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(d=0;d<s.length;d+=3){var g=s[d],w=s[d+1],M=g[Pn]||null;if(typeof w=="function")M||I1(s);else if(M){var z=null;if(w&&w.hasAttribute("formAction")){if(g=w,M=w[Pn]||null)z=M.formAction;else if(w0(g)!==null)continue}else z=M.action;typeof z=="function"?s[d+1]=z:(s.splice(d,3),d-=3),I1(s)}}}function b0(n){this._internalRoot=n}Uu.prototype.render=b0.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,d=An();m0(s,d,n,r,null,null)},Uu.prototype.unmount=b0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;m0(n.current,2,null,n,null,null),wu(),r[Xa]=null}};function Uu(n){this._internalRoot=n}Uu.prototype.unstable_scheduleHydration=function(n){if(n){var r=bp();n={blockedOn:null,target:n,priority:r};for(var s=0;s<Ar.length&&r!==0&&r<Ar[s].priority;s++);Ar.splice(s,0,n),s===0&&P1(n)}};var U1=t.version;if(U1!=="19.1.1")throw Error(a(527,U1,"19.1.1"));le.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=h(r),n=n!==null?x(n):null,n=n===null?null:n.stateNode,n};var $g={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{Po=$u.inject($g),yn=$u}catch{}}return C0.createRoot=function(n,r){if(!o(n))throw Error(a(299));var s=!1,d="",g=zf,w=su,M=Mh,z=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onUncaughtError!==void 0&&(g=r.onUncaughtError),r.onCaughtError!==void 0&&(w=r.onCaughtError),r.onRecoverableError!==void 0&&(M=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(z=r.unstable_transitionCallbacks)),r=z1(n,1,!1,null,null,s,d,g,w,M,z,null),n[Xa]=r.current,l0(n),new b0(r)},C0.hydrateRoot=function(n,r,s){if(!o(n))throw Error(a(299));var d=!1,g="",w=zf,M=su,z=Mh,U=null,J=null;return s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(g=s.identifierPrefix),s.onUncaughtError!==void 0&&(w=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(z=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(U=s.unstable_transitionCallbacks),s.formState!==void 0&&(J=s.formState)),r=z1(n,1,!0,r,s??null,d,g,w,M,z,U,J),r.context=H1(null),s=r.current,d=An(),d=Md(d),g=or(d),g.callback=null,Oa(s,g,d),s=d,r.current.lanes=s,Es(r,s),ha(r),n[Xa]=r.current,l0(n),new Uu(r)},C0.version="19.1.1",C0}var qy;function D9(){if(qy)return Wg.exports;qy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Wg.exports=k9(),Wg.exports}var z9=D9();const H9=l2(z9);var N=X3();const At=l2(N),Yy=T9({__proto__:null,default:At},[N]);/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fy="popstate";function V9(e={}){function t(a,o){let{pathname:c,search:f,hash:p}=a.location;return t3("",{pathname:c,search:f,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(a,o){return typeof o=="string"?o:G0(o)}return N9(t,i,null,e)}function Gt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ya(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _9(){return Math.random().toString(36).substring(2,10)}function Wy(e,t){return{usr:e.state,key:e.key,idx:t}}function t3(e,t,i=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?gd(t):t,state:i,key:t&&t.key||a||_9()}}function G0({pathname:e="/",search:t="",hash:i=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function gd(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substring(i),e=e.substring(0,i));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function N9(e,t,i,a={}){let{window:o=document.defaultView,v5Compat:c=!1}=a,f=o.history,p="POP",h=null,x=y();x==null&&(x=0,f.replaceState({...f.state,idx:x},""));function y(){return(f.state||{idx:null}).idx}function b(){p="POP";let _=y(),R=_==null?null:_-x;x=_,h&&h({action:p,location:k.location,delta:R})}function S(_,R){p="PUSH";let O=t3(k.location,_,R);x=y()+1;let L=Wy(O,x),P=k.createHref(O);try{f.pushState(L,"",P)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;o.location.assign(P)}c&&h&&h({action:p,location:k.location,delta:1})}function E(_,R){p="REPLACE";let O=t3(k.location,_,R);x=y();let L=Wy(O,x),P=k.createHref(O);f.replaceState(L,"",P),c&&h&&h({action:p,location:k.location,delta:0})}function A(_){return P9(_)}let k={get action(){return p},get location(){return e(o,f)},listen(_){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Fy,b),h=_,()=>{o.removeEventListener(Fy,b),h=null}},createHref(_){return t(o,_)},createURL:A,encodeLocation(_){let R=A(_);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:S,replace:E,go(_){return f.go(_)}};return k}function P9(e,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Gt(i,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:G0(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function O6(e,t,i="/"){return B9(e,t,i,!1)}function B9(e,t,i,a){let o=typeof t=="string"?gd(t):t,c=ws(o.pathname||"/",i);if(c==null)return null;let f=R6(e);I9(f);let p=null;for(let h=0;p==null&&h<f.length;++h){let x=Q9(c);p=X9(f[h],x,a)}return p}function R6(e,t=[],i=[],a=""){let o=(c,f,p)=>{let h={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};h.relativePath.startsWith("/")&&(Gt(h.relativePath.startsWith(a),`Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(a.length));let x=ys([a,h.relativePath]),y=i.concat(h);c.children&&c.children.length>0&&(Gt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),R6(c.children,t,y,x)),!(c.path==null&&!c.index)&&t.push({path:x,score:W9(x,c.index),routesMeta:y})};return e.forEach((c,f)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))o(c,f);else for(let h of L6(c.path))o(c,f,h)}),t}function L6(e){let t=e.split("/");if(t.length===0)return[];let[i,...a]=t,o=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return o?[c,""]:[c];let f=L6(a.join("/")),p=[];return p.push(...f.map(h=>h===""?c:[c,h].join("/"))),o&&p.push(...f),p.map(h=>e.startsWith("/")&&h===""?"/":h)}function I9(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:Z9(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var U9=/^:[\w-]+$/,$9=3,G9=2,q9=1,Y9=10,F9=-2,Zy=e=>e==="*";function W9(e,t){let i=e.split("/"),a=i.length;return i.some(Zy)&&(a+=F9),t&&(a+=G9),i.filter(o=>!Zy(o)).reduce((o,c)=>o+(U9.test(c)?$9:c===""?q9:Y9),a)}function Z9(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function X9(e,t,i=!1){let{routesMeta:a}=e,o={},c="/",f=[];for(let p=0;p<a.length;++p){let h=a[p],x=p===a.length-1,y=c==="/"?t:t.slice(c.length)||"/",b=zm({path:h.relativePath,caseSensitive:h.caseSensitive,end:x},y),S=h.route;if(!b&&x&&i&&!a[a.length-1].route.index&&(b=zm({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!b)return null;Object.assign(o,b.params),f.push({params:o,pathname:ys([c,b.pathname]),pathnameBase:nS(ys([c,b.pathnameBase])),route:S}),b.pathnameBase!=="/"&&(c=ys([c,b.pathnameBase]))}return f}function zm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=K9(e.path,e.caseSensitive,e.end),o=t.match(i);if(!o)return null;let c=o[0],f=c.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:a.reduce((x,{paramName:y,isOptional:b},S)=>{if(y==="*"){let A=p[S]||"";f=c.slice(0,c.length-A.length).replace(/(.)\/+$/,"$1")}const E=p[S];return b&&!E?x[y]=void 0:x[y]=(E||"").replace(/%2F/g,"/"),x},{}),pathname:c,pathnameBase:f,pattern:e}}function K9(e,t=!1,i=!0){Ya(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,h)=>(a.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function Q9(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ya(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ws(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}function J9(e,t="/"){let{pathname:i,search:a="",hash:o=""}=typeof e=="string"?gd(e):e;return{pathname:i?i.startsWith("/")?i:eS(i,t):t,search:iS(a),hash:aS(o)}}function eS(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function Jg(e,t,i,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tS(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function K3(e){let t=tS(e);return t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase)}function Q3(e,t,i,a=!1){let o;typeof e=="string"?o=gd(e):(o={...e},Gt(!o.pathname||!o.pathname.includes("?"),Jg("?","pathname","search",o)),Gt(!o.pathname||!o.pathname.includes("#"),Jg("#","pathname","hash",o)),Gt(!o.search||!o.search.includes("#"),Jg("#","search","hash",o)));let c=e===""||o.pathname==="",f=c?"/":o.pathname,p;if(f==null)p=i;else{let b=t.length-1;if(!a&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),b-=1;o.pathname=S.join("/")}p=b>=0?t[b]:"/"}let h=J9(o,p),x=f&&f!=="/"&&f.endsWith("/"),y=(c||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(x||y)&&(h.pathname+="/"),h}var ys=e=>e.join("/").replace(/\/\/+/g,"/"),nS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,aS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function rS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var k6=["POST","PUT","PATCH","DELETE"];new Set(k6);var sS=["GET",...k6];new Set(sS);var xd=N.createContext(null);xd.displayName="DataRouter";var c2=N.createContext(null);c2.displayName="DataRouterState";N.createContext(!1);var D6=N.createContext({isTransitioning:!1});D6.displayName="ViewTransition";var oS=N.createContext(new Map);oS.displayName="Fetchers";var lS=N.createContext(null);lS.displayName="Await";var Wa=N.createContext(null);Wa.displayName="Navigation";var ip=N.createContext(null);ip.displayName="Location";var Sa=N.createContext({outlet:null,matches:[],isDataRoute:!1});Sa.displayName="Route";var J3=N.createContext(null);J3.displayName="RouteError";function cS(e,{relative:t}={}){Gt(vd(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=N.useContext(Wa),{hash:o,pathname:c,search:f}=ap(e,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:ys([i,c])),a.createHref({pathname:p,search:f,hash:o})}function vd(){return N.useContext(ip)!=null}function ia(){return Gt(vd(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(ip).location}var z6="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function H6(e){N.useContext(Wa).static||N.useLayoutEffect(e)}function ev(){let{isDataRoute:e}=N.useContext(Sa);return e?AS():uS()}function uS(){Gt(vd(),"useNavigate() may be used only in the context of a <Router> component.");let e=N.useContext(xd),{basename:t,navigator:i}=N.useContext(Wa),{matches:a}=N.useContext(Sa),{pathname:o}=ia(),c=JSON.stringify(K3(a)),f=N.useRef(!1);return H6(()=>{f.current=!0}),N.useCallback((h,x={})=>{if(Ya(f.current,z6),!f.current)return;if(typeof h=="number"){i.go(h);return}let y=Q3(h,JSON.parse(c),o,x.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:ys([t,y.pathname])),(x.replace?i.replace:i.push)(y,x.state,x)},[t,i,c,o,e])}var dS=N.createContext(null);function fS(e){let t=N.useContext(Sa).outlet;return t&&N.createElement(dS.Provider,{value:e},t)}function pS(){let{matches:e}=N.useContext(Sa),t=e[e.length-1];return t?t.params:{}}function ap(e,{relative:t}={}){let{matches:i}=N.useContext(Sa),{pathname:a}=ia(),o=JSON.stringify(K3(i));return N.useMemo(()=>Q3(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function hS(e,t){return V6(e,t)}function V6(e,t,i,a){var R;Gt(vd(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=N.useContext(Wa),{matches:c}=N.useContext(Sa),f=c[c.length-1],p=f?f.params:{},h=f?f.pathname:"/",x=f?f.pathnameBase:"/",y=f&&f.route;{let O=y&&y.path||"";_6(h,!y||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let b=ia(),S;if(t){let O=typeof t=="string"?gd(t):t;Gt(x==="/"||((R=O.pathname)==null?void 0:R.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${O.pathname}" was given in the \`location\` prop.`),S=O}else S=b;let E=S.pathname||"/",A=E;if(x!=="/"){let O=x.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(O.length).join("/")}let k=O6(e,{pathname:A});Ya(y||k!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Ya(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=yS(k&&k.map(O=>Object.assign({},O,{params:Object.assign({},p,O.params),pathname:ys([x,o.encodeLocation?o.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?x:ys([x,o.encodeLocation?o.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),c,i,a);return t&&_?N.createElement(ip.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},_):_}function mS(){let e=TS(),t=rS(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",e),f=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:c},"ErrorBoundary")," or"," ",N.createElement("code",{style:c},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),i?N.createElement("pre",{style:o},i):null,f)}var gS=N.createElement(mS,null),xS=class extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?N.createElement(Sa.Provider,{value:this.props.routeContext},N.createElement(J3.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vS({routeContext:e,match:t,children:i}){let a=N.useContext(xd);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),N.createElement(Sa.Provider,{value:e},i)}function yS(e,t=[],i=null,a=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let o=e,c=i==null?void 0:i.errors;if(c!=null){let h=o.findIndex(x=>x.route.id&&(c==null?void 0:c[x.route.id])!==void 0);Gt(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,h+1))}let f=!1,p=-1;if(i)for(let h=0;h<o.length;h++){let x=o[h];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=h),x.route.id){let{loaderData:y,errors:b}=i,S=x.route.loader&&!y.hasOwnProperty(x.route.id)&&(!b||b[x.route.id]===void 0);if(x.route.lazy||S){f=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((h,x,y)=>{let b,S=!1,E=null,A=null;i&&(b=c&&x.route.id?c[x.route.id]:void 0,E=x.route.errorElement||gS,f&&(p<0&&y===0?(_6("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,A=null):p===y&&(S=!0,A=x.route.hydrateFallbackElement||null)));let k=t.concat(o.slice(0,y+1)),_=()=>{let R;return b?R=E:S?R=A:x.route.Component?R=N.createElement(x.route.Component,null):x.route.element?R=x.route.element:R=h,N.createElement(vS,{match:x,routeContext:{outlet:h,matches:k,isDataRoute:i!=null},children:R})};return i&&(x.route.ErrorBoundary||x.route.errorElement||y===0)?N.createElement(xS,{location:i.location,revalidation:i.revalidation,component:E,error:b,children:_(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):_()},null)}function tv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wS(e){let t=N.useContext(xd);return Gt(t,tv(e)),t}function bS(e){let t=N.useContext(c2);return Gt(t,tv(e)),t}function SS(e){let t=N.useContext(Sa);return Gt(t,tv(e)),t}function nv(e){let t=SS(e),i=t.matches[t.matches.length-1];return Gt(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function CS(){return nv("useRouteId")}function TS(){var a;let e=N.useContext(J3),t=bS("useRouteError"),i=nv("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[i]}function AS(){let{router:e}=wS("useNavigate"),t=nv("useNavigate"),i=N.useRef(!1);return H6(()=>{i.current=!0}),N.useCallback(async(o,c={})=>{Ya(i.current,z6),i.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...c}))},[e,t])}var Xy={};function _6(e,t,i){!t&&!Xy[e]&&(Xy[e]=!0,Ya(!1,i))}N.memo(ES);function ES({routes:e,future:t,state:i}){return V6(e,void 0,i,t)}function MS({to:e,replace:t,state:i,relative:a}){Gt(vd(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=N.useContext(Wa);Ya(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=N.useContext(Sa),{pathname:f}=ia(),p=ev(),h=Q3(e,K3(c),f,a==="path"),x=JSON.stringify(h);return N.useEffect(()=>{p(JSON.parse(x),{replace:t,state:i,relative:a})},[p,x,a,t,i]),null}function jS(e){return fS(e.context)}function bn(e){Gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function OS({basename:e="/",children:t=null,location:i,navigationType:a="POP",navigator:o,static:c=!1}){Gt(!vd(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),p=N.useMemo(()=>({basename:f,navigator:o,static:c,future:{}}),[f,o,c]);typeof i=="string"&&(i=gd(i));let{pathname:h="/",search:x="",hash:y="",state:b=null,key:S="default"}=i,E=N.useMemo(()=>{let A=ws(h,f);return A==null?null:{location:{pathname:A,search:x,hash:y,state:b,key:S},navigationType:a}},[f,h,x,y,b,S,a]);return Ya(E!=null,`<Router basename="${f}"> is not able to match the URL "${h}${x}${y}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:N.createElement(Wa.Provider,{value:p},N.createElement(ip.Provider,{children:t,value:E}))}function RS({children:e,location:t}){return hS(n3(e),t)}function n3(e,t=[]){let i=[];return N.Children.forEach(e,(a,o)=>{if(!N.isValidElement(a))return;let c=[...t,o];if(a.type===N.Fragment){i.push.apply(i,n3(a.props.children,c));return}Gt(a.type===bn,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Gt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=n3(a.props.children,c)),i.push(f)}),i}var mm="get",gm="application/x-www-form-urlencoded";function u2(e){return e!=null&&typeof e.tagName=="string"}function LS(e){return u2(e)&&e.tagName.toLowerCase()==="button"}function kS(e){return u2(e)&&e.tagName.toLowerCase()==="form"}function DS(e){return u2(e)&&e.tagName.toLowerCase()==="input"}function zS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function HS(e,t){return e.button===0&&(!t||t==="_self")&&!zS(e)}var G1=null;function VS(){if(G1===null)try{new FormData(document.createElement("form"),0),G1=!1}catch{G1=!0}return G1}var _S=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ex(e){return e!=null&&!_S.has(e)?(Ya(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gm}"`),null):e}function NS(e,t){let i,a,o,c,f;if(kS(e)){let p=e.getAttribute("action");a=p?ws(p,t):null,i=e.getAttribute("method")||mm,o=ex(e.getAttribute("enctype"))||gm,c=new FormData(e)}else if(LS(e)||DS(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||p.getAttribute("action");if(a=h?ws(h,t):null,i=e.getAttribute("formmethod")||p.getAttribute("method")||mm,o=ex(e.getAttribute("formenctype"))||ex(p.getAttribute("enctype"))||gm,c=new FormData(p,e),!VS()){let{name:x,type:y,value:b}=e;if(y==="image"){let S=x?`${x}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else x&&c.append(x,b)}}else{if(u2(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=mm,a=null,o=gm,f=e}return c&&o==="text/plain"&&(f=c,c=void 0),{action:a,method:i.toLowerCase(),encType:o,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function iv(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function PS(e,t,i){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname==="/"?a.pathname=`_root.${i}`:t&&ws(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function BS(e,t){if(e.id in t)return t[e.id];try{let i=await import(e.module);return t[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function IS(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function US(e,t,i){let a=await Promise.all(e.map(async o=>{let c=t.routes[o.route.id];if(c){let f=await BS(c,i);return f.links?f.links():[]}return[]}));return YS(a.flat(1).filter(IS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ky(e,t,i,a,o,c){let f=(h,x)=>i[x]?h.route.id!==i[x].route.id:!0,p=(h,x)=>{var y;return i[x].pathname!==h.pathname||((y=i[x].route.path)==null?void 0:y.endsWith("*"))&&i[x].params["*"]!==h.params["*"]};return c==="assets"?t.filter((h,x)=>f(h,x)||p(h,x)):c==="data"?t.filter((h,x)=>{var b;let y=a.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(f(h,x)||p(h,x))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((b=i[0])==null?void 0:b.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function $S(e,t,{includeHydrateFallback:i}={}){return GS(e.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function GS(e){return[...new Set(e)]}function qS(e){let t={},i=Object.keys(e).sort();for(let a of i)t[a]=e[a];return t}function YS(e,t){let i=new Set;return new Set(t),e.reduce((a,o)=>{let c=JSON.stringify(qS(o));return i.has(c)||(i.add(c),a.push({key:c,link:o})),a},[])}function N6(){let e=N.useContext(xd);return iv(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function FS(){let e=N.useContext(c2);return iv(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var av=N.createContext(void 0);av.displayName="FrameworkContext";function P6(){let e=N.useContext(av);return iv(e,"You must render this element inside a <HydratedRouter> element"),e}function WS(e,t){let i=N.useContext(av),[a,o]=N.useState(!1),[c,f]=N.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:x,onMouseLeave:y,onTouchStart:b}=t,S=N.useRef(null);N.useEffect(()=>{if(e==="render"&&f(!0),e==="viewport"){let k=R=>{R.forEach(O=>{f(O.isIntersecting)})},_=new IntersectionObserver(k,{threshold:.5});return S.current&&_.observe(S.current),()=>{_.disconnect()}}},[e]),N.useEffect(()=>{if(a){let k=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(k)}}},[a]);let E=()=>{o(!0)},A=()=>{o(!1),f(!1)};return i?e!=="intent"?[c,S,{}]:[c,S,{onFocus:T0(p,E),onBlur:T0(h,A),onMouseEnter:T0(x,E),onMouseLeave:T0(y,A),onTouchStart:T0(b,E)}]:[!1,S,{}]}function T0(e,t){return i=>{e&&e(i),i.defaultPrevented||t(i)}}function ZS({page:e,...t}){let{router:i}=N6(),a=N.useMemo(()=>O6(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?N.createElement(KS,{page:e,matches:a,...t}):null}function XS(e){let{manifest:t,routeModules:i}=P6(),[a,o]=N.useState([]);return N.useEffect(()=>{let c=!1;return US(e,t,i).then(f=>{c||o(f)}),()=>{c=!0}},[e,t,i]),a}function KS({page:e,matches:t,...i}){let a=ia(),{manifest:o,routeModules:c}=P6(),{basename:f}=N6(),{loaderData:p,matches:h}=FS(),x=N.useMemo(()=>Ky(e,t,h,o,a,"data"),[e,t,h,o,a]),y=N.useMemo(()=>Ky(e,t,h,o,a,"assets"),[e,t,h,o,a]),b=N.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let A=new Set,k=!1;if(t.forEach(R=>{var L;let O=o.routes[R.route.id];!O||!O.hasLoader||(!x.some(P=>P.route.id===R.route.id)&&R.route.id in p&&((L=c[R.route.id])!=null&&L.shouldRevalidate)||O.hasClientLoader?k=!0:A.add(R.route.id))}),A.size===0)return[];let _=PS(e,f,"data");return k&&A.size>0&&_.searchParams.set("_routes",t.filter(R=>A.has(R.route.id)).map(R=>R.route.id).join(",")),[_.pathname+_.search]},[f,p,a,o,x,t,e,c]),S=N.useMemo(()=>$S(y,o),[y,o]),E=XS(y);return N.createElement(N.Fragment,null,b.map(A=>N.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...i})),S.map(A=>N.createElement("link",{key:A,rel:"modulepreload",href:A,...i})),E.map(({key:A,link:k})=>N.createElement("link",{key:A,nonce:i.nonce,...k})))}function QS(...e){return t=>{e.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var B6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{B6&&(window.__reactRouterVersion="7.8.0")}catch{}function JS({basename:e,children:t,window:i}){let a=N.useRef();a.current==null&&(a.current=V9({window:i,v5Compat:!0}));let o=a.current,[c,f]=N.useState({action:o.action,location:o.location}),p=N.useCallback(h=>{N.startTransition(()=>f(h))},[f]);return N.useLayoutEffect(()=>o.listen(p),[o,p]),N.createElement(OS,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:o})}var I6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,U6=N.forwardRef(function({onClick:t,discover:i="render",prefetch:a="none",relative:o,reloadDocument:c,replace:f,state:p,target:h,to:x,preventScrollReset:y,viewTransition:b,...S},E){let{basename:A}=N.useContext(Wa),k=typeof x=="string"&&I6.test(x),_,R=!1;if(typeof x=="string"&&k&&(_=x,B6))try{let ne=new URL(window.location.href),se=x.startsWith("//")?new URL(ne.protocol+x):new URL(x),de=ws(se.pathname,A);se.origin===ne.origin&&de!=null?x=de+se.search+se.hash:R=!0}catch{Ya(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=cS(x,{relative:o}),[L,P,V]=WS(a,S),F=nC(x,{replace:f,state:p,target:h,preventScrollReset:y,relative:o,viewTransition:b});function G(ne){t&&t(ne),ne.defaultPrevented||F(ne)}let Q=N.createElement("a",{...S,...V,href:_||O,onClick:R||c?t:G,ref:QS(E,P),target:h,"data-discover":!k&&i==="render"?"true":void 0});return L&&!k?N.createElement(N.Fragment,null,Q,N.createElement(ZS,{page:O})):Q});U6.displayName="Link";var Kt=N.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:a="",end:o=!1,style:c,to:f,viewTransition:p,children:h,...x},y){let b=ap(f,{relative:x.relative}),S=ia(),E=N.useContext(c2),{navigator:A,basename:k}=N.useContext(Wa),_=E!=null&&oC(b)&&p===!0,R=A.encodeLocation?A.encodeLocation(b).pathname:b.pathname,O=S.pathname,L=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(O=O.toLowerCase(),L=L?L.toLowerCase():null,R=R.toLowerCase()),L&&k&&(L=ws(L,k)||L);const P=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let V=O===R||!o&&O.startsWith(R)&&O.charAt(P)==="/",F=L!=null&&(L===R||!o&&L.startsWith(R)&&L.charAt(R.length)==="/"),G={isActive:V,isPending:F,isTransitioning:_},Q=V?t:void 0,ne;typeof a=="function"?ne=a(G):ne=[a,V?"active":null,F?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let se=typeof c=="function"?c(G):c;return N.createElement(U6,{...x,"aria-current":Q,className:ne,ref:y,style:se,to:f,viewTransition:p},typeof h=="function"?h(G):h)});Kt.displayName="NavLink";var eC=N.forwardRef(({discover:e="render",fetcherKey:t,navigate:i,reloadDocument:a,replace:o,state:c,method:f=mm,action:p,onSubmit:h,relative:x,preventScrollReset:y,viewTransition:b,...S},E)=>{let A=rC(),k=sC(p,{relative:x}),_=f.toLowerCase()==="get"?"get":"post",R=typeof p=="string"&&I6.test(p),O=L=>{if(h&&h(L),L.defaultPrevented)return;L.preventDefault();let P=L.nativeEvent.submitter,V=(P==null?void 0:P.getAttribute("formmethod"))||f;A(P||L.currentTarget,{fetcherKey:t,method:V,navigate:i,replace:o,state:c,relative:x,preventScrollReset:y,viewTransition:b})};return N.createElement("form",{ref:E,method:_,action:k,onSubmit:a?h:O,...S,"data-discover":!R&&e==="render"?"true":void 0})});eC.displayName="Form";function tC(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $6(e){let t=N.useContext(xd);return Gt(t,tC(e)),t}function nC(e,{target:t,replace:i,state:a,preventScrollReset:o,relative:c,viewTransition:f}={}){let p=ev(),h=ia(),x=ap(e,{relative:c});return N.useCallback(y=>{if(HS(y,t)){y.preventDefault();let b=i!==void 0?i:G0(h)===G0(x);p(e,{replace:b,state:a,preventScrollReset:o,relative:c,viewTransition:f})}},[h,p,x,i,a,t,e,o,c,f])}var iC=0,aC=()=>`__${String(++iC)}__`;function rC(){let{router:e}=$6("useSubmit"),{basename:t}=N.useContext(Wa),i=CS();return N.useCallback(async(a,o={})=>{let{action:c,method:f,encType:p,formData:h,body:x}=NS(a,t);if(o.navigate===!1){let y=o.fetcherKey||aC();await e.fetch(y,i,o.action||c,{preventScrollReset:o.preventScrollReset,formData:h,body:x,formMethod:o.method||f,formEncType:o.encType||p,flushSync:o.flushSync})}else await e.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:h,body:x,formMethod:o.method||f,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,i])}function sC(e,{relative:t}={}){let{basename:i}=N.useContext(Wa),a=N.useContext(Sa);Gt(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),c={...ap(e||".",{relative:t})},f=ia();if(e==null){c.search=f.search;let p=new URLSearchParams(c.search),h=p.getAll("index");if(h.some(y=>y==="")){p.delete("index"),h.filter(b=>b).forEach(b=>p.append("index",b));let y=p.toString();c.search=y?`?${y}`:""}}return(!e||e===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ys([i,c.pathname])),G0(c)}function oC(e,{relative:t}={}){let i=N.useContext(D6);Gt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=$6("useViewTransitionState"),o=ap(e,{relative:t});if(!i.isTransitioning)return!1;let c=ws(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=ws(i.nextLocation.pathname,a)||i.nextLocation.pathname;return zm(o.pathname,f)!=null||zm(o.pathname,c)!=null}function lC(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function cC(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var uC=function(){function e(i){var a=this;this._insertTag=function(o){var c;a.tags.length===0?a.insertionPoint?c=a.insertionPoint.nextSibling:a.prepend?c=a.container.firstChild:c=a.before:c=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(o,c),a.tags.push(o)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(a){a.forEach(this._insertTag)},t.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(cC(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var c=lC(o);try{c.insertRule(a,c.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(a));this.ctr++},t.flush=function(){this.tags.forEach(function(a){var o;return(o=a.parentNode)==null?void 0:o.removeChild(a)}),this.tags=[],this.ctr=0},e}(),ei="-ms-",Hm="-moz-",xt="-webkit-",G6="comm",rv="rule",sv="decl",dC="@import",q6="@keyframes",fC="@layer",pC=Math.abs,d2=String.fromCharCode,hC=Object.assign;function mC(e,t){return _n(e,0)^45?(((t<<2^_n(e,0))<<2^_n(e,1))<<2^_n(e,2))<<2^_n(e,3):0}function Y6(e){return e.trim()}function gC(e,t){return(e=t.exec(e))?e[0]:e}function vt(e,t,i){return e.replace(t,i)}function i3(e,t){return e.indexOf(t)}function _n(e,t){return e.charCodeAt(t)|0}function q0(e,t,i){return e.slice(t,i)}function Mr(e){return e.length}function ov(e){return e.length}function q1(e,t){return t.push(e),e}function xC(e,t){return e.map(t).join("")}var f2=1,sd=1,F6=0,Bi=0,xn=0,yd="";function p2(e,t,i,a,o,c,f){return{value:e,root:t,parent:i,type:a,props:o,children:c,line:f2,column:sd,length:f,return:""}}function A0(e,t){return hC(p2("",null,null,"",null,null,0),e,{length:-e.length},t)}function vC(){return xn}function yC(){return xn=Bi>0?_n(yd,--Bi):0,sd--,xn===10&&(sd=1,f2--),xn}function ea(){return xn=Bi<F6?_n(yd,Bi++):0,sd++,xn===10&&(sd=1,f2++),xn}function kr(){return _n(yd,Bi)}function xm(){return Bi}function rp(e,t){return q0(yd,e,t)}function Y0(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W6(e){return f2=sd=1,F6=Mr(yd=e),Bi=0,[]}function Z6(e){return yd="",e}function vm(e){return Y6(rp(Bi-1,a3(e===91?e+2:e===40?e+1:e)))}function wC(e){for(;(xn=kr())&&xn<33;)ea();return Y0(e)>2||Y0(xn)>3?"":" "}function bC(e,t){for(;--t&&ea()&&!(xn<48||xn>102||xn>57&&xn<65||xn>70&&xn<97););return rp(e,xm()+(t<6&&kr()==32&&ea()==32))}function a3(e){for(;ea();)switch(xn){case e:return Bi;case 34:case 39:e!==34&&e!==39&&a3(xn);break;case 40:e===41&&a3(e);break;case 92:ea();break}return Bi}function SC(e,t){for(;ea()&&e+xn!==57;)if(e+xn===84&&kr()===47)break;return"/*"+rp(t,Bi-1)+"*"+d2(e===47?e:ea())}function CC(e){for(;!Y0(kr());)ea();return rp(e,Bi)}function TC(e){return Z6(ym("",null,null,null,[""],e=W6(e),0,[0],e))}function ym(e,t,i,a,o,c,f,p,h){for(var x=0,y=0,b=f,S=0,E=0,A=0,k=1,_=1,R=1,O=0,L="",P=o,V=c,F=a,G=L;_;)switch(A=O,O=ea()){case 40:if(A!=108&&_n(G,b-1)==58){i3(G+=vt(vm(O),"&","&\f"),"&\f")!=-1&&(R=-1);break}case 34:case 39:case 91:G+=vm(O);break;case 9:case 10:case 13:case 32:G+=wC(A);break;case 92:G+=bC(xm()-1,7);continue;case 47:switch(kr()){case 42:case 47:q1(AC(SC(ea(),xm()),t,i),h);break;default:G+="/"}break;case 123*k:p[x++]=Mr(G)*R;case 125*k:case 59:case 0:switch(O){case 0:case 125:_=0;case 59+y:R==-1&&(G=vt(G,/\f/g,"")),E>0&&Mr(G)-b&&q1(E>32?Jy(G+";",a,i,b-1):Jy(vt(G," ","")+";",a,i,b-2),h);break;case 59:G+=";";default:if(q1(F=Qy(G,t,i,x,y,o,p,L,P=[],V=[],b),c),O===123)if(y===0)ym(G,t,F,F,P,c,b,p,V);else switch(S===99&&_n(G,3)===110?100:S){case 100:case 108:case 109:case 115:ym(e,F,F,a&&q1(Qy(e,F,F,0,0,o,p,L,o,P=[],b),V),o,V,b,p,a?P:V);break;default:ym(G,F,F,F,[""],V,0,p,V)}}x=y=E=0,k=R=1,L=G="",b=f;break;case 58:b=1+Mr(G),E=A;default:if(k<1){if(O==123)--k;else if(O==125&&k++==0&&yC()==125)continue}switch(G+=d2(O),O*k){case 38:R=y>0?1:(G+="\f",-1);break;case 44:p[x++]=(Mr(G)-1)*R,R=1;break;case 64:kr()===45&&(G+=vm(ea())),S=kr(),y=b=Mr(L=G+=CC(xm())),O++;break;case 45:A===45&&Mr(G)==2&&(k=0)}}return c}function Qy(e,t,i,a,o,c,f,p,h,x,y){for(var b=o-1,S=o===0?c:[""],E=ov(S),A=0,k=0,_=0;A<a;++A)for(var R=0,O=q0(e,b+1,b=pC(k=f[A])),L=e;R<E;++R)(L=Y6(k>0?S[R]+" "+O:vt(O,/&\f/g,S[R])))&&(h[_++]=L);return p2(e,t,i,o===0?rv:p,h,x,y)}function AC(e,t,i){return p2(e,t,i,G6,d2(vC()),q0(e,2,-2),0)}function Jy(e,t,i,a){return p2(e,t,i,sv,q0(e,0,a),q0(e,a+1,-1),a)}function id(e,t){for(var i="",a=ov(e),o=0;o<a;o++)i+=t(e[o],o,e,t)||"";return i}function EC(e,t,i,a){switch(e.type){case fC:if(e.children.length)break;case dC:case sv:return e.return=e.return||e.value;case G6:return"";case q6:return e.return=e.value+"{"+id(e.children,a)+"}";case rv:e.value=e.props.join(",")}return Mr(i=id(e.children,a))?e.return=e.value+"{"+i+"}":""}function MC(e){var t=ov(e);return function(i,a,o,c){for(var f="",p=0;p<t;p++)f+=e[p](i,a,o,c)||"";return f}}function jC(e){return function(t){t.root||(t=t.return)&&e(t)}}function OC(e){var t=Object.create(null);return function(i){return t[i]===void 0&&(t[i]=e(i)),t[i]}}var RC=function(t,i,a){for(var o=0,c=0;o=c,c=kr(),o===38&&c===12&&(i[a]=1),!Y0(c);)ea();return rp(t,Bi)},LC=function(t,i){var a=-1,o=44;do switch(Y0(o)){case 0:o===38&&kr()===12&&(i[a]=1),t[a]+=RC(Bi-1,i,a);break;case 2:t[a]+=vm(o);break;case 4:if(o===44){t[++a]=kr()===58?"&\f":"",i[a]=t[a].length;break}default:t[a]+=d2(o)}while(o=ea());return t},kC=function(t,i){return Z6(LC(W6(t),i))},e4=new WeakMap,DC=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var i=t.value,a=t.parent,o=t.column===a.column&&t.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(t.props.length===1&&i.charCodeAt(0)!==58&&!e4.get(a))&&!o){e4.set(t,!0);for(var c=[],f=kC(i,c),p=a.props,h=0,x=0;h<f.length;h++)for(var y=0;y<p.length;y++,x++)t.props[x]=c[h]?f[h].replace(/&\f/g,p[y]):p[y]+" "+f[h]}}},zC=function(t){if(t.type==="decl"){var i=t.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(t.return="",t.value="")}};function X6(e,t){switch(mC(e,t)){case 5103:return xt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return xt+e+Hm+e+ei+e+e;case 6828:case 4268:return xt+e+ei+e+e;case 6165:return xt+e+ei+"flex-"+e+e;case 5187:return xt+e+vt(e,/(\w+).+(:[^]+)/,xt+"box-$1$2"+ei+"flex-$1$2")+e;case 5443:return xt+e+ei+"flex-item-"+vt(e,/flex-|-self/,"")+e;case 4675:return xt+e+ei+"flex-line-pack"+vt(e,/align-content|flex-|-self/,"")+e;case 5548:return xt+e+ei+vt(e,"shrink","negative")+e;case 5292:return xt+e+ei+vt(e,"basis","preferred-size")+e;case 6060:return xt+"box-"+vt(e,"-grow","")+xt+e+ei+vt(e,"grow","positive")+e;case 4554:return xt+vt(e,/([^-])(transform)/g,"$1"+xt+"$2")+e;case 6187:return vt(vt(vt(e,/(zoom-|grab)/,xt+"$1"),/(image-set)/,xt+"$1"),e,"")+e;case 5495:case 3959:return vt(e,/(image-set\([^]*)/,xt+"$1$`$1");case 4968:return vt(vt(e,/(.+:)(flex-)?(.*)/,xt+"box-pack:$3"+ei+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xt+e+e;case 4095:case 3583:case 4068:case 2532:return vt(e,/(.+)-inline(.+)/,xt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mr(e)-1-t>6)switch(_n(e,t+1)){case 109:if(_n(e,t+4)!==45)break;case 102:return vt(e,/(.+:)(.+)-([^]+)/,"$1"+xt+"$2-$3$1"+Hm+(_n(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~i3(e,"stretch")?X6(vt(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(_n(e,t+1)!==115)break;case 6444:switch(_n(e,Mr(e)-3-(~i3(e,"!important")&&10))){case 107:return vt(e,":",":"+xt)+e;case 101:return vt(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+xt+(_n(e,14)===45?"inline-":"")+"box$3$1"+xt+"$2$3$1"+ei+"$2box$3")+e}break;case 5936:switch(_n(e,t+11)){case 114:return xt+e+ei+vt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return xt+e+ei+vt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return xt+e+ei+vt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return xt+e+ei+e+e}return e}var HC=function(t,i,a,o){if(t.length>-1&&!t.return)switch(t.type){case sv:t.return=X6(t.value,t.length);break;case q6:return id([A0(t,{value:vt(t.value,"@","@"+xt)})],o);case rv:if(t.length)return xC(t.props,function(c){switch(gC(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return id([A0(t,{props:[vt(c,/:(read-\w+)/,":"+Hm+"$1")]})],o);case"::placeholder":return id([A0(t,{props:[vt(c,/:(plac\w+)/,":"+xt+"input-$1")]}),A0(t,{props:[vt(c,/:(plac\w+)/,":"+Hm+"$1")]}),A0(t,{props:[vt(c,/:(plac\w+)/,ei+"input-$1")]})],o)}return""})}},VC=[HC],_C=function(t){var i=t.key;if(i==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(k){var _=k.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(k),k.setAttribute("data-s",""))})}var o=t.stylisPlugins||VC,c={},f,p=[];f=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(k){for(var _=k.getAttribute("data-emotion").split(" "),R=1;R<_.length;R++)c[_[R]]=!0;p.push(k)});var h,x=[DC,zC];{var y,b=[EC,jC(function(k){y.insert(k)})],S=MC(x.concat(o,b)),E=function(_){return id(TC(_),S)};h=function(_,R,O,L){y=O,E(_?_+"{"+R.styles+"}":R.styles),L&&(A.inserted[R.name]=!0)}}var A={key:i,sheet:new uC({key:i,container:f,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:c,registered:{},insert:h};return A.sheet.hydrate(p),A},tx={exports:{}},Ct={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t4;function NC(){if(t4)return Ct;t4=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,i=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,f=e?Symbol.for("react.provider"):60109,p=e?Symbol.for("react.context"):60110,h=e?Symbol.for("react.async_mode"):60111,x=e?Symbol.for("react.concurrent_mode"):60111,y=e?Symbol.for("react.forward_ref"):60112,b=e?Symbol.for("react.suspense"):60113,S=e?Symbol.for("react.suspense_list"):60120,E=e?Symbol.for("react.memo"):60115,A=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,_=e?Symbol.for("react.fundamental"):60117,R=e?Symbol.for("react.responder"):60118,O=e?Symbol.for("react.scope"):60119;function L(V){if(typeof V=="object"&&V!==null){var F=V.$$typeof;switch(F){case t:switch(V=V.type,V){case h:case x:case a:case c:case o:case b:return V;default:switch(V=V&&V.$$typeof,V){case p:case y:case A:case E:case f:return V;default:return F}}case i:return F}}}function P(V){return L(V)===x}return Ct.AsyncMode=h,Ct.ConcurrentMode=x,Ct.ContextConsumer=p,Ct.ContextProvider=f,Ct.Element=t,Ct.ForwardRef=y,Ct.Fragment=a,Ct.Lazy=A,Ct.Memo=E,Ct.Portal=i,Ct.Profiler=c,Ct.StrictMode=o,Ct.Suspense=b,Ct.isAsyncMode=function(V){return P(V)||L(V)===h},Ct.isConcurrentMode=P,Ct.isContextConsumer=function(V){return L(V)===p},Ct.isContextProvider=function(V){return L(V)===f},Ct.isElement=function(V){return typeof V=="object"&&V!==null&&V.$$typeof===t},Ct.isForwardRef=function(V){return L(V)===y},Ct.isFragment=function(V){return L(V)===a},Ct.isLazy=function(V){return L(V)===A},Ct.isMemo=function(V){return L(V)===E},Ct.isPortal=function(V){return L(V)===i},Ct.isProfiler=function(V){return L(V)===c},Ct.isStrictMode=function(V){return L(V)===o},Ct.isSuspense=function(V){return L(V)===b},Ct.isValidElementType=function(V){return typeof V=="string"||typeof V=="function"||V===a||V===x||V===c||V===o||V===b||V===S||typeof V=="object"&&V!==null&&(V.$$typeof===A||V.$$typeof===E||V.$$typeof===f||V.$$typeof===p||V.$$typeof===y||V.$$typeof===_||V.$$typeof===R||V.$$typeof===O||V.$$typeof===k)},Ct.typeOf=L,Ct}var n4;function PC(){return n4||(n4=1,tx.exports=NC()),tx.exports}var nx,i4;function BC(){if(i4)return nx;i4=1;var e=PC(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};c[e.ForwardRef]=a,c[e.Memo]=o;function f(A){return e.isMemo(A)?o:c[A.$$typeof]||t}var p=Object.defineProperty,h=Object.getOwnPropertyNames,x=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,S=Object.prototype;function E(A,k,_){if(typeof k!="string"){if(S){var R=b(k);R&&R!==S&&E(A,R,_)}var O=h(k);x&&(O=O.concat(x(k)));for(var L=f(A),P=f(k),V=0;V<O.length;++V){var F=O[V];if(!i[F]&&!(_&&_[F])&&!(P&&P[F])&&!(L&&L[F])){var G=y(k,F);try{p(A,F,G)}catch{}}}}return A}return nx=E,nx}BC();var IC=!0;function UC(e,t,i){var a="";return i.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(a+=o+" ")}),a}var K6=function(t,i,a){var o=t.key+"-"+i.name;(a===!1||IC===!1)&&t.registered[o]===void 0&&(t.registered[o]=i.styles)},Q6=function(t,i,a){K6(t,i,a);var o=t.key+"-"+i.name;if(t.inserted[i.name]===void 0){var c=i;do t.insert(i===c?"."+o:"",c,t.sheet,!0),c=c.next;while(c!==void 0)}};function $C(e){for(var t=0,i,a=0,o=e.length;o>=4;++a,o-=4)i=e.charCodeAt(a)&255|(e.charCodeAt(++a)&255)<<8|(e.charCodeAt(++a)&255)<<16|(e.charCodeAt(++a)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,t=(i&65535)*1540483477+((i>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(a+2)&255)<<16;case 2:t^=(e.charCodeAt(a+1)&255)<<8;case 1:t^=e.charCodeAt(a)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var GC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qC=/[A-Z]|^ms/g,YC=/_EMO_([^_]+?)_([^]*?)_EMO_/g,J6=function(t){return t.charCodeAt(1)===45},a4=function(t){return t!=null&&typeof t!="boolean"},ix=OC(function(e){return J6(e)?e:e.replace(qC,"-$&").toLowerCase()}),r4=function(t,i){switch(t){case"animation":case"animationName":if(typeof i=="string")return i.replace(YC,function(a,o,c){return jr={name:o,styles:c,next:jr},o})}return GC[t]!==1&&!J6(t)&&typeof i=="number"&&i!==0?i+"px":i};function F0(e,t,i){if(i==null)return"";var a=i;if(a.__emotion_styles!==void 0)return a;switch(typeof i){case"boolean":return"";case"object":{var o=i;if(o.anim===1)return jr={name:o.name,styles:o.styles,next:jr},o.name;var c=i;if(c.styles!==void 0){var f=c.next;if(f!==void 0)for(;f!==void 0;)jr={name:f.name,styles:f.styles,next:jr},f=f.next;var p=c.styles+";";return p}return FC(e,t,i)}case"function":{if(e!==void 0){var h=jr,x=i(e);return jr=h,F0(e,t,x)}break}}var y=i;return y}function FC(e,t,i){var a="";if(Array.isArray(i))for(var o=0;o<i.length;o++)a+=F0(e,t,i[o])+";";else for(var c in i){var f=i[c];if(typeof f!="object"){var p=f;a4(p)&&(a+=ix(c)+":"+r4(c,p)+";")}else if(Array.isArray(f)&&typeof f[0]=="string"&&t==null)for(var h=0;h<f.length;h++)a4(f[h])&&(a+=ix(c)+":"+r4(c,f[h])+";");else{var x=F0(e,t,f);switch(c){case"animation":case"animationName":{a+=ix(c)+":"+x+";";break}default:a+=c+"{"+x+"}"}}}return a}var s4=/label:\s*([^\s;{]+)\s*(;|$)/g,jr;function lv(e,t,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,o="";jr=void 0;var c=e[0];if(c==null||c.raw===void 0)a=!1,o+=F0(i,t,c);else{var f=c;o+=f[0]}for(var p=1;p<e.length;p++)if(o+=F0(i,t,e[p]),a){var h=c;o+=h[p]}s4.lastIndex=0;for(var x="",y;(y=s4.exec(o))!==null;)x+="-"+y[1];var b=$C(o)+x;return{name:b,styles:o,next:jr}}var WC=function(t){return t()},e8=Yy.useInsertionEffect?Yy.useInsertionEffect:!1,ZC=e8||WC,o4=e8||N.useLayoutEffect,t8=N.createContext(typeof HTMLElement<"u"?_C({key:"css"}):null);t8.Provider;var n8=function(t){return N.forwardRef(function(i,a){var o=N.useContext(t8);return t(i,o,a)})},i8=N.createContext({}),cv={}.hasOwnProperty,r3="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",XC=function(t,i){var a={};for(var o in i)cv.call(i,o)&&(a[o]=i[o]);return a[r3]=t,a},KC=function(t){var i=t.cache,a=t.serialized,o=t.isStringTag;return K6(i,a,o),ZC(function(){return Q6(i,a,o)}),null},QC=n8(function(e,t,i){var a=e.css;typeof a=="string"&&t.registered[a]!==void 0&&(a=t.registered[a]);var o=e[r3],c=[a],f="";typeof e.className=="string"?f=UC(t.registered,c,e.className):e.className!=null&&(f=e.className+" ");var p=lv(c,void 0,N.useContext(i8));f+=t.key+"-"+p.name;var h={};for(var x in e)cv.call(e,x)&&x!=="css"&&x!==r3&&(h[x]=e[x]);return h.className=f,i&&(h.ref=i),N.createElement(N.Fragment,null,N.createElement(KC,{cache:t,serialized:p,isStringTag:typeof o=="string"}),N.createElement(o,h))}),JC=QC,l4=function(t,i){var a=arguments;if(i==null||!cv.call(i,"css"))return N.createElement.apply(void 0,a);var o=a.length,c=new Array(o);c[0]=JC,c[1]=XC(t,i);for(var f=2;f<o;f++)c[f]=a[f];return N.createElement.apply(null,c)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(l4||(l4={}));var eT=n8(function(e,t){var i=e.styles,a=lv([i],void 0,N.useContext(i8)),o=N.useRef();return o4(function(){var c=t.key+"-global",f=new t.sheet.constructor({key:c,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),p=!1,h=document.querySelector('style[data-emotion="'+c+" "+a.name+'"]');return t.sheet.tags.length&&(f.before=t.sheet.tags[0]),h!==null&&(p=!0,h.setAttribute("data-emotion",c),f.hydrate([h])),o.current=[f,p],function(){f.flush()}},[t]),o4(function(){var c=o.current,f=c[0],p=c[1];if(p){c[1]=!1;return}if(a.next!==void 0&&Q6(t,a.next,!0),f.tags.length){var h=f.tags[f.tags.length-1].nextElementSibling;f.before=h,f.flush()}t.insert("",a,f,!1)},[t,a.name]),null});function tT(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return lv(t)}const nT="/assets/Geist-Regular-BCrLS6HJ.ttf",iT="/assets/Geist-Medium-C6X8vKEc.ttf",aT="/assets/BebasNeue-Regular-D2CONTwO.ttf",rT="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",sT=tT`
  /* Font Awesome */
  @font-face {
    font-family: 'Geist Regular';
    src: url(${nT}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Додано для кращого відображення шрифтів */
  }

  /* Helvetica */
  @font-face {
    font-family: 'Geist Medium';
    src: url(${iT}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bebas Neue Regular';
    src: url(${aT}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${rT}) format('truetype');
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
`;var ti=function(){return ti=Object.assign||function(t){for(var i,a=1,o=arguments.length;a<o;a++){i=arguments[a];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c])}return t},ti.apply(this,arguments)};function od(e,t,i){if(i||arguments.length===2)for(var a=0,o=t.length,c;a<o;a++)(c||!(a in t))&&(c||(c=Array.prototype.slice.call(t,0,a)),c[a]=t[a]);return e.concat(c||Array.prototype.slice.call(t))}var Pt="-ms-",H0="-moz-",Tt="-webkit-",a8="comm",h2="rule",uv="decl",oT="@import",r8="@keyframes",lT="@layer",s8=Math.abs,dv=String.fromCharCode,s3=Object.assign;function cT(e,t){return jn(e,0)^45?(((t<<2^jn(e,0))<<2^jn(e,1))<<2^jn(e,2))<<2^jn(e,3):0}function o8(e){return e.trim()}function xs(e,t){return(e=t.exec(e))?e[0]:e}function Xe(e,t,i){return e.replace(t,i)}function wm(e,t,i){return e.indexOf(t,i)}function jn(e,t){return e.charCodeAt(t)|0}function ld(e,t,i){return e.slice(t,i)}function Or(e){return e.length}function l8(e){return e.length}function k0(e,t){return t.push(e),e}function uT(e,t){return e.map(t).join("")}function c4(e,t){return e.filter(function(i){return!xs(i,t)})}var m2=1,cd=1,c8=0,ya=0,vn=0,wd="";function g2(e,t,i,a,o,c,f,p){return{value:e,root:t,parent:i,type:a,props:o,children:c,line:m2,column:cd,length:f,return:"",siblings:p}}function Mo(e,t){return s3(g2("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Gu(e){for(;e.root;)e=Mo(e.root,{children:[e]});k0(e,e.siblings)}function dT(){return vn}function fT(){return vn=ya>0?jn(wd,--ya):0,cd--,vn===10&&(cd=1,m2--),vn}function qa(){return vn=ya<c8?jn(wd,ya++):0,cd++,vn===10&&(cd=1,m2++),vn}function ic(){return jn(wd,ya)}function bm(){return ya}function x2(e,t){return ld(wd,e,t)}function o3(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pT(e){return m2=cd=1,c8=Or(wd=e),ya=0,[]}function hT(e){return wd="",e}function ax(e){return o8(x2(ya-1,l3(e===91?e+2:e===40?e+1:e)))}function mT(e){for(;(vn=ic())&&vn<33;)qa();return o3(e)>2||o3(vn)>3?"":" "}function gT(e,t){for(;--t&&qa()&&!(vn<48||vn>102||vn>57&&vn<65||vn>70&&vn<97););return x2(e,bm()+(t<6&&ic()==32&&qa()==32))}function l3(e){for(;qa();)switch(vn){case e:return ya;case 34:case 39:e!==34&&e!==39&&l3(vn);break;case 40:e===41&&l3(e);break;case 92:qa();break}return ya}function xT(e,t){for(;qa()&&e+vn!==57;)if(e+vn===84&&ic()===47)break;return"/*"+x2(t,ya-1)+"*"+dv(e===47?e:qa())}function vT(e){for(;!o3(ic());)qa();return x2(e,ya)}function yT(e){return hT(Sm("",null,null,null,[""],e=pT(e),0,[0],e))}function Sm(e,t,i,a,o,c,f,p,h){for(var x=0,y=0,b=f,S=0,E=0,A=0,k=1,_=1,R=1,O=0,L="",P=o,V=c,F=a,G=L;_;)switch(A=O,O=qa()){case 40:if(A!=108&&jn(G,b-1)==58){wm(G+=Xe(ax(O),"&","&\f"),"&\f",s8(x?p[x-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:G+=ax(O);break;case 9:case 10:case 13:case 32:G+=mT(A);break;case 92:G+=gT(bm()-1,7);continue;case 47:switch(ic()){case 42:case 47:k0(wT(xT(qa(),bm()),t,i,h),h);break;default:G+="/"}break;case 123*k:p[x++]=Or(G)*R;case 125*k:case 59:case 0:switch(O){case 0:case 125:_=0;case 59+y:R==-1&&(G=Xe(G,/\f/g,"")),E>0&&Or(G)-b&&k0(E>32?d4(G+";",a,i,b-1,h):d4(Xe(G," ","")+";",a,i,b-2,h),h);break;case 59:G+=";";default:if(k0(F=u4(G,t,i,x,y,o,p,L,P=[],V=[],b,c),c),O===123)if(y===0)Sm(G,t,F,F,P,c,b,p,V);else switch(S===99&&jn(G,3)===110?100:S){case 100:case 108:case 109:case 115:Sm(e,F,F,a&&k0(u4(e,F,F,0,0,o,p,L,o,P=[],b,V),V),o,V,b,p,a?P:V);break;default:Sm(G,F,F,F,[""],V,0,p,V)}}x=y=E=0,k=R=1,L=G="",b=f;break;case 58:b=1+Or(G),E=A;default:if(k<1){if(O==123)--k;else if(O==125&&k++==0&&fT()==125)continue}switch(G+=dv(O),O*k){case 38:R=y>0?1:(G+="\f",-1);break;case 44:p[x++]=(Or(G)-1)*R,R=1;break;case 64:ic()===45&&(G+=ax(qa())),S=ic(),y=b=Or(L=G+=vT(bm())),O++;break;case 45:A===45&&Or(G)==2&&(k=0)}}return c}function u4(e,t,i,a,o,c,f,p,h,x,y,b){for(var S=o-1,E=o===0?c:[""],A=l8(E),k=0,_=0,R=0;k<a;++k)for(var O=0,L=ld(e,S+1,S=s8(_=f[k])),P=e;O<A;++O)(P=o8(_>0?E[O]+" "+L:Xe(L,/&\f/g,E[O])))&&(h[R++]=P);return g2(e,t,i,o===0?h2:p,h,x,y,b)}function wT(e,t,i,a){return g2(e,t,i,a8,dv(dT()),ld(e,2,-2),0,a)}function d4(e,t,i,a,o){return g2(e,t,i,uv,ld(e,0,a),ld(e,a+1,-1),a,o)}function u8(e,t,i){switch(cT(e,t)){case 5103:return Tt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Tt+e+e;case 4789:return H0+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Tt+e+H0+e+Pt+e+e;case 5936:switch(jn(e,t+11)){case 114:return Tt+e+Pt+Xe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Tt+e+Pt+Xe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Tt+e+Pt+Xe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Tt+e+Pt+e+e;case 6165:return Tt+e+Pt+"flex-"+e+e;case 5187:return Tt+e+Xe(e,/(\w+).+(:[^]+)/,Tt+"box-$1$2"+Pt+"flex-$1$2")+e;case 5443:return Tt+e+Pt+"flex-item-"+Xe(e,/flex-|-self/g,"")+(xs(e,/flex-|baseline/)?"":Pt+"grid-row-"+Xe(e,/flex-|-self/g,""))+e;case 4675:return Tt+e+Pt+"flex-line-pack"+Xe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Tt+e+Pt+Xe(e,"shrink","negative")+e;case 5292:return Tt+e+Pt+Xe(e,"basis","preferred-size")+e;case 6060:return Tt+"box-"+Xe(e,"-grow","")+Tt+e+Pt+Xe(e,"grow","positive")+e;case 4554:return Tt+Xe(e,/([^-])(transform)/g,"$1"+Tt+"$2")+e;case 6187:return Xe(Xe(Xe(e,/(zoom-|grab)/,Tt+"$1"),/(image-set)/,Tt+"$1"),e,"")+e;case 5495:case 3959:return Xe(e,/(image-set\([^]*)/,Tt+"$1$`$1");case 4968:return Xe(Xe(e,/(.+:)(flex-)?(.*)/,Tt+"box-pack:$3"+Pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Tt+e+e;case 4200:if(!xs(e,/flex-|baseline/))return Pt+"grid-column-align"+ld(e,t)+e;break;case 2592:case 3360:return Pt+Xe(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(a,o){return t=o,xs(a.props,/grid-\w+-end/)})?~wm(e+(i=i[t].value),"span",0)?e:Pt+Xe(e,"-start","")+e+Pt+"grid-row-span:"+(~wm(i,"span",0)?xs(i,/\d+/):+xs(i,/\d+/)-+xs(e,/\d+/))+";":Pt+Xe(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(a){return xs(a.props,/grid-\w+-start/)})?e:Pt+Xe(Xe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Xe(e,/(.+)-inline(.+)/,Tt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Or(e)-1-t>6)switch(jn(e,t+1)){case 109:if(jn(e,t+4)!==45)break;case 102:return Xe(e,/(.+:)(.+)-([^]+)/,"$1"+Tt+"$2-$3$1"+H0+(jn(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~wm(e,"stretch",0)?u8(Xe(e,"stretch","fill-available"),t,i)+e:e}break;case 5152:case 5920:return Xe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,c,f,p,h,x){return Pt+o+":"+c+x+(f?Pt+o+"-span:"+(p?h:+h-+c)+x:"")+e});case 4949:if(jn(e,t+6)===121)return Xe(e,":",":"+Tt)+e;break;case 6444:switch(jn(e,jn(e,14)===45?18:11)){case 120:return Xe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Tt+(jn(e,14)===45?"inline-":"")+"box$3$1"+Tt+"$2$3$1"+Pt+"$2box$3")+e;case 100:return Xe(e,":",":"+Pt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Xe(e,"scroll-","scroll-snap-")+e}return e}function Vm(e,t){for(var i="",a=0;a<e.length;a++)i+=t(e[a],a,e,t)||"";return i}function bT(e,t,i,a){switch(e.type){case lT:if(e.children.length)break;case oT:case uv:return e.return=e.return||e.value;case a8:return"";case r8:return e.return=e.value+"{"+Vm(e.children,a)+"}";case h2:if(!Or(e.value=e.props.join(",")))return""}return Or(i=Vm(e.children,a))?e.return=e.value+"{"+i+"}":""}function ST(e){var t=l8(e);return function(i,a,o,c){for(var f="",p=0;p<t;p++)f+=e[p](i,a,o,c)||"";return f}}function CT(e){return function(t){t.root||(t=t.return)&&e(t)}}function TT(e,t,i,a){if(e.length>-1&&!e.return)switch(e.type){case uv:e.return=u8(e.value,e.length,i);return;case r8:return Vm([Mo(e,{value:Xe(e.value,"@","@"+Tt)})],a);case h2:if(e.length)return uT(i=e.props,function(o){switch(xs(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gu(Mo(e,{props:[Xe(o,/:(read-\w+)/,":"+H0+"$1")]})),Gu(Mo(e,{props:[o]})),s3(e,{props:c4(i,a)});break;case"::placeholder":Gu(Mo(e,{props:[Xe(o,/:(plac\w+)/,":"+Tt+"input-$1")]})),Gu(Mo(e,{props:[Xe(o,/:(plac\w+)/,":"+H0+"$1")]})),Gu(Mo(e,{props:[Xe(o,/:(plac\w+)/,Pt+"input-$1")]})),Gu(Mo(e,{props:[o]})),s3(e,{props:c4(i,a)});break}return""})}}var AT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qi={},ud=typeof process<"u"&&Qi!==void 0&&(Qi.REACT_APP_SC_ATTR||Qi.SC_ATTR)||"data-styled",d8="active",f8="data-styled-version",v2="6.1.19",fv=`/*!sc*/
`,_m=typeof window<"u"&&typeof document<"u",ET=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Qi!==void 0&&Qi.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Qi.REACT_APP_SC_DISABLE_SPEEDY!==""?Qi.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Qi.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Qi!==void 0&&Qi.SC_DISABLE_SPEEDY!==void 0&&Qi.SC_DISABLE_SPEEDY!==""&&Qi.SC_DISABLE_SPEEDY!=="false"&&Qi.SC_DISABLE_SPEEDY),MT={},y2=Object.freeze([]),dd=Object.freeze({});function p8(e,t,i){return i===void 0&&(i=dd),e.theme!==i.theme&&e.theme||t||i.theme}var h8=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,OT=/(^-|-$)/g;function f4(e){return e.replace(jT,"-").replace(OT,"")}var RT=/(a)(d)/gi,Y1=52,p4=function(e){return String.fromCharCode(e+(e>25?39:97))};function c3(e){var t,i="";for(t=Math.abs(e);t>Y1;t=t/Y1|0)i=p4(t%Y1)+i;return(p4(t%Y1)+i).replace(RT,"$1-$2")}var rx,m8=5381,Xu=function(e,t){for(var i=t.length;i;)e=33*e^t.charCodeAt(--i);return e},g8=function(e){return Xu(m8,e)};function pv(e){return c3(g8(e)>>>0)}function LT(e){return e.displayName||e.name||"Component"}function sx(e){return typeof e=="string"&&!0}var x8=typeof Symbol=="function"&&Symbol.for,v8=x8?Symbol.for("react.memo"):60115,kT=x8?Symbol.for("react.forward_ref"):60112,DT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},y8={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},HT=((rx={})[kT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rx[v8]=y8,rx);function h4(e){return("type"in(t=e)&&t.type.$$typeof)===v8?y8:"$$typeof"in e?HT[e.$$typeof]:DT;var t}var VT=Object.defineProperty,_T=Object.getOwnPropertyNames,m4=Object.getOwnPropertySymbols,NT=Object.getOwnPropertyDescriptor,PT=Object.getPrototypeOf,g4=Object.prototype;function w8(e,t,i){if(typeof t!="string"){if(g4){var a=PT(t);a&&a!==g4&&w8(e,a,i)}var o=_T(t);m4&&(o=o.concat(m4(t)));for(var c=h4(e),f=h4(t),p=0;p<o.length;++p){var h=o[p];if(!(h in zT||i&&i[h]||f&&h in f||c&&h in c)){var x=NT(t,h);try{VT(e,h,x)}catch{}}}}return e}function fd(e){return typeof e=="function"}function hv(e){return typeof e=="object"&&"styledComponentId"in e}function ec(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Nm(e,t){if(e.length===0)return"";for(var i=e[0],a=1;a<e.length;a++)i+=e[a];return i}function W0(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function u3(e,t,i){if(i===void 0&&(i=!1),!i&&!W0(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)e[a]=u3(e[a],t[a]);else if(W0(t))for(var a in t)e[a]=u3(e[a],t[a]);return e}function mv(e,t){Object.defineProperty(e,"toString",{value:t})}function sp(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var BT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var i=0,a=0;a<t;a++)i+=this.groupSizes[a];return i},e.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,c=o;t>=c;)if((c<<=1)<0)throw sp(16,"".concat(t));this.groupSizes=new Uint32Array(c),this.groupSizes.set(a),this.length=c;for(var f=o;f<c;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(t+1),h=(f=0,i.length);f<h;f++)this.tag.insertRule(p,i[f])&&(this.groupSizes[t]++,p++)},e.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],a=this.indexOfGroup(t),o=a+i;this.groupSizes[t]=0;for(var c=a;c<o;c++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),c=o+a,f=o;f<c;f++)i+="".concat(this.tag.getRule(f)).concat(fv);return i},e}(),Cm=new Map,Pm=new Map,Tm=1,F1=function(e){if(Cm.has(e))return Cm.get(e);for(;Pm.has(Tm);)Tm++;var t=Tm++;return Cm.set(e,t),Pm.set(t,e),t},IT=function(e,t){Tm=t+1,Cm.set(e,t),Pm.set(t,e)},UT="style[".concat(ud,"][").concat(f8,'="').concat(v2,'"]'),$T=new RegExp("^".concat(ud,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),GT=function(e,t,i){for(var a,o=i.split(","),c=0,f=o.length;c<f;c++)(a=o[c])&&e.registerName(t,a)},qT=function(e,t){for(var i,a=((i=t.textContent)!==null&&i!==void 0?i:"").split(fv),o=[],c=0,f=a.length;c<f;c++){var p=a[c].trim();if(p){var h=p.match($T);if(h){var x=0|parseInt(h[1],10),y=h[2];x!==0&&(IT(y,x),GT(e,y,h[3]),e.getTag().insertRules(x,o)),o.length=0}else o.push(p)}}},x4=function(e){for(var t=document.querySelectorAll(UT),i=0,a=t.length;i<a;i++){var o=t[i];o&&o.getAttribute(ud)!==d8&&(qT(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function YT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var b8=function(e){var t=document.head,i=e||t,a=document.createElement("style"),o=function(p){var h=Array.from(p.querySelectorAll("style[".concat(ud,"]")));return h[h.length-1]}(i),c=o!==void 0?o.nextSibling:null;a.setAttribute(ud,d8),a.setAttribute(f8,v2);var f=YT();return f&&a.setAttribute("nonce",f),i.insertBefore(a,c),a},FT=function(){function e(t){this.element=b8(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,c=a.length;o<c;o++){var f=a[o];if(f.ownerNode===i)return f}throw sp(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},e}(),WT=function(){function e(t){this.element=b8(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ZT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),v4=_m,XT={isServer:!_m,useCSSOMInjection:!ET},Bm=function(){function e(t,i,a){t===void 0&&(t=dd),i===void 0&&(i={});var o=this;this.options=ti(ti({},XT),t),this.gs=i,this.names=new Map(a),this.server=!!t.isServer,!this.server&&_m&&v4&&(v4=!1,x4(this)),mv(this,function(){return function(c){for(var f=c.getTag(),p=f.length,h="",x=function(b){var S=function(R){return Pm.get(R)}(b);if(S===void 0)return"continue";var E=c.names.get(S),A=f.getGroup(b);if(E===void 0||!E.size||A.length===0)return"continue";var k="".concat(ud,".g").concat(b,'[id="').concat(S,'"]'),_="";E!==void 0&&E.forEach(function(R){R.length>0&&(_+="".concat(R,","))}),h+="".concat(A).concat(k,'{content:"').concat(_,'"}').concat(fv)},y=0;y<p;y++)x(y);return h}(o)})}return e.registerId=function(t){return F1(t)},e.prototype.rehydrate=function(){!this.server&&_m&&x4(this)},e.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new e(ti(ti({},this.options),t),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(i){var a=i.useCSSOMInjection,o=i.target;return i.isServer?new ZT(o):a?new FT(o):new WT(o)}(this.options),new BT(t)));var t},e.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},e.prototype.registerName=function(t,i){if(F1(t),this.names.has(t))this.names.get(t).add(i);else{var a=new Set;a.add(i),this.names.set(t,a)}},e.prototype.insertRules=function(t,i,a){this.registerName(t,i),this.getTag().insertRules(F1(t),a)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(F1(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),KT=/&/g,QT=/^\s*\/\/.*$/gm;function S8(e,t){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=S8(i.children,t)),i})}function JT(e){var t,i,a,o=dd,c=o.options,f=c===void 0?dd:c,p=o.plugins,h=p===void 0?y2:p,x=function(S,E,A){return A.startsWith(i)&&A.endsWith(i)&&A.replaceAll(i,"").length>0?".".concat(t):S},y=h.slice();y.push(function(S){S.type===h2&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(KT,i).replace(a,x))}),f.prefix&&y.push(TT),y.push(bT);var b=function(S,E,A,k){E===void 0&&(E=""),A===void 0&&(A=""),k===void 0&&(k="&"),t=k,i=E,a=new RegExp("\\".concat(i,"\\b"),"g");var _=S.replace(QT,""),R=yT(A||E?"".concat(A," ").concat(E," { ").concat(_," }"):_);f.namespace&&(R=S8(R,f.namespace));var O=[];return Vm(R,ST(y.concat(CT(function(L){return O.push(L)})))),O};return b.hash=h.length?h.reduce(function(S,E){return E.name||sp(15),Xu(S,E.name)},m8).toString():"",b}var eA=new Bm,d3=JT(),C8=At.createContext({shouldForwardProp:void 0,styleSheet:eA,stylis:d3});C8.Consumer;At.createContext(void 0);function f3(){return N.useContext(C8)}var T8=function(){function e(t,i){var a=this;this.inject=function(o,c){c===void 0&&(c=d3);var f=a.name+c.hash;o.hasNameForId(a.id,f)||o.insertRules(a.id,f,c(a.rules,f,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,mv(this,function(){throw sp(12,String(a.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=d3),this.name+t.hash},e}(),tA=function(e){return e>="A"&&e<="Z"};function y4(e){for(var t="",i=0;i<e.length;i++){var a=e[i];if(i===1&&a==="-"&&e[0]==="-")return e;tA(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var A8=function(e){return e==null||e===!1||e===""},E8=function(e){var t,i,a=[];for(var o in e){var c=e[o];e.hasOwnProperty(o)&&!A8(c)&&(Array.isArray(c)&&c.isCss||fd(c)?a.push("".concat(y4(o),":"),c,";"):W0(c)?a.push.apply(a,od(od(["".concat(o," {")],E8(c),!1),["}"],!1)):a.push("".concat(y4(o),": ").concat((t=o,(i=c)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in AT||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Lo(e,t,i,a){if(A8(e))return[];if(hv(e))return[".".concat(e.styledComponentId)];if(fd(e)){if(!fd(c=e)||c.prototype&&c.prototype.isReactComponent||!t)return[e];var o=e(t);return Lo(o,t,i,a)}var c;return e instanceof T8?i?(e.inject(i,a),[e.getName(a)]):[e]:W0(e)?E8(e):Array.isArray(e)?Array.prototype.concat.apply(y2,e.map(function(f){return Lo(f,t,i,a)})):[e.toString()]}function M8(e){for(var t=0;t<e.length;t+=1){var i=e[t];if(fd(i)&&!hv(i))return!1}return!0}var nA=g8(v2),iA=function(){function e(t,i,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&M8(t),this.componentId=i,this.baseHash=Xu(nA,i),this.baseStyle=a,Bm.registerId(i)}return e.prototype.generateAndInjectStyles=function(t,i,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=ec(o,this.staticRulesId);else{var c=Nm(Lo(this.rules,t,i,a)),f=c3(Xu(this.baseHash,c)>>>0);if(!i.hasNameForId(this.componentId,f)){var p=a(c,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,p)}o=ec(o,f),this.staticRulesId=f}else{for(var h=Xu(this.baseHash,a.hash),x="",y=0;y<this.rules.length;y++){var b=this.rules[y];if(typeof b=="string")x+=b;else if(b){var S=Nm(Lo(b,t,i,a));h=Xu(h,S+y),x+=S}}if(x){var E=c3(h>>>0);i.hasNameForId(this.componentId,E)||i.insertRules(this.componentId,E,a(x,".".concat(E),void 0,this.componentId)),o=ec(o,E)}}return o},e}(),gv=At.createContext(void 0);gv.Consumer;var ox={};function aA(e,t,i){var a=hv(e),o=e,c=!sx(e),f=t.attrs,p=f===void 0?y2:f,h=t.componentId,x=h===void 0?function(P,V){var F=typeof P!="string"?"sc":f4(P);ox[F]=(ox[F]||0)+1;var G="".concat(F,"-").concat(pv(v2+F+ox[F]));return V?"".concat(V,"-").concat(G):G}(t.displayName,t.parentComponentId):h,y=t.displayName,b=y===void 0?function(P){return sx(P)?"styled.".concat(P):"Styled(".concat(LT(P),")")}(e):y,S=t.displayName&&t.componentId?"".concat(f4(t.displayName),"-").concat(t.componentId):t.componentId||x,E=a&&o.attrs?o.attrs.concat(p).filter(Boolean):p,A=t.shouldForwardProp;if(a&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;A=function(P,V){return k(P,V)&&_(P,V)}}else A=k}var R=new iA(i,S,a?o.componentStyle:void 0);function O(P,V){return function(F,G,Q){var ne=F.attrs,se=F.componentStyle,de=F.defaultProps,ye=F.foldedComponentIds,Ee=F.styledComponentId,Oe=F.target,Ae=At.useContext(gv),Z=f3(),le=F.shouldForwardProp||Z.shouldForwardProp,ue=p8(G,Ae,de)||dd,xe=function($e,ke,ln){for(var it,Ft=ti(ti({},ke),{className:void 0,theme:ln}),Br=0;Br<$e.length;Br+=1){var Si=fd(it=$e[Br])?it(Ft):it;for(var On in Si)Ft[On]=On==="className"?ec(Ft[On],Si[On]):On==="style"?ti(ti({},Ft[On]),Si[On]):Si[On]}return ke.className&&(Ft.className=ec(Ft.className,ke.className)),Ft}(ne,G,ue),B=xe.as||Oe,re={};for(var we in xe)xe[we]===void 0||we[0]==="$"||we==="as"||we==="theme"&&xe.theme===ue||(we==="forwardedAs"?re.as=xe.forwardedAs:le&&!le(we,B)||(re[we]=xe[we]));var be=function($e,ke){var ln=f3(),it=$e.generateAndInjectStyles(ke,ln.styleSheet,ln.stylis);return it}(se,xe),Re=ec(ye,Ee);return be&&(Re+=" "+be),xe.className&&(Re+=" "+xe.className),re[sx(B)&&!h8.has(B)?"class":"className"]=Re,Q&&(re.ref=Q),N.createElement(B,re)}(L,P,V)}O.displayName=b;var L=At.forwardRef(O);return L.attrs=E,L.componentStyle=R,L.displayName=b,L.shouldForwardProp=A,L.foldedComponentIds=a?ec(o.foldedComponentIds,o.styledComponentId):"",L.styledComponentId=S,L.target=a?o.target:e,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=a?function(V){for(var F=[],G=1;G<arguments.length;G++)F[G-1]=arguments[G];for(var Q=0,ne=F;Q<ne.length;Q++)u3(V,ne[Q],!0);return V}({},o.defaultProps,P):P}}),mv(L,function(){return".".concat(L.styledComponentId)}),c&&w8(L,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function w4(e,t){for(var i=[e[0]],a=0,o=t.length;a<o;a+=1)i.push(t[a],e[a+1]);return i}var b4=function(e){return Object.assign(e,{isCss:!0})};function w2(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(fd(e)||W0(e))return b4(Lo(w4(y2,od([e],t,!0))));var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Lo(a):b4(Lo(w4(a,t)))}function p3(e,t,i){if(i===void 0&&(i=dd),!t)throw sp(1,t);var a=function(o){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return e(t,i,w2.apply(void 0,od([o],c,!1)))};return a.attrs=function(o){return p3(e,t,ti(ti({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return p3(e,t,ti(ti({},i),o))},a}var j8=function(e){return p3(aA,e)},T=j8;h8.forEach(function(e){T[e]=j8(e)});var rA=function(){function e(t,i){this.rules=t,this.componentId=i,this.isStatic=M8(t),Bm.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,i,a,o){var c=o(Nm(Lo(this.rules,i,a,o)),""),f=this.componentId+t;a.insertRules(f,f,c)},e.prototype.removeStyles=function(t,i){i.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,i,a,o){t>2&&Bm.registerId(this.componentId+t),this.removeStyles(t,a),this.createStyles(t,i,a,o)},e}();function sA(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=w2.apply(void 0,od([e],t,!1)),o="sc-global-".concat(pv(JSON.stringify(a))),c=new rA(a,o),f=function(h){var x=f3(),y=At.useContext(gv),b=At.useRef(x.styleSheet.allocateGSInstance(o)).current;return x.styleSheet.server&&p(b,h,x.styleSheet,y,x.stylis),At.useLayoutEffect(function(){if(!x.styleSheet.server)return p(b,h,x.styleSheet,y,x.stylis),function(){return c.removeStyles(b,x.styleSheet)}},[b,h,x.styleSheet,y,x.stylis]),null};function p(h,x,y,b,S){if(c.isStatic)c.renderStyles(h,MT,y,S);else{var E=ti(ti({},x),{theme:p8(x,b,f.defaultProps)});c.renderStyles(h,E,y,S)}}return At.memo(f)}function Nr(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=Nm(w2.apply(void 0,od([e],t,!1))),o=pv(a);return new T8(o,a)}const vs=T(Kt)`
  color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"};
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  position: relative;
  padding: 10px 0;

  &:hover {
    color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#555555":"#CCCCCC"};
  }

  &.active {
    color: var(--purple-400);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--purple-400);
    }
  }
`,O8=T.img`
  margin-left: 4px;
  transition: transform 0.3s ease;
  filter: ${({$overlayOpen:e,$darkMode:t})=>e||t?"brightness(0) saturate(100%)":"brightness(0) invert(1)"};
`,oA=T.div`
  position: relative;
  cursor: pointer;
  color: #808080;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  
  &:hover,
  &.active {
    color: var(--purple-400);
    
    // Використовуємо більш специфічний селектор
    & > ${vs} {
      color: var(--purple-400);
    }
    
    // Використовуємо більш специфічний селектор для стрілки
    & > ${vs} > ${O8} {
      filter: brightness(0) saturate(100%) invert(39%) sepia(93%) saturate(747%) hue-rotate(238deg) brightness(93%) contrast(91%);
      transform: rotate(180deg);
    }
  }
`,lA=T.div`
  position: absolute;
  right: -112px;
  top: 100%;
  border-radius: 12px;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.15),
    0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 12px 0;
  min-width: 280px;
  z-index: 1000;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0;
  transform: translateY(-10px);
  animation: fadeIn 0.2s ease forwards;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,S4=T.div`
  padding: 12px 24px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(147, 51, 234, 0.1);
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    display: block;
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--purple-400);
    }
    
    &.active {
      color: var(--purple-400);
      font-weight: 600;
    }
  }
`,cA=T.nav`
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
  ${({$isScrolled:e})=>e&&w2`
      background: rgba(0, 0, 0, 0.39);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    `}
  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`,uA=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    padding: 0 40px;
  }
`,dA=T(Kt)`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 1001;

  img {
    height: 32px;
    width: auto;
    filter: ${({$overlayOpen:e,$darkMode:t})=>e||t?"brightness(0)":"brightness(0) invert(1)"};
    transition: filter 0.3s ease-in-out;

    @media (min-width: 768px) {
      height: 40px;
    }
  }
`,fA=T.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1440px) {
    gap: 40px;
    align-items: center;
  }
`,E0=T.li`
  position: relative;
`,C4=T.div`
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
`,W1=T.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`,Ao=T.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;
    line-height: 125%;
    color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"};
    width: max-content;
    transition: all 0.3s ease;

    &:hover {
      color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#555555":"#CCCCCC"};
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
      color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"};
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
`,pA=T.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,R8=T.button`
  display: none;
  @media screen and (min-width: 768px) {
    background: transparent;
    border: 1px solid
      ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"};
    color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"};
    padding: 10px 24px;
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
      background: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"};
      color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#FFFFFF":"#000000"};
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;var Z1={},T4;function hA(){if(T4)return Z1;T4=1,Z1.match=c,Z1.parse=f;var e=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function c(y,b){return f(y).some(function(S){var E=S.inverse,A=S.type==="all"||b.type===S.type;if(A&&E||!(A||E))return!1;var k=S.expressions.every(function(_){var R=_.feature,O=_.modifier,L=_.value,P=b[R];if(!P)return!1;switch(R){case"orientation":case"scan":return P.toLowerCase()===L.toLowerCase();case"width":case"height":case"device-width":case"device-height":L=x(L),P=x(P);break;case"resolution":L=h(L),P=h(P);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":L=p(L),P=p(P);break;case"grid":case"color":case"color-index":case"monochrome":L=parseInt(L,10)||1,P=parseInt(P,10)||0;break}switch(O){case"min":return P>=L;case"max":return P<=L;default:return P===L}});return k&&!E||!k&&E})}function f(y){return y.split(",").map(function(b){b=b.trim();var S=b.match(e),E=S[1],A=S[2],k=S[3]||"",_={};return _.inverse=!!E&&E.toLowerCase()==="not",_.type=A?A.toLowerCase():"all",k=k.match(/\([^\)]+\)/g)||[],_.expressions=k.map(function(R){var O=R.match(t),L=O[1].toLowerCase().match(i);return{modifier:L[1],feature:L[2],value:O[2]}}),_})}function p(y){var b=Number(y),S;return b||(S=y.match(/^(\d+)\s*\/\s*(\d+)$/),b=S[1]/S[2]),b}function h(y){var b=parseFloat(y),S=String(y).match(o)[1];switch(S){case"dpcm":return b/2.54;case"dppx":return b*96;default:return b}}function x(y){var b=parseFloat(y),S=String(y).match(a)[1];switch(S){case"em":return b*16;case"rem":return b*16;case"cm":return b*96/2.54;case"mm":return b*96/2.54/10;case"in":return b*96;case"pt":return b*72;case"pc":return b*72/12;default:return b}}return Z1}var lx,A4;function mA(){if(A4)return lx;A4=1;var e=hA().match,t=typeof window<"u"?window.matchMedia:null;function i(o,c,f){var p=this,h;t&&!f&&(h=t.call(window,o)),h?(this.matches=h.matches,this.media=h.media,h.addListener(b)):(this.matches=e(o,c),this.media=o),this.addListener=x,this.removeListener=y,this.dispose=S;function x(E){h&&h.addListener(E)}function y(E){h&&h.removeListener(E)}function b(E){p.matches=E.matches,p.media=E.media}function S(){h&&h.removeListener(b)}}function a(o,c,f){return new i(o,c,f)}return lx=a,lx}var gA=mA();const xA=l2(gA);var vA=/[A-Z]/g,yA=/^ms-/,cx={};function wA(e){return"-"+e.toLowerCase()}function L8(e){if(cx.hasOwnProperty(e))return cx[e];var t=e.replace(vA,wA);return cx[e]=yA.test(t)?"-"+t:t}function bA(e,t){if(e===t)return!0;if(!e||!t)return!1;const i=Object.keys(e),a=Object.keys(t),o=i.length;if(a.length!==o)return!1;for(let c=0;c<o;c++){const f=i[c];if(e[f]!==t[f]||!Object.prototype.hasOwnProperty.call(t,f))return!1}return!0}var ux={exports:{}},dx,E4;function SA(){if(E4)return dx;E4=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return dx=e,dx}var fx,M4;function CA(){if(M4)return fx;M4=1;var e=SA();function t(){}function i(){}return i.resetWarningCache=t,fx=function(){function a(f,p,h,x,y,b){if(b!==e){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}a.isRequired=a;function o(){return a}var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:t};return c.PropTypes=c,c},fx}var j4;function TA(){return j4||(j4=1,ux.exports=CA()()),ux.exports}var AA=TA();const yt=l2(AA),yi=yt.oneOfType([yt.string,yt.number]),k8={all:yt.bool,grid:yt.bool,aural:yt.bool,braille:yt.bool,handheld:yt.bool,print:yt.bool,projection:yt.bool,screen:yt.bool,tty:yt.bool,tv:yt.bool,embossed:yt.bool},EA={orientation:yt.oneOf(["portrait","landscape"]),scan:yt.oneOf(["progressive","interlace"]),aspectRatio:yt.string,deviceAspectRatio:yt.string,height:yi,deviceHeight:yi,width:yi,deviceWidth:yi,color:yt.bool,colorIndex:yt.bool,monochrome:yt.bool,resolution:yi,type:Object.keys(k8)},{type:uU,...MA}=EA,jA={minAspectRatio:yt.string,maxAspectRatio:yt.string,minDeviceAspectRatio:yt.string,maxDeviceAspectRatio:yt.string,minHeight:yi,maxHeight:yi,minDeviceHeight:yi,maxDeviceHeight:yi,minWidth:yi,maxWidth:yi,minDeviceWidth:yi,maxDeviceWidth:yi,minColor:yt.number,maxColor:yt.number,minColorIndex:yt.number,maxColorIndex:yt.number,minMonochrome:yt.number,maxMonochrome:yt.number,minResolution:yi,maxResolution:yi,...MA},OA={...k8,...jA};var RA={all:OA};const LA=e=>`not ${e}`,kA=(e,t)=>{const i=L8(e);return typeof t=="number"&&(t=`${t}px`),t===!0?i:t===!1?LA(i):`(${i}: ${t})`},DA=e=>e.join(" and "),zA=e=>{const t=[];return Object.keys(RA.all).forEach(i=>{const a=e[i];a!=null&&t.push(kA(i,a))}),DA(t)},HA=N.createContext(void 0),VA=e=>e.query||zA(e),O4=e=>e?Object.keys(e).reduce((i,a)=>(i[L8(a)]=e[a],i),{}):void 0,D8=()=>{const e=N.useRef(!1);return N.useEffect(()=>{e.current=!0},[]),e.current},_A=e=>{const t=N.useContext(HA),i=()=>O4(e)||O4(t),[a,o]=N.useState(i);return N.useEffect(()=>{const c=i();bA(a,c)||o(c)},[e,t]),a},NA=e=>{const t=()=>VA(e),[i,a]=N.useState(t);return N.useEffect(()=>{const o=t();i!==o&&a(o)},[e]),i},PA=(e,t)=>{const i=()=>xA(e,t||{},!!t),[a,o]=N.useState(i),c=D8();return N.useEffect(()=>{if(c){const f=i();return o(f),()=>{f&&f.dispose()}}},[e,t]),a},BA=e=>{const[t,i]=N.useState(e.matches);return N.useEffect(()=>{const a=o=>{i(o.matches)};return e.addListener(a),i(e.matches),()=>{e.removeListener(a)}},[e]),t},ft=(e,t,i)=>{const a=_A(t),o=NA(e);if(!o)throw new Error("Invalid or missing MediaQuery!");const c=PA(o,a),f=BA(c);return D8(),N.useEffect(()=>{},[f]),N.useEffect(()=>()=>{c&&c.dispose()},[]),f},xv=N.createContext({});function cc(e){const t=N.useRef(null);return t.current===null&&(t.current=e()),t.current}const vv=typeof window<"u",op=vv?N.useLayoutEffect:N.useEffect,b2=N.createContext(null);function yv(e,t){e.indexOf(t)===-1&&e.push(t)}function wv(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}const _r=(e,t,i)=>i>t?t:i<e?e:i;let Z0=()=>{};const bs={},z8=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function H8(e){return typeof e=="object"&&e!==null}const V8=e=>/^0[^.\s]+$/u.test(e);function bv(e){let t;return()=>(t===void 0&&(t=e()),t)}const Pi=e=>e,IA=(e,t)=>i=>t(e(i)),lp=(...e)=>e.reduce(IA),pd=(e,t,i)=>{const a=t-e;return a===0?1:(i-e)/a};class Sv{constructor(){this.subscriptions=[]}add(t){return yv(this.subscriptions,t),()=>wv(this.subscriptions,t)}notify(t,i,a){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,i,a);else for(let c=0;c<o;c++){const f=this.subscriptions[c];f&&f(t,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Dr=e=>e*1e3,zr=e=>e/1e3;function Cv(e,t){return t?e*(1e3/t):0}const _8=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e,UA=1e-7,$A=12;function GA(e,t,i,a,o){let c,f,p=0;do f=t+(i-t)/2,c=_8(f,a,o)-e,c>0?i=f:t=f;while(Math.abs(c)>UA&&++p<$A);return f}function cp(e,t,i,a){if(e===t&&i===a)return Pi;const o=c=>GA(c,0,1,e,i);return c=>c===0||c===1?c:_8(o(c),t,a)}const N8=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,P8=e=>t=>1-e(1-t),wa=cp(.33,1.53,.69,.99),Tv=P8(wa),B8=N8(Tv),I8=e=>(e*=2)<1?.5*Tv(e):.5*(2-Math.pow(2,-10*(e-1))),Av=e=>1-Math.sin(Math.acos(e)),Im=P8(Av),U8=N8(Av),qA=cp(.42,0,1,1),ve=cp(0,0,.58,1),Um=cp(.42,0,.58,1),YA=e=>Array.isArray(e)&&typeof e[0]!="number",$8=e=>Array.isArray(e)&&typeof e[0]=="number",FA={linear:Pi,easeIn:qA,easeInOut:Um,easeOut:ve,circIn:Av,circInOut:U8,circOut:Im,backIn:Tv,backInOut:B8,backOut:wa,anticipate:I8},WA=e=>typeof e=="string",R4=e=>{if($8(e)){Z0(e.length===4);const[t,i,a,o]=e;return cp(t,i,a,o)}else if(WA(e))return FA[e];return e},X1=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function ZA(e,t){let i=new Set,a=new Set,o=!1,c=!1;const f=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(y){f.has(y)&&(x.schedule(y),e()),y(p)}const x={schedule:(y,b=!1,S=!1)=>{const A=S&&o?i:a;return b&&f.add(y),A.has(y)||A.add(y),y},cancel:y=>{a.delete(y),f.delete(y)},process:y=>{if(p=y,o){c=!0;return}o=!0,[i,a]=[a,i],i.forEach(h),i.clear(),o=!1,c&&(c=!1,x.process(y))}};return x}const XA=40;function G8(e,t){let i=!1,a=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>i=!0,f=X1.reduce((L,P)=>(L[P]=ZA(c),L),{}),{setup:p,read:h,resolveKeyframes:x,preUpdate:y,update:b,preRender:S,render:E,postRender:A}=f,k=()=>{const L=bs.useManualTiming?o.timestamp:performance.now();i=!1,bs.useManualTiming||(o.delta=a?1e3/60:Math.max(Math.min(L-o.timestamp,XA),1)),o.timestamp=L,o.isProcessing=!0,p.process(o),h.process(o),x.process(o),y.process(o),b.process(o),S.process(o),E.process(o),A.process(o),o.isProcessing=!1,i&&t&&(a=!1,e(k))},_=()=>{i=!0,a=!0,o.isProcessing||e(k)};return{schedule:X1.reduce((L,P)=>{const V=f[P];return L[P]=(F,G=!1,Q=!1)=>(i||_(),V.schedule(F,G,Q)),L},{}),cancel:L=>{for(let P=0;P<X1.length;P++)f[X1[P]].cancel(L)},state:o,steps:f}}const{schedule:Ot,cancel:Fa,state:En,steps:px}=G8(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pi,!0);let Am;function KA(){Am=void 0}const Ni={now:()=>(Am===void 0&&Ni.set(En.isProcessing||bs.useManualTiming?En.timestamp:performance.now()),Am),set:e=>{Am=e,queueMicrotask(KA)}},q8=e=>t=>typeof t=="string"&&t.startsWith(e),Ev=q8("--"),QA=q8("var(--"),Mv=e=>QA(e)?JA.test(e.split("/*")[0].trim()):!1,JA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,bd={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},X0={...bd,transform:e=>_r(0,1,e)},K1={...bd,default:1},V0=e=>Math.round(e*1e5)/1e5,jv=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function eE(e){return e==null}const tE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ov=(e,t)=>i=>!!(typeof i=="string"&&tE.test(i)&&i.startsWith(e)||t&&!eE(i)&&Object.prototype.hasOwnProperty.call(i,t)),Y8=(e,t,i)=>a=>{if(typeof a!="string")return a;const[o,c,f,p]=a.match(jv);return{[e]:parseFloat(o),[t]:parseFloat(c),[i]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},nE=e=>_r(0,255,e),hx={...bd,transform:e=>Math.round(nE(e))},tc={test:Ov("rgb","red"),parse:Y8("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:a=1})=>"rgba("+hx.transform(e)+", "+hx.transform(t)+", "+hx.transform(i)+", "+V0(X0.transform(a))+")"};function iE(e){let t="",i="",a="",o="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),a=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),a=e.substring(3,4),o=e.substring(4,5),t+=t,i+=i,a+=a,o+=o),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const h3={test:Ov("#"),parse:iE,transform:tc.transform},up=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),jo=up("deg"),Hr=up("%"),Be=up("px"),aE=up("vh"),rE=up("vw"),L4={...Hr,parse:e=>Hr.parse(e)/100,transform:e=>Hr.transform(e*100)},Ku={test:Ov("hsl","hue"),parse:Y8("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:a=1})=>"hsla("+Math.round(e)+", "+Hr.transform(V0(t))+", "+Hr.transform(V0(i))+", "+V0(X0.transform(a))+")"},gn={test:e=>tc.test(e)||h3.test(e)||Ku.test(e),parse:e=>tc.test(e)?tc.parse(e):Ku.test(e)?Ku.parse(e):h3.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?tc.transform(e):Ku.transform(e),getAnimatableNone:e=>{const t=gn.parse(e);return t.alpha=0,gn.transform(t)}},sE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function oE(e){var t,i;return isNaN(e)&&typeof e=="string"&&(((t=e.match(jv))==null?void 0:t.length)||0)+(((i=e.match(sE))==null?void 0:i.length)||0)>0}const F8="number",W8="color",lE="var",cE="var(",k4="${}",uE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function K0(e){const t=e.toString(),i=[],a={color:[],number:[],var:[]},o=[];let c=0;const p=t.replace(uE,h=>(gn.test(h)?(a.color.push(c),o.push(W8),i.push(gn.parse(h))):h.startsWith(cE)?(a.var.push(c),o.push(lE),i.push(h)):(a.number.push(c),o.push(F8),i.push(parseFloat(h))),++c,k4)).split(k4);return{values:i,split:p,indexes:a,types:o}}function Z8(e){return K0(e).values}function X8(e){const{split:t,types:i}=K0(e),a=t.length;return o=>{let c="";for(let f=0;f<a;f++)if(c+=t[f],o[f]!==void 0){const p=i[f];p===F8?c+=V0(o[f]):p===W8?c+=gn.transform(o[f]):c+=o[f]}return c}}const dE=e=>typeof e=="number"?0:gn.test(e)?gn.getAnimatableNone(e):e;function fE(e){const t=Z8(e);return X8(e)(t.map(dE))}const ko={test:oE,parse:Z8,createTransformer:X8,getAnimatableNone:fE};function mx(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function pE({hue:e,saturation:t,lightness:i,alpha:a}){e/=360,t/=100,i/=100;let o=0,c=0,f=0;if(!t)o=c=f=i;else{const p=i<.5?i*(1+t):i+t-i*t,h=2*i-p;o=mx(h,p,e+1/3),c=mx(h,p,e),f=mx(h,p,e-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(f*255),alpha:a}}function $m(e,t){return i=>i>0?t:e}const Yt=(e,t,i)=>e+(t-e)*i,gx=(e,t,i)=>{const a=e*e,o=i*(t*t-a)+a;return o<0?0:Math.sqrt(o)},hE=[h3,tc,Ku],mE=e=>hE.find(t=>t.test(e));function D4(e){const t=mE(e);if(!t)return!1;let i=t.parse(e);return t===Ku&&(i=pE(i)),i}const z4=(e,t)=>{const i=D4(e),a=D4(t);if(!i||!a)return $m(e,t);const o={...i};return c=>(o.red=gx(i.red,a.red,c),o.green=gx(i.green,a.green,c),o.blue=gx(i.blue,a.blue,c),o.alpha=Yt(i.alpha,a.alpha,c),tc.transform(o))},m3=new Set(["none","hidden"]);function gE(e,t){return m3.has(e)?i=>i<=0?e:t:i=>i>=1?t:e}function xE(e,t){return i=>Yt(e,t,i)}function Rv(e){return typeof e=="number"?xE:typeof e=="string"?Mv(e)?$m:gn.test(e)?z4:wE:Array.isArray(e)?K8:typeof e=="object"?gn.test(e)?z4:vE:$m}function K8(e,t){const i=[...e],a=i.length,o=e.map((c,f)=>Rv(c)(c,t[f]));return c=>{for(let f=0;f<a;f++)i[f]=o[f](c);return i}}function vE(e,t){const i={...e,...t},a={};for(const o in i)e[o]!==void 0&&t[o]!==void 0&&(a[o]=Rv(e[o])(e[o],t[o]));return o=>{for(const c in a)i[c]=a[c](o);return i}}function yE(e,t){const i=[],a={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const c=t.types[o],f=e.indexes[c][a[c]],p=e.values[f]??0;i[o]=p,a[c]++}return i}const wE=(e,t)=>{const i=ko.createTransformer(t),a=K0(e),o=K0(t);return a.indexes.var.length===o.indexes.var.length&&a.indexes.color.length===o.indexes.color.length&&a.indexes.number.length>=o.indexes.number.length?m3.has(e)&&!o.values.length||m3.has(t)&&!a.values.length?gE(e,t):lp(K8(yE(a,o),o.values),i):$m(e,t)};function Q8(e,t,i){return typeof e=="number"&&typeof t=="number"&&typeof i=="number"?Yt(e,t,i):Rv(e)(e,t)}const bE=e=>{const t=({timestamp:i})=>e(i);return{start:(i=!0)=>Ot.update(t,i),stop:()=>Fa(t),now:()=>En.isProcessing?En.timestamp:Ni.now()}},J8=(e,t,i=10)=>{let a="";const o=Math.max(Math.round(t/i),2);for(let c=0;c<o;c++)a+=Math.round(e(c/(o-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Gm=2e4;function Lv(e){let t=0;const i=50;let a=e.next(t);for(;!a.done&&t<Gm;)t+=i,a=e.next(t);return t>=Gm?1/0:t}function SE(e,t=100,i){const a=i({...e,keyframes:[0,t]}),o=Math.min(Lv(a),Gm);return{type:"keyframes",ease:c=>a.next(o*c).value/t,duration:zr(o)}}const CE=5;function e7(e,t,i){const a=Math.max(t-CE,0);return Cv(i-e(a),t-a)}const Xt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},xx=.001;function TE({duration:e=Xt.duration,bounce:t=Xt.bounce,velocity:i=Xt.velocity,mass:a=Xt.mass}){let o,c,f=1-t;f=_r(Xt.minDamping,Xt.maxDamping,f),e=_r(Xt.minDuration,Xt.maxDuration,zr(e)),f<1?(o=x=>{const y=x*f,b=y*e,S=y-i,E=g3(x,f),A=Math.exp(-b);return xx-S/E*A},c=x=>{const b=x*f*e,S=b*i+i,E=Math.pow(f,2)*Math.pow(x,2)*e,A=Math.exp(-b),k=g3(Math.pow(x,2),f);return(-o(x)+xx>0?-1:1)*((S-E)*A)/k}):(o=x=>{const y=Math.exp(-x*e),b=(x-i)*e+1;return-xx+y*b},c=x=>{const y=Math.exp(-x*e),b=(i-x)*(e*e);return y*b});const p=5/e,h=EE(o,c,p);if(e=Dr(e),isNaN(h))return{stiffness:Xt.stiffness,damping:Xt.damping,duration:e};{const x=Math.pow(h,2)*a;return{stiffness:x,damping:f*2*Math.sqrt(a*x),duration:e}}}const AE=12;function EE(e,t,i){let a=i;for(let o=1;o<AE;o++)a=a-e(a)/t(a);return a}function g3(e,t){return e*Math.sqrt(1-t*t)}const ME=["duration","bounce"],jE=["stiffness","damping","mass"];function H4(e,t){return t.some(i=>e[i]!==void 0)}function OE(e){let t={velocity:Xt.velocity,stiffness:Xt.stiffness,damping:Xt.damping,mass:Xt.mass,isResolvedFromDuration:!1,...e};if(!H4(e,jE)&&H4(e,ME))if(e.visualDuration){const i=e.visualDuration,a=2*Math.PI/(i*1.2),o=a*a,c=2*_r(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:Xt.mass,stiffness:o,damping:c}}else{const i=TE(e);t={...t,...i,mass:Xt.mass},t.isResolvedFromDuration=!0}return t}function qm(e=Xt.visualDuration,t=Xt.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:a,restDelta:o}=i;const c=i.keyframes[0],f=i.keyframes[i.keyframes.length-1],p={done:!1,value:c},{stiffness:h,damping:x,mass:y,duration:b,velocity:S,isResolvedFromDuration:E}=OE({...i,velocity:-zr(i.velocity||0)}),A=S||0,k=x/(2*Math.sqrt(h*y)),_=f-c,R=zr(Math.sqrt(h/y)),O=Math.abs(_)<5;a||(a=O?Xt.restSpeed.granular:Xt.restSpeed.default),o||(o=O?Xt.restDelta.granular:Xt.restDelta.default);let L;if(k<1){const V=g3(R,k);L=F=>{const G=Math.exp(-k*R*F);return f-G*((A+k*R*_)/V*Math.sin(V*F)+_*Math.cos(V*F))}}else if(k===1)L=V=>f-Math.exp(-R*V)*(_+(A+R*_)*V);else{const V=R*Math.sqrt(k*k-1);L=F=>{const G=Math.exp(-k*R*F),Q=Math.min(V*F,300);return f-G*((A+k*R*_)*Math.sinh(Q)+V*_*Math.cosh(Q))/V}}const P={calculatedDuration:E&&b||null,next:V=>{const F=L(V);if(E)p.done=V>=b;else{let G=V===0?A:0;k<1&&(G=V===0?Dr(A):e7(L,V,F));const Q=Math.abs(G)<=a,ne=Math.abs(f-F)<=o;p.done=Q&&ne}return p.value=p.done?f:F,p},toString:()=>{const V=Math.min(Lv(P),Gm),F=J8(G=>P.next(V*G).value,V,30);return V+"ms "+F},toTransition:()=>{}};return P}qm.applyToOptions=e=>{const t=SE(e,100,qm);return e.ease=t.ease,e.duration=Dr(t.duration),e.type="keyframes",e};function x3({keyframes:e,velocity:t=0,power:i=.8,timeConstant:a=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:f,min:p,max:h,restDelta:x=.5,restSpeed:y}){const b=e[0],S={done:!1,value:b},E=Q=>p!==void 0&&Q<p||h!==void 0&&Q>h,A=Q=>p===void 0?h:h===void 0||Math.abs(p-Q)<Math.abs(h-Q)?p:h;let k=i*t;const _=b+k,R=f===void 0?_:f(_);R!==_&&(k=R-b);const O=Q=>-k*Math.exp(-Q/a),L=Q=>R+O(Q),P=Q=>{const ne=O(Q),se=L(Q);S.done=Math.abs(ne)<=x,S.value=S.done?R:se};let V,F;const G=Q=>{E(S.value)&&(V=Q,F=qm({keyframes:[S.value,A(S.value)],velocity:e7(L,Q,S.value),damping:o,stiffness:c,restDelta:x,restSpeed:y}))};return G(0),{calculatedDuration:null,next:Q=>{let ne=!1;return!F&&V===void 0&&(ne=!0,P(Q),G(Q)),V!==void 0&&Q>=V?F.next(Q-V):(!ne&&P(Q),S)}}}function RE(e,t,i){const a=[],o=i||bs.mix||Q8,c=e.length-1;for(let f=0;f<c;f++){let p=o(e[f],e[f+1]);if(t){const h=Array.isArray(t)?t[f]||Pi:t;p=lp(h,p)}a.push(p)}return a}function kv(e,t,{clamp:i=!0,ease:a,mixer:o}={}){const c=e.length;if(Z0(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const f=e[0]===e[1];e[0]>e[c-1]&&(e=[...e].reverse(),t=[...t].reverse());const p=RE(t,a,o),h=p.length,x=y=>{if(f&&y<e[0])return t[0];let b=0;if(h>1)for(;b<e.length-2&&!(y<e[b+1]);b++);const S=pd(e[b],e[b+1],y);return p[b](S)};return i?y=>x(_r(e[0],e[c-1],y)):x}function LE(e,t){const i=e[e.length-1];for(let a=1;a<=t;a++){const o=pd(0,t,a);e.push(Yt(i,1,o))}}function t7(e){const t=[0];return LE(t,e.length-1),t}function kE(e,t){return e.map(i=>i*t)}function DE(e,t){return e.map(()=>t||Um).splice(0,e.length-1)}function _0({duration:e=300,keyframes:t,times:i,ease:a="easeInOut"}){const o=YA(a)?a.map(R4):R4(a),c={done:!1,value:t[0]},f=kE(i&&i.length===t.length?i:t7(t),e),p=kv(f,t,{ease:Array.isArray(o)?o:DE(t,o)});return{calculatedDuration:e,next:h=>(c.value=p(h),c.done=h>=e,c)}}const zE=e=>e!==null;function Dv(e,{repeat:t,repeatType:i="loop"},a,o=1){const c=e.filter(zE),p=o<0||t&&i!=="loop"&&t%2===1?0:c.length-1;return!p||a===void 0?c[p]:a}const HE={decay:x3,inertia:x3,tween:_0,keyframes:_0,spring:qm};function n7(e){typeof e.type=="string"&&(e.type=HE[e.type])}class zv{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,i){return this.finished.then(t,i)}}const VE=e=>e/100;class Hv extends zv{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,o;const{motionValue:i}=this.options;i&&i.updatedAt!==Ni.now()&&this.tick(Ni.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(a=this.options).onStop)==null||o.call(a))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;n7(t);const{type:i=_0,repeat:a=0,repeatDelay:o=0,repeatType:c,velocity:f=0}=t;let{keyframes:p}=t;const h=i||_0;h!==_0&&typeof p[0]!="number"&&(this.mixKeyframes=lp(VE,Q8(p[0],p[1])),p=[0,100]);const x=h({...t,keyframes:p});c==="mirror"&&(this.mirroredGenerator=h({...t,keyframes:[...p].reverse(),velocity:-f})),x.calculatedDuration===null&&(x.calculatedDuration=Lv(x));const{calculatedDuration:y}=x;this.calculatedDuration=y,this.resolvedDuration=y+o,this.totalDuration=this.resolvedDuration*(a+1)-o,this.generator=x}updateTime(t){const i=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(t,i=!1){const{generator:a,totalDuration:o,mixKeyframes:c,mirroredGenerator:f,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return a.next(0);const{delay:x=0,keyframes:y,repeat:b,repeatType:S,repeatDelay:E,type:A,onUpdate:k,finalKeyframe:_}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),i?this.currentTime=t:this.updateTime(t);const R=this.currentTime-x*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?R<0:R>o;this.currentTime=Math.max(R,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let L=this.currentTime,P=a;if(b){const Q=Math.min(this.currentTime,o)/p;let ne=Math.floor(Q),se=Q%1;!se&&Q>=1&&(se=1),se===1&&ne--,ne=Math.min(ne,b+1),!!(ne%2)&&(S==="reverse"?(se=1-se,E&&(se-=E/p)):S==="mirror"&&(P=f)),L=_r(0,1,se)*p}const V=O?{done:!1,value:y[0]}:P.next(L);c&&(V.value=c(V.value));let{done:F}=V;!O&&h!==null&&(F=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const G=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return G&&A!==x3&&(V.value=Dv(y,this.options,_,this.speed)),k&&k(V.value),G&&this.finish(),V}then(t,i){return this.finished.then(t,i)}get duration(){return zr(this.calculatedDuration)}get time(){return zr(this.currentTime)}set time(t){var i;t=Dr(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(i=this.driver)==null||i.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Ni.now());const i=this.playbackSpeed!==t;this.playbackSpeed=t,i&&(this.time=zr(this.currentTime))}play(){var o,c;if(this.isStopped)return;const{driver:t=bE,startTime:i}=this.options;this.driver||(this.driver=t(f=>this.tick(f))),(c=(o=this.options).onPlay)==null||c.call(o);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ni.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(t=this.options).onComplete)==null||i.call(t)}cancel(){var t,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(t=this.options).onCancel)==null||i.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),t.observe(this)}}function _E(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const nc=e=>e*180/Math.PI,v3=e=>{const t=nc(Math.atan2(e[1],e[0]));return y3(t)},NE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:v3,rotateZ:v3,skewX:e=>nc(Math.atan(e[1])),skewY:e=>nc(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},y3=e=>(e=e%360,e<0&&(e+=360),e),V4=v3,_4=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),N4=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),PE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:_4,scaleY:N4,scale:e=>(_4(e)+N4(e))/2,rotateX:e=>y3(nc(Math.atan2(e[6],e[5]))),rotateY:e=>y3(nc(Math.atan2(-e[2],e[0]))),rotateZ:V4,rotate:V4,skewX:e=>nc(Math.atan(e[4])),skewY:e=>nc(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function w3(e){return e.includes("scale")?1:0}function b3(e,t){if(!e||e==="none")return w3(t);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,o;if(i)a=PE,o=i;else{const p=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=NE,o=p}if(!o)return w3(t);const c=a[t],f=o[1].split(",").map(IE);return typeof c=="function"?c(f):f[c]}const BE=(e,t)=>{const{transform:i="none"}=getComputedStyle(e);return b3(i,t)};function IE(e){return parseFloat(e.trim())}const Sd=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Cd=new Set(Sd),P4=e=>e===bd||e===Be,UE=new Set(["x","y","z"]),$E=Sd.filter(e=>!UE.has(e));function GE(e){const t=[];return $E.forEach(i=>{const a=e.getValue(i);a!==void 0&&(t.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),t}const ac={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>b3(t,"x"),y:(e,{transform:t})=>b3(t,"y")};ac.translateX=ac.x;ac.translateY=ac.y;const rc=new Set;let S3=!1,C3=!1,T3=!1;function i7(){if(C3){const e=Array.from(rc).filter(a=>a.needsMeasurement),t=new Set(e.map(a=>a.element)),i=new Map;t.forEach(a=>{const o=GE(a);o.length&&(i.set(a,o),a.render())}),e.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const o=i.get(a);o&&o.forEach(([c,f])=>{var p;(p=a.getValue(c))==null||p.set(f)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}C3=!1,S3=!1,rc.forEach(e=>e.complete(T3)),rc.clear()}function a7(){rc.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(C3=!0)})}function qE(){T3=!0,a7(),i7(),T3=!1}class Vv{constructor(t,i,a,o,c,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=i,this.name=a,this.motionValue=o,this.element=c,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(rc.add(this),S3||(S3=!0,Ot.read(a7),Ot.resolveKeyframes(i7))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:i,element:a,motionValue:o}=this;if(t[0]===null){const c=o==null?void 0:o.get(),f=t[t.length-1];if(c!==void 0)t[0]=c;else if(a&&i){const p=a.readValue(i,f);p!=null&&(t[0]=p)}t[0]===void 0&&(t[0]=f),o&&c===void 0&&o.set(t[0])}_E(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),rc.delete(this)}cancel(){this.state==="scheduled"&&(rc.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const YE=e=>e.startsWith("--");function FE(e,t,i){YE(t)?e.style.setProperty(t,i):e.style[t]=i}const r7=bv(()=>window.ScrollTimeline!==void 0),WE={};function ZE(e,t){const i=bv(e);return()=>WE[t]??i()}const s7=ZE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),D0=([e,t,i,a])=>`cubic-bezier(${e}, ${t}, ${i}, ${a})`,B4={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:D0([0,.65,.55,1]),circOut:D0([.55,0,1,.45]),backIn:D0([.31,.01,.66,-.59]),backOut:D0([.33,1.53,.69,.99])};function o7(e,t){if(e)return typeof e=="function"?s7()?J8(e,t):"ease-out":$8(e)?D0(e):Array.isArray(e)?e.map(i=>o7(i,t)||B4.easeOut):B4[e]}function XE(e,t,i,{delay:a=0,duration:o=300,repeat:c=0,repeatType:f="loop",ease:p="easeOut",times:h}={},x=void 0){const y={[t]:i};h&&(y.offset=h);const b=o7(p,o);Array.isArray(b)&&(y.easing=b);const S={delay:a,duration:o,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:c+1,direction:f==="reverse"?"alternate":"normal"};return x&&(S.pseudoElement=x),e.animate(y,S)}function l7(e){return typeof e=="function"&&"applyToOptions"in e}function KE({type:e,...t}){return l7(e)&&s7()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class QE extends zv{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:i,name:a,keyframes:o,pseudoElement:c,allowFlatten:f=!1,finalKeyframe:p,onComplete:h}=t;this.isPseudoElement=!!c,this.allowFlatten=f,this.options=t,Z0(typeof t.type!="string");const x=KE(t);this.animation=XE(i,a,o,x,c),x.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const y=Dv(o,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):FE(i,a,y),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,i;(i=(t=this.animation).finish)==null||i.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,i;this.isPseudoElement||(i=(t=this.animation).commitStyles)==null||i.call(t)}get duration(){var i,a;const t=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return zr(Number(t))}get time(){return zr(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Dr(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:i}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&r7()?(this.animation.timeline=t,Pi):i(this)}}const c7={anticipate:I8,backInOut:B8,circInOut:U8};function JE(e){return e in c7}function eM(e){typeof e.ease=="string"&&JE(e.ease)&&(e.ease=c7[e.ease])}const I4=10;class tM extends QE{constructor(t){eM(t),n7(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:i,onUpdate:a,onComplete:o,element:c,...f}=this.options;if(!i)return;if(t!==void 0){i.set(t);return}const p=new Hv({...f,autoplay:!1}),h=Dr(this.finishedTime??this.time);i.setWithVelocity(p.sample(h-I4).value,p.sample(h).value,I4),p.stop()}}const U4=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ko.test(e)||e==="0")&&!e.startsWith("url("));function nM(e){const t=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}function iM(e,t,i,a){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const c=e[e.length-1],f=U4(o,t),p=U4(c,t);return!f||!p?!1:nM(e)||(i==="spring"||l7(i))&&a}function A3(e){e.duration=0,e.type}const aM=new Set(["opacity","clipPath","filter","transform"]),rM=bv(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function sM(e){var y;const{motionValue:t,name:i,repeatDelay:a,repeatType:o,damping:c,type:f}=e;if(!(((y=t==null?void 0:t.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:x}=t.owner.getProps();return rM()&&i&&aM.has(i)&&(i!=="transform"||!x)&&!h&&!a&&o!=="mirror"&&c!==0&&f!=="inertia"}const oM=40;class lM extends zv{constructor({autoplay:t=!0,delay:i=0,type:a="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:f="loop",keyframes:p,name:h,motionValue:x,element:y,...b}){var A;super(),this.stop=()=>{var k,_;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(_=this.keyframeResolver)==null||_.cancel()},this.createdAt=Ni.now();const S={autoplay:t,delay:i,type:a,repeat:o,repeatDelay:c,repeatType:f,name:h,motionValue:x,element:y,...b},E=(y==null?void 0:y.KeyframeResolver)||Vv;this.keyframeResolver=new E(p,(k,_,R)=>this.onKeyframesResolved(k,_,S,!R),h,x,y),(A=this.keyframeResolver)==null||A.scheduleResolve()}onKeyframesResolved(t,i,a,o){this.keyframeResolver=void 0;const{name:c,type:f,velocity:p,delay:h,isHandoff:x,onUpdate:y}=a;this.resolvedAt=Ni.now(),iM(t,c,f,p)||((bs.instantAnimations||!h)&&(y==null||y(Dv(t,a,i))),t[0]=t[t.length-1],A3(a),a.repeat=0);const S={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>oM?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:t},E=!x&&sM(S)?new tM({...S,element:S.motionValue.owner.current}):new Hv(S);E.finished.then(()=>this.notifyFinished()).catch(Pi),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(t,i){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),qE()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const cM=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function uM(e){const t=cM.exec(e);if(!t)return[,];const[,i,a,o]=t;return[`--${i??a}`,o]}function u7(e,t,i=1){const[a,o]=uM(e);if(!a)return;const c=window.getComputedStyle(t).getPropertyValue(a);if(c){const f=c.trim();return z8(f)?parseFloat(f):f}return Mv(o)?u7(o,t,i+1):o}function _v(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const d7=new Set(["width","height","top","left","right","bottom",...Sd]),dM={test:e=>e==="auto",parse:e=>e},f7=e=>t=>t.test(e),p7=[bd,Be,Hr,jo,rE,aE,dM],$4=e=>p7.find(f7(e));function fM(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||V8(e):!0}const pM=new Set(["brightness","contrast","saturate","opacity"]);function hM(e){const[t,i]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=i.match(jv)||[];if(!a)return e;const o=i.replace(a,"");let c=pM.has(t)?1:0;return a!==i&&(c*=100),t+"("+c+o+")"}const mM=/\b([a-z-]*)\(.*?\)/gu,E3={...ko,getAnimatableNone:e=>{const t=e.match(mM);return t?t.map(hM).join(" "):e}},G4={...bd,transform:Math.round},gM={rotate:jo,rotateX:jo,rotateY:jo,rotateZ:jo,scale:K1,scaleX:K1,scaleY:K1,scaleZ:K1,skew:jo,skewX:jo,skewY:jo,distance:Be,translateX:Be,translateY:Be,translateZ:Be,x:Be,y:Be,z:Be,perspective:Be,transformPerspective:Be,opacity:X0,originX:L4,originY:L4,originZ:Be},Nv={borderWidth:Be,borderTopWidth:Be,borderRightWidth:Be,borderBottomWidth:Be,borderLeftWidth:Be,borderRadius:Be,radius:Be,borderTopLeftRadius:Be,borderTopRightRadius:Be,borderBottomRightRadius:Be,borderBottomLeftRadius:Be,width:Be,maxWidth:Be,height:Be,maxHeight:Be,top:Be,right:Be,bottom:Be,left:Be,padding:Be,paddingTop:Be,paddingRight:Be,paddingBottom:Be,paddingLeft:Be,margin:Be,marginTop:Be,marginRight:Be,marginBottom:Be,marginLeft:Be,backgroundPositionX:Be,backgroundPositionY:Be,...gM,zIndex:G4,fillOpacity:X0,strokeOpacity:X0,numOctaves:G4},xM={...Nv,color:gn,backgroundColor:gn,outlineColor:gn,fill:gn,stroke:gn,borderColor:gn,borderTopColor:gn,borderRightColor:gn,borderBottomColor:gn,borderLeftColor:gn,filter:E3,WebkitFilter:E3},h7=e=>xM[e];function m7(e,t){let i=h7(e);return i!==E3&&(i=ko),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const vM=new Set(["auto","none","0"]);function yM(e,t,i){let a=0,o;for(;a<e.length&&!o;){const c=e[a];typeof c=="string"&&!vM.has(c)&&K0(c).values.length&&(o=e[a]),a++}if(o&&i)for(const c of t)e[c]=m7(i,o)}class wM extends Vv{constructor(t,i,a,o,c){super(t,i,a,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let h=0;h<t.length;h++){let x=t[h];if(typeof x=="string"&&(x=x.trim(),Mv(x))){const y=u7(x,i.current);y!==void 0&&(t[h]=y),h===t.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!d7.has(a)||t.length!==2)return;const[o,c]=t,f=$4(o),p=$4(c);if(f!==p)if(P4(f)&&P4(p))for(let h=0;h<t.length;h++){const x=t[h];typeof x=="string"&&(t[h]=parseFloat(x))}else ac[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:i}=this,a=[];for(let o=0;o<t.length;o++)(t[o]===null||fM(t[o]))&&a.push(o);a.length&&yM(t,a,i)}measureInitialState(){const{element:t,unresolvedKeyframes:i,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ac[a](t.measureViewportBox(),window.getComputedStyle(t.current)),i[0]=this.measuredOrigin;const o=i[i.length-1];o!==void 0&&t.getValue(a,o).jump(o,!1)}measureEndState(){var p;const{element:t,name:i,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const o=t.getValue(i);o&&o.jump(this.measuredOrigin,!1);const c=a.length-1,f=a[c];a[c]=ac[i](t.measureViewportBox(),window.getComputedStyle(t.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([h,x])=>{t.getValue(h).set(x)}),this.resolveNoneKeyframes()}}function Pv(e,t,i){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const o=document.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const g7=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Bv(e){return H8(e)&&"offsetHeight"in e}const q4=30,bM=e=>!isNaN(parseFloat(e)),N0={current:void 0};class SM{constructor(t,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var c;const o=Ni.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=i.owner}setCurrent(t){this.current=t,this.updatedAt=Ni.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=bM(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new Sv);const a=this.events[t].add(i);return t==="change"?()=>{a(),Ot.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,i=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return N0.current&&N0.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Ni.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>q4)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,q4);return Cv(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,i;(t=this.dependents)==null||t.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ga(e,t){return new SM(e,t)}const{schedule:Iv}=G8(queueMicrotask,!1),$a={x:!1,y:!1};function x7(){return $a.x||$a.y}function CM(e){return e==="x"||e==="y"?$a[e]?null:($a[e]=!0,()=>{$a[e]=!1}):$a.x||$a.y?null:($a.x=$a.y=!0,()=>{$a.x=$a.y=!1})}function v7(e,t){const i=Pv(e),a=new AbortController,o={passive:!0,...t,signal:a.signal};return[i,o,()=>a.abort()]}function Y4(e){return!(e.pointerType==="touch"||x7())}function TM(e,t,i={}){const[a,o,c]=v7(e,i),f=p=>{if(!Y4(p))return;const{target:h}=p,x=t(h,p);if(typeof x!="function"||!h)return;const y=b=>{Y4(b)&&(x(b),h.removeEventListener("pointerleave",y))};h.addEventListener("pointerleave",y,o)};return a.forEach(p=>{p.addEventListener("pointerenter",f,o)}),c}const y7=(e,t)=>t?e===t?!0:y7(e,t.parentElement):!1,Uv=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,AM=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function EM(e){return AM.has(e.tagName)||e.tabIndex!==-1}const Em=new WeakSet;function F4(e){return t=>{t.key==="Enter"&&e(t)}}function vx(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const MM=(e,t)=>{const i=e.currentTarget;if(!i)return;const a=F4(()=>{if(Em.has(i))return;vx(i,"down");const o=F4(()=>{vx(i,"up")}),c=()=>vx(i,"cancel");i.addEventListener("keyup",o,t),i.addEventListener("blur",c,t)});i.addEventListener("keydown",a,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),t)};function W4(e){return Uv(e)&&!x7()}function jM(e,t,i={}){const[a,o,c]=v7(e,i),f=p=>{const h=p.currentTarget;if(!W4(p))return;Em.add(h);const x=t(h,p),y=(E,A)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),Em.has(h)&&Em.delete(h),W4(E)&&typeof x=="function"&&x(E,{success:A})},b=E=>{y(E,h===window||h===document||i.useGlobalTarget||y7(h,E.target))},S=E=>{y(E,!1)};window.addEventListener("pointerup",b,o),window.addEventListener("pointercancel",S,o)};return a.forEach(p=>{(i.useGlobalTarget?window:p).addEventListener("pointerdown",f,o),Bv(p)&&(p.addEventListener("focus",x=>MM(x,o)),!EM(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),c}function $v(e){return H8(e)&&"ownerSVGElement"in e}const Mm=new WeakMap;let Oo;const w7=(e,t,i)=>(a,o)=>o&&o[0]?o[0][e+"Size"]:$v(a)&&"getBBox"in a?a.getBBox()[t]:a[i],OM=w7("inline","width","offsetWidth"),RM=w7("block","height","offsetHeight");function LM({target:e,borderBoxSize:t}){var i;(i=Mm.get(e))==null||i.forEach(a=>{a(e,{get width(){return OM(e,t)},get height(){return RM(e,t)}})})}function kM(e){e.forEach(LM)}function DM(){typeof ResizeObserver>"u"||(Oo=new ResizeObserver(kM))}function zM(e,t){Oo||DM();const i=Pv(e);return i.forEach(a=>{let o=Mm.get(a);o||(o=new Set,Mm.set(a,o)),o.add(t),Oo==null||Oo.observe(a)}),()=>{i.forEach(a=>{const o=Mm.get(a);o==null||o.delete(t),o!=null&&o.size||Oo==null||Oo.unobserve(a)})}}const jm=new Set;let Qu;function HM(){Qu=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};jm.forEach(t=>t(e))},window.addEventListener("resize",Qu)}function VM(e){return jm.add(e),Qu||HM(),()=>{jm.delete(e),!jm.size&&typeof Qu=="function"&&(window.removeEventListener("resize",Qu),Qu=void 0)}}function _M(e,t){return typeof e=="function"?VM(e):zM(e,t)}function b7(e,t){let i;const a=()=>{const{currentTime:o}=t,f=(o===null?0:o.value)/100;i!==f&&e(f),i=f};return Ot.preUpdate(a,!0),()=>Fa(a)}function NM(e){return $v(e)&&e.tagName==="svg"}function PM(...e){const t=!Array.isArray(e[0]),i=t?0:-1,a=e[0+i],o=e[1+i],c=e[2+i],f=e[3+i],p=kv(o,c,f);return t?p(a):p}const ni=e=>!!(e&&e.getVelocity),BM=[...p7,gn,ko],IM=e=>BM.find(f7(e)),S2=N.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class UM extends N.Component{getSnapshotBeforeUpdate(t){const i=this.props.childRef.current;if(i&&t.isPresent&&!this.props.isPresent){const a=i.offsetParent,o=Bv(a)&&a.offsetWidth||0,c=this.props.sizeRef.current;c.height=i.offsetHeight||0,c.width=i.offsetWidth||0,c.top=i.offsetTop,c.left=i.offsetLeft,c.right=o-c.width-c.left}return null}componentDidUpdate(){}render(){return this.props.children}}function $M({children:e,isPresent:t,anchorX:i,root:a}){const o=N.useId(),c=N.useRef(null),f=N.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=N.useContext(S2);return N.useInsertionEffect(()=>{const{width:h,height:x,top:y,left:b,right:S}=f.current;if(t||!c.current||!h||!x)return;const E=i==="left"?`left: ${b}`:`right: ${S}`;c.current.dataset.motionPopId=o;const A=document.createElement("style");p&&(A.nonce=p);const k=a??document.head;return k.appendChild(A),A.sheet&&A.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${x}px !important;
            ${E}px !important;
            top: ${y}px !important;
          }
        `),()=>{k.contains(A)&&k.removeChild(A)}},[t]),m.jsx(UM,{isPresent:t,childRef:c,sizeRef:f,children:N.cloneElement(e,{ref:c})})}const GM=({children:e,initial:t,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:c,mode:f,anchorX:p,root:h})=>{const x=cc(qM),y=N.useId();let b=!0,S=N.useMemo(()=>(b=!1,{id:y,initial:t,isPresent:i,custom:o,onExitComplete:E=>{x.set(E,!0);for(const A of x.values())if(!A)return;a&&a()},register:E=>(x.set(E,!1),()=>x.delete(E))}),[i,x,a]);return c&&b&&(S={...S}),N.useMemo(()=>{x.forEach((E,A)=>x.set(A,!1))},[i]),N.useEffect(()=>{!i&&!x.size&&a&&a()},[i]),f==="popLayout"&&(e=m.jsx($M,{isPresent:i,anchorX:p,root:h,children:e})),m.jsx(b2.Provider,{value:S,children:e})};function qM(){return new Map}function S7(e=!0){const t=N.useContext(b2);if(t===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:o}=t,c=N.useId();N.useEffect(()=>{if(e)return o(c)},[e]);const f=N.useCallback(()=>e&&a&&a(c),[c,a,e]);return!i&&a?[!1,f]:[!0]}const Q1=e=>e.key||"";function Z4(e){const t=[];return N.Children.forEach(e,i=>{N.isValidElement(i)&&t.push(i)}),t}const Ym=({children:e,custom:t,initial:i=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:c="sync",propagate:f=!1,anchorX:p="left",root:h})=>{const[x,y]=S7(f),b=N.useMemo(()=>Z4(e),[e]),S=f&&!x?[]:b.map(Q1),E=N.useRef(!0),A=N.useRef(b),k=cc(()=>new Map),[_,R]=N.useState(b),[O,L]=N.useState(b);op(()=>{E.current=!1,A.current=b;for(let F=0;F<O.length;F++){const G=Q1(O[F]);S.includes(G)?k.delete(G):k.get(G)!==!0&&k.set(G,!1)}},[O,S.length,S.join("-")]);const P=[];if(b!==_){let F=[...b];for(let G=0;G<O.length;G++){const Q=O[G],ne=Q1(Q);S.includes(ne)||(F.splice(G,0,Q),P.push(Q))}return c==="wait"&&P.length&&(F=P),L(Z4(F)),R(b),null}const{forceRender:V}=N.useContext(xv);return m.jsx(m.Fragment,{children:O.map(F=>{const G=Q1(F),Q=f&&!x?!1:b===O||S.includes(G),ne=()=>{if(k.has(G))k.set(G,!0);else return;let se=!0;k.forEach(de=>{de||(se=!1)}),se&&(V==null||V(),L(A.current),f&&(y==null||y()),a&&a())};return m.jsx(GM,{isPresent:Q,initial:!E.current||i?void 0:!1,custom:t,presenceAffectsLayout:o,mode:c,root:h,onExitComplete:Q?void 0:ne,anchorX:p,children:F},G)})})},C7=N.createContext({strict:!1}),X4={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},hd={};for(const e in X4)hd[e]={isEnabled:t=>X4[e].some(i=>!!t[i])};function YM(e){for(const t in e)hd[t]={...hd[t],...e[t]}}const FM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Fm(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||FM.has(e)}let T7=e=>!Fm(e);function WM(e){typeof e=="function"&&(T7=t=>t.startsWith("on")?!Fm(t):e(t))}try{WM(require("@emotion/is-prop-valid").default)}catch{}function ZM(e,t,i){const a={};for(const o in e)o==="values"&&typeof e.values=="object"||(T7(o)||i===!0&&Fm(o)||!t&&!Fm(o)||e.draggable&&o.startsWith("onDrag"))&&(a[o]=e[o]);return a}const C2=N.createContext({});function T2(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Q0(e){return typeof e=="string"||Array.isArray(e)}const Gv=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],qv=["initial",...Gv];function A2(e){return T2(e.animate)||qv.some(t=>Q0(e[t]))}function A7(e){return!!(A2(e)||e.variants)}function XM(e,t){if(A2(e)){const{initial:i,animate:a}=e;return{initial:i===!1||Q0(i)?i:void 0,animate:Q0(a)?a:void 0}}return e.inherit!==!1?t:{}}function KM(e){const{initial:t,animate:i}=XM(e,N.useContext(C2));return N.useMemo(()=>({initial:t,animate:i}),[K4(t),K4(i)])}function K4(e){return Array.isArray(e)?e.join(" "):e}const J0={};function QM(e){for(const t in e)J0[t]=e[t],Ev(t)&&(J0[t].isCSSVariable=!0)}function E7(e,{layout:t,layoutId:i}){return Cd.has(e)||e.startsWith("origin")||(t||i!==void 0)&&(!!J0[e]||e==="opacity")}const JM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ej=Sd.length;function tj(e,t,i){let a="",o=!0;for(let c=0;c<ej;c++){const f=Sd[c],p=e[f];if(p===void 0)continue;let h=!0;if(typeof p=="number"?h=p===(f.startsWith("scale")?1:0):h=parseFloat(p)===0,!h||i){const x=g7(p,Nv[f]);if(!h){o=!1;const y=JM[f]||f;a+=`${y}(${x}) `}i&&(t[f]=x)}}return a=a.trim(),i?a=i(t,o?"":a):o&&(a="none"),a}function Yv(e,t,i){const{style:a,vars:o,transformOrigin:c}=e;let f=!1,p=!1;for(const h in t){const x=t[h];if(Cd.has(h)){f=!0;continue}else if(Ev(h)){o[h]=x;continue}else{const y=g7(x,Nv[h]);h.startsWith("origin")?(p=!0,c[h]=y):a[h]=y}}if(t.transform||(f||i?a.transform=tj(t,e.transform,i):a.transform&&(a.transform="none")),p){const{originX:h="50%",originY:x="50%",originZ:y=0}=c;a.transformOrigin=`${h} ${x} ${y}`}}const Fv=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function M7(e,t,i){for(const a in t)!ni(t[a])&&!E7(a,i)&&(e[a]=t[a])}function nj({transformTemplate:e},t){return N.useMemo(()=>{const i=Fv();return Yv(i,t,e),Object.assign({},i.vars,i.style)},[t])}function ij(e,t){const i=e.style||{},a={};return M7(a,i,e),Object.assign(a,nj(e,t)),a}function aj(e,t){const i={},a=ij(e,t);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=a,i}const rj={offset:"stroke-dashoffset",array:"stroke-dasharray"},sj={offset:"strokeDashoffset",array:"strokeDasharray"};function oj(e,t,i=1,a=0,o=!0){e.pathLength=1;const c=o?rj:sj;e[c.offset]=Be.transform(-a);const f=Be.transform(t),p=Be.transform(i);e[c.array]=`${f} ${p}`}function j7(e,{attrX:t,attrY:i,attrScale:a,pathLength:o,pathSpacing:c=1,pathOffset:f=0,...p},h,x,y){if(Yv(e,p,x),h){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:b,style:S}=e;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete b.transformBox),t!==void 0&&(b.x=t),i!==void 0&&(b.y=i),a!==void 0&&(b.scale=a),o!==void 0&&oj(b,o,c,f,!1)}const O7=()=>({...Fv(),attrs:{}}),R7=e=>typeof e=="string"&&e.toLowerCase()==="svg";function lj(e,t,i,a){const o=N.useMemo(()=>{const c=O7();return j7(c,t,R7(a),e.transformTemplate,e.style),{...c.attrs,style:{...c.style}}},[t]);if(e.style){const c={};M7(c,e.style,e),o.style={...c,...o.style}}return o}const cj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Wv(e){return typeof e!="string"||e.includes("-")?!1:!!(cj.indexOf(e)>-1||/[A-Z]/u.test(e))}function uj(e,t,i,{latestValues:a},o,c=!1){const p=(Wv(e)?lj:aj)(t,a,o,e),h=ZM(t,typeof e=="string",c),x=e!==N.Fragment?{...h,...p,ref:i}:{},{children:y}=t,b=N.useMemo(()=>ni(y)?y.get():y,[y]);return N.createElement(e,{...x,children:b})}function Q4(e){const t=[{},{}];return e==null||e.values.forEach((i,a)=>{t[0][a]=i.get(),t[1][a]=i.getVelocity()}),t}function Zv(e,t,i,a){if(typeof t=="function"){const[o,c]=Q4(a);t=t(i!==void 0?i:e.custom,o,c)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,c]=Q4(a);t=t(i!==void 0?i:e.custom,o,c)}return t}function Om(e){return ni(e)?e.get():e}function dj({scrapeMotionValuesFromProps:e,createRenderState:t},i,a,o){return{latestValues:fj(i,a,o,e),renderState:t()}}function fj(e,t,i,a){const o={},c=a(e,{});for(const S in c)o[S]=Om(c[S]);let{initial:f,animate:p}=e;const h=A2(e),x=A7(e);t&&x&&!h&&e.inherit!==!1&&(f===void 0&&(f=t.initial),p===void 0&&(p=t.animate));let y=i?i.initial===!1:!1;y=y||f===!1;const b=y?p:f;if(b&&typeof b!="boolean"&&!T2(b)){const S=Array.isArray(b)?b:[b];for(let E=0;E<S.length;E++){const A=Zv(e,S[E]);if(A){const{transitionEnd:k,transition:_,...R}=A;for(const O in R){let L=R[O];if(Array.isArray(L)){const P=y?L.length-1:0;L=L[P]}L!==null&&(o[O]=L)}for(const O in k)o[O]=k[O]}}}return o}const L7=e=>(t,i)=>{const a=N.useContext(C2),o=N.useContext(b2),c=()=>dj(e,t,a,o);return i?c():cc(c)};function Xv(e,t,i){var c;const{style:a}=e,o={};for(const f in a)(ni(a[f])||t.style&&ni(t.style[f])||E7(f,e)||((c=i==null?void 0:i.getValue(f))==null?void 0:c.liveStyle)!==void 0)&&(o[f]=a[f]);return o}const pj=L7({scrapeMotionValuesFromProps:Xv,createRenderState:Fv});function k7(e,t,i){const a=Xv(e,t,i);for(const o in e)if(ni(e[o])||ni(t[o])){const c=Sd.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;a[c]=e[o]}return a}const hj=L7({scrapeMotionValuesFromProps:k7,createRenderState:O7}),mj=Symbol.for("motionComponentSymbol");function Ju(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function gj(e,t,i){return N.useCallback(a=>{a&&e.onMount&&e.onMount(a),t&&(a?t.mount(a):t.unmount()),i&&(typeof i=="function"?i(a):Ju(i)&&(i.current=a))},[t])}const Kv=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),xj="framerAppearId",D7="data-"+Kv(xj),z7=N.createContext({});function vj(e,t,i,a,o){var k,_;const{visualElement:c}=N.useContext(C2),f=N.useContext(C7),p=N.useContext(b2),h=N.useContext(S2).reducedMotion,x=N.useRef(null);a=a||f.renderer,!x.current&&a&&(x.current=a(e,{visualState:t,parent:c,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:h}));const y=x.current,b=N.useContext(z7);y&&!y.projection&&o&&(y.type==="html"||y.type==="svg")&&yj(x.current,i,o,b);const S=N.useRef(!1);N.useInsertionEffect(()=>{y&&S.current&&y.update(i,p)});const E=i[D7],A=N.useRef(!!E&&!((k=window.MotionHandoffIsComplete)!=null&&k.call(window,E))&&((_=window.MotionHasOptimisedAnimation)==null?void 0:_.call(window,E)));return op(()=>{y&&(S.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),A.current&&y.animationState&&y.animationState.animateChanges())}),N.useEffect(()=>{y&&(!A.current&&y.animationState&&y.animationState.animateChanges(),A.current&&(queueMicrotask(()=>{var R;(R=window.MotionHandoffMarkAsComplete)==null||R.call(window,E)}),A.current=!1),y.enteringChildren=void 0)}),y}function yj(e,t,i,a){const{layoutId:o,layout:c,drag:f,dragConstraints:p,layoutScroll:h,layoutRoot:x,layoutCrossfade:y}=t;e.projection=new i(e.latestValues,t["data-framer-portal-id"]?void 0:H7(e.parent)),e.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!f||p&&Ju(p),visualElement:e,animationType:typeof c=="string"?c:"both",initialPromotionConfig:a,crossfade:y,layoutScroll:h,layoutRoot:x})}function H7(e){if(e)return e.options.allowProjection!==!1?e.projection:H7(e.parent)}function yx(e,{forwardMotionProps:t=!1}={},i,a){i&&YM(i);const o=Wv(e)?hj:pj;function c(p,h){let x;const y={...N.useContext(S2),...p,layoutId:wj(p)},{isStatic:b}=y,S=KM(p),E=o(p,b);if(!b&&vv){bj();const A=Sj(y);x=A.MeasureLayout,S.visualElement=vj(e,E,y,a,A.ProjectionNode)}return m.jsxs(C2.Provider,{value:S,children:[x&&S.visualElement?m.jsx(x,{visualElement:S.visualElement,...y}):null,uj(e,p,gj(E,S.visualElement,h),E,b,t)]})}c.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const f=N.forwardRef(c);return f[mj]=e,f}function wj({layoutId:e}){const t=N.useContext(xv).id;return t&&e!==void 0?t+"-"+e:e}function bj(e,t){N.useContext(C7).strict}function Sj(e){const{drag:t,layout:i}=hd;if(!t&&!i)return{};const a={...t,...i};return{MeasureLayout:t!=null&&t.isEnabled(e)||i!=null&&i.isEnabled(e)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function Cj(e,t){if(typeof Proxy>"u")return yx;const i=new Map,a=(c,f)=>yx(c,f,e,t),o=(c,f)=>a(c,f);return new Proxy(o,{get:(c,f)=>f==="create"?a:(i.has(f)||i.set(f,yx(f,void 0,e,t)),i.get(f))})}function V7({top:e,left:t,right:i,bottom:a}){return{x:{min:t,max:i},y:{min:e,max:a}}}function Tj({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Aj(e,t){if(!t)return e;const i=t({x:e.left,y:e.top}),a=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function wx(e){return e===void 0||e===1}function M3({scale:e,scaleX:t,scaleY:i}){return!wx(e)||!wx(t)||!wx(i)}function Jl(e){return M3(e)||_7(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function _7(e){return J4(e.x)||J4(e.y)}function J4(e){return e&&e!=="0%"}function Wm(e,t,i){const a=e-i,o=t*a;return i+o}function e5(e,t,i,a,o){return o!==void 0&&(e=Wm(e,o,a)),Wm(e,i,a)+t}function j3(e,t=0,i=1,a,o){e.min=e5(e.min,t,i,a,o),e.max=e5(e.max,t,i,a,o)}function N7(e,{x:t,y:i}){j3(e.x,t.translate,t.scale,t.originPoint),j3(e.y,i.translate,i.scale,i.originPoint)}const t5=.999999999999,n5=1.0000000000001;function Ej(e,t,i,a=!1){const o=i.length;if(!o)return;t.x=t.y=1;let c,f;for(let p=0;p<o;p++){c=i[p],f=c.projectionDelta;const{visualElement:h}=c.options;h&&h.props.style&&h.props.style.display==="contents"||(a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&td(e,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),f&&(t.x*=f.x.scale,t.y*=f.y.scale,N7(e,f)),a&&Jl(c.latestValues)&&td(e,c.latestValues))}t.x<n5&&t.x>t5&&(t.x=1),t.y<n5&&t.y>t5&&(t.y=1)}function ed(e,t){e.min=e.min+t,e.max=e.max+t}function i5(e,t,i,a,o=.5){const c=Yt(e.min,e.max,o);j3(e,t,i,c,a)}function td(e,t){i5(e.x,t.x,t.scaleX,t.scale,t.originX),i5(e.y,t.y,t.scaleY,t.scale,t.originY)}function P7(e,t){return V7(Aj(e.getBoundingClientRect(),t))}function Mj(e,t,i){const a=P7(e,i),{scroll:o}=t;return o&&(ed(a.x,o.offset.x),ed(a.y,o.offset.y)),a}const a5=()=>({translate:0,scale:1,origin:0,originPoint:0}),nd=()=>({x:a5(),y:a5()}),r5=()=>({min:0,max:0}),sn=()=>({x:r5(),y:r5()}),O3={current:null},B7={current:!1};function jj(){if(B7.current=!0,!!vv)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>O3.current=e.matches;e.addEventListener("change",t),t()}else O3.current=!1}const Oj=new WeakMap;function Rj(e,t,i){for(const a in t){const o=t[a],c=i[a];if(ni(o))e.addValue(a,o);else if(ni(c))e.addValue(a,Ga(o,{owner:e}));else if(c!==o)if(e.hasValue(a)){const f=e.getValue(a);f.liveStyle===!0?f.jump(o):f.hasAnimated||f.set(o)}else{const f=e.getStaticValue(a);e.addValue(a,Ga(f!==void 0?f:o,{owner:e}))}}for(const a in i)t[a]===void 0&&e.removeValue(a);return t}const s5=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Lj{scrapeMotionValuesFromProps(t,i,a){return{}}constructor({parent:t,props:i,presenceContext:a,reducedMotionConfig:o,blockInitialAnimation:c,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Vv,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Ni.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Ot.render(this.render,!1,!0))};const{latestValues:h,renderState:x}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=i.initial?{...h}:{},this.renderState=x,this.parent=t,this.props=i,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=p,this.blockInitialAnimation=!!c,this.isControllingVariants=A2(i),this.isVariantNode=A7(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const S in b){const E=b[S];h[S]!==void 0&&ni(E)&&E.set(h[S])}}mount(t){var i;this.current=t,Oj.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,o)=>this.bindToMotionValue(o,a)),B7.current||jj(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:O3.current,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Fa(this.notifyUpdate),Fa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,i){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=Cd.has(t);a&&this.onBindTransform&&this.onBindTransform();const o=i.on("change",f=>{this.latestValues[t]=f,this.props.onUpdate&&Ot.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,i)),this.valueSubscriptions.set(t,()=>{o(),c&&c(),i.owner&&i.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in hd){const i=hd[t];if(!i)continue;const{isEnabled:a,Feature:o}=i;if(!this.features[t]&&o&&a(this.props)&&(this.features[t]=new o(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):sn()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<s5.length;a++){const o=s5[a];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,f=t[c];f&&(this.propEventSubscriptions[o]=this.on(o,f))}this.prevMotionValues=Rj(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){const a=this.values.get(t);i!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,i),this.values.set(t,i),this.latestValues[t]=i.get())}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&i!==void 0&&(a=Ga(i===null?void 0:i,{owner:this}),this.addValue(t,a)),a}readValue(t,i){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(z8(a)||V8(a))?a=parseFloat(a):!IM(a)&&ko.test(i)&&(a=m7(t,i)),this.setBaseTarget(t,ni(a)?a.get():a)),ni(a)?a.get():a}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){var c;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const f=Zv(this.props,i,(c=this.presenceContext)==null?void 0:c.custom);f&&(a=f[t])}if(i&&a!==void 0)return a;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!ni(o)?o:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new Sv),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}scheduleRenderMicrotask(){Iv.render(this.render)}}class I7 extends Lj{constructor(){super(...arguments),this.KeyframeResolver=wM}sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){return t.style?t.style[i]:void 0}removeValueFromRenderState(t,{vars:i,style:a}){delete i[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ni(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function U7(e,{style:t,vars:i},a,o){const c=e.style;let f;for(f in t)c[f]=t[f];o==null||o.applyProjectionStyles(c,a);for(f in i)c.setProperty(f,i[f])}function kj(e){return window.getComputedStyle(e)}class Dj extends I7{constructor(){super(...arguments),this.type="html",this.renderInstance=U7}readValueFromInstance(t,i){var a;if(Cd.has(i))return(a=this.projection)!=null&&a.isProjecting?w3(i):BE(t,i);{const o=kj(t),c=(Ev(i)?o.getPropertyValue(i):o[i])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(t,{transformPagePoint:i}){return P7(t,i)}build(t,i,a){Yv(t,i,a.transformTemplate)}scrapeMotionValuesFromProps(t,i,a){return Xv(t,i,a)}}const $7=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function zj(e,t,i,a){U7(e,t,void 0,a);for(const o in t.attrs)e.setAttribute($7.has(o)?o:Kv(o),t.attrs[o])}class Hj extends I7{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=sn}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(Cd.has(i)){const a=h7(i);return a&&a.default||0}return i=$7.has(i)?i:Kv(i),t.getAttribute(i)}scrapeMotionValuesFromProps(t,i,a){return k7(t,i,a)}build(t,i,a){j7(t,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(t,i,a,o){zj(t,i,a,o)}mount(t){this.isSVGTag=R7(t.tagName),super.mount(t)}}const Vj=(e,t)=>Wv(e)?new Hj(t):new Dj(t,{allowProjection:e!==N.Fragment});function ad(e,t,i){const a=e.getProps();return Zv(a,t,i!==void 0?i:a.custom,e)}const R3=e=>Array.isArray(e);function _j(e,t,i){e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,Ga(i))}function Nj(e){return R3(e)?e[e.length-1]||0:e}function Qv(e,t){const i=ad(e,t);let{transitionEnd:a={},transition:o={},...c}=i||{};c={...c,...a};for(const f in c){const p=Nj(c[f]);_j(e,f,p)}}function Pj(e){return!!(ni(e)&&e.add)}function L3(e,t){const i=e.getValue("willChange");if(Pj(i))return i.add(t);if(!i&&bs.WillChange){const a=new bs.WillChange("auto");e.addValue("willChange",a),a.add(t)}}function G7(e){return e.props[D7]}const Bj=e=>e!==null;function Ij(e,{repeat:t,repeatType:i="loop"},a){const o=e.filter(Bj),c=t&&i!=="loop"&&t%2===1?0:o.length-1;return o[c]}const Uj={type:"spring",stiffness:500,damping:25,restSpeed:10},$j=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Gj={type:"keyframes",duration:.8},qj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Yj=(e,{keyframes:t})=>t.length>2?Gj:Cd.has(e)?e.startsWith("scale")?$j(t[1]):Uj:qj;function Fj({when:e,delay:t,delayChildren:i,staggerChildren:a,staggerDirection:o,repeat:c,repeatType:f,repeatDelay:p,from:h,elapsed:x,...y}){return!!Object.keys(y).length}const Jv=(e,t,i,a={},o,c)=>f=>{const p=_v(a,e)||{},h=p.delay||a.delay||0;let{elapsed:x=0}=a;x=x-Dr(h);const y={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...p,delay:-x,onUpdate:S=>{t.set(S),p.onUpdate&&p.onUpdate(S)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:e,motionValue:t,element:c?void 0:o};Fj(p)||Object.assign(y,Yj(e,y)),y.duration&&(y.duration=Dr(y.duration)),y.repeatDelay&&(y.repeatDelay=Dr(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(A3(y),y.delay===0&&(b=!0)),(bs.instantAnimations||bs.skipAnimations)&&(b=!0,A3(y),y.delay=0),y.allowFlatten=!p.type&&!p.ease,b&&!c&&t.get()!==void 0){const S=Ij(y.keyframes,p);if(S!==void 0){Ot.update(()=>{y.onUpdate(S),y.onComplete()});return}}return p.isSync?new Hv(y):new lM(y)};function Wj({protectedKeys:e,needsAnimating:t},i){const a=e.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,a}function q7(e,t,{delay:i=0,transitionOverride:a,type:o}={}){let{transition:c=e.getDefaultTransition(),transitionEnd:f,...p}=t;a&&(c=a);const h=[],x=o&&e.animationState&&e.animationState.getState()[o];for(const y in p){const b=e.getValue(y,e.latestValues[y]??null),S=p[y];if(S===void 0||x&&Wj(x,y))continue;const E={delay:i,..._v(c||{},y)},A=b.get();if(A!==void 0&&!b.isAnimating&&!Array.isArray(S)&&S===A&&!E.velocity)continue;let k=!1;if(window.MotionHandoffAnimation){const R=G7(e);if(R){const O=window.MotionHandoffAnimation(R,y,Ot);O!==null&&(E.startTime=O,k=!0)}}L3(e,y),b.start(Jv(y,b,S,e.shouldReduceMotion&&d7.has(y)?{type:!1}:E,e,k));const _=b.animation;_&&h.push(_)}return f&&Promise.all(h).then(()=>{Ot.update(()=>{f&&Qv(e,f)})}),h}function Y7(e,t,i,a=0,o=1){const c=Array.from(e).sort((x,y)=>x.sortNodePosition(y)).indexOf(t),f=e.size,p=(f-1)*a;return typeof i=="function"?i(c,f):o===1?c*a:p-c*a}function k3(e,t,i={}){var h;const a=ad(e,t,i.type==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(o=i.transitionOverride);const c=a?()=>Promise.all(q7(e,a,i)):()=>Promise.resolve(),f=e.variantChildren&&e.variantChildren.size?(x=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:S}=o;return Zj(e,t,x,y,b,S,i)}:()=>Promise.resolve(),{when:p}=o;if(p){const[x,y]=p==="beforeChildren"?[c,f]:[f,c];return x().then(()=>y())}else return Promise.all([c(),f(i.delay)])}function Zj(e,t,i=0,a=0,o=0,c=1,f){const p=[];for(const h of e.variantChildren)h.notify("AnimationStart",t),p.push(k3(h,t,{...f,delay:i+(typeof a=="function"?0:a)+Y7(e.variantChildren,h,a,o,c)}).then(()=>h.notify("AnimationComplete",t)));return Promise.all(p)}function F7(e,t,i={}){e.notify("AnimationStart",t);let a;if(Array.isArray(t)){const o=t.map(c=>k3(e,c,i));a=Promise.all(o)}else if(typeof t=="string")a=k3(e,t,i);else{const o=typeof t=="function"?ad(e,t,i.custom):t;a=Promise.all(q7(e,o,i))}return a.then(()=>{e.notify("AnimationComplete",t)})}function W7(e,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==e.length)return!1;for(let a=0;a<i;a++)if(t[a]!==e[a])return!1;return!0}const Xj=qv.length;function Z7(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?Z7(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const t={};for(let i=0;i<Xj;i++){const a=qv[i],o=e.props[a];(Q0(o)||o===!1)&&(t[a]=o)}return t}const Kj=[...Gv].reverse(),Qj=Gv.length;function Jj(e){return t=>Promise.all(t.map(({animation:i,options:a})=>F7(e,i,a)))}function eO(e){let t=Jj(e),i=o5(),a=!0;const o=h=>(x,y)=>{var S;const b=ad(e,y,h==="exit"?(S=e.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:E,transitionEnd:A,...k}=b;x={...x,...k,...A}}return x};function c(h){t=h(e)}function f(h){const{props:x}=e,y=Z7(e.parent)||{},b=[],S=new Set;let E={},A=1/0;for(let _=0;_<Qj;_++){const R=Kj[_],O=i[R],L=x[R]!==void 0?x[R]:y[R],P=Q0(L),V=R===h?O.isActive:null;V===!1&&(A=_);let F=L===y[R]&&L!==x[R]&&P;if(F&&a&&e.manuallyAnimateOnMount&&(F=!1),O.protectedKeys={...E},!O.isActive&&V===null||!L&&!O.prevProp||T2(L)||typeof L=="boolean")continue;const G=tO(O.prevProp,L);let Q=G||R===h&&O.isActive&&!F&&P||_>A&&P,ne=!1;const se=Array.isArray(L)?L:[L];let de=se.reduce(o(R),{});V===!1&&(de={});const{prevResolvedValues:ye={}}=O,Ee={...ye,...de},Oe=le=>{Q=!0,S.has(le)&&(ne=!0,S.delete(le)),O.needsAnimating[le]=!0;const ue=e.getValue(le);ue&&(ue.liveStyle=!1)};for(const le in Ee){const ue=de[le],xe=ye[le];if(E.hasOwnProperty(le))continue;let B=!1;R3(ue)&&R3(xe)?B=!W7(ue,xe):B=ue!==xe,B?ue!=null?Oe(le):S.add(le):ue!==void 0&&S.has(le)?Oe(le):O.protectedKeys[le]=!0}O.prevProp=L,O.prevResolvedValues=de,O.isActive&&(E={...E,...de}),a&&e.blockInitialAnimation&&(Q=!1);const Ae=F&&G;Q&&(!Ae||ne)&&b.push(...se.map(le=>{const ue={type:R};if(typeof le=="string"&&a&&!Ae&&e.manuallyAnimateOnMount&&e.parent){const{parent:xe}=e,B=ad(xe,le);if(xe.enteringChildren&&B){const{delayChildren:re}=B.transition||{};ue.delay=Y7(xe.enteringChildren,e,re)}}return{animation:le,options:ue}}))}if(S.size){const _={};if(typeof x.initial!="boolean"){const R=ad(e,Array.isArray(x.initial)?x.initial[0]:x.initial);R&&R.transition&&(_.transition=R.transition)}S.forEach(R=>{const O=e.getBaseTarget(R),L=e.getValue(R);L&&(L.liveStyle=!0),_[R]=O??null}),b.push({animation:_})}let k=!!b.length;return a&&(x.initial===!1||x.initial===x.animate)&&!e.manuallyAnimateOnMount&&(k=!1),a=!1,k?t(b):Promise.resolve()}function p(h,x){var b;if(i[h].isActive===x)return Promise.resolve();(b=e.variantChildren)==null||b.forEach(S=>{var E;return(E=S.animationState)==null?void 0:E.setActive(h,x)}),i[h].isActive=x;const y=f(h);for(const S in i)i[S].protectedKeys={};return y}return{animateChanges:f,setActive:p,setAnimateFunction:c,getState:()=>i,reset:()=>{i=o5(),a=!0}}}function tO(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!W7(t,e):!1}function Ql(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function o5(){return{animate:Ql(!0),whileInView:Ql(),whileHover:Ql(),whileTap:Ql(),whileDrag:Ql(),whileFocus:Ql(),exit:Ql()}}class zo{constructor(t){this.isMounted=!1,this.node=t}update(){}}class nO extends zo{constructor(t){super(t),t.animationState||(t.animationState=eO(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();T2(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let iO=0;class aO extends zo{constructor(){super(...arguments),this.id=iO++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const o=this.node.animationState.setActive("exit",!t);i&&!t&&o.then(()=>{i(this.id)})}mount(){const{register:t,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const rO={animation:{Feature:nO},exit:{Feature:aO}};function ep(e,t,i,a={passive:!0}){return e.addEventListener(t,i,a),()=>e.removeEventListener(t,i)}function dp(e){return{point:{x:e.pageX,y:e.pageY}}}const sO=e=>t=>Uv(t)&&e(t,dp(t));function P0(e,t,i,a){return ep(e,t,sO(i),a)}const X7=1e-4,oO=1-X7,lO=1+X7,K7=.01,cO=0-K7,uO=0+K7;function wi(e){return e.max-e.min}function dO(e,t,i){return Math.abs(e-t)<=i}function l5(e,t,i,a=.5){e.origin=a,e.originPoint=Yt(t.min,t.max,e.origin),e.scale=wi(i)/wi(t),e.translate=Yt(i.min,i.max,e.origin)-e.originPoint,(e.scale>=oO&&e.scale<=lO||isNaN(e.scale))&&(e.scale=1),(e.translate>=cO&&e.translate<=uO||isNaN(e.translate))&&(e.translate=0)}function B0(e,t,i,a){l5(e.x,t.x,i.x,a?a.originX:void 0),l5(e.y,t.y,i.y,a?a.originY:void 0)}function c5(e,t,i){e.min=i.min+t.min,e.max=e.min+wi(t)}function fO(e,t,i){c5(e.x,t.x,i.x),c5(e.y,t.y,i.y)}function u5(e,t,i){e.min=t.min-i.min,e.max=e.min+wi(t)}function I0(e,t,i){u5(e.x,t.x,i.x),u5(e.y,t.y,i.y)}function va(e){return[e("x"),e("y")]}const Q7=({current:e})=>e?e.ownerDocument.defaultView:null,d5=(e,t)=>Math.abs(e-t);function pO(e,t){const i=d5(e.x,t.x),a=d5(e.y,t.y);return Math.sqrt(i**2+a**2)}class J7{constructor(t,i,{transformPagePoint:a,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Sx(this.lastMoveEventInfo,this.history),E=this.startEvent!==null,A=pO(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!E&&!A)return;const{point:k}=S,{timestamp:_}=En;this.history.push({...k,timestamp:_});const{onStart:R,onMove:O}=this.handlers;E||(R&&R(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,S)},this.handlePointerMove=(S,E)=>{this.lastMoveEvent=S,this.lastMoveEventInfo=bx(E,this.transformPagePoint),Ot.update(this.updatePoint,!0)},this.handlePointerUp=(S,E)=>{this.end();const{onEnd:A,onSessionEnd:k,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=Sx(S.type==="pointercancel"?this.lastMoveEventInfo:bx(E,this.transformPagePoint),this.history);this.startEvent&&A&&A(S,R),k&&k(S,R)},!Uv(t))return;this.dragSnapToOrigin=c,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=f,this.contextWindow=o||window;const p=dp(t),h=bx(p,this.transformPagePoint),{point:x}=h,{timestamp:y}=En;this.history=[{...x,timestamp:y}];const{onSessionStart:b}=i;b&&b(t,Sx(h,this.history)),this.removeListeners=lp(P0(this.contextWindow,"pointermove",this.handlePointerMove),P0(this.contextWindow,"pointerup",this.handlePointerUp),P0(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Fa(this.updatePoint)}}function bx(e,t){return t?{point:t(e.point)}:e}function f5(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Sx({point:e},t){return{point:e,delta:f5(e,eb(t)),offset:f5(e,hO(t)),velocity:mO(t,.1)}}function hO(e){return e[0]}function eb(e){return e[e.length-1]}function mO(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,a=null;const o=eb(e);for(;i>=0&&(a=e[i],!(o.timestamp-a.timestamp>Dr(t)));)i--;if(!a)return{x:0,y:0};const c=zr(o.timestamp-a.timestamp);if(c===0)return{x:0,y:0};const f={x:(o.x-a.x)/c,y:(o.y-a.y)/c};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function gO(e,{min:t,max:i},a){return t!==void 0&&e<t?e=a?Yt(t,e,a.min):Math.max(e,t):i!==void 0&&e>i&&(e=a?Yt(i,e,a.max):Math.min(e,i)),e}function p5(e,t,i){return{min:t!==void 0?e.min+t:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function xO(e,{top:t,left:i,bottom:a,right:o}){return{x:p5(e.x,i,o),y:p5(e.y,t,a)}}function h5(e,t){let i=t.min-e.min,a=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,a]=[a,i]),{min:i,max:a}}function vO(e,t){return{x:h5(e.x,t.x),y:h5(e.y,t.y)}}function yO(e,t){let i=.5;const a=wi(e),o=wi(t);return o>a?i=pd(t.min,t.max-a,e.min):a>o&&(i=pd(e.min,e.max-o,t.min)),_r(0,1,i)}function wO(e,t){const i={};return t.min!==void 0&&(i.min=t.min-e.min),t.max!==void 0&&(i.max=t.max-e.min),i}const D3=.35;function bO(e=D3){return e===!1?e=0:e===!0&&(e=D3),{x:m5(e,"left","right"),y:m5(e,"top","bottom")}}function m5(e,t,i){return{min:g5(e,t),max:g5(e,i)}}function g5(e,t){return typeof e=="number"?e:e[t]||0}const SO=new WeakMap;class CO{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=sn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=b=>{const{dragSnapToOrigin:S}=this.getProps();S?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(dp(b).point)},f=(b,S)=>{const{drag:E,dragPropagation:A,onDragStart:k}=this.getProps();if(E&&!A&&(this.openDragLock&&this.openDragLock(),this.openDragLock=CM(E),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),va(R=>{let O=this.getAxisMotionValue(R).get()||0;if(Hr.test(O)){const{projection:L}=this.visualElement;if(L&&L.layout){const P=L.layout.layoutBox[R];P&&(O=wi(P)*(parseFloat(O)/100))}}this.originPoint[R]=O}),k&&Ot.postRender(()=>k(b,S)),L3(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},p=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:E,dragDirectionLock:A,onDirectionLock:k,onDrag:_}=this.getProps();if(!E&&!this.openDragLock)return;const{offset:R}=S;if(A&&this.currentDirection===null){this.currentDirection=TO(R),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",S.point,R),this.updateAxis("y",S.point,R),this.visualElement.render(),_&&_(b,S)},h=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},x=()=>va(b=>{var S;return this.getAnimationState(b)==="paused"&&((S=this.getAxisMotionValue(b).animation)==null?void 0:S.play())}),{dragSnapToOrigin:y}=this.getProps();this.panSession=new J7(t,{onSessionStart:c,onStart:f,onMove:p,onSessionEnd:h,resumeAnimation:x},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:a,contextWindow:Q7(this.visualElement)})}stop(t,i){const a=t||this.latestPointerEvent,o=i||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!a)return;const{velocity:f}=o;this.startAnimation(f);const{onDragEnd:p}=this.getProps();p&&Ot.postRender(()=>p(a,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(t,i,a){const{drag:o}=this.getProps();if(!a||!J1(t,o,this.currentDirection))return;const c=this.getAxisMotionValue(t);let f=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(f=gO(f,this.constraints[t],this.elastic[t])),c.set(f)}resolveConstraints(){var c;const{dragConstraints:t,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(c=this.visualElement.projection)==null?void 0:c.layout,o=this.constraints;t&&Ju(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=xO(a.layoutBox,t):this.constraints=!1,this.elastic=bO(i),o!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&va(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=wO(a.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!Ju(t))return!1;const a=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const c=Mj(a,o.root,this.visualElement.getTransformPagePoint());let f=vO(o.layout.layoutBox,c);if(i){const p=i(Tj(f));this.hasMutatedConstraints=!!p,p&&(f=V7(p))}return f}startAnimation(t){const{drag:i,dragMomentum:a,dragElastic:o,dragTransition:c,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},x=va(y=>{if(!J1(y,i,this.currentDirection))return;let b=h&&h[y]||{};f&&(b={min:0,max:0});const S=o?200:1e6,E=o?40:1e7,A={type:"inertia",velocity:a?t[y]:0,bounceStiffness:S,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...c,...b};return this.startAxisValueAnimation(y,A)});return Promise.all(x).then(p)}startAxisValueAnimation(t,i){const a=this.getAxisMotionValue(t);return L3(this.visualElement,t),a.start(Jv(t,a,0,i,this.visualElement,!1))}stopAnimation(){va(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){va(t=>{var i;return(i=this.getAxisMotionValue(t).animation)==null?void 0:i.pause()})}getAnimationState(t){var i;return(i=this.getAxisMotionValue(t).animation)==null?void 0:i.state}getAxisMotionValue(t){const i=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),o=a[i];return o||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){va(i=>{const{drag:a}=this.getProps();if(!J1(i,a,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(i);if(o&&o.layout){const{min:f,max:p}=o.layout.layoutBox[i];c.set(t[i]-Yt(f,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!Ju(i)||!a||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};va(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const h=p.get();o[f]=yO({min:h,max:h},this.constraints[f])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),va(f=>{if(!J1(f,t,null))return;const p=this.getAxisMotionValue(f),{min:h,max:x}=this.constraints[f];p.set(Yt(h,x,o[f]))})}addListeners(){if(!this.visualElement.current)return;SO.set(this.visualElement,this);const t=this.visualElement.current,i=P0(t,"pointerdown",h=>{const{drag:x,dragListener:y=!0}=this.getProps();x&&y&&this.start(h)}),a=()=>{const{dragConstraints:h}=this.getProps();Ju(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,c=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ot.read(a);const f=ep(window,"resize",()=>this.scalePositionWithinConstraints()),p=o.addEventListener("didUpdate",({delta:h,hasLayoutChanged:x})=>{this.isDragging&&x&&(va(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=h[y].translate,b.set(b.get()+h[y].translate))}),this.visualElement.render())});return()=>{f(),i(),c(),p&&p()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:f=D3,dragMomentum:p=!0}=t;return{...t,drag:i,dragDirectionLock:a,dragPropagation:o,dragConstraints:c,dragElastic:f,dragMomentum:p}}}function J1(e,t,i){return(t===!0||t===e)&&(i===null||i===e)}function TO(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}class AO extends zo{constructor(t){super(t),this.removeGroupControls=Pi,this.removeListeners=Pi,this.controls=new CO(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pi}unmount(){this.removeGroupControls(),this.removeListeners()}}const x5=e=>(t,i)=>{e&&Ot.postRender(()=>e(t,i))};class EO extends zo{constructor(){super(...arguments),this.removePointerDownListener=Pi}onPointerDown(t){this.session=new J7(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Q7(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:a,onPanEnd:o}=this.node.getProps();return{onSessionStart:x5(t),onStart:x5(i),onMove:a,onEnd:(c,f)=>{delete this.session,o&&Ot.postRender(()=>o(c,f))}}}mount(){this.removePointerDownListener=P0(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Rm={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function v5(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const M0={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(Be.test(e))e=parseFloat(e);else return e;const i=v5(e,t.target.x),a=v5(e,t.target.y);return`${i}% ${a}%`}},MO={correct:(e,{treeScale:t,projectionDelta:i})=>{const a=e,o=ko.parse(e);if(o.length>5)return a;const c=ko.createTransformer(e),f=typeof o[0]!="number"?1:0,p=i.x.scale*t.x,h=i.y.scale*t.y;o[0+f]/=p,o[1+f]/=h;const x=Yt(p,h,.5);return typeof o[2+f]=="number"&&(o[2+f]/=x),typeof o[3+f]=="number"&&(o[3+f]/=x),c(o)}};let Cx=!1;class jO extends N.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:a,layoutId:o}=this.props,{projection:c}=t;QM(OO),c&&(i.group&&i.group.add(c),a&&a.register&&o&&a.register(c),Cx&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),Rm.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:a,drag:o,isPresent:c}=this.props,{projection:f}=a;return f&&(f.isPresent=c,Cx=!0,o||t.layoutDependency!==i||i===void 0||t.isPresent!==c?f.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?f.promote():f.relegate()||Ot.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Iv.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:o}=t;Cx=!0,o&&(o.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(o),a&&a.deregister&&a.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function tb(e){const[t,i]=S7(),a=N.useContext(xv);return m.jsx(jO,{...e,layoutGroup:a,switchLayoutGroup:N.useContext(z7),isPresent:t,safeToRemove:i})}const OO={borderRadius:{...M0,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:M0,borderTopRightRadius:M0,borderBottomLeftRadius:M0,borderBottomRightRadius:M0,boxShadow:MO};function RO(e,t,i){const a=ni(e)?e:Ga(e);return a.start(Jv("",a,t,i)),a.animation}const LO=(e,t)=>e.depth-t.depth;class kO{constructor(){this.children=[],this.isDirty=!1}add(t){yv(this.children,t),this.isDirty=!0}remove(t){wv(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(LO),this.isDirty=!1,this.children.forEach(t)}}function ey(e,t){const i=Ni.now(),a=({timestamp:o})=>{const c=o-i;c>=t&&(Fa(a),e(c-t))};return Ot.setup(a,!0),()=>Fa(a)}const nb=["TopLeft","TopRight","BottomLeft","BottomRight"],DO=nb.length,y5=e=>typeof e=="string"?parseFloat(e):e,w5=e=>typeof e=="number"||Be.test(e);function zO(e,t,i,a,o,c){o?(e.opacity=Yt(0,i.opacity??1,HO(a)),e.opacityExit=Yt(t.opacity??1,0,VO(a))):c&&(e.opacity=Yt(t.opacity??1,i.opacity??1,a));for(let f=0;f<DO;f++){const p=`border${nb[f]}Radius`;let h=b5(t,p),x=b5(i,p);if(h===void 0&&x===void 0)continue;h||(h=0),x||(x=0),h===0||x===0||w5(h)===w5(x)?(e[p]=Math.max(Yt(y5(h),y5(x),a),0),(Hr.test(x)||Hr.test(h))&&(e[p]+="%")):e[p]=x}(t.rotate||i.rotate)&&(e.rotate=Yt(t.rotate||0,i.rotate||0,a))}function b5(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const HO=ib(0,.5,Im),VO=ib(.5,.95,Pi);function ib(e,t,i){return a=>a<e?0:a>t?1:i(pd(e,t,a))}function S5(e,t){e.min=t.min,e.max=t.max}function xa(e,t){S5(e.x,t.x),S5(e.y,t.y)}function C5(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function T5(e,t,i,a,o){return e-=t,e=Wm(e,1/i,a),o!==void 0&&(e=Wm(e,1/o,a)),e}function _O(e,t=0,i=1,a=.5,o,c=e,f=e){if(Hr.test(t)&&(t=parseFloat(t),t=Yt(f.min,f.max,t/100)-f.min),typeof t!="number")return;let p=Yt(c.min,c.max,a);e===c&&(p-=t),e.min=T5(e.min,t,i,p,o),e.max=T5(e.max,t,i,p,o)}function A5(e,t,[i,a,o],c,f){_O(e,t[i],t[a],t[o],t.scale,c,f)}const NO=["x","scaleX","originX"],PO=["y","scaleY","originY"];function E5(e,t,i,a){A5(e.x,t,NO,i?i.x:void 0,a?a.x:void 0),A5(e.y,t,PO,i?i.y:void 0,a?a.y:void 0)}function M5(e){return e.translate===0&&e.scale===1}function ab(e){return M5(e.x)&&M5(e.y)}function j5(e,t){return e.min===t.min&&e.max===t.max}function BO(e,t){return j5(e.x,t.x)&&j5(e.y,t.y)}function O5(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function rb(e,t){return O5(e.x,t.x)&&O5(e.y,t.y)}function R5(e){return wi(e.x)/wi(e.y)}function L5(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class IO{constructor(){this.members=[]}add(t){yv(this.members,t),t.scheduleRender()}remove(t){if(wv(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){const i=this.members.findIndex(o=>t===o);if(i===0)return!1;let a;for(let o=i;o>=0;o--){const c=this.members[o];if(c.isPresent!==!1){a=c;break}}return a?(this.promote(a),!0):!1}promote(t,i){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,i&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:i,resumingFrom:a}=t;i.onExitComplete&&i.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function UO(e,t,i){let a="";const o=e.x.translate/t.x,c=e.y.translate/t.y,f=(i==null?void 0:i.z)||0;if((o||c||f)&&(a=`translate3d(${o}px, ${c}px, ${f}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),i){const{transformPerspective:x,rotate:y,rotateX:b,rotateY:S,skewX:E,skewY:A}=i;x&&(a=`perspective(${x}px) ${a}`),y&&(a+=`rotate(${y}deg) `),b&&(a+=`rotateX(${b}deg) `),S&&(a+=`rotateY(${S}deg) `),E&&(a+=`skewX(${E}deg) `),A&&(a+=`skewY(${A}deg) `)}const p=e.x.scale*t.x,h=e.y.scale*t.y;return(p!==1||h!==1)&&(a+=`scale(${p}, ${h})`),a||"none"}const Tx=["","X","Y","Z"],$O=1e3;let GO=0;function Ax(e,t,i,a){const{latestValues:o}=t;o[e]&&(i[e]=o[e],t.setStaticValue(e,0),a&&(a[e]=0))}function sb(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const i=G7(t);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:o,layoutId:c}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",Ot,!(o||c))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&sb(a)}function ob({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:a,resetTransform:o}){return class{constructor(f={},p=t==null?void 0:t()){this.id=GO++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(FO),this.nodes.forEach(KO),this.nodes.forEach(QO),this.nodes.forEach(WO)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new kO)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Sv),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const h=this.eventHandlers.get(f);h&&h.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=$v(f)&&!NM(f),this.instance=f;const{layoutId:p,layout:h,visualElement:x}=this.options;if(x&&!x.current&&x.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||p)&&(this.isLayoutDirty=!0),e){let y,b=0;const S=()=>this.root.updateBlockedByResize=!1;Ot.read(()=>{b=window.innerWidth}),e(f,()=>{const E=window.innerWidth;E!==b&&(b=E,this.root.updateBlockedByResize=!0,y&&y(),y=ey(S,250),Rm.hasAnimatedSinceResize&&(Rm.hasAnimatedSinceResize=!1,this.nodes.forEach(z5)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&x&&(p||h)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||x.getDefaultTransition()||iR,{onLayoutAnimationStart:k,onLayoutAnimationComplete:_}=x.getProps(),R=!this.targetLayout||!rb(this.targetLayout,E),O=!b&&S;if(this.options.layoutRoot||this.resumeFrom||O||b&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={..._v(A,"layout"),onPlay:k,onComplete:_};(x.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(y,O)}else b||z5(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Fa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(JO),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&sb(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const x=this.getTransformTemplate();this.prevTransformTemplateValue=x?x(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(k5);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(D5);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(XO),this.nodes.forEach(qO),this.nodes.forEach(YO)):this.nodes.forEach(D5),this.clearAllSnapshots();const p=Ni.now();En.delta=_r(0,1e3/60,p-En.timestamp),En.timestamp=p,En.isProcessing=!0,px.update.process(En),px.preRender.process(En),px.render.process(En),En.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Iv.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ZO),this.sharedNodes.forEach(eR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ot.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ot.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!wi(this.snapshot.measuredBox.x)&&!wi(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=sn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p&&this.instance){const h=a(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:h,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!o)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!ab(this.projectionDelta),h=this.getTransformTemplate(),x=h?h(this.latestValues,""):void 0,y=x!==this.prevTransformTemplateValue;f&&this.instance&&(p||Jl(this.latestValues)||y)&&(o(this.instance,x),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return f&&(h=this.removeTransform(h)),aR(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var x;const{visualElement:f}=this.options;if(!f)return sn();const p=f.measureViewportBox();if(!(((x=this.scroll)==null?void 0:x.wasRoot)||this.path.some(rR))){const{scroll:y}=this.root;y&&(ed(p.x,y.offset.x),ed(p.y,y.offset.y))}return p}removeElementScroll(f){var h;const p=sn();if(xa(p,f),(h=this.scroll)!=null&&h.wasRoot)return p;for(let x=0;x<this.path.length;x++){const y=this.path[x],{scroll:b,options:S}=y;y!==this.root&&b&&S.layoutScroll&&(b.wasRoot&&xa(p,f),ed(p.x,b.offset.x),ed(p.y,b.offset.y))}return p}applyTransform(f,p=!1){const h=sn();xa(h,f);for(let x=0;x<this.path.length;x++){const y=this.path[x];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&td(h,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Jl(y.latestValues)&&td(h,y.latestValues)}return Jl(this.latestValues)&&td(h,this.latestValues),h}removeTransform(f){const p=sn();xa(p,f);for(let h=0;h<this.path.length;h++){const x=this.path[h];if(!x.instance||!Jl(x.latestValues))continue;M3(x.latestValues)&&x.updateSnapshot();const y=sn(),b=x.measurePageBox();xa(y,b),E5(p,x.latestValues,x.snapshot?x.snapshot.layoutBox:void 0,y)}return Jl(this.latestValues)&&E5(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==En.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var S;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(f||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!(!this.layout||!(y||b))){if(this.resolvedRelativeTargetAt=En.timestamp,!this.targetDelta&&!this.relativeTarget){const E=this.getClosestProjectingParent();E&&E.layout&&this.animationProgress!==1?(this.relativeParent=E,this.forceRelativeParentToResolveTarget(),this.relativeTarget=sn(),this.relativeTargetOrigin=sn(),I0(this.relativeTargetOrigin,this.layout.layoutBox,E.layout.layoutBox),xa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=sn(),this.targetWithTransforms=sn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),fO(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):xa(this.target,this.layout.layoutBox),N7(this.target,this.targetDelta)):xa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const E=this.getClosestProjectingParent();E&&!!E.resumingFrom==!!this.resumingFrom&&!E.options.layoutScroll&&E.target&&this.animationProgress!==1?(this.relativeParent=E,this.forceRelativeParentToResolveTarget(),this.relativeTarget=sn(),this.relativeTargetOrigin=sn(),I0(this.relativeTargetOrigin,this.target,E.target),xa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||M3(this.parent.latestValues)||_7(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var A;const f=this.getLead(),p=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||(A=this.parent)!=null&&A.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===En.timestamp&&(h=!1),h)return;const{layout:x,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(x||y))return;xa(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;Ej(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=sn());const{target:E}=f;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(C5(this.prevProjectionDelta.x,this.projectionDelta.x),C5(this.prevProjectionDelta.y,this.projectionDelta.y)),B0(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!L5(this.projectionDelta.x,this.prevProjectionDelta.x)||!L5(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),f){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=nd(),this.projectionDelta=nd(),this.projectionDeltaWithTransform=nd()}setAnimationOrigin(f,p=!1){const h=this.snapshot,x=h?h.latestValues:{},y={...this.latestValues},b=nd();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const S=sn(),E=h?h.source:void 0,A=this.layout?this.layout.source:void 0,k=E!==A,_=this.getStack(),R=!_||_.members.length<=1,O=!!(k&&!R&&this.options.crossfade===!0&&!this.path.some(nR));this.animationProgress=0;let L;this.mixTargetDelta=P=>{const V=P/1e3;H5(b.x,f.x,V),H5(b.y,f.y,V),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(I0(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),tR(this.relativeTarget,this.relativeTargetOrigin,S,V),L&&BO(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=sn()),xa(L,this.relativeTarget)),k&&(this.animationValues=y,zO(y,x,this.latestValues,V,O,R)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=V},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){var p,h,x;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(),(x=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||x.stop(),this.pendingAnimation&&(Fa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ot.update(()=>{Rm.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ga(0)),this.currentAnimation=RO(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),f.onUpdate&&f.onUpdate(y)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta($O),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:h,layout:x,latestValues:y}=f;if(!(!p||!h||!x)){if(this!==f&&this.layout&&x&&lb(this.options.animationType,this.layout.layoutBox,x.layoutBox)){h=this.target||sn();const b=wi(this.layout.layoutBox.x);h.x.min=f.target.x.min,h.x.max=h.x.min+b;const S=wi(this.layout.layoutBox.y);h.y.min=f.target.y.min,h.y.max=h.y.min+S}xa(p,h),td(p,y),B0(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new IO),this.sharedNodes.get(f).add(p);const x=p.options.initialPromotionConfig;p.promote({transition:x?x.transition:void 0,preserveFollowOpacity:x&&x.shouldPreserveFollowOpacity?x.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var p;const{layoutId:f}=this.options;return f?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:f}=this.options;return f?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:h}={}){const x=this.getStack();x&&x.promote(this,h),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:h}=f;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const x={};h.z&&Ax("z",f,x,this.animationValues);for(let y=0;y<Tx.length;y++)Ax(`rotate${Tx[y]}`,f,x,this.animationValues),Ax(`skew${Tx[y]}`,f,x,this.animationValues);f.render();for(const y in x)f.setStaticValue(y,x[y]),this.animationValues&&(this.animationValues[y]=x[y]);f.scheduleRender()}applyProjectionStyles(f,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=Om(p==null?void 0:p.pointerEvents)||"",f.transform=h?h(this.latestValues,""):"none";return}const x=this.getLead();if(!this.projectionDelta||!this.layout||!x.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=Om(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!Jl(this.latestValues)&&(f.transform=h?h({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=x.animationValues||x.latestValues;this.applyTransformsToTarget();let b=UO(this.projectionDeltaWithTransform,this.treeScale,y);h&&(b=h(y,b)),f.transform=b;const{x:S,y:E}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${E.origin*100}% 0`,x.animationValues?f.opacity=x===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=x===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const A in J0){if(y[A]===void 0)continue;const{correct:k,applyTo:_,isCSSVariable:R}=J0[A],O=b==="none"?y[A]:k(y[A],x);if(_){const L=_.length;for(let P=0;P<L;P++)f[_[P]]=O}else R?this.options.visualElement.renderState.vars[A]=O:f[A]=O}this.options.layoutId&&(f.pointerEvents=x===this?Om(p==null?void 0:p.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var p;return(p=f.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(k5),this.root.sharedNodes.clear()}}}function qO(e){e.updateLayout()}function YO(e){var i;const t=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:o}=e.layout,{animationType:c}=e.options,f=t.source!==e.layout.source;c==="size"?va(b=>{const S=f?t.measuredBox[b]:t.layoutBox[b],E=wi(S);S.min=a[b].min,S.max=S.min+E}):lb(c,t.layoutBox,a)&&va(b=>{const S=f?t.measuredBox[b]:t.layoutBox[b],E=wi(a[b]);S.max=S.min+E,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[b].max=e.relativeTarget[b].min+E)});const p=nd();B0(p,a,t.layoutBox);const h=nd();f?B0(h,e.applyTransform(o,!0),t.measuredBox):B0(h,a,t.layoutBox);const x=!ab(p);let y=!1;if(!e.resumeFrom){const b=e.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:S,layout:E}=b;if(S&&E){const A=sn();I0(A,t.layoutBox,S.layoutBox);const k=sn();I0(k,a,E.layoutBox),rb(A,k)||(y=!0),b.options.layoutRoot&&(e.relativeTarget=k,e.relativeTargetOrigin=A,e.relativeParent=b)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:t,delta:h,layoutDelta:p,hasLayoutChanged:x,hasRelativeLayoutChanged:y})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function FO(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function WO(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ZO(e){e.clearSnapshot()}function k5(e){e.clearMeasurements()}function D5(e){e.isLayoutDirty=!1}function XO(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function z5(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function KO(e){e.resolveTargetDelta()}function QO(e){e.calcProjection()}function JO(e){e.resetSkewAndRotation()}function eR(e){e.removeLeadSnapshot()}function H5(e,t,i){e.translate=Yt(t.translate,0,i),e.scale=Yt(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function V5(e,t,i,a){e.min=Yt(t.min,i.min,a),e.max=Yt(t.max,i.max,a)}function tR(e,t,i,a){V5(e.x,t.x,i.x,a),V5(e.y,t.y,i.y,a)}function nR(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const iR={duration:.45,ease:[.4,0,.1,1]},_5=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),N5=_5("applewebkit/")&&!_5("chrome/")?Math.round:Pi;function P5(e){e.min=N5(e.min),e.max=N5(e.max)}function aR(e){P5(e.x),P5(e.y)}function lb(e,t,i){return e==="position"||e==="preserve-aspect"&&!dO(R5(t),R5(i),.2)}function rR(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const sR=ob({attachResizeListener:(e,t)=>ep(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ex={current:void 0},cb=ob({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ex.current){const e=new sR({});e.mount(window),e.setOptions({layoutScroll:!0}),Ex.current=e}return Ex.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),oR={pan:{Feature:EO},drag:{Feature:AO,ProjectionNode:cb,MeasureLayout:tb}};function B5(e,t,i){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",i==="Start");const o="onHover"+i,c=a[o];c&&Ot.postRender(()=>c(t,dp(t)))}class lR extends zo{mount(){const{current:t}=this.node;t&&(this.unmount=TM(t,(i,a)=>(B5(this.node,a,"Start"),o=>B5(this.node,o,"End"))))}unmount(){}}class cR extends zo{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=lp(ep(this.node.current,"focus",()=>this.onFocus()),ep(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function I5(e,t,i){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",i==="Start");const o="onTap"+(i==="End"?"":i),c=a[o];c&&Ot.postRender(()=>c(t,dp(t)))}class uR extends zo{mount(){const{current:t}=this.node;t&&(this.unmount=jM(t,(i,a)=>(I5(this.node,a,"Start"),(o,{success:c})=>I5(this.node,o,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const z3=new WeakMap,Mx=new WeakMap,dR=e=>{const t=z3.get(e.target);t&&t(e)},fR=e=>{e.forEach(dR)};function pR({root:e,...t}){const i=e||document;Mx.has(i)||Mx.set(i,{});const a=Mx.get(i),o=JSON.stringify(t);return a[o]||(a[o]=new IntersectionObserver(fR,{root:e,...t})),a[o]}function hR(e,t,i){const a=pR(t);return z3.set(e,i),a.observe(e),()=>{z3.delete(e),a.unobserve(e)}}const mR={some:0,all:1};class gR extends zo{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:i,margin:a,amount:o="some",once:c}=t,f={root:i?i.current:void 0,rootMargin:a,threshold:typeof o=="number"?o:mR[o]},p=h=>{const{isIntersecting:x}=h;if(this.isInView===x||(this.isInView=x,c&&!x&&this.hasEnteredView))return;x&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",x);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),S=x?y:b;S&&S(h)};return hR(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(xR(t,i))&&this.startObserver()}unmount(){}}function xR({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}const vR={inView:{Feature:gR},tap:{Feature:uR},focus:{Feature:cR},hover:{Feature:lR}},yR={layout:{ProjectionNode:cb,MeasureLayout:tb}},wR={...rO,...vR,...oR,...yR},ie=Cj(wR,Vj),bR=50,U5=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),SR=()=>({time:0,x:U5(),y:U5()}),CR={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function $5(e,t,i,a){const o=i[t],{length:c,position:f}=CR[t],p=o.current,h=i.time;o.current=e[`scroll${f}`],o.scrollLength=e[`scroll${c}`]-e[`client${c}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=pd(0,o.scrollLength,o.current);const x=a-h;o.velocity=x>bR?0:Cv(o.current-p,x)}function TR(e,t,i){$5(e,"x",t,i),$5(e,"y",t,i),t.time=i}function AR(e,t){const i={x:0,y:0};let a=e;for(;a&&a!==t;)if(Bv(a))i.x+=a.offsetLeft,i.y+=a.offsetTop,a=a.offsetParent;else if(a.tagName==="svg"){const o=a.getBoundingClientRect();a=a.parentElement;const c=a.getBoundingClientRect();i.x+=o.left-c.left,i.y+=o.top-c.top}else if(a instanceof SVGGraphicsElement){const{x:o,y:c}=a.getBBox();i.x+=o,i.y+=c;let f=null,p=a.parentNode;for(;!f;)p.tagName==="svg"&&(f=p),p=a.parentNode;a=f}else break;return i}const H3={start:0,center:.5,end:1};function G5(e,t,i=0){let a=0;if(e in H3&&(e=H3[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?a=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?a=o/100*document.documentElement.clientWidth:e.endsWith("vh")?a=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(a=t*e),i+a}const ER=[0,0];function MR(e,t,i,a){let o=Array.isArray(e)?e:ER,c=0,f=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,H3[e]?e:"0"]),c=G5(o[0],i,a),f=G5(o[1],t),c-f}const jR={All:[[0,0],[1,1]]},OR={x:0,y:0};function RR(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function LR(e,t,i){const{offset:a=jR.All}=i,{target:o=e,axis:c="y"}=i,f=c==="y"?"height":"width",p=o!==e?AR(o,e):OR,h=o===e?{width:e.scrollWidth,height:e.scrollHeight}:RR(o),x={width:e.clientWidth,height:e.clientHeight};t[c].offset.length=0;let y=!t[c].interpolate;const b=a.length;for(let S=0;S<b;S++){const E=MR(a[S],x[f],h[f],p[c]);!y&&E!==t[c].interpolatorOffsets[S]&&(y=!0),t[c].offset[S]=E}y&&(t[c].interpolate=kv(t[c].offset,t7(a),{clamp:!1}),t[c].interpolatorOffsets=[...t[c].offset]),t[c].progress=_r(0,1,t[c].interpolate(t[c].current))}function kR(e,t=e,i){if(i.x.targetOffset=0,i.y.targetOffset=0,t!==e){let a=t;for(;a&&a!==e;)i.x.targetOffset+=a.offsetLeft,i.y.targetOffset+=a.offsetTop,a=a.offsetParent}i.x.targetLength=t===e?t.scrollWidth:t.clientWidth,i.y.targetLength=t===e?t.scrollHeight:t.clientHeight,i.x.containerLength=e.clientWidth,i.y.containerLength=e.clientHeight}function DR(e,t,i,a={}){return{measure:o=>{kR(e,a.target,i),TR(e,i,o),(a.offset||a.target)&&LR(e,i,a)},notify:()=>t(i)}}const j0=new WeakMap,q5=new WeakMap,jx=new WeakMap,Y5=e=>e===document.scrollingElement?window:e;function ub(e,{container:t=document.scrollingElement,...i}={}){if(!t)return Pi;let a=jx.get(t);a||(a=new Set,jx.set(t,a));const o=SR(),c=DR(t,e,o,i);if(a.add(c),!j0.has(t)){const p=()=>{for(const b of a)b.measure(En.timestamp);Ot.preUpdate(h)},h=()=>{for(const b of a)b.notify()},x=()=>Ot.read(p);j0.set(t,x);const y=Y5(t);window.addEventListener("resize",x,{passive:!0}),t!==document.documentElement&&q5.set(t,_M(t,x)),y.addEventListener("scroll",x,{passive:!0}),x()}const f=j0.get(t);return Ot.read(f,!1,!0),()=>{var x;Fa(f);const p=jx.get(t);if(!p||(p.delete(c),p.size))return;const h=j0.get(t);j0.delete(t),h&&(Y5(t).removeEventListener("scroll",h),(x=q5.get(t))==null||x(),window.removeEventListener("resize",h))}}const F5=new Map;function zR(e){const t={value:0},i=ub(a=>{t.value=a[e.axis].progress*100},e);return{currentTime:t,cancel:i}}function db({source:e,container:t,...i}){const{axis:a}=i;e&&(t=e);const o=F5.get(t)??new Map;F5.set(t,o);const c=i.target??"self",f=o.get(c)??{},p=a+(i.offset??[]).join(",");return f[p]||(f[p]=!i.target&&r7()?new ScrollTimeline({source:t,axis:a}):zR({container:t,...i})),f[p]}function HR(e,t){const i=db(t);return e.attachTimeline({timeline:t.target?void 0:i,observe:a=>(a.pause(),b7(o=>{a.time=a.duration*o},i))})}function VR(e){return e.length===2}function _R(e,t){return VR(e)?ub(i=>{e(i[t.axis].progress,i)},t):b7(e,db(t))}function NR(e,{axis:t="y",container:i=document.scrollingElement,...a}={}){if(!i)return Pi;const o={axis:t,container:i,...a};return typeof e=="function"?_R(e,o):HR(e,o)}const PR=()=>({scrollX:Ga(0),scrollY:Ga(0),scrollXProgress:Ga(0),scrollYProgress:Ga(0)}),em=e=>e?!e.current:!1;function Pr({container:e,target:t,...i}={}){const a=cc(PR),o=N.useRef(null),c=N.useRef(!1),f=N.useCallback(()=>(o.current=NR((p,{x:h,y:x})=>{a.scrollX.set(h.current),a.scrollXProgress.set(h.progress),a.scrollY.set(x.current),a.scrollYProgress.set(x.progress)},{...i,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var p;(p=o.current)==null||p.call(o)}),[e,t,JSON.stringify(i.offset)]);return op(()=>{if(c.current=!1,em(e)||em(t)){c.current=!0;return}else return f()},[f]),N.useEffect(()=>{if(c.current)return Z0(!em(e)),Z0(!em(t)),f()},[f]),a}function BR(e){const t=cc(()=>Ga(e)),{isStatic:i}=N.useContext(S2);if(i){const[,a]=N.useState(e);N.useEffect(()=>t.on("change",a),[])}return t}function fb(e,t){const i=BR(t()),a=()=>i.set(t());return a(),op(()=>{const o=()=>Ot.preRender(a,!1,!0),c=e.map(f=>f.on("change",o));return()=>{c.forEach(f=>f()),Fa(a)}}),i}function IR(e){N0.current=[],e();const t=fb(N0.current,e);return N0.current=void 0,t}function on(e,t,i,a){if(typeof e=="function")return IR(e);const o=typeof t=="function"?t:PM(t,i,a);return Array.isArray(e)?W5(e,o):W5([e],([c])=>o(c))}function W5(e,t){const i=cc(()=>[]);return fb(e,()=>{i.length=0;const a=e.length;for(let o=0;o<a;o++)i[o]=e[o].get();return t(i)})}function UR(e){e.values.forEach(t=>t.stop())}function V3(e,t){[...t].reverse().forEach(a=>{const o=e.getVariant(a);o&&Qv(e,o),e.variantChildren&&e.variantChildren.forEach(c=>{V3(c,t)})})}function $R(e,t){if(Array.isArray(t))return V3(e,t);if(typeof t=="string")return V3(e,[t]);Qv(e,t)}function GR(){const e=new Set,t={subscribe(i){return e.add(i),()=>void e.delete(i)},start(i,a){const o=[];return e.forEach(c=>{o.push(F7(c,i,{transitionOverride:a}))}),Promise.all(o)},set(i){return e.forEach(a=>{$R(a,i)})},stop(){e.forEach(i=>{UR(i)})},mount(){return()=>{t.stop()}}};return t}function qR(){const e=cc(GR);return op(e.mount,[]),e}const YR=qR,FR={some:0,all:1};function WR(e,t,{root:i,margin:a,amount:o="some"}={}){const c=Pv(e),f=new WeakMap,p=x=>{x.forEach(y=>{const b=f.get(y.target);if(y.isIntersecting!==!!b)if(y.isIntersecting){const S=t(y.target,y);typeof S=="function"?f.set(y.target,S):h.unobserve(y.target)}else typeof b=="function"&&(b(y),f.delete(y.target))})},h=new IntersectionObserver(p,{root:i,rootMargin:a,threshold:typeof o=="number"?o:FR[o]});return c.forEach(x=>h.observe(x)),()=>h.disconnect()}function E2(e,{root:t,margin:i,amount:a,once:o=!1,initial:c=!1}={}){const[f,p]=N.useState(c);return N.useEffect(()=>{if(!e.current||o&&f)return;const h=()=>(p(!0),o?void 0:()=>p(!1)),x={root:t&&t.current||void 0,margin:i,amount:a};return WR(e.current,h,x)},[t,e,i,o,a]),f}const ZR=T.div`
  position: relative;
  cursor: pointer;
`,XR=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0;
`,KR=T.img`
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  // Додайте ці стилі для кращої видимості
  display: block;
  min-width: 16px;
  margin-left: 8px;
   width: auto;
    filter: ${({$overlayOpen:e,$darkMode:t})=>e||t?"brightness(0)":"brightness(0) invert(1)"};
    transition: filter 0.3s ease-in-out;
`,QR=T(ie.div)`
  padding-left: 20px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  margin: 8px 0;
`,JR=T.div`
  padding: 12px 0;
`,eL=T(Kt)`
  color: #666;
  text-decoration: none;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  display: block;
  padding: 8px 0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--purple-400);
  }

  &.active {
    color: var(--purple-400);
    font-weight: 500;
  }
`;T.div`
  position: relative;
`;T(Kt)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  color: #242424;
  text-decoration: none;
  font-family: 'Geist', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;T.img`
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
`;T.div`
  padding-left: 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;

  &.open {
    max-height: 200px;
  }
`;T.div`
  padding: 12px 0;
`;T(Kt)`
  color: #666;
  text-decoration: none;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  display: block;

  &:hover {
    color: var(--purple-400);
  }

  &.active {
    color: var(--purple-400);
    font-weight: 500;
  }
`;const tL=T.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,nL=T.button`
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
`,Ox=T(ie.div)`
  width: 20px;
  height: 2px;
  background: ${({$isOpen:e,$darkMode:t})=>e||t?"black":"white"};
  border-radius: 2px;
  transition: background 0.3s ease;
`,iL=T(ie.div)`
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
`,Z5=T(Kt)`
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
`,X5=T.p`
  color: ${({$active:e})=>e?"#3098EE":"#242424"};
  font-family: 'Bebas Neue', sans-serif;
  font-size: 46px;
  font-weight: 400;
  line-height: 0.9em;
  display: flex;
  width: 100%;
  transition: color 0.3s ease;
  flex-direction: row-reverse;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  transition: color 0.3s ease;

  &:hover,
  &.active {
    color: #3098ee;
  }
`,K5=T.div`
  background-color: ${({$active:e})=>e?"#3098EE":"#c3c2c2ff"};
  position: absolute;
  width: 90vh;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`,pb="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%207L8%2011L12%207'%20stroke='white'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",aL=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  overflow: auto;
  margin-top: 40px;
`,Q5=T.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  width: 166px;
`,Eo=T.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,rL=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.875rem;
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
`,sL=T.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
`,oL=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
`,lL=T.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;
`,cL=T.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.2em;
  width: fit-content;
`,uL={open:{rotate:45,y:8},closed:{rotate:0,y:0}},dL={open:{opacity:0},closed:{opacity:1}},fL={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},pL={open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},hL={open:{opacity:1,height:"auto",transition:{duration:.3,ease:Um}},closed:{opacity:0,height:0,transition:{duration:.3,ease:Um}}},mL=({isOpen:e,setIsOpen:t})=>{const[i,a]=N.useState(!1),o=ia(),[c]=N.useState(!1),f=["/contact","/service","/tips","/pricing","/fridge","/dryer"].some(b=>o.pathname.startsWith(b));N.useEffect(()=>(document.body.style.overflow=e?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[e]);const p=()=>{t(!1),a(!1)},h=b=>{const S=o.pathname;return b==="/home#hero"?S==="/"||S==="/home":S.startsWith(b.split("#")[0])},x=i||c,y=[{to:"/home#hero",label:"Home"},{to:"/service#all",label:"Services",isService:!0,subItems:[{to:"/fridge#ap",label:"Refrigerator Repair "},{to:"/dryer#ap",label:" Dryer Repair"}]},{to:"/about#ap",label:"About Us"},{to:"/tips#app",label:"Tips"},{to:"/contact#ap",label:"Contact"}];return m.jsxs(tL,{children:[m.jsxs(nL,{onClick:()=>t(!e),"aria-label":e?"Close menu":"Open menu",children:[m.jsx(Ox,{$isOpen:e,$darkMode:f,animate:e?"open":"closed",variants:uL}),m.jsx(Ox,{$isOpen:e,$darkMode:f,animate:e?"open":"closed",variants:dL}),m.jsx(Ox,{$isOpen:e,$darkMode:f,animate:e?"open":"closed",variants:fL})]}),m.jsx(Ym,{children:e&&m.jsxs(iL,{initial:"closed",animate:"open",exit:"closed",variants:pL,transition:{duration:.3},children:[y.map((b,S)=>{const E=h(b.to);return b.isService&&b.subItems?m.jsxs(ZR,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[m.jsx(Z5,{to:b.to,onClick:p,children:m.jsx(XR,{children:m.jsxs(X5,{$active:E,children:[" ",m.jsx(KR,{src:pb,alt:"▼",$overlayOpen:x,$darkMode:f,$isOpen:i}),b.label]})})}),m.jsx(Ym,{children:i&&m.jsx(QR,{initial:"closed",animate:"open",exit:"closed",variants:hL,children:b.subItems.map((A,k)=>m.jsx(JR,{children:m.jsx(eL,{to:A.to,onClick:p,className:h(A.to)?"active":"",children:A.label})},k))})}),m.jsx(K5,{})]},S):m.jsxs("div",{children:[m.jsx(Z5,{to:b.to,onClick:p,children:m.jsx(X5,{$active:E,children:b.label})}),m.jsx(K5,{})]},S)}),m.jsxs(aL,{children:[m.jsxs(Q5,{children:[m.jsx(Eo,{children:"Refrigerator Repair"}),m.jsx(Eo,{children:"Dryer Repair"}),m.jsx(Eo,{children:"Oven Repair"}),m.jsx(Eo,{children:"Range & Stove Repair"})]}),m.jsxs(Q5,{children:[m.jsx(Eo,{children:"Washer Repair"}),m.jsx(Eo,{children:"Dishwasher Repair"}),m.jsx(Eo,{children:"Cooktop Repair"}),m.jsx(Eo,{children:"Built-in and High-End Brands Repair"})]})]}),m.jsxs(rL,{children:[m.jsx(sL,{}),m.jsxs(oL,{children:[m.jsx(lL,{children:"Designed by TRBN"}),m.jsx(cL,{children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})})]})},gL="/assets/LogoandTextContainer-CnBPFIWK.svg",xL=T.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  overflow: auto;
  flex-shrink: 0;
  /* iOS specific optimizations */
  -webkit-overflow-scrolling: touch;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 120px;
  }
`,vL=T.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  /* Оптимізація для мобільних пристроїв */
  @media (max-width: 768px) {
    object-position: center center;
  }
`,yL=T.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #131313ff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;T.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;T.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const wL=T.div`
     position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgb(0 0 0 / 87%) 0%, rgb(0 0 0 / 48%) 50%, rgba(0, 0, 0, 0.4) 100%);
    z-index: 0;
`,bL=T.div`
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
  z-index: 2; /* Вище затемнення */

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    left: auto;
    bottom: auto;
    width: 45%;
    max-width: 600px;
    margin-left: auto;
    margin-right: 0;
    margin-top: 20%;
  }
`,SL=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,CL=T.p`
  color: #fff;
  font-family: var(--second-family);
  font-size: 56px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  
  @media screen and (min-width: 768px) {
    font-size: 85px;
  }

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`,TL=T.p`
  color: #fff;
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,AL=T.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  z-index: 3; /* Вище затемнення */
`,hb=T(Kt)`
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
  text-decoration: none;
  transition: all 0.3s ease;

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

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;T.button`
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
`;T.div`
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
`;T.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.div`
  display: flex;
  align-items: center;
  gap: 7px;
  width: 156px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.img`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  max-width: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.div`
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
`;T.div`
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
`;T.span`
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
`;T.p`
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
`;T.div`
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
`;T.div`
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
`;T.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 1440px) {
    width: auto;
    margin: 0 auto;
  }
`;T.img`
  border-radius: 18px;
  border: 1px solid var(--black);
  width: 36px;
  height: 36px;
  margin-left: -20px;
`;T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
`;T.div`
  margin: 0 auto;
  width: 285px;
  // height: 43px;
  margin-top: 20px;
  display: flex;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1440px) {
  }
`;T.button`
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
`;Nr`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 73, 74, 0.81);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`;T.button`
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
`;const J5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgBzZFhEcIwDIVTFFRCHYCESZgDJgEHmwPmYJWAhKGgONgccCgoL3e5I1eaAf/I3Xftkry+ZnVUiZyzx9KBPXiAm3Muln27ivCIJYEArmAFLfILCGQFimYTcidwNw8QYSv7A5iEILkBjDUhNy+yD3IQu40q79m9Jm7ALPsOXFRtVe75k7OX+fjAvrjRu7OauaHXz5v5BsqVbzRZYi4moxa+ea4IzkXOi3CgrZDGxLMW39vCilMvwki/hJox0t/FEx1sC+f02XQyAAAAAElFTkSuQmCC",EL=()=>{const[e,t]=N.useState(!1),[i,a]=N.useState(!1),o=ia(),[c,f]=N.useState(!1),[p,h]=N.useState(!1);N.useEffect(()=>{h(["/contact","/service","/tips","/pricing","/fridge","/dryer"].some(R=>o.pathname.startsWith(R)))},[o.pathname]);const x=c||i,y=ev(),b=_=>{_.preventDefault(),window.location.pathname!=="/home"?y("/home#header"):setTimeout(()=>{const R=document.getElementById("header");R?R.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})},100)},S=()=>{f(!c)};N.useEffect(()=>{const _=new IntersectionObserver(([O])=>{t(!O.isIntersecting)},{threshold:.1,rootMargin:"50px 0px 0px 0px"}),R=document.createElement("div");return R.style.position="absolute",R.style.top="50px",R.style.height="1px",R.style.pointerEvents="none",document.body.appendChild(R),_.observe(R),()=>{_.disconnect(),document.body.contains(R)&&document.body.removeChild(R)}},[]);const E=ft({query:"(max-width: 1439px)"}),A=ft({query:"(min-width: 768px) and (max-width: 1439px)"}),k=ft({query:"(min-width: 1440px)"});return m.jsxs(cA,{$isScrolled:e,$darkMode:p,children:[m.jsxs(uA,{children:[m.jsx(dA,{to:"/home#header",onClick:b,$overlayOpen:x,$darkMode:p,children:m.jsx("img",{src:gL,alt:"Logo"})}),!E&&m.jsxs(fA,{children:[m.jsx(E0,{children:m.jsx(vs,{to:"/home#hero",$overlayOpen:x,$darkMode:p,children:"Home"})}),m.jsx(E0,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),onClick:S,children:m.jsxs(oA,{children:[m.jsxs(vs,{to:"/service#all",$overlayOpen:x,$darkMode:p,style:{padding:"10px 0px"},children:["Service",m.jsx(O8,{src:pb,alt:"⬇️",$overlayOpen:x,$darkMode:p})]}),c&&m.jsxs(lA,{children:[m.jsx(S4,{children:m.jsx(vs,{to:"/fridge#ap",$overlayOpen:x,$darkMode:p,onClick:()=>f(!1),children:"Refrigerator  Repair"})}),m.jsx(S4,{children:m.jsx(vs,{to:"/dryer#ap",$overlayOpen:x,$darkMode:p,onClick:()=>f(!1),children:"Dryer  Repair"})})]})]})}),m.jsx(E0,{children:m.jsx(vs,{to:"/about#ap",$overlayOpen:x,$darkMode:p,children:"About Us"})}),m.jsx(E0,{children:m.jsx(vs,{to:"/tips#app",$overlayOpen:x,$darkMode:p,children:"Tips"})}),m.jsx(E0,{children:m.jsx(vs,{to:"/contact#ap",$overlayOpen:x,$darkMode:p,children:"Contact"})})]}),k&&m.jsxs(C4,{children:[m.jsxs(W1,{children:[m.jsx(Ao,{$overlayOpen:x,$darkMode:p,children:m.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),m.jsx(Ao,{$overlayOpen:x,$darkMode:p,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),m.jsxs(W1,{children:[m.jsxs(Ao,{$overlayOpen:x,$darkMode:p,children:[m.jsx("img",{src:J5,alt:"🗺️"}),m.jsx("a",{href:"https://maps.app.goo.gl/cJF4BwHPJFbYsQAMA",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),m.jsx(Ao,{$overlayOpen:x,$darkMode:p,children:"& Nearby Cities"})]})]}),m.jsx(pA,{children:m.jsxs("div",{style:{display:"flex",gap:16},children:[m.jsx(hb,{to:"/contact#ap",children:"Contact Us"}),m.jsx(R8,{$overlayOpen:x,$darkMode:p,children:m.jsx("a",{href:"tel:+18055002705",children:"Call Us"})}),E&&m.jsx(mL,{isOpen:i,setIsOpen:a})]})})]}),A&&m.jsxs(C4,{children:[m.jsxs(W1,{children:[m.jsx(Ao,{$overlayOpen:x,$darkMode:p,children:m.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),m.jsx(Ao,{$overlayOpen:x,$darkMode:p,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),m.jsxs(W1,{children:[m.jsxs(Ao,{$overlayOpen:x,$darkMode:p,children:[m.jsx("img",{src:J5,alt:"🗺️"}),m.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),m.jsx(Ao,{$overlayOpen:x,$darkMode:p,children:"& Nearby Cities"})]})]})]})},ML=T.footer`
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
`,jL=T.div`
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
`,OL=T.div`
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
`,O0=T(Kt)`
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
`,Rx=T.p`
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
`,RL=T.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
  }
`,LL=T.p`
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
`,kL=T.div`
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
`,DL=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,zL=T.div`
  background: rgba(255, 255, 255, ${({opacity:e})=>e||.5});
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,HL=T.svg`
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 114px;
  }

  @media screen and (min-width: 1440px) {
    height: 222px;
  }
`;T.footer`
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
`;T.div`
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
`;T.p`
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
`;T.div`
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
`;T.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 5px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.a`
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
`;T.div`
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
`;T(Kt)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: var(--white-50);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.a`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: var(--white-50);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.div`
  display: flex;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T(Kt)`
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
`;T.div`
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
`;T.button`
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
`;T.div`
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
`;T.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
  margin: 16px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.a`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.img`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const VL=T.div`
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
`,_L=T.div`
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
`,NL=T.p`
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
`,PL=T.p`
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
`,mb=T.div`
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
`,gb=T.div`
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
`,xb=T.button`
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
`,BL=T.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 55px;
  line-height: 90%;
  color: var(--blue-500);
  text-align: center;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`,IL=T.div`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
  height: auto;
  padding: 30px 0;
  background: var(--blue-form);
   z-index: 9000;
`,vb=()=>{const e=[{title:"Last Updated: January 20, 2025",content:"At Airtexno, we are dedicated to safeguarding your privacy and ensuring that your personal data is managed securely and responsibly. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or engage with our services."},{title:"INFORMATION WE COLLECT",content:"We may collect the following types of information: Personal Information: Name, email address, phone number, company name, and other details you provide when filling out forms, subscribing to newsletters, or contacting us directly. Usage Data: Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent. We may collect this through cookies and analytics tools. Third-Party Data: Information from services you've authorized us to use (e.g., analytics providers)."},{title:"HOW WE USE YOUR INFORMATION",content:"We may use or share your information with: Service Providers: To help operate our website, analytics, marketing, or provide services on our behalf. Legal Requirements: If required by applicable law or to comply with legal processes. Business Transfers: In the case of a merger or acquisition, data may be shared as part of that process. We do not sell personal data to third parties."},{title:"COOKIES AND TRACKING TECHNOLOGIES",content:"Our site uses cookies and similar technologies to enhance performance and user experience. Cookies help remember your preferences and analyze behavior. You can manage cookies through your browser settings. Please note that disabling cookies may impact site functionality."},{title:"DATA RETENTION",content:"We retain your data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations."},{title:"YOUR RIGHTS",content:"Depending on your location, you may have the right to: Access your data. Request corrections to inaccurate or incomplete data. Request deletion of your personal data. Object to certain processing activities. Request a copy of your data in machine-readable format. To exercise these rights, please contact us using the details below."},{title:"DATA SECURITY",content:"We implement appropriate technical and organizational measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection."},{title:"THIRD-PARTY LINKS",content:"Our website may contain links to external sites. We are not responsible for their privacy practices. We recommend reviewing their privacy policies separately."},{title:"INTERNATIONAL DATA TRANSFERS",content:"If you access our site from outside our operating country, your data may be transferred and processed in other regions where our servers or partners are located. By using the site, you consent to this transfer."},{title:"UPDATES TO THIS POLICY",content:"We may update this Privacy Policy as necessary. Any changes will be reflected by updating the 'Last Updated' date above. We encourage you to check this page periodically."}];return m.jsxs("div",{children:[m.jsx(IL,{children:m.jsx(BL,{children:"Privacy and terms"})}),m.jsx(VL,{children:e.map((t,i)=>m.jsxs(_L,{children:[m.jsx(NL,{children:t.title}),m.jsx(PL,{children:t.content})]},i))})]})},UL=()=>{const[e,t]=N.useState(!1),i=()=>{t(!0)},a=()=>{t(!1)};return m.jsxs(m.Fragment,{children:[m.jsx(ML,{children:m.jsxs(jL,{children:[m.jsxs(OL,{children:[m.jsxs(LL,{children:[m.jsx("a",{href:"https://maps.app.goo.gl/cJF4BwHPJFbYsQAMA",target:"_blank",rel:"noopener noreferrer",children:"801 Tioga pl, Newbury Park, CA 91320"})," ",m.jsx("br",{}),m.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"}),m.jsx("br",{})," ",m.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"Airtexnola@gmail.com"})]}),m.jsxs(kL,{children:[m.jsx(O0,{to:"/home#hero",children:"Home"}),m.jsx(O0,{to:"/service#all",children:"Services"}),m.jsx(O0,{to:"/about#ap",children:"About Us"}),m.jsx(O0,{to:"/tips#app",children:"Tips"}),m.jsx(O0,{to:"/contact#ap",children:"Contacts"}),m.jsx(Rx,{onClick:i,style:{cursor:"pointer"},children:"Privacy and Terms"})]})]}),m.jsxs(DL,{children:[m.jsxs(HL,{viewBox:"0 0 343 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M0 54.8045L19.396 1.71207H26.1359L45.457 54.8045H39.9152L34.2238 38.8768H11.2332L5.5417 54.8045H0ZM12.9556 33.9414H32.5013L22.7659 6.27353L12.9556 33.9414Z",fill:"#3098EE"}),m.jsx("path",{d:"M51.2842 54.8045V1.71207H56.3765V54.8045H51.2842Z",fill:"#3098EE"}),m.jsx("path",{d:"M67.6308 54.8045V1.71207H87.1016C90.896 1.71207 94.1161 2.36015 96.7622 3.6563C99.4581 4.9026 101.53 6.69727 102.978 9.04032C104.426 11.3834 105.15 14.2 105.15 17.4902C105.15 19.933 104.575 22.1015 103.427 23.9959C102.329 25.8903 100.856 27.4108 99.0088 28.5574C97.1616 29.704 95.1646 30.3521 93.0178 30.5016L92.6433 29.8286C96.1381 29.8286 98.8341 30.6262 100.731 32.2215C102.678 33.7669 103.802 36.2097 104.101 39.5498L105.449 54.8045H100.282L99.0088 39.9984C98.8091 37.5557 97.9354 35.761 96.3877 34.6144C94.84 33.418 92.3438 32.8197 88.8989 32.8197H72.7232V54.8045H67.6308ZM72.7232 27.8844H87.9254C91.5699 27.8844 94.4407 26.987 96.5375 25.1924C98.6843 23.3478 99.7577 20.7555 99.7577 17.4155C99.7577 13.9258 98.6843 11.2587 96.5375 9.41421C94.3907 7.56968 91.2205 6.64742 87.0267 6.64742H72.7232V27.8844Z",fill:"#3098EE"}),m.jsx("path",{d:"M125.684 54.8045V9.1151H109.359V1.71207H150.098V9.1151H133.772V54.8045H125.684Z",fill:"white"}),m.jsx("path",{d:"M153.991 54.8045V1.71207H188.589V9.1151H162.079V24.5941H187.691V31.7728H162.079V47.4014H189.188V54.8045H153.991Z",fill:"white"}),m.jsx("path",{d:"M192.736 54.8045L210.41 28.1835L192.886 1.71207H202.397L215.502 21.9021L228.383 1.71207H237.819L220.295 28.0339L238.043 54.8045H228.533L215.352 34.3153L202.172 54.8045H192.736Z",fill:"white"}),m.jsx("path",{d:"M243.289 54.8045V1.71207H253.549L278.112 45.0085V1.71207H286.2V54.8045H275.566L251.377 12.4801V54.8045H243.289Z",fill:"white"}),m.jsx("path",{d:"M318.137 56.0009C312.995 56.0009 308.577 54.9042 304.882 52.7107C301.188 50.4674 298.342 47.2768 296.345 43.1391C294.348 39.0014 293.349 34.066 293.349 28.333C293.349 22.6001 294.348 17.6647 296.345 13.527C298.342 9.33943 301.188 6.12397 304.882 3.88063C308.577 1.63729 312.995 0.515625 318.137 0.515625C323.329 0.515625 327.773 1.63729 331.467 3.88063C335.212 6.12397 338.057 9.33943 340.004 13.527C342.001 17.6647 343 22.6001 343 28.333C343 34.066 342.001 39.0014 340.004 43.1391C338.057 47.2768 335.212 50.4674 331.467 52.7107C327.773 54.9042 323.329 56.0009 318.137 56.0009ZM318.137 48.5979C321.582 48.5979 324.528 47.8003 326.974 46.205C329.47 44.6097 331.367 42.3165 332.665 39.3254C333.964 36.2844 334.613 32.6203 334.613 28.333C334.613 24.0458 333.964 20.3817 332.665 17.3407C331.367 14.2997 329.47 11.9816 326.974 10.3863C324.528 8.74121 321.582 7.91865 318.137 7.91865C314.742 7.91865 311.822 8.74121 309.375 10.3863C306.929 11.9816 305.032 14.2997 303.684 17.3407C302.386 20.3817 301.737 24.0458 301.737 28.333C301.737 32.6203 302.386 36.2844 303.684 39.3254C305.032 42.3165 306.929 44.6097 309.375 46.205C311.822 47.8003 314.742 48.5979 318.137 48.5979Z",fill:"white"})]}),m.jsx(zL,{opacity:.5}),m.jsxs(RL,{children:[m.jsx(Rx,{size:"14px",weight:"500",children:"Designed by TRBN"}),m.jsx(Rx,{size:"14px",children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})}),e&&m.jsx(mb,{onClick:a,children:m.jsxs(gb,{onClick:o=>o.stopPropagation(),children:[m.jsx(xb,{onClick:a,children:"×"}),m.jsx(vb,{})]})})]})},$L=()=>{const e=ia();return N.useEffect(()=>{const t=()=>{sessionStorage.clear()};return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[]),N.useEffect(()=>{(()=>{const a=Object.keys(localStorage).find(o=>o.startsWith("cached_video_"));a&&localStorage.removeItem(a)})()},[]),N.useEffect(()=>{if(e.hash){const t=e.hash.replace("#",""),i=document.getElementById(t);i&&setTimeout(()=>{i.scrollIntoView({behavior:"smooth",block:"start"})},400)}else window.scrollTo({top:0,behavior:"auto"})},[e.pathname]),m.jsxs(m.Fragment,{children:[m.jsx(EL,{}),m.jsx(N.Suspense,{children:m.jsx(jS,{})}),m.jsx(UL,{})]})};function ew(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function ty(e,t){e===void 0&&(e={}),t===void 0&&(t={});const i=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>i.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:ew(t[a])&&ew(e[a])&&Object.keys(t[a]).length>0&&ty(e[a],t[a])})}const yb={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Vr(){const e=typeof document<"u"?document:{};return ty(e,yb),e}const GL={document:yb,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function bi(){const e=typeof window<"u"?window:{};return ty(e,GL),e}function qL(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function YL(e){const t=e;Object.keys(t).forEach(i=>{try{t[i]=null}catch{}try{delete t[i]}catch{}})}function wb(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Zm(){return Date.now()}function FL(e){const t=bi();let i;return t.getComputedStyle&&(i=t.getComputedStyle(e,null)),!i&&e.currentStyle&&(i=e.currentStyle),i||(i=e.style),i}function WL(e,t){t===void 0&&(t="x");const i=bi();let a,o,c;const f=FL(e);return i.WebKitCSSMatrix?(o=f.transform||f.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(p=>p.replace(",",".")).join(", ")),c=new i.WebKitCSSMatrix(o==="none"?"":o)):(c=f.MozTransform||f.OTransform||f.MsTransform||f.msTransform||f.transform||f.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=c.toString().split(",")),t==="x"&&(i.WebKitCSSMatrix?o=c.m41:a.length===16?o=parseFloat(a[12]):o=parseFloat(a[4])),t==="y"&&(i.WebKitCSSMatrix?o=c.m42:a.length===16?o=parseFloat(a[13]):o=parseFloat(a[5])),o||0}function tm(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function ZL(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ji(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){const a=i<0||arguments.length<=i?void 0:arguments[i];if(a!=null&&!ZL(a)){const o=Object.keys(Object(a)).filter(c=>t.indexOf(c)<0);for(let c=0,f=o.length;c<f;c+=1){const p=o[c],h=Object.getOwnPropertyDescriptor(a,p);h!==void 0&&h.enumerable&&(tm(e[p])&&tm(a[p])?a[p].__swiper__?e[p]=a[p]:Ji(e[p],a[p]):!tm(e[p])&&tm(a[p])?(e[p]={},a[p].__swiper__?e[p]=a[p]:Ji(e[p],a[p])):e[p]=a[p])}}}return e}function nm(e,t,i){e.style.setProperty(t,i)}function bb(e){let{swiper:t,targetPosition:i,side:a}=e;const o=bi(),c=-t.translate;let f=null,p;const h=t.params.speed;t.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(t.cssModeFrameID);const x=i>c?"next":"prev",y=(S,E)=>x==="next"&&S>=E||x==="prev"&&S<=E,b=()=>{p=new Date().getTime(),f===null&&(f=p);const S=Math.max(Math.min((p-f)/h,1),0),E=.5-Math.cos(S*Math.PI)/2;let A=c+E*(i-c);if(y(A,i)&&(A=i),t.wrapperEl.scrollTo({[a]:A}),y(A,i)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:A})}),o.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=o.requestAnimationFrame(b)};b()}function Rr(e,t){t===void 0&&(t="");const i=bi(),a=[...e.children];return i.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),t?a.filter(o=>o.matches(t)):a}function XL(e,t){const i=[t];for(;i.length>0;){const a=i.shift();if(e===a)return!0;i.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function KL(e,t){const i=bi();let a=t.contains(e);return!a&&i.HTMLSlotElement&&t instanceof HTMLSlotElement&&(a=[...t.assignedElements()].includes(e),a||(a=XL(e,t))),a}function Xm(e){try{console.warn(e);return}catch{}}function Km(e,t){t===void 0&&(t=[]);const i=document.createElement(e);return i.classList.add(...Array.isArray(t)?t:qL(t)),i}function QL(e,t){const i=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&i.push(a):i.push(a),e=a}return i}function JL(e,t){const i=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&i.push(a):i.push(a),e=a}return i}function Ro(e,t){return bi().getComputedStyle(e,null).getPropertyValue(t)}function Qm(e){let t=e,i;if(t){for(i=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(i+=1);return i}}function Sb(e,t){const i=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&i.push(a):i.push(a),a=a.parentElement;return i}function _3(e,t,i){const a=bi();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function Mn(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Jm(e,t){t===void 0&&(t=""),typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:i=>i}).createHTML(t):e.innerHTML=t}function Cb(e,t,i,a){return e.params.createElements&&Object.keys(a).forEach(o=>{if(!i[o]&&i.auto===!0){let c=Rr(e.el,`.${a[o]}`)[0];c||(c=Km("div",a[o]),c.className=a[o],e.el.append(c)),i[o]=c,t[o]=c}}),i}function M2(e){let{swiper:t,extendParams:i,on:a,emit:o}=e;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function c(A){let k;return A&&typeof A=="string"&&t.isElement&&(k=t.el.querySelector(A)||t.hostEl.querySelector(A),k)?k:(A&&(typeof A=="string"&&(k=[...document.querySelectorAll(A)]),t.params.uniqueNavElements&&typeof A=="string"&&k&&k.length>1&&t.el.querySelectorAll(A).length===1?k=t.el.querySelector(A):k&&k.length===1&&(k=k[0])),A&&!k?A:k)}function f(A,k){const _=t.params.navigation;A=Mn(A),A.forEach(R=>{R&&(R.classList[k?"add":"remove"](..._.disabledClass.split(" ")),R.tagName==="BUTTON"&&(R.disabled=k),t.params.watchOverflow&&t.enabled&&R.classList[t.isLocked?"add":"remove"](_.lockClass))})}function p(){const{nextEl:A,prevEl:k}=t.navigation;if(t.params.loop){f(k,!1),f(A,!1);return}f(k,t.isBeginning&&!t.params.rewind),f(A,t.isEnd&&!t.params.rewind)}function h(A){A.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),o("navigationPrev"))}function x(A){A.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),o("navigationNext"))}function y(){const A=t.params.navigation;if(t.params.navigation=Cb(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(A.nextEl||A.prevEl))return;let k=c(A.nextEl),_=c(A.prevEl);Object.assign(t.navigation,{nextEl:k,prevEl:_}),k=Mn(k),_=Mn(_);const R=(O,L)=>{O&&O.addEventListener("click",L==="next"?x:h),!t.enabled&&O&&O.classList.add(...A.lockClass.split(" "))};k.forEach(O=>R(O,"next")),_.forEach(O=>R(O,"prev"))}function b(){let{nextEl:A,prevEl:k}=t.navigation;A=Mn(A),k=Mn(k);const _=(R,O)=>{R.removeEventListener("click",O==="next"?x:h),R.classList.remove(...t.params.navigation.disabledClass.split(" "))};A.forEach(R=>_(R,"next")),k.forEach(R=>_(R,"prev"))}a("init",()=>{t.params.navigation.enabled===!1?E():(y(),p())}),a("toEdge fromEdge lock unlock",()=>{p()}),a("destroy",()=>{b()}),a("enable disable",()=>{let{nextEl:A,prevEl:k}=t.navigation;if(A=Mn(A),k=Mn(k),t.enabled){p();return}[...A,...k].filter(_=>!!_).forEach(_=>_.classList.add(t.params.navigation.lockClass))}),a("click",(A,k)=>{let{nextEl:_,prevEl:R}=t.navigation;_=Mn(_),R=Mn(R);const O=k.target;let L=R.includes(O)||_.includes(O);if(t.isElement&&!L){const P=k.path||k.composedPath&&k.composedPath();P&&(L=P.find(V=>_.includes(V)||R.includes(V)))}if(t.params.navigation.hideOnClick&&!L){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===O||t.pagination.el.contains(O)))return;let P;_.length?P=_[0].classList.contains(t.params.navigation.hiddenClass):R.length&&(P=R[0].classList.contains(t.params.navigation.hiddenClass)),o(P===!0?"navigationShow":"navigationHide"),[..._,...R].filter(V=>!!V).forEach(V=>V.classList.toggle(t.params.navigation.hiddenClass))}});const S=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),y(),p()},E=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),b()};Object.assign(t.navigation,{enable:S,disable:E,update:p,init:y,destroy:b})}function R0(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function ek(e){let{swiper:t,extendParams:i,on:a,emit:o}=e;const c="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:O=>O,formatFractionTotal:O=>O,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),t.pagination={el:null,bullets:[]};let f,p=0;function h(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function x(O,L){const{bulletActiveClass:P}=t.params.pagination;O&&(O=O[`${L==="prev"?"previous":"next"}ElementSibling`],O&&(O.classList.add(`${P}-${L}`),O=O[`${L==="prev"?"previous":"next"}ElementSibling`],O&&O.classList.add(`${P}-${L}-${L}`)))}function y(O,L,P){if(O=O%P,L=L%P,L===O+1)return"next";if(L===O-1)return"previous"}function b(O){const L=O.target.closest(R0(t.params.pagination.bulletClass));if(!L)return;O.preventDefault();const P=Qm(L)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===P)return;const V=y(t.realIndex,P,t.slides.length);V==="next"?t.slideNext():V==="previous"?t.slidePrev():t.slideToLoop(P)}else t.slideTo(P)}function S(){const O=t.rtl,L=t.params.pagination;if(h())return;let P=t.pagination.el;P=Mn(P);let V,F;const G=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,Q=t.params.loop?Math.ceil(G/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(F=t.previousRealIndex||0,V=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(V=t.snapIndex,F=t.previousSnapIndex):(F=t.previousIndex||0,V=t.activeIndex||0),L.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const ne=t.pagination.bullets;let se,de,ye;if(L.dynamicBullets&&(f=_3(ne[0],t.isHorizontal()?"width":"height"),P.forEach(Ee=>{Ee.style[t.isHorizontal()?"width":"height"]=`${f*(L.dynamicMainBullets+4)}px`}),L.dynamicMainBullets>1&&F!==void 0&&(p+=V-(F||0),p>L.dynamicMainBullets-1?p=L.dynamicMainBullets-1:p<0&&(p=0)),se=Math.max(V-p,0),de=se+(Math.min(ne.length,L.dynamicMainBullets)-1),ye=(de+se)/2),ne.forEach(Ee=>{const Oe=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(Ae=>`${L.bulletActiveClass}${Ae}`)].map(Ae=>typeof Ae=="string"&&Ae.includes(" ")?Ae.split(" "):Ae).flat();Ee.classList.remove(...Oe)}),P.length>1)ne.forEach(Ee=>{const Oe=Qm(Ee);Oe===V?Ee.classList.add(...L.bulletActiveClass.split(" ")):t.isElement&&Ee.setAttribute("part","bullet"),L.dynamicBullets&&(Oe>=se&&Oe<=de&&Ee.classList.add(...`${L.bulletActiveClass}-main`.split(" ")),Oe===se&&x(Ee,"prev"),Oe===de&&x(Ee,"next"))});else{const Ee=ne[V];if(Ee&&Ee.classList.add(...L.bulletActiveClass.split(" ")),t.isElement&&ne.forEach((Oe,Ae)=>{Oe.setAttribute("part",Ae===V?"bullet-active":"bullet")}),L.dynamicBullets){const Oe=ne[se],Ae=ne[de];for(let Z=se;Z<=de;Z+=1)ne[Z]&&ne[Z].classList.add(...`${L.bulletActiveClass}-main`.split(" "));x(Oe,"prev"),x(Ae,"next")}}if(L.dynamicBullets){const Ee=Math.min(ne.length,L.dynamicMainBullets+4),Oe=(f*Ee-f)/2-ye*f,Ae=O?"right":"left";ne.forEach(Z=>{Z.style[t.isHorizontal()?Ae:"top"]=`${Oe}px`})}}P.forEach((ne,se)=>{if(L.type==="fraction"&&(ne.querySelectorAll(R0(L.currentClass)).forEach(de=>{de.textContent=L.formatFractionCurrent(V+1)}),ne.querySelectorAll(R0(L.totalClass)).forEach(de=>{de.textContent=L.formatFractionTotal(Q)})),L.type==="progressbar"){let de;L.progressbarOpposite?de=t.isHorizontal()?"vertical":"horizontal":de=t.isHorizontal()?"horizontal":"vertical";const ye=(V+1)/Q;let Ee=1,Oe=1;de==="horizontal"?Ee=ye:Oe=ye,ne.querySelectorAll(R0(L.progressbarFillClass)).forEach(Ae=>{Ae.style.transform=`translate3d(0,0,0) scaleX(${Ee}) scaleY(${Oe})`,Ae.style.transitionDuration=`${t.params.speed}ms`})}L.type==="custom"&&L.renderCustom?(Jm(ne,L.renderCustom(t,V+1,Q)),se===0&&o("paginationRender",ne)):(se===0&&o("paginationRender",ne),o("paginationUpdate",ne)),t.params.watchOverflow&&t.enabled&&ne.classList[t.isLocked?"add":"remove"](L.lockClass)})}function E(){const O=t.params.pagination;if(h())return;const L=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let P=t.pagination.el;P=Mn(P);let V="";if(O.type==="bullets"){let F=t.params.loop?Math.ceil(L/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&F>L&&(F=L);for(let G=0;G<F;G+=1)O.renderBullet?V+=O.renderBullet.call(t,G,O.bulletClass):V+=`<${O.bulletElement} ${t.isElement?'part="bullet"':""} class="${O.bulletClass}"></${O.bulletElement}>`}O.type==="fraction"&&(O.renderFraction?V=O.renderFraction.call(t,O.currentClass,O.totalClass):V=`<span class="${O.currentClass}"></span> / <span class="${O.totalClass}"></span>`),O.type==="progressbar"&&(O.renderProgressbar?V=O.renderProgressbar.call(t,O.progressbarFillClass):V=`<span class="${O.progressbarFillClass}"></span>`),t.pagination.bullets=[],P.forEach(F=>{O.type!=="custom"&&Jm(F,V||""),O.type==="bullets"&&t.pagination.bullets.push(...F.querySelectorAll(R0(O.bulletClass)))}),O.type!=="custom"&&o("paginationRender",P[0])}function A(){t.params.pagination=Cb(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const O=t.params.pagination;if(!O.el)return;let L;typeof O.el=="string"&&t.isElement&&(L=t.el.querySelector(O.el)),!L&&typeof O.el=="string"&&(L=[...document.querySelectorAll(O.el)]),L||(L=O.el),!(!L||L.length===0)&&(t.params.uniqueNavElements&&typeof O.el=="string"&&Array.isArray(L)&&L.length>1&&(L=[...t.el.querySelectorAll(O.el)],L.length>1&&(L=L.find(P=>Sb(P,".swiper")[0]===t.el))),Array.isArray(L)&&L.length===1&&(L=L[0]),Object.assign(t.pagination,{el:L}),L=Mn(L),L.forEach(P=>{O.type==="bullets"&&O.clickable&&P.classList.add(...(O.clickableClass||"").split(" ")),P.classList.add(O.modifierClass+O.type),P.classList.add(t.isHorizontal()?O.horizontalClass:O.verticalClass),O.type==="bullets"&&O.dynamicBullets&&(P.classList.add(`${O.modifierClass}${O.type}-dynamic`),p=0,O.dynamicMainBullets<1&&(O.dynamicMainBullets=1)),O.type==="progressbar"&&O.progressbarOpposite&&P.classList.add(O.progressbarOppositeClass),O.clickable&&P.addEventListener("click",b),t.enabled||P.classList.add(O.lockClass)}))}function k(){const O=t.params.pagination;if(h())return;let L=t.pagination.el;L&&(L=Mn(L),L.forEach(P=>{P.classList.remove(O.hiddenClass),P.classList.remove(O.modifierClass+O.type),P.classList.remove(t.isHorizontal()?O.horizontalClass:O.verticalClass),O.clickable&&(P.classList.remove(...(O.clickableClass||"").split(" ")),P.removeEventListener("click",b))})),t.pagination.bullets&&t.pagination.bullets.forEach(P=>P.classList.remove(...O.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const O=t.params.pagination;let{el:L}=t.pagination;L=Mn(L),L.forEach(P=>{P.classList.remove(O.horizontalClass,O.verticalClass),P.classList.add(t.isHorizontal()?O.horizontalClass:O.verticalClass)})}),a("init",()=>{t.params.pagination.enabled===!1?R():(A(),E(),S())}),a("activeIndexChange",()=>{typeof t.snapIndex>"u"&&S()}),a("snapIndexChange",()=>{S()}),a("snapGridLengthChange",()=>{E(),S()}),a("destroy",()=>{k()}),a("enable disable",()=>{let{el:O}=t.pagination;O&&(O=Mn(O),O.forEach(L=>L.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),a("lock unlock",()=>{S()}),a("click",(O,L)=>{const P=L.target,V=Mn(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&V&&V.length>0&&!P.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&P===t.navigation.nextEl||t.navigation.prevEl&&P===t.navigation.prevEl))return;const F=V[0].classList.contains(t.params.pagination.hiddenClass);o(F===!0?"paginationShow":"paginationHide"),V.forEach(G=>G.classList.toggle(t.params.pagination.hiddenClass))}});const _=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:O}=t.pagination;O&&(O=Mn(O),O.forEach(L=>L.classList.remove(t.params.pagination.paginationDisabledClass))),A(),E(),S()},R=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:O}=t.pagination;O&&(O=Mn(O),O.forEach(L=>L.classList.add(t.params.pagination.paginationDisabledClass))),k()};Object.assign(t.pagination,{enable:_,disable:R,render:E,update:S,init:A,destroy:k})}function ba(e){let{swiper:t,extendParams:i,on:a,emit:o,params:c}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let f,p,h=c&&c.autoplay?c.autoplay.delay:3e3,x=c&&c.autoplay?c.autoplay.delay:3e3,y,b=new Date().getTime(),S,E,A,k,_,R,O;function L(ue){!t||t.destroyed||!t.wrapperEl||ue.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",L),!(O||ue.detail&&ue.detail.bySwiperTouchMove)&&se())}const P=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?S=!0:S&&(x=y,S=!1);const ue=t.autoplay.paused?y:b+x-new Date().getTime();t.autoplay.timeLeft=ue,o("autoplayTimeLeft",ue,ue/h),p=requestAnimationFrame(()=>{P()})},V=()=>{let ue;return t.virtual&&t.params.virtual.enabled?ue=t.slides.find(B=>B.classList.contains("swiper-slide-active")):ue=t.slides[t.activeIndex],ue?parseInt(ue.getAttribute("data-swiper-autoplay"),10):void 0},F=ue=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(p),P();let xe=typeof ue>"u"?t.params.autoplay.delay:ue;h=t.params.autoplay.delay,x=t.params.autoplay.delay;const B=V();!Number.isNaN(B)&&B>0&&typeof ue>"u"&&(xe=B,h=B,x=B),y=xe;const re=t.params.speed,we=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(re,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,re,!0,!0),o("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(re,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,re,!0,!0),o("autoplay")),t.params.cssMode&&(b=new Date().getTime(),requestAnimationFrame(()=>{F()})))};return xe>0?(clearTimeout(f),f=setTimeout(()=>{we()},xe)):requestAnimationFrame(()=>{we()}),xe},G=()=>{b=new Date().getTime(),t.autoplay.running=!0,F(),o("autoplayStart")},Q=()=>{t.autoplay.running=!1,clearTimeout(f),cancelAnimationFrame(p),o("autoplayStop")},ne=(ue,xe)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(f),ue||(R=!0);const B=()=>{o("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",L):se()};if(t.autoplay.paused=!0,xe){_&&(y=t.params.autoplay.delay),_=!1,B();return}y=(y||t.params.autoplay.delay)-(new Date().getTime()-b),!(t.isEnd&&y<0&&!t.params.loop)&&(y<0&&(y=0),B())},se=()=>{t.isEnd&&y<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(b=new Date().getTime(),R?(R=!1,F(y)):F(),t.autoplay.paused=!1,o("autoplayResume"))},de=()=>{if(t.destroyed||!t.autoplay.running)return;const ue=Vr();ue.visibilityState==="hidden"&&(R=!0,ne(!0)),ue.visibilityState==="visible"&&se()},ye=ue=>{ue.pointerType==="mouse"&&(R=!0,O=!0,!(t.animating||t.autoplay.paused)&&ne(!0))},Ee=ue=>{ue.pointerType==="mouse"&&(O=!1,t.autoplay.paused&&se())},Oe=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",ye),t.el.addEventListener("pointerleave",Ee))},Ae=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",ye),t.el.removeEventListener("pointerleave",Ee))},Z=()=>{Vr().addEventListener("visibilitychange",de)},le=()=>{Vr().removeEventListener("visibilitychange",de)};a("init",()=>{t.params.autoplay.enabled&&(Oe(),Z(),G())}),a("destroy",()=>{Ae(),le(),t.autoplay.running&&Q()}),a("_freeModeStaticRelease",()=>{(A||R)&&se()}),a("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?Q():ne(!0,!0)}),a("beforeTransitionStart",(ue,xe,B)=>{t.destroyed||!t.autoplay.running||(B||!t.params.autoplay.disableOnInteraction?ne(!0,!0):Q())}),a("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){Q();return}E=!0,A=!1,R=!1,k=setTimeout(()=>{R=!0,A=!0,ne(!0)},200)}}),a("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!E)){if(clearTimeout(k),clearTimeout(f),t.params.autoplay.disableOnInteraction){A=!1,E=!1;return}A&&t.params.cssMode&&se(),A=!1,E=!1}}),a("slideChange",()=>{t.destroyed||!t.autoplay.running||(_=!0)}),Object.assign(t.autoplay,{start:G,stop:Q,pause:ne,resume:se})}let Lx;function tk(){const e=bi(),t=Vr();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Tb(){return Lx||(Lx=tk()),Lx}let kx;function nk(e){let{userAgent:t}=e===void 0?{}:e;const i=Tb(),a=bi(),o=a.navigator.platform,c=t||a.navigator.userAgent,f={ios:!1,android:!1},p=a.screen.width,h=a.screen.height,x=c.match(/(Android);?[\s\/]+([\d.]+)?/);let y=c.match(/(iPad).*OS\s([\d_]+)/);const b=c.match(/(iPod)(.*OS\s([\d_]+))?/),S=!y&&c.match(/(iPhone\sOS|iOS)\s([\d_]+)/),E=o==="Win32";let A=o==="MacIntel";const k=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!y&&A&&i.touch&&k.indexOf(`${p}x${h}`)>=0&&(y=c.match(/(Version)\/([\d.]+)/),y||(y=[0,1,"13_0_0"]),A=!1),x&&!E&&(f.os="android",f.android=!0),(y||S||b)&&(f.os="ios",f.ios=!0),f}function Ab(e){return e===void 0&&(e={}),kx||(kx=nk(e)),kx}let Dx;function ik(){const e=bi(),t=Ab();let i=!1;function a(){const p=e.navigator.userAgent.toLowerCase();return p.indexOf("safari")>=0&&p.indexOf("chrome")<0&&p.indexOf("android")<0}if(a()){const p=String(e.navigator.userAgent);if(p.includes("Version/")){const[h,x]=p.split("Version/")[1].split(" ")[0].split(".").map(y=>Number(y));i=h<16||h===16&&x<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),c=a(),f=c||o&&t.ios;return{isSafari:i||c,needPerspectiveFix:i,need3dFix:f,isWebView:o}}function Eb(){return Dx||(Dx=ik()),Dx}function ak(e){let{swiper:t,on:i,emit:a}=e;const o=bi();let c=null,f=null;const p=()=>{!t||t.destroyed||!t.initialized||(a("beforeResize"),a("resize"))},h=()=>{!t||t.destroyed||!t.initialized||(c=new ResizeObserver(b=>{f=o.requestAnimationFrame(()=>{const{width:S,height:E}=t;let A=S,k=E;b.forEach(_=>{let{contentBoxSize:R,contentRect:O,target:L}=_;L&&L!==t.el||(A=O?O.width:(R[0]||R).inlineSize,k=O?O.height:(R[0]||R).blockSize)}),(A!==S||k!==E)&&p()})}),c.observe(t.el))},x=()=>{f&&o.cancelAnimationFrame(f),c&&c.unobserve&&t.el&&(c.unobserve(t.el),c=null)},y=()=>{!t||t.destroyed||!t.initialized||a("orientationchange")};i("init",()=>{if(t.params.resizeObserver&&typeof o.ResizeObserver<"u"){h();return}o.addEventListener("resize",p),o.addEventListener("orientationchange",y)}),i("destroy",()=>{x(),o.removeEventListener("resize",p),o.removeEventListener("orientationchange",y)})}function rk(e){let{swiper:t,extendParams:i,on:a,emit:o}=e;const c=[],f=bi(),p=function(y,b){b===void 0&&(b={});const S=f.MutationObserver||f.WebkitMutationObserver,E=new S(A=>{if(t.__preventObserver__)return;if(A.length===1){o("observerUpdate",A[0]);return}const k=function(){o("observerUpdate",A[0])};f.requestAnimationFrame?f.requestAnimationFrame(k):f.setTimeout(k,0)});E.observe(y,{attributes:typeof b.attributes>"u"?!0:b.attributes,childList:t.isElement||(typeof b.childList>"u"?!0:b).childList,characterData:typeof b.characterData>"u"?!0:b.characterData}),c.push(E)},h=()=>{if(t.params.observer){if(t.params.observeParents){const y=Sb(t.hostEl);for(let b=0;b<y.length;b+=1)p(y[b])}p(t.hostEl,{childList:t.params.observeSlideChildren}),p(t.wrapperEl,{attributes:!1})}},x=()=>{c.forEach(y=>{y.disconnect()}),c.splice(0,c.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",h),a("destroy",x)}var sk={on(e,t,i){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const o=i?"unshift":"push";return e.split(" ").forEach(c=>{a.eventsListeners[c]||(a.eventsListeners[c]=[]),a.eventsListeners[c][o](t)}),a},once(e,t,i){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;function o(){a.off(e,o),o.__emitterProxy&&delete o.__emitterProxy;for(var c=arguments.length,f=new Array(c),p=0;p<c;p++)f[p]=arguments[p];t.apply(a,f)}return o.__emitterProxy=t,a.on(e,o,i)},onAny(e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const a=t?"unshift":"push";return i.eventsAnyListeners.indexOf(e)<0&&i.eventsAnyListeners[a](e),i},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const i=t.eventsAnyListeners.indexOf(e);return i>=0&&t.eventsAnyListeners.splice(i,1),t},off(e,t){const i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||e.split(" ").forEach(a=>{typeof t>"u"?i.eventsListeners[a]=[]:i.eventsListeners[a]&&i.eventsListeners[a].forEach((o,c)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&i.eventsListeners[a].splice(c,1)})}),i},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,i,a;for(var o=arguments.length,c=new Array(o),f=0;f<o;f++)c[f]=arguments[f];return typeof c[0]=="string"||Array.isArray(c[0])?(t=c[0],i=c.slice(1,c.length),a=e):(t=c[0].events,i=c[0].data,a=c[0].context||e),i.unshift(a),(Array.isArray(t)?t:t.split(" ")).forEach(h=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(x=>{x.apply(a,[h,...i])}),e.eventsListeners&&e.eventsListeners[h]&&e.eventsListeners[h].forEach(x=>{x.apply(a,i)})}),e}};function ok(){const e=this;let t,i;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?i=e.params.height:i=a.clientHeight,!(t===0&&e.isHorizontal()||i===0&&e.isVertical())&&(t=t-parseInt(Ro(a,"padding-left")||0,10)-parseInt(Ro(a,"padding-right")||0,10),i=i-parseInt(Ro(a,"padding-top")||0,10)-parseInt(Ro(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(i)&&(i=0),Object.assign(e,{width:t,height:i,size:e.isHorizontal()?t:i}))}function lk(){const e=this;function t(se,de){return parseFloat(se.getPropertyValue(e.getDirectionLabel(de))||0)}const i=e.params,{wrapperEl:a,slidesEl:o,size:c,rtlTranslate:f,wrongRTL:p}=e,h=e.virtual&&i.virtual.enabled,x=h?e.virtual.slides.length:e.slides.length,y=Rr(o,`.${e.params.slideClass}, swiper-slide`),b=h?e.virtual.slides.length:y.length;let S=[];const E=[],A=[];let k=i.slidesOffsetBefore;typeof k=="function"&&(k=i.slidesOffsetBefore.call(e));let _=i.slidesOffsetAfter;typeof _=="function"&&(_=i.slidesOffsetAfter.call(e));const R=e.snapGrid.length,O=e.slidesGrid.length;let L=i.spaceBetween,P=-k,V=0,F=0;if(typeof c>"u")return;typeof L=="string"&&L.indexOf("%")>=0?L=parseFloat(L.replace("%",""))/100*c:typeof L=="string"&&(L=parseFloat(L)),e.virtualSize=-L,y.forEach(se=>{f?se.style.marginLeft="":se.style.marginRight="",se.style.marginBottom="",se.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(nm(a,"--swiper-centered-offset-before",""),nm(a,"--swiper-centered-offset-after",""));const G=i.grid&&i.grid.rows>1&&e.grid;G?e.grid.initSlides(y):e.grid&&e.grid.unsetSlides();let Q;const ne=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(se=>typeof i.breakpoints[se].slidesPerView<"u").length>0;for(let se=0;se<b;se+=1){Q=0;let de;if(y[se]&&(de=y[se]),G&&e.grid.updateSlide(se,de,y),!(y[se]&&Ro(de,"display")==="none")){if(i.slidesPerView==="auto"){ne&&(y[se].style[e.getDirectionLabel("width")]="");const ye=getComputedStyle(de),Ee=de.style.transform,Oe=de.style.webkitTransform;if(Ee&&(de.style.transform="none"),Oe&&(de.style.webkitTransform="none"),i.roundLengths)Q=e.isHorizontal()?_3(de,"width"):_3(de,"height");else{const Ae=t(ye,"width"),Z=t(ye,"padding-left"),le=t(ye,"padding-right"),ue=t(ye,"margin-left"),xe=t(ye,"margin-right"),B=ye.getPropertyValue("box-sizing");if(B&&B==="border-box")Q=Ae+ue+xe;else{const{clientWidth:re,offsetWidth:we}=de;Q=Ae+Z+le+ue+xe+(we-re)}}Ee&&(de.style.transform=Ee),Oe&&(de.style.webkitTransform=Oe),i.roundLengths&&(Q=Math.floor(Q))}else Q=(c-(i.slidesPerView-1)*L)/i.slidesPerView,i.roundLengths&&(Q=Math.floor(Q)),y[se]&&(y[se].style[e.getDirectionLabel("width")]=`${Q}px`);y[se]&&(y[se].swiperSlideSize=Q),A.push(Q),i.centeredSlides?(P=P+Q/2+V/2+L,V===0&&se!==0&&(P=P-c/2-L),se===0&&(P=P-c/2-L),Math.abs(P)<1/1e3&&(P=0),i.roundLengths&&(P=Math.floor(P)),F%i.slidesPerGroup===0&&S.push(P),E.push(P)):(i.roundLengths&&(P=Math.floor(P)),(F-Math.min(e.params.slidesPerGroupSkip,F))%e.params.slidesPerGroup===0&&S.push(P),E.push(P),P=P+Q+L),e.virtualSize+=Q+L,V=Q,F+=1}}if(e.virtualSize=Math.max(e.virtualSize,c)+_,f&&p&&(i.effect==="slide"||i.effect==="coverflow")&&(a.style.width=`${e.virtualSize+L}px`),i.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+L}px`),G&&e.grid.updateWrapperSize(Q,S),!i.centeredSlides){const se=[];for(let de=0;de<S.length;de+=1){let ye=S[de];i.roundLengths&&(ye=Math.floor(ye)),S[de]<=e.virtualSize-c&&se.push(ye)}S=se,Math.floor(e.virtualSize-c)-Math.floor(S[S.length-1])>1&&S.push(e.virtualSize-c)}if(h&&i.loop){const se=A[0]+L;if(i.slidesPerGroup>1){const de=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/i.slidesPerGroup),ye=se*i.slidesPerGroup;for(let Ee=0;Ee<de;Ee+=1)S.push(S[S.length-1]+ye)}for(let de=0;de<e.virtual.slidesBefore+e.virtual.slidesAfter;de+=1)i.slidesPerGroup===1&&S.push(S[S.length-1]+se),E.push(E[E.length-1]+se),e.virtualSize+=se}if(S.length===0&&(S=[0]),L!==0){const se=e.isHorizontal()&&f?"marginLeft":e.getDirectionLabel("marginRight");y.filter((de,ye)=>!i.cssMode||i.loop?!0:ye!==y.length-1).forEach(de=>{de.style[se]=`${L}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let se=0;A.forEach(ye=>{se+=ye+(L||0)}),se-=L;const de=se>c?se-c:0;S=S.map(ye=>ye<=0?-k:ye>de?de+_:ye)}if(i.centerInsufficientSlides){let se=0;A.forEach(ye=>{se+=ye+(L||0)}),se-=L;const de=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(se+de<c){const ye=(c-se-de)/2;S.forEach((Ee,Oe)=>{S[Oe]=Ee-ye}),E.forEach((Ee,Oe)=>{E[Oe]=Ee+ye})}}if(Object.assign(e,{slides:y,snapGrid:S,slidesGrid:E,slidesSizesGrid:A}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){nm(a,"--swiper-centered-offset-before",`${-S[0]}px`),nm(a,"--swiper-centered-offset-after",`${e.size/2-A[A.length-1]/2}px`);const se=-e.snapGrid[0],de=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(ye=>ye+se),e.slidesGrid=e.slidesGrid.map(ye=>ye+de)}if(b!==x&&e.emit("slidesLengthChange"),S.length!==R&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),E.length!==O&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!h&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const se=`${i.containerModifierClass}backface-hidden`,de=e.el.classList.contains(se);b<=i.maxBackfaceHiddenSlides?de||e.el.classList.add(se):de&&e.el.classList.remove(se)}}function ck(e){const t=this,i=[],a=t.virtual&&t.params.virtual.enabled;let o=0,c;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const f=p=>a?t.slides[t.getSlideIndexByData(p)]:t.slides[p];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(p=>{i.push(p)});else for(c=0;c<Math.ceil(t.params.slidesPerView);c+=1){const p=t.activeIndex+c;if(p>t.slides.length&&!a)break;i.push(f(p))}else i.push(f(t.activeIndex));for(c=0;c<i.length;c+=1)if(typeof i[c]<"u"){const p=i[c].offsetHeight;o=p>o?p:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function uk(){const e=this,t=e.slides,i=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-i-e.cssOverflowAdjustment()}const tw=(e,t,i)=>{t&&!e.classList.contains(i)?e.classList.add(i):!t&&e.classList.contains(i)&&e.classList.remove(i)};function dk(e){e===void 0&&(e=this&&this.translate||0);const t=this,i=t.params,{slides:a,rtlTranslate:o,snapGrid:c}=t;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let f=-e;o&&(f=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let p=i.spaceBetween;typeof p=="string"&&p.indexOf("%")>=0?p=parseFloat(p.replace("%",""))/100*t.size:typeof p=="string"&&(p=parseFloat(p));for(let h=0;h<a.length;h+=1){const x=a[h];let y=x.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(y-=a[0].swiperSlideOffset);const b=(f+(i.centeredSlides?t.minTranslate():0)-y)/(x.swiperSlideSize+p),S=(f-c[0]+(i.centeredSlides?t.minTranslate():0)-y)/(x.swiperSlideSize+p),E=-(f-y),A=E+t.slidesSizesGrid[h],k=E>=0&&E<=t.size-t.slidesSizesGrid[h],_=E>=0&&E<t.size-1||A>1&&A<=t.size||E<=0&&A>=t.size;_&&(t.visibleSlides.push(x),t.visibleSlidesIndexes.push(h)),tw(x,_,i.slideVisibleClass),tw(x,k,i.slideFullyVisibleClass),x.progress=o?-b:b,x.originalProgress=o?-S:S}}function fk(e){const t=this;if(typeof e>"u"){const y=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*y||0}const i=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:c,isEnd:f,progressLoop:p}=t;const h=c,x=f;if(a===0)o=0,c=!0,f=!0;else{o=(e-t.minTranslate())/a;const y=Math.abs(e-t.minTranslate())<1,b=Math.abs(e-t.maxTranslate())<1;c=y||o<=0,f=b||o>=1,y&&(o=0),b&&(o=1)}if(i.loop){const y=t.getSlideIndexByData(0),b=t.getSlideIndexByData(t.slides.length-1),S=t.slidesGrid[y],E=t.slidesGrid[b],A=t.slidesGrid[t.slidesGrid.length-1],k=Math.abs(e);k>=S?p=(k-S)/A:p=(k+A-E)/A,p>1&&(p-=1)}Object.assign(t,{progress:o,progressLoop:p,isBeginning:c,isEnd:f}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),c&&!h&&t.emit("reachBeginning toEdge"),f&&!x&&t.emit("reachEnd toEdge"),(h&&!c||x&&!f)&&t.emit("fromEdge"),t.emit("progress",o)}const zx=(e,t,i)=>{t&&!e.classList.contains(i)?e.classList.add(i):!t&&e.classList.contains(i)&&e.classList.remove(i)};function pk(){const e=this,{slides:t,params:i,slidesEl:a,activeIndex:o}=e,c=e.virtual&&i.virtual.enabled,f=e.grid&&i.grid&&i.grid.rows>1,p=b=>Rr(a,`.${i.slideClass}${b}, swiper-slide${b}`)[0];let h,x,y;if(c)if(i.loop){let b=o-e.virtual.slidesBefore;b<0&&(b=e.virtual.slides.length+b),b>=e.virtual.slides.length&&(b-=e.virtual.slides.length),h=p(`[data-swiper-slide-index="${b}"]`)}else h=p(`[data-swiper-slide-index="${o}"]`);else f?(h=t.find(b=>b.column===o),y=t.find(b=>b.column===o+1),x=t.find(b=>b.column===o-1)):h=t[o];h&&(f||(y=JL(h,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!y&&(y=t[0]),x=QL(h,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!x===0&&(x=t[t.length-1]))),t.forEach(b=>{zx(b,b===h,i.slideActiveClass),zx(b,b===y,i.slideNextClass),zx(b,b===x,i.slidePrevClass)}),e.emitSlidesClasses()}const Lm=(e,t)=>{if(!e||e.destroyed||!e.params)return;const i=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=t.closest(i());if(a){let o=a.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(a.shadowRoot?o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},Hx=(e,t)=>{if(!e.slides[t])return;const i=e.slides[t].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},N3=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const i=e.slides.length;if(!i||!t||t<0)return;t=Math.min(t,i);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const f=o,p=[f-t];p.push(...Array.from({length:t}).map((h,x)=>f+a+x)),e.slides.forEach((h,x)=>{p.includes(h.column)&&Hx(e,x)});return}const c=o+a-1;if(e.params.rewind||e.params.loop)for(let f=o-t;f<=c+t;f+=1){const p=(f%i+i)%i;(p<o||p>c)&&Hx(e,p)}else for(let f=Math.max(o-t,0);f<=Math.min(c+t,i-1);f+=1)f!==o&&(f>c||f<o)&&Hx(e,f)};function hk(e){const{slidesGrid:t,params:i}=e,a=e.rtlTranslate?e.translate:-e.translate;let o;for(let c=0;c<t.length;c+=1)typeof t[c+1]<"u"?a>=t[c]&&a<t[c+1]-(t[c+1]-t[c])/2?o=c:a>=t[c]&&a<t[c+1]&&(o=c+1):a>=t[c]&&(o=c);return i.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function mk(e){const t=this,i=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:o,activeIndex:c,realIndex:f,snapIndex:p}=t;let h=e,x;const y=E=>{let A=E-t.virtual.slidesBefore;return A<0&&(A=t.virtual.slides.length+A),A>=t.virtual.slides.length&&(A-=t.virtual.slides.length),A};if(typeof h>"u"&&(h=hk(t)),a.indexOf(i)>=0)x=a.indexOf(i);else{const E=Math.min(o.slidesPerGroupSkip,h);x=E+Math.floor((h-E)/o.slidesPerGroup)}if(x>=a.length&&(x=a.length-1),h===c&&!t.params.loop){x!==p&&(t.snapIndex=x,t.emit("snapIndexChange"));return}if(h===c&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=y(h);return}const b=t.grid&&o.grid&&o.grid.rows>1;let S;if(t.virtual&&o.virtual.enabled&&o.loop)S=y(h);else if(b){const E=t.slides.find(k=>k.column===h);let A=parseInt(E.getAttribute("data-swiper-slide-index"),10);Number.isNaN(A)&&(A=Math.max(t.slides.indexOf(E),0)),S=Math.floor(A/o.grid.rows)}else if(t.slides[h]){const E=t.slides[h].getAttribute("data-swiper-slide-index");E?S=parseInt(E,10):S=h}else S=h;Object.assign(t,{previousSnapIndex:p,snapIndex:x,previousRealIndex:f,realIndex:S,previousIndex:c,activeIndex:h}),t.initialized&&N3(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(f!==S&&t.emit("realIndexChange"),t.emit("slideChange"))}function gk(e,t){const i=this,a=i.params;let o=e.closest(`.${a.slideClass}, swiper-slide`);!o&&i.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(p=>{!o&&p.matches&&p.matches(`.${a.slideClass}, swiper-slide`)&&(o=p)});let c=!1,f;if(o){for(let p=0;p<i.slides.length;p+=1)if(i.slides[p]===o){c=!0,f=p;break}}if(o&&c)i.clickedSlide=o,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=f;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}a.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var xk={updateSize:ok,updateSlides:lk,updateAutoHeight:ck,updateSlidesOffset:uk,updateSlidesProgress:dk,updateProgress:fk,updateSlidesClasses:pk,updateActiveIndex:mk,updateClickedSlide:gk};function vk(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:i,rtlTranslate:a,translate:o,wrapperEl:c}=t;if(i.virtualTranslate)return a?-o:o;if(i.cssMode)return o;let f=WL(c,e);return f+=t.cssOverflowAdjustment(),a&&(f=-f),f||0}function yk(e,t){const i=this,{rtlTranslate:a,params:o,wrapperEl:c,progress:f}=i;let p=0,h=0;const x=0;i.isHorizontal()?p=a?-e:e:h=e,o.roundLengths&&(p=Math.floor(p),h=Math.floor(h)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?p:h,o.cssMode?c[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-p:-h:o.virtualTranslate||(i.isHorizontal()?p-=i.cssOverflowAdjustment():h-=i.cssOverflowAdjustment(),c.style.transform=`translate3d(${p}px, ${h}px, ${x}px)`);let y;const b=i.maxTranslate()-i.minTranslate();b===0?y=0:y=(e-i.minTranslate())/b,y!==f&&i.updateProgress(e),i.emit("setTranslate",i.translate,t)}function wk(){return-this.snapGrid[0]}function bk(){return-this.snapGrid[this.snapGrid.length-1]}function Sk(e,t,i,a,o){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),i===void 0&&(i=!0),a===void 0&&(a=!0);const c=this,{params:f,wrapperEl:p}=c;if(c.animating&&f.preventInteractionOnTransition)return!1;const h=c.minTranslate(),x=c.maxTranslate();let y;if(a&&e>h?y=h:a&&e<x?y=x:y=e,c.updateProgress(y),f.cssMode){const b=c.isHorizontal();if(t===0)p[b?"scrollLeft":"scrollTop"]=-y;else{if(!c.support.smoothScroll)return bb({swiper:c,targetPosition:-y,side:b?"left":"top"}),!0;p.scrollTo({[b?"left":"top"]:-y,behavior:"smooth"})}return!0}return t===0?(c.setTransition(0),c.setTranslate(y),i&&(c.emit("beforeTransitionStart",t,o),c.emit("transitionEnd"))):(c.setTransition(t),c.setTranslate(y),i&&(c.emit("beforeTransitionStart",t,o),c.emit("transitionStart")),c.animating||(c.animating=!0,c.onTranslateToWrapperTransitionEnd||(c.onTranslateToWrapperTransitionEnd=function(S){!c||c.destroyed||S.target===this&&(c.wrapperEl.removeEventListener("transitionend",c.onTranslateToWrapperTransitionEnd),c.onTranslateToWrapperTransitionEnd=null,delete c.onTranslateToWrapperTransitionEnd,c.animating=!1,i&&c.emit("transitionEnd"))}),c.wrapperEl.addEventListener("transitionend",c.onTranslateToWrapperTransitionEnd))),!0}var Ck={getTranslate:vk,setTranslate:yk,minTranslate:wk,maxTranslate:bk,translateTo:Sk};function Tk(e,t){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${e}ms`,i.wrapperEl.style.transitionDelay=e===0?"0ms":""),i.emit("setTransition",e,t)}function Mb(e){let{swiper:t,runCallbacks:i,direction:a,step:o}=e;const{activeIndex:c,previousIndex:f}=t;let p=a;p||(c>f?p="next":c<f?p="prev":p="reset"),t.emit(`transition${o}`),i&&p==="reset"?t.emit(`slideResetTransition${o}`):i&&c!==f&&(t.emit(`slideChangeTransition${o}`),p==="next"?t.emit(`slideNextTransition${o}`):t.emit(`slidePrevTransition${o}`))}function Ak(e,t){e===void 0&&(e=!0);const i=this,{params:a}=i;a.cssMode||(a.autoHeight&&i.updateAutoHeight(),Mb({swiper:i,runCallbacks:e,direction:t,step:"Start"}))}function Ek(e,t){e===void 0&&(e=!0);const i=this,{params:a}=i;i.animating=!1,!a.cssMode&&(i.setTransition(0),Mb({swiper:i,runCallbacks:e,direction:t,step:"End"}))}var Mk={setTransition:Tk,transitionStart:Ak,transitionEnd:Ek};function jk(e,t,i,a,o){e===void 0&&(e=0),i===void 0&&(i=!0),typeof e=="string"&&(e=parseInt(e,10));const c=this;let f=e;f<0&&(f=0);const{params:p,snapGrid:h,slidesGrid:x,previousIndex:y,activeIndex:b,rtlTranslate:S,wrapperEl:E,enabled:A}=c;if(!A&&!a&&!o||c.destroyed||c.animating&&p.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=c.params.speed);const k=Math.min(c.params.slidesPerGroupSkip,f);let _=k+Math.floor((f-k)/c.params.slidesPerGroup);_>=h.length&&(_=h.length-1);const R=-h[_];if(p.normalizeSlideIndex)for(let G=0;G<x.length;G+=1){const Q=-Math.floor(R*100),ne=Math.floor(x[G]*100),se=Math.floor(x[G+1]*100);typeof x[G+1]<"u"?Q>=ne&&Q<se-(se-ne)/2?f=G:Q>=ne&&Q<se&&(f=G+1):Q>=ne&&(f=G)}if(c.initialized&&f!==b&&(!c.allowSlideNext&&(S?R>c.translate&&R>c.minTranslate():R<c.translate&&R<c.minTranslate())||!c.allowSlidePrev&&R>c.translate&&R>c.maxTranslate()&&(b||0)!==f))return!1;f!==(y||0)&&i&&c.emit("beforeSlideChangeStart"),c.updateProgress(R);let O;f>b?O="next":f<b?O="prev":O="reset";const L=c.virtual&&c.params.virtual.enabled;if(!(L&&o)&&(S&&-R===c.translate||!S&&R===c.translate))return c.updateActiveIndex(f),p.autoHeight&&c.updateAutoHeight(),c.updateSlidesClasses(),p.effect!=="slide"&&c.setTranslate(R),O!=="reset"&&(c.transitionStart(i,O),c.transitionEnd(i,O)),!1;if(p.cssMode){const G=c.isHorizontal(),Q=S?R:-R;if(t===0)L&&(c.wrapperEl.style.scrollSnapType="none",c._immediateVirtual=!0),L&&!c._cssModeVirtualInitialSet&&c.params.initialSlide>0?(c._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{E[G?"scrollLeft":"scrollTop"]=Q})):E[G?"scrollLeft":"scrollTop"]=Q,L&&requestAnimationFrame(()=>{c.wrapperEl.style.scrollSnapType="",c._immediateVirtual=!1});else{if(!c.support.smoothScroll)return bb({swiper:c,targetPosition:Q,side:G?"left":"top"}),!0;E.scrollTo({[G?"left":"top"]:Q,behavior:"smooth"})}return!0}const F=Eb().isSafari;return L&&!o&&F&&c.isElement&&c.virtual.update(!1,!1,f),c.setTransition(t),c.setTranslate(R),c.updateActiveIndex(f),c.updateSlidesClasses(),c.emit("beforeTransitionStart",t,a),c.transitionStart(i,O),t===0?c.transitionEnd(i,O):c.animating||(c.animating=!0,c.onSlideToWrapperTransitionEnd||(c.onSlideToWrapperTransitionEnd=function(Q){!c||c.destroyed||Q.target===this&&(c.wrapperEl.removeEventListener("transitionend",c.onSlideToWrapperTransitionEnd),c.onSlideToWrapperTransitionEnd=null,delete c.onSlideToWrapperTransitionEnd,c.transitionEnd(i,O))}),c.wrapperEl.addEventListener("transitionend",c.onSlideToWrapperTransitionEnd)),!0}function Ok(e,t,i,a){e===void 0&&(e=0),i===void 0&&(i=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const c=o.grid&&o.params.grid&&o.params.grid.rows>1;let f=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)f=f+o.virtual.slidesBefore;else{let p;if(c){const S=f*o.params.grid.rows;p=o.slides.find(E=>E.getAttribute("data-swiper-slide-index")*1===S).column}else p=o.getSlideIndexByData(f);const h=c?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:x}=o.params;let y=o.params.slidesPerView;y==="auto"?y=o.slidesPerViewDynamic():(y=Math.ceil(parseFloat(o.params.slidesPerView,10)),x&&y%2===0&&(y=y+1));let b=h-p<y;if(x&&(b=b||p<Math.ceil(y/2)),a&&x&&o.params.slidesPerView!=="auto"&&!c&&(b=!1),b){const S=x?p<o.activeIndex?"prev":"next":p-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:S,slideTo:!0,activeSlideIndex:S==="next"?p+1:p-h+1,slideRealIndex:S==="next"?o.realIndex:void 0})}if(c){const S=f*o.params.grid.rows;f=o.slides.find(E=>E.getAttribute("data-swiper-slide-index")*1===S).column}else f=o.getSlideIndexByData(f)}return requestAnimationFrame(()=>{o.slideTo(f,t,i,a)}),o}function Rk(e,t,i){t===void 0&&(t=!0);const a=this,{enabled:o,params:c,animating:f}=a;if(!o||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let p=c.slidesPerGroup;c.slidesPerView==="auto"&&c.slidesPerGroup===1&&c.slidesPerGroupAuto&&(p=Math.max(a.slidesPerViewDynamic("current",!0),1));const h=a.activeIndex<c.slidesPerGroupSkip?1:p,x=a.virtual&&c.virtual.enabled;if(c.loop){if(f&&!x&&c.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&c.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+h,e,t,i)}),!0}return c.rewind&&a.isEnd?a.slideTo(0,e,t,i):a.slideTo(a.activeIndex+h,e,t,i)}function Lk(e,t,i){t===void 0&&(t=!0);const a=this,{params:o,snapGrid:c,slidesGrid:f,rtlTranslate:p,enabled:h,animating:x}=a;if(!h||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const y=a.virtual&&o.virtual.enabled;if(o.loop){if(x&&!y&&o.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const b=p?a.translate:-a.translate;function S(O){return O<0?-Math.floor(Math.abs(O)):Math.floor(O)}const E=S(b),A=c.map(O=>S(O)),k=o.freeMode&&o.freeMode.enabled;let _=c[A.indexOf(E)-1];if(typeof _>"u"&&(o.cssMode||k)){let O;c.forEach((L,P)=>{E>=L&&(O=P)}),typeof O<"u"&&(_=k?c[O]:c[O>0?O-1:O])}let R=0;if(typeof _<"u"&&(R=f.indexOf(_),R<0&&(R=a.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(R=R-a.slidesPerViewDynamic("previous",!0)+1,R=Math.max(R,0))),o.rewind&&a.isBeginning){const O=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(O,e,t,i)}else if(o.loop&&a.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{a.slideTo(R,e,t,i)}),!0;return a.slideTo(R,e,t,i)}function kk(e,t,i){t===void 0&&(t=!0);const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,i)}function Dk(e,t,i,a){t===void 0&&(t=!0),a===void 0&&(a=.5);const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let c=o.activeIndex;const f=Math.min(o.params.slidesPerGroupSkip,c),p=f+Math.floor((c-f)/o.params.slidesPerGroup),h=o.rtlTranslate?o.translate:-o.translate;if(h>=o.snapGrid[p]){const x=o.snapGrid[p],y=o.snapGrid[p+1];h-x>(y-x)*a&&(c+=o.params.slidesPerGroup)}else{const x=o.snapGrid[p-1],y=o.snapGrid[p];h-x<=(y-x)*a&&(c-=o.params.slidesPerGroup)}return c=Math.max(c,0),c=Math.min(c,o.slidesGrid.length-1),o.slideTo(c,e,t,i)}function zk(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:i}=e,a=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(e.clickedIndex),c;const f=e.isElement?"swiper-slide":`.${t.slideClass}`,p=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;c=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(c):o>(p?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),o=e.getSlideIndex(Rr(i,`${f}[data-swiper-slide-index="${c}"]`)[0]),wb(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var Hk={slideTo:jk,slideToLoop:Ok,slideNext:Rk,slidePrev:Lk,slideReset:kk,slideToClosest:Dk,slideToClickedSlide:zk};function Vk(e,t){const i=this,{params:a,slidesEl:o}=i;if(!a.loop||i.virtual&&i.params.virtual.enabled)return;const c=()=>{Rr(o,`.${a.slideClass}, swiper-slide`).forEach((E,A)=>{E.setAttribute("data-swiper-slide-index",A)})},f=()=>{const S=Rr(o,`.${a.slideBlankClass}`);S.forEach(E=>{E.remove()}),S.length>0&&(i.recalcSlides(),i.updateSlides())},p=i.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||p)&&f();const h=a.slidesPerGroup*(p?a.grid.rows:1),x=i.slides.length%h!==0,y=p&&i.slides.length%a.grid.rows!==0,b=S=>{for(let E=0;E<S;E+=1){const A=i.isElement?Km("swiper-slide",[a.slideBlankClass]):Km("div",[a.slideClass,a.slideBlankClass]);i.slidesEl.append(A)}};if(x){if(a.loopAddBlankSlides){const S=h-i.slides.length%h;b(S),i.recalcSlides(),i.updateSlides()}else Xm("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");c()}else if(y){if(a.loopAddBlankSlides){const S=a.grid.rows-i.slides.length%a.grid.rows;b(S),i.recalcSlides(),i.updateSlides()}else Xm("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");c()}else c();i.loopFix({slideRealIndex:e,direction:a.centeredSlides?void 0:"next",initial:t})}function _k(e){let{slideRealIndex:t,slideTo:i=!0,direction:a,setTranslate:o,activeSlideIndex:c,initial:f,byController:p,byMousewheel:h}=e===void 0?{}:e;const x=this;if(!x.params.loop)return;x.emit("beforeLoopFix");const{slides:y,allowSlidePrev:b,allowSlideNext:S,slidesEl:E,params:A}=x,{centeredSlides:k,initialSlide:_}=A;if(x.allowSlidePrev=!0,x.allowSlideNext=!0,x.virtual&&A.virtual.enabled){i&&(!A.centeredSlides&&x.snapIndex===0?x.slideTo(x.virtual.slides.length,0,!1,!0):A.centeredSlides&&x.snapIndex<A.slidesPerView?x.slideTo(x.virtual.slides.length+x.snapIndex,0,!1,!0):x.snapIndex===x.snapGrid.length-1&&x.slideTo(x.virtual.slidesBefore,0,!1,!0)),x.allowSlidePrev=b,x.allowSlideNext=S,x.emit("loopFix");return}let R=A.slidesPerView;R==="auto"?R=x.slidesPerViewDynamic():(R=Math.ceil(parseFloat(A.slidesPerView,10)),k&&R%2===0&&(R=R+1));const O=A.slidesPerGroupAuto?R:A.slidesPerGroup;let L=k?Math.max(O,Math.ceil(R/2)):O;L%O!==0&&(L+=O-L%O),L+=A.loopAdditionalSlides,x.loopedSlides=L;const P=x.grid&&A.grid&&A.grid.rows>1;y.length<R+L||x.params.effect==="cards"&&y.length<R+L*2?Xm("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):P&&A.grid.fill==="row"&&Xm("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const V=[],F=[],G=P?Math.ceil(y.length/A.grid.rows):y.length,Q=f&&G-_<R&&!k;let ne=Q?_:x.activeIndex;typeof c>"u"?c=x.getSlideIndex(y.find(Z=>Z.classList.contains(A.slideActiveClass))):ne=c;const se=a==="next"||!a,de=a==="prev"||!a;let ye=0,Ee=0;const Ae=(P?y[c].column:c)+(k&&typeof o>"u"?-R/2+.5:0);if(Ae<L){ye=Math.max(L-Ae,O);for(let Z=0;Z<L-Ae;Z+=1){const le=Z-Math.floor(Z/G)*G;if(P){const ue=G-le-1;for(let xe=y.length-1;xe>=0;xe-=1)y[xe].column===ue&&V.push(xe)}else V.push(G-le-1)}}else if(Ae+R>G-L){Ee=Math.max(Ae-(G-L*2),O),Q&&(Ee=Math.max(Ee,R-G+_+1));for(let Z=0;Z<Ee;Z+=1){const le=Z-Math.floor(Z/G)*G;P?y.forEach((ue,xe)=>{ue.column===le&&F.push(xe)}):F.push(le)}}if(x.__preventObserver__=!0,requestAnimationFrame(()=>{x.__preventObserver__=!1}),x.params.effect==="cards"&&y.length<R+L*2&&(F.includes(c)&&F.splice(F.indexOf(c),1),V.includes(c)&&V.splice(V.indexOf(c),1)),de&&V.forEach(Z=>{y[Z].swiperLoopMoveDOM=!0,E.prepend(y[Z]),y[Z].swiperLoopMoveDOM=!1}),se&&F.forEach(Z=>{y[Z].swiperLoopMoveDOM=!0,E.append(y[Z]),y[Z].swiperLoopMoveDOM=!1}),x.recalcSlides(),A.slidesPerView==="auto"?x.updateSlides():P&&(V.length>0&&de||F.length>0&&se)&&x.slides.forEach((Z,le)=>{x.grid.updateSlide(le,Z,x.slides)}),A.watchSlidesProgress&&x.updateSlidesOffset(),i){if(V.length>0&&de){if(typeof t>"u"){const Z=x.slidesGrid[ne],ue=x.slidesGrid[ne+ye]-Z;h?x.setTranslate(x.translate-ue):(x.slideTo(ne+Math.ceil(ye),0,!1,!0),o&&(x.touchEventsData.startTranslate=x.touchEventsData.startTranslate-ue,x.touchEventsData.currentTranslate=x.touchEventsData.currentTranslate-ue))}else if(o){const Z=P?V.length/A.grid.rows:V.length;x.slideTo(x.activeIndex+Z,0,!1,!0),x.touchEventsData.currentTranslate=x.translate}}else if(F.length>0&&se)if(typeof t>"u"){const Z=x.slidesGrid[ne],ue=x.slidesGrid[ne-Ee]-Z;h?x.setTranslate(x.translate-ue):(x.slideTo(ne-Ee,0,!1,!0),o&&(x.touchEventsData.startTranslate=x.touchEventsData.startTranslate-ue,x.touchEventsData.currentTranslate=x.touchEventsData.currentTranslate-ue))}else{const Z=P?F.length/A.grid.rows:F.length;x.slideTo(x.activeIndex-Z,0,!1,!0)}}if(x.allowSlidePrev=b,x.allowSlideNext=S,x.controller&&x.controller.control&&!p){const Z={slideRealIndex:t,direction:a,setTranslate:o,activeSlideIndex:c,byController:!0};Array.isArray(x.controller.control)?x.controller.control.forEach(le=>{!le.destroyed&&le.params.loop&&le.loopFix({...Z,slideTo:le.params.slidesPerView===A.slidesPerView?i:!1})}):x.controller.control instanceof x.constructor&&x.controller.control.params.loop&&x.controller.control.loopFix({...Z,slideTo:x.controller.control.params.slidesPerView===A.slidesPerView?i:!1})}x.emit("loopFix")}function Nk(){const e=this,{params:t,slidesEl:i}=e;if(!t.loop||!i||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(o=>{const c=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;a[c]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),a.forEach(o=>{i.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Pk={loopCreate:Vk,loopFix:_k,loopDestroy:Nk};function Bk(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const i=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Ik(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Uk={setGrabCursor:Bk,unsetGrabCursor:Ik};function $k(e,t){t===void 0&&(t=this);function i(a){if(!a||a===Vr()||a===bi())return null;a.assignedSlot&&(a=a.assignedSlot);const o=a.closest(e);return!o&&!a.getRootNode?null:o||i(a.getRootNode().host)}return i(t)}function nw(e,t,i){const a=bi(),{params:o}=e,c=o.edgeSwipeDetection,f=o.edgeSwipeThreshold;return c&&(i<=f||i>=a.innerWidth-f)?c==="prevent"?(t.preventDefault(),!0):!1:!0}function Gk(e){const t=this,i=Vr();let a=e;a.originalEvent&&(a=a.originalEvent);const o=t.touchEventsData;if(a.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==a.pointerId)return;o.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(o.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){nw(t,a,a.targetTouches[0].pageX);return}const{params:c,touches:f,enabled:p}=t;if(!p||!c.simulateTouch&&a.pointerType==="mouse"||t.animating&&c.preventInteractionOnTransition)return;!t.animating&&c.cssMode&&c.loop&&t.loopFix();let h=a.target;if(c.touchEventsTarget==="wrapper"&&!KL(h,t.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||o.isTouched&&o.isMoved)return;const x=!!c.noSwipingClass&&c.noSwipingClass!=="",y=a.composedPath?a.composedPath():a.path;x&&a.target&&a.target.shadowRoot&&y&&(h=y[0]);const b=c.noSwipingSelector?c.noSwipingSelector:`.${c.noSwipingClass}`,S=!!(a.target&&a.target.shadowRoot);if(c.noSwiping&&(S?$k(b,h):h.closest(b))){t.allowClick=!0;return}if(c.swipeHandler&&!h.closest(c.swipeHandler))return;f.currentX=a.pageX,f.currentY=a.pageY;const E=f.currentX,A=f.currentY;if(!nw(t,a,E))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),f.startX=E,f.startY=A,o.touchStartTime=Zm(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,c.threshold>0&&(o.allowThresholdMove=!1);let k=!0;h.matches(o.focusableElements)&&(k=!1,h.nodeName==="SELECT"&&(o.isTouched=!1)),i.activeElement&&i.activeElement.matches(o.focusableElements)&&i.activeElement!==h&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!h.matches(o.focusableElements))&&i.activeElement.blur();const _=k&&t.allowTouchMove&&c.touchStartPreventDefault;(c.touchStartForcePreventDefault||_)&&!h.isContentEditable&&a.preventDefault(),c.freeMode&&c.freeMode.enabled&&t.freeMode&&t.animating&&!c.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function qk(e){const t=Vr(),i=this,a=i.touchEventsData,{params:o,touches:c,rtlTranslate:f,enabled:p}=i;if(!p||!o.simulateTouch&&e.pointerType==="mouse")return;let h=e;if(h.originalEvent&&(h=h.originalEvent),h.type==="pointermove"&&(a.touchId!==null||h.pointerId!==a.pointerId))return;let x;if(h.type==="touchmove"){if(x=[...h.changedTouches].find(V=>V.identifier===a.touchId),!x||x.identifier!==a.touchId)return}else x=h;if(!a.isTouched){a.startMoving&&a.isScrolling&&i.emit("touchMoveOpposite",h);return}const y=x.pageX,b=x.pageY;if(h.preventedByNestedSwiper){c.startX=y,c.startY=b;return}if(!i.allowTouchMove){h.target.matches(a.focusableElements)||(i.allowClick=!1),a.isTouched&&(Object.assign(c,{startX:y,startY:b,currentX:y,currentY:b}),a.touchStartTime=Zm());return}if(o.touchReleaseOnEdges&&!o.loop)if(i.isVertical()){if(b<c.startY&&i.translate<=i.maxTranslate()||b>c.startY&&i.translate>=i.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(f&&(y>c.startX&&-i.translate<=i.maxTranslate()||y<c.startX&&-i.translate>=i.minTranslate()))return;if(!f&&(y<c.startX&&i.translate<=i.maxTranslate()||y>c.startX&&i.translate>=i.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==h.target&&h.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&h.target===t.activeElement&&h.target.matches(a.focusableElements)){a.isMoved=!0,i.allowClick=!1;return}a.allowTouchCallbacks&&i.emit("touchMove",h),c.previousX=c.currentX,c.previousY=c.currentY,c.currentX=y,c.currentY=b;const S=c.currentX-c.startX,E=c.currentY-c.startY;if(i.params.threshold&&Math.sqrt(S**2+E**2)<i.params.threshold)return;if(typeof a.isScrolling>"u"){let V;i.isHorizontal()&&c.currentY===c.startY||i.isVertical()&&c.currentX===c.startX?a.isScrolling=!1:S*S+E*E>=25&&(V=Math.atan2(Math.abs(E),Math.abs(S))*180/Math.PI,a.isScrolling=i.isHorizontal()?V>o.touchAngle:90-V>o.touchAngle)}if(a.isScrolling&&i.emit("touchMoveOpposite",h),typeof a.startMoving>"u"&&(c.currentX!==c.startX||c.currentY!==c.startY)&&(a.startMoving=!0),a.isScrolling||h.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;i.allowClick=!1,!o.cssMode&&h.cancelable&&h.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&h.stopPropagation();let A=i.isHorizontal()?S:E,k=i.isHorizontal()?c.currentX-c.previousX:c.currentY-c.previousY;o.oneWayMovement&&(A=Math.abs(A)*(f?1:-1),k=Math.abs(k)*(f?1:-1)),c.diff=A,A*=o.touchRatio,f&&(A=-A,k=-k);const _=i.touchesDirection;i.swipeDirection=A>0?"prev":"next",i.touchesDirection=k>0?"prev":"next";const R=i.params.loop&&!o.cssMode,O=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!a.isMoved){if(R&&O&&i.loopFix({direction:i.swipeDirection}),a.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const V=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(V)}a.allowMomentumBounce=!1,o.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",h)}if(new Date().getTime(),o._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&_!==i.touchesDirection&&R&&O&&Math.abs(A)>=1){Object.assign(c,{startX:y,startY:b,currentX:y,currentY:b,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}i.emit("sliderMove",h),a.isMoved=!0,a.currentTranslate=A+a.startTranslate;let L=!0,P=o.resistanceRatio;if(o.touchReleaseOnEdges&&(P=0),A>0?(R&&O&&a.allowThresholdMove&&a.currentTranslate>(o.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>i.minTranslate()&&(L=!1,o.resistance&&(a.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+a.startTranslate+A)**P))):A<0&&(R&&O&&a.allowThresholdMove&&a.currentTranslate<(o.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(o.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),a.currentTranslate<i.maxTranslate()&&(L=!1,o.resistance&&(a.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-a.startTranslate-A)**P))),L&&(h.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(a.currentTranslate=a.startTranslate),o.threshold>0)if(Math.abs(A)>o.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,c.startX=c.currentX,c.startY=c.currentY,a.currentTranslate=a.startTranslate,c.diff=i.isHorizontal()?c.currentX-c.startX:c.currentY-c.startY;return}}else{a.currentTranslate=a.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&i.freeMode||o.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(a.currentTranslate),i.setTranslate(a.currentTranslate))}function Yk(e){const t=this,i=t.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let o;if(a.type==="touchend"||a.type==="touchcancel"){if(o=[...a.changedTouches].find(V=>V.identifier===i.touchId),!o||o.identifier!==i.touchId)return}else{if(i.touchId!==null||a.pointerId!==i.pointerId)return;o=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return;i.pointerId=null,i.touchId=null;const{params:f,touches:p,rtlTranslate:h,slidesGrid:x,enabled:y}=t;if(!y||!f.simulateTouch&&a.pointerType==="mouse")return;if(i.allowTouchCallbacks&&t.emit("touchEnd",a),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&f.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}f.grabCursor&&i.isMoved&&i.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const b=Zm(),S=b-i.touchStartTime;if(t.allowClick){const V=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(V&&V[0]||a.target,V),t.emit("tap click",a),S<300&&b-i.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(i.lastClickTime=Zm(),wb(()=>{t.destroyed||(t.allowClick=!0)}),!i.isTouched||!i.isMoved||!t.swipeDirection||p.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let E;if(f.followFinger?E=h?t.translate:-t.translate:E=-i.currentTranslate,f.cssMode)return;if(f.freeMode&&f.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:E});return}const A=E>=-t.maxTranslate()&&!t.params.loop;let k=0,_=t.slidesSizesGrid[0];for(let V=0;V<x.length;V+=V<f.slidesPerGroupSkip?1:f.slidesPerGroup){const F=V<f.slidesPerGroupSkip-1?1:f.slidesPerGroup;typeof x[V+F]<"u"?(A||E>=x[V]&&E<x[V+F])&&(k=V,_=x[V+F]-x[V]):(A||E>=x[V])&&(k=V,_=x[x.length-1]-x[x.length-2])}let R=null,O=null;f.rewind&&(t.isBeginning?O=f.virtual&&f.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(R=0));const L=(E-x[k])/_,P=k<f.slidesPerGroupSkip-1?1:f.slidesPerGroup;if(S>f.longSwipesMs){if(!f.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(L>=f.longSwipesRatio?t.slideTo(f.rewind&&t.isEnd?R:k+P):t.slideTo(k)),t.swipeDirection==="prev"&&(L>1-f.longSwipesRatio?t.slideTo(k+P):O!==null&&L<0&&Math.abs(L)>f.longSwipesRatio?t.slideTo(O):t.slideTo(k))}else{if(!f.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(k+P):t.slideTo(k):(t.swipeDirection==="next"&&t.slideTo(R!==null?R:k+P),t.swipeDirection==="prev"&&t.slideTo(O!==null?O:k))}}function iw(){const e=this,{params:t,el:i}=e;if(i&&i.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:o,snapGrid:c}=e,f=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const p=f&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!p?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!f?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=a,e.params.watchOverflow&&c!==e.snapGrid&&e.checkOverflow()}function Fk(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Wk(){const e=this,{wrapperEl:t,rtlTranslate:i,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const c=e.maxTranslate()-e.minTranslate();c===0?o=0:o=(e.translate-e.minTranslate())/c,o!==e.progress&&e.updateProgress(i?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Zk(e){const t=this;Lm(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Xk(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const jb=(e,t)=>{const i=Vr(),{params:a,el:o,wrapperEl:c,device:f}=e,p=!!a.nested,h=t==="on"?"addEventListener":"removeEventListener",x=t;!o||typeof o=="string"||(i[h]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:p}),o[h]("touchstart",e.onTouchStart,{passive:!1}),o[h]("pointerdown",e.onTouchStart,{passive:!1}),i[h]("touchmove",e.onTouchMove,{passive:!1,capture:p}),i[h]("pointermove",e.onTouchMove,{passive:!1,capture:p}),i[h]("touchend",e.onTouchEnd,{passive:!0}),i[h]("pointerup",e.onTouchEnd,{passive:!0}),i[h]("pointercancel",e.onTouchEnd,{passive:!0}),i[h]("touchcancel",e.onTouchEnd,{passive:!0}),i[h]("pointerout",e.onTouchEnd,{passive:!0}),i[h]("pointerleave",e.onTouchEnd,{passive:!0}),i[h]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&o[h]("click",e.onClick,!0),a.cssMode&&c[h]("scroll",e.onScroll),a.updateOnWindowResize?e[x](f.ios||f.android?"resize orientationchange observerUpdate":"resize observerUpdate",iw,!0):e[x]("observerUpdate",iw,!0),o[h]("load",e.onLoad,{capture:!0}))};function Kk(){const e=this,{params:t}=e;e.onTouchStart=Gk.bind(e),e.onTouchMove=qk.bind(e),e.onTouchEnd=Yk.bind(e),e.onDocumentTouchStart=Xk.bind(e),t.cssMode&&(e.onScroll=Wk.bind(e)),e.onClick=Fk.bind(e),e.onLoad=Zk.bind(e),jb(e,"on")}function Qk(){jb(this,"off")}var Jk={attachEvents:Kk,detachEvents:Qk};const aw=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function eD(){const e=this,{realIndex:t,initialized:i,params:a,el:o}=e,c=a.breakpoints;if(!c||c&&Object.keys(c).length===0)return;const f=Vr(),p=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",h=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:f.querySelector(a.breakpointsBase),x=e.getBreakpoint(c,p,h);if(!x||e.currentBreakpoint===x)return;const b=(x in c?c[x]:void 0)||e.originalParams,S=aw(e,a),E=aw(e,b),A=e.params.grabCursor,k=b.grabCursor,_=a.enabled;S&&!E?(o.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!S&&E&&(o.classList.add(`${a.containerModifierClass}grid`),(b.grid.fill&&b.grid.fill==="column"||!b.grid.fill&&a.grid.fill==="column")&&o.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),A&&!k?e.unsetGrabCursor():!A&&k&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(F=>{if(typeof b[F]>"u")return;const G=a[F]&&a[F].enabled,Q=b[F]&&b[F].enabled;G&&!Q&&e[F].disable(),!G&&Q&&e[F].enable()});const R=b.direction&&b.direction!==a.direction,O=a.loop&&(b.slidesPerView!==a.slidesPerView||R),L=a.loop;R&&i&&e.changeDirection(),Ji(e.params,b);const P=e.params.enabled,V=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),_&&!P?e.disable():!_&&P&&e.enable(),e.currentBreakpoint=x,e.emit("_beforeBreakpoint",b),i&&(O?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!L&&V?(e.loopCreate(t),e.updateSlides()):L&&!V&&e.loopDestroy()),e.emit("breakpoint",b)}function tD(e,t,i){if(t===void 0&&(t="window"),!e||t==="container"&&!i)return;let a=!1;const o=bi(),c=t==="window"?o.innerHeight:i.clientHeight,f=Object.keys(e).map(p=>{if(typeof p=="string"&&p.indexOf("@")===0){const h=parseFloat(p.substr(1));return{value:c*h,point:p}}return{value:p,point:p}});f.sort((p,h)=>parseInt(p.value,10)-parseInt(h.value,10));for(let p=0;p<f.length;p+=1){const{point:h,value:x}=f[p];t==="window"?o.matchMedia(`(min-width: ${x}px)`).matches&&(a=h):x<=i.clientWidth&&(a=h)}return a||"max"}var nD={setBreakpoint:eD,getBreakpoint:tD};function iD(e,t){const i=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(o=>{a[o]&&i.push(t+o)}):typeof a=="string"&&i.push(t+a)}),i}function aD(){const e=this,{classNames:t,params:i,rtl:a,el:o,device:c}=e,f=iD(["initialized",i.direction,{"free-mode":e.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:a},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:c.android},{ios:c.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);t.push(...f),o.classList.add(...t),e.emitContainerClasses()}function rD(){const e=this,{el:t,classNames:i}=e;!t||typeof t=="string"||(t.classList.remove(...i),e.emitContainerClasses())}var sD={addClasses:aD,removeClasses:rD};function oD(){const e=this,{isLocked:t,params:i}=e,{slidesOffsetBefore:a}=i;if(a){const o=e.slides.length-1,c=e.slidesGrid[o]+e.slidesSizesGrid[o]+a*2;e.isLocked=e.size>c}else e.isLocked=e.snapGrid.length===1;i.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),i.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var lD={checkOverflow:oD},P3={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function cD(e,t){return function(a){a===void 0&&(a={});const o=Object.keys(a)[0],c=a[o];if(typeof c!="object"||c===null){Ji(t,a);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in c)){Ji(t,a);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),Ji(t,a)}}const Vx={eventsEmitter:sk,update:xk,translate:Ck,transition:Mk,slide:Hk,loop:Pk,grabCursor:Uk,events:Jk,breakpoints:nD,checkOverflow:lD,classes:sD},_x={};let ny=class gs{constructor(){let t,i;for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?i=o[0]:[t,i]=o,i||(i={}),i=Ji({},i),t&&!i.el&&(i.el=t);const f=Vr();if(i.el&&typeof i.el=="string"&&f.querySelectorAll(i.el).length>1){const y=[];return f.querySelectorAll(i.el).forEach(b=>{const S=Ji({},i,{el:b});y.push(new gs(S))}),y}const p=this;p.__swiper__=!0,p.support=Tb(),p.device=Ab({userAgent:i.userAgent}),p.browser=Eb(),p.eventsListeners={},p.eventsAnyListeners=[],p.modules=[...p.__modules__],i.modules&&Array.isArray(i.modules)&&p.modules.push(...i.modules);const h={};p.modules.forEach(y=>{y({params:i,swiper:p,extendParams:cD(i,h),on:p.on.bind(p),once:p.once.bind(p),off:p.off.bind(p),emit:p.emit.bind(p)})});const x=Ji({},P3,h);return p.params=Ji({},x,_x,i),p.originalParams=Ji({},p.params),p.passedParams=Ji({},i),p.params&&p.params.on&&Object.keys(p.params.on).forEach(y=>{p.on(y,p.params.on[y])}),p.params&&p.params.onAny&&p.onAny(p.params.onAny),Object.assign(p,{enabled:p.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return p.params.direction==="horizontal"},isVertical(){return p.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:p.params.allowSlideNext,allowSlidePrev:p.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:p.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:p.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),p.emit("_swiper"),p.params.init&&p.init(),p}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:i,params:a}=this,o=Rr(i,`.${a.slideClass}, swiper-slide`),c=Qm(o[0]);return Qm(t)-c}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(i=>i.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:i,params:a}=t;t.slides=Rr(i,`.${a.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,i){const a=this;t=Math.min(Math.max(t,0),1);const o=a.minTranslate(),f=(a.maxTranslate()-o)*t+o;a.translateTo(f,typeof i>"u"?0:i),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const i=t.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",i.join(" "))}getSlideClasses(t){const i=this;return i.destroyed?"":t.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const i=[];t.slides.forEach(a=>{const o=t.getSlideClasses(a);i.push({slideEl:a,classNames:o}),t.emit("_slideClass",a,o)}),t.emit("_slideClasses",i)}slidesPerViewDynamic(t,i){t===void 0&&(t="current"),i===void 0&&(i=!1);const a=this,{params:o,slides:c,slidesGrid:f,slidesSizesGrid:p,size:h,activeIndex:x}=a;let y=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let b=c[x]?Math.ceil(c[x].swiperSlideSize):0,S;for(let E=x+1;E<c.length;E+=1)c[E]&&!S&&(b+=Math.ceil(c[E].swiperSlideSize),y+=1,b>h&&(S=!0));for(let E=x-1;E>=0;E-=1)c[E]&&!S&&(b+=c[E].swiperSlideSize,y+=1,b>h&&(S=!0))}else if(t==="current")for(let b=x+1;b<c.length;b+=1)(i?f[b]+p[b]-f[x]<h:f[b]-f[x]<h)&&(y+=1);else for(let b=x-1;b>=0;b-=1)f[x]-f[b]<h&&(y+=1);return y}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:i,params:a}=t;a.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(f=>{f.complete&&Lm(t,f)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const f=t.rtlTranslate?t.translate*-1:t.translate,p=Math.min(Math.max(f,t.maxTranslate()),t.minTranslate());t.setTranslate(p),t.updateActiveIndex(),t.updateSlidesClasses()}let c;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)o(),a.autoHeight&&t.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&t.isEnd&&!a.centeredSlides){const f=t.virtual&&a.virtual.enabled?t.virtual.slides:t.slides;c=t.slideTo(f.length-1,0,!1,!0)}else c=t.slideTo(t.activeIndex,0,!1,!0);c||o()}a.watchOverflow&&i!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,i){i===void 0&&(i=!0);const a=this,o=a.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${o}`),a.el.classList.add(`${a.params.containerModifierClass}${t}`),a.emitContainerClasses(),a.params.direction=t,a.slides.forEach(c=>{t==="vertical"?c.style.width="":c.style.height=""}),a.emit("changeDirection"),i&&a.update()),a}changeLanguageDirection(t){const i=this;i.rtl&&t==="rtl"||!i.rtl&&t==="ltr"||(i.rtl=t==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(t){const i=this;if(i.mounted)return!0;let a=t||i.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=i,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const o=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let f=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(o()):Rr(a,o())[0];return!f&&i.params.createElements&&(f=Km("div",i.params.wrapperClass),a.append(f),Rr(a,`.${i.params.slideClass}`).forEach(p=>{f.append(p)})),Object.assign(i,{el:a,wrapperEl:f,slidesEl:i.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:f,hostEl:i.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||Ro(a,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||Ro(a,"direction")==="rtl"),wrongRTL:Ro(f,"display")==="-webkit-box"}),!0}init(t){const i=this;if(i.initialized||i.mount(t)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(void 0,!0),i.attachEvents();const o=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&o.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(c=>{c.complete?Lm(i,c):c.addEventListener("load",f=>{Lm(i,f.target)})}),N3(i),i.initialized=!0,N3(i),i.emit("init"),i.emit("afterInit"),i}destroy(t,i){t===void 0&&(t=!0),i===void 0&&(i=!0);const a=this,{params:o,el:c,wrapperEl:f,slides:p}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),o.loop&&a.loopDestroy(),i&&(a.removeClasses(),c&&typeof c!="string"&&c.removeAttribute("style"),f&&f.removeAttribute("style"),p&&p.length&&p.forEach(h=>{h.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),h.removeAttribute("style"),h.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(h=>{a.off(h)}),t!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),YL(a)),a.destroyed=!0),null}static extendDefaults(t){Ji(_x,t)}static get extendedDefaults(){return _x}static get defaults(){return P3}static installModule(t){gs.prototype.__modules__||(gs.prototype.__modules__=[]);const i=gs.prototype.__modules__;typeof t=="function"&&i.indexOf(t)<0&&i.push(t)}static use(t){return Array.isArray(t)?(t.forEach(i=>gs.installModule(i)),gs):(gs.installModule(t),gs)}};Object.keys(Vx).forEach(e=>{Object.keys(Vx[e]).forEach(t=>{ny.prototype[t]=Vx[e][t]})});ny.use([ak,rk]);const Ob=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function oc(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function rd(e,t){const i=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>i.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:oc(t[a])&&oc(e[a])&&Object.keys(t[a]).length>0?t[a].__swiper__?e[a]=t[a]:rd(e[a],t[a]):e[a]=t[a]})}function Rb(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Lb(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function kb(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Db(e){e===void 0&&(e="");const t=e.split(" ").map(a=>a.trim()).filter(a=>!!a),i=[];return t.forEach(a=>{i.indexOf(a)<0&&i.push(a)}),i.join(" ")}function uD(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function dD(e){let{swiper:t,slides:i,passedParams:a,changedParams:o,nextEl:c,prevEl:f,scrollbarEl:p,paginationEl:h}=e;const x=o.filter(ne=>ne!=="children"&&ne!=="direction"&&ne!=="wrapperClass"),{params:y,pagination:b,navigation:S,scrollbar:E,virtual:A,thumbs:k}=t;let _,R,O,L,P,V,F,G;o.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&!a.thumbs.swiper.destroyed&&y.thumbs&&(!y.thumbs.swiper||y.thumbs.swiper.destroyed)&&(_=!0),o.includes("controller")&&a.controller&&a.controller.control&&y.controller&&!y.controller.control&&(R=!0),o.includes("pagination")&&a.pagination&&(a.pagination.el||h)&&(y.pagination||y.pagination===!1)&&b&&!b.el&&(O=!0),o.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||p)&&(y.scrollbar||y.scrollbar===!1)&&E&&!E.el&&(L=!0),o.includes("navigation")&&a.navigation&&(a.navigation.prevEl||f)&&(a.navigation.nextEl||c)&&(y.navigation||y.navigation===!1)&&S&&!S.prevEl&&!S.nextEl&&(P=!0);const Q=ne=>{t[ne]&&(t[ne].destroy(),ne==="navigation"?(t.isElement&&(t[ne].prevEl.remove(),t[ne].nextEl.remove()),y[ne].prevEl=void 0,y[ne].nextEl=void 0,t[ne].prevEl=void 0,t[ne].nextEl=void 0):(t.isElement&&t[ne].el.remove(),y[ne].el=void 0,t[ne].el=void 0))};o.includes("loop")&&t.isElement&&(y.loop&&!a.loop?V=!0:!y.loop&&a.loop?F=!0:G=!0),x.forEach(ne=>{if(oc(y[ne])&&oc(a[ne]))Object.assign(y[ne],a[ne]),(ne==="navigation"||ne==="pagination"||ne==="scrollbar")&&"enabled"in a[ne]&&!a[ne].enabled&&Q(ne);else{const se=a[ne];(se===!0||se===!1)&&(ne==="navigation"||ne==="pagination"||ne==="scrollbar")?se===!1&&Q(ne):y[ne]=a[ne]}}),x.includes("controller")&&!R&&t.controller&&t.controller.control&&y.controller&&y.controller.control&&(t.controller.control=y.controller.control),o.includes("children")&&i&&A&&y.virtual.enabled?(A.slides=i,A.update(!0)):o.includes("virtual")&&A&&y.virtual.enabled&&(i&&(A.slides=i),A.update(!0)),o.includes("children")&&i&&y.loop&&(G=!0),_&&k.init()&&k.update(!0),R&&(t.controller.control=y.controller.control),O&&(t.isElement&&(!h||typeof h=="string")&&(h=document.createElement("div"),h.classList.add("swiper-pagination"),h.part.add("pagination"),t.el.appendChild(h)),h&&(y.pagination.el=h),b.init(),b.render(),b.update()),L&&(t.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-scrollbar"),p.part.add("scrollbar"),t.el.appendChild(p)),p&&(y.scrollbar.el=p),E.init(),E.updateSize(),E.setTranslate()),P&&(t.isElement&&((!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-button-next"),Jm(c,t.hostEl.constructor.nextButtonSvg),c.part.add("button-next"),t.el.appendChild(c)),(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-button-prev"),Jm(f,t.hostEl.constructor.prevButtonSvg),f.part.add("button-prev"),t.el.appendChild(f))),c&&(y.navigation.nextEl=c),f&&(y.navigation.prevEl=f),S.init(),S.update()),o.includes("allowSlideNext")&&(t.allowSlideNext=a.allowSlideNext),o.includes("allowSlidePrev")&&(t.allowSlidePrev=a.allowSlidePrev),o.includes("direction")&&t.changeDirection(a.direction,!1),(V||G)&&t.loopDestroy(),(F||G)&&t.loopCreate(),t.update()}function fD(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const i={on:{}},a={},o={};rd(i,P3),i._emitClasses=!0,i.init=!1;const c={},f=Ob.map(h=>h.replace(/_/,"")),p=Object.assign({},e);return Object.keys(p).forEach(h=>{typeof e[h]>"u"||(f.indexOf(h)>=0?oc(e[h])?(i[h]={},o[h]={},rd(i[h],e[h]),rd(o[h],e[h])):(i[h]=e[h],o[h]=e[h]):h.search(/on[A-Z]/)===0&&typeof e[h]=="function"?t?a[`${h[2].toLowerCase()}${h.substr(3)}`]=e[h]:i.on[`${h[2].toLowerCase()}${h.substr(3)}`]=e[h]:c[h]=e[h])}),["navigation","pagination","scrollbar"].forEach(h=>{i[h]===!0&&(i[h]={}),i[h]===!1&&delete i[h]}),{params:i,passedParams:o,rest:c,events:a}}function pD(e,t){let{el:i,nextEl:a,prevEl:o,paginationEl:c,scrollbarEl:f,swiper:p}=e;Rb(t)&&a&&o&&(p.params.navigation.nextEl=a,p.originalParams.navigation.nextEl=a,p.params.navigation.prevEl=o,p.originalParams.navigation.prevEl=o),Lb(t)&&c&&(p.params.pagination.el=c,p.originalParams.pagination.el=c),kb(t)&&f&&(p.params.scrollbar.el=f,p.originalParams.scrollbar.el=f),p.init(i)}function hD(e,t,i,a,o){const c=[];if(!t)return c;const f=h=>{c.indexOf(h)<0&&c.push(h)};if(i&&a){const h=a.map(o),x=i.map(o);h.join("")!==x.join("")&&f("children"),a.length!==i.length&&f("children")}return Ob.filter(h=>h[0]==="_").map(h=>h.replace(/_/,"")).forEach(h=>{if(h in e&&h in t)if(oc(e[h])&&oc(t[h])){const x=Object.keys(e[h]),y=Object.keys(t[h]);x.length!==y.length?f(h):(x.forEach(b=>{e[h][b]!==t[h][b]&&f(h)}),y.forEach(b=>{e[h][b]!==t[h][b]&&f(h)}))}else e[h]!==t[h]&&f(h)}),c}const mD=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function e2(){return e2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},e2.apply(this,arguments)}function zb(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Hb(e){const t=[];return At.Children.toArray(e).forEach(i=>{zb(i)?t.push(i):i.props&&i.props.children&&Hb(i.props.children).forEach(a=>t.push(a))}),t}function gD(e){const t=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return At.Children.toArray(e).forEach(a=>{if(zb(a))t.push(a);else if(a.props&&a.props.slot&&i[a.props.slot])i[a.props.slot].push(a);else if(a.props&&a.props.children){const o=Hb(a.props.children);o.length>0?o.forEach(c=>t.push(c)):i["container-end"].push(a)}else i["container-end"].push(a)}),{slides:t,slots:i}}function xD(e,t,i){if(!i)return null;const a=y=>{let b=y;return y<0?b=t.length+y:b>=t.length&&(b=b-t.length),b},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`},{from:c,to:f}=i,p=e.params.loop?-t.length:0,h=e.params.loop?t.length*2:t.length,x=[];for(let y=p;y<h;y+=1)y>=c&&y<=f&&x.push(t[a(y)]);return x.map((y,b)=>At.cloneElement(y,{swiper:e,style:o,key:y.props.virtualIndex||y.key||`slide-${b}`}))}function U0(e,t){return typeof window>"u"?N.useEffect(e,t):N.useLayoutEffect(e,t)}const rw=N.createContext(null),vD=N.createContext(null),ta=N.forwardRef(function(e,t){let{className:i,tag:a="div",wrapperTag:o="div",children:c,onSwiper:f,...p}=e===void 0?{}:e,h=!1;const[x,y]=N.useState("swiper"),[b,S]=N.useState(null),[E,A]=N.useState(!1),k=N.useRef(!1),_=N.useRef(null),R=N.useRef(null),O=N.useRef(null),L=N.useRef(null),P=N.useRef(null),V=N.useRef(null),F=N.useRef(null),G=N.useRef(null),{params:Q,passedParams:ne,rest:se,events:de}=fD(p),{slides:ye,slots:Ee}=gD(c),Oe=()=>{A(!E)};Object.assign(Q.on,{_containerClasses(xe,B){y(B)}});const Ae=()=>{Object.assign(Q.on,de),h=!0;const xe={...Q};if(delete xe.wrapperClass,R.current=new ny(xe),R.current.virtual&&R.current.params.virtual.enabled){R.current.virtual.slides=ye;const B={cache:!1,slides:ye,renderExternal:S,renderExternalUpdate:!1};rd(R.current.params.virtual,B),rd(R.current.originalParams.virtual,B)}};_.current||Ae(),R.current&&R.current.on("_beforeBreakpoint",Oe);const Z=()=>{h||!de||!R.current||Object.keys(de).forEach(xe=>{R.current.on(xe,de[xe])})},le=()=>{!de||!R.current||Object.keys(de).forEach(xe=>{R.current.off(xe,de[xe])})};N.useEffect(()=>()=>{R.current&&R.current.off("_beforeBreakpoint",Oe)}),N.useEffect(()=>{!k.current&&R.current&&(R.current.emitSlidesClasses(),k.current=!0)}),U0(()=>{if(t&&(t.current=_.current),!!_.current)return R.current.destroyed&&Ae(),pD({el:_.current,nextEl:P.current,prevEl:V.current,paginationEl:F.current,scrollbarEl:G.current,swiper:R.current},Q),f&&!R.current.destroyed&&f(R.current),()=>{R.current&&!R.current.destroyed&&R.current.destroy(!0,!1)}},[]),U0(()=>{Z();const xe=hD(ne,O.current,ye,L.current,B=>B.key);return O.current=ne,L.current=ye,xe.length&&R.current&&!R.current.destroyed&&dD({swiper:R.current,slides:ye,passedParams:ne,changedParams:xe,nextEl:P.current,prevEl:V.current,scrollbarEl:G.current,paginationEl:F.current}),()=>{le()}}),U0(()=>{mD(R.current)},[b]);function ue(){return Q.virtual?xD(R.current,ye,b):ye.map((xe,B)=>At.cloneElement(xe,{swiper:R.current,swiperSlideIndex:B}))}return At.createElement(a,e2({ref:_,className:Db(`${x}${i?` ${i}`:""}`)},se),At.createElement(vD.Provider,{value:R.current},Ee["container-start"],At.createElement(o,{className:uD(Q.wrapperClass)},Ee["wrapper-start"],ue(),Ee["wrapper-end"]),Rb(Q)&&At.createElement(At.Fragment,null,At.createElement("div",{ref:V,className:"swiper-button-prev"}),At.createElement("div",{ref:P,className:"swiper-button-next"})),kb(Q)&&At.createElement("div",{ref:G,className:"swiper-scrollbar"}),Lb(Q)&&At.createElement("div",{ref:F,className:"swiper-pagination"}),Ee["container-end"]))});ta.displayName="Swiper";const na=N.forwardRef(function(e,t){let{tag:i="div",children:a,className:o="",swiper:c,zoom:f,lazy:p,virtualIndex:h,swiperSlideIndex:x,...y}=e===void 0?{}:e;const b=N.useRef(null),[S,E]=N.useState("swiper-slide"),[A,k]=N.useState(!1);function _(P,V,F){V===b.current&&E(F)}U0(()=>{if(typeof x<"u"&&(b.current.swiperSlideIndex=x),t&&(t.current=b.current),!(!b.current||!c)){if(c.destroyed){S!=="swiper-slide"&&E("swiper-slide");return}return c.on("_slideClass",_),()=>{c&&c.off("_slideClass",_)}}}),U0(()=>{c&&b.current&&!c.destroyed&&E(c.getSlideClasses(b.current))},[c]);const R={isActive:S.indexOf("swiper-slide-active")>=0,isVisible:S.indexOf("swiper-slide-visible")>=0,isPrev:S.indexOf("swiper-slide-prev")>=0,isNext:S.indexOf("swiper-slide-next")>=0},O=()=>typeof a=="function"?a(R):a,L=()=>{k(!0)};return At.createElement(i,e2({ref:b,className:Db(`${S}${o?` ${o}`:""}`),"data-swiper-slide-index":h,onLoad:L},y),f&&At.createElement(rw.Provider,{value:R},At.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof f=="number"?f:void 0},O(),p&&!A&&At.createElement("div",{className:"swiper-lazy-preloader"}))),!f&&At.createElement(rw.Provider,{value:R},O(),p&&!A&&At.createElement("div",{className:"swiper-lazy-preloader"})))});na.displayName="SwiperSlide";const yD=T(ta)`
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
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1); // Плавна анімація
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    transition: all 0.3s ease; // Зменшено час анімації
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
`,wD=T(na)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: all 0.3s ease; // Зменшено час анімації

  @media screen and (min-width: 1440px) {
    width: ${e=>e.$isActive?"898px":"437px"} !important;
    height: ${e=>e.$isActive?"100%":"285px"} !important;
    opacity: ${e=>e.$isActive?1:e.$index===0||e.$index===4?.6:.8};
    transform: ${e=>{if(e.$isActive)return"scale(1)";switch(Math.abs(e.$index-2)){case 1:return e.$index<2?"translateX(-100px) scale(0.9)":"translateX(100px) scale(0.9)";case 2:return e.$index<2?"translateX(-200px) scale(0.8)":"translateX(200px) scale(0.8)";default:return"scale(0.9)"}}};
    z-index: ${e=>e.$isActive?10:10-Math.abs(e.$index-2)};
  }
`,bD=T.section`
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
`,SD=T.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`,sw=T.button`
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #dbdbd8;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background-color: #3098ee;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(48, 152, 238, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: 2px solid #3098ee;
    outline-offset: 2px;
    background-color: #3098ee;
  }

  // Медіа-запити
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }

  @media screen and (min-width: 1440px) {
    width: 48px;
    height: 48px;
  }
`,CD=T.div`
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
`,TD=T.p`
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
`,AD=T.p`
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
`,ED=T.img`
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
`;T.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.button`
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
`;const MD=T.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${e=>e.$isActive?"898px":"437px"};
    height: ${e=>e.$isActive?"500px":"285px"};
  }
`,jD=T.div`
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
`,OD=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,RD=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  position: relative;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const ow=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  opacity: ${e=>e.$isActive?1:.7};
  transform: ${e=>e.$isActive?"translateY(0)":"translateY(5px)"};
  transition: all 0.2s ease; // CSS transition замість Framer Motion
`,LD=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,kD=T.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  opacity: ${e=>e.$isActive?1:.8};
  transform: ${e=>e.$isActive?"translateY(0)":"translateY(5px)"};
  transition: all 0.2s ease; // CSS transition замість Framer Motion
`,DD=T.div`
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
`,zD="/assets/7%20(2)-PHJQ-7cM.webp",lw="/assets/Review%20Image%201-BysFOq9G.png",HD="/assets/8%20(2)-BRWfPPjA.webp",VD="/assets/9%20(2)-DAXPled0.webp",_D="/assets/5-DsbgTq2M.webp",ND="/assets/10%20(2)-BmXy065z.webp",PD="/assets/6%20(2)-BkK4aRcX.webp",BD=sA`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }
  
  /* Усунення горизонтального скролу на iOS */
  @supports (-webkit-touch-callout: none) {
    body {
      position: fixed;
      width: 100%;
      height: 100%;
    }
  }
`,ID=T.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 2rem;
  padding: 0 1rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media screen and (min-width: 1440px) {
    max-width: 90rem;
    margin: 0 auto 3rem;
    padding: 0 2rem;
  }
`,UD=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    gap: 1rem;
  }
`,$D=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
  transition: all 0.2s ease;
  margin: 0;

  /* Покращена доступність для тач-пристроїв */
  -webkit-tap-highlight-color: transparent;

  &:active {
    color: var(--blue-500);
    transform: translateY(-1px);
  }

  @media screen and (min-width: 768px) {
    font-size: 0.875rem;
  }
`,GD=T.h3`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 90%;
  text-align: center;
  color: var(--black-500);
  transition: all 0.2s ease;
  margin: 0;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 4.5rem;
  }

  @media screen and (min-width: 1440px) {
    max-width: 80rem;
  }
`,Vb=T.span`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 90%;
  text-align: center;
  color: var(--blue-500);
  transition: all 0.2s ease;

  &:active {
    color: var(--purple-400);
    transform: translateY(-1px);
  }

  @media screen and (min-width: 768px) {
    font-size: 4.5rem;
  }
`,qD=T.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 100%;
  color: var(--blue-500);
  transition: all 0.2s ease;
  margin: 0;

  /* Покращена доступність для тач-пристроїв */
  -webkit-tap-highlight-color: transparent;

  &:active {
    color: var(--purple-400);
    transform: translateY(-1px);
  }

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`,YD=T.div`
  position: relative;
  border-radius: 0.25rem;
  width: 100%;
  max-width: 20rem;
  overflow: visible;
  background: transparent;
  z-index: 1;
  margin: 0;

  .swiper {
    width: 100%;
    height: 100%;
    padding: 0.5rem 0;
    overflow: visible;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease;
    height: auto;

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
  }

  .swiper-pagination {
    bottom: 0.5rem !important;
  }

  .swiper-pagination-bullet {
    background: #3098ee;
    opacity: 1;
    transition: all 0.2s ease;
    width: 0.5rem;
    height: 0.5rem;
    margin: 0 0.25rem;

    /* Покращена доступність для тач-пристроїв */
    -webkit-tap-highlight-color: transparent;
    min-width: 0.75rem;
    min-height: 0.75rem;

    &:active {
      background: var(--purple-400);
      transform: scale(1.2);
    }
  }

  .swiper-pagination-bullet-active {
    background: #005fa3;
    width: 1rem;

    &:active {
      background: var(--purple-500);
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 47.5rem;
  }

  @media screen and (min-width: 1440px) {
    max-width: 90rem;
  }
`,FD=T.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem 0.75rem;
  gap: 0.75rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  width: 100%;
  height: 22rem;
  margin: 0 0.25rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  align-items: center;
  transition: all 0.2s ease;

  /* Покращена доступність для тач-пристроїв */
  -webkit-tap-highlight-color: transparent;

  .overlay {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 0.25rem;
    margin: 0.375rem;
    padding: 0.625rem;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: calc(100% - 0.75rem);
    transition: all 0.2s ease;
    backdrop-filter: blur(4px);
  }

  .slide-text {
    color: #242424;
    font-family: 'Geist', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25em;
    padding-bottom: 1.25rem;
    transition: all 0.2s ease;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    height: 25rem;
    padding: 1.25rem 1rem;

    .overlay {
      margin: 0.5rem;
      padding: 1rem;
      width: calc(100% - 1rem);
    }

    .slide-text {
      font-size: 1rem;
    }
  }
`,WD=T(FD)`
  ${e=>e.$isLargeDesktop&&`
    margin: 0;
    transition: all 0.2s ease;
    
    .overlay {
      margin-bottom: 5%;
    }
  `}
`,ZD=T.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 0.5rem;
`,XD=T.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  padding-bottom: 0.875rem;
  transition: all 0.2s ease;
  flex-shrink: 0;

  /* Покращена доступність для тач-пристроїв */
  -webkit-tap-highlight-color: transparent;

  .icon-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:active {
    transform: scale(1.1) rotate(5deg);
  }

  @media screen and (min-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,KD=T.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25em;
  padding-bottom: 1.25rem;
  transition: all 0.2s ease;
  margin: 0;

  /* Покращена доступність для тач-пристроїв */
  -webkit-tap-highlight-color: transparent;

  &:active {
    color: var(--blue-500);
    transform: translateY(-1px);
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`,QD=T.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    max-width: 90rem;
  }
`;function _b(){const[e,t]=N.useState(null),[i,a]=N.useState(0),o=N.useRef(null),c=N.useRef(null),f=()=>{e&&e.slidePrev()},p=()=>{e&&e.slideNext()},h=[{image:zD,description:"A broken washing machine that stopped mid-cycle was fully restored by our team in just one visit. The family can now enjoy clean laundry again without stress.",title:"Quick Fix for a Washing Machine Breakdown",type:"Washing Machine Repair"},{image:HD,description:"We installed a brand-new dishwasher for a busy household, ensuring proper water connections and energy efficiency. The client now saves both time and water daily.",title:"Professional Dishwasher Installation",type:"Dishwasher Installation"},{image:_D,description:"A fridge that was leaking water and not cooling properly was diagnosed and repaired. The customer avoided costly food spoilage and gained reliable performance again.",title:"Refrigerator Leak and Cooling Repair",type:"Refrigerator Repair"},{image:PD,description:"The dryer was overheating and shutting down after a few minutes. Our experts replaced faulty parts and cleaned the vent system, restoring safe and efficient drying.",title:"Dryer Overheating Problem Solved",type:"Dryer Repair"},{image:lw,description:"An oven that wouldn't heat evenly was repaired by recalibrating the thermostat and replacing heating elements. The family can now cook meals perfectly again.",title:"Oven Heating Restored for Perfect Meals",type:"Oven Repair"},{image:ND,description:"We handled a complete installation of a modern washing machine, ensuring proper setup, water connection, and vibration-free operation.",title:"Seamless Washing Machine Installation",type:"Washing Machine Installation"},{image:VD,description:"A freezer full of food was saved when we quickly repaired the compressor and restored full cooling capacity within hours.",title:"Emergency Freezer Repair",type:"Freezer Repair"},{image:lw,description:"A customer's stove stopped working during family dinner preparation. Our team replaced defective wiring and burners, restoring it the same day.",title:"Stove Emergency Fixed Same Day",type:"Stove Repair"}];return m.jsxs(bD,{children:[m.jsxs(CD,{children:[m.jsx(TD,{children:"Our Cases"}),m.jsxs(AD,{children:[m.jsx(Vb,{children:"Success Stories "})," That Bring Your Appliances Back to Life"]})]}),m.jsx(DD,{children:m.jsx(yD,{modules:[ba],spaceBetween:20,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},speed:800,onSwiper:t,onSlideChange:x=>a(x.realIndex),breakpoints:{1440:{slidesPerView:6,spaceBetween:30,centeredSlides:!0}},touchStartPreventDefault:!1,allowTouchMove:!0,resistance:!0,resistanceRatio:.85,children:h.map(({image:x,description:y,title:b,type:S},E)=>m.jsx(wD,{$isActive:i===E,$index:E,children:m.jsxs(MD,{$isActive:i===E,$index:E,children:[m.jsx(ED,{src:x,alt:S,$isActive:i===E,$index:E}),m.jsx(jD,{$isActive:i===E,$index:E,children:m.jsxs(OD,{children:[m.jsx(RD,{children:m.jsx(ow,{$isActive:i===E,children:y})}),m.jsxs(LD,{children:[m.jsx(kD,{$isActive:i===E,children:b}),m.jsx(ow,{$isActive:i===E,children:S})]})]})})]})},E))})}),m.jsxs(SD,{children:[m.jsx(sw,{ref:o,onClick:f,"aria-label":"Previous slide",children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),m.jsx(sw,{ref:c,onClick:p,"aria-label":"Next slide",children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})}const JD=(e,t,i,a)=>{var c,f,p,h;const o=[i,{code:t,...a||{}}];if((f=(c=e==null?void 0:e.services)==null?void 0:c.logger)!=null&&f.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);sc(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(h=(p=e==null?void 0:e.services)==null?void 0:p.logger)!=null&&h.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},cw={},B3=(e,t,i,a)=>{sc(i)&&cw[i]||(sc(i)&&(cw[i]=new Date),JD(e,t,i,a))},Nb=(e,t)=>()=>{if(e.isInitialized)t();else{const i=()=>{setTimeout(()=>{e.off("initialized",i)},0),t()};e.on("initialized",i)}},I3=(e,t,i)=>{e.loadNamespaces(t,Nb(e,i))},uw=(e,t,i,a)=>{if(sc(i)&&(i=[i]),e.options.preload&&e.options.preload.indexOf(t)>-1)return I3(e,i,a);i.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,Nb(e,a))},ez=(e,t,i={})=>!t.languages||!t.languages.length?(B3(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:i.lng,precheck:(a,o)=>{if(i.bindI18n&&i.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!o(a.isLanguageChangingTo,e))return!1}}),sc=e=>typeof e=="string",tz=e=>typeof e=="object"&&e!==null,nz=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,iz={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},az=e=>iz[e],rz=e=>e.replace(nz,az);let U3={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:rz};const sz=(e={})=>{U3={...U3,...e}},oz=()=>U3;let Pb;const lz=e=>{Pb=e},cz=()=>Pb,uz={type:"3rdParty",init(e){sz(e.options.react),lz(e)}},dz=N.createContext();class fz{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(i=>{this.usedNamespaces[i]||(this.usedNamespaces[i]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const pz=(e,t)=>{const i=N.useRef();return N.useEffect(()=>{i.current=e},[e,t]),i.current},Bb=(e,t,i,a)=>e.getFixedT(t,i,a),hz=(e,t,i,a)=>N.useCallback(Bb(e,t,i,a),[e,t,i,a]),Ib=(e,t={})=>{var P,V,F,G;const{i18n:i}=t,{i18n:a,defaultNS:o}=N.useContext(dz)||{},c=i||a||cz();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new fz),!c){B3(c,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const Q=(se,de)=>sc(de)?de:tz(de)&&sc(de.defaultValue)?de.defaultValue:Array.isArray(se)?se[se.length-1]:se,ne=[Q,{},!1];return ne.t=Q,ne.i18n={},ne.ready=!1,ne}(P=c.options.react)!=null&&P.wait&&B3(c,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const f={...oz(),...c.options.react,...t},{useSuspense:p,keyPrefix:h}=f;let x=o||((V=c.options)==null?void 0:V.defaultNS);x=sc(x)?[x]:x||["translation"],(G=(F=c.reportNamespaces).addUsedNamespaces)==null||G.call(F,x);const y=(c.isInitialized||c.initializedStoreOnce)&&x.every(Q=>ez(Q,c,f)),b=hz(c,t.lng||null,f.nsMode==="fallback"?x:x[0],h),S=()=>b,E=()=>Bb(c,t.lng||null,f.nsMode==="fallback"?x:x[0],h),[A,k]=N.useState(S);let _=x.join();t.lng&&(_=`${t.lng}${_}`);const R=pz(_),O=N.useRef(!0);N.useEffect(()=>{const{bindI18n:Q,bindI18nStore:ne}=f;O.current=!0,!y&&!p&&(t.lng?uw(c,t.lng,x,()=>{O.current&&k(E)}):I3(c,x,()=>{O.current&&k(E)})),y&&R&&R!==_&&O.current&&k(E);const se=()=>{O.current&&k(E)};return Q&&(c==null||c.on(Q,se)),ne&&(c==null||c.store.on(ne,se)),()=>{O.current=!1,c&&Q&&(Q==null||Q.split(" ").forEach(de=>c.off(de,se))),ne&&c&&ne.split(" ").forEach(de=>c.store.off(de,se))}},[c,_]),N.useEffect(()=>{O.current&&y&&k(S)},[c,h,y]);const L=[A,c,y];if(L.t=A,L.i18n=c,L.ready=y,y||!y&&!p)return L;throw new Promise(Q=>{t.lng?uw(c,t.lng,x,()=>Q()):I3(c,x,()=>Q())})},mz=T(ie.div)`
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
`,gz=T.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`,xz=({type:e,message:t,onClose:i,autoClose:a=!0,autoCloseDuration:o=25e3})=>{const{t:c}=Ib();N.useEffect(()=>{if(a){const p=setTimeout(()=>{i()},o);return()=>clearTimeout(p)}},[a,o,i]);const f={success:c("alert.success"),error:c("alert.error")};return m.jsxs(mz,{$type:e,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",damping:25},children:[m.jsx("div",{children:t||f[e]}),m.jsx(gz,{onClick:i,children:"×"})]})},vz="/assets/contact-39wCMyse.webp",fp=()=>{const[e,t]=N.useState(""),[i,a]=N.useState({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),[o,c]=N.useState({}),[f,p]=N.useState(null),[h,x]=N.useState(!1),[y,b]=N.useState(!1),S=()=>{x(!0)},E=()=>{x(!1)},A=P=>{const{name:V,value:F}=P.target;a(G=>({...G,[V]:F})),c(G=>({...G,[V]:!1}))},k=()=>{const P={};return e||(P.service=!0),i.name||(P.name=!0),i.email||(P.email=!0),i.phone||(P.phone=!0),i.location||(P.location=!0),P},_=async P=>{P.preventDefault();const V=k();if(Object.keys(V).length>0){c(V),p({type:"error",message:"Please fill all required fields"});return}try{if((await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:e,...i})})).ok)t(""),a({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),c({}),p({type:"success",message:"Form submitted successfully! We will contact you soon."});else throw new Error("Failed to submit form")}catch(F){console.error("Error submitting form:",F),p({type:"error",message:"There was an error submitting the form. Please try again."})}},R={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ve}}},O={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.4,ease:ve}}},L={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.3,ease:ve}}};return m.jsxs(m.Fragment,{children:[m.jsxs(yz,{children:[m.jsxs(hw,{children:[m.jsxs(Px,{children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:R,children:m.jsxs(Az,{children:[m.jsx("span",{children:"Contact"})," our team"]})}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:R,transition:{delay:.1},children:m.jsx(rm,{children:"We love our customers, so feel free to call during normal business hours"})})]}),m.jsx(ie.div,{variants:L,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(Ez,{children:m.jsx(Mz,{children:"Call Us for Fast Repair"})})})}),m.jsxs(hw,{children:[m.jsx(jz,{}),m.jsxs(Oz,{children:[m.jsxs(mw,{width:"251px",children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:R,children:m.jsx(gw,{children:"Service Hours"})}),m.jsx(Px,{children:m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:R,transition:{delay:.2},children:m.jsxs(rm,{children:["Mon–Sat: 8AM–6PM ",m.jsx("br",{})," Sun: 9AM–4PM"]})})})]}),m.jsxs(mw,{children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:R,transition:{delay:.3},children:m.jsx(gw,{children:"Our Location"})}),m.jsxs(Px,{children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:R,transition:{delay:.4},children:m.jsx("a",{href:"https://maps.app.goo.gl/cJF4BwHPJFbYsQAMA",target:"_blank",rel:"noopener noreferrer",children:m.jsx(rm,{children:"801 Tioga Pl, Newbury Park, CA 91320"})})}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:R,transition:{delay:.5},children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(rm,{children:"+1 (805) 500-2705"})})})]})]})]})]})]}),m.jsx(ie.div,{variants:O,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:m.jsxs(wz,{onSubmit:_,children:[m.jsx(ie.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4,ease:ve},children:m.jsx(Rz,{src:vz,alt:"contact image",onLoad:()=>b(!0),style:{opacity:y?1:0,transition:"opacity 0.3s ease"}})}),m.jsx(ms,{children:"What service do you need for your appliances?"}),m.jsxs(bz,{children:[m.jsxs(dw,{style:o.service?{borderColor:"red"}:{},children:[m.jsx(fw,{name:"service",value:"Repair",checked:e==="Repair",onChange:P=>t(P.target.value)}),m.jsx(pw,{checked:e==="Repair"}),"Repair"]}),m.jsxs(dw,{style:o.service?{borderColor:"red"}:{},children:[m.jsx(fw,{name:"service",value:"Installation",checked:e==="Installation",onChange:P=>t(P.target.value)}),m.jsx(pw,{checked:e==="Installation"}),"Installation"]})]}),m.jsxs(Lz,{children:[m.jsxs(kz,{children:[m.jsx(ms,{children:"Name"}),m.jsx(Nx,{name:"name",type:"text",placeholder:"Your Name",value:i.name,onChange:A,style:o.name?{borderBottom:"1px solid red"}:{}}),m.jsx(ms,{children:"Email"}),m.jsx(Nx,{name:"email",type:"email",placeholder:"Your Email",value:i.email,onChange:A,style:o.email?{borderBottom:"1px solid red"}:{}}),m.jsx(ms,{children:"Phone Number"}),m.jsx(Nx,{name:"phone",type:"tel",placeholder:"Your Phone Number",value:i.phone,onChange:A,style:o.phone?{borderBottom:"1px solid red"}:{}})]}),m.jsxs(Dz,{children:[m.jsx(ms,{children:"In what location do you need the service?"}),m.jsx(im,{children:m.jsxs(am,{name:"location",value:i.location,onChange:A,style:o.location?{borderBottom:"1px solid red"}:{},children:[m.jsx("option",{value:"",children:"Select location"}),m.jsx("option",{children:"Agoura Hills"}),m.jsx("option",{children:"Calabasas"}),m.jsx("option",{children:"Camarillo"}),m.jsx("option",{children:"Hidden Valley"}),m.jsx("option",{children:"Lake Sherwood"}),m.jsx("option",{children:"Los Angeles County"}),m.jsx("option",{children:"Malibu"}),m.jsx("option",{children:"Moorpark"}),m.jsx("option",{children:"Newbury Park"}),m.jsx("option",{children:"Oak Park"}),m.jsx("option",{children:"Santa Rosa Valley"}),m.jsx("option",{children:"Thousand Oaks"}),m.jsx("option",{children:"Westlake Village"}),m.jsx("option",{children:"Other"})]})}),m.jsx(ms,{children:"What do you need repaired?"}),m.jsx(im,{children:m.jsxs(am,{name:"appliance",value:i.appliance,onChange:A,style:o.appliance?{borderBottom:"1px solid red"}:{},children:[m.jsx("option",{value:"",children:"Select appliance"}),m.jsx("option",{children:"Refrigerator"}),m.jsx("option",{children:"Dryer"}),m.jsx("option",{children:"Oven"}),m.jsx("option",{children:"Ice Maker"}),m.jsx("option",{children:"Washer"}),m.jsx("option",{children:"Range"}),m.jsx("option",{children:"Wine Cooler"}),m.jsx("option",{children:"Freezer"}),m.jsx("option",{children:"Air Conditioner"}),m.jsx("option",{children:"Furnace"}),m.jsx("option",{children:"Other"})]})}),m.jsx(ms,{children:"Brand of appliance"}),m.jsx(im,{children:m.jsxs(am,{name:"brand",value:i.brand,onChange:A,style:o.brand?{borderBottom:"1px solid red"}:{},children:[m.jsx("option",{value:"",children:"Select brand"}),m.jsx("option",{children:"Amana"}),m.jsx("option",{children:"Bosch"}),m.jsx("option",{children:"Electrolux"}),m.jsx("option",{children:"Fisher & Paykel"}),m.jsx("option",{children:"Frigidaire"}),m.jsx("option",{children:"GE"}),m.jsx("option",{children:"Haier"}),m.jsx("option",{children:"JennAir"}),m.jsx("option",{children:"KitchenAid"}),m.jsx("option",{children:"LG"}),m.jsx("option",{children:"Maytag"}),m.jsx("option",{children:"Samsung"}),m.jsx("option",{children:"Sharp"}),m.jsx("option",{children:"Sub-Zero"}),m.jsx("option",{children:"Thermador"}),m.jsx("option",{children:"Viking"}),m.jsx("option",{children:"Whirlpool"}),m.jsx("option",{children:"Wolf"}),m.jsx("option",{children:"Other"})]})})]})]}),m.jsx(ms,{children:"What type of power does this appliance use?"}),m.jsx(im,{children:m.jsxs(am,{name:"power",value:i.power,onChange:A,style:o.power?{borderBottom:"1px solid red"}:{},children:[m.jsx("option",{value:"",children:"Select power"}),m.jsx("option",{children:"Electric"}),m.jsx("option",{children:"Natural Gas"}),m.jsx("option",{children:"Propane"})]})}),m.jsx(ms,{children:"Any details you'd like to add?"}),m.jsx(Sz,{name:"details",placeholder:"Any details you'd like to add?",value:i.details,onChange:A}),m.jsxs(Tz,{children:['By clicking "Submit" you hereby agree to our'," ",m.jsx("span",{onClick:S,style:{cursor:"pointer"},children:"Privacy Policy"}),"."]}),m.jsx(ie.div,{variants:L,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},transition:{delay:.1},children:m.jsx(Cz,{type:"submit",children:"Submit"})})]})}),m.jsx(Ym,{children:f&&m.jsx(xz,{type:f.type,message:f.message,onClose:()=>p(null)})})]}),h&&m.jsx(mb,{onClick:E,children:m.jsxs(gb,{onClick:P=>P.stopPropagation(),children:[m.jsx(xb,{onClick:E,children:"×"}),m.jsx(vb,{})]})})]})},yz=T.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 28px;
  margin-bottom: 40px;
  -webkit-overflow-scrolling: touch; /* Важливо для iOS скролу */

  @media screen and (max-width: 767px) {
    gap: 24px;
    padding: 0 16px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 240px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 1440px;
    margin: 0 auto 240px;
  }
`,wz=T.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 696px;
  margin: 0 auto;
  padding: 20px;
  background: var(--blue-form);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  -webkit-tap-highlight-color: transparent;

  /* Важливо для iOS */
  -webkit-overflow-scrolling: touch;
  transform: translateZ(0); /* Фікс для анімацій */

  @media screen and (max-width: 767px) {
    padding: 16px;
    gap: 16px;
  }
`,ms=T.label`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  margin-top: 30px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin-top: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 10px;
  }
`,bz=T.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,dw=T.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;
  color: #242424;
  border: 1px solid var(--black-500);
  border-radius: 8px;
  padding: 10px 16px;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    padding: 12px 16px;
  }
`,fw=T.input.attrs({type:"radio"})`
  display: none;
`,pw=T.span`
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

  @media screen and (max-width: 767px) {
    width: 16px;
    height: 16px;

    ${({checked:e})=>e&&`
      &::after {
        width: 8px;
        height: 8px;
      }
    `}
  }
`,Nx=T.input`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  transition: all 0.3s ease;
  border: none;
  border-bottom: 1px solid var(--black-300);
  background: var(--blue-form);
  margin-bottom: 20px;
  border-radius: 0;

  &:focus {
    border-color: var(--blue-form);
    outline: none;
    background: #bbe5f6ff;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px; /* Prevents zoom on iOS */
    padding: 14px 12px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
  }
`,im=T.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  &::after {
    content: '▼';
    font-size: 12px;
    color: #242424;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 16px;

    &::after {
      right: 12px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
  }
`,am=T.select`
  width: 100%;
  padding: 12px;
  padding-right: 40px;
  transition: all 0.3s ease;
  border: none;
  border-bottom: 1px solid var(--black-300);
  background: var(--blue-form);
  font-size: 14px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 0;
  cursor: pointer;

  &:focus {
    border-color: var(--blue-form);
    outline: none;
    background: #bbe5f6ff;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px; /* Prevents zoom on iOS */
    padding: 14px 40px 14px 12px;
  }
`,Sz=T.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  transition: all 0.3s ease;
  border: none;
  border-bottom: 1px solid var(--black-300);
  background: var(--blue-form);
  font-size: 14px;
  resize: vertical;
  border-radius: 0;

  &:focus {
    border-color: var(--blue-form);
    outline: none;
    background: #bbe5f6ff;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px; /* Prevents zoom on iOS */
    min-height: 100px;
  }
`,Cz=T.button`
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
  width: 207px;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: scale(1.05);
    background: #79caf5ff;
  }

  &:active {
    transform: scale(0.95);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 14px 20px;
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`,Tz=T.p`
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

  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`,hw=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;

  @media screen and (max-width: 767px) {
    gap: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 750px;
  }

  @media screen and (min-width: 1440px) {
    width: 454px;
    display: flex;
    height: 100vh;
    justify-content: center;
  }
`,Px=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;

  @media screen and (max-width: 767px) {
    gap: 10px;
  }
`,Az=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);

  span {
    color: var(--blue-500);
  }

  @media screen and (max-width: 767px) {
    font-size: 42px;
  }

  @media screen and (min-width: 768px) {
    font-size: 72px;
  }
`,rm=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (max-width: 767px) {
    font-size: 15px;
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,Ez=T.button`
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
  -webkit-tap-highlight-color: transparent;

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

  @media screen and (max-width: 767px) {
    margin-left: 0;
    width: 100%;
    padding: 14px 20px;
  }
`,Mz=T.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`,jz=T.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
`,Oz=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;

  @media screen and (max-width: 767px) {
    gap: 20px;
  }
`,mw=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${e=>e.width||"100%"};

  @media screen and (max-width: 767px) {
    width: 100% !important;
    gap: 10px;
  }
`,gw=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`,Rz=T.img`
  margin: 0 auto;
  width: 100%;
  max-width: 696px;
  height: 208px;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 668px;
    height: 270px;
  }
`,Lz=T.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (max-width: 767px) {
    gap: 0;
  }
`,kz=T.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,Dz=T.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,zz="/assets/unnamed-CNrBZ34B.png",Hz="/assets/Ellipse%204aleksey-FxWBDF7j.png",Vz="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABHNCSVQICAgIfAhkiAAAAAZiS0dEAHgAkACcNEt37gAAB/9JREFUeJztnHtQU9kdx3+5eZJ3QohB5CHvRxDkKVSrsFUc0YC71tmllS4z6860tdPpbGecbvePTmfrtJ3uzna0L9eRqa04nerOiuJorbAWla3yECULJBFMCBBuQsiDkITw6B+sSDAkJOQ+tHxmMpN7nt98c+7JhfM7hwI4ExUdky2Ljc+XyGKyhJKoJL5QHMvm8aRMZgSfSqMxAebnZ2dm3C6n0+p02I3WCbPOYkQ1RsOw0jCk7RgfG/0KT70UrDvg8AXRKfLcqsQM+d645LRdrAi2YC3tOR2T41p1X8tAb8911eOuz11TjvFwafUFZgZl5hXXyAtLahMz5BVY9QEAoO55eKXnQdu5/u6Oi1i0H1aDKAhCKy7b817ejvJjfKF4UzjbDoTFZBxob711sv32vz8JZ7thM6hw5+6flOze9z6by5OEq81QsFnM+rab10503f3iT+Fob80GJaRl7tl14NCvZZvitoZDULgYHnzS1nLl4nH9gLp1Le1Q11K5vPrwxxXf/u4fuHxB9FrawQK+SBy7pXh7HUKlMrTqvuZQ2wlpBEVuiM6sfKvu7MaExOJQO8YTrbqvpanhbJ1twqwNtm7QBiXLcxSKI0fPM5gsbrB1icRht6GN507XaNV9t4KpF9QtlrNtxztVte82UGk0RnDyiIfBZHKyi0prx1GDyjQ63LPaeqs2KG972Q/3Hj7y59DkkYf0nPw3rGaTFh0eeria8qsyKGfbjndeBXOekZq9tXp8bLTfZBgJOJICGpQiz61S1L7bEB5p5CE9t+DQ0BNVq9VsGvRXDvGXKZFtzFLUHn3lzHmGovZoA18ojvNXxq9BlTV19XQGkx1eWeSBwxNs2FdTV++vzIq32GsH3/wkLSf/9fDLIhfCyKjNFApC02n6Wnzl+xxBm9Plewt3fuvH2EojD9+o2P9BTEJSqa88nwaVKd74DbaSyMcuxSGfn/mFW6yobM9P5YWlR7CXRC4Eosg4u3ViZEyv61ya7jWCqDQaq3R35fv4SiMPpbv3/3x5mpdBRWUV77HYHBF+ksiFQBwZn7e9/NjSNC+D8nd4Z/4/UvDN8h8tvaY9eyMvLKnl8gUy/CX5R7GrBNI3P3+We6QagOt3H2DWn1gqS02R51apex5eBlgyguSFpbWY9boGuOwIEPG5iy8uOwLzPuWFJYteIAAAfKE4LiE14zXMe35JSMvJf53BZPEBvjYoJTu3ilhJ5CN1y9ZqgK8NSsyQ7yVWDvlITF/wBAEAiEtOLyNWDvmIS1nwBJHFxhfQGQzsZ76XDC5fIBNKpMmIbFN8HtFiyIpsU1weIpFtzCJaCFmRyDZmIaIoaTLRQsiKKEqajPCE4liihZAVvlAci3B4PCnRQsgKm8uXIgxmBJ9oIWSFyWLxERqdziJaCFmh0eksv6sa6wAgMx6Pi2gRZGXG43Eh026njWghZMXtctkQh92OEi2ErExN2lDEbjEPES2ErNgs5iFkwohqiBZCViaMqIZmMowo8erw7aoKEHA5AADgmZmBP/6jMWAdBPEOgpudm8NEmy9MhhElzaDXdgYuGh4iBTyQiBYC7efm54ETwQKH0/+PKJvl/Zg25cLvR9eg13UihiFtu2d62olHh0739OJ7hEKB4uz0gHUkQu8Hfb3BGHZdvpi0WQ0WE6pBAABWimwINwaT2es6Jy3Jb/nq8lLgcZ5H39gcU6B8EnSgakjo1AueIAAAA7091/Ho9F63EtzTnsVrqVgI3z98AOKjN7xQtrq8FAoy07zSlJqnWEtcZKBvwRMKwMKyzw9+8VtcvpoDO0ugJCcDKJTnk+/M7CyYrXZwut2AUBCf61/D6DicuvA5HhIBAODj48cE026XjQYAYLOYdU9VvbfwWBu7crsN6DQqbM1IBhp1IbiERqWCVCxcsY5+zAgXruEyCwAAQH93x2fTbpcNYFn4S+qWvIN4COgd1IHFNgk8Dhs4bBYgyIt/M88DgNU+Ce1fqeB8U7PXBI81t69+9jMzaugHWBZpf+yXH43ivT7PoNOhSJ4GUSIBMBl0mJubB4fLBWrtMKi0ejylAACAGTWoTp/4YHHyoy3N7GhtPrWz8uCHeAqa9njgTteqA98xp/0/zSeXXnuN7fstNz5yTTkm8JVEHqzmcW3nneZTS9O8DJqdmXHdu9l0Al9Z5OHezau/Wp72wux4v+Vfv0NHhh7hI4k8DA2o73S3tX66PN3nv1xbGi8dx14Sufii8aLPz+wzkNxiQjXMCLYoJiFxG7ayyMHdG1c/7GlvO+crb8VI+8G+nutJmdmVPIEoBjtpxPNU1dt87UL92yvl+13VaGqor/NMu6fCrookOOzWsWsN9XX+yvjdDjU1aTeaRkeUmXlFb4ZXGjm4dOZUFTrif2NdwP1iZtTQb7dMDKfIcxXhk0Y8l//6l7c0ykdXApVb1Y7DMb2uc2rSbkrK3LJv7dKIp6nhbJ2y479/X03ZVe9ZHdU9ffAqjKTL507XKNu/XJU5AEHueh7T6zoNem1XclbOgZdt57PDbkMvnTlZpVF2B14pWELQJy+Y0bF+1eOuy9GxCQU8oQjXA0xCRavua/nn6d/vR4eHuoKtG9LRFE7HpLH7y9YzDBZLEJOQVBJKG3hx72bTiabzZ7/ndjmtodRf09kdg33KG/pBTZskOkZOtvM7hgeftDX+7dPvPL5/1++e1ECsH48TgPUDlgKwfkRXANYPeQsA5gYt52U7JvB/X9Xvw1K2h4gAAAAASUVORK5CYII=",_z="/assets/Ellipse%204-Wendy%20Bailey-jDxdSyQ5.png",Nz="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABHNCSVQICAgIfAhkiAAAAAZiS0dEAOwAQAB61C2EQwAAB9NJREFUeJztnHtMW9cdx38+17GNX2CwwWAggRBwQiBtIE2ydVoCWwcp1DTVmpW16VDSMTXQKeqkapu0NmobddraVKLRmrZatD5StY0qWFBDJiWohTwUEkIgEEM88zQYbGN8/bzGj/0xkhri+IXvIykfCYlz7jm/8/VX915f3/M7hwUUs14gK9okkpco+bLCnATJ2gyuOEvG4aeKMK6YgzCuH8Dv9nkI3ENYjPMOg47Ax7ROs2bQbujvseqvDjmMA1TqZZE9QBpHkF4pzVeVJa+teDQpe4eYzUtcTrzZeYep0zzafnZW2/aNcajZ7HGa4qU1GKQZ9FRqYe0eedHesuTcX5A1BgBAm/HWqS+m+z4+ZVCfJCN+XA3CWCz2gcytL+9XlDZk8MSZ8YwdjhGnWfuh7krTsYmud+MZN24G/S7zkYMHs3/0pxQOXxqvmLEw6cInjoxdOHx8svsf8Yi3bIN2SHIe+0vuzreKRfKH4yEoXnRZJi4e0ra/csky3rGcONhyOr++tvydv+VXHE3jCtOXE4cMFDxxVm36prpVLMTpmBs9F2ucmM6gfL50Q5Py8X+WiBVbYx2YSjrMI+2N6ta6CQIfjbZv1AZVpKx74v31qs+EbI4w2r50YnDbZ+oHWmq/mxs5G02/qC6xZ9M37f9gQ80JDsI40cmjHwHGEeyRF+3VOExDN+2GG5H2i9igfRklB94uqHw/NnnMoVqmfGrMNTd6wzbTE0n7iAx6Nn3T/gfBnNvskhbU3HKYBtURnElh70GVKetUnxT9sjk+0pjFkz2flYf7hkOhDhbwpYXHNtSciK8s5nBsg+qEgivODtUmpEFNyqrjfGwVP76ymEMqR5jWpKw6HqrNPe9Bb+b97N1qmXJ3/GUxi9UJSTkYsNidc6PtwY4HvQeVJedWfFn8q9PkSmMWld3/+nEXrruwtD7oJfZq7s6/ki+JWbyaWxb0M991iR3I2vqHp+VFz5EviVlk8hKzpwjrZK9N3x1Yv+gS4yKM17/9pcmkVQkSauUxg3GXZfThS0fXBNYtusRezNz68g/VHACALF7i6n2KkobAukUG7VeUNsAPnBcUpY2BZfbtf55O27g3jSuUUy8pNILfVwNnW8GdMtHeB44PzpA2Xh4/Jb8yZZ3qtOlWC0DAGbRHXrSXtFGXAZIIAckl3/9JyH/LEugFAgBQcMXZP5XklJM+8n1ClUy5W4hxxAALBlVK81X0SmIeu6T5NQALBpUn51bQK4d5lCevrQBYMOjRpNU76ZXDPG57gh4SyUsTsFUJdAtiGmlcoTwnQZKHioXyzXSLYSrFQvlmpBTICukWwlSUAmkhykmQ5NEthKnkJEjykIIrzqJbCFNRcMVZSMrhp9IthKlIOYJUJMK4YrqFMBURxhUjHmLz6BbCVHgI44Wc1VgBALl8HhfdIpiKy+d1IauXwOkWwlSsXgJHRrdjhm4hTMXots8gHYGP0y2EqegIfBwNO80auoUwlWGnWcNW2w39VA0ofut5QLL/P3b5CQ9YXowgERUt+aL1eElQFhy13djPXjpRRiYoIxmwrIUsYZ8PWEkC8M/ZQ/cRL34T48MdZMm7i16bvhv1WPVXnN55JxUD+m0BTxQIAa/6kbB9UObitGvPzYl4ywrKNGHTDzvNGgQAcK/Mhnjj1eoXlbllxSHbCw6qAKWI7pR9RhzcndSsZbntCQIAODurbaNiUOfXF8FvJ+6UsTWpkPhePbA33p3DJDioAl5lyaI6qswBADg7+982gIW5eQVXnH19e0PUOcSxIGisAl7NNgAUkBbg9oB3ygx+qxMAQ4DJk4C1ZP7LOzQJc/VHqZAIAABrOv6eaPO6cQQAoCPwsW/Nw1HlD8eKvakViNNXAeY931dy2ICtlgF7Yzaw12feZY5HPQH4a9RlArYa1F/bvG4cYEn6y+OygiepEOC+oAaffg5QsghQkgAAC/Kb2e8H34wFiNNXwfra54tv8CTzurb9jxrn7CDAkvSX/u0vTVE9P89K4AC3agtgWTJg8TkAXh/4cQe4uzQwf3mISikAAKBxmIa2XT52JxmAHXjwI92V9/6cu+MNKgX5nW5wfXWeyiFD8qHuSlNgeSWBKoCwCVSEz+s6MnbhMKWqGMQ7o+ffXFoXNMv129J91wuFaaGf4h4wLs2Nd1b1fPKTpfVBX7ke0ra/Qr4kZnFIey7oZw6aSD7sNGsS2VxJqVixjVxZzODtkc43vpi+8XGwYyEXs/xn828ubxZnbCFHFjP4zjxybvf1E/dMHgs5q9Gobq1zeOepe79AMTNu23SjurUuVJuQBg06jP31A8218ZXFHOoHWmp1BD4Wqk3YBXUa5+zgJIHrKqT5T8RPGv28MND8zBmT5lS4dhGtOOy1TXeb3A7jz1Pydi1fGv00qE/VnZzu/zSSthGvWb1mnep6EM6k3w40134VoTkAUa567rVNd/da9dceS1lXfb+tfDa47TPP9Z1UtZlu/TuaflHvvKBxzg5+YxxqeUgkL83gUruBSax0mEfan+n7sqrPPn0t2r4xbU1hmncYPp26/pEI4yRuSczcHksMqjgyev7wAXXr87iXsMTSf1l7d7Sbh89ctkxcVApkG5m2f0eXZeJi/c2WX3+u7w25JjUcK9vjhGFlg6UwrGzRFYaVTd7CQLpBS7nftgn8H/jN6c7YpSsMAAAAAElFTkSuQmCC",Pz="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABHNCSVQICAgIfAhkiAAAAAZiS0dEAAAAiQB70HAzxAAACgpJREFUeJztnGlwE+cZx/9aC1m2LMnybXzhSz4FxhhwHMKAScpRwA6BmUITAi0f2mkybSdtM5O2n9oyzUzaYYZkyqSZ0jCJk9pMQuppgDLYlNNgY8AH2MLyfUiWhazTl7D7wXgPSV5du66g/D7t8+p5nn320Xvt++6uAEtNQqwKSYlrEB9bgOjITETKUiCRxEEcKoMwJBRzmIPDMYXJKRNsdj3GTf0wGLug1bdjSHsbo2P3lzJcAe9nkEYkIl9ZgZyMbchI24QwsTwgfza7AZq+eqg159CuPgP7hIGjSN3CX4KKCg6gWHUQOZlbeTsHANxX16K59RRaO07z4Z7bBBECIV4qfQdlJW8hUpbMqW9PGIzduN50HFdvHePSLXcJ2rDu5yh/8T1IwmM48+kP4+ZB1F87iobmv3DhLvAEZad/B9vL/4ikhNUcxMMdfYM38G3du+gduBKIm5CAgtj58p/x6vaPIItIDMgPH0TKUrB21WGEhIig6a3z141/NSguJh/7dv4NqUnr/T3xkqLprUd17WGMm/t8NfU9QXnZu7G/8nOEiiJ8tv1fYrWNourMAWh6L/pi5lsTW1t0BAderYIwROSTXTAgEkmwZuVB6A1q6PRt3pp5n6AX1vwEe3ac8Cu4YEKV9xqMpj6M6O56o+5dgtYWHXkmkrNAQU4l9IZOb2qS5wTlKytwoLKKk8CCCVXeXvT0X4HR1MOmRrA6iY8pwP5nMDkL7K+sQqQslU2FPUH7dp2EaFk4p0EFE9KIeOzbdZJNZfEmtuuVY1Dl7uE8qGAjKjIdBCGEpq/e3c/uE6TM2IbKbcd5DSyYyEjdiIfdF2CyDDj/5L6J7Sh/n/eggo3tW9xes2sN2rj+Fyhe+QbvAQUbCnkqzJZhDGmb6cXMGiQMEWPzi+8taWDBRPmGXzsXMRO0sfQdhIcpliygYEMhT0NZyVv0ImaCnH78v6Ss5G26KCSPilUHIY1ICMT3sfIdqMjOI+Wazjb86tJ5j3Y/UBXjt2WbSfl0Zzt+eemcR7vX81fhdy+9TMotei0qvvrcx6idiI1WIl9ZgfvqbwB6gtaoDgbmGRiwmLBCTrXQsiTWSSrJjowcht2m1HSv7LakZTLsGoZdRmn/KFYdXEjQfBOLlKUiK31LoH4/vteISYeDlNPl3nVnhbHxDFkZ5d2ydm50LEO+NtTvlZ1HVLl7ECqSAQsJyldWcOHXMj2NAYuJlBMkUqxNSGK1USqiXRIpE4XiZyVlHs9Ht7PPzODD5gYfI2ahIKcSWEhQTuY2rvyqH42Rx4RAgNdyClj1f7iyBKIQ1+lYeWoGq13p8hTEhktIuc887mOkHniSk/kEZaZtZlX2gSbtEENeHbecVX/9cvfbZ87Nzpk9ynwQAmrFuPOR3ssIveRJTggkJZZg2bIwrvyearuDmdnH1HkUUaz6edFx5LHOZiWPU2VylC5PWdRuVSxzI4WzDnoBaUQCohVZBJISirn0220yYshiJuVkqQxxtKZAZ19OIeO3K4O95HGIgMDr+asWPQ898VOPHTjZ2ryort8kJRQTiI9h7yT8oMv4iDwODRHizUL3e4q7s3IZ8uWBXoxPTZJyySIdvFQkQlKEjJQHzCaM2m2BhOye+NgCAjFRWVz7vTM6zJDXJ7pvKkXxVDOxTk/jeHMDusep5C423B9ZWQKxkJrCPTTy9IBHtCKLgFy2eEP3k5qONjyemyVldxcaFy5BZiTVTNTG+dHvtpZKrkIchh8XrXOxXe/UNzkPDJwRKUshEBEe51nTNxq1Q9BaqQ43TR7povOjonUIEy4j5YWL/PJBC2bn5sjyV1a4VnClgkq4Y3YWn7V7tYPjOxGSOALiUJlnTd/pNlFNRSYKxRsFRYzfNySnkcezc3P44n4LAKCuvxuDtMmmys1wv4KW8CGrGWq+mlioSEZAKBTz4btlVMuQNztN/PJpw3u/eRyXBqjdl/axUfJ4hVyBlbQk7crMhUJMzUq6+EoOAAiFYvZdjQCo1XRgDlRTyafdN21Nz8JyqZSU28Z0DNv/0JIlJAgcUlEzkW0Z2Qzdu6MjnMXsDgIOx6RnNd8539MFvd1OyvS77r05hRDQnpu42NfNsH3/5hVYp6dJeV0iNdsuiKFq3uzcHE53tnMaNwOHY5LA5JTZs6Z/9NCG7DiJBJtS5pcxiuOp2w/T1CSONV13saUP3blRVO3LoI18WpuF+xk0nalpMwGrfdSzpn+00foSAQTYnT0/McxWRJPlnbSbWzq3ddTQHR0WjkOFq6FURCNRQjVNDe0P4AWrbZSAyczbX/DvnocMuTAmHm8Xl0IqCiXLGkcG3dpWd7Qyhvut6dnYm1MIIUF1m84DAeeMmwcIjD3q4st/dWcbjJMTpJwgkTJuQB2zs/i07Y5b2wu9GgxbqdavjIpBntMC2b80nRxH7ITB2EVAN8ZjLwf0mqh1mthwCaN59ZnH0cgyC6YP9ylSOZKl1DPoersNZ51qKOfo9O2E80YZ1zwwUBcZJQ5jjGatevYmQh/uY8LDGTPybr77HwAY0jYTGBppwszMhGdt/6BfpCgkhLEKeL6HvXV/2NwA28z8cC+AgLHESq9dvGCxauebGIDFnmzggo/vNTHmNAsYJydw4u4tVlvL9DRj6YTOhV7eus55nuRkPkGdGs+bUAHgbr34gcG7JdJm3bBLmXFyAl92tAYcFytPcjKfoCd7QLydy8168c0R72YXNR2tjFsWgNnx80Z75xlgIUHj5n509fj0/LAvXHfar5qZfYxP7jV5ZXu25yGGLRZGGb3j54XWjq8wNW0G6Hvzt1tP8XU+5w3FnnEj7nvZxADXDpne8fNCM5UL5pP2v/npSKD78089eoMaH5zIWRCZyx3Xmz5c8oCCjetNjEcPmQm63PAn2CeMSxpQMGE09TlXEmaCHI8nUX/t6JIGFUzUXf2Dc5HriuLlmx9gRNeyJAEFEz0DV3Hr7l+di90vuX5b9y7vAQUbZy+6vWb3z0kbjF0IEyuQmlTKa1DBwsWrv6cP7XQWf9Je3X0OuVnfhVzK/oDP005Xbx1qag8t9jP7rkZN7WFMz9hZdZ5mLFYdamoPs6mwvw5ls+uh07ejqOB7nAYWLHxaXYGRUdZtWc/vi+kNnTBZhpCv3M1ZYMFA1df78aCr1pOad28cDmubYbOPITdrR8CBBQPVtYdxp+0zb1S9f2d1cKTxmahJVV8f8DY5gK9vPQ9rmzGkvYO87F1P3ZvPVtso/l5TgQcP/+mLme9fXhh71Il29TdITiyBfIk/YOIvmt56nPzHTozo3O8xseDfpylsdj0a734Ccagcackv+OVjqai7dhTVtW9icsrkWdmVwL7doe4+j77BG4iPLQy673f0Dd7AF2e+j9strO+keuL553E88PwDSx54/okuDzz/yJsH+E+QM0/ZZwL/C0XfgPLkHoPFAAAAAElFTkSuQmCC",Bz="/assets/ZaidBakoo-BW4HFHhI.png",Iz="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABHNCSVQICAgIfAhkiAAAAAZiS0dEAHgAkACcNEt37gAACe9JREFUeJztnHtQVNcdx7/cvft+LwssT5GHIC6iICgEomB8RBTUmJeNtMzEdKa10+mkM07TzLTTSZ22k2TS0U6tcbTVhsxEzcS3xComqPgAFAXlpbiwwO6yLOyDZR8I/UMFFnEfsPeyOn7+4nfuOef33R/n3nvueQWBZkLCI1MV0bMy5IrIeRJ5SLxIIovmCYWhbDZXxCBJNjAy8nBoyG4bHDQODph7jH2G9v4eXWuPprNB06Gq6dV236FTbxDVDvgicXiickFx3Fzl6piEpGUcLk88nfoGByy9qpbGivt36880377xnc060OsvrZNBWYBS0hdvVmZml8TNVa6iygcAtNTfPF5/vepAU13NYSrq92uAggiCXJy/8sP0vIJtIoksyp91e6Jf33O/uvLczuof/veFP+v1W4Ayl674TfaKNR/xBEK5v+qcCqZ+g7rq7KkdNy5d+Kc/6pt2gGKTUlYuW7fpL4qomIX+EOQvOtvuVVUcP7xdfb+lcjr1MKZTuGD9W5+vevO9fwhE4vDp1EMFIqksev7i3FKCwWCpWhrPT7WeKbWg4LDwlMJ3S/dFxMYtnqpjOlG1NFacLNtXauozqHwt63OAEpRpRUVbtn7FYnMEvpadSQbMJt2xA3s2q1oaz/lSzqdbLG1J3vvFJR+UMUiS5Zu8mYfFZvNTs3JKenWaZn13Z7235bwOUHpu/i9Xv7Vl99TkBQ7JaRlvGA16la6z46Y3+b0KUNqSvPdfhOA8YU7qwvW92u4mvabLY0vyGKBE5YLiopIPyvwjLXBIXrBoU8e95kqjQd/mLh/h7qJcETGvqGTrCxecJxSVbC0TSWQx7vK4DVDh5tL9TBab519ZgQNfKA5bs7l0v7s8z7zFlm9454uktIyN/pcVWEiCQ2YHBRFke2tjxWTXJ21Bs5OVqzOXvvZraqUFDq+sWvtxZGx8zmTXJg1QftEbf6VWUuCxrGjTpL/5qVssK3/lb5WZOVuolxRYiKXBMWZjX5dW3V47Pt2lBTFIkpOzovAjeqUFDjkr1v5+YppLgLLyV33I4fGl9EkKLMSy4FnpuQXbxqe5BCgjz/UinfC5HCgTYjE3LgYiwcz1LBa9WvCr8Tb55A9lZnaJQCRW0CmmYPFCJM2KQohMDA6b7TK0YHM40G+yoL1bh++rajAwaKNFkyxUMSdRuaC4pf7mUWDcQ7pg/dufSYJD4ugQkZo4G5vXFGD+nDiIhXwwSfKpcReSwYCAx0VkmByZymTwOGy0tnfRIQ8MBoPVeLP6G+DxLSaSyGJi58xdTofzxalzsfG1XIQFuz7qhkdGYHM4YHc4MTw84nKNy2YhL2M+StatoEMiktIyNrLYHBHwuAUpM7NL4lNSX6facWribBTn54DNYo6mWaw21N5twTflF3D64nVcqK7DzcZWOJxO8Lkc8LkcAI9G9kKkYsjEQty55/PAoM/06robdV3qOgYA5K5e9wdZSFgilQ5ZTCbeK1wOAY87mqbR92H/d2dwo7EVVpt9NH3Q7sA9dTeu3LqLUJnEpbWFyCRQa3tgMJqplIshp9PWdKv2CAEAMQnJ+ZR6A1CYlwWZWDhqmyxWHDx+Fvp+k9tyX5+ugKpbO2qTDAZyFyop0/mEmMRHMSEU0bMWMVksrqcC0yU5znVU4dLNBhhM3rWCimt1GB4Zey5NfH5RgUAkVkjkoQmEImpWOtXOspRJEPHH+jYGkxk/1tzyunzTgw6YLdZRe/xtSiWKqJh0Qq6ImEe1o7joCBe7U6v3uQ6rfewZxSAIhMok09blCbkiYh4pDQlNoNqRTCR0sTt1vgeo/FI1hPyxltNvHpi2Lk9IQ0ITSKFEFk21o/GvdeDR28tXmh50+EuO14gksmiCLxSGUu2IJF1HVbr1lC7p8Rs8gSiUYLG5IqodEUGuHxKmcQ/cQIbN4YgIksnkzLSQQIVkMjluZzVeAhBDTic94wjPIUNOp41w2Afd9/UpgMVkes4UANhtNhMxYDbrqHbkHHroYkeHzegqPa+xWkw6wtxvoLyD4XAOudhyKfW9YH9g6jd0kH09ulaqHZkHrACCR+2oMDmu3vatjp9vKkR4yFgduw8dn1KH0xf6enSthF7T1UCpFwBqbY+LHREa/Iycz0bI54HNYoLNYoJJkpQHBwD0mq4GQqNW1XrOOj2uNzTB4XSO2mHBUsyZ5f0yapGAB7GQP2pbbfS8eDXq9lpC06Gqdjocg1Q6MlmsuK/WjNoMgsCK7Ayvy7/+ShZIxtjniraX+tZjMRk1/XpdKwEAz1rZ4E8qa2/D7hhrRVFhcry9epnHctlpKVAmxo7aDx8O48qtuxQodKW95VFMGADA5fGDqR607zNZwGKSiI1UjE7xhMlliI+OgL7PBKPFdfhCJOChOD8HuQuVLq3nzn0Vzl29QaVUAMDVivJPdV3quiDg0bTPL/74N+qnCgC8ufJVLExOQNC4D9iHw8PoM5phtdsRhCBw2ExIhEIwJ4wCqLq02H3oBB0y8fn2bWKH3WZiAIDdNmiMikvMo2Pi8M49FbgcNhTBUjAetwwiKAg8LgdiAR9iAR98LgcMYuwzcXh4BLdbHuDfR8uplgcAaKqr+bah+spBYMLylznz0zfQIaBZpUabWgOJUAAuhwUmSU6az+5wQq3pwelL12m5rZ7ww4lvf2fQaZqACSvtt/3ps2665+cBYMn8uQiRisHjcDAyMoJBuwPaXgOu1TfRLQUGnaZ5z46Pk57YLv+6msrzu5YWbviEblF0vJW8pfrH8zvH2y7jQdcqyj+zWQeo72QEKEZDr6r24vld49NcAvRwaMh2+ezJHfTKChwunz3x54lpT40oXqv4/lNdV4f3s3ovCB33Wy7WVVV+OTF90iHXimNHtlMvKbC4cOzwpL950oXk/XpdK5vLk0bGxi2hVlZgcKn8xCf11VUHJrv2zJX2bY31Z+JTUguFYmkkddJmngfNd8+f+nr/z5513e2sxsmy/aVOh/35mMSaAgNmo/ZU2f5Sd3ncboeyWsw9+u6uhpT0rHf8Ky0wOLJ3V7Guy/3GOo/7xQw6TZO5v68zUbmgyH/SZp6j//nXu60Nt457yufVjkOtur3WajHr41Pmr5m+tJnnZNm+0oaaq//1Jq/Xe1a72x9cfxFa0tEDezY3VF/xKjiAj7ueter2Wo1adSNhXtq6523n84DZpDuyd2dxa0PdMV/K+XzygkGnbWq+feNoeHTsIqFESusBJlNF1dJYcWjP39fqOjt8HjOZ0tEUgwOWnrorlXtZHI44MjY+eyp10MXlsyd3nPxq30/ttkHjVMpP6+yOtsaGcnVba5U8PFIZaOd3dLbdqzp28Muf3L52ye2eVE+8PB7HAy8PWPLAyyO6PPDykDcPUB6giTxvxwT+H/OXo4wHQmeDAAAAAElFTkSuQmCC",Uz="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgESURBVHgB3Vr7b1NVHP/c29t3V9ZtsNG9Oh1TivJWCAaGYjSDxWgwBo3EmBgRTIiCidF/QBMTfoaYKGIkQIiiYTwSQHkZiKCM8d4YY2PtBuzRrs/b9l6/53aDjdFube9Yt09yt7b33HPP93zf3+/hoD442GxW5JocsOW8CKPxJRj1lRCEORA0BmVELBZEJFqPkFgPX7AR3r5j6Oq7A4+nByqDg1pwOBwozd+Egty3YTJOJyKAaAzKf0kGZHaxgfSH4+IXzwMaugRN/PIG2tHj2YEm11a43a1QAZkSyGOesxYV9m1EVBGCIRBnJCKGR3qQoddxMOhAczXg5p1vceHabvo9hjSRLoEcFjrfQGX5j8QJG3yBfhZx6RI2FDLNxaaymDjEosDN1rdw/uo+pIHUCXRMLcKCuf9Cr52OPr8UlzUVRX0oFKGG1cwhFG7AhSurcNPVlsoEmlQGY/nCTzFn1jH4gxaExQGOjRVx6J+bo3exjZyGGY5NsFg60eY+l8oEoxtXu+wgrJbXyRBE6ZuA8YAkRzHFIsDjO4W648swwOEkGA2BWqypuUIWsZLMeoyeSI3rakNGFEadAA3XiF2HnfRLNNnwkQjU4b2a6wiI5YhGmbqNpTimAFkiv8pBb2jBrroqJCEy2YI5rFnZiHD4KTL9WUTcAPqJ1GkbsfvQs0ggronNem31KSLs6ewkjoEMXDQqQ5KqULNsf6JRj9en6hc2Ymrux+RsSedU8m1jAtr4CIVKtpxnYLN04Lb7/LARw56pqCjH0udb0O0ha8mNj7VMFcy6FkwRcOhsITo77w6+NZw7CysPwOuTJgxxDDyttdcnY8lzfw67NeTbolmrIeic5BKyUOdGgBSTKR52Yu7MVYN/HkygAEfJXvgU7k08ApnRYaFjVdlPGETXQzGcN/NdJX1B+sTx9LwcESG72sl8MfuVwlTkZ7niYlqRVom104IsU4wl5BMXa3Dhah2GrGD1q5fJIj2bQapDqZKI4oJp+HvLNnj8PqSyTJvZguVfbURz222QA0fa4Oi1GqEDvx2xs69xDpYXVsBocCLcJyMT6ZQk6AUBZVOnAexKETmMMJojIzD2mw3T8bS9lGUecQIdpespHcncodPj0iDxilAud+pKAwReGFFY86xWeIJBkvNMQ13SxbAITC/8jAjcHCcwL/d9hCLEPXVTn0A4jFfeIaNmMMTLE8mg6GApeBorpauDAwhRKpdvW0OfvhBQXJwPE7HU64Pa4GkzdSWlEA3GUdkuRpacKXFxcDAb7cjLy6EV6EqU4tBkA9Nls7mMR65+hVL5mmxg6V2BZREPi3kGYhlarmwE46DRsESg4tHcseKgTCmb6HbRi5LoINM5rRa6IjvEaBSqgSI3Kj9WMgJnY4ygo6hk86av6RXahAZaoIins7cHW/f8TNWzKVANbOOINiomVasXe4phOIgTt7bvfWAR+VFM7e7ugr16LqVqlVAVkhQWxiqwZpMyfxYQRSIyyTjyj95AgGLXscjOWPlPigVochPU8T9D4AsFUbhyKTRGU2JHT++VaY/5MgdUNXWMb1I0KECMXYRJWAz16VPEUyYdCySLYvobMYogqbnJbD5RvMgjFGocMYxK/y1xzildJE3ii6VZaksQ04tQpJ6HP3Q6nrtNMrCgPRBo4tEdOKv06CYbWL+xK3iUR29vC2XBmHQQiGkej4uqUb1eBIMdZGQK1U6XlEjm/j2KKIwjp0usD2jLA6fTq6GPMvUs21lLnLFOwn3vr1To3QAxAjXBIpm1az+ipq1uxL2zWSz45fgRtHe4ldAtI+j1HDrub2cf47LZ2vYdygo3KD2/DB3/wMOMC1qtgB0Uqo0WzR0u7L3ZCOTakD5IbAw6nrL579m3OIEtHS2YH+okMZqqVKbSnrs/eqFMPkhhWyrIoWDAo0Q0GZcsOGrQNgwcYnhoXVo716GyZB/dRLrgqNzQ2nUP5sXOuJKnAtbkmVYEzZRcyt4yiGlyqK9/qfmbB2sadEtD7bJ78AesACaqY5RhJP3bc5itX9mlwdscQ1Pbh5QAa9QPK54ESPdyzByaXW8CD8PaoXJ0ruEPRCJu0oOJRyDLRsLhBqLh98E/P6ooMi5fX0CNfl7phU8UyOxwgplH/dWVj94armv3PT5qKHYhP7eW/CKrZWR3HMcYwU5eNLevR/2NY4/eTuwSaqsPw6B/jSreMrK128RsBTMqwdBJ7D+x7HFDEnNn//EaavA3QSvIWWl0lEhCYCFgExFXnWhYMvGTsLPOSTvUqkTm2UTkAHFGQws6D81EkgNBI+lXBDsPPEO9hWYKf5iYjn+FWKY1GA0cVeQb4fJX4a/MDgINgEftyydhNS6B1z9+hxMkZlDMlAH1HcSBE6xVPaJUjTZikXGj5Qfk2bpRlL9KORMqSU/w/Aw5cXaaJc+qwW33ehw98/lon0x9gTMryuGcUUedzln9xynH2I2wCIX8ckh04b/6+bh1tzOVp9PnwKLZq+Gw71WqV4EQ4yinGkeVA7Fc/ECsJHXj2p0PUH+J9dxTNnSZLkhQDi88VfIl+cxZSpdYFNPnqsyONGs5stxAMOxGq2sd/rl8AONwpHk42KH0soJPSE/WwmyyK+0r1tRhnSvlULr0cP8fHErvLyuymhBzRf6gG929e3DHtQXN2XEo/fGwWvNgtxbDlLOCTHoVcWQ2pfezqXpnUu7HpAAZqosIh5qIqNPo9Z1Bj78VPT1epCGGyfA/uU/qLszt8vwAAAAASUVORK5CYII=",$z="/assets/f5-dlZXIFLP.webp",Gz="/assets/f4-D7ZXFozi.webp",qz="/assets/f2-BdZ-I6AT.webp",Yz="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",Fz="/assets/f3-Ce8PaESZ.webp",Wz="/assets/f6-DzQMz2O0.webp",Zz="/assets/f7-CE-W9csY.webp",Xz="/assets/f8-BQpMFTuq.webp",Kz="/assets/f1-RflE3e6d.webp",Qz=[{avatar:Hz,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      Airtexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      Airtexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:$z},{avatar:zz,name:"Joshua Hopstone",time:"2 weeks ago",text:"I have hired Sunny of Airtexno several times for needed repairs to my high end Viking appliances. He is responsive, reliable, honest, fast, and reasonably priced. I would recommend him to anyone.",image:qz},{avatar:_z,name:"Wendy Bailey",time:"a week ago",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:Yz},{avatar:Iz,name:"Claudia Gilbert",time:"a month ago",text:"Excellent service!  Sunny responds quickly and has always been able to repair my appliances.  This time my freezer drawer was leaking (grandchildren had not closed it tightly and was slightly open overnight), I was unable to change the water filter and the light stopped working.  He cleaned the drain system & condenser coil, was able to pull the filter out & replace it  - and the light came back on. All is now working properly.  YAY! Efficient, knowledgeable and a nice person to have in your home.",image:Wz},{avatar:Vz,name:"Jill Steiner",time:"a week ago",text:"Sunny is amazing.  Always available to help even if it’s after hours.  Has solved problems for us with our GE washer and Thermador fridge/freezer.  Above all he’s very fair and honest with the situation. 100% would recommend.",image:Gz},{avatar:Pz,name:"Will Lucas",time:"6 months ago",text:"Sunny was referred by someone I trust and I was pleased to have been able to obtain his services for my microwave and oven combo.  Sunny is great to work with setting up schedule and task over phone and reassuring in person as he has a professional demeanor and sincerely takes pride in quality craftsmanship.  Gets the job done and does it right.  Meticulously wired with care he took time to ensure best connection with best materials.  Reasonable pricing and someone I would gladly have back to help appliance installation in my home.",image:Zz},{avatar:Nz,name:"Jake",time:"4 days ago",text:"Sunny was great, he has done 1 repair on my washer and an estimate on my fridge. He was very accommodating and had great communication. Very honest and respectful. I will use him for feature repairs. Thank you Sunny.",image:Fz},{avatar:Uz,name:"Elizabeth Castorena",time:"a week ago",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:Kz},{avatar:Bz,name:"Zaid Bakoo",time:"a week ago",text:"Airtexno was simply amazing. Great customer service and support. Technician was very knowledgeable and responsive. He fixed two fan motors on my True cooler. Highly recommend this company for all your needs.",image:Xz}],Jz=T.div`
  padding: 0px 16px;
  margin-bottom: 24px;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    padding: 0px 32px;
    margin-bottom: 32px;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 40px;
    margin-bottom: 40px;
    gap: 16px;
  }
`,eH=T.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);

  span {
    color: var(--blue-500);
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 72px;
  }
`,tH=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 17px;
  }
`,nH=T.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    padding: 0 24px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 40px;
  }

  .swiper {
    overflow: hidden;
  }

  .swiper-slide {
    height: auto;
    display: flex;
  }
`,iH=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: #f5faff;
  border-radius: 12px;
  height: fit-content;
  /* min-height: 380px; */

  @media screen and (min-width: 768px) {
    padding: 20px;
    gap: 16px;
    /* min-height: 420px; */
  }

  @media screen and (min-width: 1440px) {
    padding: 24px;
    /* height: fit-content; */
  }
`,aH=T.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,rH=T.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media screen and (min-width: 1440px) {
    width: 56px;
    height: 56px;
  }
`,sH=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  @media screen and (min-width: 768px) {
    gap: 4px;
  }
`,oH=T.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,lH=T.p`
  color: rgba(33, 33, 33, 0.5);
  font-family: 'Geist', sans-serif;
  font-size: 12px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,cH=T.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 13px;
  line-height: 1.4;
  flex-grow: 1;
  overflow: visible;
  display: block;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 15px;
  }
`,uH=T.img`
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  object-fit: cover;
  margin-top: auto;

  @media screen and (min-width: 768px) {
    min-height: 250px;
  }

  @media screen and (min-width: 1440px) {
    min-height: 320px;
  }
`,dH=T.div`
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
`,pp=()=>m.jsxs(dH,{style:{padding:"32px 0"},children:[m.jsxs(Jz,{children:[m.jsx(tH,{children:"Your Feedback Matters"}),m.jsxs(eH,{children:["Discover why clients ",m.jsx("span",{children:"trust"})," our repairs"]})]}),m.jsx(nH,{children:m.jsx(ta,{direction:"horizontal",spaceBetween:16,autoplay:{delay:6e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},speed:11e3,loop:!0,modules:[ba],grabCursor:!0,centeredSlides:!1,breakpoints:{320:{slidesPerView:1,spaceBetween:12},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}},children:Qz.map((e,t)=>m.jsx(na,{children:m.jsxs(iH,{children:[m.jsxs(aH,{children:[m.jsx(rH,{src:e.avatar,alt:e.name,loading:"lazy",decoding:"async"}),m.jsxs(sH,{children:[m.jsx(oH,{children:e.name}),m.jsx(lH,{children:e.time})]})]}),m.jsx(cH,{children:e.text}),m.jsx(uH,{src:e.image,alt:`Review by ${e.name}`,loading:"lazy",decoding:"async"})]})},t))})})]}),sm="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",iy="data:image/svg+xml,%3csvg%20width='140'%20height='33'%20viewBox='0%200%20140%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_586)'%3e%3cpath%20d='M0.00384521%2032.9336H31.9955V0.933594H0.00384521V32.9336ZM20.5091%203.37746C26.1637%205.23116%2030.25%2010.5932%2030.2654%2016.9275C30.2807%2023.1588%2026.277%2028.508%2020.5091%2030.4846V3.37746ZM15.9946%202.65223C17.0161%202.65223%2018.1043%202.78857%2019.0107%202.96908C19.0107%2010.2187%2012.0004%2016.185%204.76547%2016.185L1.74041%2016.1805C2.23648%208.74909%208.38454%202.65223%2015.9946%202.65223ZM4.76803%2017.6943C12.0017%2017.6943%2019.0094%2023.6542%2019.0094%2030.8968C18.1043%2031.0818%2016.9617%2031.2194%2015.9946%2031.2194C8.38198%2031.2092%202.02589%2025.0938%201.73849%2017.6943H4.76803ZM42.7049%2019.7452V17.7283H49.3618V15.157H42.7036V11.4131H49.7862V8.84766H39.9787V19.6287C39.9787%2022.3542%2041.1392%2024.2181%2043.8634%2024.6009C43.9178%2024.6143%2043.9716%2024.6246%2044.0215%2024.6259H44.0708C44.3499%2024.6572%2044.6347%2024.6777%2044.9336%2024.6777H49.975V22.1154H44.9561C44.09%2022.1154%2042.7049%2021.6879%2042.7049%2019.7452ZM51.9113%2024.6816H54.6374V8.84382H51.9113V24.6816ZM62.6404%2012.8674C59.1948%2012.8674%2056.6159%2015.2415%2056.6159%2018.938V19.0296C56.6159%2022.6358%2059.1033%2024.9638%2062.7089%2024.9638C64.4429%2024.9638%2066.063%2024.4851%2067.5461%2022.9092L65.903%2021.3121C65.0357%2022.1794%2064.1914%2022.6358%2062.7998%2022.6358C60.7688%2022.6358%2059.4227%2021.4491%2059.3312%2019.6229H68.2758C68.3212%2019.1665%2068.3212%2018.6647%2068.3212%2018.6647C68.3225%2015.4463%2066.063%2012.8674%2062.6404%2012.8674ZM59.4003%2017.7059C59.5142%2016.313%2060.9295%2015.1948%2062.6404%2015.1948C64.2375%2015.1948%2065.5381%2016.3361%2065.5381%2017.7059H59.4003ZM75.9825%2015.3094C77.2146%2015.3094%2078.1281%2015.7664%2078.9032%2016.5646L80.5918%2014.8069C79.2681%2013.3917%2077.6941%2012.8213%2075.9825%2012.8213C72.5138%2012.8213%2069.7301%2015.4003%2069.7301%2018.915C69.7301%2022.4297%2072.5138%2025.0093%2075.9825%2025.0093C77.6941%2025.0093%2079.2687%2024.439%2080.5918%2023.0237L78.9032%2021.266C78.1281%2022.0649%2077.2146%2022.5213%2075.9825%2022.5213C73.9739%2022.5213%2072.4453%2020.9914%2072.4453%2018.915C72.4453%2016.8385%2073.9739%2015.3094%2075.9825%2015.3094ZM85.0148%2019.7497H85.0116V15.7062H87.4906V13.2291H85.0148V8.84446H82.2886V19.9103L82.2963%2019.9097C82.3744%2022.4829%2083.5432%2024.2354%2086.1733%2024.6047C86.2277%2024.6182%2086.2815%2024.6284%2086.3314%2024.6291H86.3807C86.6598%2024.6604%2086.9446%2024.6816%2087.2436%2024.6816H87.5322L87.5418%2022.1193H87.266C86.3999%2022.1193%2085.0148%2021.6923%2085.0148%2019.7497ZM92.4885%2014.9324V13.2297H89.7847V24.6816H92.4885V18.6596C92.4885%2016.7739%2093.6925%2015.5916%2095.5775%2015.5916C96.009%2015.5916%2096.3956%2015.6365%2096.7137%2015.7056V13.0703C96.5998%2013.0479%2096.1914%2013.0018%2095.8963%2013.0018C94.2602%2013.0025%2093.0338%2013.7527%2092.4885%2014.9324ZM103.38%2012.8885C99.9033%2012.8885%2097.131%2015.5232%2097.131%2018.9553C97.131%2022.3856%2099.9033%2025.0221%20103.38%2025.0221C106.832%2025.0221%20109.627%2022.3856%20109.627%2018.9553C109.626%2015.5238%20106.832%2012.8885%20103.38%2012.8885ZM103.38%2022.5456C101.358%2022.5456%2099.8361%2020.9767%2099.8361%2018.9553C99.8361%2016.9326%20101.358%2015.3651%20103.38%2015.3651C105.379%2015.3651%20106.923%2016.9326%20106.923%2018.9553C106.922%2020.9774%20105.379%2022.5456%20103.38%2022.5456ZM111.303%2024.6816H114.03V8.84382H111.303V24.6816ZM123.862%2019.8866C123.862%2021.7039%20122.795%2022.4777%20121.363%2022.4777C119.932%2022.4777%20118.865%2021.7039%20118.865%2019.911V13.2297H116.115V20.1376C116.115%2023.4097%20118.5%2024.9773%20121.34%2024.9773C124.203%2024.9773%20126.61%2023.3867%20126.61%2020.0691V13.2297H123.862V19.8866ZM136.925%2021.0196L135.206%2018.6148L137.335%2015.7139L139.158%2013.2297H136.182L133.705%2016.6606L131.206%2013.2297H128.253L129.947%2015.5462L132.206%2018.6372L129.838%2021.9356L127.867%2024.6816H130.797L133.704%2020.6368L136.613%2024.6816H139.544L136.925%2021.0196Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_586'%3e%3crect%20width='139.541'%20height='32'%20fill='white'%20transform='translate(0.00384521%200.933594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",t2="/assets/2-lv1xptCk.svg",ay="/assets/3-xYBlE7jA.svg",ry="data:image/svg+xml,%3csvg%20width='77'%20height='36'%20viewBox='0%200%2077%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M67.1338%2020.3456H71.0883V24.0242C70.3626%2024.3009%2068.9382%2024.5778%2067.5878%2024.5778C63.2137%2024.5778%2061.7591%2022.3574%2061.7591%2017.8483C61.7591%2013.5451%2063.1439%2011.0128%2067.5138%2011.0128C69.9492%2011.0128%2071.3309%2011.7769%2072.4762%2013.2341L75.4978%2010.4581C73.6527%207.82715%2070.4323%207.02979%2067.4087%207.02979C60.6107%207.02708%2057.0362%2010.7351%2057.0362%2017.8125C57.0362%2024.8547%2060.266%2028.6723%2067.3723%2028.6723C70.6355%2028.6723%2073.8247%2027.8417%2075.5614%2026.6244V16.4251H67.1339L67.1338%2020.3456ZM46.3909%2024.2661H56.4545V28.36H41.5343V7.33832H46.3913L46.3909%2024.2661Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4968%2029.43C35.8453%2023.0815%2035.8449%2012.7878%2029.4961%206.44074C23.1474%200.0925049%2012.854%200.0917411%206.50687%206.44012C0.158384%2012.7885%200.158766%2023.0823%206.5075%2029.4294C12.8561%2035.7781%2023.1497%2035.7783%2029.4968%2029.43Z'%20fill='%23242424'/%3e%3cpath%20d='M13.0698%2014.7643C13.4404%2014.7625%2013.8023%2014.6509%2014.1096%2014.4436C14.4169%2014.2364%2014.6559%2013.9428%2014.7965%2013.5998C14.9372%2013.2568%2014.973%2012.8798%2014.8996%2012.5165C14.8261%2012.1531%2014.6467%2011.8197%2014.384%2011.5583C14.1212%2011.2968%2013.7868%2011.119%2013.4232%2011.0474C13.0596%2010.9757%2012.6828%2011.0134%2012.3405%2011.1556C11.9982%2011.298%2011.7057%2011.5384%2011.4999%2011.8468C11.2942%2012.1551%2011.1845%2012.5174%2011.1845%2012.8881C11.185%2013.1351%2011.2342%2013.3796%2011.3293%2013.6075C11.4245%2013.8355%2011.5635%2014.0425%2011.7385%2014.2167C11.9136%2014.3909%2012.1213%2014.5289%2012.3497%2014.6229C12.5781%2014.7169%2012.8228%2014.7649%2013.0698%2014.7643ZM30.2643%2018.4501H21.9973V17.2255H31.4759C31.4889%2017.4627%2031.4953%2017.6998%2031.4953%2017.9398C31.4953%2025.3134%2025.4857%2031.2907%2018.0744%2031.2907C10.6628%2031.2907%204.65222%2025.3171%204.65222%2017.9398C4.65222%2010.5631%2010.6609%204.58887%2018.0731%204.58887C18.2688%204.58887%2018.4635%204.59282%2018.6572%204.60084V5.81624C18.4635%205.8076%2018.2694%205.80333%2018.0749%205.80333C11.3382%205.80333%205.87505%2011.2371%205.87505%2017.9385C5.87505%2024.6401%2011.3375%2030.0749%2018.0749%2030.0749C24.6272%2030.0749%2029.98%2024.9337%2030.2633%2018.4842L30.2643%2018.4501ZM21.9785%2023.5518H18.6561V11.0698H17.4278V24.7847H18.659V24.7765H21.9813L21.9785%2023.5518Z'%20fill='white'/%3e%3c/svg%3e",sy="/assets/5-DtA_MHfM.svg",oy="/assets/6-BYfTVs51.svg",ly="/assets/7-DtKFqDn5.svg",cy="/assets/8-C9mdpuht.svg",uy="/assets/9-1he0Czj8.svg",dy="data:image/svg+xml,%3csvg%20width='191'%20height='24'%20viewBox='0%200%20191%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_699)'%3e%3cmask%20id='mask0_277_699'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='190'%20height='56'%3e%3cpath%20d='M0.970825%2055.6831H189.922V0.547134H0.970825V55.6831Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_277_699)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.577%2023.4158H132.473L121.526%200.547155L110.577%2023.4158ZM188.424%2021.6962C188.63%2021.6962%20188.752%2021.5893%20188.752%2021.4207C188.752%2021.2342%20188.63%2021.1372%20188.424%2021.1372H188.012V21.6962H188.424ZM187.698%2020.8347H188.438C188.656%2020.8347%20188.827%2020.9045%20188.941%2021.0255C189.027%2021.1134%20189.076%2021.2395%20189.076%2021.3932C189.076%2021.6871%20188.92%2021.8643%20188.692%2021.9332L189.138%2022.6008H188.761L188.359%2021.9899H188.012V22.6008H187.698V20.8347ZM189.754%2021.7662C189.754%2020.9234%20189.146%2020.2473%20188.342%2020.2473C187.531%2020.2473%20186.917%2020.9317%20186.917%2021.7662C186.917%2022.6098%20187.526%2023.2846%20188.332%2023.2846C189.142%2023.2846%20189.754%2022.6008%20189.754%2021.7662ZM186.751%2021.775C186.751%2020.8478%20187.452%2020.0793%20188.342%2020.0793C189.23%2020.0793%20189.921%2020.8385%20189.921%2021.7569C189.921%2022.6846%20189.22%2023.4526%20188.332%2023.4526C187.444%2023.4526%20186.751%2022.6932%20186.751%2021.775ZM151.36%2012.3135V4.9244H156.648C159.337%204.9244%20160.934%206.2121%20160.934%208.57187C160.934%2010.867%20159.277%2012.3135%20156.679%2012.3135H151.36ZM159.692%2015.0823C162.586%2014.2016%20164.626%2012.0321%20164.626%208.41529C164.626%206.43127%20164.004%204.79723%20162.913%203.6014C161.582%202.21991%20159.542%201.40306%20156.945%201.40306H147.725V23.4158H151.36V15.7434H155.851L160.99%2023.4158H165.277L159.692%2015.0823ZM105.299%2012.4711C105.299%2016.7781%20102.461%2019.8896%2098.1221%2019.8896H94.0439V4.9244H98.1221C102.461%204.9244%20105.299%208.1%20105.299%2012.4075V12.4711ZM98.1221%201.40306H90.4052V23.4158H98.1221C104.62%2023.4158%20109.115%2018.604%20109.115%2012.4075C109.115%206.14909%20104.62%201.40306%2098.1221%201.40306ZM79.4093%2012.3915V23.4158H83.0453V1.40306H79.4093V12.3915ZM44.2722%2012.0246V23.4158H47.9065V1.40306H44.2722V12.0246ZM25.0175%2012.3135V4.9244H30.3084C32.996%204.9244%2034.5916%206.2121%2034.5916%208.57187C34.5916%2010.867%2032.9373%2012.3135%2030.3371%2012.3135H25.0175ZM33.351%2015.0823C36.2451%2014.2016%2038.2857%2012.0321%2038.2857%208.41529C38.2857%206.43127%2037.6644%204.79723%2036.5719%203.6014C35.2423%202.21991%2033.2018%201.40306%2030.6049%201.40306H21.3849V23.4158H25.0175V15.7434H29.5103L34.6509%2023.4158H38.9361L33.351%2015.0823ZM0.969482%2023.4158H4.60254V14.4522H16.359V10.9338H4.60254V4.9244H16.3646V1.40306H0.969482V23.4158ZM174.298%2019.9561V14.0421H185.997V10.5833H174.298V4.85948H185.997V1.40306H170.664V23.4158H186.002V19.9561H174.298ZM64.0979%2014.1057H69.3824V18.2267C68.1161%2019.2327%2066.3419%2019.8914%2064.3926%2019.8914C60.1678%2019.8914%2057.3605%2016.5598%2057.3605%2012.0321C57.3605%207.7529%2060.2547%204.20078%2064.0658%204.20078C66.697%204.20078%2068.2605%205.11279%2069.8567%206.55844L72.1616%203.63164C70.0378%201.71514%2067.8157%200.646822%2064.215%200.646822C57.9797%200.646822%2053.5473%205.86821%2053.5473%2012.0321C53.5473%2018.508%2057.8041%2023.4158%2064.2719%2023.4158C67.9364%2023.4158%2070.8605%2021.8424%2072.901%2019.9855V10.7377H64.0979V14.1057ZM136.715%2012.3915V23.4158H140.35V1.40306H136.715V12.3915Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M116.09%2019.8828L121.504%208.2977L126.96%2019.8828H116.09Z'%20fill='%23ED114C'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_699'%3e%3crect%20width='190'%20height='24'%20fill='white'%20transform='translate(0.446045)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",fy="data:image/svg+xml,%3csvg%20width='197'%20height='18'%20viewBox='0%200%20197%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2176%206.82621L22.529%201.22314H16.5098L12.2064%206.67151C11.7989%207.13951%2011.0096%207.47882%2010.4092%207.47882H9.40262V1.22314H1.12445V16.224H9.37546V11.622H10.6836C11.2827%2011.622%2011.5815%2011.7793%2011.9089%2012.3526L14.2236%2016.224H24.1903L19.5608%208.70343C19.1791%208.07942%2018.144%207.55682%2017.0559%207.55682C16.7842%207.55682%2016.5098%207.58412%2017.2176%206.82621Z'%20fill='%23242424'/%3e%3cpath%20d='M26.857%2016.2085H34.6475V7.50488H26.857V16.2085Z'%20fill='%23242424'/%3e%3cpath%20d='M30.8807%206.77201C33.0351%206.62641%2034.7114%205.5539%2034.6258%204.37608C34.5375%203.19957%2032.7213%202.36106%2030.5683%202.50666C28.4138%202.65226%2026.7375%203.72478%2026.8245%204.89999C26.9114%206.0778%2028.7276%206.91501%2030.8807%206.77201Z'%20fill='%23242424'/%3e%3cpath%20d='M37.6958%207.45174H40.3107V4.5332H47.6625V7.45174H50.7135V10.3183H47.7725V12.0382C47.7725%2013.7581%2049.8414%2013.6528%2050.7665%2012.8741V15.322C47.9355%2016.5206%2043.2789%2016.8339%2041.4002%2015.608C40.4194%2014.958%2040.3107%2014.4354%2040.3107%2013.6528V10.3703H37.6958'%20fill='%23242424'/%3e%3cpath%20d='M68.658%207.9481C64.6276%206.01888%2059.1396%206.35818%2056.4323%207.7661C52.0881%2010.0203%2052.1547%2013.6994%2056.3766%2015.7911C59.4262%2017.3043%2066.6693%2016.8857%2068.6309%2015.1658V12.7439C65.7456%2014.1505%2063.7378%2013.9464%2062.5316%2013.5512C60.6529%2012.9376%2060.6081%2010.3999%2063.0206%209.95402C64.5719%209.66802%2066.5348%209.69402%2068.658%2010.7626'%20fill='%23242424'/%3e%3cpath%20d='M71.2731%202.47656V16.2099H78.5976V11.9862C78.7063%209.32764%2082.1934%209.82295%2082.1934%2011.7795V16.2099H89.4894V10.7902C89.4894%208.23433%2084.6983%205.3678%2078.6533%208.28503L78.7606%202.47656'%20fill='%23242424'/%3e%3cpath%20d='M113.071%207.47901V16.2086H120.915V11.5182C120.915%209.90094%20124.454%209.12093%20124.454%2011.5702V16.1566H131.372V10.8408C131.372%208.34742%20127.651%205.12858%20120.915%208.44362V7.47901'%20fill='%23242424'/%3e%3cpath%20d='M159.285%2016.1994H167.072V7.49707H159.285V16.1994Z'%20fill='%23242424'/%3e%3cpath%20d='M163.31%206.76292C165.463%206.61862%20167.138%205.54741%20167.052%204.36699C166.967%203.19048%20165.149%202.35327%20162.995%202.49887C160.841%202.64317%20159.167%203.71569%20159.253%204.8922C159.338%206.07131%20161.154%206.90852%20163.31%206.76292Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M192.259%205.01547V4.03396H192.943C193.291%204.03396%20193.663%204.10806%20193.663%204.49937C193.663%204.98557%20193.284%205.01547%20192.861%205.01547H192.259ZM192.867%207.95871C194.431%207.95871%20195.768%206.79519%20195.768%205.20527C195.768%203.62836%20194.431%202.46484%20192.867%202.46484C191.286%202.46484%20189.952%203.62836%20189.952%205.20527C189.952%206.79519%20191.286%207.95871%20192.867%207.95871ZM190.528%205.20527C190.528%203.90396%20191.554%202.92245%20192.867%202.92245C194.166%202.92245%20195.192%203.90396%20195.192%205.20527C195.192%206.52739%20194.166%207.5011%20192.867%207.5011C191.554%207.5011%20190.528%206.52739%20190.528%205.20527ZM192.259%205.42238H192.836L193.711%206.79519H194.272L193.329%205.40158C193.815%205.34308%20194.188%205.09477%20194.188%204.52927C194.188%203.90396%20193.802%203.62836%20193.018%203.62836H191.759V6.79519H192.259'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.473%2010.6355H103.389C103.436%209.74884%20102.65%209.30554%20101.815%209.30554C101.119%209.30554%20100.473%209.88014%20100.473%2010.6355ZM110.405%2012.8741C105.449%2012.5088%20100.165%2012.8208%20100.165%2012.8208C101.689%2015.218%20107.9%2014.854%20109.967%2013.2901L109.75%2015.322C105.611%2017.6685%2092.9763%2017.5645%2092.7576%2012.0915C92.5647%207.25931%20100.056%206.56641%20101.689%206.56641C105.555%206.56641%20111.22%208.28633%20110.405%2012.8741Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.468%2010.2156L142.754%206.14911L144.606%2010.2156H140.468ZM133.088%2016.1709H137.335L139.161%2012.8221H145.805L147.386%2016.1709H157.459L149.617%201.25195H139.594C140.577%201.61726%20140.848%202.24126%20140.577%202.76127'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.031%2010.6563C179.721%209.72548%20177.203%209.95819%20177.203%2011.448C177.203%2013.5878%20180.193%2013.2147%20181.031%2012.5634V10.6563ZM188.395%202.5V16.1567H181.044V15.218C177.395%2017.9286%20169.223%2016.4687%20169.223%2012.0915C169.223%206.72115%20178.1%205.99314%20181.095%207.86906V2.5'%20fill='%23242424'/%3e%3c/svg%3e",py="data:image/svg+xml,%3csvg%20width='197'%20height='26'%20viewBox='0%200%20197%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M193.375%207.13851V7.56954H192.736V9.81922H192.298V7.56954H191.672V7.13851H193.375ZM193.824%207.02196C193.837%207.03955%20193.86%207.07913%20193.903%207.13851C193.943%207.20008%20193.994%207.27265%20194.054%207.35842C194.115%207.44638%20194.181%207.54314%20194.256%207.6465C194.33%207.75206%20194.407%207.85982%20194.484%207.96757C194.56%208.07753%20194.635%208.18308%20194.709%208.28864C194.784%208.39419%20194.85%208.48876%20194.909%208.57453C194.969%208.6603%20195.02%208.73286%20195.06%208.79004C195.101%208.84722%20195.126%208.8846%20195.137%208.89779C195.141%208.8912%20195.165%208.85821%20195.201%208.80543C195.237%208.75046%20195.286%208.68008%20195.344%208.59652C195.403%208.51295%20195.469%208.41839%20195.541%208.31063C195.616%208.20508%20195.693%208.09511%20195.769%207.98516C195.848%207.8752%20195.925%207.76525%20195.999%207.65749C196.074%207.54974%20196.142%207.45078%20196.206%207.36282C196.267%207.27486%20196.32%207.20008%20196.365%207.13851L196.446%207.01976V9.81922H195.98V8.45138C195.98%208.43159%20195.984%208.41179%20195.988%208.3898C195.993%208.36781%20195.995%208.35462%20195.995%208.35022L195.137%209.6257C195.124%209.6125%20195.097%209.57072%20195.052%209.50475C195.005%209.43878%20194.95%209.35961%20194.884%209.26944C194.822%209.17928%20194.754%209.08032%20194.684%208.97696C194.611%208.8736%20194.545%208.77684%20194.484%208.68667C194.42%208.59651%20194.367%208.52175%20194.322%208.45797C194.279%208.3964%20194.254%208.35901%20194.252%208.34802C194.252%208.35241%20194.252%208.36561%20194.258%208.3876C194.262%208.40959%20194.264%208.43159%20194.264%208.44918V9.81702H193.826V7.01756L193.824%207.02196ZM186.838%2013.87L183.252%2017.4633L179.74%2013.848V20.2804H176.92V7.09892H177.542L183.256%2012.8584L189.056%207.09892H189.659V20.2804H186.838V13.8678V13.87ZM58.3087%2013.87L54.7245%2017.4633L51.2126%2013.848V20.2804H48.3925V7.09892H49.014L54.7287%2012.8584L60.5286%207.09892H61.1288V20.2804H58.3087V13.8678V13.87ZM67.1671%2013.793C67.1671%2010.0721%2069.6999%207.02196%2073.8673%207.02196C78.0347%207.02196%2080.6101%2010.0721%2080.6101%2013.793C80.6101%2017.5139%2078.0773%2020.5641%2073.8673%2020.5641C69.6573%2020.5641%2067.1671%2017.5139%2067.1671%2013.793ZM77.4664%2013.793C77.4664%2011.5433%2075.8957%2010.0501%2073.8652%2010.0501C71.8347%2010.0501%2070.3065%2011.5433%2070.3065%2013.793C70.3065%2016.0427%2071.8772%2017.5359%2073.8652%2017.5359C75.8531%2017.5359%2077.4664%2016.0427%2077.4664%2013.793ZM98.28%2020.2826H97.7841L89.6621%2013.5247V20.2826H86.842V7.10113H87.3379L95.4599%2013.9799V7.12311H98.28V20.2826ZM104.514%2013.793C104.514%2010.0721%20107.049%207.02196%20111.214%207.02196C115.38%207.02196%20117.955%2010.0721%20117.955%2013.793C117.955%2017.5139%20115.422%2020.5641%20111.214%2020.5641C107.006%2020.5641%20104.514%2017.5139%20104.514%2013.793ZM114.816%2013.793C114.816%2011.5433%20113.245%2010.0501%20111.214%2010.0501C109.184%2010.0501%20107.656%2011.5433%20107.656%2013.793C107.656%2016.0427%20109.226%2017.5359%20111.214%2017.5359C113.202%2017.5359%20114.816%2016.0427%20114.816%2013.793ZM130.232%2012.5593H135.97V14.0085C135.97%2017.7954%20133.98%2020.5641%20129.961%2020.5641C125.943%2020.5641%20123.436%2017.5139%20123.436%2013.793C123.436%2010.0721%20125.775%207.02196%20129.961%207.02196C133.29%207.02196%20134.584%208.82742%20134.584%208.82742L132.843%2011.1277C132.843%2011.1277%20131.7%2010.0281%20129.921%2010.0281C127.89%2010.0281%20126.383%2011.5433%20126.383%2013.793C126.383%2016.0427%20127.89%2017.5579%20129.921%2017.5579C131.721%2017.5579%20132.664%2016.4319%20132.705%2015.1565V15.0267H130.234V12.5615L130.232%2012.5593ZM142.131%207.12311H147.861C151.043%207.12311%20152.805%208.99015%20152.805%2011.8226C152.805%2013.6391%20152.009%2014.9366%20150.711%2015.6952L150.577%2015.781L153.538%2020.0649V20.2804H150.277L147.806%2016.4935H144.896V20.2804H142.055L142.127%207.12091L142.131%207.12311ZM147.661%2010.0061H144.898V13.8986H147.682C149.085%2013.8986%20149.86%2013.2498%20149.86%2011.9524C149.86%2010.6549%20149.064%2010.0061%20147.661%2010.0061ZM164.552%207.10113H165.054L171.65%2020.2826H168.215L167.413%2018.5761H162.155L161.391%2020.2826H157.979L164.554%207.10113H164.552ZM164.782%2012.6143L163.056%2016.3704H166.491L164.782%2012.6143ZM4.175%200.635742L1.20588%207.51456H7.11645L14.1721%2023.8891L18.2267%2014.4791L12.2608%200.637943H4.17287L4.175%200.635742ZM25.2355%200.686331L21.1937%2010.0589L27.7896%2025.3647H35.8796L25.2355%200.686331ZM4.14094%2016.7948L0.446045%2025.3647H7.83585L4.14094%2016.7948Z'%20fill='%23242424'/%3e%3c/svg%3e",hy="/assets/13-_M_Krupi.svg",my="data:image/svg+xml,%3csvg%20width='121'%20height='22'%20viewBox='0%200%20121%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M107.367%209.97166V12.1049H110.751V9.97166C110.751%209.05838%20109.987%208.29571%20109.073%208.29571C108.128%208.29571%20107.367%209.05838%20107.367%209.97166ZM116.359%206.95413C111.755%204.66888%20106.94%204.51551%20102.215%206.5272C98.3145%208.17275%2096.4866%2012.6852%2098.1612%2016.587C99.015%2018.5987%20100.446%2019.9997%20102.49%2020.7624C107.154%2022.5295%20111.755%2022.4079%20116.297%2020.3354C118.278%2019.4512%20119.651%2017.988%20120.382%2015.9459H114.408C113.737%2018.0806%20111.451%2019.2978%20109.289%2018.6291C109.105%2018.5683%20108.95%2018.5061%20108.739%2018.4149C107.884%2018.0184%20107.367%2017.1963%20107.367%2016.2513V14.7273H120.534C120.929%2011.4652%20119.314%208.44631%20116.359%206.95413ZM69.6909%209.97166C69.6909%209.05838%2068.9614%208.29571%2068.0177%208.29571C67.1017%208.29571%2066.3418%209.05838%2066.3418%209.97166V12.1049H69.6909V9.97166ZM79.4771%2014.7273C79.8736%2011.4652%2078.2571%208.44631%2075.3018%206.95413C70.7285%204.66888%2065.883%204.51551%2061.1592%206.5272C57.256%208.17275%2055.4599%2012.6852%2057.1026%2016.587C57.9565%2018.5987%2059.4197%2019.9997%2061.4618%2020.7624C66.0958%2022.5295%2070.7285%2022.4079%2075.2714%2020.3354C77.2209%2019.4512%2078.5942%2017.988%2079.3251%2015.9459H73.3495C72.7098%2018.0806%2070.4245%2019.2978%2068.2581%2018.6291C68.0771%2018.5683%2067.8933%2018.5061%2067.7123%2018.4149C66.8571%2018.0184%2066.3418%2017.1963%2066.3418%2016.2513V14.7273H79.4771ZM82.8884%2017.8968V4.21155H80.5133V0.85828H94.1696V17.8968H96.5764V21.2501H80.5133V17.8968H82.8884ZM46.2829%205.52136L51.1919%202.96115L49.6362%200.00441933L44.7286%202.53422L46.2829%205.52136ZM53.1428%2017.8968V5.91789H39.9439V9.27116H42.3494V17.8968H39.9439V21.2501H55.5483V17.8968H53.1428ZM20.0081%208.81383L25.771%200.85828H37.7803V4.21155H35.372V17.8968H37.7803V21.2501H22.1731V17.8968H24.5814V9.02661L15.7112%2021.2501L6.81057%209.02661V17.8968H9.21878V21.2501H0.59314V17.8968H2.96958V4.21155H0.59314V0.85828H14.2176L20.0081%208.81383Z'%20fill='%23242424'/%3e%3c/svg%3e",gy="/assets/15-VL89vzXY.svg",xy="/assets/16-D9KRuHZe.svg",vy="/assets/17-BRD6G3-l.svg",yy="/assets/18-D69HL7ID.svg",wy="/assets/19-Dos04ydj.svg",by="/assets/21-BwEZSGFZ.svg",Sy="/assets/22-CQ_f5juP.svg",Cy="data:image/svg+xml,%3csvg%20width='160'%20height='26'%20viewBox='0%200%20160%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.01%2019.347L131.698%201.45459H137.34V24.006H129.228L123.598%205.49849H123.477L123.789%2024.006H118.183V1.45459H126.647L131.884%2019.347H132.01Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4529%203.56613L26.3316%2024.2433H20.1786L24.4041%201.45459H34.5405L38.7466%2024.2433H32.6178L29.5813%203.56613H29.4529Z'%20fill='%23242424'/%3e%3cpath%20d='M53.0771%2024.2433L49.2656%203.75501H49.1421L48.9993%2024.2433H43.2918L43.7955%201.45459H53.094L55.9078%2018.8748H56.0289L58.8451%201.45459H68.1388L68.6328%2024.2433H62.9374L62.7873%203.75501H62.6686L58.8596%2024.2433H53.0771Z'%20fill='%23242424'/%3e%3cpath%20d='M10.5821%2017.8141C10.8048%2018.3662%2010.737%2019.0757%2010.6329%2019.5043C10.4416%2020.2622%209.92826%2021.0347%208.4124%2021.0347C6.98372%2021.0347%206.11683%2020.2162%206.11683%2018.9643V16.7583H0.00497197L0.00012207%2018.5236C0.00012207%2023.6039%204.00044%2025.1367%208.28648%2025.1367C12.4079%2025.1367%2015.8028%2023.7274%2016.3428%2019.9305C16.6188%2017.9618%2016.413%2016.6736%2016.3186%2016.1869C15.3572%2011.4165%206.70767%209.99269%206.06355%207.3242C5.95458%206.86654%205.98606%206.38224%206.03933%206.12314C6.19673%205.39669%206.69556%204.59517%208.12182%204.59517C9.45364%204.59517%2010.2406%205.41848%2010.2406%206.66313C10.2406%207.08205%2010.2406%208.07002%2010.2406%208.07002H15.9239V6.46941C15.9239%201.50535%2011.4683%200.730469%208.24047%200.730469C4.18689%200.730469%200.874285%202.06956%200.268911%205.77929C0.10425%206.80358%200.0800345%207.71648%200.319761%208.85943C1.315%2013.516%209.41006%2014.8647%2010.5821%2017.8141Z'%20fill='%23242424'/%3e%3cpath%20d='M84.685%2017.773C84.9102%2018.3203%2084.8375%2019.0104%2084.7358%2019.439C84.5494%2020.1945%2084.0408%2020.9549%2082.5347%2020.9549C81.1254%2020.9549%2080.2657%2020.1364%2080.2657%2018.9135L80.2609%2016.7269H74.212L74.2047%2018.468C74.2047%2023.4974%2078.1687%2025.0157%2082.4112%2025.0157C86.489%2025.0157%2089.8524%2023.6258%2090.3827%2019.8628C90.6588%2017.9086%2090.4626%2016.6373%2090.3633%2016.1603C89.4069%2011.4335%2080.8444%2010.0242%2080.2076%207.38237C80.0986%206.92713%2080.1301%206.44768%2080.1858%206.20311C80.348%205.47181%2080.8372%204.68967%2082.2489%204.68967C83.5686%204.68967%2084.3387%205.49361%2084.3387%206.72857C84.3387%207.14265%2084.3387%208.12093%2084.3387%208.12093H89.9783V6.53727C89.9783%201.62648%2085.5591%200.856445%2082.3627%200.856445C78.3552%200.856445%2075.0692%202.17858%2074.4759%205.86168C74.3113%206.87144%2074.2943%207.76739%2074.5292%208.90549C75.5099%2013.5136%2083.5251%2014.8527%2084.685%2017.773Z'%20fill='%23242424'/%3e%3cpath%20d='M103.827%2020.8337C105.408%2020.8337%20105.902%2019.7392%20106.011%2019.1799C106.057%2018.9329%20106.069%2018.6035%20106.064%2018.3081V1.44482H111.827V17.7923C111.839%2018.2113%20111.798%2019.0733%20111.779%2019.2888C111.374%2023.5434%20108.011%2024.9236%20103.824%2024.9236C99.6326%2024.9236%2096.2667%2023.5434%2095.8671%2019.2888C95.8478%2019.0733%2095.8066%2018.2113%2095.8187%2017.7923V1.44482H101.577V18.3081C101.577%2018.6035%20101.587%2018.9353%20101.63%2019.1799C101.754%2019.7392%20102.233%2020.8337%20103.827%2020.8337Z'%20fill='%23242424'/%3e%3cpath%20d='M151.365%2020.5938C153.017%2020.5938%20153.593%2019.5502%20153.7%2018.9424C153.741%2018.6809%20153.753%2018.3636%20153.751%2018.0755V14.7677H151.411V11.4406H159.492V17.5573C159.487%2017.9835%20159.477%2018.2983%20159.41%2019.0586C159.029%2023.2042%20155.433%2024.6837%20151.394%2024.6837C147.348%2024.6837%20143.757%2023.2042%20143.372%2019.0586C143.307%2018.2983%20143.297%2017.9835%20143.29%2017.5573L143.295%207.96089C143.295%207.5565%20143.345%206.83974%20143.389%206.45957C143.895%202.20016%20147.348%200.82959%20151.394%200.82959C155.436%200.82959%20158.974%202.19289%20159.393%206.45957C159.468%207.18601%20159.443%207.96089%20159.443%207.96089V8.72124H153.697V7.44511C153.702%207.44754%20153.69%206.9027%20153.622%206.57822C153.525%206.07455%20153.087%204.91707%20151.351%204.91707C149.69%204.91707%20149.203%206.01159%20149.082%206.57822C149.012%206.87848%20148.985%207.2853%20148.985%207.65336V18.0755C148.98%2018.3636%20148.997%2018.6809%20149.043%2018.9424C149.142%2019.5526%20149.716%2020.5938%20151.365%2020.5938Z'%20fill='%23242424'/%3e%3c/svg%3e",Ty="/assets/24-Dmws8xhr.svg",Ay="/assets/25-BaRLqQy_.svg",Ey="/assets/26-B2H6SqHt.svg",My="/assets/27-DBraEacE.svg",jy="data:image/svg+xml,%3csvg%20width='112'%20height='33'%20viewBox='0%200%20112%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_720)'%3e%3cpath%20d='M77.422%2013.2852C76.096%2013.3501%2073.7527%2014.0702%2073.2182%2016.3711L71.3498%2027.2529C70.9268%2029.6026%2072.0997%2032.2635%2074.6194%2032.2878H88.6321C90.433%2032.2608%2092.5012%2031.6842%2092.9916%2028.8771L95.0157%2017.508C95.3946%2015.2206%2093.8791%2013.3501%2091.7461%2013.2852H77.422Z'%20fill='%23242424'/%3e%3cpath%20d='M79.1346%2018.6451C78.1641%2018.5991%2077.8891%2018.9591%2077.7334%2019.4572L76.6435%2025.3041C76.5786%2026.1487%2077.0613%2027.0122%2077.8891%2027.0907H86.7638C87.6071%2027.0122%2088.2974%2026.4383%2088.4765%2025.629L89.4106%2020.2692C89.6753%2019.3191%2089.1927%2018.6018%2088.3208%2018.6451H79.1346Z'%20fill='white'/%3e%3cpath%20d='M70.5738%2018.6455H57.8067C56.8673%2018.5995%2056.5896%2018.9595%2056.4054%2019.4576L55.4712%2025.3046C55.2818%2026.1491%2055.7644%2027.0126%2056.7168%2027.0911H69.0168L68.0826%2032.2885H53.2915C50.8029%2032.2614%2049.63%2029.6005%2050.0218%2027.2536L52.0459%2016.3717C52.4559%2014.0681%2054.7991%2013.3507%2056.094%2013.2858H71.508L70.5738%2018.6455ZM43.48%2018.6455H31.0242L31.9584%2013.2858H45.9711C48.5245%2013.3507%2049.6949%2016.0117%2049.2407%2018.3207L47.3724%2029.2025C46.8716%2031.544%2044.5283%2032.2614%2043.1686%2032.2885H29.9344C27.3628%2032.2614%2026.1924%2029.6005%2026.6647%2027.2536L27.2875%2023.1932C27.778%2020.83%2030.1212%2020.11%2031.4913%2020.1072H43.1686C44.0457%2020.11%2044.7359%2018.6022%2043.48%2018.6455ZM25.7305%2018.6455H28.5331L29.4673%2013.2858H26.6647L28.8445%200.29248H23.8622L21.6824%2013.2858H7.51402C6.13351%2013.3507%203.79028%2014.0708%203.31021%2016.3717L1.44185%2027.2536C0.964382%2029.6032%202.1347%2032.2641%204.71148%2032.2885H20.9039C22.0561%2032.2614%2023.5015%2031.184%2023.7065%2029.5274L25.7305%2018.6455Z'%20fill='%23242424'/%3e%3cpath%20d='M7.98386%2027.0908C7.10158%2027.0123%206.61892%2026.1488%206.73829%2025.3042L7.82557%2019.4572C7.92677%2018.9592%208.20184%2018.6018%209.07115%2018.6452H20.7484L19.1914%2027.0908H7.98386Z'%20fill='white'/%3e%3cpath%20d='M103.268%2014.9093L104.513%2013.7724C105.115%2013.3501%20105.803%2013.3501%20106.537%2013.2852H111.052L110.118%2018.6449H105.136C103.875%2018.5989%20102.152%2019.2485%20101.866%2021.0811L99.8423%2032.2878H94.7043L98.1296%2013.2852H102.645L103.268%2014.9093Z'%20fill='%23242424'/%3e%3cpath%20d='M32.4256%2027.0908C31.6368%2027.0123%2031.4993%2025.3583%2032.737%2025.3042H43.013L42.7016%2027.0908H32.4256Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_720'%3e%3crect%20width='109.714'%20height='32'%20fill='white'%20transform='translate(1.33813%200.290039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Oy="/assets/29-yivH26vR.svg",Ry="/assets/30-DGc1459t.svg",Ly="data:image/svg+xml,%3csvg%20width='121'%20height='36'%20viewBox='0%200%20121%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.45829%2023.2381H3.99829L2.66629%2018.1861H9.61429L21.9503%200.810059H31.3103L28.9703%2018.1261L41.9903%2018.1859L42.5663%2018.8819C45.6863%2016.7461%2049.8983%2016.7461%2051.4101%2019.4461C53.4981%2017.1899%2058.1781%2017.0579%2059.7621%2019.9499C60.3621%2021.0657%2060.2661%2022.5421%2059.7621%2024.3181L57.8663%2030.3901C57.9863%2031.0141%2058.6823%2032.4061%2056.9783%2032.4061H50.3423L52.4903%2025.7101C53.0543%2023.7419%2050.6543%2023.7419%2050.0903%2025.6499L48.0023%2032.3462H41.1743L43.2623%2025.5181C43.8863%2023.5621%2041.3543%2023.5621%2040.8503%2025.5779L38.7623%2032.2859H31.6223L33.8303%2025.1339C33.9623%2024.6301%2033.9023%2024.1859%2032.9543%2024.1859H28.1423L27.0743%2032.2501L16.7663%2032.2859L18.1583%2024.1859H12.1463L4.87429%2035.1897L0.446289%2031.7101L6.45829%2023.2381ZM16.0103%2018.1741L19.2023%2018.2102L20.3063%2011.8022L16.0103%2018.1741ZM107.222%2032.5262C105.578%2033.0301%20102.794%2033.3541%20101.222%2031.9621C99.6383%2030.5701%2099.5785%2027.1499%20100.526%2024.6899C101.786%2021.3419%20104.066%2018.2459%20107.474%2017.7421C109.694%2017.4301%20112.406%2018.3061%20113.99%2019.6981L114.302%2018.6899H120.446L116.642%2030.9539C116.894%2031.5779%20117.47%2032.4659%20116.138%2032.4659H109.694L110.042%2031.2661C109.214%2031.7342%20108.242%2032.2739%20107.222%2032.5262ZM107.042%2026.6821C107.198%2026.9341%20107.582%2027.2579%20108.278%2027.0059C109.514%2026.5859%20111.662%2024.5701%20112.01%2023.1419C111.122%2021.8817%20109.862%2021.5937%20108.53%2022.7341C107.774%2023.3941%20106.514%2025.7701%20107.042%2026.6821ZM62.1505%2031.9621C60.5665%2030.5701%2060.5063%2027.2222%2061.4545%2024.6899C62.6543%2021.3419%2064.9941%2018.2459%2068.4145%2017.7541C70.6225%2017.4421%2073.3465%2018.3061%2074.9305%2019.6981L75.2423%2018.6899H81.3745L77.5825%2030.9539C77.8345%2031.5899%2078.3985%2032.4659%2077.0786%2032.4659H70.6226L70.9706%2031.3379C70.1546%2031.8061%2069.1346%2032.2859%2068.1626%2032.5377C66.5183%2032.9819%2063.7345%2033.3541%2062.1505%2031.9621ZM68.2465%2026.6821C68.3783%2026.9702%2068.8223%2027.2579%2069.4825%2027.0059C70.7185%2026.5619%2072.8663%2024.5701%2073.2143%2023.1419C72.3263%2021.8817%2071.0903%2021.5339%2069.7345%2022.7341C69.0385%2023.3699%2067.8025%2025.6741%2068.2465%2026.6821ZM86.6181%2032.3342L88.7063%2025.6382C89.2821%2023.7421%2091.5503%2023.6822%2090.9863%2025.6382L89.0901%2032.4061H95.5943C97.3101%2032.4061%2096.6141%2031.0141%2096.4823%2030.3781L98.3781%2024.3061C98.882%2022.5421%2098.9181%2021.4021%2098.2583%2020.2019C96.77%2017.5499%2092.4981%2017.4659%2090.0383%2019.6261L89.5943%2018.7501H83.966L79.7901%2032.3341H86.6181V32.3342Z'%20fill='%23242424'/%3e%3c/svg%3e",fH=[{id:1,imageUrl:iy},{id:2,imageUrl:t2},{id:3,imageUrl:ay},{id:4,imageUrl:ry},{id:5,imageUrl:sy},{id:6,imageUrl:oy},{id:7,imageUrl:ly},{id:8,imageUrl:cy},{id:9,imageUrl:uy},{id:10,imageUrl:dy},{id:11,imageUrl:fy},{id:12,imageUrl:py},{id:13,imageUrl:hy},{id:14,imageUrl:my},{id:15,imageUrl:gy},{id:16,imageUrl:xy},{id:17,imageUrl:vy},{id:18,imageUrl:yy},{id:19,imageUrl:wy},{id:20,imageUrl:t2},{id:21,imageUrl:by},{id:22,imageUrl:Sy},{id:23,imageUrl:Cy},{id:24,imageUrl:Ty},{id:25,imageUrl:Ay},{id:26,imageUrl:Ey},{id:27,imageUrl:My},{id:28,imageUrl:jy},{id:29,imageUrl:Oy},{id:30,imageUrl:Ry},{id:31,imageUrl:Ly}],pH=T.div`
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
`,hH=T.img`
  height: 32px;
  max-width: min-content;
  /* width: auto; */
  object-fit: contain;
  filter: brightness(1) invert(1);
  transition: all 0.3s ease;
  overflow: visible;
`,mH=T(ta)`
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
`,gH=()=>m.jsx(pH,{children:m.jsx(mH,{direction:"vertical",slidesPerView:10,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:4e3,modules:[ba],grabCursor:!1,allowTouchMove:!1,children:fH.map(e=>m.jsx(na,{children:m.jsx(hH,{src:e.imageUrl,alt:`Partner ${e.id}`,onError:t=>{t.target.style.display="none"}})},e.id))})}),xw={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:ve}}},vw={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ve}}},xH=async(e,t)=>{const i=localStorage.getItem(t);if(i)return i;try{const o=await(await fetch(e)).blob();return new Promise(c=>{const f=new FileReader;f.onloadend=()=>{const p=f.result;try{localStorage.setItem(t,p),c(p)}catch{console.warn("LocalStorage quota exceeded, using original URL"),c(e)}},f.readAsDataURL(o)})}catch(a){return console.error("Failed to cache video:",a),e}},vH=()=>{const e=ft({query:"(min-width: 1440px)"}),t=ft({query:"(max-width: 1024px)"}),[i,a]=N.useState(!1),[o,c]=N.useState(!1),[,f]=N.useState(!1),[,p]=N.useState(!1),[h,x]=N.useState(null),y=N.useRef(null),b=N.useRef(null),S=E2(b,{once:!0,margin:"-10%"});N.useEffect(()=>{S&&!i&&a(!0)},[S,i]),N.useEffect(()=>{(async()=>{try{const P=await xH(sm,"cached_hero_video");x(P)}catch(L){console.error("Video caching failed:",L),x(sm)}})()},[]);const{scrollY:E}=Pr(),A=on(E,[0,400],[0,e?80:t?20:40]),k=on(E,[0,300],[1,.95]);N.useEffect(()=>{if(S&&y.current&&h){f(!0);const O=setTimeout(()=>{var L;o||(L=y.current)==null||L.load()},100);return()=>clearTimeout(O)}},[S,o,h]);const _=()=>{c(!0),f(!1),y.current&&y.current.play().catch(O=>{console.log("Auto-play was prevented:",O),p(!0)})},R=()=>{f(!1),p(!0),console.error("Video loading failed"),h&&h!==sm&&x(sm)};return m.jsx(m.Fragment,{children:m.jsxs(xL,{id:"header",ref:b,children:[m.jsxs(ie.div,{style:{y:A,opacity:k},children:[!o&&m.jsx(yL,{}),h&&m.jsxs(vL,{ref:y,muted:!0,loop:!0,playsInline:!0,preload:"none",onLoadedData:_,onError:R,style:{opacity:o?1:0},children:[m.jsx("source",{src:h,type:"video/mp4"}),m.jsx("source",{src:h.replace(".mov",".webm"),type:"video/webm"}),"Video loading failed."]}),m.jsx(wL,{})]}),e&&m.jsx(ie.div,{initial:{opacity:0,x:50},animate:i?{opacity:1,x:0}:{opacity:0,x:50},transition:{duration:.7,ease:"easeOut"},children:m.jsx(gH,{})}),m.jsxs(bL,{children:[m.jsxs(SL,{children:[m.jsx(ie.div,{initial:"hidden",animate:i?"visible":"hidden",variants:xw,children:m.jsx(CL,{children:"THOUSAND OAKS APPLIANCE REPAIR"})}),m.jsx(ie.div,{initial:"hidden",animate:i?"visible":"hidden",variants:xw,transition:{delay:.1},children:m.jsx(TL,{children:"We provide reliable appliance repair services, so your fridge, oven, or washer works like new — and you can get back to your day."})})]}),m.jsxs(AL,{children:[m.jsx(ie.div,{initial:"hidden",animate:i?"visible":"hidden",variants:vw,children:m.jsx(hb,{to:"/contact#ap",children:"Contact Us"})}),m.jsx(ie.div,{initial:"hidden",animate:i?"visible":"hidden",variants:vw,transition:{delay:.05},children:m.jsx(R8,{children:m.jsx("a",{href:"tel:+18055002705",children:"Call Us"})})})]})]})]})})},j2="/assets/News%20Article%202%20Image%20Container%20(3)-46MbbkbU.png",hp="/assets/Image3-DVPHBget.png",O2="/assets/t1-CGH4eVLb.webp",R2="/assets/bosch-dishwasher-door-open-DswMTwMP.jpg",L2="/assets/tips-DqrVri1G.png",k2="/assets/News%20Article%202%20Image%20Container%20(7)-ml4_mJ5O.png",yw=[{id:1,image:k2,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:hp,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:O2,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:R2,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:L2,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:j2,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],ww={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ve}}},yH={hidden:{opacity:0,y:50,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.7,ease:ve}},hover:{y:-10,scale:1.02,boxShadow:"0 20px 40px rgba(0,0,0,0.15)",transition:{duration:.3,ease:ve}}},wH={hidden:{opacity:0,scale:1.1},visible:{opacity:1,scale:1,transition:{duration:.6,ease:ve}},hover:{scale:1.05,transition:{duration:.4}}},bw={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ve}}},bH=()=>{const e=N.useRef(null),t=ft({query:"(max-width: 767px)"}),i=ft({query:"(min-width: 768px)"}),a=t?1:i?2:3,o=yw.length>a,c=()=>{e.current&&e.current.slidePrev()},f=()=>{e.current&&e.current.slideNext()};return m.jsxs(AH,{children:[m.jsxs(EH,{children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:ww,children:m.jsx(MH,{children:"NEWS & TIPS"})}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:ww,transition:{delay:.1},children:m.jsxs(jH,{children:["APPLIANCE ",m.jsx("span",{children:"ADVICE"})," REPAIR ",m.jsx("span",{children:"TIPS"})," BLOG"]})})]}),m.jsxs(CH,{children:[m.jsx(ta,{modules:[M2,ba],onSwiper:p=>e.current=p,spaceBetween:20,autoplay:{delay:1,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:8600,loop:o,slidesPerView:a,centeredSlides:t,touchRatio:1.5,touchAngle:45,simulateTouch:!0,allowTouchMove:!0,children:yw.map((p,h)=>m.jsx(na,{children:m.jsx(SH,{to:p.path,children:m.jsx(ie.div,{variants:yH,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:m.jsxs(OH,{children:[m.jsx(ie.div,{variants:wH,whileHover:"hover",children:m.jsx(RH,{src:p.image,alt:p.title,loading:"lazy",decoding:"async"})}),m.jsxs(LH,{children:[m.jsx(ie.div,{variants:bw,children:m.jsx(kH,{children:p.title})}),m.jsx(ie.div,{variants:bw,children:m.jsx(DH,{children:p.description})})]})]})})})},p.id))}),m.jsxs(TH,{children:[m.jsx(Sw,{onClick:c,whileHover:{scale:1.1},whileTap:{scale:.95},children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),m.jsx(Sw,{onClick:f,whileHover:{scale:1.1},whileTap:{scale:.95},children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})},SH=T(Kt)`
  text-decoration: none;
  display: block;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
`,CH=T.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: 100%;
    -webkit-tap-highlight-color: transparent;
  }
`,TH=T.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
  justify-content: flex-end;
`,Sw=T(ie.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: #DBDBD8;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  touch-action: manipulation;

  &:hover,
  &:focus,
  &:active {
    background-color: #3098EE;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(48, 152, 238, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(48, 152, 238, 0.2);
  }

  @media (max-width: 767px) {
    width: 44px;
    height: 44px;
  }
`,AH=T.div`
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
`,EH=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,MH=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,jH=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  width: 40%;
  span {
    color: var(--blue-500);
  }

  @media screen and (min-width: 768px) {
    font-size: 52px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 72px;
  }
`,OH=T.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;

  @media screen and (min-width: 768px) {
    /* max-width: 322px; */
  }

  @media screen and (min-width: 1440px) {
    /* max-width: 380px; */
  }
`,RH=T.img`
  border-radius: 8px;
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 300px;
  }

  @media screen and (min-width: 1440px) {
    height: 350px;
  }
`,LH=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 0;
`,kH=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`,DH=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,zH=T.div`
  width: 97vw;
  height: 80%;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(1px);
  margin: 0px 0;
  padding: 40px 0px;
  /* Запобігаємо скачку контенту на iOS */
  -webkit-overflow-scrolling: touch;
  
  .swiper-wrapper {
    display: flex;
    transition-timing-function: linear !important;
    padding: 0px 0px;
    margin: 0 auto;
    /* Покращуємо продуктивність на мобільних */
    transform: translate3d(0,0,0);
  }

  @media screen and (min-width: 744px){
    width: 100vw;
  }

  @media screen and (min-width: 1440px){
    gap: 50px;
  }
`,Cw=T.img`
  height: 29px;
  width: 100%;
  object-fit: contain;
  padding: 0 auto;
  margin: 0 auto;
  
  /* Покращена оптимізація для мобільних */
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  /* Покращена анімація для iOS */
  transition: 
    filter 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.3s ease;
  transform: scale(1);
  
  /* Запобігаємо синім підсвічуванням на iOS */
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  
  &:hover,
  &:focus {
    filter: brightness(0) saturate(100%) invert(44%) sepia(98%) saturate(311%) hue-rotate(173deg) brightness(93%) contrast(89%);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
    transition-duration: 0.1s;
  }

  /* Медіа-запити для кращої реакції на тач */
  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: scale(1);
    }
    
    &:active {
      transform: scale(0.95);
    }
  }

  @media screen and (min-width: 1440px) {
    height: 42px;
    
    &:hover,
    &:focus {
      transform: scale(1.08);
    }
  }
`,HH=T(ie.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
  /* Оптимізація для iOS */
  /* -webkit-backface-visibility: hidden; */
`,VH=T(ie.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
  /* Оптимізація для iOS */
  /* -webkit-backface-visibility: hidden; */
`,_H=T.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 16px;
  color: var(--black-500);
  /* Запобігаємо виділенню тексту на тач-пристроях */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`,Ub="data:image/svg+xml,%3csvg%20width='212'%20height='14'%20viewBox='0%200%20212%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_572)'%3e%3cpath%20d='M0.00384521%2013.2272V0.640137H8.99637V3.40837H3.33527V5.99308H8.54597V8.76131H3.33527V13.2272H0.00384521Z'%20fill='%23242424'/%3e%3cpath%20d='M18.6412%2013.2272H15.3253V0.640137H18.6412V13.2272Z'%20fill='%23242424'/%3e%3cpath%20d='M25.0556%209.25083C26.3309%2010.122%2027.8304%2010.6204%2029.381%2010.6885C30.3595%2010.6885%2031.2758%2010.4591%2031.2758%209.61789C31.2758%209.02907%2030.8409%208.79966%2030.1964%208.61613L28.2628%208.08083C26.1117%207.44613%2024.9935%206.43671%2024.9935%204.44848C24.9935%202.0473%2027.1368%200.472008%2029.8858%200.472008C31.2634%200.447396%2032.6243%200.771251%2033.8385%201.4126V4.47142C32.6991%203.68452%2031.3471%203.2505%2029.9557%203.22495C28.9617%203.22495%2028.255%203.50789%2028.255%204.20377C28.255%204.71613%2028.6045%204.9226%2029.2723%205.12907L31.2059%205.7026C33.5356%206.42142%2034.5995%207.5073%2034.5995%209.39613C34.5995%2012.1032%2032.1223%2013.4949%2029.3732%2013.4949C27.8643%2013.4989%2026.378%2013.1337%2025.0478%2012.432L25.0556%209.25083Z'%20fill='%23242424'/%3e%3cpath%20d='M52.4525%200.640137V13.2272H49.1211V8.18778H44.2676V13.2272H40.8973V0.640137H44.2676V5.41955H49.1599V0.640137H52.4525Z'%20fill='%23242424'/%3e%3cpath%20d='M68.6747%200.640137V3.40837H62.9049V5.41955H68.2166V8.18778H62.9049V10.4819H68.7136V13.2501H59.5347V0.640137H68.6747Z'%20fill='%23242424'/%3e%3cpath%20d='M75.524%200.640137H80.9599C83.8098%200.640137%2085.9764%202.16955%2085.9764%204.98367C86.0132%205.85467%2085.761%206.71377%2085.2581%207.43116C84.7551%208.14856%2084.0287%208.68525%2083.1886%208.96014L86.5589%2013.2272H82.6761L79.6553%209.33484H78.8244V13.2272H75.524V0.640137ZM78.8554%206.55131H80.7657C81.9694%206.55131%2082.746%205.9319%2082.746%204.96837C82.746%204.00484%2081.9694%203.39308%2080.7657%203.39308H78.8709L78.8554%206.55131Z'%20fill='%23242424'/%3e%3cpath%20d='M106.485%2012.1795C105.502%2013.0123%20104.241%2013.4588%20102.944%2013.4337C100.242%2013.4337%2097.9897%2011.6901%2097.9897%208.84543C98.0077%208.02146%2098.2249%207.21358%2098.6233%206.48878C99.0217%205.76399%2099.5899%205.14316%20100.281%204.67778L99.007%203.14837V0.640137H107.549V3.40837H102.991L106.446%207.7519L107.223%206.56661H110.679L108.217%2010.0537L110.756%2013.2272H107.285L106.485%2012.1795ZM104.738%2010.0537L102.051%206.78837C101.716%207.01078%20101.442%207.31015%20101.251%207.66058C101.06%208.01101%20100.959%208.40194%20100.956%208.79955C100.953%209.05676%20101.003%209.31195%20101.102%209.54974C101.202%209.78752%20101.349%2010.003%20101.536%2010.1831C101.722%2010.3631%20101.944%2010.5042%20102.187%2010.5976C102.431%2010.691%20102.691%2010.7349%20102.952%2010.7266C103.28%2010.737%20103.607%2010.6828%20103.914%2010.5673C104.22%2010.4518%20104.501%2010.2771%20104.738%2010.0537Z'%20fill='%23242424'/%3e%3cpath%20d='M126.264%2013.2272H122.933V0.640137H128.369C131.219%200.640137%20133.385%202.16955%20133.385%204.98367C133.385%207.79778%20131.219%209.33484%20128.369%209.33484H126.264V13.2272ZM126.264%206.56661H128.136C129.347%206.56661%20130.116%205.9472%20130.116%204.98367C130.116%204.02014%20129.339%203.40837%20128.136%203.40837H126.241L126.264%206.56661Z'%20fill='%23242424'/%3e%3cpath%20d='M145.997%2010.9101H140.879L139.963%2013.2043H136.678L141.881%200.640137H145.049L150.252%2013.2272H146.897L145.997%2010.9101ZM141.982%208.1419H144.894L143.442%204.45602L141.982%208.1419Z'%20fill='%23242424'/%3e%3cpath%20d='M157.288%2013.2272V8.34837L152.457%200.640137H156.208L159.058%205.49602L161.908%200.640137H165.449L160.619%208.34837V13.2272H157.288Z'%20fill='%23242424'/%3e%3cpath%20d='M173.487%205.99308L177.571%200.640137H181.454L176.733%206.66602L181.64%2013.2272H177.688L173.487%207.59131V13.2272H170.155V0.640137H173.487V5.99308Z'%20fill='%23242424'/%3e%3cpath%20d='M195.751%200.640137V3.40837H189.934V5.41955H195.246V8.18778H189.934V10.4819H195.751V13.2501H186.603V0.640137H195.751Z'%20fill='%23242424'/%3e%3cpath%20d='M202.6%200.640137H205.931V10.459H211.678V13.2272H202.6V0.640137Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_572'%3e%3crect%20width='212'%20height='13'%20fill='white'%20transform='translate(0.00384521%200.433594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",ky=()=>{const e=ft({query:"(max-width: 743px)"}),t=ft({query:"(min-width: 744px) and (max-width: 1023px)"}),i=ft({query:"(min-width: 1024px)"}),a=[{id:1,imageUrl:iy},{id:2,imageUrl:t2},{id:3,imageUrl:ay},{id:4,imageUrl:ry},{id:5,imageUrl:sy},{id:6,imageUrl:oy},{id:7,imageUrl:ly},{id:8,imageUrl:cy},{id:9,imageUrl:uy},{id:10,imageUrl:dy},{id:11,imageUrl:fy},{id:12,imageUrl:py},{id:13,imageUrl:hy},{id:14,imageUrl:my},{id:15,imageUrl:gy},{id:16,imageUrl:xy},{id:17,imageUrl:vy},{id:18,imageUrl:yy},{id:19,imageUrl:wy},{id:20,imageUrl:Ub},{id:21,imageUrl:by},{id:22,imageUrl:Sy},{id:23,imageUrl:Cy},{id:24,imageUrl:Ty},{id:25,imageUrl:Ay},{id:26,imageUrl:Ey},{id:27,imageUrl:My},{id:28,imageUrl:jy},{id:29,imageUrl:Oy},{id:30,imageUrl:Ry},{id:31,imageUrl:Ly}],o=e?2:t?4:5,c=a.length>o,f={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ve}}},p={hidden:{opacity:0,scale:.8,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.6,ease:ve}},hover:{scale:1.1,y:-5,transition:{duration:.3,ease:ve}}};return m.jsxs("div",{children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:f,children:m.jsx(_H,{children:"Quality Service for Major & Luxury Brands"})}),m.jsxs(zH,{children:[m.jsx(HH,{}),m.jsx(ta,{loop:c,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[ba],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},touchRatio:1,touchAngle:45,shortSwipes:!0,resistance:!0,resistanceRatio:.85,children:a.map((h,x)=>m.jsx(na,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10,touchAction:"pan-y",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none"},children:m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:p,transition:{delay:x*.05},whileHover:"hover",style:{WebkitTransform:"translateZ(0)",backfaceVisibility:"hidden"},children:m.jsx(Cw,{src:h.imageUrl,alt:`Partner ${h.id}`,loading:"lazy",decoding:"async",onDragStart:y=>y.preventDefault(),draggable:"false"})})},h.id))}),m.jsx(ta,{loop:c,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[ba],className:"mySwiper",style:{width:"100%"},touchRatio:1,touchAngle:45,shortSwipes:!0,resistance:!0,resistanceRatio:.85,children:a.map((h,x)=>m.jsx(na,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10,touchAction:"pan-y",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none"},children:m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:p,transition:{delay:x*.05+.1},whileHover:"hover",style:{WebkitTransform:"translateZ(0)",backfaceVisibility:"hidden"},children:m.jsx(Cw,{src:h.imageUrl,alt:`Partner ${h.id}`,loading:"lazy",decoding:"async",onDragStart:y=>y.preventDefault(),draggable:"false"})})},h.id+100))}),m.jsx(VH,{})]})]})},NH="/assets/1-DnK8-Xbs.webp",PH=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 1.5rem;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1440px;
    padding: 2rem;
  }
`,BH=T.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    text-transform: uppercase;
  }
`,IH=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 3rem;
  }
`,UH=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  @media screen and (min-width: 1440px) {
    gap: 0.25rem;
  }
`,Tw=T.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 0.75rem;
  }
`;T.p`
  color: #242424;
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`;const $H=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`,GH=T.p`
  color: #242424;
  font-family: var(--second-family);
  font-size: 28px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`,qH=T.p`
  color: #242424;
  font-family: var(--second-family);
  font-size: 28px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
`,YH=T.img`
  display: block;
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  object-position: center;
  border-radius: 0.5rem;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;

  /* Покращена продуктивність для iOS */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;

  @media screen and (min-width: 768px) {
    max-height: 500px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 563px;
    max-height: 647px;
  }
`,Aw=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  @media screen and (min-width: 1440px) {
    padding-top: 40%;
  }
`,Ew=T.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4em;
  width: 100%;
`,n2=T(Kt)`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #242424;
  width: fit-content;
  background: transparent;
  transition: all 0.2s ease;
  text-decoration: none;

  /* Покращена доступність для тач-пристроїв */
  -webkit-tap-highlight-color: transparent;
  min-height: 44px;
  min-width: 44px;

  &:hover,
  &:focus {
    background-color: #242424;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,Mw=T.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  transition: color 0.2s ease;

  ${n2}:hover &, ${n2}:focus & {
    color: white;
  }
`,FH=T.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: 0.5rem;
  background: #fff;
  margin: 1rem;
  width: calc(100% - 2rem);
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    max-width: 400px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    /* left: 50%;
        transform: translateX(-50%); */
    bottom: 1px;
    right: auto;
    max-width: 500px;
    /* width: 88%; */
  }
`,WH=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
`,ZH=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
`,XH=T.p`
  color: var(--black-500);
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.4em;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`,KH=T.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  flex-wrap: wrap;
`,QH=T(Kt)`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: #3098ee;
  border: none;
  transition: all 0.2s ease;
  text-decoration: none;

  /* Покращена доступність для тач-пристроїв */
  -webkit-tap-highlight-color: transparent;
  min-height: 44px;
  min-width: 44px;

  &:hover,
  &:focus {
    background: #1a7bc9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,$3=T.button`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--black-500);
  border-radius: 0.5rem;
  background: transparent;
  transition: all 0.2s ease;

  /* Покращена доступність для тач-пристроїв */
  -webkit-tap-highlight-color: transparent;
  min-height: 44px;
  min-width: 44px;

  &:hover,
  &:focus {
    background-color: #242424;
    border-color: #242424;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,$b=T.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
`,JH=T($b)`
  color: #242424;
  transition: color 0.2s ease;

  ${$3}:hover &, ${$3}:focus & {
    color: white;
  }
`,eV=T.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`;T.div`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }

  /* Усунення горизонтального скролу на iOS */
  @supports (-webkit-touch-callout: none) {
    body {
      position: fixed;
      width: 100%;
      height: 100%;
    }
  }
`;const Bx={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:ve}}},jw={hidden:{opacity:0,x:-40},visible:{opacity:1,x:0,transition:{duration:.7,ease:ve}}},om={hidden:{opacity:0,x:40},visible:{opacity:1,x:0,transition:{duration:.7,ease:ve}}},tV={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.8,ease:ve}}},nV={visible:{transition:{staggerChildren:.1}}},Gb=()=>{const e=ft({query:"(min-width: 1440px)"}),[t,i]=N.useState(!1),a=N.useRef(null),o=E2(a,{once:!0,margin:"-20%"});N.useEffect(()=>{o&&!t&&i(!0)},[o,t]);const{scrollY:c}=Pr(),f=on(c,[0,300],[0,e?-50:-20],{clamp:!1});return m.jsxs(PH,{ref:a,children:[m.jsx(ie.div,{initial:"hidden",animate:t?"visible":"hidden",variants:Bx,children:m.jsx(BH,{children:"Our Service"})}),m.jsxs(IH,{children:[m.jsxs(UH,{children:[m.jsxs(ie.div,{initial:"hidden",animate:t?"visible":"hidden",variants:nV,children:[m.jsx(ie.div,{variants:jw,children:m.jsx(Tw,{children:m.jsx($H,{children:"Refrigerator Repair "})})}),m.jsx(ie.div,{variants:jw,children:m.jsx(GH,{children:"& Maintenance"})})]}),e&&m.jsx(ie.div,{initial:"hidden",animate:t?"visible":"hidden",variants:Bx,children:m.jsxs(Aw,{children:[m.jsx(Ew,{children:"Do you want to know more about our service?"}),m.jsx(n2,{to:"/fridge#ap",children:m.jsx(Mw,{children:"Learn more"})})]})})]}),m.jsxs(eV,{children:[m.jsx(ie.div,{style:{y:f},initial:"hidden",animate:t?"visible":"hidden",variants:tV,children:m.jsx(YH,{src:NH,alt:"Services Image",loading:"lazy"})}),m.jsx(ie.div,{initial:"hidden",animate:t?"visible":"hidden",variants:om,children:m.jsxs(FH,{children:[m.jsxs(WH,{children:[m.jsx(ie.div,{variants:om,children:m.jsx(Tw,{children:m.jsx(qH,{children:"Regular Maintenance Matters"})})}),m.jsx(ie.div,{variants:om,children:m.jsx(ZH,{children:m.jsx(XH,{children:"Most refrigerator problems happen because regular service is skipped. Keep your fridge running longer and more efficiently with routine maintenance. Proudly serving Thousand Oaks & nearby cities"})})})]}),m.jsx(ie.div,{variants:om,children:m.jsxs(KH,{children:[m.jsx(QH,{to:"/contact#ap",children:m.jsx($b,{children:"Contact Us"})}),m.jsx($3,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(JH,{children:"Call Us"})})})]})})]})})]}),!e&&m.jsx(ie.div,{initial:"hidden",animate:t?"visible":"hidden",variants:Bx,children:m.jsxs(Aw,{children:[m.jsx(Ew,{children:"Do you want to know more about our service?"}),m.jsx(n2,{to:"/fridge#ap",children:m.jsx(Mw,{children:"Learn more"})})]})})]})]})},iV="/assets/Service%20Area%20Section-B7et7wWI.webp",aV=T.div`
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
`,rV=T.h2`
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
`;T.p`
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
`;const sV=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 100vw;
  padding: 0 5px;
  padding-top: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
     padding-top: 40px;
  }
`,oV=T.div`
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
`,lV=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,cV=T.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,uV=T.p`
  color: #3098ee;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,dV=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,fV=[{county:"Ventura County",city:"Thousand Oaks",icon:m.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:m.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Newbury Park",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Westlake Village",icon:m.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:m.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Oak Park",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Lake Sherwood",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Hidden Valley",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Camarillo",icon:m.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:m.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Agoura Hills",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Moorpark",icon:m.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:m.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Calabasas",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Santa Rosa Valley",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Malibu",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}],pV={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ve}}},hV={hidden:{opacity:0,y:50,scale:.9,rotateX:-5},visible:e=>({opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.6,delay:e*.1,ease:ve}}),hover:{y:-10,scale:1.05,rotateY:5,boxShadow:"0 20px 40px rgba(0,0,0,0.15)",transition:{duration:.3,ease:ve}},tap:{scale:.98}},mV={hidden:{opacity:0,scale:.8,rotate:-90},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.5,ease:wa}},hover:{scale:1.2,rotate:5,transition:{duration:.2}}},gV=()=>m.jsxs(aV,{$bg:iV,children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:pV,children:m.jsx(rV,{children:"Serving Ventura and Los Angeles Counties"})}),m.jsx(sV,{children:fV.map((e,t)=>m.jsx(ie.div,{custom:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:hV,whileHover:"hover",whileTap:"tap",children:m.jsxs(oV,{children:[m.jsxs(lV,{children:[m.jsx(ie.div,{variants:mV,whileHover:"hover",children:m.jsx(cV,{children:e.icon})}),m.jsx(ie.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:t*.1+.2},children:m.jsx(uV,{children:e.county})})]}),m.jsx(ie.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:t*.1+.3},children:m.jsx(dV,{children:e.city})})]})},t))})]}),xV="/assets/WhyAirtexnoImage-BBTHkk8n.png",Ow="/assets/2-CxJwQy4V.webp",vV="/assets/4-XHlbsOsY.webp",Rw="/assets/3-MhJO1mTW.webp",lm="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2011H4.6C4.03995%2011%203.75992%2011%203.54601%2011.109C3.35785%2011.2049%203.20487%2011.3578%203.10899%2011.546C3%2011.7599%203%2012.0399%203%2012.6V21M16.5%2011H19.4C19.9601%2011%2020.2401%2011%2020.454%2011.109C20.6422%2011.2049%2020.7951%2011.3578%2020.891%2011.546C21%2011.7599%2021%2012.0399%2021%2012.6V21M16.5%2021V6.2C16.5%205.0799%2016.5%204.51984%2016.282%204.09202C16.0903%203.71569%2015.7843%203.40973%2015.408%203.21799C14.9802%203%2014.4201%203%2013.3%203H10.7C9.5799%203%209.01984%203%208.59202%203.21799C8.2157%203.40973%207.90973%203.71569%207.71799%204.09202C7.5%204.51984%207.5%205.0799%207.5%206.2V21M22%2021H2M11%207H13M11%2011H13M11%2015H13'%20stroke='%233098EE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Lw="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206V12L16%2014M22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";var z0={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var yV=z0.exports,kw;function wV(){return kw||(kw=1,function(e,t){(function(){var i,a="4.17.21",o=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",f="Expected a function",p="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",x=500,y="__lodash_placeholder__",b=1,S=2,E=4,A=1,k=2,_=1,R=2,O=4,L=8,P=16,V=32,F=64,G=128,Q=256,ne=512,se=30,de="...",ye=800,Ee=16,Oe=1,Ae=2,Z=3,le=1/0,ue=9007199254740991,xe=17976931348623157e292,B=NaN,re=4294967295,we=re-1,be=re>>>1,Re=[["ary",G],["bind",_],["bindKey",R],["curry",L],["curryRight",P],["flip",ne],["partial",V],["partialRight",F],["rearg",Q]],$e="[object Arguments]",ke="[object Array]",ln="[object AsyncFunction]",it="[object Boolean]",Ft="[object Date]",Br="[object DOMException]",Si="[object Error]",On="[object Function]",uc="[object GeneratorFunction]",ai="[object Map]",Ho="[object Number]",H2="[object Null]",cn="[object Object]",mp="[object Promise]",gp="[object Proxy]",Ss="[object RegExp]",Nn="[object Set]",Vo="[object String]",_o="[object Symbol]",V2="[object Undefined]",No="[object WeakMap]",Po="[object WeakSet]",yn="[object ArrayBuffer]",ri="[object DataView]",Rn="[object Float32Array]",Td="[object Float64Array]",Ad="[object Int8Array]",Ed="[object Int16Array]",Cs="[object Int32Array]",Ts="[object Uint8Array]",Ca="[object Uint8ClampedArray]",As="[object Uint16Array]",Ir="[object Uint32Array]",_2=/\b__p \+= '';/g,xp=/\b(__p \+=) '' \+/g,vp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,dc=/&(?:amp|lt|gt|quot|#39);/g,Es=/[&<>"']/g,N2=RegExp(dc.source),yp=RegExp(Es.source),wp=/<%-([\s\S]+?)%>/g,Md=/<%([\s\S]+?)%>/g,fc=/<%=([\s\S]+?)%>/g,bp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P2=/^\w*$/,Za=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,un=/[\\^$.*+?()[\]{}|]/g,Pn=RegExp(un.source),Xa=/^\s+/,jd=/\s/,B2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,I2=/\{\n\/\* \[wrapped with (.+)\] \*/,Sp=/,? & /,Bo=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Od=/[()=,{}\[\]\/\s]/,Ms=/\\(\\)?/g,js=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Os=/\w*$/,Rs=/^[-+]0x[0-9a-f]+$/i,dn=/^0b[01]+$/i,Cp=/^\[object .+?Constructor\]$/,Tp=/^0o[0-7]+$/i,Ur=/^(?:0|[1-9]\d*)$/,Ls=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,pc=/($^)/,Ap=/['\n\r\u2028\u2029\\]/g,Io="\\ud800-\\udfff",U2="\\u0300-\\u036f",hc="\\ufe20-\\ufe2f",mc="\\u20d0-\\u20ff",aa=U2+hc+mc,gc="\\u2700-\\u27bf",Rd="a-z\\xdf-\\xf6\\xf8-\\xff",ks="\\xac\\xb1\\xd7\\xf7",Ld="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",kd="\\u2000-\\u206f",$2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Dd="A-Z\\xc0-\\xd6\\xd8-\\xde",si="\\ufe0e\\ufe0f",zd=ks+Ld+kd+$2,Hd="['’]",xc="["+Io+"]",Vd="["+zd+"]",$r="["+aa+"]",Ep="\\d+",Ci="["+gc+"]",vc="["+Rd+"]",_d="[^"+Io+zd+Ep+gc+Rd+Dd+"]",Uo="\\ud83c[\\udffb-\\udfff]",Ds="(?:"+$r+"|"+Uo+")",Nd="[^"+Io+"]",yc="(?:\\ud83c[\\udde6-\\uddff]){2}",Ka="[\\ud800-\\udbff][\\udc00-\\udfff]",zs="["+Dd+"]",Pd="\\u200d",Bd="(?:"+vc+"|"+_d+")",Id="(?:"+zs+"|"+_d+")",Mp="(?:"+Hd+"(?:d|ll|m|re|s|t|ve))?",jp="(?:"+Hd+"(?:D|LL|M|RE|S|T|VE))?",$o=Ds+"?",wc="["+si+"]?",Ud="(?:"+Pd+"(?:"+[Nd,yc,Ka].join("|")+")"+wc+$o+")*",Hs="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Vs="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",$d=wc+$o+Ud,Gd="(?:"+[Ci,yc,Ka].join("|")+")"+$d,Op="(?:"+[Nd+$r+"?",$r,yc,Ka,xc].join("|")+")",Go=RegExp(Hd,"g"),Ta=RegExp($r,"g"),qo=RegExp(Uo+"(?="+Uo+")|"+Op+$d,"g"),Yo=RegExp([zs+"?"+vc+"+"+Mp+"(?="+[Vd,zs,"$"].join("|")+")",Id+"+"+jp+"(?="+[Vd,zs+Bd,"$"].join("|")+")",zs+"?"+Bd+"+"+Mp,zs+"+"+jp,Vs,Hs,Ep,Gd].join("|"),"g"),Qa=RegExp("["+Pd+Io+aa+si+"]"),qd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,bc=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Rp=-1,wt={};wt[Rn]=wt[Td]=wt[Ad]=wt[Ed]=wt[Cs]=wt[Ts]=wt[Ca]=wt[As]=wt[Ir]=!0,wt[$e]=wt[ke]=wt[yn]=wt[it]=wt[ri]=wt[Ft]=wt[Si]=wt[On]=wt[ai]=wt[Ho]=wt[cn]=wt[Ss]=wt[Nn]=wt[Vo]=wt[No]=!1;var pt={};pt[$e]=pt[ke]=pt[yn]=pt[ri]=pt[it]=pt[Ft]=pt[Rn]=pt[Td]=pt[Ad]=pt[Ed]=pt[Cs]=pt[ai]=pt[Ho]=pt[cn]=pt[Ss]=pt[Nn]=pt[Vo]=pt[_o]=pt[Ts]=pt[Ca]=pt[As]=pt[Ir]=!0,pt[Si]=pt[On]=pt[No]=!1;var Lp={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Bn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Gr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Sc={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Fo=parseFloat,G2=parseInt,Cc=typeof $1=="object"&&$1&&$1.Object===Object&&$1,Yd=typeof self=="object"&&self&&self.Object===Object&&self,qt=Cc||Yd||Function("return this")(),_s=t&&!t.nodeType&&t,Ja=_s&&!0&&e&&!e.nodeType&&e,kp=Ja&&Ja.exports===_s,Fd=kp&&Cc.process,Ti=function(){try{var Y=Ja&&Ja.require&&Ja.require("util").types;return Y||Fd&&Fd.binding&&Fd.binding("util")}catch{}}(),Tc=Ti&&Ti.isArrayBuffer,Dp=Ti&&Ti.isDate,zp=Ti&&Ti.isMap,Hp=Ti&&Ti.isRegExp,Vp=Ti&&Ti.isSet,_p=Ti&&Ti.isTypedArray;function In(Y,oe,ae){switch(ae.length){case 0:return Y.call(oe);case 1:return Y.call(oe,ae[0]);case 2:return Y.call(oe,ae[0],ae[1]);case 3:return Y.call(oe,ae[0],ae[1],ae[2])}return Y.apply(oe,ae)}function q2(Y,oe,ae,Se){for(var Ve=-1,rt=Y==null?0:Y.length;++Ve<rt;){var Wt=Y[Ve];oe(Se,Wt,ae(Wt),Y)}return Se}function Ai(Y,oe){for(var ae=-1,Se=Y==null?0:Y.length;++ae<Se&&oe(Y[ae],ae,Y)!==!1;);return Y}function Y2(Y,oe){for(var ae=Y==null?0:Y.length;ae--&&oe(Y[ae],ae,Y)!==!1;);return Y}function Np(Y,oe){for(var ae=-1,Se=Y==null?0:Y.length;++ae<Se;)if(!oe(Y[ae],ae,Y))return!1;return!0}function ra(Y,oe){for(var ae=-1,Se=Y==null?0:Y.length,Ve=0,rt=[];++ae<Se;){var Wt=Y[ae];oe(Wt,ae,Y)&&(rt[Ve++]=Wt)}return rt}function Ac(Y,oe){var ae=Y==null?0:Y.length;return!!ae&&Ns(Y,oe,0)>-1}function Wd(Y,oe,ae){for(var Se=-1,Ve=Y==null?0:Y.length;++Se<Ve;)if(ae(oe,Y[Se]))return!0;return!1}function Dt(Y,oe){for(var ae=-1,Se=Y==null?0:Y.length,Ve=Array(Se);++ae<Se;)Ve[ae]=oe(Y[ae],ae,Y);return Ve}function Aa(Y,oe){for(var ae=-1,Se=oe.length,Ve=Y.length;++ae<Se;)Y[Ve+ae]=oe[ae];return Y}function Zd(Y,oe,ae,Se){var Ve=-1,rt=Y==null?0:Y.length;for(Se&&rt&&(ae=Y[++Ve]);++Ve<rt;)ae=oe(ae,Y[Ve],Ve,Y);return ae}function F2(Y,oe,ae,Se){var Ve=Y==null?0:Y.length;for(Se&&Ve&&(ae=Y[--Ve]);Ve--;)ae=oe(ae,Y[Ve],Ve,Y);return ae}function Xd(Y,oe){for(var ae=-1,Se=Y==null?0:Y.length;++ae<Se;)if(oe(Y[ae],ae,Y))return!0;return!1}var W2=Mc("length");function Z2(Y){return Y.split("")}function X2(Y){return Y.match(Bo)||[]}function Pp(Y,oe,ae){var Se;return ae(Y,function(Ve,rt,Wt){if(oe(Ve,rt,Wt))return Se=rt,!1}),Se}function Ec(Y,oe,ae,Se){for(var Ve=Y.length,rt=ae+(Se?1:-1);Se?rt--:++rt<Ve;)if(oe(Y[rt],rt,Y))return rt;return-1}function Ns(Y,oe,ae){return oe===oe?eg(Y,oe,ae):Ec(Y,Ps,ae)}function Kd(Y,oe,ae,Se){for(var Ve=ae-1,rt=Y.length;++Ve<rt;)if(Se(Y[Ve],oe))return Ve;return-1}function Ps(Y){return Y!==Y}function Bp(Y,oe){var ae=Y==null?0:Y.length;return ae?Oc(Y,oe)/ae:B}function Mc(Y){return function(oe){return oe==null?i:oe[Y]}}function jc(Y){return function(oe){return Y==null?i:Y[oe]}}function Qd(Y,oe,ae,Se,Ve){return Ve(Y,function(rt,Wt,st){ae=Se?(Se=!1,rt):oe(ae,rt,Wt,st)}),ae}function Ip(Y,oe){var ae=Y.length;for(Y.sort(oe);ae--;)Y[ae]=Y[ae].value;return Y}function Oc(Y,oe){for(var ae,Se=-1,Ve=Y.length;++Se<Ve;){var rt=oe(Y[Se]);rt!==i&&(ae=ae===i?rt:ae+rt)}return ae}function er(Y,oe){for(var ae=-1,Se=Array(Y);++ae<Y;)Se[ae]=oe(ae);return Se}function K2(Y,oe){return Dt(oe,function(ae){return[ae,Y[ae]]})}function Up(Y){return Y&&Y.slice(0,ef(Y)+1).replace(Xa,"")}function oi(Y){return function(oe){return Y(oe)}}function Rc(Y,oe){return Dt(oe,function(ae){return Y[ae]})}function Bs(Y,oe){return Y.has(oe)}function Is(Y,oe){for(var ae=-1,Se=Y.length;++ae<Se&&Ns(oe,Y[ae],0)>-1;);return ae}function Us(Y,oe){for(var ae=Y.length;ae--&&Ns(oe,Y[ae],0)>-1;);return ae}function Q2(Y,oe){for(var ae=Y.length,Se=0;ae--;)Y[ae]===oe&&++Se;return Se}var Lc=jc(Lp),$p=jc(Bn);function Gp(Y){return"\\"+Sc[Y]}function Jd(Y,oe){return Y==null?i:Y[oe]}function tr(Y){return Qa.test(Y)}function qp(Y){return qd.test(Y)}function Yp(Y){for(var oe,ae=[];!(oe=Y.next()).done;)ae.push(oe.value);return ae}function kc(Y){var oe=-1,ae=Array(Y.size);return Y.forEach(function(Se,Ve){ae[++oe]=[Ve,Se]}),ae}function Fp(Y,oe){return function(ae){return Y(oe(ae))}}function nr(Y,oe){for(var ae=-1,Se=Y.length,Ve=0,rt=[];++ae<Se;){var Wt=Y[ae];(Wt===oe||Wt===y)&&(Y[ae]=y,rt[Ve++]=ae)}return rt}function Dc(Y){var oe=-1,ae=Array(Y.size);return Y.forEach(function(Se){ae[++oe]=Se}),ae}function J2(Y){var oe=-1,ae=Array(Y.size);return Y.forEach(function(Se){ae[++oe]=[Se,Se]}),ae}function eg(Y,oe,ae){for(var Se=ae-1,Ve=Y.length;++Se<Ve;)if(Y[Se]===oe)return Se;return-1}function li(Y,oe,ae){for(var Se=ae+1;Se--;)if(Y[Se]===oe)return Se;return Se}function sa(Y){return tr(Y)?Zp(Y):W2(Y)}function Ei(Y){return tr(Y)?tf(Y):Z2(Y)}function ef(Y){for(var oe=Y.length;oe--&&jd.test(Y.charAt(oe)););return oe}var Wp=jc(Gr);function Zp(Y){for(var oe=qo.lastIndex=0;qo.test(Y);)++oe;return oe}function tf(Y){return Y.match(qo)||[]}function tg(Y){return Y.match(Yo)||[]}var $s=function Y(oe){oe=oe==null?qt:ir.defaults(qt.Object(),oe,ir.pick(qt,bc));var ae=oe.Array,Se=oe.Date,Ve=oe.Error,rt=oe.Function,Wt=oe.Math,st=oe.Object,zc=oe.RegExp,Xp=oe.String,ci=oe.TypeError,Hc=ae.prototype,ng=rt.prototype,Gs=st.prototype,Wo=oe["__core-js_shared__"],Zo=ng.toString,ct=Gs.hasOwnProperty,Ii=0,nf=function(){var l=/[^.]+$/.exec(Wo&&Wo.keys&&Wo.keys.IE_PROTO||"");return l?"Symbol(src)_1."+l:""}(),Ln=Gs.toString,Mi=Zo.call(st),qs=qt._,af=zc("^"+Zo.call(ct).replace(un,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),qr=kp?oe.Buffer:i,Ui=oe.Symbol,Ys=oe.Uint8Array,Yr=qr?qr.allocUnsafe:i,Xo=Fp(st.getPrototypeOf,st),Ko=st.create,Fr=Gs.propertyIsEnumerable,Vc=Hc.splice,Un=Ui?Ui.isConcatSpreadable:i,Wr=Ui?Ui.iterator:i,kn=Ui?Ui.toStringTag:i,Qo=function(){try{var l=fr(st,"defineProperty");return l({},"",{}),l}catch{}}(),_c=oe.clearTimeout!==qt.clearTimeout&&oe.clearTimeout,Zr=Se&&Se.now!==qt.Date.now&&Se.now,rf=oe.setTimeout!==qt.setTimeout&&oe.setTimeout,Fs=Wt.ceil,Ea=Wt.floor,ar=st.getOwnPropertySymbols,Nc=qr?qr.isBuffer:i,Jo=oe.isFinite,ji=Hc.join,Oi=Fp(st.keys,st),Lt=Wt.max,zt=Wt.min,Ma=Se.now,Xr=oe.parseInt,sf=Wt.random,of=Hc.reverse,el=fr(oe,"DataView"),Qt=fr(oe,"Map"),Ht=fr(oe,"Promise"),Je=fr(oe,"Set"),$i=fr(oe,"WeakMap"),$n=fr(st,"create"),Ws=$i&&new $i,Ri={},Kp=Va(el),Qp=Va(Qt),tl=Va(Ht),nl=Va(Je),Jp=Va($i),rr=Ui?Ui.prototype:i,Kr=rr?rr.valueOf:i,sr=rr?rr.toString:i;function D(l){if(Nt(l)&&!Pe(l)&&!(l instanceof Fe)){if(l instanceof Gn)return l;if(ct.call(l,"__wrapped__"))return en(l)}return new Gn(l)}var ui=function(){function l(){}return function(u){if(!_t(u))return{};if(Ko)return Ko(u);l.prototype=u;var v=new l;return l.prototype=i,v}}();function Li(){}function Gn(l,u){this.__wrapped__=l,this.__actions__=[],this.__chain__=!!u,this.__index__=0,this.__values__=i}D.templateSettings={escape:wp,evaluate:Md,interpolate:fc,variable:"",imports:{_:D}},D.prototype=Li.prototype,D.prototype.constructor=D,Gn.prototype=ui(Li.prototype),Gn.prototype.constructor=Gn;function Fe(l){this.__wrapped__=l,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=re,this.__views__=[]}function il(){var l=new Fe(this.__wrapped__);return l.__actions__=Jt(this.__actions__),l.__dir__=this.__dir__,l.__filtered__=this.__filtered__,l.__iteratees__=Jt(this.__iteratees__),l.__takeCount__=this.__takeCount__,l.__views__=Jt(this.__views__),l}function Pc(){if(this.__filtered__){var l=new Fe(this);l.__dir__=-1,l.__filtered__=!0}else l=this.clone(),l.__dir__*=-1;return l}function Qr(){var l=this.__wrapped__.value(),u=this.__dir__,v=Pe(l),C=u<0,j=v?l.length:0,H=kh(0,j,this.__views__),I=H.start,$=H.end,X=$-I,pe=C?$:I-1,me=this.__iteratees__,ge=me.length,Ce=0,Me=zt(X,this.__takeCount__);if(!v||!C&&j==X&&Me==X)return vh(l,this.__actions__);var _e=[];e:for(;X--&&Ce<Me;){pe+=u;for(var Ze=-1,Ne=l[pe];++Ze<ge;){var nt=me[Ze],lt=nt.iteratee,Xi=nt.type,xi=lt(Ne);if(Xi==Ae)Ne=xi;else if(!xi){if(Xi==Oe)continue e;break e}}_e[Ce++]=Ne}return _e}Fe.prototype=ui(Li.prototype),Fe.prototype.constructor=Fe;function Bt(l){var u=-1,v=l==null?0:l.length;for(this.clear();++u<v;){var C=l[u];this.set(C[0],C[1])}}function Bc(){this.__data__=$n?$n(null):{},this.size=0}function eh(l){var u=this.has(l)&&delete this.__data__[l];return this.size-=u?1:0,u}function ig(l){var u=this.__data__;if($n){var v=u[l];return v===h?i:v}return ct.call(u,l)?u[l]:i}function ag(l){var u=this.__data__;return $n?u[l]!==i:ct.call(u,l)}function rg(l,u){var v=this.__data__;return this.size+=this.has(l)?0:1,v[l]=$n&&u===i?h:u,this}Bt.prototype.clear=Bc,Bt.prototype.delete=eh,Bt.prototype.get=ig,Bt.prototype.has=ag,Bt.prototype.set=rg;function Et(l){var u=-1,v=l==null?0:l.length;for(this.clear();++u<v;){var C=l[u];this.set(C[0],C[1])}}function lf(){this.__data__=[],this.size=0}function al(l){var u=this.__data__,v=Ks(u,l);if(v<0)return!1;var C=u.length-1;return v==C?u.pop():Vc.call(u,v,1),--this.size,!0}function rl(l){var u=this.__data__,v=Ks(u,l);return v<0?i:u[v][1]}function cf(l){return Ks(this.__data__,l)>-1}function Zs(l,u){var v=this.__data__,C=Ks(v,l);return C<0?(++this.size,v.push([l,u])):v[C][1]=u,this}Et.prototype.clear=lf,Et.prototype.delete=al,Et.prototype.get=rl,Et.prototype.has=cf,Et.prototype.set=Zs;function qn(l){var u=-1,v=l==null?0:l.length;for(this.clear();++u<v;){var C=l[u];this.set(C[0],C[1])}}function sg(){this.size=0,this.__data__={hash:new Bt,map:new(Qt||Et),string:new Bt}}function th(l){var u=io(this,l).delete(l);return this.size-=u?1:0,u}function og(l){return io(this,l).get(l)}function nh(l){return io(this,l).has(l)}function Jr(l,u){var v=io(this,l),C=v.size;return v.set(l,u),this.size+=v.size==C?0:1,this}qn.prototype.clear=sg,qn.prototype.delete=th,qn.prototype.get=og,qn.prototype.has=nh,qn.prototype.set=Jr;function ja(l){var u=-1,v=l==null?0:l.length;for(this.__data__=new qn;++u<v;)this.add(l[u])}function Ic(l){return this.__data__.set(l,h),this}function ih(l){return this.__data__.has(l)}ja.prototype.add=ja.prototype.push=Ic,ja.prototype.has=ih;function Dn(l){var u=this.__data__=new Et(l);this.size=u.size}function ah(){this.__data__=new Et,this.size=0}function Uc(l){var u=this.__data__,v=u.delete(l);return this.size=u.size,v}function uf(l){return this.__data__.get(l)}function rh(l){return this.__data__.has(l)}function $c(l,u){var v=this.__data__;if(v instanceof Et){var C=v.__data__;if(!Qt||C.length<o-1)return C.push([l,u]),this.size=++v.size,this;v=this.__data__=new qn(C)}return v.set(l,u),this.size=v.size,this}Dn.prototype.clear=ah,Dn.prototype.delete=Uc,Dn.prototype.get=uf,Dn.prototype.has=rh,Dn.prototype.set=$c;function df(l,u){var v=Pe(l),C=!v&&Ba(l),j=!v&&!C&&Sr(l),H=!v&&!C&&!j&&vo(l),I=v||C||j||H,$=I?er(l.length,Xp):[],X=$.length;for(var pe in l)(u||ct.call(l,pe))&&!(I&&(pe=="length"||j&&(pe=="offset"||pe=="parent")||H&&(pe=="buffer"||pe=="byteLength"||pe=="byteOffset")||Fi(pe,X)))&&$.push(pe);return $}function Xs(l){var u=l.length;return u?l[Jc(0,u-1)]:i}function sh(l,u){return kl(Jt(l),qi(u,0,l.length))}function oh(l){return kl(Jt(l))}function oa(l,u,v){(v!==i&&!Qn(l[u],v)||v===i&&!(u in l))&&Gi(l,u,v)}function es(l,u,v){var C=l[u];(!(ct.call(l,u)&&Qn(C,v))||v===i&&!(u in l))&&Gi(l,u,v)}function Ks(l,u){for(var v=l.length;v--;)if(Qn(l[v][0],u))return v;return-1}function or(l,u,v,C){return Ra(l,function(j,H,I){u(C,j,v(j),I)}),C}function Oa(l,u){return l&&Wn(u,an(u),l)}function sl(l,u){return l&&Wn(u,hn(u),l)}function Gi(l,u,v){u=="__proto__"&&Qo?Qo(l,u,{configurable:!0,enumerable:!0,value:v,writable:!0}):l[u]=v}function ol(l,u){for(var v=-1,C=u.length,j=ae(C),H=l==null;++v<C;)j[v]=H?i:Yl(l,u[v]);return j}function qi(l,u,v){return l===l&&(v!==i&&(l=l<=v?l:v),u!==i&&(l=l>=u?l:u)),l}function Sn(l,u,v,C,j,H){var I,$=u&b,X=u&S,pe=u&E;if(v&&(I=j?v(l,C,j,H):v(l)),I!==i)return I;if(!_t(l))return l;var me=Pe(l);if(me){if(I=_f(l),!$)return Jt(l,I)}else{var ge=pn(l),Ce=ge==On||ge==uc;if(Sr(l))return Of(l,$);if(ge==cn||ge==$e||Ce&&!j){if(I=X||Ce?{}:Nf(l),!$)return X?wl(l,sl(I,l)):ru(l,Oa(I,l))}else{if(!pt[ge])return j?l:{};I=Pf(l,ge,$)}}H||(H=new Dn);var Me=H.get(l);if(Me)return Me;H.set(l,I),T1(l)?l.forEach(function(Ne){I.add(Sn(Ne,u,v,Ne,l,H))}):Ru(l)&&l.forEach(function(Ne,nt){I.set(nt,Sn(Ne,u,v,nt,l,H))});var _e=pe?X?cu:lu:X?hn:an,Ze=me?i:_e(l);return Ai(Ze||l,function(Ne,nt){Ze&&(nt=Ne,Ne=l[nt]),es(I,nt,Sn(Ne,u,v,nt,l,H))}),I}function lh(l){var u=an(l);return function(v){return ff(v,l,u)}}function ff(l,u,v){var C=v.length;if(l==null)return!C;for(l=st(l);C--;){var j=v[C],H=u[j],I=l[j];if(I===i&&!(j in l)||!H(I))return!1}return!0}function ts(l,u,v){if(typeof l!="function")throw new ci(f);return ro(function(){l.apply(i,v)},u)}function lr(l,u,v,C){var j=-1,H=Ac,I=!0,$=l.length,X=[],pe=u.length;if(!$)return X;v&&(u=Dt(u,oi(v))),C?(H=Wd,I=!1):u.length>=o&&(H=Bs,I=!1,u=new ja(u));e:for(;++j<$;){var me=l[j],ge=v==null?me:v(me);if(me=C||me!==0?me:0,I&&ge===ge){for(var Ce=pe;Ce--;)if(u[Ce]===ge)continue e;X.push(me)}else H(u,ge,C)||X.push(me)}return X}var Ra=Df(Cn),Gc=Df(Js,!0);function pf(l,u){var v=!0;return Ra(l,function(C,j,H){return v=!!u(C,j,H),v}),v}function Yi(l,u,v){for(var C=-1,j=l.length;++C<j;){var H=l[C],I=u(H);if(I!=null&&($===i?I===I&&!Vn(I):v(I,$)))var $=I,X=H}return X}function qe(l,u,v,C){var j=l.length;for(v=Ie(v),v<0&&(v=-v>j?0:j+v),C=C===i||C>j?j:Ie(C),C<0&&(C+=j),C=v>C?0:ga(C);v<C;)l[v++]=u;return l}function ht(l,u){var v=[];return Ra(l,function(C,j,H){u(C,j,H)&&v.push(C)}),v}function et(l,u,v,C,j){var H=-1,I=l.length;for(v||(v=za),j||(j=[]);++H<I;){var $=l[H];u>0&&v($)?u>1?et($,u-1,v,C,j):Aa(j,$):C||(j[j.length]=$)}return j}var Qs=ls(),ns=ls(!0);function Cn(l,u){return l&&Qs(l,u,an)}function Js(l,u){return l&&ns(l,u,an)}function cr(l,u){return ra(u,function(v){return Wi(l[v])})}function ki(l,u){u=ka(u,l);for(var v=0,C=u.length;l!=null&&v<C;)l=l[dt(u[v++])];return v&&v==C?l:i}function ch(l,u,v){var C=u(l);return Pe(l)?C:Aa(C,v(l))}function tt(l){return l==null?l===i?V2:H2:kn&&kn in st(l)?Lh(l):_h(l)}function ll(l,u){return l>u}function hf(l,u){return l!=null&&ct.call(l,u)}function uh(l,u){return l!=null&&u in st(l)}function dh(l,u,v){return l>=zt(u,v)&&l<Lt(u,v)}function mf(l,u,v){for(var C=v?Wd:Ac,j=l[0].length,H=l.length,I=H,$=ae(H),X=1/0,pe=[];I--;){var me=l[I];I&&u&&(me=Dt(me,oi(u))),X=zt(me.length,X),$[I]=!v&&(u||j>=120&&me.length>=120)?new ja(I&&me):i}me=l[0];var ge=-1,Ce=$[0];e:for(;++ge<j&&pe.length<X;){var Me=me[ge],_e=u?u(Me):Me;if(Me=v||Me!==0?Me:0,!(Ce?Bs(Ce,_e):C(pe,_e,v))){for(I=H;--I;){var Ze=$[I];if(!(Ze?Bs(Ze,_e):C(l[I],_e,v)))continue e}Ce&&Ce.push(_e),pe.push(Me)}}return pe}function gf(l,u,v,C){return Cn(l,function(j,H,I){u(C,v(j),H,I)}),C}function is(l,u,v){u=ka(u,l),l=ao(l,u);var C=l==null?l:l[dt(Tn(u))];return C==null?i:In(C,l,v)}function qc(l){return Nt(l)&&tt(l)==$e}function Yn(l){return Nt(l)&&tt(l)==yn}function Zt(l){return Nt(l)&&tt(l)==Ft}function as(l,u,v,C,j){return l===u?!0:l==null||u==null||!Nt(l)&&!Nt(u)?l!==l&&u!==u:cl(l,u,v,C,as,j)}function cl(l,u,v,C,j,H){var I=Pe(l),$=Pe(u),X=I?ke:pn(l),pe=$?ke:pn(u);X=X==$e?cn:X,pe=pe==$e?cn:pe;var me=X==cn,ge=pe==cn,Ce=X==pe;if(Ce&&Sr(l)){if(!Sr(u))return!1;I=!0,me=!1}if(Ce&&!me)return H||(H=new Dn),I||vo(l)?Oh(l,u,v,C,j,H):Rh(l,u,X,v,C,j,H);if(!(v&A)){var Me=me&&ct.call(l,"__wrapped__"),_e=ge&&ct.call(u,"__wrapped__");if(Me||_e){var Ze=Me?l.value():l,Ne=_e?u.value():u;return H||(H=new Dn),j(Ze,Ne,v,C,H)}}return Ce?(H||(H=new Dn),fn(l,u,v,C,j,H)):!1}function Yc(l){return Nt(l)&&pn(l)==ai}function ul(l,u,v,C){var j=v.length,H=j,I=!C;if(l==null)return!H;for(l=st(l);j--;){var $=v[j];if(I&&$[2]?$[1]!==l[$[0]]:!($[0]in l))return!1}for(;++j<H;){$=v[j];var X=$[0],pe=l[X],me=$[1];if(I&&$[2]){if(pe===i&&!(X in l))return!1}else{var ge=new Dn;if(C)var Ce=C(pe,me,X,l,u,ge);if(!(Ce===i?as(me,pe,A|k,C,ge):Ce))return!1}}return!0}function la(l){if(!_t(l)||mu(l))return!1;var u=Wi(l)?af:Cp;return u.test(Va(l))}function Fc(l){return Nt(l)&&tt(l)==Ss}function xf(l){return Nt(l)&&pn(l)==Nn}function vf(l){return Nt(l)&&ps(l.length)&&!!wt[tt(l)]}function yf(l){return typeof l=="function"?l:l==null?ee:typeof l=="object"?Pe(l)?Xc(l[0],l[1]):bf(l):ot(l)}function Wc(l){if(!Mt(l))return Oi(l);var u=[];for(var v in st(l))ct.call(l,v)&&v!="constructor"&&u.push(v);return u}function fh(l){if(!_t(l))return pr(l);var u=Mt(l),v=[];for(var C in l)C=="constructor"&&(u||!ct.call(l,C))||v.push(C);return v}function Zc(l,u){return l<u}function wf(l,u){var v=-1,C=tn(l)?ae(l.length):[];return Ra(l,function(j,H,I){C[++v]=u(j,H,I)}),C}function bf(l){var u=du(l);return u.length==1&&u[0][2]?Hh(u[0][0],u[0][1]):function(v){return v===l||ul(v,l,u)}}function Xc(l,u){return pu(l)&&zh(u)?Hh(dt(l),u):function(v){var C=Yl(v,l);return C===i&&C===u?So(v,l):as(u,C,A|k)}}function dl(l,u,v,C,j){l!==u&&Qs(u,function(H,I){if(j||(j=new Dn),_t(H))lg(l,u,I,v,dl,C,j);else{var $=C?C(gu(l,I),H,I+"",l,u,j):i;$===i&&($=H),oa(l,I,$)}},hn)}function lg(l,u,v,C,j,H,I){var $=gu(l,v),X=gu(u,v),pe=I.get(X);if(pe){oa(l,v,pe);return}var me=H?H($,X,v+"",l,u,I):i,ge=me===i;if(ge){var Ce=Pe(X),Me=!Ce&&Sr(X),_e=!Ce&&!Me&&vo(X);me=X,Ce||Me||_e?Pe($)?me=$:$t($)?me=Jt($):Me?(ge=!1,me=Of(X,!0)):_e?(ge=!1,me=Lf(X,!0)):me=[]:Vi(X)||Ba(X)?(me=$,Ba($)?me=M1($):(!_t($)||Wi($))&&(me=Nf(X))):ge=!1}ge&&(I.set(X,me),j(me,X,C,H,I),I.delete(X)),oa(l,v,me)}function Sf(l,u){var v=l.length;if(v)return u+=u<0?v:0,Fi(u,v)?l[u]:i}function Cf(l,u,v){u.length?u=Dt(u,function(H){return Pe(H)?function(I){return ki(I,H.length===1?H[0]:H)}:H}):u=[ee];var C=-1;u=Dt(u,oi(Le()));var j=wf(l,function(H,I,$){var X=Dt(u,function(pe){return pe(H)});return{criteria:X,index:++C,value:H}});return Ip(j,function(H,I){return Sh(H,I,v)})}function ph(l,u){return Kc(l,u,function(v,C){return So(l,C)})}function Kc(l,u,v){for(var C=-1,j=u.length,H={};++C<j;){var I=u[C],$=ki(l,I);v($,I)&&to(H,ka(I,l),$)}return H}function hh(l){return function(u){return ki(u,l)}}function Qc(l,u,v,C){var j=C?Kd:Ns,H=-1,I=u.length,$=l;for(l===u&&(u=Jt(u)),v&&($=Dt(l,oi(v)));++H<I;)for(var X=0,pe=u[H],me=v?v(pe):pe;(X=j($,me,X,C))>-1;)$!==l&&Vc.call($,X,1),Vc.call(l,X,1);return l}function Tf(l,u){for(var v=l?u.length:0,C=v-1;v--;){var j=u[v];if(v==C||j!==H){var H=j;Fi(j)?Vc.call(l,j,1):ml(l,j)}}return l}function Jc(l,u){return l+Ea(sf()*(u-l+1))}function mh(l,u,v,C){for(var j=-1,H=Lt(Fs((u-l)/(v||1)),0),I=ae(H);H--;)I[C?H:++j]=l,l+=v;return I}function Af(l,u){var v="";if(!l||u<1||u>ue)return v;do u%2&&(v+=l),u=Ea(u/2),u&&(l+=l);while(u);return v}function Ge(l,u){return Rl(Bf(l,u,ee),l+"")}function eo(l){return Xs(To(l))}function eu(l,u){var v=To(l);return kl(v,qi(u,0,v.length))}function to(l,u,v,C){if(!_t(l))return l;u=ka(u,l);for(var j=-1,H=u.length,I=H-1,$=l;$!=null&&++j<H;){var X=dt(u[j]),pe=v;if(X==="__proto__"||X==="constructor"||X==="prototype")return l;if(j!=I){var me=$[X];pe=C?C(me,X,$):i,pe===i&&(pe=_t(me)?me:Fi(u[j+1])?[]:{})}es($,X,pe),$=$[X]}return l}var fl=Ws?function(l,u){return Ws.set(l,u),l}:ee,pl=Qo?function(l,u){return Qo(l,"toString",{configurable:!0,enumerable:!1,value:J(u),writable:!0})}:ee;function gh(l){return kl(To(l))}function di(l,u,v){var C=-1,j=l.length;u<0&&(u=-u>j?0:j+u),v=v>j?j:v,v<0&&(v+=j),j=u>v?0:v-u>>>0,u>>>=0;for(var H=ae(j);++C<j;)H[C]=l[C+u];return H}function xh(l,u){var v;return Ra(l,function(C,j,H){return v=u(C,j,H),!v}),!!v}function hl(l,u,v){var C=0,j=l==null?C:l.length;if(typeof u=="number"&&u===u&&j<=be){for(;C<j;){var H=C+j>>>1,I=l[H];I!==null&&!Vn(I)&&(v?I<=u:I<u)?C=H+1:j=H}return j}return tu(l,u,ee,v)}function tu(l,u,v,C){var j=0,H=l==null?0:l.length;if(H===0)return 0;u=v(u);for(var I=u!==u,$=u===null,X=Vn(u),pe=u===i;j<H;){var me=Ea((j+H)/2),ge=v(l[me]),Ce=ge!==i,Me=ge===null,_e=ge===ge,Ze=Vn(ge);if(I)var Ne=C||_e;else pe?Ne=_e&&(C||Ce):$?Ne=_e&&Ce&&(C||!Me):X?Ne=_e&&Ce&&!Me&&(C||!Ze):Me||Ze?Ne=!1:Ne=C?ge<=u:ge<u;Ne?j=me+1:H=me}return zt(H,we)}function Ef(l,u){for(var v=-1,C=l.length,j=0,H=[];++v<C;){var I=l[v],$=u?u(I):I;if(!v||!Qn($,X)){var X=$;H[j++]=I===0?0:I}}return H}function nu(l){return typeof l=="number"?l:Vn(l)?B:+l}function Fn(l){if(typeof l=="string")return l;if(Pe(l))return Dt(l,Fn)+"";if(Vn(l))return sr?sr.call(l):"";var u=l+"";return u=="0"&&1/l==-le?"-0":u}function La(l,u,v){var C=-1,j=Ac,H=l.length,I=!0,$=[],X=$;if(v)I=!1,j=Wd;else if(H>=o){var pe=u?null:Mh(l);if(pe)return Dc(pe);I=!1,j=Bs,X=new ja}else X=u?[]:$;e:for(;++C<H;){var me=l[C],ge=u?u(me):me;if(me=v||me!==0?me:0,I&&ge===ge){for(var Ce=X.length;Ce--;)if(X[Ce]===ge)continue e;u&&X.push(ge),$.push(me)}else j(X,ge,v)||(X!==$&&X.push(ge),$.push(me))}return $}function ml(l,u){return u=ka(u,l),l=ao(l,u),l==null||delete l[dt(Tn(u))]}function Mf(l,u,v,C){return to(l,u,v(ki(l,u)),C)}function gl(l,u,v,C){for(var j=l.length,H=C?j:-1;(C?H--:++H<j)&&u(l[H],H,l););return v?di(l,C?0:H,C?H+1:j):di(l,C?H+1:0,C?j:H)}function vh(l,u){var v=l;return v instanceof Fe&&(v=v.value()),Zd(u,function(C,j){return j.func.apply(j.thisArg,Aa([C],j.args))},v)}function xl(l,u,v){var C=l.length;if(C<2)return C?La(l[0]):[];for(var j=-1,H=ae(C);++j<C;)for(var I=l[j],$=-1;++$<C;)$!=j&&(H[j]=lr(H[j]||I,l[$],u,v));return La(et(H,1),u,v)}function jf(l,u,v){for(var C=-1,j=l.length,H=u.length,I={};++C<j;){var $=C<H?u[C]:i;v(I,l[C],$)}return I}function iu(l){return $t(l)?l:[]}function vl(l){return typeof l=="function"?l:ee}function ka(l,u){return Pe(l)?l:pu(l,u)?[l]:fa(ut(l))}var yh=Ge;function ur(l,u,v){var C=l.length;return v=v===i?C:v,!u&&v>=C?l:di(l,u,v)}var wh=_c||function(l){return qt.clearTimeout(l)};function Of(l,u){if(u)return l.slice();var v=l.length,C=Yr?Yr(v):new l.constructor(v);return l.copy(C),C}function rs(l){var u=new l.constructor(l.byteLength);return new Ys(u).set(new Ys(l)),u}function Rf(l,u){var v=u?rs(l.buffer):l.buffer;return new l.constructor(v,l.byteOffset,l.byteLength)}function au(l){var u=new l.constructor(l.source,Os.exec(l));return u.lastIndex=l.lastIndex,u}function bh(l){return Kr?st(Kr.call(l)):{}}function Lf(l,u){var v=u?rs(l.buffer):l.buffer;return new l.constructor(v,l.byteOffset,l.length)}function yl(l,u){if(l!==u){var v=l!==i,C=l===null,j=l===l,H=Vn(l),I=u!==i,$=u===null,X=u===u,pe=Vn(u);if(!$&&!pe&&!H&&l>u||H&&I&&X&&!$&&!pe||C&&I&&X||!v&&X||!j)return 1;if(!C&&!H&&!pe&&l<u||pe&&v&&j&&!C&&!H||$&&v&&j||!I&&j||!X)return-1}return 0}function Sh(l,u,v){for(var C=-1,j=l.criteria,H=u.criteria,I=j.length,$=v.length;++C<I;){var X=yl(j[C],H[C]);if(X){if(C>=$)return X;var pe=v[C];return X*(pe=="desc"?-1:1)}}return l.index-u.index}function kf(l,u,v,C){for(var j=-1,H=l.length,I=v.length,$=-1,X=u.length,pe=Lt(H-I,0),me=ae(X+pe),ge=!C;++$<X;)me[$]=u[$];for(;++j<I;)(ge||j<H)&&(me[v[j]]=l[j]);for(;pe--;)me[$++]=l[j++];return me}function Ch(l,u,v,C){for(var j=-1,H=l.length,I=-1,$=v.length,X=-1,pe=u.length,me=Lt(H-$,0),ge=ae(me+pe),Ce=!C;++j<me;)ge[j]=l[j];for(var Me=j;++X<pe;)ge[Me+X]=u[X];for(;++I<$;)(Ce||j<H)&&(ge[Me+v[I]]=l[j++]);return ge}function Jt(l,u){var v=-1,C=l.length;for(u||(u=ae(C));++v<C;)u[v]=l[v];return u}function Wn(l,u,v,C){var j=!v;v||(v={});for(var H=-1,I=u.length;++H<I;){var $=u[H],X=C?C(v[$],l[$],$,v,l):i;X===i&&(X=l[$]),j?Gi(v,$,X):es(v,$,X)}return v}function ru(l,u){return Wn(l,El(l),u)}function wl(l,u){return Wn(l,fu(l),u)}function ss(l,u){return function(v,C){var j=Pe(v)?q2:or,H=u?u():{};return j(v,l,Le(C,2),H)}}function os(l){return Ge(function(u,v){var C=-1,j=v.length,H=j>1?v[j-1]:i,I=j>2?v[2]:i;for(H=l.length>3&&typeof H=="function"?(j--,H):i,I&&Hn(v[0],v[1],I)&&(H=j<3?i:H,j=1),u=st(u);++C<j;){var $=v[C];$&&l(u,$,C,H)}return u})}function Df(l,u){return function(v,C){if(v==null)return v;if(!tn(v))return l(v,C);for(var j=v.length,H=u?j:-1,I=st(v);(u?H--:++H<j)&&C(I[H],H,I)!==!1;);return v}}function ls(l){return function(u,v,C){for(var j=-1,H=st(u),I=C(u),$=I.length;$--;){var X=I[l?$:++j];if(v(H[X],X,H)===!1)break}return u}}function Th(l,u,v){var C=u&_,j=Di(l);function H(){var I=this&&this!==qt&&this instanceof H?j:l;return I.apply(C?v:this,arguments)}return H}function fi(l){return function(u){u=ut(u);var v=tr(u)?Ei(u):i,C=v?v[0]:u.charAt(0),j=v?ur(v,1).join(""):u.slice(1);return C[l]()+j}}function zn(l){return function(u){return Zd(g(Ia(u).replace(Go,"")),l,"")}}function Di(l){return function(){var u=arguments;switch(u.length){case 0:return new l;case 1:return new l(u[0]);case 2:return new l(u[0],u[1]);case 3:return new l(u[0],u[1],u[2]);case 4:return new l(u[0],u[1],u[2],u[3]);case 5:return new l(u[0],u[1],u[2],u[3],u[4]);case 6:return new l(u[0],u[1],u[2],u[3],u[4],u[5]);case 7:return new l(u[0],u[1],u[2],u[3],u[4],u[5],u[6])}var v=ui(l.prototype),C=l.apply(v,u);return _t(C)?C:v}}function Ah(l,u,v){var C=Di(l);function j(){for(var H=arguments.length,I=ae(H),$=H,X=us(j);$--;)I[$]=arguments[$];var pe=H<3&&I[0]!==X&&I[H-1]!==X?[]:nr(I,X);if(H-=pe.length,H<v)return zf(l,u,It,j.placeholder,i,I,pe,i,i,v-H);var me=this&&this!==qt&&this instanceof j?C:l;return In(me,this,I)}return j}function Da(l){return function(u,v,C){var j=st(u);if(!tn(u)){var H=Le(v,3);u=an(u),v=function($){return H(j[$],$,j)}}var I=l(u,v,C);return I>-1?j[H?u[I]:I]:i}}function ca(l){return kt(function(u){var v=u.length,C=v,j=Gn.prototype.thru;for(l&&u.reverse();C--;){var H=u[C];if(typeof H!="function")throw new ci(f);if(j&&!I&&Al(H)=="wrapper")var I=new Gn([],!0)}for(C=I?C:v;++C<v;){H=u[C];var $=Al(H),X=$=="wrapper"?uu(H):i;X&&hu(X[0])&&X[1]==(G|L|V|Q)&&!X[4].length&&X[9]==1?I=I[Al(X[0])].apply(I,X[3]):I=H.length==1&&hu(H)?I[$]():I.thru(H)}return function(){var pe=arguments,me=pe[0];if(I&&pe.length==1&&Pe(me))return I.plant(me).value();for(var ge=0,Ce=v?u[ge].apply(this,pe):me;++ge<v;)Ce=u[ge].call(this,Ce);return Ce}})}function It(l,u,v,C,j,H,I,$,X,pe){var me=u&G,ge=u&_,Ce=u&R,Me=u&(L|P),_e=u&ne,Ze=Ce?i:Di(l);function Ne(){for(var nt=arguments.length,lt=ae(nt),Xi=nt;Xi--;)lt[Xi]=arguments[Xi];if(Me)var xi=us(Ne),Ki=Q2(lt,xi);if(C&&(lt=kf(lt,C,j,Me)),H&&(lt=Ch(lt,H,I,Me)),nt-=Ki,Me&&nt<pe){var rn=nr(lt,xi);return zf(l,u,It,Ne.placeholder,v,lt,rn,$,X,pe-nt)}var Ua=ge?v:this,hs=Ce?Ua[l]:l;return nt=lt.length,$?lt=da(lt,$):_e&&nt>1&&lt.reverse(),me&&X<nt&&(lt.length=X),this&&this!==qt&&this instanceof Ne&&(hs=Ze||Di(hs)),hs.apply(Ua,lt)}return Ne}function bl(l,u){return function(v,C){return gf(v,l,u(C),{})}}function no(l,u){return function(v,C){var j;if(v===i&&C===i)return u;if(v!==i&&(j=v),C!==i){if(j===i)return C;typeof v=="string"||typeof C=="string"?(v=Fn(v),C=Fn(C)):(v=nu(v),C=nu(C)),j=l(v,C)}return j}}function Sl(l){return kt(function(u){return u=Dt(u,oi(Le())),Ge(function(v){var C=this;return l(u,function(j){return In(j,C,v)})})})}function Cl(l,u){u=u===i?" ":Fn(u);var v=u.length;if(v<2)return v?Af(u,l):u;var C=Af(u,Fs(l/sa(u)));return tr(u)?ur(Ei(C),0,l).join(""):C.slice(0,l)}function Eh(l,u,v,C){var j=u&_,H=Di(l);function I(){for(var $=-1,X=arguments.length,pe=-1,me=C.length,ge=ae(me+X),Ce=this&&this!==qt&&this instanceof I?H:l;++pe<me;)ge[pe]=C[pe];for(;X--;)ge[pe++]=arguments[++$];return In(Ce,j?v:this,ge)}return I}function dr(l){return function(u,v,C){return C&&typeof C!="number"&&Hn(u,v,C)&&(v=C=i),u=ma(u),v===i?(v=u,u=0):v=ma(v),C=C===i?u<v?1:-1:ma(C),mh(u,v,C,l)}}function cs(l){return function(u,v){return typeof u=="string"&&typeof v=="string"||(u=_i(u),v=_i(v)),l(u,v)}}function zf(l,u,v,C,j,H,I,$,X,pe){var me=u&L,ge=me?I:i,Ce=me?i:I,Me=me?H:i,_e=me?i:H;u|=me?V:F,u&=~(me?F:V),u&O||(u&=-4);var Ze=[l,u,j,Me,ge,_e,Ce,$,X,pe],Ne=v.apply(i,Ze);return hu(l)&&xu(Ne,Ze),Ne.placeholder=C,vu(Ne,l,u)}function su(l){var u=Wt[l];return function(v,C){if(v=_i(v),C=C==null?0:zt(Ie(C),292),C&&Jo(v)){var j=(ut(v)+"e").split("e"),H=u(j[0]+"e"+(+j[1]+C));return j=(ut(H)+"e").split("e"),+(j[0]+"e"+(+j[1]-C))}return u(v)}}var Mh=Je&&1/Dc(new Je([,-0]))[1]==le?function(l){return new Je(l)}:Te;function Tl(l){return function(u){var v=pn(u);return v==ai?kc(u):v==Nn?J2(u):K2(u,l(u))}}function ua(l,u,v,C,j,H,I,$){var X=u&R;if(!X&&typeof l!="function")throw new ci(f);var pe=C?C.length:0;if(pe||(u&=-97,C=j=i),I=I===i?I:Lt(Ie(I),0),$=$===i?$:Ie($),pe-=j?j.length:0,u&F){var me=C,ge=j;C=j=i}var Ce=X?i:uu(l),Me=[l,u,v,C,j,me,ge,H,I,$];if(Ce&&Ol(Me,Ce),l=Me[0],u=Me[1],v=Me[2],C=Me[3],j=Me[4],$=Me[9]=Me[9]===i?X?0:l.length:Lt(Me[9]-pe,0),!$&&u&(L|P)&&(u&=-25),!u||u==_)var _e=Th(l,u,v);else u==L||u==P?_e=Ah(l,u,$):(u==V||u==(_|V))&&!j.length?_e=Eh(l,u,v,C):_e=It.apply(i,Me);var Ze=Ce?fl:xu;return vu(Ze(_e,Me),l,u)}function ou(l,u,v,C){return l===i||Qn(l,Gs[v])&&!ct.call(C,v)?u:l}function Hf(l,u,v,C,j,H){return _t(l)&&_t(u)&&(H.set(u,l),dl(l,u,i,Hf,H),H.delete(u)),l}function jh(l){return Vi(l)?i:l}function Oh(l,u,v,C,j,H){var I=v&A,$=l.length,X=u.length;if($!=X&&!(I&&X>$))return!1;var pe=H.get(l),me=H.get(u);if(pe&&me)return pe==u&&me==l;var ge=-1,Ce=!0,Me=v&k?new ja:i;for(H.set(l,u),H.set(u,l);++ge<$;){var _e=l[ge],Ze=u[ge];if(C)var Ne=I?C(Ze,_e,ge,u,l,H):C(_e,Ze,ge,l,u,H);if(Ne!==i){if(Ne)continue;Ce=!1;break}if(Me){if(!Xd(u,function(nt,lt){if(!Bs(Me,lt)&&(_e===nt||j(_e,nt,v,C,H)))return Me.push(lt)})){Ce=!1;break}}else if(!(_e===Ze||j(_e,Ze,v,C,H))){Ce=!1;break}}return H.delete(l),H.delete(u),Ce}function Rh(l,u,v,C,j,H,I){switch(v){case ri:if(l.byteLength!=u.byteLength||l.byteOffset!=u.byteOffset)return!1;l=l.buffer,u=u.buffer;case yn:return!(l.byteLength!=u.byteLength||!H(new Ys(l),new Ys(u)));case it:case Ft:case Ho:return Qn(+l,+u);case Si:return l.name==u.name&&l.message==u.message;case Ss:case Vo:return l==u+"";case ai:var $=kc;case Nn:var X=C&A;if($||($=Dc),l.size!=u.size&&!X)return!1;var pe=I.get(l);if(pe)return pe==u;C|=k,I.set(l,u);var me=Oh($(l),$(u),C,j,H,I);return I.delete(l),me;case _o:if(Kr)return Kr.call(l)==Kr.call(u)}return!1}function fn(l,u,v,C,j,H){var I=v&A,$=lu(l),X=$.length,pe=lu(u),me=pe.length;if(X!=me&&!I)return!1;for(var ge=X;ge--;){var Ce=$[ge];if(!(I?Ce in u:ct.call(u,Ce)))return!1}var Me=H.get(l),_e=H.get(u);if(Me&&_e)return Me==u&&_e==l;var Ze=!0;H.set(l,u),H.set(u,l);for(var Ne=I;++ge<X;){Ce=$[ge];var nt=l[Ce],lt=u[Ce];if(C)var Xi=I?C(lt,nt,Ce,u,l,H):C(nt,lt,Ce,l,u,H);if(!(Xi===i?nt===lt||j(nt,lt,v,C,H):Xi)){Ze=!1;break}Ne||(Ne=Ce=="constructor")}if(Ze&&!Ne){var xi=l.constructor,Ki=u.constructor;xi!=Ki&&"constructor"in l&&"constructor"in u&&!(typeof xi=="function"&&xi instanceof xi&&typeof Ki=="function"&&Ki instanceof Ki)&&(Ze=!1)}return H.delete(l),H.delete(u),Ze}function kt(l){return Rl(Bf(l,i,Xn),l+"")}function lu(l){return ch(l,an,El)}function cu(l){return ch(l,hn,fu)}var uu=Ws?function(l){return Ws.get(l)}:Te;function Al(l){for(var u=l.name+"",v=Ri[u],C=ct.call(Ri,u)?v.length:0;C--;){var j=v[C],H=j.func;if(H==null||H==l)return j.name}return u}function us(l){var u=ct.call(D,"placeholder")?D:l;return u.placeholder}function Le(){var l=D.iteratee||ze;return l=l===ze?yf:l,arguments.length?l(arguments[0],arguments[1]):l}function io(l,u){var v=l.__data__;return Ha(u)?v[typeof u=="string"?"string":"hash"]:v.map}function du(l){for(var u=an(l),v=u.length;v--;){var C=u[v],j=l[C];u[v]=[C,j,zh(j)]}return u}function fr(l,u){var v=Jd(l,u);return la(v)?v:i}function Lh(l){var u=ct.call(l,kn),v=l[kn];try{l[kn]=i;var C=!0}catch{}var j=Ln.call(l);return C&&(u?l[kn]=v:delete l[kn]),j}var El=ar?function(l){return l==null?[]:(l=st(l),ra(ar(l),function(u){return Fr.call(l,u)}))}:qg,fu=ar?function(l){for(var u=[];l;)Aa(u,El(l)),l=Xo(l);return u}:qg,pn=tt;(el&&pn(new el(new ArrayBuffer(1)))!=ri||Qt&&pn(new Qt)!=ai||Ht&&pn(Ht.resolve())!=mp||Je&&pn(new Je)!=Nn||$i&&pn(new $i)!=No)&&(pn=function(l){var u=tt(l),v=u==cn?l.constructor:i,C=v?Va(v):"";if(C)switch(C){case Kp:return ri;case Qp:return ai;case tl:return mp;case nl:return Nn;case Jp:return No}return u});function kh(l,u,v){for(var C=-1,j=v.length;++C<j;){var H=v[C],I=H.size;switch(H.type){case"drop":l+=I;break;case"dropRight":u-=I;break;case"take":u=zt(u,l+I);break;case"takeRight":l=Lt(l,u-I);break}}return{start:l,end:u}}function Vf(l){var u=l.match(I2);return u?u[1].split(Sp):[]}function Ml(l,u,v){u=ka(u,l);for(var C=-1,j=u.length,H=!1;++C<j;){var I=dt(u[C]);if(!(H=l!=null&&v(l,I)))break;l=l[I]}return H||++C!=j?H:(j=l==null?0:l.length,!!j&&ps(j)&&Fi(I,j)&&(Pe(l)||Ba(l)))}function _f(l){var u=l.length,v=new l.constructor(u);return u&&typeof l[0]=="string"&&ct.call(l,"index")&&(v.index=l.index,v.input=l.input),v}function Nf(l){return typeof l.constructor=="function"&&!Mt(l)?ui(Xo(l)):{}}function Pf(l,u,v){var C=l.constructor;switch(u){case yn:return rs(l);case it:case Ft:return new C(+l);case ri:return Rf(l,v);case Rn:case Td:case Ad:case Ed:case Cs:case Ts:case Ca:case As:case Ir:return Lf(l,v);case ai:return new C;case Ho:case Vo:return new C(l);case Ss:return au(l);case Nn:return new C;case _o:return bh(l)}}function Dh(l,u){var v=u.length;if(!v)return l;var C=v-1;return u[C]=(v>1?"& ":"")+u[C],u=u.join(v>2?", ":" "),l.replace(B2,`{
/* [wrapped with `+u+`] */
`)}function za(l){return Pe(l)||Ba(l)||!!(Un&&l&&l[Un])}function Fi(l,u){var v=typeof l;return u=u??ue,!!u&&(v=="number"||v!="symbol"&&Ur.test(l))&&l>-1&&l%1==0&&l<u}function Hn(l,u,v){if(!_t(v))return!1;var C=typeof u;return(C=="number"?tn(v)&&Fi(u,v.length):C=="string"&&u in v)?Qn(v[u],l):!1}function pu(l,u){if(Pe(l))return!1;var v=typeof l;return v=="number"||v=="symbol"||v=="boolean"||l==null||Vn(l)?!0:P2.test(l)||!bp.test(l)||u!=null&&l in st(u)}function Ha(l){var u=typeof l;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?l!=="__proto__":l===null}function hu(l){var u=Al(l),v=D[u];if(typeof v!="function"||!(u in Fe.prototype))return!1;if(l===v)return!0;var C=uu(v);return!!C&&l===C[0]}function mu(l){return!!nf&&nf in l}var jl=Wo?Wi:Yg;function Mt(l){var u=l&&l.constructor,v=typeof u=="function"&&u.prototype||Gs;return l===v}function zh(l){return l===l&&!_t(l)}function Hh(l,u){return function(v){return v==null?!1:v[l]===u&&(u!==i||l in st(v))}}function Vh(l){var u=Bl(l,function(C){return v.size===x&&v.clear(),C}),v=u.cache;return u}function Ol(l,u){var v=l[1],C=u[1],j=v|C,H=j<(_|R|G),I=C==G&&v==L||C==G&&v==Q&&l[7].length<=u[8]||C==(G|Q)&&u[7].length<=u[8]&&v==L;if(!(H||I))return l;C&_&&(l[2]=u[2],j|=v&_?0:O);var $=u[3];if($){var X=l[3];l[3]=X?kf(X,$,u[4]):$,l[4]=X?nr(l[3],y):u[4]}return $=u[5],$&&(X=l[5],l[5]=X?Ch(X,$,u[6]):$,l[6]=X?nr(l[5],y):u[6]),$=u[7],$&&(l[7]=$),C&G&&(l[8]=l[8]==null?u[8]:zt(l[8],u[8])),l[9]==null&&(l[9]=u[9]),l[0]=u[0],l[1]=j,l}function pr(l){var u=[];if(l!=null)for(var v in st(l))u.push(v);return u}function _h(l){return Ln.call(l)}function Bf(l,u,v){return u=Lt(u===i?l.length-1:u,0),function(){for(var C=arguments,j=-1,H=Lt(C.length-u,0),I=ae(H);++j<H;)I[j]=C[u+j];j=-1;for(var $=ae(u+1);++j<u;)$[j]=C[j];return $[u]=v(I),In(l,this,$)}}function ao(l,u){return u.length<2?l:ki(l,di(u,0,-1))}function da(l,u){for(var v=l.length,C=zt(u.length,v),j=Jt(l);C--;){var H=u[C];l[C]=Fi(H,v)?j[H]:i}return l}function gu(l,u){if(!(u==="constructor"&&typeof l[u]=="function")&&u!="__proto__")return l[u]}var xu=Ll(fl),ro=rf||function(l,u){return qt.setTimeout(l,u)},Rl=Ll(pl);function vu(l,u,v){var C=u+"";return Rl(l,Dh(C,Nh(Vf(C),v)))}function Ll(l){var u=0,v=0;return function(){var C=Ma(),j=Ee-(C-v);if(v=C,j>0){if(++u>=ye)return arguments[0]}else u=0;return l.apply(i,arguments)}}function kl(l,u){var v=-1,C=l.length,j=C-1;for(u=u===i?C:u;++v<u;){var H=Jc(v,j),I=l[H];l[H]=l[v],l[v]=I}return l.length=u,l}var fa=Vh(function(l){var u=[];return l.charCodeAt(0)===46&&u.push(""),l.replace(Za,function(v,C,j,H){u.push(j?H.replace(Ms,"$1"):C||v)}),u});function dt(l){if(typeof l=="string"||Vn(l))return l;var u=l+"";return u=="0"&&1/l==-le?"-0":u}function Va(l){if(l!=null){try{return Zo.call(l)}catch{}try{return l+""}catch{}}return""}function Nh(l,u){return Ai(Re,function(v){var C="_."+v[0];u&v[1]&&!Ac(l,C)&&l.push(C)}),l.sort()}function en(l){if(l instanceof Fe)return l.clone();var u=new Gn(l.__wrapped__,l.__chain__);return u.__actions__=Jt(l.__actions__),u.__index__=l.__index__,u.__values__=l.__values__,u}function cg(l,u,v){(v?Hn(l,u,v):u===i)?u=1:u=Lt(Ie(u),0);var C=l==null?0:l.length;if(!C||u<1)return[];for(var j=0,H=0,I=ae(Fs(C/u));j<C;)I[H++]=di(l,j,j+=u);return I}function Ph(l){for(var u=-1,v=l==null?0:l.length,C=0,j=[];++u<v;){var H=l[u];H&&(j[C++]=H)}return j}function Bh(){var l=arguments.length;if(!l)return[];for(var u=ae(l-1),v=arguments[0],C=l;C--;)u[C-1]=arguments[C];return Aa(Pe(v)?Jt(v):[v],et(u,1))}var Vt=Ge(function(l,u){return $t(l)?lr(l,et(u,1,$t,!0)):[]}),Zn=Ge(function(l,u){var v=Tn(u);return $t(v)&&(v=i),$t(l)?lr(l,et(u,1,$t,!0),Le(v,2)):[]}),_a=Ge(function(l,u){var v=Tn(u);return $t(v)&&(v=i),$t(l)?lr(l,et(u,1,$t,!0),i,v):[]});function Ih(l,u,v){var C=l==null?0:l.length;return C?(u=v||u===i?1:Ie(u),di(l,u<0?0:u,C)):[]}function Uh(l,u,v){var C=l==null?0:l.length;return C?(u=v||u===i?1:Ie(u),u=C-u,di(l,0,u<0?0:u)):[]}function ug(l,u){return l&&l.length?gl(l,Le(u,3),!0,!0):[]}function If(l,u){return l&&l.length?gl(l,Le(u,3),!0):[]}function pi(l,u,v,C){var j=l==null?0:l.length;return j?(v&&typeof v!="number"&&Hn(l,u,v)&&(v=0,C=j),qe(l,u,v,C)):[]}function zi(l,u,v){var C=l==null?0:l.length;if(!C)return-1;var j=v==null?0:Ie(v);return j<0&&(j=Lt(C+j,0)),Ec(l,Le(u,3),j)}function Uf(l,u,v){var C=l==null?0:l.length;if(!C)return-1;var j=C-1;return v!==i&&(j=Ie(v),j=v<0?Lt(C+j,0):zt(j,C-1)),Ec(l,Le(u,3),j,!0)}function Xn(l){var u=l==null?0:l.length;return u?et(l,1):[]}function $h(l){var u=l==null?0:l.length;return u?et(l,le):[]}function hr(l,u){var v=l==null?0:l.length;return v?(u=u===i?1:Ie(u),et(l,u)):[]}function ds(l){for(var u=-1,v=l==null?0:l.length,C={};++u<v;){var j=l[u];C[j[0]]=j[1]}return C}function Na(l){return l&&l.length?l[0]:i}function $f(l,u,v){var C=l==null?0:l.length;if(!C)return-1;var j=v==null?0:Ie(v);return j<0&&(j=Lt(C+j,0)),Ns(l,u,j)}function Gf(l){var u=l==null?0:l.length;return u?di(l,0,-1):[]}var pa=Ge(function(l){var u=Dt(l,iu);return u.length&&u[0]===l[0]?mf(u):[]}),Gh=Ge(function(l){var u=Tn(l),v=Dt(l,iu);return u===Tn(v)?u=i:v.pop(),v.length&&v[0]===l[0]?mf(v,Le(u,2)):[]}),so=Ge(function(l){var u=Tn(l),v=Dt(l,iu);return u=typeof u=="function"?u:i,u&&v.pop(),v.length&&v[0]===l[0]?mf(v,i,u):[]});function Dl(l,u){return l==null?"":ji.call(l,u)}function Tn(l){var u=l==null?0:l.length;return u?l[u-1]:i}function oo(l,u,v){var C=l==null?0:l.length;if(!C)return-1;var j=C;return v!==i&&(j=Ie(v),j=j<0?Lt(C+j,0):zt(j,C-1)),u===u?li(l,u,j):Ec(l,Ps,j,!0)}function qh(l,u){return l&&l.length?Sf(l,Ie(u)):i}var Yh=Ge(lo);function lo(l,u){return l&&l.length&&u&&u.length?Qc(l,u):l}function Fh(l,u,v){return l&&l.length&&u&&u.length?Qc(l,u,Le(v,2)):l}function yu(l,u,v){return l&&l.length&&u&&u.length?Qc(l,u,i,v):l}var Wh=kt(function(l,u){var v=l==null?0:l.length,C=ol(l,u);return Tf(l,Dt(u,function(j){return Fi(j,v)?+j:j}).sort(yl)),C});function dg(l,u){var v=[];if(!(l&&l.length))return v;var C=-1,j=[],H=l.length;for(u=Le(u,3);++C<H;){var I=l[C];u(I,C,l)&&(v.push(I),j.push(C))}return Tf(l,j),v}function qf(l){return l==null?l:of.call(l)}function mt(l,u,v){var C=l==null?0:l.length;return C?(v&&typeof v!="number"&&Hn(l,u,v)?(u=0,v=C):(u=u==null?0:Ie(u),v=v===i?C:Ie(v)),di(l,u,v)):[]}function Rt(l,u){return hl(l,u)}function Ke(l,u,v){return tu(l,u,Le(v,2))}function at(l,u){var v=l==null?0:l.length;if(v){var C=hl(l,u);if(C<v&&Qn(l[C],u))return C}return-1}function gt(l,u){return hl(l,u,!0)}function hi(l,u,v){return tu(l,u,Le(v,2),!0)}function mr(l,u){var v=l==null?0:l.length;if(v){var C=hl(l,u,!0)-1;if(Qn(l[C],u))return C}return-1}function co(l){return l&&l.length?Ef(l):[]}function Yf(l,u){return l&&l.length?Ef(l,Le(u,2)):[]}function Pa(l){var u=l==null?0:l.length;return u?di(l,1,u):[]}function Ut(l,u,v){return l&&l.length?(u=v||u===i?1:Ie(u),di(l,0,u<0?0:u)):[]}function gr(l,u,v){var C=l==null?0:l.length;return C?(u=v||u===i?1:Ie(u),u=C-u,di(l,u<0?0:u,C)):[]}function fs(l,u){return l&&l.length?gl(l,Le(u,3),!1,!0):[]}function Ff(l,u){return l&&l.length?gl(l,Le(u,3)):[]}var Hi=Ge(function(l){return La(et(l,1,$t,!0))}),uo=Ge(function(l){var u=Tn(l);return $t(u)&&(u=i),La(et(l,1,$t,!0),Le(u,2))}),zl=Ge(function(l){var u=Tn(l);return u=typeof u=="function"?u:i,La(et(l,1,$t,!0),i,u)});function Kn(l){return l&&l.length?La(l):[]}function Wf(l,u){return l&&l.length?La(l,Le(u,2)):[]}function Zf(l,u){return u=typeof u=="function"?u:i,l&&l.length?La(l,i,u):[]}function fo(l){if(!(l&&l.length))return[];var u=0;return l=ra(l,function(v){if($t(v))return u=Lt(v.length,u),!0}),er(u,function(v){return Dt(l,Mc(v))})}function Hl(l,u){if(!(l&&l.length))return[];var v=fo(l);return u==null?v:Dt(v,function(C){return In(u,i,C)})}var xr=Ge(function(l,u){return $t(l)?lr(l,u):[]}),wn=Ge(function(l){return xl(ra(l,$t))}),vr=Ge(function(l){var u=Tn(l);return $t(u)&&(u=i),xl(ra(l,$t),Le(u,2))}),po=Ge(function(l){var u=Tn(l);return u=typeof u=="function"?u:i,xl(ra(l,$t),i,u)}),ho=Ge(fo);function Xf(l,u){return jf(l||[],u||[],es)}function Kf(l,u){return jf(l||[],u||[],to)}var Zh=Ge(function(l){var u=l.length,v=u>1?l[u-1]:i;return v=typeof v=="function"?(l.pop(),v):i,Hl(l,v)});function mo(l){var u=D(l);return u.__chain__=!0,u}function Qf(l,u){return u(l),l}function An(l,u){return u(l)}var Xh=kt(function(l){var u=l.length,v=u?l[0]:0,C=this.__wrapped__,j=function(H){return ol(H,l)};return u>1||this.__actions__.length||!(C instanceof Fe)||!Fi(v)?this.thru(j):(C=C.slice(v,+v+(u?1:0)),C.__actions__.push({func:An,args:[j],thisArg:i}),new Gn(C,this.__chain__).thru(function(H){return u&&!H.length&&H.push(i),H}))});function mi(){return mo(this)}function Kh(){return new Gn(this.value(),this.__chain__)}function Qh(){this.__values__===i&&(this.__values__=gi(this.value()));var l=this.__index__>=this.__values__.length,u=l?i:this.__values__[this.__index__++];return{done:l,value:u}}function fg(){return this}function yr(l){for(var u,v=this;v instanceof Li;){var C=en(v);C.__index__=0,C.__values__=i,u?j.__wrapped__=C:u=C;var j=C;v=v.__wrapped__}return j.__wrapped__=l,u}function wu(){var l=this.__wrapped__;if(l instanceof Fe){var u=l;return this.__actions__.length&&(u=new Fe(this)),u=u.reverse(),u.__actions__.push({func:An,args:[qf],thisArg:i}),new Gn(u,this.__chain__)}return this.thru(qf)}function Jf(){return vh(this.__wrapped__,this.__actions__)}var go=ss(function(l,u,v){ct.call(l,v)?++l[v]:Gi(l,v,1)});function Jh(l,u,v){var C=Pe(l)?Np:pf;return v&&Hn(l,u,v)&&(u=i),C(l,Le(u,3))}function e1(l,u){var v=Pe(l)?ra:ht;return v(l,Le(u,3))}var t1=Da(zi),e0=Da(Uf);function t0(l,u){return et(Vl(l,u),1)}function pg(l,u){return et(Vl(l,u),le)}function hg(l,u,v){return v=v===i?1:Ie(v),et(Vl(l,u),v)}function n1(l,u){var v=Pe(l)?Ai:Ra;return v(l,Le(u,3))}function n0(l,u){var v=Pe(l)?Y2:Gc;return v(l,Le(u,3))}var i1=ss(function(l,u,v){ct.call(l,v)?l[v].push(u):Gi(l,v,[u])});function xo(l,u,v,C){l=tn(l)?l:To(l),v=v&&!C?Ie(v):0;var j=l.length;return v<0&&(v=Lt(j+v,0)),ku(l)?v<=j&&l.indexOf(u,v)>-1:!!j&&Ns(l,u,v)>-1}var bu=Ge(function(l,u,v){var C=-1,j=typeof u=="function",H=tn(l)?ae(l.length):[];return Ra(l,function(I){H[++C]=j?In(u,I,v):is(I,u,v)}),H}),a1=ss(function(l,u,v){Gi(l,v,u)});function Vl(l,u){var v=Pe(l)?Dt:wf;return v(l,Le(u,3))}function r1(l,u,v,C){return l==null?[]:(Pe(u)||(u=u==null?[]:[u]),v=C?i:v,Pe(v)||(v=v==null?[]:[v]),Cf(l,u,v))}var s1=ss(function(l,u,v){l[v?0:1].push(u)},function(){return[[],[]]});function o1(l,u,v){var C=Pe(l)?Zd:Qd,j=arguments.length<3;return C(l,Le(u,4),v,j,Ra)}function l1(l,u,v){var C=Pe(l)?F2:Qd,j=arguments.length<3;return C(l,Le(u,4),v,j,Gc)}function Su(l,u){var v=Pe(l)?ra:ht;return v(l,Il(Le(u,3)))}function c1(l){var u=Pe(l)?Xs:eo;return u(l)}function u1(l,u,v){(v?Hn(l,u,v):u===i)?u=1:u=Ie(u);var C=Pe(l)?sh:eu;return C(l,u)}function jt(l){var u=Pe(l)?oh:gh;return u(l)}function i0(l){if(l==null)return 0;if(tn(l))return ku(l)?sa(l):l.length;var u=pn(l);return u==ai||u==Nn?l.size:Wc(l).length}function mg(l,u,v){var C=Pe(l)?Xd:xh;return v&&Hn(l,u,v)&&(u=i),C(l,Le(u,3))}var d1=Ge(function(l,u){if(l==null)return[];var v=u.length;return v>1&&Hn(l,u[0],u[1])?u=[]:v>2&&Hn(u[0],u[1],u[2])&&(u=[u[0]]),Cf(l,et(u,1),[])}),Cu=Zr||function(){return qt.Date.now()};function gg(l,u){if(typeof u!="function")throw new ci(f);return l=Ie(l),function(){if(--l<1)return u.apply(this,arguments)}}function f1(l,u,v){return u=v?i:u,u=l&&u==null?l.length:u,ua(l,G,i,i,i,i,u)}function _l(l,u){var v;if(typeof u!="function")throw new ci(f);return l=Ie(l),function(){return--l>0&&(v=u.apply(this,arguments)),l<=1&&(u=i),v}}var wr=Ge(function(l,u,v){var C=_;if(v.length){var j=nr(v,us(wr));C|=V}return ua(l,C,u,v,j)}),Tu=Ge(function(l,u,v){var C=_|R;if(v.length){var j=nr(v,us(Tu));C|=V}return ua(u,C,l,v,j)});function Nl(l,u,v){u=v?i:u;var C=ua(l,L,i,i,i,i,i,u);return C.placeholder=Nl.placeholder,C}function Au(l,u,v){u=v?i:u;var C=ua(l,P,i,i,i,i,i,u);return C.placeholder=Au.placeholder,C}function br(l,u,v){var C,j,H,I,$,X,pe=0,me=!1,ge=!1,Ce=!0;if(typeof l!="function")throw new ci(f);u=_i(u)||0,_t(v)&&(me=!!v.leading,ge="maxWait"in v,H=ge?Lt(_i(v.maxWait)||0,u):H,Ce="trailing"in v?!!v.trailing:Ce);function Me(rn){var Ua=C,hs=j;return C=j=i,pe=rn,I=l.apply(hs,Ua),I}function _e(rn){return pe=rn,$=ro(nt,u),me?Me(rn):I}function Ze(rn){var Ua=rn-X,hs=rn-pe,Hy=u-Ua;return ge?zt(Hy,H-hs):Hy}function Ne(rn){var Ua=rn-X,hs=rn-pe;return X===i||Ua>=u||Ua<0||ge&&hs>=H}function nt(){var rn=Cu();if(Ne(rn))return lt(rn);$=ro(nt,Ze(rn))}function lt(rn){return $=i,Ce&&C?Me(rn):(C=j=i,I)}function Xi(){$!==i&&wh($),pe=0,C=X=j=$=i}function xi(){return $===i?I:lt(Cu())}function Ki(){var rn=Cu(),Ua=Ne(rn);if(C=arguments,j=this,X=rn,Ua){if($===i)return _e(X);if(ge)return wh($),$=ro(nt,u),Me(X)}return $===i&&($=ro(nt,u)),I}return Ki.cancel=Xi,Ki.flush=xi,Ki}var ha=Ge(function(l,u){return ts(l,1,u)}),Pl=Ge(function(l,u,v){return ts(l,_i(u)||0,v)});function xg(l){return ua(l,ne)}function Bl(l,u){if(typeof l!="function"||u!=null&&typeof u!="function")throw new ci(f);var v=function(){var C=arguments,j=u?u.apply(this,C):C[0],H=v.cache;if(H.has(j))return H.get(j);var I=l.apply(this,C);return v.cache=H.set(j,I)||H,I};return v.cache=new(Bl.Cache||qn),v}Bl.Cache=qn;function Il(l){if(typeof l!="function")throw new ci(f);return function(){var u=arguments;switch(u.length){case 0:return!l.call(this);case 1:return!l.call(this,u[0]);case 2:return!l.call(this,u[0],u[1]);case 3:return!l.call(this,u[0],u[1],u[2])}return!l.apply(this,u)}}function p1(l){return _l(2,l)}var h1=yh(function(l,u){u=u.length==1&&Pe(u[0])?Dt(u[0],oi(Le())):Dt(et(u,1),oi(Le()));var v=u.length;return Ge(function(C){for(var j=-1,H=zt(C.length,v);++j<H;)C[j]=u[j].call(this,C[j]);return In(l,this,C)})}),a0=Ge(function(l,u){var v=nr(u,us(a0));return ua(l,V,i,u,v)}),Eu=Ge(function(l,u){var v=nr(u,us(Eu));return ua(l,F,i,u,v)}),m1=kt(function(l,u){return ua(l,Q,i,i,i,u)});function g1(l,u){if(typeof l!="function")throw new ci(f);return u=u===i?u:Ie(u),Ge(l,u)}function vg(l,u){if(typeof l!="function")throw new ci(f);return u=u==null?0:Lt(Ie(u),0),Ge(function(v){var C=v[u],j=ur(v,0,u);return C&&Aa(j,C),In(l,this,j)})}function r0(l,u,v){var C=!0,j=!0;if(typeof l!="function")throw new ci(f);return _t(v)&&(C="leading"in v?!!v.leading:C,j="trailing"in v?!!v.trailing:j),br(l,u,{leading:C,maxWait:u,trailing:j})}function s0(l){return f1(l,1)}function yg(l,u){return a0(vl(u),l)}function wg(){if(!arguments.length)return[];var l=arguments[0];return Pe(l)?l:[l]}function Ul(l){return Sn(l,E)}function bg(l,u){return u=typeof u=="function"?u:i,Sn(l,E,u)}function x1(l){return Sn(l,b|E)}function Qe(l,u){return u=typeof u=="function"?u:i,Sn(l,b|E,u)}function o0(l,u){return u==null||ff(l,u,an(u))}function Qn(l,u){return l===u||l!==l&&u!==u}var l0=cs(ll),v1=cs(function(l,u){return l>=u}),Ba=qc(function(){return arguments}())?qc:function(l){return Nt(l)&&ct.call(l,"callee")&&!Fr.call(l,"callee")},Pe=ae.isArray,Mu=Tc?oi(Tc):Yn;function tn(l){return l!=null&&ps(l.length)&&!Wi(l)}function $t(l){return Nt(l)&&tn(l)}function Sg(l){return l===!0||l===!1||Nt(l)&&tt(l)==it}var Sr=Nc||Yg,y1=Dp?oi(Dp):Zt;function w1(l){return Nt(l)&&l.nodeType===1&&!Vi(l)}function ju(l){if(l==null)return!0;if(tn(l)&&(Pe(l)||typeof l=="string"||typeof l.splice=="function"||Sr(l)||vo(l)||Ba(l)))return!l.length;var u=pn(l);if(u==ai||u==Nn)return!l.size;if(Mt(l))return!Wc(l).length;for(var v in l)if(ct.call(l,v))return!1;return!0}function bt(l,u){return as(l,u)}function c0(l,u,v){v=typeof v=="function"?v:i;var C=v?v(l,u):i;return C===i?as(l,u,i,v):!!C}function nn(l){if(!Nt(l))return!1;var u=tt(l);return u==Si||u==Br||typeof l.message=="string"&&typeof l.name=="string"&&!Vi(l)}function Cg(l){return typeof l=="number"&&Jo(l)}function Wi(l){if(!_t(l))return!1;var u=tt(l);return u==On||u==uc||u==ln||u==gp}function Ou(l){return typeof l=="number"&&l==Ie(l)}function ps(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=ue}function _t(l){var u=typeof l;return l!=null&&(u=="object"||u=="function")}function Nt(l){return l!=null&&typeof l=="object"}var Ru=zp?oi(zp):Yc;function u0(l,u){return l===u||ul(l,u,du(u))}function Tg(l,u,v){return v=typeof v=="function"?v:i,ul(l,u,du(u),v)}function b1(l){return C1(l)&&l!=+l}function Ag(l){if(jl(l))throw new Ve(c);return la(l)}function S1(l){return l===null}function Eg(l){return l==null}function C1(l){return typeof l=="number"||Nt(l)&&tt(l)==Ho}function Vi(l){if(!Nt(l)||tt(l)!=cn)return!1;var u=Xo(l);if(u===null)return!0;var v=ct.call(u,"constructor")&&u.constructor;return typeof v=="function"&&v instanceof v&&Zo.call(v)==Mi}var Lu=Hp?oi(Hp):Fc;function d0(l){return Ou(l)&&l>=-ue&&l<=ue}var T1=Vp?oi(Vp):xf;function ku(l){return typeof l=="string"||!Pe(l)&&Nt(l)&&tt(l)==Vo}function Vn(l){return typeof l=="symbol"||Nt(l)&&tt(l)==_o}var vo=_p?oi(_p):vf;function Zi(l){return l===i}function f0(l){return Nt(l)&&pn(l)==No}function A1(l){return Nt(l)&&tt(l)==Po}var E1=cs(Zc),$l=cs(function(l,u){return l<=u});function gi(l){if(!l)return[];if(tn(l))return ku(l)?Ei(l):Jt(l);if(Wr&&l[Wr])return Yp(l[Wr]());var u=pn(l),v=u==ai?kc:u==Nn?Dc:To;return v(l)}function ma(l){if(!l)return l===0?l:0;if(l=_i(l),l===le||l===-le){var u=l<0?-1:1;return u*xe}return l===l?l:0}function Ie(l){var u=ma(l),v=u%1;return u===u?v?u-v:u:0}function ga(l){return l?qi(Ie(l),0,re):0}function _i(l){if(typeof l=="number")return l;if(Vn(l))return B;if(_t(l)){var u=typeof l.valueOf=="function"?l.valueOf():l;l=_t(u)?u+"":u}if(typeof l!="string")return l===0?l:+l;l=Up(l);var v=dn.test(l);return v||Tp.test(l)?G2(l.slice(2),v?2:8):Rs.test(l)?B:+l}function M1(l){return Wn(l,hn(l))}function yo(l){return l?qi(Ie(l),-ue,ue):l===0?l:0}function ut(l){return l==null?"":Fn(l)}var Mg=os(function(l,u){if(Mt(u)||tn(u)){Wn(u,an(u),l);return}for(var v in u)ct.call(u,v)&&es(l,v,u[v])}),j1=os(function(l,u){Wn(u,hn(u),l)}),Du=os(function(l,u,v,C){Wn(u,hn(u),l,C)}),jg=os(function(l,u,v,C){Wn(u,an(u),l,C)}),Og=kt(ol);function Rg(l,u){var v=ui(l);return u==null?v:Oa(v,u)}var Lg=Ge(function(l,u){l=st(l);var v=-1,C=u.length,j=C>2?u[2]:i;for(j&&Hn(u[0],u[1],j)&&(C=1);++v<C;)for(var H=u[v],I=hn(H),$=-1,X=I.length;++$<X;){var pe=I[$],me=l[pe];(me===i||Qn(me,Gs[pe])&&!ct.call(l,pe))&&(l[pe]=H[pe])}return l}),O1=Ge(function(l){return l.push(i,Hf),In(Fl,i,l)});function wo(l,u){return Pp(l,Le(u,3),Cn)}function Gl(l,u){return Pp(l,Le(u,3),Js)}function R1(l,u){return l==null?l:Qs(l,Le(u,3),hn)}function kg(l,u){return l==null?l:ns(l,Le(u,3),hn)}function bo(l,u){return l&&Cn(l,Le(u,3))}function ql(l,u){return l&&Js(l,Le(u,3))}function L1(l){return l==null?[]:cr(l,an(l))}function zu(l){return l==null?[]:cr(l,hn(l))}function Yl(l,u,v){var C=l==null?i:ki(l,u);return C===i?v:C}function p0(l,u){return l!=null&&Ml(l,u,hf)}function So(l,u){return l!=null&&Ml(l,u,uh)}var k1=bl(function(l,u,v){u!=null&&typeof u.toString!="function"&&(u=Ln.call(u)),l[u]=v},J(ee)),D1=bl(function(l,u,v){u!=null&&typeof u.toString!="function"&&(u=Ln.call(u)),ct.call(l,u)?l[u].push(v):l[u]=[v]},Le),Dg=Ge(is);function an(l){return tn(l)?df(l):Wc(l)}function hn(l){return tn(l)?df(l,!0):fh(l)}function zg(l,u){var v={};return u=Le(u,3),Cn(l,function(C,j,H){Gi(v,u(C,j,H),C)}),v}function Hg(l,u){var v={};return u=Le(u,3),Cn(l,function(C,j,H){Gi(v,j,u(C,j,H))}),v}var Vg=os(function(l,u,v){dl(l,u,v)}),Fl=os(function(l,u,v,C){dl(l,u,v,C)}),Hu=kt(function(l,u){var v={};if(l==null)return v;var C=!1;u=Dt(u,function(H){return H=ka(H,l),C||(C=H.length>1),H}),Wn(l,cu(l),v),C&&(v=Sn(v,b|S|E,jh));for(var j=u.length;j--;)ml(v,u[j]);return v});function h0(l,u){return Co(l,Il(Le(u)))}var _g=kt(function(l,u){return l==null?{}:ph(l,u)});function Co(l,u){if(l==null)return{};var v=Dt(cu(l),function(C){return[C]});return u=Le(u),Kc(l,v,function(C,j){return u(C,j[0])})}function Ng(l,u,v){u=ka(u,l);var C=-1,j=u.length;for(j||(j=1,l=i);++C<j;){var H=l==null?i:l[dt(u[C])];H===i&&(C=j,H=v),l=Wi(H)?H.call(l):H}return l}function z1(l,u,v){return l==null?l:to(l,u,v)}function H1(l,u,v,C){return C=typeof C=="function"?C:i,l==null?l:to(l,u,v,C)}var m0=Tl(an),g0=Tl(hn);function x0(l,u,v){var C=Pe(l),j=C||Sr(l)||vo(l);if(u=Le(u,4),v==null){var H=l&&l.constructor;j?v=C?new H:[]:_t(l)?v=Wi(H)?ui(Xo(l)):{}:v={}}return(j?Ai:Cn)(l,function(I,$,X){return u(v,I,$,X)}),v}function V1(l,u){return l==null?!0:ml(l,u)}function Vu(l,u,v){return l==null?l:Mf(l,u,vl(v))}function Pg(l,u,v,C){return C=typeof C=="function"?C:i,l==null?l:Mf(l,u,vl(v),C)}function To(l){return l==null?[]:Rc(l,an(l))}function v0(l){return l==null?[]:Rc(l,hn(l))}function y0(l,u,v){return v===i&&(v=u,u=i),v!==i&&(v=_i(v),v=v===v?v:0),u!==i&&(u=_i(u),u=u===u?u:0),qi(_i(l),u,v)}function _u(l,u,v){return u=ma(u),v===i?(v=u,u=0):v=ma(v),l=_i(l),dh(l,u,v)}function w0(l,u,v){if(v&&typeof v!="boolean"&&Hn(l,u,v)&&(u=v=i),v===i&&(typeof u=="boolean"?(v=u,u=i):typeof l=="boolean"&&(v=l,l=i)),l===i&&u===i?(l=0,u=1):(l=ma(l),u===i?(u=l,l=0):u=ma(u)),l>u){var C=l;l=u,u=C}if(v||l%1||u%1){var j=sf();return zt(l+j*(u-l+Fo("1e-"+((j+"").length-1))),u)}return Jc(l,u)}var _1=zn(function(l,u,v){return u=u.toLowerCase(),l+(v?Nu(u):u)});function Nu(l){return d(ut(l).toLowerCase())}function Ia(l){return l=ut(l),l&&l.replace(Ls,Lc).replace(Ta,"")}function Cr(l,u,v){l=ut(l),u=Fn(u);var C=l.length;v=v===i?C:qi(Ie(v),0,C);var j=v;return v-=u.length,v>=0&&l.slice(v,j)==u}function Tr(l){return l=ut(l),l&&yp.test(l)?l.replace(Es,$p):l}function Wl(l){return l=ut(l),l&&Pn.test(l)?l.replace(un,"\\$&"):l}var Zl=zn(function(l,u,v){return l+(v?"-":"")+u.toLowerCase()}),Ar=zn(function(l,u,v){return l+(v?" ":"")+u.toLowerCase()}),Bg=fi("toLowerCase");function N1(l,u,v){l=ut(l),u=Ie(u);var C=u?sa(l):0;if(!u||C>=u)return l;var j=(u-C)/2;return Cl(Ea(j),v)+l+Cl(Fs(j),v)}function Xl(l,u,v){l=ut(l),u=Ie(u);var C=u?sa(l):0;return u&&C<u?l+Cl(u-C,v):l}function Ig(l,u,v){l=ut(l),u=Ie(u);var C=u?sa(l):0;return u&&C<u?Cl(u-C,v)+l:l}function P1(l,u,v){return v||u==null?u=0:u&&(u=+u),Xr(ut(l).replace(Xa,""),u||0)}function Pu(l,u,v){return(v?Hn(l,u,v):u===i)?u=1:u=Ie(u),Af(ut(l),u)}function B1(){var l=arguments,u=ut(l[0]);return l.length<3?u:u.replace(l[1],l[2])}var Ug=zn(function(l,u,v){return l+(v?"_":"")+u.toLowerCase()});function Bu(l,u,v){return v&&typeof v!="number"&&Hn(l,u,v)&&(u=v=i),v=v===i?re:v>>>0,v?(l=ut(l),l&&(typeof u=="string"||u!=null&&!Lu(u))&&(u=Fn(u),!u&&tr(l))?ur(Ei(l),0,v):l.split(u,v)):[]}var Iu=zn(function(l,u,v){return l+(v?" ":"")+d(u)});function I1(l,u,v){return l=ut(l),v=v==null?0:qi(Ie(v),0,l.length),u=Fn(u),l.slice(v,v+u.length)==u}function Kl(l,u,v){var C=D.templateSettings;v&&Hn(l,u,v)&&(u=i),l=ut(l),u=Du({},u,C,ou);var j=Du({},u.imports,C.imports,ou),H=an(j),I=Rc(j,H),$,X,pe=0,me=u.interpolate||pc,ge="__p += '",Ce=zc((u.escape||pc).source+"|"+me.source+"|"+(me===fc?js:pc).source+"|"+(u.evaluate||pc).source+"|$","g"),Me="//# sourceURL="+(ct.call(u,"sourceURL")?(u.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Rp+"]")+`
`;l.replace(Ce,function(Ne,nt,lt,Xi,xi,Ki){return lt||(lt=Xi),ge+=l.slice(pe,Ki).replace(Ap,Gp),nt&&($=!0,ge+=`' +
__e(`+nt+`) +
'`),xi&&(X=!0,ge+=`';
`+xi+`;
__p += '`),lt&&(ge+=`' +
((__t = (`+lt+`)) == null ? '' : __t) +
'`),pe=Ki+Ne.length,Ne}),ge+=`';
`;var _e=ct.call(u,"variable")&&u.variable;if(!_e)ge=`with (obj) {
`+ge+`
}
`;else if(Od.test(_e))throw new Ve(p);ge=(X?ge.replace(_2,""):ge).replace(xp,"$1").replace(vp,"$1;"),ge="function("+(_e||"obj")+`) {
`+(_e?"":`obj || (obj = {});
`)+"var __t, __p = ''"+($?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var Ze=w(function(){return rt(H,Me+"return "+ge).apply(i,I)});if(Ze.source=ge,nn(Ze))throw Ze;return Ze}function b0(l){return ut(l).toLowerCase()}function Uu(l){return ut(l).toUpperCase()}function U1(l,u,v){if(l=ut(l),l&&(v||u===i))return Up(l);if(!l||!(u=Fn(u)))return l;var C=Ei(l),j=Ei(u),H=Is(C,j),I=Us(C,j)+1;return ur(C,H,I).join("")}function $g(l,u,v){if(l=ut(l),l&&(v||u===i))return l.slice(0,ef(l)+1);if(!l||!(u=Fn(u)))return l;var C=Ei(l),j=Us(C,Ei(u))+1;return ur(C,0,j).join("")}function $u(l,u,v){if(l=ut(l),l&&(v||u===i))return l.replace(Xa,"");if(!l||!(u=Fn(u)))return l;var C=Ei(l),j=Is(C,Ei(u));return ur(C,j).join("")}function n(l,u){var v=se,C=de;if(_t(u)){var j="separator"in u?u.separator:j;v="length"in u?Ie(u.length):v,C="omission"in u?Fn(u.omission):C}l=ut(l);var H=l.length;if(tr(l)){var I=Ei(l);H=I.length}if(v>=H)return l;var $=v-sa(C);if($<1)return C;var X=I?ur(I,0,$).join(""):l.slice(0,$);if(j===i)return X+C;if(I&&($+=X.length-$),Lu(j)){if(l.slice($).search(j)){var pe,me=X;for(j.global||(j=zc(j.source,ut(Os.exec(j))+"g")),j.lastIndex=0;pe=j.exec(me);)var ge=pe.index;X=X.slice(0,ge===i?$:ge)}}else if(l.indexOf(Fn(j),$)!=$){var Ce=X.lastIndexOf(j);Ce>-1&&(X=X.slice(0,Ce))}return X+C}function r(l){return l=ut(l),l&&N2.test(l)?l.replace(dc,Wp):l}var s=zn(function(l,u,v){return l+(v?" ":"")+u.toUpperCase()}),d=fi("toUpperCase");function g(l,u,v){return l=ut(l),u=v?i:u,u===i?qp(l)?tg(l):X2(l):l.match(u)||[]}var w=Ge(function(l,u){try{return In(l,i,u)}catch(v){return nn(v)?v:new Ve(v)}}),M=kt(function(l,u){return Ai(u,function(v){v=dt(v),Gi(l,v,wr(l[v],l))}),l});function z(l){var u=l==null?0:l.length,v=Le();return l=u?Dt(l,function(C){if(typeof C[1]!="function")throw new ci(f);return[v(C[0]),C[1]]}):[],Ge(function(C){for(var j=-1;++j<u;){var H=l[j];if(In(H[0],this,C))return In(H[1],this,C)}})}function U(l){return lh(Sn(l,b))}function J(l){return function(){return l}}function ce(l,u){return l==null||l!==l?u:l}var he=ca(),te=ca(!0);function ee(l){return l}function ze(l){return yf(typeof l=="function"?l:Sn(l,b))}function De(l){return bf(Sn(l,b))}function St(l,u){return Xc(l,Sn(u,b))}var W=Ge(function(l,u){return function(v){return is(v,l,u)}}),q=Ge(function(l,u){return function(v){return is(l,v,u)}});function K(l,u,v){var C=an(u),j=cr(u,C);v==null&&!(_t(u)&&(j.length||!C.length))&&(v=u,u=l,l=this,j=cr(u,an(u)));var H=!(_t(v)&&"chain"in v)||!!v.chain,I=Wi(l);return Ai(j,function($){var X=u[$];l[$]=X,I&&(l.prototype[$]=function(){var pe=this.__chain__;if(H||pe){var me=l(this.__wrapped__),ge=me.__actions__=Jt(this.__actions__);return ge.push({func:X,args:arguments,thisArg:l}),me.__chain__=pe,me}return X.apply(l,Aa([this.value()],arguments))})}),l}function fe(){return qt._===this&&(qt._=qs),this}function Te(){}function We(l){return l=Ie(l),Ge(function(u){return Sf(u,l)})}var je=Sl(Dt),He=Sl(Np),mn=Sl(Xd);function ot(l){return pu(l)?Mc(dt(l)):hh(l)}function Er(l){return function(u){return l==null?i:ki(l,u)}}var Gg=dr(),n9=dr(!0);function qg(){return[]}function Yg(){return!1}function i9(){return{}}function a9(){return""}function r9(){return!0}function s9(l,u){if(l=Ie(l),l<1||l>ue)return[];var v=re,C=zt(l,re);u=Le(u),l-=re;for(var j=er(C,u);++v<l;)u(v);return j}function o9(l){return Pe(l)?Dt(l,dt):Vn(l)?[l]:Jt(fa(ut(l)))}function l9(l){var u=++Ii;return ut(l)+u}var c9=no(function(l,u){return l+u},0),u9=su("ceil"),d9=no(function(l,u){return l/u},1),f9=su("floor");function p9(l){return l&&l.length?Yi(l,ee,ll):i}function h9(l,u){return l&&l.length?Yi(l,Le(u,2),ll):i}function m9(l){return Bp(l,ee)}function g9(l,u){return Bp(l,Le(u,2))}function x9(l){return l&&l.length?Yi(l,ee,Zc):i}function v9(l,u){return l&&l.length?Yi(l,Le(u,2),Zc):i}var y9=no(function(l,u){return l*u},1),w9=su("round"),b9=no(function(l,u){return l-u},0);function S9(l){return l&&l.length?Oc(l,ee):0}function C9(l,u){return l&&l.length?Oc(l,Le(u,2)):0}return D.after=gg,D.ary=f1,D.assign=Mg,D.assignIn=j1,D.assignInWith=Du,D.assignWith=jg,D.at=Og,D.before=_l,D.bind=wr,D.bindAll=M,D.bindKey=Tu,D.castArray=wg,D.chain=mo,D.chunk=cg,D.compact=Ph,D.concat=Bh,D.cond=z,D.conforms=U,D.constant=J,D.countBy=go,D.create=Rg,D.curry=Nl,D.curryRight=Au,D.debounce=br,D.defaults=Lg,D.defaultsDeep=O1,D.defer=ha,D.delay=Pl,D.difference=Vt,D.differenceBy=Zn,D.differenceWith=_a,D.drop=Ih,D.dropRight=Uh,D.dropRightWhile=ug,D.dropWhile=If,D.fill=pi,D.filter=e1,D.flatMap=t0,D.flatMapDeep=pg,D.flatMapDepth=hg,D.flatten=Xn,D.flattenDeep=$h,D.flattenDepth=hr,D.flip=xg,D.flow=he,D.flowRight=te,D.fromPairs=ds,D.functions=L1,D.functionsIn=zu,D.groupBy=i1,D.initial=Gf,D.intersection=pa,D.intersectionBy=Gh,D.intersectionWith=so,D.invert=k1,D.invertBy=D1,D.invokeMap=bu,D.iteratee=ze,D.keyBy=a1,D.keys=an,D.keysIn=hn,D.map=Vl,D.mapKeys=zg,D.mapValues=Hg,D.matches=De,D.matchesProperty=St,D.memoize=Bl,D.merge=Vg,D.mergeWith=Fl,D.method=W,D.methodOf=q,D.mixin=K,D.negate=Il,D.nthArg=We,D.omit=Hu,D.omitBy=h0,D.once=p1,D.orderBy=r1,D.over=je,D.overArgs=h1,D.overEvery=He,D.overSome=mn,D.partial=a0,D.partialRight=Eu,D.partition=s1,D.pick=_g,D.pickBy=Co,D.property=ot,D.propertyOf=Er,D.pull=Yh,D.pullAll=lo,D.pullAllBy=Fh,D.pullAllWith=yu,D.pullAt=Wh,D.range=Gg,D.rangeRight=n9,D.rearg=m1,D.reject=Su,D.remove=dg,D.rest=g1,D.reverse=qf,D.sampleSize=u1,D.set=z1,D.setWith=H1,D.shuffle=jt,D.slice=mt,D.sortBy=d1,D.sortedUniq=co,D.sortedUniqBy=Yf,D.split=Bu,D.spread=vg,D.tail=Pa,D.take=Ut,D.takeRight=gr,D.takeRightWhile=fs,D.takeWhile=Ff,D.tap=Qf,D.throttle=r0,D.thru=An,D.toArray=gi,D.toPairs=m0,D.toPairsIn=g0,D.toPath=o9,D.toPlainObject=M1,D.transform=x0,D.unary=s0,D.union=Hi,D.unionBy=uo,D.unionWith=zl,D.uniq=Kn,D.uniqBy=Wf,D.uniqWith=Zf,D.unset=V1,D.unzip=fo,D.unzipWith=Hl,D.update=Vu,D.updateWith=Pg,D.values=To,D.valuesIn=v0,D.without=xr,D.words=g,D.wrap=yg,D.xor=wn,D.xorBy=vr,D.xorWith=po,D.zip=ho,D.zipObject=Xf,D.zipObjectDeep=Kf,D.zipWith=Zh,D.entries=m0,D.entriesIn=g0,D.extend=j1,D.extendWith=Du,K(D,D),D.add=c9,D.attempt=w,D.camelCase=_1,D.capitalize=Nu,D.ceil=u9,D.clamp=y0,D.clone=Ul,D.cloneDeep=x1,D.cloneDeepWith=Qe,D.cloneWith=bg,D.conformsTo=o0,D.deburr=Ia,D.defaultTo=ce,D.divide=d9,D.endsWith=Cr,D.eq=Qn,D.escape=Tr,D.escapeRegExp=Wl,D.every=Jh,D.find=t1,D.findIndex=zi,D.findKey=wo,D.findLast=e0,D.findLastIndex=Uf,D.findLastKey=Gl,D.floor=f9,D.forEach=n1,D.forEachRight=n0,D.forIn=R1,D.forInRight=kg,D.forOwn=bo,D.forOwnRight=ql,D.get=Yl,D.gt=l0,D.gte=v1,D.has=p0,D.hasIn=So,D.head=Na,D.identity=ee,D.includes=xo,D.indexOf=$f,D.inRange=_u,D.invoke=Dg,D.isArguments=Ba,D.isArray=Pe,D.isArrayBuffer=Mu,D.isArrayLike=tn,D.isArrayLikeObject=$t,D.isBoolean=Sg,D.isBuffer=Sr,D.isDate=y1,D.isElement=w1,D.isEmpty=ju,D.isEqual=bt,D.isEqualWith=c0,D.isError=nn,D.isFinite=Cg,D.isFunction=Wi,D.isInteger=Ou,D.isLength=ps,D.isMap=Ru,D.isMatch=u0,D.isMatchWith=Tg,D.isNaN=b1,D.isNative=Ag,D.isNil=Eg,D.isNull=S1,D.isNumber=C1,D.isObject=_t,D.isObjectLike=Nt,D.isPlainObject=Vi,D.isRegExp=Lu,D.isSafeInteger=d0,D.isSet=T1,D.isString=ku,D.isSymbol=Vn,D.isTypedArray=vo,D.isUndefined=Zi,D.isWeakMap=f0,D.isWeakSet=A1,D.join=Dl,D.kebabCase=Zl,D.last=Tn,D.lastIndexOf=oo,D.lowerCase=Ar,D.lowerFirst=Bg,D.lt=E1,D.lte=$l,D.max=p9,D.maxBy=h9,D.mean=m9,D.meanBy=g9,D.min=x9,D.minBy=v9,D.stubArray=qg,D.stubFalse=Yg,D.stubObject=i9,D.stubString=a9,D.stubTrue=r9,D.multiply=y9,D.nth=qh,D.noConflict=fe,D.noop=Te,D.now=Cu,D.pad=N1,D.padEnd=Xl,D.padStart=Ig,D.parseInt=P1,D.random=w0,D.reduce=o1,D.reduceRight=l1,D.repeat=Pu,D.replace=B1,D.result=Ng,D.round=w9,D.runInContext=Y,D.sample=c1,D.size=i0,D.snakeCase=Ug,D.some=mg,D.sortedIndex=Rt,D.sortedIndexBy=Ke,D.sortedIndexOf=at,D.sortedLastIndex=gt,D.sortedLastIndexBy=hi,D.sortedLastIndexOf=mr,D.startCase=Iu,D.startsWith=I1,D.subtract=b9,D.sum=S9,D.sumBy=C9,D.template=Kl,D.times=s9,D.toFinite=ma,D.toInteger=Ie,D.toLength=ga,D.toLower=b0,D.toNumber=_i,D.toSafeInteger=yo,D.toString=ut,D.toUpper=Uu,D.trim=U1,D.trimEnd=$g,D.trimStart=$u,D.truncate=n,D.unescape=r,D.uniqueId=l9,D.upperCase=s,D.upperFirst=d,D.each=n1,D.eachRight=n0,D.first=Na,K(D,function(){var l={};return Cn(D,function(u,v){ct.call(D.prototype,v)||(l[v]=u)}),l}(),{chain:!1}),D.VERSION=a,Ai(["bind","bindKey","curry","curryRight","partial","partialRight"],function(l){D[l].placeholder=D}),Ai(["drop","take"],function(l,u){Fe.prototype[l]=function(v){v=v===i?1:Lt(Ie(v),0);var C=this.__filtered__&&!u?new Fe(this):this.clone();return C.__filtered__?C.__takeCount__=zt(v,C.__takeCount__):C.__views__.push({size:zt(v,re),type:l+(C.__dir__<0?"Right":"")}),C},Fe.prototype[l+"Right"]=function(v){return this.reverse()[l](v).reverse()}}),Ai(["filter","map","takeWhile"],function(l,u){var v=u+1,C=v==Oe||v==Z;Fe.prototype[l]=function(j){var H=this.clone();return H.__iteratees__.push({iteratee:Le(j,3),type:v}),H.__filtered__=H.__filtered__||C,H}}),Ai(["head","last"],function(l,u){var v="take"+(u?"Right":"");Fe.prototype[l]=function(){return this[v](1).value()[0]}}),Ai(["initial","tail"],function(l,u){var v="drop"+(u?"":"Right");Fe.prototype[l]=function(){return this.__filtered__?new Fe(this):this[v](1)}}),Fe.prototype.compact=function(){return this.filter(ee)},Fe.prototype.find=function(l){return this.filter(l).head()},Fe.prototype.findLast=function(l){return this.reverse().find(l)},Fe.prototype.invokeMap=Ge(function(l,u){return typeof l=="function"?new Fe(this):this.map(function(v){return is(v,l,u)})}),Fe.prototype.reject=function(l){return this.filter(Il(Le(l)))},Fe.prototype.slice=function(l,u){l=Ie(l);var v=this;return v.__filtered__&&(l>0||u<0)?new Fe(v):(l<0?v=v.takeRight(-l):l&&(v=v.drop(l)),u!==i&&(u=Ie(u),v=u<0?v.dropRight(-u):v.take(u-l)),v)},Fe.prototype.takeRightWhile=function(l){return this.reverse().takeWhile(l).reverse()},Fe.prototype.toArray=function(){return this.take(re)},Cn(Fe.prototype,function(l,u){var v=/^(?:filter|find|map|reject)|While$/.test(u),C=/^(?:head|last)$/.test(u),j=D[C?"take"+(u=="last"?"Right":""):u],H=C||/^find/.test(u);j&&(D.prototype[u]=function(){var I=this.__wrapped__,$=C?[1]:arguments,X=I instanceof Fe,pe=$[0],me=X||Pe(I),ge=function(nt){var lt=j.apply(D,Aa([nt],$));return C&&Ce?lt[0]:lt};me&&v&&typeof pe=="function"&&pe.length!=1&&(X=me=!1);var Ce=this.__chain__,Me=!!this.__actions__.length,_e=H&&!Ce,Ze=X&&!Me;if(!H&&me){I=Ze?I:new Fe(this);var Ne=l.apply(I,$);return Ne.__actions__.push({func:An,args:[ge],thisArg:i}),new Gn(Ne,Ce)}return _e&&Ze?l.apply(this,$):(Ne=this.thru(ge),_e?C?Ne.value()[0]:Ne.value():Ne)})}),Ai(["pop","push","shift","sort","splice","unshift"],function(l){var u=Hc[l],v=/^(?:push|sort|unshift)$/.test(l)?"tap":"thru",C=/^(?:pop|shift)$/.test(l);D.prototype[l]=function(){var j=arguments;if(C&&!this.__chain__){var H=this.value();return u.apply(Pe(H)?H:[],j)}return this[v](function(I){return u.apply(Pe(I)?I:[],j)})}}),Cn(Fe.prototype,function(l,u){var v=D[u];if(v){var C=v.name+"";ct.call(Ri,C)||(Ri[C]=[]),Ri[C].push({name:u,func:v})}}),Ri[It(i,R).name]=[{name:"wrapper",func:i}],Fe.prototype.clone=il,Fe.prototype.reverse=Pc,Fe.prototype.value=Qr,D.prototype.at=Xh,D.prototype.chain=mi,D.prototype.commit=Kh,D.prototype.next=Qh,D.prototype.plant=yr,D.prototype.reverse=wu,D.prototype.toJSON=D.prototype.valueOf=D.prototype.value=Jf,D.prototype.first=D.prototype.head,Wr&&(D.prototype[Wr]=fg),D},ir=$s();Ja?((Ja.exports=ir)._=ir,_s._=ir):qt._=ir}).call(yV)}(z0,z0.exports)),z0.exports}var bV=wV();const SV=()=>{const e=ft({query:"(max-width: 743px)"}),t=ft({query:"(min-width: 744px) and (max-width: 1023px)"}),i=ft({query:"(min-width: 1024px)"}),a=ft({query:"(min-width: 1440px)"}),[o,c]=N.useState(!1),[f,p]=N.useState(null),[,h]=N.useState({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0}),x=N.useRef(null),y=E2(x,{once:!0,margin:"-10%"});N.useEffect(()=>{y&&!o&&c(!0)},[y,o]),N.useEffect(()=>{const R=()=>{h({width:window.innerWidth,height:window.innerHeight})},O=bV.debounce(R,250);return window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[]),N.useEffect(()=>{const R=setTimeout(()=>{f&&f.update()},500);return()=>clearTimeout(R)},[f]);const b=[{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:Ow,icon:Lw},{title:"Manufacturer-Trained Technicians",text:"Our team is trained to service leading brands like Sub-Zero, Viking, GE Monogram, and more — ensuring expert repairs done right the first time.",image:xV,icon:lm},{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:Ow,icon:Lw},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:Rw,icon:lm},{title:"Local & Fair Pricing",text:"As a local Thousand Oaks company, we treat our community like neighbors. With direct access to parts and highly trained techs, we keep our prices fair — without steep markups. While costs keep rising everywhere, we work hard to keep appliance repair affordable.",image:vV,icon:lm},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:Rw,icon:lm}],E=e?1:t?2:3,A=b.length>E,k={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:ve}}},_={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.5,ease:ve}}};return m.jsxs(m.Fragment,{children:[m.jsx(BD,{}),m.jsxs(ID,{ref:x,children:[m.jsxs(UD,{children:[m.jsx(ie.div,{initial:"hidden",animate:o?"visible":"hidden",variants:k,children:m.jsx($D,{children:"why airtexno"})}),m.jsx(ie.div,{initial:"hidden",animate:o?"visible":"hidden",variants:k,transition:{delay:.1},children:m.jsxs(GD,{children:["Same-Day Appliance Repair ",m.jsx(Vb,{children:"You Can Rely On"})," "]})})]}),m.jsx(QD,{children:m.jsx(YD,{$isLargeDesktop:a,children:m.jsx(ta,{onSwiper:p,modules:[ek,ba],pagination:{clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},spaceBetween:a?0:16,loop:A,slidesPerView:E,centeredSlides:a,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:600,className:"businessSwiper",touchRatio:1.5,resistanceRatio:.5,watchSlidesProgress:!0,updateOnWindowResize:!0,observer:!0,observeParents:!0,preventInteractionOnTransition:!0,initialSlide:0,watchOverflow:!0,normalizeSlideIndex:!0,children:b.map((R,O)=>m.jsx(na,{children:m.jsx(WD,{style:{backgroundImage:`url(${R.image})`},$isLargeDesktop:a,className:"slide-container",children:(R.title||R.text||R.icon)&&m.jsxs(ie.div,{className:"overlay",initial:"hidden",animate:o?"visible":"hidden",variants:_,whileHover:e?{}:{scale:1.02,transition:{duration:.2}},children:[(R.title||R.icon)&&m.jsxs(ZD,{children:[R.title&&m.jsx(ie.div,{variants:k,children:m.jsx(qD,{children:R.title})}),R.icon&&m.jsx(ie.div,{variants:k,transition:{delay:.1},children:m.jsx(XD,{className:"icon-wrapper",children:m.jsx("img",{src:R.icon,alt:R.title||"icon",className:"icon-image",loading:"lazy"})})})]}),R.text&&m.jsx(ie.div,{variants:k,transition:{delay:.2},children:m.jsx(KD,{className:"slide-text",children:R.text})})]})})},O))})})})]})]})},CV=T.div`
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
`,Ix=()=>m.jsx(m.Fragment,{children:m.jsxs(CV,{id:"hero",children:[m.jsx(vH,{}),m.jsx(Gb,{}),m.jsx(SV,{}),m.jsx(_b,{}),m.jsx(gV,{}),m.jsx(ky,{}),m.jsx(pp,{}),m.jsx(bH,{}),m.jsx(fp,{})]})}),TV=T.div`
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
     padding-bottom: 100px;
  }

  /* Планшети (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding: 0 24px;
     padding-bottom: 100px;

  }

  /* Невеликі десктопи (1024px - 1279px) */
  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
    padding: 0 32px;
     padding-bottom: 100px;

  }

  /* Середні десктопи (1280px - 1439px) */
  @media (min-width: 1280px) and (max-width: 1439px) {
    max-width: 1280px;
    padding: 0 48px;
     padding-bottom: 100px;

  }

  /* Великі десктопи (1440px і більше) */
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
    padding-bottom: 100px;
  }

  /* Дуже великі екрани (1920px і більше) */
  @media (min-width: 1920px) {
    max-width: 1920px;
  }
  `,AV="/assets/logo-CQNiauhm.jpeg",EV="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99992%200.833008V17.1663M0.833252%208.99967H17.1666'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",MV=Nr`
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
`,jV=Nr`
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
`,OV=Nr`
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
`,G3=T.p`
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
`,RV=T.button`
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
      ${jV} 1s ease,
      ${OV} 0.6s ease;
    background-position: 100% 50%;
    transform: translateY(-3px);
    box-shadow:
      0 8px 25px rgba(48, 152, 238, 0.4),
      0 4px 15px rgba(48, 152, 238, 0.3);

    &::before {
      left: 100%;
    }

    svg {
      animation: ${MV} 1s ease;
    }

    ${G3} {
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

    &:hover ${G3} {
      transform: translateX(3px);
    }
  }
`,LV=T.div`
  display: flex;
  padding: 0px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
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
`,kV=T.div`
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
`,DV=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,zV=T.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 36px;
`,HV=T.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,VV=T.p`
  color: #242424;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 400;
  line-height: 1em;
  width: 100%;
  padding-bottom: 16px;
`,_V=T.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,NV=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`,PV=T.div`
  position: relative;
  width: 44px;
  height: 44px;
`,BV=T.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  background: #c6e6ff;
  border-radius: 100px;
`,IV=T.p`
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
const UV=T.div`
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
`,$V=T.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);
  margin-bottom: 48px;
`;T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 26px;
`;const GV=T.div`
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
`,qV=T.button`
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
`,YV=T.div`
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
`,FV=T.img.attrs(()=>({}))`
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
`,WV=T.div`
  @media screen and (min-width: 1440px) {
    min-width: 650px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,ZV=T.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;

    flex-shrink: 0; /* Забороняємо звуження */
  }
`,D2=()=>{const[e,t]=N.useState(null),i=[{question:"How quickly can you repair my appliance?",answer:"Most repairs take 1–2 hours on average. The exact time depends on the complexity of the issue, appliance type, and accessibility."},{question:"Do you offer emergency repair services?",answer:"Yes, we provide same-day and emergency services whenever possible. Availability may vary based on location and technician schedule."},{question:"What brands and appliances do you service?",answer:"We repair all major household appliances, including refrigerators, ovens, stoves, dishwashers, washers, and dryers. We also specialize in built-in and high-end brands."},{question:"How do I schedule a repair?",answer:"You can call us directly or book a service through our website. A technician will confirm the appointment and arrival window."},{question:"How much does a service call cost?",answer:"Our service call fee is $75. This amount is applied toward the total repair cost if you approve the repair."},{question:"Why is my LG washer not draining?",answer:"This usually happens when the drain pump or filter is clogged. Sometimes the pump motor itself may need replacement."},{question:"Why is my LG dryer not heating?",answer:"A faulty heating element, thermostat, or blocked vent can prevent the dryer from producing heat. We can diagnose and repair this quickly."},{question:"Why won't my Whirlpool dryer start?",answer:"A broken start switch, faulty door switch, or blown fuse is often the cause. Most issues can be fixed during the first visit."},{question:"Why is ice building up on the bottom of my freezer?",answer:"This is usually due to a clogged defrost drain. Cleaning or replacing the drain system solves the problem."},{question:"Why is my refrigerator leaking water?",answer:"A blocked defrost drain or broken water valve is often the reason. Timely repair prevents further damage to the appliance and flooring."},{question:"Why is my Sub-Zero refrigerator not cooling?",answer:"This may be caused by compressor failure, condenser fan issues, or sealed system problems. Sub-Zero units require professional service."},{question:"How often should I schedule appliance maintenance?",answer:"We recommend annual maintenance. Regular check-ups extend appliance life and prevent costly breakdowns."},{question:"Why doesn't my oven maintain a steady temperature?",answer:"A faulty thermostat or control board may cause temperature swings. We replace defective parts to restore even cooking."},{question:"Why is my Viking oven not getting hot enough?",answer:"The issue is often related to a weak igniter or gas valve failure. Both can be replaced to restore proper heating."},{question:"Why does my Frigidaire oven smell like gas?",answer:"This could indicate a weak igniter or a gas leak. Safety is the priority—turn off the oven and call us immediately."},{question:"Why is food cooking unevenly in my Wolf oven?",answer:"Uneven cooking usually points to a faulty convection fan or heating element. Repair ensures consistent cooking results."},{question:"Why won't my oven door close properly?",answer:"Door hinges, springs, or seals may be worn out. Replacing them restores proper closure and energy efficiency."},{question:"Why is my refrigerator warm but the freezer is still cold?",answer:"This is typically due to a failed evaporator fan or damper control. Quick repair will prevent food spoilage."},{question:"Why is my dryer making loud noises?",answer:"Worn rollers, belts, or bearings can cause squeaking or banging. Replacing these parts eliminates the noise."}],a=S=>{t(E=>E===S?null:S)},o={hidden:{opacity:0,scale:.8,rotate:-20,x:-50},visible:{opacity:1,scale:1,rotate:0,x:0,transition:{duration:1.2,ease:wa,delay:.2}},hover:{scale:1.05,rotate:5,transition:{duration:.4,ease:ve}}},c={hidden:{opacity:0,scale:.7},visible:{opacity:1,scale:1,transition:{duration:.8,ease:ve,delay:.4}},hover:{scale:1.1,boxShadow:"0 0 40px rgba(48, 152, 238, 0.6)",transition:{duration:.3,ease:ve}},tap:{scale:.95}},f={hidden:{opacity:0,y:30,rotate:-5},visible:{opacity:1,y:0,rotate:0,transition:{duration:.9,ease:wa,delay:.6}},hover:{y:-5,rotate:2,transition:{duration:.3,ease:ve}}},p={hidden:{opacity:0,x:-100,rotate:-10},visible:{opacity:1,x:0,rotate:0,transition:{duration:.7,ease:ve}}},h={hidden:{opacity:0,x:100,rotate:10},visible:{opacity:1,x:0,rotate:0,transition:{duration:.7,ease:ve}}},x={hidden:{opacity:0,height:0,scale:.9},visible:{opacity:1,height:"auto",scale:1,transition:{duration:.5,ease:ve}}},y={hidden:{opacity:0,y:-30,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,y:0,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 30px rgba(48, 152, 238, 0.8)","0 0 15px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:ve,delay:.1}}},b=S=>S*.15;return m.jsxs(LV,{children:[m.jsxs(kV,{children:[m.jsxs(DV,{children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:o,whileHover:"hover",children:m.jsx(zV,{src:AV,alt:"Team Member Image"})}),m.jsxs(HV,{children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:y,children:m.jsx(VV,{children:"Book a Service Call"})}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:y,transition:{delay:.2},children:m.jsx(_V,{children:"Time to get introduced and explore how we can help"})}),m.jsx(ie.div,{variants:c,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},whileTap:"tap",children:m.jsx("a",{href:"tel:+18055002705",children:m.jsxs(RV,{children:[m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),m.jsx(G3,{children:"Call us now"})]})})})]})]}),m.jsx(NV,{children:m.jsxs(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:f,whileHover:"hover",children:[m.jsxs(PV,{children:[m.jsx(BV,{}),m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",left:"10px",top:"10px"},children:m.jsx("path",{d:"M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z",stroke:"#808080",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),m.jsxs(IV,{children:["Prefer email communication?",m.jsx("br",{}),m.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"Airtexnola@gmail.com"})]})]})})]}),m.jsxs(UV,{children:[m.jsx(WV,{children:m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:y,children:m.jsx($V,{children:"Frequently Asked Questions"})})}),m.jsx(ZV,{children:i.map((S,E)=>m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:E%2===0?p:h,transition:{delay:b(E)},children:m.jsxs(GV,{children:[m.jsxs(qV,{onClick:()=>a(E),children:[S.question,m.jsx(FV,{src:EV,alt:"Toggle answer",$rotate:e===E})]}),m.jsx(ie.div,{initial:"hidden",animate:e===E?"visible":"hidden",variants:x,style:{overflow:"hidden"},children:m.jsx(YV,{$isOpen:e===E,children:S.answer})})]})},E))})]})]})},XV=T.div`
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
`,KV=T.img`
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
`,QV=T.div`
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
`,JV=T.div`
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
`,e_=T.p`
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
`,t_=T.p`
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
`;T.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T(Kt)`
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
`;T.button`
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
`;T.div`
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
`;T.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.div`
  display: flex;
  align-items: center;
  gap: 7px;
  width: 156px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.img`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  max-width: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;T.div`
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
`;T.div`
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
`;T.span`
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
`;T.p`
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
`;T.div`
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
`;T.div`
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
`;T.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 1440px) {
    width: auto;
    margin: 0 auto;
  }
`;T.img`
  border-radius: 18px;
  border: 1px solid var(--black);
  width: 36px;
  height: 36px;
  margin-left: -20px;
`;T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
`;T.div`
  margin: 0 auto;
  width: 285px;
  // height: 43px;
  margin-top: 20px;
  display: flex;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1440px) {
  }
`;T.button`
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
`;Nr`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 73, 74, 0.81);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`;T.button`
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
`;const n_="/assets/HeroImage2About-CoU9D2Tq.png",i_=()=>{const{scrollY:e}=Pr(),t=on(e,[0,500],[0,150]),i=on(e,[0,400],[1,1.1]),a=on(e,[0,600],[0,-3]),o=on(e,[0,300],[0,50]),c=on(e,[0,200],[1,.8]),f={hidden:{opacity:0,x:-100,skewX:15},visible:{opacity:1,x:0,skewX:0,transition:{duration:1.2,ease:ve,delay:.5}}},p={hidden:{opacity:0,y:50,scaleY:0,filter:"blur(10px)"},visible:{opacity:1,y:0,scaleY:1,filter:"blur(0px)",transition:{duration:.8,ease:Im,delay:.8}}},h={hidden:{opacity:0,y:80,rotateX:10},visible:{opacity:1,y:0,rotateX:0,transition:{duration:1,ease:Im,delay:.3}}},x={hidden:{opacity:0,scale:0,rotate:0},visible:{opacity:1,scale:1,rotate:360,transition:{duration:1.5,ease:ve,delay:1}}};return m.jsxs(XV,{id:"ap",children:[m.jsx(ie.div,{style:{position:"absolute",top:"20%",left:"10%",width:"8px",height:"8px",background:"rgba(48, 152, 238, 0.6)",borderRadius:"50%",zIndex:2},variants:x,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3}}),m.jsx(ie.div,{style:{position:"absolute",top:"60%",right:"15%",width:"12px",height:"12px",background:"rgba(48, 152, 238, 0.4)",borderRadius:"50%",zIndex:2},variants:x,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.5}}),m.jsx(ie.div,{style:{position:"absolute",bottom:"30%",left:"20%",width:"6px",height:"6px",background:"rgba(48, 152, 238, 0.3)",borderRadius:"50%",zIndex:2},variants:x,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.8}}),m.jsx(ie.div,{style:{y:t,scale:i,rotate:a},children:m.jsx(KV,{src:n_,alt:"Hero Image"})}),m.jsx(ie.div,{style:{y:o,opacity:c},children:m.jsx(QV,{children:m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:h,children:m.jsxs(JV,{children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:p,children:m.jsx(t_,{children:"About Our Company and Team"})}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:f,children:m.jsx(e_,{children:"Fast, affordable, and trusted service"})})]})})})}),m.jsx(ie.div,{style:{position:"absolute",top:"10%",right:"5%",width:"2px",height:"100px",background:"linear-gradient(to bottom, transparent, #3098EE, transparent)",zIndex:2},initial:{opacity:0,height:0},whileInView:{opacity:1,height:100},viewport:{once:!0,amount:.3},transition:{duration:1,delay:1.2}}),m.jsx(ie.div,{style:{position:"absolute",bottom:"15%",left:"5%",width:"100px",height:"2px",background:"linear-gradient(to right, transparent, #3098EE, transparent)",zIndex:2},initial:{opacity:0,width:0},whileInView:{opacity:1,width:100},viewport:{once:!0,amount:.3},transition:{duration:1,delay:1.5}})]})},a_=T.div`
  @media screen and (min-width: 768px) {
    position: relative;
    width: 417px;
    margin-top: 208px;
  }
`,r_=T.section`
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
`,s_=T.div`
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
`,o_=T.h3`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  text-align: center;
  color: var(--black-500);
  transition: all 0.3s ease;
  padding-top: 10px;
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
`,Ux=T.span`
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
`,l_=T.div`
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
`,c_=T.div`
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
  position: relative;
  @media screen and (min-width: 768px) {
    margin-left: 7px;
    margin-bottom: 7px;
  }
  @media screen and (min-width: 1440px) {
    width: 389px;
    margin-left: 12px;
  }
`,Dw=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }
`,u_=T.div`
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
`,d_=T.div`
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
`,f_=T.p`
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
`,p_=T.img`
  border-radius: 8px;
  width: 340px;
  height: 322px;
  @media screen and (min-width: 1440px) {
    border-radius: 8px;
    position: relative;
    bottom: 28%;
    width: 437px;
    height: 678px;
    margin-top: -49%;
  }
`,h_=T.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`,qb="/assets/aNew1-ddlR8Ix3.jpg",m_="/assets/Team%20Image-CG0rB-nI.png",g_=()=>{const e=ft({query:"(min-width: 1440px)"}),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ve}}},i={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.8,ease:ve}}},a={hidden:{opacity:0,x:30},visible:{opacity:1,x:0,transition:{duration:.8,ease:ve}}};return m.jsxs(r_,{children:[m.jsx(s_,{children:m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,children:m.jsxs(o_,{children:["Our mission is to provide ",m.jsx(Ux,{children:"reliable"})," and ",m.jsx(Ux,{children:"efficient"}),"appliance repair services that improve",m.jsx(Ux,{children:"everyday "}),"life"," "]})})}),m.jsxs(h_,{children:[m.jsxs(u_,{children:[m.jsxs(a_,{children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:i,children:m.jsx("img",{src:qb,alt:"image"})}),m.jsxs(c_,{children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.2},children:m.jsx(Dw,{children:"“Our focus is to fix every appliance properly and reliably. We take on the hardest jobs, train new technicians, and make sure every client feels confident in our work.”"})}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.3},children:m.jsx(l_,{children:"Sunny"})}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.4},children:m.jsx(Dw,{children:"Lead Technician"})})]})]}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.5},children:m.jsxs(f_,{children:["As a local and trusted appliance repair team, our mission is to keep your home running smoothly with fast, reliable, and affordable service. We know how important it is when your refrigerator, washer, dryer, or oven stops working — it can interrupt your whole day. That's why our focus is on quick, professional repairs that last.",m.jsx("br",{}),m.jsx("br",{}),"Our technicians bring years of hands-on experience, training, and the right tools to handle even the toughest jobs. Whether it's fixing a cooling issue in a Sub-Zero refrigerator, replacing a drain pump in an LG washer, or repairing an igniter in a Viking oven — we've seen it all and we know how to get it done.",e&&m.jsx(m.Fragment,{})]})})]}),m.jsx(d_,{children:m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,transition:{delay:.7},children:m.jsx(p_,{src:m_,alt:"team"})})})]})]})},x_=T.section`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  max-width: 100vw;
  min-height: 100vh;
  overflow: auto;
  margin: 0 auto;

  /* Mobile First (375px) */
  @media (max-width: 375px) {
    padding: 0 1rem;
  }

  /* Tablet (768px) */
  @media (min-width: 768px) {
    gap: 3.5rem;
    padding: 0 2rem;
  }

  /* Desktop (1440px) */
  @media (min-width: 1440px) {
    gap: 4rem;
    width: 100%;
    max-width: 1440px;
    padding: 0 2.5rem;
  }
`,v_=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);
  width: 100%;
  margin-bottom: 16px;
  
  @media (max-width: 767px) {
    font-size: 13px;
    margin-bottom: 12px;
  }

  @media (min-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 20px;  
  }

  @media (min-width: 1440px) {
    font-size: 0.875rem;
    margin-bottom: 24px;
  }
`,y_=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);
  width: 100%;

  span {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 52px;
    line-height: 90%;
    color: var(--blue-500);
  }

  @media (max-width: 767px) {
    font-size: 32px;
    
    span {
      font-size: 32px;
    }
  }

  @media (min-width: 768px) {
    font-size: 4.5rem;
    
    span {
      font-size: 4.5rem;
    }
  }

  @media (min-width: 1440px) {
    font-size: 4.5rem;
    
    span {
      font-size: 4.5rem;   
    }
  }
`,w_=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media (max-width: 767px) {
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    gap: 2.5rem;
  }

  @media (min-width: 1440px) {
    gap: 2rem;
  }
`,b_=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 767px) {
    gap: 1rem;
  }

  @media (min-width: 768px) {
    gap: 1.25rem;
  }

  @media (min-width: 1440px) {
    gap: 1.25rem;
  }
`,S_=T.div`
  background: rgba(33, 33, 33, 0.5);
  width: 100%;
  height: 1px;
`,C_=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 767px) {
    gap: 1rem;
  }

  /* Tablet layout */
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
  }

  /* Desktop layout */
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0;
  }
`,T_=T.div`
  @media (min-width: 768px) {
    flex-shrink: 0;
  }

  @media (min-width: 1440px) {
    margin-right: 5.25rem;
  }
`,A_=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  width: fit-content;

  @media (max-width: 767px) {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    font-size: 2.375rem;
  }

  @media (min-width: 1440px) {
    font-size: 2.375rem;
  }
`,E_=T.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (max-width: 767px) {
    gap: 0.8rem;
  }

  @media (min-width: 768px) {
    width: 45%;
    gap: 1rem;
  }

  @media (min-width: 1440px) {
    width: 45%;
    flex-shrink: 0;
    gap: 1rem;
  }
`,M_=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 38px;
  line-height: 90%;
  color: var(--blue-500);
  width: 100%;

  span {
    font-size: inherit;
    color: var(--black-500);
  }

  @media (max-width: 767px) {
    font-size: 28px;
    line-height: 1.1;
  }

  @media (min-width: 768px) {
    font-size: 2.375rem;
  }

  @media (min-width: 1440px) {
    font-size: 2.375rem;
  }
`,j_=T.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.2em;
  width: 100%;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 1.3;
  }

  @media (min-width: 768px) {
    font-size: 1.0625rem;
    line-height: 1.25em;
  }

  @media (min-width: 1440px) {
    font-size: 1.0625rem;
    line-height: 1.25em;
  }
`,O_=T.img`
  border-radius: 0.5rem;
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;

  @media (max-width: 767px) {
    height: 250px;
  }

  @media (min-width: 768px) {
    width: 75%;
    height: 250px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    height: 300px;
  }
`,R_="/assets/ValueImage-GehUXRc0.png",L_="/assets/ValueImage1-XDPVu8iL.png",k_="/assets/ValueImage2-CBdwtolx.png",D_="/assets/ValueImage3-4cmMPphm.png",z_=()=>{const e=N.useRef(null),t=E2(e,{once:!0,margin:"-20%"}),i=h=>({__html:h}),a={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},o={hidden:{opacity:0,y:30},visible:h=>({opacity:1,y:0,transition:{duration:.6,delay:h*.1}})},c={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.4}}},f={hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.5,delay:.1}}},p=[{id:1,number:"01",title:"Reliable Service",description:"We provide trustworthy repairs you can rely on. Our technicians arrive on time and deliver lasting solutions to keep your appliances running smoothly.",image:R_,alt:"Reliable Service"},{id:2,number:"02",title:"Customer-Centric Approach",description:"Your satisfaction is our priority. We listen carefully to your needs and tailor every repair to your situation, ensuring a positive experience every time.",image:L_,alt:"Customer-Centric Approach"},{id:3,number:"03",title:"Fast Response",description:"We know the importance of a quick fix. Our team works efficiently to diagnose and repair appliances as soon as possible, minimizing downtime and stress.",image:k_,alt:"Fast Response"},{id:4,number:"04",title:"Quality and Trust",description:"We use only high-quality parts and proven repair methods. Our goal is to build long-term relationships based on reliability, trust, and excellent service.",image:D_,alt:"Quality and Trust"}];return m.jsxs(x_,{ref:e,children:[m.jsxs("div",{children:[m.jsx(ie.div,{initial:"hidden",animate:t?"visible":"hidden",variants:a,children:m.jsx(v_,{children:"Our Values"})}),m.jsx(ie.div,{initial:"hidden",animate:t?"visible":"hidden",variants:a,transition:{delay:.1},children:m.jsxs(y_,{children:["Core ",m.jsx("span",{children:"Principles"})," That Drive Us"]})})]}),m.jsx(w_,{children:p.map((h,x)=>m.jsx(ie.div,{custom:x,initial:"hidden",animate:t?"visible":"hidden",variants:o,children:m.jsxs(b_,{children:[m.jsx(S_,{}),m.jsxs(C_,{children:[m.jsx(ie.div,{initial:"hidden",animate:t?"visible":"hidden",variants:c,children:m.jsx(T_,{children:m.jsx(A_,{children:h.number})})}),m.jsxs(E_,{children:[m.jsx(M_,{dangerouslySetInnerHTML:i(h.title)}),m.jsx(j_,{children:h.description})]}),m.jsx(ie.div,{initial:"hidden",animate:t?"visible":"hidden",variants:f,transition:{delay:x*.1+.1},children:m.jsx(O_,{src:h.image,alt:h.alt})})]})]})},h.id))})]})},cm=T.div`
  position: relative;
  border-radius: 8px;
`,um=T.div`
  position: absolute;
  border-radius: 8px;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 1);
  h2 {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 28px;
    line-height: 90%;
    color: var(--blue-500);
  }
  p {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: var(--black-500);
  }

  span {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;
    line-height: 125%;
    color: #000;
  }
`,H_=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  margin: 0 auto;
  overflow: visible; // Змінено з auto на visible

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
`,V_=T.p`
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
`,__=T.p`
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
`,N_=T.div`
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
`,zw=T.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
  }
`,dm=T.img`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
 width: 322px;
height: 485px;
  /* max-width: none; */
  object-fit: cover;

  @media (min-width: 768px) {
    height: 485px;
  }

  @media (min-width: 1440px) {
    height: 485px;
  }
`,P_="/assets/Why%20Airtexno%20Image%202-DI0GV3Jh.png",B_="/assets/Why%20Airtexno%20Image%203-CXX0Re_Y.png",I_="/assets/Why%20Airtexno%20Image%204-C7JbMaVk.png",U_=()=>{const{scrollY:e}=Pr(),t=on(e,[0,300],[0,50]),i=on(e,[0,200],[1,.8]),a={hidden:{opacity:0,y:60,skewY:5},visible:{opacity:1,y:0,skewY:0,transition:{duration:1.2,ease:ve}}},o={hidden:{opacity:0,scale:.8,borderRadius:"50%",filter:"blur(10px) grayscale(100%)"},visible:h=>({opacity:1,scale:1,borderRadius:"8px",filter:"blur(0px) grayscale(0%)",transition:{duration:1.4,delay:h*.2,ease:ve}}),hover:{scale:1.08,borderRadius:"4px",filter:"grayscale(0%) brightness(110%)",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.25)",zIndex:10,transition:{duration:.5,ease:ve}}},c={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:1,ease:ve,staggerChildren:.1}}},f={hidden:{opacity:0,scale:.5,color:"#000000"},visible:{opacity:1,scale:1,color:"#3098EE",transition:{duration:1.5,ease:ve,delay:.5}},hover:{scale:1.1,textShadow:"0 0 20px rgba(48, 152, 238, 0.8)",transition:{duration:.3,ease:ve}}},p={hidden:{opacity:0,y:80,rotateX:15},visible:{opacity:1,y:0,rotateX:0,transition:{duration:1.2,ease:ve}},hover:{y:-10,transition:{duration:.4,ease:ve}}};return m.jsxs(H_,{children:[m.jsxs(ie.div,{style:{y:t,opacity:i},initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:c,children:[m.jsx(ie.div,{variants:a,children:m.jsx(V_,{children:"Meet the Team"})}),m.jsx(ie.div,{variants:a,transition:{delay:.2},children:m.jsxs(__,{children:["Professionals committed to"," ",m.jsx(ie.span,{variants:f,whileHover:"hover",children:"quality"})," ","service"]})})]}),m.jsxs(N_,{children:[m.jsx(ie.div,{variants:p,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:m.jsxs(zw,{children:[m.jsx(ie.div,{custom:0,variants:o,whileHover:"hover",children:m.jsxs(cm,{children:[m.jsx(dm,{src:qb,alt:"Team Member 3"}),m.jsxs(um,{children:[m.jsx("h2",{children:"Sunny"}),m.jsx("p",{children:"Lead Technician"}),m.jsx("span",{children:"– Our most experienced specialist, training new technicians and handling the toughest repairs."})]})]})}),m.jsx(ie.div,{custom:1,variants:o,whileHover:"hover",children:m.jsxs(cm,{children:[m.jsx(dm,{src:P_,alt:"Team Member 3"}),m.jsxs(um,{children:[m.jsx("h2",{children:"Stanley"}),m.jsx("p",{children:"Technician"}),m.jsx("span",{children:"– Skilled in diagnosing and repairing washers, dryers, and refrigerators."})]})]})})]})}),m.jsx(ie.div,{variants:p,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},transition:{delay:.3},whileHover:"hover",children:m.jsxs(zw,{children:[m.jsx(ie.div,{custom:2,variants:o,whileHover:"hover",children:m.jsxs(cm,{children:[m.jsx(dm,{src:B_,alt:"Team Member 3"}),m.jsxs(um,{children:[m.jsx("h2",{children:"Mark"}),m.jsx("p",{children:"Technician"}),m.jsx("span",{children:"– Expert in ovens, stoves, and advanced appliance troubleshooting."})]})]})}),m.jsx(ie.div,{custom:3,variants:o,whileHover:"hover",children:m.jsxs(cm,{children:[m.jsx(dm,{src:I_,alt:"Team Member 3"}),m.jsxs(um,{children:[m.jsx("h2",{children:"Li"}),m.jsx("p",{children:"Technician"}),m.jsx("span",{children:"– Focused on precision work and reliable solutions for all household appliances."})]})]})})]})})]})]})},$_=()=>m.jsxs(TV,{children:[m.jsx(i_,{}),m.jsx(g_,{}),m.jsx(z_,{}),m.jsx(U_,{}),m.jsx(D2,{})]}),G_=T.div`
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
  padding-top: 80px;
  margin-bottom: 100px;
  /* Мобільні пристрої (до 768px) */
  @media (max-width: 767px) {
    gap: 40px;
    padding: 0 12px;
  padding-top: 80px;

  }

  /* Планшети (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding-top: 200px;
    padding: 0 24px;
  padding-top: 130px;

  }

  /* Невеликі десктопи (1024px - 1279px) */
  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
    padding: 0 32px;
  padding-top: 120px;

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
  padding-top: 120px;

  }
`;T.h1`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 32px;
  line-height: 162%;
  color: #fff;
`;T.div`
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
`;T.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;T.p`
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
`;T.a`
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
`;T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;T.a`
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
`;const q_=()=>m.jsxs(G_,{id:"ap",children:[m.jsx(fp,{}),m.jsx(pp,{})]}),Y_=T.div`
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
    padding-top: 80px;
  }

  /* Дуже великі екрани (1920px і більше) */
  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 120px;
  }
`,F_=T.div`
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
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`,W_=T.h2`
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
`,Z_=T.div`
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
    width: 55%;
  }
`,X_=T(Kt)`
  text-decoration: none;
  color: inherit;
  max-width: 325px;
  @media (min-width: 1440px) {
  }
`,K_=T.div`
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
`,Q_=T.img`
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
`,J_=T.h3`
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
  padding: 10px;
  height: 66px;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 40px;
    height: 80px;
  }
`,eN=T.p`
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
  padding: 10px;
  height: 50px;
  @media (min-width: 768px) {
    font-size: 16px;
    height: 50px;
  }
`,tN=[{id:1,image:k2,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:hp,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:O2,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:R2,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:L2,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:j2,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],nN={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ve}}},iN={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:ve}},hover:{y:-5,transition:{duration:.3,ease:ve}}},aN={hidden:{opacity:0,scale:1.05},visible:{opacity:1,scale:1,transition:{duration:.7,ease:ve}},hover:{scale:1.03,transition:{duration:.3,ease:ve}}},rN={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5,ease:ve}}},sN=()=>{const{scrollY:e}=Pr(),t=YR(),i=on(e,[0,300],[0,30]);return N.useEffect(()=>{t.start("visible")},[t]),m.jsxs(F_,{id:"app",children:[m.jsx(ie.div,{style:{y:i},initial:"hidden",animate:t,variants:nN,children:m.jsxs(W_,{children:["News & ",m.jsx("span",{children:"Tips"})," "]})}),m.jsx(Z_,{children:tN.map((a,o)=>m.jsx(X_,{to:a.path,children:m.jsx(ie.div,{initial:"hidden",animate:t,variants:iN,transition:{delay:o*.1},whileHover:"hover",children:m.jsxs(K_,{children:[m.jsx(ie.div,{variants:aN,transition:{delay:o*.1},whileHover:"hover",children:m.jsx(Q_,{src:a.image,alt:a.title})}),m.jsx(ie.div,{variants:rN,transition:{delay:o*.1+.2},children:m.jsxs("div",{children:[m.jsx(J_,{children:a.title}),m.jsx(eN,{children:a.description})]})})]})})},a.id))})]})},oN=()=>m.jsx(Y_,{id:"app",children:m.jsx(sN,{})}),lN="/assets/Image1-oNBiuIma.png",cN="/assets/Image2-KhSZGRyT.png",uN="/assets/s2-BjAH1Z8r.webp",dN="/assets/s1-Cor6J8P5.webp",fN=T.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;

  /* Видаляємо всі бокові відступи на мобільних і планшетах */
  @media screen and (max-width: 1023px) {
    margin: 0;
    padding: 0;
    width: 100vw;
    max-width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }
`,pN=T.div`
  width: 100%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(1px);
  margin: 0;
  padding: 40px 0;
  overflow: visible;

  .swiper-wrapper {
    display: flex;
    transition-timing-function: linear !important;
    padding: 0;
    margin: 0 auto;
    overflow: visible;
  }

  /* Видаляємо відступи на мобільних і планшетах */
  @media screen and (max-width: 1023px) {
    width: 100vw;
    margin: 0;
    padding: 40px 0;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;T.p`
  padding: 10px auto 50px auto;
  width: 90%;
  height: 1px;
  margin: 20px auto;
  background: radial-gradient(ellipse 118.85px 58.06px at 50% 50%, rgb(252, 252, 252) 0%, rgba(58, 55, 55, 0.42) 80%);
`;T.div`
  height: auto;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  
  @media screen and (min-width: 1440px) {
    margin-right: 0;
  }
`;const Hw=T.img`
  height: 29px;
  width: 100%;
  object-fit: contain;
  padding: 0;
  margin: 0 auto;
  transition:
    filter 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.3s ease;
  transform: scale(1);

  &:hover,
  &:focus {
    filter: brightness(0) saturate(100%) invert(44%) sepia(98%) saturate(311%) hue-rotate(173deg) brightness(93%)
      contrast(89%);
    transform: scale(1.05);
    will-change: filter, transform;
  }

  &:active {
    transform: scale(0.98);
    transition-duration: 0.1s;
  }

  @media screen and (min-width: 1440px) {
    height: 42px;

    &:hover,
    &:focus {
      transform: scale(1.08);
    }
  }
`,hN=T(ie.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;

  @media screen and (max-width: 743px) {
    width: 50px;
  }
`,mN=T(ie.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;

  @media screen and (max-width: 743px) {
    width: 50px;
  }
`;T.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
`;const gN=()=>{const e=ft({query:"(max-width: 743px)"}),t=ft({query:"(min-width: 744px) and (max-width: 1023px)"}),i=ft({query:"(min-width: 1024px)"}),a=[{id:1,imageUrl:iy},{id:2,imageUrl:t2},{id:3,imageUrl:ay},{id:4,imageUrl:ry},{id:5,imageUrl:sy},{id:6,imageUrl:oy},{id:7,imageUrl:ly},{id:8,imageUrl:cy},{id:9,imageUrl:uy},{id:10,imageUrl:dy},{id:11,imageUrl:fy},{id:12,imageUrl:py},{id:13,imageUrl:hy},{id:14,imageUrl:my},{id:15,imageUrl:gy},{id:16,imageUrl:xy},{id:17,imageUrl:vy},{id:18,imageUrl:yy},{id:19,imageUrl:wy},{id:20,imageUrl:Ub},{id:21,imageUrl:by},{id:22,imageUrl:Sy},{id:23,imageUrl:Cy},{id:24,imageUrl:Ty},{id:25,imageUrl:Ay},{id:26,imageUrl:Ey},{id:27,imageUrl:My},{id:28,imageUrl:jy},{id:29,imageUrl:Oy},{id:30,imageUrl:Ry},{id:31,imageUrl:Ly}],o=e?2:t?4:5,c=a.length>o;return m.jsx(fN,{children:m.jsxs(pN,{children:[m.jsx(hN,{}),m.jsx(ta,{loop:c,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[ba],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:a.map(f=>m.jsx(na,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:m.jsx(Hw,{src:f.imageUrl,alt:`Partner ${f.id}`,loading:"lazy"})},f.id))}),m.jsx(ta,{loop:c,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[ba],className:"mySwiper",style:{width:"100%"},children:a.map(f=>m.jsx(na,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:m.jsx(Hw,{src:f.imageUrl,alt:`Partner ${f.id}`,loading:"lazy"})},f.id))}),m.jsx(mN,{})]})})},Vw=[{img:lN,title:"Refrigerator",description:"Fixing cooling issues and leaks."},{img:cN,title:"Washer",description:"Repairing drain system, spin problems, and control malfunctions."},{img:hp,title:"Oven / Range",description:"Igniter replacement, heating element repair, and temperature issues."},{img:uN,title:"Dryer",description:"Fixing no-heat issues, noisy operation, and drum problems."},{img:dN,title:"Dishwasher",description:"Repairing leaks and drainage problems."}],xN=()=>{const e=N.useRef(null),t=ft({query:"(max-width: 767px)"}),i=ft({query:"(min-width: 768px) and (max-width: 1439px)"}),a=ft({query:"(min-width: 1440px)"}),o=t?1:i?3:4,c=Vw.length>o,f=()=>{e.current&&e.current.slidePrev()},p=()=>{e.current&&e.current.slideNext()},h={hidden:{opacity:0,y:50,rotate:-5,scale:.9},visible:{opacity:1,y:0,rotate:0,scale:1,transition:{duration:1,ease:ve,delay:.2}}},x={hidden:{opacity:0,y:100,rotateX:-45,scale:.8,filter:"blur(10px)"},visible:S=>({opacity:1,y:0,rotateX:0,scale:1,filter:"blur(0px)",transition:{duration:1.2,ease:ve,delay:S*.15}}),hover:{y:-20,rotateY:10,scale:1.05,boxShadow:"0 30px 60px rgba(0,0,0,0.25)",transition:{duration:.4,ease:ve}}},y={hidden:{opacity:0,scale:1.3,rotate:-5},visible:{opacity:1,scale:1,rotate:0,transition:{duration:1.5,ease:ve}},hover:{scale:1.1,rotate:2,transition:{duration:.6,ease:ve}}},b={hidden:{opacity:0,x:-50,y:30},visible:{opacity:1,x:0,y:0,transition:{duration:.8,ease:wa,delay:.3}},hover:{x:10,transition:{duration:.3}}};return m.jsxs(bN,{children:[m.jsxs(SN,{children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:h,children:m.jsx(CN,{children:"Appliances We Service"})}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:h,transition:{delay:.1},children:m.jsxs(TN,{children:[m.jsx("span",{children:"Trusted"})," brands we service"]})})]}),m.jsx(gN,{}),m.jsxs(vN,{$isTablet:i,children:[m.jsx(ta,{modules:[M2,ba],onSwiper:S=>e.current=S,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:600,loop:c,slidesPerView:o,touchRatio:1.5,touchAngle:45,simulateTouch:!0,allowTouchMove:!0,children:Vw.map((S,E)=>m.jsx(na,{children:m.jsx(ie.div,{custom:E,variants:x,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:m.jsxs(AN,{$isTablet:i,children:[m.jsx(ie.div,{variants:y,whileHover:"hover",children:m.jsx(EN,{src:S.img,alt:S.title,$isTablet:i})}),m.jsx(ie.div,{variants:b,whileHover:"hover",children:m.jsxs(MN,{children:[m.jsx(jN,{$isTablet:i,children:S.title}),m.jsx(ON,{$isTablet:i,children:S.description})]})})]})})},E))}),m.jsxs(yN,{children:[m.jsx(_w,{onClick:f,onMouseDown:S=>S.preventDefault(),children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),m.jsx(_w,{onClick:p,onMouseDown:S=>S.preventDefault(),children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})},vN=T.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: ${e=>e.$isTablet?"50%":"auto"};
  }
`,yN=T.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
  justify-content: flex-end;
`,wN=Nr`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,_w=T.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: #dbdbd8;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  touch-action: manipulation;

  &:hover,
  &:focus,
  &:active {
    background-color: #3098ee;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(48, 152, 238, 0.3);
    animation: ${wN} 0.3s ease;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(48, 152, 238, 0.2);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg,
  &:focus svg {
    transform: scale(1.1);
  }

  @media (max-width: 767px) {
    width: 44px;
    height: 44px;
  }
`,bN=T.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 16px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
  }
`,SN=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,CN=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,TN=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);

  span {
    color: var(--blue-500);
  }

  @media screen and (min-width: 768px) {
    font-size: 52px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 72px;
  }
`,AN=T.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  height: 485px;
  margin: 0 0px;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000px;
`,EN=T.img`
  border-radius: 8px;
  width: 322px;
  height: 485px;
  object-fit: cover;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
`,MN=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
  background-color: white;
  position: absolute;
  bottom: 10px;
  padding: 16px;
  left: 10px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
`,jN=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"24px":"28px"};
  line-height: 90%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,ON=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,RN="/assets/ProccessSection-CpT7luA8.png",LN=T.div`
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
`,kN=T.h2`
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
`,DN=T.p`
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
`,zN=T.div`
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
`,HN=T.div`
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
`,VN=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,_N=T.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,NN=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,PN=T.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,BN=[{title:"CALL US",text:"Call us to schedule your repair. We'll ask a few details and find the best time for you.",icon:m.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"WE RESPOND",text:"Our team answers all your questions and confirms a convenient appointment.",icon:m.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M8.33268 12.5001L5.76997 15.0948C5.4125 15.4568 5.23377 15.6377 5.08014 15.6505C4.94686 15.6616 4.81636 15.608 4.72931 15.5064C4.62898 15.3894 4.62898 15.1351 4.62898 14.6264V13.3264C4.62898 12.87 4.25524 12.5398 3.80369 12.4737V12.4737C2.7108 12.3136 1.8525 11.4553 1.69241 10.3624C1.66602 10.1822 1.66602 9.96718 1.66602 9.53712V5.66675C1.66602 4.26662 1.66602 3.56655 1.9385 3.03177C2.17818 2.56137 2.56063 2.17892 3.03104 1.93923C3.56582 1.66675 4.26588 1.66675 5.66602 1.66675H11.8327C13.2328 1.66675 13.9329 1.66675 14.4677 1.93923C14.9381 2.17892 15.3205 2.56137 15.5602 3.03177C15.8327 3.56655 15.8327 4.26662 15.8327 5.66675V9.16675M15.8327 18.3334L14.019 17.0725C13.7641 16.8952 13.6366 16.8066 13.4978 16.7438C13.3747 16.688 13.2453 16.6474 13.1123 16.6229C12.9625 16.5953 12.8073 16.5953 12.4968 16.5953H10.9993C10.0659 16.5953 9.59922 16.5953 9.2427 16.4137C8.92909 16.2539 8.67413 15.9989 8.51434 15.6853C8.33268 15.3288 8.33268 14.8621 8.33268 13.9287V11.8334C8.33268 10.9 8.33268 10.4333 8.51434 10.0768C8.67413 9.76316 8.92909 9.50819 9.2427 9.3484C9.59922 9.16675 10.0659 9.16675 10.9993 9.16675H15.666C16.5994 9.16675 17.0661 9.16675 17.4227 9.3484C17.7363 9.50819 17.9912 9.76316 18.151 10.0768C18.3327 10.4333 18.3327 10.9 18.3327 11.8334V14.0953C18.3327 14.8719 18.3327 15.2602 18.2058 15.5665C18.0367 15.9748 17.7122 16.2993 17.3038 16.4685C16.9975 16.5953 16.6093 16.5953 15.8327 16.5953V18.3334Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"ON-SITE VISIT",text:"Our technician arrives, inspects the issue, and provides a clear estimate.",icon:m.jsx("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M4.16602 8.83325H6.66602M1.66602 5.49992L3.33268 6.33325L4.39155 3.15664C4.61011 2.50096 4.71939 2.17312 4.92209 1.93074C5.10108 1.7167 5.33095 1.55102 5.5906 1.4489C5.88465 1.33325 6.23022 1.33325 6.92137 1.33325H13.0773C13.7685 1.33325 14.1141 1.33325 14.4081 1.4489C14.6678 1.55102 14.8976 1.7167 15.0766 1.93074C15.2793 2.17312 15.3886 2.50096 15.6071 3.15664L16.666 6.33325L18.3327 5.49992M13.3327 8.83325H15.8327M5.66602 6.33325H14.3327C15.7328 6.33325 16.4329 6.33325 16.9677 6.60574C17.4381 6.84542 17.8205 7.22787 18.0602 7.69828C18.3327 8.23305 18.3327 8.93312 18.3327 10.3333V12.5833C18.3327 12.9705 18.3327 13.1641 18.3007 13.3251C18.1691 13.9862 17.6523 14.503 16.9912 14.6346C16.8302 14.6666 16.6366 14.6666 16.2493 14.6666H15.8327C14.9122 14.6666 14.166 13.9204 14.166 12.9999C14.166 12.7698 13.9795 12.5833 13.7493 12.5833H6.24935C6.01923 12.5833 5.83268 12.7698 5.83268 12.9999C5.83268 13.9204 5.08649 14.6666 4.16602 14.6666H3.74935C3.36214 14.6666 3.16853 14.6666 3.00753 14.6346C2.34638 14.503 1.82955 13.9862 1.69804 13.3251C1.66602 13.1641 1.66602 12.9705 1.66602 12.5833V10.3333C1.66602 8.93312 1.66602 8.23305 1.9385 7.69828C2.17818 7.22787 2.56063 6.84542 3.03104 6.60574C3.56582 6.33325 4.26588 6.33325 5.66602 6.33325Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"REPAIR & FINISH",text:"We repair your appliance on the spot whenever possible and make sure everything works perfectly before we leave.",icon:m.jsx("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M4.99984 5.00008L8.74984 8.75008M4.99984 5.00008H2.49984L1.6665 2.50008L2.49984 1.66675L4.99984 2.50008V5.00008ZM16.049 2.28426L13.8593 4.47394C13.5293 4.80395 13.3643 4.96896 13.3025 5.15923C13.2481 5.3266 13.2481 5.50689 13.3025 5.67426C13.3643 5.86454 13.5293 6.02954 13.8593 6.35956L14.057 6.55727C14.387 6.88729 14.552 7.05229 14.7423 7.11412C14.9097 7.1685 15.09 7.1685 15.2574 7.11412C15.4476 7.05229 15.6126 6.88729 15.9426 6.55727L17.9909 4.50901C18.2115 5.04582 18.3332 5.63374 18.3332 6.25008C18.3332 8.78139 16.2811 10.8334 13.7498 10.8334C13.4447 10.8334 13.1465 10.8036 12.858 10.7467C12.4528 10.6668 12.2503 10.6268 12.1275 10.6391C11.9969 10.6521 11.9326 10.6717 11.8169 10.7336C11.7081 10.7918 11.599 10.9009 11.3807 11.1192L5.4165 17.0834C4.72615 17.7738 3.60686 17.7738 2.91651 17.0834C2.22615 16.393 2.22615 15.2738 2.91651 14.5834L8.88069 8.61922C9.09898 8.40094 9.20813 8.29179 9.26635 8.18299C9.32825 8.06731 9.34783 8.00297 9.36084 7.87242C9.37307 7.74963 9.33312 7.54707 9.25323 7.14195C9.19633 6.85346 9.1665 6.55526 9.1665 6.25008C9.1665 3.71878 11.2185 1.66675 13.7498 1.66675C14.5878 1.66675 15.3732 1.8916 16.049 2.28426ZM9.99988 12.5L14.5832 17.0833C15.2735 17.7737 16.3928 17.7737 17.0832 17.0833C17.7735 16.393 17.7735 15.2737 17.0832 14.5833L13.3126 10.8128C13.0457 10.7876 12.7854 10.7394 12.5338 10.6704C12.2096 10.5814 11.854 10.646 11.6162 10.8837L9.99988 12.5Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}],IN={hidden:{opacity:0,scale:0,rotate:-180},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.8,ease:wa,delay:.3}},hover:{rotate:360,scale:1.2,transition:{duration:.6,ease:ve}}},UN={hidden:{opacity:0,y:50,skewY:5},visible:{opacity:1,y:0,skewY:0,transition:{duration:.8,ease:ve}}},$N={hidden:{opacity:0,x:-100,scale:.9},visible:e=>({opacity:1,x:0,scale:1,transition:{duration:.7,delay:e*.2,ease:ve}}),hover:{y:-15,scale:1.05,rotateY:10,boxShadow:"0 25px 50px rgba(0,0,0,0.15)",transition:{duration:.4,ease:ve}}},Nw={hidden:{opacity:0,x:50,filter:"blur(10px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{duration:.9,ease:ve,delay:.5}}},GN={hidden:{opacity:0,scale:.5,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,scale:1,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 20px rgba(48, 152, 238, 0.8)","0 0 10px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:ve,delay:.2}}},qN=()=>m.jsxs(LN,{$bg:RN,children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:UN,children:m.jsx(kN,{children:"Our Process"})}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Nw,children:m.jsx(DN,{children:"4 Simple Steps to Reliable Appliance Repair"})}),m.jsx(zN,{children:BN.map((e,t)=>m.jsx(ie.div,{custom:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:$N,whileHover:"hover",children:m.jsxs(HN,{children:[m.jsx(VN,{children:m.jsx(ie.div,{variants:IN,whileHover:"hover",children:m.jsx(_N,{children:e.icon})})}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:GN,transition:{delay:t*.2+.3},children:m.jsx(NN,{children:e.title})}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Nw,transition:{delay:t*.2+.4},children:m.jsx(PN,{children:e.text})})]})},t))})]}),YN=()=>m.jsxs(FN,{id:"all",children:[m.jsx(Gb,{}),m.jsx(xN,{}),m.jsx(_b,{}),m.jsx(qN,{}),m.jsx(pp,{}),m.jsx(D2,{}),m.jsx(fp,{})]}),FN=T.div`
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
    padding-top: 80px;
  }

  /* Планшети (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding-top: 80px;
    padding: 0 24px;
    padding-top: 120px;

  }

  /* Невеликі десктопи (1024px - 1279px) */
  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
    padding: 0 32px;
    padding-top: 120px;

  }

  /* Середні десктопи (1280px - 1439px) */
  @media (min-width: 1280px) and (max-width: 1439px) {
    max-width: 1280px;
    padding: 0 48px;
    padding-top: 120px;

  }

  /* Великі десктопи (1440px і більше) */
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
    padding-top: 120px;

  }

  /* Дуже великі екрани (1920px і більше) */
  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 120px;
    padding-top: 120px;

  }
`,WN=T.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px;
  margin-bottom: 100px;
`,ZN=T(Kt)`
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
`;T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
  margin-bottom: 30px;
`;const XN=T.h1`
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
`,KN=T.img`
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
`,QN=T.div`
  line-height: 1.6;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`,JN=T.p`
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
`,eP=T.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  @media (min-width: 768px) {
    padding-top: 100px;
  }

  @media (min-width: 1440px) {
  }
`,tP=T.h2`
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
`,nP=T.div`
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
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`,iP=T(Kt)`
  text-decoration: none;
  color: inherit;
  width: fit-content;
  @media (min-width: 1440px) {
  }
`,aP=T.div`
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
`,rP=T.img`
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
`,sP=T.h3`
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
`,oP=T.p`
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
`,Pw=[{id:1,image:k2,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:hp,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:O2,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:R2,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:L2,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:j2,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],lP=()=>{const e=ia(),i=(()=>{const o=e.pathname.split("/"),c=o[o.length-1],f=Pw.find(p=>p.path===`/tips/${c}#ap`||p.path===`/tips/${c}`);return f?f.id:null})(),a=Pw.filter(o=>o.id!==i);return m.jsxs(eP,{children:[m.jsx(tP,{children:m.jsx("span",{children:" Other news and tips"})}),m.jsx(nP,{children:a.map(o=>m.jsx(iP,{to:o.path,children:m.jsxs(aP,{children:[m.jsx(rP,{src:o.image,alt:o.title}),m.jsxs("div",{children:[m.jsx(sP,{children:o.title}),m.jsx(oP,{children:o.description})]})]})},o.id))})]})},cP=[{id:1,image:k2,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",content:`A refrigerator is one of the hardest-working appliances in your home. A little regular maintenance can help you avoid expensive breakdowns.

Clean the Condenser Coils
Dust and debris on condenser coils make your fridge work harder and increase energy bills. Clean the coils every 6–12 months with a vacuum or coil brush.

Check the Door Seals
Worn or dirty gaskets let cold air escape. Wipe the seals with warm soapy water and replace them if they are cracked or loose.

Replace the Water Filter
If your refrigerator has a water dispenser or ice maker, replace the filter every 6 months. This keeps the water clean and prevents clogs in the system.

Keep Temperatures Set Correctly
The ideal setting is 37°F for the fridge and 0°F for the freezer. Incorrect settings can cause food spoilage or frost buildup.

Pro Tip: If your fridge still isn't cooling properly, it may need professional service. In Thousand Oaks and Ventura County, Airtexno specializes in Sub-Zero, Thermador, Viking, and GE Monogram refrigerators.`},{id:2,image:hp,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",content:`Your oven and range are the heart of your kitchen. Here are five signs that it's time to call a technician.

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

Pro Tip: Airtexno repairs premium brands like Thermador, Wolf, Viking, and GE Monogram in Thousand Oaks and surrounding areas.`},{id:3,image:O2,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",content:`Your washer and dryer handle heavy loads every week. With proper care, they'll last for years.

Clean the Washer Filter
Most washers have a drain filter that catches lint, coins, and debris. Clean it every few months to prevent clogs.

Balance the Washer
If your washer shakes or "walks" across the floor, adjust the leveling legs to keep it stable.

Clean the Dryer Lint Trap
Always remove lint after each load. A clogged lint trap reduces efficiency and can become a fire hazard.

Check the Dryer Vent
At least once a year, clean the vent hose and outside exhaust. Poor airflow causes overheating and long drying times.

Pro Tip: If your washer isn't spinning or your dryer isn't heating, call Airtexno. We service Whirlpool, LG, Samsung, Maytag, and more in Ventura County.`},{id:4,image:R2,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",content:`A dishwasher that won't drain is a common household problem. Here's what to check:

1. Clogged Filter
Food particles often block the filter at the bottom. Remove and rinse it under warm water.

2. Drain Hose Issues
Make sure the hose isn't kinked or clogged. Check for blockages near the sink connection.

3. Air Gap or High Loop
California plumbing code requires a dishwasher air gap or high loop. If it's clogged, water can back up.

4. Broken Drain Pump
If you hear the motor but no water drains, the pump may have failed.

Pro Tip: Airtexno installs and repairs dishwashers in Thousand Oaks, Westlake Village, and Camarillo. We specialize in KitchenAid, Bosch, and GE models.`},{id:5,image:L2,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",content:`Every homeowner faces the repair-or-replace question. Here's how to decide.

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

Pro Tip: Not sure what to do? Airtexno provides honest advice and upfront estimates, so you don't waste money on unnecessary repairs.`},{id:6,image:j2,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",content:`When repairing appliances, you’ll often hear the term OEM parts. Here’s why they matter.

What Are OEM Parts?
OEM stands for Original Equipment Manufacturer. These are the exact parts your appliance was originally built with.

Why Choose OEM Over Aftermarket? <br/>
 • Reliability: Designed to fit perfectly and work as intended.
 <br/> • Warranty Protection: Helps maintain your manufacturer’s warranty.
 <br/> • Longevity: Aftermarket parts may fail sooner or perform inconsistently.

Examples:
Using a genuine Sub-Zero compressor instead of an aftermarket one ensures proper cooling performance. An OEM KitchenAid dishwasher pump will last longer and run quieter.

Pro Tip: At Airtexno, we only use genuine OEM or manufacturer-approved parts for all appliance repairs in Thousand Oaks and Ventura County.`}],uP={hidden:{opacity:0,x:-100},visible:{opacity:1,x:0,transition:{duration:.8,ease:ve}},exit:{opacity:0,x:100,transition:{duration:.5,ease:ve}}},dP={hidden:{opacity:0,y:-30,rotate:-10},visible:{opacity:1,y:0,rotate:0,transition:{duration:.6,ease:wa,delay:.1}},hover:{scale:1.05,x:-5,transition:{duration:.2,ease:ve}},tap:{scale:.95}},fP={hidden:{opacity:0,y:50,scale:.9,textShadow:"0 0 0px rgba(0,0,0,0)"},visible:{opacity:1,y:0,scale:1,textShadow:["0 0 0px rgba(0,0,0,0)","0 0 30px rgba(0,0,0,0.3)","0 0 10px rgba(0,0,0,0.1)"],transition:{duration:1,ease:wa,delay:.2}}},pP={hidden:{opacity:0,scale:1.2,rotate:-5,filter:"blur(10px)"},visible:{opacity:1,scale:1,rotate:0,filter:"blur(0px)",transition:{duration:1.2,ease:wa,delay:.3}}},hP={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ve,delay:.4}}},mP={hidden:{opacity:0,y:20,skewY:2},visible:e=>({opacity:1,y:0,skewY:0,transition:{duration:.6,ease:ve,delay:.5+e*.05}})},qu=({articleId:e})=>{const{id:t}=pS(),i=e||parseInt(t||"1"),a=cP.find(h=>h.id===i),{scrollY:o}=Pr(),c=on(o,[0,500],[0,50]),f=on(o,[0,300],[1,.9]);if(N.useEffect(()=>{const h=window.location.hash;if(h){const x=document.querySelector(h);x&&setTimeout(()=>{x.scrollIntoView({behavior:"smooth"})},500)}},[a]),!a)return m.jsx("div",{children:"Article not found"});const p=a.content.split(`

`);return m.jsx(ie.div,{variants:uP,initial:"hidden",animate:"visible",exit:"exit",style:{y:c,opacity:f},children:m.jsxs(WN,{id:"ap",children:[m.jsx(ie.div,{variants:dP,whileHover:"hover",whileTap:"tap",children:m.jsx(ZN,{to:"/tips",children:"← Back to Tips"})}),m.jsx(ie.div,{variants:fP,children:m.jsx(XN,{children:a.title})}),m.jsx(ie.div,{variants:pP,children:m.jsx(KN,{src:a.image,alt:a.title})}),m.jsx(ie.div,{variants:hP,children:m.jsx(QN,{children:p.map((h,x)=>m.jsxs(ie.div,{custom:x,variants:mP,initial:"hidden",animate:"visible",children:[m.jsx(JN,{dangerouslySetInnerHTML:{__html:h}}),x<p.length-1&&m.jsx(m.Fragment,{children:m.jsx("br",{})})]},x))})}),m.jsx(ie.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:m.jsx(lP,{})})]})})},gP=T.div`
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
`;T.div`
  opacity: ${({$isVisible:e})=>e?1:0};
  transform: ${({$isVisible:e})=>e?"translateY(0)":"translateY(20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({$delay:e})=>e?`${ey}ms`:"0ms"};
  
  /* Запобігання проблемам з рендерингом */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;const xP=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  width: 100%;
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
`,Bw=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  width: 100%;
  padding: 1rem;
  padding-top: 150px;

  @media (min-width: 1440px) {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin-bottom: 50px;

    max-width: 1440px;
  }
`,$x=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 40px;
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
    font-size: 85px;
  }

  @media (min-width: 1440px) {
    font-size: 85px;
  }
`,vP=T.div`
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
`,yP=T.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,wP=T.img`
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  height: auto;
  max-height: 583px;
  object-fit: cover;

  /* Оптимізація для мобільних пристроїв */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;

  @media (min-width: 768px) {
    padding: 0.75rem;
    max-height: 500px;
  }

  @media (min-width: 1440px) {
    padding: 1rem;
    max-height: 583px;
  }
`,bP=T.p`
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
`,SP=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;

  /* Запобігання випадковим клікам на мобільних */
  touch-action: manipulation;
`,Gx=T(Kt)`
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

  /* Покращення для тачскрінів */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:hover {
    background: #1a7bc9;
  }

  &:focus {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
  }

  a {
    text-decoration: none;
  }
`,Dy=T.button`
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

  /* Покращення для тачскрінів */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:hover {
    background-color: #242424;
    border-color: #242424;
  }

  &:focus {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
  }
`,km=T.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Dy}:hover & {
    color: white;
  }
`,CP=T(km)`
  color: #242424;

  ${Dy}:hover & {
    color: white;
  }
`,qx=T.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  margin: 0 auto;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  flex-wrap: wrap;

  /* Запобігання перешкоджанню свайпам */
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    padding: 0 20px;
    flex-direction: column;
    gap: 8px;
  }
`,Yx=T.div`
  border-radius: 6px;
  padding: 8px 10px;
  background: var(--white);
  gap: 10px;
  display: flex;
  width: 90%;
  margin: 0 auto;

  /* Покращення для мобільних */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;

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
  }
`,TP=T.img`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    padding-top: 20%;
  }
`,Iw=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  width: 100%;
`,Uw=T.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;

  /* Запобігання випадковим клікам на мобільних */
  touch-action: manipulation;

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
`,$w=T.div`
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
`,fm=T.img`
  padding: 8px;
  border-radius: 8px;
  object-fit: cover;

  /* Оптимізація для мобільних пристроїв */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
`,Gw=T.p`
  font-family: 'Geist', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.25em;
  color: #242424;
  width: 100%;
  margin: 0;
`,qw=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding-top: 10px;

  /* Запобігання випадковим клікам на мобільних */
  touch-action: manipulation;
`;T.button`
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

  /* Покращення для тачскрінів */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:hover {
    background: #1a7bc9;
  }
`;const q3=T.button`
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

  /* Покращення для тачскрінів */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:hover {
    background: #242424;
  }
`,AP=T.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  margin: 0;
`,Yw=T(AP)`
  color: #242424;

  ${q3}:hover & {
    color: #fff;
  }
`,EP=T.div`
  width: 553px;
  height: 396px;
`,MP=T.div`
  width: 668px;
  height: 583px;
`;T.div`
  /* Запобігання випадковим масштабуванням на iOS */
  input,
  textarea,
  select {
    font-size: 16px !important;
  }

  /* Покращення рендерингу на мобільних */
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Запобігання виділенню тексту при тапі */
  *:not(input):not(textarea) {
    -webkit-user-select: none;
    user-select: none;
  }
`;const Fw="/assets/fridge-AVDSsy-j.png",Fx="/assets/fridge1-CZ9QJ0bU.png",Yb="/assets/star-red-C6byLAbj.svg",jP=()=>{const e=ft({query:"(min-width: 768px) and (max-width: 1439px)"});return ft({query:"(min-width: 1440px)"})?m.jsxs(Bw,{children:[m.jsxs(EP,{children:[m.jsxs($x,{children:[m.jsx("span",{children:"Refrigerator"})," Repair ",m.jsx("span",{children:" in "})," Thousand Oaks and Nearby Cities"]}),m.jsx(Gw,{children:"Expert refrigerator repair in Thousand Oaks & nearby areas. We service Sub-Zero, Viking, Thermador, KitchenAid, LG, Whirlpool and more — with same-day service available."}),m.jsxs(qw,{children:[m.jsx(Gx,{to:"/contact#ap",children:m.jsx(km,{children:"Contact Us"})}),m.jsx(q3,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(Yw,{children:"Call Us"})})})]}),m.jsx(TP,{src:Yb,alt:"⭐⭐⭐⭐⭐",loading:"lazy"})]}),m.jsx(MP,{children:m.jsx(Iw,{children:m.jsxs(Uw,{children:[m.jsxs($w,{children:[m.jsx(fm,{src:Fx,alt:"Why Airtexno Image 1",className:"main-image",loading:"lazy"}),m.jsx(qx,{className:"tablet-text-wrapper",children:[{icon:"🔧",text:"Free Diagnostic With Repair"},{icon:"⏱️",text:"Same-Day Service Available"},{icon:"🚚",text:"OEM Parts From Our Own Warehouse"}].map((i,a)=>m.jsxs(Yx,{children:[m.jsx("span",{style:{fontSize:"20px"},children:i.icon}),m.jsx("p",{children:i.text})]},a))})]}),m.jsx(fm,{src:Fw,alt:"Why Airtexno Image 2",className:"secondary-image",loading:"lazy"})]})})})]}):e?m.jsxs(Bw,{children:[m.jsxs($x,{children:[m.jsx("span",{children:"Refrigerator"})," Repair ",m.jsx("span",{children:" in "})," Thousand Oaks and Nearby Cities"]}),m.jsxs(Iw,{children:[m.jsxs(Uw,{children:[m.jsxs($w,{children:[m.jsx(fm,{src:Fx,alt:"Why Airtexno Image 1",className:"main-image",loading:"lazy"}),m.jsx(qx,{className:"tablet-text-wrapper",children:[{icon:"🔧",text:"Free Diagnostic With Repair"},{icon:"⏱️",text:"Same-Day Service Available"},{icon:"🚚",text:"OEM Parts From Our Own Warehouse"}].map((i,a)=>m.jsxs(Yx,{children:[m.jsx("span",{style:{fontSize:"18px"},children:i.icon}),m.jsx("p",{children:i.text})]},a))})]}),m.jsx(fm,{src:Fw,alt:"Why Airtexno Image 2",className:"secondary-image",loading:"lazy"})]}),m.jsx(Gw,{children:"Expert refrigerator repair in Thousand Oaks & nearby areas. We service Sub-Zero, Viking, Thermador, KitchenAid, LG, Whirlpool and more — with same-day service available."}),m.jsxs(qw,{children:[m.jsx(Gx,{to:"/contact#ap",children:m.jsx(km,{children:"Contact Us"})}),m.jsx(q3,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(Yw,{children:"Call Us"})})})]})]})]}):m.jsxs(xP,{children:[m.jsxs($x,{children:[m.jsx("span",{children:"Refrigerator"})," Repair ",m.jsx("span",{children:" in "})," Thousand Oaks and Nearby Cities"]}),m.jsxs(vP,{children:[m.jsxs(yP,{children:[m.jsx(wP,{src:Fx,alt:"Why Airtexno Image 1",loading:"lazy"}),m.jsx(qx,{children:[{icon:"🔧",text:"Free Diagnostic With Repair"},{icon:"⏱️",text:"Same-Day Service Available"},{icon:"🚚",text:"OEM Parts From Our Own Warehouse"}].map((i,a)=>m.jsxs(Yx,{children:[m.jsx("span",{style:{fontSize:"16px"},children:i.icon}),m.jsx("p",{children:i.text})]},a))})]}),m.jsx(bP,{children:"Expert refrigerator repair in Thousand Oaks & nearby areas. We service Sub-Zero, Viking, Thermador, KitchenAid, LG, Whirlpool and more — with same-day service available."}),m.jsxs(SP,{children:[m.jsx(Gx,{to:"/contact#ap",children:m.jsx(km,{children:"Contact Us"})}),m.jsx(Dy,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(CP,{children:"Call Us"})})})]})]})]})},OP=Nr`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`,RP=T.div`
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
`,LP=T.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,kP=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${OP} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }
`,DP=T.div`
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
`,zP=T.div`
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
`,HP=T.div`
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
`,VP=T.div`
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
`,_P=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 14px;
  }

  @media (min-width: 1440px) {
    max-width: 580px;
  }
`,NP=T.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    max-width: 600px;
  }
`,PP=T.p`
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
`,BP=T.h2`
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
`,IP=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  padding-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`,UP=T.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,$P=T(Kt)`
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
`,GP=T.button`
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
    color: #ffffff;
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
`,qP=()=>{const e=[{title:"Not Freezing / Not Cooling",description:"If your refrigerator can't keep food cold or frozen, our technicians will diagnose the cooling system and restore proper temperature.",price:"from <span>$200</span>"},{title:"Leaking Water",description:"Leaks under or inside your fridge often mean clogged drains or broken valves. We'll quickly locate the problem and repair it with lasting results.",price:"from <span>$225</span>"},{title:"Loud Noises",description:"Buzzing, grinding, or knocking sounds usually come from the fan or compressor. Our team will fix the issue and make your fridge run quietly again.",price:"from <span>$200</span>"},{title:"Won't Turn On",description:"From faulty wiring to failed control boards, we'll troubleshoot and get your refrigerator running again.",price:"from <span>$250</span>"},{title:"Not Cooling Properly",description:"Uneven temperatures, warm spots, or weak cooling often signal problems with sensors or compressors. We'll get your fridge back to optimal performance.",price:"from <span>$250</span>"}],t={hidden:{opacity:0,y:50,scale:.9,rotate:-2},visible:{opacity:1,y:0,scale:1,rotate:0,transition:{duration:.8,ease:ve}}},i={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.6,ease:ve,delay:.2}}},a={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:ve}},hover:{scale:1.05,transition:{duration:.2,ease:ve}},tap:{scale:.95}};return m.jsx(HP,{children:m.jsxs(VP,{children:[m.jsxs(_P,{children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,children:m.jsx(PP,{children:"Common Refrigerator Problems We Repair"})}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.1},children:m.jsxs(BP,{children:["Professional Refrigerator Repair ",m.jsx("span",{children:"& Installation Services"})]})})]}),m.jsxs(NP,{children:[m.jsx(YP,{services:e}),m.jsxs(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:i,children:[m.jsx(IP,{children:"Having issues with your fridge? Call us today — we'll fix it and restore normal operation fast."}),m.jsxs(UP,{children:[m.jsx(ie.div,{variants:a,whileHover:"hover",whileTap:"tap",children:m.jsx($P,{to:"/contact#ap",children:"Contact Us"})}),m.jsx(ie.div,{variants:a,whileHover:"hover",whileTap:"tap",transition:{delay:.1},children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(GP,{children:"Call Us"})})})]})]})]})]})})},YP=({services:e})=>{const{scrollY:t}=Pr(),i=on(t,[0,1e3],[0,200]),a=on(t,[0,800],[0,1]),o=[...e,...e],c={hidden:p=>({opacity:0,y:100,scale:.8,rotateX:-45,filter:"blur(5px)"}),visible:p=>({opacity:1,y:0,scale:1,rotateX:0,filter:"blur(0px)",transition:{duration:.7,delay:p*.1,ease:wa}}),hover:{scale:1.02,y:-5,rotateY:3,boxShadow:"0 15px 30px rgba(0,0,0,0.15)",transition:{duration:.3,ease:ve}}},f={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:ve,delay:.2}}};return m.jsx(ie.div,{style:{y:i,rotate:a},children:m.jsx(RP,{children:m.jsx(LP,{children:m.jsx(kP,{children:o.map((p,h)=>m.jsx(ie.div,{custom:h,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:c,whileHover:"hover",children:m.jsx(DP,{children:m.jsx(ie.div,{variants:f,children:m.jsxs(zP,{children:[m.jsx("h3",{children:p.title}),m.jsx("p",{children:p.description}),m.jsx("p",{dangerouslySetInnerHTML:{__html:p.price}})]})})})},h))})})})})},FP="/assets/1-BfPZdbUH.png",WP="/assets/2-zYtOs5TG.png",ZP="/assets/3-SBPgwxa7.png",XP="/assets/IMG_2543-CiVmf7hk.png",KP="/assets/5-DO04-jdm.png",QP="/assets/IceMakers-D24SnTfg.avif",JP="/assets/Bar_BeverageRefrigerators-C4Sqh2we.webp",eB="/assets/MiniFridges-De3_TMkM.webp",Ww=[{img:FP,title:"Built-In Refrigerators",description:"High-end models seamlessly integrated into your kitchen. We specialize in servicing premium brands like Sub-Zero, Viking, Thermador, and Monogram."},{img:WP,title:"Freezers",description:"From upright and chest freezers to commercial units — we fix cooling issues, thermostat problems, and compressor failures."},{img:ZP,title:"French Door & Side-by-Side Refrigerators",description:"Modern models with large capacity and dual-door convenience. We repair cooling imbalances, ice maker failures, and electronic control issues."},{img:XP,title:"Wine Coolers",description:"Repairs for temperature fluctuations, thermostat malfunctions, and compressor failures to keep your wine collection safe."},{img:KP,title:"Two-compressor refrigerators",description:"Advanced appliances with independent systems for cooling and freezing, ensuring flexibility and reliability."},{img:QP,title:"Ice Makers",description:"Standalone ice machines and built-in refrigerator ice makers — we fix leaks, clogs, and ice production problems."},{img:JP,title:"Bar & Beverage Refrigerators",description:"Compact drink fridges for home bars, offices, or entertainment spaces. We repair cooling, fan, and control board issues."},{img:eB,title:"Mini Fridges",description:"Small refrigerators for dorms, offices, and apartments. Quick repair solutions for cooling loss, leaks, and electrical faults."}],tB=()=>{const e=N.useRef(null),t=ft({query:"(max-width: 767px)"}),i=ft({query:"(min-width: 768px) and (max-width: 1439px)"}),a=ft({query:"(min-width: 1440px)"}),o=t?1:i?2:a?4:2,c=Ww.length>o,{scrollY:f}=Pr(),p=on(f,[0,500],[0,80]),h=on(f,[0,300],[1,1.05]),x={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.8,ease:ve}}},y={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:ve}}},b={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ve}}},S={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.4,ease:ve}}},E={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7,ease:ve}}};return m.jsxs(rB,{children:[m.jsx(ie.div,{style:{y:p,scale:h},initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:E,children:m.jsxs(sB,{children:[m.jsx(oB,{children:"Refrigerator Repair"}),m.jsxs(lB,{children:["We repair ",m.jsx("span",{children:" all types "})," of refrigerators"]})]})}),m.jsxs(nB,{children:[m.jsx(ta,{modules:[M2,ba],onSwiper:A=>e.current=A,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:600,loop:c,slidesPerView:o,centeredSlides:t,touchRatio:1.5,touchAngle:45,simulateTouch:!0,allowTouchMove:!0,resistance:!0,resistanceRatio:.85,children:Ww.map((A,k)=>m.jsx(na,{children:m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:y,children:m.jsxs(cB,{children:[m.jsx(ie.div,{variants:x,children:m.jsx(uB,{src:A.img,alt:A.title,loading:"lazy",decoding:"async"})}),m.jsx(ie.div,{variants:b,children:m.jsxs(dB,{children:[m.jsx(fB,{children:A.title}),m.jsx(pB,{children:A.description})]})})]})})},k))}),m.jsxs(aB,{children:[m.jsx(ie.div,{variants:S,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:m.jsx(Zw,{onClick:()=>{var A;return(A=e.current)==null?void 0:A.slidePrev()},children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),m.jsx(ie.div,{variants:S,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.1},children:m.jsx(Zw,{onClick:()=>{var A;return(A=e.current)==null?void 0:A.slideNext()},children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})]})]})},nB=T.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .swiper-slide:active {
    cursor: grabbing;
  }
`,iB=Nr`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,aB=T.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,Zw=T.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: #DBDBD8;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  touch-action: manipulation;

  &:hover,
  &:focus,
  &:active {
    background-color: #3098EE;
    animation: ${iB} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 767px) {
    width: 44px;
    height: 44px;
  }
`,rB=T.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
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
`,sB=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,oB=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,lB=T.p`
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

  @media (max-width: 767px) {
    font-size: 32px;
    
    span {
      font-size: 32px;
    }
  }
`,cB=T.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media screen and (min-width: 768px) {
    max-width: 322px;
  }

  @media screen and (min-width: 1440px) {
    width: fit-content;
  }
`,uB=T.img`
  border-radius: 8px;
  width: 100%;
  height: auto;
  aspect-ratio: 2/3;
  object-fit: cover;
  transition: all 0.3s ease;

  @media (max-width: 767px) {
    max-width: 100%;
    height: auto;
  }
`,dB=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 1px;
  background: var(--white);
  padding: 12px;
  margin: 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
  width: calc(100% - 16px);
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 10px;
    margin: 20px 6px;
    width: calc(100% - 12px);
  }
    @media screen and (min-width: 1440px) {
    margin: 20px 6px;
  }
`,fB=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }
`,pB=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 120%;
  }
`,hB=()=>m.jsxs(gP,{id:"ap",children:[m.jsx(jP,{}),m.jsx(ky,{}),m.jsx(qP,{}),m.jsx(tB,{}),m.jsx(pp,{}),m.jsx(D2,{}),m.jsx(fp,{})]});T.div`
  opacity: ${({$isVisible:e})=>e?1:0};
  transform: ${({$isVisible:e})=>e?"translateY(0)":"translateY(20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({$delay:e})=>e?`${ey}ms`:"0ms"};
  
  /* Запобігання проблемам з рендерингом */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;const mB=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  width: 100%;
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
`,Xw=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  width: 100%;
  padding: 1rem;
  padding-top: 150px;

  @media (min-width: 1440px) {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin-bottom: 50px;

    max-width: 1440px;
  }
`,Wx=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 40px;
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
    font-size: 85px;
  }

  @media (min-width: 1440px) {
    font-size: 85px;
  }
`,gB=T.div`
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
`,xB=T.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,vB=T.img`
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  height: auto;
  max-height: 583px;
  object-fit: cover;

  /* Оптимізація для мобільних пристроїв */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;

  @media (min-width: 768px) {
    padding: 0.75rem;
    max-height: 500px;
  }

  @media (min-width: 1440px) {
    padding: 1rem;
    max-height: 583px;
  }
`,yB=T.p`
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
`,wB=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;

  /* Запобігання випадковим клікам на мобільних */
  touch-action: manipulation;
`,Zx=T(Kt)`
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

  /* Покращення для тачскрінів */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:hover {
    background: #1a7bc9;
  }

  &:focus {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
  }

  a {
    text-decoration: none;
  }
`,zy=T.button`
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

  /* Покращення для тачскрінів */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:hover {
    background-color: #242424;
    border-color: #242424;
  }

  &:focus {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
  }
`,Dm=T.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${zy}:hover & {
    color: white;
  }
`,bB=T(Dm)`
  color: #242424;

  ${zy}:hover & {
    color: white;
  }
`,Xx=T.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  margin: 0 auto;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  flex-wrap: wrap;

  /* Запобігання перешкоджанню свайпам */
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    padding: 0 20px;
    flex-direction: column;
    gap: 8px;
  }
`,Kx=T.div`
  border-radius: 6px;
  padding: 8px 10px;
  background: var(--white);
  gap: 10px;
  display: flex;
  width: 90%;
  margin: 0 auto;

  /* Покращення для мобільних */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;

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
  }
`,SB=T.img`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    padding-top: 20%;
  }
`,Kw=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  width: 100%;
`,Qw=T.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;

  /* Запобігання випадковим клікам на мобільних */
  touch-action: manipulation;

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
`,Jw=T.div`
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
`,pm=T.img`
  padding: 8px;
  border-radius: 8px;
  object-fit: cover;

  /* Оптимізація для мобільних пристроїв */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
`,e6=T.p`
  font-family: 'Geist', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.25em;
  color: #242424;
  width: 100%;
  margin: 0;
`,t6=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding-top: 10px;

  /* Запобігання випадковим клікам на мобільних */
  touch-action: manipulation;
`;T.button`
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

  /* Покращення для тачскрінів */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:hover {
    background: #1a7bc9;
  }
`;const Y3=T.button`
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

  /* Покращення для тачскрінів */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:hover {
    background: #242424;
  }
`,CB=T.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  margin: 0;
`,n6=T(CB)`
  color: #242424;

  ${Y3}:hover & {
    color: #fff;
  }
`,TB=T.div`
  width: 553px;
  height: 396px;
`,AB=T.div`
  width: 668px;
  height: 583px;
`;T.div`
  /* Запобігання випадковим масштабуванням на iOS */
  input,
  textarea,
  select {
    font-size: 16px !important;
  }

  /* Покращення рендерингу на мобільних */
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Запобігання виділенню тексту при тапі */
  *:not(input):not(textarea) {
    -webkit-user-select: none;
    user-select: none;
  }
`;const i6="/assets/dr1-COeoQmQQ.jpg",Qx="/assets/dr-DwopU3xs.jpg",EB=()=>{const e=ft({query:"(min-width: 768px) and (max-width: 1439px)"});return ft({query:"(min-width: 1440px)"})?m.jsxs(Xw,{children:[m.jsxs(TB,{children:[m.jsxs(Wx,{children:[m.jsx("span",{children:"Dryer"})," Repair ",m.jsx("span",{children:" in "})," Thousand Oaks and Nearby Cities"]}),m.jsx(e6,{children:"We specialize in LG dryer repair, as well as servicing Whirlpool, Samsung, GE, Maytag, and other major brands. Our professionally trained technicians can quickly diagnose and fix heating problems, drum issues, unusual noises, or other dryer malfunctions. Same-day and emergency service are available to keep your laundry running smoothly."}),m.jsxs(t6,{children:[m.jsx(Zx,{to:"/contact#ap",children:m.jsx(Dm,{children:"Contact Us"})}),m.jsx(Y3,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(n6,{children:"Call Us"})})})]}),m.jsx(SB,{src:Yb,alt:"⭐⭐⭐⭐⭐",loading:"lazy"})]}),m.jsx(AB,{children:m.jsx(Kw,{children:m.jsxs(Qw,{children:[m.jsxs(Jw,{children:[m.jsx(pm,{src:Qx,alt:"Why Airtexno Image 1",className:"main-image",loading:"lazy"}),m.jsx(Xx,{className:"tablet-text-wrapper",children:[{icon:"🔧",text:"Free Diagnostic With Repair"},{icon:"⏱️",text:"Same-Day Service Available"},{icon:"🚚",text:"OEM Parts From Our Own Warehouse"}].map((i,a)=>m.jsxs(Kx,{children:[m.jsx("span",{style:{fontSize:"20px"},children:i.icon}),m.jsx("p",{children:i.text})]},a))})]}),m.jsx(pm,{src:i6,alt:"Why Airtexno Image 2",className:"secondary-image",loading:"lazy"})]})})})]}):e?m.jsxs(Xw,{children:[m.jsxs(Wx,{children:[m.jsx("span",{children:"Dryer"})," Repair ",m.jsx("span",{children:" in "})," Thousand Oaks and Nearby Cities"]}),m.jsxs(Kw,{children:[m.jsxs(Qw,{children:[m.jsxs(Jw,{children:[m.jsx(pm,{src:Qx,alt:"Why Airtexno Image 1",className:"main-image",loading:"lazy"}),m.jsx(Xx,{className:"tablet-text-wrapper",children:[{icon:"🔧",text:"Free Diagnostic With Repair"},{icon:"⏱️",text:"Same-Day Service Available"},{icon:"🚚",text:"OEM Parts From Our Own Warehouse"}].map((i,a)=>m.jsxs(Kx,{children:[m.jsx("span",{style:{fontSize:"18px"},children:i.icon}),m.jsx("p",{children:i.text})]},a))})]}),m.jsx(pm,{src:i6,alt:"Why Airtexno Image 2",className:"secondary-image",loading:"lazy"})]}),m.jsx(e6,{children:"We specialize in LG dryer repair, as well as servicing Whirlpool, Samsung, GE, Maytag, and other major brands. Our professionally trained technicians can quickly diagnose and fix heating problems, drum issues, unusual noises, or other dryer malfunctions. Same-day and emergency service are available to keep your laundry running smoothly."}),m.jsxs(t6,{children:[m.jsx(Zx,{to:"/contact#ap",children:m.jsx(Dm,{children:"Contact Us"})}),m.jsx(Y3,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(n6,{children:"Call Us"})})})]})]})]}):m.jsxs(mB,{children:[m.jsxs(Wx,{children:[m.jsx("span",{children:"Dryer"})," Repair ",m.jsx("span",{children:" in "})," Thousand Oaks and Nearby Cities"]}),m.jsxs(gB,{children:[m.jsxs(xB,{children:[m.jsx(vB,{src:Qx,alt:"Why Airtexno Image 1",loading:"lazy"}),m.jsx(Xx,{children:[{icon:"🔧",text:"Free Diagnostic With Repair"},{icon:"⏱️",text:"Same-Day Service Available"},{icon:"🚚",text:"OEM Parts From Our Own Warehouse"}].map((i,a)=>m.jsxs(Kx,{children:[m.jsx("span",{style:{fontSize:"16px"},children:i.icon}),m.jsx("p",{children:i.text})]},a))})]}),m.jsx(yB,{children:"We specialize in LG dryer repair, as well as servicing Whirlpool, Samsung, GE, Maytag, and other major brands. Our professionally trained technicians can quickly diagnose and fix heating problems, drum issues, unusual noises, or other dryer malfunctions. Same-day and emergency service are available to keep your laundry running smoothly."}),m.jsxs(wB,{children:[m.jsx(Zx,{to:"/contact#ap",children:m.jsx(Dm,{children:"Contact Us"})}),m.jsx(zy,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(bB,{children:"Call Us"})})})]})]})]})},MB=Nr`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`,jB=T.div`
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
`,OB=T.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,RB=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${MB} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }
`,LB=T.div`
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
`,kB=T.div`
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
`,DB=T.div`
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
`,zB=T.div`
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
`,HB=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 14px;
  }

  @media (min-width: 1440px) {
    max-width: 580px;
  }
`,VB=T.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    max-width: 600px;
  }
`,_B=T.p`
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
`,NB=T.h2`
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
`,PB=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  padding-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`,BB=T.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,IB=T(Kt)`
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
`,UB=T.button`
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
    color: #ffffff;
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
`,$B=()=>{const e=[{title:"NOT HEATING / NO HEAT",description:"If your dryer isn’t heating, the issue could be a faulty heating element, blown fuse, or thermostat problem. We’ll diagnose and repair it so your dryer works like new.",price:"from <span>$200</span>"},{title:"DRUM NOT SPINNING",description:"A drum that won’t spin often points to a broken belt, worn motor, or damaged pulley. Our team will restore proper rotation and get your laundry back on track.",price:"from <span>$200</span>"},{title:"TAKES TOO LONG TO DRY",description:"If your clothes take multiple cycles to dry, clogged vents, a weak heater, or sensor issues could be to blame. We’ll make your dryer efficient again.",price:"from <span>$200</span>"},{title:"LOUD NOISES / VIBRATIONS",description:"Buzzing, squealing, or banging noises may come from worn bearings, loose parts, or a failing motor. We’ll eliminate the noise and restore quiet operation.",price:"from <span>$200</span>"},{title:"DRYER WON’T START / NOT TURNING ON",description:"If your dryer won’t start or power on, faulty door switches, control boards, or wiring problems might be the cause. We’ll find the issue and get your dryer running again.",price:"from <span>$200</span>"}],t={hidden:{opacity:0,y:50,scale:.9,rotate:-2},visible:{opacity:1,y:0,scale:1,rotate:0,transition:{duration:.8,ease:ve}}},i={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.6,ease:ve,delay:.2}}},a={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:ve}},hover:{scale:1.05,transition:{duration:.2,ease:ve}},tap:{scale:.95}};return m.jsx(DB,{children:m.jsxs(zB,{children:[m.jsxs(HB,{children:[m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,children:m.jsx(_B,{children:"Common Dryer Problems We Repair"})}),m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.1},children:m.jsxs(NB,{children:["Professional Dryer Repair ",m.jsx("span",{children:"& Installation Services"})]})})]}),m.jsxs(VB,{children:[m.jsx(GB,{services:e}),m.jsxs(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:i,children:[m.jsx(PB,{children:"Having issues with your dryer? Call us today — we'll fix it and restore normal operation fast."}),m.jsxs(BB,{children:[m.jsx(ie.div,{variants:a,whileHover:"hover",whileTap:"tap",children:m.jsx(IB,{to:"/contact#ap",children:"Contact Us"})}),m.jsx(ie.div,{variants:a,whileHover:"hover",whileTap:"tap",transition:{delay:.1},children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(UB,{children:"Call Us"})})})]})]})]})]})})},GB=({services:e})=>{const{scrollY:t}=Pr(),i=on(t,[0,1e3],[0,200]),a=on(t,[0,800],[0,1]),o=[...e,...e],c={hidden:p=>({opacity:0,y:100,scale:.8,rotateX:-45,filter:"blur(5px)"}),visible:p=>({opacity:1,y:0,scale:1,rotateX:0,filter:"blur(0px)",transition:{duration:.7,delay:p*.1,ease:wa}}),hover:{scale:1.02,y:-5,rotateY:3,boxShadow:"0 15px 30px rgba(0,0,0,0.15)",transition:{duration:.3,ease:ve}}},f={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:ve,delay:.2}}};return m.jsx(ie.div,{style:{y:i,rotate:a},children:m.jsx(jB,{children:m.jsx(OB,{children:m.jsx(RB,{children:o.map((p,h)=>m.jsx(ie.div,{custom:h,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:c,whileHover:"hover",children:m.jsx(LB,{children:m.jsx(ie.div,{variants:f,children:m.jsxs(kB,{children:[m.jsx("h3",{children:p.title}),m.jsx("p",{children:p.description}),m.jsx("p",{dangerouslySetInnerHTML:{__html:p.price}})]})})})},h))})})})})},qB="/assets/image1-BJRIi7Is.jpg",YB="/assets/image2-fujv6daj.jpg",FB="/assets/image3-CXkCnP5D.jpg",WB="/assets/image4-DL80B-4w.jpg",ZB="/assets/dr1-COeoQmQQ.jpg",XB="/assets/image6-CxHDfmtb.png",a6=[{img:qB,title:"COMMERCIAL DRYERS",description:"Commercial dryers are built for heavy loads and frequent use. We provide expert repair for laundromats, hotels, and other businesses to keep operations running smoothly."},{img:YB,title:"STACKABLE DRYERS",description:"Stackable dryers are popular for apartments and condos. We fix motor problems, belts, sensors, and any mechanical issues."},{img:FB,title:"HEAT PUMP & VENTLESS DRYERS",description:"Modern ventless and heat pump dryers are energy-efficient but require expert care. We handle refrigerant, compressor, and airflow problems."},{img:WB,title:"WASHER-DRYER COMBO UNITS",description:"Washer-dryer combos save space but can be complex to repair. We specialize in diagnosing drum, pump, and control board issues."},{img:ZB,title:"GAS DRYERS",description:"Gas dryers are efficient but require special expertise to service safely. Our team handles gas valve issues, ignition problems, and venting concerns."},{img:XB,title:"ELECTRIC DRYERS",description:"Electric dryers are common in most homes and are easy to install. We quickly diagnose and repair heating issues, wiring problems, and control malfunctions."}],KB=()=>{const e=N.useRef(null),t=ft({query:"(max-width: 767px)"}),i=ft({query:"(min-width: 768px) and (max-width: 1439px)"}),a=ft({query:"(min-width: 1440px)"}),o=t?1:i?2:a?4:2,c=a6.length>o,{scrollY:f}=Pr(),p=on(f,[0,500],[0,80]),h=on(f,[0,300],[1,1.05]),x={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.8,ease:ve}}},y={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:ve}}},b={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ve}}},S={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.4,ease:ve}}},E={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7,ease:ve}}};return m.jsxs(tI,{children:[m.jsx(ie.div,{style:{y:p,scale:h},initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:E,children:m.jsxs(nI,{children:[m.jsx(iI,{children:"Dryer Repair"}),m.jsxs(aI,{children:["WE REPAIR ",m.jsx("span",{children:" ALL MAJOR DRYER "})," BRANDS AND MODELS."]})]})}),m.jsxs(QB,{children:[m.jsx(ta,{modules:[M2,ba],onSwiper:A=>e.current=A,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:600,loop:c,slidesPerView:o,centeredSlides:t,touchRatio:1.5,touchAngle:45,simulateTouch:!0,allowTouchMove:!0,resistance:!0,resistanceRatio:.85,children:a6.map((A,k)=>m.jsx(na,{children:m.jsx(ie.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:y,children:m.jsxs(rI,{children:[m.jsx(ie.div,{variants:x,children:m.jsx(sI,{src:A.img,alt:A.title,loading:"lazy",decoding:"async"})}),m.jsx(ie.div,{variants:b,children:m.jsxs(oI,{children:[m.jsx(lI,{children:A.title}),m.jsx(cI,{children:A.description})]})})]})})},k))}),m.jsxs(eI,{children:[m.jsx(ie.div,{variants:S,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:m.jsx(r6,{onClick:()=>{var A;return(A=e.current)==null?void 0:A.slidePrev()},children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),m.jsx(ie.div,{variants:S,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.1},children:m.jsx(r6,{onClick:()=>{var A;return(A=e.current)==null?void 0:A.slideNext()},children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})]})]})},QB=T.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .swiper-slide:active {
    cursor: grabbing;
  }
`,JB=Nr`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,eI=T.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,r6=T.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: #dbdbd8;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  touch-action: manipulation;

  &:hover,
  &:focus,
  &:active {
    background-color: #3098ee;
    animation: ${JB} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 767px) {
    width: 44px;
    height: 44px;
  }
`,tI=T.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
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
`,nI=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,iI=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,aI=T.p`
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

  @media (max-width: 767px) {
    font-size: 32px;

    span {
      font-size: 32px;
    }
  }
`,rI=T.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media screen and (min-width: 768px) {
    max-width: 322px;
  }

  @media screen and (min-width: 1440px) {
    width: fit-content;
  }
`,sI=T.img`
  border-radius: 8px;
  width: 100%;
  height: auto;
  aspect-ratio: 2/3;
  object-fit: cover;
  transition: all 0.3s ease;

  @media (max-width: 767px) {
    max-width: 100%;
    height: auto;
  }
`,oI=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 1px;
  background: var(--white);
  padding: 12px;
  margin: 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
  width: calc(100% - 16px);
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 10px;
    margin: 20px 6px;
    width: calc(100% - 12px);
  }
  @media screen and (min-width: 1440px) {
    margin: 20px 6px;
  }
`,lI=T.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }
`,cI=T.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 120%;
  }
`,uI=()=>m.jsxs(dI,{id:"ap",children:[m.jsx(EB,{}),m.jsx(ky,{}),m.jsx($B,{}),m.jsx(KB,{}),m.jsx(pp,{}),m.jsx(D2,{}),m.jsx(fp,{})]}),dI=T.div`
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
`,vi=({children:e})=>m.jsx("div",{style:{width:"100%",position:"relative"},children:e}),fI=()=>{const e=ia();return m.jsxs(m.Fragment,{children:[" ",m.jsx(Ym,{mode:"wait",children:m.jsxs(RS,{location:e,children:[m.jsx(bn,{path:"/",element:m.jsx(MS,{to:"/home"})}),m.jsxs(bn,{path:"/",element:m.jsx($L,{}),children:[m.jsx(bn,{index:!0,element:m.jsx(vi,{children:m.jsx(Ix,{})})}),m.jsx(bn,{path:"/home",element:m.jsx(vi,{children:m.jsx(Ix,{})})}),m.jsx(bn,{path:"/service",element:m.jsx(vi,{children:m.jsx(YN,{})})}),m.jsx(bn,{path:"/about",element:m.jsx(vi,{children:m.jsx($_,{})})}),m.jsxs(bn,{path:"/tips",children:[m.jsx(bn,{index:!0,element:m.jsx(vi,{children:m.jsx(oN,{})})}),m.jsx(bn,{path:"refrigerator-maintenance",element:m.jsx(vi,{children:m.jsx(qu,{articleId:1})})}),m.jsx(bn,{path:"oven-repair-signs",element:m.jsx(vi,{children:m.jsx(qu,{articleId:2})})}),m.jsx(bn,{path:"laundry-appliance-maintenance",element:m.jsx(vi,{children:m.jsx(qu,{articleId:3})})}),m.jsx(bn,{path:"dishwasher-drainage",element:m.jsx(vi,{children:m.jsx(qu,{articleId:4})})}),m.jsx(bn,{path:"repair-vs-replace",element:m.jsx(vi,{children:m.jsx(qu,{articleId:5})})}),m.jsx(bn,{path:"oem-parts",element:m.jsx(vi,{children:m.jsx(qu,{articleId:6})})})]}),m.jsx(bn,{path:"/contact",element:m.jsx(vi,{children:m.jsx(q_,{})})}),m.jsx(bn,{path:"/fridge",element:m.jsx(vi,{children:m.jsx(hB,{})})}),m.jsx(bn,{path:"/dryer",element:m.jsx(vi,{children:m.jsx(uI,{})})}),m.jsx(bn,{path:"*",element:m.jsx(vi,{children:m.jsx(Ix,{})})})]})]},e.pathname)})]})},Ue=e=>typeof e=="string",L0=()=>{let e,t;const i=new Promise((a,o)=>{e=a,t=o});return i.resolve=e,i.reject=t,i},s6=e=>e==null?"":""+e,pI=(e,t,i)=>{e.forEach(a=>{t[a]&&(i[a]=t[a])})},hI=/###/g,o6=e=>e&&e.indexOf("###")>-1?e.replace(hI,"."):e,l6=e=>!e||Ue(e),$0=(e,t,i)=>{const a=Ue(t)?t.split("."):t;let o=0;for(;o<a.length-1;){if(l6(e))return{};const c=o6(a[o]);!e[c]&&i&&(e[c]=new i),Object.prototype.hasOwnProperty.call(e,c)?e=e[c]:e={},++o}return l6(e)?{}:{obj:e,k:o6(a[o])}},c6=(e,t,i)=>{const{obj:a,k:o}=$0(e,t,Object);if(a!==void 0||t.length===1){a[o]=i;return}let c=t[t.length-1],f=t.slice(0,t.length-1),p=$0(e,f,Object);for(;p.obj===void 0&&f.length;)c=`${f[f.length-1]}.${c}`,f=f.slice(0,f.length-1),p=$0(e,f,Object),p!=null&&p.obj&&typeof p.obj[`${p.k}.${c}`]<"u"&&(p.obj=void 0);p.obj[`${p.k}.${c}`]=i},mI=(e,t,i,a)=>{const{obj:o,k:c}=$0(e,t,Object);o[c]=o[c]||[],o[c].push(i)},i2=(e,t)=>{const{obj:i,k:a}=$0(e,t);if(i&&Object.prototype.hasOwnProperty.call(i,a))return i[a]},gI=(e,t,i)=>{const a=i2(e,i);return a!==void 0?a:i2(t,i)},Fb=(e,t,i)=>{for(const a in t)a!=="__proto__"&&a!=="constructor"&&(a in e?Ue(e[a])||e[a]instanceof String||Ue(t[a])||t[a]instanceof String?i&&(e[a]=t[a]):Fb(e[a],t[a],i):e[a]=t[a]);return e},Yu=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var xI={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const vI=e=>Ue(e)?e.replace(/[&<>"'\/]/g,t=>xI[t]):e;class yI{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const i=this.regExpMap.get(t);if(i!==void 0)return i;const a=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,a),this.regExpQueue.push(t),a}}const wI=[" ",",","?","!",";"],bI=new yI(20),SI=(e,t,i)=>{t=t||"",i=i||"";const a=wI.filter(f=>t.indexOf(f)<0&&i.indexOf(f)<0);if(a.length===0)return!0;const o=bI.getRegExp(`(${a.map(f=>f==="?"?"\\?":f).join("|")})`);let c=!o.test(e);if(!c){const f=e.indexOf(i);f>0&&!o.test(e.substring(0,f))&&(c=!0)}return c},F3=function(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const a=t.split(i);let o=e;for(let c=0;c<a.length;){if(!o||typeof o!="object")return;let f,p="";for(let h=c;h<a.length;++h)if(h!==c&&(p+=i),p+=a[h],f=o[p],f!==void 0){if(["string","number","boolean"].indexOf(typeof f)>-1&&h<a.length-1)continue;c+=h-c+1;break}o=f}return o},a2=e=>e==null?void 0:e.replace("_","-"),CI={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var i,a;(a=(i=console==null?void 0:console[e])==null?void 0:i.apply)==null||a.call(i,console,t)}};class r2{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,i)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=t||CI,this.options=i,this.debug=i.debug}log(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"log","",!0)}warn(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"warn","",!0)}error(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"error","")}deprecate(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(t,i,a,o){return o&&!this.debug?null:(Ue(t[0])&&(t[0]=`${a}${this.prefix} ${t[0]}`),this.logger[i](t))}create(t){return new r2(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new r2(this.logger,t)}}var Lr=new r2;class z2{constructor(){this.observers={}}on(t,i){return t.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);const o=this.observers[a].get(i)||0;this.observers[a].set(i,o+1)}),this}off(t,i){if(this.observers[t]){if(!i){delete this.observers[t];return}this.observers[t].delete(i)}}emit(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(f=>{let[p,h]=f;for(let x=0;x<h;x++)p(...a)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(f=>{let[p,h]=f;for(let x=0;x<h;x++)p.apply(p,[t,...a])})}}class u6 extends z2{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const i=this.options.ns.indexOf(t);i>-1&&this.options.ns.splice(i,1)}getResource(t,i,a){var x,y;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const c=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,f=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let p;t.indexOf(".")>-1?p=t.split("."):(p=[t,i],a&&(Array.isArray(a)?p.push(...a):Ue(a)&&c?p.push(...a.split(c)):p.push(a)));const h=i2(this.data,p);return!h&&!i&&!a&&t.indexOf(".")>-1&&(t=p[0],i=p[1],a=p.slice(2).join(".")),h||!f||!Ue(a)?h:F3((y=(x=this.data)==null?void 0:x[t])==null?void 0:y[i],a,c)}addResource(t,i,a,o){let c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const f=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator;let p=[t,i];a&&(p=p.concat(f?a.split(f):a)),t.indexOf(".")>-1&&(p=t.split("."),o=i,i=p[1]),this.addNamespaces(i),c6(this.data,p,o),c.silent||this.emit("added",t,i,a,o)}addResources(t,i,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const c in a)(Ue(a[c])||Array.isArray(a[c]))&&this.addResource(t,i,c,a[c],{silent:!0});o.silent||this.emit("added",t,i,a)}addResourceBundle(t,i,a,o,c){let f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},p=[t,i];t.indexOf(".")>-1&&(p=t.split("."),o=a,a=i,i=p[1]),this.addNamespaces(i);let h=i2(this.data,p)||{};f.skipCopy||(a=JSON.parse(JSON.stringify(a))),o?Fb(h,a,c):h={...h,...a},c6(this.data,p,h),f.silent||this.emit("added",t,i,a)}removeResourceBundle(t,i){this.hasResourceBundle(t,i)&&delete this.data[t][i],this.removeNamespaces(i),this.emit("removed",t,i)}hasResourceBundle(t,i){return this.getResource(t,i)!==void 0}getResourceBundle(t,i){return i||(i=this.options.defaultNS),this.getResource(t,i)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const i=this.getDataByLanguage(t);return!!(i&&Object.keys(i)||[]).find(o=>i[o]&&Object.keys(i[o]).length>0)}toJSON(){return this.data}}var Wb={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,i,a,o){return e.forEach(c=>{var f;t=((f=this.processors[c])==null?void 0:f.process(t,i,a,o))??t}),t}};const d6={},f6=e=>!Ue(e)&&typeof e!="boolean"&&typeof e!="number";class s2 extends z2{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),pI(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Lr.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const a=this.resolve(t,i);return(a==null?void 0:a.res)!==void 0}extractFromKey(t,i){let a=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let c=i.ns||this.options.defaultNS||[];const f=a&&t.indexOf(a)>-1,p=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!SI(t,a,o);if(f&&!p){const h=t.match(this.interpolator.nestingRegexp);if(h&&h.length>0)return{key:t,namespaces:Ue(c)?[c]:c};const x=t.split(a);(a!==o||a===o&&this.options.ns.indexOf(x[0])>-1)&&(c=x.shift()),t=x.join(o)}return{key:t,namespaces:Ue(c)?[c]:c}}translate(t,i,a){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,c=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:f,namespaces:p}=this.extractFromKey(t[t.length-1],i),h=p[p.length-1],x=i.lng||this.language,y=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((x==null?void 0:x.toLowerCase())==="cimode"){if(y){const de=i.nsSeparator||this.options.nsSeparator;return o?{res:`${h}${de}${f}`,usedKey:f,exactUsedKey:f,usedLng:x,usedNS:h,usedParams:this.getUsedParamsDetails(i)}:`${h}${de}${f}`}return o?{res:f,usedKey:f,exactUsedKey:f,usedLng:x,usedNS:h,usedParams:this.getUsedParamsDetails(i)}:f}const b=this.resolve(t,i);let S=b==null?void 0:b.res;const E=(b==null?void 0:b.usedKey)||f,A=(b==null?void 0:b.exactUsedKey)||f,k=["[object Number]","[object Function]","[object RegExp]"],_=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,R=!this.i18nFormat||this.i18nFormat.handleAsObject,O=i.count!==void 0&&!Ue(i.count),L=s2.hasDefaultValue(i),P=O?this.pluralResolver.getSuffix(x,i.count,i):"",V=i.ordinal&&O?this.pluralResolver.getSuffix(x,i.count,{ordinal:!1}):"",F=O&&!i.ordinal&&i.count===0,G=F&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${P}`]||i[`defaultValue${V}`]||i.defaultValue;let Q=S;R&&!S&&L&&(Q=G);const ne=f6(Q),se=Object.prototype.toString.apply(Q);if(R&&Q&&ne&&k.indexOf(se)<0&&!(Ue(_)&&Array.isArray(Q))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const de=this.options.returnedObjectHandler?this.options.returnedObjectHandler(E,Q,{...i,ns:p}):`key '${f} (${this.language})' returned an object instead of string.`;return o?(b.res=de,b.usedParams=this.getUsedParamsDetails(i),b):de}if(c){const de=Array.isArray(Q),ye=de?[]:{},Ee=de?A:E;for(const Oe in Q)if(Object.prototype.hasOwnProperty.call(Q,Oe)){const Ae=`${Ee}${c}${Oe}`;L&&!S?ye[Oe]=this.translate(Ae,{...i,defaultValue:f6(G)?G[Oe]:void 0,joinArrays:!1,ns:p}):ye[Oe]=this.translate(Ae,{...i,joinArrays:!1,ns:p}),ye[Oe]===Ae&&(ye[Oe]=Q[Oe])}S=ye}}else if(R&&Ue(_)&&Array.isArray(S))S=S.join(_),S&&(S=this.extendTranslation(S,t,i,a));else{let de=!1,ye=!1;!this.isValidLookup(S)&&L&&(de=!0,S=G),this.isValidLookup(S)||(ye=!0,S=f);const Oe=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ye?void 0:S,Ae=L&&G!==S&&this.options.updateMissing;if(ye||de||Ae){if(this.logger.log(Ae?"updateKey":"missingKey",x,h,f,Ae?G:S),c){const xe=this.resolve(f,{...i,keySeparator:!1});xe&&xe.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Z=[];const le=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&le&&le[0])for(let xe=0;xe<le.length;xe++)Z.push(le[xe]);else this.options.saveMissingTo==="all"?Z=this.languageUtils.toResolveHierarchy(i.lng||this.language):Z.push(i.lng||this.language);const ue=(xe,B,re)=>{var be;const we=L&&re!==S?re:Oe;this.options.missingKeyHandler?this.options.missingKeyHandler(xe,h,B,we,Ae,i):(be=this.backendConnector)!=null&&be.saveMissing&&this.backendConnector.saveMissing(xe,h,B,we,Ae,i),this.emit("missingKey",xe,h,B,S)};this.options.saveMissing&&(this.options.saveMissingPlurals&&O?Z.forEach(xe=>{const B=this.pluralResolver.getSuffixes(xe,i);F&&i[`defaultValue${this.options.pluralSeparator}zero`]&&B.indexOf(`${this.options.pluralSeparator}zero`)<0&&B.push(`${this.options.pluralSeparator}zero`),B.forEach(re=>{ue([xe],f+re,i[`defaultValue${re}`]||G)})}):ue(Z,f,G))}S=this.extendTranslation(S,t,i,b,a),ye&&S===f&&this.options.appendNamespaceToMissingKey&&(S=`${h}:${f}`),(ye||de)&&this.options.parseMissingKeyHandler&&(S=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${h}:${f}`:f,de?S:void 0))}return o?(b.res=S,b.usedParams=this.getUsedParamsDetails(i),b):S}extendTranslation(t,i,a,o,c){var x,y;var f=this;if((x=this.i18nFormat)!=null&&x.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...a},a.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init({...a,interpolation:{...this.options.interpolation,...a.interpolation}});const b=Ue(t)&&(((y=a==null?void 0:a.interpolation)==null?void 0:y.skipOnVariables)!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let S;if(b){const A=t.match(this.interpolator.nestingRegexp);S=A&&A.length}let E=a.replace&&!Ue(a.replace)?a.replace:a;if(this.options.interpolation.defaultVariables&&(E={...this.options.interpolation.defaultVariables,...E}),t=this.interpolator.interpolate(t,E,a.lng||this.language||o.usedLng,a),b){const A=t.match(this.interpolator.nestingRegexp),k=A&&A.length;S<k&&(a.nest=!1)}!a.lng&&o&&o.res&&(a.lng=this.language||o.usedLng),a.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var A=arguments.length,k=new Array(A),_=0;_<A;_++)k[_]=arguments[_];return(c==null?void 0:c[0])===k[0]&&!a.context?(f.logger.warn(`It seems you are nesting recursively key: ${k[0]} in key: ${i[0]}`),null):f.translate(...k,i)},a)),a.interpolation&&this.interpolator.reset()}const p=a.postProcess||this.options.postProcess,h=Ue(p)?[p]:p;return t!=null&&(h!=null&&h.length)&&a.applyPostProcessor!==!1&&(t=Wb.handle(h,t,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(a)},...a}:a,this)),t}resolve(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a,o,c,f,p;return Ue(t)&&(t=[t]),t.forEach(h=>{if(this.isValidLookup(a))return;const x=this.extractFromKey(h,i),y=x.key;o=y;let b=x.namespaces;this.options.fallbackNS&&(b=b.concat(this.options.fallbackNS));const S=i.count!==void 0&&!Ue(i.count),E=S&&!i.ordinal&&i.count===0,A=i.context!==void 0&&(Ue(i.context)||typeof i.context=="number")&&i.context!=="",k=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);b.forEach(_=>{var R,O;this.isValidLookup(a)||(p=_,!d6[`${k[0]}-${_}`]&&((R=this.utils)!=null&&R.hasLoadedNamespace)&&!((O=this.utils)!=null&&O.hasLoadedNamespace(p))&&(d6[`${k[0]}-${_}`]=!0,this.logger.warn(`key "${o}" for languages "${k.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),k.forEach(L=>{var F;if(this.isValidLookup(a))return;f=L;const P=[y];if((F=this.i18nFormat)!=null&&F.addLookupKeys)this.i18nFormat.addLookupKeys(P,y,L,_,i);else{let G;S&&(G=this.pluralResolver.getSuffix(L,i.count,i));const Q=`${this.options.pluralSeparator}zero`,ne=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(S&&(P.push(y+G),i.ordinal&&G.indexOf(ne)===0&&P.push(y+G.replace(ne,this.options.pluralSeparator)),E&&P.push(y+Q)),A){const se=`${y}${this.options.contextSeparator}${i.context}`;P.push(se),S&&(P.push(se+G),i.ordinal&&G.indexOf(ne)===0&&P.push(se+G.replace(ne,this.options.pluralSeparator)),E&&P.push(se+Q))}}let V;for(;V=P.pop();)this.isValidLookup(a)||(c=V,a=this.getResource(L,_,V,i))}))})}),{res:a,usedKey:o,exactUsedKey:c,usedLng:f,usedNS:p}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,i,a){var c;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(c=this.i18nFormat)!=null&&c.getResource?this.i18nFormat.getResource(t,i,a,o):this.resourceStore.getResource(t,i,a,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],a=t.replace&&!Ue(t.replace);let o=a?t.replace:t;if(a&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!a){o={...o};for(const c of i)delete o[c]}return o}static hasDefaultValue(t){const i="defaultValue";for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&i===a.substring(0,i.length)&&t[a]!==void 0)return!0;return!1}}class p6{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Lr.create("languageUtils")}getScriptPartFromCode(t){if(t=a2(t),!t||t.indexOf("-")<0)return null;const i=t.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(t){if(t=a2(t),!t||t.indexOf("-")<0)return t;const i=t.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(t){if(Ue(t)&&t.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(t)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let i;return t.forEach(a=>{if(i)return;const o=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(o))&&(i=o)}),!i&&this.options.supportedLngs&&t.forEach(a=>{if(i)return;const o=this.getLanguagePartFromCode(a);if(this.isSupportedCode(o))return i=o;i=this.options.supportedLngs.find(c=>{if(c===o)return c;if(!(c.indexOf("-")<0&&o.indexOf("-")<0)&&(c.indexOf("-")>0&&o.indexOf("-")<0&&c.substring(0,c.indexOf("-"))===o||c.indexOf(o)===0&&o.length>1))return c})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(t,i){if(!t)return[];if(typeof t=="function"&&(t=t(i)),Ue(t)&&(t=[t]),Array.isArray(t))return t;if(!i)return t.default||[];let a=t[i];return a||(a=t[this.getScriptPartFromCode(i)]),a||(a=t[this.formatLanguageCode(i)]),a||(a=t[this.getLanguagePartFromCode(i)]),a||(a=t.default),a||[]}toResolveHierarchy(t,i){const a=this.getFallbackCodes(i||this.options.fallbackLng||[],t),o=[],c=f=>{f&&(this.isSupportedCode(f)?o.push(f):this.logger.warn(`rejecting language code not found in supportedLngs: ${f}`))};return Ue(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&c(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&c(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&c(this.getLanguagePartFromCode(t))):Ue(t)&&c(this.formatLanguageCode(t)),a.forEach(f=>{o.indexOf(f)<0&&c(this.formatLanguageCode(f))}),o}}const h6={zero:0,one:1,two:2,few:3,many:4,other:5},m6={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class TI{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=i,this.logger=Lr.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,i){this.rules[t]=i}clearCache(){this.pluralRulesCache={}}getRule(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=a2(t==="dev"?"en":t),o=i.ordinal?"ordinal":"cardinal",c=JSON.stringify({cleanedCode:a,type:o});if(c in this.pluralRulesCache)return this.pluralRulesCache[c];let f;try{f=new Intl.PluralRules(a,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),m6;if(!t.match(/-|_/))return m6;const h=this.languageUtils.getLanguagePartFromCode(t);f=this.getRule(h,i)}return this.pluralRulesCache[c]=f,f}needsPlural(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,i);return a||(a=this.getRule("dev",i)),(a==null?void 0:a.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,a).map(o=>`${i}${o}`)}getSuffixes(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,i);return a||(a=this.getRule("dev",i)),a?a.resolvedOptions().pluralCategories.sort((o,c)=>h6[o]-h6[c]).map(o=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,a);return o?`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o.select(i)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",i,a))}}const g6=function(e,t,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,c=gI(e,t,i);return!c&&o&&Ue(i)&&(c=F3(e,i,a),c===void 0&&(c=F3(t,i,a))),c},Jx=e=>e.replace(/\$/g,"$$$$");class AI{constructor(){var i;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Lr.create("interpolator"),this.options=t,this.format=((i=t==null?void 0:t.interpolation)==null?void 0:i.format)||(a=>a),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:i,escapeValue:a,useRawValueToEscape:o,prefix:c,prefixEscaped:f,suffix:p,suffixEscaped:h,formatSeparator:x,unescapeSuffix:y,unescapePrefix:b,nestingPrefix:S,nestingPrefixEscaped:E,nestingSuffix:A,nestingSuffixEscaped:k,nestingOptionsSeparator:_,maxReplaces:R,alwaysFormat:O}=t.interpolation;this.escape=i!==void 0?i:vI,this.escapeValue=a!==void 0?a:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=c?Yu(c):f||"{{",this.suffix=p?Yu(p):h||"}}",this.formatSeparator=x||",",this.unescapePrefix=y?"":b||"-",this.unescapeSuffix=this.unescapePrefix?"":y||"",this.nestingPrefix=S?Yu(S):E||Yu("$t("),this.nestingSuffix=A?Yu(A):k||Yu(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=R||1e3,this.alwaysFormat=O!==void 0?O:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(i,a)=>(i==null?void 0:i.source)===a?(i.lastIndex=0,i):new RegExp(a,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,i,a,o){var E;let c,f,p;const h=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},x=A=>{if(A.indexOf(this.formatSeparator)<0){const O=g6(i,h,A,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(O,void 0,a,{...o,...i,interpolationkey:A}):O}const k=A.split(this.formatSeparator),_=k.shift().trim(),R=k.join(this.formatSeparator).trim();return this.format(g6(i,h,_,this.options.keySeparator,this.options.ignoreJSONStructure),R,a,{...o,...i,interpolationkey:_})};this.resetRegExp();const y=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,b=((E=o==null?void 0:o.interpolation)==null?void 0:E.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:A=>Jx(A)},{regex:this.regexp,safeValue:A=>this.escapeValue?Jx(this.escape(A)):Jx(A)}].forEach(A=>{for(p=0;c=A.regex.exec(t);){const k=c[1].trim();if(f=x(k),f===void 0)if(typeof y=="function"){const R=y(t,c,o);f=Ue(R)?R:""}else if(o&&Object.prototype.hasOwnProperty.call(o,k))f="";else if(b){f=c[0];continue}else this.logger.warn(`missed to pass in variable ${k} for interpolating ${t}`),f="";else!Ue(f)&&!this.useRawValueToEscape&&(f=s6(f));const _=A.safeValue(f);if(t=t.replace(c[0],_),b?(A.regex.lastIndex+=f.length,A.regex.lastIndex-=c[0].length):A.regex.lastIndex=0,p++,p>=this.maxReplaces)break}}),t}nest(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,c,f;const p=(h,x)=>{const y=this.nestingOptionsSeparator;if(h.indexOf(y)<0)return h;const b=h.split(new RegExp(`${y}[ ]*{`));let S=`{${b[1]}`;h=b[0],S=this.interpolate(S,f);const E=S.match(/'/g),A=S.match(/"/g);(((E==null?void 0:E.length)??0)%2===0&&!A||A.length%2!==0)&&(S=S.replace(/'/g,'"'));try{f=JSON.parse(S),x&&(f={...x,...f})}catch(k){return this.logger.warn(`failed parsing options string in nesting for key ${h}`,k),`${h}${y}${S}`}return f.defaultValue&&f.defaultValue.indexOf(this.prefix)>-1&&delete f.defaultValue,h};for(;o=this.nestingRegexp.exec(t);){let h=[];f={...a},f=f.replace&&!Ue(f.replace)?f.replace:f,f.applyPostProcessor=!1,delete f.defaultValue;let x=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const y=o[1].split(this.formatSeparator).map(b=>b.trim());o[1]=y.shift(),h=y,x=!0}if(c=i(p.call(this,o[1].trim(),f),f),c&&o[0]===t&&!Ue(c))return c;Ue(c)||(c=s6(c)),c||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),c=""),x&&(c=h.reduce((y,b)=>this.format(y,b,a.lng,{...a,interpolationkey:o[1].trim()}),c.trim())),t=t.replace(o[0],c),this.regexp.lastIndex=0}return t}}const EI=e=>{let t=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const a=e.split("(");t=a[0].toLowerCase().trim();const o=a[1].substring(0,a[1].length-1);t==="currency"&&o.indexOf(":")<0?i.currency||(i.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?i.range||(i.range=o.trim()):o.split(";").forEach(f=>{if(f){const[p,...h]=f.split(":"),x=h.join(":").trim().replace(/^'+|'+$/g,""),y=p.trim();i[y]||(i[y]=x),x==="false"&&(i[y]=!1),x==="true"&&(i[y]=!0),isNaN(x)||(i[y]=parseInt(x,10))}})}return{formatName:t,formatOptions:i}},Fu=e=>{const t={};return(i,a,o)=>{let c=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(c={...c,[o.interpolationkey]:void 0});const f=a+JSON.stringify(c);let p=t[f];return p||(p=e(a2(a),o),t[f]=p),p(i)}};class MI{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Lr.create("formatter"),this.options=t,this.formats={number:Fu((i,a)=>{const o=new Intl.NumberFormat(i,{...a});return c=>o.format(c)}),currency:Fu((i,a)=>{const o=new Intl.NumberFormat(i,{...a,style:"currency"});return c=>o.format(c)}),datetime:Fu((i,a)=>{const o=new Intl.DateTimeFormat(i,{...a});return c=>o.format(c)}),relativetime:Fu((i,a)=>{const o=new Intl.RelativeTimeFormat(i,{...a});return c=>o.format(c,a.range||"day")}),list:Fu((i,a)=>{const o=new Intl.ListFormat(i,{...a});return c=>o.format(c)})},this.init(t)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(t,i){this.formats[t.toLowerCase().trim()]=i}addCached(t,i){this.formats[t.toLowerCase().trim()]=Fu(i)}format(t,i,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const c=i.split(this.formatSeparator);if(c.length>1&&c[0].indexOf("(")>1&&c[0].indexOf(")")<0&&c.find(p=>p.indexOf(")")>-1)){const p=c.findIndex(h=>h.indexOf(")")>-1);c[0]=[c[0],...c.splice(1,p)].join(this.formatSeparator)}return c.reduce((p,h)=>{var b;const{formatName:x,formatOptions:y}=EI(h);if(this.formats[x]){let S=p;try{const E=((b=o==null?void 0:o.formatParams)==null?void 0:b[o.interpolationkey])||{},A=E.locale||E.lng||o.locale||o.lng||a;S=this.formats[x](p,A,{...y,...o,...E})}catch(E){this.logger.warn(E)}return S}else this.logger.warn(`there was no format function for ${x}`);return p},t)}}const jI=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class OI extends z2{constructor(t,i,a){var c,f;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=i,this.services=a,this.languageUtils=a.languageUtils,this.options=o,this.logger=Lr.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(f=(c=this.backend)==null?void 0:c.init)==null||f.call(c,a,o.backend,o)}queueLoad(t,i,a,o){const c={},f={},p={},h={};return t.forEach(x=>{let y=!0;i.forEach(b=>{const S=`${x}|${b}`;!a.reload&&this.store.hasResourceBundle(x,b)?this.state[S]=2:this.state[S]<0||(this.state[S]===1?f[S]===void 0&&(f[S]=!0):(this.state[S]=1,y=!1,f[S]===void 0&&(f[S]=!0),c[S]===void 0&&(c[S]=!0),h[b]===void 0&&(h[b]=!0)))}),y||(p[x]=!0)}),(Object.keys(c).length||Object.keys(f).length)&&this.queue.push({pending:f,pendingCount:Object.keys(f).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(c),pending:Object.keys(f),toLoadLanguages:Object.keys(p),toLoadNamespaces:Object.keys(h)}}loaded(t,i,a){const o=t.split("|"),c=o[0],f=o[1];i&&this.emit("failedLoading",c,f,i),!i&&a&&this.store.addResourceBundle(c,f,a,void 0,void 0,{skipCopy:!0}),this.state[t]=i?-1:2,i&&a&&(this.state[t]=0);const p={};this.queue.forEach(h=>{mI(h.loaded,[c],f),jI(h,t),i&&h.errors.push(i),h.pendingCount===0&&!h.done&&(Object.keys(h.loaded).forEach(x=>{p[x]||(p[x]={});const y=h.loaded[x];y.length&&y.forEach(b=>{p[x][b]===void 0&&(p[x][b]=!0)})}),h.done=!0,h.errors.length?h.callback(h.errors):h.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(h=>!h.done)}read(t,i,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,f=arguments.length>5?arguments[5]:void 0;if(!t.length)return f(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:i,fcName:a,tried:o,wait:c,callback:f});return}this.readingCalls++;const p=(x,y)=>{if(this.readingCalls--,this.waitingReads.length>0){const b=this.waitingReads.shift();this.read(b.lng,b.ns,b.fcName,b.tried,b.wait,b.callback)}if(x&&y&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,i,a,o+1,c*2,f)},c);return}f(x,y)},h=this.backend[a].bind(this.backend);if(h.length===2){try{const x=h(t,i);x&&typeof x.then=="function"?x.then(y=>p(null,y)).catch(p):p(null,x)}catch(x){p(x)}return}return h(t,i,p)}prepareLoading(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();Ue(t)&&(t=this.languageUtils.toResolveHierarchy(t)),Ue(i)&&(i=[i]);const c=this.queueLoad(t,i,a,o);if(!c.toLoad.length)return c.pending.length||o(),null;c.toLoad.forEach(f=>{this.loadOne(f)})}load(t,i,a){this.prepareLoading(t,i,{},a)}reload(t,i,a){this.prepareLoading(t,i,{reload:!0},a)}loadOne(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const a=t.split("|"),o=a[0],c=a[1];this.read(o,c,"read",void 0,void 0,(f,p)=>{f&&this.logger.warn(`${i}loading namespace ${c} for language ${o} failed`,f),!f&&p&&this.logger.log(`${i}loaded namespace ${c} for language ${o}`,p),this.loaded(t,f,p)})}saveMissing(t,i,a,o,c){var h,x,y,b,S;let f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},p=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((x=(h=this.services)==null?void 0:h.utils)!=null&&x.hasLoadedNamespace&&!((b=(y=this.services)==null?void 0:y.utils)!=null&&b.hasLoadedNamespace(i))){this.logger.warn(`did not save key "${a}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if((S=this.backend)!=null&&S.create){const E={...f,isUpdate:c},A=this.backend.create.bind(this.backend);if(A.length<6)try{let k;A.length===5?k=A(t,i,a,o,E):k=A(t,i,a,o),k&&typeof k.then=="function"?k.then(_=>p(null,_)).catch(p):p(null,k)}catch(k){p(k)}else A(t,i,a,o,p,E)}!t||!t[0]||this.store.addResource(t[0],i,a,o)}}}const x6=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),Ue(e[1])&&(t.defaultValue=e[1]),Ue(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const i=e[3]||e[2];Object.keys(i).forEach(a=>{t[a]=i[a]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),v6=e=>{var t,i;return Ue(e.ns)&&(e.ns=[e.ns]),Ue(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Ue(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((i=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:i.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},hm=()=>{},RI=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(i=>{typeof e[i]=="function"&&(e[i]=e[i].bind(e))})};class tp extends z2{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=v6(t),this.services={},this.logger=Lr,this.modules={external:[]},RI(this),i&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,i),this;setTimeout(()=>{this.init(t,i)},0)}}init(){var t=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(a=i,i={}),i.defaultNS==null&&i.ns&&(Ue(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=x6();this.options={...o,...this.options,...v6(i)},this.options.interpolation={...o.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const c=y=>y?typeof y=="function"?new y:y:null;if(!this.options.isClone){this.modules.logger?Lr.init(c(this.modules.logger),this.options):Lr.init(null,this.options);let y;this.modules.formatter?y=this.modules.formatter:y=MI;const b=new p6(this.options);this.store=new u6(this.options.resources,this.options);const S=this.services;S.logger=Lr,S.resourceStore=this.store,S.languageUtils=b,S.pluralResolver=new TI(b,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),y&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(S.formatter=c(y),S.formatter.init(S,this.options),this.options.interpolation.format=S.formatter.format.bind(S.formatter)),S.interpolator=new AI(this.options),S.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},S.backendConnector=new OI(c(this.modules.backend),S.resourceStore,S,this.options),S.backendConnector.on("*",function(E){for(var A=arguments.length,k=new Array(A>1?A-1:0),_=1;_<A;_++)k[_-1]=arguments[_];t.emit(E,...k)}),this.modules.languageDetector&&(S.languageDetector=c(this.modules.languageDetector),S.languageDetector.init&&S.languageDetector.init(S,this.options.detection,this.options)),this.modules.i18nFormat&&(S.i18nFormat=c(this.modules.i18nFormat),S.i18nFormat.init&&S.i18nFormat.init(this)),this.translator=new s2(this.services,this.options),this.translator.on("*",function(E){for(var A=arguments.length,k=new Array(A>1?A-1:0),_=1;_<A;_++)k[_-1]=arguments[_];t.emit(E,...k)}),this.modules.external.forEach(E=>{E.init&&E.init(this)})}if(this.format=this.options.interpolation.format,a||(a=hm),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const y=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);y.length>0&&y[0]!=="dev"&&(this.options.lng=y[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(y=>{this[y]=function(){return t.store[y](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(y=>{this[y]=function(){return t.store[y](...arguments),t}});const h=L0(),x=()=>{const y=(b,S)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),h.resolve(S),a(b,S)};if(this.languages&&!this.isInitialized)return y(null,this.t.bind(this));this.changeLanguage(this.options.lng,y)};return this.options.resources||!this.options.initAsync?x():setTimeout(x,0),h}loadResources(t){var c,f;let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:hm;const o=Ue(t)?t:this.language;if(typeof t=="function"&&(a=t),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return a();const p=[],h=x=>{if(!x||x==="cimode")return;this.services.languageUtils.toResolveHierarchy(x).forEach(b=>{b!=="cimode"&&p.indexOf(b)<0&&p.push(b)})};o?h(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(y=>h(y)),(f=(c=this.options.preload)==null?void 0:c.forEach)==null||f.call(c,x=>h(x)),this.services.backendConnector.load(p,this.options.ns,x=>{!x&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),a(x)})}else a(null)}reloadResources(t,i,a){const o=L0();return typeof t=="function"&&(a=t,t=void 0),typeof i=="function"&&(a=i,i=void 0),t||(t=this.languages),i||(i=this.options.ns),a||(a=hm),this.services.backendConnector.reload(t,i,c=>{o.resolve(),a(c)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Wb.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let i=0;i<this.languages.length;i++){const a=this.languages[i];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}}changeLanguage(t,i){var a=this;this.isLanguageChangingTo=t;const o=L0();this.emit("languageChanging",t);const c=h=>{this.language=h,this.languages=this.services.languageUtils.toResolveHierarchy(h),this.resolvedLanguage=void 0,this.setResolvedLanguage(h)},f=(h,x)=>{x?(c(x),this.translator.changeLanguage(x),this.isLanguageChangingTo=void 0,this.emit("languageChanged",x),this.logger.log("languageChanged",x)):this.isLanguageChangingTo=void 0,o.resolve(function(){return a.t(...arguments)}),i&&i(h,function(){return a.t(...arguments)})},p=h=>{var y,b;!t&&!h&&this.services.languageDetector&&(h=[]);const x=Ue(h)?h:this.services.languageUtils.getBestMatchFromCodes(h);x&&(this.language||c(x),this.translator.language||this.translator.changeLanguage(x),(b=(y=this.services.languageDetector)==null?void 0:y.cacheUserLanguage)==null||b.call(y,x)),this.loadResources(x,S=>{f(S,x)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?p(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(p):this.services.languageDetector.detect(p):p(t),o}getFixedT(t,i,a){var o=this;const c=function(f,p){let h;if(typeof p!="object"){for(var x=arguments.length,y=new Array(x>2?x-2:0),b=2;b<x;b++)y[b-2]=arguments[b];h=o.options.overloadTranslationOptionHandler([f,p].concat(y))}else h={...p};h.lng=h.lng||c.lng,h.lngs=h.lngs||c.lngs,h.ns=h.ns||c.ns,h.keyPrefix!==""&&(h.keyPrefix=h.keyPrefix||a||c.keyPrefix);const S=o.options.keySeparator||".";let E;return h.keyPrefix&&Array.isArray(f)?E=f.map(A=>`${h.keyPrefix}${S}${A}`):E=h.keyPrefix?`${h.keyPrefix}${S}${f}`:f,o.t(E,h)};return Ue(t)?c.lng=t:c.lngs=t,c.ns=i,c.keyPrefix=a,c}t(){var o;for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(o=this.translator)==null?void 0:o.translate(...i)}exists(){var o;for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(o=this.translator)==null?void 0:o.exists(...i)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const a=i.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,c=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const f=(p,h)=>{const x=this.services.backendConnector.state[`${p}|${h}`];return x===-1||x===0||x===2};if(i.precheck){const p=i.precheck(this,f);if(p!==void 0)return p}return!!(this.hasResourceBundle(a,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||f(a,t)&&(!o||f(c,t)))}loadNamespaces(t,i){const a=L0();return this.options.ns?(Ue(t)&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{a.resolve(),i&&i(o)}),a):(i&&i(),Promise.resolve())}loadLanguages(t,i){const a=L0();Ue(t)&&(t=[t]);const o=this.options.preload||[],c=t.filter(f=>o.indexOf(f)<0&&this.services.languageUtils.isSupportedCode(f));return c.length?(this.options.preload=o.concat(c),this.loadResources(f=>{a.resolve(),i&&i(f)}),a):(i&&i(),Promise.resolve())}dir(t){var o,c;if(t||(t=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!t)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=((c=this.services)==null?void 0:c.languageUtils)||new p6(x6());return i.indexOf(a.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new tp(t,i)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:hm;const a=t.forkResourceStore;a&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},c=new tp(o);if((t.debug!==void 0||t.prefix!==void 0)&&(c.logger=c.logger.clone(t)),["store","services","language"].forEach(p=>{c[p]=this[p]}),c.services={...this.services},c.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},a){const p=Object.keys(this.store.data).reduce((h,x)=>(h[x]={...this.store.data[x]},Object.keys(h[x]).reduce((y,b)=>(y[b]={...h[x][b]},y),{})),{});c.store=new u6(p,o),c.services.resourceStore=c.store}return c.translator=new s2(c.services,o),c.translator.on("*",function(p){for(var h=arguments.length,x=new Array(h>1?h-1:0),y=1;y<h;y++)x[y-1]=arguments[y];c.emit(p,...x)}),c.init(o,i),c.translator.options=o,c.translator.backendConnector.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},c}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ii=tp.createInstance();ii.createInstance=tp.createInstance;ii.createInstance;ii.dir;ii.init;ii.loadResources;ii.reloadResources;ii.use;ii.changeLanguage;ii.getFixedT;ii.t;ii.exists;ii.setDefaultNamespace;ii.hasLoadedNamespace;ii.loadNamespaces;ii.loadLanguages;function W3(e){"@babel/helpers - typeof";return W3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W3(e)}function Zb(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":W3(XMLHttpRequest))==="object"}function LI(e){return!!e&&typeof e.then=="function"}function kI(e){return LI(e)?e:Promise.resolve(e)}const DI="modulepreload",zI=function(e){return"/"+e},y6={},HI=function(t,i,a){let o=Promise.resolve();if(i&&i.length>0){let f=function(x){return Promise.all(x.map(y=>Promise.resolve(y).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),h=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));o=f(i.map(x=>{if(x=zI(x),x in y6)return;y6[x]=!0;const y=x.endsWith(".css"),b=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${b}`))return;const S=document.createElement("link");if(S.rel=y?"stylesheet":DI,y||(S.as="script"),S.crossOrigin="",S.href=x,h&&S.setAttribute("nonce",h),document.head.appendChild(S),y)return new Promise((E,A)=>{S.addEventListener("load",E),S.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${x}`)))})}))}function c(f){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=f,window.dispatchEvent(p),!p.defaultPrevented)throw f}return o.then(f=>{for(const p of f||[])p.status==="rejected"&&c(p.reason);return t().catch(c)})};function w6(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,a)}return i}function b6(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?w6(Object(i),!0).forEach(function(a){VI(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):w6(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function VI(e,t,i){return(t=_I(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _I(e){var t=NI(e,"string");return lc(t)=="symbol"?t:t+""}function NI(e,t){if(lc(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t);if(lc(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lc(e){"@babel/helpers - typeof";return lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lc(e)}var Do=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?Do=global.fetch:typeof window<"u"&&window.fetch&&(Do=window.fetch);var np;Zb()&&(typeof global<"u"&&global.XMLHttpRequest?np=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(np=window.XMLHttpRequest));var o2;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?o2=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(o2=window.ActiveXObject));typeof Do!="function"&&(Do=void 0);if(!Do&&!np&&!o2)try{HI(()=>import("./browser-ponyfill-DClY08dK.js").then(e=>e.b),[]).then(function(e){Do=e.default}).catch(function(){})}catch{}var Z3=function(t,i){if(i&&lc(i)==="object"){var a="";for(var o in i)a+="&"+encodeURIComponent(o)+"="+encodeURIComponent(i[o]);if(!a)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+a.slice(1)}return t},S6=function(t,i,a,o){var c=function(h){if(!h.ok)return a(h.statusText||"Error",{status:h.status});h.text().then(function(x){a(null,{status:h.status,data:x})}).catch(a)};if(o){var f=o(t,i);if(f instanceof Promise){f.then(c).catch(a);return}}typeof fetch=="function"?fetch(t,i).then(c).catch(a):Do(t,i).then(c).catch(a)},C6=!1,PI=function(t,i,a,o){t.queryStringParams&&(i=Z3(i,t.queryStringParams));var c=b6({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(c["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),a&&(c["Content-Type"]="application/json");var f=typeof t.requestOptions=="function"?t.requestOptions(a):t.requestOptions,p=b6({method:a?"POST":"GET",body:a?t.stringify(a):void 0,headers:c},C6?{}:f),h=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{S6(i,p,o,h)}catch(x){if(!f||Object.keys(f).length===0||!x.message||x.message.indexOf("not implemented")<0)return o(x);try{Object.keys(f).forEach(function(y){delete p[y]}),S6(i,p,o,h),C6=!0}catch(y){o(y)}}},BI=function(t,i,a,o){a&&lc(a)==="object"&&(a=Z3("",a).slice(1)),t.queryStringParams&&(i=Z3(i,t.queryStringParams));try{var c=np?new np:new o2("MSXML2.XMLHTTP.3.0");c.open(a?"POST":"GET",i,1),t.crossDomain||c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.withCredentials=!!t.withCredentials,a&&c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.overrideMimeType&&c.overrideMimeType("application/json");var f=t.customHeaders;if(f=typeof f=="function"?f():f,f)for(var p in f)c.setRequestHeader(p,f[p]);c.onreadystatechange=function(){c.readyState>3&&o(c.status>=400?c.statusText:null,{status:c.status,data:c.responseText})},c.send(a)}catch(h){console&&console.log(h)}},II=function(t,i,a,o){if(typeof a=="function"&&(o=a,a=void 0),o=o||function(){},Do&&i.indexOf("file:")!==0)return PI(t,i,a,o);if(Zb()||typeof ActiveXObject=="function")return BI(t,i,a,o);o(new Error("No fetch and no xhr implementation found!"))};function md(e){"@babel/helpers - typeof";return md=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},md(e)}function T6(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,a)}return i}function e3(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?T6(Object(i),!0).forEach(function(a){Xb(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):T6(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function UI(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $I(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,Kb(a.key),a)}}function GI(e,t,i){return t&&$I(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xb(e,t,i){return(t=Kb(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Kb(e){var t=qI(e,"string");return md(t)=="symbol"?t:t+""}function qI(e,t){if(md(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t);if(md(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var YI=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(i){return JSON.parse(i)},stringify:JSON.stringify,parsePayload:function(i,a,o){return Xb({},a,o||"")},parseLoadPayload:function(i,a){},request:II,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Qb=function(){function e(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};UI(this,e),this.services=t,this.options=i,this.allOptions=a,this.type="backend",this.init(t,i,a)}return GI(e,[{key:"init",value:function(i){var a=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=i,this.options=e3(e3(e3({},YI()),this.options||{}),o),this.allOptions=c,this.services&&this.options.reloadInterval){var f=setInterval(function(){return a.reload()},this.options.reloadInterval);md(f)==="object"&&typeof f.unref=="function"&&f.unref()}}},{key:"readMulti",value:function(i,a,o){this._readAny(i,i,a,a,o)}},{key:"read",value:function(i,a,o){this._readAny([i],i,[a],a,o)}},{key:"_readAny",value:function(i,a,o,c,f){var p=this,h=this.options.loadPath;typeof this.options.loadPath=="function"&&(h=this.options.loadPath(i,o)),h=kI(h),h.then(function(x){if(!x)return f(null,{});var y=p.services.interpolator.interpolate(x,{lng:i.join("+"),ns:o.join("+")});p.loadUrl(y,f,a,c)})}},{key:"loadUrl",value:function(i,a,o,c){var f=this,p=typeof o=="string"?[o]:o,h=typeof c=="string"?[c]:c,x=this.options.parseLoadPayload(p,h);this.options.request(this.options,i,x,function(y,b){if(b&&(b.status>=500&&b.status<600||!b.status))return a("failed loading "+i+"; status code: "+b.status,!0);if(b&&b.status>=400&&b.status<500)return a("failed loading "+i+"; status code: "+b.status,!1);if(!b&&y&&y.message){var S=y.message.toLowerCase(),E=["failed","fetch","network","load"].find(function(_){return S.indexOf(_)>-1});if(E)return a("failed loading "+i+": "+y.message,!0)}if(y)return a(y,!1);var A,k;try{typeof b.data=="string"?A=f.options.parse(b.data,o,c):A=b.data}catch{k="failed parsing "+i+" to json"}if(k)return a(k,!1);a(null,A)})}},{key:"create",value:function(i,a,o,c,f){var p=this;if(this.options.addPath){typeof i=="string"&&(i=[i]);var h=this.options.parsePayload(a,o,c),x=0,y=[],b=[];i.forEach(function(S){var E=p.options.addPath;typeof p.options.addPath=="function"&&(E=p.options.addPath(S,a));var A=p.services.interpolator.interpolate(E,{lng:S,ns:a});p.options.request(p.options,A,h,function(k,_){x+=1,y.push(k),b.push(_),x===i.length&&typeof f=="function"&&f(y,b)})})}}},{key:"reload",value:function(){var i=this,a=this.services,o=a.backendConnector,c=a.languageUtils,f=a.logger,p=o.language;if(!(p&&p.toLowerCase()==="cimode")){var h=[],x=function(b){var S=c.toResolveHierarchy(b);S.forEach(function(E){h.indexOf(E)<0&&h.push(E)})};x(p),this.allOptions.preload&&this.allOptions.preload.forEach(function(y){return x(y)}),h.forEach(function(y){i.allOptions.ns.forEach(function(b){o.read(y,b,"read",null,null,function(S,E){S&&f.warn("loading namespace ".concat(b," for language ").concat(y," failed"),S),!S&&E&&f.log("loaded namespace ".concat(b," for language ").concat(y),E),o.loaded("".concat(y,"|").concat(b),S,E)})})})}}}])}();Qb.type="backend";const{slice:FI,forEach:WI}=[];function ZI(e){return WI.call(FI.call(arguments,1),t=>{if(t)for(const i in t)e[i]===void 0&&(e[i]=t[i])}),e}function XI(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(i=>i.test(e))}const A6=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,KI=function(e,t){const a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(t);let c=`${e}=${o}`;if(a.maxAge>0){const f=a.maxAge-0;if(Number.isNaN(f))throw new Error("maxAge should be a Number");c+=`; Max-Age=${Math.floor(f)}`}if(a.domain){if(!A6.test(a.domain))throw new TypeError("option domain is invalid");c+=`; Domain=${a.domain}`}if(a.path){if(!A6.test(a.path))throw new TypeError("option path is invalid");c+=`; Path=${a.path}`}if(a.expires){if(typeof a.expires.toUTCString!="function")throw new TypeError("option expires is invalid");c+=`; Expires=${a.expires.toUTCString()}`}if(a.httpOnly&&(c+="; HttpOnly"),a.secure&&(c+="; Secure"),a.sameSite)switch(typeof a.sameSite=="string"?a.sameSite.toLowerCase():a.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a.partitioned&&(c+="; Partitioned"),c},E6={create(e,t,i,a){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};i&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+i*60*1e3)),a&&(o.domain=a),document.cookie=KI(e,t,o)},read(e){const t=`${e}=`,i=document.cookie.split(";");for(let a=0;a<i.length;a++){let o=i[a];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var QI={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return E6.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:i,cookieMinutes:a,cookieDomain:o,cookieOptions:c}=t;i&&typeof document<"u"&&E6.create(i,e,a,o,c)}},JI={name:"querystring",lookup(e){var a;let{lookupQuerystring:t}=e,i;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((a=window.location.hash)==null?void 0:a.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const f=o.substring(1).split("&");for(let p=0;p<f.length;p++){const h=f[p].indexOf("=");h>0&&f[p].substring(0,h)===t&&(i=f[p].substring(h+1))}}return i}},eU={name:"hash",lookup(e){var o;let{lookupHash:t,lookupFromHashIndex:i}=e,a;if(typeof window<"u"){const{hash:c}=window.location;if(c&&c.length>2){const f=c.substring(1);if(t){const p=f.split("&");for(let h=0;h<p.length;h++){const x=p[h].indexOf("=");x>0&&p[h].substring(0,x)===t&&(a=p[h].substring(x+1))}}if(a)return a;if(!a&&i>-1){const p=c.match(/\/([a-zA-Z-]*)/g);return Array.isArray(p)?(o=p[typeof i=="number"?i:0])==null?void 0:o.replace("/",""):void 0}}}return a}};let Wu=null;const M6=()=>{if(Wu!==null)return Wu;try{if(Wu=typeof window<"u"&&window.localStorage!==null,!Wu)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Wu=!1}return Wu};var tU={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&M6())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:i}=t;i&&M6()&&window.localStorage.setItem(i,e)}};let Zu=null;const j6=()=>{if(Zu!==null)return Zu;try{if(Zu=typeof window<"u"&&window.sessionStorage!==null,!Zu)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{Zu=!1}return Zu};var nU={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&j6())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:i}=t;i&&j6()&&window.sessionStorage.setItem(i,e)}},iU={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:i,userLanguage:a,language:o}=navigator;if(i)for(let c=0;c<i.length;c++)t.push(i[c]);a&&t.push(a),o&&t.push(o)}return t.length>0?t:void 0}},aU={name:"htmlTag",lookup(e){let{htmlTag:t}=e,i;const a=t||(typeof document<"u"?document.documentElement:null);return a&&typeof a.getAttribute=="function"&&(i=a.getAttribute("lang")),i}},rU={name:"path",lookup(e){var o;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(i)?(o=i[typeof t=="number"?t:0])==null?void 0:o.replace("/",""):void 0}},sU={name:"subdomain",lookup(e){var o,c;let{lookupFromSubdomainIndex:t}=e;const i=typeof t=="number"?t+1:1,a=typeof window<"u"&&((c=(o=window.location)==null?void 0:o.hostname)==null?void 0:c.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(a)return a[i]}};let Jb=!1;try{document.cookie,Jb=!0}catch{}const e9=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Jb||e9.splice(1,1);const oU=()=>({order:e9,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class t9{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,i)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=ZI(i,this.options||{},oU()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=a,this.addDetector(QI),this.addDetector(JI),this.addDetector(tU),this.addDetector(nU),this.addDetector(iU),this.addDetector(aU),this.addDetector(rU),this.addDetector(sU),this.addDetector(eU)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,i=[];return t.forEach(a=>{if(this.detectors[a]){let o=this.detectors[a].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(i=i.concat(o))}}),i=i.filter(a=>a!=null&&!XI(a)).map(a=>this.options.convertDetectedLanguage(a)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}cacheUserLanguage(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;i&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||i.forEach(a=>{this.detectors[a]&&this.detectors[a].cacheUserLanguage(t,this.options)}))}}t9.type="languageDetector";ii.use(Qb).use(t9).use(uz).init({supportedLngs:["en","ru","es","uk"],fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const lU=N.createContext(void 0),cU=({children:e})=>{const{i18n:t}=Ib(),i=a=>{t.changeLanguage(a).then(()=>{window.location.reload()})};return m.jsx(lU.Provider,{value:{language:t.language,setLanguage:i},children:e})};H9.createRoot(document.getElementById("root")).render(m.jsxs(At.StrictMode,{children:[m.jsx(eT,{styles:sT}),m.jsx(JS,{basename:"/",children:m.jsx(cU,{children:m.jsx(fI,{})})})]}));export{$1 as c,l2 as g};
