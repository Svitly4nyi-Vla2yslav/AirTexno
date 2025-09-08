function b9(e,t){for(var i=0;i<t.length;i++){const a=t[i];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const c=Object.getOwnPropertyDescriptor(a,o);c&&Object.defineProperty(e,o,c.get?c:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var I1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function t2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bg={exports:{}},b0={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By;function S9(){if(By)return b0;By=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:e,type:a,key:f,ref:o!==void 0?o:null,props:c}}return b0.Fragment=t,b0.jsx=i,b0.jsxs=i,b0}var Iy;function C9(){return Iy||(Iy=1,Bg.exports=S9()),Bg.exports}var x=C9(),Ig={exports:{}},S0={},$g={exports:{}},Ug={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $y;function T9(){return $y||($y=1,function(e){function t(X,le){var ue=X.length;X.push(le);e:for(;0<ue;){var xe=ue-1>>>1,B=X[xe];if(0<o(B,le))X[xe]=le,X[ue]=B,ue=xe;else break e}}function i(X){return X.length===0?null:X[0]}function a(X){if(X.length===0)return null;var le=X[0],ue=X.pop();if(ue!==le){X[0]=ue;e:for(var xe=0,B=X.length,re=B>>>1;xe<re;){var we=2*(xe+1)-1,be=X[we],Oe=we+1,Ue=X[Oe];if(0>o(be,ue))Oe<B&&0>o(Ue,be)?(X[xe]=Ue,X[Oe]=ue,xe=Oe):(X[xe]=be,X[we]=ue,xe=we);else if(Oe<B&&0>o(Ue,ue))X[xe]=Ue,X[Oe]=ue,xe=Oe;else break e}}return le}function o(X,le){var ue=X.sortIndex-le.sortIndex;return ue!==0?ue:X.id-le.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();e.unstable_now=function(){return f.now()-h}}var p=[],g=[],y=1,b=null,S=3,T=!1,E=!1,L=!1,P=!1,_=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(X){for(var le=i(g);le!==null;){if(le.callback===null)a(g);else if(le.startTime<=X)a(g),le.sortIndex=le.expirationTime,t(p,le);else break;le=i(g)}}function V(X){if(L=!1,N(X),!E)if(i(p)!==null)E=!0,Y||(Y=!0,ye());else{var le=i(g);le!==null&&Ee(V,le.startTime-X)}}var Y=!1,G=-1,Q=5,ie=-1;function se(){return P?!0:!(e.unstable_now()-ie<Q)}function de(){if(P=!1,Y){var X=e.unstable_now();ie=X;var le=!0;try{e:{E=!1,L&&(L=!1,R(G),G=-1),T=!0;var ue=S;try{t:{for(N(X),b=i(p);b!==null&&!(b.expirationTime>X&&se());){var xe=b.callback;if(typeof xe=="function"){b.callback=null,S=b.priorityLevel;var B=xe(b.expirationTime<=X);if(X=e.unstable_now(),typeof B=="function"){b.callback=B,N(X),le=!0;break t}b===i(p)&&a(p),N(X)}else a(p);b=i(p)}if(b!==null)le=!0;else{var re=i(g);re!==null&&Ee(V,re.startTime-X),le=!1}}break e}finally{b=null,S=ue,T=!1}le=void 0}}finally{le?ye():Y=!1}}}var ye;if(typeof O=="function")ye=function(){O(de)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,Re=Ae.port2;Ae.port1.onmessage=de,ye=function(){Re.postMessage(null)}}else ye=function(){_(de,0)};function Ee(X,le){G=_(function(){X(e.unstable_now())},le)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(X){X.callback=null},e.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<X?Math.floor(1e3/X):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_next=function(X){switch(S){case 1:case 2:case 3:var le=3;break;default:le=S}var ue=S;S=le;try{return X()}finally{S=ue}},e.unstable_requestPaint=function(){P=!0},e.unstable_runWithPriority=function(X,le){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ue=S;S=X;try{return le()}finally{S=ue}},e.unstable_scheduleCallback=function(X,le,ue){var xe=e.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?xe+ue:xe):ue=xe,X){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ue+B,X={id:y++,callback:le,priorityLevel:X,startTime:ue,expirationTime:B,sortIndex:-1},ue>xe?(X.sortIndex=ue,t(g,X),i(p)===null&&X===i(g)&&(L?(R(G),G=-1):L=!0,Ee(V,ue-xe))):(X.sortIndex=B,t(p,X),E||T||(E=!0,Y||(Y=!0,ye()))),X},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(X){var le=S;return function(){var ue=S;S=le;try{return X.apply(this,arguments)}finally{S=ue}}}}(Ug)),Ug}var Uy;function E9(){return Uy||(Uy=1,$g.exports=T9()),$g.exports}var Gg={exports:{}},qe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy;function A9(){if(Gy)return qe;Gy=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function S(B){return B===null||typeof B!="object"?null:(B=b&&B[b]||B["@@iterator"],typeof B=="function"?B:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,L={};function P(B,re,we){this.props=B,this.context=re,this.refs=L,this.updater=we||T}P.prototype.isReactComponent={},P.prototype.setState=function(B,re){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,re,"setState")},P.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function _(){}_.prototype=P.prototype;function R(B,re,we){this.props=B,this.context=re,this.refs=L,this.updater=we||T}var O=R.prototype=new _;O.constructor=R,E(O,P.prototype),O.isPureReactComponent=!0;var N=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},Y=Object.prototype.hasOwnProperty;function G(B,re,we,be,Oe,Ue){return we=Ue.ref,{$$typeof:e,type:B,key:re,ref:we!==void 0?we:null,props:Ue}}function Q(B,re){return G(B.type,re,void 0,void 0,void 0,B.props)}function ie(B){return typeof B=="object"&&B!==null&&B.$$typeof===e}function se(B){var re={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(we){return re[we]})}var de=/\/+/g;function ye(B,re){return typeof B=="object"&&B!==null&&B.key!=null?se(""+B.key):re.toString(36)}function Ae(){}function Re(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(Ae,Ae):(B.status="pending",B.then(function(re){B.status==="pending"&&(B.status="fulfilled",B.value=re)},function(re){B.status==="pending"&&(B.status="rejected",B.reason=re)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function Ee(B,re,we,be,Oe){var Ue=typeof B;(Ue==="undefined"||Ue==="boolean")&&(B=null);var _e=!1;if(B===null)_e=!0;else switch(Ue){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(B.$$typeof){case e:case t:_e=!0;break;case y:return _e=B._init,Ee(_e(B._payload),re,we,be,Oe)}}if(_e)return Oe=Oe(B),_e=be===""?"."+ye(B,0):be,N(Oe)?(we="",_e!=null&&(we=_e.replace(de,"$&/")+"/"),Ee(Oe,re,we,"",function(Yt){return Yt})):Oe!=null&&(ie(Oe)&&(Oe=Q(Oe,we+(Oe.key==null||B&&B.key===Oe.key?"":(""+Oe.key).replace(de,"$&/")+"/")+_e)),re.push(Oe)),1;_e=0;var sn=be===""?".":be+":";if(N(B))for(var it=0;it<B.length;it++)be=B[it],Ue=sn+ye(be,it),_e+=Ee(be,re,we,Ue,Oe);else if(it=S(B),typeof it=="function")for(B=it.call(B),it=0;!(be=B.next()).done;)be=be.value,Ue=sn+ye(be,it++),_e+=Ee(be,re,we,Ue,Oe);else if(Ue==="object"){if(typeof B.then=="function")return Ee(Re(B),re,we,be,Oe);throw re=String(B),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return _e}function X(B,re,we){if(B==null)return B;var be=[],Oe=0;return Ee(B,be,"","",function(Ue){return re.call(we,Ue,Oe++)}),be}function le(B){if(B._status===-1){var re=B._result;re=re(),re.then(function(we){(B._status===0||B._status===-1)&&(B._status=1,B._result=we)},function(we){(B._status===0||B._status===-1)&&(B._status=2,B._result=we)}),B._status===-1&&(B._status=0,B._result=re)}if(B._status===1)return B._result.default;throw B._result}var ue=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function xe(){}return qe.Children={map:X,forEach:function(B,re,we){X(B,function(){re.apply(this,arguments)},we)},count:function(B){var re=0;return X(B,function(){re++}),re},toArray:function(B){return X(B,function(re){return re})||[]},only:function(B){if(!ie(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},qe.Component=P,qe.Fragment=i,qe.Profiler=o,qe.PureComponent=R,qe.StrictMode=a,qe.Suspense=p,qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,qe.__COMPILER_RUNTIME={__proto__:null,c:function(B){return V.H.useMemoCache(B)}},qe.cache=function(B){return function(){return B.apply(null,arguments)}},qe.cloneElement=function(B,re,we){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var be=E({},B.props),Oe=B.key,Ue=void 0;if(re!=null)for(_e in re.ref!==void 0&&(Ue=void 0),re.key!==void 0&&(Oe=""+re.key),re)!Y.call(re,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&re.ref===void 0||(be[_e]=re[_e]);var _e=arguments.length-2;if(_e===1)be.children=we;else if(1<_e){for(var sn=Array(_e),it=0;it<_e;it++)sn[it]=arguments[it+2];be.children=sn}return G(B.type,Oe,void 0,void 0,Ue,be)},qe.createContext=function(B){return B={$$typeof:f,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},qe.createElement=function(B,re,we){var be,Oe={},Ue=null;if(re!=null)for(be in re.key!==void 0&&(Ue=""+re.key),re)Y.call(re,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Oe[be]=re[be]);var _e=arguments.length-2;if(_e===1)Oe.children=we;else if(1<_e){for(var sn=Array(_e),it=0;it<_e;it++)sn[it]=arguments[it+2];Oe.children=sn}if(B&&B.defaultProps)for(be in _e=B.defaultProps,_e)Oe[be]===void 0&&(Oe[be]=_e[be]);return G(B,Ue,void 0,void 0,null,Oe)},qe.createRef=function(){return{current:null}},qe.forwardRef=function(B){return{$$typeof:h,render:B}},qe.isValidElement=ie,qe.lazy=function(B){return{$$typeof:y,_payload:{_status:-1,_result:B},_init:le}},qe.memo=function(B,re){return{$$typeof:g,type:B,compare:re===void 0?null:re}},qe.startTransition=function(B){var re=V.T,we={};V.T=we;try{var be=B(),Oe=V.S;Oe!==null&&Oe(we,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(xe,ue)}catch(Ue){ue(Ue)}finally{V.T=re}},qe.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},qe.use=function(B){return V.H.use(B)},qe.useActionState=function(B,re,we){return V.H.useActionState(B,re,we)},qe.useCallback=function(B,re){return V.H.useCallback(B,re)},qe.useContext=function(B){return V.H.useContext(B)},qe.useDebugValue=function(){},qe.useDeferredValue=function(B,re){return V.H.useDeferredValue(B,re)},qe.useEffect=function(B,re,we){var be=V.H;if(typeof we=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return be.useEffect(B,re)},qe.useId=function(){return V.H.useId()},qe.useImperativeHandle=function(B,re,we){return V.H.useImperativeHandle(B,re,we)},qe.useInsertionEffect=function(B,re){return V.H.useInsertionEffect(B,re)},qe.useLayoutEffect=function(B,re){return V.H.useLayoutEffect(B,re)},qe.useMemo=function(B,re){return V.H.useMemo(B,re)},qe.useOptimistic=function(B,re){return V.H.useOptimistic(B,re)},qe.useReducer=function(B,re,we){return V.H.useReducer(B,re,we)},qe.useRef=function(B){return V.H.useRef(B)},qe.useState=function(B){return V.H.useState(B)},qe.useSyncExternalStore=function(B,re,we){return V.H.useSyncExternalStore(B,re,we)},qe.useTransition=function(){return V.H.useTransition()},qe.version="19.1.1",qe}var Fy;function J3(){return Fy||(Fy=1,Gg.exports=A9()),Gg.exports}var Fg={exports:{}},Jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy;function M9(){if(qy)return Jn;qy=1;var e=J3();function t(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:p,containerInfo:g,implementation:y}}var f=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Jn.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return c(p,g,null,y)},Jn.flushSync=function(p){var g=f.T,y=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=g,a.p=y,a.d.f()}},Jn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},Jn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Jn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,b=h(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,T=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:T}):y==="script"&&a.d.X(p,{crossOrigin:b,integrity:S,fetchPriority:T,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Jn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=h(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},Jn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=h(y,g.crossOrigin);a.d.L(p,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Jn.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=h(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},Jn.requestFormReset=function(p){a.d.r(p)},Jn.unstable_batchedUpdates=function(p,g){return p(g)},Jn.useFormState=function(p,g,y){return f.H.useFormState(p,g,y)},Jn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Jn.version="19.1.1",Jn}var Yy;function j9(){if(Yy)return Fg.exports;Yy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Fg.exports=M9(),Fg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy;function R9(){if(Wy)return S0;Wy=1;var e=E9(),t=J3(),i=j9();function a(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var r=n,s=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(s=r.return),n=r.return;while(n)}return r.tag===3?s:null}function f(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function h(n){if(c(n)!==n)throw Error(a(188))}function p(n){var r=n.alternate;if(!r){if(r=c(n),r===null)throw Error(a(188));return r!==n?null:n}for(var s=n,d=r;;){var m=s.return;if(m===null)break;var w=m.alternate;if(w===null){if(d=m.return,d!==null){s=d;continue}break}if(m.child===w.child){for(w=m.child;w;){if(w===s)return h(m),n;if(w===d)return h(m),r;w=w.sibling}throw Error(a(188))}if(s.return!==d.return)s=m,d=w;else{for(var A=!1,D=m.child;D;){if(D===s){A=!0,s=m,d=w;break}if(D===d){A=!0,d=m,s=w;break}D=D.sibling}if(!A){for(D=w.child;D;){if(D===s){A=!0,s=w,d=m;break}if(D===d){A=!0,d=w,s=m;break}D=D.sibling}if(!A)throw Error(a(189))}}if(s.alternate!==d)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),R=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function ye(n){return n===null||typeof n!="object"?null:(n=de&&n[de]||n["@@iterator"],typeof n=="function"?n:null)}var Ae=Symbol.for("react.client.reference");function Re(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Ae?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case P:return"Profiler";case L:return"StrictMode";case V:return"Suspense";case Y:return"SuspenseList";case ie:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case T:return"Portal";case O:return(n.displayName||"Context")+".Provider";case R:return(n._context.displayName||"Context")+".Consumer";case N:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return r=n.displayName||null,r!==null?r:Re(n.type)||"Memo";case Q:r=n._payload,n=n._init;try{return Re(n(r))}catch{}}return null}var Ee=Array.isArray,X=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},xe=[],B=-1;function re(n){return{current:n}}function we(n){0>B||(n.current=xe[B],xe[B]=null,B--)}function be(n,r){B++,xe[B]=n.current,n.current=r}var Oe=re(null),Ue=re(null),_e=re(null),sn=re(null);function it(n,r){switch(be(_e,r),be(Ue,n),be(Oe,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?Ht(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=Ht(r),n=Pt(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}we(Oe),be(Oe,n)}function Yt(){we(Oe),we(Ue),we(_e)}function Pr(n){n.memoizedState!==null&&be(sn,n);var r=Oe.current,s=Pt(r,n.type);r!==s&&(be(Ue,n),be(Oe,s))}function bi(n){Ue.current===n&&(we(Oe),we(Ue)),sn.current===n&&(we(sn),wo._currentValue=ue)}var Mn=Object.prototype.hasOwnProperty,cc=e.unstable_scheduleCallback,ai=e.unstable_cancelCallback,Do=e.unstable_shouldYield,j2=e.unstable_requestPaint,on=e.unstable_now,hh=e.unstable_getCurrentPriorityLevel,ph=e.unstable_ImmediatePriority,ys=e.unstable_UserBlockingPriority,Pn=e.unstable_NormalPriority,Vo=e.unstable_LowPriority,zo=e.unstable_IdlePriority,R2=e.log,Ho=e.unstable_setDisableYieldValue,Po=null,xn=null;function ri(n){if(typeof R2=="function"&&Ho(n),xn&&typeof xn.setStrictMode=="function")try{xn.setStrictMode(Po,n)}catch{}}var jn=Math.clz32?Math.clz32:Ed,Cd=Math.log,Td=Math.LN2;function Ed(n){return n>>>=0,n===0?32:31-(Cd(n)/Td|0)|0}var ws=256,bs=4194304;function Sa(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ss(n,r,s){var d=n.pendingLanes;if(d===0)return 0;var m=0,w=n.suspendedLanes,A=n.pingedLanes;n=n.warmLanes;var D=d&134217727;return D!==0?(d=D&~w,d!==0?m=Sa(d):(A&=D,A!==0?m=Sa(A):s||(s=D&~n,s!==0&&(m=Sa(s))))):(D=d&~w,D!==0?m=Sa(D):A!==0?m=Sa(A):s||(s=d&~n,s!==0&&(m=Sa(s)))),m===0?0:r!==0&&r!==m&&(r&w)===0&&(w=m&-m,s=r&-r,w>=s||w===32&&(s&4194048)!==0)?r:m}function Nr(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function O2(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mh(){var n=ws;return ws<<=1,(ws&4194048)===0&&(ws=256),n}function gh(){var n=bs;return bs<<=1,(bs&62914560)===0&&(bs=4194304),n}function uc(n){for(var r=[],s=0;31>s;s++)r.push(n);return r}function Cs(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function L2(n,r,s,d,m,w){var A=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var D=n.entanglements,$=n.expirationTimes,ee=n.hiddenUpdates;for(s=A&~s;0<s;){var ce=31-jn(s),pe=1<<ce;D[ce]=0,$[ce]=-1;var ne=ee[ce];if(ne!==null)for(ee[ce]=null,ce=0;ce<ne.length;ce++){var te=ne[ce];te!==null&&(te.lane&=-536870913)}s&=~pe}d!==0&&xh(n,d,0),w!==0&&m===0&&n.tag!==0&&(n.suspendedLanes|=w&~(A&~r))}function xh(n,r,s){n.pendingLanes|=r,n.suspendedLanes&=~r;var d=31-jn(r);n.entangledLanes|=r,n.entanglements[d]=n.entanglements[d]|1073741824|s&4194090}function vh(n,r){var s=n.entangledLanes|=r;for(n=n.entanglements;s;){var d=31-jn(s),m=1<<d;m&r|n[d]&r&&(n[d]|=r),s&=~m}}function Ad(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function dc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function yh(){var n=le.p;return n!==0?n:(n=window.event,n===void 0?32:V1(n.type))}function _2(n,r){var s=le.p;try{return le.p=n,r()}finally{le.p=s}}var Za=Math.random().toString(36).slice(2),ln="__reactFiber$"+Za,Nn="__reactProps$"+Za,Xa="__reactContainer$"+Za,Md="__reactEvents$"+Za,k2="__reactListeners$"+Za,D2="__reactHandles$"+Za,wh="__reactResources$"+Za,No="__reactMarker$"+Za;function jd(n){delete n[ln],delete n[Nn],delete n[Md],delete n[k2],delete n[D2]}function Ts(n){var r=n[ln];if(r)return r;for(var s=n.parentNode;s;){if(r=s[Xa]||s[ln]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(n=C1(n);n!==null;){if(s=n[ln])return s;n=C1(n)}return r}n=s,s=n.parentNode}return null}function Es(n){if(n=n[ln]||n[Xa]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function As(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(a(33))}function Ms(n){var r=n[wh];return r||(r=n[wh]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function cn(n){n[No]=!0}var bh=new Set,Sh={};function Br(n,r){js(n,r),js(n+"Capture",r)}function js(n,r){for(Sh[n]=r,n=0;n<r.length;n++)bh.add(r[n])}var fc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ch={},Bo={};function V2(n){return Mn.call(Bo,n)?!0:Mn.call(Ch,n)?!1:fc.test(n)?Bo[n]=!0:(Ch[n]=!0,!1)}function hc(n,r,s){if(V2(r))if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var d=r.toLowerCase().slice(0,5);if(d!=="data-"&&d!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+s)}}function pc(n,r,s){if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+s)}}function aa(n,r,s,d){if(d===null)n.removeAttribute(s);else{switch(typeof d){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(r,s,""+d)}}var mc,Rd;function Rs(n){if(mc===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);mc=r&&r[1]||"",Rd=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mc+n+Rd}var Od=!1;function Ld(n,r){if(!n||Od)return"";Od=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var d={DetermineComponentFrameRoot:function(){try{if(r){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(te){var ne=te}Reflect.construct(n,[],pe)}else{try{pe.call()}catch(te){ne=te}n.call(pe.prototype)}}else{try{throw Error()}catch(te){ne=te}(pe=n())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(te){if(te&&ne&&typeof te.stack=="string")return[te.stack,ne.stack]}return[null,null]}};d.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var m=Object.getOwnPropertyDescriptor(d.DetermineComponentFrameRoot,"name");m&&m.configurable&&Object.defineProperty(d.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var w=d.DetermineComponentFrameRoot(),A=w[0],D=w[1];if(A&&D){var $=A.split(`
`),ee=D.split(`
`);for(m=d=0;d<$.length&&!$[d].includes("DetermineComponentFrameRoot");)d++;for(;m<ee.length&&!ee[m].includes("DetermineComponentFrameRoot");)m++;if(d===$.length||m===ee.length)for(d=$.length-1,m=ee.length-1;1<=d&&0<=m&&$[d]!==ee[m];)m--;for(;1<=d&&0<=m;d--,m--)if($[d]!==ee[m]){if(d!==1||m!==1)do if(d--,m--,0>m||$[d]!==ee[m]){var ce=`
`+$[d].replace(" at new "," at ");return n.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",n.displayName)),ce}while(1<=d&&0<=m);break}}}finally{Od=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Rs(s):""}function z2(n){switch(n.tag){case 26:case 27:case 5:return Rs(n.type);case 16:return Rs("Lazy");case 13:return Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 15:return Ld(n.type,!1);case 11:return Ld(n.type.render,!1);case 1:return Ld(n.type,!0);case 31:return Rs("Activity");default:return""}}function _d(n){try{var r="";do r+=z2(n),n=n.return;while(n);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function si(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function kd(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Dd(n){var r=kd(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var m=s.get,w=s.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(A){d=""+A,w.call(this,A)}}),Object.defineProperty(n,r,{enumerable:s.enumerable}),{getValue:function(){return d},setValue:function(A){d=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function gc(n){n._valueTracker||(n._valueTracker=Dd(n))}function Vd(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var s=r.getValue(),d="";return n&&(d=kd(n)?n.checked?"true":"false":n.value),n=d,n!==s?(r.setValue(n),!0):!1}function Ir(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Th=/[\n"\\]/g;function Si(n){return n.replace(Th,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function xc(n,r,s,d,m,w,A,D){n.name="",A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.type=A:n.removeAttribute("type"),r!=null?A==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+si(r)):n.value!==""+si(r)&&(n.value=""+si(r)):A!=="submit"&&A!=="reset"||n.removeAttribute("value"),r!=null?Io(n,A,si(r)):s!=null?Io(n,A,si(s)):d!=null&&n.removeAttribute("value"),m==null&&w!=null&&(n.defaultChecked=!!w),m!=null&&(n.checked=m&&typeof m!="function"&&typeof m!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?n.name=""+si(D):n.removeAttribute("name")}function zd(n,r,s,d,m,w,A,D){if(w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(n.type=w),r!=null||s!=null){if(!(w!=="submit"&&w!=="reset"||r!=null))return;s=s!=null?""+si(s):"",r=r!=null?""+si(r):s,D||r===n.value||(n.value=r),n.defaultValue=r}d=d??m,d=typeof d!="function"&&typeof d!="symbol"&&!!d,n.checked=D?n.checked:!!d,n.defaultChecked=!!d,A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"&&(n.name=A)}function Io(n,r,s){r==="number"&&Ir(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Os(n,r,s,d){if(n=n.options,r){r={};for(var m=0;m<s.length;m++)r["$"+s[m]]=!0;for(s=0;s<n.length;s++)m=r.hasOwnProperty("$"+n[s].value),n[s].selected!==m&&(n[s].selected=m),m&&d&&(n[s].defaultSelected=!0)}else{for(s=""+si(s),r=null,m=0;m<n.length;m++){if(n[m].value===s){n[m].selected=!0,d&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function Hd(n,r,s){if(r!=null&&(r=""+si(r),r!==n.value&&(n.value=r),s==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=s!=null?""+si(s):""}function vc(n,r,s,d){if(r==null){if(d!=null){if(s!=null)throw Error(a(92));if(Ee(d)){if(1<d.length)throw Error(a(93));d=d[0]}s=d}s==null&&(s=""),r=s}s=si(r),n.defaultValue=s,d=n.textContent,d===s&&d!==""&&d!==null&&(n.value=d)}function Ka(n,r){if(r){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=r;return}}n.textContent=r}var Ls=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pd(n,r,s){var d=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?d?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":d?n.setProperty(r,s):typeof s!="number"||s===0||Ls.has(r)?r==="float"?n.cssFloat=s:n[r]=(""+s).trim():n[r]=s+"px"}function Nd(n,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(n=n.style,s!=null){for(var d in s)!s.hasOwnProperty(d)||r!=null&&r.hasOwnProperty(d)||(d.indexOf("--")===0?n.setProperty(d,""):d==="float"?n.cssFloat="":n[d]="");for(var m in r)d=r[m],r.hasOwnProperty(m)&&s[m]!==d&&Pd(n,m,d)}else for(var w in r)r.hasOwnProperty(w)&&Pd(n,w,r[w])}function Bd(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ah=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(n){return Ah.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var yc=null;function Id(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _s=null,ks=null;function $d(n){var r=Es(n);if(r&&(n=r.stateNode)){var s=n[Nn]||null;e:switch(n=r.stateNode,r.type){case"input":if(xc(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Si(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var d=s[r];if(d!==n&&d.form===n.form){var m=d[Nn]||null;if(!m)throw Error(a(90));xc(d,m.value,m.defaultValue,m.defaultValue,m.checked,m.defaultChecked,m.type,m.name)}}for(r=0;r<s.length;r++)d=s[r],d.form===n.form&&Vd(d)}break e;case"textarea":Hd(n,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&Os(n,!!s.multiple,r,!1)}}}var Ud=!1;function Mh(n,r,s){if(Ud)return n(r,s);Ud=!0;try{var d=n(r);return d}finally{if(Ud=!1,(_s!==null||ks!==null)&&(yu(),_s&&(r=_s,n=ks,ks=_s=null,$d(r),n)))for(r=0;r<n.length;r++)$d(n[r])}}function Uo(n,r){var s=n.stateNode;if(s===null)return null;var d=s[Nn]||null;if(d===null)return null;s=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var Ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=!1;if(Ca)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){Go=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{Go=!1}var Qa=null,Gd=null,wc=null;function jh(){if(wc)return wc;var n,r=Gd,s=r.length,d,m="value"in Qa?Qa.value:Qa.textContent,w=m.length;for(n=0;n<s&&r[n]===m[n];n++);var A=s-n;for(d=1;d<=A&&r[s-d]===m[w-d];d++);return wc=m.slice(n,1<d?1-d:void 0)}function wt(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ht(){return!0}function Rh(){return!1}function Bn(n){function r(s,d,m,w,A){this._reactName=s,this._targetInst=m,this.type=d,this.nativeEvent=w,this.target=A,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(s=n[D],this[D]=s?s(w):w[D]);return this.isDefaultPrevented=(w.defaultPrevented!=null?w.defaultPrevented:w.returnValue===!1)?ht:Rh,this.isPropagationStopped=Rh,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ht)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ht)},persist:function(){},isPersistent:ht}),r}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bc=Bn($r),qo=y({},$r,{view:0,detail:0}),H2=Bn(qo),Sc,Fd,Ft,Ds=y({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ft&&(Ft&&n.type==="mousemove"?(Sc=n.screenX-Ft.screenX,Fd=n.screenY-Ft.screenY):Fd=Sc=0,Ft=n),Sc)},movementY:function(n){return"movementY"in n?n.movementY:Fd}}),Ja=Bn(Ds),Oh=y({},Ds,{dataTransfer:0}),qd=Bn(Oh),Ci=y({},qo,{relatedTarget:0}),Cc=Bn(Ci),Lh=y({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),_h=Bn(Lh),kh=y({},$r,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Dh=Bn(kh),Vh=y({},$r,{data:0}),In=Bn(Vh),P2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ti={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zh(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=N2[n])?!!r[n]:!1}function ra(){return zh}var Tc=y({},qo,{key:function(n){if(n.key){var r=P2[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=wt(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ti[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(n){return n.type==="keypress"?wt(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wt(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Yd=Bn(Tc),kt=y({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ta=Bn(kt),Wd=y({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),B2=Bn(Wd),Zd=y({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),I2=Bn(Zd),$2=y({},Ds,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),U2=Bn($2),Hh=y({},$r,{newState:0,oldState:0}),Ec=Bn(Hh),Vs=[9,13,27,32],Xd=Ca&&"CompositionEvent"in window,zs=null;Ca&&"documentMode"in document&&(zs=document.documentMode);var Ph=Ca&&"TextEvent"in window&&!zs,Ac=Ca&&(!Xd||zs&&8<zs&&11>=zs),Mc=" ",Kd=!1;function Nh(n,r){switch(n){case"keyup":return Vs.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var er=!1;function G2(n,r){switch(n){case"compositionend":return jc(r);case"keypress":return r.which!==32?null:(Kd=!0,Mc);case"textInput":return n=r.data,n===Mc&&Kd?null:n;default:return null}}function Bh(n,r){if(er)return n==="compositionend"||!Xd&&Nh(n,r)?(n=jh(),wc=Gd=Qa=null,er=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ac&&r.locale!=="ko"?null:r.data;default:return null}}var oi={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!oi[n.type]:r==="textarea"}function Hs(n,r,s,d){_s?ks?ks.push(d):ks=[d]:_s=d,r=Au(r,"onChange"),0<r.length&&(s=new bc("onChange","change",null,s,d),n.push({event:s,listeners:r}))}var Ps=null,Ns=null;function F2(n){m1(n,0)}function Oc(n){var r=As(n);if(Vd(r))return n}function Ih(n,r){if(n==="change")return r}var $h=!1;if(Ca){var Qd;if(Ca){var tr="oninput"in document;if(!tr){var Uh=document.createElement("div");Uh.setAttribute("oninput","return;"),tr=typeof Uh.oninput=="function"}Qd=tr}else Qd=!1;$h=Qd&&(!document.documentMode||9<document.documentMode)}function Gh(){Ps&&(Ps.detachEvent("onpropertychange",Lc),Ns=Ps=null)}function Lc(n){if(n.propertyName==="value"&&Oc(Ns)){var r=[];Hs(r,Ns,n,Id(n)),Mh(F2,r)}}function Fh(n,r,s){n==="focusin"?(Gh(),Ps=r,Ns=s,Ps.attachEvent("onpropertychange",Lc)):n==="focusout"&&Gh()}function nr(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oc(Ns)}function _c(n,r){if(n==="click")return Oc(r)}function q2(n,r){if(n==="input"||n==="change")return Oc(r)}function Y2(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var li=typeof Object.is=="function"?Object.is:Y2;function sa(n,r){if(li(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var s=Object.keys(n),d=Object.keys(r);if(s.length!==d.length)return!1;for(d=0;d<s.length;d++){var m=s[d];if(!Mn.call(r,m)||!li(n[m],r[m]))return!1}return!0}function Ei(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jd(n,r){var s=Ei(n);n=0;for(var d;s;){if(s.nodeType===3){if(d=n+s.textContent.length,n<=r&&d>=r)return{node:s,offset:r-n};n=d}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Ei(s)}}function qh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?qh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Yh(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Ir(n.document);r instanceof n.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)n=r.contentWindow;else break;r=Ir(n.document)}return r}function ef(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var W2=Ca&&"documentMode"in document&&11>=document.documentMode,Bs=null,ir=null,q=null,oe=!1;function ae(n,r,s){var d=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;oe||Bs==null||Bs!==Ir(d)||(d=Bs,"selectionStart"in d&&ef(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),q&&sa(q,d)||(q=d,d=Au(ir,"onSelect"),0<d.length&&(r=new bc("onSelect","select",null,r,s),n.push({event:r,listeners:d}),r.target=Bs)))}function Se(n,r){var s={};return s[n.toLowerCase()]=r.toLowerCase(),s["Webkit"+n]="webkit"+r,s["Moz"+n]="moz"+r,s}var ze={animationend:Se("Animation","AnimationEnd"),animationiteration:Se("Animation","AnimationIteration"),animationstart:Se("Animation","AnimationStart"),transitionrun:Se("Transition","TransitionRun"),transitionstart:Se("Transition","TransitionStart"),transitioncancel:Se("Transition","TransitionCancel"),transitionend:Se("Transition","TransitionEnd")},rt={},Wt={};Ca&&(Wt=document.createElement("div").style,"AnimationEvent"in window||(delete ze.animationend.animation,delete ze.animationiteration.animation,delete ze.animationstart.animation),"TransitionEvent"in window||delete ze.transitionend.transition);function st(n){if(rt[n])return rt[n];if(!ze[n])return n;var r=ze[n],s;for(s in r)if(r.hasOwnProperty(s)&&s in Wt)return rt[n]=r[s];return n}var kc=st("animationend"),Wh=st("animationiteration"),ci=st("animationstart"),Dc=st("transitionrun"),Z2=st("transitionstart"),Is=st("transitioncancel"),Yo=st("transitionend"),Wo=new Map,ut="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ut.push("scrollEnd");function Ui(n,r){Wo.set(n,r),Br(r,[n])}var tf=new WeakMap;function Rn(n,r){if(typeof n=="object"&&n!==null){var s=tf.get(n);return s!==void 0?s:(r={value:n,source:r,stack:_d(r)},tf.set(n,r),r)}return{value:n,source:r,stack:_d(r)}}var Ai=[],$s=0,nf=0;function Ur(){for(var n=$s,r=nf=$s=0;r<n;){var s=Ai[r];Ai[r++]=null;var d=Ai[r];Ai[r++]=null;var m=Ai[r];Ai[r++]=null;var w=Ai[r];if(Ai[r++]=null,d!==null&&m!==null){var A=d.pending;A===null?m.next=m:(m.next=A.next,A.next=m),d.pending=m}w!==0&&Zo(s,m,w)}}function Gi(n,r,s,d){Ai[$s++]=n,Ai[$s++]=r,Ai[$s++]=s,Ai[$s++]=d,nf|=d,n.lanes|=d,n=n.alternate,n!==null&&(n.lanes|=d)}function Us(n,r,s,d){return Gi(n,r,s,d),Xo(n)}function Gr(n,r){return Gi(n,null,null,r),Xo(n)}function Zo(n,r,s){n.lanes|=s;var d=n.alternate;d!==null&&(d.lanes|=s);for(var m=!1,w=n.return;w!==null;)w.childLanes|=s,d=w.alternate,d!==null&&(d.childLanes|=s),w.tag===22&&(n=w.stateNode,n===null||n._visibility&1||(m=!0)),n=w,w=w.return;return n.tag===3?(w=n.stateNode,m&&r!==null&&(m=31-jn(s),n=w.hiddenUpdates,d=n[m],d===null?n[m]=[r]:d.push(r),r.lane=s|536870912),w):null}function Xo(n){if(50<fo)throw fo=0,Kf=null,Error(a(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Fr={};function Vc(n,r,s,d){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,r,s,d){return new Vc(n,r,s,d)}function qr(n){return n=n.prototype,!(!n||!n.isReactComponent)}function On(n,r){var s=n.alternate;return s===null?(s=$n(n.tag,r,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=r,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,r=n.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function Ko(n,r){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,r=s.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function zc(n,r,s,d,m,w){var A=0;if(d=n,typeof n=="function")qr(n)&&(A=1);else if(typeof n=="string")A=Ag(n,s,Oe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case ie:return n=$n(31,s,r,m),n.elementType=ie,n.lanes=w,n;case E:return Yr(s.children,m,w,r);case L:A=8,m|=24;break;case P:return n=$n(12,s,r,m|2),n.elementType=P,n.lanes=w,n;case V:return n=$n(13,s,r,m),n.elementType=V,n.lanes=w,n;case Y:return n=$n(19,s,r,m),n.elementType=Y,n.lanes=w,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case _:case O:A=10;break e;case R:A=9;break e;case N:A=11;break e;case G:A=14;break e;case Q:A=16,d=null;break e}A=29,s=Error(a(130,n===null?"null":typeof n,"")),d=null}return r=$n(A,s,r,m),r.elementType=n,r.type=d,r.lanes=w,r}function Yr(n,r,s,d){return n=$n(7,n,d,r),n.lanes=s,n}function af(n,r,s){return n=$n(6,n,null,r),n.lanes=s,n}function Gs(n,r,s){return r=$n(4,n.children!==null?n.children:[],n.key,r),r.lanes=s,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Ea=[],ar=0,Hc=null,Qo=0,Mi=[],ji=0,Lt=null,Dt=1,Aa="";function Wr(n,r){Ea[ar++]=Qo,Ea[ar++]=Hc,Hc=n,Qo=r}function rf(n,r,s){Mi[ji++]=Dt,Mi[ji++]=Aa,Mi[ji++]=Lt,Lt=n;var d=Dt;n=Aa;var m=32-jn(d)-1;d&=~(1<<m),s+=1;var w=32-jn(r)+m;if(30<w){var A=m-m%5;w=(d&(1<<A)-1).toString(32),d>>=A,m-=A,Dt=1<<32-jn(r)+m|s<<m|d,Aa=w+n}else Dt=1<<w|s<<m|d,Aa=n}function sf(n){n.return!==null&&(Wr(n,1),rf(n,1,0))}function Jo(n){for(;n===Hc;)Hc=Ea[--ar],Ea[ar]=null,Qo=Ea[--ar],Ea[ar]=null;for(;n===Lt;)Lt=Mi[--ji],Mi[ji]=null,Aa=Mi[--ji],Mi[ji]=null,Dt=Mi[--ji],Mi[ji]=null}var Kt=null,Vt=null,Je=!1,Fi=null,Un=!1,Fs=Error(a(519));function Ri(n){var r=Error(a(418,""));throw rr(Rn(r,n)),Fs}function Zh(n){var r=n.stateNode,s=n.type,d=n.memoizedProps;switch(r[ln]=n,r[Nn]=d,s){case"dialog":Qe("cancel",r),Qe("close",r);break;case"iframe":case"object":case"embed":Qe("load",r);break;case"video":case"audio":for(s=0;s<Il.length;s++)Qe(Il[s],r);break;case"source":Qe("error",r);break;case"img":case"image":case"link":Qe("error",r),Qe("load",r);break;case"details":Qe("toggle",r);break;case"input":Qe("invalid",r),zd(r,d.value,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name,!0),gc(r);break;case"select":Qe("invalid",r);break;case"textarea":Qe("invalid",r),vc(r,d.value,d.defaultValue,d.children),gc(r)}s=d.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||d.suppressHydrationWarning===!0||v1(r.textContent,s)?(d.popover!=null&&(Qe("beforetoggle",r),Qe("toggle",r)),d.onScroll!=null&&Qe("scroll",r),d.onScrollEnd!=null&&Qe("scrollend",r),d.onClick!=null&&(r.onclick=Mu),r=!0):r=!1,r||Ri(n)}function Xh(n){for(Kt=n.return;Kt;)switch(Kt.tag){case 5:case 13:Un=!1;return;case 27:case 3:Un=!0;return;default:Kt=Kt.return}}function el(n){if(n!==Kt)return!1;if(!Je)return Xh(n),Je=!0,!1;var r=n.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Ru(n.type,n.memoizedProps)),s=!s),s&&Vt&&Ri(n),Xh(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(r===0){Vt=Ki(n.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;n=n.nextSibling}Vt=null}}else r===27?(r=Vt,Vi(n.type)?(n=d0,d0=null,Vt=n):Vt=r):Vt=Kt?Ki(n.stateNode.nextSibling):null;return!0}function tl(){Vt=Kt=null,Je=!1}function Kh(){var n=Fi;return n!==null&&(Kn===null?Kn=n:Kn.push.apply(Kn,n),Fi=null),n}function rr(n){Fi===null?Fi=[n]:Fi.push(n)}var Zr=re(null),sr=null,k=null;function ui(n,r,s){be(Zr,r._currentValue),r._currentValue=s}function Oi(n){n._currentValue=Zr.current,we(Zr)}function Gn(n,r,s){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===s)break;n=n.return}}function Ye(n,r,s,d){var m=n.child;for(m!==null&&(m.return=n);m!==null;){var w=m.dependencies;if(w!==null){var A=m.child;w=w.firstContext;e:for(;w!==null;){var D=w;w=m;for(var $=0;$<r.length;$++)if(D.context===r[$]){w.lanes|=s,D=w.alternate,D!==null&&(D.lanes|=s),Gn(w.return,s,n),d||(A=null);break e}w=D.next}}else if(m.tag===18){if(A=m.return,A===null)throw Error(a(341));A.lanes|=s,w=A.alternate,w!==null&&(w.lanes|=s),Gn(A,s,n),A=null}else A=m.child;if(A!==null)A.return=m;else for(A=m;A!==null;){if(A===n){A=null;break}if(m=A.sibling,m!==null){m.return=A.return,A=m;break}A=A.return}m=A}}function nl(n,r,s,d){n=null;for(var m=r,w=!1;m!==null;){if(!w){if((m.flags&524288)!==0)w=!0;else if((m.flags&262144)!==0)break}if(m.tag===10){var A=m.alternate;if(A===null)throw Error(a(387));if(A=A.memoizedProps,A!==null){var D=m.type;li(m.pendingProps.value,A.value)||(n!==null?n.push(D):n=[D])}}else if(m===sn.current){if(A=m.alternate,A===null)throw Error(a(387));A.memoizedState.memoizedState!==m.memoizedState.memoizedState&&(n!==null?n.push(wo):n=[wo])}m=m.return}n!==null&&Ye(r,n,s,d),r.flags|=262144}function Pc(n){for(n=n.firstContext;n!==null;){if(!li(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Xr(n){sr=n,k=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Bt(n){return Qh(sr,n)}function Nc(n,r){return sr===null&&Xr(n),Qh(n,r)}function Qh(n,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},k===null){if(n===null)throw Error(a(308));k=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else k=k.next=r;return s}var X2=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(s,d){n.push(d)}};this.abort=function(){r.aborted=!0,n.forEach(function(s){return s()})}},K2=e.unstable_scheduleCallback,Q2=e.unstable_NormalPriority,Et={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function of(){return{controller:new X2,data:new Map,refCount:0}}function il(n){n.refCount--,n.refCount===0&&K2(Q2,function(){n.controller.abort()})}var al=null,lf=0,qs=0,Fn=null;function J2(n,r){if(al===null){var s=al=[];lf=0,qs=Eu(),Fn={status:"pending",value:void 0,then:function(d){s.push(d)}}}return lf++,r.then(Jh,Jh),r}function Jh(){if(--lf===0&&al!==null){Fn!==null&&(Fn.status="fulfilled");var n=al;al=null,qs=0,Fn=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function eg(n,r){var s=[],d={status:"pending",value:null,reason:null,then:function(m){s.push(m)}};return n.then(function(){d.status="fulfilled",d.value=r;for(var m=0;m<s.length;m++)(0,s[m])(r)},function(m){for(d.status="rejected",d.reason=m,m=0;m<s.length;m++)(0,s[m])(void 0)}),d}var ep=X.S;X.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&J2(n,r),ep!==null&&ep(n,r)};var Kr=re(null);function Ma(){var n=Kr.current;return n!==null?n:Ot.pooledCache}function Bc(n,r){r===null?be(Kr,Kr.current):be(Kr,r.pool)}function tp(){var n=Ma();return n===null?null:{parent:Et._currentValue,pool:n}}var Ln=Error(a(460)),np=Error(a(474)),Ic=Error(a(542)),cf={then:function(){}};function ip(n){return n=n.status,n==="fulfilled"||n==="rejected"}function $c(){}function uf(n,r,s){switch(s=n[s],s===void 0?n.push(r):s!==r&&(r.then($c,$c),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,rp(n),n;default:if(typeof r.status=="string")r.then($c,$c);else{if(n=Ot,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=r,n.status="pending",n.then(function(d){if(r.status==="pending"){var m=r;m.status="fulfilled",m.value=d}},function(d){if(r.status==="pending"){var m=r;m.status="rejected",m.reason=d}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,rp(n),n}throw Ys=r,Ln}}var Ys=null;function ap(){if(Ys===null)throw Error(a(459));var n=Ys;return Ys=null,n}function rp(n){if(n===Ln||n===Ic)throw Error(a(483))}var oa=!1;function Qr(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ws(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function or(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ja(n,r,s){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(mt&2)!==0){var m=d.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),d.pending=r,r=Xo(n),Zo(n,null,s),r}return Gi(n,d,r,s),Xo(n)}function rl(n,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var d=r.lanes;d&=n.pendingLanes,s|=d,r.lanes=s,vh(n,s)}}function qi(n,r){var s=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,s===d)){var m=null,w=null;if(s=s.firstBaseUpdate,s!==null){do{var A={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};w===null?m=w=A:w=w.next=A,s=s.next}while(s!==null);w===null?m=w=r:w=w.next=r}else m=w=r;s={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:w,shared:d.shared,callbacks:d.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=r:n.next=r,s.lastBaseUpdate=r}var sl=!1;function Yi(){if(sl){var n=Fn;if(n!==null)throw n}}function yn(n,r,s,d){sl=!1;var m=n.updateQueue;oa=!1;var w=m.firstBaseUpdate,A=m.lastBaseUpdate,D=m.shared.pending;if(D!==null){m.shared.pending=null;var $=D,ee=$.next;$.next=null,A===null?w=ee:A.next=ee,A=$;var ce=n.alternate;ce!==null&&(ce=ce.updateQueue,D=ce.lastBaseUpdate,D!==A&&(D===null?ce.firstBaseUpdate=ee:D.next=ee,ce.lastBaseUpdate=$))}if(w!==null){var pe=m.baseState;A=0,ce=ee=$=null,D=w;do{var ne=D.lane&-536870913,te=ne!==D.lane;if(te?(at&ne)===ne:(d&ne)===ne){ne!==0&&ne===qs&&(sl=!0),ce!==null&&(ce=ce.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var De=n,ke=D;ne=r;var St=s;switch(ke.tag){case 1:if(De=ke.payload,typeof De=="function"){pe=De.call(St,pe,ne);break e}pe=De;break e;case 3:De.flags=De.flags&-65537|128;case 0:if(De=ke.payload,ne=typeof De=="function"?De.call(St,pe,ne):De,ne==null)break e;pe=y({},pe,ne);break e;case 2:oa=!0}}ne=D.callback,ne!==null&&(n.flags|=64,te&&(n.flags|=8192),te=m.callbacks,te===null?m.callbacks=[ne]:te.push(ne))}else te={lane:ne,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ce===null?(ee=ce=te,$=pe):ce=ce.next=te,A|=ne;if(D=D.next,D===null){if(D=m.shared.pending,D===null)break;te=D,D=te.next,te.next=null,m.lastBaseUpdate=te,m.shared.pending=null}}while(!0);ce===null&&($=pe),m.baseState=$,m.firstBaseUpdate=ee,m.lastBaseUpdate=ce,w===null&&(m.shared.lanes=0),gr|=A,n.lanes=A,n.memoizedState=pe}}function sp(n,r){if(typeof n!="function")throw Error(a(191,n));n.call(r)}function df(n,r){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)sp(s[n],r)}var Jr=re(null),lr=re(0);function Ra(n,r){n=Pa,be(lr,n),be(Jr,r),Pa=n|r.baseLanes}function Uc(){be(lr,Pa),be(Jr,Jr.current)}function ff(){Pa=lr.current,we(Jr),we(lr)}var Wi=0,Fe=null,pt=null,et=null,Zs=!1,es=!1,wn=!1,Xs=0,cr=0,Li=null,op=0;function tt(){throw Error(a(321))}function ol(n,r){if(r===null)return!1;for(var s=0;s<r.length&&s<n.length;s++)if(!li(n[s],r[s]))return!1;return!0}function hf(n,r,s,d,m,w){return Wi=w,Fe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,X.H=n===null||n.memoizedState===null?wp:Lf,wn=!1,w=s(d,m),wn=!1,es&&(w=cp(r,s,d,m)),lp(n),w}function lp(n){X.H=vl;var r=pt!==null&&pt.next!==null;if(Wi=0,et=pt=Fe=null,Zs=!1,cr=0,Li=null,r)throw Error(a(300));n===null||un||(n=n.dependencies,n!==null&&Pc(n)&&(un=!0))}function cp(n,r,s,d){Fe=n;var m=0;do{if(es&&(Li=null),cr=0,es=!1,25<=m)throw Error(a(301));if(m+=1,et=pt=null,n.updateQueue!=null){var w=n.updateQueue;w.lastEffect=null,w.events=null,w.stores=null,w.memoCache!=null&&(w.memoCache.index=0)}X.H=bp,w=r(s,d)}while(es);return w}function pf(){var n=X.H,r=n.useState()[0];return r=typeof r.then=="function"?ll(r):r,n=n.useState()[0],(pt!==null?pt.memoizedState:null)!==n&&(Fe.flags|=1024),r}function mf(){var n=Xs!==0;return Xs=0,n}function ts(n,r,s){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~s}function Gc(n){if(Zs){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Zs=!1}Wi=0,et=pt=Fe=null,es=!1,cr=Xs=0,Li=null}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Fe.memoizedState=et=n:et=et.next=n,et}function Zt(){if(pt===null){var n=Fe.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var r=et===null?Fe.memoizedState:et.next;if(r!==null)et=r,pt=n;else{if(n===null)throw Fe.alternate===null?Error(a(467)):Error(a(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},et===null?Fe.memoizedState=et=n:et=et.next=n}return et}function ns(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(n){var r=cr;return cr+=1,Li===null&&(Li=[]),n=uf(Li,n,r),r=Fe,(et===null?r.memoizedState:et.next)===null&&(r=r.alternate,X.H=r===null||r.memoizedState===null?wp:Lf),n}function Fc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ll(n);if(n.$$typeof===O)return Bt(n)}throw Error(a(438,String(n)))}function cl(n){var r=null,s=Fe.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var d=Fe.alternate;d!==null&&(d=d.updateQueue,d!==null&&(d=d.memoCache,d!=null&&(r={data:d.data.map(function(m){return m.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=ns(),Fe.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(n),d=0;d<n;d++)s[d]=se;return r.index++,s}function la(n,r){return typeof r=="function"?r(n):r}function qc(n){var r=Zt();return gf(r,pt,n)}function gf(n,r,s){var d=n.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=s;var m=n.baseQueue,w=d.pending;if(w!==null){if(m!==null){var A=m.next;m.next=w.next,w.next=A}r.baseQueue=m=w,d.pending=null}if(w=n.baseState,m===null)n.memoizedState=w;else{r=m.next;var D=A=null,$=null,ee=r,ce=!1;do{var pe=ee.lane&-536870913;if(pe!==ee.lane?(at&pe)===pe:(Wi&pe)===pe){var ne=ee.revertLane;if(ne===0)$!==null&&($=$.next={lane:0,revertLane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),pe===qs&&(ce=!0);else if((Wi&ne)===ne){ee=ee.next,ne===qs&&(ce=!0);continue}else pe={lane:0,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},$===null?(D=$=pe,A=w):$=$.next=pe,Fe.lanes|=ne,gr|=ne;pe=ee.action,wn&&s(w,pe),w=ee.hasEagerState?ee.eagerState:s(w,pe)}else ne={lane:pe,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},$===null?(D=$=ne,A=w):$=$.next=ne,Fe.lanes|=pe,gr|=pe;ee=ee.next}while(ee!==null&&ee!==r);if($===null?A=w:$.next=D,!li(w,n.memoizedState)&&(un=!0,ce&&(s=Fn,s!==null)))throw s;n.memoizedState=w,n.baseState=A,n.baseQueue=$,d.lastRenderedState=w}return m===null&&(d.lanes=0),[n.memoizedState,d.dispatch]}function xf(n){var r=Zt(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var d=s.dispatch,m=s.pending,w=r.memoizedState;if(m!==null){s.pending=null;var A=m=m.next;do w=n(w,A.action),A=A.next;while(A!==m);li(w,r.memoizedState)||(un=!0),r.memoizedState=w,r.baseQueue===null&&(r.baseState=w),s.lastRenderedState=w}return[w,d]}function vf(n,r,s){var d=Fe,m=Zt(),w=Je;if(w){if(s===void 0)throw Error(a(407));s=s()}else s=r();var A=!li((pt||m).memoizedState,s);A&&(m.memoizedState=s,un=!0),m=m.queue;var D=Wc.bind(null,d,m,n);if(fl(2048,8,D,[n]),m.getSnapshot!==r||A||et!==null&&et.memoizedState.tag&1){if(d.flags|=2048,Ks(9,Jc(),up.bind(null,d,m,s,r),null),Ot===null)throw Error(a(349));w||(Wi&124)!==0||Yc(d,r,s)}return s}function Yc(n,r,s){n.flags|=16384,n={getSnapshot:r,value:s},r=Fe.updateQueue,r===null?(r=ns(),Fe.updateQueue=r,r.stores=[n]):(s=r.stores,s===null?r.stores=[n]:s.push(n))}function up(n,r,s,d){r.value=s,r.getSnapshot=d,yf(r)&&wf(n)}function Wc(n,r,s){return s(function(){yf(r)&&wf(n)})}function yf(n){var r=n.getSnapshot;n=n.value;try{var s=r();return!li(n,s)}catch{return!0}}function wf(n){var r=Gr(n,2);r!==null&&mi(r,n,2)}function Zc(n){var r=qn();if(typeof n=="function"){var s=n;if(n=s(),wn){ri(!0);try{s()}finally{ri(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:n},r}function ul(n,r,s,d){return n.baseState=s,gf(n,pt,typeof d=="function"?d:la)}function tg(n,r,s,d,m){if(iu(n))throw Error(a(485));if(n=r.action,n!==null){var w={payload:m,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(A){w.listeners.push(A)}};X.T!==null?s(!0):w.isTransition=!1,d(w),s=r.pending,s===null?(w.next=r.pending=w,bf(r,w)):(w.next=s.next,r.pending=s.next=w)}}function bf(n,r){var s=r.action,d=r.payload,m=n.state;if(r.isTransition){var w=X.T,A={};X.T=A;try{var D=s(m,d),$=X.S;$!==null&&$(A,D),Sf(n,r,D)}catch(ee){Xc(n,r,ee)}finally{X.T=w}}else try{w=s(m,d),Sf(n,r,w)}catch(ee){Xc(n,r,ee)}}function Sf(n,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(d){dp(n,r,d)},function(d){return Xc(n,r,d)}):dp(n,r,s)}function dp(n,r,s){r.status="fulfilled",r.value=s,fp(r),n.state=s,r=n.pending,r!==null&&(s=r.next,s===r?n.pending=null:(s=s.next,r.next=s,bf(n,s)))}function Xc(n,r,s){var d=n.pending;if(n.pending=null,d!==null){d=d.next;do r.status="rejected",r.reason=s,fp(r),r=r.next;while(r!==d)}n.action=null}function fp(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Kc(n,r){return r}function Cf(n,r){if(Je){var s=Ot.formState;if(s!==null){e:{var d=Fe;if(Je){if(Vt){t:{for(var m=Vt,w=Un;m.nodeType!==8;){if(!w){m=null;break t}if(m=Ki(m.nextSibling),m===null){m=null;break t}}w=m.data,m=w==="F!"||w==="F"?m:null}if(m){Vt=Ki(m.nextSibling),d=m.data==="F!";break e}}Ri(d)}d=!1}d&&(r=s[0])}}return s=qn(),s.memoizedState=s.baseState=r,d={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kc,lastRenderedState:r},s.queue=d,s=jf.bind(null,Fe,d),d.dispatch=s,d=Zc(!1),w=Rf.bind(null,Fe,!1,d.queue),d=qn(),m={state:r,dispatch:null,action:n,pending:null},d.queue=m,s=tg.bind(null,Fe,m,w,s),m.dispatch=s,d.memoizedState=n,[r,s,!1]}function Qc(n){var r=Zt();return hp(r,pt,n)}function hp(n,r,s){if(r=gf(n,r,Kc)[0],n=qc(la)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var d=ll(r)}catch(A){throw A===Ln?Ic:A}else d=r;r=Zt();var m=r.queue,w=m.dispatch;return s!==r.memoizedState&&(Fe.flags|=2048,Ks(9,Jc(),Tf.bind(null,m,s),null)),[d,w,n]}function Tf(n,r){n.action=r}function Ge(n){var r=Zt(),s=pt;if(s!==null)return hp(r,s,n);Zt(),r=r.memoizedState,s=Zt();var d=s.queue.dispatch;return s.memoizedState=n,[r,d,!1]}function Ks(n,r,s,d){return n={tag:n,create:s,deps:d,inst:r,next:null},r=Fe.updateQueue,r===null&&(r=ns(),Fe.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=n.next=n:(d=s.next,s.next=n,n.next=d,r.lastEffect=n),n}function Jc(){return{destroy:void 0,resource:void 0}}function Qs(){return Zt().memoizedState}function dl(n,r,s,d){var m=qn();d=d===void 0?null:d,Fe.flags|=n,m.memoizedState=Ks(1|r,Jc(),s,d)}function fl(n,r,s,d){var m=Zt();d=d===void 0?null:d;var w=m.memoizedState.inst;pt!==null&&d!==null&&ol(d,pt.memoizedState.deps)?m.memoizedState=Ks(r,w,s,d):(Fe.flags|=n,m.memoizedState=Ks(1|r,w,s,d))}function pp(n,r){dl(8390656,8,n,r)}function di(n,r){fl(2048,8,n,r)}function mp(n,r){return fl(4,2,n,r)}function hl(n,r){return fl(4,4,n,r)}function eu(n,r){if(typeof r=="function"){n=n();var s=r(n);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ef(n,r,s){s=s!=null?s.concat([n]):null,fl(4,4,eu.bind(null,r,n),s)}function tu(){}function Yn(n,r){var s=Zt();r=r===void 0?null:r;var d=s.memoizedState;return r!==null&&ol(r,d[1])?d[0]:(s.memoizedState=[n,r],n)}function Oa(n,r){var s=Zt();r=r===void 0?null:r;var d=s.memoizedState;if(r!==null&&ol(r,d[1]))return d[0];if(d=n(),wn){ri(!0);try{n()}finally{ri(!1)}}return s.memoizedState=[d,r],d}function pl(n,r,s){return s===void 0||(Wi&1073741824)!==0?n.memoizedState=r:(n.memoizedState=s,n=Wp(),Fe.lanes|=n,gr|=n,s)}function Af(n,r,s,d){return li(s,r)?s:Jr.current!==null?(n=pl(n,s,d),li(n,r)||(un=!0),n):(Wi&42)===0?(un=!0,n.memoizedState=s):(n=Wp(),Fe.lanes|=n,gr|=n,r)}function ml(n,r,s,d,m){var w=le.p;le.p=w!==0&&8>w?w:8;var A=X.T,D={};X.T=D,Rf(n,!1,r,s);try{var $=m(),ee=X.S;if(ee!==null&&ee(D,$),$!==null&&typeof $=="object"&&typeof $.then=="function"){var ce=eg($,d);is(n,r,ce,Sn(n))}else is(n,r,d,Sn(n))}catch(pe){is(n,r,{then:function(){},status:"rejected",reason:pe},Sn())}finally{le.p=w,X.T=A}}function gp(){}function gl(n,r,s,d){if(n.tag!==5)throw Error(a(476));var m=Mf(n).queue;ml(n,m,r,ue,s===null?gp:function(){return nu(n),s(d)})}function Mf(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:ue},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:s},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function nu(n){var r=Mf(n).next.queue;is(n,r,{},Sn())}function xl(){return Bt(wo)}function La(){return Zt().memoizedState}function xp(){return Zt().memoizedState}function ur(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var s=Sn();n=or(s);var d=ja(r,n,s);d!==null&&(mi(d,r,s),rl(d,r,s)),r={cache:of()},n.payload=r;return}r=r.return}}function vp(n,r,s){var d=Sn();s={lane:d,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},iu(n)?yp(r,s):(s=Us(n,r,s,d),s!==null&&(mi(s,n,d),Of(s,r,d)))}function jf(n,r,s){var d=Sn();is(n,r,s,d)}function is(n,r,s,d){var m={lane:d,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(iu(n))yp(r,m);else{var w=n.alternate;if(n.lanes===0&&(w===null||w.lanes===0)&&(w=r.lastRenderedReducer,w!==null))try{var A=r.lastRenderedState,D=w(A,s);if(m.hasEagerState=!0,m.eagerState=D,li(D,A))return Gi(n,r,m,0),Ot===null&&Ur(),!1}catch{}finally{}if(s=Us(n,r,m,d),s!==null)return mi(s,n,d),Of(s,r,d),!0}return!1}function Rf(n,r,s,d){if(d={lane:2,revertLane:Eu(),action:d,hasEagerState:!1,eagerState:null,next:null},iu(n)){if(r)throw Error(a(479))}else r=Us(n,s,d,2),r!==null&&mi(r,n,2)}function iu(n){var r=n.alternate;return n===Fe||r!==null&&r===Fe}function yp(n,r){es=Zs=!0;var s=n.pending;s===null?r.next=r:(r.next=s.next,s.next=r),n.pending=r}function Of(n,r,s){if((s&4194048)!==0){var d=r.lanes;d&=n.pendingLanes,s|=d,r.lanes=s,vh(n,s)}}var vl={readContext:Bt,use:Fc,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt},wp={readContext:Bt,use:Fc,useCallback:function(n,r){return qn().memoizedState=[n,r===void 0?null:r],n},useContext:Bt,useEffect:pp,useImperativeHandle:function(n,r,s){s=s!=null?s.concat([n]):null,dl(4194308,4,eu.bind(null,r,n),s)},useLayoutEffect:function(n,r){return dl(4194308,4,n,r)},useInsertionEffect:function(n,r){dl(4,2,n,r)},useMemo:function(n,r){var s=qn();r=r===void 0?null:r;var d=n();if(wn){ri(!0);try{n()}finally{ri(!1)}}return s.memoizedState=[d,r],d},useReducer:function(n,r,s){var d=qn();if(s!==void 0){var m=s(r);if(wn){ri(!0);try{s(r)}finally{ri(!1)}}}else m=r;return d.memoizedState=d.baseState=m,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:m},d.queue=n,n=n.dispatch=vp.bind(null,Fe,n),[d.memoizedState,n]},useRef:function(n){var r=qn();return n={current:n},r.memoizedState=n},useState:function(n){n=Zc(n);var r=n.queue,s=jf.bind(null,Fe,r);return r.dispatch=s,[n.memoizedState,s]},useDebugValue:tu,useDeferredValue:function(n,r){var s=qn();return pl(s,n,r)},useTransition:function(){var n=Zc(!1);return n=ml.bind(null,Fe,n.queue,!0,!1),qn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,s){var d=Fe,m=qn();if(Je){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),Ot===null)throw Error(a(349));(at&124)!==0||Yc(d,r,s)}m.memoizedState=s;var w={value:s,getSnapshot:r};return m.queue=w,pp(Wc.bind(null,d,w,n),[n]),d.flags|=2048,Ks(9,Jc(),up.bind(null,d,w,s,r),null),s},useId:function(){var n=qn(),r=Ot.identifierPrefix;if(Je){var s=Aa,d=Dt;s=(d&~(1<<32-jn(d)-1)).toString(32)+s,r="«"+r+"R"+s,s=Xs++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=op++,r="«"+r+"r"+s.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:xl,useFormState:Cf,useActionState:Cf,useOptimistic:function(n){var r=qn();r.memoizedState=r.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=Rf.bind(null,Fe,!0,s),s.dispatch=r,[n,r]},useMemoCache:cl,useCacheRefresh:function(){return qn().memoizedState=ur.bind(null,Fe)}},Lf={readContext:Bt,use:Fc,useCallback:Yn,useContext:Bt,useEffect:di,useImperativeHandle:Ef,useInsertionEffect:mp,useLayoutEffect:hl,useMemo:Oa,useReducer:qc,useRef:Qs,useState:function(){return qc(la)},useDebugValue:tu,useDeferredValue:function(n,r){var s=Zt();return Af(s,pt.memoizedState,n,r)},useTransition:function(){var n=qc(la)[0],r=Zt().memoizedState;return[typeof n=="boolean"?n:ll(n),r]},useSyncExternalStore:vf,useId:La,useHostTransitionStatus:xl,useFormState:Qc,useActionState:Qc,useOptimistic:function(n,r){var s=Zt();return ul(s,pt,n,r)},useMemoCache:cl,useCacheRefresh:xp},bp={readContext:Bt,use:Fc,useCallback:Yn,useContext:Bt,useEffect:di,useImperativeHandle:Ef,useInsertionEffect:mp,useLayoutEffect:hl,useMemo:Oa,useReducer:xf,useRef:Qs,useState:function(){return xf(la)},useDebugValue:tu,useDeferredValue:function(n,r){var s=Zt();return pt===null?pl(s,n,r):Af(s,pt.memoizedState,n,r)},useTransition:function(){var n=xf(la)[0],r=Zt().memoizedState;return[typeof n=="boolean"?n:ll(n),r]},useSyncExternalStore:vf,useId:La,useHostTransitionStatus:xl,useFormState:Ge,useActionState:Ge,useOptimistic:function(n,r){var s=Zt();return pt!==null?ul(s,pt,n,r):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:cl,useCacheRefresh:xp},Qt=null,Wn=0;function au(n){var r=Wn;return Wn+=1,Qt===null&&(Qt=[]),uf(Qt,n,r)}function yl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function as(n,r){throw r.$$typeof===b?Error(a(525)):(n=Object.prototype.toString.call(r),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function rs(n){var r=n._init;return r(n._payload)}function _f(n){function r(Z,F){if(n){var J=Z.deletions;J===null?(Z.deletions=[F],Z.flags|=16):J.push(F)}}function s(Z,F){if(!n)return null;for(;F!==null;)r(Z,F),F=F.sibling;return null}function d(Z){for(var F=new Map;Z!==null;)Z.key!==null?F.set(Z.key,Z):F.set(Z.index,Z),Z=Z.sibling;return F}function m(Z,F){return Z=On(Z,F),Z.index=0,Z.sibling=null,Z}function w(Z,F,J){return Z.index=J,n?(J=Z.alternate,J!==null?(J=J.index,J<F?(Z.flags|=67108866,F):J):(Z.flags|=67108866,F)):(Z.flags|=1048576,F)}function A(Z){return n&&Z.alternate===null&&(Z.flags|=67108866),Z}function D(Z,F,J,fe){return F===null||F.tag!==6?(F=af(J,Z.mode,fe),F.return=Z,F):(F=m(F,J),F.return=Z,F)}function $(Z,F,J,fe){var Te=J.type;return Te===E?ce(Z,F,J.props.children,fe,J.key):F!==null&&(F.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===Q&&rs(Te)===F.type)?(F=m(F,J.props),yl(F,J),F.return=Z,F):(F=zc(J.type,J.key,J.props,null,Z.mode,fe),yl(F,J),F.return=Z,F)}function ee(Z,F,J,fe){return F===null||F.tag!==4||F.stateNode.containerInfo!==J.containerInfo||F.stateNode.implementation!==J.implementation?(F=Gs(J,Z.mode,fe),F.return=Z,F):(F=m(F,J.children||[]),F.return=Z,F)}function ce(Z,F,J,fe,Te){return F===null||F.tag!==7?(F=Yr(J,Z.mode,fe,Te),F.return=Z,F):(F=m(F,J),F.return=Z,F)}function pe(Z,F,J){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=af(""+F,Z.mode,J),F.return=Z,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return J=zc(F.type,F.key,F.props,null,Z.mode,J),yl(J,F),J.return=Z,J;case T:return F=Gs(F,Z.mode,J),F.return=Z,F;case Q:var fe=F._init;return F=fe(F._payload),pe(Z,F,J)}if(Ee(F)||ye(F))return F=Yr(F,Z.mode,J,null),F.return=Z,F;if(typeof F.then=="function")return pe(Z,au(F),J);if(F.$$typeof===O)return pe(Z,Nc(Z,F),J);as(Z,F)}return null}function ne(Z,F,J,fe){var Te=F!==null?F.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Te!==null?null:D(Z,F,""+J,fe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return J.key===Te?$(Z,F,J,fe):null;case T:return J.key===Te?ee(Z,F,J,fe):null;case Q:return Te=J._init,J=Te(J._payload),ne(Z,F,J,fe)}if(Ee(J)||ye(J))return Te!==null?null:ce(Z,F,J,fe,null);if(typeof J.then=="function")return ne(Z,F,au(J),fe);if(J.$$typeof===O)return ne(Z,F,Nc(Z,J),fe);as(Z,J)}return null}function te(Z,F,J,fe,Te){if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return Z=Z.get(J)||null,D(F,Z,""+fe,Te);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case S:return Z=Z.get(fe.key===null?J:fe.key)||null,$(F,Z,fe,Te);case T:return Z=Z.get(fe.key===null?J:fe.key)||null,ee(F,Z,fe,Te);case Q:var We=fe._init;return fe=We(fe._payload),te(Z,F,J,fe,Te)}if(Ee(fe)||ye(fe))return Z=Z.get(J)||null,ce(F,Z,fe,Te,null);if(typeof fe.then=="function")return te(Z,F,J,au(fe),Te);if(fe.$$typeof===O)return te(Z,F,J,Nc(F,fe),Te);as(F,fe)}return null}function De(Z,F,J,fe){for(var Te=null,We=null,je=F,Ve=F=0,hn=null;je!==null&&Ve<J.length;Ve++){je.index>Ve?(hn=je,je=null):hn=je.sibling;var ot=ne(Z,je,J[Ve],fe);if(ot===null){je===null&&(je=hn);break}n&&je&&ot.alternate===null&&r(Z,je),F=w(ot,F,Ve),We===null?Te=ot:We.sibling=ot,We=ot,je=hn}if(Ve===J.length)return s(Z,je),Je&&Wr(Z,Ve),Te;if(je===null){for(;Ve<J.length;Ve++)je=pe(Z,J[Ve],fe),je!==null&&(F=w(je,F,Ve),We===null?Te=je:We.sibling=je,We=je);return Je&&Wr(Z,Ve),Te}for(je=d(je);Ve<J.length;Ve++)hn=te(je,Z,Ve,J[Ve],fe),hn!==null&&(n&&hn.alternate!==null&&je.delete(hn.key===null?Ve:hn.key),F=w(hn,F,Ve),We===null?Te=hn:We.sibling=hn,We=hn);return n&&je.forEach(function(Ar){return r(Z,Ar)}),Je&&Wr(Z,Ve),Te}function ke(Z,F,J,fe){if(J==null)throw Error(a(151));for(var Te=null,We=null,je=F,Ve=F=0,hn=null,ot=J.next();je!==null&&!ot.done;Ve++,ot=J.next()){je.index>Ve?(hn=je,je=null):hn=je.sibling;var Ar=ne(Z,je,ot.value,fe);if(Ar===null){je===null&&(je=hn);break}n&&je&&Ar.alternate===null&&r(Z,je),F=w(Ar,F,Ve),We===null?Te=Ar:We.sibling=Ar,We=Ar,je=hn}if(ot.done)return s(Z,je),Je&&Wr(Z,Ve),Te;if(je===null){for(;!ot.done;Ve++,ot=J.next())ot=pe(Z,ot.value,fe),ot!==null&&(F=w(ot,F,Ve),We===null?Te=ot:We.sibling=ot,We=ot);return Je&&Wr(Z,Ve),Te}for(je=d(je);!ot.done;Ve++,ot=J.next())ot=te(je,Z,Ve,ot.value,fe),ot!==null&&(n&&ot.alternate!==null&&je.delete(ot.key===null?Ve:ot.key),F=w(ot,F,Ve),We===null?Te=ot:We.sibling=ot,We=ot);return n&&je.forEach(function(Hg){return r(Z,Hg)}),Je&&Wr(Z,Ve),Te}function St(Z,F,J,fe){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case S:e:{for(var Te=J.key;F!==null;){if(F.key===Te){if(Te=J.type,Te===E){if(F.tag===7){s(Z,F.sibling),fe=m(F,J.props.children),fe.return=Z,Z=fe;break e}}else if(F.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===Q&&rs(Te)===F.type){s(Z,F.sibling),fe=m(F,J.props),yl(fe,J),fe.return=Z,Z=fe;break e}s(Z,F);break}else r(Z,F);F=F.sibling}J.type===E?(fe=Yr(J.props.children,Z.mode,fe,J.key),fe.return=Z,Z=fe):(fe=zc(J.type,J.key,J.props,null,Z.mode,fe),yl(fe,J),fe.return=Z,Z=fe)}return A(Z);case T:e:{for(Te=J.key;F!==null;){if(F.key===Te)if(F.tag===4&&F.stateNode.containerInfo===J.containerInfo&&F.stateNode.implementation===J.implementation){s(Z,F.sibling),fe=m(F,J.children||[]),fe.return=Z,Z=fe;break e}else{s(Z,F);break}else r(Z,F);F=F.sibling}fe=Gs(J,Z.mode,fe),fe.return=Z,Z=fe}return A(Z);case Q:return Te=J._init,J=Te(J._payload),St(Z,F,J,fe)}if(Ee(J))return De(Z,F,J,fe);if(ye(J)){if(Te=ye(J),typeof Te!="function")throw Error(a(150));return J=Te.call(J),ke(Z,F,J,fe)}if(typeof J.then=="function")return St(Z,F,au(J),fe);if(J.$$typeof===O)return St(Z,F,Nc(Z,J),fe);as(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,F!==null&&F.tag===6?(s(Z,F.sibling),fe=m(F,J),fe.return=Z,Z=fe):(s(Z,F),fe=af(J,Z.mode,fe),fe.return=Z,Z=fe),A(Z)):s(Z,F)}return function(Z,F,J,fe){try{Wn=0;var Te=St(Z,F,J,fe);return Qt=null,Te}catch(je){if(je===Ln||je===Ic)throw je;var We=$n(29,je,null,Z.mode);return We.lanes=fe,We.return=Z,We}finally{}}}var ss=_f(!0),Sp=_f(!1),fi=re(null),_n=null;function _i(n){var r=n.alternate;be(It,It.current&1),be(fi,n),_n===null&&(r===null||Jr.current!==null||r.memoizedState!==null)&&(_n=n)}function Cp(n){if(n.tag===22){if(be(It,It.current),be(fi,n),_n===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(_n=n)}}else _a()}function _a(){be(It,It.current),be(fi,fi.current)}function ca(n){we(fi),_n===n&&(_n=null),we(It)}var It=re(0);function wl(n){for(var r=n;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Dn(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Js(n,r,s,d){r=n.memoizedState,s=s(d,r),s=s==null?r:y({},r,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var bl={enqueueSetState:function(n,r,s){n=n._reactInternals;var d=Sn(),m=or(d);m.payload=r,s!=null&&(m.callback=s),r=ja(n,m,d),r!==null&&(mi(r,n,d),rl(r,n,d))},enqueueReplaceState:function(n,r,s){n=n._reactInternals;var d=Sn(),m=or(d);m.tag=1,m.payload=r,s!=null&&(m.callback=s),r=ja(n,m,d),r!==null&&(mi(r,n,d),rl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var s=Sn(),d=or(s);d.tag=2,r!=null&&(d.callback=r),r=ja(n,d,s),r!==null&&(mi(r,n,s),rl(r,n,s))}};function Sl(n,r,s,d,m,w,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,w,A):r.prototype&&r.prototype.isPureReactComponent?!sa(s,d)||!sa(m,w):!0}function Tp(n,r,s,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,d),r.state!==n&&bl.enqueueReplaceState(r,r.state,null)}function dr(n,r){var s=r;if("ref"in r){s={};for(var d in r)d!=="ref"&&(s[d]=r[d])}if(n=n.defaultProps){s===r&&(s=y({},s));for(var m in n)s[m]===void 0&&(s[m]=n[m])}return s}var os=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function kf(n){os(n)}function ru(n){console.error(n)}function Ep(n){os(n)}function Cl(n,r){try{var s=n.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(d){setTimeout(function(){throw d})}}function ua(n,r,s){try{var d=n.onCaughtError;d(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(m){setTimeout(function(){throw m})}}function su(n,r,s){return s=or(s),s.tag=3,s.payload={element:null},s.callback=function(){Cl(n,r)},s}function Df(n){return n=or(n),n.tag=3,n}function Ap(n,r,s,d){var m=s.type.getDerivedStateFromError;if(typeof m=="function"){var w=d.value;n.payload=function(){return m(w)},n.callback=function(){ua(r,s,d)}}var A=s.stateNode;A!==null&&typeof A.componentDidCatch=="function"&&(n.callback=function(){ua(r,s,d),typeof m!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var D=d.stack;this.componentDidCatch(d.value,{componentStack:D!==null?D:""})})}function Mp(n,r,s,d,m){if(s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){if(r=s.alternate,r!==null&&nl(r,s,m,!0),s=fi.current,s!==null){switch(s.tag){case 13:return _n===null?Jf():s.alternate===null&&$t===0&&($t=3),s.flags&=-257,s.flags|=65536,s.lanes=m,d===cf?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([d]):r.add(d),n0(n,d,m)),!1;case 22:return s.flags|=65536,d===cf?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([d])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([d]):s.add(d)),n0(n,d,m)),!1}throw Error(a(435,s.tag))}return n0(n,d,m),Jf(),!1}if(Je)return r=fi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=m,d!==Fs&&(n=Error(a(422),{cause:d}),rr(Rn(n,s)))):(d!==Fs&&(r=Error(a(423),{cause:d}),rr(Rn(r,s))),n=n.current.alternate,n.flags|=65536,m&=-m,n.lanes|=m,d=Rn(d,s),m=su(n.stateNode,d,m),qi(n,m),$t!==4&&($t=2)),!1;var w=Error(a(520),{cause:d});if(w=Rn(w,s),kl===null?kl=[w]:kl.push(w),$t!==4&&($t=2),r===null)return!0;d=Rn(d,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,n=m&-m,s.lanes|=n,n=su(s.stateNode,d,n),qi(s,n),!1;case 1:if(r=s.type,w=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(xr===null||!xr.has(w))))return s.flags|=65536,m&=-m,s.lanes|=m,m=Df(m),Ap(m,n,s,d),qi(s,m),!1}s=s.return}while(s!==null);return!1}var jp=Error(a(461)),un=!1;function _t(n,r,s,d){r.child=n===null?Sp(r,null,s,d):ss(r,n.child,s,d)}function ou(n,r,s,d,m){s=s.render;var w=r.ref;if("ref"in d){var A={};for(var D in d)D!=="ref"&&(A[D]=d[D])}else A=d;return Xr(r),d=hf(n,r,s,A,w,m),D=mf(),n!==null&&!un?(ts(n,r,m),ka(n,r,m)):(Je&&D&&sf(r),r.flags|=1,_t(n,r,d,m),r.child)}function lu(n,r,s,d,m){if(n===null){var w=s.type;return typeof w=="function"&&!qr(w)&&w.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=w,cu(n,r,w,d,m)):(n=zc(s.type,null,d,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(w=n.child,!Zi(n,m)){var A=w.memoizedProps;if(s=s.compare,s=s!==null?s:sa,s(A,d)&&n.ref===r.ref)return ka(n,r,m)}return r.flags|=1,n=On(w,d),n.ref=r.ref,n.return=r,r.child=n}function cu(n,r,s,d,m){if(n!==null){var w=n.memoizedProps;if(sa(w,d)&&n.ref===r.ref)if(un=!1,r.pendingProps=d=w,Zi(n,m))(n.flags&131072)!==0&&(un=!0);else return r.lanes=n.lanes,ka(n,r,m)}return eo(n,r,s,d,m)}function Tl(n,r,s){var d=r.pendingProps,m=d.children,w=n!==null?n.memoizedState:null;if(d.mode==="hidden"){if((r.flags&128)!==0){if(d=w!==null?w.baseLanes|s:s,n!==null){for(m=r.child=n.child,w=0;m!==null;)w=w|m.lanes|m.childLanes,m=m.sibling;r.childLanes=w&~d}else r.childLanes=0,r.child=null;return ls(n,r,d,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Bc(r,w!==null?w.cachePool:null),w!==null?Ra(r,w):Uc(),Cp(r);else return r.lanes=r.childLanes=536870912,ls(n,r,w!==null?w.baseLanes|s:s,s)}else w!==null?(Bc(r,w.cachePool),Ra(r,w),_a(),r.memoizedState=null):(n!==null&&Bc(r,null),Uc(),_a());return _t(n,r,m,s),r.child}function ls(n,r,s,d){var m=Ma();return m=m===null?null:{parent:Et._currentValue,pool:m},r.memoizedState={baseLanes:s,cachePool:m},n!==null&&Bc(r,null),Uc(),Cp(r),n!==null&&nl(n,r,d,!0),null}function Le(n,r){var s=r.ref;if(s===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(r.flags|=4194816)}}function eo(n,r,s,d,m){return Xr(r),s=hf(n,r,s,d,void 0,m),d=mf(),n!==null&&!un?(ts(n,r,m),ka(n,r,m)):(Je&&d&&sf(r),r.flags|=1,_t(n,r,s,m),r.child)}function uu(n,r,s,d,m,w){return Xr(r),r.updateQueue=null,s=cp(r,d,s,m),lp(n),d=mf(),n!==null&&!un?(ts(n,r,w),ka(n,r,w)):(Je&&d&&sf(r),r.flags|=1,_t(n,r,s,w),r.child)}function fr(n,r,s,d,m){if(Xr(r),r.stateNode===null){var w=Fr,A=s.contextType;typeof A=="object"&&A!==null&&(w=Bt(A)),w=new s(d,w),r.memoizedState=w.state!==null&&w.state!==void 0?w.state:null,w.updater=bl,r.stateNode=w,w._reactInternals=r,w=r.stateNode,w.props=d,w.state=r.memoizedState,w.refs={},Qr(r),A=s.contextType,w.context=typeof A=="object"&&A!==null?Bt(A):Fr,w.state=r.memoizedState,A=s.getDerivedStateFromProps,typeof A=="function"&&(Js(r,s,A,d),w.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof w.getSnapshotBeforeUpdate=="function"||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(A=w.state,typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount(),A!==w.state&&bl.enqueueReplaceState(w,w.state,null),yn(r,d,w,m),Yi(),w.state=r.memoizedState),typeof w.componentDidMount=="function"&&(r.flags|=4194308),d=!0}else if(n===null){w=r.stateNode;var D=r.memoizedProps,$=dr(s,D);w.props=$;var ee=w.context,ce=s.contextType;A=Fr,typeof ce=="object"&&ce!==null&&(A=Bt(ce));var pe=s.getDerivedStateFromProps;ce=typeof pe=="function"||typeof w.getSnapshotBeforeUpdate=="function",D=r.pendingProps!==D,ce||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(D||ee!==A)&&Tp(r,w,d,A),oa=!1;var ne=r.memoizedState;w.state=ne,yn(r,d,w,m),Yi(),ee=r.memoizedState,D||ne!==ee||oa?(typeof pe=="function"&&(Js(r,s,pe,d),ee=r.memoizedState),($=oa||Sl(r,s,$,d,ne,ee,A))?(ce||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=ee),w.props=d,w.state=ee,w.context=A,d=$):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{w=r.stateNode,Ws(n,r),A=r.memoizedProps,ce=dr(s,A),w.props=ce,pe=r.pendingProps,ne=w.context,ee=s.contextType,$=Fr,typeof ee=="object"&&ee!==null&&($=Bt(ee)),D=s.getDerivedStateFromProps,(ee=typeof D=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==pe||ne!==$)&&Tp(r,w,d,$),oa=!1,ne=r.memoizedState,w.state=ne,yn(r,d,w,m),Yi();var te=r.memoizedState;A!==pe||ne!==te||oa||n!==null&&n.dependencies!==null&&Pc(n.dependencies)?(typeof D=="function"&&(Js(r,s,D,d),te=r.memoizedState),(ce=oa||Sl(r,s,ce,d,ne,te,$)||n!==null&&n.dependencies!==null&&Pc(n.dependencies))?(ee||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,te,$),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,te,$)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===n.memoizedProps&&ne===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&ne===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=te),w.props=d,w.state=te,w.context=$,d=ce):(typeof w.componentDidUpdate!="function"||A===n.memoizedProps&&ne===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&ne===n.memoizedState||(r.flags|=1024),d=!1)}return w=d,Le(n,r),d=(r.flags&128)!==0,w||d?(w=r.stateNode,s=d&&typeof s.getDerivedStateFromError!="function"?null:w.render(),r.flags|=1,n!==null&&d?(r.child=ss(r,n.child,null,m),r.child=ss(r,null,s,m)):_t(n,r,s,m),r.memoizedState=w.state,n=r.child):n=ka(n,r,m),n}function Rp(n,r,s,d){return tl(),r.flags|=256,_t(n,r,s,d),r.child}var El={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function du(n){return{baseLanes:n,cachePool:tp()}}function dn(n,r,s){return n=n!==null?n.childLanes&~s:0,r&&(n|=Di),n}function Op(n,r,s){var d=r.pendingProps,m=!1,w=(r.flags&128)!==0,A;if((A=w)||(A=n!==null&&n.memoizedState===null?!1:(It.current&2)!==0),A&&(m=!0,r.flags&=-129),A=(r.flags&32)!==0,r.flags&=-33,n===null){if(Je){if(m?_i(r):_a(),Je){var D=Vt,$;if($=D){e:{for($=D,D=Un;$.nodeType!==8;){if(!D){D=null;break e}if($=Ki($.nextSibling),$===null){D=null;break e}}D=$}D!==null?(r.memoizedState={dehydrated:D,treeContext:Lt!==null?{id:Dt,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},$=$n(18,null,null,0),$.stateNode=D,$.return=r,r.child=$,Kt=r,Vt=null,$=!0):$=!1}$||Ri(r)}if(D=r.memoizedState,D!==null&&(D=D.dehydrated,D!==null))return Dn(D)?r.lanes=32:r.lanes=536870912,null;ca(r)}return D=d.children,d=d.fallback,m?(_a(),m=r.mode,D=Al({mode:"hidden",children:D},m),d=Yr(d,m,s,null),D.return=r,d.return=r,D.sibling=d,r.child=D,m=r.child,m.memoizedState=du(s),m.childLanes=dn(n,A,s),r.memoizedState=El,d):(_i(r),Vf(r,D))}if($=n.memoizedState,$!==null&&(D=$.dehydrated,D!==null)){if(w)r.flags&256?(_i(r),r.flags&=-257,r=zf(n,r,s)):r.memoizedState!==null?(_a(),r.child=n.child,r.flags|=128,r=null):(_a(),m=d.fallback,D=r.mode,d=Al({mode:"visible",children:d.children},D),m=Yr(m,D,s,null),m.flags|=2,d.return=r,m.return=r,d.sibling=m,r.child=d,ss(r,n.child,null,s),d=r.child,d.memoizedState=du(s),d.childLanes=dn(n,A,s),r.memoizedState=El,r=m);else if(_i(r),Dn(D)){if(A=D.nextSibling&&D.nextSibling.dataset,A)var ee=A.dgst;A=ee,d=Error(a(419)),d.stack="",d.digest=A,rr({value:d,source:null,stack:null}),r=zf(n,r,s)}else if(un||nl(n,r,s,!1),A=(s&n.childLanes)!==0,un||A){if(A=Ot,A!==null&&(d=s&-s,d=(d&42)!==0?1:Ad(d),d=(d&(A.suspendedLanes|s))!==0?0:d,d!==0&&d!==$.retryLane))throw $.retryLane=d,Gr(n,d),mi(A,n,d),jp;D.data==="$?"||Jf(),r=zf(n,r,s)}else D.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=$.treeContext,Vt=Ki(D.nextSibling),Kt=r,Je=!0,Fi=null,Un=!1,n!==null&&(Mi[ji++]=Dt,Mi[ji++]=Aa,Mi[ji++]=Lt,Dt=n.id,Aa=n.overflow,Lt=r),r=Vf(r,d.children),r.flags|=4096);return r}return m?(_a(),m=d.fallback,D=r.mode,$=n.child,ee=$.sibling,d=On($,{mode:"hidden",children:d.children}),d.subtreeFlags=$.subtreeFlags&65011712,ee!==null?m=On(ee,m):(m=Yr(m,D,s,null),m.flags|=2),m.return=r,d.return=r,d.sibling=m,r.child=d,d=m,m=r.child,D=n.child.memoizedState,D===null?D=du(s):($=D.cachePool,$!==null?(ee=Et._currentValue,$=$.parent!==ee?{parent:ee,pool:ee}:$):$=tp(),D={baseLanes:D.baseLanes|s,cachePool:$}),m.memoizedState=D,m.childLanes=dn(n,A,s),r.memoizedState=El,d):(_i(r),s=n.child,n=s.sibling,s=On(s,{mode:"visible",children:d.children}),s.return=r,s.sibling=null,n!==null&&(A=r.deletions,A===null?(r.deletions=[n],r.flags|=16):A.push(n)),r.child=s,r.memoizedState=null,s)}function Vf(n,r){return r=Al({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Al(n,r){return n=$n(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function zf(n,r,s){return ss(r,n.child,null,s),n=Vf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Hf(n,r,s){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),Gn(n.return,r,s)}function Pf(n,r,s,d,m){var w=n.memoizedState;w===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:s,tailMode:m}:(w.isBackwards=r,w.rendering=null,w.renderingStartTime=0,w.last=d,w.tail=s,w.tailMode=m)}function Lp(n,r,s){var d=r.pendingProps,m=d.revealOrder,w=d.tail;if(_t(n,r,d.children,s),d=It.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hf(n,s,r);else if(n.tag===19)Hf(n,s,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}switch(be(It,d),m){case"forwards":for(s=r.child,m=null;s!==null;)n=s.alternate,n!==null&&wl(n)===null&&(m=s),s=s.sibling;s=m,s===null?(m=r.child,r.child=null):(m=s.sibling,s.sibling=null),Pf(r,!1,m,s,w);break;case"backwards":for(s=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&wl(n)===null){r.child=m;break}n=m.sibling,m.sibling=s,s=m,m=n}Pf(r,!0,s,null,w);break;case"together":Pf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ka(n,r,s){if(n!==null&&(r.dependencies=n.dependencies),gr|=r.lanes,(s&r.childLanes)===0)if(n!==null){if(nl(n,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(a(153));if(r.child!==null){for(n=r.child,s=On(n,n.pendingProps),r.child=s,s.return=r;n.sibling!==null;)n=n.sibling,s=s.sibling=On(n,n.pendingProps),s.return=r;s.sibling=null}return r.child}function Zi(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Pc(n)))}function kn(n,r,s){switch(r.tag){case 3:it(r,r.stateNode.containerInfo),ui(r,Et,n.memoizedState.cache),tl();break;case 27:case 5:Pr(r);break;case 4:it(r,r.stateNode.containerInfo);break;case 10:ui(r,r.type,r.memoizedProps.value);break;case 13:var d=r.memoizedState;if(d!==null)return d.dehydrated!==null?(_i(r),r.flags|=128,null):(s&r.child.childLanes)!==0?Op(n,r,s):(_i(r),n=ka(n,r,s),n!==null?n.sibling:null);_i(r);break;case 19:var m=(n.flags&128)!==0;if(d=(s&r.childLanes)!==0,d||(nl(n,r,s,!1),d=(s&r.childLanes)!==0),m){if(d)return Lp(n,r,s);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),be(It,It.current),d)break;return null;case 22:case 23:return r.lanes=0,Tl(n,r,s);case 24:ui(r,Et,n.memoizedState.cache)}return ka(n,r,s)}function fu(n,r,s){if(n!==null)if(n.memoizedProps!==r.pendingProps)un=!0;else{if(!Zi(n,s)&&(r.flags&128)===0)return un=!1,kn(n,r,s);un=(n.flags&131072)!==0}else un=!1,Je&&(r.flags&1048576)!==0&&rf(r,Qo,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var d=r.elementType,m=d._init;if(d=m(d._payload),r.type=d,typeof d=="function")qr(d)?(n=dr(d,n),r.tag=1,r=fr(null,r,d,n,s)):(r.tag=0,r=eo(null,r,d,n,s));else{if(d!=null){if(m=d.$$typeof,m===N){r.tag=11,r=ou(null,r,d,n,s);break e}else if(m===G){r.tag=14,r=lu(null,r,d,n,s);break e}}throw r=Re(d)||d,Error(a(306,r,""))}}return r;case 0:return eo(n,r,r.type,r.pendingProps,s);case 1:return d=r.type,m=dr(d,r.pendingProps),fr(n,r,d,m,s);case 3:e:{if(it(r,r.stateNode.containerInfo),n===null)throw Error(a(387));d=r.pendingProps;var w=r.memoizedState;m=w.element,Ws(n,r),yn(r,d,null,s);var A=r.memoizedState;if(d=A.cache,ui(r,Et,d),d!==w.cache&&Ye(r,[Et],s,!0),Yi(),d=A.element,w.isDehydrated)if(w={element:d,isDehydrated:!1,cache:A.cache},r.updateQueue.baseState=w,r.memoizedState=w,r.flags&256){r=Rp(n,r,d,s);break e}else if(d!==m){m=Rn(Error(a(424)),r),rr(m),r=Rp(n,r,d,s);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Vt=Ki(n.firstChild),Kt=r,Je=!0,Fi=null,Un=!0,s=Sp(r,null,d,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(tl(),d===m){r=ka(n,r,s);break e}_t(n,r,d,s)}r=r.child}return r;case 26:return Le(n,r),n===null?(s=M1(r.type,null,r.pendingProps,null))?r.memoizedState=s:Je||(s=r.type,n=r.pendingProps,d=ds(_e.current).createElement(s),d[ln]=r,d[Nn]=n,tn(d,s,n),cn(d),r.stateNode=d):r.memoizedState=M1(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Pr(r),n===null&&Je&&(d=r.stateNode=T1(r.type,r.pendingProps,_e.current),Kt=r,Un=!0,m=Vt,Vi(r.type)?(d0=m,Vt=Ki(d.firstChild)):Vt=m),_t(n,r,r.pendingProps.children,s),Le(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Je&&((m=d=Vt)&&(d=S1(d,r.type,r.pendingProps,Un),d!==null?(r.stateNode=d,Kt=r,Vt=Ki(d.firstChild),Un=!1,m=!0):m=!1),m||Ri(r)),Pr(r),m=r.type,w=r.pendingProps,A=n!==null?n.memoizedProps:null,d=w.children,Ru(m,w)?d=null:A!==null&&Ru(m,A)&&(r.flags|=32),r.memoizedState!==null&&(m=hf(n,r,pf,null,null,s),wo._currentValue=m),Le(n,r),_t(n,r,d,s),r.child;case 6:return n===null&&Je&&((n=s=Vt)&&(s=Lu(s,r.pendingProps,Un),s!==null?(r.stateNode=s,Kt=r,Vt=null,n=!0):n=!1),n||Ri(r)),null;case 13:return Op(n,r,s);case 4:return it(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=ss(r,null,d,s):_t(n,r,d,s),r.child;case 11:return ou(n,r,r.type,r.pendingProps,s);case 7:return _t(n,r,r.pendingProps,s),r.child;case 8:return _t(n,r,r.pendingProps.children,s),r.child;case 12:return _t(n,r,r.pendingProps.children,s),r.child;case 10:return d=r.pendingProps,ui(r,r.type,d.value),_t(n,r,d.children,s),r.child;case 9:return m=r.type._context,d=r.pendingProps.children,Xr(r),m=Bt(m),d=d(m),r.flags|=1,_t(n,r,d,s),r.child;case 14:return lu(n,r,r.type,r.pendingProps,s);case 15:return cu(n,r,r.type,r.pendingProps,s);case 19:return Lp(n,r,s);case 31:return d=r.pendingProps,s=r.mode,d={mode:d.mode,children:d.children},n===null?(s=Al(d,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=On(n.child,d),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return Tl(n,r,s);case 24:return Xr(r),d=Bt(Et),n===null?(m=Ma(),m===null&&(m=Ot,w=of(),m.pooledCache=w,w.refCount++,w!==null&&(m.pooledCacheLanes|=s),m=w),r.memoizedState={parent:d,cache:m},Qr(r),ui(r,Et,m)):((n.lanes&s)!==0&&(Ws(n,r),yn(r,null,null,s),Yi()),m=n.memoizedState,w=r.memoizedState,m.parent!==d?(m={parent:d,cache:d},r.memoizedState=m,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=m),ui(r,Et,d)):(d=w.cache,ui(r,Et,d),d!==m.cache&&Ye(r,[Et],s,!0))),_t(n,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Da(n){n.flags|=4}function hu(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!nn(r)){if(r=fi.current,r!==null&&((at&4194048)===at?_n!==null:(at&62914560)!==at&&(at&536870912)===0||r!==_n))throw Ys=cf,np;n.flags|=8192}}function pu(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?gh():536870912,n.lanes|=r,oo|=r)}function Ml(n,r){if(!Je)switch(n.tailMode){case"hidden":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var d=null;s!==null;)s.alternate!==null&&(d=s),s=s.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function At(n){var r=n.alternate!==null&&n.alternate.child===n.child,s=0,d=0;if(r)for(var m=n.child;m!==null;)s|=m.lanes|m.childLanes,d|=m.subtreeFlags&65011712,d|=m.flags&65011712,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)s|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=d,n.childLanes=s,r}function _p(n,r,s){var d=r.pendingProps;switch(Jo(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(r),null;case 1:return At(r),null;case 3:return s=r.stateNode,d=null,n!==null&&(d=n.memoizedState.cache),r.memoizedState.cache!==d&&(r.flags|=2048),Oi(Et),Yt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(el(r)?Da(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Kh())),At(r),null;case 26:return s=r.memoizedState,n===null?(Da(r),s!==null?(At(r),hu(r,s)):(At(r),r.flags&=-16777217)):s?s!==n.memoizedState?(Da(r),At(r),hu(r,s)):(At(r),r.flags&=-16777217):(n.memoizedProps!==d&&Da(r),At(r),r.flags&=-16777217),null;case 27:bi(r),s=_e.current;var m=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==d&&Da(r);else{if(!d){if(r.stateNode===null)throw Error(a(166));return At(r),null}n=Oe.current,el(r)?Zh(r):(n=T1(m,d,s),r.stateNode=n,Da(r))}return At(r),null;case 5:if(bi(r),s=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==d&&Da(r);else{if(!d){if(r.stateNode===null)throw Error(a(166));return At(r),null}if(n=Oe.current,el(r))Zh(r);else{switch(m=ds(_e.current),n){case 1:n=m.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=m.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=m.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=m.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=m.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof d.is=="string"?m.createElement("select",{is:d.is}):m.createElement("select"),d.multiple?n.multiple=!0:d.size&&(n.size=d.size);break;default:n=typeof d.is=="string"?m.createElement(s,{is:d.is}):m.createElement(s)}}n[ln]=r,n[Nn]=d;e:for(m=r.child;m!==null;){if(m.tag===5||m.tag===6)n.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===r)break e;for(;m.sibling===null;){if(m.return===null||m.return===r)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}r.stateNode=n;e:switch(tn(n,s,d),s){case"button":case"input":case"select":case"textarea":n=!!d.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Da(r)}}return At(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==d&&Da(r);else{if(typeof d!="string"&&r.stateNode===null)throw Error(a(166));if(n=_e.current,el(r)){if(n=r.stateNode,s=r.memoizedProps,d=null,m=Kt,m!==null)switch(m.tag){case 27:case 5:d=m.memoizedProps}n[ln]=r,n=!!(n.nodeValue===s||d!==null&&d.suppressHydrationWarning===!0||v1(n.nodeValue,s)),n||Ri(r)}else n=ds(n).createTextNode(d),n[ln]=r,r.stateNode=n}return At(r),null;case 13:if(d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(m=el(r),d!==null&&d.dehydrated!==null){if(n===null){if(!m)throw Error(a(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(a(317));m[ln]=r}else tl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;At(r),m=!1}else m=Kh(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=m),m=!0;if(!m)return r.flags&256?(ca(r),r):(ca(r),null)}if(ca(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=d!==null,n=n!==null&&n.memoizedState!==null,s){d=r.child,m=null,d.alternate!==null&&d.alternate.memoizedState!==null&&d.alternate.memoizedState.cachePool!==null&&(m=d.alternate.memoizedState.cachePool.pool);var w=null;d.memoizedState!==null&&d.memoizedState.cachePool!==null&&(w=d.memoizedState.cachePool.pool),w!==m&&(d.flags|=2048)}return s!==n&&s&&(r.child.flags|=8192),pu(r,r.updateQueue),At(r),null;case 4:return Yt(),n===null&&o0(r.stateNode.containerInfo),At(r),null;case 10:return Oi(r.type),At(r),null;case 19:if(we(It),m=r.memoizedState,m===null)return At(r),null;if(d=(r.flags&128)!==0,w=m.rendering,w===null)if(d)Ml(m,!1);else{if($t!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(w=wl(n),w!==null){for(r.flags|=128,Ml(m,!1),n=w.updateQueue,r.updateQueue=n,pu(r,n),r.subtreeFlags=0,n=s,s=r.child;s!==null;)Ko(s,n),s=s.sibling;return be(It,It.current&1|2),r.child}n=n.sibling}m.tail!==null&&on()>lo&&(r.flags|=128,d=!0,Ml(m,!1),r.lanes=4194304)}else{if(!d)if(n=wl(w),n!==null){if(r.flags|=128,d=!0,n=n.updateQueue,r.updateQueue=n,pu(r,n),Ml(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Je)return At(r),null}else 2*on()-m.renderingStartTime>lo&&s!==536870912&&(r.flags|=128,d=!0,Ml(m,!1),r.lanes=4194304);m.isBackwards?(w.sibling=r.child,r.child=w):(n=m.last,n!==null?n.sibling=w:r.child=w,m.last=w)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=on(),r.sibling=null,n=It.current,be(It,d?n&1|2:n&1),r):(At(r),null);case 22:case 23:return ca(r),ff(),d=r.memoizedState!==null,n!==null?n.memoizedState!==null!==d&&(r.flags|=8192):d&&(r.flags|=8192),d?(s&536870912)!==0&&(r.flags&128)===0&&(At(r),r.subtreeFlags&6&&(r.flags|=8192)):At(r),s=r.updateQueue,s!==null&&pu(r,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),d=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(d=r.memoizedState.cachePool.pool),d!==s&&(r.flags|=2048),n!==null&&we(Kr),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Oi(Et),At(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function kp(n,r){switch(Jo(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Oi(Et),Yt(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return bi(r),null;case 13:if(ca(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(a(340));tl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return we(It),null;case 4:return Yt(),null;case 10:return Oi(r.type),null;case 22:case 23:return ca(r),ff(),n!==null&&we(Kr),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Oi(Et),null;case 25:return null;default:return null}}function Dp(n,r){switch(Jo(r),r.tag){case 3:Oi(Et),Yt();break;case 26:case 27:case 5:bi(r);break;case 4:Yt();break;case 13:ca(r);break;case 19:we(It);break;case 10:Oi(r.type);break;case 22:case 23:ca(r),ff(),n!==null&&we(Kr);break;case 24:Oi(Et)}}function jl(n,r){try{var s=r.updateQueue,d=s!==null?s.lastEffect:null;if(d!==null){var m=d.next;s=m;do{if((s.tag&n)===n){d=void 0;var w=s.create,A=s.inst;d=w(),A.destroy=d}s=s.next}while(s!==m)}}catch(D){Mt(r,r.return,D)}}function hr(n,r,s){try{var d=r.updateQueue,m=d!==null?d.lastEffect:null;if(m!==null){var w=m.next;d=w;do{if((d.tag&n)===n){var A=d.inst,D=A.destroy;if(D!==void 0){A.destroy=void 0,m=r;var $=s,ee=D;try{ee()}catch(ce){Mt(m,$,ce)}}}d=d.next}while(d!==w)}}catch(ce){Mt(r,r.return,ce)}}function Vp(n){var r=n.updateQueue;if(r!==null){var s=n.stateNode;try{df(r,s)}catch(d){Mt(n,n.return,d)}}}function Nf(n,r,s){s.props=dr(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(d){Mt(n,r,d)}}function to(n,r){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var d=n.stateNode;break;case 30:d=n.stateNode;break;default:d=n.stateNode}typeof s=="function"?n.refCleanup=s(d):s.current=d}}catch(m){Mt(n,r,m)}}function da(n,r){var s=n.ref,d=n.refCleanup;if(s!==null)if(typeof d=="function")try{d()}catch(m){Mt(n,r,m)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(m){Mt(n,r,m)}else s.current=null}function mu(n){var r=n.type,s=n.memoizedProps,d=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&d.focus();break e;case"img":s.src?d.src=s.src:s.srcSet&&(d.srcset=s.srcSet)}}catch(m){Mt(n,n.return,m)}}function gu(n,r,s){try{var d=n.stateNode;gg(d,n.type,s,r),d[Nn]=r}catch(m){Mt(n,n.return,m)}}function no(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Vi(n.type)||n.tag===4}function Rl(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||no(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Vi(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xu(n,r,s){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(n),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Mu));else if(d!==4&&(d===27&&Vi(n.type)&&(s=n.stateNode,r=null),n=n.child,n!==null))for(xu(n,r,s),n=n.sibling;n!==null;)xu(n,r,s),n=n.sibling}function Ol(n,r,s){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?s.insertBefore(n,r):s.appendChild(n);else if(d!==4&&(d===27&&Vi(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(Ol(n,r,s),n=n.sibling;n!==null;)Ol(n,r,s),n=n.sibling}function Ll(n){var r=n.stateNode,s=n.memoizedProps;try{for(var d=n.type,m=r.attributes;m.length;)r.removeAttributeNode(m[0]);tn(r,d,s),r[ln]=n,r[Nn]=s}catch(w){Mt(n,n.return,w)}}var fa=!1,ft=!1,Va=!1,zp=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function ng(n,r){if(n=n.containerInfo,Xi=Vu,n=Yh(n),ef(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var d=s.getSelection&&s.getSelection();if(d&&d.rangeCount!==0){s=d.anchorNode;var m=d.anchorOffset,w=d.focusNode;d=d.focusOffset;try{s.nodeType,w.nodeType}catch{s=null;break e}var A=0,D=-1,$=-1,ee=0,ce=0,pe=n,ne=null;t:for(;;){for(var te;pe!==s||m!==0&&pe.nodeType!==3||(D=A+m),pe!==w||d!==0&&pe.nodeType!==3||($=A+d),pe.nodeType===3&&(A+=pe.nodeValue.length),(te=pe.firstChild)!==null;)ne=pe,pe=te;for(;;){if(pe===n)break t;if(ne===s&&++ee===m&&(D=A),ne===w&&++ce===d&&($=A),(te=pe.nextSibling)!==null)break;pe=ne,ne=pe.parentNode}pe=te}s=D===-1||$===-1?null:{start:D,end:$}}else s=null}s=s||{start:0,end:0}}else s=null;for(ju={focusedElem:n,selectionRange:s},Vu=!1,Jt=r;Jt!==null;)if(r=Jt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,Jt=n;else for(;Jt!==null;){switch(r=Jt,w=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&w!==null){n=void 0,s=r,m=w.memoizedProps,w=w.memoizedState,d=s.stateNode;try{var De=dr(s.type,m,s.elementType===s.type);n=d.getSnapshotBeforeUpdate(De,w),d.__reactInternalSnapshotBeforeUpdate=n}catch(ke){Mt(s,s.return,ke)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,s=n.nodeType,s===9)u0(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":u0(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=r.sibling,n!==null){n.return=r.return,Jt=n;break}Jt=r.return}}function Hp(n,r,s){var d=s.flags;switch(s.tag){case 0:case 11:case 15:pr(n,s),d&4&&jl(5,s);break;case 1:if(pr(n,s),d&4)if(n=s.stateNode,r===null)try{n.componentDidMount()}catch(A){Mt(s,s.return,A)}else{var m=dr(s.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(m,r,n.__reactInternalSnapshotBeforeUpdate)}catch(A){Mt(s,s.return,A)}}d&64&&Vp(s),d&512&&to(s,s.return);break;case 3:if(pr(n,s),d&64&&(n=s.updateQueue,n!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{df(n,r)}catch(A){Mt(s,s.return,A)}}break;case 27:r===null&&d&4&&Ll(s);case 26:case 5:pr(n,s),r===null&&d&4&&mu(s),d&512&&to(s,s.return);break;case 12:pr(n,s);break;case 13:pr(n,s),d&4&&Bp(n,s),d&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=Su.bind(null,s),mo(n,s))));break;case 22:if(d=s.memoizedState!==null||fa,!d){r=r!==null&&r.memoizedState!==null||ft,m=fa;var w=ft;fa=d,(ft=r)&&!w?Ha(n,s,(s.subtreeFlags&8772)!==0):pr(n,s),fa=m,ft=w}break;case 30:break;default:pr(n,s)}}function Pp(n){var r=n.alternate;r!==null&&(n.alternate=null,Pp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&jd(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var zt=null,Zn=!1;function za(n,r,s){for(s=s.child;s!==null;)Np(n,r,s),s=s.sibling}function Np(n,r,s){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Po,s)}catch{}switch(s.tag){case 26:ft||da(s,r),za(n,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ft||da(s,r);var d=zt,m=Zn;Vi(s.type)&&(zt=s.stateNode,Zn=!1),za(n,r,s),$l(s.stateNode),zt=d,Zn=m;break;case 5:ft||da(s,r);case 6:if(d=zt,m=Zn,zt=null,za(n,r,s),zt=d,Zn=m,zt!==null)if(Zn)try{(zt.nodeType===9?zt.body:zt.nodeName==="HTML"?zt.ownerDocument.body:zt).removeChild(s.stateNode)}catch(w){Mt(s,r,w)}else try{zt.removeChild(s.stateNode)}catch(w){Mt(s,r,w)}break;case 18:zt!==null&&(Zn?(n=zt,Ou(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),Xl(n)):Ou(zt,s.stateNode));break;case 4:d=zt,m=Zn,zt=s.stateNode.containerInfo,Zn=!0,za(n,r,s),zt=d,Zn=m;break;case 0:case 11:case 14:case 15:ft||hr(2,s,r),ft||hr(4,s,r),za(n,r,s);break;case 1:ft||(da(s,r),d=s.stateNode,typeof d.componentWillUnmount=="function"&&Nf(s,r,d)),za(n,r,s);break;case 21:za(n,r,s);break;case 22:ft=(d=ft)||s.memoizedState!==null,za(n,r,s),ft=d;break;default:za(n,r,s)}}function Bp(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Xl(n)}catch(s){Mt(r,r.return,s)}}function ig(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new zp),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new zp),r;default:throw Error(a(435,n.tag))}}function Bf(n,r){var s=ig(n);r.forEach(function(d){var m=cg.bind(null,n,d);s.has(d)||(s.add(d),d.then(m,m))})}function hi(n,r){var s=r.deletions;if(s!==null)for(var d=0;d<s.length;d++){var m=s[d],w=n,A=r,D=A;e:for(;D!==null;){switch(D.tag){case 27:if(Vi(D.type)){zt=D.stateNode,Zn=!1;break e}break;case 5:zt=D.stateNode,Zn=!1;break e;case 3:case 4:zt=D.stateNode.containerInfo,Zn=!0;break e}D=D.return}if(zt===null)throw Error(a(160));Np(w,A,m),zt=null,Zn=!1,w=m.alternate,w!==null&&(w.return=null),m.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)If(r,n),r=r.sibling}var ki=null;function If(n,r){var s=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:hi(r,n),Xn(n),d&4&&(hr(3,n,n.return),jl(3,n),hr(5,n,n.return));break;case 1:hi(r,n),Xn(n),d&512&&(ft||s===null||da(s,s.return)),d&64&&fa&&(n=n.updateQueue,n!==null&&(d=n.callbacks,d!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?d:s.concat(d))));break;case 26:var m=ki;if(hi(r,n),Xn(n),d&512&&(ft||s===null||da(s,s.return)),d&4){var w=s!==null?s.memoizedState:null;if(d=n.memoizedState,s===null)if(d===null)if(n.stateNode===null){e:{d=n.type,s=n.memoizedProps,m=m.ownerDocument||m;t:switch(d){case"title":w=m.getElementsByTagName("title")[0],(!w||w[No]||w[ln]||w.namespaceURI==="http://www.w3.org/2000/svg"||w.hasAttribute("itemprop"))&&(w=m.createElement(d),m.head.insertBefore(w,m.querySelector("head > title"))),tn(w,d,s),w[ln]=n,cn(w),d=w;break e;case"link":var A=O1("link","href",m).get(d+(s.href||""));if(A){for(var D=0;D<A.length;D++)if(w=A[D],w.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&w.getAttribute("rel")===(s.rel==null?null:s.rel)&&w.getAttribute("title")===(s.title==null?null:s.title)&&w.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){A.splice(D,1);break t}}w=m.createElement(d),tn(w,d,s),m.head.appendChild(w);break;case"meta":if(A=O1("meta","content",m).get(d+(s.content||""))){for(D=0;D<A.length;D++)if(w=A[D],w.getAttribute("content")===(s.content==null?null:""+s.content)&&w.getAttribute("name")===(s.name==null?null:s.name)&&w.getAttribute("property")===(s.property==null?null:s.property)&&w.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&w.getAttribute("charset")===(s.charSet==null?null:s.charSet)){A.splice(D,1);break t}}w=m.createElement(d),tn(w,d,s),m.head.appendChild(w);break;default:throw Error(a(468,d))}w[ln]=n,cn(w),d=w}n.stateNode=d}else L1(m,n.type,n.stateNode);else n.stateNode=R1(m,d,n.memoizedProps);else w!==d?(w===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):w.count--,d===null?L1(m,n.type,n.stateNode):R1(m,d,n.memoizedProps)):d===null&&n.stateNode!==null&&gu(n,n.memoizedProps,s.memoizedProps)}break;case 27:hi(r,n),Xn(n),d&512&&(ft||s===null||da(s,s.return)),s!==null&&d&4&&gu(n,n.memoizedProps,s.memoizedProps);break;case 5:if(hi(r,n),Xn(n),d&512&&(ft||s===null||da(s,s.return)),n.flags&32){m=n.stateNode;try{Ka(m,"")}catch(te){Mt(n,n.return,te)}}d&4&&n.stateNode!=null&&(m=n.memoizedProps,gu(n,m,s!==null?s.memoizedProps:m)),d&1024&&(Va=!0);break;case 6:if(hi(r,n),Xn(n),d&4){if(n.stateNode===null)throw Error(a(162));d=n.memoizedProps,s=n.stateNode;try{s.nodeValue=d}catch(te){Mt(n,n.return,te)}}break;case 3:if(yo=null,m=ki,ki=Ie(r.containerInfo),hi(r,n),ki=m,Xn(n),d&4&&s!==null&&s.memoizedState.isDehydrated)try{Xl(r.containerInfo)}catch(te){Mt(n,n.return,te)}Va&&(Va=!1,Ip(n));break;case 4:d=ki,ki=Ie(n.stateNode.containerInfo),hi(r,n),Xn(n),ki=d;break;case 12:hi(r,n),Xn(n);break;case 13:hi(r,n),Xn(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Wf=on()),d&4&&(d=n.updateQueue,d!==null&&(n.updateQueue=null,Bf(n,d)));break;case 22:m=n.memoizedState!==null;var $=s!==null&&s.memoizedState!==null,ee=fa,ce=ft;if(fa=ee||m,ft=ce||$,hi(r,n),ft=ce,fa=ee,Xn(n),d&8192)e:for(r=n.stateNode,r._visibility=m?r._visibility&-2:r._visibility|1,m&&(s===null||$||fa||ft||cs(n)),s=null,r=n;;){if(r.tag===5||r.tag===26){if(s===null){$=s=r;try{if(w=$.stateNode,m)A=w.style,typeof A.setProperty=="function"?A.setProperty("display","none","important"):A.display="none";else{D=$.stateNode;var pe=$.memoizedProps.style,ne=pe!=null&&pe.hasOwnProperty("display")?pe.display:null;D.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(te){Mt($,$.return,te)}}}else if(r.tag===6){if(s===null){$=r;try{$.stateNode.nodeValue=m?"":$.memoizedProps}catch(te){Mt($,$.return,te)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}d&4&&(d=n.updateQueue,d!==null&&(s=d.retryQueue,s!==null&&(d.retryQueue=null,Bf(n,s))));break;case 19:hi(r,n),Xn(n),d&4&&(d=n.updateQueue,d!==null&&(n.updateQueue=null,Bf(n,d)));break;case 30:break;case 21:break;default:hi(r,n),Xn(n)}}function Xn(n){var r=n.flags;if(r&2){try{for(var s,d=n.return;d!==null;){if(no(d)){s=d;break}d=d.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var m=s.stateNode,w=Rl(n);Ol(n,w,m);break;case 5:var A=s.stateNode;s.flags&32&&(Ka(A,""),s.flags&=-33);var D=Rl(n);Ol(n,D,A);break;case 3:case 4:var $=s.stateNode.containerInfo,ee=Rl(n);xu(n,ee,$);break;default:throw Error(a(161))}}catch(ce){Mt(n,n.return,ce)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Ip(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Ip(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function pr(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Hp(n,r.alternate,r),r=r.sibling}function cs(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:hr(4,r,r.return),cs(r);break;case 1:da(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Nf(r,r.return,s),cs(r);break;case 27:$l(r.stateNode);case 26:case 5:da(r,r.return),cs(r);break;case 22:r.memoizedState===null&&cs(r);break;case 30:cs(r);break;default:cs(r)}n=n.sibling}}function Ha(n,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var d=r.alternate,m=n,w=r,A=w.flags;switch(w.tag){case 0:case 11:case 15:Ha(m,w,s),jl(4,w);break;case 1:if(Ha(m,w,s),d=w,m=d.stateNode,typeof m.componentDidMount=="function")try{m.componentDidMount()}catch(ee){Mt(d,d.return,ee)}if(d=w,m=d.updateQueue,m!==null){var D=d.stateNode;try{var $=m.shared.hiddenCallbacks;if($!==null)for(m.shared.hiddenCallbacks=null,m=0;m<$.length;m++)sp($[m],D)}catch(ee){Mt(d,d.return,ee)}}s&&A&64&&Vp(w),to(w,w.return);break;case 27:Ll(w);case 26:case 5:Ha(m,w,s),s&&d===null&&A&4&&mu(w),to(w,w.return);break;case 12:Ha(m,w,s);break;case 13:Ha(m,w,s),s&&A&4&&Bp(m,w);break;case 22:w.memoizedState===null&&Ha(m,w,s),to(w,w.return);break;case 30:break;default:Ha(m,w,s)}r=r.sibling}}function $f(n,r){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&il(s))}function Uf(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&il(n))}function ha(n,r,s,d){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)$p(n,r,s,d),r=r.sibling}function $p(n,r,s,d){var m=r.flags;switch(r.tag){case 0:case 11:case 15:ha(n,r,s,d),m&2048&&jl(9,r);break;case 1:ha(n,r,s,d);break;case 3:ha(n,r,s,d),m&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&il(n)));break;case 12:if(m&2048){ha(n,r,s,d),n=r.stateNode;try{var w=r.memoizedProps,A=w.id,D=w.onPostCommit;typeof D=="function"&&D(A,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch($){Mt(r,r.return,$)}}else ha(n,r,s,d);break;case 13:ha(n,r,s,d);break;case 23:break;case 22:w=r.stateNode,A=r.alternate,r.memoizedState!==null?w._visibility&2?ha(n,r,s,d):_l(n,r):w._visibility&2?ha(n,r,s,d):(w._visibility|=2,io(n,r,s,d,(r.subtreeFlags&10256)!==0)),m&2048&&$f(A,r);break;case 24:ha(n,r,s,d),m&2048&&Uf(r.alternate,r);break;default:ha(n,r,s,d)}}function io(n,r,s,d,m){for(m=m&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var w=n,A=r,D=s,$=d,ee=A.flags;switch(A.tag){case 0:case 11:case 15:io(w,A,D,$,m),jl(8,A);break;case 23:break;case 22:var ce=A.stateNode;A.memoizedState!==null?ce._visibility&2?io(w,A,D,$,m):_l(w,A):(ce._visibility|=2,io(w,A,D,$,m)),m&&ee&2048&&$f(A.alternate,A);break;case 24:io(w,A,D,$,m),m&&ee&2048&&Uf(A.alternate,A);break;default:io(w,A,D,$,m)}r=r.sibling}}function _l(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=n,d=r,m=d.flags;switch(d.tag){case 22:_l(s,d),m&2048&&$f(d.alternate,d);break;case 24:_l(s,d),m&2048&&Uf(d.alternate,d);break;default:_l(s,d)}r=r.sibling}}var bn=8192;function ao(n){if(n.subtreeFlags&bn)for(n=n.child;n!==null;)Up(n),n=n.sibling}function Up(n){switch(n.tag){case 26:ao(n),n.flags&bn&&n.memoizedState!==null&&jg(ki,n.memoizedState,n.memoizedProps);break;case 5:ao(n);break;case 3:case 4:var r=ki;ki=Ie(n.stateNode.containerInfo),ao(n),ki=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=bn,bn=16777216,ao(n),bn=r):ao(n));break;default:ao(n)}}function Gp(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function ro(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var d=r[s];Jt=d,qp(d,n)}Gp(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fp(n),n=n.sibling}function Fp(n){switch(n.tag){case 0:case 11:case 15:ro(n),n.flags&2048&&hr(9,n,n.return);break;case 3:ro(n);break;case 12:ro(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,vu(n)):ro(n);break;default:ro(n)}}function vu(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var d=r[s];Jt=d,qp(d,n)}Gp(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:hr(8,r,r.return),vu(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,vu(r));break;default:vu(r)}n=n.sibling}}function qp(n,r){for(;Jt!==null;){var s=Jt;switch(s.tag){case 0:case 11:case 15:hr(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var d=s.memoizedState.cachePool.pool;d!=null&&d.refCount++}break;case 24:il(s.memoizedState.cache)}if(d=s.child,d!==null)d.return=s,Jt=d;else e:for(s=n;Jt!==null;){d=Jt;var m=d.sibling,w=d.return;if(Pp(d),d===s){Jt=null;break e}if(m!==null){m.return=w,Jt=m;break e}Jt=w}}}var ag={getCacheForType:function(n){var r=Bt(Et),s=r.data.get(n);return s===void 0&&(s=n(),r.data.set(n,s)),s}},Gf=typeof WeakMap=="function"?WeakMap:Map,mt=0,Ot=null,Ke=null,at=0,gt=0,pi=null,mr=!1,so=!1,Ff=!1,Pa=0,$t=0,gr=0,us=0,qf=0,Di=0,oo=0,kl=null,Kn=null,Yf=!1,Wf=0,lo=1/0,Dl=null,xr=null,vn=0,vr=null,co=null,uo=0,Zf=0,Xf=null,Yp=null,fo=0,Kf=null;function Sn(){if((mt&2)!==0&&at!==0)return at&-at;if(X.T!==null){var n=qs;return n!==0?n:Eu()}return yh()}function Wp(){Di===0&&(Di=(at&536870912)===0||Je?mh():536870912);var n=fi.current;return n!==null&&(n.flags|=32),Di}function mi(n,r,s){(n===Ot&&(gt===2||gt===9)||n.cancelPendingCommit!==null)&&(ho(n,0),yr(n,at,Di,!1)),Cs(n,s),((mt&2)===0||n!==Ot)&&(n===Ot&&((mt&2)===0&&(us|=s),$t===4&&yr(n,at,Di,!1)),pa(n))}function Zp(n,r,s){if((mt&6)!==0)throw Error(a(327));var d=!s&&(r&124)===0&&(r&n.expiredLanes)===0||Nr(n,r),m=d?og(n,r):e0(n,r,!0),w=d;do{if(m===0){so&&!d&&yr(n,r,0,!1);break}else{if(s=n.current.alternate,w&&!rg(s)){m=e0(n,r,!1),w=!1;continue}if(m===2){if(w=r,n.errorRecoveryDisabledLanes&w)var A=0;else A=n.pendingLanes&-536870913,A=A!==0?A:A&536870912?536870912:0;if(A!==0){r=A;e:{var D=n;m=kl;var $=D.current.memoizedState.isDehydrated;if($&&(ho(D,A).flags|=256),A=e0(D,A,!1),A!==2){if(Ff&&!$){D.errorRecoveryDisabledLanes|=w,us|=w,m=4;break e}w=Kn,Kn=m,w!==null&&(Kn===null?Kn=w:Kn.push.apply(Kn,w))}m=A}if(w=!1,m!==2)continue}}if(m===1){ho(n,0),yr(n,r,0,!0);break}e:{switch(d=n,w=m,w){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:yr(d,r,Di,!mr);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(m=Wf+300-on(),10<m)){if(yr(d,r,Di,!mr),Ss(d,0,!0)!==0)break e;d.timeoutHandle=y1(Xp.bind(null,d,s,Kn,Dl,Yf,r,Di,us,oo,mr,w,2,-0,0),m);break e}Xp(d,s,Kn,Dl,Yf,r,Di,us,oo,mr,w,0,-0,0)}}break}while(!0);pa(n)}function Xp(n,r,s,d,m,w,A,D,$,ee,ce,pe,ne,te){if(n.timeoutHandle=-1,pe=r.subtreeFlags,(pe&8192||(pe&16785408)===16785408)&&(fn={stylesheets:null,count:0,unsuspend:Mg},Up(r),pe=Rg(),pe!==null)){n.cancelPendingCommit=pe(Vl.bind(null,n,r,w,s,d,m,A,D,$,ce,1,ne,te)),yr(n,w,A,!ee);return}Vl(n,r,w,s,d,m,A,D,$)}function rg(n){for(var r=n;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var d=0;d<s.length;d++){var m=s[d],w=m.getSnapshot;m=m.value;try{if(!li(w(),m))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function yr(n,r,s,d){r&=~qf,r&=~us,n.suspendedLanes|=r,n.pingedLanes&=~r,d&&(n.warmLanes|=r),d=n.expirationTimes;for(var m=r;0<m;){var w=31-jn(m),A=1<<w;d[w]=-1,m&=~A}s!==0&&xh(n,s,r)}function yu(){return(mt&6)===0?(Pl(0),!1):!0}function Qf(){if(Ke!==null){if(gt===0)var n=Ke.return;else n=Ke,k=sr=null,Gc(n),Qt=null,Wn=0,n=Ke;for(;n!==null;)Dp(n.alternate,n),n=n.return;Ke=null}}function ho(n,r){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,vg(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Qf(),Ot=n,Ke=s=On(n.current,null),at=r,gt=0,pi=null,mr=!1,so=Nr(n,r),Ff=!1,oo=Di=qf=us=gr=$t=0,Kn=kl=null,Yf=!1,(r&8)!==0&&(r|=r&32);var d=n.entangledLanes;if(d!==0)for(n=n.entanglements,d&=r;0<d;){var m=31-jn(d),w=1<<m;r|=n[m],d&=~w}return Pa=r,Ur(),s}function Kp(n,r){Fe=null,X.H=vl,r===Ln||r===Ic?(r=ap(),gt=3):r===np?(r=ap(),gt=4):gt=r===jp?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,pi=r,Ke===null&&($t=1,Cl(n,Rn(r,n.current)))}function Qp(){var n=X.H;return X.H=vl,n===null?vl:n}function Jp(){var n=X.A;return X.A=ag,n}function Jf(){$t=4,mr||(at&4194048)!==at&&fi.current!==null||(so=!0),(gr&134217727)===0&&(us&134217727)===0||Ot===null||yr(Ot,at,Di,!1)}function e0(n,r,s){var d=mt;mt|=2;var m=Qp(),w=Jp();(Ot!==n||at!==r)&&(Dl=null,ho(n,r)),r=!1;var A=$t;e:do try{if(gt!==0&&Ke!==null){var D=Ke,$=pi;switch(gt){case 8:Qf(),A=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(r=!0);var ee=gt;if(gt=0,pi=null,po(n,D,$,ee),s&&so){A=0;break e}break;default:ee=gt,gt=0,pi=null,po(n,D,$,ee)}}sg(),A=$t;break}catch(ce){Kp(n,ce)}while(!0);return r&&n.shellSuspendCounter++,k=sr=null,mt=d,X.H=m,X.A=w,Ke===null&&(Ot=null,at=0,Ur()),A}function sg(){for(;Ke!==null;)t0(Ke)}function og(n,r){var s=mt;mt|=2;var d=Qp(),m=Jp();Ot!==n||at!==r?(Dl=null,lo=on()+500,ho(n,r)):so=Nr(n,r);e:do try{if(gt!==0&&Ke!==null){r=Ke;var w=pi;t:switch(gt){case 1:gt=0,pi=null,po(n,r,w,1);break;case 2:case 9:if(ip(w)){gt=0,pi=null,t1(r);break}r=function(){gt!==2&&gt!==9||Ot!==n||(gt=7),pa(n)},w.then(r,r);break e;case 3:gt=7;break e;case 4:gt=5;break e;case 7:ip(w)?(gt=0,pi=null,t1(r)):(gt=0,pi=null,po(n,r,w,7));break;case 5:var A=null;switch(Ke.tag){case 26:A=Ke.memoizedState;case 5:case 27:var D=Ke;if(!A||nn(A)){gt=0,pi=null;var $=D.sibling;if($!==null)Ke=$;else{var ee=D.return;ee!==null?(Ke=ee,wu(ee)):Ke=null}break t}}gt=0,pi=null,po(n,r,w,5);break;case 6:gt=0,pi=null,po(n,r,w,6);break;case 8:Qf(),$t=6;break e;default:throw Error(a(462))}}e1();break}catch(ce){Kp(n,ce)}while(!0);return k=sr=null,X.H=d,X.A=m,mt=s,Ke!==null?0:(Ot=null,at=0,Ur(),$t)}function e1(){for(;Ke!==null&&!Do();)t0(Ke)}function t0(n){var r=fu(n.alternate,n,Pa);n.memoizedProps=n.pendingProps,r===null?wu(n):Ke=r}function t1(n){var r=n,s=r.alternate;switch(r.tag){case 15:case 0:r=uu(s,r,r.pendingProps,r.type,void 0,at);break;case 11:r=uu(s,r,r.pendingProps,r.type.render,r.ref,at);break;case 5:Gc(r);default:Dp(s,r),r=Ke=Ko(r,Pa),r=fu(s,r,Pa)}n.memoizedProps=n.pendingProps,r===null?wu(n):Ke=r}function po(n,r,s,d){k=sr=null,Gc(r),Qt=null,Wn=0;var m=r.return;try{if(Mp(n,m,r,s,at)){$t=1,Cl(n,Rn(s,n.current)),Ke=null;return}}catch(w){if(m!==null)throw Ke=m,w;$t=1,Cl(n,Rn(s,n.current)),Ke=null;return}r.flags&32768?(Je||d===1?n=!0:so||(at&536870912)!==0?n=!1:(mr=n=!0,(d===2||d===9||d===3||d===6)&&(d=fi.current,d!==null&&d.tag===13&&(d.flags|=16384))),n1(r,n)):wu(r)}function wu(n){var r=n;do{if((r.flags&32768)!==0){n1(r,mr);return}n=r.return;var s=_p(r.alternate,r,Pa);if(s!==null){Ke=s;return}if(r=r.sibling,r!==null){Ke=r;return}Ke=r=n}while(r!==null);$t===0&&($t=5)}function n1(n,r){do{var s=kp(n.alternate,n);if(s!==null){s.flags&=32767,Ke=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(n=n.sibling,n!==null)){Ke=n;return}Ke=n=s}while(n!==null);$t=6,Ke=null}function Vl(n,r,s,d,m,w,A,D,$){n.cancelPendingCommit=null;do bu();while(vn!==0);if((mt&6)!==0)throw Error(a(327));if(r!==null){if(r===n.current)throw Error(a(177));if(w=r.lanes|r.childLanes,w|=nf,L2(n,s,w,A,D,$),n===Ot&&(Ke=Ot=null,at=0),co=r,vr=n,uo=s,Zf=w,Xf=m,Yp=d,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,u1(Pn,function(){return o1(),null})):(n.callbackNode=null,n.callbackPriority=0),d=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||d){d=X.T,X.T=null,m=le.p,le.p=2,A=mt,mt|=4;try{ng(n,r,s)}finally{mt=A,le.p=m,X.T=d}}vn=1,i1(),a1(),r1()}}function i1(){if(vn===1){vn=0;var n=vr,r=co,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=X.T,X.T=null;var d=le.p;le.p=2;var m=mt;mt|=4;try{If(r,n);var w=ju,A=Yh(n.containerInfo),D=w.focusedElem,$=w.selectionRange;if(A!==D&&D&&D.ownerDocument&&qh(D.ownerDocument.documentElement,D)){if($!==null&&ef(D)){var ee=$.start,ce=$.end;if(ce===void 0&&(ce=ee),"selectionStart"in D)D.selectionStart=ee,D.selectionEnd=Math.min(ce,D.value.length);else{var pe=D.ownerDocument||document,ne=pe&&pe.defaultView||window;if(ne.getSelection){var te=ne.getSelection(),De=D.textContent.length,ke=Math.min($.start,De),St=$.end===void 0?ke:Math.min($.end,De);!te.extend&&ke>St&&(A=St,St=ke,ke=A);var Z=Jd(D,ke),F=Jd(D,St);if(Z&&F&&(te.rangeCount!==1||te.anchorNode!==Z.node||te.anchorOffset!==Z.offset||te.focusNode!==F.node||te.focusOffset!==F.offset)){var J=pe.createRange();J.setStart(Z.node,Z.offset),te.removeAllRanges(),ke>St?(te.addRange(J),te.extend(F.node,F.offset)):(J.setEnd(F.node,F.offset),te.addRange(J))}}}}for(pe=[],te=D;te=te.parentNode;)te.nodeType===1&&pe.push({element:te,left:te.scrollLeft,top:te.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<pe.length;D++){var fe=pe[D];fe.element.scrollLeft=fe.left,fe.element.scrollTop=fe.top}}Vu=!!Xi,ju=Xi=null}finally{mt=m,le.p=d,X.T=s}}n.current=r,vn=2}}function a1(){if(vn===2){vn=0;var n=vr,r=co,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=X.T,X.T=null;var d=le.p;le.p=2;var m=mt;mt|=4;try{Hp(n,r.alternate,r)}finally{mt=m,le.p=d,X.T=s}}vn=3}}function r1(){if(vn===4||vn===3){vn=0,j2();var n=vr,r=co,s=uo,d=Yp;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?vn=5:(vn=0,co=vr=null,s1(n,n.pendingLanes));var m=n.pendingLanes;if(m===0&&(xr=null),dc(s),r=r.stateNode,xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Po,r,void 0,(r.current.flags&128)===128)}catch{}if(d!==null){r=X.T,m=le.p,le.p=2,X.T=null;try{for(var w=n.onRecoverableError,A=0;A<d.length;A++){var D=d[A];w(D.value,{componentStack:D.stack})}}finally{X.T=r,le.p=m}}(uo&3)!==0&&bu(),pa(n),m=n.pendingLanes,(s&4194090)!==0&&(m&42)!==0?n===Kf?fo++:(fo=0,Kf=n):fo=0,Pl(0)}}function s1(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,il(r)))}function bu(n){return i1(),a1(),r1(),o1()}function o1(){if(vn!==5)return!1;var n=vr,r=Zf;Zf=0;var s=dc(uo),d=X.T,m=le.p;try{le.p=32>s?32:s,X.T=null,s=Xf,Xf=null;var w=vr,A=uo;if(vn=0,co=vr=null,uo=0,(mt&6)!==0)throw Error(a(331));var D=mt;if(mt|=4,Fp(w.current),$p(w,w.current,A,s),mt=D,Pl(0,!1),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Po,w)}catch{}return!0}finally{le.p=m,X.T=d,s1(n,r)}}function l1(n,r,s){r=Rn(s,r),r=su(n.stateNode,r,2),n=ja(n,r,2),n!==null&&(Cs(n,2),pa(n))}function Mt(n,r,s){if(n.tag===3)l1(n,n,s);else for(;r!==null;){if(r.tag===3){l1(r,n,s);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(xr===null||!xr.has(d))){n=Rn(s,n),s=Df(2),d=ja(r,s,2),d!==null&&(Ap(s,d,r,n),Cs(d,2),pa(d));break}}r=r.return}}function n0(n,r,s){var d=n.pingCache;if(d===null){d=n.pingCache=new Gf;var m=new Set;d.set(r,m)}else m=d.get(r),m===void 0&&(m=new Set,d.set(r,m));m.has(s)||(Ff=!0,m.add(s),n=lg.bind(null,n,r,s),r.then(n,n))}function lg(n,r,s){var d=n.pingCache;d!==null&&d.delete(r),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Ot===n&&(at&s)===s&&($t===4||$t===3&&(at&62914560)===at&&300>on()-Wf?(mt&2)===0&&ho(n,0):qf|=s,oo===at&&(oo=0)),pa(n)}function c1(n,r){r===0&&(r=gh()),n=Gr(n,r),n!==null&&(Cs(n,r),pa(n))}function Su(n){var r=n.memoizedState,s=0;r!==null&&(s=r.retryLane),c1(n,s)}function cg(n,r){var s=0;switch(n.tag){case 13:var d=n.stateNode,m=n.memoizedState;m!==null&&(s=m.retryLane);break;case 19:d=n.stateNode;break;case 22:d=n.stateNode._retryCache;break;default:throw Error(a(314))}d!==null&&d.delete(r),c1(n,s)}function u1(n,r){return cc(n,r)}var zl=null,wr=null,Cu=!1,Hl=!1,Tu=!1,br=0;function pa(n){n!==wr&&n.next===null&&(wr===null?zl=wr=n:wr=wr.next=n),Hl=!0,Cu||(Cu=!0,i0())}function Pl(n,r){if(!Tu&&Hl){Tu=!0;do for(var s=!1,d=zl;d!==null;){if(n!==0){var m=d.pendingLanes;if(m===0)var w=0;else{var A=d.suspendedLanes,D=d.pingedLanes;w=(1<<31-jn(42|n)+1)-1,w&=m&~(A&~D),w=w&201326741?w&201326741|1:w?w|2:0}w!==0&&(s=!0,f1(d,w))}else w=at,w=Ss(d,d===Ot?w:0,d.cancelPendingCommit!==null||d.timeoutHandle!==-1),(w&3)===0||Nr(d,w)||(s=!0,f1(d,w));d=d.next}while(s);Tu=!1}}function ug(){Nl()}function Nl(){Hl=Cu=!1;var n=0;br!==0&&(xg()&&(n=br),br=0);for(var r=on(),s=null,d=zl;d!==null;){var m=d.next,w=Bl(d,r);w===0?(d.next=null,s===null?zl=m:s.next=m,m===null&&(wr=s)):(s=d,(n!==0||(w&3)!==0)&&(Hl=!0)),d=m}Pl(n)}function Bl(n,r){for(var s=n.suspendedLanes,d=n.pingedLanes,m=n.expirationTimes,w=n.pendingLanes&-62914561;0<w;){var A=31-jn(w),D=1<<A,$=m[A];$===-1?((D&s)===0||(D&d)!==0)&&(m[A]=O2(D,r)):$<=r&&(n.expiredLanes|=D),w&=~D}if(r=Ot,s=at,s=Ss(n,n===r?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),d=n.callbackNode,s===0||n===r&&(gt===2||gt===9)||n.cancelPendingCommit!==null)return d!==null&&d!==null&&ai(d),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Nr(n,s)){if(r=s&-s,r===n.callbackPriority)return r;switch(d!==null&&ai(d),dc(s)){case 2:case 8:s=ys;break;case 32:s=Pn;break;case 268435456:s=zo;break;default:s=Pn}return d=d1.bind(null,n),s=cc(s,d),n.callbackPriority=r,n.callbackNode=s,r}return d!==null&&d!==null&&ai(d),n.callbackPriority=2,n.callbackNode=null,2}function d1(n,r){if(vn!==0&&vn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(bu()&&n.callbackNode!==s)return null;var d=at;return d=Ss(n,n===Ot?d:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),d===0?null:(Zp(n,d,r),Bl(n,on()),n.callbackNode!=null&&n.callbackNode===s?d1.bind(null,n):null)}function f1(n,r){if(bu())return null;Zp(n,r,!0)}function i0(){yg(function(){(mt&6)!==0?cc(ph,ug):Nl()})}function Eu(){return br===0&&(br=mh()),br}function h1(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:$o(""+n)}function p1(n,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,n.id&&s.setAttribute("form",n.id),r.parentNode.insertBefore(s,r),n=new FormData(n),s.parentNode.removeChild(s),n}function dg(n,r,s,d,m){if(r==="submit"&&s&&s.stateNode===m){var w=h1((m[Nn]||null).action),A=d.submitter;A&&(r=(r=A[Nn]||null)?h1(r.formAction):A.getAttribute("formAction"),r!==null&&(w=r,A=null));var D=new bc("action","action",null,d,m);n.push({event:D,listeners:[{instance:null,listener:function(){if(d.defaultPrevented){if(br!==0){var $=A?p1(m,A):new FormData(m);gl(s,{pending:!0,data:$,method:m.method,action:w},null,$)}}else typeof w=="function"&&(D.preventDefault(),$=A?p1(m,A):new FormData(m),gl(s,{pending:!0,data:$,method:m.method,action:w},w,$))},currentTarget:m}]})}}for(var a0=0;a0<ut.length;a0++){var r0=ut[a0],fg=r0.toLowerCase(),hg=r0[0].toUpperCase()+r0.slice(1);Ui(fg,"on"+hg)}Ui(kc,"onAnimationEnd"),Ui(Wh,"onAnimationIteration"),Ui(ci,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(Dc,"onTransitionRun"),Ui(Z2,"onTransitionStart"),Ui(Is,"onTransitionCancel"),Ui(Yo,"onTransitionEnd"),js("onMouseEnter",["mouseout","mouseover"]),js("onMouseLeave",["mouseout","mouseover"]),js("onPointerEnter",["pointerout","pointerover"]),js("onPointerLeave",["pointerout","pointerover"]),Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Br("onBeforeInput",["compositionend","keypress","textInput","paste"]),Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Il));function m1(n,r){r=(r&4)!==0;for(var s=0;s<n.length;s++){var d=n[s],m=d.event;d=d.listeners;e:{var w=void 0;if(r)for(var A=d.length-1;0<=A;A--){var D=d[A],$=D.instance,ee=D.currentTarget;if(D=D.listener,$!==w&&m.isPropagationStopped())break e;w=D,m.currentTarget=ee;try{w(m)}catch(ce){os(ce)}m.currentTarget=null,w=$}else for(A=0;A<d.length;A++){if(D=d[A],$=D.instance,ee=D.currentTarget,D=D.listener,$!==w&&m.isPropagationStopped())break e;w=D,m.currentTarget=ee;try{w(m)}catch(ce){os(ce)}m.currentTarget=null,w=$}}}}function Qe(n,r){var s=r[Md];s===void 0&&(s=r[Md]=new Set);var d=n+"__bubble";s.has(d)||(g1(r,n,2,!1),s.add(d))}function s0(n,r,s){var d=0;r&&(d|=4),g1(s,n,d,r)}var Qn="_reactListening"+Math.random().toString(36).slice(2);function o0(n){if(!n[Qn]){n[Qn]=!0,bh.forEach(function(s){s!=="selectionchange"&&(pg.has(s)||s0(s,!1,n),s0(s,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Qn]||(r[Qn]=!0,s0("selectionchange",!1,r))}}function g1(n,r,s,d){switch(V1(r)){case 2:var m=_g;break;case 8:m=bo;break;default:m=x0}s=m.bind(null,r,s,n),m=void 0,!Go||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),d?m!==void 0?n.addEventListener(r,s,{capture:!0,passive:m}):n.addEventListener(r,s,!0):m!==void 0?n.addEventListener(r,s,{passive:m}):n.addEventListener(r,s,!1)}function Na(n,r,s,d,m){var w=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var A=d.tag;if(A===3||A===4){var D=d.stateNode.containerInfo;if(D===m)break;if(A===4)for(A=d.return;A!==null;){var $=A.tag;if(($===3||$===4)&&A.stateNode.containerInfo===m)return;A=A.return}for(;D!==null;){if(A=Ts(D),A===null)return;if($=A.tag,$===5||$===6||$===26||$===27){d=w=A;continue e}D=D.parentNode}}d=d.return}Mh(function(){var ee=w,ce=Id(s),pe=[];e:{var ne=Wo.get(n);if(ne!==void 0){var te=bc,De=n;switch(n){case"keypress":if(wt(s)===0)break e;case"keydown":case"keyup":te=Yd;break;case"focusin":De="focus",te=Cc;break;case"focusout":De="blur",te=Cc;break;case"beforeblur":case"afterblur":te=Cc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=B2;break;case kc:case Wh:case ci:te=_h;break;case Yo:te=I2;break;case"scroll":case"scrollend":te=H2;break;case"wheel":te=U2;break;case"copy":case"cut":case"paste":te=Dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=Ta;break;case"toggle":case"beforetoggle":te=Ec}var ke=(r&4)!==0,St=!ke&&(n==="scroll"||n==="scrollend"),Z=ke?ne!==null?ne+"Capture":null:ne;ke=[];for(var F=ee,J;F!==null;){var fe=F;if(J=fe.stateNode,fe=fe.tag,fe!==5&&fe!==26&&fe!==27||J===null||Z===null||(fe=Uo(F,Z),fe!=null&&ke.push(Ne(F,fe,J))),St)break;F=F.return}0<ke.length&&(ne=new te(ne,De,null,s,ce),pe.push({event:ne,listeners:ke}))}}if((r&7)===0){e:{if(ne=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",ne&&s!==yc&&(De=s.relatedTarget||s.fromElement)&&(Ts(De)||De[Xa]))break e;if((te||ne)&&(ne=ce.window===ce?ce:(ne=ce.ownerDocument)?ne.defaultView||ne.parentWindow:window,te?(De=s.relatedTarget||s.toElement,te=ee,De=De?Ts(De):null,De!==null&&(St=c(De),ke=De.tag,De!==St||ke!==5&&ke!==27&&ke!==6)&&(De=null)):(te=null,De=ee),te!==De)){if(ke=Ja,fe="onMouseLeave",Z="onMouseEnter",F="mouse",(n==="pointerout"||n==="pointerover")&&(ke=Ta,fe="onPointerLeave",Z="onPointerEnter",F="pointer"),St=te==null?ne:As(te),J=De==null?ne:As(De),ne=new ke(fe,F+"leave",te,s,ce),ne.target=St,ne.relatedTarget=J,fe=null,Ts(ce)===ee&&(ke=new ke(Z,F+"enter",De,s,ce),ke.target=J,ke.relatedTarget=St,fe=ke),St=fe,te&&De)t:{for(ke=te,Z=De,F=0,J=ke;J;J=en(J))F++;for(J=0,fe=Z;fe;fe=en(fe))J++;for(;0<F-J;)ke=en(ke),F--;for(;0<J-F;)Z=en(Z),J--;for(;F--;){if(ke===Z||Z!==null&&ke===Z.alternate)break t;ke=en(ke),Z=en(Z)}ke=null}else ke=null;te!==null&&Ut(pe,ne,te,ke,!1),De!==null&&St!==null&&Ut(pe,St,De,ke,!0)}}e:{if(ne=ee?As(ee):window,te=ne.nodeName&&ne.nodeName.toLowerCase(),te==="select"||te==="input"&&ne.type==="file")var Te=Ih;else if(Rc(ne))if($h)Te=q2;else{Te=nr;var We=Fh}else te=ne.nodeName,!te||te.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?ee&&Bd(ee.elementType)&&(Te=Ih):Te=_c;if(Te&&(Te=Te(n,ee))){Hs(pe,Te,s,ce);break e}We&&We(n,ne,ee),n==="focusout"&&ee&&ne.type==="number"&&ee.memoizedProps.value!=null&&Io(ne,"number",ne.value)}switch(We=ee?As(ee):window,n){case"focusin":(Rc(We)||We.contentEditable==="true")&&(Bs=We,ir=ee,q=null);break;case"focusout":q=ir=Bs=null;break;case"mousedown":oe=!0;break;case"contextmenu":case"mouseup":case"dragend":oe=!1,ae(pe,s,ce);break;case"selectionchange":if(W2)break;case"keydown":case"keyup":ae(pe,s,ce)}var je;if(Xd)e:{switch(n){case"compositionstart":var Ve="onCompositionStart";break e;case"compositionend":Ve="onCompositionEnd";break e;case"compositionupdate":Ve="onCompositionUpdate";break e}Ve=void 0}else er?Nh(n,s)&&(Ve="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(Ve="onCompositionStart");Ve&&(Ac&&s.locale!=="ko"&&(er||Ve!=="onCompositionStart"?Ve==="onCompositionEnd"&&er&&(je=jh()):(Qa=ce,Gd="value"in Qa?Qa.value:Qa.textContent,er=!0)),We=Au(ee,Ve),0<We.length&&(Ve=new In(Ve,n,null,s,ce),pe.push({event:Ve,listeners:We}),je?Ve.data=je:(je=jc(s),je!==null&&(Ve.data=je)))),(je=Ph?G2(n,s):Bh(n,s))&&(Ve=Au(ee,"onBeforeInput"),0<Ve.length&&(We=new In("onBeforeInput","beforeinput",null,s,ce),pe.push({event:We,listeners:Ve}),We.data=je)),dg(pe,n,ee,s,ce)}m1(pe,r)})}function Ne(n,r,s){return{instance:n,listener:r,currentTarget:s}}function Au(n,r){for(var s=r+"Capture",d=[];n!==null;){var m=n,w=m.stateNode;if(m=m.tag,m!==5&&m!==26&&m!==27||w===null||(m=Uo(n,s),m!=null&&d.unshift(Ne(n,m,w)),m=Uo(n,r),m!=null&&d.push(Ne(n,m,w))),n.tag===3)return d;n=n.return}return[]}function en(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Ut(n,r,s,d,m){for(var w=r._reactName,A=[];s!==null&&s!==d;){var D=s,$=D.alternate,ee=D.stateNode;if(D=D.tag,$!==null&&$===d)break;D!==5&&D!==26&&D!==27||ee===null||($=ee,m?(ee=Uo(s,w),ee!=null&&A.unshift(Ne(s,ee,$))):m||(ee=Uo(s,w),ee!=null&&A.push(Ne(s,ee,$)))),s=s.return}A.length!==0&&n.push({event:r,listeners:A})}var mg=/\r\n?/g,Sr=/\u0000|\uFFFD/g;function x1(n){return(typeof n=="string"?n:""+n).replace(mg,`
`).replace(Sr,"")}function v1(n,r){return r=x1(r),x1(n)===r}function Mu(){}function bt(n,r,s,d,m,w){switch(s){case"children":typeof d=="string"?r==="body"||r==="textarea"&&d===""||Ka(n,d):(typeof d=="number"||typeof d=="bigint")&&r!=="body"&&Ka(n,""+d);break;case"className":pc(n,"class",d);break;case"tabIndex":pc(n,"tabindex",d);break;case"dir":case"role":case"viewBox":case"width":case"height":pc(n,s,d);break;case"style":Nd(n,d,w);break;case"data":if(r!=="object"){pc(n,"data",d);break}case"src":case"href":if(d===""&&(r!=="a"||s!=="href")){n.removeAttribute(s);break}if(d==null||typeof d=="function"||typeof d=="symbol"||typeof d=="boolean"){n.removeAttribute(s);break}d=$o(""+d),n.setAttribute(s,d);break;case"action":case"formAction":if(typeof d=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof w=="function"&&(s==="formAction"?(r!=="input"&&bt(n,r,"name",m.name,m,null),bt(n,r,"formEncType",m.formEncType,m,null),bt(n,r,"formMethod",m.formMethod,m,null),bt(n,r,"formTarget",m.formTarget,m,null)):(bt(n,r,"encType",m.encType,m,null),bt(n,r,"method",m.method,m,null),bt(n,r,"target",m.target,m,null)));if(d==null||typeof d=="symbol"||typeof d=="boolean"){n.removeAttribute(s);break}d=$o(""+d),n.setAttribute(s,d);break;case"onClick":d!=null&&(n.onclick=Mu);break;case"onScroll":d!=null&&Qe("scroll",n);break;case"onScrollEnd":d!=null&&Qe("scrollend",n);break;case"dangerouslySetInnerHTML":if(d!=null){if(typeof d!="object"||!("__html"in d))throw Error(a(61));if(s=d.__html,s!=null){if(m.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=d&&typeof d!="function"&&typeof d!="symbol";break;case"muted":n.muted=d&&typeof d!="function"&&typeof d!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(d==null||typeof d=="function"||typeof d=="boolean"||typeof d=="symbol"){n.removeAttribute("xlink:href");break}s=$o(""+d),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":d!=null&&typeof d!="function"&&typeof d!="symbol"?n.setAttribute(s,""+d):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":d&&typeof d!="function"&&typeof d!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":d===!0?n.setAttribute(s,""):d!==!1&&d!=null&&typeof d!="function"&&typeof d!="symbol"?n.setAttribute(s,d):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":d!=null&&typeof d!="function"&&typeof d!="symbol"&&!isNaN(d)&&1<=d?n.setAttribute(s,d):n.removeAttribute(s);break;case"rowSpan":case"start":d==null||typeof d=="function"||typeof d=="symbol"||isNaN(d)?n.removeAttribute(s):n.setAttribute(s,d);break;case"popover":Qe("beforetoggle",n),Qe("toggle",n),hc(n,"popover",d);break;case"xlinkActuate":aa(n,"http://www.w3.org/1999/xlink","xlink:actuate",d);break;case"xlinkArcrole":aa(n,"http://www.w3.org/1999/xlink","xlink:arcrole",d);break;case"xlinkRole":aa(n,"http://www.w3.org/1999/xlink","xlink:role",d);break;case"xlinkShow":aa(n,"http://www.w3.org/1999/xlink","xlink:show",d);break;case"xlinkTitle":aa(n,"http://www.w3.org/1999/xlink","xlink:title",d);break;case"xlinkType":aa(n,"http://www.w3.org/1999/xlink","xlink:type",d);break;case"xmlBase":aa(n,"http://www.w3.org/XML/1998/namespace","xml:base",d);break;case"xmlLang":aa(n,"http://www.w3.org/XML/1998/namespace","xml:lang",d);break;case"xmlSpace":aa(n,"http://www.w3.org/XML/1998/namespace","xml:space",d);break;case"is":hc(n,"is",d);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Eh.get(s)||s,hc(n,s,d))}}function l0(n,r,s,d,m,w){switch(s){case"style":Nd(n,d,w);break;case"dangerouslySetInnerHTML":if(d!=null){if(typeof d!="object"||!("__html"in d))throw Error(a(61));if(s=d.__html,s!=null){if(m.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof d=="string"?Ka(n,d):(typeof d=="number"||typeof d=="bigint")&&Ka(n,""+d);break;case"onScroll":d!=null&&Qe("scroll",n);break;case"onScrollEnd":d!=null&&Qe("scrollend",n);break;case"onClick":d!=null&&(n.onclick=Mu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sh.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(m=s.endsWith("Capture"),r=s.slice(2,m?s.length-7:void 0),w=n[Nn]||null,w=w!=null?w[s]:null,typeof w=="function"&&n.removeEventListener(r,w,m),typeof d=="function")){typeof w!="function"&&w!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(r,d,m);break e}s in n?n[s]=d:d===!0?n.setAttribute(s,""):hc(n,s,d)}}}function tn(n,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",n),Qe("load",n);var d=!1,m=!1,w;for(w in s)if(s.hasOwnProperty(w)){var A=s[w];if(A!=null)switch(w){case"src":d=!0;break;case"srcSet":m=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:bt(n,r,w,A,s,null)}}m&&bt(n,r,"srcSet",s.srcSet,s,null),d&&bt(n,r,"src",s.src,s,null);return;case"input":Qe("invalid",n);var D=w=A=m=null,$=null,ee=null;for(d in s)if(s.hasOwnProperty(d)){var ce=s[d];if(ce!=null)switch(d){case"name":m=ce;break;case"type":A=ce;break;case"checked":$=ce;break;case"defaultChecked":ee=ce;break;case"value":w=ce;break;case"defaultValue":D=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,r));break;default:bt(n,r,d,ce,s,null)}}zd(n,w,D,$,ee,A,m,!1),gc(n);return;case"select":Qe("invalid",n),d=A=w=null;for(m in s)if(s.hasOwnProperty(m)&&(D=s[m],D!=null))switch(m){case"value":w=D;break;case"defaultValue":A=D;break;case"multiple":d=D;default:bt(n,r,m,D,s,null)}r=w,s=A,n.multiple=!!d,r!=null?Os(n,!!d,r,!1):s!=null&&Os(n,!!d,s,!0);return;case"textarea":Qe("invalid",n),w=m=d=null;for(A in s)if(s.hasOwnProperty(A)&&(D=s[A],D!=null))switch(A){case"value":d=D;break;case"defaultValue":m=D;break;case"children":w=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:bt(n,r,A,D,s,null)}vc(n,d,m,w),gc(n);return;case"option":for($ in s)if(s.hasOwnProperty($)&&(d=s[$],d!=null))switch($){case"selected":n.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:bt(n,r,$,d,s,null)}return;case"dialog":Qe("beforetoggle",n),Qe("toggle",n),Qe("cancel",n),Qe("close",n);break;case"iframe":case"object":Qe("load",n);break;case"video":case"audio":for(d=0;d<Il.length;d++)Qe(Il[d],n);break;case"image":Qe("error",n),Qe("load",n);break;case"details":Qe("toggle",n);break;case"embed":case"source":case"link":Qe("error",n),Qe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in s)if(s.hasOwnProperty(ee)&&(d=s[ee],d!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:bt(n,r,ee,d,s,null)}return;default:if(Bd(r)){for(ce in s)s.hasOwnProperty(ce)&&(d=s[ce],d!==void 0&&l0(n,r,ce,d,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(d=s[D],d!=null&&bt(n,r,D,d,s,null))}function gg(n,r,s,d){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var m=null,w=null,A=null,D=null,$=null,ee=null,ce=null;for(te in s){var pe=s[te];if(s.hasOwnProperty(te)&&pe!=null)switch(te){case"checked":break;case"value":break;case"defaultValue":$=pe;default:d.hasOwnProperty(te)||bt(n,r,te,null,d,pe)}}for(var ne in d){var te=d[ne];if(pe=s[ne],d.hasOwnProperty(ne)&&(te!=null||pe!=null))switch(ne){case"type":w=te;break;case"name":m=te;break;case"checked":ee=te;break;case"defaultChecked":ce=te;break;case"value":A=te;break;case"defaultValue":D=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(a(137,r));break;default:te!==pe&&bt(n,r,ne,te,d,pe)}}xc(n,A,D,$,ee,ce,w,m);return;case"select":te=A=D=ne=null;for(w in s)if($=s[w],s.hasOwnProperty(w)&&$!=null)switch(w){case"value":break;case"multiple":te=$;default:d.hasOwnProperty(w)||bt(n,r,w,null,d,$)}for(m in d)if(w=d[m],$=s[m],d.hasOwnProperty(m)&&(w!=null||$!=null))switch(m){case"value":ne=w;break;case"defaultValue":D=w;break;case"multiple":A=w;default:w!==$&&bt(n,r,m,w,d,$)}r=D,s=A,d=te,ne!=null?Os(n,!!s,ne,!1):!!d!=!!s&&(r!=null?Os(n,!!s,r,!0):Os(n,!!s,s?[]:"",!1));return;case"textarea":te=ne=null;for(D in s)if(m=s[D],s.hasOwnProperty(D)&&m!=null&&!d.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:bt(n,r,D,null,d,m)}for(A in d)if(m=d[A],w=s[A],d.hasOwnProperty(A)&&(m!=null||w!=null))switch(A){case"value":ne=m;break;case"defaultValue":te=m;break;case"children":break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(a(91));break;default:m!==w&&bt(n,r,A,m,d,w)}Hd(n,ne,te);return;case"option":for(var De in s)if(ne=s[De],s.hasOwnProperty(De)&&ne!=null&&!d.hasOwnProperty(De))switch(De){case"selected":n.selected=!1;break;default:bt(n,r,De,null,d,ne)}for($ in d)if(ne=d[$],te=s[$],d.hasOwnProperty($)&&ne!==te&&(ne!=null||te!=null))switch($){case"selected":n.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:bt(n,r,$,ne,d,te)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ke in s)ne=s[ke],s.hasOwnProperty(ke)&&ne!=null&&!d.hasOwnProperty(ke)&&bt(n,r,ke,null,d,ne);for(ee in d)if(ne=d[ee],te=s[ee],d.hasOwnProperty(ee)&&ne!==te&&(ne!=null||te!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(a(137,r));break;default:bt(n,r,ee,ne,d,te)}return;default:if(Bd(r)){for(var St in s)ne=s[St],s.hasOwnProperty(St)&&ne!==void 0&&!d.hasOwnProperty(St)&&l0(n,r,St,void 0,d,ne);for(ce in d)ne=d[ce],te=s[ce],!d.hasOwnProperty(ce)||ne===te||ne===void 0&&te===void 0||l0(n,r,ce,ne,d,te);return}}for(var Z in s)ne=s[Z],s.hasOwnProperty(Z)&&ne!=null&&!d.hasOwnProperty(Z)&&bt(n,r,Z,null,d,ne);for(pe in d)ne=d[pe],te=s[pe],!d.hasOwnProperty(pe)||ne===te||ne==null&&te==null||bt(n,r,pe,ne,d,te)}var Xi=null,ju=null;function ds(n){return n.nodeType===9?n:n.ownerDocument}function Ht(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pt(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Ru(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var c0=null;function xg(){var n=window.event;return n&&n.type==="popstate"?n===c0?!1:(c0=n,!0):(c0=null,!1)}var y1=typeof setTimeout=="function"?setTimeout:void 0,vg=typeof clearTimeout=="function"?clearTimeout:void 0,w1=typeof Promise=="function"?Promise:void 0,yg=typeof queueMicrotask=="function"?queueMicrotask:typeof w1<"u"?function(n){return w1.resolve(null).then(n).catch(b1)}:y1;function b1(n){setTimeout(function(){throw n})}function Vi(n){return n==="head"}function Ou(n,r){var s=r,d=0,m=0;do{var w=s.nextSibling;if(n.removeChild(s),w&&w.nodeType===8)if(s=w.data,s==="/$"){if(0<d&&8>d){s=d;var A=n.ownerDocument;if(s&1&&$l(A.documentElement),s&2&&$l(A.body),s&4)for(s=A.head,$l(s),A=s.firstChild;A;){var D=A.nextSibling,$=A.nodeName;A[No]||$==="SCRIPT"||$==="STYLE"||$==="LINK"&&A.rel.toLowerCase()==="stylesheet"||s.removeChild(A),A=D}}if(m===0){n.removeChild(w),Xl(r);return}m--}else s==="$"||s==="$?"||s==="$!"?m++:d=s.charCodeAt(0)-48;else d=0;s=w}while(s);Xl(r)}function u0(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":u0(s),jd(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function S1(n,r,s,d){for(;n.nodeType===1;){var m=s;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!d&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(d){if(!n[No])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(w=n.getAttribute("rel"),w==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(w!==m.rel||n.getAttribute("href")!==(m.href==null||m.href===""?null:m.href)||n.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin)||n.getAttribute("title")!==(m.title==null?null:m.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(w=n.getAttribute("src"),(w!==(m.src==null?null:m.src)||n.getAttribute("type")!==(m.type==null?null:m.type)||n.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin))&&w&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var w=m.name==null?null:""+m.name;if(m.type==="hidden"&&n.getAttribute("name")===w)return n}else return n;if(n=Ki(n.nextSibling),n===null)break}return null}function Lu(n,r,s){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Ki(n.nextSibling),n===null))return null;return n}function Dn(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function mo(n,r){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")r();else{var d=function(){r(),s.removeEventListener("DOMContentLoaded",d)};s.addEventListener("DOMContentLoaded",d),n._reactRetry=d}}function Ki(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var d0=null;function C1(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return n;r--}else s==="/$"&&r++}n=n.previousSibling}return null}function T1(n,r,s){switch(r=ds(s),n){case"html":if(n=r.documentElement,!n)throw Error(a(452));return n;case"head":if(n=r.head,!n)throw Error(a(453));return n;case"body":if(n=r.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function $l(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);jd(n)}var gi=new Map,ma=new Set;function Ie(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ga=le.d;le.d={f:zi,r:E1,D:wg,C:A1,L:_u,m:bg,X:Cg,S:Sg,M:Tg};function zi(){var n=ga.f(),r=yu();return n||r}function E1(n){var r=Es(n);r!==null&&r.tag===5&&r.type==="form"?nu(r):ga.r(n)}var go=typeof document>"u"?null:document;function dt(n,r,s){var d=go;if(d&&typeof r=="string"&&r){var m=Si(r);m='link[rel="'+n+'"][href="'+m+'"]',typeof s=="string"&&(m+='[crossorigin="'+s+'"]'),ma.has(m)||(ma.add(m),n={rel:n,crossOrigin:s,href:r},d.querySelector(m)===null&&(r=d.createElement("link"),tn(r,"link",n),cn(r),d.head.appendChild(r)))}}function wg(n){ga.D(n),dt("dns-prefetch",n,null)}function A1(n,r){ga.C(n,r),dt("preconnect",n,r)}function _u(n,r,s){ga.L(n,r,s);var d=go;if(d&&n&&r){var m='link[rel="preload"][as="'+Si(r)+'"]';r==="image"&&s&&s.imageSrcSet?(m+='[imagesrcset="'+Si(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(m+='[imagesizes="'+Si(s.imageSizes)+'"]')):m+='[href="'+Si(n)+'"]';var w=m;switch(r){case"style":w=xo(n);break;case"script":w=vo(n)}gi.has(w)||(n=y({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:n,as:r},s),gi.set(w,n),d.querySelector(m)!==null||r==="style"&&d.querySelector(Ul(w))||r==="script"&&d.querySelector(Gl(w))||(r=d.createElement("link"),tn(r,"link",n),cn(r),d.head.appendChild(r)))}}function bg(n,r){ga.m(n,r);var s=go;if(s&&n){var d=r&&typeof r.as=="string"?r.as:"script",m='link[rel="modulepreload"][as="'+Si(d)+'"][href="'+Si(n)+'"]',w=m;switch(d){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":w=vo(n)}if(!gi.has(w)&&(n=y({rel:"modulepreload",href:n},r),gi.set(w,n),s.querySelector(m)===null)){switch(d){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Gl(w)))return}d=s.createElement("link"),tn(d,"link",n),cn(d),s.head.appendChild(d)}}}function Sg(n,r,s){ga.S(n,r,s);var d=go;if(d&&n){var m=Ms(d).hoistableStyles,w=xo(n);r=r||"default";var A=m.get(w);if(!A){var D={loading:0,preload:null};if(A=d.querySelector(Ul(w)))D.loading=5;else{n=y({rel:"stylesheet",href:n,"data-precedence":r},s),(s=gi.get(w))&&Fl(n,s);var $=A=d.createElement("link");cn($),tn($,"link",n),$._p=new Promise(function(ee,ce){$.onload=ee,$.onerror=ce}),$.addEventListener("load",function(){D.loading|=1}),$.addEventListener("error",function(){D.loading|=2}),D.loading|=4,ku(A,r,d)}A={type:"stylesheet",instance:A,count:1,state:D},m.set(w,A)}}}function Cg(n,r){ga.X(n,r);var s=go;if(s&&n){var d=Ms(s).hoistableScripts,m=vo(n),w=d.get(m);w||(w=s.querySelector(Gl(m)),w||(n=y({src:n,async:!0},r),(r=gi.get(m))&&f0(n,r),w=s.createElement("script"),cn(w),tn(w,"link",n),s.head.appendChild(w)),w={type:"script",instance:w,count:1,state:null},d.set(m,w))}}function Tg(n,r){ga.M(n,r);var s=go;if(s&&n){var d=Ms(s).hoistableScripts,m=vo(n),w=d.get(m);w||(w=s.querySelector(Gl(m)),w||(n=y({src:n,async:!0,type:"module"},r),(r=gi.get(m))&&f0(n,r),w=s.createElement("script"),cn(w),tn(w,"link",n),s.head.appendChild(w)),w={type:"script",instance:w,count:1,state:null},d.set(m,w))}}function M1(n,r,s,d){var m=(m=_e.current)?Ie(m):null;if(!m)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=xo(s.href),s=Ms(m).hoistableStyles,d=s.get(r),d||(d={type:"style",instance:null,count:0,state:null},s.set(r,d)),d):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=xo(s.href);var w=Ms(m).hoistableStyles,A=w.get(n);if(A||(m=m.ownerDocument||m,A={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},w.set(n,A),(w=m.querySelector(Ul(n)))&&!w._p&&(A.instance=w,A.state.loading=5),gi.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},gi.set(n,s),w||Eg(m,n,s,A.state))),r&&d===null)throw Error(a(528,""));return A}if(r&&d!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=vo(s),s=Ms(m).hoistableScripts,d=s.get(r),d||(d={type:"script",instance:null,count:0,state:null},s.set(r,d)),d):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function xo(n){return'href="'+Si(n)+'"'}function Ul(n){return'link[rel="stylesheet"]['+n+"]"}function j1(n){return y({},n,{"data-precedence":n.precedence,precedence:null})}function Eg(n,r,s,d){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?d.loading=1:(r=n.createElement("link"),d.preload=r,r.addEventListener("load",function(){return d.loading|=1}),r.addEventListener("error",function(){return d.loading|=2}),tn(r,"link",s),cn(r),n.head.appendChild(r))}function vo(n){return'[src="'+Si(n)+'"]'}function Gl(n){return"script[async]"+n}function R1(n,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var d=n.querySelector('style[data-href~="'+Si(s.href)+'"]');if(d)return r.instance=d,cn(d),d;var m=y({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return d=(n.ownerDocument||n).createElement("style"),cn(d),tn(d,"style",m),ku(d,s.precedence,n),r.instance=d;case"stylesheet":m=xo(s.href);var w=n.querySelector(Ul(m));if(w)return r.state.loading|=4,r.instance=w,cn(w),w;d=j1(s),(m=gi.get(m))&&Fl(d,m),w=(n.ownerDocument||n).createElement("link"),cn(w);var A=w;return A._p=new Promise(function(D,$){A.onload=D,A.onerror=$}),tn(w,"link",d),r.state.loading|=4,ku(w,s.precedence,n),r.instance=w;case"script":return w=vo(s.src),(m=n.querySelector(Gl(w)))?(r.instance=m,cn(m),m):(d=s,(m=gi.get(w))&&(d=y({},s),f0(d,m)),n=n.ownerDocument||n,m=n.createElement("script"),cn(m),tn(m,"link",d),n.head.appendChild(m),r.instance=m);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(d=r.instance,r.state.loading|=4,ku(d,s.precedence,n));return r.instance}function ku(n,r,s){for(var d=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),m=d.length?d[d.length-1]:null,w=m,A=0;A<d.length;A++){var D=d[A];if(D.dataset.precedence===r)w=D;else if(w!==m)break}w?w.parentNode.insertBefore(n,w.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(n,r.firstChild))}function Fl(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function f0(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var yo=null;function O1(n,r,s){if(yo===null){var d=new Map,m=yo=new Map;m.set(s,d)}else m=yo,d=m.get(s),d||(d=new Map,m.set(s,d));if(d.has(n))return d;for(d.set(n,null),s=s.getElementsByTagName(n),m=0;m<s.length;m++){var w=s[m];if(!(w[No]||w[ln]||n==="link"&&w.getAttribute("rel")==="stylesheet")&&w.namespaceURI!=="http://www.w3.org/2000/svg"){var A=w.getAttribute(r)||"";A=n+A;var D=d.get(A);D?D.push(w):d.set(A,[w])}}return d}function L1(n,r,s){n=n.ownerDocument||n,n.head.insertBefore(s,r==="title"?n.querySelector("head > title"):null)}function Ag(n,r,s){if(s===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function nn(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var fn=null;function Mg(){}function jg(n,r,s){if(fn===null)throw Error(a(475));var d=fn;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var m=xo(s.href),w=n.querySelector(Ul(m));if(w){n=w._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(d.count++,d=ql.bind(d),n.then(d,d)),r.state.loading|=4,r.instance=w,cn(w);return}w=n.ownerDocument||n,s=j1(s),(m=gi.get(m))&&Fl(s,m),w=w.createElement("link"),cn(w);var A=w;A._p=new Promise(function(D,$){A.onload=D,A.onerror=$}),tn(w,"link",s),r.instance=w}d.stylesheets===null&&(d.stylesheets=new Map),d.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(d.count++,r=ql.bind(d),n.addEventListener("load",r),n.addEventListener("error",r))}}function Rg(){if(fn===null)throw Error(a(475));var n=fn;return n.stylesheets&&n.count===0&&h0(n,n.stylesheets),0<n.count?function(r){var s=setTimeout(function(){if(n.stylesheets&&h0(n,n.stylesheets),n.unsuspend){var d=n.unsuspend;n.unsuspend=null,d()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(s)}}:null}function ql(){if(this.count--,this.count===0){if(this.stylesheets)h0(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Du=null;function h0(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Du=new Map,r.forEach(Og,n),Du=null,ql.call(n))}function Og(n,r){if(!(r.state.loading&4)){var s=Du.get(n);if(s)var d=s.get(null);else{s=new Map,Du.set(n,s);for(var m=n.querySelectorAll("link[data-precedence],style[data-precedence]"),w=0;w<m.length;w++){var A=m[w];(A.nodeName==="LINK"||A.getAttribute("media")!=="not all")&&(s.set(A.dataset.precedence,A),d=A)}d&&s.set(null,d)}m=r.instance,A=m.getAttribute("data-precedence"),w=s.get(A)||d,w===d&&s.set(null,m),s.set(A,m),this.count++,d=ql.bind(this),m.addEventListener("load",d),m.addEventListener("error",d),w?w.parentNode.insertBefore(m,w.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(m,n.firstChild)),r.state.loading|=4}}var wo={$$typeof:O,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function Lg(n,r,s,d,m,w,A,D){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.hiddenUpdates=uc(null),this.identifierPrefix=d,this.onUncaughtError=m,this.onCaughtError=w,this.onRecoverableError=A,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function _1(n,r,s,d,m,w,A,D,$,ee,ce,pe){return n=new Lg(n,r,s,A,D,$,ee,pe),r=1,w===!0&&(r|=24),w=$n(3,null,null,r),n.current=w,w.stateNode=n,r=of(),r.refCount++,n.pooledCache=r,r.refCount++,w.memoizedState={element:d,isDehydrated:s,cache:r},Qr(w),n}function k1(n){return n?(n=Fr,n):Fr}function p0(n,r,s,d,m,w){m=k1(m),d.context===null?d.context=m:d.pendingContext=m,d=or(r),d.payload={element:s},w=w===void 0?null:w,w!==null&&(d.callback=w),s=ja(n,d,r),s!==null&&(mi(s,n,r),rl(s,n,r))}function m0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<r?s:r}}function g0(n,r){m0(n,r),(n=n.alternate)&&m0(n,r)}function D1(n){if(n.tag===13){var r=Gr(n,67108864);r!==null&&mi(r,n,67108864),g0(n,67108864)}}var Vu=!0;function _g(n,r,s,d){var m=X.T;X.T=null;var w=le.p;try{le.p=2,x0(n,r,s,d)}finally{le.p=w,X.T=m}}function bo(n,r,s,d){var m=X.T;X.T=null;var w=le.p;try{le.p=8,x0(n,r,s,d)}finally{le.p=w,X.T=m}}function x0(n,r,s,d){if(Vu){var m=v0(d);if(m===null)Na(n,r,d,zu,s),z1(n,d);else if(Dg(m,n,r,s,d))d.stopPropagation();else if(z1(n,d),r&4&&-1<kg.indexOf(n)){for(;m!==null;){var w=Es(m);if(w!==null)switch(w.tag){case 3:if(w=w.stateNode,w.current.memoizedState.isDehydrated){var A=Sa(w.pendingLanes);if(A!==0){var D=w;for(D.pendingLanes|=2,D.entangledLanes|=2;A;){var $=1<<31-jn(A);D.entanglements[1]|=$,A&=~$}pa(w),(mt&6)===0&&(lo=on()+500,Pl(0))}}break;case 13:D=Gr(w,2),D!==null&&mi(D,w,2),yu(),g0(w,2)}if(w=v0(d),w===null&&Na(n,r,d,zu,s),w===m)break;m=w}m!==null&&d.stopPropagation()}else Na(n,r,d,null,s)}}function v0(n){return n=Id(n),y0(n)}var zu=null;function y0(n){if(zu=null,n=Ts(n),n!==null){var r=c(n);if(r===null)n=null;else{var s=r.tag;if(s===13){if(n=f(r),n!==null)return n;n=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return zu=n,null}function V1(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hh()){case ph:return 2;case ys:return 8;case Pn:case Vo:return 32;case zo:return 268435456;default:return 32}default:return 32}}var Hu=!1,Ba=null,Cr=null,Tr=null,Yl=new Map,Wl=new Map,Er=[],kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function z1(n,r){switch(n){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Yl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(r.pointerId)}}function Zl(n,r,s,d,m,w){return n===null||n.nativeEvent!==w?(n={blockedOn:r,domEventName:s,eventSystemFlags:d,nativeEvent:w,targetContainers:[m]},r!==null&&(r=Es(r),r!==null&&D1(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function Dg(n,r,s,d,m){switch(r){case"focusin":return Ba=Zl(Ba,n,r,s,d,m),!0;case"dragenter":return Cr=Zl(Cr,n,r,s,d,m),!0;case"mouseover":return Tr=Zl(Tr,n,r,s,d,m),!0;case"pointerover":var w=m.pointerId;return Yl.set(w,Zl(Yl.get(w)||null,n,r,s,d,m)),!0;case"gotpointercapture":return w=m.pointerId,Wl.set(w,Zl(Wl.get(w)||null,n,r,s,d,m)),!0}return!1}function H1(n){var r=Ts(n.target);if(r!==null){var s=c(r);if(s!==null){if(r=s.tag,r===13){if(r=f(s),r!==null){n.blockedOn=r,_2(n.priority,function(){if(s.tag===13){var d=Sn();d=Ad(d);var m=Gr(s,d);m!==null&&mi(m,s,d),g0(s,d)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pu(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var s=v0(n.nativeEvent);if(s===null){s=n.nativeEvent;var d=new s.constructor(s.type,s);yc=d,s.target.dispatchEvent(d),yc=null}else return r=Es(s),r!==null&&D1(r),n.blockedOn=s,!1;r.shift()}return!0}function P1(n,r,s){Pu(n)&&s.delete(r)}function Vg(){Hu=!1,Ba!==null&&Pu(Ba)&&(Ba=null),Cr!==null&&Pu(Cr)&&(Cr=null),Tr!==null&&Pu(Tr)&&(Tr=null),Yl.forEach(P1),Wl.forEach(P1)}function Nu(n,r){n.blockedOn===r&&(n.blockedOn=null,Hu||(Hu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vg)))}var Bu=null;function N1(n){Bu!==n&&(Bu=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Bu===n&&(Bu=null);for(var r=0;r<n.length;r+=3){var s=n[r],d=n[r+1],m=n[r+2];if(typeof d!="function"){if(y0(d||s)===null)continue;break}var w=Es(s);w!==null&&(n.splice(r,3),r-=3,gl(w,{pending:!0,data:m,method:s.method,action:d},d,m))}}))}function Xl(n){function r($){return Nu($,n)}Ba!==null&&Nu(Ba,n),Cr!==null&&Nu(Cr,n),Tr!==null&&Nu(Tr,n),Yl.forEach(r),Wl.forEach(r);for(var s=0;s<Er.length;s++){var d=Er[s];d.blockedOn===n&&(d.blockedOn=null)}for(;0<Er.length&&(s=Er[0],s.blockedOn===null);)H1(s),s.blockedOn===null&&Er.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(d=0;d<s.length;d+=3){var m=s[d],w=s[d+1],A=m[Nn]||null;if(typeof w=="function")A||N1(s);else if(A){var D=null;if(w&&w.hasAttribute("formAction")){if(m=w,A=w[Nn]||null)D=A.formAction;else if(y0(m)!==null)continue}else D=A.action;typeof D=="function"?s[d+1]=D:(s.splice(d,3),d-=3),N1(s)}}}function w0(n){this._internalRoot=n}Iu.prototype.render=w0.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,d=Sn();p0(s,d,n,r,null,null)},Iu.prototype.unmount=w0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;p0(n.current,2,null,n,null,null),yu(),r[Xa]=null}};function Iu(n){this._internalRoot=n}Iu.prototype.unstable_scheduleHydration=function(n){if(n){var r=yh();n={blockedOn:null,target:n,priority:r};for(var s=0;s<Er.length&&r!==0&&r<Er[s].priority;s++);Er.splice(s,0,n),s===0&&H1(n)}};var B1=t.version;if(B1!=="19.1.1")throw Error(a(527,B1,"19.1.1"));le.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=p(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var zg={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{Po=$u.inject(zg),xn=$u}catch{}}return S0.createRoot=function(n,r){if(!o(n))throw Error(a(299));var s=!1,d="",m=kf,w=ru,A=Ep,D=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(w=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(D=r.unstable_transitionCallbacks)),r=_1(n,1,!1,null,null,s,d,m,w,A,D,null),n[Xa]=r.current,o0(n),new w0(r)},S0.hydrateRoot=function(n,r,s){if(!o(n))throw Error(a(299));var d=!1,m="",w=kf,A=ru,D=Ep,$=null,ee=null;return s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(m=s.identifierPrefix),s.onUncaughtError!==void 0&&(w=s.onUncaughtError),s.onCaughtError!==void 0&&(A=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&($=s.unstable_transitionCallbacks),s.formState!==void 0&&(ee=s.formState)),r=_1(n,1,!0,r,s??null,d,m,w,A,D,$,ee),r.context=k1(null),s=r.current,d=Sn(),d=Ad(d),m=or(d),m.callback=null,ja(s,m,d),s=d,r.current.lanes=s,Cs(r,s),pa(r),n[Xa]=r.current,o0(n),new Iu(r)},S0.version="19.1.1",S0}var Zy;function O9(){if(Zy)return Ig.exports;Zy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Ig.exports=R9(),Ig.exports}var L9=O9();const _9=t2(L9);var H=J3();const ct=t2(H),Xy=b9({__proto__:null,default:ct},[H]);/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ky="popstate";function k9(e={}){function t(a,o){let{pathname:c,search:f,hash:h}=a.location;return r3("",{pathname:c,search:f,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(a,o){return typeof o=="string"?o:G0(o)}return V9(t,i,null,e)}function Gt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function D9(){return Math.random().toString(36).substring(2,10)}function Qy(e,t){return{usr:e.state,key:e.key,idx:t}}function r3(e,t,i=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?md(t):t,state:i,key:t&&t.key||a||D9()}}function G0({pathname:e="/",search:t="",hash:i=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function md(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substring(i),e=e.substring(0,i));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function V9(e,t,i,a={}){let{window:o=document.defaultView,v5Compat:c=!1}=a,f=o.history,h="POP",p=null,g=y();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function y(){return(f.state||{idx:null}).idx}function b(){h="POP";let P=y(),_=P==null?null:P-g;g=P,p&&p({action:h,location:L.location,delta:_})}function S(P,_){h="PUSH";let R=r3(L.location,P,_);g=y()+1;let O=Qy(R,g),N=L.createHref(R);try{f.pushState(O,"",N)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;o.location.assign(N)}c&&p&&p({action:h,location:L.location,delta:1})}function T(P,_){h="REPLACE";let R=r3(L.location,P,_);g=y();let O=Qy(R,g),N=L.createHref(R);f.replaceState(O,"",N),c&&p&&p({action:h,location:L.location,delta:0})}function E(P){return z9(P)}let L={get action(){return h},get location(){return e(o,f)},listen(P){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Ky,b),p=P,()=>{o.removeEventListener(Ky,b),p=null}},createHref(P){return t(o,P)},createURL:E,encodeLocation(P){let _=E(P);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:S,replace:T,go(P){return f.go(P)}};return L}function z9(e,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Gt(i,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:G0(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function Rw(e,t,i="/"){return H9(e,t,i,!1)}function H9(e,t,i,a){let o=typeof t=="string"?md(t):t,c=xs(o.pathname||"/",i);if(c==null)return null;let f=Ow(e);P9(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let g=Z9(c);h=Y9(f[p],g,a)}return h}function Ow(e,t=[],i=[],a=""){let o=(c,f,h)=>{let p={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(Gt(p.relativePath.startsWith(a),`Absolute route path "${p.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(a.length));let g=gs([a,p.relativePath]),y=i.concat(p);c.children&&c.children.length>0&&(Gt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Ow(c.children,t,y,g)),!(c.path==null&&!c.index)&&t.push({path:g,score:F9(g,c.index),routesMeta:y})};return e.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))o(c,f);else for(let p of Lw(c.path))o(c,f,p)}),t}function Lw(e){let t=e.split("/");if(t.length===0)return[];let[i,...a]=t,o=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return o?[c,""]:[c];let f=Lw(a.join("/")),h=[];return h.push(...f.map(p=>p===""?c:[c,p].join("/"))),o&&h.push(...f),h.map(p=>e.startsWith("/")&&p===""?"/":p)}function P9(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:q9(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var N9=/^:[\w-]+$/,B9=3,I9=2,$9=1,U9=10,G9=-2,Jy=e=>e==="*";function F9(e,t){let i=e.split("/"),a=i.length;return i.some(Jy)&&(a+=G9),t&&(a+=I9),i.filter(o=>!Jy(o)).reduce((o,c)=>o+(N9.test(c)?B9:c===""?$9:U9),a)}function q9(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function Y9(e,t,i=!1){let{routesMeta:a}=e,o={},c="/",f=[];for(let h=0;h<a.length;++h){let p=a[h],g=h===a.length-1,y=c==="/"?t:t.slice(c.length)||"/",b=Rm({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y),S=p.route;if(!b&&g&&i&&!a[a.length-1].route.index&&(b=Rm({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!b)return null;Object.assign(o,b.params),f.push({params:o,pathname:gs([c,b.pathname]),pathnameBase:J9(gs([c,b.pathnameBase])),route:S}),b.pathnameBase!=="/"&&(c=gs([c,b.pathnameBase]))}return f}function Rm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=W9(e.path,e.caseSensitive,e.end),o=t.match(i);if(!o)return null;let c=o[0],f=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((g,{paramName:y,isOptional:b},S)=>{if(y==="*"){let E=h[S]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const T=h[S];return b&&!T?g[y]=void 0:g[y]=(T||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:f,pattern:e}}function W9(e,t=!1,i=!0){Fa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(a.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function Z9(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Fa(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function xs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}function X9(e,t="/"){let{pathname:i,search:a="",hash:o=""}=typeof e=="string"?md(e):e;return{pathname:i?i.startsWith("/")?i:K9(i,t):t,search:eS(a),hash:tS(o)}}function K9(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function qg(e,t,i,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Q9(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function ev(e){let t=Q9(e);return t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase)}function tv(e,t,i,a=!1){let o;typeof e=="string"?o=md(e):(o={...e},Gt(!o.pathname||!o.pathname.includes("?"),qg("?","pathname","search",o)),Gt(!o.pathname||!o.pathname.includes("#"),qg("#","pathname","hash",o)),Gt(!o.search||!o.search.includes("#"),qg("#","search","hash",o)));let c=e===""||o.pathname==="",f=c?"/":o.pathname,h;if(f==null)h=i;else{let b=t.length-1;if(!a&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),b-=1;o.pathname=S.join("/")}h=b>=0?t[b]:"/"}let p=X9(o,h),g=f&&f!=="/"&&f.endsWith("/"),y=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var gs=e=>e.join("/").replace(/\/\/+/g,"/"),J9=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),eS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,tS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function nS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var _w=["POST","PUT","PATCH","DELETE"];new Set(_w);var iS=["GET",..._w];new Set(iS);var gd=H.createContext(null);gd.displayName="DataRouter";var n2=H.createContext(null);n2.displayName="DataRouterState";H.createContext(!1);var kw=H.createContext({isTransitioning:!1});kw.displayName="ViewTransition";var aS=H.createContext(new Map);aS.displayName="Fetchers";var rS=H.createContext(null);rS.displayName="Await";var Wa=H.createContext(null);Wa.displayName="Navigation";var ih=H.createContext(null);ih.displayName="Location";var wa=H.createContext({outlet:null,matches:[],isDataRoute:!1});wa.displayName="Route";var nv=H.createContext(null);nv.displayName="RouteError";function sS(e,{relative:t}={}){Gt(xd(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=H.useContext(Wa),{hash:o,pathname:c,search:f}=ah(e,{relative:t}),h=c;return i!=="/"&&(h=c==="/"?i:gs([i,c])),a.createHref({pathname:h,search:f,hash:o})}function xd(){return H.useContext(ih)!=null}function ba(){return Gt(xd(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(ih).location}var Dw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vw(e){H.useContext(Wa).static||H.useLayoutEffect(e)}function iv(){let{isDataRoute:e}=H.useContext(wa);return e?SS():oS()}function oS(){Gt(xd(),"useNavigate() may be used only in the context of a <Router> component.");let e=H.useContext(gd),{basename:t,navigator:i}=H.useContext(Wa),{matches:a}=H.useContext(wa),{pathname:o}=ba(),c=JSON.stringify(ev(a)),f=H.useRef(!1);return Vw(()=>{f.current=!0}),H.useCallback((p,g={})=>{if(Fa(f.current,Dw),!f.current)return;if(typeof p=="number"){i.go(p);return}let y=tv(p,JSON.parse(c),o,g.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:gs([t,y.pathname])),(g.replace?i.replace:i.push)(y,g.state,g)},[t,i,c,o,e])}var lS=H.createContext(null);function cS(e){let t=H.useContext(wa).outlet;return t&&H.createElement(lS.Provider,{value:e},t)}function uS(){let{matches:e}=H.useContext(wa),t=e[e.length-1];return t?t.params:{}}function ah(e,{relative:t}={}){let{matches:i}=H.useContext(wa),{pathname:a}=ba(),o=JSON.stringify(ev(i));return H.useMemo(()=>tv(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function dS(e,t){return zw(e,t)}function zw(e,t,i,a){var _;Gt(xd(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=H.useContext(Wa),{matches:c}=H.useContext(wa),f=c[c.length-1],h=f?f.params:{},p=f?f.pathname:"/",g=f?f.pathnameBase:"/",y=f&&f.route;{let R=y&&y.path||"";Hw(p,!y||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let b=ba(),S;if(t){let R=typeof t=="string"?md(t):t;Gt(g==="/"||((_=R.pathname)==null?void 0:_.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),S=R}else S=b;let T=S.pathname||"/",E=T;if(g!=="/"){let R=g.replace(/^\//,"").split("/");E="/"+T.replace(/^\//,"").split("/").slice(R.length).join("/")}let L=Rw(e,{pathname:E});Fa(y||L!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Fa(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=gS(L&&L.map(R=>Object.assign({},R,{params:Object.assign({},h,R.params),pathname:gs([g,o.encodeLocation?o.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:gs([g,o.encodeLocation?o.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),c,i,a);return t&&P?H.createElement(ih.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},P):P}function fS(){let e=bS(),t=nS(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",e),f=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:c},"ErrorBoundary")," or"," ",H.createElement("code",{style:c},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},t),i?H.createElement("pre",{style:o},i):null,f)}var hS=H.createElement(fS,null),pS=class extends H.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?H.createElement(wa.Provider,{value:this.props.routeContext},H.createElement(nv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function mS({routeContext:e,match:t,children:i}){let a=H.useContext(gd);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),H.createElement(wa.Provider,{value:e},i)}function gS(e,t=[],i=null,a=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let o=e,c=i==null?void 0:i.errors;if(c!=null){let p=o.findIndex(g=>g.route.id&&(c==null?void 0:c[g.route.id])!==void 0);Gt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let f=!1,h=-1;if(i)for(let p=0;p<o.length;p++){let g=o[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=p),g.route.id){let{loaderData:y,errors:b}=i,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||S){f=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,g,y)=>{let b,S=!1,T=null,E=null;i&&(b=c&&g.route.id?c[g.route.id]:void 0,T=g.route.errorElement||hS,f&&(h<0&&y===0?(Hw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,E=null):h===y&&(S=!0,E=g.route.hydrateFallbackElement||null)));let L=t.concat(o.slice(0,y+1)),P=()=>{let _;return b?_=T:S?_=E:g.route.Component?_=H.createElement(g.route.Component,null):g.route.element?_=g.route.element:_=p,H.createElement(mS,{match:g,routeContext:{outlet:p,matches:L,isDataRoute:i!=null},children:_})};return i&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?H.createElement(pS,{location:i.location,revalidation:i.revalidation,component:T,error:b,children:P(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):P()},null)}function av(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xS(e){let t=H.useContext(gd);return Gt(t,av(e)),t}function vS(e){let t=H.useContext(n2);return Gt(t,av(e)),t}function yS(e){let t=H.useContext(wa);return Gt(t,av(e)),t}function rv(e){let t=yS(e),i=t.matches[t.matches.length-1];return Gt(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function wS(){return rv("useRouteId")}function bS(){var a;let e=H.useContext(nv),t=vS("useRouteError"),i=rv("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[i]}function SS(){let{router:e}=xS("useNavigate"),t=rv("useNavigate"),i=H.useRef(!1);return Vw(()=>{i.current=!0}),H.useCallback(async(o,c={})=>{Fa(i.current,Dw),i.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...c}))},[e,t])}var e4={};function Hw(e,t,i){!t&&!e4[e]&&(e4[e]=!0,Fa(!1,i))}H.memo(CS);function CS({routes:e,future:t,state:i}){return zw(e,void 0,i,t)}function TS({to:e,replace:t,state:i,relative:a}){Gt(xd(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=H.useContext(Wa);Fa(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=H.useContext(wa),{pathname:f}=ba(),h=iv(),p=tv(e,ev(c),f,a==="path"),g=JSON.stringify(p);return H.useEffect(()=>{h(JSON.parse(g),{replace:t,state:i,relative:a})},[h,g,a,t,i]),null}function ES(e){return cS(e.context)}function Cn(e){Gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function AS({basename:e="/",children:t=null,location:i,navigationType:a="POP",navigator:o,static:c=!1}){Gt(!xd(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),h=H.useMemo(()=>({basename:f,navigator:o,static:c,future:{}}),[f,o,c]);typeof i=="string"&&(i=md(i));let{pathname:p="/",search:g="",hash:y="",state:b=null,key:S="default"}=i,T=H.useMemo(()=>{let E=xs(p,f);return E==null?null:{location:{pathname:E,search:g,hash:y,state:b,key:S},navigationType:a}},[f,p,g,y,b,S,a]);return Fa(T!=null,`<Router basename="${f}"> is not able to match the URL "${p}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:H.createElement(Wa.Provider,{value:h},H.createElement(ih.Provider,{children:t,value:T}))}function MS({children:e,location:t}){return dS(s3(e),t)}function s3(e,t=[]){let i=[];return H.Children.forEach(e,(a,o)=>{if(!H.isValidElement(a))return;let c=[...t,o];if(a.type===H.Fragment){i.push.apply(i,s3(a.props.children,c));return}Gt(a.type===Cn,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Gt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=s3(a.props.children,c)),i.push(f)}),i}var dm="get",fm="application/x-www-form-urlencoded";function i2(e){return e!=null&&typeof e.tagName=="string"}function jS(e){return i2(e)&&e.tagName.toLowerCase()==="button"}function RS(e){return i2(e)&&e.tagName.toLowerCase()==="form"}function OS(e){return i2(e)&&e.tagName.toLowerCase()==="input"}function LS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _S(e,t){return e.button===0&&(!t||t==="_self")&&!LS(e)}var $1=null;function kS(){if($1===null)try{new FormData(document.createElement("form"),0),$1=!1}catch{$1=!0}return $1}var DS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yg(e){return e!=null&&!DS.has(e)?(Fa(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fm}"`),null):e}function VS(e,t){let i,a,o,c,f;if(RS(e)){let h=e.getAttribute("action");a=h?xs(h,t):null,i=e.getAttribute("method")||dm,o=Yg(e.getAttribute("enctype"))||fm,c=new FormData(e)}else if(jS(e)||OS(e)&&(e.type==="submit"||e.type==="image")){let h=e.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||h.getAttribute("action");if(a=p?xs(p,t):null,i=e.getAttribute("formmethod")||h.getAttribute("method")||dm,o=Yg(e.getAttribute("formenctype"))||Yg(h.getAttribute("enctype"))||fm,c=new FormData(h,e),!kS()){let{name:g,type:y,value:b}=e;if(y==="image"){let S=g?`${g}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else g&&c.append(g,b)}}else{if(i2(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=dm,a=null,o=fm,f=e}return c&&o==="text/plain"&&(f=c,c=void 0),{action:a,method:i.toLowerCase(),encType:o,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function sv(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zS(e,t,i){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname==="/"?a.pathname=`_root.${i}`:t&&xs(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function HS(e,t){if(e.id in t)return t[e.id];try{let i=await import(e.module);return t[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function PS(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function NS(e,t,i){let a=await Promise.all(e.map(async o=>{let c=t.routes[o.route.id];if(c){let f=await HS(c,i);return f.links?f.links():[]}return[]}));return US(a.flat(1).filter(PS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function t4(e,t,i,a,o,c){let f=(p,g)=>i[g]?p.route.id!==i[g].route.id:!0,h=(p,g)=>{var y;return i[g].pathname!==p.pathname||((y=i[g].route.path)==null?void 0:y.endsWith("*"))&&i[g].params["*"]!==p.params["*"]};return c==="assets"?t.filter((p,g)=>f(p,g)||h(p,g)):c==="data"?t.filter((p,g)=>{var b;let y=a.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(f(p,g)||h(p,g))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((b=i[0])==null?void 0:b.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function BS(e,t,{includeHydrateFallback:i}={}){return IS(e.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function IS(e){return[...new Set(e)]}function $S(e){let t={},i=Object.keys(e).sort();for(let a of i)t[a]=e[a];return t}function US(e,t){let i=new Set;return new Set(t),e.reduce((a,o)=>{let c=JSON.stringify($S(o));return i.has(c)||(i.add(c),a.push({key:c,link:o})),a},[])}function Pw(){let e=H.useContext(gd);return sv(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function GS(){let e=H.useContext(n2);return sv(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ov=H.createContext(void 0);ov.displayName="FrameworkContext";function Nw(){let e=H.useContext(ov);return sv(e,"You must render this element inside a <HydratedRouter> element"),e}function FS(e,t){let i=H.useContext(ov),[a,o]=H.useState(!1),[c,f]=H.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:b}=t,S=H.useRef(null);H.useEffect(()=>{if(e==="render"&&f(!0),e==="viewport"){let L=_=>{_.forEach(R=>{f(R.isIntersecting)})},P=new IntersectionObserver(L,{threshold:.5});return S.current&&P.observe(S.current),()=>{P.disconnect()}}},[e]),H.useEffect(()=>{if(a){let L=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(L)}}},[a]);let T=()=>{o(!0)},E=()=>{o(!1),f(!1)};return i?e!=="intent"?[c,S,{}]:[c,S,{onFocus:C0(h,T),onBlur:C0(p,E),onMouseEnter:C0(g,T),onMouseLeave:C0(y,E),onTouchStart:C0(b,T)}]:[!1,S,{}]}function C0(e,t){return i=>{e&&e(i),i.defaultPrevented||t(i)}}function qS({page:e,...t}){let{router:i}=Pw(),a=H.useMemo(()=>Rw(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?H.createElement(WS,{page:e,matches:a,...t}):null}function YS(e){let{manifest:t,routeModules:i}=Nw(),[a,o]=H.useState([]);return H.useEffect(()=>{let c=!1;return NS(e,t,i).then(f=>{c||o(f)}),()=>{c=!0}},[e,t,i]),a}function WS({page:e,matches:t,...i}){let a=ba(),{manifest:o,routeModules:c}=Nw(),{basename:f}=Pw(),{loaderData:h,matches:p}=GS(),g=H.useMemo(()=>t4(e,t,p,o,a,"data"),[e,t,p,o,a]),y=H.useMemo(()=>t4(e,t,p,o,a,"assets"),[e,t,p,o,a]),b=H.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let E=new Set,L=!1;if(t.forEach(_=>{var O;let R=o.routes[_.route.id];!R||!R.hasLoader||(!g.some(N=>N.route.id===_.route.id)&&_.route.id in h&&((O=c[_.route.id])!=null&&O.shouldRevalidate)||R.hasClientLoader?L=!0:E.add(_.route.id))}),E.size===0)return[];let P=zS(e,f,"data");return L&&E.size>0&&P.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[P.pathname+P.search]},[f,h,a,o,g,t,e,c]),S=H.useMemo(()=>BS(y,o),[y,o]),T=YS(y);return H.createElement(H.Fragment,null,b.map(E=>H.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),S.map(E=>H.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),T.map(({key:E,link:L})=>H.createElement("link",{key:E,nonce:i.nonce,...L})))}function ZS(...e){return t=>{e.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Bw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bw&&(window.__reactRouterVersion="7.8.0")}catch{}function XS({basename:e,children:t,window:i}){let a=H.useRef();a.current==null&&(a.current=k9({window:i,v5Compat:!0}));let o=a.current,[c,f]=H.useState({action:o.action,location:o.location}),h=H.useCallback(p=>{H.startTransition(()=>f(p))},[f]);return H.useLayoutEffect(()=>o.listen(h),[o,h]),H.createElement(AS,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:o})}var Iw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$w=H.forwardRef(function({onClick:t,discover:i="render",prefetch:a="none",relative:o,reloadDocument:c,replace:f,state:h,target:p,to:g,preventScrollReset:y,viewTransition:b,...S},T){let{basename:E}=H.useContext(Wa),L=typeof g=="string"&&Iw.test(g),P,_=!1;if(typeof g=="string"&&L&&(P=g,Bw))try{let ie=new URL(window.location.href),se=g.startsWith("//")?new URL(ie.protocol+g):new URL(g),de=xs(se.pathname,E);se.origin===ie.origin&&de!=null?g=de+se.search+se.hash:_=!0}catch{Fa(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=sS(g,{relative:o}),[O,N,V]=FS(a,S),Y=JS(g,{replace:f,state:h,target:p,preventScrollReset:y,relative:o,viewTransition:b});function G(ie){t&&t(ie),ie.defaultPrevented||Y(ie)}let Q=H.createElement("a",{...S,...V,href:P||R,onClick:_||c?t:G,ref:ZS(T,N),target:p,"data-discover":!L&&i==="render"?"true":void 0});return O&&!L?H.createElement(H.Fragment,null,Q,H.createElement(qS,{page:R})):Q});$w.displayName="Link";var Hn=H.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:a="",end:o=!1,style:c,to:f,viewTransition:h,children:p,...g},y){let b=ah(f,{relative:g.relative}),S=ba(),T=H.useContext(n2),{navigator:E,basename:L}=H.useContext(Wa),P=T!=null&&aC(b)&&h===!0,_=E.encodeLocation?E.encodeLocation(b).pathname:b.pathname,R=S.pathname,O=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;i||(R=R.toLowerCase(),O=O?O.toLowerCase():null,_=_.toLowerCase()),O&&L&&(O=xs(O,L)||O);const N=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let V=R===_||!o&&R.startsWith(_)&&R.charAt(N)==="/",Y=O!=null&&(O===_||!o&&O.startsWith(_)&&O.charAt(_.length)==="/"),G={isActive:V,isPending:Y,isTransitioning:P},Q=V?t:void 0,ie;typeof a=="function"?ie=a(G):ie=[a,V?"active":null,Y?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let se=typeof c=="function"?c(G):c;return H.createElement($w,{...g,"aria-current":Q,className:ie,ref:y,style:se,to:f,viewTransition:h},typeof p=="function"?p(G):p)});Hn.displayName="NavLink";var KS=H.forwardRef(({discover:e="render",fetcherKey:t,navigate:i,reloadDocument:a,replace:o,state:c,method:f=dm,action:h,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:b,...S},T)=>{let E=nC(),L=iC(h,{relative:g}),P=f.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&Iw.test(h),R=O=>{if(p&&p(O),O.defaultPrevented)return;O.preventDefault();let N=O.nativeEvent.submitter,V=(N==null?void 0:N.getAttribute("formmethod"))||f;E(N||O.currentTarget,{fetcherKey:t,method:V,navigate:i,replace:o,state:c,relative:g,preventScrollReset:y,viewTransition:b})};return H.createElement("form",{ref:T,method:P,action:L,onSubmit:a?p:R,...S,"data-discover":!_&&e==="render"?"true":void 0})});KS.displayName="Form";function QS(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Uw(e){let t=H.useContext(gd);return Gt(t,QS(e)),t}function JS(e,{target:t,replace:i,state:a,preventScrollReset:o,relative:c,viewTransition:f}={}){let h=iv(),p=ba(),g=ah(e,{relative:c});return H.useCallback(y=>{if(_S(y,t)){y.preventDefault();let b=i!==void 0?i:G0(p)===G0(g);h(e,{replace:b,state:a,preventScrollReset:o,relative:c,viewTransition:f})}},[p,h,g,i,a,t,e,o,c,f])}var eC=0,tC=()=>`__${String(++eC)}__`;function nC(){let{router:e}=Uw("useSubmit"),{basename:t}=H.useContext(Wa),i=wS();return H.useCallback(async(a,o={})=>{let{action:c,method:f,encType:h,formData:p,body:g}=VS(a,t);if(o.navigate===!1){let y=o.fetcherKey||tC();await e.fetch(y,i,o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||h,flushSync:o.flushSync})}else await e.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,i])}function iC(e,{relative:t}={}){let{basename:i}=H.useContext(Wa),a=H.useContext(wa);Gt(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),c={...ah(e||".",{relative:t})},f=ba();if(e==null){c.search=f.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(y=>y==="")){h.delete("index"),p.filter(b=>b).forEach(b=>h.append("index",b));let y=h.toString();c.search=y?`?${y}`:""}}return(!e||e===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:gs([i,c.pathname])),G0(c)}function aC(e,{relative:t}={}){let i=H.useContext(kw);Gt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Uw("useViewTransitionState"),o=ah(e,{relative:t});if(!i.isTransitioning)return!1;let c=xs(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=xs(i.nextLocation.pathname,a)||i.nextLocation.pathname;return Rm(o.pathname,f)!=null||Rm(o.pathname,c)!=null}function rC(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function sC(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var oC=function(){function e(i){var a=this;this._insertTag=function(o){var c;a.tags.length===0?a.insertionPoint?c=a.insertionPoint.nextSibling:a.prepend?c=a.container.firstChild:c=a.before:c=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(o,c),a.tags.push(o)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(a){a.forEach(this._insertTag)},t.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(sC(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var c=rC(o);try{c.insertRule(a,c.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(a));this.ctr++},t.flush=function(){this.tags.forEach(function(a){var o;return(o=a.parentNode)==null?void 0:o.removeChild(a)}),this.tags=[],this.ctr=0},e}(),ei="-ms-",Om="-moz-",xt="-webkit-",Gw="comm",lv="rule",cv="decl",lC="@import",Fw="@keyframes",cC="@layer",uC=Math.abs,a2=String.fromCharCode,dC=Object.assign;function fC(e,t){return Vn(e,0)^45?(((t<<2^Vn(e,0))<<2^Vn(e,1))<<2^Vn(e,2))<<2^Vn(e,3):0}function qw(e){return e.trim()}function hC(e,t){return(e=t.exec(e))?e[0]:e}function vt(e,t,i){return e.replace(t,i)}function o3(e,t){return e.indexOf(t)}function Vn(e,t){return e.charCodeAt(t)|0}function F0(e,t,i){return e.slice(t,i)}function Mr(e){return e.length}function uv(e){return e.length}function U1(e,t){return t.push(e),e}function pC(e,t){return e.map(t).join("")}var r2=1,rd=1,Yw=0,$i=0,mn=0,vd="";function s2(e,t,i,a,o,c,f){return{value:e,root:t,parent:i,type:a,props:o,children:c,line:r2,column:rd,length:f,return:""}}function T0(e,t){return dC(s2("",null,null,"",null,null,0),e,{length:-e.length},t)}function mC(){return mn}function gC(){return mn=$i>0?Vn(vd,--$i):0,rd--,mn===10&&(rd=1,r2--),mn}function na(){return mn=$i<Yw?Vn(vd,$i++):0,rd++,mn===10&&(rd=1,r2++),mn}function _r(){return Vn(vd,$i)}function hm(){return $i}function rh(e,t){return F0(vd,e,t)}function q0(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ww(e){return r2=rd=1,Yw=Mr(vd=e),$i=0,[]}function Zw(e){return vd="",e}function pm(e){return qw(rh($i-1,l3(e===91?e+2:e===40?e+1:e)))}function xC(e){for(;(mn=_r())&&mn<33;)na();return q0(e)>2||q0(mn)>3?"":" "}function vC(e,t){for(;--t&&na()&&!(mn<48||mn>102||mn>57&&mn<65||mn>70&&mn<97););return rh(e,hm()+(t<6&&_r()==32&&na()==32))}function l3(e){for(;na();)switch(mn){case e:return $i;case 34:case 39:e!==34&&e!==39&&l3(mn);break;case 40:e===41&&l3(e);break;case 92:na();break}return $i}function yC(e,t){for(;na()&&e+mn!==57;)if(e+mn===84&&_r()===47)break;return"/*"+rh(t,$i-1)+"*"+a2(e===47?e:na())}function wC(e){for(;!q0(_r());)na();return rh(e,$i)}function bC(e){return Zw(mm("",null,null,null,[""],e=Ww(e),0,[0],e))}function mm(e,t,i,a,o,c,f,h,p){for(var g=0,y=0,b=f,S=0,T=0,E=0,L=1,P=1,_=1,R=0,O="",N=o,V=c,Y=a,G=O;P;)switch(E=R,R=na()){case 40:if(E!=108&&Vn(G,b-1)==58){o3(G+=vt(pm(R),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:G+=pm(R);break;case 9:case 10:case 13:case 32:G+=xC(E);break;case 92:G+=vC(hm()-1,7);continue;case 47:switch(_r()){case 42:case 47:U1(SC(yC(na(),hm()),t,i),p);break;default:G+="/"}break;case 123*L:h[g++]=Mr(G)*_;case 125*L:case 59:case 0:switch(R){case 0:case 125:P=0;case 59+y:_==-1&&(G=vt(G,/\f/g,"")),T>0&&Mr(G)-b&&U1(T>32?i4(G+";",a,i,b-1):i4(vt(G," ","")+";",a,i,b-2),p);break;case 59:G+=";";default:if(U1(Y=n4(G,t,i,g,y,o,h,O,N=[],V=[],b),c),R===123)if(y===0)mm(G,t,Y,Y,N,c,b,h,V);else switch(S===99&&Vn(G,3)===110?100:S){case 100:case 108:case 109:case 115:mm(e,Y,Y,a&&U1(n4(e,Y,Y,0,0,o,h,O,o,N=[],b),V),o,V,b,h,a?N:V);break;default:mm(G,Y,Y,Y,[""],V,0,h,V)}}g=y=T=0,L=_=1,O=G="",b=f;break;case 58:b=1+Mr(G),T=E;default:if(L<1){if(R==123)--L;else if(R==125&&L++==0&&gC()==125)continue}switch(G+=a2(R),R*L){case 38:_=y>0?1:(G+="\f",-1);break;case 44:h[g++]=(Mr(G)-1)*_,_=1;break;case 64:_r()===45&&(G+=pm(na())),S=_r(),y=b=Mr(O=G+=wC(hm())),R++;break;case 45:E===45&&Mr(G)==2&&(L=0)}}return c}function n4(e,t,i,a,o,c,f,h,p,g,y){for(var b=o-1,S=o===0?c:[""],T=uv(S),E=0,L=0,P=0;E<a;++E)for(var _=0,R=F0(e,b+1,b=uC(L=f[E])),O=e;_<T;++_)(O=qw(L>0?S[_]+" "+R:vt(R,/&\f/g,S[_])))&&(p[P++]=O);return s2(e,t,i,o===0?lv:h,p,g,y)}function SC(e,t,i){return s2(e,t,i,Gw,a2(mC()),F0(e,2,-2),0)}function i4(e,t,i,a){return s2(e,t,i,cv,F0(e,0,a),F0(e,a+1,-1),a)}function nd(e,t){for(var i="",a=uv(e),o=0;o<a;o++)i+=t(e[o],o,e,t)||"";return i}function CC(e,t,i,a){switch(e.type){case cC:if(e.children.length)break;case lC:case cv:return e.return=e.return||e.value;case Gw:return"";case Fw:return e.return=e.value+"{"+nd(e.children,a)+"}";case lv:e.value=e.props.join(",")}return Mr(i=nd(e.children,a))?e.return=e.value+"{"+i+"}":""}function TC(e){var t=uv(e);return function(i,a,o,c){for(var f="",h=0;h<t;h++)f+=e[h](i,a,o,c)||"";return f}}function EC(e){return function(t){t.root||(t=t.return)&&e(t)}}function AC(e){var t=Object.create(null);return function(i){return t[i]===void 0&&(t[i]=e(i)),t[i]}}var MC=function(t,i,a){for(var o=0,c=0;o=c,c=_r(),o===38&&c===12&&(i[a]=1),!q0(c);)na();return rh(t,$i)},jC=function(t,i){var a=-1,o=44;do switch(q0(o)){case 0:o===38&&_r()===12&&(i[a]=1),t[a]+=MC($i-1,i,a);break;case 2:t[a]+=pm(o);break;case 4:if(o===44){t[++a]=_r()===58?"&\f":"",i[a]=t[a].length;break}default:t[a]+=a2(o)}while(o=na());return t},RC=function(t,i){return Zw(jC(Ww(t),i))},a4=new WeakMap,OC=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var i=t.value,a=t.parent,o=t.column===a.column&&t.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(t.props.length===1&&i.charCodeAt(0)!==58&&!a4.get(a))&&!o){a4.set(t,!0);for(var c=[],f=RC(i,c),h=a.props,p=0,g=0;p<f.length;p++)for(var y=0;y<h.length;y++,g++)t.props[g]=c[p]?f[p].replace(/&\f/g,h[y]):h[y]+" "+f[p]}}},LC=function(t){if(t.type==="decl"){var i=t.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(t.return="",t.value="")}};function Xw(e,t){switch(fC(e,t)){case 5103:return xt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return xt+e+Om+e+ei+e+e;case 6828:case 4268:return xt+e+ei+e+e;case 6165:return xt+e+ei+"flex-"+e+e;case 5187:return xt+e+vt(e,/(\w+).+(:[^]+)/,xt+"box-$1$2"+ei+"flex-$1$2")+e;case 5443:return xt+e+ei+"flex-item-"+vt(e,/flex-|-self/,"")+e;case 4675:return xt+e+ei+"flex-line-pack"+vt(e,/align-content|flex-|-self/,"")+e;case 5548:return xt+e+ei+vt(e,"shrink","negative")+e;case 5292:return xt+e+ei+vt(e,"basis","preferred-size")+e;case 6060:return xt+"box-"+vt(e,"-grow","")+xt+e+ei+vt(e,"grow","positive")+e;case 4554:return xt+vt(e,/([^-])(transform)/g,"$1"+xt+"$2")+e;case 6187:return vt(vt(vt(e,/(zoom-|grab)/,xt+"$1"),/(image-set)/,xt+"$1"),e,"")+e;case 5495:case 3959:return vt(e,/(image-set\([^]*)/,xt+"$1$`$1");case 4968:return vt(vt(e,/(.+:)(flex-)?(.*)/,xt+"box-pack:$3"+ei+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xt+e+e;case 4095:case 3583:case 4068:case 2532:return vt(e,/(.+)-inline(.+)/,xt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mr(e)-1-t>6)switch(Vn(e,t+1)){case 109:if(Vn(e,t+4)!==45)break;case 102:return vt(e,/(.+:)(.+)-([^]+)/,"$1"+xt+"$2-$3$1"+Om+(Vn(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~o3(e,"stretch")?Xw(vt(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Vn(e,t+1)!==115)break;case 6444:switch(Vn(e,Mr(e)-3-(~o3(e,"!important")&&10))){case 107:return vt(e,":",":"+xt)+e;case 101:return vt(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+xt+(Vn(e,14)===45?"inline-":"")+"box$3$1"+xt+"$2$3$1"+ei+"$2box$3")+e}break;case 5936:switch(Vn(e,t+11)){case 114:return xt+e+ei+vt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return xt+e+ei+vt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return xt+e+ei+vt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return xt+e+ei+e+e}return e}var _C=function(t,i,a,o){if(t.length>-1&&!t.return)switch(t.type){case cv:t.return=Xw(t.value,t.length);break;case Fw:return nd([T0(t,{value:vt(t.value,"@","@"+xt)})],o);case lv:if(t.length)return pC(t.props,function(c){switch(hC(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return nd([T0(t,{props:[vt(c,/:(read-\w+)/,":"+Om+"$1")]})],o);case"::placeholder":return nd([T0(t,{props:[vt(c,/:(plac\w+)/,":"+xt+"input-$1")]}),T0(t,{props:[vt(c,/:(plac\w+)/,":"+Om+"$1")]}),T0(t,{props:[vt(c,/:(plac\w+)/,ei+"input-$1")]})],o)}return""})}},kC=[_C],DC=function(t){var i=t.key;if(i==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(L){var P=L.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(L),L.setAttribute("data-s",""))})}var o=t.stylisPlugins||kC,c={},f,h=[];f=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(L){for(var P=L.getAttribute("data-emotion").split(" "),_=1;_<P.length;_++)c[P[_]]=!0;h.push(L)});var p,g=[OC,LC];{var y,b=[CC,EC(function(L){y.insert(L)})],S=TC(g.concat(o,b)),T=function(P){return nd(bC(P),S)};p=function(P,_,R,O){y=R,T(P?P+"{"+_.styles+"}":_.styles),O&&(E.inserted[_.name]=!0)}}var E={key:i,sheet:new oC({key:i,container:f,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:c,registered:{},insert:p};return E.sheet.hydrate(h),E},Wg={exports:{}},Ct={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r4;function VC(){if(r4)return Ct;r4=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,i=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,f=e?Symbol.for("react.provider"):60109,h=e?Symbol.for("react.context"):60110,p=e?Symbol.for("react.async_mode"):60111,g=e?Symbol.for("react.concurrent_mode"):60111,y=e?Symbol.for("react.forward_ref"):60112,b=e?Symbol.for("react.suspense"):60113,S=e?Symbol.for("react.suspense_list"):60120,T=e?Symbol.for("react.memo"):60115,E=e?Symbol.for("react.lazy"):60116,L=e?Symbol.for("react.block"):60121,P=e?Symbol.for("react.fundamental"):60117,_=e?Symbol.for("react.responder"):60118,R=e?Symbol.for("react.scope"):60119;function O(V){if(typeof V=="object"&&V!==null){var Y=V.$$typeof;switch(Y){case t:switch(V=V.type,V){case p:case g:case a:case c:case o:case b:return V;default:switch(V=V&&V.$$typeof,V){case h:case y:case E:case T:case f:return V;default:return Y}}case i:return Y}}}function N(V){return O(V)===g}return Ct.AsyncMode=p,Ct.ConcurrentMode=g,Ct.ContextConsumer=h,Ct.ContextProvider=f,Ct.Element=t,Ct.ForwardRef=y,Ct.Fragment=a,Ct.Lazy=E,Ct.Memo=T,Ct.Portal=i,Ct.Profiler=c,Ct.StrictMode=o,Ct.Suspense=b,Ct.isAsyncMode=function(V){return N(V)||O(V)===p},Ct.isConcurrentMode=N,Ct.isContextConsumer=function(V){return O(V)===h},Ct.isContextProvider=function(V){return O(V)===f},Ct.isElement=function(V){return typeof V=="object"&&V!==null&&V.$$typeof===t},Ct.isForwardRef=function(V){return O(V)===y},Ct.isFragment=function(V){return O(V)===a},Ct.isLazy=function(V){return O(V)===E},Ct.isMemo=function(V){return O(V)===T},Ct.isPortal=function(V){return O(V)===i},Ct.isProfiler=function(V){return O(V)===c},Ct.isStrictMode=function(V){return O(V)===o},Ct.isSuspense=function(V){return O(V)===b},Ct.isValidElementType=function(V){return typeof V=="string"||typeof V=="function"||V===a||V===g||V===c||V===o||V===b||V===S||typeof V=="object"&&V!==null&&(V.$$typeof===E||V.$$typeof===T||V.$$typeof===f||V.$$typeof===h||V.$$typeof===y||V.$$typeof===P||V.$$typeof===_||V.$$typeof===R||V.$$typeof===L)},Ct.typeOf=O,Ct}var s4;function zC(){return s4||(s4=1,Wg.exports=VC()),Wg.exports}var Zg,o4;function HC(){if(o4)return Zg;o4=1;var e=zC(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};c[e.ForwardRef]=a,c[e.Memo]=o;function f(E){return e.isMemo(E)?o:c[E.$$typeof]||t}var h=Object.defineProperty,p=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,S=Object.prototype;function T(E,L,P){if(typeof L!="string"){if(S){var _=b(L);_&&_!==S&&T(E,_,P)}var R=p(L);g&&(R=R.concat(g(L)));for(var O=f(E),N=f(L),V=0;V<R.length;++V){var Y=R[V];if(!i[Y]&&!(P&&P[Y])&&!(N&&N[Y])&&!(O&&O[Y])){var G=y(L,Y);try{h(E,Y,G)}catch{}}}}return E}return Zg=T,Zg}HC();var PC=!0;function NC(e,t,i){var a="";return i.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(a+=o+" ")}),a}var Kw=function(t,i,a){var o=t.key+"-"+i.name;(a===!1||PC===!1)&&t.registered[o]===void 0&&(t.registered[o]=i.styles)},Qw=function(t,i,a){Kw(t,i,a);var o=t.key+"-"+i.name;if(t.inserted[i.name]===void 0){var c=i;do t.insert(i===c?"."+o:"",c,t.sheet,!0),c=c.next;while(c!==void 0)}};function BC(e){for(var t=0,i,a=0,o=e.length;o>=4;++a,o-=4)i=e.charCodeAt(a)&255|(e.charCodeAt(++a)&255)<<8|(e.charCodeAt(++a)&255)<<16|(e.charCodeAt(++a)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,t=(i&65535)*1540483477+((i>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(a+2)&255)<<16;case 2:t^=(e.charCodeAt(a+1)&255)<<8;case 1:t^=e.charCodeAt(a)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var IC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$C=/[A-Z]|^ms/g,UC=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Jw=function(t){return t.charCodeAt(1)===45},l4=function(t){return t!=null&&typeof t!="boolean"},Xg=AC(function(e){return Jw(e)?e:e.replace($C,"-$&").toLowerCase()}),c4=function(t,i){switch(t){case"animation":case"animationName":if(typeof i=="string")return i.replace(UC,function(a,o,c){return jr={name:o,styles:c,next:jr},o})}return IC[t]!==1&&!Jw(t)&&typeof i=="number"&&i!==0?i+"px":i};function Y0(e,t,i){if(i==null)return"";var a=i;if(a.__emotion_styles!==void 0)return a;switch(typeof i){case"boolean":return"";case"object":{var o=i;if(o.anim===1)return jr={name:o.name,styles:o.styles,next:jr},o.name;var c=i;if(c.styles!==void 0){var f=c.next;if(f!==void 0)for(;f!==void 0;)jr={name:f.name,styles:f.styles,next:jr},f=f.next;var h=c.styles+";";return h}return GC(e,t,i)}case"function":{if(e!==void 0){var p=jr,g=i(e);return jr=p,Y0(e,t,g)}break}}var y=i;return y}function GC(e,t,i){var a="";if(Array.isArray(i))for(var o=0;o<i.length;o++)a+=Y0(e,t,i[o])+";";else for(var c in i){var f=i[c];if(typeof f!="object"){var h=f;l4(h)&&(a+=Xg(c)+":"+c4(c,h)+";")}else if(Array.isArray(f)&&typeof f[0]=="string"&&t==null)for(var p=0;p<f.length;p++)l4(f[p])&&(a+=Xg(c)+":"+c4(c,f[p])+";");else{var g=Y0(e,t,f);switch(c){case"animation":case"animationName":{a+=Xg(c)+":"+g+";";break}default:a+=c+"{"+g+"}"}}}return a}var u4=/label:\s*([^\s;{]+)\s*(;|$)/g,jr;function dv(e,t,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,o="";jr=void 0;var c=e[0];if(c==null||c.raw===void 0)a=!1,o+=Y0(i,t,c);else{var f=c;o+=f[0]}for(var h=1;h<e.length;h++)if(o+=Y0(i,t,e[h]),a){var p=c;o+=p[h]}u4.lastIndex=0;for(var g="",y;(y=u4.exec(o))!==null;)g+="-"+y[1];var b=BC(o)+g;return{name:b,styles:o,next:jr}}var FC=function(t){return t()},e8=Xy.useInsertionEffect?Xy.useInsertionEffect:!1,qC=e8||FC,d4=e8||H.useLayoutEffect,t8=H.createContext(typeof HTMLElement<"u"?DC({key:"css"}):null);t8.Provider;var n8=function(t){return H.forwardRef(function(i,a){var o=H.useContext(t8);return t(i,o,a)})},i8=H.createContext({}),fv={}.hasOwnProperty,c3="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",YC=function(t,i){var a={};for(var o in i)fv.call(i,o)&&(a[o]=i[o]);return a[c3]=t,a},WC=function(t){var i=t.cache,a=t.serialized,o=t.isStringTag;return Kw(i,a,o),qC(function(){return Qw(i,a,o)}),null},ZC=n8(function(e,t,i){var a=e.css;typeof a=="string"&&t.registered[a]!==void 0&&(a=t.registered[a]);var o=e[c3],c=[a],f="";typeof e.className=="string"?f=NC(t.registered,c,e.className):e.className!=null&&(f=e.className+" ");var h=dv(c,void 0,H.useContext(i8));f+=t.key+"-"+h.name;var p={};for(var g in e)fv.call(e,g)&&g!=="css"&&g!==c3&&(p[g]=e[g]);return p.className=f,i&&(p.ref=i),H.createElement(H.Fragment,null,H.createElement(WC,{cache:t,serialized:h,isStringTag:typeof o=="string"}),H.createElement(o,p))}),XC=ZC,f4=function(t,i){var a=arguments;if(i==null||!fv.call(i,"css"))return H.createElement.apply(void 0,a);var o=a.length,c=new Array(o);c[0]=XC,c[1]=YC(t,i);for(var f=2;f<o;f++)c[f]=a[f];return H.createElement.apply(null,c)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(f4||(f4={}));var KC=n8(function(e,t){var i=e.styles,a=dv([i],void 0,H.useContext(i8)),o=H.useRef();return d4(function(){var c=t.key+"-global",f=new t.sheet.constructor({key:c,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),h=!1,p=document.querySelector('style[data-emotion="'+c+" "+a.name+'"]');return t.sheet.tags.length&&(f.before=t.sheet.tags[0]),p!==null&&(h=!0,p.setAttribute("data-emotion",c),f.hydrate([p])),o.current=[f,h],function(){f.flush()}},[t]),d4(function(){var c=o.current,f=c[0],h=c[1];if(h){c[1]=!1;return}if(a.next!==void 0&&Qw(t,a.next,!0),f.tags.length){var p=f.tags[f.tags.length-1].nextElementSibling;f.before=p,f.flush()}t.insert("",a,f,!1)},[t,a.name]),null});function QC(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return dv(t)}const JC="/assets/Geist-Regular-BCrLS6HJ.ttf",eT="/assets/Geist-Medium-C6X8vKEc.ttf",tT="/assets/BebasNeue-Regular-D2CONTwO.ttf",nT="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",iT=QC`
  /* Font Awesome */
  @font-face {
    font-family: 'Geist Regular';
    src: url(${JC}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Додано для кращого відображення шрифтів */
  }

  /* Helvetica */
  @font-face {
    font-family: 'Geist Medium';
    src: url(${eT}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bebas Neue Regular';
    src: url(${tT}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${nT}) format('truetype');
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
`;var ti=function(){return ti=Object.assign||function(t){for(var i,a=1,o=arguments.length;a<o;a++){i=arguments[a];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c])}return t},ti.apply(this,arguments)};function sd(e,t,i){if(i||arguments.length===2)for(var a=0,o=t.length,c;a<o;a++)(c||!(a in t))&&(c||(c=Array.prototype.slice.call(t,0,a)),c[a]=t[a]);return e.concat(c||Array.prototype.slice.call(t))}var Nt="-ms-",V0="-moz-",Tt="-webkit-",a8="comm",o2="rule",hv="decl",aT="@import",r8="@keyframes",rT="@layer",s8=Math.abs,pv=String.fromCharCode,u3=Object.assign;function sT(e,t){return An(e,0)^45?(((t<<2^An(e,0))<<2^An(e,1))<<2^An(e,2))<<2^An(e,3):0}function o8(e){return e.trim()}function ms(e,t){return(e=t.exec(e))?e[0]:e}function Xe(e,t,i){return e.replace(t,i)}function gm(e,t,i){return e.indexOf(t,i)}function An(e,t){return e.charCodeAt(t)|0}function od(e,t,i){return e.slice(t,i)}function Rr(e){return e.length}function l8(e){return e.length}function _0(e,t){return t.push(e),e}function oT(e,t){return e.map(t).join("")}function h4(e,t){return e.filter(function(i){return!ms(i,t)})}var l2=1,ld=1,c8=0,ya=0,gn=0,yd="";function c2(e,t,i,a,o,c,f,h){return{value:e,root:t,parent:i,type:a,props:o,children:c,line:l2,column:ld,length:f,return:"",siblings:h}}function To(e,t){return u3(c2("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Uu(e){for(;e.root;)e=To(e.root,{children:[e]});_0(e,e.siblings)}function lT(){return gn}function cT(){return gn=ya>0?An(yd,--ya):0,ld--,gn===10&&(ld=1,l2--),gn}function Ga(){return gn=ya<c8?An(yd,ya++):0,ld++,gn===10&&(ld=1,l2++),gn}function nc(){return An(yd,ya)}function xm(){return ya}function u2(e,t){return od(yd,e,t)}function d3(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function uT(e){return l2=ld=1,c8=Rr(yd=e),ya=0,[]}function dT(e){return yd="",e}function Kg(e){return o8(u2(ya-1,f3(e===91?e+2:e===40?e+1:e)))}function fT(e){for(;(gn=nc())&&gn<33;)Ga();return d3(e)>2||d3(gn)>3?"":" "}function hT(e,t){for(;--t&&Ga()&&!(gn<48||gn>102||gn>57&&gn<65||gn>70&&gn<97););return u2(e,xm()+(t<6&&nc()==32&&Ga()==32))}function f3(e){for(;Ga();)switch(gn){case e:return ya;case 34:case 39:e!==34&&e!==39&&f3(gn);break;case 40:e===41&&f3(e);break;case 92:Ga();break}return ya}function pT(e,t){for(;Ga()&&e+gn!==57;)if(e+gn===84&&nc()===47)break;return"/*"+u2(t,ya-1)+"*"+pv(e===47?e:Ga())}function mT(e){for(;!d3(nc());)Ga();return u2(e,ya)}function gT(e){return dT(vm("",null,null,null,[""],e=uT(e),0,[0],e))}function vm(e,t,i,a,o,c,f,h,p){for(var g=0,y=0,b=f,S=0,T=0,E=0,L=1,P=1,_=1,R=0,O="",N=o,V=c,Y=a,G=O;P;)switch(E=R,R=Ga()){case 40:if(E!=108&&An(G,b-1)==58){gm(G+=Xe(Kg(R),"&","&\f"),"&\f",s8(g?h[g-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:G+=Kg(R);break;case 9:case 10:case 13:case 32:G+=fT(E);break;case 92:G+=hT(xm()-1,7);continue;case 47:switch(nc()){case 42:case 47:_0(xT(pT(Ga(),xm()),t,i,p),p);break;default:G+="/"}break;case 123*L:h[g++]=Rr(G)*_;case 125*L:case 59:case 0:switch(R){case 0:case 125:P=0;case 59+y:_==-1&&(G=Xe(G,/\f/g,"")),T>0&&Rr(G)-b&&_0(T>32?m4(G+";",a,i,b-1,p):m4(Xe(G," ","")+";",a,i,b-2,p),p);break;case 59:G+=";";default:if(_0(Y=p4(G,t,i,g,y,o,h,O,N=[],V=[],b,c),c),R===123)if(y===0)vm(G,t,Y,Y,N,c,b,h,V);else switch(S===99&&An(G,3)===110?100:S){case 100:case 108:case 109:case 115:vm(e,Y,Y,a&&_0(p4(e,Y,Y,0,0,o,h,O,o,N=[],b,V),V),o,V,b,h,a?N:V);break;default:vm(G,Y,Y,Y,[""],V,0,h,V)}}g=y=T=0,L=_=1,O=G="",b=f;break;case 58:b=1+Rr(G),T=E;default:if(L<1){if(R==123)--L;else if(R==125&&L++==0&&cT()==125)continue}switch(G+=pv(R),R*L){case 38:_=y>0?1:(G+="\f",-1);break;case 44:h[g++]=(Rr(G)-1)*_,_=1;break;case 64:nc()===45&&(G+=Kg(Ga())),S=nc(),y=b=Rr(O=G+=mT(xm())),R++;break;case 45:E===45&&Rr(G)==2&&(L=0)}}return c}function p4(e,t,i,a,o,c,f,h,p,g,y,b){for(var S=o-1,T=o===0?c:[""],E=l8(T),L=0,P=0,_=0;L<a;++L)for(var R=0,O=od(e,S+1,S=s8(P=f[L])),N=e;R<E;++R)(N=o8(P>0?T[R]+" "+O:Xe(O,/&\f/g,T[R])))&&(p[_++]=N);return c2(e,t,i,o===0?o2:h,p,g,y,b)}function xT(e,t,i,a){return c2(e,t,i,a8,pv(lT()),od(e,2,-2),0,a)}function m4(e,t,i,a,o){return c2(e,t,i,hv,od(e,0,a),od(e,a+1,-1),a,o)}function u8(e,t,i){switch(sT(e,t)){case 5103:return Tt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Tt+e+e;case 4789:return V0+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Tt+e+V0+e+Nt+e+e;case 5936:switch(An(e,t+11)){case 114:return Tt+e+Nt+Xe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Tt+e+Nt+Xe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Tt+e+Nt+Xe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Tt+e+Nt+e+e;case 6165:return Tt+e+Nt+"flex-"+e+e;case 5187:return Tt+e+Xe(e,/(\w+).+(:[^]+)/,Tt+"box-$1$2"+Nt+"flex-$1$2")+e;case 5443:return Tt+e+Nt+"flex-item-"+Xe(e,/flex-|-self/g,"")+(ms(e,/flex-|baseline/)?"":Nt+"grid-row-"+Xe(e,/flex-|-self/g,""))+e;case 4675:return Tt+e+Nt+"flex-line-pack"+Xe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Tt+e+Nt+Xe(e,"shrink","negative")+e;case 5292:return Tt+e+Nt+Xe(e,"basis","preferred-size")+e;case 6060:return Tt+"box-"+Xe(e,"-grow","")+Tt+e+Nt+Xe(e,"grow","positive")+e;case 4554:return Tt+Xe(e,/([^-])(transform)/g,"$1"+Tt+"$2")+e;case 6187:return Xe(Xe(Xe(e,/(zoom-|grab)/,Tt+"$1"),/(image-set)/,Tt+"$1"),e,"")+e;case 5495:case 3959:return Xe(e,/(image-set\([^]*)/,Tt+"$1$`$1");case 4968:return Xe(Xe(e,/(.+:)(flex-)?(.*)/,Tt+"box-pack:$3"+Nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Tt+e+e;case 4200:if(!ms(e,/flex-|baseline/))return Nt+"grid-column-align"+od(e,t)+e;break;case 2592:case 3360:return Nt+Xe(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(a,o){return t=o,ms(a.props,/grid-\w+-end/)})?~gm(e+(i=i[t].value),"span",0)?e:Nt+Xe(e,"-start","")+e+Nt+"grid-row-span:"+(~gm(i,"span",0)?ms(i,/\d+/):+ms(i,/\d+/)-+ms(e,/\d+/))+";":Nt+Xe(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(a){return ms(a.props,/grid-\w+-start/)})?e:Nt+Xe(Xe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Xe(e,/(.+)-inline(.+)/,Tt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rr(e)-1-t>6)switch(An(e,t+1)){case 109:if(An(e,t+4)!==45)break;case 102:return Xe(e,/(.+:)(.+)-([^]+)/,"$1"+Tt+"$2-$3$1"+V0+(An(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~gm(e,"stretch",0)?u8(Xe(e,"stretch","fill-available"),t,i)+e:e}break;case 5152:case 5920:return Xe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,c,f,h,p,g){return Nt+o+":"+c+g+(f?Nt+o+"-span:"+(h?p:+p-+c)+g:"")+e});case 4949:if(An(e,t+6)===121)return Xe(e,":",":"+Tt)+e;break;case 6444:switch(An(e,An(e,14)===45?18:11)){case 120:return Xe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Tt+(An(e,14)===45?"inline-":"")+"box$3$1"+Tt+"$2$3$1"+Nt+"$2box$3")+e;case 100:return Xe(e,":",":"+Nt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Xe(e,"scroll-","scroll-snap-")+e}return e}function Lm(e,t){for(var i="",a=0;a<e.length;a++)i+=t(e[a],a,e,t)||"";return i}function vT(e,t,i,a){switch(e.type){case rT:if(e.children.length)break;case aT:case hv:return e.return=e.return||e.value;case a8:return"";case r8:return e.return=e.value+"{"+Lm(e.children,a)+"}";case o2:if(!Rr(e.value=e.props.join(",")))return""}return Rr(i=Lm(e.children,a))?e.return=e.value+"{"+i+"}":""}function yT(e){var t=l8(e);return function(i,a,o,c){for(var f="",h=0;h<t;h++)f+=e[h](i,a,o,c)||"";return f}}function wT(e){return function(t){t.root||(t=t.return)&&e(t)}}function bT(e,t,i,a){if(e.length>-1&&!e.return)switch(e.type){case hv:e.return=u8(e.value,e.length,i);return;case r8:return Lm([To(e,{value:Xe(e.value,"@","@"+Tt)})],a);case o2:if(e.length)return oT(i=e.props,function(o){switch(ms(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Uu(To(e,{props:[Xe(o,/:(read-\w+)/,":"+V0+"$1")]})),Uu(To(e,{props:[o]})),u3(e,{props:h4(i,a)});break;case"::placeholder":Uu(To(e,{props:[Xe(o,/:(plac\w+)/,":"+Tt+"input-$1")]})),Uu(To(e,{props:[Xe(o,/:(plac\w+)/,":"+V0+"$1")]})),Uu(To(e,{props:[Xe(o,/:(plac\w+)/,Nt+"input-$1")]})),Uu(To(e,{props:[o]})),u3(e,{props:h4(i,a)});break}return""})}}var ST={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ea={},cd=typeof process<"u"&&ea!==void 0&&(ea.REACT_APP_SC_ATTR||ea.SC_ATTR)||"data-styled",d8="active",f8="data-styled-version",d2="6.1.19",mv=`/*!sc*/
`,_m=typeof window<"u"&&typeof document<"u",CT=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ea!==void 0&&ea.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ea.REACT_APP_SC_DISABLE_SPEEDY!==""?ea.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ea.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ea!==void 0&&ea.SC_DISABLE_SPEEDY!==void 0&&ea.SC_DISABLE_SPEEDY!==""&&ea.SC_DISABLE_SPEEDY!=="false"&&ea.SC_DISABLE_SPEEDY),TT={},f2=Object.freeze([]),ud=Object.freeze({});function h8(e,t,i){return i===void 0&&(i=ud),e.theme!==i.theme&&e.theme||t||i.theme}var p8=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ET=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,AT=/(^-|-$)/g;function g4(e){return e.replace(ET,"-").replace(AT,"")}var MT=/(a)(d)/gi,G1=52,x4=function(e){return String.fromCharCode(e+(e>25?39:97))};function h3(e){var t,i="";for(t=Math.abs(e);t>G1;t=t/G1|0)i=x4(t%G1)+i;return(x4(t%G1)+i).replace(MT,"$1-$2")}var Qg,m8=5381,Zu=function(e,t){for(var i=t.length;i;)e=33*e^t.charCodeAt(--i);return e},g8=function(e){return Zu(m8,e)};function gv(e){return h3(g8(e)>>>0)}function jT(e){return e.displayName||e.name||"Component"}function Jg(e){return typeof e=="string"&&!0}var x8=typeof Symbol=="function"&&Symbol.for,v8=x8?Symbol.for("react.memo"):60115,RT=x8?Symbol.for("react.forward_ref"):60112,OT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},LT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},y8={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_T=((Qg={})[RT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qg[v8]=y8,Qg);function v4(e){return("type"in(t=e)&&t.type.$$typeof)===v8?y8:"$$typeof"in e?_T[e.$$typeof]:OT;var t}var kT=Object.defineProperty,DT=Object.getOwnPropertyNames,y4=Object.getOwnPropertySymbols,VT=Object.getOwnPropertyDescriptor,zT=Object.getPrototypeOf,w4=Object.prototype;function w8(e,t,i){if(typeof t!="string"){if(w4){var a=zT(t);a&&a!==w4&&w8(e,a,i)}var o=DT(t);y4&&(o=o.concat(y4(t)));for(var c=v4(e),f=v4(t),h=0;h<o.length;++h){var p=o[h];if(!(p in LT||i&&i[p]||f&&p in f||c&&p in c)){var g=VT(t,p);try{kT(e,p,g)}catch{}}}}return e}function dd(e){return typeof e=="function"}function xv(e){return typeof e=="object"&&"styledComponentId"in e}function Jl(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function km(e,t){if(e.length===0)return"";for(var i=e[0],a=1;a<e.length;a++)i+=e[a];return i}function W0(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function p3(e,t,i){if(i===void 0&&(i=!1),!i&&!W0(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)e[a]=p3(e[a],t[a]);else if(W0(t))for(var a in t)e[a]=p3(e[a],t[a]);return e}function vv(e,t){Object.defineProperty(e,"toString",{value:t})}function sh(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var HT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var i=0,a=0;a<t;a++)i+=this.groupSizes[a];return i},e.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,c=o;t>=c;)if((c<<=1)<0)throw sh(16,"".concat(t));this.groupSizes=new Uint32Array(c),this.groupSizes.set(a),this.length=c;for(var f=o;f<c;f++)this.groupSizes[f]=0}for(var h=this.indexOfGroup(t+1),p=(f=0,i.length);f<p;f++)this.tag.insertRule(h,i[f])&&(this.groupSizes[t]++,h++)},e.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],a=this.indexOfGroup(t),o=a+i;this.groupSizes[t]=0;for(var c=a;c<o;c++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),c=o+a,f=o;f<c;f++)i+="".concat(this.tag.getRule(f)).concat(mv);return i},e}(),ym=new Map,Dm=new Map,wm=1,F1=function(e){if(ym.has(e))return ym.get(e);for(;Dm.has(wm);)wm++;var t=wm++;return ym.set(e,t),Dm.set(t,e),t},PT=function(e,t){wm=t+1,ym.set(e,t),Dm.set(t,e)},NT="style[".concat(cd,"][").concat(f8,'="').concat(d2,'"]'),BT=new RegExp("^".concat(cd,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),IT=function(e,t,i){for(var a,o=i.split(","),c=0,f=o.length;c<f;c++)(a=o[c])&&e.registerName(t,a)},$T=function(e,t){for(var i,a=((i=t.textContent)!==null&&i!==void 0?i:"").split(mv),o=[],c=0,f=a.length;c<f;c++){var h=a[c].trim();if(h){var p=h.match(BT);if(p){var g=0|parseInt(p[1],10),y=p[2];g!==0&&(PT(y,g),IT(e,y,p[3]),e.getTag().insertRules(g,o)),o.length=0}else o.push(h)}}},b4=function(e){for(var t=document.querySelectorAll(NT),i=0,a=t.length;i<a;i++){var o=t[i];o&&o.getAttribute(cd)!==d8&&($T(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function UT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var b8=function(e){var t=document.head,i=e||t,a=document.createElement("style"),o=function(h){var p=Array.from(h.querySelectorAll("style[".concat(cd,"]")));return p[p.length-1]}(i),c=o!==void 0?o.nextSibling:null;a.setAttribute(cd,d8),a.setAttribute(f8,d2);var f=UT();return f&&a.setAttribute("nonce",f),i.insertBefore(a,c),a},GT=function(){function e(t){this.element=b8(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,c=a.length;o<c;o++){var f=a[o];if(f.ownerNode===i)return f}throw sh(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},e}(),FT=function(){function e(t){this.element=b8(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),qT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),S4=_m,YT={isServer:!_m,useCSSOMInjection:!CT},Vm=function(){function e(t,i,a){t===void 0&&(t=ud),i===void 0&&(i={});var o=this;this.options=ti(ti({},YT),t),this.gs=i,this.names=new Map(a),this.server=!!t.isServer,!this.server&&_m&&S4&&(S4=!1,b4(this)),vv(this,function(){return function(c){for(var f=c.getTag(),h=f.length,p="",g=function(b){var S=function(_){return Dm.get(_)}(b);if(S===void 0)return"continue";var T=c.names.get(S),E=f.getGroup(b);if(T===void 0||!T.size||E.length===0)return"continue";var L="".concat(cd,".g").concat(b,'[id="').concat(S,'"]'),P="";T!==void 0&&T.forEach(function(_){_.length>0&&(P+="".concat(_,","))}),p+="".concat(E).concat(L,'{content:"').concat(P,'"}').concat(mv)},y=0;y<h;y++)g(y);return p}(o)})}return e.registerId=function(t){return F1(t)},e.prototype.rehydrate=function(){!this.server&&_m&&b4(this)},e.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new e(ti(ti({},this.options),t),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(i){var a=i.useCSSOMInjection,o=i.target;return i.isServer?new qT(o):a?new GT(o):new FT(o)}(this.options),new HT(t)));var t},e.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},e.prototype.registerName=function(t,i){if(F1(t),this.names.has(t))this.names.get(t).add(i);else{var a=new Set;a.add(i),this.names.set(t,a)}},e.prototype.insertRules=function(t,i,a){this.registerName(t,i),this.getTag().insertRules(F1(t),a)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(F1(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),WT=/&/g,ZT=/^\s*\/\/.*$/gm;function S8(e,t){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=S8(i.children,t)),i})}function XT(e){var t,i,a,o=ud,c=o.options,f=c===void 0?ud:c,h=o.plugins,p=h===void 0?f2:h,g=function(S,T,E){return E.startsWith(i)&&E.endsWith(i)&&E.replaceAll(i,"").length>0?".".concat(t):S},y=p.slice();y.push(function(S){S.type===o2&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(WT,i).replace(a,g))}),f.prefix&&y.push(bT),y.push(vT);var b=function(S,T,E,L){T===void 0&&(T=""),E===void 0&&(E=""),L===void 0&&(L="&"),t=L,i=T,a=new RegExp("\\".concat(i,"\\b"),"g");var P=S.replace(ZT,""),_=gT(E||T?"".concat(E," ").concat(T," { ").concat(P," }"):P);f.namespace&&(_=S8(_,f.namespace));var R=[];return Lm(_,yT(y.concat(wT(function(O){return R.push(O)})))),R};return b.hash=p.length?p.reduce(function(S,T){return T.name||sh(15),Zu(S,T.name)},m8).toString():"",b}var KT=new Vm,m3=XT(),C8=ct.createContext({shouldForwardProp:void 0,styleSheet:KT,stylis:m3});C8.Consumer;ct.createContext(void 0);function g3(){return H.useContext(C8)}var T8=function(){function e(t,i){var a=this;this.inject=function(o,c){c===void 0&&(c=m3);var f=a.name+c.hash;o.hasNameForId(a.id,f)||o.insertRules(a.id,f,c(a.rules,f,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,vv(this,function(){throw sh(12,String(a.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=m3),this.name+t.hash},e}(),QT=function(e){return e>="A"&&e<="Z"};function C4(e){for(var t="",i=0;i<e.length;i++){var a=e[i];if(i===1&&a==="-"&&e[0]==="-")return e;QT(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var E8=function(e){return e==null||e===!1||e===""},A8=function(e){var t,i,a=[];for(var o in e){var c=e[o];e.hasOwnProperty(o)&&!E8(c)&&(Array.isArray(c)&&c.isCss||dd(c)?a.push("".concat(C4(o),":"),c,";"):W0(c)?a.push.apply(a,sd(sd(["".concat(o," {")],A8(c),!1),["}"],!1)):a.push("".concat(C4(o),": ").concat((t=o,(i=c)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in ST||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function jo(e,t,i,a){if(E8(e))return[];if(xv(e))return[".".concat(e.styledComponentId)];if(dd(e)){if(!dd(c=e)||c.prototype&&c.prototype.isReactComponent||!t)return[e];var o=e(t);return jo(o,t,i,a)}var c;return e instanceof T8?i?(e.inject(i,a),[e.getName(a)]):[e]:W0(e)?A8(e):Array.isArray(e)?Array.prototype.concat.apply(f2,e.map(function(f){return jo(f,t,i,a)})):[e.toString()]}function M8(e){for(var t=0;t<e.length;t+=1){var i=e[t];if(dd(i)&&!xv(i))return!1}return!0}var JT=g8(d2),eE=function(){function e(t,i,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&M8(t),this.componentId=i,this.baseHash=Zu(JT,i),this.baseStyle=a,Vm.registerId(i)}return e.prototype.generateAndInjectStyles=function(t,i,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=Jl(o,this.staticRulesId);else{var c=km(jo(this.rules,t,i,a)),f=h3(Zu(this.baseHash,c)>>>0);if(!i.hasNameForId(this.componentId,f)){var h=a(c,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,h)}o=Jl(o,f),this.staticRulesId=f}else{for(var p=Zu(this.baseHash,a.hash),g="",y=0;y<this.rules.length;y++){var b=this.rules[y];if(typeof b=="string")g+=b;else if(b){var S=km(jo(b,t,i,a));p=Zu(p,S+y),g+=S}}if(g){var T=h3(p>>>0);i.hasNameForId(this.componentId,T)||i.insertRules(this.componentId,T,a(g,".".concat(T),void 0,this.componentId)),o=Jl(o,T)}}return o},e}(),yv=ct.createContext(void 0);yv.Consumer;var ex={};function tE(e,t,i){var a=xv(e),o=e,c=!Jg(e),f=t.attrs,h=f===void 0?f2:f,p=t.componentId,g=p===void 0?function(N,V){var Y=typeof N!="string"?"sc":g4(N);ex[Y]=(ex[Y]||0)+1;var G="".concat(Y,"-").concat(gv(d2+Y+ex[Y]));return V?"".concat(V,"-").concat(G):G}(t.displayName,t.parentComponentId):p,y=t.displayName,b=y===void 0?function(N){return Jg(N)?"styled.".concat(N):"Styled(".concat(jT(N),")")}(e):y,S=t.displayName&&t.componentId?"".concat(g4(t.displayName),"-").concat(t.componentId):t.componentId||g,T=a&&o.attrs?o.attrs.concat(h).filter(Boolean):h,E=t.shouldForwardProp;if(a&&o.shouldForwardProp){var L=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;E=function(N,V){return L(N,V)&&P(N,V)}}else E=L}var _=new eE(i,S,a?o.componentStyle:void 0);function R(N,V){return function(Y,G,Q){var ie=Y.attrs,se=Y.componentStyle,de=Y.defaultProps,ye=Y.foldedComponentIds,Ae=Y.styledComponentId,Re=Y.target,Ee=ct.useContext(yv),X=g3(),le=Y.shouldForwardProp||X.shouldForwardProp,ue=h8(G,Ee,de)||ud,xe=function(Ue,_e,sn){for(var it,Yt=ti(ti({},_e),{className:void 0,theme:sn}),Pr=0;Pr<Ue.length;Pr+=1){var bi=dd(it=Ue[Pr])?it(Yt):it;for(var Mn in bi)Yt[Mn]=Mn==="className"?Jl(Yt[Mn],bi[Mn]):Mn==="style"?ti(ti({},Yt[Mn]),bi[Mn]):bi[Mn]}return _e.className&&(Yt.className=Jl(Yt.className,_e.className)),Yt}(ie,G,ue),B=xe.as||Re,re={};for(var we in xe)xe[we]===void 0||we[0]==="$"||we==="as"||we==="theme"&&xe.theme===ue||(we==="forwardedAs"?re.as=xe.forwardedAs:le&&!le(we,B)||(re[we]=xe[we]));var be=function(Ue,_e){var sn=g3(),it=Ue.generateAndInjectStyles(_e,sn.styleSheet,sn.stylis);return it}(se,xe),Oe=Jl(ye,Ae);return be&&(Oe+=" "+be),xe.className&&(Oe+=" "+xe.className),re[Jg(B)&&!p8.has(B)?"class":"className"]=Oe,Q&&(re.ref=Q),H.createElement(B,re)}(O,N,V)}R.displayName=b;var O=ct.forwardRef(R);return O.attrs=T,O.componentStyle=_,O.displayName=b,O.shouldForwardProp=E,O.foldedComponentIds=a?Jl(o.foldedComponentIds,o.styledComponentId):"",O.styledComponentId=S,O.target=a?o.target:e,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(N){this._foldedDefaultProps=a?function(V){for(var Y=[],G=1;G<arguments.length;G++)Y[G-1]=arguments[G];for(var Q=0,ie=Y;Q<ie.length;Q++)p3(V,ie[Q],!0);return V}({},o.defaultProps,N):N}}),vv(O,function(){return".".concat(O.styledComponentId)}),c&&w8(O,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function T4(e,t){for(var i=[e[0]],a=0,o=t.length;a<o;a+=1)i.push(t[a],e[a+1]);return i}var E4=function(e){return Object.assign(e,{isCss:!0})};function h2(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(dd(e)||W0(e))return E4(jo(T4(f2,sd([e],t,!0))));var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?jo(a):E4(jo(T4(a,t)))}function x3(e,t,i){if(i===void 0&&(i=ud),!t)throw sh(1,t);var a=function(o){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return e(t,i,h2.apply(void 0,sd([o],c,!1)))};return a.attrs=function(o){return x3(e,t,ti(ti({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return x3(e,t,ti(ti({},i),o))},a}var j8=function(e){return x3(tE,e)},M=j8;p8.forEach(function(e){M[e]=j8(e)});var nE=function(){function e(t,i){this.rules=t,this.componentId=i,this.isStatic=M8(t),Vm.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,i,a,o){var c=o(km(jo(this.rules,i,a,o)),""),f=this.componentId+t;a.insertRules(f,f,c)},e.prototype.removeStyles=function(t,i){i.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,i,a,o){t>2&&Vm.registerId(this.componentId+t),this.removeStyles(t,a),this.createStyles(t,i,a,o)},e}();function iE(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=h2.apply(void 0,sd([e],t,!1)),o="sc-global-".concat(gv(JSON.stringify(a))),c=new nE(a,o),f=function(p){var g=g3(),y=ct.useContext(yv),b=ct.useRef(g.styleSheet.allocateGSInstance(o)).current;return g.styleSheet.server&&h(b,p,g.styleSheet,y,g.stylis),ct.useLayoutEffect(function(){if(!g.styleSheet.server)return h(b,p,g.styleSheet,y,g.stylis),function(){return c.removeStyles(b,g.styleSheet)}},[b,p,g.styleSheet,y,g.stylis]),null};function h(p,g,y,b,S){if(c.isStatic)c.renderStyles(p,TT,y,S);else{var T=ti(ti({},g),{theme:h8(g,b,f.defaultProps)});c.renderStyles(p,T,y,S)}}return ct.memo(f)}function Lo(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=km(h2.apply(void 0,sd([e],t,!1))),o=gv(a);return new T8(o,a)}const aE=M.nav`
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
  ${({$isScrolled:e})=>e&&h2`
      background: rgba(0, 0, 0, 0.39);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    `}
  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`,rE=M.div`
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
`,sE=M(Hn)`
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
`,oE=M.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1440px) {
    gap: 40px;
  }
`,E0=M.li`
  position: relative;
`,A0=M(Hn)`
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
`,A4=M.div`
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
`,q1=M.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
  }
`,So=M.span`
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
`,lE=M.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,R8=M.button`
display: none;
 @media screen and (min-width: 768px) {


  background: transparent;
  border: 1px solid
    ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
  color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
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
    background: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#000000":"#FFFFFF"}; // Білий колір на світлому фоні
    color: ${({$overlayOpen:e,$darkMode:t})=>e||t?"#FFFFFF":"#000000"}; // Чорний колір на світлому фоні
  }

  a {
    color: inherit;
    text-decoration: none;
  }
   }
`;var Y1={},M4;function cE(){if(M4)return Y1;M4=1,Y1.match=c,Y1.parse=f;var e=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function c(y,b){return f(y).some(function(S){var T=S.inverse,E=S.type==="all"||b.type===S.type;if(E&&T||!(E||T))return!1;var L=S.expressions.every(function(P){var _=P.feature,R=P.modifier,O=P.value,N=b[_];if(!N)return!1;switch(_){case"orientation":case"scan":return N.toLowerCase()===O.toLowerCase();case"width":case"height":case"device-width":case"device-height":O=g(O),N=g(N);break;case"resolution":O=p(O),N=p(N);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":O=h(O),N=h(N);break;case"grid":case"color":case"color-index":case"monochrome":O=parseInt(O,10)||1,N=parseInt(N,10)||0;break}switch(R){case"min":return N>=O;case"max":return N<=O;default:return N===O}});return L&&!T||!L&&T})}function f(y){return y.split(",").map(function(b){b=b.trim();var S=b.match(e),T=S[1],E=S[2],L=S[3]||"",P={};return P.inverse=!!T&&T.toLowerCase()==="not",P.type=E?E.toLowerCase():"all",L=L.match(/\([^\)]+\)/g)||[],P.expressions=L.map(function(_){var R=_.match(t),O=R[1].toLowerCase().match(i);return{modifier:O[1],feature:O[2],value:R[2]}}),P})}function h(y){var b=Number(y),S;return b||(S=y.match(/^(\d+)\s*\/\s*(\d+)$/),b=S[1]/S[2]),b}function p(y){var b=parseFloat(y),S=String(y).match(o)[1];switch(S){case"dpcm":return b/2.54;case"dppx":return b*96;default:return b}}function g(y){var b=parseFloat(y),S=String(y).match(a)[1];switch(S){case"em":return b*16;case"rem":return b*16;case"cm":return b*96/2.54;case"mm":return b*96/2.54/10;case"in":return b*96;case"pt":return b*72;case"pc":return b*72/12;default:return b}}return Y1}var tx,j4;function uE(){if(j4)return tx;j4=1;var e=cE().match,t=typeof window<"u"?window.matchMedia:null;function i(o,c,f){var h=this,p;t&&!f&&(p=t.call(window,o)),p?(this.matches=p.matches,this.media=p.media,p.addListener(b)):(this.matches=e(o,c),this.media=o),this.addListener=g,this.removeListener=y,this.dispose=S;function g(T){p&&p.addListener(T)}function y(T){p&&p.removeListener(T)}function b(T){h.matches=T.matches,h.media=T.media}function S(){p&&p.removeListener(b)}}function a(o,c,f){return new i(o,c,f)}return tx=a,tx}var dE=uE();const fE=t2(dE);var hE=/[A-Z]/g,pE=/^ms-/,nx={};function mE(e){return"-"+e.toLowerCase()}function O8(e){if(nx.hasOwnProperty(e))return nx[e];var t=e.replace(hE,mE);return nx[e]=pE.test(t)?"-"+t:t}function gE(e,t){if(e===t)return!0;if(!e||!t)return!1;const i=Object.keys(e),a=Object.keys(t),o=i.length;if(a.length!==o)return!1;for(let c=0;c<o;c++){const f=i[c];if(e[f]!==t[f]||!Object.prototype.hasOwnProperty.call(t,f))return!1}return!0}var ix={exports:{}},ax,R4;function xE(){if(R4)return ax;R4=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ax=e,ax}var rx,O4;function vE(){if(O4)return rx;O4=1;var e=xE();function t(){}function i(){}return i.resetWarningCache=t,rx=function(){function a(f,h,p,g,y,b){if(b!==e){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}a.isRequired=a;function o(){return a}var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:t};return c.PropTypes=c,c},rx}var L4;function yE(){return L4||(L4=1,ix.exports=vE()()),ix.exports}var wE=yE();const yt=t2(wE),vi=yt.oneOfType([yt.string,yt.number]),L8={all:yt.bool,grid:yt.bool,aural:yt.bool,braille:yt.bool,handheld:yt.bool,print:yt.bool,projection:yt.bool,screen:yt.bool,tty:yt.bool,tv:yt.bool,embossed:yt.bool},bE={orientation:yt.oneOf(["portrait","landscape"]),scan:yt.oneOf(["progressive","interlace"]),aspectRatio:yt.string,deviceAspectRatio:yt.string,height:vi,deviceHeight:vi,width:vi,deviceWidth:vi,color:yt.bool,colorIndex:yt.bool,monochrome:yt.bool,resolution:vi,type:Object.keys(L8)},{type:MB,...SE}=bE,CE={minAspectRatio:yt.string,maxAspectRatio:yt.string,minDeviceAspectRatio:yt.string,maxDeviceAspectRatio:yt.string,minHeight:vi,maxHeight:vi,minDeviceHeight:vi,maxDeviceHeight:vi,minWidth:vi,maxWidth:vi,minDeviceWidth:vi,maxDeviceWidth:vi,minColor:yt.number,maxColor:yt.number,minColorIndex:yt.number,maxColorIndex:yt.number,minMonochrome:yt.number,maxMonochrome:yt.number,minResolution:vi,maxResolution:vi,...SE},TE={...L8,...CE};var EE={all:TE};const AE=e=>`not ${e}`,ME=(e,t)=>{const i=O8(e);return typeof t=="number"&&(t=`${t}px`),t===!0?i:t===!1?AE(i):`(${i}: ${t})`},jE=e=>e.join(" and "),RE=e=>{const t=[];return Object.keys(EE.all).forEach(i=>{const a=e[i];a!=null&&t.push(ME(i,a))}),jE(t)},OE=H.createContext(void 0),LE=e=>e.query||RE(e),_4=e=>e?Object.keys(e).reduce((i,a)=>(i[O8(a)]=e[a],i),{}):void 0,_8=()=>{const e=H.useRef(!1);return H.useEffect(()=>{e.current=!0},[]),e.current},_E=e=>{const t=H.useContext(OE),i=()=>_4(e)||_4(t),[a,o]=H.useState(i);return H.useEffect(()=>{const c=i();gE(a,c)||o(c)},[e,t]),a},kE=e=>{const t=()=>LE(e),[i,a]=H.useState(t);return H.useEffect(()=>{const o=t();i!==o&&a(o)},[e]),i},DE=(e,t)=>{const i=()=>fE(e,t||{},!!t),[a,o]=H.useState(i),c=_8();return H.useEffect(()=>{if(c){const f=i();return o(f),()=>{f&&f.dispose()}}},[e,t]),a},VE=e=>{const[t,i]=H.useState(e.matches);return H.useEffect(()=>{const a=o=>{i(o.matches)};return e.addListener(a),i(e.matches),()=>{e.removeListener(a)}},[e]),t},jt=(e,t,i)=>{const a=_E(t),o=kE(e);if(!o)throw new Error("Invalid or missing MediaQuery!");const c=DE(o,a),f=VE(c);return _8(),H.useEffect(()=>{},[f]),H.useEffect(()=>()=>{c&&c.dispose()},[]),f},wv=H.createContext({});function lc(e){const t=H.useRef(null);return t.current===null&&(t.current=e()),t.current}const bv=typeof window<"u",oh=bv?H.useLayoutEffect:H.useEffect,p2=H.createContext(null);function Sv(e,t){e.indexOf(t)===-1&&e.push(t)}function Cv(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}const Hr=(e,t,i)=>i>t?t:i<e?e:i;let Z0=()=>{};const vs={},k8=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function D8(e){return typeof e=="object"&&e!==null}const V8=e=>/^0[^.\s]+$/u.test(e);function Tv(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ni=e=>e,zE=(e,t)=>i=>t(e(i)),lh=(...e)=>e.reduce(zE),fd=(e,t,i)=>{const a=t-e;return a===0?1:(i-e)/a};class Ev{constructor(){this.subscriptions=[]}add(t){return Sv(this.subscriptions,t),()=>Cv(this.subscriptions,t)}notify(t,i,a){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,i,a);else for(let c=0;c<o;c++){const f=this.subscriptions[c];f&&f(t,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const kr=e=>e*1e3,Dr=e=>e/1e3;function Av(e,t){return t?e*(1e3/t):0}const z8=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e,HE=1e-7,PE=12;function NE(e,t,i,a,o){let c,f,h=0;do f=t+(i-t)/2,c=z8(f,a,o)-e,c>0?i=f:t=f;while(Math.abs(c)>HE&&++h<PE);return f}function ch(e,t,i,a){if(e===t&&i===a)return Ni;const o=c=>NE(c,0,1,e,i);return c=>c===0||c===1?c:z8(o(c),t,a)}const H8=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,P8=e=>t=>1-e(1-t),qa=ch(.33,1.53,.69,.99),Mv=P8(qa),N8=H8(Mv),B8=e=>(e*=2)<1?.5*Mv(e):.5*(2-Math.pow(2,-10*(e-1))),jv=e=>1-Math.sin(Math.acos(e)),zm=P8(jv),I8=H8(jv),BE=ch(.42,0,1,1),ve=ch(0,0,.58,1),$8=ch(.42,0,.58,1),IE=e=>Array.isArray(e)&&typeof e[0]!="number",U8=e=>Array.isArray(e)&&typeof e[0]=="number",$E={linear:Ni,easeIn:BE,easeInOut:$8,easeOut:ve,circIn:jv,circInOut:I8,circOut:zm,backIn:Mv,backInOut:N8,backOut:qa,anticipate:B8},UE=e=>typeof e=="string",k4=e=>{if(U8(e)){Z0(e.length===4);const[t,i,a,o]=e;return ch(t,i,a,o)}else if(UE(e))return $E[e];return e},W1=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function GE(e,t){let i=new Set,a=new Set,o=!1,c=!1;const f=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(y){f.has(y)&&(g.schedule(y),e()),y(h)}const g={schedule:(y,b=!1,S=!1)=>{const E=S&&o?i:a;return b&&f.add(y),E.has(y)||E.add(y),y},cancel:y=>{a.delete(y),f.delete(y)},process:y=>{if(h=y,o){c=!0;return}o=!0,[i,a]=[a,i],i.forEach(p),i.clear(),o=!1,c&&(c=!1,g.process(y))}};return g}const FE=40;function G8(e,t){let i=!1,a=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>i=!0,f=W1.reduce((O,N)=>(O[N]=GE(c),O),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:y,update:b,preRender:S,render:T,postRender:E}=f,L=()=>{const O=vs.useManualTiming?o.timestamp:performance.now();i=!1,vs.useManualTiming||(o.delta=a?1e3/60:Math.max(Math.min(O-o.timestamp,FE),1)),o.timestamp=O,o.isProcessing=!0,h.process(o),p.process(o),g.process(o),y.process(o),b.process(o),S.process(o),T.process(o),E.process(o),o.isProcessing=!1,i&&t&&(a=!1,e(L))},P=()=>{i=!0,a=!0,o.isProcessing||e(L)};return{schedule:W1.reduce((O,N)=>{const V=f[N];return O[N]=(Y,G=!1,Q=!1)=>(i||P(),V.schedule(Y,G,Q)),O},{}),cancel:O=>{for(let N=0;N<W1.length;N++)f[W1[N]].cancel(O)},state:o,steps:f}}const{schedule:Rt,cancel:Ya,state:Tn,steps:sx}=G8(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ni,!0);let bm;function qE(){bm=void 0}const Pi={now:()=>(bm===void 0&&Pi.set(Tn.isProcessing||vs.useManualTiming?Tn.timestamp:performance.now()),bm),set:e=>{bm=e,queueMicrotask(qE)}},F8=e=>t=>typeof t=="string"&&t.startsWith(e),Rv=F8("--"),YE=F8("var(--"),Ov=e=>YE(e)?WE.test(e.split("/*")[0].trim()):!1,WE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,wd={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},X0={...wd,transform:e=>Hr(0,1,e)},Z1={...wd,default:1},z0=e=>Math.round(e*1e5)/1e5,Lv=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ZE(e){return e==null}const XE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,_v=(e,t)=>i=>!!(typeof i=="string"&&XE.test(i)&&i.startsWith(e)||t&&!ZE(i)&&Object.prototype.hasOwnProperty.call(i,t)),q8=(e,t,i)=>a=>{if(typeof a!="string")return a;const[o,c,f,h]=a.match(Lv);return{[e]:parseFloat(o),[t]:parseFloat(c),[i]:parseFloat(f),alpha:h!==void 0?parseFloat(h):1}},KE=e=>Hr(0,255,e),ox={...wd,transform:e=>Math.round(KE(e))},ec={test:_v("rgb","red"),parse:q8("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:a=1})=>"rgba("+ox.transform(e)+", "+ox.transform(t)+", "+ox.transform(i)+", "+z0(X0.transform(a))+")"};function QE(e){let t="",i="",a="",o="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),a=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),a=e.substring(3,4),o=e.substring(4,5),t+=t,i+=i,a+=a,o+=o),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const v3={test:_v("#"),parse:QE,transform:ec.transform},uh=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Eo=uh("deg"),Vr=uh("%"),Be=uh("px"),JE=uh("vh"),eA=uh("vw"),D4={...Vr,parse:e=>Vr.parse(e)/100,transform:e=>Vr.transform(e*100)},Xu={test:_v("hsl","hue"),parse:q8("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:a=1})=>"hsla("+Math.round(e)+", "+Vr.transform(z0(t))+", "+Vr.transform(z0(i))+", "+z0(X0.transform(a))+")"},pn={test:e=>ec.test(e)||v3.test(e)||Xu.test(e),parse:e=>ec.test(e)?ec.parse(e):Xu.test(e)?Xu.parse(e):v3.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ec.transform(e):Xu.transform(e),getAnimatableNone:e=>{const t=pn.parse(e);return t.alpha=0,pn.transform(t)}},tA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function nA(e){var t,i;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Lv))==null?void 0:t.length)||0)+(((i=e.match(tA))==null?void 0:i.length)||0)>0}const Y8="number",W8="color",iA="var",aA="var(",V4="${}",rA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function K0(e){const t=e.toString(),i=[],a={color:[],number:[],var:[]},o=[];let c=0;const h=t.replace(rA,p=>(pn.test(p)?(a.color.push(c),o.push(W8),i.push(pn.parse(p))):p.startsWith(aA)?(a.var.push(c),o.push(iA),i.push(p)):(a.number.push(c),o.push(Y8),i.push(parseFloat(p))),++c,V4)).split(V4);return{values:i,split:h,indexes:a,types:o}}function Z8(e){return K0(e).values}function X8(e){const{split:t,types:i}=K0(e),a=t.length;return o=>{let c="";for(let f=0;f<a;f++)if(c+=t[f],o[f]!==void 0){const h=i[f];h===Y8?c+=z0(o[f]):h===W8?c+=pn.transform(o[f]):c+=o[f]}return c}}const sA=e=>typeof e=="number"?0:pn.test(e)?pn.getAnimatableNone(e):e;function oA(e){const t=Z8(e);return X8(e)(t.map(sA))}const Ro={test:nA,parse:Z8,createTransformer:X8,getAnimatableNone:oA};function lx(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function lA({hue:e,saturation:t,lightness:i,alpha:a}){e/=360,t/=100,i/=100;let o=0,c=0,f=0;if(!t)o=c=f=i;else{const h=i<.5?i*(1+t):i+t-i*t,p=2*i-h;o=lx(p,h,e+1/3),c=lx(p,h,e),f=lx(p,h,e-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(f*255),alpha:a}}function Hm(e,t){return i=>i>0?t:e}const qt=(e,t,i)=>e+(t-e)*i,cx=(e,t,i)=>{const a=e*e,o=i*(t*t-a)+a;return o<0?0:Math.sqrt(o)},cA=[v3,ec,Xu],uA=e=>cA.find(t=>t.test(e));function z4(e){const t=uA(e);if(!t)return!1;let i=t.parse(e);return t===Xu&&(i=lA(i)),i}const H4=(e,t)=>{const i=z4(e),a=z4(t);if(!i||!a)return Hm(e,t);const o={...i};return c=>(o.red=cx(i.red,a.red,c),o.green=cx(i.green,a.green,c),o.blue=cx(i.blue,a.blue,c),o.alpha=qt(i.alpha,a.alpha,c),ec.transform(o))},y3=new Set(["none","hidden"]);function dA(e,t){return y3.has(e)?i=>i<=0?e:t:i=>i>=1?t:e}function fA(e,t){return i=>qt(e,t,i)}function kv(e){return typeof e=="number"?fA:typeof e=="string"?Ov(e)?Hm:pn.test(e)?H4:mA:Array.isArray(e)?K8:typeof e=="object"?pn.test(e)?H4:hA:Hm}function K8(e,t){const i=[...e],a=i.length,o=e.map((c,f)=>kv(c)(c,t[f]));return c=>{for(let f=0;f<a;f++)i[f]=o[f](c);return i}}function hA(e,t){const i={...e,...t},a={};for(const o in i)e[o]!==void 0&&t[o]!==void 0&&(a[o]=kv(e[o])(e[o],t[o]));return o=>{for(const c in a)i[c]=a[c](o);return i}}function pA(e,t){const i=[],a={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const c=t.types[o],f=e.indexes[c][a[c]],h=e.values[f]??0;i[o]=h,a[c]++}return i}const mA=(e,t)=>{const i=Ro.createTransformer(t),a=K0(e),o=K0(t);return a.indexes.var.length===o.indexes.var.length&&a.indexes.color.length===o.indexes.color.length&&a.indexes.number.length>=o.indexes.number.length?y3.has(e)&&!o.values.length||y3.has(t)&&!a.values.length?dA(e,t):lh(K8(pA(a,o),o.values),i):Hm(e,t)};function Q8(e,t,i){return typeof e=="number"&&typeof t=="number"&&typeof i=="number"?qt(e,t,i):kv(e)(e,t)}const gA=e=>{const t=({timestamp:i})=>e(i);return{start:(i=!0)=>Rt.update(t,i),stop:()=>Ya(t),now:()=>Tn.isProcessing?Tn.timestamp:Pi.now()}},J8=(e,t,i=10)=>{let a="";const o=Math.max(Math.round(t/i),2);for(let c=0;c<o;c++)a+=Math.round(e(c/(o-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Pm=2e4;function Dv(e){let t=0;const i=50;let a=e.next(t);for(;!a.done&&t<Pm;)t+=i,a=e.next(t);return t>=Pm?1/0:t}function xA(e,t=100,i){const a=i({...e,keyframes:[0,t]}),o=Math.min(Dv(a),Pm);return{type:"keyframes",ease:c=>a.next(o*c).value/t,duration:Dr(o)}}const vA=5;function e7(e,t,i){const a=Math.max(t-vA,0);return Av(i-e(a),t-a)}const Xt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ux=.001;function yA({duration:e=Xt.duration,bounce:t=Xt.bounce,velocity:i=Xt.velocity,mass:a=Xt.mass}){let o,c,f=1-t;f=Hr(Xt.minDamping,Xt.maxDamping,f),e=Hr(Xt.minDuration,Xt.maxDuration,Dr(e)),f<1?(o=g=>{const y=g*f,b=y*e,S=y-i,T=w3(g,f),E=Math.exp(-b);return ux-S/T*E},c=g=>{const b=g*f*e,S=b*i+i,T=Math.pow(f,2)*Math.pow(g,2)*e,E=Math.exp(-b),L=w3(Math.pow(g,2),f);return(-o(g)+ux>0?-1:1)*((S-T)*E)/L}):(o=g=>{const y=Math.exp(-g*e),b=(g-i)*e+1;return-ux+y*b},c=g=>{const y=Math.exp(-g*e),b=(i-g)*(e*e);return y*b});const h=5/e,p=bA(o,c,h);if(e=kr(e),isNaN(p))return{stiffness:Xt.stiffness,damping:Xt.damping,duration:e};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:f*2*Math.sqrt(a*g),duration:e}}}const wA=12;function bA(e,t,i){let a=i;for(let o=1;o<wA;o++)a=a-e(a)/t(a);return a}function w3(e,t){return e*Math.sqrt(1-t*t)}const SA=["duration","bounce"],CA=["stiffness","damping","mass"];function P4(e,t){return t.some(i=>e[i]!==void 0)}function TA(e){let t={velocity:Xt.velocity,stiffness:Xt.stiffness,damping:Xt.damping,mass:Xt.mass,isResolvedFromDuration:!1,...e};if(!P4(e,CA)&&P4(e,SA))if(e.visualDuration){const i=e.visualDuration,a=2*Math.PI/(i*1.2),o=a*a,c=2*Hr(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:Xt.mass,stiffness:o,damping:c}}else{const i=yA(e);t={...t,...i,mass:Xt.mass},t.isResolvedFromDuration=!0}return t}function Nm(e=Xt.visualDuration,t=Xt.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:a,restDelta:o}=i;const c=i.keyframes[0],f=i.keyframes[i.keyframes.length-1],h={done:!1,value:c},{stiffness:p,damping:g,mass:y,duration:b,velocity:S,isResolvedFromDuration:T}=TA({...i,velocity:-Dr(i.velocity||0)}),E=S||0,L=g/(2*Math.sqrt(p*y)),P=f-c,_=Dr(Math.sqrt(p/y)),R=Math.abs(P)<5;a||(a=R?Xt.restSpeed.granular:Xt.restSpeed.default),o||(o=R?Xt.restDelta.granular:Xt.restDelta.default);let O;if(L<1){const V=w3(_,L);O=Y=>{const G=Math.exp(-L*_*Y);return f-G*((E+L*_*P)/V*Math.sin(V*Y)+P*Math.cos(V*Y))}}else if(L===1)O=V=>f-Math.exp(-_*V)*(P+(E+_*P)*V);else{const V=_*Math.sqrt(L*L-1);O=Y=>{const G=Math.exp(-L*_*Y),Q=Math.min(V*Y,300);return f-G*((E+L*_*P)*Math.sinh(Q)+V*P*Math.cosh(Q))/V}}const N={calculatedDuration:T&&b||null,next:V=>{const Y=O(V);if(T)h.done=V>=b;else{let G=V===0?E:0;L<1&&(G=V===0?kr(E):e7(O,V,Y));const Q=Math.abs(G)<=a,ie=Math.abs(f-Y)<=o;h.done=Q&&ie}return h.value=h.done?f:Y,h},toString:()=>{const V=Math.min(Dv(N),Pm),Y=J8(G=>N.next(V*G).value,V,30);return V+"ms "+Y},toTransition:()=>{}};return N}Nm.applyToOptions=e=>{const t=xA(e,100,Nm);return e.ease=t.ease,e.duration=kr(t.duration),e.type="keyframes",e};function b3({keyframes:e,velocity:t=0,power:i=.8,timeConstant:a=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:f,min:h,max:p,restDelta:g=.5,restSpeed:y}){const b=e[0],S={done:!1,value:b},T=Q=>h!==void 0&&Q<h||p!==void 0&&Q>p,E=Q=>h===void 0?p:p===void 0||Math.abs(h-Q)<Math.abs(p-Q)?h:p;let L=i*t;const P=b+L,_=f===void 0?P:f(P);_!==P&&(L=_-b);const R=Q=>-L*Math.exp(-Q/a),O=Q=>_+R(Q),N=Q=>{const ie=R(Q),se=O(Q);S.done=Math.abs(ie)<=g,S.value=S.done?_:se};let V,Y;const G=Q=>{T(S.value)&&(V=Q,Y=Nm({keyframes:[S.value,E(S.value)],velocity:e7(O,Q,S.value),damping:o,stiffness:c,restDelta:g,restSpeed:y}))};return G(0),{calculatedDuration:null,next:Q=>{let ie=!1;return!Y&&V===void 0&&(ie=!0,N(Q),G(Q)),V!==void 0&&Q>=V?Y.next(Q-V):(!ie&&N(Q),S)}}}function EA(e,t,i){const a=[],o=i||vs.mix||Q8,c=e.length-1;for(let f=0;f<c;f++){let h=o(e[f],e[f+1]);if(t){const p=Array.isArray(t)?t[f]||Ni:t;h=lh(p,h)}a.push(h)}return a}function Vv(e,t,{clamp:i=!0,ease:a,mixer:o}={}){const c=e.length;if(Z0(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const f=e[0]===e[1];e[0]>e[c-1]&&(e=[...e].reverse(),t=[...t].reverse());const h=EA(t,a,o),p=h.length,g=y=>{if(f&&y<e[0])return t[0];let b=0;if(p>1)for(;b<e.length-2&&!(y<e[b+1]);b++);const S=fd(e[b],e[b+1],y);return h[b](S)};return i?y=>g(Hr(e[0],e[c-1],y)):g}function AA(e,t){const i=e[e.length-1];for(let a=1;a<=t;a++){const o=fd(0,t,a);e.push(qt(i,1,o))}}function t7(e){const t=[0];return AA(t,e.length-1),t}function MA(e,t){return e.map(i=>i*t)}function jA(e,t){return e.map(()=>t||$8).splice(0,e.length-1)}function H0({duration:e=300,keyframes:t,times:i,ease:a="easeInOut"}){const o=IE(a)?a.map(k4):k4(a),c={done:!1,value:t[0]},f=MA(i&&i.length===t.length?i:t7(t),e),h=Vv(f,t,{ease:Array.isArray(o)?o:jA(t,o)});return{calculatedDuration:e,next:p=>(c.value=h(p),c.done=p>=e,c)}}const RA=e=>e!==null;function zv(e,{repeat:t,repeatType:i="loop"},a,o=1){const c=e.filter(RA),h=o<0||t&&i!=="loop"&&t%2===1?0:c.length-1;return!h||a===void 0?c[h]:a}const OA={decay:b3,inertia:b3,tween:H0,keyframes:H0,spring:Nm};function n7(e){typeof e.type=="string"&&(e.type=OA[e.type])}class Hv{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,i){return this.finished.then(t,i)}}const LA=e=>e/100;class Pv extends Hv{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,o;const{motionValue:i}=this.options;i&&i.updatedAt!==Pi.now()&&this.tick(Pi.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(a=this.options).onStop)==null||o.call(a))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;n7(t);const{type:i=H0,repeat:a=0,repeatDelay:o=0,repeatType:c,velocity:f=0}=t;let{keyframes:h}=t;const p=i||H0;p!==H0&&typeof h[0]!="number"&&(this.mixKeyframes=lh(LA,Q8(h[0],h[1])),h=[0,100]);const g=p({...t,keyframes:h});c==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...h].reverse(),velocity:-f})),g.calculatedDuration===null&&(g.calculatedDuration=Dv(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+o,this.totalDuration=this.resolvedDuration*(a+1)-o,this.generator=g}updateTime(t){const i=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(t,i=!1){const{generator:a,totalDuration:o,mixKeyframes:c,mirroredGenerator:f,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:y,repeat:b,repeatType:S,repeatDelay:T,type:E,onUpdate:L,finalKeyframe:P}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),i?this.currentTime=t:this.updateTime(t);const _=this.currentTime-g*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?_<0:_>o;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let O=this.currentTime,N=a;if(b){const Q=Math.min(this.currentTime,o)/h;let ie=Math.floor(Q),se=Q%1;!se&&Q>=1&&(se=1),se===1&&ie--,ie=Math.min(ie,b+1),!!(ie%2)&&(S==="reverse"?(se=1-se,T&&(se-=T/h)):S==="mirror"&&(N=f)),O=Hr(0,1,se)*h}const V=R?{done:!1,value:y[0]}:N.next(O);c&&(V.value=c(V.value));let{done:Y}=V;!R&&p!==null&&(Y=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const G=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Y);return G&&E!==b3&&(V.value=zv(y,this.options,P,this.speed)),L&&L(V.value),G&&this.finish(),V}then(t,i){return this.finished.then(t,i)}get duration(){return Dr(this.calculatedDuration)}get time(){return Dr(this.currentTime)}set time(t){var i;t=kr(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(i=this.driver)==null||i.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Pi.now());const i=this.playbackSpeed!==t;this.playbackSpeed=t,i&&(this.time=Dr(this.currentTime))}play(){var o,c;if(this.isStopped)return;const{driver:t=gA,startTime:i}=this.options;this.driver||(this.driver=t(f=>this.tick(f))),(c=(o=this.options).onPlay)==null||c.call(o);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Pi.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(t=this.options).onComplete)==null||i.call(t)}cancel(){var t,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(t=this.options).onCancel)==null||i.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),t.observe(this)}}function _A(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const tc=e=>e*180/Math.PI,S3=e=>{const t=tc(Math.atan2(e[1],e[0]));return C3(t)},kA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:S3,rotateZ:S3,skewX:e=>tc(Math.atan(e[1])),skewY:e=>tc(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},C3=e=>(e=e%360,e<0&&(e+=360),e),N4=S3,B4=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),I4=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),DA={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:B4,scaleY:I4,scale:e=>(B4(e)+I4(e))/2,rotateX:e=>C3(tc(Math.atan2(e[6],e[5]))),rotateY:e=>C3(tc(Math.atan2(-e[2],e[0]))),rotateZ:N4,rotate:N4,skewX:e=>tc(Math.atan(e[4])),skewY:e=>tc(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function T3(e){return e.includes("scale")?1:0}function E3(e,t){if(!e||e==="none")return T3(t);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,o;if(i)a=DA,o=i;else{const h=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=kA,o=h}if(!o)return T3(t);const c=a[t],f=o[1].split(",").map(zA);return typeof c=="function"?c(f):f[c]}const VA=(e,t)=>{const{transform:i="none"}=getComputedStyle(e);return E3(i,t)};function zA(e){return parseFloat(e.trim())}const bd=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Sd=new Set(bd),$4=e=>e===wd||e===Be,HA=new Set(["x","y","z"]),PA=bd.filter(e=>!HA.has(e));function NA(e){const t=[];return PA.forEach(i=>{const a=e.getValue(i);a!==void 0&&(t.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),t}const ic={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>E3(t,"x"),y:(e,{transform:t})=>E3(t,"y")};ic.translateX=ic.x;ic.translateY=ic.y;const ac=new Set;let A3=!1,M3=!1,j3=!1;function i7(){if(M3){const e=Array.from(ac).filter(a=>a.needsMeasurement),t=new Set(e.map(a=>a.element)),i=new Map;t.forEach(a=>{const o=NA(a);o.length&&(i.set(a,o),a.render())}),e.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const o=i.get(a);o&&o.forEach(([c,f])=>{var h;(h=a.getValue(c))==null||h.set(f)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}M3=!1,A3=!1,ac.forEach(e=>e.complete(j3)),ac.clear()}function a7(){ac.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(M3=!0)})}function BA(){j3=!0,a7(),i7(),j3=!1}class Nv{constructor(t,i,a,o,c,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=i,this.name=a,this.motionValue=o,this.element=c,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(ac.add(this),A3||(A3=!0,Rt.read(a7),Rt.resolveKeyframes(i7))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:i,element:a,motionValue:o}=this;if(t[0]===null){const c=o==null?void 0:o.get(),f=t[t.length-1];if(c!==void 0)t[0]=c;else if(a&&i){const h=a.readValue(i,f);h!=null&&(t[0]=h)}t[0]===void 0&&(t[0]=f),o&&c===void 0&&o.set(t[0])}_A(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),ac.delete(this)}cancel(){this.state==="scheduled"&&(ac.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const IA=e=>e.startsWith("--");function $A(e,t,i){IA(t)?e.style.setProperty(t,i):e.style[t]=i}const r7=Tv(()=>window.ScrollTimeline!==void 0),UA={};function GA(e,t){const i=Tv(e);return()=>UA[t]??i()}const s7=GA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),k0=([e,t,i,a])=>`cubic-bezier(${e}, ${t}, ${i}, ${a})`,U4={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:k0([0,.65,.55,1]),circOut:k0([.55,0,1,.45]),backIn:k0([.31,.01,.66,-.59]),backOut:k0([.33,1.53,.69,.99])};function o7(e,t){if(e)return typeof e=="function"?s7()?J8(e,t):"ease-out":U8(e)?k0(e):Array.isArray(e)?e.map(i=>o7(i,t)||U4.easeOut):U4[e]}function FA(e,t,i,{delay:a=0,duration:o=300,repeat:c=0,repeatType:f="loop",ease:h="easeOut",times:p}={},g=void 0){const y={[t]:i};p&&(y.offset=p);const b=o7(h,o);Array.isArray(b)&&(y.easing=b);const S={delay:a,duration:o,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:c+1,direction:f==="reverse"?"alternate":"normal"};return g&&(S.pseudoElement=g),e.animate(y,S)}function l7(e){return typeof e=="function"&&"applyToOptions"in e}function qA({type:e,...t}){return l7(e)&&s7()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class YA extends Hv{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:i,name:a,keyframes:o,pseudoElement:c,allowFlatten:f=!1,finalKeyframe:h,onComplete:p}=t;this.isPseudoElement=!!c,this.allowFlatten=f,this.options=t,Z0(typeof t.type!="string");const g=qA(t);this.animation=FA(i,a,o,g,c),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const y=zv(o,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(y):$A(i,a,y),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,i;(i=(t=this.animation).finish)==null||i.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,i;this.isPseudoElement||(i=(t=this.animation).commitStyles)==null||i.call(t)}get duration(){var i,a;const t=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Dr(Number(t))}get time(){return Dr(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=kr(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:i}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&r7()?(this.animation.timeline=t,Ni):i(this)}}const c7={anticipate:B8,backInOut:N8,circInOut:I8};function WA(e){return e in c7}function ZA(e){typeof e.ease=="string"&&WA(e.ease)&&(e.ease=c7[e.ease])}const G4=10;class XA extends YA{constructor(t){ZA(t),n7(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:i,onUpdate:a,onComplete:o,element:c,...f}=this.options;if(!i)return;if(t!==void 0){i.set(t);return}const h=new Pv({...f,autoplay:!1}),p=kr(this.finishedTime??this.time);i.setWithVelocity(h.sample(p-G4).value,h.sample(p).value,G4),h.stop()}}const F4=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Ro.test(e)||e==="0")&&!e.startsWith("url("));function KA(e){const t=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}function QA(e,t,i,a){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const c=e[e.length-1],f=F4(o,t),h=F4(c,t);return!f||!h?!1:KA(e)||(i==="spring"||l7(i))&&a}function R3(e){e.duration=0,e.type}const JA=new Set(["opacity","clipPath","filter","transform"]),eM=Tv(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function tM(e){var y;const{motionValue:t,name:i,repeatDelay:a,repeatType:o,damping:c,type:f}=e;if(!(((y=t==null?void 0:t.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:g}=t.owner.getProps();return eM()&&i&&JA.has(i)&&(i!=="transform"||!g)&&!p&&!a&&o!=="mirror"&&c!==0&&f!=="inertia"}const nM=40;class iM extends Hv{constructor({autoplay:t=!0,delay:i=0,type:a="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:f="loop",keyframes:h,name:p,motionValue:g,element:y,...b}){var E;super(),this.stop=()=>{var L,P;this._animation&&(this._animation.stop(),(L=this.stopTimeline)==null||L.call(this)),(P=this.keyframeResolver)==null||P.cancel()},this.createdAt=Pi.now();const S={autoplay:t,delay:i,type:a,repeat:o,repeatDelay:c,repeatType:f,name:p,motionValue:g,element:y,...b},T=(y==null?void 0:y.KeyframeResolver)||Nv;this.keyframeResolver=new T(h,(L,P,_)=>this.onKeyframesResolved(L,P,S,!_),p,g,y),(E=this.keyframeResolver)==null||E.scheduleResolve()}onKeyframesResolved(t,i,a,o){this.keyframeResolver=void 0;const{name:c,type:f,velocity:h,delay:p,isHandoff:g,onUpdate:y}=a;this.resolvedAt=Pi.now(),QA(t,c,f,h)||((vs.instantAnimations||!p)&&(y==null||y(zv(t,a,i))),t[0]=t[t.length-1],R3(a),a.repeat=0);const S={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>nM?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:t},T=!g&&tM(S)?new XA({...S,element:S.motionValue.owner.current}):new Pv(S);T.finished.then(()=>this.notifyFinished()).catch(Ni),this.pendingTimeline&&(this.stopTimeline=T.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=T}get finished(){return this._animation?this.animation.finished:this._finished}then(t,i){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),BA()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const aM=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function rM(e){const t=aM.exec(e);if(!t)return[,];const[,i,a,o]=t;return[`--${i??a}`,o]}function u7(e,t,i=1){const[a,o]=rM(e);if(!a)return;const c=window.getComputedStyle(t).getPropertyValue(a);if(c){const f=c.trim();return k8(f)?parseFloat(f):f}return Ov(o)?u7(o,t,i+1):o}function Bv(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const d7=new Set(["width","height","top","left","right","bottom",...bd]),sM={test:e=>e==="auto",parse:e=>e},f7=e=>t=>t.test(e),h7=[wd,Be,Vr,Eo,eA,JE,sM],q4=e=>h7.find(f7(e));function oM(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||V8(e):!0}const lM=new Set(["brightness","contrast","saturate","opacity"]);function cM(e){const[t,i]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=i.match(Lv)||[];if(!a)return e;const o=i.replace(a,"");let c=lM.has(t)?1:0;return a!==i&&(c*=100),t+"("+c+o+")"}const uM=/\b([a-z-]*)\(.*?\)/gu,O3={...Ro,getAnimatableNone:e=>{const t=e.match(uM);return t?t.map(cM).join(" "):e}},Y4={...wd,transform:Math.round},dM={rotate:Eo,rotateX:Eo,rotateY:Eo,rotateZ:Eo,scale:Z1,scaleX:Z1,scaleY:Z1,scaleZ:Z1,skew:Eo,skewX:Eo,skewY:Eo,distance:Be,translateX:Be,translateY:Be,translateZ:Be,x:Be,y:Be,z:Be,perspective:Be,transformPerspective:Be,opacity:X0,originX:D4,originY:D4,originZ:Be},Iv={borderWidth:Be,borderTopWidth:Be,borderRightWidth:Be,borderBottomWidth:Be,borderLeftWidth:Be,borderRadius:Be,radius:Be,borderTopLeftRadius:Be,borderTopRightRadius:Be,borderBottomRightRadius:Be,borderBottomLeftRadius:Be,width:Be,maxWidth:Be,height:Be,maxHeight:Be,top:Be,right:Be,bottom:Be,left:Be,padding:Be,paddingTop:Be,paddingRight:Be,paddingBottom:Be,paddingLeft:Be,margin:Be,marginTop:Be,marginRight:Be,marginBottom:Be,marginLeft:Be,backgroundPositionX:Be,backgroundPositionY:Be,...dM,zIndex:Y4,fillOpacity:X0,strokeOpacity:X0,numOctaves:Y4},fM={...Iv,color:pn,backgroundColor:pn,outlineColor:pn,fill:pn,stroke:pn,borderColor:pn,borderTopColor:pn,borderRightColor:pn,borderBottomColor:pn,borderLeftColor:pn,filter:O3,WebkitFilter:O3},p7=e=>fM[e];function m7(e,t){let i=p7(e);return i!==O3&&(i=Ro),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const hM=new Set(["auto","none","0"]);function pM(e,t,i){let a=0,o;for(;a<e.length&&!o;){const c=e[a];typeof c=="string"&&!hM.has(c)&&K0(c).values.length&&(o=e[a]),a++}if(o&&i)for(const c of t)e[c]=m7(i,o)}class mM extends Nv{constructor(t,i,a,o,c){super(t,i,a,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let p=0;p<t.length;p++){let g=t[p];if(typeof g=="string"&&(g=g.trim(),Ov(g))){const y=u7(g,i.current);y!==void 0&&(t[p]=y),p===t.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!d7.has(a)||t.length!==2)return;const[o,c]=t,f=q4(o),h=q4(c);if(f!==h)if($4(f)&&$4(h))for(let p=0;p<t.length;p++){const g=t[p];typeof g=="string"&&(t[p]=parseFloat(g))}else ic[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:i}=this,a=[];for(let o=0;o<t.length;o++)(t[o]===null||oM(t[o]))&&a.push(o);a.length&&pM(t,a,i)}measureInitialState(){const{element:t,unresolvedKeyframes:i,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ic[a](t.measureViewportBox(),window.getComputedStyle(t.current)),i[0]=this.measuredOrigin;const o=i[i.length-1];o!==void 0&&t.getValue(a,o).jump(o,!1)}measureEndState(){var h;const{element:t,name:i,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const o=t.getValue(i);o&&o.jump(this.measuredOrigin,!1);const c=a.length-1,f=a[c];a[c]=ic[i](t.measureViewportBox(),window.getComputedStyle(t.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{t.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function $v(e,t,i){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const o=document.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const g7=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Uv(e){return D8(e)&&"offsetHeight"in e}const W4=30,gM=e=>!isNaN(parseFloat(e)),P0={current:void 0};class xM{constructor(t,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var c;const o=Pi.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=i.owner}setCurrent(t){this.current=t,this.updatedAt=Pi.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=gM(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new Ev);const a=this.events[t].add(i);return t==="change"?()=>{a(),Rt.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,i=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return P0.current&&P0.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Pi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>W4)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,W4);return Av(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,i;(t=this.dependents)==null||t.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ua(e,t){return new xM(e,t)}const{schedule:Gv}=G8(queueMicrotask,!1),$a={x:!1,y:!1};function x7(){return $a.x||$a.y}function vM(e){return e==="x"||e==="y"?$a[e]?null:($a[e]=!0,()=>{$a[e]=!1}):$a.x||$a.y?null:($a.x=$a.y=!0,()=>{$a.x=$a.y=!1})}function v7(e,t){const i=$v(e),a=new AbortController,o={passive:!0,...t,signal:a.signal};return[i,o,()=>a.abort()]}function Z4(e){return!(e.pointerType==="touch"||x7())}function yM(e,t,i={}){const[a,o,c]=v7(e,i),f=h=>{if(!Z4(h))return;const{target:p}=h,g=t(p,h);if(typeof g!="function"||!p)return;const y=b=>{Z4(b)&&(g(b),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,o)};return a.forEach(h=>{h.addEventListener("pointerenter",f,o)}),c}const y7=(e,t)=>t?e===t?!0:y7(e,t.parentElement):!1,Fv=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,wM=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function bM(e){return wM.has(e.tagName)||e.tabIndex!==-1}const Sm=new WeakSet;function X4(e){return t=>{t.key==="Enter"&&e(t)}}function dx(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const SM=(e,t)=>{const i=e.currentTarget;if(!i)return;const a=X4(()=>{if(Sm.has(i))return;dx(i,"down");const o=X4(()=>{dx(i,"up")}),c=()=>dx(i,"cancel");i.addEventListener("keyup",o,t),i.addEventListener("blur",c,t)});i.addEventListener("keydown",a,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),t)};function K4(e){return Fv(e)&&!x7()}function CM(e,t,i={}){const[a,o,c]=v7(e,i),f=h=>{const p=h.currentTarget;if(!K4(h))return;Sm.add(p);const g=t(p,h),y=(T,E)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),Sm.has(p)&&Sm.delete(p),K4(T)&&typeof g=="function"&&g(T,{success:E})},b=T=>{y(T,p===window||p===document||i.useGlobalTarget||y7(p,T.target))},S=T=>{y(T,!1)};window.addEventListener("pointerup",b,o),window.addEventListener("pointercancel",S,o)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",f,o),Uv(h)&&(h.addEventListener("focus",g=>SM(g,o)),!bM(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),c}function qv(e){return D8(e)&&"ownerSVGElement"in e}const Cm=new WeakMap;let Ao;const w7=(e,t,i)=>(a,o)=>o&&o[0]?o[0][e+"Size"]:qv(a)&&"getBBox"in a?a.getBBox()[t]:a[i],TM=w7("inline","width","offsetWidth"),EM=w7("block","height","offsetHeight");function AM({target:e,borderBoxSize:t}){var i;(i=Cm.get(e))==null||i.forEach(a=>{a(e,{get width(){return TM(e,t)},get height(){return EM(e,t)}})})}function MM(e){e.forEach(AM)}function jM(){typeof ResizeObserver>"u"||(Ao=new ResizeObserver(MM))}function RM(e,t){Ao||jM();const i=$v(e);return i.forEach(a=>{let o=Cm.get(a);o||(o=new Set,Cm.set(a,o)),o.add(t),Ao==null||Ao.observe(a)}),()=>{i.forEach(a=>{const o=Cm.get(a);o==null||o.delete(t),o!=null&&o.size||Ao==null||Ao.unobserve(a)})}}const Tm=new Set;let Ku;function OM(){Ku=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Tm.forEach(t=>t(e))},window.addEventListener("resize",Ku)}function LM(e){return Tm.add(e),Ku||OM(),()=>{Tm.delete(e),!Tm.size&&typeof Ku=="function"&&(window.removeEventListener("resize",Ku),Ku=void 0)}}function _M(e,t){return typeof e=="function"?LM(e):RM(e,t)}function b7(e,t){let i;const a=()=>{const{currentTime:o}=t,f=(o===null?0:o.value)/100;i!==f&&e(f),i=f};return Rt.preUpdate(a,!0),()=>Ya(a)}function kM(e){return qv(e)&&e.tagName==="svg"}function DM(...e){const t=!Array.isArray(e[0]),i=t?0:-1,a=e[0+i],o=e[1+i],c=e[2+i],f=e[3+i],h=Vv(o,c,f);return t?h(a):h}const ni=e=>!!(e&&e.getVelocity),VM=[...h7,pn,Ro],zM=e=>VM.find(f7(e)),m2=H.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class HM extends H.Component{getSnapshotBeforeUpdate(t){const i=this.props.childRef.current;if(i&&t.isPresent&&!this.props.isPresent){const a=i.offsetParent,o=Uv(a)&&a.offsetWidth||0,c=this.props.sizeRef.current;c.height=i.offsetHeight||0,c.width=i.offsetWidth||0,c.top=i.offsetTop,c.left=i.offsetLeft,c.right=o-c.width-c.left}return null}componentDidUpdate(){}render(){return this.props.children}}function PM({children:e,isPresent:t,anchorX:i,root:a}){const o=H.useId(),c=H.useRef(null),f=H.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:h}=H.useContext(m2);return H.useInsertionEffect(()=>{const{width:p,height:g,top:y,left:b,right:S}=f.current;if(t||!c.current||!p||!g)return;const T=i==="left"?`left: ${b}`:`right: ${S}`;c.current.dataset.motionPopId=o;const E=document.createElement("style");h&&(E.nonce=h);const L=a??document.head;return L.appendChild(E),E.sheet&&E.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${g}px !important;
            ${T}px !important;
            top: ${y}px !important;
          }
        `),()=>{L.contains(E)&&L.removeChild(E)}},[t]),x.jsx(HM,{isPresent:t,childRef:c,sizeRef:f,children:H.cloneElement(e,{ref:c})})}const NM=({children:e,initial:t,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:c,mode:f,anchorX:h,root:p})=>{const g=lc(BM),y=H.useId();let b=!0,S=H.useMemo(()=>(b=!1,{id:y,initial:t,isPresent:i,custom:o,onExitComplete:T=>{g.set(T,!0);for(const E of g.values())if(!E)return;a&&a()},register:T=>(g.set(T,!1),()=>g.delete(T))}),[i,g,a]);return c&&b&&(S={...S}),H.useMemo(()=>{g.forEach((T,E)=>g.set(E,!1))},[i]),H.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),f==="popLayout"&&(e=x.jsx(PM,{isPresent:i,anchorX:h,root:p,children:e})),x.jsx(p2.Provider,{value:S,children:e})};function BM(){return new Map}function S7(e=!0){const t=H.useContext(p2);if(t===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:o}=t,c=H.useId();H.useEffect(()=>{if(e)return o(c)},[e]);const f=H.useCallback(()=>e&&a&&a(c),[c,a,e]);return!i&&a?[!1,f]:[!0]}const X1=e=>e.key||"";function Q4(e){const t=[];return H.Children.forEach(e,i=>{H.isValidElement(i)&&t.push(i)}),t}const Yv=({children:e,custom:t,initial:i=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:c="sync",propagate:f=!1,anchorX:h="left",root:p})=>{const[g,y]=S7(f),b=H.useMemo(()=>Q4(e),[e]),S=f&&!g?[]:b.map(X1),T=H.useRef(!0),E=H.useRef(b),L=lc(()=>new Map),[P,_]=H.useState(b),[R,O]=H.useState(b);oh(()=>{T.current=!1,E.current=b;for(let Y=0;Y<R.length;Y++){const G=X1(R[Y]);S.includes(G)?L.delete(G):L.get(G)!==!0&&L.set(G,!1)}},[R,S.length,S.join("-")]);const N=[];if(b!==P){let Y=[...b];for(let G=0;G<R.length;G++){const Q=R[G],ie=X1(Q);S.includes(ie)||(Y.splice(G,0,Q),N.push(Q))}return c==="wait"&&N.length&&(Y=N),O(Q4(Y)),_(b),null}const{forceRender:V}=H.useContext(wv);return x.jsx(x.Fragment,{children:R.map(Y=>{const G=X1(Y),Q=f&&!g?!1:b===R||S.includes(G),ie=()=>{if(L.has(G))L.set(G,!0);else return;let se=!0;L.forEach(de=>{de||(se=!1)}),se&&(V==null||V(),O(E.current),f&&(y==null||y()),a&&a())};return x.jsx(NM,{isPresent:Q,initial:!T.current||i?void 0:!1,custom:t,presenceAffectsLayout:o,mode:c,root:p,onExitComplete:Q?void 0:ie,anchorX:h,children:Y},G)})})},C7=H.createContext({strict:!1}),J4={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},hd={};for(const e in J4)hd[e]={isEnabled:t=>J4[e].some(i=>!!t[i])};function IM(e){for(const t in e)hd[t]={...hd[t],...e[t]}}const $M=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Bm(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||$M.has(e)}let T7=e=>!Bm(e);function UM(e){typeof e=="function"&&(T7=t=>t.startsWith("on")?!Bm(t):e(t))}try{UM(require("@emotion/is-prop-valid").default)}catch{}function GM(e,t,i){const a={};for(const o in e)o==="values"&&typeof e.values=="object"||(T7(o)||i===!0&&Bm(o)||!t&&!Bm(o)||e.draggable&&o.startsWith("onDrag"))&&(a[o]=e[o]);return a}const g2=H.createContext({});function x2(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Q0(e){return typeof e=="string"||Array.isArray(e)}const Wv=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zv=["initial",...Wv];function v2(e){return x2(e.animate)||Zv.some(t=>Q0(e[t]))}function E7(e){return!!(v2(e)||e.variants)}function FM(e,t){if(v2(e)){const{initial:i,animate:a}=e;return{initial:i===!1||Q0(i)?i:void 0,animate:Q0(a)?a:void 0}}return e.inherit!==!1?t:{}}function qM(e){const{initial:t,animate:i}=FM(e,H.useContext(g2));return H.useMemo(()=>({initial:t,animate:i}),[e5(t),e5(i)])}function e5(e){return Array.isArray(e)?e.join(" "):e}const J0={};function YM(e){for(const t in e)J0[t]=e[t],Rv(t)&&(J0[t].isCSSVariable=!0)}function A7(e,{layout:t,layoutId:i}){return Sd.has(e)||e.startsWith("origin")||(t||i!==void 0)&&(!!J0[e]||e==="opacity")}const WM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ZM=bd.length;function XM(e,t,i){let a="",o=!0;for(let c=0;c<ZM;c++){const f=bd[c],h=e[f];if(h===void 0)continue;let p=!0;if(typeof h=="number"?p=h===(f.startsWith("scale")?1:0):p=parseFloat(h)===0,!p||i){const g=g7(h,Iv[f]);if(!p){o=!1;const y=WM[f]||f;a+=`${y}(${g}) `}i&&(t[f]=g)}}return a=a.trim(),i?a=i(t,o?"":a):o&&(a="none"),a}function Xv(e,t,i){const{style:a,vars:o,transformOrigin:c}=e;let f=!1,h=!1;for(const p in t){const g=t[p];if(Sd.has(p)){f=!0;continue}else if(Rv(p)){o[p]=g;continue}else{const y=g7(g,Iv[p]);p.startsWith("origin")?(h=!0,c[p]=y):a[p]=y}}if(t.transform||(f||i?a.transform=XM(t,e.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:y=0}=c;a.transformOrigin=`${p} ${g} ${y}`}}const Kv=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function M7(e,t,i){for(const a in t)!ni(t[a])&&!A7(a,i)&&(e[a]=t[a])}function KM({transformTemplate:e},t){return H.useMemo(()=>{const i=Kv();return Xv(i,t,e),Object.assign({},i.vars,i.style)},[t])}function QM(e,t){const i=e.style||{},a={};return M7(a,i,e),Object.assign(a,KM(e,t)),a}function JM(e,t){const i={},a=QM(e,t);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=a,i}const ej={offset:"stroke-dashoffset",array:"stroke-dasharray"},tj={offset:"strokeDashoffset",array:"strokeDasharray"};function nj(e,t,i=1,a=0,o=!0){e.pathLength=1;const c=o?ej:tj;e[c.offset]=Be.transform(-a);const f=Be.transform(t),h=Be.transform(i);e[c.array]=`${f} ${h}`}function j7(e,{attrX:t,attrY:i,attrScale:a,pathLength:o,pathSpacing:c=1,pathOffset:f=0,...h},p,g,y){if(Xv(e,h,g),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:b,style:S}=e;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete b.transformBox),t!==void 0&&(b.x=t),i!==void 0&&(b.y=i),a!==void 0&&(b.scale=a),o!==void 0&&nj(b,o,c,f,!1)}const R7=()=>({...Kv(),attrs:{}}),O7=e=>typeof e=="string"&&e.toLowerCase()==="svg";function ij(e,t,i,a){const o=H.useMemo(()=>{const c=R7();return j7(c,t,O7(a),e.transformTemplate,e.style),{...c.attrs,style:{...c.style}}},[t]);if(e.style){const c={};M7(c,e.style,e),o.style={...c,...o.style}}return o}const aj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qv(e){return typeof e!="string"||e.includes("-")?!1:!!(aj.indexOf(e)>-1||/[A-Z]/u.test(e))}function rj(e,t,i,{latestValues:a},o,c=!1){const h=(Qv(e)?ij:JM)(t,a,o,e),p=GM(t,typeof e=="string",c),g=e!==H.Fragment?{...p,...h,ref:i}:{},{children:y}=t,b=H.useMemo(()=>ni(y)?y.get():y,[y]);return H.createElement(e,{...g,children:b})}function t5(e){const t=[{},{}];return e==null||e.values.forEach((i,a)=>{t[0][a]=i.get(),t[1][a]=i.getVelocity()}),t}function Jv(e,t,i,a){if(typeof t=="function"){const[o,c]=t5(a);t=t(i!==void 0?i:e.custom,o,c)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,c]=t5(a);t=t(i!==void 0?i:e.custom,o,c)}return t}function Em(e){return ni(e)?e.get():e}function sj({scrapeMotionValuesFromProps:e,createRenderState:t},i,a,o){return{latestValues:oj(i,a,o,e),renderState:t()}}function oj(e,t,i,a){const o={},c=a(e,{});for(const S in c)o[S]=Em(c[S]);let{initial:f,animate:h}=e;const p=v2(e),g=E7(e);t&&g&&!p&&e.inherit!==!1&&(f===void 0&&(f=t.initial),h===void 0&&(h=t.animate));let y=i?i.initial===!1:!1;y=y||f===!1;const b=y?h:f;if(b&&typeof b!="boolean"&&!x2(b)){const S=Array.isArray(b)?b:[b];for(let T=0;T<S.length;T++){const E=Jv(e,S[T]);if(E){const{transitionEnd:L,transition:P,..._}=E;for(const R in _){let O=_[R];if(Array.isArray(O)){const N=y?O.length-1:0;O=O[N]}O!==null&&(o[R]=O)}for(const R in L)o[R]=L[R]}}}return o}const L7=e=>(t,i)=>{const a=H.useContext(g2),o=H.useContext(p2),c=()=>sj(e,t,a,o);return i?c():lc(c)};function ey(e,t,i){var c;const{style:a}=e,o={};for(const f in a)(ni(a[f])||t.style&&ni(t.style[f])||A7(f,e)||((c=i==null?void 0:i.getValue(f))==null?void 0:c.liveStyle)!==void 0)&&(o[f]=a[f]);return o}const lj=L7({scrapeMotionValuesFromProps:ey,createRenderState:Kv});function _7(e,t,i){const a=ey(e,t,i);for(const o in e)if(ni(e[o])||ni(t[o])){const c=bd.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;a[c]=e[o]}return a}const cj=L7({scrapeMotionValuesFromProps:_7,createRenderState:R7}),uj=Symbol.for("motionComponentSymbol");function Qu(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function dj(e,t,i){return H.useCallback(a=>{a&&e.onMount&&e.onMount(a),t&&(a?t.mount(a):t.unmount()),i&&(typeof i=="function"?i(a):Qu(i)&&(i.current=a))},[t])}const ty=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),fj="framerAppearId",k7="data-"+ty(fj),D7=H.createContext({});function hj(e,t,i,a,o){var L,P;const{visualElement:c}=H.useContext(g2),f=H.useContext(C7),h=H.useContext(p2),p=H.useContext(m2).reducedMotion,g=H.useRef(null);a=a||f.renderer,!g.current&&a&&(g.current=a(e,{visualState:t,parent:c,props:i,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const y=g.current,b=H.useContext(D7);y&&!y.projection&&o&&(y.type==="html"||y.type==="svg")&&pj(g.current,i,o,b);const S=H.useRef(!1);H.useInsertionEffect(()=>{y&&S.current&&y.update(i,h)});const T=i[k7],E=H.useRef(!!T&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,T))&&((P=window.MotionHasOptimisedAnimation)==null?void 0:P.call(window,T)));return oh(()=>{y&&(S.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),E.current&&y.animationState&&y.animationState.animateChanges())}),H.useEffect(()=>{y&&(!E.current&&y.animationState&&y.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{var _;(_=window.MotionHandoffMarkAsComplete)==null||_.call(window,T)}),E.current=!1),y.enteringChildren=void 0)}),y}function pj(e,t,i,a){const{layoutId:o,layout:c,drag:f,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutCrossfade:y}=t;e.projection=new i(e.latestValues,t["data-framer-portal-id"]?void 0:V7(e.parent)),e.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!f||h&&Qu(h),visualElement:e,animationType:typeof c=="string"?c:"both",initialPromotionConfig:a,crossfade:y,layoutScroll:p,layoutRoot:g})}function V7(e){if(e)return e.options.allowProjection!==!1?e.projection:V7(e.parent)}function fx(e,{forwardMotionProps:t=!1}={},i,a){i&&IM(i);const o=Qv(e)?cj:lj;function c(h,p){let g;const y={...H.useContext(m2),...h,layoutId:mj(h)},{isStatic:b}=y,S=qM(h),T=o(h,b);if(!b&&bv){gj();const E=xj(y);g=E.MeasureLayout,S.visualElement=hj(e,T,y,a,E.ProjectionNode)}return x.jsxs(g2.Provider,{value:S,children:[g&&S.visualElement?x.jsx(g,{visualElement:S.visualElement,...y}):null,rj(e,h,dj(T,S.visualElement,p),T,b,t)]})}c.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const f=H.forwardRef(c);return f[uj]=e,f}function mj({layoutId:e}){const t=H.useContext(wv).id;return t&&e!==void 0?t+"-"+e:e}function gj(e,t){H.useContext(C7).strict}function xj(e){const{drag:t,layout:i}=hd;if(!t&&!i)return{};const a={...t,...i};return{MeasureLayout:t!=null&&t.isEnabled(e)||i!=null&&i.isEnabled(e)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function vj(e,t){if(typeof Proxy>"u")return fx;const i=new Map,a=(c,f)=>fx(c,f,e,t),o=(c,f)=>a(c,f);return new Proxy(o,{get:(c,f)=>f==="create"?a:(i.has(f)||i.set(f,fx(f,void 0,e,t)),i.get(f))})}function z7({top:e,left:t,right:i,bottom:a}){return{x:{min:t,max:i},y:{min:e,max:a}}}function yj({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function wj(e,t){if(!t)return e;const i=t({x:e.left,y:e.top}),a=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function hx(e){return e===void 0||e===1}function L3({scale:e,scaleX:t,scaleY:i}){return!hx(e)||!hx(t)||!hx(i)}function Ql(e){return L3(e)||H7(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function H7(e){return n5(e.x)||n5(e.y)}function n5(e){return e&&e!=="0%"}function Im(e,t,i){const a=e-i,o=t*a;return i+o}function i5(e,t,i,a,o){return o!==void 0&&(e=Im(e,o,a)),Im(e,i,a)+t}function _3(e,t=0,i=1,a,o){e.min=i5(e.min,t,i,a,o),e.max=i5(e.max,t,i,a,o)}function P7(e,{x:t,y:i}){_3(e.x,t.translate,t.scale,t.originPoint),_3(e.y,i.translate,i.scale,i.originPoint)}const a5=.999999999999,r5=1.0000000000001;function bj(e,t,i,a=!1){const o=i.length;if(!o)return;t.x=t.y=1;let c,f;for(let h=0;h<o;h++){c=i[h],f=c.projectionDelta;const{visualElement:p}=c.options;p&&p.props.style&&p.props.style.display==="contents"||(a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&ed(e,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),f&&(t.x*=f.x.scale,t.y*=f.y.scale,P7(e,f)),a&&Ql(c.latestValues)&&ed(e,c.latestValues))}t.x<r5&&t.x>a5&&(t.x=1),t.y<r5&&t.y>a5&&(t.y=1)}function Ju(e,t){e.min=e.min+t,e.max=e.max+t}function s5(e,t,i,a,o=.5){const c=qt(e.min,e.max,o);_3(e,t,i,c,a)}function ed(e,t){s5(e.x,t.x,t.scaleX,t.scale,t.originX),s5(e.y,t.y,t.scaleY,t.scale,t.originY)}function N7(e,t){return z7(wj(e.getBoundingClientRect(),t))}function Sj(e,t,i){const a=N7(e,i),{scroll:o}=t;return o&&(Ju(a.x,o.offset.x),Ju(a.y,o.offset.y)),a}const o5=()=>({translate:0,scale:1,origin:0,originPoint:0}),td=()=>({x:o5(),y:o5()}),l5=()=>({min:0,max:0}),rn=()=>({x:l5(),y:l5()}),k3={current:null},B7={current:!1};function Cj(){if(B7.current=!0,!!bv)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>k3.current=e.matches;e.addEventListener("change",t),t()}else k3.current=!1}const Tj=new WeakMap;function Ej(e,t,i){for(const a in t){const o=t[a],c=i[a];if(ni(o))e.addValue(a,o);else if(ni(c))e.addValue(a,Ua(o,{owner:e}));else if(c!==o)if(e.hasValue(a)){const f=e.getValue(a);f.liveStyle===!0?f.jump(o):f.hasAnimated||f.set(o)}else{const f=e.getStaticValue(a);e.addValue(a,Ua(f!==void 0?f:o,{owner:e}))}}for(const a in i)t[a]===void 0&&e.removeValue(a);return t}const c5=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Aj{scrapeMotionValuesFromProps(t,i,a){return{}}constructor({parent:t,props:i,presenceContext:a,reducedMotionConfig:o,blockInitialAnimation:c,visualState:f},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Nv,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Pi.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Rt.render(this.render,!1,!0))};const{latestValues:p,renderState:g}=f;this.latestValues=p,this.baseTarget={...p},this.initialValues=i.initial?{...p}:{},this.renderState=g,this.parent=t,this.props=i,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=h,this.blockInitialAnimation=!!c,this.isControllingVariants=v2(i),this.isVariantNode=E7(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const S in b){const T=b[S];p[S]!==void 0&&ni(T)&&T.set(p[S])}}mount(t){var i;this.current=t,Tj.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,o)=>this.bindToMotionValue(o,a)),B7.current||Cj(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:k3.current,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Ya(this.notifyUpdate),Ya(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,i){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=Sd.has(t);a&&this.onBindTransform&&this.onBindTransform();const o=i.on("change",f=>{this.latestValues[t]=f,this.props.onUpdate&&Rt.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,i)),this.valueSubscriptions.set(t,()=>{o(),c&&c(),i.owner&&i.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in hd){const i=hd[t];if(!i)continue;const{isEnabled:a,Feature:o}=i;if(!this.features[t]&&o&&a(this.props)&&(this.features[t]=new o(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):rn()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<c5.length;a++){const o=c5[a];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,f=t[c];f&&(this.propEventSubscriptions[o]=this.on(o,f))}this.prevMotionValues=Ej(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){const a=this.values.get(t);i!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,i),this.values.set(t,i),this.latestValues[t]=i.get())}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&i!==void 0&&(a=Ua(i===null?void 0:i,{owner:this}),this.addValue(t,a)),a}readValue(t,i){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(k8(a)||V8(a))?a=parseFloat(a):!zM(a)&&Ro.test(i)&&(a=m7(t,i)),this.setBaseTarget(t,ni(a)?a.get():a)),ni(a)?a.get():a}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){var c;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const f=Jv(this.props,i,(c=this.presenceContext)==null?void 0:c.custom);f&&(a=f[t])}if(i&&a!==void 0)return a;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!ni(o)?o:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new Ev),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}scheduleRenderMicrotask(){Gv.render(this.render)}}class I7 extends Aj{constructor(){super(...arguments),this.KeyframeResolver=mM}sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){return t.style?t.style[i]:void 0}removeValueFromRenderState(t,{vars:i,style:a}){delete i[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ni(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function $7(e,{style:t,vars:i},a,o){const c=e.style;let f;for(f in t)c[f]=t[f];o==null||o.applyProjectionStyles(c,a);for(f in i)c.setProperty(f,i[f])}function Mj(e){return window.getComputedStyle(e)}class jj extends I7{constructor(){super(...arguments),this.type="html",this.renderInstance=$7}readValueFromInstance(t,i){var a;if(Sd.has(i))return(a=this.projection)!=null&&a.isProjecting?T3(i):VA(t,i);{const o=Mj(t),c=(Rv(i)?o.getPropertyValue(i):o[i])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(t,{transformPagePoint:i}){return N7(t,i)}build(t,i,a){Xv(t,i,a.transformTemplate)}scrapeMotionValuesFromProps(t,i,a){return ey(t,i,a)}}const U7=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Rj(e,t,i,a){$7(e,t,void 0,a);for(const o in t.attrs)e.setAttribute(U7.has(o)?o:ty(o),t.attrs[o])}class Oj extends I7{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=rn}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(Sd.has(i)){const a=p7(i);return a&&a.default||0}return i=U7.has(i)?i:ty(i),t.getAttribute(i)}scrapeMotionValuesFromProps(t,i,a){return _7(t,i,a)}build(t,i,a){j7(t,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(t,i,a,o){Rj(t,i,a,o)}mount(t){this.isSVGTag=O7(t.tagName),super.mount(t)}}const Lj=(e,t)=>Qv(e)?new Oj(t):new jj(t,{allowProjection:e!==H.Fragment});function id(e,t,i){const a=e.getProps();return Jv(a,t,i!==void 0?i:a.custom,e)}const D3=e=>Array.isArray(e);function _j(e,t,i){e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,Ua(i))}function kj(e){return D3(e)?e[e.length-1]||0:e}function ny(e,t){const i=id(e,t);let{transitionEnd:a={},transition:o={},...c}=i||{};c={...c,...a};for(const f in c){const h=kj(c[f]);_j(e,f,h)}}function Dj(e){return!!(ni(e)&&e.add)}function V3(e,t){const i=e.getValue("willChange");if(Dj(i))return i.add(t);if(!i&&vs.WillChange){const a=new vs.WillChange("auto");e.addValue("willChange",a),a.add(t)}}function G7(e){return e.props[k7]}const Vj=e=>e!==null;function zj(e,{repeat:t,repeatType:i="loop"},a){const o=e.filter(Vj),c=t&&i!=="loop"&&t%2===1?0:o.length-1;return o[c]}const Hj={type:"spring",stiffness:500,damping:25,restSpeed:10},Pj=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Nj={type:"keyframes",duration:.8},Bj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ij=(e,{keyframes:t})=>t.length>2?Nj:Sd.has(e)?e.startsWith("scale")?Pj(t[1]):Hj:Bj;function $j({when:e,delay:t,delayChildren:i,staggerChildren:a,staggerDirection:o,repeat:c,repeatType:f,repeatDelay:h,from:p,elapsed:g,...y}){return!!Object.keys(y).length}const iy=(e,t,i,a={},o,c)=>f=>{const h=Bv(a,e)||{},p=h.delay||a.delay||0;let{elapsed:g=0}=a;g=g-kr(p);const y={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...h,delay:-g,onUpdate:S=>{t.set(S),h.onUpdate&&h.onUpdate(S)},onComplete:()=>{f(),h.onComplete&&h.onComplete()},name:e,motionValue:t,element:c?void 0:o};$j(h)||Object.assign(y,Ij(e,y)),y.duration&&(y.duration=kr(y.duration)),y.repeatDelay&&(y.repeatDelay=kr(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(R3(y),y.delay===0&&(b=!0)),(vs.instantAnimations||vs.skipAnimations)&&(b=!0,R3(y),y.delay=0),y.allowFlatten=!h.type&&!h.ease,b&&!c&&t.get()!==void 0){const S=zj(y.keyframes,h);if(S!==void 0){Rt.update(()=>{y.onUpdate(S),y.onComplete()});return}}return h.isSync?new Pv(y):new iM(y)};function Uj({protectedKeys:e,needsAnimating:t},i){const a=e.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,a}function F7(e,t,{delay:i=0,transitionOverride:a,type:o}={}){let{transition:c=e.getDefaultTransition(),transitionEnd:f,...h}=t;a&&(c=a);const p=[],g=o&&e.animationState&&e.animationState.getState()[o];for(const y in h){const b=e.getValue(y,e.latestValues[y]??null),S=h[y];if(S===void 0||g&&Uj(g,y))continue;const T={delay:i,...Bv(c||{},y)},E=b.get();if(E!==void 0&&!b.isAnimating&&!Array.isArray(S)&&S===E&&!T.velocity)continue;let L=!1;if(window.MotionHandoffAnimation){const _=G7(e);if(_){const R=window.MotionHandoffAnimation(_,y,Rt);R!==null&&(T.startTime=R,L=!0)}}V3(e,y),b.start(iy(y,b,S,e.shouldReduceMotion&&d7.has(y)?{type:!1}:T,e,L));const P=b.animation;P&&p.push(P)}return f&&Promise.all(p).then(()=>{Rt.update(()=>{f&&ny(e,f)})}),p}function q7(e,t,i,a=0,o=1){const c=Array.from(e).sort((g,y)=>g.sortNodePosition(y)).indexOf(t),f=e.size,h=(f-1)*a;return typeof i=="function"?i(c,f):o===1?c*a:h-c*a}function z3(e,t,i={}){var p;const a=id(e,t,i.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(o=i.transitionOverride);const c=a?()=>Promise.all(F7(e,a,i)):()=>Promise.resolve(),f=e.variantChildren&&e.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:S}=o;return Gj(e,t,g,y,b,S,i)}:()=>Promise.resolve(),{when:h}=o;if(h){const[g,y]=h==="beforeChildren"?[c,f]:[f,c];return g().then(()=>y())}else return Promise.all([c(),f(i.delay)])}function Gj(e,t,i=0,a=0,o=0,c=1,f){const h=[];for(const p of e.variantChildren)p.notify("AnimationStart",t),h.push(z3(p,t,{...f,delay:i+(typeof a=="function"?0:a)+q7(e.variantChildren,p,a,o,c)}).then(()=>p.notify("AnimationComplete",t)));return Promise.all(h)}function Y7(e,t,i={}){e.notify("AnimationStart",t);let a;if(Array.isArray(t)){const o=t.map(c=>z3(e,c,i));a=Promise.all(o)}else if(typeof t=="string")a=z3(e,t,i);else{const o=typeof t=="function"?id(e,t,i.custom):t;a=Promise.all(F7(e,o,i))}return a.then(()=>{e.notify("AnimationComplete",t)})}function W7(e,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==e.length)return!1;for(let a=0;a<i;a++)if(t[a]!==e[a])return!1;return!0}const Fj=Zv.length;function Z7(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?Z7(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const t={};for(let i=0;i<Fj;i++){const a=Zv[i],o=e.props[a];(Q0(o)||o===!1)&&(t[a]=o)}return t}const qj=[...Wv].reverse(),Yj=Wv.length;function Wj(e){return t=>Promise.all(t.map(({animation:i,options:a})=>Y7(e,i,a)))}function Zj(e){let t=Wj(e),i=u5(),a=!0;const o=p=>(g,y)=>{var S;const b=id(e,y,p==="exit"?(S=e.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:T,transitionEnd:E,...L}=b;g={...g,...L,...E}}return g};function c(p){t=p(e)}function f(p){const{props:g}=e,y=Z7(e.parent)||{},b=[],S=new Set;let T={},E=1/0;for(let P=0;P<Yj;P++){const _=qj[P],R=i[_],O=g[_]!==void 0?g[_]:y[_],N=Q0(O),V=_===p?R.isActive:null;V===!1&&(E=P);let Y=O===y[_]&&O!==g[_]&&N;if(Y&&a&&e.manuallyAnimateOnMount&&(Y=!1),R.protectedKeys={...T},!R.isActive&&V===null||!O&&!R.prevProp||x2(O)||typeof O=="boolean")continue;const G=Xj(R.prevProp,O);let Q=G||_===p&&R.isActive&&!Y&&N||P>E&&N,ie=!1;const se=Array.isArray(O)?O:[O];let de=se.reduce(o(_),{});V===!1&&(de={});const{prevResolvedValues:ye={}}=R,Ae={...ye,...de},Re=le=>{Q=!0,S.has(le)&&(ie=!0,S.delete(le)),R.needsAnimating[le]=!0;const ue=e.getValue(le);ue&&(ue.liveStyle=!1)};for(const le in Ae){const ue=de[le],xe=ye[le];if(T.hasOwnProperty(le))continue;let B=!1;D3(ue)&&D3(xe)?B=!W7(ue,xe):B=ue!==xe,B?ue!=null?Re(le):S.add(le):ue!==void 0&&S.has(le)?Re(le):R.protectedKeys[le]=!0}R.prevProp=O,R.prevResolvedValues=de,R.isActive&&(T={...T,...de}),a&&e.blockInitialAnimation&&(Q=!1);const Ee=Y&&G;Q&&(!Ee||ie)&&b.push(...se.map(le=>{const ue={type:_};if(typeof le=="string"&&a&&!Ee&&e.manuallyAnimateOnMount&&e.parent){const{parent:xe}=e,B=id(xe,le);if(xe.enteringChildren&&B){const{delayChildren:re}=B.transition||{};ue.delay=q7(xe.enteringChildren,e,re)}}return{animation:le,options:ue}}))}if(S.size){const P={};if(typeof g.initial!="boolean"){const _=id(e,Array.isArray(g.initial)?g.initial[0]:g.initial);_&&_.transition&&(P.transition=_.transition)}S.forEach(_=>{const R=e.getBaseTarget(_),O=e.getValue(_);O&&(O.liveStyle=!0),P[_]=R??null}),b.push({animation:P})}let L=!!b.length;return a&&(g.initial===!1||g.initial===g.animate)&&!e.manuallyAnimateOnMount&&(L=!1),a=!1,L?t(b):Promise.resolve()}function h(p,g){var b;if(i[p].isActive===g)return Promise.resolve();(b=e.variantChildren)==null||b.forEach(S=>{var T;return(T=S.animationState)==null?void 0:T.setActive(p,g)}),i[p].isActive=g;const y=f(p);for(const S in i)i[S].protectedKeys={};return y}return{animateChanges:f,setActive:h,setAnimateFunction:c,getState:()=>i,reset:()=>{i=u5(),a=!0}}}function Xj(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!W7(t,e):!1}function Kl(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function u5(){return{animate:Kl(!0),whileInView:Kl(),whileHover:Kl(),whileTap:Kl(),whileDrag:Kl(),whileFocus:Kl(),exit:Kl()}}class _o{constructor(t){this.isMounted=!1,this.node=t}update(){}}class Kj extends _o{constructor(t){super(t),t.animationState||(t.animationState=Zj(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();x2(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let Qj=0;class Jj extends _o{constructor(){super(...arguments),this.id=Qj++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const o=this.node.animationState.setActive("exit",!t);i&&!t&&o.then(()=>{i(this.id)})}mount(){const{register:t,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const eR={animation:{Feature:Kj},exit:{Feature:Jj}};function eh(e,t,i,a={passive:!0}){return e.addEventListener(t,i,a),()=>e.removeEventListener(t,i)}function dh(e){return{point:{x:e.pageX,y:e.pageY}}}const tR=e=>t=>Fv(t)&&e(t,dh(t));function N0(e,t,i,a){return eh(e,t,tR(i),a)}const X7=1e-4,nR=1-X7,iR=1+X7,K7=.01,aR=0-K7,rR=0+K7;function yi(e){return e.max-e.min}function sR(e,t,i){return Math.abs(e-t)<=i}function d5(e,t,i,a=.5){e.origin=a,e.originPoint=qt(t.min,t.max,e.origin),e.scale=yi(i)/yi(t),e.translate=qt(i.min,i.max,e.origin)-e.originPoint,(e.scale>=nR&&e.scale<=iR||isNaN(e.scale))&&(e.scale=1),(e.translate>=aR&&e.translate<=rR||isNaN(e.translate))&&(e.translate=0)}function B0(e,t,i,a){d5(e.x,t.x,i.x,a?a.originX:void 0),d5(e.y,t.y,i.y,a?a.originY:void 0)}function f5(e,t,i){e.min=i.min+t.min,e.max=e.min+yi(t)}function oR(e,t,i){f5(e.x,t.x,i.x),f5(e.y,t.y,i.y)}function h5(e,t,i){e.min=t.min-i.min,e.max=e.min+yi(t)}function I0(e,t,i){h5(e.x,t.x,i.x),h5(e.y,t.y,i.y)}function va(e){return[e("x"),e("y")]}const Q7=({current:e})=>e?e.ownerDocument.defaultView:null,p5=(e,t)=>Math.abs(e-t);function lR(e,t){const i=p5(e.x,t.x),a=p5(e.y,t.y);return Math.sqrt(i**2+a**2)}class J7{constructor(t,i,{transformPagePoint:a,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=mx(this.lastMoveEventInfo,this.history),T=this.startEvent!==null,E=lR(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!T&&!E)return;const{point:L}=S,{timestamp:P}=Tn;this.history.push({...L,timestamp:P});const{onStart:_,onMove:R}=this.handlers;T||(_&&_(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,S)},this.handlePointerMove=(S,T)=>{this.lastMoveEvent=S,this.lastMoveEventInfo=px(T,this.transformPagePoint),Rt.update(this.updatePoint,!0)},this.handlePointerUp=(S,T)=>{this.end();const{onEnd:E,onSessionEnd:L,resumeAnimation:P}=this.handlers;if(this.dragSnapToOrigin&&P&&P(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=mx(S.type==="pointercancel"?this.lastMoveEventInfo:px(T,this.transformPagePoint),this.history);this.startEvent&&E&&E(S,_),L&&L(S,_)},!Fv(t))return;this.dragSnapToOrigin=c,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=f,this.contextWindow=o||window;const h=dh(t),p=px(h,this.transformPagePoint),{point:g}=p,{timestamp:y}=Tn;this.history=[{...g,timestamp:y}];const{onSessionStart:b}=i;b&&b(t,mx(p,this.history)),this.removeListeners=lh(N0(this.contextWindow,"pointermove",this.handlePointerMove),N0(this.contextWindow,"pointerup",this.handlePointerUp),N0(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ya(this.updatePoint)}}function px(e,t){return t?{point:t(e.point)}:e}function m5(e,t){return{x:e.x-t.x,y:e.y-t.y}}function mx({point:e},t){return{point:e,delta:m5(e,eb(t)),offset:m5(e,cR(t)),velocity:uR(t,.1)}}function cR(e){return e[0]}function eb(e){return e[e.length-1]}function uR(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,a=null;const o=eb(e);for(;i>=0&&(a=e[i],!(o.timestamp-a.timestamp>kr(t)));)i--;if(!a)return{x:0,y:0};const c=Dr(o.timestamp-a.timestamp);if(c===0)return{x:0,y:0};const f={x:(o.x-a.x)/c,y:(o.y-a.y)/c};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function dR(e,{min:t,max:i},a){return t!==void 0&&e<t?e=a?qt(t,e,a.min):Math.max(e,t):i!==void 0&&e>i&&(e=a?qt(i,e,a.max):Math.min(e,i)),e}function g5(e,t,i){return{min:t!==void 0?e.min+t:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function fR(e,{top:t,left:i,bottom:a,right:o}){return{x:g5(e.x,i,o),y:g5(e.y,t,a)}}function x5(e,t){let i=t.min-e.min,a=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,a]=[a,i]),{min:i,max:a}}function hR(e,t){return{x:x5(e.x,t.x),y:x5(e.y,t.y)}}function pR(e,t){let i=.5;const a=yi(e),o=yi(t);return o>a?i=fd(t.min,t.max-a,e.min):a>o&&(i=fd(e.min,e.max-o,t.min)),Hr(0,1,i)}function mR(e,t){const i={};return t.min!==void 0&&(i.min=t.min-e.min),t.max!==void 0&&(i.max=t.max-e.min),i}const H3=.35;function gR(e=H3){return e===!1?e=0:e===!0&&(e=H3),{x:v5(e,"left","right"),y:v5(e,"top","bottom")}}function v5(e,t,i){return{min:y5(e,t),max:y5(e,i)}}function y5(e,t){return typeof e=="number"?e:e[t]||0}const xR=new WeakMap;class vR{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=rn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=b=>{const{dragSnapToOrigin:S}=this.getProps();S?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(dh(b).point)},f=(b,S)=>{const{drag:T,dragPropagation:E,onDragStart:L}=this.getProps();if(T&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=vM(T),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),va(_=>{let R=this.getAxisMotionValue(_).get()||0;if(Vr.test(R)){const{projection:O}=this.visualElement;if(O&&O.layout){const N=O.layout.layoutBox[_];N&&(R=yi(N)*(parseFloat(R)/100))}}this.originPoint[_]=R}),L&&Rt.postRender(()=>L(b,S)),V3(this.visualElement,"transform");const{animationState:P}=this.visualElement;P&&P.setActive("whileDrag",!0)},h=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:T,dragDirectionLock:E,onDirectionLock:L,onDrag:P}=this.getProps();if(!T&&!this.openDragLock)return;const{offset:_}=S;if(E&&this.currentDirection===null){this.currentDirection=yR(_),this.currentDirection!==null&&L&&L(this.currentDirection);return}this.updateAxis("x",S.point,_),this.updateAxis("y",S.point,_),this.visualElement.render(),P&&P(b,S)},p=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>va(b=>{var S;return this.getAnimationState(b)==="paused"&&((S=this.getAxisMotionValue(b).animation)==null?void 0:S.play())}),{dragSnapToOrigin:y}=this.getProps();this.panSession=new J7(t,{onSessionStart:c,onStart:f,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:a,contextWindow:Q7(this.visualElement)})}stop(t,i){const a=t||this.latestPointerEvent,o=i||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!a)return;const{velocity:f}=o;this.startAnimation(f);const{onDragEnd:h}=this.getProps();h&&Rt.postRender(()=>h(a,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(t,i,a){const{drag:o}=this.getProps();if(!a||!K1(t,o,this.currentDirection))return;const c=this.getAxisMotionValue(t);let f=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(f=dR(f,this.constraints[t],this.elastic[t])),c.set(f)}resolveConstraints(){var c;const{dragConstraints:t,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(c=this.visualElement.projection)==null?void 0:c.layout,o=this.constraints;t&&Qu(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=fR(a.layoutBox,t):this.constraints=!1,this.elastic=gR(i),o!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&va(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=mR(a.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!Qu(t))return!1;const a=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const c=Sj(a,o.root,this.visualElement.getTransformPagePoint());let f=hR(o.layout.layoutBox,c);if(i){const h=i(yj(f));this.hasMutatedConstraints=!!h,h&&(f=z7(h))}return f}startAnimation(t){const{drag:i,dragMomentum:a,dragElastic:o,dragTransition:c,dragSnapToOrigin:f,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=va(y=>{if(!K1(y,i,this.currentDirection))return;let b=p&&p[y]||{};f&&(b={min:0,max:0});const S=o?200:1e6,T=o?40:1e7,E={type:"inertia",velocity:a?t[y]:0,bounceStiffness:S,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...c,...b};return this.startAxisValueAnimation(y,E)});return Promise.all(g).then(h)}startAxisValueAnimation(t,i){const a=this.getAxisMotionValue(t);return V3(this.visualElement,t),a.start(iy(t,a,0,i,this.visualElement,!1))}stopAnimation(){va(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){va(t=>{var i;return(i=this.getAxisMotionValue(t).animation)==null?void 0:i.pause()})}getAnimationState(t){var i;return(i=this.getAxisMotionValue(t).animation)==null?void 0:i.state}getAxisMotionValue(t){const i=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),o=a[i];return o||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){va(i=>{const{drag:a}=this.getProps();if(!K1(i,a,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(i);if(o&&o.layout){const{min:f,max:h}=o.layout.layoutBox[i];c.set(t[i]-qt(f,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!Qu(i)||!a||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};va(f=>{const h=this.getAxisMotionValue(f);if(h&&this.constraints!==!1){const p=h.get();o[f]=pR({min:p,max:p},this.constraints[f])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),va(f=>{if(!K1(f,t,null))return;const h=this.getAxisMotionValue(f),{min:p,max:g}=this.constraints[f];h.set(qt(p,g,o[f]))})}addListeners(){if(!this.visualElement.current)return;xR.set(this.visualElement,this);const t=this.visualElement.current,i=N0(t,"pointerdown",p=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(p)}),a=()=>{const{dragConstraints:p}=this.getProps();Qu(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,c=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Rt.read(a);const f=eh(window,"resize",()=>this.scalePositionWithinConstraints()),h=o.addEventListener("didUpdate",({delta:p,hasLayoutChanged:g})=>{this.isDragging&&g&&(va(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=p[y].translate,b.set(b.get()+p[y].translate))}),this.visualElement.render())});return()=>{f(),i(),c(),h&&h()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:f=H3,dragMomentum:h=!0}=t;return{...t,drag:i,dragDirectionLock:a,dragPropagation:o,dragConstraints:c,dragElastic:f,dragMomentum:h}}}function K1(e,t,i){return(t===!0||t===e)&&(i===null||i===e)}function yR(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}class wR extends _o{constructor(t){super(t),this.removeGroupControls=Ni,this.removeListeners=Ni,this.controls=new vR(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ni}unmount(){this.removeGroupControls(),this.removeListeners()}}const w5=e=>(t,i)=>{e&&Rt.postRender(()=>e(t,i))};class bR extends _o{constructor(){super(...arguments),this.removePointerDownListener=Ni}onPointerDown(t){this.session=new J7(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Q7(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:a,onPanEnd:o}=this.node.getProps();return{onSessionStart:w5(t),onStart:w5(i),onMove:a,onEnd:(c,f)=>{delete this.session,o&&Rt.postRender(()=>o(c,f))}}}mount(){this.removePointerDownListener=N0(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Am={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function b5(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const M0={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(Be.test(e))e=parseFloat(e);else return e;const i=b5(e,t.target.x),a=b5(e,t.target.y);return`${i}% ${a}%`}},SR={correct:(e,{treeScale:t,projectionDelta:i})=>{const a=e,o=Ro.parse(e);if(o.length>5)return a;const c=Ro.createTransformer(e),f=typeof o[0]!="number"?1:0,h=i.x.scale*t.x,p=i.y.scale*t.y;o[0+f]/=h,o[1+f]/=p;const g=qt(h,p,.5);return typeof o[2+f]=="number"&&(o[2+f]/=g),typeof o[3+f]=="number"&&(o[3+f]/=g),c(o)}};let gx=!1;class CR extends H.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:a,layoutId:o}=this.props,{projection:c}=t;YM(TR),c&&(i.group&&i.group.add(c),a&&a.register&&o&&a.register(c),gx&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),Am.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:a,drag:o,isPresent:c}=this.props,{projection:f}=a;return f&&(f.isPresent=c,gx=!0,o||t.layoutDependency!==i||i===void 0||t.isPresent!==c?f.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?f.promote():f.relegate()||Rt.postRender(()=>{const h=f.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Gv.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:o}=t;gx=!0,o&&(o.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(o),a&&a.deregister&&a.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function tb(e){const[t,i]=S7(),a=H.useContext(wv);return x.jsx(CR,{...e,layoutGroup:a,switchLayoutGroup:H.useContext(D7),isPresent:t,safeToRemove:i})}const TR={borderRadius:{...M0,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:M0,borderTopRightRadius:M0,borderBottomLeftRadius:M0,borderBottomRightRadius:M0,boxShadow:SR};function ER(e,t,i){const a=ni(e)?e:Ua(e);return a.start(iy("",a,t,i)),a.animation}const AR=(e,t)=>e.depth-t.depth;class MR{constructor(){this.children=[],this.isDirty=!1}add(t){Sv(this.children,t),this.isDirty=!0}remove(t){Cv(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(AR),this.isDirty=!1,this.children.forEach(t)}}function jR(e,t){const i=Pi.now(),a=({timestamp:o})=>{const c=o-i;c>=t&&(Ya(a),e(c-t))};return Rt.setup(a,!0),()=>Ya(a)}const nb=["TopLeft","TopRight","BottomLeft","BottomRight"],RR=nb.length,S5=e=>typeof e=="string"?parseFloat(e):e,C5=e=>typeof e=="number"||Be.test(e);function OR(e,t,i,a,o,c){o?(e.opacity=qt(0,i.opacity??1,LR(a)),e.opacityExit=qt(t.opacity??1,0,_R(a))):c&&(e.opacity=qt(t.opacity??1,i.opacity??1,a));for(let f=0;f<RR;f++){const h=`border${nb[f]}Radius`;let p=T5(t,h),g=T5(i,h);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||C5(p)===C5(g)?(e[h]=Math.max(qt(S5(p),S5(g),a),0),(Vr.test(g)||Vr.test(p))&&(e[h]+="%")):e[h]=g}(t.rotate||i.rotate)&&(e.rotate=qt(t.rotate||0,i.rotate||0,a))}function T5(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const LR=ib(0,.5,zm),_R=ib(.5,.95,Ni);function ib(e,t,i){return a=>a<e?0:a>t?1:i(fd(e,t,a))}function E5(e,t){e.min=t.min,e.max=t.max}function xa(e,t){E5(e.x,t.x),E5(e.y,t.y)}function A5(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function M5(e,t,i,a,o){return e-=t,e=Im(e,1/i,a),o!==void 0&&(e=Im(e,1/o,a)),e}function kR(e,t=0,i=1,a=.5,o,c=e,f=e){if(Vr.test(t)&&(t=parseFloat(t),t=qt(f.min,f.max,t/100)-f.min),typeof t!="number")return;let h=qt(c.min,c.max,a);e===c&&(h-=t),e.min=M5(e.min,t,i,h,o),e.max=M5(e.max,t,i,h,o)}function j5(e,t,[i,a,o],c,f){kR(e,t[i],t[a],t[o],t.scale,c,f)}const DR=["x","scaleX","originX"],VR=["y","scaleY","originY"];function R5(e,t,i,a){j5(e.x,t,DR,i?i.x:void 0,a?a.x:void 0),j5(e.y,t,VR,i?i.y:void 0,a?a.y:void 0)}function O5(e){return e.translate===0&&e.scale===1}function ab(e){return O5(e.x)&&O5(e.y)}function L5(e,t){return e.min===t.min&&e.max===t.max}function zR(e,t){return L5(e.x,t.x)&&L5(e.y,t.y)}function _5(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function rb(e,t){return _5(e.x,t.x)&&_5(e.y,t.y)}function k5(e){return yi(e.x)/yi(e.y)}function D5(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class HR{constructor(){this.members=[]}add(t){Sv(this.members,t),t.scheduleRender()}remove(t){if(Cv(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){const i=this.members.findIndex(o=>t===o);if(i===0)return!1;let a;for(let o=i;o>=0;o--){const c=this.members[o];if(c.isPresent!==!1){a=c;break}}return a?(this.promote(a),!0):!1}promote(t,i){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,i&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:i,resumingFrom:a}=t;i.onExitComplete&&i.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function PR(e,t,i){let a="";const o=e.x.translate/t.x,c=e.y.translate/t.y,f=(i==null?void 0:i.z)||0;if((o||c||f)&&(a=`translate3d(${o}px, ${c}px, ${f}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),i){const{transformPerspective:g,rotate:y,rotateX:b,rotateY:S,skewX:T,skewY:E}=i;g&&(a=`perspective(${g}px) ${a}`),y&&(a+=`rotate(${y}deg) `),b&&(a+=`rotateX(${b}deg) `),S&&(a+=`rotateY(${S}deg) `),T&&(a+=`skewX(${T}deg) `),E&&(a+=`skewY(${E}deg) `)}const h=e.x.scale*t.x,p=e.y.scale*t.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const xx=["","X","Y","Z"],NR=1e3;let BR=0;function vx(e,t,i,a){const{latestValues:o}=t;o[e]&&(i[e]=o[e],t.setStaticValue(e,0),a&&(a[e]=0))}function sb(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const i=G7(t);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:o,layoutId:c}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",Rt,!(o||c))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&sb(a)}function ob({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:a,resetTransform:o}){return class{constructor(f={},h=t==null?void 0:t()){this.id=BR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(UR),this.nodes.forEach(YR),this.nodes.forEach(WR),this.nodes.forEach(GR)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new MR)}addEventListener(f,h){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Ev),this.eventHandlers.get(f).add(h)}notifyListeners(f,...h){const p=this.eventHandlers.get(f);p&&p.notify(...h)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=qv(f)&&!kM(f),this.instance=f;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),e){let y,b=0;const S=()=>this.root.updateBlockedByResize=!1;Rt.read(()=>{b=window.innerWidth}),e(f,()=>{const T=window.innerWidth;T!==b&&(b=T,this.root.updateBlockedByResize=!0,y&&y(),y=jR(S,250),Am.hasAnimatedSinceResize&&(Am.hasAnimatedSinceResize=!1,this.nodes.forEach(H5)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||g.getDefaultTransition()||JR,{onLayoutAnimationStart:L,onLayoutAnimationComplete:P}=g.getProps(),_=!this.targetLayout||!rb(this.targetLayout,T),R=!b&&S;if(this.options.layoutRoot||this.resumeFrom||R||b&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...Bv(E,"layout"),onPlay:L,onComplete:P};(g.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(y,R)}else b||H5(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ya(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ZR),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&sb(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(V5);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(z5);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(qR),this.nodes.forEach(IR),this.nodes.forEach($R)):this.nodes.forEach(z5),this.clearAllSnapshots();const h=Pi.now();Tn.delta=Hr(0,1e3/60,h-Tn.timestamp),Tn.timestamp=h,Tn.isProcessing=!0,sx.update.process(Tn),sx.preRender.process(Tn),sx.render.process(Tn),Tn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Gv.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(FR),this.sharedNodes.forEach(XR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Rt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Rt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!yi(this.snapshot.measuredBox.x)&&!yi(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=rn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!ab(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;f&&this.instance&&(h||Ql(this.latestValues)||y)&&(o(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return f&&(p=this.removeTransform(p)),eO(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:f}=this.options;if(!f)return rn();const h=f.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(tO))){const{scroll:y}=this.root;y&&(Ju(h.x,y.offset.x),Ju(h.y,y.offset.y))}return h}removeElementScroll(f){var p;const h=rn();if(xa(h,f),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:b,options:S}=y;y!==this.root&&b&&S.layoutScroll&&(b.wasRoot&&xa(h,f),Ju(h.x,b.offset.x),Ju(h.y,b.offset.y))}return h}applyTransform(f,h=!1){const p=rn();xa(p,f);for(let g=0;g<this.path.length;g++){const y=this.path[g];!h&&y.options.layoutScroll&&y.scroll&&y!==y.root&&ed(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Ql(y.latestValues)&&ed(p,y.latestValues)}return Ql(this.latestValues)&&ed(p,this.latestValues),p}removeTransform(f){const h=rn();xa(h,f);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!Ql(g.latestValues))continue;L3(g.latestValues)&&g.updateSnapshot();const y=rn(),b=g.measurePageBox();xa(y,b),R5(h,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return Ql(this.latestValues)&&R5(h,this.latestValues),h}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Tn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var S;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!(!this.layout||!(y||b))){if(this.resolvedRelativeTargetAt=Tn.timestamp,!this.targetDelta&&!this.relativeTarget){const T=this.getClosestProjectingParent();T&&T.layout&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rn(),this.relativeTargetOrigin=rn(),I0(this.relativeTargetOrigin,this.layout.layoutBox,T.layout.layoutBox),xa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=rn(),this.targetWithTransforms=rn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),oR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):xa(this.target,this.layout.layoutBox),P7(this.target,this.targetDelta)):xa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const T=this.getClosestProjectingParent();T&&!!T.resumingFrom==!!this.resumingFrom&&!T.options.layoutScroll&&T.target&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rn(),this.relativeTargetOrigin=rn(),I0(this.relativeTargetOrigin,this.target,T.target),xa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||L3(this.parent.latestValues)||H7(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var E;const f=this.getLead(),h=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||(E=this.parent)!=null&&E.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Tn.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;xa(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;bj(this.layoutCorrected,this.treeScale,this.path,h),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=rn());const{target:T}=f;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(A5(this.prevProjectionDelta.x,this.projectionDelta.x),A5(this.prevProjectionDelta.y,this.projectionDelta.y)),B0(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!D5(this.projectionDelta.x,this.prevProjectionDelta.x)||!D5(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=td(),this.projectionDelta=td(),this.projectionDeltaWithTransform=td()}setAnimationOrigin(f,h=!1){const p=this.snapshot,g=p?p.latestValues:{},y={...this.latestValues},b=td();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const S=rn(),T=p?p.source:void 0,E=this.layout?this.layout.source:void 0,L=T!==E,P=this.getStack(),_=!P||P.members.length<=1,R=!!(L&&!_&&this.options.crossfade===!0&&!this.path.some(QR));this.animationProgress=0;let O;this.mixTargetDelta=N=>{const V=N/1e3;P5(b.x,f.x,V),P5(b.y,f.y,V),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(I0(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),KR(this.relativeTarget,this.relativeTargetOrigin,S,V),O&&zR(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=rn()),xa(O,this.relativeTarget)),L&&(this.animationValues=y,OR(y,g,this.latestValues,V,R,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=V},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(Ya(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Rt.update(()=>{Am.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ua(0)),this.currentAnimation=ER(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),f.onUpdate&&f.onUpdate(y)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(NR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:y}=f;if(!(!h||!p||!g)){if(this!==f&&this.layout&&g&&lb(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||rn();const b=yi(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+b;const S=yi(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+S}xa(h,p),ed(h,y),B0(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(f,h){this.sharedNodes.has(f)||this.sharedNodes.set(f,new HR),this.sharedNodes.get(f).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var h;const{layoutId:f}=this.options;return f?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:f}=this.options;return f?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let h=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&vx("z",f,g,this.animationValues);for(let y=0;y<xx.length;y++)vx(`rotate${xx[y]}`,f,g,this.animationValues),vx(`skew${xx[y]}`,f,g,this.animationValues);f.render();for(const y in g)f.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);f.scheduleRender()}applyProjectionStyles(f,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=Em(h==null?void 0:h.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=Em(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Ql(this.latestValues)&&(f.transform=p?p({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let b=PR(this.projectionDeltaWithTransform,this.treeScale,y);p&&(b=p(y,b)),f.transform=b;const{x:S,y:T}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${T.origin*100}% 0`,g.animationValues?f.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const E in J0){if(y[E]===void 0)continue;const{correct:L,applyTo:P,isCSSVariable:_}=J0[E],R=b==="none"?y[E]:L(y[E],g);if(P){const O=P.length;for(let N=0;N<O;N++)f[P[N]]=R}else _?this.options.visualElement.renderState.vars[E]=R:f[E]=R}this.options.layoutId&&(f.pointerEvents=g===this?Em(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var h;return(h=f.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(V5),this.root.sharedNodes.clear()}}}function IR(e){e.updateLayout()}function $R(e){var i;const t=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:o}=e.layout,{animationType:c}=e.options,f=t.source!==e.layout.source;c==="size"?va(b=>{const S=f?t.measuredBox[b]:t.layoutBox[b],T=yi(S);S.min=a[b].min,S.max=S.min+T}):lb(c,t.layoutBox,a)&&va(b=>{const S=f?t.measuredBox[b]:t.layoutBox[b],T=yi(a[b]);S.max=S.min+T,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[b].max=e.relativeTarget[b].min+T)});const h=td();B0(h,a,t.layoutBox);const p=td();f?B0(p,e.applyTransform(o,!0),t.measuredBox):B0(p,a,t.layoutBox);const g=!ab(h);let y=!1;if(!e.resumeFrom){const b=e.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:S,layout:T}=b;if(S&&T){const E=rn();I0(E,t.layoutBox,S.layoutBox);const L=rn();I0(L,a,T.layoutBox),rb(E,L)||(y=!0),b.options.layoutRoot&&(e.relativeTarget=L,e.relativeTargetOrigin=E,e.relativeParent=b)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:t,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function UR(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function GR(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function FR(e){e.clearSnapshot()}function V5(e){e.clearMeasurements()}function z5(e){e.isLayoutDirty=!1}function qR(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function H5(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function YR(e){e.resolveTargetDelta()}function WR(e){e.calcProjection()}function ZR(e){e.resetSkewAndRotation()}function XR(e){e.removeLeadSnapshot()}function P5(e,t,i){e.translate=qt(t.translate,0,i),e.scale=qt(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function N5(e,t,i,a){e.min=qt(t.min,i.min,a),e.max=qt(t.max,i.max,a)}function KR(e,t,i,a){N5(e.x,t.x,i.x,a),N5(e.y,t.y,i.y,a)}function QR(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const JR={duration:.45,ease:[.4,0,.1,1]},B5=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),I5=B5("applewebkit/")&&!B5("chrome/")?Math.round:Ni;function $5(e){e.min=I5(e.min),e.max=I5(e.max)}function eO(e){$5(e.x),$5(e.y)}function lb(e,t,i){return e==="position"||e==="preserve-aspect"&&!sR(k5(t),k5(i),.2)}function tO(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const nO=ob({attachResizeListener:(e,t)=>eh(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),yx={current:void 0},cb=ob({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!yx.current){const e=new nO({});e.mount(window),e.setOptions({layoutScroll:!0}),yx.current=e}return yx.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),iO={pan:{Feature:bR},drag:{Feature:wR,ProjectionNode:cb,MeasureLayout:tb}};function U5(e,t,i){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",i==="Start");const o="onHover"+i,c=a[o];c&&Rt.postRender(()=>c(t,dh(t)))}class aO extends _o{mount(){const{current:t}=this.node;t&&(this.unmount=yM(t,(i,a)=>(U5(this.node,a,"Start"),o=>U5(this.node,o,"End"))))}unmount(){}}class rO extends _o{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=lh(eh(this.node.current,"focus",()=>this.onFocus()),eh(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function G5(e,t,i){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",i==="Start");const o="onTap"+(i==="End"?"":i),c=a[o];c&&Rt.postRender(()=>c(t,dh(t)))}class sO extends _o{mount(){const{current:t}=this.node;t&&(this.unmount=CM(t,(i,a)=>(G5(this.node,a,"Start"),(o,{success:c})=>G5(this.node,o,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const P3=new WeakMap,wx=new WeakMap,oO=e=>{const t=P3.get(e.target);t&&t(e)},lO=e=>{e.forEach(oO)};function cO({root:e,...t}){const i=e||document;wx.has(i)||wx.set(i,{});const a=wx.get(i),o=JSON.stringify(t);return a[o]||(a[o]=new IntersectionObserver(lO,{root:e,...t})),a[o]}function uO(e,t,i){const a=cO(t);return P3.set(e,i),a.observe(e),()=>{P3.delete(e),a.unobserve(e)}}const dO={some:0,all:1};class fO extends _o{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:i,margin:a,amount:o="some",once:c}=t,f={root:i?i.current:void 0,rootMargin:a,threshold:typeof o=="number"?o:dO[o]},h=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,c&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),S=g?y:b;S&&S(p)};return uO(this.node.current,f,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(hO(t,i))&&this.startObserver()}unmount(){}}function hO({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}const pO={inView:{Feature:fO},tap:{Feature:sO},focus:{Feature:rO},hover:{Feature:aO}},mO={layout:{ProjectionNode:cb,MeasureLayout:tb}},gO={...eR,...pO,...iO,...mO},W=vj(gO,Lj),xO=50,F5=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),vO=()=>({time:0,x:F5(),y:F5()}),yO={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function q5(e,t,i,a){const o=i[t],{length:c,position:f}=yO[t],h=o.current,p=i.time;o.current=e[`scroll${f}`],o.scrollLength=e[`scroll${c}`]-e[`client${c}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=fd(0,o.scrollLength,o.current);const g=a-p;o.velocity=g>xO?0:Av(o.current-h,g)}function wO(e,t,i){q5(e,"x",t,i),q5(e,"y",t,i),t.time=i}function bO(e,t){const i={x:0,y:0};let a=e;for(;a&&a!==t;)if(Uv(a))i.x+=a.offsetLeft,i.y+=a.offsetTop,a=a.offsetParent;else if(a.tagName==="svg"){const o=a.getBoundingClientRect();a=a.parentElement;const c=a.getBoundingClientRect();i.x+=o.left-c.left,i.y+=o.top-c.top}else if(a instanceof SVGGraphicsElement){const{x:o,y:c}=a.getBBox();i.x+=o,i.y+=c;let f=null,h=a.parentNode;for(;!f;)h.tagName==="svg"&&(f=h),h=a.parentNode;a=f}else break;return i}const N3={start:0,center:.5,end:1};function Y5(e,t,i=0){let a=0;if(e in N3&&(e=N3[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?a=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?a=o/100*document.documentElement.clientWidth:e.endsWith("vh")?a=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(a=t*e),i+a}const SO=[0,0];function CO(e,t,i,a){let o=Array.isArray(e)?e:SO,c=0,f=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,N3[e]?e:"0"]),c=Y5(o[0],i,a),f=Y5(o[1],t),c-f}const TO={All:[[0,0],[1,1]]},EO={x:0,y:0};function AO(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function MO(e,t,i){const{offset:a=TO.All}=i,{target:o=e,axis:c="y"}=i,f=c==="y"?"height":"width",h=o!==e?bO(o,e):EO,p=o===e?{width:e.scrollWidth,height:e.scrollHeight}:AO(o),g={width:e.clientWidth,height:e.clientHeight};t[c].offset.length=0;let y=!t[c].interpolate;const b=a.length;for(let S=0;S<b;S++){const T=CO(a[S],g[f],p[f],h[c]);!y&&T!==t[c].interpolatorOffsets[S]&&(y=!0),t[c].offset[S]=T}y&&(t[c].interpolate=Vv(t[c].offset,t7(a),{clamp:!1}),t[c].interpolatorOffsets=[...t[c].offset]),t[c].progress=Hr(0,1,t[c].interpolate(t[c].current))}function jO(e,t=e,i){if(i.x.targetOffset=0,i.y.targetOffset=0,t!==e){let a=t;for(;a&&a!==e;)i.x.targetOffset+=a.offsetLeft,i.y.targetOffset+=a.offsetTop,a=a.offsetParent}i.x.targetLength=t===e?t.scrollWidth:t.clientWidth,i.y.targetLength=t===e?t.scrollHeight:t.clientHeight,i.x.containerLength=e.clientWidth,i.y.containerLength=e.clientHeight}function RO(e,t,i,a={}){return{measure:o=>{jO(e,a.target,i),wO(e,i,o),(a.offset||a.target)&&MO(e,i,a)},notify:()=>t(i)}}const j0=new WeakMap,W5=new WeakMap,bx=new WeakMap,Z5=e=>e===document.scrollingElement?window:e;function ub(e,{container:t=document.scrollingElement,...i}={}){if(!t)return Ni;let a=bx.get(t);a||(a=new Set,bx.set(t,a));const o=vO(),c=RO(t,e,o,i);if(a.add(c),!j0.has(t)){const h=()=>{for(const b of a)b.measure(Tn.timestamp);Rt.preUpdate(p)},p=()=>{for(const b of a)b.notify()},g=()=>Rt.read(h);j0.set(t,g);const y=Z5(t);window.addEventListener("resize",g,{passive:!0}),t!==document.documentElement&&W5.set(t,_M(t,g)),y.addEventListener("scroll",g,{passive:!0}),g()}const f=j0.get(t);return Rt.read(f,!1,!0),()=>{var g;Ya(f);const h=bx.get(t);if(!h||(h.delete(c),h.size))return;const p=j0.get(t);j0.delete(t),p&&(Z5(t).removeEventListener("scroll",p),(g=W5.get(t))==null||g(),window.removeEventListener("resize",p))}}const X5=new Map;function OO(e){const t={value:0},i=ub(a=>{t.value=a[e.axis].progress*100},e);return{currentTime:t,cancel:i}}function db({source:e,container:t,...i}){const{axis:a}=i;e&&(t=e);const o=X5.get(t)??new Map;X5.set(t,o);const c=i.target??"self",f=o.get(c)??{},h=a+(i.offset??[]).join(",");return f[h]||(f[h]=!i.target&&r7()?new ScrollTimeline({source:t,axis:a}):OO({container:t,...i})),f[h]}function LO(e,t){const i=db(t);return e.attachTimeline({timeline:t.target?void 0:i,observe:a=>(a.pause(),b7(o=>{a.time=a.duration*o},i))})}function _O(e){return e.length===2}function kO(e,t){return _O(e)?ub(i=>{e(i[t.axis].progress,i)},t):b7(e,db(t))}function DO(e,{axis:t="y",container:i=document.scrollingElement,...a}={}){if(!i)return Ni;const o={axis:t,container:i,...a};return typeof e=="function"?kO(e,o):LO(e,o)}const VO=()=>({scrollX:Ua(0),scrollY:Ua(0),scrollXProgress:Ua(0),scrollYProgress:Ua(0)}),Q1=e=>e?!e.current:!1;function ko({container:e,target:t,...i}={}){const a=lc(VO),o=H.useRef(null),c=H.useRef(!1),f=H.useCallback(()=>(o.current=DO((h,{x:p,y:g})=>{a.scrollX.set(p.current),a.scrollXProgress.set(p.progress),a.scrollY.set(g.current),a.scrollYProgress.set(g.progress)},{...i,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var h;(h=o.current)==null||h.call(o)}),[e,t,JSON.stringify(i.offset)]);return oh(()=>{if(c.current=!1,Q1(e)||Q1(t)){c.current=!0;return}else return f()},[f]),H.useEffect(()=>{if(c.current)return Z0(!Q1(e)),Z0(!Q1(t)),f()},[f]),a}function zO(e){const t=lc(()=>Ua(e)),{isStatic:i}=H.useContext(m2);if(i){const[,a]=H.useState(e);H.useEffect(()=>t.on("change",a),[])}return t}function fb(e,t){const i=zO(t()),a=()=>i.set(t());return a(),oh(()=>{const o=()=>Rt.preRender(a,!1,!0),c=e.map(f=>f.on("change",o));return()=>{c.forEach(f=>f()),Ya(a)}}),i}function HO(e){P0.current=[],e();const t=fb(P0.current,e);return P0.current=void 0,t}function zn(e,t,i,a){if(typeof e=="function")return HO(e);const o=typeof t=="function"?t:DM(t,i,a);return Array.isArray(e)?K5(e,o):K5([e],([c])=>o(c))}function K5(e,t){const i=lc(()=>[]);return fb(e,()=>{i.length=0;const a=e.length;for(let o=0;o<a;o++)i[o]=e[o].get();return t(i)})}function PO(e){e.values.forEach(t=>t.stop())}function B3(e,t){[...t].reverse().forEach(a=>{const o=e.getVariant(a);o&&ny(e,o),e.variantChildren&&e.variantChildren.forEach(c=>{B3(c,t)})})}function NO(e,t){if(Array.isArray(t))return B3(e,t);if(typeof t=="string")return B3(e,[t]);ny(e,t)}function BO(){const e=new Set,t={subscribe(i){return e.add(i),()=>void e.delete(i)},start(i,a){const o=[];return e.forEach(c=>{o.push(Y7(c,i,{transitionOverride:a}))}),Promise.all(o)},set(i){return e.forEach(a=>{NO(a,i)})},stop(){e.forEach(i=>{PO(i)})},mount(){return()=>{t.stop()}}};return t}function IO(){const e=lc(BO);return oh(e.mount,[]),e}const $O=IO,UO={some:0,all:1};function GO(e,t,{root:i,margin:a,amount:o="some"}={}){const c=$v(e),f=new WeakMap,h=g=>{g.forEach(y=>{const b=f.get(y.target);if(y.isIntersecting!==!!b)if(y.isIntersecting){const S=t(y.target,y);typeof S=="function"?f.set(y.target,S):p.unobserve(y.target)}else typeof b=="function"&&(b(y),f.delete(y.target))})},p=new IntersectionObserver(h,{root:i,rootMargin:a,threshold:typeof o=="number"?o:UO[o]});return c.forEach(g=>p.observe(g)),()=>p.disconnect()}function y2(e,{root:t,margin:i,amount:a,once:o=!1,initial:c=!1}={}){const[f,h]=H.useState(c);return H.useEffect(()=>{if(!e.current||o&&f)return;const p=()=>(h(!0),o?void 0:()=>h(!1)),g={root:t&&t.current||void 0,margin:i,amount:a};return GO(e.current,p,g)},[t,e,i,o,a]),f}const FO=M.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,qO=M.button`
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
`,Sx=M(W.div)`
  width: 20px;
  height: 2px;
  background: ${({$isOpen:e,$darkMode:t})=>e||t?"black":"white"};
  border-radius: 2px;
  transition: background 0.3s ease;
`,YO=M(W.div)`
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
`,WO=M(Hn)`
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
`,ZO=M.p`
  color: ${({$active:e})=>e?"#3098EE":"#242424"};
  font-family: 'Bebas Neue', sans-serif;
  font-size: 46px;
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
`;M(W.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 8px;
  overflow: hidden;
`;M.div`
  padding: 10px 0;
`;const XO=M.img`
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
`;M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  span {
    flex-grow: 1;
  }

  ${XO} {
    padding: 8px;
    margin-right: -8px;
  }
`;const KO=M.div`
  background-color: ${({$active:e})=>e?"#3098EE":"#c3c2c2ff"};
  position: absolute;
  width: 90%;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`,QO=(e,t,i,a)=>{var c,f,h,p;const o=[i,{code:t,...a||{}}];if((f=(c=e==null?void 0:e.services)==null?void 0:c.logger)!=null&&f.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);rc(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(p=(h=e==null?void 0:e.services)==null?void 0:h.logger)!=null&&p.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},Q5={},I3=(e,t,i,a)=>{rc(i)&&Q5[i]||(rc(i)&&(Q5[i]=new Date),QO(e,t,i,a))},hb=(e,t)=>()=>{if(e.isInitialized)t();else{const i=()=>{setTimeout(()=>{e.off("initialized",i)},0),t()};e.on("initialized",i)}},$3=(e,t,i)=>{e.loadNamespaces(t,hb(e,i))},J5=(e,t,i,a)=>{if(rc(i)&&(i=[i]),e.options.preload&&e.options.preload.indexOf(t)>-1)return $3(e,i,a);i.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,hb(e,a))},JO=(e,t,i={})=>!t.languages||!t.languages.length?(I3(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:i.lng,precheck:(a,o)=>{if(i.bindI18n&&i.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!o(a.isLanguageChangingTo,e))return!1}}),rc=e=>typeof e=="string",eL=e=>typeof e=="object"&&e!==null,tL=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,nL={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},iL=e=>nL[e],aL=e=>e.replace(tL,iL);let U3={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:aL};const rL=(e={})=>{U3={...U3,...e}},sL=()=>U3;let pb;const oL=e=>{pb=e},lL=()=>pb,cL={type:"3rdParty",init(e){rL(e.options.react),oL(e)}},uL=H.createContext();class dL{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(i=>{this.usedNamespaces[i]||(this.usedNamespaces[i]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const fL=(e,t)=>{const i=H.useRef();return H.useEffect(()=>{i.current=e},[e,t]),i.current},mb=(e,t,i,a)=>e.getFixedT(t,i,a),hL=(e,t,i,a)=>H.useCallback(mb(e,t,i,a),[e,t,i,a]),ay=(e,t={})=>{var N,V,Y,G;const{i18n:i}=t,{i18n:a,defaultNS:o}=H.useContext(uL)||{},c=i||a||lL();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new dL),!c){I3(c,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const Q=(se,de)=>rc(de)?de:eL(de)&&rc(de.defaultValue)?de.defaultValue:Array.isArray(se)?se[se.length-1]:se,ie=[Q,{},!1];return ie.t=Q,ie.i18n={},ie.ready=!1,ie}(N=c.options.react)!=null&&N.wait&&I3(c,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const f={...sL(),...c.options.react,...t},{useSuspense:h,keyPrefix:p}=f;let g=o||((V=c.options)==null?void 0:V.defaultNS);g=rc(g)?[g]:g||["translation"],(G=(Y=c.reportNamespaces).addUsedNamespaces)==null||G.call(Y,g);const y=(c.isInitialized||c.initializedStoreOnce)&&g.every(Q=>JO(Q,c,f)),b=hL(c,t.lng||null,f.nsMode==="fallback"?g:g[0],p),S=()=>b,T=()=>mb(c,t.lng||null,f.nsMode==="fallback"?g:g[0],p),[E,L]=H.useState(S);let P=g.join();t.lng&&(P=`${t.lng}${P}`);const _=fL(P),R=H.useRef(!0);H.useEffect(()=>{const{bindI18n:Q,bindI18nStore:ie}=f;R.current=!0,!y&&!h&&(t.lng?J5(c,t.lng,g,()=>{R.current&&L(T)}):$3(c,g,()=>{R.current&&L(T)})),y&&_&&_!==P&&R.current&&L(T);const se=()=>{R.current&&L(T)};return Q&&(c==null||c.on(Q,se)),ie&&(c==null||c.store.on(ie,se)),()=>{R.current=!1,c&&Q&&(Q==null||Q.split(" ").forEach(de=>c.off(de,se))),ie&&c&&ie.split(" ").forEach(de=>c.store.off(de,se))}},[c,P]),H.useEffect(()=>{R.current&&y&&L(S)},[c,p,y]);const O=[E,c,y];if(O.t=E,O.i18n=c,O.ready=y,y||!y&&!h)return O;throw new Promise(Q=>{t.lng?J5(c,t.lng,g,()=>Q()):$3(c,g,()=>Q())})},pL=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  overflow: auto;
  margin-top: 40px;
`,e6=M.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  width: 166px;
`,Co=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,mL=M.div`
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
`,gL=M.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
`,xL=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 2 * 0.25rem */
  width: 100%;
`,vL=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;
`,yL=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 400;
  line-height: 1.2em;
  width: fit-content;
`,wL={open:{rotate:45,y:8},closed:{rotate:0,y:0}},bL={open:{opacity:0},closed:{opacity:1}},SL={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},CL={open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},TL=({isOpen:e,setIsOpen:t})=>{const[,i]=H.useState(!1),{t:a}=ay(),o=ba(),c=["/contact","/service","/tips","/pricing","/fridge"].some(g=>o.pathname.startsWith(g));H.useEffect(()=>(document.body.style.overflow=e?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[e]);const f=()=>{t(!1),i(!1)},h=g=>{const y=o.pathname;return g==="/home#hero"?y==="/"||y==="/home":y.startsWith(g.split("#")[0])},p=[{to:"/home#hero",label:"Home"},{to:"/service#all",label:"Services"},{to:"/about#ap",label:"About Us"},{to:"/tips#app",label:"Tips"},{to:"/contact#ap",label:"Contact"}];return x.jsxs(FO,{children:[x.jsxs(qO,{onClick:()=>t(!e),"aria-label":e?"Close menu":"Open menu",children:[x.jsx(Sx,{$isOpen:e,$darkMode:c,animate:e?"open":"closed",variants:wL}),x.jsx(Sx,{$isOpen:e,$darkMode:c,animate:e?"open":"closed",variants:bL}),x.jsx(Sx,{$isOpen:e,$darkMode:c,animate:e?"open":"closed",variants:SL})]}),x.jsx(Yv,{children:e&&x.jsxs(YO,{initial:"closed",animate:"open",exit:"closed",variants:CL,transition:{duration:.3},children:[p.map((g,y)=>{const b=h(g.to);return x.jsxs("div",{children:[x.jsx(WO,{to:g.to,onClick:f,children:x.jsx(ZO,{$active:b,children:a(g.label)})}),x.jsx(KO,{})]},y)}),x.jsxs(pL,{children:[x.jsxs(e6,{children:[x.jsx(Co,{children:"Washing Machine Fix"}),x.jsx(Co,{children:"Dishwasher Repair"}),x.jsx(Co,{children:"Oven Maintenance"}),x.jsx(Co,{children:"Dryer Troubleshooting"})]}),x.jsxs(e6,{children:[x.jsx(Co,{children:"Microwave Service"}),x.jsx(Co,{children:"Air Conditioner Repair"}),x.jsx(Co,{children:"Coffee Maker Repair"}),x.jsx(Co,{children:"Blender Maintenance"})]})]}),x.jsxs(mL,{children:[x.jsx(gL,{}),x.jsxs(xL,{children:[x.jsx(vL,{children:"Designed by TRBN"}),x.jsx(yL,{children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})})]})},EL="/assets/LogoandTextContainer-CnBPFIWK.svg",AL=M.div`
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
`,ML=M.video`
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
`,jL=M.div`
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
`;M.div`
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
`;M.img`
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
`;const RL=M.div`
     position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgb(0 0 0 / 87%) 0%, rgb(0 0 0 / 48%) 50%, rgba(0, 0, 0, 0.4) 100%);
    z-index: 0;
`,OL=M.div`
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
`,LL=M.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,_L=M.p`
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
`,kL=M.p`
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
`,DL=M.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  z-index: 3; /* Вище затемнення */
`,gb=M(Hn)`
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
`;Lo`
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
`;const t6="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgBzZFhEcIwDIVTFFRCHYCESZgDJgEHmwPmYJWAhKGgONgccCgoL3e5I1eaAf/I3Xftkry+ZnVUiZyzx9KBPXiAm3Muln27ivCIJYEArmAFLfILCGQFimYTcidwNw8QYSv7A5iEILkBjDUhNy+yD3IQu40q79m9Jm7ALPsOXFRtVe75k7OX+fjAvrjRu7OauaHXz5v5BsqVbzRZYi4moxa+ea4IzkXOi3CgrZDGxLMW39vCilMvwki/hJox0t/FEx1sC+f02XQyAAAAAElFTkSuQmCC",VL=()=>{const[e,t]=H.useState(!1),[i]=H.useState(!1),[a,o]=H.useState(!1),c=ba(),f=["/contact","/service","/tips","/pricing","/fridge"].some(T=>c.pathname.startsWith(T)),h=i||a,p=iv(),g=T=>{T.preventDefault(),window.location.pathname!=="/home"?p("/home#header"):setTimeout(()=>{const E=document.getElementById("header");E?E.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})},100)};H.useEffect(()=>{const T=new IntersectionObserver(([L])=>{t(!L.isIntersecting)},{threshold:.1,rootMargin:"50px 0px 0px 0px"}),E=document.createElement("div");return E.style.position="absolute",E.style.top="50px",E.style.height="1px",E.style.pointerEvents="none",document.body.appendChild(E),T.observe(E),()=>{T.disconnect(),document.body.contains(E)&&document.body.removeChild(E)}},[]);const y=jt({query:"(max-width: 1439px)"}),b=jt({query:"(min-width: 768px) and (max-width: 1439px)"}),S=jt({query:"(min-width: 1440px)"});return x.jsxs(aE,{$isScrolled:e,$darkMode:f,children:[x.jsxs(rE,{children:[x.jsx(sE,{to:"/home#header",onClick:g,$overlayOpen:h,$darkMode:f,children:x.jsx("img",{src:EL,alt:"Logo"})}),!y&&x.jsxs(oE,{children:[x.jsx(E0,{children:x.jsx(A0,{to:"/home#hero",$overlayOpen:h,$darkMode:f,children:"Home"})}),x.jsx(E0,{children:x.jsx(A0,{to:"/service#all",$overlayOpen:h,$darkMode:f,children:"Services"})}),x.jsx(E0,{children:x.jsx(A0,{to:"/about#ap",$overlayOpen:h,$darkMode:f,children:"About Us"})}),x.jsx(E0,{children:x.jsx(A0,{to:"/tips#app",$overlayOpen:h,$darkMode:f,children:"Tips"})}),x.jsx(E0,{children:x.jsx(A0,{to:"/contact#ap",$overlayOpen:h,$darkMode:f,children:"Contact"})})]}),S&&x.jsxs(A4,{children:[x.jsxs(q1,{children:[x.jsx(So,{$overlayOpen:h,$darkMode:f,children:x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),x.jsx(So,{$overlayOpen:h,$darkMode:f,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),x.jsxs(q1,{children:[x.jsxs(So,{$overlayOpen:h,$darkMode:f,children:[x.jsx("img",{src:t6,alt:"🗺️"}),x.jsx("a",{href:"https://maps.app.goo.gl/cJF4BwHPJFbYsQAMA",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),x.jsx(So,{$overlayOpen:h,$darkMode:f,children:"& Nearby Cities"})]})]}),x.jsx(lE,{children:x.jsxs("div",{style:{display:"flex",gap:16},children:[x.jsx(gb,{to:"/contact#ap",children:"Contact Us"}),x.jsx(R8,{$overlayOpen:h,$darkMode:f,children:x.jsx("a",{href:"tel:+18055002705",children:"Call Us"})}),y&&x.jsx(TL,{isOpen:a,setIsOpen:o})]})})]}),b&&x.jsxs(A4,{children:[x.jsxs(q1,{children:[x.jsx(So,{$overlayOpen:h,$darkMode:f,children:x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),x.jsx(So,{$overlayOpen:h,$darkMode:f,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),x.jsxs(q1,{children:[x.jsxs(So,{$overlayOpen:h,$darkMode:f,children:[x.jsx("img",{src:t6,alt:"🗺️"}),x.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),x.jsx(So,{$overlayOpen:h,$darkMode:f,children:"& Nearby Cities"})]})]})]})},zL=M.footer`
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
`,HL=M.div`
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
`,PL=M.div`
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
`,R0=M(Hn)`
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
`,Cx=M.p`
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
`,NL=M.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
  }
`,BL=M.p`
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
`,IL=M.div`
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
`,$L=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,UL=M.div`
  background: rgba(255, 255, 255, ${({opacity:e})=>e||.5});
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,GL=M.svg`
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 114px;
  }

  @media screen and (min-width: 1440px) {
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
  }
`;M.div`
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
  background: var(--white-24);
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

  @media screen and (min-width: 1440px) {
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
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
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
`;M(Hn)`
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
`;M(Hn)`
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
  border: 1px solid var(--white-50);
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
`;M.a`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;M.img`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const FL=M.div`
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
`,qL=M.div`
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
`,YL=M.p`
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
`,WL=M.p`
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
`,xb=M.div`
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
`,vb=M.div`
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
`,yb=M.button`
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
`,ZL=M.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 55px;
  line-height: 90%;
  color: var(--blue-500);
  text-align: center;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`,XL=M.div`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
  height: auto;
  padding: 30px 0;
  background: var(--blue-form);
   z-index: 9000;
`,wb=()=>{const e=[{title:"Last Updated: January 20, 2025",content:"At Airtexno, we are dedicated to safeguarding your privacy and ensuring that your personal data is managed securely and responsibly. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or engage with our services."},{title:"INFORMATION WE COLLECT",content:"We may collect the following types of information: Personal Information: Name, email address, phone number, company name, and other details you provide when filling out forms, subscribing to newsletters, or contacting us directly. Usage Data: Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent. We may collect this through cookies and analytics tools. Third-Party Data: Information from services you've authorized us to use (e.g., analytics providers)."},{title:"HOW WE USE YOUR INFORMATION",content:"We may use or share your information with: Service Providers: To help operate our website, analytics, marketing, or provide services on our behalf. Legal Requirements: If required by applicable law or to comply with legal processes. Business Transfers: In the case of a merger or acquisition, data may be shared as part of that process. We do not sell personal data to third parties."},{title:"COOKIES AND TRACKING TECHNOLOGIES",content:"Our site uses cookies and similar technologies to enhance performance and user experience. Cookies help remember your preferences and analyze behavior. You can manage cookies through your browser settings. Please note that disabling cookies may impact site functionality."},{title:"DATA RETENTION",content:"We retain your data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations."},{title:"YOUR RIGHTS",content:"Depending on your location, you may have the right to: Access your data. Request corrections to inaccurate or incomplete data. Request deletion of your personal data. Object to certain processing activities. Request a copy of your data in machine-readable format. To exercise these rights, please contact us using the details below."},{title:"DATA SECURITY",content:"We implement appropriate technical and organizational measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection."},{title:"THIRD-PARTY LINKS",content:"Our website may contain links to external sites. We are not responsible for their privacy practices. We recommend reviewing their privacy policies separately."},{title:"INTERNATIONAL DATA TRANSFERS",content:"If you access our site from outside our operating country, your data may be transferred and processed in other regions where our servers or partners are located. By using the site, you consent to this transfer."},{title:"UPDATES TO THIS POLICY",content:"We may update this Privacy Policy as necessary. Any changes will be reflected by updating the 'Last Updated' date above. We encourage you to check this page periodically."}];return x.jsxs("div",{children:[x.jsx(XL,{children:x.jsx(ZL,{children:"Privacy and terms"})}),x.jsx(FL,{children:e.map((t,i)=>x.jsxs(qL,{children:[x.jsx(YL,{children:t.title}),x.jsx(WL,{children:t.content})]},i))})]})},KL=()=>{const[e,t]=H.useState(!1),i=()=>{t(!0)},a=()=>{t(!1)};return x.jsxs(x.Fragment,{children:[x.jsx(zL,{children:x.jsxs(HL,{children:[x.jsxs(PL,{children:[x.jsxs(BL,{children:[x.jsx("a",{href:"https://maps.app.goo.gl/cJF4BwHPJFbYsQAMA",target:"_blank",rel:"noopener noreferrer",children:"801 Tioga pl, Newbury Park, CA 91320"})," ",x.jsx("br",{}),x.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"}),x.jsx("br",{})," ",x.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexnola@gmail.com"})]}),x.jsxs(IL,{children:[x.jsx(R0,{to:"/home#hero",children:"Home"}),x.jsx(R0,{to:"/service#all",children:"Services"}),x.jsx(R0,{to:"/about#ap",children:"About Us"}),x.jsx(R0,{to:"/tips#app",children:"Tips"}),x.jsx(R0,{to:"/contact#ap",children:"Contacts"}),x.jsx(Cx,{onClick:i,style:{cursor:"pointer"},children:"Privacy and Terms"})]})]}),x.jsxs($L,{children:[x.jsxs(GL,{viewBox:"0 0 343 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[x.jsx("path",{d:"M0 54.8045L19.396 1.71207H26.1359L45.457 54.8045H39.9152L34.2238 38.8768H11.2332L5.5417 54.8045H0ZM12.9556 33.9414H32.5013L22.7659 6.27353L12.9556 33.9414Z",fill:"#3098EE"}),x.jsx("path",{d:"M51.2842 54.8045V1.71207H56.3765V54.8045H51.2842Z",fill:"#3098EE"}),x.jsx("path",{d:"M67.6308 54.8045V1.71207H87.1016C90.896 1.71207 94.1161 2.36015 96.7622 3.6563C99.4581 4.9026 101.53 6.69727 102.978 9.04032C104.426 11.3834 105.15 14.2 105.15 17.4902C105.15 19.933 104.575 22.1015 103.427 23.9959C102.329 25.8903 100.856 27.4108 99.0088 28.5574C97.1616 29.704 95.1646 30.3521 93.0178 30.5016L92.6433 29.8286C96.1381 29.8286 98.8341 30.6262 100.731 32.2215C102.678 33.7669 103.802 36.2097 104.101 39.5498L105.449 54.8045H100.282L99.0088 39.9984C98.8091 37.5557 97.9354 35.761 96.3877 34.6144C94.84 33.418 92.3438 32.8197 88.8989 32.8197H72.7232V54.8045H67.6308ZM72.7232 27.8844H87.9254C91.5699 27.8844 94.4407 26.987 96.5375 25.1924C98.6843 23.3478 99.7577 20.7555 99.7577 17.4155C99.7577 13.9258 98.6843 11.2587 96.5375 9.41421C94.3907 7.56968 91.2205 6.64742 87.0267 6.64742H72.7232V27.8844Z",fill:"#3098EE"}),x.jsx("path",{d:"M125.684 54.8045V9.1151H109.359V1.71207H150.098V9.1151H133.772V54.8045H125.684Z",fill:"white"}),x.jsx("path",{d:"M153.991 54.8045V1.71207H188.589V9.1151H162.079V24.5941H187.691V31.7728H162.079V47.4014H189.188V54.8045H153.991Z",fill:"white"}),x.jsx("path",{d:"M192.736 54.8045L210.41 28.1835L192.886 1.71207H202.397L215.502 21.9021L228.383 1.71207H237.819L220.295 28.0339L238.043 54.8045H228.533L215.352 34.3153L202.172 54.8045H192.736Z",fill:"white"}),x.jsx("path",{d:"M243.289 54.8045V1.71207H253.549L278.112 45.0085V1.71207H286.2V54.8045H275.566L251.377 12.4801V54.8045H243.289Z",fill:"white"}),x.jsx("path",{d:"M318.137 56.0009C312.995 56.0009 308.577 54.9042 304.882 52.7107C301.188 50.4674 298.342 47.2768 296.345 43.1391C294.348 39.0014 293.349 34.066 293.349 28.333C293.349 22.6001 294.348 17.6647 296.345 13.527C298.342 9.33943 301.188 6.12397 304.882 3.88063C308.577 1.63729 312.995 0.515625 318.137 0.515625C323.329 0.515625 327.773 1.63729 331.467 3.88063C335.212 6.12397 338.057 9.33943 340.004 13.527C342.001 17.6647 343 22.6001 343 28.333C343 34.066 342.001 39.0014 340.004 43.1391C338.057 47.2768 335.212 50.4674 331.467 52.7107C327.773 54.9042 323.329 56.0009 318.137 56.0009ZM318.137 48.5979C321.582 48.5979 324.528 47.8003 326.974 46.205C329.47 44.6097 331.367 42.3165 332.665 39.3254C333.964 36.2844 334.613 32.6203 334.613 28.333C334.613 24.0458 333.964 20.3817 332.665 17.3407C331.367 14.2997 329.47 11.9816 326.974 10.3863C324.528 8.74121 321.582 7.91865 318.137 7.91865C314.742 7.91865 311.822 8.74121 309.375 10.3863C306.929 11.9816 305.032 14.2997 303.684 17.3407C302.386 20.3817 301.737 24.0458 301.737 28.333C301.737 32.6203 302.386 36.2844 303.684 39.3254C305.032 42.3165 306.929 44.6097 309.375 46.205C311.822 47.8003 314.742 48.5979 318.137 48.5979Z",fill:"white"})]}),x.jsx(UL,{opacity:.5}),x.jsxs(NL,{children:[x.jsx(Cx,{size:"14px",weight:"500",children:"Designed by TRBN"}),x.jsx(Cx,{size:"14px",children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})}),e&&x.jsx(xb,{onClick:a,children:x.jsxs(vb,{onClick:o=>o.stopPropagation(),children:[x.jsx(yb,{onClick:a,children:"×"}),x.jsx(wb,{})]})})]})},QL=()=>{const e=ba();return H.useEffect(()=>{const t=()=>{sessionStorage.clear()};return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[]),H.useEffect(()=>{(()=>{const a=Object.keys(localStorage).find(o=>o.startsWith("cached_video_"));a&&localStorage.removeItem(a)})()},[]),H.useEffect(()=>{if(e.hash){const t=e.hash.replace("#",""),i=document.getElementById(t);i&&setTimeout(()=>{i.scrollIntoView({behavior:"smooth",block:"start"})},400)}else window.scrollTo({top:0,behavior:"auto"})},[e.pathname]),x.jsxs(x.Fragment,{children:[x.jsx(VL,{}),x.jsx(H.Suspense,{children:x.jsx(ES,{})}),x.jsx(KL,{})]})};function n6(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function ry(e,t){e===void 0&&(e={}),t===void 0&&(t={});const i=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>i.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:n6(t[a])&&n6(e[a])&&Object.keys(t[a]).length>0&&ry(e[a],t[a])})}const bb={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function zr(){const e=typeof document<"u"?document:{};return ry(e,bb),e}const JL={document:bb,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function wi(){const e=typeof window<"u"?window:{};return ry(e,JL),e}function e_(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function t_(e){const t=e;Object.keys(t).forEach(i=>{try{t[i]=null}catch{}try{delete t[i]}catch{}})}function Sb(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function $m(){return Date.now()}function n_(e){const t=wi();let i;return t.getComputedStyle&&(i=t.getComputedStyle(e,null)),!i&&e.currentStyle&&(i=e.currentStyle),i||(i=e.style),i}function i_(e,t){t===void 0&&(t="x");const i=wi();let a,o,c;const f=n_(e);return i.WebKitCSSMatrix?(o=f.transform||f.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(h=>h.replace(",",".")).join(", ")),c=new i.WebKitCSSMatrix(o==="none"?"":o)):(c=f.MozTransform||f.OTransform||f.MsTransform||f.msTransform||f.transform||f.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=c.toString().split(",")),t==="x"&&(i.WebKitCSSMatrix?o=c.m41:a.length===16?o=parseFloat(a[12]):o=parseFloat(a[4])),t==="y"&&(i.WebKitCSSMatrix?o=c.m42:a.length===16?o=parseFloat(a[13]):o=parseFloat(a[5])),o||0}function J1(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function a_(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function ta(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){const a=i<0||arguments.length<=i?void 0:arguments[i];if(a!=null&&!a_(a)){const o=Object.keys(Object(a)).filter(c=>t.indexOf(c)<0);for(let c=0,f=o.length;c<f;c+=1){const h=o[c],p=Object.getOwnPropertyDescriptor(a,h);p!==void 0&&p.enumerable&&(J1(e[h])&&J1(a[h])?a[h].__swiper__?e[h]=a[h]:ta(e[h],a[h]):!J1(e[h])&&J1(a[h])?(e[h]={},a[h].__swiper__?e[h]=a[h]:ta(e[h],a[h])):e[h]=a[h])}}}return e}function em(e,t,i){e.style.setProperty(t,i)}function Cb(e){let{swiper:t,targetPosition:i,side:a}=e;const o=wi(),c=-t.translate;let f=null,h;const p=t.params.speed;t.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(t.cssModeFrameID);const g=i>c?"next":"prev",y=(S,T)=>g==="next"&&S>=T||g==="prev"&&S<=T,b=()=>{h=new Date().getTime(),f===null&&(f=h);const S=Math.max(Math.min((h-f)/p,1),0),T=.5-Math.cos(S*Math.PI)/2;let E=c+T*(i-c);if(y(E,i)&&(E=i),t.wrapperEl.scrollTo({[a]:E}),y(E,i)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:E})}),o.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=o.requestAnimationFrame(b)};b()}function Or(e,t){t===void 0&&(t="");const i=wi(),a=[...e.children];return i.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),t?a.filter(o=>o.matches(t)):a}function r_(e,t){const i=[t];for(;i.length>0;){const a=i.shift();if(e===a)return!0;i.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function s_(e,t){const i=wi();let a=t.contains(e);return!a&&i.HTMLSlotElement&&t instanceof HTMLSlotElement&&(a=[...t.assignedElements()].includes(e),a||(a=r_(e,t))),a}function Um(e){try{console.warn(e);return}catch{}}function Gm(e,t){t===void 0&&(t=[]);const i=document.createElement(e);return i.classList.add(...Array.isArray(t)?t:e_(t)),i}function o_(e,t){const i=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&i.push(a):i.push(a),e=a}return i}function l_(e,t){const i=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&i.push(a):i.push(a),e=a}return i}function Mo(e,t){return wi().getComputedStyle(e,null).getPropertyValue(t)}function Fm(e){let t=e,i;if(t){for(i=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(i+=1);return i}}function Tb(e,t){const i=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&i.push(a):i.push(a),a=a.parentElement;return i}function G3(e,t,i){const a=wi();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function En(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function qm(e,t){t===void 0&&(t=""),typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:i=>i}).createHTML(t):e.innerHTML=t}function Eb(e,t,i,a){return e.params.createElements&&Object.keys(a).forEach(o=>{if(!i[o]&&i.auto===!0){let c=Or(e.el,`.${a[o]}`)[0];c||(c=Gm("div",a[o]),c.className=a[o],e.el.append(c)),i[o]=c,t[o]=c}}),i}function sy(e){let{swiper:t,extendParams:i,on:a,emit:o}=e;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function c(E){let L;return E&&typeof E=="string"&&t.isElement&&(L=t.el.querySelector(E)||t.hostEl.querySelector(E),L)?L:(E&&(typeof E=="string"&&(L=[...document.querySelectorAll(E)]),t.params.uniqueNavElements&&typeof E=="string"&&L&&L.length>1&&t.el.querySelectorAll(E).length===1?L=t.el.querySelector(E):L&&L.length===1&&(L=L[0])),E&&!L?E:L)}function f(E,L){const P=t.params.navigation;E=En(E),E.forEach(_=>{_&&(_.classList[L?"add":"remove"](...P.disabledClass.split(" ")),_.tagName==="BUTTON"&&(_.disabled=L),t.params.watchOverflow&&t.enabled&&_.classList[t.isLocked?"add":"remove"](P.lockClass))})}function h(){const{nextEl:E,prevEl:L}=t.navigation;if(t.params.loop){f(L,!1),f(E,!1);return}f(L,t.isBeginning&&!t.params.rewind),f(E,t.isEnd&&!t.params.rewind)}function p(E){E.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),o("navigationPrev"))}function g(E){E.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),o("navigationNext"))}function y(){const E=t.params.navigation;if(t.params.navigation=Eb(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(E.nextEl||E.prevEl))return;let L=c(E.nextEl),P=c(E.prevEl);Object.assign(t.navigation,{nextEl:L,prevEl:P}),L=En(L),P=En(P);const _=(R,O)=>{R&&R.addEventListener("click",O==="next"?g:p),!t.enabled&&R&&R.classList.add(...E.lockClass.split(" "))};L.forEach(R=>_(R,"next")),P.forEach(R=>_(R,"prev"))}function b(){let{nextEl:E,prevEl:L}=t.navigation;E=En(E),L=En(L);const P=(_,R)=>{_.removeEventListener("click",R==="next"?g:p),_.classList.remove(...t.params.navigation.disabledClass.split(" "))};E.forEach(_=>P(_,"next")),L.forEach(_=>P(_,"prev"))}a("init",()=>{t.params.navigation.enabled===!1?T():(y(),h())}),a("toEdge fromEdge lock unlock",()=>{h()}),a("destroy",()=>{b()}),a("enable disable",()=>{let{nextEl:E,prevEl:L}=t.navigation;if(E=En(E),L=En(L),t.enabled){h();return}[...E,...L].filter(P=>!!P).forEach(P=>P.classList.add(t.params.navigation.lockClass))}),a("click",(E,L)=>{let{nextEl:P,prevEl:_}=t.navigation;P=En(P),_=En(_);const R=L.target;let O=_.includes(R)||P.includes(R);if(t.isElement&&!O){const N=L.path||L.composedPath&&L.composedPath();N&&(O=N.find(V=>P.includes(V)||_.includes(V)))}if(t.params.navigation.hideOnClick&&!O){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===R||t.pagination.el.contains(R)))return;let N;P.length?N=P[0].classList.contains(t.params.navigation.hiddenClass):_.length&&(N=_[0].classList.contains(t.params.navigation.hiddenClass)),o(N===!0?"navigationShow":"navigationHide"),[...P,..._].filter(V=>!!V).forEach(V=>V.classList.toggle(t.params.navigation.hiddenClass))}});const S=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),y(),h()},T=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),b()};Object.assign(t.navigation,{enable:S,disable:T,update:h,init:y,destroy:b})}function O0(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function c_(e){let{swiper:t,extendParams:i,on:a,emit:o}=e;const c="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:R=>R,formatFractionTotal:R=>R,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),t.pagination={el:null,bullets:[]};let f,h=0;function p(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function g(R,O){const{bulletActiveClass:N}=t.params.pagination;R&&(R=R[`${O==="prev"?"previous":"next"}ElementSibling`],R&&(R.classList.add(`${N}-${O}`),R=R[`${O==="prev"?"previous":"next"}ElementSibling`],R&&R.classList.add(`${N}-${O}-${O}`)))}function y(R,O,N){if(R=R%N,O=O%N,O===R+1)return"next";if(O===R-1)return"previous"}function b(R){const O=R.target.closest(O0(t.params.pagination.bulletClass));if(!O)return;R.preventDefault();const N=Fm(O)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===N)return;const V=y(t.realIndex,N,t.slides.length);V==="next"?t.slideNext():V==="previous"?t.slidePrev():t.slideToLoop(N)}else t.slideTo(N)}function S(){const R=t.rtl,O=t.params.pagination;if(p())return;let N=t.pagination.el;N=En(N);let V,Y;const G=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,Q=t.params.loop?Math.ceil(G/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(Y=t.previousRealIndex||0,V=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(V=t.snapIndex,Y=t.previousSnapIndex):(Y=t.previousIndex||0,V=t.activeIndex||0),O.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const ie=t.pagination.bullets;let se,de,ye;if(O.dynamicBullets&&(f=G3(ie[0],t.isHorizontal()?"width":"height"),N.forEach(Ae=>{Ae.style[t.isHorizontal()?"width":"height"]=`${f*(O.dynamicMainBullets+4)}px`}),O.dynamicMainBullets>1&&Y!==void 0&&(h+=V-(Y||0),h>O.dynamicMainBullets-1?h=O.dynamicMainBullets-1:h<0&&(h=0)),se=Math.max(V-h,0),de=se+(Math.min(ie.length,O.dynamicMainBullets)-1),ye=(de+se)/2),ie.forEach(Ae=>{const Re=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(Ee=>`${O.bulletActiveClass}${Ee}`)].map(Ee=>typeof Ee=="string"&&Ee.includes(" ")?Ee.split(" "):Ee).flat();Ae.classList.remove(...Re)}),N.length>1)ie.forEach(Ae=>{const Re=Fm(Ae);Re===V?Ae.classList.add(...O.bulletActiveClass.split(" ")):t.isElement&&Ae.setAttribute("part","bullet"),O.dynamicBullets&&(Re>=se&&Re<=de&&Ae.classList.add(...`${O.bulletActiveClass}-main`.split(" ")),Re===se&&g(Ae,"prev"),Re===de&&g(Ae,"next"))});else{const Ae=ie[V];if(Ae&&Ae.classList.add(...O.bulletActiveClass.split(" ")),t.isElement&&ie.forEach((Re,Ee)=>{Re.setAttribute("part",Ee===V?"bullet-active":"bullet")}),O.dynamicBullets){const Re=ie[se],Ee=ie[de];for(let X=se;X<=de;X+=1)ie[X]&&ie[X].classList.add(...`${O.bulletActiveClass}-main`.split(" "));g(Re,"prev"),g(Ee,"next")}}if(O.dynamicBullets){const Ae=Math.min(ie.length,O.dynamicMainBullets+4),Re=(f*Ae-f)/2-ye*f,Ee=R?"right":"left";ie.forEach(X=>{X.style[t.isHorizontal()?Ee:"top"]=`${Re}px`})}}N.forEach((ie,se)=>{if(O.type==="fraction"&&(ie.querySelectorAll(O0(O.currentClass)).forEach(de=>{de.textContent=O.formatFractionCurrent(V+1)}),ie.querySelectorAll(O0(O.totalClass)).forEach(de=>{de.textContent=O.formatFractionTotal(Q)})),O.type==="progressbar"){let de;O.progressbarOpposite?de=t.isHorizontal()?"vertical":"horizontal":de=t.isHorizontal()?"horizontal":"vertical";const ye=(V+1)/Q;let Ae=1,Re=1;de==="horizontal"?Ae=ye:Re=ye,ie.querySelectorAll(O0(O.progressbarFillClass)).forEach(Ee=>{Ee.style.transform=`translate3d(0,0,0) scaleX(${Ae}) scaleY(${Re})`,Ee.style.transitionDuration=`${t.params.speed}ms`})}O.type==="custom"&&O.renderCustom?(qm(ie,O.renderCustom(t,V+1,Q)),se===0&&o("paginationRender",ie)):(se===0&&o("paginationRender",ie),o("paginationUpdate",ie)),t.params.watchOverflow&&t.enabled&&ie.classList[t.isLocked?"add":"remove"](O.lockClass)})}function T(){const R=t.params.pagination;if(p())return;const O=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let N=t.pagination.el;N=En(N);let V="";if(R.type==="bullets"){let Y=t.params.loop?Math.ceil(O/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&Y>O&&(Y=O);for(let G=0;G<Y;G+=1)R.renderBullet?V+=R.renderBullet.call(t,G,R.bulletClass):V+=`<${R.bulletElement} ${t.isElement?'part="bullet"':""} class="${R.bulletClass}"></${R.bulletElement}>`}R.type==="fraction"&&(R.renderFraction?V=R.renderFraction.call(t,R.currentClass,R.totalClass):V=`<span class="${R.currentClass}"></span> / <span class="${R.totalClass}"></span>`),R.type==="progressbar"&&(R.renderProgressbar?V=R.renderProgressbar.call(t,R.progressbarFillClass):V=`<span class="${R.progressbarFillClass}"></span>`),t.pagination.bullets=[],N.forEach(Y=>{R.type!=="custom"&&qm(Y,V||""),R.type==="bullets"&&t.pagination.bullets.push(...Y.querySelectorAll(O0(R.bulletClass)))}),R.type!=="custom"&&o("paginationRender",N[0])}function E(){t.params.pagination=Eb(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const R=t.params.pagination;if(!R.el)return;let O;typeof R.el=="string"&&t.isElement&&(O=t.el.querySelector(R.el)),!O&&typeof R.el=="string"&&(O=[...document.querySelectorAll(R.el)]),O||(O=R.el),!(!O||O.length===0)&&(t.params.uniqueNavElements&&typeof R.el=="string"&&Array.isArray(O)&&O.length>1&&(O=[...t.el.querySelectorAll(R.el)],O.length>1&&(O=O.find(N=>Tb(N,".swiper")[0]===t.el))),Array.isArray(O)&&O.length===1&&(O=O[0]),Object.assign(t.pagination,{el:O}),O=En(O),O.forEach(N=>{R.type==="bullets"&&R.clickable&&N.classList.add(...(R.clickableClass||"").split(" ")),N.classList.add(R.modifierClass+R.type),N.classList.add(t.isHorizontal()?R.horizontalClass:R.verticalClass),R.type==="bullets"&&R.dynamicBullets&&(N.classList.add(`${R.modifierClass}${R.type}-dynamic`),h=0,R.dynamicMainBullets<1&&(R.dynamicMainBullets=1)),R.type==="progressbar"&&R.progressbarOpposite&&N.classList.add(R.progressbarOppositeClass),R.clickable&&N.addEventListener("click",b),t.enabled||N.classList.add(R.lockClass)}))}function L(){const R=t.params.pagination;if(p())return;let O=t.pagination.el;O&&(O=En(O),O.forEach(N=>{N.classList.remove(R.hiddenClass),N.classList.remove(R.modifierClass+R.type),N.classList.remove(t.isHorizontal()?R.horizontalClass:R.verticalClass),R.clickable&&(N.classList.remove(...(R.clickableClass||"").split(" ")),N.removeEventListener("click",b))})),t.pagination.bullets&&t.pagination.bullets.forEach(N=>N.classList.remove(...R.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const R=t.params.pagination;let{el:O}=t.pagination;O=En(O),O.forEach(N=>{N.classList.remove(R.horizontalClass,R.verticalClass),N.classList.add(t.isHorizontal()?R.horizontalClass:R.verticalClass)})}),a("init",()=>{t.params.pagination.enabled===!1?_():(E(),T(),S())}),a("activeIndexChange",()=>{typeof t.snapIndex>"u"&&S()}),a("snapIndexChange",()=>{S()}),a("snapGridLengthChange",()=>{T(),S()}),a("destroy",()=>{L()}),a("enable disable",()=>{let{el:R}=t.pagination;R&&(R=En(R),R.forEach(O=>O.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),a("lock unlock",()=>{S()}),a("click",(R,O)=>{const N=O.target,V=En(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&V&&V.length>0&&!N.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&N===t.navigation.nextEl||t.navigation.prevEl&&N===t.navigation.prevEl))return;const Y=V[0].classList.contains(t.params.pagination.hiddenClass);o(Y===!0?"paginationShow":"paginationHide"),V.forEach(G=>G.classList.toggle(t.params.pagination.hiddenClass))}});const P=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:R}=t.pagination;R&&(R=En(R),R.forEach(O=>O.classList.remove(t.params.pagination.paginationDisabledClass))),E(),T(),S()},_=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:R}=t.pagination;R&&(R=En(R),R.forEach(O=>O.classList.add(t.params.pagination.paginationDisabledClass))),L()};Object.assign(t.pagination,{enable:P,disable:_,render:T,update:S,init:E,destroy:L})}function ia(e){let{swiper:t,extendParams:i,on:a,emit:o,params:c}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let f,h,p=c&&c.autoplay?c.autoplay.delay:3e3,g=c&&c.autoplay?c.autoplay.delay:3e3,y,b=new Date().getTime(),S,T,E,L,P,_,R;function O(ue){!t||t.destroyed||!t.wrapperEl||ue.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",O),!(R||ue.detail&&ue.detail.bySwiperTouchMove)&&se())}const N=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?S=!0:S&&(g=y,S=!1);const ue=t.autoplay.paused?y:b+g-new Date().getTime();t.autoplay.timeLeft=ue,o("autoplayTimeLeft",ue,ue/p),h=requestAnimationFrame(()=>{N()})},V=()=>{let ue;return t.virtual&&t.params.virtual.enabled?ue=t.slides.find(B=>B.classList.contains("swiper-slide-active")):ue=t.slides[t.activeIndex],ue?parseInt(ue.getAttribute("data-swiper-autoplay"),10):void 0},Y=ue=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(h),N();let xe=typeof ue>"u"?t.params.autoplay.delay:ue;p=t.params.autoplay.delay,g=t.params.autoplay.delay;const B=V();!Number.isNaN(B)&&B>0&&typeof ue>"u"&&(xe=B,p=B,g=B),y=xe;const re=t.params.speed,we=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(re,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,re,!0,!0),o("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(re,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,re,!0,!0),o("autoplay")),t.params.cssMode&&(b=new Date().getTime(),requestAnimationFrame(()=>{Y()})))};return xe>0?(clearTimeout(f),f=setTimeout(()=>{we()},xe)):requestAnimationFrame(()=>{we()}),xe},G=()=>{b=new Date().getTime(),t.autoplay.running=!0,Y(),o("autoplayStart")},Q=()=>{t.autoplay.running=!1,clearTimeout(f),cancelAnimationFrame(h),o("autoplayStop")},ie=(ue,xe)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(f),ue||(_=!0);const B=()=>{o("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",O):se()};if(t.autoplay.paused=!0,xe){P&&(y=t.params.autoplay.delay),P=!1,B();return}y=(y||t.params.autoplay.delay)-(new Date().getTime()-b),!(t.isEnd&&y<0&&!t.params.loop)&&(y<0&&(y=0),B())},se=()=>{t.isEnd&&y<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(b=new Date().getTime(),_?(_=!1,Y(y)):Y(),t.autoplay.paused=!1,o("autoplayResume"))},de=()=>{if(t.destroyed||!t.autoplay.running)return;const ue=zr();ue.visibilityState==="hidden"&&(_=!0,ie(!0)),ue.visibilityState==="visible"&&se()},ye=ue=>{ue.pointerType==="mouse"&&(_=!0,R=!0,!(t.animating||t.autoplay.paused)&&ie(!0))},Ae=ue=>{ue.pointerType==="mouse"&&(R=!1,t.autoplay.paused&&se())},Re=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",ye),t.el.addEventListener("pointerleave",Ae))},Ee=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",ye),t.el.removeEventListener("pointerleave",Ae))},X=()=>{zr().addEventListener("visibilitychange",de)},le=()=>{zr().removeEventListener("visibilitychange",de)};a("init",()=>{t.params.autoplay.enabled&&(Re(),X(),G())}),a("destroy",()=>{Ee(),le(),t.autoplay.running&&Q()}),a("_freeModeStaticRelease",()=>{(E||_)&&se()}),a("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?Q():ie(!0,!0)}),a("beforeTransitionStart",(ue,xe,B)=>{t.destroyed||!t.autoplay.running||(B||!t.params.autoplay.disableOnInteraction?ie(!0,!0):Q())}),a("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){Q();return}T=!0,E=!1,_=!1,L=setTimeout(()=>{_=!0,E=!0,ie(!0)},200)}}),a("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!T)){if(clearTimeout(L),clearTimeout(f),t.params.autoplay.disableOnInteraction){E=!1,T=!1;return}E&&t.params.cssMode&&se(),E=!1,T=!1}}),a("slideChange",()=>{t.destroyed||!t.autoplay.running||(P=!0)}),Object.assign(t.autoplay,{start:G,stop:Q,pause:ie,resume:se})}let Tx;function u_(){const e=wi(),t=zr();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Ab(){return Tx||(Tx=u_()),Tx}let Ex;function d_(e){let{userAgent:t}=e===void 0?{}:e;const i=Ab(),a=wi(),o=a.navigator.platform,c=t||a.navigator.userAgent,f={ios:!1,android:!1},h=a.screen.width,p=a.screen.height,g=c.match(/(Android);?[\s\/]+([\d.]+)?/);let y=c.match(/(iPad).*OS\s([\d_]+)/);const b=c.match(/(iPod)(.*OS\s([\d_]+))?/),S=!y&&c.match(/(iPhone\sOS|iOS)\s([\d_]+)/),T=o==="Win32";let E=o==="MacIntel";const L=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!y&&E&&i.touch&&L.indexOf(`${h}x${p}`)>=0&&(y=c.match(/(Version)\/([\d.]+)/),y||(y=[0,1,"13_0_0"]),E=!1),g&&!T&&(f.os="android",f.android=!0),(y||S||b)&&(f.os="ios",f.ios=!0),f}function Mb(e){return e===void 0&&(e={}),Ex||(Ex=d_(e)),Ex}let Ax;function f_(){const e=wi(),t=Mb();let i=!1;function a(){const h=e.navigator.userAgent.toLowerCase();return h.indexOf("safari")>=0&&h.indexOf("chrome")<0&&h.indexOf("android")<0}if(a()){const h=String(e.navigator.userAgent);if(h.includes("Version/")){const[p,g]=h.split("Version/")[1].split(" ")[0].split(".").map(y=>Number(y));i=p<16||p===16&&g<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),c=a(),f=c||o&&t.ios;return{isSafari:i||c,needPerspectiveFix:i,need3dFix:f,isWebView:o}}function jb(){return Ax||(Ax=f_()),Ax}function h_(e){let{swiper:t,on:i,emit:a}=e;const o=wi();let c=null,f=null;const h=()=>{!t||t.destroyed||!t.initialized||(a("beforeResize"),a("resize"))},p=()=>{!t||t.destroyed||!t.initialized||(c=new ResizeObserver(b=>{f=o.requestAnimationFrame(()=>{const{width:S,height:T}=t;let E=S,L=T;b.forEach(P=>{let{contentBoxSize:_,contentRect:R,target:O}=P;O&&O!==t.el||(E=R?R.width:(_[0]||_).inlineSize,L=R?R.height:(_[0]||_).blockSize)}),(E!==S||L!==T)&&h()})}),c.observe(t.el))},g=()=>{f&&o.cancelAnimationFrame(f),c&&c.unobserve&&t.el&&(c.unobserve(t.el),c=null)},y=()=>{!t||t.destroyed||!t.initialized||a("orientationchange")};i("init",()=>{if(t.params.resizeObserver&&typeof o.ResizeObserver<"u"){p();return}o.addEventListener("resize",h),o.addEventListener("orientationchange",y)}),i("destroy",()=>{g(),o.removeEventListener("resize",h),o.removeEventListener("orientationchange",y)})}function p_(e){let{swiper:t,extendParams:i,on:a,emit:o}=e;const c=[],f=wi(),h=function(y,b){b===void 0&&(b={});const S=f.MutationObserver||f.WebkitMutationObserver,T=new S(E=>{if(t.__preventObserver__)return;if(E.length===1){o("observerUpdate",E[0]);return}const L=function(){o("observerUpdate",E[0])};f.requestAnimationFrame?f.requestAnimationFrame(L):f.setTimeout(L,0)});T.observe(y,{attributes:typeof b.attributes>"u"?!0:b.attributes,childList:t.isElement||(typeof b.childList>"u"?!0:b).childList,characterData:typeof b.characterData>"u"?!0:b.characterData}),c.push(T)},p=()=>{if(t.params.observer){if(t.params.observeParents){const y=Tb(t.hostEl);for(let b=0;b<y.length;b+=1)h(y[b])}h(t.hostEl,{childList:t.params.observeSlideChildren}),h(t.wrapperEl,{attributes:!1})}},g=()=>{c.forEach(y=>{y.disconnect()}),c.splice(0,c.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",p),a("destroy",g)}var m_={on(e,t,i){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const o=i?"unshift":"push";return e.split(" ").forEach(c=>{a.eventsListeners[c]||(a.eventsListeners[c]=[]),a.eventsListeners[c][o](t)}),a},once(e,t,i){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;function o(){a.off(e,o),o.__emitterProxy&&delete o.__emitterProxy;for(var c=arguments.length,f=new Array(c),h=0;h<c;h++)f[h]=arguments[h];t.apply(a,f)}return o.__emitterProxy=t,a.on(e,o,i)},onAny(e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const a=t?"unshift":"push";return i.eventsAnyListeners.indexOf(e)<0&&i.eventsAnyListeners[a](e),i},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const i=t.eventsAnyListeners.indexOf(e);return i>=0&&t.eventsAnyListeners.splice(i,1),t},off(e,t){const i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||e.split(" ").forEach(a=>{typeof t>"u"?i.eventsListeners[a]=[]:i.eventsListeners[a]&&i.eventsListeners[a].forEach((o,c)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&i.eventsListeners[a].splice(c,1)})}),i},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,i,a;for(var o=arguments.length,c=new Array(o),f=0;f<o;f++)c[f]=arguments[f];return typeof c[0]=="string"||Array.isArray(c[0])?(t=c[0],i=c.slice(1,c.length),a=e):(t=c[0].events,i=c[0].data,a=c[0].context||e),i.unshift(a),(Array.isArray(t)?t:t.split(" ")).forEach(p=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(g=>{g.apply(a,[p,...i])}),e.eventsListeners&&e.eventsListeners[p]&&e.eventsListeners[p].forEach(g=>{g.apply(a,i)})}),e}};function g_(){const e=this;let t,i;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?i=e.params.height:i=a.clientHeight,!(t===0&&e.isHorizontal()||i===0&&e.isVertical())&&(t=t-parseInt(Mo(a,"padding-left")||0,10)-parseInt(Mo(a,"padding-right")||0,10),i=i-parseInt(Mo(a,"padding-top")||0,10)-parseInt(Mo(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(i)&&(i=0),Object.assign(e,{width:t,height:i,size:e.isHorizontal()?t:i}))}function x_(){const e=this;function t(se,de){return parseFloat(se.getPropertyValue(e.getDirectionLabel(de))||0)}const i=e.params,{wrapperEl:a,slidesEl:o,size:c,rtlTranslate:f,wrongRTL:h}=e,p=e.virtual&&i.virtual.enabled,g=p?e.virtual.slides.length:e.slides.length,y=Or(o,`.${e.params.slideClass}, swiper-slide`),b=p?e.virtual.slides.length:y.length;let S=[];const T=[],E=[];let L=i.slidesOffsetBefore;typeof L=="function"&&(L=i.slidesOffsetBefore.call(e));let P=i.slidesOffsetAfter;typeof P=="function"&&(P=i.slidesOffsetAfter.call(e));const _=e.snapGrid.length,R=e.slidesGrid.length;let O=i.spaceBetween,N=-L,V=0,Y=0;if(typeof c>"u")return;typeof O=="string"&&O.indexOf("%")>=0?O=parseFloat(O.replace("%",""))/100*c:typeof O=="string"&&(O=parseFloat(O)),e.virtualSize=-O,y.forEach(se=>{f?se.style.marginLeft="":se.style.marginRight="",se.style.marginBottom="",se.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(em(a,"--swiper-centered-offset-before",""),em(a,"--swiper-centered-offset-after",""));const G=i.grid&&i.grid.rows>1&&e.grid;G?e.grid.initSlides(y):e.grid&&e.grid.unsetSlides();let Q;const ie=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(se=>typeof i.breakpoints[se].slidesPerView<"u").length>0;for(let se=0;se<b;se+=1){Q=0;let de;if(y[se]&&(de=y[se]),G&&e.grid.updateSlide(se,de,y),!(y[se]&&Mo(de,"display")==="none")){if(i.slidesPerView==="auto"){ie&&(y[se].style[e.getDirectionLabel("width")]="");const ye=getComputedStyle(de),Ae=de.style.transform,Re=de.style.webkitTransform;if(Ae&&(de.style.transform="none"),Re&&(de.style.webkitTransform="none"),i.roundLengths)Q=e.isHorizontal()?G3(de,"width"):G3(de,"height");else{const Ee=t(ye,"width"),X=t(ye,"padding-left"),le=t(ye,"padding-right"),ue=t(ye,"margin-left"),xe=t(ye,"margin-right"),B=ye.getPropertyValue("box-sizing");if(B&&B==="border-box")Q=Ee+ue+xe;else{const{clientWidth:re,offsetWidth:we}=de;Q=Ee+X+le+ue+xe+(we-re)}}Ae&&(de.style.transform=Ae),Re&&(de.style.webkitTransform=Re),i.roundLengths&&(Q=Math.floor(Q))}else Q=(c-(i.slidesPerView-1)*O)/i.slidesPerView,i.roundLengths&&(Q=Math.floor(Q)),y[se]&&(y[se].style[e.getDirectionLabel("width")]=`${Q}px`);y[se]&&(y[se].swiperSlideSize=Q),E.push(Q),i.centeredSlides?(N=N+Q/2+V/2+O,V===0&&se!==0&&(N=N-c/2-O),se===0&&(N=N-c/2-O),Math.abs(N)<1/1e3&&(N=0),i.roundLengths&&(N=Math.floor(N)),Y%i.slidesPerGroup===0&&S.push(N),T.push(N)):(i.roundLengths&&(N=Math.floor(N)),(Y-Math.min(e.params.slidesPerGroupSkip,Y))%e.params.slidesPerGroup===0&&S.push(N),T.push(N),N=N+Q+O),e.virtualSize+=Q+O,V=Q,Y+=1}}if(e.virtualSize=Math.max(e.virtualSize,c)+P,f&&h&&(i.effect==="slide"||i.effect==="coverflow")&&(a.style.width=`${e.virtualSize+O}px`),i.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+O}px`),G&&e.grid.updateWrapperSize(Q,S),!i.centeredSlides){const se=[];for(let de=0;de<S.length;de+=1){let ye=S[de];i.roundLengths&&(ye=Math.floor(ye)),S[de]<=e.virtualSize-c&&se.push(ye)}S=se,Math.floor(e.virtualSize-c)-Math.floor(S[S.length-1])>1&&S.push(e.virtualSize-c)}if(p&&i.loop){const se=E[0]+O;if(i.slidesPerGroup>1){const de=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/i.slidesPerGroup),ye=se*i.slidesPerGroup;for(let Ae=0;Ae<de;Ae+=1)S.push(S[S.length-1]+ye)}for(let de=0;de<e.virtual.slidesBefore+e.virtual.slidesAfter;de+=1)i.slidesPerGroup===1&&S.push(S[S.length-1]+se),T.push(T[T.length-1]+se),e.virtualSize+=se}if(S.length===0&&(S=[0]),O!==0){const se=e.isHorizontal()&&f?"marginLeft":e.getDirectionLabel("marginRight");y.filter((de,ye)=>!i.cssMode||i.loop?!0:ye!==y.length-1).forEach(de=>{de.style[se]=`${O}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let se=0;E.forEach(ye=>{se+=ye+(O||0)}),se-=O;const de=se>c?se-c:0;S=S.map(ye=>ye<=0?-L:ye>de?de+P:ye)}if(i.centerInsufficientSlides){let se=0;E.forEach(ye=>{se+=ye+(O||0)}),se-=O;const de=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(se+de<c){const ye=(c-se-de)/2;S.forEach((Ae,Re)=>{S[Re]=Ae-ye}),T.forEach((Ae,Re)=>{T[Re]=Ae+ye})}}if(Object.assign(e,{slides:y,snapGrid:S,slidesGrid:T,slidesSizesGrid:E}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){em(a,"--swiper-centered-offset-before",`${-S[0]}px`),em(a,"--swiper-centered-offset-after",`${e.size/2-E[E.length-1]/2}px`);const se=-e.snapGrid[0],de=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(ye=>ye+se),e.slidesGrid=e.slidesGrid.map(ye=>ye+de)}if(b!==g&&e.emit("slidesLengthChange"),S.length!==_&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),T.length!==R&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!p&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const se=`${i.containerModifierClass}backface-hidden`,de=e.el.classList.contains(se);b<=i.maxBackfaceHiddenSlides?de||e.el.classList.add(se):de&&e.el.classList.remove(se)}}function v_(e){const t=this,i=[],a=t.virtual&&t.params.virtual.enabled;let o=0,c;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const f=h=>a?t.slides[t.getSlideIndexByData(h)]:t.slides[h];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(h=>{i.push(h)});else for(c=0;c<Math.ceil(t.params.slidesPerView);c+=1){const h=t.activeIndex+c;if(h>t.slides.length&&!a)break;i.push(f(h))}else i.push(f(t.activeIndex));for(c=0;c<i.length;c+=1)if(typeof i[c]<"u"){const h=i[c].offsetHeight;o=h>o?h:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function y_(){const e=this,t=e.slides,i=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-i-e.cssOverflowAdjustment()}const i6=(e,t,i)=>{t&&!e.classList.contains(i)?e.classList.add(i):!t&&e.classList.contains(i)&&e.classList.remove(i)};function w_(e){e===void 0&&(e=this&&this.translate||0);const t=this,i=t.params,{slides:a,rtlTranslate:o,snapGrid:c}=t;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let f=-e;o&&(f=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let h=i.spaceBetween;typeof h=="string"&&h.indexOf("%")>=0?h=parseFloat(h.replace("%",""))/100*t.size:typeof h=="string"&&(h=parseFloat(h));for(let p=0;p<a.length;p+=1){const g=a[p];let y=g.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(y-=a[0].swiperSlideOffset);const b=(f+(i.centeredSlides?t.minTranslate():0)-y)/(g.swiperSlideSize+h),S=(f-c[0]+(i.centeredSlides?t.minTranslate():0)-y)/(g.swiperSlideSize+h),T=-(f-y),E=T+t.slidesSizesGrid[p],L=T>=0&&T<=t.size-t.slidesSizesGrid[p],P=T>=0&&T<t.size-1||E>1&&E<=t.size||T<=0&&E>=t.size;P&&(t.visibleSlides.push(g),t.visibleSlidesIndexes.push(p)),i6(g,P,i.slideVisibleClass),i6(g,L,i.slideFullyVisibleClass),g.progress=o?-b:b,g.originalProgress=o?-S:S}}function b_(e){const t=this;if(typeof e>"u"){const y=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*y||0}const i=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:c,isEnd:f,progressLoop:h}=t;const p=c,g=f;if(a===0)o=0,c=!0,f=!0;else{o=(e-t.minTranslate())/a;const y=Math.abs(e-t.minTranslate())<1,b=Math.abs(e-t.maxTranslate())<1;c=y||o<=0,f=b||o>=1,y&&(o=0),b&&(o=1)}if(i.loop){const y=t.getSlideIndexByData(0),b=t.getSlideIndexByData(t.slides.length-1),S=t.slidesGrid[y],T=t.slidesGrid[b],E=t.slidesGrid[t.slidesGrid.length-1],L=Math.abs(e);L>=S?h=(L-S)/E:h=(L+E-T)/E,h>1&&(h-=1)}Object.assign(t,{progress:o,progressLoop:h,isBeginning:c,isEnd:f}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),c&&!p&&t.emit("reachBeginning toEdge"),f&&!g&&t.emit("reachEnd toEdge"),(p&&!c||g&&!f)&&t.emit("fromEdge"),t.emit("progress",o)}const Mx=(e,t,i)=>{t&&!e.classList.contains(i)?e.classList.add(i):!t&&e.classList.contains(i)&&e.classList.remove(i)};function S_(){const e=this,{slides:t,params:i,slidesEl:a,activeIndex:o}=e,c=e.virtual&&i.virtual.enabled,f=e.grid&&i.grid&&i.grid.rows>1,h=b=>Or(a,`.${i.slideClass}${b}, swiper-slide${b}`)[0];let p,g,y;if(c)if(i.loop){let b=o-e.virtual.slidesBefore;b<0&&(b=e.virtual.slides.length+b),b>=e.virtual.slides.length&&(b-=e.virtual.slides.length),p=h(`[data-swiper-slide-index="${b}"]`)}else p=h(`[data-swiper-slide-index="${o}"]`);else f?(p=t.find(b=>b.column===o),y=t.find(b=>b.column===o+1),g=t.find(b=>b.column===o-1)):p=t[o];p&&(f||(y=l_(p,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!y&&(y=t[0]),g=o_(p,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!g===0&&(g=t[t.length-1]))),t.forEach(b=>{Mx(b,b===p,i.slideActiveClass),Mx(b,b===y,i.slideNextClass),Mx(b,b===g,i.slidePrevClass)}),e.emitSlidesClasses()}const Mm=(e,t)=>{if(!e||e.destroyed||!e.params)return;const i=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=t.closest(i());if(a){let o=a.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(a.shadowRoot?o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},jx=(e,t)=>{if(!e.slides[t])return;const i=e.slides[t].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},F3=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const i=e.slides.length;if(!i||!t||t<0)return;t=Math.min(t,i);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const f=o,h=[f-t];h.push(...Array.from({length:t}).map((p,g)=>f+a+g)),e.slides.forEach((p,g)=>{h.includes(p.column)&&jx(e,g)});return}const c=o+a-1;if(e.params.rewind||e.params.loop)for(let f=o-t;f<=c+t;f+=1){const h=(f%i+i)%i;(h<o||h>c)&&jx(e,h)}else for(let f=Math.max(o-t,0);f<=Math.min(c+t,i-1);f+=1)f!==o&&(f>c||f<o)&&jx(e,f)};function C_(e){const{slidesGrid:t,params:i}=e,a=e.rtlTranslate?e.translate:-e.translate;let o;for(let c=0;c<t.length;c+=1)typeof t[c+1]<"u"?a>=t[c]&&a<t[c+1]-(t[c+1]-t[c])/2?o=c:a>=t[c]&&a<t[c+1]&&(o=c+1):a>=t[c]&&(o=c);return i.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function T_(e){const t=this,i=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:o,activeIndex:c,realIndex:f,snapIndex:h}=t;let p=e,g;const y=T=>{let E=T-t.virtual.slidesBefore;return E<0&&(E=t.virtual.slides.length+E),E>=t.virtual.slides.length&&(E-=t.virtual.slides.length),E};if(typeof p>"u"&&(p=C_(t)),a.indexOf(i)>=0)g=a.indexOf(i);else{const T=Math.min(o.slidesPerGroupSkip,p);g=T+Math.floor((p-T)/o.slidesPerGroup)}if(g>=a.length&&(g=a.length-1),p===c&&!t.params.loop){g!==h&&(t.snapIndex=g,t.emit("snapIndexChange"));return}if(p===c&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=y(p);return}const b=t.grid&&o.grid&&o.grid.rows>1;let S;if(t.virtual&&o.virtual.enabled&&o.loop)S=y(p);else if(b){const T=t.slides.find(L=>L.column===p);let E=parseInt(T.getAttribute("data-swiper-slide-index"),10);Number.isNaN(E)&&(E=Math.max(t.slides.indexOf(T),0)),S=Math.floor(E/o.grid.rows)}else if(t.slides[p]){const T=t.slides[p].getAttribute("data-swiper-slide-index");T?S=parseInt(T,10):S=p}else S=p;Object.assign(t,{previousSnapIndex:h,snapIndex:g,previousRealIndex:f,realIndex:S,previousIndex:c,activeIndex:p}),t.initialized&&F3(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(f!==S&&t.emit("realIndexChange"),t.emit("slideChange"))}function E_(e,t){const i=this,a=i.params;let o=e.closest(`.${a.slideClass}, swiper-slide`);!o&&i.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(h=>{!o&&h.matches&&h.matches(`.${a.slideClass}, swiper-slide`)&&(o=h)});let c=!1,f;if(o){for(let h=0;h<i.slides.length;h+=1)if(i.slides[h]===o){c=!0,f=h;break}}if(o&&c)i.clickedSlide=o,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=f;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}a.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var A_={updateSize:g_,updateSlides:x_,updateAutoHeight:v_,updateSlidesOffset:y_,updateSlidesProgress:w_,updateProgress:b_,updateSlidesClasses:S_,updateActiveIndex:T_,updateClickedSlide:E_};function M_(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:i,rtlTranslate:a,translate:o,wrapperEl:c}=t;if(i.virtualTranslate)return a?-o:o;if(i.cssMode)return o;let f=i_(c,e);return f+=t.cssOverflowAdjustment(),a&&(f=-f),f||0}function j_(e,t){const i=this,{rtlTranslate:a,params:o,wrapperEl:c,progress:f}=i;let h=0,p=0;const g=0;i.isHorizontal()?h=a?-e:e:p=e,o.roundLengths&&(h=Math.floor(h),p=Math.floor(p)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?h:p,o.cssMode?c[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-h:-p:o.virtualTranslate||(i.isHorizontal()?h-=i.cssOverflowAdjustment():p-=i.cssOverflowAdjustment(),c.style.transform=`translate3d(${h}px, ${p}px, ${g}px)`);let y;const b=i.maxTranslate()-i.minTranslate();b===0?y=0:y=(e-i.minTranslate())/b,y!==f&&i.updateProgress(e),i.emit("setTranslate",i.translate,t)}function R_(){return-this.snapGrid[0]}function O_(){return-this.snapGrid[this.snapGrid.length-1]}function L_(e,t,i,a,o){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),i===void 0&&(i=!0),a===void 0&&(a=!0);const c=this,{params:f,wrapperEl:h}=c;if(c.animating&&f.preventInteractionOnTransition)return!1;const p=c.minTranslate(),g=c.maxTranslate();let y;if(a&&e>p?y=p:a&&e<g?y=g:y=e,c.updateProgress(y),f.cssMode){const b=c.isHorizontal();if(t===0)h[b?"scrollLeft":"scrollTop"]=-y;else{if(!c.support.smoothScroll)return Cb({swiper:c,targetPosition:-y,side:b?"left":"top"}),!0;h.scrollTo({[b?"left":"top"]:-y,behavior:"smooth"})}return!0}return t===0?(c.setTransition(0),c.setTranslate(y),i&&(c.emit("beforeTransitionStart",t,o),c.emit("transitionEnd"))):(c.setTransition(t),c.setTranslate(y),i&&(c.emit("beforeTransitionStart",t,o),c.emit("transitionStart")),c.animating||(c.animating=!0,c.onTranslateToWrapperTransitionEnd||(c.onTranslateToWrapperTransitionEnd=function(S){!c||c.destroyed||S.target===this&&(c.wrapperEl.removeEventListener("transitionend",c.onTranslateToWrapperTransitionEnd),c.onTranslateToWrapperTransitionEnd=null,delete c.onTranslateToWrapperTransitionEnd,c.animating=!1,i&&c.emit("transitionEnd"))}),c.wrapperEl.addEventListener("transitionend",c.onTranslateToWrapperTransitionEnd))),!0}var __={getTranslate:M_,setTranslate:j_,minTranslate:R_,maxTranslate:O_,translateTo:L_};function k_(e,t){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${e}ms`,i.wrapperEl.style.transitionDelay=e===0?"0ms":""),i.emit("setTransition",e,t)}function Rb(e){let{swiper:t,runCallbacks:i,direction:a,step:o}=e;const{activeIndex:c,previousIndex:f}=t;let h=a;h||(c>f?h="next":c<f?h="prev":h="reset"),t.emit(`transition${o}`),i&&h==="reset"?t.emit(`slideResetTransition${o}`):i&&c!==f&&(t.emit(`slideChangeTransition${o}`),h==="next"?t.emit(`slideNextTransition${o}`):t.emit(`slidePrevTransition${o}`))}function D_(e,t){e===void 0&&(e=!0);const i=this,{params:a}=i;a.cssMode||(a.autoHeight&&i.updateAutoHeight(),Rb({swiper:i,runCallbacks:e,direction:t,step:"Start"}))}function V_(e,t){e===void 0&&(e=!0);const i=this,{params:a}=i;i.animating=!1,!a.cssMode&&(i.setTransition(0),Rb({swiper:i,runCallbacks:e,direction:t,step:"End"}))}var z_={setTransition:k_,transitionStart:D_,transitionEnd:V_};function H_(e,t,i,a,o){e===void 0&&(e=0),i===void 0&&(i=!0),typeof e=="string"&&(e=parseInt(e,10));const c=this;let f=e;f<0&&(f=0);const{params:h,snapGrid:p,slidesGrid:g,previousIndex:y,activeIndex:b,rtlTranslate:S,wrapperEl:T,enabled:E}=c;if(!E&&!a&&!o||c.destroyed||c.animating&&h.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=c.params.speed);const L=Math.min(c.params.slidesPerGroupSkip,f);let P=L+Math.floor((f-L)/c.params.slidesPerGroup);P>=p.length&&(P=p.length-1);const _=-p[P];if(h.normalizeSlideIndex)for(let G=0;G<g.length;G+=1){const Q=-Math.floor(_*100),ie=Math.floor(g[G]*100),se=Math.floor(g[G+1]*100);typeof g[G+1]<"u"?Q>=ie&&Q<se-(se-ie)/2?f=G:Q>=ie&&Q<se&&(f=G+1):Q>=ie&&(f=G)}if(c.initialized&&f!==b&&(!c.allowSlideNext&&(S?_>c.translate&&_>c.minTranslate():_<c.translate&&_<c.minTranslate())||!c.allowSlidePrev&&_>c.translate&&_>c.maxTranslate()&&(b||0)!==f))return!1;f!==(y||0)&&i&&c.emit("beforeSlideChangeStart"),c.updateProgress(_);let R;f>b?R="next":f<b?R="prev":R="reset";const O=c.virtual&&c.params.virtual.enabled;if(!(O&&o)&&(S&&-_===c.translate||!S&&_===c.translate))return c.updateActiveIndex(f),h.autoHeight&&c.updateAutoHeight(),c.updateSlidesClasses(),h.effect!=="slide"&&c.setTranslate(_),R!=="reset"&&(c.transitionStart(i,R),c.transitionEnd(i,R)),!1;if(h.cssMode){const G=c.isHorizontal(),Q=S?_:-_;if(t===0)O&&(c.wrapperEl.style.scrollSnapType="none",c._immediateVirtual=!0),O&&!c._cssModeVirtualInitialSet&&c.params.initialSlide>0?(c._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{T[G?"scrollLeft":"scrollTop"]=Q})):T[G?"scrollLeft":"scrollTop"]=Q,O&&requestAnimationFrame(()=>{c.wrapperEl.style.scrollSnapType="",c._immediateVirtual=!1});else{if(!c.support.smoothScroll)return Cb({swiper:c,targetPosition:Q,side:G?"left":"top"}),!0;T.scrollTo({[G?"left":"top"]:Q,behavior:"smooth"})}return!0}const Y=jb().isSafari;return O&&!o&&Y&&c.isElement&&c.virtual.update(!1,!1,f),c.setTransition(t),c.setTranslate(_),c.updateActiveIndex(f),c.updateSlidesClasses(),c.emit("beforeTransitionStart",t,a),c.transitionStart(i,R),t===0?c.transitionEnd(i,R):c.animating||(c.animating=!0,c.onSlideToWrapperTransitionEnd||(c.onSlideToWrapperTransitionEnd=function(Q){!c||c.destroyed||Q.target===this&&(c.wrapperEl.removeEventListener("transitionend",c.onSlideToWrapperTransitionEnd),c.onSlideToWrapperTransitionEnd=null,delete c.onSlideToWrapperTransitionEnd,c.transitionEnd(i,R))}),c.wrapperEl.addEventListener("transitionend",c.onSlideToWrapperTransitionEnd)),!0}function P_(e,t,i,a){e===void 0&&(e=0),i===void 0&&(i=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const c=o.grid&&o.params.grid&&o.params.grid.rows>1;let f=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)f=f+o.virtual.slidesBefore;else{let h;if(c){const S=f*o.params.grid.rows;h=o.slides.find(T=>T.getAttribute("data-swiper-slide-index")*1===S).column}else h=o.getSlideIndexByData(f);const p=c?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:g}=o.params;let y=o.params.slidesPerView;y==="auto"?y=o.slidesPerViewDynamic():(y=Math.ceil(parseFloat(o.params.slidesPerView,10)),g&&y%2===0&&(y=y+1));let b=p-h<y;if(g&&(b=b||h<Math.ceil(y/2)),a&&g&&o.params.slidesPerView!=="auto"&&!c&&(b=!1),b){const S=g?h<o.activeIndex?"prev":"next":h-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:S,slideTo:!0,activeSlideIndex:S==="next"?h+1:h-p+1,slideRealIndex:S==="next"?o.realIndex:void 0})}if(c){const S=f*o.params.grid.rows;f=o.slides.find(T=>T.getAttribute("data-swiper-slide-index")*1===S).column}else f=o.getSlideIndexByData(f)}return requestAnimationFrame(()=>{o.slideTo(f,t,i,a)}),o}function N_(e,t,i){t===void 0&&(t=!0);const a=this,{enabled:o,params:c,animating:f}=a;if(!o||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let h=c.slidesPerGroup;c.slidesPerView==="auto"&&c.slidesPerGroup===1&&c.slidesPerGroupAuto&&(h=Math.max(a.slidesPerViewDynamic("current",!0),1));const p=a.activeIndex<c.slidesPerGroupSkip?1:h,g=a.virtual&&c.virtual.enabled;if(c.loop){if(f&&!g&&c.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&c.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+p,e,t,i)}),!0}return c.rewind&&a.isEnd?a.slideTo(0,e,t,i):a.slideTo(a.activeIndex+p,e,t,i)}function B_(e,t,i){t===void 0&&(t=!0);const a=this,{params:o,snapGrid:c,slidesGrid:f,rtlTranslate:h,enabled:p,animating:g}=a;if(!p||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const y=a.virtual&&o.virtual.enabled;if(o.loop){if(g&&!y&&o.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const b=h?a.translate:-a.translate;function S(R){return R<0?-Math.floor(Math.abs(R)):Math.floor(R)}const T=S(b),E=c.map(R=>S(R)),L=o.freeMode&&o.freeMode.enabled;let P=c[E.indexOf(T)-1];if(typeof P>"u"&&(o.cssMode||L)){let R;c.forEach((O,N)=>{T>=O&&(R=N)}),typeof R<"u"&&(P=L?c[R]:c[R>0?R-1:R])}let _=0;if(typeof P<"u"&&(_=f.indexOf(P),_<0&&(_=a.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(_=_-a.slidesPerViewDynamic("previous",!0)+1,_=Math.max(_,0))),o.rewind&&a.isBeginning){const R=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(R,e,t,i)}else if(o.loop&&a.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{a.slideTo(_,e,t,i)}),!0;return a.slideTo(_,e,t,i)}function I_(e,t,i){t===void 0&&(t=!0);const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,i)}function $_(e,t,i,a){t===void 0&&(t=!0),a===void 0&&(a=.5);const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let c=o.activeIndex;const f=Math.min(o.params.slidesPerGroupSkip,c),h=f+Math.floor((c-f)/o.params.slidesPerGroup),p=o.rtlTranslate?o.translate:-o.translate;if(p>=o.snapGrid[h]){const g=o.snapGrid[h],y=o.snapGrid[h+1];p-g>(y-g)*a&&(c+=o.params.slidesPerGroup)}else{const g=o.snapGrid[h-1],y=o.snapGrid[h];p-g<=(y-g)*a&&(c-=o.params.slidesPerGroup)}return c=Math.max(c,0),c=Math.min(c,o.slidesGrid.length-1),o.slideTo(c,e,t,i)}function U_(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:i}=e,a=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(e.clickedIndex),c;const f=e.isElement?"swiper-slide":`.${t.slideClass}`,h=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;c=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(c):o>(h?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),o=e.getSlideIndex(Or(i,`${f}[data-swiper-slide-index="${c}"]`)[0]),Sb(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var G_={slideTo:H_,slideToLoop:P_,slideNext:N_,slidePrev:B_,slideReset:I_,slideToClosest:$_,slideToClickedSlide:U_};function F_(e,t){const i=this,{params:a,slidesEl:o}=i;if(!a.loop||i.virtual&&i.params.virtual.enabled)return;const c=()=>{Or(o,`.${a.slideClass}, swiper-slide`).forEach((T,E)=>{T.setAttribute("data-swiper-slide-index",E)})},f=()=>{const S=Or(o,`.${a.slideBlankClass}`);S.forEach(T=>{T.remove()}),S.length>0&&(i.recalcSlides(),i.updateSlides())},h=i.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||h)&&f();const p=a.slidesPerGroup*(h?a.grid.rows:1),g=i.slides.length%p!==0,y=h&&i.slides.length%a.grid.rows!==0,b=S=>{for(let T=0;T<S;T+=1){const E=i.isElement?Gm("swiper-slide",[a.slideBlankClass]):Gm("div",[a.slideClass,a.slideBlankClass]);i.slidesEl.append(E)}};if(g){if(a.loopAddBlankSlides){const S=p-i.slides.length%p;b(S),i.recalcSlides(),i.updateSlides()}else Um("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");c()}else if(y){if(a.loopAddBlankSlides){const S=a.grid.rows-i.slides.length%a.grid.rows;b(S),i.recalcSlides(),i.updateSlides()}else Um("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");c()}else c();i.loopFix({slideRealIndex:e,direction:a.centeredSlides?void 0:"next",initial:t})}function q_(e){let{slideRealIndex:t,slideTo:i=!0,direction:a,setTranslate:o,activeSlideIndex:c,initial:f,byController:h,byMousewheel:p}=e===void 0?{}:e;const g=this;if(!g.params.loop)return;g.emit("beforeLoopFix");const{slides:y,allowSlidePrev:b,allowSlideNext:S,slidesEl:T,params:E}=g,{centeredSlides:L,initialSlide:P}=E;if(g.allowSlidePrev=!0,g.allowSlideNext=!0,g.virtual&&E.virtual.enabled){i&&(!E.centeredSlides&&g.snapIndex===0?g.slideTo(g.virtual.slides.length,0,!1,!0):E.centeredSlides&&g.snapIndex<E.slidesPerView?g.slideTo(g.virtual.slides.length+g.snapIndex,0,!1,!0):g.snapIndex===g.snapGrid.length-1&&g.slideTo(g.virtual.slidesBefore,0,!1,!0)),g.allowSlidePrev=b,g.allowSlideNext=S,g.emit("loopFix");return}let _=E.slidesPerView;_==="auto"?_=g.slidesPerViewDynamic():(_=Math.ceil(parseFloat(E.slidesPerView,10)),L&&_%2===0&&(_=_+1));const R=E.slidesPerGroupAuto?_:E.slidesPerGroup;let O=L?Math.max(R,Math.ceil(_/2)):R;O%R!==0&&(O+=R-O%R),O+=E.loopAdditionalSlides,g.loopedSlides=O;const N=g.grid&&E.grid&&E.grid.rows>1;y.length<_+O||g.params.effect==="cards"&&y.length<_+O*2?Um("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):N&&E.grid.fill==="row"&&Um("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const V=[],Y=[],G=N?Math.ceil(y.length/E.grid.rows):y.length,Q=f&&G-P<_&&!L;let ie=Q?P:g.activeIndex;typeof c>"u"?c=g.getSlideIndex(y.find(X=>X.classList.contains(E.slideActiveClass))):ie=c;const se=a==="next"||!a,de=a==="prev"||!a;let ye=0,Ae=0;const Ee=(N?y[c].column:c)+(L&&typeof o>"u"?-_/2+.5:0);if(Ee<O){ye=Math.max(O-Ee,R);for(let X=0;X<O-Ee;X+=1){const le=X-Math.floor(X/G)*G;if(N){const ue=G-le-1;for(let xe=y.length-1;xe>=0;xe-=1)y[xe].column===ue&&V.push(xe)}else V.push(G-le-1)}}else if(Ee+_>G-O){Ae=Math.max(Ee-(G-O*2),R),Q&&(Ae=Math.max(Ae,_-G+P+1));for(let X=0;X<Ae;X+=1){const le=X-Math.floor(X/G)*G;N?y.forEach((ue,xe)=>{ue.column===le&&Y.push(xe)}):Y.push(le)}}if(g.__preventObserver__=!0,requestAnimationFrame(()=>{g.__preventObserver__=!1}),g.params.effect==="cards"&&y.length<_+O*2&&(Y.includes(c)&&Y.splice(Y.indexOf(c),1),V.includes(c)&&V.splice(V.indexOf(c),1)),de&&V.forEach(X=>{y[X].swiperLoopMoveDOM=!0,T.prepend(y[X]),y[X].swiperLoopMoveDOM=!1}),se&&Y.forEach(X=>{y[X].swiperLoopMoveDOM=!0,T.append(y[X]),y[X].swiperLoopMoveDOM=!1}),g.recalcSlides(),E.slidesPerView==="auto"?g.updateSlides():N&&(V.length>0&&de||Y.length>0&&se)&&g.slides.forEach((X,le)=>{g.grid.updateSlide(le,X,g.slides)}),E.watchSlidesProgress&&g.updateSlidesOffset(),i){if(V.length>0&&de){if(typeof t>"u"){const X=g.slidesGrid[ie],ue=g.slidesGrid[ie+ye]-X;p?g.setTranslate(g.translate-ue):(g.slideTo(ie+Math.ceil(ye),0,!1,!0),o&&(g.touchEventsData.startTranslate=g.touchEventsData.startTranslate-ue,g.touchEventsData.currentTranslate=g.touchEventsData.currentTranslate-ue))}else if(o){const X=N?V.length/E.grid.rows:V.length;g.slideTo(g.activeIndex+X,0,!1,!0),g.touchEventsData.currentTranslate=g.translate}}else if(Y.length>0&&se)if(typeof t>"u"){const X=g.slidesGrid[ie],ue=g.slidesGrid[ie-Ae]-X;p?g.setTranslate(g.translate-ue):(g.slideTo(ie-Ae,0,!1,!0),o&&(g.touchEventsData.startTranslate=g.touchEventsData.startTranslate-ue,g.touchEventsData.currentTranslate=g.touchEventsData.currentTranslate-ue))}else{const X=N?Y.length/E.grid.rows:Y.length;g.slideTo(g.activeIndex-X,0,!1,!0)}}if(g.allowSlidePrev=b,g.allowSlideNext=S,g.controller&&g.controller.control&&!h){const X={slideRealIndex:t,direction:a,setTranslate:o,activeSlideIndex:c,byController:!0};Array.isArray(g.controller.control)?g.controller.control.forEach(le=>{!le.destroyed&&le.params.loop&&le.loopFix({...X,slideTo:le.params.slidesPerView===E.slidesPerView?i:!1})}):g.controller.control instanceof g.constructor&&g.controller.control.params.loop&&g.controller.control.loopFix({...X,slideTo:g.controller.control.params.slidesPerView===E.slidesPerView?i:!1})}g.emit("loopFix")}function Y_(){const e=this,{params:t,slidesEl:i}=e;if(!t.loop||!i||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(o=>{const c=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;a[c]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),a.forEach(o=>{i.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var W_={loopCreate:F_,loopFix:q_,loopDestroy:Y_};function Z_(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const i=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function X_(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var K_={setGrabCursor:Z_,unsetGrabCursor:X_};function Q_(e,t){t===void 0&&(t=this);function i(a){if(!a||a===zr()||a===wi())return null;a.assignedSlot&&(a=a.assignedSlot);const o=a.closest(e);return!o&&!a.getRootNode?null:o||i(a.getRootNode().host)}return i(t)}function a6(e,t,i){const a=wi(),{params:o}=e,c=o.edgeSwipeDetection,f=o.edgeSwipeThreshold;return c&&(i<=f||i>=a.innerWidth-f)?c==="prevent"?(t.preventDefault(),!0):!1:!0}function J_(e){const t=this,i=zr();let a=e;a.originalEvent&&(a=a.originalEvent);const o=t.touchEventsData;if(a.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==a.pointerId)return;o.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(o.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){a6(t,a,a.targetTouches[0].pageX);return}const{params:c,touches:f,enabled:h}=t;if(!h||!c.simulateTouch&&a.pointerType==="mouse"||t.animating&&c.preventInteractionOnTransition)return;!t.animating&&c.cssMode&&c.loop&&t.loopFix();let p=a.target;if(c.touchEventsTarget==="wrapper"&&!s_(p,t.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||o.isTouched&&o.isMoved)return;const g=!!c.noSwipingClass&&c.noSwipingClass!=="",y=a.composedPath?a.composedPath():a.path;g&&a.target&&a.target.shadowRoot&&y&&(p=y[0]);const b=c.noSwipingSelector?c.noSwipingSelector:`.${c.noSwipingClass}`,S=!!(a.target&&a.target.shadowRoot);if(c.noSwiping&&(S?Q_(b,p):p.closest(b))){t.allowClick=!0;return}if(c.swipeHandler&&!p.closest(c.swipeHandler))return;f.currentX=a.pageX,f.currentY=a.pageY;const T=f.currentX,E=f.currentY;if(!a6(t,a,T))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),f.startX=T,f.startY=E,o.touchStartTime=$m(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,c.threshold>0&&(o.allowThresholdMove=!1);let L=!0;p.matches(o.focusableElements)&&(L=!1,p.nodeName==="SELECT"&&(o.isTouched=!1)),i.activeElement&&i.activeElement.matches(o.focusableElements)&&i.activeElement!==p&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!p.matches(o.focusableElements))&&i.activeElement.blur();const P=L&&t.allowTouchMove&&c.touchStartPreventDefault;(c.touchStartForcePreventDefault||P)&&!p.isContentEditable&&a.preventDefault(),c.freeMode&&c.freeMode.enabled&&t.freeMode&&t.animating&&!c.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function ek(e){const t=zr(),i=this,a=i.touchEventsData,{params:o,touches:c,rtlTranslate:f,enabled:h}=i;if(!h||!o.simulateTouch&&e.pointerType==="mouse")return;let p=e;if(p.originalEvent&&(p=p.originalEvent),p.type==="pointermove"&&(a.touchId!==null||p.pointerId!==a.pointerId))return;let g;if(p.type==="touchmove"){if(g=[...p.changedTouches].find(V=>V.identifier===a.touchId),!g||g.identifier!==a.touchId)return}else g=p;if(!a.isTouched){a.startMoving&&a.isScrolling&&i.emit("touchMoveOpposite",p);return}const y=g.pageX,b=g.pageY;if(p.preventedByNestedSwiper){c.startX=y,c.startY=b;return}if(!i.allowTouchMove){p.target.matches(a.focusableElements)||(i.allowClick=!1),a.isTouched&&(Object.assign(c,{startX:y,startY:b,currentX:y,currentY:b}),a.touchStartTime=$m());return}if(o.touchReleaseOnEdges&&!o.loop)if(i.isVertical()){if(b<c.startY&&i.translate<=i.maxTranslate()||b>c.startY&&i.translate>=i.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(f&&(y>c.startX&&-i.translate<=i.maxTranslate()||y<c.startX&&-i.translate>=i.minTranslate()))return;if(!f&&(y<c.startX&&i.translate<=i.maxTranslate()||y>c.startX&&i.translate>=i.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==p.target&&p.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&p.target===t.activeElement&&p.target.matches(a.focusableElements)){a.isMoved=!0,i.allowClick=!1;return}a.allowTouchCallbacks&&i.emit("touchMove",p),c.previousX=c.currentX,c.previousY=c.currentY,c.currentX=y,c.currentY=b;const S=c.currentX-c.startX,T=c.currentY-c.startY;if(i.params.threshold&&Math.sqrt(S**2+T**2)<i.params.threshold)return;if(typeof a.isScrolling>"u"){let V;i.isHorizontal()&&c.currentY===c.startY||i.isVertical()&&c.currentX===c.startX?a.isScrolling=!1:S*S+T*T>=25&&(V=Math.atan2(Math.abs(T),Math.abs(S))*180/Math.PI,a.isScrolling=i.isHorizontal()?V>o.touchAngle:90-V>o.touchAngle)}if(a.isScrolling&&i.emit("touchMoveOpposite",p),typeof a.startMoving>"u"&&(c.currentX!==c.startX||c.currentY!==c.startY)&&(a.startMoving=!0),a.isScrolling||p.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;i.allowClick=!1,!o.cssMode&&p.cancelable&&p.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&p.stopPropagation();let E=i.isHorizontal()?S:T,L=i.isHorizontal()?c.currentX-c.previousX:c.currentY-c.previousY;o.oneWayMovement&&(E=Math.abs(E)*(f?1:-1),L=Math.abs(L)*(f?1:-1)),c.diff=E,E*=o.touchRatio,f&&(E=-E,L=-L);const P=i.touchesDirection;i.swipeDirection=E>0?"prev":"next",i.touchesDirection=L>0?"prev":"next";const _=i.params.loop&&!o.cssMode,R=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!a.isMoved){if(_&&R&&i.loopFix({direction:i.swipeDirection}),a.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const V=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(V)}a.allowMomentumBounce=!1,o.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",p)}if(new Date().getTime(),o._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&P!==i.touchesDirection&&_&&R&&Math.abs(E)>=1){Object.assign(c,{startX:y,startY:b,currentX:y,currentY:b,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}i.emit("sliderMove",p),a.isMoved=!0,a.currentTranslate=E+a.startTranslate;let O=!0,N=o.resistanceRatio;if(o.touchReleaseOnEdges&&(N=0),E>0?(_&&R&&a.allowThresholdMove&&a.currentTranslate>(o.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>i.minTranslate()&&(O=!1,o.resistance&&(a.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+a.startTranslate+E)**N))):E<0&&(_&&R&&a.allowThresholdMove&&a.currentTranslate<(o.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(o.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),a.currentTranslate<i.maxTranslate()&&(O=!1,o.resistance&&(a.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-a.startTranslate-E)**N))),O&&(p.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(a.currentTranslate=a.startTranslate),o.threshold>0)if(Math.abs(E)>o.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,c.startX=c.currentX,c.startY=c.currentY,a.currentTranslate=a.startTranslate,c.diff=i.isHorizontal()?c.currentX-c.startX:c.currentY-c.startY;return}}else{a.currentTranslate=a.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&i.freeMode||o.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(a.currentTranslate),i.setTranslate(a.currentTranslate))}function tk(e){const t=this,i=t.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let o;if(a.type==="touchend"||a.type==="touchcancel"){if(o=[...a.changedTouches].find(V=>V.identifier===i.touchId),!o||o.identifier!==i.touchId)return}else{if(i.touchId!==null||a.pointerId!==i.pointerId)return;o=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return;i.pointerId=null,i.touchId=null;const{params:f,touches:h,rtlTranslate:p,slidesGrid:g,enabled:y}=t;if(!y||!f.simulateTouch&&a.pointerType==="mouse")return;if(i.allowTouchCallbacks&&t.emit("touchEnd",a),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&f.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}f.grabCursor&&i.isMoved&&i.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const b=$m(),S=b-i.touchStartTime;if(t.allowClick){const V=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(V&&V[0]||a.target,V),t.emit("tap click",a),S<300&&b-i.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(i.lastClickTime=$m(),Sb(()=>{t.destroyed||(t.allowClick=!0)}),!i.isTouched||!i.isMoved||!t.swipeDirection||h.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let T;if(f.followFinger?T=p?t.translate:-t.translate:T=-i.currentTranslate,f.cssMode)return;if(f.freeMode&&f.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:T});return}const E=T>=-t.maxTranslate()&&!t.params.loop;let L=0,P=t.slidesSizesGrid[0];for(let V=0;V<g.length;V+=V<f.slidesPerGroupSkip?1:f.slidesPerGroup){const Y=V<f.slidesPerGroupSkip-1?1:f.slidesPerGroup;typeof g[V+Y]<"u"?(E||T>=g[V]&&T<g[V+Y])&&(L=V,P=g[V+Y]-g[V]):(E||T>=g[V])&&(L=V,P=g[g.length-1]-g[g.length-2])}let _=null,R=null;f.rewind&&(t.isBeginning?R=f.virtual&&f.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(_=0));const O=(T-g[L])/P,N=L<f.slidesPerGroupSkip-1?1:f.slidesPerGroup;if(S>f.longSwipesMs){if(!f.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(O>=f.longSwipesRatio?t.slideTo(f.rewind&&t.isEnd?_:L+N):t.slideTo(L)),t.swipeDirection==="prev"&&(O>1-f.longSwipesRatio?t.slideTo(L+N):R!==null&&O<0&&Math.abs(O)>f.longSwipesRatio?t.slideTo(R):t.slideTo(L))}else{if(!f.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(L+N):t.slideTo(L):(t.swipeDirection==="next"&&t.slideTo(_!==null?_:L+N),t.swipeDirection==="prev"&&t.slideTo(R!==null?R:L))}}function r6(){const e=this,{params:t,el:i}=e;if(i&&i.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:o,snapGrid:c}=e,f=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const h=f&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!h?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!f?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=a,e.params.watchOverflow&&c!==e.snapGrid&&e.checkOverflow()}function nk(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function ik(){const e=this,{wrapperEl:t,rtlTranslate:i,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const c=e.maxTranslate()-e.minTranslate();c===0?o=0:o=(e.translate-e.minTranslate())/c,o!==e.progress&&e.updateProgress(i?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ak(e){const t=this;Mm(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function rk(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Ob=(e,t)=>{const i=zr(),{params:a,el:o,wrapperEl:c,device:f}=e,h=!!a.nested,p=t==="on"?"addEventListener":"removeEventListener",g=t;!o||typeof o=="string"||(i[p]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:h}),o[p]("touchstart",e.onTouchStart,{passive:!1}),o[p]("pointerdown",e.onTouchStart,{passive:!1}),i[p]("touchmove",e.onTouchMove,{passive:!1,capture:h}),i[p]("pointermove",e.onTouchMove,{passive:!1,capture:h}),i[p]("touchend",e.onTouchEnd,{passive:!0}),i[p]("pointerup",e.onTouchEnd,{passive:!0}),i[p]("pointercancel",e.onTouchEnd,{passive:!0}),i[p]("touchcancel",e.onTouchEnd,{passive:!0}),i[p]("pointerout",e.onTouchEnd,{passive:!0}),i[p]("pointerleave",e.onTouchEnd,{passive:!0}),i[p]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&o[p]("click",e.onClick,!0),a.cssMode&&c[p]("scroll",e.onScroll),a.updateOnWindowResize?e[g](f.ios||f.android?"resize orientationchange observerUpdate":"resize observerUpdate",r6,!0):e[g]("observerUpdate",r6,!0),o[p]("load",e.onLoad,{capture:!0}))};function sk(){const e=this,{params:t}=e;e.onTouchStart=J_.bind(e),e.onTouchMove=ek.bind(e),e.onTouchEnd=tk.bind(e),e.onDocumentTouchStart=rk.bind(e),t.cssMode&&(e.onScroll=ik.bind(e)),e.onClick=nk.bind(e),e.onLoad=ak.bind(e),Ob(e,"on")}function ok(){Ob(this,"off")}var lk={attachEvents:sk,detachEvents:ok};const s6=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function ck(){const e=this,{realIndex:t,initialized:i,params:a,el:o}=e,c=a.breakpoints;if(!c||c&&Object.keys(c).length===0)return;const f=zr(),h=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",p=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:f.querySelector(a.breakpointsBase),g=e.getBreakpoint(c,h,p);if(!g||e.currentBreakpoint===g)return;const b=(g in c?c[g]:void 0)||e.originalParams,S=s6(e,a),T=s6(e,b),E=e.params.grabCursor,L=b.grabCursor,P=a.enabled;S&&!T?(o.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!S&&T&&(o.classList.add(`${a.containerModifierClass}grid`),(b.grid.fill&&b.grid.fill==="column"||!b.grid.fill&&a.grid.fill==="column")&&o.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),E&&!L?e.unsetGrabCursor():!E&&L&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(Y=>{if(typeof b[Y]>"u")return;const G=a[Y]&&a[Y].enabled,Q=b[Y]&&b[Y].enabled;G&&!Q&&e[Y].disable(),!G&&Q&&e[Y].enable()});const _=b.direction&&b.direction!==a.direction,R=a.loop&&(b.slidesPerView!==a.slidesPerView||_),O=a.loop;_&&i&&e.changeDirection(),ta(e.params,b);const N=e.params.enabled,V=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),P&&!N?e.disable():!P&&N&&e.enable(),e.currentBreakpoint=g,e.emit("_beforeBreakpoint",b),i&&(R?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!O&&V?(e.loopCreate(t),e.updateSlides()):O&&!V&&e.loopDestroy()),e.emit("breakpoint",b)}function uk(e,t,i){if(t===void 0&&(t="window"),!e||t==="container"&&!i)return;let a=!1;const o=wi(),c=t==="window"?o.innerHeight:i.clientHeight,f=Object.keys(e).map(h=>{if(typeof h=="string"&&h.indexOf("@")===0){const p=parseFloat(h.substr(1));return{value:c*p,point:h}}return{value:h,point:h}});f.sort((h,p)=>parseInt(h.value,10)-parseInt(p.value,10));for(let h=0;h<f.length;h+=1){const{point:p,value:g}=f[h];t==="window"?o.matchMedia(`(min-width: ${g}px)`).matches&&(a=p):g<=i.clientWidth&&(a=p)}return a||"max"}var dk={setBreakpoint:ck,getBreakpoint:uk};function fk(e,t){const i=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(o=>{a[o]&&i.push(t+o)}):typeof a=="string"&&i.push(t+a)}),i}function hk(){const e=this,{classNames:t,params:i,rtl:a,el:o,device:c}=e,f=fk(["initialized",i.direction,{"free-mode":e.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:a},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:c.android},{ios:c.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);t.push(...f),o.classList.add(...t),e.emitContainerClasses()}function pk(){const e=this,{el:t,classNames:i}=e;!t||typeof t=="string"||(t.classList.remove(...i),e.emitContainerClasses())}var mk={addClasses:hk,removeClasses:pk};function gk(){const e=this,{isLocked:t,params:i}=e,{slidesOffsetBefore:a}=i;if(a){const o=e.slides.length-1,c=e.slidesGrid[o]+e.slidesSizesGrid[o]+a*2;e.isLocked=e.size>c}else e.isLocked=e.snapGrid.length===1;i.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),i.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var xk={checkOverflow:gk},q3={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function vk(e,t){return function(a){a===void 0&&(a={});const o=Object.keys(a)[0],c=a[o];if(typeof c!="object"||c===null){ta(t,a);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in c)){ta(t,a);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),ta(t,a)}}const Rx={eventsEmitter:m_,update:A_,translate:__,transition:z_,slide:G_,loop:W_,grabCursor:K_,events:lk,breakpoints:dk,checkOverflow:xk,classes:mk},Ox={};let oy=class ps{constructor(){let t,i;for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?i=o[0]:[t,i]=o,i||(i={}),i=ta({},i),t&&!i.el&&(i.el=t);const f=zr();if(i.el&&typeof i.el=="string"&&f.querySelectorAll(i.el).length>1){const y=[];return f.querySelectorAll(i.el).forEach(b=>{const S=ta({},i,{el:b});y.push(new ps(S))}),y}const h=this;h.__swiper__=!0,h.support=Ab(),h.device=Mb({userAgent:i.userAgent}),h.browser=jb(),h.eventsListeners={},h.eventsAnyListeners=[],h.modules=[...h.__modules__],i.modules&&Array.isArray(i.modules)&&h.modules.push(...i.modules);const p={};h.modules.forEach(y=>{y({params:i,swiper:h,extendParams:vk(i,p),on:h.on.bind(h),once:h.once.bind(h),off:h.off.bind(h),emit:h.emit.bind(h)})});const g=ta({},q3,p);return h.params=ta({},g,Ox,i),h.originalParams=ta({},h.params),h.passedParams=ta({},i),h.params&&h.params.on&&Object.keys(h.params.on).forEach(y=>{h.on(y,h.params.on[y])}),h.params&&h.params.onAny&&h.onAny(h.params.onAny),Object.assign(h,{enabled:h.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return h.params.direction==="horizontal"},isVertical(){return h.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:h.params.allowSlideNext,allowSlidePrev:h.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:h.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:h.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),h.emit("_swiper"),h.params.init&&h.init(),h}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:i,params:a}=this,o=Or(i,`.${a.slideClass}, swiper-slide`),c=Fm(o[0]);return Fm(t)-c}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(i=>i.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:i,params:a}=t;t.slides=Or(i,`.${a.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,i){const a=this;t=Math.min(Math.max(t,0),1);const o=a.minTranslate(),f=(a.maxTranslate()-o)*t+o;a.translateTo(f,typeof i>"u"?0:i),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const i=t.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",i.join(" "))}getSlideClasses(t){const i=this;return i.destroyed?"":t.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const i=[];t.slides.forEach(a=>{const o=t.getSlideClasses(a);i.push({slideEl:a,classNames:o}),t.emit("_slideClass",a,o)}),t.emit("_slideClasses",i)}slidesPerViewDynamic(t,i){t===void 0&&(t="current"),i===void 0&&(i=!1);const a=this,{params:o,slides:c,slidesGrid:f,slidesSizesGrid:h,size:p,activeIndex:g}=a;let y=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let b=c[g]?Math.ceil(c[g].swiperSlideSize):0,S;for(let T=g+1;T<c.length;T+=1)c[T]&&!S&&(b+=Math.ceil(c[T].swiperSlideSize),y+=1,b>p&&(S=!0));for(let T=g-1;T>=0;T-=1)c[T]&&!S&&(b+=c[T].swiperSlideSize,y+=1,b>p&&(S=!0))}else if(t==="current")for(let b=g+1;b<c.length;b+=1)(i?f[b]+h[b]-f[g]<p:f[b]-f[g]<p)&&(y+=1);else for(let b=g-1;b>=0;b-=1)f[g]-f[b]<p&&(y+=1);return y}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:i,params:a}=t;a.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(f=>{f.complete&&Mm(t,f)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const f=t.rtlTranslate?t.translate*-1:t.translate,h=Math.min(Math.max(f,t.maxTranslate()),t.minTranslate());t.setTranslate(h),t.updateActiveIndex(),t.updateSlidesClasses()}let c;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)o(),a.autoHeight&&t.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&t.isEnd&&!a.centeredSlides){const f=t.virtual&&a.virtual.enabled?t.virtual.slides:t.slides;c=t.slideTo(f.length-1,0,!1,!0)}else c=t.slideTo(t.activeIndex,0,!1,!0);c||o()}a.watchOverflow&&i!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,i){i===void 0&&(i=!0);const a=this,o=a.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${o}`),a.el.classList.add(`${a.params.containerModifierClass}${t}`),a.emitContainerClasses(),a.params.direction=t,a.slides.forEach(c=>{t==="vertical"?c.style.width="":c.style.height=""}),a.emit("changeDirection"),i&&a.update()),a}changeLanguageDirection(t){const i=this;i.rtl&&t==="rtl"||!i.rtl&&t==="ltr"||(i.rtl=t==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(t){const i=this;if(i.mounted)return!0;let a=t||i.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=i,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const o=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let f=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(o()):Or(a,o())[0];return!f&&i.params.createElements&&(f=Gm("div",i.params.wrapperClass),a.append(f),Or(a,`.${i.params.slideClass}`).forEach(h=>{f.append(h)})),Object.assign(i,{el:a,wrapperEl:f,slidesEl:i.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:f,hostEl:i.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||Mo(a,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||Mo(a,"direction")==="rtl"),wrongRTL:Mo(f,"display")==="-webkit-box"}),!0}init(t){const i=this;if(i.initialized||i.mount(t)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(void 0,!0),i.attachEvents();const o=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&o.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(c=>{c.complete?Mm(i,c):c.addEventListener("load",f=>{Mm(i,f.target)})}),F3(i),i.initialized=!0,F3(i),i.emit("init"),i.emit("afterInit"),i}destroy(t,i){t===void 0&&(t=!0),i===void 0&&(i=!0);const a=this,{params:o,el:c,wrapperEl:f,slides:h}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),o.loop&&a.loopDestroy(),i&&(a.removeClasses(),c&&typeof c!="string"&&c.removeAttribute("style"),f&&f.removeAttribute("style"),h&&h.length&&h.forEach(p=>{p.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),p.removeAttribute("style"),p.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(p=>{a.off(p)}),t!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),t_(a)),a.destroyed=!0),null}static extendDefaults(t){ta(Ox,t)}static get extendedDefaults(){return Ox}static get defaults(){return q3}static installModule(t){ps.prototype.__modules__||(ps.prototype.__modules__=[]);const i=ps.prototype.__modules__;typeof t=="function"&&i.indexOf(t)<0&&i.push(t)}static use(t){return Array.isArray(t)?(t.forEach(i=>ps.installModule(i)),ps):(ps.installModule(t),ps)}};Object.keys(Rx).forEach(e=>{Object.keys(Rx[e]).forEach(t=>{oy.prototype[t]=Rx[e][t]})});oy.use([h_,p_]);const Lb=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function sc(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function ad(e,t){const i=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>i.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:sc(t[a])&&sc(e[a])&&Object.keys(t[a]).length>0?t[a].__swiper__?e[a]=t[a]:ad(e[a],t[a]):e[a]=t[a]})}function _b(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function kb(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Db(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Vb(e){e===void 0&&(e="");const t=e.split(" ").map(a=>a.trim()).filter(a=>!!a),i=[];return t.forEach(a=>{i.indexOf(a)<0&&i.push(a)}),i.join(" ")}function yk(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function wk(e){let{swiper:t,slides:i,passedParams:a,changedParams:o,nextEl:c,prevEl:f,scrollbarEl:h,paginationEl:p}=e;const g=o.filter(ie=>ie!=="children"&&ie!=="direction"&&ie!=="wrapperClass"),{params:y,pagination:b,navigation:S,scrollbar:T,virtual:E,thumbs:L}=t;let P,_,R,O,N,V,Y,G;o.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&!a.thumbs.swiper.destroyed&&y.thumbs&&(!y.thumbs.swiper||y.thumbs.swiper.destroyed)&&(P=!0),o.includes("controller")&&a.controller&&a.controller.control&&y.controller&&!y.controller.control&&(_=!0),o.includes("pagination")&&a.pagination&&(a.pagination.el||p)&&(y.pagination||y.pagination===!1)&&b&&!b.el&&(R=!0),o.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||h)&&(y.scrollbar||y.scrollbar===!1)&&T&&!T.el&&(O=!0),o.includes("navigation")&&a.navigation&&(a.navigation.prevEl||f)&&(a.navigation.nextEl||c)&&(y.navigation||y.navigation===!1)&&S&&!S.prevEl&&!S.nextEl&&(N=!0);const Q=ie=>{t[ie]&&(t[ie].destroy(),ie==="navigation"?(t.isElement&&(t[ie].prevEl.remove(),t[ie].nextEl.remove()),y[ie].prevEl=void 0,y[ie].nextEl=void 0,t[ie].prevEl=void 0,t[ie].nextEl=void 0):(t.isElement&&t[ie].el.remove(),y[ie].el=void 0,t[ie].el=void 0))};o.includes("loop")&&t.isElement&&(y.loop&&!a.loop?V=!0:!y.loop&&a.loop?Y=!0:G=!0),g.forEach(ie=>{if(sc(y[ie])&&sc(a[ie]))Object.assign(y[ie],a[ie]),(ie==="navigation"||ie==="pagination"||ie==="scrollbar")&&"enabled"in a[ie]&&!a[ie].enabled&&Q(ie);else{const se=a[ie];(se===!0||se===!1)&&(ie==="navigation"||ie==="pagination"||ie==="scrollbar")?se===!1&&Q(ie):y[ie]=a[ie]}}),g.includes("controller")&&!_&&t.controller&&t.controller.control&&y.controller&&y.controller.control&&(t.controller.control=y.controller.control),o.includes("children")&&i&&E&&y.virtual.enabled?(E.slides=i,E.update(!0)):o.includes("virtual")&&E&&y.virtual.enabled&&(i&&(E.slides=i),E.update(!0)),o.includes("children")&&i&&y.loop&&(G=!0),P&&L.init()&&L.update(!0),_&&(t.controller.control=y.controller.control),R&&(t.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-pagination"),p.part.add("pagination"),t.el.appendChild(p)),p&&(y.pagination.el=p),b.init(),b.render(),b.update()),O&&(t.isElement&&(!h||typeof h=="string")&&(h=document.createElement("div"),h.classList.add("swiper-scrollbar"),h.part.add("scrollbar"),t.el.appendChild(h)),h&&(y.scrollbar.el=h),T.init(),T.updateSize(),T.setTranslate()),N&&(t.isElement&&((!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-button-next"),qm(c,t.hostEl.constructor.nextButtonSvg),c.part.add("button-next"),t.el.appendChild(c)),(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-button-prev"),qm(f,t.hostEl.constructor.prevButtonSvg),f.part.add("button-prev"),t.el.appendChild(f))),c&&(y.navigation.nextEl=c),f&&(y.navigation.prevEl=f),S.init(),S.update()),o.includes("allowSlideNext")&&(t.allowSlideNext=a.allowSlideNext),o.includes("allowSlidePrev")&&(t.allowSlidePrev=a.allowSlidePrev),o.includes("direction")&&t.changeDirection(a.direction,!1),(V||G)&&t.loopDestroy(),(Y||G)&&t.loopCreate(),t.update()}function bk(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const i={on:{}},a={},o={};ad(i,q3),i._emitClasses=!0,i.init=!1;const c={},f=Lb.map(p=>p.replace(/_/,"")),h=Object.assign({},e);return Object.keys(h).forEach(p=>{typeof e[p]>"u"||(f.indexOf(p)>=0?sc(e[p])?(i[p]={},o[p]={},ad(i[p],e[p]),ad(o[p],e[p])):(i[p]=e[p],o[p]=e[p]):p.search(/on[A-Z]/)===0&&typeof e[p]=="function"?t?a[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:i.on[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:c[p]=e[p])}),["navigation","pagination","scrollbar"].forEach(p=>{i[p]===!0&&(i[p]={}),i[p]===!1&&delete i[p]}),{params:i,passedParams:o,rest:c,events:a}}function Sk(e,t){let{el:i,nextEl:a,prevEl:o,paginationEl:c,scrollbarEl:f,swiper:h}=e;_b(t)&&a&&o&&(h.params.navigation.nextEl=a,h.originalParams.navigation.nextEl=a,h.params.navigation.prevEl=o,h.originalParams.navigation.prevEl=o),kb(t)&&c&&(h.params.pagination.el=c,h.originalParams.pagination.el=c),Db(t)&&f&&(h.params.scrollbar.el=f,h.originalParams.scrollbar.el=f),h.init(i)}function Ck(e,t,i,a,o){const c=[];if(!t)return c;const f=p=>{c.indexOf(p)<0&&c.push(p)};if(i&&a){const p=a.map(o),g=i.map(o);p.join("")!==g.join("")&&f("children"),a.length!==i.length&&f("children")}return Lb.filter(p=>p[0]==="_").map(p=>p.replace(/_/,"")).forEach(p=>{if(p in e&&p in t)if(sc(e[p])&&sc(t[p])){const g=Object.keys(e[p]),y=Object.keys(t[p]);g.length!==y.length?f(p):(g.forEach(b=>{e[p][b]!==t[p][b]&&f(p)}),y.forEach(b=>{e[p][b]!==t[p][b]&&f(p)}))}else e[p]!==t[p]&&f(p)}),c}const Tk=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Ym(){return Ym=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Ym.apply(this,arguments)}function zb(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Hb(e){const t=[];return ct.Children.toArray(e).forEach(i=>{zb(i)?t.push(i):i.props&&i.props.children&&Hb(i.props.children).forEach(a=>t.push(a))}),t}function Ek(e){const t=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return ct.Children.toArray(e).forEach(a=>{if(zb(a))t.push(a);else if(a.props&&a.props.slot&&i[a.props.slot])i[a.props.slot].push(a);else if(a.props&&a.props.children){const o=Hb(a.props.children);o.length>0?o.forEach(c=>t.push(c)):i["container-end"].push(a)}else i["container-end"].push(a)}),{slides:t,slots:i}}function Ak(e,t,i){if(!i)return null;const a=y=>{let b=y;return y<0?b=t.length+y:b>=t.length&&(b=b-t.length),b},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`},{from:c,to:f}=i,h=e.params.loop?-t.length:0,p=e.params.loop?t.length*2:t.length,g=[];for(let y=h;y<p;y+=1)y>=c&&y<=f&&g.push(t[a(y)]);return g.map((y,b)=>ct.cloneElement(y,{swiper:e,style:o,key:y.props.virtualIndex||y.key||`slide-${b}`}))}function $0(e,t){return typeof window>"u"?H.useEffect(e,t):H.useLayoutEffect(e,t)}const o6=H.createContext(null),Mk=H.createContext(null),Bi=H.forwardRef(function(e,t){let{className:i,tag:a="div",wrapperTag:o="div",children:c,onSwiper:f,...h}=e===void 0?{}:e,p=!1;const[g,y]=H.useState("swiper"),[b,S]=H.useState(null),[T,E]=H.useState(!1),L=H.useRef(!1),P=H.useRef(null),_=H.useRef(null),R=H.useRef(null),O=H.useRef(null),N=H.useRef(null),V=H.useRef(null),Y=H.useRef(null),G=H.useRef(null),{params:Q,passedParams:ie,rest:se,events:de}=bk(h),{slides:ye,slots:Ae}=Ek(c),Re=()=>{E(!T)};Object.assign(Q.on,{_containerClasses(xe,B){y(B)}});const Ee=()=>{Object.assign(Q.on,de),p=!0;const xe={...Q};if(delete xe.wrapperClass,_.current=new oy(xe),_.current.virtual&&_.current.params.virtual.enabled){_.current.virtual.slides=ye;const B={cache:!1,slides:ye,renderExternal:S,renderExternalUpdate:!1};ad(_.current.params.virtual,B),ad(_.current.originalParams.virtual,B)}};P.current||Ee(),_.current&&_.current.on("_beforeBreakpoint",Re);const X=()=>{p||!de||!_.current||Object.keys(de).forEach(xe=>{_.current.on(xe,de[xe])})},le=()=>{!de||!_.current||Object.keys(de).forEach(xe=>{_.current.off(xe,de[xe])})};H.useEffect(()=>()=>{_.current&&_.current.off("_beforeBreakpoint",Re)}),H.useEffect(()=>{!L.current&&_.current&&(_.current.emitSlidesClasses(),L.current=!0)}),$0(()=>{if(t&&(t.current=P.current),!!P.current)return _.current.destroyed&&Ee(),Sk({el:P.current,nextEl:N.current,prevEl:V.current,paginationEl:Y.current,scrollbarEl:G.current,swiper:_.current},Q),f&&!_.current.destroyed&&f(_.current),()=>{_.current&&!_.current.destroyed&&_.current.destroy(!0,!1)}},[]),$0(()=>{X();const xe=Ck(ie,R.current,ye,O.current,B=>B.key);return R.current=ie,O.current=ye,xe.length&&_.current&&!_.current.destroyed&&wk({swiper:_.current,slides:ye,passedParams:ie,changedParams:xe,nextEl:N.current,prevEl:V.current,scrollbarEl:G.current,paginationEl:Y.current}),()=>{le()}}),$0(()=>{Tk(_.current)},[b]);function ue(){return Q.virtual?Ak(_.current,ye,b):ye.map((xe,B)=>ct.cloneElement(xe,{swiper:_.current,swiperSlideIndex:B}))}return ct.createElement(a,Ym({ref:P,className:Vb(`${g}${i?` ${i}`:""}`)},se),ct.createElement(Mk.Provider,{value:_.current},Ae["container-start"],ct.createElement(o,{className:yk(Q.wrapperClass)},Ae["wrapper-start"],ue(),Ae["wrapper-end"]),_b(Q)&&ct.createElement(ct.Fragment,null,ct.createElement("div",{ref:V,className:"swiper-button-prev"}),ct.createElement("div",{ref:N,className:"swiper-button-next"})),Db(Q)&&ct.createElement("div",{ref:G,className:"swiper-scrollbar"}),kb(Q)&&ct.createElement("div",{ref:Y,className:"swiper-pagination"}),Ae["container-end"]))});Bi.displayName="Swiper";const Ii=H.forwardRef(function(e,t){let{tag:i="div",children:a,className:o="",swiper:c,zoom:f,lazy:h,virtualIndex:p,swiperSlideIndex:g,...y}=e===void 0?{}:e;const b=H.useRef(null),[S,T]=H.useState("swiper-slide"),[E,L]=H.useState(!1);function P(N,V,Y){V===b.current&&T(Y)}$0(()=>{if(typeof g<"u"&&(b.current.swiperSlideIndex=g),t&&(t.current=b.current),!(!b.current||!c)){if(c.destroyed){S!=="swiper-slide"&&T("swiper-slide");return}return c.on("_slideClass",P),()=>{c&&c.off("_slideClass",P)}}}),$0(()=>{c&&b.current&&!c.destroyed&&T(c.getSlideClasses(b.current))},[c]);const _={isActive:S.indexOf("swiper-slide-active")>=0,isVisible:S.indexOf("swiper-slide-visible")>=0,isPrev:S.indexOf("swiper-slide-prev")>=0,isNext:S.indexOf("swiper-slide-next")>=0},R=()=>typeof a=="function"?a(_):a,O=()=>{L(!0)};return ct.createElement(i,Ym({ref:b,className:Vb(`${S}${o?` ${o}`:""}`),"data-swiper-slide-index":p,onLoad:O},y),f&&ct.createElement(o6.Provider,{value:_},ct.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof f=="number"?f:void 0},R(),h&&!E&&ct.createElement("div",{className:"swiper-lazy-preloader"}))),!f&&ct.createElement(o6.Provider,{value:_},R(),h&&!E&&ct.createElement("div",{className:"swiper-lazy-preloader"})))});Ii.displayName="SwiperSlide";const jk=M(Bi)`
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
`,Rk=M(Ii)`
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
`,Ok=M.section`
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
`,Lk=M.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`,l6=M.button`
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
`,_k=M.div`
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
`,kk=M.p`
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
`,Dk=M.p`
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
`,Vk=M.img`
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
`;const zk=M.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${e=>e.$isActive?"898px":"437px"};
    height: ${e=>e.$isActive?"500px":"285px"};
  }
`,Hk=M.div`
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
`,Pk=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Nk=M.div`
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
`;const c6=M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  opacity: ${e=>e.$isActive?1:.7};
  transform: ${e=>e.$isActive?"translateY(0)":"translateY(5px)"};
  transition: all 0.2s ease; // CSS transition замість Framer Motion
`,Bk=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Ik=M.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  opacity: ${e=>e.$isActive?1:.8};
  transform: ${e=>e.$isActive?"translateY(0)":"translateY(5px)"};
  transition: all 0.2s ease; // CSS transition замість Framer Motion
`,$k=M.div`
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
`,Uk="/assets/Review%20Image%203-bwglEcYl.png",u6="/assets/Review%20Image%201-BysFOq9G.png",d6="/assets/Review%20Image%202-C_HtVc_c.png",f6="/assets/Review%20Image%205-B3ukDKHL.png",Gk="/assets/Review%20Image%204-AW0fOgIu.png",Fk=iE`
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
`,qk=M.section`
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
`,Yk=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    gap: 1rem;
  }
`,Wk=M.p`
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
`,Zk=M.h3`
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
`,Pb=M.span`
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
`,Xk=M.div`
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
`,Kk=M.div`
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
`,Qk=M.div`
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
`,Jk=M(Qk)`
  ${e=>e.$isLargeDesktop&&`
    margin: 0;
    transition: all 0.2s ease;
    
    .overlay {
      margin-bottom: 5%;
    }
  `}
`,eD=M.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 0.5rem;
`,tD=M.div`
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
`,nD=M.p`
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
`,iD=M.div`
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
`;function Nb(){const[e,t]=H.useState(null),[i,a]=H.useState(0),o=H.useRef(null),c=H.useRef(null),f=()=>{e&&e.slidePrev()},h=()=>{e&&e.slideNext()},p=[{image:Uk,description:"A broken washing machine that stopped mid-cycle was fully restored by our team in just one visit. The family can now enjoy clean laundry again without stress.",title:"Quick Fix for a Washing Machine Breakdown",type:"Washing Machine Repair"},{image:d6,description:"We installed a brand-new dishwasher for a busy household, ensuring proper water connections and energy efficiency. The client now saves both time and water daily.",title:"Professional Dishwasher Installation",type:"Dishwasher Installation"},{image:f6,description:"A fridge that was leaking water and not cooling properly was diagnosed and repaired. The customer avoided costly food spoilage and gained reliable performance again.",title:"Refrigerator Leak and Cooling Repair",type:"Refrigerator Repair"},{image:Gk,description:"The dryer was overheating and shutting down after a few minutes. Our experts replaced faulty parts and cleaned the vent system, restoring safe and efficient drying.",title:"Dryer Overheating Problem Solved",type:"Dryer Repair"},{image:u6,description:"An oven that wouldn't heat evenly was repaired by recalibrating the thermostat and replacing heating elements. The family can now cook meals perfectly again.",title:"Oven Heating Restored for Perfect Meals",type:"Oven Repair"},{image:f6,description:"We handled a complete installation of a modern washing machine, ensuring proper setup, water connection, and vibration-free operation.",title:"Seamless Washing Machine Installation",type:"Washing Machine Installation"},{image:d6,description:"A freezer full of food was saved when we quickly repaired the compressor and restored full cooling capacity within hours.",title:"Emergency Freezer Repair",type:"Freezer Repair"},{image:u6,description:"A customer's stove stopped working during family dinner preparation. Our team replaced defective wiring and burners, restoring it the same day.",title:"Stove Emergency Fixed Same Day",type:"Stove Repair"}];return x.jsxs(Ok,{children:[x.jsxs(_k,{children:[x.jsx(kk,{children:"Our Cases"}),x.jsxs(Dk,{children:[x.jsx(Pb,{children:"Success Stories "})," That Bring Your Appliances Back to Life"]})]}),x.jsx($k,{children:x.jsx(jk,{modules:[ia],spaceBetween:20,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},speed:800,onSwiper:t,onSlideChange:g=>a(g.realIndex),breakpoints:{1440:{slidesPerView:6,spaceBetween:30,centeredSlides:!0}},touchStartPreventDefault:!1,allowTouchMove:!0,resistance:!0,resistanceRatio:.85,children:p.map(({image:g,description:y,title:b,type:S},T)=>x.jsx(Rk,{$isActive:i===T,$index:T,children:x.jsxs(zk,{$isActive:i===T,$index:T,children:[x.jsx(Vk,{src:g,alt:S,$isActive:i===T,$index:T}),x.jsx(Hk,{$isActive:i===T,$index:T,children:x.jsxs(Pk,{children:[x.jsx(Nk,{children:x.jsx(c6,{$isActive:i===T,children:y})}),x.jsxs(Bk,{children:[x.jsx(Ik,{$isActive:i===T,children:b}),x.jsx(c6,{$isActive:i===T,children:S})]})]})})]})},T))})}),x.jsxs(Lk,{children:[x.jsx(l6,{ref:o,onClick:f,"aria-label":"Previous slide",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(l6,{ref:c,onClick:h,"aria-label":"Next slide",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})}const aD=M(W.div)`
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
`,rD=M.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`,sD=({type:e,message:t,onClose:i,autoClose:a=!0,autoCloseDuration:o=25e3})=>{const{t:c}=ay();H.useEffect(()=>{if(a){const h=setTimeout(()=>{i()},o);return()=>clearTimeout(h)}},[a,o,i]);const f={success:c("alert.success"),error:c("alert.error")};return x.jsxs(aD,{$type:e,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",damping:25},children:[x.jsx("div",{children:t||f[e]}),x.jsx(rD,{onClick:i,children:"×"})]})},oD="/assets/ContactFormImage-CaQYWUqs.png",w2=()=>{const[e,t]=H.useState(""),[i,a]=H.useState({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),[o,c]=H.useState({}),[f,h]=H.useState(null),[p,g]=H.useState(!1),[y,b]=H.useState(!1),S=()=>{g(!0)},T=()=>{g(!1)},E=V=>{const{name:Y,value:G}=V.target;a(Q=>({...Q,[Y]:G})),c(Q=>({...Q,[Y]:!1}))},L=()=>{const V={};return e||(V.service=!0),i.name||(V.name=!0),i.email||(V.email=!0),i.phone||(V.phone=!0),i.location||(V.location=!0),V},P=async V=>{V.preventDefault();const Y=L();if(Object.keys(Y).length>0){c(Y),h({type:"error",message:"Please fill all required fields"});return}try{if((await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:e,...i})})).ok)t(""),a({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),c({}),h({type:"success",message:"Form submitted successfully! We will contact you soon."});else throw new Error("Failed to submit form")}catch(G){console.error("Error submitting form:",G),h({type:"error",message:"There was an error submitting the form. Please try again."})}},_={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ve}}},R={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.4,ease:ve}}},O={hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:ve}},focus:{scale:1.01,transition:{duration:.1}}},N={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.3,ease:ve}},hover:{scale:1.02,transition:{duration:.1}},tap:{scale:.98}};return x.jsxs(x.Fragment,{children:[x.jsxs(hD,{children:[x.jsxs(g6,{children:[x.jsxs(_x,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:_,children:x.jsxs(pD,{children:[" ",x.jsx("span",{children:"Contact"})," our team"]})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:_,transition:{delay:.1},children:x.jsx(im,{children:"We love our customers, so feel free to call during normal business hours"})})]})," ",x.jsx(W.div,{variants:N,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",whileTap:"tap",children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(mD,{children:x.jsx(gD,{children:"Call Us for Fast Repair"})})})}),x.jsxs(g6,{children:[x.jsx(xD,{}),x.jsxs(vD,{children:[x.jsxs(x6,{width:"251px",children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:_,children:x.jsx(v6,{children:"Service Hours"})}),x.jsx(_x,{children:x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:_,transition:{delay:.2},children:x.jsxs(im,{children:["Mon–Sat: 8AM–6PM ",x.jsx("br",{})," Sun: 9AM–4PM"," "]})})})]}),x.jsxs(x6,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:_,transition:{delay:.3},children:x.jsx(v6,{children:"Our Location"})}),x.jsxs(_x,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:_,transition:{delay:.4},children:x.jsxs("a",{href:"https://maps.app.goo.gl/cJF4BwHPJFbYsQAMA",target:"_blank",rel:"noopener noreferrer",children:[" ",x.jsx(im,{children:" 801 Tioga Pl, Newbury Park, CA 91320"})]})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:_,transition:{delay:.5},children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(im,{children:"+1 (805) 500-2705"})})})]})]})]})]})]}),x.jsx(W.div,{variants:R,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:x.jsxs(lD,{onSubmit:P,children:[x.jsx(W.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4,ease:ve},children:x.jsx(yD,{src:oD,alt:"contact image",onLoad:()=>b(!0),style:{opacity:y?1:0,transition:"opacity 0.3s ease"}})}),x.jsx(hs,{children:"What service do you need for your appliances?"}),x.jsxs(cD,{children:[x.jsx(W.div,{variants:O,whileHover:"hover",children:x.jsxs(h6,{style:o.service?{borderColor:"red"}:{},children:[x.jsx(p6,{name:"service",value:"Repair",checked:e==="Repair",onChange:V=>t(V.target.value)}),x.jsx(m6,{checked:e==="Repair"}),"Repair"]})}),x.jsx(W.div,{variants:O,transition:{delay:.1},whileHover:"hover",children:x.jsxs(h6,{style:o.service?{borderColor:"red"}:{},children:[x.jsx(p6,{name:"service",value:"Installation",checked:e==="Installation",onChange:V=>t(V.target.value)}),x.jsx(m6,{checked:e==="Installation"}),"Installation"]})})]}),x.jsxs(wD,{children:[x.jsxs(bD,{children:[x.jsx(hs,{children:"Name"}),x.jsx(W.div,{variants:O,transition:{delay:.2},whileFocus:"focus",children:x.jsx(Lx,{name:"name",type:"text",placeholder:"Your Name",value:i.name,onChange:E,style:o.name?{borderBottom:"1px solid red"}:{}})}),x.jsx(hs,{children:"Email"}),x.jsx(W.div,{variants:O,transition:{delay:.3},whileFocus:"focus",children:x.jsx(Lx,{name:"email",type:"email",placeholder:"Your Email",value:i.email,onChange:E,style:o.email?{borderBottom:"1px solid red"}:{}})}),x.jsx(hs,{children:"Phone Number"}),x.jsx(W.div,{variants:O,transition:{delay:.4},whileFocus:"focus",children:x.jsx(Lx,{name:"phone",type:"tel",placeholder:"Your Phone Number",value:i.phone,onChange:E,style:o.phone?{borderBottom:"1px solid red"}:{}})})]}),x.jsxs(SD,{children:[x.jsx(hs,{children:"In what location do you need the service?"}),x.jsx(W.div,{variants:O,transition:{delay:.5},whileFocus:"focus",children:x.jsx(tm,{children:x.jsxs(nm,{name:"location",value:i.location,onChange:E,style:o.location?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select location"}),x.jsx("option",{children:"Agoura Hills"}),x.jsx("option",{children:"Calabasas"}),x.jsx("option",{children:"Camarillo"}),x.jsx("option",{children:"Hidden Valley"}),x.jsx("option",{children:"Lake Sherwood"}),x.jsx("option",{children:"Los Angeles County"}),x.jsx("option",{children:"Malibu"}),x.jsx("option",{children:"Moorpark"}),x.jsx("option",{children:"Newbury Park"}),x.jsx("option",{children:"Oak Park"}),x.jsx("option",{children:"Santa Rosa Valley"}),x.jsx("option",{children:"Thousand Oaks"}),x.jsx("option",{children:"Westlake Village"}),x.jsx("option",{children:"Other"})]})})}),x.jsx(hs,{children:"What do you need repaired?"}),x.jsx(W.div,{variants:O,transition:{delay:.6},whileFocus:"focus",children:x.jsx(tm,{children:x.jsxs(nm,{name:"appliance",value:i.appliance,onChange:E,style:o.appliance?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select appliance"}),x.jsx("option",{children:"Refrigerator"}),x.jsx("option",{children:"Dryer"}),x.jsx("option",{children:"Oven"}),x.jsx("option",{children:"Ice Maker"}),x.jsx("option",{children:"Washer"}),x.jsx("option",{children:"Range"}),x.jsx("option",{children:"Wine Cooler"}),x.jsx("option",{children:"Freezer"}),x.jsx("option",{children:"Air Conditioner"}),x.jsx("option",{children:"Furnace"}),x.jsx("option",{children:"Other"})]})})}),x.jsx(hs,{children:"Brand of appliance"}),x.jsx(W.div,{variants:O,transition:{delay:.7},whileFocus:"focus",children:x.jsx(tm,{children:x.jsxs(nm,{name:"brand",value:i.brand,onChange:E,style:o.brand?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select brand"}),x.jsx("option",{children:"Amana"}),x.jsx("option",{children:"Bosch"}),x.jsx("option",{children:"Electrolux"}),x.jsx("option",{children:"Fisher & Paykel"}),x.jsx("option",{children:"Frigidaire"}),x.jsx("option",{children:"GE"}),x.jsx("option",{children:"Haier"}),x.jsx("option",{children:"JennAir"}),x.jsx("option",{children:"KitchenAid"}),x.jsx("option",{children:"LG"}),x.jsx("option",{children:"Maytag"}),x.jsx("option",{children:"Samsung"}),x.jsx("option",{children:"Sharp"}),x.jsx("option",{children:"Sub-Zero"}),x.jsx("option",{children:"Thermador"}),x.jsx("option",{children:"Viking"}),x.jsx("option",{children:"Whirlpool"}),x.jsx("option",{children:"Wolf"}),x.jsx("option",{children:"Other"})]})})})]})]}),x.jsx(hs,{children:"What type of power does this appliance use?"}),x.jsx(W.div,{variants:O,transition:{delay:.8},whileFocus:"focus",children:x.jsx(tm,{children:x.jsxs(nm,{name:"power",value:i.power,onChange:E,style:o.power?{borderBottom:"1px solid red"}:{},children:[x.jsx("option",{value:"",children:"Select power"}),x.jsx("option",{children:"Electric"}),x.jsx("option",{children:"Natural Gas"}),x.jsx("option",{children:"Propane"})]})})}),x.jsx(hs,{children:"Any details you'd like to add?"}),x.jsx(W.div,{variants:O,transition:{delay:.9},whileFocus:"focus",children:x.jsx(uD,{name:"details",placeholder:"Any details you'd like to add?",value:i.details,onChange:E})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:_,transition:{delay:1},children:x.jsxs(fD,{children:['By clicking "Submit" you hereby agree to our'," ",x.jsx("span",{onClick:S,style:{cursor:"pointer"},children:"Privacy Policy"})," ","."]})}),x.jsx(W.div,{variants:N,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},transition:{delay:1.1},whileHover:"hover",whileTap:"tap",children:x.jsx(dD,{type:"submit",children:"Submit"})})]})}),x.jsx(Yv,{children:f&&x.jsx(sD,{type:f.type,message:f.message,onClose:()=>h(null)})})]})," ",p&&x.jsx(xb,{onClick:T,children:x.jsxs(vb,{onClick:V=>V.stopPropagation(),children:[x.jsx(yb,{onClick:T,children:"×"}),x.jsx(wb,{})]})})]})},lD=M.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  background: var(--blue-form);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  -webkit-tap-highlight-color: transparent;

  width: auto;
  max-width: 696px;
  @media screen and (min-width: 768px) {
    width: 668px;
  }

  @media screen and (min-width: 1440px) {
    gap: 5px;
  }
`,hs=M.label`
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
`,cD=M.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,h6=M.label`
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
`,p6=M.input.attrs({type:"radio"})`
  display: none;
`,m6=M.span`
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
`,Lx=M.input`
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
`,tm=M.div`
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
`,nm=M.select`
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
`,uD=M.textarea`
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
`,dD=M.button`
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
`,fD=M.p`
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
`,hD=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  overflow: auto;
  /* padding-top: 100px; */
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    /* padding-top: 80px; */
    gap: 24px;
  }

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
`,g6=M.div`
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
`,_x=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;

  @media screen and (max-width: 767px) {
    gap: 10px;
  }
`,pD=M.p`
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
`,im=M.p`
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
`,mD=M.button`
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
`,gD=M.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`,xD=M.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
`,vD=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;

  @media screen and (max-width: 767px) {
    gap: 20px;
  }
`,x6=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${e=>e.width||"100%"};

  @media screen and (max-width: 767px) {
    width: 100% !important;
    gap: 10px;
  }
`,v6=M.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`,yD=M.img`
  margin: 0 auto;
  width: 100%;
  max-width: 696px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 668px;
  }
`,wD=M.div`
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
`,bD=M.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,SD=M.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,y6="/assets/Ellipse%204aleksey-FxWBDF7j.png",w6="/assets/Ellipse%204-sanal-avatar-Dxfndv0Z.png",b6="/assets/Ellipse%204-Wendy%20Bailey-jDxdSyQ5.png",S6="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgESURBVHgB3Vr7b1NVHP/c29t3V9ZtsNG9Oh1TivJWCAaGYjSDxWgwBo3EmBgRTIiCidF/QBMTfoaYKGIkQIiiYTwSQHkZiKCM8d4YY2PtBuzRrs/b9l6/53aDjdFube9Yt09yt7b33HPP93zf3+/hoD442GxW5JocsOW8CKPxJRj1lRCEORA0BmVELBZEJFqPkFgPX7AR3r5j6Oq7A4+nByqDg1pwOBwozd+Egty3YTJOJyKAaAzKf0kGZHaxgfSH4+IXzwMaugRN/PIG2tHj2YEm11a43a1QAZkSyGOesxYV9m1EVBGCIRBnJCKGR3qQoddxMOhAczXg5p1vceHabvo9hjSRLoEcFjrfQGX5j8QJG3yBfhZx6RI2FDLNxaaymDjEosDN1rdw/uo+pIHUCXRMLcKCuf9Cr52OPr8UlzUVRX0oFKGG1cwhFG7AhSurcNPVlsoEmlQGY/nCTzFn1jH4gxaExQGOjRVx6J+bo3exjZyGGY5NsFg60eY+l8oEoxtXu+wgrJbXyRBE6ZuA8YAkRzHFIsDjO4W648swwOEkGA2BWqypuUIWsZLMeoyeSI3rakNGFEadAA3XiF2HnfRLNNnwkQjU4b2a6wiI5YhGmbqNpTimAFkiv8pBb2jBrroqJCEy2YI5rFnZiHD4KTL9WUTcAPqJ1GkbsfvQs0ggronNem31KSLs6ewkjoEMXDQqQ5KqULNsf6JRj9en6hc2Ymrux+RsSedU8m1jAtr4CIVKtpxnYLN04Lb7/LARw56pqCjH0udb0O0ha8mNj7VMFcy6FkwRcOhsITo77w6+NZw7CysPwOuTJgxxDDyttdcnY8lzfw67NeTbolmrIeic5BKyUOdGgBSTKR52Yu7MVYN/HkygAEfJXvgU7k08ApnRYaFjVdlPGETXQzGcN/NdJX1B+sTx9LwcESG72sl8MfuVwlTkZ7niYlqRVom104IsU4wl5BMXa3Dhah2GrGD1q5fJIj2bQapDqZKI4oJp+HvLNnj8PqSyTJvZguVfbURz222QA0fa4Oi1GqEDvx2xs69xDpYXVsBocCLcJyMT6ZQk6AUBZVOnAexKETmMMJojIzD2mw3T8bS9lGUecQIdpespHcncodPj0iDxilAud+pKAwReGFFY86xWeIJBkvNMQ13SxbAITC/8jAjcHCcwL/d9hCLEPXVTn0A4jFfeIaNmMMTLE8mg6GApeBorpauDAwhRKpdvW0OfvhBQXJwPE7HU64Pa4GkzdSWlEA3GUdkuRpacKXFxcDAb7cjLy6EV6EqU4tBkA9Nls7mMR65+hVL5mmxg6V2BZREPi3kGYhlarmwE46DRsESg4tHcseKgTCmb6HbRi5LoINM5rRa6IjvEaBSqgSI3Kj9WMgJnY4ygo6hk86av6RXahAZaoIins7cHW/f8TNWzKVANbOOINiomVasXe4phOIgTt7bvfWAR+VFM7e7ugr16LqVqlVAVkhQWxiqwZpMyfxYQRSIyyTjyj95AgGLXscjOWPlPigVochPU8T9D4AsFUbhyKTRGU2JHT++VaY/5MgdUNXWMb1I0KECMXYRJWAz16VPEUyYdCySLYvobMYogqbnJbD5RvMgjFGocMYxK/y1xzildJE3ii6VZaksQ04tQpJ6HP3Q6nrtNMrCgPRBo4tEdOKv06CYbWL+xK3iUR29vC2XBmHQQiGkej4uqUb1eBIMdZGQK1U6XlEjm/j2KKIwjp0usD2jLA6fTq6GPMvUs21lLnLFOwn3vr1To3QAxAjXBIpm1az+ipq1uxL2zWSz45fgRtHe4ldAtI+j1HDrub2cf47LZ2vYdygo3KD2/DB3/wMOMC1qtgB0Uqo0WzR0u7L3ZCOTakD5IbAw6nrL579m3OIEtHS2YH+okMZqqVKbSnrs/eqFMPkhhWyrIoWDAo0Q0GZcsOGrQNgwcYnhoXVo716GyZB/dRLrgqNzQ2nUP5sXOuJKnAtbkmVYEzZRcyt4yiGlyqK9/qfmbB2sadEtD7bJ78AesACaqY5RhJP3bc5itX9mlwdscQ1Pbh5QAa9QPK54ESPdyzByaXW8CD8PaoXJ0ruEPRCJu0oOJRyDLRsLhBqLh98E/P6ooMi5fX0CNfl7phU8UyOxwgplH/dWVj94armv3PT5qKHYhP7eW/CKrZWR3HMcYwU5eNLevR/2NY4/eTuwSaqsPw6B/jSreMrK128RsBTMqwdBJ7D+x7HFDEnNn//EaavA3QSvIWWl0lEhCYCFgExFXnWhYMvGTsLPOSTvUqkTm2UTkAHFGQws6D81EkgNBI+lXBDsPPEO9hWYKf5iYjn+FWKY1GA0cVeQb4fJX4a/MDgINgEftyydhNS6B1z9+hxMkZlDMlAH1HcSBE6xVPaJUjTZikXGj5Qfk2bpRlL9KORMqSU/w/Aw5cXaaJc+qwW33ehw98/lon0x9gTMryuGcUUedzln9xynH2I2wCIX8ckh04b/6+bh1tzOVp9PnwKLZq+Gw71WqV4EQ4yinGkeVA7Fc/ECsJHXj2p0PUH+J9dxTNnSZLkhQDi88VfIl+cxZSpdYFNPnqsyONGs5stxAMOxGq2sd/rl8AONwpHk42KH0soJPSE/WwmyyK+0r1tRhnSvlULr0cP8fHErvLyuymhBzRf6gG929e3DHtQXN2XEo/fGwWvNgtxbDlLOCTHoVcWQ2pfezqXpnUu7HpAAZqosIh5qIqNPo9Z1Bj78VPT1epCGGyfA/uU/qLszt8vwAAAAASUVORK5CYII=",C6="/assets/Review%20Image-alexey-BS9M-VaX.png",T6="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",E6="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",A6="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",am=[{avatar:y6,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      Airtexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      Airtexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:C6},{avatar:w6,name:"Sanal Kandymov",time:"a week ago",text:`Great service! Airtexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:T6},{avatar:b6,name:"Wendy Bailey",time:"a week ago",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:E6},{avatar:S6,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:A6},{avatar:y6,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      Airtexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      Airtexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:C6},{avatar:w6,name:"Sanal Kandymov",time:"a week ago",text:`Great service! Airtexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:T6},{avatar:b6,name:"Wendy Bailey",time:"a week ago",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:E6},{avatar:S6,name:"Elizabeth Castorena",time:"a week ago",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:A6}],M6={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ve}}},kx={hidden:{opacity:0,y:50,scale:.95,rotateX:-5},visible:{opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.7,ease:ve}},hover:{y:-5,scale:1.02,boxShadow:"0 20px 40px rgba(0,0,0,0.1)",transition:{duration:.3,ease:ve}}},Dx={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.5,ease:ve}},hover:{scale:1.1,rotate:5,transition:{duration:.2}}},Vx={hidden:{opacity:0,scale:1.1},visible:{opacity:1,scale:1,transition:{duration:.6,ease:ve}},hover:{scale:1.05,transition:{duration:.4}}},CD=M.div`
  padding: 0px 16px;
  width: 375px;
  height: 170px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,TD=M.h2`
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
`,ED=M.p`
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
`,AD=M.div`
  position: relative;
  width: 100%;
  height: 684px;
  overflow: hidden;
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    height: 800px;
  }
`,zx=M.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: ${e=>e.$isVisible?"block":"none"};

  /* Заборонити будь-яку взаємодію з свайпером на мобільних */
  @media (max-width: 767px) {
    pointer-events: none;

    /* Але дозволити скрол сторінки через цю область */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 20;
      pointer-events: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    display: block;
    pointer-events: auto;
  }
`,Hx=M.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: #f5faff;
  border-radius: 8px;
  height: 600px;

  /* На мобільних дозволяємо скрол сторінки через картки */
  @media (max-width: 767px) {
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    pointer-events: auto;
  }
`,Px=M.div`
  display: flex;
  gap: 19px;
  align-items: center;
`,Nx=M.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  -moz-loading: lazy;
`,Bx=M.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Ix=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`,$x=M.p`
  color: rgba(33, 33, 33, 0.5);
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`,Ux=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  line-height: 1.25em;
  flex-grow: 1;
  overflow: hidden;
`,Gx=M.img`
  width: 100%;
  height: 370px;
  border-radius: 4px;
  object-fit: cover;
  -moz-loading: lazy;
`,Fx=M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,qx=M.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,MD=M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
  pointer-events: auto;
  -webkit-overflow-scrolling: touch;

  /* Тільки для мобільних пристроїв */
  @media (min-width: 768px) {
    display: none;
  }
`,b2=()=>{const[,e]=ct.useState(!1),t=ct.useRef(null),i=ct.useRef(null),a=ct.useRef(null),o=jt({query:"(min-width: 768px)"}),c=jt({query:"(min-width: 1440px)"});return x.jsxs("div",{children:[x.jsxs(CD,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:M6,children:x.jsx(ED,{children:"Your Feedback Matters"})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:M6,transition:{delay:.1},children:x.jsxs(TD,{children:["Discover why clients ",x.jsx("span",{children:" trust "})," our repairs"]})})]}),x.jsxs(AD,{ref:a,children:[x.jsx(MD,{}),x.jsxs(zx,{$isVisible:!0,children:[x.jsx(Fx,{}),x.jsx(qx,{}),x.jsx(Bi,{ref:t,direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},speed:4e3,loop:!0,modules:[ia],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%",pointerEvents:"none"},preventInteractionOnTransition:!0,watchOverflow:!0,children:am.map((f,h)=>x.jsx(Ii,{children:x.jsx(W.div,{variants:kx,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:x.jsxs(Hx,{children:[x.jsxs(Px,{children:[x.jsx(W.div,{variants:Dx,whileHover:"hover",children:x.jsx(Nx,{src:f.avatar,alt:f.name,loading:"lazy",decoding:"async"})}),x.jsxs(Bx,{children:[x.jsx(W.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:x.jsx(Ix,{children:f.name})}),x.jsx(W.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:x.jsx($x,{children:f.time})})]})]}),x.jsx(W.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:x.jsx(Ux,{children:f.text})}),x.jsx(W.div,{variants:Vx,whileHover:"hover",children:x.jsx(Gx,{src:f.image,alt:`Review by ${f.name}`,loading:"lazy",decoding:"async"})})]})})},`top-${h}`))})]}),x.jsxs(zx,{$isVisible:o,children:[x.jsx(Fx,{}),x.jsx(qx,{}),x.jsx(Bi,{ref:i,direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!1,reverseDirection:!0},speed:2e3,loop:!0,modules:[ia],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,initialSlide:am.length-1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%",pointerEvents:"none"},preventInteractionOnTransition:!0,watchOverflow:!0,children:am.map((f,h)=>x.jsx(Ii,{children:x.jsx(W.div,{variants:kx,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:x.jsxs(Hx,{children:[x.jsxs(Px,{children:[x.jsx(W.div,{variants:Dx,whileHover:"hover",children:x.jsx(Nx,{src:f.avatar,alt:f.name})}),x.jsxs(Bx,{children:[x.jsx(W.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:x.jsx(Ix,{children:f.name})}),x.jsx(W.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:x.jsx($x,{children:f.time})})]})]}),x.jsx(W.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:x.jsx(Ux,{children:f.text})}),x.jsx(W.div,{variants:Vx,whileHover:"hover",children:x.jsx(Gx,{src:f.image,alt:`Review by ${f.name}`})})]})})},`bottom-${h}`))})]}),c&&x.jsxs(zx,{$isVisible:!0,children:[x.jsx(Fx,{}),x.jsx(qx,{}),x.jsx(Bi,{direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},speed:6e3,loop:!0,modules:[ia],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%",pointerEvents:"none"},preventInteractionOnTransition:!0,watchOverflow:!0,children:am.map((f,h)=>x.jsx(Ii,{children:x.jsx(W.div,{variants:kx,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:x.jsxs(Hx,{children:[x.jsxs(Px,{children:[x.jsx(W.div,{variants:Dx,whileHover:"hover",children:x.jsx(Nx,{src:f.avatar,alt:f.name})}),x.jsxs(Bx,{children:[x.jsx(W.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:x.jsx(Ix,{children:f.name})}),x.jsx(W.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:x.jsx($x,{children:f.time})})]})]}),x.jsx(W.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:x.jsx(Ux,{children:f.text})}),x.jsx(W.div,{variants:Vx,whileHover:"hover",children:x.jsx(Gx,{src:f.image,alt:`Review by ${f.name}`})})]})})},`desktop-${h}`))})]})]})]})},rm="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-DXMOH2a-.webm",ly="data:image/svg+xml,%3csvg%20width='140'%20height='33'%20viewBox='0%200%20140%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_586)'%3e%3cpath%20d='M0.00384521%2032.9336H31.9955V0.933594H0.00384521V32.9336ZM20.5091%203.37746C26.1637%205.23116%2030.25%2010.5932%2030.2654%2016.9275C30.2807%2023.1588%2026.277%2028.508%2020.5091%2030.4846V3.37746ZM15.9946%202.65223C17.0161%202.65223%2018.1043%202.78857%2019.0107%202.96908C19.0107%2010.2187%2012.0004%2016.185%204.76547%2016.185L1.74041%2016.1805C2.23648%208.74909%208.38454%202.65223%2015.9946%202.65223ZM4.76803%2017.6943C12.0017%2017.6943%2019.0094%2023.6542%2019.0094%2030.8968C18.1043%2031.0818%2016.9617%2031.2194%2015.9946%2031.2194C8.38198%2031.2092%202.02589%2025.0938%201.73849%2017.6943H4.76803ZM42.7049%2019.7452V17.7283H49.3618V15.157H42.7036V11.4131H49.7862V8.84766H39.9787V19.6287C39.9787%2022.3542%2041.1392%2024.2181%2043.8634%2024.6009C43.9178%2024.6143%2043.9716%2024.6246%2044.0215%2024.6259H44.0708C44.3499%2024.6572%2044.6347%2024.6777%2044.9336%2024.6777H49.975V22.1154H44.9561C44.09%2022.1154%2042.7049%2021.6879%2042.7049%2019.7452ZM51.9113%2024.6816H54.6374V8.84382H51.9113V24.6816ZM62.6404%2012.8674C59.1948%2012.8674%2056.6159%2015.2415%2056.6159%2018.938V19.0296C56.6159%2022.6358%2059.1033%2024.9638%2062.7089%2024.9638C64.4429%2024.9638%2066.063%2024.4851%2067.5461%2022.9092L65.903%2021.3121C65.0357%2022.1794%2064.1914%2022.6358%2062.7998%2022.6358C60.7688%2022.6358%2059.4227%2021.4491%2059.3312%2019.6229H68.2758C68.3212%2019.1665%2068.3212%2018.6647%2068.3212%2018.6647C68.3225%2015.4463%2066.063%2012.8674%2062.6404%2012.8674ZM59.4003%2017.7059C59.5142%2016.313%2060.9295%2015.1948%2062.6404%2015.1948C64.2375%2015.1948%2065.5381%2016.3361%2065.5381%2017.7059H59.4003ZM75.9825%2015.3094C77.2146%2015.3094%2078.1281%2015.7664%2078.9032%2016.5646L80.5918%2014.8069C79.2681%2013.3917%2077.6941%2012.8213%2075.9825%2012.8213C72.5138%2012.8213%2069.7301%2015.4003%2069.7301%2018.915C69.7301%2022.4297%2072.5138%2025.0093%2075.9825%2025.0093C77.6941%2025.0093%2079.2687%2024.439%2080.5918%2023.0237L78.9032%2021.266C78.1281%2022.0649%2077.2146%2022.5213%2075.9825%2022.5213C73.9739%2022.5213%2072.4453%2020.9914%2072.4453%2018.915C72.4453%2016.8385%2073.9739%2015.3094%2075.9825%2015.3094ZM85.0148%2019.7497H85.0116V15.7062H87.4906V13.2291H85.0148V8.84446H82.2886V19.9103L82.2963%2019.9097C82.3744%2022.4829%2083.5432%2024.2354%2086.1733%2024.6047C86.2277%2024.6182%2086.2815%2024.6284%2086.3314%2024.6291H86.3807C86.6598%2024.6604%2086.9446%2024.6816%2087.2436%2024.6816H87.5322L87.5418%2022.1193H87.266C86.3999%2022.1193%2085.0148%2021.6923%2085.0148%2019.7497ZM92.4885%2014.9324V13.2297H89.7847V24.6816H92.4885V18.6596C92.4885%2016.7739%2093.6925%2015.5916%2095.5775%2015.5916C96.009%2015.5916%2096.3956%2015.6365%2096.7137%2015.7056V13.0703C96.5998%2013.0479%2096.1914%2013.0018%2095.8963%2013.0018C94.2602%2013.0025%2093.0338%2013.7527%2092.4885%2014.9324ZM103.38%2012.8885C99.9033%2012.8885%2097.131%2015.5232%2097.131%2018.9553C97.131%2022.3856%2099.9033%2025.0221%20103.38%2025.0221C106.832%2025.0221%20109.627%2022.3856%20109.627%2018.9553C109.626%2015.5238%20106.832%2012.8885%20103.38%2012.8885ZM103.38%2022.5456C101.358%2022.5456%2099.8361%2020.9767%2099.8361%2018.9553C99.8361%2016.9326%20101.358%2015.3651%20103.38%2015.3651C105.379%2015.3651%20106.923%2016.9326%20106.923%2018.9553C106.922%2020.9774%20105.379%2022.5456%20103.38%2022.5456ZM111.303%2024.6816H114.03V8.84382H111.303V24.6816ZM123.862%2019.8866C123.862%2021.7039%20122.795%2022.4777%20121.363%2022.4777C119.932%2022.4777%20118.865%2021.7039%20118.865%2019.911V13.2297H116.115V20.1376C116.115%2023.4097%20118.5%2024.9773%20121.34%2024.9773C124.203%2024.9773%20126.61%2023.3867%20126.61%2020.0691V13.2297H123.862V19.8866ZM136.925%2021.0196L135.206%2018.6148L137.335%2015.7139L139.158%2013.2297H136.182L133.705%2016.6606L131.206%2013.2297H128.253L129.947%2015.5462L132.206%2018.6372L129.838%2021.9356L127.867%2024.6816H130.797L133.704%2020.6368L136.613%2024.6816H139.544L136.925%2021.0196Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_586'%3e%3crect%20width='139.541'%20height='32'%20fill='white'%20transform='translate(0.00384521%200.933594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Wm="/assets/2-lv1xptCk.svg",cy="/assets/3-xYBlE7jA.svg",uy="data:image/svg+xml,%3csvg%20width='77'%20height='36'%20viewBox='0%200%2077%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M67.1338%2020.3456H71.0883V24.0242C70.3626%2024.3009%2068.9382%2024.5778%2067.5878%2024.5778C63.2137%2024.5778%2061.7591%2022.3574%2061.7591%2017.8483C61.7591%2013.5451%2063.1439%2011.0128%2067.5138%2011.0128C69.9492%2011.0128%2071.3309%2011.7769%2072.4762%2013.2341L75.4978%2010.4581C73.6527%207.82715%2070.4323%207.02979%2067.4087%207.02979C60.6107%207.02708%2057.0362%2010.7351%2057.0362%2017.8125C57.0362%2024.8547%2060.266%2028.6723%2067.3723%2028.6723C70.6355%2028.6723%2073.8247%2027.8417%2075.5614%2026.6244V16.4251H67.1339L67.1338%2020.3456ZM46.3909%2024.2661H56.4545V28.36H41.5343V7.33832H46.3913L46.3909%2024.2661Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4968%2029.43C35.8453%2023.0815%2035.8449%2012.7878%2029.4961%206.44074C23.1474%200.0925049%2012.854%200.0917411%206.50687%206.44012C0.158384%2012.7885%200.158766%2023.0823%206.5075%2029.4294C12.8561%2035.7781%2023.1497%2035.7783%2029.4968%2029.43Z'%20fill='%23242424'/%3e%3cpath%20d='M13.0698%2014.7643C13.4404%2014.7625%2013.8023%2014.6509%2014.1096%2014.4436C14.4169%2014.2364%2014.6559%2013.9428%2014.7965%2013.5998C14.9372%2013.2568%2014.973%2012.8798%2014.8996%2012.5165C14.8261%2012.1531%2014.6467%2011.8197%2014.384%2011.5583C14.1212%2011.2968%2013.7868%2011.119%2013.4232%2011.0474C13.0596%2010.9757%2012.6828%2011.0134%2012.3405%2011.1556C11.9982%2011.298%2011.7057%2011.5384%2011.4999%2011.8468C11.2942%2012.1551%2011.1845%2012.5174%2011.1845%2012.8881C11.185%2013.1351%2011.2342%2013.3796%2011.3293%2013.6075C11.4245%2013.8355%2011.5635%2014.0425%2011.7385%2014.2167C11.9136%2014.3909%2012.1213%2014.5289%2012.3497%2014.6229C12.5781%2014.7169%2012.8228%2014.7649%2013.0698%2014.7643ZM30.2643%2018.4501H21.9973V17.2255H31.4759C31.4889%2017.4627%2031.4953%2017.6998%2031.4953%2017.9398C31.4953%2025.3134%2025.4857%2031.2907%2018.0744%2031.2907C10.6628%2031.2907%204.65222%2025.3171%204.65222%2017.9398C4.65222%2010.5631%2010.6609%204.58887%2018.0731%204.58887C18.2688%204.58887%2018.4635%204.59282%2018.6572%204.60084V5.81624C18.4635%205.8076%2018.2694%205.80333%2018.0749%205.80333C11.3382%205.80333%205.87505%2011.2371%205.87505%2017.9385C5.87505%2024.6401%2011.3375%2030.0749%2018.0749%2030.0749C24.6272%2030.0749%2029.98%2024.9337%2030.2633%2018.4842L30.2643%2018.4501ZM21.9785%2023.5518H18.6561V11.0698H17.4278V24.7847H18.659V24.7765H21.9813L21.9785%2023.5518Z'%20fill='white'/%3e%3c/svg%3e",dy="/assets/5-DtA_MHfM.svg",fy="/assets/6-BYfTVs51.svg",hy="/assets/7-DtKFqDn5.svg",py="/assets/8-C9mdpuht.svg",my="/assets/9-1he0Czj8.svg",gy="data:image/svg+xml,%3csvg%20width='191'%20height='24'%20viewBox='0%200%20191%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_699)'%3e%3cmask%20id='mask0_277_699'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='190'%20height='56'%3e%3cpath%20d='M0.970825%2055.6831H189.922V0.547134H0.970825V55.6831Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_277_699)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.577%2023.4158H132.473L121.526%200.547155L110.577%2023.4158ZM188.424%2021.6962C188.63%2021.6962%20188.752%2021.5893%20188.752%2021.4207C188.752%2021.2342%20188.63%2021.1372%20188.424%2021.1372H188.012V21.6962H188.424ZM187.698%2020.8347H188.438C188.656%2020.8347%20188.827%2020.9045%20188.941%2021.0255C189.027%2021.1134%20189.076%2021.2395%20189.076%2021.3932C189.076%2021.6871%20188.92%2021.8643%20188.692%2021.9332L189.138%2022.6008H188.761L188.359%2021.9899H188.012V22.6008H187.698V20.8347ZM189.754%2021.7662C189.754%2020.9234%20189.146%2020.2473%20188.342%2020.2473C187.531%2020.2473%20186.917%2020.9317%20186.917%2021.7662C186.917%2022.6098%20187.526%2023.2846%20188.332%2023.2846C189.142%2023.2846%20189.754%2022.6008%20189.754%2021.7662ZM186.751%2021.775C186.751%2020.8478%20187.452%2020.0793%20188.342%2020.0793C189.23%2020.0793%20189.921%2020.8385%20189.921%2021.7569C189.921%2022.6846%20189.22%2023.4526%20188.332%2023.4526C187.444%2023.4526%20186.751%2022.6932%20186.751%2021.775ZM151.36%2012.3135V4.9244H156.648C159.337%204.9244%20160.934%206.2121%20160.934%208.57187C160.934%2010.867%20159.277%2012.3135%20156.679%2012.3135H151.36ZM159.692%2015.0823C162.586%2014.2016%20164.626%2012.0321%20164.626%208.41529C164.626%206.43127%20164.004%204.79723%20162.913%203.6014C161.582%202.21991%20159.542%201.40306%20156.945%201.40306H147.725V23.4158H151.36V15.7434H155.851L160.99%2023.4158H165.277L159.692%2015.0823ZM105.299%2012.4711C105.299%2016.7781%20102.461%2019.8896%2098.1221%2019.8896H94.0439V4.9244H98.1221C102.461%204.9244%20105.299%208.1%20105.299%2012.4075V12.4711ZM98.1221%201.40306H90.4052V23.4158H98.1221C104.62%2023.4158%20109.115%2018.604%20109.115%2012.4075C109.115%206.14909%20104.62%201.40306%2098.1221%201.40306ZM79.4093%2012.3915V23.4158H83.0453V1.40306H79.4093V12.3915ZM44.2722%2012.0246V23.4158H47.9065V1.40306H44.2722V12.0246ZM25.0175%2012.3135V4.9244H30.3084C32.996%204.9244%2034.5916%206.2121%2034.5916%208.57187C34.5916%2010.867%2032.9373%2012.3135%2030.3371%2012.3135H25.0175ZM33.351%2015.0823C36.2451%2014.2016%2038.2857%2012.0321%2038.2857%208.41529C38.2857%206.43127%2037.6644%204.79723%2036.5719%203.6014C35.2423%202.21991%2033.2018%201.40306%2030.6049%201.40306H21.3849V23.4158H25.0175V15.7434H29.5103L34.6509%2023.4158H38.9361L33.351%2015.0823ZM0.969482%2023.4158H4.60254V14.4522H16.359V10.9338H4.60254V4.9244H16.3646V1.40306H0.969482V23.4158ZM174.298%2019.9561V14.0421H185.997V10.5833H174.298V4.85948H185.997V1.40306H170.664V23.4158H186.002V19.9561H174.298ZM64.0979%2014.1057H69.3824V18.2267C68.1161%2019.2327%2066.3419%2019.8914%2064.3926%2019.8914C60.1678%2019.8914%2057.3605%2016.5598%2057.3605%2012.0321C57.3605%207.7529%2060.2547%204.20078%2064.0658%204.20078C66.697%204.20078%2068.2605%205.11279%2069.8567%206.55844L72.1616%203.63164C70.0378%201.71514%2067.8157%200.646822%2064.215%200.646822C57.9797%200.646822%2053.5473%205.86821%2053.5473%2012.0321C53.5473%2018.508%2057.8041%2023.4158%2064.2719%2023.4158C67.9364%2023.4158%2070.8605%2021.8424%2072.901%2019.9855V10.7377H64.0979V14.1057ZM136.715%2012.3915V23.4158H140.35V1.40306H136.715V12.3915Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M116.09%2019.8828L121.504%208.2977L126.96%2019.8828H116.09Z'%20fill='%23ED114C'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_699'%3e%3crect%20width='190'%20height='24'%20fill='white'%20transform='translate(0.446045)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",xy="data:image/svg+xml,%3csvg%20width='197'%20height='18'%20viewBox='0%200%20197%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2176%206.82621L22.529%201.22314H16.5098L12.2064%206.67151C11.7989%207.13951%2011.0096%207.47882%2010.4092%207.47882H9.40262V1.22314H1.12445V16.224H9.37546V11.622H10.6836C11.2827%2011.622%2011.5815%2011.7793%2011.9089%2012.3526L14.2236%2016.224H24.1903L19.5608%208.70343C19.1791%208.07942%2018.144%207.55682%2017.0559%207.55682C16.7842%207.55682%2016.5098%207.58412%2017.2176%206.82621Z'%20fill='%23242424'/%3e%3cpath%20d='M26.857%2016.2085H34.6475V7.50488H26.857V16.2085Z'%20fill='%23242424'/%3e%3cpath%20d='M30.8807%206.77201C33.0351%206.62641%2034.7114%205.5539%2034.6258%204.37608C34.5375%203.19957%2032.7213%202.36106%2030.5683%202.50666C28.4138%202.65226%2026.7375%203.72478%2026.8245%204.89999C26.9114%206.0778%2028.7276%206.91501%2030.8807%206.77201Z'%20fill='%23242424'/%3e%3cpath%20d='M37.6958%207.45174H40.3107V4.5332H47.6625V7.45174H50.7135V10.3183H47.7725V12.0382C47.7725%2013.7581%2049.8414%2013.6528%2050.7665%2012.8741V15.322C47.9355%2016.5206%2043.2789%2016.8339%2041.4002%2015.608C40.4194%2014.958%2040.3107%2014.4354%2040.3107%2013.6528V10.3703H37.6958'%20fill='%23242424'/%3e%3cpath%20d='M68.658%207.9481C64.6276%206.01888%2059.1396%206.35818%2056.4323%207.7661C52.0881%2010.0203%2052.1547%2013.6994%2056.3766%2015.7911C59.4262%2017.3043%2066.6693%2016.8857%2068.6309%2015.1658V12.7439C65.7456%2014.1505%2063.7378%2013.9464%2062.5316%2013.5512C60.6529%2012.9376%2060.6081%2010.3999%2063.0206%209.95402C64.5719%209.66802%2066.5348%209.69402%2068.658%2010.7626'%20fill='%23242424'/%3e%3cpath%20d='M71.2731%202.47656V16.2099H78.5976V11.9862C78.7063%209.32764%2082.1934%209.82295%2082.1934%2011.7795V16.2099H89.4894V10.7902C89.4894%208.23433%2084.6983%205.3678%2078.6533%208.28503L78.7606%202.47656'%20fill='%23242424'/%3e%3cpath%20d='M113.071%207.47901V16.2086H120.915V11.5182C120.915%209.90094%20124.454%209.12093%20124.454%2011.5702V16.1566H131.372V10.8408C131.372%208.34742%20127.651%205.12858%20120.915%208.44362V7.47901'%20fill='%23242424'/%3e%3cpath%20d='M159.285%2016.1994H167.072V7.49707H159.285V16.1994Z'%20fill='%23242424'/%3e%3cpath%20d='M163.31%206.76292C165.463%206.61862%20167.138%205.54741%20167.052%204.36699C166.967%203.19048%20165.149%202.35327%20162.995%202.49887C160.841%202.64317%20159.167%203.71569%20159.253%204.8922C159.338%206.07131%20161.154%206.90852%20163.31%206.76292Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M192.259%205.01547V4.03396H192.943C193.291%204.03396%20193.663%204.10806%20193.663%204.49937C193.663%204.98557%20193.284%205.01547%20192.861%205.01547H192.259ZM192.867%207.95871C194.431%207.95871%20195.768%206.79519%20195.768%205.20527C195.768%203.62836%20194.431%202.46484%20192.867%202.46484C191.286%202.46484%20189.952%203.62836%20189.952%205.20527C189.952%206.79519%20191.286%207.95871%20192.867%207.95871ZM190.528%205.20527C190.528%203.90396%20191.554%202.92245%20192.867%202.92245C194.166%202.92245%20195.192%203.90396%20195.192%205.20527C195.192%206.52739%20194.166%207.5011%20192.867%207.5011C191.554%207.5011%20190.528%206.52739%20190.528%205.20527ZM192.259%205.42238H192.836L193.711%206.79519H194.272L193.329%205.40158C193.815%205.34308%20194.188%205.09477%20194.188%204.52927C194.188%203.90396%20193.802%203.62836%20193.018%203.62836H191.759V6.79519H192.259'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.473%2010.6355H103.389C103.436%209.74884%20102.65%209.30554%20101.815%209.30554C101.119%209.30554%20100.473%209.88014%20100.473%2010.6355ZM110.405%2012.8741C105.449%2012.5088%20100.165%2012.8208%20100.165%2012.8208C101.689%2015.218%20107.9%2014.854%20109.967%2013.2901L109.75%2015.322C105.611%2017.6685%2092.9763%2017.5645%2092.7576%2012.0915C92.5647%207.25931%20100.056%206.56641%20101.689%206.56641C105.555%206.56641%20111.22%208.28633%20110.405%2012.8741Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.468%2010.2156L142.754%206.14911L144.606%2010.2156H140.468ZM133.088%2016.1709H137.335L139.161%2012.8221H145.805L147.386%2016.1709H157.459L149.617%201.25195H139.594C140.577%201.61726%20140.848%202.24126%20140.577%202.76127'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.031%2010.6563C179.721%209.72548%20177.203%209.95819%20177.203%2011.448C177.203%2013.5878%20180.193%2013.2147%20181.031%2012.5634V10.6563ZM188.395%202.5V16.1567H181.044V15.218C177.395%2017.9286%20169.223%2016.4687%20169.223%2012.0915C169.223%206.72115%20178.1%205.99314%20181.095%207.86906V2.5'%20fill='%23242424'/%3e%3c/svg%3e",vy="data:image/svg+xml,%3csvg%20width='197'%20height='26'%20viewBox='0%200%20197%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M193.375%207.13851V7.56954H192.736V9.81922H192.298V7.56954H191.672V7.13851H193.375ZM193.824%207.02196C193.837%207.03955%20193.86%207.07913%20193.903%207.13851C193.943%207.20008%20193.994%207.27265%20194.054%207.35842C194.115%207.44638%20194.181%207.54314%20194.256%207.6465C194.33%207.75206%20194.407%207.85982%20194.484%207.96757C194.56%208.07753%20194.635%208.18308%20194.709%208.28864C194.784%208.39419%20194.85%208.48876%20194.909%208.57453C194.969%208.6603%20195.02%208.73286%20195.06%208.79004C195.101%208.84722%20195.126%208.8846%20195.137%208.89779C195.141%208.8912%20195.165%208.85821%20195.201%208.80543C195.237%208.75046%20195.286%208.68008%20195.344%208.59652C195.403%208.51295%20195.469%208.41839%20195.541%208.31063C195.616%208.20508%20195.693%208.09511%20195.769%207.98516C195.848%207.8752%20195.925%207.76525%20195.999%207.65749C196.074%207.54974%20196.142%207.45078%20196.206%207.36282C196.267%207.27486%20196.32%207.20008%20196.365%207.13851L196.446%207.01976V9.81922H195.98V8.45138C195.98%208.43159%20195.984%208.41179%20195.988%208.3898C195.993%208.36781%20195.995%208.35462%20195.995%208.35022L195.137%209.6257C195.124%209.6125%20195.097%209.57072%20195.052%209.50475C195.005%209.43878%20194.95%209.35961%20194.884%209.26944C194.822%209.17928%20194.754%209.08032%20194.684%208.97696C194.611%208.8736%20194.545%208.77684%20194.484%208.68667C194.42%208.59651%20194.367%208.52175%20194.322%208.45797C194.279%208.3964%20194.254%208.35901%20194.252%208.34802C194.252%208.35241%20194.252%208.36561%20194.258%208.3876C194.262%208.40959%20194.264%208.43159%20194.264%208.44918V9.81702H193.826V7.01756L193.824%207.02196ZM186.838%2013.87L183.252%2017.4633L179.74%2013.848V20.2804H176.92V7.09892H177.542L183.256%2012.8584L189.056%207.09892H189.659V20.2804H186.838V13.8678V13.87ZM58.3087%2013.87L54.7245%2017.4633L51.2126%2013.848V20.2804H48.3925V7.09892H49.014L54.7287%2012.8584L60.5286%207.09892H61.1288V20.2804H58.3087V13.8678V13.87ZM67.1671%2013.793C67.1671%2010.0721%2069.6999%207.02196%2073.8673%207.02196C78.0347%207.02196%2080.6101%2010.0721%2080.6101%2013.793C80.6101%2017.5139%2078.0773%2020.5641%2073.8673%2020.5641C69.6573%2020.5641%2067.1671%2017.5139%2067.1671%2013.793ZM77.4664%2013.793C77.4664%2011.5433%2075.8957%2010.0501%2073.8652%2010.0501C71.8347%2010.0501%2070.3065%2011.5433%2070.3065%2013.793C70.3065%2016.0427%2071.8772%2017.5359%2073.8652%2017.5359C75.8531%2017.5359%2077.4664%2016.0427%2077.4664%2013.793ZM98.28%2020.2826H97.7841L89.6621%2013.5247V20.2826H86.842V7.10113H87.3379L95.4599%2013.9799V7.12311H98.28V20.2826ZM104.514%2013.793C104.514%2010.0721%20107.049%207.02196%20111.214%207.02196C115.38%207.02196%20117.955%2010.0721%20117.955%2013.793C117.955%2017.5139%20115.422%2020.5641%20111.214%2020.5641C107.006%2020.5641%20104.514%2017.5139%20104.514%2013.793ZM114.816%2013.793C114.816%2011.5433%20113.245%2010.0501%20111.214%2010.0501C109.184%2010.0501%20107.656%2011.5433%20107.656%2013.793C107.656%2016.0427%20109.226%2017.5359%20111.214%2017.5359C113.202%2017.5359%20114.816%2016.0427%20114.816%2013.793ZM130.232%2012.5593H135.97V14.0085C135.97%2017.7954%20133.98%2020.5641%20129.961%2020.5641C125.943%2020.5641%20123.436%2017.5139%20123.436%2013.793C123.436%2010.0721%20125.775%207.02196%20129.961%207.02196C133.29%207.02196%20134.584%208.82742%20134.584%208.82742L132.843%2011.1277C132.843%2011.1277%20131.7%2010.0281%20129.921%2010.0281C127.89%2010.0281%20126.383%2011.5433%20126.383%2013.793C126.383%2016.0427%20127.89%2017.5579%20129.921%2017.5579C131.721%2017.5579%20132.664%2016.4319%20132.705%2015.1565V15.0267H130.234V12.5615L130.232%2012.5593ZM142.131%207.12311H147.861C151.043%207.12311%20152.805%208.99015%20152.805%2011.8226C152.805%2013.6391%20152.009%2014.9366%20150.711%2015.6952L150.577%2015.781L153.538%2020.0649V20.2804H150.277L147.806%2016.4935H144.896V20.2804H142.055L142.127%207.12091L142.131%207.12311ZM147.661%2010.0061H144.898V13.8986H147.682C149.085%2013.8986%20149.86%2013.2498%20149.86%2011.9524C149.86%2010.6549%20149.064%2010.0061%20147.661%2010.0061ZM164.552%207.10113H165.054L171.65%2020.2826H168.215L167.413%2018.5761H162.155L161.391%2020.2826H157.979L164.554%207.10113H164.552ZM164.782%2012.6143L163.056%2016.3704H166.491L164.782%2012.6143ZM4.175%200.635742L1.20588%207.51456H7.11645L14.1721%2023.8891L18.2267%2014.4791L12.2608%200.637943H4.17287L4.175%200.635742ZM25.2355%200.686331L21.1937%2010.0589L27.7896%2025.3647H35.8796L25.2355%200.686331ZM4.14094%2016.7948L0.446045%2025.3647H7.83585L4.14094%2016.7948Z'%20fill='%23242424'/%3e%3c/svg%3e",yy="/assets/13-_M_Krupi.svg",wy="data:image/svg+xml,%3csvg%20width='121'%20height='22'%20viewBox='0%200%20121%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M107.367%209.97166V12.1049H110.751V9.97166C110.751%209.05838%20109.987%208.29571%20109.073%208.29571C108.128%208.29571%20107.367%209.05838%20107.367%209.97166ZM116.359%206.95413C111.755%204.66888%20106.94%204.51551%20102.215%206.5272C98.3145%208.17275%2096.4866%2012.6852%2098.1612%2016.587C99.015%2018.5987%20100.446%2019.9997%20102.49%2020.7624C107.154%2022.5295%20111.755%2022.4079%20116.297%2020.3354C118.278%2019.4512%20119.651%2017.988%20120.382%2015.9459H114.408C113.737%2018.0806%20111.451%2019.2978%20109.289%2018.6291C109.105%2018.5683%20108.95%2018.5061%20108.739%2018.4149C107.884%2018.0184%20107.367%2017.1963%20107.367%2016.2513V14.7273H120.534C120.929%2011.4652%20119.314%208.44631%20116.359%206.95413ZM69.6909%209.97166C69.6909%209.05838%2068.9614%208.29571%2068.0177%208.29571C67.1017%208.29571%2066.3418%209.05838%2066.3418%209.97166V12.1049H69.6909V9.97166ZM79.4771%2014.7273C79.8736%2011.4652%2078.2571%208.44631%2075.3018%206.95413C70.7285%204.66888%2065.883%204.51551%2061.1592%206.5272C57.256%208.17275%2055.4599%2012.6852%2057.1026%2016.587C57.9565%2018.5987%2059.4197%2019.9997%2061.4618%2020.7624C66.0958%2022.5295%2070.7285%2022.4079%2075.2714%2020.3354C77.2209%2019.4512%2078.5942%2017.988%2079.3251%2015.9459H73.3495C72.7098%2018.0806%2070.4245%2019.2978%2068.2581%2018.6291C68.0771%2018.5683%2067.8933%2018.5061%2067.7123%2018.4149C66.8571%2018.0184%2066.3418%2017.1963%2066.3418%2016.2513V14.7273H79.4771ZM82.8884%2017.8968V4.21155H80.5133V0.85828H94.1696V17.8968H96.5764V21.2501H80.5133V17.8968H82.8884ZM46.2829%205.52136L51.1919%202.96115L49.6362%200.00441933L44.7286%202.53422L46.2829%205.52136ZM53.1428%2017.8968V5.91789H39.9439V9.27116H42.3494V17.8968H39.9439V21.2501H55.5483V17.8968H53.1428ZM20.0081%208.81383L25.771%200.85828H37.7803V4.21155H35.372V17.8968H37.7803V21.2501H22.1731V17.8968H24.5814V9.02661L15.7112%2021.2501L6.81057%209.02661V17.8968H9.21878V21.2501H0.59314V17.8968H2.96958V4.21155H0.59314V0.85828H14.2176L20.0081%208.81383Z'%20fill='%23242424'/%3e%3c/svg%3e",by="/assets/15-VL89vzXY.svg",Sy="/assets/16-D9KRuHZe.svg",Cy="/assets/17-BRD6G3-l.svg",Ty="/assets/18-D69HL7ID.svg",Ey="/assets/19-Dos04ydj.svg",Ay="/assets/21-BwEZSGFZ.svg",My="/assets/22-CQ_f5juP.svg",jy="data:image/svg+xml,%3csvg%20width='160'%20height='26'%20viewBox='0%200%20160%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.01%2019.347L131.698%201.45459H137.34V24.006H129.228L123.598%205.49849H123.477L123.789%2024.006H118.183V1.45459H126.647L131.884%2019.347H132.01Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4529%203.56613L26.3316%2024.2433H20.1786L24.4041%201.45459H34.5405L38.7466%2024.2433H32.6178L29.5813%203.56613H29.4529Z'%20fill='%23242424'/%3e%3cpath%20d='M53.0771%2024.2433L49.2656%203.75501H49.1421L48.9993%2024.2433H43.2918L43.7955%201.45459H53.094L55.9078%2018.8748H56.0289L58.8451%201.45459H68.1388L68.6328%2024.2433H62.9374L62.7873%203.75501H62.6686L58.8596%2024.2433H53.0771Z'%20fill='%23242424'/%3e%3cpath%20d='M10.5821%2017.8141C10.8048%2018.3662%2010.737%2019.0757%2010.6329%2019.5043C10.4416%2020.2622%209.92826%2021.0347%208.4124%2021.0347C6.98372%2021.0347%206.11683%2020.2162%206.11683%2018.9643V16.7583H0.00497197L0.00012207%2018.5236C0.00012207%2023.6039%204.00044%2025.1367%208.28648%2025.1367C12.4079%2025.1367%2015.8028%2023.7274%2016.3428%2019.9305C16.6188%2017.9618%2016.413%2016.6736%2016.3186%2016.1869C15.3572%2011.4165%206.70767%209.99269%206.06355%207.3242C5.95458%206.86654%205.98606%206.38224%206.03933%206.12314C6.19673%205.39669%206.69556%204.59517%208.12182%204.59517C9.45364%204.59517%2010.2406%205.41848%2010.2406%206.66313C10.2406%207.08205%2010.2406%208.07002%2010.2406%208.07002H15.9239V6.46941C15.9239%201.50535%2011.4683%200.730469%208.24047%200.730469C4.18689%200.730469%200.874285%202.06956%200.268911%205.77929C0.10425%206.80358%200.0800345%207.71648%200.319761%208.85943C1.315%2013.516%209.41006%2014.8647%2010.5821%2017.8141Z'%20fill='%23242424'/%3e%3cpath%20d='M84.685%2017.773C84.9102%2018.3203%2084.8375%2019.0104%2084.7358%2019.439C84.5494%2020.1945%2084.0408%2020.9549%2082.5347%2020.9549C81.1254%2020.9549%2080.2657%2020.1364%2080.2657%2018.9135L80.2609%2016.7269H74.212L74.2047%2018.468C74.2047%2023.4974%2078.1687%2025.0157%2082.4112%2025.0157C86.489%2025.0157%2089.8524%2023.6258%2090.3827%2019.8628C90.6588%2017.9086%2090.4626%2016.6373%2090.3633%2016.1603C89.4069%2011.4335%2080.8444%2010.0242%2080.2076%207.38237C80.0986%206.92713%2080.1301%206.44768%2080.1858%206.20311C80.348%205.47181%2080.8372%204.68967%2082.2489%204.68967C83.5686%204.68967%2084.3387%205.49361%2084.3387%206.72857C84.3387%207.14265%2084.3387%208.12093%2084.3387%208.12093H89.9783V6.53727C89.9783%201.62648%2085.5591%200.856445%2082.3627%200.856445C78.3552%200.856445%2075.0692%202.17858%2074.4759%205.86168C74.3113%206.87144%2074.2943%207.76739%2074.5292%208.90549C75.5099%2013.5136%2083.5251%2014.8527%2084.685%2017.773Z'%20fill='%23242424'/%3e%3cpath%20d='M103.827%2020.8337C105.408%2020.8337%20105.902%2019.7392%20106.011%2019.1799C106.057%2018.9329%20106.069%2018.6035%20106.064%2018.3081V1.44482H111.827V17.7923C111.839%2018.2113%20111.798%2019.0733%20111.779%2019.2888C111.374%2023.5434%20108.011%2024.9236%20103.824%2024.9236C99.6326%2024.9236%2096.2667%2023.5434%2095.8671%2019.2888C95.8478%2019.0733%2095.8066%2018.2113%2095.8187%2017.7923V1.44482H101.577V18.3081C101.577%2018.6035%20101.587%2018.9353%20101.63%2019.1799C101.754%2019.7392%20102.233%2020.8337%20103.827%2020.8337Z'%20fill='%23242424'/%3e%3cpath%20d='M151.365%2020.5938C153.017%2020.5938%20153.593%2019.5502%20153.7%2018.9424C153.741%2018.6809%20153.753%2018.3636%20153.751%2018.0755V14.7677H151.411V11.4406H159.492V17.5573C159.487%2017.9835%20159.477%2018.2983%20159.41%2019.0586C159.029%2023.2042%20155.433%2024.6837%20151.394%2024.6837C147.348%2024.6837%20143.757%2023.2042%20143.372%2019.0586C143.307%2018.2983%20143.297%2017.9835%20143.29%2017.5573L143.295%207.96089C143.295%207.5565%20143.345%206.83974%20143.389%206.45957C143.895%202.20016%20147.348%200.82959%20151.394%200.82959C155.436%200.82959%20158.974%202.19289%20159.393%206.45957C159.468%207.18601%20159.443%207.96089%20159.443%207.96089V8.72124H153.697V7.44511C153.702%207.44754%20153.69%206.9027%20153.622%206.57822C153.525%206.07455%20153.087%204.91707%20151.351%204.91707C149.69%204.91707%20149.203%206.01159%20149.082%206.57822C149.012%206.87848%20148.985%207.2853%20148.985%207.65336V18.0755C148.98%2018.3636%20148.997%2018.6809%20149.043%2018.9424C149.142%2019.5526%20149.716%2020.5938%20151.365%2020.5938Z'%20fill='%23242424'/%3e%3c/svg%3e",Ry="/assets/24-Dmws8xhr.svg",Oy="/assets/25-BaRLqQy_.svg",Ly="/assets/26-B2H6SqHt.svg",_y="/assets/27-DBraEacE.svg",ky="data:image/svg+xml,%3csvg%20width='112'%20height='33'%20viewBox='0%200%20112%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_720)'%3e%3cpath%20d='M77.422%2013.2852C76.096%2013.3501%2073.7527%2014.0702%2073.2182%2016.3711L71.3498%2027.2529C70.9268%2029.6026%2072.0997%2032.2635%2074.6194%2032.2878H88.6321C90.433%2032.2608%2092.5012%2031.6842%2092.9916%2028.8771L95.0157%2017.508C95.3946%2015.2206%2093.8791%2013.3501%2091.7461%2013.2852H77.422Z'%20fill='%23242424'/%3e%3cpath%20d='M79.1346%2018.6451C78.1641%2018.5991%2077.8891%2018.9591%2077.7334%2019.4572L76.6435%2025.3041C76.5786%2026.1487%2077.0613%2027.0122%2077.8891%2027.0907H86.7638C87.6071%2027.0122%2088.2974%2026.4383%2088.4765%2025.629L89.4106%2020.2692C89.6753%2019.3191%2089.1927%2018.6018%2088.3208%2018.6451H79.1346Z'%20fill='white'/%3e%3cpath%20d='M70.5738%2018.6455H57.8067C56.8673%2018.5995%2056.5896%2018.9595%2056.4054%2019.4576L55.4712%2025.3046C55.2818%2026.1491%2055.7644%2027.0126%2056.7168%2027.0911H69.0168L68.0826%2032.2885H53.2915C50.8029%2032.2614%2049.63%2029.6005%2050.0218%2027.2536L52.0459%2016.3717C52.4559%2014.0681%2054.7991%2013.3507%2056.094%2013.2858H71.508L70.5738%2018.6455ZM43.48%2018.6455H31.0242L31.9584%2013.2858H45.9711C48.5245%2013.3507%2049.6949%2016.0117%2049.2407%2018.3207L47.3724%2029.2025C46.8716%2031.544%2044.5283%2032.2614%2043.1686%2032.2885H29.9344C27.3628%2032.2614%2026.1924%2029.6005%2026.6647%2027.2536L27.2875%2023.1932C27.778%2020.83%2030.1212%2020.11%2031.4913%2020.1072H43.1686C44.0457%2020.11%2044.7359%2018.6022%2043.48%2018.6455ZM25.7305%2018.6455H28.5331L29.4673%2013.2858H26.6647L28.8445%200.29248H23.8622L21.6824%2013.2858H7.51402C6.13351%2013.3507%203.79028%2014.0708%203.31021%2016.3717L1.44185%2027.2536C0.964382%2029.6032%202.1347%2032.2641%204.71148%2032.2885H20.9039C22.0561%2032.2614%2023.5015%2031.184%2023.7065%2029.5274L25.7305%2018.6455Z'%20fill='%23242424'/%3e%3cpath%20d='M7.98386%2027.0908C7.10158%2027.0123%206.61892%2026.1488%206.73829%2025.3042L7.82557%2019.4572C7.92677%2018.9592%208.20184%2018.6018%209.07115%2018.6452H20.7484L19.1914%2027.0908H7.98386Z'%20fill='white'/%3e%3cpath%20d='M103.268%2014.9093L104.513%2013.7724C105.115%2013.3501%20105.803%2013.3501%20106.537%2013.2852H111.052L110.118%2018.6449H105.136C103.875%2018.5989%20102.152%2019.2485%20101.866%2021.0811L99.8423%2032.2878H94.7043L98.1296%2013.2852H102.645L103.268%2014.9093Z'%20fill='%23242424'/%3e%3cpath%20d='M32.4256%2027.0908C31.6368%2027.0123%2031.4993%2025.3583%2032.737%2025.3042H43.013L42.7016%2027.0908H32.4256Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_720'%3e%3crect%20width='109.714'%20height='32'%20fill='white'%20transform='translate(1.33813%200.290039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Dy="/assets/29-yivH26vR.svg",Vy="/assets/30-DGc1459t.svg",zy="data:image/svg+xml,%3csvg%20width='121'%20height='36'%20viewBox='0%200%20121%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.45829%2023.2381H3.99829L2.66629%2018.1861H9.61429L21.9503%200.810059H31.3103L28.9703%2018.1261L41.9903%2018.1859L42.5663%2018.8819C45.6863%2016.7461%2049.8983%2016.7461%2051.4101%2019.4461C53.4981%2017.1899%2058.1781%2017.0579%2059.7621%2019.9499C60.3621%2021.0657%2060.2661%2022.5421%2059.7621%2024.3181L57.8663%2030.3901C57.9863%2031.0141%2058.6823%2032.4061%2056.9783%2032.4061H50.3423L52.4903%2025.7101C53.0543%2023.7419%2050.6543%2023.7419%2050.0903%2025.6499L48.0023%2032.3462H41.1743L43.2623%2025.5181C43.8863%2023.5621%2041.3543%2023.5621%2040.8503%2025.5779L38.7623%2032.2859H31.6223L33.8303%2025.1339C33.9623%2024.6301%2033.9023%2024.1859%2032.9543%2024.1859H28.1423L27.0743%2032.2501L16.7663%2032.2859L18.1583%2024.1859H12.1463L4.87429%2035.1897L0.446289%2031.7101L6.45829%2023.2381ZM16.0103%2018.1741L19.2023%2018.2102L20.3063%2011.8022L16.0103%2018.1741ZM107.222%2032.5262C105.578%2033.0301%20102.794%2033.3541%20101.222%2031.9621C99.6383%2030.5701%2099.5785%2027.1499%20100.526%2024.6899C101.786%2021.3419%20104.066%2018.2459%20107.474%2017.7421C109.694%2017.4301%20112.406%2018.3061%20113.99%2019.6981L114.302%2018.6899H120.446L116.642%2030.9539C116.894%2031.5779%20117.47%2032.4659%20116.138%2032.4659H109.694L110.042%2031.2661C109.214%2031.7342%20108.242%2032.2739%20107.222%2032.5262ZM107.042%2026.6821C107.198%2026.9341%20107.582%2027.2579%20108.278%2027.0059C109.514%2026.5859%20111.662%2024.5701%20112.01%2023.1419C111.122%2021.8817%20109.862%2021.5937%20108.53%2022.7341C107.774%2023.3941%20106.514%2025.7701%20107.042%2026.6821ZM62.1505%2031.9621C60.5665%2030.5701%2060.5063%2027.2222%2061.4545%2024.6899C62.6543%2021.3419%2064.9941%2018.2459%2068.4145%2017.7541C70.6225%2017.4421%2073.3465%2018.3061%2074.9305%2019.6981L75.2423%2018.6899H81.3745L77.5825%2030.9539C77.8345%2031.5899%2078.3985%2032.4659%2077.0786%2032.4659H70.6226L70.9706%2031.3379C70.1546%2031.8061%2069.1346%2032.2859%2068.1626%2032.5377C66.5183%2032.9819%2063.7345%2033.3541%2062.1505%2031.9621ZM68.2465%2026.6821C68.3783%2026.9702%2068.8223%2027.2579%2069.4825%2027.0059C70.7185%2026.5619%2072.8663%2024.5701%2073.2143%2023.1419C72.3263%2021.8817%2071.0903%2021.5339%2069.7345%2022.7341C69.0385%2023.3699%2067.8025%2025.6741%2068.2465%2026.6821ZM86.6181%2032.3342L88.7063%2025.6382C89.2821%2023.7421%2091.5503%2023.6822%2090.9863%2025.6382L89.0901%2032.4061H95.5943C97.3101%2032.4061%2096.6141%2031.0141%2096.4823%2030.3781L98.3781%2024.3061C98.882%2022.5421%2098.9181%2021.4021%2098.2583%2020.2019C96.77%2017.5499%2092.4981%2017.4659%2090.0383%2019.6261L89.5943%2018.7501H83.966L79.7901%2032.3341H86.6181V32.3342Z'%20fill='%23242424'/%3e%3c/svg%3e",jD=[{id:1,imageUrl:ly},{id:2,imageUrl:Wm},{id:3,imageUrl:cy},{id:4,imageUrl:uy},{id:5,imageUrl:dy},{id:6,imageUrl:fy},{id:7,imageUrl:hy},{id:8,imageUrl:py},{id:9,imageUrl:my},{id:10,imageUrl:gy},{id:11,imageUrl:xy},{id:12,imageUrl:vy},{id:13,imageUrl:yy},{id:14,imageUrl:wy},{id:15,imageUrl:by},{id:16,imageUrl:Sy},{id:17,imageUrl:Cy},{id:18,imageUrl:Ty},{id:19,imageUrl:Ey},{id:20,imageUrl:Wm},{id:21,imageUrl:Ay},{id:22,imageUrl:My},{id:23,imageUrl:jy},{id:24,imageUrl:Ry},{id:25,imageUrl:Oy},{id:26,imageUrl:Ly},{id:27,imageUrl:_y},{id:28,imageUrl:ky},{id:29,imageUrl:Dy},{id:30,imageUrl:Vy},{id:31,imageUrl:zy}],RD=M.div`
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
`,OD=M.img`
  height: 32px;
  max-width: min-content;
  /* width: auto; */
  object-fit: contain;
  filter: brightness(1) invert(1);
  transition: all 0.3s ease;
  overflow: visible;
`,LD=M(Bi)`
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
`,_D=()=>x.jsx(RD,{children:x.jsx(LD,{direction:"vertical",slidesPerView:10,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:4e3,modules:[ia],grabCursor:!1,allowTouchMove:!1,children:jD.map(e=>x.jsx(Ii,{children:x.jsx(OD,{src:e.imageUrl,alt:`Partner ${e.id}`,onError:t=>{t.target.style.display="none"}})},e.id))})}),j6={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:ve}}},R6={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ve}}},kD=async(e,t)=>{const i=localStorage.getItem(t);if(i)return i;try{const o=await(await fetch(e)).blob();return new Promise(c=>{const f=new FileReader;f.onloadend=()=>{const h=f.result;try{localStorage.setItem(t,h),c(h)}catch{console.warn("LocalStorage quota exceeded, using original URL"),c(e)}},f.readAsDataURL(o)})}catch(a){return console.error("Failed to cache video:",a),e}},DD=()=>{const e=jt({query:"(min-width: 1440px)"}),t=jt({query:"(max-width: 1024px)"}),[i,a]=H.useState(!1),[o,c]=H.useState(!1),[,f]=H.useState(!1),[h,p]=H.useState(!1),[g,y]=H.useState(null),b=H.useRef(null),S=H.useRef(null),T=y2(S,{once:!0,margin:"-10%"});H.useEffect(()=>{T&&!i&&a(!0)},[T,i]),H.useEffect(()=>{(async()=>{try{const Y=await kD(rm,"cached_hero_video");y(Y)}catch(V){console.error("Video caching failed:",V),y(rm)}})()},[]);const{scrollY:E}=ko(),L=zn(E,[0,400],[0,e?80:t?20:40]),P=zn(E,[0,300],[1,.95]);H.useEffect(()=>{if(T&&b.current&&g){f(!0);const N=setTimeout(()=>{var V;o||(V=b.current)==null||V.load()},100);return()=>clearTimeout(N)}},[T,o,g]);const _=()=>{c(!0),f(!1),b.current&&b.current.play().catch(N=>{console.log("Auto-play was prevented:",N),p(!0)})},R=()=>{f(!1),p(!0),console.error("Video loading failed"),g&&g!==rm&&y(rm)},O=()=>{b.current&&b.current.play().then(()=>{p(!1)}).catch(N=>{console.log("Manual play failed:",N)})};return x.jsx(x.Fragment,{children:x.jsxs(AL,{id:"header",ref:S,children:[x.jsxs(W.div,{style:{y:L,opacity:P},children:[!o&&x.jsx(jL,{}),g&&x.jsxs(ML,{ref:b,muted:!0,loop:!0,playsInline:!0,preload:"none",onLoadedData:_,onError:R,style:{opacity:o?1:0},children:[x.jsx("source",{src:g,type:"video/mp4"}),x.jsx("source",{src:g.replace(".mov",".webm"),type:"video/webm"}),"Video loading failed."]}),h&&x.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:3},children:x.jsx("button",{onClick:O,style:{padding:"12px 24px",backgroundColor:"rgba(0,0,0,0.7)",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"16px"},children:"Play Video"})}),x.jsx(RL,{})]}),e&&x.jsx(W.div,{initial:{opacity:0,x:50},animate:i?{opacity:1,x:0}:{opacity:0,x:50},transition:{duration:.7,ease:"easeOut"},children:x.jsx(_D,{})}),x.jsxs(OL,{children:[x.jsxs(LL,{children:[x.jsx(W.div,{initial:"hidden",animate:i?"visible":"hidden",variants:j6,children:x.jsx(_L,{children:"THOUSAND OAKS APPLIANCE REPAIR"})}),x.jsx(W.div,{initial:"hidden",animate:i?"visible":"hidden",variants:j6,transition:{delay:.1},children:x.jsx(kL,{children:"We provide reliable appliance repair services, so your fridge, oven, or washer works like new — and you can get back to your day."})})]}),x.jsxs(DL,{children:[x.jsx(W.div,{initial:"hidden",animate:i?"visible":"hidden",variants:R6,children:x.jsx(gb,{to:"/contact#ap",children:"Contact Us"})}),x.jsx(W.div,{initial:"hidden",animate:i?"visible":"hidden",variants:R6,transition:{delay:.05},children:x.jsx(R8,{children:x.jsx("a",{href:"tel:+18055002705",children:"Call Us"})})})]})]})]})})},S2="/assets/News%20Article%202%20Image%20Container%20(3)-46MbbkbU.png",fh="/assets/Image3-DVPHBget.png",C2="/assets/News%20Article%202%20Image%20Container%20(4)-BgDGi8hw.png",T2="/assets/bosch-dishwasher-door-open-DswMTwMP.jpg",E2="/assets/tips-DqrVri1G.png",A2="/assets/News%20Article%202%20Image%20Container%20(7)-ml4_mJ5O.png",O6=[{id:1,image:A2,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:fh,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:C2,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:T2,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:E2,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:S2,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],L6={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ve}}},VD={hidden:{opacity:0,y:50,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.7,ease:ve}},hover:{y:-10,scale:1.02,boxShadow:"0 20px 40px rgba(0,0,0,0.15)",transition:{duration:.3,ease:ve}}},zD={hidden:{opacity:0,scale:1.1},visible:{opacity:1,scale:1,transition:{duration:.6,ease:ve}},hover:{scale:1.05,transition:{duration:.4}}},_6={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ve}}},HD=()=>{const e=H.useRef(null),t=jt({query:"(max-width: 767px)"}),i=jt({query:"(min-width: 768px)"}),a=t?1:i?2:3,o=O6.length>a,c=()=>{e.current&&e.current.slidePrev()},f=()=>{e.current&&e.current.slideNext()};return x.jsxs(ID,{children:[x.jsxs($D,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:L6,children:x.jsx(UD,{children:"NEWS & TIPS"})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:L6,transition:{delay:.1},children:x.jsxs(GD,{children:["APPLIANCE ",x.jsx("span",{children:"ADVICE"})," REPAIR ",x.jsx("span",{children:"TIPS"})," BLOG"]})})]}),x.jsxs(ND,{children:[x.jsx(Bi,{modules:[sy,ia],onSwiper:h=>e.current=h,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:600,loop:o,slidesPerView:a,centeredSlides:t,touchRatio:1.5,touchAngle:45,simulateTouch:!0,allowTouchMove:!0,children:O6.map((h,p)=>x.jsx(Ii,{children:x.jsx(PD,{to:h.path,children:x.jsx(W.div,{variants:VD,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:x.jsxs(FD,{children:[x.jsx(W.div,{variants:zD,whileHover:"hover",children:x.jsx(qD,{src:h.image,alt:h.title,loading:"lazy",decoding:"async"})}),x.jsxs(YD,{children:[x.jsx(W.div,{variants:_6,children:x.jsx(WD,{children:h.title})}),x.jsx(W.div,{variants:_6,children:x.jsx(ZD,{children:h.description})})]})]})})})},h.id))}),x.jsxs(BD,{children:[x.jsx(k6,{onClick:c,whileHover:{scale:1.1},whileTap:{scale:.95},children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(k6,{onClick:f,whileHover:{scale:1.1},whileTap:{scale:.95},children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})},PD=M(Hn)`
  text-decoration: none;
  display: block;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
`,ND=M.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: 100%;
    -webkit-tap-highlight-color: transparent;
  }
`,BD=M.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
  justify-content: flex-end;
`,k6=M(W.button)`
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
`,ID=M.div`
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
`,$D=M.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,UD=M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,GD=M.p`
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
`,FD=M.div`
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
`,qD=M.img`
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
`,YD=M.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 0;
`,WD=M.p`
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
`,ZD=M.p`
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
`,XD=M.div`
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
`,D6=M.img`
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
`,KD=M(W.div)`
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
`,QD=M(W.div)`
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
`,JD=M.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
  /* Запобігаємо виділенню тексту на тач-пристроях */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`,Bb="data:image/svg+xml,%3csvg%20width='212'%20height='14'%20viewBox='0%200%20212%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_572)'%3e%3cpath%20d='M0.00384521%2013.2272V0.640137H8.99637V3.40837H3.33527V5.99308H8.54597V8.76131H3.33527V13.2272H0.00384521Z'%20fill='%23242424'/%3e%3cpath%20d='M18.6412%2013.2272H15.3253V0.640137H18.6412V13.2272Z'%20fill='%23242424'/%3e%3cpath%20d='M25.0556%209.25083C26.3309%2010.122%2027.8304%2010.6204%2029.381%2010.6885C30.3595%2010.6885%2031.2758%2010.4591%2031.2758%209.61789C31.2758%209.02907%2030.8409%208.79966%2030.1964%208.61613L28.2628%208.08083C26.1117%207.44613%2024.9935%206.43671%2024.9935%204.44848C24.9935%202.0473%2027.1368%200.472008%2029.8858%200.472008C31.2634%200.447396%2032.6243%200.771251%2033.8385%201.4126V4.47142C32.6991%203.68452%2031.3471%203.2505%2029.9557%203.22495C28.9617%203.22495%2028.255%203.50789%2028.255%204.20377C28.255%204.71613%2028.6045%204.9226%2029.2723%205.12907L31.2059%205.7026C33.5356%206.42142%2034.5995%207.5073%2034.5995%209.39613C34.5995%2012.1032%2032.1223%2013.4949%2029.3732%2013.4949C27.8643%2013.4989%2026.378%2013.1337%2025.0478%2012.432L25.0556%209.25083Z'%20fill='%23242424'/%3e%3cpath%20d='M52.4525%200.640137V13.2272H49.1211V8.18778H44.2676V13.2272H40.8973V0.640137H44.2676V5.41955H49.1599V0.640137H52.4525Z'%20fill='%23242424'/%3e%3cpath%20d='M68.6747%200.640137V3.40837H62.9049V5.41955H68.2166V8.18778H62.9049V10.4819H68.7136V13.2501H59.5347V0.640137H68.6747Z'%20fill='%23242424'/%3e%3cpath%20d='M75.524%200.640137H80.9599C83.8098%200.640137%2085.9764%202.16955%2085.9764%204.98367C86.0132%205.85467%2085.761%206.71377%2085.2581%207.43116C84.7551%208.14856%2084.0287%208.68525%2083.1886%208.96014L86.5589%2013.2272H82.6761L79.6553%209.33484H78.8244V13.2272H75.524V0.640137ZM78.8554%206.55131H80.7657C81.9694%206.55131%2082.746%205.9319%2082.746%204.96837C82.746%204.00484%2081.9694%203.39308%2080.7657%203.39308H78.8709L78.8554%206.55131Z'%20fill='%23242424'/%3e%3cpath%20d='M106.485%2012.1795C105.502%2013.0123%20104.241%2013.4588%20102.944%2013.4337C100.242%2013.4337%2097.9897%2011.6901%2097.9897%208.84543C98.0077%208.02146%2098.2249%207.21358%2098.6233%206.48878C99.0217%205.76399%2099.5899%205.14316%20100.281%204.67778L99.007%203.14837V0.640137H107.549V3.40837H102.991L106.446%207.7519L107.223%206.56661H110.679L108.217%2010.0537L110.756%2013.2272H107.285L106.485%2012.1795ZM104.738%2010.0537L102.051%206.78837C101.716%207.01078%20101.442%207.31015%20101.251%207.66058C101.06%208.01101%20100.959%208.40194%20100.956%208.79955C100.953%209.05676%20101.003%209.31195%20101.102%209.54974C101.202%209.78752%20101.349%2010.003%20101.536%2010.1831C101.722%2010.3631%20101.944%2010.5042%20102.187%2010.5976C102.431%2010.691%20102.691%2010.7349%20102.952%2010.7266C103.28%2010.737%20103.607%2010.6828%20103.914%2010.5673C104.22%2010.4518%20104.501%2010.2771%20104.738%2010.0537Z'%20fill='%23242424'/%3e%3cpath%20d='M126.264%2013.2272H122.933V0.640137H128.369C131.219%200.640137%20133.385%202.16955%20133.385%204.98367C133.385%207.79778%20131.219%209.33484%20128.369%209.33484H126.264V13.2272ZM126.264%206.56661H128.136C129.347%206.56661%20130.116%205.9472%20130.116%204.98367C130.116%204.02014%20129.339%203.40837%20128.136%203.40837H126.241L126.264%206.56661Z'%20fill='%23242424'/%3e%3cpath%20d='M145.997%2010.9101H140.879L139.963%2013.2043H136.678L141.881%200.640137H145.049L150.252%2013.2272H146.897L145.997%2010.9101ZM141.982%208.1419H144.894L143.442%204.45602L141.982%208.1419Z'%20fill='%23242424'/%3e%3cpath%20d='M157.288%2013.2272V8.34837L152.457%200.640137H156.208L159.058%205.49602L161.908%200.640137H165.449L160.619%208.34837V13.2272H157.288Z'%20fill='%23242424'/%3e%3cpath%20d='M173.487%205.99308L177.571%200.640137H181.454L176.733%206.66602L181.64%2013.2272H177.688L173.487%207.59131V13.2272H170.155V0.640137H173.487V5.99308Z'%20fill='%23242424'/%3e%3cpath%20d='M195.751%200.640137V3.40837H189.934V5.41955H195.246V8.18778H189.934V10.4819H195.751V13.2501H186.603V0.640137H195.751Z'%20fill='%23242424'/%3e%3cpath%20d='M202.6%200.640137H205.931V10.459H211.678V13.2272H202.6V0.640137Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_572'%3e%3crect%20width='212'%20height='13'%20fill='white'%20transform='translate(0.00384521%200.433594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Ib=()=>{const e=jt({query:"(max-width: 743px)"}),t=jt({query:"(min-width: 744px) and (max-width: 1023px)"}),i=jt({query:"(min-width: 1024px)"}),a=[{id:1,imageUrl:ly},{id:2,imageUrl:Wm},{id:3,imageUrl:cy},{id:4,imageUrl:uy},{id:5,imageUrl:dy},{id:6,imageUrl:fy},{id:7,imageUrl:hy},{id:8,imageUrl:py},{id:9,imageUrl:my},{id:10,imageUrl:gy},{id:11,imageUrl:xy},{id:12,imageUrl:vy},{id:13,imageUrl:yy},{id:14,imageUrl:wy},{id:15,imageUrl:by},{id:16,imageUrl:Sy},{id:17,imageUrl:Cy},{id:18,imageUrl:Ty},{id:19,imageUrl:Ey},{id:20,imageUrl:Bb},{id:21,imageUrl:Ay},{id:22,imageUrl:My},{id:23,imageUrl:jy},{id:24,imageUrl:Ry},{id:25,imageUrl:Oy},{id:26,imageUrl:Ly},{id:27,imageUrl:_y},{id:28,imageUrl:ky},{id:29,imageUrl:Dy},{id:30,imageUrl:Vy},{id:31,imageUrl:zy}],o=e?2:t?4:5,c=a.length>o,f={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ve}}},h={hidden:{opacity:0,scale:.8,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.6,ease:ve}},hover:{scale:1.1,y:-5,transition:{duration:.3,ease:ve}}};return x.jsxs("div",{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:f,children:x.jsx(JD,{children:"Quality Service for Major & Luxury Brands"})}),x.jsxs(XD,{children:[x.jsx(KD,{}),x.jsx(Bi,{loop:c,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[ia],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},touchRatio:1,touchAngle:45,shortSwipes:!0,resistance:!0,resistanceRatio:.85,children:a.map((p,g)=>x.jsx(Ii,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10,touchAction:"pan-y",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none"},children:x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:h,transition:{delay:g*.05},whileHover:"hover",style:{WebkitTransform:"translateZ(0)",backfaceVisibility:"hidden"},children:x.jsx(D6,{src:p.imageUrl,alt:`Partner ${p.id}`,loading:"lazy",decoding:"async",onDragStart:y=>y.preventDefault(),draggable:"false"})})},p.id))}),x.jsx(Bi,{loop:c,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[ia],className:"mySwiper",style:{width:"100%"},touchRatio:1,touchAngle:45,shortSwipes:!0,resistance:!0,resistanceRatio:.85,children:a.map((p,g)=>x.jsx(Ii,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10,touchAction:"pan-y",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none"},children:x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:h,transition:{delay:g*.05+.1},whileHover:"hover",style:{WebkitTransform:"translateZ(0)",backfaceVisibility:"hidden"},children:x.jsx(D6,{src:p.imageUrl,alt:`Partner ${p.id}`,loading:"lazy",decoding:"async",onDragStart:y=>y.preventDefault(),draggable:"false"})})},p.id+100))}),x.jsx(QD,{})]})]})},eV="/assets/ServicesImage-BRQYmF9y.png",tV=M.div`
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
`,nV=M.p`
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
`,iV=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 3rem;
  }
`,aV=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  @media screen and (min-width: 1440px) {
    gap: 0.25rem;
  }
`,V6=M.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 0.75rem;
  }
`;M.p`
  color: #242424;
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`;const rV=M.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`,z6=M.p`
  color: #242424;
  font-family: var(--second-family);
  font-size: 28px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`,sV=M.p`
  color: #242424;
  font-family: var(--second-family);
  font-size: 28px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
`,oV=M.img`
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
`,H6=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  @media screen and (min-width: 1440px) {
    padding-top: 40%;
  }
`,P6=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4em;
  width: 100%;
`,Zm=M(Hn)`
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
`,N6=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  transition: color 0.2s ease;

  ${Zm}:hover &, ${Zm}:focus & {
    color: white;
  }
`,lV=M.div`
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
`,cV=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
`,uV=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
`,dV=M.p`
  color: var(--black-500);
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.4em;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`,fV=M.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  flex-wrap: wrap;
`,hV=M(Hn)`
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
`,Y3=M.button`
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
`,$b=M.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
`,pV=M($b)`
  color: #242424;
  transition: color 0.2s ease;

  ${Y3}:hover &, ${Y3}:focus & {
    color: white;
  }
`,mV=M.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`;M.div`
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
`;const Yx={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:ve}}},Wx={hidden:{opacity:0,x:-40},visible:{opacity:1,x:0,transition:{duration:.7,ease:ve}}},sm={hidden:{opacity:0,x:40},visible:{opacity:1,x:0,transition:{duration:.7,ease:ve}}},gV={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.8,ease:ve}}},xV={visible:{transition:{staggerChildren:.1}}},Ub=()=>{const e=jt({query:"(min-width: 1440px)"}),[t,i]=H.useState(!1),a=H.useRef(null),o=y2(a,{once:!0,margin:"-20%"});H.useEffect(()=>{o&&!t&&i(!0)},[o,t]);const{scrollY:c}=ko(),f=zn(c,[0,300],[0,e?-50:-20],{clamp:!1});return x.jsxs(tV,{ref:a,children:[x.jsx(W.div,{initial:"hidden",animate:t?"visible":"hidden",variants:Yx,children:x.jsx(nV,{children:"Our Service"})}),x.jsxs(iV,{children:[x.jsxs(aV,{children:[x.jsxs(W.div,{initial:"hidden",animate:t?"visible":"hidden",variants:xV,children:[x.jsx(W.div,{variants:Wx,children:x.jsx(V6,{children:x.jsx(rV,{children:"Appliance Care & Tune-Ups"})})}),x.jsx(W.div,{variants:Wx,children:x.jsx(z6,{children:"Professional Installations"})}),x.jsx(W.div,{variants:Wx,children:x.jsx(z6,{children:"Fast & Reliable Emergency Repairs"})})]}),e&&x.jsx(W.div,{initial:"hidden",animate:t?"visible":"hidden",variants:Yx,children:x.jsxs(H6,{children:[x.jsx(P6,{children:"Do you want to know more about our service?"}),x.jsx(Zm,{to:"/fridge#ap",children:x.jsx(N6,{children:"Learn more"})})]})})]}),x.jsxs(mV,{children:[x.jsx(W.div,{style:{y:f},initial:"hidden",animate:t?"visible":"hidden",variants:gV,children:x.jsx(oV,{src:eV,alt:"Services Image",loading:"lazy"})}),x.jsx(W.div,{initial:"hidden",animate:t?"visible":"hidden",variants:sm,children:x.jsxs(lV,{children:[x.jsxs(cV,{children:[x.jsx(W.div,{variants:sm,children:x.jsx(V6,{children:x.jsx(sV,{children:"Preventive Care"})})}),x.jsx(W.div,{variants:sm,children:x.jsx(uV,{children:x.jsx(dV,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})})]}),x.jsx(W.div,{variants:sm,children:x.jsxs(fV,{children:[x.jsx(hV,{to:"/contact#ap",children:x.jsx($b,{children:"Contact Us"})}),x.jsx(Y3,{children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(pV,{children:"Call Us"})})})]})})]})})]}),!e&&x.jsx(W.div,{initial:"hidden",animate:t?"visible":"hidden",variants:Yx,children:x.jsxs(H6,{children:[x.jsx(P6,{children:"Do you want to know more about our service?"}),x.jsx(Zm,{to:"/fridge#ap",children:x.jsx(N6,{children:"Learn more"})})]})})]})]})},vV="/assets/Service%20Area%20Section-B7et7wWI.webp",yV=M.div`
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
`,wV=M.h2`
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
`;M.p`
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
`;const bV=M.div`
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
`,SV=M.div`
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
`,CV=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,TV=M.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,EV=M.p`
  color: #3098ee;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,AV=M.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,MV=[{county:"Ventura County",city:"Thousand Oaks",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Newbury Park",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Westlake Village",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Oak Park",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Lake Sherwood",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Hidden Valley",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Camarillo",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Agoura Hills",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Moorpark",icon:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:x.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Calabasas",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Santa Rosa Valley",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Malibu",icon:x.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:x.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}],jV={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ve}}},RV={hidden:{opacity:0,y:50,scale:.9,rotateX:-5},visible:e=>({opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.6,delay:e*.1,ease:ve}}),hover:{y:-10,scale:1.05,rotateY:5,boxShadow:"0 20px 40px rgba(0,0,0,0.15)",transition:{duration:.3,ease:ve}},tap:{scale:.98}},OV={hidden:{opacity:0,scale:.8,rotate:-90},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.5,ease:qa}},hover:{scale:1.2,rotate:5,transition:{duration:.2}}},LV=()=>x.jsxs(yV,{$bg:vV,children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:jV,children:x.jsx(wV,{children:"Serving Ventura and Los Angeles Counties"})}),x.jsx(bV,{children:MV.map((e,t)=>x.jsx(W.div,{custom:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:RV,whileHover:"hover",whileTap:"tap",children:x.jsxs(SV,{children:[x.jsxs(CV,{children:[x.jsx(W.div,{variants:OV,whileHover:"hover",children:x.jsx(TV,{children:e.icon})}),x.jsx(W.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:t*.1+.2},children:x.jsx(EV,{children:e.county})})]}),x.jsx(W.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:t*.1+.3},children:x.jsx(AV,{children:e.city})})]})},t))})]}),_V="/assets/WhyAirtexnoImage-BBTHkk8n.png",Zx="/assets/WhyAirtexnoImage2-BIh43Sbv.png",B6="/assets/WhyAirtexnoImage3-C5uIh3SS.png",om="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2011H4.6C4.03995%2011%203.75992%2011%203.54601%2011.109C3.35785%2011.2049%203.20487%2011.3578%203.10899%2011.546C3%2011.7599%203%2012.0399%203%2012.6V21M16.5%2011H19.4C19.9601%2011%2020.2401%2011%2020.454%2011.109C20.6422%2011.2049%2020.7951%2011.3578%2020.891%2011.546C21%2011.7599%2021%2012.0399%2021%2012.6V21M16.5%2021V6.2C16.5%205.0799%2016.5%204.51984%2016.282%204.09202C16.0903%203.71569%2015.7843%203.40973%2015.408%203.21799C14.9802%203%2014.4201%203%2013.3%203H10.7C9.5799%203%209.01984%203%208.59202%203.21799C8.2157%203.40973%207.90973%203.71569%207.71799%204.09202C7.5%204.51984%207.5%205.0799%207.5%206.2V21M22%2021H2M11%207H13M11%2011H13M11%2015H13'%20stroke='%233098EE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",I6="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206V12L16%2014M22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";var D0={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var kV=D0.exports,$6;function DV(){return $6||($6=1,function(e,t){(function(){var i,a="4.17.21",o=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",f="Expected a function",h="Invalid `variable` option passed into `_.template`",p="__lodash_hash_undefined__",g=500,y="__lodash_placeholder__",b=1,S=2,T=4,E=1,L=2,P=1,_=2,R=4,O=8,N=16,V=32,Y=64,G=128,Q=256,ie=512,se=30,de="...",ye=800,Ae=16,Re=1,Ee=2,X=3,le=1/0,ue=9007199254740991,xe=17976931348623157e292,B=NaN,re=4294967295,we=re-1,be=re>>>1,Oe=[["ary",G],["bind",P],["bindKey",_],["curry",O],["curryRight",N],["flip",ie],["partial",V],["partialRight",Y],["rearg",Q]],Ue="[object Arguments]",_e="[object Array]",sn="[object AsyncFunction]",it="[object Boolean]",Yt="[object Date]",Pr="[object DOMException]",bi="[object Error]",Mn="[object Function]",cc="[object GeneratorFunction]",ai="[object Map]",Do="[object Number]",j2="[object Null]",on="[object Object]",hh="[object Promise]",ph="[object Proxy]",ys="[object RegExp]",Pn="[object Set]",Vo="[object String]",zo="[object Symbol]",R2="[object Undefined]",Ho="[object WeakMap]",Po="[object WeakSet]",xn="[object ArrayBuffer]",ri="[object DataView]",jn="[object Float32Array]",Cd="[object Float64Array]",Td="[object Int8Array]",Ed="[object Int16Array]",ws="[object Int32Array]",bs="[object Uint8Array]",Sa="[object Uint8ClampedArray]",Ss="[object Uint16Array]",Nr="[object Uint32Array]",O2=/\b__p \+= '';/g,mh=/\b(__p \+=) '' \+/g,gh=/(__e\(.*?\)|\b__t\)) \+\n'';/g,uc=/&(?:amp|lt|gt|quot|#39);/g,Cs=/[&<>"']/g,L2=RegExp(uc.source),xh=RegExp(Cs.source),vh=/<%-([\s\S]+?)%>/g,Ad=/<%([\s\S]+?)%>/g,dc=/<%=([\s\S]+?)%>/g,yh=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_2=/^\w*$/,Za=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ln=/[\\^$.*+?()[\]{}|]/g,Nn=RegExp(ln.source),Xa=/^\s+/,Md=/\s/,k2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,D2=/\{\n\/\* \[wrapped with (.+)\] \*/,wh=/,? & /,No=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,jd=/[()=,{}\[\]\/\s]/,Ts=/\\(\\)?/g,Es=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,As=/\w*$/,Ms=/^[-+]0x[0-9a-f]+$/i,cn=/^0b[01]+$/i,bh=/^\[object .+?Constructor\]$/,Sh=/^0o[0-7]+$/i,Br=/^(?:0|[1-9]\d*)$/,js=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,fc=/($^)/,Ch=/['\n\r\u2028\u2029\\]/g,Bo="\\ud800-\\udfff",V2="\\u0300-\\u036f",hc="\\ufe20-\\ufe2f",pc="\\u20d0-\\u20ff",aa=V2+hc+pc,mc="\\u2700-\\u27bf",Rd="a-z\\xdf-\\xf6\\xf8-\\xff",Rs="\\xac\\xb1\\xd7\\xf7",Od="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ld="\\u2000-\\u206f",z2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",_d="A-Z\\xc0-\\xd6\\xd8-\\xde",si="\\ufe0e\\ufe0f",kd=Rs+Od+Ld+z2,Dd="['’]",gc="["+Bo+"]",Vd="["+kd+"]",Ir="["+aa+"]",Th="\\d+",Si="["+mc+"]",xc="["+Rd+"]",zd="[^"+Bo+kd+Th+mc+Rd+_d+"]",Io="\\ud83c[\\udffb-\\udfff]",Os="(?:"+Ir+"|"+Io+")",Hd="[^"+Bo+"]",vc="(?:\\ud83c[\\udde6-\\uddff]){2}",Ka="[\\ud800-\\udbff][\\udc00-\\udfff]",Ls="["+_d+"]",Pd="\\u200d",Nd="(?:"+xc+"|"+zd+")",Bd="(?:"+Ls+"|"+zd+")",Eh="(?:"+Dd+"(?:d|ll|m|re|s|t|ve))?",Ah="(?:"+Dd+"(?:D|LL|M|RE|S|T|VE))?",$o=Os+"?",yc="["+si+"]?",Id="(?:"+Pd+"(?:"+[Hd,vc,Ka].join("|")+")"+yc+$o+")*",_s="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ks="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",$d=yc+$o+Id,Ud="(?:"+[Si,vc,Ka].join("|")+")"+$d,Mh="(?:"+[Hd+Ir+"?",Ir,vc,Ka,gc].join("|")+")",Uo=RegExp(Dd,"g"),Ca=RegExp(Ir,"g"),Go=RegExp(Io+"(?="+Io+")|"+Mh+$d,"g"),Fo=RegExp([Ls+"?"+xc+"+"+Eh+"(?="+[Vd,Ls,"$"].join("|")+")",Bd+"+"+Ah+"(?="+[Vd,Ls+Nd,"$"].join("|")+")",Ls+"?"+Nd+"+"+Eh,Ls+"+"+Ah,ks,_s,Th,Ud].join("|"),"g"),Qa=RegExp("["+Pd+Bo+aa+si+"]"),Gd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,wc=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],jh=-1,wt={};wt[jn]=wt[Cd]=wt[Td]=wt[Ed]=wt[ws]=wt[bs]=wt[Sa]=wt[Ss]=wt[Nr]=!0,wt[Ue]=wt[_e]=wt[xn]=wt[it]=wt[ri]=wt[Yt]=wt[bi]=wt[Mn]=wt[ai]=wt[Do]=wt[on]=wt[ys]=wt[Pn]=wt[Vo]=wt[Ho]=!1;var ht={};ht[Ue]=ht[_e]=ht[xn]=ht[ri]=ht[it]=ht[Yt]=ht[jn]=ht[Cd]=ht[Td]=ht[Ed]=ht[ws]=ht[ai]=ht[Do]=ht[on]=ht[ys]=ht[Pn]=ht[Vo]=ht[zo]=ht[bs]=ht[Sa]=ht[Ss]=ht[Nr]=!0,ht[bi]=ht[Mn]=ht[Ho]=!1;var Rh={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Bn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$r={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},bc={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},qo=parseFloat,H2=parseInt,Sc=typeof I1=="object"&&I1&&I1.Object===Object&&I1,Fd=typeof self=="object"&&self&&self.Object===Object&&self,Ft=Sc||Fd||Function("return this")(),Ds=t&&!t.nodeType&&t,Ja=Ds&&!0&&e&&!e.nodeType&&e,Oh=Ja&&Ja.exports===Ds,qd=Oh&&Sc.process,Ci=function(){try{var q=Ja&&Ja.require&&Ja.require("util").types;return q||qd&&qd.binding&&qd.binding("util")}catch{}}(),Cc=Ci&&Ci.isArrayBuffer,Lh=Ci&&Ci.isDate,_h=Ci&&Ci.isMap,kh=Ci&&Ci.isRegExp,Dh=Ci&&Ci.isSet,Vh=Ci&&Ci.isTypedArray;function In(q,oe,ae){switch(ae.length){case 0:return q.call(oe);case 1:return q.call(oe,ae[0]);case 2:return q.call(oe,ae[0],ae[1]);case 3:return q.call(oe,ae[0],ae[1],ae[2])}return q.apply(oe,ae)}function P2(q,oe,ae,Se){for(var ze=-1,rt=q==null?0:q.length;++ze<rt;){var Wt=q[ze];oe(Se,Wt,ae(Wt),q)}return Se}function Ti(q,oe){for(var ae=-1,Se=q==null?0:q.length;++ae<Se&&oe(q[ae],ae,q)!==!1;);return q}function N2(q,oe){for(var ae=q==null?0:q.length;ae--&&oe(q[ae],ae,q)!==!1;);return q}function zh(q,oe){for(var ae=-1,Se=q==null?0:q.length;++ae<Se;)if(!oe(q[ae],ae,q))return!1;return!0}function ra(q,oe){for(var ae=-1,Se=q==null?0:q.length,ze=0,rt=[];++ae<Se;){var Wt=q[ae];oe(Wt,ae,q)&&(rt[ze++]=Wt)}return rt}function Tc(q,oe){var ae=q==null?0:q.length;return!!ae&&Vs(q,oe,0)>-1}function Yd(q,oe,ae){for(var Se=-1,ze=q==null?0:q.length;++Se<ze;)if(ae(oe,q[Se]))return!0;return!1}function kt(q,oe){for(var ae=-1,Se=q==null?0:q.length,ze=Array(Se);++ae<Se;)ze[ae]=oe(q[ae],ae,q);return ze}function Ta(q,oe){for(var ae=-1,Se=oe.length,ze=q.length;++ae<Se;)q[ze+ae]=oe[ae];return q}function Wd(q,oe,ae,Se){var ze=-1,rt=q==null?0:q.length;for(Se&&rt&&(ae=q[++ze]);++ze<rt;)ae=oe(ae,q[ze],ze,q);return ae}function B2(q,oe,ae,Se){var ze=q==null?0:q.length;for(Se&&ze&&(ae=q[--ze]);ze--;)ae=oe(ae,q[ze],ze,q);return ae}function Zd(q,oe){for(var ae=-1,Se=q==null?0:q.length;++ae<Se;)if(oe(q[ae],ae,q))return!0;return!1}var I2=Ac("length");function $2(q){return q.split("")}function U2(q){return q.match(No)||[]}function Hh(q,oe,ae){var Se;return ae(q,function(ze,rt,Wt){if(oe(ze,rt,Wt))return Se=rt,!1}),Se}function Ec(q,oe,ae,Se){for(var ze=q.length,rt=ae+(Se?1:-1);Se?rt--:++rt<ze;)if(oe(q[rt],rt,q))return rt;return-1}function Vs(q,oe,ae){return oe===oe?Y2(q,oe,ae):Ec(q,zs,ae)}function Xd(q,oe,ae,Se){for(var ze=ae-1,rt=q.length;++ze<rt;)if(Se(q[ze],oe))return ze;return-1}function zs(q){return q!==q}function Ph(q,oe){var ae=q==null?0:q.length;return ae?jc(q,oe)/ae:B}function Ac(q){return function(oe){return oe==null?i:oe[q]}}function Mc(q){return function(oe){return q==null?i:q[oe]}}function Kd(q,oe,ae,Se,ze){return ze(q,function(rt,Wt,st){ae=Se?(Se=!1,rt):oe(ae,rt,Wt,st)}),ae}function Nh(q,oe){var ae=q.length;for(q.sort(oe);ae--;)q[ae]=q[ae].value;return q}function jc(q,oe){for(var ae,Se=-1,ze=q.length;++Se<ze;){var rt=oe(q[Se]);rt!==i&&(ae=ae===i?rt:ae+rt)}return ae}function er(q,oe){for(var ae=-1,Se=Array(q);++ae<q;)Se[ae]=oe(ae);return Se}function G2(q,oe){return kt(oe,function(ae){return[ae,q[ae]]})}function Bh(q){return q&&q.slice(0,Jd(q)+1).replace(Xa,"")}function oi(q){return function(oe){return q(oe)}}function Rc(q,oe){return kt(oe,function(ae){return q[ae]})}function Hs(q,oe){return q.has(oe)}function Ps(q,oe){for(var ae=-1,Se=q.length;++ae<Se&&Vs(oe,q[ae],0)>-1;);return ae}function Ns(q,oe){for(var ae=q.length;ae--&&Vs(oe,q[ae],0)>-1;);return ae}function F2(q,oe){for(var ae=q.length,Se=0;ae--;)q[ae]===oe&&++Se;return Se}var Oc=Mc(Rh),Ih=Mc(Bn);function $h(q){return"\\"+bc[q]}function Qd(q,oe){return q==null?i:q[oe]}function tr(q){return Qa.test(q)}function Uh(q){return Gd.test(q)}function Gh(q){for(var oe,ae=[];!(oe=q.next()).done;)ae.push(oe.value);return ae}function Lc(q){var oe=-1,ae=Array(q.size);return q.forEach(function(Se,ze){ae[++oe]=[ze,Se]}),ae}function Fh(q,oe){return function(ae){return q(oe(ae))}}function nr(q,oe){for(var ae=-1,Se=q.length,ze=0,rt=[];++ae<Se;){var Wt=q[ae];(Wt===oe||Wt===y)&&(q[ae]=y,rt[ze++]=ae)}return rt}function _c(q){var oe=-1,ae=Array(q.size);return q.forEach(function(Se){ae[++oe]=Se}),ae}function q2(q){var oe=-1,ae=Array(q.size);return q.forEach(function(Se){ae[++oe]=[Se,Se]}),ae}function Y2(q,oe,ae){for(var Se=ae-1,ze=q.length;++Se<ze;)if(q[Se]===oe)return Se;return-1}function li(q,oe,ae){for(var Se=ae+1;Se--;)if(q[Se]===oe)return Se;return Se}function sa(q){return tr(q)?Yh(q):I2(q)}function Ei(q){return tr(q)?ef(q):$2(q)}function Jd(q){for(var oe=q.length;oe--&&Md.test(q.charAt(oe)););return oe}var qh=Mc($r);function Yh(q){for(var oe=Go.lastIndex=0;Go.test(q);)++oe;return oe}function ef(q){return q.match(Go)||[]}function W2(q){return q.match(Fo)||[]}var Bs=function q(oe){oe=oe==null?Ft:ir.defaults(Ft.Object(),oe,ir.pick(Ft,wc));var ae=oe.Array,Se=oe.Date,ze=oe.Error,rt=oe.Function,Wt=oe.Math,st=oe.Object,kc=oe.RegExp,Wh=oe.String,ci=oe.TypeError,Dc=ae.prototype,Z2=rt.prototype,Is=st.prototype,Yo=oe["__core-js_shared__"],Wo=Z2.toString,ut=Is.hasOwnProperty,Ui=0,tf=function(){var l=/[^.]+$/.exec(Yo&&Yo.keys&&Yo.keys.IE_PROTO||"");return l?"Symbol(src)_1."+l:""}(),Rn=Is.toString,Ai=Wo.call(st),$s=Ft._,nf=kc("^"+Wo.call(ut).replace(ln,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ur=Oh?oe.Buffer:i,Gi=oe.Symbol,Us=oe.Uint8Array,Gr=Ur?Ur.allocUnsafe:i,Zo=Fh(st.getPrototypeOf,st),Xo=st.create,Fr=Is.propertyIsEnumerable,Vc=Dc.splice,$n=Gi?Gi.isConcatSpreadable:i,qr=Gi?Gi.iterator:i,On=Gi?Gi.toStringTag:i,Ko=function(){try{var l=fr(st,"defineProperty");return l({},"",{}),l}catch{}}(),zc=oe.clearTimeout!==Ft.clearTimeout&&oe.clearTimeout,Yr=Se&&Se.now!==Ft.Date.now&&Se.now,af=oe.setTimeout!==Ft.setTimeout&&oe.setTimeout,Gs=Wt.ceil,Ea=Wt.floor,ar=st.getOwnPropertySymbols,Hc=Ur?Ur.isBuffer:i,Qo=oe.isFinite,Mi=Dc.join,ji=Fh(st.keys,st),Lt=Wt.max,Dt=Wt.min,Aa=Se.now,Wr=oe.parseInt,rf=Wt.random,sf=Dc.reverse,Jo=fr(oe,"DataView"),Kt=fr(oe,"Map"),Vt=fr(oe,"Promise"),Je=fr(oe,"Set"),Fi=fr(oe,"WeakMap"),Un=fr(st,"create"),Fs=Fi&&new Fi,Ri={},Zh=Va(Jo),Xh=Va(Kt),el=Va(Vt),tl=Va(Je),Kh=Va(Fi),rr=Gi?Gi.prototype:i,Zr=rr?rr.valueOf:i,sr=rr?rr.toString:i;function k(l){if(Pt(l)&&!Ne(l)&&!(l instanceof Ye)){if(l instanceof Gn)return l;if(ut.call(l,"__wrapped__"))return Jt(l)}return new Gn(l)}var ui=function(){function l(){}return function(u){if(!Ht(u))return{};if(Xo)return Xo(u);l.prototype=u;var v=new l;return l.prototype=i,v}}();function Oi(){}function Gn(l,u){this.__wrapped__=l,this.__actions__=[],this.__chain__=!!u,this.__index__=0,this.__values__=i}k.templateSettings={escape:vh,evaluate:Ad,interpolate:dc,variable:"",imports:{_:k}},k.prototype=Oi.prototype,k.prototype.constructor=k,Gn.prototype=ui(Oi.prototype),Gn.prototype.constructor=Gn;function Ye(l){this.__wrapped__=l,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=re,this.__views__=[]}function nl(){var l=new Ye(this.__wrapped__);return l.__actions__=Qt(this.__actions__),l.__dir__=this.__dir__,l.__filtered__=this.__filtered__,l.__iteratees__=Qt(this.__iteratees__),l.__takeCount__=this.__takeCount__,l.__views__=Qt(this.__views__),l}function Pc(){if(this.__filtered__){var l=new Ye(this);l.__dir__=-1,l.__filtered__=!0}else l=this.clone(),l.__dir__*=-1;return l}function Xr(){var l=this.__wrapped__.value(),u=this.__dir__,v=Ne(l),C=u<0,j=v?l.length:0,z=Op(0,j,this.__views__),I=z.start,U=z.end,K=U-I,he=C?U:I-1,me=this.__iteratees__,ge=me.length,Ce=0,Me=Dt(K,this.__takeCount__);if(!v||!C&&j==K&&Me==K)return gp(l,this.__actions__);var He=[];e:for(;K--&&Ce<Me;){he+=u;for(var Ze=-1,Pe=l[he];++Ze<ge;){var nt=me[Ze],lt=nt.iteratee,Qi=nt.type,xi=lt(Pe);if(Qi==Ee)Pe=xi;else if(!xi){if(Qi==Re)continue e;break e}}He[Ce++]=Pe}return He}Ye.prototype=ui(Oi.prototype),Ye.prototype.constructor=Ye;function Bt(l){var u=-1,v=l==null?0:l.length;for(this.clear();++u<v;){var C=l[u];this.set(C[0],C[1])}}function Nc(){this.__data__=Un?Un(null):{},this.size=0}function Qh(l){var u=this.has(l)&&delete this.__data__[l];return this.size-=u?1:0,u}function X2(l){var u=this.__data__;if(Un){var v=u[l];return v===p?i:v}return ut.call(u,l)?u[l]:i}function K2(l){var u=this.__data__;return Un?u[l]!==i:ut.call(u,l)}function Q2(l,u){var v=this.__data__;return this.size+=this.has(l)?0:1,v[l]=Un&&u===i?p:u,this}Bt.prototype.clear=Nc,Bt.prototype.delete=Qh,Bt.prototype.get=X2,Bt.prototype.has=K2,Bt.prototype.set=Q2;function Et(l){var u=-1,v=l==null?0:l.length;for(this.clear();++u<v;){var C=l[u];this.set(C[0],C[1])}}function of(){this.__data__=[],this.size=0}function il(l){var u=this.__data__,v=Ws(u,l);if(v<0)return!1;var C=u.length-1;return v==C?u.pop():Vc.call(u,v,1),--this.size,!0}function al(l){var u=this.__data__,v=Ws(u,l);return v<0?i:u[v][1]}function lf(l){return Ws(this.__data__,l)>-1}function qs(l,u){var v=this.__data__,C=Ws(v,l);return C<0?(++this.size,v.push([l,u])):v[C][1]=u,this}Et.prototype.clear=of,Et.prototype.delete=il,Et.prototype.get=al,Et.prototype.has=lf,Et.prototype.set=qs;function Fn(l){var u=-1,v=l==null?0:l.length;for(this.clear();++u<v;){var C=l[u];this.set(C[0],C[1])}}function J2(){this.size=0,this.__data__={hash:new Bt,map:new(Kt||Et),string:new Bt}}function Jh(l){var u=eo(this,l).delete(l);return this.size-=u?1:0,u}function eg(l){return eo(this,l).get(l)}function ep(l){return eo(this,l).has(l)}function Kr(l,u){var v=eo(this,l),C=v.size;return v.set(l,u),this.size+=v.size==C?0:1,this}Fn.prototype.clear=J2,Fn.prototype.delete=Jh,Fn.prototype.get=eg,Fn.prototype.has=ep,Fn.prototype.set=Kr;function Ma(l){var u=-1,v=l==null?0:l.length;for(this.__data__=new Fn;++u<v;)this.add(l[u])}function Bc(l){return this.__data__.set(l,p),this}function tp(l){return this.__data__.has(l)}Ma.prototype.add=Ma.prototype.push=Bc,Ma.prototype.has=tp;function Ln(l){var u=this.__data__=new Et(l);this.size=u.size}function np(){this.__data__=new Et,this.size=0}function Ic(l){var u=this.__data__,v=u.delete(l);return this.size=u.size,v}function cf(l){return this.__data__.get(l)}function ip(l){return this.__data__.has(l)}function $c(l,u){var v=this.__data__;if(v instanceof Et){var C=v.__data__;if(!Kt||C.length<o-1)return C.push([l,u]),this.size=++v.size,this;v=this.__data__=new Fn(C)}return v.set(l,u),this.size=v.size,this}Ln.prototype.clear=np,Ln.prototype.delete=Ic,Ln.prototype.get=cf,Ln.prototype.has=ip,Ln.prototype.set=$c;function uf(l,u){var v=Ne(l),C=!v&&Na(l),j=!v&&!C&&Sr(l),z=!v&&!C&&!j&&mo(l),I=v||C||j||z,U=I?er(l.length,Wh):[],K=U.length;for(var he in l)(u||ut.call(l,he))&&!(I&&(he=="length"||j&&(he=="offset"||he=="parent")||z&&(he=="buffer"||he=="byteLength"||he=="byteOffset")||Zi(he,K)))&&U.push(he);return U}function Ys(l){var u=l.length;return u?l[Qc(0,u-1)]:i}function ap(l,u){return Ll(Qt(l),Yi(u,0,l.length))}function rp(l){return Ll(Qt(l))}function oa(l,u,v){(v!==i&&!Qn(l[u],v)||v===i&&!(u in l))&&qi(l,u,v)}function Qr(l,u,v){var C=l[u];(!(ut.call(l,u)&&Qn(C,v))||v===i&&!(u in l))&&qi(l,u,v)}function Ws(l,u){for(var v=l.length;v--;)if(Qn(l[v][0],u))return v;return-1}function or(l,u,v,C){return Ra(l,function(j,z,I){u(C,j,v(j),I)}),C}function ja(l,u){return l&&Wn(u,nn(u),l)}function rl(l,u){return l&&Wn(u,fn(u),l)}function qi(l,u,v){u=="__proto__"&&Ko?Ko(l,u,{configurable:!0,enumerable:!0,value:v,writable:!0}):l[u]=v}function sl(l,u){for(var v=-1,C=u.length,j=ae(C),z=l==null;++v<C;)j[v]=z?i:Fl(l,u[v]);return j}function Yi(l,u,v){return l===l&&(v!==i&&(l=l<=v?l:v),u!==i&&(l=l>=u?l:u)),l}function yn(l,u,v,C,j,z){var I,U=u&b,K=u&S,he=u&T;if(v&&(I=j?v(l,C,j,z):v(l)),I!==i)return I;if(!Ht(l))return l;var me=Ne(l);if(me){if(I=zf(l),!U)return Qt(l,I)}else{var ge=dn(l),Ce=ge==Mn||ge==cc;if(Sr(l))return jf(l,U);if(ge==on||ge==Ue||Ce&&!j){if(I=K||Ce?{}:Hf(l),!U)return K?yl(l,rl(I,l)):au(l,ja(I,l))}else{if(!ht[ge])return j?l:{};I=Pf(l,ge,U)}}z||(z=new Ln);var Me=z.get(l);if(Me)return Me;z.set(l,I),S1(l)?l.forEach(function(Pe){I.add(yn(Pe,u,v,Pe,l,z))}):Ru(l)&&l.forEach(function(Pe,nt){I.set(nt,yn(Pe,u,v,nt,l,z))});var He=he?K?lu:ou:K?fn:nn,Ze=me?i:He(l);return Ti(Ze||l,function(Pe,nt){Ze&&(nt=Pe,Pe=l[nt]),Qr(I,nt,yn(Pe,u,v,nt,l,z))}),I}function sp(l){var u=nn(l);return function(v){return df(v,l,u)}}function df(l,u,v){var C=v.length;if(l==null)return!C;for(l=st(l);C--;){var j=v[C],z=u[j],I=l[j];if(I===i&&!(j in l)||!z(I))return!1}return!0}function Jr(l,u,v){if(typeof l!="function")throw new ci(f);return no(function(){l.apply(i,v)},u)}function lr(l,u,v,C){var j=-1,z=Tc,I=!0,U=l.length,K=[],he=u.length;if(!U)return K;v&&(u=kt(u,oi(v))),C?(z=Yd,I=!1):u.length>=o&&(z=Hs,I=!1,u=new Ma(u));e:for(;++j<U;){var me=l[j],ge=v==null?me:v(me);if(me=C||me!==0?me:0,I&&ge===ge){for(var Ce=he;Ce--;)if(u[Ce]===ge)continue e;K.push(me)}else z(u,ge,C)||K.push(me)}return K}var Ra=_f(wn),Uc=_f(Xs,!0);function ff(l,u){var v=!0;return Ra(l,function(C,j,z){return v=!!u(C,j,z),v}),v}function Wi(l,u,v){for(var C=-1,j=l.length;++C<j;){var z=l[C],I=u(z);if(I!=null&&(U===i?I===I&&!Dn(I):v(I,U)))var U=I,K=z}return K}function Fe(l,u,v,C){var j=l.length;for(v=Ie(v),v<0&&(v=-v>j?0:j+v),C=C===i||C>j?j:Ie(C),C<0&&(C+=j),C=v>C?0:ga(C);v<C;)l[v++]=u;return l}function pt(l,u){var v=[];return Ra(l,function(C,j,z){u(C,j,z)&&v.push(C)}),v}function et(l,u,v,C,j){var z=-1,I=l.length;for(v||(v=ka),j||(j=[]);++z<I;){var U=l[z];u>0&&v(U)?u>1?et(U,u-1,v,C,j):Ta(j,U):C||(j[j.length]=U)}return j}var Zs=ss(),es=ss(!0);function wn(l,u){return l&&Zs(l,u,nn)}function Xs(l,u){return l&&es(l,u,nn)}function cr(l,u){return ra(u,function(v){return Xi(l[v])})}function Li(l,u){u=La(u,l);for(var v=0,C=u.length;l!=null&&v<C;)l=l[ft(u[v++])];return v&&v==C?l:i}function op(l,u,v){var C=u(l);return Ne(l)?C:Ta(C,v(l))}function tt(l){return l==null?l===i?R2:j2:On&&On in st(l)?Rp(l):Vp(l)}function ol(l,u){return l>u}function hf(l,u){return l!=null&&ut.call(l,u)}function lp(l,u){return l!=null&&u in st(l)}function cp(l,u,v){return l>=Dt(u,v)&&l<Lt(u,v)}function pf(l,u,v){for(var C=v?Yd:Tc,j=l[0].length,z=l.length,I=z,U=ae(z),K=1/0,he=[];I--;){var me=l[I];I&&u&&(me=kt(me,oi(u))),K=Dt(me.length,K),U[I]=!v&&(u||j>=120&&me.length>=120)?new Ma(I&&me):i}me=l[0];var ge=-1,Ce=U[0];e:for(;++ge<j&&he.length<K;){var Me=me[ge],He=u?u(Me):Me;if(Me=v||Me!==0?Me:0,!(Ce?Hs(Ce,He):C(he,He,v))){for(I=z;--I;){var Ze=U[I];if(!(Ze?Hs(Ze,He):C(l[I],He,v)))continue e}Ce&&Ce.push(He),he.push(Me)}}return he}function mf(l,u,v,C){return wn(l,function(j,z,I){u(C,v(j),z,I)}),C}function ts(l,u,v){u=La(u,l),l=to(l,u);var C=l==null?l:l[ft(bn(u))];return C==null?i:In(C,l,v)}function Gc(l){return Pt(l)&&tt(l)==Ue}function qn(l){return Pt(l)&&tt(l)==xn}function Zt(l){return Pt(l)&&tt(l)==Yt}function ns(l,u,v,C,j){return l===u?!0:l==null||u==null||!Pt(l)&&!Pt(u)?l!==l&&u!==u:ll(l,u,v,C,ns,j)}function ll(l,u,v,C,j,z){var I=Ne(l),U=Ne(u),K=I?_e:dn(l),he=U?_e:dn(u);K=K==Ue?on:K,he=he==Ue?on:he;var me=K==on,ge=he==on,Ce=K==he;if(Ce&&Sr(l)){if(!Sr(u))return!1;I=!0,me=!1}if(Ce&&!me)return z||(z=new Ln),I||mo(l)?Mp(l,u,v,C,j,z):jp(l,u,K,v,C,j,z);if(!(v&E)){var Me=me&&ut.call(l,"__wrapped__"),He=ge&&ut.call(u,"__wrapped__");if(Me||He){var Ze=Me?l.value():l,Pe=He?u.value():u;return z||(z=new Ln),j(Ze,Pe,v,C,z)}}return Ce?(z||(z=new Ln),un(l,u,v,C,j,z)):!1}function Fc(l){return Pt(l)&&dn(l)==ai}function cl(l,u,v,C){var j=v.length,z=j,I=!C;if(l==null)return!z;for(l=st(l);j--;){var U=v[j];if(I&&U[2]?U[1]!==l[U[0]]:!(U[0]in l))return!1}for(;++j<z;){U=v[j];var K=U[0],he=l[K],me=U[1];if(I&&U[2]){if(he===i&&!(K in l))return!1}else{var ge=new Ln;if(C)var Ce=C(he,me,K,l,u,ge);if(!(Ce===i?ns(me,he,E|L,C,ge):Ce))return!1}}return!0}function la(l){if(!Ht(l)||pu(l))return!1;var u=Xi(l)?nf:bh;return u.test(Va(l))}function qc(l){return Pt(l)&&tt(l)==ys}function gf(l){return Pt(l)&&dn(l)==Pn}function xf(l){return Pt(l)&&ds(l.length)&&!!wt[tt(l)]}function vf(l){return typeof l=="function"?l:l==null?te:typeof l=="object"?Ne(l)?Zc(l[0],l[1]):wf(l):ot(l)}function Yc(l){if(!At(l))return ji(l);var u=[];for(var v in st(l))ut.call(l,v)&&v!="constructor"&&u.push(v);return u}function up(l){if(!Ht(l))return hr(l);var u=At(l),v=[];for(var C in l)C=="constructor"&&(u||!ut.call(l,C))||v.push(C);return v}function Wc(l,u){return l<u}function yf(l,u){var v=-1,C=en(l)?ae(l.length):[];return Ra(l,function(j,z,I){C[++v]=u(j,z,I)}),C}function wf(l){var u=uu(l);return u.length==1&&u[0][2]?kp(u[0][0],u[0][1]):function(v){return v===l||cl(v,l,u)}}function Zc(l,u){return fu(l)&&_p(u)?kp(ft(l),u):function(v){var C=Fl(v,l);return C===i&&C===u?yo(v,l):ns(u,C,E|L)}}function ul(l,u,v,C,j){l!==u&&Zs(u,function(z,I){if(j||(j=new Ln),Ht(z))tg(l,u,I,v,ul,C,j);else{var U=C?C(mu(l,I),z,I+"",l,u,j):i;U===i&&(U=z),oa(l,I,U)}},fn)}function tg(l,u,v,C,j,z,I){var U=mu(l,v),K=mu(u,v),he=I.get(K);if(he){oa(l,v,he);return}var me=z?z(U,K,v+"",l,u,I):i,ge=me===i;if(ge){var Ce=Ne(K),Me=!Ce&&Sr(K),He=!Ce&&!Me&&mo(K);me=K,Ce||Me||He?Ne(U)?me=U:Ut(U)?me=Qt(U):Me?(ge=!1,me=jf(K,!0)):He?(ge=!1,me=Of(K,!0)):me=[]:Vi(K)||Na(K)?(me=U,Na(U)?me=E1(U):(!Ht(U)||Xi(U))&&(me=Hf(K))):ge=!1}ge&&(I.set(K,me),j(me,K,C,z,I),I.delete(K)),oa(l,v,me)}function bf(l,u){var v=l.length;if(v)return u+=u<0?v:0,Zi(u,v)?l[u]:i}function Sf(l,u,v){u.length?u=kt(u,function(z){return Ne(z)?function(I){return Li(I,z.length===1?z[0]:z)}:z}):u=[te];var C=-1;u=kt(u,oi(Le()));var j=yf(l,function(z,I,U){var K=kt(u,function(he){return he(z)});return{criteria:K,index:++C,value:z}});return Nh(j,function(z,I){return wp(z,I,v)})}function dp(l,u){return Xc(l,u,function(v,C){return yo(l,C)})}function Xc(l,u,v){for(var C=-1,j=u.length,z={};++C<j;){var I=u[C],U=Li(l,I);v(U,I)&&Qs(z,La(I,l),U)}return z}function fp(l){return function(u){return Li(u,l)}}function Kc(l,u,v,C){var j=C?Xd:Vs,z=-1,I=u.length,U=l;for(l===u&&(u=Qt(u)),v&&(U=kt(l,oi(v)));++z<I;)for(var K=0,he=u[z],me=v?v(he):he;(K=j(U,me,K,C))>-1;)U!==l&&Vc.call(U,K,1),Vc.call(l,K,1);return l}function Cf(l,u){for(var v=l?u.length:0,C=v-1;v--;){var j=u[v];if(v==C||j!==z){var z=j;Zi(j)?Vc.call(l,j,1):pl(l,j)}}return l}function Qc(l,u){return l+Ea(rf()*(u-l+1))}function hp(l,u,v,C){for(var j=-1,z=Lt(Gs((u-l)/(v||1)),0),I=ae(z);z--;)I[C?z:++j]=l,l+=v;return I}function Tf(l,u){var v="";if(!l||u<1||u>ue)return v;do u%2&&(v+=l),u=Ea(u/2),u&&(l+=l);while(u);return v}function Ge(l,u){return Rl(Nf(l,u,te),l+"")}function Ks(l){return Ys(bo(l))}function Jc(l,u){var v=bo(l);return Ll(v,Yi(u,0,v.length))}function Qs(l,u,v,C){if(!Ht(l))return l;u=La(u,l);for(var j=-1,z=u.length,I=z-1,U=l;U!=null&&++j<z;){var K=ft(u[j]),he=v;if(K==="__proto__"||K==="constructor"||K==="prototype")return l;if(j!=I){var me=U[K];he=C?C(me,K,U):i,he===i&&(he=Ht(me)?me:Zi(u[j+1])?[]:{})}Qr(U,K,he),U=U[K]}return l}var dl=Fs?function(l,u){return Fs.set(l,u),l}:te,fl=Ko?function(l,u){return Ko(l,"toString",{configurable:!0,enumerable:!1,value:ee(u),writable:!0})}:te;function pp(l){return Ll(bo(l))}function di(l,u,v){var C=-1,j=l.length;u<0&&(u=-u>j?0:j+u),v=v>j?j:v,v<0&&(v+=j),j=u>v?0:v-u>>>0,u>>>=0;for(var z=ae(j);++C<j;)z[C]=l[C+u];return z}function mp(l,u){var v;return Ra(l,function(C,j,z){return v=u(C,j,z),!v}),!!v}function hl(l,u,v){var C=0,j=l==null?C:l.length;if(typeof u=="number"&&u===u&&j<=be){for(;C<j;){var z=C+j>>>1,I=l[z];I!==null&&!Dn(I)&&(v?I<=u:I<u)?C=z+1:j=z}return j}return eu(l,u,te,v)}function eu(l,u,v,C){var j=0,z=l==null?0:l.length;if(z===0)return 0;u=v(u);for(var I=u!==u,U=u===null,K=Dn(u),he=u===i;j<z;){var me=Ea((j+z)/2),ge=v(l[me]),Ce=ge!==i,Me=ge===null,He=ge===ge,Ze=Dn(ge);if(I)var Pe=C||He;else he?Pe=He&&(C||Ce):U?Pe=He&&Ce&&(C||!Me):K?Pe=He&&Ce&&!Me&&(C||!Ze):Me||Ze?Pe=!1:Pe=C?ge<=u:ge<u;Pe?j=me+1:z=me}return Dt(z,we)}function Ef(l,u){for(var v=-1,C=l.length,j=0,z=[];++v<C;){var I=l[v],U=u?u(I):I;if(!v||!Qn(U,K)){var K=U;z[j++]=I===0?0:I}}return z}function tu(l){return typeof l=="number"?l:Dn(l)?B:+l}function Yn(l){if(typeof l=="string")return l;if(Ne(l))return kt(l,Yn)+"";if(Dn(l))return sr?sr.call(l):"";var u=l+"";return u=="0"&&1/l==-le?"-0":u}function Oa(l,u,v){var C=-1,j=Tc,z=l.length,I=!0,U=[],K=U;if(v)I=!1,j=Yd;else if(z>=o){var he=u?null:Ep(l);if(he)return _c(he);I=!1,j=Hs,K=new Ma}else K=u?[]:U;e:for(;++C<z;){var me=l[C],ge=u?u(me):me;if(me=v||me!==0?me:0,I&&ge===ge){for(var Ce=K.length;Ce--;)if(K[Ce]===ge)continue e;u&&K.push(ge),U.push(me)}else j(K,ge,v)||(K!==U&&K.push(ge),U.push(me))}return U}function pl(l,u){return u=La(u,l),l=to(l,u),l==null||delete l[ft(bn(u))]}function Af(l,u,v,C){return Qs(l,u,v(Li(l,u)),C)}function ml(l,u,v,C){for(var j=l.length,z=C?j:-1;(C?z--:++z<j)&&u(l[z],z,l););return v?di(l,C?0:z,C?z+1:j):di(l,C?z+1:0,C?j:z)}function gp(l,u){var v=l;return v instanceof Ye&&(v=v.value()),Wd(u,function(C,j){return j.func.apply(j.thisArg,Ta([C],j.args))},v)}function gl(l,u,v){var C=l.length;if(C<2)return C?Oa(l[0]):[];for(var j=-1,z=ae(C);++j<C;)for(var I=l[j],U=-1;++U<C;)U!=j&&(z[j]=lr(z[j]||I,l[U],u,v));return Oa(et(z,1),u,v)}function Mf(l,u,v){for(var C=-1,j=l.length,z=u.length,I={};++C<j;){var U=C<z?u[C]:i;v(I,l[C],U)}return I}function nu(l){return Ut(l)?l:[]}function xl(l){return typeof l=="function"?l:te}function La(l,u){return Ne(l)?l:fu(l,u)?[l]:fa(dt(l))}var xp=Ge;function ur(l,u,v){var C=l.length;return v=v===i?C:v,!u&&v>=C?l:di(l,u,v)}var vp=zc||function(l){return Ft.clearTimeout(l)};function jf(l,u){if(u)return l.slice();var v=l.length,C=Gr?Gr(v):new l.constructor(v);return l.copy(C),C}function is(l){var u=new l.constructor(l.byteLength);return new Us(u).set(new Us(l)),u}function Rf(l,u){var v=u?is(l.buffer):l.buffer;return new l.constructor(v,l.byteOffset,l.byteLength)}function iu(l){var u=new l.constructor(l.source,As.exec(l));return u.lastIndex=l.lastIndex,u}function yp(l){return Zr?st(Zr.call(l)):{}}function Of(l,u){var v=u?is(l.buffer):l.buffer;return new l.constructor(v,l.byteOffset,l.length)}function vl(l,u){if(l!==u){var v=l!==i,C=l===null,j=l===l,z=Dn(l),I=u!==i,U=u===null,K=u===u,he=Dn(u);if(!U&&!he&&!z&&l>u||z&&I&&K&&!U&&!he||C&&I&&K||!v&&K||!j)return 1;if(!C&&!z&&!he&&l<u||he&&v&&j&&!C&&!z||U&&v&&j||!I&&j||!K)return-1}return 0}function wp(l,u,v){for(var C=-1,j=l.criteria,z=u.criteria,I=j.length,U=v.length;++C<I;){var K=vl(j[C],z[C]);if(K){if(C>=U)return K;var he=v[C];return K*(he=="desc"?-1:1)}}return l.index-u.index}function Lf(l,u,v,C){for(var j=-1,z=l.length,I=v.length,U=-1,K=u.length,he=Lt(z-I,0),me=ae(K+he),ge=!C;++U<K;)me[U]=u[U];for(;++j<I;)(ge||j<z)&&(me[v[j]]=l[j]);for(;he--;)me[U++]=l[j++];return me}function bp(l,u,v,C){for(var j=-1,z=l.length,I=-1,U=v.length,K=-1,he=u.length,me=Lt(z-U,0),ge=ae(me+he),Ce=!C;++j<me;)ge[j]=l[j];for(var Me=j;++K<he;)ge[Me+K]=u[K];for(;++I<U;)(Ce||j<z)&&(ge[Me+v[I]]=l[j++]);return ge}function Qt(l,u){var v=-1,C=l.length;for(u||(u=ae(C));++v<C;)u[v]=l[v];return u}function Wn(l,u,v,C){var j=!v;v||(v={});for(var z=-1,I=u.length;++z<I;){var U=u[z],K=C?C(v[U],l[U],U,v,l):i;K===i&&(K=l[U]),j?qi(v,U,K):Qr(v,U,K)}return v}function au(l,u){return Wn(l,El(l),u)}function yl(l,u){return Wn(l,du(l),u)}function as(l,u){return function(v,C){var j=Ne(v)?P2:or,z=u?u():{};return j(v,l,Le(C,2),z)}}function rs(l){return Ge(function(u,v){var C=-1,j=v.length,z=j>1?v[j-1]:i,I=j>2?v[2]:i;for(z=l.length>3&&typeof z=="function"?(j--,z):i,I&&kn(v[0],v[1],I)&&(z=j<3?i:z,j=1),u=st(u);++C<j;){var U=v[C];U&&l(u,U,C,z)}return u})}function _f(l,u){return function(v,C){if(v==null)return v;if(!en(v))return l(v,C);for(var j=v.length,z=u?j:-1,I=st(v);(u?z--:++z<j)&&C(I[z],z,I)!==!1;);return v}}function ss(l){return function(u,v,C){for(var j=-1,z=st(u),I=C(u),U=I.length;U--;){var K=I[l?U:++j];if(v(z[K],K,z)===!1)break}return u}}function Sp(l,u,v){var C=u&P,j=_i(l);function z(){var I=this&&this!==Ft&&this instanceof z?j:l;return I.apply(C?v:this,arguments)}return z}function fi(l){return function(u){u=dt(u);var v=tr(u)?Ei(u):i,C=v?v[0]:u.charAt(0),j=v?ur(v,1).join(""):u.slice(1);return C[l]()+j}}function _n(l){return function(u){return Wd(m(Ba(u).replace(Uo,"")),l,"")}}function _i(l){return function(){var u=arguments;switch(u.length){case 0:return new l;case 1:return new l(u[0]);case 2:return new l(u[0],u[1]);case 3:return new l(u[0],u[1],u[2]);case 4:return new l(u[0],u[1],u[2],u[3]);case 5:return new l(u[0],u[1],u[2],u[3],u[4]);case 6:return new l(u[0],u[1],u[2],u[3],u[4],u[5]);case 7:return new l(u[0],u[1],u[2],u[3],u[4],u[5],u[6])}var v=ui(l.prototype),C=l.apply(v,u);return Ht(C)?C:v}}function Cp(l,u,v){var C=_i(l);function j(){for(var z=arguments.length,I=ae(z),U=z,K=ls(j);U--;)I[U]=arguments[U];var he=z<3&&I[0]!==K&&I[z-1]!==K?[]:nr(I,K);if(z-=he.length,z<v)return kf(l,u,It,j.placeholder,i,I,he,i,i,v-z);var me=this&&this!==Ft&&this instanceof j?C:l;return In(me,this,I)}return j}function _a(l){return function(u,v,C){var j=st(u);if(!en(u)){var z=Le(v,3);u=nn(u),v=function(U){return z(j[U],U,j)}}var I=l(u,v,C);return I>-1?j[z?u[I]:I]:i}}function ca(l){return _t(function(u){var v=u.length,C=v,j=Gn.prototype.thru;for(l&&u.reverse();C--;){var z=u[C];if(typeof z!="function")throw new ci(f);if(j&&!I&&Tl(z)=="wrapper")var I=new Gn([],!0)}for(C=I?C:v;++C<v;){z=u[C];var U=Tl(z),K=U=="wrapper"?cu(z):i;K&&hu(K[0])&&K[1]==(G|O|V|Q)&&!K[4].length&&K[9]==1?I=I[Tl(K[0])].apply(I,K[3]):I=z.length==1&&hu(z)?I[U]():I.thru(z)}return function(){var he=arguments,me=he[0];if(I&&he.length==1&&Ne(me))return I.plant(me).value();for(var ge=0,Ce=v?u[ge].apply(this,he):me;++ge<v;)Ce=u[ge].call(this,Ce);return Ce}})}function It(l,u,v,C,j,z,I,U,K,he){var me=u&G,ge=u&P,Ce=u&_,Me=u&(O|N),He=u&ie,Ze=Ce?i:_i(l);function Pe(){for(var nt=arguments.length,lt=ae(nt),Qi=nt;Qi--;)lt[Qi]=arguments[Qi];if(Me)var xi=ls(Pe),Ji=F2(lt,xi);if(C&&(lt=Lf(lt,C,j,Me)),z&&(lt=bp(lt,z,I,Me)),nt-=Ji,Me&&nt<he){var an=nr(lt,xi);return kf(l,u,It,Pe.placeholder,v,lt,an,U,K,he-nt)}var Ia=ge?v:this,fs=Ce?Ia[l]:l;return nt=lt.length,U?lt=da(lt,U):He&&nt>1&&lt.reverse(),me&&K<nt&&(lt.length=K),this&&this!==Ft&&this instanceof Pe&&(fs=Ze||_i(fs)),fs.apply(Ia,lt)}return Pe}function wl(l,u){return function(v,C){return mf(v,l,u(C),{})}}function Js(l,u){return function(v,C){var j;if(v===i&&C===i)return u;if(v!==i&&(j=v),C!==i){if(j===i)return C;typeof v=="string"||typeof C=="string"?(v=Yn(v),C=Yn(C)):(v=tu(v),C=tu(C)),j=l(v,C)}return j}}function bl(l){return _t(function(u){return u=kt(u,oi(Le())),Ge(function(v){var C=this;return l(u,function(j){return In(j,C,v)})})})}function Sl(l,u){u=u===i?" ":Yn(u);var v=u.length;if(v<2)return v?Tf(u,l):u;var C=Tf(u,Gs(l/sa(u)));return tr(u)?ur(Ei(C),0,l).join(""):C.slice(0,l)}function Tp(l,u,v,C){var j=u&P,z=_i(l);function I(){for(var U=-1,K=arguments.length,he=-1,me=C.length,ge=ae(me+K),Ce=this&&this!==Ft&&this instanceof I?z:l;++he<me;)ge[he]=C[he];for(;K--;)ge[he++]=arguments[++U];return In(Ce,j?v:this,ge)}return I}function dr(l){return function(u,v,C){return C&&typeof C!="number"&&kn(u,v,C)&&(v=C=i),u=ma(u),v===i?(v=u,u=0):v=ma(v),C=C===i?u<v?1:-1:ma(C),hp(u,v,C,l)}}function os(l){return function(u,v){return typeof u=="string"&&typeof v=="string"||(u=zi(u),v=zi(v)),l(u,v)}}function kf(l,u,v,C,j,z,I,U,K,he){var me=u&O,ge=me?I:i,Ce=me?i:I,Me=me?z:i,He=me?i:z;u|=me?V:Y,u&=~(me?Y:V),u&R||(u&=-4);var Ze=[l,u,j,Me,ge,He,Ce,U,K,he],Pe=v.apply(i,Ze);return hu(l)&&gu(Pe,Ze),Pe.placeholder=C,xu(Pe,l,u)}function ru(l){var u=Wt[l];return function(v,C){if(v=zi(v),C=C==null?0:Dt(Ie(C),292),C&&Qo(v)){var j=(dt(v)+"e").split("e"),z=u(j[0]+"e"+(+j[1]+C));return j=(dt(z)+"e").split("e"),+(j[0]+"e"+(+j[1]-C))}return u(v)}}var Ep=Je&&1/_c(new Je([,-0]))[1]==le?function(l){return new Je(l)}:Te;function Cl(l){return function(u){var v=dn(u);return v==ai?Lc(u):v==Pn?q2(u):G2(u,l(u))}}function ua(l,u,v,C,j,z,I,U){var K=u&_;if(!K&&typeof l!="function")throw new ci(f);var he=C?C.length:0;if(he||(u&=-97,C=j=i),I=I===i?I:Lt(Ie(I),0),U=U===i?U:Ie(U),he-=j?j.length:0,u&Y){var me=C,ge=j;C=j=i}var Ce=K?i:cu(l),Me=[l,u,v,C,j,me,ge,z,I,U];if(Ce&&jl(Me,Ce),l=Me[0],u=Me[1],v=Me[2],C=Me[3],j=Me[4],U=Me[9]=Me[9]===i?K?0:l.length:Lt(Me[9]-he,0),!U&&u&(O|N)&&(u&=-25),!u||u==P)var He=Sp(l,u,v);else u==O||u==N?He=Cp(l,u,U):(u==V||u==(P|V))&&!j.length?He=Tp(l,u,v,C):He=It.apply(i,Me);var Ze=Ce?dl:gu;return xu(Ze(He,Me),l,u)}function su(l,u,v,C){return l===i||Qn(l,Is[v])&&!ut.call(C,v)?u:l}function Df(l,u,v,C,j,z){return Ht(l)&&Ht(u)&&(z.set(u,l),ul(l,u,i,Df,z),z.delete(u)),l}function Ap(l){return Vi(l)?i:l}function Mp(l,u,v,C,j,z){var I=v&E,U=l.length,K=u.length;if(U!=K&&!(I&&K>U))return!1;var he=z.get(l),me=z.get(u);if(he&&me)return he==u&&me==l;var ge=-1,Ce=!0,Me=v&L?new Ma:i;for(z.set(l,u),z.set(u,l);++ge<U;){var He=l[ge],Ze=u[ge];if(C)var Pe=I?C(Ze,He,ge,u,l,z):C(He,Ze,ge,l,u,z);if(Pe!==i){if(Pe)continue;Ce=!1;break}if(Me){if(!Zd(u,function(nt,lt){if(!Hs(Me,lt)&&(He===nt||j(He,nt,v,C,z)))return Me.push(lt)})){Ce=!1;break}}else if(!(He===Ze||j(He,Ze,v,C,z))){Ce=!1;break}}return z.delete(l),z.delete(u),Ce}function jp(l,u,v,C,j,z,I){switch(v){case ri:if(l.byteLength!=u.byteLength||l.byteOffset!=u.byteOffset)return!1;l=l.buffer,u=u.buffer;case xn:return!(l.byteLength!=u.byteLength||!z(new Us(l),new Us(u)));case it:case Yt:case Do:return Qn(+l,+u);case bi:return l.name==u.name&&l.message==u.message;case ys:case Vo:return l==u+"";case ai:var U=Lc;case Pn:var K=C&E;if(U||(U=_c),l.size!=u.size&&!K)return!1;var he=I.get(l);if(he)return he==u;C|=L,I.set(l,u);var me=Mp(U(l),U(u),C,j,z,I);return I.delete(l),me;case zo:if(Zr)return Zr.call(l)==Zr.call(u)}return!1}function un(l,u,v,C,j,z){var I=v&E,U=ou(l),K=U.length,he=ou(u),me=he.length;if(K!=me&&!I)return!1;for(var ge=K;ge--;){var Ce=U[ge];if(!(I?Ce in u:ut.call(u,Ce)))return!1}var Me=z.get(l),He=z.get(u);if(Me&&He)return Me==u&&He==l;var Ze=!0;z.set(l,u),z.set(u,l);for(var Pe=I;++ge<K;){Ce=U[ge];var nt=l[Ce],lt=u[Ce];if(C)var Qi=I?C(lt,nt,Ce,u,l,z):C(nt,lt,Ce,l,u,z);if(!(Qi===i?nt===lt||j(nt,lt,v,C,z):Qi)){Ze=!1;break}Pe||(Pe=Ce=="constructor")}if(Ze&&!Pe){var xi=l.constructor,Ji=u.constructor;xi!=Ji&&"constructor"in l&&"constructor"in u&&!(typeof xi=="function"&&xi instanceof xi&&typeof Ji=="function"&&Ji instanceof Ji)&&(Ze=!1)}return z.delete(l),z.delete(u),Ze}function _t(l){return Rl(Nf(l,i,Xn),l+"")}function ou(l){return op(l,nn,El)}function lu(l){return op(l,fn,du)}var cu=Fs?function(l){return Fs.get(l)}:Te;function Tl(l){for(var u=l.name+"",v=Ri[u],C=ut.call(Ri,u)?v.length:0;C--;){var j=v[C],z=j.func;if(z==null||z==l)return j.name}return u}function ls(l){var u=ut.call(k,"placeholder")?k:l;return u.placeholder}function Le(){var l=k.iteratee||De;return l=l===De?vf:l,arguments.length?l(arguments[0],arguments[1]):l}function eo(l,u){var v=l.__data__;return Da(u)?v[typeof u=="string"?"string":"hash"]:v.map}function uu(l){for(var u=nn(l),v=u.length;v--;){var C=u[v],j=l[C];u[v]=[C,j,_p(j)]}return u}function fr(l,u){var v=Qd(l,u);return la(v)?v:i}function Rp(l){var u=ut.call(l,On),v=l[On];try{l[On]=i;var C=!0}catch{}var j=Rn.call(l);return C&&(u?l[On]=v:delete l[On]),j}var El=ar?function(l){return l==null?[]:(l=st(l),ra(ar(l),function(u){return Fr.call(l,u)}))}:Pg,du=ar?function(l){for(var u=[];l;)Ta(u,El(l)),l=Zo(l);return u}:Pg,dn=tt;(Jo&&dn(new Jo(new ArrayBuffer(1)))!=ri||Kt&&dn(new Kt)!=ai||Vt&&dn(Vt.resolve())!=hh||Je&&dn(new Je)!=Pn||Fi&&dn(new Fi)!=Ho)&&(dn=function(l){var u=tt(l),v=u==on?l.constructor:i,C=v?Va(v):"";if(C)switch(C){case Zh:return ri;case Xh:return ai;case el:return hh;case tl:return Pn;case Kh:return Ho}return u});function Op(l,u,v){for(var C=-1,j=v.length;++C<j;){var z=v[C],I=z.size;switch(z.type){case"drop":l+=I;break;case"dropRight":u-=I;break;case"take":u=Dt(u,l+I);break;case"takeRight":l=Lt(l,u-I);break}}return{start:l,end:u}}function Vf(l){var u=l.match(D2);return u?u[1].split(wh):[]}function Al(l,u,v){u=La(u,l);for(var C=-1,j=u.length,z=!1;++C<j;){var I=ft(u[C]);if(!(z=l!=null&&v(l,I)))break;l=l[I]}return z||++C!=j?z:(j=l==null?0:l.length,!!j&&ds(j)&&Zi(I,j)&&(Ne(l)||Na(l)))}function zf(l){var u=l.length,v=new l.constructor(u);return u&&typeof l[0]=="string"&&ut.call(l,"index")&&(v.index=l.index,v.input=l.input),v}function Hf(l){return typeof l.constructor=="function"&&!At(l)?ui(Zo(l)):{}}function Pf(l,u,v){var C=l.constructor;switch(u){case xn:return is(l);case it:case Yt:return new C(+l);case ri:return Rf(l,v);case jn:case Cd:case Td:case Ed:case ws:case bs:case Sa:case Ss:case Nr:return Of(l,v);case ai:return new C;case Do:case Vo:return new C(l);case ys:return iu(l);case Pn:return new C;case zo:return yp(l)}}function Lp(l,u){var v=u.length;if(!v)return l;var C=v-1;return u[C]=(v>1?"& ":"")+u[C],u=u.join(v>2?", ":" "),l.replace(k2,`{
/* [wrapped with `+u+`] */
`)}function ka(l){return Ne(l)||Na(l)||!!($n&&l&&l[$n])}function Zi(l,u){var v=typeof l;return u=u??ue,!!u&&(v=="number"||v!="symbol"&&Br.test(l))&&l>-1&&l%1==0&&l<u}function kn(l,u,v){if(!Ht(v))return!1;var C=typeof u;return(C=="number"?en(v)&&Zi(u,v.length):C=="string"&&u in v)?Qn(v[u],l):!1}function fu(l,u){if(Ne(l))return!1;var v=typeof l;return v=="number"||v=="symbol"||v=="boolean"||l==null||Dn(l)?!0:_2.test(l)||!yh.test(l)||u!=null&&l in st(u)}function Da(l){var u=typeof l;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?l!=="__proto__":l===null}function hu(l){var u=Tl(l),v=k[u];if(typeof v!="function"||!(u in Ye.prototype))return!1;if(l===v)return!0;var C=cu(v);return!!C&&l===C[0]}function pu(l){return!!tf&&tf in l}var Ml=Yo?Xi:Ng;function At(l){var u=l&&l.constructor,v=typeof u=="function"&&u.prototype||Is;return l===v}function _p(l){return l===l&&!Ht(l)}function kp(l,u){return function(v){return v==null?!1:v[l]===u&&(u!==i||l in st(v))}}function Dp(l){var u=Nl(l,function(C){return v.size===g&&v.clear(),C}),v=u.cache;return u}function jl(l,u){var v=l[1],C=u[1],j=v|C,z=j<(P|_|G),I=C==G&&v==O||C==G&&v==Q&&l[7].length<=u[8]||C==(G|Q)&&u[7].length<=u[8]&&v==O;if(!(z||I))return l;C&P&&(l[2]=u[2],j|=v&P?0:R);var U=u[3];if(U){var K=l[3];l[3]=K?Lf(K,U,u[4]):U,l[4]=K?nr(l[3],y):u[4]}return U=u[5],U&&(K=l[5],l[5]=K?bp(K,U,u[6]):U,l[6]=K?nr(l[5],y):u[6]),U=u[7],U&&(l[7]=U),C&G&&(l[8]=l[8]==null?u[8]:Dt(l[8],u[8])),l[9]==null&&(l[9]=u[9]),l[0]=u[0],l[1]=j,l}function hr(l){var u=[];if(l!=null)for(var v in st(l))u.push(v);return u}function Vp(l){return Rn.call(l)}function Nf(l,u,v){return u=Lt(u===i?l.length-1:u,0),function(){for(var C=arguments,j=-1,z=Lt(C.length-u,0),I=ae(z);++j<z;)I[j]=C[u+j];j=-1;for(var U=ae(u+1);++j<u;)U[j]=C[j];return U[u]=v(I),In(l,this,U)}}function to(l,u){return u.length<2?l:Li(l,di(u,0,-1))}function da(l,u){for(var v=l.length,C=Dt(u.length,v),j=Qt(l);C--;){var z=u[C];l[C]=Zi(z,v)?j[z]:i}return l}function mu(l,u){if(!(u==="constructor"&&typeof l[u]=="function")&&u!="__proto__")return l[u]}var gu=Ol(dl),no=af||function(l,u){return Ft.setTimeout(l,u)},Rl=Ol(fl);function xu(l,u,v){var C=u+"";return Rl(l,Lp(C,zp(Vf(C),v)))}function Ol(l){var u=0,v=0;return function(){var C=Aa(),j=Ae-(C-v);if(v=C,j>0){if(++u>=ye)return arguments[0]}else u=0;return l.apply(i,arguments)}}function Ll(l,u){var v=-1,C=l.length,j=C-1;for(u=u===i?C:u;++v<u;){var z=Qc(v,j),I=l[z];l[z]=l[v],l[v]=I}return l.length=u,l}var fa=Dp(function(l){var u=[];return l.charCodeAt(0)===46&&u.push(""),l.replace(Za,function(v,C,j,z){u.push(j?z.replace(Ts,"$1"):C||v)}),u});function ft(l){if(typeof l=="string"||Dn(l))return l;var u=l+"";return u=="0"&&1/l==-le?"-0":u}function Va(l){if(l!=null){try{return Wo.call(l)}catch{}try{return l+""}catch{}}return""}function zp(l,u){return Ti(Oe,function(v){var C="_."+v[0];u&v[1]&&!Tc(l,C)&&l.push(C)}),l.sort()}function Jt(l){if(l instanceof Ye)return l.clone();var u=new Gn(l.__wrapped__,l.__chain__);return u.__actions__=Qt(l.__actions__),u.__index__=l.__index__,u.__values__=l.__values__,u}function ng(l,u,v){(v?kn(l,u,v):u===i)?u=1:u=Lt(Ie(u),0);var C=l==null?0:l.length;if(!C||u<1)return[];for(var j=0,z=0,I=ae(Gs(C/u));j<C;)I[z++]=di(l,j,j+=u);return I}function Hp(l){for(var u=-1,v=l==null?0:l.length,C=0,j=[];++u<v;){var z=l[u];z&&(j[C++]=z)}return j}function Pp(){var l=arguments.length;if(!l)return[];for(var u=ae(l-1),v=arguments[0],C=l;C--;)u[C-1]=arguments[C];return Ta(Ne(v)?Qt(v):[v],et(u,1))}var zt=Ge(function(l,u){return Ut(l)?lr(l,et(u,1,Ut,!0)):[]}),Zn=Ge(function(l,u){var v=bn(u);return Ut(v)&&(v=i),Ut(l)?lr(l,et(u,1,Ut,!0),Le(v,2)):[]}),za=Ge(function(l,u){var v=bn(u);return Ut(v)&&(v=i),Ut(l)?lr(l,et(u,1,Ut,!0),i,v):[]});function Np(l,u,v){var C=l==null?0:l.length;return C?(u=v||u===i?1:Ie(u),di(l,u<0?0:u,C)):[]}function Bp(l,u,v){var C=l==null?0:l.length;return C?(u=v||u===i?1:Ie(u),u=C-u,di(l,0,u<0?0:u)):[]}function ig(l,u){return l&&l.length?ml(l,Le(u,3),!0,!0):[]}function Bf(l,u){return l&&l.length?ml(l,Le(u,3),!0):[]}function hi(l,u,v,C){var j=l==null?0:l.length;return j?(v&&typeof v!="number"&&kn(l,u,v)&&(v=0,C=j),Fe(l,u,v,C)):[]}function ki(l,u,v){var C=l==null?0:l.length;if(!C)return-1;var j=v==null?0:Ie(v);return j<0&&(j=Lt(C+j,0)),Ec(l,Le(u,3),j)}function If(l,u,v){var C=l==null?0:l.length;if(!C)return-1;var j=C-1;return v!==i&&(j=Ie(v),j=v<0?Lt(C+j,0):Dt(j,C-1)),Ec(l,Le(u,3),j,!0)}function Xn(l){var u=l==null?0:l.length;return u?et(l,1):[]}function Ip(l){var u=l==null?0:l.length;return u?et(l,le):[]}function pr(l,u){var v=l==null?0:l.length;return v?(u=u===i?1:Ie(u),et(l,u)):[]}function cs(l){for(var u=-1,v=l==null?0:l.length,C={};++u<v;){var j=l[u];C[j[0]]=j[1]}return C}function Ha(l){return l&&l.length?l[0]:i}function $f(l,u,v){var C=l==null?0:l.length;if(!C)return-1;var j=v==null?0:Ie(v);return j<0&&(j=Lt(C+j,0)),Vs(l,u,j)}function Uf(l){var u=l==null?0:l.length;return u?di(l,0,-1):[]}var ha=Ge(function(l){var u=kt(l,nu);return u.length&&u[0]===l[0]?pf(u):[]}),$p=Ge(function(l){var u=bn(l),v=kt(l,nu);return u===bn(v)?u=i:v.pop(),v.length&&v[0]===l[0]?pf(v,Le(u,2)):[]}),io=Ge(function(l){var u=bn(l),v=kt(l,nu);return u=typeof u=="function"?u:i,u&&v.pop(),v.length&&v[0]===l[0]?pf(v,i,u):[]});function _l(l,u){return l==null?"":Mi.call(l,u)}function bn(l){var u=l==null?0:l.length;return u?l[u-1]:i}function ao(l,u,v){var C=l==null?0:l.length;if(!C)return-1;var j=C;return v!==i&&(j=Ie(v),j=j<0?Lt(C+j,0):Dt(j,C-1)),u===u?li(l,u,j):Ec(l,zs,j,!0)}function Up(l,u){return l&&l.length?bf(l,Ie(u)):i}var Gp=Ge(ro);function ro(l,u){return l&&l.length&&u&&u.length?Kc(l,u):l}function Fp(l,u,v){return l&&l.length&&u&&u.length?Kc(l,u,Le(v,2)):l}function vu(l,u,v){return l&&l.length&&u&&u.length?Kc(l,u,i,v):l}var qp=_t(function(l,u){var v=l==null?0:l.length,C=sl(l,u);return Cf(l,kt(u,function(j){return Zi(j,v)?+j:j}).sort(vl)),C});function ag(l,u){var v=[];if(!(l&&l.length))return v;var C=-1,j=[],z=l.length;for(u=Le(u,3);++C<z;){var I=l[C];u(I,C,l)&&(v.push(I),j.push(C))}return Cf(l,j),v}function Gf(l){return l==null?l:sf.call(l)}function mt(l,u,v){var C=l==null?0:l.length;return C?(v&&typeof v!="number"&&kn(l,u,v)?(u=0,v=C):(u=u==null?0:Ie(u),v=v===i?C:Ie(v)),di(l,u,v)):[]}function Ot(l,u){return hl(l,u)}function Ke(l,u,v){return eu(l,u,Le(v,2))}function at(l,u){var v=l==null?0:l.length;if(v){var C=hl(l,u);if(C<v&&Qn(l[C],u))return C}return-1}function gt(l,u){return hl(l,u,!0)}function pi(l,u,v){return eu(l,u,Le(v,2),!0)}function mr(l,u){var v=l==null?0:l.length;if(v){var C=hl(l,u,!0)-1;if(Qn(l[C],u))return C}return-1}function so(l){return l&&l.length?Ef(l):[]}function Ff(l,u){return l&&l.length?Ef(l,Le(u,2)):[]}function Pa(l){var u=l==null?0:l.length;return u?di(l,1,u):[]}function $t(l,u,v){return l&&l.length?(u=v||u===i?1:Ie(u),di(l,0,u<0?0:u)):[]}function gr(l,u,v){var C=l==null?0:l.length;return C?(u=v||u===i?1:Ie(u),u=C-u,di(l,u<0?0:u,C)):[]}function us(l,u){return l&&l.length?ml(l,Le(u,3),!1,!0):[]}function qf(l,u){return l&&l.length?ml(l,Le(u,3)):[]}var Di=Ge(function(l){return Oa(et(l,1,Ut,!0))}),oo=Ge(function(l){var u=bn(l);return Ut(u)&&(u=i),Oa(et(l,1,Ut,!0),Le(u,2))}),kl=Ge(function(l){var u=bn(l);return u=typeof u=="function"?u:i,Oa(et(l,1,Ut,!0),i,u)});function Kn(l){return l&&l.length?Oa(l):[]}function Yf(l,u){return l&&l.length?Oa(l,Le(u,2)):[]}function Wf(l,u){return u=typeof u=="function"?u:i,l&&l.length?Oa(l,i,u):[]}function lo(l){if(!(l&&l.length))return[];var u=0;return l=ra(l,function(v){if(Ut(v))return u=Lt(v.length,u),!0}),er(u,function(v){return kt(l,Ac(v))})}function Dl(l,u){if(!(l&&l.length))return[];var v=lo(l);return u==null?v:kt(v,function(C){return In(u,i,C)})}var xr=Ge(function(l,u){return Ut(l)?lr(l,u):[]}),vn=Ge(function(l){return gl(ra(l,Ut))}),vr=Ge(function(l){var u=bn(l);return Ut(u)&&(u=i),gl(ra(l,Ut),Le(u,2))}),co=Ge(function(l){var u=bn(l);return u=typeof u=="function"?u:i,gl(ra(l,Ut),i,u)}),uo=Ge(lo);function Zf(l,u){return Mf(l||[],u||[],Qr)}function Xf(l,u){return Mf(l||[],u||[],Qs)}var Yp=Ge(function(l){var u=l.length,v=u>1?l[u-1]:i;return v=typeof v=="function"?(l.pop(),v):i,Dl(l,v)});function fo(l){var u=k(l);return u.__chain__=!0,u}function Kf(l,u){return u(l),l}function Sn(l,u){return u(l)}var Wp=_t(function(l){var u=l.length,v=u?l[0]:0,C=this.__wrapped__,j=function(z){return sl(z,l)};return u>1||this.__actions__.length||!(C instanceof Ye)||!Zi(v)?this.thru(j):(C=C.slice(v,+v+(u?1:0)),C.__actions__.push({func:Sn,args:[j],thisArg:i}),new Gn(C,this.__chain__).thru(function(z){return u&&!z.length&&z.push(i),z}))});function mi(){return fo(this)}function Zp(){return new Gn(this.value(),this.__chain__)}function Xp(){this.__values__===i&&(this.__values__=gi(this.value()));var l=this.__index__>=this.__values__.length,u=l?i:this.__values__[this.__index__++];return{done:l,value:u}}function rg(){return this}function yr(l){for(var u,v=this;v instanceof Oi;){var C=Jt(v);C.__index__=0,C.__values__=i,u?j.__wrapped__=C:u=C;var j=C;v=v.__wrapped__}return j.__wrapped__=l,u}function yu(){var l=this.__wrapped__;if(l instanceof Ye){var u=l;return this.__actions__.length&&(u=new Ye(this)),u=u.reverse(),u.__actions__.push({func:Sn,args:[Gf],thisArg:i}),new Gn(u,this.__chain__)}return this.thru(Gf)}function Qf(){return gp(this.__wrapped__,this.__actions__)}var ho=as(function(l,u,v){ut.call(l,v)?++l[v]:qi(l,v,1)});function Kp(l,u,v){var C=Ne(l)?zh:ff;return v&&kn(l,u,v)&&(u=i),C(l,Le(u,3))}function Qp(l,u){var v=Ne(l)?ra:pt;return v(l,Le(u,3))}var Jp=_a(ki),Jf=_a(If);function e0(l,u){return et(Vl(l,u),1)}function sg(l,u){return et(Vl(l,u),le)}function og(l,u,v){return v=v===i?1:Ie(v),et(Vl(l,u),v)}function e1(l,u){var v=Ne(l)?Ti:Ra;return v(l,Le(u,3))}function t0(l,u){var v=Ne(l)?N2:Uc;return v(l,Le(u,3))}var t1=as(function(l,u,v){ut.call(l,v)?l[v].push(u):qi(l,v,[u])});function po(l,u,v,C){l=en(l)?l:bo(l),v=v&&!C?Ie(v):0;var j=l.length;return v<0&&(v=Lt(j+v,0)),Lu(l)?v<=j&&l.indexOf(u,v)>-1:!!j&&Vs(l,u,v)>-1}var wu=Ge(function(l,u,v){var C=-1,j=typeof u=="function",z=en(l)?ae(l.length):[];return Ra(l,function(I){z[++C]=j?In(u,I,v):ts(I,u,v)}),z}),n1=as(function(l,u,v){qi(l,v,u)});function Vl(l,u){var v=Ne(l)?kt:yf;return v(l,Le(u,3))}function i1(l,u,v,C){return l==null?[]:(Ne(u)||(u=u==null?[]:[u]),v=C?i:v,Ne(v)||(v=v==null?[]:[v]),Sf(l,u,v))}var a1=as(function(l,u,v){l[v?0:1].push(u)},function(){return[[],[]]});function r1(l,u,v){var C=Ne(l)?Wd:Kd,j=arguments.length<3;return C(l,Le(u,4),v,j,Ra)}function s1(l,u,v){var C=Ne(l)?B2:Kd,j=arguments.length<3;return C(l,Le(u,4),v,j,Uc)}function bu(l,u){var v=Ne(l)?ra:pt;return v(l,Bl(Le(u,3)))}function o1(l){var u=Ne(l)?Ys:Ks;return u(l)}function l1(l,u,v){(v?kn(l,u,v):u===i)?u=1:u=Ie(u);var C=Ne(l)?ap:Jc;return C(l,u)}function Mt(l){var u=Ne(l)?rp:pp;return u(l)}function n0(l){if(l==null)return 0;if(en(l))return Lu(l)?sa(l):l.length;var u=dn(l);return u==ai||u==Pn?l.size:Yc(l).length}function lg(l,u,v){var C=Ne(l)?Zd:mp;return v&&kn(l,u,v)&&(u=i),C(l,Le(u,3))}var c1=Ge(function(l,u){if(l==null)return[];var v=u.length;return v>1&&kn(l,u[0],u[1])?u=[]:v>2&&kn(u[0],u[1],u[2])&&(u=[u[0]]),Sf(l,et(u,1),[])}),Su=Yr||function(){return Ft.Date.now()};function cg(l,u){if(typeof u!="function")throw new ci(f);return l=Ie(l),function(){if(--l<1)return u.apply(this,arguments)}}function u1(l,u,v){return u=v?i:u,u=l&&u==null?l.length:u,ua(l,G,i,i,i,i,u)}function zl(l,u){var v;if(typeof u!="function")throw new ci(f);return l=Ie(l),function(){return--l>0&&(v=u.apply(this,arguments)),l<=1&&(u=i),v}}var wr=Ge(function(l,u,v){var C=P;if(v.length){var j=nr(v,ls(wr));C|=V}return ua(l,C,u,v,j)}),Cu=Ge(function(l,u,v){var C=P|_;if(v.length){var j=nr(v,ls(Cu));C|=V}return ua(u,C,l,v,j)});function Hl(l,u,v){u=v?i:u;var C=ua(l,O,i,i,i,i,i,u);return C.placeholder=Hl.placeholder,C}function Tu(l,u,v){u=v?i:u;var C=ua(l,N,i,i,i,i,i,u);return C.placeholder=Tu.placeholder,C}function br(l,u,v){var C,j,z,I,U,K,he=0,me=!1,ge=!1,Ce=!0;if(typeof l!="function")throw new ci(f);u=zi(u)||0,Ht(v)&&(me=!!v.leading,ge="maxWait"in v,z=ge?Lt(zi(v.maxWait)||0,u):z,Ce="trailing"in v?!!v.trailing:Ce);function Me(an){var Ia=C,fs=j;return C=j=i,he=an,I=l.apply(fs,Ia),I}function He(an){return he=an,U=no(nt,u),me?Me(an):I}function Ze(an){var Ia=an-K,fs=an-he,Ny=u-Ia;return ge?Dt(Ny,z-fs):Ny}function Pe(an){var Ia=an-K,fs=an-he;return K===i||Ia>=u||Ia<0||ge&&fs>=z}function nt(){var an=Su();if(Pe(an))return lt(an);U=no(nt,Ze(an))}function lt(an){return U=i,Ce&&C?Me(an):(C=j=i,I)}function Qi(){U!==i&&vp(U),he=0,C=K=j=U=i}function xi(){return U===i?I:lt(Su())}function Ji(){var an=Su(),Ia=Pe(an);if(C=arguments,j=this,K=an,Ia){if(U===i)return He(K);if(ge)return vp(U),U=no(nt,u),Me(K)}return U===i&&(U=no(nt,u)),I}return Ji.cancel=Qi,Ji.flush=xi,Ji}var pa=Ge(function(l,u){return Jr(l,1,u)}),Pl=Ge(function(l,u,v){return Jr(l,zi(u)||0,v)});function ug(l){return ua(l,ie)}function Nl(l,u){if(typeof l!="function"||u!=null&&typeof u!="function")throw new ci(f);var v=function(){var C=arguments,j=u?u.apply(this,C):C[0],z=v.cache;if(z.has(j))return z.get(j);var I=l.apply(this,C);return v.cache=z.set(j,I)||z,I};return v.cache=new(Nl.Cache||Fn),v}Nl.Cache=Fn;function Bl(l){if(typeof l!="function")throw new ci(f);return function(){var u=arguments;switch(u.length){case 0:return!l.call(this);case 1:return!l.call(this,u[0]);case 2:return!l.call(this,u[0],u[1]);case 3:return!l.call(this,u[0],u[1],u[2])}return!l.apply(this,u)}}function d1(l){return zl(2,l)}var f1=xp(function(l,u){u=u.length==1&&Ne(u[0])?kt(u[0],oi(Le())):kt(et(u,1),oi(Le()));var v=u.length;return Ge(function(C){for(var j=-1,z=Dt(C.length,v);++j<z;)C[j]=u[j].call(this,C[j]);return In(l,this,C)})}),i0=Ge(function(l,u){var v=nr(u,ls(i0));return ua(l,V,i,u,v)}),Eu=Ge(function(l,u){var v=nr(u,ls(Eu));return ua(l,Y,i,u,v)}),h1=_t(function(l,u){return ua(l,Q,i,i,i,u)});function p1(l,u){if(typeof l!="function")throw new ci(f);return u=u===i?u:Ie(u),Ge(l,u)}function dg(l,u){if(typeof l!="function")throw new ci(f);return u=u==null?0:Lt(Ie(u),0),Ge(function(v){var C=v[u],j=ur(v,0,u);return C&&Ta(j,C),In(l,this,j)})}function a0(l,u,v){var C=!0,j=!0;if(typeof l!="function")throw new ci(f);return Ht(v)&&(C="leading"in v?!!v.leading:C,j="trailing"in v?!!v.trailing:j),br(l,u,{leading:C,maxWait:u,trailing:j})}function r0(l){return u1(l,1)}function fg(l,u){return i0(xl(u),l)}function hg(){if(!arguments.length)return[];var l=arguments[0];return Ne(l)?l:[l]}function Il(l){return yn(l,T)}function pg(l,u){return u=typeof u=="function"?u:i,yn(l,T,u)}function m1(l){return yn(l,b|T)}function Qe(l,u){return u=typeof u=="function"?u:i,yn(l,b|T,u)}function s0(l,u){return u==null||df(l,u,nn(u))}function Qn(l,u){return l===u||l!==l&&u!==u}var o0=os(ol),g1=os(function(l,u){return l>=u}),Na=Gc(function(){return arguments}())?Gc:function(l){return Pt(l)&&ut.call(l,"callee")&&!Fr.call(l,"callee")},Ne=ae.isArray,Au=Cc?oi(Cc):qn;function en(l){return l!=null&&ds(l.length)&&!Xi(l)}function Ut(l){return Pt(l)&&en(l)}function mg(l){return l===!0||l===!1||Pt(l)&&tt(l)==it}var Sr=Hc||Ng,x1=Lh?oi(Lh):Zt;function v1(l){return Pt(l)&&l.nodeType===1&&!Vi(l)}function Mu(l){if(l==null)return!0;if(en(l)&&(Ne(l)||typeof l=="string"||typeof l.splice=="function"||Sr(l)||mo(l)||Na(l)))return!l.length;var u=dn(l);if(u==ai||u==Pn)return!l.size;if(At(l))return!Yc(l).length;for(var v in l)if(ut.call(l,v))return!1;return!0}function bt(l,u){return ns(l,u)}function l0(l,u,v){v=typeof v=="function"?v:i;var C=v?v(l,u):i;return C===i?ns(l,u,i,v):!!C}function tn(l){if(!Pt(l))return!1;var u=tt(l);return u==bi||u==Pr||typeof l.message=="string"&&typeof l.name=="string"&&!Vi(l)}function gg(l){return typeof l=="number"&&Qo(l)}function Xi(l){if(!Ht(l))return!1;var u=tt(l);return u==Mn||u==cc||u==sn||u==ph}function ju(l){return typeof l=="number"&&l==Ie(l)}function ds(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=ue}function Ht(l){var u=typeof l;return l!=null&&(u=="object"||u=="function")}function Pt(l){return l!=null&&typeof l=="object"}var Ru=_h?oi(_h):Fc;function c0(l,u){return l===u||cl(l,u,uu(u))}function xg(l,u,v){return v=typeof v=="function"?v:i,cl(l,u,uu(u),v)}function y1(l){return b1(l)&&l!=+l}function vg(l){if(Ml(l))throw new ze(c);return la(l)}function w1(l){return l===null}function yg(l){return l==null}function b1(l){return typeof l=="number"||Pt(l)&&tt(l)==Do}function Vi(l){if(!Pt(l)||tt(l)!=on)return!1;var u=Zo(l);if(u===null)return!0;var v=ut.call(u,"constructor")&&u.constructor;return typeof v=="function"&&v instanceof v&&Wo.call(v)==Ai}var Ou=kh?oi(kh):qc;function u0(l){return ju(l)&&l>=-ue&&l<=ue}var S1=Dh?oi(Dh):gf;function Lu(l){return typeof l=="string"||!Ne(l)&&Pt(l)&&tt(l)==Vo}function Dn(l){return typeof l=="symbol"||Pt(l)&&tt(l)==zo}var mo=Vh?oi(Vh):xf;function Ki(l){return l===i}function d0(l){return Pt(l)&&dn(l)==Ho}function C1(l){return Pt(l)&&tt(l)==Po}var T1=os(Wc),$l=os(function(l,u){return l<=u});function gi(l){if(!l)return[];if(en(l))return Lu(l)?Ei(l):Qt(l);if(qr&&l[qr])return Gh(l[qr]());var u=dn(l),v=u==ai?Lc:u==Pn?_c:bo;return v(l)}function ma(l){if(!l)return l===0?l:0;if(l=zi(l),l===le||l===-le){var u=l<0?-1:1;return u*xe}return l===l?l:0}function Ie(l){var u=ma(l),v=u%1;return u===u?v?u-v:u:0}function ga(l){return l?Yi(Ie(l),0,re):0}function zi(l){if(typeof l=="number")return l;if(Dn(l))return B;if(Ht(l)){var u=typeof l.valueOf=="function"?l.valueOf():l;l=Ht(u)?u+"":u}if(typeof l!="string")return l===0?l:+l;l=Bh(l);var v=cn.test(l);return v||Sh.test(l)?H2(l.slice(2),v?2:8):Ms.test(l)?B:+l}function E1(l){return Wn(l,fn(l))}function go(l){return l?Yi(Ie(l),-ue,ue):l===0?l:0}function dt(l){return l==null?"":Yn(l)}var wg=rs(function(l,u){if(At(u)||en(u)){Wn(u,nn(u),l);return}for(var v in u)ut.call(u,v)&&Qr(l,v,u[v])}),A1=rs(function(l,u){Wn(u,fn(u),l)}),_u=rs(function(l,u,v,C){Wn(u,fn(u),l,C)}),bg=rs(function(l,u,v,C){Wn(u,nn(u),l,C)}),Sg=_t(sl);function Cg(l,u){var v=ui(l);return u==null?v:ja(v,u)}var Tg=Ge(function(l,u){l=st(l);var v=-1,C=u.length,j=C>2?u[2]:i;for(j&&kn(u[0],u[1],j)&&(C=1);++v<C;)for(var z=u[v],I=fn(z),U=-1,K=I.length;++U<K;){var he=I[U],me=l[he];(me===i||Qn(me,Is[he])&&!ut.call(l,he))&&(l[he]=z[he])}return l}),M1=Ge(function(l){return l.push(i,Df),In(ql,i,l)});function xo(l,u){return Hh(l,Le(u,3),wn)}function Ul(l,u){return Hh(l,Le(u,3),Xs)}function j1(l,u){return l==null?l:Zs(l,Le(u,3),fn)}function Eg(l,u){return l==null?l:es(l,Le(u,3),fn)}function vo(l,u){return l&&wn(l,Le(u,3))}function Gl(l,u){return l&&Xs(l,Le(u,3))}function R1(l){return l==null?[]:cr(l,nn(l))}function ku(l){return l==null?[]:cr(l,fn(l))}function Fl(l,u,v){var C=l==null?i:Li(l,u);return C===i?v:C}function f0(l,u){return l!=null&&Al(l,u,hf)}function yo(l,u){return l!=null&&Al(l,u,lp)}var O1=wl(function(l,u,v){u!=null&&typeof u.toString!="function"&&(u=Rn.call(u)),l[u]=v},ee(te)),L1=wl(function(l,u,v){u!=null&&typeof u.toString!="function"&&(u=Rn.call(u)),ut.call(l,u)?l[u].push(v):l[u]=[v]},Le),Ag=Ge(ts);function nn(l){return en(l)?uf(l):Yc(l)}function fn(l){return en(l)?uf(l,!0):up(l)}function Mg(l,u){var v={};return u=Le(u,3),wn(l,function(C,j,z){qi(v,u(C,j,z),C)}),v}function jg(l,u){var v={};return u=Le(u,3),wn(l,function(C,j,z){qi(v,j,u(C,j,z))}),v}var Rg=rs(function(l,u,v){ul(l,u,v)}),ql=rs(function(l,u,v,C){ul(l,u,v,C)}),Du=_t(function(l,u){var v={};if(l==null)return v;var C=!1;u=kt(u,function(z){return z=La(z,l),C||(C=z.length>1),z}),Wn(l,lu(l),v),C&&(v=yn(v,b|S|T,Ap));for(var j=u.length;j--;)pl(v,u[j]);return v});function h0(l,u){return wo(l,Bl(Le(u)))}var Og=_t(function(l,u){return l==null?{}:dp(l,u)});function wo(l,u){if(l==null)return{};var v=kt(lu(l),function(C){return[C]});return u=Le(u),Xc(l,v,function(C,j){return u(C,j[0])})}function Lg(l,u,v){u=La(u,l);var C=-1,j=u.length;for(j||(j=1,l=i);++C<j;){var z=l==null?i:l[ft(u[C])];z===i&&(C=j,z=v),l=Xi(z)?z.call(l):z}return l}function _1(l,u,v){return l==null?l:Qs(l,u,v)}function k1(l,u,v,C){return C=typeof C=="function"?C:i,l==null?l:Qs(l,u,v,C)}var p0=Cl(nn),m0=Cl(fn);function g0(l,u,v){var C=Ne(l),j=C||Sr(l)||mo(l);if(u=Le(u,4),v==null){var z=l&&l.constructor;j?v=C?new z:[]:Ht(l)?v=Xi(z)?ui(Zo(l)):{}:v={}}return(j?Ti:wn)(l,function(I,U,K){return u(v,I,U,K)}),v}function D1(l,u){return l==null?!0:pl(l,u)}function Vu(l,u,v){return l==null?l:Af(l,u,xl(v))}function _g(l,u,v,C){return C=typeof C=="function"?C:i,l==null?l:Af(l,u,xl(v),C)}function bo(l){return l==null?[]:Rc(l,nn(l))}function x0(l){return l==null?[]:Rc(l,fn(l))}function v0(l,u,v){return v===i&&(v=u,u=i),v!==i&&(v=zi(v),v=v===v?v:0),u!==i&&(u=zi(u),u=u===u?u:0),Yi(zi(l),u,v)}function zu(l,u,v){return u=ma(u),v===i?(v=u,u=0):v=ma(v),l=zi(l),cp(l,u,v)}function y0(l,u,v){if(v&&typeof v!="boolean"&&kn(l,u,v)&&(u=v=i),v===i&&(typeof u=="boolean"?(v=u,u=i):typeof l=="boolean"&&(v=l,l=i)),l===i&&u===i?(l=0,u=1):(l=ma(l),u===i?(u=l,l=0):u=ma(u)),l>u){var C=l;l=u,u=C}if(v||l%1||u%1){var j=rf();return Dt(l+j*(u-l+qo("1e-"+((j+"").length-1))),u)}return Qc(l,u)}var V1=_n(function(l,u,v){return u=u.toLowerCase(),l+(v?Hu(u):u)});function Hu(l){return d(dt(l).toLowerCase())}function Ba(l){return l=dt(l),l&&l.replace(js,Oc).replace(Ca,"")}function Cr(l,u,v){l=dt(l),u=Yn(u);var C=l.length;v=v===i?C:Yi(Ie(v),0,C);var j=v;return v-=u.length,v>=0&&l.slice(v,j)==u}function Tr(l){return l=dt(l),l&&xh.test(l)?l.replace(Cs,Ih):l}function Yl(l){return l=dt(l),l&&Nn.test(l)?l.replace(ln,"\\$&"):l}var Wl=_n(function(l,u,v){return l+(v?"-":"")+u.toLowerCase()}),Er=_n(function(l,u,v){return l+(v?" ":"")+u.toLowerCase()}),kg=fi("toLowerCase");function z1(l,u,v){l=dt(l),u=Ie(u);var C=u?sa(l):0;if(!u||C>=u)return l;var j=(u-C)/2;return Sl(Ea(j),v)+l+Sl(Gs(j),v)}function Zl(l,u,v){l=dt(l),u=Ie(u);var C=u?sa(l):0;return u&&C<u?l+Sl(u-C,v):l}function Dg(l,u,v){l=dt(l),u=Ie(u);var C=u?sa(l):0;return u&&C<u?Sl(u-C,v)+l:l}function H1(l,u,v){return v||u==null?u=0:u&&(u=+u),Wr(dt(l).replace(Xa,""),u||0)}function Pu(l,u,v){return(v?kn(l,u,v):u===i)?u=1:u=Ie(u),Tf(dt(l),u)}function P1(){var l=arguments,u=dt(l[0]);return l.length<3?u:u.replace(l[1],l[2])}var Vg=_n(function(l,u,v){return l+(v?"_":"")+u.toLowerCase()});function Nu(l,u,v){return v&&typeof v!="number"&&kn(l,u,v)&&(u=v=i),v=v===i?re:v>>>0,v?(l=dt(l),l&&(typeof u=="string"||u!=null&&!Ou(u))&&(u=Yn(u),!u&&tr(l))?ur(Ei(l),0,v):l.split(u,v)):[]}var Bu=_n(function(l,u,v){return l+(v?" ":"")+d(u)});function N1(l,u,v){return l=dt(l),v=v==null?0:Yi(Ie(v),0,l.length),u=Yn(u),l.slice(v,v+u.length)==u}function Xl(l,u,v){var C=k.templateSettings;v&&kn(l,u,v)&&(u=i),l=dt(l),u=_u({},u,C,su);var j=_u({},u.imports,C.imports,su),z=nn(j),I=Rc(j,z),U,K,he=0,me=u.interpolate||fc,ge="__p += '",Ce=kc((u.escape||fc).source+"|"+me.source+"|"+(me===dc?Es:fc).source+"|"+(u.evaluate||fc).source+"|$","g"),Me="//# sourceURL="+(ut.call(u,"sourceURL")?(u.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++jh+"]")+`
`;l.replace(Ce,function(Pe,nt,lt,Qi,xi,Ji){return lt||(lt=Qi),ge+=l.slice(he,Ji).replace(Ch,$h),nt&&(U=!0,ge+=`' +
__e(`+nt+`) +
'`),xi&&(K=!0,ge+=`';
`+xi+`;
__p += '`),lt&&(ge+=`' +
((__t = (`+lt+`)) == null ? '' : __t) +
'`),he=Ji+Pe.length,Pe}),ge+=`';
`;var He=ut.call(u,"variable")&&u.variable;if(!He)ge=`with (obj) {
`+ge+`
}
`;else if(jd.test(He))throw new ze(h);ge=(K?ge.replace(O2,""):ge).replace(mh,"$1").replace(gh,"$1;"),ge="function("+(He||"obj")+`) {
`+(He?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(U?", __e = _.escape":"")+(K?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var Ze=w(function(){return rt(z,Me+"return "+ge).apply(i,I)});if(Ze.source=ge,tn(Ze))throw Ze;return Ze}function w0(l){return dt(l).toLowerCase()}function Iu(l){return dt(l).toUpperCase()}function B1(l,u,v){if(l=dt(l),l&&(v||u===i))return Bh(l);if(!l||!(u=Yn(u)))return l;var C=Ei(l),j=Ei(u),z=Ps(C,j),I=Ns(C,j)+1;return ur(C,z,I).join("")}function zg(l,u,v){if(l=dt(l),l&&(v||u===i))return l.slice(0,Jd(l)+1);if(!l||!(u=Yn(u)))return l;var C=Ei(l),j=Ns(C,Ei(u))+1;return ur(C,0,j).join("")}function $u(l,u,v){if(l=dt(l),l&&(v||u===i))return l.replace(Xa,"");if(!l||!(u=Yn(u)))return l;var C=Ei(l),j=Ps(C,Ei(u));return ur(C,j).join("")}function n(l,u){var v=se,C=de;if(Ht(u)){var j="separator"in u?u.separator:j;v="length"in u?Ie(u.length):v,C="omission"in u?Yn(u.omission):C}l=dt(l);var z=l.length;if(tr(l)){var I=Ei(l);z=I.length}if(v>=z)return l;var U=v-sa(C);if(U<1)return C;var K=I?ur(I,0,U).join(""):l.slice(0,U);if(j===i)return K+C;if(I&&(U+=K.length-U),Ou(j)){if(l.slice(U).search(j)){var he,me=K;for(j.global||(j=kc(j.source,dt(As.exec(j))+"g")),j.lastIndex=0;he=j.exec(me);)var ge=he.index;K=K.slice(0,ge===i?U:ge)}}else if(l.indexOf(Yn(j),U)!=U){var Ce=K.lastIndexOf(j);Ce>-1&&(K=K.slice(0,Ce))}return K+C}function r(l){return l=dt(l),l&&L2.test(l)?l.replace(uc,qh):l}var s=_n(function(l,u,v){return l+(v?" ":"")+u.toUpperCase()}),d=fi("toUpperCase");function m(l,u,v){return l=dt(l),u=v?i:u,u===i?Uh(l)?W2(l):U2(l):l.match(u)||[]}var w=Ge(function(l,u){try{return In(l,i,u)}catch(v){return tn(v)?v:new ze(v)}}),A=_t(function(l,u){return Ti(u,function(v){v=ft(v),qi(l,v,wr(l[v],l))}),l});function D(l){var u=l==null?0:l.length,v=Le();return l=u?kt(l,function(C){if(typeof C[1]!="function")throw new ci(f);return[v(C[0]),C[1]]}):[],Ge(function(C){for(var j=-1;++j<u;){var z=l[j];if(In(z[0],this,C))return In(z[1],this,C)}})}function $(l){return sp(yn(l,b))}function ee(l){return function(){return l}}function ce(l,u){return l==null||l!==l?u:l}var pe=ca(),ne=ca(!0);function te(l){return l}function De(l){return vf(typeof l=="function"?l:yn(l,b))}function ke(l){return wf(yn(l,b))}function St(l,u){return Zc(l,yn(u,b))}var Z=Ge(function(l,u){return function(v){return ts(v,l,u)}}),F=Ge(function(l,u){return function(v){return ts(l,v,u)}});function J(l,u,v){var C=nn(u),j=cr(u,C);v==null&&!(Ht(u)&&(j.length||!C.length))&&(v=u,u=l,l=this,j=cr(u,nn(u)));var z=!(Ht(v)&&"chain"in v)||!!v.chain,I=Xi(l);return Ti(j,function(U){var K=u[U];l[U]=K,I&&(l.prototype[U]=function(){var he=this.__chain__;if(z||he){var me=l(this.__wrapped__),ge=me.__actions__=Qt(this.__actions__);return ge.push({func:K,args:arguments,thisArg:l}),me.__chain__=he,me}return K.apply(l,Ta([this.value()],arguments))})}),l}function fe(){return Ft._===this&&(Ft._=$s),this}function Te(){}function We(l){return l=Ie(l),Ge(function(u){return bf(u,l)})}var je=bl(kt),Ve=bl(zh),hn=bl(Zd);function ot(l){return fu(l)?Ac(ft(l)):fp(l)}function Ar(l){return function(u){return l==null?i:Li(l,u)}}var Hg=dr(),Jb=dr(!0);function Pg(){return[]}function Ng(){return!1}function e9(){return{}}function t9(){return""}function n9(){return!0}function i9(l,u){if(l=Ie(l),l<1||l>ue)return[];var v=re,C=Dt(l,re);u=Le(u),l-=re;for(var j=er(C,u);++v<l;)u(v);return j}function a9(l){return Ne(l)?kt(l,ft):Dn(l)?[l]:Qt(fa(dt(l)))}function r9(l){var u=++Ui;return dt(l)+u}var s9=Js(function(l,u){return l+u},0),o9=ru("ceil"),l9=Js(function(l,u){return l/u},1),c9=ru("floor");function u9(l){return l&&l.length?Wi(l,te,ol):i}function d9(l,u){return l&&l.length?Wi(l,Le(u,2),ol):i}function f9(l){return Ph(l,te)}function h9(l,u){return Ph(l,Le(u,2))}function p9(l){return l&&l.length?Wi(l,te,Wc):i}function m9(l,u){return l&&l.length?Wi(l,Le(u,2),Wc):i}var g9=Js(function(l,u){return l*u},1),x9=ru("round"),v9=Js(function(l,u){return l-u},0);function y9(l){return l&&l.length?jc(l,te):0}function w9(l,u){return l&&l.length?jc(l,Le(u,2)):0}return k.after=cg,k.ary=u1,k.assign=wg,k.assignIn=A1,k.assignInWith=_u,k.assignWith=bg,k.at=Sg,k.before=zl,k.bind=wr,k.bindAll=A,k.bindKey=Cu,k.castArray=hg,k.chain=fo,k.chunk=ng,k.compact=Hp,k.concat=Pp,k.cond=D,k.conforms=$,k.constant=ee,k.countBy=ho,k.create=Cg,k.curry=Hl,k.curryRight=Tu,k.debounce=br,k.defaults=Tg,k.defaultsDeep=M1,k.defer=pa,k.delay=Pl,k.difference=zt,k.differenceBy=Zn,k.differenceWith=za,k.drop=Np,k.dropRight=Bp,k.dropRightWhile=ig,k.dropWhile=Bf,k.fill=hi,k.filter=Qp,k.flatMap=e0,k.flatMapDeep=sg,k.flatMapDepth=og,k.flatten=Xn,k.flattenDeep=Ip,k.flattenDepth=pr,k.flip=ug,k.flow=pe,k.flowRight=ne,k.fromPairs=cs,k.functions=R1,k.functionsIn=ku,k.groupBy=t1,k.initial=Uf,k.intersection=ha,k.intersectionBy=$p,k.intersectionWith=io,k.invert=O1,k.invertBy=L1,k.invokeMap=wu,k.iteratee=De,k.keyBy=n1,k.keys=nn,k.keysIn=fn,k.map=Vl,k.mapKeys=Mg,k.mapValues=jg,k.matches=ke,k.matchesProperty=St,k.memoize=Nl,k.merge=Rg,k.mergeWith=ql,k.method=Z,k.methodOf=F,k.mixin=J,k.negate=Bl,k.nthArg=We,k.omit=Du,k.omitBy=h0,k.once=d1,k.orderBy=i1,k.over=je,k.overArgs=f1,k.overEvery=Ve,k.overSome=hn,k.partial=i0,k.partialRight=Eu,k.partition=a1,k.pick=Og,k.pickBy=wo,k.property=ot,k.propertyOf=Ar,k.pull=Gp,k.pullAll=ro,k.pullAllBy=Fp,k.pullAllWith=vu,k.pullAt=qp,k.range=Hg,k.rangeRight=Jb,k.rearg=h1,k.reject=bu,k.remove=ag,k.rest=p1,k.reverse=Gf,k.sampleSize=l1,k.set=_1,k.setWith=k1,k.shuffle=Mt,k.slice=mt,k.sortBy=c1,k.sortedUniq=so,k.sortedUniqBy=Ff,k.split=Nu,k.spread=dg,k.tail=Pa,k.take=$t,k.takeRight=gr,k.takeRightWhile=us,k.takeWhile=qf,k.tap=Kf,k.throttle=a0,k.thru=Sn,k.toArray=gi,k.toPairs=p0,k.toPairsIn=m0,k.toPath=a9,k.toPlainObject=E1,k.transform=g0,k.unary=r0,k.union=Di,k.unionBy=oo,k.unionWith=kl,k.uniq=Kn,k.uniqBy=Yf,k.uniqWith=Wf,k.unset=D1,k.unzip=lo,k.unzipWith=Dl,k.update=Vu,k.updateWith=_g,k.values=bo,k.valuesIn=x0,k.without=xr,k.words=m,k.wrap=fg,k.xor=vn,k.xorBy=vr,k.xorWith=co,k.zip=uo,k.zipObject=Zf,k.zipObjectDeep=Xf,k.zipWith=Yp,k.entries=p0,k.entriesIn=m0,k.extend=A1,k.extendWith=_u,J(k,k),k.add=s9,k.attempt=w,k.camelCase=V1,k.capitalize=Hu,k.ceil=o9,k.clamp=v0,k.clone=Il,k.cloneDeep=m1,k.cloneDeepWith=Qe,k.cloneWith=pg,k.conformsTo=s0,k.deburr=Ba,k.defaultTo=ce,k.divide=l9,k.endsWith=Cr,k.eq=Qn,k.escape=Tr,k.escapeRegExp=Yl,k.every=Kp,k.find=Jp,k.findIndex=ki,k.findKey=xo,k.findLast=Jf,k.findLastIndex=If,k.findLastKey=Ul,k.floor=c9,k.forEach=e1,k.forEachRight=t0,k.forIn=j1,k.forInRight=Eg,k.forOwn=vo,k.forOwnRight=Gl,k.get=Fl,k.gt=o0,k.gte=g1,k.has=f0,k.hasIn=yo,k.head=Ha,k.identity=te,k.includes=po,k.indexOf=$f,k.inRange=zu,k.invoke=Ag,k.isArguments=Na,k.isArray=Ne,k.isArrayBuffer=Au,k.isArrayLike=en,k.isArrayLikeObject=Ut,k.isBoolean=mg,k.isBuffer=Sr,k.isDate=x1,k.isElement=v1,k.isEmpty=Mu,k.isEqual=bt,k.isEqualWith=l0,k.isError=tn,k.isFinite=gg,k.isFunction=Xi,k.isInteger=ju,k.isLength=ds,k.isMap=Ru,k.isMatch=c0,k.isMatchWith=xg,k.isNaN=y1,k.isNative=vg,k.isNil=yg,k.isNull=w1,k.isNumber=b1,k.isObject=Ht,k.isObjectLike=Pt,k.isPlainObject=Vi,k.isRegExp=Ou,k.isSafeInteger=u0,k.isSet=S1,k.isString=Lu,k.isSymbol=Dn,k.isTypedArray=mo,k.isUndefined=Ki,k.isWeakMap=d0,k.isWeakSet=C1,k.join=_l,k.kebabCase=Wl,k.last=bn,k.lastIndexOf=ao,k.lowerCase=Er,k.lowerFirst=kg,k.lt=T1,k.lte=$l,k.max=u9,k.maxBy=d9,k.mean=f9,k.meanBy=h9,k.min=p9,k.minBy=m9,k.stubArray=Pg,k.stubFalse=Ng,k.stubObject=e9,k.stubString=t9,k.stubTrue=n9,k.multiply=g9,k.nth=Up,k.noConflict=fe,k.noop=Te,k.now=Su,k.pad=z1,k.padEnd=Zl,k.padStart=Dg,k.parseInt=H1,k.random=y0,k.reduce=r1,k.reduceRight=s1,k.repeat=Pu,k.replace=P1,k.result=Lg,k.round=x9,k.runInContext=q,k.sample=o1,k.size=n0,k.snakeCase=Vg,k.some=lg,k.sortedIndex=Ot,k.sortedIndexBy=Ke,k.sortedIndexOf=at,k.sortedLastIndex=gt,k.sortedLastIndexBy=pi,k.sortedLastIndexOf=mr,k.startCase=Bu,k.startsWith=N1,k.subtract=v9,k.sum=y9,k.sumBy=w9,k.template=Xl,k.times=i9,k.toFinite=ma,k.toInteger=Ie,k.toLength=ga,k.toLower=w0,k.toNumber=zi,k.toSafeInteger=go,k.toString=dt,k.toUpper=Iu,k.trim=B1,k.trimEnd=zg,k.trimStart=$u,k.truncate=n,k.unescape=r,k.uniqueId=r9,k.upperCase=s,k.upperFirst=d,k.each=e1,k.eachRight=t0,k.first=Ha,J(k,function(){var l={};return wn(k,function(u,v){ut.call(k.prototype,v)||(l[v]=u)}),l}(),{chain:!1}),k.VERSION=a,Ti(["bind","bindKey","curry","curryRight","partial","partialRight"],function(l){k[l].placeholder=k}),Ti(["drop","take"],function(l,u){Ye.prototype[l]=function(v){v=v===i?1:Lt(Ie(v),0);var C=this.__filtered__&&!u?new Ye(this):this.clone();return C.__filtered__?C.__takeCount__=Dt(v,C.__takeCount__):C.__views__.push({size:Dt(v,re),type:l+(C.__dir__<0?"Right":"")}),C},Ye.prototype[l+"Right"]=function(v){return this.reverse()[l](v).reverse()}}),Ti(["filter","map","takeWhile"],function(l,u){var v=u+1,C=v==Re||v==X;Ye.prototype[l]=function(j){var z=this.clone();return z.__iteratees__.push({iteratee:Le(j,3),type:v}),z.__filtered__=z.__filtered__||C,z}}),Ti(["head","last"],function(l,u){var v="take"+(u?"Right":"");Ye.prototype[l]=function(){return this[v](1).value()[0]}}),Ti(["initial","tail"],function(l,u){var v="drop"+(u?"":"Right");Ye.prototype[l]=function(){return this.__filtered__?new Ye(this):this[v](1)}}),Ye.prototype.compact=function(){return this.filter(te)},Ye.prototype.find=function(l){return this.filter(l).head()},Ye.prototype.findLast=function(l){return this.reverse().find(l)},Ye.prototype.invokeMap=Ge(function(l,u){return typeof l=="function"?new Ye(this):this.map(function(v){return ts(v,l,u)})}),Ye.prototype.reject=function(l){return this.filter(Bl(Le(l)))},Ye.prototype.slice=function(l,u){l=Ie(l);var v=this;return v.__filtered__&&(l>0||u<0)?new Ye(v):(l<0?v=v.takeRight(-l):l&&(v=v.drop(l)),u!==i&&(u=Ie(u),v=u<0?v.dropRight(-u):v.take(u-l)),v)},Ye.prototype.takeRightWhile=function(l){return this.reverse().takeWhile(l).reverse()},Ye.prototype.toArray=function(){return this.take(re)},wn(Ye.prototype,function(l,u){var v=/^(?:filter|find|map|reject)|While$/.test(u),C=/^(?:head|last)$/.test(u),j=k[C?"take"+(u=="last"?"Right":""):u],z=C||/^find/.test(u);j&&(k.prototype[u]=function(){var I=this.__wrapped__,U=C?[1]:arguments,K=I instanceof Ye,he=U[0],me=K||Ne(I),ge=function(nt){var lt=j.apply(k,Ta([nt],U));return C&&Ce?lt[0]:lt};me&&v&&typeof he=="function"&&he.length!=1&&(K=me=!1);var Ce=this.__chain__,Me=!!this.__actions__.length,He=z&&!Ce,Ze=K&&!Me;if(!z&&me){I=Ze?I:new Ye(this);var Pe=l.apply(I,U);return Pe.__actions__.push({func:Sn,args:[ge],thisArg:i}),new Gn(Pe,Ce)}return He&&Ze?l.apply(this,U):(Pe=this.thru(ge),He?C?Pe.value()[0]:Pe.value():Pe)})}),Ti(["pop","push","shift","sort","splice","unshift"],function(l){var u=Dc[l],v=/^(?:push|sort|unshift)$/.test(l)?"tap":"thru",C=/^(?:pop|shift)$/.test(l);k.prototype[l]=function(){var j=arguments;if(C&&!this.__chain__){var z=this.value();return u.apply(Ne(z)?z:[],j)}return this[v](function(I){return u.apply(Ne(I)?I:[],j)})}}),wn(Ye.prototype,function(l,u){var v=k[u];if(v){var C=v.name+"";ut.call(Ri,C)||(Ri[C]=[]),Ri[C].push({name:u,func:v})}}),Ri[It(i,_).name]=[{name:"wrapper",func:i}],Ye.prototype.clone=nl,Ye.prototype.reverse=Pc,Ye.prototype.value=Xr,k.prototype.at=Wp,k.prototype.chain=mi,k.prototype.commit=Zp,k.prototype.next=Xp,k.prototype.plant=yr,k.prototype.reverse=yu,k.prototype.toJSON=k.prototype.valueOf=k.prototype.value=Qf,k.prototype.first=k.prototype.head,qr&&(k.prototype[qr]=rg),k},ir=Bs();Ja?((Ja.exports=ir)._=ir,Ds._=ir):Ft._=ir}).call(kV)}(D0,D0.exports)),D0.exports}var VV=DV();const zV=()=>{const e=jt({query:"(max-width: 743px)"}),t=jt({query:"(min-width: 744px) and (max-width: 1023px)"}),i=jt({query:"(min-width: 1024px)"}),a=jt({query:"(min-width: 1440px)"}),[o,c]=H.useState(!1),[f,h]=H.useState(null),[,p]=H.useState({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0}),g=H.useRef(null),y=y2(g,{once:!0,margin:"-10%"});H.useEffect(()=>{y&&!o&&c(!0)},[y,o]),H.useEffect(()=>{const _=()=>{p({width:window.innerWidth,height:window.innerHeight})},R=VV.debounce(_,250);return window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[]),H.useEffect(()=>{const _=setTimeout(()=>{f&&f.update()},500);return()=>clearTimeout(_)},[f]);const b=[{title:"Manufacturer-Trained Technicians",text:"Our team is trained to service leading brands like Sub-Zero, Viking, GE Monogram, and more — ensuring expert repairs done right the first time.",image:_V,icon:om},{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:Zx,icon:I6},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:B6,icon:om},{title:"Local & Fair Pricing",text:"As a local Thousand Oaks company, we treat our community like neighbors. With direct access to parts and highly trained techs, we keep our prices fair — without steep markups. While costs keep rising everywhere, we work hard to keep appliance repair affordable.",image:Zx,icon:om},{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:Zx,icon:I6},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:B6,icon:om}],T=e?1:t?2:3,E=b.length>T,L={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:ve}}},P={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.5,ease:ve}}};return x.jsxs(x.Fragment,{children:[x.jsx(Fk,{}),x.jsxs(qk,{ref:g,children:[x.jsxs(Yk,{children:[x.jsx(W.div,{initial:"hidden",animate:o?"visible":"hidden",variants:L,children:x.jsx(Wk,{children:"why airtexno"})}),x.jsx(W.div,{initial:"hidden",animate:o?"visible":"hidden",variants:L,transition:{delay:.1},children:x.jsxs(Zk,{children:["Same-Day Appliance Repair ",x.jsx(Pb,{children:"You Can Rely On"})," "]})})]}),x.jsx(iD,{children:x.jsx(Kk,{$isLargeDesktop:a,children:x.jsx(Bi,{onSwiper:h,modules:[c_,ia],pagination:{clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},spaceBetween:a?0:16,loop:E,slidesPerView:T,centeredSlides:a,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:600,className:"businessSwiper",touchRatio:1.5,resistanceRatio:.5,watchSlidesProgress:!0,updateOnWindowResize:!0,observer:!0,observeParents:!0,preventInteractionOnTransition:!0,initialSlide:0,watchOverflow:!0,normalizeSlideIndex:!0,children:b.map((_,R)=>x.jsx(Ii,{children:x.jsx(Jk,{style:{backgroundImage:`url(${_.image})`},$isLargeDesktop:a,className:"slide-container",children:(_.title||_.text||_.icon)&&x.jsxs(W.div,{className:"overlay",initial:"hidden",animate:o?"visible":"hidden",variants:P,whileHover:e?{}:{scale:1.02,transition:{duration:.2}},children:[(_.title||_.icon)&&x.jsxs(eD,{children:[_.title&&x.jsx(W.div,{variants:L,children:x.jsx(Xk,{children:_.title})}),_.icon&&x.jsx(W.div,{variants:L,transition:{delay:.1},children:x.jsx(tD,{className:"icon-wrapper",children:x.jsx("img",{src:_.icon,alt:_.title||"icon",className:"icon-image",loading:"lazy"})})})]}),_.text&&x.jsx(W.div,{variants:L,transition:{delay:.2},children:x.jsx(nD,{className:"slide-text",children:_.text})})]})})},R))})})})]})]})},HV=M.div`
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
`,Xx=()=>x.jsx(x.Fragment,{children:x.jsxs(HV,{id:"hero",children:[x.jsx(DD,{}),x.jsx(Ub,{}),x.jsx(zV,{}),x.jsx(Nb,{}),x.jsx(LV,{}),x.jsx(Ib,{}),x.jsx(b2,{}),x.jsx(HD,{}),x.jsx(w2,{})]})}),PV=M.div`
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
  `,NV="/assets/Team%20Member%20Image-mppsJqlp.png",BV="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99992%200.833008V17.1663M0.833252%208.99967H17.1666'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",IV=Lo`
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
`,$V=Lo`
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
`,UV=Lo`
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
`,W3=M.p`
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
`,GV=M.button`
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
      ${$V} 1s ease,
      ${UV} 0.6s ease;
    background-position: 100% 50%;
    transform: translateY(-3px);
    box-shadow:
      0 8px 25px rgba(48, 152, 238, 0.4),
      0 4px 15px rgba(48, 152, 238, 0.3);

    &::before {
      left: 100%;
    }

    svg {
      animation: ${IV} 1s ease;
    }

    ${W3} {
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

    &:hover ${W3} {
      transform: translateX(3px);
    }
  }
`,FV=M.div`
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
`,qV=M.div`
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
`,YV=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,WV=M.img`
  border-radius: 74px;
  width: 119px;
  height: 119px;
  object-fit: cover;
  margin-bottom: 36px;
`,ZV=M.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,XV=M.p`
  color: #242424;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 400;
  line-height: 1em;
  width: 100%;
  padding-bottom: 16px;
`,KV=M.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,QV=M.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`,JV=M.div`
  position: relative;
  width: 44px;
  height: 44px;
`,ez=M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  background: #c6e6ff;
  border-radius: 100px;
`,tz=M.p`
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
const nz=M.div`
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
`,iz=M.h2`
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
`;const az=M.div`
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
`,rz=M.button`
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
`,sz=M.div`
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
`,oz=M.img.attrs(()=>({}))`
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
`,lz=M.div`
  @media screen and (min-width: 1440px) {
    min-width: 650px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,cz=M.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;

    flex-shrink: 0; /* Забороняємо звуження */
  }
`,Hy=()=>{const[e,t]=H.useState(null),i=[{question:"How quickly can you repair my appliance?",answer:"Most repairs are completed within 2-4 hours. We offer same-day service for urgent cases and typically schedule appointments within 24-48 hours of your call."},{question:"Do you offer emergency repair services?",answer:"Yes, we provide urgent repairs for urgent situations to minimize your inconvenience. Our emergency service is available 7 days a week with response times as quick as 2 hours."},{question:"What brands and appliances do you service?",answer:"We service all major brands including Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, and more. We repair refrigerators, ovens, dishwashers, washing machines, dryers, microwaves, and other household appliances."},{question:"How do I schedule a repair?",answer:"You can schedule a repair by calling our hotline, filling out the online form on our website, or texting us. We'll arrange a convenient time slot and provide a technician with the necessary parts."},{question:"What if I'm not satisfied with the repair?",answer:"We offer a 90-day warranty on all repairs and parts. If you're not satisfied, we'll re-repair your appliance at no additional cost or provide a full refund for the service."},{question:"How much will the repair cost?",answer:"Repair costs vary based on the appliance type and issue complexity. We provide free diagnostics and transparent upfront pricing before any work begins. Typical repairs range from $150-$400 including parts and labor."}],a=S=>{t(T=>T===S?null:S)},o={hidden:{opacity:0,scale:.8,rotate:-20,x:-50},visible:{opacity:1,scale:1,rotate:0,x:0,transition:{duration:1.2,ease:qa,delay:.2}},hover:{scale:1.05,rotate:5,transition:{duration:.4,ease:ve}}},c={hidden:{opacity:0,scale:.7},visible:{opacity:1,scale:1,transition:{duration:.8,ease:ve,delay:.4}},hover:{scale:1.1,boxShadow:"0 0 40px rgba(48, 152, 238, 0.6)",transition:{duration:.3,ease:ve}},tap:{scale:.95}},f={hidden:{opacity:0,y:30,rotate:-5},visible:{opacity:1,y:0,rotate:0,transition:{duration:.9,ease:qa,delay:.6}},hover:{y:-5,rotate:2,transition:{duration:.3,ease:ve}}},h={hidden:{opacity:0,x:-100,rotate:-10},visible:{opacity:1,x:0,rotate:0,transition:{duration:.7,ease:ve}}},p={hidden:{opacity:0,x:100,rotate:10},visible:{opacity:1,x:0,rotate:0,transition:{duration:.7,ease:ve}}},g={hidden:{opacity:0,height:0,scale:.9},visible:{opacity:1,height:"auto",scale:1,transition:{duration:.5,ease:ve}}},y={hidden:{opacity:0,y:-30,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,y:0,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 30px rgba(48, 152, 238, 0.8)","0 0 15px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:ve,delay:.1}}},b=S=>S*.15;return x.jsxs(FV,{children:[x.jsxs(qV,{children:[x.jsxs(YV,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:o,whileHover:"hover",children:x.jsx(WV,{src:NV,alt:"Team Member Image"})}),x.jsxs(ZV,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:y,children:x.jsx(XV,{children:"Book a Call"})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:y,transition:{delay:.2},children:x.jsx(KV,{children:"Time to get introduced and explore how we can help"})}),x.jsx(W.div,{variants:c,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},whileTap:"tap",children:x.jsx("a",{href:"tel:+18055002705",children:x.jsxs(GV,{children:[x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),x.jsx(W3,{children:"Call us now"})]})})})]})]}),x.jsx(QV,{children:x.jsxs(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:f,whileHover:"hover",children:[x.jsxs(JV,{children:[x.jsx(ez,{}),x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",left:"10px",top:"10px"},children:x.jsx("path",{d:"M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z",stroke:"#808080",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),x.jsxs(tz,{children:["Prefer email communication?",x.jsx("br",{}),x.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]})]})})]}),x.jsxs(nz,{children:[x.jsx(lz,{children:x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:y,children:x.jsx(iz,{children:"Frequently Asked Questions"})})}),x.jsx(cz,{children:i.map((S,T)=>x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:T%2===0?h:p,transition:{delay:b(T)},children:x.jsxs(az,{children:[x.jsxs(rz,{onClick:()=>a(T),children:[S.question,x.jsx(oz,{src:BV,alt:"Toggle answer",$rotate:e===T})]}),x.jsx(W.div,{initial:"hidden",animate:e===T?"visible":"hidden",variants:g,style:{overflow:"hidden"},children:x.jsx(sz,{$isOpen:e===T,children:S.answer})})]})},T))})]})]})},uz=M.div`
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
`,dz=M.img`
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
`,fz=M.div`
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
`,hz=M.div`
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
`,pz=M.p`
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
`,mz=M.p`
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
`;M.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;M(Hn)`
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
`;Lo`
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
`;const gz="/assets/HeroImage2About-CoU9D2Tq.png",xz=()=>{const{scrollY:e}=ko(),t=zn(e,[0,500],[0,150]),i=zn(e,[0,400],[1,1.1]),a=zn(e,[0,600],[0,-3]),o=zn(e,[0,300],[0,50]),c=zn(e,[0,200],[1,.8]),f={hidden:{opacity:0,x:-100,skewX:15},visible:{opacity:1,x:0,skewX:0,transition:{duration:1.2,ease:ve,delay:.5}}},h={hidden:{opacity:0,y:50,scaleY:0,filter:"blur(10px)"},visible:{opacity:1,y:0,scaleY:1,filter:"blur(0px)",transition:{duration:.8,ease:zm,delay:.8}}},p={hidden:{opacity:0,y:80,rotateX:10},visible:{opacity:1,y:0,rotateX:0,transition:{duration:1,ease:zm,delay:.3}}},g={hidden:{opacity:0,scale:0,rotate:0},visible:{opacity:1,scale:1,rotate:360,transition:{duration:1.5,ease:ve,delay:1}}};return x.jsxs(uz,{id:"ap",children:[x.jsx(W.div,{style:{position:"absolute",top:"20%",left:"10%",width:"8px",height:"8px",background:"rgba(48, 152, 238, 0.6)",borderRadius:"50%",zIndex:2},variants:g,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3}}),x.jsx(W.div,{style:{position:"absolute",top:"60%",right:"15%",width:"12px",height:"12px",background:"rgba(48, 152, 238, 0.4)",borderRadius:"50%",zIndex:2},variants:g,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.5}}),x.jsx(W.div,{style:{position:"absolute",bottom:"30%",left:"20%",width:"6px",height:"6px",background:"rgba(48, 152, 238, 0.3)",borderRadius:"50%",zIndex:2},variants:g,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.8}}),x.jsx(W.div,{style:{y:t,scale:i,rotate:a},children:x.jsx(dz,{src:gz,alt:"Hero Image"})}),x.jsx(W.div,{style:{y:o,opacity:c},children:x.jsx(fz,{children:x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:p,children:x.jsxs(hz,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:h,children:x.jsx(mz,{children:"About Our Company and Team"})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:f,children:x.jsx(pz,{children:"Fast, affordable, and trusted service"})})]})})})}),x.jsx(W.div,{style:{position:"absolute",top:"10%",right:"5%",width:"2px",height:"100px",background:"linear-gradient(to bottom, transparent, #3098EE, transparent)",zIndex:2},initial:{opacity:0,height:0},whileInView:{opacity:1,height:100},viewport:{once:!0,amount:.3},transition:{duration:1,delay:1.2}}),x.jsx(W.div,{style:{position:"absolute",bottom:"15%",left:"5%",width:"100px",height:"2px",background:"linear-gradient(to right, transparent, #3098EE, transparent)",zIndex:2},initial:{opacity:0,width:0},whileInView:{opacity:1,width:100},viewport:{once:!0,amount:.3},transition:{duration:1,delay:1.5}})]})},vz=M.section`
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
`,yz=M.div`
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
`,wz=M.h3`
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
`,Kx=M.span`
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
`,bz=M.div`
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
`,Sz=M.div`
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
    margin-left: -17px;
  }
`,U6=M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }
`,Cz=M.div`
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
`,Tz=M.div`
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
`,G6=M.p`
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
`,Ez=M.img`
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
`,Az=M.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`,Mz="/assets/Services%20Image-e7Omvubx.png",jz="/assets/Team%20Image-CG0rB-nI.png",Rz=()=>{const e=jt({query:"(min-width: 1440px)"}),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ve}}},i={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.8,ease:ve}}},a={hidden:{opacity:0,x:30},visible:{opacity:1,x:0,transition:{duration:.8,ease:ve}}};return x.jsxs(vz,{children:[x.jsx(yz,{children:x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,children:x.jsxs(wz,{children:["Our mission is to provide ",x.jsx(Kx,{children:"reliable"})," and ",x.jsx(Kx,{children:"efficient"}),"appliance repair services that improve",x.jsx(Kx,{children:"everyday "}),"life"," "]})})}),x.jsxs(Az,{children:[x.jsxs(Cz,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:i,children:x.jsx("img",{src:Mz,alt:"image"})}),x.jsxs(Sz,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.2},children:x.jsx(U6,{children:"“Our goal is to bring comfort and convenience back to your home with every repair. We believe in honest service, quality workmanship, and building lasting relationships with our customers,”"})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.3},children:x.jsx(bz,{children:"Sanal Gariaev"})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.4},children:x.jsx(U6,{children:"Chief Executive Officer"})})]}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.5},children:x.jsxs(G6,{children:["As a highly regarded and trusted appliance repair company, we take immense pride in having served our community with exceptional repair services since [год основания]. Our extensive experience and commitment to excellence have allowed us to build strong relationships with our customers. We fully recognize how vital it is for your household to have functioning appliances, as they play a crucial role in your daily routine. Whether it's your refrigerator keeping your food fresh, your washing machine ensuring your clothes are clean, or your oven preparing meals for your family, any malfunction can disrupt your life. That's why our primary goal is to restore the performance of your appliances swiftly and affordably, ensuring that you can return to your normal routine with minimal interruption. ",x.jsx("br",{}),e&&x.jsxs(x.Fragment,{children:[x.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client's needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})]})})]}),x.jsxs(Tz,{children:[!e&&x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.6},children:x.jsxs(G6,{children:[x.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client's needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,transition:{delay:.7},children:x.jsx(Ez,{src:jz,alt:"team"})})]})]})]})},Oz=M.section`
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
`,Lz=M.p`
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
`,_z=M.p`
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
`,kz=M.div`
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
`,Dz=M.div`
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
`,Vz=M.div`
  background: rgba(33, 33, 33, 0.5);
  width: 100%;
  height: 1px;
`,zz=M.div`
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
`,Hz=M.div`
  @media (min-width: 768px) {
    flex-shrink: 0;
  }

  @media (min-width: 1440px) {
    margin-right: 5.25rem;
  }
`,Pz=M.p`
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
`,Nz=M.div`
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
`,Bz=M.p`
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
`,Iz=M.p`
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
`,$z=M.img`
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
`,Uz="/assets/ValueImage-GehUXRc0.png",Gz="/assets/ValueImage1-XDPVu8iL.png",Fz="/assets/ValueImage2-CBdwtolx.png",qz="/assets/ValueImage3-4cmMPphm.png",Yz=()=>{const e=H.useRef(null),t=y2(e,{once:!0,margin:"-20%"}),i=p=>({__html:p}),a={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},o={hidden:{opacity:0,y:30},visible:p=>({opacity:1,y:0,transition:{duration:.6,delay:p*.1}})},c={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.4}}},f={hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.5,delay:.1}}},h=[{id:1,number:"01",title:"<span>Reliable</span> Service",description:"We are committed to providing trustworthy repairs that you can count on. Our technicians arrive on time and deliver lasting solutions to keep your appliances running smoothly.",image:Uz,alt:"Reliable Service"},{id:2,number:"02",title:"<span>Fast</span> Response",description:"We understand the importance of a quick fix. Our team works efficiently to diagnose and repair your appliances as soon as possible, minimizing downtime and inconvenience.",image:Gz,alt:"Fast Response"},{id:3,number:"03",title:"<span>Customer-Centric</span> Approach",description:"Your satisfaction is our priority. We listen carefully to your needs and tailor our services to meet your specific requirements, ensuring a positive experience every time.",image:Fz,alt:"Quality Work"},{id:4,number:"04",title:"Quality <span>and</span> Trust",description:"We use only high-quality parts and follow industry best practices to ensure durable repairs. Our goal is to build long-term relationships based on trust and excellent service.",image:qz,alt:"Durable Repairs"}];return x.jsxs(Oz,{ref:e,children:[x.jsxs("div",{children:[x.jsx(W.div,{initial:"hidden",animate:t?"visible":"hidden",variants:a,children:x.jsx(Lz,{children:"Our Values"})}),x.jsx(W.div,{initial:"hidden",animate:t?"visible":"hidden",variants:a,transition:{delay:.1},children:x.jsxs(_z,{children:["Core ",x.jsx("span",{children:"Principles"})," That Drive Us"]})})]}),x.jsx(kz,{children:h.map((p,g)=>x.jsx(W.div,{custom:g,initial:"hidden",animate:t?"visible":"hidden",variants:o,children:x.jsxs(Dz,{children:[x.jsx(Vz,{}),x.jsxs(zz,{children:[x.jsx(W.div,{initial:"hidden",animate:t?"visible":"hidden",variants:c,children:x.jsx(Hz,{children:x.jsx(Pz,{children:p.number})})}),x.jsxs(Nz,{children:[x.jsx(Bz,{dangerouslySetInnerHTML:i(p.title)}),x.jsx(Iz,{children:p.description})]}),x.jsx(W.div,{initial:"hidden",animate:t?"visible":"hidden",variants:f,transition:{delay:g*.1+.1},children:x.jsx($z,{src:p.image,alt:p.alt})})]})]})},p.id))})]})},Wz=M.div`
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
`,Zz=M.p`
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
`,Xz=M.p`
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
`,Kz=M.div`
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
`,F6=M.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
  }
`,lm=M.img`
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
`,Qz="/assets/Why%20Airtexno%20Image%201-BBN2sLs-.png",Jz="/assets/Why%20Airtexno%20Image%202-Cvbnvjs7.png",eH="/assets/Why%20Airtexno%20Image%203-C0oUp0-3.png",tH="/assets/Why%20Airtexno%20Image%204-Bs7KaXbL.png",nH=()=>{const{scrollY:e}=ko(),t=zn(e,[0,300],[0,50]),i=zn(e,[0,200],[1,.8]),a={hidden:{opacity:0,y:60,skewY:5},visible:{opacity:1,y:0,skewY:0,transition:{duration:1.2,ease:ve}}},o={hidden:{opacity:0,scale:.8,borderRadius:"50%",filter:"blur(10px) grayscale(100%)"},visible:p=>({opacity:1,scale:1,borderRadius:"8px",filter:"blur(0px) grayscale(0%)",transition:{duration:1.4,delay:p*.2,ease:ve}}),hover:{scale:1.08,borderRadius:"4px",filter:"grayscale(0%) brightness(110%)",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.25)",zIndex:10,transition:{duration:.5,ease:ve}}},c={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:1,ease:ve,staggerChildren:.1}}},f={hidden:{opacity:0,scale:.5,color:"#000000"},visible:{opacity:1,scale:1,color:"#3098EE",transition:{duration:1.5,ease:ve,delay:.5}},hover:{scale:1.1,textShadow:"0 0 20px rgba(48, 152, 238, 0.8)",transition:{duration:.3,ease:ve}}},h={hidden:{opacity:0,y:80,rotateX:15},visible:{opacity:1,y:0,rotateX:0,transition:{duration:1.2,ease:ve}},hover:{y:-10,transition:{duration:.4,ease:ve}}};return x.jsxs(Wz,{children:[x.jsxs(W.div,{style:{y:t,opacity:i},initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:c,children:[x.jsx(W.div,{variants:a,children:x.jsx(Zz,{children:"Meet the Team"})}),x.jsx(W.div,{variants:a,transition:{delay:.2},children:x.jsxs(Xz,{children:["Professionals committed to"," ",x.jsx(W.span,{variants:f,whileHover:"hover",children:"quality"})," ","service"]})})]}),x.jsxs(Kz,{children:[x.jsx(W.div,{variants:h,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:x.jsxs(F6,{children:[x.jsx(W.div,{custom:0,variants:o,whileHover:"hover",children:x.jsx(lm,{src:Qz,alt:"Team Member 1"})}),x.jsx(W.div,{custom:1,variants:o,whileHover:"hover",children:x.jsx(lm,{src:Jz,alt:"Team Member 2"})})]})}),x.jsx(W.div,{variants:h,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},transition:{delay:.3},whileHover:"hover",children:x.jsxs(F6,{children:[x.jsx(W.div,{custom:2,variants:o,whileHover:"hover",children:x.jsx(lm,{src:eH,alt:"Team Member 3"})}),x.jsx(W.div,{custom:3,variants:o,whileHover:"hover",children:x.jsx(lm,{src:tH,alt:"Team Member 4"})})]})})]})]})},iH=()=>x.jsxs(PV,{children:[x.jsx(xz,{}),x.jsx(Rz,{}),x.jsx(Yz,{}),x.jsx(nH,{}),x.jsx(Hy,{})]}),aH=M.div`
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
`;M.a`
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
  @media screen and (min-width: 744px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;const rH=()=>x.jsxs(aH,{id:"ap",children:[x.jsx(w2,{}),x.jsx(b2,{})]}),sH=M.div`
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
`,oH=M.div`
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
`,lH=M.h2`
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
`,cH=M.div`
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
`,uH=M(Hn)`
  text-decoration: none;
  color: inherit;
  max-width: 325px;
  @media (min-width: 1440px) {
  }
`,dH=M.div`
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
`,fH=M.img`
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
`,hH=M.h3`
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
`,pH=M.p`
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
`,mH=[{id:1,image:A2,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:fh,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:C2,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:T2,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:E2,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:S2,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],gH={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ve}}},xH={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:ve}},hover:{y:-5,transition:{duration:.3,ease:ve}}},vH={hidden:{opacity:0,scale:1.05},visible:{opacity:1,scale:1,transition:{duration:.7,ease:ve}},hover:{scale:1.03,transition:{duration:.3,ease:ve}}},yH={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5,ease:ve}}},wH=()=>{const{scrollY:e}=ko(),t=$O(),i=zn(e,[0,300],[0,30]);return H.useEffect(()=>{t.start("visible")},[t]),x.jsxs(oH,{id:"app",children:[x.jsx(W.div,{style:{y:i},initial:"hidden",animate:t,variants:gH,children:x.jsxs(lH,{children:["News ",x.jsx("span",{children:"Tips"})," "]})}),x.jsx(cH,{children:mH.map((a,o)=>x.jsx(uH,{to:a.path,children:x.jsx(W.div,{initial:"hidden",animate:t,variants:xH,transition:{delay:o*.1},whileHover:"hover",children:x.jsxs(dH,{children:[x.jsx(W.div,{variants:vH,transition:{delay:o*.1},whileHover:"hover",children:x.jsx(fH,{src:a.image,alt:a.title})}),x.jsx(W.div,{variants:yH,transition:{delay:o*.1+.2},children:x.jsxs("div",{children:[x.jsx(hH,{children:a.title}),x.jsx(pH,{children:a.description})]})})]})})},a.id))})]})},bH=()=>x.jsx(sH,{id:"app",children:x.jsx(wH,{})}),SH="/assets/Image1-oNBiuIma.png",CH="/assets/Image2-KhSZGRyT.png",TH="/assets/Image4-CFM8TNdX.png",EH="/assets/Image5-CmBoV_wK.png",AH=M.div`
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
`,MH=M.div`
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
`;M.p`
  padding: 10px auto 50px auto;
  width: 90%;
  height: 1px;
  margin: 20px auto;
  background: radial-gradient(ellipse 118.85px 58.06px at 50% 50%, rgb(252, 252, 252) 0%, rgba(58, 55, 55, 0.42) 80%);
`;M.div`
  height: auto;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  
  @media screen and (min-width: 1440px) {
    margin-right: 0;
  }
`;const q6=M.img`
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
`,jH=M(W.div)`
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
`,RH=M(W.div)`
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
`;M.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
`;const OH=()=>{const e=jt({query:"(max-width: 743px)"}),t=jt({query:"(min-width: 744px) and (max-width: 1023px)"}),i=jt({query:"(min-width: 1024px)"}),a=[{id:1,imageUrl:ly},{id:2,imageUrl:Wm},{id:3,imageUrl:cy},{id:4,imageUrl:uy},{id:5,imageUrl:dy},{id:6,imageUrl:fy},{id:7,imageUrl:hy},{id:8,imageUrl:py},{id:9,imageUrl:my},{id:10,imageUrl:gy},{id:11,imageUrl:xy},{id:12,imageUrl:vy},{id:13,imageUrl:yy},{id:14,imageUrl:wy},{id:15,imageUrl:by},{id:16,imageUrl:Sy},{id:17,imageUrl:Cy},{id:18,imageUrl:Ty},{id:19,imageUrl:Ey},{id:20,imageUrl:Bb},{id:21,imageUrl:Ay},{id:22,imageUrl:My},{id:23,imageUrl:jy},{id:24,imageUrl:Ry},{id:25,imageUrl:Oy},{id:26,imageUrl:Ly},{id:27,imageUrl:_y},{id:28,imageUrl:ky},{id:29,imageUrl:Dy},{id:30,imageUrl:Vy},{id:31,imageUrl:zy}],o=e?2:t?4:5,c=a.length>o;return x.jsx(AH,{children:x.jsxs(MH,{children:[x.jsx(jH,{}),x.jsx(Bi,{loop:c,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[ia],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:a.map(f=>x.jsx(Ii,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:x.jsx(q6,{src:f.imageUrl,alt:`Partner ${f.id}`,loading:"lazy"})},f.id))}),x.jsx(Bi,{loop:c,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[ia],className:"mySwiper",style:{width:"100%"},children:a.map(f=>x.jsx(Ii,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:x.jsx(q6,{src:f.imageUrl,alt:`Partner ${f.id}`,loading:"lazy"})},f.id))}),x.jsx(RH,{})]})})},Y6=[{img:SH,title:"Refrigerator",description:"Fixing cooling issues and leaks."},{img:CH,title:"Washing Machine",description:"Restoring heating and control functions."},{img:fh,title:"Oven",description:"Fixing magnetron and door issues."},{img:TH,title:"Microwave",description:"Fixing cooling issues and leaks."},{img:EH,title:"Dishwasher",description:"Repairing leaks and drainage problems."}],LH=()=>{const e=H.useRef(null),t=jt({query:"(max-width: 767px)"}),i=jt({query:"(min-width: 768px) and (max-width: 1439px)"}),a=jt({query:"(min-width: 1440px)"}),o=t?1:i?3:4,c=Y6.length>o,f=()=>{e.current&&e.current.slidePrev()},h=()=>{e.current&&e.current.slideNext()},p={hidden:{opacity:0,y:50,rotate:-5,scale:.9},visible:{opacity:1,y:0,rotate:0,scale:1,transition:{duration:1,ease:ve,delay:.2}}},g={hidden:{opacity:0,y:100,rotateX:-45,scale:.8,filter:"blur(10px)"},visible:S=>({opacity:1,y:0,rotateX:0,scale:1,filter:"blur(0px)",transition:{duration:1.2,ease:ve,delay:S*.15}}),hover:{y:-20,rotateY:10,scale:1.05,boxShadow:"0 30px 60px rgba(0,0,0,0.25)",transition:{duration:.4,ease:ve}}},y={hidden:{opacity:0,scale:1.3,rotate:-5},visible:{opacity:1,scale:1,rotate:0,transition:{duration:1.5,ease:ve}},hover:{scale:1.1,rotate:2,transition:{duration:.6,ease:ve}}},b={hidden:{opacity:0,x:-50,y:30},visible:{opacity:1,x:0,y:0,transition:{duration:.8,ease:qa,delay:.3}},hover:{x:10,transition:{duration:.3}}};return x.jsxs(VH,{children:[x.jsxs(zH,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:p,children:x.jsx(HH,{children:"Our Equipment"})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:p,transition:{delay:.1},children:x.jsxs(PH,{children:[x.jsx("span",{children:"Trusted"})," brands we service"]})})]}),x.jsx(OH,{}),x.jsxs(_H,{$isTablet:i,children:[x.jsx(Bi,{modules:[sy,ia],onSwiper:S=>e.current=S,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:600,loop:c,slidesPerView:o,touchRatio:1.5,touchAngle:45,simulateTouch:!0,allowTouchMove:!0,children:Y6.map((S,T)=>x.jsx(Ii,{children:x.jsx(W.div,{custom:T,variants:g,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:x.jsxs(NH,{$isTablet:i,children:[x.jsx(W.div,{variants:y,whileHover:"hover",children:x.jsx(BH,{src:S.img,alt:S.title,$isTablet:i})}),x.jsx(W.div,{variants:b,whileHover:"hover",children:x.jsxs(IH,{children:[x.jsx($H,{$isTablet:i,children:S.title}),x.jsx(UH,{$isTablet:i,children:S.description})]})})]})})},T))}),x.jsxs(kH,{children:[x.jsx(W6,{onClick:f,onMouseDown:S=>S.preventDefault(),children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),x.jsx(W6,{onClick:h,onMouseDown:S=>S.preventDefault(),children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})},_H=M.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: ${e=>e.$isTablet?"50%":"auto"};
  }
`,kH=M.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
  justify-content: flex-end;
`,DH=Lo`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,W6=M.button`
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
  position: relative;
  overflow: hidden;
  touch-action: manipulation;

  &:hover,
  &:focus,
  &:active {
    background-color: #3098EE;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(48, 152, 238, 0.3);
    animation: ${DH} 0.3s ease;
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
`,VH=M.div`
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
`,zH=M.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,HH=M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,PH=M.p`
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
`,NH=M.div`
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
`,BH=M.img`
  border-radius: 8px;
  width: 322px;
  height: 485px;
  object-fit: cover;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
`,IH=M.div`
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
`,$H=M.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"24px":"28px"};
  line-height: 90%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,UH=M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,GH="/assets/ProccessSection-CpT7luA8.png",FH=M.div`
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
`,qH=M.h2`
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
`,YH=M.p`
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
`,WH=M.div`
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
`,ZH=M.div`
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
`,XH=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,KH=M.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,QH=M.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,JH=M.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,eP=[{title:"Call Us",text:"Call us to schedule your repair. We`ll gather details and find a convenient time.",icon:x.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"We Respond",text:"Our team answers your questions and arranges a convenient visit.",icon:x.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M8.33268 12.5001L5.76997 15.0948C5.4125 15.4568 5.23377 15.6377 5.08014 15.6505C4.94686 15.6616 4.81636 15.608 4.72931 15.5064C4.62898 15.3894 4.62898 15.1351 4.62898 14.6264V13.3264C4.62898 12.87 4.25524 12.5398 3.80369 12.4737V12.4737C2.7108 12.3136 1.8525 11.4553 1.69241 10.3624C1.66602 10.1822 1.66602 9.96718 1.66602 9.53712V5.66675C1.66602 4.26662 1.66602 3.56655 1.9385 3.03177C2.17818 2.56137 2.56063 2.17892 3.03104 1.93923C3.56582 1.66675 4.26588 1.66675 5.66602 1.66675H11.8327C13.2328 1.66675 13.9329 1.66675 14.4677 1.93923C14.9381 2.17892 15.3205 2.56137 15.5602 3.03177C15.8327 3.56655 15.8327 4.26662 15.8327 5.66675V9.16675M15.8327 18.3334L14.019 17.0725C13.7641 16.8952 13.6366 16.8066 13.4978 16.7438C13.3747 16.688 13.2453 16.6474 13.1123 16.6229C12.9625 16.5953 12.8073 16.5953 12.4968 16.5953H10.9993C10.0659 16.5953 9.59922 16.5953 9.2427 16.4137C8.92909 16.2539 8.67413 15.9989 8.51434 15.6853C8.33268 15.3288 8.33268 14.8621 8.33268 13.9287V11.8334C8.33268 10.9 8.33268 10.4333 8.51434 10.0768C8.67413 9.76316 8.92909 9.50819 9.2427 9.3484C9.59922 9.16675 10.0659 9.16675 10.9993 9.16675H15.666C16.5994 9.16675 17.0661 9.16675 17.4227 9.3484C17.7363 9.50819 17.9912 9.76316 18.151 10.0768C18.3327 10.4333 18.3327 10.9 18.3327 11.8334V14.0953C18.3327 14.8719 18.3327 15.2602 18.2058 15.5665C18.0367 15.9748 17.7122 16.2993 17.3038 16.4685C16.9975 16.5953 16.6093 16.5953 15.8327 16.5953V18.3334Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"On-Site Visit",text:"Technician arrives, assesses the issue, and provides an estimate.",icon:x.jsx("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M4.16602 8.83325H6.66602M1.66602 5.49992L3.33268 6.33325L4.39155 3.15664C4.61011 2.50096 4.71939 2.17312 4.92209 1.93074C5.10108 1.7167 5.33095 1.55102 5.5906 1.4489C5.88465 1.33325 6.23022 1.33325 6.92137 1.33325H13.0773C13.7685 1.33325 14.1141 1.33325 14.4081 1.4489C14.6678 1.55102 14.8976 1.7167 15.0766 1.93074C15.2793 2.17312 15.3886 2.50096 15.6071 3.15664L16.666 6.33325L18.3327 5.49992M13.3327 8.83325H15.8327M5.66602 6.33325H14.3327C15.7328 6.33325 16.4329 6.33325 16.9677 6.60574C17.4381 6.84542 17.8205 7.22787 18.0602 7.69828C18.3327 8.23305 18.3327 8.93312 18.3327 10.3333V12.5833C18.3327 12.9705 18.3327 13.1641 18.3007 13.3251C18.1691 13.9862 17.6523 14.503 16.9912 14.6346C16.8302 14.6666 16.6366 14.6666 16.2493 14.6666H15.8327C14.9122 14.6666 14.166 13.9204 14.166 12.9999C14.166 12.7698 13.9795 12.5833 13.7493 12.5833H6.24935C6.01923 12.5833 5.83268 12.7698 5.83268 12.9999C5.83268 13.9204 5.08649 14.6666 4.16602 14.6666H3.74935C3.36214 14.6666 3.16853 14.6666 3.00753 14.6346C2.34638 14.503 1.82955 13.9862 1.69804 13.3251C1.66602 13.1641 1.66602 12.9705 1.66602 12.5833V10.3333C1.66602 8.93312 1.66602 8.23305 1.9385 7.69828C2.17818 7.22787 2.56063 6.84542 3.03104 6.60574C3.56582 6.33325 4.26588 6.33325 5.66602 6.33325Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"Repair & Finish",text:"We fix your appliance on the spot and ensure everything works perfectly.",icon:x.jsx("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M4.99984 5.00008L8.74984 8.75008M4.99984 5.00008H2.49984L1.6665 2.50008L2.49984 1.66675L4.99984 2.50008V5.00008ZM16.049 2.28426L13.8593 4.47394C13.5293 4.80395 13.3643 4.96896 13.3025 5.15923C13.2481 5.3266 13.2481 5.50689 13.3025 5.67426C13.3643 5.86454 13.5293 6.02954 13.8593 6.35956L14.057 6.55727C14.387 6.88729 14.552 7.05229 14.7423 7.11412C14.9097 7.1685 15.09 7.1685 15.2574 7.11412C15.4476 7.05229 15.6126 6.88729 15.9426 6.55727L17.9909 4.50901C18.2115 5.04582 18.3332 5.63374 18.3332 6.25008C18.3332 8.78139 16.2811 10.8334 13.7498 10.8334C13.4447 10.8334 13.1465 10.8036 12.858 10.7467C12.4528 10.6668 12.2503 10.6268 12.1275 10.6391C11.9969 10.6521 11.9326 10.6717 11.8169 10.7336C11.7081 10.7918 11.599 10.9009 11.3807 11.1192L5.4165 17.0834C4.72615 17.7738 3.60686 17.7738 2.91651 17.0834C2.22615 16.393 2.22615 15.2738 2.91651 14.5834L8.88069 8.61922C9.09898 8.40094 9.20813 8.29179 9.26635 8.18299C9.32825 8.06731 9.34783 8.00297 9.36084 7.87242C9.37307 7.74963 9.33312 7.54707 9.25323 7.14195C9.19633 6.85346 9.1665 6.55526 9.1665 6.25008C9.1665 3.71878 11.2185 1.66675 13.7498 1.66675C14.5878 1.66675 15.3732 1.8916 16.049 2.28426ZM9.99988 12.5L14.5832 17.0833C15.2735 17.7737 16.3928 17.7737 17.0832 17.0833C17.7735 16.393 17.7735 15.2737 17.0832 14.5833L13.3126 10.8128C13.0457 10.7876 12.7854 10.7394 12.5338 10.6704C12.2096 10.5814 11.854 10.646 11.6162 10.8837L9.99988 12.5Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}],tP={hidden:{opacity:0,scale:0,rotate:-180},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.8,ease:qa,delay:.3}},hover:{rotate:360,scale:1.2,transition:{duration:.6,ease:ve}}},nP={hidden:{opacity:0,y:50,skewY:5},visible:{opacity:1,y:0,skewY:0,transition:{duration:.8,ease:ve}}},iP={hidden:{opacity:0,x:-100,scale:.9},visible:e=>({opacity:1,x:0,scale:1,transition:{duration:.7,delay:e*.2,ease:ve}}),hover:{y:-15,scale:1.05,rotateY:10,boxShadow:"0 25px 50px rgba(0,0,0,0.15)",transition:{duration:.4,ease:ve}}},Z6={hidden:{opacity:0,x:50,filter:"blur(10px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{duration:.9,ease:ve,delay:.5}}},aP={hidden:{opacity:0,scale:.5,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,scale:1,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 20px rgba(48, 152, 238, 0.8)","0 0 10px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:ve,delay:.2}}},rP=()=>x.jsxs(FH,{$bg:GH,children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:nP,children:x.jsx(qH,{children:"Our Process"})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Z6,children:x.jsx(YH,{children:"Quick steps to fix appliances reliably"})}),x.jsx(WH,{children:eP.map((e,t)=>x.jsx(W.div,{custom:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:iP,whileHover:"hover",children:x.jsxs(ZH,{children:[x.jsx(XH,{children:x.jsx(W.div,{variants:tP,whileHover:"hover",children:x.jsx(KH,{children:e.icon})})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:aP,transition:{delay:t*.2+.3},children:x.jsx(QH,{children:e.title})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Z6,transition:{delay:t*.2+.4},children:x.jsx(JH,{children:e.text})})]})},t))})]}),sP=()=>x.jsxs(oP,{id:"all",children:[x.jsx(Ub,{}),x.jsx(LH,{}),x.jsx(Nb,{}),x.jsx(rP,{}),x.jsx(b2,{}),x.jsx(Hy,{}),x.jsx(w2,{})]}),oP=M.div`
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
`,lP=M.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px;
  margin-bottom: 100px;
`,cP=M(Hn)`
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
`;M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
  margin-bottom: 30px;
`;const uP=M.h1`
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
`,dP=M.img`
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
`,fP=M.div`
  line-height: 1.6;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`,hP=M.p`
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
`,pP=M.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  @media (min-width: 768px) {
    padding-top: 100px;
  }

  @media (min-width: 1440px) {
  }
`,mP=M.h2`
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
`,gP=M.div`
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
`,xP=M(Hn)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  @media (min-width: 1440px) {
    width: 425px;
  }
`,vP=M.div`
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
`,yP=M.img`
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
`,wP=M.h3`
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
`,bP=M.p`
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
`,SP=[{id:1,image:A2,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:fh,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:C2,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:T2,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:E2,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:S2,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],CP=e=>[...SP].sort(()=>.5-Math.random()).slice(0,e),TP=()=>{const[e,t]=H.useState([]);return H.useEffect(()=>{t(CP(3))},[]),x.jsxs(pP,{children:[x.jsx(mP,{children:x.jsx("span",{children:" Other news and tips"})}),x.jsx(gP,{children:e.map(i=>x.jsx(xP,{to:i.path,children:x.jsxs(vP,{children:[x.jsx(yP,{src:i.image,alt:i.title}),x.jsxs("div",{children:[x.jsx(wP,{children:i.title}),x.jsx(bP,{children:i.description})]})]})},i.id))})]})},EP=[{id:1,image:A2,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",content:`A refrigerator is one of the hardest-working appliances in your home. A little regular maintenance can help you avoid expensive breakdowns.

Clean the Condenser Coils
Dust and debris on condenser coils make your fridge work harder and increase energy bills. Clean the coils every 6–12 months with a vacuum or coil brush.

Check the Door Seals
Worn or dirty gaskets let cold air escape. Wipe the seals with warm soapy water and replace them if they are cracked or loose.

Replace the Water Filter
If your refrigerator has a water dispenser or ice maker, replace the filter every 6 months. This keeps the water clean and prevents clogs in the system.

Keep Temperatures Set Correctly
The ideal setting is 37°F for the fridge and 0°F for the freezer. Incorrect settings can cause food spoilage or frost buildup.

Pro Tip: If your fridge still isn't cooling properly, it may need professional service. In Thousand Oaks and Ventura County, Airtexno specializes in Sub-Zero, Thermador, Viking, and GE Monogram refrigerators.`},{id:2,image:fh,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",content:`Your oven and range are the heart of your kitchen. Here are five signs that it's time to call a technician.

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

Pro Tip: Airtexno repairs premium brands like Thermador, Wolf, Viking, and GE Monogram in Thousand Oaks and surrounding areas.`},{id:3,image:C2,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",content:`Your washer and dryer handle heavy loads every week. With proper care, they'll last for years.

Clean the Washer Filter
Most washers have a drain filter that catches lint, coins, and debris. Clean it every few months to prevent clogs.

Balance the Washer
If your washer shakes or "walks" across the floor, adjust the leveling legs to keep it stable.

Clean the Dryer Lint Trap
Always remove lint after each load. A clogged lint trap reduces efficiency and can become a fire hazard.

Check the Dryer Vent
At least once a year, clean the vent hose and outside exhaust. Poor airflow causes overheating and long drying times.

Pro Tip: If your washer isn't spinning or your dryer isn't heating, call Airtexno. We service Whirlpool, LG, Samsung, Maytag, and more in Ventura County.`},{id:4,image:T2,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",content:`A dishwasher that won't drain is a common household problem. Here's what to check:

1. Clogged Filter
Food particles often block the filter at the bottom. Remove and rinse it under warm water.

2. Drain Hose Issues
Make sure the hose isn't kinked or clogged. Check for blockages near the sink connection.

3. Air Gap or High Loop
California plumbing code requires a dishwasher air gap or high loop. If it's clogged, water can back up.

4. Broken Drain Pump
If you hear the motor but no water drains, the pump may have failed.

Pro Tip: Airtexno installs and repairs dishwashers in Thousand Oaks, Westlake Village, and Camarillo. We specialize in KitchenAid, Bosch, and GE models.`},{id:5,image:E2,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",content:`Every homeowner faces the repair-or-replace question. Here's how to decide.

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

Pro Tip: Not sure what to do? Airtexno provides honest advice and upfront estimates, so you don't waste money on unnecessary repairs.`},{id:6,image:S2,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",content:`When repairing appliances, you’ll often hear the term OEM parts. Here’s why they matter.

What Are OEM Parts?
OEM stands for Original Equipment Manufacturer. These are the exact parts your appliance was originally built with.

Why Choose OEM Over Aftermarket? <br/>
 • Reliability: Designed to fit perfectly and work as intended.
 <br/> • Warranty Protection: Helps maintain your manufacturer’s warranty.
 <br/> • Longevity: Aftermarket parts may fail sooner or perform inconsistently.

Examples:
Using a genuine Sub-Zero compressor instead of an aftermarket one ensures proper cooling performance. An OEM KitchenAid dishwasher pump will last longer and run quieter.

Pro Tip: At Airtexno, we only use genuine OEM or manufacturer-approved parts for all appliance repairs in Thousand Oaks and Ventura County.`}],AP={hidden:{opacity:0,x:-100},visible:{opacity:1,x:0,transition:{duration:.8,ease:ve}},exit:{opacity:0,x:100,transition:{duration:.5,ease:ve}}},MP={hidden:{opacity:0,y:-30,rotate:-10},visible:{opacity:1,y:0,rotate:0,transition:{duration:.6,ease:qa,delay:.1}},hover:{scale:1.05,x:-5,transition:{duration:.2,ease:ve}},tap:{scale:.95}},jP={hidden:{opacity:0,y:50,scale:.9,textShadow:"0 0 0px rgba(0,0,0,0)"},visible:{opacity:1,y:0,scale:1,textShadow:["0 0 0px rgba(0,0,0,0)","0 0 30px rgba(0,0,0,0.3)","0 0 10px rgba(0,0,0,0.1)"],transition:{duration:1,ease:qa,delay:.2}}},RP={hidden:{opacity:0,scale:1.2,rotate:-5,filter:"blur(10px)"},visible:{opacity:1,scale:1,rotate:0,filter:"blur(0px)",transition:{duration:1.2,ease:qa,delay:.3}}},OP={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ve,delay:.4}}},LP={hidden:{opacity:0,y:20,skewY:2},visible:e=>({opacity:1,y:0,skewY:0,transition:{duration:.6,ease:ve,delay:.5+e*.05}})},Gu=({articleId:e})=>{const{id:t}=uS(),i=e||parseInt(t||"1"),a=EP.find(p=>p.id===i),{scrollY:o}=ko(),c=zn(o,[0,500],[0,50]),f=zn(o,[0,300],[1,.9]);if(H.useEffect(()=>{const p=window.location.hash;if(p){const g=document.querySelector(p);g&&setTimeout(()=>{g.scrollIntoView({behavior:"smooth"})},500)}},[a]),!a)return x.jsx("div",{children:"Article not found"});const h=a.content.split(`

`);return x.jsx(W.div,{variants:AP,initial:"hidden",animate:"visible",exit:"exit",style:{y:c,opacity:f},children:x.jsxs(lP,{id:"ap",children:[x.jsx(W.div,{variants:MP,whileHover:"hover",whileTap:"tap",children:x.jsx(cP,{to:"/tips",children:"← Back to Tips"})}),x.jsx(W.div,{variants:jP,children:x.jsx(uP,{children:a.title})}),x.jsx(W.div,{variants:RP,children:x.jsx(dP,{src:a.image,alt:a.title})}),x.jsx(W.div,{variants:OP,children:x.jsx(fP,{children:h.map((p,g)=>x.jsxs(W.div,{custom:g,variants:LP,initial:"hidden",animate:"visible",children:[x.jsx(hP,{dangerouslySetInnerHTML:{__html:p}}),g<h.length-1&&x.jsx(x.Fragment,{children:x.jsx("br",{})})]},g))})}),x.jsx(W.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:x.jsx(TP,{})})]})})},_P=M.div`
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
`,kP=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  min-width: 100vw;
  min-height: 100vh;
  overflow: auto;
  padding: 1rem;
  padding-top: 100px;

  /* Оптимізація для iOS */
  -webkit-overflow-scrolling: touch;
  transform: translateZ(0);

  @media (min-width: 768px) {
    gap: 2.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 1440px) {
    gap: 3rem;
    padding: 2rem;
    padding-top: 100px;
  }
`,Qx=M.p`
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
`,DP=M.div`
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
`,VP=M.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,zP=M.img`
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
`,HP=M.p`
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
`,PP=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;

  /* Запобігання випадковим клікам на мобільних */
  touch-action: manipulation;
`,Jx=M(Hn)`
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
`,Py=M.button`
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
`,jm=M.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Py}:hover & {
    color: white;
  }
`,NP=M(jm)`
  color: #242424;

  ${Py}:hover & {
    color: white;
  }
`,e3=M.div`
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
`,t3=M.div`
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
`,X6=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  min-width: 100%;
  /* min-height: 100vh; */
  overflow: auto;
  padding: 1rem;
  padding-top: 150px;

  /* Оптимізація для iOS */
  -webkit-overflow-scrolling: touch;
  transform: translateZ(0);

  @media (min-width: 1440px) {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
  }
`,BP=M.img`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    padding-top: 20%;
  }
`,K6=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  width: 100%;
`,Q6=M.div`
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
`,J6=M.div`
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
`,cm=M.img`
  padding: 8px;
  border-radius: 8px;
  object-fit: cover;

  /* Оптимізація для мобільних пристроїв */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
`,ew=M.p`
  font-family: 'Geist', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.25em;
  color: #242424;
  width: 100%;
  margin: 0;
`,tw=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding-top: 10px;

  /* Запобігання випадковим клікам на мобільних */
  touch-action: manipulation;
`;M.button`
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
`;const Z3=M.button`
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
`,IP=M.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  margin: 0;
`,nw=M(IP)`
  color: #242424;

  ${Z3}:hover & {
    color: #fff;
  }
`,$P=M.div`
  width: 553px;
  height: 396px;
`,UP=M.div`
  width: 668px;
  height: 583px;
`;M.div`
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
`;const n3="/assets/fridge-AVDSsy-j.png",iw="/assets/fridge1-CZ9QJ0bU.png",GP="/assets/rating-D_Pf9sUB.svg",FP=()=>{const e=jt({query:"(min-width: 768px) and (max-width: 1439px)"}),t=jt({query:"(min-width: 1440px)"}),i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:ve}}},a={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.7,ease:ve,delay:.1}}},o={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5,ease:ve,delay:.2}}},c={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.4,ease:ve,delay:.3}}},f={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.4,ease:ve}}};return t?x.jsxs(X6,{children:[x.jsxs($P,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:i,children:x.jsxs(Qx,{children:[x.jsx("span",{children:"Refrigeration"})," maintenance ",x.jsx("span",{children:"and "})," setup services"]})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:o,children:x.jsx(ew,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."})}),x.jsxs(tw,{children:[x.jsx(W.div,{variants:c,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:x.jsx(Jx,{to:"/contact#ap",children:x.jsx(jm,{children:"Contact Us"})})}),x.jsx(W.div,{variants:c,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:x.jsx(Z3,{children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(nw,{children:"Call Us"})})})})]}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:o,children:x.jsx(BP,{src:GP,alt:"⭐⭐⭐⭐⭐",loading:"lazy"})})]}),x.jsx(UP,{children:x.jsx(K6,{children:x.jsxs(Q6,{children:[x.jsxs(J6,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:a,children:x.jsx(cm,{src:n3,alt:"Why Airtexno Image 1",className:"main-image",loading:"lazy"})}),x.jsx(e3,{className:"tablet-text-wrapper",children:[{icon:"🔧",text:"Free diagnostics on the day of the request"},{icon:"⏱️",text:"The specialist will arrive at your home in 45 minutes"},{icon:"🚚",text:"Delivery of spare parts from our own warehouse"}].map((h,p)=>x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:f,transition:{delay:p*.1},children:x.jsxs(t3,{children:[x.jsx("span",{style:{fontSize:"20px"},children:h.icon}),x.jsx("p",{children:h.text})]})},p))})]}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:a,children:x.jsx(cm,{src:iw,alt:"Why Airtexno Image 2",className:"secondary-image",loading:"lazy"})})]})})})]}):e?x.jsxs(X6,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:i,children:x.jsxs(Qx,{children:[x.jsx("span",{children:"Refrigeration"})," maintenance ",x.jsx("span",{children:"and "})," setup services"]})}),x.jsxs(K6,{children:[x.jsxs(Q6,{children:[x.jsxs(J6,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:a,children:x.jsx(cm,{src:n3,alt:"Why Airtexno Image 1",className:"main-image",loading:"lazy"})}),x.jsx(e3,{className:"tablet-text-wrapper",children:[{icon:"🔧",text:"Free diagnostics on the day of the request"},{icon:"⏱️",text:"The specialist will arrive in 45 minutes"},{icon:"🚚",text:"Delivery of spare parts from warehouse"}].map((h,p)=>x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:f,transition:{delay:p*.1},children:x.jsxs(t3,{children:[x.jsx("span",{style:{fontSize:"18px"},children:h.icon}),x.jsx("p",{children:h.text})]})},p))})]}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:a,children:x.jsx(cm,{src:iw,alt:"Why Airtexno Image 2",className:"secondary-image",loading:"lazy"})})]}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:o,children:x.jsx(ew,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."})}),x.jsxs(tw,{children:[x.jsx(W.div,{variants:c,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:x.jsx(Jx,{to:"/contact#ap",children:x.jsx(jm,{children:"Contact Us"})})}),x.jsx(W.div,{variants:c,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:x.jsx(Z3,{children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(nw,{children:"Call Us"})})})})]})]})]}):x.jsxs(kP,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:i,children:x.jsxs(Qx,{children:[x.jsx("span",{children:"Refrigeration"})," maintenance ",x.jsx("span",{children:"and "})," setup services"]})}),x.jsxs(DP,{children:[x.jsxs(VP,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:a,children:x.jsx(zP,{src:n3,alt:"Why Airtexno Image 1",loading:"lazy"})}),x.jsx(e3,{children:[{icon:"🔧",text:"Free diagnostics on the day of the request"},{icon:"⏱️",text:"The specialist will arrive in 45 minutes"},{icon:"🚚",text:"Delivery of spare parts from warehouse"}].map((h,p)=>x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:f,transition:{delay:p*.1},children:x.jsxs(t3,{children:[x.jsx("span",{style:{fontSize:"16px"},children:h.icon}),x.jsx("p",{children:h.text})]})},p))})]}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:o,children:x.jsx(HP,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."})}),x.jsxs(PP,{children:[x.jsx(W.div,{variants:c,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:x.jsx(Jx,{to:"/contact#ap",children:x.jsx(jm,{children:"Contact Us"})})}),x.jsx(W.div,{variants:c,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:x.jsx(Py,{children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(NP,{children:"Call Us"})})})})]})]})]})},qP=Lo`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`,YP=M.div`
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
`,WP=M.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,ZP=M.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${qP} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }
`,XP=M.div`
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
`,KP=M.div`
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
`,QP=M.div`
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
`,JP=M.div`
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
`,eN=M.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 14px;
  }

  @media (min-width: 1440px) {
    max-width: 580px;
  }
`,tN=M.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    max-width: 600px;
  }
`,nN=M.p`
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
`,iN=M.h2`
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
`,aN=M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  padding-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`,rN=M.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,sN=M(Hn)`
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
`,oN=M.button`
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
`,lN=()=>{const e=[{title:"Not Freezing / Not Cooling",description:"If your refrigerator can't keep food cold or frozen, our technicians will diagnose the cooling system and restore proper temperature.",price:"from <span>$200</span>"},{title:"Leaking Water",description:"Leaks under or inside your fridge often mean clogged drains or broken valves. We'll quickly locate the problem and repair it with lasting results.",price:"from <span>$225</span>"},{title:"Loud Noises",description:"Buzzing, grinding, or knocking sounds usually come from the fan or compressor. Our team will fix the issue and make your fridge run quietly again.",price:"from <span>$200</span>"},{title:"Won't Turn On",description:"From faulty wiring to failed control boards, we'll troubleshoot and get your refrigerator running again.",price:"from <span> $250 </span>"},{title:"Not Cooling Properly",description:"We check thermostats, heating elements, and compressors to restore temperature control.",price:"from <span> $55 </span> "}],t={hidden:{opacity:0,y:50,scale:.9,rotate:-2},visible:{opacity:1,y:0,scale:1,rotate:0,transition:{duration:.8,ease:ve}}},i={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.6,ease:ve,delay:.2}}},a={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:ve}},hover:{scale:1.05,transition:{duration:.2}},tap:{scale:.95}};return x.jsx(QP,{children:x.jsxs(JP,{children:[x.jsxs(eN,{children:[x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,children:x.jsx(nN,{children:"Typical Refrigerator Issues We Fix"})}),x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.1},children:x.jsxs(iN,{children:["Professional Refrigerator Repair ",x.jsx("span",{children:" and Installation Services"})]})})]}),x.jsxs(tN,{children:[x.jsx(cN,{services:e}),x.jsxs(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:i,children:[x.jsx(aN,{children:"Having issues with your fridge? Call us today — we'll fix it and restore normal operation fast."}),x.jsxs(rN,{children:[x.jsx(W.div,{variants:a,whileHover:"hover",whileTap:"tap",children:x.jsx(sN,{to:"/contact#ap",children:"Contact Us"})}),x.jsx(W.div,{variants:a,whileHover:"hover",whileTap:"tap",transition:{delay:.1},children:x.jsx("a",{href:"tel:+18055002705",children:x.jsx(oN,{children:"Call Us"})})})]})]})]})]})})},cN=({services:e})=>{const{scrollY:t}=ko(),i=zn(t,[0,1e3],[0,200]),a=zn(t,[0,800],[0,1]),o=[...e,...e],c={hidden:h=>({opacity:0,y:100,scale:.8,rotateX:-45,filter:"blur(5px)"}),visible:h=>({opacity:1,y:0,scale:1,rotateX:0,filter:"blur(0px)",transition:{duration:.7,delay:h*.1,ease:qa}}),hover:{scale:1.02,y:-5,rotateY:3,boxShadow:"0 15px 30px rgba(0,0,0,0.15)",transition:{duration:.3,ease:ve}}},f={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:ve,delay:.2}}};return x.jsx(W.div,{style:{y:i,rotate:a},children:x.jsx(YP,{children:x.jsx(WP,{children:x.jsx(ZP,{children:o.map((h,p)=>x.jsx(W.div,{custom:p,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:c,whileHover:"hover",children:x.jsx(XP,{children:x.jsx(W.div,{variants:f,children:x.jsxs(KP,{children:[x.jsx("h3",{children:h.title}),x.jsx("p",{children:h.description}),x.jsx("p",{dangerouslySetInnerHTML:{__html:h.price}})]})})})},p))})})})})},uN="/assets/1-BfPZdbUH.png",dN="/assets/2-zYtOs5TG.png",fN="/assets/3-SBPgwxa7.png",hN="/assets/4-CWtM_DtU.png",pN="/assets/5-DO04-jdm.png",aw=[{img:uN,title:"Built-In Refrigerators",description:"High-end models seamlessly integrated into your kitchen. We specialize in servicing premium brands like Sub-Zero, Viking, Thermador, and Monogram."},{img:dN,title:"Freezers",description:"From upright and chest freezers to commercial units — we fix cooling issues, thermostat problems, and compressor failures."},{img:fN,title:"French Door & Side-by-Side Refrigerators",description:"Modern models with large capacity and dual-door convenience. We repair cooling imbalances, ice maker failures, and electronic control issues."},{img:hN,title:"Wine Coolers",description:"Repairs for temperature fluctuations, thermostat malfunctions, and compressor failures to keep your wine collection safe."},{img:pN,title:"Two-compressor refrigerators",description:"Advanced appliances with independent systems for cooling and freezing, ensuring flexibility and reliability."}],mN=()=>{const e=H.useRef(null),t=jt({query:"(max-width: 767px)"}),i=jt({query:"(min-width: 768px) and (max-width: 1439px)"}),a=jt({query:"(min-width: 1440px)"}),o=t?1:i?2:a?4:2,c=aw.length>o,{scrollY:f}=ko(),h=zn(f,[0,500],[0,80]),p=zn(f,[0,300],[1,1.05]),g={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.8,ease:ve}}},y={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:ve}}},b={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ve}}},S={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.4,ease:ve}}},T={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7,ease:ve}}};return x.jsxs(yN,{children:[x.jsx(W.div,{style:{y:h,scale:p},initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:T,children:x.jsxs(wN,{children:[x.jsx(bN,{children:"Refrigerator Repair"}),x.jsxs(SN,{children:["We repair ",x.jsx("span",{children:" all types "})," of refrigerators"]})]})}),x.jsxs(gN,{children:[x.jsx(Bi,{modules:[sy,ia],onSwiper:E=>e.current=E,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:600,loop:c,slidesPerView:o,centeredSlides:t,touchRatio:1.5,touchAngle:45,simulateTouch:!0,allowTouchMove:!0,resistance:!0,resistanceRatio:.85,children:aw.map((E,L)=>x.jsx(Ii,{children:x.jsx(W.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:y,children:x.jsxs(CN,{children:[x.jsx(W.div,{variants:g,children:x.jsx(TN,{src:E.img,alt:E.title,loading:"lazy",decoding:"async"})}),x.jsx(W.div,{variants:b,children:x.jsxs(EN,{children:[x.jsx(AN,{children:E.title}),x.jsx(MN,{children:E.description})]})})]})})},L))}),x.jsxs(vN,{children:[x.jsx(W.div,{variants:S,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:x.jsx(rw,{onClick:()=>{var E;return(E=e.current)==null?void 0:E.slidePrev()},children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),x.jsx(W.div,{variants:S,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.1},children:x.jsx(rw,{onClick:()=>{var E;return(E=e.current)==null?void 0:E.slideNext()},children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:x.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})]})]})},gN=M.div`
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
`,xN=Lo`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,vN=M.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,rw=M.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: #DBDBD8; /* Сірий колір за замовчуванням */
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  touch-action: manipulation;

  &:hover,
  &:focus,
  &:active {
    background-color: #3098EE; /* Синій колір при ховері/фокусі/активному стані */
    animation: ${xN} 0.6s ease;
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
`,yN=M.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  /* min-height: 100vh; */
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
`,wN=M.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,bN=M.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,SN=M.p`
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
`,CN=M.div`
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
`,TN=M.img`
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
`,EN=M.div`
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
`,AN=M.p`
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
`,MN=M.p`
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
`,jN=()=>x.jsxs(_P,{id:"ap",children:[x.jsx(FP,{}),x.jsx(Ib,{}),x.jsx(lN,{}),x.jsx(mN,{}),x.jsx(b2,{}),x.jsx(Hy,{}),x.jsx(w2,{})]}),Hi=({children:e})=>x.jsx("div",{style:{width:"100%",position:"relative"},children:e}),RN=()=>{const e=ba();return x.jsxs(x.Fragment,{children:[" ",x.jsx(Yv,{mode:"wait",children:x.jsxs(MS,{location:e,children:[x.jsx(Cn,{path:"/",element:x.jsx(TS,{to:"/home"})}),x.jsxs(Cn,{path:"/",element:x.jsx(QL,{}),children:[x.jsx(Cn,{index:!0,element:x.jsx(Hi,{children:x.jsx(Xx,{})})}),x.jsx(Cn,{path:"/home",element:x.jsx(Hi,{children:x.jsx(Xx,{})})}),x.jsx(Cn,{path:"/service",element:x.jsx(Hi,{children:x.jsx(sP,{})})}),x.jsx(Cn,{path:"/about",element:x.jsx(Hi,{children:x.jsx(iH,{})})}),x.jsxs(Cn,{path:"/tips",children:[x.jsx(Cn,{index:!0,element:x.jsx(Hi,{children:x.jsx(bH,{})})}),x.jsx(Cn,{path:"refrigerator-maintenance",element:x.jsx(Hi,{children:x.jsx(Gu,{articleId:1})})}),x.jsx(Cn,{path:"oven-repair-signs",element:x.jsx(Hi,{children:x.jsx(Gu,{articleId:2})})}),x.jsx(Cn,{path:"laundry-appliance-maintenance",element:x.jsx(Hi,{children:x.jsx(Gu,{articleId:3})})}),x.jsx(Cn,{path:"dishwasher-drainage",element:x.jsx(Hi,{children:x.jsx(Gu,{articleId:4})})}),x.jsx(Cn,{path:"repair-vs-replace",element:x.jsx(Hi,{children:x.jsx(Gu,{articleId:5})})}),x.jsx(Cn,{path:"oem-parts",element:x.jsx(Hi,{children:x.jsx(Gu,{articleId:6})})})]}),x.jsx(Cn,{path:"/contact",element:x.jsx(Hi,{children:x.jsx(rH,{})})}),x.jsx(Cn,{path:"/fridge",element:x.jsx(Hi,{children:x.jsx(jN,{})})}),x.jsx(Cn,{path:"*",element:x.jsx(Hi,{children:x.jsx(Xx,{})})})]})]},e.pathname)})]})},$e=e=>typeof e=="string",L0=()=>{let e,t;const i=new Promise((a,o)=>{e=a,t=o});return i.resolve=e,i.reject=t,i},sw=e=>e==null?"":""+e,ON=(e,t,i)=>{e.forEach(a=>{t[a]&&(i[a]=t[a])})},LN=/###/g,ow=e=>e&&e.indexOf("###")>-1?e.replace(LN,"."):e,lw=e=>!e||$e(e),U0=(e,t,i)=>{const a=$e(t)?t.split("."):t;let o=0;for(;o<a.length-1;){if(lw(e))return{};const c=ow(a[o]);!e[c]&&i&&(e[c]=new i),Object.prototype.hasOwnProperty.call(e,c)?e=e[c]:e={},++o}return lw(e)?{}:{obj:e,k:ow(a[o])}},cw=(e,t,i)=>{const{obj:a,k:o}=U0(e,t,Object);if(a!==void 0||t.length===1){a[o]=i;return}let c=t[t.length-1],f=t.slice(0,t.length-1),h=U0(e,f,Object);for(;h.obj===void 0&&f.length;)c=`${f[f.length-1]}.${c}`,f=f.slice(0,f.length-1),h=U0(e,f,Object),h!=null&&h.obj&&typeof h.obj[`${h.k}.${c}`]<"u"&&(h.obj=void 0);h.obj[`${h.k}.${c}`]=i},_N=(e,t,i,a)=>{const{obj:o,k:c}=U0(e,t,Object);o[c]=o[c]||[],o[c].push(i)},Xm=(e,t)=>{const{obj:i,k:a}=U0(e,t);if(i&&Object.prototype.hasOwnProperty.call(i,a))return i[a]},kN=(e,t,i)=>{const a=Xm(e,i);return a!==void 0?a:Xm(t,i)},Gb=(e,t,i)=>{for(const a in t)a!=="__proto__"&&a!=="constructor"&&(a in e?$e(e[a])||e[a]instanceof String||$e(t[a])||t[a]instanceof String?i&&(e[a]=t[a]):Gb(e[a],t[a],i):e[a]=t[a]);return e},Fu=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var DN={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const VN=e=>$e(e)?e.replace(/[&<>"'\/]/g,t=>DN[t]):e;class zN{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const i=this.regExpMap.get(t);if(i!==void 0)return i;const a=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,a),this.regExpQueue.push(t),a}}const HN=[" ",",","?","!",";"],PN=new zN(20),NN=(e,t,i)=>{t=t||"",i=i||"";const a=HN.filter(f=>t.indexOf(f)<0&&i.indexOf(f)<0);if(a.length===0)return!0;const o=PN.getRegExp(`(${a.map(f=>f==="?"?"\\?":f).join("|")})`);let c=!o.test(e);if(!c){const f=e.indexOf(i);f>0&&!o.test(e.substring(0,f))&&(c=!0)}return c},X3=function(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const a=t.split(i);let o=e;for(let c=0;c<a.length;){if(!o||typeof o!="object")return;let f,h="";for(let p=c;p<a.length;++p)if(p!==c&&(h+=i),h+=a[p],f=o[h],f!==void 0){if(["string","number","boolean"].indexOf(typeof f)>-1&&p<a.length-1)continue;c+=p-c+1;break}o=f}return o},Km=e=>e==null?void 0:e.replace("_","-"),BN={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var i,a;(a=(i=console==null?void 0:console[e])==null?void 0:i.apply)==null||a.call(i,console,t)}};class Qm{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,i)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=t||BN,this.options=i,this.debug=i.debug}log(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"log","",!0)}warn(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"warn","",!0)}error(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"error","")}deprecate(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(t,i,a,o){return o&&!this.debug?null:($e(t[0])&&(t[0]=`${a}${this.prefix} ${t[0]}`),this.logger[i](t))}create(t){return new Qm(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Qm(this.logger,t)}}var Lr=new Qm;class M2{constructor(){this.observers={}}on(t,i){return t.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);const o=this.observers[a].get(i)||0;this.observers[a].set(i,o+1)}),this}off(t,i){if(this.observers[t]){if(!i){delete this.observers[t];return}this.observers[t].delete(i)}}emit(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(f=>{let[h,p]=f;for(let g=0;g<p;g++)h(...a)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(f=>{let[h,p]=f;for(let g=0;g<p;g++)h.apply(h,[t,...a])})}}class uw extends M2{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const i=this.options.ns.indexOf(t);i>-1&&this.options.ns.splice(i,1)}getResource(t,i,a){var g,y;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const c=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,f=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let h;t.indexOf(".")>-1?h=t.split("."):(h=[t,i],a&&(Array.isArray(a)?h.push(...a):$e(a)&&c?h.push(...a.split(c)):h.push(a)));const p=Xm(this.data,h);return!p&&!i&&!a&&t.indexOf(".")>-1&&(t=h[0],i=h[1],a=h.slice(2).join(".")),p||!f||!$e(a)?p:X3((y=(g=this.data)==null?void 0:g[t])==null?void 0:y[i],a,c)}addResource(t,i,a,o){let c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const f=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator;let h=[t,i];a&&(h=h.concat(f?a.split(f):a)),t.indexOf(".")>-1&&(h=t.split("."),o=i,i=h[1]),this.addNamespaces(i),cw(this.data,h,o),c.silent||this.emit("added",t,i,a,o)}addResources(t,i,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const c in a)($e(a[c])||Array.isArray(a[c]))&&this.addResource(t,i,c,a[c],{silent:!0});o.silent||this.emit("added",t,i,a)}addResourceBundle(t,i,a,o,c){let f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},h=[t,i];t.indexOf(".")>-1&&(h=t.split("."),o=a,a=i,i=h[1]),this.addNamespaces(i);let p=Xm(this.data,h)||{};f.skipCopy||(a=JSON.parse(JSON.stringify(a))),o?Gb(p,a,c):p={...p,...a},cw(this.data,h,p),f.silent||this.emit("added",t,i,a)}removeResourceBundle(t,i){this.hasResourceBundle(t,i)&&delete this.data[t][i],this.removeNamespaces(i),this.emit("removed",t,i)}hasResourceBundle(t,i){return this.getResource(t,i)!==void 0}getResourceBundle(t,i){return i||(i=this.options.defaultNS),this.getResource(t,i)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const i=this.getDataByLanguage(t);return!!(i&&Object.keys(i)||[]).find(o=>i[o]&&Object.keys(i[o]).length>0)}toJSON(){return this.data}}var Fb={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,i,a,o){return e.forEach(c=>{var f;t=((f=this.processors[c])==null?void 0:f.process(t,i,a,o))??t}),t}};const dw={},fw=e=>!$e(e)&&typeof e!="boolean"&&typeof e!="number";class Jm extends M2{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),ON(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Lr.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const a=this.resolve(t,i);return(a==null?void 0:a.res)!==void 0}extractFromKey(t,i){let a=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let c=i.ns||this.options.defaultNS||[];const f=a&&t.indexOf(a)>-1,h=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!NN(t,a,o);if(f&&!h){const p=t.match(this.interpolator.nestingRegexp);if(p&&p.length>0)return{key:t,namespaces:$e(c)?[c]:c};const g=t.split(a);(a!==o||a===o&&this.options.ns.indexOf(g[0])>-1)&&(c=g.shift()),t=g.join(o)}return{key:t,namespaces:$e(c)?[c]:c}}translate(t,i,a){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,c=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:f,namespaces:h}=this.extractFromKey(t[t.length-1],i),p=h[h.length-1],g=i.lng||this.language,y=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((g==null?void 0:g.toLowerCase())==="cimode"){if(y){const de=i.nsSeparator||this.options.nsSeparator;return o?{res:`${p}${de}${f}`,usedKey:f,exactUsedKey:f,usedLng:g,usedNS:p,usedParams:this.getUsedParamsDetails(i)}:`${p}${de}${f}`}return o?{res:f,usedKey:f,exactUsedKey:f,usedLng:g,usedNS:p,usedParams:this.getUsedParamsDetails(i)}:f}const b=this.resolve(t,i);let S=b==null?void 0:b.res;const T=(b==null?void 0:b.usedKey)||f,E=(b==null?void 0:b.exactUsedKey)||f,L=["[object Number]","[object Function]","[object RegExp]"],P=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,_=!this.i18nFormat||this.i18nFormat.handleAsObject,R=i.count!==void 0&&!$e(i.count),O=Jm.hasDefaultValue(i),N=R?this.pluralResolver.getSuffix(g,i.count,i):"",V=i.ordinal&&R?this.pluralResolver.getSuffix(g,i.count,{ordinal:!1}):"",Y=R&&!i.ordinal&&i.count===0,G=Y&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${N}`]||i[`defaultValue${V}`]||i.defaultValue;let Q=S;_&&!S&&O&&(Q=G);const ie=fw(Q),se=Object.prototype.toString.apply(Q);if(_&&Q&&ie&&L.indexOf(se)<0&&!($e(P)&&Array.isArray(Q))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const de=this.options.returnedObjectHandler?this.options.returnedObjectHandler(T,Q,{...i,ns:h}):`key '${f} (${this.language})' returned an object instead of string.`;return o?(b.res=de,b.usedParams=this.getUsedParamsDetails(i),b):de}if(c){const de=Array.isArray(Q),ye=de?[]:{},Ae=de?E:T;for(const Re in Q)if(Object.prototype.hasOwnProperty.call(Q,Re)){const Ee=`${Ae}${c}${Re}`;O&&!S?ye[Re]=this.translate(Ee,{...i,defaultValue:fw(G)?G[Re]:void 0,joinArrays:!1,ns:h}):ye[Re]=this.translate(Ee,{...i,joinArrays:!1,ns:h}),ye[Re]===Ee&&(ye[Re]=Q[Re])}S=ye}}else if(_&&$e(P)&&Array.isArray(S))S=S.join(P),S&&(S=this.extendTranslation(S,t,i,a));else{let de=!1,ye=!1;!this.isValidLookup(S)&&O&&(de=!0,S=G),this.isValidLookup(S)||(ye=!0,S=f);const Re=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ye?void 0:S,Ee=O&&G!==S&&this.options.updateMissing;if(ye||de||Ee){if(this.logger.log(Ee?"updateKey":"missingKey",g,p,f,Ee?G:S),c){const xe=this.resolve(f,{...i,keySeparator:!1});xe&&xe.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let X=[];const le=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&le&&le[0])for(let xe=0;xe<le.length;xe++)X.push(le[xe]);else this.options.saveMissingTo==="all"?X=this.languageUtils.toResolveHierarchy(i.lng||this.language):X.push(i.lng||this.language);const ue=(xe,B,re)=>{var be;const we=O&&re!==S?re:Re;this.options.missingKeyHandler?this.options.missingKeyHandler(xe,p,B,we,Ee,i):(be=this.backendConnector)!=null&&be.saveMissing&&this.backendConnector.saveMissing(xe,p,B,we,Ee,i),this.emit("missingKey",xe,p,B,S)};this.options.saveMissing&&(this.options.saveMissingPlurals&&R?X.forEach(xe=>{const B=this.pluralResolver.getSuffixes(xe,i);Y&&i[`defaultValue${this.options.pluralSeparator}zero`]&&B.indexOf(`${this.options.pluralSeparator}zero`)<0&&B.push(`${this.options.pluralSeparator}zero`),B.forEach(re=>{ue([xe],f+re,i[`defaultValue${re}`]||G)})}):ue(X,f,G))}S=this.extendTranslation(S,t,i,b,a),ye&&S===f&&this.options.appendNamespaceToMissingKey&&(S=`${p}:${f}`),(ye||de)&&this.options.parseMissingKeyHandler&&(S=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${p}:${f}`:f,de?S:void 0))}return o?(b.res=S,b.usedParams=this.getUsedParamsDetails(i),b):S}extendTranslation(t,i,a,o,c){var g,y;var f=this;if((g=this.i18nFormat)!=null&&g.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...a},a.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init({...a,interpolation:{...this.options.interpolation,...a.interpolation}});const b=$e(t)&&(((y=a==null?void 0:a.interpolation)==null?void 0:y.skipOnVariables)!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let S;if(b){const E=t.match(this.interpolator.nestingRegexp);S=E&&E.length}let T=a.replace&&!$e(a.replace)?a.replace:a;if(this.options.interpolation.defaultVariables&&(T={...this.options.interpolation.defaultVariables,...T}),t=this.interpolator.interpolate(t,T,a.lng||this.language||o.usedLng,a),b){const E=t.match(this.interpolator.nestingRegexp),L=E&&E.length;S<L&&(a.nest=!1)}!a.lng&&o&&o.res&&(a.lng=this.language||o.usedLng),a.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var E=arguments.length,L=new Array(E),P=0;P<E;P++)L[P]=arguments[P];return(c==null?void 0:c[0])===L[0]&&!a.context?(f.logger.warn(`It seems you are nesting recursively key: ${L[0]} in key: ${i[0]}`),null):f.translate(...L,i)},a)),a.interpolation&&this.interpolator.reset()}const h=a.postProcess||this.options.postProcess,p=$e(h)?[h]:h;return t!=null&&(p!=null&&p.length)&&a.applyPostProcessor!==!1&&(t=Fb.handle(p,t,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(a)},...a}:a,this)),t}resolve(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a,o,c,f,h;return $e(t)&&(t=[t]),t.forEach(p=>{if(this.isValidLookup(a))return;const g=this.extractFromKey(p,i),y=g.key;o=y;let b=g.namespaces;this.options.fallbackNS&&(b=b.concat(this.options.fallbackNS));const S=i.count!==void 0&&!$e(i.count),T=S&&!i.ordinal&&i.count===0,E=i.context!==void 0&&($e(i.context)||typeof i.context=="number")&&i.context!=="",L=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);b.forEach(P=>{var _,R;this.isValidLookup(a)||(h=P,!dw[`${L[0]}-${P}`]&&((_=this.utils)!=null&&_.hasLoadedNamespace)&&!((R=this.utils)!=null&&R.hasLoadedNamespace(h))&&(dw[`${L[0]}-${P}`]=!0,this.logger.warn(`key "${o}" for languages "${L.join(", ")}" won't get resolved as namespace "${h}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),L.forEach(O=>{var Y;if(this.isValidLookup(a))return;f=O;const N=[y];if((Y=this.i18nFormat)!=null&&Y.addLookupKeys)this.i18nFormat.addLookupKeys(N,y,O,P,i);else{let G;S&&(G=this.pluralResolver.getSuffix(O,i.count,i));const Q=`${this.options.pluralSeparator}zero`,ie=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(S&&(N.push(y+G),i.ordinal&&G.indexOf(ie)===0&&N.push(y+G.replace(ie,this.options.pluralSeparator)),T&&N.push(y+Q)),E){const se=`${y}${this.options.contextSeparator}${i.context}`;N.push(se),S&&(N.push(se+G),i.ordinal&&G.indexOf(ie)===0&&N.push(se+G.replace(ie,this.options.pluralSeparator)),T&&N.push(se+Q))}}let V;for(;V=N.pop();)this.isValidLookup(a)||(c=V,a=this.getResource(O,P,V,i))}))})}),{res:a,usedKey:o,exactUsedKey:c,usedLng:f,usedNS:h}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,i,a){var c;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(c=this.i18nFormat)!=null&&c.getResource?this.i18nFormat.getResource(t,i,a,o):this.resourceStore.getResource(t,i,a,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],a=t.replace&&!$e(t.replace);let o=a?t.replace:t;if(a&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!a){o={...o};for(const c of i)delete o[c]}return o}static hasDefaultValue(t){const i="defaultValue";for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&i===a.substring(0,i.length)&&t[a]!==void 0)return!0;return!1}}class hw{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Lr.create("languageUtils")}getScriptPartFromCode(t){if(t=Km(t),!t||t.indexOf("-")<0)return null;const i=t.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(t){if(t=Km(t),!t||t.indexOf("-")<0)return t;const i=t.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(t){if($e(t)&&t.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(t)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let i;return t.forEach(a=>{if(i)return;const o=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(o))&&(i=o)}),!i&&this.options.supportedLngs&&t.forEach(a=>{if(i)return;const o=this.getLanguagePartFromCode(a);if(this.isSupportedCode(o))return i=o;i=this.options.supportedLngs.find(c=>{if(c===o)return c;if(!(c.indexOf("-")<0&&o.indexOf("-")<0)&&(c.indexOf("-")>0&&o.indexOf("-")<0&&c.substring(0,c.indexOf("-"))===o||c.indexOf(o)===0&&o.length>1))return c})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(t,i){if(!t)return[];if(typeof t=="function"&&(t=t(i)),$e(t)&&(t=[t]),Array.isArray(t))return t;if(!i)return t.default||[];let a=t[i];return a||(a=t[this.getScriptPartFromCode(i)]),a||(a=t[this.formatLanguageCode(i)]),a||(a=t[this.getLanguagePartFromCode(i)]),a||(a=t.default),a||[]}toResolveHierarchy(t,i){const a=this.getFallbackCodes(i||this.options.fallbackLng||[],t),o=[],c=f=>{f&&(this.isSupportedCode(f)?o.push(f):this.logger.warn(`rejecting language code not found in supportedLngs: ${f}`))};return $e(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&c(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&c(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&c(this.getLanguagePartFromCode(t))):$e(t)&&c(this.formatLanguageCode(t)),a.forEach(f=>{o.indexOf(f)<0&&c(this.formatLanguageCode(f))}),o}}const pw={zero:0,one:1,two:2,few:3,many:4,other:5},mw={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class IN{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=i,this.logger=Lr.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,i){this.rules[t]=i}clearCache(){this.pluralRulesCache={}}getRule(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=Km(t==="dev"?"en":t),o=i.ordinal?"ordinal":"cardinal",c=JSON.stringify({cleanedCode:a,type:o});if(c in this.pluralRulesCache)return this.pluralRulesCache[c];let f;try{f=new Intl.PluralRules(a,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),mw;if(!t.match(/-|_/))return mw;const p=this.languageUtils.getLanguagePartFromCode(t);f=this.getRule(p,i)}return this.pluralRulesCache[c]=f,f}needsPlural(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,i);return a||(a=this.getRule("dev",i)),(a==null?void 0:a.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,a).map(o=>`${i}${o}`)}getSuffixes(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,i);return a||(a=this.getRule("dev",i)),a?a.resolvedOptions().pluralCategories.sort((o,c)=>pw[o]-pw[c]).map(o=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,a);return o?`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o.select(i)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",i,a))}}const gw=function(e,t,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,c=kN(e,t,i);return!c&&o&&$e(i)&&(c=X3(e,i,a),c===void 0&&(c=X3(t,i,a))),c},i3=e=>e.replace(/\$/g,"$$$$");class $N{constructor(){var i;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Lr.create("interpolator"),this.options=t,this.format=((i=t==null?void 0:t.interpolation)==null?void 0:i.format)||(a=>a),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:i,escapeValue:a,useRawValueToEscape:o,prefix:c,prefixEscaped:f,suffix:h,suffixEscaped:p,formatSeparator:g,unescapeSuffix:y,unescapePrefix:b,nestingPrefix:S,nestingPrefixEscaped:T,nestingSuffix:E,nestingSuffixEscaped:L,nestingOptionsSeparator:P,maxReplaces:_,alwaysFormat:R}=t.interpolation;this.escape=i!==void 0?i:VN,this.escapeValue=a!==void 0?a:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=c?Fu(c):f||"{{",this.suffix=h?Fu(h):p||"}}",this.formatSeparator=g||",",this.unescapePrefix=y?"":b||"-",this.unescapeSuffix=this.unescapePrefix?"":y||"",this.nestingPrefix=S?Fu(S):T||Fu("$t("),this.nestingSuffix=E?Fu(E):L||Fu(")"),this.nestingOptionsSeparator=P||",",this.maxReplaces=_||1e3,this.alwaysFormat=R!==void 0?R:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(i,a)=>(i==null?void 0:i.source)===a?(i.lastIndex=0,i):new RegExp(a,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,i,a,o){var T;let c,f,h;const p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},g=E=>{if(E.indexOf(this.formatSeparator)<0){const R=gw(i,p,E,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(R,void 0,a,{...o,...i,interpolationkey:E}):R}const L=E.split(this.formatSeparator),P=L.shift().trim(),_=L.join(this.formatSeparator).trim();return this.format(gw(i,p,P,this.options.keySeparator,this.options.ignoreJSONStructure),_,a,{...o,...i,interpolationkey:P})};this.resetRegExp();const y=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,b=((T=o==null?void 0:o.interpolation)==null?void 0:T.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:E=>i3(E)},{regex:this.regexp,safeValue:E=>this.escapeValue?i3(this.escape(E)):i3(E)}].forEach(E=>{for(h=0;c=E.regex.exec(t);){const L=c[1].trim();if(f=g(L),f===void 0)if(typeof y=="function"){const _=y(t,c,o);f=$e(_)?_:""}else if(o&&Object.prototype.hasOwnProperty.call(o,L))f="";else if(b){f=c[0];continue}else this.logger.warn(`missed to pass in variable ${L} for interpolating ${t}`),f="";else!$e(f)&&!this.useRawValueToEscape&&(f=sw(f));const P=E.safeValue(f);if(t=t.replace(c[0],P),b?(E.regex.lastIndex+=f.length,E.regex.lastIndex-=c[0].length):E.regex.lastIndex=0,h++,h>=this.maxReplaces)break}}),t}nest(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,c,f;const h=(p,g)=>{const y=this.nestingOptionsSeparator;if(p.indexOf(y)<0)return p;const b=p.split(new RegExp(`${y}[ ]*{`));let S=`{${b[1]}`;p=b[0],S=this.interpolate(S,f);const T=S.match(/'/g),E=S.match(/"/g);(((T==null?void 0:T.length)??0)%2===0&&!E||E.length%2!==0)&&(S=S.replace(/'/g,'"'));try{f=JSON.parse(S),g&&(f={...g,...f})}catch(L){return this.logger.warn(`failed parsing options string in nesting for key ${p}`,L),`${p}${y}${S}`}return f.defaultValue&&f.defaultValue.indexOf(this.prefix)>-1&&delete f.defaultValue,p};for(;o=this.nestingRegexp.exec(t);){let p=[];f={...a},f=f.replace&&!$e(f.replace)?f.replace:f,f.applyPostProcessor=!1,delete f.defaultValue;let g=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const y=o[1].split(this.formatSeparator).map(b=>b.trim());o[1]=y.shift(),p=y,g=!0}if(c=i(h.call(this,o[1].trim(),f),f),c&&o[0]===t&&!$e(c))return c;$e(c)||(c=sw(c)),c||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),c=""),g&&(c=p.reduce((y,b)=>this.format(y,b,a.lng,{...a,interpolationkey:o[1].trim()}),c.trim())),t=t.replace(o[0],c),this.regexp.lastIndex=0}return t}}const UN=e=>{let t=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const a=e.split("(");t=a[0].toLowerCase().trim();const o=a[1].substring(0,a[1].length-1);t==="currency"&&o.indexOf(":")<0?i.currency||(i.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?i.range||(i.range=o.trim()):o.split(";").forEach(f=>{if(f){const[h,...p]=f.split(":"),g=p.join(":").trim().replace(/^'+|'+$/g,""),y=h.trim();i[y]||(i[y]=g),g==="false"&&(i[y]=!1),g==="true"&&(i[y]=!0),isNaN(g)||(i[y]=parseInt(g,10))}})}return{formatName:t,formatOptions:i}},qu=e=>{const t={};return(i,a,o)=>{let c=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(c={...c,[o.interpolationkey]:void 0});const f=a+JSON.stringify(c);let h=t[f];return h||(h=e(Km(a),o),t[f]=h),h(i)}};class GN{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Lr.create("formatter"),this.options=t,this.formats={number:qu((i,a)=>{const o=new Intl.NumberFormat(i,{...a});return c=>o.format(c)}),currency:qu((i,a)=>{const o=new Intl.NumberFormat(i,{...a,style:"currency"});return c=>o.format(c)}),datetime:qu((i,a)=>{const o=new Intl.DateTimeFormat(i,{...a});return c=>o.format(c)}),relativetime:qu((i,a)=>{const o=new Intl.RelativeTimeFormat(i,{...a});return c=>o.format(c,a.range||"day")}),list:qu((i,a)=>{const o=new Intl.ListFormat(i,{...a});return c=>o.format(c)})},this.init(t)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(t,i){this.formats[t.toLowerCase().trim()]=i}addCached(t,i){this.formats[t.toLowerCase().trim()]=qu(i)}format(t,i,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const c=i.split(this.formatSeparator);if(c.length>1&&c[0].indexOf("(")>1&&c[0].indexOf(")")<0&&c.find(h=>h.indexOf(")")>-1)){const h=c.findIndex(p=>p.indexOf(")")>-1);c[0]=[c[0],...c.splice(1,h)].join(this.formatSeparator)}return c.reduce((h,p)=>{var b;const{formatName:g,formatOptions:y}=UN(p);if(this.formats[g]){let S=h;try{const T=((b=o==null?void 0:o.formatParams)==null?void 0:b[o.interpolationkey])||{},E=T.locale||T.lng||o.locale||o.lng||a;S=this.formats[g](h,E,{...y,...o,...T})}catch(T){this.logger.warn(T)}return S}else this.logger.warn(`there was no format function for ${g}`);return h},t)}}const FN=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class qN extends M2{constructor(t,i,a){var c,f;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=i,this.services=a,this.languageUtils=a.languageUtils,this.options=o,this.logger=Lr.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(f=(c=this.backend)==null?void 0:c.init)==null||f.call(c,a,o.backend,o)}queueLoad(t,i,a,o){const c={},f={},h={},p={};return t.forEach(g=>{let y=!0;i.forEach(b=>{const S=`${g}|${b}`;!a.reload&&this.store.hasResourceBundle(g,b)?this.state[S]=2:this.state[S]<0||(this.state[S]===1?f[S]===void 0&&(f[S]=!0):(this.state[S]=1,y=!1,f[S]===void 0&&(f[S]=!0),c[S]===void 0&&(c[S]=!0),p[b]===void 0&&(p[b]=!0)))}),y||(h[g]=!0)}),(Object.keys(c).length||Object.keys(f).length)&&this.queue.push({pending:f,pendingCount:Object.keys(f).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(c),pending:Object.keys(f),toLoadLanguages:Object.keys(h),toLoadNamespaces:Object.keys(p)}}loaded(t,i,a){const o=t.split("|"),c=o[0],f=o[1];i&&this.emit("failedLoading",c,f,i),!i&&a&&this.store.addResourceBundle(c,f,a,void 0,void 0,{skipCopy:!0}),this.state[t]=i?-1:2,i&&a&&(this.state[t]=0);const h={};this.queue.forEach(p=>{_N(p.loaded,[c],f),FN(p,t),i&&p.errors.push(i),p.pendingCount===0&&!p.done&&(Object.keys(p.loaded).forEach(g=>{h[g]||(h[g]={});const y=p.loaded[g];y.length&&y.forEach(b=>{h[g][b]===void 0&&(h[g][b]=!0)})}),p.done=!0,p.errors.length?p.callback(p.errors):p.callback())}),this.emit("loaded",h),this.queue=this.queue.filter(p=>!p.done)}read(t,i,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,f=arguments.length>5?arguments[5]:void 0;if(!t.length)return f(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:i,fcName:a,tried:o,wait:c,callback:f});return}this.readingCalls++;const h=(g,y)=>{if(this.readingCalls--,this.waitingReads.length>0){const b=this.waitingReads.shift();this.read(b.lng,b.ns,b.fcName,b.tried,b.wait,b.callback)}if(g&&y&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,i,a,o+1,c*2,f)},c);return}f(g,y)},p=this.backend[a].bind(this.backend);if(p.length===2){try{const g=p(t,i);g&&typeof g.then=="function"?g.then(y=>h(null,y)).catch(h):h(null,g)}catch(g){h(g)}return}return p(t,i,h)}prepareLoading(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();$e(t)&&(t=this.languageUtils.toResolveHierarchy(t)),$e(i)&&(i=[i]);const c=this.queueLoad(t,i,a,o);if(!c.toLoad.length)return c.pending.length||o(),null;c.toLoad.forEach(f=>{this.loadOne(f)})}load(t,i,a){this.prepareLoading(t,i,{},a)}reload(t,i,a){this.prepareLoading(t,i,{reload:!0},a)}loadOne(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const a=t.split("|"),o=a[0],c=a[1];this.read(o,c,"read",void 0,void 0,(f,h)=>{f&&this.logger.warn(`${i}loading namespace ${c} for language ${o} failed`,f),!f&&h&&this.logger.log(`${i}loaded namespace ${c} for language ${o}`,h),this.loaded(t,f,h)})}saveMissing(t,i,a,o,c){var p,g,y,b,S;let f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},h=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((g=(p=this.services)==null?void 0:p.utils)!=null&&g.hasLoadedNamespace&&!((b=(y=this.services)==null?void 0:y.utils)!=null&&b.hasLoadedNamespace(i))){this.logger.warn(`did not save key "${a}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if((S=this.backend)!=null&&S.create){const T={...f,isUpdate:c},E=this.backend.create.bind(this.backend);if(E.length<6)try{let L;E.length===5?L=E(t,i,a,o,T):L=E(t,i,a,o),L&&typeof L.then=="function"?L.then(P=>h(null,P)).catch(h):h(null,L)}catch(L){h(L)}else E(t,i,a,o,h,T)}!t||!t[0]||this.store.addResource(t[0],i,a,o)}}}const xw=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),$e(e[1])&&(t.defaultValue=e[1]),$e(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const i=e[3]||e[2];Object.keys(i).forEach(a=>{t[a]=i[a]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),vw=e=>{var t,i;return $e(e.ns)&&(e.ns=[e.ns]),$e(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),$e(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((i=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:i.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},um=()=>{},YN=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(i=>{typeof e[i]=="function"&&(e[i]=e[i].bind(e))})};class th extends M2{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=vw(t),this.services={},this.logger=Lr,this.modules={external:[]},YN(this),i&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,i),this;setTimeout(()=>{this.init(t,i)},0)}}init(){var t=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(a=i,i={}),i.defaultNS==null&&i.ns&&($e(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=xw();this.options={...o,...this.options,...vw(i)},this.options.interpolation={...o.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const c=y=>y?typeof y=="function"?new y:y:null;if(!this.options.isClone){this.modules.logger?Lr.init(c(this.modules.logger),this.options):Lr.init(null,this.options);let y;this.modules.formatter?y=this.modules.formatter:y=GN;const b=new hw(this.options);this.store=new uw(this.options.resources,this.options);const S=this.services;S.logger=Lr,S.resourceStore=this.store,S.languageUtils=b,S.pluralResolver=new IN(b,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),y&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(S.formatter=c(y),S.formatter.init(S,this.options),this.options.interpolation.format=S.formatter.format.bind(S.formatter)),S.interpolator=new $N(this.options),S.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},S.backendConnector=new qN(c(this.modules.backend),S.resourceStore,S,this.options),S.backendConnector.on("*",function(T){for(var E=arguments.length,L=new Array(E>1?E-1:0),P=1;P<E;P++)L[P-1]=arguments[P];t.emit(T,...L)}),this.modules.languageDetector&&(S.languageDetector=c(this.modules.languageDetector),S.languageDetector.init&&S.languageDetector.init(S,this.options.detection,this.options)),this.modules.i18nFormat&&(S.i18nFormat=c(this.modules.i18nFormat),S.i18nFormat.init&&S.i18nFormat.init(this)),this.translator=new Jm(this.services,this.options),this.translator.on("*",function(T){for(var E=arguments.length,L=new Array(E>1?E-1:0),P=1;P<E;P++)L[P-1]=arguments[P];t.emit(T,...L)}),this.modules.external.forEach(T=>{T.init&&T.init(this)})}if(this.format=this.options.interpolation.format,a||(a=um),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const y=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);y.length>0&&y[0]!=="dev"&&(this.options.lng=y[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(y=>{this[y]=function(){return t.store[y](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(y=>{this[y]=function(){return t.store[y](...arguments),t}});const p=L0(),g=()=>{const y=(b,S)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(S),a(b,S)};if(this.languages&&!this.isInitialized)return y(null,this.t.bind(this));this.changeLanguage(this.options.lng,y)};return this.options.resources||!this.options.initAsync?g():setTimeout(g,0),p}loadResources(t){var c,f;let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:um;const o=$e(t)?t:this.language;if(typeof t=="function"&&(a=t),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return a();const h=[],p=g=>{if(!g||g==="cimode")return;this.services.languageUtils.toResolveHierarchy(g).forEach(b=>{b!=="cimode"&&h.indexOf(b)<0&&h.push(b)})};o?p(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(y=>p(y)),(f=(c=this.options.preload)==null?void 0:c.forEach)==null||f.call(c,g=>p(g)),this.services.backendConnector.load(h,this.options.ns,g=>{!g&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),a(g)})}else a(null)}reloadResources(t,i,a){const o=L0();return typeof t=="function"&&(a=t,t=void 0),typeof i=="function"&&(a=i,i=void 0),t||(t=this.languages),i||(i=this.options.ns),a||(a=um),this.services.backendConnector.reload(t,i,c=>{o.resolve(),a(c)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Fb.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let i=0;i<this.languages.length;i++){const a=this.languages[i];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}}changeLanguage(t,i){var a=this;this.isLanguageChangingTo=t;const o=L0();this.emit("languageChanging",t);const c=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},f=(p,g)=>{g?(c(g),this.translator.changeLanguage(g),this.isLanguageChangingTo=void 0,this.emit("languageChanged",g),this.logger.log("languageChanged",g)):this.isLanguageChangingTo=void 0,o.resolve(function(){return a.t(...arguments)}),i&&i(p,function(){return a.t(...arguments)})},h=p=>{var y,b;!t&&!p&&this.services.languageDetector&&(p=[]);const g=$e(p)?p:this.services.languageUtils.getBestMatchFromCodes(p);g&&(this.language||c(g),this.translator.language||this.translator.changeLanguage(g),(b=(y=this.services.languageDetector)==null?void 0:y.cacheUserLanguage)==null||b.call(y,g)),this.loadResources(g,S=>{f(S,g)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?h(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(h):this.services.languageDetector.detect(h):h(t),o}getFixedT(t,i,a){var o=this;const c=function(f,h){let p;if(typeof h!="object"){for(var g=arguments.length,y=new Array(g>2?g-2:0),b=2;b<g;b++)y[b-2]=arguments[b];p=o.options.overloadTranslationOptionHandler([f,h].concat(y))}else p={...h};p.lng=p.lng||c.lng,p.lngs=p.lngs||c.lngs,p.ns=p.ns||c.ns,p.keyPrefix!==""&&(p.keyPrefix=p.keyPrefix||a||c.keyPrefix);const S=o.options.keySeparator||".";let T;return p.keyPrefix&&Array.isArray(f)?T=f.map(E=>`${p.keyPrefix}${S}${E}`):T=p.keyPrefix?`${p.keyPrefix}${S}${f}`:f,o.t(T,p)};return $e(t)?c.lng=t:c.lngs=t,c.ns=i,c.keyPrefix=a,c}t(){var o;for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(o=this.translator)==null?void 0:o.translate(...i)}exists(){var o;for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(o=this.translator)==null?void 0:o.exists(...i)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const a=i.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,c=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const f=(h,p)=>{const g=this.services.backendConnector.state[`${h}|${p}`];return g===-1||g===0||g===2};if(i.precheck){const h=i.precheck(this,f);if(h!==void 0)return h}return!!(this.hasResourceBundle(a,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||f(a,t)&&(!o||f(c,t)))}loadNamespaces(t,i){const a=L0();return this.options.ns?($e(t)&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{a.resolve(),i&&i(o)}),a):(i&&i(),Promise.resolve())}loadLanguages(t,i){const a=L0();$e(t)&&(t=[t]);const o=this.options.preload||[],c=t.filter(f=>o.indexOf(f)<0&&this.services.languageUtils.isSupportedCode(f));return c.length?(this.options.preload=o.concat(c),this.loadResources(f=>{a.resolve(),i&&i(f)}),a):(i&&i(),Promise.resolve())}dir(t){var o,c;if(t||(t=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!t)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=((c=this.services)==null?void 0:c.languageUtils)||new hw(xw());return i.indexOf(a.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new th(t,i)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:um;const a=t.forkResourceStore;a&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},c=new th(o);if((t.debug!==void 0||t.prefix!==void 0)&&(c.logger=c.logger.clone(t)),["store","services","language"].forEach(h=>{c[h]=this[h]}),c.services={...this.services},c.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},a){const h=Object.keys(this.store.data).reduce((p,g)=>(p[g]={...this.store.data[g]},Object.keys(p[g]).reduce((y,b)=>(y[b]={...p[g][b]},y),{})),{});c.store=new uw(h,o),c.services.resourceStore=c.store}return c.translator=new Jm(c.services,o),c.translator.on("*",function(h){for(var p=arguments.length,g=new Array(p>1?p-1:0),y=1;y<p;y++)g[y-1]=arguments[y];c.emit(h,...g)}),c.init(o,i),c.translator.options=o,c.translator.backendConnector.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},c}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ii=th.createInstance();ii.createInstance=th.createInstance;ii.createInstance;ii.dir;ii.init;ii.loadResources;ii.reloadResources;ii.use;ii.changeLanguage;ii.getFixedT;ii.t;ii.exists;ii.setDefaultNamespace;ii.hasLoadedNamespace;ii.loadNamespaces;ii.loadLanguages;function K3(e){"@babel/helpers - typeof";return K3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K3(e)}function qb(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":K3(XMLHttpRequest))==="object"}function WN(e){return!!e&&typeof e.then=="function"}function ZN(e){return WN(e)?e:Promise.resolve(e)}const XN="modulepreload",KN=function(e){return"/"+e},yw={},QN=function(t,i,a){let o=Promise.resolve();if(i&&i.length>0){let f=function(g){return Promise.all(g.map(y=>Promise.resolve(y).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=f(i.map(g=>{if(g=KN(g),g in yw)return;yw[g]=!0;const y=g.endsWith(".css"),b=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${b}`))return;const S=document.createElement("link");if(S.rel=y?"stylesheet":XN,y||(S.as="script"),S.crossOrigin="",S.href=g,p&&S.setAttribute("nonce",p),document.head.appendChild(S),y)return new Promise((T,E)=>{S.addEventListener("load",T),S.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${g}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return o.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return t().catch(c)})};function ww(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,a)}return i}function bw(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?ww(Object(i),!0).forEach(function(a){JN(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ww(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function JN(e,t,i){return(t=eB(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function eB(e){var t=tB(e,"string");return oc(t)=="symbol"?t:t+""}function tB(e,t){if(oc(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t);if(oc(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function oc(e){"@babel/helpers - typeof";return oc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oc(e)}var Oo=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?Oo=global.fetch:typeof window<"u"&&window.fetch&&(Oo=window.fetch);var nh;qb()&&(typeof global<"u"&&global.XMLHttpRequest?nh=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(nh=window.XMLHttpRequest));var e2;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?e2=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(e2=window.ActiveXObject));typeof Oo!="function"&&(Oo=void 0);if(!Oo&&!nh&&!e2)try{QN(()=>import("./browser-ponyfill-CCmYWu--.js").then(e=>e.b),[]).then(function(e){Oo=e.default}).catch(function(){})}catch{}var Q3=function(t,i){if(i&&oc(i)==="object"){var a="";for(var o in i)a+="&"+encodeURIComponent(o)+"="+encodeURIComponent(i[o]);if(!a)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+a.slice(1)}return t},Sw=function(t,i,a,o){var c=function(p){if(!p.ok)return a(p.statusText||"Error",{status:p.status});p.text().then(function(g){a(null,{status:p.status,data:g})}).catch(a)};if(o){var f=o(t,i);if(f instanceof Promise){f.then(c).catch(a);return}}typeof fetch=="function"?fetch(t,i).then(c).catch(a):Oo(t,i).then(c).catch(a)},Cw=!1,nB=function(t,i,a,o){t.queryStringParams&&(i=Q3(i,t.queryStringParams));var c=bw({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(c["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),a&&(c["Content-Type"]="application/json");var f=typeof t.requestOptions=="function"?t.requestOptions(a):t.requestOptions,h=bw({method:a?"POST":"GET",body:a?t.stringify(a):void 0,headers:c},Cw?{}:f),p=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{Sw(i,h,o,p)}catch(g){if(!f||Object.keys(f).length===0||!g.message||g.message.indexOf("not implemented")<0)return o(g);try{Object.keys(f).forEach(function(y){delete h[y]}),Sw(i,h,o,p),Cw=!0}catch(y){o(y)}}},iB=function(t,i,a,o){a&&oc(a)==="object"&&(a=Q3("",a).slice(1)),t.queryStringParams&&(i=Q3(i,t.queryStringParams));try{var c=nh?new nh:new e2("MSXML2.XMLHTTP.3.0");c.open(a?"POST":"GET",i,1),t.crossDomain||c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.withCredentials=!!t.withCredentials,a&&c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.overrideMimeType&&c.overrideMimeType("application/json");var f=t.customHeaders;if(f=typeof f=="function"?f():f,f)for(var h in f)c.setRequestHeader(h,f[h]);c.onreadystatechange=function(){c.readyState>3&&o(c.status>=400?c.statusText:null,{status:c.status,data:c.responseText})},c.send(a)}catch(p){console&&console.log(p)}},aB=function(t,i,a,o){if(typeof a=="function"&&(o=a,a=void 0),o=o||function(){},Oo&&i.indexOf("file:")!==0)return nB(t,i,a,o);if(qb()||typeof ActiveXObject=="function")return iB(t,i,a,o);o(new Error("No fetch and no xhr implementation found!"))};function pd(e){"@babel/helpers - typeof";return pd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pd(e)}function Tw(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,a)}return i}function a3(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Tw(Object(i),!0).forEach(function(a){Yb(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Tw(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function rB(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sB(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,Wb(a.key),a)}}function oB(e,t,i){return t&&sB(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Yb(e,t,i){return(t=Wb(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Wb(e){var t=lB(e,"string");return pd(t)=="symbol"?t:t+""}function lB(e,t){if(pd(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t);if(pd(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var cB=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(i){return JSON.parse(i)},stringify:JSON.stringify,parsePayload:function(i,a,o){return Yb({},a,o||"")},parseLoadPayload:function(i,a){},request:aB,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Zb=function(){function e(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};rB(this,e),this.services=t,this.options=i,this.allOptions=a,this.type="backend",this.init(t,i,a)}return oB(e,[{key:"init",value:function(i){var a=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=i,this.options=a3(a3(a3({},cB()),this.options||{}),o),this.allOptions=c,this.services&&this.options.reloadInterval){var f=setInterval(function(){return a.reload()},this.options.reloadInterval);pd(f)==="object"&&typeof f.unref=="function"&&f.unref()}}},{key:"readMulti",value:function(i,a,o){this._readAny(i,i,a,a,o)}},{key:"read",value:function(i,a,o){this._readAny([i],i,[a],a,o)}},{key:"_readAny",value:function(i,a,o,c,f){var h=this,p=this.options.loadPath;typeof this.options.loadPath=="function"&&(p=this.options.loadPath(i,o)),p=ZN(p),p.then(function(g){if(!g)return f(null,{});var y=h.services.interpolator.interpolate(g,{lng:i.join("+"),ns:o.join("+")});h.loadUrl(y,f,a,c)})}},{key:"loadUrl",value:function(i,a,o,c){var f=this,h=typeof o=="string"?[o]:o,p=typeof c=="string"?[c]:c,g=this.options.parseLoadPayload(h,p);this.options.request(this.options,i,g,function(y,b){if(b&&(b.status>=500&&b.status<600||!b.status))return a("failed loading "+i+"; status code: "+b.status,!0);if(b&&b.status>=400&&b.status<500)return a("failed loading "+i+"; status code: "+b.status,!1);if(!b&&y&&y.message){var S=y.message.toLowerCase(),T=["failed","fetch","network","load"].find(function(P){return S.indexOf(P)>-1});if(T)return a("failed loading "+i+": "+y.message,!0)}if(y)return a(y,!1);var E,L;try{typeof b.data=="string"?E=f.options.parse(b.data,o,c):E=b.data}catch{L="failed parsing "+i+" to json"}if(L)return a(L,!1);a(null,E)})}},{key:"create",value:function(i,a,o,c,f){var h=this;if(this.options.addPath){typeof i=="string"&&(i=[i]);var p=this.options.parsePayload(a,o,c),g=0,y=[],b=[];i.forEach(function(S){var T=h.options.addPath;typeof h.options.addPath=="function"&&(T=h.options.addPath(S,a));var E=h.services.interpolator.interpolate(T,{lng:S,ns:a});h.options.request(h.options,E,p,function(L,P){g+=1,y.push(L),b.push(P),g===i.length&&typeof f=="function"&&f(y,b)})})}}},{key:"reload",value:function(){var i=this,a=this.services,o=a.backendConnector,c=a.languageUtils,f=a.logger,h=o.language;if(!(h&&h.toLowerCase()==="cimode")){var p=[],g=function(b){var S=c.toResolveHierarchy(b);S.forEach(function(T){p.indexOf(T)<0&&p.push(T)})};g(h),this.allOptions.preload&&this.allOptions.preload.forEach(function(y){return g(y)}),p.forEach(function(y){i.allOptions.ns.forEach(function(b){o.read(y,b,"read",null,null,function(S,T){S&&f.warn("loading namespace ".concat(b," for language ").concat(y," failed"),S),!S&&T&&f.log("loaded namespace ".concat(b," for language ").concat(y),T),o.loaded("".concat(y,"|").concat(b),S,T)})})})}}}])}();Zb.type="backend";const{slice:uB,forEach:dB}=[];function fB(e){return dB.call(uB.call(arguments,1),t=>{if(t)for(const i in t)e[i]===void 0&&(e[i]=t[i])}),e}function hB(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(i=>i.test(e))}const Ew=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,pB=function(e,t){const a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(t);let c=`${e}=${o}`;if(a.maxAge>0){const f=a.maxAge-0;if(Number.isNaN(f))throw new Error("maxAge should be a Number");c+=`; Max-Age=${Math.floor(f)}`}if(a.domain){if(!Ew.test(a.domain))throw new TypeError("option domain is invalid");c+=`; Domain=${a.domain}`}if(a.path){if(!Ew.test(a.path))throw new TypeError("option path is invalid");c+=`; Path=${a.path}`}if(a.expires){if(typeof a.expires.toUTCString!="function")throw new TypeError("option expires is invalid");c+=`; Expires=${a.expires.toUTCString()}`}if(a.httpOnly&&(c+="; HttpOnly"),a.secure&&(c+="; Secure"),a.sameSite)switch(typeof a.sameSite=="string"?a.sameSite.toLowerCase():a.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a.partitioned&&(c+="; Partitioned"),c},Aw={create(e,t,i,a){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};i&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+i*60*1e3)),a&&(o.domain=a),document.cookie=pB(e,t,o)},read(e){const t=`${e}=`,i=document.cookie.split(";");for(let a=0;a<i.length;a++){let o=i[a];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var mB={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return Aw.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:i,cookieMinutes:a,cookieDomain:o,cookieOptions:c}=t;i&&typeof document<"u"&&Aw.create(i,e,a,o,c)}},gB={name:"querystring",lookup(e){var a;let{lookupQuerystring:t}=e,i;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((a=window.location.hash)==null?void 0:a.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const f=o.substring(1).split("&");for(let h=0;h<f.length;h++){const p=f[h].indexOf("=");p>0&&f[h].substring(0,p)===t&&(i=f[h].substring(p+1))}}return i}},xB={name:"hash",lookup(e){var o;let{lookupHash:t,lookupFromHashIndex:i}=e,a;if(typeof window<"u"){const{hash:c}=window.location;if(c&&c.length>2){const f=c.substring(1);if(t){const h=f.split("&");for(let p=0;p<h.length;p++){const g=h[p].indexOf("=");g>0&&h[p].substring(0,g)===t&&(a=h[p].substring(g+1))}}if(a)return a;if(!a&&i>-1){const h=c.match(/\/([a-zA-Z-]*)/g);return Array.isArray(h)?(o=h[typeof i=="number"?i:0])==null?void 0:o.replace("/",""):void 0}}}return a}};let Yu=null;const Mw=()=>{if(Yu!==null)return Yu;try{if(Yu=typeof window<"u"&&window.localStorage!==null,!Yu)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Yu=!1}return Yu};var vB={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&Mw())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:i}=t;i&&Mw()&&window.localStorage.setItem(i,e)}};let Wu=null;const jw=()=>{if(Wu!==null)return Wu;try{if(Wu=typeof window<"u"&&window.sessionStorage!==null,!Wu)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{Wu=!1}return Wu};var yB={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&jw())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:i}=t;i&&jw()&&window.sessionStorage.setItem(i,e)}},wB={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:i,userLanguage:a,language:o}=navigator;if(i)for(let c=0;c<i.length;c++)t.push(i[c]);a&&t.push(a),o&&t.push(o)}return t.length>0?t:void 0}},bB={name:"htmlTag",lookup(e){let{htmlTag:t}=e,i;const a=t||(typeof document<"u"?document.documentElement:null);return a&&typeof a.getAttribute=="function"&&(i=a.getAttribute("lang")),i}},SB={name:"path",lookup(e){var o;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(i)?(o=i[typeof t=="number"?t:0])==null?void 0:o.replace("/",""):void 0}},CB={name:"subdomain",lookup(e){var o,c;let{lookupFromSubdomainIndex:t}=e;const i=typeof t=="number"?t+1:1,a=typeof window<"u"&&((c=(o=window.location)==null?void 0:o.hostname)==null?void 0:c.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(a)return a[i]}};let Xb=!1;try{document.cookie,Xb=!0}catch{}const Kb=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Xb||Kb.splice(1,1);const TB=()=>({order:Kb,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class Qb{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,i)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=fB(i,this.options||{},TB()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=a,this.addDetector(mB),this.addDetector(gB),this.addDetector(vB),this.addDetector(yB),this.addDetector(wB),this.addDetector(bB),this.addDetector(SB),this.addDetector(CB),this.addDetector(xB)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,i=[];return t.forEach(a=>{if(this.detectors[a]){let o=this.detectors[a].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(i=i.concat(o))}}),i=i.filter(a=>a!=null&&!hB(a)).map(a=>this.options.convertDetectedLanguage(a)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}cacheUserLanguage(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;i&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||i.forEach(a=>{this.detectors[a]&&this.detectors[a].cacheUserLanguage(t,this.options)}))}}Qb.type="languageDetector";ii.use(Zb).use(Qb).use(cL).init({supportedLngs:["en","ru","es","uk"],fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const EB=H.createContext(void 0),AB=({children:e})=>{const{i18n:t}=ay(),i=a=>{t.changeLanguage(a).then(()=>{window.location.reload()})};return x.jsx(EB.Provider,{value:{language:t.language,setLanguage:i},children:e})};_9.createRoot(document.getElementById("root")).render(x.jsxs(ct.StrictMode,{children:[x.jsx(KC,{styles:iT}),x.jsx(XS,{basename:"/",children:x.jsx(AB,{children:x.jsx(RN,{})})})]}));export{I1 as c,t2 as g};
